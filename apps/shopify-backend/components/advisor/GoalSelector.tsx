"use client";

import { SHOPPER_GOALS } from "@stylique/beauty-engine";
import type { ShopperGoal } from "@stylique/types";

interface GoalSelectorProps {
  onSelect: (goal: ShopperGoal) => void;
}

export function GoalSelector({ onSelect }: GoalSelectorProps) {
  return (
    <div className="animate-fade-in-up">
      <div style={{ marginBottom: "2rem", textAlign: "center" }}>
        <div className="badge badge-violet" style={{ marginBottom: "0.75rem" }}>
          Step 1 of 3
        </div>
        <h2 className="text-heading-2" style={{ marginBottom: "0.5rem" }}>
          What would you like help with today?
        </h2>
        <p className="text-body-lg">
          Choose a goal and I&apos;ll guide you from there.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1rem",
        }}
      >
        {SHOPPER_GOALS.map((goal, i) => (
          <button
            key={goal.id}
            id={`goal-${goal.id}`}
            onClick={() => onSelect(goal.id)}
            className="card card-hover"
            style={{
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.75rem",
              cursor: "pointer",
              background: "var(--color-surface-card)",
              border: "1px solid var(--color-border-subtle)",
              borderRadius: "var(--radius-xl)",
              textAlign: "left",
              transition: "all 0.25s ease",
              animationDelay: `${i * 60}ms`,
              animation: "fade-in-up 0.5s ease-out forwards",
              opacity: 0,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(139,92,246,0.4)";
              el.style.background =
                "linear-gradient(135deg, rgba(45,27,105,0.4), rgba(196,64,110,0.15))";
              el.style.boxShadow = "0 4px 24px rgba(139,92,246,0.2)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--color-border-subtle)";
              el.style.background = "var(--color-surface-card)";
              el.style.boxShadow = "none";
            }}
          >
            <span style={{ fontSize: "2rem" }}>{goal.icon}</span>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  color: "var(--color-text-primary)",
                  marginBottom: "0.3rem",
                }}
              >
                {goal.label}
              </div>
              <div
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.5,
                }}
              >
                {goal.description}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
