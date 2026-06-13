import { r as l, j as e, u as g, R as h } from "./main-Dhf1GEur.js";
function f({ isScanning: i }) {
  const [n, r] = l.useState([]);
  return l.useEffect(() => {
    if (!i) {
      r([]);
      return;
    }
    const o = [
      "Calibrating lighting...",
      "Mapping facial topography...",
      "Detecting 120 key points...",
      "Extracting epidermal pigment data...",
      "Analyzing tone depth...",
      "Calculating undertone matrices...",
      "Finalizing Beauty Profile..."
    ];
    let t = 0;
    const d = setInterval(() => {
      t < o.length ? (r((a) => [...a.slice(-2), o[t]]), t++) : clearInterval(d);
    }, 450);
    return () => clearInterval(d);
  }, [i]), i ? /* @__PURE__ */ e.jsxs("div", { style: {
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
    }, children: n.map((o, t) => /* @__PURE__ */ e.jsxs("div", { style: {
      fontSize: "0.75rem",
      fontFamily: "monospace",
      color: "white",
      opacity: t === n.length - 1 ? 1 : 0.4,
      textShadow: "0 1px 2px rgba(0,0,0,0.8)"
    }, children: [
      "> ",
      o
    ] }, t)) }),
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
function b() {
  const i = l.useRef(null), n = l.useRef(null), { cameraState: r, setCameraState: o, closeCamera: t, startScan: d, analysisResult: a } = g(), [c, p] = h.useState(null);
  l.useEffect(() => () => {
    n.current && n.current.getTracks().forEach((s) => s.stop());
  }, [t]);
  const x = async () => {
    try {
      const s = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 720 }, height: { ideal: 1280 } }
      });
      n.current = s, i.current && (i.current.srcObject = s), p(null), o("active");
    } catch (s) {
      console.error("Camera access denied or unavailable", s), p("Camera access denied. Please enable camera permissions to use AR features.");
    }
  }, u = () => {
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
          onClick: t,
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
    c ? /* @__PURE__ */ e.jsx("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", textAlign: "center", color: "white" }, children: /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("div", { style: { fontSize: "48px", marginBottom: "16px" }, children: "📷" }),
      /* @__PURE__ */ e.jsx("h3", { children: c })
    ] }) }) : /* @__PURE__ */ e.jsx(
      "video",
      {
        ref: i,
        autoPlay: !0,
        playsInline: !0,
        muted: !0,
        onCanPlay: u,
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "scaleX(-1)"
          // Mirror effect
        }
      }
    ),
    !c && /* @__PURE__ */ e.jsx(f, { isScanning: r === "scanning" }),
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
            onClick: x,
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
          onClick: d,
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
      r === "complete" && a && /* @__PURE__ */ e.jsxs("div", { style: {
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(10px)",
        padding: "24px",
        borderRadius: "24px",
        width: "100%",
        maxWidth: "400px",
        color: "#0f172a"
      }, children: [
        /* @__PURE__ */ e.jsx("h3", { style: { fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px" }, children: "Scan Complete" }),
        /* @__PURE__ */ e.jsx("p", { style: { fontSize: "0.875rem", color: "#475569", marginBottom: "16px" }, children: a.rawAnalysis }),
        /* @__PURE__ */ e.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }, children: [
          /* @__PURE__ */ e.jsxs("div", { style: { background: "#f1f5f9", padding: "12px", borderRadius: "12px" }, children: [
            /* @__PURE__ */ e.jsx("div", { style: { fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }, children: "Tone" }),
            /* @__PURE__ */ e.jsx("div", { style: { fontWeight: 600, textTransform: "capitalize" }, children: a.skinToneDepth })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { style: { background: "#f1f5f9", padding: "12px", borderRadius: "12px" }, children: [
            /* @__PURE__ */ e.jsx("div", { style: { fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }, children: "Undertone" }),
            /* @__PURE__ */ e.jsx("div", { style: { fontWeight: 600, textTransform: "capitalize" }, children: a.undertone })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              t(), window.dispatchEvent(new CustomEvent("stella-open-routine"));
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
  b as CameraView
};
