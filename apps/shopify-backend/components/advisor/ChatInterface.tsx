"use client";

import { useRef, useEffect } from "react";
import type { ChatMessage, BeautyProfile } from "@stylique/types";

interface ChatInterfaceProps {
  messages: ChatMessage[];
  profile: BeautyProfile | null;
  onSendMessage: (message: string) => void;
  onBack: () => void;
}

const QUICK_REPLIES = [
  "Find my foundation shade",
  "Build a morning routine",
  "What are my undertones?",
  "Recommend a blush for me"
];

export function ChatInterface({ messages, profile, onSendMessage, onBack }: ChatInterfaceProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const val = inputRef.current?.value.trim();
    if (!val) return;
    onSendMessage(val);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Messages Area */}
      <div style={{
        flex: 1,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        padding: "0.5rem 0",
      }}>
        {messages.map((msg, i) => (
          <div
            key={msg.id}
            className={msg.role === "user" ? "message-user" : "message-assistant"}
            style={{ 
              animationDelay: `${Math.min(i * 30, 300)}ms`, 
              animation: "fade-in-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards" 
            }}
          >
            {msg.role === "assistant" && msg.content === "" ? (
              <div style={{ display: "flex", gap: "4px", alignItems: "center", height: "20px", padding: "0 4px" }}>
                <div className="typing-dot" />
                <div className="typing-dot" />
                <div className="typing-dot" />
              </div>
            ) : (
              <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>{msg.content}</p>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} style={{ float:"left", clear: "both" }} />
      </div>

      {/* Quick Replies (Only when empty or 1 message) */}
      {messages.length <= 1 && (
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem", marginTop: "1rem" }}>
          {QUICK_REPLIES.map(reply => (
            <button
              key={reply}
              onClick={() => onSendMessage(reply)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--color-border-subtle)",
                background: "rgba(255,255,255,0.03)",
                color: "var(--color-text-secondary)",
                fontSize: "0.8125rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontWeight: 500,
                backdropFilter: "blur(8px)"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--color-violet-500)";
                e.currentTarget.style.color = "var(--color-text-primary)";
                e.currentTarget.style.background = "rgba(139,92,246,0.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--color-border-subtle)";
                e.currentTarget.style.color = "var(--color-text-secondary)";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              {reply}
            </button>
          ))}
        </div>
      )}

      {/* Input Box */}
      <div style={{
        display: "flex",
        gap: "0.75rem",
        marginTop: "auto",
        paddingTop: "1rem",
        borderTop: "1px solid var(--color-border-subtle)",
      }}>
        <input
          ref={inputRef}
          className="input-base"
          id="chat-input"
          placeholder="Ask Stella..."
          onKeyDown={handleKeyDown}
          autoComplete="off"
          style={{ flex: 1, padding: "0.875rem 1.25rem" }}
        />
        <button
          className="btn-primary"
          id="chat-send-btn"
          onClick={handleSend}
          style={{ 
            width: "3rem", height: "3rem", 
            padding: 0, 
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, borderRadius: "50%"
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
