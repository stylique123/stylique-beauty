import { r as ht, j as x, c as It, u as l2, R as c2 } from "./main-CN0ZdbQr.js";
function f2({ isScanning: j }) {
  const [X, z] = ht.useState([]);
  return ht.useEffect(() => {
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
    let N = 0;
    const J = setInterval(() => {
      N < Y.length ? (z((W) => [...W.slice(-2), Y[N]]), N++) : clearInterval(J);
    }, 450);
    return () => clearInterval(J);
  }, [j]), j ? /* @__PURE__ */ x.jsxs("div", { style: {
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
    /* @__PURE__ */ x.jsx("div", { style: {
      width: "280px",
      height: "380px",
      border: "2px solid rgba(139, 92, 246, 0.5)",
      borderRadius: "100px",
      position: "relative",
      boxShadow: "0 0 40px rgba(139, 92, 246, 0.2) inset"
    }, children: /* @__PURE__ */ x.jsx("div", { style: {
      position: "absolute",
      top: 0,
      left: "10%",
      right: "10%",
      height: "2px",
      background: "var(--primary-color, #8b5cf6)",
      boxShadow: "0 0 15px 3px var(--primary-color, #8b5cf6)",
      animation: "scan-laser 2.5s infinite ease-in-out"
    } }) }),
    /* @__PURE__ */ x.jsx("div", { style: {
      position: "absolute",
      bottom: "80px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.25rem"
    }, children: X.map((Y, N) => /* @__PURE__ */ x.jsxs("div", { style: {
      fontSize: "0.75rem",
      fontFamily: "monospace",
      color: "white",
      opacity: N === X.length - 1 ? 1 : 0.4,
      textShadow: "0 1px 2px rgba(0,0,0,0.8)"
    }, children: [
      "> ",
      Y
    ] }, N)) }),
    /* @__PURE__ */ x.jsx("style", { children: `
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
function p2(j, X, z) {
  return "#" + (1 << 24 | j << 16 | X << 8 | z).toString(16).slice(1);
}
function Ce(j, X, z) {
  const [Y, N, J] = h2(j);
  let W = Y, U = N, V = J;
  switch (X) {
    case "warm":
      W = Math.min(255, Y + 15), U = Math.min(255, N + 10), V = Math.max(0, J - 15);
      break;
    case "cool":
      W = Math.max(0, Y - 10), V = Math.min(255, J + 20);
      break;
    case "olive":
      U = Math.min(255, N + 15), W = Math.max(0, Y - 5), V = Math.max(0, J - 10);
      break;
  }
  return z === "deep" || z === "rich" ? (W = Math.min(255, W * 1.1), U = Math.min(255, U * 1.1), V = Math.min(255, V * 1.1)) : (z === "fair" || z === "light") && (W = Math.max(0, W * 0.9), U = Math.max(0, U * 0.9), V = Math.max(0, V * 0.9)), p2(Math.round(W), Math.round(U), Math.round(V));
}
var g2 = {};
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
    t = [typeof globalThis == "object" && globalThis, t, typeof window == "object" && window, typeof self == "object" && self, typeof It == "object" && It];
    for (var e = 0; e < t.length; ++e) {
      var r = t[e];
      if (r && r.Math == Math) return r;
    }
    throw Error("Cannot find global object");
  }
  var N = Y(this);
  function J(t, e) {
    if (e) t: {
      var r = N;
      t = t.split(".");
      for (var n = 0; n < t.length - 1; n++) {
        var i = t[n];
        if (!(i in r)) break t;
        r = r[i];
      }
      t = t[t.length - 1], n = r[t], e = e(n), e != n && e != null && z(r, t, { configurable: !0, writable: !0, value: e });
    }
  }
  J("Symbol", function(t) {
    function e(u) {
      if (this instanceof e) throw new TypeError("Symbol is not a constructor");
      return new r(n + (u || "") + "_" + i++, u);
    }
    function r(u, o) {
      this.g = u, z(this, "description", { configurable: !0, writable: !0, value: o });
    }
    if (t) return t;
    r.prototype.toString = function() {
      return this.g;
    };
    var n = "jscomp_symbol_" + (1e9 * Math.random() >>> 0) + "_", i = 0;
    return e;
  }), J("Symbol.iterator", function(t) {
    if (t) return t;
    t = Symbol("Symbol.iterator");
    for (var e = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), r = 0; r < e.length; r++) {
      var n = N[e[r]];
      typeof n == "function" && typeof n.prototype[t] != "function" && z(n.prototype, t, { configurable: !0, writable: !0, value: function() {
        return W(X(this));
      } });
    }
    return t;
  });
  function W(t) {
    return t = { next: t }, t[Symbol.iterator] = function() {
      return this;
    }, t;
  }
  function U(t) {
    var e = typeof Symbol < "u" && Symbol.iterator && t[Symbol.iterator];
    return e ? e.call(t) : { next: X(t) };
  }
  function V(t) {
    if (!(t instanceof Array)) {
      t = U(t);
      for (var e, r = []; !(e = t.next()).done; ) r.push(e.value);
      t = r;
    }
    return t;
  }
  var wt = typeof Object.create == "function" ? Object.create : function(t) {
    function e() {
    }
    return e.prototype = t, new e();
  }, ct;
  if (typeof Object.setPrototypeOf == "function") ct = Object.setPrototypeOf;
  else {
    var pt;
    t: {
      var gt = { a: !0 }, st = {};
      try {
        st.__proto__ = gt, pt = st.a;
        break t;
      } catch {
      }
      pt = !1;
    }
    ct = pt ? function(t, e) {
      if (t.__proto__ = e, t.__proto__ !== e) throw new TypeError(t + " is not extensible");
      return t;
    } : null;
  }
  var dt = ct;
  function ot(t, e) {
    if (t.prototype = wt(e.prototype), t.prototype.constructor = t, dt) dt(t, e);
    else for (var r in e) if (r != "prototype") if (Object.defineProperties) {
      var n = Object.getOwnPropertyDescriptor(e, r);
      n && Object.defineProperty(t, r, n);
    } else t[r] = e[r];
    t.ea = e.prototype;
  }
  function I() {
    this.l = !1, this.i = null, this.h = void 0, this.g = 1, this.s = this.m = 0, this.j = null;
  }
  function tt(t) {
    if (t.l) throw new TypeError("Generator is already running");
    t.l = !0;
  }
  I.prototype.o = function(t) {
    this.h = t;
  };
  function Tt(t, e) {
    t.j = { U: e, V: !0 }, t.g = t.m || t.s;
  }
  I.prototype.return = function(t) {
    this.j = { return: t }, this.g = this.s;
  };
  function P(t, e, r) {
    return t.g = r, { value: e };
  }
  function kt(t) {
    this.g = new I(), this.h = t;
  }
  function Vt(t, e) {
    tt(t.g);
    var r = t.g.i;
    return r ? Ot(t, "return" in r ? r.return : function(n) {
      return { value: n, done: !0 };
    }, e, t.g.return) : (t.g.return(e), nt(t));
  }
  function Ot(t, e, r, n) {
    try {
      var i = e.call(t.g.i, r);
      if (!(i instanceof Object)) throw new TypeError("Iterator result " + i + " is not an object");
      if (!i.done) return t.g.l = !1, i;
      var u = i.value;
    } catch (o) {
      return t.g.i = null, Tt(t.g, o), nt(t);
    }
    return t.g.i = null, n.call(t.g, u), nt(t);
  }
  function nt(t) {
    for (; t.g.g; ) try {
      var e = t.h(t.g);
      if (e) return t.g.l = !1, { value: e.value, done: !1 };
    } catch (r) {
      t.g.h = void 0, Tt(t.g, r);
    }
    if (t.g.l = !1, t.g.j) {
      if (e = t.g.j, t.g.j = null, e.V) throw e.U;
      return { value: e.return, done: !0 };
    }
    return { value: void 0, done: !0 };
  }
  function Q(t) {
    this.next = function(e) {
      return tt(t.g), t.g.i ? e = Ot(t, t.g.i.next, e, t.g.o) : (t.g.o(e), e = nt(t)), e;
    }, this.throw = function(e) {
      return tt(t.g), t.g.i ? e = Ot(t, t.g.i.throw, e, t.g.o) : (Tt(t.g, e), e = nt(t)), e;
    }, this.return = function(e) {
      return Vt(t, e);
    }, this[Symbol.iterator] = function() {
      return this;
    };
  }
  function S(t, e) {
    return e = new Q(new kt(e)), dt && t.prototype && dt(e, t.prototype), e;
  }
  function s(t, e) {
    t instanceof String && (t += "");
    var r = 0, n = !1, i = { next: function() {
      if (!n && r < t.length) {
        var u = r++;
        return { value: e(u, t[u]), done: !1 };
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
  J("Object.assign", function(t) {
    return t || l;
  }), J("Promise", function(t) {
    function e(o) {
      this.h = 0, this.i = void 0, this.g = [], this.o = !1;
      var a = this.j();
      try {
        o(a.resolve, a.reject);
      } catch (c) {
        a.reject(c);
      }
    }
    function r() {
      this.g = null;
    }
    function n(o) {
      return o instanceof e ? o : new e(function(a) {
        a(o);
      });
    }
    if (t) return t;
    r.prototype.h = function(o) {
      if (this.g == null) {
        this.g = [];
        var a = this;
        this.i(function() {
          a.l();
        });
      }
      this.g.push(o);
    };
    var i = N.setTimeout;
    r.prototype.i = function(o) {
      i(o, 0);
    }, r.prototype.l = function() {
      for (; this.g && this.g.length; ) {
        var o = this.g;
        this.g = [];
        for (var a = 0; a < o.length; ++a) {
          var c = o[a];
          o[a] = null;
          try {
            c();
          } catch (h) {
            this.j(h);
          }
        }
      }
      this.g = null;
    }, r.prototype.j = function(o) {
      this.i(function() {
        throw o;
      });
    }, e.prototype.j = function() {
      function o(h) {
        return function(y) {
          c || (c = !0, h.call(a, y));
        };
      }
      var a = this, c = !1;
      return { resolve: o(this.C), reject: o(this.l) };
    }, e.prototype.C = function(o) {
      if (o === this) this.l(new TypeError("A Promise cannot resolve to itself"));
      else if (o instanceof e) this.F(o);
      else {
        t: switch (typeof o) {
          case "object":
            var a = o != null;
            break t;
          case "function":
            a = !0;
            break t;
          default:
            a = !1;
        }
        a ? this.u(o) : this.m(o);
      }
    }, e.prototype.u = function(o) {
      var a = void 0;
      try {
        a = o.then;
      } catch (c) {
        this.l(c);
        return;
      }
      typeof a == "function" ? this.G(a, o) : this.m(o);
    }, e.prototype.l = function(o) {
      this.s(2, o);
    }, e.prototype.m = function(o) {
      this.s(1, o);
    }, e.prototype.s = function(o, a) {
      if (this.h != 0) throw Error("Cannot settle(" + o + ", " + a + "): Promise already settled in state" + this.h);
      this.h = o, this.i = a, this.h === 2 && this.D(), this.A();
    }, e.prototype.D = function() {
      var o = this;
      i(function() {
        if (o.B()) {
          var a = N.console;
          typeof a < "u" && a.error(o.i);
        }
      }, 1);
    }, e.prototype.B = function() {
      if (this.o) return !1;
      var o = N.CustomEvent, a = N.Event, c = N.dispatchEvent;
      return typeof c > "u" ? !0 : (typeof o == "function" ? o = new o("unhandledrejection", { cancelable: !0 }) : typeof a == "function" ? o = new a("unhandledrejection", { cancelable: !0 }) : (o = N.document.createEvent("CustomEvent"), o.initCustomEvent("unhandledrejection", !1, !0, o)), o.promise = this, o.reason = this.i, c(o));
    }, e.prototype.A = function() {
      if (this.g != null) {
        for (var o = 0; o < this.g.length; ++o) u.h(this.g[o]);
        this.g = null;
      }
    };
    var u = new r();
    return e.prototype.F = function(o) {
      var a = this.j();
      o.J(a.resolve, a.reject);
    }, e.prototype.G = function(o, a) {
      var c = this.j();
      try {
        o.call(a, c.resolve, c.reject);
      } catch (h) {
        c.reject(h);
      }
    }, e.prototype.then = function(o, a) {
      function c(k, w) {
        return typeof k == "function" ? function(g) {
          try {
            h(k(g));
          } catch (m) {
            y(m);
          }
        } : w;
      }
      var h, y, L = new e(function(k, w) {
        h = k, y = w;
      });
      return this.J(c(o, h), c(a, y)), L;
    }, e.prototype.catch = function(o) {
      return this.then(void 0, o);
    }, e.prototype.J = function(o, a) {
      function c() {
        switch (h.h) {
          case 1:
            o(h.i);
            break;
          case 2:
            a(h.i);
            break;
          default:
            throw Error("Unexpected state: " + h.h);
        }
      }
      var h = this;
      this.g == null ? u.h(c) : this.g.push(c), this.o = !0;
    }, e.resolve = n, e.reject = function(o) {
      return new e(function(a, c) {
        c(o);
      });
    }, e.race = function(o) {
      return new e(function(a, c) {
        for (var h = U(o), y = h.next(); !y.done; y = h.next()) n(y.value).J(a, c);
      });
    }, e.all = function(o) {
      var a = U(o), c = a.next();
      return c.done ? n([]) : new e(function(h, y) {
        function L(g) {
          return function(m) {
            k[g] = m, w--, w == 0 && h(k);
          };
        }
        var k = [], w = 0;
        do
          k.push(void 0), w++, n(c.value).J(L(k.length - 1), y), c = a.next();
        while (!c.done);
      });
    }, e;
  }), J("Object.is", function(t) {
    return t || function(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    };
  }), J("Array.prototype.includes", function(t) {
    return t || function(e, r) {
      var n = this;
      n instanceof String && (n = String(n));
      var i = n.length;
      for (r = r || 0, 0 > r && (r = Math.max(r + i, 0)); r < i; r++) {
        var u = n[r];
        if (u === e || Object.is(u, e)) return !0;
      }
      return !1;
    };
  }), J("String.prototype.includes", function(t) {
    return t || function(e, r) {
      if (this == null) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
      if (e instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
      return this.indexOf(e, r || 0) !== -1;
    };
  }), J("Array.prototype.keys", function(t) {
    return t || function() {
      return s(this, function(e) {
        return e;
      });
    };
  });
  var v = this || self;
  function p(t, e) {
    t = t.split(".");
    var r = v;
    t[0] in r || typeof r.execScript > "u" || r.execScript("var " + t[0]);
    for (var n; t.length && (n = t.shift()); ) t.length || e === void 0 ? r[n] && r[n] !== Object.prototype[n] ? r = r[n] : r = r[n] = {} : r[n] = e;
  }
  function G(t, e) {
    return e = String.fromCharCode.apply(null, e), t == null ? e : t + e;
  }
  var q, f = typeof TextDecoder < "u", d, C = typeof TextEncoder < "u";
  function $(t) {
    if (C) t = (d || (d = new TextEncoder())).encode(t);
    else {
      var e = void 0;
      e = e === void 0 ? !1 : e;
      for (var r = 0, n = new Uint8Array(3 * t.length), i = 0; i < t.length; i++) {
        var u = t.charCodeAt(i);
        if (128 > u) n[r++] = u;
        else {
          if (2048 > u) n[r++] = u >> 6 | 192;
          else {
            if (55296 <= u && 57343 >= u) {
              if (56319 >= u && i < t.length) {
                var o = t.charCodeAt(++i);
                if (56320 <= o && 57343 >= o) {
                  u = 1024 * (u - 55296) + o - 56320 + 65536, n[r++] = u >> 18 | 240, n[r++] = u >> 12 & 63 | 128, n[r++] = u >> 6 & 63 | 128, n[r++] = u & 63 | 128;
                  continue;
                } else i--;
              }
              if (e) throw Error("Found an unpaired surrogate");
              u = 65533;
            }
            n[r++] = u >> 12 | 224, n[r++] = u >> 6 & 63 | 128;
          }
          n[r++] = u & 63 | 128;
        }
      }
      t = n.subarray(0, r);
    }
    return t;
  }
  var it = {}, vt = null;
  function at(t, e) {
    e === void 0 && (e = 0), Mt(), e = it[e];
    for (var r = Array(Math.floor(t.length / 3)), n = e[64] || "", i = 0, u = 0; i < t.length - 2; i += 3) {
      var o = t[i], a = t[i + 1], c = t[i + 2], h = e[o >> 2];
      o = e[(o & 3) << 4 | a >> 4], a = e[(a & 15) << 2 | c >> 6], c = e[c & 63], r[u++] = h + o + a + c;
    }
    switch (h = 0, c = n, t.length - i) {
      case 2:
        h = t[i + 1], c = e[(h & 15) << 2] || n;
      case 1:
        t = t[i], r[u] = e[t >> 2] + e[(t & 3) << 4 | h >> 4] + c + n;
    }
    return r.join("");
  }
  function yt(t) {
    var e = t.length, r = 3 * e / 4;
    r % 3 ? r = Math.floor(r) : "=.".indexOf(t[e - 1]) != -1 && (r = "=.".indexOf(t[e - 2]) != -1 ? r - 2 : r - 1);
    var n = new Uint8Array(r), i = 0;
    return Nt(t, function(u) {
      n[i++] = u;
    }), n.subarray(0, i);
  }
  function Nt(t, e) {
    function r(c) {
      for (; n < t.length; ) {
        var h = t.charAt(n++), y = vt[h];
        if (y != null) return y;
        if (!/^[\s\xa0]*$/.test(h)) throw Error("Unknown base64 encoding at char: " + h);
      }
      return c;
    }
    Mt();
    for (var n = 0; ; ) {
      var i = r(-1), u = r(0), o = r(64), a = r(64);
      if (a === 64 && i === -1) break;
      e(i << 2 | u >> 4), o != 64 && (e(u << 4 & 240 | o >> 2), a != 64 && e(o << 6 & 192 | a));
    }
  }
  function Mt() {
    if (!vt) {
      vt = {};
      for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e = ["+/=", "+/", "-_=", "-_.", "-_"], r = 0; 5 > r; r++) {
        var n = t.concat(e[r].split(""));
        it[r] = n;
        for (var i = 0; i < n.length; i++) {
          var u = n[i];
          vt[u] === void 0 && (vt[u] = i);
        }
      }
    }
  }
  var Pe = typeof Uint8Array.prototype.slice == "function", ie;
  function oe(t, e, r) {
    return e === r ? ie || (ie = new Uint8Array(0)) : Pe ? t.slice(e, r) : new Uint8Array(t.subarray(e, r));
  }
  var mt = 0, bt = 0;
  function Ft(t, e) {
    e = e === void 0 ? {} : e, e = e.v === void 0 ? !1 : e.v, this.h = null, this.g = this.j = this.l = 0, this.m = !1, this.v = e, t && se(this, t);
  }
  function se(t, e) {
    e = e.constructor === Uint8Array ? e : e.constructor === ArrayBuffer ? new Uint8Array(e) : e.constructor === Array ? new Uint8Array(e) : e.constructor === String ? yt(e) : e instanceof Uint8Array ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(0), t.h = e, t.l = 0, t.j = t.h.length, t.g = t.l;
  }
  Ft.prototype.reset = function() {
    this.g = this.l;
  };
  function Dt(t) {
    for (var e = 128, r = 0, n = 0, i = 0; 4 > i && 128 <= e; i++) e = t.h[t.g++], r |= (e & 127) << 7 * i;
    if (128 <= e && (e = t.h[t.g++], r |= (e & 127) << 28, n |= (e & 127) >> 4), 128 <= e) for (i = 0; 5 > i && 128 <= e; i++) e = t.h[t.g++], n |= (e & 127) << 7 * i + 3;
    if (128 > e)
      return t = r >>> 0, e = n >>> 0, (n = e & 2147483648) && (t = ~t + 1 >>> 0, e = ~e >>> 0, t == 0 && (e = e + 1 >>> 0)), t = 4294967296 * e + (t >>> 0), n ? -t : t;
    t.m = !0;
  }
  Ft.prototype.i = function() {
    var t = this.h, e = t[this.g], r = e & 127;
    return 128 > e ? (this.g += 1, r) : (e = t[this.g + 1], r |= (e & 127) << 7, 128 > e ? (this.g += 2, r) : (e = t[this.g + 2], r |= (e & 127) << 14, 128 > e ? (this.g += 3, r) : (e = t[this.g + 3], r |= (e & 127) << 21, 128 > e ? (this.g += 4, r) : (e = t[this.g + 4], r |= (e & 15) << 28, 128 > e ? (this.g += 5, r >>> 0) : (this.g += 5, 128 <= t[this.g++] && 128 <= t[this.g++] && 128 <= t[this.g++] && 128 <= t[this.g++] && this.g++, r)))));
  }, Ft.prototype.o = function() {
    var t = this.h[this.g], e = this.h[this.g + 1], r = this.h[this.g + 2], n = this.h[this.g + 3];
    return this.g += 4, r = (t << 0 | e << 8 | r << 16 | n << 24) >>> 0, t = 2 * (r >> 31) + 1, e = r >>> 23 & 255, r &= 8388607, e == 255 ? r ? NaN : 1 / 0 * t : e == 0 ? t * Math.pow(2, -149) * r : t * Math.pow(2, e - 150) * (r + Math.pow(2, 23));
  };
  var ue = [];
  function Xt() {
    this.g = new Uint8Array(64), this.h = 0;
  }
  Xt.prototype.push = function(t) {
    if (!(this.h + 1 < this.g.length)) {
      var e = this.g;
      this.g = new Uint8Array(Math.ceil(1 + 2 * this.g.length)), this.g.set(e);
    }
    this.g[this.h++] = t;
  }, Xt.prototype.length = function() {
    return this.h;
  }, Xt.prototype.end = function() {
    var t = this.g, e = this.h;
    return this.h = 0, oe(t, 0, e);
  };
  function jt(t, e) {
    for (; 127 < e; ) t.push(e & 127 | 128), e >>>= 7;
    t.push(e);
  }
  function Gt(t) {
    var e = {}, r = e.N === void 0 ? !1 : e.N;
    this.o = { v: e.v === void 0 ? !1 : e.v }, this.N = r, e = this.o, ue.length ? (r = ue.pop(), e && (r.v = e.v), t && se(r, t), t = r) : t = new Ft(t, e), this.g = t, this.m = this.g.g, this.h = this.i = this.l = -1, this.j = !1;
  }
  Gt.prototype.reset = function() {
    this.g.reset(), this.h = this.l = -1;
  };
  function xt(t) {
    var e = t.g;
    if ((e = e.g == e.j) || (e = t.j) || (e = t.g, e = e.m || 0 > e.g || e.g > e.j), e) return !1;
    t.m = t.g.g, e = t.g.i();
    var r = e & 7;
    return r != 0 && r != 5 && r != 1 && r != 2 && r != 3 && r != 4 ? (t.j = !0, !1) : (t.i = e, t.l = e >>> 3, t.h = r, !0);
  }
  function Ct(t) {
    switch (t.h) {
      case 0:
        if (t.h != 0) Ct(t);
        else {
          for (t = t.g; t.h[t.g] & 128; ) t.g++;
          t.g++;
        }
        break;
      case 1:
        t.h != 1 ? Ct(t) : (t = t.g, t.g += 8);
        break;
      case 2:
        if (t.h != 2) Ct(t);
        else {
          var e = t.g.i();
          t = t.g, t.g += e;
        }
        break;
      case 5:
        t.h != 5 ? Ct(t) : (t = t.g, t.g += 4);
        break;
      case 3:
        e = t.l;
        do {
          if (!xt(t)) {
            t.j = !0;
            break;
          }
          if (t.h == 4) {
            t.l != e && (t.j = !0);
            break;
          }
          Ct(t);
        } while (!0);
        break;
      default:
        t.j = !0;
    }
  }
  function zt(t, e, r) {
    var n = t.g.j, i = t.g.i(), u = t.g.g + i;
    if (t.g.j = u, r(e, t), r = u - t.g.g, r !== 0) throw Error("Message parsing ended unexpectedly. Expected to read " + i + " bytes, instead read " + (i - r) + " bytes, either the data ended unexpectedly or the message misreported its own length");
    return t.g.g = u, t.g.j = n, e;
  }
  function ut(t) {
    return t.g.o();
  }
  function ae(t) {
    var e = t.g.i();
    t = t.g;
    var r = t.g;
    t.g += e, t = t.h;
    var n;
    if (f) (n = q) || (n = q = new TextDecoder("utf-8", { fatal: !1 })), n = n.decode(t.subarray(r, r + e));
    else {
      e = r + e;
      for (var i = [], u = null, o, a, c; r < e; ) o = t[r++], 128 > o ? i.push(o) : 224 > o ? r >= e ? i.push(65533) : (a = t[r++], 194 > o || (a & 192) !== 128 ? (r--, i.push(65533)) : i.push((o & 31) << 6 | a & 63)) : 240 > o ? r >= e - 1 ? i.push(65533) : (a = t[r++], (a & 192) !== 128 || o === 224 && 160 > a || o === 237 && 160 <= a || ((n = t[r++]) & 192) !== 128 ? (r--, i.push(65533)) : i.push((o & 15) << 12 | (a & 63) << 6 | n & 63)) : 244 >= o ? r >= e - 2 ? i.push(65533) : (a = t[r++], (a & 192) !== 128 || (o << 28) + (a - 144) >> 30 || ((n = t[r++]) & 192) !== 128 || ((c = t[r++]) & 192) !== 128 ? (r--, i.push(65533)) : (o = (o & 7) << 18 | (a & 63) << 12 | (n & 63) << 6 | c & 63, o -= 65536, i.push((o >> 10 & 1023) + 55296, (o & 1023) + 56320))) : i.push(65533), 8192 <= i.length && (u = G(u, i), i.length = 0);
      n = G(u, i);
    }
    return n;
  }
  function le(t, e, r) {
    var n = t.g.i();
    for (n = t.g.g + n; t.g.g < n; ) r.push(e.call(t.g));
  }
  function ce(t, e) {
    t.h == 2 ? le(t, Ft.prototype.o, e) : e.push(ut(t));
  }
  function Kt() {
    this.h = [], this.i = 0, this.g = new Xt();
  }
  function Pt(t, e) {
    e.length !== 0 && (t.h.push(e), t.i += e.length);
  }
  function Zt(t) {
    var e = t.i + t.g.length();
    if (e === 0) return new Uint8Array(0);
    e = new Uint8Array(e);
    for (var r = t.h, n = r.length, i = 0, u = 0; u < n; u++) {
      var o = r[u];
      o.length !== 0 && (e.set(o, i), i += o.length);
    }
    return r = t.g, n = r.h, n !== 0 && (e.set(r.g.subarray(0, n), i), r.h = 0), t.h = [e], e;
  }
  function lt(t, e, r) {
    if (r != null) {
      jt(t.g, 8 * e + 5), t = t.g;
      var n = r;
      n = (r = 0 > n ? 1 : 0) ? -n : n, n === 0 ? 0 < 1 / n ? mt = bt = 0 : (bt = 0, mt = 2147483648) : isNaN(n) ? (bt = 0, mt = 2147483647) : 34028234663852886e22 < n ? (bt = 0, mt = (r << 31 | 2139095040) >>> 0) : 11754943508222875e-54 > n ? (n = Math.round(n / Math.pow(2, -149)), bt = 0, mt = (r << 31 | n) >>> 0) : (e = Math.floor(Math.log(n) / Math.LN2), n *= Math.pow(2, -e), n = Math.round(8388608 * n), 16777216 <= n && ++e, bt = 0, mt = (r << 31 | e + 127 << 23 | n & 8388607) >>> 0), r = mt, t.push(r >>> 0 & 255), t.push(r >>> 8 & 255), t.push(r >>> 16 & 255), t.push(r >>> 24 & 255);
    }
  }
  var fe = typeof Uint8Array == "function";
  function he(t, e, r) {
    if (t != null) return typeof t == "object" ? fe && t instanceof Uint8Array ? r(t) : pe(t, e, r) : e(t);
  }
  function pe(t, e, r) {
    if (Array.isArray(t)) {
      for (var n = Array(t.length), i = 0; i < t.length; i++) n[i] = he(t[i], e, r);
      return Array.isArray(t) && t.W && Bt(n), n;
    }
    n = {};
    for (i in t) n[i] = he(t[i], e, r);
    return n;
  }
  function Le(t) {
    return typeof t == "number" ? isFinite(t) ? t : String(t) : t;
  }
  var Ue = { W: { value: !0, configurable: !0 } };
  function Bt(t) {
    return Array.isArray(t) && !Object.isFrozen(t) && Object.defineProperties(t, Ue), t;
  }
  var ge;
  function K(t, e, r) {
    var n = ge;
    ge = null, t || (t = n), n = this.constructor.ca, t || (t = n ? [n] : []), this.j = n ? 0 : -1, this.m = this.g = null, this.h = t;
    t: {
      if (n = this.h.length, t = n - 1, n && (n = this.h[t], !(n === null || typeof n != "object" || Array.isArray(n) || fe && n instanceof Uint8Array))) {
        this.l = t - this.j, this.i = n;
        break t;
      }
      e !== void 0 && -1 < e ? (this.l = Math.max(e, t + 1 - this.j), this.i = null) : this.l = Number.MAX_VALUE;
    }
    if (r) for (e = 0; e < r.length; e++) t = r[e], t < this.l ? (t += this.j, (n = this.h[t]) ? Bt(n) : this.h[t] = Yt) : (de(this), (n = this.i[t]) ? Bt(n) : this.i[t] = Yt);
  }
  var Yt = Object.freeze(Bt([]));
  function de(t) {
    var e = t.l + t.j;
    t.h[e] || (t.i = t.h[e] = {});
  }
  function D(t, e, r) {
    return e === -1 ? null : r !== void 0 && r || e >= t.l ? t.i ? t.i[e] : void 0 : t.h[e + t.j];
  }
  function $t(t, e) {
    var r = r === void 0 ? !1 : r, n = D(t, e, r);
    return n == null && (n = Yt), n === Yt && (n = Bt([]), R(t, e, n, r)), n;
  }
  function ve(t) {
    var e = $t(t, 3);
    if (t.m || (t.m = {}), !t.m[3]) {
      for (var r = 0; r < e.length; r++) e[r] = +e[r];
      t.m[3] = !0;
    }
    return e;
  }
  function Et(t, e, r) {
    return t = D(t, e), t ?? r;
  }
  function ft(t, e, r) {
    return t = D(t, e), t = t == null ? t : +t, t ?? (r === void 0 ? 0 : r);
  }
  function R(t, e, r, n) {
    n !== void 0 && n || e >= t.l ? (de(t), t.i[e] = r) : t.h[e + t.j] = r;
  }
  function ye(t, e, r) {
    if (r === -1) return null;
    if (t.g || (t.g = {}), !t.g[r]) {
      var n = D(t, r, !1);
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
    var i = r && St(r);
    t.g[e] = r, R(t, e, i, n);
  }
  function xe(t, e, r, n) {
    var i = Ht(t, r);
    e = e || new r(), t = $t(t, 1), n != null ? (i.splice(n, 0, e), t.splice(n, 0, St(e))) : (i.push(e), t.push(St(e)));
  }
  K.prototype.toJSON = function() {
    var t = St(this);
    return pe(t, Le, at);
  };
  function St(t, e) {
    if (t.g) for (var r in t.g) {
      var n = t.g[r];
      if (Array.isArray(n)) for (var i = 0; i < n.length; i++) n[i] && St(n[i]);
      else n && St(n);
    }
    return t.h;
  }
  K.prototype.toString = function() {
    return St(this).toString();
  };
  function Qt(t, e) {
    if (t = t.o) {
      Pt(e, e.g.end());
      for (var r = 0; r < t.length; r++) Pt(e, t[r]);
    }
  }
  function At(t, e) {
    if (e.h == 4) return !1;
    var r = e.m;
    return Ct(e), e.N || (e = oe(e.g.h, r, e.g.g), (r = t.o) ? r.push(e) : t.o = [e]), !0;
  }
  function Rt(t) {
    K.call(this, t, -1, Ne);
  }
  ot(Rt, K), Rt.prototype.getRows = function() {
    return D(this, 1);
  }, Rt.prototype.getCols = function() {
    return D(this, 2);
  }, Rt.prototype.getPackedDataList = function() {
    return ve(this);
  }, Rt.prototype.getLayout = function() {
    return Et(this, 4, 0);
  };
  function Ie(t, e) {
    for (; xt(e); ) switch (e.i) {
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
        r = Dt(e.g), R(t, 4, r);
        break;
      default:
        if (!At(t, e)) return t;
    }
    return t;
  }
  var Ne = [3];
  function et(t, e) {
    var r = void 0;
    return new (r || (r = Promise))(function(n, i) {
      function u(c) {
        try {
          a(e.next(c));
        } catch (h) {
          i(h);
        }
      }
      function o(c) {
        try {
          a(e.throw(c));
        } catch (h) {
          i(h);
        }
      }
      function a(c) {
        c.done ? n(c.value) : new r(function(h) {
          h(c.value);
        }).then(u, o);
      }
      a((e = e.apply(t, void 0)).next());
    });
  }
  function Wt(t) {
    K.call(this, t);
  }
  ot(Wt, K);
  function Ge(t, e) {
    for (; xt(e); ) switch (e.i) {
      case 8:
        var r = e.g.i();
        R(t, 1, r);
        break;
      case 21:
        r = ut(e), R(t, 2, r);
        break;
      case 26:
        r = ae(e), R(t, 3, r);
        break;
      case 34:
        r = ae(e), R(t, 4, r);
        break;
      default:
        if (!At(t, e)) return t;
    }
    return t;
  }
  function qt(t) {
    K.call(this, t, -1, Be);
  }
  ot(qt, K), qt.prototype.addClassification = function(t, e) {
    return xe(this, t, Wt, e), this;
  };
  var Be = [1];
  function Lt(t) {
    K.call(this, t);
  }
  ot(Lt, K);
  function We(t, e) {
    for (; xt(e); ) switch (e.i) {
      case 13:
        var r = ut(e);
        R(t, 1, r);
        break;
      case 21:
        r = ut(e), R(t, 2, r);
        break;
      case 29:
        r = ut(e), R(t, 3, r);
        break;
      case 37:
        r = ut(e), R(t, 4, r);
        break;
      case 45:
        r = ut(e), R(t, 5, r);
        break;
      default:
        if (!At(t, e)) return t;
    }
    return t;
  }
  function we(t) {
    K.call(this, t, -1, Ve);
  }
  ot(we, K);
  function be(t) {
    t: {
      var e = new we();
      for (t = new Gt(t); xt(t); ) switch (t.i) {
        case 10:
          var r = zt(t, new Lt(), We);
          xe(e, r, Lt, void 0);
          break;
        default:
          if (!At(e, t)) break t;
      }
    }
    return e;
  }
  var Ve = [1];
  function te(t) {
    K.call(this, t);
  }
  ot(te, K);
  function _t(t) {
    K.call(this, t, -1, Xe);
  }
  ot(_t, K), _t.prototype.getVertexType = function() {
    return Et(this, 1, 0);
  }, _t.prototype.getPrimitiveType = function() {
    return Et(this, 2, 0);
  }, _t.prototype.getVertexBufferList = function() {
    return ve(this);
  }, _t.prototype.getIndexBufferList = function() {
    return $t(this, 4);
  };
  function De(t, e) {
    for (; xt(e); ) switch (e.i) {
      case 8:
        var r = Dt(e.g);
        R(t, 1, r);
        break;
      case 16:
        r = Dt(e.g), R(t, 2, r);
        break;
      case 29:
      case 26:
        ce(e, t.getVertexBufferList());
        break;
      case 32:
      case 34:
        r = e;
        var n = t.getIndexBufferList();
        r.h == 2 ? le(r, Ft.prototype.i, n) : n.push(r.g.i());
        break;
      default:
        if (!At(t, e)) return t;
    }
    return t;
  }
  var Xe = [3, 4];
  function Jt(t) {
    K.call(this, t);
  }
  ot(Jt, K), Jt.prototype.getMesh = function() {
    return ye(this, _t, 1);
  }, Jt.prototype.getPoseTransformMatrix = function() {
    return ye(this, Rt, 2);
  };
  function ze(t) {
    t: {
      var e = new Jt();
      for (t = new Gt(t); xt(t); ) switch (t.i) {
        case 10:
          var r = zt(t, new _t(), De);
          me(e, 1, r);
          break;
        case 18:
          r = zt(t, new Rt(), Ie), me(e, 2, r);
          break;
        default:
          if (!At(e, t)) break t;
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
    return Ht(t, Wt).map(function(e) {
      return { index: Et(e, 1, 0), Y: ft(e, 2), label: D(e, 3) != null ? Et(e, 3, "") : void 0, displayName: D(e, 4) != null ? Et(e, 4, "") : void 0 };
    });
  }
  function Ae(t) {
    return { x: ft(t, 1), y: ft(t, 2), z: ft(t, 3), visibility: D(t, 4) != null ? ft(t, 4) : void 0 };
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
  }`, 1), u = r.createProgram();
      if (r.attachShader(u, n), r.attachShader(u, i), r.linkProgram(u), !r.getProgramParameter(u, r.LINK_STATUS)) throw Error(`Could not compile WebGL program.

` + r.getProgramInfoLog(u));
      n = t.m = u, r.useProgram(n), i = r.getUniformLocation(n, "sampler0"), t.j = { I: r.getAttribLocation(n, "aVertex"), H: r.getAttribLocation(n, "aTex"), da: i }, t.s = r.createBuffer(), r.bindBuffer(r.ARRAY_BUFFER, t.s), r.enableVertexAttribArray(t.j.I), r.vertexAttribPointer(t.j.I, 2, r.FLOAT, !1, 0, 0), r.bufferData(r.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), r.STATIC_DRAW), r.bindBuffer(r.ARRAY_BUFFER, null), t.o = r.createBuffer(), r.bindBuffer(r.ARRAY_BUFFER, t.o), r.enableVertexAttribArray(t.j.H), r.vertexAttribPointer(
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
    return et(this, function t() {
      return S(t, function(e) {
        switch (e.g) {
          case 1:
            return e.m = 2, P(e, WebAssembly.instantiate(Je), 4);
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
      e = U(Object.keys(t.options));
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
    return et(t, function e() {
      var r = this, n, i, u, o, a, c, h, y, L, k, w;
      return S(e, function(g) {
        switch (g.g) {
          case 1:
            return n = r, r.R ? (i = qe(r, r.j), P(g, Qe(), 2)) : g.return();
          case 2:
            if (u = g.h, typeof window == "object") return Ee("createMediapipeSolutionsWasm", { locateFile: r.locateFile }), Ee("createMediapipeSolutionsPackedAssets", { locateFile: r.locateFile }), c = i.filter(function(m) {
              return m.data !== void 0;
            }), h = i.filter(function(m) {
              return m.data === void 0;
            }), y = Promise.all(c.map(function(m) {
              var A = ne(n, m.url);
              if (m.path !== void 0) {
                var _ = m.path;
                A = A.then(function(Z) {
                  return n.overrideFile(_, Z), Promise.resolve(Z);
                });
              }
              return A;
            })), L = Promise.all(h.map(function(m) {
              return m.simd === void 0 || m.simd && u || !m.simd && !u ? Ze(n.locateFile(m.url, n.S)) : Promise.resolve();
            })).then(function() {
              return et(n, function m() {
                var A, _, Z = this;
                return S(m, function(B) {
                  if (B.g == 1) return A = window.createMediapipeSolutionsWasm, _ = window.createMediapipeSolutionsPackedAssets, P(B, A(_), 2);
                  Z.h = B.h, B.g = 0;
                });
              });
            }), k = function() {
              return et(n, function m() {
                var A = this;
                return S(m, function(_) {
                  return A.g.graph && A.g.graph.url ? _ = P(_, ne(A, A.g.graph.url), 0) : (_.g = 0, _ = void 0), _;
                });
              });
            }(), P(g, Promise.all([L, y, k]), 7);
            if (typeof importScripts != "function") throw Error("solutions can only be loaded on a web page or in a web worker");
            return o = i.filter(function(m) {
              return m.simd === void 0 || m.simd && u || !m.simd && !u;
            }).map(function(m) {
              return n.locateFile(m.url, n.S);
            }), importScripts.apply(null, V(o)), P(g, createMediapipeSolutionsWasm(Module), 6);
          case 6:
            r.h = g.h, r.l = new OffscreenCanvas(1, 1), r.h.canvas = r.l, a = r.h.GL.createContext(
              r.l,
              { antialias: !1, alpha: !1, ba: typeof WebGL2RenderingContext < "u" ? 2 : 1 }
            ), r.h.GL.makeContextCurrent(a), g.g = 4;
            break;
          case 7:
            if (r.l = document.createElement("canvas"), w = r.l.getContext("webgl2", {}), !w && (w = r.l.getContext("webgl", {}), !w)) return alert("Failed to create WebGL canvas context when passing video frame."), g.return();
            r.D = w, r.h.canvas = r.l, r.h.createContext(r.l, !0, !0, {});
          case 4:
            r.i = new r.h.SolutionWasm(), r.R = !1, g.g = 0;
        }
      });
    });
  }
  function e2(t) {
    return et(t, function e() {
      var r = this, n, i, u, o, a, c, h, y;
      return S(e, function(L) {
        if (L.g == 1) {
          if (r.g.graph && r.g.graph.url && r.P === r.g.graph.url) return L.return();
          if (r.o = !0, !r.g.graph || !r.g.graph.url) {
            L.g = 2;
            return;
          }
          return r.P = r.g.graph.url, P(L, ne(r, r.g.graph.url), 3);
        }
        for (L.g != 2 && (n = L.h, r.i.loadGraph(n)), i = U(Object.keys(r.B)), u = i.next(); !u.done; u = i.next()) o = u.value, r.i.overrideFile(o, r.B[o]);
        if (r.B = {}, r.g.listeners) for (a = U(r.g.listeners), c = a.next(); !c.done; c = a.next()) h = c.value, o2(r, h);
        y = r.j, r.j = {}, r.setOptions(y), L.g = 0;
      });
    });
  }
  j.reset = function() {
    return et(this, function t() {
      var e = this;
      return S(t, function(r) {
        e.i && (e.i.reset(), e.m = {}, e.s = {}), r.g = 0;
      });
    });
  }, j.setOptions = function(t, e) {
    var r = this;
    if (e = e || this.g.options) {
      for (var n = [], i = [], u = {}, o = U(Object.keys(t)), a = o.next(); !a.done; u = { K: u.K, L: u.L }, a = o.next()) {
        var c = a.value;
        c in this.j && this.j[c] === t[c] || (this.j[c] = t[c], a = e[c], a !== void 0 && (a.onChange && (u.K = a.onChange, u.L = t[c], n.push(/* @__PURE__ */ function(h) {
          return function() {
            return et(r, function y() {
              var L, k = this;
              return S(y, function(w) {
                if (w.g == 1) return P(w, h.K(h.L), 2);
                L = w.h, L === !0 && (k.o = !0), w.g = 0;
              });
            });
          };
        }(u))), a.graphOptionXref && (c = { valueNumber: a.type === 1 ? t[c] : 0, valueBoolean: a.type === 0 ? t[c] : !1, valueString: a.type === 2 ? t[c] : "" }, a = Object.assign(Object.assign(Object.assign({}, { calculatorName: "", calculatorIndex: 0 }), a.graphOptionXref), c), i.push(a))));
      }
      (n.length !== 0 || i.length !== 0) && (this.o = !0, this.A = (this.A === void 0 ? [] : this.A).concat(i), this.u = (this.u === void 0 ? [] : this.u).concat(n));
    }
  };
  function r2(t) {
    return et(t, function e() {
      var r = this, n, i, u, o, a, c, h;
      return S(e, function(y) {
        switch (y.g) {
          case 1:
            if (!r.o) return y.return();
            if (!r.u) {
              y.g = 2;
              break;
            }
            n = U(r.u), i = n.next();
          case 3:
            if (i.done) {
              y.g = 5;
              break;
            }
            return u = i.value, P(y, u(), 4);
          case 4:
            i = n.next(), y.g = 3;
            break;
          case 5:
            r.u = void 0;
          case 2:
            if (r.A) {
              for (o = new r.h.GraphOptionChangeRequestList(), a = U(r.A), c = a.next(); !c.done; c = a.next()) h = c.value, o.push_back(h);
              r.i.changeOptions(o), o.delete(), r.A = void 0;
            }
            r.o = !1, y.g = 0;
        }
      });
    });
  }
  j.initialize = function() {
    return et(this, function t() {
      var e = this;
      return S(t, function(r) {
        return r.g == 1 ? P(r, t2(e), 2) : r.g != 3 ? P(r, e2(e), 3) : P(r, r2(e), 0);
      });
    });
  };
  function ne(t, e) {
    return et(t, function r() {
      var n = this, i, u;
      return S(r, function(o) {
        return e in n.F ? o.return(n.F[e]) : (i = n.locateFile(e, ""), u = fetch(i).then(function(a) {
          return a.arrayBuffer();
        }), n.F[e] = u, o.return(u));
      });
    });
  }
  j.overrideFile = function(t, e) {
    this.i ? this.i.overrideFile(t, e) : this.B[t] = e;
  }, j.clearOverriddenFiles = function() {
    this.B = {}, this.i && this.i.clearOverriddenFiles();
  }, j.send = function(t, e) {
    return et(this, function r() {
      var n = this, i, u, o, a, c, h, y, L, k;
      return S(r, function(w) {
        switch (w.g) {
          case 1:
            return n.g.inputs ? (i = 1e3 * (e ?? performance.now()), P(w, n.C, 2)) : w.return();
          case 2:
            return P(w, n.initialize(), 3);
          case 3:
            for (u = new n.h.PacketDataList(), o = U(Object.keys(t)), a = o.next(); !a.done; a = o.next()) if (c = a.value, h = n.g.inputs[c]) {
              t: {
                var g = n, m = t[c];
                switch (h.type) {
                  case "video":
                    var A = g.m[h.stream];
                    if (A || (A = new ee(g.h, g.D), g.m[h.stream] = A), g = A, g.l === 0 && (g.l = g.h.createTexture()), typeof HTMLVideoElement < "u" && m instanceof HTMLVideoElement) {
                      var _ = m.videoWidth;
                      A = m.videoHeight;
                    } else typeof HTMLImageElement < "u" && m instanceof HTMLImageElement ? (_ = m.naturalWidth, A = m.naturalHeight) : (_ = m.width, A = m.height);
                    A = { glName: g.l, width: _, height: A }, _ = g.g, _.canvas.width = A.width, _.canvas.height = A.height, _.activeTexture(_.TEXTURE0), g.h.bindTexture2d(g.l), _.texImage2D(_.TEXTURE_2D, 0, _.RGBA, _.RGBA, _.UNSIGNED_BYTE, m), g.h.bindTexture2d(0), g = A;
                    break t;
                  case "detections":
                    for (A = g.m[h.stream], A || (A = new He(g.h), g.m[h.stream] = A), g = A, g.data || (g.data = new g.g.DetectionListData()), g.data.reset(m.length), A = 0; A < m.length; ++A) {
                      _ = m[A];
                      var Z = g.data, B = Z.setBoundingBox, rt = A, H = _.T, b = new te();
                      R(b, 1, H.Z), R(b, 2, H.$), R(b, 3, H.height), R(b, 4, H.width), R(b, 5, H.rotation), R(b, 6, H.X);
                      var T = H = new Kt();
                      lt(T, 1, D(b, 1)), lt(T, 2, D(b, 2)), lt(T, 3, D(b, 3)), lt(T, 4, D(b, 4)), lt(T, 5, D(b, 5));
                      var M = D(b, 6);
                      if (M != null && M != null) {
                        jt(T.g, 48);
                        var E = T.g, O = M;
                        M = 0 > O, O = Math.abs(O);
                        var F = O >>> 0;
                        for (O = Math.floor((O - F) / 4294967296), O >>>= 0, M && (O = ~O >>> 0, F = (~F >>> 0) + 1, 4294967295 < F && (F = 0, O++, 4294967295 < O && (O = 0))), mt = F, bt = O, M = mt, F = bt; 0 < F || 127 < M; ) E.push(M & 127 | 128), M = (M >>> 7 | F << 25) >>> 0, F >>>= 7;
                        E.push(M);
                      }
                      if (Qt(b, T), H = Zt(H), B.call(Z, rt, H), _.O) for (Z = 0; Z < _.O.length; ++Z) b = _.O[Z], T = !!b.visibility, B = g.data, rt = B.addNormalizedLandmark, H = A, b = Object.assign(Object.assign({}, b), { visibility: T ? b.visibility : 0 }), T = new Lt(), R(T, 1, b.x), R(T, 2, b.y), R(T, 3, b.z), b.visibility && R(T, 4, b.visibility), E = b = new Kt(), lt(E, 1, D(T, 1)), lt(E, 2, D(T, 2)), lt(E, 3, D(T, 3)), lt(E, 4, D(T, 4)), lt(E, 5, D(T, 5)), Qt(T, E), b = Zt(b), rt.call(B, H, b);
                      if (_.M) for (Z = 0; Z < _.M.length; ++Z) {
                        if (B = g.data, rt = B.addClassification, H = A, b = _.M[Z], T = new Wt(), R(T, 2, b.Y), b.index && R(T, 1, b.index), b.label && R(T, 3, b.label), b.displayName && R(T, 4, b.displayName), E = b = new Kt(), F = D(T, 1), F != null && F != null) if (jt(E.g, 8), M = E.g, 0 <= F) jt(M, F);
                        else {
                          for (O = 0; 9 > O; O++) M.push(F & 127 | 128), F >>= 7;
                          M.push(1);
                        }
                        lt(E, 2, D(T, 2)), M = D(T, 3), M != null && (M = $(M), jt(E.g, 26), jt(E.g, M.length), Pt(E, E.g.end()), Pt(E, M)), M = D(T, 4), M != null && (M = $(M), jt(E.g, 34), jt(E.g, M.length), Pt(E, E.g.end()), Pt(E, M)), Qt(T, E), b = Zt(b), rt.call(B, H, b);
                      }
                    }
                    g = g.data;
                    break t;
                  default:
                    g = {};
                }
              }
              switch (y = g, L = h.stream, h.type) {
                case "video":
                  u.pushTexture2d(Object.assign(Object.assign({}, y), { stream: L, timestamp: i }));
                  break;
                case "detections":
                  k = y, k.stream = L, k.timestamp = i, u.pushDetectionList(k);
                  break;
                default:
                  throw Error("Unknown input config type: '" + h.type + "'");
              }
            }
            return n.i.send(u), P(w, n.C, 4);
          case 4:
            u.delete(), w.g = 0;
        }
      });
    });
  };
  function n2(t, e, r) {
    return et(t, function n() {
      var i, u, o, a, c, h, y = this, L, k, w, g, m, A, _, Z;
      return S(n, function(B) {
        switch (B.g) {
          case 1:
            if (!r) return B.return(e);
            for (i = {}, u = 0, o = U(Object.keys(r)), a = o.next(); !a.done; a = o.next()) c = a.value, h = r[c], typeof h != "string" && h.type === "texture" && e[h.stream] !== void 0 && ++u;
            1 < u && (y.G = !1), L = U(Object.keys(r)), a = L.next();
          case 2:
            if (a.done) {
              B.g = 4;
              break;
            }
            if (k = a.value, w = r[k], typeof w == "string") return _ = i, Z = k, P(B, i2(y, k, e[w]), 14);
            if (g = e[w.stream], w.type === "detection_list") {
              if (g) {
                for (var rt = g.getRectList(), H = g.getLandmarksList(), b = g.getClassificationsList(), T = [], M = 0; M < rt.size(); ++M) {
                  var E = rt.get(M);
                  t: {
                    var O = new te();
                    for (E = new Gt(E); xt(E); ) switch (E.i) {
                      case 13:
                        var F = ut(E);
                        R(O, 1, F);
                        break;
                      case 21:
                        F = ut(E), R(O, 2, F);
                        break;
                      case 29:
                        F = ut(E), R(O, 3, F);
                        break;
                      case 37:
                        F = ut(E), R(O, 4, F);
                        break;
                      case 45:
                        F = ut(E), R(O, 5, F);
                        break;
                      case 48:
                        F = Dt(E.g), R(O, 6, F);
                        break;
                      default:
                        if (!At(O, E)) break t;
                    }
                  }
                  O = { Z: ft(O, 1), $: ft(O, 2), height: ft(O, 3), width: ft(O, 4), rotation: ft(O, 5, 0), X: Et(O, 6, 0) }, E = Ht(be(H.get(M)), Lt).map(Ae);
                  var Ut = b.get(M);
                  t: for (F = new qt(), Ut = new Gt(Ut); xt(Ut); ) switch (Ut.i) {
                    case 10:
                      F.addClassification(zt(Ut, new Wt(), Ge));
                      break;
                    default:
                      if (!At(F, Ut)) break t;
                  }
                  O = { T: O, O: E, M: Ye(F) }, T.push(O);
                }
                rt = T;
              } else rt = [];
              i[k] = rt, B.g = 7;
              break;
            }
            if (w.type === "proto_list") {
              if (g) {
                for (rt = Array(g.size()), H = 0; H < g.size(); H++) rt[H] = g.get(H);
                g.delete();
              } else rt = [];
              i[k] = rt, B.g = 7;
              break;
            }
            if (g === void 0) {
              B.g = 3;
              break;
            }
            if (w.type === "float_list") {
              i[k] = g, B.g = 7;
              break;
            }
            if (w.type === "proto") {
              i[k] = g, B.g = 7;
              break;
            }
            if (w.type !== "texture") throw Error("Unknown output config type: '" + w.type + "'");
            return m = y.s[k], m || (m = new ee(y.h, y.D), y.s[k] = m), P(B, ke(m, g, y.G), 13);
          case 13:
            A = B.h, i[k] = A;
          case 7:
            w.transform && i[k] && (i[k] = w.transform(i[k])), B.g = 3;
            break;
          case 14:
            _[Z] = B.h;
          case 3:
            a = L.next(), B.g = 2;
            break;
          case 4:
            return B.return(i);
        }
      });
    });
  }
  function i2(t, e, r) {
    return et(t, function n() {
      var i = this, u;
      return S(n, function(o) {
        return typeof r == "number" || r instanceof Uint8Array || r instanceof i.h.Uint8BlobList ? o.return(r) : r instanceof i.h.Texture2dDataOut ? (u = i.s[e], u || (u = new ee(i.h, i.D), i.s[e] = u), o.return(ke(u, r, i.G))) : o.return(void 0);
      });
    });
  }
  function o2(t, e) {
    for (var r = e.name || "$", n = [].concat(V(e.wants)), i = new t.h.StringList(), u = U(e.wants), o = u.next(); !o.done; o = u.next()) i.push_back(o.value);
    u = t.h.PacketListener.implement({ onResults: function(a) {
      for (var c = {}, h = 0; h < e.wants.length; ++h) c[n[h]] = a.get(h);
      var y = t.listeners[r];
      y && (t.C = n2(t, c, e.outs).then(function(L) {
        L = y(L);
        for (var k = 0; k < e.wants.length; ++k) {
          var w = c[n[k]];
          typeof w == "object" && w.hasOwnProperty && w.hasOwnProperty("delete") && w.delete();
        }
        L && (t.C = L);
      }));
    } }), t.i.attachMultiListener(i, u), i.delete();
  }
  j.onResults = function(t, e) {
    this.listeners[e || "$"] = t;
  }, p("Solution", re), p("OptionType", { BOOL: 0, NUMBER: 1, aa: 2, 0: "BOOL", 1: "NUMBER", 2: "STRING" });
  function s2(t) {
    t = ze(t);
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
  var u2 = { files: [{ url: "face_mesh_solution_packed_assets_loader.js" }, { simd: !0, url: "face_mesh_solution_simd_wasm_bin.js" }, { simd: !1, url: "face_mesh_solution_wasm_bin.js" }], graph: { url: "face_mesh.binarypb" }, listeners: [{ wants: ["multi_face_geometry", "image_transformed", "multi_face_landmarks"], outs: { image: "image_transformed", multiFaceGeometry: { type: "proto_list", stream: "multi_face_geometry", transform: function(t) {
    return t.map(s2);
  } }, multiFaceLandmarks: { type: "proto_list", stream: "multi_face_landmarks", transform: function(t) {
    return t.map(function(e) {
      return Ht(
        be(e),
        Lt
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
  ], a2 = [].concat(V(Se), V(Re), V(_e), V(Te), V(Oe), V(Me));
  function Fe(t) {
    t = t || {}, t = Object.assign(Object.assign({}, u2), t), this.g = new re(t);
  }
  j = Fe.prototype, j.close = function() {
    return this.g.close(), Promise.resolve();
  }, j.onResults = function(t) {
    this.g.onResults(t);
  }, j.initialize = function() {
    return et(this, function t() {
      var e = this;
      return S(t, function(r) {
        return P(r, e.g.initialize(), 0);
      });
    });
  }, j.reset = function() {
    this.g.reset();
  }, j.send = function(t) {
    return et(this, function e() {
      var r = this;
      return S(e, function(n) {
        return P(n, r.g.send(t), 0);
      });
    });
  }, j.setOptions = function(t) {
    this.g.setOptions(t);
  }, p("FACE_GEOMETRY", { Layout: { COLUMN_MAJOR: 0, ROW_MAJOR: 1, 0: "COLUMN_MAJOR", 1: "ROW_MAJOR" }, PrimitiveType: { TRIANGLE: 0, 0: "TRIANGLE" }, VertexType: { VERTEX_PT: 0, 0: "VERTEX_PT" }, DEFAULT_CAMERA_PARAMS: { verticalFovDegrees: 63, near: 1, far: 1e4 } }), p("FaceMesh", Fe), p("FACEMESH_LIPS", Se), p("FACEMESH_LEFT_EYE", Re), p("FACEMESH_LEFT_EYEBROW", _e), p("FACEMESH_LEFT_IRIS", [[474, 475], [475, 476], [476, 477], [477, 474]]), p("FACEMESH_RIGHT_EYE", Te), p("FACEMESH_RIGHT_EYEBROW", Oe), p("FACEMESH_RIGHT_IRIS", [[469, 470], [470, 471], [471, 472], [472, 469]]), p("FACEMESH_FACE_OVAL", Me), p("FACEMESH_CONTOURS", a2), p("FACEMESH_TESSELATION", [
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
  ]), p("matrixDataToMatrix", function(t) {
    for (var e = t.getCols(), r = t.getRows(), n = t.getPackedDataList(), i = [], u = 0; u < r; u++) i.push(Array(e));
    for (u = 0; u < r; u++) for (var o = 0; o < e; o++) {
      var a = t.getLayout() === 1 ? u * e + o : o * r + u;
      i[u][o] = n[a];
    }
    return i;
  }), p("VERSION", "0.4.1633559619");
}).call(It);
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
    s = [typeof globalThis == "object" && globalThis, s, typeof window == "object" && window, typeof self == "object" && self, typeof It == "object" && It];
    for (var l = 0; l < s.length; ++l) {
      var v = s[l];
      if (v && v.Math == Math) return v;
    }
    throw Error("Cannot find global object");
  }
  var Y = z(this);
  function N(s, l) {
    if (l) t: {
      var v = Y;
      s = s.split(".");
      for (var p = 0; p < s.length - 1; p++) {
        var G = s[p];
        if (!(G in v)) break t;
        v = v[G];
      }
      s = s[s.length - 1], p = v[s], l = l(p), l != p && l != null && X(v, s, { configurable: !0, writable: !0, value: l });
    }
  }
  N("Symbol", function(s) {
    function l(q) {
      if (this instanceof l) throw new TypeError("Symbol is not a constructor");
      return new v(p + (q || "") + "_" + G++, q);
    }
    function v(q, f) {
      this.g = q, X(this, "description", { configurable: !0, writable: !0, value: f });
    }
    if (s) return s;
    v.prototype.toString = function() {
      return this.g;
    };
    var p = "jscomp_symbol_" + (1e9 * Math.random() >>> 0) + "_", G = 0;
    return l;
  }), N("Symbol.iterator", function(s) {
    if (s) return s;
    s = Symbol("Symbol.iterator");
    for (var l = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), v = 0; v < l.length; v++) {
      var p = Y[l[v]];
      typeof p == "function" && typeof p.prototype[s] != "function" && X(p.prototype, s, { configurable: !0, writable: !0, value: function() {
        return J(j(this));
      } });
    }
    return s;
  });
  function J(s) {
    return s = { next: s }, s[Symbol.iterator] = function() {
      return this;
    }, s;
  }
  function W(s) {
    var l = typeof Symbol < "u" && Symbol.iterator && s[Symbol.iterator];
    return l ? l.call(s) : { next: j(s) };
  }
  function U() {
    this.i = !1, this.g = null, this.o = void 0, this.j = 1, this.m = 0, this.h = null;
  }
  function V(s) {
    if (s.i) throw new TypeError("Generator is already running");
    s.i = !0;
  }
  U.prototype.l = function(s) {
    this.o = s;
  };
  function wt(s, l) {
    s.h = { F: l, G: !0 }, s.j = s.m;
  }
  U.prototype.return = function(s) {
    this.h = { return: s }, this.j = this.m;
  };
  function ct(s) {
    this.g = new U(), this.h = s;
  }
  function pt(s, l) {
    V(s.g);
    var v = s.g.g;
    return v ? gt(s, "return" in v ? v.return : function(p) {
      return { value: p, done: !0 };
    }, l, s.g.return) : (s.g.return(l), st(s));
  }
  function gt(s, l, v, p) {
    try {
      var G = l.call(s.g.g, v);
      if (!(G instanceof Object)) throw new TypeError("Iterator result " + G + " is not an object");
      if (!G.done) return s.g.i = !1, G;
      var q = G.value;
    } catch (f) {
      return s.g.g = null, wt(s.g, f), st(s);
    }
    return s.g.g = null, p.call(s.g, q), st(s);
  }
  function st(s) {
    for (; s.g.j; ) try {
      var l = s.h(s.g);
      if (l) return s.g.i = !1, { value: l.value, done: !1 };
    } catch (v) {
      s.g.o = void 0, wt(s.g, v);
    }
    if (s.g.i = !1, s.g.h) {
      if (l = s.g.h, s.g.h = null, l.G) throw l.F;
      return { value: l.return, done: !0 };
    }
    return { value: void 0, done: !0 };
  }
  function dt(s) {
    this.next = function(l) {
      return V(s.g), s.g.g ? l = gt(s, s.g.g.next, l, s.g.l) : (s.g.l(l), l = st(s)), l;
    }, this.throw = function(l) {
      return V(s.g), s.g.g ? l = gt(s, s.g.g.throw, l, s.g.l) : (wt(s.g, l), l = st(s)), l;
    }, this.return = function(l) {
      return pt(s, l);
    }, this[Symbol.iterator] = function() {
      return this;
    };
  }
  function ot(s) {
    function l(p) {
      return s.next(p);
    }
    function v(p) {
      return s.throw(p);
    }
    return new Promise(function(p, G) {
      function q(f) {
        f.done ? p(f.value) : Promise.resolve(f.value).then(l, v).then(q, G);
      }
      q(s.next());
    });
  }
  N("Promise", function(s) {
    function l(f) {
      this.h = 0, this.i = void 0, this.g = [], this.o = !1;
      var d = this.j();
      try {
        f(d.resolve, d.reject);
      } catch (C) {
        d.reject(C);
      }
    }
    function v() {
      this.g = null;
    }
    function p(f) {
      return f instanceof l ? f : new l(function(d) {
        d(f);
      });
    }
    if (s) return s;
    v.prototype.h = function(f) {
      if (this.g == null) {
        this.g = [];
        var d = this;
        this.i(function() {
          d.l();
        });
      }
      this.g.push(f);
    };
    var G = Y.setTimeout;
    v.prototype.i = function(f) {
      G(f, 0);
    }, v.prototype.l = function() {
      for (; this.g && this.g.length; ) {
        var f = this.g;
        this.g = [];
        for (var d = 0; d < f.length; ++d) {
          var C = f[d];
          f[d] = null;
          try {
            C();
          } catch ($) {
            this.j($);
          }
        }
      }
      this.g = null;
    }, v.prototype.j = function(f) {
      this.i(function() {
        throw f;
      });
    }, l.prototype.j = function() {
      function f($) {
        return function(it) {
          C || (C = !0, $.call(d, it));
        };
      }
      var d = this, C = !1;
      return { resolve: f(this.A), reject: f(this.l) };
    }, l.prototype.A = function(f) {
      if (f === this) this.l(new TypeError("A Promise cannot resolve to itself"));
      else if (f instanceof l) this.C(f);
      else {
        t: switch (typeof f) {
          case "object":
            var d = f != null;
            break t;
          case "function":
            d = !0;
            break t;
          default:
            d = !1;
        }
        d ? this.v(f) : this.m(f);
      }
    }, l.prototype.v = function(f) {
      var d = void 0;
      try {
        d = f.then;
      } catch (C) {
        this.l(C);
        return;
      }
      typeof d == "function" ? this.D(d, f) : this.m(f);
    }, l.prototype.l = function(f) {
      this.u(2, f);
    }, l.prototype.m = function(f) {
      this.u(1, f);
    }, l.prototype.u = function(f, d) {
      if (this.h != 0) throw Error("Cannot settle(" + f + ", " + d + "): Promise already settled in state" + this.h);
      this.h = f, this.i = d, this.h === 2 && this.B(), this.H();
    }, l.prototype.B = function() {
      var f = this;
      G(function() {
        if (f.I()) {
          var d = Y.console;
          typeof d < "u" && d.error(f.i);
        }
      }, 1);
    }, l.prototype.I = function() {
      if (this.o) return !1;
      var f = Y.CustomEvent, d = Y.Event, C = Y.dispatchEvent;
      return typeof C > "u" ? !0 : (typeof f == "function" ? f = new f("unhandledrejection", { cancelable: !0 }) : typeof d == "function" ? f = new d("unhandledrejection", { cancelable: !0 }) : (f = Y.document.createEvent("CustomEvent"), f.initCustomEvent("unhandledrejection", !1, !0, f)), f.promise = this, f.reason = this.i, C(f));
    }, l.prototype.H = function() {
      if (this.g != null) {
        for (var f = 0; f < this.g.length; ++f) q.h(this.g[f]);
        this.g = null;
      }
    };
    var q = new v();
    return l.prototype.C = function(f) {
      var d = this.j();
      f.s(d.resolve, d.reject);
    }, l.prototype.D = function(f, d) {
      var C = this.j();
      try {
        f.call(d, C.resolve, C.reject);
      } catch ($) {
        C.reject($);
      }
    }, l.prototype.then = function(f, d) {
      function C(at, yt) {
        return typeof at == "function" ? function(Nt) {
          try {
            $(at(Nt));
          } catch (Mt) {
            it(Mt);
          }
        } : yt;
      }
      var $, it, vt = new l(function(at, yt) {
        $ = at, it = yt;
      });
      return this.s(C(f, $), C(d, it)), vt;
    }, l.prototype.catch = function(f) {
      return this.then(void 0, f);
    }, l.prototype.s = function(f, d) {
      function C() {
        switch ($.h) {
          case 1:
            f($.i);
            break;
          case 2:
            d($.i);
            break;
          default:
            throw Error("Unexpected state: " + $.h);
        }
      }
      var $ = this;
      this.g == null ? q.h(C) : this.g.push(C), this.o = !0;
    }, l.resolve = p, l.reject = function(f) {
      return new l(function(d, C) {
        C(f);
      });
    }, l.race = function(f) {
      return new l(function(d, C) {
        for (var $ = W(f), it = $.next(); !it.done; it = $.next()) p(it.value).s(d, C);
      });
    }, l.all = function(f) {
      var d = W(f), C = d.next();
      return C.done ? p([]) : new l(function($, it) {
        function vt(Nt) {
          return function(Mt) {
            at[Nt] = Mt, yt--, yt == 0 && $(at);
          };
        }
        var at = [], yt = 0;
        do
          at.push(void 0), yt++, p(C.value).s(vt(at.length - 1), it), C = d.next();
        while (!C.done);
      });
    }, l;
  });
  var I = typeof Object.assign == "function" ? Object.assign : function(s, l) {
    for (var v = 1; v < arguments.length; v++) {
      var p = arguments[v];
      if (p) for (var G in p) Object.prototype.hasOwnProperty.call(p, G) && (s[G] = p[G]);
    }
    return s;
  };
  N("Object.assign", function(s) {
    return s || I;
  });
  var tt = this || self, Tt = { facingMode: "user", width: 640, height: 480 };
  function P(s, l) {
    this.video = s, this.i = 0, this.h = Object.assign(Object.assign({}, Tt), l);
  }
  P.prototype.stop = function() {
    var s = this, l, v, p, G;
    return ot(new dt(new ct(function(q) {
      if (s.g) {
        for (l = s.g.getTracks(), v = W(l), p = v.next(); !p.done; p = v.next()) G = p.value, G.stop();
        s.g = void 0;
      }
      q.j = 0;
    })));
  }, P.prototype.start = function() {
    var s = this, l;
    return ot(new dt(new ct(function(v) {
      return navigator.mediaDevices && navigator.mediaDevices.getUserMedia || alert("No navigator.mediaDevices.getUserMedia exists."), l = s.h, v.return(navigator.mediaDevices.getUserMedia({ video: { facingMode: l.facingMode, width: l.width, height: l.height } }).then(function(p) {
        Vt(s, p);
      }).catch(function(p) {
        var G = "Failed to acquire camera feed: " + p;
        throw console.error(G), alert(G), p;
      }));
    })));
  };
  function kt(s) {
    window.requestAnimationFrame(function() {
      Ot(s);
    });
  }
  function Vt(s, l) {
    s.g = l, s.video.srcObject = l, s.video.onloadedmetadata = function() {
      s.video.play(), kt(s);
    };
  }
  function Ot(s) {
    var l = null;
    s.video.paused || s.video.currentTime === s.i || (s.i = s.video.currentTime, l = s.h.onFrame()), l ? l.then(function() {
      kt(s);
    }) : kt(s);
  }
  var nt = ["Camera"], Q = tt;
  nt[0] in Q || typeof Q.execScript > "u" || Q.execScript("var " + nt[0]);
  for (var S; nt.length && (S = nt.shift()); ) nt.length || P === void 0 ? Q[S] && Q[S] !== Object.prototype[S] ? Q = Q[S] : Q = Q[S] = {} : Q[S] = P;
}).call(It);
function y2() {
  const j = ht.useRef(null), X = ht.useRef(null), { cameraState: z, setCameraState: Y, closeCamera: N, startScan: J, analysisResult: W, activeLayers: U } = l2(), [V, wt] = ht.useState(null), ct = ht.useRef(null), pt = ht.useRef(null), gt = ht.useRef(null), st = ht.useRef(null);
  ht.useEffect(() => () => {
    X.current && X.current.getTracks().forEach((I) => I.stop());
  }, [N]);
  const dt = async () => {
    try {
      const I = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 720 }, height: { ideal: 1280 } }
      });
      if (X.current = I, j.current) {
        j.current.srcObject = I;
        const tt = new g2.FaceMesh({
          locateFile: (P) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${P}`
        });
        tt.setOptions({
          maxNumFaces: 1,
          refineLandmarks: !0,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5
        }), tt.onResults((P) => {
          if (P.multiFaceLandmarks && P.multiFaceLandmarks.length > 0 && j.current) {
            const kt = P.multiFaceLandmarks[0], Vt = j.current.videoWidth, Ot = j.current.videoHeight, nt = j.current.getBoundingClientRect(), Q = (S) => {
              const s = kt[S];
              return {
                x: (1 - s.x) * nt.width,
                y: s.y * nt.height
              };
            };
            if (ct.current) {
              const S = Q(13);
              ct.current.style.transform = `translate(${S.x - 30}px, ${S.y - 15}px)`;
            }
            if (pt.current) {
              const S = Q(205);
              pt.current.style.transform = `translate(${S.x - 40}px, ${S.y - 40}px)`;
            }
            if (gt.current) {
              const S = Q(425);
              gt.current.style.transform = `translate(${S.x - 40}px, ${S.y - 40}px)`;
            }
            if (st.current) {
              const S = Q(1);
              st.current.style.transform = `translate(${S.x - 150}px, ${S.y - 200}px)`;
            }
          }
        }), new d2.Camera(j.current, {
          onFrame: async () => {
            j.current && await tt.send({ image: j.current });
          },
          width: 720,
          height: 1280
        }).start();
      }
      wt(null), Y("active");
    } catch (I) {
      console.error("Camera access denied or unavailable", I), wt("Camera access denied. Please enable camera permissions to use AR features.");
    }
  }, ot = () => {
  };
  return z === "closed" ? null : /* @__PURE__ */ x.jsxs("div", { style: {
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
    /* @__PURE__ */ x.jsxs("div", { style: { position: "absolute", top: 0, left: 0, right: 0, padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 20, background: "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)" }, children: [
      /* @__PURE__ */ x.jsx("h2", { style: { color: "white", fontSize: "1.25rem", fontWeight: 600, margin: 0 }, children: "Stylique 3D AR" }),
      /* @__PURE__ */ x.jsx("button", { onClick: N, style: { background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)", border: "none", color: "white", width: "40px", height: "40px", borderRadius: "20px", fontSize: "1.25rem", cursor: "pointer" }, children: "✕" })
    ] }),
    V ? /* @__PURE__ */ x.jsx("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", textAlign: "center", color: "white" }, children: /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx("div", { style: { fontSize: "48px", marginBottom: "16px" }, children: "📷" }),
      /* @__PURE__ */ x.jsx("h3", { children: V })
    ] }) }) : /* @__PURE__ */ x.jsx(
      "video",
      {
        ref: j,
        autoPlay: !0,
        playsInline: !0,
        muted: !0,
        onCanPlay: ot,
        style: { width: "100%", height: "100%", objectFit: "cover", transform: "scaleX(-1)" }
      }
    ),
    !V && /* @__PURE__ */ x.jsx(f2, { isScanning: z === "scanning" }),
    z === "active" && U.length > 0 && W && /* @__PURE__ */ x.jsxs("div", { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: 15, overflow: "hidden" }, children: [
      U.map((I) => {
        const tt = Ce(I.hexColor, W.undertone || "neutral", W.skinToneDepth || "medium");
        return I.category === "lips" ? /* @__PURE__ */ x.jsx("div", { ref: ct, style: { position: "absolute", top: 0, left: 0, width: "60px", height: "30px", background: tt, opacity: I.intensity, borderRadius: "50%", filter: "blur(4px)", mixBlendMode: "multiply", willChange: "transform" } }, I.id) : I.category === "cheeks" ? /* @__PURE__ */ x.jsxs(c2.Fragment, { children: [
          /* @__PURE__ */ x.jsx("div", { ref: pt, style: { position: "absolute", top: 0, left: 0, width: "80px", height: "80px", background: `radial-gradient(ellipse at center, ${tt} 0%, transparent 70%)`, opacity: I.intensity, mixBlendMode: "multiply", willChange: "transform" } }),
          /* @__PURE__ */ x.jsx("div", { ref: gt, style: { position: "absolute", top: 0, left: 0, width: "80px", height: "80px", background: `radial-gradient(ellipse at center, ${tt} 0%, transparent 70%)`, opacity: I.intensity, mixBlendMode: "multiply", willChange: "transform" } })
        ] }, I.id) : I.category === "base" ? /* @__PURE__ */ x.jsx("div", { ref: st, style: { position: "absolute", top: 0, left: 0, width: "300px", height: "400px", background: tt, opacity: I.intensity * 0.4, borderRadius: "50%", filter: "blur(40px)", mixBlendMode: "overlay", willChange: "transform" } }, I.id) : null;
      }),
      /* @__PURE__ */ x.jsx("div", { style: { position: "absolute", top: "80px", right: "20px", display: "flex", flexDirection: "column", gap: "8px" }, children: U.map((I) => {
        const tt = Ce(I.hexColor, W.undertone || "neutral", W.skinToneDepth || "medium");
        return /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", background: "rgba(0,0,0,0.5)", padding: "6px 12px", borderRadius: "16px", backdropFilter: "blur(4px)" }, children: [
          /* @__PURE__ */ x.jsx("div", { style: { width: "16px", height: "16px", borderRadius: "50%", background: I.hexColor, border: "2px solid white" } }),
          /* @__PURE__ */ x.jsx("span", { style: { color: "white", fontSize: "10px" }, children: "→" }),
          /* @__PURE__ */ x.jsx("div", { style: { width: "16px", height: "16px", borderRadius: "50%", background: tt, border: "2px solid white" } }),
          /* @__PURE__ */ x.jsx("span", { style: { color: "white", fontSize: "12px", fontWeight: 500 }, children: I.productName })
        ] }, I.id);
      }) })
    ] }),
    /* @__PURE__ */ x.jsxs("div", { style: { position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", zIndex: 20, background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)" }, children: [
      z === "initializing" && /* @__PURE__ */ x.jsxs("div", { style: { textAlign: "center", color: "white" }, children: [
        /* @__PURE__ */ x.jsx("h3", { style: { marginBottom: "16px" }, children: "Ready for Face Scan" }),
        /* @__PURE__ */ x.jsx("button", { onClick: dt, style: { background: "var(--primary-color, #8b5cf6)", color: "white", border: "none", padding: "12px 24px", borderRadius: "24px", fontWeight: 600, fontSize: "1rem", cursor: "pointer" }, children: "Start 3D Scanner" })
      ] }),
      z === "active" && /* @__PURE__ */ x.jsx("button", { onClick: J, style: { width: "80px", height: "80px", borderRadius: "40px", border: "4px solid white", background: "transparent", padding: "6px", cursor: "pointer" }, children: /* @__PURE__ */ x.jsx("div", { style: { width: "100%", height: "100%", borderRadius: "50%", background: "white", transition: "transform 0.1s" } }) }),
      z === "complete" && W && /* @__PURE__ */ x.jsxs("div", { style: { background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", padding: "24px", borderRadius: "24px", width: "100%", maxWidth: "400px", color: "#0f172a" }, children: [
        /* @__PURE__ */ x.jsx("h3", { style: { fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px" }, children: "Scan Complete" }),
        /* @__PURE__ */ x.jsx("p", { style: { fontSize: "0.875rem", color: "#475569", marginBottom: "16px" }, children: W.rawAnalysis }),
        /* @__PURE__ */ x.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }, children: [
          /* @__PURE__ */ x.jsxs("div", { style: { background: "#f1f5f9", padding: "12px", borderRadius: "12px" }, children: [
            /* @__PURE__ */ x.jsx("div", { style: { fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }, children: "Tone" }),
            /* @__PURE__ */ x.jsx("div", { style: { fontWeight: 600, textTransform: "capitalize" }, children: W.skinToneDepth })
          ] }),
          /* @__PURE__ */ x.jsxs("div", { style: { background: "#f1f5f9", padding: "12px", borderRadius: "12px" }, children: [
            /* @__PURE__ */ x.jsx("div", { style: { fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }, children: "Undertone" }),
            /* @__PURE__ */ x.jsx("div", { style: { fontWeight: 600, textTransform: "capitalize" }, children: W.undertone })
          ] })
        ] }),
        /* @__PURE__ */ x.jsx("button", { onClick: () => {
          N(), window.dispatchEvent(new CustomEvent("stella-open-routine"));
        }, style: { width: "100%", background: "var(--primary-color, #8b5cf6)", color: "white", border: "none", padding: "16px", borderRadius: "12px", fontWeight: 600, fontSize: "1rem", cursor: "pointer" }, children: "View My Routine" })
      ] })
    ] })
  ] });
}
export {
  y2 as CameraView
};
