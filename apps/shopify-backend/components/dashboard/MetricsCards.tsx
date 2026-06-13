import React from 'react';

export function MetricsCards() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
      {/* Metric 1 */}
      <div style={{ 
        background: 'white', 
        padding: '2rem', 
        borderRadius: '1rem', 
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(226, 232, 240, 0.8)'
      }}>
        <div style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
          Total Stella Revenue
        </div>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
          $14,250
          <span style={{ fontSize: '1rem', color: '#10b981', fontWeight: 600 }}>+24%</span>
        </div>
        <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem' }}>vs last week</div>
      </div>

      {/* Metric 2 */}
      <div style={{ 
        background: 'linear-gradient(135deg, rgba(139,92,246,0.05) 0%, rgba(217,70,239,0.05) 100%)', 
        padding: '2rem', 
        borderRadius: '1rem', 
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(139,92,246,0.2)'
      }}>
        <div style={{ color: 'var(--color-violet-600)', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
          Stella AOV Lift
        </div>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
          +$22.50
          <span style={{ fontSize: '1rem', color: '#10b981', fontWeight: 600 }}>+8%</span>
        </div>
        <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem' }}>Higher AOV when shoppers use Stella</div>
      </div>

      {/* Metric 3 */}
      <div style={{ 
        background: 'white', 
        padding: '2rem', 
        borderRadius: '1rem', 
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(226, 232, 240, 0.8)'
      }}>
        <div style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
          Friction Interceptions
        </div>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
          438
          <span style={{ fontSize: '1rem', color: '#10b981', fontWeight: 600 }}>+12%</span>
        </div>
        <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem' }}>Hesitations caught and resolved</div>
      </div>
    </div>
  );
}
