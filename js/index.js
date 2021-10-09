// popper.min.js
(function (e, t) { 'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t() })(this, function () { 'use strict'; function e(e) { return e && '[object Function]' === {}.toString.call(e) } function t(e, t) { if (1 !== e.nodeType) return []; var o = e.ownerDocument.defaultView, n = o.getComputedStyle(e, null); return t ? n[t] : n } function o(e) { return 'HTML' === e.nodeName ? e : e.parentNode || e.host } function n(e) { if (!e) return document.body; switch (e.nodeName) { case 'HTML': case 'BODY': return e.ownerDocument.body; case '#document': return e.body; }var i = t(e), r = i.overflow, p = i.overflowX, s = i.overflowY; return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e)) } function i(e) { return e && e.referenceNode ? e.referenceNode : e } function r(e) { return 11 === e ? re : 10 === e ? pe : re || pe } function p(e) { if (!e) return document.documentElement; for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;)n = (e = e.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement } function s(e) { var t = e.nodeName; return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e) } function d(e) { return null === e.parentNode ? e : d(e.parentNode) } function a(e, t) { if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement; var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = o ? e : t, i = o ? t : e, r = document.createRange(); r.setStart(n, 0), r.setEnd(i, 0); var l = r.commonAncestorContainer; if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l); var f = d(e); return f.host ? a(f.host, t) : a(e, d(t).host) } function l(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top', o = 'top' === t ? 'scrollTop' : 'scrollLeft', n = e.nodeName; if ('BODY' === n || 'HTML' === n) { var i = e.ownerDocument.documentElement, r = e.ownerDocument.scrollingElement || i; return r[o] } return e[o] } function f(e, t) { var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = l(t, 'top'), i = l(t, 'left'), r = o ? -1 : 1; return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e } function m(e, t) { var o = 'x' === t ? 'Left' : 'Top', n = 'Left' == o ? 'Right' : 'Bottom'; return parseFloat(e['border' + o + 'Width']) + parseFloat(e['border' + n + 'Width']) } function h(e, t, o, n) { return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0) } function c(e) { var t = e.body, o = e.documentElement, n = r(10) && getComputedStyle(o); return { height: h('Height', t, o, n), width: h('Width', t, o, n) } } function g(e) { return le({}, e, { right: e.left + e.width, bottom: e.top + e.height }) } function u(e) { var o = {}; try { if (r(10)) { o = e.getBoundingClientRect(); var n = l(e, 'top'), i = l(e, 'left'); o.top += n, o.left += i, o.bottom += n, o.right += i } else o = e.getBoundingClientRect() } catch (t) { } var p = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top }, s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {}, d = s.width || e.clientWidth || p.width, a = s.height || e.clientHeight || p.height, f = e.offsetWidth - d, h = e.offsetHeight - a; if (f || h) { var u = t(e); f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h } return g(p) } function b(e, o) { var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], p = r(10), s = 'HTML' === o.nodeName, d = u(e), a = u(o), l = n(e), m = t(o), h = parseFloat(m.borderTopWidth), c = parseFloat(m.borderLeftWidth); i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0)); var b = g({ top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height }); if (b.marginTop = 0, b.marginLeft = 0, !p && s) { var w = parseFloat(m.marginTop), y = parseFloat(m.marginLeft); b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y } return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b } function w(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = e.ownerDocument.documentElement, n = b(e, o), i = ee(o.clientWidth, window.innerWidth || 0), r = ee(o.clientHeight, window.innerHeight || 0), p = t ? 0 : l(o), s = t ? 0 : l(o, 'left'), d = { top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r }; return g(d) } function y(e) { var n = e.nodeName; if ('BODY' === n || 'HTML' === n) return !1; if ('fixed' === t(e, 'position')) return !0; var i = o(e); return !!i && y(i) } function E(e) { if (!e || !e.parentElement || r()) return document.documentElement; for (var o = e.parentElement; o && 'none' === t(o, 'transform');)o = o.parentElement; return o || document.documentElement } function v(e, t, r, p) { var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], d = { top: 0, left: 0 }, l = s ? E(e) : a(e, i(t)); if ('viewport' === p) d = w(l, s); else { var f; 'scrollParent' === p ? (f = n(o(t)), 'BODY' === f.nodeName && (f = e.ownerDocument.documentElement)) : 'window' === p ? f = e.ownerDocument.documentElement : f = p; var m = b(f, l, s); if ('HTML' === f.nodeName && !y(l)) { var h = c(e.ownerDocument), g = h.height, u = h.width; d.top += m.top - m.marginTop, d.bottom = g + m.top, d.left += m.left - m.marginLeft, d.right = u + m.left } else d = m } r = r || 0; var v = 'number' == typeof r; return d.left += v ? r : r.left || 0, d.top += v ? r : r.top || 0, d.right -= v ? r : r.right || 0, d.bottom -= v ? r : r.bottom || 0, d } function x(e) { var t = e.width, o = e.height; return t * o } function O(e, t, o, n, i) { var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === e.indexOf('auto')) return e; var p = v(o, n, r, i), s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } }, d = Object.keys(s).map(function (e) { return le({ key: e }, s[e], { area: x(s[e]) }) }).sort(function (e, t) { return t.area - e.area }), a = d.filter(function (e) { var t = e.width, n = e.height; return t >= o.clientWidth && n >= o.clientHeight }), l = 0 < a.length ? a[0].key : d[0].key, f = e.split('-')[1]; return l + (f ? '-' + f : '') } function L(e, t, o) { var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, r = n ? E(t) : a(t, i(o)); return b(o, r, n) } function S(e) { var t = e.ownerDocument.defaultView, o = t.getComputedStyle(e), n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0), i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0), r = { width: e.offsetWidth + i, height: e.offsetHeight + n }; return r } function T(e) { var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }; return e.replace(/left|right|bottom|top/g, function (e) { return t[e] }) } function C(e, t, o) { o = o.split('-')[0]; var n = S(e), i = { width: n.width, height: n.height }, r = -1 !== ['right', 'left'].indexOf(o), p = r ? 'top' : 'left', s = r ? 'left' : 'top', d = r ? 'height' : 'width', a = r ? 'width' : 'height'; return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i } function D(e, t) { return Array.prototype.find ? e.find(t) : e.filter(t)[0] } function N(e, t, o) { if (Array.prototype.findIndex) return e.findIndex(function (e) { return e[t] === o }); var n = D(e, function (e) { return e[t] === o }); return e.indexOf(n) } function P(t, o, n) { var i = void 0 === n ? t : t.slice(0, N(t, 'name', n)); return i.forEach(function (t) { t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!'); var n = t['function'] || t.fn; t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t)) }), o } function k() { if (!this.state.isDestroyed) { var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} }; e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e)) } } function W(e, t) { return e.some(function (e) { var o = e.name, n = e.enabled; return n && o === t }) } function B(e) { for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) { var i = t[n], r = i ? '' + i + o : e; if ('undefined' != typeof document.body.style[r]) return r } return null } function H() { return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this } function A(e) { var t = e.ownerDocument; return t ? t.defaultView : window } function M(e, t, o, i) { var r = 'BODY' === e.nodeName, p = r ? e.ownerDocument.defaultView : e; p.addEventListener(t, o, { passive: !0 }), r || M(n(p.parentNode), t, o, i), i.push(p) } function F(e, t, o, i) { o.updateBound = i, A(e).addEventListener('resize', o.updateBound, { passive: !0 }); var r = n(e); return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o } function I() { this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate)) } function R(e, t) { return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) { e.removeEventListener('scroll', t.updateBound) }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t } function U() { this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state)) } function Y(e) { return '' !== e && !isNaN(parseFloat(e)) && isFinite(e) } function V(e, t) { Object.keys(t).forEach(function (o) { var n = ''; -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n }) } function j(e, t) { Object.keys(t).forEach(function (o) { var n = t[o]; !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]) }) } function q(e, t) { var o = e.offsets, n = o.popper, i = o.reference, r = $, p = function (e) { return e }, s = r(i.width), d = r(n.width), a = -1 !== ['left', 'right'].indexOf(e.placement), l = -1 !== e.placement.indexOf('-'), f = t ? a || l || s % 2 == d % 2 ? r : Z : p, m = t ? r : p; return { left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left), top: m(n.top), bottom: m(n.bottom), right: f(n.right) } } function K(e, t, o) { var n = D(e, function (e) { var o = e.name; return o === t }), i = !!n && e.some(function (e) { return e.name === o && e.enabled && e.order < n.order }); if (!i) { var r = '`' + t + '`'; console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!') } return i } function z(e) { return 'end' === e ? 'start' : 'start' === e ? 'end' : e } function G(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = he.indexOf(e), n = he.slice(o + 1).concat(he.slice(0, o)); return t ? n.reverse() : n } function _(e, t, o, n) { var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +i[1], p = i[2]; if (!r) return e; if (0 === p.indexOf('%')) { var s; switch (p) { case '%p': s = o; break; case '%': case '%r': default: s = n; }var d = g(s); return d[t] / 100 * r } if ('vh' === p || 'vw' === p) { var a; return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r } return r } function X(e, t, o, n) { var i = [0, 0], r = -1 !== ['right', 'left'].indexOf(n), p = e.split(/(\+|\-)/).map(function (e) { return e.trim() }), s = p.indexOf(D(p, function (e) { return -1 !== e.search(/,|\s/) })); p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.'); var d = /\s*,\s*|\s+/, a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))]; return a = a.map(function (e, n) { var i = (1 === n ? !r : r) ? 'height' : 'width', p = !1; return e.reduce(function (e, t) { return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t) }, []).map(function (e) { return _(e, i, t, o) }) }), a.forEach(function (e, t) { e.forEach(function (o, n) { Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1)) }) }), i } function J(e, t) { var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0]; return o = Y(+n) ? [+n, 0] : X(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e } var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = 'undefined' != typeof window && 'undefined' != typeof document && 'undefined' != typeof navigator, oe = function () { for (var e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t += 1)if (te && 0 <= navigator.userAgent.indexOf(e[t])) return 1; return 0 }(), ne = te && window.Promise, ie = ne ? function (e) { var t = !1; return function () { t || (t = !0, window.Promise.resolve().then(function () { t = !1, e() })) } } : function (e) { var t = !1; return function () { t || (t = !0, setTimeout(function () { t = !1, e() }, oe)) } }, re = te && !!(window.MSInputMethodContext && document.documentMode), pe = te && /MSIE 10/.test(navigator.userAgent), se = function (e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function') }, de = function () { function e(e, t) { for (var o, n = 0; n < t.length; n++)o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } return function (t, o, n) { return o && e(t.prototype, o), n && e(t, n), t } }(), ae = function (e, t, o) { return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e }, le = Object.assign || function (e) { for (var t, o = 1; o < arguments.length; o++)for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e }, fe = te && /Firefox/i.test(navigator.userAgent), me = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'], he = me.slice(3), ce = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' }, ge = function () { function t(o, n) { var i = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}; se(this, t), this.scheduleUpdate = function () { return requestAnimationFrame(i.update) }, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) { i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) { return le({ name: e }, i.options.modifiers[e]) }).sort(function (e, t) { return e.order - t.order }), this.modifiers.forEach(function (t) { t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state) }), this.update(); var p = this.options.eventsEnabled; p && this.enableEventListeners(), this.state.eventsEnabled = p } return de(t, [{ key: 'update', value: function () { return k.call(this) } }, { key: 'destroy', value: function () { return H.call(this) } }, { key: 'enableEventListeners', value: function () { return I.call(this) } }, { key: 'disableEventListeners', value: function () { return U.call(this) } }]), t }(); return ge.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ge.placements = me, ge.Defaults = { placement: 'bottom', positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () { }, onUpdate: function () { }, modifiers: { shift: { order: 100, enabled: !0, fn: function (e) { var t = e.placement, o = t.split('-')[0], n = t.split('-')[1]; if (n) { var i = e.offsets, r = i.reference, p = i.popper, s = -1 !== ['bottom', 'top'].indexOf(o), d = s ? 'left' : 'top', a = s ? 'width' : 'height', l = { start: ae({}, d, r[d]), end: ae({}, d, r[d] + r[a] - p[a]) }; e.offsets.popper = le({}, p, l[n]) } return e } }, offset: { order: 200, enabled: !0, fn: J, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function (e, t) { var o = t.boundariesElement || p(e.instance.popper); e.instance.reference === o && (o = p(o)); var n = B('transform'), i = e.instance.popper.style, r = i.top, s = i.left, d = i[n]; i.top = '', i.left = '', i[n] = ''; var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed); i.top = r, i.left = s, i[n] = d, t.boundaries = a; var l = t.priority, f = e.offsets.popper, m = { primary: function (e) { var o = f[e]; return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), ae({}, e, o) }, secondary: function (e) { var o = 'right' === e ? 'left' : 'top', n = f[o]; return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))), ae({}, o, n) } }; return l.forEach(function (e) { var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary'; f = le({}, f, m[t](e)) }), e.offsets.popper = f, e }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' }, keepTogether: { order: 400, enabled: !0, fn: function (e) { var t = e.offsets, o = t.popper, n = t.reference, i = e.placement.split('-')[0], r = Z, p = -1 !== ['top', 'bottom'].indexOf(i), s = p ? 'right' : 'bottom', d = p ? 'left' : 'top', a = p ? 'width' : 'height'; return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e } }, arrow: { order: 500, enabled: !0, fn: function (e, o) { var n; if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e; var i = o.element; if ('string' == typeof i) { if (i = e.instance.popper.querySelector(i), !i) return e; } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e; var r = e.placement.split('-')[0], p = e.offsets, s = p.popper, d = p.reference, a = -1 !== ['left', 'right'].indexOf(r), l = a ? 'height' : 'width', f = a ? 'Top' : 'Left', m = f.toLowerCase(), h = a ? 'left' : 'top', c = a ? 'bottom' : 'right', u = S(i)[l]; d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper); var b = d[m] + d[l] / 2 - u / 2, w = t(e.instance.popper), y = parseFloat(w['margin' + f]), E = parseFloat(w['border' + f + 'Width']), v = b - e.offsets.popper[m] - y - E; return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ae(n, m, $(v)), ae(n, h, ''), n), e }, element: '[x-arrow]' }, flip: { order: 600, enabled: !0, fn: function (e, t) { if (W(e.instance.modifiers, 'inner')) return e; if (e.flipped && e.placement === e.originalPlacement) return e; var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed), n = e.placement.split('-')[0], i = T(n), r = e.placement.split('-')[1] || '', p = []; switch (t.behavior) { case ce.FLIP: p = [n, i]; break; case ce.CLOCKWISE: p = G(n); break; case ce.COUNTERCLOCKWISE: p = G(n, !0); break; default: p = t.behavior; }return p.forEach(function (s, d) { if (n !== s || p.length === d + 1) return e; n = e.placement.split('-')[0], i = T(n); var a = e.offsets.popper, l = e.offsets.reference, f = Z, m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom), h = f(a.left) < f(o.left), c = f(a.right) > f(o.right), g = f(a.top) < f(o.top), u = f(a.bottom) > f(o.bottom), b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u, w = -1 !== ['top', 'bottom'].indexOf(n), y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u), E = !!t.flipVariationsByContent && (w && 'start' === r && c || w && 'end' === r && h || !w && 'start' === r && u || !w && 'end' === r && g), v = y || E; (m || b || v) && (e.flipped = !0, (m || b) && (n = p[d + 1]), v && (r = z(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip')) }), e }, behavior: 'flip', padding: 5, boundariesElement: 'viewport', flipVariations: !1, flipVariationsByContent: !1 }, inner: { order: 700, enabled: !1, fn: function (e) { var t = e.placement, o = t.split('-')[0], n = e.offsets, i = n.popper, r = n.reference, p = -1 !== ['left', 'right'].indexOf(o), s = -1 === ['top', 'left'].indexOf(o); return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e } }, hide: { order: 800, enabled: !0, fn: function (e) { if (!K(e.instance.modifiers, 'hide', 'preventOverflow')) return e; var t = e.offsets.reference, o = D(e.instance.modifiers, function (e) { return 'preventOverflow' === e.name }).boundaries; if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) { if (!0 === e.hide) return e; e.hide = !0, e.attributes['x-out-of-boundaries'] = '' } else { if (!1 === e.hide) return e; e.hide = !1, e.attributes['x-out-of-boundaries'] = !1 } return e } }, computeStyle: { order: 850, enabled: !0, fn: function (e, t) { var o = t.x, n = t.y, i = e.offsets.popper, r = D(e.instance.modifiers, function (e) { return 'applyStyle' === e.name }).gpuAcceleration; void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'); var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l), m = { position: i.position }, h = q(e, 2 > window.devicePixelRatio || !fe), c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right', b = B('transform'); if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform'; else { var w = 'bottom' == c ? -1 : 1, y = 'right' == g ? -1 : 1; m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g } var E = { "x-placement": e.placement }; return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e }, gpuAcceleration: !0, x: 'bottom', y: 'right' }, applyStyle: { order: 900, enabled: !0, fn: function (e) { return V(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles), e }, onLoad: function (e, t, o, n, i) { var r = L(i, t, e, o.positionFixed), p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding); return t.setAttribute('x-placement', p), V(t, { position: o.positionFixed ? 'fixed' : 'absolute' }), o }, gpuAcceleration: void 0 } } }, ge });

// 自定义Isotope.js
!function (t, i, s) {
    "use strict";
    var e, n = t.document, o = t.Modernizr, r = function (t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }, a = "Moz Webkit O Ms".split(" "), h = function (t) {
        var i, s = n.documentElement.style;
        if ("string" == typeof s[t]) return t;
        t = r(t);
        for (var e = 0, o = a.length; o > e; e++) if (i = a[e] + t, "string" == typeof s[i]) return i
    }, l = h("transform"), u = h("transitionProperty"), c = {
        csstransforms: function () {
            return !!l
        }, csstransforms3d: function () {
            var t = !!h("perspective");
            if (t) {
                var s = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                    e = "@media (" + s.join("transform-3d),(") + "modernizr)",
                    n = i("<style>" + e + "{#modernizr{height:3px}}</style>").appendTo("head"),
                    o = i('<div id="modernizr" />').appendTo("html");
                t = 3 === o.height(), o.remove(), n.remove()
            }
            return t
        }, csstransitions: function () {
            return !!u
        }
    };
    if (o) for (e in c) o.hasOwnProperty(e) || o.addTest(e, c[e]); else {
        o = t.Modernizr = { _version: "1.6ish: miniModernizr for Isotope" };
        var d, f = " ";
        for (e in c) d = c[e](), o[e] = d, f += " " + (d ? "" : "no-") + e;
        i("html").addClass(f)
    }
    if (o.csstransforms) {
        var m = o.csstransforms3d ? {
            translate: function (t) {
                return "translate3d(" + t[0] + "px, " + t[1] + "px, 0) "
            }, scale: function (t) {
                return "scale3d(" + t + ", " + t + ", 1) "
            }
        } : {
            translate: function (t) {
                return "translate(" + t[0] + "px, " + t[1] + "px) "
            }, scale: function (t) {
                return "scale(" + t + ") "
            }
        }, p = function (t, s, e) {
            var n, o, r = i.data(t, "isoTransform") || {}, a = {}, h = {};
            a[s] = e, i.extend(r, a);
            for (n in r) o = r[n], h[n] = m[n](o);
            var u = h.translate || "", c = h.scale || "", d = u + c;
            i.data(t, "isoTransform", r), t.style[l] = d
        };
        i.cssNumber.scale = !0, i.cssHooks.scale = {
            set: function (t, i) {
                p(t, "scale", i)
            }, get: function (t, s) {
                var e = i.data(t, "isoTransform");
                return e && e.scale ? e.scale : 1
            }
        }, i.fx.step.scale = function (t) {
            i.cssHooks.scale.set(t.elem, t.now + t.unit)
        }, i.cssNumber.translate = !0, i.cssHooks.translate = {
            set: function (t, i) {
                p(t, "translate", i)
            }, get: function (t, s) {
                var e = i.data(t, "isoTransform");
                return e && e.translate ? e.translate : [0, 0]
            }
        }
    }
    var y, g;
    o.csstransitions && (y = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd otransitionend",
        transitionProperty: "transitionend"
    }[u], g = h("transitionDuration"));
    var v, _ = i.event, A = i.event.handle ? "handle" : "dispatch";
    _.special.smartresize = {
        setup: function () {
            i(this).bind("resize", _.special.smartresize.handler)
        }, teardown: function () {
            i(this).unbind("resize", _.special.smartresize.handler)
        }, handler: function (t, i) {
            var s = this, e = arguments;
            t.type = "smartresize", v && clearTimeout(v), v = setTimeout(function () {
                _[A].apply(s, e)
            }, "execAsap" === i ? 0 : 100)
        }
    }, i.fn.smartresize = function (t) {
        return t ? this.bind("smartresize", t) : this.trigger("smartresize", ["execAsap"])
    }, i.Isotope = function (t, s, e) {
        this.element = i(s), this._create(t), this._init(e)
    };
    var w = ["width", "height"], C = i(t);
    i.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: { opacity: 0, scale: .001 },
        visibleStyle: { opacity: 1, scale: 1 },
        containerStyle: { position: "relative", overflow: "hidden" },
        animationEngine: "best-available",
        animationOptions: { queue: !1, duration: 800 },
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !1,
        itemPositionDataEnabled: !1
    }, i.Isotope.prototype = {
        _create: function (t) {
            this.options = i.extend({}, i.Isotope.settings, t), this.styleQueue = [], this.elemCount = 0;
            var s = this.element[0].style;
            this.originalStyle = {};
            var e = w.slice(0);
            for (var n in this.options.containerStyle) e.push(n);
            for (var o = 0, r = e.length; r > o; o++) n = e[o], this.originalStyle[n] = s[n] || "";
            this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
            var a = {
                "original-order": function (t, i) {
                    return i.elemCount++, i.elemCount
                }, random: function () {
                    return Math.random()
                }
            };
            this.options.getSortData = i.extend(this.options.getSortData, a), this.reloadItems(), this.offset = {
                left: parseInt(this.element.css("padding-left") || 0, 10),
                top: parseInt(this.element.css("padding-top") || 0, 10)
            };
            var h = this;
            setTimeout(function () {
                h.element.addClass(h.options.containerClass)
            }, 0), this.options.resizable && C.bind("smartresize.isotope", function () {
                h.resize()
            }), this.element.delegate("." + this.options.hiddenClass, "click", function () {
                return !1
            })
        }, _getAtoms: function (t) {
            var i = this.options.itemSelector, s = i ? t.filter(i).add(t.find(i)) : t, e = { position: "absolute" };
            return s = s.filter(function (t, i) {
                return 1 === i.nodeType
            }), this.usingTransforms && (e.left = 0, e.top = 0), s.css(e).addClass(this.options.itemClass), this.updateSortData(s, !0), s
        }, _init: function (t) {
            this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(t)
        }, option: function (t) {
            if (i.isPlainObject(t)) {
                this.options = i.extend(!0, this.options, t);
                var s;
                for (var e in t) s = "_update" + r(e), this[s] && this[s]()
            }
        }, _updateAnimationEngine: function () {
            var t, i = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, "");
            switch (i) {
                case "css":
                case "none":
                    t = !1;
                    break;
                case "jquery":
                    t = !0;
                    break;
                default:
                    t = !o.csstransitions
            }
            this.isUsingJQueryAnimation = t, this._updateUsingTransforms()
        }, _updateTransformsEnabled: function () {
            this._updateUsingTransforms()
        }, _updateUsingTransforms: function () {
            var t = this.usingTransforms = this.options.transformsEnabled && o.csstransforms && o.csstransitions && !this.isUsingJQueryAnimation;
            t || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = t ? this._translate : this._positionAbs
        }, _filter: function (t) {
            var i = "" === this.options.filter ? "*" : this.options.filter;
            if (!i) return t;
            var s = this.options.hiddenClass, e = "." + s, n = t.filter(e), o = n;
            if ("*" !== i) {
                o = n.filter(i);
                var r = t.not(e).not(i).addClass(s);
                this.styleQueue.push({ $el: r, style: this.options.hiddenStyle })
            }
            return this.styleQueue.push({ $el: o, style: this.options.visibleStyle }), o.removeClass(s), t.filter(i)
        }, updateSortData: function (t, s) {
            var e, n, o = this, r = this.options.getSortData;
            t.each(function () {
                e = i(this), n = {};
                for (var t in r) s || "original-order" !== t ? n[t] = r[t](e, o) : n[t] = i.data(this, "isotope-sort-data")[t];
                i.data(this, "isotope-sort-data", n)
            })
        }, _sort: function () {
            var t = this.options.sortBy, i = this._getSorter, s = this.options.sortAscending ? 1 : -1,
                e = function (e, n) {
                    var o = i(e, t), r = i(n, t);
                    return o === r && "original-order" !== t && (o = i(e, "original-order"), r = i(n, "original-order")), (o > r ? 1 : r > o ? -1 : 0) * s
                };
            this.$filteredAtoms.sort(e)
        }, _getSorter: function (t, s) {
            return i.data(t, "isotope-sort-data")[s]
        }, _translate: function (t, i) {
            return { translate: [t, i] }
        }, _positionAbs: function (t, i) {
            return { left: t, top: i }
        }, _pushPosition: function (t, i, s) {
            i = Math.round(i + this.offset.left), s = Math.round(s + this.offset.top);
            var e = this.getPositionStyles(i, s);
            this.styleQueue.push({
                $el: t,
                style: e
            }), this.options.itemPositionDataEnabled && t.data("isotope-item-position", { x: i, y: s })
        }, layout: function (t, i) {
            var s = this.options.layoutMode;
            if (this["_" + s + "Layout"](t), this.options.resizesContainer) {
                var e = this["_" + s + "GetContainerSize"]();
                this.styleQueue.push({ $el: this.element, style: e })
            }
            this._processStyleQueue(t, i), this.isLaidOut = !0
        }, _processStyleQueue: function (t, s) {
            var e, n, r, a, h = this.isLaidOut && this.isUsingJQueryAnimation ? "animate" : "css",
                l = this.options.animationOptions, u = this.options.onLayout;
            if (n = function (t, i) {
                i.$el[h](i.style, l)
            }, this._isInserting && this.isUsingJQueryAnimation) n = function (t, i) {
                e = i.$el.hasClass("no-transition") ? "css" : h, i.$el[e](i.style, l)
            }; else if (s || u || l.complete) {
                var c = !1, d = [s, u, l.complete], f = this;
                if (r = !0, a = function () {
                    if (!c) {
                        for (var i, s = 0, e = d.length; e > s; s++) i = d[s], "function" == typeof i && i.call(f.element, t, f);
                        c = !0
                    }
                }, this.isUsingJQueryAnimation && "animate" === h) l.complete = a, r = !1; else if (o.csstransitions) {
                    for (var m, p = 0, v = this.styleQueue[0], _ = v && v.$el; !_ || !_.length;) {
                        if (m = this.styleQueue[p++], !m) return;
                        _ = m.$el
                    }
                    var A = parseFloat(getComputedStyle(_[0])[g]);
                    A > 0 && (n = function (t, i) {
                        i.$el[h](i.style, l).one(y, a)
                    }, r = !1)
                }
            }
            i.each(this.styleQueue, n), r && a(), this.styleQueue = []
        }, resize: function () {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        }, reLayout: function (t) {
            this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, t)
        }, addItems: function (t, i) {
            var s = this._getAtoms(t);
            this.$allAtoms = this.$allAtoms.add(s), i && i(s)
        }, insert: function (t, i) {
            this.element.append(t);
            var s = this;
            this.addItems(t, function (t) {
                var e = s._filter(t);
                s._addHideAppended(e), s._sort(), s.reLayout(), s._revealAppended(e, i)
            })
        }, appended: function (t, i) {
            var s = this;
            this.addItems(t, function (t) {
                s._addHideAppended(t), s.layout(t), s._revealAppended(t, i)
            })
        }, _addHideAppended: function (t) {
            this.$filteredAtoms = this.$filteredAtoms.add(t), t.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                $el: t,
                style: this.options.hiddenStyle
            })
        }, _revealAppended: function (t, i) {
            var s = this;
            setTimeout(function () {
                t.removeClass("no-transition"), s.styleQueue.push({
                    $el: t,
                    style: s.options.visibleStyle
                }), s._isInserting = !1, s._processStyleQueue(t, i)
            }, 10)
        }, reloadItems: function () {
            this.$allAtoms = this._getAtoms(this.element.children())
        }, remove: function (t, i) {
            this.$allAtoms = this.$allAtoms.not(t), this.$filteredAtoms = this.$filteredAtoms.not(t);
            var s = this, e = function () {
                t.remove(), i && i.call(s.element)
            };
            t.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                $el: t,
                style: this.options.hiddenStyle
            }), this._sort(), this.reLayout(e)) : e()
        }, shuffle: function (t) {
            this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(t)
        }, destroy: function () {
            var t = this.usingTransforms, i = this.options;
            this.$allAtoms.removeClass(i.hiddenClass + " " + i.itemClass).each(function () {
                var i = this.style;
                i.position = "", i.top = "", i.left = "", i.opacity = "", t && (i[l] = "")
            });
            var s = this.element[0].style;
            for (var e in this.originalStyle) s[e] = this.originalStyle[e];
            this.element.unbind(".isotope").undelegate("." + i.hiddenClass, "click").removeClass(i.containerClass).removeData("isotope"), C.unbind(".isotope")
        }, _getSegments: function (t) {
            var i, s = this.options.layoutMode, e = t ? "rowHeight" : "columnWidth", n = t ? "height" : "width",
                o = t ? "rows" : "cols", a = this.element[n](),
                h = this.options[s] && this.options[s][e] || this.$filteredAtoms["outer" + r(n)](!0) || a;
            i = Math.floor(a / h), i = Math.max(i, 1), this[s][o] = i, this[s][e] = h
        }, _checkIfSegmentsChanged: function (t) {
            var i = this.options.layoutMode, s = t ? "rows" : "cols", e = this[i][s];
            return this._getSegments(t), this[i][s] !== e
        }, _masonryReset: function () {
            this.masonry = {}, this._getSegments();
            var t = this.masonry.cols;
            for (this.masonry.colYs = []; t--;) this.masonry.colYs.push(0)
        }, _masonryLayout: function (t) {
            var s = this, e = s.masonry;
            t.each(function () {
                var t = i(this), n = Math.ceil(t.outerWidth(!0) / e.columnWidth);
                if (n = Math.min(n, e.cols), 1 === n) s._masonryPlaceBrick(t, e.colYs); else {
                    var o, r, a = e.cols + 1 - n, h = [];
                    for (r = 0; a > r; r++) o = e.colYs.slice(r, r + n), h[r] = Math.max.apply(Math, o);
                    s._masonryPlaceBrick(t, h)
                }
            })
        }, _masonryPlaceBrick: function (t, i) {
            for (var s = Math.min.apply(Math, i), e = 0, n = 0, o = i.length; o > n; n++) if (i[n] === s) {
                e = n;
                break
            }
            var r = this.masonry.columnWidth * e, a = s;
            this._pushPosition(t, r, a);
            var h = s + t.outerHeight(!0), l = this.masonry.cols + 1 - o;
            for (n = 0; l > n; n++) this.masonry.colYs[e + n] = h
        }, _masonryGetContainerSize: function () {
            var t = Math.max.apply(Math, this.masonry.colYs);
            return { height: t }
        }, _masonryResizeChanged: function () {
            return this._checkIfSegmentsChanged()
        }, _fitRowsReset: function () {
            this.fitRows = { x: 0, y: 0, height: 0 }
        }, _fitRowsLayout: function (t) {
            var s = this, e = this.element.width(), n = this.fitRows;
            t.each(function () {
                var t = i(this), o = t.outerWidth(!0), r = t.outerHeight(!0);
                0 !== n.x && o + n.x > e && (n.x = 0, n.y = n.height), s._pushPosition(t, n.x, n.y), n.height = Math.max(n.y + r, n.height), n.x += o
            })
        }, _fitRowsGetContainerSize: function () {
            return { height: this.fitRows.height }
        }, _fitRowsResizeChanged: function () {
            return !0
        }, _cellsByRowReset: function () {
            this.cellsByRow = { index: 0 }, this._getSegments(), this._getSegments(!0)
        }, _cellsByRowLayout: function (t) {
            var s = this, e = this.cellsByRow;
            t.each(function () {
                var t = i(this), n = e.index % e.cols, o = Math.floor(e.index / e.cols),
                    r = (n + .5) * e.columnWidth - t.outerWidth(!0) / 2,
                    a = (o + .5) * e.rowHeight - t.outerHeight(!0) / 2;
                s._pushPosition(t, r, a), e.index++
            })
        }, _cellsByRowGetContainerSize: function () {
            return { height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top }
        }, _cellsByRowResizeChanged: function () {
            return this._checkIfSegmentsChanged()
        }, _straightDownReset: function () {
            this.straightDown = { y: 0 }
        }, _straightDownLayout: function (t) {
            var s = this;
            t.each(function (t) {
                var e = i(this);
                s._pushPosition(e, 0, s.straightDown.y), s.straightDown.y += e.outerHeight(!0)
            })
        }, _straightDownGetContainerSize: function () {
            return { height: this.straightDown.y }
        }, _straightDownResizeChanged: function () {
            return !0
        }, _masonryHorizontalReset: function () {
            this.masonryHorizontal = {}, this._getSegments(!0);
            var t = this.masonryHorizontal.rows;
            for (this.masonryHorizontal.rowXs = []; t--;) this.masonryHorizontal.rowXs.push(0)
        }, _masonryHorizontalLayout: function (t) {
            var s = this, e = s.masonryHorizontal;
            t.each(function () {
                var t = i(this), n = Math.ceil(t.outerHeight(!0) / e.rowHeight);
                if (n = Math.min(n, e.rows), 1 === n) s._masonryHorizontalPlaceBrick(t, e.rowXs); else {
                    var o, r, a = e.rows + 1 - n, h = [];
                    for (r = 0; a > r; r++) o = e.rowXs.slice(r, r + n), h[r] = Math.max.apply(Math, o);
                    s._masonryHorizontalPlaceBrick(t, h)
                }
            })
        }, _masonryHorizontalPlaceBrick: function (t, i) {
            for (var s = Math.min.apply(Math, i), e = 0, n = 0, o = i.length; o > n; n++) if (i[n] === s) {
                e = n;
                break
            }
            var r = s, a = this.masonryHorizontal.rowHeight * e;
            this._pushPosition(t, r, a);
            var h = s + t.outerWidth(!0), l = this.masonryHorizontal.rows + 1 - o;
            for (n = 0; l > n; n++) this.masonryHorizontal.rowXs[e + n] = h
        }, _masonryHorizontalGetContainerSize: function () {
            var t = Math.max.apply(Math, this.masonryHorizontal.rowXs);
            return { width: t }
        }, _masonryHorizontalResizeChanged: function () {
            return this._checkIfSegmentsChanged(!0)
        }, _fitColumnsReset: function () {
            this.fitColumns = { x: 0, y: 0, width: 0 }
        }, _fitColumnsLayout: function (t) {
            var s = this, e = this.element.height(), n = this.fitColumns;
            t.each(function () {
                var t = i(this), o = t.outerWidth(!0), r = t.outerHeight(!0);
                0 !== n.y && r + n.y > e && (n.x = n.width, n.y = 0), s._pushPosition(t, n.x, n.y), n.width = Math.max(n.x + o, n.width), n.y += r
            })
        }, _fitColumnsGetContainerSize: function () {
            return { width: this.fitColumns.width }
        }, _fitColumnsResizeChanged: function () {
            return !0
        }, _cellsByColumnReset: function () {
            this.cellsByColumn = { index: 0 }, this._getSegments(), this._getSegments(!0)
        }, _cellsByColumnLayout: function (t) {
            var s = this, e = this.cellsByColumn;
            t.each(function () {
                var t = i(this), n = Math.floor(e.index / e.rows), o = e.index % e.rows,
                    r = (n + .5) * e.columnWidth - t.outerWidth(!0) / 2,
                    a = (o + .5) * e.rowHeight - t.outerHeight(!0) / 2;
                s._pushPosition(t, r, a), e.index++
            })
        }, _cellsByColumnGetContainerSize: function () {
            return { width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth }
        }, _cellsByColumnResizeChanged: function () {
            return this._checkIfSegmentsChanged(!0)
        }, _straightAcrossReset: function () {
            this.straightAcross = { x: 0 }
        }, _straightAcrossLayout: function (t) {
            var s = this;
            t.each(function (t) {
                var e = i(this);
                s._pushPosition(e, s.straightAcross.x, 0), s.straightAcross.x += e.outerWidth(!0)
            })
        }, _straightAcrossGetContainerSize: function () {
            return { width: this.straightAcross.x }
        }, _straightAcrossResizeChanged: function () {
            return !0
        }
    }, i.fn.imagesLoaded = function (t) {
        function s() {
            t.call(n, o)
        }

        function e(t) {
            var n = t.target;
            n.src !== a && -1 === i.inArray(n, h) && (h.push(n), --r <= 0 && (setTimeout(s), o.unbind(".imagesLoaded", e)))
        }

        var n = this, o = n.find("img").add(n.filter("img")), r = o.length,
            a = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", h = [];
        return r || s(), o.bind("load.imagesLoaded error.imagesLoaded", e).each(function () {
            var t = this.src;
            this.src = a, this.src = t
        }), n
    };
    var z = function (i) {
        t.console && t.console.error(i)
    };
    i.fn.isotope = function (t, s) {
        if ("string" == typeof t) {
            var e = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var s = i.data(this, "isotope");
                return s ? i.isFunction(s[t]) && "_" !== t.charAt(0) ? void s[t].apply(s, e) : void z("no such method '" + t + "' for isotope instance") : void z("cannot call methods on isotope prior to initialization; attempted to call method '" + t + "'")
            })
        } else this.each(function () {
            var e = i.data(this, "isotope");
            e ? (e.option(t), e._init(s)) : i.data(this, "isotope", new i.Isotope(t, this, s))
        });
        return this
    }
}(window, jQuery);

