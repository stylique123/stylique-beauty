"use client";

import { useEffect, useRef, useState } from "react";
import { useStyliqueOS } from "./StyliqueOSProvider";
import type { ChatMessage } from "@stylique/types";

export function AIBeautyAdvisor() {
  const { isAdvisorOpen, setIsAdvisorOpen, messages, setMessages, setActiveDialog, profile } = useStyliqueOS();
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAdvisorOpen && messages.length === 0) {
      setMessages([{
        id: `msg-${Date.now()}`,
        role: "assistant",
        content: "Hi! I'm Stella, your beauty advisor. Are you looking to find your perfect shade, or build a complete routine today?",
        timestamp: new Date()
      }]);
    }
  }, [isAdvisorOpen, messages.length, setMessages]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    try {
      // Add a slight typing delay effect
      await new Promise(r => setTimeout(r, 600));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          profile,
          faceAnalysis: null,
          goal: null,
          previousMessages: messages,
        })
      });

      const data = await res.json();
      
      setMessages(prev => [...prev, {
        id: `msg-${Date.now()+1}`,
        role: "assistant",
        content: data.reply,
        timestamp: new Date()
      }]);

      if (data.action === "open_tryon") {
        setTimeout(() => setActiveDialog("try_on"), 1500);
      } else if (data.action === "open_routine") {
        setTimeout(() => setActiveDialog("routine_builder"), 1500);
      }

    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, {
        id: `msg-${Date.now()+1}`,
        role: "assistant",
        content: "I'm having a little trouble connecting. Could you say that again?",
        timestamp: new Date()
      }]);
    }
  };

  return (
    <div style={{
      position: "fixed", bottom: "24px", right: "24px", zIndex: 9999,
      display: "flex", flexDirection: "column", alignItems: "flex-end",
    }}>
      {/* Chat Window */}
      {isAdvisorOpen && (
        <div className="glass-premium animate-fade-in-up" style={{
          width: "380px", height: "500px", maxHeight: "calc(100vh - 100px)",
          marginBottom: "16px", borderRadius: "1.5rem", overflow: "hidden",
          display: "flex", flexDirection: "column",
        }}>
          {/* Header */}
          <div style={{ padding: "1rem", background: "var(--gradient-brand)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>✦</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "white" }}>Stella</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.8)" }}>Stylique AI Advisor</div>
              </div>
            </div>
            <button onClick={() => setIsAdvisorOpen(false)} style={{ background: "transparent", border: "none", color: "white", cursor: "pointer" }}>✕</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem", background: "var(--color-surface-base)" }}>
            {messages.map((m) => (
              <div key={m.id} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "85%", padding: "0.75rem 1rem", borderRadius: "1rem",
                  background: m.role === "user" ? "var(--color-violet-500)" : "var(--color-surface-overlay)",
                  color: m.role === "user" ? "white" : "var(--color-text-primary)",
                  border: m.role === "user" ? "none" : "1px solid var(--color-border-subtle)",
                  borderBottomRightRadius: m.role === "user" ? "0" : "1rem",
                  borderBottomLeftRadius: m.role === "assistant" ? "0" : "1rem",
                  fontSize: "0.875rem", lineHeight: 1.5
                }}>
                  {m.content}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div style={{ padding: "1rem", background: "var(--color-surface-overlay)", borderTop: "1px solid var(--color-border-subtle)" }}>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Stella..."
                style={{ flex: 1, padding: "0.75rem 1rem", borderRadius: "2rem", border: "1px solid var(--color-border-subtle)", background: "var(--color-surface-base)", color: "var(--color-text-primary)", outline: "none" }}
              />
              <button 
                onClick={handleSend}
                style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--color-violet-500)", border: "none", color: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                ↑
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setIsAdvisorOpen(!isAdvisorOpen)}
        style={{
          width: "64px", height: "64px", borderRadius: "50%",
          background: "var(--gradient-brand)", border: "none", color: "white",
          fontSize: "24px", display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", boxShadow: "0 8px 32px rgba(139,92,246,0.4)",
          transform: isAdvisorOpen ? "scale(0.9)" : "scale(1)", transition: "all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)"
        }}
      >
        {isAdvisorOpen ? "✕" : "✦"}
      </button>
    </div>
  );
}
