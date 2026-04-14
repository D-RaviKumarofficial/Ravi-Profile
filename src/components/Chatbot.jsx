import React, { useState, useRef, useEffect, useCallback } from 'react';
import chatbotData from '../data/chatbotData';
import '../styles/Chatbot.css';

const BOT = 'bot';
const USER = 'user';
const STREAM_DELAY = 18; // ms per character

function getTimeGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}

const GREETINGS = [
  'hi', 'hello', 'hey', 'hii', 'helo',
  'good morning', 'good afternoon', 'good evening', 'good night',
  'how are you', 'how r you', 'how are u', 'whats up', "what's up", 'sup'
];

function getGreetingResponse(text) {
  const t = text.toLowerCase().trim();
  const matched = GREETINGS.some(g => t === g || t.startsWith(g));
  if (!matched) return null;
  const tod = getTimeGreeting();
  if (t.includes('how are you') || t.includes('how r you') || t.includes('how are u')) {
    return `${tod}! 😊 I'm doing great and ready to help. I'm here to tell you all about Ravi Kumar D — his skills, projects, and experience. How can I assist you?`;
  }
  return `${tod}! 👋 Great to have you here. I'm Ravi's AI assistant — your go-to guide for everything about Ravi Kumar D.\n\nFeel free to explore his skills, projects, or experience. Want to reach him directly?\n📧 ravikumar.offical2003@gmail.com\n📞 7667009461\n\nHow can I help you today?`;
}

function getResponse(input) {
  const text = input.toLowerCase().trim();

  const greetingReply = getGreetingResponse(text);
  if (greetingReply) {
    return { message: greetingReply, options: chatbotData.start.options };
  }

  // Exact key match (button clicks)
  if (chatbotData.nodes[input]) {
    return { message: chatbotData.nodes[input].message, options: chatbotData.nodes[input].options };
  }

  // Pattern match (free-typed input)
  for (const node of Object.values(chatbotData.nodes)) {
    if (node.patterns?.some(p => p.test(text))) {
      return { message: node.message, options: node.options };
    }
  }

  return { message: chatbotData.fallback.answer, options: chatbotData.start.options };
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: BOT, text: chatbotData.start.message, options: chatbotData.start.options }
  ]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const bottomRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const streamBotMessage = useCallback((fullText, options) => {
    setStreaming(true);
    // Add empty bot message placeholder
    setMessages(prev => [...prev, { role: BOT, text: '', options: null, streaming: true }]);

    let i = 0;
    const tick = () => {
      i++;
      setMessages(prev => {
        const updated = [...prev];
        const last = { ...updated[updated.length - 1], text: fullText.slice(0, i) };
        updated[updated.length - 1] = last;
        return updated;
      });
      if (i < fullText.length) {
        streamRef.current = setTimeout(tick, STREAM_DELAY);
      } else {
        // Streaming done — attach options
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { ...updated[updated.length - 1], options, streaming: false };
          return updated;
        });
        setStreaming(false);
      }
    };
    streamRef.current = setTimeout(tick, STREAM_DELAY);
  }, []);

  const sendMessage = useCallback((text) => {
    if (!text.trim() || streaming) return;
    const response = getResponse(text);
    setMessages(prev => [...prev, { role: USER, text }]);
    setInput('');
    streamBotMessage(response.message, response.options);
  }, [streaming, streamBotMessage]);

  const handleKey = (e) => {
    if (e.key === 'Enter') sendMessage(input);
  };

  // Cleanup on unmount
  useEffect(() => () => clearTimeout(streamRef.current), []);

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
                {msg.options && !msg.streaming && (
                  <div className="chatbot-options">
                    {msg.options.map(opt => (
                      <button key={opt} onClick={() => sendMessage(opt)} className="chatbot-option-btn" disabled={streaming}>
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
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
