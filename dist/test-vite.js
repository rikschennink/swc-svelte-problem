function m() {
}
function B(t) {
  return t();
}
function O() {
  return /* @__PURE__ */ Object.create(null);
}
function x(t) {
  t.forEach(B);
}
function M(t) {
  return typeof t == "function";
}
function P(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function K(t) {
  return Object.keys(t).length === 0;
}
function d(t, e) {
  t.appendChild(e);
}
function v(t, e, n) {
  t.insertBefore(e, n || null);
}
function b(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function q(t) {
  return document.createElement(t);
}
function a(t) {
  return document.createTextNode(t);
}
function L() {
  return a(" ");
}
function Q(t) {
  return Array.from(t.childNodes);
}
function z(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
let j;
function h(t) {
  j = t;
}
const p = [], S = [], g = [], T = [], R = Promise.resolve();
let E = !1;
function U() {
  E || (E = !0, R.then(D));
}
function C(t) {
  g.push(t);
}
const w = /* @__PURE__ */ new Set();
let $ = 0;
function D() {
  const t = j;
  do {
    for (; $ < p.length; ) {
      const e = p[$];
      $++, h(e), V(e.$$);
    }
    for (h(null), p.length = 0, $ = 0; S.length; )
      S.pop()();
    for (let e = 0; e < g.length; e += 1) {
      const n = g[e];
      w.has(n) || (w.add(n), n());
    }
    g.length = 0;
  } while (p.length);
  for (; T.length; )
    T.pop()();
  E = !1, w.clear(), h(t);
}
function V(t) {
  if (t.fragment !== null) {
    t.update(), x(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(C);
  }
}
const y = /* @__PURE__ */ new Set();
let W;
function F(t, e) {
  t && t.i && (y.delete(t), t.i(e));
}
function X(t, e, n, r) {
  if (t && t.o) {
    if (y.has(t))
      return;
    y.add(t), W.c.push(() => {
      y.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function Y(t) {
  t && t.c();
}
function G(t, e, n, r) {
  const { fragment: f, after_update: s } = t.$$;
  f && f.m(e, n), r || C(() => {
    const i = t.$$.on_mount.map(B).filter(M);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : x(i), t.$$.on_mount = [];
  }), s.forEach(C);
}
function H(t, e) {
  const n = t.$$;
  n.fragment !== null && (x(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Z(t, e) {
  t.$$.dirty[0] === -1 && (p.push(t), U(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function I(t, e, n, r, f, s, i, c = [-1]) {
  const u = j;
  h(t);
  const o = t.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: m,
    not_equal: f,
    bound: O(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    callbacks: O(),
    dirty: c,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  i && i(o.root);
  let _ = !1;
  if (o.ctx = n ? n(t, e.props || {}, (l, k, ...N) => {
    const A = N.length ? N[0] : k;
    return o.ctx && f(o.ctx[l], o.ctx[l] = A) && (!o.skip_bound && o.bound[l] && o.bound[l](A), _ && Z(t, l)), k;
  }) : [], o.update(), _ = !0, x(o.before_update), o.fragment = r ? r(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const l = Q(e.target);
      o.fragment && o.fragment.l(l), l.forEach(b);
    } else
      o.fragment && o.fragment.c();
    e.intro && F(t.$$.fragment), G(t, e.target, e.anchor, e.customElement), D();
  }
  h(u);
}
class J {
  $destroy() {
    H(this, 1), this.$destroy = m;
  }
  $on(e, n) {
    if (!M(n))
      return m;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const f = r.indexOf(n);
      f !== -1 && r.splice(f, 1);
    };
  }
  $set(e) {
    this.$$set && !K(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function tt(t) {
  let e, n, r, f;
  return {
    c() {
      e = q("p"), n = a("Component "), r = a(t[0]), f = a(" works");
    },
    m(s, i) {
      v(s, e, i), d(e, n), d(e, r), d(e, f);
    },
    p(s, [i]) {
      i & 1 && z(r, s[0]);
    },
    i: m,
    o: m,
    d(s) {
      s && b(e);
    }
  };
}
function et(t, e, n) {
  let { label: r = "empty" } = e;
  return t.$$set = (f) => {
    "label" in f && n(0, r = f.label);
  }, [r];
}
class nt extends J {
  constructor(e) {
    super(), I(this, e, et, tt, P, { label: 0 });
  }
}
function rt(t) {
  let e, n, r, f, s, i, c;
  return i = new nt({ props: { label: t[0] } }), {
    c() {
      e = q("p"), n = a("App "), r = a(t[0]), f = a(" works"), s = L(), Y(i.$$.fragment);
    },
    m(u, o) {
      v(u, e, o), d(e, n), d(e, r), d(e, f), v(u, s, o), G(i, u, o), c = !0;
    },
    p(u, [o]) {
      (!c || o & 1) && z(r, u[0]);
      const _ = {};
      o & 1 && (_.label = u[0]), i.$set(_);
    },
    i(u) {
      c || (F(i.$$.fragment, u), c = !0);
    },
    o(u) {
      X(i.$$.fragment, u), c = !1;
    },
    d(u) {
      u && b(e), u && b(s), H(i, u);
    }
  };
}
function ot(t, e, n) {
  let { label: r = "empty" } = e;
  return t.$$set = (f) => {
    "label" in f && n(0, r = f.label);
  }, [r];
}
class ft extends J {
  constructor(e) {
    super(), I(this, e, ot, rt, P, { label: 0 });
  }
}
export {
  ft as App
};
