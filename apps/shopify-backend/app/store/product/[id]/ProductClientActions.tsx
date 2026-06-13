"use client";

import { useStyliqueOS } from "../../../../components/os/StyliqueOSProvider";

export function ProductClientActions({ productId }: { productId: string }) {
  const { setActiveDialog, setTryOnProductId } = useStyliqueOS();

  return (
    <div style={{ position: "absolute", bottom: "1rem", right: "1rem", display: "flex", gap: "0.5rem" }}>
      <button 
        onClick={() => {
          setTryOnProductId(productId);
          setActiveDialog('try_on');
        }}
        style={{
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(0,0,0,0.1)",
          padding: "0.5rem 1rem",
          borderRadius: "2rem",
          fontSize: "0.875rem",
          fontWeight: 600,
          color: "#111",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        <span style={{ fontSize: "1.125rem" }}>✨</span> Try It On AR
      </button>
    </div>
  );
}
