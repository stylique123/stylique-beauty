"use client";

import Link from "next/link";
import type { BeautyProfile } from "@stylique/types";

interface AdvisorHeaderProps {
  step: string;
  profile: BeautyProfile | null;
  onOpenChat: () => void;
}

export function AdvisorHeader({ step, profile, onOpenChat }: AdvisorHeaderProps) {
  return (
    <header
      className="glass"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "64px",
        borderBottom: "1px solid var(--color-border-subtle)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          width: "100%",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: "var(--gradient-brand)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              color: "white",
            }}
          >
            ✦
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1rem",
              background: "var(--gradient-brand)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Stylique
          </span>
        </Link>

        {/* Advisor label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 8px #22c55e",
            }}
          />
          <span
            style={{
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "var(--color-text-secondary)",
            }}
          >
            Stella is online
          </span>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {profile && step !== "chat" && (
            <button
              className="btn-ghost"
              onClick={onOpenChat}
              id="header-chat-btn"
              style={{ fontSize: "0.8125rem" }}
            >
              💬 Ask Stella
            </button>
          )}
          {profile && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.3rem 0.75rem",
                background: "rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.2)",
                borderRadius: "var(--radius-full)",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "var(--gradient-brand)",
                  fontSize: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                ✦
              </div>
              <span style={{ fontSize: "0.75rem", color: "var(--color-violet-300)", fontWeight: 600 }}>
                Profile Active
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
