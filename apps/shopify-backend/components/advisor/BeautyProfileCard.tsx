"use client";

import { useState } from "react";
import type { BeautyProfile, SkinType, Undertone, SkinToneDepth, CoveragePreference, FinishPreference, SkinConcern, MakeupStyle } from "@stylique/types";
import { skinToneToHex } from "@stylique/beauty-engine";

interface BeautyProfileCardProps {
  initialProfile: BeautyProfile | null;
  onComplete: (profile: BeautyProfile) => void;
  isLoading: boolean;
}

const SKIN_TYPES: { value: SkinType; label: string; desc: string }[] = [
  { value: "normal", label: "Normal", desc: "Balanced, rarely oily or dry" },
  { value: "dry", label: "Dry", desc: "Tight, flaky, or dull-looking" },
  { value: "oily", label: "Oily", desc: "Shiny, enlarged pores" },
  { value: "combination", label: "Combination", desc: "Oily T-zone, dry cheeks" },
  { value: "sensitive", label: "Sensitive", desc: "Easily irritated or reactive" },
];

const UNDERTONES: { value: Undertone; label: string; hint: string; color: string }[] = [
  { value: "warm", label: "Warm", hint: "Golden, peachy, or yellow tones", color: "#E8A820" },
  { value: "cool", label: "Cool", hint: "Pink, red, or bluish tones", color: "#C4406E" },
  { value: "neutral", label: "Neutral", hint: "Mix of warm and cool", color: "#8B5CF6" },
  { value: "olive", label: "Olive", hint: "Green or muted yellow tones", color: "#6B8E23" },
];

const SKIN_DEPTHS: { value: SkinToneDepth; label: string }[] = [
  { value: "fair", label: "Fair" },
  { value: "light", label: "Light" },
  { value: "medium", label: "Medium" },
  { value: "tan", label: "Tan" },
  { value: "deep", label: "Deep" },
  { value: "rich", label: "Rich" },
];

const CONCERNS: { value: SkinConcern; label: string; icon: string }[] = [
  { value: "acne", label: "Acne", icon: "⚡" },
  { value: "dark_spots", label: "Dark spots", icon: "🌑" },
  { value: "redness", label: "Redness", icon: "🌹" },
  { value: "dryness", label: "Dryness", icon: "🌵" },
  { value: "oiliness", label: "Oiliness", icon: "💧" },
  { value: "fine_lines", label: "Fine lines", icon: "〰️" },
  { value: "pores", label: "Pores", icon: "🔍" },
  { value: "dark_circles", label: "Dark circles", icon: "🌙" },
  { value: "dullness", label: "Dullness", icon: "☁️" },
  { value: "hyperpigmentation", label: "Hyperpigmentation", icon: "🎨" },
  { value: "uneven_texture", label: "Uneven texture", icon: "🌊" },
  { value: "sensitivity", label: "Sensitivity", icon: "🌸" },
];

const COVERAGE_OPTIONS: { value: CoveragePreference; label: string; desc: string }[] = [
  { value: "sheer", label: "Sheer", desc: "Just a hint of coverage" },
  { value: "light", label: "Light", desc: "Even skin, visible skin" },
  { value: "medium", label: "Medium", desc: "Covers most imperfections" },
  { value: "full", label: "Full", desc: "Maximum coverage" },
];

const FINISH_OPTIONS: { value: FinishPreference; label: string; icon: string }[] = [
  { value: "matte", label: "Matte", icon: "🌫️" },
  { value: "satin", label: "Satin", icon: "✨" },
  { value: "dewy", label: "Dewy", icon: "💎" },
  { value: "natural", label: "Natural", icon: "🌿" },
  { value: "luminous", label: "Luminous", icon: "⭐" },
];

const BUDGETS: { value: NonNullable<BeautyProfile["budget"]>; label: string; range: string }[] = [
  { value: "budget", label: "Budget-friendly", range: "Under £20" },
  { value: "mid", label: "Mid-range", range: "£20–£60" },
  { value: "premium", label: "Premium", range: "£60–£120" },
  { value: "luxury", label: "Luxury", range: "£120+" },
];

type ProfileStep = "skin" | "undertone" | "concerns" | "preferences" | "done";

