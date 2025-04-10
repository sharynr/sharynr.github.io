/*

    This files uses parts of the LazyLoad library and the headJSlibrary.

    LazyLoad makes it easy and painless to lazily load one or more external
    JavaScript or CSS files on demand either during or after the rendering of a web
    page.
    Supported browsers include Firefox 2+, IE6+, Safari 3+ (including Mobile
    Safari), Google Chrome, and Opera 9+. Other browsers may or may not work and
    are not officially supported.
    Visit https://github.com/rgrove/lazyload/ for more info.
    Copyright (c) 2011 Ryan Grove <ryan@wonko.com>
    All rights reserved.
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the 'Software'), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 HeadJS- headJS.com
*/
cpXHRJSLoader = function(k) {
    function l(d, b) {
        var c = k.createElement(d),
            f;
        for (f in b) b.hasOwnProperty(f) && c.setAttribute(f, b[f]);
        return c
    }

    function m() {
        var d = n,
            b;
        d && (b = d.d, d = d.a, d.shift(), h = 0, d.length || (b && b.call(), n = null, o.length && load()))
    }

    function r(d) {
        var b;
        try {
            b = !!d.sheet.cssRules
        } catch (c) {
            h += 1;
            200 > h ? setTimeout(function() {
                r(d)
            }, 50) : b && m();
            return
        }
        m()
    }

    function s() {
        var d = n,
            b;
        if (d) {
            for (b = t.length; 0 <= --b;)
                if (t[b].href === d.a[0]) {
                    m();
                    break
                } h += 1;
            d && (200 > h ? setTimeout(s, 50) : m())
        }
    }

    function u() {
        function d(a) {
            a =
                l("script", {
                    src: a,
                    async: !1
                });
            j.appendChild(a);
            ++e;
            e >= b.length || (e == b.length - 1 ? b[e].call() : d(b[e]))
        }
        for (var b = [], c = 0; c < arguments.length; c++)
            if ("[object Array]" === Object.prototype.toString.call(arguments[c]))
                for (var f = arguments[c], a = 0; a < f.length; a++) b.push(f[a]);
            else b.push(arguments[c]);
        var e = 0;
        d(b[0])
    }
    var i, j, n, h = 0,
        o = [],
        t = k.styleSheets;
    eval('(function(f,w){function m(){}function g(a,b){if(a){"object"===typeof a&&(a=[].slice.call(a));for(var c=0,d=a.length;c<d;c++)b.call(a,a[c],c)}}function v(a,b){var c=Object.prototype.toString.call(b).slice(8,-1);return b!==w&&null!==b&&c===a}function k(a){return v("Function",a)}function h(a){a=a||m;a._done||(a(),a._done=1)}function n(a){var b={};if("object"===typeof a)for(var c in a)a[c]&&(b={name:c,url:a[c]});else b=a.split("/"),b=b[b.length-1],c=b.indexOf("?"),b={name:-1!==c?b.substring(0,c):b,url:a};return(a=p[b.name])&&a.url===b.url?a:p[b.name]=b}function q(a){var a=a||p,b;for(b in a)if(a.hasOwnProperty(b)&&a[b].state!==r)return!1;return!0}function s(a,b){b=b||m;a.state===r?b():a.state===x?d.ready(a.name,b):a.state===y?a.onpreload.push(function(){s(a,b)}):(a.state=x,z(a,function(){a.state=r;b();g(l[a.name],function(a){h(a)});j&&q()&&g(l.ALL,function(a){h(a)})}))}function z(a,b){var b=b||m,c;/.css[^.]*$/.test(a.url)?(c=e.createElement("link"),c.type="text/"+(a.type||"css"),c.rel="stylesheet",c.href=a.url):(c=e.createElement("script"),c.type="text/"+(a.type||"javascript"),c.src=a.url);c.onload=c.onreadystatechange=function(a){a=a||f.event;if("load"===a.type||/loaded|complete/.test(c.readyState)&&(!e.documentMode||9>e.documentMode))c.onload=c.onreadystatechange=c.onerror=null,b()};c.onerror=function(){c.onload=c.onreadystatechange=c.onerror=null;b()};c.async=!1;c.defer=!1;var d=e.head||e.getElementsByTagName("head")[0];d.insertBefore(c,d.lastChild)}function i(){e.body?j||(j=!0,g(A,function(a){h(a)})):(f.clearTimeout(d.readyTimeout),d.readyTimeout=f.setTimeout(i,50))}function t(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",t,!1),i()):"complete"===e.readyState&&(e.detachEvent("onreadystatechange",t),i())}var e=f.document,A=[],B=[],l={},p={},E="async"in e.createElement("script")||"MozAppearance"in e.documentElement.style||f.opera,C,j,D=f.head_conf&&f.head_conf.head||"head",d=f[D]=f[D]||function(){d.ready.apply(null,arguments)},y=1,x=3,r=4;d.load=E?function(){var a=arguments,b=a[a.length-1],c={};k(b)||(b=null);g(a,function(d,e){d!==b&&(d=n(d),c[d.name]=d,s(d,b&&e===a.length-2?function(){q(c)&&h(b)}:null))});return d}:function(){var a=arguments,b=[].slice.call(a,1),c=b[0];if(!C)return B.push(function(){d.load.apply(null,a)}),d;c?(g(b,function(a){if(!k(a)){var b=n(a);b.state===w&&(b.state=y,b.onpreload=[],z({url:b.url,type:"cache"},function(){b.state=2;g(b.onpreload,function(a){a.call()})}))}}),s(n(a[0]),k(c)?c:function(){d.load.apply(null,b)})):s(n(a[0]));return d};d.js=d.load;d.test=function(a,b,c,e){a="object"===typeof a?a:{test:a,success:b?v("Array",b)?b:[b]:!1,failure:c?v("Array",c)?c:[c]:!1,callback:e||m};(b=!!a.test)&&a.success?(a.success.push(a.callback),d.load.apply(null,a.success)):!b&&a.failure?(a.failure.push(a.callback),d.load.apply(null,a.failure)):e();return d};d.ready=function(a,b){if(a===e)return j?h(b):A.push(b),d;k(a)&&(b=a,a="ALL");if("string"!==typeof a||!k(b))return d;var c=p[a];if(c&&c.state===r||"ALL"===a&&q()&&j)return h(b),d;(c=l[a])?c.push(b):l[a]=[b];return d};d.ready(e,function(){q()&&g(l.ALL,function(a){h(a)});d.feature&&d.feature("domloaded",!0)});if("complete"===e.readyState)i();else if(e.addEventListener)e.addEventListener("DOMContentLoaded",t,!1),f.addEventListener("load",i,!1);else{e.attachEvent("onreadystatechange",t);f.attachEvent("onload",i);var u=!1;try{u=null==f.frameElement&&e.documentElement}catch(F){}u&&u.doScroll&&function b(){if(!j){try{u.doScroll("left")}catch(c){f.clearTimeout(d.readyTimeout);d.readyTimeout=f.setTimeout(b,50);return}i()}}()}setTimeout(function(){C=!0;g(B,function(b){b()})},300)})(window);');
    return {
        css: function(d, b) {
            function c() {
                m()
            }
            var f = [],
                a, e, g, p, q, h;
            i || (a = navigator.userAgent, i = {
                async: !0 === k.createElement("script").async
            }, (i.c = /AppleWebKit\//.test(a)) || (i.e = /MSIE/.test(a)) || (i.opera = /Opera/.test(a)) || (i.b = /Gecko\//.test(a)) || (i.f = !0));
            d && (d = "string" === typeof d ? [d] : d.concat(), o.push({
                a: d,
                d: b
            }));
            if (!n && (p = n = o.shift())) {
                j || (j = k.head || k.getElementsByTagName("head")[0]);
                q = p.a;
                a = 0;
                for (e = q.length; a < e; ++a) h = q[a], g = i.b ? l("style") : l("link", {
                    href: h,
                    rel: "stylesheet"
                }), g.setAttribute("charset",
                    "utf-8"), i.b || i.c ? i.c ? (p.a[a] = g.href, s()) : (g.innerHTML = '@import "' + h + '";', r(g)) : g.onload = g.onerror = c, f.push(g);
                a = 0;
                for (e = f.length; a < e; ++a) j.appendChild(f[a])
            }
        },
        js: function() {
            function d() {
                ++g;
                g >= c.length || (g == c.length - 1 ? c[g].call() : b(c[g]))
            }

            function b(b) {
                b = l("script", {
                    src: b,
                    async: !1
                });
                b.onload = d;
                j.appendChild(b)
            }
            for (var c = [], f = 0; f < arguments.length; f++)
                if ("[object Array]" === Object.prototype.toString.call(arguments[f]))
                    for (var a = arguments[f], e = 0; e < a.length; e++) c.push(a[e]);
                else c.push(arguments[f]);
            var g = 0;
            j || (j = k.head || k.getElementsByTagName("head")[0]);
            b(c[0])
        },
        loadImagesJSON: function() {
            function d(a) {
                var c = new XMLHttpRequest;
                c.open("GET", a, !0);
                c.onreadystatechange = function() {
                    if (4 == c.readyState && 200 === c.status) {
                        ++e;
                        var a = c.responseText;
                        0 == a.length ? e == b.length - 1 && b[e].call(null, "") : (a = a.slice(54, a.length - 1), a = JSON.parse(a), e >= b.length || (e == b.length - 1 ? b[e].call(null, a) : d(b[e])))
                    }
                };
                c.send()
            }
            if ("file" == window.location.protocol.substr(0, 4)) u.apply(null, arguments);
            else {
                for (var b = [], c = 0; c < arguments.length; c++)
                    if ("[object Array]" ===
                        Object.prototype.toString.call(arguments[c]))
                        for (var f = arguments[c], a = 0; a < f.length; a++) b.push(f[a]);
                    else b.push(arguments[c]);
                var e = 0;
                d(b[0])
            }
        },
        preloadURLs: function(d) {
            function b() {
                h++;
                h >= f.length || (h == f.length - 1 ? f[h].call() : c(f[h]))
            }

            function c(a) {
                a = l("script", {
                    src: a,
                    async: !1
                });
                j.appendChild(a);
                a.onload = b
            }
            if ("file" == window.location.protocol.substr(0, 4)) {
                for (var f = [], a = 0; a < arguments.length; a++)
                    if ("[object Array]" === Object.prototype.toString.call(arguments[a]))
                        for (var e = arguments[a], g = 0; g < e.length; g++) f.push(e[g]);
                    else f.push(arguments[a]);
                var h = 0;
                c(d[0])
            } else
                for (a = 0; a < d.length; a++) e = new XMLHttpRequest, e.open("GET", d[a], !0), e.onreadystatechange = function() {}, e.send()
        }
    }
}(window.document);