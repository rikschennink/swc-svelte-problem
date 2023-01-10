let j, W;
function m() {}
function B(t) {
    return t();
}
function O() {
    return Object.create(null);
}
function x(t) {
    t.forEach(B);
}
function M(t) {
    return "function" == typeof t;
}
function P(t, e) {
    return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t;
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
function z(t, e) {
    e = "" + e, t.wholeText !== e && (t.data = e);
}
let p = [], S = [], g = [], T = [], R = Promise.resolve(), E = !1;
function C(t) {
    g.push(t);
}
let w = new Set(), $ = 0;
function D() {
    do {
        for(; $ < p.length;){
            let e = p[$];
            $++, j = e, function(t) {
                if (null !== t.fragment) {
                    t.update(), x(t.before_update);
                    let e = t.dirty;
                    t.dirty = [
                        -1
                    ], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(C);
                }
            }(e.$$);
        }
        for(j = null, p.length = 0, $ = 0; S.length;)S.pop()();
        for(let e1 = 0; e1 < g.length; e1 += 1){
            let n = g[e1];
            w.has(n) || (w.add(n), n());
        }
        g.length = 0;
    }while (p.length)
    for(; T.length;)T.pop()();
    E = !1, w.clear();
}
let y = new Set();
function F(t, e) {
    t && t.i && (y.delete(t), t.i(e));
}
function G(t, e, n, r) {
    let { fragment: f , after_update: s  } = t.$$;
    f && f.m(e, n), r || C(()=>{
        let i = t.$$.on_mount.map(B).filter(M);
        t.$$.on_destroy ? t.$$.on_destroy.push(...i) : x(i), t.$$.on_mount = [];
    }), s.forEach(C);
}
function H(t, e) {
    let n = t.$$;
    null !== n.fragment && (x(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function I(t, e, n, r, f, s, i, c = [
    -1
]) {
    j = t;
    let o = t.$$ = {
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
        context: new Map(e.context || (j ? j.$$.context : [])),
        callbacks: O(),
        dirty: c,
        skip_bound: !1,
        root: e.target || j.$$.root
    };
    i && i(o.root);
    let _ = !1;
    if (o.ctx = n ? n(t, e.props || {}, (l, k, ...N)=>{
        var t1;
        let A = N.length ? N[0] : k;
        return o.ctx && f(o.ctx[l], o.ctx[l] = A) && (!o.skip_bound && o.bound[l] && o.bound[l](A), _ && (-1 === (t1 = t).$$.dirty[0] && (p.push(t1), E || (E = !0, R.then(D)), t1.$$.dirty.fill(0)), t1.$$.dirty[l / 31 | 0] |= 1 << l % 31)), k;
    }) : [], o.update(), _ = !0, x(o.before_update), o.fragment = !!r && r(o.ctx), e.target) {
        if (e.hydrate) {
            let l = Array.from(e.target.childNodes);
            o.fragment && o.fragment.l(l), l.forEach(b);
        } else o.fragment && o.fragment.c();
        e.intro && F(t.$$.fragment), G(t, e.target, e.anchor, e.customElement), D();
    }
}
class J {
    $destroy() {
        H(this, 1), this.$destroy = m;
    }
    $on(e, n) {
        if (!M(n)) return m;
        let r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return r.push(n), ()=>{
            let f = r.indexOf(n);
            -1 !== f && r.splice(f, 1);
        };
    }
    $set(e) {
        this.$$set && 0 !== Object.keys(e).length && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
    }
}
function tt(t) {
    let e, n, r, f;
    return {
        c () {
            e = q("p"), n = a("Component "), r = a(t[0]), f = a(" works");
        },
        m (s, i) {
            v(s, e, i), d(e, n), d(e, r), d(e, f);
        },
        p (s, [i]) {
            1 & i && z(r, s[0]);
        },
        i: m,
        o: m,
        d (s) {
            s && b(e);
        }
    };
}
function et(t, e, n) {
    let { label: r = "empty"  } = e;
    return t.$$set = (f)=>{
        "label" in f && n(0, r = f.label);
    }, [
        r
    ];
}
class nt extends J {
    constructor(e){
        super(), I(this, e, et, tt, P, {
            label: 0
        });
    }
}
function rt(t) {
    let e, n, r, f, s, i, c;
    return i = new nt({
        props: {
            label: t[0]
        }
    }), {
        c () {
            var t1;
            e = q("p"), n = a("App "), r = a(t[0]), f = a(" works"), s = a(" "), (t1 = i.$$.fragment) && t1.c();
        },
        m (u, o) {
            v(u, e, o), d(e, n), d(e, r), d(e, f), v(u, s, o), G(i, u, o), c = !0;
        },
        p (u, [o]) {
            (!c || 1 & o) && z(r, u[0]);
            let _ = {};
            1 & o && (_.label = u[0]), i.$set(_);
        },
        i (u) {
            c || (F(i.$$.fragment, u), c = !0);
        },
        o (u) {
            var t, r;
            (t = i.$$.fragment) && t.o ? y.has(t) || (y.add(t), W.c.push(()=>{
                y.delete(t), r && r();
            }), t.o(u)) : r && r(), c = !1;
        },
        d (u) {
            u && b(e), u && b(s), H(i, u);
        }
    };
}
function ot(t, e, n) {
    let { label: r = "empty"  } = e;
    return t.$$set = (f)=>{
        "label" in f && n(0, r = f.label);
    }, [
        r
    ];
}
class ft extends J {
    constructor(e){
        super(), I(this, e, ot, rt, P, {
            label: 0
        });
    }
}
export { ft as App };


//# sourceMappingURL=test-swc.js.map