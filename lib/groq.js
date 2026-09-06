import { buildSystemPrompt } from '../data/systemPrompt';

export const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';

const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY;
const GROQ_MODEL = process.env.NEXT_PUBLIC_GROQ_MODEL || 'qwen/qwen3.8-27b';

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