"use client";

import { useState, useEffect, useRef } from "react";
import { useStyliqueOS } from "./StyliqueOSProvider";
import { ProductCatalogueEngine, ShadeEngine, CartEngine, LearningEngine } from "@stylique/beauty-engine";
import { AIShadeSimulator } from "../simulator/AIShadeSimulator";
import type { ShadeMatch } from "@stylique/types";

export function SkinAnalysisAndTryOn() {
  const { activeDialog, setActiveDialog, tryOnProductId, profile, updateProfile, setIsAdvisorOpen } = useStyliqueOS();
  
  const [step, setStep] = useState<'camera' | 'scanning' | 'results'>('camera');
  const [activeShadeId, setActiveShadeId] = useState<string | null>(null);
  const [matchResult, setMatchResult] = useState<{ matches: ShadeMatch[], bestMatch: ShadeMatch | null, reasoning: string } | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

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

  const handleScan = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setStep('scanning');
      setTimeout(() => {
        // Mock scan results
        updateProfile({ skinToneDepth: 'medium', undertone: 'warm' });
        setStep('results');
        calculateShades();
      }, 3500);
    } catch (err) {
      console.error("Camera access denied or failed:", err);
      alert("Please allow camera access to use the AR Try-On.");
    }
  };

  // Cleanup camera when closing
  useEffect(() => {
    if (activeDialog !== 'try_on') {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
    }
  }, [activeDialog]);

  // Bind the camera stream to the video element once it mounts (when step changes to 'scanning' or 'results')
  useEffect(() => {
    if (videoRef.current && streamRef.current && videoRef.current.srcObject !== streamRef.current) {
      videoRef.current.srcObject = streamRef.current;
    }
  }, [step]);

  const calculateShades = () => {
    if (!profile.skinToneDepth || !profile.undertone || !product) return;
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
      background: "rgba(9, 9, 11, 0.95)", backdropFilter: "blur(24px)",
      display: "flex", flexDirection: "column",
    }}>
      {/* Header */}
      <div style={{ padding: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 className="text-heading-3" style={{ color: "var(--color-text-primary)" }}>Stylique AR Try-On</h2>
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

      <div style={{ flex: 1, display: "flex", flexDirection: "column", maxWidth: "500px", margin: "0 auto", width: "100%", padding: "0 1.5rem 1.5rem" }}>
        
        {/* Visual Area */}
        <div style={{ 
          flex: 1, position: "relative", borderRadius: "2rem", overflow: "hidden", 
          background: "var(--color-surface-overlay)",
          boxShadow: "0 24px 48px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05)"
        }}>
          
          {/* Camera Feed Background */}
          {(step === 'scanning' || step === 'results') && (
            <video 
              ref={videoRef}
              autoPlay 
              playsInline 
              muted
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: "scaleX(-1)", // Mirror effect
                zIndex: 0
              }}
            />
          )}

          {step === 'camera' && (
            <div className="animate-fade-in" style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem", zIndex: 1 }}>
              <div style={{ 
                width: "240px", height: "320px", 
                border: "2px dashed rgba(255,255,255,0.3)", 
                borderRadius: "120px",
                position: "relative"
              }}>
                <div className="animate-pulse-glow" style={{ position: "absolute", inset: "-4px", borderRadius: "120px", pointerEvents: "none" }} />
              </div>
              <button className="btn-primary" onClick={handleScan} style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}>
                Enable Camera to Scan
              </button>
            </div>
          )}

          {step === 'scanning' && (
            <div className="animate-fade-in" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)", zIndex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", color: "var(--color-text-primary)" }}>
                <div className="animate-spin-slow" style={{ width: "64px", height: "64px", borderRadius: "50%", border: "4px solid rgba(139,92,246,0.3)", borderTopColor: "var(--color-violet-500)" }} />
                <div style={{ textAlign: "center" }}>
                  <h3 className="text-heading-3" style={{ marginBottom: "0.5rem", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>Scanning Profile</h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9375rem", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>Analyzing depth and undertones...</p>
                </div>
              </div>
            </div>
          )}

          {step === 'results' && activeShade && profile.skinToneDepth && profile.undertone && (
            <div className="animate-fade-in" style={{ position: "absolute", inset: 0, padding: "1rem", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
               <AIShadeSimulator 
                 skinDepth={profile.skinToneDepth}
                 undertone={profile.undertone}
                 productCategory={product.category}
                 productColor={activeShade.hexColor}
                 opacity={0.85} // Make sure it's slightly transparent over the camera
               />
               
               {/* Before/After Toggle Overlay */}
               <div style={{ 
                 position: "absolute", bottom: "1.5rem", left: "1.5rem", 
                 background: "rgba(9, 9, 11, 0.6)", padding: "0.5rem 1rem", 
                 borderRadius: "2rem", color: "var(--color-text-primary)", 
                 fontSize: "0.8125rem", fontWeight: 600, backdropFilter: "blur(12px)",
                 border: "1px solid rgba(255,255,255,0.1)"
               }}>
                 <span style={{ color: "var(--color-emerald-500)", marginRight: "6px" }}>●</span> Live AR View
               </div>
            </div>
          )}
        </div>

        {/* Controls Area */}
        {step === 'results' && matchResult && (
          <div className="animate-fade-in-up delay-100" style={{ paddingTop: "2rem", background: "transparent" }}>
            
            {/* AI Reasoning */}
            {matchInfo && (
              <div style={{ 
                background: "rgba(139,92,246,0.1)", 
                border: "1px solid rgba(139,92,246,0.2)",
                padding: "1.25rem", borderRadius: "var(--radius-lg)", 
                marginBottom: "1.5rem" 
              }}>
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.75rem" }}>
                  <span style={{ color: "var(--color-violet-400)" }}>✦</span>
                  <span style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--color-violet-400)" }}>Stylique AI Match</span>
                </div>
                <p style={{ fontSize: "0.9375rem", color: "var(--color-text-primary)", lineHeight: 1.6, margin: 0 }}>
                  {matchInfo.reasoning}
                </p>
                <button onClick={handleAskAdvisor} style={{ background: "transparent", border: "none", color: "var(--color-violet-400)", padding: 0, fontSize: "0.875rem", marginTop: "0.75rem", cursor: "pointer", fontWeight: 500 }}>
                  Ask Stella for styling advice →
                </button>
              </div>
            )}

            {/* Shade Carousel */}
            <div style={{ display: "flex", gap: "1rem", overflowX: "auto", paddingBottom: "1.5rem", scrollbarWidth: "none" }}>
              {matchResult.matches.map(match => (
                <button
                  key={match.shade.id}
                  onClick={() => setActiveShadeId(match.shade.id)}
                  style={{
                    flexShrink: 0,
                    width: "80px",
                    display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem",
                    background: "transparent", border: "none", cursor: "pointer",
                    padding: 0
                  }}
                >
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "50%",
                    background: match.hexColor,
                    border: activeShadeId === match.shade.id ? "3px solid var(--color-text-primary)" : "2px solid rgba(255,255,255,0.1)",
                    boxShadow: activeShadeId === match.shade.id ? "0 0 20px rgba(255,255,255,0.2)" : "none",
                    transform: activeShadeId === match.shade.id ? "scale(1.1)" : "scale(1)",
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  }} />
                  <span style={{ color: "var(--color-text-primary)", fontSize: "0.8125rem", textAlign: "center", opacity: activeShadeId === match.shade.id ? 1 : 0.6, fontWeight: activeShadeId === match.shade.id ? 600 : 400 }}>
                    {match.shade.name}
                  </span>
                  {match.matchType === 'best' && (
                    <span style={{ background: "var(--gradient-brand)", color: "white", padding: "3px 8px", borderRadius: "1rem", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.05em" }}>BEST</span>
                  )}
                </button>
              ))}
            </div>

            {/* Action Bar */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <button 
                className="btn-secondary"
                style={{ flex: 1, padding: "1.25rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                onClick={() => LearningEngine.logPreference(profile.id, 'save_shade', activeShadeId!)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                Save
              </button>
              <button 
                className="btn-primary"
                style={{ flex: 2, padding: "1.25rem", fontSize: "1rem" }}
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
