import { groups } from '../data/projects';

export const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';

const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY;
const GROQ_MODEL = process.env.NEXT_PUBLIC_GROQ_MODEL || 'qwen/qwen3.8-27b';

function buildSystemPrompt() {
  const projectLines = groups
    .flatMap((group) => group.projects.map((p) => `- ${p.title}: ${p.shortDesc}`))
    .join('\n');

  return `You are RaviBot on Ravi Kumar D's portfolio. Answer ONLY from the data below; if off-topic, steer back briefly. Plain text, no markdown.

RAVI KUMAR D — AI/ML Engineer, Deep Learning & Model Finetuning, 1.7+ yrs
- Current: AI/ML Engineer @ Ava Software Pvt Ltd (Aug 2025 - present)
- Past: Software Developer @ Hema's Enterprise (Dec 2024 - Jul 2025)
- Education: M.Sc IT (2025), BCA (2023) — St. Joseph's College, Cuddalore
- Contact: email ravikumar.offical2003@gmail.com | phone +91 7667009461
- Links: github.com/D-RaviKumarofficial | linkedin.com/in/ravi-kumar-d-535a98267

SKILLS: Python, PyTorch, TensorFlow, Hugging Face, LLMs, FastAPI, REST APIs, MySQL, PostgreSQL, MongoDB, AWS (Bedrock, Lambda, S3, ECS), Terraform, Laravel, PHP, HTML/CSS/JS, AJAX, GitHub, Postman

PROJECTS
${projectLines}

RULES
- Who-is-Ravi / intro questions: answer immediately with name, title, current company, 1-line bio (see EXAMPLE).
- Unwanted/off-topic/gibberish/non-Ravi questions: politely decline, then list what you CAN discuss (profile, skills, projects, contact). Never answer them.
- Never repeat the opening greeting; answer directly.
- Hiring/contact questions: always give email + phone above.
- Max ~120 words unless asked for detail. Occasional emoji.
`;
}

export async function streamAssistantReply(historyMessages, { onToken, signal } = {}) {
  if (!GROQ_API_KEY) {
    throw new Error(
      '🧩 Groq is not configured yet. Add NEXT_PUBLIC_GROQ_API_KEY to your .env.local file.'
    );
  }

  const messages = [
    { role: 'system', content: buildSystemPrompt() },
    ...historyMessages,
  ];

  let res;
  try {
    res = await fetch(GROQ_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages,
        stream: true,
        temperature: 0.5,
        max_tokens: 1024,
      }),
      signal,
    });
  } catch (err) {
    if (err.name === 'AbortError') throw err;
    throw new Error('Network error — could not reach the Groq API.');
  }

  if (!res.ok) {
    let detail = '';
    try {
      const data = await res.json();
      detail = data?.error?.message || '';
    } catch {
      /* ignore parse failure */
    }
    throw new Error(`Groq API ${res.status}${detail ? `: ${detail}` : ''}`);
  }

  if (!res.body) {
    throw new Error('Groq API returned an empty response.');
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  let fullText = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() ?? '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith('data:')) continue;

      const payload = trimmed.slice(5).trim();
      if (payload === '[DONE]') return fullText;

      try {
        const json = JSON.parse(payload);
        const token = json.choices?.[0]?.delta?.content ?? '';
        if (token) {
          fullText += token;
          onToken?.(token);
        }
      } catch {
        /* ignore malformed chunk */
      }
    }
  }

  return fullText;
}