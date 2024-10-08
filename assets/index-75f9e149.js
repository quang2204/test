(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = r(i);
    fetch(i.href, s);
  }
})();
var Qt =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Yd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function $w(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      if (this instanceof n) {
        var i = [null];
        i.push.apply(i, arguments);
        var s = Function.bind.apply(t, i);
        return new s();
      }
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return (
    Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (n) {
      var i = Object.getOwnPropertyDescriptor(e, n);
      Object.defineProperty(
        r,
        n,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }
      );
    }),
    r
  );
}
var Lg = { exports: {} },
  xl = {},
  Mg = { exports: {} },
  ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _a = Symbol.for("react.element"),
  Lw = Symbol.for("react.portal"),
  Mw = Symbol.for("react.fragment"),
  Fw = Symbol.for("react.strict_mode"),
  jw = Symbol.for("react.profiler"),
  Uw = Symbol.for("react.provider"),
  zw = Symbol.for("react.context"),
  Bw = Symbol.for("react.forward_ref"),
  Ww = Symbol.for("react.suspense"),
  Vw = Symbol.for("react.memo"),
  Hw = Symbol.for("react.lazy"),
  Fh = Symbol.iterator;
function qw(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fh && e[Fh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Fg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  jg = Object.assign,
  Ug = {};
function es(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ug),
    (this.updater = r || Fg);
}
es.prototype.isReactComponent = {};
es.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
es.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function zg() {}
zg.prototype = es.prototype;
function Gd(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ug),
    (this.updater = r || Fg);
}
var Kd = (Gd.prototype = new zg());
Kd.constructor = Gd;
jg(Kd, es.prototype);
Kd.isPureReactComponent = !0;
var jh = Array.isArray,
  Bg = Object.prototype.hasOwnProperty,
  Xd = { current: null },
  Wg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vg(e, t, r) {
  var n,
    i = {},
    s = null,
    a = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Bg.call(t, n) && !Wg.hasOwnProperty(n) && (i[n] = t[n]);
  var o = arguments.length - 2;
  if (o === 1) i.children = r;
  else if (1 < o) {
    for (var l = Array(o), u = 0; u < o; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (n in ((o = e.defaultProps), o)) i[n] === void 0 && (i[n] = o[n]);
  return {
    $$typeof: _a,
    type: e,
    key: s,
    ref: a,
    props: i,
    _owner: Xd.current,
  };
}
function Qw(e, t) {
  return {
    $$typeof: _a,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Jd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === _a;
}
function Yw(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Uh = /\/+/g;
function gu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Yw("" + e.key)
    : t.toString(36);
}
function co(e, t, r, n, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (s) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case _a:
          case Lw:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = n === "" ? "." + gu(a, 0) : n),
      jh(i)
        ? ((r = ""),
          e != null && (r = e.replace(Uh, "$&/") + "/"),
          co(i, t, r, "", function (u) {
            return u;
          }))
        : i != null &&
          (Jd(i) &&
            (i = Qw(
              i,
              r +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Uh, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (n = n === "" ? "." : n + ":"), jh(e)))
    for (var o = 0; o < e.length; o++) {
      s = e[o];
      var l = n + gu(s, o);
      a += co(s, t, r, l, i);
    }
  else if (((l = qw(e)), typeof l == "function"))
    for (e = l.call(e), o = 0; !(s = e.next()).done; )
      (s = s.value), (l = n + gu(s, o++)), (a += co(s, t, r, l, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Fa(e, t, r) {
  if (e == null) return e;
  var n = [],
    i = 0;
  return (
    co(e, n, "", "", function (s) {
      return t.call(r, s, i++);
    }),
    n
  );
}
function Gw(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pt = { current: null },
  fo = { transition: null },
  Kw = {
    ReactCurrentDispatcher: pt,
    ReactCurrentBatchConfig: fo,
    ReactCurrentOwner: Xd,
  };
ae.Children = {
  map: Fa,
  forEach: function (e, t, r) {
    Fa(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Fa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Fa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Jd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ae.Component = es;
ae.Fragment = Mw;
ae.Profiler = jw;
ae.PureComponent = Gd;
ae.StrictMode = Fw;
ae.Suspense = Ww;
ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kw;
ae.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = jg({}, e.props),
    i = e.key,
    s = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (a = Xd.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (l in t)
      Bg.call(t, l) &&
        !Wg.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && o !== void 0 ? o[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    o = Array(l);
    for (var u = 0; u < l; u++) o[u] = arguments[u + 2];
    n.children = o;
  }
  return { $$typeof: _a, type: e.type, key: i, ref: s, props: n, _owner: a };
};
ae.createContext = function (e) {
  return (
    (e = {
      $$typeof: zw,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Uw, _context: e }),
    (e.Consumer = e)
  );
};
ae.createElement = Vg;
ae.createFactory = function (e) {
  var t = Vg.bind(null, e);
  return (t.type = e), t;
};
ae.createRef = function () {
  return { current: null };
};
ae.forwardRef = function (e) {
  return { $$typeof: Bw, render: e };
};
ae.isValidElement = Jd;
ae.lazy = function (e) {
  return { $$typeof: Hw, _payload: { _status: -1, _result: e }, _init: Gw };
};
ae.memo = function (e, t) {
  return { $$typeof: Vw, type: e, compare: t === void 0 ? null : t };
};
ae.startTransition = function (e) {
  var t = fo.transition;
  fo.transition = {};
  try {
    e();
  } finally {
    fo.transition = t;
  }
};
ae.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ae.useCallback = function (e, t) {
  return pt.current.useCallback(e, t);
};
ae.useContext = function (e) {
  return pt.current.useContext(e);
};
ae.useDebugValue = function () {};
ae.useDeferredValue = function (e) {
  return pt.current.useDeferredValue(e);
};
ae.useEffect = function (e, t) {
  return pt.current.useEffect(e, t);
};
ae.useId = function () {
  return pt.current.useId();
};
ae.useImperativeHandle = function (e, t, r) {
  return pt.current.useImperativeHandle(e, t, r);
};
ae.useInsertionEffect = function (e, t) {
  return pt.current.useInsertionEffect(e, t);
};
ae.useLayoutEffect = function (e, t) {
  return pt.current.useLayoutEffect(e, t);
};
ae.useMemo = function (e, t) {
  return pt.current.useMemo(e, t);
};
ae.useReducer = function (e, t, r) {
  return pt.current.useReducer(e, t, r);
};
ae.useRef = function (e) {
  return pt.current.useRef(e);
};
ae.useState = function (e) {
  return pt.current.useState(e);
};
ae.useSyncExternalStore = function (e, t, r) {
  return pt.current.useSyncExternalStore(e, t, r);
};
ae.useTransition = function () {
  return pt.current.useTransition();
};
ae.version = "18.2.0";
Mg.exports = ae;
var x = Mg.exports;
const be = Yd(x);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xw = x,
  Jw = Symbol.for("react.element"),
  Zw = Symbol.for("react.fragment"),
  eb = Object.prototype.hasOwnProperty,
  tb = Xw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  rb = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hg(e, t, r) {
  var n,
    i = {},
    s = null,
    a = null;
  r !== void 0 && (s = "" + r),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (n in t) eb.call(t, n) && !rb.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
  return {
    $$typeof: Jw,
    type: e,
    key: s,
    ref: a,
    props: i,
    _owner: tb.current,
  };
}
xl.Fragment = Zw;
xl.jsx = Hg;
xl.jsxs = Hg;
Lg.exports = xl;
var Zd = Lg.exports;
const Yt = Zd.Fragment,
  g = Zd.jsx,
  A = Zd.jsxs;
var hc = {},
  qg = { exports: {} },
  Nt = {},
  Qg = { exports: {} },
  Yg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t($, K) {
    var J = $.length;
    $.push(K);
    e: for (; 0 < J; ) {
      var ge = (J - 1) >>> 1,
        j = $[ge];
      if (0 < i(j, K)) ($[ge] = K), ($[J] = j), (J = ge);
      else break e;
    }
  }
  function r($) {
    return $.length === 0 ? null : $[0];
  }
  function n($) {
    if ($.length === 0) return null;
    var K = $[0],
      J = $.pop();
    if (J !== K) {
      $[0] = J;
      e: for (var ge = 0, j = $.length, B = j >>> 1; ge < B; ) {
        var W = 2 * (ge + 1) - 1,
          ee = $[W],
          E = W + 1,
          re = $[E];
        if (0 > i(ee, J))
          E < j && 0 > i(re, ee)
            ? (($[ge] = re), ($[E] = J), (ge = E))
            : (($[ge] = ee), ($[W] = J), (ge = W));
        else if (E < j && 0 > i(re, J)) ($[ge] = re), ($[E] = J), (ge = E);
        else break e;
      }
    }
    return K;
  }
  function i($, K) {
    var J = $.sortIndex - K.sortIndex;
    return J !== 0 ? J : $.id - K.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var a = Date,
      o = a.now();
    e.unstable_now = function () {
      return a.now() - o;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    h = 3,
    m = !1,
    y = !1,
    w = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v($) {
    for (var K = r(u); K !== null; ) {
      if (K.callback === null) n(u);
      else if (K.startTime <= $)
        n(u), (K.sortIndex = K.expirationTime), t(l, K);
      else break;
      K = r(u);
    }
  }
  function _($) {
    if (((w = !1), v($), !y))
      if (r(l) !== null) (y = !0), me(S);
      else {
        var K = r(u);
        K !== null && le(_, K.startTime - $);
      }
  }
  function S($, K) {
    (y = !1), w && ((w = !1), p(T), (T = -1)), (m = !0);
    var J = h;
    try {
      for (
        v(K), d = r(l);
        d !== null && (!(d.expirationTime > K) || ($ && !he()));

      ) {
        var ge = d.callback;
        if (typeof ge == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var j = ge(d.expirationTime <= K);
          (K = e.unstable_now()),
            typeof j == "function" ? (d.callback = j) : d === r(l) && n(l),
            v(K);
        } else n(l);
        d = r(l);
      }
      if (d !== null) var B = !0;
      else {
        var W = r(u);
        W !== null && le(_, W.startTime - K), (B = !1);
      }
      return B;
    } finally {
      (d = null), (h = J), (m = !1);
    }
  }
  var R = !1,
    O = null,
    T = -1,
    q = 5,
    z = -1;
  function he() {
    return !(e.unstable_now() - z < q);
  }
  function V() {
    if (O !== null) {
      var $ = e.unstable_now();
      z = $;
      var K = !0;
      try {
        K = O(!0, $);
      } finally {
        K ? G() : ((R = !1), (O = null));
      }
    } else R = !1;
  }
  var G;
  if (typeof f == "function")
    G = function () {
      f(V);
    };
  else if (typeof MessageChannel < "u") {
    var ne = new MessageChannel(),
      Z = ne.port2;
    (ne.port1.onmessage = V),
      (G = function () {
        Z.postMessage(null);
      });
  } else
    G = function () {
      k(V, 0);
    };
  function me($) {
    (O = $), R || ((R = !0), G());
  }
  function le($, K) {
    T = k(function () {
      $(e.unstable_now());
    }, K);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function ($) {
      $.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || m || ((y = !0), me(S));
    }),
    (e.unstable_forceFrameRate = function ($) {
      0 > $ || 125 < $
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (q = 0 < $ ? Math.floor(1e3 / $) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (e.unstable_next = function ($) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = h;
      }
      var J = h;
      h = K;
      try {
        return $();
      } finally {
        h = J;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function ($, K) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var J = h;
      h = $;
      try {
        return K();
      } finally {
        h = J;
      }
    }),
    (e.unstable_scheduleCallback = function ($, K, J) {
      var ge = e.unstable_now();
      switch (
        (typeof J == "object" && J !== null
          ? ((J = J.delay), (J = typeof J == "number" && 0 < J ? ge + J : ge))
          : (J = ge),
        $)
      ) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return (
        (j = J + j),
        ($ = {
          id: c++,
          callback: K,
          priorityLevel: $,
          startTime: J,
          expirationTime: j,
          sortIndex: -1,
        }),
        J > ge
          ? (($.sortIndex = J),
            t(u, $),
            r(l) === null &&
              $ === r(u) &&
              (w ? (p(T), (T = -1)) : (w = !0), le(_, J - ge)))
          : (($.sortIndex = j), t(l, $), y || m || ((y = !0), me(S))),
        $
      );
    }),
    (e.unstable_shouldYield = he),
    (e.unstable_wrapCallback = function ($) {
      var K = h;
      return function () {
        var J = h;
        h = K;
        try {
          return $.apply(this, arguments);
        } finally {
          h = J;
        }
      };
    });
})(Yg);
Qg.exports = Yg;
var nb = Qg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gg = x,
  Rt = nb;
function I(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Kg = new Set(),
  Js = {};
function ti(e, t) {
  zi(e, t), zi(e + "Capture", t);
}
function zi(e, t) {
  for (Js[e] = t, e = 0; e < t.length; e++) Kg.add(t[e]);
}
var Ar = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  pc = Object.prototype.hasOwnProperty,
  ib =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  zh = {},
  Bh = {};
function sb(e) {
  return pc.call(Bh, e)
    ? !0
    : pc.call(zh, e)
    ? !1
    : ib.test(e)
    ? (Bh[e] = !0)
    : ((zh[e] = !0), !1);
}
function ab(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ob(e, t, r, n) {
  if (t === null || typeof t > "u" || ab(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function mt(e, t, r, n, i, s, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = i),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = a);
}
var rt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    rt[e] = new mt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  rt[t] = new mt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  rt[e] = new mt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  rt[e] = new mt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    rt[e] = new mt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  rt[e] = new mt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  rt[e] = new mt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  rt[e] = new mt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  rt[e] = new mt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ef = /[\-:]([a-z])/g;
function tf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ef, tf);
    rt[t] = new mt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ef, tf);
    rt[t] = new mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ef, tf);
  rt[t] = new mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  rt[e] = new mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
rt.xlinkHref = new mt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  rt[e] = new mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function rf(e, t, r, n) {
  var i = rt.hasOwnProperty(t) ? rt[t] : null;
  (i !== null
    ? i.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ob(t, r, i, n) && (r = null),
    n || i === null
      ? sb(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : i.mustUseProperty
      ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : "") : r)
      : ((t = i.attributeName),
        (n = i.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (r = i === 3 || (i === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Mr = Gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ja = Symbol.for("react.element"),
  vi = Symbol.for("react.portal"),
  yi = Symbol.for("react.fragment"),
  nf = Symbol.for("react.strict_mode"),
  mc = Symbol.for("react.profiler"),
  Xg = Symbol.for("react.provider"),
  Jg = Symbol.for("react.context"),
  sf = Symbol.for("react.forward_ref"),
  gc = Symbol.for("react.suspense"),
  vc = Symbol.for("react.suspense_list"),
  af = Symbol.for("react.memo"),
  Hr = Symbol.for("react.lazy"),
  Zg = Symbol.for("react.offscreen"),
  Wh = Symbol.iterator;
function cs(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wh && e[Wh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $e = Object.assign,
  vu;
function Os(e) {
  if (vu === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      vu = (t && t[1]) || "";
    }
  return (
    `
` +
    vu +
    e
  );
}
var yu = !1;
function wu(e, t) {
  if (!e || yu) return "";
  yu = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = n.stack.split(`
`),
          a = i.length - 1,
          o = s.length - 1;
        1 <= a && 0 <= o && i[a] !== s[o];

      )
        o--;
      for (; 1 <= a && 0 <= o; a--, o--)
        if (i[a] !== s[o]) {
          if (a !== 1 || o !== 1)
            do
              if ((a--, o--, 0 > o || i[a] !== s[o])) {
                var l =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= o);
          break;
        }
    }
  } finally {
    (yu = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? Os(e) : "";
}
function lb(e) {
  switch (e.tag) {
    case 5:
      return Os(e.type);
    case 16:
      return Os("Lazy");
    case 13:
      return Os("Suspense");
    case 19:
      return Os("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = wu(e.type, !1)), e;
    case 11:
      return (e = wu(e.type.render, !1)), e;
    case 1:
      return (e = wu(e.type, !0)), e;
    default:
      return "";
  }
}
function yc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case yi:
      return "Fragment";
    case vi:
      return "Portal";
    case mc:
      return "Profiler";
    case nf:
      return "StrictMode";
    case gc:
      return "Suspense";
    case vc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Jg:
        return (e.displayName || "Context") + ".Consumer";
      case Xg:
        return (e._context.displayName || "Context") + ".Provider";
      case sf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case af:
        return (
          (t = e.displayName || null), t !== null ? t : yc(e.type) || "Memo"
        );
      case Hr:
        (t = e._payload), (e = e._init);
        try {
          return yc(e(t));
        } catch {}
    }
  return null;
}
function ub(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return yc(t);
    case 8:
      return t === nf ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function vn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ev(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function cb(e) {
  var t = ev(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var i = r.get,
      s = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (n = "" + a), s.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (a) {
          n = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ua(e) {
  e._valueTracker || (e._valueTracker = cb(e));
}
function tv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = ev(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function No(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function wc(e, t) {
  var r = t.checked;
  return $e({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function Vh(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = vn(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function rv(e, t) {
  (t = t.checked), t != null && rf(e, "checked", t, !1);
}
function bc(e, t) {
  rv(e, t);
  var r = vn(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? kc(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && kc(e, t.type, vn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Hh(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function kc(e, t, r) {
  (t !== "number" || No(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Ts = Array.isArray;
function Ni(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++)
      (i = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== i && (e[r].selected = i),
        i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + vn(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        (e[i].selected = !0), n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function _c(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return $e({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function qh(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(I(92));
      if (Ts(r)) {
        if (1 < r.length) throw Error(I(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: vn(r) };
}
function nv(e, t) {
  var r = vn(t.value),
    n = vn(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function Qh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function iv(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Sc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? iv(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var za,
  sv = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        za = za || document.createElement("div"),
          za.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = za.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Zs(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ls = {
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
    strokeWidth: !0,
  },
  db = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ls).forEach(function (e) {
  db.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ls[t] = Ls[e]);
  });
});
function av(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Ls.hasOwnProperty(e) && Ls[e])
    ? ("" + t).trim()
    : t + "px";
}
function ov(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        i = av(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : (e[r] = i);
    }
}
var fb = $e(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function xc(e, t) {
  if (t) {
    if (fb[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function Cc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Ec = null;
function of(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Pc = null,
  Ii = null,
  $i = null;
function Yh(e) {
  if ((e = Ca(e))) {
    if (typeof Pc != "function") throw Error(I(280));
    var t = e.stateNode;
    t && ((t = Tl(t)), Pc(e.stateNode, e.type, t));
  }
}
function lv(e) {
  Ii ? ($i ? $i.push(e) : ($i = [e])) : (Ii = e);
}
function uv() {
  if (Ii) {
    var e = Ii,
      t = $i;
    if ((($i = Ii = null), Yh(e), t)) for (e = 0; e < t.length; e++) Yh(t[e]);
  }
}
function cv(e, t) {
  return e(t);
}
function dv() {}
var bu = !1;
function fv(e, t, r) {
  if (bu) return e(t, r);
  bu = !0;
  try {
    return cv(e, t, r);
  } finally {
    (bu = !1), (Ii !== null || $i !== null) && (dv(), uv());
  }
}
function ea(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = Tl(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
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
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(I(231, t, typeof r));
  return r;
}
var Oc = !1;
if (Ar)
  try {
    var ds = {};
    Object.defineProperty(ds, "passive", {
      get: function () {
        Oc = !0;
      },
    }),
      window.addEventListener("test", ds, ds),
      window.removeEventListener("test", ds, ds);
  } catch {
    Oc = !1;
  }
function hb(e, t, r, n, i, s, a, o, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ms = !1,
  Io = null,
  $o = !1,
  Tc = null,
  pb = {
    onError: function (e) {
      (Ms = !0), (Io = e);
    },
  };
function mb(e, t, r, n, i, s, a, o, l) {
  (Ms = !1), (Io = null), hb.apply(pb, arguments);
}
function gb(e, t, r, n, i, s, a, o, l) {
  if ((mb.apply(this, arguments), Ms)) {
    if (Ms) {
      var u = Io;
      (Ms = !1), (Io = null);
    } else throw Error(I(198));
    $o || (($o = !0), (Tc = u));
  }
}
function ri(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function hv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Gh(e) {
  if (ri(e) !== e) throw Error(I(188));
}
function vb(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ri(e)), t === null)) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((n = i.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === r) return Gh(i), e;
        if (s === n) return Gh(i), t;
        s = s.sibling;
      }
      throw Error(I(188));
    }
    if (r.return !== n.return) (r = i), (n = s);
    else {
      for (var a = !1, o = i.child; o; ) {
        if (o === r) {
          (a = !0), (r = i), (n = s);
          break;
        }
        if (o === n) {
          (a = !0), (n = i), (r = s);
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = s.child; o; ) {
          if (o === r) {
            (a = !0), (r = s), (n = i);
            break;
          }
          if (o === n) {
            (a = !0), (n = s), (r = i);
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(I(189));
      }
    }
    if (r.alternate !== n) throw Error(I(190));
  }
  if (r.tag !== 3) throw Error(I(188));
  return r.stateNode.current === r ? e : t;
}
function pv(e) {
  return (e = vb(e)), e !== null ? mv(e) : null;
}
function mv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = mv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gv = Rt.unstable_scheduleCallback,
  Kh = Rt.unstable_cancelCallback,
  yb = Rt.unstable_shouldYield,
  wb = Rt.unstable_requestPaint,
  je = Rt.unstable_now,
  bb = Rt.unstable_getCurrentPriorityLevel,
  lf = Rt.unstable_ImmediatePriority,
  vv = Rt.unstable_UserBlockingPriority,
  Lo = Rt.unstable_NormalPriority,
  kb = Rt.unstable_LowPriority,
  yv = Rt.unstable_IdlePriority,
  Cl = null,
  yr = null;
function _b(e) {
  if (yr && typeof yr.onCommitFiberRoot == "function")
    try {
      yr.onCommitFiberRoot(Cl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var or = Math.clz32 ? Math.clz32 : Cb,
  Sb = Math.log,
  xb = Math.LN2;
function Cb(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Sb(e) / xb) | 0)) | 0;
}
var Ba = 64,
  Wa = 4194304;
function As(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Mo(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    a = r & 268435455;
  if (a !== 0) {
    var o = a & ~i;
    o !== 0 ? (n = As(o)) : ((s &= a), s !== 0 && (n = As(s)));
  } else (a = r & ~i), a !== 0 ? (n = As(a)) : s !== 0 && (n = As(s));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & i) &&
    ((i = n & -n), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - or(t)), (i = 1 << r), (n |= e[r]), (t &= ~i);
  return n;
}
function Eb(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function Pb(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var a = 31 - or(s),
      o = 1 << a,
      l = i[a];
    l === -1
      ? (!(o & r) || o & n) && (i[a] = Eb(o, t))
      : l <= t && (e.expiredLanes |= o),
      (s &= ~o);
  }
}
function Ac(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function wv() {
  var e = Ba;
  return (Ba <<= 1), !(Ba & 4194240) && (Ba = 64), e;
}
function ku(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Sa(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - or(t)),
    (e[t] = r);
}
function Ob(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - or(r),
      s = 1 << i;
    (t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~s);
  }
}
function uf(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - or(r),
      i = 1 << n;
    (i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i);
  }
}
var ye = 0;
function bv(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var kv,
  cf,
  _v,
  Sv,
  xv,
  Rc = !1,
  Va = [],
  an = null,
  on = null,
  ln = null,
  ta = new Map(),
  ra = new Map(),
  Gr = [],
  Tb =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Xh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      an = null;
      break;
    case "dragenter":
    case "dragleave":
      on = null;
      break;
    case "mouseover":
    case "mouseout":
      ln = null;
      break;
    case "pointerover":
    case "pointerout":
      ta.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ra.delete(t.pointerId);
  }
}
function fs(e, t, r, n, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Ca(t)), t !== null && cf(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Ab(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return (an = fs(an, e, t, r, n, i)), !0;
    case "dragenter":
      return (on = fs(on, e, t, r, n, i)), !0;
    case "mouseover":
      return (ln = fs(ln, e, t, r, n, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return ta.set(s, fs(ta.get(s) || null, e, t, r, n, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), ra.set(s, fs(ra.get(s) || null, e, t, r, n, i)), !0
      );
  }
  return !1;
}
function Cv(e) {
  var t = Mn(e.target);
  if (t !== null) {
    var r = ri(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = hv(r)), t !== null)) {
          (e.blockedOn = t),
            xv(e.priority, function () {
              _v(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ho(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Dc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (Ec = n), r.target.dispatchEvent(n), (Ec = null);
    } else return (t = Ca(r)), t !== null && cf(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Jh(e, t, r) {
  ho(e) && r.delete(t);
}
function Rb() {
  (Rc = !1),
    an !== null && ho(an) && (an = null),
    on !== null && ho(on) && (on = null),
    ln !== null && ho(ln) && (ln = null),
    ta.forEach(Jh),
    ra.forEach(Jh);
}
function hs(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Rc ||
      ((Rc = !0),
      Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority, Rb)));
}
function na(e) {
  function t(i) {
    return hs(i, e);
  }
  if (0 < Va.length) {
    hs(Va[0], e);
    for (var r = 1; r < Va.length; r++) {
      var n = Va[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    an !== null && hs(an, e),
      on !== null && hs(on, e),
      ln !== null && hs(ln, e),
      ta.forEach(t),
      ra.forEach(t),
      r = 0;
    r < Gr.length;
    r++
  )
    (n = Gr[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Gr.length && ((r = Gr[0]), r.blockedOn === null); )
    Cv(r), r.blockedOn === null && Gr.shift();
}
var Li = Mr.ReactCurrentBatchConfig,
  Fo = !0;
function Db(e, t, r, n) {
  var i = ye,
    s = Li.transition;
  Li.transition = null;
  try {
    (ye = 1), df(e, t, r, n);
  } finally {
    (ye = i), (Li.transition = s);
  }
}
function Nb(e, t, r, n) {
  var i = ye,
    s = Li.transition;
  Li.transition = null;
  try {
    (ye = 4), df(e, t, r, n);
  } finally {
    (ye = i), (Li.transition = s);
  }
}
function df(e, t, r, n) {
  if (Fo) {
    var i = Dc(e, t, r, n);
    if (i === null) Ru(e, t, n, jo, r), Xh(e, n);
    else if (Ab(i, e, t, r, n)) n.stopPropagation();
    else if ((Xh(e, n), t & 4 && -1 < Tb.indexOf(e))) {
      for (; i !== null; ) {
        var s = Ca(i);
        if (
          (s !== null && kv(s),
          (s = Dc(e, t, r, n)),
          s === null && Ru(e, t, n, jo, r),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && n.stopPropagation();
    } else Ru(e, t, n, null, r);
  }
}
var jo = null;
function Dc(e, t, r, n) {
  if (((jo = null), (e = of(n)), (e = Mn(e)), e !== null))
    if (((t = ri(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = hv(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (jo = e), null;
}
function Ev(e) {
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
      switch (bb()) {
        case lf:
          return 1;
        case vv:
          return 4;
        case Lo:
        case kb:
          return 16;
        case yv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null,
  ff = null,
  po = null;
function Pv() {
  if (po) return po;
  var e,
    t = ff,
    r = t.length,
    n,
    i = "value" in en ? en.value : en.textContent,
    s = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++);
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === i[s - n]; n++);
  return (po = i.slice(e, 1 < n ? 1 - n : void 0));
}
function mo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ha() {
  return !0;
}
function Zh() {
  return !1;
}
function It(e) {
  function t(r, n, i, s, a) {
    (this._reactName = r),
      (this._targetInst = i),
      (this.type = n),
      (this.nativeEvent = s),
      (this.target = a),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((r = e[o]), (this[o] = r ? r(s) : s[o]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ha
        : Zh),
      (this.isPropagationStopped = Zh),
      this
    );
  }
  return (
    $e(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = Ha));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = Ha));
      },
      persist: function () {},
      isPersistent: Ha,
    }),
    t
  );
}
var ts = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  hf = It(ts),
  xa = $e({}, ts, { view: 0, detail: 0 }),
  Ib = It(xa),
  _u,
  Su,
  ps,
  El = $e({}, xa, {
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
    getModifierState: pf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ps &&
            (ps && e.type === "mousemove"
              ? ((_u = e.screenX - ps.screenX), (Su = e.screenY - ps.screenY))
              : (Su = _u = 0),
            (ps = e)),
          _u);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Su;
    },
  }),
  ep = It(El),
  $b = $e({}, El, { dataTransfer: 0 }),
  Lb = It($b),
  Mb = $e({}, xa, { relatedTarget: 0 }),
  xu = It(Mb),
  Fb = $e({}, ts, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jb = It(Fb),
  Ub = $e({}, ts, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  zb = It(Ub),
  Bb = $e({}, ts, { data: 0 }),
  tp = It(Bb),
  Wb = {
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
    MozPrintableKey: "Unidentified",
  },
  Vb = {
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
    224: "Meta",
  },
  Hb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function qb(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Hb[e]) ? !!t[e] : !1;
}
function pf() {
  return qb;
}
var Qb = $e({}, xa, {
    key: function (e) {
      if (e.key) {
        var t = Wb[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = mo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Vb[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: pf,
    charCode: function (e) {
      return e.type === "keypress" ? mo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? mo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Yb = It(Qb),
  Gb = $e({}, El, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  rp = It(Gb),
  Kb = $e({}, xa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pf,
  }),
  Xb = It(Kb),
  Jb = $e({}, ts, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zb = It(Jb),
  ek = $e({}, El, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  tk = It(ek),
  rk = [9, 13, 27, 32],
  mf = Ar && "CompositionEvent" in window,
  Fs = null;
Ar && "documentMode" in document && (Fs = document.documentMode);
var nk = Ar && "TextEvent" in window && !Fs,
  Ov = Ar && (!mf || (Fs && 8 < Fs && 11 >= Fs)),
  np = String.fromCharCode(32),
  ip = !1;
function Tv(e, t) {
  switch (e) {
    case "keyup":
      return rk.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Av(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var wi = !1;
function ik(e, t) {
  switch (e) {
    case "compositionend":
      return Av(t);
    case "keypress":
      return t.which !== 32 ? null : ((ip = !0), np);
    case "textInput":
      return (e = t.data), e === np && ip ? null : e;
    default:
      return null;
  }
}
function sk(e, t) {
  if (wi)
    return e === "compositionend" || (!mf && Tv(e, t))
      ? ((e = Pv()), (po = ff = en = null), (wi = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ov && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ak = {
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
  week: !0,
};
function sp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ak[e.type] : t === "textarea";
}
function Rv(e, t, r, n) {
  lv(n),
    (t = Uo(t, "onChange")),
    0 < t.length &&
      ((r = new hf("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var js = null,
  ia = null;
function ok(e) {
  Bv(e, 0);
}
function Pl(e) {
  var t = _i(e);
  if (tv(t)) return e;
}
function lk(e, t) {
  if (e === "change") return t;
}
var Dv = !1;
if (Ar) {
  var Cu;
  if (Ar) {
    var Eu = "oninput" in document;
    if (!Eu) {
      var ap = document.createElement("div");
      ap.setAttribute("oninput", "return;"),
        (Eu = typeof ap.oninput == "function");
    }
    Cu = Eu;
  } else Cu = !1;
  Dv = Cu && (!document.documentMode || 9 < document.documentMode);
}
function op() {
  js && (js.detachEvent("onpropertychange", Nv), (ia = js = null));
}
function Nv(e) {
  if (e.propertyName === "value" && Pl(ia)) {
    var t = [];
    Rv(t, ia, e, of(e)), fv(ok, t);
  }
}
function uk(e, t, r) {
  e === "focusin"
    ? (op(), (js = t), (ia = r), js.attachEvent("onpropertychange", Nv))
    : e === "focusout" && op();
}
function ck(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Pl(ia);
}
function dk(e, t) {
  if (e === "click") return Pl(t);
}
function fk(e, t) {
  if (e === "input" || e === "change") return Pl(t);
}
function hk(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ur = typeof Object.is == "function" ? Object.is : hk;
function sa(e, t) {
  if (ur(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!pc.call(t, i) || !ur(e[i], t[i])) return !1;
  }
  return !0;
}
function lp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function up(e, t) {
  var r = lp(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = lp(r);
  }
}
function Iv(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Iv(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function $v() {
  for (var e = window, t = No(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = No(e.document);
  }
  return t;
}
function gf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function pk(e) {
  var t = $v(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    Iv(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && gf(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = r.textContent.length,
          s = Math.min(n.start, i);
        (n = n.end === void 0 ? s : Math.min(n.end, i)),
          !e.extend && s > n && ((i = n), (n = s), (s = i)),
          (i = up(r, s));
        var a = up(r, n);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > n
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var mk = Ar && "documentMode" in document && 11 >= document.documentMode,
  bi = null,
  Nc = null,
  Us = null,
  Ic = !1;
function cp(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Ic ||
    bi == null ||
    bi !== No(n) ||
    ((n = bi),
    "selectionStart" in n && gf(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (Us && sa(Us, n)) ||
      ((Us = n),
      (n = Uo(Nc, "onSelect")),
      0 < n.length &&
        ((t = new hf("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = bi))));
}
function qa(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var ki = {
    animationend: qa("Animation", "AnimationEnd"),
    animationiteration: qa("Animation", "AnimationIteration"),
    animationstart: qa("Animation", "AnimationStart"),
    transitionend: qa("Transition", "TransitionEnd"),
  },
  Pu = {},
  Lv = {};
Ar &&
  ((Lv = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ki.animationend.animation,
    delete ki.animationiteration.animation,
    delete ki.animationstart.animation),
  "TransitionEvent" in window || delete ki.transitionend.transition);
function Ol(e) {
  if (Pu[e]) return Pu[e];
  if (!ki[e]) return e;
  var t = ki[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in Lv) return (Pu[e] = t[r]);
  return e;
}
var Mv = Ol("animationend"),
  Fv = Ol("animationiteration"),
  jv = Ol("animationstart"),
  Uv = Ol("transitionend"),
  zv = new Map(),
  dp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Sn(e, t) {
  zv.set(e, t), ti(t, [e]);
}
for (var Ou = 0; Ou < dp.length; Ou++) {
  var Tu = dp[Ou],
    gk = Tu.toLowerCase(),
    vk = Tu[0].toUpperCase() + Tu.slice(1);
  Sn(gk, "on" + vk);
}
Sn(Mv, "onAnimationEnd");
Sn(Fv, "onAnimationIteration");
Sn(jv, "onAnimationStart");
Sn("dblclick", "onDoubleClick");
Sn("focusin", "onFocus");
Sn("focusout", "onBlur");
Sn(Uv, "onTransitionEnd");
zi("onMouseEnter", ["mouseout", "mouseover"]);
zi("onMouseLeave", ["mouseout", "mouseover"]);
zi("onPointerEnter", ["pointerout", "pointerover"]);
zi("onPointerLeave", ["pointerout", "pointerover"]);
ti(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ti(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ti("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ti(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ti(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ti(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Rs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  yk = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rs));
function fp(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), gb(n, t, void 0, e), (e.currentTarget = null);
}
function Bv(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      i = n.event;
    n = n.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var a = n.length - 1; 0 <= a; a--) {
          var o = n[a],
            l = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), l !== s && i.isPropagationStopped())) break e;
          fp(i, o, u), (s = l);
        }
      else
        for (a = 0; a < n.length; a++) {
          if (
            ((o = n[a]),
            (l = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          fp(i, o, u), (s = l);
        }
    }
  }
  if ($o) throw ((e = Tc), ($o = !1), (Tc = null), e);
}
function Ee(e, t) {
  var r = t[jc];
  r === void 0 && (r = t[jc] = new Set());
  var n = e + "__bubble";
  r.has(n) || (Wv(t, e, 2, !1), r.add(n));
}
function Au(e, t, r) {
  var n = 0;
  t && (n |= 4), Wv(r, e, n, t);
}
var Qa = "_reactListening" + Math.random().toString(36).slice(2);
function aa(e) {
  if (!e[Qa]) {
    (e[Qa] = !0),
      Kg.forEach(function (r) {
        r !== "selectionchange" && (yk.has(r) || Au(r, !1, e), Au(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qa] || ((t[Qa] = !0), Au("selectionchange", !1, t));
  }
}
function Wv(e, t, r, n) {
  switch (Ev(t)) {
    case 1:
      var i = Db;
      break;
    case 4:
      i = Nb;
      break;
    default:
      i = df;
  }
  (r = i.bind(null, t, r, e)),
    (i = void 0),
    !Oc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    n
      ? i !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: i })
        : e.addEventListener(t, r, !0)
      : i !== void 0
      ? e.addEventListener(t, r, { passive: i })
      : e.addEventListener(t, r, !1);
}
function Ru(e, t, r, n, i) {
  var s = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var a = n.tag;
      if (a === 3 || a === 4) {
        var o = n.stateNode.containerInfo;
        if (o === i || (o.nodeType === 8 && o.parentNode === i)) break;
        if (a === 4)
          for (a = n.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; o !== null; ) {
          if (((a = Mn(o)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            n = s = a;
            continue e;
          }
          o = o.parentNode;
        }
      }
      n = n.return;
    }
  fv(function () {
    var u = s,
      c = of(r),
      d = [];
    e: {
      var h = zv.get(e);
      if (h !== void 0) {
        var m = hf,
          y = e;
        switch (e) {
          case "keypress":
            if (mo(r) === 0) break e;
          case "keydown":
          case "keyup":
            m = Yb;
            break;
          case "focusin":
            (y = "focus"), (m = xu);
            break;
          case "focusout":
            (y = "blur"), (m = xu);
            break;
          case "beforeblur":
          case "afterblur":
            m = xu;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = ep;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = Lb;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Xb;
            break;
          case Mv:
          case Fv:
          case jv:
            m = jb;
            break;
          case Uv:
            m = Zb;
            break;
          case "scroll":
            m = Ib;
            break;
          case "wheel":
            m = tk;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = zb;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = rp;
        }
        var w = (t & 4) !== 0,
          k = !w && e === "scroll",
          p = w ? (h !== null ? h + "Capture" : null) : h;
        w = [];
        for (var f = u, v; f !== null; ) {
          v = f;
          var _ = v.stateNode;
          if (
            (v.tag === 5 &&
              _ !== null &&
              ((v = _),
              p !== null && ((_ = ea(f, p)), _ != null && w.push(oa(f, _, v)))),
            k)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((h = new m(h, y, null, r, c)), d.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          h &&
            r !== Ec &&
            (y = r.relatedTarget || r.fromElement) &&
            (Mn(y) || y[Rr]))
        )
          break e;
        if (
          (m || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          m
            ? ((y = r.relatedTarget || r.toElement),
              (m = u),
              (y = y ? Mn(y) : null),
              y !== null &&
                ((k = ri(y)), y !== k || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = u)),
          m !== y)
        ) {
          if (
            ((w = ep),
            (_ = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = rp),
              (_ = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (k = m == null ? h : _i(m)),
            (v = y == null ? h : _i(y)),
            (h = new w(_, f + "leave", m, r, c)),
            (h.target = k),
            (h.relatedTarget = v),
            (_ = null),
            Mn(c) === u &&
              ((w = new w(p, f + "enter", y, r, c)),
              (w.target = v),
              (w.relatedTarget = k),
              (_ = w)),
            (k = _),
            m && y)
          )
            t: {
              for (w = m, p = y, f = 0, v = w; v; v = ai(v)) f++;
              for (v = 0, _ = p; _; _ = ai(_)) v++;
              for (; 0 < f - v; ) (w = ai(w)), f--;
              for (; 0 < v - f; ) (p = ai(p)), v--;
              for (; f--; ) {
                if (w === p || (p !== null && w === p.alternate)) break t;
                (w = ai(w)), (p = ai(p));
              }
              w = null;
            }
          else w = null;
          m !== null && hp(d, h, m, w, !1),
            y !== null && k !== null && hp(d, k, y, w, !0);
        }
      }
      e: {
        if (
          ((h = u ? _i(u) : window),
          (m = h.nodeName && h.nodeName.toLowerCase()),
          m === "select" || (m === "input" && h.type === "file"))
        )
          var S = lk;
        else if (sp(h))
          if (Dv) S = fk;
          else {
            S = ck;
            var R = uk;
          }
        else
          (m = h.nodeName) &&
            m.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (S = dk);
        if (S && (S = S(e, u))) {
          Rv(d, S, r, c);
          break e;
        }
        R && R(e, h, u),
          e === "focusout" &&
            (R = h._wrapperState) &&
            R.controlled &&
            h.type === "number" &&
            kc(h, "number", h.value);
      }
      switch (((R = u ? _i(u) : window), e)) {
        case "focusin":
          (sp(R) || R.contentEditable === "true") &&
            ((bi = R), (Nc = u), (Us = null));
          break;
        case "focusout":
          Us = Nc = bi = null;
          break;
        case "mousedown":
          Ic = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ic = !1), cp(d, r, c);
          break;
        case "selectionchange":
          if (mk) break;
        case "keydown":
        case "keyup":
          cp(d, r, c);
      }
      var O;
      if (mf)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        wi
          ? Tv(e, r) && (T = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Ov &&
          r.locale !== "ko" &&
          (wi || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && wi && (O = Pv())
            : ((en = c),
              (ff = "value" in en ? en.value : en.textContent),
              (wi = !0))),
        (R = Uo(u, T)),
        0 < R.length &&
          ((T = new tp(T, e, null, r, c)),
          d.push({ event: T, listeners: R }),
          O ? (T.data = O) : ((O = Av(r)), O !== null && (T.data = O)))),
        (O = nk ? ik(e, r) : sk(e, r)) &&
          ((u = Uo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new tp("onBeforeInput", "beforeinput", null, r, c)),
            d.push({ event: c, listeners: u }),
            (c.data = O)));
    }
    Bv(d, t);
  });
}
function oa(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Uo(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = ea(e, r)),
      s != null && n.unshift(oa(e, s, i)),
      (s = ea(e, t)),
      s != null && n.push(oa(e, s, i))),
      (e = e.return);
  }
  return n;
}
function ai(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function hp(e, t, r, n, i) {
  for (var s = t._reactName, a = []; r !== null && r !== n; ) {
    var o = r,
      l = o.alternate,
      u = o.stateNode;
    if (l !== null && l === n) break;
    o.tag === 5 &&
      u !== null &&
      ((o = u),
      i
        ? ((l = ea(r, s)), l != null && a.unshift(oa(r, l, o)))
        : i || ((l = ea(r, s)), l != null && a.push(oa(r, l, o)))),
      (r = r.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var wk = /\r\n?/g,
  bk = /\u0000|\uFFFD/g;
function pp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      wk,
      `
`
    )
    .replace(bk, "");
}
function Ya(e, t, r) {
  if (((t = pp(t)), pp(e) !== t && r)) throw Error(I(425));
}
function zo() {}
var $c = null,
  Lc = null;
function Mc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Fc = typeof setTimeout == "function" ? setTimeout : void 0,
  kk = typeof clearTimeout == "function" ? clearTimeout : void 0,
  mp = typeof Promise == "function" ? Promise : void 0,
  _k =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof mp < "u"
      ? function (e) {
          return mp.resolve(null).then(e).catch(Sk);
        }
      : Fc;
function Sk(e) {
  setTimeout(function () {
    throw e;
  });
}
function Du(e, t) {
  var r = t,
    n = 0;
  do {
    var i = r.nextSibling;
    if ((e.removeChild(r), i && i.nodeType === 8))
      if (((r = i.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(i), na(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = i;
  } while (r);
  na(t);
}
function un(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function gp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var rs = Math.random().toString(36).slice(2),
  hr = "__reactFiber$" + rs,
  la = "__reactProps$" + rs,
  Rr = "__reactContainer$" + rs,
  jc = "__reactEvents$" + rs,
  xk = "__reactListeners$" + rs,
  Ck = "__reactHandles$" + rs;
function Mn(e) {
  var t = e[hr];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[Rr] || r[hr])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = gp(e); e !== null; ) {
          if ((r = e[hr])) return r;
          e = gp(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function Ca(e) {
  return (
    (e = e[hr] || e[Rr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function _i(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function Tl(e) {
  return e[la] || null;
}
var Uc = [],
  Si = -1;
function xn(e) {
  return { current: e };
}
function Oe(e) {
  0 > Si || ((e.current = Uc[Si]), (Uc[Si] = null), Si--);
}
function xe(e, t) {
  Si++, (Uc[Si] = e.current), (e.current = t);
}
var yn = {},
  ot = xn(yn),
  wt = xn(!1),
  Qn = yn;
function Bi(e, t) {
  var r = e.type.contextTypes;
  if (!r) return yn;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in r) i[s] = t[s];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function bt(e) {
  return (e = e.childContextTypes), e != null;
}
function Bo() {
  Oe(wt), Oe(ot);
}
function vp(e, t, r) {
  if (ot.current !== yn) throw Error(I(168));
  xe(ot, t), xe(wt, r);
}
function Vv(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(I(108, ub(e) || "Unknown", i));
  return $e({}, r, n);
}
function Wo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yn),
    (Qn = ot.current),
    xe(ot, e),
    xe(wt, wt.current),
    !0
  );
}
function yp(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(I(169));
  r
    ? ((e = Vv(e, t, Qn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      Oe(wt),
      Oe(ot),
      xe(ot, e))
    : Oe(wt),
    xe(wt, r);
}
var Er = null,
  Al = !1,
  Nu = !1;
function Hv(e) {
  Er === null ? (Er = [e]) : Er.push(e);
}
function Ek(e) {
  (Al = !0), Hv(e);
}
function Cn() {
  if (!Nu && Er !== null) {
    Nu = !0;
    var e = 0,
      t = ye;
    try {
      var r = Er;
      for (ye = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (Er = null), (Al = !1);
    } catch (i) {
      throw (Er !== null && (Er = Er.slice(e + 1)), gv(lf, Cn), i);
    } finally {
      (ye = t), (Nu = !1);
    }
  }
  return null;
}
var xi = [],
  Ci = 0,
  Vo = null,
  Ho = 0,
  Ut = [],
  zt = 0,
  Yn = null,
  Pr = 1,
  Or = "";
function An(e, t) {
  (xi[Ci++] = Ho), (xi[Ci++] = Vo), (Vo = e), (Ho = t);
}
function qv(e, t, r) {
  (Ut[zt++] = Pr), (Ut[zt++] = Or), (Ut[zt++] = Yn), (Yn = e);
  var n = Pr;
  e = Or;
  var i = 32 - or(n) - 1;
  (n &= ~(1 << i)), (r += 1);
  var s = 32 - or(t) + i;
  if (30 < s) {
    var a = i - (i % 5);
    (s = (n & ((1 << a) - 1)).toString(32)),
      (n >>= a),
      (i -= a),
      (Pr = (1 << (32 - or(t) + i)) | (r << i) | n),
      (Or = s + e);
  } else (Pr = (1 << s) | (r << i) | n), (Or = e);
}
function vf(e) {
  e.return !== null && (An(e, 1), qv(e, 1, 0));
}
function yf(e) {
  for (; e === Vo; )
    (Vo = xi[--Ci]), (xi[Ci] = null), (Ho = xi[--Ci]), (xi[Ci] = null);
  for (; e === Yn; )
    (Yn = Ut[--zt]),
      (Ut[zt] = null),
      (Or = Ut[--zt]),
      (Ut[zt] = null),
      (Pr = Ut[--zt]),
      (Ut[zt] = null);
}
var Ot = null,
  Pt = null,
  Re = !1,
  ir = null;
function Qv(e, t) {
  var r = Wt(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function wp(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ot = e), (Pt = un(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ot = e), (Pt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Yn !== null ? { id: Pr, overflow: Or } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Wt(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Ot = e),
            (Pt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function zc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Bc(e) {
  if (Re) {
    var t = Pt;
    if (t) {
      var r = t;
      if (!wp(e, t)) {
        if (zc(e)) throw Error(I(418));
        t = un(r.nextSibling);
        var n = Ot;
        t && wp(e, t)
          ? Qv(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (Re = !1), (Ot = e));
      }
    } else {
      if (zc(e)) throw Error(I(418));
      (e.flags = (e.flags & -4097) | 2), (Re = !1), (Ot = e);
    }
  }
}
function bp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ot = e;
}
function Ga(e) {
  if (e !== Ot) return !1;
  if (!Re) return bp(e), (Re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Mc(e.type, e.memoizedProps))),
    t && (t = Pt))
  ) {
    if (zc(e)) throw (Yv(), Error(I(418)));
    for (; t; ) Qv(e, t), (t = un(t.nextSibling));
  }
  if ((bp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Pt = un(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Pt = null;
    }
  } else Pt = Ot ? un(e.stateNode.nextSibling) : null;
  return !0;
}
function Yv() {
  for (var e = Pt; e; ) e = un(e.nextSibling);
}
function Wi() {
  (Pt = Ot = null), (Re = !1);
}
function wf(e) {
  ir === null ? (ir = [e]) : ir.push(e);
}
var Pk = Mr.ReactCurrentBatchConfig;
function tr(e, t) {
  if (e && e.defaultProps) {
    (t = $e({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var qo = xn(null),
  Qo = null,
  Ei = null,
  bf = null;
function kf() {
  bf = Ei = Qo = null;
}
function _f(e) {
  var t = qo.current;
  Oe(qo), (e._currentValue = t);
}
function Wc(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function Mi(e, t) {
  (Qo = e),
    (bf = Ei = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (vt = !0), (e.firstContext = null));
}
function Gt(e) {
  var t = e._currentValue;
  if (bf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ei === null)) {
      if (Qo === null) throw Error(I(308));
      (Ei = e), (Qo.dependencies = { lanes: 0, firstContext: e });
    } else Ei = Ei.next = e;
  return t;
}
var Fn = null;
function Sf(e) {
  Fn === null ? (Fn = [e]) : Fn.push(e);
}
function Gv(e, t, r, n) {
  var i = t.interleaved;
  return (
    i === null ? ((r.next = r), Sf(t)) : ((r.next = i.next), (i.next = r)),
    (t.interleaved = r),
    Dr(e, n)
  );
}
function Dr(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var qr = !1;
function xf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Kv(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Tr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function cn(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), ce & 2)) {
    var i = n.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (n.pending = t),
      Dr(e, r)
    );
  }
  return (
    (i = n.interleaved),
    i === null ? ((t.next = t), Sf(n)) : ((t.next = i.next), (i.next = t)),
    (n.interleaved = t),
    Dr(e, r)
  );
}
function go(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), uf(e, r);
  }
}
function kp(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var i = null,
      s = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var a = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        s === null ? (i = s = a) : (s = s.next = a), (r = r.next);
      } while (r !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function Yo(e, t, r, n) {
  var i = e.updateQueue;
  qr = !1;
  var s = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    o = i.shared.pending;
  if (o !== null) {
    i.shared.pending = null;
    var l = o,
      u = l.next;
    (l.next = null), a === null ? (s = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (o = c.lastBaseUpdate),
      o !== a &&
        (o === null ? (c.firstBaseUpdate = u) : (o.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = i.baseState;
    (a = 0), (c = u = l = null), (o = s);
    do {
      var h = o.lane,
        m = o.eventTime;
      if ((n & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var y = e,
            w = o;
          switch (((h = t), (m = r), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                d = y.call(m, d, h);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (h = typeof y == "function" ? y.call(m, d, h) : y),
                h == null)
              )
                break e;
              d = $e({}, d, h);
              break e;
            case 2:
              qr = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [o]) : h.push(o));
      } else
        (m = {
          eventTime: m,
          lane: h,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (l = d)) : (c = c.next = m),
          (a |= h);
      if (((o = o.next), o === null)) {
        if (((o = i.shared.pending), o === null)) break;
        (h = o),
          (o = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Kn |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function _p(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        i = n.callback;
      if (i !== null) {
        if (((n.callback = null), (n = r), typeof i != "function"))
          throw Error(I(191, i));
        i.call(n);
      }
    }
}
var Xv = new Gg.Component().refs;
function Vc(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : $e({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Rl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ri(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = ht(),
      i = fn(e),
      s = Tr(n, i);
    (s.payload = t),
      r != null && (s.callback = r),
      (t = cn(e, s, i)),
      t !== null && (lr(t, e, i, n), go(t, e, i));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = ht(),
      i = fn(e),
      s = Tr(n, i);
    (s.tag = 1),
      (s.payload = t),
      r != null && (s.callback = r),
      (t = cn(e, s, i)),
      t !== null && (lr(t, e, i, n), go(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = ht(),
      n = fn(e),
      i = Tr(r, n);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = cn(e, i, n)),
      t !== null && (lr(t, e, n, r), go(t, e, n));
  },
};
function Sp(e, t, r, n, i, s, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, s, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !sa(r, n) || !sa(i, s)
      : !0
  );
}
function Jv(e, t, r) {
  var n = !1,
    i = yn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Gt(s))
      : ((i = bt(t) ? Qn : ot.current),
        (n = t.contextTypes),
        (s = (n = n != null) ? Bi(e, i) : yn)),
    (t = new t(r, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Rl),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function xp(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Rl.enqueueReplaceState(t, t.state, null);
}
function Hc(e, t, r, n) {
  var i = e.stateNode;
  (i.props = r), (i.state = e.memoizedState), (i.refs = Xv), xf(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Gt(s))
    : ((s = bt(t) ? Qn : ot.current), (i.context = Bi(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Vc(e, t, s, r), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Rl.enqueueReplaceState(i, i.state, null),
      Yo(e, r, i, n),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ms(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(I(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(I(147, e));
      var i = n,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (a) {
            var o = i.refs;
            o === Xv && (o = i.refs = {}),
              a === null ? delete o[s] : (o[s] = a);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!r._owner) throw Error(I(290, e));
  }
  return e;
}
function Ka(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      I(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Cp(e) {
  var t = e._init;
  return t(e._payload);
}
function Zv(e) {
  function t(p, f) {
    if (e) {
      var v = p.deletions;
      v === null ? ((p.deletions = [f]), (p.flags |= 16)) : v.push(f);
    }
  }
  function r(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function n(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function i(p, f) {
    return (p = hn(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, f, v) {
    return (
      (p.index = v),
      e
        ? ((v = p.alternate),
          v !== null
            ? ((v = v.index), v < f ? ((p.flags |= 2), f) : v)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function a(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function o(p, f, v, _) {
    return f === null || f.tag !== 6
      ? ((f = Uu(v, p.mode, _)), (f.return = p), f)
      : ((f = i(f, v)), (f.return = p), f);
  }
  function l(p, f, v, _) {
    var S = v.type;
    return S === yi
      ? c(p, f, v.props.children, _, v.key)
      : f !== null &&
        (f.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Hr &&
            Cp(S) === f.type))
      ? ((_ = i(f, v.props)), (_.ref = ms(p, f, v)), (_.return = p), _)
      : ((_ = _o(v.type, v.key, v.props, null, p.mode, _)),
        (_.ref = ms(p, f, v)),
        (_.return = p),
        _);
  }
  function u(p, f, v, _) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== v.containerInfo ||
      f.stateNode.implementation !== v.implementation
      ? ((f = zu(v, p.mode, _)), (f.return = p), f)
      : ((f = i(f, v.children || [])), (f.return = p), f);
  }
  function c(p, f, v, _, S) {
    return f === null || f.tag !== 7
      ? ((f = Vn(v, p.mode, _, S)), (f.return = p), f)
      : ((f = i(f, v)), (f.return = p), f);
  }
  function d(p, f, v) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Uu("" + f, p.mode, v)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ja:
          return (
            (v = _o(f.type, f.key, f.props, null, p.mode, v)),
            (v.ref = ms(p, null, f)),
            (v.return = p),
            v
          );
        case vi:
          return (f = zu(f, p.mode, v)), (f.return = p), f;
        case Hr:
          var _ = f._init;
          return d(p, _(f._payload), v);
      }
      if (Ts(f) || cs(f))
        return (f = Vn(f, p.mode, v, null)), (f.return = p), f;
      Ka(p, f);
    }
    return null;
  }
  function h(p, f, v, _) {
    var S = f !== null ? f.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return S !== null ? null : o(p, f, "" + v, _);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ja:
          return v.key === S ? l(p, f, v, _) : null;
        case vi:
          return v.key === S ? u(p, f, v, _) : null;
        case Hr:
          return (S = v._init), h(p, f, S(v._payload), _);
      }
      if (Ts(v) || cs(v)) return S !== null ? null : c(p, f, v, _, null);
      Ka(p, v);
    }
    return null;
  }
  function m(p, f, v, _, S) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (p = p.get(v) || null), o(f, p, "" + _, S);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case ja:
          return (p = p.get(_.key === null ? v : _.key) || null), l(f, p, _, S);
        case vi:
          return (p = p.get(_.key === null ? v : _.key) || null), u(f, p, _, S);
        case Hr:
          var R = _._init;
          return m(p, f, v, R(_._payload), S);
      }
      if (Ts(_) || cs(_)) return (p = p.get(v) || null), c(f, p, _, S, null);
      Ka(f, _);
    }
    return null;
  }
  function y(p, f, v, _) {
    for (
      var S = null, R = null, O = f, T = (f = 0), q = null;
      O !== null && T < v.length;
      T++
    ) {
      O.index > T ? ((q = O), (O = null)) : (q = O.sibling);
      var z = h(p, O, v[T], _);
      if (z === null) {
        O === null && (O = q);
        break;
      }
      e && O && z.alternate === null && t(p, O),
        (f = s(z, f, T)),
        R === null ? (S = z) : (R.sibling = z),
        (R = z),
        (O = q);
    }
    if (T === v.length) return r(p, O), Re && An(p, T), S;
    if (O === null) {
      for (; T < v.length; T++)
        (O = d(p, v[T], _)),
          O !== null &&
            ((f = s(O, f, T)), R === null ? (S = O) : (R.sibling = O), (R = O));
      return Re && An(p, T), S;
    }
    for (O = n(p, O); T < v.length; T++)
      (q = m(O, p, T, v[T], _)),
        q !== null &&
          (e && q.alternate !== null && O.delete(q.key === null ? T : q.key),
          (f = s(q, f, T)),
          R === null ? (S = q) : (R.sibling = q),
          (R = q));
    return (
      e &&
        O.forEach(function (he) {
          return t(p, he);
        }),
      Re && An(p, T),
      S
    );
  }
  function w(p, f, v, _) {
    var S = cs(v);
    if (typeof S != "function") throw Error(I(150));
    if (((v = S.call(v)), v == null)) throw Error(I(151));
    for (
      var R = (S = null), O = f, T = (f = 0), q = null, z = v.next();
      O !== null && !z.done;
      T++, z = v.next()
    ) {
      O.index > T ? ((q = O), (O = null)) : (q = O.sibling);
      var he = h(p, O, z.value, _);
      if (he === null) {
        O === null && (O = q);
        break;
      }
      e && O && he.alternate === null && t(p, O),
        (f = s(he, f, T)),
        R === null ? (S = he) : (R.sibling = he),
        (R = he),
        (O = q);
    }
    if (z.done) return r(p, O), Re && An(p, T), S;
    if (O === null) {
      for (; !z.done; T++, z = v.next())
        (z = d(p, z.value, _)),
          z !== null &&
            ((f = s(z, f, T)), R === null ? (S = z) : (R.sibling = z), (R = z));
      return Re && An(p, T), S;
    }
    for (O = n(p, O); !z.done; T++, z = v.next())
      (z = m(O, p, T, z.value, _)),
        z !== null &&
          (e && z.alternate !== null && O.delete(z.key === null ? T : z.key),
          (f = s(z, f, T)),
          R === null ? (S = z) : (R.sibling = z),
          (R = z));
    return (
      e &&
        O.forEach(function (V) {
          return t(p, V);
        }),
      Re && An(p, T),
      S
    );
  }
  function k(p, f, v, _) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === yi &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case ja:
          e: {
            for (var S = v.key, R = f; R !== null; ) {
              if (R.key === S) {
                if (((S = v.type), S === yi)) {
                  if (R.tag === 7) {
                    r(p, R.sibling),
                      (f = i(R, v.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  R.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Hr &&
                    Cp(S) === R.type)
                ) {
                  r(p, R.sibling),
                    (f = i(R, v.props)),
                    (f.ref = ms(p, R, v)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                r(p, R);
                break;
              } else t(p, R);
              R = R.sibling;
            }
            v.type === yi
              ? ((f = Vn(v.props.children, p.mode, _, v.key)),
                (f.return = p),
                (p = f))
              : ((_ = _o(v.type, v.key, v.props, null, p.mode, _)),
                (_.ref = ms(p, f, v)),
                (_.return = p),
                (p = _));
          }
          return a(p);
        case vi:
          e: {
            for (R = v.key; f !== null; ) {
              if (f.key === R)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === v.containerInfo &&
                  f.stateNode.implementation === v.implementation
                ) {
                  r(p, f.sibling),
                    (f = i(f, v.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  r(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = zu(v, p.mode, _)), (f.return = p), (p = f);
          }
          return a(p);
        case Hr:
          return (R = v._init), k(p, f, R(v._payload), _);
      }
      if (Ts(v)) return y(p, f, v, _);
      if (cs(v)) return w(p, f, v, _);
      Ka(p, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        f !== null && f.tag === 6
          ? (r(p, f.sibling), (f = i(f, v)), (f.return = p), (p = f))
          : (r(p, f), (f = Uu(v, p.mode, _)), (f.return = p), (p = f)),
        a(p))
      : r(p, f);
  }
  return k;
}
var Vi = Zv(!0),
  e0 = Zv(!1),
  Ea = {},
  wr = xn(Ea),
  ua = xn(Ea),
  ca = xn(Ea);
function jn(e) {
  if (e === Ea) throw Error(I(174));
  return e;
}
function Cf(e, t) {
  switch ((xe(ca, t), xe(ua, e), xe(wr, Ea), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Sc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Sc(t, e));
  }
  Oe(wr), xe(wr, t);
}
function Hi() {
  Oe(wr), Oe(ua), Oe(ca);
}
function t0(e) {
  jn(ca.current);
  var t = jn(wr.current),
    r = Sc(t, e.type);
  t !== r && (xe(ua, e), xe(wr, r));
}
function Ef(e) {
  ua.current === e && (Oe(wr), Oe(ua));
}
var Ne = xn(0);
function Go(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Iu = [];
function Pf() {
  for (var e = 0; e < Iu.length; e++)
    Iu[e]._workInProgressVersionPrimary = null;
  Iu.length = 0;
}
var vo = Mr.ReactCurrentDispatcher,
  $u = Mr.ReactCurrentBatchConfig,
  Gn = 0,
  Ie = null,
  Ve = null,
  Qe = null,
  Ko = !1,
  zs = !1,
  da = 0,
  Ok = 0;
function nt() {
  throw Error(I(321));
}
function Of(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!ur(e[r], t[r])) return !1;
  return !0;
}
function Tf(e, t, r, n, i, s) {
  if (
    ((Gn = s),
    (Ie = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (vo.current = e === null || e.memoizedState === null ? Dk : Nk),
    (e = r(n, i)),
    zs)
  ) {
    s = 0;
    do {
      if (((zs = !1), (da = 0), 25 <= s)) throw Error(I(301));
      (s += 1),
        (Qe = Ve = null),
        (t.updateQueue = null),
        (vo.current = Ik),
        (e = r(n, i));
    } while (zs);
  }
  if (
    ((vo.current = Xo),
    (t = Ve !== null && Ve.next !== null),
    (Gn = 0),
    (Qe = Ve = Ie = null),
    (Ko = !1),
    t)
  )
    throw Error(I(300));
  return e;
}
function Af() {
  var e = da !== 0;
  return (da = 0), e;
}
function dr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Qe === null ? (Ie.memoizedState = Qe = e) : (Qe = Qe.next = e), Qe;
}
function Kt() {
  if (Ve === null) {
    var e = Ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ve.next;
  var t = Qe === null ? Ie.memoizedState : Qe.next;
  if (t !== null) (Qe = t), (Ve = e);
  else {
    if (e === null) throw Error(I(310));
    (Ve = e),
      (e = {
        memoizedState: Ve.memoizedState,
        baseState: Ve.baseState,
        baseQueue: Ve.baseQueue,
        queue: Ve.queue,
        next: null,
      }),
      Qe === null ? (Ie.memoizedState = Qe = e) : (Qe = Qe.next = e);
  }
  return Qe;
}
function fa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Lu(e) {
  var t = Kt(),
    r = t.queue;
  if (r === null) throw Error(I(311));
  r.lastRenderedReducer = e;
  var n = Ve,
    i = n.baseQueue,
    s = r.pending;
  if (s !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = s.next), (s.next = a);
    }
    (n.baseQueue = i = s), (r.pending = null);
  }
  if (i !== null) {
    (s = i.next), (n = n.baseState);
    var o = (a = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((Gn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((o = l = d), (a = n)) : (l = l.next = d),
          (Ie.lanes |= c),
          (Kn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (a = n) : (l.next = o),
      ur(n, t.memoizedState) || (vt = !0),
      (t.memoizedState = n),
      (t.baseState = a),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (Ie.lanes |= s), (Kn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Mu(e) {
  var t = Kt(),
    r = t.queue;
  if (r === null) throw Error(I(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    i = r.pending,
    s = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var a = (i = i.next);
    do (s = e(s, a.action)), (a = a.next);
    while (a !== i);
    ur(s, t.memoizedState) || (vt = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (r.lastRenderedState = s);
  }
  return [s, n];
}
function r0() {}
function n0(e, t) {
  var r = Ie,
    n = Kt(),
    i = t(),
    s = !ur(n.memoizedState, i);
  if (
    (s && ((n.memoizedState = i), (vt = !0)),
    (n = n.queue),
    Rf(a0.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || s || (Qe !== null && Qe.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      ha(9, s0.bind(null, r, n, i, t), void 0, null),
      Ye === null)
    )
      throw Error(I(349));
    Gn & 30 || i0(r, t, i);
  }
  return i;
}
function i0(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = Ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ie.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function s0(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), o0(t) && l0(e);
}
function a0(e, t, r) {
  return r(function () {
    o0(t) && l0(e);
  });
}
function o0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !ur(e, r);
  } catch {
    return !0;
  }
}
function l0(e) {
  var t = Dr(e, 1);
  t !== null && lr(t, e, 1, -1);
}
function Ep(e) {
  var t = dr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fa,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Rk.bind(null, Ie, e)),
    [t.memoizedState, e]
  );
}
function ha(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = Ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ie.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function u0() {
  return Kt().memoizedState;
}
function yo(e, t, r, n) {
  var i = dr();
  (Ie.flags |= e),
    (i.memoizedState = ha(1 | t, r, void 0, n === void 0 ? null : n));
}
function Dl(e, t, r, n) {
  var i = Kt();
  n = n === void 0 ? null : n;
  var s = void 0;
  if (Ve !== null) {
    var a = Ve.memoizedState;
    if (((s = a.destroy), n !== null && Of(n, a.deps))) {
      i.memoizedState = ha(t, r, s, n);
      return;
    }
  }
  (Ie.flags |= e), (i.memoizedState = ha(1 | t, r, s, n));
}
function Pp(e, t) {
  return yo(8390656, 8, e, t);
}
function Rf(e, t) {
  return Dl(2048, 8, e, t);
}
function c0(e, t) {
  return Dl(4, 2, e, t);
}
function d0(e, t) {
  return Dl(4, 4, e, t);
}
function f0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function h0(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), Dl(4, 4, f0.bind(null, t, e), r)
  );
}
function Df() {}
function p0(e, t) {
  var r = Kt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Of(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function m0(e, t) {
  var r = Kt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Of(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function g0(e, t, r) {
  return Gn & 21
    ? (ur(r, t) || ((r = wv()), (Ie.lanes |= r), (Kn |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (vt = !0)), (e.memoizedState = r));
}
function Tk(e, t) {
  var r = ye;
  (ye = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = $u.transition;
  $u.transition = {};
  try {
    e(!1), t();
  } finally {
    (ye = r), ($u.transition = n);
  }
}
function v0() {
  return Kt().memoizedState;
}
function Ak(e, t, r) {
  var n = fn(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    y0(e))
  )
    w0(t, r);
  else if (((r = Gv(e, t, r, n)), r !== null)) {
    var i = ht();
    lr(r, e, n, i), b0(r, t, n);
  }
}
function Rk(e, t, r) {
  var n = fn(e),
    i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (y0(e)) w0(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var a = t.lastRenderedState,
          o = s(a, r);
        if (((i.hasEagerState = !0), (i.eagerState = o), ur(o, a))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Sf(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (r = Gv(e, t, i, n)),
      r !== null && ((i = ht()), lr(r, e, n, i), b0(r, t, n));
  }
}
function y0(e) {
  var t = e.alternate;
  return e === Ie || (t !== null && t === Ie);
}
function w0(e, t) {
  zs = Ko = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function b0(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), uf(e, r);
  }
}
var Xo = {
    readContext: Gt,
    useCallback: nt,
    useContext: nt,
    useEffect: nt,
    useImperativeHandle: nt,
    useInsertionEffect: nt,
    useLayoutEffect: nt,
    useMemo: nt,
    useReducer: nt,
    useRef: nt,
    useState: nt,
    useDebugValue: nt,
    useDeferredValue: nt,
    useTransition: nt,
    useMutableSource: nt,
    useSyncExternalStore: nt,
    useId: nt,
    unstable_isNewReconciler: !1,
  },
  Dk = {
    readContext: Gt,
    useCallback: function (e, t) {
      return (dr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Gt,
    useEffect: Pp,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        yo(4194308, 4, f0.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return yo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return yo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = dr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = dr();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = Ak.bind(null, Ie, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ep,
    useDebugValue: Df,
    useDeferredValue: function (e) {
      return (dr().memoizedState = e);
    },
    useTransition: function () {
      var e = Ep(!1),
        t = e[0];
      return (e = Tk.bind(null, e[1])), (dr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = Ie,
        i = dr();
      if (Re) {
        if (r === void 0) throw Error(I(407));
        r = r();
      } else {
        if (((r = t()), Ye === null)) throw Error(I(349));
        Gn & 30 || i0(n, t, r);
      }
      i.memoizedState = r;
      var s = { value: r, getSnapshot: t };
      return (
        (i.queue = s),
        Pp(a0.bind(null, n, s, e), [e]),
        (n.flags |= 2048),
        ha(9, s0.bind(null, n, s, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = dr(),
        t = Ye.identifierPrefix;
      if (Re) {
        var r = Or,
          n = Pr;
        (r = (n & ~(1 << (32 - or(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = da++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = Ok++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Nk = {
    readContext: Gt,
    useCallback: p0,
    useContext: Gt,
    useEffect: Rf,
    useImperativeHandle: h0,
    useInsertionEffect: c0,
    useLayoutEffect: d0,
    useMemo: m0,
    useReducer: Lu,
    useRef: u0,
    useState: function () {
      return Lu(fa);
    },
    useDebugValue: Df,
    useDeferredValue: function (e) {
      var t = Kt();
      return g0(t, Ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Lu(fa)[0],
        t = Kt().memoizedState;
      return [e, t];
    },
    useMutableSource: r0,
    useSyncExternalStore: n0,
    useId: v0,
    unstable_isNewReconciler: !1,
  },
  Ik = {
    readContext: Gt,
    useCallback: p0,
    useContext: Gt,
    useEffect: Rf,
    useImperativeHandle: h0,
    useInsertionEffect: c0,
    useLayoutEffect: d0,
    useMemo: m0,
    useReducer: Mu,
    useRef: u0,
    useState: function () {
      return Mu(fa);
    },
    useDebugValue: Df,
    useDeferredValue: function (e) {
      var t = Kt();
      return Ve === null ? (t.memoizedState = e) : g0(t, Ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Mu(fa)[0],
        t = Kt().memoizedState;
      return [e, t];
    },
    useMutableSource: r0,
    useSyncExternalStore: n0,
    useId: v0,
    unstable_isNewReconciler: !1,
  };
function qi(e, t) {
  try {
    var r = "",
      n = t;
    do (r += lb(n)), (n = n.return);
    while (n);
    var i = r;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Fu(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function qc(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var $k = typeof WeakMap == "function" ? WeakMap : Map;
function k0(e, t, r) {
  (r = Tr(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      Zo || ((Zo = !0), (rd = n)), qc(e, t);
    }),
    r
  );
}
function _0(e, t, r) {
  (r = Tr(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    (r.payload = function () {
      return n(i);
    }),
      (r.callback = function () {
        qc(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (r.callback = function () {
        qc(e, t),
          typeof n != "function" &&
            (dn === null ? (dn = new Set([this])) : dn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    r
  );
}
function Op(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new $k();
    var i = new Set();
    n.set(t, i);
  } else (i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i));
  i.has(r) || (i.add(r), (e = Gk.bind(null, e, t, r)), t.then(e, e));
}
function Tp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ap(e, t, r, n, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = Tr(-1, 1)), (t.tag = 2), cn(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var Lk = Mr.ReactCurrentOwner,
  vt = !1;
function ut(e, t, r, n) {
  t.child = e === null ? e0(t, null, r, n) : Vi(t, e.child, r, n);
}
function Rp(e, t, r, n, i) {
  r = r.render;
  var s = t.ref;
  return (
    Mi(t, i),
    (n = Tf(e, t, r, n, s, i)),
    (r = Af()),
    e !== null && !vt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Nr(e, t, i))
      : (Re && r && vf(t), (t.flags |= 1), ut(e, t, n, i), t.child)
  );
}
function Dp(e, t, r, n, i) {
  if (e === null) {
    var s = r.type;
    return typeof s == "function" &&
      !Uf(s) &&
      s.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), S0(e, t, s, n, i))
      : ((e = _o(r.type, null, n, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var a = s.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : sa), r(a, n) && e.ref === t.ref)
    )
      return Nr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = hn(s, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function S0(e, t, r, n, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (sa(s, n) && e.ref === t.ref)
      if (((vt = !1), (t.pendingProps = n = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (vt = !0);
      else return (t.lanes = e.lanes), Nr(e, t, i);
  }
  return Qc(e, t, r, n, i);
}
function x0(e, t, r) {
  var n = t.pendingProps,
    i = n.children,
    s = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        xe(Oi, Et),
        (Et |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          xe(Oi, Et),
          (Et |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = s !== null ? s.baseLanes : r),
        xe(Oi, Et),
        (Et |= n);
    }
  else
    s !== null ? ((n = s.baseLanes | r), (t.memoizedState = null)) : (n = r),
      xe(Oi, Et),
      (Et |= n);
  return ut(e, t, i, r), t.child;
}
function C0(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Qc(e, t, r, n, i) {
  var s = bt(r) ? Qn : ot.current;
  return (
    (s = Bi(t, s)),
    Mi(t, i),
    (r = Tf(e, t, r, n, s, i)),
    (n = Af()),
    e !== null && !vt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Nr(e, t, i))
      : (Re && n && vf(t), (t.flags |= 1), ut(e, t, r, i), t.child)
  );
}
function Np(e, t, r, n, i) {
  if (bt(r)) {
    var s = !0;
    Wo(t);
  } else s = !1;
  if ((Mi(t, i), t.stateNode === null))
    wo(e, t), Jv(t, r, n), Hc(t, r, n, i), (n = !0);
  else if (e === null) {
    var a = t.stateNode,
      o = t.memoizedProps;
    a.props = o;
    var l = a.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = Gt(u))
      : ((u = bt(r) ? Qn : ot.current), (u = Bi(t, u)));
    var c = r.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== n || l !== u) && xp(t, a, n, u)),
      (qr = !1);
    var h = t.memoizedState;
    (a.state = h),
      Yo(t, n, a, i),
      (l = t.memoizedState),
      o !== n || h !== l || wt.current || qr
        ? (typeof c == "function" && (Vc(t, r, c, n), (l = t.memoizedState)),
          (o = qr || Sp(t, r, o, n, h, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (a.props = n),
          (a.state = l),
          (a.context = u),
          (n = o))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (a = t.stateNode),
      Kv(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : tr(t.type, o)),
      (a.props = u),
      (d = t.pendingProps),
      (h = a.context),
      (l = r.contextType),
      typeof l == "object" && l !== null
        ? (l = Gt(l))
        : ((l = bt(r) ? Qn : ot.current), (l = Bi(t, l)));
    var m = r.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== d || h !== l) && xp(t, a, n, l)),
      (qr = !1),
      (h = t.memoizedState),
      (a.state = h),
      Yo(t, n, a, i);
    var y = t.memoizedState;
    o !== d || h !== y || wt.current || qr
      ? (typeof m == "function" && (Vc(t, r, m, n), (y = t.memoizedState)),
        (u = qr || Sp(t, r, u, n, h, y, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(n, y, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(n, y, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (o === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = y)),
        (a.props = n),
        (a.state = y),
        (a.context = l),
        (n = u))
      : (typeof a.componentDidUpdate != "function" ||
          (o === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return Yc(e, t, r, n, s, i);
}
function Yc(e, t, r, n, i, s) {
  C0(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a) return i && yp(t, r, !1), Nr(e, t, s);
  (n = t.stateNode), (Lk.current = t);
  var o =
    a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Vi(t, e.child, null, s)), (t.child = Vi(t, null, o, s)))
      : ut(e, t, o, s),
    (t.memoizedState = n.state),
    i && yp(t, r, !0),
    t.child
  );
}
function E0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? vp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && vp(e, t.context, !1),
    Cf(e, t.containerInfo);
}
function Ip(e, t, r, n, i) {
  return Wi(), wf(i), (t.flags |= 256), ut(e, t, r, n), t.child;
}
var Gc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Kc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function P0(e, t, r) {
  var n = t.pendingProps,
    i = Ne.current,
    s = !1,
    a = (t.flags & 128) !== 0,
    o;
  if (
    ((o = a) ||
      (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    o
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    xe(Ne, i & 1),
    e === null)
  )
    return (
      Bc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = n.children),
          (e = n.fallback),
          s
            ? ((n = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              !(n & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = $l(a, n, 0, null)),
              (e = Vn(e, n, r, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Kc(r)),
              (t.memoizedState = Gc),
              e)
            : Nf(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((o = i.dehydrated), o !== null)))
    return Mk(e, t, a, n, o, i, r);
  if (s) {
    (s = n.fallback), (a = t.mode), (i = e.child), (o = i.sibling);
    var l = { mode: "hidden", children: n.children };
    return (
      !(a & 1) && t.child !== i
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = l),
          (t.deletions = null))
        : ((n = hn(i, l)), (n.subtreeFlags = i.subtreeFlags & 14680064)),
      o !== null ? (s = hn(o, s)) : ((s = Vn(s, a, r, null)), (s.flags |= 2)),
      (s.return = t),
      (n.return = t),
      (n.sibling = s),
      (t.child = n),
      (n = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Kc(r)
          : {
              baseLanes: a.baseLanes | r,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~r),
      (t.memoizedState = Gc),
      n
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (n = hn(s, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function Nf(e, t) {
  return (
    (t = $l({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Xa(e, t, r, n) {
  return (
    n !== null && wf(n),
    Vi(t, e.child, null, r),
    (e = Nf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Mk(e, t, r, n, i, s, a) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = Fu(Error(I(422)))), Xa(e, t, a, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = n.fallback),
        (i = t.mode),
        (n = $l({ mode: "visible", children: n.children }, i, 0, null)),
        (s = Vn(s, i, a, null)),
        (s.flags |= 2),
        (n.return = t),
        (s.return = t),
        (n.sibling = s),
        (t.child = n),
        t.mode & 1 && Vi(t, e.child, null, a),
        (t.child.memoizedState = Kc(a)),
        (t.memoizedState = Gc),
        s);
  if (!(t.mode & 1)) return Xa(e, t, a, null);
  if (i.data === "$!") {
    if (((n = i.nextSibling && i.nextSibling.dataset), n)) var o = n.dgst;
    return (n = o), (s = Error(I(419))), (n = Fu(s, n, void 0)), Xa(e, t, a, n);
  }
  if (((o = (a & e.childLanes) !== 0), vt || o)) {
    if (((n = Ye), n !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (n.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Dr(e, i), lr(n, e, i, -1));
    }
    return jf(), (n = Fu(Error(I(421)))), Xa(e, t, a, n);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Kk.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Pt = un(i.nextSibling)),
      (Ot = t),
      (Re = !0),
      (ir = null),
      e !== null &&
        ((Ut[zt++] = Pr),
        (Ut[zt++] = Or),
        (Ut[zt++] = Yn),
        (Pr = e.id),
        (Or = e.overflow),
        (Yn = t)),
      (t = Nf(t, n.children)),
      (t.flags |= 4096),
      t);
}
function $p(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Wc(e.return, t, r);
}
function ju(e, t, r, n, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = n),
      (s.tail = r),
      (s.tailMode = i));
}
function O0(e, t, r) {
  var n = t.pendingProps,
    i = n.revealOrder,
    s = n.tail;
  if ((ut(e, t, n.children, r), (n = Ne.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && $p(e, r, t);
        else if (e.tag === 19) $p(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((xe(Ne, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (r = t.child, i = null; r !== null; )
          (e = r.alternate),
            e !== null && Go(e) === null && (i = r),
            (r = r.sibling);
        (r = i),
          r === null
            ? ((i = t.child), (t.child = null))
            : ((i = r.sibling), (r.sibling = null)),
          ju(t, !1, i, r, s);
        break;
      case "backwards":
        for (r = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Go(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = r), (r = i), (i = e);
        }
        ju(t, !0, r, null, s);
        break;
      case "together":
        ju(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function wo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Nr(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Kn |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (
      e = t.child, r = hn(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = hn(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function Fk(e, t, r) {
  switch (t.tag) {
    case 3:
      E0(t), Wi();
      break;
    case 5:
      t0(t);
      break;
    case 1:
      bt(t.type) && Wo(t);
      break;
    case 4:
      Cf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        i = t.memoizedProps.value;
      xe(qo, n._currentValue), (n._currentValue = i);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (xe(Ne, Ne.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? P0(e, t, r)
          : (xe(Ne, Ne.current & 1),
            (e = Nr(e, t, r)),
            e !== null ? e.sibling : null);
      xe(Ne, Ne.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return O0(e, t, r);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        xe(Ne, Ne.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), x0(e, t, r);
  }
  return Nr(e, t, r);
}
var T0, Xc, A0, R0;
T0 = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
Xc = function () {};
A0 = function (e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    (e = t.stateNode), jn(wr.current);
    var s = null;
    switch (r) {
      case "input":
        (i = wc(e, i)), (n = wc(e, n)), (s = []);
        break;
      case "select":
        (i = $e({}, i, { value: void 0 })),
          (n = $e({}, n, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = _c(e, i)), (n = _c(e, n)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = zo);
    }
    xc(r, n);
    var a;
    r = null;
    for (u in i)
      if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var o = i[u];
          for (a in o) o.hasOwnProperty(a) && (r || (r = {}), (r[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Js.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (
        ((o = i != null ? i[u] : void 0),
        n.hasOwnProperty(u) && l !== o && (l != null || o != null))
      )
        if (u === "style")
          if (o) {
            for (a in o)
              !o.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (r || (r = {}), (r[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                o[a] !== l[a] &&
                (r || (r = {}), (r[a] = l[a]));
          } else r || (s || (s = []), s.push(u, r)), (r = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (o = o ? o.__html : void 0),
              l != null && o !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Js.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && Ee("scroll", e),
                  s || o === l || (s = []))
                : (s = s || []).push(u, l));
    }
    r && (s = s || []).push("style", r);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
R0 = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function gs(e, t) {
  if (!Re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function it(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags & 14680064),
        (n |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags),
        (n |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function jk(e, t, r) {
  var n = t.pendingProps;
  switch ((yf(t), t.tag)) {
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
      return it(t), null;
    case 1:
      return bt(t.type) && Bo(), it(t), null;
    case 3:
      return (
        (n = t.stateNode),
        Hi(),
        Oe(wt),
        Oe(ot),
        Pf(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ga(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ir !== null && (sd(ir), (ir = null)))),
        Xc(e, t),
        it(t),
        null
      );
    case 5:
      Ef(t);
      var i = jn(ca.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        A0(e, t, r, n, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(I(166));
          return it(t), null;
        }
        if (((e = jn(wr.current)), Ga(t))) {
          (n = t.stateNode), (r = t.type);
          var s = t.memoizedProps;
          switch (((n[hr] = t), (n[la] = s), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              Ee("cancel", n), Ee("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ee("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Rs.length; i++) Ee(Rs[i], n);
              break;
            case "source":
              Ee("error", n);
              break;
            case "img":
            case "image":
            case "link":
              Ee("error", n), Ee("load", n);
              break;
            case "details":
              Ee("toggle", n);
              break;
            case "input":
              Vh(n, s), Ee("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!s.multiple }),
                Ee("invalid", n);
              break;
            case "textarea":
              qh(n, s), Ee("invalid", n);
          }
          xc(r, s), (i = null);
          for (var a in s)
            if (s.hasOwnProperty(a)) {
              var o = s[a];
              a === "children"
                ? typeof o == "string"
                  ? n.textContent !== o &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ya(n.textContent, o, e),
                    (i = ["children", o]))
                  : typeof o == "number" &&
                    n.textContent !== "" + o &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ya(n.textContent, o, e),
                    (i = ["children", "" + o]))
                : Js.hasOwnProperty(a) &&
                  o != null &&
                  a === "onScroll" &&
                  Ee("scroll", n);
            }
          switch (r) {
            case "input":
              Ua(n), Hh(n, s, !0);
              break;
            case "textarea":
              Ua(n), Qh(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (n.onclick = zo);
          }
          (n = i), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = iv(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = a.createElement(r, { is: n.is }))
                : ((e = a.createElement(r)),
                  r === "select" &&
                    ((a = e),
                    n.multiple
                      ? (a.multiple = !0)
                      : n.size && (a.size = n.size)))
              : (e = a.createElementNS(e, r)),
            (e[hr] = t),
            (e[la] = n),
            T0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Cc(r, n)), r)) {
              case "dialog":
                Ee("cancel", e), Ee("close", e), (i = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ee("load", e), (i = n);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Rs.length; i++) Ee(Rs[i], e);
                i = n;
                break;
              case "source":
                Ee("error", e), (i = n);
                break;
              case "img":
              case "image":
              case "link":
                Ee("error", e), Ee("load", e), (i = n);
                break;
              case "details":
                Ee("toggle", e), (i = n);
                break;
              case "input":
                Vh(e, n), (i = wc(e, n)), Ee("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (i = $e({}, n, { value: void 0 })),
                  Ee("invalid", e);
                break;
              case "textarea":
                qh(e, n), (i = _c(e, n)), Ee("invalid", e);
                break;
              default:
                i = n;
            }
            xc(r, i), (o = i);
            for (s in o)
              if (o.hasOwnProperty(s)) {
                var l = o[s];
                s === "style"
                  ? ov(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && sv(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (r !== "textarea" || l !== "") && Zs(e, l)
                    : typeof l == "number" && Zs(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Js.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && Ee("scroll", e)
                      : l != null && rf(e, s, l, a));
              }
            switch (r) {
              case "input":
                Ua(e), Hh(e, n, !1);
                break;
              case "textarea":
                Ua(e), Qh(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + vn(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (s = n.value),
                  s != null
                    ? Ni(e, !!n.multiple, s, !1)
                    : n.defaultValue != null &&
                      Ni(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = zo);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return it(t), null;
    case 6:
      if (e && t.stateNode != null) R0(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(I(166));
        if (((r = jn(ca.current)), jn(wr.current), Ga(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[hr] = t),
            (s = n.nodeValue !== r) && ((e = Ot), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ya(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ya(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[hr] = t),
            (t.stateNode = n);
      }
      return it(t), null;
    case 13:
      if (
        (Oe(Ne),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Re && Pt !== null && t.mode & 1 && !(t.flags & 128))
          Yv(), Wi(), (t.flags |= 98560), (s = !1);
        else if (((s = Ga(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(I(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(I(317));
            s[hr] = t;
          } else
            Wi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          it(t), (s = !1);
        } else ir !== null && (sd(ir), (ir = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ne.current & 1 ? He === 0 && (He = 3) : jf())),
          t.updateQueue !== null && (t.flags |= 4),
          it(t),
          null);
    case 4:
      return (
        Hi(), Xc(e, t), e === null && aa(t.stateNode.containerInfo), it(t), null
      );
    case 10:
      return _f(t.type._context), it(t), null;
    case 17:
      return bt(t.type) && Bo(), it(t), null;
    case 19:
      if ((Oe(Ne), (s = t.memoizedState), s === null)) return it(t), null;
      if (((n = (t.flags & 128) !== 0), (a = s.rendering), a === null))
        if (n) gs(s, !1);
        else {
          if (He !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Go(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    gs(s, !1),
                    n = a.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (s = r),
                    (e = n),
                    (s.flags &= 14680066),
                    (a = s.alternate),
                    a === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = a.childLanes),
                        (s.lanes = a.lanes),
                        (s.child = a.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = a.memoizedProps),
                        (s.memoizedState = a.memoizedState),
                        (s.updateQueue = a.updateQueue),
                        (s.type = a.type),
                        (e = a.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return xe(Ne, (Ne.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            je() > Qi &&
            ((t.flags |= 128), (n = !0), gs(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Go(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              gs(s, !0),
              s.tail === null && s.tailMode === "hidden" && !a.alternate && !Re)
            )
              return it(t), null;
          } else
            2 * je() - s.renderingStartTime > Qi &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), gs(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((r = s.last),
            r !== null ? (r.sibling = a) : (t.child = a),
            (s.last = a));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = je()),
          (t.sibling = null),
          (r = Ne.current),
          xe(Ne, n ? (r & 1) | 2 : r & 1),
          t)
        : (it(t), null);
    case 22:
    case 23:
      return (
        Ff(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? Et & 1073741824 && (it(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : it(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function Uk(e, t) {
  switch ((yf(t), t.tag)) {
    case 1:
      return (
        bt(t.type) && Bo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Hi(),
        Oe(wt),
        Oe(ot),
        Pf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ef(t), null;
    case 13:
      if (
        (Oe(Ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(I(340));
        Wi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Oe(Ne), null;
    case 4:
      return Hi(), null;
    case 10:
      return _f(t.type._context), null;
    case 22:
    case 23:
      return Ff(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ja = !1,
  at = !1,
  zk = typeof WeakSet == "function" ? WeakSet : Set,
  H = null;
function Pi(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        Le(e, t, n);
      }
    else r.current = null;
}
function Jc(e, t, r) {
  try {
    r();
  } catch (n) {
    Le(e, t, n);
  }
}
var Lp = !1;
function Bk(e, t) {
  if ((($c = Fo), (e = $v()), gf(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var i = n.anchorOffset,
            s = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, s.nodeType;
          } catch {
            r = null;
            break e;
          }
          var a = 0,
            o = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var m;
              d !== r || (i !== 0 && d.nodeType !== 3) || (o = a + i),
                d !== s || (n !== 0 && d.nodeType !== 3) || (l = a + n),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (m = d.firstChild) !== null;

            )
              (h = d), (d = m);
            for (;;) {
              if (d === e) break t;
              if (
                (h === r && ++u === i && (o = a),
                h === s && ++c === n && (l = a),
                (m = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = m;
          }
          r = o === -1 || l === -1 ? null : { start: o, end: l };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Lc = { focusedElem: e, selectionRange: r }, Fo = !1, H = t; H !== null; )
    if (((t = H), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (H = e);
    else
      for (; H !== null; ) {
        t = H;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    k = y.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : tr(t.type, w),
                      k
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (_) {
          Le(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (H = e);
          break;
        }
        H = t.return;
      }
  return (y = Lp), (Lp = !1), y;
}
function Bs(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var i = (n = n.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Jc(t, r, s);
      }
      i = i.next;
    } while (i !== n);
  }
}
function Nl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function Zc(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function D0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), D0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[hr], delete t[la], delete t[jc], delete t[xk], delete t[Ck])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function N0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Mp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || N0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ed(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = zo));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (ed(e, t, r), e = e.sibling; e !== null; ) ed(e, t, r), (e = e.sibling);
}
function td(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (td(e, t, r), e = e.sibling; e !== null; ) td(e, t, r), (e = e.sibling);
}
var Ze = null,
  rr = !1;
function zr(e, t, r) {
  for (r = r.child; r !== null; ) I0(e, t, r), (r = r.sibling);
}
function I0(e, t, r) {
  if (yr && typeof yr.onCommitFiberUnmount == "function")
    try {
      yr.onCommitFiberUnmount(Cl, r);
    } catch {}
  switch (r.tag) {
    case 5:
      at || Pi(r, t);
    case 6:
      var n = Ze,
        i = rr;
      (Ze = null),
        zr(e, t, r),
        (Ze = n),
        (rr = i),
        Ze !== null &&
          (rr
            ? ((e = Ze),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Ze.removeChild(r.stateNode));
      break;
    case 18:
      Ze !== null &&
        (rr
          ? ((e = Ze),
            (r = r.stateNode),
            e.nodeType === 8
              ? Du(e.parentNode, r)
              : e.nodeType === 1 && Du(e, r),
            na(e))
          : Du(Ze, r.stateNode));
      break;
    case 4:
      (n = Ze),
        (i = rr),
        (Ze = r.stateNode.containerInfo),
        (rr = !0),
        zr(e, t, r),
        (Ze = n),
        (rr = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !at &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        i = n = n.next;
        do {
          var s = i,
            a = s.destroy;
          (s = s.tag),
            a !== void 0 && (s & 2 || s & 4) && Jc(r, t, a),
            (i = i.next);
        } while (i !== n);
      }
      zr(e, t, r);
      break;
    case 1:
      if (
        !at &&
        (Pi(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (o) {
          Le(r, t, o);
        }
      zr(e, t, r);
      break;
    case 21:
      zr(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((at = (n = at) || r.memoizedState !== null), zr(e, t, r), (at = n))
        : zr(e, t, r);
      break;
    default:
      zr(e, t, r);
  }
}
function Fp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new zk()),
      t.forEach(function (n) {
        var i = Xk.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(i, i));
      });
  }
}
function Zt(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      try {
        var s = e,
          a = t,
          o = a;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (Ze = o.stateNode), (rr = !1);
              break e;
            case 3:
              (Ze = o.stateNode.containerInfo), (rr = !0);
              break e;
            case 4:
              (Ze = o.stateNode.containerInfo), (rr = !0);
              break e;
          }
          o = o.return;
        }
        if (Ze === null) throw Error(I(160));
        I0(s, a, i), (Ze = null), (rr = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        Le(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) $0(t, e), (t = t.sibling);
}
function $0(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Zt(t, e), cr(e), n & 4)) {
        try {
          Bs(3, e, e.return), Nl(3, e);
        } catch (w) {
          Le(e, e.return, w);
        }
        try {
          Bs(5, e, e.return);
        } catch (w) {
          Le(e, e.return, w);
        }
      }
      break;
    case 1:
      Zt(t, e), cr(e), n & 512 && r !== null && Pi(r, r.return);
      break;
    case 5:
      if (
        (Zt(t, e),
        cr(e),
        n & 512 && r !== null && Pi(r, r.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Zs(i, "");
        } catch (w) {
          Le(e, e.return, w);
        }
      }
      if (n & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          a = r !== null ? r.memoizedProps : s,
          o = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            o === "input" && s.type === "radio" && s.name != null && rv(i, s),
              Cc(o, a);
            var u = Cc(o, s);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === "style"
                ? ov(i, d)
                : c === "dangerouslySetInnerHTML"
                ? sv(i, d)
                : c === "children"
                ? Zs(i, d)
                : rf(i, c, d, u);
            }
            switch (o) {
              case "input":
                bc(i, s);
                break;
              case "textarea":
                nv(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var m = s.value;
                m != null
                  ? Ni(i, !!s.multiple, m, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Ni(i, !!s.multiple, s.defaultValue, !0)
                      : Ni(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[la] = s;
          } catch (w) {
            Le(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Zt(t, e), cr(e), n & 4)) {
        if (e.stateNode === null) throw Error(I(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (w) {
          Le(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Zt(t, e), cr(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          na(t.containerInfo);
        } catch (w) {
          Le(e, e.return, w);
        }
      break;
    case 4:
      Zt(t, e), cr(e);
      break;
    case 13:
      Zt(t, e),
        cr(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Lf = je())),
        n & 4 && Fp(e);
      break;
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((at = (u = at) || c), Zt(t, e), (at = u)) : Zt(t, e),
        cr(e),
        n & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (H = e, c = e.child; c !== null; ) {
            for (d = H = c; H !== null; ) {
              switch (((h = H), (m = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Bs(4, h, h.return);
                  break;
                case 1:
                  Pi(h, h.return);
                  var y = h.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (n = h), (r = h.return);
                    try {
                      (t = n),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      Le(n, r, w);
                    }
                  }
                  break;
                case 5:
                  Pi(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Up(d);
                    continue;
                  }
              }
              m !== null ? ((m.return = h), (H = m)) : Up(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((o = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (o.style.display = av("display", a)));
              } catch (w) {
                Le(e, e.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (w) {
                Le(e, e.return, w);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Zt(t, e), cr(e), n & 4 && Fp(e);
      break;
    case 21:
      break;
    default:
      Zt(t, e), cr(e);
  }
}
function cr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (N0(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(I(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (Zs(i, ""), (n.flags &= -33));
          var s = Mp(e);
          td(e, s, i);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo,
            o = Mp(e);
          ed(e, o, a);
          break;
        default:
          throw Error(I(161));
      }
    } catch (l) {
      Le(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Wk(e, t, r) {
  (H = e), L0(e);
}
function L0(e, t, r) {
  for (var n = (e.mode & 1) !== 0; H !== null; ) {
    var i = H,
      s = i.child;
    if (i.tag === 22 && n) {
      var a = i.memoizedState !== null || Ja;
      if (!a) {
        var o = i.alternate,
          l = (o !== null && o.memoizedState !== null) || at;
        o = Ja;
        var u = at;
        if (((Ja = a), (at = l) && !u))
          for (H = i; H !== null; )
            (a = H),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? zp(i)
                : l !== null
                ? ((l.return = a), (H = l))
                : zp(i);
        for (; s !== null; ) (H = s), L0(s), (s = s.sibling);
        (H = i), (Ja = o), (at = u);
      }
      jp(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (H = s)) : jp(e);
  }
}
function jp(e) {
  for (; H !== null; ) {
    var t = H;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              at || Nl(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !at)
                if (r === null) n.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : tr(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    i,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && _p(t, s, n);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                _p(t, a, r);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (r === null && t.flags & 4) {
                r = o;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
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
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && na(d);
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
              throw Error(I(163));
          }
        at || (t.flags & 512 && Zc(t));
      } catch (h) {
        Le(t, t.return, h);
      }
    }
    if (t === e) {
      H = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (H = r);
      break;
    }
    H = t.return;
  }
}
function Up(e) {
  for (; H !== null; ) {
    var t = H;
    if (t === e) {
      H = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (H = r);
      break;
    }
    H = t.return;
  }
}
function zp(e) {
  for (; H !== null; ) {
    var t = H;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Nl(4, t);
          } catch (l) {
            Le(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              Le(t, i, l);
            }
          }
          var s = t.return;
          try {
            Zc(t);
          } catch (l) {
            Le(t, s, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Zc(t);
          } catch (l) {
            Le(t, a, l);
          }
      }
    } catch (l) {
      Le(t, t.return, l);
    }
    if (t === e) {
      H = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (H = o);
      break;
    }
    H = t.return;
  }
}
var Vk = Math.ceil,
  Jo = Mr.ReactCurrentDispatcher,
  If = Mr.ReactCurrentOwner,
  Ht = Mr.ReactCurrentBatchConfig,
  ce = 0,
  Ye = null,
  Be = null,
  et = 0,
  Et = 0,
  Oi = xn(0),
  He = 0,
  pa = null,
  Kn = 0,
  Il = 0,
  $f = 0,
  Ws = null,
  gt = null,
  Lf = 0,
  Qi = 1 / 0,
  Cr = null,
  Zo = !1,
  rd = null,
  dn = null,
  Za = !1,
  tn = null,
  el = 0,
  Vs = 0,
  nd = null,
  bo = -1,
  ko = 0;
function ht() {
  return ce & 6 ? je() : bo !== -1 ? bo : (bo = je());
}
function fn(e) {
  return e.mode & 1
    ? ce & 2 && et !== 0
      ? et & -et
      : Pk.transition !== null
      ? (ko === 0 && (ko = wv()), ko)
      : ((e = ye),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ev(e.type))),
        e)
    : 1;
}
function lr(e, t, r, n) {
  if (50 < Vs) throw ((Vs = 0), (nd = null), Error(I(185)));
  Sa(e, r, n),
    (!(ce & 2) || e !== Ye) &&
      (e === Ye && (!(ce & 2) && (Il |= r), He === 4 && Kr(e, et)),
      kt(e, n),
      r === 1 && ce === 0 && !(t.mode & 1) && ((Qi = je() + 500), Al && Cn()));
}
function kt(e, t) {
  var r = e.callbackNode;
  Pb(e, t);
  var n = Mo(e, e === Ye ? et : 0);
  if (n === 0)
    r !== null && Kh(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Kh(r), t === 1))
      e.tag === 0 ? Ek(Bp.bind(null, e)) : Hv(Bp.bind(null, e)),
        _k(function () {
          !(ce & 6) && Cn();
        }),
        (r = null);
    else {
      switch (bv(n)) {
        case 1:
          r = lf;
          break;
        case 4:
          r = vv;
          break;
        case 16:
          r = Lo;
          break;
        case 536870912:
          r = yv;
          break;
        default:
          r = Lo;
      }
      r = V0(r, M0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function M0(e, t) {
  if (((bo = -1), (ko = 0), ce & 6)) throw Error(I(327));
  var r = e.callbackNode;
  if (Fi() && e.callbackNode !== r) return null;
  var n = Mo(e, e === Ye ? et : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = tl(e, n);
  else {
    t = n;
    var i = ce;
    ce |= 2;
    var s = j0();
    (Ye !== e || et !== t) && ((Cr = null), (Qi = je() + 500), Wn(e, t));
    do
      try {
        Qk();
        break;
      } catch (o) {
        F0(e, o);
      }
    while (1);
    kf(),
      (Jo.current = s),
      (ce = i),
      Be !== null ? (t = 0) : ((Ye = null), (et = 0), (t = He));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ac(e)), i !== 0 && ((n = i), (t = id(e, i)))), t === 1)
    )
      throw ((r = pa), Wn(e, 0), Kr(e, n), kt(e, je()), r);
    if (t === 6) Kr(e, n);
    else {
      if (
        ((i = e.current.alternate),
        !(n & 30) &&
          !Hk(i) &&
          ((t = tl(e, n)),
          t === 2 && ((s = Ac(e)), s !== 0 && ((n = s), (t = id(e, s)))),
          t === 1))
      )
        throw ((r = pa), Wn(e, 0), Kr(e, n), kt(e, je()), r);
      switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          Rn(e, gt, Cr);
          break;
        case 3:
          if (
            (Kr(e, n), (n & 130023424) === n && ((t = Lf + 500 - je()), 10 < t))
          ) {
            if (Mo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & n) !== n)) {
              ht(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Fc(Rn.bind(null, e, gt, Cr), t);
            break;
          }
          Rn(e, gt, Cr);
          break;
        case 4:
          if ((Kr(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var a = 31 - or(n);
            (s = 1 << a), (a = t[a]), a > i && (i = a), (n &= ~s);
          }
          if (
            ((n = i),
            (n = je() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * Vk(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Fc(Rn.bind(null, e, gt, Cr), n);
            break;
          }
          Rn(e, gt, Cr);
          break;
        case 5:
          Rn(e, gt, Cr);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return kt(e, je()), e.callbackNode === r ? M0.bind(null, e) : null;
}
function id(e, t) {
  var r = Ws;
  return (
    e.current.memoizedState.isDehydrated && (Wn(e, t).flags |= 256),
    (e = tl(e, t)),
    e !== 2 && ((t = gt), (gt = r), t !== null && sd(t)),
    e
  );
}
function sd(e) {
  gt === null ? (gt = e) : gt.push.apply(gt, e);
}
function Hk(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var i = r[n],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!ur(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Kr(e, t) {
  for (
    t &= ~$f,
      t &= ~Il,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - or(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function Bp(e) {
  if (ce & 6) throw Error(I(327));
  Fi();
  var t = Mo(e, 0);
  if (!(t & 1)) return kt(e, je()), null;
  var r = tl(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Ac(e);
    n !== 0 && ((t = n), (r = id(e, n)));
  }
  if (r === 1) throw ((r = pa), Wn(e, 0), Kr(e, t), kt(e, je()), r);
  if (r === 6) throw Error(I(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rn(e, gt, Cr),
    kt(e, je()),
    null
  );
}
function Mf(e, t) {
  var r = ce;
  ce |= 1;
  try {
    return e(t);
  } finally {
    (ce = r), ce === 0 && ((Qi = je() + 500), Al && Cn());
  }
}
function Xn(e) {
  tn !== null && tn.tag === 0 && !(ce & 6) && Fi();
  var t = ce;
  ce |= 1;
  var r = Ht.transition,
    n = ye;
  try {
    if (((Ht.transition = null), (ye = 1), e)) return e();
  } finally {
    (ye = n), (Ht.transition = r), (ce = t), !(ce & 6) && Cn();
  }
}
function Ff() {
  (Et = Oi.current), Oe(Oi);
}
function Wn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), kk(r)), Be !== null))
    for (r = Be.return; r !== null; ) {
      var n = r;
      switch ((yf(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && Bo();
          break;
        case 3:
          Hi(), Oe(wt), Oe(ot), Pf();
          break;
        case 5:
          Ef(n);
          break;
        case 4:
          Hi();
          break;
        case 13:
          Oe(Ne);
          break;
        case 19:
          Oe(Ne);
          break;
        case 10:
          _f(n.type._context);
          break;
        case 22:
        case 23:
          Ff();
      }
      r = r.return;
    }
  if (
    ((Ye = e),
    (Be = e = hn(e.current, null)),
    (et = Et = t),
    (He = 0),
    (pa = null),
    ($f = Il = Kn = 0),
    (gt = Ws = null),
    Fn !== null)
  ) {
    for (t = 0; t < Fn.length; t++)
      if (((r = Fn[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var i = n.next,
          s = r.pending;
        if (s !== null) {
          var a = s.next;
          (s.next = i), (n.next = a);
        }
        r.pending = n;
      }
    Fn = null;
  }
  return e;
}
function F0(e, t) {
  do {
    var r = Be;
    try {
      if ((kf(), (vo.current = Xo), Ko)) {
        for (var n = Ie.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), (n = n.next);
        }
        Ko = !1;
      }
      if (
        ((Gn = 0),
        (Qe = Ve = Ie = null),
        (zs = !1),
        (da = 0),
        (If.current = null),
        r === null || r.return === null)
      ) {
        (He = 1), (pa = t), (Be = null);
        break;
      }
      e: {
        var s = e,
          a = r.return,
          o = r,
          l = t;
        if (
          ((t = et),
          (o.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = o,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = Tp(a);
          if (m !== null) {
            (m.flags &= -257),
              Ap(m, a, o, s, t),
              m.mode & 1 && Op(s, u, t),
              (t = m),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(l), (t.updateQueue = w);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Op(s, u, t), jf();
              break e;
            }
            l = Error(I(426));
          }
        } else if (Re && o.mode & 1) {
          var k = Tp(a);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Ap(k, a, o, s, t),
              wf(qi(l, o));
            break e;
          }
        }
        (s = l = qi(l, o)),
          He !== 4 && (He = 2),
          Ws === null ? (Ws = [s]) : Ws.push(s),
          (s = a);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var p = k0(s, l, t);
              kp(s, p);
              break e;
            case 1:
              o = l;
              var f = s.type,
                v = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (dn === null || !dn.has(v))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var _ = _0(s, o, t);
                kp(s, _);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      z0(r);
    } catch (S) {
      (t = S), Be === r && r !== null && (Be = r = r.return);
      continue;
    }
    break;
  } while (1);
}
function j0() {
  var e = Jo.current;
  return (Jo.current = Xo), e === null ? Xo : e;
}
function jf() {
  (He === 0 || He === 3 || He === 2) && (He = 4),
    Ye === null || (!(Kn & 268435455) && !(Il & 268435455)) || Kr(Ye, et);
}
function tl(e, t) {
  var r = ce;
  ce |= 2;
  var n = j0();
  (Ye !== e || et !== t) && ((Cr = null), Wn(e, t));
  do
    try {
      qk();
      break;
    } catch (i) {
      F0(e, i);
    }
  while (1);
  if ((kf(), (ce = r), (Jo.current = n), Be !== null)) throw Error(I(261));
  return (Ye = null), (et = 0), He;
}
function qk() {
  for (; Be !== null; ) U0(Be);
}
function Qk() {
  for (; Be !== null && !yb(); ) U0(Be);
}
function U0(e) {
  var t = W0(e.alternate, e, Et);
  (e.memoizedProps = e.pendingProps),
    t === null ? z0(e) : (Be = t),
    (If.current = null);
}
function z0(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = Uk(r, t)), r !== null)) {
        (r.flags &= 32767), (Be = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (He = 6), (Be = null);
        return;
      }
    } else if (((r = jk(r, t, Et)), r !== null)) {
      Be = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Be = t;
      return;
    }
    Be = t = e;
  } while (t !== null);
  He === 0 && (He = 5);
}
function Rn(e, t, r) {
  var n = ye,
    i = Ht.transition;
  try {
    (Ht.transition = null), (ye = 1), Yk(e, t, r, n);
  } finally {
    (Ht.transition = i), (ye = n);
  }
  return null;
}
function Yk(e, t, r, n) {
  do Fi();
  while (tn !== null);
  if (ce & 6) throw Error(I(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(I(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = r.lanes | r.childLanes;
  if (
    (Ob(e, s),
    e === Ye && ((Be = Ye = null), (et = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Za ||
      ((Za = !0),
      V0(Lo, function () {
        return Fi(), null;
      })),
    (s = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || s)
  ) {
    (s = Ht.transition), (Ht.transition = null);
    var a = ye;
    ye = 1;
    var o = ce;
    (ce |= 4),
      (If.current = null),
      Bk(e, r),
      $0(r, e),
      pk(Lc),
      (Fo = !!$c),
      (Lc = $c = null),
      (e.current = r),
      Wk(r),
      wb(),
      (ce = o),
      (ye = a),
      (Ht.transition = s);
  } else e.current = r;
  if (
    (Za && ((Za = !1), (tn = e), (el = i)),
    (s = e.pendingLanes),
    s === 0 && (dn = null),
    _b(r.stateNode),
    kt(e, je()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (i = t[r]), n(i.value, { componentStack: i.stack, digest: i.digest });
  if (Zo) throw ((Zo = !1), (e = rd), (rd = null), e);
  return (
    el & 1 && e.tag !== 0 && Fi(),
    (s = e.pendingLanes),
    s & 1 ? (e === nd ? Vs++ : ((Vs = 0), (nd = e))) : (Vs = 0),
    Cn(),
    null
  );
}
function Fi() {
  if (tn !== null) {
    var e = bv(el),
      t = Ht.transition,
      r = ye;
    try {
      if (((Ht.transition = null), (ye = 16 > e ? 16 : e), tn === null))
        var n = !1;
      else {
        if (((e = tn), (tn = null), (el = 0), ce & 6)) throw Error(I(331));
        var i = ce;
        for (ce |= 4, H = e.current; H !== null; ) {
          var s = H,
            a = s.child;
          if (H.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var l = 0; l < o.length; l++) {
                var u = o[l];
                for (H = u; H !== null; ) {
                  var c = H;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bs(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (H = d);
                  else
                    for (; H !== null; ) {
                      c = H;
                      var h = c.sibling,
                        m = c.return;
                      if ((D0(c), c === u)) {
                        H = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = m), (H = h);
                        break;
                      }
                      H = m;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var k = w.sibling;
                    (w.sibling = null), (w = k);
                  } while (w !== null);
                }
              }
              H = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) (a.return = s), (H = a);
          else
            e: for (; H !== null; ) {
              if (((s = H), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bs(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (H = p);
                break e;
              }
              H = s.return;
            }
        }
        var f = e.current;
        for (H = f; H !== null; ) {
          a = H;
          var v = a.child;
          if (a.subtreeFlags & 2064 && v !== null) (v.return = a), (H = v);
          else
            e: for (a = f; H !== null; ) {
              if (((o = H), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nl(9, o);
                  }
                } catch (S) {
                  Le(o, o.return, S);
                }
              if (o === a) {
                H = null;
                break e;
              }
              var _ = o.sibling;
              if (_ !== null) {
                (_.return = o.return), (H = _);
                break e;
              }
              H = o.return;
            }
        }
        if (
          ((ce = i), Cn(), yr && typeof yr.onPostCommitFiberRoot == "function")
        )
          try {
            yr.onPostCommitFiberRoot(Cl, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (ye = r), (Ht.transition = t);
    }
  }
  return !1;
}
function Wp(e, t, r) {
  (t = qi(r, t)),
    (t = k0(e, t, 1)),
    (e = cn(e, t, 1)),
    (t = ht()),
    e !== null && (Sa(e, 1, t), kt(e, t));
}
function Le(e, t, r) {
  if (e.tag === 3) Wp(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Wp(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (dn === null || !dn.has(n)))
        ) {
          (e = qi(r, e)),
            (e = _0(t, e, 1)),
            (t = cn(t, e, 1)),
            (e = ht()),
            t !== null && (Sa(t, 1, e), kt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Gk(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = ht()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Ye === e &&
      (et & r) === r &&
      (He === 4 || (He === 3 && (et & 130023424) === et && 500 > je() - Lf)
        ? Wn(e, 0)
        : ($f |= r)),
    kt(e, t);
}
function B0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Wa), (Wa <<= 1), !(Wa & 130023424) && (Wa = 4194304))
      : (t = 1));
  var r = ht();
  (e = Dr(e, t)), e !== null && (Sa(e, t, r), kt(e, r));
}
function Kk(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), B0(e, r);
}
function Xk(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  n !== null && n.delete(t), B0(e, r);
}
var W0;
W0 = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || wt.current) vt = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (vt = !1), Fk(e, t, r);
      vt = !!(e.flags & 131072);
    }
  else (vt = !1), Re && t.flags & 1048576 && qv(t, Ho, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      wo(e, t), (e = t.pendingProps);
      var i = Bi(t, ot.current);
      Mi(t, r), (i = Tf(null, t, n, e, i, r));
      var s = Af();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            bt(n) ? ((s = !0), Wo(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            xf(t),
            (i.updater = Rl),
            (t.stateNode = i),
            (i._reactInternals = t),
            Hc(t, n, e, r),
            (t = Yc(null, t, n, !0, s, r)))
          : ((t.tag = 0), Re && s && vf(t), ut(null, t, i, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (wo(e, t),
          (e = t.pendingProps),
          (i = n._init),
          (n = i(n._payload)),
          (t.type = n),
          (i = t.tag = Zk(n)),
          (e = tr(n, e)),
          i)
        ) {
          case 0:
            t = Qc(null, t, n, e, r);
            break e;
          case 1:
            t = Np(null, t, n, e, r);
            break e;
          case 11:
            t = Rp(null, t, n, e, r);
            break e;
          case 14:
            t = Dp(null, t, n, tr(n.type, e), r);
            break e;
        }
        throw Error(I(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : tr(n, i)),
        Qc(e, t, n, i, r)
      );
    case 1:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : tr(n, i)),
        Np(e, t, n, i, r)
      );
    case 3:
      e: {
        if ((E0(t), e === null)) throw Error(I(387));
        (n = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Kv(e, t),
          Yo(t, n, null, r);
        var a = t.memoizedState;
        if (((n = a.element), s.isDehydrated))
          if (
            ((s = {
              element: n,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = qi(Error(I(423)), t)), (t = Ip(e, t, n, r, i));
            break e;
          } else if (n !== i) {
            (i = qi(Error(I(424)), t)), (t = Ip(e, t, n, r, i));
            break e;
          } else
            for (
              Pt = un(t.stateNode.containerInfo.firstChild),
                Ot = t,
                Re = !0,
                ir = null,
                r = e0(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Wi(), n === i)) {
            t = Nr(e, t, r);
            break e;
          }
          ut(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        t0(t),
        e === null && Bc(t),
        (n = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = i.children),
        Mc(n, i) ? (a = null) : s !== null && Mc(n, s) && (t.flags |= 32),
        C0(e, t),
        ut(e, t, a, r),
        t.child
      );
    case 6:
      return e === null && Bc(t), null;
    case 13:
      return P0(e, t, r);
    case 4:
      return (
        Cf(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Vi(t, null, n, r)) : ut(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : tr(n, i)),
        Rp(e, t, n, i, r)
      );
    case 7:
      return ut(e, t, t.pendingProps, r), t.child;
    case 8:
      return ut(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return ut(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (a = i.value),
          xe(qo, n._currentValue),
          (n._currentValue = a),
          s !== null)
        )
          if (ur(s.value, a)) {
            if (s.children === i.children && !wt.current) {
              t = Nr(e, t, r);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var o = s.dependencies;
              if (o !== null) {
                a = s.child;
                for (var l = o.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (s.tag === 1) {
                      (l = Tr(-1, r & -r)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= r),
                      (l = s.alternate),
                      l !== null && (l.lanes |= r),
                      Wc(s.return, r, t),
                      (o.lanes |= r);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((a = s.return), a === null)) throw Error(I(341));
                (a.lanes |= r),
                  (o = a.alternate),
                  o !== null && (o.lanes |= r),
                  Wc(a, r, t),
                  (a = s.sibling);
              } else a = s.child;
              if (a !== null) a.return = s;
              else
                for (a = s; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((s = a.sibling), s !== null)) {
                    (s.return = a.return), (a = s);
                    break;
                  }
                  a = a.return;
                }
              s = a;
            }
        ut(e, t, i.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (n = t.pendingProps.children),
        Mi(t, r),
        (i = Gt(i)),
        (n = n(i)),
        (t.flags |= 1),
        ut(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (i = tr(n, t.pendingProps)),
        (i = tr(n.type, i)),
        Dp(e, t, n, i, r)
      );
    case 15:
      return S0(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : tr(n, i)),
        wo(e, t),
        (t.tag = 1),
        bt(n) ? ((e = !0), Wo(t)) : (e = !1),
        Mi(t, r),
        Jv(t, n, i),
        Hc(t, n, i, r),
        Yc(null, t, n, !0, e, r)
      );
    case 19:
      return O0(e, t, r);
    case 22:
      return x0(e, t, r);
  }
  throw Error(I(156, t.tag));
};
function V0(e, t) {
  return gv(e, t);
}
function Jk(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Wt(e, t, r, n) {
  return new Jk(e, t, r, n);
}
function Uf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Zk(e) {
  if (typeof e == "function") return Uf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === sf)) return 11;
    if (e === af) return 14;
  }
  return 2;
}
function hn(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Wt(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function _o(e, t, r, n, i, s) {
  var a = 2;
  if (((n = e), typeof e == "function")) Uf(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case yi:
        return Vn(r.children, i, s, t);
      case nf:
        (a = 8), (i |= 8);
        break;
      case mc:
        return (
          (e = Wt(12, r, t, i | 2)), (e.elementType = mc), (e.lanes = s), e
        );
      case gc:
        return (e = Wt(13, r, t, i)), (e.elementType = gc), (e.lanes = s), e;
      case vc:
        return (e = Wt(19, r, t, i)), (e.elementType = vc), (e.lanes = s), e;
      case Zg:
        return $l(r, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Xg:
              a = 10;
              break e;
            case Jg:
              a = 9;
              break e;
            case sf:
              a = 11;
              break e;
            case af:
              a = 14;
              break e;
            case Hr:
              (a = 16), (n = null);
              break e;
          }
        throw Error(I(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Wt(a, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = s), t
  );
}
function Vn(e, t, r, n) {
  return (e = Wt(7, e, n, t)), (e.lanes = r), e;
}
function $l(e, t, r, n) {
  return (
    (e = Wt(22, e, n, t)),
    (e.elementType = Zg),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Uu(e, t, r) {
  return (e = Wt(6, e, null, t)), (e.lanes = r), e;
}
function zu(e, t, r) {
  return (
    (t = Wt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function e_(e, t, r, n, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ku(0)),
    (this.expirationTimes = ku(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ku(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function zf(e, t, r, n, i, s, a, o, l) {
  return (
    (e = new e_(e, t, r, o, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Wt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    xf(s),
    e
  );
}
function t_(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: vi,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function H0(e) {
  if (!e) return yn;
  e = e._reactInternals;
  e: {
    if (ri(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (bt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (bt(r)) return Vv(e, r, t);
  }
  return t;
}
function q0(e, t, r, n, i, s, a, o, l) {
  return (
    (e = zf(r, n, !0, e, i, s, a, o, l)),
    (e.context = H0(null)),
    (r = e.current),
    (n = ht()),
    (i = fn(r)),
    (s = Tr(n, i)),
    (s.callback = t ?? null),
    cn(r, s, i),
    (e.current.lanes = i),
    Sa(e, i, n),
    kt(e, n),
    e
  );
}
function Ll(e, t, r, n) {
  var i = t.current,
    s = ht(),
    a = fn(i);
  return (
    (r = H0(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = Tr(s, a)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = cn(i, t, a)),
    e !== null && (lr(e, i, a, s), go(e, i, a)),
    a
  );
}
function rl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Bf(e, t) {
  Vp(e, t), (e = e.alternate) && Vp(e, t);
}
function r_() {
  return null;
}
var Q0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Wf(e) {
  this._internalRoot = e;
}
Ml.prototype.render = Wf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  Ll(e, t, null, null);
};
Ml.prototype.unmount = Wf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Xn(function () {
      Ll(null, e, null, null);
    }),
      (t[Rr] = null);
  }
};
function Ml(e) {
  this._internalRoot = e;
}
Ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sv();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Gr.length && t !== 0 && t < Gr[r].priority; r++);
    Gr.splice(r, 0, e), r === 0 && Cv(e);
  }
};
function Vf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Fl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Hp() {}
function n_(e, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var s = n;
      n = function () {
        var u = rl(a);
        s.call(u);
      };
    }
    var a = q0(t, n, e, 0, null, !1, !1, "", Hp);
    return (
      (e._reactRootContainer = a),
      (e[Rr] = a.current),
      aa(e.nodeType === 8 ? e.parentNode : e),
      Xn(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof n == "function") {
    var o = n;
    n = function () {
      var u = rl(l);
      o.call(u);
    };
  }
  var l = zf(e, 0, !1, null, null, !1, !1, "", Hp);
  return (
    (e._reactRootContainer = l),
    (e[Rr] = l.current),
    aa(e.nodeType === 8 ? e.parentNode : e),
    Xn(function () {
      Ll(t, l, r, n);
    }),
    l
  );
}
function jl(e, t, r, n, i) {
  var s = r._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof i == "function") {
      var o = i;
      i = function () {
        var l = rl(a);
        o.call(l);
      };
    }
    Ll(t, a, e, i);
  } else a = n_(r, t, e, i, n);
  return rl(a);
}
kv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = As(t.pendingLanes);
        r !== 0 &&
          (uf(t, r | 1), kt(t, je()), !(ce & 6) && ((Qi = je() + 500), Cn()));
      }
      break;
    case 13:
      Xn(function () {
        var n = Dr(e, 1);
        if (n !== null) {
          var i = ht();
          lr(n, e, 1, i);
        }
      }),
        Bf(e, 1);
  }
};
cf = function (e) {
  if (e.tag === 13) {
    var t = Dr(e, 134217728);
    if (t !== null) {
      var r = ht();
      lr(t, e, 134217728, r);
    }
    Bf(e, 134217728);
  }
};
_v = function (e) {
  if (e.tag === 13) {
    var t = fn(e),
      r = Dr(e, t);
    if (r !== null) {
      var n = ht();
      lr(r, e, t, n);
    }
    Bf(e, t);
  }
};
Sv = function () {
  return ye;
};
xv = function (e, t) {
  var r = ye;
  try {
    return (ye = e), t();
  } finally {
    ye = r;
  }
};
Pc = function (e, t, r) {
  switch (t) {
    case "input":
      if ((bc(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = Tl(n);
            if (!i) throw Error(I(90));
            tv(n), bc(n, i);
          }
        }
      }
      break;
    case "textarea":
      nv(e, r);
      break;
    case "select":
      (t = r.value), t != null && Ni(e, !!r.multiple, t, !1);
  }
};
cv = Mf;
dv = Xn;
var i_ = { usingClientEntryPoint: !1, Events: [Ca, _i, Tl, lv, uv, Mf] },
  vs = {
    findFiberByHostInstance: Mn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  s_ = {
    bundleType: vs.bundleType,
    version: vs.version,
    rendererPackageName: vs.rendererPackageName,
    rendererConfig: vs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Mr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = pv(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vs.findFiberByHostInstance || r_,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!eo.isDisabled && eo.supportsFiber)
    try {
      (Cl = eo.inject(s_)), (yr = eo);
    } catch {}
}
Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = i_;
Nt.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vf(t)) throw Error(I(200));
  return t_(e, t, null, r);
};
Nt.createRoot = function (e, t) {
  if (!Vf(e)) throw Error(I(299));
  var r = !1,
    n = "",
    i = Q0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = zf(e, 1, !1, null, null, r, !1, n, i)),
    (e[Rr] = t.current),
    aa(e.nodeType === 8 ? e.parentNode : e),
    new Wf(t)
  );
};
Nt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(I(188))
      : ((e = Object.keys(e).join(",")), Error(I(268, e)));
  return (e = pv(t)), (e = e === null ? null : e.stateNode), e;
};
Nt.flushSync = function (e) {
  return Xn(e);
};
Nt.hydrate = function (e, t, r) {
  if (!Fl(t)) throw Error(I(200));
  return jl(null, e, t, !0, r);
};
Nt.hydrateRoot = function (e, t, r) {
  if (!Vf(e)) throw Error(I(405));
  var n = (r != null && r.hydratedSources) || null,
    i = !1,
    s = "",
    a = Q0;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (i = !0),
      r.identifierPrefix !== void 0 && (s = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    (t = q0(t, null, e, 1, r ?? null, i, !1, s, a)),
    (e[Rr] = t.current),
    aa(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (i = r._getVersion),
        (i = i(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, i])
          : t.mutableSourceEagerHydrationData.push(r, i);
  return new Ml(t);
};
Nt.render = function (e, t, r) {
  if (!Fl(t)) throw Error(I(200));
  return jl(null, e, t, !1, r);
};
Nt.unmountComponentAtNode = function (e) {
  if (!Fl(e)) throw Error(I(40));
  return e._reactRootContainer
    ? (Xn(function () {
        jl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Rr] = null);
        });
      }),
      !0)
    : !1;
};
Nt.unstable_batchedUpdates = Mf;
Nt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Fl(r)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return jl(e, t, r, !1, n);
};
Nt.version = "18.2.0-next-9e3b772b8-20220608";
function Y0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y0);
    } catch (e) {
      console.error(e);
    }
}
Y0(), (qg.exports = Nt);
var G0 = qg.exports,
  qp = G0;
(hc.createRoot = qp.createRoot), (hc.hydrateRoot = qp.hydrateRoot);
/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ma() {
  return (
    (ma = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ma.apply(this, arguments)
  );
}
var rn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(rn || (rn = {}));
const Qp = "popstate";
function a_(e) {
  e === void 0 && (e = {});
  function t(n, i) {
    let { pathname: s, search: a, hash: o } = n.location;
    return ad(
      "",
      { pathname: s, search: a, hash: o },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function r(n, i) {
    return typeof i == "string" ? i : nl(i);
  }
  return l_(t, r, null, e);
}
function Ue(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Hf(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function o_() {
  return Math.random().toString(36).substr(2, 8);
}
function Yp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ad(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    ma(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ns(t) : t,
      { state: r, key: (t && t.key) || n || o_() }
    )
  );
}
function nl(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function ns(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function l_(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = n,
    a = i.history,
    o = rn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), a.replaceState(ma({}, a.state, { idx: u }), ""));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    o = rn.Pop;
    let k = c(),
      p = k == null ? null : k - u;
    (u = k), l && l({ action: o, location: w.location, delta: p });
  }
  function h(k, p) {
    o = rn.Push;
    let f = ad(w.location, k, p);
    r && r(f, k), (u = c() + 1);
    let v = Yp(f, u),
      _ = w.createHref(f);
    try {
      a.pushState(v, "", _);
    } catch {
      i.location.assign(_);
    }
    s && l && l({ action: o, location: w.location, delta: 1 });
  }
  function m(k, p) {
    o = rn.Replace;
    let f = ad(w.location, k, p);
    r && r(f, k), (u = c());
    let v = Yp(f, u),
      _ = w.createHref(f);
    a.replaceState(v, "", _),
      s && l && l({ action: o, location: w.location, delta: 0 });
  }
  function y(k) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      f = typeof k == "string" ? k : nl(k);
    return (
      Ue(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, p)
    );
  }
  let w = {
    get action() {
      return o;
    },
    get location() {
      return e(i, a);
    },
    listen(k) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Qp, d),
        (l = k),
        () => {
          i.removeEventListener(Qp, d), (l = null);
        }
      );
    },
    createHref(k) {
      return t(i, k);
    },
    createURL: y,
    encodeLocation(k) {
      let p = y(k);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: h,
    replace: m,
    go(k) {
      return a.go(k);
    },
  };
  return w;
}
var Gp;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Gp || (Gp = {}));
function u_(e, t, r) {
  r === void 0 && (r = "/");
  let n = typeof t == "string" ? ns(t) : t,
    i = qf(n.pathname || "/", r);
  if (i == null) return null;
  let s = K0(e);
  c_(s);
  let a = null;
  for (let o = 0; a == null && o < s.length; ++o) a = w_(s[o], __(i));
  return a;
}
function K0(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let i = (s, a, o) => {
    let l = {
      relativePath: o === void 0 ? s.path || "" : o,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: a,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (Ue(
        l.relativePath.startsWith(n),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(n.length)));
    let u = pn([n, l.relativePath]),
      c = r.concat(l);
    s.children &&
      s.children.length > 0 &&
      (Ue(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      K0(s.children, t, c, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: v_(u, s.index), routesMeta: c });
  };
  return (
    e.forEach((s, a) => {
      var o;
      if (s.path === "" || !((o = s.path) != null && o.includes("?"))) i(s, a);
      else for (let l of X0(s.path)) i(s, a, l);
    }),
    t
  );
}
function X0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    i = r.endsWith("?"),
    s = r.replace(/\?$/, "");
  if (n.length === 0) return i ? [s, ""] : [s];
  let a = X0(n.join("/")),
    o = [];
  return (
    o.push(...a.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && o.push(...a),
    o.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function c_(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : y_(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const d_ = /^:\w+$/,
  f_ = 3,
  h_ = 2,
  p_ = 1,
  m_ = 10,
  g_ = -2,
  Kp = (e) => e === "*";
function v_(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(Kp) && (n += g_),
    t && (n += h_),
    r
      .filter((i) => !Kp(i))
      .reduce((i, s) => i + (d_.test(s) ? f_ : s === "" ? p_ : m_), n)
  );
}
function y_(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, i) => n === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function w_(e, t) {
  let { routesMeta: r } = e,
    n = {},
    i = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let o = r[a],
      l = a === r.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = b_(
        { path: o.relativePath, caseSensitive: o.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(n, c.params);
    let d = o.route;
    s.push({
      params: n,
      pathname: pn([i, c.pathname]),
      pathnameBase: E_(pn([i, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (i = pn([i, c.pathnameBase]));
  }
  return s;
}
function b_(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = k_(e.path, e.caseSensitive, e.end),
    i = t.match(r);
  if (!i) return null;
  let s = i[0],
    a = s.replace(/(.)\/+$/, "$1"),
    o = i.slice(1);
  return {
    params: n.reduce((u, c, d) => {
      if (c === "*") {
        let h = o[d] || "";
        a = s.slice(0, s.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = S_(o[d] || "", c)), u;
    }, {}),
    pathname: s,
    pathnameBase: a,
    pattern: e,
  };
}
function k_(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Hf(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let n = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (a, o) => (n.push(o), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (n.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), n]
  );
}
function __(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Hf(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function S_(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (r) {
    return (
      Hf(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + r + ").")
      ),
      e
    );
  }
}
function qf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function x_(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: i = "",
  } = typeof e == "string" ? ns(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : C_(r, t)) : t,
    search: P_(n),
    hash: O_(i),
  };
}
function C_(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? r.length > 1 && r.pop() : i !== "." && r.push(i);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Bu(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(n) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Qf(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Yf(e, t, r, n) {
  n === void 0 && (n = !1);
  let i;
  typeof e == "string"
    ? (i = ns(e))
    : ((i = ma({}, e)),
      Ue(
        !i.pathname || !i.pathname.includes("?"),
        Bu("?", "pathname", "search", i)
      ),
      Ue(
        !i.pathname || !i.pathname.includes("#"),
        Bu("#", "pathname", "hash", i)
      ),
      Ue(!i.search || !i.search.includes("#"), Bu("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    a = s ? "/" : i.pathname,
    o;
  if (n || a == null) o = r;
  else {
    let d = t.length - 1;
    if (a.startsWith("..")) {
      let h = a.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      i.pathname = h.join("/");
    }
    o = d >= 0 ? t[d] : "/";
  }
  let l = x_(i, o),
    u = a && a !== "/" && a.endsWith("/"),
    c = (s || a === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const pn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  E_ = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  P_ = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  O_ = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function T_(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const J0 = ["post", "put", "patch", "delete"];
new Set(J0);
const A_ = ["get", ...J0];
new Set(A_);
/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function il() {
  return (
    (il = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    il.apply(this, arguments)
  );
}
const Z0 = x.createContext(null),
  ey = x.createContext(null),
  ni = x.createContext(null),
  Ul = x.createContext(null),
  _r = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  ty = x.createContext(null);
function R_(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  is() || Ue(!1);
  let { basename: n, navigator: i } = x.useContext(ni),
    { hash: s, pathname: a, search: o } = Gf(e, { relative: r }),
    l = a;
  return (
    n !== "/" && (l = a === "/" ? n : pn([n, a])),
    i.createHref({ pathname: l, search: o, hash: s })
  );
}
function is() {
  return x.useContext(Ul) != null;
}
function En() {
  return is() || Ue(!1), x.useContext(Ul).location;
}
function ry(e) {
  x.useContext(ni).static || x.useLayoutEffect(e);
}
function Fr() {
  let { isDataRoute: e } = x.useContext(_r);
  return e ? Q_() : D_();
}
function D_() {
  is() || Ue(!1);
  let { basename: e, navigator: t } = x.useContext(ni),
    { matches: r } = x.useContext(_r),
    { pathname: n } = En(),
    i = JSON.stringify(Qf(r).map((o) => o.pathnameBase)),
    s = x.useRef(!1);
  return (
    ry(() => {
      s.current = !0;
    }),
    x.useCallback(
      function (o, l) {
        if ((l === void 0 && (l = {}), !s.current)) return;
        if (typeof o == "number") {
          t.go(o);
          return;
        }
        let u = Yf(o, JSON.parse(i), n, l.relative === "path");
        e !== "/" &&
          (u.pathname = u.pathname === "/" ? e : pn([e, u.pathname])),
          (l.replace ? t.replace : t.push)(u, l.state, l);
      },
      [e, t, i, n]
    )
  );
}
const N_ = x.createContext(null);
function I_(e) {
  let t = x.useContext(_r).outlet;
  return t && x.createElement(N_.Provider, { value: e }, t);
}
function $_() {
  let { matches: e } = x.useContext(_r),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Gf(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { matches: n } = x.useContext(_r),
    { pathname: i } = En(),
    s = JSON.stringify(Qf(n).map((a) => a.pathnameBase));
  return x.useMemo(() => Yf(e, JSON.parse(s), i, r === "path"), [e, s, i, r]);
}
function L_(e, t) {
  return M_(e, t);
}
function M_(e, t, r) {
  is() || Ue(!1);
  let { navigator: n } = x.useContext(ni),
    { matches: i } = x.useContext(_r),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let o = s ? s.pathnameBase : "/";
  s && s.route;
  let l = En(),
    u;
  if (t) {
    var c;
    let w = typeof t == "string" ? ns(t) : t;
    o === "/" || ((c = w.pathname) != null && c.startsWith(o)) || Ue(!1),
      (u = w);
  } else u = l;
  let d = u.pathname || "/",
    h = o === "/" ? d : d.slice(o.length) || "/",
    m = u_(e, { pathname: h }),
    y = B_(
      m &&
        m.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: pn([
              o,
              n.encodeLocation
                ? n.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? o
                : pn([
                    o,
                    n.encodeLocation
                      ? n.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      r
    );
  return t && y
    ? x.createElement(
        Ul.Provider,
        {
          value: {
            location: il(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: rn.Pop,
          },
        },
        y
      )
    : y;
}
function F_() {
  let e = q_(),
    t = T_(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    s = null;
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? x.createElement("pre", { style: i }, r) : null,
    s
  );
}
const j_ = x.createElement(F_, null);
class U_ extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      "React Router caught the following error during render",
      t,
      r
    );
  }
  render() {
    return this.state.error
      ? x.createElement(
          _r.Provider,
          { value: this.props.routeContext },
          x.createElement(ty.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function z_(e) {
  let { routeContext: t, match: r, children: n } = e,
    i = x.useContext(Z0);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = r.route.id),
    x.createElement(_r.Provider, { value: t }, n)
  );
}
function B_(e, t, r) {
  var n;
  if ((t === void 0 && (t = []), r === void 0 && (r = null), e == null)) {
    var i;
    if ((i = r) != null && i.errors) e = r.matches;
    else return null;
  }
  let s = e,
    a = (n = r) == null ? void 0 : n.errors;
  if (a != null) {
    let o = s.findIndex(
      (l) => l.route.id && (a == null ? void 0 : a[l.route.id])
    );
    o >= 0 || Ue(!1), (s = s.slice(0, Math.min(s.length, o + 1)));
  }
  return s.reduceRight((o, l, u) => {
    let c = l.route.id ? (a == null ? void 0 : a[l.route.id]) : null,
      d = null;
    r && (d = l.route.errorElement || j_);
    let h = t.concat(s.slice(0, u + 1)),
      m = () => {
        let y;
        return (
          c
            ? (y = d)
            : l.route.Component
            ? (y = x.createElement(l.route.Component, null))
            : l.route.element
            ? (y = l.route.element)
            : (y = o),
          x.createElement(z_, {
            match: l,
            routeContext: { outlet: o, matches: h, isDataRoute: r != null },
            children: y,
          })
        );
      };
    return r && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
      ? x.createElement(U_, {
          location: r.location,
          revalidation: r.revalidation,
          component: d,
          error: c,
          children: m(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var od;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(od || (od = {}));
var ga;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(ga || (ga = {}));
function W_(e) {
  let t = x.useContext(Z0);
  return t || Ue(!1), t;
}
function V_(e) {
  let t = x.useContext(ey);
  return t || Ue(!1), t;
}
function H_(e) {
  let t = x.useContext(_r);
  return t || Ue(!1), t;
}
function ny(e) {
  let t = H_(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || Ue(!1), r.route.id;
}
function q_() {
  var e;
  let t = x.useContext(ty),
    r = V_(ga.UseRouteError),
    n = ny(ga.UseRouteError);
  return t || ((e = r.errors) == null ? void 0 : e[n]);
}
function Q_() {
  let { router: e } = W_(od.UseNavigateStable),
    t = ny(ga.UseNavigateStable),
    r = x.useRef(!1);
  return (
    ry(() => {
      r.current = !0;
    }),
    x.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          r.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, il({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
function Y_(e) {
  let { to: t, replace: r, state: n, relative: i } = e;
  is() || Ue(!1);
  let { matches: s } = x.useContext(_r),
    { pathname: a } = En(),
    o = Fr(),
    l = Yf(
      t,
      Qf(s).map((c) => c.pathnameBase),
      a,
      i === "path"
    ),
    u = JSON.stringify(l);
  return (
    x.useEffect(
      () => o(JSON.parse(u), { replace: r, state: n, relative: i }),
      [o, u, i, r, n]
    ),
    null
  );
}
function G_(e) {
  return I_(e.context);
}
function St(e) {
  Ue(!1);
}
function K_(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: i = rn.Pop,
    navigator: s,
    static: a = !1,
  } = e;
  is() && Ue(!1);
  let o = t.replace(/^\/*/, "/"),
    l = x.useMemo(() => ({ basename: o, navigator: s, static: a }), [o, s, a]);
  typeof n == "string" && (n = ns(n));
  let {
      pathname: u = "/",
      search: c = "",
      hash: d = "",
      state: h = null,
      key: m = "default",
    } = n,
    y = x.useMemo(() => {
      let w = qf(u, o);
      return w == null
        ? null
        : {
            location: { pathname: w, search: c, hash: d, state: h, key: m },
            navigationType: i,
          };
    }, [o, u, c, d, h, m, i]);
  return y == null
    ? null
    : x.createElement(
        ni.Provider,
        { value: l },
        x.createElement(Ul.Provider, { children: r, value: y })
      );
}
function X_(e) {
  let { children: t, location: r } = e;
  return L_(ld(t), r);
}
var Xp;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Xp || (Xp = {}));
new Promise(() => {});
function ld(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    x.Children.forEach(e, (n, i) => {
      if (!x.isValidElement(n)) return;
      let s = [...t, i];
      if (n.type === x.Fragment) {
        r.push.apply(r, ld(n.props.children, s));
        return;
      }
      n.type !== St && Ue(!1), !n.props.index || !n.props.children || Ue(!1);
      let a = {
        id: n.props.id || s.join("-"),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      n.props.children && (a.children = ld(n.props.children, s)), r.push(a);
    }),
    r
  );
}
/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function sl() {
  return (
    (sl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    sl.apply(this, arguments)
  );
}
function iy(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    s;
  for (s = 0; s < n.length; s++)
    (i = n[s]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function J_(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Z_(e, t) {
  return e.button === 0 && (!t || t === "_self") && !J_(e);
}
function ud(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, r) => {
            let n = e[r];
            return t.concat(Array.isArray(n) ? n.map((i) => [r, i]) : [[r, n]]);
          }, [])
    )
  );
}
function eS(e, t) {
  let r = ud(e);
  if (t)
    for (let n of t.keys())
      r.has(n) ||
        t.getAll(n).forEach((i) => {
          r.append(n, i);
        });
  return r;
}
const tS = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  rS = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];
function nS(e) {
  let { basename: t, children: r, window: n } = e,
    i = x.useRef();
  i.current == null && (i.current = a_({ window: n, v5Compat: !0 }));
  let s = i.current,
    [a, o] = x.useState({ action: s.action, location: s.location });
  return (
    x.useLayoutEffect(() => s.listen(o), [s]),
    x.createElement(K_, {
      basename: t,
      children: r,
      location: a.location,
      navigationType: a.action,
      navigator: s,
    })
  );
}
const iS =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  sS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  sy = x.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: i,
        reloadDocument: s,
        replace: a,
        state: o,
        target: l,
        to: u,
        preventScrollReset: c,
      } = t,
      d = iy(t, tS),
      { basename: h } = x.useContext(ni),
      m,
      y = !1;
    if (typeof u == "string" && sS.test(u) && ((m = u), iS))
      try {
        let f = new URL(window.location.href),
          v = u.startsWith("//") ? new URL(f.protocol + u) : new URL(u),
          _ = qf(v.pathname, h);
        v.origin === f.origin && _ != null
          ? (u = _ + v.search + v.hash)
          : (y = !0);
      } catch {}
    let w = R_(u, { relative: i }),
      k = oS(u, {
        replace: a,
        state: o,
        target: l,
        preventScrollReset: c,
        relative: i,
      });
    function p(f) {
      n && n(f), f.defaultPrevented || k(f);
    }
    return x.createElement(
      "a",
      sl({}, d, { href: m || w, onClick: y || s ? n : p, ref: r, target: l })
    );
  }),
  aS = x.forwardRef(function (t, r) {
    let {
        "aria-current": n = "page",
        caseSensitive: i = !1,
        className: s = "",
        end: a = !1,
        style: o,
        to: l,
        children: u,
      } = t,
      c = iy(t, rS),
      d = Gf(l, { relative: c.relative }),
      h = En(),
      m = x.useContext(ey),
      { navigator: y } = x.useContext(ni),
      w = y.encodeLocation ? y.encodeLocation(d).pathname : d.pathname,
      k = h.pathname,
      p =
        m && m.navigation && m.navigation.location
          ? m.navigation.location.pathname
          : null;
    i ||
      ((k = k.toLowerCase()),
      (p = p ? p.toLowerCase() : null),
      (w = w.toLowerCase()));
    let f = k === w || (!a && k.startsWith(w) && k.charAt(w.length) === "/"),
      v =
        p != null &&
        (p === w || (!a && p.startsWith(w) && p.charAt(w.length) === "/")),
      _ = f ? n : void 0,
      S;
    typeof s == "function"
      ? (S = s({ isActive: f, isPending: v }))
      : (S = [s, f ? "active" : null, v ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let R = typeof o == "function" ? o({ isActive: f, isPending: v }) : o;
    return x.createElement(
      sy,
      sl({}, c, { "aria-current": _, className: S, ref: r, style: R, to: l }),
      typeof u == "function" ? u({ isActive: f, isPending: v }) : u
    );
  });
var Jp;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Jp || (Jp = {}));
var Zp;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Zp || (Zp = {}));
function oS(e, t) {
  let {
      target: r,
      replace: n,
      state: i,
      preventScrollReset: s,
      relative: a,
    } = t === void 0 ? {} : t,
    o = Fr(),
    l = En(),
    u = Gf(e, { relative: a });
  return x.useCallback(
    (c) => {
      if (Z_(c, r)) {
        c.preventDefault();
        let d = n !== void 0 ? n : nl(l) === nl(u);
        o(e, { replace: d, state: i, preventScrollReset: s, relative: a });
      }
    },
    [l, o, u, n, i, r, e, s, a]
  );
}
function Pa(e) {
  let t = x.useRef(ud(e)),
    r = x.useRef(!1),
    n = En(),
    i = x.useMemo(() => eS(n.search, r.current ? null : t.current), [n.search]),
    s = Fr(),
    a = x.useCallback(
      (o, l) => {
        const u = ud(typeof o == "function" ? o(i) : o);
        (r.current = !0), s("?" + u, l);
      },
      [s, i]
    );
  return [i, a];
}
class ss {
  constructor() {
    (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
  }
  subscribe(t) {
    const r = { listener: t };
    return (
      this.listeners.add(r),
      this.onSubscribe(),
      () => {
        this.listeners.delete(r), this.onUnsubscribe();
      }
    );
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
}
const va = typeof window > "u" || "Deno" in window;
function jt() {}
function lS(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function cd(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function ay(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Ds(e, t, r) {
  return Oa(e)
    ? typeof t == "function"
      ? { ...r, queryKey: e, queryFn: t }
      : { ...t, queryKey: e }
    : e;
}
function uS(e, t, r) {
  return Oa(e)
    ? typeof t == "function"
      ? { ...r, mutationKey: e, mutationFn: t }
      : { ...t, mutationKey: e }
    : typeof e == "function"
    ? { ...t, mutationFn: e }
    : { ...e };
}
function Qr(e, t, r) {
  return Oa(e) ? [{ ...t, queryKey: e }, r] : [e || {}, t];
}
function em(e, t) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: i,
    predicate: s,
    queryKey: a,
    stale: o,
  } = e;
  if (Oa(a)) {
    if (n) {
      if (t.queryHash !== Kf(a, t.options)) return !1;
    } else if (!al(t.queryKey, a)) return !1;
  }
  if (r !== "all") {
    const l = t.isActive();
    if ((r === "active" && !l) || (r === "inactive" && l)) return !1;
  }
  return !(
    (typeof o == "boolean" && t.isStale() !== o) ||
    (typeof i < "u" && i !== t.state.fetchStatus) ||
    (s && !s(t))
  );
}
function tm(e, t) {
  const { exact: r, fetching: n, predicate: i, mutationKey: s } = e;
  if (Oa(s)) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (Un(t.options.mutationKey) !== Un(s)) return !1;
    } else if (!al(t.options.mutationKey, s)) return !1;
  }
  return !(
    (typeof n == "boolean" && (t.state.status === "loading") !== n) ||
    (i && !i(t))
  );
}
function Kf(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Un)(e);
}
function Un(e) {
  return JSON.stringify(e, (t, r) =>
    dd(r)
      ? Object.keys(r)
          .sort()
          .reduce((n, i) => ((n[i] = r[i]), n), {})
      : r
  );
}
function al(e, t) {
  return oy(e, t);
}
function oy(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((r) => !oy(e[r], t[r]))
    : !1;
}
function ly(e, t) {
  if (e === t) return e;
  const r = rm(e) && rm(t);
  if (r || (dd(e) && dd(t))) {
    const n = r ? e.length : Object.keys(e).length,
      i = r ? t : Object.keys(t),
      s = i.length,
      a = r ? [] : {};
    let o = 0;
    for (let l = 0; l < s; l++) {
      const u = r ? l : i[l];
      (a[u] = ly(e[u], t[u])), a[u] === e[u] && o++;
    }
    return n === s && o === n ? e : a;
  }
  return t;
}
function ol(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (const r in e) if (e[r] !== t[r]) return !1;
  return !0;
}
function rm(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function dd(e) {
  if (!nm(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const r = t.prototype;
  return !(!nm(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function nm(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Oa(e) {
  return Array.isArray(e);
}
function uy(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function im(e) {
  uy(0).then(e);
}
function cS() {
  if (typeof AbortController == "function") return new AbortController();
}
function fd(e, t, r) {
  return r.isDataEqual != null && r.isDataEqual(e, t)
    ? e
    : typeof r.structuralSharing == "function"
    ? r.structuralSharing(e, t)
    : r.structuralSharing !== !1
    ? ly(e, t)
    : t;
}
class dS extends ss {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!va && window.addEventListener) {
          const r = () => t();
          return (
            window.addEventListener("visibilitychange", r, !1),
            window.addEventListener("focus", r, !1),
            () => {
              window.removeEventListener("visibilitychange", r),
                window.removeEventListener("focus", r);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var r;
    (this.setup = t),
      (r = this.cleanup) == null || r.call(this),
      (this.cleanup = t((n) => {
        typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
      }));
  }
  setFocused(t) {
    this.focused !== t && ((this.focused = t), this.onFocus());
  }
  onFocus() {
    this.listeners.forEach(({ listener: t }) => {
      t();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean"
      ? this.focused
      : typeof document > "u"
      ? !0
      : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const ll = new dS(),
  sm = ["online", "offline"];
class fS extends ss {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!va && window.addEventListener) {
          const r = () => t();
          return (
            sm.forEach((n) => {
              window.addEventListener(n, r, !1);
            }),
            () => {
              sm.forEach((n) => {
                window.removeEventListener(n, r);
              });
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var r;
    (this.setup = t),
      (r = this.cleanup) == null || r.call(this),
      (this.cleanup = t((n) => {
        typeof n == "boolean" ? this.setOnline(n) : this.onOnline();
      }));
  }
  setOnline(t) {
    this.online !== t && ((this.online = t), this.onOnline());
  }
  onOnline() {
    this.listeners.forEach(({ listener: t }) => {
      t();
    });
  }
  isOnline() {
    return typeof this.online == "boolean"
      ? this.online
      : typeof navigator > "u" || typeof navigator.onLine > "u"
      ? !0
      : navigator.onLine;
  }
}
const ul = new fS();
function hS(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function zl(e) {
  return (e ?? "online") === "online" ? ul.isOnline() : !0;
}
class cy {
  constructor(t) {
    (this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent);
  }
}
function So(e) {
  return e instanceof cy;
}
function dy(e) {
  let t = !1,
    r = 0,
    n = !1,
    i,
    s,
    a;
  const o = new Promise((k, p) => {
      (s = k), (a = p);
    }),
    l = (k) => {
      n || (m(new cy(k)), e.abort == null || e.abort());
    },
    u = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    d = () => !ll.isFocused() || (e.networkMode !== "always" && !ul.isOnline()),
    h = (k) => {
      n ||
        ((n = !0),
        e.onSuccess == null || e.onSuccess(k),
        i == null || i(),
        s(k));
    },
    m = (k) => {
      n ||
        ((n = !0), e.onError == null || e.onError(k), i == null || i(), a(k));
    },
    y = () =>
      new Promise((k) => {
        (i = (p) => {
          const f = n || !d();
          return f && k(p), f;
        }),
          e.onPause == null || e.onPause();
      }).then(() => {
        (i = void 0), n || e.onContinue == null || e.onContinue();
      }),
    w = () => {
      if (n) return;
      let k;
      try {
        k = e.fn();
      } catch (p) {
        k = Promise.reject(p);
      }
      Promise.resolve(k)
        .then(h)
        .catch((p) => {
          var f, v;
          if (n) return;
          const _ = (f = e.retry) != null ? f : 3,
            S = (v = e.retryDelay) != null ? v : hS,
            R = typeof S == "function" ? S(r, p) : S,
            O =
              _ === !0 ||
              (typeof _ == "number" && r < _) ||
              (typeof _ == "function" && _(r, p));
          if (t || !O) {
            m(p);
            return;
          }
          r++,
            e.onFail == null || e.onFail(r, p),
            uy(R)
              .then(() => {
                if (d()) return y();
              })
              .then(() => {
                t ? m(p) : w();
              });
        });
    };
  return (
    zl(e.networkMode) ? w() : y().then(w),
    {
      promise: o,
      cancel: l,
      continue: () => ((i == null ? void 0 : i()) ? o : Promise.resolve()),
      cancelRetry: u,
      continueRetry: c,
    }
  );
}
const Xf = console;
function pS() {
  let e = [],
    t = 0,
    r = (c) => {
      c();
    },
    n = (c) => {
      c();
    };
  const i = (c) => {
      let d;
      t++;
      try {
        d = c();
      } finally {
        t--, t || o();
      }
      return d;
    },
    s = (c) => {
      t
        ? e.push(c)
        : im(() => {
            r(c);
          });
    },
    a =
      (c) =>
      (...d) => {
        s(() => {
          c(...d);
        });
      },
    o = () => {
      const c = e;
      (e = []),
        c.length &&
          im(() => {
            n(() => {
              c.forEach((d) => {
                r(d);
              });
            });
          });
    };
  return {
    batch: i,
    batchCalls: a,
    schedule: s,
    setNotifyFunction: (c) => {
      r = c;
    },
    setBatchNotifyFunction: (c) => {
      n = c;
    },
  };
}
const Me = pS();
class fy {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      cd(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  updateCacheTime(t) {
    this.cacheTime = Math.max(
      this.cacheTime || 0,
      t ?? (va ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
  }
}
class mS extends fy {
  constructor(t) {
    super(),
      (this.abortSignalConsumed = !1),
      (this.defaultOptions = t.defaultOptions),
      this.setOptions(t.options),
      (this.observers = []),
      (this.cache = t.cache),
      (this.logger = t.logger || Xf),
      (this.queryKey = t.queryKey),
      (this.queryHash = t.queryHash),
      (this.initialState = t.state || gS(this.options)),
      (this.state = this.initialState),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(t) {
    (this.options = { ...this.defaultOptions, ...t }),
      this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.cache.remove(this);
  }
  setData(t, r) {
    const n = fd(this.state.data, t, this.options);
    return (
      this.dispatch({
        data: n,
        type: "success",
        dataUpdatedAt: r == null ? void 0 : r.updatedAt,
        manual: r == null ? void 0 : r.manual,
      }),
      n
    );
  }
  setState(t, r) {
    this.dispatch({ type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var r;
    const n = this.promise;
    return (
      (r = this.retryer) == null || r.cancel(t),
      n ? n.then(jt).catch(jt) : Promise.resolve()
    );
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((t) => t.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      this.observers.some((t) => t.getCurrentResult().isStale)
    );
  }
  isStaleByTime(t = 0) {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      !ay(this.state.dataUpdatedAt, t)
    );
  }
  onFocus() {
    var t;
    const r = this.observers.find((n) => n.shouldFetchOnWindowFocus());
    r && r.refetch({ cancelRefetch: !1 }),
      (t = this.retryer) == null || t.continue();
  }
  onOnline() {
    var t;
    const r = this.observers.find((n) => n.shouldFetchOnReconnect());
    r && r.refetch({ cancelRefetch: !1 }),
      (t = this.retryer) == null || t.continue();
  }
  addObserver(t) {
    this.observers.includes(t) ||
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.cache.notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) &&
      ((this.observers = this.observers.filter((r) => r !== t)),
      this.observers.length ||
        (this.retryer &&
          (this.abortSignalConsumed
            ? this.retryer.cancel({ revert: !0 })
            : this.retryer.cancelRetry()),
        this.scheduleGc()),
      this.cache.notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({ type: "invalidate" });
  }
  fetch(t, r) {
    var n, i;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && r != null && r.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.promise) {
        var s;
        return (s = this.retryer) == null || s.continueRetry(), this.promise;
      }
    }
    if ((t && this.setOptions(t), !this.options.queryFn)) {
      const m = this.observers.find((y) => y.options.queryFn);
      m && this.setOptions(m.options);
    }
    const a = cS(),
      o = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
      l = (m) => {
        Object.defineProperty(m, "signal", {
          enumerable: !0,
          get: () => {
            if (a) return (this.abortSignalConsumed = !0), a.signal;
          },
        });
      };
    l(o);
    const u = () =>
        this.options.queryFn
          ? ((this.abortSignalConsumed = !1), this.options.queryFn(o))
          : Promise.reject(
              "Missing queryFn for queryKey '" + this.options.queryHash + "'"
            ),
      c = {
        fetchOptions: r,
        options: this.options,
        queryKey: this.queryKey,
        state: this.state,
        fetchFn: u,
      };
    if (
      (l(c),
      (n = this.options.behavior) == null || n.onFetch(c),
      (this.revertState = this.state),
      this.state.fetchStatus === "idle" ||
        this.state.fetchMeta !==
          ((i = c.fetchOptions) == null ? void 0 : i.meta))
    ) {
      var d;
      this.dispatch({
        type: "fetch",
        meta: (d = c.fetchOptions) == null ? void 0 : d.meta,
      });
    }
    const h = (m) => {
      if (
        ((So(m) && m.silent) || this.dispatch({ type: "error", error: m }),
        !So(m))
      ) {
        var y, w, k, p;
        (y = (w = this.cache.config).onError) == null || y.call(w, m, this),
          (k = (p = this.cache.config).onSettled) == null ||
            k.call(p, this.state.data, m, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(),
        (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = dy({
        fn: c.fetchFn,
        abort: a == null ? void 0 : a.abort.bind(a),
        onSuccess: (m) => {
          var y, w, k, p;
          if (typeof m > "u") {
            h(new Error(this.queryHash + " data is undefined"));
            return;
          }
          this.setData(m),
            (y = (w = this.cache.config).onSuccess) == null ||
              y.call(w, m, this),
            (k = (p = this.cache.config).onSettled) == null ||
              k.call(p, m, this.state.error, this),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        },
        onError: h,
        onFail: (m, y) => {
          this.dispatch({ type: "failed", failureCount: m, error: y });
        },
        onPause: () => {
          this.dispatch({ type: "pause" });
        },
        onContinue: () => {
          this.dispatch({ type: "continue" });
        },
        retry: c.options.retry,
        retryDelay: c.options.retryDelay,
        networkMode: c.options.networkMode,
      })),
      (this.promise = this.retryer.promise),
      this.promise
    );
  }
  dispatch(t) {
    const r = (n) => {
      var i, s;
      switch (t.type) {
        case "failed":
          return {
            ...n,
            fetchFailureCount: t.failureCount,
            fetchFailureReason: t.error,
          };
        case "pause":
          return { ...n, fetchStatus: "paused" };
        case "continue":
          return { ...n, fetchStatus: "fetching" };
        case "fetch":
          return {
            ...n,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (i = t.meta) != null ? i : null,
            fetchStatus: zl(this.options.networkMode) ? "fetching" : "paused",
            ...(!n.dataUpdatedAt && { error: null, status: "loading" }),
          };
        case "success":
          return {
            ...n,
            data: t.data,
            dataUpdateCount: n.dataUpdateCount + 1,
            dataUpdatedAt: (s = t.dataUpdatedAt) != null ? s : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...(!t.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
        case "error":
          const a = t.error;
          return So(a) && a.revert && this.revertState
            ? { ...this.revertState, fetchStatus: "idle" }
            : {
                ...n,
                error: a,
                errorUpdateCount: n.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: n.fetchFailureCount + 1,
                fetchFailureReason: a,
                fetchStatus: "idle",
                status: "error",
              };
        case "invalidate":
          return { ...n, isInvalidated: !0 };
        case "setState":
          return { ...n, ...t.state };
      }
    };
    (this.state = r(this.state)),
      Me.batch(() => {
        this.observers.forEach((n) => {
          n.onQueryUpdate(t);
        }),
          this.cache.notify({ query: this, type: "updated", action: t });
      });
  }
}
function gS(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    r = typeof t < "u",
    n = r
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "loading",
    fetchStatus: "idle",
  };
}
class vS extends ss {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.queries = []),
      (this.queriesMap = {});
  }
  build(t, r, n) {
    var i;
    const s = r.queryKey,
      a = (i = r.queryHash) != null ? i : Kf(s, r);
    let o = this.get(a);
    return (
      o ||
        ((o = new mS({
          cache: this,
          logger: t.getLogger(),
          queryKey: s,
          queryHash: a,
          options: t.defaultQueryOptions(r),
          state: n,
          defaultOptions: t.getQueryDefaults(s),
        })),
        this.add(o)),
      o
    );
  }
  add(t) {
    this.queriesMap[t.queryHash] ||
      ((this.queriesMap[t.queryHash] = t),
      this.queries.push(t),
      this.notify({ type: "added", query: t }));
  }
  remove(t) {
    const r = this.queriesMap[t.queryHash];
    r &&
      (t.destroy(),
      (this.queries = this.queries.filter((n) => n !== t)),
      r === t && delete this.queriesMap[t.queryHash],
      this.notify({ type: "removed", query: t }));
  }
  clear() {
    Me.batch(() => {
      this.queries.forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return this.queriesMap[t];
  }
  getAll() {
    return this.queries;
  }
  find(t, r) {
    const [n] = Qr(t, r);
    return (
      typeof n.exact > "u" && (n.exact = !0), this.queries.find((i) => em(n, i))
    );
  }
  findAll(t, r) {
    const [n] = Qr(t, r);
    return Object.keys(n).length > 0
      ? this.queries.filter((i) => em(n, i))
      : this.queries;
  }
  notify(t) {
    Me.batch(() => {
      this.listeners.forEach(({ listener: r }) => {
        r(t);
      });
    });
  }
  onFocus() {
    Me.batch(() => {
      this.queries.forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    Me.batch(() => {
      this.queries.forEach((t) => {
        t.onOnline();
      });
    });
  }
}
class yS extends fy {
  constructor(t) {
    super(),
      (this.defaultOptions = t.defaultOptions),
      (this.mutationId = t.mutationId),
      (this.mutationCache = t.mutationCache),
      (this.logger = t.logger || Xf),
      (this.observers = []),
      (this.state = t.state || hy()),
      this.setOptions(t.options),
      this.scheduleGc();
  }
  setOptions(t) {
    (this.options = { ...this.defaultOptions, ...t }),
      this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(t) {
    this.dispatch({ type: "setState", state: t });
  }
  addObserver(t) {
    this.observers.includes(t) ||
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer: t,
      }));
  }
  removeObserver(t) {
    (this.observers = this.observers.filter((r) => r !== t)),
      this.scheduleGc(),
      this.mutationCache.notify({
        type: "observerRemoved",
        mutation: this,
        observer: t,
      });
  }
  optionalRemove() {
    this.observers.length ||
      (this.state.status === "loading"
        ? this.scheduleGc()
        : this.mutationCache.remove(this));
  }
  continue() {
    var t, r;
    return (t = (r = this.retryer) == null ? void 0 : r.continue()) != null
      ? t
      : this.execute();
  }
  async execute() {
    const t = () => {
        var O;
        return (
          (this.retryer = dy({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(this.state.variables)
                : Promise.reject("No mutationFn found"),
            onFail: (T, q) => {
              this.dispatch({ type: "failed", failureCount: T, error: q });
            },
            onPause: () => {
              this.dispatch({ type: "pause" });
            },
            onContinue: () => {
              this.dispatch({ type: "continue" });
            },
            retry: (O = this.options.retry) != null ? O : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
          })),
          this.retryer.promise
        );
      },
      r = this.state.status === "loading";
    try {
      var n, i, s, a, o, l, u, c;
      if (!r) {
        var d, h, m, y;
        this.dispatch({ type: "loading", variables: this.options.variables }),
          await ((d = (h = this.mutationCache.config).onMutate) == null
            ? void 0
            : d.call(h, this.state.variables, this));
        const T = await ((m = (y = this.options).onMutate) == null
          ? void 0
          : m.call(y, this.state.variables));
        T !== this.state.context &&
          this.dispatch({
            type: "loading",
            context: T,
            variables: this.state.variables,
          });
      }
      const O = await t();
      return (
        await ((n = (i = this.mutationCache.config).onSuccess) == null
          ? void 0
          : n.call(i, O, this.state.variables, this.state.context, this)),
        await ((s = (a = this.options).onSuccess) == null
          ? void 0
          : s.call(a, O, this.state.variables, this.state.context)),
        await ((o = (l = this.mutationCache.config).onSettled) == null
          ? void 0
          : o.call(l, O, null, this.state.variables, this.state.context, this)),
        await ((u = (c = this.options).onSettled) == null
          ? void 0
          : u.call(c, O, null, this.state.variables, this.state.context)),
        this.dispatch({ type: "success", data: O }),
        O
      );
    } catch (O) {
      try {
        var w, k, p, f, v, _, S, R;
        throw (
          (await ((w = (k = this.mutationCache.config).onError) == null
            ? void 0
            : w.call(k, O, this.state.variables, this.state.context, this)),
          await ((p = (f = this.options).onError) == null
            ? void 0
            : p.call(f, O, this.state.variables, this.state.context)),
          await ((v = (_ = this.mutationCache.config).onSettled) == null
            ? void 0
            : v.call(
                _,
                void 0,
                O,
                this.state.variables,
                this.state.context,
                this
              )),
          await ((S = (R = this.options).onSettled) == null
            ? void 0
            : S.call(R, void 0, O, this.state.variables, this.state.context)),
          O)
        );
      } finally {
        this.dispatch({ type: "error", error: O });
      }
    }
  }
  dispatch(t) {
    const r = (n) => {
      switch (t.type) {
        case "failed":
          return { ...n, failureCount: t.failureCount, failureReason: t.error };
        case "pause":
          return { ...n, isPaused: !0 };
        case "continue":
          return { ...n, isPaused: !1 };
        case "loading":
          return {
            ...n,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !zl(this.options.networkMode),
            status: "loading",
            variables: t.variables,
          };
        case "success":
          return {
            ...n,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...n,
            data: void 0,
            error: t.error,
            failureCount: n.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: "error",
          };
        case "setState":
          return { ...n, ...t.state };
      }
    };
    (this.state = r(this.state)),
      Me.batch(() => {
        this.observers.forEach((n) => {
          n.onMutationUpdate(t);
        }),
          this.mutationCache.notify({
            mutation: this,
            type: "updated",
            action: t,
          });
      });
  }
}
function hy() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
class wS extends ss {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.mutations = []),
      (this.mutationId = 0);
  }
  build(t, r, n) {
    const i = new yS({
      mutationCache: this,
      logger: t.getLogger(),
      mutationId: ++this.mutationId,
      options: t.defaultMutationOptions(r),
      state: n,
      defaultOptions: r.mutationKey
        ? t.getMutationDefaults(r.mutationKey)
        : void 0,
    });
    return this.add(i), i;
  }
  add(t) {
    this.mutations.push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    (this.mutations = this.mutations.filter((r) => r !== t)),
      this.notify({ type: "removed", mutation: t });
  }
  clear() {
    Me.batch(() => {
      this.mutations.forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(t) {
    return (
      typeof t.exact > "u" && (t.exact = !0),
      this.mutations.find((r) => tm(t, r))
    );
  }
  findAll(t) {
    return this.mutations.filter((r) => tm(t, r));
  }
  notify(t) {
    Me.batch(() => {
      this.listeners.forEach(({ listener: r }) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    var t;
    return (
      (this.resuming = ((t = this.resuming) != null ? t : Promise.resolve())
        .then(() => {
          const r = this.mutations.filter((n) => n.state.isPaused);
          return Me.batch(() =>
            r.reduce(
              (n, i) => n.then(() => i.continue().catch(jt)),
              Promise.resolve()
            )
          );
        })
        .then(() => {
          this.resuming = void 0;
        })),
      this.resuming
    );
  }
}
function bS() {
  return {
    onFetch: (e) => {
      e.fetchFn = () => {
        var t, r, n, i, s, a;
        const o =
            (t = e.fetchOptions) == null || (r = t.meta) == null
              ? void 0
              : r.refetchPage,
          l =
            (n = e.fetchOptions) == null || (i = n.meta) == null
              ? void 0
              : i.fetchMore,
          u = l == null ? void 0 : l.pageParam,
          c = (l == null ? void 0 : l.direction) === "forward",
          d = (l == null ? void 0 : l.direction) === "backward",
          h = ((s = e.state.data) == null ? void 0 : s.pages) || [],
          m = ((a = e.state.data) == null ? void 0 : a.pageParams) || [];
        let y = m,
          w = !1;
        const k = (R) => {
            Object.defineProperty(R, "signal", {
              enumerable: !0,
              get: () => {
                var O;
                if ((O = e.signal) != null && O.aborted) w = !0;
                else {
                  var T;
                  (T = e.signal) == null ||
                    T.addEventListener("abort", () => {
                      w = !0;
                    });
                }
                return e.signal;
              },
            });
          },
          p =
            e.options.queryFn ||
            (() =>
              Promise.reject(
                "Missing queryFn for queryKey '" + e.options.queryHash + "'"
              )),
          f = (R, O, T, q) => (
            (y = q ? [O, ...y] : [...y, O]), q ? [T, ...R] : [...R, T]
          ),
          v = (R, O, T, q) => {
            if (w) return Promise.reject("Cancelled");
            if (typeof T > "u" && !O && R.length) return Promise.resolve(R);
            const z = {
              queryKey: e.queryKey,
              pageParam: T,
              meta: e.options.meta,
            };
            k(z);
            const he = p(z);
            return Promise.resolve(he).then((G) => f(R, T, G, q));
          };
        let _;
        if (!h.length) _ = v([]);
        else if (c) {
          const R = typeof u < "u",
            O = R ? u : am(e.options, h);
          _ = v(h, R, O);
        } else if (d) {
          const R = typeof u < "u",
            O = R ? u : kS(e.options, h);
          _ = v(h, R, O, !0);
        } else {
          y = [];
          const R = typeof e.options.getNextPageParam > "u";
          _ = (o && h[0] ? o(h[0], 0, h) : !0)
            ? v([], R, m[0])
            : Promise.resolve(f([], m[0], h[0]));
          for (let T = 1; T < h.length; T++)
            _ = _.then((q) => {
              if (o && h[T] ? o(h[T], T, h) : !0) {
                const he = R ? m[T] : am(e.options, q);
                return v(q, R, he);
              }
              return Promise.resolve(f(q, m[T], h[T]));
            });
        }
        return _.then((R) => ({ pages: R, pageParams: y }));
      };
    },
  };
}
function am(e, t) {
  return e.getNextPageParam == null
    ? void 0
    : e.getNextPageParam(t[t.length - 1], t);
}
function kS(e, t) {
  return e.getPreviousPageParam == null
    ? void 0
    : e.getPreviousPageParam(t[0], t);
}
class _S {
  constructor(t = {}) {
    (this.queryCache = t.queryCache || new vS()),
      (this.mutationCache = t.mutationCache || new wS()),
      (this.logger = t.logger || Xf),
      (this.defaultOptions = t.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []),
      (this.mountCount = 0);
  }
  mount() {
    this.mountCount++,
      this.mountCount === 1 &&
        ((this.unsubscribeFocus = ll.subscribe(() => {
          ll.isFocused() &&
            (this.resumePausedMutations(), this.queryCache.onFocus());
        })),
        (this.unsubscribeOnline = ul.subscribe(() => {
          ul.isOnline() &&
            (this.resumePausedMutations(), this.queryCache.onOnline());
        })));
  }
  unmount() {
    var t, r;
    this.mountCount--,
      this.mountCount === 0 &&
        ((t = this.unsubscribeFocus) == null || t.call(this),
        (this.unsubscribeFocus = void 0),
        (r = this.unsubscribeOnline) == null || r.call(this),
        (this.unsubscribeOnline = void 0));
  }
  isFetching(t, r) {
    const [n] = Qr(t, r);
    return (n.fetchStatus = "fetching"), this.queryCache.findAll(n).length;
  }
  isMutating(t) {
    return this.mutationCache.findAll({ ...t, fetching: !0 }).length;
  }
  getQueryData(t, r) {
    var n;
    return (n = this.queryCache.find(t, r)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(t, r, n) {
    const i = Ds(t, r, n),
      s = this.getQueryData(i.queryKey);
    return s ? Promise.resolve(s) : this.fetchQuery(i);
  }
  getQueriesData(t) {
    return this.getQueryCache()
      .findAll(t)
      .map(({ queryKey: r, state: n }) => {
        const i = n.data;
        return [r, i];
      });
  }
  setQueryData(t, r, n) {
    const i = this.queryCache.find(t),
      s = i == null ? void 0 : i.state.data,
      a = lS(r, s);
    if (typeof a > "u") return;
    const o = Ds(t),
      l = this.defaultQueryOptions(o);
    return this.queryCache.build(this, l).setData(a, { ...n, manual: !0 });
  }
  setQueriesData(t, r, n) {
    return Me.batch(() =>
      this.getQueryCache()
        .findAll(t)
        .map(({ queryKey: i }) => [i, this.setQueryData(i, r, n)])
    );
  }
  getQueryState(t, r) {
    var n;
    return (n = this.queryCache.find(t, r)) == null ? void 0 : n.state;
  }
  removeQueries(t, r) {
    const [n] = Qr(t, r),
      i = this.queryCache;
    Me.batch(() => {
      i.findAll(n).forEach((s) => {
        i.remove(s);
      });
    });
  }
  resetQueries(t, r, n) {
    const [i, s] = Qr(t, r, n),
      a = this.queryCache,
      o = { type: "active", ...i };
    return Me.batch(
      () => (
        a.findAll(i).forEach((l) => {
          l.reset();
        }),
        this.refetchQueries(o, s)
      )
    );
  }
  cancelQueries(t, r, n) {
    const [i, s = {}] = Qr(t, r, n);
    typeof s.revert > "u" && (s.revert = !0);
    const a = Me.batch(() =>
      this.queryCache.findAll(i).map((o) => o.cancel(s))
    );
    return Promise.all(a).then(jt).catch(jt);
  }
  invalidateQueries(t, r, n) {
    const [i, s] = Qr(t, r, n);
    return Me.batch(() => {
      var a, o;
      if (
        (this.queryCache.findAll(i).forEach((u) => {
          u.invalidate();
        }),
        i.refetchType === "none")
      )
        return Promise.resolve();
      const l = {
        ...i,
        type:
          (a = (o = i.refetchType) != null ? o : i.type) != null ? a : "active",
      };
      return this.refetchQueries(l, s);
    });
  }
  refetchQueries(t, r, n) {
    const [i, s] = Qr(t, r, n),
      a = Me.batch(() =>
        this.queryCache
          .findAll(i)
          .filter((l) => !l.isDisabled())
          .map((l) => {
            var u;
            return l.fetch(void 0, {
              ...s,
              cancelRefetch:
                (u = s == null ? void 0 : s.cancelRefetch) != null ? u : !0,
              meta: { refetchPage: i.refetchPage },
            });
          })
      );
    let o = Promise.all(a).then(jt);
    return (s != null && s.throwOnError) || (o = o.catch(jt)), o;
  }
  fetchQuery(t, r, n) {
    const i = Ds(t, r, n),
      s = this.defaultQueryOptions(i);
    typeof s.retry > "u" && (s.retry = !1);
    const a = this.queryCache.build(this, s);
    return a.isStaleByTime(s.staleTime)
      ? a.fetch(s)
      : Promise.resolve(a.state.data);
  }
  prefetchQuery(t, r, n) {
    return this.fetchQuery(t, r, n).then(jt).catch(jt);
  }
  fetchInfiniteQuery(t, r, n) {
    const i = Ds(t, r, n);
    return (i.behavior = bS()), this.fetchQuery(i);
  }
  prefetchInfiniteQuery(t, r, n) {
    return this.fetchInfiniteQuery(t, r, n).then(jt).catch(jt);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(t) {
    this.defaultOptions = t;
  }
  setQueryDefaults(t, r) {
    const n = this.queryDefaults.find((i) => Un(t) === Un(i.queryKey));
    n
      ? (n.defaultOptions = r)
      : this.queryDefaults.push({ queryKey: t, defaultOptions: r });
  }
  getQueryDefaults(t) {
    if (!t) return;
    const r = this.queryDefaults.find((n) => al(t, n.queryKey));
    return r == null ? void 0 : r.defaultOptions;
  }
  setMutationDefaults(t, r) {
    const n = this.mutationDefaults.find((i) => Un(t) === Un(i.mutationKey));
    n
      ? (n.defaultOptions = r)
      : this.mutationDefaults.push({ mutationKey: t, defaultOptions: r });
  }
  getMutationDefaults(t) {
    if (!t) return;
    const r = this.mutationDefaults.find((n) => al(t, n.mutationKey));
    return r == null ? void 0 : r.defaultOptions;
  }
  defaultQueryOptions(t) {
    if (t != null && t._defaulted) return t;
    const r = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
      ...t,
      _defaulted: !0,
    };
    return (
      !r.queryHash && r.queryKey && (r.queryHash = Kf(r.queryKey, r)),
      typeof r.refetchOnReconnect > "u" &&
        (r.refetchOnReconnect = r.networkMode !== "always"),
      typeof r.useErrorBoundary > "u" && (r.useErrorBoundary = !!r.suspense),
      r
    );
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted
      ? t
      : {
          ...this.defaultOptions.mutations,
          ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
          ...t,
          _defaulted: !0,
        };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
class SS extends ss {
  constructor(t, r) {
    super(),
      (this.client = t),
      (this.options = r),
      (this.trackedProps = new Set()),
      (this.selectError = null),
      this.bindMethods(),
      this.setOptions(r);
  }
  bindMethods() {
    (this.remove = this.remove.bind(this)),
      (this.refetch = this.refetch.bind(this));
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.currentQuery.addObserver(this),
      om(this.currentQuery, this.options) && this.executeFetch(),
      this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return hd(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return hd(
      this.currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    (this.listeners = new Set()),
      this.clearStaleTimeout(),
      this.clearRefetchInterval(),
      this.currentQuery.removeObserver(this);
  }
  setOptions(t, r) {
    const n = this.options,
      i = this.currentQuery;
    if (
      ((this.options = this.client.defaultQueryOptions(t)),
      ol(n, this.options) ||
        this.client
          .getQueryCache()
          .notify({
            type: "observerOptionsUpdated",
            query: this.currentQuery,
            observer: this,
          }),
      typeof this.options.enabled < "u" &&
        typeof this.options.enabled != "boolean")
    )
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = n.queryKey),
      this.updateQuery();
    const s = this.hasListeners();
    s && lm(this.currentQuery, i, this.options, n) && this.executeFetch(),
      this.updateResult(r),
      s &&
        (this.currentQuery !== i ||
          this.options.enabled !== n.enabled ||
          this.options.staleTime !== n.staleTime) &&
        this.updateStaleTimeout();
    const a = this.computeRefetchInterval();
    s &&
      (this.currentQuery !== i ||
        this.options.enabled !== n.enabled ||
        a !== this.currentRefetchInterval) &&
      this.updateRefetchInterval(a);
  }
  getOptimisticResult(t) {
    const r = this.client.getQueryCache().build(this.client, t),
      n = this.createResult(r, t);
    return (
      CS(this, n, t) &&
        ((this.currentResult = n),
        (this.currentResultOptions = this.options),
        (this.currentResultState = this.currentQuery.state)),
      n
    );
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(t) {
    const r = {};
    return (
      Object.keys(t).forEach((n) => {
        Object.defineProperty(r, n, {
          configurable: !1,
          enumerable: !0,
          get: () => (this.trackedProps.add(n), t[n]),
        });
      }),
      r
    );
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({ refetchPage: t, ...r } = {}) {
    return this.fetch({ ...r, meta: { refetchPage: t } });
  }
  fetchOptimistic(t) {
    const r = this.client.defaultQueryOptions(t),
      n = this.client.getQueryCache().build(this.client, r);
    return (
      (n.isFetchingOptimistic = !0),
      n.fetch().then(() => this.createResult(n, r))
    );
  }
  fetch(t) {
    var r;
    return this.executeFetch({
      ...t,
      cancelRefetch: (r = t.cancelRefetch) != null ? r : !0,
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(t) {
    this.updateQuery();
    let r = this.currentQuery.fetch(this.options, t);
    return (t != null && t.throwOnError) || (r = r.catch(jt)), r;
  }
  updateStaleTimeout() {
    if (
      (this.clearStaleTimeout(),
      va || this.currentResult.isStale || !cd(this.options.staleTime))
    )
      return;
    const r = ay(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, r);
  }
  computeRefetchInterval() {
    var t;
    return typeof this.options.refetchInterval == "function"
      ? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
      : (t = this.options.refetchInterval) != null
      ? t
      : !1;
  }
  updateRefetchInterval(t) {
    this.clearRefetchInterval(),
      (this.currentRefetchInterval = t),
      !(
        va ||
        this.options.enabled === !1 ||
        !cd(this.currentRefetchInterval) ||
        this.currentRefetchInterval === 0
      ) &&
        (this.refetchIntervalId = setInterval(() => {
          (this.options.refetchIntervalInBackground || ll.isFocused()) &&
            this.executeFetch();
        }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(),
      this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId &&
      (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
  }
  clearRefetchInterval() {
    this.refetchIntervalId &&
      (clearInterval(this.refetchIntervalId),
      (this.refetchIntervalId = void 0));
  }
  createResult(t, r) {
    const n = this.currentQuery,
      i = this.options,
      s = this.currentResult,
      a = this.currentResultState,
      o = this.currentResultOptions,
      l = t !== n,
      u = l ? t.state : this.currentQueryInitialState,
      c = l ? this.currentResult : this.previousQueryResult,
      { state: d } = t;
    let {
        dataUpdatedAt: h,
        error: m,
        errorUpdatedAt: y,
        fetchStatus: w,
        status: k,
      } = d,
      p = !1,
      f = !1,
      v;
    if (r._optimisticResults) {
      const T = this.hasListeners(),
        q = !T && om(t, r),
        z = T && lm(t, n, r, i);
      (q || z) &&
        ((w = zl(t.options.networkMode) ? "fetching" : "paused"),
        h || (k = "loading")),
        r._optimisticResults === "isRestoring" && (w = "idle");
    }
    if (
      r.keepPreviousData &&
      !d.dataUpdatedAt &&
      c != null &&
      c.isSuccess &&
      k !== "error"
    )
      (v = c.data), (h = c.dataUpdatedAt), (k = c.status), (p = !0);
    else if (r.select && typeof d.data < "u")
      if (
        s &&
        d.data === (a == null ? void 0 : a.data) &&
        r.select === this.selectFn
      )
        v = this.selectResult;
      else
        try {
          (this.selectFn = r.select),
            (v = r.select(d.data)),
            (v = fd(s == null ? void 0 : s.data, v, r)),
            (this.selectResult = v),
            (this.selectError = null);
        } catch (T) {
          this.selectError = T;
        }
    else v = d.data;
    if (typeof r.placeholderData < "u" && typeof v > "u" && k === "loading") {
      let T;
      if (
        s != null &&
        s.isPlaceholderData &&
        r.placeholderData === (o == null ? void 0 : o.placeholderData)
      )
        T = s.data;
      else if (
        ((T =
          typeof r.placeholderData == "function"
            ? r.placeholderData()
            : r.placeholderData),
        r.select && typeof T < "u")
      )
        try {
          (T = r.select(T)), (this.selectError = null);
        } catch (q) {
          this.selectError = q;
        }
      typeof T < "u" &&
        ((k = "success"),
        (v = fd(s == null ? void 0 : s.data, T, r)),
        (f = !0));
    }
    this.selectError &&
      ((m = this.selectError),
      (v = this.selectResult),
      (y = Date.now()),
      (k = "error"));
    const _ = w === "fetching",
      S = k === "loading",
      R = k === "error";
    return {
      status: k,
      fetchStatus: w,
      isLoading: S,
      isSuccess: k === "success",
      isError: R,
      isInitialLoading: S && _,
      data: v,
      dataUpdatedAt: h,
      error: m,
      errorUpdatedAt: y,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount:
        d.dataUpdateCount > u.dataUpdateCount ||
        d.errorUpdateCount > u.errorUpdateCount,
      isFetching: _,
      isRefetching: _ && !S,
      isLoadingError: R && d.dataUpdatedAt === 0,
      isPaused: w === "paused",
      isPlaceholderData: f,
      isPreviousData: p,
      isRefetchError: R && d.dataUpdatedAt !== 0,
      isStale: Jf(t, r),
      refetch: this.refetch,
      remove: this.remove,
    };
  }
  updateResult(t) {
    const r = this.currentResult,
      n = this.createResult(this.currentQuery, this.options);
    if (
      ((this.currentResultState = this.currentQuery.state),
      (this.currentResultOptions = this.options),
      ol(n, r))
    )
      return;
    this.currentResult = n;
    const i = { cache: !0 },
      s = () => {
        if (!r) return !0;
        const { notifyOnChangeProps: a } = this.options,
          o = typeof a == "function" ? a() : a;
        if (o === "all" || (!o && !this.trackedProps.size)) return !0;
        const l = new Set(o ?? this.trackedProps);
        return (
          this.options.useErrorBoundary && l.add("error"),
          Object.keys(this.currentResult).some((u) => {
            const c = u;
            return this.currentResult[c] !== r[c] && l.has(c);
          })
        );
      };
    (t == null ? void 0 : t.listeners) !== !1 && s() && (i.listeners = !0),
      this.notify({ ...i, ...t });
  }
  updateQuery() {
    const t = this.client.getQueryCache().build(this.client, this.options);
    if (t === this.currentQuery) return;
    const r = this.currentQuery;
    (this.currentQuery = t),
      (this.currentQueryInitialState = t.state),
      (this.previousQueryResult = this.currentResult),
      this.hasListeners() &&
        (r == null || r.removeObserver(this), t.addObserver(this));
  }
  onQueryUpdate(t) {
    const r = {};
    t.type === "success"
      ? (r.onSuccess = !t.manual)
      : t.type === "error" && !So(t.error) && (r.onError = !0),
      this.updateResult(r),
      this.hasListeners() && this.updateTimers();
  }
  notify(t) {
    Me.batch(() => {
      if (t.onSuccess) {
        var r, n, i, s;
        (r = (n = this.options).onSuccess) == null ||
          r.call(n, this.currentResult.data),
          (i = (s = this.options).onSettled) == null ||
            i.call(s, this.currentResult.data, null);
      } else if (t.onError) {
        var a, o, l, u;
        (a = (o = this.options).onError) == null ||
          a.call(o, this.currentResult.error),
          (l = (u = this.options).onSettled) == null ||
            l.call(u, void 0, this.currentResult.error);
      }
      t.listeners &&
        this.listeners.forEach(({ listener: c }) => {
          c(this.currentResult);
        }),
        t.cache &&
          this.client
            .getQueryCache()
            .notify({
              query: this.currentQuery,
              type: "observerResultsUpdated",
            });
    });
  }
}
function xS(e, t) {
  return (
    t.enabled !== !1 &&
    !e.state.dataUpdatedAt &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function om(e, t) {
  return xS(e, t) || (e.state.dataUpdatedAt > 0 && hd(e, t, t.refetchOnMount));
}
function hd(e, t, r) {
  if (t.enabled !== !1) {
    const n = typeof r == "function" ? r(e) : r;
    return n === "always" || (n !== !1 && Jf(e, t));
  }
  return !1;
}
function lm(e, t, r, n) {
  return (
    r.enabled !== !1 &&
    (e !== t || n.enabled === !1) &&
    (!r.suspense || e.state.status !== "error") &&
    Jf(e, r)
  );
}
function Jf(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function CS(e, t, r) {
  return r.keepPreviousData
    ? !1
    : r.placeholderData !== void 0
    ? t.isPlaceholderData
    : !ol(e.getCurrentResult(), t);
}
let ES = class extends ss {
  constructor(t, r) {
    super(),
      (this.client = t),
      this.setOptions(r),
      this.bindMethods(),
      this.updateResult();
  }
  bindMethods() {
    (this.mutate = this.mutate.bind(this)),
      (this.reset = this.reset.bind(this));
  }
  setOptions(t) {
    var r;
    const n = this.options;
    (this.options = this.client.defaultMutationOptions(t)),
      ol(n, this.options) ||
        this.client
          .getMutationCache()
          .notify({
            type: "observerOptionsUpdated",
            mutation: this.currentMutation,
            observer: this,
          }),
      (r = this.currentMutation) == null || r.setOptions(this.options);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.currentMutation) == null || t.removeObserver(this);
    }
  }
  onMutationUpdate(t) {
    this.updateResult();
    const r = { listeners: !0 };
    t.type === "success"
      ? (r.onSuccess = !0)
      : t.type === "error" && (r.onError = !0),
      this.notify(r);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  reset() {
    (this.currentMutation = void 0),
      this.updateResult(),
      this.notify({ listeners: !0 });
  }
  mutate(t, r) {
    return (
      (this.mutateOptions = r),
      this.currentMutation && this.currentMutation.removeObserver(this),
      (this.currentMutation = this.client
        .getMutationCache()
        .build(this.client, {
          ...this.options,
          variables: typeof t < "u" ? t : this.options.variables,
        })),
      this.currentMutation.addObserver(this),
      this.currentMutation.execute()
    );
  }
  updateResult() {
    const t = this.currentMutation ? this.currentMutation.state : hy(),
      r = {
        ...t,
        isLoading: t.status === "loading",
        isSuccess: t.status === "success",
        isError: t.status === "error",
        isIdle: t.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      };
    this.currentResult = r;
  }
  notify(t) {
    Me.batch(() => {
      if (this.mutateOptions && this.hasListeners()) {
        if (t.onSuccess) {
          var r, n, i, s;
          (r = (n = this.mutateOptions).onSuccess) == null ||
            r.call(
              n,
              this.currentResult.data,
              this.currentResult.variables,
              this.currentResult.context
            ),
            (i = (s = this.mutateOptions).onSettled) == null ||
              i.call(
                s,
                this.currentResult.data,
                null,
                this.currentResult.variables,
                this.currentResult.context
              );
        } else if (t.onError) {
          var a, o, l, u;
          (a = (o = this.mutateOptions).onError) == null ||
            a.call(
              o,
              this.currentResult.error,
              this.currentResult.variables,
              this.currentResult.context
            ),
            (l = (u = this.mutateOptions).onSettled) == null ||
              l.call(
                u,
                void 0,
                this.currentResult.error,
                this.currentResult.variables,
                this.currentResult.context
              );
        }
      }
      t.listeners &&
        this.listeners.forEach(({ listener: c }) => {
          c(this.currentResult);
        });
    });
  }
};
var py = { exports: {} },
  my = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yi = x;
function PS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var OS = typeof Object.is == "function" ? Object.is : PS,
  TS = Yi.useState,
  AS = Yi.useEffect,
  RS = Yi.useLayoutEffect,
  DS = Yi.useDebugValue;
function NS(e, t) {
  var r = t(),
    n = TS({ inst: { value: r, getSnapshot: t } }),
    i = n[0].inst,
    s = n[1];
  return (
    RS(
      function () {
        (i.value = r), (i.getSnapshot = t), Wu(i) && s({ inst: i });
      },
      [e, r, t]
    ),
    AS(
      function () {
        return (
          Wu(i) && s({ inst: i }),
          e(function () {
            Wu(i) && s({ inst: i });
          })
        );
      },
      [e]
    ),
    DS(r),
    r
  );
}
function Wu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !OS(e, r);
  } catch {
    return !0;
  }
}
function IS(e, t) {
  return t();
}
var $S =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? IS
    : NS;
my.useSyncExternalStore =
  Yi.useSyncExternalStore !== void 0 ? Yi.useSyncExternalStore : $S;
py.exports = my;
var LS = py.exports;
const gy = LS.useSyncExternalStore,
  um = x.createContext(void 0),
  vy = x.createContext(!1);
function yy(e, t) {
  return (
    e ||
    (t && typeof window < "u"
      ? (window.ReactQueryClientContext ||
          (window.ReactQueryClientContext = um),
        window.ReactQueryClientContext)
      : um)
  );
}
const Xt = ({ context: e } = {}) => {
    const t = x.useContext(yy(e, x.useContext(vy)));
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  MS = ({ client: e, children: t, context: r, contextSharing: n = !1 }) => {
    x.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    );
    const i = yy(r, n);
    return x.createElement(
      vy.Provider,
      { value: !r && n },
      x.createElement(i.Provider, { value: e }, t)
    );
  },
  wy = x.createContext(!1),
  FS = () => x.useContext(wy);
wy.Provider;
function jS() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
const US = x.createContext(jS()),
  zS = () => x.useContext(US);
function by(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
const BS = (e, t) => {
    (e.suspense || e.useErrorBoundary) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  WS = (e) => {
    x.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  VS = ({ result: e, errorResetBoundary: t, useErrorBoundary: r, query: n }) =>
    e.isError && !t.isReset() && !e.isFetching && by(r, [e.error, n]),
  HS = (e) => {
    e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
  },
  qS = (e, t) => e.isLoading && e.isFetching && !t,
  QS = (e, t, r) => (e == null ? void 0 : e.suspense) && qS(t, r),
  YS = (e, t, r) =>
    t
      .fetchOptimistic(e)
      .then(({ data: n }) => {
        e.onSuccess == null || e.onSuccess(n),
          e.onSettled == null || e.onSettled(n, null);
      })
      .catch((n) => {
        r.clearReset(),
          e.onError == null || e.onError(n),
          e.onSettled == null || e.onSettled(void 0, n);
      });
function GS(e, t) {
  const r = Xt({ context: e.context }),
    n = FS(),
    i = zS(),
    s = r.defaultQueryOptions(e);
  (s._optimisticResults = n ? "isRestoring" : "optimistic"),
    s.onError && (s.onError = Me.batchCalls(s.onError)),
    s.onSuccess && (s.onSuccess = Me.batchCalls(s.onSuccess)),
    s.onSettled && (s.onSettled = Me.batchCalls(s.onSettled)),
    HS(s),
    BS(s, i),
    WS(i);
  const [a] = x.useState(() => new t(r, s)),
    o = a.getOptimisticResult(s);
  if (
    (gy(
      x.useCallback(
        (l) => {
          const u = n ? () => {} : a.subscribe(Me.batchCalls(l));
          return a.updateResult(), u;
        },
        [a, n]
      ),
      () => a.getCurrentResult(),
      () => a.getCurrentResult()
    ),
    x.useEffect(() => {
      a.setOptions(s, { listeners: !1 });
    }, [s, a]),
    QS(s, o, n))
  )
    throw YS(s, a, i);
  if (
    VS({
      result: o,
      errorResetBoundary: i,
      useErrorBoundary: s.useErrorBoundary,
      query: a.getCurrentQuery(),
    })
  )
    throw o.error;
  return s.notifyOnChangeProps ? o : a.trackResult(o);
}
function Bl(e, t, r) {
  const n = Ds(e, t, r);
  return GS(n, SS);
}
function jr(e, t, r) {
  const n = uS(e, t, r),
    i = Xt({ context: n.context }),
    [s] = x.useState(() => new ES(i, n));
  x.useEffect(() => {
    s.setOptions(n);
  }, [s, n]);
  const a = gy(
      x.useCallback((l) => s.subscribe(Me.batchCalls(l)), [s]),
      () => s.getCurrentResult(),
      () => s.getCurrentResult()
    ),
    o = x.useCallback(
      (l, u) => {
        s.mutate(l, u).catch(KS);
      },
      [s]
    );
  if (a.error && by(s.options.useErrorBoundary, [a.error])) throw a.error;
  return { ...a, mutate: o, mutateAsync: a.mutate };
}
function KS() {}
const XS = function () {
  return null;
};
var ky = { exports: {} },
  we = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ge = typeof Symbol == "function" && Symbol.for,
  Zf = Ge ? Symbol.for("react.element") : 60103,
  eh = Ge ? Symbol.for("react.portal") : 60106,
  Wl = Ge ? Symbol.for("react.fragment") : 60107,
  Vl = Ge ? Symbol.for("react.strict_mode") : 60108,
  Hl = Ge ? Symbol.for("react.profiler") : 60114,
  ql = Ge ? Symbol.for("react.provider") : 60109,
  Ql = Ge ? Symbol.for("react.context") : 60110,
  th = Ge ? Symbol.for("react.async_mode") : 60111,
  Yl = Ge ? Symbol.for("react.concurrent_mode") : 60111,
  Gl = Ge ? Symbol.for("react.forward_ref") : 60112,
  Kl = Ge ? Symbol.for("react.suspense") : 60113,
  JS = Ge ? Symbol.for("react.suspense_list") : 60120,
  Xl = Ge ? Symbol.for("react.memo") : 60115,
  Jl = Ge ? Symbol.for("react.lazy") : 60116,
  ZS = Ge ? Symbol.for("react.block") : 60121,
  ex = Ge ? Symbol.for("react.fundamental") : 60117,
  tx = Ge ? Symbol.for("react.responder") : 60118,
  rx = Ge ? Symbol.for("react.scope") : 60119;
function $t(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Zf:
        switch (((e = e.type), e)) {
          case th:
          case Yl:
          case Wl:
          case Hl:
          case Vl:
          case Kl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ql:
              case Gl:
              case Jl:
              case Xl:
              case ql:
                return e;
              default:
                return t;
            }
        }
      case eh:
        return t;
    }
  }
}
function _y(e) {
  return $t(e) === Yl;
}
we.AsyncMode = th;
we.ConcurrentMode = Yl;
we.ContextConsumer = Ql;
we.ContextProvider = ql;
we.Element = Zf;
we.ForwardRef = Gl;
we.Fragment = Wl;
we.Lazy = Jl;
we.Memo = Xl;
we.Portal = eh;
we.Profiler = Hl;
we.StrictMode = Vl;
we.Suspense = Kl;
we.isAsyncMode = function (e) {
  return _y(e) || $t(e) === th;
};
we.isConcurrentMode = _y;
we.isContextConsumer = function (e) {
  return $t(e) === Ql;
};
we.isContextProvider = function (e) {
  return $t(e) === ql;
};
we.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zf;
};
we.isForwardRef = function (e) {
  return $t(e) === Gl;
};
we.isFragment = function (e) {
  return $t(e) === Wl;
};
we.isLazy = function (e) {
  return $t(e) === Jl;
};
we.isMemo = function (e) {
  return $t(e) === Xl;
};
we.isPortal = function (e) {
  return $t(e) === eh;
};
we.isProfiler = function (e) {
  return $t(e) === Hl;
};
we.isStrictMode = function (e) {
  return $t(e) === Vl;
};
we.isSuspense = function (e) {
  return $t(e) === Kl;
};
we.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Wl ||
    e === Yl ||
    e === Hl ||
    e === Vl ||
    e === Kl ||
    e === JS ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Jl ||
        e.$$typeof === Xl ||
        e.$$typeof === ql ||
        e.$$typeof === Ql ||
        e.$$typeof === Gl ||
        e.$$typeof === ex ||
        e.$$typeof === tx ||
        e.$$typeof === rx ||
        e.$$typeof === ZS))
  );
};
we.typeOf = $t;
ky.exports = we;
var rh = ky.exports;
function nx(e) {
  function t(j, B, W, ee, E) {
    for (
      var re = 0,
        M = 0,
        Ce = 0,
        de = 0,
        fe,
        te,
        ze = 0,
        Ke = 0,
        ue,
        Xe = (ue = fe = 0),
        pe = 0,
        b = 0,
        C = 0,
        P = 0,
        U = W.length,
        L = U - 1,
        N,
        D = "",
        X = "",
        Ae = "",
        Je = "",
        lt;
      pe < U;

    ) {
      if (
        ((te = W.charCodeAt(pe)),
        pe === L &&
          M + de + Ce + re !== 0 &&
          (M !== 0 && (te = M === 47 ? 10 : 47), (de = Ce = re = 0), U++, L++),
        M + de + Ce + re === 0)
      ) {
        if (
          pe === L &&
          (0 < b && (D = D.replace(h, "")), 0 < D.trim().length)
        ) {
          switch (te) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              D += W.charAt(pe);
          }
          te = 59;
        }
        switch (te) {
          case 123:
            for (
              D = D.trim(), fe = D.charCodeAt(0), ue = 1, P = ++pe;
              pe < U;

            ) {
              switch ((te = W.charCodeAt(pe))) {
                case 123:
                  ue++;
                  break;
                case 125:
                  ue--;
                  break;
                case 47:
                  switch ((te = W.charCodeAt(pe + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (Xe = pe + 1; Xe < L; ++Xe)
                          switch (W.charCodeAt(Xe)) {
                            case 47:
                              if (
                                te === 42 &&
                                W.charCodeAt(Xe - 1) === 42 &&
                                pe + 2 !== Xe
                              ) {
                                pe = Xe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (te === 47) {
                                pe = Xe + 1;
                                break e;
                              }
                          }
                        pe = Xe;
                      }
                  }
                  break;
                case 91:
                  te++;
                case 40:
                  te++;
                case 34:
                case 39:
                  for (; pe++ < L && W.charCodeAt(pe) !== te; );
              }
              if (ue === 0) break;
              pe++;
            }
            switch (
              ((ue = W.substring(P, pe)),
              fe === 0 && (fe = (D = D.replace(d, "").trim()).charCodeAt(0)),
              fe)
            ) {
              case 64:
                switch (
                  (0 < b && (D = D.replace(h, "")), (te = D.charCodeAt(1)), te)
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    b = B;
                    break;
                  default:
                    b = me;
                }
                if (
                  ((ue = t(B, b, ue, te, E + 1)),
                  (P = ue.length),
                  0 < $ &&
                    ((b = r(me, D, C)),
                    (lt = o(3, ue, b, B, G, V, P, te, E, ee)),
                    (D = b.join("")),
                    lt !== void 0 &&
                      (P = (ue = lt.trim()).length) === 0 &&
                      ((te = 0), (ue = ""))),
                  0 < P)
                )
                  switch (te) {
                    case 115:
                      D = D.replace(R, a);
                    case 100:
                    case 109:
                    case 45:
                      ue = D + "{" + ue + "}";
                      break;
                    case 107:
                      (D = D.replace(f, "$1 $2")),
                        (ue = D + "{" + ue + "}"),
                        (ue =
                          Z === 1 || (Z === 2 && s("@" + ue, 3))
                            ? "@-webkit-" + ue + "@" + ue
                            : "@" + ue);
                      break;
                    default:
                      (ue = D + ue), ee === 112 && (ue = ((X += ue), ""));
                  }
                else ue = "";
                break;
              default:
                ue = t(B, r(B, D, C), ue, ee, E + 1);
            }
            (Ae += ue),
              (ue = C = b = Xe = fe = 0),
              (D = ""),
              (te = W.charCodeAt(++pe));
            break;
          case 125:
          case 59:
            if (
              ((D = (0 < b ? D.replace(h, "") : D).trim()), 1 < (P = D.length))
            )
              switch (
                (Xe === 0 &&
                  ((fe = D.charCodeAt(0)),
                  fe === 45 || (96 < fe && 123 > fe)) &&
                  (P = (D = D.replace(" ", ":")).length),
                0 < $ &&
                  (lt = o(1, D, B, j, G, V, X.length, ee, E, ee)) !== void 0 &&
                  (P = (D = lt.trim()).length) === 0 &&
                  (D = "\0\0"),
                (fe = D.charCodeAt(0)),
                (te = D.charCodeAt(1)),
                fe)
              ) {
                case 0:
                  break;
                case 64:
                  if (te === 105 || te === 99) {
                    Je += D + W.charAt(pe);
                    break;
                  }
                default:
                  D.charCodeAt(P - 1) !== 58 &&
                    (X += i(D, fe, te, D.charCodeAt(2)));
              }
            (C = b = Xe = fe = 0), (D = ""), (te = W.charCodeAt(++pe));
        }
      }
      switch (te) {
        case 13:
        case 10:
          M === 47
            ? (M = 0)
            : 1 + fe === 0 &&
              ee !== 107 &&
              0 < D.length &&
              ((b = 1), (D += "\0")),
            0 < $ * J && o(0, D, B, j, G, V, X.length, ee, E, ee),
            (V = 1),
            G++;
          break;
        case 59:
        case 125:
          if (M + de + Ce + re === 0) {
            V++;
            break;
          }
        default:
          switch ((V++, (N = W.charAt(pe)), te)) {
            case 9:
            case 32:
              if (de + re + M === 0)
                switch (ze) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    N = "";
                    break;
                  default:
                    te !== 32 && (N = " ");
                }
              break;
            case 0:
              N = "\\0";
              break;
            case 12:
              N = "\\f";
              break;
            case 11:
              N = "\\v";
              break;
            case 38:
              de + M + re === 0 && ((b = C = 1), (N = "\f" + N));
              break;
            case 108:
              if (de + M + re + ne === 0 && 0 < Xe)
                switch (pe - Xe) {
                  case 2:
                    ze === 112 && W.charCodeAt(pe - 3) === 58 && (ne = ze);
                  case 8:
                    Ke === 111 && (ne = Ke);
                }
              break;
            case 58:
              de + M + re === 0 && (Xe = pe);
              break;
            case 44:
              M + Ce + de + re === 0 && ((b = 1), (N += "\r"));
              break;
            case 34:
            case 39:
              M === 0 && (de = de === te ? 0 : de === 0 ? te : de);
              break;
            case 91:
              de + M + Ce === 0 && re++;
              break;
            case 93:
              de + M + Ce === 0 && re--;
              break;
            case 41:
              de + M + re === 0 && Ce--;
              break;
            case 40:
              if (de + M + re === 0) {
                if (fe === 0)
                  switch (2 * ze + 3 * Ke) {
                    case 533:
                      break;
                    default:
                      fe = 1;
                  }
                Ce++;
              }
              break;
            case 64:
              M + Ce + de + re + Xe + ue === 0 && (ue = 1);
              break;
            case 42:
            case 47:
              if (!(0 < de + re + Ce))
                switch (M) {
                  case 0:
                    switch (2 * te + 3 * W.charCodeAt(pe + 1)) {
                      case 235:
                        M = 47;
                        break;
                      case 220:
                        (P = pe), (M = 42);
                    }
                    break;
                  case 42:
                    te === 47 &&
                      ze === 42 &&
                      P + 2 !== pe &&
                      (W.charCodeAt(P + 2) === 33 &&
                        (X += W.substring(P, pe + 1)),
                      (N = ""),
                      (M = 0));
                }
          }
          M === 0 && (D += N);
      }
      (Ke = ze), (ze = te), pe++;
    }
    if (((P = X.length), 0 < P)) {
      if (
        ((b = B),
        0 < $ &&
          ((lt = o(2, X, b, j, G, V, P, ee, E, ee)),
          lt !== void 0 && (X = lt).length === 0))
      )
        return Je + X + Ae;
      if (((X = b.join(",") + "{" + X + "}"), Z * ne !== 0)) {
        switch ((Z !== 2 || s(X, 2) || (ne = 0), ne)) {
          case 111:
            X = X.replace(_, ":-moz-$1") + X;
            break;
          case 112:
            X =
              X.replace(v, "::-webkit-input-$1") +
              X.replace(v, "::-moz-$1") +
              X.replace(v, ":-ms-input-$1") +
              X;
        }
        ne = 0;
      }
    }
    return Je + X + Ae;
  }
  function r(j, B, W) {
    var ee = B.trim().split(k);
    B = ee;
    var E = ee.length,
      re = j.length;
    switch (re) {
      case 0:
      case 1:
        var M = 0;
        for (j = re === 0 ? "" : j[0] + " "; M < E; ++M)
          B[M] = n(j, B[M], W).trim();
        break;
      default:
        var Ce = (M = 0);
        for (B = []; M < E; ++M)
          for (var de = 0; de < re; ++de)
            B[Ce++] = n(j[de] + " ", ee[M], W).trim();
    }
    return B;
  }
  function n(j, B, W) {
    var ee = B.charCodeAt(0);
    switch ((33 > ee && (ee = (B = B.trim()).charCodeAt(0)), ee)) {
      case 38:
        return B.replace(p, "$1" + j.trim());
      case 58:
        return j.trim() + B.replace(p, "$1" + j.trim());
      default:
        if (0 < 1 * W && 0 < B.indexOf("\f"))
          return B.replace(p, (j.charCodeAt(0) === 58 ? "" : "$1") + j.trim());
    }
    return j + B;
  }
  function i(j, B, W, ee) {
    var E = j + ";",
      re = 2 * B + 3 * W + 4 * ee;
    if (re === 944) {
      j = E.indexOf(":", 9) + 1;
      var M = E.substring(j, E.length - 1).trim();
      return (
        (M = E.substring(0, j).trim() + M + ";"),
        Z === 1 || (Z === 2 && s(M, 1)) ? "-webkit-" + M + M : M
      );
    }
    if (Z === 0 || (Z === 2 && !s(E, 1))) return E;
    switch (re) {
      case 1015:
        return E.charCodeAt(10) === 97 ? "-webkit-" + E + E : E;
      case 951:
        return E.charCodeAt(3) === 116 ? "-webkit-" + E + E : E;
      case 963:
        return E.charCodeAt(5) === 110 ? "-webkit-" + E + E : E;
      case 1009:
        if (E.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + E + E;
      case 978:
        return "-webkit-" + E + "-moz-" + E + E;
      case 1019:
      case 983:
        return "-webkit-" + E + "-moz-" + E + "-ms-" + E + E;
      case 883:
        if (E.charCodeAt(8) === 45) return "-webkit-" + E + E;
        if (0 < E.indexOf("image-set(", 11))
          return E.replace(he, "$1-webkit-$2") + E;
        break;
      case 932:
        if (E.charCodeAt(4) === 45)
          switch (E.charCodeAt(5)) {
            case 103:
              return (
                "-webkit-box-" +
                E.replace("-grow", "") +
                "-webkit-" +
                E +
                "-ms-" +
                E.replace("grow", "positive") +
                E
              );
            case 115:
              return (
                "-webkit-" + E + "-ms-" + E.replace("shrink", "negative") + E
              );
            case 98:
              return (
                "-webkit-" +
                E +
                "-ms-" +
                E.replace("basis", "preferred-size") +
                E
              );
          }
        return "-webkit-" + E + "-ms-" + E + E;
      case 964:
        return "-webkit-" + E + "-ms-flex-" + E + E;
      case 1023:
        if (E.charCodeAt(8) !== 99) break;
        return (
          (M = E.substring(E.indexOf(":", 15))
            .replace("flex-", "")
            .replace("space-between", "justify")),
          "-webkit-box-pack" + M + "-webkit-" + E + "-ms-flex-pack" + M + E
        );
      case 1005:
        return y.test(E)
          ? E.replace(m, ":-webkit-") + E.replace(m, ":-moz-") + E
          : E;
      case 1e3:
        switch (
          ((M = E.substring(13).trim()),
          (B = M.indexOf("-") + 1),
          M.charCodeAt(0) + M.charCodeAt(B))
        ) {
          case 226:
            M = E.replace(S, "tb");
            break;
          case 232:
            M = E.replace(S, "tb-rl");
            break;
          case 220:
            M = E.replace(S, "lr");
            break;
          default:
            return E;
        }
        return "-webkit-" + E + "-ms-" + M + E;
      case 1017:
        if (E.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (
          ((B = (E = j).length - 10),
          (M = (E.charCodeAt(B) === 33 ? E.substring(0, B) : E)
            .substring(j.indexOf(":", 7) + 1)
            .trim()),
          (re = M.charCodeAt(0) + (M.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > M.charCodeAt(8)) break;
          case 115:
            E = E.replace(M, "-webkit-" + M) + ";" + E;
            break;
          case 207:
          case 102:
            E =
              E.replace(M, "-webkit-" + (102 < re ? "inline-" : "") + "box") +
              ";" +
              E.replace(M, "-webkit-" + M) +
              ";" +
              E.replace(M, "-ms-" + M + "box") +
              ";" +
              E;
        }
        return E + ";";
      case 938:
        if (E.charCodeAt(5) === 45)
          switch (E.charCodeAt(6)) {
            case 105:
              return (
                (M = E.replace("-items", "")),
                "-webkit-" + E + "-webkit-box-" + M + "-ms-flex-" + M + E
              );
            case 115:
              return "-webkit-" + E + "-ms-flex-item-" + E.replace(T, "") + E;
            default:
              return (
                "-webkit-" +
                E +
                "-ms-flex-line-pack" +
                E.replace("align-content", "").replace(T, "") +
                E
              );
          }
        break;
      case 973:
      case 989:
        if (E.charCodeAt(3) !== 45 || E.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (z.test(j) === !0)
          return (M = j.substring(j.indexOf(":") + 1)).charCodeAt(0) === 115
            ? i(j.replace("stretch", "fill-available"), B, W, ee).replace(
                ":fill-available",
                ":stretch"
              )
            : E.replace(M, "-webkit-" + M) +
                E.replace(M, "-moz-" + M.replace("fill-", "")) +
                E;
        break;
      case 962:
        if (
          ((E =
            "-webkit-" + E + (E.charCodeAt(5) === 102 ? "-ms-" + E : "") + E),
          W + ee === 211 &&
            E.charCodeAt(13) === 105 &&
            0 < E.indexOf("transform", 10))
        )
          return (
            E.substring(0, E.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") +
            E
          );
    }
    return E;
  }
  function s(j, B) {
    var W = j.indexOf(B === 1 ? ":" : "{"),
      ee = j.substring(0, B !== 3 ? W : 10);
    return (
      (W = j.substring(W + 1, j.length - 1)),
      K(B !== 2 ? ee : ee.replace(q, "$1"), W, B)
    );
  }
  function a(j, B) {
    var W = i(B, B.charCodeAt(0), B.charCodeAt(1), B.charCodeAt(2));
    return W !== B + ";"
      ? W.replace(O, " or ($1)").substring(4)
      : "(" + B + ")";
  }
  function o(j, B, W, ee, E, re, M, Ce, de, fe) {
    for (var te = 0, ze = B, Ke; te < $; ++te)
      switch ((Ke = le[te].call(c, j, ze, W, ee, E, re, M, Ce, de, fe))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ze = Ke;
      }
    if (ze !== B) return ze;
  }
  function l(j) {
    switch (j) {
      case void 0:
      case null:
        $ = le.length = 0;
        break;
      default:
        if (typeof j == "function") le[$++] = j;
        else if (typeof j == "object")
          for (var B = 0, W = j.length; B < W; ++B) l(j[B]);
        else J = !!j | 0;
    }
    return l;
  }
  function u(j) {
    return (
      (j = j.prefix),
      j !== void 0 &&
        ((K = null),
        j ? (typeof j != "function" ? (Z = 1) : ((Z = 2), (K = j))) : (Z = 0)),
      u
    );
  }
  function c(j, B) {
    var W = j;
    if ((33 > W.charCodeAt(0) && (W = W.trim()), (ge = W), (W = [ge]), 0 < $)) {
      var ee = o(-1, B, W, W, G, V, 0, 0, 0, 0);
      ee !== void 0 && typeof ee == "string" && (B = ee);
    }
    var E = t(me, W, B, 0, 0);
    return (
      0 < $ &&
        ((ee = o(-2, E, W, W, G, V, E.length, 0, 0, 0)),
        ee !== void 0 && (E = ee)),
      (ge = ""),
      (ne = 0),
      (V = G = 1),
      E
    );
  }
  var d = /^\0+/g,
    h = /[\0\r\f]/g,
    m = /: */g,
    y = /zoo|gra/,
    w = /([,: ])(transform)/g,
    k = /,\r+?/g,
    p = /([\t\r\n ])*\f?&/g,
    f = /@(k\w+)\s*(\S*)\s*/,
    v = /::(place)/g,
    _ = /:(read-only)/g,
    S = /[svh]\w+-[tblr]{2}/,
    R = /\(\s*(.*)\s*\)/g,
    O = /([\s\S]*?);/g,
    T = /-self|flex-/g,
    q = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    z = /stretch|:\s*\w+\-(?:conte|avail)/,
    he = /([^-])(image-set\()/,
    V = 1,
    G = 1,
    ne = 0,
    Z = 1,
    me = [],
    le = [],
    $ = 0,
    K = null,
    J = 0,
    ge = "";
  return (c.use = l), (c.set = u), e !== void 0 && u(e), c;
}
var ix = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
function sx(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ax =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  cm = sx(function (e) {
    return (
      ax.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  nh = rh,
  ox = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  lx = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  ux = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Sy = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  ih = {};
ih[nh.ForwardRef] = ux;
ih[nh.Memo] = Sy;
function dm(e) {
  return nh.isMemo(e) ? Sy : ih[e.$$typeof] || ox;
}
var cx = Object.defineProperty,
  dx = Object.getOwnPropertyNames,
  fm = Object.getOwnPropertySymbols,
  fx = Object.getOwnPropertyDescriptor,
  hx = Object.getPrototypeOf,
  hm = Object.prototype;
function xy(e, t, r) {
  if (typeof t != "string") {
    if (hm) {
      var n = hx(t);
      n && n !== hm && xy(e, n, r);
    }
    var i = dx(t);
    fm && (i = i.concat(fm(t)));
    for (var s = dm(e), a = dm(t), o = 0; o < i.length; ++o) {
      var l = i[o];
      if (!lx[l] && !(r && r[l]) && !(a && a[l]) && !(s && s[l])) {
        var u = fx(t, l);
        try {
          cx(e, l, u);
        } catch {}
      }
    }
  }
  return e;
}
var px = xy;
const mx = Yd(px);
function pr() {
  return (pr =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var pm = function (e, t) {
    for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
      r.push(t[n], e[n + 1]);
    return r;
  },
  pd = function (e) {
    return (
      e !== null &&
      typeof e == "object" &&
      (e.toString ? e.toString() : Object.prototype.toString.call(e)) ===
        "[object Object]" &&
      !rh.typeOf(e)
    );
  },
  cl = Object.freeze([]),
  mn = Object.freeze({});
function ya(e) {
  return typeof e == "function";
}
function mm(e) {
  return e.displayName || e.name || "Component";
}
function sh(e) {
  return e && typeof e.styledComponentId == "string";
}
var Gi =
    (typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    "data-styled",
  ah = typeof window < "u" && "HTMLElement" in window,
  gx = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
        ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
          {}.REACT_APP_SC_DISABLE_SPEEDY
        : {}.SC_DISABLE_SPEEDY !== void 0 &&
          {}.SC_DISABLE_SPEEDY !== "" &&
          {}.SC_DISABLE_SPEEDY !== "false" &&
          {}.SC_DISABLE_SPEEDY)),
  vx = {};
function Ta(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  throw new Error(
    "An error occurred. See https://git.io/JUIaE#" +
      e +
      " for more information." +
      (r.length > 0 ? " Args: " + r.join(", ") : "")
  );
}
var yx = (function () {
    function e(r) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = r);
    }
    var t = e.prototype;
    return (
      (t.indexOfGroup = function (r) {
        for (var n = 0, i = 0; i < r; i++) n += this.groupSizes[i];
        return n;
      }),
      (t.insertRules = function (r, n) {
        if (r >= this.groupSizes.length) {
          for (var i = this.groupSizes, s = i.length, a = s; r >= a; )
            (a <<= 1) < 0 && Ta(16, "" + r);
          (this.groupSizes = new Uint32Array(a)),
            this.groupSizes.set(i),
            (this.length = a);
          for (var o = s; o < a; o++) this.groupSizes[o] = 0;
        }
        for (var l = this.indexOfGroup(r + 1), u = 0, c = n.length; u < c; u++)
          this.tag.insertRule(l, n[u]) && (this.groupSizes[r]++, l++);
      }),
      (t.clearGroup = function (r) {
        if (r < this.length) {
          var n = this.groupSizes[r],
            i = this.indexOfGroup(r),
            s = i + n;
          this.groupSizes[r] = 0;
          for (var a = i; a < s; a++) this.tag.deleteRule(i);
        }
      }),
      (t.getGroup = function (r) {
        var n = "";
        if (r >= this.length || this.groupSizes[r] === 0) return n;
        for (
          var i = this.groupSizes[r],
            s = this.indexOfGroup(r),
            a = s + i,
            o = s;
          o < a;
          o++
        )
          n +=
            this.tag.getRule(o) +
            `/*!sc*/
`;
        return n;
      }),
      e
    );
  })(),
  xo = new Map(),
  dl = new Map(),
  Hs = 1,
  to = function (e) {
    if (xo.has(e)) return xo.get(e);
    for (; dl.has(Hs); ) Hs++;
    var t = Hs++;
    return xo.set(e, t), dl.set(t, e), t;
  },
  wx = function (e) {
    return dl.get(e);
  },
  bx = function (e, t) {
    t >= Hs && (Hs = t + 1), xo.set(e, t), dl.set(t, e);
  },
  kx = "style[" + Gi + '][data-styled-version="5.3.10"]',
  _x = new RegExp("^" + Gi + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  Sx = function (e, t, r) {
    for (var n, i = r.split(","), s = 0, a = i.length; s < a; s++)
      (n = i[s]) && e.registerName(t, n);
  },
  xx = function (e, t) {
    for (
      var r = (t.textContent || "").split(`/*!sc*/
`),
        n = [],
        i = 0,
        s = r.length;
      i < s;
      i++
    ) {
      var a = r[i].trim();
      if (a) {
        var o = a.match(_x);
        if (o) {
          var l = 0 | parseInt(o[1], 10),
            u = o[2];
          l !== 0 && (bx(u, l), Sx(e, u, o[3]), e.getTag().insertRules(l, n)),
            (n.length = 0);
        } else n.push(a);
      }
    }
  },
  Cx = function () {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
  },
  Cy = function (e) {
    var t = document.head,
      r = e || t,
      n = document.createElement("style"),
      i = (function (o) {
        for (var l = o.childNodes, u = l.length; u >= 0; u--) {
          var c = l[u];
          if (c && c.nodeType === 1 && c.hasAttribute(Gi)) return c;
        }
      })(r),
      s = i !== void 0 ? i.nextSibling : null;
    n.setAttribute(Gi, "active"),
      n.setAttribute("data-styled-version", "5.3.10");
    var a = Cx();
    return a && n.setAttribute("nonce", a), r.insertBefore(n, s), n;
  },
  Ex = (function () {
    function e(r) {
      var n = (this.element = Cy(r));
      n.appendChild(document.createTextNode("")),
        (this.sheet = (function (i) {
          if (i.sheet) return i.sheet;
          for (var s = document.styleSheets, a = 0, o = s.length; a < o; a++) {
            var l = s[a];
            if (l.ownerNode === i) return l;
          }
          Ta(17);
        })(n)),
        (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (r, n) {
        try {
          return this.sheet.insertRule(n, r), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (t.deleteRule = function (r) {
        this.sheet.deleteRule(r), this.length--;
      }),
      (t.getRule = function (r) {
        var n = this.sheet.cssRules[r];
        return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
      }),
      e
    );
  })(),
  Px = (function () {
    function e(r) {
      var n = (this.element = Cy(r));
      (this.nodes = n.childNodes), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (r, n) {
        if (r <= this.length && r >= 0) {
          var i = document.createTextNode(n),
            s = this.nodes[r];
          return this.element.insertBefore(i, s || null), this.length++, !0;
        }
        return !1;
      }),
      (t.deleteRule = function (r) {
        this.element.removeChild(this.nodes[r]), this.length--;
      }),
      (t.getRule = function (r) {
        return r < this.length ? this.nodes[r].textContent : "";
      }),
      e
    );
  })(),
  Ox = (function () {
    function e(r) {
      (this.rules = []), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (r, n) {
        return (
          r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0)
        );
      }),
      (t.deleteRule = function (r) {
        this.rules.splice(r, 1), this.length--;
      }),
      (t.getRule = function (r) {
        return r < this.length ? this.rules[r] : "";
      }),
      e
    );
  })(),
  gm = ah,
  Tx = { isServer: !ah, useCSSOMInjection: !gx },
  fl = (function () {
    function e(r, n, i) {
      r === void 0 && (r = mn),
        n === void 0 && (n = {}),
        (this.options = pr({}, Tx, {}, r)),
        (this.gs = n),
        (this.names = new Map(i)),
        (this.server = !!r.isServer),
        !this.server &&
          ah &&
          gm &&
          ((gm = !1),
          (function (s) {
            for (
              var a = document.querySelectorAll(kx), o = 0, l = a.length;
              o < l;
              o++
            ) {
              var u = a[o];
              u &&
                u.getAttribute(Gi) !== "active" &&
                (xx(s, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this));
    }
    e.registerId = function (r) {
      return to(r);
    };
    var t = e.prototype;
    return (
      (t.reconstructWithOptions = function (r, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            pr({}, this.options, {}, r),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (t.allocateGSInstance = function (r) {
        return (this.gs[r] = (this.gs[r] || 0) + 1);
      }),
      (t.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((i = (n = this.options).isServer),
            (s = n.useCSSOMInjection),
            (a = n.target),
            (r = i ? new Ox(a) : s ? new Ex(a) : new Px(a)),
            new yx(r)))
        );
        var r, n, i, s, a;
      }),
      (t.hasNameForId = function (r, n) {
        return this.names.has(r) && this.names.get(r).has(n);
      }),
      (t.registerName = function (r, n) {
        if ((to(r), this.names.has(r))) this.names.get(r).add(n);
        else {
          var i = new Set();
          i.add(n), this.names.set(r, i);
        }
      }),
      (t.insertRules = function (r, n, i) {
        this.registerName(r, n), this.getTag().insertRules(to(r), i);
      }),
      (t.clearNames = function (r) {
        this.names.has(r) && this.names.get(r).clear();
      }),
      (t.clearRules = function (r) {
        this.getTag().clearGroup(to(r)), this.clearNames(r);
      }),
      (t.clearTag = function () {
        this.tag = void 0;
      }),
      (t.toString = function () {
        return (function (r) {
          for (var n = r.getTag(), i = n.length, s = "", a = 0; a < i; a++) {
            var o = wx(a);
            if (o !== void 0) {
              var l = r.names.get(o),
                u = n.getGroup(a);
              if (l && u && l.size) {
                var c = Gi + ".g" + a + '[id="' + o + '"]',
                  d = "";
                l !== void 0 &&
                  l.forEach(function (h) {
                    h.length > 0 && (d += h + ",");
                  }),
                  (s +=
                    "" +
                    u +
                    c +
                    '{content:"' +
                    d +
                    `"}/*!sc*/
`);
              }
            }
          }
          return s;
        })(this);
      }),
      e
    );
  })(),
  Ax = /(a)(d)/gi,
  vm = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function md(e) {
  var t,
    r = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) r = vm(t % 52) + r;
  return (vm(t % 52) + r).replace(Ax, "$1-$2");
}
var Ti = function (e, t) {
    for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
    return e;
  },
  Ey = function (e) {
    return Ti(5381, e);
  };
function Py(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (ya(r) && !sh(r)) return !1;
  }
  return !0;
}
var Rx = Ey("5.3.10"),
  Dx = (function () {
    function e(t, r, n) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (n === void 0 || n.isStatic) && Py(t)),
        (this.componentId = r),
        (this.baseHash = Ti(Rx, r)),
        (this.baseStyle = n),
        fl.registerId(r);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, r, n) {
        var i = this.componentId,
          s = [];
        if (
          (this.baseStyle &&
            s.push(this.baseStyle.generateAndInjectStyles(t, r, n)),
          this.isStatic && !n.hash)
        )
          if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId))
            s.push(this.staticRulesId);
          else {
            var a = Jn(this.rules, t, r, n).join(""),
              o = md(Ti(this.baseHash, a) >>> 0);
            if (!r.hasNameForId(i, o)) {
              var l = n(a, "." + o, void 0, i);
              r.insertRules(i, o, l);
            }
            s.push(o), (this.staticRulesId = o);
          }
        else {
          for (
            var u = this.rules.length,
              c = Ti(this.baseHash, n.hash),
              d = "",
              h = 0;
            h < u;
            h++
          ) {
            var m = this.rules[h];
            if (typeof m == "string") d += m;
            else if (m) {
              var y = Jn(m, t, r, n),
                w = Array.isArray(y) ? y.join("") : y;
              (c = Ti(c, w + h)), (d += w);
            }
          }
          if (d) {
            var k = md(c >>> 0);
            if (!r.hasNameForId(i, k)) {
              var p = n(d, "." + k, void 0, i);
              r.insertRules(i, k, p);
            }
            s.push(k);
          }
        }
        return s.join(" ");
      }),
      e
    );
  })(),
  Nx = /^\s*\/\/.*$/gm,
  Ix = [":", "[", ".", "#"];
function $x(e) {
  var t,
    r,
    n,
    i,
    s = e === void 0 ? mn : e,
    a = s.options,
    o = a === void 0 ? mn : a,
    l = s.plugins,
    u = l === void 0 ? cl : l,
    c = new nx(o),
    d = [],
    h = (function (w) {
      function k(p) {
        if (p)
          try {
            w(p + "}");
          } catch {}
      }
      return function (p, f, v, _, S, R, O, T, q, z) {
        switch (p) {
          case 1:
            if (q === 0 && f.charCodeAt(0) === 64) return w(f + ";"), "";
            break;
          case 2:
            if (T === 0) return f + "/*|*/";
            break;
          case 3:
            switch (T) {
              case 102:
              case 112:
                return w(v[0] + f), "";
              default:
                return f + (z === 0 ? "/*|*/" : "");
            }
          case -2:
            f.split("/*|*/}").forEach(k);
        }
      };
    })(function (w) {
      d.push(w);
    }),
    m = function (w, k, p) {
      return (k === 0 && Ix.indexOf(p[r.length]) !== -1) || p.match(i)
        ? w
        : "." + t;
    };
  function y(w, k, p, f) {
    f === void 0 && (f = "&");
    var v = w.replace(Nx, ""),
      _ = k && p ? p + " " + k + " { " + v + " }" : v;
    return (
      (t = f),
      (r = k),
      (n = new RegExp("\\" + r + "\\b", "g")),
      (i = new RegExp("(\\" + r + "\\b){2,}")),
      c(p || !k ? "" : k, _)
    );
  }
  return (
    c.use(
      [].concat(u, [
        function (w, k, p) {
          w === 2 &&
            p.length &&
            p[0].lastIndexOf(r) > 0 &&
            (p[0] = p[0].replace(n, m));
        },
        h,
        function (w) {
          if (w === -2) {
            var k = d;
            return (d = []), k;
          }
        },
      ])
    ),
    (y.hash = u.length
      ? u
          .reduce(function (w, k) {
            return k.name || Ta(15), Ti(w, k.name);
          }, 5381)
          .toString()
      : ""),
    y
  );
}
var Oy = be.createContext();
Oy.Consumer;
var Ty = be.createContext(),
  Lx = (Ty.Consumer, new fl()),
  gd = $x();
function Ay() {
  return x.useContext(Oy) || Lx;
}
function Ry() {
  return x.useContext(Ty) || gd;
}
var Dy = (function () {
    function e(t, r) {
      var n = this;
      (this.inject = function (i, s) {
        s === void 0 && (s = gd);
        var a = n.name + s.hash;
        i.hasNameForId(n.id, a) ||
          i.insertRules(n.id, a, s(n.rules, a, "@keyframes"));
      }),
        (this.toString = function () {
          return Ta(12, String(n.name));
        }),
        (this.name = t),
        (this.id = "sc-keyframes-" + t),
        (this.rules = r);
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = gd), this.name + t.hash;
      }),
      e
    );
  })(),
  Mx = /([A-Z])/,
  Fx = /([A-Z])/g,
  jx = /^ms-/,
  Ux = function (e) {
    return "-" + e.toLowerCase();
  };
function ym(e) {
  return Mx.test(e) ? e.replace(Fx, Ux).replace(jx, "-ms-") : e;
}
var wm = function (e) {
  return e == null || e === !1 || e === "";
};
function Jn(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var i, s = [], a = 0, o = e.length; a < o; a += 1)
      (i = Jn(e[a], t, r, n)) !== "" &&
        (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
    return s;
  }
  if (wm(e)) return "";
  if (sh(e)) return "." + e.styledComponentId;
  if (ya(e)) {
    if (
      typeof (u = e) != "function" ||
      (u.prototype && u.prototype.isReactComponent) ||
      !t
    )
      return e;
    var l = e(t);
    return Jn(l, t, r, n);
  }
  var u;
  return e instanceof Dy
    ? r
      ? (e.inject(r, n), e.getName(n))
      : e
    : pd(e)
    ? (function c(d, h) {
        var m,
          y,
          w = [];
        for (var k in d)
          d.hasOwnProperty(k) &&
            !wm(d[k]) &&
            ((Array.isArray(d[k]) && d[k].isCss) || ya(d[k])
              ? w.push(ym(k) + ":", d[k], ";")
              : pd(d[k])
              ? w.push.apply(w, c(d[k], k))
              : w.push(
                  ym(k) +
                    ": " +
                    ((m = k),
                    (y = d[k]) == null || typeof y == "boolean" || y === ""
                      ? ""
                      : typeof y != "number" ||
                        y === 0 ||
                        m in ix ||
                        m.startsWith("--")
                      ? String(y).trim()
                      : y + "px") +
                    ";"
                ));
        return h ? [h + " {"].concat(w, ["}"]) : w;
      })(e)
    : e.toString();
}
var bm = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function tt(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  return ya(e) || pd(e)
    ? bm(Jn(pm(cl, [e].concat(r))))
    : r.length === 0 && e.length === 1 && typeof e[0] == "string"
    ? e
    : bm(Jn(pm(e, r)));
}
var Ny = function (e, t, r) {
    return (
      r === void 0 && (r = mn), (e.theme !== r.theme && e.theme) || t || r.theme
    );
  },
  zx = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Bx = /(^-|-$)/g;
function Vu(e) {
  return e.replace(zx, "-").replace(Bx, "");
}
var oh = function (e) {
  return md(Ey(e) >>> 0);
};
function ro(e) {
  return typeof e == "string" && !0;
}
var vd = function (e) {
    return (
      typeof e == "function" ||
      (typeof e == "object" && e !== null && !Array.isArray(e))
    );
  },
  Wx = function (e) {
    return e !== "__proto__" && e !== "constructor" && e !== "prototype";
  };
function Vx(e, t, r) {
  var n = e[r];
  vd(t) && vd(n) ? Iy(n, t) : (e[r] = t);
}
function Iy(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  for (var i = 0, s = r; i < s.length; i++) {
    var a = s[i];
    if (vd(a)) for (var o in a) Wx(o) && Vx(e, a[o], o);
  }
  return e;
}
var lh = be.createContext();
lh.Consumer;
var Hu = {};
function $y(e, t, r) {
  var n = sh(e),
    i = !ro(e),
    s = t.attrs,
    a = s === void 0 ? cl : s,
    o = t.componentId,
    l =
      o === void 0
        ? (function (f, v) {
            var _ = typeof f != "string" ? "sc" : Vu(f);
            Hu[_] = (Hu[_] || 0) + 1;
            var S = _ + "-" + oh("5.3.10" + _ + Hu[_]);
            return v ? v + "-" + S : S;
          })(t.displayName, t.parentComponentId)
        : o,
    u = t.displayName,
    c =
      u === void 0
        ? (function (f) {
            return ro(f) ? "styled." + f : "Styled(" + mm(f) + ")";
          })(e)
        : u,
    d =
      t.displayName && t.componentId
        ? Vu(t.displayName) + "-" + t.componentId
        : t.componentId || l,
    h = n && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a,
    m = t.shouldForwardProp;
  n &&
    e.shouldForwardProp &&
    (m = t.shouldForwardProp
      ? function (f, v, _) {
          return e.shouldForwardProp(f, v, _) && t.shouldForwardProp(f, v, _);
        }
      : e.shouldForwardProp);
  var y,
    w = new Dx(r, d, n ? e.componentStyle : void 0),
    k = w.isStatic && a.length === 0,
    p = function (f, v) {
      return (function (_, S, R, O) {
        var T = _.attrs,
          q = _.componentStyle,
          z = _.defaultProps,
          he = _.foldedComponentIds,
          V = _.shouldForwardProp,
          G = _.styledComponentId,
          ne = _.target,
          Z = (function (ee, E, re) {
            ee === void 0 && (ee = mn);
            var M = pr({}, E, { theme: ee }),
              Ce = {};
            return (
              re.forEach(function (de) {
                var fe,
                  te,
                  ze,
                  Ke = de;
                for (fe in (ya(Ke) && (Ke = Ke(M)), Ke))
                  M[fe] = Ce[fe] =
                    fe === "className"
                      ? ((te = Ce[fe]),
                        (ze = Ke[fe]),
                        te && ze ? te + " " + ze : te || ze)
                      : Ke[fe];
              }),
              [M, Ce]
            );
          })(Ny(S, x.useContext(lh), z) || mn, S, T),
          me = Z[0],
          le = Z[1],
          $ = (function (ee, E, re, M) {
            var Ce = Ay(),
              de = Ry(),
              fe = E
                ? ee.generateAndInjectStyles(mn, Ce, de)
                : ee.generateAndInjectStyles(re, Ce, de);
            return fe;
          })(q, O, me),
          K = R,
          J = le.$as || S.$as || le.as || S.as || ne,
          ge = ro(J),
          j = le !== S ? pr({}, S, {}, le) : S,
          B = {};
        for (var W in j)
          W[0] !== "$" &&
            W !== "as" &&
            (W === "forwardedAs"
              ? (B.as = j[W])
              : (V ? V(W, cm, J) : !ge || cm(W)) && (B[W] = j[W]));
        return (
          S.style &&
            le.style !== S.style &&
            (B.style = pr({}, S.style, {}, le.style)),
          (B.className = Array.prototype
            .concat(he, G, $ !== G ? $ : null, S.className, le.className)
            .filter(Boolean)
            .join(" ")),
          (B.ref = K),
          x.createElement(J, B)
        );
      })(y, f, v, k);
    };
  return (
    (p.displayName = c),
    ((y = be.forwardRef(p)).attrs = h),
    (y.componentStyle = w),
    (y.displayName = c),
    (y.shouldForwardProp = m),
    (y.foldedComponentIds = n
      ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
      : cl),
    (y.styledComponentId = d),
    (y.target = n ? e.target : e),
    (y.withComponent = function (f) {
      var v = t.componentId,
        _ = (function (R, O) {
          if (R == null) return {};
          var T,
            q,
            z = {},
            he = Object.keys(R);
          for (q = 0; q < he.length; q++)
            (T = he[q]), O.indexOf(T) >= 0 || (z[T] = R[T]);
          return z;
        })(t, ["componentId"]),
        S = v && v + "-" + (ro(f) ? f : Vu(mm(f)));
      return $y(f, pr({}, _, { attrs: h, componentId: S }), r);
    }),
    Object.defineProperty(y, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (f) {
        this._foldedDefaultProps = n ? Iy({}, e.defaultProps, f) : f;
      },
    }),
    Object.defineProperty(y, "toString", {
      value: function () {
        return "." + y.styledComponentId;
      },
    }),
    i &&
      mx(y, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    y
  );
}
var yd = function (e) {
  return (function t(r, n, i) {
    if ((i === void 0 && (i = mn), !rh.isValidElementType(n)))
      return Ta(1, String(n));
    var s = function () {
      return r(n, i, tt.apply(void 0, arguments));
    };
    return (
      (s.withConfig = function (a) {
        return t(r, n, pr({}, i, {}, a));
      }),
      (s.attrs = function (a) {
        return t(
          r,
          n,
          pr({}, i, {
            attrs: Array.prototype.concat(i.attrs, a).filter(Boolean),
          })
        );
      }),
      s
    );
  })($y, e);
};
[
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "textPath",
  "tspan",
].forEach(function (e) {
  yd[e] = yd(e);
});
var Hx = (function () {
  function e(r, n) {
    (this.rules = r),
      (this.componentId = n),
      (this.isStatic = Py(r)),
      fl.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return (
    (t.createStyles = function (r, n, i, s) {
      var a = s(Jn(this.rules, n, i, s).join(""), ""),
        o = this.componentId + r;
      i.insertRules(o, o, a);
    }),
    (t.removeStyles = function (r, n) {
      n.clearRules(this.componentId + r);
    }),
    (t.renderStyles = function (r, n, i, s) {
      r > 2 && fl.registerId(this.componentId + r),
        this.removeStyles(r, i),
        this.createStyles(r, n, i, s);
    }),
    e
  );
})();
function qx(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  var i = tt.apply(void 0, [e].concat(r)),
    s = "sc-global-" + oh(JSON.stringify(i)),
    a = new Hx(i, s);
  function o(u) {
    var c = Ay(),
      d = Ry(),
      h = x.useContext(lh),
      m = x.useRef(c.allocateGSInstance(s)).current;
    return (
      c.server && l(m, u, c, h, d),
      x.useLayoutEffect(
        function () {
          if (!c.server)
            return (
              l(m, u, c, h, d),
              function () {
                return a.removeStyles(m, c);
              }
            );
        },
        [m, u, c, h, d]
      ),
      null
    );
  }
  function l(u, c, d, h, m) {
    if (a.isStatic) a.renderStyles(u, vx, d, m);
    else {
      var y = pr({}, c, { theme: Ny(c, h, o.defaultProps) });
      a.renderStyles(u, y, d, m);
    }
  }
  return be.memo(o);
}
function Ly(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  var i = tt.apply(void 0, [e].concat(r)).join(""),
    s = oh(i);
  return new Dy(s, i);
}
const F = yd,
  Qx = qx`
:root {
  /* Indigo */
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}
/* From Uiverse.io by JkHuger */ 
.label-check {
  display: none;
}

.hamburger-label {
  width: 30px;
  height: 28px;
  display: block;
  cursor: pointer;
}

.hamburger-label div {
  width: 30px;
  height: 3px;
  background-color: black;
  position: absolute;
}

.line1 {
  transition: all .3s;
}

.line2 {
  margin: 10px 0 0 0;
  transition: 0.3s;
}

.line3 {
  margin: 20px 0 0 0;
  transition: 0.3s;
}

#label-check:checked + .hamburger-label .line1 {
  transform: rotate(45deg) scaleX(1) translate(10px, 5px);
  border-radius: 50px 50px 50px 0;
}

#label-check:checked + .hamburger-label .line3 {
  transform: rotate(-45deg) scaleX(1) translate(8px, -5px);
  border-radius: 0 50px 50px 50px;
}

#label-check:checked + .hamburger-label .line2 {
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  width: 45px;
  display: none;
}
body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`,
  qt = F.h1`
  ${(e) =>
    e.as === "h1" &&
    tt`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(e) =>
    e.as === "h2" &&
    tt`
      font-size: 2rem;
      font-weight: 600;
    `}
    
    ${(e) =>
      e.as === "h3" &&
      tt`
      font-size: 2rem;
      font-weight: 500;
    `}
    
  line-height: 1.4;
`,
  br = F.div`
  display: flex;

  ${(e) =>
    e.type === "horizontal" &&
    tt`
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 60px;
      background-color: var(--color-grey-50);
      padding: 10px;
      z-index: 100;
      margin: 20px 0;
    `}

  ${(e) =>
    e.type === "vertical" &&
    tt`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;
br.defaultProps = { type: "vertical" };
function Yx() {
  return A(br, {
    type: "horizontal",
    children: [
      g(qt, { as: "h1", children: "Dashboard" }),
      g("p", { children: "TEST" }),
    ],
  });
}
const Gx = F.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  /* overflow: auto; */
  margin-bottom: 20px;
`,
  My = F.div`
  display: grid;
  grid-template-columns: ${(e) => e.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`,
  Kx = F(My)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`,
  Xx = F(My)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`,
  Jx = F.section`
  margin: 0.4rem 0;
`,
  Zx = F.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: start;
  padding: 1.6rem 1.2rem;

  border-top: 1px solid rgb(210 210 210);
  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`,
  e2 = F.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`,
  uh = x.createContext();
function Vt({ columns: e, children: t }) {
  return g(uh.Provider, {
    value: { columns: e },
    children: g(Gx, { role: "table", children: t }),
  });
}
function t2({ children: e }) {
  const { columns: t } = x.useContext(uh);
  return g(Kx, { role: "row", columns: t, as: "header", children: e });
}
function r2({ children: e }) {
  const { columns: t } = x.useContext(uh);
  return g(Xx, { role: "row", columns: t, children: e });
}
function n2({ data: e, render: t }) {
  return e.length
    ? g(Jx, { children: e.map(t) })
    : g(e2, { children: "No data to show at the moment" });
}
Vt.Header = t2;
Vt.Body = n2;
Vt.Row = r2;
Vt.Footer = Zx;
function hl(e) {
  return (
    (hl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    hl(e)
  );
}
function wn(e) {
  if (e === null || e === !0 || e === !1) return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function ke(e, t) {
  if (t.length < e)
    throw new TypeError(
      e +
        " argument" +
        (e > 1 ? "s" : "") +
        " required, but only " +
        t.length +
        " present"
    );
}
function _e(e) {
  ke(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || (hl(e) === "object" && t === "[object Date]")
    ? new Date(e.getTime())
    : typeof e == "number" || t === "[object Number]"
    ? new Date(e)
    : ((typeof e == "string" || t === "[object String]") &&
        typeof console < "u" &&
        (console.warn(
          "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
        ),
        console.warn(new Error().stack)),
      new Date(NaN));
}
function i2(e, t) {
  ke(2, arguments);
  var r = _e(e).getTime(),
    n = wn(t);
  return new Date(r + n);
}
var s2 = {};
function Aa() {
  return s2;
}
function wd(e) {
  var t = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function km(e) {
  ke(1, arguments);
  var t = _e(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Co(e, t) {
  ke(2, arguments);
  var r = _e(e),
    n = _e(t),
    i = r.getTime() - n.getTime();
  return i < 0 ? -1 : i > 0 ? 1 : i;
}
var Fy = 6e4,
  jy = 36e5;
function a2(e, t) {
  ke(2, arguments);
  var r = km(e),
    n = km(t);
  return r.getTime() === n.getTime();
}
function o2(e) {
  return (
    ke(1, arguments),
    e instanceof Date ||
      (hl(e) === "object" &&
        Object.prototype.toString.call(e) === "[object Date]")
  );
}
function l2(e) {
  if ((ke(1, arguments), !o2(e) && typeof e != "number")) return !1;
  var t = _e(e);
  return !isNaN(Number(t));
}
function u2(e, t) {
  ke(2, arguments);
  var r = _e(e),
    n = _e(t),
    i = r.getFullYear() - n.getFullYear(),
    s = r.getMonth() - n.getMonth();
  return i * 12 + s;
}
function c2(e, t) {
  return ke(2, arguments), _e(e).getTime() - _e(t).getTime();
}
var _m = {
    ceil: Math.ceil,
    round: Math.round,
    floor: Math.floor,
    trunc: function (t) {
      return t < 0 ? Math.ceil(t) : Math.floor(t);
    },
  },
  d2 = "trunc";
function f2(e) {
  return e ? _m[e] : _m[d2];
}
function h2(e) {
  ke(1, arguments);
  var t = _e(e);
  return t.setHours(23, 59, 59, 999), t;
}
function p2(e) {
  ke(1, arguments);
  var t = _e(e),
    r = t.getMonth();
  return (
    t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t
  );
}
function m2(e) {
  ke(1, arguments);
  var t = _e(e);
  return h2(t).getTime() === p2(t).getTime();
}
function g2(e, t) {
  ke(2, arguments);
  var r = _e(e),
    n = _e(t),
    i = Co(r, n),
    s = Math.abs(u2(r, n)),
    a;
  if (s < 1) a = 0;
  else {
    r.getMonth() === 1 && r.getDate() > 27 && r.setDate(30),
      r.setMonth(r.getMonth() - i * s);
    var o = Co(r, n) === -i;
    m2(_e(e)) && s === 1 && Co(e, n) === 1 && (o = !1),
      (a = i * (s - Number(o)));
  }
  return a === 0 ? 0 : a;
}
function v2(e, t, r) {
  ke(2, arguments);
  var n = c2(e, t) / 1e3;
  return f2(r == null ? void 0 : r.roundingMethod)(n);
}
function y2(e, t) {
  ke(2, arguments);
  var r = wn(t);
  return i2(e, -r);
}
var w2 = 864e5;
function b2(e) {
  ke(1, arguments);
  var t = _e(e),
    r = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var n = t.getTime(),
    i = r - n;
  return Math.floor(i / w2) + 1;
}
function pl(e) {
  ke(1, arguments);
  var t = 1,
    r = _e(e),
    n = r.getUTCDay(),
    i = (n < t ? 7 : 0) + n - t;
  return r.setUTCDate(r.getUTCDate() - i), r.setUTCHours(0, 0, 0, 0), r;
}
function Uy(e) {
  ke(1, arguments);
  var t = _e(e),
    r = t.getUTCFullYear(),
    n = new Date(0);
  n.setUTCFullYear(r + 1, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var i = pl(n),
    s = new Date(0);
  s.setUTCFullYear(r, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = pl(s);
  return t.getTime() >= i.getTime()
    ? r + 1
    : t.getTime() >= a.getTime()
    ? r
    : r - 1;
}
function k2(e) {
  ke(1, arguments);
  var t = Uy(e),
    r = new Date(0);
  r.setUTCFullYear(t, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var n = pl(r);
  return n;
}
var _2 = 6048e5;
function S2(e) {
  ke(1, arguments);
  var t = _e(e),
    r = pl(t).getTime() - k2(t).getTime();
  return Math.round(r / _2) + 1;
}
function ml(e, t) {
  var r, n, i, s, a, o, l, u;
  ke(1, arguments);
  var c = Aa(),
    d = wn(
      (r =
        (n =
          (i =
            (s = t == null ? void 0 : t.weekStartsOn) !== null && s !== void 0
              ? s
              : t == null ||
                (a = t.locale) === null ||
                a === void 0 ||
                (o = a.options) === null ||
                o === void 0
              ? void 0
              : o.weekStartsOn) !== null && i !== void 0
            ? i
            : c.weekStartsOn) !== null && n !== void 0
          ? n
          : (l = c.locale) === null ||
            l === void 0 ||
            (u = l.options) === null ||
            u === void 0
          ? void 0
          : u.weekStartsOn) !== null && r !== void 0
        ? r
        : 0
    );
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = _e(e),
    m = h.getUTCDay(),
    y = (m < d ? 7 : 0) + m - d;
  return h.setUTCDate(h.getUTCDate() - y), h.setUTCHours(0, 0, 0, 0), h;
}
function zy(e, t) {
  var r, n, i, s, a, o, l, u;
  ke(1, arguments);
  var c = _e(e),
    d = c.getUTCFullYear(),
    h = Aa(),
    m = wn(
      (r =
        (n =
          (i =
            (s = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
            s !== void 0
              ? s
              : t == null ||
                (a = t.locale) === null ||
                a === void 0 ||
                (o = a.options) === null ||
                o === void 0
              ? void 0
              : o.firstWeekContainsDate) !== null && i !== void 0
            ? i
            : h.firstWeekContainsDate) !== null && n !== void 0
          ? n
          : (l = h.locale) === null ||
            l === void 0 ||
            (u = l.options) === null ||
            u === void 0
          ? void 0
          : u.firstWeekContainsDate) !== null && r !== void 0
        ? r
        : 1
    );
  if (!(m >= 1 && m <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var y = new Date(0);
  y.setUTCFullYear(d + 1, 0, m), y.setUTCHours(0, 0, 0, 0);
  var w = ml(y, t),
    k = new Date(0);
  k.setUTCFullYear(d, 0, m), k.setUTCHours(0, 0, 0, 0);
  var p = ml(k, t);
  return c.getTime() >= w.getTime()
    ? d + 1
    : c.getTime() >= p.getTime()
    ? d
    : d - 1;
}
function x2(e, t) {
  var r, n, i, s, a, o, l, u;
  ke(1, arguments);
  var c = Aa(),
    d = wn(
      (r =
        (n =
          (i =
            (s = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
            s !== void 0
              ? s
              : t == null ||
                (a = t.locale) === null ||
                a === void 0 ||
                (o = a.options) === null ||
                o === void 0
              ? void 0
              : o.firstWeekContainsDate) !== null && i !== void 0
            ? i
            : c.firstWeekContainsDate) !== null && n !== void 0
          ? n
          : (l = c.locale) === null ||
            l === void 0 ||
            (u = l.options) === null ||
            u === void 0
          ? void 0
          : u.firstWeekContainsDate) !== null && r !== void 0
        ? r
        : 1
    ),
    h = zy(e, t),
    m = new Date(0);
  m.setUTCFullYear(h, 0, d), m.setUTCHours(0, 0, 0, 0);
  var y = ml(m, t);
  return y;
}
var C2 = 6048e5;
function E2(e, t) {
  ke(1, arguments);
  var r = _e(e),
    n = ml(r, t).getTime() - x2(r, t).getTime();
  return Math.round(n / C2) + 1;
}
function ve(e, t) {
  for (var r = e < 0 ? "-" : "", n = Math.abs(e).toString(); n.length < t; )
    n = "0" + n;
  return r + n;
}
var P2 = {
  y: function (t, r) {
    var n = t.getUTCFullYear(),
      i = n > 0 ? n : 1 - n;
    return ve(r === "yy" ? i % 100 : i, r.length);
  },
  M: function (t, r) {
    var n = t.getUTCMonth();
    return r === "M" ? String(n + 1) : ve(n + 1, 2);
  },
  d: function (t, r) {
    return ve(t.getUTCDate(), r.length);
  },
  a: function (t, r) {
    var n = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  h: function (t, r) {
    return ve(t.getUTCHours() % 12 || 12, r.length);
  },
  H: function (t, r) {
    return ve(t.getUTCHours(), r.length);
  },
  m: function (t, r) {
    return ve(t.getUTCMinutes(), r.length);
  },
  s: function (t, r) {
    return ve(t.getUTCSeconds(), r.length);
  },
  S: function (t, r) {
    var n = r.length,
      i = t.getUTCMilliseconds(),
      s = Math.floor(i * Math.pow(10, n - 3));
    return ve(s, r.length);
  },
};
const Br = P2;
var oi = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  O2 = {
    G: function (t, r, n) {
      var i = t.getUTCFullYear() > 0 ? 1 : 0;
      switch (r) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(i, { width: "abbreviated" });
        case "GGGGG":
          return n.era(i, { width: "narrow" });
        case "GGGG":
        default:
          return n.era(i, { width: "wide" });
      }
    },
    y: function (t, r, n) {
      if (r === "yo") {
        var i = t.getUTCFullYear(),
          s = i > 0 ? i : 1 - i;
        return n.ordinalNumber(s, { unit: "year" });
      }
      return Br.y(t, r);
    },
    Y: function (t, r, n, i) {
      var s = zy(t, i),
        a = s > 0 ? s : 1 - s;
      if (r === "YY") {
        var o = a % 100;
        return ve(o, 2);
      }
      return r === "Yo"
        ? n.ordinalNumber(a, { unit: "year" })
        : ve(a, r.length);
    },
    R: function (t, r) {
      var n = Uy(t);
      return ve(n, r.length);
    },
    u: function (t, r) {
      var n = t.getUTCFullYear();
      return ve(n, r.length);
    },
    Q: function (t, r, n) {
      var i = Math.ceil((t.getUTCMonth() + 1) / 3);
      switch (r) {
        case "Q":
          return String(i);
        case "QQ":
          return ve(i, 2);
        case "Qo":
          return n.ordinalNumber(i, { unit: "quarter" });
        case "QQQ":
          return n.quarter(i, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(i, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return n.quarter(i, { width: "wide", context: "formatting" });
      }
    },
    q: function (t, r, n) {
      var i = Math.ceil((t.getUTCMonth() + 1) / 3);
      switch (r) {
        case "q":
          return String(i);
        case "qq":
          return ve(i, 2);
        case "qo":
          return n.ordinalNumber(i, { unit: "quarter" });
        case "qqq":
          return n.quarter(i, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(i, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return n.quarter(i, { width: "wide", context: "standalone" });
      }
    },
    M: function (t, r, n) {
      var i = t.getUTCMonth();
      switch (r) {
        case "M":
        case "MM":
          return Br.M(t, r);
        case "Mo":
          return n.ordinalNumber(i + 1, { unit: "month" });
        case "MMM":
          return n.month(i, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(i, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return n.month(i, { width: "wide", context: "formatting" });
      }
    },
    L: function (t, r, n) {
      var i = t.getUTCMonth();
      switch (r) {
        case "L":
          return String(i + 1);
        case "LL":
          return ve(i + 1, 2);
        case "Lo":
          return n.ordinalNumber(i + 1, { unit: "month" });
        case "LLL":
          return n.month(i, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(i, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return n.month(i, { width: "wide", context: "standalone" });
      }
    },
    w: function (t, r, n, i) {
      var s = E2(t, i);
      return r === "wo"
        ? n.ordinalNumber(s, { unit: "week" })
        : ve(s, r.length);
    },
    I: function (t, r, n) {
      var i = S2(t);
      return r === "Io"
        ? n.ordinalNumber(i, { unit: "week" })
        : ve(i, r.length);
    },
    d: function (t, r, n) {
      return r === "do"
        ? n.ordinalNumber(t.getUTCDate(), { unit: "date" })
        : Br.d(t, r);
    },
    D: function (t, r, n) {
      var i = b2(t);
      return r === "Do"
        ? n.ordinalNumber(i, { unit: "dayOfYear" })
        : ve(i, r.length);
    },
    E: function (t, r, n) {
      var i = t.getUTCDay();
      switch (r) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(i, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(i, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(i, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return n.day(i, { width: "wide", context: "formatting" });
      }
    },
    e: function (t, r, n, i) {
      var s = t.getUTCDay(),
        a = (s - i.weekStartsOn + 8) % 7 || 7;
      switch (r) {
        case "e":
          return String(a);
        case "ee":
          return ve(a, 2);
        case "eo":
          return n.ordinalNumber(a, { unit: "day" });
        case "eee":
          return n.day(s, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(s, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(s, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return n.day(s, { width: "wide", context: "formatting" });
      }
    },
    c: function (t, r, n, i) {
      var s = t.getUTCDay(),
        a = (s - i.weekStartsOn + 8) % 7 || 7;
      switch (r) {
        case "c":
          return String(a);
        case "cc":
          return ve(a, r.length);
        case "co":
          return n.ordinalNumber(a, { unit: "day" });
        case "ccc":
          return n.day(s, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(s, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(s, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return n.day(s, { width: "wide", context: "standalone" });
      }
    },
    i: function (t, r, n) {
      var i = t.getUTCDay(),
        s = i === 0 ? 7 : i;
      switch (r) {
        case "i":
          return String(s);
        case "ii":
          return ve(s, r.length);
        case "io":
          return n.ordinalNumber(s, { unit: "day" });
        case "iii":
          return n.day(i, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(i, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(i, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return n.day(i, { width: "wide", context: "formatting" });
      }
    },
    a: function (t, r, n) {
      var i = t.getUTCHours(),
        s = i / 12 >= 1 ? "pm" : "am";
      switch (r) {
        case "a":
        case "aa":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return n
            .dayPeriod(s, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return n.dayPeriod(s, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return n.dayPeriod(s, { width: "wide", context: "formatting" });
      }
    },
    b: function (t, r, n) {
      var i = t.getUTCHours(),
        s;
      switch (
        (i === 12
          ? (s = oi.noon)
          : i === 0
          ? (s = oi.midnight)
          : (s = i / 12 >= 1 ? "pm" : "am"),
        r)
      ) {
        case "b":
        case "bb":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return n
            .dayPeriod(s, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return n.dayPeriod(s, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return n.dayPeriod(s, { width: "wide", context: "formatting" });
      }
    },
    B: function (t, r, n) {
      var i = t.getUTCHours(),
        s;
      switch (
        (i >= 17
          ? (s = oi.evening)
          : i >= 12
          ? (s = oi.afternoon)
          : i >= 4
          ? (s = oi.morning)
          : (s = oi.night),
        r)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return n.dayPeriod(s, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return n.dayPeriod(s, { width: "wide", context: "formatting" });
      }
    },
    h: function (t, r, n) {
      if (r === "ho") {
        var i = t.getUTCHours() % 12;
        return i === 0 && (i = 12), n.ordinalNumber(i, { unit: "hour" });
      }
      return Br.h(t, r);
    },
    H: function (t, r, n) {
      return r === "Ho"
        ? n.ordinalNumber(t.getUTCHours(), { unit: "hour" })
        : Br.H(t, r);
    },
    K: function (t, r, n) {
      var i = t.getUTCHours() % 12;
      return r === "Ko"
        ? n.ordinalNumber(i, { unit: "hour" })
        : ve(i, r.length);
    },
    k: function (t, r, n) {
      var i = t.getUTCHours();
      return (
        i === 0 && (i = 24),
        r === "ko" ? n.ordinalNumber(i, { unit: "hour" }) : ve(i, r.length)
      );
    },
    m: function (t, r, n) {
      return r === "mo"
        ? n.ordinalNumber(t.getUTCMinutes(), { unit: "minute" })
        : Br.m(t, r);
    },
    s: function (t, r, n) {
      return r === "so"
        ? n.ordinalNumber(t.getUTCSeconds(), { unit: "second" })
        : Br.s(t, r);
    },
    S: function (t, r) {
      return Br.S(t, r);
    },
    X: function (t, r, n, i) {
      var s = i._originalDate || t,
        a = s.getTimezoneOffset();
      if (a === 0) return "Z";
      switch (r) {
        case "X":
          return xm(a);
        case "XXXX":
        case "XX":
          return Dn(a);
        case "XXXXX":
        case "XXX":
        default:
          return Dn(a, ":");
      }
    },
    x: function (t, r, n, i) {
      var s = i._originalDate || t,
        a = s.getTimezoneOffset();
      switch (r) {
        case "x":
          return xm(a);
        case "xxxx":
        case "xx":
          return Dn(a);
        case "xxxxx":
        case "xxx":
        default:
          return Dn(a, ":");
      }
    },
    O: function (t, r, n, i) {
      var s = i._originalDate || t,
        a = s.getTimezoneOffset();
      switch (r) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Sm(a, ":");
        case "OOOO":
        default:
          return "GMT" + Dn(a, ":");
      }
    },
    z: function (t, r, n, i) {
      var s = i._originalDate || t,
        a = s.getTimezoneOffset();
      switch (r) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Sm(a, ":");
        case "zzzz":
        default:
          return "GMT" + Dn(a, ":");
      }
    },
    t: function (t, r, n, i) {
      var s = i._originalDate || t,
        a = Math.floor(s.getTime() / 1e3);
      return ve(a, r.length);
    },
    T: function (t, r, n, i) {
      var s = i._originalDate || t,
        a = s.getTime();
      return ve(a, r.length);
    },
  };
function Sm(e, t) {
  var r = e > 0 ? "-" : "+",
    n = Math.abs(e),
    i = Math.floor(n / 60),
    s = n % 60;
  if (s === 0) return r + String(i);
  var a = t || "";
  return r + String(i) + a + ve(s, 2);
}
function xm(e, t) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + ve(Math.abs(e) / 60, 2);
  }
  return Dn(e, t);
}
function Dn(e, t) {
  var r = t || "",
    n = e > 0 ? "-" : "+",
    i = Math.abs(e),
    s = ve(Math.floor(i / 60), 2),
    a = ve(i % 60, 2);
  return n + s + r + a;
}
const T2 = O2;
var Cm = function (t, r) {
    switch (t) {
      case "P":
        return r.date({ width: "short" });
      case "PP":
        return r.date({ width: "medium" });
      case "PPP":
        return r.date({ width: "long" });
      case "PPPP":
      default:
        return r.date({ width: "full" });
    }
  },
  By = function (t, r) {
    switch (t) {
      case "p":
        return r.time({ width: "short" });
      case "pp":
        return r.time({ width: "medium" });
      case "ppp":
        return r.time({ width: "long" });
      case "pppp":
      default:
        return r.time({ width: "full" });
    }
  },
  A2 = function (t, r) {
    var n = t.match(/(P+)(p+)?/) || [],
      i = n[1],
      s = n[2];
    if (!s) return Cm(t, r);
    var a;
    switch (i) {
      case "P":
        a = r.dateTime({ width: "short" });
        break;
      case "PP":
        a = r.dateTime({ width: "medium" });
        break;
      case "PPP":
        a = r.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        a = r.dateTime({ width: "full" });
        break;
    }
    return a.replace("{{date}}", Cm(i, r)).replace("{{time}}", By(s, r));
  },
  R2 = { p: By, P: A2 };
const D2 = R2;
var N2 = ["D", "DD"],
  I2 = ["YY", "YYYY"];
function $2(e) {
  return N2.indexOf(e) !== -1;
}
function L2(e) {
  return I2.indexOf(e) !== -1;
}
function Em(e, t, r) {
  if (e === "YYYY")
    throw new RangeError(
      "Use `yyyy` instead of `YYYY` (in `"
        .concat(t, "`) for formatting years to the input `")
        .concat(
          r,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "YY")
    throw new RangeError(
      "Use `yy` instead of `YY` (in `"
        .concat(t, "`) for formatting years to the input `")
        .concat(
          r,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "D")
    throw new RangeError(
      "Use `d` instead of `D` (in `"
        .concat(t, "`) for formatting days of the month to the input `")
        .concat(
          r,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "DD")
    throw new RangeError(
      "Use `dd` instead of `DD` (in `"
        .concat(t, "`) for formatting days of the month to the input `")
        .concat(
          r,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
}
var M2 = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  F2 = function (t, r, n) {
    var i,
      s = M2[t];
    return (
      typeof s == "string"
        ? (i = s)
        : r === 1
        ? (i = s.one)
        : (i = s.other.replace("{{count}}", r.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + i
          : i + " ago"
        : i
    );
  };
const j2 = F2;
function qu(e) {
  return function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.width ? String(t.width) : e.defaultWidth,
      n = e.formats[r] || e.formats[e.defaultWidth];
    return n;
  };
}
var U2 = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  z2 = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  B2 = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  W2 = {
    date: qu({ formats: U2, defaultWidth: "full" }),
    time: qu({ formats: z2, defaultWidth: "full" }),
    dateTime: qu({ formats: B2, defaultWidth: "full" }),
  };
const V2 = W2;
var H2 = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  q2 = function (t, r, n, i) {
    return H2[t];
  };
const Q2 = q2;
function ys(e) {
  return function (t, r) {
    var n = r != null && r.context ? String(r.context) : "standalone",
      i;
    if (n === "formatting" && e.formattingValues) {
      var s = e.defaultFormattingWidth || e.defaultWidth,
        a = r != null && r.width ? String(r.width) : s;
      i = e.formattingValues[a] || e.formattingValues[s];
    } else {
      var o = e.defaultWidth,
        l = r != null && r.width ? String(r.width) : e.defaultWidth;
      i = e.values[l] || e.values[o];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[u];
  };
}
var Y2 = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  G2 = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  K2 = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  X2 = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  J2 = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  Z2 = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  eC = function (t, r) {
    var n = Number(t),
      i = n % 100;
    if (i > 20 || i < 10)
      switch (i % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  tC = {
    ordinalNumber: eC,
    era: ys({ values: Y2, defaultWidth: "wide" }),
    quarter: ys({
      values: G2,
      defaultWidth: "wide",
      argumentCallback: function (t) {
        return t - 1;
      },
    }),
    month: ys({ values: K2, defaultWidth: "wide" }),
    day: ys({ values: X2, defaultWidth: "wide" }),
    dayPeriod: ys({
      values: J2,
      defaultWidth: "wide",
      formattingValues: Z2,
      defaultFormattingWidth: "wide",
    }),
  };
const rC = tC;
function ws(e) {
  return function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = r.width,
      i = (n && e.matchPatterns[n]) || e.matchPatterns[e.defaultMatchWidth],
      s = t.match(i);
    if (!s) return null;
    var a = s[0],
      o = (n && e.parsePatterns[n]) || e.parsePatterns[e.defaultParseWidth],
      l = Array.isArray(o)
        ? iC(o, function (d) {
            return d.test(a);
          })
        : nC(o, function (d) {
            return d.test(a);
          }),
      u;
    (u = e.valueCallback ? e.valueCallback(l) : l),
      (u = r.valueCallback ? r.valueCallback(u) : u);
    var c = t.slice(a.length);
    return { value: u, rest: c };
  };
}
function nC(e, t) {
  for (var r in e) if (e.hasOwnProperty(r) && t(e[r])) return r;
}
function iC(e, t) {
  for (var r = 0; r < e.length; r++) if (t(e[r])) return r;
}
function sC(e) {
  return function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = t.match(e.matchPattern);
    if (!n) return null;
    var i = n[0],
      s = t.match(e.parsePattern);
    if (!s) return null;
    var a = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    a = r.valueCallback ? r.valueCallback(a) : a;
    var o = t.slice(i.length);
    return { value: a, rest: o };
  };
}
var aC = /^(\d+)(th|st|nd|rd)?/i,
  oC = /\d+/i,
  lC = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  uC = { any: [/^b/i, /^(a|c)/i] },
  cC = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  dC = { any: [/1/i, /2/i, /3/i, /4/i] },
  fC = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  hC = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  pC = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  mC = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  gC = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  vC = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  yC = {
    ordinalNumber: sC({
      matchPattern: aC,
      parsePattern: oC,
      valueCallback: function (t) {
        return parseInt(t, 10);
      },
    }),
    era: ws({
      matchPatterns: lC,
      defaultMatchWidth: "wide",
      parsePatterns: uC,
      defaultParseWidth: "any",
    }),
    quarter: ws({
      matchPatterns: cC,
      defaultMatchWidth: "wide",
      parsePatterns: dC,
      defaultParseWidth: "any",
      valueCallback: function (t) {
        return t + 1;
      },
    }),
    month: ws({
      matchPatterns: fC,
      defaultMatchWidth: "wide",
      parsePatterns: hC,
      defaultParseWidth: "any",
    }),
    day: ws({
      matchPatterns: pC,
      defaultMatchWidth: "wide",
      parsePatterns: mC,
      defaultParseWidth: "any",
    }),
    dayPeriod: ws({
      matchPatterns: gC,
      defaultMatchWidth: "any",
      parsePatterns: vC,
      defaultParseWidth: "any",
    }),
  };
const wC = yC;
var bC = {
  code: "en-US",
  formatDistance: j2,
  formatLong: V2,
  formatRelative: Q2,
  localize: rC,
  match: wC,
  options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
};
const Wy = bC;
var kC = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  _C = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  SC = /^'([^]*?)'?$/,
  xC = /''/g,
  CC = /[a-zA-Z]/;
function qs(e, t, r) {
  var n, i, s, a, o, l, u, c, d, h, m, y, w, k, p, f, v, _;
  ke(2, arguments);
  var S = String(t),
    R = Aa(),
    O =
      (n =
        (i = r == null ? void 0 : r.locale) !== null && i !== void 0
          ? i
          : R.locale) !== null && n !== void 0
        ? n
        : Wy,
    T = wn(
      (s =
        (a =
          (o =
            (l = r == null ? void 0 : r.firstWeekContainsDate) !== null &&
            l !== void 0
              ? l
              : r == null ||
                (u = r.locale) === null ||
                u === void 0 ||
                (c = u.options) === null ||
                c === void 0
              ? void 0
              : c.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : R.firstWeekContainsDate) !== null && a !== void 0
          ? a
          : (d = R.locale) === null ||
            d === void 0 ||
            (h = d.options) === null ||
            h === void 0
          ? void 0
          : h.firstWeekContainsDate) !== null && s !== void 0
        ? s
        : 1
    );
  if (!(T >= 1 && T <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var q = wn(
    (m =
      (y =
        (w =
          (k = r == null ? void 0 : r.weekStartsOn) !== null && k !== void 0
            ? k
            : r == null ||
              (p = r.locale) === null ||
              p === void 0 ||
              (f = p.options) === null ||
              f === void 0
            ? void 0
            : f.weekStartsOn) !== null && w !== void 0
          ? w
          : R.weekStartsOn) !== null && y !== void 0
        ? y
        : (v = R.locale) === null ||
          v === void 0 ||
          (_ = v.options) === null ||
          _ === void 0
        ? void 0
        : _.weekStartsOn) !== null && m !== void 0
      ? m
      : 0
  );
  if (!(q >= 0 && q <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!O.localize)
    throw new RangeError("locale must contain localize property");
  if (!O.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var z = _e(e);
  if (!l2(z)) throw new RangeError("Invalid time value");
  var he = wd(z),
    V = y2(z, he),
    G = {
      firstWeekContainsDate: T,
      weekStartsOn: q,
      locale: O,
      _originalDate: z,
    },
    ne = S.match(_C)
      .map(function (Z) {
        var me = Z[0];
        if (me === "p" || me === "P") {
          var le = D2[me];
          return le(Z, O.formatLong);
        }
        return Z;
      })
      .join("")
      .match(kC)
      .map(function (Z) {
        if (Z === "''") return "'";
        var me = Z[0];
        if (me === "'") return EC(Z);
        var le = T2[me];
        if (le)
          return (
            !(r != null && r.useAdditionalWeekYearTokens) &&
              L2(Z) &&
              Em(Z, t, String(e)),
            !(r != null && r.useAdditionalDayOfYearTokens) &&
              $2(Z) &&
              Em(Z, t, String(e)),
            le(V, Z, O.localize, G)
          );
        if (me.match(CC))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              me +
              "`"
          );
        return Z;
      })
      .join("");
  return ne;
}
function EC(e) {
  var t = e.match(SC);
  return t ? t[1].replace(xC, "'") : e;
}
function Vy(e, t) {
  if (e == null)
    throw new TypeError(
      "assign requires that input parameter not be null or undefined"
    );
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e;
}
function PC(e) {
  return Vy({}, e);
}
var Pm = 1440,
  OC = 2520,
  Qu = 43200,
  TC = 86400;
function AC(e, t, r) {
  var n, i;
  ke(2, arguments);
  var s = Aa(),
    a =
      (n =
        (i = r == null ? void 0 : r.locale) !== null && i !== void 0
          ? i
          : s.locale) !== null && n !== void 0
        ? n
        : Wy;
  if (!a.formatDistance)
    throw new RangeError("locale must contain formatDistance property");
  var o = Co(e, t);
  if (isNaN(o)) throw new RangeError("Invalid time value");
  var l = Vy(PC(r), { addSuffix: !!(r != null && r.addSuffix), comparison: o }),
    u,
    c;
  o > 0 ? ((u = _e(t)), (c = _e(e))) : ((u = _e(e)), (c = _e(t)));
  var d = v2(c, u),
    h = (wd(c) - wd(u)) / 1e3,
    m = Math.round((d - h) / 60),
    y;
  if (m < 2)
    return r != null && r.includeSeconds
      ? d < 5
        ? a.formatDistance("lessThanXSeconds", 5, l)
        : d < 10
        ? a.formatDistance("lessThanXSeconds", 10, l)
        : d < 20
        ? a.formatDistance("lessThanXSeconds", 20, l)
        : d < 40
        ? a.formatDistance("halfAMinute", 0, l)
        : d < 60
        ? a.formatDistance("lessThanXMinutes", 1, l)
        : a.formatDistance("xMinutes", 1, l)
      : m === 0
      ? a.formatDistance("lessThanXMinutes", 1, l)
      : a.formatDistance("xMinutes", m, l);
  if (m < 45) return a.formatDistance("xMinutes", m, l);
  if (m < 90) return a.formatDistance("aboutXHours", 1, l);
  if (m < Pm) {
    var w = Math.round(m / 60);
    return a.formatDistance("aboutXHours", w, l);
  } else {
    if (m < OC) return a.formatDistance("xDays", 1, l);
    if (m < Qu) {
      var k = Math.round(m / Pm);
      return a.formatDistance("xDays", k, l);
    } else if (m < TC)
      return (y = Math.round(m / Qu)), a.formatDistance("aboutXMonths", y, l);
  }
  if (((y = g2(c, u)), y < 12)) {
    var p = Math.round(m / Qu);
    return a.formatDistance("xMonths", p, l);
  } else {
    var f = y % 12,
      v = Math.floor(y / 12);
    return f < 3
      ? a.formatDistance("aboutXYears", v, l)
      : f < 9
      ? a.formatDistance("overXYears", v, l)
      : a.formatDistance("almostXYears", v + 1, l);
  }
}
function Hy(e) {
  return ke(1, arguments), a2(e, Date.now());
}
function RC(e, t) {
  var r;
  ke(1, arguments);
  var n = wn(
    (r = t == null ? void 0 : t.additionalDigits) !== null && r !== void 0
      ? r
      : 2
  );
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (
    !(
      typeof e == "string" ||
      Object.prototype.toString.call(e) === "[object String]"
    )
  )
    return new Date(NaN);
  var i = $C(e),
    s;
  if (i.date) {
    var a = LC(i.date, n);
    s = MC(a.restDateString, a.year);
  }
  if (!s || isNaN(s.getTime())) return new Date(NaN);
  var o = s.getTime(),
    l = 0,
    u;
  if (i.time && ((l = FC(i.time)), isNaN(l))) return new Date(NaN);
  if (i.timezone) {
    if (((u = jC(i.timezone)), isNaN(u))) return new Date(NaN);
  } else {
    var c = new Date(o + l),
      d = new Date(0);
    return (
      d.setFullYear(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()),
      d.setHours(
        c.getUTCHours(),
        c.getUTCMinutes(),
        c.getUTCSeconds(),
        c.getUTCMilliseconds()
      ),
      d
    );
  }
  return new Date(o + l + u);
}
var no = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  DC = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  NC =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  IC = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function $C(e) {
  var t = {},
    r = e.split(no.dateTimeDelimiter),
    n;
  if (r.length > 2) return t;
  if (
    (/:/.test(r[0])
      ? (n = r[0])
      : ((t.date = r[0]),
        (n = r[1]),
        no.timeZoneDelimiter.test(t.date) &&
          ((t.date = e.split(no.timeZoneDelimiter)[0]),
          (n = e.substr(t.date.length, e.length)))),
    n)
  ) {
    var i = no.timezone.exec(n);
    i ? ((t.time = n.replace(i[1], "")), (t.timezone = i[1])) : (t.time = n);
  }
  return t;
}
function LC(e, t) {
  var r = new RegExp(
      "^(?:(\\d{4}|[+-]\\d{" +
        (4 + t) +
        "})|(\\d{2}|[+-]\\d{" +
        (2 + t) +
        "})$)"
    ),
    n = e.match(r);
  if (!n) return { year: NaN, restDateString: "" };
  var i = n[1] ? parseInt(n[1]) : null,
    s = n[2] ? parseInt(n[2]) : null;
  return {
    year: s === null ? i : s * 100,
    restDateString: e.slice((n[1] || n[2]).length),
  };
}
function MC(e, t) {
  if (t === null) return new Date(NaN);
  var r = e.match(DC);
  if (!r) return new Date(NaN);
  var n = !!r[4],
    i = bs(r[1]),
    s = bs(r[2]) - 1,
    a = bs(r[3]),
    o = bs(r[4]),
    l = bs(r[5]) - 1;
  if (n) return VC(t, o, l) ? UC(t, o, l) : new Date(NaN);
  var u = new Date(0);
  return !BC(t, s, a) || !WC(t, i)
    ? new Date(NaN)
    : (u.setUTCFullYear(t, s, Math.max(i, a)), u);
}
function bs(e) {
  return e ? parseInt(e) : 1;
}
function FC(e) {
  var t = e.match(NC);
  if (!t) return NaN;
  var r = Yu(t[1]),
    n = Yu(t[2]),
    i = Yu(t[3]);
  return HC(r, n, i) ? r * jy + n * Fy + i * 1e3 : NaN;
}
function Yu(e) {
  return (e && parseFloat(e.replace(",", "."))) || 0;
}
function jC(e) {
  if (e === "Z") return 0;
  var t = e.match(IC);
  if (!t) return 0;
  var r = t[1] === "+" ? -1 : 1,
    n = parseInt(t[2]),
    i = (t[3] && parseInt(t[3])) || 0;
  return qC(n, i) ? r * (n * jy + i * Fy) : NaN;
}
function UC(e, t, r) {
  var n = new Date(0);
  n.setUTCFullYear(e, 0, 4);
  var i = n.getUTCDay() || 7,
    s = (t - 1) * 7 + r + 1 - i;
  return n.setUTCDate(n.getUTCDate() + s), n;
}
var zC = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function qy(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function BC(e, t, r) {
  return t >= 0 && t <= 11 && r >= 1 && r <= (zC[t] || (qy(e) ? 29 : 28));
}
function WC(e, t) {
  return t >= 1 && t <= (qy(e) ? 366 : 365);
}
function VC(e, t, r) {
  return t >= 1 && t <= 53 && r >= 0 && r <= 6;
}
function HC(e, t, r) {
  return e === 24
    ? t === 0 && r === 0
    : r >= 0 && r < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function qC(e, t) {
  return t >= 0 && t <= 59;
}
const Qy = (e) =>
    AC(RC(e), new Date(), { addSuffix: !0 })
      .replace("about ", "")
      .replace("in", "In"),
  sr = (e) =>
    new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
      e
    ),
  Yy = F.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${(e) => e.type}-700);
  background-color: var(--color-${(e) => e.type}-100);
`;
var Gy = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Om = be.createContext && be.createContext(Gy),
  gn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (gn =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++) {
              t = arguments[r];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        gn.apply(this, arguments)
      );
    },
  QC =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var r = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (r[n] = e[n]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
          t.indexOf(n[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
            (r[n[i]] = e[n[i]]);
      return r;
    };
function Ky(e) {
  return (
    e &&
    e.map(function (t, r) {
      return be.createElement(t.tag, gn({ key: r }, t.attr), Ky(t.child));
    })
  );
}
function Jt(e) {
  return function (t) {
    return be.createElement(YC, gn({ attr: gn({}, e.attr) }, t), Ky(e.child));
  };
}
function YC(e) {
  var t = function (r) {
    var n = e.attr,
      i = e.size,
      s = e.title,
      a = QC(e, ["attr", "size", "title"]),
      o = i || r.size || "1em",
      l;
    return (
      r.className && (l = r.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      be.createElement(
        "svg",
        gn(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          n,
          a,
          {
            className: l,
            style: gn(gn({ color: e.color || r.color }, r.style), e.style),
            height: o,
            width: o,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && be.createElement("title", null, s),
        e.children
      )
    );
  };
  return Om !== void 0
    ? be.createElement(Om.Consumer, null, function (r) {
        return t(r);
      })
    : t(Gy);
}
function GC(e) {
  return Jt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z",
          clipRule: "evenodd",
        },
      },
    ],
  })(e);
}
function KC(e) {
  return Jt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",
          clipRule: "evenodd",
        },
      },
    ],
  })(e);
}
function XC(e) {
  return Jt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",
          clipRule: "evenodd",
        },
      },
    ],
  })(e);
}
function JC(e) {
  return Jt({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z",
        },
      },
    ],
  })(e);
}
function ZC(e) {
  return Jt({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
        },
      },
    ],
  })(e);
}
function eE(e) {
  return Jt({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        },
      },
    ],
  })(e);
}
function tE(e) {
  return Jt({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z",
        },
      },
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
        },
      },
    ],
  })(e);
}
function rE(e) {
  return Jt({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        },
      },
    ],
  })(e);
}
function Xy(e) {
  return Jt({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819",
        },
      },
    ],
  })(e);
}
function nE(e) {
  return Jt({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
        },
      },
    ],
  })(e);
}
function iE(e) {
  return Jt({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
        },
      },
    ],
  })(e);
}
function Jy(e, t = !0) {
  const r = x.useRef();
  return (
    x.useEffect(
      function () {
        function n(i) {
          r.current && !r.current.contains(i.target) && e();
        }
        return (
          document.addEventListener("click", n, t),
          () => document.removeEventListener("click", n, t)
        );
      },
      [e, t]
    ),
    r
  );
}
const sE = F.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,
  bd = F.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`,
  aE = F.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(e) => e.position.x}px;
  top: ${(e) => e.position.y}px;
`,
  Nn = F.button`
  /* width: 100%; */
  text-align: left;
  background: none;
  border: none;
  /* padding: 1.2rem 2.4rem; */
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`,
  Zl = x.createContext();
function as({ children: e }) {
  const [t, r] = x.useState(""),
    [n, i] = x.useState(null),
    s = () => r(""),
    a = r;
  return g(Zl.Provider, {
    value: { openId: t, close: s, open: a, position: n, setPosition: i },
    children: e,
  });
}
function oE({ id: e }) {
  const { openId: t, close: r, open: n, setPosition: i } = x.useContext(Zl);
  function s(a) {
    const o = a.target.closest("button").getBoundingClientRect();
    i({ x: window.innerWidth - o.width - o.x, y: o.y + o.height + 8 }),
      t === "" || t !== e ? n(e) : r();
  }
  return g(bd, { onClick: s, children: g(XC, {}) });
}
function lE({ id: e, children: t }) {
  const { openId: r, position: n, close: i } = x.useContext(Zl),
    s = Jy(i);
  return r !== e
    ? null
    : G0.createPortal(
        g(aE, { position: n, ref: s, children: t }),
        document.body
      );
}
function uE({ children: e, icon: t, onClick: r }) {
  const { close: n } = x.useContext(Zl);
  function i() {
    r == null || r(), n();
  }
  return g("li", {
    children: A(Nn, { onClick: i, children: [t, g("span", { children: e })] }),
  });
}
as.Menu = sE;
as.Toggle = oE;
as.List = lE;
as.Button = uE;
const cE = "modulepreload",
  dE = function (e) {
    return "/" + e;
  },
  Tm = {},
  Ki = function (t, r, n) {
    if (!r || r.length === 0) return t();
    const i = document.getElementsByTagName("link");
    return Promise.all(
      r.map((s) => {
        if (((s = dE(s)), s in Tm)) return;
        Tm[s] = !0;
        const a = s.endsWith(".css"),
          o = a ? '[rel="stylesheet"]' : "";
        if (!!n)
          for (let c = i.length - 1; c >= 0; c--) {
            const d = i[c];
            if (d.href === s && (!a || d.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${s}"]${o}`)) return;
        const u = document.createElement("link");
        if (
          ((u.rel = a ? "stylesheet" : cE),
          a || ((u.as = "script"), (u.crossOrigin = "")),
          (u.href = s),
          document.head.appendChild(u),
          a)
        )
          return new Promise((c, d) => {
            u.addEventListener("load", c),
              u.addEventListener("error", () =>
                d(new Error(`Unable to preload CSS for ${s}`))
              );
          });
      })
    ).then(() => t());
  },
  fE = (e) => {
    let t;
    return (
      e
        ? (t = e)
        : typeof fetch > "u"
        ? (t = (...r) =>
            Ki(() => Promise.resolve().then(() => os), void 0).then(
              ({ default: n }) => n(...r)
            ))
        : (t = fetch),
      (...r) => t(...r)
    );
  };
class ch extends Error {
  constructor(t, r = "FunctionsError", n) {
    super(t), (this.name = r), (this.context = n);
  }
}
class hE extends ch {
  constructor(t) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      t
    );
  }
}
class pE extends ch {
  constructor(t) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", t);
  }
}
class mE extends ch {
  constructor(t) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      t
    );
  }
}
var kd;
(function (e) {
  (e.Any = "any"),
    (e.ApNortheast1 = "ap-northeast-1"),
    (e.ApNortheast2 = "ap-northeast-2"),
    (e.ApSouth1 = "ap-south-1"),
    (e.ApSoutheast1 = "ap-southeast-1"),
    (e.ApSoutheast2 = "ap-southeast-2"),
    (e.CaCentral1 = "ca-central-1"),
    (e.EuCentral1 = "eu-central-1"),
    (e.EuWest1 = "eu-west-1"),
    (e.EuWest2 = "eu-west-2"),
    (e.EuWest3 = "eu-west-3"),
    (e.SaEast1 = "sa-east-1"),
    (e.UsEast1 = "us-east-1"),
    (e.UsWest1 = "us-west-1"),
    (e.UsWest2 = "us-west-2");
})(kd || (kd = {}));
var gE =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, r, n) {
    function i(s) {
      return s instanceof r
        ? s
        : new r(function (a) {
            a(s);
          });
    }
    return new (r || (r = Promise))(function (s, a) {
      function o(c) {
        try {
          u(n.next(c));
        } catch (d) {
          a(d);
        }
      }
      function l(c) {
        try {
          u(n.throw(c));
        } catch (d) {
          a(d);
        }
      }
      function u(c) {
        c.done ? s(c.value) : i(c.value).then(o, l);
      }
      u((n = n.apply(e, t || [])).next());
    });
  };
class vE {
  constructor(t, { headers: r = {}, customFetch: n, region: i = kd.Any } = {}) {
    (this.url = t), (this.headers = r), (this.region = i), (this.fetch = fE(n));
  }
  setAuth(t) {
    this.headers.Authorization = `Bearer ${t}`;
  }
  invoke(t, r = {}) {
    var n;
    return gE(this, void 0, void 0, function* () {
      try {
        const { headers: i, method: s, body: a } = r;
        let o = {},
          { region: l } = r;
        l || (l = this.region), l && l !== "any" && (o["x-region"] = l);
        let u;
        a &&
          ((i && !Object.prototype.hasOwnProperty.call(i, "Content-Type")) ||
            !i) &&
          ((typeof Blob < "u" && a instanceof Blob) || a instanceof ArrayBuffer
            ? ((o["Content-Type"] = "application/octet-stream"), (u = a))
            : typeof a == "string"
            ? ((o["Content-Type"] = "text/plain"), (u = a))
            : typeof FormData < "u" && a instanceof FormData
            ? (u = a)
            : ((o["Content-Type"] = "application/json"),
              (u = JSON.stringify(a))));
        const c = yield this.fetch(`${this.url}/${t}`, {
            method: s || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, o), this.headers),
              i
            ),
            body: u,
          }).catch((y) => {
            throw new hE(y);
          }),
          d = c.headers.get("x-relay-error");
        if (d && d === "true") throw new pE(c);
        if (!c.ok) throw new mE(c);
        let h = (
            (n = c.headers.get("Content-Type")) !== null && n !== void 0
              ? n
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          m;
        return (
          h === "application/json"
            ? (m = yield c.json())
            : h === "application/octet-stream"
            ? (m = yield c.blob())
            : h === "text/event-stream"
            ? (m = c)
            : h === "multipart/form-data"
            ? (m = yield c.formData())
            : (m = yield c.text()),
          { data: m, error: null }
        );
      } catch (i) {
        return { data: null, error: i };
      }
    });
  }
}
var Bt = {},
  dh = {},
  eu = {},
  Ra = {},
  tu = {},
  ru = {},
  yE = function () {
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object");
  },
  Xi = yE();
const wE = Xi.fetch,
  Zy = Xi.fetch.bind(Xi),
  e1 = Xi.Headers,
  bE = Xi.Request,
  kE = Xi.Response,
  os = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Headers: e1,
        Request: bE,
        Response: kE,
        default: Zy,
        fetch: wE,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  _E = $w(os);
var fh = {};
Object.defineProperty(fh, "__esModule", { value: !0 });
class SE extends Error {
  constructor(t) {
    super(t.message),
      (this.name = "PostgrestError"),
      (this.details = t.details),
      (this.hint = t.hint),
      (this.code = t.code);
  }
}
fh.default = SE;
var t1 =
  (Qt && Qt.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(ru, "__esModule", { value: !0 });
const xE = t1(_E),
  CE = t1(fh);
let EE = class {
  constructor(t) {
    (this.shouldThrowOnError = !1),
      (this.method = t.method),
      (this.url = t.url),
      (this.headers = t.headers),
      (this.schema = t.schema),
      (this.body = t.body),
      (this.shouldThrowOnError = t.shouldThrowOnError),
      (this.signal = t.signal),
      (this.isMaybeSingle = t.isMaybeSingle),
      t.fetch
        ? (this.fetch = t.fetch)
        : typeof fetch > "u"
        ? (this.fetch = xE.default)
        : (this.fetch = fetch);
  }
  throwOnError() {
    return (this.shouldThrowOnError = !0), this;
  }
  then(t, r) {
    this.schema === void 0 ||
      (["GET", "HEAD"].includes(this.method)
        ? (this.headers["Accept-Profile"] = this.schema)
        : (this.headers["Content-Profile"] = this.schema)),
      this.method !== "GET" &&
        this.method !== "HEAD" &&
        (this.headers["Content-Type"] = "application/json");
    const n = this.fetch;
    let i = n(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal,
    }).then(async (s) => {
      var a, o, l;
      let u = null,
        c = null,
        d = null,
        h = s.status,
        m = s.statusText;
      if (s.ok) {
        if (this.method !== "HEAD") {
          const p = await s.text();
          p === "" ||
            (this.headers.Accept === "text/csv" ||
            (this.headers.Accept &&
              this.headers.Accept.includes("application/vnd.pgrst.plan+text"))
              ? (c = p)
              : (c = JSON.parse(p)));
        }
        const w =
            (a = this.headers.Prefer) === null || a === void 0
              ? void 0
              : a.match(/count=(exact|planned|estimated)/),
          k =
            (o = s.headers.get("content-range")) === null || o === void 0
              ? void 0
              : o.split("/");
        w && k && k.length > 1 && (d = parseInt(k[1])),
          this.isMaybeSingle &&
            this.method === "GET" &&
            Array.isArray(c) &&
            (c.length > 1
              ? ((u = {
                  code: "PGRST116",
                  details: `Results contain ${c.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                  hint: null,
                  message:
                    "JSON object requested, multiple (or no) rows returned",
                }),
                (c = null),
                (d = null),
                (h = 406),
                (m = "Not Acceptable"))
              : c.length === 1
              ? (c = c[0])
              : (c = null));
      } else {
        const w = await s.text();
        try {
          (u = JSON.parse(w)),
            Array.isArray(u) &&
              s.status === 404 &&
              ((c = []), (u = null), (h = 200), (m = "OK"));
        } catch {
          s.status === 404 && w === ""
            ? ((h = 204), (m = "No Content"))
            : (u = { message: w });
        }
        if (
          (u &&
            this.isMaybeSingle &&
            !((l = u == null ? void 0 : u.details) === null || l === void 0) &&
            l.includes("0 rows") &&
            ((u = null), (h = 200), (m = "OK")),
          u && this.shouldThrowOnError)
        )
          throw new CE.default(u);
      }
      return { error: u, data: c, count: d, status: h, statusText: m };
    });
    return (
      this.shouldThrowOnError ||
        (i = i.catch((s) => {
          var a, o, l;
          return {
            error: {
              message: `${
                (a = s == null ? void 0 : s.name) !== null && a !== void 0
                  ? a
                  : "FetchError"
              }: ${s == null ? void 0 : s.message}`,
              details: `${
                (o = s == null ? void 0 : s.stack) !== null && o !== void 0
                  ? o
                  : ""
              }`,
              hint: "",
              code: `${
                (l = s == null ? void 0 : s.code) !== null && l !== void 0
                  ? l
                  : ""
              }`,
            },
            data: null,
            count: null,
            status: 0,
            statusText: "",
          };
        })),
      i.then(t, r)
    );
  }
};
ru.default = EE;
var PE =
  (Qt && Qt.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(tu, "__esModule", { value: !0 });
const OE = PE(ru);
let TE = class extends OE.default {
  select(t) {
    let r = !1;
    const n = (t ?? "*")
      .split("")
      .map((i) => (/\s/.test(i) && !r ? "" : (i === '"' && (r = !r), i)))
      .join("");
    return (
      this.url.searchParams.set("select", n),
      this.headers.Prefer && (this.headers.Prefer += ","),
      (this.headers.Prefer += "return=representation"),
      this
    );
  }
  order(
    t,
    {
      ascending: r = !0,
      nullsFirst: n,
      foreignTable: i,
      referencedTable: s = i,
    } = {}
  ) {
    const a = s ? `${s}.order` : "order",
      o = this.url.searchParams.get(a);
    return (
      this.url.searchParams.set(
        a,
        `${o ? `${o},` : ""}${t}.${r ? "asc" : "desc"}${
          n === void 0 ? "" : n ? ".nullsfirst" : ".nullslast"
        }`
      ),
      this
    );
  }
  limit(t, { foreignTable: r, referencedTable: n = r } = {}) {
    const i = typeof n > "u" ? "limit" : `${n}.limit`;
    return this.url.searchParams.set(i, `${t}`), this;
  }
  range(t, r, { foreignTable: n, referencedTable: i = n } = {}) {
    const s = typeof i > "u" ? "offset" : `${i}.offset`,
      a = typeof i > "u" ? "limit" : `${i}.limit`;
    return (
      this.url.searchParams.set(s, `${t}`),
      this.url.searchParams.set(a, `${r - t + 1}`),
      this
    );
  }
  abortSignal(t) {
    return (this.signal = t), this;
  }
  single() {
    return (this.headers.Accept = "application/vnd.pgrst.object+json"), this;
  }
  maybeSingle() {
    return (
      this.method === "GET"
        ? (this.headers.Accept = "application/json")
        : (this.headers.Accept = "application/vnd.pgrst.object+json"),
      (this.isMaybeSingle = !0),
      this
    );
  }
  csv() {
    return (this.headers.Accept = "text/csv"), this;
  }
  geojson() {
    return (this.headers.Accept = "application/geo+json"), this;
  }
  explain({
    analyze: t = !1,
    verbose: r = !1,
    settings: n = !1,
    buffers: i = !1,
    wal: s = !1,
    format: a = "text",
  } = {}) {
    var o;
    const l = [
        t ? "analyze" : null,
        r ? "verbose" : null,
        n ? "settings" : null,
        i ? "buffers" : null,
        s ? "wal" : null,
      ]
        .filter(Boolean)
        .join("|"),
      u =
        (o = this.headers.Accept) !== null && o !== void 0
          ? o
          : "application/json";
    return (
      (this.headers.Accept = `application/vnd.pgrst.plan+${a}; for="${u}"; options=${l};`),
      a === "json" ? this : this
    );
  }
  rollback() {
    var t;
    return (
      ((t = this.headers.Prefer) !== null && t !== void 0 ? t : "").trim()
        .length > 0
        ? (this.headers.Prefer += ",tx=rollback")
        : (this.headers.Prefer = "tx=rollback"),
      this
    );
  }
  returns() {
    return this;
  }
};
tu.default = TE;
var AE =
  (Qt && Qt.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(Ra, "__esModule", { value: !0 });
const RE = AE(tu);
let DE = class extends RE.default {
  eq(t, r) {
    return this.url.searchParams.append(t, `eq.${r}`), this;
  }
  neq(t, r) {
    return this.url.searchParams.append(t, `neq.${r}`), this;
  }
  gt(t, r) {
    return this.url.searchParams.append(t, `gt.${r}`), this;
  }
  gte(t, r) {
    return this.url.searchParams.append(t, `gte.${r}`), this;
  }
  lt(t, r) {
    return this.url.searchParams.append(t, `lt.${r}`), this;
  }
  lte(t, r) {
    return this.url.searchParams.append(t, `lte.${r}`), this;
  }
  like(t, r) {
    return this.url.searchParams.append(t, `like.${r}`), this;
  }
  likeAllOf(t, r) {
    return this.url.searchParams.append(t, `like(all).{${r.join(",")}}`), this;
  }
  likeAnyOf(t, r) {
    return this.url.searchParams.append(t, `like(any).{${r.join(",")}}`), this;
  }
  ilike(t, r) {
    return this.url.searchParams.append(t, `ilike.${r}`), this;
  }
  ilikeAllOf(t, r) {
    return this.url.searchParams.append(t, `ilike(all).{${r.join(",")}}`), this;
  }
  ilikeAnyOf(t, r) {
    return this.url.searchParams.append(t, `ilike(any).{${r.join(",")}}`), this;
  }
  is(t, r) {
    return this.url.searchParams.append(t, `is.${r}`), this;
  }
  in(t, r) {
    const n = Array.from(new Set(r))
      .map((i) =>
        typeof i == "string" && new RegExp("[,()]").test(i) ? `"${i}"` : `${i}`
      )
      .join(",");
    return this.url.searchParams.append(t, `in.(${n})`), this;
  }
  contains(t, r) {
    return (
      typeof r == "string"
        ? this.url.searchParams.append(t, `cs.${r}`)
        : Array.isArray(r)
        ? this.url.searchParams.append(t, `cs.{${r.join(",")}}`)
        : this.url.searchParams.append(t, `cs.${JSON.stringify(r)}`),
      this
    );
  }
  containedBy(t, r) {
    return (
      typeof r == "string"
        ? this.url.searchParams.append(t, `cd.${r}`)
        : Array.isArray(r)
        ? this.url.searchParams.append(t, `cd.{${r.join(",")}}`)
        : this.url.searchParams.append(t, `cd.${JSON.stringify(r)}`),
      this
    );
  }
  rangeGt(t, r) {
    return this.url.searchParams.append(t, `sr.${r}`), this;
  }
  rangeGte(t, r) {
    return this.url.searchParams.append(t, `nxl.${r}`), this;
  }
  rangeLt(t, r) {
    return this.url.searchParams.append(t, `sl.${r}`), this;
  }
  rangeLte(t, r) {
    return this.url.searchParams.append(t, `nxr.${r}`), this;
  }
  rangeAdjacent(t, r) {
    return this.url.searchParams.append(t, `adj.${r}`), this;
  }
  overlaps(t, r) {
    return (
      typeof r == "string"
        ? this.url.searchParams.append(t, `ov.${r}`)
        : this.url.searchParams.append(t, `ov.{${r.join(",")}}`),
      this
    );
  }
  textSearch(t, r, { config: n, type: i } = {}) {
    let s = "";
    i === "plain"
      ? (s = "pl")
      : i === "phrase"
      ? (s = "ph")
      : i === "websearch" && (s = "w");
    const a = n === void 0 ? "" : `(${n})`;
    return this.url.searchParams.append(t, `${s}fts${a}.${r}`), this;
  }
  match(t) {
    return (
      Object.entries(t).forEach(([r, n]) => {
        this.url.searchParams.append(r, `eq.${n}`);
      }),
      this
    );
  }
  not(t, r, n) {
    return this.url.searchParams.append(t, `not.${r}.${n}`), this;
  }
  or(t, { foreignTable: r, referencedTable: n = r } = {}) {
    const i = n ? `${n}.or` : "or";
    return this.url.searchParams.append(i, `(${t})`), this;
  }
  filter(t, r, n) {
    return this.url.searchParams.append(t, `${r}.${n}`), this;
  }
};
Ra.default = DE;
var NE =
  (Qt && Qt.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(eu, "__esModule", { value: !0 });
const ks = NE(Ra);
let IE = class {
  constructor(t, { headers: r = {}, schema: n, fetch: i }) {
    (this.url = t), (this.headers = r), (this.schema = n), (this.fetch = i);
  }
  select(t, { head: r = !1, count: n } = {}) {
    const i = r ? "HEAD" : "GET";
    let s = !1;
    const a = (t ?? "*")
      .split("")
      .map((o) => (/\s/.test(o) && !s ? "" : (o === '"' && (s = !s), o)))
      .join("");
    return (
      this.url.searchParams.set("select", a),
      n && (this.headers.Prefer = `count=${n}`),
      new ks.default({
        method: i,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
  insert(t, { count: r, defaultToNull: n = !0 } = {}) {
    const i = "POST",
      s = [];
    if (
      (this.headers.Prefer && s.push(this.headers.Prefer),
      r && s.push(`count=${r}`),
      n || s.push("missing=default"),
      (this.headers.Prefer = s.join(",")),
      Array.isArray(t))
    ) {
      const a = t.reduce((o, l) => o.concat(Object.keys(l)), []);
      if (a.length > 0) {
        const o = [...new Set(a)].map((l) => `"${l}"`);
        this.url.searchParams.set("columns", o.join(","));
      }
    }
    return new ks.default({
      method: i,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: t,
      fetch: this.fetch,
      allowEmpty: !1,
    });
  }
  upsert(
    t,
    {
      onConflict: r,
      ignoreDuplicates: n = !1,
      count: i,
      defaultToNull: s = !0,
    } = {}
  ) {
    const a = "POST",
      o = [`resolution=${n ? "ignore" : "merge"}-duplicates`];
    if (
      (r !== void 0 && this.url.searchParams.set("on_conflict", r),
      this.headers.Prefer && o.push(this.headers.Prefer),
      i && o.push(`count=${i}`),
      s || o.push("missing=default"),
      (this.headers.Prefer = o.join(",")),
      Array.isArray(t))
    ) {
      const l = t.reduce((u, c) => u.concat(Object.keys(c)), []);
      if (l.length > 0) {
        const u = [...new Set(l)].map((c) => `"${c}"`);
        this.url.searchParams.set("columns", u.join(","));
      }
    }
    return new ks.default({
      method: a,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: t,
      fetch: this.fetch,
      allowEmpty: !1,
    });
  }
  update(t, { count: r } = {}) {
    const n = "PATCH",
      i = [];
    return (
      this.headers.Prefer && i.push(this.headers.Prefer),
      r && i.push(`count=${r}`),
      (this.headers.Prefer = i.join(",")),
      new ks.default({
        method: n,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: t,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
  delete({ count: t } = {}) {
    const r = "DELETE",
      n = [];
    return (
      t && n.push(`count=${t}`),
      this.headers.Prefer && n.unshift(this.headers.Prefer),
      (this.headers.Prefer = n.join(",")),
      new ks.default({
        method: r,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
};
eu.default = IE;
var nu = {},
  iu = {};
Object.defineProperty(iu, "__esModule", { value: !0 });
iu.version = void 0;
iu.version = "0.0.0-automated";
Object.defineProperty(nu, "__esModule", { value: !0 });
nu.DEFAULT_HEADERS = void 0;
const $E = iu;
nu.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${$E.version}` };
var r1 =
  (Qt && Qt.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(dh, "__esModule", { value: !0 });
const LE = r1(eu),
  ME = r1(Ra),
  FE = nu;
let jE = class n1 {
  constructor(t, { headers: r = {}, schema: n, fetch: i } = {}) {
    (this.url = t),
      (this.headers = Object.assign(Object.assign({}, FE.DEFAULT_HEADERS), r)),
      (this.schemaName = n),
      (this.fetch = i);
  }
  from(t) {
    const r = new URL(`${this.url}/${t}`);
    return new LE.default(r, {
      headers: Object.assign({}, this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
    });
  }
  schema(t) {
    return new n1(this.url, {
      headers: this.headers,
      schema: t,
      fetch: this.fetch,
    });
  }
  rpc(t, r = {}, { head: n = !1, get: i = !1, count: s } = {}) {
    let a;
    const o = new URL(`${this.url}/rpc/${t}`);
    let l;
    n || i
      ? ((a = n ? "HEAD" : "GET"),
        Object.entries(r)
          .filter(([c, d]) => d !== void 0)
          .map(([c, d]) => [c, Array.isArray(d) ? `{${d.join(",")}}` : `${d}`])
          .forEach(([c, d]) => {
            o.searchParams.append(c, d);
          }))
      : ((a = "POST"), (l = r));
    const u = Object.assign({}, this.headers);
    return (
      s && (u.Prefer = `count=${s}`),
      new ME.default({
        method: a,
        url: o,
        headers: u,
        schema: this.schemaName,
        body: l,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
};
dh.default = jE;
var Da =
  (Qt && Qt.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(Bt, "__esModule", { value: !0 });
Bt.PostgrestBuilder =
  Bt.PostgrestTransformBuilder =
  Bt.PostgrestFilterBuilder =
  Bt.PostgrestQueryBuilder =
  Bt.PostgrestClient =
    void 0;
const i1 = Da(dh);
Bt.PostgrestClient = i1.default;
const s1 = Da(eu);
Bt.PostgrestQueryBuilder = s1.default;
const a1 = Da(Ra);
Bt.PostgrestFilterBuilder = a1.default;
const o1 = Da(tu);
Bt.PostgrestTransformBuilder = o1.default;
const l1 = Da(ru);
Bt.PostgrestBuilder = l1.default;
var UE = (Bt.default = {
  PostgrestClient: i1.default,
  PostgrestQueryBuilder: s1.default,
  PostgrestFilterBuilder: a1.default,
  PostgrestTransformBuilder: o1.default,
  PostgrestBuilder: l1.default,
});
const {
    PostgrestClient: zE,
    PostgrestQueryBuilder: uR,
    PostgrestFilterBuilder: cR,
    PostgrestTransformBuilder: dR,
    PostgrestBuilder: fR,
  } = UE,
  BE = "2.10.2",
  WE = { "X-Client-Info": `realtime-js/${BE}` },
  VE = "1.0.0",
  u1 = 1e4,
  HE = 1e3;
var ji;
(function (e) {
  (e[(e.connecting = 0)] = "connecting"),
    (e[(e.open = 1)] = "open"),
    (e[(e.closing = 2)] = "closing"),
    (e[(e.closed = 3)] = "closed");
})(ji || (ji = {}));
var xt;
(function (e) {
  (e.closed = "closed"),
    (e.errored = "errored"),
    (e.joined = "joined"),
    (e.joining = "joining"),
    (e.leaving = "leaving");
})(xt || (xt = {}));
var nr;
(function (e) {
  (e.close = "phx_close"),
    (e.error = "phx_error"),
    (e.join = "phx_join"),
    (e.reply = "phx_reply"),
    (e.leave = "phx_leave"),
    (e.access_token = "access_token");
})(nr || (nr = {}));
var _d;
(function (e) {
  e.websocket = "websocket";
})(_d || (_d = {}));
var $n;
(function (e) {
  (e.Connecting = "connecting"),
    (e.Open = "open"),
    (e.Closing = "closing"),
    (e.Closed = "closed");
})($n || ($n = {}));
class qE {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(t, r) {
    return t.constructor === ArrayBuffer
      ? r(this._binaryDecode(t))
      : r(typeof t == "string" ? JSON.parse(t) : {});
  }
  _binaryDecode(t) {
    const r = new DataView(t),
      n = new TextDecoder();
    return this._decodeBroadcast(t, r, n);
  }
  _decodeBroadcast(t, r, n) {
    const i = r.getUint8(1),
      s = r.getUint8(2);
    let a = this.HEADER_LENGTH + 2;
    const o = n.decode(t.slice(a, a + i));
    a = a + i;
    const l = n.decode(t.slice(a, a + s));
    a = a + s;
    const u = JSON.parse(n.decode(t.slice(a, t.byteLength)));
    return { ref: null, topic: o, event: l, payload: u };
  }
}
class c1 {
  constructor(t, r) {
    (this.callback = t),
      (this.timerCalc = r),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = t),
      (this.timerCalc = r);
  }
  reset() {
    (this.tries = 0), clearTimeout(this.timer);
  }
  scheduleTimeout() {
    clearTimeout(this.timer),
      (this.timer = setTimeout(() => {
        (this.tries = this.tries + 1), this.callback();
      }, this.timerCalc(this.tries + 1)));
  }
}
var Se;
(function (e) {
  (e.abstime = "abstime"),
    (e.bool = "bool"),
    (e.date = "date"),
    (e.daterange = "daterange"),
    (e.float4 = "float4"),
    (e.float8 = "float8"),
    (e.int2 = "int2"),
    (e.int4 = "int4"),
    (e.int4range = "int4range"),
    (e.int8 = "int8"),
    (e.int8range = "int8range"),
    (e.json = "json"),
    (e.jsonb = "jsonb"),
    (e.money = "money"),
    (e.numeric = "numeric"),
    (e.oid = "oid"),
    (e.reltime = "reltime"),
    (e.text = "text"),
    (e.time = "time"),
    (e.timestamp = "timestamp"),
    (e.timestamptz = "timestamptz"),
    (e.timetz = "timetz"),
    (e.tsrange = "tsrange"),
    (e.tstzrange = "tstzrange");
})(Se || (Se = {}));
const Am = (e, t, r = {}) => {
    var n;
    const i = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
    return Object.keys(t).reduce((s, a) => ((s[a] = QE(a, e, t, i)), s), {});
  },
  QE = (e, t, r, n) => {
    const i = t.find((o) => o.name === e),
      s = i == null ? void 0 : i.type,
      a = r[e];
    return s && !n.includes(s) ? d1(s, a) : Sd(a);
  },
  d1 = (e, t) => {
    if (e.charAt(0) === "_") {
      const r = e.slice(1, e.length);
      return XE(t, r);
    }
    switch (e) {
      case Se.bool:
        return YE(t);
      case Se.float4:
      case Se.float8:
      case Se.int2:
      case Se.int4:
      case Se.int8:
      case Se.numeric:
      case Se.oid:
        return GE(t);
      case Se.json:
      case Se.jsonb:
        return KE(t);
      case Se.timestamp:
        return JE(t);
      case Se.abstime:
      case Se.date:
      case Se.daterange:
      case Se.int4range:
      case Se.int8range:
      case Se.money:
      case Se.reltime:
      case Se.text:
      case Se.time:
      case Se.timestamptz:
      case Se.timetz:
      case Se.tsrange:
      case Se.tstzrange:
        return Sd(t);
      default:
        return Sd(t);
    }
  },
  Sd = (e) => e,
  YE = (e) => {
    switch (e) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return e;
    }
  },
  GE = (e) => {
    if (typeof e == "string") {
      const t = parseFloat(e);
      if (!Number.isNaN(t)) return t;
    }
    return e;
  },
  KE = (e) => {
    if (typeof e == "string")
      try {
        return JSON.parse(e);
      } catch (t) {
        return console.log(`JSON parse error: ${t}`), e;
      }
    return e;
  },
  XE = (e, t) => {
    if (typeof e != "string") return e;
    const r = e.length - 1,
      n = e[r];
    if (e[0] === "{" && n === "}") {
      let s;
      const a = e.slice(1, r);
      try {
        s = JSON.parse("[" + a + "]");
      } catch {
        s = a ? a.split(",") : [];
      }
      return s.map((o) => d1(t, o));
    }
    return e;
  },
  JE = (e) => (typeof e == "string" ? e.replace(" ", "T") : e),
  f1 = (e) => {
    let t = e;
    return (
      (t = t.replace(/^ws/i, "http")),
      (t = t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")),
      t.replace(/\/+$/, "")
    );
  };
class Gu {
  constructor(t, r, n = {}, i = u1) {
    (this.channel = t),
      (this.event = r),
      (this.payload = n),
      (this.timeout = i),
      (this.sent = !1),
      (this.timeoutTimer = void 0),
      (this.ref = ""),
      (this.receivedResp = null),
      (this.recHooks = []),
      (this.refEvent = null);
  }
  resend(t) {
    (this.timeout = t),
      this._cancelRefEvent(),
      (this.ref = ""),
      (this.refEvent = null),
      (this.receivedResp = null),
      (this.sent = !1),
      this.send();
  }
  send() {
    this._hasReceived("timeout") ||
      (this.startTimeout(),
      (this.sent = !0),
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef(),
      }));
  }
  updatePayload(t) {
    this.payload = Object.assign(Object.assign({}, this.payload), t);
  }
  receive(t, r) {
    var n;
    return (
      this._hasReceived(t) &&
        r(
          (n = this.receivedResp) === null || n === void 0 ? void 0 : n.response
        ),
      this.recHooks.push({ status: t, callback: r }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    (this.ref = this.channel.socket._makeRef()),
      (this.refEvent = this.channel._replyEventName(this.ref));
    const t = (r) => {
      this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = r),
        this._matchReceive(r);
    };
    this.channel._on(this.refEvent, {}, t),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout));
  }
  trigger(t, r) {
    this.refEvent &&
      this.channel._trigger(this.refEvent, { status: t, response: r });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
  }
  _matchReceive({ status: t, response: r }) {
    this.recHooks.filter((n) => n.status === t).forEach((n) => n.callback(r));
  }
  _hasReceived(t) {
    return this.receivedResp && this.receivedResp.status === t;
  }
}
var Rm;
(function (e) {
  (e.SYNC = "sync"), (e.JOIN = "join"), (e.LEAVE = "leave");
})(Rm || (Rm = {}));
class Qs {
  constructor(t, r) {
    (this.channel = t),
      (this.state = {}),
      (this.pendingDiffs = []),
      (this.joinRef = null),
      (this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
    const n = (r == null ? void 0 : r.events) || {
      state: "presence_state",
      diff: "presence_diff",
    };
    this.channel._on(n.state, {}, (i) => {
      const { onJoin: s, onLeave: a, onSync: o } = this.caller;
      (this.joinRef = this.channel._joinRef()),
        (this.state = Qs.syncState(this.state, i, s, a)),
        this.pendingDiffs.forEach((l) => {
          this.state = Qs.syncDiff(this.state, l, s, a);
        }),
        (this.pendingDiffs = []),
        o();
    }),
      this.channel._on(n.diff, {}, (i) => {
        const { onJoin: s, onLeave: a, onSync: o } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(i)
          : ((this.state = Qs.syncDiff(this.state, i, s, a)), o());
      }),
      this.onJoin((i, s, a) => {
        this.channel._trigger("presence", {
          event: "join",
          key: i,
          currentPresences: s,
          newPresences: a,
        });
      }),
      this.onLeave((i, s, a) => {
        this.channel._trigger("presence", {
          event: "leave",
          key: i,
          currentPresences: s,
          leftPresences: a,
        });
      }),
      this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      });
  }
  static syncState(t, r, n, i) {
    const s = this.cloneDeep(t),
      a = this.transformState(r),
      o = {},
      l = {};
    return (
      this.map(s, (u, c) => {
        a[u] || (l[u] = c);
      }),
      this.map(a, (u, c) => {
        const d = s[u];
        if (d) {
          const h = c.map((k) => k.presence_ref),
            m = d.map((k) => k.presence_ref),
            y = c.filter((k) => m.indexOf(k.presence_ref) < 0),
            w = d.filter((k) => h.indexOf(k.presence_ref) < 0);
          y.length > 0 && (o[u] = y), w.length > 0 && (l[u] = w);
        } else o[u] = c;
      }),
      this.syncDiff(s, { joins: o, leaves: l }, n, i)
    );
  }
  static syncDiff(t, r, n, i) {
    const { joins: s, leaves: a } = {
      joins: this.transformState(r.joins),
      leaves: this.transformState(r.leaves),
    };
    return (
      n || (n = () => {}),
      i || (i = () => {}),
      this.map(s, (o, l) => {
        var u;
        const c = (u = t[o]) !== null && u !== void 0 ? u : [];
        if (((t[o] = this.cloneDeep(l)), c.length > 0)) {
          const d = t[o].map((m) => m.presence_ref),
            h = c.filter((m) => d.indexOf(m.presence_ref) < 0);
          t[o].unshift(...h);
        }
        n(o, c, l);
      }),
      this.map(a, (o, l) => {
        let u = t[o];
        if (!u) return;
        const c = l.map((d) => d.presence_ref);
        (u = u.filter((d) => c.indexOf(d.presence_ref) < 0)),
          (t[o] = u),
          i(o, u, l),
          u.length === 0 && delete t[o];
      }),
      t
    );
  }
  static map(t, r) {
    return Object.getOwnPropertyNames(t).map((n) => r(n, t[n]));
  }
  static transformState(t) {
    return (
      (t = this.cloneDeep(t)),
      Object.getOwnPropertyNames(t).reduce((r, n) => {
        const i = t[n];
        return (
          "metas" in i
            ? (r[n] = i.metas.map(
                (s) => (
                  (s.presence_ref = s.phx_ref),
                  delete s.phx_ref,
                  delete s.phx_ref_prev,
                  s
                )
              ))
            : (r[n] = i),
          r
        );
      }, {})
    );
  }
  static cloneDeep(t) {
    return JSON.parse(JSON.stringify(t));
  }
  onJoin(t) {
    this.caller.onJoin = t;
  }
  onLeave(t) {
    this.caller.onLeave = t;
  }
  onSync(t) {
    this.caller.onSync = t;
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var Dm;
(function (e) {
  (e.ALL = "*"),
    (e.INSERT = "INSERT"),
    (e.UPDATE = "UPDATE"),
    (e.DELETE = "DELETE");
})(Dm || (Dm = {}));
var Nm;
(function (e) {
  (e.BROADCAST = "broadcast"),
    (e.PRESENCE = "presence"),
    (e.POSTGRES_CHANGES = "postgres_changes");
})(Nm || (Nm = {}));
var Im;
(function (e) {
  (e.SUBSCRIBED = "SUBSCRIBED"),
    (e.TIMED_OUT = "TIMED_OUT"),
    (e.CLOSED = "CLOSED"),
    (e.CHANNEL_ERROR = "CHANNEL_ERROR");
})(Im || (Im = {}));
class hh {
  constructor(t, r = { config: {} }, n) {
    (this.topic = t),
      (this.params = r),
      (this.socket = n),
      (this.bindings = {}),
      (this.state = xt.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.subTopic = t.replace(/^realtime:/i, "")),
      (this.params.config = Object.assign(
        {
          broadcast: { ack: !1, self: !1 },
          presence: { key: "" },
          private: !1,
        },
        r.config
      )),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new Gu(this, nr.join, this.params, this.timeout)),
      (this.rejoinTimer = new c1(
        () => this._rejoinUntilConnected(),
        this.socket.reconnectAfterMs
      )),
      this.joinPush.receive("ok", () => {
        (this.state = xt.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((i) => i.send()),
          (this.pushBuffer = []);
      }),
      this._onClose(() => {
        this.rejoinTimer.reset(),
          this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
          (this.state = xt.closed),
          this.socket._remove(this);
      }),
      this._onError((i) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, i),
          (this.state = xt.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("timeout", () => {
        this._isJoining() &&
          (this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout
          ),
          (this.state = xt.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this._on(nr.reply, {}, (i, s) => {
        this._trigger(this._replyEventName(s), i);
      }),
      (this.presence = new Qs(this)),
      (this.broadcastEndpointURL = f1(this.socket.endPoint) + "/api/broadcast");
  }
  subscribe(t, r = this.timeout) {
    var n, i;
    if ((this.socket.isConnected() || this.socket.connect(), this.joinedOnce))
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    {
      const {
        config: { broadcast: s, presence: a, private: o },
      } = this.params;
      this._onError((c) => t && t("CHANNEL_ERROR", c)),
        this._onClose(() => t && t("CLOSED"));
      const l = {},
        u = {
          broadcast: s,
          presence: a,
          postgres_changes:
            (i =
              (n = this.bindings.postgres_changes) === null || n === void 0
                ? void 0
                : n.map((c) => c.filter)) !== null && i !== void 0
              ? i
              : [],
          private: o,
        };
      this.socket.accessToken && (l.access_token = this.socket.accessToken),
        this.updateJoinPayload(Object.assign({ config: u }, l)),
        (this.joinedOnce = !0),
        this._rejoin(r),
        this.joinPush
          .receive("ok", ({ postgres_changes: c }) => {
            var d;
            if (
              (this.socket.accessToken &&
                this.socket.setAuth(this.socket.accessToken),
              c === void 0)
            ) {
              t && t("SUBSCRIBED");
              return;
            } else {
              const h = this.bindings.postgres_changes,
                m =
                  (d = h == null ? void 0 : h.length) !== null && d !== void 0
                    ? d
                    : 0,
                y = [];
              for (let w = 0; w < m; w++) {
                const k = h[w],
                  {
                    filter: { event: p, schema: f, table: v, filter: _ },
                  } = k,
                  S = c && c[w];
                if (
                  S &&
                  S.event === p &&
                  S.schema === f &&
                  S.table === v &&
                  S.filter === _
                )
                  y.push(Object.assign(Object.assign({}, k), { id: S.id }));
                else {
                  this.unsubscribe(),
                    t &&
                      t(
                        "CHANNEL_ERROR",
                        new Error(
                          "mismatch between server and client bindings for postgres changes"
                        )
                      );
                  return;
                }
              }
              (this.bindings.postgres_changes = y), t && t("SUBSCRIBED");
              return;
            }
          })
          .receive("error", (c) => {
            t &&
              t(
                "CHANNEL_ERROR",
                new Error(
                  JSON.stringify(Object.values(c).join(", ") || "error")
                )
              );
          })
          .receive("timeout", () => {
            t && t("TIMED_OUT");
          });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(t, r = {}) {
    return await this.send(
      { type: "presence", event: "track", payload: t },
      r.timeout || this.timeout
    );
  }
  async untrack(t = {}) {
    return await this.send({ type: "presence", event: "untrack" }, t);
  }
  on(t, r, n) {
    return this._on(t, r, n);
  }
  async send(t, r = {}) {
    var n, i;
    if (!this._canPush() && t.type === "broadcast") {
      const { event: s, payload: a } = t,
        o = {
          method: "POST",
          headers: {
            Authorization: this.socket.accessToken
              ? `Bearer ${this.socket.accessToken}`
              : "",
            apikey: this.socket.apiKey ? this.socket.apiKey : "",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [{ topic: this.subTopic, event: s, payload: a }],
          }),
        };
      try {
        const l = await this._fetchWithTimeout(
          this.broadcastEndpointURL,
          o,
          (n = r.timeout) !== null && n !== void 0 ? n : this.timeout
        );
        return (
          await ((i = l.body) === null || i === void 0 ? void 0 : i.cancel()),
          l.ok ? "ok" : "error"
        );
      } catch (l) {
        return l.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((s) => {
        var a, o, l;
        const u = this._push(t.type, t, r.timeout || this.timeout);
        t.type === "broadcast" &&
          !(
            !(
              (l =
                (o =
                  (a = this.params) === null || a === void 0
                    ? void 0
                    : a.config) === null || o === void 0
                  ? void 0
                  : o.broadcast) === null || l === void 0
            ) && l.ack
          ) &&
          s("ok"),
          u.receive("ok", () => s("ok")),
          u.receive("error", () => s("error")),
          u.receive("timeout", () => s("timed out"));
      });
  }
  updateJoinPayload(t) {
    this.joinPush.updatePayload(t);
  }
  unsubscribe(t = this.timeout) {
    this.state = xt.leaving;
    const r = () => {
      this.socket.log("channel", `leave ${this.topic}`),
        this._trigger(nr.close, "leave", this._joinRef());
    };
    return (
      this.rejoinTimer.reset(),
      this.joinPush.destroy(),
      new Promise((n) => {
        const i = new Gu(this, nr.leave, {}, t);
        i
          .receive("ok", () => {
            r(), n("ok");
          })
          .receive("timeout", () => {
            r(), n("timed out");
          })
          .receive("error", () => {
            n("error");
          }),
          i.send(),
          this._canPush() || i.trigger("ok", {});
      })
    );
  }
  async _fetchWithTimeout(t, r, n) {
    const i = new AbortController(),
      s = setTimeout(() => i.abort(), n),
      a = await this.socket.fetch(
        t,
        Object.assign(Object.assign({}, r), { signal: i.signal })
      );
    return clearTimeout(s), a;
  }
  _push(t, r, n = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let i = new Gu(this, t, r, n);
    return (
      this._canPush() ? i.send() : (i.startTimeout(), this.pushBuffer.push(i)),
      i
    );
  }
  _onMessage(t, r, n) {
    return r;
  }
  _isMember(t) {
    return this.topic === t;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(t, r, n) {
    var i, s;
    const a = t.toLocaleLowerCase(),
      { close: o, error: l, leave: u, join: c } = nr;
    if (n && [o, l, u, c].indexOf(a) >= 0 && n !== this._joinRef()) return;
    let h = this._onMessage(a, r, n);
    if (r && !h)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(a)
      ? (i = this.bindings.postgres_changes) === null ||
        i === void 0 ||
        i
          .filter((m) => {
            var y, w, k;
            return (
              ((y = m.filter) === null || y === void 0 ? void 0 : y.event) ===
                "*" ||
              ((k =
                (w = m.filter) === null || w === void 0 ? void 0 : w.event) ===
                null || k === void 0
                ? void 0
                : k.toLocaleLowerCase()) === a
            );
          })
          .map((m) => m.callback(h, n))
      : (s = this.bindings[a]) === null ||
        s === void 0 ||
        s
          .filter((m) => {
            var y, w, k, p, f, v;
            if (["broadcast", "presence", "postgres_changes"].includes(a))
              if ("id" in m) {
                const _ = m.id,
                  S =
                    (y = m.filter) === null || y === void 0 ? void 0 : y.event;
                return (
                  _ &&
                  ((w = r.ids) === null || w === void 0
                    ? void 0
                    : w.includes(_)) &&
                  (S === "*" ||
                    (S == null ? void 0 : S.toLocaleLowerCase()) ===
                      ((k = r.data) === null || k === void 0
                        ? void 0
                        : k.type.toLocaleLowerCase()))
                );
              } else {
                const _ =
                  (f =
                    (p = m == null ? void 0 : m.filter) === null || p === void 0
                      ? void 0
                      : p.event) === null || f === void 0
                    ? void 0
                    : f.toLocaleLowerCase();
                return (
                  _ === "*" ||
                  _ ===
                    ((v = r == null ? void 0 : r.event) === null || v === void 0
                      ? void 0
                      : v.toLocaleLowerCase())
                );
              }
            else return m.type.toLocaleLowerCase() === a;
          })
          .map((m) => {
            if (typeof h == "object" && "ids" in h) {
              const y = h.data,
                {
                  schema: w,
                  table: k,
                  commit_timestamp: p,
                  type: f,
                  errors: v,
                } = y;
              h = Object.assign(
                Object.assign(
                  {},
                  {
                    schema: w,
                    table: k,
                    commit_timestamp: p,
                    eventType: f,
                    new: {},
                    old: {},
                    errors: v,
                  }
                ),
                this._getPayloadRecords(y)
              );
            }
            m.callback(h, n);
          });
  }
  _isClosed() {
    return this.state === xt.closed;
  }
  _isJoined() {
    return this.state === xt.joined;
  }
  _isJoining() {
    return this.state === xt.joining;
  }
  _isLeaving() {
    return this.state === xt.leaving;
  }
  _replyEventName(t) {
    return `chan_reply_${t}`;
  }
  _on(t, r, n) {
    const i = t.toLocaleLowerCase(),
      s = { type: i, filter: r, callback: n };
    return (
      this.bindings[i] ? this.bindings[i].push(s) : (this.bindings[i] = [s]),
      this
    );
  }
  _off(t, r) {
    const n = t.toLocaleLowerCase();
    return (
      (this.bindings[n] = this.bindings[n].filter((i) => {
        var s;
        return !(
          ((s = i.type) === null || s === void 0
            ? void 0
            : s.toLocaleLowerCase()) === n && hh.isEqual(i.filter, r)
        );
      })),
      this
    );
  }
  static isEqual(t, r) {
    if (Object.keys(t).length !== Object.keys(r).length) return !1;
    for (const n in t) if (t[n] !== r[n]) return !1;
    return !0;
  }
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this._rejoin();
  }
  _onClose(t) {
    this._on(nr.close, {}, t);
  }
  _onError(t) {
    this._on(nr.error, {}, (r) => t(r));
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  _rejoin(t = this.timeout) {
    this._isLeaving() ||
      (this.socket._leaveOpenTopic(this.topic),
      (this.state = xt.joining),
      this.joinPush.resend(t));
  }
  _getPayloadRecords(t) {
    const r = { new: {}, old: {} };
    return (
      (t.type === "INSERT" || t.type === "UPDATE") &&
        (r.new = Am(t.columns, t.record)),
      (t.type === "UPDATE" || t.type === "DELETE") &&
        (r.old = Am(t.columns, t.old_record)),
      r
    );
  }
}
const ZE = () => {},
  eP = typeof WebSocket < "u";
class tP {
  constructor(t, r) {
    var n;
    (this.accessToken = null),
      (this.apiKey = null),
      (this.channels = []),
      (this.endPoint = ""),
      (this.httpEndpoint = ""),
      (this.headers = WE),
      (this.params = {}),
      (this.timeout = u1),
      (this.heartbeatIntervalMs = 3e4),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.ref = 0),
      (this.logger = ZE),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new qE()),
      (this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
      (this._resolveFetch = (s) => {
        let a;
        return (
          s
            ? (a = s)
            : typeof fetch > "u"
            ? (a = (...o) =>
                Ki(() => Promise.resolve().then(() => os), void 0).then(
                  ({ default: l }) => l(...o)
                ))
            : (a = fetch),
          (...o) => a(...o)
        );
      }),
      (this.endPoint = `${t}/${_d.websocket}`),
      (this.httpEndpoint = f1(t)),
      r != null && r.transport
        ? (this.transport = r.transport)
        : (this.transport = null),
      r != null && r.params && (this.params = r.params),
      r != null &&
        r.headers &&
        (this.headers = Object.assign(
          Object.assign({}, this.headers),
          r.headers
        )),
      r != null && r.timeout && (this.timeout = r.timeout),
      r != null && r.logger && (this.logger = r.logger),
      r != null &&
        r.heartbeatIntervalMs &&
        (this.heartbeatIntervalMs = r.heartbeatIntervalMs);
    const i =
      (n = r == null ? void 0 : r.params) === null || n === void 0
        ? void 0
        : n.apikey;
    i && ((this.accessToken = i), (this.apiKey = i)),
      (this.reconnectAfterMs =
        r != null && r.reconnectAfterMs
          ? r.reconnectAfterMs
          : (s) => [1e3, 2e3, 5e3, 1e4][s - 1] || 1e4),
      (this.encode =
        r != null && r.encode ? r.encode : (s, a) => a(JSON.stringify(s))),
      (this.decode =
        r != null && r.decode
          ? r.decode
          : this.serializer.decode.bind(this.serializer)),
      (this.reconnectTimer = new c1(async () => {
        this.disconnect(), this.connect();
      }, this.reconnectAfterMs)),
      (this.fetch = this._resolveFetch(r == null ? void 0 : r.fetch));
  }
  connect() {
    if (!this.conn) {
      if (this.transport) {
        this.conn = new this.transport(this._endPointURL(), void 0, {
          headers: this.headers,
        });
        return;
      }
      if (eP) {
        (this.conn = new WebSocket(this._endPointURL())),
          this.setupConnection();
        return;
      }
      (this.conn = new rP(this._endPointURL(), void 0, {
        close: () => {
          this.conn = null;
        },
      })),
        Ki(() => import("./browser-7884de79.js").then((t) => t.b), []).then(
          ({ default: t }) => {
            (this.conn = new t(this._endPointURL(), void 0, {
              headers: this.headers,
            })),
              this.setupConnection();
          }
        );
    }
  }
  disconnect(t, r) {
    this.conn &&
      ((this.conn.onclose = function () {}),
      t ? this.conn.close(t, r ?? "") : this.conn.close(),
      (this.conn = null),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      this.reconnectTimer.reset());
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(t) {
    const r = await t.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), r;
  }
  async removeAllChannels() {
    const t = await Promise.all(this.channels.map((r) => r.unsubscribe()));
    return this.disconnect(), t;
  }
  log(t, r, n) {
    this.logger(t, r, n);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case ji.connecting:
        return $n.Connecting;
      case ji.open:
        return $n.Open;
      case ji.closing:
        return $n.Closing;
      default:
        return $n.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === $n.Open;
  }
  channel(t, r = { config: {} }) {
    const n = new hh(`realtime:${t}`, r, this);
    return this.channels.push(n), n;
  }
  push(t) {
    const { topic: r, event: n, payload: i, ref: s } = t,
      a = () => {
        this.encode(t, (o) => {
          var l;
          (l = this.conn) === null || l === void 0 || l.send(o);
        });
      };
    this.log("push", `${r} ${n} (${s})`, i),
      this.isConnected() ? a() : this.sendBuffer.push(a);
  }
  setAuth(t) {
    (this.accessToken = t),
      this.channels.forEach((r) => {
        t && r.updateJoinPayload({ access_token: t }),
          r.joinedOnce &&
            r._isJoined() &&
            r._push(nr.access_token, { access_token: t });
      });
  }
  _makeRef() {
    let t = this.ref + 1;
    return (
      t === this.ref ? (this.ref = 0) : (this.ref = t), this.ref.toString()
    );
  }
  _leaveOpenTopic(t) {
    let r = this.channels.find(
      (n) => n.topic === t && (n._isJoined() || n._isJoining())
    );
    r &&
      (this.log("transport", `leaving duplicate topic "${t}"`),
      r.unsubscribe());
  }
  _remove(t) {
    this.channels = this.channels.filter((r) => r._joinRef() !== t._joinRef());
  }
  setupConnection() {
    this.conn &&
      ((this.conn.binaryType = "arraybuffer"),
      (this.conn.onopen = () => this._onConnOpen()),
      (this.conn.onerror = (t) => this._onConnError(t)),
      (this.conn.onmessage = (t) => this._onConnMessage(t)),
      (this.conn.onclose = (t) => this._onConnClose(t)));
  }
  _endPointURL() {
    return this._appendParams(
      this.endPoint,
      Object.assign({}, this.params, { vsn: VE })
    );
  }
  _onConnMessage(t) {
    this.decode(t.data, (r) => {
      let { topic: n, event: i, payload: s, ref: a } = r;
      ((a && a === this.pendingHeartbeatRef) ||
        i === (s == null ? void 0 : s.type)) &&
        (this.pendingHeartbeatRef = null),
        this.log(
          "receive",
          `${s.status || ""} ${n} ${i} ${(a && "(" + a + ")") || ""}`,
          s
        ),
        this.channels
          .filter((o) => o._isMember(n))
          .forEach((o) => o._trigger(i, s, a)),
        this.stateChangeCallbacks.message.forEach((o) => o(r));
    });
  }
  _onConnOpen() {
    this.log("transport", `connected to ${this._endPointURL()}`),
      this._flushSendBuffer(),
      this.reconnectTimer.reset(),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      (this.heartbeatTimer = setInterval(
        () => this._sendHeartbeat(),
        this.heartbeatIntervalMs
      )),
      this.stateChangeCallbacks.open.forEach((t) => t());
  }
  _onConnClose(t) {
    this.log("transport", "close", t),
      this._triggerChanError(),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      this.reconnectTimer.scheduleTimeout(),
      this.stateChangeCallbacks.close.forEach((r) => r(t));
  }
  _onConnError(t) {
    this.log("transport", t.message),
      this._triggerChanError(),
      this.stateChangeCallbacks.error.forEach((r) => r(t));
  }
  _triggerChanError() {
    this.channels.forEach((t) => t._trigger(nr.error));
  }
  _appendParams(t, r) {
    if (Object.keys(r).length === 0) return t;
    const n = t.match(/\?/) ? "&" : "?",
      i = new URLSearchParams(r);
    return `${t}${n}${i}`;
  }
  _flushSendBuffer() {
    this.isConnected() &&
      this.sendBuffer.length > 0 &&
      (this.sendBuffer.forEach((t) => t()), (this.sendBuffer = []));
  }
  _sendHeartbeat() {
    var t;
    if (this.isConnected()) {
      if (this.pendingHeartbeatRef) {
        (this.pendingHeartbeatRef = null),
          this.log(
            "transport",
            "heartbeat timeout. Attempting to re-establish connection"
          ),
          (t = this.conn) === null ||
            t === void 0 ||
            t.close(HE, "hearbeat timeout");
        return;
      }
      (this.pendingHeartbeatRef = this._makeRef()),
        this.push({
          topic: "phoenix",
          event: "heartbeat",
          payload: {},
          ref: this.pendingHeartbeatRef,
        }),
        this.setAuth(this.accessToken);
    }
  }
}
class rP {
  constructor(t, r, n) {
    (this.binaryType = "arraybuffer"),
      (this.onclose = () => {}),
      (this.onerror = () => {}),
      (this.onmessage = () => {}),
      (this.onopen = () => {}),
      (this.readyState = ji.connecting),
      (this.send = () => {}),
      (this.url = null),
      (this.url = t),
      (this.close = n.close);
  }
}
class ph extends Error {
  constructor(t) {
    super(t), (this.__isStorageError = !0), (this.name = "StorageError");
  }
}
function st(e) {
  return typeof e == "object" && e !== null && "__isStorageError" in e;
}
class nP extends ph {
  constructor(t, r) {
    super(t), (this.name = "StorageApiError"), (this.status = r);
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status };
  }
}
class $m extends ph {
  constructor(t, r) {
    super(t), (this.name = "StorageUnknownError"), (this.originalError = r);
  }
}
var iP =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, r, n) {
    function i(s) {
      return s instanceof r
        ? s
        : new r(function (a) {
            a(s);
          });
    }
    return new (r || (r = Promise))(function (s, a) {
      function o(c) {
        try {
          u(n.next(c));
        } catch (d) {
          a(d);
        }
      }
      function l(c) {
        try {
          u(n.throw(c));
        } catch (d) {
          a(d);
        }
      }
      function u(c) {
        c.done ? s(c.value) : i(c.value).then(o, l);
      }
      u((n = n.apply(e, t || [])).next());
    });
  };
const h1 = (e) => {
    let t;
    return (
      e
        ? (t = e)
        : typeof fetch > "u"
        ? (t = (...r) =>
            Ki(() => Promise.resolve().then(() => os), void 0).then(
              ({ default: n }) => n(...r)
            ))
        : (t = fetch),
      (...r) => t(...r)
    );
  },
  sP = () =>
    iP(void 0, void 0, void 0, function* () {
      return typeof Response > "u"
        ? (yield Ki(() => Promise.resolve().then(() => os), void 0)).Response
        : Response;
    });
var ls =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, r, n) {
    function i(s) {
      return s instanceof r
        ? s
        : new r(function (a) {
            a(s);
          });
    }
    return new (r || (r = Promise))(function (s, a) {
      function o(c) {
        try {
          u(n.next(c));
        } catch (d) {
          a(d);
        }
      }
      function l(c) {
        try {
          u(n.throw(c));
        } catch (d) {
          a(d);
        }
      }
      function u(c) {
        c.done ? s(c.value) : i(c.value).then(o, l);
      }
      u((n = n.apply(e, t || [])).next());
    });
  };
const Ku = (e) =>
    e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
  aP = (e, t) =>
    ls(void 0, void 0, void 0, function* () {
      const r = yield sP();
      e instanceof r
        ? e
            .json()
            .then((n) => {
              t(new nP(Ku(n), e.status || 500));
            })
            .catch((n) => {
              t(new $m(Ku(n), n));
            })
        : t(new $m(Ku(e), e));
    }),
  oP = (e, t, r, n) => {
    const i = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
    return e === "GET"
      ? i
      : ((i.headers = Object.assign(
          { "Content-Type": "application/json" },
          t == null ? void 0 : t.headers
        )),
        (i.body = JSON.stringify(n)),
        Object.assign(Object.assign({}, i), r));
  };
function su(e, t, r, n, i, s) {
  return ls(this, void 0, void 0, function* () {
    return new Promise((a, o) => {
      e(r, oP(t, n, i, s))
        .then((l) => {
          if (!l.ok) throw l;
          return n != null && n.noResolveJson ? l : l.json();
        })
        .then((l) => a(l))
        .catch((l) => aP(l, o));
    });
  });
}
function xd(e, t, r, n) {
  return ls(this, void 0, void 0, function* () {
    return su(e, "GET", t, r, n);
  });
}
function Yr(e, t, r, n, i) {
  return ls(this, void 0, void 0, function* () {
    return su(e, "POST", t, n, i, r);
  });
}
function lP(e, t, r, n, i) {
  return ls(this, void 0, void 0, function* () {
    return su(e, "PUT", t, n, i, r);
  });
}
function p1(e, t, r, n, i) {
  return ls(this, void 0, void 0, function* () {
    return su(e, "DELETE", t, n, i, r);
  });
}
var Mt =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, r, n) {
    function i(s) {
      return s instanceof r
        ? s
        : new r(function (a) {
            a(s);
          });
    }
    return new (r || (r = Promise))(function (s, a) {
      function o(c) {
        try {
          u(n.next(c));
        } catch (d) {
          a(d);
        }
      }
      function l(c) {
        try {
          u(n.throw(c));
        } catch (d) {
          a(d);
        }
      }
      function u(c) {
        c.done ? s(c.value) : i(c.value).then(o, l);
      }
      u((n = n.apply(e, t || [])).next());
    });
  };
const uP = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  Lm = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
class cP {
  constructor(t, r = {}, n, i) {
    (this.url = t),
      (this.headers = r),
      (this.bucketId = n),
      (this.fetch = h1(i));
  }
  uploadOrUpdate(t, r, n, i) {
    return Mt(this, void 0, void 0, function* () {
      try {
        let s;
        const a = Object.assign(Object.assign({}, Lm), i),
          o = Object.assign(
            Object.assign({}, this.headers),
            t === "POST" && { "x-upsert": String(a.upsert) }
          );
        typeof Blob < "u" && n instanceof Blob
          ? ((s = new FormData()),
            s.append("cacheControl", a.cacheControl),
            s.append("", n))
          : typeof FormData < "u" && n instanceof FormData
          ? ((s = n), s.append("cacheControl", a.cacheControl))
          : ((s = n),
            (o["cache-control"] = `max-age=${a.cacheControl}`),
            (o["content-type"] = a.contentType));
        const l = this._removeEmptyFolders(r),
          u = this._getFinalPath(l),
          c = yield this.fetch(
            `${this.url}/object/${u}`,
            Object.assign(
              { method: t, body: s, headers: o },
              a != null && a.duplex ? { duplex: a.duplex } : {}
            )
          ),
          d = yield c.json();
        return c.ok
          ? { data: { path: l, id: d.Id, fullPath: d.Key }, error: null }
          : { data: null, error: d };
      } catch (s) {
        if (st(s)) return { data: null, error: s };
        throw s;
      }
    });
  }
  upload(t, r, n) {
    return Mt(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", t, r, n);
    });
  }
  uploadToSignedUrl(t, r, n, i) {
    return Mt(this, void 0, void 0, function* () {
      const s = this._removeEmptyFolders(t),
        a = this._getFinalPath(s),
        o = new URL(this.url + `/object/upload/sign/${a}`);
      o.searchParams.set("token", r);
      try {
        let l;
        const u = Object.assign({ upsert: Lm.upsert }, i),
          c = Object.assign(Object.assign({}, this.headers), {
            "x-upsert": String(u.upsert),
          });
        typeof Blob < "u" && n instanceof Blob
          ? ((l = new FormData()),
            l.append("cacheControl", u.cacheControl),
            l.append("", n))
          : typeof FormData < "u" && n instanceof FormData
          ? ((l = n), l.append("cacheControl", u.cacheControl))
          : ((l = n),
            (c["cache-control"] = `max-age=${u.cacheControl}`),
            (c["content-type"] = u.contentType));
        const d = yield this.fetch(o.toString(), {
            method: "PUT",
            body: l,
            headers: c,
          }),
          h = yield d.json();
        return d.ok
          ? { data: { path: s, fullPath: h.Key }, error: null }
          : { data: null, error: h };
      } catch (l) {
        if (st(l)) return { data: null, error: l };
        throw l;
      }
    });
  }
  createSignedUploadUrl(t, r) {
    return Mt(this, void 0, void 0, function* () {
      try {
        let n = this._getFinalPath(t);
        const i = Object.assign({}, this.headers);
        r != null && r.upsert && (i["x-upsert"] = "true");
        const s = yield Yr(
            this.fetch,
            `${this.url}/object/upload/sign/${n}`,
            {},
            { headers: i }
          ),
          a = new URL(this.url + s.url),
          o = a.searchParams.get("token");
        if (!o) throw new ph("No token returned by API");
        return {
          data: { signedUrl: a.toString(), path: t, token: o },
          error: null,
        };
      } catch (n) {
        if (st(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  update(t, r, n) {
    return Mt(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", t, r, n);
    });
  }
  move(t, r, n) {
    return Mt(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Yr(
            this.fetch,
            `${this.url}/object/move`,
            {
              bucketId: this.bucketId,
              sourceKey: t,
              destinationKey: r,
              destinationBucket: n == null ? void 0 : n.destinationBucket,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (i) {
        if (st(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  copy(t, r, n) {
    return Mt(this, void 0, void 0, function* () {
      try {
        return {
          data: {
            path: (yield Yr(
              this.fetch,
              `${this.url}/object/copy`,
              {
                bucketId: this.bucketId,
                sourceKey: t,
                destinationKey: r,
                destinationBucket: n == null ? void 0 : n.destinationBucket,
              },
              { headers: this.headers }
            )).Key,
          },
          error: null,
        };
      } catch (i) {
        if (st(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  createSignedUrl(t, r, n) {
    return Mt(this, void 0, void 0, function* () {
      try {
        let i = this._getFinalPath(t),
          s = yield Yr(
            this.fetch,
            `${this.url}/object/sign/${i}`,
            Object.assign(
              { expiresIn: r },
              n != null && n.transform ? { transform: n.transform } : {}
            ),
            { headers: this.headers }
          );
        const a =
          n != null && n.download
            ? `&download=${n.download === !0 ? "" : n.download}`
            : "";
        return (
          (s = { signedUrl: encodeURI(`${this.url}${s.signedURL}${a}`) }),
          { data: s, error: null }
        );
      } catch (i) {
        if (st(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  createSignedUrls(t, r, n) {
    return Mt(this, void 0, void 0, function* () {
      try {
        const i = yield Yr(
            this.fetch,
            `${this.url}/object/sign/${this.bucketId}`,
            { expiresIn: r, paths: t },
            { headers: this.headers }
          ),
          s =
            n != null && n.download
              ? `&download=${n.download === !0 ? "" : n.download}`
              : "";
        return {
          data: i.map((a) =>
            Object.assign(Object.assign({}, a), {
              signedUrl: a.signedURL
                ? encodeURI(`${this.url}${a.signedURL}${s}`)
                : null,
            })
          ),
          error: null,
        };
      } catch (i) {
        if (st(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  download(t, r) {
    return Mt(this, void 0, void 0, function* () {
      const i =
          typeof (r == null ? void 0 : r.transform) < "u"
            ? "render/image/authenticated"
            : "object",
        s = this.transformOptsToQueryString(
          (r == null ? void 0 : r.transform) || {}
        ),
        a = s ? `?${s}` : "";
      try {
        const o = this._getFinalPath(t);
        return {
          data: yield (yield xd(this.fetch, `${this.url}/${i}/${o}${a}`, {
            headers: this.headers,
            noResolveJson: !0,
          })).blob(),
          error: null,
        };
      } catch (o) {
        if (st(o)) return { data: null, error: o };
        throw o;
      }
    });
  }
  getPublicUrl(t, r) {
    const n = this._getFinalPath(t),
      i = [],
      s =
        r != null && r.download
          ? `download=${r.download === !0 ? "" : r.download}`
          : "";
    s !== "" && i.push(s);
    const o =
        typeof (r == null ? void 0 : r.transform) < "u"
          ? "render/image"
          : "object",
      l = this.transformOptsToQueryString(
        (r == null ? void 0 : r.transform) || {}
      );
    l !== "" && i.push(l);
    let u = i.join("&");
    return (
      u !== "" && (u = `?${u}`),
      { data: { publicUrl: encodeURI(`${this.url}/${o}/public/${n}${u}`) } }
    );
  }
  remove(t) {
    return Mt(this, void 0, void 0, function* () {
      try {
        return {
          data: yield p1(
            this.fetch,
            `${this.url}/object/${this.bucketId}`,
            { prefixes: t },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (st(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  list(t, r, n) {
    return Mt(this, void 0, void 0, function* () {
      try {
        const i = Object.assign(Object.assign(Object.assign({}, uP), r), {
          prefix: t || "",
        });
        return {
          data: yield Yr(
            this.fetch,
            `${this.url}/object/list/${this.bucketId}`,
            i,
            { headers: this.headers },
            n
          ),
          error: null,
        };
      } catch (i) {
        if (st(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  _getFinalPath(t) {
    return `${this.bucketId}/${t}`;
  }
  _removeEmptyFolders(t) {
    return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(t) {
    const r = [];
    return (
      t.width && r.push(`width=${t.width}`),
      t.height && r.push(`height=${t.height}`),
      t.resize && r.push(`resize=${t.resize}`),
      t.format && r.push(`format=${t.format}`),
      t.quality && r.push(`quality=${t.quality}`),
      r.join("&")
    );
  }
}
const dP = "2.6.0",
  fP = { "X-Client-Info": `storage-js/${dP}` };
var li =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, r, n) {
    function i(s) {
      return s instanceof r
        ? s
        : new r(function (a) {
            a(s);
          });
    }
    return new (r || (r = Promise))(function (s, a) {
      function o(c) {
        try {
          u(n.next(c));
        } catch (d) {
          a(d);
        }
      }
      function l(c) {
        try {
          u(n.throw(c));
        } catch (d) {
          a(d);
        }
      }
      function u(c) {
        c.done ? s(c.value) : i(c.value).then(o, l);
      }
      u((n = n.apply(e, t || [])).next());
    });
  };
class hP {
  constructor(t, r = {}, n) {
    (this.url = t),
      (this.headers = Object.assign(Object.assign({}, fP), r)),
      (this.fetch = h1(n));
  }
  listBuckets() {
    return li(this, void 0, void 0, function* () {
      try {
        return {
          data: yield xd(this.fetch, `${this.url}/bucket`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (t) {
        if (st(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
  getBucket(t) {
    return li(this, void 0, void 0, function* () {
      try {
        return {
          data: yield xd(this.fetch, `${this.url}/bucket/${t}`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (r) {
        if (st(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  createBucket(t, r = { public: !1 }) {
    return li(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Yr(
            this.fetch,
            `${this.url}/bucket`,
            {
              id: t,
              name: t,
              public: r.public,
              file_size_limit: r.fileSizeLimit,
              allowed_mime_types: r.allowedMimeTypes,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (n) {
        if (st(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  updateBucket(t, r) {
    return li(this, void 0, void 0, function* () {
      try {
        return {
          data: yield lP(
            this.fetch,
            `${this.url}/bucket/${t}`,
            {
              id: t,
              name: t,
              public: r.public,
              file_size_limit: r.fileSizeLimit,
              allowed_mime_types: r.allowedMimeTypes,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (n) {
        if (st(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  emptyBucket(t) {
    return li(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Yr(
            this.fetch,
            `${this.url}/bucket/${t}/empty`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (st(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  deleteBucket(t) {
    return li(this, void 0, void 0, function* () {
      try {
        return {
          data: yield p1(
            this.fetch,
            `${this.url}/bucket/${t}`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (st(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
}
class pP extends hP {
  constructor(t, r = {}, n) {
    super(t, r, n);
  }
  from(t) {
    return new cP(this.url, this.headers, t, this.fetch);
  }
}
const mP = "2.44.4";
let Ns = "";
typeof Deno < "u"
  ? (Ns = "deno")
  : typeof document < "u"
  ? (Ns = "web")
  : typeof navigator < "u" && navigator.product === "ReactNative"
  ? (Ns = "react-native")
  : (Ns = "node");
const gP = { "X-Client-Info": `supabase-js-${Ns}/${mP}` },
  vP = { headers: gP },
  yP = { schema: "public" },
  wP = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  bP = {};
var kP =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, r, n) {
    function i(s) {
      return s instanceof r
        ? s
        : new r(function (a) {
            a(s);
          });
    }
    return new (r || (r = Promise))(function (s, a) {
      function o(c) {
        try {
          u(n.next(c));
        } catch (d) {
          a(d);
        }
      }
      function l(c) {
        try {
          u(n.throw(c));
        } catch (d) {
          a(d);
        }
      }
      function u(c) {
        c.done ? s(c.value) : i(c.value).then(o, l);
      }
      u((n = n.apply(e, t || [])).next());
    });
  };
const _P = (e) => {
    let t;
    return (
      e ? (t = e) : typeof fetch > "u" ? (t = Zy) : (t = fetch),
      (...r) => t(...r)
    );
  },
  SP = () => (typeof Headers > "u" ? e1 : Headers),
  xP = (e, t, r) => {
    const n = _P(r),
      i = SP();
    return (s, a) =>
      kP(void 0, void 0, void 0, function* () {
        var o;
        const l = (o = yield t()) !== null && o !== void 0 ? o : e;
        let u = new i(a == null ? void 0 : a.headers);
        return (
          u.has("apikey") || u.set("apikey", e),
          u.has("Authorization") || u.set("Authorization", `Bearer ${l}`),
          n(s, Object.assign(Object.assign({}, a), { headers: u }))
        );
      });
  };
function CP(e) {
  return e.replace(/\/$/, "");
}
function EP(e, t) {
  const { db: r, auth: n, realtime: i, global: s } = e,
    { db: a, auth: o, realtime: l, global: u } = t;
  return {
    db: Object.assign(Object.assign({}, a), r),
    auth: Object.assign(Object.assign({}, o), n),
    realtime: Object.assign(Object.assign({}, l), i),
    global: Object.assign(Object.assign({}, u), s),
  };
}
const m1 = "2.64.4",
  PP = "http://localhost:9999",
  OP = "supabase.auth.token",
  TP = { "X-Client-Info": `gotrue-js/${m1}` },
  Mm = 10,
  Cd = "X-Supabase-Api-Version",
  g1 = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01",
    },
  };
function AP(e) {
  return Math.round(Date.now() / 1e3) + e;
}
function RP() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
    const t = (Math.random() * 16) | 0;
    return (e == "x" ? t : (t & 3) | 8).toString(16);
  });
}
const er = () => typeof document < "u",
  On = { tested: !1, writable: !1 },
  Ys = () => {
    if (!er()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (On.tested) return On.writable;
    const e = `lswt-${Math.random()}${Math.random()}`;
    try {
      globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        (On.tested = !0),
        (On.writable = !0);
    } catch {
      (On.tested = !0), (On.writable = !1);
    }
    return On.writable;
  };
function Xu(e) {
  const t = {},
    r = new URL(e);
  if (r.hash && r.hash[0] === "#")
    try {
      new URLSearchParams(r.hash.substring(1)).forEach((i, s) => {
        t[s] = i;
      });
    } catch {}
  return (
    r.searchParams.forEach((n, i) => {
      t[i] = n;
    }),
    t
  );
}
const v1 = (e) => {
    let t;
    return (
      e
        ? (t = e)
        : typeof fetch > "u"
        ? (t = (...r) =>
            Ki(() => Promise.resolve().then(() => os), void 0).then(
              ({ default: n }) => n(...r)
            ))
        : (t = fetch),
      (...r) => t(...r)
    );
  },
  DP = (e) =>
    typeof e == "object" &&
    e !== null &&
    "status" in e &&
    "ok" in e &&
    "json" in e &&
    typeof e.json == "function",
  y1 = async (e, t, r) => {
    await e.setItem(t, JSON.stringify(r));
  },
  io = async (e, t) => {
    const r = await e.getItem(t);
    if (!r) return null;
    try {
      return JSON.parse(r);
    } catch {
      return r;
    }
  },
  Ju = async (e, t) => {
    await e.removeItem(t);
  };
function NP(e) {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let r = "",
    n,
    i,
    s,
    a,
    o,
    l,
    u,
    c = 0;
  for (e = e.replace("-", "+").replace("_", "/"); c < e.length; )
    (a = t.indexOf(e.charAt(c++))),
      (o = t.indexOf(e.charAt(c++))),
      (l = t.indexOf(e.charAt(c++))),
      (u = t.indexOf(e.charAt(c++))),
      (n = (a << 2) | (o >> 4)),
      (i = ((o & 15) << 4) | (l >> 2)),
      (s = ((l & 3) << 6) | u),
      (r = r + String.fromCharCode(n)),
      l != 64 && i != 0 && (r = r + String.fromCharCode(i)),
      u != 64 && s != 0 && (r = r + String.fromCharCode(s));
  return r;
}
class au {
  constructor() {
    this.promise = new au.promiseConstructor((t, r) => {
      (this.resolve = t), (this.reject = r);
    });
  }
}
au.promiseConstructor = Promise;
function Fm(e) {
  const t = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,
    r = e.split(".");
  if (r.length !== 3) throw new Error("JWT is not valid: not a JWT structure");
  if (!t.test(r[1]))
    throw new Error("JWT is not valid: payload is not in base64url format");
  const n = r[1];
  return JSON.parse(NP(n));
}
async function IP(e) {
  return await new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
function $P(e, t) {
  return new Promise((n, i) => {
    (async () => {
      for (let s = 0; s < 1 / 0; s++)
        try {
          const a = await e(s);
          if (!t(s, null, a)) {
            n(a);
            return;
          }
        } catch (a) {
          if (!t(s, a)) {
            i(a);
            return;
          }
        }
    })();
  });
}
function LP(e) {
  return ("0" + e.toString(16)).substr(-2);
}
function MP() {
  const t = new Uint32Array(56);
  if (typeof crypto > "u") {
    const r =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      n = r.length;
    let i = "";
    for (let s = 0; s < 56; s++) i += r.charAt(Math.floor(Math.random() * n));
    return i;
  }
  return crypto.getRandomValues(t), Array.from(t, LP).join("");
}
async function FP(e) {
  const r = new TextEncoder().encode(e),
    n = await crypto.subtle.digest("SHA-256", r),
    i = new Uint8Array(n);
  return Array.from(i)
    .map((s) => String.fromCharCode(s))
    .join("");
}
function jP(e) {
  return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function UP(e) {
  if (
    !(
      typeof crypto < "u" &&
      typeof crypto.subtle < "u" &&
      typeof TextEncoder < "u"
    )
  )
    return (
      console.warn(
        "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
      ),
      e
    );
  const r = await FP(e);
  return jP(r);
}
async function ui(e, t, r = !1) {
  const n = MP();
  let i = n;
  r && (i += "/PASSWORD_RECOVERY"), await y1(e, `${t}-code-verifier`, i);
  const s = await UP(n);
  return [s, n === s ? "plain" : "s256"];
}
const zP = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function BP(e) {
  const t = e.headers.get(Cd);
  if (!t || !t.match(zP)) return null;
  try {
    return new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
class mh extends Error {
  constructor(t, r, n) {
    super(t),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = r),
      (this.code = n);
  }
}
function se(e) {
  return typeof e == "object" && e !== null && "__isAuthError" in e;
}
class WP extends mh {
  constructor(t, r, n) {
    super(t, r, n),
      (this.name = "AuthApiError"),
      (this.status = r),
      (this.code = n);
  }
}
function VP(e) {
  return se(e) && e.name === "AuthApiError";
}
class w1 extends mh {
  constructor(t, r) {
    super(t), (this.name = "AuthUnknownError"), (this.originalError = r);
  }
}
class ii extends mh {
  constructor(t, r, n, i) {
    super(t, n, i), (this.name = r), (this.status = n);
  }
}
class Tn extends ii {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
class Zu extends ii {
  constructor() {
    super(
      "Auth session or user missing",
      "AuthInvalidTokenResponseError",
      500,
      void 0
    );
  }
}
class so extends ii {
  constructor(t) {
    super(t, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class ao extends ii {
  constructor(t, r = null) {
    super(t, "AuthImplicitGrantRedirectError", 500, void 0),
      (this.details = null),
      (this.details = r);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class jm extends ii {
  constructor(t, r = null) {
    super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0),
      (this.details = null),
      (this.details = r);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class Ed extends ii {
  constructor(t, r) {
    super(t, "AuthRetryableFetchError", r, void 0);
  }
}
function ec(e) {
  return se(e) && e.name === "AuthRetryableFetchError";
}
class Um extends ii {
  constructor(t, r, n) {
    super(t, "AuthWeakPasswordError", r, "weak_password"), (this.reasons = n);
  }
}
var HP =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
        t.indexOf(n[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
          (r[n[i]] = e[n[i]]);
    return r;
  };
const In = (e) =>
    e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
  qP = [502, 503, 504];
async function zm(e) {
  var t;
  if (!DP(e)) throw new Ed(In(e), 0);
  if (qP.includes(e.status)) throw new Ed(In(e), e.status);
  let r;
  try {
    r = await e.json();
  } catch (s) {
    throw new w1(In(s), s);
  }
  let n;
  const i = BP(e);
  if (
    (i &&
    i.getTime() >= g1["2024-01-01"].timestamp &&
    typeof r == "object" &&
    r &&
    typeof r.code == "string"
      ? (n = r.code)
      : typeof r == "object" &&
        r &&
        typeof r.error_code == "string" &&
        (n = r.error_code),
    n)
  ) {
    if (n === "weak_password")
      throw new Um(
        In(r),
        e.status,
        ((t = r.weak_password) === null || t === void 0 ? void 0 : t.reasons) ||
          []
      );
  } else if (
    typeof r == "object" &&
    r &&
    typeof r.weak_password == "object" &&
    r.weak_password &&
    Array.isArray(r.weak_password.reasons) &&
    r.weak_password.reasons.length &&
    r.weak_password.reasons.reduce((s, a) => s && typeof a == "string", !0)
  )
    throw new Um(In(r), e.status, r.weak_password.reasons);
  throw new WP(In(r), e.status || 500, n);
}
const QP = (e, t, r, n) => {
  const i = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
  return e === "GET"
    ? i
    : ((i.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        t == null ? void 0 : t.headers
      )),
      (i.body = JSON.stringify(n)),
      Object.assign(Object.assign({}, i), r));
};
async function oe(e, t, r, n) {
  var i;
  const s = Object.assign({}, n == null ? void 0 : n.headers);
  s[Cd] || (s[Cd] = g1["2024-01-01"].name),
    n != null && n.jwt && (s.Authorization = `Bearer ${n.jwt}`);
  const a =
    (i = n == null ? void 0 : n.query) !== null && i !== void 0 ? i : {};
  n != null && n.redirectTo && (a.redirect_to = n.redirectTo);
  const o = Object.keys(a).length
      ? "?" + new URLSearchParams(a).toString()
      : "",
    l = await YP(
      e,
      t,
      r + o,
      { headers: s, noResolveJson: n == null ? void 0 : n.noResolveJson },
      {},
      n == null ? void 0 : n.body
    );
  return n != null && n.xform
    ? n == null
      ? void 0
      : n.xform(l)
    : { data: Object.assign({}, l), error: null };
}
async function YP(e, t, r, n, i, s) {
  const a = QP(t, n, i, s);
  let o;
  try {
    o = await e(r, Object.assign({}, a));
  } catch (l) {
    throw (console.error(l), new Ed(In(l), 0));
  }
  if ((o.ok || (await zm(o)), n != null && n.noResolveJson)) return o;
  try {
    return await o.json();
  } catch (l) {
    await zm(l);
  }
}
function Vr(e) {
  var t;
  let r = null;
  JP(e) &&
    ((r = Object.assign({}, e)),
    e.expires_at || (r.expires_at = AP(e.expires_in)));
  const n = (t = e.user) !== null && t !== void 0 ? t : e;
  return { data: { session: r, user: n }, error: null };
}
function Bm(e) {
  const t = Vr(e);
  return (
    !t.error &&
      e.weak_password &&
      typeof e.weak_password == "object" &&
      Array.isArray(e.weak_password.reasons) &&
      e.weak_password.reasons.length &&
      e.weak_password.message &&
      typeof e.weak_password.message == "string" &&
      e.weak_password.reasons.reduce((r, n) => r && typeof n == "string", !0) &&
      (t.data.weak_password = e.weak_password),
    t
  );
}
function Xr(e) {
  var t;
  return {
    data: { user: (t = e.user) !== null && t !== void 0 ? t : e },
    error: null,
  };
}
function GP(e) {
  return { data: e, error: null };
}
function KP(e) {
  const {
      action_link: t,
      email_otp: r,
      hashed_token: n,
      redirect_to: i,
      verification_type: s,
    } = e,
    a = HP(e, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    o = {
      action_link: t,
      email_otp: r,
      hashed_token: n,
      redirect_to: i,
      verification_type: s,
    },
    l = Object.assign({}, a);
  return { data: { properties: o, user: l }, error: null };
}
function XP(e) {
  return e;
}
function JP(e) {
  return e.access_token && e.refresh_token && e.expires_in;
}
var ZP =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
        t.indexOf(n[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
          (r[n[i]] = e[n[i]]);
    return r;
  };
class eO {
  constructor({ url: t = "", headers: r = {}, fetch: n }) {
    (this.url = t),
      (this.headers = r),
      (this.fetch = v1(n)),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      });
  }
  async signOut(t, r = "global") {
    try {
      return (
        await oe(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
          headers: this.headers,
          jwt: t,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (n) {
      if (se(n)) return { data: null, error: n };
      throw n;
    }
  }
  async inviteUserByEmail(t, r = {}) {
    try {
      return await oe(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: t, data: r.data },
        headers: this.headers,
        redirectTo: r.redirectTo,
        xform: Xr,
      });
    } catch (n) {
      if (se(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async generateLink(t) {
    try {
      const { options: r } = t,
        n = ZP(t, ["options"]),
        i = Object.assign(Object.assign({}, n), r);
      return (
        "newEmail" in n &&
          ((i.new_email = n == null ? void 0 : n.newEmail), delete i.newEmail),
        await oe(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: i,
          headers: this.headers,
          xform: KP,
          redirectTo: r == null ? void 0 : r.redirectTo,
        })
      );
    } catch (r) {
      if (se(r)) return { data: { properties: null, user: null }, error: r };
      throw r;
    }
  }
  async createUser(t) {
    try {
      return await oe(this.fetch, "POST", `${this.url}/admin/users`, {
        body: t,
        headers: this.headers,
        xform: Xr,
      });
    } catch (r) {
      if (se(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async listUsers(t) {
    var r, n, i, s, a, o, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 },
        c = await oe(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (n =
                (r = t == null ? void 0 : t.page) === null || r === void 0
                  ? void 0
                  : r.toString()) !== null && n !== void 0
                ? n
                : "",
            per_page:
              (s =
                (i = t == null ? void 0 : t.perPage) === null || i === void 0
                  ? void 0
                  : i.toString()) !== null && s !== void 0
                ? s
                : "",
          },
          xform: XP,
        });
      if (c.error) throw c.error;
      const d = await c.json(),
        h =
          (a = c.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0,
        m =
          (l =
            (o = c.headers.get("link")) === null || o === void 0
              ? void 0
              : o.split(",")) !== null && l !== void 0
            ? l
            : [];
      return (
        m.length > 0 &&
          (m.forEach((y) => {
            const w = parseInt(y.split(";")[0].split("=")[1].substring(0, 1)),
              k = JSON.parse(y.split(";")[1].split("=")[1]);
            u[`${k}Page`] = w;
          }),
          (u.total = parseInt(h))),
        { data: Object.assign(Object.assign({}, d), u), error: null }
      );
    } catch (u) {
      if (se(u)) return { data: { users: [] }, error: u };
      throw u;
    }
  }
  async getUserById(t) {
    try {
      return await oe(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        xform: Xr,
      });
    } catch (r) {
      if (se(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async updateUserById(t, r) {
    try {
      return await oe(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
        body: r,
        headers: this.headers,
        xform: Xr,
      });
    } catch (n) {
      if (se(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async deleteUser(t, r = !1) {
    try {
      return await oe(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        body: { should_soft_delete: r },
        xform: Xr,
      });
    } catch (n) {
      if (se(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async _listFactors(t) {
    try {
      const { data: r, error: n } = await oe(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${t.userId}/factors`,
        {
          headers: this.headers,
          xform: (i) => ({ data: { factors: i }, error: null }),
        }
      );
      return { data: r, error: n };
    } catch (r) {
      if (se(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _deleteFactor(t) {
    try {
      return {
        data: await oe(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${t.userId}/factors/${t.id}`,
          { headers: this.headers }
        ),
        error: null,
      };
    } catch (r) {
      if (se(r)) return { data: null, error: r };
      throw r;
    }
  }
}
const tO = {
  getItem: (e) => (Ys() ? globalThis.localStorage.getItem(e) : null),
  setItem: (e, t) => {
    Ys() && globalThis.localStorage.setItem(e, t);
  },
  removeItem: (e) => {
    Ys() && globalThis.localStorage.removeItem(e);
  },
};
function Wm(e = {}) {
  return {
    getItem: (t) => e[t] || null,
    setItem: (t, r) => {
      e[t] = r;
    },
    removeItem: (t) => {
      delete e[t];
    },
  };
}
function rO() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
const ci = {
  debug: !!(
    globalThis &&
    Ys() &&
    globalThis.localStorage &&
    globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
  ),
};
class b1 extends Error {
  constructor(t) {
    super(t), (this.isAcquireTimeout = !0);
  }
}
class nO extends b1 {}
async function iO(e, t, r) {
  ci.debug &&
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
  const n = new globalThis.AbortController();
  return (
    t > 0 &&
      setTimeout(() => {
        n.abort(),
          ci.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock acquire timed out",
              e
            );
      }, t),
    await globalThis.navigator.locks.request(
      e,
      t === 0
        ? { mode: "exclusive", ifAvailable: !0 }
        : { mode: "exclusive", signal: n.signal },
      async (i) => {
        if (i) {
          ci.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock: acquired",
              e,
              i.name
            );
          try {
            return await r();
          } finally {
            ci.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: released",
                e,
                i.name
              );
          }
        } else {
          if (t === 0)
            throw (
              (ci.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: not immediately available",
                  e
                ),
              new nO(
                `Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`
              ))
            );
          if (ci.debug)
            try {
              const s = await globalThis.navigator.locks.query();
              console.log(
                "@supabase/gotrue-js: Navigator LockManager state",
                JSON.stringify(s, null, "  ")
              );
            } catch (s) {
              console.warn(
                "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                s
              );
            }
          return (
            console.warn(
              "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
            ),
            await r()
          );
        }
      }
    )
  );
}
rO();
const sO = {
    url: PP,
    storageKey: OP,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: TP,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1,
  },
  _s = 30 * 1e3,
  Vm = 3;
async function Hm(e, t, r) {
  return await r();
}
class wa {
  constructor(t) {
    var r, n;
    (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.hasCustomAuthorizationHeader = !1),
      (this.suppressGetSessionWarning = !1),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log),
      (this.instanceID = wa.nextInstanceID),
      (wa.nextInstanceID += 1),
      this.instanceID > 0 &&
        er() &&
        console.warn(
          "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
        );
    const i = Object.assign(Object.assign({}, sO), t);
    if (
      ((this.logDebugMessages = !!i.debug),
      typeof i.debug == "function" && (this.logger = i.debug),
      (this.persistSession = i.persistSession),
      (this.storageKey = i.storageKey),
      (this.autoRefreshToken = i.autoRefreshToken),
      (this.admin = new eO({ url: i.url, headers: i.headers, fetch: i.fetch })),
      (this.url = i.url),
      (this.headers = i.headers),
      (this.fetch = v1(i.fetch)),
      (this.lock = i.lock || Hm),
      (this.detectSessionInUrl = i.detectSessionInUrl),
      (this.flowType = i.flowType),
      (this.hasCustomAuthorizationHeader = i.hasCustomAuthorizationHeader),
      i.lock
        ? (this.lock = i.lock)
        : er() &&
          !(
            (r = globalThis == null ? void 0 : globalThis.navigator) === null ||
            r === void 0
          ) &&
          r.locks
        ? (this.lock = iO)
        : (this.lock = Hm),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
      }),
      this.persistSession
        ? i.storage
          ? (this.storage = i.storage)
          : Ys()
          ? (this.storage = tO)
          : ((this.memoryStorage = {}), (this.storage = Wm(this.memoryStorage)))
        : ((this.memoryStorage = {}), (this.storage = Wm(this.memoryStorage))),
      er() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey
        );
      } catch (s) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          s
        );
      }
      (n = this.broadcastChannel) === null ||
        n === void 0 ||
        n.addEventListener("message", async (s) => {
          this._debug(
            "received broadcast notification from other tab or client",
            s
          ),
            await this._notifyAllSubscribers(s.data.event, s.data.session, !1);
        });
    }
    this.initialize();
  }
  _debug(...t) {
    return (
      this.logDebugMessages &&
        this.logger(
          `GoTrueClient@${this.instanceID} (${m1}) ${new Date().toISOString()}`,
          ...t
        ),
      this
    );
  }
  async initialize() {
    return this.initializePromise
      ? await this.initializePromise
      : ((this.initializePromise = (async () =>
          await this._acquireLock(-1, async () => await this._initialize()))()),
        await this.initializePromise);
  }
  async _initialize() {
    try {
      const t = er() ? await this._isPKCEFlow() : !1;
      if (
        (this._debug("#_initialize()", "begin", "is PKCE flow", t),
        t || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
      ) {
        const { data: r, error: n } = await this._getSessionFromURL(t);
        if (n)
          return (
            this._debug(
              "#_initialize()",
              "error detecting session from URL",
              n
            ),
            (n == null ? void 0 : n.message) === "Identity is already linked" ||
            (n == null ? void 0 : n.message) ===
              "Identity is already linked to another user"
              ? { error: n }
              : (await this._removeSession(), { error: n })
          );
        const { session: i, redirectType: s } = r;
        return (
          this._debug(
            "#_initialize()",
            "detected session in URL",
            i,
            "redirect type",
            s
          ),
          await this._saveSession(i),
          setTimeout(async () => {
            s === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i)
              : await this._notifyAllSubscribers("SIGNED_IN", i);
          }, 0),
          { error: null }
        );
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (t) {
      return se(t)
        ? { error: t }
        : { error: new w1("Unexpected error during initialization", t) };
    } finally {
      await this._handleVisibilityChange(),
        this._debug("#_initialize()", "end");
    }
  }
  async signInAnonymously(t) {
    var r, n, i;
    try {
      const s = await oe(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (n =
                (r = t == null ? void 0 : t.options) === null || r === void 0
                  ? void 0
                  : r.data) !== null && n !== void 0
                ? n
                : {},
            gotrue_meta_security: {
              captcha_token:
                (i = t == null ? void 0 : t.options) === null || i === void 0
                  ? void 0
                  : i.captchaToken,
            },
          },
          xform: Vr,
        }),
        { data: a, error: o } = s;
      if (o || !a) return { data: { user: null, session: null }, error: o };
      const l = a.session,
        u = a.user;
      return (
        a.session &&
          (await this._saveSession(a.session),
          await this._notifyAllSubscribers("SIGNED_IN", l)),
        { data: { user: u, session: l }, error: null }
      );
    } catch (s) {
      if (se(s)) return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  async signUp(t) {
    var r, n, i;
    try {
      let s;
      if ("email" in t) {
        const { email: c, password: d, options: h } = t;
        let m = null,
          y = null;
        this.flowType === "pkce" &&
          ([m, y] = await ui(this.storage, this.storageKey)),
          (s = await oe(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: h == null ? void 0 : h.emailRedirectTo,
            body: {
              email: c,
              password: d,
              data:
                (r = h == null ? void 0 : h.data) !== null && r !== void 0
                  ? r
                  : {},
              gotrue_meta_security: {
                captcha_token: h == null ? void 0 : h.captchaToken,
              },
              code_challenge: m,
              code_challenge_method: y,
            },
            xform: Vr,
          }));
      } else if ("phone" in t) {
        const { phone: c, password: d, options: h } = t;
        s = await oe(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: c,
            password: d,
            data:
              (n = h == null ? void 0 : h.data) !== null && n !== void 0
                ? n
                : {},
            channel:
              (i = h == null ? void 0 : h.channel) !== null && i !== void 0
                ? i
                : "sms",
            gotrue_meta_security: {
              captcha_token: h == null ? void 0 : h.captchaToken,
            },
          },
          xform: Vr,
        });
      } else
        throw new so(
          "You must provide either an email or phone number and a password"
        );
      const { data: a, error: o } = s;
      if (o || !a) return { data: { user: null, session: null }, error: o };
      const l = a.session,
        u = a.user;
      return (
        a.session &&
          (await this._saveSession(a.session),
          await this._notifyAllSubscribers("SIGNED_IN", l)),
        { data: { user: u, session: l }, error: null }
      );
    } catch (s) {
      if (se(s)) return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  async signInWithPassword(t) {
    try {
      let r;
      if ("email" in t) {
        const { email: s, password: a, options: o } = t;
        r = await oe(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: s,
              password: a,
              gotrue_meta_security: {
                captcha_token: o == null ? void 0 : o.captchaToken,
              },
            },
            xform: Bm,
          }
        );
      } else if ("phone" in t) {
        const { phone: s, password: a, options: o } = t;
        r = await oe(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: s,
              password: a,
              gotrue_meta_security: {
                captcha_token: o == null ? void 0 : o.captchaToken,
              },
            },
            xform: Bm,
          }
        );
      } else
        throw new so(
          "You must provide either an email or phone number and a password"
        );
      const { data: n, error: i } = r;
      return i
        ? { data: { user: null, session: null }, error: i }
        : !n || !n.session || !n.user
        ? { data: { user: null, session: null }, error: new Zu() }
        : (n.session &&
            (await this._saveSession(n.session),
            await this._notifyAllSubscribers("SIGNED_IN", n.session)),
          {
            data: Object.assign(
              { user: n.user, session: n.session },
              n.weak_password ? { weakPassword: n.weak_password } : null
            ),
            error: i,
          });
    } catch (r) {
      if (se(r)) return { data: { user: null, session: null }, error: r };
      throw r;
    }
  }
  async signInWithOAuth(t) {
    var r, n, i, s;
    return await this._handleProviderSignIn(t.provider, {
      redirectTo:
        (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo,
      scopes: (n = t.options) === null || n === void 0 ? void 0 : n.scopes,
      queryParams:
        (i = t.options) === null || i === void 0 ? void 0 : i.queryParams,
      skipBrowserRedirect:
        (s = t.options) === null || s === void 0
          ? void 0
          : s.skipBrowserRedirect,
    });
  }
  async exchangeCodeForSession(t) {
    return (
      await this.initializePromise,
      this._acquireLock(-1, async () => this._exchangeCodeForSession(t))
    );
  }
  async _exchangeCodeForSession(t) {
    const r = await io(this.storage, `${this.storageKey}-code-verifier`),
      [n, i] = (r ?? "").split("/"),
      { data: s, error: a } = await oe(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: t, code_verifier: n },
          xform: Vr,
        }
      );
    return (
      await Ju(this.storage, `${this.storageKey}-code-verifier`),
      a
        ? { data: { user: null, session: null, redirectType: null }, error: a }
        : !s || !s.session || !s.user
        ? {
            data: { user: null, session: null, redirectType: null },
            error: new Zu(),
          }
        : (s.session &&
            (await this._saveSession(s.session),
            await this._notifyAllSubscribers("SIGNED_IN", s.session)),
          {
            data: Object.assign(Object.assign({}, s), {
              redirectType: i ?? null,
            }),
            error: a,
          })
    );
  }
  async signInWithIdToken(t) {
    try {
      const {
          options: r,
          provider: n,
          token: i,
          access_token: s,
          nonce: a,
        } = t,
        o = await oe(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: n,
              id_token: i,
              access_token: s,
              nonce: a,
              gotrue_meta_security: {
                captcha_token: r == null ? void 0 : r.captchaToken,
              },
            },
            xform: Vr,
          }
        ),
        { data: l, error: u } = o;
      return u
        ? { data: { user: null, session: null }, error: u }
        : !l || !l.session || !l.user
        ? { data: { user: null, session: null }, error: new Zu() }
        : (l.session &&
            (await this._saveSession(l.session),
            await this._notifyAllSubscribers("SIGNED_IN", l.session)),
          { data: l, error: u });
    } catch (r) {
      if (se(r)) return { data: { user: null, session: null }, error: r };
      throw r;
    }
  }
  async signInWithOtp(t) {
    var r, n, i, s, a;
    try {
      if ("email" in t) {
        const { email: o, options: l } = t;
        let u = null,
          c = null;
        this.flowType === "pkce" &&
          ([u, c] = await ui(this.storage, this.storageKey));
        const { error: d } = await oe(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: o,
            data:
              (r = l == null ? void 0 : l.data) !== null && r !== void 0
                ? r
                : {},
            create_user:
              (n = l == null ? void 0 : l.shouldCreateUser) !== null &&
              n !== void 0
                ? n
                : !0,
            gotrue_meta_security: {
              captcha_token: l == null ? void 0 : l.captchaToken,
            },
            code_challenge: u,
            code_challenge_method: c,
          },
          redirectTo: l == null ? void 0 : l.emailRedirectTo,
        });
        return { data: { user: null, session: null }, error: d };
      }
      if ("phone" in t) {
        const { phone: o, options: l } = t,
          { data: u, error: c } = await oe(
            this.fetch,
            "POST",
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: o,
                data:
                  (i = l == null ? void 0 : l.data) !== null && i !== void 0
                    ? i
                    : {},
                create_user:
                  (s = l == null ? void 0 : l.shouldCreateUser) !== null &&
                  s !== void 0
                    ? s
                    : !0,
                gotrue_meta_security: {
                  captcha_token: l == null ? void 0 : l.captchaToken,
                },
                channel:
                  (a = l == null ? void 0 : l.channel) !== null && a !== void 0
                    ? a
                    : "sms",
              },
            }
          );
        return {
          data: {
            user: null,
            session: null,
            messageId: u == null ? void 0 : u.message_id,
          },
          error: c,
        };
      }
      throw new so("You must provide either an email or phone number.");
    } catch (o) {
      if (se(o)) return { data: { user: null, session: null }, error: o };
      throw o;
    }
  }
  async verifyOtp(t) {
    var r, n;
    try {
      let i, s;
      "options" in t &&
        ((i = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo),
        (s =
          (n = t.options) === null || n === void 0 ? void 0 : n.captchaToken));
      const { data: a, error: o } = await oe(
        this.fetch,
        "POST",
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, t), {
            gotrue_meta_security: { captcha_token: s },
          }),
          redirectTo: i,
          xform: Vr,
        }
      );
      if (o) throw o;
      if (!a) throw new Error("An error occurred on token verification.");
      const l = a.session,
        u = a.user;
      return (
        l != null &&
          l.access_token &&
          (await this._saveSession(l),
          await this._notifyAllSubscribers(
            t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            l
          )),
        { data: { user: u, session: l }, error: null }
      );
    } catch (i) {
      if (se(i)) return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  async signInWithSSO(t) {
    var r, n, i;
    try {
      let s = null,
        a = null;
      return (
        this.flowType === "pkce" &&
          ([s, a] = await ui(this.storage, this.storageKey)),
        await oe(this.fetch, "POST", `${this.url}/sso`, {
          body: Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    "providerId" in t ? { provider_id: t.providerId } : null
                  ),
                  "domain" in t ? { domain: t.domain } : null
                ),
                {
                  redirect_to:
                    (n =
                      (r = t.options) === null || r === void 0
                        ? void 0
                        : r.redirectTo) !== null && n !== void 0
                      ? n
                      : void 0,
                }
              ),
              !(
                (i = t == null ? void 0 : t.options) === null || i === void 0
              ) && i.captchaToken
                ? {
                    gotrue_meta_security: {
                      captcha_token: t.options.captchaToken,
                    },
                  }
                : null
            ),
            {
              skip_http_redirect: !0,
              code_challenge: s,
              code_challenge_method: a,
            }
          ),
          headers: this.headers,
          xform: GP,
        })
      );
    } catch (s) {
      if (se(s)) return { data: null, error: s };
      throw s;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._reauthenticate())
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: r },
          error: n,
        } = t;
        if (n) throw n;
        if (!r) throw new Tn();
        const { error: i } = await oe(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: r.access_token }
        );
        return { data: { user: null, session: null }, error: i };
      });
    } catch (t) {
      if (se(t)) return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  async resend(t) {
    try {
      const r = `${this.url}/resend`;
      if ("email" in t) {
        const { email: n, type: i, options: s } = t,
          { error: a } = await oe(this.fetch, "POST", r, {
            headers: this.headers,
            body: {
              email: n,
              type: i,
              gotrue_meta_security: {
                captcha_token: s == null ? void 0 : s.captchaToken,
              },
            },
            redirectTo: s == null ? void 0 : s.emailRedirectTo,
          });
        return { data: { user: null, session: null }, error: a };
      } else if ("phone" in t) {
        const { phone: n, type: i, options: s } = t,
          { data: a, error: o } = await oe(this.fetch, "POST", r, {
            headers: this.headers,
            body: {
              phone: n,
              type: i,
              gotrue_meta_security: {
                captcha_token: s == null ? void 0 : s.captchaToken,
              },
            },
          });
        return {
          data: {
            user: null,
            session: null,
            messageId: a == null ? void 0 : a.message_id,
          },
          error: o,
        };
      }
      throw new so(
        "You must provide either an email or phone number and a type"
      );
    } catch (r) {
      if (se(r)) return { data: { user: null, session: null }, error: r };
      throw r;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => this._useSession(async (r) => r))
    );
  }
  async _acquireLock(t, r) {
    this._debug("#_acquireLock", "begin", t);
    try {
      if (this.lockAcquired) {
        const n = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          i = (async () => (await n, await r()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await i;
              } catch {}
            })()
          ),
          i
        );
      }
      return await this.lock(`lock:${this.storageKey}`, t, async () => {
        this._debug(
          "#_acquireLock",
          "lock acquired for storage key",
          this.storageKey
        );
        try {
          this.lockAcquired = !0;
          const n = r();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await n;
                } catch {}
              })()
            ),
              await n;
            this.pendingInLock.length;

          ) {
            const i = [...this.pendingInLock];
            await Promise.all(i), this.pendingInLock.splice(0, i.length);
          }
          return await n;
        } finally {
          this._debug(
            "#_acquireLock",
            "lock released for storage key",
            this.storageKey
          ),
            (this.lockAcquired = !1);
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(t) {
    this._debug("#_useSession", "begin");
    try {
      const r = await this.__loadSession();
      return await t(r);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    this._debug("#__loadSession()", "begin"),
      this.lockAcquired ||
        this._debug(
          "#__loadSession()",
          "used outside of an acquired lock!",
          new Error().stack
        );
    try {
      let t = null;
      const r = await io(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", r),
        r !== null &&
          (this._isValidSession(r)
            ? (t = r)
            : (this._debug(
                "#getSession()",
                "session from storage is not valid"
              ),
              await this._removeSession())),
        !t)
      )
        return { data: { session: null }, error: null };
      const n = t.expires_at ? t.expires_at <= Date.now() / 1e3 : !1;
      if (
        (this._debug(
          "#__loadSession()",
          `session has${n ? "" : " not"} expired`,
          "expires_at",
          t.expires_at
        ),
        !n)
      ) {
        if (this.storage.isServer) {
          let a = this.suppressGetSessionWarning;
          t = new Proxy(t, {
            get: (l, u, c) => (
              !a &&
                u === "user" &&
                (console.warn(
                  "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."
                ),
                (a = !0),
                (this.suppressGetSessionWarning = !0)),
              Reflect.get(l, u, c)
            ),
          });
        }
        return { data: { session: t }, error: null };
      }
      const { session: i, error: s } = await this._callRefreshToken(
        t.refresh_token
      );
      return s
        ? { data: { session: null }, error: s }
        : { data: { session: i }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(t) {
    return t
      ? await this._getUser(t)
      : (await this.initializePromise,
        await this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(t) {
    try {
      return t
        ? await oe(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: t,
            xform: Xr,
          })
        : await this._useSession(async (r) => {
            var n, i, s;
            const { data: a, error: o } = r;
            if (o) throw o;
            return !(
              !((n = a.session) === null || n === void 0) && n.access_token
            ) && !this.hasCustomAuthorizationHeader
              ? { data: { user: null }, error: new Tn() }
              : await oe(this.fetch, "GET", `${this.url}/user`, {
                  headers: this.headers,
                  jwt:
                    (s =
                      (i = a.session) === null || i === void 0
                        ? void 0
                        : i.access_token) !== null && s !== void 0
                      ? s
                      : void 0,
                  xform: Xr,
                });
          });
    } catch (r) {
      if (se(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async updateUser(t, r = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._updateUser(t, r))
    );
  }
  async _updateUser(t, r = {}) {
    try {
      return await this._useSession(async (n) => {
        const { data: i, error: s } = n;
        if (s) throw s;
        if (!i.session) throw new Tn();
        const a = i.session;
        let o = null,
          l = null;
        this.flowType === "pkce" &&
          t.email != null &&
          ([o, l] = await ui(this.storage, this.storageKey));
        const { data: u, error: c } = await oe(
          this.fetch,
          "PUT",
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: r == null ? void 0 : r.emailRedirectTo,
            body: Object.assign(Object.assign({}, t), {
              code_challenge: o,
              code_challenge_method: l,
            }),
            jwt: a.access_token,
            xform: Xr,
          }
        );
        if (c) throw c;
        return (
          (a.user = u.user),
          await this._saveSession(a),
          await this._notifyAllSubscribers("USER_UPDATED", a),
          { data: { user: a.user }, error: null }
        );
      });
    } catch (n) {
      if (se(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  _decodeJWT(t) {
    return Fm(t);
  }
  async setSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._setSession(t))
    );
  }
  async _setSession(t) {
    try {
      if (!t.access_token || !t.refresh_token) throw new Tn();
      const r = Date.now() / 1e3;
      let n = r,
        i = !0,
        s = null;
      const a = Fm(t.access_token);
      if ((a.exp && ((n = a.exp), (i = n <= r)), i)) {
        const { session: o, error: l } = await this._callRefreshToken(
          t.refresh_token
        );
        if (l) return { data: { user: null, session: null }, error: l };
        if (!o) return { data: { user: null, session: null }, error: null };
        s = o;
      } else {
        const { data: o, error: l } = await this._getUser(t.access_token);
        if (l) throw l;
        (s = {
          access_token: t.access_token,
          refresh_token: t.refresh_token,
          user: o.user,
          token_type: "bearer",
          expires_in: n - r,
          expires_at: n,
        }),
          await this._saveSession(s),
          await this._notifyAllSubscribers("SIGNED_IN", s);
      }
      return { data: { user: s.user, session: s }, error: null };
    } catch (r) {
      if (se(r)) return { data: { session: null, user: null }, error: r };
      throw r;
    }
  }
  async refreshSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._refreshSession(t))
    );
  }
  async _refreshSession(t) {
    try {
      return await this._useSession(async (r) => {
        var n;
        if (!t) {
          const { data: a, error: o } = r;
          if (o) throw o;
          t = (n = a.session) !== null && n !== void 0 ? n : void 0;
        }
        if (!(t != null && t.refresh_token)) throw new Tn();
        const { session: i, error: s } = await this._callRefreshToken(
          t.refresh_token
        );
        return s
          ? { data: { user: null, session: null }, error: s }
          : i
          ? { data: { user: i.user, session: i }, error: null }
          : { data: { user: null, session: null }, error: null };
      });
    } catch (r) {
      if (se(r)) return { data: { user: null, session: null }, error: r };
      throw r;
    }
  }
  async _getSessionFromURL(t) {
    try {
      if (!er()) throw new ao("No browser detected.");
      if (this.flowType === "implicit" && !this._isImplicitGrantFlow())
        throw new ao("Not a valid implicit grant flow url.");
      if (this.flowType == "pkce" && !t)
        throw new jm("Not a valid PKCE flow url.");
      const r = Xu(window.location.href);
      if (t) {
        if (!r.code) throw new jm("No code detected.");
        const { data: f, error: v } = await this._exchangeCodeForSession(
          r.code
        );
        if (v) throw v;
        const _ = new URL(window.location.href);
        return (
          _.searchParams.delete("code"),
          window.history.replaceState(window.history.state, "", _.toString()),
          { data: { session: f.session, redirectType: null }, error: null }
        );
      }
      if (r.error || r.error_description || r.error_code)
        throw new ao(
          r.error_description ||
            "Error in URL with unspecified error_description",
          {
            error: r.error || "unspecified_error",
            code: r.error_code || "unspecified_code",
          }
        );
      const {
        provider_token: n,
        provider_refresh_token: i,
        access_token: s,
        refresh_token: a,
        expires_in: o,
        expires_at: l,
        token_type: u,
      } = r;
      if (!s || !o || !a || !u) throw new ao("No session defined in URL");
      const c = Math.round(Date.now() / 1e3),
        d = parseInt(o);
      let h = c + d;
      l && (h = parseInt(l));
      const m = h - c;
      m * 1e3 <= _s &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${m}s, should have been closer to ${d}s`
        );
      const y = h - d;
      c - y >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            y,
            h,
            c
          )
        : c - y < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",
            y,
            h,
            c
          );
      const { data: w, error: k } = await this._getUser(s);
      if (k) throw k;
      const p = {
        provider_token: n,
        provider_refresh_token: i,
        access_token: s,
        expires_in: d,
        expires_at: h,
        refresh_token: a,
        token_type: u,
        user: w.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        { data: { session: p, redirectType: r.type }, error: null }
      );
    } catch (r) {
      if (se(r))
        return { data: { session: null, redirectType: null }, error: r };
      throw r;
    }
  }
  _isImplicitGrantFlow() {
    const t = Xu(window.location.href);
    return !!(er() && (t.access_token || t.error_description));
  }
  async _isPKCEFlow() {
    const t = Xu(window.location.href),
      r = await io(this.storage, `${this.storageKey}-code-verifier`);
    return !!(t.code && r);
  }
  async signOut(t = { scope: "global" }) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._signOut(t))
    );
  }
  async _signOut({ scope: t } = { scope: "global" }) {
    return await this._useSession(async (r) => {
      var n;
      const { data: i, error: s } = r;
      if (s) return { error: s };
      const a =
        (n = i.session) === null || n === void 0 ? void 0 : n.access_token;
      if (a) {
        const { error: o } = await this.admin.signOut(a, t);
        if (
          o &&
          !(VP(o) && (o.status === 404 || o.status === 401 || o.status === 403))
        )
          return { error: o };
      }
      return (
        t !== "others" &&
          (await this._removeSession(),
          await Ju(this.storage, `${this.storageKey}-code-verifier`),
          await this._notifyAllSubscribers("SIGNED_OUT", null)),
        { error: null }
      );
    });
  }
  onAuthStateChange(t) {
    const r = RP(),
      n = {
        id: r,
        callback: t,
        unsubscribe: () => {
          this._debug(
            "#unsubscribe()",
            "state change callback with id removed",
            r
          ),
            this.stateChangeEmitters.delete(r);
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", r),
      this.stateChangeEmitters.set(r, n),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(-1, async () => {
          this._emitInitialSession(r);
        })
      ))(),
      { data: { subscription: n } }
    );
  }
  async _emitInitialSession(t) {
    return await this._useSession(async (r) => {
      var n, i;
      try {
        const {
          data: { session: s },
          error: a,
        } = r;
        if (a) throw a;
        await ((n = this.stateChangeEmitters.get(t)) === null || n === void 0
          ? void 0
          : n.callback("INITIAL_SESSION", s)),
          this._debug("INITIAL_SESSION", "callback id", t, "session", s);
      } catch (s) {
        await ((i = this.stateChangeEmitters.get(t)) === null || i === void 0
          ? void 0
          : i.callback("INITIAL_SESSION", null)),
          this._debug("INITIAL_SESSION", "callback id", t, "error", s),
          console.error(s);
      }
    });
  }
  async resetPasswordForEmail(t, r = {}) {
    let n = null,
      i = null;
    this.flowType === "pkce" &&
      ([n, i] = await ui(this.storage, this.storageKey, !0));
    try {
      return await oe(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: t,
          code_challenge: n,
          code_challenge_method: i,
          gotrue_meta_security: { captcha_token: r.captchaToken },
        },
        headers: this.headers,
        redirectTo: r.redirectTo,
      });
    } catch (s) {
      if (se(s)) return { data: null, error: s };
      throw s;
    }
  }
  async getUserIdentities() {
    var t;
    try {
      const { data: r, error: n } = await this.getUser();
      if (n) throw n;
      return {
        data: {
          identities: (t = r.user.identities) !== null && t !== void 0 ? t : [],
        },
        error: null,
      };
    } catch (r) {
      if (se(r)) return { data: null, error: r };
      throw r;
    }
  }
  async linkIdentity(t) {
    var r;
    try {
      const { data: n, error: i } = await this._useSession(async (s) => {
        var a, o, l, u, c;
        const { data: d, error: h } = s;
        if (h) throw h;
        const m = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          t.provider,
          {
            redirectTo:
              (a = t.options) === null || a === void 0 ? void 0 : a.redirectTo,
            scopes:
              (o = t.options) === null || o === void 0 ? void 0 : o.scopes,
            queryParams:
              (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
            skipBrowserRedirect: !0,
          }
        );
        return await oe(this.fetch, "GET", m, {
          headers: this.headers,
          jwt:
            (c =
              (u = d.session) === null || u === void 0
                ? void 0
                : u.access_token) !== null && c !== void 0
              ? c
              : void 0,
        });
      });
      if (i) throw i;
      return (
        er() &&
          !(
            !((r = t.options) === null || r === void 0) && r.skipBrowserRedirect
          ) &&
          window.location.assign(n == null ? void 0 : n.url),
        {
          data: { provider: t.provider, url: n == null ? void 0 : n.url },
          error: null,
        }
      );
    } catch (n) {
      if (se(n)) return { data: { provider: t.provider, url: null }, error: n };
      throw n;
    }
  }
  async unlinkIdentity(t) {
    try {
      return await this._useSession(async (r) => {
        var n, i;
        const { data: s, error: a } = r;
        if (a) throw a;
        return await oe(
          this.fetch,
          "DELETE",
          `${this.url}/user/identities/${t.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (i =
                (n = s.session) === null || n === void 0
                  ? void 0
                  : n.access_token) !== null && i !== void 0
                ? i
                : void 0,
          }
        );
      });
    } catch (r) {
      if (se(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _refreshAccessToken(t) {
    const r = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
    this._debug(r, "begin");
    try {
      const n = Date.now();
      return await $P(
        async (i) => (
          i > 0 && (await IP(200 * Math.pow(2, i - 1))),
          this._debug(r, "refreshing attempt", i),
          await oe(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: t }, headers: this.headers, xform: Vr }
          )
        ),
        (i, s) => {
          const a = 200 * Math.pow(2, i);
          return s && ec(s) && Date.now() + a - n < _s;
        }
      );
    } catch (n) {
      if ((this._debug(r, "error", n), se(n)))
        return { data: { session: null, user: null }, error: n };
      throw n;
    } finally {
      this._debug(r, "end");
    }
  }
  _isValidSession(t) {
    return (
      typeof t == "object" &&
      t !== null &&
      "access_token" in t &&
      "refresh_token" in t &&
      "expires_at" in t
    );
  }
  async _handleProviderSignIn(t, r) {
    const n = await this._getUrlForProvider(`${this.url}/authorize`, t, {
      redirectTo: r.redirectTo,
      scopes: r.scopes,
      queryParams: r.queryParams,
    });
    return (
      this._debug(
        "#_handleProviderSignIn()",
        "provider",
        t,
        "options",
        r,
        "url",
        n
      ),
      er() && !r.skipBrowserRedirect && window.location.assign(n),
      { data: { provider: t, url: n }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var t;
    const r = "#_recoverAndRefresh()";
    this._debug(r, "begin");
    try {
      const n = await io(this.storage, this.storageKey);
      if (
        (this._debug(r, "session from storage", n), !this._isValidSession(n))
      ) {
        this._debug(r, "session is not valid"),
          n !== null && (await this._removeSession());
        return;
      }
      const i = Math.round(Date.now() / 1e3),
        s = ((t = n.expires_at) !== null && t !== void 0 ? t : 1 / 0) < i + Mm;
      if (
        (this._debug(
          r,
          `session has${s ? "" : " not"} expired with margin of ${Mm}s`
        ),
        s)
      ) {
        if (this.autoRefreshToken && n.refresh_token) {
          const { error: a } = await this._callRefreshToken(n.refresh_token);
          a &&
            (console.error(a),
            ec(a) ||
              (this._debug(
                r,
                "refresh failed with a non-retryable error, removing the session",
                a
              ),
              await this._removeSession()));
        }
      } else await this._notifyAllSubscribers("SIGNED_IN", n);
    } catch (n) {
      this._debug(r, "error", n), console.error(n);
      return;
    } finally {
      this._debug(r, "end");
    }
  }
  async _callRefreshToken(t) {
    var r, n;
    if (!t) throw new Tn();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const i = `#_callRefreshToken(${t.substring(0, 5)}...)`;
    this._debug(i, "begin");
    try {
      this.refreshingDeferred = new au();
      const { data: s, error: a } = await this._refreshAccessToken(t);
      if (a) throw a;
      if (!s.session) throw new Tn();
      await this._saveSession(s.session),
        await this._notifyAllSubscribers("TOKEN_REFRESHED", s.session);
      const o = { session: s.session, error: null };
      return this.refreshingDeferred.resolve(o), o;
    } catch (s) {
      if ((this._debug(i, "error", s), se(s))) {
        const a = { session: null, error: s };
        return (
          ec(s) ||
            (await this._removeSession(),
            await this._notifyAllSubscribers("SIGNED_OUT", null)),
          (r = this.refreshingDeferred) === null ||
            r === void 0 ||
            r.resolve(a),
          a
        );
      }
      throw (
        ((n = this.refreshingDeferred) === null || n === void 0 || n.reject(s),
        s)
      );
    } finally {
      (this.refreshingDeferred = null), this._debug(i, "end");
    }
  }
  async _notifyAllSubscribers(t, r, n = !0) {
    const i = `#_notifyAllSubscribers(${t})`;
    this._debug(i, "begin", r, `broadcast = ${n}`);
    try {
      this.broadcastChannel &&
        n &&
        this.broadcastChannel.postMessage({ event: t, session: r });
      const s = [],
        a = Array.from(this.stateChangeEmitters.values()).map(async (o) => {
          try {
            await o.callback(t, r);
          } catch (l) {
            s.push(l);
          }
        });
      if ((await Promise.all(a), s.length > 0)) {
        for (let o = 0; o < s.length; o += 1) console.error(s[o]);
        throw s[0];
      }
    } finally {
      this._debug(i, "end");
    }
  }
  async _saveSession(t) {
    this._debug("#_saveSession()", t),
      (this.suppressGetSessionWarning = !0),
      await y1(this.storage, this.storageKey, t);
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await Ju(this.storage, this.storageKey);
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const t = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      t &&
        er() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener("visibilitychange", t);
    } catch (r) {
      console.error("removing visibilitychange callback failed", r);
    }
  }
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const t = setInterval(() => this._autoRefreshTokenTick(), _s);
    (this.autoRefreshTicker = t),
      t && typeof t == "object" && typeof t.unref == "function"
        ? t.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(t),
      setTimeout(async () => {
        await this.initializePromise, await this._autoRefreshTokenTick();
      }, 0);
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const t = this.autoRefreshTicker;
    (this.autoRefreshTicker = null), t && clearInterval(t);
  }
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const t = Date.now();
          try {
            return await this._useSession(async (r) => {
              const {
                data: { session: n },
              } = r;
              if (!n || !n.refresh_token || !n.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const i = Math.floor((n.expires_at * 1e3 - t) / _s);
              this._debug(
                "#_autoRefreshTokenTick()",
                `access token expires in ${i} ticks, a tick lasts ${_s}ms, refresh threshold is ${Vm} ticks`
              ),
                i <= Vm && (await this._callRefreshToken(n.refresh_token));
            });
          } catch (r) {
            console.error(
              "Auto refresh tick failed with error. This is likely a transient error.",
              r
            );
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (t) {
      if (t.isAcquireTimeout || t instanceof b1)
        this._debug("auto refresh token tick lock not available");
      else throw t;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug("#_handleVisibilityChange()"),
      !er() || !(window != null && window.addEventListener))
    )
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      (this.visibilityChangedCallback = async () =>
        await this._onVisibilityChanged(!1)),
        window == null ||
          window.addEventListener(
            "visibilitychange",
            this.visibilityChangedCallback
          ),
        await this._onVisibilityChanged(!0);
    } catch (t) {
      console.error("_handleVisibilityChange", t);
    }
  }
  async _onVisibilityChanged(t) {
    const r = `#_onVisibilityChanged(${t})`;
    this._debug(r, "visibilityState", document.visibilityState),
      document.visibilityState === "visible"
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          t ||
            (await this.initializePromise,
            await this._acquireLock(-1, async () => {
              if (document.visibilityState !== "visible") {
                this._debug(
                  r,
                  "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                );
                return;
              }
              await this._recoverAndRefresh();
            })))
        : document.visibilityState === "hidden" &&
          this.autoRefreshToken &&
          this._stopAutoRefresh();
  }
  async _getUrlForProvider(t, r, n) {
    const i = [`provider=${encodeURIComponent(r)}`];
    if (
      (n != null &&
        n.redirectTo &&
        i.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),
      n != null && n.scopes && i.push(`scopes=${encodeURIComponent(n.scopes)}`),
      this.flowType === "pkce")
    ) {
      const [s, a] = await ui(this.storage, this.storageKey),
        o = new URLSearchParams({
          code_challenge: `${encodeURIComponent(s)}`,
          code_challenge_method: `${encodeURIComponent(a)}`,
        });
      i.push(o.toString());
    }
    if (n != null && n.queryParams) {
      const s = new URLSearchParams(n.queryParams);
      i.push(s.toString());
    }
    return (
      n != null &&
        n.skipBrowserRedirect &&
        i.push(`skip_http_redirect=${n.skipBrowserRedirect}`),
      `${t}?${i.join("&")}`
    );
  }
  async _unenroll(t) {
    try {
      return await this._useSession(async (r) => {
        var n;
        const { data: i, error: s } = r;
        return s
          ? { data: null, error: s }
          : await oe(
              this.fetch,
              "DELETE",
              `${this.url}/factors/${t.factorId}`,
              {
                headers: this.headers,
                jwt:
                  (n = i == null ? void 0 : i.session) === null || n === void 0
                    ? void 0
                    : n.access_token,
              }
            );
      });
    } catch (r) {
      if (se(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _enroll(t) {
    try {
      return await this._useSession(async (r) => {
        var n, i;
        const { data: s, error: a } = r;
        if (a) return { data: null, error: a };
        const { data: o, error: l } = await oe(
          this.fetch,
          "POST",
          `${this.url}/factors`,
          {
            body: {
              friendly_name: t.friendlyName,
              factor_type: t.factorType,
              issuer: t.issuer,
            },
            headers: this.headers,
            jwt:
              (n = s == null ? void 0 : s.session) === null || n === void 0
                ? void 0
                : n.access_token,
          }
        );
        return l
          ? { data: null, error: l }
          : (!((i = o == null ? void 0 : o.totp) === null || i === void 0) &&
              i.qr_code &&
              (o.totp.qr_code = `data:image/svg+xml;utf-8,${o.totp.qr_code}`),
            { data: o, error: null });
      });
    } catch (r) {
      if (se(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _verify(t) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: i, error: s } = r;
          if (s) return { data: null, error: s };
          const { data: a, error: o } = await oe(
            this.fetch,
            "POST",
            `${this.url}/factors/${t.factorId}/verify`,
            {
              body: { code: t.code, challenge_id: t.challengeId },
              headers: this.headers,
              jwt:
                (n = i == null ? void 0 : i.session) === null || n === void 0
                  ? void 0
                  : n.access_token,
            }
          );
          return o
            ? { data: null, error: o }
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + a.expires_in },
                  a
                )
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a),
              { data: a, error: o });
        });
      } catch (r) {
        if (se(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  async _challenge(t) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: i, error: s } = r;
          return s
            ? { data: null, error: s }
            : await oe(
                this.fetch,
                "POST",
                `${this.url}/factors/${t.factorId}/challenge`,
                {
                  headers: this.headers,
                  jwt:
                    (n = i == null ? void 0 : i.session) === null ||
                    n === void 0
                      ? void 0
                      : n.access_token,
                }
              );
        });
      } catch (r) {
        if (se(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  async _challengeAndVerify(t) {
    const { data: r, error: n } = await this._challenge({
      factorId: t.factorId,
    });
    return n
      ? { data: null, error: n }
      : await this._verify({
          factorId: t.factorId,
          challengeId: r.id,
          code: t.code,
        });
  }
  async _listFactors() {
    const {
      data: { user: t },
      error: r,
    } = await this.getUser();
    if (r) return { data: null, error: r };
    const n = (t == null ? void 0 : t.factors) || [],
      i = n.filter((s) => s.factor_type === "totp" && s.status === "verified");
    return { data: { all: n, totp: i }, error: null };
  }
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(
      -1,
      async () =>
        await this._useSession(async (t) => {
          var r, n;
          const {
            data: { session: i },
            error: s,
          } = t;
          if (s) return { data: null, error: s };
          if (!i)
            return {
              data: {
                currentLevel: null,
                nextLevel: null,
                currentAuthenticationMethods: [],
              },
              error: null,
            };
          const a = this._decodeJWT(i.access_token);
          let o = null;
          a.aal && (o = a.aal);
          let l = o;
          ((n =
            (r = i.user.factors) === null || r === void 0
              ? void 0
              : r.filter((d) => d.status === "verified")) !== null &&
          n !== void 0
            ? n
            : []
          ).length > 0 && (l = "aal2");
          const c = a.amr || [];
          return {
            data: {
              currentLevel: o,
              nextLevel: l,
              currentAuthenticationMethods: c,
            },
            error: null,
          };
        })
    );
  }
}
wa.nextInstanceID = 0;
const aO = wa;
class oO extends aO {
  constructor(t) {
    super(t);
  }
}
var lO =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, r, n) {
    function i(s) {
      return s instanceof r
        ? s
        : new r(function (a) {
            a(s);
          });
    }
    return new (r || (r = Promise))(function (s, a) {
      function o(c) {
        try {
          u(n.next(c));
        } catch (d) {
          a(d);
        }
      }
      function l(c) {
        try {
          u(n.throw(c));
        } catch (d) {
          a(d);
        }
      }
      function u(c) {
        c.done ? s(c.value) : i(c.value).then(o, l);
      }
      u((n = n.apply(e, t || [])).next());
    });
  };
class uO {
  constructor(t, r, n) {
    var i, s, a;
    if (((this.supabaseUrl = t), (this.supabaseKey = r), !t))
      throw new Error("supabaseUrl is required.");
    if (!r) throw new Error("supabaseKey is required.");
    const o = CP(t);
    (this.realtimeUrl = `${o}/realtime/v1`.replace(/^http/i, "ws")),
      (this.authUrl = `${o}/auth/v1`),
      (this.storageUrl = `${o}/storage/v1`),
      (this.functionsUrl = `${o}/functions/v1`);
    const l = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,
      u = {
        db: yP,
        realtime: bP,
        auth: Object.assign(Object.assign({}, wP), { storageKey: l }),
        global: vP,
      },
      c = EP(n ?? {}, u);
    (this.storageKey =
      (i = c.auth.storageKey) !== null && i !== void 0 ? i : ""),
      (this.headers = (s = c.global.headers) !== null && s !== void 0 ? s : {}),
      (this.auth = this._initSupabaseAuthClient(
        (a = c.auth) !== null && a !== void 0 ? a : {},
        this.headers,
        c.global.fetch
      )),
      (this.fetch = xP(r, this._getAccessToken.bind(this), c.global.fetch)),
      (this.realtime = this._initRealtimeClient(
        Object.assign({ headers: this.headers }, c.realtime)
      )),
      (this.rest = new zE(`${o}/rest/v1`, {
        headers: this.headers,
        schema: c.db.schema,
        fetch: this.fetch,
      })),
      this._listenForAuthEvents();
  }
  get functions() {
    return new vE(this.functionsUrl, {
      headers: this.headers,
      customFetch: this.fetch,
    });
  }
  get storage() {
    return new pP(this.storageUrl, this.headers, this.fetch);
  }
  from(t) {
    return this.rest.from(t);
  }
  schema(t) {
    return this.rest.schema(t);
  }
  rpc(t, r = {}, n = {}) {
    return this.rest.rpc(t, r, n);
  }
  channel(t, r = { config: {} }) {
    return this.realtime.channel(t, r);
  }
  getChannels() {
    return this.realtime.getChannels();
  }
  removeChannel(t) {
    return this.realtime.removeChannel(t);
  }
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var t, r;
    return lO(this, void 0, void 0, function* () {
      const { data: n } = yield this.auth.getSession();
      return (r =
        (t = n.session) === null || t === void 0 ? void 0 : t.access_token) !==
        null && r !== void 0
        ? r
        : null;
    });
  }
  _initSupabaseAuthClient(
    {
      autoRefreshToken: t,
      persistSession: r,
      detectSessionInUrl: n,
      storage: i,
      storageKey: s,
      flowType: a,
      debug: o,
    },
    l,
    u
  ) {
    var c;
    const d = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`,
    };
    return new oO({
      url: this.authUrl,
      headers: Object.assign(Object.assign({}, d), l),
      storageKey: s,
      autoRefreshToken: t,
      persistSession: r,
      detectSessionInUrl: n,
      storage: i,
      flowType: a,
      debug: o,
      fetch: u,
      hasCustomAuthorizationHeader:
        (c = "Authorization" in this.headers) !== null && c !== void 0 ? c : !1,
    });
  }
  _initRealtimeClient(t) {
    return new tP(
      this.realtimeUrl,
      Object.assign(Object.assign({}, t), {
        params: Object.assign(
          { apikey: this.supabaseKey },
          t == null ? void 0 : t.params
        ),
      })
    );
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((r, n) => {
      this._handleTokenChanged(
        r,
        "CLIENT",
        n == null ? void 0 : n.access_token
      );
    });
  }
  _handleTokenChanged(t, r, n) {
    (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") &&
    this.changedAccessToken !== n
      ? (this.realtime.setAuth(n ?? null), (this.changedAccessToken = n))
      : t === "SIGNED_OUT" &&
        (this.realtime.setAuth(this.supabaseKey),
        r == "STORAGE" && this.auth.signOut(),
        (this.changedAccessToken = void 0));
  }
}
const cO = (e, t, r) => new uO(e, t, r),
  Pd = "https://jfyctkgwzapudocvktmy.supabase.co",
  dO =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmeWN0a2d3emFwdWRvY3ZrdG15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4MzI1ODIsImV4cCI6MjAzNzQwODU4Mn0.QliS176_gkklfZOaKSndB9EB1fxMCfDXxY3PuJqLqoc",
  _t = cO(Pd, dO),
  tc = async (e, t, r) => {
    let n = _t
      .from("bookings")
      .select(
        "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, guests(fullName, email), cabins(name)",
        { count: "exact" }
      );
    if (
      (e.value !== "all" && e.value !== void 0 && (n = n.eq(e.field, e.value)),
      t && (n = n.order(t.field, { ascending: t.order === "asc" })),
      r)
    ) {
      const o = (r - 1) * 10,
        l = o + 9;
      n = n.range(o, l);
    }
    const { data: i, error: s, count: a } = await n;
    if (s)
      throw (
        (console.error("Error fetching bookings:", s),
        new Error("Bookings not found"))
      );
    return { data: i, count: a };
  };
async function fO(e) {
  const { data: t, error: r } = await _t
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", e)
    .single();
  if (r) throw (console.error(r), new Error("Booking not found"));
  return t;
}
async function k1(e, t) {
  console.log(e, t);
  const { data: r, error: n } = await _t
    .from("bookings")
    .update(t)
    .eq("id", e)
    .select()
    .single();
  if (n) throw (console.error(n), new Error("Booking could not be updated"));
  return r;
}
async function hO(e) {
  const { data: t, error: r } = await _t.from("bookings").delete().eq("id", e);
  if (r)
    throw (console.error(r.message), new Error("Booking could not be deleted"));
  return t;
}
const _1 = () => {
  const { id: e } = $_(),
    {
      isLoading: t,
      error: r,
      data: n,
    } = Bl({ queryKey: ["booking", e], queryFn: () => fO(e), retry: !1 });
  return { isLoading: t, error: r, bookingId: n };
};
function pO() {
  const e = Xt(),
    [t] = Pa(),
    r = t.get("status") || "all",
    n = r === "null" ? null : { field: "status", value: r },
    i = t.get("sortBy") || "startDate-desc",
    [s, a] = i.split("-"),
    o = { field: s, order: a },
    l = t.get("page") ? parseInt(t.get("page")) : 1,
    {
      isLoading: u,
      data: { data: c, count: d } = {},
      error: h,
    } = Bl({
      queryKey: ["booking", r, o, l],
      queryFn: () => tc(n, o, l),
      retry: !1,
    }),
    m = Math.ceil(d / 10);
  return (
    l < m &&
      e.prefetchQuery({
        queryKey: ["booking", r, o, l + 1],
        queryFn: () => tc({ filter: n, sort: o, page: l + 1 }),
        retry: !1,
      }),
    l > 1 &&
      e.prefetchQuery({
        queryKey: ["booking", r, o, l - 1],
        queryFn: () => tc({ filter: n, sort: o, page: l - 1 }),
        retry: !1,
      }),
    { isLoading: u, error: h, booking: c, count: d }
  );
}
const mO = async () => {
    const { data: e, error: t } = await _t.from("cabins").select("*");
    if (t) throw (console.log(t), new Error("Cabins not found"));
    return e;
  },
  gh = async (e, t) => {
    var u, c;
    const r =
        (c = (u = e.image) == null ? void 0 : u.startsWith) == null
          ? void 0
          : c.call(u, Pd),
      n = `${Math.random()}-${e.image.name}`.replace("/", ""),
      i = r ? e.image : `${Pd}/storage/v1/object/public/cabin-images/${n}`;
    let s = _t.from("cabins");
    t || (s = s.insert([{ ...e, image: i }])),
      t && (s = s.update({ ...e, image: i }).eq("id", t));
    const { data: a, error: o } = await s.select().single();
    if (o) throw (console.log(o), new Error("Cabins could not be add"));
    if (r) return a;
    const { errorStorage: l } = await _t.storage
      .from("cabin-images")
      .upload(n, e.image);
    if (l)
      throw (
        (await _t.from("cabins").delete().eq("id", a.id),
        new Error("Could not upload image"))
      );
    return a;
  },
  gO = async (e, t) => {
    const { data: r, error: n } = await _t.from("cabins").delete().eq("id", e);
    let { data: i } = await _t.from("cabins").select("image");
    if (n) throw (console.log(n), new Error("Cabins could not be deleted"));
    function s(l) {
      return l.substring(l.lastIndexOf("/") + 1);
    }
    if (i.map((l) => s(l.image)).includes(t) === !1) {
      const { error: l } = await _t.storage.from("cabin-images").remove([t]);
      if (l) throw (console.log(l), new Error("Could not delete image"));
    }
    return r;
  };
let vO = { data: "" },
  yO = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : e || vO,
  wO = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  bO = /\/\*[^]*?\*\/|  +/g,
  qm = /\n+/g,
  Jr = (e, t) => {
    let r = "",
      n = "",
      i = "";
    for (let s in e) {
      let a = e[s];
      s[0] == "@"
        ? s[1] == "i"
          ? (r = s + " " + a + ";")
          : (n +=
              s[1] == "f"
                ? Jr(a, s)
                : s + "{" + Jr(a, s[1] == "k" ? "" : t) + "}")
        : typeof a == "object"
        ? (n += Jr(
            a,
            t
              ? t.replace(/([^,])+/g, (o) =>
                  s.replace(/(^:.*)|([^,])+/g, (l) =>
                    /&/.test(l) ? l.replace(/&/g, o) : o ? o + " " + l : l
                  )
                )
              : s
          ))
        : a != null &&
          ((s = /^--/.test(s) ? s : s.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (i += Jr.p ? Jr.p(s, a) : s + ":" + a + ";"));
    }
    return r + (t && i ? t + "{" + i + "}" : i) + n;
  },
  Sr = {},
  S1 = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let r in e) t += r + S1(e[r]);
      return t;
    }
    return e;
  },
  kO = (e, t, r, n, i) => {
    let s = S1(e),
      a =
        Sr[s] ||
        (Sr[s] = ((l) => {
          let u = 0,
            c = 11;
          for (; u < l.length; ) c = (101 * c + l.charCodeAt(u++)) >>> 0;
          return "go" + c;
        })(s));
    if (!Sr[a]) {
      let l =
        s !== e
          ? e
          : ((u) => {
              let c,
                d,
                h = [{}];
              for (; (c = wO.exec(u.replace(bO, ""))); )
                c[4]
                  ? h.shift()
                  : c[3]
                  ? ((d = c[3].replace(qm, " ").trim()),
                    h.unshift((h[0][d] = h[0][d] || {})))
                  : (h[0][c[1]] = c[2].replace(qm, " ").trim());
              return h[0];
            })(e);
      Sr[a] = Jr(i ? { ["@keyframes " + a]: l } : l, r ? "" : "." + a);
    }
    let o = r && Sr.g ? Sr.g : null;
    return (
      r && (Sr.g = Sr[a]),
      ((l, u, c, d) => {
        d
          ? (u.data = u.data.replace(d, l))
          : u.data.indexOf(l) === -1 && (u.data = c ? l + u.data : u.data + l);
      })(Sr[a], t, n, o),
      a
    );
  },
  _O = (e, t, r) =>
    e.reduce((n, i, s) => {
      let a = t[s];
      if (a && a.call) {
        let o = a(r),
          l = (o && o.props && o.props.className) || (/^go/.test(o) && o);
        a = l
          ? "." + l
          : o && typeof o == "object"
          ? o.props
            ? ""
            : Jr(o, "")
          : o === !1
          ? ""
          : o;
      }
      return n + i + (a ?? "");
    }, "");
function ou(e) {
  let t = this || {},
    r = e.call ? e(t.p) : e;
  return kO(
    r.unshift
      ? r.raw
        ? _O(r, [].slice.call(arguments, 1), t.p)
        : r.reduce((n, i) => Object.assign(n, i && i.call ? i(t.p) : i), {})
      : r,
    yO(t.target),
    t.g,
    t.o,
    t.k
  );
}
let x1, Od, Td;
ou.bind({ g: 1 });
let Ir = ou.bind({ k: 1 });
function SO(e, t, r, n) {
  (Jr.p = t), (x1 = e), (Od = r), (Td = n);
}
function Pn(e, t) {
  let r = this || {};
  return function () {
    let n = arguments;
    function i(s, a) {
      let o = Object.assign({}, s),
        l = o.className || i.className;
      (r.p = Object.assign({ theme: Od && Od() }, o)),
        (r.o = / *go\d+/.test(l)),
        (o.className = ou.apply(r, n) + (l ? " " + l : "")),
        t && (o.ref = a);
      let u = e;
      return (
        e[0] && ((u = o.as || e), delete o.as), Td && u[0] && Td(o), x1(u, o)
      );
    }
    return t ? t(i) : i;
  };
}
var xO = (e) => typeof e == "function",
  gl = (e, t) => (xO(e) ? e(t) : e),
  CO = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  C1 = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  EO = 20,
  Eo = new Map(),
  PO = 1e3,
  Qm = (e) => {
    if (Eo.has(e)) return;
    let t = setTimeout(() => {
      Eo.delete(e), si({ type: 4, toastId: e });
    }, PO);
    Eo.set(e, t);
  },
  OO = (e) => {
    let t = Eo.get(e);
    t && clearTimeout(t);
  },
  Ad = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, EO) };
      case 1:
        return (
          t.toast.id && OO(t.toast.id),
          {
            ...e,
            toasts: e.toasts.map((s) =>
              s.id === t.toast.id ? { ...s, ...t.toast } : s
            ),
          }
        );
      case 2:
        let { toast: r } = t;
        return e.toasts.find((s) => s.id === r.id)
          ? Ad(e, { type: 1, toast: r })
          : Ad(e, { type: 0, toast: r });
      case 3:
        let { toastId: n } = t;
        return (
          n
            ? Qm(n)
            : e.toasts.forEach((s) => {
                Qm(s.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((s) =>
              s.id === n || n === void 0 ? { ...s, visible: !1 } : s
            ),
          }
        );
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((s) => s.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let i = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((s) => ({
            ...s,
            pauseDuration: s.pauseDuration + i,
          })),
        };
    }
  },
  Po = [],
  Oo = { toasts: [], pausedAt: void 0 },
  si = (e) => {
    (Oo = Ad(Oo, e)),
      Po.forEach((t) => {
        t(Oo);
      });
  },
  TO = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  AO = (e = {}) => {
    let [t, r] = x.useState(Oo);
    x.useEffect(
      () => (
        Po.push(r),
        () => {
          let i = Po.indexOf(r);
          i > -1 && Po.splice(i, 1);
        }
      ),
      [t]
    );
    let n = t.toasts.map((i) => {
      var s, a;
      return {
        ...e,
        ...e[i.type],
        ...i,
        duration:
          i.duration ||
          ((s = e[i.type]) == null ? void 0 : s.duration) ||
          (e == null ? void 0 : e.duration) ||
          TO[i.type],
        style: {
          ...e.style,
          ...((a = e[i.type]) == null ? void 0 : a.style),
          ...i.style,
        },
      };
    });
    return { ...t, toasts: n };
  },
  RO = (e, t = "blank", r) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...r,
    id: (r == null ? void 0 : r.id) || CO(),
  }),
  Na = (e) => (t, r) => {
    let n = RO(t, e, r);
    return si({ type: 2, toast: n }), n.id;
  },
  dt = (e, t) => Na("blank")(e, t);
dt.error = Na("error");
dt.success = Na("success");
dt.loading = Na("loading");
dt.custom = Na("custom");
dt.dismiss = (e) => {
  si({ type: 3, toastId: e });
};
dt.remove = (e) => si({ type: 4, toastId: e });
dt.promise = (e, t, r) => {
  let n = dt.loading(t.loading, { ...r, ...(r == null ? void 0 : r.loading) });
  return (
    e
      .then(
        (i) => (
          dt.success(gl(t.success, i), {
            id: n,
            ...r,
            ...(r == null ? void 0 : r.success),
          }),
          i
        )
      )
      .catch((i) => {
        dt.error(gl(t.error, i), {
          id: n,
          ...r,
          ...(r == null ? void 0 : r.error),
        });
      }),
    e
  );
};
var DO = (e, t) => {
    si({ type: 1, toast: { id: e, height: t } });
  },
  NO = () => {
    si({ type: 5, time: Date.now() });
  },
  IO = (e) => {
    let { toasts: t, pausedAt: r } = AO(e);
    x.useEffect(() => {
      if (r) return;
      let s = Date.now(),
        a = t.map((o) => {
          if (o.duration === 1 / 0) return;
          let l = (o.duration || 0) + o.pauseDuration - (s - o.createdAt);
          if (l < 0) {
            o.visible && dt.dismiss(o.id);
            return;
          }
          return setTimeout(() => dt.dismiss(o.id), l);
        });
      return () => {
        a.forEach((o) => o && clearTimeout(o));
      };
    }, [t, r]);
    let n = x.useCallback(() => {
        r && si({ type: 6, time: Date.now() });
      }, [r]),
      i = x.useCallback(
        (s, a) => {
          let {
              reverseOrder: o = !1,
              gutter: l = 8,
              defaultPosition: u,
            } = a || {},
            c = t.filter(
              (m) => (m.position || u) === (s.position || u) && m.height
            ),
            d = c.findIndex((m) => m.id === s.id),
            h = c.filter((m, y) => y < d && m.visible).length;
          return c
            .filter((m) => m.visible)
            .slice(...(o ? [h + 1] : [0, h]))
            .reduce((m, y) => m + (y.height || 0) + l, 0);
        },
        [t]
      );
    return {
      toasts: t,
      handlers: {
        updateHeight: DO,
        startPause: NO,
        endPause: n,
        calculateOffset: i,
      },
    };
  },
  $O = Ir`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  LO = Ir`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  MO = Ir`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  FO = Pn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$O} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${LO} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${MO} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  jO = Ir`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  UO = Pn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${jO} 1s linear infinite;
`,
  zO = Ir`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  BO = Ir`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  WO = Pn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${zO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${BO} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  VO = Pn("div")`
  position: absolute;
`,
  HO = Pn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  qO = Ir`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  QO = Pn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${qO} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  YO = ({ toast: e }) => {
    let { icon: t, type: r, iconTheme: n } = e;
    return t !== void 0
      ? typeof t == "string"
        ? x.createElement(QO, null, t)
        : t
      : r === "blank"
      ? null
      : x.createElement(
          HO,
          null,
          x.createElement(UO, { ...n }),
          r !== "loading" &&
            x.createElement(
              VO,
              null,
              r === "error"
                ? x.createElement(FO, { ...n })
                : x.createElement(WO, { ...n })
            )
        );
  },
  GO = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  KO = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  XO = "0%{opacity:0;} 100%{opacity:1;}",
  JO = "0%{opacity:1;} 100%{opacity:0;}",
  ZO = Pn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  eT = Pn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  tT = (e, t) => {
    let r = e.includes("top") ? 1 : -1,
      [n, i] = C1() ? [XO, JO] : [GO(r), KO(r)];
    return {
      animation: t
        ? `${Ir(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${Ir(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  rT = x.memo(({ toast: e, position: t, style: r, children: n }) => {
    let i = e.height
        ? tT(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      s = x.createElement(YO, { toast: e }),
      a = x.createElement(eT, { ...e.ariaProps }, gl(e.message, e));
    return x.createElement(
      ZO,
      { className: e.className, style: { ...i, ...r, ...e.style } },
      typeof n == "function"
        ? n({ icon: s, message: a })
        : x.createElement(x.Fragment, null, s, a)
    );
  });
SO(x.createElement);
var nT = ({
    id: e,
    className: t,
    style: r,
    onHeightUpdate: n,
    children: i,
  }) => {
    let s = x.useCallback(
      (a) => {
        if (a) {
          let o = () => {
            let l = a.getBoundingClientRect().height;
            n(e, l);
          };
          o(),
            new MutationObserver(o).observe(a, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, n]
    );
    return x.createElement("div", { ref: s, className: t, style: r }, i);
  },
  iT = (e, t) => {
    let r = e.includes("top"),
      n = r ? { top: 0 } : { bottom: 0 },
      i = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: C1() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (r ? 1 : -1)}px)`,
      ...n,
      ...i,
    };
  },
  sT = ou`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  oo = 16,
  aT = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: r,
    gutter: n,
    children: i,
    containerStyle: s,
    containerClassName: a,
  }) => {
    let { toasts: o, handlers: l } = IO(r);
    return x.createElement(
      "div",
      {
        style: {
          position: "fixed",
          zIndex: 9999,
          top: oo,
          left: oo,
          right: oo,
          bottom: oo,
          pointerEvents: "none",
          ...s,
        },
        className: a,
        onMouseEnter: l.startPause,
        onMouseLeave: l.endPause,
      },
      o.map((u) => {
        let c = u.position || t,
          d = l.calculateOffset(u, {
            reverseOrder: e,
            gutter: n,
            defaultPosition: t,
          }),
          h = iT(c, d);
        return x.createElement(
          nT,
          {
            id: u.id,
            key: u.id,
            onHeightUpdate: l.updateHeight,
            className: u.visible ? sT : "",
            style: h,
          },
          u.type === "custom"
            ? gl(u.message, u)
            : i
            ? i(u)
            : x.createElement(rT, { toast: u, position: c })
        );
      })
    );
  },
  Dt = dt;
const oT = () => {
    const e = Xt(),
      { isLoading: t, mutate: r } = jr({
        mutationFn: ({ id: n, img: i }) => gO(n, i),
        onSuccess: () => {
          Dt.success("Deleted Successfully"),
            e.invalidateQueries({ queryKey: ["cabin"] });
        },
        onError: (n) => Dt.error(n.message),
      });
    return { deleteCabin: r, isDelete: t };
  },
  E1 = () => {
    const e = Xt(),
      { mutate: t, isLoading: r } = jr({
        mutationFn: (n) => k1(n, { status: "checked-out" }),
        onSuccess: (n) => {
          Dt.success(`Booking ${n.id} successfully checked out`),
            console.log(n),
            e.invalidateQueries({ active: !0 });
        },
      });
    return { checkout: t, isCheckout: r };
  },
  P1 = ({
    check: e,
    setCheck: t,
    id: r,
    isLast: n,
    handCopy: i,
    setShow: s,
    setDeleteShow: a,
    close: o,
    type: l,
    status: u,
  }) => {
    const c = Jy(o),
      d = Fr(),
      { checkout: h } = E1();
    return A("div", {
      className: "relative ",
      children: [
        e === r
          ? g(bd, {
              onClick: () => t(null),
              className: `${l === "cabin" && "text-center"}`,
              children: g("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className: "bi bi-three-dots-vertical",
                viewBox: "0 0 16 16",
                children: g("path", {
                  d: "M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0",
                }),
              }),
            })
          : g(bd, {
              onClick: () => t(r),
              className: `${l === "cabin" && "text-center"}`,
              children: g("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className: "bi bi-three-dots-vertical",
                viewBox: "0 0 16 16",
                children: g("path", {
                  d: "M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0",
                }),
              }),
            }),
        e === r &&
          A("div", {
            className: `flex  justify-center m-auto z-10  flex-col absolute  ${
              n ? "bottom-14" : "top-14"
            } ${
              l === "cabin" ? "left-[90px]" : "left-[68px]"
            }  border-[1px] rounded-xl bg-white`,
            ref: c,
            children: [
              l === "cabin" &&
                A(Yt, {
                  children: [
                    A(Nn, {
                      onClick: i,
                      className:
                        "flex gap-3 items-center border-b-2 py-4 px-7 ",
                      children: [
                        g("i", { className: "fa-regular fa-copy" }),
                        g("div", { children: "Copy" }),
                      ],
                    }),
                    A(Nn, {
                      onClick: () => s(!0),
                      className:
                        "flex gap-3 items-center  border-b-2 py-4 px-7",
                      children: [
                        g("i", { className: "fa-regular fa-pen-to-square" }),
                        g("div", { children: "Update" }),
                      ],
                    }),
                  ],
                }),
              l === "booking" &&
                A(Yt, {
                  children: [
                    A(Nn, {
                      onClick: () => d(`/bookings/${r}`),
                      className:
                        "flex items-center justify-center border-b-2 w-[98px] py-4",
                      children: [
                        g("i", { className: "fa-solid fa-circle-info" }),
                        g("div", { children: "Detail" }),
                      ],
                    }),
                    u === "unconfirmed" &&
                      A(Nn, {
                        onClick: () => d(`/checkin/${r}`),
                        className:
                          "flex items-center border-b-2 w-[120px] justify-center  py-4",
                        children: [
                          g("i", {
                            className: "fa-solid fa-building-circle-check",
                          }),
                          g("div", { children: "Check in" }),
                        ],
                      }),
                    u === "checked-in" &&
                      A(Nn, {
                        onClick: () => {
                          h(r), t(!1);
                        },
                        className:
                          "flex items-center border-b-2 justify-center py-3 w-[120px]",
                        children: [
                          g("i", { class: "fa-solid fa-money-check-dollar" }),
                          g("div", { children: "Check out" }),
                        ],
                      }),
                  ],
                }),
              A(Nn, {
                onClick: () => a(!0),
                className: `flex gap-3 items-center ${
                  l === "cabin" && "py-4 px-7"
                } ${l === "booking" && "flex justify-center w-[104px] py-4"} `,
                children: [
                  g("i", { className: "fa-solid fa-trash-can" }),
                  "Delete",
                ],
              }),
            ],
          }),
      ],
    });
  },
  lT = {
    small: tt`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
    medium: tt`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
    large: tt`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
  },
  uT = {
    primary: tt`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
    secondary: tt`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
    danger: tt`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
  },
  ft = F.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(e) => lT[e.size]}
  ${(e) => uT[e.variation]}
`;
ft.defaultProps = { variation: "primary", size: "medium" };
const vh = F.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`,
  yh = F.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
  overflow-y: scroll;
`;
F.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;
be.createContext();
function cT(e) {
  return Jt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z",
        },
      },
    ],
  })(e);
}
const dT = Ly`
  to {
    transform: rotate(1turn)
  }
`,
  O1 = F(cT)`
  width: 2.4rem;
  height: 2.4rem;
  animation: ${dT} 1.5s infinite linear;
`,
  fT = F.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;
function wh({ resource: e, onConfirm: t, disabled: r, closeModal: n }) {
  return g(yh, {
    children: g(vh, {
      children: A(fT, {
        children: [
          A(qt, { type: "h3", children: ["Delete ", e] }),
          A("p", {
            children: [
              "Are you sure you want to delete this ",
              e,
              " permanently? This action cannot be undone.",
            ],
          }),
          A("div", {
            children: [
              g(ft, { variation: "secondary", onClick: n, children: "Cancel" }),
              A(ft, {
                variation: "danger",
                onClick: t,
                disabled: r,
                className: "flex justify-between items-center gap-3",
                children: [
                  g("div", { children: r && g(O1, {}) }),
                  g("div", { children: "Delete" }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const T1 = () => {
    const e = Xt(),
      { isLoading: t, mutate: r } = jr({
        mutationFn: hO,
        onSuccess: () => {
          Dt.success("Deleted Successfully"),
            e.invalidateQueries({ queryKey: ["booking"] });
        },
        onError: (n) => Dt.error(n.message),
      });
    return { deleteBooking: r, isDelete: t };
  },
  Ym = F.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`,
  Gm = F.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`,
  hT = F.div`
  font-family: "Sono";
  font-weight: 500;
`,
  pT = ({
    booking: e,
    index: t,
    check: r,
    setCheck: n,
    close: i,
    isLast: s,
  }) => {
    const [a, o] = x.useState(!1),
      [l, u] = x.useState(!1),
      { deleteBooking: c, isDelete: d } = T1(),
      {
        cabins: { name: h },
        created_at: m,
        endDate: y,
        guests: { email: w, fullName: k },
        id: p,
        numGuests: f,
        numNights: v,
        startDate: _,
        status: S,
        totalPrice: R,
      } = e,
      O = {
        unconfirmed: "blue",
        "checked-in": "green",
        "checked-out": "silver",
      },
      T = (q) => {
        c(q);
      };
    return A(Yt, {
      children: [
        A(Vt.Row, {
          children: [
            g(Ym, { className: "text-center", children: t + 1 }),
            g(Ym, {
              className: "text-center",
              children: h.length > 15 ? h.substring(0, 15) + "..." : h,
            }),
            A(Gm, {
              children: [
                g("span", { children: k }),
                g("span", { children: w }),
              ],
            }),
            A(Gm, {
              children: [
                A("span", {
                  children: [
                    Hy(new Date(_)) ? "Today" : Qy(_),
                    "→ ",
                    v,
                    " night stay",
                  ],
                }),
                A("span", {
                  children: [
                    qs(new Date(_), "MMM dd yyyy"),
                    " —",
                    " ",
                    qs(new Date(y), "MMM dd yyyy"),
                  ],
                }),
              ],
            }),
            g(Yy, { type: O[S], children: S.replace("-", " ") }),
            g(hT, { children: sr(R) }),
            g("div", {
              className: "text-center",
              children: g(P1, {
                id: p,
                check: r,
                setCheck: n,
                setShow: o,
                isLast: s,
                close: i,
                setDeleteShow: u,
                type: "booking",
                status: S,
              }),
            }),
          ],
        }),
        l &&
          g(wh, {
            onConfirm: () => T(p),
            closeModal: () => u(!1),
            resource: h,
            disabled: d,
          }),
      ],
    });
  },
  mT = Ly`
  to {
    transform: rotate(1turn)
  }
`,
  Ia = F.div`
  margin: 4.8rem auto;

  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000)
      top/10px 10px no-repeat,
    conic-gradient(#0000 30%, var(--color-brand-600));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${mT} 1.5s infinite linear;
`,
  gT = F.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
`,
  vT = F.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`,
  yT = F.div`
  gap: 0.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: -50%; */
`,
  Km = F.button`
  background-color: ${(e) =>
    e.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(e) => (e.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`,
  rc = 10,
  wT = ({ count: e }) => {
    const [t, r] = Pa(),
      n = t.get("page") ? parseInt(t.get("page")) : 1,
      i = Math.ceil(e / rc),
      s = () => {
        const c = n === i ? n : n + 1;
        t.set("page", c), r(t);
      },
      [a, o] = x.useState();
    x.useEffect(() => {
      let c = [];
      for (let d = 0; d < i; d++) c.push(d);
      o(c);
    }, [n]);
    const l = () => {
        const c = n === 1 ? n : n - 1;
        t.set("page", c), r(t);
      },
      u = (c) => {
        t.set("page", c), r(t);
      };
    return A(Yt, {
      children: [
        g(gT, {
          children: A(vT, {
            children: [
              "Show ",
              g("span", { className: "pr-2", children: (n - 1) * rc + 1 }),
              "to",
              g("span", { className: "px-2", children: n === i ? e : n * rc }),
              "of ",
              g("span", { children: e }),
              " results",
            ],
          }),
        }),
        i > 1 &&
          g(bT, {
            prePage: l,
            currentPage: n,
            index: a,
            page: u,
            pageCount: i,
            nextPage: s,
            seachParams: t,
          }),
      ],
    });
  },
  bT = ({
    prePage: e,
    currentPage: t,
    index: r,
    page: n,
    pageCount: i,
    nextPage: s,
    seachParams: a,
  }) =>
    g("div", {
      className: "w-[60%]",
      children: A(yT, {
        children: [
          A(Km, {
            onClick: e,
            disabled: t === 1,
            children: [g(GC, {}), g("span", { children: "Previous" })],
          }),
          g("div", {
            className: "flex gap-5 items-center ",
            children:
              r &&
              r
                .slice(0, 5)
                .map((o, l) =>
                  g(
                    "div",
                    {
                      className: "cursor-pointer",
                      children: g("div", {
                        onClick: () => n(o + 1),
                        className: `w-[30px] h-[30px] flex justify-center items-center rounded-full ${
                          (a.get("page") || "1") == o + 1 &&
                          "bg-blue-500 text-white "
                        }`,
                        children: o + 1,
                      }),
                    },
                    l
                  )
                ),
          }),
          A(Km, {
            onClick: s,
            disabled: t === i,
            children: [g("span", { children: "Next" }), " ", g(KC, {})],
          }),
        ],
      }),
    });
function kT() {
  const { booking: e, isLoading: t, count: r } = pO(),
    [n, i] = x.useState(null),
    s = () => {
      i(null);
    };
  return t
    ? g(Ia, {})
    : g(as, {
        children: A(Vt, {
          columns: "0.2fr 1fr 0.7fr 1.2fr 0.9fr 13rem 10rem",
          children: [
            A(Vt.Header, {
              children: [
                g("div", { className: "text-center", children: "Stt" }),
                g("div", { className: "text-center", children: "Cabin" }),
                g("div", { children: "Guest" }),
                g("div", { children: "Dates" }),
                g("div", { children: "Status" }),
                g("div", { children: "Amount" }),
                g("div", { className: "text-center", children: "Action" }),
              ],
            }),
            g(Vt.Body, {
              data: e,
              render: (a, o) =>
                g(
                  pT,
                  {
                    index: o,
                    booking: a,
                    check: n,
                    setCheck: i,
                    close: s,
                    isLast:
                      (e.length === 6 && o === e.length - 1) ||
                      (e.length > 6 && o >= e.length - 2),
                  },
                  a.id
                ),
            }),
            g(Vt.Footer, { children: g(wT, { count: r }) }),
          ],
        }),
      });
}
const _T = F.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(e) =>
      e.type === "white" ? "var(--color-grey-100)" : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;
function ST({ options: e, value: t, onChange: r, ...n }) {
  return g(_T, {
    value: t,
    onChange: r,
    ...n,
    children: e.map((i) =>
      g("option", { value: i.value, children: i.label }, i.value)
    ),
  });
}
function A1({ options: e }) {
  const [t, r] = Pa(),
    n = t.get("sortBy") || "";
  function i(s) {
    t.set("sortBy", s.target.value), r(t);
  }
  return g(ST, { options: e, type: "white", value: n, onChange: i });
}
const xT = F.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`,
  CT = F.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(e) =>
    e.active &&
    tt`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`,
  R1 = ({ filterField: e, options: t }) => {
    const [r, n] = Pa(),
      i = (a) => {
        r.set(e, a), r.get("page") && r.delete("page"), n(r);
      },
      s = r.get(e) || t[0].value;
    return g(xT, {
      children: t.map((a, o) =>
        g(
          CT,
          {
            active: a.value === s,
            disabled: a.value === s,
            onClick: () => i(a.value),
            children: a.label,
          },
          o
        )
      ),
    });
  },
  D1 = F.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;
function ET() {
  return A(D1, {
    children: [
      g(R1, {
        filterField: "status",
        options: [
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ],
      }),
      g(A1, {
        options: [
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          { value: "totalPrice-desc", label: "Sort by amount (high first)" },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
        ],
      }),
    ],
  });
}
function PT() {
  return A(Yt, {
    children: [
      A(br, {
        type: "horizontal",
        children: [g(qt, { as: "h1", children: "All bookings" }), g(ET, {})],
      }),
      g(kT, {}),
    ],
  });
}
var $a = (e) => e.type === "checkbox",
  Ai = (e) => e instanceof Date,
  ct = (e) => e == null;
const N1 = (e) => typeof e == "object";
var qe = (e) => !ct(e) && !Array.isArray(e) && N1(e) && !Ai(e),
  OT = (e) =>
    qe(e) && e.target ? ($a(e.target) ? e.target.checked : e.target.value) : e,
  TT = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  AT = (e, t) => e.has(TT(t)),
  RT = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return qe(t) && t.hasOwnProperty("isPrototypeOf");
  },
  bh =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Ft(e) {
  let t;
  const r = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !(bh && (e instanceof Blob || e instanceof FileList)) &&
    (r || qe(e))
  )
    if (((t = r ? [] : {}), !r && !RT(e))) t = e;
    else for (const n in e) e.hasOwnProperty(n) && (t[n] = Ft(e[n]));
  else return e;
  return t;
}
var lu = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  Fe = (e) => e === void 0,
  Q = (e, t, r) => {
    if (!t || !qe(e)) return r;
    const n = lu(t.split(/[,[\].]+?/)).reduce((i, s) => (ct(i) ? i : i[s]), e);
    return Fe(n) || n === e ? (Fe(e[t]) ? r : e[t]) : n;
  },
  Zr = (e) => typeof e == "boolean",
  kh = (e) => /^\w*$/.test(e),
  I1 = (e) => lu(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  Pe = (e, t, r) => {
    let n = -1;
    const i = kh(t) ? [t] : I1(t),
      s = i.length,
      a = s - 1;
    for (; ++n < s; ) {
      const o = i[n];
      let l = r;
      if (n !== a) {
        const u = e[o];
        l = qe(u) || Array.isArray(u) ? u : isNaN(+i[n + 1]) ? {} : [];
      }
      if (o === "__proto__") return;
      (e[o] = l), (e = e[o]);
    }
    return e;
  };
const Xm = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  ar = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  xr = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
be.createContext(null);
var DT = (e, t, r, n = !0) => {
    const i = { defaultValues: t._defaultValues };
    for (const s in e)
      Object.defineProperty(i, s, {
        get: () => {
          const a = s;
          return (
            t._proxyFormState[a] !== ar.all &&
              (t._proxyFormState[a] = !n || ar.all),
            r && (r[a] = !0),
            e[a]
          );
        },
      });
    return i;
  },
  Ct = (e) => qe(e) && !Object.keys(e).length,
  NT = (e, t, r, n) => {
    r(e);
    const { name: i, ...s } = e;
    return (
      Ct(s) ||
      Object.keys(s).length >= Object.keys(t).length ||
      Object.keys(s).find((a) => t[a] === (!n || ar.all))
    );
  },
  To = (e) => (Array.isArray(e) ? e : [e]);
function IT(e) {
  const t = be.useRef(e);
  (t.current = e),
    be.useEffect(() => {
      const r =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        r && r.unsubscribe();
      };
    }, [e.disabled]);
}
var mr = (e) => typeof e == "string",
  $T = (e, t, r, n, i) =>
    mr(e)
      ? (n && t.watch.add(e), Q(r, e, i))
      : Array.isArray(e)
      ? e.map((s) => (n && t.watch.add(s), Q(r, s)))
      : (n && (t.watchAll = !0), r),
  LT = (e, t, r, n, i) =>
    t
      ? {
          ...r[e],
          types: { ...(r[e] && r[e].types ? r[e].types : {}), [n]: i || !0 },
        }
      : {},
  Jm = (e) => ({
    isOnSubmit: !e || e === ar.onSubmit,
    isOnBlur: e === ar.onBlur,
    isOnChange: e === ar.onChange,
    isOnAll: e === ar.all,
    isOnTouch: e === ar.onTouched,
  }),
  Zm = (e, t, r) =>
    !r &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))
      ));
const Gs = (e, t, r, n) => {
  for (const i of r || Object.keys(e)) {
    const s = Q(e, i);
    if (s) {
      const { _f: a, ...o } = s;
      if (a) {
        if (a.refs && a.refs[0] && t(a.refs[0], i) && !n) break;
        if (a.ref && t(a.ref, a.name) && !n) break;
        Gs(o, t);
      } else qe(o) && Gs(o, t);
    }
  }
};
var MT = (e, t, r) => {
    const n = To(Q(e, r));
    return Pe(n, "root", t[r]), Pe(e, r, n), e;
  },
  _h = (e) => e.type === "file",
  nn = (e) => typeof e == "function",
  vl = (e) => {
    if (!bh) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  Ao = (e) => mr(e),
  Sh = (e) => e.type === "radio",
  yl = (e) => e instanceof RegExp;
const eg = { value: !1, isValid: !1 },
  tg = { value: !0, isValid: !0 };
var $1 = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((r) => r && r.checked && !r.disabled)
        .map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !Fe(e[0].attributes.value)
        ? Fe(e[0].value) || e[0].value === ""
          ? tg
          : { value: e[0].value, isValid: !0 }
        : tg
      : eg;
  }
  return eg;
};
const rg = { isValid: !1, value: null };
var L1 = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, r) =>
          r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : t,
        rg
      )
    : rg;
function ng(e, t, r = "validate") {
  if (Ao(e) || (Array.isArray(e) && e.every(Ao)) || (Zr(e) && !e))
    return { type: r, message: Ao(e) ? e : "", ref: t };
}
var di = (e) => (qe(e) && !yl(e) ? e : { value: e, message: "" }),
  ig = async (e, t, r, n, i) => {
    const {
        ref: s,
        refs: a,
        required: o,
        maxLength: l,
        minLength: u,
        min: c,
        max: d,
        pattern: h,
        validate: m,
        name: y,
        valueAsNumber: w,
        mount: k,
        disabled: p,
      } = e._f,
      f = Q(t, y);
    if (!k || p) return {};
    const v = a ? a[0] : s,
      _ = (V) => {
        n &&
          v.reportValidity &&
          (v.setCustomValidity(Zr(V) ? "" : V || ""), v.reportValidity());
      },
      S = {},
      R = Sh(s),
      O = $a(s),
      T = R || O,
      q =
        ((w || _h(s)) && Fe(s.value) && Fe(f)) ||
        (vl(s) && s.value === "") ||
        f === "" ||
        (Array.isArray(f) && !f.length),
      z = LT.bind(null, y, r, S),
      he = (V, G, ne, Z = xr.maxLength, me = xr.minLength) => {
        const le = V ? G : ne;
        S[y] = { type: V ? Z : me, message: le, ref: s, ...z(V ? Z : me, le) };
      };
    if (
      i
        ? !Array.isArray(f) || !f.length
        : o &&
          ((!T && (q || ct(f))) ||
            (Zr(f) && !f) ||
            (O && !$1(a).isValid) ||
            (R && !L1(a).isValid))
    ) {
      const { value: V, message: G } = Ao(o)
        ? { value: !!o, message: o }
        : di(o);
      if (
        V &&
        ((S[y] = {
          type: xr.required,
          message: G,
          ref: v,
          ...z(xr.required, G),
        }),
        !r)
      )
        return _(G), S;
    }
    if (!q && (!ct(c) || !ct(d))) {
      let V, G;
      const ne = di(d),
        Z = di(c);
      if (!ct(f) && !isNaN(f)) {
        const me = s.valueAsNumber || (f && +f);
        ct(ne.value) || (V = me > ne.value), ct(Z.value) || (G = me < Z.value);
      } else {
        const me = s.valueAsDate || new Date(f),
          le = (J) => new Date(new Date().toDateString() + " " + J),
          $ = s.type == "time",
          K = s.type == "week";
        mr(ne.value) &&
          f &&
          (V = $
            ? le(f) > le(ne.value)
            : K
            ? f > ne.value
            : me > new Date(ne.value)),
          mr(Z.value) &&
            f &&
            (G = $
              ? le(f) < le(Z.value)
              : K
              ? f < Z.value
              : me < new Date(Z.value));
      }
      if ((V || G) && (he(!!V, ne.message, Z.message, xr.max, xr.min), !r))
        return _(S[y].message), S;
    }
    if ((l || u) && !q && (mr(f) || (i && Array.isArray(f)))) {
      const V = di(l),
        G = di(u),
        ne = !ct(V.value) && f.length > +V.value,
        Z = !ct(G.value) && f.length < +G.value;
      if ((ne || Z) && (he(ne, V.message, G.message), !r))
        return _(S[y].message), S;
    }
    if (h && !q && mr(f)) {
      const { value: V, message: G } = di(h);
      if (
        yl(V) &&
        !f.match(V) &&
        ((S[y] = { type: xr.pattern, message: G, ref: s, ...z(xr.pattern, G) }),
        !r)
      )
        return _(G), S;
    }
    if (m) {
      if (nn(m)) {
        const V = await m(f, t),
          G = ng(V, v);
        if (G && ((S[y] = { ...G, ...z(xr.validate, G.message) }), !r))
          return _(G.message), S;
      } else if (qe(m)) {
        let V = {};
        for (const G in m) {
          if (!Ct(V) && !r) break;
          const ne = ng(await m[G](f, t), v, G);
          ne &&
            ((V = { ...ne, ...z(G, ne.message) }),
            _(ne.message),
            r && (S[y] = V));
        }
        if (!Ct(V) && ((S[y] = { ref: v, ...V }), !r)) return S;
      }
    }
    return _(!0), S;
  };
function FT(e, t) {
  const r = t.slice(0, -1).length;
  let n = 0;
  for (; n < r; ) e = Fe(e) ? n++ : e[t[n++]];
  return e;
}
function jT(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !Fe(e[t])) return !1;
  return !0;
}
function We(e, t) {
  const r = Array.isArray(t) ? t : kh(t) ? [t] : I1(t),
    n = r.length === 1 ? e : FT(e, r),
    i = r.length - 1,
    s = r[i];
  return (
    n && delete n[s],
    i !== 0 &&
      ((qe(n) && Ct(n)) || (Array.isArray(n) && jT(n))) &&
      We(e, r.slice(0, -1)),
    e
  );
}
var nc = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (i) => {
        for (const s of e) s.next && s.next(i);
      },
      subscribe: (i) => (
        e.push(i),
        {
          unsubscribe: () => {
            e = e.filter((s) => s !== i);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  wl = (e) => ct(e) || !N1(e);
function zn(e, t) {
  if (wl(e) || wl(t)) return e === t;
  if (Ai(e) && Ai(t)) return e.getTime() === t.getTime();
  const r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (const i of r) {
    const s = e[i];
    if (!n.includes(i)) return !1;
    if (i !== "ref") {
      const a = t[i];
      if (
        (Ai(s) && Ai(a)) ||
        (qe(s) && qe(a)) ||
        (Array.isArray(s) && Array.isArray(a))
          ? !zn(s, a)
          : s !== a
      )
        return !1;
    }
  }
  return !0;
}
var M1 = (e) => e.type === "select-multiple",
  UT = (e) => Sh(e) || $a(e),
  ic = (e) => vl(e) && e.isConnected,
  F1 = (e) => {
    for (const t in e) if (nn(e[t])) return !0;
    return !1;
  };
function bl(e, t = {}) {
  const r = Array.isArray(e);
  if (qe(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || (qe(e[n]) && !F1(e[n]))
        ? ((t[n] = Array.isArray(e[n]) ? [] : {}), bl(e[n], t[n]))
        : ct(e[n]) || (t[n] = !0);
  return t;
}
function j1(e, t, r) {
  const n = Array.isArray(e);
  if (qe(e) || n)
    for (const i in e)
      Array.isArray(e[i]) || (qe(e[i]) && !F1(e[i]))
        ? Fe(t) || wl(r[i])
          ? (r[i] = Array.isArray(e[i]) ? bl(e[i], []) : { ...bl(e[i]) })
          : j1(e[i], ct(t) ? {} : t[i], r[i])
        : (r[i] = !zn(e[i], t[i]));
  return r;
}
var lo = (e, t) => j1(e, t, bl(t)),
  U1 = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) =>
    Fe(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : r && mr(e)
      ? new Date(e)
      : n
      ? n(e)
      : e;
function sc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
    return _h(t)
      ? t.files
      : Sh(t)
      ? L1(e.refs).value
      : M1(t)
      ? [...t.selectedOptions].map(({ value: r }) => r)
      : $a(t)
      ? $1(e.refs).value
      : U1(Fe(t.value) ? e.ref.value : t.value, e);
}
var zT = (e, t, r, n) => {
    const i = {};
    for (const s of e) {
      const a = Q(t, s);
      a && Pe(i, s, a._f);
    }
    return {
      criteriaMode: r,
      names: [...e],
      fields: i,
      shouldUseNativeValidation: n,
    };
  },
  Ss = (e) =>
    Fe(e)
      ? e
      : yl(e)
      ? e.source
      : qe(e)
      ? yl(e.value)
        ? e.value.source
        : e.value
      : e,
  BT = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function sg(e, t, r) {
  const n = Q(e, r);
  if (n || kh(r)) return { error: n, name: r };
  const i = r.split(".");
  for (; i.length; ) {
    const s = i.join("."),
      a = Q(t, s),
      o = Q(e, s);
    if (a && !Array.isArray(a) && r !== s) return { name: r };
    if (o && o.type) return { name: s, error: o };
    i.pop();
  }
  return { name: r };
}
var WT = (e, t, r, n, i) =>
    i.isOnAll
      ? !1
      : !r && i.isOnTouch
      ? !(t || e)
      : (r ? n.isOnBlur : i.isOnBlur)
      ? !e
      : (r ? n.isOnChange : i.isOnChange)
      ? e
      : !0,
  VT = (e, t) => !lu(Q(e, t)).length && We(e, t);
const HT = {
  mode: ar.onSubmit,
  reValidateMode: ar.onChange,
  shouldFocusError: !0,
};
function qT(e = {}) {
  let t = { ...HT, ...e },
    r = {
      submitCount: 0,
      isDirty: !1,
      isLoading: nn(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    n = {},
    i =
      qe(t.defaultValues) || qe(t.values)
        ? Ft(t.defaultValues || t.values) || {}
        : {},
    s = t.shouldUnregister ? {} : Ft(i),
    a = { action: !1, mount: !1, watch: !1 },
    o = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    l,
    u = 0;
  const c = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    d = { values: nc(), array: nc(), state: nc() },
    h = Jm(t.mode),
    m = Jm(t.reValidateMode),
    y = t.criteriaMode === ar.all,
    w = (b) => (C) => {
      clearTimeout(u), (u = setTimeout(b, C));
    },
    k = async (b) => {
      if (c.isValid || b) {
        const C = t.resolver ? Ct((await T()).errors) : await z(n, !0);
        C !== r.isValid && d.state.next({ isValid: C });
      }
    },
    p = (b, C) => {
      (c.isValidating || c.validatingFields) &&
        ((b || Array.from(o.mount)).forEach((P) => {
          P && (C ? Pe(r.validatingFields, P, C) : We(r.validatingFields, P));
        }),
        d.state.next({
          validatingFields: r.validatingFields,
          isValidating: !Ct(r.validatingFields),
        }));
    },
    f = (b, C = [], P, U, L = !0, N = !0) => {
      if (U && P) {
        if (((a.action = !0), N && Array.isArray(Q(n, b)))) {
          const D = P(Q(n, b), U.argA, U.argB);
          L && Pe(n, b, D);
        }
        if (N && Array.isArray(Q(r.errors, b))) {
          const D = P(Q(r.errors, b), U.argA, U.argB);
          L && Pe(r.errors, b, D), VT(r.errors, b);
        }
        if (c.touchedFields && N && Array.isArray(Q(r.touchedFields, b))) {
          const D = P(Q(r.touchedFields, b), U.argA, U.argB);
          L && Pe(r.touchedFields, b, D);
        }
        c.dirtyFields && (r.dirtyFields = lo(i, s)),
          d.state.next({
            name: b,
            isDirty: V(b, C),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          });
      } else Pe(s, b, C);
    },
    v = (b, C) => {
      Pe(r.errors, b, C), d.state.next({ errors: r.errors });
    },
    _ = (b) => {
      (r.errors = b), d.state.next({ errors: r.errors, isValid: !1 });
    },
    S = (b, C, P, U) => {
      const L = Q(n, b);
      if (L) {
        const N = Q(s, b, Fe(P) ? Q(i, b) : P);
        Fe(N) || (U && U.defaultChecked) || C
          ? Pe(s, b, C ? N : sc(L._f))
          : Z(b, N),
          a.mount && k();
      }
    },
    R = (b, C, P, U, L) => {
      let N = !1,
        D = !1;
      const X = { name: b },
        Ae = !!(Q(n, b) && Q(n, b)._f && Q(n, b)._f.disabled);
      if (!P || U) {
        c.isDirty &&
          ((D = r.isDirty),
          (r.isDirty = X.isDirty = V()),
          (N = D !== X.isDirty));
        const Je = Ae || zn(Q(i, b), C);
        (D = !!(!Ae && Q(r.dirtyFields, b))),
          Je || Ae ? We(r.dirtyFields, b) : Pe(r.dirtyFields, b, !0),
          (X.dirtyFields = r.dirtyFields),
          (N = N || (c.dirtyFields && D !== !Je));
      }
      if (P) {
        const Je = Q(r.touchedFields, b);
        Je ||
          (Pe(r.touchedFields, b, P),
          (X.touchedFields = r.touchedFields),
          (N = N || (c.touchedFields && Je !== P)));
      }
      return N && L && d.state.next(X), N ? X : {};
    },
    O = (b, C, P, U) => {
      const L = Q(r.errors, b),
        N = c.isValid && Zr(C) && r.isValid !== C;
      if (
        (e.delayError && P
          ? ((l = w(() => v(b, P))), l(e.delayError))
          : (clearTimeout(u),
            (l = null),
            P ? Pe(r.errors, b, P) : We(r.errors, b)),
        (P ? !zn(L, P) : L) || !Ct(U) || N)
      ) {
        const D = {
          ...U,
          ...(N && Zr(C) ? { isValid: C } : {}),
          errors: r.errors,
          name: b,
        };
        (r = { ...r, ...D }), d.state.next(D);
      }
    },
    T = async (b) => {
      p(b, !0);
      const C = await t.resolver(
        s,
        t.context,
        zT(b || o.mount, n, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return p(b), C;
    },
    q = async (b) => {
      const { errors: C } = await T(b);
      if (b)
        for (const P of b) {
          const U = Q(C, P);
          U ? Pe(r.errors, P, U) : We(r.errors, P);
        }
      else r.errors = C;
      return C;
    },
    z = async (b, C, P = { valid: !0 }) => {
      for (const U in b) {
        const L = b[U];
        if (L) {
          const { _f: N, ...D } = L;
          if (N) {
            const X = o.array.has(N.name);
            p([U], !0);
            const Ae = await ig(L, s, y, t.shouldUseNativeValidation && !C, X);
            if ((p([U]), Ae[N.name] && ((P.valid = !1), C))) break;
            !C &&
              (Q(Ae, N.name)
                ? X
                  ? MT(r.errors, Ae, N.name)
                  : Pe(r.errors, N.name, Ae[N.name])
                : We(r.errors, N.name));
          }
          D && (await z(D, C, P));
        }
      }
      return P.valid;
    },
    he = () => {
      for (const b of o.unMount) {
        const C = Q(n, b);
        C &&
          (C._f.refs ? C._f.refs.every((P) => !ic(P)) : !ic(C._f.ref)) &&
          E(b);
      }
      o.unMount = new Set();
    },
    V = (b, C) => (b && C && Pe(s, b, C), !zn(ge(), i)),
    G = (b, C, P) =>
      $T(b, o, { ...(a.mount ? s : Fe(C) ? i : mr(b) ? { [b]: C } : C) }, P, C),
    ne = (b) =>
      lu(Q(a.mount ? s : i, b, e.shouldUnregister ? Q(i, b, []) : [])),
    Z = (b, C, P = {}) => {
      const U = Q(n, b);
      let L = C;
      if (U) {
        const N = U._f;
        N &&
          (!N.disabled && Pe(s, b, U1(C, N)),
          (L = vl(N.ref) && ct(C) ? "" : C),
          M1(N.ref)
            ? [...N.ref.options].forEach(
                (D) => (D.selected = L.includes(D.value))
              )
            : N.refs
            ? $a(N.ref)
              ? N.refs.length > 1
                ? N.refs.forEach(
                    (D) =>
                      (!D.defaultChecked || !D.disabled) &&
                      (D.checked = Array.isArray(L)
                        ? !!L.find((X) => X === D.value)
                        : L === D.value)
                  )
                : N.refs[0] && (N.refs[0].checked = !!L)
              : N.refs.forEach((D) => (D.checked = D.value === L))
            : _h(N.ref)
            ? (N.ref.value = "")
            : ((N.ref.value = L),
              N.ref.type || d.values.next({ name: b, values: { ...s } })));
      }
      (P.shouldDirty || P.shouldTouch) &&
        R(b, L, P.shouldTouch, P.shouldDirty, !0),
        P.shouldValidate && J(b);
    },
    me = (b, C, P) => {
      for (const U in C) {
        const L = C[U],
          N = `${b}.${U}`,
          D = Q(n, N);
        (o.array.has(b) || !wl(L) || (D && !D._f)) && !Ai(L)
          ? me(N, L, P)
          : Z(N, L, P);
      }
    },
    le = (b, C, P = {}) => {
      const U = Q(n, b),
        L = o.array.has(b),
        N = Ft(C);
      Pe(s, b, N),
        L
          ? (d.array.next({ name: b, values: { ...s } }),
            (c.isDirty || c.dirtyFields) &&
              P.shouldDirty &&
              d.state.next({
                name: b,
                dirtyFields: lo(i, s),
                isDirty: V(b, N),
              }))
          : U && !U._f && !ct(N)
          ? me(b, N, P)
          : Z(b, N, P),
        Zm(b, o) && d.state.next({ ...r }),
        d.values.next({ name: a.mount ? b : void 0, values: { ...s } });
    },
    $ = async (b) => {
      a.mount = !0;
      const C = b.target;
      let P = C.name,
        U = !0;
      const L = Q(n, P),
        N = () => (C.type ? sc(L._f) : OT(b)),
        D = (X) => {
          U = Number.isNaN(X) || X === Q(s, P, X);
        };
      if (L) {
        let X, Ae;
        const Je = N(),
          lt = b.type === Xm.BLUR || b.type === Xm.FOCUS_OUT,
          Dw =
            (!BT(L._f) && !t.resolver && !Q(r.errors, P) && !L._f.deps) ||
            WT(lt, Q(r.touchedFields, P), r.isSubmitted, m, h),
          pu = Zm(P, o, lt);
        Pe(s, P, Je),
          lt
            ? (L._f.onBlur && L._f.onBlur(b), l && l(0))
            : L._f.onChange && L._f.onChange(b);
        const mu = R(P, Je, lt, !1),
          Nw = !Ct(mu) || pu;
        if (
          (!lt && d.values.next({ name: P, type: b.type, values: { ...s } }),
          Dw)
        )
          return (
            c.isValid && k(), Nw && d.state.next({ name: P, ...(pu ? {} : mu) })
          );
        if ((!lt && pu && d.state.next({ ...r }), t.resolver)) {
          const { errors: Lh } = await T([P]);
          if ((D(Je), U)) {
            const Iw = sg(r.errors, n, P),
              Mh = sg(Lh, n, Iw.name || P);
            (X = Mh.error), (P = Mh.name), (Ae = Ct(Lh));
          }
        } else
          p([P], !0),
            (X = (await ig(L, s, y, t.shouldUseNativeValidation))[P]),
            p([P]),
            D(Je),
            U && (X ? (Ae = !1) : c.isValid && (Ae = await z(n, !0)));
        U && (L._f.deps && J(L._f.deps), O(P, Ae, X, mu));
      }
    },
    K = (b, C) => {
      if (Q(r.errors, C) && b.focus) return b.focus(), 1;
    },
    J = async (b, C = {}) => {
      let P, U;
      const L = To(b);
      if (t.resolver) {
        const N = await q(Fe(b) ? b : L);
        (P = Ct(N)), (U = b ? !L.some((D) => Q(N, D)) : P);
      } else
        b
          ? ((U = (
              await Promise.all(
                L.map(async (N) => {
                  const D = Q(n, N);
                  return await z(D && D._f ? { [N]: D } : D);
                })
              )
            ).every(Boolean)),
            !(!U && !r.isValid) && k())
          : (U = P = await z(n));
      return (
        d.state.next({
          ...(!mr(b) || (c.isValid && P !== r.isValid) ? {} : { name: b }),
          ...(t.resolver || !b ? { isValid: P } : {}),
          errors: r.errors,
        }),
        C.shouldFocus && !U && Gs(n, K, b ? L : o.mount),
        U
      );
    },
    ge = (b) => {
      const C = { ...(a.mount ? s : i) };
      return Fe(b) ? C : mr(b) ? Q(C, b) : b.map((P) => Q(C, P));
    },
    j = (b, C) => ({
      invalid: !!Q((C || r).errors, b),
      isDirty: !!Q((C || r).dirtyFields, b),
      error: Q((C || r).errors, b),
      isValidating: !!Q(r.validatingFields, b),
      isTouched: !!Q((C || r).touchedFields, b),
    }),
    B = (b) => {
      b && To(b).forEach((C) => We(r.errors, C)),
        d.state.next({ errors: b ? r.errors : {} });
    },
    W = (b, C, P) => {
      const U = (Q(n, b, { _f: {} })._f || {}).ref,
        L = Q(r.errors, b) || {},
        { ref: N, message: D, type: X, ...Ae } = L;
      Pe(r.errors, b, { ...Ae, ...C, ref: U }),
        d.state.next({ name: b, errors: r.errors, isValid: !1 }),
        P && P.shouldFocus && U && U.focus && U.focus();
    },
    ee = (b, C) =>
      nn(b)
        ? d.values.subscribe({ next: (P) => b(G(void 0, C), P) })
        : G(b, C, !0),
    E = (b, C = {}) => {
      for (const P of b ? To(b) : o.mount)
        o.mount.delete(P),
          o.array.delete(P),
          C.keepValue || (We(n, P), We(s, P)),
          !C.keepError && We(r.errors, P),
          !C.keepDirty && We(r.dirtyFields, P),
          !C.keepTouched && We(r.touchedFields, P),
          !C.keepIsValidating && We(r.validatingFields, P),
          !t.shouldUnregister && !C.keepDefaultValue && We(i, P);
      d.values.next({ values: { ...s } }),
        d.state.next({ ...r, ...(C.keepDirty ? { isDirty: V() } : {}) }),
        !C.keepIsValid && k();
    },
    re = ({ disabled: b, name: C, field: P, fields: U, value: L }) => {
      if ((Zr(b) && a.mount) || b) {
        const N = b ? void 0 : Fe(L) ? sc(P ? P._f : Q(U, C)._f) : L;
        Pe(s, C, N), R(C, N, !1, !1, !0);
      }
    },
    M = (b, C = {}) => {
      let P = Q(n, b);
      const U = Zr(C.disabled);
      return (
        Pe(n, b, {
          ...(P || {}),
          _f: {
            ...(P && P._f ? P._f : { ref: { name: b } }),
            name: b,
            mount: !0,
            ...C,
          },
        }),
        o.mount.add(b),
        P
          ? re({ field: P, disabled: C.disabled, name: b, value: C.value })
          : S(b, !0, C.value),
        {
          ...(U ? { disabled: C.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!C.required,
                min: Ss(C.min),
                max: Ss(C.max),
                minLength: Ss(C.minLength),
                maxLength: Ss(C.maxLength),
                pattern: Ss(C.pattern),
              }
            : {}),
          name: b,
          onChange: $,
          onBlur: $,
          ref: (L) => {
            if (L) {
              M(b, C), (P = Q(n, b));
              const N =
                  (Fe(L.value) &&
                    L.querySelectorAll &&
                    L.querySelectorAll("input,select,textarea")[0]) ||
                  L,
                D = UT(N),
                X = P._f.refs || [];
              if (D ? X.find((Ae) => Ae === N) : N === P._f.ref) return;
              Pe(n, b, {
                _f: {
                  ...P._f,
                  ...(D
                    ? {
                        refs: [
                          ...X.filter(ic),
                          N,
                          ...(Array.isArray(Q(i, b)) ? [{}] : []),
                        ],
                        ref: { type: N.type, name: b },
                      }
                    : { ref: N }),
                },
              }),
                S(b, !1, void 0, N);
            } else
              (P = Q(n, b, {})),
                P._f && (P._f.mount = !1),
                (t.shouldUnregister || C.shouldUnregister) &&
                  !(AT(o.array, b) && a.action) &&
                  o.unMount.add(b);
          },
        }
      );
    },
    Ce = () => t.shouldFocusError && Gs(n, K, o.mount),
    de = (b) => {
      Zr(b) &&
        (d.state.next({ disabled: b }),
        Gs(
          n,
          (C, P) => {
            const U = Q(n, P);
            U &&
              ((C.disabled = U._f.disabled || b),
              Array.isArray(U._f.refs) &&
                U._f.refs.forEach((L) => {
                  L.disabled = U._f.disabled || b;
                }));
          },
          0,
          !1
        ));
    },
    fe = (b, C) => async (P) => {
      let U;
      P && (P.preventDefault && P.preventDefault(), P.persist && P.persist());
      let L = Ft(s);
      if ((d.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: N, values: D } = await T();
        (r.errors = N), (L = D);
      } else await z(n);
      if ((We(r.errors, "root"), Ct(r.errors))) {
        d.state.next({ errors: {} });
        try {
          await b(L, P);
        } catch (N) {
          U = N;
        }
      } else C && (await C({ ...r.errors }, P)), Ce(), setTimeout(Ce);
      if (
        (d.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Ct(r.errors) && !U,
          submitCount: r.submitCount + 1,
          errors: r.errors,
        }),
        U)
      )
        throw U;
    },
    te = (b, C = {}) => {
      Q(n, b) &&
        (Fe(C.defaultValue)
          ? le(b, Ft(Q(i, b)))
          : (le(b, C.defaultValue), Pe(i, b, Ft(C.defaultValue))),
        C.keepTouched || We(r.touchedFields, b),
        C.keepDirty ||
          (We(r.dirtyFields, b),
          (r.isDirty = C.defaultValue ? V(b, Ft(Q(i, b))) : V())),
        C.keepError || (We(r.errors, b), c.isValid && k()),
        d.state.next({ ...r }));
    },
    ze = (b, C = {}) => {
      const P = b ? Ft(b) : i,
        U = Ft(P),
        L = Ct(b),
        N = L ? i : U;
      if ((C.keepDefaultValues || (i = P), !C.keepValues)) {
        if (C.keepDirtyValues)
          for (const D of o.mount)
            Q(r.dirtyFields, D) ? Pe(N, D, Q(s, D)) : le(D, Q(N, D));
        else {
          if (bh && Fe(b))
            for (const D of o.mount) {
              const X = Q(n, D);
              if (X && X._f) {
                const Ae = Array.isArray(X._f.refs) ? X._f.refs[0] : X._f.ref;
                if (vl(Ae)) {
                  const Je = Ae.closest("form");
                  if (Je) {
                    Je.reset();
                    break;
                  }
                }
              }
            }
          n = {};
        }
        (s = e.shouldUnregister ? (C.keepDefaultValues ? Ft(i) : {}) : Ft(N)),
          d.array.next({ values: { ...N } }),
          d.values.next({ values: { ...N } });
      }
      (o = {
        mount: C.keepDirtyValues ? o.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (a.mount = !c.isValid || !!C.keepIsValid || !!C.keepDirtyValues),
        (a.watch = !!e.shouldUnregister),
        d.state.next({
          submitCount: C.keepSubmitCount ? r.submitCount : 0,
          isDirty: L
            ? !1
            : C.keepDirty
            ? r.isDirty
            : !!(C.keepDefaultValues && !zn(b, i)),
          isSubmitted: C.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: L
            ? {}
            : C.keepDirtyValues
            ? C.keepDefaultValues && s
              ? lo(i, s)
              : r.dirtyFields
            : C.keepDefaultValues && b
            ? lo(i, b)
            : C.keepDirty
            ? r.dirtyFields
            : {},
          touchedFields: C.keepTouched ? r.touchedFields : {},
          errors: C.keepErrors ? r.errors : {},
          isSubmitSuccessful: C.keepIsSubmitSuccessful
            ? r.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    Ke = (b, C) => ze(nn(b) ? b(s) : b, C);
  return {
    control: {
      register: M,
      unregister: E,
      getFieldState: j,
      handleSubmit: fe,
      setError: W,
      _executeSchema: T,
      _getWatch: G,
      _getDirty: V,
      _updateValid: k,
      _removeUnmounted: he,
      _updateFieldArray: f,
      _updateDisabledField: re,
      _getFieldArray: ne,
      _reset: ze,
      _resetDefaultValues: () =>
        nn(t.defaultValues) &&
        t.defaultValues().then((b) => {
          Ke(b, t.resetOptions), d.state.next({ isLoading: !1 });
        }),
      _updateFormState: (b) => {
        r = { ...r, ...b };
      },
      _disableForm: de,
      _subjects: d,
      _proxyFormState: c,
      _setErrors: _,
      get _fields() {
        return n;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return a;
      },
      set _state(b) {
        a = b;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return o;
      },
      set _names(b) {
        o = b;
      },
      get _formState() {
        return r;
      },
      set _formState(b) {
        r = b;
      },
      get _options() {
        return t;
      },
      set _options(b) {
        t = { ...t, ...b };
      },
    },
    trigger: J,
    register: M,
    handleSubmit: fe,
    watch: ee,
    setValue: le,
    getValues: ge,
    reset: Ke,
    resetField: te,
    clearErrors: B,
    unregister: E,
    setError: W,
    setFocus: (b, C = {}) => {
      const P = Q(n, b),
        U = P && P._f;
      if (U) {
        const L = U.refs ? U.refs[0] : U.ref;
        L.focus && (L.focus(), C.shouldSelect && L.select());
      }
    },
    getFieldState: j,
  };
}
function z1(e = {}) {
  const t = be.useRef(),
    r = be.useRef(),
    [n, i] = be.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: nn(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: nn(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...qT(e), formState: n });
  const s = t.current.control;
  return (
    (s._options = e),
    IT({
      subject: s._subjects.state,
      next: (a) => {
        NT(a, s._proxyFormState, s._updateFormState, !0) &&
          i({ ...s._formState });
      },
    }),
    be.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]),
    be.useEffect(() => {
      if (s._proxyFormState.isDirty) {
        const a = s._getDirty();
        a !== n.isDirty && s._subjects.state.next({ isDirty: a });
      }
    }, [s, n.isDirty]),
    be.useEffect(() => {
      e.values && !zn(e.values, r.current)
        ? (s._reset(e.values, s._options.resetOptions),
          (r.current = e.values),
          i((a) => ({ ...a })))
        : s._resetDefaultValues();
    }, [e.values, s]),
    be.useEffect(() => {
      e.errors && s._setErrors(e.errors);
    }, [e.errors, s]),
    be.useEffect(() => {
      s._state.mount || (s._updateValid(), (s._state.mount = !0)),
        s._state.watch &&
          ((s._state.watch = !1), s._subjects.state.next({ ...s._formState })),
        s._removeUnmounted();
    }),
    be.useEffect(() => {
      e.shouldUnregister && s._subjects.values.next({ values: s._getWatch() });
    }, [e.shouldUnregister, s]),
    (t.current.formState = DT(n, s)),
    t.current
  );
}
const yt = F.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  /* width: 500px; */
`,
  uu = F.form`
  ${(e) =>
    e.type === "regular" &&
    tt`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(e) =>
    e.type === "modal" &&
    tt`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;
uu.defaultProps = { type: "regular" };
const B1 = F.textarea`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  width: 100%;
  height: 8rem;
  max-height: 120px;
  min-height: 66px;
`,
  fi = F.div`
  display: grid;
  align-items: center;
  grid-template-columns: 30rem 2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;
  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`,
  hi = F.label`
  font-weight: 500;
`,
  xs = F.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`,
  QT = F.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.3); */
  z-index: 9999;
`,
  Cs = F.div`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
`;
function YT({ setShowCabin: e, cabin: t = {} }) {
  const { id: r, ...n } = t,
    [i, s] = x.useState(n.image);
  x.useState(null);
  const [a, o] = x.useState(n.image),
    l = x.useRef(null),
    u = () => {
      l.current.click();
    },
    c = async (O) => {
      const T = O.target.files[0];
      o(T);
      const q = URL.createObjectURL(T);
      s(q);
    },
    d = !!r,
    h = Xt(),
    {
      register: m,
      handleSubmit: y,
      reset: w,
      getValues: k,
      formState: p,
    } = z1({ defaultValues: d ? n : {} }),
    { errors: f } = p,
    { mutate: v, isLoading: _ } = jr({
      mutationFn: ({ newCabinData: O, id: T }) => gh(O, T),
      onSuccess: () => {
        Dt.success("New cabin successfully updated"),
          h.invalidateQueries({ queryKey: ["cabin"] }),
          w(),
          e(!1);
      },
      onError: (O) => Dt.error(O.message),
    });
  return g(yh, {
    children: g(vh, {
      children: g(QT, {
        children: A(uu, {
          onSubmit: y(
            (O) => {
              v({ newCabinData: { ...O, image: a }, id: r });
            },
            (O) => {
              console.log(O);
            }
          ),
          children: [
            A(fi, {
              children: [
                g(hi, { htmlFor: "name", children: "Cabin name" }),
                A(Cs, {
                  children: [
                    g(yt, {
                      type: "text",
                      id: "name",
                      ...m("name", { required: "Cabin name is required" }),
                      disabled: _,
                    }),
                    (f == null ? void 0 : f.name) &&
                      g(xs, { children: f.name.message }),
                  ],
                }),
              ],
            }),
            A(fi, {
              children: [
                g(hi, { htmlFor: "maxCapacity", children: "Maximum capacity" }),
                A(Cs, {
                  children: [
                    g(yt, {
                      type: "number",
                      id: "maxCapacity",
                      ...m("maxCapacity", {
                        required: "MaxCapacity name is required",
                        min: {
                          value: 1,
                          message:
                            "MaxCapacity must be greater than or equal to 1",
                        },
                      }),
                      disabled: _,
                    }),
                    (f == null ? void 0 : f.maxCapacity) &&
                      g(xs, { children: f.maxCapacity.message }),
                  ],
                }),
              ],
            }),
            A(fi, {
              children: [
                g(hi, { htmlFor: "regularPrice", children: "Regular price" }),
                A(Cs, {
                  children: [
                    g(yt, {
                      type: "number",
                      id: "regularPrice",
                      disabled: _,
                      ...m("regularPrice", {
                        required: "Regular price is required",
                        min: {
                          value: 1,
                          message:
                            "Regular price must be greater than or equal to 1",
                        },
                      }),
                    }),
                    (f == null ? void 0 : f.regularPrice) &&
                      g(xs, { children: f.regularPrice.message }),
                  ],
                }),
              ],
            }),
            A(fi, {
              children: [
                g(hi, { htmlFor: "discount", children: "Discount" }),
                A(Cs, {
                  children: [
                    g(yt, {
                      type: "number",
                      id: "discount",
                      disabled: _,
                      defaultValue: 0,
                      ...m("discount", {
                        required: "Can't be empty, make it at least 0",
                        validate: (O) =>
                          parseFloat(k().regularPrice) >= parseFloat(O) ||
                          "Discount should be less than regular price",
                      }),
                    }),
                    (f == null ? void 0 : f.discount) &&
                      g(xs, { children: f.discount.message }),
                  ],
                }),
              ],
            }),
            A(fi, {
              children: [
                g(hi, {
                  htmlFor: "description",
                  children: "Description for website",
                }),
                A(Cs, {
                  children: [
                    g(B1, {
                      type: "number",
                      id: "description",
                      disabled: _,
                      defaultValue: "",
                      ...m("description", {
                        required: "Description name is required",
                      }),
                    }),
                    (f == null ? void 0 : f.description) &&
                      g(xs, { children: f.description.message }),
                  ],
                }),
              ],
            }),
            A("div", {
              children: [
                g(hi, { htmlFor: "image", children: "Cabin photo" }),
                A("div", {
                  className: "p-2",
                  children: [
                    g("input", {
                      type: "file",
                      ref: l,
                      accept: "image/*",
                      style: { display: "none" },
                      onChange: c,
                    }),
                    A("div", {
                      className: "border-dashed border-2 border-indigo-600",
                      children: [
                        g("span", {
                          className: "flex justify-center py-3 cursor-pointer",
                          onClick: u,
                          children: "Upload img",
                        }),
                        g("img", {
                          src: i,
                          alt: "",
                          width: "200px",
                          className: "m-auto py-2 max-h-[200px] ",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            A(fi, {
              children: [
                g(ft, {
                  variation: "secondary",
                  type: "reset",
                  onClick: () => e(!1),
                  children: "Cancel",
                }),
                g(ft, { disabled: _, children: "Update cabin" }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
}
const ag = () => {};
let xh = {},
  W1 = {},
  V1 = null,
  H1 = { mark: ag, measure: ag };
try {
  typeof window < "u" && (xh = window),
    typeof document < "u" && (W1 = document),
    typeof MutationObserver < "u" && (V1 = MutationObserver),
    typeof performance < "u" && (H1 = performance);
} catch {}
const { userAgent: og = "" } = xh.navigator || {},
  bn = xh,
  Te = W1,
  lg = V1,
  uo = H1;
bn.document;
const Ur =
    !!Te.documentElement &&
    !!Te.head &&
    typeof Te.addEventListener == "function" &&
    typeof Te.createElement == "function",
  q1 = ~og.indexOf("MSIE") || ~og.indexOf("Trident/");
var De = "classic",
  Q1 = "duotone",
  Tt = "sharp",
  At = "sharp-duotone",
  GT = [De, Q1, Tt, At],
  KT = {
    classic: { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" },
    sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
    "sharp-duotone": { 900: "fasds" },
  },
  ug = {
    kit: { fak: "kit", "fa-kit": "kit" },
    "kit-duotone": { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
  },
  XT = ["kit"],
  JT = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,
  ZT =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
  eA = {
    "Font Awesome 5 Free": { 900: "fas", 400: "far" },
    "Font Awesome 5 Pro": { 900: "fas", 400: "far", normal: "far", 300: "fal" },
    "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 5 Duotone": { 900: "fad" },
  },
  tA = {
    "Font Awesome 6 Free": { 900: "fas", 400: "far" },
    "Font Awesome 6 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    },
    "Font Awesome 6 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 6 Duotone": { 900: "fad" },
    "Font Awesome 6 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast",
    },
    "Font Awesome 6 Sharp Duotone": { 900: "fasds" },
  },
  rA = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast",
    },
    "sharp-duotone": { "fa-solid": "fasds" },
  },
  nA = {
    classic: ["fas", "far", "fal", "fat"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds"],
  },
  iA = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin",
    },
    "sharp-duotone": { fasds: "fa-solid" },
  },
  sA = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
    },
    sharp: { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" },
    "sharp-duotone": { solid: "fasds" },
  },
  Y1 = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin",
    },
    "sharp-duotone": { fa: "solid", fasds: "solid", "fa-solid": "solid" },
  },
  aA = ["solid", "regular", "light", "thin", "duotone", "brands"],
  G1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  oA = G1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  Is = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  lA = [
    ...Object.keys(nA),
    ...aA,
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "beat",
    "border",
    "fade",
    "beat-fade",
    "bounce",
    "flip-both",
    "flip-horizontal",
    "flip-vertical",
    "flip",
    "fw",
    "inverse",
    "layers-counter",
    "layers-text",
    "layers",
    "li",
    "pull-left",
    "pull-right",
    "pulse",
    "rotate-180",
    "rotate-270",
    "rotate-90",
    "rotate-by",
    "shake",
    "spin-pulse",
    "spin-reverse",
    "spin",
    "stack-1x",
    "stack-2x",
    "stack",
    "ul",
    Is.GROUP,
    Is.SWAP_OPACITY,
    Is.PRIMARY,
    Is.SECONDARY,
  ]
    .concat(G1.map((e) => "".concat(e, "x")))
    .concat(oA.map((e) => "w-".concat(e))),
  uA = {
    "Font Awesome Kit": { 400: "fak", normal: "fak" },
    "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
  },
  cA = {
    kit: { "fa-kit": "fak" },
    "kit-duotone": { "fa-kit-duotone": "fakd" },
  },
  dA = { kit: { fak: "fa-kit" }, "kit-duotone": { fakd: "fa-kit-duotone" } },
  cg = { kit: { kit: "fak" }, "kit-duotone": { "kit-duotone": "fakd" } };
const $r = "___FONT_AWESOME___",
  Rd = 16,
  K1 = "fa",
  X1 = "svg-inline--fa",
  Zn = "data-fa-i2svg",
  Dd = "data-fa-pseudo-element",
  fA = "data-fa-pseudo-element-pending",
  Ch = "data-prefix",
  Eh = "data-icon",
  dg = "fontawesome-i2svg",
  hA = "async",
  pA = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  J1 = (() => {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  Z1 = [De, Tt, At];
function La(e) {
  return new Proxy(e, {
    get(t, r) {
      return r in t ? t[r] : t[De];
    },
  });
}
const ew = { ...Y1 };
ew[De] = { ...Y1[De], ...ug.kit, ...ug["kit-duotone"] };
const Hn = La(ew),
  Nd = { ...sA };
Nd[De] = { ...Nd[De], ...cg.kit, ...cg["kit-duotone"] };
const ba = La(Nd),
  Id = { ...iA };
Id[De] = { ...Id[De], ...dA.kit };
const qn = La(Id),
  $d = { ...rA };
$d[De] = { ...$d[De], ...cA.kit };
const mA = La($d),
  gA = JT,
  tw = "fa-layers-text",
  vA = ZT,
  yA = { ...KT };
La(yA);
const wA = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  ac = Is,
  Ji = new Set();
Object.keys(ba[De]).map(Ji.add.bind(Ji));
Object.keys(ba[Tt]).map(Ji.add.bind(Ji));
Object.keys(ba[At]).map(Ji.add.bind(Ji));
const bA = [...XT, ...lA],
  Ks = bn.FontAwesomeConfig || {};
function kA(e) {
  var t = Te.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function _A(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
Te &&
  typeof Te.querySelector == "function" &&
  [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ].forEach((t) => {
    let [r, n] = t;
    const i = _A(kA(r));
    i != null && (Ks[n] = i);
  });
const rw = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: K1,
  replacementClass: X1,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
Ks.familyPrefix && (Ks.cssPrefix = Ks.familyPrefix);
const Zi = { ...rw, ...Ks };
Zi.autoReplaceSvg || (Zi.observeMutations = !1);
const Y = {};
Object.keys(rw).forEach((e) => {
  Object.defineProperty(Y, e, {
    enumerable: !0,
    set: function (t) {
      (Zi[e] = t), Xs.forEach((r) => r(Y));
    },
    get: function () {
      return Zi[e];
    },
  });
});
Object.defineProperty(Y, "familyPrefix", {
  enumerable: !0,
  set: function (e) {
    (Zi.cssPrefix = e), Xs.forEach((t) => t(Y));
  },
  get: function () {
    return Zi.cssPrefix;
  },
});
bn.FontAwesomeConfig = Y;
const Xs = [];
function SA(e) {
  return (
    Xs.push(e),
    () => {
      Xs.splice(Xs.indexOf(e), 1);
    }
  );
}
const Wr = Rd,
  gr = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function xA(e) {
  if (!e || !Ur) return;
  const t = Te.createElement("style");
  t.setAttribute("type", "text/css"), (t.innerHTML = e);
  const r = Te.head.childNodes;
  let n = null;
  for (let i = r.length - 1; i > -1; i--) {
    const s = r[i],
      a = (s.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(a) > -1 && (n = s);
  }
  return Te.head.insertBefore(t, n), e;
}
const CA = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ka() {
  let e = 12,
    t = "";
  for (; e-- > 0; ) t += CA[(Math.random() * 62) | 0];
  return t;
}
function us(e) {
  const t = [];
  for (let r = (e || []).length >>> 0; r--; ) t[r] = e[r];
  return t;
}
function Ph(e) {
  return e.classList
    ? us(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function nw(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function EA(e) {
  return Object.keys(e || {})
    .reduce((t, r) => t + "".concat(r, '="').concat(nw(e[r]), '" '), "")
    .trim();
}
function cu(e) {
  return Object.keys(e || {}).reduce(
    (t, r) => t + "".concat(r, ": ").concat(e[r].trim(), ";"),
    ""
  );
}
function Oh(e) {
  return (
    e.size !== gr.size ||
    e.x !== gr.x ||
    e.y !== gr.y ||
    e.rotate !== gr.rotate ||
    e.flipX ||
    e.flipY
  );
}
function PA(e) {
  let { transform: t, containerWidth: r, iconWidth: n } = e;
  const i = { transform: "translate(".concat(r / 2, " 256)") },
    s = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    a = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    o = "rotate(".concat(t.rotate, " 0 0)"),
    l = { transform: "".concat(s, " ").concat(a, " ").concat(o) },
    u = { transform: "translate(".concat((n / 2) * -1, " -256)") };
  return { outer: i, inner: l, path: u };
}
function OA(e) {
  let {
      transform: t,
      width: r = Rd,
      height: n = Rd,
      startCentered: i = !1,
    } = e,
    s = "";
  return (
    i && q1
      ? (s += "translate("
          .concat(t.x / Wr - r / 2, "em, ")
          .concat(t.y / Wr - n / 2, "em) "))
      : i
      ? (s += "translate(calc(-50% + "
          .concat(t.x / Wr, "em), calc(-50% + ")
          .concat(t.y / Wr, "em)) "))
      : (s += "translate(".concat(t.x / Wr, "em, ").concat(t.y / Wr, "em) ")),
    (s += "scale("
      .concat((t.size / Wr) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / Wr) * (t.flipY ? -1 : 1), ") ")),
    (s += "rotate(".concat(t.rotate, "deg) ")),
    s
  );
}
var TA = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function iw() {
  const e = K1,
    t = X1,
    r = Y.cssPrefix,
    n = Y.replacementClass;
  let i = TA;
  if (r !== e || n !== t) {
    const s = new RegExp("\\.".concat(e, "\\-"), "g"),
      a = new RegExp("\\--".concat(e, "\\-"), "g"),
      o = new RegExp("\\.".concat(t), "g");
    i = i
      .replace(s, ".".concat(r, "-"))
      .replace(a, "--".concat(r, "-"))
      .replace(o, ".".concat(n));
  }
  return i;
}
let fg = !1;
function oc() {
  Y.autoAddCss && !fg && (xA(iw()), (fg = !0));
}
var AA = {
  mixout() {
    return { dom: { css: iw, insertCss: oc } };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        oc();
      },
      beforeI2svg() {
        oc();
      },
    };
  },
};
const Lr = bn || {};
Lr[$r] || (Lr[$r] = {});
Lr[$r].styles || (Lr[$r].styles = {});
Lr[$r].hooks || (Lr[$r].hooks = {});
Lr[$r].shims || (Lr[$r].shims = []);
var vr = Lr[$r];
const sw = [],
  aw = function () {
    Te.removeEventListener("DOMContentLoaded", aw),
      (kl = 1),
      sw.map((e) => e());
  };
let kl = !1;
Ur &&
  ((kl = (Te.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    Te.readyState
  )),
  kl || Te.addEventListener("DOMContentLoaded", aw));
function RA(e) {
  Ur && (kl ? setTimeout(e, 0) : sw.push(e));
}
function Ma(e) {
  const { tag: t, attributes: r = {}, children: n = [] } = e;
  return typeof e == "string"
    ? nw(e)
    : "<"
        .concat(t, " ")
        .concat(EA(r), ">")
        .concat(n.map(Ma).join(""), "</")
        .concat(t, ">");
}
function hg(e, t, r) {
  if (e && e[t] && e[t][r]) return { prefix: t, iconName: r, icon: e[t][r] };
}
var DA = function (t, r) {
    return function (n, i, s, a) {
      return t.call(r, n, i, s, a);
    };
  },
  lc = function (t, r, n, i) {
    var s = Object.keys(t),
      a = s.length,
      o = i !== void 0 ? DA(r, i) : r,
      l,
      u,
      c;
    for (
      n === void 0 ? ((l = 1), (c = t[s[0]])) : ((l = 0), (c = n));
      l < a;
      l++
    )
      (u = s[l]), (c = o(c, t[u], u, t));
    return c;
  };
function NA(e) {
  const t = [];
  let r = 0;
  const n = e.length;
  for (; r < n; ) {
    const i = e.charCodeAt(r++);
    if (i >= 55296 && i <= 56319 && r < n) {
      const s = e.charCodeAt(r++);
      (s & 64512) == 56320
        ? t.push(((i & 1023) << 10) + (s & 1023) + 65536)
        : (t.push(i), r--);
    } else t.push(i);
  }
  return t;
}
function Ld(e) {
  const t = NA(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function IA(e, t) {
  const r = e.length;
  let n = e.charCodeAt(t),
    i;
  return n >= 55296 &&
    n <= 56319 &&
    r > t + 1 &&
    ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (n - 55296) * 1024 + i - 56320 + 65536
    : n;
}
function pg(e) {
  return Object.keys(e).reduce((t, r) => {
    const n = e[r];
    return !!n.icon ? (t[n.iconName] = n.icon) : (t[r] = n), t;
  }, {});
}
function Md(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { skipHooks: n = !1 } = r,
    i = pg(t);
  typeof vr.hooks.addPack == "function" && !n
    ? vr.hooks.addPack(e, pg(t))
    : (vr.styles[e] = { ...(vr.styles[e] || {}), ...i }),
    e === "fas" && Md("fa", t);
}
const { styles: Ln, shims: $A } = vr,
  LA = {
    [De]: Object.values(qn[De]),
    [Tt]: Object.values(qn[Tt]),
    [At]: Object.values(qn[At]),
  };
let Th = null,
  ow = {},
  lw = {},
  uw = {},
  cw = {},
  dw = {};
const MA = {
  [De]: Object.keys(Hn[De]),
  [Tt]: Object.keys(Hn[Tt]),
  [At]: Object.keys(Hn[At]),
};
function FA(e) {
  return ~bA.indexOf(e);
}
function jA(e, t) {
  const r = t.split("-"),
    n = r[0],
    i = r.slice(1).join("-");
  return n === e && i !== "" && !FA(i) ? i : null;
}
const fw = () => {
  const e = (n) => lc(Ln, (i, s, a) => ((i[a] = lc(s, n, {})), i), {});
  (ow = e(
    (n, i, s) => (
      i[3] && (n[i[3]] = s),
      i[2] &&
        i[2]
          .filter((o) => typeof o == "number")
          .forEach((o) => {
            n[o.toString(16)] = s;
          }),
      n
    )
  )),
    (lw = e(
      (n, i, s) => (
        (n[s] = s),
        i[2] &&
          i[2]
            .filter((o) => typeof o == "string")
            .forEach((o) => {
              n[o] = s;
            }),
        n
      )
    )),
    (dw = e((n, i, s) => {
      const a = i[2];
      return (
        (n[s] = s),
        a.forEach((o) => {
          n[o] = s;
        }),
        n
      );
    }));
  const t = "far" in Ln || Y.autoFetchSvg,
    r = lc(
      $A,
      (n, i) => {
        const s = i[0];
        let a = i[1];
        const o = i[2];
        return (
          a === "far" && !t && (a = "fas"),
          typeof s == "string" && (n.names[s] = { prefix: a, iconName: o }),
          typeof s == "number" &&
            (n.unicodes[s.toString(16)] = { prefix: a, iconName: o }),
          n
        );
      },
      { names: {}, unicodes: {} }
    );
  (uw = r.names),
    (cw = r.unicodes),
    (Th = du(Y.styleDefault, { family: Y.familyDefault }));
};
SA((e) => {
  Th = du(e.styleDefault, { family: Y.familyDefault });
});
fw();
function Ah(e, t) {
  return (ow[e] || {})[t];
}
function UA(e, t) {
  return (lw[e] || {})[t];
}
function sn(e, t) {
  return (dw[e] || {})[t];
}
function hw(e) {
  return uw[e] || { prefix: null, iconName: null };
}
function zA(e) {
  const t = cw[e],
    r = Ah("fas", e);
  return (
    t ||
    (r ? { prefix: "fas", iconName: r } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function kn() {
  return Th;
}
const Rh = () => ({ prefix: null, iconName: null, rest: [] });
function du(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { family: r = De } = t,
    n = Hn[r][e],
    i = ba[r][e] || ba[r][n],
    s = e in vr.styles ? e : null;
  return i || s || null;
}
const BA = {
  [De]: Object.keys(qn[De]),
  [Tt]: Object.keys(qn[Tt]),
  [At]: Object.keys(qn[At]),
};
function fu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { skipLookups: r = !1 } = t,
    n = {
      [De]: "".concat(Y.cssPrefix, "-").concat(De),
      [Tt]: "".concat(Y.cssPrefix, "-").concat(Tt),
      [At]: "".concat(Y.cssPrefix, "-").concat(At),
    };
  let i = null,
    s = De;
  const a = GT.filter((l) => l !== Q1);
  a.forEach((l) => {
    (e.includes(n[l]) || e.some((u) => BA[l].includes(u))) && (s = l);
  });
  const o = e.reduce((l, u) => {
    const c = jA(Y.cssPrefix, u);
    if (
      (Ln[u]
        ? ((u = LA[s].includes(u) ? mA[s][u] : u), (i = u), (l.prefix = u))
        : MA[s].indexOf(u) > -1
        ? ((i = u), (l.prefix = du(u, { family: s })))
        : c
        ? (l.iconName = c)
        : u !== Y.replacementClass &&
          !a.some((d) => u === n[d]) &&
          l.rest.push(u),
      !r && l.prefix && l.iconName)
    ) {
      const d = i === "fa" ? hw(l.iconName) : {},
        h = sn(l.prefix, l.iconName);
      d.prefix && (i = null),
        (l.iconName = d.iconName || h || l.iconName),
        (l.prefix = d.prefix || l.prefix),
        l.prefix === "far" &&
          !Ln.far &&
          Ln.fas &&
          !Y.autoFetchSvg &&
          (l.prefix = "fas");
    }
    return l;
  }, Rh());
  return (
    (e.includes("fa-brands") || e.includes("fab")) && (o.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (o.prefix = "fad"),
    !o.prefix &&
      s === Tt &&
      (Ln.fass || Y.autoFetchSvg) &&
      ((o.prefix = "fass"),
      (o.iconName = sn(o.prefix, o.iconName) || o.iconName)),
    !o.prefix &&
      s === At &&
      (Ln.fasds || Y.autoFetchSvg) &&
      ((o.prefix = "fasds"),
      (o.iconName = sn(o.prefix, o.iconName) || o.iconName)),
    (o.prefix === "fa" || i === "fa") && (o.prefix = kn() || "fas"),
    o
  );
}
class WA {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    const i = r.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((s) => {
      (this.definitions[s] = { ...(this.definitions[s] || {}), ...i[s] }),
        Md(s, i[s]);
      const a = qn[De][s];
      a && Md(a, i[s]), fw();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, r) {
    const n = r.prefix && r.iconName && r.icon ? { 0: r } : r;
    return (
      Object.keys(n).map((i) => {
        const { prefix: s, iconName: a, icon: o } = n[i],
          l = o[2];
        t[s] || (t[s] = {}),
          l.length > 0 &&
            l.forEach((u) => {
              typeof u == "string" && (t[s][u] = o);
            }),
          (t[s][a] = o);
      }),
      t
    );
  }
}
let mg = [],
  Ri = {};
const Ui = {},
  VA = Object.keys(Ui);
function HA(e, t) {
  let { mixoutsTo: r } = t;
  return (
    (mg = e),
    (Ri = {}),
    Object.keys(Ui).forEach((n) => {
      VA.indexOf(n) === -1 && delete Ui[n];
    }),
    mg.forEach((n) => {
      const i = n.mixout ? n.mixout() : {};
      if (
        (Object.keys(i).forEach((s) => {
          typeof i[s] == "function" && (r[s] = i[s]),
            typeof i[s] == "object" &&
              Object.keys(i[s]).forEach((a) => {
                r[s] || (r[s] = {}), (r[s][a] = i[s][a]);
              });
        }),
        n.hooks)
      ) {
        const s = n.hooks();
        Object.keys(s).forEach((a) => {
          Ri[a] || (Ri[a] = []), Ri[a].push(s[a]);
        });
      }
      n.provides && n.provides(Ui);
    }),
    r
  );
}
function Fd(e, t) {
  for (
    var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2;
    i < r;
    i++
  )
    n[i - 2] = arguments[i];
  return (
    (Ri[e] || []).forEach((a) => {
      t = a.apply(null, [t, ...n]);
    }),
    t
  );
}
function ei(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  (Ri[e] || []).forEach((s) => {
    s.apply(null, r);
  });
}
function _n() {
  const e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return Ui[e] ? Ui[e].apply(null, t) : void 0;
}
function jd(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let { iconName: t } = e;
  const r = e.prefix || kn();
  if (t)
    return (t = sn(r, t) || t), hg(pw.definitions, r, t) || hg(vr.styles, r, t);
}
const pw = new WA(),
  qA = () => {
    (Y.autoReplaceSvg = !1), (Y.observeMutations = !1), ei("noAuto");
  },
  QA = {
    i2svg: function () {
      let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Ur
        ? (ei("beforeI2svg", e), _n("pseudoElements2svg", e), _n("i2svg", e))
        : Promise.reject(new Error("Operation requires a DOM of some kind."));
    },
    watch: function () {
      let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const { autoReplaceSvgRoot: t } = e;
      Y.autoReplaceSvg === !1 && (Y.autoReplaceSvg = !0),
        (Y.observeMutations = !0),
        RA(() => {
          GA({ autoReplaceSvgRoot: t }), ei("watch", e);
        });
    },
  },
  YA = {
    icon: (e) => {
      if (e === null) return null;
      if (typeof e == "object" && e.prefix && e.iconName)
        return {
          prefix: e.prefix,
          iconName: sn(e.prefix, e.iconName) || e.iconName,
        };
      if (Array.isArray(e) && e.length === 2) {
        const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1],
          r = du(e[0]);
        return { prefix: r, iconName: sn(r, t) || t };
      }
      if (
        typeof e == "string" &&
        (e.indexOf("".concat(Y.cssPrefix, "-")) > -1 || e.match(gA))
      ) {
        const t = fu(e.split(" "), { skipLookups: !0 });
        return {
          prefix: t.prefix || kn(),
          iconName: sn(t.prefix, t.iconName) || t.iconName,
        };
      }
      if (typeof e == "string") {
        const t = kn();
        return { prefix: t, iconName: sn(t, e) || e };
      }
    },
  },
  Lt = {
    noAuto: qA,
    config: Y,
    dom: QA,
    parse: YA,
    library: pw,
    findIconDefinition: jd,
    toHtml: Ma,
  },
  GA = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { autoReplaceSvgRoot: t = Te } = e;
    (Object.keys(vr.styles).length > 0 || Y.autoFetchSvg) &&
      Ur &&
      Y.autoReplaceSvg &&
      Lt.dom.i2svg({ node: t });
  };
function hu(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map((r) => Ma(r));
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (!Ur) return;
        const r = Te.createElement("div");
        return (r.innerHTML = e.html), r.children;
      },
    }),
    e
  );
}
function KA(e) {
  let {
    children: t,
    main: r,
    mask: n,
    attributes: i,
    styles: s,
    transform: a,
  } = e;
  if (Oh(a) && r.found && !n.found) {
    const { width: o, height: l } = r,
      u = { x: o / l / 2, y: 0.5 };
    i.style = cu({
      ...s,
      "transform-origin": ""
        .concat(u.x + a.x / 16, "em ")
        .concat(u.y + a.y / 16, "em"),
    });
  }
  return [{ tag: "svg", attributes: i, children: t }];
}
function XA(e) {
  let { prefix: t, iconName: r, children: n, attributes: i, symbol: s } = e;
  const a = s === !0 ? "".concat(t, "-").concat(Y.cssPrefix, "-").concat(r) : s;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [{ tag: "symbol", attributes: { ...i, id: a }, children: n }],
    },
  ];
}
function Dh(e) {
  const {
      icons: { main: t, mask: r },
      prefix: n,
      iconName: i,
      transform: s,
      symbol: a,
      title: o,
      maskId: l,
      titleId: u,
      extra: c,
      watchable: d = !1,
    } = e,
    { width: h, height: m } = r.found ? r : t,
    y = n === "fak",
    w = [Y.replacementClass, i ? "".concat(Y.cssPrefix, "-").concat(i) : ""]
      .filter((S) => c.classes.indexOf(S) === -1)
      .filter((S) => S !== "" || !!S)
      .concat(c.classes)
      .join(" ");
  let k = {
    children: [],
    attributes: {
      ...c.attributes,
      "data-prefix": n,
      "data-icon": i,
      class: w,
      role: c.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(h, " ").concat(m),
    },
  };
  const p =
    y && !~c.classes.indexOf("fa-fw")
      ? { width: "".concat((h / m) * 16 * 0.0625, "em") }
      : {};
  d && (k.attributes[Zn] = ""),
    o &&
      (k.children.push({
        tag: "title",
        attributes: {
          id: k.attributes["aria-labelledby"] || "title-".concat(u || ka()),
        },
        children: [o],
      }),
      delete k.attributes.title);
  const f = {
      ...k,
      prefix: n,
      iconName: i,
      main: t,
      mask: r,
      maskId: l,
      transform: s,
      symbol: a,
      styles: { ...p, ...c.styles },
    },
    { children: v, attributes: _ } =
      r.found && t.found
        ? _n("generateAbstractMask", f) || { children: [], attributes: {} }
        : _n("generateAbstractIcon", f) || { children: [], attributes: {} };
  return (f.children = v), (f.attributes = _), a ? XA(f) : KA(f);
}
function gg(e) {
  const {
      content: t,
      width: r,
      height: n,
      transform: i,
      title: s,
      extra: a,
      watchable: o = !1,
    } = e,
    l = {
      ...a.attributes,
      ...(s ? { title: s } : {}),
      class: a.classes.join(" "),
    };
  o && (l[Zn] = "");
  const u = { ...a.styles };
  Oh(i) &&
    ((u.transform = OA({
      transform: i,
      startCentered: !0,
      width: r,
      height: n,
    })),
    (u["-webkit-transform"] = u.transform));
  const c = cu(u);
  c.length > 0 && (l.style = c);
  const d = [];
  return (
    d.push({ tag: "span", attributes: l, children: [t] }),
    s &&
      d.push({ tag: "span", attributes: { class: "sr-only" }, children: [s] }),
    d
  );
}
function JA(e) {
  const { content: t, title: r, extra: n } = e,
    i = {
      ...n.attributes,
      ...(r ? { title: r } : {}),
      class: n.classes.join(" "),
    },
    s = cu(n.styles);
  s.length > 0 && (i.style = s);
  const a = [];
  return (
    a.push({ tag: "span", attributes: i, children: [t] }),
    r &&
      a.push({ tag: "span", attributes: { class: "sr-only" }, children: [r] }),
    a
  );
}
const { styles: uc } = vr;
function Ud(e) {
  const t = e[0],
    r = e[1],
    [n] = e.slice(4);
  let i = null;
  return (
    Array.isArray(n)
      ? (i = {
          tag: "g",
          attributes: { class: "".concat(Y.cssPrefix, "-").concat(ac.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(Y.cssPrefix, "-").concat(ac.SECONDARY),
                fill: "currentColor",
                d: n[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(Y.cssPrefix, "-").concat(ac.PRIMARY),
                fill: "currentColor",
                d: n[1],
              },
            },
          ],
        })
      : (i = { tag: "path", attributes: { fill: "currentColor", d: n } }),
    { found: !0, width: t, height: r, icon: i }
  );
}
const ZA = { found: !1, width: 512, height: 512 };
function e3(e, t) {
  !J1 &&
    !Y.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function zd(e, t) {
  let r = t;
  return (
    t === "fa" && Y.styleDefault !== null && (t = kn()),
    new Promise((n, i) => {
      if (r === "fa") {
        const s = hw(e) || {};
        (e = s.iconName || e), (t = s.prefix || t);
      }
      if (e && t && uc[t] && uc[t][e]) {
        const s = uc[t][e];
        return n(Ud(s));
      }
      e3(e, t),
        n({
          ...ZA,
          icon: Y.showMissingIcons && e ? _n("missingIconAbstract") || {} : {},
        });
    })
  );
}
const vg = () => {},
  Bd =
    Y.measurePerformance && uo && uo.mark && uo.measure
      ? uo
      : { mark: vg, measure: vg },
  $s = 'FA "6.6.0"',
  t3 = (e) => (Bd.mark("".concat($s, " ").concat(e, " begins")), () => mw(e)),
  mw = (e) => {
    Bd.mark("".concat($s, " ").concat(e, " ends")),
      Bd.measure(
        "".concat($s, " ").concat(e),
        "".concat($s, " ").concat(e, " begins"),
        "".concat($s, " ").concat(e, " ends")
      );
  };
var Nh = { begin: t3, end: mw };
const Ro = () => {};
function yg(e) {
  return typeof (e.getAttribute ? e.getAttribute(Zn) : null) == "string";
}
function r3(e) {
  const t = e.getAttribute ? e.getAttribute(Ch) : null,
    r = e.getAttribute ? e.getAttribute(Eh) : null;
  return t && r;
}
function n3(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(Y.replacementClass)
  );
}
function i3() {
  return Y.autoReplaceSvg === !0
    ? Do.replace
    : Do[Y.autoReplaceSvg] || Do.replace;
}
function s3(e) {
  return Te.createElementNS("http://www.w3.org/2000/svg", e);
}
function a3(e) {
  return Te.createElement(e);
}
function gw(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { ceFn: r = e.tag === "svg" ? s3 : a3 } = t;
  if (typeof e == "string") return Te.createTextNode(e);
  const n = r(e.tag);
  return (
    Object.keys(e.attributes || []).forEach(function (s) {
      n.setAttribute(s, e.attributes[s]);
    }),
    (e.children || []).forEach(function (s) {
      n.appendChild(gw(s, { ceFn: r }));
    }),
    n
  );
}
function o3(e) {
  let t = " ".concat(e.outerHTML, " ");
  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
const Do = {
  replace: function (e) {
    const t = e[0];
    if (t.parentNode)
      if (
        (e[1].forEach((r) => {
          t.parentNode.insertBefore(gw(r), t);
        }),
        t.getAttribute(Zn) === null && Y.keepOriginalSource)
      ) {
        let r = Te.createComment(o3(t));
        t.parentNode.replaceChild(r, t);
      } else t.remove();
  },
  nest: function (e) {
    const t = e[0],
      r = e[1];
    if (~Ph(t).indexOf(Y.replacementClass)) return Do.replace(e);
    const n = new RegExp("".concat(Y.cssPrefix, "-.*"));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      const s = r[0].attributes.class
        .split(" ")
        .reduce(
          (a, o) => (
            o === Y.replacementClass || o.match(n)
              ? a.toSvg.push(o)
              : a.toNode.push(o),
            a
          ),
          { toNode: [], toSvg: [] }
        );
      (r[0].attributes.class = s.toSvg.join(" ")),
        s.toNode.length === 0
          ? t.removeAttribute("class")
          : t.setAttribute("class", s.toNode.join(" "));
    }
    const i = r.map((s) => Ma(s)).join(`
`);
    t.setAttribute(Zn, ""), (t.innerHTML = i);
  },
};
function wg(e) {
  e();
}
function vw(e, t) {
  const r = typeof t == "function" ? t : Ro;
  if (e.length === 0) r();
  else {
    let n = wg;
    Y.mutateApproach === hA && (n = bn.requestAnimationFrame || wg),
      n(() => {
        const i = i3(),
          s = Nh.begin("mutate");
        e.map(i), s(), r();
      });
  }
}
let Ih = !1;
function yw() {
  Ih = !0;
}
function Wd() {
  Ih = !1;
}
let _l = null;
function bg(e) {
  if (!lg || !Y.observeMutations) return;
  const {
    treeCallback: t = Ro,
    nodeCallback: r = Ro,
    pseudoElementsCallback: n = Ro,
    observeMutationsRoot: i = Te,
  } = e;
  (_l = new lg((s) => {
    if (Ih) return;
    const a = kn();
    us(s).forEach((o) => {
      if (
        (o.type === "childList" &&
          o.addedNodes.length > 0 &&
          !yg(o.addedNodes[0]) &&
          (Y.searchPseudoElements && n(o.target), t(o.target)),
        o.type === "attributes" &&
          o.target.parentNode &&
          Y.searchPseudoElements &&
          n(o.target.parentNode),
        o.type === "attributes" && yg(o.target) && ~wA.indexOf(o.attributeName))
      )
        if (o.attributeName === "class" && r3(o.target)) {
          const { prefix: l, iconName: u } = fu(Ph(o.target));
          o.target.setAttribute(Ch, l || a), u && o.target.setAttribute(Eh, u);
        } else n3(o.target) && r(o.target);
    });
  })),
    Ur &&
      _l.observe(i, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0,
      });
}
function l3() {
  _l && _l.disconnect();
}
function u3(e) {
  const t = e.getAttribute("style");
  let r = [];
  return (
    t &&
      (r = t.split(";").reduce((n, i) => {
        const s = i.split(":"),
          a = s[0],
          o = s.slice(1);
        return a && o.length > 0 && (n[a] = o.join(":").trim()), n;
      }, {})),
    r
  );
}
function c3(e) {
  const t = e.getAttribute("data-prefix"),
    r = e.getAttribute("data-icon"),
    n = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = fu(Ph(e));
  return (
    i.prefix || (i.prefix = kn()),
    t && r && ((i.prefix = t), (i.iconName = r)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        n.length > 0 &&
        (i.iconName =
          UA(i.prefix, e.innerText) || Ah(i.prefix, Ld(e.innerText))),
      !i.iconName &&
        Y.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function d3(e) {
  const t = us(e.attributes).reduce(
      (i, s) => (
        i.name !== "class" && i.name !== "style" && (i[s.name] = s.value), i
      ),
      {}
    ),
    r = e.getAttribute("title"),
    n = e.getAttribute("data-fa-title-id");
  return (
    Y.autoA11y &&
      (r
        ? (t["aria-labelledby"] = ""
            .concat(Y.replacementClass, "-title-")
            .concat(n || ka()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function f3() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: gr,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function kg(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { styleParser: !0 };
  const { iconName: r, prefix: n, rest: i } = c3(e),
    s = d3(e),
    a = Fd("parseNodeAttributes", {}, e);
  let o = t.styleParser ? u3(e) : [];
  return {
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: n,
    transform: gr,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    symbol: !1,
    extra: { classes: i, styles: o, attributes: s },
    ...a,
  };
}
const { styles: h3 } = vr;
function ww(e) {
  const t = Y.autoReplaceSvg === "nest" ? kg(e, { styleParser: !1 }) : kg(e);
  return ~t.extra.classes.indexOf(tw)
    ? _n("generateLayersText", e, t)
    : _n("generateSvgReplacementMutation", e, t);
}
let kr = new Set();
Z1.map((e) => {
  kr.add("fa-".concat(e));
});
Object.keys(Hn[De]).map(kr.add.bind(kr));
Object.keys(Hn[Tt]).map(kr.add.bind(kr));
Object.keys(Hn[At]).map(kr.add.bind(kr));
kr = [...kr];
function _g(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ur) return Promise.resolve();
  const r = Te.documentElement.classList,
    n = (c) => r.add("".concat(dg, "-").concat(c)),
    i = (c) => r.remove("".concat(dg, "-").concat(c)),
    s = Y.autoFetchSvg
      ? kr
      : Z1.map((c) => "fa-".concat(c)).concat(Object.keys(h3));
  s.includes("fa") || s.push("fa");
  const a = [".".concat(tw, ":not([").concat(Zn, "])")]
    .concat(s.map((c) => ".".concat(c, ":not([").concat(Zn, "])")))
    .join(", ");
  if (a.length === 0) return Promise.resolve();
  let o = [];
  try {
    o = us(e.querySelectorAll(a));
  } catch {}
  if (o.length > 0) n("pending"), i("complete");
  else return Promise.resolve();
  const l = Nh.begin("onTree"),
    u = o.reduce((c, d) => {
      try {
        const h = ww(d);
        h && c.push(h);
      } catch (h) {
        J1 || (h.name === "MissingIcon" && console.error(h));
      }
      return c;
    }, []);
  return new Promise((c, d) => {
    Promise.all(u)
      .then((h) => {
        vw(h, () => {
          n("active"),
            n("complete"),
            i("pending"),
            typeof t == "function" && t(),
            l(),
            c();
        });
      })
      .catch((h) => {
        l(), d(h);
      });
  });
}
function p3(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  ww(e).then((r) => {
    r && vw([r], t);
  });
}
function m3(e) {
  return function (t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = (t || {}).icon ? t : jd(t || {});
    let { mask: i } = r;
    return i && (i = (i || {}).icon ? i : jd(i || {})), e(n, { ...r, mask: i });
  };
}
const g3 = function (e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: r = gr,
    symbol: n = !1,
    mask: i = null,
    maskId: s = null,
    title: a = null,
    titleId: o = null,
    classes: l = [],
    attributes: u = {},
    styles: c = {},
  } = t;
  if (!e) return;
  const { prefix: d, iconName: h, icon: m } = e;
  return hu(
    { type: "icon", ...e },
    () => (
      ei("beforeDOMElementCreation", { iconDefinition: e, params: t }),
      Y.autoA11y &&
        (a
          ? (u["aria-labelledby"] = ""
              .concat(Y.replacementClass, "-title-")
              .concat(o || ka()))
          : ((u["aria-hidden"] = "true"), (u.focusable = "false"))),
      Dh({
        icons: {
          main: Ud(m),
          mask: i
            ? Ud(i.icon)
            : { found: !1, width: null, height: null, icon: {} },
        },
        prefix: d,
        iconName: h,
        transform: { ...gr, ...r },
        symbol: n,
        title: a,
        maskId: s,
        titleId: o,
        extra: { attributes: u, styles: c, classes: l },
      })
    )
  );
};
var v3 = {
    mixout() {
      return { icon: m3(g3) };
    },
    hooks() {
      return {
        mutationObserverCallbacks(e) {
          return (e.treeCallback = _g), (e.nodeCallback = p3), e;
        },
      };
    },
    provides(e) {
      (e.i2svg = function (t) {
        const { node: r = Te, callback: n = () => {} } = t;
        return _g(r, n);
      }),
        (e.generateSvgReplacementMutation = function (t, r) {
          const {
            iconName: n,
            title: i,
            titleId: s,
            prefix: a,
            transform: o,
            symbol: l,
            mask: u,
            maskId: c,
            extra: d,
          } = r;
          return new Promise((h, m) => {
            Promise.all([
              zd(n, a),
              u.iconName
                ? zd(u.iconName, u.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then((y) => {
                let [w, k] = y;
                h([
                  t,
                  Dh({
                    icons: { main: w, mask: k },
                    prefix: a,
                    iconName: n,
                    transform: o,
                    symbol: l,
                    maskId: c,
                    title: i,
                    titleId: s,
                    extra: d,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(m);
          });
        }),
        (e.generateAbstractIcon = function (t) {
          let {
            children: r,
            attributes: n,
            main: i,
            transform: s,
            styles: a,
          } = t;
          const o = cu(a);
          o.length > 0 && (n.style = o);
          let l;
          return (
            Oh(s) &&
              (l = _n("generateAbstractTransformGrouping", {
                main: i,
                transform: s,
                containerWidth: i.width,
                iconWidth: i.width,
              })),
            r.push(l || i.icon),
            { children: r, attributes: n }
          );
        });
    },
  },
  y3 = {
    mixout() {
      return {
        layer(e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const { classes: r = [] } = t;
          return hu({ type: "layer" }, () => {
            ei("beforeDOMElementCreation", { assembler: e, params: t });
            let n = [];
            return (
              e((i) => {
                Array.isArray(i)
                  ? i.map((s) => {
                      n = n.concat(s.abstract);
                    })
                  : (n = n.concat(i.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(Y.cssPrefix, "-layers"), ...r].join(" "),
                  },
                  children: n,
                },
              ]
            );
          });
        },
      };
    },
  },
  w3 = {
    mixout() {
      return {
        counter(e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            title: r = null,
            classes: n = [],
            attributes: i = {},
            styles: s = {},
          } = t;
          return hu(
            { type: "counter", content: e },
            () => (
              ei("beforeDOMElementCreation", { content: e, params: t }),
              JA({
                content: e.toString(),
                title: r,
                extra: {
                  attributes: i,
                  styles: s,
                  classes: ["".concat(Y.cssPrefix, "-layers-counter"), ...n],
                },
              })
            )
          );
        },
      };
    },
  },
  b3 = {
    mixout() {
      return {
        text(e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            transform: r = gr,
            title: n = null,
            classes: i = [],
            attributes: s = {},
            styles: a = {},
          } = t;
          return hu(
            { type: "text", content: e },
            () => (
              ei("beforeDOMElementCreation", { content: e, params: t }),
              gg({
                content: e,
                transform: { ...gr, ...r },
                title: n,
                extra: {
                  attributes: s,
                  styles: a,
                  classes: ["".concat(Y.cssPrefix, "-layers-text"), ...i],
                },
              })
            )
          );
        },
      };
    },
    provides(e) {
      e.generateLayersText = function (t, r) {
        const { title: n, transform: i, extra: s } = r;
        let a = null,
          o = null;
        if (q1) {
          const l = parseInt(getComputedStyle(t).fontSize, 10),
            u = t.getBoundingClientRect();
          (a = u.width / l), (o = u.height / l);
        }
        return (
          Y.autoA11y && !n && (s.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            t,
            gg({
              content: t.innerHTML,
              width: a,
              height: o,
              transform: i,
              title: n,
              extra: s,
              watchable: !0,
            }),
          ])
        );
      };
    },
  };
const k3 = new RegExp('"', "ug"),
  Sg = [1105920, 1112319],
  xg = { FontAwesome: { normal: "fas", 400: "fas" }, ...tA, ...eA, ...uA },
  Vd = Object.keys(xg).reduce((e, t) => ((e[t.toLowerCase()] = xg[t]), e), {}),
  _3 = Object.keys(Vd).reduce((e, t) => {
    const r = Vd[t];
    return (e[t] = r[900] || [...Object.entries(r)][0][1]), e;
  }, {});
function S3(e) {
  const t = e.replace(k3, ""),
    r = IA(t, 0),
    n = r >= Sg[0] && r <= Sg[1],
    i = t.length === 2 ? t[0] === t[1] : !1;
  return { value: Ld(i ? t[0] : t), isSecondary: n || i };
}
function x3(e, t) {
  const r = e.replace(/^['"]|['"]$/g, "").toLowerCase(),
    n = parseInt(t),
    i = isNaN(n) ? "normal" : n;
  return (Vd[r] || {})[i] || _3[r];
}
function Cg(e, t) {
  const r = "".concat(fA).concat(t.replace(":", "-"));
  return new Promise((n, i) => {
    if (e.getAttribute(r) !== null) return n();
    const a = us(e.children).filter((h) => h.getAttribute(Dd) === t)[0],
      o = bn.getComputedStyle(e, t),
      l = o.getPropertyValue("font-family"),
      u = l.match(vA),
      c = o.getPropertyValue("font-weight"),
      d = o.getPropertyValue("content");
    if (a && !u) return e.removeChild(a), n();
    if (u && d !== "none" && d !== "") {
      const h = o.getPropertyValue("content");
      let m = x3(l, c);
      const { value: y, isSecondary: w } = S3(h),
        k = u[0].startsWith("FontAwesome");
      let p = Ah(m, y),
        f = p;
      if (k) {
        const v = zA(y);
        v.iconName && v.prefix && ((p = v.iconName), (m = v.prefix));
      }
      if (
        p &&
        !w &&
        (!a || a.getAttribute(Ch) !== m || a.getAttribute(Eh) !== f)
      ) {
        e.setAttribute(r, f), a && e.removeChild(a);
        const v = f3(),
          { extra: _ } = v;
        (_.attributes[Dd] = t),
          zd(p, m)
            .then((S) => {
              const R = Dh({
                  ...v,
                  icons: { main: S, mask: Rh() },
                  prefix: m,
                  iconName: f,
                  extra: _,
                  watchable: !0,
                }),
                O = Te.createElementNS("http://www.w3.org/2000/svg", "svg");
              t === "::before"
                ? e.insertBefore(O, e.firstChild)
                : e.appendChild(O),
                (O.outerHTML = R.map((T) => Ma(T)).join(`
`)),
                e.removeAttribute(r),
                n();
            })
            .catch(i);
      } else n();
    } else n();
  });
}
function C3(e) {
  return Promise.all([Cg(e, "::before"), Cg(e, "::after")]);
}
function E3(e) {
  return (
    e.parentNode !== document.head &&
    !~pA.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(Dd) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function Eg(e) {
  if (Ur)
    return new Promise((t, r) => {
      const n = us(e.querySelectorAll("*")).filter(E3).map(C3),
        i = Nh.begin("searchPseudoElements");
      yw(),
        Promise.all(n)
          .then(() => {
            i(), Wd(), t();
          })
          .catch(() => {
            i(), Wd(), r();
          });
    });
}
var P3 = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return (e.pseudoElementsCallback = Eg), e;
      },
    };
  },
  provides(e) {
    e.pseudoElements2svg = function (t) {
      const { node: r = Te } = t;
      Y.searchPseudoElements && Eg(r);
    };
  },
};
let Pg = !1;
var O3 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          yw(), (Pg = !0);
        },
      },
    };
  },
  hooks() {
    return {
      bootstrap() {
        bg(Fd("mutationObserverCallbacks", {}));
      },
      noAuto() {
        l3();
      },
      watch(e) {
        const { observeMutationsRoot: t } = e;
        Pg
          ? Wd()
          : bg(Fd("mutationObserverCallbacks", { observeMutationsRoot: t }));
      },
    };
  },
};
const Og = (e) => {
  let t = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
  return e
    .toLowerCase()
    .split(" ")
    .reduce((r, n) => {
      const i = n.toLowerCase().split("-"),
        s = i[0];
      let a = i.slice(1).join("-");
      if (s && a === "h") return (r.flipX = !0), r;
      if (s && a === "v") return (r.flipY = !0), r;
      if (((a = parseFloat(a)), isNaN(a))) return r;
      switch (s) {
        case "grow":
          r.size = r.size + a;
          break;
        case "shrink":
          r.size = r.size - a;
          break;
        case "left":
          r.x = r.x - a;
          break;
        case "right":
          r.x = r.x + a;
          break;
        case "up":
          r.y = r.y - a;
          break;
        case "down":
          r.y = r.y + a;
          break;
        case "rotate":
          r.rotate = r.rotate + a;
          break;
      }
      return r;
    }, t);
};
var T3 = {
  mixout() {
    return { parse: { transform: (e) => Og(e) } };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-transform");
        return r && (e.transform = Og(r)), e;
      },
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function (t) {
      let { main: r, transform: n, containerWidth: i, iconWidth: s } = t;
      const a = { transform: "translate(".concat(i / 2, " 256)") },
        o = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "),
        l = "scale("
          .concat((n.size / 16) * (n.flipX ? -1 : 1), ", ")
          .concat((n.size / 16) * (n.flipY ? -1 : 1), ") "),
        u = "rotate(".concat(n.rotate, " 0 0)"),
        c = { transform: "".concat(o, " ").concat(l, " ").concat(u) },
        d = { transform: "translate(".concat((s / 2) * -1, " -256)") },
        h = { outer: a, inner: c, path: d };
      return {
        tag: "g",
        attributes: { ...h.outer },
        children: [
          {
            tag: "g",
            attributes: { ...h.inner },
            children: [
              {
                tag: r.icon.tag,
                children: r.icon.children,
                attributes: { ...r.icon.attributes, ...h.path },
              },
            ],
          },
        ],
      };
    };
  },
};
const cc = { x: 0, y: 0, width: "100%", height: "100%" };
function Tg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  );
}
function A3(e) {
  return e.tag === "g" ? e.children : [e];
}
var R3 = {
    hooks() {
      return {
        parseNodeAttributes(e, t) {
          const r = t.getAttribute("data-fa-mask"),
            n = r ? fu(r.split(" ").map((i) => i.trim())) : Rh();
          return (
            n.prefix || (n.prefix = kn()),
            (e.mask = n),
            (e.maskId = t.getAttribute("data-fa-mask-id")),
            e
          );
        },
      };
    },
    provides(e) {
      e.generateAbstractMask = function (t) {
        let {
          children: r,
          attributes: n,
          main: i,
          mask: s,
          maskId: a,
          transform: o,
        } = t;
        const { width: l, icon: u } = i,
          { width: c, icon: d } = s,
          h = PA({ transform: o, containerWidth: c, iconWidth: l }),
          m = { tag: "rect", attributes: { ...cc, fill: "white" } },
          y = u.children ? { children: u.children.map(Tg) } : {},
          w = {
            tag: "g",
            attributes: { ...h.inner },
            children: [
              Tg({
                tag: u.tag,
                attributes: { ...u.attributes, ...h.path },
                ...y,
              }),
            ],
          },
          k = { tag: "g", attributes: { ...h.outer }, children: [w] },
          p = "mask-".concat(a || ka()),
          f = "clip-".concat(a || ka()),
          v = {
            tag: "mask",
            attributes: {
              ...cc,
              id: p,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse",
            },
            children: [m, k],
          },
          _ = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: f }, children: A3(d) },
              v,
            ],
          };
        return (
          r.push(_, {
            tag: "rect",
            attributes: {
              fill: "currentColor",
              "clip-path": "url(#".concat(f, ")"),
              mask: "url(#".concat(p, ")"),
              ...cc,
            },
          }),
          { children: r, attributes: n }
        );
      };
    },
  },
  D3 = {
    provides(e) {
      let t = !1;
      bn.matchMedia &&
        (t = bn.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (e.missingIconAbstract = function () {
          const r = [],
            n = { fill: "currentColor" },
            i = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          r.push({
            tag: "path",
            attributes: {
              ...n,
              d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
            },
          });
          const s = { ...i, attributeName: "opacity" },
            a = {
              tag: "circle",
              attributes: { ...n, cx: "256", cy: "364", r: "28" },
              children: [],
            };
          return (
            t ||
              a.children.push(
                {
                  tag: "animate",
                  attributes: {
                    ...i,
                    attributeName: "r",
                    values: "28;14;28;28;14;28;",
                  },
                },
                { tag: "animate", attributes: { ...s, values: "1;0;1;1;0;1;" } }
              ),
            r.push(a),
            r.push({
              tag: "path",
              attributes: {
                ...n,
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
              },
              children: t
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: { ...s, values: "1;0;0;0;0;1;" },
                    },
                  ],
            }),
            t ||
              r.push({
                tag: "path",
                attributes: {
                  ...n,
                  opacity: "0",
                  d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                },
                children: [
                  {
                    tag: "animate",
                    attributes: { ...s, values: "0;0;1;1;0;0;" },
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: r }
          );
        });
    },
  },
  N3 = {
    hooks() {
      return {
        parseNodeAttributes(e, t) {
          const r = t.getAttribute("data-fa-symbol"),
            n = r === null ? !1 : r === "" ? !0 : r;
          return (e.symbol = n), e;
        },
      };
    },
  },
  I3 = [AA, v3, y3, w3, b3, P3, O3, T3, R3, D3, N3];
HA(I3, { mixoutsTo: Lt });
Lt.noAuto;
Lt.config;
Lt.library;
Lt.dom;
const Hd = Lt.parse;
Lt.findIconDefinition;
Lt.toHtml;
const $3 = Lt.icon;
Lt.layer;
Lt.text;
Lt.counter;
var bw = { exports: {} },
  L3 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  M3 = L3,
  F3 = M3;
function kw() {}
function _w() {}
_w.resetWarningCache = kw;
var j3 = function () {
  function e(n, i, s, a, o, l) {
    if (l !== F3) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: _w,
    resetWarningCache: kw,
  };
  return (r.PropTypes = r), r;
};
bw.exports = j3();
var U3 = bw.exports;
const ie = Yd(U3);
function Ag(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function fr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ag(Object(r), !0).forEach(function (n) {
          Di(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Ag(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Sl(e) {
  return (
    (Sl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Sl(e)
  );
}
function Di(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function z3(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    s;
  for (s = 0; s < n.length; s++)
    (i = n[s]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function B3(e, t) {
  if (e == null) return {};
  var r = z3(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (n = s[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function qd(e) {
  return W3(e) || V3(e) || H3(e) || q3();
}
function W3(e) {
  if (Array.isArray(e)) return Qd(e);
}
function V3(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function H3(e, t) {
  if (e) {
    if (typeof e == "string") return Qd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Qd(e, t);
  }
}
function Qd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function q3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q3(e) {
  var t,
    r = e.beat,
    n = e.fade,
    i = e.beatFade,
    s = e.bounce,
    a = e.shake,
    o = e.flash,
    l = e.spin,
    u = e.spinPulse,
    c = e.spinReverse,
    d = e.pulse,
    h = e.fixedWidth,
    m = e.inverse,
    y = e.border,
    w = e.listItem,
    k = e.flip,
    p = e.size,
    f = e.rotation,
    v = e.pull,
    _ =
      ((t = {
        "fa-beat": r,
        "fa-fade": n,
        "fa-beat-fade": i,
        "fa-bounce": s,
        "fa-shake": a,
        "fa-flash": o,
        "fa-spin": l,
        "fa-spin-reverse": c,
        "fa-spin-pulse": u,
        "fa-pulse": d,
        "fa-fw": h,
        "fa-inverse": m,
        "fa-border": y,
        "fa-li": w,
        "fa-flip": k === !0,
        "fa-flip-horizontal": k === "horizontal" || k === "both",
        "fa-flip-vertical": k === "vertical" || k === "both",
      }),
      Di(t, "fa-".concat(p), typeof p < "u" && p !== null),
      Di(t, "fa-rotate-".concat(f), typeof f < "u" && f !== null && f !== 0),
      Di(t, "fa-pull-".concat(v), typeof v < "u" && v !== null),
      Di(t, "fa-swap-opacity", e.swapOpacity),
      t);
  return Object.keys(_)
    .map(function (S) {
      return _[S] ? S : null;
    })
    .filter(function (S) {
      return S;
    });
}
function Y3(e) {
  return (e = e - 0), e === e;
}
function Sw(e) {
  return Y3(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, r) {
        return r ? r.toUpperCase() : "";
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var G3 = ["style"];
function K3(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function X3(e) {
  return e
    .split(";")
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, r) {
      var n = r.indexOf(":"),
        i = Sw(r.slice(0, n)),
        s = r.slice(n + 1).trim();
      return i.startsWith("webkit") ? (t[K3(i)] = s) : (t[i] = s), t;
    }, {});
}
function xw(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string") return t;
  var n = (t.children || []).map(function (l) {
      return xw(e, l);
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (l, u) {
        var c = t.attributes[u];
        switch (u) {
          case "class":
            (l.attrs.className = c), delete t.attributes.class;
            break;
          case "style":
            l.attrs.style = X3(c);
            break;
          default:
            u.indexOf("aria-") === 0 || u.indexOf("data-") === 0
              ? (l.attrs[u.toLowerCase()] = c)
              : (l.attrs[Sw(u)] = c);
        }
        return l;
      },
      { attrs: {} }
    ),
    s = r.style,
    a = s === void 0 ? {} : s,
    o = B3(r, G3);
  return (
    (i.attrs.style = fr(fr({}, i.attrs.style), a)),
    e.apply(void 0, [t.tag, fr(fr({}, i.attrs), o)].concat(qd(n)))
  );
}
var Cw = !1;
try {
  Cw = !0;
} catch {}
function J3() {
  if (!Cw && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Rg(e) {
  if (e && Sl(e) === "object" && e.prefix && e.iconName && e.icon) return e;
  if (Hd.icon) return Hd.icon(e);
  if (e === null) return null;
  if (e && Sl(e) === "object" && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == "string") return { prefix: "fas", iconName: e };
}
function dc(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? Di({}, e, t)
    : {};
}
var Dg = {
    border: !1,
    className: "",
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: "",
    titleId: null,
    transform: null,
    swapOpacity: !1,
  },
  Ew = be.forwardRef(function (e, t) {
    var r = fr(fr({}, Dg), e),
      n = r.icon,
      i = r.mask,
      s = r.symbol,
      a = r.className,
      o = r.title,
      l = r.titleId,
      u = r.maskId,
      c = Rg(n),
      d = dc("classes", [].concat(qd(Q3(r)), qd((a || "").split(" ")))),
      h = dc(
        "transform",
        typeof r.transform == "string" ? Hd.transform(r.transform) : r.transform
      ),
      m = dc("mask", Rg(i)),
      y = $3(
        c,
        fr(
          fr(fr(fr({}, d), h), m),
          {},
          { symbol: s, title: o, titleId: l, maskId: u }
        )
      );
    if (!y) return J3("Could not find icon", c), null;
    var w = y.abstract,
      k = { ref: t };
    return (
      Object.keys(r).forEach(function (p) {
        Dg.hasOwnProperty(p) || (k[p] = r[p]);
      }),
      Z3(w[0], k)
    );
  });
Ew.displayName = "FontAwesomeIcon";
Ew.propTypes = {
  beat: ie.bool,
  border: ie.bool,
  beatFade: ie.bool,
  bounce: ie.bool,
  className: ie.string,
  fade: ie.bool,
  flash: ie.bool,
  mask: ie.oneOfType([ie.object, ie.array, ie.string]),
  maskId: ie.string,
  fixedWidth: ie.bool,
  inverse: ie.bool,
  flip: ie.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: ie.oneOfType([ie.object, ie.array, ie.string]),
  listItem: ie.bool,
  pull: ie.oneOf(["right", "left"]),
  pulse: ie.bool,
  rotation: ie.oneOf([0, 90, 180, 270]),
  shake: ie.bool,
  size: ie.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: ie.bool,
  spinPulse: ie.bool,
  spinReverse: ie.bool,
  symbol: ie.oneOfType([ie.bool, ie.string]),
  title: ie.string,
  titleId: ie.string,
  transform: ie.oneOfType([ie.string, ie.object]),
  swapOpacity: ie.bool,
};
var Z3 = xw.bind(null, be.createElement);
const e5 = F.div`
  display: grid;
  grid-template-columns: 0.6fr 1.7fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`,
  t5 = F.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  /* transform: scale(1.66666) translateX(-2px); */
  transform: scale(1.5) translateX(-7px);
`,
  Ng = F.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`,
  r5 = F.div`
  font-family: "Sono";
  font-weight: 600;
`,
  n5 = F.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`,
  i5 = ({
    cabin: e,
    index: t,
    check: r,
    handcheck: n,
    isLast: i,
    close: s,
    setCheck: a,
  }) => {
    const [o, l] = x.useState(!1),
      [u, c] = x.useState(!1),
      { deleteCabin: d, isDelete: h } = oT(),
      [m, y] = x.useState(!0),
      w = Xt(),
      k = (V, G) => {
        const ne = G.split("/").pop();
        d({ id: V, img: ne });
      };
    x.useState(!1);
    const { mutate: p, isLoading: f } = jr({
        mutationFn: gh,
        onSuccess: () => {
          Dt.success("New cabin successfully created"),
            w.invalidateQueries({ queryKey: ["cabin"] }),
            l(!1);
        },
        onError: (V) => Dt.error(V.message),
      }),
      {
        id: v,
        name: _,
        maxCapacity: S,
        regularPrice: R,
        discount: O,
        image: T,
        description: q,
      } = e,
      z = () => {
        p({
          name: `Copy of ${_}`,
          maxCapacity: S,
          regularPrice: R,
          discount: O,
          image: T,
          description: q,
        }),
          s();
      },
      he = (V) => {
        (V.target.src =
          "https://jfyctkgwzapudocvktmy.supabase.co/storage/v1/object/public/cabin-images/0.9171104444802938-qbit.png"),
          (V.target.alt = "Đang cập nhật ảnh"),
          y(!1);
      };
    return A(Yt, {
      children: [
        A(e5, {
          className: "text-center",
          children: [
            g(Ng, { children: t + 1 }),
            g(Ng, {
              className: "text-center",
              children: _.length > 15 ? _.substring(0, 15) + "..." : _,
            }),
            g("div", {
              className: "flex justify-center ml-5",
              children: g(t5, {
                src: T,
                alt: "Hình ảnh",
                onError: he,
                className: "flex justify-center",
              }),
            }),
            A("div", { children: ["Fits up tp ", S, " "] }),
            g(r5, { children: sr(R) }),
            g(n5, { children: O ? sr(O) : "---" }),
            g(P1, {
              id: v,
              check: r,
              setCheck: a,
              handCopy: z,
              setShow: l,
              isLast: i,
              close: s,
              setDeleteShow: c,
              type: "cabin",
            }),
          ],
        }),
        o && g(YT, { setShowCabin: l, cabin: e }),
        u &&
          g(wh, {
            onConfirm: () => k(v, T),
            closeModal: () => c(!1),
            resource: _,
            disabled: h,
          }),
      ],
    });
  },
  s5 = () => {
    const { isLoading: e, data: t } = Bl({ queryKey: ["cabin"], queryFn: mO });
    return { isLoading: e, data: t };
  },
  a5 = () => {
    const [e, t] = x.useState(null),
      { isLoading: r, data: n } = s5(),
      i = (c) => {
        t((d) => (d === c ? null : c));
      },
      s = () => {
        t(null);
      },
      [a] = Pa();
    if (r) return g(Ia, {});
    if (!n.length) return g(Empty, { resourceName: "cabins" });
    const o = a.get("discount") || "all";
    let l;
    o === "all" && (l = n),
      o === "no-discount" && (l = n.filter((c) => c.discount === 0)),
      o === "with-discount" && (l = n.filter((c) => c.discount > 0));
    const u = a.get("sortBy") || "time";
    return (
      u === "time" &&
        l.sort((c, d) => d.created_at.localeCompare(c.created_at)),
      u === "name-asc" && l.sort((c, d) => c.name.localeCompare(d.name)),
      u === "name-desc" && l.sort((c, d) => d.name.localeCompare(c.name)),
      u === "price-asc" && l.sort((c, d) => c.regularPrice - d.regularPrice),
      u === "price-desc" && l.sort((c, d) => d.regularPrice - c.regularPrice),
      u === "maxCapecity-asc" &&
        l.sort((c, d) => c.maxCapacity - d.maxCapacity),
      u === "maxCapecity-desc" &&
        l.sort((c, d) => d.maxCapacity - c.maxCapacity),
      g(as, {
        children: A(Vt, {
          role: "table",
          columns: "0.7fr 1.7fr 1.1fr 1.1fr 1fr 1.2fr 1fr",
          children: [
            A(Vt.Header, {
              role: "row",
              children: [
                g("div", { className: "text-center", children: "Stt" }),
                g("div", { className: "text-center ", children: "Cabin" }),
                g("div", { className: "text-center", children: "Img" }),
                g("div", { className: "text-center", children: "Capecity" }),
                g("div", { className: "text-center", children: "Price" }),
                g("div", { className: "text-center", children: "Discount" }),
                g("div", { className: "text-center", children: "Action" }),
              ],
            }),
            g(Vt.Body, {
              data: l,
              render: (c, d) =>
                g(
                  i5,
                  {
                    cabin: c,
                    index: d,
                    check: e,
                    handcheck: i,
                    close: s,
                    setCheck: t,
                    isLast:
                      (n.length === 6 && d === n.length - 1) ||
                      (n.length > 6 && d >= n.length - 2),
                  },
                  c.id
                ),
            }),
          ],
        }),
      })
    );
  },
  pi = F.div`
  display: grid;
  align-items: center;
  grid-template-columns: 30rem 2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;
  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`,
  mi = F.label`
  font-weight: 500;
`,
  gi = F.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`,
  o5 = F.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.3); */
  z-index: 9999;
`,
  Es = F.div`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
`;
function l5({ setShowCabin: e }) {
  const [t, r] = x.useState(null),
    [n, i] = x.useState(""),
    s = x.useRef(null),
    a = () => {
      s.current.click();
    },
    o = async (v) => {
      const _ = v.target.files[0];
      i(_);
      const S = URL.createObjectURL(_);
      r(S);
    },
    l = Xt(),
    {
      register: u,
      handleSubmit: c,
      reset: d,
      getValues: h,
      formState: m,
    } = z1(),
    { errors: y } = m,
    { mutate: w, isLoading: k } = jr({
      mutationFn: gh,
      onSuccess: () => {
        Dt.success("New cabin successfully created"),
          l.invalidateQueries({ queryKey: ["cabin"] }),
          d(),
          e(!1);
      },
      onError: (v) => Dt.error(v.message),
    });
  return g(yh, {
    children: g(vh, {
      children: g(o5, {
        children: A(uu, {
          onSubmit: c(
            (v) => {
              w({ ...v, image: n });
            },
            (v) => {
              console.log(v);
            }
          ),
          children: [
            A(pi, {
              children: [
                g(mi, { htmlFor: "name", children: "Cabin name" }),
                A(Es, {
                  children: [
                    g(yt, {
                      type: "text",
                      id: "name",
                      ...u("name", { required: "Cabin name is required" }),
                      disabled: k,
                    }),
                    (y == null ? void 0 : y.name) &&
                      g(gi, { children: y.name.message }),
                  ],
                }),
              ],
            }),
            A(pi, {
              children: [
                g(mi, { htmlFor: "maxCapacity", children: "Maximum capacity" }),
                A(Es, {
                  children: [
                    g(yt, {
                      type: "number",
                      id: "maxCapacity",
                      ...u("maxCapacity", {
                        required: "MaxCapacity name is required",
                        min: {
                          value: 1,
                          message:
                            "MaxCapacity must be greater than or equal to 1",
                        },
                      }),
                      disabled: k,
                    }),
                    (y == null ? void 0 : y.maxCapacity) &&
                      g(gi, { children: y.maxCapacity.message }),
                  ],
                }),
              ],
            }),
            A(pi, {
              children: [
                g(mi, { htmlFor: "regularPrice", children: "Regular price" }),
                A(Es, {
                  children: [
                    g(yt, {
                      type: "number",
                      id: "regularPrice",
                      disabled: k,
                      ...u("regularPrice", {
                        required: "Regular price is required",
                        min: {
                          value: 1,
                          message:
                            "Regular price must be greater than or equal to 1",
                        },
                      }),
                    }),
                    (y == null ? void 0 : y.regularPrice) &&
                      g(gi, { children: y.regularPrice.message }),
                  ],
                }),
              ],
            }),
            A(pi, {
              children: [
                g(mi, { htmlFor: "discount", children: "Discount" }),
                A(Es, {
                  children: [
                    g(yt, {
                      type: "number",
                      id: "discount",
                      disabled: k,
                      defaultValue: 0,
                      ...u("discount", {
                        required: "Can't be empty, make it at least 0",
                        validate: (v) =>
                          parseFloat(h().regularPrice) >= parseFloat(v) ||
                          "Discount should be less than regular price",
                      }),
                    }),
                    (y == null ? void 0 : y.discount) &&
                      g(gi, { children: y.discount.message }),
                  ],
                }),
              ],
            }),
            A(pi, {
              children: [
                g(mi, {
                  htmlFor: "description",
                  children: "Description for website",
                }),
                A(Es, {
                  children: [
                    g(B1, {
                      type: "number",
                      id: "description",
                      disabled: k,
                      defaultValue: "",
                      ...u("description", {
                        required: "Description name is required",
                      }),
                    }),
                    (y == null ? void 0 : y.description) &&
                      g(gi, { children: y.description.message }),
                  ],
                }),
              ],
            }),
            A("div", {
              children: [
                g(mi, { children: "Cabin photo" }),
                A("div", {
                  className: "p-2",
                  children: [
                    g("input", {
                      type: "file",
                      ref: s,
                      accept: "image/*",
                      style: { display: "none" },
                      onChange: o,
                    }),
                    A("div", {
                      className: "border-dashed border-2 border-indigo-600",
                      children: [
                        g("span", {
                          className: "flex justify-center py-3 cursor-pointer",
                          onClick: a,
                          children: "Upload img",
                        }),
                        g("img", {
                          src: t,
                          alt: "",
                          width: "200px",
                          className: "m-auto py-2 max-h-[200px] ",
                        }),
                      ],
                    }),
                  ],
                }),
                (y == null ? void 0 : y.image) &&
                  g(gi, { children: y.image.message }),
              ],
            }),
            A(pi, {
              children: [
                g(ft, {
                  variation: "secondary",
                  type: "reset",
                  onClick: () => e(!1),
                  children: "Cancel",
                }),
                g(ft, { disabled: k, children: "Add cabin" }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
}
function u5() {
  return A(D1, {
    children: [
      g(R1, {
        filterField: "discount",
        options: [
          { value: "all", label: "All" },
          { value: "no-discount", label: "No-discount" },
          { value: "with-discount", label: "With-discount" },
        ],
      }),
      g(A1, {
        options: [
          { value: "name-asc", label: "Sort by name (a-z)" },
          { value: "name-desc", label: "Sort by name (z-a)" },
          { value: "price-asc", label: "Sort by price (low to high)" },
          { value: "price-desc", label: "Sort by price (high to low)" },
          {
            value: "maxCapecity-asc",
            label: "Sort by max capacity (low to high)",
          },
          {
            value: "maxCapecity-desc",
            label: "Sort by max capacity (high to low)",
          },
        ],
      }),
    ],
  });
}
function c5({ setShowCabin: e, showCabin: t }) {
  return A(Yt, {
    children: [
      A(br, {
        type: "horizontal",
        children: [
          g(u5, {}),
          g("div", {
            children: g(ft, {
              onClick: () => {
                e(!t);
              },
              children: "Create new",
            }),
          }),
        ],
      }),
      A(br, { children: [g(a5, {}), t && g(l5, { setShowCabin: e })] }),
    ],
  });
}
function d5() {
  return g(qt, { as: "h1", children: "Create a new user" });
}
const f5 = F.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`,
  h5 = F.label`
  font-weight: 500;
`,
  p5 = F.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;
function Bn({ label: e, error: t, children: r }) {
  return A(f5, {
    children: [
      e && g(h5, { htmlFor: r.props.id, children: e }),
      r,
      t && g(p5, { children: t }),
    ],
  });
}
async function m5() {
  const { data: e, error: t } = await _t.from("settings").select("*").single();
  if (t) throw (console.error(t), new Error("Settings could not be loaded"));
  return e;
}
async function g5(e) {
  const { data: t, error: r } = await _t
    .from("settings")
    .update(e)
    .eq("id", 1)
    .single();
  if (r) throw (console.error(r), new Error("Settings could not be updated"));
  return t;
}
const Pw = () => {
  const {
    isLoading: e,
    error: t,
    data: r,
  } = Bl({ queryKey: ["settings"], queryFn: m5 });
  return { isLoading: e, error: t, settings: r };
};
function v5() {
  const e = Xt(),
    { mutate: t, isLoading: r } = jr({
      mutationFn: g5,
      onSuccess: () => {
        dt.success("Setting successfully edited"),
          e.invalidateQueries({ queryKey: ["settings"] });
      },
      onError: (n) => dt.error(n.message),
    });
  return { isUpdating: r, updateSetting: t };
}
function y5() {
  const {
      isLoading: e,
      error: t,
      settings: {
        minBooking: r,
        maxBooking: n,
        maxGuestsPerBooking: i,
        breakfastPrice: s,
      } = {},
    } = Pw(),
    { isUpdating: a, updateSetting: o } = v5();
  if (e) return g(Ia, {});
  const l = (u, c) => {
    const { value: d } = u.target;
    console.log(d), d && o({ [c]: d });
  };
  return A("div", {
    children: [
      g(Bn, {
        label: "Minimum nights/booking",
        children: g(yt, {
          type: "number",
          id: "min-nights",
          defaultValue: r,
          disabled: a,
          onBlur: (u) => l(u, "minBooking"),
        }),
      }),
      g(Bn, {
        label: "Maximum nights/booking",
        children: g(yt, {
          type: "number",
          id: "max-nights",
          defaultValue: n,
          disabled: a,
          onBlur: (u) => l(u, "maxBooking"),
        }),
      }),
      g(Bn, {
        label: "Maximum guests/booking",
        children: g(yt, {
          type: "number",
          id: "max-guests",
          defaultValue: i,
          disabled: a,
          onBlur: (u) => l(u, "maxGuestsPerBooking"),
        }),
      }),
      g(Bn, {
        label: "Breakfast price",
        children: g(yt, {
          type: "number",
          id: "breakfast-price",
          defaultValue: s,
          disabled: a,
          onBlur: (u) => l(u, "breakfastPrice"),
        }),
      }),
    ],
  });
}
function w5() {
  return A(br, {
    children: [
      g(qt, { as: "h1", children: "Update hotel settings" }),
      g(y5, {}),
    ],
  });
}
function b5() {
  return A(Yt, {
    children: [
      g(qt, { as: "h1", children: "Update your account" }),
      A(br, {
        children: [
          g(qt, { as: "h3", children: "Update user data" }),
          g("p", { children: "Update user data form" }),
        ],
      }),
      A(br, {
        children: [
          g(qt, { as: "h3", children: "Update password" }),
          g("p", { children: "Update user password form" }),
        ],
      }),
    ],
  });
}
const k5 = async () => {
    const { data: e, error: t } = await _t.auth.signInWithOAuth({
      provider: "google",
    });
    if (t) throw new Error(t.message);
    return e;
  },
  _5 = () => {
    const e = Fr(),
      t = Xt(),
      { mutate: r, isLoading: n } = jr({
        mutationFn: () => k5(),
        onSuccess: (i) => {
          t.setQueryData(["user"], i), e("/dashboard");
        },
        onError: (i) => {
          Dt.error("Provided email or password are incorrect");
        },
      });
    return { login: r, isLoading: n };
  };
function S5() {
  const [e, t] = x.useState("quang20042204@gmail.com"),
    [r, n] = x.useState("uang22"),
    { login: i, isLoading: s } = _5();
  function a(o) {
    o.preventDefault(), i();
  }
  return A(uu, {
    onSubmit: a,
    children: [
      g(Bn, {
        label: "Email address",
        orientation: "vertical",
        children: g(yt, {
          type: "email",
          id: "email",
          autoComplete: "username",
          value: e,
          onChange: (o) => t(o.target.value),
          required: !0,
          disabled: s,
        }),
      }),
      g(Bn, {
        label: "Password",
        orientation: "vertical",
        children: g(yt, {
          type: "password",
          id: "password",
          autoComplete: "current-password",
          value: r,
          required: !0,
          disabled: s,
          onChange: (o) => n(o.target.value),
        }),
      }),
      g(Bn, {
        orientation: "vertical",
        children: A(ft, {
          className: "w-full flex justify-center items-center gap-3",
          size: "large",
          disabled: s || !e || !r,
          children: [s ? g(O1, {}) : "", " LOGIN"],
        }),
      }),
    ],
  });
}
const x5 = F.div`
  text-align: center;
  display: flex;
  justify-content: center;
`,
  C5 = F.img`
  height: 9.6rem;
  width: auto;
`;
function Ow() {
  return g(x5, { children: g(C5, { src: "/logo-light.png", alt: "Logo" }) });
}
const E5 = F.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 55rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  margin: auto;
`;
function P5() {
  return A(E5, {
    children: [
      g(Ow, {}),
      g(qt, { as: "h1", className: "text-center", children: "Login" }),
      g(S5, {}),
    ],
  });
}
function $h() {
  const e = Fr();
  return () => e(-1);
}
const O5 = F.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`,
  T5 = F.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;
function A5() {
  const e = $h();
  return g(O5, {
    children: A(T5, {
      children: [
        g(qt, {
          as: "h1",
          children: "The page you are looking for could not be found 😢",
        }),
        g("button", { onClick: e, size: "large", children: "← Go back" }),
      ],
    }),
  });
}
const R5 = F.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`,
  Ps = F(aS)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 3rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;
function D5() {
  return g("nav", {
    children: A(R5, {
      children: [
        g("li", {
          children: A(Ps, {
            to: "/dashboard",
            children: [g(nE, {}), g("span", { children: "Home" })],
          }),
        }),
        g("li", {
          children: A(Ps, {
            to: "/bookings",
            children: [g(JC, {}), g("span", { children: "Bookings" })],
          }),
        }),
        g("li", {
          children: A(Ps, {
            to: "/cabins",
            children: [g(Xy, {}), g("span", { children: "Cabins" })],
          }),
        }),
        g("li", {
          children: A(Ps, {
            to: "/users",
            children: [g(iE, {}), g("span", { children: "Users" })],
          }),
        }),
        g("li", {
          children: A(Ps, {
            to: "/settings",
            children: [g(tE, {}), g("span", { children: "Settings" })],
          }),
        }),
      ],
    }),
  });
}
const N5 = F.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 0;
  border-right: 1px solid #e9e0e0;
  position: fixed;
  top: 0;
  left: 0px;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  height: 100%;
  width: 230px;
  transition: 0.5s ease-in all;
  z-index: 999;
  /* @media (max-width: 1118px) {
    transform: translateX(-250px);
  } */
`;
function I5({ open: e }) {
  return A(N5, {
    className: `${e ? "max-[1118px]:-translate-x-[250px] " : ""}`,
    children: [g(Ow, {}), g(D5, {})],
  });
}
const $5 = F.header`
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  /* margin-left: -30px; */
  z-index: 900;
  margin-top: 10px;
  position: sticky;
  top: 0px;
  left: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: var(--shadow-md);
  padding: 20px 20px;
`;
function L5({ open: e, setOpen: t }) {
  const { pathname: r } = En(),
    n = r.split("/")[1],
    i = n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
  return g($5, {
    children: A("div", {
      className: "flex justify-between items-center text-[19px]",
      children: [
        A("h4", {
          className: "text-[16px] font-semibold",
          children: [
            g("span", {
              className: "font-light opacity-40 text-[15px]",
              children: "Pages",
            }),
            " /",
            i,
          ],
        }),
        A("div", {
          className: "max-[1118px]:block hidden",
          children: [
            g("input", {
              className: "label-check",
              id: "label-check",
              type: "checkbox",
              onChange: () => t(!e),
            }),
            A("label", {
              htmlFor: "label-check",
              className: "hamburger-label",
              children: [
                g("div", { className: "line1" }),
                g("div", { className: "line2" }),
                g("div", { className: "line3" }),
                g("label", {}),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
x.createContext();
const M5 = F.div`
  display: grid;
  grid-template-columns: 23rem 50fr;
  grid-template-rows: auto 1fr;
  /* min-height: 100vh; */
  height: 100%;
`,
  F5 = F.main`
  min-height: 100vh;

  background-color: var(--color-grey-50);

  /* z-index: 990; */
  @media (max-width: 1118px) {
    margin-left: -220px;
  }
`,
  j5 = F.div`
  max-width: 121rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  /* margin-top: 50px; */
  padding: 0 10px;
`;
function U5() {
  const [e, t] = x.useState(!1);
  return A(M5, {
    children: [
      g("div", {}),
      g(I5, { open: e }),
      g(F5, {
        children: A(j5, {
          children: [g(L5, { setOpen: t, open: e }), g(G_, {})],
        }),
      }),
    ],
  });
}
const z5 = F.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`,
  B5 = F.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`;
function fc({ icon: e, label: t, children: r }) {
  return A(z5, {
    children: [A(B5, { children: [e, g("span", { children: t })] }), r],
  });
}
const W5 = F.img`
  max-width: 2rem;
  border-radius: var(--border-radius-tiny);
  display: block;
  border: 1px solid var(--color-grey-100);
`,
  V5 = F.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`,
  H5 = F.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`,
  q5 = F.section`
  padding: 3.2rem 4rem 1.2rem;
`,
  Q5 = F.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`,
  Y5 = F.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${(e) =>
    e.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${(e) =>
    e.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`,
  G5 = F.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;
function Tw({ booking: e }) {
  const {
    created_at: t,
    startDate: r,
    endDate: n,
    numNights: i,
    numGuests: s,
    cabinPrice: a,
    extrasPrice: o,
    totalPrice: l,
    hasBreakfast: u,
    observations: c,
    isPaid: d,
    guests: { fullName: h, email: m, country: y, countryFlag: w, nationaID: k },
    cabins: { name: p },
  } = e;
  return A(V5, {
    children: [
      A(H5, {
        children: [
          A("div", {
            children: [
              g(Xy, {}),
              A("p", {
                children: [i, " nights in Cabin ", g("span", { children: p })],
              }),
            ],
          }),
          A("p", {
            children: [
              qs(new Date(r), "EEE, MMM dd yyyy"),
              " (",
              Hy(new Date(r)) ? "Today" : Qy(r),
              ") — ",
              qs(new Date(n), "EEE, MMM dd yyyy"),
            ],
          }),
        ],
      }),
      A(q5, {
        children: [
          A(Q5, {
            children: [
              w && g(W5, { src: w, alt: `Flag of ${y}` }),
              A("p", { children: [h, " ", s > 1 ? `+ ${s - 1} guests` : ""] }),
              g("span", { children: "•" }),
              g("p", { children: m }),
              g("span", { children: "•" }),
              A("p", { children: ["National ID ", k] }),
            ],
          }),
          c && g(fc, { icon: g(ZC, {}), label: "Observations", children: c }),
          g(fc, {
            icon: g(eE, {}),
            label: "Breakfast included?",
            children: u ? "Yes" : "No",
          }),
          A(Y5, {
            isPaid: d,
            children: [
              A(fc, {
                icon: g(rE, {}),
                label: "Total price",
                children: [
                  sr(l),
                  u && ` (${sr(a)} cabin + ${sr(o)} breakfast)`,
                ],
              }),
              g("p", { children: d ? "Paid" : "Will pay at property" }),
            ],
          }),
        ],
      }),
      g(G5, {
        children: A("p", {
          children: ["Booked ", qs(new Date(t), "EEE, MMM dd yyyy, p")],
        }),
      }),
    ],
  });
}
const Aw = F.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
`,
  Rw = F.button`
  color: var(--color-brand-600);
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }
`,
  K5 = F.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;
function X5() {
  const e = $h(),
    t = Fr(),
    [r, n] = x.useState(!1),
    { bookingId: i, isLoading: s } = _1(),
    { deleteBooking: a, isDelete: o } = T1(),
    { checkout: l, isCheckout: u } = E1();
  if (s) return g(Ia, {});
  const { status: c, id: d } = i,
    h = { unconfirmed: "blue", "checked-in": "green", "checked-out": "silver" },
    m = () => {
      n(!r);
    };
  return A(Yt, {
    children: [
      A(br, {
        type: "horizontal",
        children: [
          A(K5, {
            children: [
              A(qt, { as: "h1", children: ["Booking #", d] }),
              g(Yy, { type: h[c], children: c.replace("-", " ") }),
            ],
          }),
          g(Rw, { onClick: e, children: "← Back" }),
        ],
      }),
      g(Tw, { booking: i }),
      g("br", {}),
      A(Aw, {
        children: [
          c === "unconfirmed" &&
            g(sy, {
              to: `/checkin/${d}`,
              children: g(ft, { children: "Check in" }),
            }),
          c === "checked-in" &&
            g(ft, { onClick: () => l(d), children: "Check out" }),
          g(ft, { variation: "danger", onClick: m, children: "Delete" }),
          g(ft, { variation: "secondary", onClick: e, children: "Back" }),
        ],
      }),
      r &&
        g(wh, {
          onConfirm: () => a(d, { onSettled: () => t(-1) }),
          closeModal: m,
          disabled: o,
        }),
    ],
  });
}
const J5 = F.div`
  display: flex;
  gap: 1.6rem;

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;
function Ig({ checked: e, onChange: t, disabled: r = !1, id: n, children: i }) {
  return A(J5, {
    children: [
      g("input", {
        type: "checkbox",
        id: n,
        checked: e,
        onChange: t,
        disabled: r,
      }),
      g("label", { htmlFor: r ? "" : n, children: i }),
    ],
  });
}
const Z5 = () => {
    const e = Xt(),
      t = Fr(),
      { mutate: r, isLoading: n } = jr({
        mutationFn: ({ id: i, breakfast: s }) =>
          k1(i, { status: "checked-in", isPaid: s.hasBreakfast, ...s }),
        onSuccess: (i) => {
          Dt.success(`Booking ${i.id} successfully checked out`),
            e.invalidateQueries({ active: !0 }),
            t("/bookings");
        },
      });
    return { checkin: r, isCheckin: n };
  },
  eR = F.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`,
  $g = F.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;
function tR() {
  const e = $h();
  Fr();
  const { settings: t, isLoading: r } = Pw(),
    [n, i] = x.useState(!1),
    [s, a] = x.useState(!1),
    { bookingId: o, isLoading: l } = _1(),
    { checkin: u, isCheckin: c } = Z5();
  if (r || l) return g(Ia, {});
  const {
      id: d,
      guests: h,
      totalPrice: m,
      numGuests: y,
      hasBreakfast: w,
      numNights: k,
    } = o,
    p = t.breakfastPrice * y * k,
    f = () => {
      if (!s) return null;
      u({
        id: d,
        breakfast: {
          hasBreakfast: n ? !0 : w,
          extrasPrice: p,
          totalPrice: m + p,
        },
      });
    };
  return A(Yt, {
    children: [
      A(br, {
        type: "horizontal",
        children: [
          g(eR, { children: A(qt, { as: "h1", children: ["Booking #", d] }) }),
          g(Rw, { onClick: e, children: "← Back" }),
        ],
      }),
      g(Tw, { booking: o }),
      g("br", {}),
      !w &&
        A(Yt, {
          children: [
            g($g, {
              children: A(Ig, {
                checked: n,
                onChange: () => i(!n),
                children: ["Want to add breakfast for ", sr(p)],
              }),
            }),
            g("br", {}),
          ],
        }),
      g($g, {
        children: A(Ig, {
          onChange: () => a(!s),
          checked: s,
          children: [
            "I confirm that ",
            h.fullName,
            " has paid the total amount of",
            sr(n ? p + m : m),
            n &&
              `(${sr(p)} + ${sr(m)}
             
            })`,
          ],
        }),
      }),
      g("br", {}),
      A(Aw, {
        children: [
          A(ft, {
            onClick: f,
            disabled: s == !1 || c,
            children: ["Check in booking #", d],
          }),
          g(ft, { variation: "secondary", onClick: e, children: "Back" }),
        ],
      }),
      g("br", {}),
    ],
  });
}
const rR = new _S({ defaultOptions: { queries: { staleTime: 0 } } });
function nR() {
  const [e, t] = x.useState(!1);
  return g(Yt, {
    children: A(MS, {
      client: rR,
      children: [
        g(XS, { initialIsOpen: !1 }),
        g(Qx, {}),
        g(nS, {
          children: A(X_, {
            children: [
              A(St, {
                element: g(U5, { showCabin: e, setShowCabin: t }),
                children: [
                  g(St, {
                    index: !0,
                    element: g(Y_, { replace: !0, to: "dashboard" }),
                  }),
                  g(St, { path: "dashboard", element: g(Yx, {}) }),
                  g(St, { path: "bookings", element: g(PT, {}) }),
                  g(St, { path: "bookings/:id", element: g(X5, {}) }),
                  g(St, { path: "checkin/:id", element: g(tR, {}) }),
                  g(St, {
                    path: "cabins",
                    element: g(c5, { showCabin: e, setShowCabin: t }),
                  }),
                  g(St, { path: "users", element: g(d5, {}) }),
                  g(St, { path: "settings", element: g(w5, {}) }),
                  g(St, { path: "account", element: g(b5, {}) }),
                ],
              }),
              g(St, { path: "login", element: g(P5, {}) }),
              g(St, { path: "*", element: g(A5, {}) }),
            ],
          }),
        }),
        g(aT, {
          position: "top-right",
          reverseOrder: !0,
          containerStyle: { margin: "2rem" },
          toastOptions: {
            success: { duration: 3e3 },
            error: { duration: 3e3 },
            style: {
              fontSize: "1.4rem",
              maxWidth: "500px",
              padding: "0.8rem 1.2rem",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          },
        }),
      ],
    }),
  });
}
hc.createRoot(document.getElementById("root")).render(
  g(be.StrictMode, { children: g(nR, {}) })
);
export { Yd as g };