export function BeautyProfileCard({ initialProfile, onComplete, isLoading }: BeautyProfileCardProps) {
  const [profileStep, setProfileStep] = useState<ProfileStep>(
    initialProfile?.skinType ? "undertone" : "skin"
  );

  const [form, setForm] = useState({
    skinType: initialProfile?.skinType ?? null as SkinType | null,
    undertone: initialProfile?.undertone ?? null as Undertone | null,
    skinToneDepth: initialProfile?.skinToneDepth ?? null as SkinToneDepth | null,
    concerns: initialProfile?.concerns ?? [] as SkinConcern[],
    coveragePreference: initialProfile?.coveragePreference ?? null as CoveragePreference | null,
    finishPreference: initialProfile?.finishPreference ?? null as FinishPreference | null,
    makeupStyle: initialProfile?.makeupStyle ?? null as MakeupStyle | null,
    budget: initialProfile?.budget ?? null as BeautyProfile["budget"],
    veganOnly: initialProfile?.veganOnly ?? false,
  });

  const toggleConcern = (c: SkinConcern) => {
    setForm(prev => ({
      ...prev,
      concerns: prev.concerns.includes(c)
        ? prev.concerns.filter(x => x !== c)
        : [...prev.concerns, c],
    }));
  };

  const handleSubmit = () => {
    const profile: BeautyProfile = {
      id: initialProfile?.id ?? `profile-${Date.now()}`,
      shopperId: "guest",
      brandId: "demo-brand",
      skinType: form.skinType,
      undertone: form.undertone,
      skinToneDepth: form.skinToneDepth,
      concerns: form.concerns,
      faceShape: initialProfile?.faceShape ?? null,
      eyeShape: initialProfile?.eyeShape ?? null,
      coveragePreference: form.coveragePreference,
      finishPreference: form.finishPreference,
      makeupStyle: form.makeupStyle,
      budget: form.budget,
      fragranceFree: false,
      veganOnly: form.veganOnly,
      createdAt: initialProfile?.createdAt ?? new Date(),
      updatedAt: new Date(),
    };
    onComplete(profile);
  };

  const steps: ProfileStep[] = ["skin", "undertone", "concerns", "preferences"];
  const stepIdx = steps.indexOf(profileStep);
  const progressPct = ((stepIdx) / steps.length) * 100;

  return (
    <div className="animate-fade-in-up">
      <div style={{ marginBottom: "2rem", textAlign: "center" }}>
        <div className="badge badge-violet" style={{ marginBottom: "0.75rem" }}>
          Step 3 of 3 — Beauty Profile
        </div>
        <h2 className="text-heading-2" style={{ marginBottom: "0.5rem" }}>
          Tell me about your skin
        </h2>
        <p className="text-body-lg">
          {initialProfile?.skinType
            ? "I've pre-filled some details from your selfie — feel free to adjust."
            : "A few quick questions to personalise your recommendations."}
        </p>
      </div>

      {/* Progress bar */}
      <div className="progress-bar" style={{ marginBottom: "2.5rem" }}>
        <div className="progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      {/* Skin type step */}
      {profileStep === "skin" && (
        <ProfileSection title="What's your skin type?">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.875rem" }}>
            {SKIN_TYPES.map(st => (
              <button
                key={st.value}
                id={`skin-type-${st.value}`}
                onClick={() => setForm(p => ({ ...p, skinType: st.value }))}
                style={{
                  padding: "1rem",
                  borderRadius: "var(--radius-lg)",
                  border: `1px solid ${form.skinType === st.value ? "rgba(139,92,246,0.6)" : "var(--color-border-subtle)"}`,
                  background: form.skinType === st.value
                    ? "linear-gradient(135deg, rgba(45,27,105,0.5), rgba(109,63,204,0.3))"
                    : "var(--color-surface-card)",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                  boxShadow: form.skinType === st.value ? "0 0 0 2px rgba(139,92,246,0.3)" : "none",
                }}
              >
                <div style={{ fontWeight: 600, color: form.skinType === st.value ? "var(--color-violet-200)" : "var(--color-text-primary)", marginBottom: "0.3rem", fontSize: "0.9375rem" }}>{st.label}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>{st.desc}</div>
              </button>
            ))}
          </div>
          <StepNav onNext={() => setProfileStep("undertone")} canNext={!!form.skinType} />
        </ProfileSection>
      )}

      {/* Undertone step */}
      {profileStep === "undertone" && (
        <ProfileSection title="What's your undertone?">
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", marginBottom: "1.25rem" }}>
            <strong style={{ color: "var(--color-text-secondary)" }}>Tip:</strong> Look at the veins on your inner wrist — blue/purple = cool, green = warm, both = neutral.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.875rem" }}>
            {UNDERTONES.map(ut => (
              <button
                key={ut.value}
                id={`undertone-${ut.value}`}
                onClick={() => setForm(p => ({ ...p, undertone: ut.value }))}
                style={{
                  padding: "1.125rem",
                  borderRadius: "var(--radius-lg)",
                  border: `1px solid ${form.undertone === ut.value ? ut.color + "80" : "var(--color-border-subtle)"}`,
                  background: form.undertone === ut.value
                    ? `linear-gradient(135deg, ${ut.color}20, ${ut.color}10)`
                    : "var(--color-surface-card)",
                  cursor: "pointer",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: ut.color, flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, color: "var(--color-text-primary)", fontSize: "0.9375rem" }}>{ut.label}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>{ut.hint}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Skin depth */}
          <div style={{ marginTop: "1.5rem" }}>
            <p style={{ fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: "0.75rem", fontSize: "0.9rem" }}>How deep is your skin tone?</p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {SKIN_DEPTHS.map(sd => {
                const color = form.undertone ? skinToneToHex(sd.value, form.undertone) : "#C68642";
                return (
                  <button
                    key={sd.value}
                    id={`depth-${sd.value}`}
                    onClick={() => setForm(p => ({ ...p, skinToneDepth: sd.value }))}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.5rem 0.75rem",
                      borderRadius: "var(--radius-md)",
                      border: `1px solid ${form.skinToneDepth === sd.value ? "rgba(255,255,255,0.3)" : "transparent"}`,
                      background: "transparent",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div
                      className={`shade-swatch ${form.skinToneDepth === sd.value ? "selected" : ""}`}
                      style={{ background: color, width: "40px", height: "40px" }}
                    />
                    <span style={{ fontSize: "0.75rem", color: form.skinToneDepth === sd.value ? "var(--color-text-primary)" : "var(--color-text-muted)", fontWeight: 500 }}>
                      {sd.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <StepNav onBack={() => setProfileStep("skin")} onNext={() => setProfileStep("concerns")} canNext={!!form.undertone && !!form.skinToneDepth} />
        </ProfileSection>
      )}

      {/* Concerns step */}
      {profileStep === "concerns" && (
        <ProfileSection title="Any skin concerns? (select all that apply)">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "0.625rem" }}>
            {CONCERNS.map(c => (
              <button
                key={c.value}
                id={`concern-${c.value}`}
                onClick={() => toggleConcern(c.value)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.625rem 0.875rem",
                  borderRadius: "var(--radius-full)",
                  border: `1px solid ${form.concerns.includes(c.value) ? "rgba(196,64,110,0.5)" : "var(--color-border-subtle)"}`,
                  background: form.concerns.includes(c.value)
                    ? "rgba(196,64,110,0.15)"
                    : "var(--color-surface-card)",
                  cursor: "pointer",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: form.concerns.includes(c.value) ? "var(--color-rose-200)" : "var(--color-text-secondary)",
                  transition: "all 0.15s ease",
                }}
              >
                <span>{c.icon}</span>
                {c.label}
              </button>
            ))}
          </div>
          <StepNav onBack={() => setProfileStep("undertone")} onNext={() => setProfileStep("preferences")} canNext={true} nextLabel="Next →" />
        </ProfileSection>
      )}

      {/* Preferences step */}
      {profileStep === "preferences" && (
        <ProfileSection title="Your makeup preferences">
          {/* Coverage */}
          <div style={{ marginBottom: "1.5rem" }}>
            <p style={{ fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Coverage preference</p>
            <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
              {COVERAGE_OPTIONS.map(c => (
                <button
                  key={c.value}
                  id={`coverage-${c.value}`}
                  onClick={() => setForm(p => ({ ...p, coveragePreference: c.value }))}
                  style={{
                    padding: "0.6rem 1rem",
                    borderRadius: "var(--radius-full)",
                    border: `1px solid ${form.coveragePreference === c.value ? "rgba(139,92,246,0.6)" : "var(--color-border-subtle)"}`,
                    background: form.coveragePreference === c.value ? "rgba(139,92,246,0.2)" : "var(--color-surface-card)",
                    cursor: "pointer",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: form.coveragePreference === c.value ? "var(--color-violet-200)" : "var(--color-text-secondary)",
                    transition: "all 0.15s ease",
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Finish */}
          <div style={{ marginBottom: "1.5rem" }}>
            <p style={{ fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Finish preference</p>
            <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
              {FINISH_OPTIONS.map(f => (
                <button
                  key={f.value}
                  id={`finish-${f.value}`}
                  onClick={() => setForm(p => ({ ...p, finishPreference: f.value }))}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    padding: "0.6rem 1rem",
                    borderRadius: "var(--radius-full)",
                    border: `1px solid ${form.finishPreference === f.value ? "rgba(232,168,32,0.6)" : "var(--color-border-subtle)"}`,
                    background: form.finishPreference === f.value ? "rgba(232,168,32,0.15)" : "var(--color-surface-card)",
                    cursor: "pointer",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: form.finishPreference === f.value ? "var(--color-gold-200)" : "var(--color-text-secondary)",
                    transition: "all 0.15s ease",
                  }}
                >
                  {f.icon} {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div style={{ marginBottom: "1.5rem" }}>
            <p style={{ fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Budget range</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.625rem" }}>
              {BUDGETS.map(b => (
                <button
                  key={b.value}
                  id={`budget-${b.value}`}
                  onClick={() => setForm(p => ({ ...p, budget: b.value }))}
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    border: `1px solid ${form.budget === b.value ? "rgba(139,92,246,0.5)" : "var(--color-border-subtle)"}`,
                    background: form.budget === b.value ? "rgba(139,92,246,0.15)" : "var(--color-surface-card)",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div style={{ fontWeight: 600, color: form.budget === b.value ? "var(--color-violet-200)" : "var(--color-text-primary)", fontSize: "0.875rem" }}>{b.label}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>{b.range}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Vegan toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <button
              id="vegan-toggle"
              onClick={() => setForm(p => ({ ...p, veganOnly: !p.veganOnly }))}
              style={{
                width: "44px",
                height: "24px",
                borderRadius: "12px",
                background: form.veganOnly ? "var(--gradient-brand)" : "var(--color-surface-overlay)",
                border: "none",
                cursor: "pointer",
                position: "relative",
                transition: "background 0.2s ease",
              }}
            >
              <div style={{
                position: "absolute",
                top: "2px",
                left: form.veganOnly ? "22px" : "2px",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "white",
                transition: "left 0.2s ease",
              }} />
            </button>
            <span style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem" }}>Show only vegan products 🌿</span>
          </div>

          {/* Submit */}
          <button
            className="btn-primary"
            id="complete-profile-btn"
            onClick={handleSubmit}
            disabled={isLoading}
            style={{ width: "100%", padding: "0.875rem", fontSize: "1rem" }}
          >
            {isLoading ? (
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span className="animate-spin-slow">✦</span>
                Building your recommendations...
              </span>
            ) : (
              "✨ See My Recommendations →"
            )}
          </button>
          <button className="btn-ghost" style={{ width: "100%", marginTop: "0.5rem" }} onClick={() => setProfileStep("concerns")}>
            ← Back
          </button>
        </ProfileSection>
      )}
    </div>
  );
}

function ProfileSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card animate-fade-in" style={{ padding: "2rem" }}>
      <h3 className="text-heading-3" style={{ marginBottom: "1.5rem", color: "var(--color-text-primary)" }}>{title}</h3>
      {children}
    </div>
  );
}

function StepNav({ onBack, onNext, canNext, nextLabel = "Next →" }: {
  onBack?: () => void;
  onNext: () => void;
  canNext: boolean;
  nextLabel?: string;
}) {
  return (
    <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.75rem", justifyContent: "flex-end" }}>
      {onBack && (
        <button className="btn-ghost" onClick={onBack}>← Back</button>
      )}
      <button
        className="btn-primary"
        onClick={onNext}
        disabled={!canNext}
        style={{ opacity: canNext ? 1 : 0.4, cursor: canNext ? "pointer" : "not-allowed" }}
      >
        {nextLabel}
      </button>
    </div>
  );
}
