function q_(Q) {
  return Q && Q.__esModule && Object.prototype.hasOwnProperty.call(Q, "default") ? Q.default : Q;
}
var pE = { exports: {} }, Kp = {}, vE = { exports: {} }, Et = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KR;
function X_() {
  if (KR) return Et;
  KR = 1;
  var Q = Symbol.for("react.element"), G = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), Ze = Symbol.for("react.strict_mode"), Ge = Symbol.for("react.profiler"), Fe = Symbol.for("react.provider"), S = Symbol.for("react.context"), gt = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), te = Symbol.for("react.memo"), ke = Symbol.for("react.lazy"), J = Symbol.iterator;
  function me(_) {
    return _ === null || typeof _ != "object" ? null : (_ = J && _[J] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var q = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, De = Object.assign, We = {};
  function Me(_, P, $e) {
    this.props = _, this.context = P, this.refs = We, this.updater = $e || q;
  }
  Me.prototype.isReactComponent = {}, Me.prototype.setState = function(_, P) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, P, "setState");
  }, Me.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function Zt() {
  }
  Zt.prototype = Me.prototype;
  function it(_, P, $e) {
    this.props = _, this.context = P, this.refs = We, this.updater = $e || q;
  }
  var Ae = it.prototype = new Zt();
  Ae.constructor = it, De(Ae, Me.prototype), Ae.isPureReactComponent = !0;
  var ht = Array.isArray, Ce = Object.prototype.hasOwnProperty, lt = { current: null }, Ie = { key: !0, ref: !0, __self: !0, __source: !0 };
  function un(_, P, $e) {
    var Ve, ft = {}, ut = null, rt = null;
    if (P != null) for (Ve in P.ref !== void 0 && (rt = P.ref), P.key !== void 0 && (ut = "" + P.key), P) Ce.call(P, Ve) && !Ie.hasOwnProperty(Ve) && (ft[Ve] = P[Ve]);
    var ot = arguments.length - 2;
    if (ot === 1) ft.children = $e;
    else if (1 < ot) {
      for (var dt = Array(ot), Bt = 0; Bt < ot; Bt++) dt[Bt] = arguments[Bt + 2];
      ft.children = dt;
    }
    if (_ && _.defaultProps) for (Ve in ot = _.defaultProps, ot) ft[Ve] === void 0 && (ft[Ve] = ot[Ve]);
    return { $$typeof: Q, type: _, key: ut, ref: rt, props: ft, _owner: lt.current };
  }
  function Ht(_, P) {
    return { $$typeof: Q, type: _.type, key: P, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function en(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === Q;
  }
  function on(_) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function($e) {
      return P[$e];
    });
  }
  var _t = /\/+/g;
  function Ne(_, P) {
    return typeof _ == "object" && _ !== null && _.key != null ? on("" + _.key) : P.toString(36);
  }
  function jt(_, P, $e, Ve, ft) {
    var ut = typeof _;
    (ut === "undefined" || ut === "boolean") && (_ = null);
    var rt = !1;
    if (_ === null) rt = !0;
    else switch (ut) {
      case "string":
      case "number":
        rt = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case Q:
          case G:
            rt = !0;
        }
    }
    if (rt) return rt = _, ft = ft(rt), _ = Ve === "" ? "." + Ne(rt, 0) : Ve, ht(ft) ? ($e = "", _ != null && ($e = _.replace(_t, "$&/") + "/"), jt(ft, P, $e, "", function(Bt) {
      return Bt;
    })) : ft != null && (en(ft) && (ft = Ht(ft, $e + (!ft.key || rt && rt.key === ft.key ? "" : ("" + ft.key).replace(_t, "$&/") + "/") + _)), P.push(ft)), 1;
    if (rt = 0, Ve = Ve === "" ? "." : Ve + ":", ht(_)) for (var ot = 0; ot < _.length; ot++) {
      ut = _[ot];
      var dt = Ve + Ne(ut, ot);
      rt += jt(ut, P, $e, dt, ft);
    }
    else if (dt = me(_), typeof dt == "function") for (_ = dt.call(_), ot = 0; !(ut = _.next()).done; ) ut = ut.value, dt = Ve + Ne(ut, ot++), rt += jt(ut, P, $e, dt, ft);
    else if (ut === "object") throw P = String(_), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return rt;
  }
  function kt(_, P, $e) {
    if (_ == null) return _;
    var Ve = [], ft = 0;
    return jt(_, Ve, "", "", function(ut) {
      return P.call($e, ut, ft++);
    }), Ve;
  }
  function Ot(_) {
    if (_._status === -1) {
      var P = _._result;
      P = P(), P.then(function($e) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = $e);
      }, function($e) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = $e);
      }), _._status === -1 && (_._status = 0, _._result = P);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var Re = { current: null }, ee = { transition: null }, Te = { ReactCurrentDispatcher: Re, ReactCurrentBatchConfig: ee, ReactCurrentOwner: lt };
  function ie() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Et.Children = { map: kt, forEach: function(_, P, $e) {
    kt(_, function() {
      P.apply(this, arguments);
    }, $e);
  }, count: function(_) {
    var P = 0;
    return kt(_, function() {
      P++;
    }), P;
  }, toArray: function(_) {
    return kt(_, function(P) {
      return P;
    }) || [];
  }, only: function(_) {
    if (!en(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, Et.Component = Me, Et.Fragment = A, Et.Profiler = Ge, Et.PureComponent = it, Et.StrictMode = Ze, Et.Suspense = ne, Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, Et.act = ie, Et.cloneElement = function(_, P, $e) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Ve = De({}, _.props), ft = _.key, ut = _.ref, rt = _._owner;
    if (P != null) {
      if (P.ref !== void 0 && (ut = P.ref, rt = lt.current), P.key !== void 0 && (ft = "" + P.key), _.type && _.type.defaultProps) var ot = _.type.defaultProps;
      for (dt in P) Ce.call(P, dt) && !Ie.hasOwnProperty(dt) && (Ve[dt] = P[dt] === void 0 && ot !== void 0 ? ot[dt] : P[dt]);
    }
    var dt = arguments.length - 2;
    if (dt === 1) Ve.children = $e;
    else if (1 < dt) {
      ot = Array(dt);
      for (var Bt = 0; Bt < dt; Bt++) ot[Bt] = arguments[Bt + 2];
      Ve.children = ot;
    }
    return { $$typeof: Q, type: _.type, key: ft, ref: ut, props: Ve, _owner: rt };
  }, Et.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: Fe, _context: _ }, _.Consumer = _;
  }, Et.createElement = un, Et.createFactory = function(_) {
    var P = un.bind(null, _);
    return P.type = _, P;
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(_) {
    return { $$typeof: gt, render: _ };
  }, Et.isValidElement = en, Et.lazy = function(_) {
    return { $$typeof: ke, _payload: { _status: -1, _result: _ }, _init: Ot };
  }, Et.memo = function(_, P) {
    return { $$typeof: te, type: _, compare: P === void 0 ? null : P };
  }, Et.startTransition = function(_) {
    var P = ee.transition;
    ee.transition = {};
    try {
      _();
    } finally {
      ee.transition = P;
    }
  }, Et.unstable_act = ie, Et.useCallback = function(_, P) {
    return Re.current.useCallback(_, P);
  }, Et.useContext = function(_) {
    return Re.current.useContext(_);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(_) {
    return Re.current.useDeferredValue(_);
  }, Et.useEffect = function(_, P) {
    return Re.current.useEffect(_, P);
  }, Et.useId = function() {
    return Re.current.useId();
  }, Et.useImperativeHandle = function(_, P, $e) {
    return Re.current.useImperativeHandle(_, P, $e);
  }, Et.useInsertionEffect = function(_, P) {
    return Re.current.useInsertionEffect(_, P);
  }, Et.useLayoutEffect = function(_, P) {
    return Re.current.useLayoutEffect(_, P);
  }, Et.useMemo = function(_, P) {
    return Re.current.useMemo(_, P);
  }, Et.useReducer = function(_, P, $e) {
    return Re.current.useReducer(_, P, $e);
  }, Et.useRef = function(_) {
    return Re.current.useRef(_);
  }, Et.useState = function(_) {
    return Re.current.useState(_);
  }, Et.useSyncExternalStore = function(_, P, $e) {
    return Re.current.useSyncExternalStore(_, P, $e);
  }, Et.useTransition = function() {
    return Re.current.useTransition();
  }, Et.version = "18.3.1", Et;
}
var ev = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
ev.exports;
var JR;
function K_() {
  return JR || (JR = 1, function(Q, G) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = "18.3.1", Ze = Symbol.for("react.element"), Ge = Symbol.for("react.portal"), Fe = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), gt = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), te = Symbol.for("react.context"), ke = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), De = Symbol.for("react.lazy"), We = Symbol.for("react.offscreen"), Me = Symbol.iterator, Zt = "@@iterator";
      function it(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Me && h[Me] || h[Zt];
        return typeof C == "function" ? C : null;
      }
      var Ae = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ht = {
        transition: null
      }, Ce = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, lt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ie = {}, un = null;
      function Ht(h) {
        un = h;
      }
      Ie.setExtraStackFrame = function(h) {
        un = h;
      }, Ie.getCurrentStack = null, Ie.getStackAddendum = function() {
        var h = "";
        un && (h += un);
        var C = Ie.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var en = !1, on = !1, _t = !1, Ne = !1, jt = !1, kt = {
        ReactCurrentDispatcher: Ae,
        ReactCurrentBatchConfig: ht,
        ReactCurrentOwner: lt
      };
      kt.ReactDebugCurrentFrame = Ie, kt.ReactCurrentActQueue = Ce;
      function Ot(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          ee("warn", h, N);
        }
      }
      function Re(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          ee("error", h, N);
        }
      }
      function ee(h, C, N) {
        {
          var j = kt.ReactDebugCurrentFrame, Z = j.getStackAddendum();
          Z !== "" && (C += "%s", N = N.concat([Z]));
          var ze = N.map(function(le) {
            return String(le);
          });
          ze.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, ze);
        }
      }
      var Te = {};
      function ie(h, C) {
        {
          var N = h.constructor, j = N && (N.displayName || N.name) || "ReactClass", Z = j + "." + C;
          if (Te[Z])
            return;
          Re("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), Te[Z] = !0;
        }
      }
      var _ = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, N) {
          ie(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, N, j) {
          ie(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, N, j) {
          ie(h, "setState");
        }
      }, P = Object.assign, $e = {};
      Object.freeze($e);
      function Ve(h, C, N) {
        this.props = h, this.context = C, this.refs = $e, this.updater = N || _;
      }
      Ve.prototype.isReactComponent = {}, Ve.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ve.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ft = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ut = function(h, C) {
          Object.defineProperty(Ve.prototype, h, {
            get: function() {
              Ot("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var rt in ft)
          ft.hasOwnProperty(rt) && ut(rt, ft[rt]);
      }
      function ot() {
      }
      ot.prototype = Ve.prototype;
      function dt(h, C, N) {
        this.props = h, this.context = C, this.refs = $e, this.updater = N || _;
      }
      var Bt = dt.prototype = new ot();
      Bt.constructor = dt, P(Bt, Ve.prototype), Bt.isPureReactComponent = !0;
      function Ln() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var br = Array.isArray;
      function Rn(h) {
        return br(h);
      }
      function rr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, N = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return N;
        }
      }
      function Bn(h) {
        try {
          return In(h), !1;
        } catch {
          return !0;
        }
      }
      function In(h) {
        return "" + h;
      }
      function Yr(h) {
        if (Bn(h))
          return Re("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(h)), In(h);
      }
      function ci(h, C, N) {
        var j = h.displayName;
        if (j)
          return j;
        var Z = C.displayName || C.name || "";
        return Z !== "" ? N + "(" + Z + ")" : N;
      }
      function sa(h) {
        return h.displayName || "Context";
      }
      function Xn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Re("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Fe:
            return "Fragment";
          case Ge:
            return "Portal";
          case gt:
            return "Profiler";
          case S:
            return "StrictMode";
          case J:
            return "Suspense";
          case me:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case te:
              var C = h;
              return sa(C) + ".Consumer";
            case ne:
              var N = h;
              return sa(N._context) + ".Provider";
            case ke:
              return ci(h, h.render, "ForwardRef");
            case q:
              var j = h.displayName || null;
              return j !== null ? j : Xn(h.type) || "Memo";
            case De: {
              var Z = h, ze = Z._payload, le = Z._init;
              try {
                return Xn(le(ze));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Tn = Object.prototype.hasOwnProperty, $n = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Sr, Ya, Mn;
      Mn = {};
      function Er(h) {
        if (Tn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function ca(h) {
        if (Tn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Wa(h, C) {
        var N = function() {
          Sr || (Sr = !0, Re("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function fi(h, C) {
        var N = function() {
          Ya || (Ya = !0, Re("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function re(h) {
        if (typeof h.ref == "string" && lt.current && h.__self && lt.current.stateNode !== h.__self) {
          var C = Xn(lt.current.type);
          Mn[C] || (Re('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Mn[C] = !0);
        }
      }
      var xe = function(h, C, N, j, Z, ze, le) {
        var He = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ze,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: N,
          props: le,
          // Record the component responsible for creating this element.
          _owner: ze
        };
        return He._store = {}, Object.defineProperty(He._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(He, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(He, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Z
        }), Object.freeze && (Object.freeze(He.props), Object.freeze(He)), He;
      };
      function st(h, C, N) {
        var j, Z = {}, ze = null, le = null, He = null, yt = null;
        if (C != null) {
          Er(C) && (le = C.ref, re(C)), ca(C) && (Yr(C.key), ze = "" + C.key), He = C.__self === void 0 ? null : C.__self, yt = C.__source === void 0 ? null : C.__source;
          for (j in C)
            Tn.call(C, j) && !$n.hasOwnProperty(j) && (Z[j] = C[j]);
        }
        var bt = arguments.length - 2;
        if (bt === 1)
          Z.children = N;
        else if (bt > 1) {
          for (var an = Array(bt), Wt = 0; Wt < bt; Wt++)
            an[Wt] = arguments[Wt + 2];
          Object.freeze && Object.freeze(an), Z.children = an;
        }
        if (h && h.defaultProps) {
          var ct = h.defaultProps;
          for (j in ct)
            Z[j] === void 0 && (Z[j] = ct[j]);
        }
        if (ze || le) {
          var Qt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          ze && Wa(Z, Qt), le && fi(Z, Qt);
        }
        return xe(h, ze, le, He, yt, lt.current, Z);
      }
      function Ft(h, C) {
        var N = xe(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function tn(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, Z = P({}, h.props), ze = h.key, le = h.ref, He = h._self, yt = h._source, bt = h._owner;
        if (C != null) {
          Er(C) && (le = C.ref, bt = lt.current), ca(C) && (Yr(C.key), ze = "" + C.key);
          var an;
          h.type && h.type.defaultProps && (an = h.type.defaultProps);
          for (j in C)
            Tn.call(C, j) && !$n.hasOwnProperty(j) && (C[j] === void 0 && an !== void 0 ? Z[j] = an[j] : Z[j] = C[j]);
        }
        var Wt = arguments.length - 2;
        if (Wt === 1)
          Z.children = N;
        else if (Wt > 1) {
          for (var ct = Array(Wt), Qt = 0; Qt < Wt; Qt++)
            ct[Qt] = arguments[Qt + 2];
          Z.children = ct;
        }
        return xe(h.type, ze, le, He, yt, bt, Z);
      }
      function hn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Ze;
      }
      var sn = ".", Kn = ":";
      function nn(h) {
        var C = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(Z) {
          return N[Z];
        });
        return "$" + j;
      }
      var It = !1, $t = /\/+/g;
      function fa(h) {
        return h.replace($t, "$&/");
      }
      function Cr(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Yr(h.key), nn("" + h.key)) : C.toString(36);
      }
      function xa(h, C, N, j, Z) {
        var ze = typeof h;
        (ze === "undefined" || ze === "boolean") && (h = null);
        var le = !1;
        if (h === null)
          le = !0;
        else
          switch (ze) {
            case "string":
            case "number":
              le = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Ze:
                case Ge:
                  le = !0;
              }
          }
        if (le) {
          var He = h, yt = Z(He), bt = j === "" ? sn + Cr(He, 0) : j;
          if (Rn(yt)) {
            var an = "";
            bt != null && (an = fa(bt) + "/"), xa(yt, C, an, "", function(qf) {
              return qf;
            });
          } else yt != null && (hn(yt) && (yt.key && (!He || He.key !== yt.key) && Yr(yt.key), yt = Ft(
            yt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            N + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (yt.key && (!He || He.key !== yt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              fa("" + yt.key) + "/"
            ) : "") + bt
          )), C.push(yt));
          return 1;
        }
        var Wt, ct, Qt = 0, mn = j === "" ? sn : j + Kn;
        if (Rn(h))
          for (var Rl = 0; Rl < h.length; Rl++)
            Wt = h[Rl], ct = mn + Cr(Wt, Rl), Qt += xa(Wt, C, N, ct, Z);
        else {
          var qo = it(h);
          if (typeof qo == "function") {
            var Bi = h;
            qo === Bi.entries && (It || Ot("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), It = !0);
            for (var Xo = qo.call(Bi), ou, Gf = 0; !(ou = Xo.next()).done; )
              Wt = ou.value, ct = mn + Cr(Wt, Gf++), Qt += xa(Wt, C, N, ct, Z);
          } else if (ze === "object") {
            var oc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (oc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : oc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Qt;
      }
      function Hi(h, C, N) {
        if (h == null)
          return h;
        var j = [], Z = 0;
        return xa(h, j, "", "", function(ze) {
          return C.call(N, ze, Z++);
        }), j;
      }
      function Zl(h) {
        var C = 0;
        return Hi(h, function() {
          C++;
        }), C;
      }
      function eu(h, C, N) {
        Hi(h, function() {
          C.apply(this, arguments);
        }, N);
      }
      function pl(h) {
        return Hi(h, function(C) {
          return C;
        }) || [];
      }
      function vl(h) {
        if (!hn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function tu(h) {
        var C = {
          $$typeof: te,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: ne,
          _context: C
        };
        var N = !1, j = !1, Z = !1;
        {
          var ze = {
            $$typeof: te,
            _context: C
          };
          Object.defineProperties(ze, {
            Provider: {
              get: function() {
                return j || (j = !0, Re("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(le) {
                C.Provider = le;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(le) {
                C._currentValue = le;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(le) {
                C._currentValue2 = le;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(le) {
                C._threadCount = le;
              }
            },
            Consumer: {
              get: function() {
                return N || (N = !0, Re("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(le) {
                Z || (Ot("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", le), Z = !0);
              }
            }
          }), C.Consumer = ze;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var _r = -1, kr = 0, ar = 1, di = 2;
      function Qa(h) {
        if (h._status === _r) {
          var C = h._result, N = C();
          if (N.then(function(ze) {
            if (h._status === kr || h._status === _r) {
              var le = h;
              le._status = ar, le._result = ze;
            }
          }, function(ze) {
            if (h._status === kr || h._status === _r) {
              var le = h;
              le._status = di, le._result = ze;
            }
          }), h._status === _r) {
            var j = h;
            j._status = kr, j._result = N;
          }
        }
        if (h._status === ar) {
          var Z = h._result;
          return Z === void 0 && Re(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Z), "default" in Z || Re(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Z), Z.default;
        } else
          throw h._result;
      }
      function pi(h) {
        var C = {
          // We use these fields to store the result.
          _status: _r,
          _result: h
        }, N = {
          $$typeof: De,
          _payload: C,
          _init: Qa
        };
        {
          var j, Z;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(ze) {
                Re("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = ze, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Z;
              },
              set: function(ze) {
                Re("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Z = ze, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function vi(h) {
        h != null && h.$$typeof === q ? Re("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Re("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Re("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Re("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: ke,
          render: h
        };
        {
          var N;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return N;
            },
            set: function(j) {
              N = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function B(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Fe || h === gt || jt || h === S || h === J || h === me || Ne || h === We || en || on || _t || typeof h == "object" && h !== null && (h.$$typeof === De || h.$$typeof === q || h.$$typeof === ne || h.$$typeof === te || h.$$typeof === ke || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ue(h, C) {
        B(h) || Re("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: q,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(Z) {
              j = Z, !h.name && !h.displayName && (h.displayName = Z);
            }
          });
        }
        return N;
      }
      function he() {
        var h = Ae.current;
        return h === null && Re(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function et(h) {
        var C = he();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? Re("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && Re("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Xe(h) {
        var C = he();
        return C.useState(h);
      }
      function mt(h, C, N) {
        var j = he();
        return j.useReducer(h, C, N);
      }
      function pt(h) {
        var C = he();
        return C.useRef(h);
      }
      function xn(h, C) {
        var N = he();
        return N.useEffect(h, C);
      }
      function rn(h, C) {
        var N = he();
        return N.useInsertionEffect(h, C);
      }
      function cn(h, C) {
        var N = he();
        return N.useLayoutEffect(h, C);
      }
      function ir(h, C) {
        var N = he();
        return N.useCallback(h, C);
      }
      function Ga(h, C) {
        var N = he();
        return N.useMemo(h, C);
      }
      function qa(h, C, N) {
        var j = he();
        return j.useImperativeHandle(h, C, N);
      }
      function tt(h, C) {
        {
          var N = he();
          return N.useDebugValue(h, C);
        }
      }
      function at() {
        var h = he();
        return h.useTransition();
      }
      function Xa(h) {
        var C = he();
        return C.useDeferredValue(h);
      }
      function nu() {
        var h = he();
        return h.useId();
      }
      function ru(h, C, N) {
        var j = he();
        return j.useSyncExternalStore(h, C, N);
      }
      var hl = 0, Qu, ml, Wr, Yo, Dr, lc, uc;
      function Gu() {
      }
      Gu.__reactDisabledLog = !0;
      function yl() {
        {
          if (hl === 0) {
            Qu = console.log, ml = console.info, Wr = console.warn, Yo = console.error, Dr = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Gu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          hl++;
        }
      }
      function da() {
        {
          if (hl--, hl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: P({}, h, {
                value: Qu
              }),
              info: P({}, h, {
                value: ml
              }),
              warn: P({}, h, {
                value: Wr
              }),
              error: P({}, h, {
                value: Yo
              }),
              group: P({}, h, {
                value: Dr
              }),
              groupCollapsed: P({}, h, {
                value: lc
              }),
              groupEnd: P({}, h, {
                value: uc
              })
            });
          }
          hl < 0 && Re("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ka = kt.ReactCurrentDispatcher, Ja;
      function qu(h, C, N) {
        {
          if (Ja === void 0)
            try {
              throw Error();
            } catch (Z) {
              var j = Z.stack.trim().match(/\n( *(at )?)/);
              Ja = j && j[1] || "";
            }
          return `
` + Ja + h;
        }
      }
      var au = !1, gl;
      {
        var Xu = typeof WeakMap == "function" ? WeakMap : Map;
        gl = new Xu();
      }
      function Ku(h, C) {
        if (!h || au)
          return "";
        {
          var N = gl.get(h);
          if (N !== void 0)
            return N;
        }
        var j;
        au = !0;
        var Z = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ze;
        ze = Ka.current, Ka.current = null, yl();
        try {
          if (C) {
            var le = function() {
              throw Error();
            };
            if (Object.defineProperty(le.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(le, []);
              } catch (mn) {
                j = mn;
              }
              Reflect.construct(h, [], le);
            } else {
              try {
                le.call();
              } catch (mn) {
                j = mn;
              }
              h.call(le.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (mn) {
              j = mn;
            }
            h();
          }
        } catch (mn) {
          if (mn && j && typeof mn.stack == "string") {
            for (var He = mn.stack.split(`
`), yt = j.stack.split(`
`), bt = He.length - 1, an = yt.length - 1; bt >= 1 && an >= 0 && He[bt] !== yt[an]; )
              an--;
            for (; bt >= 1 && an >= 0; bt--, an--)
              if (He[bt] !== yt[an]) {
                if (bt !== 1 || an !== 1)
                  do
                    if (bt--, an--, an < 0 || He[bt] !== yt[an]) {
                      var Wt = `
` + He[bt].replace(" at new ", " at ");
                      return h.displayName && Wt.includes("<anonymous>") && (Wt = Wt.replace("<anonymous>", h.displayName)), typeof h == "function" && gl.set(h, Wt), Wt;
                    }
                  while (bt >= 1 && an >= 0);
                break;
              }
          }
        } finally {
          au = !1, Ka.current = ze, da(), Error.prepareStackTrace = Z;
        }
        var ct = h ? h.displayName || h.name : "", Qt = ct ? qu(ct) : "";
        return typeof h == "function" && gl.set(h, Qt), Qt;
      }
      function Pi(h, C, N) {
        return Ku(h, !1);
      }
      function Wf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Vi(h, C, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Ku(h, Wf(h));
        if (typeof h == "string")
          return qu(h);
        switch (h) {
          case J:
            return qu("Suspense");
          case me:
            return qu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ke:
              return Pi(h.render);
            case q:
              return Vi(h.type, C, N);
            case De: {
              var j = h, Z = j._payload, ze = j._init;
              try {
                return Vi(ze(Z), C, N);
              } catch {
              }
            }
          }
        return "";
      }
      var Lt = {}, Ju = kt.ReactDebugCurrentFrame;
      function wt(h) {
        if (h) {
          var C = h._owner, N = Vi(h.type, h._source, C ? C.type : null);
          Ju.setExtraStackFrame(N);
        } else
          Ju.setExtraStackFrame(null);
      }
      function Wo(h, C, N, j, Z) {
        {
          var ze = Function.call.bind(Tn);
          for (var le in h)
            if (ze(h, le)) {
              var He = void 0;
              try {
                if (typeof h[le] != "function") {
                  var yt = Error((j || "React class") + ": " + N + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw yt.name = "Invariant Violation", yt;
                }
                He = h[le](C, le, j, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (bt) {
                He = bt;
              }
              He && !(He instanceof Error) && (wt(Z), Re("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", N, le, typeof He), wt(null)), He instanceof Error && !(He.message in Lt) && (Lt[He.message] = !0, wt(Z), Re("Failed %s type: %s", N, He.message), wt(null));
            }
        }
      }
      function hi(h) {
        if (h) {
          var C = h._owner, N = Vi(h.type, h._source, C ? C.type : null);
          Ht(N);
        } else
          Ht(null);
      }
      var qe;
      qe = !1;
      function Zu() {
        if (lt.current) {
          var h = Xn(lt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function lr(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + C + ":" + N + ".";
        }
        return "";
      }
      function mi(h) {
        return h != null ? lr(h.__source) : "";
      }
      var Or = {};
      function yi(h) {
        var C = Zu();
        if (!C) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (C = `

Check the top-level render call using <` + N + ">.");
        }
        return C;
      }
      function fn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var N = yi(C);
          if (!Or[N]) {
            Or[N] = !0;
            var j = "";
            h && h._owner && h._owner !== lt.current && (j = " It was passed a child from " + Xn(h._owner.type) + "."), hi(h), Re('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, j), hi(null);
          }
        }
      }
      function Yt(h, C) {
        if (typeof h == "object") {
          if (Rn(h))
            for (var N = 0; N < h.length; N++) {
              var j = h[N];
              hn(j) && fn(j, C);
            }
          else if (hn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var Z = it(h);
            if (typeof Z == "function" && Z !== h.entries)
              for (var ze = Z.call(h), le; !(le = ze.next()).done; )
                hn(le.value) && fn(le.value, C);
          }
        }
      }
      function Sl(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var N;
          if (typeof C == "function")
            N = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === ke || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === q))
            N = C.propTypes;
          else
            return;
          if (N) {
            var j = Xn(C);
            Wo(N, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !qe) {
            qe = !0;
            var Z = Xn(C);
            Re("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Re("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Yn(h) {
        {
          for (var C = Object.keys(h.props), N = 0; N < C.length; N++) {
            var j = C[N];
            if (j !== "children" && j !== "key") {
              hi(h), Re("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), hi(null);
              break;
            }
          }
          h.ref !== null && (hi(h), Re("Invalid attribute `ref` supplied to `React.Fragment`."), hi(null));
        }
      }
      function Lr(h, C, N) {
        var j = B(h);
        if (!j) {
          var Z = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ze = mi(C);
          ze ? Z += ze : Z += Zu();
          var le;
          h === null ? le = "null" : Rn(h) ? le = "array" : h !== void 0 && h.$$typeof === Ze ? (le = "<" + (Xn(h.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : le = typeof h, Re("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", le, Z);
        }
        var He = st.apply(this, arguments);
        if (He == null)
          return He;
        if (j)
          for (var yt = 2; yt < arguments.length; yt++)
            Yt(arguments[yt], h);
        return h === Fe ? Yn(He) : Sl(He), He;
      }
      var wa = !1;
      function iu(h) {
        var C = Lr.bind(null, h);
        return C.type = h, wa || (wa = !0, Ot("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Ot("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Qo(h, C, N) {
        for (var j = tn.apply(this, arguments), Z = 2; Z < arguments.length; Z++)
          Yt(arguments[Z], j.type);
        return Sl(j), j;
      }
      function Go(h, C) {
        var N = ht.transition;
        ht.transition = {};
        var j = ht.transition;
        ht.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (ht.transition = N, N === null && j._updatedFibers) {
            var Z = j._updatedFibers.size;
            Z > 10 && Ot("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var El = !1, lu = null;
      function Qf(h) {
        if (lu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = Q && Q[C];
            lu = N.call(Q, "timers").setImmediate;
          } catch {
            lu = function(Z) {
              El === !1 && (El = !0, typeof MessageChannel > "u" && Re("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ze = new MessageChannel();
              ze.port1.onmessage = Z, ze.port2.postMessage(void 0);
            };
          }
        return lu(h);
      }
      var ba = 0, Za = !1;
      function gi(h) {
        {
          var C = ba;
          ba++, Ce.current === null && (Ce.current = []);
          var N = Ce.isBatchingLegacy, j;
          try {
            if (Ce.isBatchingLegacy = !0, j = h(), !N && Ce.didScheduleLegacyUpdate) {
              var Z = Ce.current;
              Z !== null && (Ce.didScheduleLegacyUpdate = !1, Cl(Z));
            }
          } catch (ct) {
            throw _a(C), ct;
          } finally {
            Ce.isBatchingLegacy = N;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var ze = j, le = !1, He = {
              then: function(ct, Qt) {
                le = !0, ze.then(function(mn) {
                  _a(C), ba === 0 ? eo(mn, ct, Qt) : ct(mn);
                }, function(mn) {
                  _a(C), Qt(mn);
                });
              }
            };
            return !Za && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              le || (Za = !0, Re("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), He;
          } else {
            var yt = j;
            if (_a(C), ba === 0) {
              var bt = Ce.current;
              bt !== null && (Cl(bt), Ce.current = null);
              var an = {
                then: function(ct, Qt) {
                  Ce.current === null ? (Ce.current = [], eo(yt, ct, Qt)) : ct(yt);
                }
              };
              return an;
            } else {
              var Wt = {
                then: function(ct, Qt) {
                  ct(yt);
                }
              };
              return Wt;
            }
          }
        }
      }
      function _a(h) {
        h !== ba - 1 && Re("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ba = h;
      }
      function eo(h, C, N) {
        {
          var j = Ce.current;
          if (j !== null)
            try {
              Cl(j), Qf(function() {
                j.length === 0 ? (Ce.current = null, C(h)) : eo(h, C, N);
              });
            } catch (Z) {
              N(Z);
            }
          else
            C(h);
        }
      }
      var to = !1;
      function Cl(h) {
        if (!to) {
          to = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var N = h[C];
              do
                N = N(!0);
              while (N !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            to = !1;
          }
        }
      }
      var uu = Lr, no = Qo, ro = iu, ei = {
        map: Hi,
        forEach: eu,
        count: Zl,
        toArray: pl,
        only: vl
      };
      G.Children = ei, G.Component = Ve, G.Fragment = Fe, G.Profiler = gt, G.PureComponent = dt, G.StrictMode = S, G.Suspense = J, G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kt, G.act = gi, G.cloneElement = no, G.createContext = tu, G.createElement = uu, G.createFactory = ro, G.createRef = Ln, G.forwardRef = vi, G.isValidElement = hn, G.lazy = pi, G.memo = ue, G.startTransition = Go, G.unstable_act = gi, G.useCallback = ir, G.useContext = et, G.useDebugValue = tt, G.useDeferredValue = Xa, G.useEffect = xn, G.useId = nu, G.useImperativeHandle = qa, G.useInsertionEffect = rn, G.useLayoutEffect = cn, G.useMemo = Ga, G.useReducer = mt, G.useRef = pt, G.useState = Xe, G.useSyncExternalStore = ru, G.useTransition = at, G.version = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ev, ev.exports)), ev.exports;
}
process.env.NODE_ENV === "production" ? vE.exports = X_() : vE.exports = K_();
var Jt = vE.exports;
const J_ = /* @__PURE__ */ q_(Jt);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZR;
function Z_() {
  if (ZR) return Kp;
  ZR = 1;
  var Q = Jt, G = Symbol.for("react.element"), A = Symbol.for("react.fragment"), Ze = Object.prototype.hasOwnProperty, Ge = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(gt, ne, te) {
    var ke, J = {}, me = null, q = null;
    te !== void 0 && (me = "" + te), ne.key !== void 0 && (me = "" + ne.key), ne.ref !== void 0 && (q = ne.ref);
    for (ke in ne) Ze.call(ne, ke) && !Fe.hasOwnProperty(ke) && (J[ke] = ne[ke]);
    if (gt && gt.defaultProps) for (ke in ne = gt.defaultProps, ne) J[ke] === void 0 && (J[ke] = ne[ke]);
    return { $$typeof: G, type: gt, key: me, ref: q, props: J, _owner: Ge.current };
  }
  return Kp.Fragment = A, Kp.jsx = S, Kp.jsxs = S, Kp;
}
var Jp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eT;
function ek() {
  return eT || (eT = 1, process.env.NODE_ENV !== "production" && function() {
    var Q = Jt, G = Symbol.for("react.element"), A = Symbol.for("react.portal"), Ze = Symbol.for("react.fragment"), Ge = Symbol.for("react.strict_mode"), Fe = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), gt = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), ke = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), me = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), De = Symbol.iterator, We = "@@iterator";
    function Me(R) {
      if (R === null || typeof R != "object")
        return null;
      var B = De && R[De] || R[We];
      return typeof B == "function" ? B : null;
    }
    var Zt = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function it(R) {
      {
        for (var B = arguments.length, ue = new Array(B > 1 ? B - 1 : 0), he = 1; he < B; he++)
          ue[he - 1] = arguments[he];
        Ae("error", R, ue);
      }
    }
    function Ae(R, B, ue) {
      {
        var he = Zt.ReactDebugCurrentFrame, et = he.getStackAddendum();
        et !== "" && (B += "%s", ue = ue.concat([et]));
        var Xe = ue.map(function(mt) {
          return String(mt);
        });
        Xe.unshift("Warning: " + B), Function.prototype.apply.call(console[R], console, Xe);
      }
    }
    var ht = !1, Ce = !1, lt = !1, Ie = !1, un = !1, Ht;
    Ht = Symbol.for("react.module.reference");
    function en(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Ze || R === Fe || un || R === Ge || R === te || R === ke || Ie || R === q || ht || Ce || lt || typeof R == "object" && R !== null && (R.$$typeof === me || R.$$typeof === J || R.$$typeof === S || R.$$typeof === gt || R.$$typeof === ne || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ht || R.getModuleId !== void 0));
    }
    function on(R, B, ue) {
      var he = R.displayName;
      if (he)
        return he;
      var et = B.displayName || B.name || "";
      return et !== "" ? ue + "(" + et + ")" : ue;
    }
    function _t(R) {
      return R.displayName || "Context";
    }
    function Ne(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && it("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Ze:
          return "Fragment";
        case A:
          return "Portal";
        case Fe:
          return "Profiler";
        case Ge:
          return "StrictMode";
        case te:
          return "Suspense";
        case ke:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case gt:
            var B = R;
            return _t(B) + ".Consumer";
          case S:
            var ue = R;
            return _t(ue._context) + ".Provider";
          case ne:
            return on(R, R.render, "ForwardRef");
          case J:
            var he = R.displayName || null;
            return he !== null ? he : Ne(R.type) || "Memo";
          case me: {
            var et = R, Xe = et._payload, mt = et._init;
            try {
              return Ne(mt(Xe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var jt = Object.assign, kt = 0, Ot, Re, ee, Te, ie, _, P;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function Ve() {
      {
        if (kt === 0) {
          Ot = console.log, Re = console.info, ee = console.warn, Te = console.error, ie = console.group, _ = console.groupCollapsed, P = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: $e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        kt++;
      }
    }
    function ft() {
      {
        if (kt--, kt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: jt({}, R, {
              value: Ot
            }),
            info: jt({}, R, {
              value: Re
            }),
            warn: jt({}, R, {
              value: ee
            }),
            error: jt({}, R, {
              value: Te
            }),
            group: jt({}, R, {
              value: ie
            }),
            groupCollapsed: jt({}, R, {
              value: _
            }),
            groupEnd: jt({}, R, {
              value: P
            })
          });
        }
        kt < 0 && it("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ut = Zt.ReactCurrentDispatcher, rt;
    function ot(R, B, ue) {
      {
        if (rt === void 0)
          try {
            throw Error();
          } catch (et) {
            var he = et.stack.trim().match(/\n( *(at )?)/);
            rt = he && he[1] || "";
          }
        return `
` + rt + R;
      }
    }
    var dt = !1, Bt;
    {
      var Ln = typeof WeakMap == "function" ? WeakMap : Map;
      Bt = new Ln();
    }
    function br(R, B) {
      if (!R || dt)
        return "";
      {
        var ue = Bt.get(R);
        if (ue !== void 0)
          return ue;
      }
      var he;
      dt = !0;
      var et = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Xe;
      Xe = ut.current, ut.current = null, Ve();
      try {
        if (B) {
          var mt = function() {
            throw Error();
          };
          if (Object.defineProperty(mt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(mt, []);
            } catch (tt) {
              he = tt;
            }
            Reflect.construct(R, [], mt);
          } else {
            try {
              mt.call();
            } catch (tt) {
              he = tt;
            }
            R.call(mt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (tt) {
            he = tt;
          }
          R();
        }
      } catch (tt) {
        if (tt && he && typeof tt.stack == "string") {
          for (var pt = tt.stack.split(`
`), xn = he.stack.split(`
`), rn = pt.length - 1, cn = xn.length - 1; rn >= 1 && cn >= 0 && pt[rn] !== xn[cn]; )
            cn--;
          for (; rn >= 1 && cn >= 0; rn--, cn--)
            if (pt[rn] !== xn[cn]) {
              if (rn !== 1 || cn !== 1)
                do
                  if (rn--, cn--, cn < 0 || pt[rn] !== xn[cn]) {
                    var ir = `
` + pt[rn].replace(" at new ", " at ");
                    return R.displayName && ir.includes("<anonymous>") && (ir = ir.replace("<anonymous>", R.displayName)), typeof R == "function" && Bt.set(R, ir), ir;
                  }
                while (rn >= 1 && cn >= 0);
              break;
            }
        }
      } finally {
        dt = !1, ut.current = Xe, ft(), Error.prepareStackTrace = et;
      }
      var Ga = R ? R.displayName || R.name : "", qa = Ga ? ot(Ga) : "";
      return typeof R == "function" && Bt.set(R, qa), qa;
    }
    function Rn(R, B, ue) {
      return br(R, !1);
    }
    function rr(R) {
      var B = R.prototype;
      return !!(B && B.isReactComponent);
    }
    function Bn(R, B, ue) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return br(R, rr(R));
      if (typeof R == "string")
        return ot(R);
      switch (R) {
        case te:
          return ot("Suspense");
        case ke:
          return ot("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ne:
            return Rn(R.render);
          case J:
            return Bn(R.type, B, ue);
          case me: {
            var he = R, et = he._payload, Xe = he._init;
            try {
              return Bn(Xe(et), B, ue);
            } catch {
            }
          }
        }
      return "";
    }
    var In = Object.prototype.hasOwnProperty, Yr = {}, ci = Zt.ReactDebugCurrentFrame;
    function sa(R) {
      if (R) {
        var B = R._owner, ue = Bn(R.type, R._source, B ? B.type : null);
        ci.setExtraStackFrame(ue);
      } else
        ci.setExtraStackFrame(null);
    }
    function Xn(R, B, ue, he, et) {
      {
        var Xe = Function.call.bind(In);
        for (var mt in R)
          if (Xe(R, mt)) {
            var pt = void 0;
            try {
              if (typeof R[mt] != "function") {
                var xn = Error((he || "React class") + ": " + ue + " type `" + mt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[mt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xn.name = "Invariant Violation", xn;
              }
              pt = R[mt](B, mt, he, ue, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (rn) {
              pt = rn;
            }
            pt && !(pt instanceof Error) && (sa(et), it("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", ue, mt, typeof pt), sa(null)), pt instanceof Error && !(pt.message in Yr) && (Yr[pt.message] = !0, sa(et), it("Failed %s type: %s", ue, pt.message), sa(null));
          }
      }
    }
    var Tn = Array.isArray;
    function $n(R) {
      return Tn(R);
    }
    function Sr(R) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, ue = B && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ue;
      }
    }
    function Ya(R) {
      try {
        return Mn(R), !1;
      } catch {
        return !0;
      }
    }
    function Mn(R) {
      return "" + R;
    }
    function Er(R) {
      if (Ya(R))
        return it("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(R)), Mn(R);
    }
    var ca = Zt.ReactCurrentOwner, Wa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fi, re;
    function xe(R) {
      if (In.call(R, "ref")) {
        var B = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function st(R) {
      if (In.call(R, "key")) {
        var B = Object.getOwnPropertyDescriptor(R, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ft(R, B) {
      typeof R.ref == "string" && ca.current;
    }
    function tn(R, B) {
      {
        var ue = function() {
          fi || (fi = !0, it("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        ue.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ue,
          configurable: !0
        });
      }
    }
    function hn(R, B) {
      {
        var ue = function() {
          re || (re = !0, it("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        ue.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ue,
          configurable: !0
        });
      }
    }
    var sn = function(R, B, ue, he, et, Xe, mt) {
      var pt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: G,
        // Built-in properties that belong on the element
        type: R,
        key: B,
        ref: ue,
        props: mt,
        // Record the component responsible for creating this element.
        _owner: Xe
      };
      return pt._store = {}, Object.defineProperty(pt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(pt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.defineProperty(pt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: et
      }), Object.freeze && (Object.freeze(pt.props), Object.freeze(pt)), pt;
    };
    function Kn(R, B, ue, he, et) {
      {
        var Xe, mt = {}, pt = null, xn = null;
        ue !== void 0 && (Er(ue), pt = "" + ue), st(B) && (Er(B.key), pt = "" + B.key), xe(B) && (xn = B.ref, Ft(B, et));
        for (Xe in B)
          In.call(B, Xe) && !Wa.hasOwnProperty(Xe) && (mt[Xe] = B[Xe]);
        if (R && R.defaultProps) {
          var rn = R.defaultProps;
          for (Xe in rn)
            mt[Xe] === void 0 && (mt[Xe] = rn[Xe]);
        }
        if (pt || xn) {
          var cn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          pt && tn(mt, cn), xn && hn(mt, cn);
        }
        return sn(R, pt, xn, et, he, ca.current, mt);
      }
    }
    var nn = Zt.ReactCurrentOwner, It = Zt.ReactDebugCurrentFrame;
    function $t(R) {
      if (R) {
        var B = R._owner, ue = Bn(R.type, R._source, B ? B.type : null);
        It.setExtraStackFrame(ue);
      } else
        It.setExtraStackFrame(null);
    }
    var fa;
    fa = !1;
    function Cr(R) {
      return typeof R == "object" && R !== null && R.$$typeof === G;
    }
    function xa() {
      {
        if (nn.current) {
          var R = Ne(nn.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Hi(R) {
      return "";
    }
    var Zl = {};
    function eu(R) {
      {
        var B = xa();
        if (!B) {
          var ue = typeof R == "string" ? R : R.displayName || R.name;
          ue && (B = `

Check the top-level render call using <` + ue + ">.");
        }
        return B;
      }
    }
    function pl(R, B) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ue = eu(B);
        if (Zl[ue])
          return;
        Zl[ue] = !0;
        var he = "";
        R && R._owner && R._owner !== nn.current && (he = " It was passed a child from " + Ne(R._owner.type) + "."), $t(R), it('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ue, he), $t(null);
      }
    }
    function vl(R, B) {
      {
        if (typeof R != "object")
          return;
        if ($n(R))
          for (var ue = 0; ue < R.length; ue++) {
            var he = R[ue];
            Cr(he) && pl(he, B);
          }
        else if (Cr(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var et = Me(R);
          if (typeof et == "function" && et !== R.entries)
            for (var Xe = et.call(R), mt; !(mt = Xe.next()).done; )
              Cr(mt.value) && pl(mt.value, B);
        }
      }
    }
    function tu(R) {
      {
        var B = R.type;
        if (B == null || typeof B == "string")
          return;
        var ue;
        if (typeof B == "function")
          ue = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === ne || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === J))
          ue = B.propTypes;
        else
          return;
        if (ue) {
          var he = Ne(B);
          Xn(ue, R.props, "prop", he, R);
        } else if (B.PropTypes !== void 0 && !fa) {
          fa = !0;
          var et = Ne(B);
          it("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", et || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && it("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(R) {
      {
        for (var B = Object.keys(R.props), ue = 0; ue < B.length; ue++) {
          var he = B[ue];
          if (he !== "children" && he !== "key") {
            $t(R), it("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), $t(null);
            break;
          }
        }
        R.ref !== null && ($t(R), it("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    var kr = {};
    function ar(R, B, ue, he, et, Xe) {
      {
        var mt = en(R);
        if (!mt) {
          var pt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (pt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xn = Hi();
          xn ? pt += xn : pt += xa();
          var rn;
          R === null ? rn = "null" : $n(R) ? rn = "array" : R !== void 0 && R.$$typeof === G ? (rn = "<" + (Ne(R.type) || "Unknown") + " />", pt = " Did you accidentally export a JSX literal instead of a component?") : rn = typeof R, it("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", rn, pt);
        }
        var cn = Kn(R, B, ue, et, Xe);
        if (cn == null)
          return cn;
        if (mt) {
          var ir = B.children;
          if (ir !== void 0)
            if (he)
              if ($n(ir)) {
                for (var Ga = 0; Ga < ir.length; Ga++)
                  vl(ir[Ga], R);
                Object.freeze && Object.freeze(ir);
              } else
                it("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vl(ir, R);
        }
        if (In.call(B, "key")) {
          var qa = Ne(R), tt = Object.keys(B).filter(function(nu) {
            return nu !== "key";
          }), at = tt.length > 0 ? "{key: someKey, " + tt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!kr[qa + at]) {
            var Xa = tt.length > 0 ? "{" + tt.join(": ..., ") + ": ...}" : "{}";
            it(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, at, qa, Xa, qa), kr[qa + at] = !0;
          }
        }
        return R === Ze ? _r(cn) : tu(cn), cn;
      }
    }
    function di(R, B, ue) {
      return ar(R, B, ue, !0);
    }
    function Qa(R, B, ue) {
      return ar(R, B, ue, !1);
    }
    var pi = Qa, vi = di;
    Jp.Fragment = Ze, Jp.jsx = pi, Jp.jsxs = vi;
  }()), Jp;
}
process.env.NODE_ENV === "production" ? pE.exports = Z_() : pE.exports = ek();
var be = pE.exports, hE = { exports: {} }, Ia = {}, Wm = { exports: {} }, cE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function tk() {
  return tT || (tT = 1, function(Q) {
    function G(ee, Te) {
      var ie = ee.length;
      ee.push(Te);
      e: for (; 0 < ie; ) {
        var _ = ie - 1 >>> 1, P = ee[_];
        if (0 < Ge(P, Te)) ee[_] = Te, ee[ie] = P, ie = _;
        else break e;
      }
    }
    function A(ee) {
      return ee.length === 0 ? null : ee[0];
    }
    function Ze(ee) {
      if (ee.length === 0) return null;
      var Te = ee[0], ie = ee.pop();
      if (ie !== Te) {
        ee[0] = ie;
        e: for (var _ = 0, P = ee.length, $e = P >>> 1; _ < $e; ) {
          var Ve = 2 * (_ + 1) - 1, ft = ee[Ve], ut = Ve + 1, rt = ee[ut];
          if (0 > Ge(ft, ie)) ut < P && 0 > Ge(rt, ft) ? (ee[_] = rt, ee[ut] = ie, _ = ut) : (ee[_] = ft, ee[Ve] = ie, _ = Ve);
          else if (ut < P && 0 > Ge(rt, ie)) ee[_] = rt, ee[ut] = ie, _ = ut;
          else break e;
        }
      }
      return Te;
    }
    function Ge(ee, Te) {
      var ie = ee.sortIndex - Te.sortIndex;
      return ie !== 0 ? ie : ee.id - Te.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Fe = performance;
      Q.unstable_now = function() {
        return Fe.now();
      };
    } else {
      var S = Date, gt = S.now();
      Q.unstable_now = function() {
        return S.now() - gt;
      };
    }
    var ne = [], te = [], ke = 1, J = null, me = 3, q = !1, De = !1, We = !1, Me = typeof setTimeout == "function" ? setTimeout : null, Zt = typeof clearTimeout == "function" ? clearTimeout : null, it = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ae(ee) {
      for (var Te = A(te); Te !== null; ) {
        if (Te.callback === null) Ze(te);
        else if (Te.startTime <= ee) Ze(te), Te.sortIndex = Te.expirationTime, G(ne, Te);
        else break;
        Te = A(te);
      }
    }
    function ht(ee) {
      if (We = !1, Ae(ee), !De) if (A(ne) !== null) De = !0, Ot(Ce);
      else {
        var Te = A(te);
        Te !== null && Re(ht, Te.startTime - ee);
      }
    }
    function Ce(ee, Te) {
      De = !1, We && (We = !1, Zt(un), un = -1), q = !0;
      var ie = me;
      try {
        for (Ae(Te), J = A(ne); J !== null && (!(J.expirationTime > Te) || ee && !on()); ) {
          var _ = J.callback;
          if (typeof _ == "function") {
            J.callback = null, me = J.priorityLevel;
            var P = _(J.expirationTime <= Te);
            Te = Q.unstable_now(), typeof P == "function" ? J.callback = P : J === A(ne) && Ze(ne), Ae(Te);
          } else Ze(ne);
          J = A(ne);
        }
        if (J !== null) var $e = !0;
        else {
          var Ve = A(te);
          Ve !== null && Re(ht, Ve.startTime - Te), $e = !1;
        }
        return $e;
      } finally {
        J = null, me = ie, q = !1;
      }
    }
    var lt = !1, Ie = null, un = -1, Ht = 5, en = -1;
    function on() {
      return !(Q.unstable_now() - en < Ht);
    }
    function _t() {
      if (Ie !== null) {
        var ee = Q.unstable_now();
        en = ee;
        var Te = !0;
        try {
          Te = Ie(!0, ee);
        } finally {
          Te ? Ne() : (lt = !1, Ie = null);
        }
      } else lt = !1;
    }
    var Ne;
    if (typeof it == "function") Ne = function() {
      it(_t);
    };
    else if (typeof MessageChannel < "u") {
      var jt = new MessageChannel(), kt = jt.port2;
      jt.port1.onmessage = _t, Ne = function() {
        kt.postMessage(null);
      };
    } else Ne = function() {
      Me(_t, 0);
    };
    function Ot(ee) {
      Ie = ee, lt || (lt = !0, Ne());
    }
    function Re(ee, Te) {
      un = Me(function() {
        ee(Q.unstable_now());
      }, Te);
    }
    Q.unstable_IdlePriority = 5, Q.unstable_ImmediatePriority = 1, Q.unstable_LowPriority = 4, Q.unstable_NormalPriority = 3, Q.unstable_Profiling = null, Q.unstable_UserBlockingPriority = 2, Q.unstable_cancelCallback = function(ee) {
      ee.callback = null;
    }, Q.unstable_continueExecution = function() {
      De || q || (De = !0, Ot(Ce));
    }, Q.unstable_forceFrameRate = function(ee) {
      0 > ee || 125 < ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ht = 0 < ee ? Math.floor(1e3 / ee) : 5;
    }, Q.unstable_getCurrentPriorityLevel = function() {
      return me;
    }, Q.unstable_getFirstCallbackNode = function() {
      return A(ne);
    }, Q.unstable_next = function(ee) {
      switch (me) {
        case 1:
        case 2:
        case 3:
          var Te = 3;
          break;
        default:
          Te = me;
      }
      var ie = me;
      me = Te;
      try {
        return ee();
      } finally {
        me = ie;
      }
    }, Q.unstable_pauseExecution = function() {
    }, Q.unstable_requestPaint = function() {
    }, Q.unstable_runWithPriority = function(ee, Te) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ee = 3;
      }
      var ie = me;
      me = ee;
      try {
        return Te();
      } finally {
        me = ie;
      }
    }, Q.unstable_scheduleCallback = function(ee, Te, ie) {
      var _ = Q.unstable_now();
      switch (typeof ie == "object" && ie !== null ? (ie = ie.delay, ie = typeof ie == "number" && 0 < ie ? _ + ie : _) : ie = _, ee) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = ie + P, ee = { id: ke++, callback: Te, priorityLevel: ee, startTime: ie, expirationTime: P, sortIndex: -1 }, ie > _ ? (ee.sortIndex = ie, G(te, ee), A(ne) === null && ee === A(te) && (We ? (Zt(un), un = -1) : We = !0, Re(ht, ie - _))) : (ee.sortIndex = P, G(ne, ee), De || q || (De = !0, Ot(Ce))), ee;
    }, Q.unstable_shouldYield = on, Q.unstable_wrapCallback = function(ee) {
      var Te = me;
      return function() {
        var ie = me;
        me = Te;
        try {
          return ee.apply(this, arguments);
        } finally {
          me = ie;
        }
      };
    };
  }(cE)), cE;
}
var fE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nT;
function nk() {
  return nT || (nT = 1, function(Q) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var G = !1, A = 5;
      function Ze(re, xe) {
        var st = re.length;
        re.push(xe), S(re, xe, st);
      }
      function Ge(re) {
        return re.length === 0 ? null : re[0];
      }
      function Fe(re) {
        if (re.length === 0)
          return null;
        var xe = re[0], st = re.pop();
        return st !== xe && (re[0] = st, gt(re, st, 0)), xe;
      }
      function S(re, xe, st) {
        for (var Ft = st; Ft > 0; ) {
          var tn = Ft - 1 >>> 1, hn = re[tn];
          if (ne(hn, xe) > 0)
            re[tn] = xe, re[Ft] = hn, Ft = tn;
          else
            return;
        }
      }
      function gt(re, xe, st) {
        for (var Ft = st, tn = re.length, hn = tn >>> 1; Ft < hn; ) {
          var sn = (Ft + 1) * 2 - 1, Kn = re[sn], nn = sn + 1, It = re[nn];
          if (ne(Kn, xe) < 0)
            nn < tn && ne(It, Kn) < 0 ? (re[Ft] = It, re[nn] = xe, Ft = nn) : (re[Ft] = Kn, re[sn] = xe, Ft = sn);
          else if (nn < tn && ne(It, xe) < 0)
            re[Ft] = It, re[nn] = xe, Ft = nn;
          else
            return;
        }
      }
      function ne(re, xe) {
        var st = re.sortIndex - xe.sortIndex;
        return st !== 0 ? st : re.id - xe.id;
      }
      var te = 1, ke = 2, J = 3, me = 4, q = 5;
      function De(re, xe) {
      }
      var We = typeof performance == "object" && typeof performance.now == "function";
      if (We) {
        var Me = performance;
        Q.unstable_now = function() {
          return Me.now();
        };
      } else {
        var Zt = Date, it = Zt.now();
        Q.unstable_now = function() {
          return Zt.now() - it;
        };
      }
      var Ae = 1073741823, ht = -1, Ce = 250, lt = 5e3, Ie = 1e4, un = Ae, Ht = [], en = [], on = 1, _t = null, Ne = J, jt = !1, kt = !1, Ot = !1, Re = typeof setTimeout == "function" ? setTimeout : null, ee = typeof clearTimeout == "function" ? clearTimeout : null, Te = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ie(re) {
        for (var xe = Ge(en); xe !== null; ) {
          if (xe.callback === null)
            Fe(en);
          else if (xe.startTime <= re)
            Fe(en), xe.sortIndex = xe.expirationTime, Ze(Ht, xe);
          else
            return;
          xe = Ge(en);
        }
      }
      function _(re) {
        if (Ot = !1, ie(re), !kt)
          if (Ge(Ht) !== null)
            kt = !0, Mn(P);
          else {
            var xe = Ge(en);
            xe !== null && Er(_, xe.startTime - re);
          }
      }
      function P(re, xe) {
        kt = !1, Ot && (Ot = !1, ca()), jt = !0;
        var st = Ne;
        try {
          var Ft;
          if (!G) return $e(re, xe);
        } finally {
          _t = null, Ne = st, jt = !1;
        }
      }
      function $e(re, xe) {
        var st = xe;
        for (ie(st), _t = Ge(Ht); _t !== null && !(_t.expirationTime > st && (!re || ci())); ) {
          var Ft = _t.callback;
          if (typeof Ft == "function") {
            _t.callback = null, Ne = _t.priorityLevel;
            var tn = _t.expirationTime <= st, hn = Ft(tn);
            st = Q.unstable_now(), typeof hn == "function" ? _t.callback = hn : _t === Ge(Ht) && Fe(Ht), ie(st);
          } else
            Fe(Ht);
          _t = Ge(Ht);
        }
        if (_t !== null)
          return !0;
        var sn = Ge(en);
        return sn !== null && Er(_, sn.startTime - st), !1;
      }
      function Ve(re, xe) {
        switch (re) {
          case te:
          case ke:
          case J:
          case me:
          case q:
            break;
          default:
            re = J;
        }
        var st = Ne;
        Ne = re;
        try {
          return xe();
        } finally {
          Ne = st;
        }
      }
      function ft(re) {
        var xe;
        switch (Ne) {
          case te:
          case ke:
          case J:
            xe = J;
            break;
          default:
            xe = Ne;
            break;
        }
        var st = Ne;
        Ne = xe;
        try {
          return re();
        } finally {
          Ne = st;
        }
      }
      function ut(re) {
        var xe = Ne;
        return function() {
          var st = Ne;
          Ne = xe;
          try {
            return re.apply(this, arguments);
          } finally {
            Ne = st;
          }
        };
      }
      function rt(re, xe, st) {
        var Ft = Q.unstable_now(), tn;
        if (typeof st == "object" && st !== null) {
          var hn = st.delay;
          typeof hn == "number" && hn > 0 ? tn = Ft + hn : tn = Ft;
        } else
          tn = Ft;
        var sn;
        switch (re) {
          case te:
            sn = ht;
            break;
          case ke:
            sn = Ce;
            break;
          case q:
            sn = un;
            break;
          case me:
            sn = Ie;
            break;
          case J:
          default:
            sn = lt;
            break;
        }
        var Kn = tn + sn, nn = {
          id: on++,
          callback: xe,
          priorityLevel: re,
          startTime: tn,
          expirationTime: Kn,
          sortIndex: -1
        };
        return tn > Ft ? (nn.sortIndex = tn, Ze(en, nn), Ge(Ht) === null && nn === Ge(en) && (Ot ? ca() : Ot = !0, Er(_, tn - Ft))) : (nn.sortIndex = Kn, Ze(Ht, nn), !kt && !jt && (kt = !0, Mn(P))), nn;
      }
      function ot() {
      }
      function dt() {
        !kt && !jt && (kt = !0, Mn(P));
      }
      function Bt() {
        return Ge(Ht);
      }
      function Ln(re) {
        re.callback = null;
      }
      function br() {
        return Ne;
      }
      var Rn = !1, rr = null, Bn = -1, In = A, Yr = -1;
      function ci() {
        var re = Q.unstable_now() - Yr;
        return !(re < In);
      }
      function sa() {
      }
      function Xn(re) {
        if (re < 0 || re > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        re > 0 ? In = Math.floor(1e3 / re) : In = A;
      }
      var Tn = function() {
        if (rr !== null) {
          var re = Q.unstable_now();
          Yr = re;
          var xe = !0, st = !0;
          try {
            st = rr(xe, re);
          } finally {
            st ? $n() : (Rn = !1, rr = null);
          }
        } else
          Rn = !1;
      }, $n;
      if (typeof Te == "function")
        $n = function() {
          Te(Tn);
        };
      else if (typeof MessageChannel < "u") {
        var Sr = new MessageChannel(), Ya = Sr.port2;
        Sr.port1.onmessage = Tn, $n = function() {
          Ya.postMessage(null);
        };
      } else
        $n = function() {
          Re(Tn, 0);
        };
      function Mn(re) {
        rr = re, Rn || (Rn = !0, $n());
      }
      function Er(re, xe) {
        Bn = Re(function() {
          re(Q.unstable_now());
        }, xe);
      }
      function ca() {
        ee(Bn), Bn = -1;
      }
      var Wa = sa, fi = null;
      Q.unstable_IdlePriority = q, Q.unstable_ImmediatePriority = te, Q.unstable_LowPriority = me, Q.unstable_NormalPriority = J, Q.unstable_Profiling = fi, Q.unstable_UserBlockingPriority = ke, Q.unstable_cancelCallback = Ln, Q.unstable_continueExecution = dt, Q.unstable_forceFrameRate = Xn, Q.unstable_getCurrentPriorityLevel = br, Q.unstable_getFirstCallbackNode = Bt, Q.unstable_next = ft, Q.unstable_pauseExecution = ot, Q.unstable_requestPaint = Wa, Q.unstable_runWithPriority = Ve, Q.unstable_scheduleCallback = rt, Q.unstable_shouldYield = ci, Q.unstable_wrapCallback = ut, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(fE)), fE;
}
var rT;
function uT() {
  return rT || (rT = 1, process.env.NODE_ENV === "production" ? Wm.exports = tk() : Wm.exports = nk()), Wm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aT;
function rk() {
  if (aT) return Ia;
  aT = 1;
  var Q = Jt, G = uT();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ze = /* @__PURE__ */ new Set(), Ge = {};
  function Fe(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (Ge[n] = r, n = 0; n < r.length; n++) Ze.add(r[n]);
  }
  var gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ne = Object.prototype.hasOwnProperty, te = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ke = {}, J = {};
  function me(n) {
    return ne.call(J, n) ? !0 : ne.call(ke, n) ? !1 : te.test(n) ? J[n] = !0 : (ke[n] = !0, !1);
  }
  function q(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function De(n, r, l, o) {
    if (r === null || typeof r > "u" || q(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function We(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var Me = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Me[n] = new We(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Me[r] = new We(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Me[n] = new We(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Me[n] = new We(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Me[n] = new We(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Me[n] = new We(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Me[n] = new We(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Me[n] = new We(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Me[n] = new We(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Zt = /[\-:]([a-z])/g;
  function it(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Zt,
      it
    );
    Me[r] = new We(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Zt, it);
    Me[r] = new We(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Zt, it);
    Me[r] = new We(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Me[n] = new We(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Me.xlinkHref = new We("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Me[n] = new We(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ae(n, r, l, o) {
    var c = Me.hasOwnProperty(r) ? Me[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (De(r, l, c, o) && (l = null), o || c === null ? me(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ht = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ce = Symbol.for("react.element"), lt = Symbol.for("react.portal"), Ie = Symbol.for("react.fragment"), un = Symbol.for("react.strict_mode"), Ht = Symbol.for("react.profiler"), en = Symbol.for("react.provider"), on = Symbol.for("react.context"), _t = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), jt = Symbol.for("react.suspense_list"), kt = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), Re = Symbol.for("react.offscreen"), ee = Symbol.iterator;
  function Te(n) {
    return n === null || typeof n != "object" ? null : (n = ee && n[ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ie = Object.assign, _;
  function P(n) {
    if (_ === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      _ = r && r[1] || "";
    }
    return `
` + _ + n;
  }
  var $e = !1;
  function Ve(n, r) {
    if (!n || $e) return "";
    $e = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (z) {
          var o = z;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (z) {
          o = z;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      $e = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? P(n) : "";
  }
  function ft(n) {
    switch (n.tag) {
      case 5:
        return P(n.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ve(n.type, !1), n;
      case 11:
        return n = Ve(n.type.render, !1), n;
      case 1:
        return n = Ve(n.type, !0), n;
      default:
        return "";
    }
  }
  function ut(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Ie:
        return "Fragment";
      case lt:
        return "Portal";
      case Ht:
        return "Profiler";
      case un:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case jt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case on:
        return (n.displayName || "Context") + ".Consumer";
      case en:
        return (n._context.displayName || "Context") + ".Provider";
      case _t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case kt:
        return r = n.displayName || null, r !== null ? r : ut(n.type) || "Memo";
      case Ot:
        r = n._payload, n = n._init;
        try {
          return ut(n(r));
        } catch {
        }
    }
    return null;
  }
  function rt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ut(r);
      case 8:
        return r === un ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function ot(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function dt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Bt(n) {
    var r = dt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Ln(n) {
    n._valueTracker || (n._valueTracker = Bt(n));
  }
  function br(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = dt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Rn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function rr(n, r) {
    var l = r.checked;
    return ie({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Bn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = ot(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function In(n, r) {
    r = r.checked, r != null && Ae(n, "checked", r, !1);
  }
  function Yr(n, r) {
    In(n, r);
    var l = ot(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? sa(n, r.type, l) : r.hasOwnProperty("defaultValue") && sa(n, r.type, ot(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ci(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function sa(n, r, l) {
    (r !== "number" || Rn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Xn = Array.isArray;
  function Tn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ot(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function $n(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(A(91));
    return ie({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Sr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(A(92));
        if (Xn(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ot(l) };
  }
  function Ya(n, r) {
    var l = ot(r.value), o = ot(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Mn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Er(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ca(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Er(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Wa, fi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Wa = Wa || document.createElement("div"), Wa.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Wa.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function re(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var xe = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, st = ["Webkit", "ms", "Moz", "O"];
  Object.keys(xe).forEach(function(n) {
    st.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), xe[r] = xe[n];
    });
  });
  function Ft(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || xe.hasOwnProperty(n) && xe[n] ? ("" + r).trim() : r + "px";
  }
  function tn(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ft(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var hn = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function sn(n, r) {
    if (r) {
      if (hn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(A(62));
    }
  }
  function Kn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var nn = null;
  function It(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var $t = null, fa = null, Cr = null;
  function xa(n) {
    if (n = Oe(n)) {
      if (typeof $t != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = yn(r), $t(n.stateNode, n.type, r));
    }
  }
  function Hi(n) {
    fa ? Cr ? Cr.push(n) : Cr = [n] : fa = n;
  }
  function Zl() {
    if (fa) {
      var n = fa, r = Cr;
      if (Cr = fa = null, xa(n), r) for (n = 0; n < r.length; n++) xa(r[n]);
    }
  }
  function eu(n, r) {
    return n(r);
  }
  function pl() {
  }
  var vl = !1;
  function tu(n, r, l) {
    if (vl) return n(r, l);
    vl = !0;
    try {
      return eu(n, r, l);
    } finally {
      vl = !1, (fa !== null || Cr !== null) && (pl(), Zl());
    }
  }
  function _r(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = yn(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(A(231, r, typeof l));
    return l;
  }
  var kr = !1;
  if (gt) try {
    var ar = {};
    Object.defineProperty(ar, "passive", { get: function() {
      kr = !0;
    } }), window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar);
  } catch {
    kr = !1;
  }
  function di(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (Y) {
      this.onError(Y);
    }
  }
  var Qa = !1, pi = null, vi = !1, R = null, B = { onError: function(n) {
    Qa = !0, pi = n;
  } };
  function ue(n, r, l, o, c, d, m, E, T) {
    Qa = !1, pi = null, di.apply(B, arguments);
  }
  function he(n, r, l, o, c, d, m, E, T) {
    if (ue.apply(this, arguments), Qa) {
      if (Qa) {
        var z = pi;
        Qa = !1, pi = null;
      } else throw Error(A(198));
      vi || (vi = !0, R = z);
    }
  }
  function et(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Xe(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function mt(n) {
    if (et(n) !== n) throw Error(A(188));
  }
  function pt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = et(n), r === null) throw Error(A(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return mt(c), n;
          if (d === o) return mt(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(A(189));
        }
      }
      if (l.alternate !== o) throw Error(A(190));
    }
    if (l.tag !== 3) throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function xn(n) {
    return n = pt(n), n !== null ? rn(n) : null;
  }
  function rn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = rn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var cn = G.unstable_scheduleCallback, ir = G.unstable_cancelCallback, Ga = G.unstable_shouldYield, qa = G.unstable_requestPaint, tt = G.unstable_now, at = G.unstable_getCurrentPriorityLevel, Xa = G.unstable_ImmediatePriority, nu = G.unstable_UserBlockingPriority, ru = G.unstable_NormalPriority, hl = G.unstable_LowPriority, Qu = G.unstable_IdlePriority, ml = null, Wr = null;
  function Yo(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(ml, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Dr = Math.clz32 ? Math.clz32 : Gu, lc = Math.log, uc = Math.LN2;
  function Gu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (lc(n) / uc | 0) | 0;
  }
  var yl = 64, da = 4194304;
  function Ka(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ja(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Ka(E) : (d &= m, d !== 0 && (o = Ka(d)));
    } else m = l & ~c, m !== 0 ? o = Ka(m) : d !== 0 && (o = Ka(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Dr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function qu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function au(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Dr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = qu(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function gl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Xu() {
    var n = yl;
    return yl <<= 1, !(yl & 4194240) && (yl = 64), n;
  }
  function Ku(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Pi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Dr(r), n[r] = l;
  }
  function Wf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Dr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Vi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Dr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Lt = 0;
  function Ju(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var wt, Wo, hi, qe, Zu, lr = !1, mi = [], Or = null, yi = null, fn = null, Yt = /* @__PURE__ */ new Map(), Sl = /* @__PURE__ */ new Map(), Yn = [], Lr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function wa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Or = null;
        break;
      case "dragenter":
      case "dragleave":
        yi = null;
        break;
      case "mouseover":
      case "mouseout":
        fn = null;
        break;
      case "pointerover":
      case "pointerout":
        Yt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Sl.delete(r.pointerId);
    }
  }
  function iu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Oe(r), r !== null && Wo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Qo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Or = iu(Or, n, r, l, o, c), !0;
      case "dragenter":
        return yi = iu(yi, n, r, l, o, c), !0;
      case "mouseover":
        return fn = iu(fn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Yt.set(d, iu(Yt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Sl.set(d, iu(Sl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Go(n) {
    var r = vu(n.target);
    if (r !== null) {
      var l = et(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Xe(l), r !== null) {
            n.blockedOn = r, Zu(n.priority, function() {
              hi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function El(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = no(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        nn = o, l.target.dispatchEvent(o), nn = null;
      } else return r = Oe(l), r !== null && Wo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function lu(n, r, l) {
    El(n) && l.delete(r);
  }
  function Qf() {
    lr = !1, Or !== null && El(Or) && (Or = null), yi !== null && El(yi) && (yi = null), fn !== null && El(fn) && (fn = null), Yt.forEach(lu), Sl.forEach(lu);
  }
  function ba(n, r) {
    n.blockedOn === r && (n.blockedOn = null, lr || (lr = !0, G.unstable_scheduleCallback(G.unstable_NormalPriority, Qf)));
  }
  function Za(n) {
    function r(c) {
      return ba(c, n);
    }
    if (0 < mi.length) {
      ba(mi[0], n);
      for (var l = 1; l < mi.length; l++) {
        var o = mi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Or !== null && ba(Or, n), yi !== null && ba(yi, n), fn !== null && ba(fn, n), Yt.forEach(r), Sl.forEach(r), l = 0; l < Yn.length; l++) o = Yn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Yn.length && (l = Yn[0], l.blockedOn === null); ) Go(l), l.blockedOn === null && Yn.shift();
  }
  var gi = ht.ReactCurrentBatchConfig, _a = !0;
  function eo(n, r, l, o) {
    var c = Lt, d = gi.transition;
    gi.transition = null;
    try {
      Lt = 1, Cl(n, r, l, o);
    } finally {
      Lt = c, gi.transition = d;
    }
  }
  function to(n, r, l, o) {
    var c = Lt, d = gi.transition;
    gi.transition = null;
    try {
      Lt = 4, Cl(n, r, l, o);
    } finally {
      Lt = c, gi.transition = d;
    }
  }
  function Cl(n, r, l, o) {
    if (_a) {
      var c = no(n, r, l, o);
      if (c === null) Sc(n, r, o, uu, l), wa(n, o);
      else if (Qo(c, n, r, l, o)) o.stopPropagation();
      else if (wa(n, o), r & 4 && -1 < Lr.indexOf(n)) {
        for (; c !== null; ) {
          var d = Oe(c);
          if (d !== null && wt(d), d = no(n, r, l, o), d === null && Sc(n, r, o, uu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Sc(n, r, o, null, l);
    }
  }
  var uu = null;
  function no(n, r, l, o) {
    if (uu = null, n = It(o), n = vu(n), n !== null) if (r = et(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Xe(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return uu = n, null;
  }
  function ro(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (at()) {
          case Xa:
            return 1;
          case nu:
            return 4;
          case ru:
          case hl:
            return 16;
          case Qu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ei = null, h = null, C = null;
  function N() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in ei ? ei.value : ei.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function j(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Z() {
    return !0;
  }
  function ze() {
    return !1;
  }
  function le(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Z : ze, this.isPropagationStopped = ze, this;
    }
    return ie(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Z);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Z);
    }, persist: function() {
    }, isPersistent: Z }), r;
  }
  var He = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, yt = le(He), bt = ie({}, He, { view: 0, detail: 0 }), an = le(bt), Wt, ct, Qt, mn = ie({}, bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Jf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Qt && (Qt && n.type === "mousemove" ? (Wt = n.screenX - Qt.screenX, ct = n.screenY - Qt.screenY) : ct = Wt = 0, Qt = n), Wt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : ct;
  } }), Rl = le(mn), qo = ie({}, mn, { dataTransfer: 0 }), Bi = le(qo), Xo = ie({}, bt, { relatedTarget: 0 }), ou = le(Xo), Gf = ie({}, He, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oc = le(Gf), qf = ie({}, He, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), tv = le(qf), Xf = ie({}, He, { data: 0 }), Kf = le(Xf), nv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, rv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Gm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ii(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Gm[n]) ? !!r[n] : !1;
  }
  function Jf() {
    return Ii;
  }
  var Zf = ie({}, bt, { key: function(n) {
    if (n.key) {
      var r = nv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = j(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? rv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Jf, charCode: function(n) {
    return n.type === "keypress" ? j(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? j(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ed = le(Zf), td = ie({}, mn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), av = le(td), sc = ie({}, bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Jf }), iv = le(sc), Qr = ie({}, He, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $i = le(Qr), Nn = ie({}, mn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yi = le(Nn), nd = [9, 13, 27, 32], ao = gt && "CompositionEvent" in window, Ko = null;
  gt && "documentMode" in document && (Ko = document.documentMode);
  var Jo = gt && "TextEvent" in window && !Ko, lv = gt && (!ao || Ko && 8 < Ko && 11 >= Ko), uv = " ", cc = !1;
  function ov(n, r) {
    switch (n) {
      case "keyup":
        return nd.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function sv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var io = !1;
  function cv(n, r) {
    switch (n) {
      case "compositionend":
        return sv(r);
      case "keypress":
        return r.which !== 32 ? null : (cc = !0, uv);
      case "textInput":
        return n = r.data, n === uv && cc ? null : n;
      default:
        return null;
    }
  }
  function qm(n, r) {
    if (io) return n === "compositionend" || !ao && ov(n, r) ? (n = N(), C = h = ei = null, io = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return lv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Xm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function fv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Xm[n.type] : r === "textarea";
  }
  function rd(n, r, l, o) {
    Hi(o), r = as(r, "onChange"), 0 < r.length && (l = new yt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Si = null, su = null;
  function dv(n) {
    du(n, 0);
  }
  function Zo(n) {
    var r = ni(n);
    if (br(r)) return n;
  }
  function Km(n, r) {
    if (n === "change") return r;
  }
  var pv = !1;
  if (gt) {
    var ad;
    if (gt) {
      var id = "oninput" in document;
      if (!id) {
        var vv = document.createElement("div");
        vv.setAttribute("oninput", "return;"), id = typeof vv.oninput == "function";
      }
      ad = id;
    } else ad = !1;
    pv = ad && (!document.documentMode || 9 < document.documentMode);
  }
  function hv() {
    Si && (Si.detachEvent("onpropertychange", mv), su = Si = null);
  }
  function mv(n) {
    if (n.propertyName === "value" && Zo(su)) {
      var r = [];
      rd(r, su, n, It(n)), tu(dv, r);
    }
  }
  function Jm(n, r, l) {
    n === "focusin" ? (hv(), Si = r, su = l, Si.attachEvent("onpropertychange", mv)) : n === "focusout" && hv();
  }
  function yv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zo(su);
  }
  function Zm(n, r) {
    if (n === "click") return Zo(r);
  }
  function gv(n, r) {
    if (n === "input" || n === "change") return Zo(r);
  }
  function ey(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ti = typeof Object.is == "function" ? Object.is : ey;
  function es(n, r) {
    if (ti(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ne.call(r, c) || !ti(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Sv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function fc(n, r) {
    var l = Sv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Sv(l);
    }
  }
  function Tl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Tl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ts() {
    for (var n = window, r = Rn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Rn(n.document);
    }
    return r;
  }
  function dc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function lo(n) {
    var r = ts(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Tl(l.ownerDocument.documentElement, l)) {
      if (o !== null && dc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = fc(l, d);
          var m = fc(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var ty = gt && "documentMode" in document && 11 >= document.documentMode, uo = null, ld = null, ns = null, ud = !1;
  function od(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ud || uo == null || uo !== Rn(o) || (o = uo, "selectionStart" in o && dc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ns && es(ns, o) || (ns = o, o = as(ld, "onSelect"), 0 < o.length && (r = new yt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = uo)));
  }
  function pc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var cu = { animationend: pc("Animation", "AnimationEnd"), animationiteration: pc("Animation", "AnimationIteration"), animationstart: pc("Animation", "AnimationStart"), transitionend: pc("Transition", "TransitionEnd") }, ur = {}, sd = {};
  gt && (sd = document.createElement("div").style, "AnimationEvent" in window || (delete cu.animationend.animation, delete cu.animationiteration.animation, delete cu.animationstart.animation), "TransitionEvent" in window || delete cu.transitionend.transition);
  function vc(n) {
    if (ur[n]) return ur[n];
    if (!cu[n]) return n;
    var r = cu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in sd) return ur[n] = r[l];
    return n;
  }
  var Ev = vc("animationend"), Cv = vc("animationiteration"), Rv = vc("animationstart"), Tv = vc("transitionend"), cd = /* @__PURE__ */ new Map(), hc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ka(n, r) {
    cd.set(n, r), Fe(r, [n]);
  }
  for (var fd = 0; fd < hc.length; fd++) {
    var fu = hc[fd], ny = fu.toLowerCase(), ry = fu[0].toUpperCase() + fu.slice(1);
    ka(ny, "on" + ry);
  }
  ka(Ev, "onAnimationEnd"), ka(Cv, "onAnimationIteration"), ka(Rv, "onAnimationStart"), ka("dblclick", "onDoubleClick"), ka("focusin", "onFocus"), ka("focusout", "onBlur"), ka(Tv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), Fe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Fe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Fe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Fe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Fe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Fe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dd = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, he(o, r, void 0, n), n.currentTarget = null;
  }
  function du(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, z = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, z), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, z), d = T;
        }
      }
    }
    if (vi) throw n = R, vi = !1, R = null, n;
  }
  function Pt(n, r) {
    var l = r[us];
    l === void 0 && (l = r[us] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (xv(r, n, 2, !1), l.add(o));
  }
  function yc(n, r, l) {
    var o = 0;
    r && (o |= 4), xv(l, n, o, r);
  }
  var gc = "_reactListening" + Math.random().toString(36).slice(2);
  function oo(n) {
    if (!n[gc]) {
      n[gc] = !0, Ze.forEach(function(l) {
        l !== "selectionchange" && (dd.has(l) || yc(l, !1, n), yc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[gc] || (r[gc] = !0, yc("selectionchange", !1, r));
    }
  }
  function xv(n, r, l, o) {
    switch (ro(r)) {
      case 1:
        var c = eo;
        break;
      case 4:
        c = to;
        break;
      default:
        c = Cl;
    }
    l = c.bind(null, r, l, n), c = void 0, !kr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Sc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = vu(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    tu(function() {
      var z = d, Y = It(l), X = [];
      e: {
        var $ = cd.get(n);
        if ($ !== void 0) {
          var fe = yt, ye = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0) break e;
            case "keydown":
            case "keyup":
              fe = ed;
              break;
            case "focusin":
              ye = "focus", fe = ou;
              break;
            case "focusout":
              ye = "blur", fe = ou;
              break;
            case "beforeblur":
            case "afterblur":
              fe = ou;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              fe = Rl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              fe = Bi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              fe = iv;
              break;
            case Ev:
            case Cv:
            case Rv:
              fe = oc;
              break;
            case Tv:
              fe = $i;
              break;
            case "scroll":
              fe = an;
              break;
            case "wheel":
              fe = Yi;
              break;
            case "copy":
            case "cut":
            case "paste":
              fe = tv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              fe = av;
          }
          var Ee = (r & 4) !== 0, Dn = !Ee && n === "scroll", k = Ee ? $ !== null ? $ + "Capture" : null : $;
          Ee = [];
          for (var w = z, L; w !== null; ) {
            L = w;
            var W = L.stateNode;
            if (L.tag === 5 && W !== null && (L = W, k !== null && (W = _r(w, k), W != null && Ee.push(so(w, W, L)))), Dn) break;
            w = w.return;
          }
          0 < Ee.length && ($ = new fe($, ye, null, l, Y), X.push({ event: $, listeners: Ee }));
        }
      }
      if (!(r & 7)) {
        e: {
          if ($ = n === "mouseover" || n === "pointerover", fe = n === "mouseout" || n === "pointerout", $ && l !== nn && (ye = l.relatedTarget || l.fromElement) && (vu(ye) || ye[Wi])) break e;
          if ((fe || $) && ($ = Y.window === Y ? Y : ($ = Y.ownerDocument) ? $.defaultView || $.parentWindow : window, fe ? (ye = l.relatedTarget || l.toElement, fe = z, ye = ye ? vu(ye) : null, ye !== null && (Dn = et(ye), ye !== Dn || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (fe = null, ye = z), fe !== ye)) {
            if (Ee = Rl, W = "onMouseLeave", k = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = av, W = "onPointerLeave", k = "onPointerEnter", w = "pointer"), Dn = fe == null ? $ : ni(fe), L = ye == null ? $ : ni(ye), $ = new Ee(W, w + "leave", fe, l, Y), $.target = Dn, $.relatedTarget = L, W = null, vu(Y) === z && (Ee = new Ee(k, w + "enter", ye, l, Y), Ee.target = L, Ee.relatedTarget = Dn, W = Ee), Dn = W, fe && ye) t: {
              for (Ee = fe, k = ye, w = 0, L = Ee; L; L = xl(L)) w++;
              for (L = 0, W = k; W; W = xl(W)) L++;
              for (; 0 < w - L; ) Ee = xl(Ee), w--;
              for (; 0 < L - w; ) k = xl(k), L--;
              for (; w--; ) {
                if (Ee === k || k !== null && Ee === k.alternate) break t;
                Ee = xl(Ee), k = xl(k);
              }
              Ee = null;
            }
            else Ee = null;
            fe !== null && wv(X, $, fe, Ee, !1), ye !== null && Dn !== null && wv(X, Dn, ye, Ee, !0);
          }
        }
        e: {
          if ($ = z ? ni(z) : window, fe = $.nodeName && $.nodeName.toLowerCase(), fe === "select" || fe === "input" && $.type === "file") var ge = Km;
          else if (fv($)) if (pv) ge = gv;
          else {
            ge = yv;
            var je = Jm;
          }
          else (fe = $.nodeName) && fe.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (ge = Zm);
          if (ge && (ge = ge(n, z))) {
            rd(X, ge, l, Y);
            break e;
          }
          je && je(n, $, z), n === "focusout" && (je = $._wrapperState) && je.controlled && $.type === "number" && sa($, "number", $.value);
        }
        switch (je = z ? ni(z) : window, n) {
          case "focusin":
            (fv(je) || je.contentEditable === "true") && (uo = je, ld = z, ns = null);
            break;
          case "focusout":
            ns = ld = uo = null;
            break;
          case "mousedown":
            ud = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ud = !1, od(X, l, Y);
            break;
          case "selectionchange":
            if (ty) break;
          case "keydown":
          case "keyup":
            od(X, l, Y);
        }
        var Pe;
        if (ao) e: {
          switch (n) {
            case "compositionstart":
              var Qe = "onCompositionStart";
              break e;
            case "compositionend":
              Qe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Qe = "onCompositionUpdate";
              break e;
          }
          Qe = void 0;
        }
        else io ? ov(n, l) && (Qe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Qe = "onCompositionStart");
        Qe && (lv && l.locale !== "ko" && (io || Qe !== "onCompositionStart" ? Qe === "onCompositionEnd" && io && (Pe = N()) : (ei = Y, h = "value" in ei ? ei.value : ei.textContent, io = !0)), je = as(z, Qe), 0 < je.length && (Qe = new Kf(Qe, n, null, l, Y), X.push({ event: Qe, listeners: je }), Pe ? Qe.data = Pe : (Pe = sv(l), Pe !== null && (Qe.data = Pe)))), (Pe = Jo ? cv(n, l) : qm(n, l)) && (z = as(z, "onBeforeInput"), 0 < z.length && (Y = new Kf("onBeforeInput", "beforeinput", null, l, Y), X.push({ event: Y, listeners: z }), Y.data = Pe));
      }
      du(X, r);
    });
  }
  function so(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function as(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = _r(n, l), d != null && o.unshift(so(n, d, c)), d = _r(n, r), d != null && o.push(so(n, d, c))), n = n.return;
    }
    return o;
  }
  function xl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function wv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && z !== null && (E = z, c ? (T = _r(l, d), T != null && m.unshift(so(l, T, E))) : c || (T = _r(l, d), T != null && m.push(so(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var bv = /\r\n?/g, ay = /\u0000|\uFFFD/g;
  function _v(n) {
    return (typeof n == "string" ? n : "" + n).replace(bv, `
`).replace(ay, "");
  }
  function Ec(n, r, l) {
    if (r = _v(r), _v(n) !== r && l) throw Error(A(425));
  }
  function wl() {
  }
  var is = null, pu = null;
  function Cc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Rc = typeof setTimeout == "function" ? setTimeout : void 0, pd = typeof clearTimeout == "function" ? clearTimeout : void 0, kv = typeof Promise == "function" ? Promise : void 0, co = typeof queueMicrotask == "function" ? queueMicrotask : typeof kv < "u" ? function(n) {
    return kv.resolve(null).then(n).catch(Tc);
  } : Rc;
  function Tc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function fo(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Za(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Za(r);
  }
  function Ei(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Dv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var bl = Math.random().toString(36).slice(2), Ci = "__reactFiber$" + bl, ls = "__reactProps$" + bl, Wi = "__reactContainer$" + bl, us = "__reactEvents$" + bl, po = "__reactListeners$" + bl, iy = "__reactHandles$" + bl;
  function vu(n) {
    var r = n[Ci];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Wi] || l[Ci]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Dv(n); n !== null; ) {
          if (l = n[Ci]) return l;
          n = Dv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Oe(n) {
    return n = n[Ci] || n[Wi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ni(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function yn(n) {
    return n[ls] || null;
  }
  var Ct = [], Da = -1;
  function Oa(n) {
    return { current: n };
  }
  function ln(n) {
    0 > Da || (n.current = Ct[Da], Ct[Da] = null, Da--);
  }
  function _e(n, r) {
    Da++, Ct[Da] = n.current, n.current = r;
  }
  var Rr = {}, Cn = Oa(Rr), Wn = Oa(!1), Gr = Rr;
  function qr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Rr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function vo() {
    ln(Wn), ln(Cn);
  }
  function Ov(n, r, l) {
    if (Cn.current !== Rr) throw Error(A(168));
    _e(Cn, r), _e(Wn, l);
  }
  function os(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, rt(n) || "Unknown", c));
    return ie({}, l, o);
  }
  function Jn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Rr, Gr = Cn.current, _e(Cn, n), _e(Wn, Wn.current), !0;
  }
  function xc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = os(n, r, Gr), o.__reactInternalMemoizedMergedChildContext = n, ln(Wn), ln(Cn), _e(Cn, n)) : ln(Wn), _e(Wn, l);
  }
  var Ri = null, ho = !1, Qi = !1;
  function wc(n) {
    Ri === null ? Ri = [n] : Ri.push(n);
  }
  function _l(n) {
    ho = !0, wc(n);
  }
  function Ti() {
    if (!Qi && Ri !== null) {
      Qi = !0;
      var n = 0, r = Lt;
      try {
        var l = Ri;
        for (Lt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ri = null, ho = !1;
      } catch (c) {
        throw Ri !== null && (Ri = Ri.slice(n + 1)), cn(Xa, Ti), c;
      } finally {
        Lt = r, Qi = !1;
      }
    }
    return null;
  }
  var kl = [], Dl = 0, Ol = null, Gi = 0, Un = [], La = 0, pa = null, xi = 1, wi = "";
  function hu(n, r) {
    kl[Dl++] = Gi, kl[Dl++] = Ol, Ol = n, Gi = r;
  }
  function Lv(n, r, l) {
    Un[La++] = xi, Un[La++] = wi, Un[La++] = pa, pa = n;
    var o = xi;
    n = wi;
    var c = 32 - Dr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Dr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, xi = 1 << 32 - Dr(r) + c | l << c | o, wi = d + n;
    } else xi = 1 << d | l << c | o, wi = n;
  }
  function bc(n) {
    n.return !== null && (hu(n, 1), Lv(n, 1, 0));
  }
  function _c(n) {
    for (; n === Ol; ) Ol = kl[--Dl], kl[Dl] = null, Gi = kl[--Dl], kl[Dl] = null;
    for (; n === pa; ) pa = Un[--La], Un[La] = null, wi = Un[--La], Un[La] = null, xi = Un[--La], Un[La] = null;
  }
  var Xr = null, Kr = null, pn = !1, Ma = null;
  function vd(n, r) {
    var l = ja(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Mv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Xr = n, Kr = Ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Xr = n, Kr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = pa !== null ? { id: xi, overflow: wi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ja(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Xr = n, Kr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (pn) {
      var r = Kr;
      if (r) {
        var l = r;
        if (!Mv(n, r)) {
          if (hd(n)) throw Error(A(418));
          r = Ei(l.nextSibling);
          var o = Xr;
          r && Mv(n, r) ? vd(o, l) : (n.flags = n.flags & -4097 | 2, pn = !1, Xr = n);
        }
      } else {
        if (hd(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, pn = !1, Xr = n;
      }
    }
  }
  function Qn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Xr = n;
  }
  function kc(n) {
    if (n !== Xr) return !1;
    if (!pn) return Qn(n), pn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Cc(n.type, n.memoizedProps)), r && (r = Kr)) {
      if (hd(n)) throw ss(), Error(A(418));
      for (; r; ) vd(n, r), r = Ei(r.nextSibling);
    }
    if (Qn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Kr = Ei(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Kr = null;
      }
    } else Kr = Xr ? Ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ss() {
    for (var n = Kr; n; ) n = Ei(n.nextSibling);
  }
  function Ll() {
    Kr = Xr = null, pn = !1;
  }
  function qi(n) {
    Ma === null ? Ma = [n] : Ma.push(n);
  }
  var ly = ht.ReactCurrentBatchConfig;
  function mu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(A(284));
      if (!l._owner) throw Error(A(290, n));
    }
    return n;
  }
  function Dc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function yu(n) {
    function r(k, w) {
      if (n) {
        var L = k.deletions;
        L === null ? (k.deletions = [w], k.flags |= 16) : L.push(w);
      }
    }
    function l(k, w) {
      if (!n) return null;
      for (; w !== null; ) r(k, w), w = w.sibling;
      return null;
    }
    function o(k, w) {
      for (k = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? k.set(w.key, w) : k.set(w.index, w), w = w.sibling;
      return k;
    }
    function c(k, w) {
      return k = Hl(k, w), k.index = 0, k.sibling = null, k;
    }
    function d(k, w, L) {
      return k.index = L, n ? (L = k.alternate, L !== null ? (L = L.index, L < w ? (k.flags |= 2, w) : L) : (k.flags |= 2, w)) : (k.flags |= 1048576, w);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, w, L, W) {
      return w === null || w.tag !== 6 ? (w = Qd(L, k.mode, W), w.return = k, w) : (w = c(w, L), w.return = k, w);
    }
    function T(k, w, L, W) {
      var ge = L.type;
      return ge === Ie ? Y(k, w, L.props.children, W, L.key) : w !== null && (w.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === Ot && Nv(ge) === w.type) ? (W = c(w, L.props), W.ref = mu(k, w, L), W.return = k, W) : (W = Hs(L.type, L.key, L.props, null, k.mode, W), W.ref = mu(k, w, L), W.return = k, W);
    }
    function z(k, w, L, W) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== L.containerInfo || w.stateNode.implementation !== L.implementation ? (w = sf(L, k.mode, W), w.return = k, w) : (w = c(w, L.children || []), w.return = k, w);
    }
    function Y(k, w, L, W, ge) {
      return w === null || w.tag !== 7 ? (w = tl(L, k.mode, W, ge), w.return = k, w) : (w = c(w, L), w.return = k, w);
    }
    function X(k, w, L) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = Qd("" + w, k.mode, L), w.return = k, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Ce:
            return L = Hs(w.type, w.key, w.props, null, k.mode, L), L.ref = mu(k, null, w), L.return = k, L;
          case lt:
            return w = sf(w, k.mode, L), w.return = k, w;
          case Ot:
            var W = w._init;
            return X(k, W(w._payload), L);
        }
        if (Xn(w) || Te(w)) return w = tl(w, k.mode, L, null), w.return = k, w;
        Dc(k, w);
      }
      return null;
    }
    function $(k, w, L, W) {
      var ge = w !== null ? w.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ge !== null ? null : E(k, w, "" + L, W);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Ce:
            return L.key === ge ? T(k, w, L, W) : null;
          case lt:
            return L.key === ge ? z(k, w, L, W) : null;
          case Ot:
            return ge = L._init, $(
              k,
              w,
              ge(L._payload),
              W
            );
        }
        if (Xn(L) || Te(L)) return ge !== null ? null : Y(k, w, L, W, null);
        Dc(k, L);
      }
      return null;
    }
    function fe(k, w, L, W, ge) {
      if (typeof W == "string" && W !== "" || typeof W == "number") return k = k.get(L) || null, E(w, k, "" + W, ge);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case Ce:
            return k = k.get(W.key === null ? L : W.key) || null, T(w, k, W, ge);
          case lt:
            return k = k.get(W.key === null ? L : W.key) || null, z(w, k, W, ge);
          case Ot:
            var je = W._init;
            return fe(k, w, L, je(W._payload), ge);
        }
        if (Xn(W) || Te(W)) return k = k.get(L) || null, Y(w, k, W, ge, null);
        Dc(w, W);
      }
      return null;
    }
    function ye(k, w, L, W) {
      for (var ge = null, je = null, Pe = w, Qe = w = 0, tr = null; Pe !== null && Qe < L.length; Qe++) {
        Pe.index > Qe ? (tr = Pe, Pe = null) : tr = Pe.sibling;
        var zt = $(k, Pe, L[Qe], W);
        if (zt === null) {
          Pe === null && (Pe = tr);
          break;
        }
        n && Pe && zt.alternate === null && r(k, Pe), w = d(zt, w, Qe), je === null ? ge = zt : je.sibling = zt, je = zt, Pe = tr;
      }
      if (Qe === L.length) return l(k, Pe), pn && hu(k, Qe), ge;
      if (Pe === null) {
        for (; Qe < L.length; Qe++) Pe = X(k, L[Qe], W), Pe !== null && (w = d(Pe, w, Qe), je === null ? ge = Pe : je.sibling = Pe, je = Pe);
        return pn && hu(k, Qe), ge;
      }
      for (Pe = o(k, Pe); Qe < L.length; Qe++) tr = fe(Pe, k, Qe, L[Qe], W), tr !== null && (n && tr.alternate !== null && Pe.delete(tr.key === null ? Qe : tr.key), w = d(tr, w, Qe), je === null ? ge = tr : je.sibling = tr, je = tr);
      return n && Pe.forEach(function(Bl) {
        return r(k, Bl);
      }), pn && hu(k, Qe), ge;
    }
    function Ee(k, w, L, W) {
      var ge = Te(L);
      if (typeof ge != "function") throw Error(A(150));
      if (L = ge.call(L), L == null) throw Error(A(151));
      for (var je = ge = null, Pe = w, Qe = w = 0, tr = null, zt = L.next(); Pe !== null && !zt.done; Qe++, zt = L.next()) {
        Pe.index > Qe ? (tr = Pe, Pe = null) : tr = Pe.sibling;
        var Bl = $(k, Pe, zt.value, W);
        if (Bl === null) {
          Pe === null && (Pe = tr);
          break;
        }
        n && Pe && Bl.alternate === null && r(k, Pe), w = d(Bl, w, Qe), je === null ? ge = Bl : je.sibling = Bl, je = Bl, Pe = tr;
      }
      if (zt.done) return l(
        k,
        Pe
      ), pn && hu(k, Qe), ge;
      if (Pe === null) {
        for (; !zt.done; Qe++, zt = L.next()) zt = X(k, zt.value, W), zt !== null && (w = d(zt, w, Qe), je === null ? ge = zt : je.sibling = zt, je = zt);
        return pn && hu(k, Qe), ge;
      }
      for (Pe = o(k, Pe); !zt.done; Qe++, zt = L.next()) zt = fe(Pe, k, Qe, zt.value, W), zt !== null && (n && zt.alternate !== null && Pe.delete(zt.key === null ? Qe : zt.key), w = d(zt, w, Qe), je === null ? ge = zt : je.sibling = zt, je = zt);
      return n && Pe.forEach(function(hh) {
        return r(k, hh);
      }), pn && hu(k, Qe), ge;
    }
    function Dn(k, w, L, W) {
      if (typeof L == "object" && L !== null && L.type === Ie && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Ce:
            e: {
              for (var ge = L.key, je = w; je !== null; ) {
                if (je.key === ge) {
                  if (ge = L.type, ge === Ie) {
                    if (je.tag === 7) {
                      l(k, je.sibling), w = c(je, L.props.children), w.return = k, k = w;
                      break e;
                    }
                  } else if (je.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === Ot && Nv(ge) === je.type) {
                    l(k, je.sibling), w = c(je, L.props), w.ref = mu(k, je, L), w.return = k, k = w;
                    break e;
                  }
                  l(k, je);
                  break;
                } else r(k, je);
                je = je.sibling;
              }
              L.type === Ie ? (w = tl(L.props.children, k.mode, W, L.key), w.return = k, k = w) : (W = Hs(L.type, L.key, L.props, null, k.mode, W), W.ref = mu(k, w, L), W.return = k, k = W);
            }
            return m(k);
          case lt:
            e: {
              for (je = L.key; w !== null; ) {
                if (w.key === je) if (w.tag === 4 && w.stateNode.containerInfo === L.containerInfo && w.stateNode.implementation === L.implementation) {
                  l(k, w.sibling), w = c(w, L.children || []), w.return = k, k = w;
                  break e;
                } else {
                  l(k, w);
                  break;
                }
                else r(k, w);
                w = w.sibling;
              }
              w = sf(L, k.mode, W), w.return = k, k = w;
            }
            return m(k);
          case Ot:
            return je = L._init, Dn(k, w, je(L._payload), W);
        }
        if (Xn(L)) return ye(k, w, L, W);
        if (Te(L)) return Ee(k, w, L, W);
        Dc(k, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, w !== null && w.tag === 6 ? (l(k, w.sibling), w = c(w, L), w.return = k, k = w) : (l(k, w), w = Qd(L, k.mode, W), w.return = k, k = w), m(k)) : l(k, w);
    }
    return Dn;
  }
  var wn = yu(!0), oe = yu(!1), va = Oa(null), Jr = null, mo = null, yd = null;
  function gd() {
    yd = mo = Jr = null;
  }
  function Sd(n) {
    var r = va.current;
    ln(va), n._currentValue = r;
  }
  function Ed(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function gn(n, r) {
    Jr = n, yd = mo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (jn = !0), n.firstContext = null);
  }
  function Na(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, mo === null) {
      if (Jr === null) throw Error(A(308));
      mo = n, Jr.dependencies = { lanes: 0, firstContext: n };
    } else mo = mo.next = n;
    return r;
  }
  var gu = null;
  function Cd(n) {
    gu === null ? gu = [n] : gu.push(n);
  }
  function Rd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, ha(n, o);
  }
  function ha(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ma = !1;
  function Td(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function zv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Xi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ml(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Rt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, ha(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, ha(n, l);
  }
  function Oc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  function Uv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function cs(n, r, l, o) {
    var c = n.updateQueue;
    ma = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var Y = n.alternate;
      Y !== null && (Y = Y.updateQueue, E = Y.lastBaseUpdate, E !== m && (E === null ? Y.firstBaseUpdate = z : E.next = z, Y.lastBaseUpdate = T));
    }
    if (d !== null) {
      var X = c.baseState;
      m = 0, Y = z = T = null, E = d;
      do {
        var $ = E.lane, fe = E.eventTime;
        if ((o & $) === $) {
          Y !== null && (Y = Y.next = {
            eventTime: fe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ye = n, Ee = E;
            switch ($ = r, fe = l, Ee.tag) {
              case 1:
                if (ye = Ee.payload, typeof ye == "function") {
                  X = ye.call(fe, X, $);
                  break e;
                }
                X = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Ee.payload, $ = typeof ye == "function" ? ye.call(fe, X, $) : ye, $ == null) break e;
                X = ie({}, X, $);
                break e;
              case 2:
                ma = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, $ = c.effects, $ === null ? c.effects = [E] : $.push(E));
        } else fe = { eventTime: fe, lane: $, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Y === null ? (z = Y = fe, T = X) : Y = Y.next = fe, m |= $;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          $ = E, E = $.next, $.next = null, c.lastBaseUpdate = $, c.shared.pending = null;
        }
      } while (!0);
      if (Y === null && (T = X), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = Y, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Oi |= m, n.lanes = m, n.memoizedState = X;
    }
  }
  function xd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(A(191, c));
        c.call(o);
      }
    }
  }
  var fs = {}, bi = Oa(fs), ds = Oa(fs), ps = Oa(fs);
  function Su(n) {
    if (n === fs) throw Error(A(174));
    return n;
  }
  function wd(n, r) {
    switch (_e(ps, r), _e(ds, n), _e(bi, fs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ca(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ca(r, n);
    }
    ln(bi), _e(bi, r);
  }
  function Eu() {
    ln(bi), ln(ds), ln(ps);
  }
  function Av(n) {
    Su(ps.current);
    var r = Su(bi.current), l = ca(r, n.type);
    r !== l && (_e(ds, n), _e(bi, l));
  }
  function Lc(n) {
    ds.current === n && (ln(bi), ln(ds));
  }
  var Sn = Oa(0);
  function Mc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var vs = [];
  function Le() {
    for (var n = 0; n < vs.length; n++) vs[n]._workInProgressVersionPrimary = null;
    vs.length = 0;
  }
  var vt = ht.ReactCurrentDispatcher, Mt = ht.ReactCurrentBatchConfig, Gt = 0, Nt = null, An = null, Zn = null, Nc = !1, hs = !1, Cu = 0, I = 0;
  function Dt() {
    throw Error(A(321));
  }
  function Be(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ti(n[l], r[l])) return !1;
    return !0;
  }
  function Nl(n, r, l, o, c, d) {
    if (Gt = d, Nt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, vt.current = n === null || n.memoizedState === null ? Gc : Cs, n = l(o, c), hs) {
      d = 0;
      do {
        if (hs = !1, Cu = 0, 25 <= d) throw Error(A(301));
        d += 1, Zn = An = null, r.updateQueue = null, vt.current = qc, n = l(o, c);
      } while (hs);
    }
    if (vt.current = bu, r = An !== null && An.next !== null, Gt = 0, Zn = An = Nt = null, Nc = !1, r) throw Error(A(300));
    return n;
  }
  function ri() {
    var n = Cu !== 0;
    return Cu = 0, n;
  }
  function Tr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Zn === null ? Nt.memoizedState = Zn = n : Zn = Zn.next = n, Zn;
  }
  function bn() {
    if (An === null) {
      var n = Nt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = An.next;
    var r = Zn === null ? Nt.memoizedState : Zn.next;
    if (r !== null) Zn = r, An = n;
    else {
      if (n === null) throw Error(A(310));
      An = n, n = { memoizedState: An.memoizedState, baseState: An.baseState, baseQueue: An.baseQueue, queue: An.queue, next: null }, Zn === null ? Nt.memoizedState = Zn = n : Zn = Zn.next = n;
    }
    return Zn;
  }
  function Ki(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function zl(n) {
    var r = bn(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = An, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, z = d;
      do {
        var Y = z.lane;
        if ((Gt & Y) === Y) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var X = {
            lane: Y,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = X, m = o) : T = T.next = X, Nt.lanes |= Y, Oi |= Y;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, ti(o, r.memoizedState) || (jn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Nt.lanes |= d, Oi |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ru(n) {
    var r = bn(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ti(d, r.memoizedState) || (jn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function zc() {
  }
  function Uc(n, r) {
    var l = Nt, o = bn(), c = r(), d = !ti(o.memoizedState, c);
    if (d && (o.memoizedState = c, jn = !0), o = o.queue, ms(Fc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Zn !== null && Zn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Tu(9, jc.bind(null, l, o, c, r), void 0, null), Gn === null) throw Error(A(349));
      Gt & 30 || Ac(l, r, c);
    }
    return c;
  }
  function Ac(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function jc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Hc(r) && Pc(n);
  }
  function Fc(n, r, l) {
    return l(function() {
      Hc(r) && Pc(n);
    });
  }
  function Hc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ti(n, l);
    } catch {
      return !0;
    }
  }
  function Pc(n) {
    var r = ha(n, 1);
    r !== null && Ur(r, n, 1, -1);
  }
  function Vc(n) {
    var r = Tr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ki, lastRenderedState: n }, r.queue = n, n = n.dispatch = wu.bind(null, Nt, n), [r.memoizedState, n];
  }
  function Tu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Bc() {
    return bn().memoizedState;
  }
  function yo(n, r, l, o) {
    var c = Tr();
    Nt.flags |= n, c.memoizedState = Tu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function go(n, r, l, o) {
    var c = bn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (An !== null) {
      var m = An.memoizedState;
      if (d = m.destroy, o !== null && Be(o, m.deps)) {
        c.memoizedState = Tu(r, l, d, o);
        return;
      }
    }
    Nt.flags |= n, c.memoizedState = Tu(1 | r, l, d, o);
  }
  function Ic(n, r) {
    return yo(8390656, 8, n, r);
  }
  function ms(n, r) {
    return go(2048, 8, n, r);
  }
  function $c(n, r) {
    return go(4, 2, n, r);
  }
  function ys(n, r) {
    return go(4, 4, n, r);
  }
  function xu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Yc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, go(4, 4, xu.bind(null, r, n), l);
  }
  function gs() {
  }
  function Wc(n, r) {
    var l = bn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Be(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Qc(n, r) {
    var l = bn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Be(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function bd(n, r, l) {
    return Gt & 21 ? (ti(l, r) || (l = Xu(), Nt.lanes |= l, Oi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, jn = !0), n.memoizedState = l);
  }
  function Ss(n, r) {
    var l = Lt;
    Lt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Mt.transition;
    Mt.transition = {};
    try {
      n(!1), r();
    } finally {
      Lt = l, Mt.transition = o;
    }
  }
  function _d() {
    return bn().memoizedState;
  }
  function Es(n, r, l) {
    var o = Li(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Zr(n)) jv(r, l);
    else if (l = Rd(n, r, l, o), l !== null) {
      var c = Pn();
      Ur(l, n, o, c), Kt(l, r, o);
    }
  }
  function wu(n, r, l) {
    var o = Li(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Zr(n)) jv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ti(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Cd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Rd(n, r, c, o), l !== null && (c = Pn(), Ur(l, n, o, c), Kt(l, r, o));
    }
  }
  function Zr(n) {
    var r = n.alternate;
    return n === Nt || r !== null && r === Nt;
  }
  function jv(n, r) {
    hs = Nc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Kt(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  var bu = { readContext: Na, useCallback: Dt, useContext: Dt, useEffect: Dt, useImperativeHandle: Dt, useInsertionEffect: Dt, useLayoutEffect: Dt, useMemo: Dt, useReducer: Dt, useRef: Dt, useState: Dt, useDebugValue: Dt, useDeferredValue: Dt, useTransition: Dt, useMutableSource: Dt, useSyncExternalStore: Dt, useId: Dt, unstable_isNewReconciler: !1 }, Gc = { readContext: Na, useCallback: function(n, r) {
    return Tr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Na, useEffect: Ic, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yo(
      4194308,
      4,
      xu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return yo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return yo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Tr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Tr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Es.bind(null, Nt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Vc, useDebugValue: gs, useDeferredValue: function(n) {
    return Tr().memoizedState = n;
  }, useTransition: function() {
    var n = Vc(!1), r = n[0];
    return n = Ss.bind(null, n[1]), Tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Nt, c = Tr();
    if (pn) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), Gn === null) throw Error(A(349));
      Gt & 30 || Ac(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ic(Fc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Tu(9, jc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Tr(), r = Gn.identifierPrefix;
    if (pn) {
      var l = wi, o = xi;
      l = (o & ~(1 << 32 - Dr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Cu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = I++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Cs = {
    readContext: Na,
    useCallback: Wc,
    useContext: Na,
    useEffect: ms,
    useImperativeHandle: Yc,
    useInsertionEffect: $c,
    useLayoutEffect: ys,
    useMemo: Qc,
    useReducer: zl,
    useRef: Bc,
    useState: function() {
      return zl(Ki);
    },
    useDebugValue: gs,
    useDeferredValue: function(n) {
      var r = bn();
      return bd(r, An.memoizedState, n);
    },
    useTransition: function() {
      var n = zl(Ki)[0], r = bn().memoizedState;
      return [n, r];
    },
    useMutableSource: zc,
    useSyncExternalStore: Uc,
    useId: _d,
    unstable_isNewReconciler: !1
  }, qc = { readContext: Na, useCallback: Wc, useContext: Na, useEffect: ms, useImperativeHandle: Yc, useInsertionEffect: $c, useLayoutEffect: ys, useMemo: Qc, useReducer: Ru, useRef: Bc, useState: function() {
    return Ru(Ki);
  }, useDebugValue: gs, useDeferredValue: function(n) {
    var r = bn();
    return An === null ? r.memoizedState = n : bd(r, An.memoizedState, n);
  }, useTransition: function() {
    var n = Ru(Ki)[0], r = bn().memoizedState;
    return [n, r];
  }, useMutableSource: zc, useSyncExternalStore: Uc, useId: _d, unstable_isNewReconciler: !1 };
  function ai(n, r) {
    if (n && n.defaultProps) {
      r = ie({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function kd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ie({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Xc = { isMounted: function(n) {
    return (n = n._reactInternals) ? et(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Pn(), c = Li(n), d = Xi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ml(n, d, c), r !== null && (Ur(r, n, c, o), Oc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Pn(), c = Li(n), d = Xi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ml(n, d, c), r !== null && (Ur(r, n, c, o), Oc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Pn(), o = Li(n), c = Xi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ml(n, c, o), r !== null && (Ur(r, n, o, l), Oc(r, n, o));
  } };
  function Fv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !es(l, o) || !es(c, d) : !0;
  }
  function Kc(n, r, l) {
    var o = !1, c = Rr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Na(d) : (c = zn(r) ? Gr : Cn.current, o = r.contextTypes, d = (o = o != null) ? qr(n, c) : Rr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Xc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Hv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Xc.enqueueReplaceState(r, r.state, null);
  }
  function Rs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Td(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Na(d) : (d = zn(r) ? Gr : Cn.current, c.context = qr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (kd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Xc.enqueueReplaceState(c, c.state, null), cs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _u(n, r) {
    try {
      var l = "", o = r;
      do
        l += ft(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Dd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Od(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Jc = typeof WeakMap == "function" ? WeakMap : Map;
  function Pv(n, r, l) {
    l = Xi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      xo || (xo = !0, Ou = o), Od(n, r);
    }, l;
  }
  function Ld(n, r, l) {
    l = Xi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Od(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Od(n, r), typeof o != "function" && (jl === null ? jl = /* @__PURE__ */ new Set([this]) : jl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Md(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Jc();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = py.bind(null, n, r, l), r.then(n, n));
  }
  function Vv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ul(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Xi(-1, 1), r.tag = 2, Ml(l, r, 1))), l.lanes |= 1), n);
  }
  var Ts = ht.ReactCurrentOwner, jn = !1;
  function or(n, r, l, o) {
    r.child = n === null ? oe(r, null, l, o) : wn(r, n.child, l, o);
  }
  function ea(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return gn(r, c), o = Nl(n, r, l, o, d, c), l = ri(), n !== null && !jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ua(n, r, c)) : (pn && l && bc(r), r.flags |= 1, or(n, r, o, c), r.child);
  }
  function ku(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Wd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, nt(n, r, d, o, c)) : (n = Hs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : es, l(m, o) && n.ref === r.ref) return Ua(n, r, c);
    }
    return r.flags |= 1, n = Hl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function nt(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (es(d, o) && n.ref === r.ref) if (jn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (jn = !0);
      else return r.lanes = n.lanes, Ua(n, r, c);
    }
    return Bv(n, r, l, o, c);
  }
  function xs(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, _e(Co, ya), ya |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, _e(Co, ya), ya |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, _e(Co, ya), ya |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, _e(Co, ya), ya |= o;
    return or(n, r, c, l), r.child;
  }
  function Nd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Bv(n, r, l, o, c) {
    var d = zn(l) ? Gr : Cn.current;
    return d = qr(r, d), gn(r, c), l = Nl(n, r, l, o, d, c), o = ri(), n !== null && !jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ua(n, r, c)) : (pn && o && bc(r), r.flags |= 1, or(n, r, l, c), r.child);
  }
  function Iv(n, r, l, o, c) {
    if (zn(l)) {
      var d = !0;
      Jn(r);
    } else d = !1;
    if (gn(r, c), r.stateNode === null) za(n, r), Kc(r, l, o), Rs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Na(z) : (z = zn(l) ? Gr : Cn.current, z = qr(r, z));
      var Y = l.getDerivedStateFromProps, X = typeof Y == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      X || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && Hv(r, m, o, z), ma = !1;
      var $ = r.memoizedState;
      m.state = $, cs(r, o, m, c), T = r.memoizedState, E !== o || $ !== T || Wn.current || ma ? (typeof Y == "function" && (kd(r, l, Y, o), T = r.memoizedState), (E = ma || Fv(r, l, E, o, $, T, z)) ? (X || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, zv(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : ai(r.type, E), m.props = z, X = r.pendingProps, $ = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Na(T) : (T = zn(l) ? Gr : Cn.current, T = qr(r, T));
      var fe = l.getDerivedStateFromProps;
      (Y = typeof fe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== X || $ !== T) && Hv(r, m, o, T), ma = !1, $ = r.memoizedState, m.state = $, cs(r, o, m, c);
      var ye = r.memoizedState;
      E !== X || $ !== ye || Wn.current || ma ? (typeof fe == "function" && (kd(r, l, fe, o), ye = r.memoizedState), (z = ma || Fv(r, l, z, o, $, ye, T) || !1) ? (Y || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return ws(n, r, l, o, d, c);
  }
  function ws(n, r, l, o, c, d) {
    Nd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && xc(r, l, !1), Ua(n, r, d);
    o = r.stateNode, Ts.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = wn(r, n.child, null, d), r.child = wn(r, null, E, d)) : or(n, r, E, d), r.memoizedState = o.state, c && xc(r, l, !0), r.child;
  }
  function So(n) {
    var r = n.stateNode;
    r.pendingContext ? Ov(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ov(n, r.context, !1), wd(n, r.containerInfo);
  }
  function $v(n, r, l, o, c) {
    return Ll(), qi(c), r.flags |= 256, or(n, r, l, o), r.child;
  }
  var Zc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ef(n, r, l) {
    var o = r.pendingProps, c = Sn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), _e(Sn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Pl(m, o, 0, null), n = tl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = zd(l), r.memoizedState = Zc, n) : Ud(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Yv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Hl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Hl(E, d) : (d = tl(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? zd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Zc, o;
    }
    return d = n.child, n = d.sibling, o = Hl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ud(n, r) {
    return r = Pl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function bs(n, r, l, o) {
    return o !== null && qi(o), wn(r, n.child, null, l), n = Ud(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Yv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Dd(Error(A(422))), bs(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Pl({ mode: "visible", children: o.children }, c, 0, null), d = tl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && wn(r, n.child, null, m), r.child.memoizedState = zd(m), r.memoizedState = Zc, d);
    if (!(r.mode & 1)) return bs(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(A(419)), o = Dd(d, o, void 0), bs(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, jn || E) {
      if (o = Gn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, ha(n, c), Ur(o, n, c, -1));
      }
      return Yd(), o = Dd(Error(A(421))), bs(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = vy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Kr = Ei(c.nextSibling), Xr = r, pn = !0, Ma = null, n !== null && (Un[La++] = xi, Un[La++] = wi, Un[La++] = pa, xi = n.id, wi = n.overflow, pa = r), r = Ud(r, o.children), r.flags |= 4096, r);
  }
  function Ad(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Ed(n.return, r, l);
  }
  function Mr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function _i(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (or(n, r, o.children, l), o = Sn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ad(n, l, r);
        else if (n.tag === 19) Ad(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (_e(Sn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Mc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Mr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Mc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Mr(r, !0, l, null, d);
        break;
      case "together":
        Mr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function za(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ua(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Oi |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = Hl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Hl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function _s(n, r, l) {
    switch (r.tag) {
      case 3:
        So(r), Ll();
        break;
      case 5:
        Av(r);
        break;
      case 1:
        zn(r.type) && Jn(r);
        break;
      case 4:
        wd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        _e(va, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (_e(Sn, Sn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? ef(n, r, l) : (_e(Sn, Sn.current & 1), n = Ua(n, r, l), n !== null ? n.sibling : null);
        _e(Sn, Sn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return _i(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), _e(Sn, Sn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, xs(n, r, l);
    }
    return Ua(n, r, l);
  }
  var Aa, Fn, Wv, Qv;
  Aa = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Fn = function() {
  }, Wv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Su(bi.current);
      var d = null;
      switch (l) {
        case "input":
          c = rr(n, c), o = rr(n, o), d = [];
          break;
        case "select":
          c = ie({}, c, { value: void 0 }), o = ie({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = $n(n, c), o = $n(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = wl);
      }
      sn(l, o);
      var m;
      l = null;
      for (z in c) if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null) if (z === "style") {
        var E = c[z];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (Ge.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (Ge.hasOwnProperty(z) ? (T != null && z === "onScroll" && Pt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, Qv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function ks(n, r) {
    if (!pn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function er(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Gv(n, r, l) {
    var o = r.pendingProps;
    switch (_c(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return er(r), null;
      case 1:
        return zn(r.type) && vo(), er(r), null;
      case 3:
        return o = r.stateNode, Eu(), ln(Wn), ln(Cn), Le(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (kc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ma !== null && (Lu(Ma), Ma = null))), Fn(n, r), er(r), null;
      case 5:
        Lc(r);
        var c = Su(ps.current);
        if (l = r.type, n !== null && r.stateNode != null) Wv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return er(r), null;
          }
          if (n = Su(bi.current), kc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ci] = r, o[ls] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Pt("cancel", o), Pt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) Pt(rs[c], o);
                break;
              case "source":
                Pt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Pt(
                  "error",
                  o
                ), Pt("load", o);
                break;
              case "details":
                Pt("toggle", o);
                break;
              case "input":
                Bn(o, d), Pt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Pt("invalid", o);
                break;
              case "textarea":
                Sr(o, d), Pt("invalid", o);
            }
            sn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Ec(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Ec(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Ge.hasOwnProperty(m) && E != null && m === "onScroll" && Pt("scroll", o);
            }
            switch (l) {
              case "input":
                Ln(o), ci(o, d, !0);
                break;
              case "textarea":
                Ln(o), Mn(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = wl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Er(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ci] = r, n[ls] = o, Aa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Kn(l, o), l) {
                case "dialog":
                  Pt("cancel", n), Pt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) Pt(rs[c], n);
                  c = o;
                  break;
                case "source":
                  Pt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Pt(
                    "error",
                    n
                  ), Pt("load", n), c = o;
                  break;
                case "details":
                  Pt("toggle", n), c = o;
                  break;
                case "input":
                  Bn(n, o), c = rr(n, o), Pt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ie({}, o, { value: void 0 }), Pt("invalid", n);
                  break;
                case "textarea":
                  Sr(n, o), c = $n(n, o), Pt("invalid", n);
                  break;
                default:
                  c = o;
              }
              sn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? tn(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && fi(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && re(n, T) : typeof T == "number" && re(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ge.hasOwnProperty(d) ? T != null && d === "onScroll" && Pt("scroll", n) : T != null && Ae(n, d, T, m));
              }
              switch (l) {
                case "input":
                  Ln(n), ci(n, o, !1);
                  break;
                case "textarea":
                  Ln(n), Mn(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + ot(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Tn(n, !!o.multiple, d, !1) : o.defaultValue != null && Tn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = wl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return er(r), null;
      case 6:
        if (n && r.stateNode != null) Qv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = Su(ps.current), Su(bi.current), kc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ci] = r, (d = o.nodeValue !== l) && (n = Xr, n !== null)) switch (n.tag) {
              case 3:
                Ec(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ec(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ci] = r, r.stateNode = o;
        }
        return er(r), null;
      case 13:
        if (ln(Sn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (pn && Kr !== null && r.mode & 1 && !(r.flags & 128)) ss(), Ll(), r.flags |= 98560, d = !1;
          else if (d = kc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[Ci] = r;
            } else Ll(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            er(r), d = !1;
          } else Ma !== null && (Lu(Ma), Ma = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Sn.current & 1 ? kn === 0 && (kn = 3) : Yd())), r.updateQueue !== null && (r.flags |= 4), er(r), null);
      case 4:
        return Eu(), Fn(n, r), n === null && oo(r.stateNode.containerInfo), er(r), null;
      case 10:
        return Sd(r.type._context), er(r), null;
      case 17:
        return zn(r.type) && vo(), er(r), null;
      case 19:
        if (ln(Sn), d = r.memoizedState, d === null) return er(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) ks(d, !1);
        else {
          if (kn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Mc(n), m !== null) {
              for (r.flags |= 128, ks(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return _e(Sn, Sn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && tt() > To && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Mc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ks(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !pn) return er(r), null;
          } else 2 * tt() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = tt(), r.sibling = null, l = Sn.current, _e(Sn, o ? l & 1 | 2 : l & 1), r) : (er(r), null);
      case 22:
      case 23:
        return $d(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ya & 1073741824 && (er(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : er(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function tf(n, r) {
    switch (_c(r), r.tag) {
      case 1:
        return zn(r.type) && vo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Eu(), ln(Wn), ln(Cn), Le(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Lc(r), null;
      case 13:
        if (ln(Sn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          Ll();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return ln(Sn), null;
      case 4:
        return Eu(), null;
      case 10:
        return Sd(r.type._context), null;
      case 22:
      case 23:
        return $d(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ds = !1, xr = !1, uy = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function Eo(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      vn(n, r, o);
    }
    else l.current = null;
  }
  function nf(n, r, l) {
    try {
      l();
    } catch (o) {
      vn(n, r, o);
    }
  }
  var qv = !1;
  function Xv(n, r) {
    if (is = _a, n = ts(), dc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, z = 0, Y = 0, X = n, $ = null;
          t: for (; ; ) {
            for (var fe; X !== l || c !== 0 && X.nodeType !== 3 || (E = m + c), X !== d || o !== 0 && X.nodeType !== 3 || (T = m + o), X.nodeType === 3 && (m += X.nodeValue.length), (fe = X.firstChild) !== null; )
              $ = X, X = fe;
            for (; ; ) {
              if (X === n) break t;
              if ($ === l && ++z === c && (E = m), $ === d && ++Y === o && (T = m), (fe = X.nextSibling) !== null) break;
              X = $, $ = X.parentNode;
            }
            X = fe;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (pu = { focusedElem: n, selectionRange: l }, _a = !1, ve = r; ve !== null; ) if (r = ve, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ve = n;
    else for (; ve !== null; ) {
      r = ve;
      try {
        var ye = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ye !== null) {
              var Ee = ye.memoizedProps, Dn = ye.memoizedState, k = r.stateNode, w = k.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : ai(r.type, Ee), Dn);
              k.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(A(163));
        }
      } catch (W) {
        vn(r, r.return, W);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ve = n;
        break;
      }
      ve = r.return;
    }
    return ye = qv, qv = !1, ye;
  }
  function Os(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && nf(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Ls(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function jd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function rf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, rf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ci], delete r[ls], delete r[us], delete r[po], delete r[iy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ms(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ji(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ms(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function ki(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = wl));
    else if (o !== 4 && (n = n.child, n !== null)) for (ki(n, r, l), n = n.sibling; n !== null; ) ki(n, r, l), n = n.sibling;
  }
  function Di(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Di(n, r, l), n = n.sibling; n !== null; ) Di(n, r, l), n = n.sibling;
  }
  var _n = null, Nr = !1;
  function zr(n, r, l) {
    for (l = l.child; l !== null; ) Kv(n, r, l), l = l.sibling;
  }
  function Kv(n, r, l) {
    if (Wr && typeof Wr.onCommitFiberUnmount == "function") try {
      Wr.onCommitFiberUnmount(ml, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        xr || Eo(l, r);
      case 6:
        var o = _n, c = Nr;
        _n = null, zr(n, r, l), _n = o, Nr = c, _n !== null && (Nr ? (n = _n, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : _n.removeChild(l.stateNode));
        break;
      case 18:
        _n !== null && (Nr ? (n = _n, l = l.stateNode, n.nodeType === 8 ? fo(n.parentNode, l) : n.nodeType === 1 && fo(n, l), Za(n)) : fo(_n, l.stateNode));
        break;
      case 4:
        o = _n, c = Nr, _n = l.stateNode.containerInfo, Nr = !0, zr(n, r, l), _n = o, Nr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!xr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && nf(l, r, m), c = c.next;
          } while (c !== o);
        }
        zr(n, r, l);
        break;
      case 1:
        if (!xr && (Eo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          vn(l, r, E);
        }
        zr(n, r, l);
        break;
      case 21:
        zr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (xr = (o = xr) || l.memoizedState !== null, zr(n, r, l), xr = o) : zr(n, r, l);
        break;
      default:
        zr(n, r, l);
    }
  }
  function Jv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new uy()), r.forEach(function(o) {
        var c = uh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ii(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              _n = E.stateNode, Nr = !1;
              break e;
            case 3:
              _n = E.stateNode.containerInfo, Nr = !0;
              break e;
            case 4:
              _n = E.stateNode.containerInfo, Nr = !0;
              break e;
          }
          E = E.return;
        }
        if (_n === null) throw Error(A(160));
        Kv(d, m, c), _n = null, Nr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (z) {
        vn(c, r, z);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Fd(r, n), r = r.sibling;
  }
  function Fd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ii(r, n), ta(n), o & 4) {
          try {
            Os(3, n, n.return), Ls(3, n);
          } catch (Ee) {
            vn(n, n.return, Ee);
          }
          try {
            Os(5, n, n.return);
          } catch (Ee) {
            vn(n, n.return, Ee);
          }
        }
        break;
      case 1:
        ii(r, n), ta(n), o & 512 && l !== null && Eo(l, l.return);
        break;
      case 5:
        if (ii(r, n), ta(n), o & 512 && l !== null && Eo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            re(c, "");
          } catch (Ee) {
            vn(n, n.return, Ee);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && In(c, d), Kn(E, m);
            var z = Kn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var Y = T[m], X = T[m + 1];
              Y === "style" ? tn(c, X) : Y === "dangerouslySetInnerHTML" ? fi(c, X) : Y === "children" ? re(c, X) : Ae(c, Y, X, z);
            }
            switch (E) {
              case "input":
                Yr(c, d);
                break;
              case "textarea":
                Ya(c, d);
                break;
              case "select":
                var $ = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var fe = d.value;
                fe != null ? Tn(c, !!d.multiple, fe, !1) : $ !== !!d.multiple && (d.defaultValue != null ? Tn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Tn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ls] = d;
          } catch (Ee) {
            vn(n, n.return, Ee);
          }
        }
        break;
      case 6:
        if (ii(r, n), ta(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ee) {
            vn(n, n.return, Ee);
          }
        }
        break;
      case 3:
        if (ii(r, n), ta(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Za(r.containerInfo);
        } catch (Ee) {
          vn(n, n.return, Ee);
        }
        break;
      case 4:
        ii(r, n), ta(n);
        break;
      case 13:
        ii(r, n), ta(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Vd = tt())), o & 4 && Jv(n);
        break;
      case 22:
        if (Y = l !== null && l.memoizedState !== null, n.mode & 1 ? (xr = (z = xr) || Y, ii(r, n), xr = z) : ii(r, n), ta(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !Y && n.mode & 1) for (ve = n, Y = n.child; Y !== null; ) {
            for (X = ve = Y; ve !== null; ) {
              switch ($ = ve, fe = $.child, $.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Os(4, $, $.return);
                  break;
                case 1:
                  Eo($, $.return);
                  var ye = $.stateNode;
                  if (typeof ye.componentWillUnmount == "function") {
                    o = $, l = $.return;
                    try {
                      r = o, ye.props = r.memoizedProps, ye.state = r.memoizedState, ye.componentWillUnmount();
                    } catch (Ee) {
                      vn(o, l, Ee);
                    }
                  }
                  break;
                case 5:
                  Eo($, $.return);
                  break;
                case 22:
                  if ($.memoizedState !== null) {
                    Ns(X);
                    continue;
                  }
              }
              fe !== null ? (fe.return = $, ve = fe) : Ns(X);
            }
            Y = Y.sibling;
          }
          e: for (Y = null, X = n; ; ) {
            if (X.tag === 5) {
              if (Y === null) {
                Y = X;
                try {
                  c = X.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = X.stateNode, T = X.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Ft("display", m));
                } catch (Ee) {
                  vn(n, n.return, Ee);
                }
              }
            } else if (X.tag === 6) {
              if (Y === null) try {
                X.stateNode.nodeValue = z ? "" : X.memoizedProps;
              } catch (Ee) {
                vn(n, n.return, Ee);
              }
            } else if ((X.tag !== 22 && X.tag !== 23 || X.memoizedState === null || X === n) && X.child !== null) {
              X.child.return = X, X = X.child;
              continue;
            }
            if (X === n) break e;
            for (; X.sibling === null; ) {
              if (X.return === null || X.return === n) break e;
              Y === X && (Y = null), X = X.return;
            }
            Y === X && (Y = null), X.sibling.return = X.return, X = X.sibling;
          }
        }
        break;
      case 19:
        ii(r, n), ta(n), o & 4 && Jv(n);
        break;
      case 21:
        break;
      default:
        ii(
          r,
          n
        ), ta(n);
    }
  }
  function ta(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ms(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (re(c, ""), o.flags &= -33);
            var d = Ji(n);
            Di(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Ji(n);
            ki(n, E, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (T) {
        vn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function oy(n, r, l) {
    ve = n, Hd(n);
  }
  function Hd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ve !== null; ) {
      var c = ve, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ds;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || xr;
          E = Ds;
          var z = xr;
          if (Ds = m, (xr = T) && !z) for (ve = c; ve !== null; ) m = ve, T = m.child, m.tag === 22 && m.memoizedState !== null ? Pd(c) : T !== null ? (T.return = m, ve = T) : Pd(c);
          for (; d !== null; ) ve = d, Hd(d), d = d.sibling;
          ve = c, Ds = E, xr = z;
        }
        Zv(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ve = d) : Zv(n);
    }
  }
  function Zv(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              xr || Ls(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !xr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ai(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && xd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                xd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var z = r.alternate;
                if (z !== null) {
                  var Y = z.memoizedState;
                  if (Y !== null) {
                    var X = Y.dehydrated;
                    X !== null && Za(X);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
          xr || r.flags & 512 && jd(r);
        } catch ($) {
          vn(r, r.return, $);
        }
      }
      if (r === n) {
        ve = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Ns(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r === n) {
        ve = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Pd(n) {
    for (; ve !== null; ) {
      var r = ve;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ls(4, r);
            } catch (T) {
              vn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                vn(r, c, T);
              }
            }
            var d = r.return;
            try {
              jd(r);
            } catch (T) {
              vn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              jd(r);
            } catch (T) {
              vn(r, m, T);
            }
        }
      } catch (T) {
        vn(r, r.return, T);
      }
      if (r === n) {
        ve = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ve = E;
        break;
      }
      ve = r.return;
    }
  }
  var sy = Math.ceil, Al = ht.ReactCurrentDispatcher, Du = ht.ReactCurrentOwner, sr = ht.ReactCurrentBatchConfig, Rt = 0, Gn = null, Hn = null, cr = 0, ya = 0, Co = Oa(0), kn = 0, zs = null, Oi = 0, Ro = 0, af = 0, Us = null, na = null, Vd = 0, To = 1 / 0, ga = null, xo = !1, Ou = null, jl = null, lf = !1, Zi = null, As = 0, Fl = 0, wo = null, js = -1, wr = 0;
  function Pn() {
    return Rt & 6 ? tt() : js !== -1 ? js : js = tt();
  }
  function Li(n) {
    return n.mode & 1 ? Rt & 2 && cr !== 0 ? cr & -cr : ly.transition !== null ? (wr === 0 && (wr = Xu()), wr) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ro(n.type)), n) : 1;
  }
  function Ur(n, r, l, o) {
    if (50 < Fl) throw Fl = 0, wo = null, Error(A(185));
    Pi(n, l, o), (!(Rt & 2) || n !== Gn) && (n === Gn && (!(Rt & 2) && (Ro |= l), kn === 4 && li(n, cr)), ra(n, o), l === 1 && Rt === 0 && !(r.mode & 1) && (To = tt() + 500, ho && Ti()));
  }
  function ra(n, r) {
    var l = n.callbackNode;
    au(n, r);
    var o = Ja(n, n === Gn ? cr : 0);
    if (o === 0) l !== null && ir(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ir(l), r === 1) n.tag === 0 ? _l(Bd.bind(null, n)) : wc(Bd.bind(null, n)), co(function() {
        !(Rt & 6) && Ti();
      }), l = null;
      else {
        switch (Ju(o)) {
          case 1:
            l = Xa;
            break;
          case 4:
            l = nu;
            break;
          case 16:
            l = ru;
            break;
          case 536870912:
            l = Qu;
            break;
          default:
            l = ru;
        }
        l = sh(l, uf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function uf(n, r) {
    if (js = -1, wr = 0, Rt & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (bo() && n.callbackNode !== l) return null;
    var o = Ja(n, n === Gn ? cr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = of(n, o);
    else {
      r = o;
      var c = Rt;
      Rt |= 2;
      var d = th();
      (Gn !== n || cr !== r) && (ga = null, To = tt() + 500, el(n, r));
      do
        try {
          nh();
          break;
        } catch (E) {
          eh(n, E);
        }
      while (!0);
      gd(), Al.current = d, Rt = c, Hn !== null ? r = 0 : (Gn = null, cr = 0, r = kn);
    }
    if (r !== 0) {
      if (r === 2 && (c = gl(n), c !== 0 && (o = c, r = Fs(n, c))), r === 1) throw l = zs, el(n, 0), li(n, o), ra(n, tt()), l;
      if (r === 6) li(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !cy(c) && (r = of(n, o), r === 2 && (d = gl(n), d !== 0 && (o = d, r = Fs(n, d))), r === 1)) throw l = zs, el(n, 0), li(n, o), ra(n, tt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            Nu(n, na, ga);
            break;
          case 3:
            if (li(n, o), (o & 130023424) === o && (r = Vd + 500 - tt(), 10 < r)) {
              if (Ja(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Pn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Rc(Nu.bind(null, n, na, ga), r);
              break;
            }
            Nu(n, na, ga);
            break;
          case 4:
            if (li(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Dr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = tt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * sy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Rc(Nu.bind(null, n, na, ga), o);
              break;
            }
            Nu(n, na, ga);
            break;
          case 5:
            Nu(n, na, ga);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return ra(n, tt()), n.callbackNode === l ? uf.bind(null, n) : null;
  }
  function Fs(n, r) {
    var l = Us;
    return n.current.memoizedState.isDehydrated && (el(n, r).flags |= 256), n = of(n, r), n !== 2 && (r = na, na = l, r !== null && Lu(r)), n;
  }
  function Lu(n) {
    na === null ? na = n : na.push.apply(na, n);
  }
  function cy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ti(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function li(n, r) {
    for (r &= ~af, r &= ~Ro, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Dr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Bd(n) {
    if (Rt & 6) throw Error(A(327));
    bo();
    var r = Ja(n, 0);
    if (!(r & 1)) return ra(n, tt()), null;
    var l = of(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = gl(n);
      o !== 0 && (r = o, l = Fs(n, o));
    }
    if (l === 1) throw l = zs, el(n, 0), li(n, r), ra(n, tt()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Nu(n, na, ga), ra(n, tt()), null;
  }
  function Id(n, r) {
    var l = Rt;
    Rt |= 1;
    try {
      return n(r);
    } finally {
      Rt = l, Rt === 0 && (To = tt() + 500, ho && Ti());
    }
  }
  function Mu(n) {
    Zi !== null && Zi.tag === 0 && !(Rt & 6) && bo();
    var r = Rt;
    Rt |= 1;
    var l = sr.transition, o = Lt;
    try {
      if (sr.transition = null, Lt = 1, n) return n();
    } finally {
      Lt = o, sr.transition = l, Rt = r, !(Rt & 6) && Ti();
    }
  }
  function $d() {
    ya = Co.current, ln(Co);
  }
  function el(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, pd(l)), Hn !== null) for (l = Hn.return; l !== null; ) {
      var o = l;
      switch (_c(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && vo();
          break;
        case 3:
          Eu(), ln(Wn), ln(Cn), Le();
          break;
        case 5:
          Lc(o);
          break;
        case 4:
          Eu();
          break;
        case 13:
          ln(Sn);
          break;
        case 19:
          ln(Sn);
          break;
        case 10:
          Sd(o.type._context);
          break;
        case 22:
        case 23:
          $d();
      }
      l = l.return;
    }
    if (Gn = n, Hn = n = Hl(n.current, null), cr = ya = r, kn = 0, zs = null, af = Ro = Oi = 0, na = Us = null, gu !== null) {
      for (r = 0; r < gu.length; r++) if (l = gu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      gu = null;
    }
    return n;
  }
  function eh(n, r) {
    do {
      var l = Hn;
      try {
        if (gd(), vt.current = bu, Nc) {
          for (var o = Nt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Nc = !1;
        }
        if (Gt = 0, Zn = An = Nt = null, hs = !1, Cu = 0, Du.current = null, l === null || l.return === null) {
          kn = 1, zs = r, Hn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = cr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, Y = E, X = Y.tag;
            if (!(Y.mode & 1) && (X === 0 || X === 11 || X === 15)) {
              var $ = Y.alternate;
              $ ? (Y.updateQueue = $.updateQueue, Y.memoizedState = $.memoizedState, Y.lanes = $.lanes) : (Y.updateQueue = null, Y.memoizedState = null);
            }
            var fe = Vv(m);
            if (fe !== null) {
              fe.flags &= -257, Ul(fe, m, E, d, r), fe.mode & 1 && Md(d, z, r), r = fe, T = z;
              var ye = r.updateQueue;
              if (ye === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(T), r.updateQueue = Ee;
              } else ye.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Md(d, z, r), Yd();
                break e;
              }
              T = Error(A(426));
            }
          } else if (pn && E.mode & 1) {
            var Dn = Vv(m);
            if (Dn !== null) {
              !(Dn.flags & 65536) && (Dn.flags |= 256), Ul(Dn, m, E, d, r), qi(_u(T, E));
              break e;
            }
          }
          d = T = _u(T, E), kn !== 4 && (kn = 2), Us === null ? Us = [d] : Us.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = Pv(d, T, r);
                Uv(d, k);
                break e;
              case 1:
                E = T;
                var w = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof w.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (jl === null || !jl.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var W = Ld(d, E, r);
                  Uv(d, W);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ah(l);
      } catch (ge) {
        r = ge, Hn === l && l !== null && (Hn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function th() {
    var n = Al.current;
    return Al.current = bu, n === null ? bu : n;
  }
  function Yd() {
    (kn === 0 || kn === 3 || kn === 2) && (kn = 4), Gn === null || !(Oi & 268435455) && !(Ro & 268435455) || li(Gn, cr);
  }
  function of(n, r) {
    var l = Rt;
    Rt |= 2;
    var o = th();
    (Gn !== n || cr !== r) && (ga = null, el(n, r));
    do
      try {
        fy();
        break;
      } catch (c) {
        eh(n, c);
      }
    while (!0);
    if (gd(), Rt = l, Al.current = o, Hn !== null) throw Error(A(261));
    return Gn = null, cr = 0, kn;
  }
  function fy() {
    for (; Hn !== null; ) rh(Hn);
  }
  function nh() {
    for (; Hn !== null && !Ga(); ) rh(Hn);
  }
  function rh(n) {
    var r = oh(n.alternate, n, ya);
    n.memoizedProps = n.pendingProps, r === null ? ah(n) : Hn = r, Du.current = null;
  }
  function ah(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = tf(l, r), l !== null) {
          l.flags &= 32767, Hn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          kn = 6, Hn = null;
          return;
        }
      } else if (l = Gv(l, r, ya), l !== null) {
        Hn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Hn = r;
        return;
      }
      Hn = r = n;
    } while (r !== null);
    kn === 0 && (kn = 5);
  }
  function Nu(n, r, l) {
    var o = Lt, c = sr.transition;
    try {
      sr.transition = null, Lt = 1, dy(n, r, l, o);
    } finally {
      sr.transition = c, Lt = o;
    }
    return null;
  }
  function dy(n, r, l, o) {
    do
      bo();
    while (Zi !== null);
    if (Rt & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Wf(n, d), n === Gn && (Hn = Gn = null, cr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || lf || (lf = !0, sh(ru, function() {
      return bo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = sr.transition, sr.transition = null;
      var m = Lt;
      Lt = 1;
      var E = Rt;
      Rt |= 4, Du.current = null, Xv(n, l), Fd(l, n), lo(pu), _a = !!is, pu = is = null, n.current = l, oy(l), qa(), Rt = E, Lt = m, sr.transition = d;
    } else n.current = l;
    if (lf && (lf = !1, Zi = n, As = c), d = n.pendingLanes, d === 0 && (jl = null), Yo(l.stateNode), ra(n, tt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (xo) throw xo = !1, n = Ou, Ou = null, n;
    return As & 1 && n.tag !== 0 && bo(), d = n.pendingLanes, d & 1 ? n === wo ? Fl++ : (Fl = 0, wo = n) : Fl = 0, Ti(), null;
  }
  function bo() {
    if (Zi !== null) {
      var n = Ju(As), r = sr.transition, l = Lt;
      try {
        if (sr.transition = null, Lt = 16 > n ? 16 : n, Zi === null) var o = !1;
        else {
          if (n = Zi, Zi = null, As = 0, Rt & 6) throw Error(A(331));
          var c = Rt;
          for (Rt |= 4, ve = n.current; ve !== null; ) {
            var d = ve, m = d.child;
            if (ve.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (ve = z; ve !== null; ) {
                    var Y = ve;
                    switch (Y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Os(8, Y, d);
                    }
                    var X = Y.child;
                    if (X !== null) X.return = Y, ve = X;
                    else for (; ve !== null; ) {
                      Y = ve;
                      var $ = Y.sibling, fe = Y.return;
                      if (rf(Y), Y === z) {
                        ve = null;
                        break;
                      }
                      if ($ !== null) {
                        $.return = fe, ve = $;
                        break;
                      }
                      ve = fe;
                    }
                  }
                }
                var ye = d.alternate;
                if (ye !== null) {
                  var Ee = ye.child;
                  if (Ee !== null) {
                    ye.child = null;
                    do {
                      var Dn = Ee.sibling;
                      Ee.sibling = null, Ee = Dn;
                    } while (Ee !== null);
                  }
                }
                ve = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ve = m;
            else e: for (; ve !== null; ) {
              if (d = ve, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Os(9, d, d.return);
              }
              var k = d.sibling;
              if (k !== null) {
                k.return = d.return, ve = k;
                break e;
              }
              ve = d.return;
            }
          }
          var w = n.current;
          for (ve = w; ve !== null; ) {
            m = ve;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, ve = L;
            else e: for (m = w; ve !== null; ) {
              if (E = ve, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ls(9, E);
                }
              } catch (ge) {
                vn(E, E.return, ge);
              }
              if (E === m) {
                ve = null;
                break e;
              }
              var W = E.sibling;
              if (W !== null) {
                W.return = E.return, ve = W;
                break e;
              }
              ve = E.return;
            }
          }
          if (Rt = c, Ti(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
            Wr.onPostCommitFiberRoot(ml, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Lt = l, sr.transition = r;
      }
    }
    return !1;
  }
  function ih(n, r, l) {
    r = _u(l, r), r = Pv(n, r, 1), n = Ml(n, r, 1), r = Pn(), n !== null && (Pi(n, 1, r), ra(n, r));
  }
  function vn(n, r, l) {
    if (n.tag === 3) ih(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ih(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (jl === null || !jl.has(o))) {
          n = _u(l, n), n = Ld(r, n, 1), r = Ml(r, n, 1), n = Pn(), r !== null && (Pi(r, 1, n), ra(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function py(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Pn(), n.pingedLanes |= n.suspendedLanes & l, Gn === n && (cr & l) === l && (kn === 4 || kn === 3 && (cr & 130023424) === cr && 500 > tt() - Vd ? el(n, 0) : af |= l), ra(n, r);
  }
  function lh(n, r) {
    r === 0 && (n.mode & 1 ? (r = da, da <<= 1, !(da & 130023424) && (da = 4194304)) : r = 1);
    var l = Pn();
    n = ha(n, r), n !== null && (Pi(n, r, l), ra(n, l));
  }
  function vy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), lh(n, l);
  }
  function uh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(A(314));
    }
    o !== null && o.delete(r), lh(n, l);
  }
  var oh;
  oh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Wn.current) jn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return jn = !1, _s(n, r, l);
      jn = !!(n.flags & 131072);
    }
    else jn = !1, pn && r.flags & 1048576 && Lv(r, Gi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        za(n, r), n = r.pendingProps;
        var c = qr(r, Cn.current);
        gn(r, l), c = Nl(null, r, o, n, c, l);
        var d = ri();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zn(o) ? (d = !0, Jn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Td(r), c.updater = Xc, r.stateNode = c, c._reactInternals = r, Rs(r, o, n, l), r = ws(null, r, o, !0, d, l)) : (r.tag = 0, pn && d && bc(r), or(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (za(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = my(o), n = ai(o, n), c) {
            case 0:
              r = Bv(null, r, o, n, l);
              break e;
            case 1:
              r = Iv(null, r, o, n, l);
              break e;
            case 11:
              r = ea(null, r, o, n, l);
              break e;
            case 14:
              r = ku(null, r, o, ai(o.type, n), l);
              break e;
          }
          throw Error(A(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Bv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Iv(n, r, o, c, l);
      case 3:
        e: {
          if (So(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, zv(n, r), cs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _u(Error(A(423)), r), r = $v(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _u(Error(A(424)), r), r = $v(n, r, o, l, c);
            break e;
          } else for (Kr = Ei(r.stateNode.containerInfo.firstChild), Xr = r, pn = !0, Ma = null, l = oe(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ll(), o === c) {
              r = Ua(n, r, l);
              break e;
            }
            or(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Av(r), n === null && md(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Cc(o, c) ? m = null : d !== null && Cc(o, d) && (r.flags |= 32), Nd(n, r), or(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return ef(n, r, l);
      case 4:
        return wd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = wn(r, null, o, l) : or(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), ea(n, r, o, c, l);
      case 7:
        return or(n, r, r.pendingProps, l), r.child;
      case 8:
        return or(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return or(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, _e(va, o._currentValue), o._currentValue = m, d !== null) if (ti(d.value, m)) {
            if (d.children === c.children && !Wn.current) {
              r = Ua(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = Xi(-1, l & -l), T.tag = 2;
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var Y = z.pending;
                      Y === null ? T.next = T : (T.next = Y.next, Y.next = T), z.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Ed(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(A(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Ed(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          or(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, gn(r, l), c = Na(c), o = o(c), r.flags |= 1, or(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ai(o, r.pendingProps), c = ai(o.type, c), ku(n, r, o, c, l);
      case 15:
        return nt(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), za(n, r), r.tag = 1, zn(o) ? (n = !0, Jn(r)) : n = !1, gn(r, l), Kc(r, o, c), Rs(r, o, c, l), ws(null, r, o, !0, n, l);
      case 19:
        return _i(n, r, l);
      case 22:
        return xs(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function sh(n, r) {
    return cn(n, r);
  }
  function hy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ja(n, r, l, o) {
    return new hy(n, r, l, o);
  }
  function Wd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function my(n) {
    if (typeof n == "function") return Wd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === _t) return 11;
      if (n === kt) return 14;
    }
    return 2;
  }
  function Hl(n, r) {
    var l = n.alternate;
    return l === null ? (l = ja(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Hs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Wd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Ie:
        return tl(l.children, c, d, r);
      case un:
        m = 8, c |= 8;
        break;
      case Ht:
        return n = ja(12, l, r, c | 2), n.elementType = Ht, n.lanes = d, n;
      case Ne:
        return n = ja(13, l, r, c), n.elementType = Ne, n.lanes = d, n;
      case jt:
        return n = ja(19, l, r, c), n.elementType = jt, n.lanes = d, n;
      case Re:
        return Pl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case en:
            m = 10;
            break e;
          case on:
            m = 9;
            break e;
          case _t:
            m = 11;
            break e;
          case kt:
            m = 14;
            break e;
          case Ot:
            m = 16, o = null;
            break e;
        }
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = ja(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function tl(n, r, l, o) {
    return n = ja(7, n, o, r), n.lanes = l, n;
  }
  function Pl(n, r, l, o) {
    return n = ja(22, n, o, r), n.elementType = Re, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Qd(n, r, l) {
    return n = ja(6, n, null, r), n.lanes = l, n;
  }
  function sf(n, r, l) {
    return r = ja(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function ch(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ku(0), this.expirationTimes = Ku(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ku(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function cf(n, r, l, o, c, d, m, E, T) {
    return n = new ch(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ja(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Td(d), n;
  }
  function yy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: lt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Gd(n) {
    if (!n) return Rr;
    n = n._reactInternals;
    e: {
      if (et(n) !== n || n.tag !== 1) throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (zn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (zn(l)) return os(n, l, r);
    }
    return r;
  }
  function fh(n, r, l, o, c, d, m, E, T) {
    return n = cf(l, o, !0, n, c, d, m, E, T), n.context = Gd(null), l = n.current, o = Pn(), c = Li(l), d = Xi(o, c), d.callback = r ?? null, Ml(l, d, c), n.current.lanes = c, Pi(n, c, o), ra(n, o), n;
  }
  function ff(n, r, l, o) {
    var c = r.current, d = Pn(), m = Li(c);
    return l = Gd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Xi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ml(c, r, m), n !== null && (Ur(n, c, m, d), Oc(n, c, m)), m;
  }
  function df(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function qd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function pf(n, r) {
    qd(n, r), (n = n.alternate) && qd(n, r);
  }
  function dh() {
    return null;
  }
  var zu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Xd(n) {
    this._internalRoot = n;
  }
  vf.prototype.render = Xd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    ff(n, r, null, null);
  }, vf.prototype.unmount = Xd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Mu(function() {
        ff(null, n, null, null);
      }), r[Wi] = null;
    }
  };
  function vf(n) {
    this._internalRoot = n;
  }
  vf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = qe();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Yn.length && r !== 0 && r < Yn[l].priority; l++) ;
      Yn.splice(l, 0, n), l === 0 && Go(n);
    }
  };
  function Kd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function hf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ph() {
  }
  function gy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = df(m);
          d.call(z);
        };
      }
      var m = fh(r, o, n, 0, null, !1, !1, "", ph);
      return n._reactRootContainer = m, n[Wi] = m.current, oo(n.nodeType === 8 ? n.parentNode : n), Mu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = df(T);
        E.call(z);
      };
    }
    var T = cf(n, 0, !1, null, null, !1, !1, "", ph);
    return n._reactRootContainer = T, n[Wi] = T.current, oo(n.nodeType === 8 ? n.parentNode : n), Mu(function() {
      ff(r, T, l, o);
    }), T;
  }
  function Ps(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = df(m);
          E.call(T);
        };
      }
      ff(r, m, n, c);
    } else m = gy(l, r, n, c, o);
    return df(m);
  }
  wt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Ka(r.pendingLanes);
          l !== 0 && (Vi(r, l | 1), ra(r, tt()), !(Rt & 6) && (To = tt() + 500, Ti()));
        }
        break;
      case 13:
        Mu(function() {
          var o = ha(n, 1);
          if (o !== null) {
            var c = Pn();
            Ur(o, n, 1, c);
          }
        }), pf(n, 1);
    }
  }, Wo = function(n) {
    if (n.tag === 13) {
      var r = ha(n, 134217728);
      if (r !== null) {
        var l = Pn();
        Ur(r, n, 134217728, l);
      }
      pf(n, 134217728);
    }
  }, hi = function(n) {
    if (n.tag === 13) {
      var r = Li(n), l = ha(n, r);
      if (l !== null) {
        var o = Pn();
        Ur(l, n, r, o);
      }
      pf(n, r);
    }
  }, qe = function() {
    return Lt;
  }, Zu = function(n, r) {
    var l = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = l;
    }
  }, $t = function(n, r, l) {
    switch (r) {
      case "input":
        if (Yr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = yn(o);
              if (!c) throw Error(A(90));
              br(o), Yr(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ya(n, l);
        break;
      case "select":
        r = l.value, r != null && Tn(n, !!l.multiple, r, !1);
    }
  }, eu = Id, pl = Mu;
  var Sy = { usingClientEntryPoint: !1, Events: [Oe, ni, yn, Hi, Zl, Id] }, Vs = { findFiberByHostInstance: vu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, vh = { bundleType: Vs.bundleType, version: Vs.version, rendererPackageName: Vs.rendererPackageName, rendererConfig: Vs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ht.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = xn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Vs.findFiberByHostInstance || dh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber) try {
      ml = Vl.inject(vh), Wr = Vl;
    } catch {
    }
  }
  return Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sy, Ia.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Kd(r)) throw Error(A(200));
    return yy(n, r, null, l);
  }, Ia.createRoot = function(n, r) {
    if (!Kd(n)) throw Error(A(299));
    var l = !1, o = "", c = zu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = cf(n, 1, !1, null, null, l, !1, o, c), n[Wi] = r.current, oo(n.nodeType === 8 ? n.parentNode : n), new Xd(r);
  }, Ia.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = xn(r), n = n === null ? null : n.stateNode, n;
  }, Ia.flushSync = function(n) {
    return Mu(n);
  }, Ia.hydrate = function(n, r, l) {
    if (!hf(r)) throw Error(A(200));
    return Ps(null, n, r, !0, l);
  }, Ia.hydrateRoot = function(n, r, l) {
    if (!Kd(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = zu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = fh(r, null, n, 1, l ?? null, c, !1, d, m), n[Wi] = r.current, oo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new vf(r);
  }, Ia.render = function(n, r, l) {
    if (!hf(r)) throw Error(A(200));
    return Ps(null, n, r, !1, l);
  }, Ia.unmountComponentAtNode = function(n) {
    if (!hf(n)) throw Error(A(40));
    return n._reactRootContainer ? (Mu(function() {
      Ps(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Wi] = null;
      });
    }), !0) : !1;
  }, Ia.unstable_batchedUpdates = Id, Ia.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!hf(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return Ps(n, r, l, !1, o);
  }, Ia.version = "18.3.1-next-f1338f8080-20240426", Ia;
}
var $a = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iT;
function ak() {
  return iT || (iT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var Q = Jt, G = uT(), A = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ze = !1;
    function Ge(e) {
      Ze = e;
    }
    function Fe(e) {
      if (!Ze) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        gt("warn", e, a);
      }
    }
    function S(e) {
      if (!Ze) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        gt("error", e, a);
      }
    }
    function gt(e, t, a) {
      {
        var i = A.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ne = 0, te = 1, ke = 2, J = 3, me = 4, q = 5, De = 6, We = 7, Me = 8, Zt = 9, it = 10, Ae = 11, ht = 12, Ce = 13, lt = 14, Ie = 15, un = 16, Ht = 17, en = 18, on = 19, _t = 21, Ne = 22, jt = 23, kt = 24, Ot = 25, Re = !0, ee = !1, Te = !1, ie = !1, _ = !1, P = !0, $e = !0, Ve = !0, ft = !0, ut = /* @__PURE__ */ new Set(), rt = {}, ot = {};
    function dt(e, t) {
      Bt(e, t), Bt(e + "Capture", t);
    }
    function Bt(e, t) {
      rt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), rt[e] = t;
      {
        var a = e.toLowerCase();
        ot[a] = e, e === "onDoubleClick" && (ot.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ut.add(t[i]);
    }
    var Ln = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", br = Object.prototype.hasOwnProperty;
    function Rn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function rr(e) {
      try {
        return Bn(e), !1;
      } catch {
        return !0;
      }
    }
    function Bn(e) {
      return "" + e;
    }
    function In(e, t) {
      if (rr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), Bn(e);
    }
    function Yr(e) {
      if (rr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), Bn(e);
    }
    function ci(e, t) {
      if (rr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), Bn(e);
    }
    function sa(e, t) {
      if (rr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), Bn(e);
    }
    function Xn(e) {
      if (rr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), Bn(e);
    }
    function Tn(e) {
      if (rr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Rn(e)), Bn(e);
    }
    var $n = 0, Sr = 1, Ya = 2, Mn = 3, Er = 4, ca = 5, Wa = 6, fi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", re = fi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", xe = new RegExp("^[" + fi + "][" + re + "]*$"), st = {}, Ft = {};
    function tn(e) {
      return br.call(Ft, e) ? !0 : br.call(st, e) ? !1 : xe.test(e) ? (Ft[e] = !0, !0) : (st[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function hn(e, t, a) {
      return t !== null ? t.type === $n : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function sn(e, t, a, i) {
      if (a !== null && a.type === $n)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Kn(e, t, a, i) {
      if (t === null || typeof t > "u" || sn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Mn:
            return !t;
          case Er:
            return t === !1;
          case ca:
            return isNaN(t);
          case Wa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function nn(e) {
      return $t.hasOwnProperty(e) ? $t[e] : null;
    }
    function It(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ya || t === Mn || t === Er, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var $t = {}, fa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    fa.forEach(function(e) {
      $t[e] = new It(
        e,
        $n,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      $t[t] = new It(
        t,
        Sr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      $t[e] = new It(
        e,
        Ya,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      $t[e] = new It(
        e,
        Ya,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      $t[e] = new It(
        e,
        Mn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      $t[e] = new It(
        e,
        Mn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      $t[e] = new It(
        e,
        Er,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      $t[e] = new It(
        e,
        Wa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      $t[e] = new It(
        e,
        ca,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Cr = /[\-\:]([a-z])/g, xa = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Cr, xa);
      $t[t] = new It(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Cr, xa);
      $t[t] = new It(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Cr, xa);
      $t[t] = new It(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      $t[e] = new It(
        e,
        Sr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Hi = "xlinkHref";
    $t[Hi] = new It(
      "xlinkHref",
      Sr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      $t[e] = new It(
        e,
        Sr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Zl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, eu = !1;
    function pl(e) {
      !eu && Zl.test(e) && (eu = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function vl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        In(a, t), i.sanitizeURL && pl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Er) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Kn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Kn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Mn)
            return a;
          f = e.getAttribute(s);
        }
        return Kn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function tu(e, t, a, i) {
      {
        if (!tn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return In(a, t), u === "" + a ? a : u;
      }
    }
    function _r(e, t, a, i) {
      var u = nn(t);
      if (!hn(t, u, i)) {
        if (Kn(t, a, u, i) && (a = null), i || u === null) {
          if (tn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (In(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Mn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, x;
          b === Mn || b === Er && a === !0 ? x = "" : (In(a, y), x = "" + a, u.sanitizeURL && pl(x.toString())), g ? e.setAttributeNS(g, y, x) : e.setAttribute(y, x);
        }
      }
    }
    var kr = Symbol.for("react.element"), ar = Symbol.for("react.portal"), di = Symbol.for("react.fragment"), Qa = Symbol.for("react.strict_mode"), pi = Symbol.for("react.profiler"), vi = Symbol.for("react.provider"), R = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), et = Symbol.for("react.memo"), Xe = Symbol.for("react.lazy"), mt = Symbol.for("react.scope"), pt = Symbol.for("react.debug_trace_mode"), xn = Symbol.for("react.offscreen"), rn = Symbol.for("react.legacy_hidden"), cn = Symbol.for("react.cache"), ir = Symbol.for("react.tracing_marker"), Ga = Symbol.iterator, qa = "@@iterator";
    function tt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ga && e[Ga] || e[qa];
      return typeof t == "function" ? t : null;
    }
    var at = Object.assign, Xa = 0, nu, ru, hl, Qu, ml, Wr, Yo;
    function Dr() {
    }
    Dr.__reactDisabledLog = !0;
    function lc() {
      {
        if (Xa === 0) {
          nu = console.log, ru = console.info, hl = console.warn, Qu = console.error, ml = console.group, Wr = console.groupCollapsed, Yo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Dr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Xa++;
      }
    }
    function uc() {
      {
        if (Xa--, Xa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: at({}, e, {
              value: nu
            }),
            info: at({}, e, {
              value: ru
            }),
            warn: at({}, e, {
              value: hl
            }),
            error: at({}, e, {
              value: Qu
            }),
            group: at({}, e, {
              value: ml
            }),
            groupCollapsed: at({}, e, {
              value: Wr
            }),
            groupEnd: at({}, e, {
              value: Yo
            })
          });
        }
        Xa < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Gu = A.ReactCurrentDispatcher, yl;
    function da(e, t, a) {
      {
        if (yl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            yl = i && i[1] || "";
          }
        return `
` + yl + e;
      }
    }
    var Ka = !1, Ja;
    {
      var qu = typeof WeakMap == "function" ? WeakMap : Map;
      Ja = new qu();
    }
    function au(e, t) {
      if (!e || Ka)
        return "";
      {
        var a = Ja.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Ka = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Gu.current, Gu.current = null, lc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && Ja.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Ka = !1, Gu.current = s, uc(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", M = x ? da(x) : "";
      return typeof e == "function" && Ja.set(e, M), M;
    }
    function gl(e, t, a) {
      return au(e, !0);
    }
    function Xu(e, t, a) {
      return au(e, !1);
    }
    function Ku(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Pi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return au(e, Ku(e));
      if (typeof e == "string")
        return da(e);
      switch (e) {
        case ue:
          return da("Suspense");
        case he:
          return da("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case B:
            return Xu(e.render);
          case et:
            return Pi(e.type, t, a);
          case Xe: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Pi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Wf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case q:
          return da(e.type);
        case un:
          return da("Lazy");
        case Ce:
          return da("Suspense");
        case on:
          return da("SuspenseList");
        case ne:
        case ke:
        case Ie:
          return Xu(e.type);
        case Ae:
          return Xu(e.type.render);
        case te:
          return gl(e.type);
        default:
          return "";
      }
    }
    function Vi(e) {
      try {
        var t = "", a = e;
        do
          t += Wf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Lt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Ju(e) {
      return e.displayName || "Context";
    }
    function wt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case di:
          return "Fragment";
        case ar:
          return "Portal";
        case pi:
          return "Profiler";
        case Qa:
          return "StrictMode";
        case ue:
          return "Suspense";
        case he:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Ju(t) + ".Consumer";
          case vi:
            var a = e;
            return Ju(a._context) + ".Provider";
          case B:
            return Lt(e, e.render, "ForwardRef");
          case et:
            var i = e.displayName || null;
            return i !== null ? i : wt(e.type) || "Memo";
          case Xe: {
            var u = e, s = u._payload, f = u._init;
            try {
              return wt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Wo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function hi(e) {
      return e.displayName || "Context";
    }
    function qe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case kt:
          return "Cache";
        case Zt:
          var i = a;
          return hi(i) + ".Consumer";
        case it:
          var u = a;
          return hi(u._context) + ".Provider";
        case en:
          return "DehydratedFragment";
        case Ae:
          return Wo(a, a.render, "ForwardRef");
        case We:
          return "Fragment";
        case q:
          return a;
        case me:
          return "Portal";
        case J:
          return "Root";
        case De:
          return "Text";
        case un:
          return wt(a);
        case Me:
          return a === Qa ? "StrictMode" : "Mode";
        case Ne:
          return "Offscreen";
        case ht:
          return "Profiler";
        case _t:
          return "Scope";
        case Ce:
          return "Suspense";
        case on:
          return "SuspenseList";
        case Ot:
          return "TracingMarker";
        case te:
        case ne:
        case Ht:
        case ke:
        case lt:
        case Ie:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Zu = A.ReactDebugCurrentFrame, lr = null, mi = !1;
    function Or() {
      {
        if (lr === null)
          return null;
        var e = lr._debugOwner;
        if (e !== null && typeof e < "u")
          return qe(e);
      }
      return null;
    }
    function yi() {
      return lr === null ? "" : Vi(lr);
    }
    function fn() {
      Zu.getCurrentStack = null, lr = null, mi = !1;
    }
    function Yt(e) {
      Zu.getCurrentStack = e === null ? null : yi, lr = e, mi = !1;
    }
    function Sl() {
      return lr;
    }
    function Yn(e) {
      mi = e;
    }
    function Lr(e) {
      return "" + e;
    }
    function wa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Tn(e), e;
        default:
          return "";
      }
    }
    var iu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Qo(e, t) {
      iu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Go(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function El(e) {
      return e._valueTracker;
    }
    function lu(e) {
      e._valueTracker = null;
    }
    function Qf(e) {
      var t = "";
      return e && (Go(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ba(e) {
      var t = Go(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Tn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Tn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Tn(p), i = "" + p;
          },
          stopTracking: function() {
            lu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Za(e) {
      El(e) || (e._valueTracker = ba(e));
    }
    function gi(e) {
      if (!e)
        return !1;
      var t = El(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Qf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function _a(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var eo = !1, to = !1, Cl = !1, uu = !1;
    function no(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ro(e, t) {
      var a = e, i = t.checked, u = at({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ei(e, t) {
      Qo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !to && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), to = !0), t.value !== void 0 && t.defaultValue !== void 0 && !eo && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), eo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: wa(t.value != null ? t.value : i),
        controlled: no(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && _r(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = no(t);
        !a._wrapperState.controlled && i && !uu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), uu = !0), a._wrapperState.controlled && !i && !Cl && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Cl = !0);
      }
      h(e, t);
      var u = wa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Lr(u)) : a.value !== Lr(u) && (a.value = Lr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ze(a, t.type, u) : t.hasOwnProperty("defaultValue") && ze(a, t.type, wa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function N(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Lr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function j(e, t) {
      var a = e;
      C(a, t), Z(a, t);
    }
    function Z(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        In(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Mh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            gi(f), C(f, p);
          }
        }
      }
    }
    function ze(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || _a(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Lr(e._wrapperState.initialValue) : e.defaultValue !== Lr(a) && (e.defaultValue = Lr(a)));
    }
    var le = !1, He = !1, yt = !1;
    function bt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Q.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || He || (He = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (yt || (yt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !le && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), le = !0);
    }
    function an(e, t) {
      t.value != null && e.setAttribute("value", Lr(wa(t.value)));
    }
    var Wt = Array.isArray;
    function ct(e) {
      return Wt(e);
    }
    var Qt;
    Qt = !1;
    function mn() {
      var e = Or();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Rl = ["value", "defaultValue"];
    function qo(e) {
      {
        Qo("select", e);
        for (var t = 0; t < Rl.length; t++) {
          var a = Rl[t];
          if (e[a] != null) {
            var i = ct(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, mn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, mn());
          }
        }
      }
    }
    function Bi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Lr(wa(a)), b = null, x = 0; x < u.length; x++) {
          if (u[x].value === g) {
            u[x].selected = !0, i && (u[x].defaultSelected = !0);
            return;
          }
          b === null && !u[x].disabled && (b = u[x]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function Xo(e, t) {
      return at({}, t, {
        value: void 0
      });
    }
    function ou(e, t) {
      var a = e;
      qo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Qt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Qt = !0);
    }
    function Gf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Bi(a, !!t.multiple, i, !1) : t.defaultValue != null && Bi(a, !!t.multiple, t.defaultValue, !0);
    }
    function oc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Bi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Bi(a, !!t.multiple, t.defaultValue, !0) : Bi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function qf(e, t) {
      var a = e, i = t.value;
      i != null && Bi(a, !!t.multiple, i, !1);
    }
    var tv = !1;
    function Xf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = at({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Lr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Kf(e, t) {
      var a = e;
      Qo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !tv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component"), tv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ct(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: wa(i)
      };
    }
    function nv(e, t) {
      var a = e, i = wa(t.value), u = wa(t.defaultValue);
      if (i != null) {
        var s = Lr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Lr(u));
    }
    function rv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Gm(e, t) {
      nv(e, t);
    }
    var Ii = "http://www.w3.org/1999/xhtml", Jf = "http://www.w3.org/1998/Math/MathML", Zf = "http://www.w3.org/2000/svg";
    function ed(e) {
      switch (e) {
        case "svg":
          return Zf;
        case "math":
          return Jf;
        default:
          return Ii;
      }
    }
    function td(e, t) {
      return e == null || e === Ii ? ed(t) : e === Zf && t === "foreignObject" ? Ii : e;
    }
    var av = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, sc, iv = av(function(e, t) {
      if (e.namespaceURI === Zf && !("innerHTML" in e)) {
        sc = sc || document.createElement("div"), sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qr = 1, $i = 3, Nn = 8, Yi = 9, nd = 11, ao = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === $i) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Ko = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Jo = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function lv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var uv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Jo).forEach(function(e) {
      uv.forEach(function(t) {
        Jo[lv(t, e)] = Jo[e];
      });
    });
    function cc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Jo.hasOwnProperty(e) && Jo[e]) ? t + "px" : (sa(t, e), ("" + t).trim());
    }
    var ov = /([A-Z])/g, sv = /^ms-/;
    function io(e) {
      return e.replace(ov, "-$1").toLowerCase().replace(sv, "-ms-");
    }
    var cv = function() {
    };
    {
      var qm = /^(?:webkit|moz|o)[A-Z]/, Xm = /^-ms-/, fv = /-(.)/g, rd = /;\s*$/, Si = {}, su = {}, dv = !1, Zo = !1, Km = function(e) {
        return e.replace(fv, function(t, a) {
          return a.toUpperCase();
        });
      }, pv = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Km(e.replace(Xm, "ms-"))
        ));
      }, ad = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, id = function(e, t) {
        su.hasOwnProperty(t) && su[t] || (su[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(rd, "")));
      }, vv = function(e, t) {
        dv || (dv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, hv = function(e, t) {
        Zo || (Zo = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      cv = function(e, t) {
        e.indexOf("-") > -1 ? pv(e) : qm.test(e) ? ad(e) : rd.test(t) && id(e, t), typeof t == "number" && (isNaN(t) ? vv(e, t) : isFinite(t) || hv(e, t));
      };
    }
    var mv = cv;
    function Jm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : io(i)) + ":", t += cc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function yv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || mv(i, t[i]);
          var s = cc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Zm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function gv(e) {
      var t = {};
      for (var a in e)
        for (var i = Ko[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ey(e, t) {
      {
        if (!t)
          return;
        var a = gv(e), i = gv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Zm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ti = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, es = at({
      menuitem: !0
    }, ti), Sv = "__html";
    function fc(e, t) {
      if (t) {
        if (es[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Sv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Tl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var ts = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, dc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, lo = {}, ty = new RegExp("^(aria)-[" + re + "]*$"), uo = new RegExp("^(aria)[A-Z][" + re + "]*$");
    function ld(e, t) {
      {
        if (br.call(lo, t) && lo[t])
          return !0;
        if (uo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = dc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), lo[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), lo[t] = !0, !0;
        }
        if (ty.test(t)) {
          var u = t.toLowerCase(), s = dc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return lo[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), lo[t] = !0, !0;
        }
      }
      return !0;
    }
    function ns(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = ld(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function ud(e, t) {
      Tl(e, t) || ns(e, t);
    }
    var od = !1;
    function pc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !od && (od = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var cu = function() {
    };
    {
      var ur = {}, sd = /^on./, vc = /^on[^A-Z]/, Ev = new RegExp("^(aria)-[" + re + "]*$"), Cv = new RegExp("^(aria)[A-Z][" + re + "]*$");
      cu = function(e, t, a, i) {
        if (br.call(ur, t) && ur[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ur[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), ur[t] = !0, !0;
          if (sd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), ur[t] = !0, !0;
        } else if (sd.test(t))
          return vc.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ur[t] = !0, !0;
        if (Ev.test(t) || Cv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ur[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ur[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), ur[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ur[t] = !0, !0;
        var v = nn(t), y = v !== null && v.type === $n;
        if (ts.hasOwnProperty(u)) {
          var g = ts[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), ur[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), ur[t] = !0, !0;
        return typeof a == "boolean" && sn(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), ur[t] = !0, !0) : y ? !0 : sn(t, a, v, !1) ? (ur[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Mn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), ur[t] = !0), !0);
      };
    }
    var Rv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = cu(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Tv(e, t, a) {
      Tl(e, t) || Rv(e, t, a);
    }
    var cd = 1, hc = 2, ka = 4, fd = cd | hc | ka, fu = null;
    function ny(e) {
      fu !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), fu = e;
    }
    function ry() {
      fu === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), fu = null;
    }
    function rs(e) {
      return e === fu;
    }
    function dd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === $i ? t.parentNode : t;
    }
    var mc = null, du = null, Pt = null;
    function yc(e) {
      var t = Do(e);
      if (t) {
        if (typeof mc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Mh(a);
          mc(t.stateNode, t.type, i);
        }
      }
    }
    function gc(e) {
      mc = e;
    }
    function oo(e) {
      du ? Pt ? Pt.push(e) : Pt = [e] : du = e;
    }
    function xv() {
      return du !== null || Pt !== null;
    }
    function Sc() {
      if (du) {
        var e = du, t = Pt;
        if (du = null, Pt = null, yc(e), t)
          for (var a = 0; a < t.length; a++)
            yc(t[a]);
      }
    }
    var so = function(e, t) {
      return e(t);
    }, as = function() {
    }, xl = !1;
    function wv() {
      var e = xv();
      e && (as(), Sc());
    }
    function bv(e, t, a) {
      if (xl)
        return e(t, a);
      xl = !0;
      try {
        return so(e, t, a);
      } finally {
        xl = !1, wv();
      }
    }
    function ay(e, t, a) {
      so = e, as = a;
    }
    function _v(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ec(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && _v(t));
        default:
          return !1;
      }
    }
    function wl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Mh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Ec(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var is = !1;
    if (Ln)
      try {
        var pu = {};
        Object.defineProperty(pu, "passive", {
          get: function() {
            is = !0;
          }
        }), window.addEventListener("test", pu, pu), window.removeEventListener("test", pu, pu);
      } catch {
        is = !1;
      }
    function Cc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Rc = Cc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var pd = document.createElement("react");
      Rc = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, x = !0, M = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          pd.removeEventListener(H, Ue, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var se = Array.prototype.slice.call(arguments, 3);
        function Ue() {
          b = !0, F(), a.apply(i, se), x = !1;
        }
        var we, xt = !1, St = !1;
        function D(O) {
          if (we = O.error, xt = !0, we === null && O.colno === 0 && O.lineno === 0 && (St = !0), O.defaultPrevented && we != null && typeof we == "object")
            try {
              we._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), pd.addEventListener(H, Ue, !1), g.initEvent(H, !1, !1), pd.dispatchEvent(g), U && Object.defineProperty(window, "event", U), b && x && (xt ? St && (we = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : we = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(we)), window.removeEventListener("error", D), !b)
          return F(), Cc.apply(this, arguments);
      };
    }
    var kv = Rc, co = !1, Tc = null, fo = !1, Ei = null, Dv = {
      onError: function(e) {
        co = !0, Tc = e;
      }
    };
    function bl(e, t, a, i, u, s, f, p, v) {
      co = !1, Tc = null, kv.apply(Dv, arguments);
    }
    function Ci(e, t, a, i, u, s, f, p, v) {
      if (bl.apply(this, arguments), co) {
        var y = us();
        fo || (fo = !0, Ei = y);
      }
    }
    function ls() {
      if (fo) {
        var e = Ei;
        throw fo = !1, Ei = null, e;
      }
    }
    function Wi() {
      return co;
    }
    function us() {
      if (co) {
        var e = Tc;
        return co = !1, Tc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function po(e) {
      return e._reactInternals;
    }
    function iy(e) {
      return e._reactInternals !== void 0;
    }
    function vu(e, t) {
      e._reactInternals = t;
    }
    var Oe = (
      /*                      */
      0
    ), ni = (
      /*                */
      1
    ), yn = (
      /*                    */
      2
    ), Ct = (
      /*                       */
      4
    ), Da = (
      /*                */
      16
    ), Oa = (
      /*                 */
      32
    ), ln = (
      /*                     */
      64
    ), _e = (
      /*                   */
      128
    ), Rr = (
      /*            */
      256
    ), Cn = (
      /*                          */
      512
    ), Wn = (
      /*                     */
      1024
    ), Gr = (
      /*                      */
      2048
    ), qr = (
      /*                    */
      4096
    ), zn = (
      /*                   */
      8192
    ), vo = (
      /*             */
      16384
    ), Ov = (
      /*               */
      32767
    ), os = (
      /*                   */
      32768
    ), Jn = (
      /*                */
      65536
    ), xc = (
      /* */
      131072
    ), Ri = (
      /*                       */
      1048576
    ), ho = (
      /*                    */
      2097152
    ), Qi = (
      /*                 */
      4194304
    ), wc = (
      /*                */
      8388608
    ), _l = (
      /*               */
      16777216
    ), Ti = (
      /*              */
      33554432
    ), kl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ct | Wn | 0
    ), Dl = yn | Ct | Da | Oa | Cn | qr | zn, Ol = Ct | ln | Cn | zn, Gi = Gr | Da, Un = Qi | wc | ho, La = A.ReactCurrentOwner;
    function pa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (yn | qr)) !== Oe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === J ? a : null;
    }
    function xi(e) {
      if (e.tag === Ce) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function wi(e) {
      return e.tag === J ? e.stateNode.containerInfo : null;
    }
    function hu(e) {
      return pa(e) === e;
    }
    function Lv(e) {
      {
        var t = La.current;
        if (t !== null && t.tag === te) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", qe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = po(e);
      return u ? pa(u) === u : !1;
    }
    function bc(e) {
      if (pa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function _c(e) {
      var t = e.alternate;
      if (!t) {
        var a = pa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return bc(s), e;
            if (v === u)
              return bc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== J)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Xr(e) {
      var t = _c(e);
      return t !== null ? Kr(t) : null;
    }
    function Kr(e) {
      if (e.tag === q || e.tag === De)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Kr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function pn(e) {
      var t = _c(e);
      return t !== null ? Ma(t) : null;
    }
    function Ma(e) {
      if (e.tag === q || e.tag === De)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== me) {
          var a = Ma(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = G.unstable_scheduleCallback, Mv = G.unstable_cancelCallback, hd = G.unstable_shouldYield, md = G.unstable_requestPaint, Qn = G.unstable_now, kc = G.unstable_getCurrentPriorityLevel, ss = G.unstable_ImmediatePriority, Ll = G.unstable_UserBlockingPriority, qi = G.unstable_NormalPriority, ly = G.unstable_LowPriority, mu = G.unstable_IdlePriority, Dc = G.unstable_yieldValue, Nv = G.unstable_setDisableYieldValue, yu = null, wn = null, oe = null, va = !1, Jr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function mo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        $e && (e = at({}, e, {
          getLaneLabelMap: gu,
          injectProfilingHooks: Na
        })), yu = t.inject(e), wn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function yd(e, t) {
      if (wn && typeof wn.onScheduleFiberRoot == "function")
        try {
          wn.onScheduleFiberRoot(yu, e, t);
        } catch (a) {
          va || (va = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function gd(e, t) {
      if (wn && typeof wn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & _e) === _e;
          if (Ve) {
            var i;
            switch (t) {
              case Mr:
                i = ss;
                break;
              case _i:
                i = Ll;
                break;
              case za:
                i = qi;
                break;
              case Ua:
                i = mu;
                break;
              default:
                i = qi;
                break;
            }
            wn.onCommitFiberRoot(yu, e, i, a);
          }
        } catch (u) {
          va || (va = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Sd(e) {
      if (wn && typeof wn.onPostCommitFiberRoot == "function")
        try {
          wn.onPostCommitFiberRoot(yu, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ed(e) {
      if (wn && typeof wn.onCommitFiberUnmount == "function")
        try {
          wn.onCommitFiberUnmount(yu, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function gn(e) {
      if (typeof Dc == "function" && (Nv(e), Ge(e)), wn && typeof wn.setStrictMode == "function")
        try {
          wn.setStrictMode(yu, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Na(e) {
      oe = e;
    }
    function gu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Cu; a++) {
          var i = jv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Cd(e) {
      oe !== null && typeof oe.markCommitStarted == "function" && oe.markCommitStarted(e);
    }
    function Rd() {
      oe !== null && typeof oe.markCommitStopped == "function" && oe.markCommitStopped();
    }
    function ha(e) {
      oe !== null && typeof oe.markComponentRenderStarted == "function" && oe.markComponentRenderStarted(e);
    }
    function ma() {
      oe !== null && typeof oe.markComponentRenderStopped == "function" && oe.markComponentRenderStopped();
    }
    function Td(e) {
      oe !== null && typeof oe.markComponentPassiveEffectMountStarted == "function" && oe.markComponentPassiveEffectMountStarted(e);
    }
    function zv() {
      oe !== null && typeof oe.markComponentPassiveEffectMountStopped == "function" && oe.markComponentPassiveEffectMountStopped();
    }
    function Xi(e) {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStarted == "function" && oe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ml() {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStopped == "function" && oe.markComponentPassiveEffectUnmountStopped();
    }
    function Oc(e) {
      oe !== null && typeof oe.markComponentLayoutEffectMountStarted == "function" && oe.markComponentLayoutEffectMountStarted(e);
    }
    function Uv() {
      oe !== null && typeof oe.markComponentLayoutEffectMountStopped == "function" && oe.markComponentLayoutEffectMountStopped();
    }
    function cs(e) {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStarted == "function" && oe.markComponentLayoutEffectUnmountStarted(e);
    }
    function xd() {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStopped == "function" && oe.markComponentLayoutEffectUnmountStopped();
    }
    function fs(e, t, a) {
      oe !== null && typeof oe.markComponentErrored == "function" && oe.markComponentErrored(e, t, a);
    }
    function bi(e, t, a) {
      oe !== null && typeof oe.markComponentSuspended == "function" && oe.markComponentSuspended(e, t, a);
    }
    function ds(e) {
      oe !== null && typeof oe.markLayoutEffectsStarted == "function" && oe.markLayoutEffectsStarted(e);
    }
    function ps() {
      oe !== null && typeof oe.markLayoutEffectsStopped == "function" && oe.markLayoutEffectsStopped();
    }
    function Su(e) {
      oe !== null && typeof oe.markPassiveEffectsStarted == "function" && oe.markPassiveEffectsStarted(e);
    }
    function wd() {
      oe !== null && typeof oe.markPassiveEffectsStopped == "function" && oe.markPassiveEffectsStopped();
    }
    function Eu(e) {
      oe !== null && typeof oe.markRenderStarted == "function" && oe.markRenderStarted(e);
    }
    function Av() {
      oe !== null && typeof oe.markRenderYielded == "function" && oe.markRenderYielded();
    }
    function Lc() {
      oe !== null && typeof oe.markRenderStopped == "function" && oe.markRenderStopped();
    }
    function Sn(e) {
      oe !== null && typeof oe.markRenderScheduled == "function" && oe.markRenderScheduled(e);
    }
    function Mc(e, t) {
      oe !== null && typeof oe.markForceUpdateScheduled == "function" && oe.markForceUpdateScheduled(e, t);
    }
    function vs(e, t) {
      oe !== null && typeof oe.markStateUpdateScheduled == "function" && oe.markStateUpdateScheduled(e, t);
    }
    var Le = (
      /*                         */
      0
    ), vt = (
      /*                 */
      1
    ), Mt = (
      /*                    */
      2
    ), Gt = (
      /*               */
      8
    ), Nt = (
      /*              */
      16
    ), An = Math.clz32 ? Math.clz32 : hs, Zn = Math.log, Nc = Math.LN2;
    function hs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Zn(t) / Nc | 0) | 0;
    }
    var Cu = 31, I = (
      /*                        */
      0
    ), Dt = (
      /*                          */
      0
    ), Be = (
      /*                        */
      1
    ), Nl = (
      /*    */
      2
    ), ri = (
      /*             */
      4
    ), Tr = (
      /*            */
      8
    ), bn = (
      /*                     */
      16
    ), Ki = (
      /*                */
      32
    ), zl = (
      /*                       */
      4194240
    ), Ru = (
      /*                        */
      64
    ), zc = (
      /*                        */
      128
    ), Uc = (
      /*                        */
      256
    ), Ac = (
      /*                        */
      512
    ), jc = (
      /*                        */
      1024
    ), Fc = (
      /*                        */
      2048
    ), Hc = (
      /*                        */
      4096
    ), Pc = (
      /*                        */
      8192
    ), Vc = (
      /*                        */
      16384
    ), Tu = (
      /*                       */
      32768
    ), Bc = (
      /*                       */
      65536
    ), yo = (
      /*                       */
      131072
    ), go = (
      /*                       */
      262144
    ), Ic = (
      /*                       */
      524288
    ), ms = (
      /*                       */
      1048576
    ), $c = (
      /*                       */
      2097152
    ), ys = (
      /*                            */
      130023424
    ), xu = (
      /*                             */
      4194304
    ), Yc = (
      /*                             */
      8388608
    ), gs = (
      /*                             */
      16777216
    ), Wc = (
      /*                             */
      33554432
    ), Qc = (
      /*                             */
      67108864
    ), bd = xu, Ss = (
      /*          */
      134217728
    ), _d = (
      /*                          */
      268435455
    ), Es = (
      /*               */
      268435456
    ), wu = (
      /*                        */
      536870912
    ), Zr = (
      /*                   */
      1073741824
    );
    function jv(e) {
      {
        if (e & Be)
          return "Sync";
        if (e & Nl)
          return "InputContinuousHydration";
        if (e & ri)
          return "InputContinuous";
        if (e & Tr)
          return "DefaultHydration";
        if (e & bn)
          return "Default";
        if (e & Ki)
          return "TransitionHydration";
        if (e & zl)
          return "Transition";
        if (e & ys)
          return "Retry";
        if (e & Ss)
          return "SelectiveHydration";
        if (e & Es)
          return "IdleHydration";
        if (e & wu)
          return "Idle";
        if (e & Zr)
          return "Offscreen";
      }
    }
    var Kt = -1, bu = Ru, Gc = xu;
    function Cs(e) {
      switch (Ul(e)) {
        case Be:
          return Be;
        case Nl:
          return Nl;
        case ri:
          return ri;
        case Tr:
          return Tr;
        case bn:
          return bn;
        case Ki:
          return Ki;
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case Ic:
        case ms:
        case $c:
          return e & zl;
        case xu:
        case Yc:
        case gs:
        case Wc:
        case Qc:
          return e & ys;
        case Ss:
          return Ss;
        case Es:
          return Es;
        case wu:
          return wu;
        case Zr:
          return Zr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function qc(e, t) {
      var a = e.pendingLanes;
      if (a === I)
        return I;
      var i = I, u = e.suspendedLanes, s = e.pingedLanes, f = a & _d;
      if (f !== I) {
        var p = f & ~u;
        if (p !== I)
          i = Cs(p);
        else {
          var v = f & s;
          v !== I && (i = Cs(v));
        }
      } else {
        var y = a & ~u;
        y !== I ? i = Cs(y) : s !== I && (i = Cs(s));
      }
      if (i === I)
        return I;
      if (t !== I && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === I) {
        var g = Ul(i), b = Ul(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === bn && (b & zl) !== I
        )
          return t;
      }
      (i & ri) !== I && (i |= a & bn);
      var x = e.entangledLanes;
      if (x !== I)
        for (var M = e.entanglements, U = i & x; U > 0; ) {
          var F = jn(U), se = 1 << F;
          i |= M[F], U &= ~se;
        }
      return i;
    }
    function ai(e, t) {
      for (var a = e.eventTimes, i = Kt; t > 0; ) {
        var u = jn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function kd(e, t) {
      switch (e) {
        case Be:
        case Nl:
        case ri:
          return t + 250;
        case Tr:
        case bn:
        case Ki:
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case Ic:
        case ms:
        case $c:
          return t + 5e3;
        case xu:
        case Yc:
        case gs:
        case Wc:
        case Qc:
          return Kt;
        case Ss:
        case Es:
        case wu:
        case Zr:
          return Kt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Kt;
      }
    }
    function Xc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jn(f), v = 1 << p, y = s[p];
        y === Kt ? ((v & i) === I || (v & u) !== I) && (s[p] = kd(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Fv(e) {
      return Cs(e.pendingLanes);
    }
    function Kc(e) {
      var t = e.pendingLanes & ~Zr;
      return t !== I ? t : t & Zr ? Zr : I;
    }
    function Hv(e) {
      return (e & Be) !== I;
    }
    function Rs(e) {
      return (e & _d) !== I;
    }
    function _u(e) {
      return (e & ys) === e;
    }
    function Dd(e) {
      var t = Be | ri | bn;
      return (e & t) === I;
    }
    function Od(e) {
      return (e & zl) === e;
    }
    function Jc(e, t) {
      var a = Nl | ri | Tr | bn;
      return (t & a) !== I;
    }
    function Pv(e, t) {
      return (t & e.expiredLanes) !== I;
    }
    function Ld(e) {
      return (e & zl) !== I;
    }
    function Md() {
      var e = bu;
      return bu <<= 1, (bu & zl) === I && (bu = Ru), e;
    }
    function Vv() {
      var e = Gc;
      return Gc <<= 1, (Gc & ys) === I && (Gc = xu), e;
    }
    function Ul(e) {
      return e & -e;
    }
    function Ts(e) {
      return Ul(e);
    }
    function jn(e) {
      return 31 - An(e);
    }
    function or(e) {
      return jn(e);
    }
    function ea(e, t) {
      return (e & t) !== I;
    }
    function ku(e, t) {
      return (e & t) === t;
    }
    function nt(e, t) {
      return e | t;
    }
    function xs(e, t) {
      return e & ~t;
    }
    function Nd(e, t) {
      return e & t;
    }
    function Bv(e) {
      return e;
    }
    function Iv(e, t) {
      return e !== Dt && e < t ? e : t;
    }
    function ws(e) {
      for (var t = [], a = 0; a < Cu; a++)
        t.push(e);
      return t;
    }
    function So(e, t, a) {
      e.pendingLanes |= t, t !== wu && (e.suspendedLanes = I, e.pingedLanes = I);
      var i = e.eventTimes, u = or(t);
      i[u] = a;
    }
    function $v(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = jn(i), s = 1 << u;
        a[u] = Kt, i &= ~s;
      }
    }
    function Zc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function zd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = I, e.pingedLanes = I, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jn(f), v = 1 << p;
        i[p] = I, u[p] = Kt, s[p] = Kt, f &= ~v;
      }
    }
    function ef(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = jn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Ud(e, t) {
      var a = Ul(t), i;
      switch (a) {
        case ri:
          i = Nl;
          break;
        case bn:
          i = Tr;
          break;
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case Ic:
        case ms:
        case $c:
        case xu:
        case Yc:
        case gs:
        case Wc:
        case Qc:
          i = Ki;
          break;
        case wu:
          i = Es;
          break;
        default:
          i = Dt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Dt ? Dt : i;
    }
    function bs(e, t, a) {
      if (Jr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = or(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Yv(e, t) {
      if (Jr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = or(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ad(e, t) {
      return null;
    }
    var Mr = Be, _i = ri, za = bn, Ua = wu, _s = Dt;
    function Aa() {
      return _s;
    }
    function Fn(e) {
      _s = e;
    }
    function Wv(e, t) {
      var a = _s;
      try {
        return _s = e, t();
      } finally {
        _s = a;
      }
    }
    function Qv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ks(e, t) {
      return e > t ? e : t;
    }
    function er(e, t) {
      return e !== 0 && e < t;
    }
    function Gv(e) {
      var t = Ul(e);
      return er(Mr, t) ? er(_i, t) ? Rs(t) ? za : Ua : _i : Mr;
    }
    function tf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ds;
    function xr(e) {
      Ds = e;
    }
    function uy(e) {
      Ds(e);
    }
    var ve;
    function Eo(e) {
      ve = e;
    }
    var nf;
    function qv(e) {
      nf = e;
    }
    var Xv;
    function Os(e) {
      Xv = e;
    }
    var Ls;
    function jd(e) {
      Ls = e;
    }
    var rf = !1, Ms = [], Ji = null, ki = null, Di = null, _n = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map(), zr = [], Kv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Jv(e) {
      return Kv.indexOf(e) > -1;
    }
    function ii(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Fd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ji = null;
          break;
        case "dragenter":
        case "dragleave":
          ki = null;
          break;
        case "mouseover":
        case "mouseout":
          Di = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          _n.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Nr.delete(i);
          break;
        }
      }
    }
    function ta(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ii(t, a, i, u, s);
        if (t !== null) {
          var p = Do(t);
          p !== null && ve(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function oy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ji = ta(Ji, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return ki = ta(ki, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Di = ta(Di, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return _n.set(y, ta(_n.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return Nr.set(b, ta(Nr.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = $s(e.target);
      if (t !== null) {
        var a = pa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ce) {
            var u = xi(a);
            if (u !== null) {
              e.blockedOn = u, Ls(e.priority, function() {
                nf(a);
              });
              return;
            }
          } else if (i === J) {
            var s = a.stateNode;
            if (tf(s)) {
              e.blockedOn = wi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Zv(e) {
      for (var t = Xv(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < zr.length && er(t, zr[i].priority); i++)
        ;
      zr.splice(i, 0, a), i === 0 && Hd(a);
    }
    function Ns(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ro(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ny(s), u.target.dispatchEvent(s), ry();
        } else {
          var f = Do(i);
          return f !== null && ve(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Pd(e, t, a) {
      Ns(e) && a.delete(t);
    }
    function sy() {
      rf = !1, Ji !== null && Ns(Ji) && (Ji = null), ki !== null && Ns(ki) && (ki = null), Di !== null && Ns(Di) && (Di = null), _n.forEach(Pd), Nr.forEach(Pd);
    }
    function Al(e, t) {
      e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, G.unstable_scheduleCallback(G.unstable_NormalPriority, sy)));
    }
    function Du(e) {
      if (Ms.length > 0) {
        Al(Ms[0], e);
        for (var t = 1; t < Ms.length; t++) {
          var a = Ms[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ji !== null && Al(Ji, e), ki !== null && Al(ki, e), Di !== null && Al(Di, e);
      var i = function(p) {
        return Al(p, e);
      };
      _n.forEach(i), Nr.forEach(i);
      for (var u = 0; u < zr.length; u++) {
        var s = zr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; zr.length > 0; ) {
        var f = zr[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && zr.shift();
      }
    }
    var sr = A.ReactCurrentBatchConfig, Rt = !0;
    function Gn(e) {
      Rt = !!e;
    }
    function Hn() {
      return Rt;
    }
    function cr(e, t, a) {
      var i = af(t), u;
      switch (i) {
        case Mr:
          u = ya;
          break;
        case _i:
          u = Co;
          break;
        case za:
        default:
          u = kn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ya(e, t, a, i) {
      var u = Aa(), s = sr.transition;
      sr.transition = null;
      try {
        Fn(Mr), kn(e, t, a, i);
      } finally {
        Fn(u), sr.transition = s;
      }
    }
    function Co(e, t, a, i) {
      var u = Aa(), s = sr.transition;
      sr.transition = null;
      try {
        Fn(_i), kn(e, t, a, i);
      } finally {
        Fn(u), sr.transition = s;
      }
    }
    function kn(e, t, a, i) {
      Rt && zs(e, t, a, i);
    }
    function zs(e, t, a, i) {
      var u = Ro(e, t, a, i);
      if (u === null) {
        by(e, t, i, Oi, a), Fd(e, i);
        return;
      }
      if (oy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Fd(e, i), t & ka && Jv(e)) {
        for (; u !== null; ) {
          var s = Do(u);
          s !== null && uy(s);
          var f = Ro(e, t, a, i);
          if (f === null && by(e, t, i, Oi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      by(e, t, i, null, a);
    }
    var Oi = null;
    function Ro(e, t, a, i) {
      Oi = null;
      var u = dd(i), s = $s(u);
      if (s !== null) {
        var f = pa(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ce) {
            var v = xi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === J) {
            var y = f.stateNode;
            if (tf(y))
              return wi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Oi = s, null;
    }
    function af(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Mr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return _i;
        case "message": {
          var t = kc();
          switch (t) {
            case ss:
              return Mr;
            case Ll:
              return _i;
            case qi:
            case ly:
              return za;
            case mu:
              return Ua;
            default:
              return za;
          }
        }
        default:
          return za;
      }
    }
    function Us(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function na(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Vd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function To(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ga = null, xo = null, Ou = null;
    function jl(e) {
      return ga = e, xo = As(), !0;
    }
    function lf() {
      ga = null, xo = null, Ou = null;
    }
    function Zi() {
      if (Ou)
        return Ou;
      var e, t = xo, a = t.length, i, u = As(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ou = u.slice(e, p), Ou;
    }
    function As() {
      return "value" in ga ? ga.value : ga.textContent;
    }
    function Fl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function wo() {
      return !0;
    }
    function js() {
      return !1;
    }
    function wr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = wo : this.isDefaultPrevented = js, this.isPropagationStopped = js, this;
      }
      return at(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = wo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = wo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: wo
      }), t;
    }
    var Pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Li = wr(Pn), Ur = at({}, Pn, {
      view: 0,
      detail: 0
    }), ra = wr(Ur), uf, Fs, Lu;
    function cy(e) {
      e !== Lu && (Lu && e.type === "mousemove" ? (uf = e.screenX - Lu.screenX, Fs = e.screenY - Lu.screenY) : (uf = 0, Fs = 0), Lu = e);
    }
    var li = at({}, Ur, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: vn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (cy(e), uf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Fs;
      }
    }), Bd = wr(li), Id = at({}, li, {
      dataTransfer: 0
    }), Mu = wr(Id), $d = at({}, Ur, {
      relatedTarget: 0
    }), el = wr($d), eh = at({}, Pn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), th = wr(eh), Yd = at({}, Pn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), of = wr(Yd), fy = at({}, Pn, {
      data: 0
    }), nh = wr(fy), rh = nh, ah = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Nu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function dy(e) {
      if (e.key) {
        var t = ah[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Fl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Nu[e.keyCode] || "Unidentified" : "";
    }
    var bo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ih(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = bo[e];
      return i ? !!a[i] : !1;
    }
    function vn(e) {
      return ih;
    }
    var py = at({}, Ur, {
      key: dy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: vn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Fl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), lh = wr(py), vy = at({}, li, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), uh = wr(vy), oh = at({}, Ur, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: vn
    }), sh = wr(oh), hy = at({}, Pn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ja = wr(hy), Wd = at({}, li, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), my = wr(Wd), Hl = [9, 13, 27, 32], Hs = 229, tl = Ln && "CompositionEvent" in window, Pl = null;
    Ln && "documentMode" in document && (Pl = document.documentMode);
    var Qd = Ln && "TextEvent" in window && !Pl, sf = Ln && (!tl || Pl && Pl > 8 && Pl <= 11), ch = 32, cf = String.fromCharCode(ch);
    function yy() {
      dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), dt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gd = !1;
    function fh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function ff(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function df(e, t) {
      return e === "keydown" && t.keyCode === Hs;
    }
    function qd(e, t) {
      switch (e) {
        case "keyup":
          return Hl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Hs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function pf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function dh(e) {
      return e.locale === "ko";
    }
    var zu = !1;
    function Xd(e, t, a, i, u) {
      var s, f;
      if (tl ? s = ff(t) : zu ? qd(t, i) && (s = "onCompositionEnd") : df(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sf && !dh(i) && (!zu && s === "onCompositionStart" ? zu = jl(u) : s === "onCompositionEnd" && zu && (f = Zi()));
      var p = Sh(a, s);
      if (p.length > 0) {
        var v = new nh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = pf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function vf(e, t) {
      switch (e) {
        case "compositionend":
          return pf(t);
        case "keypress":
          var a = t.which;
          return a !== ch ? null : (Gd = !0, cf);
        case "textInput":
          var i = t.data;
          return i === cf && Gd ? null : i;
        default:
          return null;
      }
    }
    function Kd(e, t) {
      if (zu) {
        if (e === "compositionend" || !tl && qd(e, t)) {
          var a = Zi();
          return lf(), zu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!fh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return sf && !dh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hf(e, t, a, i, u) {
      var s;
      if (Qd ? s = vf(t, i) : s = Kd(t, i), !s)
        return null;
      var f = Sh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new rh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function ph(e, t, a, i, u, s, f) {
      Xd(e, t, a, i, u), hf(e, t, a, i, u);
    }
    var gy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Ps(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!gy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Sy(e) {
      if (!Ln)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Vs() {
      dt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function vh(e, t, a, i) {
      oo(i);
      var u = Sh(t, "onChange");
      if (u.length > 0) {
        var s = new Li("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Vl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      vh(t, n, e, dd(e)), bv(o, t);
    }
    function o(e) {
      kE(e, 0);
    }
    function c(e) {
      var t = Cf(e);
      if (gi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    Ln && (m = Sy("input") && (!document.documentMode || document.documentMode > 9));
    function E(e, t) {
      Vl = e, n = t, Vl.attachEvent("onpropertychange", z);
    }
    function T() {
      Vl && (Vl.detachEvent("onpropertychange", z), Vl = null, n = null);
    }
    function z(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function Y(e, t, a) {
      e === "focusin" ? (T(), E(t, a)) : e === "focusout" && T();
    }
    function X(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function $(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function fe(e, t) {
      if (e === "click")
        return c(t);
    }
    function ye(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ee(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ze(e, "number", e.value);
    }
    function Dn(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window, v, y;
      if (r(p) ? v = d : Ps(p) ? m ? v = ye : (v = X, y = Y) : $(p) && (v = fe), v) {
        var g = v(t, a);
        if (g) {
          vh(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Ee(p);
    }
    function k() {
      Bt("onMouseEnter", ["mouseout", "mouseover"]), Bt("onMouseLeave", ["mouseout", "mouseover"]), Bt("onPointerEnter", ["pointerout", "pointerover"]), Bt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function w(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !rs(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && ($s(y) || fp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var x, M;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (x = a, M = U ? $s(U) : null, M !== null) {
            var F = pa(M);
            (M !== F || M.tag !== q && M.tag !== De) && (M = null);
          }
        } else
          x = null, M = a;
        if (x !== M) {
          var se = Bd, Ue = "onMouseLeave", we = "onMouseEnter", xt = "mouse";
          (t === "pointerout" || t === "pointerover") && (se = uh, Ue = "onPointerLeave", we = "onPointerEnter", xt = "pointer");
          var St = x == null ? g : Cf(x), D = M == null ? g : Cf(M), H = new se(Ue, xt + "leave", x, i, u);
          H.target = St, H.relatedTarget = D;
          var O = null, K = $s(u);
          if (K === a) {
            var pe = new se(we, xt + "enter", M, i, u);
            pe.target = D, pe.relatedTarget = St, O = pe;
          }
          _T(e, H, O, x, M);
        }
      }
    }
    function L(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var W = typeof Object.is == "function" ? Object.is : L;
    function ge(e, t) {
      if (W(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!br.call(t, s) || !W(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function je(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Pe(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Qe(e, t) {
      for (var a = je(e), i = 0, u = 0; a; ) {
        if (a.nodeType === $i) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = je(Pe(a));
      }
    }
    function tr(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return zt(e, u, s, f, p);
    }
    function zt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e: for (; ; ) {
        for (var x = null; g === t && (a === 0 || g.nodeType === $i) && (f = s + a), g === i && (u === 0 || g.nodeType === $i) && (p = s + u), g.nodeType === $i && (s += g.nodeValue.length), (x = g.firstChild) !== null; )
          b = g, g = x;
        for (; ; ) {
          if (g === e)
            break e;
          if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (x = g.nextSibling) !== null)
            break;
          g = b, b = g.parentNode;
        }
        g = x;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Bl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Qe(e, f), g = Qe(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function hh(e) {
      return e && e.nodeType === $i;
    }
    function yE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : hh(e) ? !1 : hh(t) ? yE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function sT(e) {
      return e && e.ownerDocument && yE(e.ownerDocument.documentElement, e);
    }
    function cT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function gE() {
      for (var e = window, t = _a(); t instanceof e.HTMLIFrameElement; ) {
        if (cT(t))
          e = t.contentWindow;
        else
          return t;
        t = _a(e.document);
      }
      return t;
    }
    function Ey(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function fT() {
      var e = gE();
      return {
        focusedElem: e,
        selectionRange: Ey(e) ? pT(e) : null
      };
    }
    function dT(e) {
      var t = gE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && sT(a)) {
        i !== null && Ey(a) && vT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function pT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = tr(e), t || {
        start: 0,
        end: 0
      };
    }
    function vT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Bl(e, t);
    }
    var hT = Ln && "documentMode" in document && document.documentMode <= 11;
    function mT() {
      dt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var mf = null, Cy = null, Jd = null, Ry = !1;
    function yT(e) {
      if ("selectionStart" in e && Ey(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function gT(e) {
      return e.window === e ? e.document : e.nodeType === Yi ? e : e.ownerDocument;
    }
    function SE(e, t, a) {
      var i = gT(a);
      if (!(Ry || mf == null || mf !== _a(i))) {
        var u = yT(mf);
        if (!Jd || !ge(Jd, u)) {
          Jd = u;
          var s = Sh(Cy, "onSelect");
          if (s.length > 0) {
            var f = new Li("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = mf;
          }
        }
      }
    }
    function ST(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window;
      switch (t) {
        case "focusin":
          (Ps(p) || p.contentEditable === "true") && (mf = p, Cy = a, Jd = null);
          break;
        case "focusout":
          mf = null, Cy = null, Jd = null;
          break;
        case "mousedown":
          Ry = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ry = !1, SE(e, i, u);
          break;
        case "selectionchange":
          if (hT)
            break;
        case "keydown":
        case "keyup":
          SE(e, i, u);
      }
    }
    function mh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var yf = {
      animationend: mh("Animation", "AnimationEnd"),
      animationiteration: mh("Animation", "AnimationIteration"),
      animationstart: mh("Animation", "AnimationStart"),
      transitionend: mh("Transition", "TransitionEnd")
    }, Ty = {}, EE = {};
    Ln && (EE = document.createElement("div").style, "AnimationEvent" in window || (delete yf.animationend.animation, delete yf.animationiteration.animation, delete yf.animationstart.animation), "TransitionEvent" in window || delete yf.transitionend.transition);
    function yh(e) {
      if (Ty[e])
        return Ty[e];
      if (!yf[e])
        return e;
      var t = yf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in EE)
          return Ty[e] = t[a];
      return e;
    }
    var CE = yh("animationend"), RE = yh("animationiteration"), TE = yh("animationstart"), xE = yh("transitionend"), wE = /* @__PURE__ */ new Map(), bE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      wE.set(e, t), dt(t, [e]);
    }
    function ET() {
      for (var e = 0; e < bE.length; e++) {
        var t = bE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(CE, "onAnimationEnd"), _o(RE, "onAnimationIteration"), _o(TE, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(xE, "onTransitionEnd");
    }
    function CT(e, t, a, i, u, s, f) {
      var p = wE.get(t);
      if (p !== void 0) {
        var v = Li, y = t;
        switch (t) {
          case "keypress":
            if (Fl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = lh;
            break;
          case "focusin":
            y = "focus", v = el;
            break;
          case "focusout":
            y = "blur", v = el;
            break;
          case "beforeblur":
          case "afterblur":
            v = el;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Mu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = sh;
            break;
          case CE:
          case RE:
          case TE:
            v = th;
            break;
          case xE:
            v = ja;
            break;
          case "scroll":
            v = ra;
            break;
          case "wheel":
            v = my;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = of;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = uh;
            break;
        }
        var g = (s & ka) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", x = wT(a, p, i.type, g, b);
          if (x.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: x
            });
          }
        }
      }
    }
    ET(), k(), Vs(), mT(), yy();
    function RT(e, t, a, i, u, s, f) {
      CT(e, t, a, i, u, s);
      var p = (s & fd) === 0;
      p && (w(e, t, a, i, u), Dn(e, t, a, i, u), ST(e, t, a, i, u), ph(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], xy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function _E(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ci(i, t, void 0, e), e.currentTarget = null;
    }
    function TT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          _E(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, x = g.currentTarget, M = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          _E(e, M, x), i = b;
        }
    }
    function kE(e, t) {
      for (var a = (t & ka) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        TT(s, f, a);
      }
      ls();
    }
    function xT(e, t, a, i, u) {
      var s = dd(a), f = [];
      RT(f, e, i, a, s, t), kE(f, t);
    }
    function En(e, t) {
      xy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = e1(t), u = kT(e);
      i.has(u) || (DE(t, e, hc, a), i.add(u));
    }
    function wy(e, t, a) {
      xy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ka), DE(a, e, i, t);
    }
    var gh = "_reactListening" + Math.random().toString(36).slice(2);
    function ep(e) {
      if (!e[gh]) {
        e[gh] = !0, ut.forEach(function(a) {
          a !== "selectionchange" && (xy.has(a) || wy(a, !1, e), wy(a, !0, e));
        });
        var t = e.nodeType === Yi ? e : e.ownerDocument;
        t !== null && (t[gh] || (t[gh] = !0, wy("selectionchange", !1, t)));
      }
    }
    function DE(e, t, a, i, u) {
      var s = cr(e, t, a), f = void 0;
      is && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Vd(e, t, s, f) : na(e, t, s) : f !== void 0 ? To(e, t, s, f) : Us(e, t, s);
    }
    function OE(e, t) {
      return e === t || e.nodeType === Nn && e.parentNode === t;
    }
    function by(e, t, a, i, u) {
      var s = i;
      if (!(t & cd) && !(t & hc)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === J || v === me) {
              var y = p.stateNode.containerInfo;
              if (OE(y, f))
                break;
              if (v === me)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === J || b === me) {
                    var x = g.stateNode.containerInfo;
                    if (OE(x, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = $s(y);
                if (M === null)
                  return;
                var U = M.tag;
                if (U === q || U === De) {
                  p = s = M;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      bv(function() {
        return xT(e, t, a, s);
      });
    }
    function tp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function wT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, x = b.stateNode, M = b.tag;
        if (M === q && x !== null && (g = x, p !== null)) {
          var U = wl(y, p);
          U != null && v.push(tp(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function Sh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === q && f !== null) {
          var v = f, y = wl(u, a);
          y != null && i.unshift(tp(u, y, v));
          var g = wl(u, t);
          g != null && i.push(tp(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function gf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== q);
      return e || null;
    }
    function bT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = gf(s))
        u++;
      for (var f = 0, p = i; p; p = gf(p))
        f++;
      for (; u - f > 0; )
        a = gf(a), u--;
      for (; f - u > 0; )
        i = gf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = gf(a), i = gf(i);
      }
      return null;
    }
    function LE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === q && g !== null) {
          var x = g;
          if (u) {
            var M = wl(p, s);
            M != null && f.unshift(tp(p, M, x));
          } else if (!u) {
            var U = wl(p, s);
            U != null && f.push(tp(p, U, x));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function _T(e, t, a, i, u) {
      var s = i && u ? bT(i, u) : null;
      i !== null && LE(e, t, i, s, !1), u !== null && a !== null && LE(e, a, u, s, !0);
    }
    function kT(e, t) {
      return e + "__bubble";
    }
    var Fa = !1, np = "dangerouslySetInnerHTML", Eh = "suppressContentEditableWarning", ko = "suppressHydrationWarning", ME = "autoFocus", Bs = "children", Is = "style", Ch = "__html", _y, Rh, rp, NE, Th, zE, UE;
    _y = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Rh = function(e, t) {
      ud(e, t), pc(e, t), Tv(e, t, {
        registrationNameDependencies: rt,
        possibleRegistrationNames: ot
      });
    }, zE = Ln && !document.documentMode, rp = function(e, t, a) {
      if (!Fa) {
        var i = xh(a), u = xh(t);
        u !== i && (Fa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, NE = function(e) {
      if (!Fa) {
        Fa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Th = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, UE = function(e, t) {
      var a = e.namespaceURI === Ii ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var DT = /\r\n?/g, OT = /\u0000|\uFFFD/g;
    function xh(e) {
      Xn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(DT, `
`).replace(OT, "");
    }
    function wh(e, t, a, i) {
      var u = xh(t), s = xh(e);
      if (s !== u && (i && (Fa || (Fa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Re))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function AE(e) {
      return e.nodeType === Yi ? e : e.ownerDocument;
    }
    function LT() {
    }
    function bh(e) {
      e.onclick = LT;
    }
    function MT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Is)
            f && Object.freeze(f), yv(t, f);
          else if (s === np) {
            var p = f ? f[Ch] : void 0;
            p != null && iv(t, p);
          } else if (s === Bs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ao(t, f);
            } else typeof f == "number" && ao(t, "" + f);
          else s === Eh || s === ko || s === ME || (rt.hasOwnProperty(s) ? f != null && (typeof f != "function" && Th(s, f), s === "onScroll" && En("scroll", t)) : f != null && _r(t, s, f, u));
        }
    }
    function NT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Is ? yv(e, f) : s === np ? iv(e, f) : s === Bs ? ao(e, f) : _r(e, s, f, i);
      }
    }
    function zT(e, t, a, i) {
      var u, s = AE(a), f, p = i;
      if (p === Ii && (p = ed(e)), p === Ii) {
        if (u = Tl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Ii && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !br.call(_y, e) && (_y[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function UT(e, t) {
      return AE(t).createTextNode(e);
    }
    function AT(e, t, a, i) {
      var u = Tl(t, a);
      Rh(t, a);
      var s;
      switch (t) {
        case "dialog":
          En("cancel", e), En("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Zd.length; f++)
            En(Zd[f], e);
          s = a;
          break;
        case "source":
          En("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e), s = a;
          break;
        case "details":
          En("toggle", e), s = a;
          break;
        case "input":
          ei(e, a), s = ro(e, a), En("invalid", e);
          break;
        case "option":
          bt(e, a), s = a;
          break;
        case "select":
          ou(e, a), s = Xo(e, a), En("invalid", e);
          break;
        case "textarea":
          Kf(e, a), s = Xf(e, a), En("invalid", e);
          break;
        default:
          s = a;
      }
      switch (fc(t, s), MT(t, e, i, s, u), t) {
        case "input":
          Za(e), N(e, a, !1);
          break;
        case "textarea":
          Za(e), rv(e);
          break;
        case "option":
          an(e, a);
          break;
        case "select":
          Gf(e, a);
          break;
        default:
          typeof s.onClick == "function" && bh(e);
          break;
      }
    }
    function jT(e, t, a, i, u) {
      Rh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ro(e, a), p = ro(e, i), s = [];
          break;
        case "select":
          f = Xo(e, a), p = Xo(e, i), s = [];
          break;
        case "textarea":
          f = Xf(e, a), p = Xf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && bh(e);
          break;
      }
      fc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Is) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === np || v === Bs || v === Eh || v === ko || v === ME || (rt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === M || x == null && M == null))
          if (v === Is)
            if (x && Object.freeze(x), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!x || !x.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in x)
                x.hasOwnProperty(y) && M[y] !== x[y] && (g || (g = {}), g[y] = x[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = x;
          else if (v === np) {
            var U = x ? x[Ch] : void 0, F = M ? M[Ch] : void 0;
            U != null && F !== U && (s = s || []).push(v, U);
          } else v === Bs ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === Eh || v === ko || (rt.hasOwnProperty(v) ? (x != null && (typeof x != "function" && Th(v, x), v === "onScroll" && En("scroll", e)), !s && M !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return g && (ey(g, p[Is]), (s = s || []).push(Is, g)), s;
    }
    function FT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Tl(a, i), f = Tl(a, u);
      switch (NT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          nv(e, u);
          break;
        case "select":
          oc(e, u);
          break;
      }
    }
    function HT(e) {
      {
        var t = e.toLowerCase();
        return ts.hasOwnProperty(t) && ts[t] || null;
      }
    }
    function PT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Tl(t, a), Rh(t, a), t) {
        case "dialog":
          En("cancel", e), En("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Zd.length; y++)
            En(Zd[y], e);
          break;
        case "source":
          En("error", e);
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e);
          break;
        case "details":
          En("toggle", e);
          break;
        case "input":
          ei(e, a), En("invalid", e);
          break;
        case "option":
          bt(e, a);
          break;
        case "select":
          ou(e, a), En("invalid", e);
          break;
        case "textarea":
          Kf(e, a), En("invalid", e);
          break;
      }
      fc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var x = g[b].name.toLowerCase();
          switch (x) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var M = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var F = a[U];
          if (U === Bs)
            typeof F == "string" ? e.textContent !== F && (a[ko] !== !0 && wh(e.textContent, F, s, f), M = [Bs, F]) : typeof F == "number" && e.textContent !== "" + F && (a[ko] !== !0 && wh(e.textContent, F, s, f), M = [Bs, "" + F]);
          else if (rt.hasOwnProperty(U))
            F != null && (typeof F != "function" && Th(U, F), U === "onScroll" && En("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var se = void 0, Ue = nn(U);
            if (a[ko] !== !0) {
              if (!(U === Eh || U === ko || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === np) {
                  var we = e.innerHTML, xt = F ? F[Ch] : void 0;
                  if (xt != null) {
                    var St = UE(e, xt);
                    St !== we && rp(U, we, St);
                  }
                } else if (U === Is) {
                  if (v.delete(U), zE) {
                    var D = Jm(F);
                    se = e.getAttribute("style"), D !== se && rp(U, se, D);
                  }
                } else if (p && !_)
                  v.delete(U.toLowerCase()), se = tu(e, U, F), F !== se && rp(U, se, F);
                else if (!hn(U, Ue, p) && !Kn(U, F, Ue, p)) {
                  var H = !1;
                  if (Ue !== null)
                    v.delete(Ue.attributeName), se = vl(e, U, F, Ue);
                  else {
                    var O = i;
                    if (O === Ii && (O = ed(t)), O === Ii)
                      v.delete(U.toLowerCase());
                    else {
                      var K = HT(U);
                      K !== null && K !== U && (H = !0, v.delete(K)), v.delete(U);
                    }
                    se = tu(e, U, F);
                  }
                  var pe = _;
                  !pe && F !== se && !H && rp(U, se, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[ko] !== !0 && NE(v), t) {
        case "input":
          Za(e), N(e, a, !0);
          break;
        case "textarea":
          Za(e), rv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && bh(e);
          break;
      }
      return M;
    }
    function VT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (Fa)
          return;
        Fa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t) {
      {
        if (Fa)
          return;
        Fa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t, a) {
      {
        if (Fa)
          return;
        Fa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (t === "" || Fa)
          return;
        Fa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function BT(e, t, a) {
      switch (t) {
        case "input":
          j(e, a);
          return;
        case "textarea":
          Gm(e, a);
          return;
        case "select":
          qf(e, a);
          return;
      }
    }
    var ap = function() {
    }, ip = function() {
    };
    {
      var IT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], jE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], $T = jE.concat(["button"]), YT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], FE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ip = function(e, t) {
        var a = at({}, e || FE), i = {
          tag: t
        };
        return jE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), $T.indexOf(t) !== -1 && (a.pTagInButtonScope = null), IT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var WT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return YT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, QT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, HE = {};
      ap = function(e, t, a) {
        a = a || FE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = WT(e, u) ? null : i, f = s ? null : QT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!HE[y]) {
            HE[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var x = "";
              v === "table" && e === "tr" && (x += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, x);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var _h = "suppressHydrationWarning", kh = "$", Dh = "/$", lp = "$?", up = "$!", GT = "style", My = null, Ny = null;
    function qT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Yi:
        case nd: {
          t = i === Yi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : td(null, "");
          break;
        }
        default: {
          var s = i === Nn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = td(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ip(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function XT(e, t, a) {
      {
        var i = e, u = td(i.namespace, t), s = ip(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function pk(e) {
      return e;
    }
    function KT(e) {
      My = Hn(), Ny = fT();
      var t = null;
      return Gn(!1), t;
    }
    function JT(e) {
      dT(Ny), Gn(My), My = null, Ny = null;
    }
    function ZT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ap(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ip(f.ancestorInfo, e);
          ap(null, p, v);
        }
        s = f.namespace;
      }
      var y = zT(e, t, a, s);
      return cp(u, y), Vy(y, t), y;
    }
    function ex(e, t) {
      e.appendChild(t);
    }
    function tx(e, t, a, i, u) {
      switch (AT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function nx(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ip(f.ancestorInfo, t);
          ap(null, p, v);
        }
      }
      return jT(e, t, a, i);
    }
    function zy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function rx(e, t, a, i) {
      {
        var u = a;
        ap(null, e, u.ancestorInfo);
      }
      var s = UT(e, t);
      return cp(i, s), s;
    }
    function ax() {
      var e = window.event;
      return e === void 0 ? za : af(e.type);
    }
    var Uy = typeof setTimeout == "function" ? setTimeout : void 0, ix = typeof clearTimeout == "function" ? clearTimeout : void 0, Ay = -1, PE = typeof Promise == "function" ? Promise : void 0, lx = typeof queueMicrotask == "function" ? queueMicrotask : typeof PE < "u" ? function(e) {
      return PE.resolve(null).then(e).catch(ux);
    } : Uy;
    function ux(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function ox(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function sx(e, t, a, i, u, s) {
      FT(e, t, a, i, u), Vy(e, u);
    }
    function VE(e) {
      ao(e, "");
    }
    function cx(e, t, a) {
      e.nodeValue = a;
    }
    function fx(e, t) {
      e.appendChild(t);
    }
    function dx(e, t) {
      var a;
      e.nodeType === Nn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && bh(a);
    }
    function px(e, t, a) {
      e.insertBefore(t, a);
    }
    function vx(e, t, a) {
      e.nodeType === Nn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function hx(e, t) {
      e.removeChild(t);
    }
    function mx(e, t) {
      e.nodeType === Nn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Nn) {
          var s = u.data;
          if (s === Dh)
            if (i === 0) {
              e.removeChild(u), Du(t);
              return;
            } else
              i--;
          else (s === kh || s === lp || s === up) && i++;
        }
        a = u;
      } while (a);
      Du(t);
    }
    function yx(e, t) {
      e.nodeType === Nn ? jy(e.parentNode, t) : e.nodeType === Qr && jy(e, t), Du(e);
    }
    function gx(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Sx(e) {
      e.nodeValue = "";
    }
    function Ex(e, t) {
      e = e;
      var a = t[GT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = cc("display", i);
    }
    function Cx(e, t) {
      e.nodeValue = t;
    }
    function Rx(e) {
      e.nodeType === Qr ? e.textContent = "" : e.nodeType === Yi && e.documentElement && e.removeChild(e.documentElement);
    }
    function Tx(e, t, a) {
      return e.nodeType !== Qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function xx(e, t) {
      return t === "" || e.nodeType !== $i ? null : e;
    }
    function wx(e) {
      return e.nodeType !== Nn ? null : e;
    }
    function BE(e) {
      return e.data === lp;
    }
    function Fy(e) {
      return e.data === up;
    }
    function bx(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function _x(e, t) {
      e._reactRetry = t;
    }
    function Oh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qr || t === $i)
          break;
        if (t === Nn) {
          var a = e.data;
          if (a === kh || a === up || a === lp)
            break;
          if (a === Dh)
            return null;
        }
      }
      return e;
    }
    function op(e) {
      return Oh(e.nextSibling);
    }
    function kx(e) {
      return Oh(e.firstChild);
    }
    function Dx(e) {
      return Oh(e.firstChild);
    }
    function Ox(e) {
      return Oh(e.nextSibling);
    }
    function Lx(e, t, a, i, u, s, f) {
      cp(s, e), Vy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & vt) !== Le;
      return PT(e, t, a, p, i, y, f);
    }
    function Mx(e, t, a, i) {
      return cp(a, e), a.mode & vt, VT(e, t);
    }
    function Nx(e, t) {
      cp(t, e);
    }
    function zx(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Nn) {
          var i = t.data;
          if (i === Dh) {
            if (a === 0)
              return op(t);
            a--;
          } else (i === kh || i === up || i === lp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function IE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Nn) {
          var i = t.data;
          if (i === kh || i === up || i === lp) {
            if (a === 0)
              return t;
            a--;
          } else i === Dh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Ux(e) {
      Du(e);
    }
    function Ax(e) {
      Du(e);
    }
    function jx(e) {
      return e !== "head" && e !== "body";
    }
    function Fx(e, t, a, i) {
      var u = !0;
      wh(t.nodeValue, a, i, u);
    }
    function Hx(e, t, a, i, u, s) {
      if (t[_h] !== !0) {
        var f = !0;
        wh(i.nodeValue, u, s, f);
      }
    }
    function Px(e, t) {
      t.nodeType === Qr ? ky(e, t) : t.nodeType === Nn || Dy(e, t);
    }
    function Vx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qr ? ky(a, t) : t.nodeType === Nn || Dy(a, t));
      }
    }
    function Bx(e, t, a, i, u) {
      (u || t[_h] !== !0) && (i.nodeType === Qr ? ky(a, i) : i.nodeType === Nn || Dy(a, i));
    }
    function Ix(e, t, a) {
      Oy(e, t);
    }
    function $x(e, t) {
      Ly(e, t);
    }
    function Yx(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Oy(i, t);
      }
    }
    function Wx(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function Qx(e, t, a, i, u, s) {
      (s || t[_h] !== !0) && Oy(a, i);
    }
    function Gx(e, t, a, i, u) {
      (u || t[_h] !== !0) && Ly(a, i);
    }
    function qx(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Xx(e) {
      ep(e);
    }
    var Sf = Math.random().toString(36).slice(2), Ef = "__reactFiber$" + Sf, Hy = "__reactProps$" + Sf, sp = "__reactContainer$" + Sf, Py = "__reactEvents$" + Sf, Kx = "__reactListeners$" + Sf, Jx = "__reactHandles$" + Sf;
    function Zx(e) {
      delete e[Ef], delete e[Hy], delete e[Py], delete e[Kx], delete e[Jx];
    }
    function cp(e, t) {
      t[Ef] = e;
    }
    function Lh(e, t) {
      t[sp] = e;
    }
    function $E(e) {
      e[sp] = null;
    }
    function fp(e) {
      return !!e[sp];
    }
    function $s(e) {
      var t = e[Ef];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[sp] || a[Ef], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = IE(e); u !== null; ) {
              var s = u[Ef];
              if (s)
                return s;
              u = IE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Do(e) {
      var t = e[Ef] || e[sp];
      return t && (t.tag === q || t.tag === De || t.tag === Ce || t.tag === J) ? t : null;
    }
    function Cf(e) {
      if (e.tag === q || e.tag === De)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Mh(e) {
      return e[Hy] || null;
    }
    function Vy(e, t) {
      e[Hy] = t;
    }
    function e1(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var YE = {}, WE = A.ReactDebugCurrentFrame;
    function Nh(e) {
      if (e) {
        var t = e._owner, a = Pi(e.type, e._source, t ? t.type : null);
        WE.setExtraStackFrame(a);
      } else
        WE.setExtraStackFrame(null);
    }
    function nl(e, t, a, i, u) {
      {
        var s = Function.call.bind(br);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Nh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Nh(null)), p instanceof Error && !(p.message in YE) && (YE[p.message] = !0, Nh(u), S("Failed %s type: %s", a, p.message), Nh(null));
          }
      }
    }
    var By = [], zh;
    zh = [];
    var Uu = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function aa(e, t) {
      if (Uu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== zh[Uu] && S("Unexpected Fiber popped."), e.current = By[Uu], By[Uu] = null, zh[Uu] = null, Uu--;
    }
    function ia(e, t, a) {
      Uu++, By[Uu] = e.current, zh[Uu] = a, e.current = t;
    }
    var Iy;
    Iy = {};
    var ui = {};
    Object.freeze(ui);
    var Au = Oo(ui), Il = Oo(!1), $y = ui;
    function Rf(e, t, a) {
      return a && $l(t) ? $y : Au.current;
    }
    function QE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Tf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ui;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = qe(e) || "Unknown";
          nl(i, s, "context", p);
        }
        return u && QE(e, t, s), s;
      }
    }
    function Uh() {
      return Il.current;
    }
    function $l(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ah(e) {
      aa(Il, e), aa(Au, e);
    }
    function Yy(e) {
      aa(Il, e), aa(Au, e);
    }
    function GE(e, t, a) {
      {
        if (Au.current !== ui)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ia(Au, t, e), ia(Il, a, e);
      }
    }
    function qE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = qe(e) || "Unknown";
            Iy[s] || (Iy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((qe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = qe(e) || "Unknown";
          nl(u, f, "child context", v);
        }
        return at({}, a, f);
      }
    }
    function jh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ui;
        return $y = Au.current, ia(Au, a, e), ia(Il, Il.current, e), !0;
      }
    }
    function XE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = qE(e, t, $y);
          i.__reactInternalMemoizedMergedChildContext = u, aa(Il, e), aa(Au, e), ia(Au, u, e), ia(Il, a, e);
        } else
          aa(Il, e), ia(Il, a, e);
      }
    }
    function t1(e) {
      {
        if (!hu(e) || e.tag !== te)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case J:
              return t.stateNode.context;
            case te: {
              var a = t.type;
              if ($l(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, Fh = 1, ju = null, Wy = !1, Qy = !1;
    function KE(e) {
      ju === null ? ju = [e] : ju.push(e);
    }
    function n1(e) {
      Wy = !0, KE(e);
    }
    function JE() {
      Wy && Mo();
    }
    function Mo() {
      if (!Qy && ju !== null) {
        Qy = !0;
        var e = 0, t = Aa();
        try {
          var a = !0, i = ju;
          for (Fn(Mr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ju = null, Wy = !1;
        } catch (s) {
          throw ju !== null && (ju = ju.slice(e + 1)), vd(ss, Mo), s;
        } finally {
          Fn(t), Qy = !1;
        }
      }
      return null;
    }
    var xf = [], wf = 0, Hh = null, Ph = 0, Mi = [], Ni = 0, Ys = null, Fu = 1, Hu = "";
    function r1(e) {
      return Qs(), (e.flags & Ri) !== Oe;
    }
    function a1(e) {
      return Qs(), Ph;
    }
    function i1() {
      var e = Hu, t = Fu, a = t & ~l1(t);
      return a.toString(32) + e;
    }
    function Ws(e, t) {
      Qs(), xf[wf++] = Ph, xf[wf++] = Hh, Hh = e, Ph = t;
    }
    function ZE(e, t, a) {
      Qs(), Mi[Ni++] = Fu, Mi[Ni++] = Hu, Mi[Ni++] = Ys, Ys = e;
      var i = Fu, u = Hu, s = Vh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Vh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), x = f >> y, M = s - y, U = Vh(t) + M, F = p << M, se = F | x, Ue = b + u;
        Fu = 1 << U | se, Hu = Ue;
      } else {
        var we = p << s, xt = we | f, St = u;
        Fu = 1 << v | xt, Hu = St;
      }
    }
    function Gy(e) {
      Qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ws(e, a), ZE(e, a, i);
      }
    }
    function Vh(e) {
      return 32 - An(e);
    }
    function l1(e) {
      return 1 << Vh(e) - 1;
    }
    function qy(e) {
      for (; e === Hh; )
        Hh = xf[--wf], xf[wf] = null, Ph = xf[--wf], xf[wf] = null;
      for (; e === Ys; )
        Ys = Mi[--Ni], Mi[Ni] = null, Hu = Mi[--Ni], Mi[Ni] = null, Fu = Mi[--Ni], Mi[Ni] = null;
    }
    function u1() {
      return Qs(), Ys !== null ? {
        id: Fu,
        overflow: Hu
      } : null;
    }
    function o1(e, t) {
      Qs(), Mi[Ni++] = Fu, Mi[Ni++] = Hu, Mi[Ni++] = Ys, Fu = t.id, Hu = t.overflow, Ys = e;
    }
    function Qs() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ar = null, zi = null, rl = !1, Gs = !1, No = null;
    function s1() {
      rl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function e0() {
      Gs = !0;
    }
    function c1() {
      return Gs;
    }
    function f1(e) {
      var t = e.stateNode.containerInfo;
      return zi = Dx(t), Ar = e, rl = !0, No = null, Gs = !1, !0;
    }
    function d1(e, t, a) {
      return zi = Ox(t), Ar = e, rl = !0, No = null, Gs = !1, a !== null && o1(e, a), !0;
    }
    function t0(e, t) {
      switch (e.tag) {
        case J: {
          Px(e.stateNode.containerInfo, t);
          break;
        }
        case q: {
          var a = (e.mode & vt) !== Le;
          Bx(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ce: {
          var i = e.memoizedState;
          i.dehydrated !== null && Vx(i.dehydrated, t);
          break;
        }
      }
    }
    function n0(e, t) {
      t0(e, t);
      var a = m_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Da) : i.push(a);
    }
    function Xy(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case J: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case q:
                var i = t.type;
                t.pendingProps, Ix(a, i);
                break;
              case De:
                var u = t.pendingProps;
                $x(a, u);
                break;
            }
            break;
          }
          case q: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case q: {
                var v = t.type, y = t.pendingProps, g = (e.mode & vt) !== Le;
                Qx(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case De: {
                var b = t.pendingProps, x = (e.mode & vt) !== Le;
                Gx(
                  s,
                  f,
                  p,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
            }
            break;
          }
          case Ce: {
            var M = e.memoizedState, U = M.dehydrated;
            if (U !== null) switch (t.tag) {
              case q:
                var F = t.type;
                t.pendingProps, Yx(U, F);
                break;
              case De:
                var se = t.pendingProps;
                Wx(U, se);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function r0(e, t) {
      t.flags = t.flags & ~qr | yn, Xy(e, t);
    }
    function a0(e, t) {
      switch (e.tag) {
        case q: {
          var a = e.type;
          e.pendingProps;
          var i = Tx(t, a);
          return i !== null ? (e.stateNode = i, Ar = e, zi = kx(i), !0) : !1;
        }
        case De: {
          var u = e.pendingProps, s = xx(t, u);
          return s !== null ? (e.stateNode = s, Ar = e, zi = null, !0) : !1;
        }
        case Ce: {
          var f = wx(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: u1(),
              retryLane: Zr
            };
            e.memoizedState = p;
            var v = y_(f);
            return v.return = e, e.child = v, Ar = e, zi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ky(e) {
      return (e.mode & vt) !== Le && (e.flags & _e) === Oe;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Zy(e) {
      if (rl) {
        var t = zi;
        if (!t) {
          Ky(e) && (Xy(Ar, e), Jy()), r0(Ar, e), rl = !1, Ar = e;
          return;
        }
        var a = t;
        if (!a0(e, t)) {
          Ky(e) && (Xy(Ar, e), Jy()), t = op(a);
          var i = Ar;
          if (!t || !a0(e, t)) {
            r0(Ar, e), rl = !1, Ar = e;
            return;
          }
          n0(i, a);
        }
      }
    }
    function p1(e, t, a) {
      var i = e.stateNode, u = !Gs, s = Lx(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function v1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Mx(t, a, e);
      if (i) {
        var u = Ar;
        if (u !== null)
          switch (u.tag) {
            case J: {
              var s = u.stateNode.containerInfo, f = (u.mode & vt) !== Le;
              Fx(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case q: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & vt) !== Le;
              Hx(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function h1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Nx(a, e);
    }
    function m1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return zx(a);
    }
    function i0(e) {
      for (var t = e.return; t !== null && t.tag !== q && t.tag !== J && t.tag !== Ce; )
        t = t.return;
      Ar = t;
    }
    function Bh(e) {
      if (e !== Ar)
        return !1;
      if (!rl)
        return i0(e), rl = !0, !1;
      if (e.tag !== J && (e.tag !== q || jx(e.type) && !zy(e.type, e.memoizedProps))) {
        var t = zi;
        if (t)
          if (Ky(e))
            l0(e), Jy();
          else
            for (; t; )
              n0(e, t), t = op(t);
      }
      return i0(e), e.tag === Ce ? zi = m1(e) : zi = Ar ? op(e.stateNode) : null, !0;
    }
    function y1() {
      return rl && zi !== null;
    }
    function l0(e) {
      for (var t = zi; t; )
        t0(e, t), t = op(t);
    }
    function bf() {
      Ar = null, zi = null, rl = !1, Gs = !1;
    }
    function u0() {
      No !== null && (eR(No), No = null);
    }
    function jr() {
      return rl;
    }
    function eg(e) {
      No === null ? No = [e] : No.push(e);
    }
    var g1 = A.ReactCurrentBatchConfig, S1 = null;
    function E1() {
      return g1.transition;
    }
    var al = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var C1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Gt && (t = a), a = a.return;
        return t;
      }, qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Xs = /* @__PURE__ */ new Set();
      al.recordUnsafeLifecycleWarnings = function(e, t) {
        Xs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillMount == "function" && pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillReceiveProps == "function" && hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillUpdate == "function" && yp.push(e));
      }, al.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(x) {
          e.add(qe(x) || "Component"), Xs.add(x.type);
        }), dp = []);
        var t = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(x) {
          t.add(qe(x) || "Component"), Xs.add(x.type);
        }), pp = []);
        var a = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(x) {
          a.add(qe(x) || "Component"), Xs.add(x.type);
        }), vp = []);
        var i = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(x) {
          i.add(qe(x) || "Component"), Xs.add(x.type);
        }), hp = []);
        var u = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(x) {
          u.add(qe(x) || "Component"), Xs.add(x.type);
        }), mp = []);
        var s = /* @__PURE__ */ new Set();
        if (yp.length > 0 && (yp.forEach(function(x) {
          s.add(qe(x) || "Component"), Xs.add(x.type);
        }), yp = []), t.size > 0) {
          var f = qs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = qs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = qs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = qs(e);
          Fe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = qs(a);
          Fe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = qs(u);
          Fe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Ih = /* @__PURE__ */ new Map(), o0 = /* @__PURE__ */ new Set();
      al.recordLegacyContextWarning = function(e, t) {
        var a = C1(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!o0.has(e.type)) {
          var i = Ih.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ih.set(a, i)), i.push(e));
        }
      }, al.flushLegacyContextWarning = function() {
        Ih.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(qe(s) || "Component"), o0.add(s.type);
            });
            var u = qs(i);
            try {
              Yt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              fn();
            }
          }
        });
      }, al.discardPendingWarnings = function() {
        dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Ih = /* @__PURE__ */ new Map();
      };
    }
    var tg, ng, rg, ag, ig, s0 = function(e, t) {
    };
    tg = !1, ng = !1, rg = {}, ag = {}, ig = {}, s0 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = qe(t) || "Component";
        ag[a] || (ag[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function R1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function gp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Gt || P) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== te) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !R1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = qe(e) || "Component";
          rg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), rg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== te)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          ci(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var x = v.refs;
            b === null ? delete x[y] : x[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function $h(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Yh(e) {
      {
        var t = qe(e) || "Component";
        if (ig[t])
          return;
        ig[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function c0(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function f0(e) {
      function t(D, H) {
        if (e) {
          var O = D.deletions;
          O === null ? (D.deletions = [H], D.flags |= Da) : O.push(H);
        }
      }
      function a(D, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(D, O), O = O.sibling;
        return null;
      }
      function i(D, H) {
        for (var O = /* @__PURE__ */ new Map(), K = H; K !== null; )
          K.key !== null ? O.set(K.key, K) : O.set(K.index, K), K = K.sibling;
        return O;
      }
      function u(D, H) {
        var O = ic(D, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(D, H, O) {
        if (D.index = O, !e)
          return D.flags |= Ri, H;
        var K = D.alternate;
        if (K !== null) {
          var pe = K.index;
          return pe < H ? (D.flags |= yn, H) : pe;
        } else
          return D.flags |= yn, H;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= yn), D;
      }
      function p(D, H, O, K) {
        if (H === null || H.tag !== De) {
          var pe = eE(O, D.mode, K);
          return pe.return = D, pe;
        } else {
          var ce = u(H, O);
          return ce.return = D, ce;
        }
      }
      function v(D, H, O, K) {
        var pe = O.type;
        if (pe === di)
          return g(D, H, O.props.children, K, O.key);
        if (H !== null && (H.elementType === pe || // Keep this check inline so it only runs on the false path:
        mR(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof pe == "object" && pe !== null && pe.$$typeof === Xe && c0(pe) === H.type)) {
          var ce = u(H, O.props);
          return ce.ref = gp(D, H, O), ce.return = D, ce._debugSource = O._source, ce._debugOwner = O._owner, ce;
        }
        var Ye = ZS(O, D.mode, K);
        return Ye.ref = gp(D, H, O), Ye.return = D, Ye;
      }
      function y(D, H, O, K) {
        if (H === null || H.tag !== me || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var pe = tE(O, D.mode, K);
          return pe.return = D, pe;
        } else {
          var ce = u(H, O.children || []);
          return ce.return = D, ce;
        }
      }
      function g(D, H, O, K, pe) {
        if (H === null || H.tag !== We) {
          var ce = $o(O, D.mode, K, pe);
          return ce.return = D, ce;
        } else {
          var Ye = u(H, O);
          return Ye.return = D, Ye;
        }
      }
      function b(D, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var K = eE("" + H, D.mode, O);
          return K.return = D, K;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case kr: {
              var pe = ZS(H, D.mode, O);
              return pe.ref = gp(D, null, H), pe.return = D, pe;
            }
            case ar: {
              var ce = tE(H, D.mode, O);
              return ce.return = D, ce;
            }
            case Xe: {
              var Ye = H._payload, Je = H._init;
              return b(D, Je(Ye), O);
            }
          }
          if (ct(H) || tt(H)) {
            var Xt = $o(H, D.mode, O, null);
            return Xt.return = D, Xt;
          }
          $h(D, H);
        }
        return typeof H == "function" && Yh(D), null;
      }
      function x(D, H, O, K) {
        var pe = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return pe !== null ? null : p(D, H, "" + O, K);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case kr:
              return O.key === pe ? v(D, H, O, K) : null;
            case ar:
              return O.key === pe ? y(D, H, O, K) : null;
            case Xe: {
              var ce = O._payload, Ye = O._init;
              return x(D, H, Ye(ce), K);
            }
          }
          if (ct(O) || tt(O))
            return pe !== null ? null : g(D, H, O, K, null);
          $h(D, O);
        }
        return typeof O == "function" && Yh(D), null;
      }
      function M(D, H, O, K, pe) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var ce = D.get(O) || null;
          return p(H, ce, "" + K, pe);
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case kr: {
              var Ye = D.get(K.key === null ? O : K.key) || null;
              return v(H, Ye, K, pe);
            }
            case ar: {
              var Je = D.get(K.key === null ? O : K.key) || null;
              return y(H, Je, K, pe);
            }
            case Xe:
              var Xt = K._payload, Ut = K._init;
              return M(D, H, O, Ut(Xt), pe);
          }
          if (ct(K) || tt(K)) {
            var qn = D.get(O) || null;
            return g(H, qn, K, pe, null);
          }
          $h(H, K);
        }
        return typeof K == "function" && Yh(H), null;
      }
      function U(D, H, O) {
        {
          if (typeof D != "object" || D === null)
            return H;
          switch (D.$$typeof) {
            case kr:
            case ar:
              s0(D, O);
              var K = D.key;
              if (typeof K != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(K);
                break;
              }
              if (!H.has(K)) {
                H.add(K);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", K);
              break;
            case Xe:
              var pe = D._payload, ce = D._init;
              U(ce(pe), H, O);
              break;
          }
        }
        return H;
      }
      function F(D, H, O, K) {
        for (var pe = null, ce = 0; ce < O.length; ce++) {
          var Ye = O[ce];
          pe = U(Ye, pe, D);
        }
        for (var Je = null, Xt = null, Ut = H, qn = 0, At = 0, Vn = null; Ut !== null && At < O.length; At++) {
          Ut.index > At ? (Vn = Ut, Ut = null) : Vn = Ut.sibling;
          var ua = x(D, Ut, O[At], K);
          if (ua === null) {
            Ut === null && (Ut = Vn);
            break;
          }
          e && Ut && ua.alternate === null && t(D, Ut), qn = s(ua, qn, At), Xt === null ? Je = ua : Xt.sibling = ua, Xt = ua, Ut = Vn;
        }
        if (At === O.length) {
          if (a(D, Ut), jr()) {
            var $r = At;
            Ws(D, $r);
          }
          return Je;
        }
        if (Ut === null) {
          for (; At < O.length; At++) {
            var si = b(D, O[At], K);
            si !== null && (qn = s(si, qn, At), Xt === null ? Je = si : Xt.sibling = si, Xt = si);
          }
          if (jr()) {
            var Ra = At;
            Ws(D, Ra);
          }
          return Je;
        }
        for (var Ta = i(D, Ut); At < O.length; At++) {
          var oa = M(Ta, D, At, O[At], K);
          oa !== null && (e && oa.alternate !== null && Ta.delete(oa.key === null ? At : oa.key), qn = s(oa, qn, At), Xt === null ? Je = oa : Xt.sibling = oa, Xt = oa);
        }
        if (e && Ta.forEach(function(Yf) {
          return t(D, Yf);
        }), jr()) {
          var Wu = At;
          Ws(D, Wu);
        }
        return Je;
      }
      function se(D, H, O, K) {
        var pe = tt(O);
        if (typeof pe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (ng || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ng = !0), O.entries === pe && (tg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tg = !0);
          var ce = pe.call(O);
          if (ce)
            for (var Ye = null, Je = ce.next(); !Je.done; Je = ce.next()) {
              var Xt = Je.value;
              Ye = U(Xt, Ye, D);
            }
        }
        var Ut = pe.call(O);
        if (Ut == null)
          throw new Error("An iterable object provided no iterator.");
        for (var qn = null, At = null, Vn = H, ua = 0, $r = 0, si = null, Ra = Ut.next(); Vn !== null && !Ra.done; $r++, Ra = Ut.next()) {
          Vn.index > $r ? (si = Vn, Vn = null) : si = Vn.sibling;
          var Ta = x(D, Vn, Ra.value, K);
          if (Ta === null) {
            Vn === null && (Vn = si);
            break;
          }
          e && Vn && Ta.alternate === null && t(D, Vn), ua = s(Ta, ua, $r), At === null ? qn = Ta : At.sibling = Ta, At = Ta, Vn = si;
        }
        if (Ra.done) {
          if (a(D, Vn), jr()) {
            var oa = $r;
            Ws(D, oa);
          }
          return qn;
        }
        if (Vn === null) {
          for (; !Ra.done; $r++, Ra = Ut.next()) {
            var Wu = b(D, Ra.value, K);
            Wu !== null && (ua = s(Wu, ua, $r), At === null ? qn = Wu : At.sibling = Wu, At = Wu);
          }
          if (jr()) {
            var Yf = $r;
            Ws(D, Yf);
          }
          return qn;
        }
        for (var Xp = i(D, Vn); !Ra.done; $r++, Ra = Ut.next()) {
          var Jl = M(Xp, D, $r, Ra.value, K);
          Jl !== null && (e && Jl.alternate !== null && Xp.delete(Jl.key === null ? $r : Jl.key), ua = s(Jl, ua, $r), At === null ? qn = Jl : At.sibling = Jl, At = Jl);
        }
        if (e && Xp.forEach(function(G_) {
          return t(D, G_);
        }), jr()) {
          var Q_ = $r;
          Ws(D, Q_);
        }
        return qn;
      }
      function Ue(D, H, O, K) {
        if (H !== null && H.tag === De) {
          a(D, H.sibling);
          var pe = u(H, O);
          return pe.return = D, pe;
        }
        a(D, H);
        var ce = eE(O, D.mode, K);
        return ce.return = D, ce;
      }
      function we(D, H, O, K) {
        for (var pe = O.key, ce = H; ce !== null; ) {
          if (ce.key === pe) {
            var Ye = O.type;
            if (Ye === di) {
              if (ce.tag === We) {
                a(D, ce.sibling);
                var Je = u(ce, O.props.children);
                return Je.return = D, Je._debugSource = O._source, Je._debugOwner = O._owner, Je;
              }
            } else if (ce.elementType === Ye || // Keep this check inline so it only runs on the false path:
            mR(ce, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ye == "object" && Ye !== null && Ye.$$typeof === Xe && c0(Ye) === ce.type) {
              a(D, ce.sibling);
              var Xt = u(ce, O.props);
              return Xt.ref = gp(D, ce, O), Xt.return = D, Xt._debugSource = O._source, Xt._debugOwner = O._owner, Xt;
            }
            a(D, ce);
            break;
          } else
            t(D, ce);
          ce = ce.sibling;
        }
        if (O.type === di) {
          var Ut = $o(O.props.children, D.mode, K, O.key);
          return Ut.return = D, Ut;
        } else {
          var qn = ZS(O, D.mode, K);
          return qn.ref = gp(D, H, O), qn.return = D, qn;
        }
      }
      function xt(D, H, O, K) {
        for (var pe = O.key, ce = H; ce !== null; ) {
          if (ce.key === pe)
            if (ce.tag === me && ce.stateNode.containerInfo === O.containerInfo && ce.stateNode.implementation === O.implementation) {
              a(D, ce.sibling);
              var Ye = u(ce, O.children || []);
              return Ye.return = D, Ye;
            } else {
              a(D, ce);
              break;
            }
          else
            t(D, ce);
          ce = ce.sibling;
        }
        var Je = tE(O, D.mode, K);
        return Je.return = D, Je;
      }
      function St(D, H, O, K) {
        var pe = typeof O == "object" && O !== null && O.type === di && O.key === null;
        if (pe && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case kr:
              return f(we(D, H, O, K));
            case ar:
              return f(xt(D, H, O, K));
            case Xe:
              var ce = O._payload, Ye = O._init;
              return St(D, H, Ye(ce), K);
          }
          if (ct(O))
            return F(D, H, O, K);
          if (tt(O))
            return se(D, H, O, K);
          $h(D, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Ue(D, H, "" + O, K)) : (typeof O == "function" && Yh(D), a(D, H));
      }
      return St;
    }
    var _f = f0(!0), d0 = f0(!1);
    function T1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ic(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ic(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function x1(e, t) {
      for (var a = e.child; a !== null; )
        f_(a, t), a = a.sibling;
    }
    var lg = Oo(null), ug;
    ug = {};
    var Wh = null, kf = null, og = null, Qh = !1;
    function Gh() {
      Wh = null, kf = null, og = null, Qh = !1;
    }
    function p0() {
      Qh = !0;
    }
    function v0() {
      Qh = !1;
    }
    function h0(e, t, a) {
      ia(lg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ug && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ug;
    }
    function sg(e, t) {
      var a = lg.current;
      aa(lg, t), e._currentValue = a;
    }
    function cg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (ku(i.childLanes, t) ? u !== null && !ku(u.childLanes, t) && (u.childLanes = nt(u.childLanes, t)) : (i.childLanes = nt(i.childLanes, t), u !== null && (u.childLanes = nt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function w1(e, t, a) {
      b1(e, t, a);
    }
    function b1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === te) {
                var p = Ts(a), v = Pu(Kt, p);
                v.tag = Xh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = nt(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = nt(x.lanes, a)), cg(i.return, a, e), s.lanes = nt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === it)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === en) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = nt(M.lanes, a);
          var U = M.alternate;
          U !== null && (U.lanes = nt(U.lanes, a)), cg(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var F = u.sibling;
            if (F !== null) {
              F.return = u.return, u = F;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Df(e, t) {
      Wh = e, kf = null, og = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ea(a.lanes, t) && Np(), a.firstContext = null);
      }
    }
    function nr(e) {
      Qh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (og !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (kf === null) {
          if (Wh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          kf = a, Wh.dependencies = {
            lanes: I,
            firstContext: a
          };
        } else
          kf = kf.next = a;
      }
      return t;
    }
    var Ks = null;
    function fg(e) {
      Ks === null ? Ks = [e] : Ks.push(e);
    }
    function _1() {
      if (Ks !== null) {
        for (var e = 0; e < Ks.length; e++) {
          var t = Ks[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Ks = null;
      }
    }
    function m0(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function k1(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function D1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function Ha(e, t) {
      return qh(e, t);
    }
    var O1 = qh;
    function qh(e, t) {
      e.lanes = nt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = nt(a.lanes, t)), a === null && (e.flags & (yn | qr)) !== Oe && dR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = nt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = nt(a.childLanes, t) : (u.flags & (yn | qr)) !== Oe && dR(e), i = u, u = u.return;
      if (i.tag === J) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var y0 = 0, g0 = 1, Xh = 2, dg = 3, Kh = !1, pg, Jh;
    pg = !1, Jh = null;
    function vg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: I
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function S0(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Pu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: y0,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function zo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Jh === u && !pg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), pg = !0), kb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, O1(e, a);
      } else
        return D1(e, u, t, a);
    }
    function Zh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Ld(a)) {
          var s = u.lanes;
          s = Nd(s, e.pendingLanes);
          var f = nt(s, a);
          u.lanes = f, ef(e, f);
        }
      }
    }
    function hg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function L1(e, t, a, i, u, s) {
      switch (a.tag) {
        case g0: {
          var f = a.payload;
          if (typeof f == "function") {
            p0();
            var p = f.call(s, i, u);
            {
              if (e.mode & Gt) {
                gn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  gn(!1);
                }
              }
              v0();
            }
            return p;
          }
          return f;
        }
        case dg:
          e.flags = e.flags & ~Jn | _e;
        case y0: {
          var v = a.payload, y;
          if (typeof v == "function") {
            p0(), y = v.call(s, i, u);
            {
              if (e.mode & Gt) {
                gn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  gn(!1);
                }
              }
              v0();
            }
          } else
            y = v;
          return y == null ? i : at({}, i, y);
        }
        case Xh:
          return Kh = !0, i;
      }
      return i;
    }
    function em(e, t, a, i) {
      var u = e.updateQueue;
      Kh = !1, Jh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, x = b.lastBaseUpdate;
          x !== f && (x === null ? b.firstBaseUpdate = y : x.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, U = I, F = null, se = null, Ue = null, we = s;
        do {
          var xt = we.lane, St = we.eventTime;
          if (ku(i, xt)) {
            if (Ue !== null) {
              var H = {
                eventTime: St,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                tag: we.tag,
                payload: we.payload,
                callback: we.callback,
                next: null
              };
              Ue = Ue.next = H;
            }
            M = L1(e, u, we, M, t, a);
            var O = we.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            we.lane !== Dt) {
              e.flags |= ln;
              var K = u.effects;
              K === null ? u.effects = [we] : K.push(we);
            }
          } else {
            var D = {
              eventTime: St,
              lane: xt,
              tag: we.tag,
              payload: we.payload,
              callback: we.callback,
              next: null
            };
            Ue === null ? (se = Ue = D, F = M) : Ue = Ue.next = D, U = nt(U, xt);
          }
          if (we = we.next, we === null) {
            if (p = u.shared.pending, p === null)
              break;
            var pe = p, ce = pe.next;
            pe.next = null, we = ce, u.lastBaseUpdate = pe, u.shared.pending = null;
          }
        } while (!0);
        Ue === null && (F = M), u.baseState = F, u.firstBaseUpdate = se, u.lastBaseUpdate = Ue;
        var Ye = u.shared.interleaved;
        if (Ye !== null) {
          var Je = Ye;
          do
            U = nt(U, Je.lane), Je = Je.next;
          while (Je !== Ye);
        } else s === null && (u.shared.lanes = I);
        Yp(U), e.lanes = U, e.memoizedState = M;
      }
      Jh = null;
    }
    function M1(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function E0() {
      Kh = !1;
    }
    function tm() {
      return Kh;
    }
    function C0(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, M1(f, a));
        }
    }
    var Sp = {}, Uo = Oo(Sp), Ep = Oo(Sp), nm = Oo(Sp);
    function rm(e) {
      if (e === Sp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function R0() {
      var e = rm(nm.current);
      return e;
    }
    function mg(e, t) {
      ia(nm, t, e), ia(Ep, e, e), ia(Uo, Sp, e);
      var a = qT(t);
      aa(Uo, e), ia(Uo, a, e);
    }
    function Of(e) {
      aa(Uo, e), aa(Ep, e), aa(nm, e);
    }
    function yg() {
      var e = rm(Uo.current);
      return e;
    }
    function T0(e) {
      rm(nm.current);
      var t = rm(Uo.current), a = XT(t, e.type);
      t !== a && (ia(Ep, e, e), ia(Uo, a, e));
    }
    function gg(e) {
      Ep.current === e && (aa(Uo, e), aa(Ep, e));
    }
    var N1 = 0, x0 = 1, w0 = 1, Cp = 2, il = Oo(N1);
    function Sg(e, t) {
      return (e & t) !== 0;
    }
    function Lf(e) {
      return e & x0;
    }
    function Eg(e, t) {
      return e & x0 | t;
    }
    function z1(e, t) {
      return e | t;
    }
    function Ao(e, t) {
      ia(il, t, e);
    }
    function Mf(e) {
      aa(il, e);
    }
    function U1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function am(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ce) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || BE(i) || Fy(i))
              return t;
          }
        } else if (t.tag === on && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & _e) !== Oe;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Pa = (
      /*   */
      0
    ), fr = (
      /* */
      1
    ), Yl = (
      /*  */
      2
    ), dr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), Cg = [];
    function Rg() {
      for (var e = 0; e < Cg.length; e++) {
        var t = Cg[e];
        t._workInProgressVersionPrimary = null;
      }
      Cg.length = 0;
    }
    function A1(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var de = A.ReactCurrentDispatcher, Rp = A.ReactCurrentBatchConfig, Tg, Nf;
    Tg = /* @__PURE__ */ new Set();
    var Js = I, qt = null, pr = null, vr = null, im = !1, Tp = !1, xp = 0, j1 = 0, F1 = 25, V = null, Ui = null, jo = -1, xg = !1;
    function Vt() {
      {
        var e = V;
        Ui === null ? Ui = [e] : Ui.push(e);
      }
    }
    function ae() {
      {
        var e = V;
        Ui !== null && (jo++, Ui[jo] !== e && H1(e));
      }
    }
    function zf(e) {
      e != null && !ct(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function H1(e) {
      {
        var t = qe(qt);
        if (!Tg.has(t) && (Tg.add(t), Ui !== null)) {
          for (var a = "", i = 30, u = 0; u <= jo; u++) {
            for (var s = Ui[u], f = u === jo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function la() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function wg(e, t) {
      if (xg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!W(e[a], t[a]))
          return !1;
      return !0;
    }
    function Uf(e, t, a, i, u, s) {
      Js = s, qt = t, Ui = e !== null ? e._debugHookTypes : null, jo = -1, xg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = I, e !== null && e.memoizedState !== null ? de.current = Q0 : Ui !== null ? de.current = W0 : de.current = Y0;
      var f = a(i, u);
      if (Tp) {
        var p = 0;
        do {
          if (Tp = !1, xp = 0, p >= F1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, xg = !1, pr = null, vr = null, t.updateQueue = null, jo = -1, de.current = G0, f = a(i, u);
        } while (Tp);
      }
      de.current = gm, t._debugHookTypes = Ui;
      var v = pr !== null && pr.next !== null;
      if (Js = I, qt = null, pr = null, vr = null, V = null, Ui = null, jo = -1, e !== null && (e.flags & Un) !== (t.flags & Un) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & vt) !== Le && S("Internal React error: Expected static flag was missing. Please notify the React team."), im = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Af() {
      var e = xp !== 0;
      return xp = 0, e;
    }
    function b0(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Nt) !== Le ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = xs(e.lanes, a);
    }
    function _0() {
      if (de.current = gm, im) {
        for (var e = qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        im = !1;
      }
      Js = I, qt = null, pr = null, vr = null, Ui = null, jo = -1, V = null, P0 = !1, Tp = !1, xp = 0;
    }
    function Wl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return vr === null ? qt.memoizedState = vr = e : vr = vr.next = e, vr;
    }
    function Ai() {
      var e;
      if (pr === null) {
        var t = qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = pr.next;
      var a;
      if (vr === null ? a = qt.memoizedState : a = vr.next, a !== null)
        vr = a, a = vr.next, pr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        pr = e;
        var i = {
          memoizedState: pr.memoizedState,
          baseState: pr.baseState,
          baseQueue: pr.baseQueue,
          queue: pr.queue,
          next: null
        };
        vr === null ? qt.memoizedState = vr = i : vr = vr.next = i;
      }
      return vr;
    }
    function k0() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function bg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function _g(e, t, a) {
      var i = Wl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = I1.bind(null, qt, s);
      return [i.memoizedState, f];
    }
    function kg(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = pr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, x = null, M = null, U = null, F = g;
        do {
          var se = F.lane;
          if (ku(Js, se)) {
            if (U !== null) {
              var we = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              U = U.next = we;
            }
            if (F.hasEagerState)
              b = F.eagerState;
            else {
              var xt = F.action;
              b = e(b, xt);
            }
          } else {
            var Ue = {
              lane: se,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            U === null ? (M = U = Ue, x = b) : U = U.next = Ue, qt.lanes = nt(qt.lanes, se), Yp(se);
          }
          F = F.next;
        } while (F !== null && F !== g);
        U === null ? x = b : U.next = M, W(b, i.memoizedState) || Np(), i.memoizedState = b, i.baseState = x, i.baseQueue = U, u.lastRenderedState = b;
      }
      var St = u.interleaved;
      if (St !== null) {
        var D = St;
        do {
          var H = D.lane;
          qt.lanes = nt(qt.lanes, H), Yp(H), D = D.next;
        } while (D !== St);
      } else f === null && (u.lanes = I);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Dg(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        W(p, i.memoizedState) || Np(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function vk(e, t, a) {
    }
    function hk(e, t, a) {
    }
    function Og(e, t, a) {
      var i = qt, u = Wl(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Nf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Nf = !0);
      } else {
        if (s = t(), !Nf) {
          var p = t();
          W(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Nf = !0);
        }
        var v = jm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Jc(v, Js) || D0(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, cm(L0.bind(null, i, y, e), [e]), i.flags |= Gr, wp(fr | Fr, O0.bind(null, i, y, s, t), void 0, null), s;
    }
    function lm(e, t, a) {
      var i = qt, u = Ai(), s = t();
      if (!Nf) {
        var f = t();
        W(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Nf = !0);
      }
      var p = u.memoizedState, v = !W(p, s);
      v && (u.memoizedState = s, Np());
      var y = u.queue;
      if (_p(L0.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      vr !== null && vr.memoizedState.tag & fr) {
        i.flags |= Gr, wp(fr | Fr, O0.bind(null, i, y, s, t), void 0, null);
        var g = jm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Jc(g, Js) || D0(i, t, s);
      }
      return s;
    }
    function D0(e, t, a) {
      e.flags |= vo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = qt.updateQueue;
      if (u === null)
        u = k0(), qt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function O0(e, t, a, i) {
      t.value = a, t.getSnapshot = i, M0(t) && N0(e);
    }
    function L0(e, t, a) {
      var i = function() {
        M0(t) && N0(e);
      };
      return a(i);
    }
    function M0(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !W(a, i);
      } catch {
        return !0;
      }
    }
    function N0(e) {
      var t = Ha(e, Be);
      t !== null && gr(t, e, Be, Kt);
    }
    function um(e) {
      var t = Wl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: bg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = $1.bind(null, qt, a);
      return [t.memoizedState, i];
    }
    function Lg(e) {
      return kg(bg);
    }
    function Mg(e) {
      return Dg(bg);
    }
    function wp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = qt.updateQueue;
      if (s === null)
        s = k0(), qt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Ng(e) {
      var t = Wl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function om(e) {
      var t = Ai();
      return t.memoizedState;
    }
    function bp(e, t, a, i) {
      var u = Wl(), s = i === void 0 ? null : i;
      qt.flags |= e, u.memoizedState = wp(fr | t, a, void 0, s);
    }
    function sm(e, t, a, i) {
      var u = Ai(), s = i === void 0 ? null : i, f = void 0;
      if (pr !== null) {
        var p = pr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (wg(s, v)) {
            u.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      qt.flags |= e, u.memoizedState = wp(fr | t, a, f, s);
    }
    function cm(e, t) {
      return (qt.mode & Nt) !== Le ? bp(Ti | Gr | wc, Fr, e, t) : bp(Gr | wc, Fr, e, t);
    }
    function _p(e, t) {
      return sm(Gr, Fr, e, t);
    }
    function zg(e, t) {
      return bp(Ct, Yl, e, t);
    }
    function fm(e, t) {
      return sm(Ct, Yl, e, t);
    }
    function Ug(e, t) {
      var a = Ct;
      return a |= Qi, (qt.mode & Nt) !== Le && (a |= _l), bp(a, dr, e, t);
    }
    function dm(e, t) {
      return sm(Ct, dr, e, t);
    }
    function z0(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Ag(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ct;
      return u |= Qi, (qt.mode & Nt) !== Le && (u |= _l), bp(u, dr, z0.bind(null, t, e), i);
    }
    function pm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return sm(Ct, dr, z0.bind(null, t, e), i);
    }
    function P1(e, t) {
    }
    var vm = P1;
    function jg(e, t) {
      var a = Wl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function hm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (wg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Fg(e, t) {
      var a = Wl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function mm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (wg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Hg(e) {
      var t = Wl();
      return t.memoizedState = e, e;
    }
    function U0(e) {
      var t = Ai(), a = pr, i = a.memoizedState;
      return j0(t, i, e);
    }
    function A0(e) {
      var t = Ai();
      if (pr === null)
        return t.memoizedState = e, e;
      var a = pr.memoizedState;
      return j0(t, a, e);
    }
    function j0(e, t, a) {
      var i = !Dd(Js);
      if (i) {
        if (!W(a, t)) {
          var u = Md();
          qt.lanes = nt(qt.lanes, u), Yp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Np()), e.memoizedState = a, a;
    }
    function V1(e, t, a) {
      var i = Aa();
      Fn(Qv(i, _i)), e(!0);
      var u = Rp.transition;
      Rp.transition = {};
      var s = Rp.transition;
      Rp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Fn(i), Rp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Fe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Pg() {
      var e = um(!1), t = e[0], a = e[1], i = V1.bind(null, a), u = Wl();
      return u.memoizedState = i, [t, i];
    }
    function F0() {
      var e = Lg(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    function H0() {
      var e = Mg(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    var P0 = !1;
    function B1() {
      return P0;
    }
    function Vg() {
      var e = Wl(), t = jm(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = i1();
        i = ":" + a + "R" + u;
        var s = xp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = j1++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function ym() {
      var e = Ai(), t = e.memoizedState;
      return t;
    }
    function I1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (V0(e))
        B0(t, u);
      else {
        var s = m0(e, t, u, i);
        if (s !== null) {
          var f = Ca();
          gr(s, e, i, f), I0(s, t, i);
        }
      }
      $0(e, i);
    }
    function $1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (V0(e))
        B0(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === I && (s === null || s.lanes === I)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = de.current, de.current = ll;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, W(y, v)) {
                k1(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              de.current = p;
            }
          }
        }
        var g = m0(e, t, u, i);
        if (g !== null) {
          var b = Ca();
          gr(g, e, i, b), I0(g, t, i);
        }
      }
      $0(e, i);
    }
    function V0(e) {
      var t = e.alternate;
      return e === qt || t !== null && t === qt;
    }
    function B0(e, t) {
      Tp = im = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function I0(e, t, a) {
      if (Ld(a)) {
        var i = t.lanes;
        i = Nd(i, e.pendingLanes);
        var u = nt(i, a);
        t.lanes = u, ef(e, u);
      }
    }
    function $0(e, t, a) {
      vs(e, t);
    }
    var gm = {
      readContext: nr,
      useCallback: la,
      useContext: la,
      useEffect: la,
      useImperativeHandle: la,
      useInsertionEffect: la,
      useLayoutEffect: la,
      useMemo: la,
      useReducer: la,
      useRef: la,
      useState: la,
      useDebugValue: la,
      useDeferredValue: la,
      useTransition: la,
      useMutableSource: la,
      useSyncExternalStore: la,
      useId: la,
      unstable_isNewReconciler: ee
    }, Y0 = null, W0 = null, Q0 = null, G0 = null, Ql = null, ll = null, Sm = null;
    {
      var Bg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ke = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Y0 = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Vt(), zf(t), jg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Vt(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Vt(), zf(t), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Vt(), zf(a), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Vt(), zf(t), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Vt(), zf(t), Ug(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Vt(), zf(t);
          var a = de.current;
          de.current = Ql;
          try {
            return Fg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Vt();
          var i = de.current;
          de.current = Ql;
          try {
            return _g(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Vt(), Ng(e);
        },
        useState: function(e) {
          V = "useState", Vt();
          var t = de.current;
          de.current = Ql;
          try {
            return um(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Vt(), Hg(e);
        },
        useTransition: function() {
          return V = "useTransition", Vt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Vt(), Og(e, t, a);
        },
        useId: function() {
          return V = "useId", Vt(), Vg();
        },
        unstable_isNewReconciler: ee
      }, W0 = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ae(), jg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ae(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ae(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ae(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ae(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ae(), Ug(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ae();
          var a = de.current;
          de.current = Ql;
          try {
            return Fg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ae();
          var i = de.current;
          de.current = Ql;
          try {
            return _g(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ae(), Ng(e);
        },
        useState: function(e) {
          V = "useState", ae();
          var t = de.current;
          de.current = Ql;
          try {
            return um(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ae(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ae(), Hg(e);
        },
        useTransition: function() {
          return V = "useTransition", ae(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ae(), Og(e, t, a);
        },
        useId: function() {
          return V = "useId", ae(), Vg();
        },
        unstable_isNewReconciler: ee
      }, Q0 = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ae(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ae(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ae(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ae(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ae(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ae(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ae();
          var a = de.current;
          de.current = ll;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ae();
          var i = de.current;
          de.current = ll;
          try {
            return kg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ae(), om();
        },
        useState: function(e) {
          V = "useState", ae();
          var t = de.current;
          de.current = ll;
          try {
            return Lg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ae(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ae(), U0(e);
        },
        useTransition: function() {
          return V = "useTransition", ae(), F0();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ae(), lm(e, t);
        },
        useId: function() {
          return V = "useId", ae(), ym();
        },
        unstable_isNewReconciler: ee
      }, G0 = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ae(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ae(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ae(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ae(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ae(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ae(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ae();
          var a = de.current;
          de.current = Sm;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ae();
          var i = de.current;
          de.current = Sm;
          try {
            return Dg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ae(), om();
        },
        useState: function(e) {
          V = "useState", ae();
          var t = de.current;
          de.current = Sm;
          try {
            return Mg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ae(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ae(), A0(e);
        },
        useTransition: function() {
          return V = "useTransition", ae(), H0();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ae(), lm(e, t);
        },
        useId: function() {
          return V = "useId", ae(), ym();
        },
        unstable_isNewReconciler: ee
      }, Ql = {
        readContext: function(e) {
          return Bg(), nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ke(), Vt(), jg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ke(), Vt(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ke(), Vt(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ke(), Vt(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ke(), Vt(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ke(), Vt(), Ug(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ke(), Vt();
          var a = de.current;
          de.current = Ql;
          try {
            return Fg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ke(), Vt();
          var i = de.current;
          de.current = Ql;
          try {
            return _g(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ke(), Vt(), Ng(e);
        },
        useState: function(e) {
          V = "useState", Ke(), Vt();
          var t = de.current;
          de.current = Ql;
          try {
            return um(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ke(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ke(), Vt(), Hg(e);
        },
        useTransition: function() {
          return V = "useTransition", Ke(), Vt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ke(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ke(), Vt(), Og(e, t, a);
        },
        useId: function() {
          return V = "useId", Ke(), Vt(), Vg();
        },
        unstable_isNewReconciler: ee
      }, ll = {
        readContext: function(e) {
          return Bg(), nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ke(), ae(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ke(), ae(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ke(), ae(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ke(), ae(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ke(), ae(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ke(), ae(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ke(), ae();
          var a = de.current;
          de.current = ll;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ke(), ae();
          var i = de.current;
          de.current = ll;
          try {
            return kg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ke(), ae(), om();
        },
        useState: function(e) {
          V = "useState", Ke(), ae();
          var t = de.current;
          de.current = ll;
          try {
            return Lg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ke(), ae(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ke(), ae(), U0(e);
        },
        useTransition: function() {
          return V = "useTransition", Ke(), ae(), F0();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ke(), ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ke(), ae(), lm(e, t);
        },
        useId: function() {
          return V = "useId", Ke(), ae(), ym();
        },
        unstable_isNewReconciler: ee
      }, Sm = {
        readContext: function(e) {
          return Bg(), nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ke(), ae(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ke(), ae(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ke(), ae(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ke(), ae(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ke(), ae(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ke(), ae(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ke(), ae();
          var a = de.current;
          de.current = ll;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ke(), ae();
          var i = de.current;
          de.current = ll;
          try {
            return Dg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ke(), ae(), om();
        },
        useState: function(e) {
          V = "useState", Ke(), ae();
          var t = de.current;
          de.current = ll;
          try {
            return Mg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ke(), ae(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ke(), ae(), A0(e);
        },
        useTransition: function() {
          return V = "useTransition", Ke(), ae(), H0();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ke(), ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ke(), ae(), lm(e, t);
        },
        useId: function() {
          return V = "useId", Ke(), ae(), ym();
        },
        unstable_isNewReconciler: ee
      };
    }
    var Fo = G.unstable_now, q0 = 0, Em = -1, kp = -1, Cm = -1, Ig = !1, Rm = !1;
    function X0() {
      return Ig;
    }
    function Y1() {
      Rm = !0;
    }
    function W1() {
      Ig = !1, Rm = !1;
    }
    function Q1() {
      Ig = Rm, Rm = !1;
    }
    function K0() {
      return q0;
    }
    function J0() {
      q0 = Fo();
    }
    function $g(e) {
      kp = Fo(), e.actualStartTime < 0 && (e.actualStartTime = Fo());
    }
    function Z0(e) {
      kp = -1;
    }
    function Tm(e, t) {
      if (kp >= 0) {
        var a = Fo() - kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), kp = -1;
      }
    }
    function Gl(e) {
      if (Em >= 0) {
        var t = Fo() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ht:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Yg(e) {
      if (Cm >= 0) {
        var t = Fo() - Cm;
        Cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ht:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ql() {
      Em = Fo();
    }
    function Wg() {
      Cm = Fo();
    }
    function Qg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ul(e, t) {
      if (e && e.defaultProps) {
        var a = at({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Gg = {}, qg, Xg, Kg, Jg, Zg, eC, xm, eS, tS, nS, Dp;
    {
      qg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), Dp = /* @__PURE__ */ new Set();
      var tC = /* @__PURE__ */ new Set();
      xm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          tC.has(a) || (tC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, eC = function(e, t) {
        if (t === void 0) {
          var a = wt(e) || "Component";
          Zg.has(a) || (Zg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Gg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Gg);
    }
    function rS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Gt) {
          gn(!0);
          try {
            s = a(i, u);
          } finally {
            gn(!1);
          }
        }
        eC(t, s);
      }
      var f = s == null ? u : at({}, u, s);
      if (e.memoizedState = f, e.lanes === I) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var aS = {
      isMounted: Lv,
      enqueueSetState: function(e, t, a) {
        var i = po(e), u = Ca(), s = Bo(i), f = Pu(u, s);
        f.payload = t, a != null && (xm(a, "setState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (gr(p, i, s, u), Zh(p, i, s)), vs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = po(e), u = Ca(), s = Bo(i), f = Pu(u, s);
        f.tag = g0, f.payload = t, a != null && (xm(a, "replaceState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (gr(p, i, s, u), Zh(p, i, s)), vs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = po(e), i = Ca(), u = Bo(a), s = Pu(i, u);
        s.tag = Xh, t != null && (xm(t, "forceUpdate"), s.callback = t);
        var f = zo(a, s, u);
        f !== null && (gr(f, a, u, i), Zh(f, a, u)), Mc(a, u);
      }
    };
    function nC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Gt) {
            gn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              gn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", wt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ge(a, i) || !ge(u, s) : !0;
    }
    function G1(e, t, a) {
      var i = e.stateNode;
      {
        var u = wt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === Le && (Dp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === Le && (Dp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !tS.has(t) && (tS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", wt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Kg.has(t) && (Kg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", wt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || ct(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function rC(e, t) {
      t.updater = aS, e.stateNode = t, vu(t, e), t._reactInternalInstance = Gg;
    }
    function aC(e, t, a) {
      var i = !1, u = ui, s = ui, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !nS.has(t)) {
          nS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === vi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", wt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = nr(f);
      else {
        u = Rf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Tf(e, u) : ui;
      }
      var g = new t(a, s);
      if (e.mode & Gt) {
        gn(!0);
        try {
          g = new t(a, s);
        } finally {
          gn(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      rC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var x = wt(t) || "Component";
          Xg.has(x) || (Xg.add(x), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, g.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, U = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), M !== null || U !== null || F !== null) {
            var se = wt(t) || "Component", Ue = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Jg.has(se) || (Jg.add(se), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, se, Ue, M !== null ? `
  ` + M : "", U !== null ? `
  ` + U : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && QE(e, u, s), g;
    }
    function q1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", qe(e) || "Component"), aS.enqueueReplaceState(t, t.state, null));
    }
    function iC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = qe(e) || "Component";
          qg.has(s) || (qg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        aS.enqueueReplaceState(t, t.state, null);
      }
    }
    function iS(e, t, a, i) {
      G1(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, vg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = nr(s);
      else {
        var f = Rf(e, t, !0);
        u.context = Tf(e, f);
      }
      {
        if (u.state === a) {
          var p = wt(t) || "Component";
          eS.has(p) || (eS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Gt && al.recordLegacyContextWarning(e, u), al.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (rS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (q1(e, u), em(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Ct;
        y |= Qi, (e.mode & Nt) !== Le && (y |= _l), e.flags |= y;
      }
    }
    function X1(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ui;
      if (typeof p == "object" && p !== null)
        v = nr(p);
      else {
        var y = Rf(e, t, !0);
        v = Tf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && iC(e, u, a, v), E0();
      var x = e.memoizedState, M = u.state = x;
      if (em(e, a, u, i), M = e.memoizedState, s === a && x === M && !Uh() && !tm()) {
        if (typeof u.componentDidMount == "function") {
          var U = Ct;
          U |= Qi, (e.mode & Nt) !== Le && (U |= _l), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (rS(e, t, g, a), M = e.memoizedState);
      var F = tm() || nC(e, t, s, a, x, M, v);
      if (F) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var se = Ct;
          se |= Qi, (e.mode & Nt) !== Le && (se |= _l), e.flags |= se;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ue = Ct;
          Ue |= Qi, (e.mode & Nt) !== Le && (Ue |= _l), e.flags |= Ue;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, F;
    }
    function K1(e, t, a, i, u) {
      var s = t.stateNode;
      S0(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ul(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = ui;
      if (typeof g == "object" && g !== null)
        b = nr(g);
      else {
        var x = Rf(t, a, !0);
        b = Tf(t, x);
      }
      var M = a.getDerivedStateFromProps, U = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && iC(t, s, i, b), E0();
      var F = t.memoizedState, se = s.state = F;
      if (em(t, i, s, u), se = t.memoizedState, f === v && F === se && !Uh() && !tm() && !Te)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Wn), !1;
      typeof M == "function" && (rS(t, a, M, i), se = t.memoizedState);
      var Ue = tm() || nC(t, a, p, i, F, se, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Te;
      return Ue ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, se, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, se, b)), typeof s.componentDidUpdate == "function" && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Wn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Wn), t.memoizedProps = i, t.memoizedState = se), s.props = i, s.state = se, s.context = b, Ue;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: Vi(t),
        digest: null
      };
    }
    function lS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function J1(e, t) {
      return !0;
    }
    function uS(e, t) {
      try {
        var a = J1(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === te)
            return;
          console.error(i);
        }
        var p = u ? qe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === J)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = qe(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (x) {
        setTimeout(function() {
          throw x;
        });
      }
    }
    var Z1 = typeof WeakMap == "function" ? WeakMap : Map;
    function lC(e, t, a) {
      var i = Pu(Kt, a);
      i.tag = dg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Yb(u), uS(e, t);
      }, i;
    }
    function oS(e, t, a) {
      var i = Pu(Kt, a);
      i.tag = dg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          yR(e), uS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        yR(e), uS(e, t), typeof u != "function" && Ib(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ea(e.lanes, Be) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", qe(e) || "Unknown"));
      }), i;
    }
    function uC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Z1(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Wb.bind(null, e, t, a);
        Jr && Wp(e, a), t.then(s, s);
      }
    }
    function ew(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function tw(e, t) {
      var a = e.tag;
      if ((e.mode & vt) === Le && (a === ne || a === Ae || a === Ie)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function oC(e) {
      var t = e;
      do {
        if (t.tag === Ce && U1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function sC(e, t, a, i, u) {
      if ((e.mode & vt) === Le) {
        if (e === t)
          e.flags |= Jn;
        else {
          if (e.flags |= _e, a.flags |= xc, a.flags &= -52805, a.tag === te) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ht;
            else {
              var f = Pu(Kt, Be);
              f.tag = Xh, zo(a, f, Be);
            }
          }
          a.lanes = nt(a.lanes, Be);
        }
        return e;
      }
      return e.flags |= Jn, e.lanes = u, e;
    }
    function nw(e, t, a, i, u) {
      if (a.flags |= os, Jr && Wp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        tw(a), jr() && a.mode & vt && e0();
        var f = oC(t);
        if (f !== null) {
          f.flags &= ~Rr, sC(f, t, a, e, u), f.mode & vt && uC(e, s, u), ew(f, e, s);
          return;
        } else {
          if (!Hv(u)) {
            uC(e, s, u), VS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & vt) {
        e0();
        var v = oC(t);
        if (v !== null) {
          (v.flags & Jn) === Oe && (v.flags |= Rr), sC(v, t, a, e, u), eg(Zs(i, a));
          return;
        }
      }
      i = Zs(i, a), Ub(i);
      var y = t;
      do {
        switch (y.tag) {
          case J: {
            var g = i;
            y.flags |= Jn;
            var b = Ts(u);
            y.lanes = nt(y.lanes, b);
            var x = lC(y, g, b);
            hg(y, x);
            return;
          }
          case te:
            var M = i, U = y.type, F = y.stateNode;
            if ((y.flags & _e) === Oe && (typeof U.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !oR(F))) {
              y.flags |= Jn;
              var se = Ts(u);
              y.lanes = nt(y.lanes, se);
              var Ue = oS(y, M, se);
              hg(y, Ue);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function rw() {
      return null;
    }
    var Op = A.ReactCurrentOwner, ol = !1, sS, Lp, cS, fS, dS, ec, pS, wm, Mp;
    sS = {}, Lp = {}, cS = {}, fS = {}, dS = {}, ec = !1, pS = {}, wm = {}, Mp = {};
    function Sa(e, t, a, i) {
      e === null ? t.child = d0(t, null, a, i) : t.child = _f(t, e.child, a, i);
    }
    function aw(e, t, a, i) {
      t.child = _f(t, e.child, null, i), t.child = _f(t, null, a, i);
    }
    function cC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Df(t, u), ha(t);
      {
        if (Op.current = t, Yn(!0), v = Uf(e, t, f, i, p, u), y = Af(), t.mode & Gt) {
          gn(!0);
          try {
            v = Uf(e, t, f, i, p, u), y = Af();
          } finally {
            gn(!1);
          }
        }
        Yn(!1);
      }
      return ma(), e !== null && !ol ? (b0(e, t, u), Vu(e, t, u)) : (jr() && y && Gy(t), t.flags |= ni, Sa(e, t, v, u), t.child);
    }
    function fC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (s_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = $f(s), t.tag = Ie, t.type = f, mS(t, s), dC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && nl(
            p,
            i,
            // Resolved props
            "prop",
            wt(s)
          ), a.defaultProps !== void 0) {
            var v = wt(s) || "Unknown";
            Mp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Mp[v] = !0);
          }
        }
        var y = JS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, b = g.propTypes;
        b && nl(
          b,
          i,
          // Resolved props
          "prop",
          wt(g)
        );
      }
      var x = e.child, M = RS(e, u);
      if (!M) {
        var U = x.memoizedProps, F = a.compare;
        if (F = F !== null ? F : ge, F(U, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ni;
      var se = ic(x, i);
      return se.ref = t.ref, se.return = t, t.child = se, se;
    }
    function dC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Xe) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && nl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            wt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (ge(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ol = !1, t.pendingProps = i = g, RS(e, u))
            (e.flags & xc) !== Oe && (ol = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return vS(e, t, a, i, u);
    }
    function pC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ie)
        if ((t.mode & vt) === Le) {
          var f = {
            baseLanes: I,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Fm(t, a);
        } else if (ea(a, Zr)) {
          var b = {
            baseLanes: I,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var x = s !== null ? s.baseLanes : a;
          Fm(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = nt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Zr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Fm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = nt(s.baseLanes, a), t.memoizedState = null) : M = a, Fm(t, M);
      }
      return Sa(e, t, u, a), t.child;
    }
    function iw(e, t, a) {
      var i = t.pendingProps;
      return Sa(e, t, i, a), t.child;
    }
    function lw(e, t, a) {
      var i = t.pendingProps.children;
      return Sa(e, t, i, a), t.child;
    }
    function uw(e, t, a) {
      {
        t.flags |= Ct;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Sa(e, t, s, a), t.child;
    }
    function vC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Cn, t.flags |= ho);
    }
    function vS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f;
      {
        var p = Rf(t, a, !0);
        f = Tf(t, p);
      }
      var v, y;
      Df(t, u), ha(t);
      {
        if (Op.current = t, Yn(!0), v = Uf(e, t, a, i, f, u), y = Af(), t.mode & Gt) {
          gn(!0);
          try {
            v = Uf(e, t, a, i, f, u), y = Af();
          } finally {
            gn(!1);
          }
        }
        Yn(!1);
      }
      return ma(), e !== null && !ol ? (b0(e, t, u), Vu(e, t, u)) : (jr() && y && Gy(t), t.flags |= ni, Sa(e, t, v, u), t.child);
    }
    function hC(e, t, a, i, u) {
      {
        switch (x_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= _e, t.flags |= Jn;
            var y = new Error("Simulated error coming from DevTools"), g = Ts(u);
            t.lanes = nt(t.lanes, g);
            var b = oS(t, Zs(y, t), g);
            hg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = a.propTypes;
          x && nl(
            x,
            i,
            // Resolved props
            "prop",
            wt(a)
          );
        }
      }
      var M;
      $l(a) ? (M = !0, jh(t)) : M = !1, Df(t, u);
      var U = t.stateNode, F;
      U === null ? (_m(e, t), aC(t, a, i), iS(t, a, i, u), F = !0) : e === null ? F = X1(t, a, i, u) : F = K1(e, t, a, i, u);
      var se = hS(e, t, a, F, M, u);
      {
        var Ue = t.stateNode;
        F && Ue.props !== i && (ec || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", qe(t) || "a component"), ec = !0);
      }
      return se;
    }
    function hS(e, t, a, i, u, s) {
      vC(e, t);
      var f = (t.flags & _e) !== Oe;
      if (!i && !f)
        return u && XE(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      Op.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, Z0();
      else {
        ha(t);
        {
          if (Yn(!0), v = p.render(), t.mode & Gt) {
            gn(!0);
            try {
              p.render();
            } finally {
              gn(!1);
            }
          }
          Yn(!1);
        }
        ma();
      }
      return t.flags |= ni, e !== null && f ? aw(e, t, v, s) : Sa(e, t, v, s), t.memoizedState = p.state, u && XE(t, a, !0), t.child;
    }
    function mC(e) {
      var t = e.stateNode;
      t.pendingContext ? GE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && GE(e, t.context, !1), mg(e, t.containerInfo);
    }
    function ow(e, t, a) {
      if (mC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      S0(e, t), em(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Rr) {
          var g = Zs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return yC(e, t, p, a, g);
        } else if (p !== s) {
          var b = Zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return yC(e, t, p, a, b);
        } else {
          f1(t);
          var x = d0(t, null, p, a);
          t.child = x;
          for (var M = x; M; )
            M.flags = M.flags & ~yn | qr, M = M.sibling;
        }
      } else {
        if (bf(), p === s)
          return Vu(e, t, a);
        Sa(e, t, p, a);
      }
      return t.child;
    }
    function yC(e, t, a, i, u) {
      return bf(), eg(u), t.flags |= Rr, Sa(e, t, a, i), t.child;
    }
    function sw(e, t, a) {
      T0(t), e === null && Zy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = zy(i, u);
      return p ? f = null : s !== null && zy(i, s) && (t.flags |= Oa), vC(e, t), Sa(e, t, f, a), t.child;
    }
    function cw(e, t) {
      return e === null && Zy(t), null;
    }
    function fw(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = c_(v), g = ul(v, u), b;
      switch (y) {
        case ne:
          return mS(t, v), t.type = v = $f(v), b = vS(null, t, v, g, i), b;
        case te:
          return t.type = v = WS(v), b = hC(null, t, v, g, i), b;
        case Ae:
          return t.type = v = QS(v), b = cC(null, t, v, g, i), b;
        case lt: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && nl(
              x,
              g,
              // Resolved for outer only
              "prop",
              wt(v)
            );
          }
          return b = fC(
            null,
            t,
            v,
            ul(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Xe && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function dw(e, t, a, i, u) {
      _m(e, t), t.tag = te;
      var s;
      return $l(a) ? (s = !0, jh(t)) : s = !1, Df(t, u), aC(t, a, i), iS(t, a, i, u), hS(null, t, a, !0, s, u);
    }
    function pw(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s;
      {
        var f = Rf(t, a, !1);
        s = Tf(t, f);
      }
      Df(t, i);
      var p, v;
      ha(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = wt(a) || "Unknown";
          sS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), sS[y] = !0);
        }
        t.mode & Gt && al.recordLegacyContextWarning(t, null), Yn(!0), Op.current = t, p = Uf(null, t, a, u, s, i), v = Af(), Yn(!1);
      }
      if (ma(), t.flags |= ni, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = wt(a) || "Unknown";
        Lp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Lp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = wt(a) || "Unknown";
          Lp[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Lp[b] = !0);
        }
        t.tag = te, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return $l(a) ? (x = !0, jh(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, vg(t), rC(t, p), iS(t, a, u, i), hS(null, t, a, !0, x, i);
      } else {
        if (t.tag = ne, t.mode & Gt) {
          gn(!0);
          try {
            p = Uf(null, t, a, u, s, i), v = Af();
          } finally {
            gn(!1);
          }
        }
        return jr() && v && Gy(t), Sa(null, t, p, i), mS(t, a), t.child;
      }
    }
    function mS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Or();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), dS[u] || (dS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = wt(t) || "Unknown";
          Mp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Mp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = wt(t) || "Unknown";
          fS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), fS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = wt(t) || "Unknown";
          cS[v] || (S("%s: Function components do not support contextType.", v), cS[v] = !0);
        }
      }
    }
    var yS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Dt
    };
    function gS(e) {
      return {
        baseLanes: e,
        cachePool: rw(),
        transitions: null
      };
    }
    function vw(e, t) {
      var a = null;
      return {
        baseLanes: nt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function hw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Sg(e, Cp);
    }
    function mw(e, t) {
      return xs(e.childLanes, t);
    }
    function gC(e, t, a) {
      var i = t.pendingProps;
      w_(t) && (t.flags |= _e);
      var u = il.current, s = !1, f = (t.flags & _e) !== Oe;
      if (f || hw(u, e) ? (s = !0, t.flags &= ~_e) : (e === null || e.memoizedState !== null) && (u = z1(u, w0)), u = Lf(u), Ao(t, u), e === null) {
        Zy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Cw(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = yw(t, y, g, a), x = t.child;
          return x.memoizedState = gS(a), t.memoizedState = yS, b;
        } else
          return SS(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var U = M.dehydrated;
          if (U !== null)
            return Rw(e, t, f, i, U, M, a);
        }
        if (s) {
          var F = i.fallback, se = i.children, Ue = Sw(e, t, se, F, a), we = t.child, xt = e.child.memoizedState;
          return we.memoizedState = xt === null ? gS(a) : vw(xt, a), we.childLanes = mw(e, a), t.memoizedState = yS, Ue;
        } else {
          var St = i.children, D = gw(e, t, St, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function SS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = ES(u, i);
      return s.return = e, e.child = s, s;
    }
    function yw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & vt) === Le && s !== null ? (p = s, p.childLanes = I, p.pendingProps = f, e.mode & Mt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = $o(a, u, i, null)) : (p = ES(f, u), v = $o(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function ES(e, t, a) {
      return SR(e, t, I, null);
    }
    function SC(e, t) {
      return ic(e, t);
    }
    function gw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = SC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & vt) === Le && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Da) : p.push(s);
      }
      return t.child = f, f;
    }
    function Sw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & vt) === Le && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = I, y.pendingProps = v, t.mode & Mt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = SC(f, v), y.subtreeFlags = f.subtreeFlags & Un;
      var b;
      return p !== null ? b = ic(p, i) : (b = $o(i, s, u, null), b.flags |= yn), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function bm(e, t, a, i) {
      i !== null && eg(i), _f(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = SS(t, s);
      return f.flags |= yn, t.memoizedState = null, f;
    }
    function Ew(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = ES(f, s), v = $o(i, s, u, null);
      return v.flags |= yn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & vt) !== Le && _f(t, e.child, null, u), v;
    }
    function Cw(e, t, a) {
      return (e.mode & vt) === Le ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Be) : Fy(t) ? e.lanes = Tr : e.lanes = Zr, null;
    }
    function Rw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rr) {
          t.flags &= ~Rr;
          var D = lS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return bm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= _e, null;
          var H = i.children, O = i.fallback, K = Ew(e, t, H, O, f), pe = t.child;
          return pe.memoizedState = gS(f), t.memoizedState = yS, K;
        }
      else {
        if (s1(), (t.mode & vt) === Le)
          return bm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Fy(u)) {
          var p, v, y;
          {
            var g = bx(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = lS(b, p, y);
          return bm(e, t, f, x);
        }
        var M = ea(f, e.childLanes);
        if (ol || M) {
          var U = jm();
          if (U !== null) {
            var F = Ud(U, f);
            if (F !== Dt && F !== s.retryLane) {
              s.retryLane = F;
              var se = Kt;
              Ha(e, F), gr(U, e, F, se);
            }
          }
          VS();
          var Ue = lS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return bm(e, t, f, Ue);
        } else if (BE(u)) {
          t.flags |= _e, t.child = e.child;
          var we = Qb.bind(null, e);
          return _x(u, we), null;
        } else {
          d1(t, u, s.treeContext);
          var xt = i.children, St = SS(t, xt);
          return St.flags |= qr, St;
        }
      }
    }
    function EC(e, t, a) {
      e.lanes = nt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = nt(i.lanes, t)), cg(e.return, t, a);
    }
    function Tw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ce) {
          var u = i.memoizedState;
          u !== null && EC(i, a, e);
        } else if (i.tag === on)
          EC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function xw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && am(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function ww(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !pS[e])
        if (pS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function bw(e, t) {
      e !== void 0 && !wm[e] && (e !== "collapsed" && e !== "hidden" ? (wm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (wm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function CC(e, t) {
      {
        var a = ct(e), i = !a && typeof tt(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function _w(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (ct(e)) {
          for (var a = 0; a < e.length; a++)
            if (!CC(e[a], a))
              return;
        } else {
          var i = tt(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!CC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function CS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function RC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      ww(u), bw(s, u), _w(f, u), Sa(e, t, f, a);
      var p = il.current, v = Sg(p, Cp);
      if (v)
        p = Eg(p, Cp), t.flags |= _e;
      else {
        var y = e !== null && (e.flags & _e) !== Oe;
        y && Tw(t, t.child, a), p = Lf(p);
      }
      if (Ao(t, p), (t.mode & vt) === Le)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = xw(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), CS(
              t,
              !1,
              // isBackwards
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var x = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var U = M.alternate;
              if (U !== null && am(U) === null) {
                t.child = M;
                break;
              }
              var F = M.sibling;
              M.sibling = x, x = M, M = F;
            }
            CS(
              t,
              !0,
              // isBackwards
              x,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            CS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function kw(e, t, a) {
      mg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = _f(t, null, i, a) : Sa(e, t, i, a), t.child;
    }
    var TC = !1;
    function Dw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || TC || (TC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && nl(v, s, "prop", "Context.Provider");
      }
      if (h0(t, u, p), f !== null) {
        var y = f.value;
        if (W(y, p)) {
          if (f.children === s.children && !Uh())
            return Vu(e, t, a);
        } else
          w1(t, u, a);
      }
      var g = s.children;
      return Sa(e, t, g, a), t.child;
    }
    var xC = !1;
    function Ow(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (xC || (xC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Df(t, a);
      var f = nr(i);
      ha(t);
      var p;
      return Op.current = t, Yn(!0), p = s(f), Yn(!1), ma(), t.flags |= ni, Sa(e, t, p, a), t.child;
    }
    function Np() {
      ol = !0;
    }
    function _m(e, t) {
      (t.mode & vt) === Le && e !== null && (e.alternate = null, t.alternate = null, t.flags |= yn);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Z0(), Yp(t.lanes), ea(a, t.childLanes) ? (T1(e, t), t.child) : null;
    }
    function Lw(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Da) : s.push(e), a.flags |= yn, a;
      }
    }
    function RS(e, t) {
      var a = e.lanes;
      return !!ea(a, t);
    }
    function Mw(e, t, a) {
      switch (t.tag) {
        case J:
          mC(t), t.stateNode, bf();
          break;
        case q:
          T0(t);
          break;
        case te: {
          var i = t.type;
          $l(i) && jh(t);
          break;
        }
        case me:
          mg(t, t.stateNode.containerInfo);
          break;
        case it: {
          var u = t.memoizedProps.value, s = t.type._context;
          h0(t, s, u);
          break;
        }
        case ht:
          {
            var f = ea(a, t.childLanes);
            f && (t.flags |= Ct);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ce: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ao(t, Lf(il.current)), t.flags |= _e, null;
            var y = t.child, g = y.childLanes;
            if (ea(a, g))
              return gC(e, t, a);
            Ao(t, Lf(il.current));
            var b = Vu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Ao(t, Lf(il.current));
          break;
        }
        case on: {
          var x = (e.flags & _e) !== Oe, M = ea(a, t.childLanes);
          if (x) {
            if (M)
              return RC(e, t, a);
            t.flags |= _e;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), Ao(t, il.current), M)
            break;
          return null;
        }
        case Ne:
        case jt:
          return t.lanes = I, pC(e, t, a);
      }
      return Vu(e, t, a);
    }
    function wC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Lw(e, t, JS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Uh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ol = !0;
        else {
          var s = RS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & _e) === Oe)
            return ol = !1, Mw(e, t, a);
          (e.flags & xc) !== Oe ? ol = !0 : ol = !1;
        }
      } else if (ol = !1, jr() && r1(t)) {
        var f = t.index, p = a1();
        ZE(t, p, f);
      }
      switch (t.lanes = I, t.tag) {
        case ke:
          return pw(e, t, t.type, a);
        case un: {
          var v = t.elementType;
          return fw(e, t, v, a);
        }
        case ne: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : ul(y, g);
          return vS(e, t, y, b, a);
        }
        case te: {
          var x = t.type, M = t.pendingProps, U = t.elementType === x ? M : ul(x, M);
          return hC(e, t, x, U, a);
        }
        case J:
          return ow(e, t, a);
        case q:
          return sw(e, t, a);
        case De:
          return cw(e, t);
        case Ce:
          return gC(e, t, a);
        case me:
          return kw(e, t, a);
        case Ae: {
          var F = t.type, se = t.pendingProps, Ue = t.elementType === F ? se : ul(F, se);
          return cC(e, t, F, Ue, a);
        }
        case We:
          return iw(e, t, a);
        case Me:
          return lw(e, t, a);
        case ht:
          return uw(e, t, a);
        case it:
          return Dw(e, t, a);
        case Zt:
          return Ow(e, t, a);
        case lt: {
          var we = t.type, xt = t.pendingProps, St = ul(we, xt);
          if (t.type !== t.elementType) {
            var D = we.propTypes;
            D && nl(
              D,
              St,
              // Resolved for outer only
              "prop",
              wt(we)
            );
          }
          return St = ul(we.type, St), fC(e, t, we, St, a);
        }
        case Ie:
          return dC(e, t, t.type, t.pendingProps, a);
        case Ht: {
          var H = t.type, O = t.pendingProps, K = t.elementType === H ? O : ul(H, O);
          return dw(e, t, H, K, a);
        }
        case on:
          return RC(e, t, a);
        case _t:
          break;
        case Ne:
          return pC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jf(e) {
      e.flags |= Ct;
    }
    function bC(e) {
      e.flags |= Cn, e.flags |= ho;
    }
    var _C, TS, kC, DC;
    _C = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === q || u.tag === De)
          ex(e, u.stateNode);
        else if (u.tag !== me) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, TS = function(e, t) {
    }, kC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = yg(), v = nx(f, a, s, i, u, p);
        t.updateQueue = v, v && jf(t);
      }
    }, DC = function(e, t, a, i) {
      a !== i && jf(t);
    };
    function zp(e, t) {
      if (!jr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Hr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = I, i = Oe;
      if (t) {
        if ((e.mode & Mt) !== Le) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = nt(a, nt(y.lanes, y.childLanes)), i |= y.subtreeFlags & Un, i |= y.flags & Un, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = nt(a, nt(g.lanes, g.childLanes)), i |= g.subtreeFlags & Un, i |= g.flags & Un, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Mt) !== Le) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = nt(a, nt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = nt(a, nt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Nw(e, t, a) {
      if (y1() && (t.mode & vt) !== Le && (t.flags & _e) === Oe)
        return l0(t), bf(), t.flags |= Rr | os | Jn, !1;
      var i = Bh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (h1(t), Hr(t), (t.mode & Mt) !== Le) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (bf(), (t.flags & _e) === Oe && (t.memoizedState = null), t.flags |= Ct, Hr(t), (t.mode & Mt) !== Le) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return u0(), !0;
    }
    function OC(e, t, a) {
      var i = t.pendingProps;
      switch (qy(t), t.tag) {
        case ke:
        case un:
        case Ie:
        case ne:
        case Ae:
        case We:
        case Me:
        case ht:
        case Zt:
        case lt:
          return Hr(t), null;
        case te: {
          var u = t.type;
          return $l(u) && Ah(t), Hr(t), null;
        }
        case J: {
          var s = t.stateNode;
          if (Of(t), Yy(t), Rg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Bh(t);
            if (f)
              jf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rr) !== Oe) && (t.flags |= Wn, u0());
            }
          }
          return TS(e, t), Hr(t), null;
        }
        case q: {
          gg(t);
          var v = R0(), y = t.type;
          if (e !== null && t.stateNode != null)
            kC(e, t, y, i, v), e.ref !== t.ref && bC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var g = yg(), b = Bh(t);
            if (b)
              p1(t, v, g) && jf(t);
            else {
              var x = ZT(y, i, v, g, t);
              _C(x, t, !1, !1), t.stateNode = x, tx(x, y, i, v) && jf(t);
            }
            t.ref !== null && bC(t);
          }
          return Hr(t), null;
        }
        case De: {
          var M = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            DC(e, t, U, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = R0(), se = yg(), Ue = Bh(t);
            Ue ? v1(t) && jf(t) : t.stateNode = rx(M, F, se, t);
          }
          return Hr(t), null;
        }
        case Ce: {
          Mf(t);
          var we = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var xt = Nw(e, t, we);
            if (!xt)
              return t.flags & Jn ? t : null;
          }
          if ((t.flags & _e) !== Oe)
            return t.lanes = a, (t.mode & Mt) !== Le && Qg(t), t;
          var St = we !== null, D = e !== null && e.memoizedState !== null;
          if (St !== D && St) {
            var H = t.child;
            if (H.flags |= zn, (t.mode & vt) !== Le) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || Sg(il.current, w0) ? zb() : VS();
            }
          }
          var K = t.updateQueue;
          if (K !== null && (t.flags |= Ct), Hr(t), (t.mode & Mt) !== Le && St) {
            var pe = t.child;
            pe !== null && (t.treeBaseDuration -= pe.treeBaseDuration);
          }
          return null;
        }
        case me:
          return Of(t), TS(e, t), e === null && Xx(t.stateNode.containerInfo), Hr(t), null;
        case it:
          var ce = t.type._context;
          return sg(ce, t), Hr(t), null;
        case Ht: {
          var Ye = t.type;
          return $l(Ye) && Ah(t), Hr(t), null;
        }
        case on: {
          Mf(t);
          var Je = t.memoizedState;
          if (Je === null)
            return Hr(t), null;
          var Xt = (t.flags & _e) !== Oe, Ut = Je.rendering;
          if (Ut === null)
            if (Xt)
              zp(Je, !1);
            else {
              var qn = Ab() && (e === null || (e.flags & _e) === Oe);
              if (!qn)
                for (var At = t.child; At !== null; ) {
                  var Vn = am(At);
                  if (Vn !== null) {
                    Xt = !0, t.flags |= _e, zp(Je, !1);
                    var ua = Vn.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= Ct), t.subtreeFlags = Oe, x1(t, a), Ao(t, Eg(il.current, Cp)), t.child;
                  }
                  At = At.sibling;
                }
              Je.tail !== null && Qn() > KC() && (t.flags |= _e, Xt = !0, zp(Je, !1), t.lanes = bd);
            }
          else {
            if (!Xt) {
              var $r = am(Ut);
              if ($r !== null) {
                t.flags |= _e, Xt = !0;
                var si = $r.updateQueue;
                if (si !== null && (t.updateQueue = si, t.flags |= Ct), zp(Je, !0), Je.tail === null && Je.tailMode === "hidden" && !Ut.alternate && !jr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Qn() * 2 - Je.renderingStartTime > KC() && a !== Zr && (t.flags |= _e, Xt = !0, zp(Je, !1), t.lanes = bd);
            }
            if (Je.isBackwards)
              Ut.sibling = t.child, t.child = Ut;
            else {
              var Ra = Je.last;
              Ra !== null ? Ra.sibling = Ut : t.child = Ut, Je.last = Ut;
            }
          }
          if (Je.tail !== null) {
            var Ta = Je.tail;
            Je.rendering = Ta, Je.tail = Ta.sibling, Je.renderingStartTime = Qn(), Ta.sibling = null;
            var oa = il.current;
            return Xt ? oa = Eg(oa, Cp) : oa = Lf(oa), Ao(t, oa), Ta;
          }
          return Hr(t), null;
        }
        case _t:
          break;
        case Ne:
        case jt: {
          PS(t);
          var Wu = t.memoizedState, Yf = Wu !== null;
          if (e !== null) {
            var Xp = e.memoizedState, Jl = Xp !== null;
            Jl !== Yf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ie && (t.flags |= zn);
          }
          return !Yf || (t.mode & vt) === Le ? Hr(t) : ea(Kl, Zr) && (Hr(t), t.subtreeFlags & (yn | Ct) && (t.flags |= zn)), null;
        }
        case kt:
          return null;
        case Ot:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function zw(e, t, a) {
      switch (qy(t), t.tag) {
        case te: {
          var i = t.type;
          $l(i) && Ah(t);
          var u = t.flags;
          return u & Jn ? (t.flags = u & ~Jn | _e, (t.mode & Mt) !== Le && Qg(t), t) : null;
        }
        case J: {
          t.stateNode, Of(t), Yy(t), Rg();
          var s = t.flags;
          return (s & Jn) !== Oe && (s & _e) === Oe ? (t.flags = s & ~Jn | _e, t) : null;
        }
        case q:
          return gg(t), null;
        case Ce: {
          Mf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            bf();
          }
          var p = t.flags;
          return p & Jn ? (t.flags = p & ~Jn | _e, (t.mode & Mt) !== Le && Qg(t), t) : null;
        }
        case on:
          return Mf(t), null;
        case me:
          return Of(t), null;
        case it:
          var v = t.type._context;
          return sg(v, t), null;
        case Ne:
        case jt:
          return PS(t), null;
        case kt:
          return null;
        default:
          return null;
      }
    }
    function LC(e, t, a) {
      switch (qy(t), t.tag) {
        case te: {
          var i = t.type.childContextTypes;
          i != null && Ah(t);
          break;
        }
        case J: {
          t.stateNode, Of(t), Yy(t), Rg();
          break;
        }
        case q: {
          gg(t);
          break;
        }
        case me:
          Of(t);
          break;
        case Ce:
          Mf(t);
          break;
        case on:
          Mf(t);
          break;
        case it:
          var u = t.type._context;
          sg(u, t);
          break;
        case Ne:
        case jt:
          PS(t);
          break;
      }
    }
    var MC = null;
    MC = /* @__PURE__ */ new Set();
    var km = !1, Pr = !1, Uw = typeof WeakSet == "function" ? WeakSet : Set, Se = null, Ff = null, Hf = null;
    function Aw(e) {
      bl(null, function() {
        throw e;
      }), us();
    }
    var jw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Mt)
        try {
          ql(), t.componentWillUnmount();
        } finally {
          Gl(e);
        }
      else
        t.componentWillUnmount();
    };
    function NC(e, t) {
      try {
        Ho(dr, e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function xS(e, t, a) {
      try {
        jw(e, a);
      } catch (i) {
        dn(e, t, i);
      }
    }
    function Fw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        dn(e, t, i);
      }
    }
    function zC(e, t) {
      try {
        AC(e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function Pf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ve && ft && e.mode & Mt)
              try {
                ql(), i = a(null);
              } finally {
                Gl(e);
              }
            else
              i = a(null);
          } catch (u) {
            dn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", qe(e));
        } else
          a.current = null;
    }
    function Dm(e, t, a) {
      try {
        a();
      } catch (i) {
        dn(e, t, i);
      }
    }
    var UC = !1;
    function Hw(e, t) {
      KT(e.containerInfo), Se = t, Pw();
      var a = UC;
      return UC = !1, a;
    }
    function Pw() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        (e.subtreeFlags & kl) !== Oe && t !== null ? (t.return = e, Se = t) : Vw();
      }
    }
    function Vw() {
      for (; Se !== null; ) {
        var e = Se;
        Yt(e);
        try {
          Bw(e);
        } catch (a) {
          dn(e, e.return, a);
        }
        fn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function Bw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Wn) !== Oe) {
        switch (Yt(e), e.tag) {
          case ne:
          case Ae:
          case Ie:
            break;
          case te: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ec && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ul(e.type, i), u);
              {
                var p = MC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", qe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case J: {
            {
              var v = e.stateNode;
              Rx(v.containerInfo);
            }
            break;
          }
          case q:
          case De:
          case me:
          case Ht:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        fn();
      }
    }
    function sl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== Pa ? Xi(t) : (e & dr) !== Pa && cs(t), (e & Yl) !== Pa && Qp(!0), Dm(t, a, p), (e & Yl) !== Pa && Qp(!1), (e & Fr) !== Pa ? Ml() : (e & dr) !== Pa && xd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ho(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Fr) !== Pa ? Td(t) : (e & dr) !== Pa && Oc(t);
            var f = s.create;
            (e & Yl) !== Pa && Qp(!0), s.destroy = f(), (e & Yl) !== Pa && Qp(!1), (e & Fr) !== Pa ? zv() : (e & dr) !== Pa && Uv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & dr) !== Oe ? v = "useLayoutEffect" : (s.tag & Yl) !== Oe ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Iw(e, t) {
      if ((t.flags & Ct) !== Oe)
        switch (t.tag) {
          case ht: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = K0(), p = t.alternate === null ? "mount" : "update";
            X0() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case J:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case ht:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function $w(e, t, a, i) {
      if ((a.flags & Ol) !== Oe)
        switch (a.tag) {
          case ne:
          case Ae:
          case Ie: {
            if (!Pr)
              if (a.mode & Mt)
                try {
                  ql(), Ho(dr | fr, a);
                } finally {
                  Gl(a);
                }
              else
                Ho(dr | fr, a);
            break;
          }
          case te: {
            var u = a.stateNode;
            if (a.flags & Ct && !Pr)
              if (t === null)
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), a.mode & Mt)
                  try {
                    ql(), u.componentDidMount();
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ul(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), a.mode & Mt)
                  try {
                    ql(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", qe(a) || "instance")), C0(a, p, u));
            break;
          }
          case J: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case q:
                    y = a.child.stateNode;
                    break;
                  case te:
                    y = a.child.stateNode;
                    break;
                }
              C0(a, v, y);
            }
            break;
          }
          case q: {
            var g = a.stateNode;
            if (t === null && a.flags & Ct) {
              var b = a.type, x = a.memoizedProps;
              ox(g, b, x);
            }
            break;
          }
          case De:
            break;
          case me:
            break;
          case ht: {
            {
              var M = a.memoizedProps, U = M.onCommit, F = M.onRender, se = a.stateNode.effectDuration, Ue = K0(), we = t === null ? "mount" : "update";
              X0() && (we = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, we, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ue);
              {
                typeof U == "function" && U(a.memoizedProps.id, we, se, Ue), Vb(a);
                var xt = a.return;
                e: for (; xt !== null; ) {
                  switch (xt.tag) {
                    case J:
                      var St = xt.stateNode;
                      St.effectDuration += se;
                      break e;
                    case ht:
                      var D = xt.stateNode;
                      D.effectDuration += se;
                      break e;
                  }
                  xt = xt.return;
                }
              }
            }
            break;
          }
          case Ce: {
            Jw(e, a);
            break;
          }
          case on:
          case Ht:
          case _t:
          case Ne:
          case jt:
          case Ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & Cn && AC(a);
    }
    function Yw(e) {
      switch (e.tag) {
        case ne:
        case Ae:
        case Ie: {
          if (e.mode & Mt)
            try {
              ql(), NC(e, e.return);
            } finally {
              Gl(e);
            }
          else
            NC(e, e.return);
          break;
        }
        case te: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Fw(e, e.return, t), zC(e, e.return);
          break;
        }
        case q: {
          zC(e, e.return);
          break;
        }
      }
    }
    function Ww(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === q) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? gx(u) : Ex(i.stateNode, i.memoizedProps);
            } catch (f) {
              dn(e, e.return, f);
            }
          }
        } else if (i.tag === De) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Sx(s) : Cx(s, i.memoizedProps);
            } catch (f) {
              dn(e, e.return, f);
            }
        } else if (!((i.tag === Ne || i.tag === jt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function AC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case q:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Mt)
            try {
              ql(), u = t(i);
            } finally {
              Gl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", qe(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", qe(e)), t.current = i;
      }
    }
    function Qw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function jC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, jC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === q) {
          var a = e.stateNode;
          a !== null && Zx(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Gw(e) {
      for (var t = e.return; t !== null; ) {
        if (FC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function FC(e) {
      return e.tag === q || e.tag === J || e.tag === me;
    }
    function HC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || FC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== q && t.tag !== De && t.tag !== en; ) {
          if (t.flags & yn || t.child === null || t.tag === me)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & yn))
          return t.stateNode;
      }
    }
    function qw(e) {
      var t = Gw(e);
      switch (t.tag) {
        case q: {
          var a = t.stateNode;
          t.flags & Oa && (VE(a), t.flags &= ~Oa);
          var i = HC(e);
          bS(e, i, a);
          break;
        }
        case J:
        case me: {
          var u = t.stateNode.containerInfo, s = HC(e);
          wS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === q || i === De;
      if (u) {
        var s = e.stateNode;
        t ? vx(a, s, t) : dx(a, s);
      } else if (i !== me) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === q || i === De;
      if (u) {
        var s = e.stateNode;
        t ? px(a, s, t) : fx(a, s);
      } else if (i !== me) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, cl = !1;
    function Xw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case q: {
              Vr = i.stateNode, cl = !1;
              break e;
            }
            case J: {
              Vr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
            case me: {
              Vr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        PC(e, t, a), Vr = null, cl = !1;
      }
      Qw(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        PC(e, t, i), i = i.sibling;
    }
    function PC(e, t, a) {
      switch (Ed(a), a.tag) {
        case q:
          Pr || Pf(a, t);
        case De: {
          {
            var i = Vr, u = cl;
            Vr = null, Po(e, t, a), Vr = i, cl = u, Vr !== null && (cl ? mx(Vr, a.stateNode) : hx(Vr, a.stateNode));
          }
          return;
        }
        case en: {
          Vr !== null && (cl ? yx(Vr, a.stateNode) : jy(Vr, a.stateNode));
          return;
        }
        case me: {
          {
            var s = Vr, f = cl;
            Vr = a.stateNode.containerInfo, cl = !0, Po(e, t, a), Vr = s, cl = f;
          }
          return;
        }
        case ne:
        case Ae:
        case lt:
        case Ie: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, x = b.destroy, M = b.tag;
                  x !== void 0 && ((M & Yl) !== Pa ? Dm(a, t, x) : (M & dr) !== Pa && (cs(a), a.mode & Mt ? (ql(), Dm(a, t, x), Gl(a)) : Dm(a, t, x), xd())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case te: {
          if (!Pr) {
            Pf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && xS(a, t, U);
          }
          Po(e, t, a);
          return;
        }
        case _t: {
          Po(e, t, a);
          return;
        }
        case Ne: {
          if (
            // TODO: Remove this dead flag
            a.mode & vt
          ) {
            var F = Pr;
            Pr = F || a.memoizedState !== null, Po(e, t, a), Pr = F;
          } else
            Po(e, t, a);
          break;
        }
        default: {
          Po(e, t, a);
          return;
        }
      }
    }
    function Kw(e) {
      e.memoizedState;
    }
    function Jw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && Ax(s);
          }
        }
      }
    }
    function VC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Uw()), t.forEach(function(i) {
          var u = Gb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Jr)
              if (Ff !== null && Hf !== null)
                Wp(Hf, Ff);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Zw(e, t, a) {
      Ff = a, Hf = e, Yt(t), BC(t, e), Yt(t), Ff = null, Hf = null;
    }
    function fl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Xw(e, t, s);
          } catch (v) {
            dn(s, t, v);
          }
        }
      var f = Sl();
      if (t.subtreeFlags & Dl)
        for (var p = t.child; p !== null; )
          Yt(p), BC(p, e), p = p.sibling;
      Yt(f);
    }
    function BC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ne:
        case Ae:
        case lt:
        case Ie: {
          if (fl(t, e), Xl(e), u & Ct) {
            try {
              sl(Yl | fr, e, e.return), Ho(Yl | fr, e);
            } catch (Ye) {
              dn(e, e.return, Ye);
            }
            if (e.mode & Mt) {
              try {
                ql(), sl(dr | fr, e, e.return);
              } catch (Ye) {
                dn(e, e.return, Ye);
              }
              Gl(e);
            } else
              try {
                sl(dr | fr, e, e.return);
              } catch (Ye) {
                dn(e, e.return, Ye);
              }
          }
          return;
        }
        case te: {
          fl(t, e), Xl(e), u & Cn && i !== null && Pf(i, i.return);
          return;
        }
        case q: {
          fl(t, e), Xl(e), u & Cn && i !== null && Pf(i, i.return);
          {
            if (e.flags & Oa) {
              var s = e.stateNode;
              try {
                VE(s);
              } catch (Ye) {
                dn(e, e.return, Ye);
              }
            }
            if (u & Ct) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    sx(f, g, y, v, p, e);
                  } catch (Ye) {
                    dn(e, e.return, Ye);
                  }
              }
            }
          }
          return;
        }
        case De: {
          if (fl(t, e), Xl(e), u & Ct) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, x = e.memoizedProps, M = i !== null ? i.memoizedProps : x;
            try {
              cx(b, M, x);
            } catch (Ye) {
              dn(e, e.return, Ye);
            }
          }
          return;
        }
        case J: {
          if (fl(t, e), Xl(e), u & Ct && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                Ux(t.containerInfo);
              } catch (Ye) {
                dn(e, e.return, Ye);
              }
          }
          return;
        }
        case me: {
          fl(t, e), Xl(e);
          return;
        }
        case Ce: {
          fl(t, e), Xl(e);
          var F = e.child;
          if (F.flags & zn) {
            var se = F.stateNode, Ue = F.memoizedState, we = Ue !== null;
            if (se.isHidden = we, we) {
              var xt = F.alternate !== null && F.alternate.memoizedState !== null;
              xt || Nb();
            }
          }
          if (u & Ct) {
            try {
              Kw(e);
            } catch (Ye) {
              dn(e, e.return, Ye);
            }
            VC(e);
          }
          return;
        }
        case Ne: {
          var St = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & vt
          ) {
            var D = Pr;
            Pr = D || St, fl(t, e), Pr = D;
          } else
            fl(t, e);
          if (Xl(e), u & zn) {
            var H = e.stateNode, O = e.memoizedState, K = O !== null, pe = e;
            if (H.isHidden = K, K && !St && (pe.mode & vt) !== Le) {
              Se = pe;
              for (var ce = pe.child; ce !== null; )
                Se = ce, tb(ce), ce = ce.sibling;
            }
            Ww(pe, K);
          }
          return;
        }
        case on: {
          fl(t, e), Xl(e), u & Ct && VC(e);
          return;
        }
        case _t:
          return;
        default: {
          fl(t, e), Xl(e);
          return;
        }
      }
    }
    function Xl(e) {
      var t = e.flags;
      if (t & yn) {
        try {
          qw(e);
        } catch (a) {
          dn(e, e.return, a);
        }
        e.flags &= ~yn;
      }
      t & qr && (e.flags &= ~qr);
    }
    function eb(e, t, a) {
      Ff = a, Hf = t, Se = e, IC(e, t, a), Ff = null, Hf = null;
    }
    function IC(e, t, a) {
      for (var i = (e.mode & vt) !== Le; Se !== null; ) {
        var u = Se, s = u.child;
        if (u.tag === Ne && i) {
          var f = u.memoizedState !== null, p = f || km;
          if (p) {
            _S(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Pr, b = km, x = Pr;
            km = p, Pr = g, Pr && !x && (Se = u, nb(u));
            for (var M = s; M !== null; )
              Se = M, IC(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            Se = u, km = b, Pr = x, _S(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Ol) !== Oe && s !== null ? (s.return = u, Se = s) : _S(e, t, a);
      }
    }
    function _S(e, t, a) {
      for (; Se !== null; ) {
        var i = Se;
        if ((i.flags & Ol) !== Oe) {
          var u = i.alternate;
          Yt(i);
          try {
            $w(t, u, i, a);
          } catch (f) {
            dn(i, i.return, f);
          }
          fn();
        }
        if (i === e) {
          Se = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Se = s;
          return;
        }
        Se = i.return;
      }
    }
    function tb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        switch (t.tag) {
          case ne:
          case Ae:
          case lt:
          case Ie: {
            if (t.mode & Mt)
              try {
                ql(), sl(dr, t, t.return);
              } finally {
                Gl(t);
              }
            else
              sl(dr, t, t.return);
            break;
          }
          case te: {
            Pf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && xS(t, t.return, i);
            break;
          }
          case q: {
            Pf(t, t.return);
            break;
          }
          case Ne: {
            var u = t.memoizedState !== null;
            if (u) {
              $C(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Se = a) : $C(e);
      }
    }
    function $C(e) {
      for (; Se !== null; ) {
        var t = Se;
        if (t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function nb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        if (t.tag === Ne) {
          var i = t.memoizedState !== null;
          if (i) {
            YC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Se = a) : YC(e);
      }
    }
    function YC(e) {
      for (; Se !== null; ) {
        var t = Se;
        Yt(t);
        try {
          Yw(t);
        } catch (i) {
          dn(t, t.return, i);
        }
        if (fn(), t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function rb(e, t, a, i) {
      Se = t, ab(t, e, a, i);
    }
    function ab(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se, s = u.child;
        (u.subtreeFlags & Gi) !== Oe && s !== null ? (s.return = u, Se = s) : ib(e, t, a, i);
      }
    }
    function ib(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se;
        if ((u.flags & Gr) !== Oe) {
          Yt(u);
          try {
            lb(t, u, a, i);
          } catch (f) {
            dn(u, u.return, f);
          }
          fn();
        }
        if (u === e) {
          Se = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Se = s;
          return;
        }
        Se = u.return;
      }
    }
    function lb(e, t, a, i) {
      switch (t.tag) {
        case ne:
        case Ae:
        case Ie: {
          if (t.mode & Mt) {
            Wg();
            try {
              Ho(Fr | fr, t);
            } finally {
              Yg(t);
            }
          } else
            Ho(Fr | fr, t);
          break;
        }
      }
    }
    function ub(e) {
      Se = e, ob();
    }
    function ob() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        if ((Se.flags & Da) !== Oe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Se = u, fb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Se = e;
          }
        }
        (e.subtreeFlags & Gi) !== Oe && t !== null ? (t.return = e, Se = t) : sb();
      }
    }
    function sb() {
      for (; Se !== null; ) {
        var e = Se;
        (e.flags & Gr) !== Oe && (Yt(e), cb(e), fn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function cb(e) {
      switch (e.tag) {
        case ne:
        case Ae:
        case Ie: {
          e.mode & Mt ? (Wg(), sl(Fr | fr, e, e.return), Yg(e)) : sl(Fr | fr, e, e.return);
          break;
        }
      }
    }
    function fb(e, t) {
      for (; Se !== null; ) {
        var a = Se;
        Yt(a), pb(a, t), fn();
        var i = a.child;
        i !== null ? (i.return = a, Se = i) : db(e);
      }
    }
    function db(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.sibling, i = t.return;
        if (jC(t), t === e) {
          Se = null;
          return;
        }
        if (a !== null) {
          a.return = i, Se = a;
          return;
        }
        Se = i;
      }
    }
    function pb(e, t) {
      switch (e.tag) {
        case ne:
        case Ae:
        case Ie: {
          e.mode & Mt ? (Wg(), sl(Fr, e, t), Yg(e)) : sl(Fr, e, t);
          break;
        }
      }
    }
    function vb(e) {
      switch (e.tag) {
        case ne:
        case Ae:
        case Ie: {
          try {
            Ho(dr | fr, e);
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
        case te: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
      }
    }
    function hb(e) {
      switch (e.tag) {
        case ne:
        case Ae:
        case Ie: {
          try {
            Ho(Fr | fr, e);
          } catch (t) {
            dn(e, e.return, t);
          }
          break;
        }
      }
    }
    function mb(e) {
      switch (e.tag) {
        case ne:
        case Ae:
        case Ie: {
          try {
            sl(dr | fr, e, e.return);
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
        case te: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && xS(e, e.return, t);
          break;
        }
      }
    }
    function yb(e) {
      switch (e.tag) {
        case ne:
        case Ae:
        case Ie:
          try {
            sl(Fr | fr, e, e.return);
          } catch (t) {
            dn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Up = Symbol.for;
      Up("selector.component"), Up("selector.has_pseudo_class"), Up("selector.role"), Up("selector.test_id"), Up("selector.text");
    }
    var gb = [];
    function Sb() {
      gb.forEach(function(e) {
        return e();
      });
    }
    var Eb = A.ReactCurrentActQueue;
    function Cb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function WC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Eb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Rb = Math.ceil, kS = A.ReactCurrentDispatcher, DS = A.ReactCurrentOwner, Br = A.ReactCurrentBatchConfig, dl = A.ReactCurrentActQueue, hr = (
      /*             */
      0
    ), QC = (
      /*               */
      1
    ), Ir = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Bu = 0, Ap = 1, tc = 2, Om = 3, jp = 4, GC = 5, OS = 6, Tt = hr, Ea = null, On = null, mr = I, Kl = I, LS = Oo(I), yr = Bu, Fp = null, Lm = I, Hp = I, Mm = I, Pp = null, Va = null, MS = 0, qC = 500, XC = 1 / 0, Tb = 500, Iu = null;
    function Vp() {
      XC = Qn() + Tb;
    }
    function KC() {
      return XC;
    }
    var Nm = !1, NS = null, Vf = null, nc = !1, Vo = null, Bp = I, zS = [], US = null, xb = 50, Ip = 0, AS = null, jS = !1, zm = !1, wb = 50, Bf = 0, Um = null, $p = Kt, Am = I, JC = !1;
    function jm() {
      return Ea;
    }
    function Ca() {
      return (Tt & (Ir | ji)) !== hr ? Qn() : ($p !== Kt || ($p = Qn()), $p);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & vt) === Le)
        return Be;
      if ((Tt & Ir) !== hr && mr !== I)
        return Ts(mr);
      var a = E1() !== S1;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Am === Dt && (Am = Md()), Am;
      }
      var u = Aa();
      if (u !== Dt)
        return u;
      var s = ax();
      return s;
    }
    function bb(e) {
      var t = e.mode;
      return (t & vt) === Le ? Be : Vv();
    }
    function gr(e, t, a, i) {
      Xb(), JC && S("useInsertionEffect must not schedule updates."), jS && (zm = !0), So(e, a, i), (Tt & Ir) !== I && e === Ea ? Zb(t) : (Jr && bs(e, t, a), e_(t), e === Ea && ((Tt & Ir) === hr && (Hp = nt(Hp, a)), yr === jp && Io(e, mr)), Ba(e, i), a === Be && Tt === hr && (t.mode & vt) === Le && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !dl.isBatchingLegacy && (Vp(), JE()));
    }
    function _b(e, t, a) {
      var i = e.current;
      i.lanes = t, So(e, t, a), Ba(e, a);
    }
    function kb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Tt & Ir) !== hr
      );
    }
    function Ba(e, t) {
      var a = e.callbackNode;
      Xc(e, t);
      var i = qc(e, e === Ea ? mr : I);
      if (i === I) {
        a !== null && vR(a), e.callbackNode = null, e.callbackPriority = Dt;
        return;
      }
      var u = Ul(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(dl.current !== null && a !== $S)) {
        a == null && s !== Be && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && vR(a);
      var f;
      if (u === Be)
        e.tag === Lo ? (dl.isBatchingLegacy !== null && (dl.didScheduleLegacyUpdate = !0), n1(tR.bind(null, e))) : KE(tR.bind(null, e)), dl.current !== null ? dl.current.push(Mo) : lx(function() {
          (Tt & (Ir | ji)) === hr && Mo();
        }), f = null;
      else {
        var p;
        switch (Gv(i)) {
          case Mr:
            p = ss;
            break;
          case _i:
            p = Ll;
            break;
          case za:
            p = qi;
            break;
          case Ua:
            p = mu;
            break;
          default:
            p = qi;
            break;
        }
        f = YS(p, ZC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function ZC(e, t) {
      if (W1(), $p = Kt, Am = I, (Tt & (Ir | ji)) !== hr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Yu();
      if (i && e.callbackNode !== a)
        return null;
      var u = qc(e, e === Ea ? mr : I);
      if (u === I)
        return null;
      var s = !Jc(e, u) && !Pv(e, u) && !t, f = s ? Fb(e, u) : Hm(e, u);
      if (f !== Bu) {
        if (f === tc) {
          var p = Kc(e);
          p !== I && (u = p, f = FS(e, p));
        }
        if (f === Ap) {
          var v = Fp;
          throw rc(e, I), Io(e, u), Ba(e, Qn()), v;
        }
        if (f === OS)
          Io(e, u);
        else {
          var y = !Jc(e, u), g = e.current.alternate;
          if (y && !Ob(g)) {
            if (f = Hm(e, u), f === tc) {
              var b = Kc(e);
              b !== I && (u = b, f = FS(e, b));
            }
            if (f === Ap) {
              var x = Fp;
              throw rc(e, I), Io(e, u), Ba(e, Qn()), x;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Db(e, f, u);
        }
      }
      return Ba(e, Qn()), e.callbackNode === a ? ZC.bind(null, e) : null;
    }
    function FS(e, t) {
      var a = Pp;
      if (tf(e)) {
        var i = rc(e, t);
        i.flags |= Rr, qx(e.containerInfo);
      }
      var u = Hm(e, t);
      if (u !== tc) {
        var s = Va;
        Va = a, s !== null && eR(s);
      }
      return u;
    }
    function eR(e) {
      Va === null ? Va = e : Va.push.apply(Va, e);
    }
    function Db(e, t, a) {
      switch (t) {
        case Bu:
        case Ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case tc: {
          ac(e, Va, Iu);
          break;
        }
        case Om: {
          if (Io(e, a), _u(a) && // do not delay if we're inside an act() scope
          !hR()) {
            var i = MS + qC - Qn();
            if (i > 10) {
              var u = qc(e, I);
              if (u !== I)
                break;
              var s = e.suspendedLanes;
              if (!ku(s, a)) {
                Ca(), Zc(e, s);
                break;
              }
              e.timeoutHandle = Uy(ac.bind(null, e, Va, Iu), i);
              break;
            }
          }
          ac(e, Va, Iu);
          break;
        }
        case jp: {
          if (Io(e, a), Od(a))
            break;
          if (!hR()) {
            var f = ai(e, a), p = f, v = Qn() - p, y = qb(v) - v;
            if (y > 10) {
              e.timeoutHandle = Uy(ac.bind(null, e, Va, Iu), y);
              break;
            }
          }
          ac(e, Va, Iu);
          break;
        }
        case GC: {
          ac(e, Va, Iu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Ob(e) {
      for (var t = e; ; ) {
        if (t.flags & vo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!W(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & vo && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Io(e, t) {
      t = xs(t, Mm), t = xs(t, Hp), $v(e, t);
    }
    function tR(e) {
      if (Q1(), (Tt & (Ir | ji)) !== hr)
        throw new Error("Should not already be working.");
      Yu();
      var t = qc(e, I);
      if (!ea(t, Be))
        return Ba(e, Qn()), null;
      var a = Hm(e, t);
      if (e.tag !== Lo && a === tc) {
        var i = Kc(e);
        i !== I && (t = i, a = FS(e, i));
      }
      if (a === Ap) {
        var u = Fp;
        throw rc(e, I), Io(e, t), Ba(e, Qn()), u;
      }
      if (a === OS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ac(e, Va, Iu), Ba(e, Qn()), null;
    }
    function Lb(e, t) {
      t !== I && (ef(e, nt(t, Be)), Ba(e, Qn()), (Tt & (Ir | ji)) === hr && (Vp(), Mo()));
    }
    function HS(e, t) {
      var a = Tt;
      Tt |= QC;
      try {
        return e(t);
      } finally {
        Tt = a, Tt === hr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !dl.isBatchingLegacy && (Vp(), JE());
      }
    }
    function Mb(e, t, a, i, u) {
      var s = Aa(), f = Br.transition;
      try {
        return Br.transition = null, Fn(Mr), e(t, a, i, u);
      } finally {
        Fn(s), Br.transition = f, Tt === hr && Vp();
      }
    }
    function $u(e) {
      Vo !== null && Vo.tag === Lo && (Tt & (Ir | ji)) === hr && Yu();
      var t = Tt;
      Tt |= QC;
      var a = Br.transition, i = Aa();
      try {
        return Br.transition = null, Fn(Mr), e ? e() : void 0;
      } finally {
        Fn(i), Br.transition = a, Tt = t, (Tt & (Ir | ji)) === hr && Mo();
      }
    }
    function nR() {
      return (Tt & (Ir | ji)) !== hr;
    }
    function Fm(e, t) {
      ia(LS, Kl, e), Kl = nt(Kl, t);
    }
    function PS(e) {
      Kl = LS.current, aa(LS, e);
    }
    function rc(e, t) {
      e.finishedWork = null, e.finishedLanes = I;
      var a = e.timeoutHandle;
      if (a !== Ay && (e.timeoutHandle = Ay, ix(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var u = i.alternate;
          LC(u, i), i = i.return;
        }
      Ea = e;
      var s = ic(e.current, null);
      return On = s, mr = Kl = t, yr = Bu, Fp = null, Lm = I, Hp = I, Mm = I, Pp = null, Va = null, _1(), al.discardPendingWarnings(), s;
    }
    function rR(e, t) {
      do {
        var a = On;
        try {
          if (Gh(), _0(), fn(), DS.current = null, a === null || a.return === null) {
            yr = Ap, Fp = t, On = null;
            return;
          }
          if (Ve && a.mode & Mt && Tm(a, !0), $e)
            if (ma(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              bi(a, i, mr);
            } else
              fs(a, t, mr);
          nw(e, a.return, a, t, mr), uR(a);
        } catch (u) {
          t = u, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function aR() {
      var e = kS.current;
      return kS.current = gm, e === null ? gm : e;
    }
    function iR(e) {
      kS.current = e;
    }
    function Nb() {
      MS = Qn();
    }
    function Yp(e) {
      Lm = nt(e, Lm);
    }
    function zb() {
      yr === Bu && (yr = Om);
    }
    function VS() {
      (yr === Bu || yr === Om || yr === tc) && (yr = jp), Ea !== null && (Rs(Lm) || Rs(Hp)) && Io(Ea, mr);
    }
    function Ub(e) {
      yr !== jp && (yr = tc), Pp === null ? Pp = [e] : Pp.push(e);
    }
    function Ab() {
      return yr === Bu;
    }
    function Hm(e, t) {
      var a = Tt;
      Tt |= Ir;
      var i = aR();
      if (Ea !== e || mr !== t) {
        if (Jr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, mr), u.clear()), Yv(e, t);
        }
        Iu = Ad(), rc(e, t);
      }
      Eu(t);
      do
        try {
          jb();
          break;
        } catch (s) {
          rR(e, s);
        }
      while (!0);
      if (Gh(), Tt = a, iR(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Lc(), Ea = null, mr = I, yr;
    }
    function jb() {
      for (; On !== null; )
        lR(On);
    }
    function Fb(e, t) {
      var a = Tt;
      Tt |= Ir;
      var i = aR();
      if (Ea !== e || mr !== t) {
        if (Jr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, mr), u.clear()), Yv(e, t);
        }
        Iu = Ad(), Vp(), rc(e, t);
      }
      Eu(t);
      do
        try {
          Hb();
          break;
        } catch (s) {
          rR(e, s);
        }
      while (!0);
      return Gh(), iR(i), Tt = a, On !== null ? (Av(), Bu) : (Lc(), Ea = null, mr = I, yr);
    }
    function Hb() {
      for (; On !== null && !hd(); )
        lR(On);
    }
    function lR(e) {
      var t = e.alternate;
      Yt(e);
      var a;
      (e.mode & Mt) !== Le ? ($g(e), a = BS(t, e, Kl), Tm(e, !0)) : a = BS(t, e, Kl), fn(), e.memoizedProps = e.pendingProps, a === null ? uR(e) : On = a, DS.current = null;
    }
    function uR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & os) === Oe) {
          Yt(t);
          var u = void 0;
          if ((t.mode & Mt) === Le ? u = OC(a, t, Kl) : ($g(t), u = OC(a, t, Kl), Tm(t, !1)), fn(), u !== null) {
            On = u;
            return;
          }
        } else {
          var s = zw(a, t);
          if (s !== null) {
            s.flags &= Ov, On = s;
            return;
          }
          if ((t.mode & Mt) !== Le) {
            Tm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= os, i.subtreeFlags = Oe, i.deletions = null;
          else {
            yr = OS, On = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          On = v;
          return;
        }
        t = i, On = t;
      } while (t !== null);
      yr === Bu && (yr = GC);
    }
    function ac(e, t, a) {
      var i = Aa(), u = Br.transition;
      try {
        Br.transition = null, Fn(Mr), Pb(e, t, a, i);
      } finally {
        Br.transition = u, Fn(i);
      }
      return null;
    }
    function Pb(e, t, a, i) {
      do
        Yu();
      while (Vo !== null);
      if (Kb(), (Tt & (Ir | ji)) !== hr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Cd(s), u === null)
        return Rd(), null;
      if (s === I && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = I, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Dt;
      var f = nt(u.lanes, u.childLanes);
      zd(e, f), e === Ea && (Ea = null, On = null, mr = I), ((u.subtreeFlags & Gi) !== Oe || (u.flags & Gi) !== Oe) && (nc || (nc = !0, US = a, YS(qi, function() {
        return Yu(), null;
      })));
      var p = (u.subtreeFlags & (kl | Dl | Ol | Gi)) !== Oe, v = (u.flags & (kl | Dl | Ol | Gi)) !== Oe;
      if (p || v) {
        var y = Br.transition;
        Br.transition = null;
        var g = Aa();
        Fn(Mr);
        var b = Tt;
        Tt |= ji, DS.current = null, Hw(e, u), J0(), Zw(e, u, s), JT(e.containerInfo), e.current = u, ds(s), eb(u, e, s), ps(), md(), Tt = b, Fn(g), Br.transition = y;
      } else
        e.current = u, J0();
      var x = nc;
      if (nc ? (nc = !1, Vo = e, Bp = s) : (Bf = 0, Um = null), f = e.pendingLanes, f === I && (Vf = null), x || fR(e.current, !1), gd(u.stateNode, i), Jr && e.memoizedUpdaters.clear(), Sb(), Ba(e, Qn()), t !== null)
        for (var M = e.onRecoverableError, U = 0; U < t.length; U++) {
          var F = t[U], se = F.stack, Ue = F.digest;
          M(F.value, {
            componentStack: se,
            digest: Ue
          });
        }
      if (Nm) {
        Nm = !1;
        var we = NS;
        throw NS = null, we;
      }
      return ea(Bp, Be) && e.tag !== Lo && Yu(), f = e.pendingLanes, ea(f, Be) ? (Y1(), e === AS ? Ip++ : (Ip = 0, AS = e)) : Ip = 0, Mo(), Rd(), null;
    }
    function Yu() {
      if (Vo !== null) {
        var e = Gv(Bp), t = ks(za, e), a = Br.transition, i = Aa();
        try {
          return Br.transition = null, Fn(t), Bb();
        } finally {
          Fn(i), Br.transition = a;
        }
      }
      return !1;
    }
    function Vb(e) {
      zS.push(e), nc || (nc = !0, YS(qi, function() {
        return Yu(), null;
      }));
    }
    function Bb() {
      if (Vo === null)
        return !1;
      var e = US;
      US = null;
      var t = Vo, a = Bp;
      if (Vo = null, Bp = I, (Tt & (Ir | ji)) !== hr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jS = !0, zm = !1, Su(a);
      var i = Tt;
      Tt |= ji, ub(t.current), rb(t, t.current, a, e);
      {
        var u = zS;
        zS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Iw(t, f);
        }
      }
      wd(), fR(t.current, !0), Tt = i, Mo(), zm ? t === Um ? Bf++ : (Bf = 0, Um = t) : Bf = 0, jS = !1, zm = !1, Sd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function oR(e) {
      return Vf !== null && Vf.has(e);
    }
    function Ib(e) {
      Vf === null ? Vf = /* @__PURE__ */ new Set([e]) : Vf.add(e);
    }
    function $b(e) {
      Nm || (Nm = !0, NS = e);
    }
    var Yb = $b;
    function sR(e, t, a) {
      var i = Zs(a, t), u = lC(e, i, Be), s = zo(e, u, Be), f = Ca();
      s !== null && (So(s, Be, f), Ba(s, f));
    }
    function dn(e, t, a) {
      if (Aw(a), Qp(!1), e.tag === J) {
        sR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === J) {
          sR(i, e, a);
          return;
        } else if (i.tag === te) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !oR(s)) {
            var f = Zs(a, e), p = oS(i, f, Be), v = zo(i, p, Be), y = Ca();
            v !== null && (So(v, Be, y), Ba(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Wb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ca();
      Zc(e, a), t_(e), Ea === e && ku(mr, a) && (yr === jp || yr === Om && _u(mr) && Qn() - MS < qC ? rc(e, I) : Mm = nt(Mm, a)), Ba(e, u);
    }
    function cR(e, t) {
      t === Dt && (t = bb(e));
      var a = Ca(), i = Ha(e, t);
      i !== null && (So(i, t, a), Ba(i, a));
    }
    function Qb(e) {
      var t = e.memoizedState, a = Dt;
      t !== null && (a = t.retryLane), cR(e, a);
    }
    function Gb(e, t) {
      var a = Dt, i;
      switch (e.tag) {
        case Ce:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case on:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), cR(e, a);
    }
    function qb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Rb(e / 1960) * 1960;
    }
    function Xb() {
      if (Ip > xb)
        throw Ip = 0, AS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Bf > wb && (Bf = 0, Um = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Kb() {
      al.flushLegacyContextWarning(), al.flushPendingUnsafeLifecycleWarnings();
    }
    function fR(e, t) {
      Yt(e), Pm(e, _l, mb), t && Pm(e, Ti, yb), Pm(e, _l, vb), t && Pm(e, Ti, hb), fn();
    }
    function Pm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Oe ? i = i.child : ((i.flags & t) !== Oe && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Vm = null;
    function dR(e) {
      {
        if ((Tt & Ir) !== hr || !(e.mode & vt))
          return;
        var t = e.tag;
        if (t !== ke && t !== J && t !== te && t !== ne && t !== Ae && t !== lt && t !== Ie)
          return;
        var a = qe(e) || "ReactComponent";
        if (Vm !== null) {
          if (Vm.has(a))
            return;
          Vm.add(a);
        } else
          Vm = /* @__PURE__ */ new Set([a]);
        var i = lr;
        try {
          Yt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Yt(e) : fn();
        }
      }
    }
    var BS;
    {
      var Jb = null;
      BS = function(e, t, a) {
        var i = ER(Jb, t);
        try {
          return wC(e, t, a);
        } catch (s) {
          if (c1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Gh(), _0(), LC(e, t), ER(t, i), t.mode & Mt && $g(t), bl(null, wC, null, e, t, a), Wi()) {
            var u = us();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var pR = !1, IS;
    IS = /* @__PURE__ */ new Set();
    function Zb(e) {
      if (mi && !B1())
        switch (e.tag) {
          case ne:
          case Ae:
          case Ie: {
            var t = On && qe(On) || "Unknown", a = t;
            if (!IS.has(a)) {
              IS.add(a);
              var i = qe(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case te: {
            pR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), pR = !0);
            break;
          }
        }
    }
    function Wp(e, t) {
      if (Jr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          bs(e, i, t);
        });
      }
    }
    var $S = {};
    function YS(e, t) {
      {
        var a = dl.current;
        return a !== null ? (a.push(t), $S) : vd(e, t);
      }
    }
    function vR(e) {
      if (e !== $S)
        return Mv(e);
    }
    function hR() {
      return dl.current !== null;
    }
    function e_(e) {
      {
        if (e.mode & vt) {
          if (!WC())
            return;
        } else if (!Cb() || Tt !== hr || e.tag !== ne && e.tag !== Ae && e.tag !== Ie)
          return;
        if (dl.current === null) {
          var t = lr;
          try {
            Yt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, qe(e));
          } finally {
            t ? Yt(e) : fn();
          }
        }
      }
    }
    function t_(e) {
      e.tag !== Lo && WC() && dl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Qp(e) {
      JC = e;
    }
    var Fi = null, If = null, n_ = function(e) {
      Fi = e;
    };
    function $f(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function WS(e) {
      return $f(e);
    }
    function QS(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = $f(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: B,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function mR(e, t) {
      {
        if (Fi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case te: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ne: {
            (typeof i == "function" || s === Xe) && (u = !0);
            break;
          }
          case Ae: {
            (s === B || s === Xe) && (u = !0);
            break;
          }
          case lt:
          case Ie: {
            (s === et || s === Xe) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Fi(a);
          if (f !== void 0 && f === Fi(i))
            return !0;
        }
        return !1;
      }
    }
    function yR(e) {
      {
        if (Fi === null || typeof WeakSet != "function")
          return;
        If === null && (If = /* @__PURE__ */ new WeakSet()), If.add(e);
      }
    }
    var r_ = function(e, t) {
      {
        if (Fi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Yu(), $u(function() {
          GS(e.current, i, a);
        });
      }
    }, a_ = function(e, t) {
      {
        if (e.context !== ui)
          return;
        Yu(), $u(function() {
          Gp(t, e, null, null);
        });
      }
    };
    function GS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ne:
          case Ie:
          case te:
            v = p;
            break;
          case Ae:
            v = p.render;
            break;
        }
        if (Fi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = Fi(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === te ? g = !0 : y = !0));
        }
        if (If !== null && (If.has(e) || i !== null && If.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var x = Ha(e, Be);
          x !== null && gr(x, e, Be, Kt);
        }
        u !== null && !g && GS(u, t, a), s !== null && GS(s, t, a);
      }
    }
    var i_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return qS(e.current, i, a), a;
      }
    };
    function qS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ne:
          case Ie:
          case te:
            p = f;
            break;
          case Ae:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? l_(e, a) : i !== null && qS(i, t, a), u !== null && qS(u, t, a);
      }
    }
    function l_(e, t) {
      {
        var a = u_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case q:
              t.add(i.stateNode);
              return;
            case me:
              t.add(i.stateNode.containerInfo);
              return;
            case J:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function u_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === q)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var XS;
    {
      XS = !1;
      try {
        var gR = Object.preventExtensions({});
      } catch {
        XS = !0;
      }
    }
    function o_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Oe, this.subtreeFlags = Oe, this.deletions = null, this.lanes = I, this.childLanes = I, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var oi = function(e, t, a, i) {
      return new o_(e, t, a, i);
    };
    function KS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function s_(e) {
      return typeof e == "function" && !KS(e) && e.defaultProps === void 0;
    }
    function c_(e) {
      if (typeof e == "function")
        return KS(e) ? te : ne;
      if (e != null) {
        var t = e.$$typeof;
        if (t === B)
          return Ae;
        if (t === et)
          return lt;
      }
      return ke;
    }
    function ic(e, t) {
      var a = e.alternate;
      a === null ? (a = oi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Oe, a.subtreeFlags = Oe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Un, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ke:
        case ne:
        case Ie:
          a.type = $f(e.type);
          break;
        case te:
          a.type = WS(e.type);
          break;
        case Ae:
          a.type = QS(e.type);
          break;
      }
      return a;
    }
    function f_(e, t) {
      e.flags &= Un | yn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = I, e.lanes = t, e.child = null, e.subtreeFlags = Oe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Oe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function d_(e, t, a) {
      var i;
      return e === Fh ? (i = vt, t === !0 && (i |= Gt, i |= Nt)) : i = Le, Jr && (i |= Mt), oi(J, null, null, i);
    }
    function JS(e, t, a, i, u, s) {
      var f = ke, p = e;
      if (typeof e == "function")
        KS(e) ? (f = te, p = WS(p)) : p = $f(p);
      else if (typeof e == "string")
        f = q;
      else
        e: switch (e) {
          case di:
            return $o(a.children, u, s, t);
          case Qa:
            f = Me, u |= Gt, (u & vt) !== Le && (u |= Nt);
            break;
          case pi:
            return p_(a, u, s, t);
          case ue:
            return v_(a, u, s, t);
          case he:
            return h_(a, u, s, t);
          case xn:
            return SR(a, u, s, t);
          case rn:
          case mt:
          case cn:
          case ir:
          case pt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case vi:
                  f = it;
                  break e;
                case R:
                  f = Zt;
                  break e;
                case B:
                  f = Ae, p = QS(p);
                  break e;
                case et:
                  f = lt;
                  break e;
                case Xe:
                  f = un, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? qe(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = oi(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function ZS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = JS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function $o(e, t, a, i) {
      var u = oi(We, e, i, t);
      return u.lanes = a, u;
    }
    function p_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = oi(ht, e, i, t | Mt);
      return u.elementType = pi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function v_(e, t, a, i) {
      var u = oi(Ce, e, i, t);
      return u.elementType = ue, u.lanes = a, u;
    }
    function h_(e, t, a, i) {
      var u = oi(on, e, i, t);
      return u.elementType = he, u.lanes = a, u;
    }
    function SR(e, t, a, i) {
      var u = oi(Ne, e, i, t);
      u.elementType = xn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function eE(e, t, a) {
      var i = oi(De, e, null, t);
      return i.lanes = a, i;
    }
    function m_() {
      var e = oi(q, null, null, Le);
      return e.elementType = "DELETED", e;
    }
    function y_(e) {
      var t = oi(en, null, null, Le);
      return t.stateNode = e, t;
    }
    function tE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = oi(me, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function ER(e, t) {
      return e === null && (e = oi(ke, null, null, Le)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function g_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ay, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Dt, this.eventTimes = ws(I), this.expirationTimes = ws(Kt), this.pendingLanes = I, this.suspendedLanes = I, this.pingedLanes = I, this.expiredLanes = I, this.mutableReadLanes = I, this.finishedLanes = I, this.entangledLanes = I, this.entanglements = ws(I), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Cu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Fh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function CR(e, t, a, i, u, s, f, p, v, y) {
      var g = new g_(e, t, a, p, v), b = d_(t, s);
      g.current = b, b.stateNode = g;
      {
        var x = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = x;
      }
      return vg(b), g;
    }
    var nE = "18.3.1";
    function S_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Yr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ar,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var rE, aE;
    rE = !1, aE = {};
    function RR(e) {
      if (!e)
        return ui;
      var t = po(e), a = t1(t);
      if (t.tag === te) {
        var i = t.type;
        if ($l(i))
          return qE(t, i, a);
      }
      return a;
    }
    function E_(e, t) {
      {
        var a = po(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Xr(a);
        if (u === null)
          return null;
        if (u.mode & Gt) {
          var s = qe(a) || "Component";
          if (!aE[s]) {
            aE[s] = !0;
            var f = lr;
            try {
              Yt(u), a.mode & Gt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Yt(f) : fn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function TR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return CR(e, t, v, y, a, i, u, s, f);
    }
    function xR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = CR(a, i, g, e, u, s, f, p, v);
      b.context = RR(null);
      var x = b.current, M = Ca(), U = Bo(x), F = Pu(M, U);
      return F.callback = t ?? null, zo(x, F, U), _b(b, U, M), b;
    }
    function Gp(e, t, a, i) {
      yd(t, e);
      var u = t.current, s = Ca(), f = Bo(u);
      Sn(f);
      var p = RR(a);
      t.context === null ? t.context = p : t.pendingContext = p, mi && lr !== null && !rE && (rE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, qe(lr) || "Unknown"));
      var v = Pu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = zo(u, v, f);
      return y !== null && (gr(y, u, f, s), Zh(y, u, f)), f;
    }
    function Bm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case q:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function C_(e) {
      switch (e.tag) {
        case J: {
          var t = e.stateNode;
          if (tf(t)) {
            var a = Fv(t);
            Lb(t, a);
          }
          break;
        }
        case Ce: {
          $u(function() {
            var u = Ha(e, Be);
            if (u !== null) {
              var s = Ca();
              gr(u, e, Be, s);
            }
          });
          var i = Be;
          iE(e, i);
          break;
        }
      }
    }
    function wR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Iv(a.retryLane, t));
    }
    function iE(e, t) {
      wR(e, t);
      var a = e.alternate;
      a && wR(a, t);
    }
    function R_(e) {
      if (e.tag === Ce) {
        var t = Ss, a = Ha(e, t);
        if (a !== null) {
          var i = Ca();
          gr(a, e, t, i);
        }
        iE(e, t);
      }
    }
    function T_(e) {
      if (e.tag === Ce) {
        var t = Bo(e), a = Ha(e, t);
        if (a !== null) {
          var i = Ca();
          gr(a, e, t, i);
        }
        iE(e, t);
      }
    }
    function bR(e) {
      var t = pn(e);
      return t === null ? null : t.stateNode;
    }
    var _R = function(e) {
      return null;
    };
    function x_(e) {
      return _R(e);
    }
    var kR = function(e) {
      return !1;
    };
    function w_(e) {
      return kR(e);
    }
    var DR = null, OR = null, LR = null, MR = null, NR = null, zR = null, UR = null, AR = null, jR = null;
    {
      var FR = function(e, t, a) {
        var i = t[a], u = ct(e) ? e.slice() : at({}, e);
        return a + 1 === t.length ? (ct(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = FR(e[i], t, a + 1), u);
      }, HR = function(e, t) {
        return FR(e, t, 0);
      }, PR = function(e, t, a, i) {
        var u = t[i], s = ct(e) ? e.slice() : at({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], ct(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = PR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, VR = function(e, t, a) {
        if (t.length !== a.length) {
          Fe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Fe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return PR(e, t, a, 0);
      }, BR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = ct(e) ? e.slice() : at({}, e);
        return s[u] = BR(e[u], t, a + 1, i), s;
      }, IR = function(e, t, a) {
        return BR(e, t, 0, a);
      }, lE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      DR = function(e, t, a, i) {
        var u = lE(e, t);
        if (u !== null) {
          var s = IR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = at({}, e.memoizedProps);
          var f = Ha(e, Be);
          f !== null && gr(f, e, Be, Kt);
        }
      }, OR = function(e, t, a) {
        var i = lE(e, t);
        if (i !== null) {
          var u = HR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = at({}, e.memoizedProps);
          var s = Ha(e, Be);
          s !== null && gr(s, e, Be, Kt);
        }
      }, LR = function(e, t, a, i) {
        var u = lE(e, t);
        if (u !== null) {
          var s = VR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = at({}, e.memoizedProps);
          var f = Ha(e, Be);
          f !== null && gr(f, e, Be, Kt);
        }
      }, MR = function(e, t, a) {
        e.pendingProps = IR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ha(e, Be);
        i !== null && gr(i, e, Be, Kt);
      }, NR = function(e, t) {
        e.pendingProps = HR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ha(e, Be);
        a !== null && gr(a, e, Be, Kt);
      }, zR = function(e, t, a) {
        e.pendingProps = VR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ha(e, Be);
        i !== null && gr(i, e, Be, Kt);
      }, UR = function(e) {
        var t = Ha(e, Be);
        t !== null && gr(t, e, Be, Kt);
      }, AR = function(e) {
        _R = e;
      }, jR = function(e) {
        kR = e;
      };
    }
    function b_(e) {
      var t = Xr(e);
      return t === null ? null : t.stateNode;
    }
    function __(e) {
      return null;
    }
    function k_() {
      return lr;
    }
    function D_(e) {
      var t = e.findFiberByHostInstance, a = A.ReactCurrentDispatcher;
      return mo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: DR,
        overrideHookStateDeletePath: OR,
        overrideHookStateRenamePath: LR,
        overrideProps: MR,
        overridePropsDeletePath: NR,
        overridePropsRenamePath: zR,
        setErrorHandler: AR,
        setSuspenseHandler: jR,
        scheduleUpdate: UR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: b_,
        findFiberByHostInstance: t || __,
        // React Refresh
        findHostInstancesForRefresh: i_,
        scheduleRefresh: r_,
        scheduleRoot: a_,
        setRefreshHandler: n_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: k_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: nE
      });
    }
    var $R = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function uE(e) {
      this._internalRoot = e;
    }
    Im.prototype.render = uE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : $m(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Nn) {
          var i = bR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Gp(e, t, null, null);
    }, Im.prototype.unmount = uE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        nR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), $u(function() {
          Gp(null, e, null, null);
        }), $E(t);
      }
    };
    function O_(e, t) {
      if (!$m(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      YR(e);
      var a = !1, i = !1, u = "", s = $R;
      t != null && (t.hydrate ? Fe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === kr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = TR(e, Fh, null, a, i, u, s);
      Lh(f.current, e);
      var p = e.nodeType === Nn ? e.parentNode : e;
      return ep(p), new uE(f);
    }
    function Im(e) {
      this._internalRoot = e;
    }
    function L_(e) {
      e && Zv(e);
    }
    Im.prototype.unstable_scheduleHydration = L_;
    function M_(e, t, a) {
      if (!$m(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      YR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = $R;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = xR(t, null, e, Fh, i, s, f, p, v);
      if (Lh(y.current, e), ep(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          A1(y, b);
        }
      return new Im(y);
    }
    function $m(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Yi || e.nodeType === nd));
    }
    function qp(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Yi || e.nodeType === nd || e.nodeType === Nn && e.nodeValue === " react-mount-point-unstable "));
    }
    function YR(e) {
      e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), fp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var N_ = A.ReactCurrentOwner, WR;
    WR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Nn) {
        var t = bR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = oE(e), u = !!(i && Do(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function oE(e) {
      return e ? e.nodeType === Yi ? e.documentElement : e.firstChild : null;
    }
    function QR() {
    }
    function z_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = Bm(f);
            s.call(x);
          };
        }
        var f = xR(
          t,
          i,
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          QR
        );
        e._reactRootContainer = f, Lh(f.current, e);
        var p = e.nodeType === Nn ? e.parentNode : e;
        return ep(p), $u(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var x = Bm(g);
            y.call(x);
          };
        }
        var g = TR(
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          QR
        );
        e._reactRootContainer = g, Lh(g.current, e);
        var b = e.nodeType === Nn ? e.parentNode : e;
        return ep(b), $u(function() {
          Gp(t, g, a, i);
        }), g;
      }
    }
    function U_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Ym(e, t, a, i, u) {
      WR(a), U_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = z_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Bm(f);
            p.call(v);
          };
        }
        Gp(t, f, e, u);
      }
      return Bm(f);
    }
    var GR = !1;
    function A_(e) {
      {
        GR || (GR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = N_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", wt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qr ? e : E_(e, "findDOMNode");
    }
    function j_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Ym(null, e, t, !0, a);
    }
    function F_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Ym(null, e, t, !1, a);
    }
    function H_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !iy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Ym(e, t, a, !1, i);
    }
    var qR = !1;
    function P_(e) {
      if (qR || (qR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !qp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = fp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = oE(e), i = a && !Do(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return $u(function() {
          Ym(null, null, e, !1, function() {
            e._reactRootContainer = null, $E(e);
          });
        }), !0;
      } else {
        {
          var u = oE(e), s = !!(u && Do(u)), f = e.nodeType === Qr && qp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    xr(C_), Eo(R_), qv(T_), Os(Aa), jd(Wv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), gc(BT), ay(HS, Mb, $u);
    function V_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!$m(t))
        throw new Error("Target container is not a DOM element.");
      return S_(e, t, null, a);
    }
    function B_(e, t, a, i) {
      return H_(e, t, a, i);
    }
    var sE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Do, Cf, Mh, oo, Sc, HS]
    };
    function I_(e, t) {
      return sE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), O_(e, t);
    }
    function $_(e, t, a) {
      return sE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), M_(e, t, a);
    }
    function Y_(e) {
      return nR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), $u(e);
    }
    var W_ = D_({
      findFiberByHostInstance: $s,
      bundleType: 1,
      version: nE,
      rendererPackageName: "react-dom"
    });
    if (!W_ && Ln && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var XR = window.location.protocol;
      /^(https?|file):$/.test(XR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (XR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sE, $a.createPortal = V_, $a.createRoot = I_, $a.findDOMNode = A_, $a.flushSync = Y_, $a.hydrate = j_, $a.hydrateRoot = $_, $a.render = F_, $a.unmountComponentAtNode = P_, $a.unstable_batchedUpdates = HS, $a.unstable_renderSubtreeIntoContainer = B_, $a.version = nE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), $a;
}
function oT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oT);
    } catch (Q) {
      console.error(Q);
    }
  }
}
process.env.NODE_ENV === "production" ? (oT(), hE.exports = rk()) : hE.exports = ak();
var ik = hE.exports, mE, Qm = ik;
if (process.env.NODE_ENV === "production")
  mE = Qm.createRoot, Qm.hydrateRoot;
else {
  var lT = Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  mE = function(Q, G) {
    lT.usingClientEntryPoint = !0;
    try {
      return Qm.createRoot(Q, G);
    } finally {
      lT.usingClientEntryPoint = !1;
    }
  };
}
function lk(Q, G) {
  const [A, Ze] = Jt.useState(null), Ge = Jt.useRef(0), Fe = Jt.useRef(null);
  return Jt.useEffect(() => {
    const S = (ne) => {
      var ke;
      const te = ne.target;
      (te.closest(".swatch") || te.closest('[name="id"]') || (ke = te.textContent) != null && ke.toLowerCase().includes("shade")) && (Ge.current += 1, Ge.current >= 3 && (Ze("shade_confusion"), Ge.current = 0));
    }, gt = () => {
      const te = Array.from(document.querySelectorAll("h2, h3, h4, span, div.accordion-title")).find((ke) => {
        var J;
        return (J = ke.textContent) == null ? void 0 : J.toLowerCase().includes("ingredient");
      });
      if (te) {
        const ke = te.getBoundingClientRect();
        ke.top >= 0 && ke.left >= 0 && ke.bottom <= (window.innerHeight || document.documentElement.clientHeight) && ke.right <= (window.innerWidth || document.documentElement.clientWidth) ? Fe.current || (Fe.current = setTimeout(() => {
          Ze("ingredient_hesitation");
        }, 8e3)) : Fe.current && (clearTimeout(Fe.current), Fe.current = null);
      }
    };
    return document.addEventListener("click", S), document.addEventListener("scroll", gt, { passive: !0 }), () => {
      document.removeEventListener("click", S), document.removeEventListener("scroll", gt), Fe.current && clearTimeout(Fe.current);
    };
  }, []), { hesitation: A, setHesitation: Ze };
}
const uk = [
  { role: "assistant", text: "Welcome to Stylique. I'm Stella, your personal beauty executive. I noticed you're browsing our Luminous Foundation line. Are you looking to achieve a flawless matte finish today, or something more dewy?" },
  { role: "user", text: "I want a matte finish, but I'm not sure what shade I am. I have olive skin." },
  {
    role: "assistant",
    text: "I can absolutely help with that. Based on your olive undertone, Shade #342 is your exact mathematical match. However, to guarantee that flawless matte finish that lasts 12 hours, you cannot just use the foundation alone. You need the full 3-step 'Matte Perfection Bundle'. I've built it for you below. Let's add this to your cart now so you can secure your shade before it sells out.",
    metadata: {
      products: [
        { id: "prm-1", name: "Step 1: Shine-Control Primer", price: 38, image: "/assets/primer.png", handle: "shine-control-primer" },
        { id: "fnd-1", name: "Step 2: Luminous Matte Foundation - #342", price: 45, image: "/assets/foundation.png", handle: "luminous-matte-foundation" },
        { id: "pwd-1", name: "Step 3: Translucent Setting Powder", price: 32, image: "/assets/powder.png", handle: "translucent-setting-powder" }
      ]
    }
  }
];
function ok() {
  const [Q, G] = Jt.useState(!1), [A, Ze] = Jt.useState("chat"), [Ge, Fe] = Jt.useState(uk), [S, gt] = Jt.useState(null);
  Jt.useEffect(() => {
    try {
      const q = window.sessionStorage.getItem("stylique_isOpen");
      q !== null && G(q === "true");
      const De = window.sessionStorage.getItem("stylique_messages");
      De && Fe(JSON.parse(De));
      const We = window.sessionStorage.getItem("stylique_routine");
      We && gt(JSON.parse(We));
    } catch (q) {
      console.error("Failed to load Stylique state from session", q);
    }
  }, []);
  const ne = Jt.useCallback((q) => {
    G((De) => {
      const We = typeof q == "function" ? q(De) : q;
      return window.sessionStorage.setItem("stylique_isOpen", String(We)), We;
    });
  }, []), te = Jt.useCallback(() => ne((q) => !q), [ne]), ke = Jt.useCallback((q) => {
    Fe((De) => {
      const We = typeof q == "function" ? q(De) : q;
      return window.sessionStorage.setItem("stylique_messages", JSON.stringify(We)), We;
    });
  }, []), J = Jt.useCallback((q, De, We) => {
    ke((Me) => [...Me, { role: q, text: De, metadata: We }]);
  }, [ke]), me = Jt.useCallback((q) => {
    gt(q), q ? window.sessionStorage.setItem("stylique_routine", JSON.stringify(q)) : window.sessionStorage.removeItem("stylique_routine");
  }, []);
  return {
    isOpen: Q,
    setIsOpen: ne,
    toggleOpen: te,
    activeView: A,
    setActiveView: Ze,
    messages: Ge,
    addMessage: J,
    currentRoutine: S,
    setCurrentRoutine: me
  };
}
function sk() {
  const [Q, G] = Jt.useState("closed"), [A, Ze] = Jt.useState(null), Ge = Jt.useCallback(() => {
    G("initializing");
  }, []), Fe = Jt.useCallback(() => {
    G("closed"), Ze(null);
  }, []), S = Jt.useCallback(() => {
    Q === "active" && (G("scanning"), setTimeout(() => {
      Ze({
        skinToneDepth: "medium",
        skinToneDepthConfidence: 0.92,
        undertone: "olive",
        undertoneConfidence: 0.88,
        skinType: "combination",
        skinTypeConfidence: 0.85,
        faceShape: "oval",
        faceShapeConfidence: 0.79,
        eyeShape: "almond",
        concerns: ["dark_spots", "fine_lines"],
        rawAnalysis: "Simulated visual analysis completed. Detected medium skin with clear olive undertones.",
        provider: "mock"
      }), G("complete");
    }, 3500));
  }, [Q]);
  return {
    cameraState: Q,
    setCameraState: G,
    analysisResult: A,
    openCamera: Ge,
    closeCamera: Fe,
    startScan: S
  };
}
const dE = {
  primer: "/assets/primer.png",
  foundation: "/assets/foundation.png",
  powder: "/assets/powder.png"
  // fallback or specific map
};
function ck({ routine: Q, onBack: G, primaryColor: A }) {
  const [Ze, Ge] = Jt.useState(!1);
  if (!Q)
    return /* @__PURE__ */ be.jsx("div", { style: { padding: "2rem", textAlign: "center", color: "var(--stella-text-secondary)" }, children: /* @__PURE__ */ be.jsx("p", { children: "Loading your perfect routine..." }) });
  const Fe = Q.steps.length * 45;
  return /* @__PURE__ */ be.jsxs("div", { style: { display: "flex", flexDirection: "column", height: "100%", background: "transparent" }, children: [
    /* @__PURE__ */ be.jsxs("div", { style: {
      background: "var(--stella-primary)",
      color: "white",
      padding: "1.25rem",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
    }, children: [
      /* @__PURE__ */ be.jsx("button", { onClick: G, style: { background: "rgba(255,255,255,0.15)", border: "none", color: "white", cursor: "pointer", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }, children: "←" }),
      /* @__PURE__ */ be.jsxs("div", { children: [
        /* @__PURE__ */ be.jsx("div", { style: { fontWeight: 700, fontSize: "15px" }, children: Q.name }),
        /* @__PURE__ */ be.jsxs("div", { style: { fontSize: "12px", opacity: 0.8 }, children: [
          Q.steps.length,
          " Steps • ",
          Q.estimatedTime
        ] })
      ] })
    ] }),
    /* @__PURE__ */ be.jsxs("div", { className: "stella-scroll", style: { flex: 1, overflowY: "auto", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "2rem" }, children: [
      /* @__PURE__ */ be.jsx("p", { style: { color: "var(--stella-text-secondary)", fontSize: "0.875rem", margin: 0, lineHeight: 1.5 }, children: Q.description }),
      /* @__PURE__ */ be.jsxs("div", { style: { position: "relative" }, children: [
        /* @__PURE__ */ be.jsx("div", { style: { position: "absolute", left: "15px", top: "10px", bottom: "10px", width: "2px", background: "linear-gradient(to bottom, var(--stella-primary), rgba(139, 92, 246, 0.2))" } }),
        Q.steps.map((S, gt) => {
          var te, ke, J;
          let ne = dE.foundation;
          return (((te = S.product) == null ? void 0 : te.category) === "primer" || S.name.toLowerCase().includes("prep")) && (ne = dE.primer), S.name.toLowerCase().includes("set") && (ne = dE.powder), /* @__PURE__ */ be.jsxs("div", { style: { position: "relative", paddingLeft: "44px", marginBottom: gt === Q.steps.length - 1 ? 0 : "2rem" }, children: [
            /* @__PURE__ */ be.jsx("div", { style: {
              position: "absolute",
              left: "10px",
              top: "4px",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "var(--stella-primary)",
              border: "2px solid white",
              boxShadow: "0 0 0 4px rgba(139, 92, 246, 0.2)"
            } }),
            /* @__PURE__ */ be.jsxs("div", { style: { fontSize: "0.75rem", color: "var(--stella-primary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }, children: [
              "Step ",
              S.order,
              ": ",
              S.name
            ] }),
            /* @__PURE__ */ be.jsxs("div", { style: {
              marginTop: "0.5rem",
              background: "rgba(255,255,255,0.6)",
              padding: "1rem",
              borderRadius: "1rem",
              border: "1px solid rgba(255,255,255,0.8)",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)"
            }, children: [
              /* @__PURE__ */ be.jsxs("div", { style: { display: "flex", gap: "1rem", marginBottom: "0.75rem" }, children: [
                /* @__PURE__ */ be.jsx("div", { style: { width: "60px", height: "60px", borderRadius: "0.5rem", background: "white", padding: "4px", border: "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ be.jsx("img", { src: ne, alt: ((ke = S.product) == null ? void 0 : ke.name) || "Product", style: { maxWidth: "100%", maxHeight: "100%", objectFit: "contain" } }) }),
                /* @__PURE__ */ be.jsxs("div", { children: [
                  /* @__PURE__ */ be.jsx("div", { style: { fontWeight: 600, color: "var(--stella-text-primary)", fontSize: "0.875rem" }, children: ((J = S.product) == null ? void 0 : J.name) || "Recommended Product" }),
                  /* @__PURE__ */ be.jsx("div", { style: { fontSize: "0.875rem", color: "var(--stella-text-secondary)", marginTop: "0.25rem" }, children: S.why })
                ] })
              ] }),
              /* @__PURE__ */ be.jsxs("div", { style: { display: "flex", gap: "0.5rem" }, children: [
                /* @__PURE__ */ be.jsx("span", { style: { fontSize: "0.75rem", background: "white", padding: "0.25rem 0.5rem", borderRadius: "1rem", border: "1px solid #e2e8f0", color: "var(--stella-text-secondary)" }, children: S.when }),
                /* @__PURE__ */ be.jsx("span", { style: { fontSize: "0.75rem", background: "white", padding: "0.25rem 0.5rem", borderRadius: "1rem", border: "1px solid #e2e8f0", color: "var(--stella-text-secondary)" }, children: S.duration })
              ] })
            ] })
          ] }, S.id);
        })
      ] })
    ] }),
    /* @__PURE__ */ be.jsxs("div", { style: {
      padding: "1.5rem",
      borderTop: "1px solid var(--stella-border-glass)",
      background: "rgba(255,255,255,0.9)",
      backdropFilter: "blur(10px)"
    }, children: [
      /* @__PURE__ */ be.jsxs(
        "button",
        {
          className: "stella-btn-primary",
          style: { width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" },
          onClick: () => {
            Ge(!0), fetch("/api/analytics", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                type: "cart_add",
                sessionId: "session_123",
                brandId: "brand_xyz",
                data: {
                  source: "routine_builder",
                  value: Fe,
                  items: Q.steps.length
                }
              })
            }).catch((S) => console.error(S)), setTimeout(() => Ge(!1), 2e3);
          },
          children: [
            /* @__PURE__ */ be.jsx("span", { children: Ze ? "✓ Added Successfully" : "Add Entire Routine to Cart" }),
            !Ze && /* @__PURE__ */ be.jsxs("span", { children: [
              "$",
              Fe,
              ".00"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ be.jsx("p", { style: { textAlign: "center", fontSize: "0.75rem", color: "var(--stella-text-secondary)", marginTop: "0.75rem", margin: "0.75rem 0 0 0" }, children: "Stella will automatically apply the matching shades to your cart." })
    ] })
  ] });
}
const fk = Jt.lazy(() => import("./CameraView-zFNS5qoN.js").then((Q) => ({ default: Q.CameraView })));
function dk({ shopDomain: Q, brandId: G, primaryColor: A }) {
  const { hesitation: Ze, setHesitation: Ge } = lk(), { isOpen: Fe, setIsOpen: S, toggleOpen: gt, activeView: ne, setActiveView: te, messages: ke, addMessage: J, currentRoutine: me, setCurrentRoutine: q } = ok(), { cameraState: De, openCamera: We } = sk();
  return Jt.useEffect(() => {
    Ze === "shade_confusion" ? (S(!0), te("chat"), J("assistant", "I notice you're comparing shades. Based on your profile, I can calculate the exact mathematical match. Would you like me to find your perfect shade and apply it in AR?"), Ge(null)) : Ze === "ingredient_hesitation" && (S(!0), te("chat"), J("assistant", "I see you're checking the ingredients. This formula is 100% clean and non-comedogenic. Do you have any specific sensitivities I should double-check for you?"), Ge(null));
  }, [Ze, S, te, J, Ge]), Jt.useEffect(() => {
    const Me = () => {
      S(!0), te("routine"), q({
        id: "mock-123",
        shopperId: "123",
        type: "morning",
        name: 'The "Olive Glow" Routine',
        description: "Based on your Olive undertone and Combination skin, this matte-finish routine is mathematically perfect for you.",
        totalProducts: 3,
        estimatedTime: "5 mins",
        occasion: null,
        createdAt: /* @__PURE__ */ new Date(),
        steps: [
          {
            id: "step1",
            order: 1,
            name: "Prep",
            why: "Oil-free primer controls shine in your T-zone.",
            when: "Morning",
            how: "Apply a pea-sized amount.",
            duration: "1 min",
            tips: [],
            product: { id: "p1", name: "Matte Perfection Primer", category: "primer", price: 45 },
            productId: "p1"
          },
          {
            id: "step2",
            order: 2,
            name: "Base",
            why: "Shade #342 Olive perfectly matches your deep undertone.",
            when: "Morning",
            how: "Blend outward with a sponge.",
            duration: "2 mins",
            tips: [],
            product: { id: "p2", name: "Luminous Foundation", category: "foundation", price: 55 },
            productId: "p2"
          },
          {
            id: "step3",
            order: 3,
            name: "Set",
            why: "Translucent powder locks it all in.",
            when: "Morning",
            how: "Dust lightly over T-zone.",
            duration: "1 min",
            tips: [],
            product: { id: "p3", name: "Airbrush Setting Powder", category: "primer", price: 42 },
            productId: "p3"
          }
        ]
      });
    };
    return window.addEventListener("stella-open-routine", Me), () => window.removeEventListener("stella-open-routine", Me);
  }, [S, te, q]), /* @__PURE__ */ be.jsxs("div", { className: "stella-widget-container", style: { "--primary-color": A }, children: [
    Fe && /* @__PURE__ */ be.jsx("div", { className: "stella-panel", children: ne === "chat" ? /* @__PURE__ */ be.jsxs(be.Fragment, { children: [
      /* @__PURE__ */ be.jsxs("div", { style: {
        background: "var(--stella-primary)",
        color: "white",
        padding: "1.25rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
      }, children: [
        /* @__PURE__ */ be.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
          /* @__PURE__ */ be.jsx("div", { style: {
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px"
          }, children: "✨" }),
          /* @__PURE__ */ be.jsxs("div", { children: [
            /* @__PURE__ */ be.jsx("div", { style: { fontWeight: 700, fontSize: "15px" }, children: "Stella" }),
            /* @__PURE__ */ be.jsx("div", { style: { fontSize: "12px", opacity: 0.8 }, children: "Active now" })
          ] })
        ] }),
        /* @__PURE__ */ be.jsx(
          "button",
          {
            onClick: () => S(!1),
            style: {
              background: "rgba(255,255,255,0.15)",
              border: "none",
              color: "white",
              cursor: "pointer",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s"
            },
            onMouseOver: (Me) => Me.currentTarget.style.background = "rgba(255,255,255,0.25)",
            onMouseOut: (Me) => Me.currentTarget.style.background = "rgba(255,255,255,0.15)",
            children: "✕"
          }
        )
      ] }),
      /* @__PURE__ */ be.jsxs("div", { className: "stella-scroll", style: { flex: 1, padding: "1.5rem", overflowY: "auto", display: "flex", flexDirection: "column", gap: "1rem" }, children: [
        ke.map((Me, Zt) => {
          var it;
          return /* @__PURE__ */ be.jsxs("div", { style: { display: "flex", flexDirection: "column", alignSelf: Me.role === "assistant" ? "flex-start" : "flex-end", maxWidth: "85%" }, children: [
            /* @__PURE__ */ be.jsx("div", { className: `stella-msg ${Me.role === "assistant" ? "stella-msg-assistant" : "stella-msg-user"}`, style: { maxWidth: "100%" }, children: Me.text }),
            Me.role === "assistant" && ((it = Me.metadata) == null ? void 0 : it.products) && Me.metadata.products.length > 0 && /* @__PURE__ */ be.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }, children: Me.metadata.products.map((Ae) => /* @__PURE__ */ be.jsxs("div", { style: {
              background: "white",
              border: "1px solid var(--stella-border-glass)",
              padding: "0.75rem",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
            }, children: [
              /* @__PURE__ */ be.jsxs("div", { children: [
                /* @__PURE__ */ be.jsx("div", { style: { fontSize: "0.75rem", fontWeight: 600, color: "var(--stella-text-primary)" }, children: Ae.name }),
                /* @__PURE__ */ be.jsxs("div", { style: { fontSize: "0.75rem", color: "var(--stella-text-secondary)" }, children: [
                  "$",
                  Ae.price,
                  ".00"
                ] })
              ] }),
              /* @__PURE__ */ be.jsxs("div", { style: { display: "flex", gap: "0.5rem" }, children: [
                Ae.handle && /* @__PURE__ */ be.jsx(
                  "a",
                  {
                    href: `/products/${Ae.handle}`,
                    style: {
                      background: "var(--stella-secondary, #f1f5f9)",
                      border: "1px solid var(--stella-border, #cbd5e1)",
                      padding: "0.35rem 0.75rem",
                      borderRadius: "0.75rem",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: "var(--stella-text-primary, #334155)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center"
                    },
                    children: "View"
                  }
                ),
                /* @__PURE__ */ be.jsx(
                  "button",
                  {
                    onClick: (ht) => {
                      const Ce = ht.currentTarget;
                      Ce.innerText = "✓ Added", Ce.style.background = "#10b981", Ce.style.color = "white", Ce.style.borderColor = "#10b981", fetch("/api/analytics", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          type: "cart_add",
                          sessionId: "session_123",
                          brandId: "brand_xyz",
                          data: { source: "chat", value: Ae.price, items: 1, productId: Ae.id }
                        })
                      }).catch((lt) => console.error(lt));
                    },
                    style: {
                      background: "transparent",
                      border: "1px solid var(--stella-primary)",
                      padding: "0.35rem 0.75rem",
                      borderRadius: "0.75rem",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: "var(--stella-primary)",
                      cursor: "pointer",
                      transition: "all 0.2s"
                    },
                    children: "+ Add"
                  }
                )
              ] })
            ] }, Ae.id)) })
          ] }, Zt);
        }),
        /* @__PURE__ */ be.jsx(
          "button",
          {
            className: "stella-btn-primary",
            style: { marginTop: "1.5rem", alignSelf: "center", width: "100%" },
            onClick: () => {
              S(!1), We();
            },
            children: "Launch AR Try-On & Skin Scan"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ be.jsx(
      ck,
      {
        routine: me,
        onBack: () => te("chat"),
        primaryColor: A
      }
    ) }),
    /* @__PURE__ */ be.jsxs("button", { className: `stella-fab ${Fe ? "" : "stella-fab-pulse"}`, onClick: gt, children: [
      /* @__PURE__ */ be.jsx("span", { style: { fontSize: "20px" }, children: "✨" }),
      Fe ? "Close" : "Stella"
    ] }),
    De !== "closed" && /* @__PURE__ */ be.jsx(Jt.Suspense, { fallback: /* @__PURE__ */ be.jsx("div", { style: { position: "fixed", inset: 0, background: "black", zIndex: 9999 } }), children: /* @__PURE__ */ be.jsx(fk, {}) })
  ] });
}
const Zp = document.getElementById("stylique-stella-root");
if (Zp) {
  const Q = Zp.getAttribute("data-shop-domain") || "", G = Zp.getAttribute("data-brand-id") || "", A = Zp.getAttribute("data-primary-color") || "#8B5CF6";
  mE(Zp).render(
    /* @__PURE__ */ be.jsx(J_.StrictMode, { children: /* @__PURE__ */ be.jsx(dk, { shopDomain: Q, brandId: G, primaryColor: A }) })
  );
}
export {
  J_ as R,
  be as j,
  Jt as r,
  sk as u
};
