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

// json
let web_list = [{ "kind": "web_8", "title": "\u634f\u8138", "href": "https://picrew.me/", "slogan": "\u7528\u81ea\u5df1\u7684\u8bbe\u8ba1\uff0c\u5236\u4f5c\u4f60\u7684\u4e13\u5c5e\u5934\u50cf", "kind_name": "\u5a31\u4e50&\u56fe\u7247", "star": null }, { "kind": "web_8", "title": "\u8ffd\u8e2a\u70ed\u70b9\u540e\u7eed", "href": "https://houxu.app/", "slogan": "\u6709\u8bb0\u5fc6\u7684\u65b0\u95fb\uff0c\u6301\u7eed\u8ffd\u8e2a\u793e\u4f1a\u70ed\u70b9", "kind_name": "\u5b9e\u7528", "star": "star" }, { "kind": "web_8", "title": "\u4eba\u751f\u91cd\u5f00\u6a21\u62df\u5668", "href": "http://liferestart.syaro.io/view/index.html", "slogan": "\u8fd9\u5783\u573e\u7684\u4eba\u751f\u4e00\u70b9\u4e5f\u4e0d\u60f3\u5446\u4e86", "kind_name": "\u6e38\u620f", "star": null }, { "kind": "web_8", "title": "\u751f\u6210\u80cc\u666f\u56fe", "href": "https://cn.pattern.monster/", "slogan": "\u4e00\u4e2a\u7b80\u5355\u7684\u91cd\u590d\u6027SVG\u56fe\u6848\u5728\u7ebf\u751f\u6210\u5668", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_8", "title": "\u795e\u5668\u805a\u5408\u7ad9", "href": "https://uiiiuiii.com/tools", "slogan": "\u805a\u5408\u4e86\u5404\u79cd\u5404\u6837\u7684\u5728\u7ebf\u795e\u5668", "kind_name": "\u5b9e\u7528", "star": null }, { "kind": "web_8", "title": "5000\u5146\u5186\u751f\u6210\u5668", "href": "http://yurafuca.com/5000choyen/", "slogan": "\u751f\u6210\u4e00\u79cd\u7279\u6548\u5b57\u4f53", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_8", "title": "\u5728\u7ebfWinamp", "href": "https://webamp.org/", "slogan": "\u590d\u53e4\u97f3\u4e50\u64ad\u653e\u5668", "kind_name": "\u97f3\u4e50", "star": null }, { "kind": "web_8", "title": "\u6cb9\u753b\u8f6c\u6362\u5668", "href": "https://fotosketcher.com/", "slogan": "\u7528\u4f60\u7684\u6570\u7801\u7167\u7247\u521b\u9020\u7f8e\u4e3d\u7684\u827a\u672f\u4f5c\u54c1", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_8", "title": "\u4ee4\u5492icon", "href": "https://shindanmaker.com/1064580", "slogan": "\u8f93\u5165\u4f60\u7684\u540d\u5b57\uff0c\u5e2e\u4f60\u751f\u6210\u4e00\u4e2a\u4ee4\u5492\u753b\u98ce\u7684\u56fe\u6807", "kind_name": "\u5a31\u4e50&\u56fe\u7247", "star": null }, { "kind": "web_8", "title": "\u5386\u5e74\u7535\u5f71\u6d77\u62a5", "href": "http://www.impawards.com/", "slogan": "\u6240\u6709\u6700\u65b0\u7684\u7535\u5f71\u6d77\u62a5", "kind_name": "\u89c6\u9891", "star": null }, { "kind": "web_8", "title": "\u9009\u7535\u5f71", "href": "https://datenightmovies.com/", "slogan": "\u9009\u62e9\u4e24\u90e8\u7535\u5f71\uff0c\u6211\u4eec\u5c06\u628a\u5b83\u4eec\u7ed3\u5408\u8d77\u6765\uff0c\u5c55\u793a\u4f60\u4f1a\u559c\u6b22\u7684\u63a8\u8350", "kind_name": "\u5de5\u5177&\u89c6\u9891", "star": null }, { "kind": "web_8", "title": "\u9009\u7535\u5f71", "href": "https://autum.com/", "slogan": "\u6211\u4eec\u5c06\u5206\u6790\u60a8\u770b\u8fc7\u7684\u6240\u6709\u7535\u5f71\u548c\u7535\u89c6\u8282\u76ee\uff0c\u5e76\u751f\u6210\u60a8\u7684\u7edf\u8ba1\u6570\u636e", "kind_name": "\u5de5\u5177&\u89c6\u9891", "star": null }, { "kind": "web_8", "title": "\u4eba\u5de5\u667a\u969c\u5199\u4f5c", "href": "http://if.caiyunai.com/dream/#/", "slogan": "\u5f69\u4e91\u5c0f\u68a6\u5c1d\u9c9c\u7248 - AI\u7eed\u5199", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_8", "title": "\u4e66\u6cd5\u751f\u6210\u5668", "href": "http://www.ziticq.com/shufa/", "slogan": "\u5728\u7ebf\u4e66\u6cd5\u5b57\u4f53\u751f\u6210\uff0cAI\u77e2\u91cf\u4e66\u6cd5\u5b57\u4f53", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_8", "title": "\u5065\u8eab\u767e\u79d1", "href": "https://musclewiki.com/", "slogan": "\u808c\u8089\u7ef4\u57fa\u767e\u79d1\uff0c\u7b80\u5316\u4f60\u7684\u953b\u70bc", "kind_name": "\u751f\u6d3b&\u5b66\u4e60", "star": null }, { "kind": "web_8", "title": "\u4e16\u754c\u8bed\u8a00\u5b66\u4e60 <span class='iconfont'>&#xe64b;</span>", "href": "https://www.zerotohero.ca/", "slogan": "\u8fd9\u662f\u8bed\u8a00\u7231\u597d\u8005\u7684\u5929\u5802\uff0c\u63d0\u4f9b\u6570\u4e07\u4e2a\u89c6\u9891\uff0c\u5305\u62ec\u6570\u767e\u79cd\u8bed\u8a00\u7684\u5b57\u5e55\u548c\u5b57\u5178\u5de5\u5177", "kind_name": "\u5b9e\u7528&\u5b66\u4e60", "star": "star" }, { "kind": "web_8", "title": "\u5168\u7403\u98df\u7269\u5730\u56fe", "href": "https://www.tasteatlas.com/search", "slogan": "\u53d1\u73b014716\u79cd\u5f53\u5730\u83dc\u80b4\u548c\u98df\u6750", "kind_name": "\u751f\u6d3b", "star": null }, { "kind": "web_8", "title": "\u5730\u56fe\u751f\u6210\u5668", "href": "https://azgaar.github.io/Fantasy-Map-Generator/", "slogan": "Azgaar\u7684\u5e7b\u60f3\u5730\u56fe\u751f\u6210\u5668", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_8", "title": "\u968f\u673a\u751f\u6210\u5668", "href": "https://sharkle.com/", "slogan": "\u968f\u673a\u751f\u6210\u4e00\u4e2a3D\u89c6\u6548\u7f51\u9875", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_8", "title": "\u4e70\u661f\u661f", "href": "https://osr.org/", "slogan": "\u547d\u540d\u4e00\u4e2a\u661f\u661f\uff0c\u4e3a\u5e0c\u671b\u548c\u6b22\u4e50\u9001\u4e0a\u5149\u8292", "kind_name": "\u827a\u672f&\u5a31\u4e50", "star": null }, { "kind": "web_8", "title": "\u566a\u97f3\u751f\u6210\u5668", "href": "https://29a.ch/noise-generator/", "slogan": "\u566a\u58f0\u53d1\u751f\u5668\uff0c\u5728\u7ebf\u767d\u566a\u58f0", "kind_name": "\u97f3\u4e50", "star": null }, { "kind": "web_8", "title": "\u97f3\u8f68\u5206\u79bb(\u4e2d\u6587)", "href": "https://dango.ai/", "slogan": "\u501f\u52a9\u6211\u4eec\u97f3\u8d28\u81f3\u4e0a\u7684AI\u6280\u672f\uff0c\u60a8\u53ef\u4ee5\u4ece\u4efb\u4f55\u97f3\u9891\u4e2d\u5206\u79bb\u51fa\u4f34\u594f\uff0c\u4eba\u58f0\uff0c\u548c\u58f0\uff0c\u9f13\u70b9\uff0c\u8d1d\u65af\u7b49\u8f68\u9053", "kind_name": "\u5de5\u5177&\u97f3\u4e50", "star": null }, { "kind": "web_8", "title": "NCM\u8f6c\u6362", "href": "https://ncm.worthsee.com/site/index", "slogan": "\u7f51\u6613\u4e91NCM\u683c\u5f0f\u5728\u7ebf\u8f6c\u6362\u4e3aMP3\u683c\u5f0f", "kind_name": "\u5de5\u5177&\u97f3\u4e50", "star": null }, { "kind": "web_8", "title": "\u4e2d\u5c0f\u5b66\u7f51\u8bfe", "href": "https://ykt.eduyun.cn/ykt/sjykt/index.html?from=timeline&isappinstalled=0", "slogan": "\u56fd\u5bb6\u4e2d\u5c0f\u5b66\u7f51\u7edc\u4e91\u5e73\u53f0", "kind_name": "\u5b66\u4e60", "star": null }, { "kind": "web_8", "title": "\u9f20\u6807\u6d4b\u8bd5", "href": "https://cps-check.com/cn/polling-rate-check", "slogan": "\u9f20\u6807\u8f6e\u8be2\u7387\u68c0\u67e5\u5668", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_8", "title": "\u7d22\u5c3c\u306e\u4e00\u5929\u98ce\u666f", "href": "https://www.sony.net/united/clock/", "slogan": "\u7d22\u5c3c\u5168\u7403 - \u03b1\u65f6\u949f\uff1a\u4e16\u754c\u65f6\u95f4\uff0c\u7531\u03b1\u6355\u83b7", "kind_name": "\u827a\u672f&\u56fe\u7247", "star": null }, { "kind": "web_8", "title": "\u56fd\u9645\u7a7a\u95f4\u7ad9\u5bf9\u63a5", "href": "https://iss-sim.spacex.com/", "slogan": "SpaceX - \u56fd\u9645\u7a7a\u95f4\u7ad9\u5bf9\u63a5\u6a21\u62df\u5668", "kind_name": "\u6e38\u620f", "star": null }, { "kind": "web_8", "title": "\u62a0\u56fe(\u4e2d\u6587)", "href": "http://www.picup.shop/currencyBatch.html", "slogan": "\u76ae\u5361\u667a\u80fd\u4e00\u952e\u62a0\u56fe", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_8", "title": "\u4e07\u80fd\u6cd5\u5f8b\u54a8\u8be2", "href": "https://ai.12348.gov.cn/pc/", "slogan": "\u6839\u636e\u95ee\u5377\u63d0\u793a\u586b\u5199\u76f8\u5173\u4fe1\u606f\uff0c\u5728\u7ebf\u4e3a\u60a8\u514d\u8d39\u51fa\u5177\u6cd5\u5f8b\u610f\u89c1\u4e66\uff0c\u4f9b\u60a8\u53c2\u8003", "kind_name": "\u5b9e\u7528&\u5b66\u4e60", "star": "star" }, { "kind": "web_7", "title": "\u884c\u4e1a\u62a5\u544a", "href": "http://report.seedsufe.com/#/report", "slogan": "\u8f7b\u91cf\u7ea7\u884c\u7814\u6570\u636e\u5de5\u5177", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_7", "title": "\u4e16\u754c\u4e4b\u58f0 <span class='iconfont'>&#xe64b;</span>", "href": "https://aporee.org/maps/", "slogan": "\u5168\u7403\u58f0\u97f3\u5730\u56fe\uff0c\u81f4\u529b\u4e8e\u73b0\u573a\u5f55\u97f3\u3001\u58f0\u5b66\u548c\u6536\u542c\u827a\u672f", "kind_name": "\u827a\u672f&\u97f3\u4e50", "star": null }, { "kind": "web_7", "title": "\u5546\u7528\u56fe\u7247", "href": "https://www.pexels.com/zh-cn/", "slogan": "\u624d\u534e\u6a2a\u6ea2\u7684\u6444\u5f71\u4f5c\u8005\u5728\u8fd9\u91cc\u514d\u8d39\u5206\u4eab\u6700\u7cbe\u5f69\u7684\u7d20\u6750\u56fe\u7247\u548c\u89c6\u9891", "kind_name": "\u5b9e\u7528&\u56fe\u7247", "star": "star" }, { "kind": "web_7", "title": "\u62a0\u56fe", "href": "https://www.remove.bg/", "slogan": "\u4ece\u56fe\u50cf\u4e2d\u6d88\u9664\u80cc\u666f", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_7", "title": "\u62a0\u89c6\u9891", "href": "https://www.unscreen.com/", "slogan": "\u9010\u5e27\u6d88\u9664\u89c6\u9891\u80cc\u666f", "kind_name": "\u5de5\u5177&\u89c6\u9891", "star": null }, { "kind": "web_7", "title": "\u6253\u5b57\u6bd4\u8d5b", "href": "https://play.typeracer.com/", "slogan": "\u5c61\u83b7\u6b8a\u8363\u7684\u5728\u7ebf\u6253\u5b57\u6bd4\u8d5b\uff0c\u8fd9\u662f\u7f51\u7edc\u4e0a\u7684\u7b2c\u4e00\u4e2a\u591a\u4eba\u6253\u5b57\u6e38\u620f", "kind_name": "\u6e38\u620f", "star": null }, { "kind": "web_7", "title": "\u7a7a\u6295", "href": "https://airportal.cn/", "slogan": "\u53ea\u8981\u60a8\u7684\u8bbe\u5907\u8054\u7f51\uff0c\u60a8\u5c31\u53ef\u4ee5\u901a\u8fc7\u5b83\u5728\u4efb\u610f\u7cfb\u7edf\u3001\u4efb\u610f\u8bbe\u5907\u95f4\u4f20\u8f93\u6587\u4ef6", "kind_name": "\u5b9e\u7528&\u5de5\u5177", "star": "star" }, { "kind": "web_7", "title": "\u5b9d\u8d1dDJ", "href": "http://www.bbdj.com/", "slogan": "\u65e0\u635f\u9ad8\u54c1\u8d28DJ\u821e\u66f2\u5206\u4eab", "kind_name": "\u5a31\u4e50&\u97f3\u4e50", "star": null }, { "kind": "web_7", "title": "\u8272\u5f69", "href": "https://color.adobe.com/zh/create/color-wheel", "slogan": "Adobe Color - \u4e00\u4e2a\u8c03\u8272\u677f\u751f\u6210\u5668", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_7", "title": "3D\u6a21\u578b", "href": "https://sketchfab.com/", "slogan": "Sketchfab - \u7f51\u7edc\u4e0a\u6700\u597d\u76843D\u67e5\u770b\u5668", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_7", "title": "3D\u6a21\u578b", "href": "https://www.thingiverse.com/", "slogan": "Thingiverse - \u7acb\u4f53\u5b9e\u7269\u7684\u6570\u5b57\u8bbe\u8ba1", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_7", "title": "\u6838\u7206", "href": "https://nuclearsecrecy.com/nukemap/", "slogan": "\u6a21\u62df\u6838\u6b66\u5668\u7206\u70b8\uff0c\u613f\u4e16\u754c\u548c\u5e73", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_7", "title": "\u7ea6\u7a3f", "href": "https://www.mihuashi.com/artists", "slogan": "\u7c73\u753b\u5e08\u7f8e\u672f\u5916\u5305\u4ea4\u6613\u5e73\u53f0\uff0c\u5e26\u7ed9\u4f60\u81ea\u7531\u3001\u9ad8\u6548\u3001\u4e13\u4e1a\u7684\u7f8e\u672f\u5de5\u4f5c\u4f53\u9a8c", "kind_name": "\u5b9e\u7528&\u56fe\u7247", "star": null }, { "kind": "web_7", "title": "\u865a\u62df\u535a\u7269\u9986", "href": "https://virtual.mauritshuis.nl/index.html?lang=en&startscene=21", "slogan": "\u7ebf\u4e0a\u8d85\u9ad8\u6e05\u865a\u62df\u6e38\u9986", "kind_name": "\u827a\u672f&\u56fe\u7247", "star": null }, { "kind": "web_7", "title": "\u5c3a\u5bf8", "href": "https://www.dimensions.com/", "slogan": "\u5c3a\u5bf8\u53c2\u8003\u7f51\u7ad9\uff0c\u8bb0\u5f55\u4e86\u6784\u6210\u65e5\u5e38\u7269\u4f53\u7684\u6807\u51c6\u5c3a\u5bf8", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_7", "title": "\u8fea\u58eb\u5c3c\u5316", "href": "https://toonme.com/", "slogan": "\u751f\u6210\u8fea\u58eb\u5c3c\u753b\u98ce\u7684\u5934\u50cf", "kind_name": "\u5a31\u4e50&\u56fe\u7247", "star": null }, { "kind": "web_7", "title": "\u52a8\u6001\u56fe\u8868", "href": "https://hanabi.data-viz.cn/index?lang=zh-CN", "slogan": "\u82b1\u706b\u6570\u56fe - \u597d\u770b\u7684\u56fe\u6807\u5f62\u6001\u5404\u5f02\uff0c\u5236\u4f5c\u7684\u5de5\u5177\u7b80\u5355\u5982\u4e00", "kind_name": "\u5b9e\u7528&\u5de5\u5177", "star": "star" }, { "kind": "web_7", "title": "\u4e2d\u56fd\u8425\u517b", "href": "https://www.fatsecret.cn/%E7%83%AD%E9%87%8F%E8%90%A5%E5%85%BB/", "slogan": "\u4e2d\u56fd\u7684\u5404\u79cd\u98df\u7269\u548c\u54c1\u724c", "kind_name": "\u5de5\u5177&\u751f\u6d3b", "star": null }, { "kind": "web_7", "title": "\u53d1\u73b0", "href": "https://www.producthunt.com/", "slogan": "\u53d1\u73b0\u6280\u672f\u9886\u57df\u6700\u597d\u7684\u65b0\u4ea7\u54c1", "kind_name": "\u5b9e\u7528&\u5de5\u5177", "star": null }, { "kind": "web_7", "title": "\u627e\u97f3\u4e50", "href": "https://www.tunefind.com/", "slogan": "\u5bfb\u627e\u7535\u89c6\u548c\u7535\u5f71\u4e2d\u7684\u97f3\u4e50", "kind_name": "\u5de5\u5177&\u97f3\u4e50", "star": null }, { "kind": "web_7", "title": "996\u8eab\u4e34\u5176\u5883", "href": "https://imisstheoffice.eu/", "slogan": "\u95ed\u4e0a\u773c\u775b\u60f3\u8c61\u4f60\u8fd8\u5728\u529e\u516c\u5ba4\uff0c\u5f88\u7f8e\u5999\uff0c\u4e0d\u662f\u5417", "kind_name": "\u5a31\u4e50&\u5de5\u5177", "star": null }, { "kind": "web_7", "title": "\u8fd9\u4e2a\u4e0d\u5b58\u5728", "href": "https://thisxdoesnotexist.com/", "slogan": "\u4f7f\u7528\u751f\u6210\u5bf9\u6297\u7f51\u7edc\uff0c\u6211\u4eec\u53ef\u4ee5\u5b66\u4e60\u5982\u4f55\u521b\u5efa\u51e0\u4e4e\u4efb\u4f55\u4e1c\u897f\u7684\u903c\u771f\u7684\u5047\u7248\u672c", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_7", "title": "\u68ee\u6797\u4e4b\u58f0", "href": "https://www.tree.fm/", "slogan": "\u6536\u542c\u6765\u81ea\u4e16\u754c\u5404\u5730\u68ee\u6797\u7684\u58f0\u97f3", "kind_name": "\u5a31\u4e50&\u97f3\u4e50", "star": null }, { "kind": "web_7", "title": "\u897f\u65b9\u7535\u97f3", "href": "https://www.traxsource.com/dj-top-10s", "slogan": "\u4e0d\u662f\u6bcf\u4e2a\u4eba\u90fd\u61c2House Music...\u4f46\u6211\u4eec\u61c2", "kind_name": "\u97f3\u4e50", "star": null }, { "kind": "web_7", "title": "\u731c\u771f\u5047", "href": "https://landing.adobe.com/en/na/products/creative-cloud/69308-real-or-photoshop/index.html", "slogan": "\u6709\u4e9b\u56fe\u7247\u662f\u5982\u6b64\u60ca\u4eba\uff0c\u6211\u4eec\u4e0d\u786e\u5b9a\u5b83\u4eec\u662f\u771f\u5b9e\u7684\u8fd8\u662fPS\u7684\uff0c\u4f60\u80fd\u5206\u8fa8\u5417", "kind_name": "\u6e38\u620f", "star": null }, { "kind": "web_7", "title": "\u9b54\u6027 <span class='iconfont'>&#xe64b;</span>", "href": "https://patatap.com/", "slogan": "\u4e00\u4e2a\u975e\u5e38\u9b54\u6027\u7684\u7f51\u7ad9", "kind_name": "\u5a31\u4e50&\u97f3\u4e50", "star": null }, { "kind": "web_7", "title": "\u4e2d\u534e\u73cd\u5b9d\u9986", "href": "https://www.ltfc.net/exhibit/recent", "slogan": "\u4e2d\u534e\u4e66\u6cd5\u3001\u7ed8\u753b\u6b23\u8d4f\uff0c\u9ad8\u6e05\u4e0b\u8f7d", "kind_name": "\u827a\u672f&\u56fe\u7247", "star": null }, { "kind": "web_7", "title": "\u82f1\u8bed\u6e38\u620f", "href": "https://www.merriam-webster.com/", "slogan": "\u5355\u8bcd\u6e38\u620f\u548c\u6d4b\u9a8c", "kind_name": "\u5b66\u4e60&\u6e38\u620f", "star": null }, { "kind": "web_7", "title": "\u9632\u75ab\u653f\u7b56", "href": "https://i.snssdk.com/feoffline/ugc_activities/html/epidemic-prevention-sftr/index.html?style_id=30044", "slogan": "\u51fa\u884c\u9632\u75ab\u653f\u7b56\u67e5\u8be2", "kind_name": "\u5de5\u5177&\u751f\u6d3b", "star": null }, { "kind": "web_6", "title": "AI\u97f3\u4e50\u63a8\u8350", "href": "https://www.gnoosic.com/faves.php", "slogan": "\u6839\u636e\u60a8\u559c\u6b22\u7684\u97f3\u4e50\u4eba\uff0c\u667a\u80fd\u63a8\u8350\u65b0\u97f3\u4e50", "kind_name": "\u5de5\u5177&\u97f3\u4e50", "star": "star" }, { "kind": "web_6", "title": "RAP <span class='iconfont'>&#xe64b;</span>", "href": "https://foreignrap.com", "slogan": "Foreignrap - \u7167\u4eae\u56fd\u9645\u57ce\u5e02\u97f3\u4e50", "kind_name": "\u827a\u672f&\u97f3\u4e50", "star": null }, { "kind": "web_6", "title": "\u58c1\u7eb8", "href": "https://wallhaven.cc/", "slogan": "wallhaven - \u4e92\u8054\u7f51\u6700\u597d\u7684\u58c1\u7eb8\u7f51\u7ad9", "kind_name": "\u5b9e\u7528&\u56fe\u7247", "star": "star" }, { "kind": "web_6", "title": "\u79c1\u4eba\u5b9a\u5236", "href": "https://www.fiverr.com/", "slogan": "\u4f01\u4e1a\u81ea\u7531\u804c\u4e1a\u8005\u670d\u52a1\u5e02\u573a", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_6", "title": "\u4e91\u65c5\u6e38", "href": "http://www.airpano.com/", "slogan": "\u73af\u6e38\u4e16\u754c\u7684\u865a\u62df\u4e4b\u65c5", "kind_name": "\u751f\u6d3b&\u56fe\u7247", "star": "star" }, { "kind": "web_6", "title": "\u4e91\u4f4f\u9152\u5e97\u4e91\u5403\u996d", "href": "https://bbs.saraba1st.com/2b/space-uid-197835.html", "slogan": "\u9152\u5e97\u8bc4\u6d4b\uff0c\u4e91\u4f53\u9a8c\u9910\u5385\u9152\u5e97", "kind_name": "\u751f\u6d3b", "star": null }, { "kind": "web_6", "title": "\u5f00\u7a97\u6237", "href": "https://window-swap.com/", "slogan": "\u5728\u4e16\u754c\u7684\u67d0\u4e2a\u5730\u65b9\u6253\u5f00\u4e00\u6247\u65b0\u7a97\u53e3", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_6", "title": "\u4f34\u594f\u63d0\u53d6", "href": "https://www.lalal.ai/", "slogan": "\u4ece\u4efb\u4f55\u97f3\u9891\u4e2d\u63d0\u53d6\u4eba\u58f0\u3001\u4f34\u594f\u548c\u5404\u79cd\u4e50\u5668", "kind_name": "\u5de5\u5177&\u97f3\u4e50", "star": null }, { "kind": "web_6", "title": "\u683c\u5f0f\u8f6c\u6362", "href": "https://www.alltoall.net/", "slogan": "\u514d\u8d39\u7684\u5728\u7ebf\u683c\u5f0f\u8f6c\u6362\u5de5\u5177", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_6", "title": "\u683c\u5f0f\u8f6c\u6362", "href": "https://www.aconvert.com/cn/", "slogan": "\u5728\u7ebf\u8f6c\u6362\u6587\u6863\u3001\u89c6\u9891\u548c\u97f3\u9891", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_6", "title": "\u9ad8\u7aef\u7ffb\u8bd1", "href": "https://www.deepl.com/translator", "slogan": "DeepL\u7ffb\u8bd1 - \u5168\u4e16\u754c\u6700\u51c6\u786e\u7684\u7ffb\u8bd1", "kind_name": "\u5b9e\u7528&\u5de5\u5177", "star": "star" }, { "kind": "web_6", "title": "\u597d\u597d\u8bf4\u8bdd", "href": "https://lab.magiconch.com/nbnhhsh/", "slogan": "\u62fc\u97f3\u9996\u5b57\u6bcd\u7f29\u5199\u91ca\u4e49\u5de5\u5177", "kind_name": "\u5a31\u4e50&\u5de5\u5177", "star": null }, { "kind": "web_6", "title": "\u90a3\u4f60\u80fd\u5e2e\u5e2e\u6211\u5417", "href": "https://zh.wikihow.com/%E9%A6%96%E9%A1%B5", "slogan": "\u4e92\u8054\u7f51\u4e0a\u6700\u503c\u5f97\u4fe1\u8d56\u7684\u6307\u5357\u7f51\u7ad9", "kind_name": "\u5de5\u5177&\u751f\u6d3b", "star": null }, { "kind": "web_6", "title": "\u5929\u6c14", "href": "https://www.windy.com/", "slogan": "\u5f3a\u5927\u7684\u5929\u6c14\u9884\u62a5\u7f51\u7ad9\uff0c\u5173\u4e8e\u5929\u6c14\u7684\u90fd\u5728\u8fd9\u91cc", "kind_name": "\u5de5\u5177&\u751f\u6d3b", "star": null }, { "kind": "web_6", "title": "\u5012\u8ba1\u65f6\u81ea\u6bc1\u7f51\u7ad9", "href": "https://www.thiswebsitewillselfdestruct.com/", "slogan": "\u5982\u679c\u621124\u5c0f\u65f6\u6ca1\u6709\u6536\u5230\u6d88\u606f\uff0c\u6211\u5c06\u6c38\u4e45\u81ea\u6bc1", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_6", "title": "\u8d77\u540d", "href": "https://www.behindthename.com/", "slogan": "\u82f1\u6587\u540d\u5b57\u80cc\u540e\u7684\u8bcd\u6e90\u548c\u5386\u53f2", "kind_name": "\u5de5\u5177&\u5b66\u4e60", "star": null }, { "kind": "web_6", "title": "\u7248\u6743\u97f3\u4e50\u66f2\u5e93", "href": "https://www.epidemicsound.com/", "slogan": "\u514d\u7248\u7a0e\u7684\u97f3\u4e50\u548c\u97f3\u6548", "kind_name": "\u5de5\u5177&\u97f3\u4e50", "star": null }, { "kind": "web_6", "title": "\u72ec\u7acb\u6e38\u620f", "href": "https://www.indiexpo.net/", "slogan": "\u72ec\u7acb\u6e38\u620f\u96c6\u5408\u7ad9", "kind_name": "\u6e38\u620f", "star": null }, { "kind": "web_6", "title": "\u5b66\u94a2\u7434", "href": "https://app.flowkey.com.cn/", "slogan": "\u901a\u8fc7\u60a8\u559c\u7231\u7684\u4e50\u66f2\u5b66\u4e60\u94a2\u7434", "kind_name": "\u5b66\u4e60&\u97f3\u4e50", "star": null }, { "kind": "web_6", "title": "\u7126\u6bb5\u79d1\u666e", "href": "https://www.samyanglens.com/en/product/simulator/lens.php", "slogan": "\u76f8\u673a\u7126\u6bb5\u79d1\u666e", "kind_name": "\u5b66\u4e60", "star": null }, { "kind": "web_6", "title": "\u5168\u7403\u751f\u6d3b\u6c34\u5e73", "href": "https://www.gapminder.org/dollar-street/", "slogan": "\u770b\u56fe\u4e86\u89e3\u4e16\u754c\u5404\u5730\u4eba\u6c11\u7684\u751f\u6d3b\u6c34\u5e73", "kind_name": "\u751f\u6d3b", "star": null }, { "kind": "web_6", "title": "\u6d77", "href": "https://seaside-station.com/region/hokkaido/", "slogan": "\u65e5\u672c\u80fd\u770b\u5230\u6d77\u7684\u8f66\u7ad9", "kind_name": "\u751f\u6d3b&\u56fe\u7247", "star": null }, { "kind": "web_6", "title": "\u6807\u51c6\u5730\u56fe", "href": "http://bzdt.ch.mnr.gov.cn/index.html", "slogan": "\u4f9d\u636e\u4e2d\u56fd\u548c\u4e16\u754c\u5404\u56fd\u56fd\u754c\u7ebf\u753b\u6cd5\u6807\u51c6\u7f16\u5236\u800c\u6210\uff0c\u53ef\u4ee5\u514d\u8d39\u6d4f\u89c8\u3001\u4e0b\u8f7d\u6807\u51c6\u5730\u56fe", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_6", "title": "\u8272\u5dee", "href": "http://www.cuishuai.cc/game/", "slogan": "\u6d4b\u6d4b\u4f60\u7684\u773c\u775b\u5bf9\u8272\u5dee\u7684\u8fa8\u8bc6\u5ea6", "kind_name": "\u5de5\u5177&\u6e38\u620f", "star": null }, { "kind": "web_5", "title": "\u5927\u50cf\u7d20", "href": "http://www.bigpixel.cn/index.html", "slogan": "\u653e\u5927\u4e07\u500d\u4f53\u9a8c\u4e2d\u56fd\u57ce\u5e02\uff0c\u5c55\u73b0\u57ce\u5e02\u7279\u8272\uff0c\u8bb2\u597d\u4e2d\u534e\u6587\u5316", "kind_name": "\u5a31\u4e50&\u56fe\u7247", "star": null }, { "kind": "web_5", "title": "PPT", "href": "https://slidesgo.com/theme/isometric-proposal", "slogan": "\u514d\u8d39\u8c37\u6b4c\u5e7b\u706f\u7247\u4e3b\u9898\u548cPowerPoint\u6a21\u677f", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_5", "title": "\u4e91", "href": "https://www.ianfisherart.com/", "slogan": "Ian Fisher - \u4e00\u4f4d\u4e13\u4e1a\u753b\u4e91\u5341\u51e0\u5e74\u7684\u827a\u672f\u5bb6", "kind_name": "\u827a\u672f&\u56fe\u7247", "star": null }, { "kind": "web_5", "title": "\u5c55\u4f1a", "href": "http://www.eshow365.com/", "slogan": "\u4e2d\u56fd\u5c55\u4f1a\u95e8\u6237\uff0c\u627e\u5c55\u4f1a\uff0c\u8ba2\u5c55\u4f4d", "kind_name": "\u5de5\u5177&\u751f\u6d3b", "star": null }, { "kind": "web_5", "title": "\u5168\u5386\u53f2", "href": "https://www.allhistory.com/", "slogan": "\u6c89\u6d78\u5728\u7eb5\u6a2a\u5f00\u9614\u3001\u5de6\u56fe\u53f3\u53f2\u7684\u77e5\u8bc6\u6d77\u6d0b\u4e2d", "kind_name": "\u5b66\u4e60", "star": null }, { "kind": "web_5", "title": "\u8be1\u79d8\u4e4b\u4e3b", "href": "https://www.zcool.com.cn/work/ZNDI0NzUzNzY=.html", "slogan": "22\u4e2a\u5168\u9014\u5f84\u9b54\u836f\u5fbd\u7ae0UI\u8bbe\u8ba1", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_5", "title": "\u505a\u97f3\u4e50", "href": "https://learningmusic.ableton.com/zh-Hans/", "slogan": "\u5b66\u4e60\u5230\u97f3\u4e50\u521b\u4f5c\u7684\u57fa\u7840\u77e5\u8bc6\uff0c\u65e0\u9700\u4efb\u4f55\u7ecf\u9a8c\u6216\u8bbe\u5907\uff0c\u5728\u6d4f\u89c8\u5668\u4e2d\u5b8c\u6210\u6240\u6709\u5de5\u4f5c", "kind_name": "\u5b66\u4e60&\u97f3\u4e50", "star": null }, { "kind": "web_5", "title": "\u65b0\u5a92\u4f53\u5bfc\u822a", "href": "https://www.kaolamedia.com/", "slogan": "\u65b0\u5a92\u4f53\u4eba\u6bcf\u5929\u6253\u5f00\u7684\u7b2c\u4e00\u4e2a\u7f51\u7ad9", "kind_name": "\u5de5\u5177&\u89c6\u9891", "star": null }, { "kind": "web_5", "title": "AI\u634f\u4eba", "href": "https://artbreeder.com/", "slogan": "\u53ea\u9700\u4e0d\u65ad\u9009\u62e9\u6700\u6709\u8da3\u7684\u56fe\u50cf\uff0c\u5373\u53ef\u53d1\u73b0\u5168\u65b0\u7684\u56fe\u50cf", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": "star" }, { "kind": "web_5", "title": "\u6570\u636e", "href": "https://ncov.dxy.cn/ncovh5/view/pneumonia", "slogan": "\u4e01\u9999\u533b\u751f - \u5168\u7403\u65b0\u51a0\u80ba\u708e\u75ab\u60c5\u5730\u56fe", "kind_name": "\u751f\u6d3b", "star": null }, { "kind": "web_5", "title": "\u4eba\u7c7b\u6d4b\u8bd5", "href": "https://humanbenchmark.com/", "slogan": "\u901a\u8fc7\u8111\u529b\u6e38\u620f\u548c\u8ba4\u77e5\u6d4b\u8bd5\u6765\u8861\u91cf\u4f60\u7684\u80fd\u529b", "kind_name": "\u5de5\u5177&\u6e38\u620f", "star": null }, { "kind": "web_5", "title": "\u7269\u6d41", "href": "https://logisticsartproject.com/", "slogan": "\u4ece\u65af\u5fb7\u54e5\u5c14\u6469\u5230\u6df1\u5733\u5b9d\u5b89\uff0c37\u5929\uff0c\u4e00\u4e2a\u96c6\u88c5\u7bb1\u548c\u62cd\u6444\u5b83\u7684\u4eba\u7684\u6545\u4e8b", "kind_name": "\u827a\u672f&\u89c6\u9891", "star": null }, { "kind": "web_5", "title": "\u6155\u8bfe", "href": "https://www.icourse163.org/", "slogan": "\u56fd\u5bb6\u7cbe\u54c1\u8bfe\u7a0b\u5728\u7ebf\u5b66\u4e60\u5e73\u53f0", "kind_name": "\u5b66\u4e60", "star": null }, { "kind": "web_5", "title": "\u53cd\u4eba\u7c7bUI", "href": "https://userinyerface.com/game.html", "slogan": "\u6700\u5dee\u7684\u7528\u6237\u754c\u9762\u5b9e\u9a8c", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_5", "title": "yes/no", "href": "https://yesno.wtf/", "slogan": "\u505a\u51fa\u4e00\u4e2a\u597d\u7684\u51b3\u5b9a\u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u5e2e\u52a9", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_5", "title": "\u8001\u7167\u7247\u4e0a\u8272", "href": "https://colourise.sg/", "slogan": "\u7ed9\u4f60\u7684\u9ed1\u767d\u7167\u7247\u4e0a\u8272", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_5", "title": "\u5730\u7403\u65f6\u95f4", "href": "http://timelineofearth.com/", "slogan": "\u5730\u7403\u5386\u53f2\u7684\u4e92\u52a8\u5e74\u8868", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_5", "title": "\u732b", "href": "https://bongo.cat/", "slogan": "\u50cf\u90a6\u6208\u732b\u4e00\u6837\u51fb\u6253\u90a6\u6208\u9f13", "kind_name": "\u5a31\u4e50&\u97f3\u4e50", "star": null }, { "kind": "web_5", "title": "\u5927\u4f6c", "href": "https://neave.com/", "slogan": "\u6765\u81eaNeave Interactive\u7684\u5e94\u7528\u7a0b\u5e8f", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_5", "title": "\u592a\u9f13\u8fbe\u4eba", "href": "https://tg.lv5.ac", "slogan": "\u9002\u7528\u4e8e\u684c\u9762\u548c\u79fb\u52a8\u6d4f\u89c8\u5668\u7684\u592a\u9f13\u8fbe\u4eba\u8282\u594f\u6e38\u620f\u6a21\u62df\u5668", "kind_name": "\u6e38\u620f&\u97f3\u4e50", "star": "star" }, { "kind": "web_5", "title": "emm", "href": "http://www.shushubuyue.net/#", "slogan": "\u533f\u540d\u804a\u5929\u7f51", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_5", "title": "\u5168\u7f51\u70ed\u95e8", "href": "https://tophub.today/", "slogan": "\u8ffd\u8e2a\u5168\u7f51\u70ed\u70b9\u3001\u7b80\u5355\u9ad8\u6548\u9605\u8bfb", "kind_name": "\u5b9e\u7528&\u5de5\u5177", "star": null }, { "kind": "web_5", "title": "\u6570\u636e\u8868", "href": "https://www.visualcapitalist.com/", "slogan": "\u6570\u636e\u9a71\u52a8\u7684\u89c6\u89c9\u6548\u679c\uff0c\u5e2e\u52a9\u89e3\u91ca\u590d\u6742\u7684\u4e16\u754c", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_5", "title": "\u533b\u7597", "href": "https://www.msdmanuals.com/zh#mission", "slogan": "\u9ed8\u6c99\u4e1c\u8bca\u7597\u624b\u518c", "kind_name": "\u751f\u6d3b&\u5de5\u5177", "star": null }, { "kind": "web_5", "title": "\u4e34\u65f6\u9a8c\u8bc1\u7801", "href": "https://temp-mail.org/zh/", "slogan": "\u63d0\u4f9b\u4e34\u65f6\u90ae\u7bb1\u63a5\u6536\u70e6\u4eba\u7684\u9a8c\u8bc1\u7801\uff0c\u4f7f\u7528\u65f6\u6ce8\u610f\u4e2a\u4eba\u4fe1\u606f\u5b89\u5168", "kind_name": "\u5de5\u5177", "star": "star" }, { "kind": "web_5", "title": "\u8bcd\u4e91", "href": "https://www.weiciyun.com/", "slogan": "\u7b80\u5355\u5f3a\u5927\u7684\u6587\u5b57\u4e91\u827a\u672f\u751f\u6210\u5668", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_5", "title": "\u63a2\u6708", "href": "http://moon.bao.ac.cn/mul/index/list", "slogan": "\u6708\u7403\u4e0e\u884c\u661f\u6570\u636e\u53d1\u5e03\u7cfb\u7edf", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_5", "title": "\u4e2d\u56fd\u5730\u56fe", "href": "https://www.ageeye.cn/", "slogan": "\u77e5\u8bc6\u5730\u56fe\u5236\u4f5c\u5206\u4eab\u5e73\u53f0\uff0c\u5b83\u5c06\u5730\u56fe\u548c\u6587\u5b57\u7ed3\u5408\uff0c\u53cd\u6620\u4e2d\u56fd\u5386\u53f2\u3001\u519b\u4e8b\u3001\u5730\u7406\u3001\u6587\u5316\u7b49\u65b9\u9762\u7684\u77e5\u8bc6", "kind_name": "\u5de5\u5177&\u5b66\u4e60", "star": null }, { "kind": "web_5", "title": "\u89e3\u8c1c", "href": "http://nazo.one-story.cn/", "slogan": "\u4e00\u4e2a\u8111\u6d1e\u5927\u5f00\u7684\u6e38\u620f", "kind_name": "\u6e38\u620f", "star": null }, { "kind": "web_4", "title": "\u5c01\u9762\u4e0b\u8f7d", "href": "https://cover.olook.me/", "slogan": "\u7f51\u6613\u4e91\u97f3\u4e50\u5c01\u9762\u4e0b\u8f7d", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_4", "title": "\u5c0f\u5de5\u5177\u5408\u96c6", "href": "https://tools.miku.ac/", "slogan": "\u76ee\u524d\u5171\u5f00\u53d1\u4e86\u6570\u5341\u6b3e\u6709\u8da3\u7684\u5c0f\u529f\u80fd\uff0c\u6570\u91cf\u8fd8\u5728\u6301\u7eed\u589e\u52a0\u4e2d", "kind_name": "\u5b9e\u7528&\u5de5\u5177", "star": null }, { "kind": "web_4", "title": "\u533b\u5b66\u5fae\u89c6", "href": "https://www.mvyxws.com/", "slogan": "\u533b\u5b66\u5fae\u89c6 - \u770b\u770b\u4e13\u5bb6\u600e\u4e48\u8bf4", "kind_name": "\u751f\u6d3b", "star": "star" }, { "kind": "web_4", "title": "\u4eff\u77e5\u7f51", "href": "https://www.cn-ki.net/", "slogan": "iData\u77e5\u8bc6\u68c0\u7d22 - \u514d\u8d39\u4e0b\u8f7d\u5b66\u672f\u6587\u732e\uff0c\u514d\u8d39\u8bba\u6587\u4e0b\u8f7d", "kind_name": "\u5de5\u5177&\u5b66\u4e60", "star": null }, { "kind": "web_4", "title": "\u81ea\u52a8\u52a0\u5b57\u5e55", "href": "https://2zimu.com/#/", "slogan": "\u4e0a\u4f20\u89c6\u9891\uff0c\u51e0\u5206\u949f\u5185\u5f97\u5230\u5b57\u5e55", "kind_name": "\u5de5\u5177&\u89c6\u9891", "star": null }, { "kind": "web_4", "title": "N\u5361\u6df1\u5ea6\u5b66\u4e60", "href": "https://www.nvidia.com/en-us/research/ai-playground/?fbclid=IwAR2QEjuH4aCYP3SycnKwa_LO36rfmDhulB4WCeY1plGCfofwIU-qf1anBTY", "slogan": "\u5b9e\u65f6\u64ad\u653e\u4eba\u5de5\u667a\u80fd\u6f14\u793a\uff0c\u53c2\u89c2\u4eba\u5de5\u667a\u80fd\u827a\u672f\u9986", "kind_name": "\u5a31\u4e50&\u56fe\u7247", "star": null }, { "kind": "web_4", "title": "\u6e10\u53d8\u56fe", "href": "https://www.ls.graphics/meshgradients", "slogan": "\u514d\u8d39\u4e0b\u8f7d\u6e10\u53d8\u7d20\u6750\u56fe", "kind_name": "\u56fe\u7247", "star": null }, { "kind": "web_4", "title": "\u65f6\u5dee", "href": "https://everytimezone.com/", "slogan": "\u65f6\u533a\u8f6c\u6362\u5668\uff0c\u6bd4\u8f83\u65f6\u533a\u5dee\u5f02\uff0c\u4e00\u952e\u627e\u5230\u4f1a\u8bae\u7684\u6700\u4f73\u65f6\u95f4", "kind_name": "\u751f\u6d3b&\u5de5\u5177", "star": null }, { "kind": "web_4", "title": "\u53cc\u8272 <span class='iconfont'>&#xe64b;</span>", "href": "https://duotone.shapefactory.co/?f=f56468&t=27184f&q=_", "slogan": "\u4e0a\u4f20\u4f60\u81ea\u5df1\u7684\u56fe\u7247\u5e76\u5728\u51e0\u79d2\u949f\u5185\u5e94\u7528\u53cc\u8272\u6548\u679c\u6765\u5236\u4f5c\u81ea\u5b9a\u4e49\u53cc\u8272\u56fe\u7247", "kind_name": "\u56fe\u7247", "star": null }, { "kind": "web_4", "title": "\u4e9a\u585e", "href": "https://wangyasai.github.io/", "slogan": "\u70b9\u5f00\u83dc\u5355\u680f\uff0c\u53d1\u73b0\u201c\u8bbe\u8ba1\u5de5\u5177\u201d", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_4", "title": "listen 1", "href": "http://listen1.github.io/listen1/", "slogan": "\u641c\u7d22\u548c\u64ad\u653e\u5404\u5927\u97f3\u4e50\u7f51\u7ad9\u7684\u6b4c\u66f2\uff0c\u8ba9\u4f60\u7684\u66f2\u5e93\u66f4\u5168\u9762", "kind_name": "\u5de5\u5177&\u97f3\u4e50", "star": "star" }, { "kind": "web_4", "title": "\u97f3\u4e50 <span class='iconfont'>&#xe64b;</span>", "href": "https://www.youtube.com/channel/UCht8qITGkBvXKsR1Byln-wA/videos", "slogan": "\u65e0\u7248\u6743\u97f3\u4e50\u63d0\u4f9b\u9891\u9053", "kind_name": "\u97f3\u4e50", "star": null }, { "kind": "web_4", "title": "\u7535\u97f3\u98ce\u683c", "href": "http://music.ishkur.com/", "slogan": "\u7535\u97f3\u98ce\u683c\u79d1\u666e\u7f51\u7ad9", "kind_name": "\u97f3\u4e50", "star": null }, { "kind": "web_4", "title": "\u521b\u610f", "href": "https://creativemass.cn/#/", "slogan": "\u6211\u4eec\u5728\u5168\u4e16\u754c\u7cbe\u6311\u7ec6\u9009\uff0c\u5e0c\u671b\u6210\u4e3a\u4f60\u6700\u6709\u4ef7\u503c\u7684\u7075\u611f\u6765\u6e90", "kind_name": "\u5b9e\u7528&\u5de5\u5177", "star": null }, { "kind": "web_4", "title": "up\u4e3b\u6392\u540d", "href": "https://leptc.github.io/bili/", "slogan": "B\u7ad9up\u4e3b\u6392\u884c\u699c", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_4", "title": "yuzhua", "href": "https://mj.yuzhua.com/search/3.html", "slogan": "\u65b0\u5a92\u4f53\u6570\u636e\u5728\u7ebf\u67e5\u8be2", "kind_name": "\u5de5\u5177&\u89c6\u9891", "star": null }, { "kind": "web_4", "title": "\u65e5\u9ebb", "href": "https://www.maj-soul.com/#/home", "slogan": "\u96c0\u9b42 - \u968f\u65f6\u968f\u5730\uff0c\u8f7b\u677e\u9ebb\u5c06", "kind_name": "\u6e38\u620f", "star": "star" }, { "kind": "web_4", "title": "\uff1f", "href": "https://resn.co.nz/#", "slogan": "\u6e32\u67d3\u5c4f\u5e55\uff0c\u4f9b\u60a8\u4eab\u53d7", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_4", "title": "Grammarly", "href": "https://app.grammarly.com/", "slogan": "\u4f7f\u7528Grammarly\u7684\u4eba\u5de5\u667a\u80fd\u5199\u4f5c\u52a9\u7406\u7f16\u5199\u5927\u80c6\u3001\u6e05\u6670\u3001\u65e0\u9519\u8bef\u7684\u5199\u4f5c", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_4", "title": "\u673a\u9152", "href": "https://www.tianxun.com/", "slogan": "\u51fa\u5dee\u673a\u7968\u9152\u5e97\u4ef7\u683c\u67e5\u8be2\u7f51\u7ad9", "kind_name": "\u751f\u6d3b&\u5de5\u5177", "star": null }, { "kind": "web_3", "title": "\u91cd\u529b", "href": "https://codepen.io/akm2/full/rHIsa", "slogan": "Gravity Points - \u91cd\u529b\u70b9", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_3", "title": "\u53cd\u5411", "href": "http://www.ilidilid.com/", "slogan": "ilidilid\u662f\u4e00\u5bb6\u5f39\u5e55\u7ad9\u70b9\uff0c\u5927\u5bb6\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230\u8bb8\u591a\u7684\u6b22\u4e50", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_3", "title": "\u6210\u4e3a\u6279\u53d1\u5546", "href": "https://www.1688.com/", "slogan": "\u5168\u7403\u9886\u5148\u7684\u91c7\u8d2d\u6279\u53d1\u5e73\u53f0", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_3", "title": "\u9f8b\u9f7f\u4e00\u53f7", "href": "http://www.gfxcamp.com/", "slogan": "\u6700\u65b0CG\u8d44\u6e90\u7d20\u6750\u5206\u4eab", "kind_name": "\u5b9e\u7528&\u5de5\u5177", "star": null }, { "kind": "web_3", "title": "\u6444\u5f71\u8001\u6cd5\u5e08\u5fc5\u8bfb", "href": "https://www.dxomark.com/", "slogan": "\u8d28\u91cf\u6d4b\u8bd5\u3001\u8bc4\u5206\u548c\u8bc4\u8bba", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_3", "title": "\u8868\u60c5\u5305gif", "href": "https://sorry.xuty.tk/sorry/", "slogan": "\u613f\u4f60\u51fa\u8d70\u534a\u751f\uff0c\u5f52\u6765\u4ecd\u662f\u5c11\u5e74", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_3", "title": "\u5b66\u8bf4\u8bdd", "href": "https://zh.forvo.com/user/hikari1/pronounced-words/page-2/", "slogan": "\u4e16\u754c\u5404\u5730\u7684\u6bcd\u8bed\u8005\u6559\u4f60\u6b63\u786e\u53d1\u97f3\uff0cLKs\u6559\u4f60\u6b64\u7f51\u7ad9\u7684\u6b63\u786e\u7528\u6cd5", "kind_name": "\u5a31\u4e50&\u5b66\u4e60", "star": null }, { "kind": "web_3", "title": "\u505a\u7f51\u7ad9", "href": "https://www.wix.com/", "slogan": "\u521b\u5efa\u4e00\u4e2a\u60a8\u5f15\u4ee5\u4e3a\u8c6a\u7684\u7f51\u7ad9", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_3", "title": "\u5728\u7ebf\u6548\u679c", "href": "https://photomosh.com/", "slogan": "\u4f7f\u7528\u521b\u9020\u6027\u7684\u6548\u679c\u5bf9\u56fe\u50cf\u3001\u89c6\u9891\u6216\u7f51\u7edc\u6444\u50cf\u5934\u8fdb\u884c\u6545\u969c\u5904\u7406", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_3", "title": "\u5b66\u82f1\u8bed", "href": "https://nexus.leagueoflegends.com/en-us/", "slogan": "\u82f1\u96c4\u8054\u76df\u7f8e\u670d\u5b98\u7f51\uff0c\u5728\u8fd9\u91cc\u6d4f\u89c8\u4f60\u611f\u5174\u8da3\u7684\u82f1\u6587\u6587\u7ae0", "kind_name": "\u5b66\u4e60", "star": null }, { "kind": "web_3", "title": "\u97f3\u6e38", "href": "http://ddrkirby.com/games/melody-muncher/melody-muncher.html", "slogan": "\u97f3\u4e50\u8282\u594f\u6e38\u620f\uff0c\u4f5c\u8005\u662f\u4e00\u4f4d\u5927\u4f6c\uff0c\u6709\u5f88\u591a\u4f18\u79c0\u7684\u72ec\u7acb\u6e38\u620f\u4f5c\u54c1", "kind_name": "\u6e38\u620f&\u97f3\u4e50", "star": "star" }, { "kind": "web_3", "title": "f**king eat <span class='iconfont'>&#xe64b;</span>", "href": "https://wtfsigfd.com/#location", "slogan": "\u627e\u5230\u4f60\u9644\u8fd1\u53ef\u4ee5\u5e72\u996d\u7684\u5730\u65b9", "kind_name": "\u751f\u6d3b", "star": null }, { "kind": "web_3", "title": "\u771f\u5b9e\u5927\u5c0f <span class='iconfont'>&#xe64b;</span>", "href": "https://thetruesize.com", "slogan": "\u4e16\u754c\u5730\u56fe\u7684\u771f\u5b9e\u5c3a\u5bf8", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_3", "title": "\u6e38\u620f", "href": "https://pos.biborg.com/fr/", "slogan": "\u7f51\u9875\u7248\u795e\u5e99\u9003\u4ea1", "kind_name": "\u6e38\u620f", "star": null }, { "kind": "web_3", "title": "\u62cd\u5356", "href": "https://sf.taobao.com/?spm=a213w.7398504.sfhead2014.2.9vuB5l&current=index", "slogan": "\u963f\u91cc\u53f8\u6cd5\u62cd\u5356", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_3", "title": "\u62cd\u5356", "href": "http://auction.jd.com/haiguan.html", "slogan": "\u4eac\u4e1c\u6d77\u5173\u653f\u5e9c\u62cd\u5356", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_2", "title": "\u4e16\u754c\u6570\u636e\u7edf\u8ba1", "href": "http://www.everysecond.io/", "slogan": "\u65f6\u95f4\u6bcf\u8fc7\u4e00\u79d2\u949f\uff0c\u8fd9\u4e2a\u4e16\u754c\u90fd\u53d1\u751f\u4e86\u4ec0\u4e48\u60ca\u4eba\u7684\u4e8b\u60c5", "kind_name": "\u5a31\u4e50&\u5de5\u5177", "star": null }, { "kind": "web_2", "title": "\u4e94\u82b1\u8089", "href": "https://eitheryoulikebaconoryourewrong.com/", "slogan": "\u4e00\u7247\u70e4\u4e94\u82b1\u8089", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_2", "title": "\u514d\u8d39\u6e38\u620f\u97f3\u6548", "href": "http://www.sonniss.com/gameaudiogdc2017/", "slogan": "\u514d\u8d39\u4e0b\u8f7d\u6e38\u620f\u97f3\u6548", "kind_name": "\u97f3\u4e50", "star": null }, { "kind": "web_2", "title": "adobe\u5168\u7cfb", "href": "http://adobe.v404.cn/adobe/", "slogan": "Adobe\u5168\u7cfb\u8f6f\u4ef6\u4e0b\u8f7d", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_2", "title": "\u827a\u672f\u5b57", "href": "http://www.akuziti.com/yw/", "slogan": "\u82f1\u6587\u827a\u672f\u5b57\u4f53\u5728\u7ebf\u751f\u6210", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_2", "title": "2\u500d\u8001\u5a46", "href": "http://waifu2x.udp.jp/", "slogan": "\u4f7f\u7528\u5377\u79ef\u795e\u7ecf\u7f51\u7edc\u5bf9\u52a8\u6f2b\u98ce\u683c\u7684\u56fe\u7247\u8fdb\u884c\u653e\u5927\u64cd\u4f5c", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_2", "title": "\u622a\u56fe\u641c\u65b0\u756a", "href": "https://trace.moe/", "slogan": "\u901a\u8fc7\u622a\u56fe\u5728\u7ebf\u641c\u7d22\u756a\u5267", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_2", "title": "\u81ea\u52a8\u4e0a\u8272", "href": "http://paintschainer.preferred.tech/index_zh.html", "slogan": "\u7528AI\u4e3a\u4f60\u7684\u753b\u81ea\u52a8\u4e0a\u8272", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_2", "title": "\u81ea\u52a8\u751f\u6210\u5973\u670b\u53cb <span class='iconfont'>&#xe64b;</span>", "href": "https://hiroshiba.github.io/girl_friend_factory/index.html", "slogan": "\u751f\u6210\u4e8c\u6b21\u5143\u5973\u670b\u53cb\u7167\u7247", "kind_name": "\u5a31\u4e50&\u56fe\u7247", "star": "star" }, { "kind": "web_2", "title": "\u8bbe\u8ba1", "href": "https://www.chuangkit.com/dc.html", "slogan": "\u5728\u521b\u5ba2\u8d34\u5f00\u542f\u4f60\u7684\u5e73\u9762\u8bbe\u8ba1\u4e4b\u65c5", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_2", "title": "\u7b80\u7b14\u753b <span class='iconfont'>&#xe64b;</span>", "href": "https://aiexperiments.withgoogle.com/autodraw", "slogan": "\u4e3a\u6bcf\u4e2a\u4eba\u5feb\u901f\u7ed8\u56fe", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_2", "title": "wuxiaworld", "href": "http://www.wuxiaworld.com/", "slogan": "\u6d77\u5916\u7248\u7684\u8d77\u70b9\u5c0f\u8bf4\u7f51\uff0c\u770b\u5c0f\u8bf4\u7684\u540c\u65f6\u5b66\u4e60\u82f1\u6587", "kind_name": "\u5a31\u4e50&\u5b66\u4e60", "star": null }, { "kind": "web_2", "title": "gif", "href": "https://giphy.com/", "slogan": "\u5bfb\u627eGIF\u3001\u526a\u8f91\u548c\u8d34\u7eb8\uff0c\u4f7f\u4f60\u7684\u5bf9\u8bdd\u66f4\u79ef\u6781\uff0c\u66f4\u6709\u8868\u73b0\u529b\uff0c\u66f4\u505a\u4f60\u81ea\u5df1", "kind_name": "\u56fe\u7247", "star": null }, { "kind": "web_2", "title": "\u79d8\u5bc6", "href": "http://soulapartment.net/bin/index.php", "slogan": "\u4e16\u754c\u5404\u5730\u7684\u4eba\u5728\u8fd9\u91cc\u5206\u4eab\u79d8\u5bc6", "kind_name": "\u827a\u672f&\u6e38\u620f", "star": null }, { "kind": "web_2", "title": "\u80cc\u666f\u97f3\u5408\u6210\u5668", "href": "http://asoftmurmur.com/", "slogan": "\u73af\u5883\u58f0\u97f3\u53ef\u4ee5\u6d17\u53bb\u5206\u5fc3", "kind_name": "\u97f3\u4e50", "star": null }, { "kind": "web_2", "title": "\u5168\u7403\u7535\u53f0", "href": "http://radio.garden/live/tokyo/j-idols-project-radio/", "slogan": "\u901a\u8fc7\u65cb\u8f6c\u5730\u7403\u6765\u63a2\u7d22\u73b0\u573a\u5e7f\u64ad\u7535\u53f0", "kind_name": "\u5a31\u4e50&\u97f3\u4e50", "star": null }, { "kind": "web_2", "title": "\u56fe\u7247\u5408\u6210", "href": "http://www.ostagram.ru/lenta?locale=en", "slogan": "AI\u5408\u6210\u4e24\u5f20\u4e0d\u76f8\u5e72\u7684\u56fe\u7247", "kind_name": "\u5a31\u4e50&\u56fe\u7247", "star": null }, { "kind": "web_2", "title": "\u4e16\u754c\u98de\u673a", "href": "https://www.flightradar24.com/PRBGT/d0da2bf", "slogan": "\u63d0\u4f9b\u5168\u7403\u6570\u5343\u67b6\u98de\u673a\u7684\u5b9e\u65f6\u4fe1\u606f", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_2", "title": "png", "href": "http://www.pngall.com/thug-life-png", "slogan": "\u66b4\u5f92\u8868\u60c5png", "kind_name": "\u56fe\u7247", "star": null }, { "kind": "web_2", "title": "\u7a7a\u5f53\u63a5\u9f99", "href": "http://mrdoob.com/lab/javascript/effects/solitaire/?url_type=39&object_type=webpage&pos=1&url_type=39&object_type=webpage&pos=1", "slogan": "\u8fd9\u4e0d\u662f\u7a7a\u5f53\u63a5\u9f99", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_1", "title": "The Internet map", "href": "http://internet-map.net/", "slogan": "\u5168\u7403\u4e92\u8054\u7f51\u6d3b\u8dc3\u5730\u56fe", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_1", "title": "\u94a2\u7434", "href": "http://touchpianist.com/", "slogan": "\u70b9\u51fb\u5e76\u6f14\u594f\u4f60\u6700\u559c\u6b22\u7684\u97f3\u4e50", "kind_name": "\u5a31\u4e50&\u97f3\u4e50", "star": null }, { "kind": "web_1", "title": "\u641c\u56fe", "href": "http://iqdb.org/", "slogan": "\u641c\u7d22\u4e8c\u6b21\u5143\u56fe\u7247", "kind_name": "\u56fe\u7247", "star": null }, { "kind": "web_1", "title": "\u641c\u56fe", "href": "http://saucenao.com/index.php", "slogan": "\u641c\u7d22\u4e8c\u6b21\u5143\u56fe\u7247", "kind_name": "\u56fe\u7247", "star": null }, { "kind": "web_1", "title": "\u73af\u5883", "href": "http://www.rainymood.com/", "slogan": "\u7761\u7720\u548c\u5b66\u4e60\u65f6\u7684\u96e8\u58f0", "kind_name": "\u97f3\u4e50", "star": null }, { "kind": "web_1", "title": "\u73af\u5883", "href": "http://www.ambient-mixer.com/", "slogan": "\u4e00\u4e2a\u7531\u73af\u5883\u58f0\u97f3\u7ec4\u6210\u7684\u4e16\u754c", "kind_name": "\u97f3\u4e50", "star": null }, { "kind": "web_1", "title": "\u4e0d\u660e\u89c9\u5389", "href": "http://mrdoob.com/#/157/spin_painter", "slogan": "\u4e0d\u660e\u89c9\u5389", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_1", "title": "\u4e0d\u660e\u89c9\u5389", "href": "http://www.ro.me/", "slogan": "\u4e0d\u660e\u89c9\u5389", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_1", "title": "\u4e0d\u660e\u89c9\u5389", "href": "http://fff.cmiscm.com/#!/section/planttrees", "slogan": "\u4e0d\u660e\u89c9\u5389", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_1", "title": "\u4e0d\u660e\u89c9\u5389", "href": "http://weavesilk.com/", "slogan": "\u4e0d\u660e\u89c9\u5389", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_1", "title": "\u566b", "href": "http://www.theuselessweb.com/", "slogan": "\u968f\u673a\u8df3\u51fa\u4e00\u4e2a\u65e0\u7528\u7f51\u7ad9", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_1", "title": "\u98ce\u666f", "href": "http://www.airpano.com/?n=10&sort_by=&page=1", "slogan": "\u73af\u6e38\u4e16\u754c\u7684\u865a\u62df\u4e4b\u65c5", "kind_name": "\u5a31\u4e50&\u751f\u6d3b", "star": null }, { "kind": "web_1", "title": "miku <span class='iconfont'>&#xe64b;</span>", "href": "http://johnsu.deviantart.com/art/Halfne-Miku-Studio-396850314", "slogan": "\u4e00\u4e2a\u6d88\u78e8\u65f6\u95f4\u7684\u7f51\u7ad9", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_1", "title": "miku <span class='iconfont'>&#xe64b;</span>", "href": "https://www.youtube.com/watch?v=1szQ7YDGdXw&feature=youtu.be", "slogan": "\u4e0a\u4e00\u4e2a\u7f51\u7ad9\u7684\u89c6\u9891\u793a\u4f8b", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_1", "title": "\u97f3\u6e38", "href": "http://www.beatstage.com/", "slogan": "BeatStage - \u7b2c\u4e00\u4e2a\u5f00\u653e\u5f0f\u7f51\u9875\u97f3\u4e50\u6e38\u620f", "kind_name": "\u6e38\u620f&\u97f3\u4e50", "star": null }, { "kind": "web_1", "title": "\u6c34\u6548\u679c", "href": "http://watereffect.net/index.php", "slogan": "\u521b\u5efa\u60a8\u7684\u52a8\u753b\u6c34\u6548\u679c", "kind_name": "\u5de5\u5177&\u56fe\u7247", "star": null }, { "kind": "web_1", "title": "\u731c\u5730\u70b9", "href": "https://geoguessr.com/", "slogan": "GeoGuessr - \u8ba9\u6211\u4eec\u63a2\u7d22\u4e16\u754c\u5427", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_1", "title": "2ch", "href": "http://kanquwen.com/", "slogan": "\u770b\u8da3\u95fb - 2ch\u6709\u8da3\u5e16\u5b50\u7ffb\u8bd1", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_1", "title": "\u97f3\u4e50\u7d20\u6750", "href": "http://www.hmix.net/music_gallery/music_top.htm", "slogan": "\u514d\u8d39\u4e0b\u8f7d\u97f3\u4e50\u7d20\u6750", "kind_name": "\u97f3\u4e50", "star": null }, { "kind": "web_1", "title": "\u753b <span class='iconfont'>&#xe64b;</span>", "href": "http://en.gallerix.ru/", "slogan": "17\u4e07\u5f20\u9ad8\u5206\u8fa8\u7387\u4e16\u754c\u540d\u753b", "kind_name": "\u56fe\u7247", "star": null }, { "kind": "web_1", "title": "\u5236\u670d", "href": "http://www.seihuku-zukan.com/index.htm", "slogan": "\u65e5\u672c\u5404\u9ad8\u6821\u5236\u670d", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_1", "title": "\u5236\u670d", "href": "http://uniform.wingzero.tw/", "slogan": "\u4e9a\u6d32\u5404\u9ad8\u6821\u5236\u670d", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_1", "title": "\u5b66\u82f1\u8bed", "href": "http://www.wuxiaworld.com/cdindex-html/", "slogan": "wuxiaworld", "kind_name": "\u5b66\u4e60", "star": "star" }, { "kind": "web_1", "title": "\u5241\u624b", "href": "https://fancy.com/", "slogan": "\u4ece100\u591a\u4e2a\u72ec\u7acb\u54c1\u724c\u4e2d\u9009\u8d2d\u5546\u54c1", "kind_name": "\u751f\u6d3b", "star": null }, { "kind": "web_1", "title": "\u5241\u624b", "href": "http://www.chiphell.com/", "slogan": "Chiphell - \u5206\u4eab\u4e0e\u4ea4\u6d41\u7528\u6237\u4f53\u9a8c", "kind_name": "\u751f\u6d3b", "star": null }, { "kind": "web_1", "title": "\u7535\u97f3", "href": "http://techno.org/electronic-music-guide/", "slogan": "\u8bd5\u542c\u4e0d\u540c\u5e74\u4ee3\u7684\u7535\u97f3", "kind_name": "\u97f3\u4e50", "star": null }, { "kind": "web_1", "title": "\u7535\u97f3", "href": "https://the.wubmachine.com/", "slogan": "\u5728\u7ebf\u6539\u53d8\u97f3\u4e50\u98ce\u683c", "kind_name": "\u97f3\u4e50", "star": null }, { "kind": "web_1", "title": "\u642c\u7816", "href": "http://www.fotojet.com/", "slogan": "\u628a\u4f60\u7684\u60f3\u6cd5\u53d8\u6210\u4ee4\u4eba\u60ca\u53f9\u7684\u827a\u672f\u54c1", "kind_name": "\u5de5\u5177", "star": null }, { "kind": "web_1", "title": "\u642c\u7816", "href": "https://habitica.com/static/front", "slogan": "\u4f60\u5b8c\u6210\u7684\u6bcf\u4e00\u4e2a\u4efb\u52a1\u90fd\u6709\u52a9\u4e8e\u6539\u5584\u751f\u6d3b", "kind_name": "\u5de5\u5177&\u6e38\u620f", "star": null }, { "kind": "web_1", "title": "\u804a\u5929", "href": "http://drrr.com/lounge", "slogan": "\u5728\u7ebf\u533f\u540d\u804a\u5929\u5ba4", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_1", "title": "\u56fe\u7ad9", "href": "https://anime-pictures.net/", "slogan": "\u4e8c\u6b21\u5143\u56fe\u7247\u7ad9", "kind_name": "\u56fe\u7247", "star": null }, { "kind": "web_1", "title": "\u4e0e\u4f5b\u8bba\u7985", "href": "http://www.ptxz.com/fo/", "slogan": "\u4e0e\u4f5b\u8bba\u7985", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_1", "title": "\u97f3\u4e50", "href": "http://haru.ocv.me/", "slogan": "\u97f3\u4e50\u7d20\u6750\uff0c\u514d\u8d39\u4e0b\u8f7d", "kind_name": "\u97f3\u4e50", "star": null }, { "kind": "web_1", "title": "\u5b66\u4e60", "href": "http://www.wolframalpha.com/", "slogan": "\u6570\u5b66\u3001\u79d1\u5b66\u3001\u793e\u4f1a\u5b66\u7b49\u7b49", "kind_name": "\u5b66\u4e60", "star": null }, { "kind": "web_1", "title": "\u4e0d\u660e\u89c9\u5389", "href": "https://dribbble.com/wagerfield", "slogan": "\u4e0d\u660e\u89c9\u5389", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_1", "title": "\u624b\u673a", "href": "http://mowned.com/", "slogan": "\u624b\u673a\u7684\u5168\u5386\u53f2", "kind_name": "\u5a31\u4e50", "star": null }, { "kind": "web_1", "title": "GPS", "href": "http://www.flashearth.com/", "slogan": "\u5b9e\u65f6\u6c14\u8c61\u536b\u661f\u56fe\u7247", "kind_name": "\u751f\u6d3b&\u5de5\u5177", "star": null }, { "kind": "web_1", "title": "\u5241\u624b", "href": "http://www.smzdm.com/", "slogan": "\u4ec0\u4e48\u503c\u5f97\u4e70 - \u5206\u4eab\u6bcf\u4e00\u79cd\u503c", "kind_name": "\u751f\u6d3b", "star": null }, { "kind": "web_1", "title": "\u5241\u624b", "href": "http://www.iliangcang.com/i/home/", "slogan": "\u826f\u4ed3 - \u751f\u6d3b\u7f8e\u5b66\u6307\u5357", "kind_name": "\u751f\u6d3b", "star": null }, { "kind": "web_1", "title": "\u83dc\u677f\u72c2\u9b54", "href": "http://mtmwood.com/en", "slogan": "\u5b9a\u5236\u5404\u79cd\u70f9\u996a\u6770\u4f5c\u7684\u5207\u83dc\u677f", "kind_name": "\u751f\u6d3b", "star": null }, { "kind": "web_1", "title": "\u6709\u8da3\u7f51\u5740", "href": "http://youquhome.com/page/3/", "slogan": "\u6536\u85cf\u5168\u7403\u6700\u6709\u8da3\u7684\u7f51\u7ad9", "kind_name": "\u5de5\u5177", "star": null }];

// 渲染所有网站卡片
let i = 0;
let web_list_html = `<div class="col-md-4 web-grid web_8 is_star" data-toggle="modal" data-target="#exampleModal"><span style="cursor:pointer"><div data-toggle="popover" data-content="良心到难以置信的网站推荐" class="services-inner-box web-single clearfix" ontouchstart=""><span class="star iconfont">&#xe639;</span><h2>LKs网页推荐站</h2><p>实用</p></div></span></div>`;
for (i in web_list) {
    web_list_html += `<div class="col-md-4 web-grid ${web_list[i].kind} is_${web_list[i].star}"><a href="${web_list[i].href}" target="_blank"><div data-toggle="popover" data-content="${web_list[i].slogan}" class="services-inner-box web-single clearfix" ontouchstart=""><span class="${web_list[i].star} iconfont">&#xe639;</span><h2>${web_list[i].title}</h2><p>${web_list[i].kind_name}</p></div></a></div>`
}
$('.web-list').html(web_list_html);
$('.copyrights').removeClass('hide');

// 标题
$('.section-title>span').click(() => {
    window.location.reload()
})

// 网站卡片动效
let $grid = $('.web-list').isotope({
    itemSelector: '.web-grid',
});
let video_list = [
    ['av3743771', 'aid=3743771&bvid=BV11s411X7u5&cid=6002978'],
    ['av9856372', 'aid=9856372&bvid=BV1Nx411D78D&cid=16294903'],
    ['av27234784', 'aid=27234784&bvid=BV1fs411E7ht&cid=169520351'],
    ['av66209341', 'aid=66209341&bvid=BV1M4411m7Mz&cid=114833286'],
    ['BV1a741137NS', 'aid=88646573&bvid=BV1a741137NS&cid=153840196'],
    ['BV1wv411y7L6', 'aid=244743030&bvid=BV1wv411y7L6&cid=237959150'],
    ['BV1bU4y1x7A1', 'aid=671597785&bvid=BV1bU4y1x7A1&cid=293053800'],
    ['BV1qQ4y1r7ty', 'aid=720562882&bvid=BV1qQ4y1r7ty&cid=409952044'],
];
// 默认关闭视频预览
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
        $('.group-video').html(`视频传送门：<a href="https://www.bilibili.com/video/${video_list[Number(num) - 1][0]}/" rel="nofollow noreferrer" target="_blank"><span class="iconfont" style="margin-right:3px">&#xe6b4;</span>${video_list[Number(num) - 1][0]}</a>&nbsp;&nbsp;&nbsp;<span class="show_bilibili" ontouchstart=""></span>`);
        let func_show_bilibili = () => {
            $('.bilibili_iframe').css('display', 'block');
            $('.show_bilibili').html('<span class="iconfont" style="margin-right:2px">&#xe7fb;</span>关闭');
            $('iframe').attr('src', `//player.bilibili.com/player.html?${video_list[Number(num) - 1][1]}&page=1`);
        }
        let func_hide_bilibili = () => {
            $('.bilibili_iframe').css('display', 'none');
            $('.show_bilibili').html('<span class="iconfont" style="margin-right:2px">&#xe7fb;</span>预览');
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