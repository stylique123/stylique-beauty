import { DEMO_PRODUCTS } from "@stylique/beauty-engine";
import { notFound } from "next/navigation";
import { ProductClientActions } from "./ProductClientActions";
import Link from "next/link";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = DEMO_PRODUCTS.find(p => p.id === id);
  
  if (!product) {
    return notFound();
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface-base)", paddingBottom: "6rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "2rem 1.5rem" }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "3rem", display: "flex", gap: "0.5rem" }}>
          <Link href="/store" style={{ color: "var(--color-text-muted)", textDecoration: "none" }} className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span style={{ textTransform: "capitalize" }}>{product.category.replace('_', ' ')}</span>
          <span>/</span>
          <span style={{ color: "var(--color-text-primary)" }}>{product.name}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "4rem", alignItems: "flex-start" }}>
          
          {/* Left: Product Images */}
          <div className="animate-fade-in-up" style={{
            width: "100%",
            aspectRatio: "4/5",
            background: "var(--color-surface-overlay)",
            borderRadius: "var(--radius-lg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "6rem",
            position: "relative",
            border: "1px solid var(--color-border-subtle)",
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
          }}>
            {/* Fallback abstract gradient if no image URL yet */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-text-muted)"
            }}>
              {product.imageUrl ? (
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div style={{ opacity: 0.2 }}>
                  {product.category === 'foundation' ? '🧴' : 
                   product.category === 'blush' ? '🌸' : 
                   product.category === 'lipstick' ? '💄' : '✨'}
                </div>
              )}
            </div>
             
            <ProductClientActions productId={product.id} />
          </div>

          {/* Right: Product Info */}
          <div className="animate-fade-in-up delay-100" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            
            {/* Header */}
            <div>
              <div style={{ color: "var(--color-violet-400)", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                {product.brand}
              </div>
              <h1 className="text-heading-2" style={{ marginBottom: "0.5rem" }}>
                {product.name}
              </h1>
              <div style={{ fontSize: "1.5rem", color: "var(--color-text-primary)", fontWeight: 500 }}>
                {product.currency}{product.price.toFixed(2)}
              </div>
            </div>
            
            {/* Description */}
            <p style={{ fontSize: "1.0625rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
              {product.description}
            </p>

            {/* Shades */}
            {product.shades.length > 0 && (
              <div style={{ marginTop: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.75rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-text-primary)", margin: 0 }}>
                    Select Shade
                  </h3>
                  <span style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
                    {product.shades.length} available
                  </span>
                </div>
                
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  {product.shades.map((shade) => (
                    <button
                      key={shade.id}
                      title={shade.name}
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "50%",
                        background: shade.hexColor || '#ccc',
                        border: "2px solid var(--color-border-subtle)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        padding: 0
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                        e.currentTarget.style.borderColor = "var(--color-text-primary)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.borderColor = "var(--color-border-subtle)";
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
              <button className="btn-primary" style={{ flex: 1, padding: "1.25rem", fontSize: "1.125rem", borderRadius: "1rem" }}>
                Add to Bag — {product.currency}{product.price.toFixed(2)}
              </button>
            </div>

            {/* Badges */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", padding: "1.5rem", background: "var(--color-surface-overlay)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-subtle)" }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", textAlign: "center" }}>
                <span style={{ fontSize: "1.5rem" }}>🌱</span>
                <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontWeight: 500 }}>{product.isVegan ? "100% Vegan" : "Cruelty Free"}</span>
              </div>
              <div style={{ width: "1px", background: "var(--color-border-subtle)" }} />
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", textAlign: "center" }}>
                <span style={{ fontSize: "1.5rem" }}>✨</span>
                <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontWeight: 500 }}>Dermatologist Tested</span>
              </div>
              <div style={{ width: "1px", background: "var(--color-border-subtle)" }} />
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", textAlign: "center" }}>
                <span style={{ fontSize: "1.5rem" }}>📦</span>
                <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontWeight: 500 }}>Free Shipping</span>
              </div>
            </div>

            {/* Accordions */}
            <div style={{ marginTop: "1rem" }}>
              {['Ingredients', 'How to Use', 'Shipping & Returns'].map((tab) => (
                <div key={tab} style={{ 
                  padding: "1.5rem 0", 
                  borderTop: "1px solid var(--color-border-subtle)", 
                  display: "flex", 
                  justifyContent: "space-between", 
                  cursor: "pointer", 
                  fontWeight: 500, 
                  color: "var(--color-text-primary)",
                  transition: "color 0.2s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-violet-400)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-text-primary)"}
                >
                  {tab}
                  <span style={{ color: "var(--color-text-muted)" }}>+</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
