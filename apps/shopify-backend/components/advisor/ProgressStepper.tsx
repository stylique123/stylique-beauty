"use client";

type Step = "welcome" | "goal" | "analysis" | "profile" | "recommendations" | "chat";

const STEPS: { key: Step; label: string; icon: string }[] = [
  { key: "goal", label: "Goal", icon: "🎯" },
  { key: "analysis", label: "Analysis", icon: "✨" },
  { key: "profile", label: "Profile", icon: "👤" },
  { key: "recommendations", label: "Results", icon: "💄" },
];

interface ProgressStepperProps {
  currentStep: Step;
}

export function ProgressStepper({ currentStep }: ProgressStepperProps) {
  const stepOrder: Step[] = ["goal", "analysis", "profile", "recommendations", "chat"];
  const currentIdx = stepOrder.indexOf(currentStep);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0", marginBottom: "0.5rem" }}>
      {STEPS.map((step, i) => {
        const stepIdx = stepOrder.indexOf(step.key);
        const isComplete = stepIdx < currentIdx;
        const isActive = step.key === currentStep || (currentStep === "chat" && i === STEPS.length - 1);

        return (
          <div key={step.key} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? 1 : "none" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem" }}>
              <div style={{
                width: "32px", height: "32px",
                borderRadius: "50%",
                background: isComplete
                  ? "var(--gradient-brand)"
                  : isActive
                  ? "linear-gradient(135deg, rgba(45,27,105,0.8), rgba(109,63,204,0.6))"
                  : "var(--color-surface-overlay)",
                border: isActive
                  ? "2px solid rgba(139,92,246,0.7)"
                  : isComplete
                  ? "2px solid transparent"
                  : "2px solid var(--color-border-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.875rem",
                transition: "all 0.3s ease",
                boxShadow: isActive ? "0 0 16px rgba(139,92,246,0.3)" : "none",
                flexShrink: 0,
              }}>
                {isComplete ? "✓" : step.icon}
              </div>
              <span style={{
                fontSize: "0.7rem",
                fontWeight: isActive ? 600 : 400,
                color: isActive
                  ? "var(--color-violet-300)"
                  : isComplete
                  ? "var(--color-text-secondary)"
                  : "var(--color-text-muted)",
                whiteSpace: "nowrap",
              }}>
                {step.label}
              </span>
            </div>

            {i < STEPS.length - 1 && (
              <div style={{
                flex: 1,
                height: "2px",
                background: isComplete
                  ? "var(--gradient-brand)"
                  : "var(--color-surface-overlay)",
                margin: "0 0.5rem",
                marginBottom: "1.1rem",
                borderRadius: "1px",
                transition: "background 0.5s ease",
              }} />
            )}
          </div>
        );
      })}
    </div>
  );
}
