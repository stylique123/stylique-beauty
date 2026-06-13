import React from 'react';

export function CatalogGapsList() {
  const gaps = [
    {
      id: 1,
      query: "Olive undertone foundation",
      volume: 42,
      trend: "+15%",
      estimatedLostRevenue: "$1,470",
      urgency: "high"
    },
    {
      id: 2,
      query: "Acne-safe SPF 50",
      volume: 28,
      trend: "+8%",
      estimatedLostRevenue: "$980",
      urgency: "medium"
    },
    {
      id: 3,
      query: "Matte setting spray (travel size)",
      volume: 19,
      trend: "-2%",
      estimatedLostRevenue: "$342",
      urgency: "low"
    }
  ];

  return (
    <div style={{ 
      background: 'white', 
      borderRadius: '1rem', 
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      border: '1px solid rgba(226, 232, 240, 0.8)',
      overflow: 'hidden'
    }}>
      <div style={{ 
        padding: '1.5rem 2rem', 
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(248, 250, 252, 0.5)'
      }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0f172a' }}>Detected Intelligence Gaps</h3>
        <button style={{ 
          background: '#0f172a', 
          color: 'white', 
          border: 'none', 
          padding: '0.5rem 1rem', 
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          fontWeight: 500,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span>Export to R&D Team</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </button>
      </div>

      <div style={{ padding: '0 2rem' }}>
        {/* Table Header */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr 1fr 1fr 1fr', 
          padding: '1rem 0', 
          borderBottom: '1px solid #e2e8f0',
          color: '#64748b',
          fontSize: '0.875rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          <div>Missing Product Query</div>
          <div>Request Volume</div>
          <div>Trend (7d)</div>
          <div style={{ textAlign: 'right' }}>Est. Lost Revenue</div>
        </div>

        {/* Table Rows */}
        {gaps.map((gap) => (
          <div key={gap.id} style={{ 
            display: 'grid', 
            gridTemplateColumns: '2fr 1fr 1fr 1fr', 
            padding: '1.5rem 0', 
            borderBottom: '1px solid #e2e8f0',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '50%', 
                background: gap.urgency === 'high' ? '#ef4444' : gap.urgency === 'medium' ? '#f59e0b' : '#10b981' 
              }} />
              <span style={{ fontWeight: 500, color: '#0f172a' }}>{gap.query}</span>
            </div>
            <div style={{ color: '#475569', fontWeight: 500 }}>{gap.volume} requests</div>
            <div style={{ 
              color: gap.trend.startsWith('+') ? '#10b981' : '#64748b', 
              fontWeight: 500 
            }}>
              {gap.trend}
            </div>
            <div style={{ textAlign: 'right', fontWeight: 700, color: '#0f172a', fontSize: '1.125rem' }}>
              {gap.estimatedLostRevenue}
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ padding: '1rem 2rem', background: 'rgba(239, 68, 68, 0.05)', color: '#b91c1c', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        Stella has tracked a total of <strong>$2,792</strong> in lost revenue due to catalog gaps this week.
      </div>
    </div>
  );
}
