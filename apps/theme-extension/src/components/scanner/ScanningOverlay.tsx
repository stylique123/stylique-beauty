import React, { useEffect, useState } from 'react';

export function ScanningOverlay({ isScanning }: { isScanning: boolean }) {
  const [logMessages, setLogMessages] = useState<string[]>([]);

  useEffect(() => {
    if (!isScanning) {
      setLogMessages([]);
      return;
    }

    const logs = [
      "Calibrating lighting...",
      "Mapping facial topography...",
      "Detecting 120 key points...",
      "Extracting epidermal pigment data...",
      "Analyzing tone depth...",
      "Calculating undertone matrices...",
      "Finalizing Beauty Profile..."
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < logs.length) {
        setLogMessages(prev => [...prev.slice(-2), logs[currentIndex]]); // keep last 3
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 450); // new log every ~0.5s

    return () => clearInterval(interval);
  }, [isScanning]);

  if (!isScanning) return null;

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'rgba(15, 23, 42, 0.4)',
      backdropFilter: 'blur(2px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10,
      pointerEvents: 'none' // allow clicks through if needed
    }}>
      
      {/* Face Targeting Reticle */}
      <div style={{
        width: '280px',
        height: '380px',
        border: '2px solid rgba(139, 92, 246, 0.5)',
        borderRadius: '100px',
        position: 'relative',
        boxShadow: '0 0 40px rgba(139, 92, 246, 0.2) inset'
      }}>
        {/* Scanning laser line animation */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '2px',
          background: 'var(--primary-color, #8b5cf6)',
          boxShadow: '0 0 15px 3px var(--primary-color, #8b5cf6)',
          animation: 'scan-laser 2.5s infinite ease-in-out'
        }} />
      </div>

      {/* Futuristic Log Output */}
      <div style={{
        position: 'absolute',
        bottom: '80px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.25rem'
      }}>
        {logMessages.map((msg, i) => (
          <div key={i} style={{
            fontSize: '0.75rem',
            fontFamily: 'monospace',
            color: 'white',
            opacity: i === logMessages.length - 1 ? 1 : 0.4,
            textShadow: '0 1px 2px rgba(0,0,0,0.8)'
          }}>
            &gt; {msg}
          </div>
        ))}
      </div>
      
      <style>
        {`
          @keyframes scan-laser {
            0% { top: 10%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 90%; opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}
