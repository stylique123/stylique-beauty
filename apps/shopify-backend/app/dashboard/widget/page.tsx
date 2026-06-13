"use client";

import { useState } from "react";

export default function WidgetConfigPage() {
  const [primaryColor, setPrimaryColor] = useState("#8b5cf6");
  const [greeting, setGreeting] = useState("Hi! I'm Stella, your beauty advisor.");

  return (
    <div>
      <h1 className="text-heading-2" style={{ marginBottom: "2rem" }}>Widget Configuration</h1>
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
        {/* Settings Form */}
        <div className="card" style={{ padding: "2rem" }}>
          <h2 className="text-heading-3" style={{ marginBottom: "1.5rem" }}>Appearance</h2>
          
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.5rem" }}>Primary Brand Color</label>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <input 
                type="color" 
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                style={{ width: "48px", height: "48px", padding: 0, border: "none", borderRadius: "0.5rem", cursor: "pointer" }}
              />
              <input 
                type="text" 
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                style={{ padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid var(--color-border-subtle)", flex: 1 }}
              />
            </div>
          </div>

          <h2 className="text-heading-3" style={{ margin: "2.5rem 0 1.5rem" }}>AI Persona</h2>
          
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.5rem" }}>Initial Greeting</label>
            <textarea 
              value={greeting}
              onChange={(e) => setGreeting(e.target.value)}
              rows={3}
              style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid var(--color-border-subtle)", resize: "none" }}
            />
          </div>

          <button className="btn-primary" style={{ width: "100%" }}>Save Configuration</button>
        </div>

        {/* Live Preview */}
        <div>
          <h2 className="text-heading-3" style={{ marginBottom: "1.5rem" }}>Live Preview</h2>
          <div style={{ 
            height: "500px", 
            background: "#eaeaea", 
            borderRadius: "1rem",
            position: "relative",
            overflow: "hidden",
            border: "1px solid var(--color-border-subtle)"
          }}>
            {/* Mock Store content */}
            <div style={{ padding: "2rem", color: "#999", textAlign: "center", paddingTop: "4rem" }}>
              Your Storefront Here
            </div>

            {/* Mock Widget */}
            <div style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <div style={{ 
                width: "300px", 
                background: "white", 
                borderRadius: "1rem", 
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                marginBottom: "1rem",
                overflow: "hidden"
              }}>
                <div style={{ background: primaryColor, padding: "1rem", color: "white", fontWeight: 600 }}>
                  Stella
                </div>
                <div style={{ padding: "1.5rem", fontSize: "0.875rem" }}>
                  <div style={{ background: "#f1f5f9", padding: "0.75rem", borderRadius: "0.5rem", borderBottomLeftRadius: 0, display: "inline-block" }}>
                    {greeting}
                  </div>
                </div>
              </div>
              
              <button style={{ 
                width: "56px", height: "56px", borderRadius: "50%", 
                background: primaryColor, border: "none", color: "white", 
                fontSize: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: `0 8px 24px ${primaryColor}80`
              }}>
                ✦
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
