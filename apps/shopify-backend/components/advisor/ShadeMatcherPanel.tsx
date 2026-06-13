"use client";

import { useState } from "react";
import type { Product, BeautyProfile, ShadeMatchingResult } from "@stylique/types";
import { rankShades } from "@stylique/beauty-engine";
import { AIShadeSimulator } from "../simulator/AIShadeSimulator";

interface ShadeMatcherPanelProps {
  products: Product[];
  profile: BeautyProfile;
  onClose: () => void;
}

export function ShadeMatcherPanel({ products, profile, onClose }: ShadeMatcherPanelProps) {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [matchResult, setMatchResult] = useState<ShadeMatchingResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activePreviewShade, setActivePreviewShade] = useState<{ id: string; hex: string } | null>(null);

  const productsWithShades = products.filter(p => p.shades.length > 0);
  const selectedProduct = productsWithShades.find(p => p.id === selectedProductId);

  const handleMatchShades = async () => {
    if (!selectedProduct || !profile.skinToneDepth || !profile.undertone) return;
    setIsLoading(true);
    try {
      const response = await fetch("/api/shade-match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profile, productId: selectedProductId }),
      });
      if (response.ok) {
        const data = await response.json();
        setMatchResult(data.result);
        if (data.result.bestMatch) {
          setActivePreviewShade({ id: data.result.bestMatch.shade.id, hex: data.result.bestMatch.hexColor });
        }
      }
    } catch (err) {
      // Fallback: use client-side ranking
      if (selectedProduct && profile.skinToneDepth && profile.undertone) {
        const ranked = rankShades(selectedProduct.shades, profile.skinToneDepth, profile.undertone);
        const best = ranked[0];
        setMatchResult({
          productId: selectedProduct.id,
          matches: ranked.slice(0, 4).map((s, i) => ({
            shade: s,
            matchType: i === 0 ? "best" : i === 1 ? "alternative" : i === 2 ? "lighter" : "darker",
            confidence: i === 0 ? "high" : i === 1 ? "medium" : "low",
            reasoning: `Based on your ${profile.skinToneDepth} tone with ${profile.undertone} undertones, this shade appears to be a ${i === 0 ? "great" : "good"} match.`,
            hexColor: s.hexColor ?? "#C68642",
          })),
          bestMatch: best ? {
            shade: best,
            matchType: "best",
            confidence: "high",
            reasoning: `Based on your ${profile.skinToneDepth} tone with ${profile.undertone} undertones, this shade appears to be your ideal match.`,
            hexColor: best.hexColor ?? "#C68642",
          } : null,
          reasoning: `Your ${profile.skinToneDepth} skin tone with ${profile.undertone} undertones guides these recommendations.`,
        });
        if (best) {
          setActivePreviewShade({ id: best.id, hex: best.hexColor ?? "#C68642" });
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card animate-fade-in" style={{ padding: "1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
        <h3 className="text-heading-3">
          🎨 AI Shade Simulator
        </h3>
        <button className="btn-ghost" onClick={onClose} style={{ fontSize: "0.8rem" }}>Close ✕</button>
      </div>

      {/* Main layout container */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
        
        {/* Left column: Controls & Selections */}
        <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          
          {/* Profile summary */}
          {profile.skinToneDepth && profile.undertone && (
            <div style={{
              padding: "0.75rem 1rem",
              background: "rgba(139,92,246,0.08)",
              border: "1px solid rgba(139,92,246,0.15)",
              borderRadius: "var(--radius-md)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}>
              <div>
                <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-text-primary)" }}>
                  {profile.skinToneDepth.charAt(0).toUpperCase() + profile.skinToneDepth.slice(1)} · {profile.undertone} undertone
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
                  Your beauty profile
                </div>
              </div>
            </div>
          )}

          {/* Product picker */}
          <div>
            <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "0.75rem", fontWeight: 500 }}>
              Select a product to try:
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {productsWithShades.map(p => (
                <button
                  key={p.id}
                  id={`shade-product-${p.id}`}
                  onClick={() => { setSelectedProductId(p.id); setMatchResult(null); setActivePreviewShade(null); }}
                  style={{
                    padding: "0.45rem 0.875rem",
                    borderRadius: "var(--radius-full)",
                    border: `1px solid ${selectedProductId === p.id ? "rgba(139,92,246,0.5)" : "var(--color-border-subtle)"}`,
                    background: selectedProductId === p.id ? "rgba(139,92,246,0.2)" : "var(--color-surface-overlay)",
                    color: selectedProductId === p.id ? "var(--color-violet-200)" : "var(--color-text-secondary)",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {selectedProduct && !matchResult && (
            <button
              className="btn-primary"
              id="match-shades-btn"
              onClick={handleMatchShades}
              disabled={isLoading}
              style={{ width: "100%" }}
            >
              {isLoading ? (
                <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "center" }}>
                  <span className="animate-spin-slow">✦</span>
                  Matching your shades...
                </span>
              ) : "✦ Match My Shades"}
            </button>
          )}

          {/* Result Shade Buttons */}
          {matchResult && (
            <div className="animate-fade-in" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "0.5rem", lineHeight: 1.6 }}>
                {matchResult.reasoning}
              </p>
              {matchResult.matches.map((match, i) => (
                <button
                  key={match.shade.id}
                  onClick={() => setActivePreviewShade({ id: match.shade.id, hex: match.hexColor })}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.75rem 1rem",
                    background: activePreviewShade?.id === match.shade.id ? "rgba(139,92,246,0.15)" : "var(--color-surface-overlay)",
                    border: activePreviewShade?.id === match.shade.id ? "1px solid rgba(139,92,246,0.5)" : "1px solid var(--color-border-subtle)",
                    borderRadius: "var(--radius-md)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    textAlign: "left",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{
                      width: "24px", height: "24px", borderRadius: "50%",
                      background: match.hexColor,
                      border: "1px solid rgba(255,255,255,0.2)",
                    }} />
                    <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--color-text-primary)" }}>
                      {match.shade.name}
                    </span>
                  </div>
                  <span style={{ fontSize: "0.7rem", color: match.matchType === "best" ? "#86efac" : "var(--color-text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
                    {match.matchType}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right column: Simulator Preview */}
        <div style={{ flex: "1 1 300px", minWidth: "300px" }}>
          {selectedProduct && (matchResult || isLoading) ? (
            <div className="animate-fade-in">
              <AIShadeSimulator
                skinDepth={profile.skinToneDepth}
                undertone={profile.undertone}
                productCategory={selectedProduct.category}
                productColor={activePreviewShade?.hex}
              />
              {activePreviewShade && (
                <div style={{ marginTop: "1rem", textAlign: "center" }}>
                  <button className="btn-primary" style={{ width: "100%" }}>
                    Add {selectedProduct.shades.find(s => s.id === activePreviewShade.id)?.name} to Cart
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div style={{
              width: "100%", height: "240px", borderRadius: "1rem",
              background: "var(--color-surface-overlay)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: "1rem", color: "var(--color-text-muted)",
              border: "1px dashed var(--color-border-strong)",
            }}>
              <span style={{ fontSize: "2rem" }}>✨</span>
              <span style={{ fontSize: "0.875rem" }}>Select a product to try on</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
