"use client";

import { useState, useEffect } from "react";
import { useStyliqueOS } from "./StyliqueOSProvider";
import { ProductCatalogueEngine, ShadeEngine, CartEngine, LearningEngine } from "@stylique/beauty-engine";
import { AIShadeSimulator } from "../simulator/AIShadeSimulator";
import type { ShadeMatch } from "@stylique/types";

export function SkinAnalysisAndTryOn() {
  const { activeDialog, setActiveDialog, tryOnProductId, profile, updateProfile, setIsAdvisorOpen } = useStyliqueOS();
  
  const [step, setStep] = useState<'camera' | 'scanning' | 'results'>('camera');
  const [activeShadeId, setActiveShadeId] = useState<string | null>(null);
  const [matchResult, setMatchResult] = useState<{ matches: ShadeMatch[], bestMatch: ShadeMatch | null, reasoning: string } | null>(null);

  useEffect(() => {
    if (activeDialog === 'try_on' && step === 'camera') {
      // Auto-progress mock flow if profile exists, otherwise scan
      if (profile.skinToneDepth && profile.undertone) {
        setStep('results');
        calculateShades();
      }
    }
  }, [activeDialog, step, profile.skinToneDepth]);

  const product = tryOnProductId ? ProductCatalogueEngine.getProductById(tryOnProductId) : null;

  if (activeDialog !== 'try_on' || !product) return null;

  const handleScan = () => {
    setStep('scanning');
    setTimeout(() => {
      // Mock scan results
      updateProfile({ skinToneDepth: 'medium', undertone: 'warm' });
      setStep('results');
      calculateShades();
    }, 2500);
  };

  const calculateShades = () => {
    if (!profile.skinToneDepth || !profile.undertone) return;
    const result = ShadeEngine.matchShade(product, profile);
    if (result) {
      setMatchResult(result);
      setActiveShadeId(result.bestMatch?.shade.id ?? null);
    }
  };

  const handleAddToCart = () => {
    if (activeShadeId) {
      CartEngine.addSingleProduct(product.id, activeShadeId);
      LearningEngine.logPreference(profile.id, 'try_on', activeShadeId);
      alert(`Added ${product.name} to cart!`);
    }
  };

  const handleAskAdvisor = () => {
    setActiveDialog('none');
    setIsAdvisorOpen(true);
  };

  const activeShade = product.shades.find(s => s.id === activeShadeId);
  const matchInfo = matchResult?.matches.find(m => m.shade.id === activeShadeId);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 10000,
      background: "rgba(0,0,0,0.9)", backdropFilter: "blur(12px)",
      display: "flex", flexDirection: "column",
    }}>
      {/* Header */}
      <div style={{ padding: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 className="text-heading-3" style={{ color: "white" }}>Stylique AR Try-On</h2>
        <button onClick={() => setActiveDialog('none')} style={{ background: "transparent", border: "none", color: "white", fontSize: "1.5rem", cursor: "pointer" }}>✕</button>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", maxWidth: "500px", margin: "0 auto", width: "100%", padding: "0 1rem" }}>
        
        {/* Visual Area */}
        <div style={{ flex: 1, position: "relative", borderRadius: "2rem", overflow: "hidden", background: "#111" }}>
          
          {step === 'camera' && (
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem" }}>
              <div style={{ width: "200px", height: "280px", border: "2px dashed rgba(255,255,255,0.5)", borderRadius: "50%" }} />
              <button className="btn-primary" onClick={handleScan}>Enable Camera to Scan</button>
            </div>
          )}

          {step === 'scanning' && (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="animate-pulse" style={{ color: "white", textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📸</div>
                <p>Checking lighting...</p>
                <p>Analyzing undertones...</p>
              </div>
            </div>
          )}

          {step === 'results' && activeShade && profile.skinToneDepth && profile.undertone && (
            <div style={{ position: "absolute", inset: 0, padding: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
               <AIShadeSimulator 
                 skinDepth={profile.skinToneDepth}
                 undertone={profile.undertone}
                 productCategory={product.category}
                 productColor={activeShade.hexColor}
                 opacity={1}
               />
               
               {/* Before/After Toggle Overlay (Mock) */}
               <div style={{ position: "absolute", bottom: "1rem", left: "1rem", background: "rgba(0,0,0,0.5)", padding: "0.5rem 1rem", borderRadius: "1rem", color: "white", fontSize: "0.75rem", backdropFilter: "blur(4px)" }}>
                 Live AR View
               </div>
            </div>
          )}
        </div>

        {/* Controls Area */}
        {step === 'results' && matchResult && (
          <div className="animate-fade-in-up" style={{ padding: "1.5rem 0", background: "transparent" }}>
            
            {/* AI Reasoning */}
            {matchInfo && (
              <div style={{ background: "rgba(255,255,255,0.1)", padding: "1rem", borderRadius: "1rem", marginBottom: "1rem", color: "white" }}>
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.5rem" }}>
                  <span>✨</span>
                  <span style={{ fontWeight: 600, fontSize: "0.875rem" }}>Stylique AI</span>
                </div>
                <p style={{ fontSize: "0.875rem", opacity: 0.9, lineHeight: 1.5, margin: 0 }}>
                  {matchInfo.reasoning}
                </p>
                <button onClick={handleAskAdvisor} style={{ background: "transparent", border: "none", color: "var(--color-violet-400)", padding: 0, fontSize: "0.8125rem", marginTop: "0.5rem", cursor: "pointer", textDecoration: "underline" }}>
                  Ask Stella for styling advice
                </button>
              </div>
            )}

            {/* Shade Carousel */}
            <div style={{ display: "flex", gap: "0.75rem", overflowX: "auto", paddingBottom: "1rem", scrollbarWidth: "none" }}>
              {matchResult.matches.map(match => (
                <button
                  key={match.shade.id}
                  onClick={() => setActiveShadeId(match.shade.id)}
                  style={{
                    flexShrink: 0,
                    width: "72px",
                    display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
                    background: "transparent", border: "none", cursor: "pointer"
                  }}
                >
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    background: match.hexColor,
                    border: activeShadeId === match.shade.id ? "3px solid white" : "1px solid rgba(255,255,255,0.3)",
                    boxShadow: activeShadeId === match.shade.id ? "0 0 16px rgba(255,255,255,0.3)" : "none",
                    transform: activeShadeId === match.shade.id ? "scale(1.1)" : "scale(1)",
                    transition: "all 0.2s ease"
                  }} />
                  <span style={{ color: "white", fontSize: "0.7rem", textAlign: "center", opacity: activeShadeId === match.shade.id ? 1 : 0.6 }}>
                    {match.shade.name}
                  </span>
                  {match.matchType === 'best' && (
                    <span style={{ background: "#22c55e", color: "black", padding: "2px 6px", borderRadius: "4px", fontSize: "0.6rem", fontWeight: 700 }}>BEST</span>
                  )}
                </button>
              ))}
            </div>

            {/* Action Bar */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
              <button 
                style={{ flex: 1, padding: "1rem", background: "rgba(255,255,255,0.1)", color: "white", border: "none", borderRadius: "var(--radius-md)", fontWeight: 600, cursor: "pointer" }}
                onClick={() => LearningEngine.logPreference(profile.id, 'save_shade', activeShadeId!)}
              >
                ♡ Save
              </button>
              <button 
                className="btn-primary"
                style={{ flex: 2, padding: "1rem", fontSize: "1rem" }}
                onClick={handleAddToCart}
              >
                Add {activeShade?.name} to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
