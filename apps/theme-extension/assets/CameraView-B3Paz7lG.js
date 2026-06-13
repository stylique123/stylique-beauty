import { r as ot, j as d, c as Nt, u as l2, R as c2 } from "./main-DGaKZa3B.js";
function f2({ isScanning: j }) {
  const [X, z] = ot.useState([]);
  return ot.useEffect(() => {
    if (!j) {
      z([]);
      return;
    }
    const Y = [
      "Calibrating lighting...",
      "Mapping facial topography...",
      "Detecting 120 key points...",
      "Extracting epidermal pigment data...",
      "Analyzing tone depth...",
      "Calculating undertone matrices...",
      "Finalizing Beauty Profile..."
    ];
    let U = 0;
    const K = setInterval(() => {
      U < Y.length ? (z((B) => [...B.slice(-2), Y[U]]), U++) : clearInterval(K);
    }, 450);
    return () => clearInterval(K);
  }, [j]), j ? /* @__PURE__ */ d.jsxs("div", { style: {
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
    /* @__PURE__ */ d.jsx("div", { style: {
      width: "280px",
      height: "380px",
      border: "2px solid rgba(139, 92, 246, 0.5)",
      borderRadius: "100px",
      position: "relative",
      boxShadow: "0 0 40px rgba(139, 92, 246, 0.2) inset"
    }, children: /* @__PURE__ */ d.jsx("div", { style: {
      position: "absolute",
      top: 0,
      left: "10%",
      right: "10%",
      height: "2px",
      background: "var(--primary-color, #8b5cf6)",
      boxShadow: "0 0 15px 3px var(--primary-color, #8b5cf6)",
      animation: "scan-laser 2.5s infinite ease-in-out"
    } }) }),
    /* @__PURE__ */ d.jsx("div", { style: {
      position: "absolute",
      bottom: "80px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.25rem"
    }, children: X.map((Y, U) => /* @__PURE__ */ d.jsxs("div", { style: {
      fontSize: "0.75rem",
      fontFamily: "monospace",
      color: "white",
      opacity: U === X.length - 1 ? 1 : 0.4,
      textShadow: "0 1px 2px rgba(0,0,0,0.8)"
    }, children: [
      "> ",
      Y
    ] }, U)) }),
    /* @__PURE__ */ d.jsx("style", { children: `
          @keyframes scan-laser {
            0% { top: 10%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 90%; opacity: 0; }
          }
        ` })
  ] }) : null;
}
function h2(j) {
  const X = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(j);
  return X ? [
    parseInt(X[1], 16),
    parseInt(X[2], 16),
    parseInt(X[3], 16)
  ] : [255, 255, 255];
}
function g2(j, X, z) {
  return "#" + (1 << 24 | j << 16 | X << 8 | z).toString(16).slice(1);
}
function Ce(j, X, z) {
  const [Y, U, K] = h2(j);
  let B = Y, P = U, D = K;
  switch (X) {
    case "warm":
      B = Math.min(255, Y + 15), P = Math.min(255, U + 10), D = Math.max(0, K - 15);
      break;
    case "cool":
      B = Math.max(0, Y - 10), D = Math.min(255, K + 20);
      break;
    case "olive":
      P = Math.min(255, U + 15), B = Math.max(0, Y - 5), D = Math.max(0, K - 10);
      break;
  }
  return z === "deep" || z === "rich" ? (B = Math.min(255, B * 1.1), P = Math.min(255, P * 1.1), D = Math.min(255, D * 1.1)) : (z === "fair" || z === "light") && (B = Math.max(0, B * 0.9), P = Math.max(0, P * 0.9), D = Math.max(0, D * 0.9)), g2(Math.round(B), Math.round(P), Math.round(D));
}
var p2 = {};
(function() {
  var j;
  function X(t) {
    var e = 0;
    return function() {
      return e < t.length ? { done: !1, value: t[e++] } : { done: !0 };
    };
  }
  var z = typeof Object.defineProperties == "function" ? Object.defineProperty : function(t, e, r) {
    return t == Array.prototype || t == Object.prototype || (t[e] = r.value), t;
  };
  function Y(t) {
    t = [typeof globalThis == "object" && globalThis, t, typeof window == "object" && window, typeof self == "object" && self, typeof Nt == "object" && Nt];
    for (var e = 0; e < t.length; ++e) {
      var r = t[e];
      if (r && r.Math == Math) return r;
    }
    throw Error("Cannot find global object");
  }
  var U = Y(this);
  function K(t, e) {
    if (e) t: {
      var r = U;
      t = t.split(".");
      for (var n = 0; n < t.length - 1; n++) {
        var i = t[n];
        if (!(i in r)) break t;
        r = r[i];
      }
      t = t[t.length - 1], n = r[t], e = e(n), e != n && e != null && z(r, t, { configurable: !0, writable: !0, value: e });
    }
  }
  K("Symbol", function(t) {
    function e(a) {
      if (this instanceof e) throw new TypeError("Symbol is not a constructor");
      return new r(n + (a || "") + "_" + i++, a);
    }
    function r(a, o) {
      this.g = a, z(this, "description", { configurable: !0, writable: !0, value: o });
    }
    if (t) return t;
    r.prototype.toString = function() {
      return this.g;
    };
    var n = "jscomp_symbol_" + (1e9 * Math.random() >>> 0) + "_", i = 0;
    return e;
  }), K("Symbol.iterator", function(t) {
    if (t) return t;
    t = Symbol("Symbol.iterator");
    for (var e = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), r = 0; r < e.length; r++) {
      var n = U[e[r]];
      typeof n == "function" && typeof n.prototype[t] != "function" && z(n.prototype, t, { configurable: !0, writable: !0, value: function() {
        return B(X(this));
      } });
    }
    return t;
  });
  function B(t) {
    return t = { next: t }, t[Symbol.iterator] = function() {
      return this;
    }, t;
  }
  function P(t) {
    var e = typeof Symbol < "u" && Symbol.iterator && t[Symbol.iterator];
    return e ? e.call(t) : { next: X(t) };
  }
  function D(t) {
    if (!(t instanceof Array)) {
      t = P(t);
      for (var e, r = []; !(e = t.next()).done; ) r.push(e.value);
      t = r;
    }
    return t;
  }
  var jt = typeof Object.create == "function" ? Object.create : function(t) {
    function e() {
    }
    return e.prototype = t, new e();
  }, gt;
  if (typeof Object.setPrototypeOf == "function") gt = Object.setPrototypeOf;
  else {
    var At;
    t: {
      var st = { a: !0 }, at = {};
      try {
        at.__proto__ = st, At = at.a;
        break t;
      } catch {
      }
      At = !1;
    }
    gt = At ? function(t, e) {
      if (t.__proto__ = e, t.__proto__ !== e) throw new TypeError(t + " is not extensible");
      return t;
    } : null;
  }
  var ct = gt;
  function et(t, e) {
    if (t.prototype = jt(e.prototype), t.prototype.constructor = t, ct) ct(t, e);
    else for (var r in e) if (r != "prototype") if (Object.defineProperties) {
      var n = Object.getOwnPropertyDescriptor(e, r);
      n && Object.defineProperty(t, r, n);
    } else t[r] = e[r];
    t.ea = e.prototype;
  }
  function dt() {
    this.l = !1, this.i = null, this.h = void 0, this.g = 1, this.s = this.m = 0, this.j = null;
  }
  function vt(t) {
    if (t.l) throw new TypeError("Generator is already running");
    t.l = !0;
  }
  dt.prototype.o = function(t) {
    this.h = t;
  };
  function yt(t, e) {
    t.j = { U: e, V: !0 }, t.g = t.m || t.s;
  }
  dt.prototype.return = function(t) {
    this.j = { return: t }, this.g = this.s;
  };
  function G(t, e, r) {
    return t.g = r, { value: e };
  }
  function Rt(t) {
    this.g = new dt(), this.h = t;
  }
  function N(t, e) {
    vt(t.g);
    var r = t.g.i;
    return r ? tt(t, "return" in r ? r.return : function(n) {
      return { value: n, done: !0 };
    }, e, t.g.return) : (t.g.return(e), ut(t));
  }
  function tt(t, e, r, n) {
    try {
      var i = e.call(t.g.i, r);
      if (!(i instanceof Object)) throw new TypeError("Iterator result " + i + " is not an object");
      if (!i.done) return t.g.l = !1, i;
      var a = i.value;
    } catch (o) {
      return t.g.i = null, yt(t.g, o), ut(t);
    }
    return t.g.i = null, n.call(t.g, a), ut(t);
  }
  function ut(t) {
    for (; t.g.g; ) try {
      var e = t.h(t.g);
      if (e) return t.g.l = !1, { value: e.value, done: !1 };
    } catch (r) {
      t.g.h = void 0, yt(t.g, r);
    }
    if (t.g.l = !1, t.g.j) {
      if (e = t.g.j, t.g.j = null, e.V) throw e.U;
      return { value: e.return, done: !0 };
    }
    return { value: void 0, done: !0 };
  }
  function $(t) {
    this.next = function(e) {
      return vt(t.g), t.g.i ? e = tt(t, t.g.i.next, e, t.g.o) : (t.g.o(e), e = ut(t)), e;
    }, this.throw = function(e) {
      return vt(t.g), t.g.i ? e = tt(t, t.g.i.throw, e, t.g.o) : (yt(t.g, e), e = ut(t)), e;
    }, this.return = function(e) {
      return N(t, e);
    }, this[Symbol.iterator] = function() {
      return this;
    };
  }
  function W(t, e) {
    return e = new $(new Rt(e)), ct && t.prototype && ct(e, t.prototype), e;
  }
  function s(t, e) {
    t instanceof String && (t += "");
    var r = 0, n = !1, i = { next: function() {
      if (!n && r < t.length) {
        var a = r++;
        return { value: e(a, t[a]), done: !1 };
      }
      return n = !0, { done: !0, value: void 0 };
    } };
    return i[Symbol.iterator] = function() {
      return i;
    }, i;
  }
  var l = typeof Object.assign == "function" ? Object.assign : function(t, e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      if (n) for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  };
  K("Object.assign", function(t) {
    return t || l;
  }), K("Promise", function(t) {
    function e(o) {
      this.h = 0, this.i = void 0, this.g = [], this.o = !1;
      var u = this.j();
      try {
        o(u.resolve, u.reject);
      } catch (c) {
        u.reject(c);
      }
    }
    function r() {
      this.g = null;
    }
    function n(o) {
      return o instanceof e ? o : new e(function(u) {
        u(o);
      });
    }
    if (t) return t;
    r.prototype.h = function(o) {
      if (this.g == null) {
        this.g = [];
        var u = this;
        this.i(function() {
          u.l();
        });
      }
      this.g.push(o);
    };
    var i = U.setTimeout;
    r.prototype.i = function(o) {
      i(o, 0);
    }, r.prototype.l = function() {
      for (; this.g && this.g.length; ) {
        var o = this.g;
        this.g = [];
        for (var u = 0; u < o.length; ++u) {
          var c = o[u];
          o[u] = null;
          try {
            c();
          } catch (g) {
            this.j(g);
          }
        }
      }
      this.g = null;
    }, r.prototype.j = function(o) {
      this.i(function() {
        throw o;
      });
    }, e.prototype.j = function() {
      function o(g) {
        return function(m) {
          c || (c = !0, g.call(u, m));
        };
      }
      var u = this, c = !1;
      return { resolve: o(this.C), reject: o(this.l) };
    }, e.prototype.C = function(o) {
      if (o === this) this.l(new TypeError("A Promise cannot resolve to itself"));
      else if (o instanceof e) this.F(o);
      else {
        t: switch (typeof o) {
          case "object":
            var u = o != null;
            break t;
          case "function":
            u = !0;
            break t;
          default:
            u = !1;
        }
        u ? this.u(o) : this.m(o);
      }
    }, e.prototype.u = function(o) {
      var u = void 0;
      try {
        u = o.then;
      } catch (c) {
        this.l(c);
        return;
      }
      typeof u == "function" ? this.G(u, o) : this.m(o);
    }, e.prototype.l = function(o) {
      this.s(2, o);
    }, e.prototype.m = function(o) {
      this.s(1, o);
    }, e.prototype.s = function(o, u) {
      if (this.h != 0) throw Error("Cannot settle(" + o + ", " + u + "): Promise already settled in state" + this.h);
      this.h = o, this.i = u, this.h === 2 && this.D(), this.A();
    }, e.prototype.D = function() {
      var o = this;
      i(function() {
        if (o.B()) {
          var u = U.console;
          typeof u < "u" && u.error(o.i);
        }
      }, 1);
    }, e.prototype.B = function() {
      if (this.o) return !1;
      var o = U.CustomEvent, u = U.Event, c = U.dispatchEvent;
      return typeof c > "u" ? !0 : (typeof o == "function" ? o = new o("unhandledrejection", { cancelable: !0 }) : typeof u == "function" ? o = new u("unhandledrejection", { cancelable: !0 }) : (o = U.document.createEvent("CustomEvent"), o.initCustomEvent("unhandledrejection", !1, !0, o)), o.promise = this, o.reason = this.i, c(o));
    }, e.prototype.A = function() {
      if (this.g != null) {
        for (var o = 0; o < this.g.length; ++o) a.h(this.g[o]);
        this.g = null;
      }
    };
    var a = new r();
    return e.prototype.F = function(o) {
      var u = this.j();
      o.J(u.resolve, u.reject);
    }, e.prototype.G = function(o, u) {
      var c = this.j();
      try {
        o.call(u, c.resolve, c.reject);
      } catch (g) {
        c.reject(g);
      }
    }, e.prototype.then = function(o, u) {
      function c(E, w) {
        return typeof E == "function" ? function(p) {
          try {
            g(E(p));
          } catch (x) {
            m(x);
          }
        } : w;
      }
      var g, m, L = new e(function(E, w) {
        g = E, m = w;
      });
      return this.J(c(o, g), c(u, m)), L;
    }, e.prototype.catch = function(o) {
      return this.then(void 0, o);
    }, e.prototype.J = function(o, u) {
      function c() {
        switch (g.h) {
          case 1:
            o(g.i);
            break;
          case 2:
            u(g.i);
            break;
          default:
            throw Error("Unexpected state: " + g.h);
        }
      }
      var g = this;
      this.g == null ? a.h(c) : this.g.push(c), this.o = !0;
    }, e.resolve = n, e.reject = function(o) {
      return new e(function(u, c) {
        c(o);
      });
    }, e.race = function(o) {
      return new e(function(u, c) {
        for (var g = P(o), m = g.next(); !m.done; m = g.next()) n(m.value).J(u, c);
      });
    }, e.all = function(o) {
      var u = P(o), c = u.next();
      return c.done ? n([]) : new e(function(g, m) {
        function L(p) {
          return function(x) {
            E[p] = x, w--, w == 0 && g(E);
          };
        }
        var E = [], w = 0;
        do
          E.push(void 0), w++, n(c.value).J(L(E.length - 1), m), c = u.next();
        while (!c.done);
      });
    }, e;
  }), K("Object.is", function(t) {
    return t || function(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    };
  }), K("Array.prototype.includes", function(t) {
    return t || function(e, r) {
      var n = this;
      n instanceof String && (n = String(n));
      var i = n.length;
      for (r = r || 0, 0 > r && (r = Math.max(r + i, 0)); r < i; r++) {
        var a = n[r];
        if (a === e || Object.is(a, e)) return !0;
      }
      return !1;
    };
  }), K("String.prototype.includes", function(t) {
    return t || function(e, r) {
      if (this == null) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
      if (e instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
      return this.indexOf(e, r || 0) !== -1;
    };
  }), K("Array.prototype.keys", function(t) {
    return t || function() {
      return s(this, function(e) {
        return e;
      });
    };
  });
  var v = this || self;
  function h(t, e) {
    t = t.split(".");
    var r = v;
    t[0] in r || typeof r.execScript > "u" || r.execScript("var " + t[0]);
    for (var n; t.length && (n = t.shift()); ) t.length || e === void 0 ? r[n] && r[n] !== Object.prototype[n] ? r = r[n] : r = r[n] = {} : r[n] = e;
  }
  function b(t, e) {
    return e = String.fromCharCode.apply(null, e), t == null ? e : t + e;
  }
  var Z, f = typeof TextDecoder < "u", y, C = typeof TextEncoder < "u";
  function H(t) {
    if (C) t = (y || (y = new TextEncoder())).encode(t);
    else {
      var e = void 0;
      e = e === void 0 ? !1 : e;
      for (var r = 0, n = new Uint8Array(3 * t.length), i = 0; i < t.length; i++) {
        var a = t.charCodeAt(i);
        if (128 > a) n[r++] = a;
        else {
          if (2048 > a) n[r++] = a >> 6 | 192;
          else {
            if (55296 <= a && 57343 >= a) {
              if (56319 >= a && i < t.length) {
                var o = t.charCodeAt(++i);
                if (56320 <= o && 57343 >= o) {
                  a = 1024 * (a - 55296) + o - 56320 + 65536, n[r++] = a >> 18 | 240, n[r++] = a >> 12 & 63 | 128, n[r++] = a >> 6 & 63 | 128, n[r++] = a & 63 | 128;
                  continue;
                } else i--;
              }
              if (e) throw Error("Found an unpaired surrogate");
              a = 65533;
            }
            n[r++] = a >> 12 | 224, n[r++] = a >> 6 & 63 | 128;
          }
          n[r++] = a & 63 | 128;
        }
      }
      t = n.subarray(0, r);
    }
    return t;
  }
  var it = {}, mt = null;
  function ft(t, e) {
    e === void 0 && (e = 0), Ft(), e = it[e];
    for (var r = Array(Math.floor(t.length / 3)), n = e[64] || "", i = 0, a = 0; i < t.length - 2; i += 3) {
      var o = t[i], u = t[i + 1], c = t[i + 2], g = e[o >> 2];
      o = e[(o & 3) << 4 | u >> 4], u = e[(u & 15) << 2 | c >> 6], c = e[c & 63], r[a++] = g + o + u + c;
    }
    switch (g = 0, c = n, t.length - i) {
      case 2:
        g = t[i + 1], c = e[(g & 15) << 2] || n;
      case 1:
        t = t[i], r[a] = e[t >> 2] + e[(t & 3) << 4 | g >> 4] + c + n;
    }
    return r.join("");
  }
  function xt(t) {
    var e = t.length, r = 3 * e / 4;
    r % 3 ? r = Math.floor(r) : "=.".indexOf(t[e - 1]) != -1 && (r = "=.".indexOf(t[e - 2]) != -1 ? r - 2 : r - 1);
    var n = new Uint8Array(r), i = 0;
    return Bt(t, function(a) {
      n[i++] = a;
    }), n.subarray(0, i);
  }
  function Bt(t, e) {
    function r(c) {
      for (; n < t.length; ) {
        var g = t.charAt(n++), m = mt[g];
        if (m != null) return m;
        if (!/^[\s\xa0]*$/.test(g)) throw Error("Unknown base64 encoding at char: " + g);
      }
      return c;
    }
    Ft();
    for (var n = 0; ; ) {
      var i = r(-1), a = r(0), o = r(64), u = r(64);
      if (u === 64 && i === -1) break;
      e(i << 2 | a >> 4), o != 64 && (e(a << 4 & 240 | o >> 2), u != 64 && e(o << 6 & 192 | u));
    }
  }
  function Ft() {
    if (!mt) {
      mt = {};
      for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e = ["+/=", "+/", "-_=", "-_.", "-_"], r = 0; 5 > r; r++) {
        var n = t.concat(e[r].split(""));
        it[r] = n;
        for (var i = 0; i < n.length; i++) {
          var a = n[i];
          mt[a] === void 0 && (mt[a] = i);
        }
      }
    }
  }
  var Le = typeof Uint8Array.prototype.slice == "function", ie;
  function oe(t, e, r) {
    return e === r ? ie || (ie = new Uint8Array(0)) : Le ? t.slice(e, r) : new Uint8Array(t.subarray(e, r));
  }
  var wt = 0, kt = 0;
  function Ct(t, e) {
    e = e === void 0 ? {} : e, e = e.v === void 0 ? !1 : e.v, this.h = null, this.g = this.j = this.l = 0, this.m = !1, this.v = e, t && se(this, t);
  }
  function se(t, e) {
    e = e.constructor === Uint8Array ? e : e.constructor === ArrayBuffer ? new Uint8Array(e) : e.constructor === Array ? new Uint8Array(e) : e.constructor === String ? xt(e) : e instanceof Uint8Array ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(0), t.h = e, t.l = 0, t.j = t.h.length, t.g = t.l;
  }
  Ct.prototype.reset = function() {
    this.g = this.l;
  };
  function Vt(t) {
    for (var e = 128, r = 0, n = 0, i = 0; 4 > i && 128 <= e; i++) e = t.h[t.g++], r |= (e & 127) << 7 * i;
    if (128 <= e && (e = t.h[t.g++], r |= (e & 127) << 28, n |= (e & 127) >> 4), 128 <= e) for (i = 0; 5 > i && 128 <= e; i++) e = t.h[t.g++], n |= (e & 127) << 7 * i + 3;
    if (128 > e)
      return t = r >>> 0, e = n >>> 0, (n = e & 2147483648) && (t = ~t + 1 >>> 0, e = ~e >>> 0, t == 0 && (e = e + 1 >>> 0)), t = 4294967296 * e + (t >>> 0), n ? -t : t;
    t.m = !0;
  }
  Ct.prototype.i = function() {
    var t = this.h, e = t[this.g], r = e & 127;
    return 128 > e ? (this.g += 1, r) : (e = t[this.g + 1], r |= (e & 127) << 7, 128 > e ? (this.g += 2, r) : (e = t[this.g + 2], r |= (e & 127) << 14, 128 > e ? (this.g += 3, r) : (e = t[this.g + 3], r |= (e & 127) << 21, 128 > e ? (this.g += 4, r) : (e = t[this.g + 4], r |= (e & 15) << 28, 128 > e ? (this.g += 5, r >>> 0) : (this.g += 5, 128 <= t[this.g++] && 128 <= t[this.g++] && 128 <= t[this.g++] && 128 <= t[this.g++] && this.g++, r)))));
  }, Ct.prototype.o = function() {
    var t = this.h[this.g], e = this.h[this.g + 1], r = this.h[this.g + 2], n = this.h[this.g + 3];
    return this.g += 4, r = (t << 0 | e << 8 | r << 16 | n << 24) >>> 0, t = 2 * (r >> 31) + 1, e = r >>> 23 & 255, r &= 8388607, e == 255 ? r ? NaN : 1 / 0 * t : e == 0 ? t * Math.pow(2, -149) * r : t * Math.pow(2, e - 150) * (r + Math.pow(2, 23));
  };
  var ae = [];
  function zt() {
    this.g = new Uint8Array(64), this.h = 0;
  }
  zt.prototype.push = function(t) {
    if (!(this.h + 1 < this.g.length)) {
      var e = this.g;
      this.g = new Uint8Array(Math.ceil(1 + 2 * this.g.length)), this.g.set(e);
    }
    this.g[this.h++] = t;
  }, zt.prototype.length = function() {
    return this.h;
  }, zt.prototype.end = function() {
    var t = this.g, e = this.h;
    return this.h = 0, oe(t, 0, e);
  };
  function Et(t, e) {
    for (; 127 < e; ) t.push(e & 127 | 128), e >>>= 7;
    t.push(e);
  }
  function Gt(t) {
    var e = {}, r = e.N === void 0 ? !1 : e.N;
    this.o = { v: e.v === void 0 ? !1 : e.v }, this.N = r, e = this.o, ae.length ? (r = ae.pop(), e && (r.v = e.v), t && se(r, t), t = r) : t = new Ct(t, e), this.g = t, this.m = this.g.g, this.h = this.i = this.l = -1, this.j = !1;
  }
  Gt.prototype.reset = function() {
    this.g.reset(), this.h = this.l = -1;
  };
  function bt(t) {
    var e = t.g;
    if ((e = e.g == e.j) || (e = t.j) || (e = t.g, e = e.m || 0 > e.g || e.g > e.j), e) return !1;
    t.m = t.g.g, e = t.g.i();
    var r = e & 7;
    return r != 0 && r != 5 && r != 1 && r != 2 && r != 3 && r != 4 ? (t.j = !0, !1) : (t.i = e, t.l = e >>> 3, t.h = r, !0);
  }
  function Lt(t) {
    switch (t.h) {
      case 0:
        if (t.h != 0) Lt(t);
        else {
          for (t = t.g; t.h[t.g] & 128; ) t.g++;
          t.g++;
        }
        break;
      case 1:
        t.h != 1 ? Lt(t) : (t = t.g, t.g += 8);
        break;
      case 2:
        if (t.h != 2) Lt(t);
        else {
          var e = t.g.i();
          t = t.g, t.g += e;
        }
        break;
      case 5:
        t.h != 5 ? Lt(t) : (t = t.g, t.g += 4);
        break;
      case 3:
        e = t.l;
        do {
          if (!bt(t)) {
            t.j = !0;
            break;
          }
          if (t.h == 4) {
            t.l != e && (t.j = !0);
            break;
          }
          Lt(t);
        } while (!0);
        break;
      default:
        t.j = !0;
    }
  }
  function Xt(t, e, r) {
    var n = t.g.j, i = t.g.i(), a = t.g.g + i;
    if (t.g.j = a, r(e, t), r = a - t.g.g, r !== 0) throw Error("Message parsing ended unexpectedly. Expected to read " + i + " bytes, instead read " + (i - r) + " bytes, either the data ended unexpectedly or the message misreported its own length");
    return t.g.g = a, t.g.j = n, e;
  }
  function lt(t) {
    return t.g.o();
  }
  function ue(t) {
    var e = t.g.i();
    t = t.g;
    var r = t.g;
    t.g += e, t = t.h;
    var n;
    if (f) (n = Z) || (n = Z = new TextDecoder("utf-8", { fatal: !1 })), n = n.decode(t.subarray(r, r + e));
    else {
      e = r + e;
      for (var i = [], a = null, o, u, c; r < e; ) o = t[r++], 128 > o ? i.push(o) : 224 > o ? r >= e ? i.push(65533) : (u = t[r++], 194 > o || (u & 192) !== 128 ? (r--, i.push(65533)) : i.push((o & 31) << 6 | u & 63)) : 240 > o ? r >= e - 1 ? i.push(65533) : (u = t[r++], (u & 192) !== 128 || o === 224 && 160 > u || o === 237 && 160 <= u || ((n = t[r++]) & 192) !== 128 ? (r--, i.push(65533)) : i.push((o & 15) << 12 | (u & 63) << 6 | n & 63)) : 244 >= o ? r >= e - 2 ? i.push(65533) : (u = t[r++], (u & 192) !== 128 || (o << 28) + (u - 144) >> 30 || ((n = t[r++]) & 192) !== 128 || ((c = t[r++]) & 192) !== 128 ? (r--, i.push(65533)) : (o = (o & 7) << 18 | (u & 63) << 12 | (n & 63) << 6 | c & 63, o -= 65536, i.push((o >> 10 & 1023) + 55296, (o & 1023) + 56320))) : i.push(65533), 8192 <= i.length && (a = b(a, i), i.length = 0);
      n = b(a, i);
    }
    return n;
  }
  function le(t, e, r) {
    var n = t.g.i();
    for (n = t.g.g + n; t.g.g < n; ) r.push(e.call(t.g));
  }
  function ce(t, e) {
    t.h == 2 ? le(t, Ct.prototype.o, e) : e.push(lt(t));
  }
  function Kt() {
    this.h = [], this.i = 0, this.g = new zt();
  }
  function Pt(t, e) {
    e.length !== 0 && (t.h.push(e), t.i += e.length);
  }
  function Zt(t) {
    var e = t.i + t.g.length();
    if (e === 0) return new Uint8Array(0);
    e = new Uint8Array(e);
    for (var r = t.h, n = r.length, i = 0, a = 0; a < n; a++) {
      var o = r[a];
      o.length !== 0 && (e.set(o, i), i += o.length);
    }
    return r = t.g, n = r.h, n !== 0 && (e.set(r.g.subarray(0, n), i), r.h = 0), t.h = [e], e;
  }
  function ht(t, e, r) {
    if (r != null) {
      Et(t.g, 8 * e + 5), t = t.g;
      var n = r;
      n = (r = 0 > n ? 1 : 0) ? -n : n, n === 0 ? 0 < 1 / n ? wt = kt = 0 : (kt = 0, wt = 2147483648) : isNaN(n) ? (kt = 0, wt = 2147483647) : 34028234663852886e22 < n ? (kt = 0, wt = (r << 31 | 2139095040) >>> 0) : 11754943508222875e-54 > n ? (n = Math.round(n / Math.pow(2, -149)), kt = 0, wt = (r << 31 | n) >>> 0) : (e = Math.floor(Math.log(n) / Math.LN2), n *= Math.pow(2, -e), n = Math.round(8388608 * n), 16777216 <= n && ++e, kt = 0, wt = (r << 31 | e + 127 << 23 | n & 8388607) >>> 0), r = wt, t.push(r >>> 0 & 255), t.push(r >>> 8 & 255), t.push(r >>> 16 & 255), t.push(r >>> 24 & 255);
    }
  }
  var fe = typeof Uint8Array == "function";
  function he(t, e, r) {
    if (t != null) return typeof t == "object" ? fe && t instanceof Uint8Array ? r(t) : ge(t, e, r) : e(t);
  }
  function ge(t, e, r) {
    if (Array.isArray(t)) {
      for (var n = Array(t.length), i = 0; i < t.length; i++) n[i] = he(t[i], e, r);
      return Array.isArray(t) && t.W && Wt(n), n;
    }
    n = {};
    for (i in t) n[i] = he(t[i], e, r);
    return n;
  }
  function Pe(t) {
    return typeof t == "number" ? isFinite(t) ? t : String(t) : t;
  }
  var Ue = { W: { value: !0, configurable: !0 } };
  function Wt(t) {
    return Array.isArray(t) && !Object.isFrozen(t) && Object.defineProperties(t, Ue), t;
  }
  var pe;
  function Q(t, e, r) {
    var n = pe;
    pe = null, t || (t = n), n = this.constructor.ca, t || (t = n ? [n] : []), this.j = n ? 0 : -1, this.m = this.g = null, this.h = t;
    t: {
      if (n = this.h.length, t = n - 1, n && (n = this.h[t], !(n === null || typeof n != "object" || Array.isArray(n) || fe && n instanceof Uint8Array))) {
        this.l = t - this.j, this.i = n;
        break t;
      }
      e !== void 0 && -1 < e ? (this.l = Math.max(e, t + 1 - this.j), this.i = null) : this.l = Number.MAX_VALUE;
    }
    if (r) for (e = 0; e < r.length; e++) t = r[e], t < this.l ? (t += this.j, (n = this.h[t]) ? Wt(n) : this.h[t] = Yt) : (de(this), (n = this.i[t]) ? Wt(n) : this.i[t] = Yt);
  }
  var Yt = Object.freeze(Wt([]));
  function de(t) {
    var e = t.l + t.j;
    t.h[e] || (t.i = t.h[e] = {});
  }
  function V(t, e, r) {
    return e === -1 ? null : r !== void 0 && r || e >= t.l ? t.i ? t.i[e] : void 0 : t.h[e + t.j];
  }
  function $t(t, e) {
    var r = r === void 0 ? !1 : r, n = V(t, e, r);
    return n == null && (n = Yt), n === Yt && (n = Wt([]), R(t, e, n, r)), n;
  }
  function ve(t) {
    var e = $t(t, 3);
    if (t.m || (t.m = {}), !t.m[3]) {
      for (var r = 0; r < e.length; r++) e[r] = +e[r];
      t.m[3] = !0;
    }
    return e;
  }
  function _t(t, e, r) {
    return t = V(t, e), t ?? r;
  }
  function pt(t, e, r) {
    return t = V(t, e), t = t == null ? t : +t, t ?? (r === void 0 ? 0 : r);
  }
  function R(t, e, r, n) {
    n !== void 0 && n || e >= t.l ? (de(t), t.i[e] = r) : t.h[e + t.j] = r;
  }
  function ye(t, e, r) {
    if (r === -1) return null;
    if (t.g || (t.g = {}), !t.g[r]) {
      var n = V(t, r, !1);
      n && (t.g[r] = new e(n));
    }
    return t.g[r];
  }
  function Ht(t, e) {
    t.g || (t.g = {});
    var r = t.g[1];
    if (!r) {
      var n = $t(t, 1);
      r = [];
      for (var i = 0; i < n.length; i++) r[i] = new e(n[i]);
      t.g[1] = r;
    }
    return r;
  }
  function me(t, e, r) {
    var n = n === void 0 ? !1 : n;
    t.g || (t.g = {});
    var i = r && Tt(r);
    t.g[e] = r, R(t, e, i, n);
  }
  function xe(t, e, r, n) {
    var i = Ht(t, r);
    e = e || new r(), t = $t(t, 1), n != null ? (i.splice(n, 0, e), t.splice(n, 0, Tt(e))) : (i.push(e), t.push(Tt(e)));
  }
  Q.prototype.toJSON = function() {
    var t = Tt(this);
    return ge(t, Pe, ft);
  };
  function Tt(t, e) {
    if (t.g) for (var r in t.g) {
      var n = t.g[r];
      if (Array.isArray(n)) for (var i = 0; i < n.length; i++) n[i] && Tt(n[i]);
      else n && Tt(n);
    }
    return t.h;
  }
  Q.prototype.toString = function() {
    return Tt(this).toString();
  };
  function Qt(t, e) {
    if (t = t.o) {
      Pt(e, e.g.end());
      for (var r = 0; r < t.length; r++) Pt(e, t[r]);
    }
  }
  function St(t, e) {
    if (e.h == 4) return !1;
    var r = e.m;
    return Lt(e), e.N || (e = oe(e.g.h, r, e.g.g), (r = t.o) ? r.push(e) : t.o = [e]), !0;
  }
  function Ot(t) {
    Q.call(this, t, -1, Ne);
  }
  et(Ot, Q), Ot.prototype.getRows = function() {
    return V(this, 1);
  }, Ot.prototype.getCols = function() {
    return V(this, 2);
  }, Ot.prototype.getPackedDataList = function() {
    return ve(this);
  }, Ot.prototype.getLayout = function() {
    return _t(this, 4, 0);
  };
  function Ie(t, e) {
    for (; bt(e); ) switch (e.i) {
      case 8:
        var r = e.g.i();
        R(t, 1, r);
        break;
      case 16:
        r = e.g.i(), R(t, 2, r);
        break;
      case 29:
      case 26:
        ce(e, t.getPackedDataList());
        break;
      case 32:
        r = Vt(e.g), R(t, 4, r);
        break;
      default:
        if (!St(t, e)) return t;
    }
    return t;
  }
  var Ne = [3];
  function rt(t, e) {
    var r = void 0;
    return new (r || (r = Promise))(function(n, i) {
      function a(c) {
        try {
          u(e.next(c));
        } catch (g) {
          i(g);
        }
      }
      function o(c) {
        try {
          u(e.throw(c));
        } catch (g) {
          i(g);
        }
      }
      function u(c) {
        c.done ? n(c.value) : new r(function(g) {
          g(c.value);
        }).then(a, o);
      }
      u((e = e.apply(t, void 0)).next());
    });
  }
  function Dt(t) {
    Q.call(this, t);
  }
  et(Dt, Q);
  function Be(t, e) {
    for (; bt(e); ) switch (e.i) {
      case 8:
        var r = e.g.i();
        R(t, 1, r);
        break;
      case 21:
        r = lt(e), R(t, 2, r);
        break;
      case 26:
        r = ue(e), R(t, 3, r);
        break;
      case 34:
        r = ue(e), R(t, 4, r);
        break;
      default:
        if (!St(t, e)) return t;
    }
    return t;
  }
  function qt(t) {
    Q.call(this, t, -1, Ge);
  }
  et(qt, Q), qt.prototype.addClassification = function(t, e) {
    return xe(this, t, Dt, e), this;
  };
  var Ge = [1];
  function Ut(t) {
    Q.call(this, t);
  }
  et(Ut, Q);
  function We(t, e) {
    for (; bt(e); ) switch (e.i) {
      case 13:
        var r = lt(e);
        R(t, 1, r);
        break;
      case 21:
        r = lt(e), R(t, 2, r);
        break;
      case 29:
        r = lt(e), R(t, 3, r);
        break;
      case 37:
        r = lt(e), R(t, 4, r);
        break;
      case 45:
        r = lt(e), R(t, 5, r);
        break;
      default:
        if (!St(t, e)) return t;
    }
    return t;
  }
  function we(t) {
    Q.call(this, t, -1, De);
  }
  et(we, Q);
  function be(t) {
    t: {
      var e = new we();
      for (t = new Gt(t); bt(t); ) switch (t.i) {
        case 10:
          var r = Xt(t, new Ut(), We);
          xe(e, r, Ut, void 0);
          break;
        default:
          if (!St(e, t)) break t;
      }
    }
    return e;
  }
  var De = [1];
  function te(t) {
    Q.call(this, t);
  }
  et(te, Q);
  function Mt(t) {
    Q.call(this, t, -1, ze);
  }
  et(Mt, Q), Mt.prototype.getVertexType = function() {
    return _t(this, 1, 0);
  }, Mt.prototype.getPrimitiveType = function() {
    return _t(this, 2, 0);
  }, Mt.prototype.getVertexBufferList = function() {
    return ve(this);
  }, Mt.prototype.getIndexBufferList = function() {
    return $t(this, 4);
  };
  function Ve(t, e) {
    for (; bt(e); ) switch (e.i) {
      case 8:
        var r = Vt(e.g);
        R(t, 1, r);
        break;
      case 16:
        r = Vt(e.g), R(t, 2, r);
        break;
      case 29:
      case 26:
        ce(e, t.getVertexBufferList());
        break;
      case 32:
      case 34:
        r = e;
        var n = t.getIndexBufferList();
        r.h == 2 ? le(r, Ct.prototype.i, n) : n.push(r.g.i());
        break;
      default:
        if (!St(t, e)) return t;
    }
    return t;
  }
  var ze = [3, 4];
  function Jt(t) {
    Q.call(this, t);
  }
  et(Jt, Q), Jt.prototype.getMesh = function() {
    return ye(this, Mt, 1);
  }, Jt.prototype.getPoseTransformMatrix = function() {
    return ye(this, Ot, 2);
  };
  function Xe(t) {
    t: {
      var e = new Jt();
      for (t = new Gt(t); bt(t); ) switch (t.i) {
        case 10:
          var r = Xt(t, new Mt(), Ve);
          me(e, 1, r);
          break;
        case 18:
          r = Xt(t, new Ot(), Ie), me(e, 2, r);
          break;
        default:
          if (!St(e, t)) break t;
      }
    }
    return e;
  }
  function je(t, e, r) {
    if (r = t.createShader(r === 0 ? t.VERTEX_SHADER : t.FRAGMENT_SHADER), t.shaderSource(r, e), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) throw Error(`Could not compile WebGL shader.

` + t.getShaderInfoLog(r));
    return r;
  }
  function Ye(t) {
    return Ht(t, Dt).map(function(e) {
      return { index: _t(e, 1, 0), Y: pt(e, 2), label: V(e, 3) != null ? _t(e, 3, "") : void 0, displayName: V(e, 4) != null ? _t(e, 4, "") : void 0 };
    });
  }
  function Ae(t) {
    return { x: pt(t, 1), y: pt(t, 2), z: pt(t, 3), visibility: V(t, 4) != null ? pt(t, 4) : void 0 };
  }
  function ee(t, e) {
    this.h = t, this.g = e, this.l = 0;
  }
  function ke(t, e, r) {
    return $e(t, e), typeof t.g.canvas.transferToImageBitmap == "function" ? Promise.resolve(t.g.canvas.transferToImageBitmap()) : r ? Promise.resolve(t.g.canvas) : typeof createImageBitmap == "function" ? createImageBitmap(t.g.canvas) : (t.i === void 0 && (t.i = document.createElement("canvas")), new Promise(function(n) {
      t.i.height = t.g.canvas.height, t.i.width = t.g.canvas.width, t.i.getContext("2d", {}).drawImage(t.g.canvas, 0, 0, t.g.canvas.width, t.g.canvas.height), n(t.i);
    }));
  }
  function $e(t, e) {
    var r = t.g;
    if (t.m === void 0) {
      var n = je(r, `
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`, 0), i = je(r, `
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`, 1), a = r.createProgram();
      if (r.attachShader(a, n), r.attachShader(a, i), r.linkProgram(a), !r.getProgramParameter(a, r.LINK_STATUS)) throw Error(`Could not compile WebGL program.

` + r.getProgramInfoLog(a));
      n = t.m = a, r.useProgram(n), i = r.getUniformLocation(n, "sampler0"), t.j = { I: r.getAttribLocation(n, "aVertex"), H: r.getAttribLocation(n, "aTex"), da: i }, t.s = r.createBuffer(), r.bindBuffer(r.ARRAY_BUFFER, t.s), r.enableVertexAttribArray(t.j.I), r.vertexAttribPointer(t.j.I, 2, r.FLOAT, !1, 0, 0), r.bufferData(r.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), r.STATIC_DRAW), r.bindBuffer(r.ARRAY_BUFFER, null), t.o = r.createBuffer(), r.bindBuffer(r.ARRAY_BUFFER, t.o), r.enableVertexAttribArray(t.j.H), r.vertexAttribPointer(
        t.j.H,
        2,
        r.FLOAT,
        !1,
        0,
        0
      ), r.bufferData(r.ARRAY_BUFFER, new Float32Array([0, 1, 0, 0, 1, 0, 1, 1]), r.STATIC_DRAW), r.bindBuffer(r.ARRAY_BUFFER, null), r.uniform1i(i, 0);
    }
    n = t.j, r.useProgram(t.m), r.canvas.width = e.width, r.canvas.height = e.height, r.viewport(0, 0, e.width, e.height), r.activeTexture(r.TEXTURE0), t.h.bindTexture2d(e.glName), r.enableVertexAttribArray(n.I), r.bindBuffer(r.ARRAY_BUFFER, t.s), r.vertexAttribPointer(n.I, 2, r.FLOAT, !1, 0, 0), r.enableVertexAttribArray(n.H), r.bindBuffer(r.ARRAY_BUFFER, t.o), r.vertexAttribPointer(
      n.H,
      2,
      r.FLOAT,
      !1,
      0,
      0
    ), r.bindFramebuffer(r.DRAW_FRAMEBUFFER ? r.DRAW_FRAMEBUFFER : r.FRAMEBUFFER, null), r.clearColor(0, 0, 0, 0), r.clear(r.COLOR_BUFFER_BIT), r.colorMask(!0, !0, !0, !0), r.drawArrays(r.TRIANGLE_FAN, 0, 4), r.disableVertexAttribArray(n.I), r.disableVertexAttribArray(n.H), r.bindBuffer(r.ARRAY_BUFFER, null), t.h.bindTexture2d(0);
  }
  function He(t) {
    this.g = t;
  }
  var Je = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 9, 1, 7, 0, 65, 0, 253, 15, 26, 11]);
  function Ke(t, e) {
    return e + t;
  }
  function Ee(t, e) {
    window[t] = e;
  }
  function Ze(t) {
    var e = document.createElement("script");
    return e.setAttribute("src", t), e.setAttribute("crossorigin", "anonymous"), new Promise(function(r) {
      e.addEventListener("load", function() {
        r();
      }, !1), e.addEventListener("error", function() {
        r();
      }, !1), document.body.appendChild(e);
    });
  }
  function Qe() {
    return rt(this, function t() {
      return W(t, function(e) {
        switch (e.g) {
          case 1:
            return e.m = 2, G(e, WebAssembly.instantiate(Je), 4);
          case 4:
            e.g = 3, e.m = 0;
            break;
          case 2:
            return e.m = 0, e.j = null, e.return(!1);
          case 3:
            return e.return(!0);
        }
      });
    });
  }
  function re(t) {
    if (this.g = t, this.listeners = {}, this.j = {}, this.F = {}, this.m = {}, this.s = {}, this.G = this.o = this.R = !0, this.C = Promise.resolve(), this.P = "", this.B = {}, this.locateFile = t && t.locateFile || Ke, typeof window == "object") var e = window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/";
    else if (typeof location < "u") e = location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/";
    else throw Error("solutions can only be loaded on a web page or in a web worker");
    if (this.S = e, t.options) {
      e = P(Object.keys(t.options));
      for (var r = e.next(); !r.done; r = e.next()) {
        r = r.value;
        var n = t.options[r].default;
        n !== void 0 && (this.j[r] = typeof n == "function" ? n() : n);
      }
    }
  }
  j = re.prototype, j.close = function() {
    return this.i && this.i.delete(), Promise.resolve();
  };
  function qe(t, e) {
    return t.g.files === void 0 ? [] : typeof t.g.files == "function" ? t.g.files(e) : t.g.files;
  }
  function t2(t) {
    return rt(t, function e() {
      var r = this, n, i, a, o, u, c, g, m, L, E, w;
      return W(e, function(p) {
        switch (p.g) {
          case 1:
            return n = r, r.R ? (i = qe(r, r.j), G(p, Qe(), 2)) : p.return();
          case 2:
            if (a = p.h, typeof window == "object") return Ee("createMediapipeSolutionsWasm", { locateFile: r.locateFile }), Ee("createMediapipeSolutionsPackedAssets", { locateFile: r.locateFile }), c = i.filter(function(x) {
              return x.data !== void 0;
            }), g = i.filter(function(x) {
              return x.data === void 0;
            }), m = Promise.all(c.map(function(x) {
              var k = ne(n, x.url);
              if (x.path !== void 0) {
                var _ = x.path;
                k = k.then(function(q) {
                  return n.overrideFile(_, q), Promise.resolve(q);
                });
              }
              return k;
            })), L = Promise.all(g.map(function(x) {
              return x.simd === void 0 || x.simd && a || !x.simd && !a ? Ze(n.locateFile(x.url, n.S)) : Promise.resolve();
            })).then(function() {
              return rt(n, function x() {
                var k, _, q = this;
                return W(x, function(I) {
                  if (I.g == 1) return k = window.createMediapipeSolutionsWasm, _ = window.createMediapipeSolutionsPackedAssets, G(I, k(_), 2);
                  q.h = I.h, I.g = 0;
                });
              });
            }), E = function() {
              return rt(n, function x() {
                var k = this;
                return W(x, function(_) {
                  return k.g.graph && k.g.graph.url ? _ = G(_, ne(k, k.g.graph.url), 0) : (_.g = 0, _ = void 0), _;
                });
              });
            }(), G(p, Promise.all([L, m, E]), 7);
            if (typeof importScripts != "function") throw Error("solutions can only be loaded on a web page or in a web worker");
            return o = i.filter(function(x) {
              return x.simd === void 0 || x.simd && a || !x.simd && !a;
            }).map(function(x) {
              return n.locateFile(x.url, n.S);
            }), importScripts.apply(null, D(o)), G(p, createMediapipeSolutionsWasm(Module), 6);
          case 6:
            r.h = p.h, r.l = new OffscreenCanvas(1, 1), r.h.canvas = r.l, u = r.h.GL.createContext(
              r.l,
              { antialias: !1, alpha: !1, ba: typeof WebGL2RenderingContext < "u" ? 2 : 1 }
            ), r.h.GL.makeContextCurrent(u), p.g = 4;
            break;
          case 7:
            if (r.l = document.createElement("canvas"), w = r.l.getContext("webgl2", {}), !w && (w = r.l.getContext("webgl", {}), !w)) return alert("Failed to create WebGL canvas context when passing video frame."), p.return();
            r.D = w, r.h.canvas = r.l, r.h.createContext(r.l, !0, !0, {});
          case 4:
            r.i = new r.h.SolutionWasm(), r.R = !1, p.g = 0;
        }
      });
    });
  }
  function e2(t) {
    return rt(t, function e() {
      var r = this, n, i, a, o, u, c, g, m;
      return W(e, function(L) {
        if (L.g == 1) {
          if (r.g.graph && r.g.graph.url && r.P === r.g.graph.url) return L.return();
          if (r.o = !0, !r.g.graph || !r.g.graph.url) {
            L.g = 2;
            return;
          }
          return r.P = r.g.graph.url, G(L, ne(r, r.g.graph.url), 3);
        }
        for (L.g != 2 && (n = L.h, r.i.loadGraph(n)), i = P(Object.keys(r.B)), a = i.next(); !a.done; a = i.next()) o = a.value, r.i.overrideFile(o, r.B[o]);
        if (r.B = {}, r.g.listeners) for (u = P(r.g.listeners), c = u.next(); !c.done; c = u.next()) g = c.value, o2(r, g);
        m = r.j, r.j = {}, r.setOptions(m), L.g = 0;
      });
    });
  }
  j.reset = function() {
    return rt(this, function t() {
      var e = this;
      return W(t, function(r) {
        e.i && (e.i.reset(), e.m = {}, e.s = {}), r.g = 0;
      });
    });
  }, j.setOptions = function(t, e) {
    var r = this;
    if (e = e || this.g.options) {
      for (var n = [], i = [], a = {}, o = P(Object.keys(t)), u = o.next(); !u.done; a = { K: a.K, L: a.L }, u = o.next()) {
        var c = u.value;
        c in this.j && this.j[c] === t[c] || (this.j[c] = t[c], u = e[c], u !== void 0 && (u.onChange && (a.K = u.onChange, a.L = t[c], n.push(/* @__PURE__ */ function(g) {
          return function() {
            return rt(r, function m() {
              var L, E = this;
              return W(m, function(w) {
                if (w.g == 1) return G(w, g.K(g.L), 2);
                L = w.h, L === !0 && (E.o = !0), w.g = 0;
              });
            });
          };
        }(a))), u.graphOptionXref && (c = { valueNumber: u.type === 1 ? t[c] : 0, valueBoolean: u.type === 0 ? t[c] : !1, valueString: u.type === 2 ? t[c] : "" }, u = Object.assign(Object.assign(Object.assign({}, { calculatorName: "", calculatorIndex: 0 }), u.graphOptionXref), c), i.push(u))));
      }
      (n.length !== 0 || i.length !== 0) && (this.o = !0, this.A = (this.A === void 0 ? [] : this.A).concat(i), this.u = (this.u === void 0 ? [] : this.u).concat(n));
    }
  };
  function r2(t) {
    return rt(t, function e() {
      var r = this, n, i, a, o, u, c, g;
      return W(e, function(m) {
        switch (m.g) {
          case 1:
            if (!r.o) return m.return();
            if (!r.u) {
              m.g = 2;
              break;
            }
            n = P(r.u), i = n.next();
          case 3:
            if (i.done) {
              m.g = 5;
              break;
            }
            return a = i.value, G(m, a(), 4);
          case 4:
            i = n.next(), m.g = 3;
            break;
          case 5:
            r.u = void 0;
          case 2:
            if (r.A) {
              for (o = new r.h.GraphOptionChangeRequestList(), u = P(r.A), c = u.next(); !c.done; c = u.next()) g = c.value, o.push_back(g);
              r.i.changeOptions(o), o.delete(), r.A = void 0;
            }
            r.o = !1, m.g = 0;
        }
      });
    });
  }
  j.initialize = function() {
    return rt(this, function t() {
      var e = this;
      return W(t, function(r) {
        return r.g == 1 ? G(r, t2(e), 2) : r.g != 3 ? G(r, e2(e), 3) : G(r, r2(e), 0);
      });
    });
  };
  function ne(t, e) {
    return rt(t, function r() {
      var n = this, i, a;
      return W(r, function(o) {
        return e in n.F ? o.return(n.F[e]) : (i = n.locateFile(e, ""), a = fetch(i).then(function(u) {
          return u.arrayBuffer();
        }), n.F[e] = a, o.return(a));
      });
    });
  }
  j.overrideFile = function(t, e) {
    this.i ? this.i.overrideFile(t, e) : this.B[t] = e;
  }, j.clearOverriddenFiles = function() {
    this.B = {}, this.i && this.i.clearOverriddenFiles();
  }, j.send = function(t, e) {
    return rt(this, function r() {
      var n = this, i, a, o, u, c, g, m, L, E;
      return W(r, function(w) {
        switch (w.g) {
          case 1:
            return n.g.inputs ? (i = 1e3 * (e ?? performance.now()), G(w, n.C, 2)) : w.return();
          case 2:
            return G(w, n.initialize(), 3);
          case 3:
            for (a = new n.h.PacketDataList(), o = P(Object.keys(t)), u = o.next(); !u.done; u = o.next()) if (c = u.value, g = n.g.inputs[c]) {
              t: {
                var p = n, x = t[c];
                switch (g.type) {
                  case "video":
                    var k = p.m[g.stream];
                    if (k || (k = new ee(p.h, p.D), p.m[g.stream] = k), p = k, p.l === 0 && (p.l = p.h.createTexture()), typeof HTMLVideoElement < "u" && x instanceof HTMLVideoElement) {
                      var _ = x.videoWidth;
                      k = x.videoHeight;
                    } else typeof HTMLImageElement < "u" && x instanceof HTMLImageElement ? (_ = x.naturalWidth, k = x.naturalHeight) : (_ = x.width, k = x.height);
                    k = { glName: p.l, width: _, height: k }, _ = p.g, _.canvas.width = k.width, _.canvas.height = k.height, _.activeTexture(_.TEXTURE0), p.h.bindTexture2d(p.l), _.texImage2D(_.TEXTURE_2D, 0, _.RGBA, _.RGBA, _.UNSIGNED_BYTE, x), p.h.bindTexture2d(0), p = k;
                    break t;
                  case "detections":
                    for (k = p.m[g.stream], k || (k = new He(p.h), p.m[g.stream] = k), p = k, p.data || (p.data = new p.g.DetectionListData()), p.data.reset(x.length), k = 0; k < x.length; ++k) {
                      _ = x[k];
                      var q = p.data, I = q.setBoundingBox, nt = k, J = _.T, A = new te();
                      R(A, 1, J.Z), R(A, 2, J.$), R(A, 3, J.height), R(A, 4, J.width), R(A, 5, J.rotation), R(A, 6, J.X);
                      var T = J = new Kt();
                      ht(T, 1, V(A, 1)), ht(T, 2, V(A, 2)), ht(T, 3, V(A, 3)), ht(T, 4, V(A, 4)), ht(T, 5, V(A, 5));
                      var M = V(A, 6);
                      if (M != null && M != null) {
                        Et(T.g, 48);
                        var S = T.g, O = M;
                        M = 0 > O, O = Math.abs(O);
                        var F = O >>> 0;
                        for (O = Math.floor((O - F) / 4294967296), O >>>= 0, M && (O = ~O >>> 0, F = (~F >>> 0) + 1, 4294967295 < F && (F = 0, O++, 4294967295 < O && (O = 0))), wt = F, kt = O, M = wt, F = kt; 0 < F || 127 < M; ) S.push(M & 127 | 128), M = (M >>> 7 | F << 25) >>> 0, F >>>= 7;
                        S.push(M);
                      }
                      if (Qt(A, T), J = Zt(J), I.call(q, nt, J), _.O) for (q = 0; q < _.O.length; ++q) A = _.O[q], T = !!A.visibility, I = p.data, nt = I.addNormalizedLandmark, J = k, A = Object.assign(Object.assign({}, A), { visibility: T ? A.visibility : 0 }), T = new Ut(), R(T, 1, A.x), R(T, 2, A.y), R(T, 3, A.z), A.visibility && R(T, 4, A.visibility), S = A = new Kt(), ht(S, 1, V(T, 1)), ht(S, 2, V(T, 2)), ht(S, 3, V(T, 3)), ht(S, 4, V(T, 4)), ht(S, 5, V(T, 5)), Qt(T, S), A = Zt(A), nt.call(I, J, A);
                      if (_.M) for (q = 0; q < _.M.length; ++q) {
                        if (I = p.data, nt = I.addClassification, J = k, A = _.M[q], T = new Dt(), R(T, 2, A.Y), A.index && R(T, 1, A.index), A.label && R(T, 3, A.label), A.displayName && R(T, 4, A.displayName), S = A = new Kt(), F = V(T, 1), F != null && F != null) if (Et(S.g, 8), M = S.g, 0 <= F) Et(M, F);
                        else {
                          for (O = 0; 9 > O; O++) M.push(F & 127 | 128), F >>= 7;
                          M.push(1);
                        }
                        ht(S, 2, V(T, 2)), M = V(T, 3), M != null && (M = H(M), Et(S.g, 26), Et(S.g, M.length), Pt(S, S.g.end()), Pt(S, M)), M = V(T, 4), M != null && (M = H(M), Et(S.g, 34), Et(S.g, M.length), Pt(S, S.g.end()), Pt(S, M)), Qt(T, S), A = Zt(A), nt.call(I, J, A);
                      }
                    }
                    p = p.data;
                    break t;
                  default:
                    p = {};
                }
              }
              switch (m = p, L = g.stream, g.type) {
                case "video":
                  a.pushTexture2d(Object.assign(Object.assign({}, m), { stream: L, timestamp: i }));
                  break;
                case "detections":
                  E = m, E.stream = L, E.timestamp = i, a.pushDetectionList(E);
                  break;
                default:
                  throw Error("Unknown input config type: '" + g.type + "'");
              }
            }
            return n.i.send(a), G(w, n.C, 4);
          case 4:
            a.delete(), w.g = 0;
        }
      });
    });
  };
  function n2(t, e, r) {
    return rt(t, function n() {
      var i, a, o, u, c, g, m = this, L, E, w, p, x, k, _, q;
      return W(n, function(I) {
        switch (I.g) {
          case 1:
            if (!r) return I.return(e);
            for (i = {}, a = 0, o = P(Object.keys(r)), u = o.next(); !u.done; u = o.next()) c = u.value, g = r[c], typeof g != "string" && g.type === "texture" && e[g.stream] !== void 0 && ++a;
            1 < a && (m.G = !1), L = P(Object.keys(r)), u = L.next();
          case 2:
            if (u.done) {
              I.g = 4;
              break;
            }
            if (E = u.value, w = r[E], typeof w == "string") return _ = i, q = E, G(I, i2(m, E, e[w]), 14);
            if (p = e[w.stream], w.type === "detection_list") {
              if (p) {
                for (var nt = p.getRectList(), J = p.getLandmarksList(), A = p.getClassificationsList(), T = [], M = 0; M < nt.size(); ++M) {
                  var S = nt.get(M);
                  t: {
                    var O = new te();
                    for (S = new Gt(S); bt(S); ) switch (S.i) {
                      case 13:
                        var F = lt(S);
                        R(O, 1, F);
                        break;
                      case 21:
                        F = lt(S), R(O, 2, F);
                        break;
                      case 29:
                        F = lt(S), R(O, 3, F);
                        break;
                      case 37:
                        F = lt(S), R(O, 4, F);
                        break;
                      case 45:
                        F = lt(S), R(O, 5, F);
                        break;
                      case 48:
                        F = Vt(S.g), R(O, 6, F);
                        break;
                      default:
                        if (!St(O, S)) break t;
                    }
                  }
                  O = { Z: pt(O, 1), $: pt(O, 2), height: pt(O, 3), width: pt(O, 4), rotation: pt(O, 5, 0), X: _t(O, 6, 0) }, S = Ht(be(J.get(M)), Ut).map(Ae);
                  var It = A.get(M);
                  t: for (F = new qt(), It = new Gt(It); bt(It); ) switch (It.i) {
                    case 10:
                      F.addClassification(Xt(It, new Dt(), Be));
                      break;
                    default:
                      if (!St(F, It)) break t;
                  }
                  O = { T: O, O: S, M: Ye(F) }, T.push(O);
                }
                nt = T;
              } else nt = [];
              i[E] = nt, I.g = 7;
              break;
            }
            if (w.type === "proto_list") {
              if (p) {
                for (nt = Array(p.size()), J = 0; J < p.size(); J++) nt[J] = p.get(J);
                p.delete();
              } else nt = [];
              i[E] = nt, I.g = 7;
              break;
            }
            if (p === void 0) {
              I.g = 3;
              break;
            }
            if (w.type === "float_list") {
              i[E] = p, I.g = 7;
              break;
            }
            if (w.type === "proto") {
              i[E] = p, I.g = 7;
              break;
            }
            if (w.type !== "texture") throw Error("Unknown output config type: '" + w.type + "'");
            return x = m.s[E], x || (x = new ee(m.h, m.D), m.s[E] = x), G(I, ke(x, p, m.G), 13);
          case 13:
            k = I.h, i[E] = k;
          case 7:
            w.transform && i[E] && (i[E] = w.transform(i[E])), I.g = 3;
            break;
          case 14:
            _[q] = I.h;
          case 3:
            u = L.next(), I.g = 2;
            break;
          case 4:
            return I.return(i);
        }
      });
    });
  }
  function i2(t, e, r) {
    return rt(t, function n() {
      var i = this, a;
      return W(n, function(o) {
        return typeof r == "number" || r instanceof Uint8Array || r instanceof i.h.Uint8BlobList ? o.return(r) : r instanceof i.h.Texture2dDataOut ? (a = i.s[e], a || (a = new ee(i.h, i.D), i.s[e] = a), o.return(ke(a, r, i.G))) : o.return(void 0);
      });
    });
  }
  function o2(t, e) {
    for (var r = e.name || "$", n = [].concat(D(e.wants)), i = new t.h.StringList(), a = P(e.wants), o = a.next(); !o.done; o = a.next()) i.push_back(o.value);
    a = t.h.PacketListener.implement({ onResults: function(u) {
      for (var c = {}, g = 0; g < e.wants.length; ++g) c[n[g]] = u.get(g);
      var m = t.listeners[r];
      m && (t.C = n2(t, c, e.outs).then(function(L) {
        L = m(L);
        for (var E = 0; E < e.wants.length; ++E) {
          var w = c[n[E]];
          typeof w == "object" && w.hasOwnProperty && w.hasOwnProperty("delete") && w.delete();
        }
        L && (t.C = L);
      }));
    } }), t.i.attachMultiListener(i, a), i.delete();
  }
  j.onResults = function(t, e) {
    this.listeners[e || "$"] = t;
  }, h("Solution", re), h("OptionType", { BOOL: 0, NUMBER: 1, aa: 2, 0: "BOOL", 1: "NUMBER", 2: "STRING" });
  function s2(t) {
    t = Xe(t);
    var e = t.getMesh();
    if (!e) return t;
    var r = new Float32Array(e.getVertexBufferList());
    e.getVertexBufferList = function() {
      return r;
    };
    var n = new Uint32Array(e.getIndexBufferList());
    return e.getIndexBufferList = function() {
      return n;
    }, t;
  }
  var a2 = { files: [{ url: "face_mesh_solution_packed_assets_loader.js" }, { simd: !0, url: "face_mesh_solution_simd_wasm_bin.js" }, { simd: !1, url: "face_mesh_solution_wasm_bin.js" }], graph: { url: "face_mesh.binarypb" }, listeners: [{ wants: ["multi_face_geometry", "image_transformed", "multi_face_landmarks"], outs: { image: "image_transformed", multiFaceGeometry: { type: "proto_list", stream: "multi_face_geometry", transform: function(t) {
    return t.map(s2);
  } }, multiFaceLandmarks: { type: "proto_list", stream: "multi_face_landmarks", transform: function(t) {
    return t.map(function(e) {
      return Ht(
        be(e),
        Ut
      ).map(Ae);
    });
  } } } }], inputs: { image: { type: "video", stream: "input_frames_gpu" } }, options: { useCpuInference: { type: 0, graphOptionXref: { calculatorType: "InferenceCalculator", fieldName: "use_cpu_inference" }, default: "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document }, enableFaceGeometry: { type: 0, graphOptionXref: {
    calculatorName: "EnableFaceGeometryConstant",
    calculatorType: "ConstantSidePacketCalculator",
    fieldName: "bool_value"
  } }, selfieMode: { type: 0, graphOptionXref: { calculatorType: "GlScalerCalculator", calculatorIndex: 1, fieldName: "flip_horizontal" } }, maxNumFaces: { type: 1, graphOptionXref: { calculatorType: "ConstantSidePacketCalculator", calculatorName: "ConstantSidePacketCalculatorNumFaces", fieldName: "int_value" } }, refineLandmarks: { type: 0, graphOptionXref: { calculatorType: "ConstantSidePacketCalculator", calculatorName: "ConstantSidePacketCalculatorRefineLandmarks", fieldName: "bool_value" } }, minDetectionConfidence: {
    type: 1,
    graphOptionXref: { calculatorType: "TensorsToDetectionsCalculator", calculatorName: "facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator", fieldName: "min_score_thresh" }
  }, minTrackingConfidence: { type: 1, graphOptionXref: { calculatorType: "ThresholdingCalculator", calculatorName: "facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator", fieldName: "threshold" } }, cameraNear: { type: 1, graphOptionXref: {
    calculatorType: "FaceGeometryEnvGeneratorCalculator",
    fieldName: "near"
  } }, cameraFar: { type: 1, graphOptionXref: { calculatorType: "FaceGeometryEnvGeneratorCalculator", fieldName: "far" } }, cameraVerticalFovDegrees: { type: 1, graphOptionXref: { calculatorType: "FaceGeometryEnvGeneratorCalculator", fieldName: "vertical_fov_degrees" } } } }, Se = [[61, 146], [146, 91], [91, 181], [181, 84], [84, 17], [17, 314], [314, 405], [405, 321], [321, 375], [375, 291], [61, 185], [185, 40], [40, 39], [39, 37], [37, 0], [0, 267], [267, 269], [269, 270], [270, 409], [409, 291], [78, 95], [95, 88], [88, 178], [178, 87], [87, 14], [14, 317], [317, 402], [402, 318], [318, 324], [324, 308], [78, 191], [191, 80], [80, 81], [81, 82], [82, 13], [13, 312], [312, 311], [311, 310], [310, 415], [415, 308]], Re = [[263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [
    386,
    385
  ], [385, 384], [384, 398], [398, 362]], _e = [[276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]], Te = [[33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]], Oe = [[46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]], Me = [
    [10, 338],
    [338, 297],
    [297, 332],
    [332, 284],
    [284, 251],
    [251, 389],
    [389, 356],
    [356, 454],
    [454, 323],
    [323, 361],
    [361, 288],
    [288, 397],
    [397, 365],
    [365, 379],
    [379, 378],
    [378, 400],
    [400, 377],
    [377, 152],
    [152, 148],
    [148, 176],
    [176, 149],
    [149, 150],
    [150, 136],
    [136, 172],
    [172, 58],
    [58, 132],
    [132, 93],
    [93, 234],
    [234, 127],
    [127, 162],
    [162, 21],
    [21, 54],
    [54, 103],
    [103, 67],
    [67, 109],
    [109, 10]
  ], u2 = [].concat(D(Se), D(Re), D(_e), D(Te), D(Oe), D(Me));
  function Fe(t) {
    t = t || {}, t = Object.assign(Object.assign({}, a2), t), this.g = new re(t);
  }
  j = Fe.prototype, j.close = function() {
    return this.g.close(), Promise.resolve();
  }, j.onResults = function(t) {
    this.g.onResults(t);
  }, j.initialize = function() {
    return rt(this, function t() {
      var e = this;
      return W(t, function(r) {
        return G(r, e.g.initialize(), 0);
      });
    });
  }, j.reset = function() {
    this.g.reset();
  }, j.send = function(t) {
    return rt(this, function e() {
      var r = this;
      return W(e, function(n) {
        return G(n, r.g.send(t), 0);
      });
    });
  }, j.setOptions = function(t) {
    this.g.setOptions(t);
  }, h("FACE_GEOMETRY", { Layout: { COLUMN_MAJOR: 0, ROW_MAJOR: 1, 0: "COLUMN_MAJOR", 1: "ROW_MAJOR" }, PrimitiveType: { TRIANGLE: 0, 0: "TRIANGLE" }, VertexType: { VERTEX_PT: 0, 0: "VERTEX_PT" }, DEFAULT_CAMERA_PARAMS: { verticalFovDegrees: 63, near: 1, far: 1e4 } }), h("FaceMesh", Fe), h("FACEMESH_LIPS", Se), h("FACEMESH_LEFT_EYE", Re), h("FACEMESH_LEFT_EYEBROW", _e), h("FACEMESH_LEFT_IRIS", [[474, 475], [475, 476], [476, 477], [477, 474]]), h("FACEMESH_RIGHT_EYE", Te), h("FACEMESH_RIGHT_EYEBROW", Oe), h("FACEMESH_RIGHT_IRIS", [[469, 470], [470, 471], [471, 472], [472, 469]]), h("FACEMESH_FACE_OVAL", Me), h("FACEMESH_CONTOURS", u2), h("FACEMESH_TESSELATION", [
    [127, 34],
    [34, 139],
    [139, 127],
    [11, 0],
    [0, 37],
    [37, 11],
    [232, 231],
    [231, 120],
    [120, 232],
    [72, 37],
    [37, 39],
    [39, 72],
    [128, 121],
    [121, 47],
    [47, 128],
    [232, 121],
    [121, 128],
    [128, 232],
    [104, 69],
    [69, 67],
    [67, 104],
    [175, 171],
    [171, 148],
    [148, 175],
    [118, 50],
    [50, 101],
    [101, 118],
    [73, 39],
    [39, 40],
    [40, 73],
    [9, 151],
    [151, 108],
    [108, 9],
    [48, 115],
    [115, 131],
    [131, 48],
    [194, 204],
    [204, 211],
    [211, 194],
    [74, 40],
    [40, 185],
    [185, 74],
    [80, 42],
    [42, 183],
    [183, 80],
    [40, 92],
    [92, 186],
    [186, 40],
    [230, 229],
    [229, 118],
    [118, 230],
    [202, 212],
    [
      212,
      214
    ],
    [214, 202],
    [83, 18],
    [18, 17],
    [17, 83],
    [76, 61],
    [61, 146],
    [146, 76],
    [160, 29],
    [29, 30],
    [30, 160],
    [56, 157],
    [157, 173],
    [173, 56],
    [106, 204],
    [204, 194],
    [194, 106],
    [135, 214],
    [214, 192],
    [192, 135],
    [203, 165],
    [165, 98],
    [98, 203],
    [21, 71],
    [71, 68],
    [68, 21],
    [51, 45],
    [45, 4],
    [4, 51],
    [144, 24],
    [24, 23],
    [23, 144],
    [77, 146],
    [146, 91],
    [91, 77],
    [205, 50],
    [50, 187],
    [187, 205],
    [201, 200],
    [200, 18],
    [18, 201],
    [91, 106],
    [106, 182],
    [182, 91],
    [90, 91],
    [91, 181],
    [181, 90],
    [85, 84],
    [84, 17],
    [17, 85],
    [206, 203],
    [203, 36],
    [36, 206],
    [148, 171],
    [171, 140],
    [140, 148],
    [
      92,
      40
    ],
    [40, 39],
    [39, 92],
    [193, 189],
    [189, 244],
    [244, 193],
    [159, 158],
    [158, 28],
    [28, 159],
    [247, 246],
    [246, 161],
    [161, 247],
    [236, 3],
    [3, 196],
    [196, 236],
    [54, 68],
    [68, 104],
    [104, 54],
    [193, 168],
    [168, 8],
    [8, 193],
    [117, 228],
    [228, 31],
    [31, 117],
    [189, 193],
    [193, 55],
    [55, 189],
    [98, 97],
    [97, 99],
    [99, 98],
    [126, 47],
    [47, 100],
    [100, 126],
    [166, 79],
    [79, 218],
    [218, 166],
    [155, 154],
    [154, 26],
    [26, 155],
    [209, 49],
    [49, 131],
    [131, 209],
    [135, 136],
    [136, 150],
    [150, 135],
    [47, 126],
    [126, 217],
    [217, 47],
    [223, 52],
    [52, 53],
    [53, 223],
    [45, 51],
    [51, 134],
    [134, 45],
    [211, 170],
    [
      170,
      140
    ],
    [140, 211],
    [67, 69],
    [69, 108],
    [108, 67],
    [43, 106],
    [106, 91],
    [91, 43],
    [230, 119],
    [119, 120],
    [120, 230],
    [226, 130],
    [130, 247],
    [247, 226],
    [63, 53],
    [53, 52],
    [52, 63],
    [238, 20],
    [20, 242],
    [242, 238],
    [46, 70],
    [70, 156],
    [156, 46],
    [78, 62],
    [62, 96],
    [96, 78],
    [46, 53],
    [53, 63],
    [63, 46],
    [143, 34],
    [34, 227],
    [227, 143],
    [123, 117],
    [117, 111],
    [111, 123],
    [44, 125],
    [125, 19],
    [19, 44],
    [236, 134],
    [134, 51],
    [51, 236],
    [216, 206],
    [206, 205],
    [205, 216],
    [154, 153],
    [153, 22],
    [22, 154],
    [39, 37],
    [37, 167],
    [167, 39],
    [200, 201],
    [201, 208],
    [208, 200],
    [36, 142],
    [142, 100],
    [
      100,
      36
    ],
    [57, 212],
    [212, 202],
    [202, 57],
    [20, 60],
    [60, 99],
    [99, 20],
    [28, 158],
    [158, 157],
    [157, 28],
    [35, 226],
    [226, 113],
    [113, 35],
    [160, 159],
    [159, 27],
    [27, 160],
    [204, 202],
    [202, 210],
    [210, 204],
    [113, 225],
    [225, 46],
    [46, 113],
    [43, 202],
    [202, 204],
    [204, 43],
    [62, 76],
    [76, 77],
    [77, 62],
    [137, 123],
    [123, 116],
    [116, 137],
    [41, 38],
    [38, 72],
    [72, 41],
    [203, 129],
    [129, 142],
    [142, 203],
    [64, 98],
    [98, 240],
    [240, 64],
    [49, 102],
    [102, 64],
    [64, 49],
    [41, 73],
    [73, 74],
    [74, 41],
    [212, 216],
    [216, 207],
    [207, 212],
    [42, 74],
    [74, 184],
    [184, 42],
    [169, 170],
    [170, 211],
    [211, 169],
    [
      170,
      149
    ],
    [149, 176],
    [176, 170],
    [105, 66],
    [66, 69],
    [69, 105],
    [122, 6],
    [6, 168],
    [168, 122],
    [123, 147],
    [147, 187],
    [187, 123],
    [96, 77],
    [77, 90],
    [90, 96],
    [65, 55],
    [55, 107],
    [107, 65],
    [89, 90],
    [90, 180],
    [180, 89],
    [101, 100],
    [100, 120],
    [120, 101],
    [63, 105],
    [105, 104],
    [104, 63],
    [93, 137],
    [137, 227],
    [227, 93],
    [15, 86],
    [86, 85],
    [85, 15],
    [129, 102],
    [102, 49],
    [49, 129],
    [14, 87],
    [87, 86],
    [86, 14],
    [55, 8],
    [8, 9],
    [9, 55],
    [100, 47],
    [47, 121],
    [121, 100],
    [145, 23],
    [23, 22],
    [22, 145],
    [88, 89],
    [89, 179],
    [179, 88],
    [6, 122],
    [122, 196],
    [196, 6],
    [88, 95],
    [95, 96],
    [96, 88],
    [138, 172],
    [172, 136],
    [136, 138],
    [215, 58],
    [58, 172],
    [172, 215],
    [115, 48],
    [48, 219],
    [219, 115],
    [42, 80],
    [80, 81],
    [81, 42],
    [195, 3],
    [3, 51],
    [51, 195],
    [43, 146],
    [146, 61],
    [61, 43],
    [171, 175],
    [175, 199],
    [199, 171],
    [81, 82],
    [82, 38],
    [38, 81],
    [53, 46],
    [46, 225],
    [225, 53],
    [144, 163],
    [163, 110],
    [110, 144],
    [52, 65],
    [65, 66],
    [66, 52],
    [229, 228],
    [228, 117],
    [117, 229],
    [34, 127],
    [127, 234],
    [234, 34],
    [107, 108],
    [108, 69],
    [69, 107],
    [109, 108],
    [108, 151],
    [151, 109],
    [48, 64],
    [64, 235],
    [235, 48],
    [62, 78],
    [78, 191],
    [191, 62],
    [129, 209],
    [209, 126],
    [126, 129],
    [111, 35],
    [35, 143],
    [
      143,
      111
    ],
    [117, 123],
    [123, 50],
    [50, 117],
    [222, 65],
    [65, 52],
    [52, 222],
    [19, 125],
    [125, 141],
    [141, 19],
    [221, 55],
    [55, 65],
    [65, 221],
    [3, 195],
    [195, 197],
    [197, 3],
    [25, 7],
    [7, 33],
    [33, 25],
    [220, 237],
    [237, 44],
    [44, 220],
    [70, 71],
    [71, 139],
    [139, 70],
    [122, 193],
    [193, 245],
    [245, 122],
    [247, 130],
    [130, 33],
    [33, 247],
    [71, 21],
    [21, 162],
    [162, 71],
    [170, 169],
    [169, 150],
    [150, 170],
    [188, 174],
    [174, 196],
    [196, 188],
    [216, 186],
    [186, 92],
    [92, 216],
    [2, 97],
    [97, 167],
    [167, 2],
    [141, 125],
    [125, 241],
    [241, 141],
    [164, 167],
    [167, 37],
    [37, 164],
    [72, 38],
    [38, 12],
    [12, 72],
    [38, 82],
    [82, 13],
    [13, 38],
    [63, 68],
    [68, 71],
    [71, 63],
    [226, 35],
    [35, 111],
    [111, 226],
    [101, 50],
    [50, 205],
    [205, 101],
    [206, 92],
    [92, 165],
    [165, 206],
    [209, 198],
    [198, 217],
    [217, 209],
    [165, 167],
    [167, 97],
    [97, 165],
    [220, 115],
    [115, 218],
    [218, 220],
    [133, 112],
    [112, 243],
    [243, 133],
    [239, 238],
    [238, 241],
    [241, 239],
    [214, 135],
    [135, 169],
    [169, 214],
    [190, 173],
    [173, 133],
    [133, 190],
    [171, 208],
    [208, 32],
    [32, 171],
    [125, 44],
    [44, 237],
    [237, 125],
    [86, 87],
    [87, 178],
    [178, 86],
    [85, 86],
    [86, 179],
    [179, 85],
    [84, 85],
    [85, 180],
    [180, 84],
    [83, 84],
    [84, 181],
    [181, 83],
    [201, 83],
    [83, 182],
    [182, 201],
    [137, 93],
    [93, 132],
    [132, 137],
    [76, 62],
    [62, 183],
    [183, 76],
    [61, 76],
    [76, 184],
    [184, 61],
    [57, 61],
    [61, 185],
    [185, 57],
    [212, 57],
    [57, 186],
    [186, 212],
    [214, 207],
    [207, 187],
    [187, 214],
    [34, 143],
    [143, 156],
    [156, 34],
    [79, 239],
    [239, 237],
    [237, 79],
    [123, 137],
    [137, 177],
    [177, 123],
    [44, 1],
    [1, 4],
    [4, 44],
    [201, 194],
    [194, 32],
    [32, 201],
    [64, 102],
    [102, 129],
    [129, 64],
    [213, 215],
    [215, 138],
    [138, 213],
    [59, 166],
    [166, 219],
    [219, 59],
    [242, 99],
    [99, 97],
    [97, 242],
    [2, 94],
    [94, 141],
    [141, 2],
    [75, 59],
    [59, 235],
    [235, 75],
    [24, 110],
    [110, 228],
    [
      228,
      24
    ],
    [25, 130],
    [130, 226],
    [226, 25],
    [23, 24],
    [24, 229],
    [229, 23],
    [22, 23],
    [23, 230],
    [230, 22],
    [26, 22],
    [22, 231],
    [231, 26],
    [112, 26],
    [26, 232],
    [232, 112],
    [189, 190],
    [190, 243],
    [243, 189],
    [221, 56],
    [56, 190],
    [190, 221],
    [28, 56],
    [56, 221],
    [221, 28],
    [27, 28],
    [28, 222],
    [222, 27],
    [29, 27],
    [27, 223],
    [223, 29],
    [30, 29],
    [29, 224],
    [224, 30],
    [247, 30],
    [30, 225],
    [225, 247],
    [238, 79],
    [79, 20],
    [20, 238],
    [166, 59],
    [59, 75],
    [75, 166],
    [60, 75],
    [75, 240],
    [240, 60],
    [147, 177],
    [177, 215],
    [215, 147],
    [20, 79],
    [79, 166],
    [166, 20],
    [187, 147],
    [147, 213],
    [213, 187],
    [112, 233],
    [233, 244],
    [244, 112],
    [233, 128],
    [128, 245],
    [245, 233],
    [128, 114],
    [114, 188],
    [188, 128],
    [114, 217],
    [217, 174],
    [174, 114],
    [131, 115],
    [115, 220],
    [220, 131],
    [217, 198],
    [198, 236],
    [236, 217],
    [198, 131],
    [131, 134],
    [134, 198],
    [177, 132],
    [132, 58],
    [58, 177],
    [143, 35],
    [35, 124],
    [124, 143],
    [110, 163],
    [163, 7],
    [7, 110],
    [228, 110],
    [110, 25],
    [25, 228],
    [356, 389],
    [389, 368],
    [368, 356],
    [11, 302],
    [302, 267],
    [267, 11],
    [452, 350],
    [350, 349],
    [349, 452],
    [302, 303],
    [303, 269],
    [269, 302],
    [357, 343],
    [343, 277],
    [277, 357],
    [452, 453],
    [453, 357],
    [357, 452],
    [333, 332],
    [
      332,
      297
    ],
    [297, 333],
    [175, 152],
    [152, 377],
    [377, 175],
    [347, 348],
    [348, 330],
    [330, 347],
    [303, 304],
    [304, 270],
    [270, 303],
    [9, 336],
    [336, 337],
    [337, 9],
    [278, 279],
    [279, 360],
    [360, 278],
    [418, 262],
    [262, 431],
    [431, 418],
    [304, 408],
    [408, 409],
    [409, 304],
    [310, 415],
    [415, 407],
    [407, 310],
    [270, 409],
    [409, 410],
    [410, 270],
    [450, 348],
    [348, 347],
    [347, 450],
    [422, 430],
    [430, 434],
    [434, 422],
    [313, 314],
    [314, 17],
    [17, 313],
    [306, 307],
    [307, 375],
    [375, 306],
    [387, 388],
    [388, 260],
    [260, 387],
    [286, 414],
    [414, 398],
    [398, 286],
    [335, 406],
    [406, 418],
    [418, 335],
    [364, 367],
    [
      367,
      416
    ],
    [416, 364],
    [423, 358],
    [358, 327],
    [327, 423],
    [251, 284],
    [284, 298],
    [298, 251],
    [281, 5],
    [5, 4],
    [4, 281],
    [373, 374],
    [374, 253],
    [253, 373],
    [307, 320],
    [320, 321],
    [321, 307],
    [425, 427],
    [427, 411],
    [411, 425],
    [421, 313],
    [313, 18],
    [18, 421],
    [321, 405],
    [405, 406],
    [406, 321],
    [320, 404],
    [404, 405],
    [405, 320],
    [315, 16],
    [16, 17],
    [17, 315],
    [426, 425],
    [425, 266],
    [266, 426],
    [377, 400],
    [400, 369],
    [369, 377],
    [322, 391],
    [391, 269],
    [269, 322],
    [417, 465],
    [465, 464],
    [464, 417],
    [386, 257],
    [257, 258],
    [258, 386],
    [466, 260],
    [260, 388],
    [388, 466],
    [456, 399],
    [399, 419],
    [419, 456],
    [284, 332],
    [332, 333],
    [333, 284],
    [417, 285],
    [285, 8],
    [8, 417],
    [346, 340],
    [340, 261],
    [261, 346],
    [413, 441],
    [441, 285],
    [285, 413],
    [327, 460],
    [460, 328],
    [328, 327],
    [355, 371],
    [371, 329],
    [329, 355],
    [392, 439],
    [439, 438],
    [438, 392],
    [382, 341],
    [341, 256],
    [256, 382],
    [429, 420],
    [420, 360],
    [360, 429],
    [364, 394],
    [394, 379],
    [379, 364],
    [277, 343],
    [343, 437],
    [437, 277],
    [443, 444],
    [444, 283],
    [283, 443],
    [275, 440],
    [440, 363],
    [363, 275],
    [431, 262],
    [262, 369],
    [369, 431],
    [297, 338],
    [338, 337],
    [337, 297],
    [273, 375],
    [375, 321],
    [321, 273],
    [450, 451],
    [
      451,
      349
    ],
    [349, 450],
    [446, 342],
    [342, 467],
    [467, 446],
    [293, 334],
    [334, 282],
    [282, 293],
    [458, 461],
    [461, 462],
    [462, 458],
    [276, 353],
    [353, 383],
    [383, 276],
    [308, 324],
    [324, 325],
    [325, 308],
    [276, 300],
    [300, 293],
    [293, 276],
    [372, 345],
    [345, 447],
    [447, 372],
    [352, 345],
    [345, 340],
    [340, 352],
    [274, 1],
    [1, 19],
    [19, 274],
    [456, 248],
    [248, 281],
    [281, 456],
    [436, 427],
    [427, 425],
    [425, 436],
    [381, 256],
    [256, 252],
    [252, 381],
    [269, 391],
    [391, 393],
    [393, 269],
    [200, 199],
    [199, 428],
    [428, 200],
    [266, 330],
    [330, 329],
    [329, 266],
    [287, 273],
    [273, 422],
    [422, 287],
    [250, 462],
    [
      462,
      328
    ],
    [328, 250],
    [258, 286],
    [286, 384],
    [384, 258],
    [265, 353],
    [353, 342],
    [342, 265],
    [387, 259],
    [259, 257],
    [257, 387],
    [424, 431],
    [431, 430],
    [430, 424],
    [342, 353],
    [353, 276],
    [276, 342],
    [273, 335],
    [335, 424],
    [424, 273],
    [292, 325],
    [325, 307],
    [307, 292],
    [366, 447],
    [447, 345],
    [345, 366],
    [271, 303],
    [303, 302],
    [302, 271],
    [423, 266],
    [266, 371],
    [371, 423],
    [294, 455],
    [455, 460],
    [460, 294],
    [279, 278],
    [278, 294],
    [294, 279],
    [271, 272],
    [272, 304],
    [304, 271],
    [432, 434],
    [434, 427],
    [427, 432],
    [272, 407],
    [407, 408],
    [408, 272],
    [394, 430],
    [430, 431],
    [431, 394],
    [395, 369],
    [369, 400],
    [400, 395],
    [334, 333],
    [333, 299],
    [299, 334],
    [351, 417],
    [417, 168],
    [168, 351],
    [352, 280],
    [280, 411],
    [411, 352],
    [325, 319],
    [319, 320],
    [320, 325],
    [295, 296],
    [296, 336],
    [336, 295],
    [319, 403],
    [403, 404],
    [404, 319],
    [330, 348],
    [348, 349],
    [349, 330],
    [293, 298],
    [298, 333],
    [333, 293],
    [323, 454],
    [454, 447],
    [447, 323],
    [15, 16],
    [16, 315],
    [315, 15],
    [358, 429],
    [429, 279],
    [279, 358],
    [14, 15],
    [15, 316],
    [316, 14],
    [285, 336],
    [336, 9],
    [9, 285],
    [329, 349],
    [349, 350],
    [350, 329],
    [374, 380],
    [380, 252],
    [252, 374],
    [318, 402],
    [402, 403],
    [403, 318],
    [6, 197],
    [
      197,
      419
    ],
    [419, 6],
    [318, 319],
    [319, 325],
    [325, 318],
    [367, 364],
    [364, 365],
    [365, 367],
    [435, 367],
    [367, 397],
    [397, 435],
    [344, 438],
    [438, 439],
    [439, 344],
    [272, 271],
    [271, 311],
    [311, 272],
    [195, 5],
    [5, 281],
    [281, 195],
    [273, 287],
    [287, 291],
    [291, 273],
    [396, 428],
    [428, 199],
    [199, 396],
    [311, 271],
    [271, 268],
    [268, 311],
    [283, 444],
    [444, 445],
    [445, 283],
    [373, 254],
    [254, 339],
    [339, 373],
    [282, 334],
    [334, 296],
    [296, 282],
    [449, 347],
    [347, 346],
    [346, 449],
    [264, 447],
    [447, 454],
    [454, 264],
    [336, 296],
    [296, 299],
    [299, 336],
    [338, 10],
    [10, 151],
    [151, 338],
    [278, 439],
    [
      439,
      455
    ],
    [455, 278],
    [292, 407],
    [407, 415],
    [415, 292],
    [358, 371],
    [371, 355],
    [355, 358],
    [340, 345],
    [345, 372],
    [372, 340],
    [346, 347],
    [347, 280],
    [280, 346],
    [442, 443],
    [443, 282],
    [282, 442],
    [19, 94],
    [94, 370],
    [370, 19],
    [441, 442],
    [442, 295],
    [295, 441],
    [248, 419],
    [419, 197],
    [197, 248],
    [263, 255],
    [255, 359],
    [359, 263],
    [440, 275],
    [275, 274],
    [274, 440],
    [300, 383],
    [383, 368],
    [368, 300],
    [351, 412],
    [412, 465],
    [465, 351],
    [263, 467],
    [467, 466],
    [466, 263],
    [301, 368],
    [368, 389],
    [389, 301],
    [395, 378],
    [378, 379],
    [379, 395],
    [412, 351],
    [351, 419],
    [419, 412],
    [436, 426],
    [426, 322],
    [322, 436],
    [2, 164],
    [164, 393],
    [393, 2],
    [370, 462],
    [462, 461],
    [461, 370],
    [164, 0],
    [0, 267],
    [267, 164],
    [302, 11],
    [11, 12],
    [12, 302],
    [268, 12],
    [12, 13],
    [13, 268],
    [293, 300],
    [300, 301],
    [301, 293],
    [446, 261],
    [261, 340],
    [340, 446],
    [330, 266],
    [266, 425],
    [425, 330],
    [426, 423],
    [423, 391],
    [391, 426],
    [429, 355],
    [355, 437],
    [437, 429],
    [391, 327],
    [327, 326],
    [326, 391],
    [440, 457],
    [457, 438],
    [438, 440],
    [341, 382],
    [382, 362],
    [362, 341],
    [459, 457],
    [457, 461],
    [461, 459],
    [434, 430],
    [430, 394],
    [394, 434],
    [414, 463],
    [463, 362],
    [362, 414],
    [396, 369],
    [369, 262],
    [262, 396],
    [354, 461],
    [461, 457],
    [457, 354],
    [316, 403],
    [403, 402],
    [402, 316],
    [315, 404],
    [404, 403],
    [403, 315],
    [314, 405],
    [405, 404],
    [404, 314],
    [313, 406],
    [406, 405],
    [405, 313],
    [421, 418],
    [418, 406],
    [406, 421],
    [366, 401],
    [401, 361],
    [361, 366],
    [306, 408],
    [408, 407],
    [407, 306],
    [291, 409],
    [409, 408],
    [408, 291],
    [287, 410],
    [410, 409],
    [409, 287],
    [432, 436],
    [436, 410],
    [410, 432],
    [434, 416],
    [416, 411],
    [411, 434],
    [264, 368],
    [368, 383],
    [383, 264],
    [309, 438],
    [438, 457],
    [457, 309],
    [352, 376],
    [376, 401],
    [401, 352],
    [274, 275],
    [275, 4],
    [4, 274],
    [421, 428],
    [
      428,
      262
    ],
    [262, 421],
    [294, 327],
    [327, 358],
    [358, 294],
    [433, 416],
    [416, 367],
    [367, 433],
    [289, 455],
    [455, 439],
    [439, 289],
    [462, 370],
    [370, 326],
    [326, 462],
    [2, 326],
    [326, 370],
    [370, 2],
    [305, 460],
    [460, 455],
    [455, 305],
    [254, 449],
    [449, 448],
    [448, 254],
    [255, 261],
    [261, 446],
    [446, 255],
    [253, 450],
    [450, 449],
    [449, 253],
    [252, 451],
    [451, 450],
    [450, 252],
    [256, 452],
    [452, 451],
    [451, 256],
    [341, 453],
    [453, 452],
    [452, 341],
    [413, 464],
    [464, 463],
    [463, 413],
    [441, 413],
    [413, 414],
    [414, 441],
    [258, 442],
    [442, 441],
    [441, 258],
    [257, 443],
    [443, 442],
    [442, 257],
    [259, 444],
    [444, 443],
    [443, 259],
    [260, 445],
    [445, 444],
    [444, 260],
    [467, 342],
    [342, 445],
    [445, 467],
    [459, 458],
    [458, 250],
    [250, 459],
    [289, 392],
    [392, 290],
    [290, 289],
    [290, 328],
    [328, 460],
    [460, 290],
    [376, 433],
    [433, 435],
    [435, 376],
    [250, 290],
    [290, 392],
    [392, 250],
    [411, 416],
    [416, 433],
    [433, 411],
    [341, 463],
    [463, 464],
    [464, 341],
    [453, 464],
    [464, 465],
    [465, 453],
    [357, 465],
    [465, 412],
    [412, 357],
    [343, 412],
    [412, 399],
    [399, 343],
    [360, 363],
    [363, 440],
    [440, 360],
    [437, 399],
    [399, 456],
    [456, 437],
    [420, 456],
    [456, 363],
    [363, 420],
    [401, 435],
    [435, 288],
    [288, 401],
    [
      372,
      383
    ],
    [383, 353],
    [353, 372],
    [339, 255],
    [255, 249],
    [249, 339],
    [448, 261],
    [261, 255],
    [255, 448],
    [133, 243],
    [243, 190],
    [190, 133],
    [133, 155],
    [155, 112],
    [112, 133],
    [33, 246],
    [246, 247],
    [247, 33],
    [33, 130],
    [130, 25],
    [25, 33],
    [398, 384],
    [384, 286],
    [286, 398],
    [362, 398],
    [398, 414],
    [414, 362],
    [362, 463],
    [463, 341],
    [341, 362],
    [263, 359],
    [359, 467],
    [467, 263],
    [263, 249],
    [249, 255],
    [255, 263],
    [466, 467],
    [467, 260],
    [260, 466],
    [75, 60],
    [60, 166],
    [166, 75],
    [238, 239],
    [239, 79],
    [79, 238],
    [162, 127],
    [127, 139],
    [139, 162],
    [72, 11],
    [11, 37],
    [37, 72],
    [121, 232],
    [
      232,
      120
    ],
    [120, 121],
    [73, 72],
    [72, 39],
    [39, 73],
    [114, 128],
    [128, 47],
    [47, 114],
    [233, 232],
    [232, 128],
    [128, 233],
    [103, 104],
    [104, 67],
    [67, 103],
    [152, 175],
    [175, 148],
    [148, 152],
    [119, 118],
    [118, 101],
    [101, 119],
    [74, 73],
    [73, 40],
    [40, 74],
    [107, 9],
    [9, 108],
    [108, 107],
    [49, 48],
    [48, 131],
    [131, 49],
    [32, 194],
    [194, 211],
    [211, 32],
    [184, 74],
    [74, 185],
    [185, 184],
    [191, 80],
    [80, 183],
    [183, 191],
    [185, 40],
    [40, 186],
    [186, 185],
    [119, 230],
    [230, 118],
    [118, 119],
    [210, 202],
    [202, 214],
    [214, 210],
    [84, 83],
    [83, 17],
    [17, 84],
    [77, 76],
    [76, 146],
    [146, 77],
    [161, 160],
    [160, 30],
    [30, 161],
    [190, 56],
    [56, 173],
    [173, 190],
    [182, 106],
    [106, 194],
    [194, 182],
    [138, 135],
    [135, 192],
    [192, 138],
    [129, 203],
    [203, 98],
    [98, 129],
    [54, 21],
    [21, 68],
    [68, 54],
    [5, 51],
    [51, 4],
    [4, 5],
    [145, 144],
    [144, 23],
    [23, 145],
    [90, 77],
    [77, 91],
    [91, 90],
    [207, 205],
    [205, 187],
    [187, 207],
    [83, 201],
    [201, 18],
    [18, 83],
    [181, 91],
    [91, 182],
    [182, 181],
    [180, 90],
    [90, 181],
    [181, 180],
    [16, 85],
    [85, 17],
    [17, 16],
    [205, 206],
    [206, 36],
    [36, 205],
    [176, 148],
    [148, 140],
    [140, 176],
    [165, 92],
    [92, 39],
    [39, 165],
    [245, 193],
    [193, 244],
    [244, 245],
    [27, 159],
    [159, 28],
    [28, 27],
    [
      30,
      247
    ],
    [247, 161],
    [161, 30],
    [174, 236],
    [236, 196],
    [196, 174],
    [103, 54],
    [54, 104],
    [104, 103],
    [55, 193],
    [193, 8],
    [8, 55],
    [111, 117],
    [117, 31],
    [31, 111],
    [221, 189],
    [189, 55],
    [55, 221],
    [240, 98],
    [98, 99],
    [99, 240],
    [142, 126],
    [126, 100],
    [100, 142],
    [219, 166],
    [166, 218],
    [218, 219],
    [112, 155],
    [155, 26],
    [26, 112],
    [198, 209],
    [209, 131],
    [131, 198],
    [169, 135],
    [135, 150],
    [150, 169],
    [114, 47],
    [47, 217],
    [217, 114],
    [224, 223],
    [223, 53],
    [53, 224],
    [220, 45],
    [45, 134],
    [134, 220],
    [32, 211],
    [211, 140],
    [140, 32],
    [109, 67],
    [67, 108],
    [108, 109],
    [146, 43],
    [43, 91],
    [91, 146],
    [231, 230],
    [230, 120],
    [120, 231],
    [113, 226],
    [226, 247],
    [247, 113],
    [105, 63],
    [63, 52],
    [52, 105],
    [241, 238],
    [238, 242],
    [242, 241],
    [124, 46],
    [46, 156],
    [156, 124],
    [95, 78],
    [78, 96],
    [96, 95],
    [70, 46],
    [46, 63],
    [63, 70],
    [116, 143],
    [143, 227],
    [227, 116],
    [116, 123],
    [123, 111],
    [111, 116],
    [1, 44],
    [44, 19],
    [19, 1],
    [3, 236],
    [236, 51],
    [51, 3],
    [207, 216],
    [216, 205],
    [205, 207],
    [26, 154],
    [154, 22],
    [22, 26],
    [165, 39],
    [39, 167],
    [167, 165],
    [199, 200],
    [200, 208],
    [208, 199],
    [101, 36],
    [36, 100],
    [100, 101],
    [43, 57],
    [57, 202],
    [202, 43],
    [242, 20],
    [20, 99],
    [99, 242],
    [56, 28],
    [
      28,
      157
    ],
    [157, 56],
    [124, 35],
    [35, 113],
    [113, 124],
    [29, 160],
    [160, 27],
    [27, 29],
    [211, 204],
    [204, 210],
    [210, 211],
    [124, 113],
    [113, 46],
    [46, 124],
    [106, 43],
    [43, 204],
    [204, 106],
    [96, 62],
    [62, 77],
    [77, 96],
    [227, 137],
    [137, 116],
    [116, 227],
    [73, 41],
    [41, 72],
    [72, 73],
    [36, 203],
    [203, 142],
    [142, 36],
    [235, 64],
    [64, 240],
    [240, 235],
    [48, 49],
    [49, 64],
    [64, 48],
    [42, 41],
    [41, 74],
    [74, 42],
    [214, 212],
    [212, 207],
    [207, 214],
    [183, 42],
    [42, 184],
    [184, 183],
    [210, 169],
    [169, 211],
    [211, 210],
    [140, 170],
    [170, 176],
    [176, 140],
    [104, 105],
    [105, 69],
    [69, 104],
    [193, 122],
    [122, 168],
    [168, 193],
    [50, 123],
    [123, 187],
    [187, 50],
    [89, 96],
    [96, 90],
    [90, 89],
    [66, 65],
    [65, 107],
    [107, 66],
    [179, 89],
    [89, 180],
    [180, 179],
    [119, 101],
    [101, 120],
    [120, 119],
    [68, 63],
    [63, 104],
    [104, 68],
    [234, 93],
    [93, 227],
    [227, 234],
    [16, 15],
    [15, 85],
    [85, 16],
    [209, 129],
    [129, 49],
    [49, 209],
    [15, 14],
    [14, 86],
    [86, 15],
    [107, 55],
    [55, 9],
    [9, 107],
    [120, 100],
    [100, 121],
    [121, 120],
    [153, 145],
    [145, 22],
    [22, 153],
    [178, 88],
    [88, 179],
    [179, 178],
    [197, 6],
    [6, 196],
    [196, 197],
    [89, 88],
    [88, 96],
    [96, 89],
    [135, 138],
    [138, 136],
    [136, 135],
    [138, 215],
    [215, 172],
    [172, 138],
    [
      218,
      115
    ],
    [115, 219],
    [219, 218],
    [41, 42],
    [42, 81],
    [81, 41],
    [5, 195],
    [195, 51],
    [51, 5],
    [57, 43],
    [43, 61],
    [61, 57],
    [208, 171],
    [171, 199],
    [199, 208],
    [41, 81],
    [81, 38],
    [38, 41],
    [224, 53],
    [53, 225],
    [225, 224],
    [24, 144],
    [144, 110],
    [110, 24],
    [105, 52],
    [52, 66],
    [66, 105],
    [118, 229],
    [229, 117],
    [117, 118],
    [227, 34],
    [34, 234],
    [234, 227],
    [66, 107],
    [107, 69],
    [69, 66],
    [10, 109],
    [109, 151],
    [151, 10],
    [219, 48],
    [48, 235],
    [235, 219],
    [183, 62],
    [62, 191],
    [191, 183],
    [142, 129],
    [129, 126],
    [126, 142],
    [116, 111],
    [111, 143],
    [143, 116],
    [118, 117],
    [117, 50],
    [50, 118],
    [223, 222],
    [
      222,
      52
    ],
    [52, 223],
    [94, 19],
    [19, 141],
    [141, 94],
    [222, 221],
    [221, 65],
    [65, 222],
    [196, 3],
    [3, 197],
    [197, 196],
    [45, 220],
    [220, 44],
    [44, 45],
    [156, 70],
    [70, 139],
    [139, 156],
    [188, 122],
    [122, 245],
    [245, 188],
    [139, 71],
    [71, 162],
    [162, 139],
    [149, 170],
    [170, 150],
    [150, 149],
    [122, 188],
    [188, 196],
    [196, 122],
    [206, 216],
    [216, 92],
    [92, 206],
    [164, 2],
    [2, 167],
    [167, 164],
    [242, 141],
    [141, 241],
    [241, 242],
    [0, 164],
    [164, 37],
    [37, 0],
    [11, 72],
    [72, 12],
    [12, 11],
    [12, 38],
    [38, 13],
    [13, 12],
    [70, 63],
    [63, 71],
    [71, 70],
    [31, 226],
    [226, 111],
    [111, 31],
    [36, 101],
    [101, 205],
    [205, 36],
    [203, 206],
    [206, 165],
    [165, 203],
    [126, 209],
    [209, 217],
    [217, 126],
    [98, 165],
    [165, 97],
    [97, 98],
    [237, 220],
    [220, 218],
    [218, 237],
    [237, 239],
    [239, 241],
    [241, 237],
    [210, 214],
    [214, 169],
    [169, 210],
    [140, 171],
    [171, 32],
    [32, 140],
    [241, 125],
    [125, 237],
    [237, 241],
    [179, 86],
    [86, 178],
    [178, 179],
    [180, 85],
    [85, 179],
    [179, 180],
    [181, 84],
    [84, 180],
    [180, 181],
    [182, 83],
    [83, 181],
    [181, 182],
    [194, 201],
    [201, 182],
    [182, 194],
    [177, 137],
    [137, 132],
    [132, 177],
    [184, 76],
    [76, 183],
    [183, 184],
    [185, 61],
    [61, 184],
    [184, 185],
    [186, 57],
    [57, 185],
    [185, 186],
    [216, 212],
    [
      212,
      186
    ],
    [186, 216],
    [192, 214],
    [214, 187],
    [187, 192],
    [139, 34],
    [34, 156],
    [156, 139],
    [218, 79],
    [79, 237],
    [237, 218],
    [147, 123],
    [123, 177],
    [177, 147],
    [45, 44],
    [44, 4],
    [4, 45],
    [208, 201],
    [201, 32],
    [32, 208],
    [98, 64],
    [64, 129],
    [129, 98],
    [192, 213],
    [213, 138],
    [138, 192],
    [235, 59],
    [59, 219],
    [219, 235],
    [141, 242],
    [242, 97],
    [97, 141],
    [97, 2],
    [2, 141],
    [141, 97],
    [240, 75],
    [75, 235],
    [235, 240],
    [229, 24],
    [24, 228],
    [228, 229],
    [31, 25],
    [25, 226],
    [226, 31],
    [230, 23],
    [23, 229],
    [229, 230],
    [231, 22],
    [22, 230],
    [230, 231],
    [232, 26],
    [26, 231],
    [231, 232],
    [233, 112],
    [112, 232],
    [232, 233],
    [244, 189],
    [189, 243],
    [243, 244],
    [189, 221],
    [221, 190],
    [190, 189],
    [222, 28],
    [28, 221],
    [221, 222],
    [223, 27],
    [27, 222],
    [222, 223],
    [224, 29],
    [29, 223],
    [223, 224],
    [225, 30],
    [30, 224],
    [224, 225],
    [113, 247],
    [247, 225],
    [225, 113],
    [99, 60],
    [60, 240],
    [240, 99],
    [213, 147],
    [147, 215],
    [215, 213],
    [60, 20],
    [20, 166],
    [166, 60],
    [192, 187],
    [187, 213],
    [213, 192],
    [243, 112],
    [112, 244],
    [244, 243],
    [244, 233],
    [233, 245],
    [245, 244],
    [245, 128],
    [128, 188],
    [188, 245],
    [188, 114],
    [114, 174],
    [174, 188],
    [134, 131],
    [131, 220],
    [220, 134],
    [174, 217],
    [217, 236],
    [236, 174],
    [236, 198],
    [198, 134],
    [134, 236],
    [215, 177],
    [177, 58],
    [58, 215],
    [156, 143],
    [143, 124],
    [124, 156],
    [25, 110],
    [110, 7],
    [7, 25],
    [31, 228],
    [228, 25],
    [25, 31],
    [264, 356],
    [356, 368],
    [368, 264],
    [0, 11],
    [11, 267],
    [267, 0],
    [451, 452],
    [452, 349],
    [349, 451],
    [267, 302],
    [302, 269],
    [269, 267],
    [350, 357],
    [357, 277],
    [277, 350],
    [350, 452],
    [452, 357],
    [357, 350],
    [299, 333],
    [333, 297],
    [297, 299],
    [396, 175],
    [175, 377],
    [377, 396],
    [280, 347],
    [347, 330],
    [330, 280],
    [269, 303],
    [303, 270],
    [270, 269],
    [151, 9],
    [9, 337],
    [337, 151],
    [344, 278],
    [278, 360],
    [360, 344],
    [424, 418],
    [
      418,
      431
    ],
    [431, 424],
    [270, 304],
    [304, 409],
    [409, 270],
    [272, 310],
    [310, 407],
    [407, 272],
    [322, 270],
    [270, 410],
    [410, 322],
    [449, 450],
    [450, 347],
    [347, 449],
    [432, 422],
    [422, 434],
    [434, 432],
    [18, 313],
    [313, 17],
    [17, 18],
    [291, 306],
    [306, 375],
    [375, 291],
    [259, 387],
    [387, 260],
    [260, 259],
    [424, 335],
    [335, 418],
    [418, 424],
    [434, 364],
    [364, 416],
    [416, 434],
    [391, 423],
    [423, 327],
    [327, 391],
    [301, 251],
    [251, 298],
    [298, 301],
    [275, 281],
    [281, 4],
    [4, 275],
    [254, 373],
    [373, 253],
    [253, 254],
    [375, 307],
    [307, 321],
    [321, 375],
    [280, 425],
    [425, 411],
    [411, 280],
    [200, 421],
    [
      421,
      18
    ],
    [18, 200],
    [335, 321],
    [321, 406],
    [406, 335],
    [321, 320],
    [320, 405],
    [405, 321],
    [314, 315],
    [315, 17],
    [17, 314],
    [423, 426],
    [426, 266],
    [266, 423],
    [396, 377],
    [377, 369],
    [369, 396],
    [270, 322],
    [322, 269],
    [269, 270],
    [413, 417],
    [417, 464],
    [464, 413],
    [385, 386],
    [386, 258],
    [258, 385],
    [248, 456],
    [456, 419],
    [419, 248],
    [298, 284],
    [284, 333],
    [333, 298],
    [168, 417],
    [417, 8],
    [8, 168],
    [448, 346],
    [346, 261],
    [261, 448],
    [417, 413],
    [413, 285],
    [285, 417],
    [326, 327],
    [327, 328],
    [328, 326],
    [277, 355],
    [355, 329],
    [329, 277],
    [309, 392],
    [392, 438],
    [438, 309],
    [381, 382],
    [
      382,
      256
    ],
    [256, 381],
    [279, 429],
    [429, 360],
    [360, 279],
    [365, 364],
    [364, 379],
    [379, 365],
    [355, 277],
    [277, 437],
    [437, 355],
    [282, 443],
    [443, 283],
    [283, 282],
    [281, 275],
    [275, 363],
    [363, 281],
    [395, 431],
    [431, 369],
    [369, 395],
    [299, 297],
    [297, 337],
    [337, 299],
    [335, 273],
    [273, 321],
    [321, 335],
    [348, 450],
    [450, 349],
    [349, 348],
    [359, 446],
    [446, 467],
    [467, 359],
    [283, 293],
    [293, 282],
    [282, 283],
    [250, 458],
    [458, 462],
    [462, 250],
    [300, 276],
    [276, 383],
    [383, 300],
    [292, 308],
    [308, 325],
    [325, 292],
    [283, 276],
    [276, 293],
    [293, 283],
    [264, 372],
    [372, 447],
    [447, 264],
    [346, 352],
    [352, 340],
    [340, 346],
    [354, 274],
    [274, 19],
    [19, 354],
    [363, 456],
    [456, 281],
    [281, 363],
    [426, 436],
    [436, 425],
    [425, 426],
    [380, 381],
    [381, 252],
    [252, 380],
    [267, 269],
    [269, 393],
    [393, 267],
    [421, 200],
    [200, 428],
    [428, 421],
    [371, 266],
    [266, 329],
    [329, 371],
    [432, 287],
    [287, 422],
    [422, 432],
    [290, 250],
    [250, 328],
    [328, 290],
    [385, 258],
    [258, 384],
    [384, 385],
    [446, 265],
    [265, 342],
    [342, 446],
    [386, 387],
    [387, 257],
    [257, 386],
    [422, 424],
    [424, 430],
    [430, 422],
    [445, 342],
    [342, 276],
    [276, 445],
    [422, 273],
    [273, 424],
    [424, 422],
    [306, 292],
    [292, 307],
    [307, 306],
    [
      352,
      366
    ],
    [366, 345],
    [345, 352],
    [268, 271],
    [271, 302],
    [302, 268],
    [358, 423],
    [423, 371],
    [371, 358],
    [327, 294],
    [294, 460],
    [460, 327],
    [331, 279],
    [279, 294],
    [294, 331],
    [303, 271],
    [271, 304],
    [304, 303],
    [436, 432],
    [432, 427],
    [427, 436],
    [304, 272],
    [272, 408],
    [408, 304],
    [395, 394],
    [394, 431],
    [431, 395],
    [378, 395],
    [395, 400],
    [400, 378],
    [296, 334],
    [334, 299],
    [299, 296],
    [6, 351],
    [351, 168],
    [168, 6],
    [376, 352],
    [352, 411],
    [411, 376],
    [307, 325],
    [325, 320],
    [320, 307],
    [285, 295],
    [295, 336],
    [336, 285],
    [320, 319],
    [319, 404],
    [404, 320],
    [329, 330],
    [330, 349],
    [349, 329],
    [334, 293],
    [293, 333],
    [333, 334],
    [366, 323],
    [323, 447],
    [447, 366],
    [316, 15],
    [15, 315],
    [315, 316],
    [331, 358],
    [358, 279],
    [279, 331],
    [317, 14],
    [14, 316],
    [316, 317],
    [8, 285],
    [285, 9],
    [9, 8],
    [277, 329],
    [329, 350],
    [350, 277],
    [253, 374],
    [374, 252],
    [252, 253],
    [319, 318],
    [318, 403],
    [403, 319],
    [351, 6],
    [6, 419],
    [419, 351],
    [324, 318],
    [318, 325],
    [325, 324],
    [397, 367],
    [367, 365],
    [365, 397],
    [288, 435],
    [435, 397],
    [397, 288],
    [278, 344],
    [344, 439],
    [439, 278],
    [310, 272],
    [272, 311],
    [311, 310],
    [248, 195],
    [195, 281],
    [281, 248],
    [375, 273],
    [273, 291],
    [291, 375],
    [175, 396],
    [396, 199],
    [199, 175],
    [312, 311],
    [311, 268],
    [268, 312],
    [276, 283],
    [283, 445],
    [445, 276],
    [390, 373],
    [373, 339],
    [339, 390],
    [295, 282],
    [282, 296],
    [296, 295],
    [448, 449],
    [449, 346],
    [346, 448],
    [356, 264],
    [264, 454],
    [454, 356],
    [337, 336],
    [336, 299],
    [299, 337],
    [337, 338],
    [338, 151],
    [151, 337],
    [294, 278],
    [278, 455],
    [455, 294],
    [308, 292],
    [292, 415],
    [415, 308],
    [429, 358],
    [358, 355],
    [355, 429],
    [265, 340],
    [340, 372],
    [372, 265],
    [352, 346],
    [346, 280],
    [280, 352],
    [295, 442],
    [442, 282],
    [282, 295],
    [354, 19],
    [19, 370],
    [370, 354],
    [285, 441],
    [441, 295],
    [295, 285],
    [
      195,
      248
    ],
    [248, 197],
    [197, 195],
    [457, 440],
    [440, 274],
    [274, 457],
    [301, 300],
    [300, 368],
    [368, 301],
    [417, 351],
    [351, 465],
    [465, 417],
    [251, 301],
    [301, 389],
    [389, 251],
    [394, 395],
    [395, 379],
    [379, 394],
    [399, 412],
    [412, 419],
    [419, 399],
    [410, 436],
    [436, 322],
    [322, 410],
    [326, 2],
    [2, 393],
    [393, 326],
    [354, 370],
    [370, 461],
    [461, 354],
    [393, 164],
    [164, 267],
    [267, 393],
    [268, 302],
    [302, 12],
    [12, 268],
    [312, 268],
    [268, 13],
    [13, 312],
    [298, 293],
    [293, 301],
    [301, 298],
    [265, 446],
    [446, 340],
    [340, 265],
    [280, 330],
    [330, 425],
    [425, 280],
    [322, 426],
    [426, 391],
    [391, 322],
    [
      420,
      429
    ],
    [429, 437],
    [437, 420],
    [393, 391],
    [391, 326],
    [326, 393],
    [344, 440],
    [440, 438],
    [438, 344],
    [458, 459],
    [459, 461],
    [461, 458],
    [364, 434],
    [434, 394],
    [394, 364],
    [428, 396],
    [396, 262],
    [262, 428],
    [274, 354],
    [354, 457],
    [457, 274],
    [317, 316],
    [316, 402],
    [402, 317],
    [316, 315],
    [315, 403],
    [403, 316],
    [315, 314],
    [314, 404],
    [404, 315],
    [314, 313],
    [313, 405],
    [405, 314],
    [313, 421],
    [421, 406],
    [406, 313],
    [323, 366],
    [366, 361],
    [361, 323],
    [292, 306],
    [306, 407],
    [407, 292],
    [306, 291],
    [291, 408],
    [408, 306],
    [291, 287],
    [287, 409],
    [409, 291],
    [287, 432],
    [432, 410],
    [410, 287],
    [427, 434],
    [434, 411],
    [411, 427],
    [372, 264],
    [264, 383],
    [383, 372],
    [459, 309],
    [309, 457],
    [457, 459],
    [366, 352],
    [352, 401],
    [401, 366],
    [1, 274],
    [274, 4],
    [4, 1],
    [418, 421],
    [421, 262],
    [262, 418],
    [331, 294],
    [294, 358],
    [358, 331],
    [435, 433],
    [433, 367],
    [367, 435],
    [392, 289],
    [289, 439],
    [439, 392],
    [328, 462],
    [462, 326],
    [326, 328],
    [94, 2],
    [2, 370],
    [370, 94],
    [289, 305],
    [305, 455],
    [455, 289],
    [339, 254],
    [254, 448],
    [448, 339],
    [359, 255],
    [255, 446],
    [446, 359],
    [254, 253],
    [253, 449],
    [449, 254],
    [253, 252],
    [252, 450],
    [450, 253],
    [252, 256],
    [256, 451],
    [451, 252],
    [
      256,
      341
    ],
    [341, 452],
    [452, 256],
    [414, 413],
    [413, 463],
    [463, 414],
    [286, 441],
    [441, 414],
    [414, 286],
    [286, 258],
    [258, 441],
    [441, 286],
    [258, 257],
    [257, 442],
    [442, 258],
    [257, 259],
    [259, 443],
    [443, 257],
    [259, 260],
    [260, 444],
    [444, 259],
    [260, 467],
    [467, 445],
    [445, 260],
    [309, 459],
    [459, 250],
    [250, 309],
    [305, 289],
    [289, 290],
    [290, 305],
    [305, 290],
    [290, 460],
    [460, 305],
    [401, 376],
    [376, 435],
    [435, 401],
    [309, 250],
    [250, 392],
    [392, 309],
    [376, 411],
    [411, 433],
    [433, 376],
    [453, 341],
    [341, 464],
    [464, 453],
    [357, 453],
    [453, 465],
    [465, 357],
    [343, 357],
    [357, 412],
    [412, 343],
    [437, 343],
    [343, 399],
    [399, 437],
    [344, 360],
    [360, 440],
    [440, 344],
    [420, 437],
    [437, 456],
    [456, 420],
    [360, 420],
    [420, 363],
    [363, 360],
    [361, 401],
    [401, 288],
    [288, 361],
    [265, 372],
    [372, 353],
    [353, 265],
    [390, 339],
    [339, 249],
    [249, 390],
    [339, 448],
    [448, 255],
    [255, 339]
  ]), h("matrixDataToMatrix", function(t) {
    for (var e = t.getCols(), r = t.getRows(), n = t.getPackedDataList(), i = [], a = 0; a < r; a++) i.push(Array(e));
    for (a = 0; a < r; a++) for (var o = 0; o < e; o++) {
      var u = t.getLayout() === 1 ? a * e + o : o * r + a;
      i[a][o] = n[u];
    }
    return i;
  }), h("VERSION", "0.4.1633559619");
}).call(Nt);
var d2 = {};
(function() {
  function j(s) {
    var l = 0;
    return function() {
      return l < s.length ? { done: !1, value: s[l++] } : { done: !0 };
    };
  }
  var X = typeof Object.defineProperties == "function" ? Object.defineProperty : function(s, l, v) {
    return s == Array.prototype || s == Object.prototype || (s[l] = v.value), s;
  };
  function z(s) {
    s = [typeof globalThis == "object" && globalThis, s, typeof window == "object" && window, typeof self == "object" && self, typeof Nt == "object" && Nt];
    for (var l = 0; l < s.length; ++l) {
      var v = s[l];
      if (v && v.Math == Math) return v;
    }
    throw Error("Cannot find global object");
  }
  var Y = z(this);
  function U(s, l) {
    if (l) t: {
      var v = Y;
      s = s.split(".");
      for (var h = 0; h < s.length - 1; h++) {
        var b = s[h];
        if (!(b in v)) break t;
        v = v[b];
      }
      s = s[s.length - 1], h = v[s], l = l(h), l != h && l != null && X(v, s, { configurable: !0, writable: !0, value: l });
    }
  }
  U("Symbol", function(s) {
    function l(Z) {
      if (this instanceof l) throw new TypeError("Symbol is not a constructor");
      return new v(h + (Z || "") + "_" + b++, Z);
    }
    function v(Z, f) {
      this.g = Z, X(this, "description", { configurable: !0, writable: !0, value: f });
    }
    if (s) return s;
    v.prototype.toString = function() {
      return this.g;
    };
    var h = "jscomp_symbol_" + (1e9 * Math.random() >>> 0) + "_", b = 0;
    return l;
  }), U("Symbol.iterator", function(s) {
    if (s) return s;
    s = Symbol("Symbol.iterator");
    for (var l = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), v = 0; v < l.length; v++) {
      var h = Y[l[v]];
      typeof h == "function" && typeof h.prototype[s] != "function" && X(h.prototype, s, { configurable: !0, writable: !0, value: function() {
        return K(j(this));
      } });
    }
    return s;
  });
  function K(s) {
    return s = { next: s }, s[Symbol.iterator] = function() {
      return this;
    }, s;
  }
  function B(s) {
    var l = typeof Symbol < "u" && Symbol.iterator && s[Symbol.iterator];
    return l ? l.call(s) : { next: j(s) };
  }
  function P() {
    this.i = !1, this.g = null, this.o = void 0, this.j = 1, this.m = 0, this.h = null;
  }
  function D(s) {
    if (s.i) throw new TypeError("Generator is already running");
    s.i = !0;
  }
  P.prototype.l = function(s) {
    this.o = s;
  };
  function jt(s, l) {
    s.h = { F: l, G: !0 }, s.j = s.m;
  }
  P.prototype.return = function(s) {
    this.h = { return: s }, this.j = this.m;
  };
  function gt(s) {
    this.g = new P(), this.h = s;
  }
  function At(s, l) {
    D(s.g);
    var v = s.g.g;
    return v ? st(s, "return" in v ? v.return : function(h) {
      return { value: h, done: !0 };
    }, l, s.g.return) : (s.g.return(l), at(s));
  }
  function st(s, l, v, h) {
    try {
      var b = l.call(s.g.g, v);
      if (!(b instanceof Object)) throw new TypeError("Iterator result " + b + " is not an object");
      if (!b.done) return s.g.i = !1, b;
      var Z = b.value;
    } catch (f) {
      return s.g.g = null, jt(s.g, f), at(s);
    }
    return s.g.g = null, h.call(s.g, Z), at(s);
  }
  function at(s) {
    for (; s.g.j; ) try {
      var l = s.h(s.g);
      if (l) return s.g.i = !1, { value: l.value, done: !1 };
    } catch (v) {
      s.g.o = void 0, jt(s.g, v);
    }
    if (s.g.i = !1, s.g.h) {
      if (l = s.g.h, s.g.h = null, l.G) throw l.F;
      return { value: l.return, done: !0 };
    }
    return { value: void 0, done: !0 };
  }
  function ct(s) {
    this.next = function(l) {
      return D(s.g), s.g.g ? l = st(s, s.g.g.next, l, s.g.l) : (s.g.l(l), l = at(s)), l;
    }, this.throw = function(l) {
      return D(s.g), s.g.g ? l = st(s, s.g.g.throw, l, s.g.l) : (jt(s.g, l), l = at(s)), l;
    }, this.return = function(l) {
      return At(s, l);
    }, this[Symbol.iterator] = function() {
      return this;
    };
  }
  function et(s) {
    function l(h) {
      return s.next(h);
    }
    function v(h) {
      return s.throw(h);
    }
    return new Promise(function(h, b) {
      function Z(f) {
        f.done ? h(f.value) : Promise.resolve(f.value).then(l, v).then(Z, b);
      }
      Z(s.next());
    });
  }
  U("Promise", function(s) {
    function l(f) {
      this.h = 0, this.i = void 0, this.g = [], this.o = !1;
      var y = this.j();
      try {
        f(y.resolve, y.reject);
      } catch (C) {
        y.reject(C);
      }
    }
    function v() {
      this.g = null;
    }
    function h(f) {
      return f instanceof l ? f : new l(function(y) {
        y(f);
      });
    }
    if (s) return s;
    v.prototype.h = function(f) {
      if (this.g == null) {
        this.g = [];
        var y = this;
        this.i(function() {
          y.l();
        });
      }
      this.g.push(f);
    };
    var b = Y.setTimeout;
    v.prototype.i = function(f) {
      b(f, 0);
    }, v.prototype.l = function() {
      for (; this.g && this.g.length; ) {
        var f = this.g;
        this.g = [];
        for (var y = 0; y < f.length; ++y) {
          var C = f[y];
          f[y] = null;
          try {
            C();
          } catch (H) {
            this.j(H);
          }
        }
      }
      this.g = null;
    }, v.prototype.j = function(f) {
      this.i(function() {
        throw f;
      });
    }, l.prototype.j = function() {
      function f(H) {
        return function(it) {
          C || (C = !0, H.call(y, it));
        };
      }
      var y = this, C = !1;
      return { resolve: f(this.A), reject: f(this.l) };
    }, l.prototype.A = function(f) {
      if (f === this) this.l(new TypeError("A Promise cannot resolve to itself"));
      else if (f instanceof l) this.C(f);
      else {
        t: switch (typeof f) {
          case "object":
            var y = f != null;
            break t;
          case "function":
            y = !0;
            break t;
          default:
            y = !1;
        }
        y ? this.v(f) : this.m(f);
      }
    }, l.prototype.v = function(f) {
      var y = void 0;
      try {
        y = f.then;
      } catch (C) {
        this.l(C);
        return;
      }
      typeof y == "function" ? this.D(y, f) : this.m(f);
    }, l.prototype.l = function(f) {
      this.u(2, f);
    }, l.prototype.m = function(f) {
      this.u(1, f);
    }, l.prototype.u = function(f, y) {
      if (this.h != 0) throw Error("Cannot settle(" + f + ", " + y + "): Promise already settled in state" + this.h);
      this.h = f, this.i = y, this.h === 2 && this.B(), this.H();
    }, l.prototype.B = function() {
      var f = this;
      b(function() {
        if (f.I()) {
          var y = Y.console;
          typeof y < "u" && y.error(f.i);
        }
      }, 1);
    }, l.prototype.I = function() {
      if (this.o) return !1;
      var f = Y.CustomEvent, y = Y.Event, C = Y.dispatchEvent;
      return typeof C > "u" ? !0 : (typeof f == "function" ? f = new f("unhandledrejection", { cancelable: !0 }) : typeof y == "function" ? f = new y("unhandledrejection", { cancelable: !0 }) : (f = Y.document.createEvent("CustomEvent"), f.initCustomEvent("unhandledrejection", !1, !0, f)), f.promise = this, f.reason = this.i, C(f));
    }, l.prototype.H = function() {
      if (this.g != null) {
        for (var f = 0; f < this.g.length; ++f) Z.h(this.g[f]);
        this.g = null;
      }
    };
    var Z = new v();
    return l.prototype.C = function(f) {
      var y = this.j();
      f.s(y.resolve, y.reject);
    }, l.prototype.D = function(f, y) {
      var C = this.j();
      try {
        f.call(y, C.resolve, C.reject);
      } catch (H) {
        C.reject(H);
      }
    }, l.prototype.then = function(f, y) {
      function C(ft, xt) {
        return typeof ft == "function" ? function(Bt) {
          try {
            H(ft(Bt));
          } catch (Ft) {
            it(Ft);
          }
        } : xt;
      }
      var H, it, mt = new l(function(ft, xt) {
        H = ft, it = xt;
      });
      return this.s(C(f, H), C(y, it)), mt;
    }, l.prototype.catch = function(f) {
      return this.then(void 0, f);
    }, l.prototype.s = function(f, y) {
      function C() {
        switch (H.h) {
          case 1:
            f(H.i);
            break;
          case 2:
            y(H.i);
            break;
          default:
            throw Error("Unexpected state: " + H.h);
        }
      }
      var H = this;
      this.g == null ? Z.h(C) : this.g.push(C), this.o = !0;
    }, l.resolve = h, l.reject = function(f) {
      return new l(function(y, C) {
        C(f);
      });
    }, l.race = function(f) {
      return new l(function(y, C) {
        for (var H = B(f), it = H.next(); !it.done; it = H.next()) h(it.value).s(y, C);
      });
    }, l.all = function(f) {
      var y = B(f), C = y.next();
      return C.done ? h([]) : new l(function(H, it) {
        function mt(Bt) {
          return function(Ft) {
            ft[Bt] = Ft, xt--, xt == 0 && H(ft);
          };
        }
        var ft = [], xt = 0;
        do
          ft.push(void 0), xt++, h(C.value).s(mt(ft.length - 1), it), C = y.next();
        while (!C.done);
      });
    }, l;
  });
  var dt = typeof Object.assign == "function" ? Object.assign : function(s, l) {
    for (var v = 1; v < arguments.length; v++) {
      var h = arguments[v];
      if (h) for (var b in h) Object.prototype.hasOwnProperty.call(h, b) && (s[b] = h[b]);
    }
    return s;
  };
  U("Object.assign", function(s) {
    return s || dt;
  });
  var vt = this || self, yt = { facingMode: "user", width: 640, height: 480 };
  function G(s, l) {
    this.video = s, this.i = 0, this.h = Object.assign(Object.assign({}, yt), l);
  }
  G.prototype.stop = function() {
    var s = this, l, v, h, b;
    return et(new ct(new gt(function(Z) {
      if (s.g) {
        for (l = s.g.getTracks(), v = B(l), h = v.next(); !h.done; h = v.next()) b = h.value, b.stop();
        s.g = void 0;
      }
      Z.j = 0;
    })));
  }, G.prototype.start = function() {
    var s = this, l;
    return et(new ct(new gt(function(v) {
      return navigator.mediaDevices && navigator.mediaDevices.getUserMedia || alert("No navigator.mediaDevices.getUserMedia exists."), l = s.h, v.return(navigator.mediaDevices.getUserMedia({ video: { facingMode: l.facingMode, width: l.width, height: l.height } }).then(function(h) {
        N(s, h);
      }).catch(function(h) {
        var b = "Failed to acquire camera feed: " + h;
        throw console.error(b), alert(b), h;
      }));
    })));
  };
  function Rt(s) {
    window.requestAnimationFrame(function() {
      tt(s);
    });
  }
  function N(s, l) {
    s.g = l, s.video.srcObject = l, s.video.onloadedmetadata = function() {
      s.video.play(), Rt(s);
    };
  }
  function tt(s) {
    var l = null;
    s.video.paused || s.video.currentTime === s.i || (s.i = s.video.currentTime, l = s.h.onFrame()), l ? l.then(function() {
      Rt(s);
    }) : Rt(s);
  }
  var ut = ["Camera"], $ = vt;
  ut[0] in $ || typeof $.execScript > "u" || $.execScript("var " + ut[0]);
  for (var W; ut.length && (W = ut.shift()); ) ut.length || G === void 0 ? $[W] && $[W] !== Object.prototype[W] ? $ = $[W] : $ = $[W] = {} : $[W] = G;
}).call(Nt);
function y2() {
  const j = ot.useRef(null), X = ot.useRef(null), { cameraState: z, setCameraState: Y, closeCamera: U, startScan: K, analysisResult: B, activeLayers: P } = l2(), [D, jt] = ot.useState(null), [gt, At] = ot.useState(!1), [st, at] = ot.useState(null), ct = ot.useRef(null), et = ot.useRef(null), dt = ot.useRef(null), vt = ot.useRef(null), yt = ot.useRef(null);
  ot.useEffect(() => () => {
    X.current && X.current.getTracks().forEach((N) => N.stop());
  }, [U]);
  const G = async () => {
    try {
      const N = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 720 }, height: { ideal: 1280 } }
      });
      if (X.current = N, j.current) {
        j.current.srcObject = N;
        const tt = new p2.FaceMesh({
          locateFile: ($) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${$}`
        });
        tt.setOptions({
          maxNumFaces: 1,
          refineLandmarks: !0,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5
        }), tt.onResults(($) => {
          if (gt && At(!1), $.multiFaceLandmarks && $.multiFaceLandmarks.length > 0 && j.current) {
            const W = $.multiFaceLandmarks[0], s = j.current.videoWidth, l = j.current.videoHeight, v = j.current.getBoundingClientRect(), h = (b) => {
              const Z = W[b];
              return {
                x: (1 - Z.x) * v.width,
                y: Z.y * v.height
              };
            };
            if (et.current) {
              const b = h(13);
              et.current.style.transform = `translate(${b.x - 30}px, ${b.y - 15}px)`;
            }
            if (dt.current) {
              const b = h(205);
              dt.current.style.transform = `translate(${b.x - 40}px, ${b.y - 40}px)`;
            }
            if (vt.current) {
              const b = h(425);
              vt.current.style.transform = `translate(${b.x - 40}px, ${b.y - 40}px)`;
            }
            if (yt.current) {
              const b = h(1);
              yt.current.style.transform = `translate(${b.x - 150}px, ${b.y - 200}px)`;
            }
          }
        }), new d2.Camera(j.current, {
          onFrame: async () => {
            if (j.current) {
              if (ct.current) {
                const $ = ct.current.getContext("2d");
                if ($) {
                  $.drawImage(j.current, 0, 0, 100, 100);
                  const s = $.getImageData(0, 0, 100, 100).data;
                  let l = 0;
                  for (let h = 0; h < s.length; h += 4)
                    l += (s[h] + s[h + 1] + s[h + 2]) / 3;
                  const v = l / (100 * 100);
                  v < 30 ? at("Environment too dark. Please move to natural lighting for an accurate scan.") : v > 240 ? at("Environment too bright/washed out. Please adjust lighting.") : at(null);
                }
              }
              await tt.send({ image: j.current });
            }
          },
          width: 720,
          height: 1280
        }).start();
      }
      jt(null), At(!0), Y("active");
    } catch (N) {
      console.error("Camera access denied or unavailable", N), jt("Camera access denied. Please enable camera permissions to use AR features.");
    }
  }, Rt = () => {
  };
  return z === "closed" ? null : /* @__PURE__ */ d.jsxs("div", { style: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2147483648,
    background: "#000",
    display: "flex",
    flexDirection: "column"
  }, children: [
    /* @__PURE__ */ d.jsxs("div", { style: { position: "absolute", top: 0, left: 0, right: 0, padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 20, background: "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)" }, children: [
      /* @__PURE__ */ d.jsx("h2", { style: { color: "white", fontSize: "1.25rem", fontWeight: 600, margin: 0 }, children: "Stylique 3D AR" }),
      /* @__PURE__ */ d.jsx("button", { onClick: U, style: { background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)", border: "none", color: "white", width: "40px", height: "40px", borderRadius: "20px", fontSize: "1.25rem", cursor: "pointer" }, children: "✕" })
    ] }),
    D ? /* @__PURE__ */ d.jsx("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", textAlign: "center", color: "white" }, children: /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx("div", { style: { fontSize: "48px", marginBottom: "16px" }, children: "📷" }),
      /* @__PURE__ */ d.jsx("h3", { children: D })
    ] }) }) : /* @__PURE__ */ d.jsx(
      "video",
      {
        ref: j,
        autoPlay: !0,
        playsInline: !0,
        muted: !0,
        onCanPlay: Rt,
        style: { width: "100%", height: "100%", objectFit: "cover", transform: "scaleX(-1)" }
      }
    ),
    /* @__PURE__ */ d.jsx("canvas", { ref: ct, width: 100, height: 100, style: { display: "none" } }),
    !D && /* @__PURE__ */ d.jsx(f2, { isScanning: z === "scanning" }),
    z === "active" && P.length > 0 && B && /* @__PURE__ */ d.jsxs("div", { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: 15, overflow: "hidden" }, children: [
      P.map((N) => {
        const tt = Ce(N.hexColor, B.undertone || "neutral", B.skinToneDepth || "medium");
        return N.category === "lips" ? /* @__PURE__ */ d.jsx("div", { ref: et, style: { position: "absolute", top: 0, left: 0, width: "60px", height: "30px", background: tt, opacity: N.intensity, borderRadius: "50%", filter: "blur(4px)", mixBlendMode: "multiply", willChange: "transform" } }, N.id) : N.category === "cheeks" ? /* @__PURE__ */ d.jsxs(c2.Fragment, { children: [
          /* @__PURE__ */ d.jsx("div", { ref: dt, style: { position: "absolute", top: 0, left: 0, width: "80px", height: "80px", background: `radial-gradient(ellipse at center, ${tt} 0%, transparent 70%)`, opacity: N.intensity, mixBlendMode: "multiply", willChange: "transform" } }),
          /* @__PURE__ */ d.jsx("div", { ref: vt, style: { position: "absolute", top: 0, left: 0, width: "80px", height: "80px", background: `radial-gradient(ellipse at center, ${tt} 0%, transparent 70%)`, opacity: N.intensity, mixBlendMode: "multiply", willChange: "transform" } })
        ] }, N.id) : N.category === "base" ? /* @__PURE__ */ d.jsx("div", { ref: yt, style: { position: "absolute", top: 0, left: 0, width: "300px", height: "400px", background: tt, opacity: N.intensity * 0.4, borderRadius: "50%", filter: "blur(40px)", mixBlendMode: "overlay", willChange: "transform" } }, N.id) : null;
      }),
      /* @__PURE__ */ d.jsx("div", { style: { position: "absolute", top: "80px", right: "20px", display: "flex", flexDirection: "column", gap: "8px" }, children: P.map((N) => {
        const tt = Ce(N.hexColor, B.undertone || "neutral", B.skinToneDepth || "medium");
        return /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", background: "rgba(0,0,0,0.5)", padding: "6px 12px", borderRadius: "16px", backdropFilter: "blur(4px)" }, children: [
          /* @__PURE__ */ d.jsx("div", { style: { width: "16px", height: "16px", borderRadius: "50%", background: N.hexColor, border: "2px solid white" } }),
          /* @__PURE__ */ d.jsx("span", { style: { color: "white", fontSize: "10px" }, children: "→" }),
          /* @__PURE__ */ d.jsx("div", { style: { width: "16px", height: "16px", borderRadius: "50%", background: tt, border: "2px solid white" } }),
          /* @__PURE__ */ d.jsx("span", { style: { color: "white", fontSize: "12px", fontWeight: 500 }, children: N.productName })
        ] }, N.id);
      }) })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { style: { position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", zIndex: 20, background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)" }, children: [
      z === "initializing" && /* @__PURE__ */ d.jsxs("div", { style: { textAlign: "center", color: "white" }, children: [
        /* @__PURE__ */ d.jsx("h3", { style: { marginBottom: "16px" }, children: "Ready for Face Scan" }),
        /* @__PURE__ */ d.jsx("button", { onClick: G, style: { background: "var(--primary-color, #8b5cf6)", color: "white", border: "none", padding: "12px 24px", borderRadius: "24px", fontWeight: 600, fontSize: "1rem", cursor: "pointer" }, children: "Start 3D Scanner" })
      ] }),
      z === "active" && gt && /* @__PURE__ */ d.jsxs("div", { style: { textAlign: "center", color: "white" }, children: [
        /* @__PURE__ */ d.jsx("div", { style: {
          width: "40px",
          height: "40px",
          border: "4px solid rgba(255,255,255,0.3)",
          borderTopColor: "white",
          borderRadius: "50%",
          margin: "0 auto 16px auto",
          animation: "spin 1s linear infinite"
        } }),
        /* @__PURE__ */ d.jsx("h3", { style: { fontSize: "1rem", margin: 0 }, children: "Loading Neural AR Matrix..." }),
        /* @__PURE__ */ d.jsx("p", { style: { fontSize: "0.75rem", color: "#cbd5e1", marginTop: "8px" }, children: "Optimizing Wasm Models (~3MB)" }),
        /* @__PURE__ */ d.jsx("style", { children: "@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }" })
      ] }),
      z === "active" && !gt && /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" }, children: [
        st && /* @__PURE__ */ d.jsxs("div", { style: { background: "rgba(239, 68, 68, 0.9)", color: "white", padding: "12px 20px", borderRadius: "16px", fontSize: "0.875rem", fontWeight: 600, marginBottom: "20px", textAlign: "center", maxWidth: "80%" }, children: [
          "⚠️ ",
          st
        ] }),
        /* @__PURE__ */ d.jsx(
          "button",
          {
            onClick: K,
            disabled: !!st,
            style: { width: "80px", height: "80px", borderRadius: "40px", border: "4px solid white", background: st ? "rgba(255,255,255,0.3)" : "transparent", padding: "6px", cursor: st ? "not-allowed" : "pointer" },
            children: /* @__PURE__ */ d.jsx("div", { style: { width: "100%", height: "100%", borderRadius: "50%", background: "white", transition: "transform 0.1s", opacity: st ? 0.5 : 1 } })
          }
        )
      ] }),
      z === "complete" && B && /* @__PURE__ */ d.jsxs("div", { style: { background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", padding: "24px", borderRadius: "24px", width: "100%", maxWidth: "400px", color: "#0f172a" }, children: [
        /* @__PURE__ */ d.jsx("h3", { style: { fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px" }, children: "Scan Complete" }),
        /* @__PURE__ */ d.jsx("p", { style: { fontSize: "0.875rem", color: "#475569", marginBottom: "16px" }, children: B.rawAnalysis }),
        /* @__PURE__ */ d.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }, children: [
          /* @__PURE__ */ d.jsxs("div", { style: { background: "#f1f5f9", padding: "12px", borderRadius: "12px" }, children: [
            /* @__PURE__ */ d.jsx("div", { style: { fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }, children: "Tone" }),
            /* @__PURE__ */ d.jsx("div", { style: { fontWeight: 600, textTransform: "capitalize" }, children: B.skinToneDepth })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { style: { background: "#f1f5f9", padding: "12px", borderRadius: "12px" }, children: [
            /* @__PURE__ */ d.jsx("div", { style: { fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }, children: "Undertone" }),
            /* @__PURE__ */ d.jsx("div", { style: { fontWeight: 600, textTransform: "capitalize" }, children: B.undertone })
          ] })
        ] }),
        /* @__PURE__ */ d.jsx("button", { onClick: () => {
          U(), window.dispatchEvent(new CustomEvent("stella-open-routine"));
        }, style: { width: "100%", background: "var(--primary-color, #8b5cf6)", color: "white", border: "none", padding: "16px", borderRadius: "12px", fontWeight: 600, fontSize: "1rem", cursor: "pointer" }, children: "View My Routine" })
      ] })
    ] })
  ] });
}
export {
  y2 as CameraView
};
