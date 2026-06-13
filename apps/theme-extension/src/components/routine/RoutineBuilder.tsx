import React, { useState } from 'react';
import type { Routine } from '@stylique/types';

interface RoutineBuilderProps {
  routine: Routine | null;
  onBack: () => void;
  primaryColor: string;
}

const ASSET_MAP: Record<string, string> = {
  primer: '/assets/primer.png',
  foundation: '/assets/foundation.png',
  powder: '/assets/powder.png' // fallback or specific map
};

export function RoutineBuilder({ routine, onBack, primaryColor }: RoutineBuilderProps) {
  const [added, setAdded] = useState(false);

  if (!routine) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--stella-text-secondary)' }}>
        <p>Loading your perfect routine...</p>
      </div>
    );
  }

  // Calculate total price if we had product objects mapped, here we mock it
  const mockTotalPrice = routine.steps.length * 45;
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'transparent' }}>
      
      {/* Header */}
      <div style={{ 
        background: 'var(--stella-primary)', color: 'white', padding: '1.25rem', 
        display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' 
      }}>
        <button onClick={onBack} style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', cursor: 'pointer', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}>←</button>
        <div>
          <div style={{ fontWeight: 700, fontSize: '15px' }}>{routine.name}</div>
          <div style={{ fontSize: '12px', opacity: 0.8 }}>{routine.steps.length} Steps • {routine.estimatedTime}</div>
        </div>
      </div>

      {/* Routine Steps */}
      <div className="stella-scroll" style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        <p style={{ color: 'var(--stella-text-secondary)', fontSize: '0.875rem', margin: 0, lineHeight: 1.5 }}>
          {routine.description}
        </p>

        <div style={{ position: 'relative' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', left: '15px', top: '10px', bottom: '10px', width: '2px', background: 'linear-gradient(to bottom, var(--stella-primary), rgba(139, 92, 246, 0.2))' }} />

          {routine.steps.map((step, idx) => {
            // Determine which mock image to show based on category or name
            let imgSrc = ASSET_MAP.foundation;
            if (step.product?.category === 'primer' || step.name.toLowerCase().includes('prep')) imgSrc = ASSET_MAP.primer;
            if (step.name.toLowerCase().includes('set')) imgSrc = ASSET_MAP.powder;

            return (
              <div key={step.id} style={{ position: 'relative', paddingLeft: '44px', marginBottom: idx === routine.steps.length - 1 ? 0 : '2rem' }}>
                
                {/* Timeline Dot */}
                <div style={{ 
                  position: 'absolute', left: '10px', top: '4px', width: '12px', height: '12px', 
                  borderRadius: '50%', background: 'var(--stella-primary)', border: '2px solid white',
                  boxShadow: '0 0 0 4px rgba(139, 92, 246, 0.2)' 
                }} />

                <div style={{ fontSize: '0.75rem', color: 'var(--stella-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Step {step.order}: {step.name}
                </div>
                
                <div style={{ 
                  marginTop: '0.5rem', background: 'rgba(255,255,255,0.6)', 
                  padding: '1rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.8)',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '0.5rem', background: 'white', padding: '4px', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={imgSrc} alt={step.product?.name || 'Product'} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--stella-text-primary)', fontSize: '0.875rem' }}>{step.product?.name || "Recommended Product"}</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--stella-text-secondary)', marginTop: '0.25rem' }}>{step.why}</div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', background: 'white', padding: '0.25rem 0.5rem', borderRadius: '1rem', border: '1px solid #e2e8f0', color: 'var(--stella-text-secondary)' }}>
                      {step.when}
                    </span>
                    <span style={{ fontSize: '0.75rem', background: 'white', padding: '0.25rem 0.5rem', borderRadius: '1rem', border: '1px solid #e2e8f0', color: 'var(--stella-text-secondary)' }}>
                      {step.duration}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* The 10x Value Driver: Add Entire Routine to Cart */}
      <div style={{ 
        padding: '1.5rem', 
        borderTop: '1px solid var(--stella-border-glass)', 
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(10px)'
      }}>
        <button 
          className="stella-btn-primary"
          style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}
          onClick={() => {
            setAdded(true);
            
            // Dispatch Analytics Event for 10x Revenue Tracking
            fetch('/api/analytics', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                type: 'cart_add',
                sessionId: 'session_123',
                brandId: 'brand_xyz',
                data: {
                  source: 'routine_builder',
                  _source: 'stylique_ai',
                  value: mockTotalPrice,
                  items: routine.steps.length
                }
              })
            }).catch(e => console.error(e));

            setTimeout(() => setAdded(false), 2000);
          }}
        >
          <span>{added ? '✓ Added Successfully' : 'Add Entire Routine to Cart'}</span>
          {!added && <span>${mockTotalPrice}.00</span>}
        </button>

        {/* Email Capture for Restock Cron Loop */}
        <div style={{ 
          background: 'rgba(139, 92, 246, 0.05)', 
          border: '1px solid rgba(139, 92, 246, 0.2)', 
          padding: '1rem', 
          borderRadius: '12px' 
        }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--stella-primary)', marginBottom: '8px' }}>
            Never run out of your perfect shade
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--stella-text-secondary)', marginBottom: '12px', marginTop: 0 }}>
            Save this routine to your email and Stella will automatically remind you when it's time to restock based on your usage.
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input 
              type="email" 
              placeholder="your@email.com" 
              id="stella-email-capture"
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                outline: 'none',
                fontSize: '0.875rem'
              }}
            />
            <button
              onClick={(e) => {
                const btn = e.currentTarget;
                const emailInput = document.getElementById('stella-email-capture') as HTMLInputElement;
                if (!emailInput.value) return;

                btn.innerText = 'Saved!';
                btn.style.background = '#10b981';
                btn.style.color = 'white';
                btn.style.borderColor = '#10b981';

                fetch('/api/routine/save', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    email: emailInput.value,
                    routine: routine,
                    sessionId: 'session_123',
                    shop: 'fallback.myshopify.com'
                  })
                }).catch(err => console.error(err));
              }}
              style={{
                background: 'white',
                border: '1px solid var(--stella-primary)',
                color: 'var(--stella-primary)',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Save
            </button>
          </div>
        </div>

        {/* Related Products Discovery Carousel */}
        <div style={{ marginTop: '1.5rem' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--stella-text-primary)', marginBottom: '12px' }}>
            Complete the Look
          </div>
          <div className="stella-carousel">
            {[
              { id: 'acc1', name: 'Pro Blending Sponge', price: 18, img: '🧽' },
              { id: 'acc2', name: 'Luminous Setting Spray', price: 32, img: '✨' },
              { id: 'acc3', name: 'Precision Lip Brush', price: 22, img: '🖌️' }
            ].map(item => (
              <div key={item.id} className="stella-carousel-item">
                <div style={{ fontSize: '2rem', textAlign: 'center', margin: '8px 0' }}>{item.img}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--stella-text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {item.name}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--stella-text-secondary)' }}>${item.price}</span>
                  <button style={{ background: 'var(--stella-secondary, #f1f5f9)', border: 'none', borderRadius: '4px', padding: '4px 8px', fontSize: '0.7rem', fontWeight: 600, color: 'var(--stella-primary)', cursor: 'pointer' }}>
                    + Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}
