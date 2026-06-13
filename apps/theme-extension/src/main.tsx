import React, { useEffect, Suspense, lazy, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { useFrictionTracker } from './hooks/useFrictionTracker';
import { useWidgetState } from './store/widgetStore';
import { useCameraStore } from './store/cameraStore';
const CameraView = lazy(() => import('./components/scanner/CameraView').then(m => ({ default: m.CameraView })));
import { RoutineBuilder } from './components/routine/RoutineBuilder';
import type { Routine } from '@stylique/types';
import './style.css';

function StellaWidgetApp({ shopDomain, brandId, primaryColor }: { shopDomain: string, brandId: string, primaryColor: string }) {
  const { hesitation, setHesitation } = useFrictionTracker(shopDomain, brandId);
  const { isOpen, setIsOpen, toggleOpen, activeView, setActiveView, messages, addMessage, currentRoutine, setCurrentRoutine } = useWidgetState();
  const { cameraState, openCamera } = useCameraStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && activeView === 'chat') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, activeView]);

  useEffect(() => {
    if (hesitation === 'shade_confusion') {
      setIsOpen(true);
      setActiveView('chat');
      addMessage('assistant', "I notice you're comparing shades. Based on your profile, I can calculate the exact mathematical match. Would you like me to find your perfect shade and apply it in AR?");
      setHesitation(null);
    } else if (hesitation === 'ingredient_hesitation') {
      setIsOpen(true);
      setActiveView('chat');
      addMessage('assistant', "I see you're checking the ingredients. This formula is 100% clean and non-comedogenic. Do you have any specific sensitivities I should double-check for you?");
      setHesitation(null);
    }
  }, [hesitation, setIsOpen, setActiveView, addMessage, setHesitation]);

  useEffect(() => {
    const handleOpenRoutine = () => {
      setIsOpen(true);
      setActiveView('routine');
      // Mock generating a routine based on the scan
      setCurrentRoutine({
        id: 'mock-123',
        shopperId: '123',
        type: 'morning',
        name: 'The "Olive Glow" Routine',
        description: 'Based on your Olive undertone and Combination skin, this matte-finish routine is mathematically perfect for you.',
        totalProducts: 3,
        estimatedTime: '5 mins',
        occasion: null,
        createdAt: new Date(),
        steps: [
          {
            id: 'step1', order: 1, name: 'Prep', why: 'Oil-free primer controls shine in your T-zone.',
            when: 'Morning', how: 'Apply a pea-sized amount.', duration: '1 min', tips: [],
            product: { id: 'p1', name: 'Matte Perfection Primer', category: 'primer', price: 45 } as any,
            productId: 'p1'
          },
          {
            id: 'step2', order: 2, name: 'Base', why: 'Shade #342 Olive perfectly matches your deep undertone.',
            when: 'Morning', how: 'Blend outward with a sponge.', duration: '2 mins', tips: [],
            product: { id: 'p2', name: 'Luminous Foundation', category: 'foundation', price: 55 } as any,
            productId: 'p2'
          },
          {
            id: 'step3', order: 3, name: 'Set', why: 'Translucent powder locks it all in.',
            when: 'Morning', how: 'Dust lightly over T-zone.', duration: '1 min', tips: [],
            product: { id: 'p3', name: 'Airbrush Setting Powder', category: 'primer', price: 42 } as any,
            productId: 'p3'
          }
        ]
      } as Routine);
    };

    window.addEventListener('stella-open-routine', handleOpenRoutine);
    return () => window.removeEventListener('stella-open-routine', handleOpenRoutine);
  }, [setIsOpen, setActiveView, setCurrentRoutine]);

  return (
    <div className="stella-widget-container" style={{ '--primary-color': primaryColor } as React.CSSProperties}>
      
      {/* Widget Panel */}
      {isOpen && (
        <div className="stella-panel">
          {activeView === 'chat' ? (
            <>
              {/* Chat Header */}
              <div style={{ 
                background: 'var(--stella-primary)', 
                color: 'white', 
                padding: '1.25rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ 
                    width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px'
                  }}>✨</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '15px' }}>Stella</div>
                    <div style={{ fontSize: '12px', opacity: 0.8 }}>Active now</div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} style={{ 
                  background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', cursor: 'pointer',
                  width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                >✕</button>
              </div>
              
              {/* Messages */}
              <div className="stella-scroll" style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {messages.map((msg, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignSelf: msg.role === 'assistant' ? 'flex-start' : 'flex-end', maxWidth: '85%' }}>
                    <div className={`stella-msg ${msg.role === 'assistant' ? 'stella-msg-assistant' : 'stella-msg-user'}`} style={{ maxWidth: '100%' }}>
                      {msg.text}
                    </div>
                    {/* Render Add to Cart if message has product metadata */}
                    {msg.role === 'assistant' && msg.metadata?.products && msg.metadata.products.length > 0 && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                        {msg.metadata.products.map(product => (
                          <div key={product.id} style={{
                            background: 'white',
                            border: '1px solid var(--stella-border-glass)',
                            padding: '0.75rem',
                            borderRadius: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '1rem',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                          }}>
                            <div>
                              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--stella-text-primary)' }}>{product.name}</div>
                              <div style={{ fontSize: '0.75rem', color: 'var(--stella-text-secondary)' }}>${product.price}.00</div>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                              {product.handle && (
                                <a 
                                  href={`/products/${product.handle}`}
                                  style={{
                                    background: 'var(--stella-secondary, #f1f5f9)',
                                    border: '1px solid var(--stella-border, #cbd5e1)',
                                    padding: '0.35rem 0.75rem',
                                    borderRadius: '0.75rem',
                                    fontSize: '0.7rem',
                                    fontWeight: 600,
                                    color: 'var(--stella-text-primary, #334155)',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center'
                                  }}
                                >
                                  View
                                </a>
                              )}
                              <button 
                                onClick={(e) => {
                                  const btn = e.currentTarget;
                                  btn.innerText = '✓ Added';
                                  btn.style.background = '#10b981';
                                  btn.style.color = 'white';
                                  btn.style.borderColor = '#10b981';
                                  
                                  fetch('/api/analytics', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({
                                      type: 'cart_add',
                                      sessionId: 'session_123',
                                      brandId: 'brand_xyz',
                                      data: { source: 'chat', value: product.price, items: 1, productId: product.id }
                                    })
                                  }).catch(err => console.error(err));
                                }}
                                style={{
                                  background: 'transparent',
                                  border: '1px solid var(--stella-primary)',
                                  padding: '0.35rem 0.75rem',
                                  borderRadius: '0.75rem',
                                  fontSize: '0.7rem',
                                  fontWeight: 600,
                                  color: 'var(--stella-primary)',
                                  cursor: 'pointer',
                                  transition: 'all 0.2s'
                                }}
                              >
                                + Add
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* CTA to launch AR */}
                <button 
                  className="stella-btn-primary"
                  style={{ marginTop: '1.5rem', alignSelf: 'center', width: '100%' }}
                  onClick={() => {
                    setIsOpen(false); // hide chat while AR is full screen
                    openCamera();
                  }}
                >
                  Launch AR Try-On & Skin Scan
                </button>
                <div ref={messagesEndRef} />
              </div>
            </>
          ) : (
            <RoutineBuilder 
              routine={currentRoutine} 
              onBack={() => setActiveView('chat')} 
              primaryColor={primaryColor} 
            />
          )}
        </div>
      )}

      {/* FAB */}
      <button className={`stella-fab ${isOpen ? '' : 'stella-fab-pulse'}`} onClick={toggleOpen}>
        <span style={{ fontSize: '20px' }}>✨</span> 
        {isOpen ? 'Close' : 'Stella'}
      </button>

      {/* AR Camera Experience */}
      {cameraState !== 'closed' && (
        <Suspense fallback={<div style={{ position: 'fixed', inset: 0, background: 'black', zIndex: 9999 }} />}>
          <CameraView />
        </Suspense>
      )}
    </div>
  );
}

// Find the mount point injected by the Liquid block
const rootElement = document.getElementById('stylique-stella-root');

if (rootElement) {
  // Extract configuration passed from Liquid data attributes
  const shopDomain = rootElement.getAttribute('data-shop-domain') || '';
  const brandId = rootElement.getAttribute('data-brand-id') || '';
  const primaryColor = rootElement.getAttribute('data-primary-color') || '#8B5CF6';

  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <StellaWidgetApp shopDomain={shopDomain} brandId={brandId} primaryColor={primaryColor} />
    </React.StrictMode>
  );
}
