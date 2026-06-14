"use client";

import { useState, useEffect } from "react";
import { useStyliqueOS } from "./StyliqueOSProvider";
import { RecommendationEngine, CartEngine } from "@stylique/beauty-engine";

export function RoutineBuilder() {
  const { activeDialog, setActiveDialog, profile, setTryOnProductId } = useStyliqueOS();
  const [goal, setGoal] = useState<'skincare' | 'everyday' | 'glam' | null>(null);
  const [routine, setRoutine] = useState<any>(null);

  useEffect(() => {
    if (goal && profile) {
      // Simulate slight generation delay
      setTimeout(() => {
        setRoutine(RecommendationEngine.buildRoutine(profile, 'custom'));
      }, 1200);
    }
  }, [goal, profile]);

  if (activeDialog !== 'routine_builder') return null;

  const handleTryOn = (productId: string) => {
    setTryOnProductId(productId);
    setActiveDialog('try_on');
  };

  const handleAddRoutineToCart = () => {
    if (routine) {
      const items = routine.steps.map((s: any) => ({ productId: s.product.id }));
      CartEngine.addRoutine(items);
      alert("Added full routine to cart!");
      setActiveDialog('none');
    }
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 10000,
      background: "var(--color-surface-base)",
      display: "flex", flexDirection: "column",
    }}>
      {/* Header */}
      <div style={{ padding: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--color-border-subtle)", background: "rgba(9,9,11,0.8)", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 10 }}>
        <h2 className="text-heading-3">Stylique Routine Builder</h2>
        <button 
          onClick={() => setActiveDialog('none')} 
          className="btn-ghost"
          style={{ width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "3rem 1.5rem", position: "relative" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          
          {!goal && (
            <div className="animate-fade-in-up">
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h1 className="text-heading-2" style={{ marginBottom: "1rem" }}>What are we building today?</h1>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "1.125rem", maxWidth: "400px", margin: "0 auto" }}>
                  I'll use your beauty profile to select the perfect synergistic products.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <button 
                  onClick={() => setGoal('skincare')}
                  className="glass-card card-hover" style={{ padding: "1.75rem", textAlign: "left", display: "flex", alignItems: "center", gap: "1.5rem", border: "1px solid var(--color-border-subtle)" }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "1rem", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>🧴</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: "1.25rem", color: "var(--color-text-primary)", marginBottom: "0.25rem" }}>Skincare Routine</div>
                    <div style={{ color: "var(--color-text-secondary)", fontSize: "0.9375rem" }}>Prep, treat, and protect your skin.</div>
                  </div>
                  <div style={{ color: "var(--color-border-default)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                </button>
                <button 
                  onClick={() => setGoal('everyday')}
                  className="glass-card card-hover" style={{ padding: "1.75rem", textAlign: "left", display: "flex", alignItems: "center", gap: "1.5rem", border: "1px solid var(--color-border-subtle)", animationDelay: "100ms" }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "1rem", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>✨</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: "1.25rem", color: "var(--color-text-primary)", marginBottom: "0.25rem" }}>Everyday Makeup</div>
                    <div style={{ color: "var(--color-text-secondary)", fontSize: "0.9375rem" }}>A quick, natural 5-minute face.</div>
                  </div>
                  <div style={{ color: "var(--color-border-default)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                </button>
                <button 
                  onClick={() => setGoal('glam')}
                  className="glass-card card-hover" style={{ padding: "1.75rem", textAlign: "left", display: "flex", alignItems: "center", gap: "1.5rem", border: "1px solid var(--color-border-subtle)", animationDelay: "200ms" }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "1rem", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>💋</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: "1.25rem", color: "var(--color-text-primary)", marginBottom: "0.25rem" }}>Full Glam</div>
                    <div style={{ color: "var(--color-text-secondary)", fontSize: "0.9375rem" }}>Sculpted, flawless, and long-lasting.</div>
                  </div>
                  <div style={{ color: "var(--color-border-default)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                </button>
              </div>
            </div>
          )}

          {goal && !routine && (
            <div className="animate-fade-in" style={{ textAlign: "center", padding: "6rem 0", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
              <div className="animate-spin-slow" style={{ width: "80px", height: "80px", borderRadius: "50%", border: "4px solid rgba(139,92,246,0.2)", borderTopColor: "var(--color-violet-500)" }} />
              <div>
                <h3 className="text-heading-3" style={{ marginBottom: "0.75rem" }}>Crafting your routine...</h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "1.125rem" }}>Analyzing your {profile.undertone || 'skin'} profile against our catalogue.</p>
              </div>
            </div>
          )}

          {routine && (
            <div className="animate-fade-in-up">
              <div style={{ marginBottom: "3rem", textAlign: "center" }}>
                <h1 className="text-heading-2" style={{ marginBottom: "1rem" }}>{routine.name}</h1>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "1.125rem", maxWidth: "500px", margin: "0 auto" }}>{routine.description}</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "4rem" }}>
                {routine.steps.map((step: any, idx: number) => (
                  <div key={step.order} className="glass-card" style={{ padding: "1.5rem", display: "flex", gap: "1.5rem", animation: `fadeInUp 0.5s ${idx * 100}ms both` }}>
                    <div style={{ width: "96px", height: "128px", background: "var(--color-surface-base)", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem", border: "1px solid var(--color-border-subtle)", overflow: "hidden" }}>
                      {step.product.imageUrl ? (
                        <img src={step.product.imageUrl} alt={step.product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      ) : (
                        <div style={{ opacity: 0.2 }}>
                          {step.product.category === 'foundation' ? '🧴' : step.product.category === 'lipstick' ? '💄' : step.product.category === 'blush' ? '🌸' : '✨'}
                        </div>
                      )}
                    </div>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-violet-400)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
                        Step {step.order} • {step.name}
                      </div>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>
                        {step.product.name}
                      </h3>
                      <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                        <strong style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>Why:</strong> {step.why}
                      </p>
                      
                      <div style={{ display: "flex", gap: "1rem", marginTop: "auto" }}>
                        <button 
                          className="btn-secondary" 
                          style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem", flex: 1 }}
                          onClick={() => handleTryOn(step.product.id)}
                        >
                          Try On AR
                        </button>
                        <button className="btn-ghost" style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}>Swap Product</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Action Bar */}
              <div className="glass-premium animate-fade-in-up delay-300" style={{ position: "sticky", bottom: "1.5rem", padding: "1.5rem 2rem", borderRadius: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 600, color: "var(--color-text-primary)", fontSize: "1.125rem" }}>{routine.steps.length} Products</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>Ready to achieve your goal</div>
                </div>
                <button className="btn-primary" onClick={handleAddRoutineToCart} style={{ padding: "1rem 2rem", fontSize: "1rem" }}>
                  Add Full Routine to Cart
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
