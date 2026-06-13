import { DEMO_PRODUCTS } from "@stylique/beauty-engine";
import { notFound } from "next/navigation";
import { ProductClientActions } from "./ProductClientActions";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = DEMO_PRODUCTS.find(p => p.id === id);
  
  if (!product) {
    return notFound();
  }

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 1.5rem" }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: "0.875rem", color: "#666", marginBottom: "2rem" }}>
        Home / {product.category.charAt(0).toUpperCase() + product.category.slice(1)} / {product.name}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "flex-start" }}>
        
        {/* Left: Product Images */}
        <div style={{
          width: "100%",
          aspectRatio: "1/1",
          background: "#eaeaea",
          borderRadius: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "4rem",
          position: "relative"
        }}>
          {product.category === 'foundation' ? '🧴' : 
           product.category === 'blush' ? '🌸' : 
           product.category === 'lipstick' ? '💄' : '✨'}
           
           <ProductClientActions productId={product.id} />
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 800, color: "#111", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>
            {product.name}
          </h1>
          <div style={{ fontSize: "1.25rem", color: "#333", marginBottom: "1.5rem" }}>
            {product.currency}{product.price.toFixed(2)}
          </div>
          
          <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.6, marginBottom: "2rem" }}>
            {product.description}
          </p>

          {/* Standard Add to Cart (Fallback if no widget match) */}
          <button style={{
            width: "100%",
            padding: "1rem",
            background: "#111",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
            marginTop: "1rem"
          }}>
            Add to Bag
          </button>

          {/* Product Details Accordeon (Mock) */}
          <div style={{ marginTop: "3rem", borderTop: "1px solid #eaeaea" }}>
            {['Ingredients', 'How to Use', 'Shipping & Returns'].map((tab) => (
              <div key={tab} style={{ padding: "1.5rem 0", borderBottom: "1px solid #eaeaea", display: "flex", justifyContent: "space-between", cursor: "pointer", fontWeight: 500, color: "#111" }}>
                {tab}
                <span>+</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
