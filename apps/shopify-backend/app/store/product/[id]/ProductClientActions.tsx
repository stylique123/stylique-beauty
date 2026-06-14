"use client";

import { useStyliqueOS } from "../../../../components/os/StyliqueOSProvider";

export function ProductClientActions({ productId }: { productId: string }) {
  const { setActiveDialog, setTryOnProductId } = useStyliqueOS();

  return (
    <div style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", display: "flex", gap: "0.5rem", zIndex: 10 }}>
      <button 
        onClick={(e) => {
          e.preventDefault();
          setTryOnProductId(productId);
          setActiveDialog('try_on');
        }}
        className="animate-pulse-glow"
        style={{
          background: "rgba(9, 9, 11, 0.8)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          padding: "0.75rem 1.25rem",
          borderRadius: "2rem",
          fontSize: "0.9375rem",
          fontWeight: 600,
          color: "var(--color-text-primary)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.background = "var(--color-surface-overlay)";
          e.currentTarget.style.borderColor = "var(--color-violet-500)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.background = "rgba(9, 9, 11, 0.8)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
        }}
      >
        <span style={{ fontSize: "1.25rem" }}>✨</span> Try It On AR
      </button>
    </div>
  );
}
