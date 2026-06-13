import React from "react";
import { CatalogGapsList } from "../../../components/dashboard/CatalogGapsList";

export default function CatalogIntelligencePage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>Catalog Intelligence (The Moat)</h1>
        <p style={{ color: "#64748b", fontSize: "1rem" }}>
          Stella analyzes every interaction where a shopper requests a product that does not exist in your catalog. 
          Use this exact data to inform your R&D pipeline and capture lost revenue.
        </p>
      </div>
      
      <CatalogGapsList />
      
      <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <div style={{ padding: "2rem", background: "white", borderRadius: "1rem", border: "1px solid #e2e8f0" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0f172a", marginBottom: "1rem" }}>Top Missing Shades</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#475569" }}>Olive Undertone (Medium)</span>
              <span style={{ fontWeight: 600 }}>142 requests</span>
            </li>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#475569" }}>Cool Undertone (Fair)</span>
              <span style={{ fontWeight: 600 }}>98 requests</span>
            </li>
          </ul>
        </div>

        <div style={{ padding: "2rem", background: "white", borderRadius: "1rem", border: "1px solid #e2e8f0" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0f172a", marginBottom: "1rem" }}>Top Missing Formulas</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#475569" }}>Oil-free Matte Primer</span>
              <span style={{ fontWeight: 600 }}>64 requests</span>
            </li>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#475569" }}>Fragrance-free Cleanser</span>
              <span style={{ fontWeight: 600 }}>31 requests</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
