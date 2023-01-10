function _arrayLikeToArray(arr, len) {
    (null == len || len > arr.length) && (len = arr.length);
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _assertThisInitialized(self) {
    if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: !0,
            configurable: !0
        }
    }), superClass && _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    return call && ("object" === _typeof(call) || "function" == typeof call) ? call : _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
function _slicedToArray(arr, i) {
    return function(arr) {
        if (Array.isArray(arr)) return arr;
    }(arr) || function(arr, i) {
        var _s, _e, _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
        if (null != _i) {
            var _arr = [], _n = !0, _d = !1;
            try {
                for(_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i); _n = !0);
            } catch (err) {
                _d = !0, _e = err;
            } finally{
                try {
                    _n || null == _i.return || _i.return();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
    }(arr, i) || _unsupportedIterableToArray(arr, i) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}
var j, W, _typeof = function(obj) {
    return obj && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (o) {
        if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if ("Object" === n && o.constructor && (n = o.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e) {
            return !1;
        }
    }();
    return function() {
        var result, Super = _getPrototypeOf(Derived);
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
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
var p = [], S = [], g = [], T = [], R = Promise.resolve(), E = !1;
function C(t) {
    g.push(t);
}
var w = new Set(), $ = 0;
function D() {
    do {
        for(; $ < p.length;){
            var e = p[$];
            $++, j = e, function(t) {
                if (null !== t.fragment) {
                    t.update(), x(t.before_update);
                    var e = t.dirty;
                    t.dirty = [
                        -1
                    ], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(C);
                }
            }(e.$$);
        }
        for(j = null, p.length = 0, $ = 0; S.length;)S.pop()();
        for(var e1 = 0; e1 < g.length; e1 += 1){
            var n = g[e1];
            w.has(n) || (w.add(n), n());
        }
        g.length = 0;
    }while (p.length);
    for(; T.length;)T.pop()();
    E = !1, w.clear();
}
var y = new Set();
function F(t, e) {
    t && t.i && (y.delete(t), t.i(e));
}
function G(t, e, n, r) {
    var _t_$$ = t.$$, f = _t_$$.fragment, s = _t_$$.after_update;
    f && f.m(e, n), r || C(function() {
        var _t_$$_on_destroy, i = t.$$.on_mount.map(B).filter(M);
        t.$$.on_destroy ? (_t_$$_on_destroy = t.$$.on_destroy).push.apply(_t_$$_on_destroy, function(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }(i) || function(iter) {
            if ("undefined" != typeof Symbol && null != iter[Symbol.iterator] || null != iter["@@iterator"]) return Array.from(iter);
        }(i) || _unsupportedIterableToArray(i) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()) : x(i), t.$$.on_mount = [];
    }), s.forEach(C);
}
function H(t, e) {
    var n = t.$$;
    null !== n.fragment && (x(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function I(t, e, n, r, f, s, i) {
    var c = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : [
        -1
    ];
    j = t;
    var o = t.$$ = {
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
    var _ = !1;
    if (o.ctx = n ? n(t, e.props || {}, function(l, k) {
        for(var t1, _len = arguments.length, N = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++)N[_key - 2] = arguments[_key];
        var A = N.length ? N[0] : k;
        return o.ctx && f(o.ctx[l], o.ctx[l] = A) && (!o.skip_bound && o.bound[l] && o.bound[l](A), _ && (-1 === (t1 = t).$$.dirty[0] && (p.push(t1), E || (E = !0, R.then(D)), t1.$$.dirty.fill(0)), t1.$$.dirty[l / 31 | 0] |= 1 << l % 31)), k;
    }) : [], o.update(), _ = !0, x(o.before_update), o.fragment = !!r && r(o.ctx), e.target) {
        if (e.hydrate) {
            var l = Array.from(e.target.childNodes);
            o.fragment && o.fragment.l(l), l.forEach(b);
        } else o.fragment && o.fragment.c();
        e.intro && F(t.$$.fragment), G(t, e.target, e.anchor, e.customElement), D();
    }
}
var J = function() {
    "use strict";
    var staticProps;
    function J() {
        _classCallCheck(this, J);
    }
    return _defineProperties(J.prototype, [
        {
            key: "$destroy",
            value: function() {
                H(this, 1), this.$destroy = m;
            }
        },
        {
            key: "$on",
            value: function(e, n) {
                if (!M(n)) return m;
                var r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
                return r.push(n), function() {
                    var f = r.indexOf(n);
                    -1 !== f && r.splice(f, 1);
                };
            }
        },
        {
            key: "$set",
            value: function(e) {
                this.$$set && 0 !== Object.keys(e).length && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
            }
        }
    ]), staticProps && _defineProperties(J, staticProps), J;
}();
function tt(t) {
    var e, n, r, f;
    return {
        c: function() {
            e = q("p"), n = a("Component "), r = a(t[0]), f = a(" works");
        },
        m: function(s, i) {
            v(s, e, i), d(e, n), d(e, r), d(e, f);
        },
        p: function(s, param) {
            1 & _slicedToArray(param, 1)[0] && z(r, s[0]);
        },
        i: m,
        o: m,
        d: function(s) {
            s && b(e);
        }
    };
}
function et(t, e, n) {
    var tmp = e.label, r = void 0 === tmp ? "empty" : tmp;
    return t.$$set = function(f) {
        "label" in f && n(0, r = f.label);
    }, [
        r
    ];
}
var nt = function(J) {
    "use strict";
    _inherits(nt, J);
    var _super = _createSuper(nt);
    function nt(e) {
        var _this;
        return _classCallCheck(this, nt), I(_assertThisInitialized(_this = _super.call(this)), e, et, tt, P, {
            label: 0
        }), _possibleConstructorReturn(_this);
    }
    return nt;
}(J);
function rt(t) {
    var e, n, r, f, s, i, c;
    return i = new nt({
        props: {
            label: t[0]
        }
    }), {
        c: function() {
            var t1;
            e = q("p"), n = a("App "), r = a(t[0]), f = a(" works"), s = a(" "), (t1 = i.$$.fragment) && t1.c();
        },
        m: function(u, o) {
            v(u, e, o), d(e, n), d(e, r), d(e, f), v(u, s, o), G(i, u, o), c = !0;
        },
        p: function(u, param) {
            var o = _slicedToArray(param, 1)[0];
            (!c || 1 & o) && z(r, u[0]);
            var _ = {};
            1 & o && (_.label = u[0]), i.$set(_);
        },
        i: function(u) {
            c || (F(i.$$.fragment, u), c = !0);
        },
        o: function(u) {
            var t, r;
            (t = i.$$.fragment) && t.o ? y.has(t) || (y.add(t), W.c.push(function() {
                y.delete(t), r && r();
            }), t.o(u)) : r && r(), c = !1;
        },
        d: function(u) {
            u && b(e), u && b(s), H(i, u);
        }
    };
}
function ot(t, e, n) {
    var tmp = e.label, r = void 0 === tmp ? "empty" : tmp;
    return t.$$set = function(f) {
        "label" in f && n(0, r = f.label);
    }, [
        r
    ];
}
var ft = function(J) {
    "use strict";
    _inherits(ft, J);
    var _super = _createSuper(ft);
    function ft(e) {
        var _this;
        return _classCallCheck(this, ft), I(_assertThisInitialized(_this = _super.call(this)), e, ot, rt, P, {
            label: 0
        }), _possibleConstructorReturn(_this);
    }
    return ft;
}(J);
export { ft as App };


//# sourceMappingURL=test-swc.js.map