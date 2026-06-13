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
      }, 800);
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
      <div style={{ padding: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <h2 className="text-heading-3">Stylique Routine Builder</h2>
        <button onClick={() => setActiveDialog('none')} className="btn-ghost">Close ✕</button>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          
          {!goal && (
            <div className="animate-fade-in-up">
              <h1 className="text-heading-2" style={{ marginBottom: "0.5rem" }}>What are we building today?</h1>
              <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
                I'll use your beauty profile to select the perfect products.
              </p>
              <div style={{ display: "grid", gap: "1rem" }}>
                <button 
                  onClick={() => setGoal('skincare')}
                  className="card card-hover" style={{ padding: "1.5rem", textAlign: "left", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ fontSize: "2rem" }}>🧴</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "1.125rem", color: "var(--color-text-primary)" }}>Skincare Routine</div>
                    <div style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>Prep, treat, and protect your skin.</div>
                  </div>
                </button>
                <button 
                  onClick={() => setGoal('everyday')}
                  className="card card-hover" style={{ padding: "1.5rem", textAlign: "left", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ fontSize: "2rem" }}>✨</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "1.125rem", color: "var(--color-text-primary)" }}>Everyday Makeup</div>
                    <div style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>A quick, natural 5-minute face.</div>
                  </div>
                </button>
                <button 
                  onClick={() => setGoal('glam')}
                  className="card card-hover" style={{ padding: "1.5rem", textAlign: "left", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ fontSize: "2rem" }}>💋</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "1.125rem", color: "var(--color-text-primary)" }}>Full Glam</div>
                    <div style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>Sculpted, flawless, and long-lasting.</div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {goal && !routine && (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>
              <div className="animate-spin-slow" style={{ fontSize: "3rem", marginBottom: "1rem", color: "var(--color-violet-500)" }}>✦</div>
              <h3 className="text-heading-3">Crafting your routine...</h3>
              <p style={{ color: "var(--color-text-muted)" }}>Analyzing your {profile.undertone || 'skin'} profile against our catalogue.</p>
            </div>
          )}

          {routine && (
            <div className="animate-fade-in-up">
              <div style={{ marginBottom: "2rem" }}>
                <h1 className="text-heading-2" style={{ marginBottom: "0.5rem" }}>{routine.name}</h1>
                <p style={{ color: "var(--color-text-muted)" }}>{routine.description}</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
                {routine.steps.map((step: any) => (
                  <div key={step.order} className="card" style={{ padding: "1.5rem", display: "flex", gap: "1.5rem" }}>
                    <div style={{ width: "80px", height: "80px", background: "var(--color-surface-overlay)", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>
                      {step.product.category === 'foundation' ? '🧴' : step.product.category === 'lipstick' ? '💄' : step.product.category === 'blush' ? '🌸' : '✨'}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-violet-500)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
                        Step {step.order}: {step.name}
                      </div>
                      <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "0.25rem" }}>
                        {step.product.name}
                      </h3>
                      <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "1rem", lineHeight: 1.5 }}>
                        <strong style={{ color: "var(--color-text-secondary)" }}>Why:</strong> {step.why}
                      </p>
                      <div style={{ display: "flex", gap: "0.75rem" }}>
                        <button 
                          className="btn-secondary" 
                          style={{ padding: "0.5rem 1rem", fontSize: "0.8125rem" }}
                          onClick={() => handleTryOn(step.product.id)}
                        >
                          Try On AR
                        </button>
                        <button className="btn-ghost" style={{ padding: "0.5rem 1rem", fontSize: "0.8125rem" }}>Replace</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Action Bar */}
              <div className="glass-premium" style={{ position: "sticky", bottom: "1.5rem", padding: "1.5rem", borderRadius: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 600, color: "var(--color-text-primary)" }}>{routine.steps.length} Products</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>Ready for checkout</div>
                </div>
                <button className="btn-primary" onClick={handleAddRoutineToCart}>
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
