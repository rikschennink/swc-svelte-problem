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
        var call, result, Super = _getPrototypeOf(Derived);
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (call = result) && ("object" == (call && "undefined" != typeof Symbol && call.constructor === Symbol ? "symbol" : typeof call) || "function" == typeof call) ? call : _assertThisInitialized(this);
    };
}
function noop() {}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return "function" == typeof thing;
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && "object" == typeof a || "function" == typeof a;
}
function append(target, node) {
    target.appendChild(node);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode && node.parentNode.removeChild(node);
}
function element(name) {
    return document.createElement(name);
}
function text(data) {
    return document.createTextNode(data);
}
function set_data(text2, data) {
    data = "" + data, text2.wholeText !== data && (text2.data = data);
}
var current_component, outros, dirty_components = [], binding_callbacks = [], render_callbacks = [], flush_callbacks = [], resolved_promise = Promise.resolve(), update_scheduled = !1;
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
var seen_callbacks = new Set(), flushidx = 0;
function flush() {
    do {
        for(; flushidx < dirty_components.length;){
            var component = dirty_components[flushidx];
            flushidx++, current_component = component, function($$) {
                if (null !== $$.fragment) {
                    $$.update(), run_all($$.before_update);
                    var dirty = $$.dirty;
                    $$.dirty = [
                        -1
                    ], $$.fragment && $$.fragment.p($$.ctx, dirty), $$.after_update.forEach(add_render_callback);
                }
            }(component.$$);
        }
        for(current_component = null, dirty_components.length = 0, flushidx = 0; binding_callbacks.length;)binding_callbacks.pop()();
        for(var i = 0; i < render_callbacks.length; i += 1){
            var callback = render_callbacks[i];
            seen_callbacks.has(callback) || (seen_callbacks.add(callback), callback());
        }
        render_callbacks.length = 0;
    }while (dirty_components.length);
    for(; flush_callbacks.length;)flush_callbacks.pop()();
    update_scheduled = !1, seen_callbacks.clear();
}
var outroing = new Set();
function transition_in(block, local) {
    block && block.i && (outroing.delete(block), block.i(local));
}
function mount_component(component, target, anchor, customElement) {
    var _component_$$ = component.$$, fragment = _component_$$.fragment, after_update = _component_$$.after_update;
    fragment && fragment.m(target, anchor), customElement || add_render_callback(function() {
        var _component_$$_on_destroy, new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
        component.$$.on_destroy ? (_component_$$_on_destroy = component.$$.on_destroy).push.apply(_component_$$_on_destroy, function(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }(new_on_destroy) || function(iter) {
            if ("undefined" != typeof Symbol && null != iter[Symbol.iterator] || null != iter["@@iterator"]) return Array.from(iter);
        }(new_on_destroy) || _unsupportedIterableToArray(new_on_destroy) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()) : run_all(new_on_destroy), component.$$.on_mount = [];
    }), after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    var $$ = component.$$;
    null !== $$.fragment && (run_all($$.on_destroy), $$.fragment && $$.fragment.d(detaching), $$.on_destroy = $$.fragment = null, $$.ctx = []);
}
function init(component, options, instance2, create_fragment2, not_equal, props, append_styles) {
    var dirty = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : [
        -1
    ];
    current_component = component;
    var $$ = component.$$ = {
        fragment: null,
        ctx: [],
        props: props,
        update: noop,
        not_equal: not_equal,
        bound: blank_object(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (current_component ? current_component.$$.context : [])),
        callbacks: blank_object(),
        dirty: dirty,
        skip_bound: !1,
        root: options.target || current_component.$$.root
    };
    append_styles && append_styles($$.root);
    var ready = !1;
    if ($$.ctx = instance2 ? instance2(component, options.props || {}, function(i, ret) {
        for(var component1, _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++)rest[_key - 2] = arguments[_key];
        var value = rest.length ? rest[0] : ret;
        return $$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value) && (!$$.skip_bound && $$.bound[i] && $$.bound[i](value), ready) && (-1 === (component1 = component).$$.dirty[0] && (dirty_components.push(component1), update_scheduled || (update_scheduled = !0, resolved_promise.then(flush)), component1.$$.dirty.fill(0)), component1.$$.dirty[i / 31 | 0] |= 1 << i % 31), ret;
    }) : [], $$.update(), ready = !0, run_all($$.before_update), $$.fragment = !!create_fragment2 && create_fragment2($$.ctx), options.target) {
        if (options.hydrate) {
            var nodes = Array.from(options.target.childNodes);
            $$.fragment && $$.fragment.l(nodes), nodes.forEach(detach);
        } else $$.fragment && $$.fragment.c();
        options.intro && transition_in(component.$$.fragment), mount_component(component, options.target, options.anchor, options.customElement), flush();
    }
}
var SvelteComponent = function() {
    "use strict";
    var staticProps;
    function SvelteComponent() {
        _classCallCheck(this, SvelteComponent);
    }
    return _defineProperties(SvelteComponent.prototype, [
        {
            key: "$destroy",
            value: function() {
                destroy_component(this, 1), this.$destroy = noop;
            }
        },
        {
            key: "$on",
            value: function(type, callback) {
                if (!is_function(callback)) return noop;
                var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
                return callbacks.push(callback), function() {
                    var index = callbacks.indexOf(callback);
                    -1 !== index && callbacks.splice(index, 1);
                };
            }
        },
        {
            key: "$set",
            value: function($$props) {
                this.$$set && 0 !== Object.keys($$props).length && (this.$$.skip_bound = !0, this.$$set($$props), this.$$.skip_bound = !1);
            }
        }
    ]), staticProps && _defineProperties(SvelteComponent, staticProps), SvelteComponent;
}();
function create_fragment$1(ctx) {
    var p, t0, t1, t2;
    return {
        c: function() {
            p = element("p"), t0 = text("Component "), t1 = text(ctx[0]), t2 = text(" works");
        },
        m: function(target, anchor) {
            insert(target, p, anchor), append(p, t0), append(p, t1), append(p, t2);
        },
        p: function(ctx2, param) {
            1 & _slicedToArray(param, 1)[0] && set_data(t1, ctx2[0]);
        },
        i: noop,
        o: noop,
        d: function(detaching) {
            detaching && detach(p);
        }
    };
}
function instance$1($$self, $$props, $$invalidate) {
    var _$$props_label = $$props.label, label = void 0 === _$$props_label ? "empty" : _$$props_label;
    return $$self.$$set = function($$props2) {
        "label" in $$props2 && $$invalidate(0, label = $$props2.label);
    }, [
        label
    ];
}
var Component = function(SvelteComponent) {
    "use strict";
    _inherits(Component, SvelteComponent);
    var _super = _createSuper(Component);
    function Component(options) {
        var _this;
        return _classCallCheck(this, Component), init(_assertThisInitialized(_this = _super.call(this)), options, instance$1, create_fragment$1, safe_not_equal, {
            label: 0
        }), _this;
    }
    return Component;
}(SvelteComponent);
function create_fragment(ctx) {
    var p, t0, t1, t2, t3, component, current;
    return component = new Component({
        props: {
            label: ctx[0]
        }
    }), {
        c: function() {
            var block;
            p = element("p"), t0 = text("App "), t1 = text(ctx[0]), t2 = text(" works"), t3 = text(" "), (block = component.$$.fragment) && block.c();
        },
        m: function(target, anchor) {
            insert(target, p, anchor), append(p, t0), append(p, t1), append(p, t2), insert(target, t3, anchor), mount_component(component, target, anchor), current = !0;
        },
        p: function(ctx2, param) {
            var dirty = _slicedToArray(param, 1)[0];
            (!current || 1 & dirty) && set_data(t1, ctx2[0]);
            var component_changes = {};
            1 & dirty && (component_changes.label = ctx2[0]), component.$set(component_changes);
        },
        i: function(local) {
            current || (transition_in(component.$$.fragment, local), current = !0);
        },
        o: function(local) {
            var block, callback;
            (block = component.$$.fragment) && block.o ? outroing.has(block) || (outroing.add(block), outros.c.push(function() {
                outroing.delete(block), callback && callback();
            }), block.o(local)) : callback && callback(), current = !1;
        },
        d: function(detaching) {
            detaching && detach(p), detaching && detach(t3), destroy_component(component, detaching);
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    var _$$props_label = $$props.label, label = void 0 === _$$props_label ? "empty" : _$$props_label;
    return $$self.$$set = function($$props2) {
        "label" in $$props2 && $$invalidate(0, label = $$props2.label);
    }, [
        label
    ];
}
var App = function(SvelteComponent) {
    "use strict";
    _inherits(App, SvelteComponent);
    var _super = _createSuper(App);
    function App(options) {
        var _this;
        return _classCallCheck(this, App), init(_assertThisInitialized(_this = _super.call(this)), options, instance, create_fragment, safe_not_equal, {
            label: 0
        }), _this;
    }
    return App;
}(SvelteComponent);
export { App };


//# sourceMappingURL=test-swc.js.map