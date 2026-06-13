import { ReactNode } from "react";
import { StyliqueOSProvider } from "../../components/os/StyliqueOSProvider";
import { SkinAnalysisAndTryOn } from "../../components/os/SkinAnalysisAndTryOn";
import { RoutineBuilder } from "../../components/os/RoutineBuilder";
import { AIBeautyAdvisor } from "../../components/os/AIBeautyAdvisor";
import Link from "next/link";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <StyliqueOSProvider>
      <div style={{ minHeight: "100vh", background: "#fafafa" }}>
        {/* Mock Store Header */}
        <header style={{
          background: "white",
          borderBottom: "1px solid #eaeaea",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}>
          <div style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <Link href="/store" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
              <div style={{ width: "24px", height: "24px", background: "#111", borderRadius: "4px" }} />
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.25rem", color: "#111", letterSpacing: "-0.02em" }}>
                LUMIGLOW
              </span>
            </Link>
            
            <nav style={{ display: "flex", gap: "2rem", fontSize: "0.875rem", fontWeight: 500, color: "#666" }}>
              <Link href="/store" style={{ color: "#111" }}>Shop All</Link>
              <Link href="/store" style={{ color: "#111" }}>Bestsellers</Link>
              <Link href="/store" style={{ color: "#111" }}>Skincare</Link>
              <Link href="/store" style={{ color: "#111" }}>Makeup</Link>
            </nav>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ fontSize: "1.25rem" }}>🔍</span>
              <span style={{ fontSize: "1.25rem" }}>👤</span>
              <span style={{ fontSize: "1.25rem" }}>🛍️</span>
            </div>
          </div>
        </header>

        {/* Store Content */}
        <main>
          {children}
        </main>

        {/* The 3 Core OS Experiences */}
        <SkinAnalysisAndTryOn />
        <RoutineBuilder />
        <AIBeautyAdvisor />
      </div>
    </StyliqueOSProvider>
  );
}
