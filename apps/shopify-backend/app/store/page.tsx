import { DEMO_PRODUCTS } from "@stylique/beauty-engine";
import Link from "next/link";

export default function StoreHomePage() {
  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 1.5rem" }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 800, marginBottom: "2rem", color: "#111" }}>
        Welcome to LumiGlow
      </h1>
      <p style={{ fontSize: "1.25rem", color: "#666", marginBottom: "4rem", maxWidth: "600px" }}>
        This is a mock e-commerce storefront to demonstrate how the Stylique Beauty OS widgets seamlessly integrate into any store.
      </p>

      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem", color: "#111" }}>
        Trending Products
      </h2>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2rem" }}>
        {DEMO_PRODUCTS.map(product => (
          <Link 
            key={product.id} 
            href={`/store/product/${product.id}`}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <div style={{
              width: "100%",
              aspectRatio: "1/1",
              background: "#eaeaea",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "4rem",
              marginBottom: "1rem"
            }}>
              {product.category === 'foundation' ? '🧴' : 
               product.category === 'blush' ? '🌸' : 
               product.category === 'lipstick' ? '💄' : '✨'}
            </div>
            <div style={{ fontWeight: 600, fontSize: "1.125rem", color: "#111", marginBottom: "0.25rem" }}>
              {product.name}
            </div>
            <div style={{ fontSize: "0.875rem", color: "#666", marginBottom: "0.5rem" }}>
              {product.shades.length > 0 ? `${product.shades.length} shades` : product.category}
            </div>
            <div style={{ fontWeight: 600, color: "#111" }}>
              {product.currency}{product.price.toFixed(2)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
