"use client";

import { useState } from "react";
import Link from "next/link";
import { DEMO_PRODUCTS } from "@stylique/beauty-engine";

type DashTab = "overview" | "products" | "analytics" | "widget";

const NAV_ITEMS: { id: DashTab; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "🏠" },
  { id: "products", label: "Products", icon: "💄" },
  { id: "analytics", label: "Analytics", icon: "📊" },
  { id: "widget", label: "Widget", icon: "⚙️" },
];

const DEMO_ANALYTICS = {
  sessions: 1284,
  analyses: 847,
  tryOns: 312,
  recommendations: 2156,
  cartAdds: 423,
  emailCaptures: 198,
  conversionRate: 3.8,
  avgOrderValue: 68.5,
};

export function DashboardShell() {
  const [activeTab, setActiveTab] = useState<DashTab>("overview");

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface-base)", display: "flex" }}>
      {/* Sidebar */}
      <aside
        className="glass"
        style={{
          width: "240px",
          flexShrink: 0,
          borderRight: "1px solid var(--color-border-subtle)",
          display: "flex",
          flexDirection: "column",
          padding: "1.5rem 1rem",
          position: "sticky",
          top: 0,
          height: "100vh",
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: "2rem", padding: "0 0.5rem" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{
              width: "32px", height: "32px", borderRadius: "50%",
              background: "var(--gradient-brand)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "14px", color: "white",
            }}>✦</div>
            <div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem",
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Stylique</div>
              <div style={{ fontSize: "0.65rem", color: "var(--color-text-muted)", marginTop: "-2px" }}>Brand Dashboard</div>
            </div>
          </Link>
        </div>

        {/* Brand info */}
        <div style={{
          padding: "0.75rem",
          background: "rgba(139,92,246,0.1)",
          border: "1px solid rgba(139,92,246,0.15)",
          borderRadius: "var(--radius-md)",
          marginBottom: "1.5rem",
        }}>
          <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--color-text-primary)", marginBottom: "0.2rem" }}>
            Demo Beauty Co.
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Growth Plan · Active</div>
          <div style={{
            display: "inline-block",
            marginTop: "0.5rem",
            padding: "0.15rem 0.5rem",
            background: "rgba(34,197,94,0.15)",
            border: "1px solid rgba(34,197,94,0.25)",
            borderRadius: "var(--radius-full)",
            fontSize: "0.65rem",
            fontWeight: 600,
            color: "#86efac",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}>
            ● Live
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1 }}>
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              id={`dash-nav-${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`nav-link ${activeTab === item.id ? "active" : ""}`}
              style={{
                width: "100%",
                justifyContent: "flex-start",
                marginBottom: "0.25rem",
                padding: "0.625rem 0.875rem",
              }}
            >
              <span style={{ fontSize: "1rem" }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div style={{ paddingTop: "1rem", borderTop: "1px solid var(--color-border-subtle)" }}>
          <Link href="/advisor" className="btn-primary" style={{ width: "100%", fontSize: "0.8rem", padding: "0.625rem 1rem" }}>
            ✨ Preview Advisor
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: "2rem", overflow: "auto" }}>
        {activeTab === "overview" && <OverviewTab />}
        {activeTab === "products" && <ProductsTab />}
        {activeTab === "analytics" && <AnalyticsTab />}
        {activeTab === "widget" && <WidgetTab />}
      </main>
    </div>
  );
}

function OverviewTab() {
  const stats = [
    { label: "Sessions", value: "1,284", icon: "👥", change: "+18%", positive: true },
    { label: "AI Analyses", value: "847", icon: "✨", change: "+24%", positive: true },
    { label: "Cart Adds", value: "423", icon: "🛒", change: "+12%", positive: true },
    { label: "Conversion Rate", value: "3.8%", icon: "📈", change: "+0.6%", positive: true },
    { label: "Avg. Order Value", value: "£68.50", icon: "💰", change: "+£8.20", positive: true },
    { label: "Email Captures", value: "198", icon: "📧", change: "+31%", positive: true },
  ];

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: "2rem" }}>
        <h1 className="text-heading-2" style={{ marginBottom: "0.25rem" }}>Good morning! 👋</h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
          Here's how your Stylique Beauty integration is performing.
        </p>
      </div>

      {/* Stats grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="card animate-fade-in-up"
            style={{ animationDelay: `${i * 60}ms`, opacity: 0, padding: "1.25rem" }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "1.5rem" }}>{stat.icon}</span>
              <span style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: stat.positive ? "#86efac" : "#f87171",
                background: stat.positive ? "rgba(34,197,94,0.1)" : "rgba(239,68,68,0.1)",
                padding: "0.15rem 0.4rem",
                borderRadius: "var(--radius-full)",
              }}>
                {stat.change}
              </span>
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-text-primary)", marginBottom: "0.2rem" }}>
              {stat.value}
            </div>
            <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Funnel */}
      <div className="card" style={{ padding: "1.5rem", marginBottom: "1.5rem" }}>
        <h3 className="text-heading-3" style={{ marginBottom: "1.25rem" }}>Conversion Funnel</h3>
        {[
          { label: "Sessions", value: 1284, pct: 100 },
          { label: "Face Analyses", value: 847, pct: 66 },
          { label: "Profile Created", value: 721, pct: 56 },
          { label: "Recommendations Clicked", value: 423, pct: 33 },
          { label: "Cart Adds", value: 198, pct: 15 },
        ].map((stage, i) => (
          <div key={stage.label} style={{ marginBottom: "0.875rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem", fontSize: "0.8125rem" }}>
              <span style={{ color: "var(--color-text-secondary)", fontWeight: 500 }}>{stage.label}</span>
              <span style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                {stage.value.toLocaleString()} <span style={{ color: "var(--color-text-muted)", fontWeight: 400 }}>({stage.pct}%)</span>
              </span>
            </div>
            <div className="progress-bar" style={{ height: "6px" }}>
              <div className="progress-fill" style={{ width: `${stage.pct}%`, transitionDelay: `${i * 100}ms` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Top products */}
      <div className="card" style={{ padding: "1.5rem" }}>
        <h3 className="text-heading-3" style={{ marginBottom: "1.25rem" }}>Top Recommended Products</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {DEMO_PRODUCTS.slice(0, 5).map((product, i) => (
            <div key={product.id} style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.875rem", color: "var(--color-text-muted)", width: "20px" }}>
                #{i + 1}
              </span>
              <div style={{
                width: "36px", height: "36px",
                background: "var(--gradient-card)",
                borderRadius: "var(--radius-md)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.25rem",
              }}>
                {product.category === "foundation" ? "🎭" : product.category === "blush" ? "🌸" : product.category === "lipstick" ? "💄" : "✨"}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--color-text-primary)" }}>{product.name}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>{product.category}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--color-gold-400)" }}>£{product.price}</div>
                <div style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}>{Math.floor(Math.random() * 80 + 20)} recs</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductsTab() {
  return (
    <div className="animate-fade-in">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <div>
          <h2 className="text-heading-2" style={{ marginBottom: "0.25rem" }}>Products</h2>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
            {DEMO_PRODUCTS.length} products · Demo catalogue
          </p>
        </div>
        <button className="btn-primary" id="sync-products-btn" style={{ fontSize: "0.875rem" }}>
          ↻ Sync from Shopify
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {DEMO_PRODUCTS.map(product => (
          <div
            key={product.id}
            className="card"
            style={{ padding: "1.125rem", display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <div style={{
              width: "48px", height: "48px",
              background: "var(--gradient-card)",
              borderRadius: "var(--radius-md)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.5rem", flexShrink: 0,
            }}>
              {product.category === "foundation" ? "🎭" : product.category === "blush" ? "🌸" : product.category === "lipstick" ? "💄" : product.category === "highlighter" ? "✨" : product.category === "concealer" ? "🪄" : product.category === "primer" ? "🌟" : product.category === "bronzer" ? "☀️" : "👁️"}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "0.2rem", fontSize: "0.9375rem" }}>
                {product.name}
              </div>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", textTransform: "capitalize" }}>{product.category}</span>
                <span style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}>·</span>
                <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>{product.shades.length} shades</span>
                {product.isVegan && <span className="badge badge-violet" style={{ fontSize: "0.6rem" }}>Vegan</span>}
              </div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div style={{ fontWeight: 700, color: "var(--color-gold-400)", fontSize: "1rem" }}>£{product.price}</div>
              <div style={{
                fontSize: "0.7rem", fontWeight: 600,
                color: product.inStock ? "#86efac" : "#f87171",
              }}>
                {product.inStock ? "● In Stock" : "○ Out of Stock"}
              </div>
            </div>
            {/* Shade preview */}
            {product.shades.length > 0 && (
              <div style={{ display: "flex", gap: "3px" }}>
                {product.shades.slice(0, 5).map(s => (
                  <div key={s.id} style={{
                    width: "18px", height: "18px",
                    borderRadius: "50%",
                    background: s.hexColor ?? "#C68642",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }} />
                ))}
                {product.shades.length > 5 && (
                  <div style={{
                    width: "18px", height: "18px",
                    borderRadius: "50%",
                    background: "var(--color-surface-overlay)",
                    border: "1px solid var(--color-border-subtle)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.5rem", color: "var(--color-text-muted)",
                  }}>+{product.shades.length - 5}</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsTab() {
  const metrics = [
    { label: "This week's sessions", value: "1,284", sub: "↑ 18% vs last week" },
    { label: "Face analyses completed", value: "847", sub: "66% of sessions" },
    { label: "Top undertone", value: "Warm", sub: "42% of shoppers" },
    { label: "Top concern", value: "Pores", sub: "38% of shoppers" },
    { label: "Top product category", value: "Foundation", sub: "48% of recs" },
    { label: "Email capture rate", value: "23%", sub: "↑ 5% vs last month" },
  ];

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 className="text-heading-2" style={{ marginBottom: "0.25rem" }}>Analytics</h2>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>Last 7 days · Demo data</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
        {metrics.map((m, i) => (
          <div key={m.label} className="card animate-fade-in-up" style={{ animationDelay: `${i * 60}ms`, opacity: 0, padding: "1.25rem" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.75rem", color: "var(--color-text-primary)", marginBottom: "0.3rem" }}>
              {m.value}
            </div>
            <div style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: "0.3rem" }}>{m.label}</div>
            <div style={{ fontSize: "0.75rem", color: "var(--color-violet-400)" }}>{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Common concerns breakdown */}
      <div className="card" style={{ padding: "1.5rem" }}>
        <h3 className="text-heading-3" style={{ marginBottom: "1.25rem" }}>Common Skin Concerns</h3>
        {[
          { concern: "Pores", pct: 38, color: "#8b5cf6" },
          { concern: "Dark spots", pct: 29, color: "#c4406e" },
          { concern: "Oiliness", pct: 24, color: "#e8a820" },
          { concern: "Dryness", pct: 21, color: "#3b82f6" },
          { concern: "Dark circles", pct: 18, color: "#6b7280" },
        ].map((item, i) => (
          <div key={item.concern} style={{ marginBottom: "0.875rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
              <span style={{ fontSize: "0.8125rem", color: "var(--color-text-secondary)", fontWeight: 500 }}>{item.concern}</span>
              <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-text-primary)" }}>{item.pct}%</span>
            </div>
            <div className="progress-bar" style={{ height: "6px" }}>
              <div style={{
                height: "100%",
                width: `${item.pct}%`,
                background: item.color,
                borderRadius: "var(--radius-full)",
                transition: `width 0.8s ease ${i * 150}ms`,
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WidgetTab() {
  const [primaryColor, setPrimaryColor] = useState("#7c3aed");
  const [position, setPosition] = useState<"bottom-right" | "bottom-left">("bottom-right");
  const [greeting, setGreeting] = useState("Hi! I'm Stella, your beauty advisor ✨");

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 className="text-heading-2" style={{ marginBottom: "0.25rem" }}>Widget Settings</h2>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>Customise how Stylique appears in your store</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "1.5rem" }}>
        {/* Settings */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div className="card" style={{ padding: "1.5rem" }}>
            <h3 style={{ fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "1.25rem", fontSize: "0.9375rem" }}>Branding</h3>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: "0.5rem" }}>
                Primary colour
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <input
                  type="color"
                  value={primaryColor}
                  onChange={e => setPrimaryColor(e.target.value)}
                  id="widget-primary-color"
                  style={{ width: "44px", height: "36px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-default)", cursor: "pointer", background: "none" }}
                />
                <code style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", background: "var(--color-surface-overlay)", padding: "0.25rem 0.625rem", borderRadius: "var(--radius-sm)" }}>
                  {primaryColor}
                </code>
              </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: "0.5rem" }}>
                Widget position
              </label>
              <div style={{ display: "flex", gap: "0.625rem" }}>
                {(["bottom-right", "bottom-left"] as const).map(pos => (
                  <button
                    key={pos}
                    id={`position-${pos}`}
                    onClick={() => setPosition(pos)}
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "var(--radius-md)",
                      border: `1px solid ${position === pos ? "rgba(139,92,246,0.5)" : "var(--color-border-subtle)"}`,
                      background: position === pos ? "rgba(139,92,246,0.15)" : "var(--color-surface-card)",
                      color: position === pos ? "var(--color-violet-200)" : "var(--color-text-secondary)",
                      fontSize: "0.8rem", fontWeight: 500, cursor: "pointer",
                    }}
                  >
                    {pos === "bottom-right" ? "↘ Bottom Right" : "↙ Bottom Left"}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: "0.5rem" }}>
                Greeting message
              </label>
              <input
                className="input-base"
                id="widget-greeting"
                value={greeting}
                onChange={e => setGreeting(e.target.value)}
              />
            </div>
          </div>

          {/* Embed code */}
          <div className="card" style={{ padding: "1.5rem" }}>
            <h3 style={{ fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "1rem", fontSize: "0.9375rem" }}>Shopify Integration</h3>
            <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "1rem" }}>
              Add this script tag to your Shopify theme to activate Stylique Beauty.
            </p>
            <div style={{
              background: "var(--color-surface-overlay)",
              border: "1px solid var(--color-border-subtle)",
              borderRadius: "var(--radius-md)",
              padding: "1rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
              overflow: "auto",
            }}>
              {`<script\n  src="https://cdn.stylique.beauty/widget.js"\n  data-brand-id="demo-brand"\n  data-primary-color="${primaryColor}"\n  data-position="${position}"\n  async\n></script>`}
            </div>
            <button className="btn-secondary" style={{ marginTop: "0.75rem", fontSize: "0.8125rem" }}>
              📋 Copy Embed Code
            </button>
          </div>

          <button className="btn-primary" id="save-widget-btn" style={{ fontSize: "0.9375rem" }}>
            💾 Save Widget Settings
          </button>
        </div>

        {/* Preview */}
        <div className="card" style={{ padding: "1.25rem", alignSelf: "start", position: "sticky", top: "2rem" }}>
          <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Widget Preview
          </div>
          <div style={{
            background: "var(--color-surface-overlay)",
            borderRadius: "var(--radius-lg)",
            padding: "1rem",
            minHeight: "200px",
            position: "relative",
          }}>
            {/* Mock storefront */}
            <div style={{ height: "120px", background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))", borderRadius: "var(--radius-md)", marginBottom: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "var(--color-text-muted)", fontSize: "0.75rem" }}>Your store preview</span>
            </div>

            {/* Widget button preview */}
            <div style={{
              display: "flex",
              [position === "bottom-right" ? "justifyContent" : "justifyContent"]: position === "bottom-right" ? "flex-end" : "flex-start",
            }}>
              <div style={{
                width: "52px", height: "52px",
                borderRadius: "50%",
                background: primaryColor,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.5rem",
                boxShadow: `0 4px 16px ${primaryColor}60`,
                cursor: "pointer",
              }}>
                ✦
              </div>
            </div>

            {/* Chat preview bubble */}
            <div style={{
              position: "absolute",
              bottom: "80px",
              right: position === "bottom-right" ? "1rem" : "auto",
              left: position === "bottom-left" ? "1rem" : "auto",
              background: "var(--color-surface-card)",
              border: "1px solid var(--color-border-default)",
              borderRadius: "var(--radius-lg)",
              padding: "0.75rem",
              maxWidth: "200px",
              fontSize: "0.75rem",
              color: "var(--color-text-secondary)",
              boxShadow: "var(--shadow-card)",
            }}>
              {greeting}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
