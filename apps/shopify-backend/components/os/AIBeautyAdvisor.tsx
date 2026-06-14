"use client";

import { useEffect, useRef, useState } from "react";
import { useStyliqueOS } from "./StyliqueOSProvider";
import type { ChatMessage } from "@stylique/types";
import { ChatInterface } from "../advisor/ChatInterface";

export function AIBeautyAdvisor() {
  const { isAdvisorOpen, setIsAdvisorOpen, messages, setMessages, setActiveDialog, profile } = useStyliqueOS();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isAdvisorOpen && messages.length === 0) {
      setMessages([{
        id: `msg-${Date.now()}`,
        role: "assistant",
        content: "Hi! I'm Stella, your AI beauty advisor. ✨ Are you looking to find your perfect shade, or build a complete routine today?",
        timestamp: new Date()
      }]);
    }
  }, [isAdvisorOpen, messages.length, setMessages]);

  const handleSendMessage = async (input: string) => {
    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: input,
      timestamp: new Date()
    };
    
    // Add user message AND an empty assistant message to show typing indicator
    setMessages(prev => [...prev, userMsg, {
      id: `msg-${Date.now()+1}`,
      role: "assistant",
      content: "", // Empty content triggers typing indicator
      timestamp: new Date()
    }]);

    try {
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
      
      // Replace the typing indicator with the real response
      setMessages(prev => {
        const newMsgs = [...prev];
        newMsgs[newMsgs.length - 1].content = data.reply;
        return newMsgs;
      });

      if (data.action === "open_tryon") {
        setTimeout(() => setActiveDialog("try_on"), 1500);
      } else if (data.action === "open_routine") {
        setTimeout(() => setActiveDialog("routine_builder"), 1500);
      }

    } catch (err) {
      console.error(err);
      // Replace typing indicator with error message
      setMessages(prev => {
        const newMsgs = [...prev];
        newMsgs[newMsgs.length - 1].content = "I'm having a little trouble connecting to my AI brain. Could you say that again?";
        return newMsgs;
      });
    }
  };

  return (
    <div style={{
      position: "fixed", bottom: "24px", right: "24px", zIndex: 9999,
      display: "flex", flexDirection: "column", alignItems: "flex-end",
    }}>
      {/* Chat Window Container */}
      {isAdvisorOpen && (
        <div className="glass-premium animate-fade-in-up" style={{
          width: "400px", height: "550px", maxHeight: "calc(100vh - 120px)",
          marginBottom: "20px", borderRadius: "1.5rem",
          display: "flex", flexDirection: "column",
          boxShadow: "0 24px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)",
          overflow: "hidden"
        }}>
          {/* Header */}
          <div style={{ 
            padding: "1.25rem", 
            background: "var(--color-surface-overlay)", 
            display: "flex", alignItems: "center", justifyContent: "space-between",
            borderBottom: "1px solid var(--color-border-subtle)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ 
                width: "40px", height: "40px", borderRadius: "50%", 
                background: "var(--gradient-brand)", 
                display: "flex", alignItems: "center", justifyContent: "center", 
                boxShadow: "0 0 20px rgba(139,92,246,0.4)", overflow: "hidden"
              }}>
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Stella" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--color-text-primary)", fontFamily: "var(--font-display)" }}>Stella</div>
                <div style={{ fontSize: "0.75rem", color: "#22c55e", display: "flex", alignItems: "center", gap: "0.375rem", marginTop: "0.125rem" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 6px #22c55e" }} />
                  AI Beauty Advisor
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsAdvisorOpen(false)} 
              className="btn-ghost"
              style={{ width: "32px", height: "32px", padding: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Messages Area (Delegated to ChatInterface) */}
          <div style={{ flex: 1, padding: "0 1.25rem 1.25rem", display: "flex", flexDirection: "column", overflow: "hidden" }}>
             <ChatInterface 
                messages={messages} 
                profile={profile} 
                onSendMessage={handleSendMessage} 
                onBack={() => setIsAdvisorOpen(false)} 
             />
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setIsAdvisorOpen(!isAdvisorOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: "64px", height: "64px", borderRadius: "50%",
          background: "var(--gradient-brand)", border: "none", color: "white",
          fontSize: "28px", display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", 
          boxShadow: isHovered ? "0 12px 36px rgba(139,92,246,0.6)" : "0 8px 24px rgba(139,92,246,0.4)",
          transform: isAdvisorOpen ? "scale(0.9) rotate(90deg)" : (isHovered ? "scale(1.05)" : "scale(1)"), 
          transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
        }}
      >
        {isAdvisorOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Stella" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
        )}
      </button>
    </div>
  );
}
