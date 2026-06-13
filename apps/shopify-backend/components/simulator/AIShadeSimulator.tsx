"use client";

import { useEffect, useState } from "react";
import type { SkinToneDepth, Undertone, ProductCategory } from "@stylique/types";

// Skin tone base hex mappings
const SKIN_DEPTH_COLORS: Record<SkinToneDepth, string> = {
  fair: "#FFE0D3",
  light: "#F5D0B5",
  medium: "#D4A373",
  tan: "#B57A4B",
  deep: "#8A5A44",
  rich: "#5B3A29",
};

// Undertone adjustments (slight RGB shifts)
const UNDERTONE_FILTERS: Record<Undertone, string> = {
  cool: "hue-rotate(-5deg) saturate(1.1) brightness(1.05)",
  warm: "hue-rotate(5deg) saturate(1.15)",
  neutral: "hue-rotate(0deg)",
  olive: "hue-rotate(15deg) saturate(0.9)",
};

// Blend modes by product category
const getBlendMode = (category: ProductCategory) => {
  switch (category) {
    case "foundation":
    case "concealer":
      return "normal"; // Opaque coverage
    case "blush":
    case "bronzer":
      return "multiply"; // Sheer, darkening
    case "highlighter":
      return "screen"; // Sheer, lightening
    case "lipstick":
    case "lip_gloss":
      return "overlay"; // Rich color
    case "eyeshadow":
      return "color-burn";
    default:
      return "soft-light";
  }
};

interface AIShadeSimulatorProps {
  skinDepth?: SkinToneDepth | null;
  undertone?: Undertone | null;
  productColor?: string | null;
  productCategory?: ProductCategory;
  opacity?: number;
}

export function AIShadeSimulator({
  skinDepth = "medium",
  undertone = "neutral",
  productColor,
  productCategory = "foundation",
  opacity = 0.85,
}: AIShadeSimulatorProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const baseSkinColor = skinDepth ? SKIN_DEPTH_COLORS[skinDepth] : SKIN_DEPTH_COLORS.medium;
  const undertoneFilter = undertone ? UNDERTONE_FILTERS[undertone] : UNDERTONE_FILTERS.neutral;
  const blendMode = getBlendMode(productCategory);

  if (!mounted) return <div className="skeleton" style={{ width: "100%", height: "240px", borderRadius: "1rem" }} />;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "240px",
        borderRadius: "1rem",
        overflow: "hidden",
        backgroundColor: baseSkinColor,
        filter: undertoneFilter,
        boxShadow: "inset 0 0 40px rgba(0,0,0,0.1)",
        transition: "all 0.4s ease",
      }}
    >
      {/* Procedural Skin Texture (SVG Noise) */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.15,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.5"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Lighting / Spherical gradient to simulate cheek/wrist curvature */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.2) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Product Shade Overlay */}
      {productColor && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          {/* A blended smudge of the product color */}
          <div
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              backgroundColor: productColor,
              mixBlendMode: blendMode as any,
              opacity: opacity,
              filter: "blur(20px)",
              transition: "background-color 0.4s ease",
            }}
          />
        </div>
      )}

      {/* Label Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(8px)",
          padding: "0.25rem 0.75rem",
          borderRadius: "1rem",
          color: "white",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        {skinDepth} {undertone}
      </div>
    </div>
  );
}