// 获取云端所有网站数据
$.ajax({
    type: "GET",
    url: 'https://api.lks.helloxjn.com/api/web_version',
    // url: 'http://127.0.0.1:8000/api/web_version',
    async: false,
    error: () => {
        alert('服务器已关闭')
    },
    success: (res) => {
        // 首次访问 或 版本升级时，ajax获取云端数据
        let web_version = res['data']['version'];
        if (!localStorage.getItem('web_version') || localStorage.getItem('web_version') != web_version) {
            localStorage.setItem('web_version', web_version);
            $.ajax({
                type: "GET",
                url: 'https://api.lks.helloxjn.com/api/web',
                // url: 'http://127.0.0.1:8000/api/web',
                async: false,
                error: () => {
                    alert('服务器已关闭')
                },
                success: (res) => {
                    localStorage.setItem('web_list', JSON.stringify(res));
                }
            });
        }
    }
});

// 渲染所有网站卡片
let web_list = JSON.parse(localStorage.getItem('web_list'));
let i = 0;
let web_list_html = `<div class="col-md-4 web-grid web_8 is_star" data-toggle="modal" data-target="#exampleModal"><span style="cursor:pointer"><div data-toggle="popover" data-content="良心到难以置信的网站推荐" class="services-inner-box web-single clearfix" ontouchstart=""><span class="star iconfont">&#xe639;</span><h2>LKs网页推荐站</h2><p>实用</p></div></span></div>`;
for (i in web_list) {
    web_list_html += `<div class="col-md-4 web-grid ${web_list[i].kind} is_${web_list[i].star}"><a href="${web_list[i].href}" target="_blank"><div data-toggle="popover" data-content="${web_list[i].slogan}" class="services-inner-box web-single clearfix" ontouchstart=""><span class="${web_list[i].star} iconfont">&#xe639;</span><h2>${web_list[i].title}</h2><p>${web_list[i].kind_name}</p></div></a></div>`
}
$('.web-list').html(web_list_html);
$('.copyrights').removeClass('hide');

