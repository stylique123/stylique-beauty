import React from 'react';

export function FrictionInterceptionChart() {
  // Mock data for the chart to simulate the impact of the FrictionTracker
  const data = [
    { label: 'Mon', shade_confusion: 12, ingredient_hesitation: 8 },
    { label: 'Tue', shade_confusion: 19, ingredient_hesitation: 5 },
    { label: 'Wed', shade_confusion: 15, ingredient_hesitation: 10 },
    { label: 'Thu', shade_confusion: 22, ingredient_hesitation: 14 },
    { label: 'Fri', shade_confusion: 28, ingredient_hesitation: 18 },
    { label: 'Sat', shade_confusion: 35, ingredient_hesitation: 22 },
    { label: 'Sun', shade_confusion: 42, ingredient_hesitation: 25 },
  ];

  const maxValue = 50;

  return (
    <div style={{ 
      background: 'white', 
      padding: '2rem', 
      borderRadius: '1rem', 
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      border: '1px solid rgba(226, 232, 240, 0.8)'
    }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>Stella Friction Interceptions</h2>
        <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Times Stella autonomously popped up to resolve customer hesitation and close the sale.</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-end', height: '240px', gap: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #e2e8f0' }}>
        {data.map((day, idx) => {
          const shadeHeight = (day.shade_confusion / maxValue) * 100;
          const ingredientHeight = (day.ingredient_hesitation / maxValue) * 100;

          return (
            <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', gap: '2px' }}>
                <div 
                  style={{ 
                    height: `${shadeHeight}%`, 
                    background: 'linear-gradient(to top, var(--color-violet-500), var(--color-violet-400))',
                    borderRadius: '4px',
                    width: '100%'
                  }} 
                  title={`Shade Confusion: ${day.shade_confusion}`}
                />
                <div 
                  style={{ 
                    height: `${ingredientHeight}%`, 
                    background: 'linear-gradient(to top, var(--color-fuchsia-500), var(--color-fuchsia-400))',
                    borderRadius: '4px',
                    width: '100%',
                    opacity: 0.7
                  }}
                  title={`Ingredient Hesitation: ${day.ingredient_hesitation}`} 
                />
              </div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500 }}>{day.label}</span>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'var(--color-violet-500)' }} />
          <span style={{ fontSize: '0.875rem', color: '#475569', fontWeight: 500 }}>Shade Confusion Intercepts</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'var(--color-fuchsia-400)', opacity: 0.7 }} />
          <span style={{ fontSize: '0.875rem', color: '#475569', fontWeight: 500 }}>Ingredient Hesitation Intercepts</span>
        </div>
      </div>
    </div>
  );
}
