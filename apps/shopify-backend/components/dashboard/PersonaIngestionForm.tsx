"use client";

import React, { useState } from 'react';

export function PersonaIngestionForm() {
  const [url, setUrl] = useState('https://www.lumiglowbeauty.com');
  const [isScraping, setIsScraping] = useState(false);
  const [persona, setPersona] = useState({
    toneOfVoice: "Warm, Clinical, Expert",
    coreEthos: "Science-backed formulas with clean ingredients. Always vegan.",
    blacklistedIngredients: "Parabens, Sulfates, Phthalates",
    usps: "Dermatologist tested, 100% Vegan, Customizable routines"
  });

  const handleScrape = async () => {
    setIsScraping(true);
    // Simulate the API call to /api/brand/ingest
    setTimeout(() => {
      setIsScraping(false);
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Ingestion Trigger */}
      <div style={{ 
        background: 'white', 
        padding: '2rem', 
        borderRadius: '1rem', 
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(226, 232, 240, 0.8)'
      }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Automated AI Brand Ingestion</h3>
        <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
          Paste your website URL. Our LLM pipeline will aggressively scrape your copy to extract your exact brand persona, tone of voice, and USPs.
        </p>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <input 
            type="text" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{ 
              flex: 1, 
              padding: '0.75rem 1rem', 
              borderRadius: '0.5rem', 
              border: '1px solid #cbd5e1',
              fontSize: '1rem'
            }} 
          />
          <button 
            onClick={handleScrape}
            disabled={isScraping}
            style={{ 
              background: isScraping ? '#94a3b8' : 'var(--gradient-brand)', 
              color: 'white', 
              border: 'none', 
              padding: '0 1.5rem', 
              borderRadius: '0.5rem',
              fontWeight: 600,
              cursor: isScraping ? 'not-allowed' : 'pointer'
            }}
          >
            {isScraping ? 'Extracting DNA...' : 'Scrape Brand'}
          </button>
        </div>
      </div>

      {/* Manual Override Form */}
      <div style={{ 
        background: 'white', 
        padding: '2rem', 
        borderRadius: '1rem', 
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(226, 232, 240, 0.8)'
      }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Persona Override</h3>
        <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
          Stella uses this exact configuration in her core system prompt. You can manually tweak the extracted values here.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>Tone of Voice</label>
            <input 
              type="text" 
              value={persona.toneOfVoice}
              onChange={(e) => setPersona({...persona, toneOfVoice: e.target.value})}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>Core Ethos</label>
            <textarea 
              value={persona.coreEthos}
              onChange={(e) => setPersona({...persona, coreEthos: e.target.value})}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', minHeight: '80px', resize: 'vertical' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>Unique Selling Propositions (USPs)</label>
            <textarea 
              value={persona.usps}
              onChange={(e) => setPersona({...persona, usps: e.target.value})}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', minHeight: '80px', resize: 'vertical' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>Blacklisted Ingredients</label>
            <input 
              type="text" 
              value={persona.blacklistedIngredients}
              onChange={(e) => setPersona({...persona, blacklistedIngredients: e.target.value})}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', color: '#b91c1c' }}
            />
            <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>Stella will explicitly call out the absence of these ingredients when overcoming hesitation.</p>
          </div>

        </div>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{ 
            background: '#0f172a', 
            color: 'white', 
            border: 'none', 
            padding: '0.75rem 2rem', 
            borderRadius: '0.5rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            Save Configuration
          </button>
        </div>
      </div>

    </div>
  );
}
