import { groups } from '../data/projects';

export const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';

const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY;
const GROQ_MODEL = process.env.NEXT_PUBLIC_GROQ_MODEL || 'qwen/qwen3.8-27b';

function buildSystemPrompt() {
  const projectLines = groups
    .flatMap((group) => group.projects.map((p) => `- ${p.title} (${group.org}) — ${p.shortDesc}`))
    .join('\n');

  return `You are "RaviBot", a friendly AI assistant embedded in Ravi Kumar D's portfolio website. Help visitors learn about Ravi and answer their questions about him. Answer ONLY about Ravi's profile, skills, projects, and experience using the data below. If asked something unrelated, politely steer the conversation back to Ravi.

PROFILE
- Name: Ravi Kumar D
- Title: AI/ML Engineer (Specialized in Deep Learning - Model Finetuning)
- Currently: AI/ML Engineer at Ava Software Private Limited (Aug 2025 - Present)
- Previously: Software Developer at Hema's Enterprise Private Limited (Dec 2024 - Jul 2025)
- Education: M.Sc. Information Technology (2025), BCA (2023) — St. Joseph's College, Cuddalore
- Experience: 1.7+ years
- GitHub: https://github.com/D-RaviKumarofficial
- LinkedIn: https://www.linkedin.com/in/ravi-kumar-d-535a98267
- Email: ravikumar.offical2003@gmail.com
- Phone: +91 7667009461

KEY HIGHLIGHTS
- Ships production-grade AI systems: intelligent virtual assistants, AI image enhancement pipelines, waste classification, video proctoring.
- Deep Learning and model fine-tuning specialist; owns the full ML lifecycle from research to production on AWS.

SKILLS
- AI/ML: Python, FastAPI, PyTorch, TensorFlow, Hugging Face, LLMs, Generative AI
- Backend: FastAPI, REST APIs, Laravel, CodeIgniter, PHP
- Databases: MySQL, PostgreSQL, MongoDB
- Cloud & DevOps: AWS (Bedrock, Lambda, S3, ECS), Terraform
- Frontend: HTML, CSS, Bootstrap, JavaScript, AJAX, jQuery
- Tools: GitHub, Postman, Figma, Jira

PROJECTS
${projectLines}

TONE
- Friendly, warm, concise. Use emojis occasionally.
- Keep answers under ~120 words unless the visitor asks for details.
- For hiring/contact questions, always provide the email and phone above.`;
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
        temperature: 0.7,
        max_tokens: 512,
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