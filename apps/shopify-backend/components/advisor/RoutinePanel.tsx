"use client";

import { useState } from "react";
import type { BeautyProfile, Product, Routine, RoutineType } from "@stylique/types";

interface RoutinePanelProps {
  profile: BeautyProfile;
  products: Product[];
}

const ROUTINE_TYPES: { value: RoutineType; label: string; icon: string; desc: string }[] = [
  { value: "morning", label: "Morning", icon: "🌅", desc: "Start your day right" },
  { value: "evening", label: "Evening", icon: "🌙", desc: "Evening wind-down" },
  { value: "event", label: "Event", icon: "✨", desc: "Special occasion" },
  { value: "natural", label: "Natural", icon: "🌿", desc: "Effortless & light" },
  { value: "glam", label: "Glam", icon: "💎", desc: "Full glam moment" },
];

export function RoutinePanel({ profile, products }: RoutinePanelProps) {
  const [selectedType, setSelectedType] = useState<RoutineType>("morning");
  const [routine, setRoutine] = useState<Routine | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/routine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profile, routineType: selectedType }),
      });
      if (response.ok) {
        const data = await response.json();
        setRoutine(data.routine);
      }
    } catch (err) {
      console.error("Routine generation failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card animate-fade-in" style={{ padding: "1.5rem" }}>
      <h3 className="text-heading-3" style={{ marginBottom: "1.25rem" }}>🌟 Routine Builder</h3>

      {/* Routine type picker */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
        {ROUTINE_TYPES.map(rt => (
          <button
            key={rt.value}
            id={`routine-type-${rt.value}`}
            onClick={() => { setSelectedType(rt.value); setRoutine(null); }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.5rem 0.875rem",
              borderRadius: "var(--radius-full)",
              border: `1px solid ${selectedType === rt.value ? "rgba(232,168,32,0.5)" : "var(--color-border-subtle)"}`,
              background: selectedType === rt.value ? "rgba(232,168,32,0.15)" : "var(--color-surface-overlay)",
              cursor: "pointer",
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: selectedType === rt.value ? "var(--color-gold-200)" : "var(--color-text-secondary)",
              transition: "all 0.15s ease",
            }}
          >
            {rt.icon} {rt.label}
          </button>
        ))}
      </div>

      {!routine && (
        <button
          className="btn-primary"
          id="generate-routine-btn"
          onClick={handleGenerate}
          disabled={isLoading}
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          {isLoading ? (
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "center" }}>
              <span className="animate-spin-slow">✦</span>
              Building your {selectedType} routine...
            </span>
          ) : `✦ Build My ${selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} Routine`}
        </button>
      )}

      {routine && (
        <div className="animate-fade-in">
          {/* Routine header */}
          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.0625rem", color: "var(--color-text-primary)", marginBottom: "0.4rem" }}>
              {routine.name}
            </h4>
            <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "0.5rem" }}>
              {routine.description}
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <span className="profile-tag">⏱ {routine.estimatedTime}</span>
              <span className="profile-tag">💄 {routine.totalProducts} products</span>
            </div>
          </div>

          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {routine.steps.map((step, i) => (
              <div
                key={step.id}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${i * 80}ms`,
                  padding: "1rem",
                  background: "var(--color-surface-overlay)",
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  display: "flex",
                  gap: "1rem",
                }}
              >
                {/* Step number */}
                <div style={{
                  width: "32px", height: "32px",
                  borderRadius: "50%",
                  background: "var(--gradient-brand)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.8rem", fontWeight: 700, color: "white",
                  flexShrink: 0, marginTop: "2px",
                }}>
                  {step.order}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <h5 style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: "0.9rem" }}>
                      {step.name}
                    </h5>
                    <span style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", flexShrink: 0, marginLeft: "0.5rem" }}>
                      {step.duration}
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", marginBottom: "0.5rem" }}>
                    <p style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", margin: 0 }}>
                      <strong style={{ color: "var(--color-violet-300)" }}>Why: </strong>{step.why}
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", margin: 0 }}>
                      <strong style={{ color: "var(--color-violet-300)" }}>How: </strong>{step.how}
                    </p>
                  </div>

                  {step.product && (
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      padding: "0.25rem 0.625rem",
                      background: "rgba(232,168,32,0.1)",
                      border: "1px solid rgba(232,168,32,0.2)",
                      borderRadius: "var(--radius-full)",
                      fontSize: "0.75rem",
                      color: "var(--color-gold-300)",
                      fontWeight: 500,
                    }}>
                      💄 {step.product.name}
                    </div>
                  )}

                  {step.tips.length > 0 && (
                    <div style={{ marginTop: "0.5rem" }}>
                      {step.tips.map((tip, ti) => (
                        <p key={ti} style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", margin: "0.15rem 0", display: "flex", alignItems: "flex-start", gap: "0.3rem" }}>
                          <span style={{ color: "var(--color-violet-400)", flexShrink: 0 }}>✦</span> {tip}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}>
            <button
              className="btn-primary"
              id="save-routine-btn"
              style={{ flex: 1 }}
              onClick={() => alert("Routine saved! Email functionality coming soon.")}
            >
              📧 Email My Routine
            </button>
            <button
              className="btn-secondary"
              onClick={() => { setRoutine(null); }}
              style={{ flexShrink: 0 }}
            >
              Rebuild
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