// 标题
$('.section-title>a').click(() => {
    window.location.reload()
})

// 网站卡片动效
let $grid = $('.web-list').isotope({
    itemSelector: '.web-grid',
});
let video_list = [
    ['av3743771', 'https://www.bilibili.com/video/av3743771/', '//player.bilibili.com/player.html?aid=3743771&bvid=BV11s411X7u5&cid=6002978&page=1'],
    ['av9856372', 'https://www.bilibili.com/video/av9856372/', '//player.bilibili.com/player.html?aid=9856372&bvid=BV1Nx411D78D&cid=16294903&page=1'],
    ['av27234784', 'https://www.bilibili.com/video/av27234784/', '//player.bilibili.com/player.html?aid=27234784&bvid=BV1fs411E7ht&cid=169520351&page=1'],
    ['av66209341', 'https://www.bilibili.com/video/av66209341/', '//player.bilibili.com/player.html?aid=66209341&bvid=BV1M4411m7Mz&cid=114833286&page=1'],
    ['BV1a741137NS', 'https://www.bilibili.com/video/BV1a741137NS/', '//player.bilibili.com/player.html?aid=88646573&bvid=BV1a741137NS&cid=153840196&page=1'],
    ['BV1wv411y7L6', 'https://www.bilibili.com/video/BV1wv411y7L6/', '//player.bilibili.com/player.html?aid=244743030&bvid=BV1wv411y7L6&cid=237959150&page=1'],
    ['BV1bU4y1x7A1', 'https://www.bilibili.com/video/BV1bU4y1x7A1/', '//player.bilibili.com/player.html?aid=671597785&bvid=BV1bU4y1x7A1&cid=293053800&page=1'],
    ['BV1qQ4y1r7ty', 'https://www.bilibili.com/video/BV1qQ4y1r7ty/', '//player.bilibili.com/player.html?aid=720562882&bvid=BV1qQ4y1r7ty&cid=409952044&page=1'],
];
if (!localStorage.getItem('is_show_bilibili')) {
    localStorage.setItem('is_show_bilibili', 0);
}
$('.web-menu').on('click', 'button:eq(0), .period, .btn_star', function () {
    // 更新简介
    let num = $(this).attr('num');
    if (num === '0') {
        $('.bilibili_iframe').css('display', 'none');
        $('iframe').attr('src', '');
        $('.group-video').html(`B站博主<a href="https://space.bilibili.com/125526/" rel="nofollow noreferrer" target="_blank"> -LKs- </a>《良心到难以置信的网站推荐》`);
    } else if (num != '0' && !$(this).hasClass('active')) {
        // 视频预览开关
        $('.group-video').html(`<span class="my_span">视频</span>传送门：<a href="${video_list[Number(num) - 1][1]}" rel="nofollow noreferrer" target="_blank"><span class="iconfont">&#xe6b4;&nbsp;</span>${video_list[Number(num) - 1][0]}</a>&nbsp;&nbsp;<span class="my_span">视频</span>预览：<span class="show_bilibili" src="${video_list[Number(num) - 1][2]}" ontouchstart=""></span>`);
        let func_show_bilibili = () => {
            $('.bilibili_iframe').css('display', 'block');
            $('.show_bilibili').html('已打开');
            $('iframe').attr('src', video_list[Number(num) - 1][2]);
        }
        let func_hide_bilibili = () => {
            $('.bilibili_iframe').css('display', 'none');
            $('.show_bilibili').html('已关闭');
            $('iframe').attr('src', '');
        }
        if (localStorage.getItem('is_show_bilibili') == 1) {
            func_show_bilibili();
        } else {
            func_hide_bilibili();
        }
        $('.show_bilibili').click(() => {
            if (localStorage.getItem('is_show_bilibili') == 1) {
                localStorage.setItem('is_show_bilibili', 0);;
                func_hide_bilibili();
            } else {
                localStorage.setItem('is_show_bilibili', 1);;
                func_show_bilibili();
            }
        })
    }
    // 卡片filter
    $(this).addClass('active').siblings().removeClass('active');
    $grid.isotope({
        filter: $(this).attr('data-filter'),
    });
    // 控制页脚位置
    setTimeout(() => {
        $('.copyrights').css('position', 'relative');
    }, 10);
});

