"use client";

import { useState } from "react";
import type { ProductRecommendation } from "@stylique/types";

interface ProductRecommendationCardProps {
  recommendation: ProductRecommendation;
  index: number;
}

const CONFIDENCE_COLORS = {
  high: { bg: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.25)", text: "#86efac" },
  medium: { bg: "rgba(232,168,32,0.12)", border: "rgba(232,168,32,0.25)", text: "#fcd34d" },
  low: { bg: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.25)", text: "#c4b5fd" },
};

const TYPE_LABELS = {
  best: { label: "Best Match", icon: "⭐" },
  alternative: { label: "Alternative", icon: "✦" },
  premium: { label: "Premium Pick", icon: "💎" },
  budget: { label: "Budget Pick", icon: "💚" },
  bundle: { label: "Bundle", icon: "🎁" },
};

export function ProductRecommendationCard({ recommendation, index }: ProductRecommendationCardProps) {
  const [selectedShade, setSelectedShade] = useState(recommendation.recommendedShade?.id ?? null);
  const [showReasoning, setShowReasoning] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const { product, recommendedShade, confidence, confidenceScore, reasoning, type } = recommendation;
  const confColors = CONFIDENCE_COLORS[confidence];
  const typeInfo = TYPE_LABELS[type];
  const currentShade = product.shades.find(s => s.id === selectedShade) ?? recommendedShade;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div
      className="card card-hover animate-fade-in-up"
      style={{
        animationDelay: `${index * 80}ms`,
        opacity: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Product image area */}
      <div
        style={{
          height: "180px",
          background: "var(--gradient-card)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderBottom: "1px solid var(--color-border-subtle)",
        }}
      >
        {/* Category icon */}
        <div style={{ fontSize: "3.5rem", opacity: 0.8 }}>
          {product.category === "foundation" && "🎭"}
          {product.category === "blush" && "🌸"}
          {product.category === "lipstick" && "💄"}
          {product.category === "highlighter" && "✨"}
          {product.category === "concealer" && "🪄"}
          {product.category === "primer" && "🌟"}
          {product.category === "bronzer" && "☀️"}
          {product.category === "eyeshadow" && "👁️"}
          {!["foundation","blush","lipstick","highlighter","concealer","primer","bronzer","eyeshadow"].includes(product.category) && "💅"}
        </div>

        {/* Type badge */}
        <div
          style={{
            position: "absolute",
            top: "0.75rem",
            left: "0.75rem",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            padding: "0.25rem 0.625rem",
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(8px)",
            borderRadius: "var(--radius-full)",
            fontSize: "0.7rem",
            fontWeight: 700,
            color: "white",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          {typeInfo.icon} {typeInfo.label}
        </div>

        {/* Confidence badge */}
        <div
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            padding: "0.25rem 0.625rem",
            background: confColors.bg,
            border: `1px solid ${confColors.border}`,
            borderRadius: "var(--radius-full)",
            fontSize: "0.7rem",
            fontWeight: 700,
            color: confColors.text,
            letterSpacing: "0.05em",
          }}
        >
          {Math.round(confidenceScore * 100)}% match
        </div>

        {/* Shade preview strip at bottom */}
        {product.shades.length > 0 && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "8px",
              background: currentShade?.hexColor ?? "#C68642",
              opacity: 0.9,
            }}
          />
        )}
      </div>

      {/* Product info */}
      <div style={{ padding: "1.125rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.2rem" }}>
            {product.brand} · {product.category}
          </div>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "0.9375rem",
            color: "var(--color-text-primary)",
            marginBottom: "0.25rem",
            lineHeight: 1.3,
          }}>
            {product.name}
          </h3>
          <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-gold-400)" }}>
            £{product.price.toFixed(2)}
          </div>
        </div>

        {/* Recommended shade */}
        {currentShade && (
          <div style={{ marginBottom: "0.875rem" }}>
            <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginBottom: "0.4rem" }}>
              Recommended shade
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{
                width: "24px", height: "24px",
                borderRadius: "50%",
                background: currentShade.hexColor ?? "#C68642",
                border: "2px solid rgba(255,255,255,0.2)",
                flexShrink: 0,
              }} />
              <span style={{ fontSize: "0.8125rem", color: "var(--color-text-secondary)", fontWeight: 500 }}>
                {currentShade.name}
              </span>
            </div>
          </div>
        )}

        {/* Shade selector (first 6 shades) */}
        {product.shades.length > 1 && (
          <div style={{ marginBottom: "0.875rem" }}>
            <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
              {product.shades.slice(0, 8).map(shade => (
                <button
                  key={shade.id}
                  onClick={() => setSelectedShade(shade.id)}
                  title={shade.name}
                  className={`shade-swatch ${selectedShade === shade.id ? "selected" : ""}`}
                  style={{
                    background: shade.hexColor ?? "#C68642",
                    width: "24px",
                    height: "24px",
                  }}
                />
              ))}
              {product.shades.length > 8 && (
                <div style={{
                  width: "24px", height: "24px",
                  borderRadius: "50%",
                  background: "var(--color-surface-overlay)",
                  border: "1px solid var(--color-border-default)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.6rem",
                  color: "var(--color-text-muted)",
                }}>
                  +{product.shades.length - 8}
                </div>
              )}
            </div>
          </div>
        )}

        {/* AI Reasoning toggle */}
        <button
          onClick={() => setShowReasoning(!showReasoning)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-violet-400)",
            fontSize: "0.775rem",
            fontWeight: 500,
            textAlign: "left",
            padding: 0,
            marginBottom: "0.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          ✦ {showReasoning ? "Hide" : "Why this?"} AI reasoning
        </button>

        {showReasoning && (
          <div
            className="animate-fade-in"
            style={{
              padding: "0.75rem",
              background: "rgba(139,92,246,0.08)",
              border: "1px solid rgba(139,92,246,0.15)",
              borderRadius: "var(--radius-md)",
              fontSize: "0.8rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
              marginBottom: "0.75rem",
            }}
          >
            {reasoning}
          </div>
        )}

        {/* Tags */}
        <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap", marginBottom: "0.875rem", marginTop: "auto" }}>
          {product.isVegan && <span className="badge badge-violet" style={{ fontSize: "0.65rem" }}>Vegan</span>}
          {product.isCrueltyFree && <span className="badge badge-rose" style={{ fontSize: "0.65rem" }}>Cruelty-Free</span>}
          {product.spf && <span className="badge badge-gold" style={{ fontSize: "0.65rem" }}>SPF {product.spf}</span>}
        </div>

        {/* Add to cart */}
        <button
          className={addedToCart ? "btn-secondary" : "btn-primary"}
          id={`add-to-cart-${product.id}`}
          onClick={handleAddToCart}
          style={{ width: "100%", transition: "all 0.3s ease" }}
        >
          {addedToCart ? "✓ Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
