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
  "What foundation shade suits me?",
  "Build me a morning routine",
  "Which blush would work for me?",
  "Compare these products",
  "What are my undertones?",
];

export function ChatInterface({ messages, profile, onSendMessage, onBack }: ChatInterfaceProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isStreaming = messages.length > 0 && messages[messages.length - 1]?.role === "assistant" &&
    messages[messages.length - 1]?.content === "";

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
    <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 180px)" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <button className="btn-ghost" onClick={onBack} style={{ padding: "0.5rem" }}>
          ← Back
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            width: "44px", height: "44px", borderRadius: "50%",
            background: "var(--gradient-brand)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.25rem",
            boxShadow: "0 0 20px rgba(139,92,246,0.3)",
          }}>
            ✦
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-text-primary)" }}>
              Stella
            </div>
            <div style={{ fontSize: "0.75rem", color: "#22c55e", display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 6px #22c55e" }} />
              AI Beauty Advisor · Online
            </div>
          </div>
        </div>
        {profile && (
          <div style={{ marginLeft: "auto", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {profile.skinToneDepth && (
              <span className="profile-tag">{profile.skinToneDepth}</span>
            )}
            {profile.undertone && (
              <span className="profile-tag">{profile.undertone} undertone</span>
            )}
          </div>
        )}
      </div>

      {/* Messages */}
      <div style={{
        flex: 1,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        paddingRight: "0.25rem",
      }}>
        {/* Welcome message if empty */}
        {messages.length === 0 && (
          <div className="message-assistant animate-fade-in-up" style={{ maxWidth: "90%" }}>
            <p>
              Hi! I&apos;m Stella, your personal AI beauty advisor. ✨
              {profile
                ? ` I can see your ${profile.skinToneDepth ?? "skin"} tone profile is ready. `
                : " "}
              Ask me anything about products, shades, routines, or comparisons — I&apos;m here to help!
            </p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={msg.id}
            className={msg.role === "user" ? "message-user" : "message-assistant"}
            style={{ animationDelay: `${i * 30}ms`, animation: "fade-in-up 0.3s ease-out forwards" }}
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
        <div ref={messagesEndRef} />
      </div>

      {/* Quick replies */}
      {messages.length === 0 && (
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1rem", marginBottom: "1rem" }}>
          {QUICK_REPLIES.map(reply => (
            <button
              key={reply}
              onClick={() => onSendMessage(reply)}
              style={{
                padding: "0.45rem 0.875rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--color-border-default)",
                background: "var(--color-surface-card)",
                color: "var(--color-text-secondary)",
                fontSize: "0.8125rem",
                cursor: "pointer",
                transition: "all 0.15s ease",
                fontWeight: 500,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)";
                e.currentTarget.style.color = "var(--color-violet-300)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--color-border-default)";
                e.currentTarget.style.color = "var(--color-text-secondary)";
              }}
            >
              {reply}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
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
          placeholder="Ask Stella anything about your beauty profile..."
          onKeyDown={handleKeyDown}
          style={{ flex: 1 }}
        />
        <button
          className="btn-primary"
          id="chat-send-btn"
          onClick={handleSend}
          style={{ padding: "0.75rem 1.25rem", flexShrink: 0 }}
        >
          Send ✦
        </button>
      </div>
    </div>
  );
}
