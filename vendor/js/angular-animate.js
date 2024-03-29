/*
 AngularJS v1.5.0
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (D, r, Va) {
    'use strict'; function ya(a, b, c) { if (!a) throw Ka("areq", b || "?", c || "required"); return a } function za(a, b) { if (!a && !b) return ""; if (!a) return b; if (!b) return a; ba(a) && (a = a.join(" ")); ba(b) && (b = b.join(" ")); return a + " " + b } function La(a) { var b = {}; a && (a.to || a.from) && (b.to = a.to, b.from = a.from); return b } function X(a, b, c) { var d = ""; a = ba(a) ? a : a && R(a) && a.length ? a.split(/\s+/) : []; s(a, function (a, g) { a && 0 < a.length && (d += 0 < g ? " " : "", d += c ? b + a : a + b) }); return d } function Ma(a) {
        if (a instanceof I) switch (a.length) {
            case 0: return [];
            case 1: if (1 === a[0].nodeType) return a; break; default: return I(oa(a))
        } if (1 === a.nodeType) return I(a)
    } function oa(a) { if (!a[0]) return a; for (var b = 0; b < a.length; b++) { var c = a[b]; if (1 == c.nodeType) return c } } function Na(a, b, c) { s(b, function (b) { a.addClass(b, c) }) } function Oa(a, b, c) { s(b, function (b) { a.removeClass(b, c) }) } function U(a) { return function (b, c) { c.addClass && (Na(a, b, c.addClass), c.addClass = null); c.removeClass && (Oa(a, b, c.removeClass), c.removeClass = null) } } function ka(a) {
        a = a || {}; if (!a.$$prepared) {
            var b = a.domOperation ||
            Q; a.domOperation = function () { a.$$domOperationFired = !0; b(); b = Q }; a.$$prepared = !0
        } return a
    } function fa(a, b) { Aa(a, b); Ba(a, b) } function Aa(a, b) { b.from && (a.css(b.from), b.from = null) } function Ba(a, b) { b.to && (a.css(b.to), b.to = null) } function V(a, b, c) {
        var d = b.options || {}; c = c.options || {}; var e = (d.addClass || "") + " " + (c.addClass || ""), g = (d.removeClass || "") + " " + (c.removeClass || ""); a = Pa(a.attr("class"), e, g); c.preparationClasses && (d.preparationClasses = ca(c.preparationClasses, d.preparationClasses), delete c.preparationClasses);
        e = d.domOperation !== Q ? d.domOperation : null; Ca(d, c); e && (d.domOperation = e); d.addClass = a.addClass ? a.addClass : null; d.removeClass = a.removeClass ? a.removeClass : null; b.addClass = d.addClass; b.removeClass = d.removeClass; return d
    } function Pa(a, b, c) {
        function d(a) { R(a) && (a = a.split(" ")); var b = {}; s(a, function (a) { a.length && (b[a] = !0) }); return b } var e = {}; a = d(a); b = d(b); s(b, function (a, b) { e[b] = 1 }); c = d(c); s(c, function (a, b) { e[b] = 1 === e[b] ? null : -1 }); var g = { addClass: "", removeClass: "" }; s(e, function (b, c) {
            var d, e; 1 === b ? (d = "addClass",
            e = !a[c]) : -1 === b && (d = "removeClass", e = a[c]); e && (g[d].length && (g[d] += " "), g[d] += c)
        }); return g
    } function G(a) { return a instanceof r.element ? a[0] : a } function Qa(a, b, c) { var d = ""; b && (d = X(b, "ng-", !0)); c.addClass && (d = ca(d, X(c.addClass, "-add"))); c.removeClass && (d = ca(d, X(c.removeClass, "-remove"))); d.length && (c.preparationClasses = d, a.addClass(d)) } function la(a, b) { var c = b ? "-" + b + "s" : ""; ha(a, [ia, c]); return [ia, c] } function pa(a, b) { var c = b ? "paused" : "", d = Y + "PlayState"; ha(a, [d, c]); return [d, c] } function ha(a, b) {
        a.style[b[0]] =
        b[1]
    } function ca(a, b) { return a ? b ? a + " " + b : a : b } function Da(a, b, c) { var d = Object.create(null), e = a.getComputedStyle(b) || {}; s(c, function (a, b) { var c = e[a]; if (c) { var C = c.charAt(0); if ("-" === C || "+" === C || 0 <= C) c = Ra(c); 0 === c && (c = null); d[b] = c } }); return d } function Ra(a) { var b = 0; a = a.split(/\s*,\s*/); s(a, function (a) { "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1)); a = parseFloat(a) || 0; b = b ? Math.max(a, b) : a }); return b } function qa(a) { return 0 === a || null != a } function Ea(a, b) {
        var c = S, d = a + "s"; b ? c += "Duration" : d += " linear all";
        return [c, d]
    } function Fa() { var a = Object.create(null); return { flush: function () { a = Object.create(null) }, count: function (b) { return (b = a[b]) ? b.total : 0 }, get: function (b) { return (b = a[b]) && b.value }, put: function (b, c) { a[b] ? a[b].total++ : a[b] = { total: 1, value: c } } } } function Ga(a, b, c) { s(c, function (c) { a[c] = Z(a[c]) ? a[c] : b.style.getPropertyValue(c) }) } var Q = r.noop, Ha = r.copy, Ca = r.extend, I = r.element, s = r.forEach, ba = r.isArray, R = r.isString, ra = r.isObject, P = r.isUndefined, Z = r.isDefined, Ia = r.isFunction, sa = r.isElement, S, ta, Y, ua; P(D.ontransitionend) &&
    Z(D.onwebkittransitionend) ? (S = "WebkitTransition", ta = "webkitTransitionEnd transitionend") : (S = "transition", ta = "transitionend"); P(D.onanimationend) && Z(D.onwebkitanimationend) ? (Y = "WebkitAnimation", ua = "webkitAnimationEnd animationend") : (Y = "animation", ua = "animationend"); var ma = Y + "Delay", va = Y + "Duration", ia = S + "Delay"; D = S + "Duration"; var Ka = r.$$minErr("ng"), Sa = { transitionDuration: D, transitionDelay: ia, transitionProperty: S + "Property", animationDuration: va, animationDelay: ma, animationIterationCount: Y + "IterationCount" },
    Ta = { transitionDuration: D, transitionDelay: ia, animationDuration: va, animationDelay: ma }; r.module("ngAnimate", []).directive("ngAnimateSwap", ["$animate", "$rootScope", function (a, b) { return { restrict: "A", transclude: "element", terminal: !0, priority: 600, link: function (b, d, e, g, H) { var A, C; b.$watchCollection(e.ngAnimateSwap || e["for"], function (e) { A && a.leave(A); C && (C.$destroy(), C = null); if (e || 0 === e) C = b.$new(), H(C, function (b) { A = b; a.enter(b, null, d) }) }) } } }]).directive("ngAnimateChildren", ["$interpolate", function (a) {
        return {
            link: function (b,
            c, d) { function e(a) { c.data("$$ngAnimateChildren", "on" === a || "true" === a) } var g = d.ngAnimateChildren; r.isString(g) && 0 === g.length ? c.data("$$ngAnimateChildren", !0) : (e(a(g)(b)), d.$observe("ngAnimateChildren", e)) }
        }
    }]).factory("$$rAFScheduler", ["$$rAF", function (a) { function b(a) { d = d.concat(a); c() } function c() { if (d.length) { for (var b = d.shift(), H = 0; H < b.length; H++) b[H](); e || a(function () { e || c() }) } } var d, e; d = b.queue = []; b.waitUntilQuiet = function (b) { e && e(); e = a(function () { e = null; b(); c() }) }; return b }]).provider("$$animateQueue",
    ["$animateProvider", function (a) {
        function b(a) { if (!a) return null; a = a.split(" "); var b = Object.create(null); s(a, function (a) { b[a] = !0 }); return b } function c(a, c) { if (a && c) { var d = b(c); return a.split(" ").some(function (a) { return d[a] }) } } function d(a, b, c, d) { return g[a].some(function (a) { return a(b, c, d) }) } function e(a, b) { var c = 0 < (a.addClass || "").length, d = 0 < (a.removeClass || "").length; return b ? c && d : c || d } var g = this.rules = { skip: [], cancel: [], join: [] }; g.join.push(function (a, b, c) { return !b.structural && e(b) }); g.skip.push(function (a,
        b, c) { return !b.structural && !e(b) }); g.skip.push(function (a, b, c) { return "leave" == c.event && b.structural }); g.skip.push(function (a, b, c) { return c.structural && 2 === c.state && !b.structural }); g.cancel.push(function (a, b, c) { return c.structural && b.structural }); g.cancel.push(function (a, b, c) { return 2 === c.state && b.structural }); g.cancel.push(function (a, b, d) { a = b.addClass; b = b.removeClass; var e = d.addClass; d = d.removeClass; return P(a) && P(b) || P(e) && P(d) ? !1 : c(a, d) || c(b, e) }); this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document",
        "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function (b, c, g, m, M, r, u, na, v, z) {
            function K() { var a = !1; return function (b) { a ? b() : c.$$postDigest(function () { a = !0; b() }) } } function J(a, b, c) { var f = G(b), d = G(a), h = []; (a = x[c]) && s(a, function (a) { y.call(a.node, f) ? h.push(a.callback) : "leave" === c && y.call(a.node, d) && h.push(a.callback) }); return h } function h(a, f, h) {
                function l(c, f, d, h) {
                    g(function () { var c = J(y, a, f); c.length && b(function () { s(c, function (b) { b(a, d, h) }) }) }); c.progress(f,
                    d, h)
                } function x(b) { var c = a, f = n; f.preparationClasses && (c.removeClass(f.preparationClasses), f.preparationClasses = null); f.activeClasses && (c.removeClass(f.activeClasses), f.activeClasses = null); Ja(a, n); fa(a, n); n.domOperation(); k.complete(!b) } var n = Ha(h), z, y; if (a = Ma(a)) z = G(a), y = a.parent(); var n = ka(n), k = new u, g = K(); ba(n.addClass) && (n.addClass = n.addClass.join(" ")); n.addClass && !R(n.addClass) && (n.addClass = null); ba(n.removeClass) && (n.removeClass = n.removeClass.join(" ")); n.removeClass && !R(n.removeClass) && (n.removeClass =
                null); n.from && !ra(n.from) && (n.from = null); n.to && !ra(n.to) && (n.to = null); if (!z) return x(), k; h = [z.className, n.addClass, n.removeClass].join(" "); if (!Ua(h)) return x(), k; var C = 0 <= ["enter", "move", "leave"].indexOf(f), w = !L || m[0].hidden || E.get(z); h = !w && B.get(z) || {}; var v = !!h.state; w || v && 1 == h.state || (w = !q(a, y, f)); if (w) return x(), k; C && xa(a); w = { structural: C, element: a, event: f, addClass: n.addClass, removeClass: n.removeClass, close: x, options: n, runner: k }; if (v) {
                    if (d("skip", a, w, h)) {
                        if (2 === h.state) return x(), k; V(a, h, w);
                        return h.runner
                    } if (d("cancel", a, w, h)) if (2 === h.state) h.runner.end(); else if (h.structural) h.close(); else return V(a, h, w), h.runner; else if (d("join", a, w, h)) if (2 === h.state) V(a, w, {}); else return Qa(a, C ? f : null, n), f = w.event = h.event, n = V(a, h, w), h.runner
                } else V(a, w, {}); (v = w.structural) || (v = "animate" === w.event && 0 < Object.keys(w.options.to || {}).length || e(w)); if (!v) return x(), N(a), k; var M = (h.counter || 0) + 1; w.counter = M; t(a, 1, w); c.$$postDigest(function () {
                    var b = B.get(z), c = !b, b = b || {}, d = 0 < (a.parent() || []).length && ("animate" ===
                    b.event || b.structural || e(b)); if (c || b.counter !== M || !d) { c && (Ja(a, n), fa(a, n)); if (c || C && b.event !== f) n.domOperation(), k.end(); d || N(a) } else f = !b.structural && e(b, !0) ? "setClass" : b.event, t(a, 2), b = r(a, f, b.options), b.done(function (b) { x(!b); (b = B.get(z)) && b.counter === M && N(G(a)); l(k, f, "close", {}) }), k.setHost(b), l(k, f, "start", {})
                }); return k
            } function xa(a) {
                a = G(a).querySelectorAll("[data-ng-animate]"); s(a, function (a) {
                    var b = parseInt(a.getAttribute("data-ng-animate")), c = B.get(a); if (c) switch (b) {
                        case 2: c.runner.end();
                        case 1: B.remove(a)
                    }
                })
            } function N(a) { a = G(a); a.removeAttribute("data-ng-animate"); B.remove(a) } function k(a, b) { return G(a) === G(b) } function q(a, b, c) {
                c = I(m[0].body); var f = k(a, c) || "HTML" === a[0].nodeName, d = k(a, g), h = !1, l, e = E.get(G(a)); for ((a = a.data("$ngAnimatePin")) && (b = a) ; b && b.length;) {
                    d || (d = k(b, g)); var x = b[0]; if (1 !== x.nodeType) break; a = B.get(x) || {}; if (!h) { x = E.get(x); if (!0 === x && !1 !== e) { e = !0; break } else !1 === x && (e = !1); h = a.structural } if (P(l) || !0 === l) a = b.data("$$ngAnimateChildren"), Z(a) && (l = a); if (h && !1 === l) break;
                    f || (f = k(b, c)); if (f && d) break; if (!d && (a = b.data("$ngAnimatePin"))) { b = a; continue } b = b.parent()
                } return (!h || l) && !0 !== e && d && f
            } function t(a, b, c) { c = c || {}; c.state = b; a = G(a); a.setAttribute("data-ng-animate", b); c = (b = B.get(a)) ? Ca(b, c) : c; B.put(a, c) } var B = new M, E = new M, L = null, f = c.$watch(function () { return 0 === na.totalPendingRequests }, function (a) { a && (f(), c.$$postDigest(function () { c.$$postDigest(function () { null === L && (L = !0) }) })) }), x = {}, l = a.classNameFilter(), Ua = l ? function (a) { return l.test(a) } : function () { return !0 }, Ja = U(v),
            y = Node.prototype.contains || function (a) { return this === a || !!(this.compareDocumentPosition(a) & 16) }; return {
                on: function (a, b, c) { b = oa(b); x[a] = x[a] || []; x[a].push({ node: b, callback: c }) }, off: function (a, b, c) { function f(a, b, c) { var d = oa(b); return a.filter(function (a) { return !(a.node === d && (!c || a.callback === c)) }) } var d = x[a]; d && (x[a] = 1 === arguments.length ? null : f(d, b, c)) }, pin: function (a, b) { ya(sa(a), "element", "not an element"); ya(sa(b), "parentElement", "not an element"); a.data("$ngAnimatePin", b) }, push: function (a, b, c, f) {
                    c =
                    c || {}; c.domOperation = f; return h(a, b, c)
                }, enabled: function (a, b) { var c = arguments.length; if (0 === c) b = !!L; else if (sa(a)) { var f = G(a), d = E.get(f); 1 === c ? b = !d : E.put(f, !b) } else b = L = !!a; return b }
            }
        }]
    }]).provider("$$animation", ["$animateProvider", function (a) {
        function b(a) { return a.data("$$animationRunner") } var c = this.drivers = []; this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function (a, e, g, H, A, C) {
            function m(a) {
                function b(a) {
                    if (a.processed) return a; a.processed = !0; var d =
                    a.domNode, N = d.parentNode; e.put(d, a); for (var k; N;) { if (k = e.get(N)) { k.processed || (k = b(k)); break } N = N.parentNode } (k || c).children.push(a); return a
                } var c = { children: [] }, d, e = new A; for (d = 0; d < a.length; d++) { var g = a[d]; e.put(g.domNode, a[d] = { domNode: g.domNode, fn: g.fn, children: [] }) } for (d = 0; d < a.length; d++) b(a[d]); return function (a) {
                    var b = [], c = [], d; for (d = 0; d < a.children.length; d++) c.push(a.children[d]); a = c.length; var e = 0, t = []; for (d = 0; d < c.length; d++) {
                        var g = c[d]; 0 >= a && (a = e, e = 0, b.push(t), t = []); t.push(g.fn); g.children.forEach(function (a) {
                            e++;
                            c.push(a)
                        }); a--
                    } t.length && b.push(t); return b
                }(c)
            } var M = [], r = U(a); return function (u, A, v) {
                function z(a) { a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]"); var b = []; s(a, function (a) { var c = a.getAttribute("ng-animate-ref"); c && c.length && b.push(a) }); return b } function K(a) {
                    var b = [], c = {}; s(a, function (a, f) {
                        var d = G(a.element), h = 0 <= ["enter", "move"].indexOf(a.event), d = a.structural ? z(d) : []; if (d.length) {
                            var e = h ? "to" : "from"; s(d, function (a) {
                                var b = a.getAttribute("ng-animate-ref"); c[b] = c[b] ||
                                {}; c[b][e] = { animationID: f, element: I(a) }
                            })
                        } else b.push(a)
                    }); var d = {}, h = {}; s(c, function (c, e) {
                        var l = c.from, t = c.to; if (l && t) { var g = a[l.animationID], E = a[t.animationID], k = l.animationID.toString(); if (!h[k]) { var z = h[k] = { structural: !0, beforeStart: function () { g.beforeStart(); E.beforeStart() }, close: function () { g.close(); E.close() }, classes: J(g.classes, E.classes), from: g, to: E, anchors: [] }; z.classes.length ? b.push(z) : (b.push(g), b.push(E)) } h[k].anchors.push({ out: l.element, "in": t.element }) } else l = l ? l.animationID : t.animationID,
                        t = l.toString(), d[t] || (d[t] = !0, b.push(a[l]))
                    }); return b
                } function J(a, b) { a = a.split(" "); b = b.split(" "); for (var c = [], d = 0; d < a.length; d++) { var h = a[d]; if ("ng-" !== h.substring(0, 3)) for (var e = 0; e < b.length; e++) if (h === b[e]) { c.push(h); break } } return c.join(" ") } function h(a) { for (var b = c.length - 1; 0 <= b; b--) { var d = c[b]; if (g.has(d) && (d = g.get(d)(a))) return d } } function xa(a, c) { a.from && a.to ? (b(a.from.element).setHost(c), b(a.to.element).setHost(c)) : b(a.element).setHost(c) } function N() {
                    var a = b(u); !a || "leave" === A && v.$$domOperationFired ||
                    a.end()
                } function k(b) { u.off("$destroy", N); u.removeData("$$animationRunner"); r(u, v); fa(u, v); v.domOperation(); E && a.removeClass(u, E); u.removeClass("ng-animate"); t.complete(!b) } v = ka(v); var q = 0 <= ["enter", "move", "leave"].indexOf(A), t = new H({ end: function () { k() }, cancel: function () { k(!0) } }); if (!c.length) return k(), t; u.data("$$animationRunner", t); var B = za(u.attr("class"), za(v.addClass, v.removeClass)), E = v.tempClasses; E && (B += " " + E, v.tempClasses = null); var L; q && (L = "ng-" + A + "-prepare", a.addClass(u, L)); M.push({
                    element: u,
                    classes: B, event: A, structural: q, options: v, beforeStart: function () { u.addClass("ng-animate"); E && a.addClass(u, E); L && (a.removeClass(u, L), L = null) }, close: k
                }); u.on("$destroy", N); if (1 < M.length) return t; e.$$postDigest(function () {
                    var a = []; s(M, function (c) { b(c.element) ? a.push(c) : c.close() }); M.length = 0; var c = K(a), d = []; s(c, function (a) {
                        d.push({
                            domNode: G(a.from ? a.from.element : a.element), fn: function () {
                                a.beforeStart(); var c, d = a.close; if (b(a.anchors ? a.from.element || a.to.element : a.element)) { var f = h(a); f && (c = f.start) } c ?
                                (c = c(), c.done(function (a) { d(!a) }), xa(a, c)) : d()
                            }
                        })
                    }); C(m(d))
                }); return t
            }
        }]
    }]).provider("$animateCss", ["$animateProvider", function (a) {
        var b = Fa(), c = Fa(); this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (a, e, g, H, A, C, m, M) {
            function r(a, b) { var c = a.parentNode; return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++K)) + "-" + a.getAttribute("class") + "-" + b } function u(h, g, z, k) {
                var q; 0 < b.count(z) && (q = c.get(z), q || (g = X(g, "-stagger"),
                e.addClass(h, g), q = Da(a, h, k), q.animationDuration = Math.max(q.animationDuration, 0), q.transitionDuration = Math.max(q.transitionDuration, 0), e.removeClass(h, g), c.put(z, q))); return q || {}
            } function na(a) { J.push(a); m.waitUntilQuiet(function () { b.flush(); c.flush(); for (var a = A(), d = 0; d < J.length; d++) J[d](a); J.length = 0 }) } function v(c, e, g) {
                e = b.get(g); e || (e = Da(a, c, Sa), "infinite" === e.animationIterationCount && (e.animationIterationCount = 1)); b.put(g, e); c = e; g = c.animationDelay; e = c.transitionDelay; c.maxDelay = g && e ? Math.max(g,
                e) : g || e; c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration); return c
            } var z = U(e), K = 0, J = []; return function (a, c) {
                function d() { q() } function k() { q(!0) } function q(b) {
                    if (!(A || wa && K)) {
                        A = !0; K = !1; f.$$skipPreparationClasses || e.removeClass(a, da); e.removeClass(a, ca); pa(l, !1); la(l, !1); s(m, function (a) { l.style[a[0]] = "" }); z(a, f); fa(a, f); Object.keys(x).length && s(x, function (a, b) { a ? l.style.setProperty(b, a) : l.style.removeProperty(b) }); if (f.onDone) f.onDone(); ea && ea.length && a.off(ea.join(" "),
                        E); var c = a.data("$$animateCss"); c && (H.cancel(c[0].timer), a.removeData("$$animateCss")); D && D.complete(!b)
                    }
                } function t(a) { p.blockTransition && la(l, a); p.blockKeyframeAnimation && pa(l, !!a) } function B() { D = new g({ end: d, cancel: k }); na(Q); q(); return { $$willAnimate: !1, start: function () { return D }, end: d } } function E(a) { a.stopPropagation(); var b = a.originalEvent || a; a = b.$manualTimeStamp || Date.now(); b = parseFloat(b.elapsedTime.toFixed(3)); Math.max(a - U, 0) >= P && b >= O && (wa = !0, q()) } function L() {
                    function b() {
                        if (!A) {
                            t(!1); s(m,
                            function (a) { l.style[a[0]] = a[1] }); z(a, f); e.addClass(a, ca); if (p.recalculateTimingStyles) { ja = l.className + " " + da; ga = r(l, ja); F = v(l, ja, ga); $ = F.maxDelay; n = Math.max($, 0); O = F.maxDuration; if (0 === O) { q(); return } p.hasTransitions = 0 < F.transitionDuration; p.hasAnimations = 0 < F.animationDuration } p.applyAnimationDelay && ($ = "boolean" !== typeof f.delay && qa(f.delay) ? parseFloat(f.delay) : $, n = Math.max($, 0), F.animationDelay = $, aa = [ma, $ + "s"], m.push(aa), l.style[aa[0]] = aa[1]); P = 1E3 * n; R = 1E3 * O; if (f.easing) {
                                var d, g = f.easing; p.hasTransitions &&
                                (d = S + "TimingFunction", m.push([d, g]), l.style[d] = g); p.hasAnimations && (d = Y + "TimingFunction", m.push([d, g]), l.style[d] = g)
                            } F.transitionDuration && ea.push(ta); F.animationDuration && ea.push(ua); U = Date.now(); var k = P + 1.5 * R; d = U + k; var g = a.data("$$animateCss") || [], L = !0; if (g.length) { var B = g[0]; (L = d > B.expectedEndTime) ? H.cancel(B.timer) : g.push(q) } L && (k = H(c, k, !1), g[0] = { timer: k, expectedEndTime: d }, g.push(q), a.data("$$animateCss", g)); if (ea.length) a.on(ea.join(" "), E); f.to && (f.cleanupStyles && Ga(x, l, Object.keys(f.to)), Ba(a,
                            f))
                        }
                    } function c() { var b = a.data("$$animateCss"); if (b) { for (var d = 1; d < b.length; d++) b[d](); a.removeData("$$animateCss") } } if (!A) if (l.parentNode) {
                        var d = function (a) { if (wa) K && a && (K = !1, q()); else if (K = !a, F.animationDuration) if (a = pa(l, K), K) m.push(a); else { var b = m, c = b.indexOf(a); 0 <= a && b.splice(c, 1) } }, g = 0 < Z && (F.transitionDuration && 0 === W.transitionDuration || F.animationDuration && 0 === W.animationDuration) && Math.max(W.animationDelay, W.transitionDelay); g ? H(b, Math.floor(g * Z * 1E3), !1) : b(); I.resume = function () { d(!0) }; I.pause =
                        function () { d(!1) }
                    } else q()
                } var f = c || {}; f.$$prepared || (f = ka(Ha(f))); var x = {}, l = G(a); if (!l || !l.parentNode || !M.enabled()) return B(); var m = [], J = a.attr("class"), y = La(f), A, K, wa, D, I, n, P, O, R, U, ea = []; if (0 === f.duration || !C.animations && !C.transitions) return B(); var w = f.event && ba(f.event) ? f.event.join(" ") : f.event, V = "", T = ""; w && f.structural ? V = X(w, "ng-", !0) : w && (V = w); f.addClass && (T += X(f.addClass, "-add")); f.removeClass && (T.length && (T += " "), T += X(f.removeClass, "-remove")); f.applyClassesEarly && T.length && z(a, f); var da =
                [V, T].join(" ").trim(), ja = J + " " + da, ca = X(da, "-active"), J = y.to && 0 < Object.keys(y.to).length; if (!(0 < (f.keyframeStyle || "").length || J || da)) return B(); var ga, W; 0 < f.stagger ? (y = parseFloat(f.stagger), W = { transitionDelay: y, animationDelay: y, transitionDuration: 0, animationDuration: 0 }) : (ga = r(l, ja), W = u(l, da, ga, Ta)); f.$$skipPreparationClasses || e.addClass(a, da); f.transitionStyle && (y = [S, f.transitionStyle], ha(l, y), m.push(y)); 0 <= f.duration && (y = 0 < l.style[S].length, y = Ea(f.duration, y), ha(l, y), m.push(y)); f.keyframeStyle &&
                (y = [Y, f.keyframeStyle], ha(l, y), m.push(y)); var Z = W ? 0 <= f.staggerIndex ? f.staggerIndex : b.count(ga) : 0; (w = 0 === Z) && !f.skipBlocking && la(l, 9999); var F = v(l, ja, ga), $ = F.maxDelay; n = Math.max($, 0); O = F.maxDuration; var p = {}; p.hasTransitions = 0 < F.transitionDuration; p.hasAnimations = 0 < F.animationDuration; p.hasTransitionAll = p.hasTransitions && "all" == F.transitionProperty; p.applyTransitionDuration = J && (p.hasTransitions && !p.hasTransitionAll || p.hasAnimations && !p.hasTransitions); p.applyAnimationDuration = f.duration && p.hasAnimations;
                p.applyTransitionDelay = qa(f.delay) && (p.applyTransitionDuration || p.hasTransitions); p.applyAnimationDelay = qa(f.delay) && p.hasAnimations; p.recalculateTimingStyles = 0 < T.length; if (p.applyTransitionDuration || p.applyAnimationDuration) O = f.duration ? parseFloat(f.duration) : O, p.applyTransitionDuration && (p.hasTransitions = !0, F.transitionDuration = O, y = 0 < l.style[S + "Property"].length, m.push(Ea(O, y))), p.applyAnimationDuration && (p.hasAnimations = !0, F.animationDuration = O, m.push([va, O + "s"])); if (0 === O && !p.recalculateTimingStyles) return B();
                if (null != f.delay) { var aa; "boolean" !== typeof f.delay && (aa = parseFloat(f.delay), n = Math.max(aa, 0)); p.applyTransitionDelay && m.push([ia, aa + "s"]); p.applyAnimationDelay && m.push([ma, aa + "s"]) } null == f.duration && 0 < F.transitionDuration && (p.recalculateTimingStyles = p.recalculateTimingStyles || w); P = 1E3 * n; R = 1E3 * O; f.skipBlocking || (p.blockTransition = 0 < F.transitionDuration, p.blockKeyframeAnimation = 0 < F.animationDuration && 0 < W.animationDelay && 0 === W.animationDuration); f.from && (f.cleanupStyles && Ga(x, l, Object.keys(f.from)),
                Aa(a, f)); p.blockTransition || p.blockKeyframeAnimation ? t(O) : f.skipBlocking || la(l, !1); return { $$willAnimate: !0, end: d, start: function () { if (!A) return I = { end: d, cancel: k, resume: null, pause: null }, D = new g(I), na(L), D } }
            }
        }]
    }]).provider("$$animateCssDriver", ["$$animationProvider", function (a) {
        a.drivers.push("$$animateCssDriver"); this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (a, c, d, e, g, H, A) {
            function C(a) { return a.replace(/\bng-\S+\b/g, "") } function m(a,
            b) { R(a) && (a = a.split(" ")); R(b) && (b = b.split(" ")); return a.filter(function (a) { return -1 === b.indexOf(a) }).join(" ") } function M(c, e, g) {
                function h(a) { var b = {}, c = G(a).getBoundingClientRect(); s(["width", "height", "top", "left"], function (a) { var d = c[a]; switch (a) { case "top": d += D.scrollTop; break; case "left": d += D.scrollLeft } b[a] = Math.floor(d) + "px" }); return b } function A() {
                    var c = C(g.attr("class") || ""), d = m(c, q), c = m(q, c), d = a(k, { to: h(g), addClass: "ng-anchor-in " + d, removeClass: "ng-anchor-out " + c, delay: !0 }); return d.$$willAnimate ?
                        d : null
                } function H() { k.remove(); e.removeClass("ng-animate-shim"); g.removeClass("ng-animate-shim") } var k = I(G(e).cloneNode(!0)), q = C(k.attr("class") || ""); e.addClass("ng-animate-shim"); g.addClass("ng-animate-shim"); k.addClass("ng-anchor"); v.append(k); var t; c = function () { var c = a(k, { addClass: "ng-anchor-out", delay: !0, from: h(e) }); return c.$$willAnimate ? c : null }(); if (!c && (t = A(), !t)) return H(); var B = c || t; return {
                    start: function () {
                        function a() { c && c.end() } var b, c = B.start(); c.done(function () {
                            c = null; if (!t && (t = A())) return c =
                            t.start(), c.done(function () { c = null; H(); b.complete() }), c; H(); b.complete()
                        }); return b = new d({ end: a, cancel: a })
                    }
                }
            } function r(a, b, c, e) { var g = u(a, Q), m = u(b, Q), k = []; s(e, function (a) { (a = M(c, a.out, a["in"])) && k.push(a) }); if (g || m || 0 !== k.length) return { start: function () { function a() { s(b, function (a) { a.end() }) } var b = []; g && b.push(g.start()); m && b.push(m.start()); s(k, function (a) { b.push(a.start()) }); var c = new d({ end: a, cancel: a }); d.all(b, function (a) { c.complete(a) }); return c } } } function u(c) {
                var d = c.element, e = c.options ||
                {}; c.structural && (e.event = c.event, e.structural = !0, e.applyClassesEarly = !0, "leave" === c.event && (e.onDone = e.domOperation)); e.preparationClasses && (e.event = ca(e.event, e.preparationClasses)); c = a(d, e); return c.$$willAnimate ? c : null
            } if (!g.animations && !g.transitions) return Q; var D = A[0].body; c = G(e); var v = I(c.parentNode && 11 === c.parentNode.nodeType || D.contains(c) ? c : D); U(H); return function (a) { return a.from && a.to ? r(a.from, a.to, a.classes, a.anchors) : u(a) }
        }]
    }]).provider("$$animateJs", ["$animateProvider", function (a) {
        this.$get =
        ["$injector", "$$AnimateRunner", "$$jqLite", function (b, c, d) {
            function e(c) { c = ba(c) ? c : c.split(" "); for (var d = [], e = {}, g = 0; g < c.length; g++) { var s = c[g], r = a.$$registeredAnimations[s]; r && !e[s] && (d.push(b.get(r)), e[s] = !0) } return d } var g = U(d); return function (a, b, d, m) {
                function r() { m.domOperation(); g(a, m) } function D(a, b, d, e, f) {
                    switch (d) { case "animate": b = [b, e.from, e.to, f]; break; case "setClass": b = [b, z, K, f]; break; case "addClass": b = [b, z, f]; break; case "removeClass": b = [b, K, f]; break; default: b = [b, f] } b.push(e); if (a = a.apply(a,
                    b)) if (Ia(a.start) && (a = a.start()), a instanceof c) a.done(f); else if (Ia(a)) return a; return Q
                } function u(a, b, d, e, f) { var g = []; s(e, function (e) { var h = e[f]; h && g.push(function () { var e, f, g = !1, k = function (a) { g || (g = !0, (f || Q)(a), e.complete(!a)) }; e = new c({ end: function () { k() }, cancel: function () { k(!0) } }); f = D(h, a, b, d, function (a) { k(!1 === a) }); return e }) }); return g } function G(a, b, d, e, f) {
                    var g = u(a, b, d, e, f); if (0 === g.length) {
                        var h, k; "beforeSetClass" === f ? (h = u(a, "removeClass", d, e, "beforeRemoveClass"), k = u(a, "addClass", d, e, "beforeAddClass")) :
                        "setClass" === f && (h = u(a, "removeClass", d, e, "removeClass"), k = u(a, "addClass", d, e, "addClass")); h && (g = g.concat(h)); k && (g = g.concat(k))
                    } if (0 !== g.length) return function (a) { var b = []; g.length && s(g, function (a) { b.push(a()) }); b.length ? c.all(b, a) : a(); return function (a) { s(b, function (b) { a ? b.cancel() : b.end() }) } }
                } var v = !1; 3 === arguments.length && ra(d) && (m = d, d = null); m = ka(m); d || (d = a.attr("class") || "", m.addClass && (d += " " + m.addClass), m.removeClass && (d += " " + m.removeClass)); var z = m.addClass, K = m.removeClass, J = e(d), h, I; if (J.length) {
                    var N,
                    k; "leave" == b ? (k = "leave", N = "afterLeave") : (k = "before" + b.charAt(0).toUpperCase() + b.substr(1), N = b); "enter" !== b && "move" !== b && (h = G(a, b, m, J, k)); I = G(a, b, m, J, N)
                } if (h || I) {
                    var q; return {
                        $$willAnimate: !0, end: function () { q ? q.end() : (v = !0, r(), fa(a, m), q = new c, q.complete(!0)); return q }, start: function () {
                            function b(c) { v = !0; r(); fa(a, m); q.complete(c) } if (q) return q; q = new c; var d, e = []; h && e.push(function (a) { d = h(a) }); e.length ? e.push(function (a) { r(); a(!0) }) : r(); I && e.push(function (a) { d = I(a) }); q.setHost({
                                end: function () {
                                    v || ((d ||
                                    Q)(void 0), b(void 0))
                                }, cancel: function () { v || ((d || Q)(!0), b(!0)) }
                            }); c.chain(e, b); return q
                        }
                    }
                }
            }
        }]
    }]).provider("$$animateJsDriver", ["$$animationProvider", function (a) {
        a.drivers.push("$$animateJsDriver"); this.$get = ["$$animateJs", "$$AnimateRunner", function (a, c) {
            function d(c) { return a(c.element, c.event, c.classes, c.options) } return function (a) {
                if (a.from && a.to) {
                    var b = d(a.from), r = d(a.to); if (b || r) return {
                        start: function () {
                            function a() { return function () { s(d, function (a) { a.end() }) } } var d = []; b && d.push(b.start()); r &&
                            d.push(r.start()); c.all(d, function (a) { e.complete(a) }); var e = new c({ end: a(), cancel: a() }); return e
                        }
                    }
                } else return d(a)
            }
        }]
    }])
})(window, window.angular);