// 滚动特效
let $scroll_to_top = $("#scroll-to-top");
let $dmtop = $('.dmtop');
$(window).scroll(() => {
    if ($(window).scrollTop() < 100) {
        $dmtop.removeClass('show');
    } else {
        $dmtop.addClass('show');
    }
});
$scroll_to_top.click(function (e) {
    e.preventDefault()
    $('html,body').animate({
        scrollTop: 0
    }, 700);
});

// 桌面端窗口自适应
window.onresize = () => {
    if ($(window).width() >= 768) {
        $grid.isotope({
            filter: $('.web-menu button.active').attr('data-filter'),
        });
    } else {
        $('.services-inner-box').unbind('mouseenter').unbind('mouseleave');
    }
};

// 取消移动端bootstrap hover效果
if ($(window).width() < 768) {
    setTimeout(() => {
        $('.services-inner-box').unbind('mouseenter').unbind('mouseleave');
    }, 300);
}

// 图片懒加载
setTimeout(() => {
    $('.modal-body img').attr('src', 'img/lks.png');
}, 300)

// lks模态框
$('.github_lks_btn').click(() => { window.open("https://github.com/xiangjianan/lks/") });

// 标签分类切换
$('.btn_toogle').click(function () {
    $('.web-menu button:eq(0)').click();
    if ($(this).hasClass('is_period')) {
        $(this).removeClass('is_period');
        $('.period').css('display', 'none');
        $('.category').css('display', 'inline-block');
    } else {
        $(this).addClass('is_period');
        $('.period').css('display', 'inline-block');
        $('.category').css('display', 'none');
    }
    // 控制页脚位置
    setTimeout(() => {
        $('.copyrights').css('position', 'relative');
        $('.web-menu button').eq(0).addClass('active').siblings().removeClass('active');
    }, 10);
})

// 分类实现
$('.category').click(function () {
    let category_name = $(this).text();
    $(this).addClass('active').siblings().removeClass('active');
    $('.web-list .web-grid').each(function () {
        if ($(this).find('.web-single p').text().toUpperCase().search(category_name) != -1) {
            $(this).addClass('filter_web');
        }
    });
    $('.web-list').isotope({
        itemSelector: '.web-grid',
        filter: '.filter_web',
    });
    setTimeout(() => {
        set_footer();
        $('.web-list .web-grid').removeClass('filter_web');
    }, 10);
})

// 控制页脚位置
let set_footer = () => {
    if ($('.web-list .web-grid.filter_web').length <= 9) {
        $('.copyrights').css('position', 'absolute');
    } else {
        $('.copyrights').css('position', 'relative');
    }
}