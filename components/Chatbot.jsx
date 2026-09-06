'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import chatbotData from '../data/chatbotData';
import { streamAssistantReply } from '../lib/groq';
import '../styles/Chatbot.css';

const BOT = 'bot';
const USER = 'user';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: BOT, text: chatbotData.start.message }
  ]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const bottomRef = useRef(null);
  const abortRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  // Cleanup on unmount — abort any in-flight streaming request
  useEffect(() => () => abortRef.current?.abort(), []);

  const appendToken = useCallback((token) => {
    setMessages((prev) => {
      const updated = [...prev];
      const last = updated[updated.length - 1];
      updated[updated.length - 1] = { ...last, text: (last.text || '') + token };
      return updated;
    });
  }, []);

  const sendMessage = useCallback(async (rawText) => {
    const text = (rawText || '').trim();
    if (!text || streaming) return;

    setInput('');

    const history = messages
      .filter((m) => m.text)
      .map((m) => ({
        role: m.role === BOT ? 'assistant' : 'user',
        content: m.text,
      }))
      .slice(-20);

    setMessages((prev) => [
      ...prev,
      { role: USER, text },
      { role: BOT, text: '', streaming: true },
    ]);
    setStreaming(true);

    abortRef.current = new AbortController();
    try {
      await streamAssistantReply(history, {
        onToken: appendToken,
        signal: abortRef.current.signal,
      });
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { ...updated[updated.length - 1], streaming: false };
        return updated;
      });
    } catch (err) {
      if (err.name === 'AbortError') return;
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: BOT, text: `⚠️ ${err.message}`, streaming: false };
        return updated;
      });
    } finally {
      setStreaming(false);
    }
  }, [messages, streaming, appendToken]);

  const handleKey = (e) => {
    if (e.key === 'Enter') sendMessage(input);
  };

  return (
    <div className="chatbot-wrapper">
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>💬 Chat with Ravi's Assitant</span>
            <button onClick={() => setOpen(false)} className="chatbot-close">✕</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-msg ${msg.role}`}>
                <span>{msg.text}{msg.streaming && <span className="chatbot-cursor">▋</span>}</span>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div className="chatbot-input-row">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type a message..."
              className="chatbot-input"
            />
            <button onClick={() => sendMessage(input)} className="chatbot-send" disabled={streaming}>➤</button>
          </div>
        </div>
      )}
      <button className="chatbot-fab" onClick={() => setOpen(o => !o)} aria-label="Open chat">
        {open ? '✕' : '🤖'}
      </button>
    </div>
  );
}