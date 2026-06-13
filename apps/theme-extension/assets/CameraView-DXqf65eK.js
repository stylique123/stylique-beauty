import { r as h, j as e, u as b, R as y } from "./main-CG0M7wps.js";
function j({ isScanning: a }) {
  const [n, r] = h.useState([]);
  return h.useEffect(() => {
    if (!a) {
      r([]);
      return;
    }
    const l = [
      "Calibrating lighting...",
      "Mapping facial topography...",
      "Detecting 120 key points...",
      "Extracting epidermal pigment data...",
      "Analyzing tone depth...",
      "Calculating undertone matrices...",
      "Finalizing Beauty Profile..."
    ];
    let o = 0;
    const c = setInterval(() => {
      o < l.length ? (r((t) => [...t.slice(-2), l[o]]), o++) : clearInterval(c);
    }, 450);
    return () => clearInterval(c);
  }, [a]), a ? /* @__PURE__ */ e.jsxs("div", { style: {
    position: "absolute",
    inset: 0,
    background: "rgba(15, 23, 42, 0.4)",
    backdropFilter: "blur(2px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    pointerEvents: "none"
    // allow clicks through if needed
  }, children: [
    /* @__PURE__ */ e.jsx("div", { style: {
      width: "280px",
      height: "380px",
      border: "2px solid rgba(139, 92, 246, 0.5)",
      borderRadius: "100px",
      position: "relative",
      boxShadow: "0 0 40px rgba(139, 92, 246, 0.2) inset"
    }, children: /* @__PURE__ */ e.jsx("div", { style: {
      position: "absolute",
      top: 0,
      left: "10%",
      right: "10%",
      height: "2px",
      background: "var(--primary-color, #8b5cf6)",
      boxShadow: "0 0 15px 3px var(--primary-color, #8b5cf6)",
      animation: "scan-laser 2.5s infinite ease-in-out"
    } }) }),
    /* @__PURE__ */ e.jsx("div", { style: {
      position: "absolute",
      bottom: "80px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.25rem"
    }, children: n.map((l, o) => /* @__PURE__ */ e.jsxs("div", { style: {
      fontSize: "0.75rem",
      fontFamily: "monospace",
      color: "white",
      opacity: o === n.length - 1 ? 1 : 0.4,
      textShadow: "0 1px 2px rgba(0,0,0,0.8)"
    }, children: [
      "> ",
      l
    ] }, o)) }),
    /* @__PURE__ */ e.jsx("style", { children: `
          @keyframes scan-laser {
            0% { top: 10%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 90%; opacity: 0; }
          }
        ` })
  ] }) : null;
}
function v(a) {
  const n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
  return n ? [
    parseInt(n[1], 16),
    parseInt(n[2], 16),
    parseInt(n[3], 16)
  ] : [255, 255, 255];
}
function w(a, n, r) {
  return "#" + (1 << 24 | a << 16 | n << 8 | r).toString(16).slice(1);
}
function g(a, n, r) {
  const [l, o, c] = v(a);
  let t = l, d = o, s = c;
  switch (n) {
    case "warm":
      t = Math.min(255, l + 15), d = Math.min(255, o + 10), s = Math.max(0, c - 15);
      break;
    case "cool":
      t = Math.max(0, l - 10), s = Math.min(255, c + 20);
      break;
    case "olive":
      d = Math.min(255, o + 15), t = Math.max(0, l - 5), s = Math.max(0, c - 10);
      break;
  }
  return r === "deep" || r === "rich" ? (t = Math.min(255, t * 1.1), d = Math.min(255, d * 1.1), s = Math.min(255, s * 1.1)) : (r === "fair" || r === "light") && (t = Math.max(0, t * 0.9), d = Math.max(0, d * 0.9), s = Math.max(0, s * 0.9)), w(Math.round(t), Math.round(d), Math.round(s));
}
function C() {
  const a = h.useRef(null), n = h.useRef(null), { cameraState: r, setCameraState: l, closeCamera: o, startScan: c, analysisResult: t, activeLayers: d } = b(), [s, u] = y.useState(null);
  h.useEffect(() => () => {
    n.current && n.current.getTracks().forEach((i) => i.stop());
  }, [o]);
  const m = async () => {
    try {
      const i = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 720 }, height: { ideal: 1280 } }
      });
      n.current = i, a.current && (a.current.srcObject = i), u(null), l("active");
    } catch (i) {
      console.error("Camera access denied or unavailable", i), u("Camera access denied. Please enable camera permissions to use AR features.");
    }
  }, f = () => {
  };
  return r === "closed" ? null : /* @__PURE__ */ e.jsxs("div", { style: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2147483648,
    // Absolute top
    background: "#000",
    display: "flex",
    flexDirection: "column"
  }, children: [
    /* @__PURE__ */ e.jsxs("div", { style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      padding: "24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 20,
      background: "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)"
    }, children: [
      /* @__PURE__ */ e.jsx("h2", { style: { color: "white", fontSize: "1.25rem", fontWeight: 600, margin: 0 }, children: "Stylique AR" }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: o,
          style: {
            background: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(4px)",
            border: "none",
            color: "white",
            width: "40px",
            height: "40px",
            borderRadius: "20px",
            fontSize: "1.25rem",
            cursor: "pointer"
          },
          children: "✕"
        }
      )
    ] }),
    s ? /* @__PURE__ */ e.jsx("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", textAlign: "center", color: "white" }, children: /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("div", { style: { fontSize: "48px", marginBottom: "16px" }, children: "📷" }),
      /* @__PURE__ */ e.jsx("h3", { children: s })
    ] }) }) : /* @__PURE__ */ e.jsx(
      "video",
      {
        ref: a,
        autoPlay: !0,
        playsInline: !0,
        muted: !0,
        onCanPlay: f,
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "scaleX(-1)"
          // Mirror effect
        }
      }
    ),
    !s && /* @__PURE__ */ e.jsx(j, { isScanning: r === "scanning" }),
    r === "active" && d.length > 0 && t && /* @__PURE__ */ e.jsxs("div", { style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: "none",
      zIndex: 15
    }, children: [
      d.map((i) => {
        const x = g(
          i.hexColor,
          t.undertone || "neutral",
          t.skinToneDepth || "medium"
        );
        let p = { position: "absolute" };
        return i.category === "lips" ? p = { ...p, bottom: "35%", left: "40%", width: "20%", height: "5%", background: x, opacity: i.intensity, borderRadius: "50%", filter: "blur(4px)", mixBlendMode: "multiply" } : i.category === "cheeks" ? p = { ...p, top: "45%", left: "25%", width: "50%", height: "15%", background: `radial-gradient(ellipse at center, ${x} 0%, transparent 70%)`, opacity: i.intensity, mixBlendMode: "multiply" } : i.category === "base" && (p = { ...p, top: "20%", left: "15%", width: "70%", height: "60%", background: x, opacity: i.intensity * 0.4, borderRadius: "50%", filter: "blur(20px)", mixBlendMode: "overlay" }), /* @__PURE__ */ e.jsx("div", { style: p }, i.id);
      }),
      /* @__PURE__ */ e.jsx("div", { style: {
        position: "absolute",
        top: "80px",
        right: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }, children: d.map((i) => {
        const x = g(i.hexColor, t.undertone || "neutral", t.skinToneDepth || "medium");
        return /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", background: "rgba(0,0,0,0.5)", padding: "6px 12px", borderRadius: "16px", backdropFilter: "blur(4px)" }, children: [
          /* @__PURE__ */ e.jsx("div", { style: { width: "16px", height: "16px", borderRadius: "50%", background: i.hexColor, border: "2px solid white" } }),
          /* @__PURE__ */ e.jsx("span", { style: { color: "white", fontSize: "10px" }, children: "→" }),
          /* @__PURE__ */ e.jsx("div", { style: { width: "16px", height: "16px", borderRadius: "50%", background: x, border: "2px solid white" } }),
          /* @__PURE__ */ e.jsx("span", { style: { color: "white", fontSize: "12px", fontWeight: 500 }, children: i.productName })
        ] }, i.id);
      }) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: "40px 24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      zIndex: 20,
      background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)"
    }, children: [
      r === "initializing" && /* @__PURE__ */ e.jsxs("div", { style: { textAlign: "center", color: "white" }, children: [
        /* @__PURE__ */ e.jsx("h3", { style: { marginBottom: "16px" }, children: "Ready for Face Scan" }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: m,
            style: {
              background: "var(--primary-color, #8b5cf6)",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "24px",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer"
            },
            children: "Start Camera"
          }
        )
      ] }),
      r === "active" && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: c,
          style: {
            width: "80px",
            height: "80px",
            borderRadius: "40px",
            border: "4px solid white",
            background: "transparent",
            padding: "6px",
            cursor: "pointer"
          },
          children: /* @__PURE__ */ e.jsx("div", { style: {
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "white",
            transition: "transform 0.1s"
          } })
        }
      ),
      r === "complete" && t && /* @__PURE__ */ e.jsxs("div", { style: {
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(10px)",
        padding: "24px",
        borderRadius: "24px",
        width: "100%",
        maxWidth: "400px",
        color: "#0f172a"
      }, children: [
        /* @__PURE__ */ e.jsx("h3", { style: { fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px" }, children: "Scan Complete" }),
        /* @__PURE__ */ e.jsx("p", { style: { fontSize: "0.875rem", color: "#475569", marginBottom: "16px" }, children: t.rawAnalysis }),
        /* @__PURE__ */ e.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }, children: [
          /* @__PURE__ */ e.jsxs("div", { style: { background: "#f1f5f9", padding: "12px", borderRadius: "12px" }, children: [
            /* @__PURE__ */ e.jsx("div", { style: { fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }, children: "Tone" }),
            /* @__PURE__ */ e.jsx("div", { style: { fontWeight: 600, textTransform: "capitalize" }, children: t.skinToneDepth })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { style: { background: "#f1f5f9", padding: "12px", borderRadius: "12px" }, children: [
            /* @__PURE__ */ e.jsx("div", { style: { fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }, children: "Undertone" }),
            /* @__PURE__ */ e.jsx("div", { style: { fontWeight: 600, textTransform: "capitalize" }, children: t.undertone })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              o(), window.dispatchEvent(new CustomEvent("stella-open-routine"));
            },
            style: {
              width: "100%",
              background: "var(--primary-color, #8b5cf6)",
              color: "white",
              border: "none",
              padding: "16px",
              borderRadius: "12px",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer"
            },
            children: "View My Routine"
          }
        )
      ] })
    ] })
  ] });
}
export {
  C as CameraView
};
