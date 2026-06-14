import { DEMO_PRODUCTS } from "@stylique/beauty-engine";
import Link from "next/link";
import Image from "next/image";

export default function StoreHomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface-base)" }}>
      {/* Hero Section */}
      <section style={{ 
        position: "relative", 
        padding: "8rem 1.5rem 6rem", 
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }}>
        {/* Glow effect behind hero */}
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px", height: "800px",
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(9,9,11,0) 70%)",
          pointerEvents: "none",
          zIndex: 0
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
          <div className="animate-fade-in-up">
            <span style={{ 
              display: "inline-block", 
              padding: "0.25rem 1rem", 
              borderRadius: "2rem", 
              background: "rgba(139,92,246,0.1)", 
              color: "var(--color-violet-400)",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              marginBottom: "1.5rem",
              border: "1px solid rgba(139,92,246,0.2)"
            }}>
              POWERED BY STYLIQUE OS
            </span>
          </div>
          <h1 className="text-heading-1 animate-fade-in-up delay-100" style={{ marginBottom: "1.5rem" }}>
            The Future of Beauty is Autonomous.
          </h1>
          <p className="animate-fade-in-up delay-200" style={{ 
            fontSize: "1.25rem", 
            color: "var(--color-text-secondary)", 
            marginBottom: "3rem", 
            lineHeight: 1.6,
            maxWidth: "600px",
            margin: "0 auto 3rem"
          }}>
            Experience LumiGlow, our flagship demo store. Click the Stella icon in the bottom right to see the AI advisor and AR try-on in action.
          </p>
          <div className="animate-fade-in-up delay-300">
            <a href="#collection" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1rem" }}>
              Explore Collection
            </a>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section id="collection" style={{ padding: "4rem 1.5rem 8rem", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
          <div>
            <h2 className="text-heading-2">Bestsellers</h2>
            <p style={{ color: "var(--color-text-muted)", marginTop: "0.5rem" }}>Curated essentials for your routine.</p>
          </div>
        </div>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
          gap: "2.5rem 2rem" 
        }}>
          {DEMO_PRODUCTS.map((product, index) => (
            <Link 
              key={product.id} 
              href={`/store/product/${product.id}`}
              className="card-hover animate-fade-in-up"
              style={{ 
                textDecoration: "none", 
                color: "inherit", 
                display: "flex",
                flexDirection: "column",
                animationDelay: `${100 + (index * 50)}ms`
              }}
            >
              <div style={{
                width: "100%",
                aspectRatio: "3/4",
                background: "var(--color-surface-overlay)",
                borderRadius: "1rem",
                overflow: "hidden",
                position: "relative",
                marginBottom: "1.25rem",
                border: "1px solid var(--color-border-subtle)"
              }}>
                {/* Fallback abstract gradient if no image URL yet */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%), var(--color-surface-overlay)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                  color: "var(--color-text-muted)"
                }}>
                  {product.imageUrl ? (
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      style={{ width: "100%", height: "100%", objectFit: "cover", mixBlendMode: "lighten" }}
                    />
                  ) : (
                    <div style={{ opacity: 0.2 }}>
                      {product.category === 'foundation' ? '🧴' : 
                       product.category === 'blush' ? '🌸' : 
                       product.category === 'lipstick' ? '💄' : '✨'}
                    </div>
                  )}
                </div>
                
                {/* Overlay Badge */}
                <div style={{
                  position: "absolute",
                  top: "1rem", left: "1rem",
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(8px)",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "2rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "white",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>
                  {product.category.replace('_', ' ')}
                </div>
              </div>

              <div style={{ padding: "0 0.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                  <h3 style={{ fontWeight: 600, fontSize: "1.125rem", color: "var(--color-text-primary)", margin: 0, paddingRight: "1rem" }}>
                    {product.name}
                  </h3>
                  <span style={{ fontWeight: 600, color: "var(--color-text-primary)" }}>
                    {product.currency}{product.price.toFixed(2)}
                  </span>
                </div>
                
                <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  {product.shades.length > 0 ? (
                    <>
                      <div style={{ display: "flex", gap: "-4px" }}>
                        {product.shades.slice(0, 4).map((s, i) => (
                          <div key={s.id} style={{
                            width: "14px", height: "14px", 
                            borderRadius: "50%", 
                            background: s.hexColor || '#ccc',
                            border: "1px solid var(--color-surface-base)",
                            marginLeft: i > 0 ? "-4px" : "0"
                          }} />
                        ))}
                        {product.shades.length > 4 && (
                          <span style={{ fontSize: "0.75rem", marginLeft: "4px" }}>+{product.shades.length - 4}</span>
                        )}
                      </div>
                      <span>•</span>
                      <span>{product.shades.length} shades</span>
                    </>
                  ) : (
                    <span>Universal Formula</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
