import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stylique Beauty — AI Beauty Advisor",
  description:
    "The AI Beauty Commerce Layer. Skin analysis, perfect shade matching, personalised routines and virtual try-on — all in one intelligent advisor.",
};

const features = [
  {
    icon: "✨",
    title: "Face & Skin Analysis",
    description:
      "Upload a selfie and receive an instant beauty profile — skin tone, undertone, concerns, and more analysed in seconds.",
    accentColor: "#8b5cf6",
    bg: "linear-gradient(135deg, rgba(45,27,105,0.5) 0%, rgba(109,63,204,0.25) 100%)",
  },
  {
    icon: "💄",
    title: "Perfect Shade Matching",
    description:
      "Find your ideal foundation, concealer, and lip shades matched precisely to your unique complexion with AI confidence scores.",
    accentColor: "#c4406e",
    bg: "linear-gradient(135deg, rgba(107,31,56,0.5) 0%, rgba(196,64,110,0.25) 100%)",
  },
  {
    icon: "📸",
    title: "Virtual Try-On",
    description:
      "See how products look on your face before buying. Compare shades side by side with photorealistic rendering.",
    accentColor: "#e8a598",
    bg: "linear-gradient(135deg, rgba(45,27,105,0.4) 0%, rgba(196,64,110,0.2) 100%)",
  },
  {
    icon: "🌟",
    title: "Personalised Routines",
    description:
      "Get a step-by-step beauty routine tailored to your skin type, concerns, goals, and lifestyle — morning, evening, or event.",
    accentColor: "#e8a820",
    bg: "linear-gradient(135deg, rgba(107,72,0,0.4) 0%, rgba(232,168,32,0.2) 100%)",
  },
  {
    icon: "🤖",
    title: "AI Beauty Concierge",
    description:
      "Chat with Stella, your personal AI beauty advisor, anytime during your shopping journey — she remembers your profile.",
    accentColor: "#a78bfa",
    bg: "linear-gradient(135deg, rgba(45,27,105,0.5) 0%, rgba(139,92,246,0.2) 100%)",
  },
  {
    icon: "📊",
    title: "Brand Analytics",
    description:
      "Deep insights into shopper skin profiles, conversion funnels, shade preferences, and product performance.",
    accentColor: "#f087a0",
    bg: "linear-gradient(135deg, rgba(107,31,56,0.4) 0%, rgba(45,27,105,0.2) 100%)",
  },
];

const stats = [
  { value: "98%", label: "Shade Match Accuracy" },
  { value: "3.2×", label: "Conversion Rate Lift" },
  { value: "47%", label: "Fewer Returns" },
  { value: "12K+", label: "Beauty Profiles Created" },
];

const steps = [
  {
    num: "01",
    title: "Choose your goal",
    desc: "Find a foundation, build a routine, explore a look — tell Stella what you're after.",
  },
  {
    num: "02",
    title: "Snap a selfie",
    desc: "Optional but powerful. Stella analyses your skin tone, undertone, and concerns in seconds.",
  },
  {
    num: "03",
    title: "Get your profile",
    desc: "A few quick questions to round out your beauty profile — skin type, preferences, budget.",
  },
  {
    num: "04",
    title: "Shop with confidence",
    desc: "Curated picks, matched shades, and a personalised routine, all built just for you.",
  },
];

