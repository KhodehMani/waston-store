module.exports = [
"[project]/vue-modules/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VUE_VERSION",
    ()=>Qo,
    "mountGiftComposer",
    ()=>Xo,
    "mountNewsletterForm",
    ()=>Zo
]);
// node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function e(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let n of e.split(","))t[n] = 1;
    return (e)=>e in t;
}
var t = {}, n = [], r = ()=>{}, i = ()=>!1, a = (e)=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), o = (e)=>e.startsWith("onUpdate:"), s = Object.assign, c = (e, t)=>{
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
}, l = Object.prototype.hasOwnProperty, u = (e, t)=>l.call(e, t), d = Array.isArray, f = (e)=>x(e) === "[object Map]", p = (e)=>x(e) === "[object Set]", m = (e)=>x(e) === "[object Date]", h = (e)=>typeof e == "function", g = (e)=>typeof e == "string", _ = (e)=>typeof e == "symbol", v = (e)=>typeof e == "object" && !!e, y = (e)=>(v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e)=>b.call(e), S = (e)=>x(e).slice(8, -1), C = (e)=>x(e) === "[object Object]", w = (e)=>g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ee = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), te = (e)=>{
    let t = /* @__PURE__ */ Object.create(null);
    return (n)=>t[n] || (t[n] = e(n));
}, ne = /-\w/g, T = /* @__PURE__ */ te((e)=>e.replace(ne, (e)=>e.slice(1).toUpperCase())), re = /\B([A-Z])/g, E = /* @__PURE__ */ te((e)=>e.replace(re, "-$1").toLowerCase()), ie = /* @__PURE__ */ te((e)=>e.charAt(0).toUpperCase() + e.slice(1)), ae = /* @__PURE__ */ te((e)=>e ? `on${ie(e)}` : ""), D = (e, t)=>!Object.is(e, t), oe = (e, ...t)=>{
    for(let n = 0; n < e.length; n++)e[n](...t);
}, se = (e, t, n, r = !1)=>{
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: r,
        value: n
    });
}, ce = (e)=>{
    let t = parseFloat(e);
    return isNaN(t) ? e : t;
}, le = (e)=>{
    let t = g(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
}, ue, de = ()=>ue || (ue = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : ("TURBOPACK compile-time value", "undefined") < "u" ? window : ("TURBOPACK compile-time value", "object") < "u" ? /*TURBOPACK member replacement*/ __turbopack_context__.g : {});
function fe(e) {
    if (d(e)) {
        let t = {};
        for(let n = 0; n < e.length; n++){
            let r = e[n], i = g(r) ? O(r) : fe(r);
            if (i) for(let e in i)t[e] = i[e];
        }
        return t;
    }
    if (g(e) || v(e)) return e;
}
var pe = /;(?![^(]*\))/g, me = /:([^]+)/, he = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function O(e) {
    let t = {};
    return e.replace(he, (e)=>e.startsWith("/*") ? "" : e).split(pe).forEach((e)=>{
        if (e) {
            let n = e.split(me);
            n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
    }), t;
}
function ge(e) {
    let t = "";
    if (g(e)) t = e;
    else if (d(e)) for(let n = 0; n < e.length; n++){
        let r = ge(e[n]);
        r && (t += r + " ");
    }
    else if (v(e)) for(let n in e)e[n] && (t += n + " ");
    return t.trim();
}
var _e = /* @__PURE__ */ e("itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function ve(e) {
    return !!e || e === "";
}
function ye(e, t, n) {
    if (e.length !== t.length) return !1;
    let r = !0;
    for(let i = 0; r && i < e.length; i++)r = Ce(e[i], t[i], n);
    return r;
}
function be(e, t, n) {
    if (e.size !== t.size) return !1;
    let r = Array.from(t), i = new Uint8Array(r.length);
    for (let t of e){
        let e = -1;
        for(let a = 0; a < r.length; a++)if (!i[a] && Ce(t, r[a], n)) {
            e = a;
            break;
        }
        if (e < 0) return !1;
        i[e] = 1;
    }
    return !0;
}
function xe(e, t, n) {
    let r = f(e), i = f(t);
    if (r || i || (r = p(e), i = p(t), r || i)) return r && i ? be(e, t, n) : !1;
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for(let r in e){
        let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
        if (i && !a || !i && a || !Ce(e[r], t[r], n)) return !1;
    }
    return String(e) === String(t);
}
function Se(e, t, n, r) {
    n || (n = [
        /* @__PURE__ */ new Map(),
        /* @__PURE__ */ new Map()
    ]);
    let [i, a] = n;
    if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
    i.set(e, t), a.set(t, e);
    let o = r(e, t, n);
    return i.delete(e), a.delete(t), o;
}
function Ce(e, t, n) {
    if (e === t) return !0;
    let r = m(e), i = m(t);
    return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = _(e), i = _(t), r || i ? e === t : (r = d(e), i = d(t), r || i ? r && i ? Se(e, t, n, ye) : !1 : (r = v(e), i = v(t), r || i ? !r || !i ? !1 : Se(e, t, n, xe) : String(e) === String(t))));
}
var we = (e)=>!!(e && e.__v_isRef === !0), k = (e)=>g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? we(e) ? k(e.value) : JSON.stringify(e, Te, 2) : String(e), Te = (e, t)=>we(t) ? Te(e, t.value) : f(t) ? {
        [`Map(${t.size})`]: [
            ...t.entries()
        ].reduce((e, [t, n], r)=>(e[Ee(t, r) + " =>"] = n, e), {})
    } : p(t) ? {
        [`Set(${t.size})`]: [
            ...t.values()
        ].map((e)=>Ee(e))
    } : _(t) ? Ee(t) : v(t) && !d(t) && !C(t) ? String(t) : t, Ee = (e, t = "")=>_(e) ? `Symbol(${e.description ?? t})` : e, A, De = class {
    constructor(e = !1){
        this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && A && (A.active ? (this.parent = A, this.index = (A.scopes || (A.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
    }
    get active() {
        return this._active;
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let e, t;
            if (this.scopes) {
                let n = this.scopes.slice();
                for(e = 0, t = n.length; e < t; e++)n[e].pause();
            }
            for(e = 0, t = this.effects.length; e < t; e++)this.effects[e].pause();
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let e, t;
            if (this.scopes) {
                let n = this.scopes.slice();
                for(e = 0, t = n.length; e < t; e++)n[e].resume();
            }
            let n = this.effects.slice();
            for(e = 0, t = n.length; e < t; e++)n[e].resume();
        }
    }
    run(e) {
        if (this._active) {
            let t = A;
            try {
                return A = this, e();
            } finally{
                A = t;
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = A, A = this);
    }
    off() {
        if (this._on > 0 && --this._on === 0) {
            if (A === this) A = this.prevScope;
            else {
                let e = A;
                for(; e;){
                    if (e.prevScope === this) {
                        e.prevScope = this.prevScope;
                        break;
                    }
                    e = e.prevScope;
                }
            }
            this.prevScope = void 0;
        }
    }
    stop(e) {
        if (this._active) {
            this._active = !1;
            let t, n;
            for(t = 0, n = this.effects.length; t < n; t++)this.effects[t].stop();
            for(this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++)this.cleanups[t]();
            if (this.cleanups.length = 0, this.scopes) {
                let e = this.scopes.slice();
                for(t = 0, n = e.length; t < n; t++)e[t].stop(!0);
                this.scopes.length = 0;
            }
            if (!this.detached && this.parent && !e) {
                let e = this.parent.scopes.pop();
                e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
            }
            this.parent = void 0;
        }
    }
};
function Oe() {
    return A;
}
var j, ke = /* @__PURE__ */ new WeakSet(), Ae = class {
    constructor(e){
        this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, A && (A.active ? A.effects.push(this) : this.flags &= -2);
    }
    pause() {
        this.flags |= 64;
    }
    resume() {
        this.flags & 64 && (this.flags &= -65, ke.has(this) && (ke.delete(this), this.trigger()));
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Pe(this);
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2, Ke(this), Le(this);
        let e = j, t = M;
        j = this, M = !0;
        try {
            return this.fn();
        } finally{
            Re(this), j = e, M = t, this.flags &= -3;
        }
    }
    stop() {
        if (this.flags & 1) {
            for(let e = this.deps; e; e = e.nextDep)Ve(e);
            this.deps = this.depsTail = void 0, Ke(this), this.onStop && this.onStop(), this.flags &= -2;
        }
    }
    trigger() {
        this.flags & 64 ? ke.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
        ze(this) && this.run();
    }
    get dirty() {
        return ze(this);
    }
}, je = 0, Me, Ne;
function Pe(e, t = !1) {
    e.flags |= 8, t ? (e.next = Ne, Ne = e) : (e.next = Me, Me = e);
}
function Fe() {
    je++;
}
function Ie() {
    if (--je > 0) return;
    if (Ne) {
        let e = Ne;
        for(Ne = void 0; e;){
            let t = e.next;
            e.next = void 0, e.flags &= -9, e = t;
        }
    }
    let e;
    for(; Me;){
        let t = Me;
        for(Me = void 0; t;){
            let n = t.next;
            if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
                t.trigger();
            } catch (t) {
                e || (e = t);
            }
            t = n;
        }
    }
    if (e) throw e;
}
function Le(e) {
    for(let t = e.deps; t; t = t.nextDep)t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Re(e) {
    let t, n = e.depsTail, r = n;
    for(; r;){
        let e = r.prevDep;
        r.version === -1 ? (r === n && (n = e), Ve(r), He(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
    }
    e.deps = t, e.depsTail = n;
}
function ze(e) {
    for(let t = e.deps; t; t = t.nextDep)if (t.dep.version !== t.version || t.dep.computed && (Be(t.dep.computed) || t.dep.version !== t.version)) return !0;
    return !!e._dirty;
}
function Be(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qe) || (e.globalVersion = qe, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ze(e)))) return;
    e.flags |= 2;
    let t = e.dep, n = j, r = M;
    j = e, M = !0;
    try {
        Le(e);
        let n = e.fn(e._value);
        (t.version === 0 || D(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
    } catch (e) {
        throw t.version++, e;
    } finally{
        j = n, M = r, Re(e), e.flags &= -3;
    }
}
function Ve(e, t = !1) {
    let { dep: n, prevSub: r, nextSub: i } = e;
    if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
        n.computed.flags &= -5;
        for(let e = n.computed.deps; e; e = e.nextDep)Ve(e, !0);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
}
function He(e) {
    let { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var M = !0, Ue = [];
function We() {
    Ue.push(M), M = !1;
}
function Ge() {
    let e = Ue.pop();
    M = e === void 0 || e;
}
function Ke(e) {
    let { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
        let e = j;
        j = void 0;
        try {
            t();
        } finally{
            j = e;
        }
    }
}
var qe = 0, Je = class {
    constructor(e, t){
        this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
}, Ye = class {
    constructor(e){
        this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
    }
    track(e) {
        if (!j || !M || j === this.computed) return;
        let t = this.activeLink;
        if (t === void 0 || t.sub !== j) t = this.activeLink = new Je(j, this), j.deps ? (t.prevDep = j.depsTail, j.depsTail.nextDep = t, j.depsTail = t) : j.deps = j.depsTail = t, Xe(t);
        else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
            let e = t.nextDep;
            e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = j.depsTail, t.nextDep = void 0, j.depsTail.nextDep = t, j.depsTail = t, j.deps === t && (j.deps = e);
        }
        return t;
    }
    trigger(e) {
        this.version++, qe++, this.notify(e);
    }
    notify(e) {
        Fe();
        try {
            for(let e = this.subs; e; e = e.prevSub)e.sub.notify() && e.sub.dep.notify();
        } finally{
            Ie();
        }
    }
};
function Xe(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
        let t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for(let e = t.deps; e; e = e.nextDep)Xe(e);
        }
        let n = e.dep.subs;
        n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
}
var Ze = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ Symbol(""), $e = /* @__PURE__ */ Symbol(""), et = /* @__PURE__ */ Symbol("");
function N(e, t, n) {
    if (M && j) {
        let t = Ze.get(e);
        t || Ze.set(e, t = /* @__PURE__ */ new Map());
        let r = t.get(n);
        r || (t.set(n, r = new Ye()), r.map = t, r.key = n), r.track();
    }
}
function tt(e, t, n, r, i, a) {
    let o = Ze.get(e);
    if (!o) {
        qe++;
        return;
    }
    let s = (e)=>{
        e && e.trigger();
    };
    if (Fe(), t === "clear") o.forEach(s);
    else {
        let i = d(e), a = i && w(n);
        if (i && n === "length") {
            let e = Number(r);
            o.forEach((t, n)=>{
                (n === "length" || n === et || !_(n) && n >= e) && s(t);
            });
        } else switch((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(et)), t){
            case "add":
                i ? a && s(o.get("length")) : (s(o.get(Qe)), f(e) && s(o.get($e)));
                break;
            case "delete":
                i || (s(o.get(Qe)), f(e) && s(o.get($e)));
                break;
            case "set":
                f(e) && s(o.get(Qe));
        }
    }
    Ie();
}
function nt(e) {
    let t = /* @__PURE__ */ I(e);
    return t === e || (N(t, "iterate", et), /* @__PURE__ */ F(e)) ? t : /* @__PURE__ */ P(e) ? /* @__PURE__ */ Bt(e) ? t.map((e)=>Ut(L(e))) : t.map(Ut) : t.map(L);
}
function rt(e) {
    return N(e = /* @__PURE__ */ I(e), "iterate", et), e;
}
function it(e, t) {
    return /* @__PURE__ */ P(e) ? Ut(/* @__PURE__ */ Bt(e) ? L(t) : t) : L(t);
}
var at = {
    __proto__: null,
    [Symbol.iterator] () {
        return ot(this, Symbol.iterator, (e)=>it(this, e));
    },
    concat (...e) {
        return nt(this).concat(...e.map((e)=>d(e) ? nt(e) : e));
    },
    entries () {
        return ot(this, "entries", (e)=>(e[1] = it(this, e[1]), e));
    },
    every (e, t) {
        return lt(this, "every", e, t, void 0, arguments);
    },
    filter (e, t) {
        return lt(this, "filter", e, t, (e)=>e.map((e)=>it(this, e)), arguments);
    },
    find (e, t) {
        return lt(this, "find", e, t, (e)=>it(this, e), arguments);
    },
    findIndex (e, t) {
        return lt(this, "findIndex", e, t, void 0, arguments);
    },
    findLast (e, t) {
        return lt(this, "findLast", e, t, (e)=>it(this, e), arguments);
    },
    findLastIndex (e, t) {
        return lt(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach (e, t) {
        return lt(this, "forEach", e, t, void 0, arguments);
    },
    includes (...e) {
        return dt(this, "includes", e);
    },
    indexOf (...e) {
        return dt(this, "indexOf", e);
    },
    join (e) {
        return nt(this).join(e);
    },
    lastIndexOf (...e) {
        return dt(this, "lastIndexOf", e);
    },
    map (e, t) {
        return lt(this, "map", e, t, void 0, arguments);
    },
    pop () {
        return ft(this, "pop");
    },
    push (...e) {
        return ft(this, "push", e);
    },
    reduce (e, ...t) {
        return ut(this, "reduce", e, t);
    },
    reduceRight (e, ...t) {
        return ut(this, "reduceRight", e, t);
    },
    shift () {
        return ft(this, "shift");
    },
    some (e, t) {
        return lt(this, "some", e, t, void 0, arguments);
    },
    splice (...e) {
        return ft(this, "splice", e);
    },
    toReversed () {
        return nt(this).toReversed();
    },
    toSorted (e) {
        return nt(this).toSorted(e);
    },
    toSpliced (...e) {
        return nt(this).toSpliced(...e);
    },
    unshift (...e) {
        return ft(this, "unshift", e);
    },
    values () {
        return ot(this, "values", (e)=>it(this, e));
    }
};
function ot(e, t, n) {
    let r = rt(e), i = r[t], a = i.call(r);
    if (r !== e && !/* @__PURE__ */ F(e)) {
        if (a[Symbol.toStringTag] === "Array Iterator") {
            let e = Object.create(Object.getPrototypeOf(a));
            return e.next = ()=>st(a.next(), n), i !== ct[t] && Object.defineProperties(e, {
                return: {
                    get () {
                        let e = a.return;
                        return typeof e == "function" ? e.bind(a) : e;
                    }
                },
                throw: {
                    get () {
                        let e = a.throw;
                        return typeof e == "function" ? e.bind(a) : e;
                    }
                }
            }), e;
        }
        a._next = a.next, a.next = ()=>st(a._next(), n);
    }
    return a;
}
function st(e, t) {
    return e.done || (e.value = t(e.value)), e;
}
var ct = Array.prototype;
function lt(e, t, n, r, i, a) {
    let o = rt(e), s = o !== e && !/* @__PURE__ */ F(e), c = o[t];
    if (c !== ct[t]) {
        let t = c.apply(e, a);
        return s ? L(t) : t;
    }
    let l = n;
    o !== e && (s ? l = function(t, r) {
        return n.call(this, it(e, t), r, e);
    } : n.length > 2 && (l = function(t, r) {
        return n.call(this, t, r, e);
    }));
    let u = c.call(o, l, r);
    return s && i ? i(u) : u;
}
function ut(e, t, n, r) {
    let i = rt(e), a = i !== e && !/* @__PURE__ */ F(e), o = n, s = !1;
    i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
        return s && (s = !1, t = it(e, t)), n.call(this, t, it(e, r), i, e);
    }) : n.length > 3 && (o = function(t, r, i) {
        return n.call(this, t, r, i, e);
    }));
    let c = i[t](o, ...r);
    return s ? it(e, c) : c;
}
function dt(e, t, n) {
    let r = /* @__PURE__ */ I(e);
    N(r, "iterate", et);
    let i = r[t](...n);
    return (i === -1 || i === !1) && /* @__PURE__ */ Vt(n[0]) ? (n[0] = /* @__PURE__ */ I(n[0]), r[t](...n)) : i;
}
function ft(e, t, n = []) {
    We(), Fe();
    let r = /* @__PURE__ */ I(e)[t].apply(e, n);
    return Ie(), Ge(), r;
}
var pt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), mt = /* @__PURE__ */ new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e)=>e !== "arguments" && e !== "caller").map((e)=>Symbol[e]).filter(_));
function ht(e) {
    _(e) || (e = String(e));
    let t = /* @__PURE__ */ I(this);
    return N(t, "has", e), t.hasOwnProperty(e);
}
var gt = class {
    constructor(e = !1, t = !1){
        this._isReadonly = e, this._isShallow = t;
    }
    get(e, t, n) {
        if (t === "__v_skip") return e.__v_skip;
        let r = this._isReadonly, i = this._isShallow;
        if (t === "__v_isReactive") return !r;
        if (t === "__v_isReadonly") return r;
        if (t === "__v_isShallow") return i;
        if (t === "__v_raw") return n === (r ? i ? Pt : Nt : i ? Mt : jt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
        let a = d(e);
        if (!r) {
            let e;
            if (a && (e = at[t])) return e;
            if (t === "hasOwnProperty") return ht;
        }
        let o = Reflect.get(e, t, /* @__PURE__ */ R(e) ? e : n);
        if ((_(t) ? mt.has(t) : pt(t)) || (r || N(e, "get", t), i)) return o;
        if (/* @__PURE__ */ R(o)) {
            let e = a && w(t) ? o : o.value;
            return r && v(e) ? /* @__PURE__ */ Rt(e) : e;
        }
        return v(o) ? r ? /* @__PURE__ */ Rt(o) : /* @__PURE__ */ It(o) : o;
    }
}, _t = class extends gt {
    constructor(e = !1){
        super(!1, e);
    }
    set(e, t, n, r) {
        let i = e[t], a = d(e) && w(t);
        if (!this._isShallow) {
            let e = /* @__PURE__ */ P(i);
            if (!/* @__PURE__ */ F(n) && !/* @__PURE__ */ P(n) && (i = /* @__PURE__ */ I(i), n = /* @__PURE__ */ I(n)), !a && /* @__PURE__ */ R(i) && !/* @__PURE__ */ R(n)) return e || (i.value = n), !0;
        }
        let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ R(e) ? e : r);
        return e === /* @__PURE__ */ I(r) && s && (o ? D(n, i) && tt(e, "set", t, n, i) : tt(e, "add", t, n)), s;
    }
    deleteProperty(e, t) {
        let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
        return i && n && tt(e, "delete", t, void 0, r), i;
    }
    has(e, t) {
        let n = Reflect.has(e, t);
        return _(t) && mt.has(t) || N(e, "has", t), n;
    }
    ownKeys(e) {
        return N(e, "iterate", d(e) ? "length" : Qe), Reflect.ownKeys(e);
    }
}, vt = class extends gt {
    constructor(e = !1){
        super(!0, e);
    }
    set(e, t) {
        return !0;
    }
    deleteProperty(e, t) {
        return !0;
    }
}, yt = /* @__PURE__ */ new _t(), bt = /* @__PURE__ */ new vt(), xt = /* @__PURE__ */ new _t(!0), St = (e)=>e, Ct = (e)=>Reflect.getPrototypeOf(e);
function wt(e, t, n) {
    return function(...r) {
        let i = this.__v_raw, a = /* @__PURE__ */ I(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? St : t ? Ut : L;
        return !t && N(a, "iterate", l ? $e : Qe), s(Object.create(u), {
            next () {
                let { value: e, done: t } = u.next();
                return t ? {
                    value: e,
                    done: t
                } : {
                    value: c ? [
                        d(e[0]),
                        d(e[1])
                    ] : d(e),
                    done: t
                };
            }
        });
    };
}
function Tt(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this;
    };
}
function Et(e, t) {
    let n = {
        get (n) {
            let r = this.__v_raw, i = /* @__PURE__ */ I(r), a = /* @__PURE__ */ I(n);
            e || (D(n, a) && N(i, "get", n), N(i, "get", a));
            let { has: o } = Ct(i), s = t ? St : e ? Ut : L;
            if (o.call(i, n)) return s(r.get(n));
            if (o.call(i, a)) return s(r.get(a));
            r !== i && r.get(n);
        },
        get size () {
            let t = this.__v_raw;
            return !e && N(/* @__PURE__ */ I(t), "iterate", Qe), t.size;
        },
        has (t) {
            let n = this.__v_raw, r = /* @__PURE__ */ I(n), i = /* @__PURE__ */ I(t);
            return e || (D(t, i) && N(r, "has", t), N(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
        },
        forEach (n, r) {
            let i = this, a = i.__v_raw, o = /* @__PURE__ */ I(a), s = t ? St : e ? Ut : L;
            return !e && N(o, "iterate", Qe), a.forEach((e, t)=>n.call(r, s(e), s(t), i));
        }
    };
    return s(n, e ? {
        add: Tt("add"),
        set: Tt("set"),
        delete: Tt("delete"),
        clear: Tt("clear")
    } : {
        add (e) {
            let n = /* @__PURE__ */ I(this), r = Ct(n), i = /* @__PURE__ */ I(e), a = !t && !/* @__PURE__ */ F(e) && !/* @__PURE__ */ P(e) ? i : e;
            return r.has.call(n, a) || D(e, a) && r.has.call(n, e) || D(i, a) && r.has.call(n, i) || (n.add(a), tt(n, "add", a, a)), this;
        },
        set (e, n) {
            t || /* @__PURE__ */ F(n) || /* @__PURE__ */ P(n) || (n = /* @__PURE__ */ I(n));
            let r = /* @__PURE__ */ I(this), { has: i, get: a } = Ct(r), o = i.call(r, e);
            o || (e = /* @__PURE__ */ I(e), o = i.call(r, e));
            let s = a.call(r, e);
            return r.set(e, n), o ? D(n, s) && tt(r, "set", e, n, s) : tt(r, "add", e, n), this;
        },
        delete (e) {
            let t = /* @__PURE__ */ I(this), { has: n, get: r } = Ct(t), i = n.call(t, e);
            i || (e = /* @__PURE__ */ I(e), i = n.call(t, e));
            let a = r ? r.call(t, e) : void 0, o = t.delete(e);
            return i && tt(t, "delete", e, void 0, a), o;
        },
        clear () {
            let e = /* @__PURE__ */ I(this), t = e.size !== 0, n = e.clear();
            return t && tt(e, "clear", void 0, void 0, void 0), n;
        }
    }), [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ].forEach((r)=>{
        n[r] = wt(r, e, t);
    }), n;
}
function Dt(e, t) {
    let n = Et(e, t);
    return (r, i, a)=>i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(u(n, i) && i in r ? n : r, i, a);
}
var Ot = {
    get: /* @__PURE__ */ Dt(!1, !1)
}, kt = {
    get: /* @__PURE__ */ Dt(!1, !0)
}, At = {
    get: /* @__PURE__ */ Dt(!0, !1)
}, jt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap();
function Ft(e) {
    switch(e){
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0;
    }
}
// @__NO_SIDE_EFFECTS__
function It(e) {
    return /* @__PURE__ */ P(e) ? e : zt(e, !1, yt, Ot, jt);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
    return zt(e, !1, xt, kt, Mt);
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
    return zt(e, !0, bt, At, Nt);
}
function zt(e, t, n, r, i) {
    if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
    let a = i.get(e);
    if (a) return a;
    let o = Ft(S(e));
    if (o === 0) return e;
    let s = new Proxy(e, o === 2 ? r : n);
    return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
    return /* @__PURE__ */ P(e) ? /* @__PURE__ */ Bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function P(e) {
    return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function F(e) {
    return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
    return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function I(e) {
    let t = e && e.__v_raw;
    return t ? /* @__PURE__ */ I(t) : e;
}
function Ht(e) {
    return !u(e, "__v_skip") && Object.isExtensible(e) && se(e, "__v_skip", !0), e;
}
var L = (e)=>v(e) ? /* @__PURE__ */ It(e) : e, Ut = (e)=>v(e) ? /* @__PURE__ */ Rt(e) : e;
// @__NO_SIDE_EFFECTS__
function R(e) {
    return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
    return Gt(e, !1);
}
function Gt(e, t) {
    return /* @__PURE__ */ R(e) ? e : new Kt(e, t);
}
var Kt = class {
    constructor(e, t){
        this.dep = new Ye(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ I(e), this._value = t ? e : L(e), this.__v_isShallow = t;
    }
    get value() {
        return this.dep.track(), this._value;
    }
    set value(e) {
        let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ F(e) || /* @__PURE__ */ P(e);
        e = n ? e : /* @__PURE__ */ I(e), D(e, t) && (this._rawValue = e, this._value = n ? e : L(e), this.dep.trigger());
    }
};
function z(e) {
    return /* @__PURE__ */ R(e) ? e.value : e;
}
var qt = {
    get: (e, t, n)=>t === "__v_raw" ? e : z(Reflect.get(e, t, n)),
    set: (e, t, n, r)=>{
        let i = e[t];
        return /* @__PURE__ */ R(i) && !/* @__PURE__ */ R(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
    }
};
function Jt(e) {
    return /* @__PURE__ */ Bt(e) ? e : new Proxy(e, qt);
}
var Yt = class {
    constructor(e, t, n){
        this.fn = e, this.setter = t, this._value = void 0, this.dep = new Ye(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qe - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
    }
    notify() {
        if (this.flags |= 16, !(this.flags & 8) && j !== this) return Pe(this, !0), !0;
    }
    get value() {
        let e = this.dep.track();
        return Be(this), e && (e.version = this.dep.version), this._value;
    }
    set value(e) {
        this.setter && this.setter(e);
    }
};
// @__NO_SIDE_EFFECTS__
function Xt(e, t, n = !1) {
    let r, i;
    return h(e) ? r = e : (r = e.get, i = e.set), new Yt(r, i, n);
}
var Zt = {}, Qt = /* @__PURE__ */ new WeakMap(), $t = void 0;
function en(e, t = !1, n = $t) {
    if (n) {
        let t = Qt.get(n);
        t || Qt.set(n, t = []), t.push(e);
    }
}
function tn(e, n, i = t) {
    let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e)=>o ? e : /* @__PURE__ */ F(e) || o === !1 || o === 0 ? nn(e, 1) : nn(e), m, g, _, v, y = !1, b = !1;
    if (/* @__PURE__ */ R(e) ? (g = ()=>e.value, y = /* @__PURE__ */ F(e)) : /* @__PURE__ */ Bt(e) ? (g = ()=>p(e), y = !0) : d(e) ? (b = !0, y = e.some((e)=>/* @__PURE__ */ Bt(e) || /* @__PURE__ */ F(e)), g = ()=>e.map((e)=>{
            if (/* @__PURE__ */ R(e)) return e.value;
            if (/* @__PURE__ */ Bt(e)) return p(e);
            if (h(e)) return f ? f(e, 2) : e();
        })) : g = h(e) ? n ? f ? ()=>f(e, 2) : e : ()=>{
        if (_) {
            We();
            try {
                _();
            } finally{
                Ge();
            }
        }
        let t = $t;
        $t = m;
        try {
            return f ? f(e, 3, [
                v
            ]) : e(v);
        } finally{
            $t = t;
        }
    } : r, n && o) {
        let e = g, t = o === !0 ? Infinity : o;
        g = ()=>nn(e(), t);
    }
    let x = Oe(), S = ()=>{
        m.stop(), x && x.active && c(x.effects, m);
    };
    if (s && n) {
        let e = n;
        n = (...t)=>{
            try {
                return e(...t);
            } finally{
                S();
            }
        };
    }
    let C = b ? Array(e.length).fill(Zt) : Zt, w = (e)=>{
        if (m.flags & 1 && (m.dirty || e)) {
            if (n) {
                let t = m.run();
                if (e || o || y || (b ? t.some((e, t)=>D(e, C[t])) : D(t, C))) {
                    let e = $t;
                    We();
                    try {
                        _ && _(), $t = m;
                        let e = [
                            t,
                            C === Zt ? void 0 : b && C[0] === Zt ? [] : C,
                            v
                        ];
                        C = t, f ? f(n, 3, e) : n(...e);
                    } finally{
                        $t = e, Ge();
                    }
                }
            } else m.run();
        }
    };
    return u && u(w), m = new Ae(g), m.scheduler = l ? ()=>l(w, !1) : w, v = (e)=>en(e, !1, m), _ = m.onStop = ()=>{
        let e = Qt.get(m);
        if (e) {
            if (f) f(e, 4);
            else for (let t of e)t();
            Qt.delete(m);
        }
    }, n ? a ? w(!0) : C = m.run() : l ? l(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function nn(e, t = Infinity, n) {
    if (t <= 0 || !v(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
    if (n.set(e, t), t--, /* @__PURE__ */ R(e)) nn(e.value, t, n);
    else if (d(e)) for(let r = 0; r < e.length; r++)nn(e[r], t, n);
    else if (p(e) || f(e)) e.forEach((e)=>{
        nn(e, t, n);
    });
    else if (C(e)) {
        for(let r in e)nn(e[r], t, n);
        for (let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e, r) && nn(e[r], t, n);
    }
    return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function rn(e, t, n, r) {
    try {
        return r ? e(...r) : e();
    } catch (e) {
        an(e, t, n);
    }
}
function B(e, t, n, r) {
    if (h(e)) {
        let i = rn(e, t, n, r);
        return i && y(i) && i.catch((e)=>{
            an(e, t, n, void 0, !0);
        }), i;
    }
    if (d(e)) {
        let i = [];
        for(let a = 0; a < e.length; a++)i.push(B(e[a], t, n, r));
        return i;
    }
}
function an(e, n, r, i = !0, a = !1) {
    let o = n ? n.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: c } = n && n.appContext.config || t;
    if (n) {
        let t = n.parent, i = n.proxy, o = `https://vuejs.org/error-reference/#runtime-${r}`;
        for(; t;){
            let n = t.ec;
            if (n && !t.isUnmounted && (!a || t.scope.active)) {
                for(let t = 0; t < n.length; t++)if (n[t](e, i, o) === !1) return;
            }
            t = t.parent;
        }
        if (s) {
            We(), rn(s, null, 10, [
                e,
                i,
                o
            ]), Ge();
            return;
        }
    }
    on(e, r, o, i, c);
}
function on(e, t, n, r = !0, i = !1) {
    if (i) throw e;
    console.error(e);
}
var V = [], H = -1, U = [], sn = null, cn = 0, ln = /* @__PURE__ */ Promise.resolve(), un = null;
function dn(e) {
    let t = un || ln;
    return e ? t.then(this ? e.bind(this) : e) : t;
}
function fn(e) {
    let t = H + 1, n = V.length;
    for(; t < n;){
        let r = t + n >>> 1, i = V[r], a = bn(i);
        a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
    }
    return t;
}
function pn(e) {
    if (!(e.flags & 1)) {
        let t = bn(e), n = V[V.length - 1];
        !n || !(e.flags & 2) && t >= bn(n) ? V.push(e) : V.splice(fn(t), 0, e), e.flags |= 1, mn();
    }
}
function mn() {
    un || (un = ln.then(xn));
}
function hn(e) {
    if (!d(e)) sn && e.id === -1 ? sn.splice(cn + 1, 0, e) : e.flags & 1 || (U.push(e), e.flags |= 1);
    else for(let t = 0; t < e.length; t++)U.push(e[t]);
    mn();
}
function gn(e, t, n, r = H + 1) {
    for(; r < V.length; r++){
        let n = V[r];
        if (n && n.flags & 2) {
            if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
            V.splice(r, 1), r = e ? r - 1 : H, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
        }
    }
}
function _n(e, t, n = 0) {
    if (U.length) {
        let e = U, r = 0;
        if (t) {
            e = [];
            for(let i = 0; i < U.length; i++){
                let a = U[i];
                (a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? U[r++] = a : e.push(a);
            }
        }
        let i = [
            ...new Set(e)
        ].sort((e, t)=>bn(e) - bn(t));
        if (U.length = r, sn) {
            for(let e = 0; e < i.length; e++)sn.push(i[e]);
            return;
        }
        for(sn = i, cn = 0; cn < sn.length; cn++){
            let e = sn[cn];
            e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
        }
        sn = null, cn = 0;
    }
}
var vn = !1;
function yn(e, t) {
    if (vn) {
        e();
        return;
    }
    let n = t === void 0 ? void 0 : new Set(U);
    e(), vn = !0;
    try {
        gn(void 0, t), _n(void 0, n, t);
    } finally{
        vn = !1;
    }
}
var bn = (e)=>e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function xn(e) {
    try {
        for(H = 0; H < V.length; H++){
            let e = V[H];
            e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), rn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
        }
    } finally{
        for(; H < V.length; H++){
            let e = V[H];
            e && (e.flags &= -2);
        }
        H = -1, V.length = 0, _n(e), un = null, (V.length || U.length) && xn(e);
    }
}
var W = null, Sn = null;
function Cn(e) {
    let t = W;
    return W = e, Sn = e && e.type.__scopeId || null, t;
}
function wn(e, t = W, n) {
    if (!t || e._n) return e;
    let r = (...n)=>{
        r._d && ci(-1);
        let i = Cn(t), a = ai.length, o;
        try {
            o = e(...n);
        } finally{
            for(let e = ai.length; e > a; e--)oi();
            Cn(i), r._d && ci(1);
        }
        return o;
    };
    return r._n = !0, r._c = !0, r._d = !0, r;
}
function Tn(e, n) {
    if (W === null) return e;
    let r = Ki(W), i = e.dirs || (e.dirs = []);
    for(let e = 0; e < n.length; e++){
        let [a, o, s, c = t] = n[e];
        a && (h(a) && (a = {
            mounted: a,
            updated: a
        }), a.deep && nn(o), i.push({
            dir: a,
            instance: r,
            value: o,
            oldValue: void 0,
            arg: s,
            modifiers: c
        }));
    }
    return e;
}
function En(e, t, n, r) {
    let i = e;
    if (r === "beforeMount") e._mount = e;
    else if (r === "beforeUpdate") {
        let n = t && t._mount;
        n && (n._latest = e, e._mount = n);
    } else if (r === "mounted") {
        let t = e._latest;
        e._mount = e._latest = void 0, t && (i = t, t._mount = void 0);
    }
    let a = i.dirs, o = t && t.dirs;
    for(let c = 0; c < a.length; c++){
        let l = a[c];
        o ? l.oldValue = o[c].value : r === "mounted" && l.oldValue !== void 0 && (l = s({}, l, {
            oldValue: void 0
        }));
        let u = l.dir[r];
        u && (We(), B(u, n, 8, [
            e.el,
            l,
            i,
            t
        ]), Ge());
    }
}
function Dn(e, t, n = !1) {
    let r = Mi();
    if (r || mr) {
        let i = mr ? mr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (i && e in i) return i[e];
        if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
    }
}
var On = /* @__PURE__ */ Symbol.for("v-scx"), kn = ()=>Dn(On);
function An(e, t, n) {
    return jn(e, t, n);
}
function jn(e, n, i = t) {
    let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
    if (Ri) {
        if (c === "sync") {
            let e = kn();
            f = e.__watcherHandles || (e.__watcherHandles = []);
        } else if (!d) {
            let e = ()=>{};
            return e.stop = r, e.resume = r, e.pause = r, e;
        }
    }
    let p = ji;
    u.call = (e, t, n)=>B(e, p, t, n);
    let m = !1;
    c === "post" ? u.scheduler = (e)=>{
        e.i = p, q(e, p && p.suspense);
    } : c !== "sync" && (m = !0, u.scheduler = (e, t)=>{
        t ? e() : pn(e);
    }), u.augmentJob = (e)=>{
        n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
    };
    let h = tn(e, n, u);
    return Ri && (f ? f.push(h) : d && h()), h;
}
var Mn = /* @__PURE__ */ Symbol("_vte"), Nn = (e)=>e.__isTeleport, G = /* @__PURE__ */ Symbol("_leaveCb"), Pn = /* @__PURE__ */ Symbol("_enterCb");
function Fn() {
    let e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: /* @__PURE__ */ new Map()
    };
    return rr(()=>{
        e.isMounted = !0;
    }), ir(()=>{
        e.isUnmounting = !0;
    }), e;
}
var K = [
    Function,
    Array
], In = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: K,
    onEnter: K,
    onAfterEnter: K,
    onEnterCancelled: K,
    onBeforeLeave: K,
    onLeave: K,
    onAfterLeave: K,
    onLeaveCancelled: K,
    onBeforeAppear: K,
    onAppear: K,
    onAfterAppear: K,
    onAppearCancelled: K
}, Ln = {
    name: "BaseTransition",
    props: In,
    setup (e, { slots: t }) {
        let n = Mi(), r = Fn();
        return ()=>{
            let i = t.default && Gn(t.default(), !0), a = i && i.length ? Rn(i) : n.subTree ? xi() : void 0;
            if (!a) return;
            let o = /* @__PURE__ */ I(e), { mode: s } = o;
            if (r.isLeaving) return Hn(a);
            let c = Un(a);
            if (!c) return Hn(a);
            let l = Vn(c, o, r, n);
            c.type !== Y && Wn(c, l);
            let u = n.subTree && Un(n.subTree);
            if (u && u.type !== Y && !pi(u, c) && Kn(n.subTree)) {
                let e = Vn(u, o, r, n);
                if (Wn(u, e), s === "out-in" && c.type !== Y) return r.isLeaving = !0, e.afterLeave = ()=>{
                    if (r.isLeaving = !1, !(n.job.flags & 8)) {
                        if (n.effect.flags & 2) {
                            let e = ()=>{
                                n.job.flags & 8 || n.update();
                            };
                            e.i = n, pn(e);
                        } else n.update();
                    }
                    delete e.afterLeave, u = void 0;
                }, Hn(a);
                s === "in-out" && c.type !== Y ? e.delayLeave = (e, t, n)=>{
                    let i = Bn(r, u);
                    i[String(u.key)] = u, e[G] = ()=>{
                        t(), e[G] = void 0, delete l.delayedLeave, u = void 0;
                    }, l.delayedLeave = ()=>{
                        n(), delete l.delayedLeave, u = void 0;
                    };
                } : u = void 0;
            } else u && (u = void 0);
            return a;
        };
    }
};
function Rn(e) {
    let t = e[0];
    if (e.length > 1) {
        for (let n of e)if (n.type !== Y) {
            t = n;
            break;
        }
    }
    return t;
}
var zn = Ln;
function Bn(e, t) {
    let { leavingVNodes: n } = e, r = n.get(t.type);
    return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Vn(e, t, n, r) {
    let { appear: i, mode: a, persisted: o = !1, onBeforeEnter: s, onEnter: c, onAfterEnter: l, onEnterCancelled: u, onBeforeLeave: f, onLeave: p, onAfterLeave: m, onLeaveCancelled: h, onBeforeAppear: g, onAppear: _, onAfterAppear: v, onAppearCancelled: y } = t, b = String(e.key), x = Bn(n, e), S = (e, t)=>{
        e && B(e, r, 9, t);
    }, C = (e, t)=>{
        let n = t[1];
        S(e, t), d(e) ? e.every((e)=>e.length <= 1) && n() : e.length <= 1 && n();
    }, w = {
        mode: a,
        persisted: o,
        beforeEnter (t) {
            let r = s;
            if (!n.isMounted) {
                if (i) r = g || s;
                else return;
            }
            t[G] && t[G](!0);
            let a = x[b];
            if (a && pi(e, a)) {
                let e = a.el[G];
                if (!e) {
                    let t = Kn(a);
                    e = t && t.el[G];
                }
                e && e();
            }
            S(r, [
                t
            ]);
        },
        enter (t) {
            if (x[b] === e) return;
            let r = c, a = l, o = u;
            if (!n.isMounted) {
                if (i) r = _ || c, a = v || l, o = y || u;
                else return;
            }
            let s = !1;
            t[Pn] = (e)=>{
                s || (s = !0, S(e ? o : a, [
                    t
                ]), w.delayedLeave && w.delayedLeave(), t[Pn] = void 0);
            };
            let d = t[Pn].bind(null, !1);
            r ? C(r, [
                t,
                d
            ]) : d();
        },
        leave (t, r) {
            let i = String(e.key);
            if (t[Pn] && t[Pn](!0), n.isUnmounting) return r();
            S(f, [
                t
            ]);
            let a = !1;
            t[G] = (n)=>{
                a || (a = !0, r(), S(n ? h : m, [
                    t
                ]), t[G] = void 0, x[i] === e && delete x[i]);
            };
            let o = t[G].bind(null, !1);
            x[i] = e, p ? C(p, [
                t,
                o
            ]) : o();
        },
        clone (e) {
            let i = Vn(e, t, n, r);
            return i.afterLeave = ()=>{
                w.afterLeave && w.afterLeave();
            }, i.delayLeave = (e, t, n)=>{
                w.delayLeave ? w.delayLeave(e, t, n) : n();
            }, i.delayedLeave = ()=>{
                w.delayedLeave && w.delayedLeave();
            }, i;
        }
    };
    return w;
}
function Hn(e) {
    if (er(e)) return e = vi(e), e.children = null, e;
}
function Un(e) {
    if (!er(e)) return Nn(e.type) && e.children ? Rn(e.children) : e;
    if (e.component) return e.component.subTree;
    let { shapeFlag: t, children: n } = e;
    if (n) {
        if (t & 16) return n[0];
        if (t & 32 && h(n.default)) return n.default();
    }
}
function Wn(e, t) {
    if (e.shapeFlag & 6 && e.component) {
        e.transition = t;
        let n = e.component.subTree;
        Wn(Nn(n.type) && Un(n) || n, t);
    } else if (e.shapeFlag & 128) {
        let n = e.suspense;
        if (n) {
            let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
            e && Wn(e, t.clone(e));
        } else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
    } else if (e.transition = t, e.type === J && d(e.children)) {
        let n = br(e.children, !1);
        n && Wn(n, t);
    }
}
function Gn(e, t = !1, n) {
    let r = [], i = 0;
    for(let a = 0; a < e.length; a++){
        let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
        o.type === J ? (o.patchFlag & 128 && i++, r = r.concat(Gn(o.children, t, s))) : (t || o.type !== Y) && r.push(s == null ? o : vi(o, {
            key: s
        }));
    }
    if (i > 1) for(let e = 0; e < r.length; e++)r[e].patchFlag = -2;
    return r;
}
function Kn(e) {
    if (e.component) return Kn(e.component.subTree);
    if (e.type === J) {
        let t = d(e.children) && br(e.children, !1);
        return t ? Kn(t) : void 0;
    }
    if (e.type !== Y) return e;
}
// @__NO_SIDE_EFFECTS__
function qn(e, t) {
    return h(e) ? /* @__PURE__ */ s({
        name: e.name
    }, t, {
        setup: e
    }) : e;
}
function Jn(e) {
    e.ids = [
        e.ids[0] + e.ids[2]++ + "-",
        0,
        0
    ];
}
function Yn(e, t) {
    let n;
    return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Xn = /* @__PURE__ */ new WeakMap();
function Zn(e, n, r, a, o = !1) {
    if (d(e)) {
        e.forEach((e, t)=>Zn(e, n && (d(n) ? n[t] : n), r, a, o));
        return;
    }
    if ($n(a) && !o) {
        a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Zn(e, n, r, a.component.subTree);
        return;
    }
    let s = a.shapeFlag & 4 ? Ki(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ I(v), b = v === t ? i : (e)=>!Yn(_, e) && u(y, e), x = (e, t)=>!(t && Yn(_, t));
    if (m != null && m !== p) {
        if (Qn(n), g(m)) _[m] = null, b(m) && (v[m] = null);
        else if (/* @__PURE__ */ R(m)) {
            let e = n;
            x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
        }
    }
    if (h(p)) rn(p, f, 12, [
        l,
        _
    ]);
    else {
        let t = g(p), n = /* @__PURE__ */ R(p);
        if (t || n) {
            let i = ()=>{
                if (e.f) {
                    let n = t ? b(p) ? v[p] : _[p] : x(p) || !e.k ? p.value : _[e.k];
                    if (o) d(n) && c(n, s);
                    else if (d(n)) n.includes(s) || n.push(s);
                    else if (t) _[p] = [
                        s
                    ], b(p) && (v[p] = _[p]);
                    else {
                        let t = [
                            s
                        ];
                        x(p, e.k) && (p.value = t), e.k && (_[e.k] = t);
                    }
                } else t ? (_[p] = l, b(p) && (v[p] = l)) : n && (x(p, e.k) && (p.value = l), e.k && (_[e.k] = l));
            };
            if (l) {
                let t = ()=>{
                    i(), Xn.delete(e);
                };
                t.id = -1, Xn.set(e, t), q(t, r);
            } else Qn(e), i();
        }
    }
}
function Qn(e) {
    let t = Xn.get(e);
    t && (t.flags |= 8, Xn.delete(e));
}
de().requestIdleCallback, de().cancelIdleCallback;
var $n = (e)=>!!e.type.__asyncLoader, er = (e)=>e.type.__isKeepAlive;
function tr(e, t, n = ji, r = !1) {
    if (n) {
        let i = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...r)=>{
            We();
            let i = Fi(n), a = B(t, n, e, r);
            return i(), Ge(), a;
        });
        return r ? i.unshift(a) : i.push(a), a;
    }
}
var nr = (e)=>(t, n = ji)=>{
        Ri && e !== "sp" || tr(e, (...e)=>t(...e), n);
    }, rr = nr("m"), ir = nr("bum"), ar = /* @__PURE__ */ Symbol.for("v-ndc");
function or(e, t, n, r) {
    let i, a = n && n[r], o = d(e);
    if (o || g(e)) {
        let n = o && /* @__PURE__ */ Bt(e), r = !1, s = !1;
        n && (r = !/* @__PURE__ */ F(e), s = /* @__PURE__ */ P(e), e = rt(e)), i = Array(e.length);
        for(let n = 0, o = e.length; n < o; n++)i[n] = t(r ? s ? Ut(L(e[n])) : L(e[n]) : e[n], n, void 0, a && a[n]);
    } else if (typeof e == "number") {
        if (!Number.isInteger(e) || e < 0) i = [];
        else {
            i = Array(e);
            for(let n = 0; n < e; n++)i[n] = t(n + 1, n, void 0, a && a[n]);
        }
    } else if (v(e)) {
        if (e[Symbol.iterator]) i = Array.from(e, (e, n)=>t(e, n, void 0, a && a[n]));
        else {
            let n = Object.keys(e);
            i = Array(n.length);
            for(let r = 0, o = n.length; r < o; r++){
                let o = n[r];
                i[r] = t(e[o], o, r, a && a[r]);
            }
        }
    } else i = [];
    return n && (n[r] = i), i;
}
var sr = (e)=>e ? Li(e) ? Ki(e) : sr(e.parent) : null, cr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
    $: (e)=>e,
    $el: (e)=>e.vnode.el,
    $data: (e)=>e.data,
    $props: (e)=>e.props,
    $attrs: (e)=>e.attrs,
    $slots: (e)=>e.slots,
    $refs: (e)=>e.refs,
    $parent: (e)=>sr(e.parent),
    $root: (e)=>sr(e.root),
    $host: (e)=>e.ce,
    $emit: (e)=>e.emit,
    $options: (e)=>e.type,
    $forceUpdate: (e)=>e.f || (e.f = ()=>{
            pn(e.update);
        }),
    $nextTick: (e)=>e.n || (e.n = dn.bind(e.proxy)),
    $watch: (e)=>r
}), lr = (e, n)=>e !== t && !e.__isScriptSetup && u(e, n), ur = {
    get ({ _: e }, n) {
        if (n === "__v_skip") return !0;
        let { ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
        if (n[0] !== "$") {
            let e = s[n];
            if (e !== void 0) switch(e){
                case 1:
                    return i[n];
                case 2:
                    return a[n];
                case 4:
                    return r[n];
                case 3:
                    return o[n];
            }
            else if (lr(i, n)) return s[n] = 1, i[n];
            else if (u(o, n)) return s[n] = 3, o[n];
            else if (r !== t && u(r, n)) return s[n] = 4, r[n];
            else s[n] = 0;
        }
        let d = cr[n], f, p;
        if (d) return n === "$attrs" && N(e.attrs, "get", ""), d(e);
        if ((f = c.__cssModules) && (f = f[n])) return f;
        if (r !== t && u(r, n)) return s[n] = 4, r[n];
        if (p = l.config.globalProperties, u(p, n)) return p[n];
    },
    set ({ _: e }, t, n) {
        let { data: r, setupState: i, ctx: a } = e;
        return lr(i, t) ? (i[t] = n, !0) : u(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
    },
    has ({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: o } }, s) {
        let c;
        return !!(n[s] || lr(t, s) || u(a, s) || u(r, s) || u(cr, s) || u(i.config.globalProperties, s) || (c = o.__cssModules) && c[s]);
    },
    defineProperty (e, t, n) {
        return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
    }
};
function dr() {
    return {
        app: null,
        config: {
            isNativeTag: i,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: /* @__PURE__ */ Object.create(null),
        optionsCache: /* @__PURE__ */ new WeakMap(),
        propsCache: /* @__PURE__ */ new WeakMap(),
        emitsCache: /* @__PURE__ */ new WeakMap()
    };
}
var fr = 0;
function pr(e, t) {
    return function(n, r = null) {
        h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
        let i = dr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
            _uid: fr++,
            _component: n,
            _props: r,
            _container: null,
            _context: i,
            _instance: null,
            version: Xi,
            get config () {
                return i.config;
            },
            set config (e){},
            use (e, ...t) {
                return a.has(e) || (e && h(e.install) ? (a.add(e), e.install(l, ...t)) : h(e) && (a.add(e), e(l, ...t))), l;
            },
            mixin (e) {
                return l;
            },
            component (e, t) {
                return t ? (i.components[e] = t, l) : i.components[e];
            },
            directive (e, t) {
                return t ? (i.directives[e] = t, l) : i.directives[e];
            },
            mount (a, o, s) {
                if (!c) {
                    let u = l._ceVNode || $(n, r);
                    return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, Ki(u.component);
                }
            },
            onUnmount (e) {
                o.push(e);
            },
            unmount () {
                c && (B(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
            },
            provide (e, t) {
                return i.provides[e] = t, l;
            },
            runWithContext (e) {
                let t = mr;
                mr = l;
                try {
                    return e();
                } finally{
                    mr = t;
                }
            }
        };
        return l;
    };
}
var mr = null, hr = (e, t)=>t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${T(t)}Modifiers`] || e[`${E(t)}Modifiers`];
function gr(e, n, ...r) {
    if (e.isUnmounted) return;
    let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && hr(i, n.slice(7));
    s && (s.trim && (a = r.map((e)=>g(e) ? e.trim() : e)), s.number && (a = a.map(ce)));
    let c, l = i[c = ae(n)] || i[c = ae(T(n))];
    !l && o && (l = i[c = ae(E(n))]), l && B(l, e, 6, a);
    let u = i[c + "Once"];
    if (u) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[c]) return;
        e.emitted[c] = !0, B(u, e, 6, a);
    }
}
function _r(e, t, n = !1) {
    let r = t.emitsCache, i = r.get(e);
    if (i !== void 0) return i;
    let a = e.emits, o = {};
    return a ? (d(a) ? a.forEach((e)=>o[e] = null) : s(o, a), v(e) && r.set(e, o), o) : (v(e) && r.set(e, null), null);
}
function vr(e, t) {
    return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, E(t)) || u(e, t));
}
function yr(e) {
    let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Cn(e), v, y;
    try {
        if (n.shapeFlag & 4) {
            let e = i || r, t = e;
            v = Si(u.call(t, e, d, f, m, p, h)), y = c;
        } else {
            let e = t;
            v = Si(e.length > 1 ? e(f, {
                attrs: c,
                slots: s,
                emit: l
            }) : e(f, null)), y = t.props ? c : xr(c);
        }
    } catch (t) {
        ai.length = 0, an(t, e, 1), v = $(Y);
    }
    let b = v;
    if (y && g !== !1) {
        let e = Object.keys(y), { shapeFlag: t } = b;
        e.length && t & 7 && (a && e.some(o) && (y = Sr(y, a)), b = vi(b, y, !1, !0));
    }
    return n.dirs && (b = vi(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Wn(Nn(b.type) && Un(b) || b, n.transition), v = b, Cn(_), v;
}
function br(e, t = !0) {
    let n;
    for(let t = 0; t < e.length; t++){
        let r = e[t];
        if (fi(r)) {
            if (r.type !== Y || r.children === "v-if") {
                if (n) return;
                n = r;
            }
        } else return;
    }
    return n;
}
var xr = (e)=>{
    let t;
    for(let n in e)(n === "class" || n === "style" || a(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
}, Sr = (e, t)=>{
    let n = {};
    for(let r in e)o(r) && r.slice(9) in t || (n[r] = e[r]);
    return n;
};
function Cr(e, t, n) {
    let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && c >= 0) {
        if (c & 1024) return !0;
        if (c & 16) return r ? wr(r, o, l) : !!o;
        if (c & 8) {
            let e = t.dynamicProps;
            for(let t = 0; t < e.length; t++){
                let n = e[t];
                if (Tr(o, r, n) && !vr(l, n)) return !0;
            }
        }
    } else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || wr(r, o, l) : !!o;
    return !1;
}
function wr(e, t, n) {
    let r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for(let i = 0; i < r.length; i++){
        let a = r[i];
        if (!u(e, a) || Tr(t, e, a) && !vr(n, a)) return !0;
    }
    return !1;
}
function Tr(e, t, n) {
    let r = e[n], i = t[n];
    return n === "style" && v(r) && v(i) ? !Ce(r, i) : r !== i;
}
function Er({ vnode: e, parent: t, suspense: n }, r) {
    for(; t;){
        let n = t.subTree;
        if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
        else break;
    }
    n && n.activeBranch === e && (n.vnode.el = r);
}
var Dr = {}, Or = ()=>Object.create(Dr), kr = (e)=>Object.getPrototypeOf(e) === Dr;
function Ar(e, t, n, r = !1) {
    let i = {}, a = Or();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), Mr(e, t, i, a);
    for(let t in e.propsOptions[0])t in i || (i[t] = void 0);
    e.props = n ? r ? i : /* @__PURE__ */ Lt(i) : e.type.props ? i : a, e.attrs = a;
}
function jr(e, t, n, r) {
    let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ I(i), [c] = e.propsOptions, l = !1;
    if ((r || o > 0) && !(o & 16)) {
        if (o & 8) {
            let n = e.vnode.dynamicProps;
            for(let r = 0; r < n.length; r++){
                let o = n[r];
                if (vr(e.emitsOptions, o)) continue;
                let d = t[o];
                if (c) {
                    if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
                    else {
                        let t = T(o);
                        i[t] = Nr(c, s, t, d, e, !1);
                    }
                } else d !== a[o] && (a[o] = d, l = !0);
            }
        }
    } else {
        Mr(e, t, i, a) && (l = !0);
        let r;
        for(let a in s)t && (u(t, a) || (r = E(a)) !== a && u(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Nr(c, s, a, void 0, e, !0)) : delete i[a]);
        if (a !== s) for(let e in a)t && u(t, e) || (delete a[e], l = !0);
    }
    l && tt(e.attrs, "set", "");
}
function Mr(e, n, r, i) {
    let [a, o] = e.propsOptions, s = !1, c;
    if (n) for(let t in n){
        if (ee(t)) continue;
        let l = n[t], d;
        a && u(a, d = T(t)) ? !o || !o.includes(d) ? r[d] = l : (c || (c = {}))[d] = l : vr(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
    }
    if (o) {
        let n = /* @__PURE__ */ I(r), i = c || t;
        for(let t = 0; t < o.length; t++){
            let s = o[t];
            r[s] = Nr(a, n, s, i[s], e, !u(i, s));
        }
    }
    return s;
}
function Nr(e, t, n, r, i, a) {
    let o = e[n];
    if (o != null) {
        let e = u(o, "default");
        if (e && r === void 0) {
            let e = o.default;
            if (o.type !== Function && !o.skipFactory && h(e)) {
                let { propsDefaults: a } = i;
                if (n in a) r = a[n];
                else {
                    let o = Fi(i);
                    r = a[n] = e.call(null, t), o();
                }
            } else r = e;
            i.ce && i.ce._setProp(n, r);
        }
        o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === E(n)) && (r = !0));
    }
    return r;
}
function Pr(e, r, i = !1) {
    let a = r.propsCache, o = a.get(e);
    if (o) return o;
    let c = e.props, l = {}, f = [];
    if (!c) return v(e) && a.set(e, n), n;
    if (d(c)) for(let e = 0; e < c.length; e++){
        let n = T(c[e]);
        Fr(n) && (l[n] = t);
    }
    else if (c) for(let e in c){
        let t = T(e);
        if (Fr(t)) {
            let n = c[e], r = l[t] = d(n) || h(n) ? {
                type: n
            } : s({}, n), i = r.type, a = !1, o = !0;
            if (d(i)) for(let e = 0; e < i.length; ++e){
                let t = i[e], n = h(t) && t.name;
                if (n === "Boolean") {
                    a = !0;
                    break;
                }
                n === "String" && (o = !1);
            }
            else a = h(i) && i.name === "Boolean";
            r[0] = a, r[1] = o, (a || u(r, "default")) && f.push(t);
        }
    }
    let p = [
        l,
        f
    ];
    return v(e) && a.set(e, p), p;
}
function Fr(e) {
    return e[0] !== "$" && !ee(e);
}
var Ir = (e)=>e === "_" || e === "_ctx" || e === "$stable", Lr = (e)=>d(e) ? e.map(Si) : [
        Si(e)
    ], Rr = (e, t, n)=>{
    if (t._n) return t;
    let r = wn((...e)=>Lr(t(...e)), n);
    return r._c = !1, r;
}, zr = (e, t, n)=>{
    let r = e._ctx;
    for(let n in e){
        if (Ir(n)) continue;
        let i = e[n];
        if (h(i)) t[n] = Rr(n, i, r);
        else if (i != null) {
            let e = Lr(i);
            t[n] = ()=>e;
        }
    }
}, Br = (e, t)=>{
    let n = Lr(t);
    e.slots.default = ()=>n;
}, Vr = (e, t, n)=>{
    for(let r in t)(n || !Ir(r)) && (e[r] = t[r]);
}, Hr = (e, t, n)=>{
    let r = e.slots = Or();
    if (e.vnode.shapeFlag & 32) {
        let e = t._;
        e ? (Vr(r, t, n), n && se(r, "_", e, !0)) : zr(t, r);
    } else t && Br(e, t);
}, Ur = (e, n, r)=>{
    let { vnode: i, slots: a } = e, o = !0, s = t;
    if (i.shapeFlag & 32) {
        let e = n._;
        e ? r && e === 1 ? o = !1 : Vr(a, n, r) : (o = !n.$stable, zr(n, a)), s = n;
    } else n && (Br(e, n), s = {
        default: 1
    });
    if (o) for(let e in a)!Ir(e) && s[e] == null && delete a[e];
}, q = ni;
function Wr(e) {
    return Gr(e);
}
function Gr(e, i) {
    let a = de();
    a.__VUE__ = !0;
    let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren)=>{
        if (e === t) return;
        e && !pi(e, t) && (i = be(e), O(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
        let { type: u, ref: d, shapeFlag: f } = t;
        switch(u){
            case ri:
                y(e, t, r, i);
                break;
            case Y:
                b(e, t, r, i);
                break;
            case ii:
                e ?? x(t, r, i, s);
                break;
            case J:
                ae(e, t, r, i, a, o, s, c, l);
                break;
            default:
                f & 1 ? w(e, t, r, i, a, o, s, c, l) : f & 6 ? D(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, Se);
        }
        d != null && a ? Zn(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && Zn(e.ref, null, o, e, !0);
    }, y = (e, t, n, r)=>{
        if (e == null) o(t.el = u(t.children), n, r);
        else {
            let n = t.el = e.el;
            t.children !== e.children && f(n, t.children);
        }
    }, b = (e, t, n, r)=>{
        e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
    }, x = (e, t, n, r)=>{
        [e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
    }, S = ({ el: e, anchor: t }, n, r)=>{
        let i;
        for(; e && e !== t;)i = h(e), o(e, n, r), e = i;
        o(t, n, r);
    }, C = ({ el: e, anchor: t })=>{
        let n;
        for(; e && e !== t;)n = h(e), s(e), e = n;
        s(t);
    }, w = (e, t, n, r, i, a, o, s, c)=>{
        if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) te(t, n, r, i, a, o, s, c);
        else {
            let n = e.el && e.el._isVueCE ? e.el : null;
            try {
                n && n._beginPatch(), re(e, t, i, a, o, s, c);
            } finally{
                n && n._endPatch();
            }
        }
    }, te = (e, t, n, r, i, a, s, u)=>{
        let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
        if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && T(e.children, d, null, r, i, Kr(e, a), s, u), _ && En(e, null, r, "created"), ne(d, e, e.scopeId, s, r), m) {
            for(let e in m)e !== "value" && !ee(e) && c(d, e, null, m[e], a, r);
            "value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Ei(f, r, e);
        }
        _ && En(e, null, r, "beforeMount");
        let v = Jr(i, g);
        v ? g.beforeEnter(d) : g && !g.persisted && (d[ti] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && q(()=>{
            try {
                f && Ei(f, r, e), v && g.enter(d), _ && En(e, null, r, "mounted");
            } finally{}
        }, i);
    }, ne = (e, t, n, r, i)=>{
        if (n && g(e, n), r) for(let t = 0; t < r.length; t++)g(e, r[t]);
        if (i) {
            let n = i.subTree;
            if (t === n || ei(n.type) && (n.ssContent === t || n.ssFallback === t)) {
                let t = i.vnode;
                ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
            }
        }
    }, T = (e, t, n, r, i, a, o, s, c = 0)=>{
        for(let l = c; l < e.length; l++){
            let c = e[l] = s ? Ci(e[l]) : Si(e[l]);
            v(null, c, t, n, r, i, a, o, s);
        }
    }, re = (e, n, r, i, a, o, s)=>{
        let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
        u |= e.patchFlag & 16;
        let m = e.props || t, h = n.props || t, g;
        if (r && qr(r, !1), (g = h.onVnodeBeforeUpdate) && Ei(g, r, n, e), f && En(n, e, r, "beforeUpdate"), r && qr(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? E(e.dynamicChildren, d, l, r, i, Kr(n, a), o) : s || fe(e, n, l, null, r, i, Kr(n, a), o, !1), u > 0) {
            if (u & 16) ie(l, m, h, r, a);
            else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
                let e = n.dynamicProps;
                for(let t = 0; t < e.length; t++){
                    let n = e[t], i = m[n], o = h[n];
                    (o !== i || n === "value") && c(l, n, i, o, a, r);
                }
            }
            u & 1 && e.children !== n.children && p(l, n.children);
        } else !s && d == null && ie(l, m, h, r, a);
        ((g = h.onVnodeUpdated) || f) && q(()=>{
            g && Ei(g, r, n, e), f && En(n, e, r, "updated");
        }, i);
    }, E = (e, t, n, r, i, a, o)=>{
        for(let s = 0; s < t.length; s++){
            let c = e[s], l = t[s], u = c.el || $r(c), d = u && (c.type === J || !pi(c, l) || c.shapeFlag & 198) ? m(u) : n;
            v(c, l, d, null, r, i, a, o, !0);
        }
    }, ie = (e, n, r, i, a)=>{
        if (n !== r) {
            if (n !== t) for(let t in n)!ee(t) && !(t in r) && c(e, t, n[t], null, a, i);
            for(let t in r){
                if (ee(t)) continue;
                let o = r[t], s = n[t];
                o !== s && t !== "value" && c(e, t, s, o, a, i);
            }
            "value" in r && c(e, "value", n.value, r.value, a);
        }
    }, ae = (e, t, n, r, i, a, s, c, l)=>{
        let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
        h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), T(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (E(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Yr(e, t, !0)) : fe(e, t, n, f, i, a, s, c, l);
    }, D = (e, t, n, r, i, a, o, s, c)=>{
        t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : se(t, n, r, i, a, o, c) : ce(e, t, c);
    }, se = (e, t, n, r, i, a, o)=>{
        let s = e.component = Ai(e, r, i);
        if (er(e) && (s.ctx.renderer = Se), zi(s, !1, o), s.asyncDep) {
            if (i && i.registerDep(s, le, o, a), !e.el) {
                let r = s.subTree = $(Y);
                b(null, r, t, n), e.placeholder = r.el;
            }
        } else le(s, e, t, n, i, a, o);
    }, ce = (e, t, n)=>{
        let r = t.component = e.component;
        if (Cr(e, t, n)) {
            if (r.asyncDep && !r.asyncResolved) {
                t.el = e.el, t.placeholder = e.placeholder, ue(r, t, n);
                return;
            }
            r.next = t, r.update();
        } else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
    }, le = (e, t, n, r, i, a, o)=>{
        let s = ()=>{
            if (e.isMounted) {
                let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
                {
                    let n = Zr(e);
                    if (n) {
                        t && (t.el = c.el, ue(e, t, o)), n.asyncDep.then(()=>{
                            let t = ()=>{
                                e.job.flags & 8 || (i && i.pendingBranch ? q(t, i) : l());
                            };
                            t.flags = 48, q(t, i);
                        });
                        return;
                    }
                }
                let u = t, d;
                qr(e, !1), t ? (t.el = c.el, ue(e, t, o)) : t = c, n && oe(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Ei(d, s, t, c), qr(e, !0);
                let f = yr(e), p = e.subTree;
                e.subTree = f, v(p, f, m(p.el || $r(p)), be(p), e, i, a), t.el = f.el, u === null && Er(e, f.el), r && q(r, i), (d = t.props && t.props.onVnodeUpdated) && q(()=>Ei(d, s, t, c), i);
            } else {
                let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = $n(t);
                if (qr(e, !1), l && oe(l), !m && (o = c && c.onVnodeBeforeMount) && Ei(o, d, t), qr(e, !0), s && we) {
                    let t = ()=>{
                        e.subTree = yr(e), we(s, e.subTree, e, i, null);
                    };
                    m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
                } else {
                    f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
                    let o = e.subTree = yr(e);
                    v(null, o, n, r, e, i, a), t.el = o.el;
                }
                if (u && q(u, i), !m && (o = c && c.onVnodeMounted)) {
                    let e = t;
                    q(()=>Ei(o, d, e), i);
                }
                (t.shapeFlag & 256 || d && $n(d.vnode) && d.vnode.shapeFlag & 256) && e.a && q(e.a, i), e.isMounted = !0, t = n = r = null;
            }
        };
        e.scope.on();
        let c = e.effect = new Ae(s);
        e.scope.off();
        let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
        u.i = e, u.id = e.uid, c.scheduler = ()=>pn(u), qr(e, !0), l();
    }, ue = (e, t, n)=>{
        t.component = e;
        let r = e.vnode.props;
        e.vnode = t, e.next = null, jr(e, t.props, r, n), Ur(e, t.children, n), We(), gn(e), Ge();
    }, fe = (e, t, n, r, i, a, o, s, c = !1)=>{
        let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
        if (f > 0) {
            if (f & 128) {
                me(l, d, n, r, i, a, o, s, c);
                return;
            }
            if (f & 256) {
                pe(l, d, n, r, i, a, o, s, c);
                return;
            }
        }
        m & 8 ? (u & 16 && ye(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? me(l, d, n, r, i, a, o, s, c) : ye(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && T(d, n, r, i, a, o, s, c));
    }, pe = (e, t, r, i, a, o, s, c, l)=>{
        e = e || n, t = t || n;
        let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
        for(; p < f; p++){
            let n = t[p] = l ? Ci(t[p]) : Si(t[p]);
            v(e[p], n, r, null, a, o, s, c, l);
        }
        u > d ? ye(e, a, o, !0, !1, f) : T(t, r, i, a, o, s, c, l, f);
    }, me = (e, t, r, i, a, o, s, c, l)=>{
        let u = 0, d = t.length, f = e.length - 1, p = d - 1;
        for(; u <= f && u <= p;){
            let n = e[u], i = t[u] = l ? Ci(t[u]) : Si(t[u]);
            if (pi(n, i)) v(n, i, r, null, a, o, s, c, l);
            else break;
            u++;
        }
        for(; u <= f && u <= p;){
            let n = e[f], i = t[p] = l ? Ci(t[p]) : Si(t[p]);
            if (pi(n, i)) v(n, i, r, null, a, o, s, c, l);
            else break;
            f--, p--;
        }
        if (u > f) {
            if (u <= p) {
                let e = p + 1, n = e < d ? t[e].el : i;
                for(; u <= p;)v(null, t[u] = l ? Ci(t[u]) : Si(t[u]), r, n, a, o, s, c, l), u++;
            }
        } else if (u > p) for(; u <= f;)O(e[u], a, o, !0), u++;
        else {
            let m = u, h = u, g = /* @__PURE__ */ new Map();
            for(u = h; u <= p; u++){
                let e = t[u] = l ? Ci(t[u]) : Si(t[u]);
                e.key != null && g.set(e.key, u);
            }
            let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
            for(u = 0; u < b; u++)C[u] = 0;
            for(u = m; u <= f; u++){
                let n = e[u];
                if (y >= b) {
                    O(n, a, o, !0);
                    continue;
                }
                let i;
                if (n.key != null) i = g.get(n.key);
                else for(_ = h; _ <= p; _++)if (C[_ - h] === 0 && pi(n, t[_])) {
                    i = _;
                    break;
                }
                i === void 0 ? O(n, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
            }
            let w = x ? Xr(C) : n;
            for(_ = w.length - 1, u = b - 1; u >= 0; u--){
                let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || $r(f) : i;
                C[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? he(n, r, p, 2) : _--);
            }
        }
    }, he = (e, t, n, r, i = null)=>{
        let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
        if (d & 6) he(e.component.subTree, t, n, r);
        else if (d & 128) e.suspense.move(t, n, r);
        else if (d & 64) c.move(e, t, n, Se);
        else if (c === J) {
            o(a, t, n);
            for(let e = 0; e < u.length; e++)he(u[e], t, n, r);
            o(e.anchor, t, n);
        } else if (c === ii) S(e, t, n);
        else if (r !== 2 && d & 1 && l) {
            if (r === 0) l.persisted && !a[G] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), q(()=>l.enter(a), i));
            else {
                let { leave: r, delayLeave: i, afterLeave: c } = l, u = ()=>{
                    e.ctx.isUnmounted ? s(a) : o(a, t, n);
                }, d = ()=>{
                    let e = a._isLeaving || !!a[G];
                    a._isLeaving && a[G](!0), l.persisted && !e ? u() : r(a, ()=>{
                        u(), c && c();
                    });
                };
                i ? i(a, u, d) : d();
            }
        } else o(a, t, n);
    }, O = (e, t, n, r = !1, i = !1)=>{
        let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
        if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (We(), Zn(s, null, n, e, !0), Ge()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
        let h = u & 1 && f, g = !$n(e), _;
        if (g && (_ = o && o.onVnodeBeforeUnmount) && Ei(_, t, e), u & 6) ve(e.component, n, r);
        else {
            if (u & 128) {
                e.suspense.unmount(n, r);
                return;
            }
            h && En(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Se, r) : l && !l.hasOnce && (a !== J || d > 0 && d & 64) ? ye(l, t, n, !1, !0) : (a === J && d & 384 || !i && u & 16) && ye(c, t, n), r && ge(e);
        }
        let v = m != null && p == null;
        (g && (_ = o && o.onVnodeUnmounted) || h || v) && q(()=>{
            _ && Ei(_, t, e), h && En(e, null, t, "unmounted"), v && (e.el = null);
        }, n);
    }, ge = (e)=>{
        let { type: t, el: n, anchor: r, transition: i } = e, a = t === J;
        if (a && !i) {
            _e(n, r);
            return;
        }
        if (t === ii) {
            C(e), i && !i.persisted && i.afterLeave && i.afterLeave();
            return;
        }
        let o = a ? Kn(e) : e, c = ()=>{
            a ? m(n) && _e(n, r) : s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
        };
        if (o && o.shapeFlag & 1 && i && !i.persisted) {
            let { leave: e, delayLeave: t } = i, n = o.el, r = ()=>e(n, c);
            t ? t(n, c, r) : r();
        } else c();
    }, _e = (e, t)=>{
        let n;
        for(; e !== t;)n = h(e), s(e), e = n;
        s(t);
    }, ve = (e, t, n)=>{
        let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
        Qr(c), Qr(l), r && oe(r), i.stop(), a ? (a.flags |= 8, O(o, e, t, n)) : o && (o.transition = e.vnode.transition, O(o, e, t, n)), s && q(s, t);
        let u = ()=>{
            e.isUnmounted = !0;
        };
        u.flags = 16, q(u, t);
    }, ye = (e, t, n, r = !1, i = !1, a = 0)=>{
        for(let o = a; o < e.length; o++)O(e[o], t, n, r, i);
    }, be = (e)=>{
        if (e.shapeFlag & 6) return be(e.component.subTree);
        if (e.shapeFlag & 128) return e.suspense.next();
        let t = h(e.anchor || e.el), n = t && t[Mn];
        return n ? h(n) : t;
    }, xe = (e, t, n)=>{
        yn(()=>{
            e == null ? t._vnode && O(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
        }, e && t._vnode ? void 0 : e && e.component ? e.component.uid : ki());
    }, Se = {
        p: v,
        um: O,
        m: he,
        r: ge,
        mt: se,
        mc: T,
        pc: fe,
        pbc: E,
        n: be,
        o: e
    }, Ce, we;
    return i && ([Ce, we] = i(Se)), {
        render: xe,
        hydrate: Ce,
        createApp: pr(xe, Ce)
    };
}
function Kr({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function qr({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Jr(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Yr(e, t, n = !1) {
    let r = e.children, i = t.children;
    if (d(r) && d(i)) for(let e = 0; e < r.length; e++){
        let t = r[e], a = i[e];
        a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Ci(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Yr(t, a)), a.type === ri && (a.patchFlag === -1 && (a = i[e] = Ci(a)), a.el = t.el), a.type === Y && !a.el && (a.el = t.el);
    }
}
function Xr(e) {
    let t = e.slice(), n = [
        0
    ], r, i, a, o, s, c = e.length;
    for(r = 0; r < c; r++){
        let c = e[r];
        if (c !== 0) {
            if (i = n[n.length - 1], e[i] < c) {
                t[r] = i, n.push(r);
                continue;
            }
            for(a = 0, o = n.length - 1; a < o;)s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
            c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
        }
    }
    for(a = n.length, o = n[a - 1]; a-- > 0;)n[a] = o, o = t[o];
    return n;
}
function Zr(e) {
    let t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Zr(t);
}
function Qr(e) {
    if (e) for(let t = 0; t < e.length; t++)e[t].flags |= 8;
}
function $r(e) {
    if (e.placeholder) return e.placeholder;
    let t = e.component;
    if (t) return $r(t.subTree);
    let n = e.suspense;
    return n && n.activeBranch ? $r(n.activeBranch) : null;
}
var ei = (e)=>e.__isSuspense, ti = /* @__PURE__ */ Symbol("_deferredEnter");
function ni(e, t) {
    t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : hn(e);
}
var J = /* @__PURE__ */ Symbol.for("v-fgt"), ri = /* @__PURE__ */ Symbol.for("v-txt"), Y = /* @__PURE__ */ Symbol.for("v-cmt"), ii = /* @__PURE__ */ Symbol.for("v-stc"), ai = [], X = null;
function Z(e = !1) {
    ai.push(X = e ? null : []);
}
function oi() {
    ai.pop(), X = ai[ai.length - 1] || null;
}
var si = 1;
function ci(e, t = !1) {
    si += e, e < 0 && X && t && (X.hasOnce = !0);
}
function li(e) {
    return e.dynamicChildren = si > 0 ? X || n : null, oi(), si > 0 && X && X.push(e), e;
}
function ui(e, t, n, r, i, a) {
    return li(Q(e, t, n, r, i, a, !0));
}
function di(e, t, n, r, i) {
    return li($(e, t, n, r, i, !0));
}
function fi(e) {
    return e ? e.__v_isVNode === !0 : !1;
}
function pi(e, t) {
    return e.type === t.type && e.key === t.key;
}
var mi = ({ key: e })=>e ?? null, hi = ({ ref: e, ref_key: t, ref_for: n })=>(typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ R(e) || h(e) ? {
        i: W,
        r: e,
        k: t,
        f: !!n
    } : e);
function Q(e, t = null, n = null, r = 0, i = null, a = e === J ? 0 : 1, o = !1, s = !1) {
    let c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && mi(t),
        ref: t && hi(t),
        scopeId: Sn,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: a,
        patchFlag: r,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: W
    };
    return s ? (wi(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), si > 0 && !o && X && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && X.push(c), c;
}
var $ = gi;
function gi(e, t = null, n = null, r = 0, i = null, a = !1) {
    if (e && e !== ar || (e = Y), fi(e)) {
        let r = vi(e, t, !0);
        return n && wi(r, n), si > 0 && !a && X && (r.shapeFlag & 6 ? X[X.indexOf(e)] = r : X.push(r)), r.patchFlag = -2, r;
    }
    if (qi(e) && (e = e.__vccOpts), t) {
        t = _i(t);
        let { class: e, style: n } = t;
        e && !g(e) && (t.class = ge(e)), v(n) && (/* @__PURE__ */ Vt(n) && !d(n) && (n = s({}, n)), t.style = fe(n));
    }
    let o = g(e) ? 1 : ei(e) ? 128 : Nn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
    return Q(e, t, n, r, i, o, a, !0);
}
function _i(e) {
    return e ? /* @__PURE__ */ Vt(e) ? s({}, e) : kr(e) ? s({}, e[Ui] || e) : e : null;
}
function vi(e, t, n = !1, r = !1) {
    let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Ti(i || {}, t) : i, u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: l,
        key: l && mi(l),
        ref: t && t.ref ? n && a ? d(a) ? a.concat(hi(t)) : [
            a,
            hi(t)
        ] : hi(t) : a,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: s,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== J ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: c,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && vi(e.ssContent),
        ssFallback: e.ssFallback && vi(e.ssFallback),
        placeholder: e.placeholder,
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce,
        cacheIndex: e.cacheIndex
    };
    return c && r && Wn(u, c.clone(u)), u;
}
function yi(e = " ", t = 0) {
    return $(ri, null, e, t);
}
function bi(e, t) {
    let n = $(ii, null, e);
    return n.staticCount = t, n;
}
function xi(e = "", t = !1) {
    return t ? (Z(), di(Y, null, e)) : $(Y, null, e);
}
function Si(e) {
    return e == null || typeof e == "boolean" ? $(Y) : d(e) ? $(J, null, e.slice()) : fi(e) ? Ci(e) : $(ri, null, String(e));
}
function Ci(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : vi(e);
}
function wi(e, t) {
    let n = 0, { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (d(t)) n = 16;
    else if (typeof t == "object") {
        if (r & 65) {
            let n = t.default;
            n && (n._c && (n._d = !1), wi(e, n()), n._c && (n._d = !0));
            return;
        }
        {
            n = 32;
            let r = t._;
            !r && !kr(t) ? t._ctx = W : r === 3 && W && (W.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
        }
    } else if (h(t)) {
        if (r & 65) {
            wi(e, {
                default: t
            });
            return;
        }
        t = {
            default: t,
            _ctx: W
        }, n = 32;
    } else t = String(t), r & 64 ? (n = 16, t = [
        yi(t)
    ]) : n = 8;
    e.children = t, e.shapeFlag |= n;
}
function Ti(...e) {
    let t = {};
    for(let n = 0; n < e.length; n++){
        let r = e[n];
        for(let e in r)if (e === "class") t.class !== r.class && (t.class = ge([
            t.class,
            r.class
        ]));
        else if (e === "style") t.style = fe([
            t.style,
            r.style
        ]);
        else if (a(e)) {
            let n = t[e], i = r[e];
            i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
        } else e !== "" && (t[e] = r[e]);
    }
    return t;
}
function Ei(e, t, n, r = null) {
    B(e, t, 7, [
        n,
        r
    ]);
}
var Di = /* @__PURE__ */ dr(), Oi = 0;
function ki() {
    return Oi;
}
function Ai(e, n, r) {
    let i = e.type, a = (n ? n.appContext : e.appContext) || Di, o = {
        uid: Oi++,
        vnode: e,
        type: i,
        parent: n,
        appContext: a,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new De(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: n ? n.provides : Object.create(a.provides),
        ids: n ? n.ids : [
            "",
            0,
            0
        ],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Pr(i, a),
        emitsOptions: _r(i, a),
        emit: null,
        emitted: null,
        propsDefaults: t,
        inheritAttrs: i.inheritAttrs,
        ctx: t,
        data: t,
        props: t,
        attrs: t,
        slots: t,
        refs: t,
        setupState: t,
        setupContext: null,
        suspense: r,
        suspenseId: r ? r.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return o.ctx = {
        _: o
    }, o.root = n ? n.root : o, o.emit = gr.bind(null, o), e.ce && e.ce(o), o;
}
var ji = null, Mi = ()=>ji || W, Ni, Pi;
{
    let e = de(), t = (t, n)=>{
        let r;
        return (r = e[t]) || (r = e[t] = []), r.push(n), (e)=>{
            r.length > 1 ? r.forEach((t)=>t(e)) : r[0](e);
        };
    };
    Ni = t("__VUE_INSTANCE_SETTERS__", (e)=>ji = e), Pi = t("__VUE_SSR_SETTERS__", (e)=>Ri = e);
}var Fi = (e)=>{
    let t = ji;
    return Ni(e), e.scope.on(), ()=>{
        e.scope.off(), Ni(t);
    };
}, Ii = ()=>{
    ji && ji.scope.off(), Ni(null);
};
function Li(e) {
    return e.vnode.shapeFlag & 4;
}
var Ri = !1;
function zi(e, t = !1, n = !1) {
    t && Pi(t);
    let { props: r, children: i } = e.vnode, a = Li(e);
    Ar(e, r, a, t), Hr(e, i, n || t);
    let o = a ? Bi(e, t) : void 0;
    return t && Pi(!1), o;
}
function Bi(e, t) {
    let n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ur);
    let { setup: r } = n;
    if (r) {
        We();
        let n = e.setupContext = r.length > 1 ? Gi(e) : null, i = Fi(e), a = rn(r, e, 0, [
            e.props,
            n
        ]), o = y(a);
        if (Ge(), i(), (o || e.sp) && !$n(e) && Jn(e), o) {
            if (a.then(Ii, Ii), t) return a.then((n)=>{
                Pi(!0);
                try {
                    Vi(e, n, t);
                } finally{
                    Pi(!1);
                }
            }).catch((t)=>{
                an(t, e, 0, void 0, !0), e.ssrRender = (e, t)=>t("<!---->");
            });
            e.asyncDep = a;
        } else Vi(e, a, t);
    } else Hi(e, t);
}
function Vi(e, t, n) {
    h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = Jt(t)), Hi(e, n);
}
function Hi(e, t, n) {
    let i = e.type;
    e.render || (e.render = i.render || r);
}
var Ui = /* @__PURE__ */ Symbol(), Wi = {
    get (e, t) {
        return N(e, "get", ""), t === Ui ? e : e[t];
    }
};
function Gi(e) {
    return {
        attrs: new Proxy(e.attrs, Wi),
        slots: e.slots,
        emit: e.emit,
        expose: (t)=>{
            e.exposed = t || {};
        }
    };
}
function Ki(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Jt(Ht(e.exposed)), {
        get (t, n) {
            if (n in t) return t[n];
            if (n in cr) return cr[n](e);
        },
        has (e, t) {
            return t in e || t in cr;
        }
    })) : e.proxy;
}
function qi(e) {
    return h(e) && "__vccOpts" in e;
}
var Ji = (e, t)=>/* @__PURE__ */ Xt(e, t, Ri);
function Yi(e, t, n) {
    try {
        ci(-1);
        let r = arguments.length;
        return r === 2 ? v(t) && !d(t) ? fi(t) ? $(e, null, [
            t
        ]) : $(e, t) : $(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && fi(n) && (n = [
            n
        ]), $(e, t, n));
    } finally{
        ci(1);
    }
}
var Xi = "3.5.45", Zi = void 0, Qi = ("TURBOPACK compile-time value", "undefined") < "u" && window.trustedTypes;
if (Qi) try {
    Zi = /* @__PURE__ */ Qi.createPolicy("vue", {
        createHTML: (e)=>e
    });
} catch  {}
var $i = Zi ? (e)=>Zi.createHTML(e) : (e)=>e, ea = "http://www.w3.org/2000/svg", ta = "http://www.w3.org/1998/Math/MathML", na = typeof document < "u" ? document : null, ra = na && /* @__PURE__ */ na.createElement("template"), ia = {
    insert: (e, t, n)=>{
        t.insertBefore(e, n || null);
    },
    remove: (e)=>{
        let t = e.parentNode;
        t && t.removeChild(e);
    },
    createElement: (e, t, n, r)=>{
        let i = t === "svg" ? na.createElementNS(ea, e) : t === "mathml" ? na.createElementNS(ta, e) : n ? na.createElement(e, {
            is: n
        }) : na.createElement(e);
        return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
    },
    createText: (e)=>na.createTextNode(e),
    createComment: (e)=>na.createComment(e),
    setText: (e, t)=>{
        e.nodeValue = t;
    },
    setElementText: (e, t)=>{
        e.textContent = t;
    },
    parentNode: (e)=>e.parentNode,
    nextSibling: (e)=>e.nextSibling,
    querySelector: (e)=>na.querySelector(e),
    setScopeId (e, t) {
        e.setAttribute(t, "");
    },
    insertStaticContent (e, t, n, r, i, a) {
        let o = n ? n.previousSibling : t.lastChild;
        if (i && (i === a || i.nextSibling)) for(; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
        else {
            ra.innerHTML = $i(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
            let i = ra.content;
            if (r === "svg" || r === "mathml") {
                let e = i.firstChild;
                for(; e.firstChild;)i.appendChild(e.firstChild);
                i.removeChild(e);
            }
            t.insertBefore(i, n);
        }
        return [
            o ? o.nextSibling : t.firstChild,
            n ? n.previousSibling : t.lastChild
        ];
    }
}, aa = "transition", oa = "animation", sa = /* @__PURE__ */ Symbol("_vtc"), ca = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [
        String,
        Number,
        Object
    ],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}, la = /* @__PURE__ */ s({}, In, ca), ua = /* @__PURE__ */ ((e)=>(e.displayName = "Transition", e.props = la, e))((e, { slots: t })=>Yi(zn, pa(e), t)), da = (e, t = [])=>{
    d(e) ? e.forEach((e)=>e(...t)) : e && e(...t);
}, fa = (e)=>e ? d(e) ? e.some((e)=>e.length > 1) : e.length > 1 : !1;
function pa(e) {
    let t = {};
    for(let n in e)n in ca || (t[n] = e[n]);
    if (e.css === !1) return t;
    let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: c = `${n}-enter-to`, appearFromClass: l = a, appearActiveClass: u = o, appearToClass: d = c, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, h = ma(i), g = h && h[0], _ = h && h[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: ee = b } = t, te = (e, t, n, r)=>{
        e._enterCancelled = r, _a(e, t ? d : c), _a(e, t ? u : o), n && n();
    }, ne = (e, t)=>{
        e._isLeaving = !1, _a(e, f), _a(e, m), _a(e, p), t && t();
    }, T = (e)=>(t, n)=>{
            let i = e ? w : y, o = ()=>te(t, e, n);
            da(i, [
                t,
                o
            ]), va(()=>{
                _a(t, e ? l : a), ga(t, e ? d : c), fa(i) || ba(t, r, g, o);
            });
        };
    return s(t, {
        onBeforeEnter (e) {
            da(v, [
                e
            ]), ga(e, a), ga(e, o);
        },
        onBeforeAppear (e) {
            da(C, [
                e
            ]), ga(e, l), ga(e, u);
        },
        onEnter: T(!1),
        onAppear: T(!0),
        onLeave (e, t) {
            e._isLeaving = !0;
            let n = ()=>ne(e, t);
            ga(e, f), e._enterCancelled ? (ga(e, p), wa(e)) : (wa(e), ga(e, p)), va(()=>{
                e._isLeaving && (_a(e, f), ga(e, m), fa(x) || ba(e, r, _, n));
            }), da(x, [
                e,
                n
            ]);
        },
        onEnterCancelled (e) {
            te(e, !1, void 0, !0), da(b, [
                e
            ]);
        },
        onAppearCancelled (e) {
            te(e, !0, void 0, !0), da(ee, [
                e
            ]);
        },
        onLeaveCancelled (e) {
            ne(e), da(S, [
                e
            ]);
        }
    });
}
function ma(e) {
    if (e == null) return null;
    if (v(e)) return [
        ha(e.enter),
        ha(e.leave)
    ];
    {
        let t = ha(e);
        return [
            t,
            t
        ];
    }
}
function ha(e) {
    return le(e);
}
function ga(e, t) {
    t.split(/\s+/).forEach((t)=>t && e.classList.add(t)), (e[sa] || (e[sa] = /* @__PURE__ */ new Set())).add(t);
}
function _a(e, t) {
    t.split(/\s+/).forEach((t)=>t && e.classList.remove(t));
    let n = e[sa];
    n && (n.delete(t), n.size || (e[sa] = void 0));
}
function va(e) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(e);
    });
}
var ya = 0;
function ba(e, t, n, r) {
    let i = e._endId = ++ya, a = ()=>{
        i === e._endId && r();
    };
    if (n != null) return setTimeout(a, n);
    let { type: o, timeout: s, propCount: c } = xa(e, t);
    if (!o) return r();
    let l = o + "end", u = 0, d = ()=>{
        e.removeEventListener(l, f), a();
    }, f = (t)=>{
        t.target === e && ++u >= c && d();
    };
    setTimeout(()=>{
        u < c && d();
    }, s + 1), e.addEventListener(l, f);
}
function xa(e, t) {
    let n = window.getComputedStyle(e), r = (e)=>(n[e] || "").split(", "), i = r(`${aa}Delay`), a = r(`${aa}Duration`), o = Sa(i, a), s = r(`${oa}Delay`), c = r(`${oa}Duration`), l = Sa(s, c), u = null, d = 0, f = 0;
    t === aa ? o > 0 && (u = aa, d = o, f = a.length) : t === oa ? l > 0 && (u = oa, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? aa : oa : null, f = u ? u === aa ? a.length : c.length : 0);
    let p = u === aa && /\b(?:transform|all)(?:,|$)/.test(r(`${aa}Property`).toString());
    return {
        type: u,
        timeout: d,
        propCount: f,
        hasTransform: p
    };
}
function Sa(e, t) {
    for(; e.length < t.length;)e = e.concat(e);
    return Math.max(...t.map((t, n)=>Ca(t) + Ca(e[n])));
}
function Ca(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function wa(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ta(e, t, n) {
    let r = e[sa];
    r && (t = (t ? [
        t,
        ...r
    ] : [
        ...r
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ea = /* @__PURE__ */ Symbol("_vod"), Da = /* @__PURE__ */ Symbol("_vsh"), Oa = /* @__PURE__ */ Symbol(""), ka = /(?:^|;)\s*display\s*:/;
function Aa(e, t, n) {
    let r = e.style, i = g(n), a = !1;
    if (n && !i) {
        if (t) {
            if (g(t)) for (let e of t.split(";")){
                let t = e.slice(0, e.indexOf(":")).trim();
                n[t] ?? Ma(r, t, "");
            }
            else for(let e in t)n[e] ?? Ma(r, e, "");
        }
        for(let i in n){
            i === "display" && (a = !0);
            let o = n[i];
            o == null ? Ma(r, i, "") : Ia(e, i, !g(t) && t ? t[i] : void 0, o) || Ma(r, i, o);
        }
    } else if (i) {
        if (t !== n) {
            let e = r[Oa];
            e && (n += ";" + e), r.cssText = n, a = ka.test(n);
        }
    } else t && e.removeAttribute("style");
    Ea in e && (i && t === n || (e[Ea] = a ? r.display : ""), e[Da] && (r.display = "none"));
}
var ja = /\s*!important$/;
function Ma(e, t, n) {
    if (d(n)) n.forEach((n)=>Ma(e, t, n));
    else if (n ?? (n = ""), t.startsWith("--")) ja.test(n) ? e.setProperty(t, n.replace(ja, ""), "important") : e.setProperty(t, n);
    else {
        let r = Fa(e, t);
        ja.test(n) ? e.setProperty(E(r), n.replace(ja, ""), "important") : e[r] = n;
    }
}
var Na = [
    "Webkit",
    "Moz",
    "ms"
], Pa = {};
function Fa(e, t) {
    let n = Pa[t];
    if (n) return n;
    let r = T(t);
    if (r !== "filter" && r in e) return Pa[t] = r;
    r = ie(r);
    for(let n = 0; n < Na.length; n++){
        let i = Na[n] + r;
        if (i in e) return Pa[t] = i;
    }
    return t;
}
function Ia(e, t, n, r) {
    return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var La = "http://www.w3.org/1999/xlink";
function Ra(e, t, n, r, i, a = _e(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(La, t.slice(6, t.length)) : e.setAttributeNS(La, t, n) : n == null || a && !ve(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function za(e, t, n, r, i) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? $i(n) : n);
        return;
    }
    let a = e.tagName;
    if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
        let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        r === i && "_value" in e || (e.value = i), n ?? e.removeAttribute(t), e._value = n;
        return;
    }
    let o = !1;
    if (n === "" || n == null) {
        let r = typeof e[t];
        r === "boolean" ? n = ve(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
    }
    try {
        e[t] = n;
    } catch  {}
    o && e.removeAttribute(i || t);
}
function Ba(e, t, n, r) {
    e.addEventListener(t, n, r);
}
function Va(e, t, n, r) {
    e.removeEventListener(t, n, r);
}
var Ha = /* @__PURE__ */ Symbol("_vei");
function Ua(e, t, n, r, i = null) {
    let a = e[Ha] || (e[Ha] = {}), o = a[t];
    if (r && o) o.value = r;
    else {
        let [n, s] = Ka(t);
        r ? Ba(e, n, a[t] = Xa(r, i), s) : o && (Va(e, n, o, s), a[t] = void 0);
    }
}
var Wa = /(Once|Passive|Capture)$/, Ga = /^on:?(?:Once|Passive|Capture)$/;
function Ka(e) {
    let t, n;
    for(; (n = e.match(Wa)) && !Ga.test(e);)t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
    return [
        e[2] === ":" ? e.slice(3) : E(e.slice(2)),
        t
    ];
}
var qa = 0, Ja = /* @__PURE__ */ Promise.resolve(), Ya = ()=>qa || (Ja.then(()=>qa = 0), qa = Date.now());
function Xa(e, t) {
    let n = (e)=>{
        if (!e._vts) e._vts = Date.now();
        else if (e._vts <= n.attached) return;
        let r = n.value;
        if (d(r)) {
            let n = e.stopImmediatePropagation;
            e.stopImmediatePropagation = ()=>{
                n.call(e), e._stopped = !0;
            };
            let i = r.slice(), a = [
                e
            ];
            for(let n = 0; n < i.length && !e._stopped; n++){
                let e = i[n];
                e && B(e, t, 5, a);
            }
        } else B(r, t, 5, [
            e
        ]);
    };
    return n.value = e, n.attached = Ya(), n;
}
var Za = (e)=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Qa = (e, t, n, r, i, s)=>{
    let c = i === "svg";
    t === "class" ? Ta(e, r, c) : t === "style" ? Aa(e, n, r) : a(t) ? o(t) || Ua(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : $a(e, t, r, c)) ? (za(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || Ra(e, t, r, c, s, t !== "value")) : e._isVueCE && (eo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? za(e, T(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ra(e, t, r, c));
};
function $a(e, t, n, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Za(t) && h(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        let t = e.tagName;
        if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
    }
    return Za(t) && g(n) ? !1 : t in e;
}
function eo(e, t) {
    let n = e._def.props;
    if (!n) return !1;
    let r = T(t);
    return Array.isArray(n) ? n.some((e)=>T(e) === r) : Object.keys(n).some((e)=>T(e) === r);
}
var to = (e)=>{
    let t = e.props["onUpdate:modelValue"] || !1;
    return d(t) ? (e)=>oe(t, e) : t;
};
function no(e) {
    e.target.composing = !0;
}
function ro(e) {
    let t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var io = /* @__PURE__ */ Symbol("_assign"), ao = /* @__PURE__ */ Symbol("_initialValue");
function oo(e, t, n) {
    return t && (e = e.trim()), n && (e = ce(e)), e;
}
var so = {
    created (e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
        e.parentNode && (e.type === "text" ? e[ao] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[ao] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[io] = to(i);
        let a = r || i.props && i.props.type === "number";
        Ba(e, t ? "change" : "input", (t)=>{
            t.target.composing || e[io](oo(e.value, n, a));
        }), (n || a) && Ba(e, "change", ()=>{
            e.value = oo(e.value, n, a);
        }), t || (Ba(e, "compositionstart", no), Ba(e, "compositionend", ro), Ba(e, "change", ro));
    },
    mounted (e, { value: t, modifiers: { trim: n, number: r } }) {
        let i = t ?? "", a = e[ao];
        delete e[ao], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[io](oo(e.value, n, r)) : e.value = i;
    },
    beforeUpdate (e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
        if (e[io] = to(o), e.composing) return;
        let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ce(e.value) : e.value, c = t ?? "";
        if (s === c) return;
        let l = e.getRootNode();
        (l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
    }
}, co = [
    "ctrl",
    "shift",
    "alt",
    "meta"
], lo = {
    stop: (e)=>e.stopPropagation(),
    prevent: (e)=>e.preventDefault(),
    self: (e)=>e.target !== e.currentTarget,
    ctrl: (e)=>!e.ctrlKey,
    shift: (e)=>!e.shiftKey,
    alt: (e)=>!e.altKey,
    meta: (e)=>!e.metaKey,
    left: (e)=>"button" in e && e.button !== 0,
    middle: (e)=>"button" in e && e.button !== 1,
    right: (e)=>"button" in e && e.button !== 2,
    exact: (e, t)=>co.some((n)=>e[`${n}Key`] && !t.includes(n))
}, uo = (e, t)=>{
    if (!e) return e;
    let n = e._withMods || (e._withMods = {}), r = t.join(".");
    return n[r] || (n[r] = (n, ...r)=>{
        for(let e = 0; e < t.length; e++){
            let r = lo[t[e]];
            if (r && r(n, t)) return;
        }
        return e(n, ...r);
    });
}, fo = /* @__PURE__ */ s({
    patchProp: Qa
}, ia), po;
function mo() {
    return po || (po = Wr(fo));
}
var ho = (...e)=>{
    let t = mo().createApp(...e), { mount: n } = t;
    return t.mount = (e)=>{
        let r = _o(e);
        if (!r) return;
        let i = t._component;
        h(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
        let a = n(r, !1, go(r));
        return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
    }, t;
};
function go(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function _o(e) {
    return g(e) ? document.querySelector(e) : e;
}
// vue-modules/src/utils.ts
var vo = (e)=>e.toLocaleString("fa-IR");
function yo(e) {
    return e.replace(/[۰-۹]/g, (e)=>String(e.charCodeAt(0) - 1776)).replace(/[٠-٩]/g, (e)=>String(e.charCodeAt(0) - 1632));
}
// vue-modules/src/components/GiftComposer.vue?vue&type=script&setup=true&lang.ts
var bo = [
    "for"
], xo = {
    class: "gift__text"
}, So = [
    "id",
    "checked"
], Co = {
    key: 0,
    class: "gift__body"
}, wo = {
    class: "gift__perks"
}, To = {
    class: "gift__field"
}, Eo = [
    "for"
], Do = [
    "id"
], Oo = {
    class: "gift__field"
}, ko = {
    class: "gift__label-row"
}, Ao = [
    "for"
], jo = {
    class: "gift__templates",
    role: "group",
    "aria-label": "متن‌های پیشنهادی"
}, Mo = [
    "onClick"
], No = [
    "id",
    "maxlength"
], Po = {
    class: "gift__preview",
    "aria-label": "پیش‌نمایش کارت تبریک"
}, Fo = {
    key: 0,
    class: "gift__preview-to"
}, Io = {
    class: "gift__preview-msg"
}, Lo = /*@__PURE__*/ qn({
    __name: "GiftComposer",
    props: {
        modelValue: {},
        variant: {
            default: "product"
        },
        maxLength: {
            default: 150
        }
    },
    emits: [
        "change"
    ],
    setup (e, { emit: t }) {
        let n = e, r = t, i = /* @__PURE__ */ It({
            ...n.modelValue
        });
        An(()=>n.modelValue, (e)=>Object.assign(i, e), {
            deep: !0
        });
        let a = Math.random().toString(36).slice(2, 8), o = [
            "جعبه و روبان ویژه هدیه",
            "کارت تبریک با متن دلخواه شما",
            "ارسال مستقیم برای گیرنده، بدون درج قیمت"
        ], s = [
            {
                label: "خانه‌نو",
                text: "خانه‌ی نو مبارک! آرزوی روزهای گرم و پر از آرامش در خانه‌ی تازه‌تان."
            },
            {
                label: "تولد",
                text: "تولدت مبارک! امیدوارم این هدیه هر روز لبخند به خانه‌ات بیاورد."
            },
            {
                label: "سالگرد",
                text: "سالگردمان مبارک؛ برای همه‌ی روزهای خوبی که با هم ساختیم."
            },
            {
                label: "یلدا و نوروز",
                text: "با بهترین آرزوها برای روزهای روشن و سال پربرکت."
            }
        ], c = Ji(()=>n.maxLength - i.message.length), l = Ji(()=>n.variant === "cart" ? "این سفارش را هدیه می‌دهم" : "این محصول را هدیه می‌دهم");
        function u() {
            r("change", {
                ...i
            });
        }
        function d(e) {
            i.enabled = e.target.checked, u();
        }
        function f(e) {
            i.message = e.slice(0, n.maxLength), u();
        }
        return (t, n)=>(Z(), ui("section", {
                class: ge([
                    "gift",
                    {
                        "gift--on": i.enabled
                    }
                ]),
                "data-framework": "vue"
            }, [
                Q("label", {
                    class: "gift__head",
                    for: `gift-toggle-${z(a)}`
                }, [
                    n[3] || (n[3] = bi("<span class=\"gift__icon\" aria-hidden=\"true\" data-v-2f0c571c><svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-2f0c571c><rect x=\"3\" y=\"8\" width=\"18\" height=\"4\" rx=\"1\" data-v-2f0c571c></rect><path d=\"M12 8v13\" data-v-2f0c571c></path><path d=\"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7\" data-v-2f0c571c></path><path d=\"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5\" data-v-2f0c571c></path></svg></span>", 1)),
                    Q("span", xo, [
                        Q("strong", null, k(l.value), 1),
                        n[2] || (n[2] = Q("small", null, "بسته‌بندی ویژه، کارت تبریک و ارسال برای گیرنده", -1))
                    ]),
                    Q("input", {
                        id: `gift-toggle-${z(a)}`,
                        class: "gift__switch-input",
                        type: "checkbox",
                        role: "switch",
                        checked: i.enabled,
                        onChange: d
                    }, null, 40, So),
                    n[4] || (n[4] = Q("span", {
                        class: "gift__switch",
                        "aria-hidden": "true"
                    }, [
                        Q("span")
                    ], -1))
                ], 8, bo),
                $(ua, {
                    name: "gift-body"
                }, {
                    default: wn(()=>[
                            i.enabled ? (Z(), ui("div", Co, [
                                Q("ul", wo, [
                                    (Z(), ui(J, null, or(o, (e)=>Q("li", {
                                            key: e
                                        }, [
                                            n[5] || (n[5] = Q("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "16",
                                                height: "16",
                                                fill: "none",
                                                stroke: "currentColor",
                                                "stroke-width": "2.2",
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "aria-hidden": "true"
                                            }, [
                                                Q("path", {
                                                    d: "M20 6 9 17l-5-5"
                                                })
                                            ], -1)),
                                            yi(" " + k(e), 1)
                                        ])), 64))
                                ]),
                                Q("div", To, [
                                    Q("label", {
                                        for: `gift-name-${z(a)}`
                                    }, "نام گیرنده", 8, Eo),
                                    Tn(Q("input", {
                                        id: `gift-name-${z(a)}`,
                                        "onUpdate:modelValue": n[0] || (n[0] = (e)=>i.recipientName = e),
                                        type: "text",
                                        autocomplete: "off",
                                        placeholder: "مثلاً: سارا",
                                        maxlength: "40",
                                        onInput: u
                                    }, null, 40, Do), [
                                        [
                                            so,
                                            i.recipientName
                                        ]
                                    ])
                                ]),
                                Q("div", Oo, [
                                    Q("div", ko, [
                                        Q("label", {
                                            for: `gift-msg-${z(a)}`
                                        }, "متن کارت تبریک", 8, Ao),
                                        Q("span", {
                                            class: ge([
                                                "gift__counter",
                                                {
                                                    "gift__counter--low": c.value < 20
                                                }
                                            ]),
                                            "aria-live": "polite"
                                        }, k(z(vo)(c.value)) + " کاراکتر باقی‌مانده ", 3)
                                    ]),
                                    Q("div", jo, [
                                        (Z(), ui(J, null, or(s, (e)=>Q("button", {
                                                key: e.label,
                                                type: "button",
                                                class: "gift__chip",
                                                onClick: (t)=>f(e.text)
                                            }, k(e.label), 9, Mo)), 64))
                                    ]),
                                    Tn(Q("textarea", {
                                        id: `gift-msg-${z(a)}`,
                                        "onUpdate:modelValue": n[1] || (n[1] = (e)=>i.message = e),
                                        rows: "3",
                                        maxlength: e.maxLength,
                                        placeholder: "پیام شما روی کارت تبریک WASTON چاپ می‌شود…",
                                        onInput: u
                                    }, null, 40, No), [
                                        [
                                            so,
                                            i.message
                                        ]
                                    ])
                                ]),
                                Q("figure", Po, [
                                    n[6] || (n[6] = Q("span", {
                                        class: "gift__preview-brand"
                                    }, "WASTON", -1)),
                                    i.recipientName ? (Z(), ui("p", Fo, k(i.recipientName) + " عزیز،", 1)) : xi("", !0),
                                    Q("p", Io, k(i.message || "متن کارت تبریک شما این‌جا نمایش داده می‌شود."), 1)
                                ])
                            ])) : xi("", !0)
                        ]),
                    _: 1
                })
            ], 2));
    }
}), Ro = (e, t)=>{
    let n = e.__vccOpts || e;
    for (let [e, r] of t)n[e] = r;
    return n;
}, zo = /*#__PURE__*/ Ro(Lo, [
    [
        "__scopeId",
        "data-v-2f0c571c"
    ]
]), Bo = {
    class: "nl",
    "data-framework": "vue"
}, Vo = {
    key: 0,
    class: "nl__done",
    role: "status"
}, Ho = [
    "for"
], Uo = {
    class: "nl__row"
}, Wo = [
    "id",
    "aria-invalid",
    "aria-describedby"
], Go = [
    "disabled"
], Ko = {
    key: 0,
    class: "nl__spinner",
    "aria-hidden": "true"
}, qo = [
    "id"
], Jo = /*#__PURE__*/ Ro(/* @__PURE__ */ qn({
    __name: "NewsletterForm",
    emits: [
        "subscribe"
    ],
    setup (e, { emit: t }) {
        let n = t, r = Math.random().toString(36).slice(2, 8), i = /* @__PURE__ */ Wt(""), a = /* @__PURE__ */ Wt(""), o = /* @__PURE__ */ Wt("idle"), s = /* @__PURE__ */ Wt(""), c = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, l = /^(\+98|0098|0)?9\d{9}$/;
        function u(e) {
            let t = yo(e.trim()).replace(/[\s-]/g, "");
            return c.test(t) ? "email" : l.test(t) ? "mobile" : null;
        }
        function d() {
            let e = i.value.trim();
            if (!e) {
                a.value = "لطفاً ایمیل یا شماره موبایل خود را وارد کنید.";
                return;
            }
            let t = u(e);
            t ? (a.value = "", o.value = "pending", window.setTimeout(()=>{
                try {
                    localStorage.setItem("waston:newsletter", JSON.stringify({
                        contact: e,
                        kind: t,
                        at: Date.now()
                    }));
                } catch  {}
                s.value = e, o.value = "done", n("subscribe", e, t);
            }, 650)) : a.value = "ایمیل یا شماره موبایل معتبر نیست؛ مثلاً example@mail.com یا ۰۹۱۲۳۴۵۶۷۸۹";
        }
        function f() {
            o.value = "idle", i.value = "";
        }
        return (e, t)=>(Z(), ui("div", Bo, [
                o.value === "done" ? (Z(), ui("div", Vo, [
                    t[4] || (t[4] = Q("span", {
                        class: "nl__done-icon",
                        "aria-hidden": "true"
                    }, [
                        Q("svg", {
                            viewBox: "0 0 24 24",
                            width: "20",
                            height: "20",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2.4",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }, [
                            Q("path", {
                                d: "M20 6 9 17l-5-5"
                            })
                        ])
                    ], -1)),
                    Q("div", null, [
                        t[3] || (t[3] = Q("strong", null, "عضویت شما ثبت شد", -1)),
                        Q("p", null, [
                            Q("bdi", null, k(s.value), 1),
                            t[2] || (t[2] = yi(" به فهرست خبرنامه اضافه شد.", -1))
                        ])
                    ]),
                    Q("button", {
                        type: "button",
                        class: "nl__link",
                        onClick: f
                    }, "ثبت مورد دیگر")
                ])) : (Z(), ui("form", {
                    key: 1,
                    class: "nl__form",
                    novalidate: "",
                    onSubmit: uo(d, [
                        "prevent"
                    ])
                }, [
                    Q("label", {
                        class: "nl__label",
                        for: `nl-${z(r)}`
                    }, "ایمیل یا شماره موبایل", 8, Ho),
                    Q("div", Uo, [
                        Tn(Q("input", {
                            id: `nl-${z(r)}`,
                            "onUpdate:modelValue": t[0] || (t[0] = (e)=>i.value = e),
                            class: ge([
                                "nl__input",
                                {
                                    "nl__input--error": a.value
                                }
                            ]),
                            type: "text",
                            inputmode: "email",
                            autocomplete: "email",
                            dir: "ltr",
                            placeholder: "example@mail.com",
                            "aria-invalid": !!a.value,
                            "aria-describedby": a.value ? `nl-err-${z(r)}` : void 0,
                            onInput: t[1] || (t[1] = (e)=>a.value = "")
                        }, null, 42, Wo), [
                            [
                                so,
                                i.value
                            ]
                        ]),
                        Q("button", {
                            class: "nl__btn",
                            type: "submit",
                            disabled: o.value === "pending"
                        }, [
                            o.value === "pending" ? (Z(), ui("span", Ko)) : xi("", !0),
                            yi(" " + k(o.value === "pending" ? "در حال ثبت" : "عضویت"), 1)
                        ], 8, Go)
                    ]),
                    a.value ? (Z(), ui("p", {
                        key: 0,
                        id: `nl-err-${z(r)}`,
                        class: "nl__error",
                        role: "alert"
                    }, k(a.value), 9, qo)) : xi("", !0)
                ], 32))
            ]));
    }
}), [
    [
        "__scopeId",
        "data-v-8ae3275a"
    ]
]);
// vue-modules/src/index.ts
function Yo(e, t, n) {
    let r = /* @__PURE__ */ It({
        ...n
    }), i = ho({
        name: "WastonVueIsland",
        render: ()=>Yi(e, r)
    });
    return i.mount(t), {
        update (e) {
            Object.assign(r, e);
        },
        unmount () {
            i.unmount();
        }
    };
}
function Xo(e, t) {
    return Yo(zo, e, t);
}
function Zo(e, t) {
    return Yo(Jo, e, t);
}
var Qo = Xi;
;
}),
];

//# sourceMappingURL=vue-modules_dist_index_14as8jk627re3.js.map