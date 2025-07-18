var Stats = function () {
    var e = Date.now(),
        t = e,
        i = 0,
        n = 1 / 0,
        r = 0,
        s = 0,
        o = 1 / 0,
        a = 0,
        l = 0,
        h = 0,
        c = document.createElement("div");
    c.id = "stats", c.addEventListener("mousedown", function (e) {
        e.preventDefault(), v(++h % 2)
    }, !1), c.style.cssText = "width:80px;opacity:0.9;cursor:pointer";
    var u = document.createElement("div");
    u.id = "fps", u.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#002", c.appendChild(u);
    var d = document.createElement("div");
    d.id = "fpsText", d.style.cssText = "color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px", d.innerHTML = "FPS", u.appendChild(d);
    var p = document.createElement("div");
    for (p.id = "fpsGraph", p.style.cssText = "position:relative;width:74px;height:30px;background-color:#0ff", u.appendChild(p); 74 > p.children.length;) {
        var f = document.createElement("span");
        f.style.cssText = "width:1px;height:30px;float:left;background-color:#113", p.appendChild(f)
    }
    var m = document.createElement("div");
    m.id = "ms", m.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#020;display:none", c.appendChild(m);
    var g = document.createElement("div");
    g.id = "msText", g.style.cssText = "color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px", g.innerHTML = "MS", m.appendChild(g);
    var y = document.createElement("div");
    for (y.id = "msGraph", y.style.cssText = "position:relative;width:74px;height:30px;background-color:#0f0", m.appendChild(y); 74 > y.children.length;) {
        var f = document.createElement("span");
        f.style.cssText = "width:1px;height:30px;float:left;background-color:#131", y.appendChild(f)
    }
    var v = function (e) {
            switch (h = e) {
                case 0:
                    u.style.display = "block", m.style.display = "none";
                    break;
                case 1:
                    u.style.display = "none", m.style.display = "block"
            }
        },
        b = function (e, t) {
            var i = e.appendChild(e.firstChild);
            i.style.height = t + "px"
        };
    return {
        REVISION: 11,
        domElement: c,
        setMode: v,
        begin: function () {
            e = Date.now()
        },
        end: function () {
            var h = Date.now();
            return i = h - e, n = Math.min(n, i), r = Math.max(r, i), g.textContent = i + " MS (" + n + "-" + r + ")", b(y, Math.min(30, 30 - 30 * (i / 200))), l++, h > t + 1e3 && (s = Math.round(1e3 * l / (h - t)), o = Math.min(o, s), a = Math.max(a, s), d.textContent = s + " FPS (" + o + "-" + a + ")", b(p, Math.min(30, 30 - 30 * (s / 100))), t = h, l = 0), h
        },
        update: function () {
            e = this.end()
        }
    }
};