function e(id) { return document.getElementById(id) }
function show(id) { e(id).style.display = 'block' }
function hide(id) { e(id).style.display = 'none' }
function q(query) { return document.querySelector(query) }
function qa(query) { return document.querySelectorAll(query) }
function qe(el, query) { return el.querySelector(query) }
function qea(el, query) { return el.querySelectorAll(query) }
function t(el, text) { el.innerText = text || '' }
function add(el, child) { el.append(child) }
function c(el) { return document.createElement(el) }
function ce(obj) { 
    const el = c(obj.e || 'div')
    obj.id ? a(el, 'id', obj.id) : null 
    obj.c ? a(el, 'class', obj.c) : null
    obj.t ? t(el, obj.t) : null
    obj.a ? ao(el, obj.a) : null
    return el
}

function a(el, atr, val) { el.setAttribute(atr, val) }
function ao(el, obj) { for(atr in obj) { el.setAttribute(atr, obj[atr].replace(/_/g, '-')) } }
function ar(el, atr) { el.removeAttribute(atr) }

function s(el, key, value) { el.style[key] = value }
function ss(el, style) { el.style = style }
function so(obj) {
	var st = ''
	for(s in obj) { st += s + ':' + obj[s] + '; ' }
	return st.replace(/_/g, '-')
}

function ih(el, html) {el.innerHTML = html}
function oh(el, html) {el.outerHTML = html}

function ds(key, value) { window.localStorage.setItem(key, value)}
function dg(key) { return window.localStorage.getItem(key)}
function dso(key, obj) { window.localStorage.setItem(key, JSON.stringify(obj))}
function dgo(key) { return JSON.parse(window.localStorage.getItem(key))}
