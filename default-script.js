class jQueryError extends Error { constructor() { super("MISSING: Add jQuery | Version 3.5.1 | https://code.jquery.com/jquery-3.5.1.min.js"), this.name = "jQueryError" } } class PopperError extends Error { constructor() { super("MISSING: Add popper.js | Version 2.6.0 | https://unpkg.com/@popperjs/core@2.6.0/dist/umd/popper.min.js"), this.name = "PopperError" } } class SplideError extends Error { constructor() { super("MISSING: Add splide.js | Version 2.4.20 | https://github.com/Splidejs/splide/releases/tag/v2.4.20"), this.name = "SplideError" } } try { jQuery } catch{ throw new jQueryError } let navigation = null, footer = null, slider = null, viewblock = null, filter = null, banner = null, sidebar = null, info = null, select = null, number = null, radio = null, checkbox = null, file = null, list = null, fullview = null, popup = null, tooltip = null, loader = null, period = null, section = null; $(window).on("load", () => { navigation = new Navigation, footer = new Footer, slider = new Slider, viewblock = new Viewblock, period = new Period, filter = new Filter, banner = new Banner, sidebar = new Sidebar, info = new Info, select = new Select, number = new Number, radio = new Radio, checkbox = new Checkbox, file = new File, list = new List, section = new Section, fullview = new Fullview, popup = new Popup, tooltip = new Tooltip, loader = new Loader }); class Select { constructor() { this.setup() } setup() { if (-1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome")); else { let e = $("select[data-default='select']"); for (let a = 0; a < e.length; a++) { let i = e[a], r = $(i).parents()[0]; if ("area" == $(r).attr("data-select")) continue; let o = $("<div>").attr("data-select", "area").css("width", $(i).outerWidth()); $(i).before(o), $(i).detach().appendTo(o); let l = !1, d = $(i).find("option").filter((t, e) => -1 != $(e).val() || (l = !0, !1)), s = $(i).attr("data-select-index"), n = -1; if (null != s && s.length > 0) { let t = parseInt(s); t > -1 && t < d.length && (n = t) } l || -1 != n || (n = 0); let c = 0; c = l && -1 == n ? $(i).find("option[value='-1']").val() : $(d[n]).val(), $(d[n]).attr("data-select-target", "active"), $(i).attr("data-select-index", n).val(c); let p = $("<div>").attr("data-select-item", "list").css("width", $(i).outerWidth() - 2), u = $(i).css("border-top-width"); $(i).width($(p).outerWidth() - (18 + 2 * u.slice(0, u.length - 2))); for (let t = 0; t < d.length; t++) { let e = d[t], a = $("<div>").attr("data-select-item", "item").val($(e).val()).text($(e).text()).on("mousedown", e => { let a = $(p).children(), r = $($(d)[t]); $(a).removeAttr("data-select-target"), $($(a)[t]).attr("data-select-target", "active"), $(i).attr("data-select-index", t).val($(r).val()), $(d).removeAttr("data-select-target"), $(r).attr("data-select-target", "active") }); t == n && a.attr("data-select-target", "active"), p.append(a) } $(o).append(p), $(i).mousedown(e => t(e)), $(i).focusout(t => { $(p).slideUp("fast") }); let h = $(i).css("border-top-width"); h = null == h ? 0 : +h.slice(0, h.length - 2); let f = $(i).outerHeight() - 2 * h, v = $("<div>").attr("data-select", "drop").css({ height: f, "border-width": h, "border-left-width": 0 }).mousedown(e => t(e)).append($("<i>").addClass("fas fa-chevron-down")); function t(t) { 1 == t.which && ($(p).slideToggle("fast"), t.preventDefault(), $(i).focus()) } $(o).append(v) } } } check() { this.setup() } } class Checkbox { constructor() { this.setup() } setup() { let t = $("input[type='checkbox'][data-default='checkbox']"); for (let e = 0; e < t.length; e++) { let a = t[e], i = $(a).parents()[0]; if ("area" == $(i).attr("data-checkbox")) continue; let r = $("<div>").attr("data-checkbox", "area"); $(a).before(r), $(a).detach().appendTo(r); let o = $("<div>").attr("data-checkbox", "box").appendTo(r).on("click", () => { $(o).attr("data-checkbox-state", function (t, e) { return "active" == e ? ($(o).children().remove(), $(a).prop("checked", !1), null) : ($(a).prop("checked", !0), $("<i>").addClass("fas fa-check").appendTo(o), "active") }) }); $(r).css({ width: o.innerWidth(), height: o.innerHeight() }) } } check() { this.setup() } } class Fullview { constructor() { this.setup() } setup() { let t = $("img[data-default='fullview']"), e = $("div[data-default='fullview']"), a = $.merge(t, e); for (let t = 0; t < a.length; t++) { let e = a[t], r = $(e).parents()[0]; if ("area" == $(r).attr("data-fullview")) continue; let o = $("<div>").attr("data-fullview", "area").css("width", $(e).outerWidth()); $(e).before(o), $(e).detach().appendTo(o); let l = $("<div>").attr("data-fullview", "box").on("click", () => { i($(e).attr("src") || $(e).css("background-image").slice(5, -2), $(e).attr("alt") || $(e).attr("data-fullview-alt"), $(e).attr("name") || $(e).attr("data-fullview-name")) }).appendTo(o); $("<i>").addClass("fas fa-expand").appendTo(l) } function i(t, e, a) { let i = $("<div>").attr("data-fullview", "page"), r = ($("<i>").attr("data-fullview", "close").addClass("fas fa-compress").on("click", () => { $(i).fadeOut(250), $("body").removeClass("block-overflow"), setTimeout(() => { $(i).remove() }, 250) }).appendTo(i), $("<div>").attr("data-fullview", "image-area")); if (null == t || "" == t) { let t = "Dieses Bild kann nicht angezeigt werden."; $("<div>").attr("data-fullview", "image").text(null == e ? t : e).appendTo(r) } else $("<img>").attr({ "data-fullview": "image", src: t }).appendTo(r); i.append(r), null != a && "" != a && $("<p>").attr("data-fullview", "name").text(a).appendTo(i), $("body").append(i).addClass("block-overflow") } } check() { this.setup() } } class Viewblock { constructor() { this.setup() } setup() { const t = "fas fa-plus"; let e = $("div[data-default='viewblock']:not([data-viewblock-generated])"); for (let i = 0; i < e.length; i++) { let r = e[i], o = $(r).children("div"), l = $(r).attr("data-viewblock-side"); $(r).attr("data-viewblock-generated", "true"); for (let e = 0; e < o.length; e++) { let i = o[e]; $(i).attr("data-viewblock", "block"); let r = $(i).children("div[data-viewblock='head']"), d = $(r).html(); $(r).html(""), $("<div>").html(d).appendTo(r); let s = $("<i>").addClass(t).css(null == l || "right" == l ? "right" : "left", 10).appendTo(r), n = $(i).children("div[data-viewblock='content']"), c = $(n).html(); $(n).html(""), $("<div>").html(c).appendTo(n), a(), $(r).on("click", () => { let t = 1; if ($(n).is(":hidden") && (t = 0), a(), t) $(n).slideUp("fast"); else { let t = $(i).css("border-bottom-width"); $(s).removeClass().addClass("fas fa-minus"), $(r).css("border-bottom-width", t), $(n).slideDown("fast") } }) } function a() { $(o).children("div[data-viewblock='content']").slideUp("fast"), $($(o).children("div[data-viewblock='head']")).children("i").removeClass().addClass(t), $(o).children("div[data-viewblock='head']").css("border-bottom-width", 0) } } } check() { this.setup() } } class Tooltip { constructor() { try { Popper } catch{ throw new PopperError } this.setupTitleCounter = 0, this.setup() } setup() { let t = $("[title]"); for (let i = 0; i < t.length; i++) { let r = t[i], o = $(r).attr("title"), l = $(r).attr("data-tooltip-placement"); if ($(r).blur().attr("data-title", o).removeAttr("title"), "" == o) { $(r).removeAttr("data-title"); continue } let d = $(r).attr("data-tooltip-id"); $(r).attr("data-tooltip-id", this.setupTitleCounter), $("[for-id='" + d + "']").remove(); let s = document.createElement("div"); s.classList = "tooltip", s.setAttribute("role", "tooltip"), s.setAttribute("for-id", this.setupTitleCounter), s.innerHTML = o, this.setupTitleCounter++; let n = document.createElement("div"); n.classList = "arrow", n.setAttribute("data-popper-arrow", ""), s.appendChild(n), document.querySelector("body").appendChild(s); let c = null, p = "bottom"; function e() { s.setAttribute("data-show", ""), c = Popper.createPopper(r, s, { placement: p, modifiers: [{ name: "offset", options: { offset: [0, 8] } }] }) } function a() { s.removeAttribute("data-show"), c && (c.destroy(), c = null) } null != l && "" != l && (p = l); const u = ["mouseleave", "blur"];["mouseenter", "focus"].forEach(t => { r.addEventListener(t, e) }), u.forEach(t => { r.addEventListener(t, a) }) } } check(t) { function e(t) { let e = $(t).attr("title") || $(t).attr("data-title"); $(t).removeAttr(e).attr("title", e) } null != t ? e(t) : $("[data-title]").each((t, a) => { e(a) }), this.setup() } } class Sidebar { constructor() { this.genPositionObject = { left: 0, top: 0, right: 0, bottom: 0 }, this.setup() } setup() { const t = ["left", "right", "top", "bottom"], e = ["start", "center", "end"], a = "data-sidebar-state", i = "data-sidebar-toggler-position", r = "data-sidebar-generated"; let o = [...$("[data-default='sidebar']:not([" + r + "])")].sort((a, r) => { let o = $(a).attr("data-sidebar-distance"), l = $(r).attr("data-sidebar-distance"); if (null != o && "" != o) return 1; if (null != l && "" != l) return -1; const d = "right"; let s = $(a).attr("data-sidebar-position"), n = $(r).attr("data-sidebar-position"); null != s && "" != s || (s = d, $(a).attr("data-sidebar-position", d)), null != n && "" != n || (n = d, $(r).attr("data-sidebar-position", d)); let c = t.indexOf(s), p = t.indexOf(n); if (c < p) return -1; if (c > p) return 1; let u = $($(a).children()[0]).attr(i), h = $($(r).children()[0]).attr(i); null != u && "" != u || (u = "start", $($(a).children()[0]).attr(i, "start")), null != h && "" != h || (h = "start", $($(r).children()[0]).attr(i, "start")); let f = e.indexOf(u), v = e.indexOf(h); return f < v ? -1 : f > v ? 1 : void 0 }), l = 50, d = 50; for (let t = 0; t < o.length; t++) { let e = o[t]; if (null != $(e).attr(r)) continue; let s = $(e).attr(a); null != s && "" != s || (s = "hidden"), $(e).attr(a, "hidden").attr(r, !0); let n = $(e).attr("data-sidebar-position"), c = "right", p = 0, u = 0, h = "right", f = 0, v = $(e).children("[data-sidebar='toggler']"), g = $(e).children("[data-sidebar='content']"), b = $(v).attr("data-sidebar-trigger-type"), m = ["mousedown", "click", "mouseover", "hover"], w = ["mousedown", "mousedown", "mouseover", "mouseover"], k = m.indexOf(b); -1 == k && ($(v).attr("data-sidebar-trigger-type", m[0]), k = 0), 0 == v.length && (v = $("<div>").attr({ "data-sidebar": "toggler", "data-sidebar-info": "hidden" }).attr(i, "start").css({ "min-height": 0, "min-width": 0 }).prependTo(e)); let x = $(g).outerHeight(), T = $(g).outerWidth(), y = $(v).outerHeight(), C = $(v).outerWidth(), A = $(v).attr(i), O = $(e).attr("data-sidebar-distance"), S = {}; switch (n) { case "top": case "bottom": switch (A) { case "center": f = T / 2 - C / 2; break; case "end": f = T - C; break; case "start": default: f = 0 }h = "left", c = "top", p = "top" == n ? x : -y, u = -x, S[n] = u, null != O && "" != O ? (S.left = O - f, this.genPositionObject[n] -= 10) : (S.left = this.genPositionObject[n] + d - f, this.genPositionObject[n] += d + 10); break; case "right": case "left": default: switch (A) { case "center": f = x / 2 - y / 2; break; case "end": f = x - y; break; case "start": default: f = 0 }h = "top", c = "right", p = "right" == n ? T : -C, u = -T, S[n] = u, null != O && "" != O ? (S.top = O - f, this.genPositionObject[n] -= 10) : (S.top = this.genPositionObject[n] + l - f, this.genPositionObject[n] += l + 10) }$(e).css(S), l = y, d = C; let E = $(v).children(); $(v).html("").append($("<div>").append(E)), "hidden" == $(v).attr("data-sidebar-info") && $($(v).children()[0]).remove(); let H = 0, j = 0; $(v).css({ width: $(v).outerWidth(), height: $(v).outerHeight() }).css(c, p).css(h, f).on(w[k], () => { let t = $(e).attr(a); for (let t = 0; t < o.length; t++) { let i = o[t]; "shown" == $(i).attr(a) && i != e && $($(i).children("[data-sidebar='toggler']")).click() } "shown" == t ? (j = u, H = 0, $(e).attr(a, "hidden")) : "hidden" == t && (j = 0, H = 10, $(e).attr(a, "shown")), $(e).css(n, j).css("z-index", H) }), w[k] == w[2] && $(e).on("mouseleave", () => { j = u, H = 0, $(e).attr(a, "hidden"), $(e).css(n, j).css("z-index", H) }), "shown" == s && $(v).mousedown() } } check() { this.setup() } } class Popup { constructor() { this.setup() } setup() { $("div[data-default='popup']").each((t, e) => { let a = $($(e).children("[data-popup='trigger']"))[0], i = $($(e).children("[data-popup='content']"))[0]; if (null != a && null != i) { let t = $(a).attr("data-popup-trigger-type"), e = ["mousedown", "click", "mouseover", "hover"], r = ["mousedown", "mousedown", "mouseover", "mouseover"], o = e.indexOf(t); -1 == o && ($(a).attr("data-popup-trigger-type", e[0]), o = 0); let l = $("<button>").attr("data-popup-area", "close").addClass("fas fa-times").on("click", () => { $(s).fadeOut("fast"), setTimeout(() => { $("body").removeClass("block-overflow") }, 250) }), d = $("<div>").attr("data-popup-area", "box").append(l).append(i), s = $("<div>").attr("data-popup", "area").append(d).appendTo("body"); $(a).on(r[o], () => { $(s).fadeIn("fast").css("display", "flex"), $("body").addClass("block-overflow") }).appendTo("body") } $(e).remove() }) } check() { this.setup() } } class Slider { constructor() { let t = $("<div>").attr("id", "spl1d3t4st").appendTo($("body")); try { new Splide($(t)[0]) } catch{ throw new SplideError } finally { $(t).remove() } this.setup() } setup() { $("[data-default='slider']").each((t, e) => { if (null != $(e).find(".splide__track")[0]) return !0; let a = $(e).addClass("splide"), i = $("<div>").addClass("splide__track"), r = $("<ul>").addClass("splide__list"), o = 50; $(e).children("[data-slider='item']").each((t, e) => { let a = $(e).outerHeight(); a > o && (o = a), $("<li>").addClass("splide__slide").append($(e).html()).appendTo(r), $(e).remove() }), $($(r).children()).css("min-height", o), $(i).append(r), $(a).append(i); let l = $(e).attr("data-slider-arrow-style"), d = $(e).attr("data-slider-pagination-style"), s = {}, n = $(e).attr("data-slider-options"); null != n && "" != n && (n = n.replaceAll("'", '"'), s = JSON.parse(n)); let c = $(e).attr("data-slider"); if (null != c && "" != c && "sync" == c) { let t = $("<div>").attr("data-slider-sync", "slider").addClass("splide").append($(a).html()), i = { rewind: !0, fixedWidth: 100, fixedHeight: 64, isNavigation: !0, gap: 10, focus: "center", pagination: !1, cover: !0 }; $(e).after(t); let r = new Splide($(t)[0], i).mount(); new Splide($(a)[0], { type: "fade", heightRatio: .5, pagination: !1, arrows: !1, cover: !0 }).sync(r).mount() } else new Splide($(a)[0], s).mount(); if (null != l && "" != l) { let t = 0; switch (l) { case "rounded": t = "50%"; break; case "rect": default: t = 0 }$($(a).find(".splide__arrow")).css("border-radius", t) } if (null != d && "" != d) { let t = 0; switch (d) { case "rounded": t = "50%"; break; case "rect": default: t = 0 }$($(a).find(".splide__pagination__page")).css("border-radius", t) } }) } check() { this.setup() } } class Loader { constructor() { this.setup() } setup() { $("[data-default='loader']").each((t, e) => { $(e).fadeOut("fast"), setTimeout(() => { $(e).remove() }, 250) }) } check() { this.setup() } } class Filter { constructor() { this.setup() } setup() { $("[data-default='filter']").each((t, e) => { let a = $(e).children()[0]; if (null != $(a).attr("data-filter-area")) return !0; let i = $(e).attr("data-filter-position"), r = ["all"]; if (null != i && "" != i) { let t = ["top", "bottom", "left", "right"]; -1 == t.indexOf(i) && (i = t[0]) } else i = "top"; let o = $("<ul>").attr("data-filter-area", "buttons"), l = $("<div>").attr("data-filter-area", "items"), d = null, s = null; switch (i) { case "left": d = 0, s = "inherit"; break; case "right": d = 0, s = "row-reverse"; break; case "bottom": d = 1, s = "column-reverse"; break; case "top": default: d = 1, s = "column" }$(o).css(0 == d ? { margin: "auto" } : { display: "flex", "flex-flow": "wrap", "justify-content": "center" }), $(e).css("flex-direction", s), $($(e).children("[data-filter='item']")).each((t, e) => { $(l).append(e); let a = $(e).attr("data-filter-categorie"); null != a && "" != a ? -1 == r.indexOf(a) && r.push(a) : $(e).attr("data-filter-categorie", r[0]) }), r.forEach((t, e) => { $("<li>").append($("<button>").attr("data-filter", "button").text(t.toUpperCase()).on("click", () => { switch (t) { case r[0]: $($(l).children()).fadeIn("fast"); break; default: $($(l).children()).each((e, a) => { $(a).attr("data-filter-categorie") == t ? $(a).fadeIn("fast") : $(a).fadeOut(0) }) } })).appendTo(o) }), $(e).append(o), $(e).append(l) }) } check() { this.setup() } } class Banner { constructor() { this.setup() } setup() { let t = { top: 0, bottom: 0 }; $("[data-default='banner']").each((e, a) => { let i = $($(a).children("button[data-banner='close']"))[0]; null != i && (i = $("<button>").attr("data-banner", "close").addClass("fas fa-times").on("click", () => { $(a).fadeOut("fast"), setTimeout(() => { switch ($(a).remove(), $(a).attr("data-banner-position")) { case "top": t.top = 0, $("[data-default='banner'][data-banner-position='top']").each((e, a) => { $(a).css({ top: t.top }), t.top += $(a).outerHeight() }); break; case "bottom": default: t.bottom = 0, $("[data-default='banner'][data-banner-position='bottom']").each((e, a) => { $(a).css({ bottom: t.bottom }), t.bottom += $(a).outerHeight() }) } }, 250) }).appendTo(a)); let r = ["bottom", "top"], o = $(a).attr("data-banner-position"); null != o && "" != o && -1 != r.indexOf(o) || (o = r[0], $(a).attr("data-banner-position", r[0])); let l = {}; switch (o) { case "top": l = { top: t.top }, t.top += $(a).outerHeight(); break; case "bottom": default: l = { bottom: t.bottom }, t.bottom += $(a).outerHeight() }$(a).css(l) }) } check(t, e, a) { let i = $("<div>").attr("data-default", "banner").html(t); null != e && $(i).attr("data-banner-position", e), a && $(i).append($("<button>").attr("data-banner", "close")), $("body").append(i), this.setup() } } class Info { constructor() { this.setup() } setup() { if ($("[data-default='info']").length > 0) { let t = $("[data-info='area']")[0] || $("<div>").attr("data-info", "area").appendTo($("body")[0]); $("[data-default='info']").each((e, a) => { let i = $(a).attr("data-info-used"); if (null == i || "" == i || 0 == i) { let i = 500 * (e + 1); $(a).attr("data-info-used", "false").attr("data-info-state", "inactive").appendTo(t), setTimeout(() => { $(a).attr("data-info-used", "true").attr("data-info-state", "active") }, 0), setTimeout(() => { $(a).attr("data-info-state", "inactive"), setTimeout(() => { $(a).remove() }, 250) }, 3e3 + i) } }) } } check(t) { let e = $("div[data-info='area']")[0]; $("<div>").attr("data-default", "info").html(t).appendTo(e), this.setup() } } class Number { constructor() { this.setup() } setup() { $("input[type='number'][data-default='number']").each((t, e) => { let a = $(e).parents()[0]; if ("area" == $(a).attr("data-number")) return !0; const i = ["none", "up", "down", "both"]; let r = $(e).attr("data-number-disabled-arrows") || i[0], o = $(e).attr("min"), l = $(e).attr("max"), d = $(e).attr("step"); if ($(e).on("focusout", () => { let t = $(e).val(); t > +l && (t = +l), t < +o && (t = +o), $(e).val(t) }), -1 == i.indexOf(r) && (r = i[0]), r != i[3]) { let t = $("<div>").attr("data-number", "area").css("width", $(e).outerWidth()); $(e).wrap(t); let a = $(e).css("margin").slice(0, -2), i = $("<div>").attr("data-number", "box").css({ height: $(e).innerHeight() + 2 * +$(e).css("border-top-width").slice(0, -2), top: a, right: -a }); switch ($(e).after(i), r) { case "up": s("up"); break; case "down": s("down"); break; case "none": default: s("up"), s("down") }function s(t) { if ("up" == t || "down" == t) { let a = $(e).outerHeight(); $("<button>").attr("data-number", "button").css({ height: a, "line-height": Math.floor(a / 2) + "px" }).on("click", () => { let a = $(e).val(), i = a; switch (d = null == d ? 1 : +d, t) { case "up": "" == a ? i = +l || 0 : +a + d > +l ? i = +l : (null == l || +a + d <= +l) && (i = +a + d); break; case "down": default: "" == a ? i = +o || 0 : +a - d < +o ? i = +o : (null == o || +a - d >= +o) && (i = +a - d) }$(e).val(i) }).addClass("up" == t ? "fas fa-angle-up" : "fas fa-angle-down").appendTo(i) } } } }) } check() { this.setup() } } class Radio { constructor() { this.setup() } setup() { $("[data-default='radio']").each((t, e) => { let a = $(e).parents()[0]; if ("area" == $(a).attr("data-radio")) return !0; let i = $("<div>").attr("data-radio", "area").css({ height: $(e).innerHeight(), width: $(e).innerWidth() }); $(e).wrap(i); let r = $(e).attr("name"), o = $("<div>").attr("data-radio", "box").attr("data-radio-scope", r).appendTo($(e).parent()).on("click", t => { let a = $(o).attr("data-radio-state"); null != r && $("[data-radio='box'][data-radio-scope='" + r + "']").removeClass("fas fa-check").removeAttr("data-radio-state"), "active" != a ? ($(o).addClass("fas fa-check").attr("data-radio-state", "active"), $(e).prop("checked", !0)) : $(e).prop("checked", !1) }) }), $("input[type='radio']").on("click", t => { let e = $(t.currentTarget).attr("name"); null != e ? $("[data-radio='box'][data-radio-scope='" + e + "']").removeClass("fas fa-check").removeAttr("data-radio-state") : $(t.currentTarget).removeClass("fas fa-check").removeAttr("data-radio-state") }) } check() { this.setup() } } class File { constructor() { this.setup() } setup() { $("[type='file'][data-default='file']").each((t, e) => { let a = $(e).parents()[0]; if ("area" == $(a).attr("data-file")) return !0; let i = ($(e).attr("data-file-max") + "").toUpperCase().trim(), r = ["B", "KB", "MB", "GB"], o = null; if (i.match(/^[.0-9]+(B|KB|MB|GB)$/)) for (let t = r.length - 1; t >= 0; t--)if (i.includes(r[t])) { o = Math.pow(1024, t) * +i.replace(/[A-Z]+/g, ""); break } let l = $("<div>").attr("data-file", "area").css({ height: $(e).outerHeight(), margin: $(e).css("margin") }), d = $("<div>").attr("data-file", "info").text("0 Dateien").on("click", () => { $(e).click() }).appendTo(l); $("<button>").text("Hochladen").attr("data-file", "button").on("click", () => { $(e).click() }).appendTo(l); $(e).before(l), $(e).detach().appendTo(l), $(e).on("change", () => { if (null != o) { let a = $(e)[0].files; if (null != a) { let i = 0; for (let t = 0; t < a.length; t++)i += a[t].size; function t(t) { let e = "Datei" + (1 == a.length ? "" : "en"); if ($(d).text(t ? a.length + " " + e : e + " zu gro�"), t && a.length > 0) { let t = $("<ul>").attr("data-file", "list"); $(a).each((e, a) => { $("<li>").text(a.name).appendTo(t) }), $(d).attr("title", $("<div>").html(t).html()) } else $(d).attr("title", ""); tooltip.check(d) } i > o ? (t(!1), $(e).val("")) : t(!0) } } }) }) } check() { this.setup() } } class Period { constructor() { this.setup() } setup() { function t(t, e, a, i, r) { let o = document.createElementNS("http://www.w3.org/2000/svg", "line"); o.setAttribute("data-period-line", "start"), o.setAttribute("x1", e), o.setAttribute("y1", a), o.setAttribute("x2", i), o.setAttribute("y2", r), o.setAttribute("stroke", "var(--default)"), o.setAttribute("stroke-dasharray", "5"), o.setAttribute("stroke-dashoffset", "1000"), t.appendChild(o) } function e(e) { $(e).children("svg").remove(); let a = $(e).children("[data-period='point']"), i = $(e).offset(), r = ["point", "path"], o = $(e).parents()[0], l = $(o).attr("data-period-start"), d = $(o).attr("data-period-end"); null != l && -1 != r.indexOf(l) || (l = r[0]), null != d && -1 != r.indexOf(d) || (d = r[0]); let s = document.createElementNS("http://www.w3.org/2000/svg", "svg"); s.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;", e.insertBefore(s, e.firstChild), a.each((o, n) => { let c = $(a).length, p = $(n), u = $(p).offset(), h = $(p).outerWidth(), f = $(p).outerHeight(), v = u.left + h / 2, g = u.top + f / 2; if (v -= i.left, g -= i.top, 0 == o && l == r[1] && t(s, v, 0, v, g), o == c - 1) return d == r[1] && t(s, v, g, v, $(e).outerHeight()), !0; let b = $(a)[o + 1], m = $(b).offset(), w = m.left + h / 2, k = m.top + f / 2; w -= i.left, k -= i.top, t(s, v, g, w, k) }) } $("[data-default='period']").each((t, a) => { if (null != $(a).children("div[data-period='area']")[0]) return !0; let i = ["left", "right"], r = $(a).children("div[data-period='stamp']"), o = $("<div>").attr("data-period", "area").appendTo(a); $(r).each((t, e) => { let a = $(e).attr("data-period-position"), r = $(e).children("div[data-period='content']")[0]; null != a && -1 != i.indexOf(a) || (a = i[0]), null != $(r).html() && "" != $(r).html().trim() || $(r).remove(); let l = $("<div>").attr("data-period", "point"); switch (a) { case "right": $(o).append(e), $(o).append(l); break; case "left": default: $(o).append(l), $(o).append(e) } }), e(o[0]) }), $(window).on("resize", () => { $("[data-period='area']").each((t, a) => { e(a) }) }), document.fonts.ready.then(() => { $(window).resize() }) } check() { this.setup() } } class Navigation { constructor() { this.setup() } setup() { let t = ["fixed", "static"], e = ["fade", "none"]; $("nav[data-default='navigation']").each((a, i) => { if (0 == a) { if (null != $(i).attr("data-navigation-generated")) return !0; { $(i).attr("data-navigation-generated", !0); let a = $(i).attr("data-navigation-work"), r = $(i).attr("data-navigation-type"); -1 == t.indexOf(r) && (r = t[0]), -1 == e.indexOf(a) && (a = t[0]); let o = {}; switch (r) { case "static": o.position = "absolute"; break; case "fixed": default: switch (o.position = "fixed", a) { case "none": break; case "fade": default: $(document).on("scroll", () => { $(document).scrollTop() >= 200 ? $(i).attr("data-navigation-state", "scrolled") : $(i).removeAttr("data-navigation-state") }) } }$(i).css(o); let l = $(i).children("div[data-navigation='logo']"), d = $($(i).children("div[data-navigation='items']")).children(), s = $("<div>").attr("data-navigation", "main").append(l).appendTo(i), n = $("<ul>").attr("data-navigation", "list").appendTo(s), c = $("<div>").attr("data-navigation", "hamburger").on("click", () => { $(c).toggleClass("is-active"), $(i).attr("data-navigation-toggle-open", function (t, e) { return $("body").toggleClass("block-overflow"), "true" == e ? null : "true" }) }).appendTo(s); for (let t = 0; t < 3; t++)$("<span>").addClass("line").appendTo(c); d.each((t, e) => { let a = $(e).html(), r = $(e).attr("href"), o = $("<li>"), l = $("<a>").attr("href", r).on("click", () => { "true" == $(i).attr("data-navigation-toggled") && $(c).click() }).appendTo(o); $("<div>").html(a).appendTo(l); n.append(o) }), $(i).children("div[data-navigation='items']").remove(); let p = 0; n.children().each((t, e) => p += $(e).outerWidth()); let u = $(l).outerWidth() + p; $(window).on("resize", () => { $(window).outerWidth() - 50 <= u ? $(i).attr("data-navigation-toggled", !0) : ($(i).removeAttr("data-navigation-toggled").removeAttr("data-navigation-toggle-open"), $(c).removeClass("is-active"), $("body").removeClass("block-overflow")) }), $(document).scroll() } } else $(i).remove() }) } check() { this.setup() } } class Footer { constructor() { this.setup() } setup() { $("footer[data-default='footer']").each((t, e) => { if (0 == t) { if ("true" != $(e).attr("data-footer-generated")) { $(e).attr("data-footer-generated", !0); let t = ""; try { t = footermsg } catch{ t = "<p>Copyright � " + (new Date).getFullYear() + ', WEBSITE BY <a href="#">Andreas Gutmann</a></p>' } $("<footer>").html(t).insertBefore($(e).children("footer")); let a = $(e).outerHeight(); $("body").css({ "min-height": "calc(100vh - " + a + "px)", "padding-bottom": a }) } } else $(e).remove() }) } check() { this.setup() } } class List { constructor() { this.setup() } setup() { let t = "data-list-val", e = "data-list-item"; $("input[data-default='list']").each((a, i) => { if (null != $(i).parents("[data-list='area']")[0]) return !0; let r = $(i).attr("data-list-use"); if (null != r && "" != r) { $(i).css("width", $(i).outerWidth()); let a = $("datalist#" + r), l = $("<div>").attr("data-list", "area").css({ height: $(i).outerHeight(), width: $(i).outerWidth() }).insertBefore(i).append(i), d = 2 * $(i).css("border-top-width").slice(0, -2), s = $("<div>").attr("data-list", "list").css("width", $(i).outerWidth() - d).appendTo(l); function o(a) { let i = $(s).children(); if (null == a) $(s).hide(), $(i).attr(e, "hidden"); else { $(s).show(); let r = !1, o = []; i.each((i, l) => { 0 == $(l).attr(t).indexOf(a) ? ($(l).attr(e, "shown").css("border-bottom-width", "1px"), r = !0, o.push(i)) : $(l).attr(e, "hidden") }), r || $(s).hide(), $(i[o[o.length - 1]]).css("border-bottom-width", "0px") } } $(a).children().each((a, r) => { let l = $(r).val(); $("<div>").attr(t, l).attr(e, "hidden").html(l).css({ height: $(i).outerHeight(), width: $(i).outerWidth() - 5 - d }).on("mousedown", () => { $(i).val(l), o() }).appendTo(s) }), $(a).remove(), $(i).on("keyup", () => { let t = $(i).val(); $(s).hide(), o(t) }), $(i).on("blur", () => { o() }), $(i).on("focus", () => { o($(i).val()) }) } }) } check() { this.setup() } } class Section { constructor() { this.alreadySearched = !1, this.clickedItem = !0, this.listener = null, this.useableElements = [], this.setup() } setup() { let t = ["left", "middle", "right"], e = ["light", "dark"]; if ($("[data-default='section']").each((a, i) => { if (null != $(i).children("[data-section='area']")[0]) return !0; let r = $(i).attr("data-section-heading"), o = $(i).attr("data-section-heading-position"), l = $(i).attr("data-section-wave"), d = $(i).attr("data-section-style"), s = e[0]; -1 == e.indexOf(d) && (d = e[0]), 0 == a ? l = !1 : s = $($("[data-default='section']")[a - 1]).css("background-color"); let n = { left: '<svg viewBox="0 0 500 150" preserveAspectRatio="none" data-section="svg"><path d="M-61.23,191.94 C93.40,-66.61 205.13,160.63 542.61,144.56 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: ' + s + '"></path></svg>', middle: '<svg viewBox="0 0 500 150" preserveAspectRatio="none" data-section="svg"><path d="M-10.44,154.44 C207.38,8.39 349.03,74.89 534.71,170.22 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: ' + s + '"></path></svg>', right: '<svg viewBox="0 0 500 150" preserveAspectRatio="none" data-section="svg"><path d="M-60.10,136.67 C120.48,190.09 292.04,-21.20 533.57,108.25 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: ' + s + '"></path></svg>' }; if ($(i).css("background-color", "var(--" + d + ")"), -1 == t.indexOf(o) && (o = t[0]), "true" != l && (l = !1), null != r && "" != r) { let t = this.getCorrectHeading(r); $(i).attr("id", t), this.useableElements.push(i); let a = null; switch (o) { case "right": a = "flex-end"; break; case "middle": a = "center"; break; case "left": default: a = "flex-start" }let s = $("<div>").attr("data-section", "area").css("justify-content", a); if (l) { let t = $("<div>").attr("data-section-wave", "box"), e = n[o]; t.append(e), s.append(t) } let c = $("<div>").attr("data-section", "box").appendTo(s), p = $("<h1>").attr("data-section", "heading").text(r).css("color", "var(--" + (d == e[0] ? e[1] : e[0]) + ")").appendTo(c); $("<span>").attr("data-section", "block").appendTo(p), $("<span>").attr("data-section", "background").text(r).appendTo(c), $("<div>").attr({ title: "Pfad kopieren", "data-tooltip-placement": "right" }).attr("data-section", "copier").text("#").on("click", e => { let a = window.location.origin + "#" + t, i = $("<input>").appendTo($("body")).val(a).select(); document.execCommand("copy"), i.remove() }).appendTo(p); $(i).prepend(s) } }), $("a").on("click", t => { this.clickedItem = !0; let e = $(t.currentTarget).attr("href"); this.scrollTo($(e)[0]), setTimeout(() => { this.clickedItem = !1 }, 950), t.preventDefault() }), null != this.listener && (this.listener.off("scroll resize"), this.listener = null), this.listener = $(window).on("scroll resize", () => { if (!this.clickedItem) { let t = null, e = $("nav").outerHeight(); null == e && (e = 0), $($(this.useableElements).get().reverse()).each((a, i) => { let r = $(i).offset().top, o = r + $(i).outerHeight(), l = $(window).scrollTop(), d = l + $(window).height(); o > l + e && r < d && (t = i) }); let a = $(t).attr("id"); history.replaceState({}, "", "#" + a) } }), !this.alreadySearched) { let t = $("nav").outerHeight(); null == t && (t = 0); let e = window.location.hash, a = $(this.useableElements).filter((t, a) => { let i = $(a).attr("id"); if (e == "#" + i) return !0 }); a.length > 0 ? this.scrollTo(a[0]) : (this.scrollTo(null), history.replaceState({}, "", "#")), this.clickedItem = !1, this.alreadySearched = !0 } } check() { this.setup() } getCorrectHeading(t) { return t = t.toLowerCase().replaceAll(" ", "-") } scrollTo(t) { $("body").stop().animate({ scrollTop: null == t ? 0 : $(t).offset().top }, 1e3) } }