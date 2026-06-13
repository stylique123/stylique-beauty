export default function CustomersPage() {
  const profiles = [
    { id: "prof-1", name: "Sarah J.", depth: "Light", undertone: "Cool", topConcern: "Redness", routines: 2 },
    { id: "prof-2", name: "Maria Garcia", depth: "Medium", undertone: "Warm", topConcern: "Hyperpigmentation", routines: 1 },
    { id: "prof-3", name: "Aisha P.", depth: "Deep", undertone: "Neutral", topConcern: "Dryness", routines: 4 },
    { id: "prof-4", name: "Chloe M.", depth: "Fair", undertone: "Neutral", topConcern: "Acne", routines: 1 },
    { id: "prof-5", name: "Priya S.", depth: "Tan", undertone: "Olive", topConcern: "Dark circles", routines: 3 },
  ];

  return (
    <div>
      <h1 className="text-heading-2" style={{ marginBottom: "2rem" }}>Beauty Profiles</h1>
      
      <div className="card" style={{ overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "var(--color-surface-overlay)", borderBottom: "1px solid var(--color-border-subtle)", textAlign: "left" }}>
            <tr>
              <th style={{ padding: "1rem 1.5rem", fontWeight: 600, fontSize: "0.875rem", color: "var(--color-text-muted)" }}>Shopper</th>
              <th style={{ padding: "1rem 1.5rem", fontWeight: 600, fontSize: "0.875rem", color: "var(--color-text-muted)" }}>Skin Profile</th>
              <th style={{ padding: "1rem 1.5rem", fontWeight: 600, fontSize: "0.875rem", color: "var(--color-text-muted)" }}>Top Concern</th>
              <th style={{ padding: "1rem 1.5rem", fontWeight: 600, fontSize: "0.875rem", color: "var(--color-text-muted)" }}>Saved Routines</th>
              <th style={{ padding: "1rem 1.5rem", fontWeight: 600, fontSize: "0.875rem", color: "var(--color-text-muted)" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map(p => (
              <tr key={p.id} style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                <td style={{ padding: "1rem 1.5rem", fontWeight: 500 }}>{p.name}</td>
                <td style={{ padding: "1rem 1.5rem" }}>
                  <span style={{ background: "var(--color-violet-50)", color: "var(--color-violet-600)", padding: "0.25rem 0.5rem", borderRadius: "0.25rem", fontSize: "0.75rem", fontWeight: 600, marginRight: "0.5rem" }}>
                    {p.depth}
                  </span>
                  <span style={{ background: "var(--color-violet-50)", color: "var(--color-violet-600)", padding: "0.25rem 0.5rem", borderRadius: "0.25rem", fontSize: "0.75rem", fontWeight: 600 }}>
                    {p.undertone}
                  </span>
                </td>
                <td style={{ padding: "1rem 1.5rem", fontSize: "0.875rem", color: "var(--color-text-muted)" }}>{p.topConcern}</td>
                <td style={{ padding: "1rem 1.5rem", fontSize: "0.875rem" }}>{p.routines}</td>
                <td style={{ padding: "1rem 1.5rem" }}>
                  <button className="btn-ghost" style={{ padding: "0.5rem 1rem", fontSize: "0.75rem" }}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