const testimonials = [
  {
    quote: "I finally found my perfect foundation shade after years of buying the wrong one. Stella nailed it first try.",
    name: "Amara K.",
    role: "Beauty Enthusiast",
    initials: "AK",
    color: "#8b5cf6",
  },
  {
    quote: "The routine builder is incredible — it's like having a professional makeup artist walk you through every step.",
    name: "Sophie L.",
    role: "Skincare Addict",
    initials: "SL",
    color: "#c4406e",
  },
  {
    quote: "As a brand, our return rates dropped 40% in the first month. The shade matching accuracy is truly remarkable.",
    name: "James T.",
    role: "Head of E-Commerce, LumiGlow",
    initials: "JT",
    color: "#e8a820",
  },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface-base)", overflowX: "hidden" }}>

      {/* ── Navigation ─────────────────────────── */}
      <nav
        className="glass"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          borderBottom: "1px solid var(--color-border-subtle)",
        }}
      >
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: "0 1.5rem", height: "64px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{
              width: "34px", height: "34px", borderRadius: "50%",
              background: "var(--gradient-brand)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "15px", color: "white",
              boxShadow: "0 0 16px rgba(139,92,246,0.4)",
            }}>✦</div>
            <span style={{
              fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem",
              background: "var(--gradient-brand)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Stylique Beauty
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Link href="/dashboard" className="nav-link" style={{ fontSize: "0.875rem" }}>
              For Brands
            </Link>
            <Link href="/store" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>
              See Demo Store →
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────── */}
      <section style={{
        paddingTop: "9rem", paddingBottom: "6rem",
        padding: "9rem 1.5rem 6rem",
        position: "relative", overflow: "hidden",
        minHeight: "100vh", display: "flex", alignItems: "center",
      }}>
        {/* Ambient glows */}
        <div style={{ position: "absolute", top: "-15%", left: "-5%", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(109,63,204,0.18) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "5%", right: "-8%", width: "550px", height: "550px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(196,64,110,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "0%", left: "35%", width: "450px", height: "450px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(232,168,32,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "820px" }}>

            {/* Eyebrow badge */}
            <div className="animate-fade-in" style={{ marginBottom: "1.5rem" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.35rem 1rem",
                background: "rgba(139,92,246,0.12)",
                border: "1px solid rgba(139,92,246,0.25)",
                borderRadius: "var(--radius-full)",
                fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-violet-300)",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e", display: "inline-block" }} />
                Powered by Gemini 2.0 Flash · AI Beauty Commerce Platform
              </div>
            </div>

            {/* Main headline */}
            <h1 className="text-display animate-fade-in-up" style={{ marginBottom: "1.5rem", color: "var(--color-text-primary)", lineHeight: 1.08 }}>
              Your personal{" "}
              <span className="text-gradient-brand">beauty advisor</span>,{" "}
              <span className="text-gradient-rose">powered by AI</span>
            </h1>

            <p className="text-body-lg animate-fade-in-up delay-100" style={{ marginBottom: "2.5rem", maxWidth: "580px" }}>
              Stylique combines face analysis, shade matching, routine building, and guided shopping into one intelligent beauty layer — like having an expert consultant at every shopper's side.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up delay-200" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
              <Link
                href="/store"
                className="btn-primary"
                style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}
              >
                ✨ Experience the Demo Store
              </Link>
              <Link
                href="/dashboard"
                className="btn-secondary"
                style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}
              >
                Brand Dashboard →
              </Link>
            </div>

            {/* Trust bar */}
            <div className="animate-fade-in-up delay-300" style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              {["No sign-up required", "Photo never stored", "Under 2 minutes"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
                  <span style={{ color: "#22c55e", fontWeight: 700 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating advisor preview card */}
        <div
          className="glass-card animate-fade-in-up delay-400"
          style={{
            position: "absolute",
            right: "4%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "280px",
            padding: "1.25rem",
            borderRadius: "1.25rem",
            display: "none", // hidden on mobile — shown via CSS below
          }}
          id="hero-preview-card"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--gradient-brand)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", color: "white" }}>✦</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--color-text-primary)" }}>Stella</div>
              <div style={{ fontSize: "0.7rem", color: "#22c55e" }}>● AI Advisor · Online</div>
            </div>
          </div>
          <div style={{ background: "var(--color-surface-overlay)", borderRadius: "var(--radius-lg)", padding: "0.875rem", fontSize: "0.8125rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
            Hi! Based on your medium skin tone with warm undertones, I've found 4 perfect foundation matches. Shall I show you the shades?
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            {["#F5D5A8", "#D4956A", "#A0622A", "#6B3A18"].map(hex => (
              <div key={hex} style={{ flex: 1, height: "20px", borderRadius: "10px", background: hex }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ──────────────────────────── */}
      <section
        className="glass"
        style={{ borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)", padding: "3.5rem 1.5rem" }}
      >
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "2rem",
        }}>
          {stats.map((stat, i) => (
            <div key={stat.label} className="animate-fade-in-up" style={{ animationDelay: `${i * 80}ms`, textAlign: "center" }}>
              <div className="text-gradient-brand" style={{ fontFamily: "var(--font-display)", fontSize: "2.75rem", fontWeight: 800, lineHeight: 1, marginBottom: "0.5rem" }}>
                {stat.value}
              </div>
              <div style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ───────────────────────── */}
      <section style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="badge badge-violet" style={{ marginBottom: "1rem" }}>How it works</span>
            <h2 className="text-heading-1" style={{ marginBottom: "1rem" }}>
              From selfie to <span className="text-gradient-brand">perfect match</span>
            </h2>
            <p className="text-body-lg" style={{ maxWidth: "520px", margin: "0 auto" }}>
              Four simple steps to your most confident beauty journey.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div style={{
                  padding: "0.35rem 0.75rem",
                  background: "var(--gradient-brand)",
                  borderRadius: "var(--radius-full)",
                  display: "inline-block",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  color: "white",
                  letterSpacing: "0.08em",
                  marginBottom: "1rem",
                }}>
                  STEP {step.num}
                </div>
                <h3 className="text-heading-3" style={{ marginBottom: "0.6rem", color: "var(--color-text-primary)" }}>{step.title}</h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/store" className="btn-primary" style={{ fontSize: "0.9375rem", padding: "0.875rem 2rem" }}>
              Try it now →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features Grid ──────────────────────── */}
      <section style={{ padding: "6rem 1.5rem", background: "linear-gradient(180deg, transparent 0%, rgba(45,27,105,0.05) 50%, transparent 100%)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="badge badge-rose" style={{ marginBottom: "1rem" }}>Features</span>
            <h2 className="text-heading-1" style={{ marginBottom: "1rem" }}>
              Everything a shopper needs
            </h2>
            <p className="text-body-lg" style={{ maxWidth: "540px", margin: "0 auto" }}>
              One intelligent layer combining the best of beauty expertise with AI — not a chatbot, an AI Beauty Commerce Platform.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem" }}>
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="card card-hover animate-fade-in-up"
                style={{
                  animationDelay: `${i * 80}ms`,
                  padding: "2rem",
                  background: feature.bg,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{
                  position: "absolute", top: "-30px", right: "-30px",
                  width: "120px", height: "120px", borderRadius: "50%",
                  background: `radial-gradient(ellipse, ${feature.accentColor}25 0%, transparent 70%)`,
                }} />
                <div style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>{feature.icon}</div>
                <h3 className="text-heading-3" style={{ marginBottom: "0.625rem", color: "var(--color-text-primary)" }}>
                  {feature.title}
                </h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────── */}
      <section style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge badge-gold" style={{ marginBottom: "1rem" }}>Testimonials</span>
            <h2 className="text-heading-1">Loved by shoppers & brands</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="card animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms`, padding: "1.75rem" }}
              >
                {/* Stars */}
                <div style={{ color: "#e8a820", marginBottom: "1rem", fontSize: "0.875rem", letterSpacing: "2px" }}>★★★★★</div>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem", fontStyle: "italic" }}>
                  "{t.quote}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "50%",
                    background: t.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: "0.75rem", color: "white",
                  }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--color-text-primary)" }}>{t.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────── */}
      <section style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <div className="glass-card" style={{ padding: "4rem 3rem", borderRadius: "2rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "var(--gradient-glow)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(196,64,110,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{
                width: "72px", height: "72px", borderRadius: "50%",
                background: "var(--gradient-brand)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "2rem", color: "white",
                margin: "0 auto 1.5rem",
                boxShadow: "0 0 40px rgba(139,92,246,0.4)",
                animation: "float 3s ease-in-out infinite",
              }}>
                ✦
              </div>
              <h2 className="text-heading-1" style={{ marginBottom: "1rem" }}>
                Ready to meet your{" "}
                <span className="text-gradient-brand">beauty match?</span>
              </h2>
              <p className="text-body-lg" style={{ marginBottom: "2rem" }}>
                Start your AI-powered beauty journey in under 2 minutes. No account needed.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/store" className="btn-primary" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>
                  ✨ Experience the Demo Store
                </Link>
                <Link href="/dashboard" className="btn-secondary" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>
                  I'm a brand →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────── */}
      <footer style={{
        borderTop: "1px solid var(--color-border-subtle)",
        padding: "2.5rem 1.5rem",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "var(--gradient-brand)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "white" }}>✦</div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem", color: "var(--color-text-muted)" }}>Stylique Beauty</span>
          </div>
          <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
            <span>© {new Date().getFullYear()} Stylique Beauty</span>
            <span>Powered by Gemini AI</span>
            <span>Privacy · Terms</span>
          </div>
        </div>
      </footer>

      <style>{`
        @media (min-width: 1024px) {
          #hero-preview-card { display: block !important; }
        }
      `}</style>
    </div>
  );
}
