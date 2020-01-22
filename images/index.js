!(function(A) {
  var e = {};
  function t(n) {
    if (e[n]) return e[n].exports;
    var r = (e[n] = { i: n, l: !1, exports: {} });
    return A[n].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
  }
  (t.m = A),
    (t.c = e),
    (t.d = function(A, e, n) {
      t.o(A, e) ||
        Object.defineProperty(A, e, {
          configurable: !1,
          enumerable: !0,
          get: n,
        });
    }),
    (t.n = function(A) {
      var e =
        A && A.__esModule
          ? function() {
              return A.default;
            }
          : function() {
              return A;
            };
      return t.d(e, 'a', e), e;
    }),
    (t.o = function(A, e) {
      return Object.prototype.hasOwnProperty.call(A, e);
    }),
    (t.p = ''),
    t((t.s = 29));
})([
  function(A, e) {
    var t,
      n,
      r = (A.exports = {});
    function o() {
      throw new Error('setTimeout has not been defined');
    }
    function i() {
      throw new Error('clearTimeout has not been defined');
    }
    function a(A) {
      if (t === setTimeout) return setTimeout(A, 0);
      if ((t === o || !t) && setTimeout)
        return (t = setTimeout), setTimeout(A, 0);
      try {
        return t(A, 0);
      } catch (e) {
        try {
          return t.call(null, A, 0);
        } catch (e) {
          return t.call(this, A, 0);
        }
      }
    }
    !(function() {
      try {
        t = 'function' == typeof setTimeout ? setTimeout : o;
      } catch (A) {
        t = o;
      }
      try {
        n = 'function' == typeof clearTimeout ? clearTimeout : i;
      } catch (A) {
        n = i;
      }
    })();
    var s,
      c = [],
      u = !1,
      l = -1;
    function B() {
      u &&
        s &&
        ((u = !1), s.length ? (c = s.concat(c)) : (l = -1), c.length && d());
    }
    function d() {
      if (!u) {
        var A = a(B);
        u = !0;
        for (var e = c.length; e; ) {
          for (s = c, c = []; ++l < e; ) s && s[l].run();
          (l = -1), (e = c.length);
        }
        (s = null),
          (u = !1),
          (function(A) {
            if (n === clearTimeout) return clearTimeout(A);
            if ((n === i || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(A);
            try {
              n(A);
            } catch (e) {
              try {
                return n.call(null, A);
              } catch (e) {
                return n.call(this, A);
              }
            }
          })(A);
      }
    }
    function g(A, e) {
      (this.fun = A), (this.array = e);
    }
    function f() {}
    (r.nextTick = function(A) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
      c.push(new g(A, e)), 1 !== c.length || u || a(d);
    }),
      (g.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (r.title = 'browser'),
      (r.browser = !0),
      (r.env = {}),
      (r.argv = []),
      (r.version = ''),
      (r.versions = {}),
      (r.on = f),
      (r.addListener = f),
      (r.once = f),
      (r.off = f),
      (r.removeListener = f),
      (r.removeAllListeners = f),
      (r.emit = f),
      (r.prependListener = f),
      (r.prependOnceListener = f),
      (r.listeners = function(A) {
        return [];
      }),
      (r.binding = function(A) {
        throw new Error('process.binding is not supported');
      }),
      (r.cwd = function() {
        return '/';
      }),
      (r.chdir = function(A) {
        throw new Error('process.chdir is not supported');
      }),
      (r.umask = function() {
        return 0;
      });
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        return function(A, e) {
          if (Array.isArray(A)) return A;
          if (Symbol.iterator in Object(A))
            return (function(A, e) {
              var t = [],
                n = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var i, a = A[Symbol.iterator]();
                  !(n = (i = a.next()).done) &&
                  (t.push(i.value), !e || t.length !== e);
                  n = !0
                );
              } catch (A) {
                (r = !0), (o = A);
              } finally {
                try {
                  !n && a.return && a.return();
                } finally {
                  if (r) throw o;
                }
              }
              return t;
            })(A, e);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance',
          );
        };
      })(),
      r = (function() {
        function A(A, e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(A, n.key, n);
          }
        }
        return function(e, t, n) {
          return t && A(e.prototype, t), n && A(e, n), e;
        };
      })();
    var o = /^#([a-f0-9]{3})$/i,
      i = function(A) {
        var e = A.match(o);
        return (
          !!e && [
            parseInt(e[1][0] + e[1][0], 16),
            parseInt(e[1][1] + e[1][1], 16),
            parseInt(e[1][2] + e[1][2], 16),
            null,
          ]
        );
      },
      a = /^#([a-f0-9]{6})$/i,
      s = function(A) {
        var e = A.match(a);
        return (
          !!e && [
            parseInt(e[1].substring(0, 2), 16),
            parseInt(e[1].substring(2, 4), 16),
            parseInt(e[1].substring(4, 6), 16),
            null,
          ]
        );
      },
      c = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
      u = function(A) {
        var e = A.match(c);
        return !!e && [Number(e[1]), Number(e[2]), Number(e[3]), null];
      },
      l = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/,
      B = function(A) {
        var e = A.match(l);
        return (
          !!(e && e.length > 4) && [
            Number(e[1]),
            Number(e[2]),
            Number(e[3]),
            Number(e[4]),
          ]
        );
      },
      d = function(A) {
        return [
          Math.min(A[0], 255),
          Math.min(A[1], 255),
          Math.min(A[2], 255),
          A.length > 3 ? A[3] : null,
        ];
      },
      g = function(A) {
        var e = h[A.toLowerCase()];
        return e || !1;
      },
      f = (function() {
        function A(e) {
          !(function(A, e) {
            if (!(A instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, A);
          var t = Array.isArray(e)
              ? d(e)
              : i(e) || u(e) || B(e) || g(e) || s(e) || [0, 0, 0, null],
            r = n(t, 4),
            o = r[0],
            a = r[1],
            c = r[2],
            l = r[3];
          (this.r = o), (this.g = a), (this.b = c), (this.a = l);
        }
        return (
          r(A, [
            {
              key: 'isTransparent',
              value: function() {
                return 0 === this.a;
              },
            },
            {
              key: 'toString',
              value: function() {
                return null !== this.a && 1 !== this.a
                  ? 'rgba(' +
                      this.r +
                      ',' +
                      this.g +
                      ',' +
                      this.b +
                      ',' +
                      this.a +
                      ')'
                  : 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
              },
            },
          ]),
          A
        );
      })();
    e.default = f;
    var h = {
      transparent: [0, 0, 0, 0],
      aliceblue: [240, 248, 255, null],
      antiquewhite: [250, 235, 215, null],
      aqua: [0, 255, 255, null],
      aquamarine: [127, 255, 212, null],
      azure: [240, 255, 255, null],
      beige: [245, 245, 220, null],
      bisque: [255, 228, 196, null],
      black: [0, 0, 0, null],
      blanchedalmond: [255, 235, 205, null],
      blue: [0, 0, 255, null],
      blueviolet: [138, 43, 226, null],
      brown: [165, 42, 42, null],
      burlywood: [222, 184, 135, null],
      cadetblue: [95, 158, 160, null],
      chartreuse: [127, 255, 0, null],
      chocolate: [210, 105, 30, null],
      coral: [255, 127, 80, null],
      cornflowerblue: [100, 149, 237, null],
      cornsilk: [255, 248, 220, null],
      crimson: [220, 20, 60, null],
      cyan: [0, 255, 255, null],
      darkblue: [0, 0, 139, null],
      darkcyan: [0, 139, 139, null],
      darkgoldenrod: [184, 134, 11, null],
      darkgray: [169, 169, 169, null],
      darkgreen: [0, 100, 0, null],
      darkgrey: [169, 169, 169, null],
      darkkhaki: [189, 183, 107, null],
      darkmagenta: [139, 0, 139, null],
      darkolivegreen: [85, 107, 47, null],
      darkorange: [255, 140, 0, null],
      darkorchid: [153, 50, 204, null],
      darkred: [139, 0, 0, null],
      darksalmon: [233, 150, 122, null],
      darkseagreen: [143, 188, 143, null],
      darkslateblue: [72, 61, 139, null],
      darkslategray: [47, 79, 79, null],
      darkslategrey: [47, 79, 79, null],
      darkturquoise: [0, 206, 209, null],
      darkviolet: [148, 0, 211, null],
      deeppink: [255, 20, 147, null],
      deepskyblue: [0, 191, 255, null],
      dimgray: [105, 105, 105, null],
      dimgrey: [105, 105, 105, null],
      dodgerblue: [30, 144, 255, null],
      firebrick: [178, 34, 34, null],
      floralwhite: [255, 250, 240, null],
      forestgreen: [34, 139, 34, null],
      fuchsia: [255, 0, 255, null],
      gainsboro: [220, 220, 220, null],
      ghostwhite: [248, 248, 255, null],
      gold: [255, 215, 0, null],
      goldenrod: [218, 165, 32, null],
      gray: [128, 128, 128, null],
      green: [0, 128, 0, null],
      greenyellow: [173, 255, 47, null],
      grey: [128, 128, 128, null],
      honeydew: [240, 255, 240, null],
      hotpink: [255, 105, 180, null],
      indianred: [205, 92, 92, null],
      indigo: [75, 0, 130, null],
      ivory: [255, 255, 240, null],
      khaki: [240, 230, 140, null],
      lavender: [230, 230, 250, null],
      lavenderblush: [255, 240, 245, null],
      lawngreen: [124, 252, 0, null],
      lemonchiffon: [255, 250, 205, null],
      lightblue: [173, 216, 230, null],
      lightcoral: [240, 128, 128, null],
      lightcyan: [224, 255, 255, null],
      lightgoldenrodyellow: [250, 250, 210, null],
      lightgray: [211, 211, 211, null],
      lightgreen: [144, 238, 144, null],
      lightgrey: [211, 211, 211, null],
      lightpink: [255, 182, 193, null],
      lightsalmon: [255, 160, 122, null],
      lightseagreen: [32, 178, 170, null],
      lightskyblue: [135, 206, 250, null],
      lightslategray: [119, 136, 153, null],
      lightslategrey: [119, 136, 153, null],
      lightsteelblue: [176, 196, 222, null],
      lightyellow: [255, 255, 224, null],
      lime: [0, 255, 0, null],
      limegreen: [50, 205, 50, null],
      linen: [250, 240, 230, null],
      magenta: [255, 0, 255, null],
      maroon: [128, 0, 0, null],
      mediumaquamarine: [102, 205, 170, null],
      mediumblue: [0, 0, 205, null],
      mediumorchid: [186, 85, 211, null],
      mediumpurple: [147, 112, 219, null],
      mediumseagreen: [60, 179, 113, null],
      mediumslateblue: [123, 104, 238, null],
      mediumspringgreen: [0, 250, 154, null],
      mediumturquoise: [72, 209, 204, null],
      mediumvioletred: [199, 21, 133, null],
      midnightblue: [25, 25, 112, null],
      mintcream: [245, 255, 250, null],
      mistyrose: [255, 228, 225, null],
      moccasin: [255, 228, 181, null],
      navajowhite: [255, 222, 173, null],
      navy: [0, 0, 128, null],
      oldlace: [253, 245, 230, null],
      olive: [128, 128, 0, null],
      olivedrab: [107, 142, 35, null],
      orange: [255, 165, 0, null],
      orangered: [255, 69, 0, null],
      orchid: [218, 112, 214, null],
      palegoldenrod: [238, 232, 170, null],
      palegreen: [152, 251, 152, null],
      paleturquoise: [175, 238, 238, null],
      palevioletred: [219, 112, 147, null],
      papayawhip: [255, 239, 213, null],
      peachpuff: [255, 218, 185, null],
      peru: [205, 133, 63, null],
      pink: [255, 192, 203, null],
      plum: [221, 160, 221, null],
      powderblue: [176, 224, 230, null],
      purple: [128, 0, 128, null],
      rebeccapurple: [102, 51, 153, null],
      red: [255, 0, 0, null],
      rosybrown: [188, 143, 143, null],
      royalblue: [65, 105, 225, null],
      saddlebrown: [139, 69, 19, null],
      salmon: [250, 128, 114, null],
      sandybrown: [244, 164, 96, null],
      seagreen: [46, 139, 87, null],
      seashell: [255, 245, 238, null],
      sienna: [160, 82, 45, null],
      silver: [192, 192, 192, null],
      skyblue: [135, 206, 235, null],
      slateblue: [106, 90, 205, null],
      slategray: [112, 128, 144, null],
      slategrey: [112, 128, 144, null],
      snow: [255, 250, 250, null],
      springgreen: [0, 255, 127, null],
      steelblue: [70, 130, 180, null],
      tan: [210, 180, 140, null],
      teal: [0, 128, 128, null],
      thistle: [216, 191, 216, null],
      tomato: [255, 99, 71, null],
      turquoise: [64, 224, 208, null],
      violet: [238, 130, 238, null],
      wheat: [245, 222, 179, null],
      white: [255, 255, 255, null],
      whitesmoke: [245, 245, 245, null],
      yellow: [255, 255, 0, null],
      yellowgreen: [154, 205, 50, null],
    };
    e.TRANSPARENT = new f([0, 0, 0, 0]);
  },
  function(A, e, t) {
    'use strict';
    (function(A) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.parseBoundCurves = e.calculatePaddingBoxPath = e.calculateBorderBoxPath = e.parsePathForBorder = e.parseDocumentSize = e.calculateContentBox = e.calculatePaddingBox = e.parseBounds = e.Bounds = void 0);
      var n = (function() {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(A, n.key, n);
            }
          }
          return function(e, t, n) {
            return t && A(e.prototype, t), n && A(e, n), e;
          };
        })(),
        r = i(t(8)),
        o = i(t(42));
      function i(A) {
        return A && A.__esModule ? A : { default: A };
      }
      var a = (e.Bounds = (function() {
          function A(e, t, n, r) {
            !(function(A, e) {
              if (!(A instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, A),
              (this.left = e),
              (this.top = t),
              (this.width = n),
              (this.height = r);
          }
          return (
            n(A, null, [
              {
                key: 'fromClientRect',
                value: function(e, t, n) {
                  return new A(e.left + t, e.top + n, e.width, e.height);
                },
              },
            ]),
            A
          );
        })()),
        s =
          ((e.parseBounds = function(A, e, t) {
            return a.fromClientRect(A.getBoundingClientRect(), e, t);
          }),
          (e.calculatePaddingBox = function(A, e) {
            return new a(
              A.left + e[3].borderWidth,
              A.top + e[0].borderWidth,
              A.width - (e[1].borderWidth + e[3].borderWidth),
              A.height - (e[0].borderWidth + e[2].borderWidth),
            );
          }),
          (e.calculateContentBox = function(A, e, t) {
            var n = e[0].value,
              r = e[1].value,
              o = e[2].value,
              i = e[3].value;
            return new a(
              A.left + i + t[3].borderWidth,
              A.top + n + t[0].borderWidth,
              A.width - (t[1].borderWidth + t[3].borderWidth + i + r),
              A.height - (t[0].borderWidth + t[2].borderWidth + n + o),
            );
          }),
          (e.parseDocumentSize = function(e) {
            var t = e.body,
              n = e.documentElement;
            if (!t || !n)
              throw new Error(
                'production' !== A.env.NODE_ENV
                  ? 'Unable to get document size'
                  : '',
              );
            var r = Math.max(
                Math.max(t.scrollWidth, n.scrollWidth),
                Math.max(t.offsetWidth, n.offsetWidth),
                Math.max(t.clientWidth, n.clientWidth),
              ),
              o = Math.max(
                Math.max(t.scrollHeight, n.scrollHeight),
                Math.max(t.offsetHeight, n.offsetHeight),
                Math.max(t.clientHeight, n.clientHeight),
              );
            return new a(0, 0, r, o);
          }),
          (e.parsePathForBorder = function(A, e) {
            switch (e) {
              case 0:
                return s(
                  A.topLeftOuter,
                  A.topLeftInner,
                  A.topRightOuter,
                  A.topRightInner,
                );
              case 1:
                return s(
                  A.topRightOuter,
                  A.topRightInner,
                  A.bottomRightOuter,
                  A.bottomRightInner,
                );
              case 2:
                return s(
                  A.bottomRightOuter,
                  A.bottomRightInner,
                  A.bottomLeftOuter,
                  A.bottomLeftInner,
                );
              case 3:
              default:
                return s(
                  A.bottomLeftOuter,
                  A.bottomLeftInner,
                  A.topLeftOuter,
                  A.topLeftInner,
                );
            }
          }),
          function(A, e, t, n) {
            var r = [];
            return (
              A instanceof o.default ? r.push(A.subdivide(0.5, !1)) : r.push(A),
              t instanceof o.default ? r.push(t.subdivide(0.5, !0)) : r.push(t),
              n instanceof o.default
                ? r.push(n.subdivide(0.5, !0).reverse())
                : r.push(n),
              e instanceof o.default
                ? r.push(e.subdivide(0.5, !1).reverse())
                : r.push(e),
              r
            );
          }),
        c =
          ((e.calculateBorderBoxPath = function(A) {
            return [
              A.topLeftOuter,
              A.topRightOuter,
              A.bottomRightOuter,
              A.bottomLeftOuter,
            ];
          }),
          (e.calculatePaddingBoxPath = function(A) {
            return [
              A.topLeftInner,
              A.topRightInner,
              A.bottomRightInner,
              A.bottomLeftInner,
            ];
          }),
          (e.parseBoundCurves = function(A, e, t) {
            var n = t[c.TOP_LEFT][0].getAbsoluteValue(A.width),
              o = t[c.TOP_LEFT][1].getAbsoluteValue(A.height),
              i = t[c.TOP_RIGHT][0].getAbsoluteValue(A.width),
              a = t[c.TOP_RIGHT][1].getAbsoluteValue(A.height),
              s = t[c.BOTTOM_RIGHT][0].getAbsoluteValue(A.width),
              l = t[c.BOTTOM_RIGHT][1].getAbsoluteValue(A.height),
              B = t[c.BOTTOM_LEFT][0].getAbsoluteValue(A.width),
              d = t[c.BOTTOM_LEFT][1].getAbsoluteValue(A.height),
              g = [];
            g.push((n + i) / A.width),
              g.push((B + s) / A.width),
              g.push((o + d) / A.height),
              g.push((a + l) / A.height);
            var f = Math.max.apply(Math, g);
            f > 1 &&
              ((n /= f),
              (o /= f),
              (i /= f),
              (a /= f),
              (s /= f),
              (l /= f),
              (B /= f),
              (d /= f));
            var h = A.width - i,
              w = A.height - l,
              p = A.width - s,
              Q = A.height - d;
            return {
              topLeftOuter:
                n > 0 || o > 0
                  ? u(A.left, A.top, n, o, c.TOP_LEFT)
                  : new r.default(A.left, A.top),
              topLeftInner:
                n > 0 || o > 0
                  ? u(
                      A.left + e[3].borderWidth,
                      A.top + e[0].borderWidth,
                      Math.max(0, n - e[3].borderWidth),
                      Math.max(0, o - e[0].borderWidth),
                      c.TOP_LEFT,
                    )
                  : new r.default(
                      A.left + e[3].borderWidth,
                      A.top + e[0].borderWidth,
                    ),
              topRightOuter:
                i > 0 || a > 0
                  ? u(A.left + h, A.top, i, a, c.TOP_RIGHT)
                  : new r.default(A.left + A.width, A.top),
              topRightInner:
                i > 0 || a > 0
                  ? u(
                      A.left + Math.min(h, A.width + e[3].borderWidth),
                      A.top + e[0].borderWidth,
                      h > A.width + e[3].borderWidth ? 0 : i - e[3].borderWidth,
                      a - e[0].borderWidth,
                      c.TOP_RIGHT,
                    )
                  : new r.default(
                      A.left + A.width - e[1].borderWidth,
                      A.top + e[0].borderWidth,
                    ),
              bottomRightOuter:
                s > 0 || l > 0
                  ? u(A.left + p, A.top + w, s, l, c.BOTTOM_RIGHT)
                  : new r.default(A.left + A.width, A.top + A.height),
              bottomRightInner:
                s > 0 || l > 0
                  ? u(
                      A.left + Math.min(p, A.width - e[3].borderWidth),
                      A.top + Math.min(w, A.height + e[0].borderWidth),
                      Math.max(0, s - e[1].borderWidth),
                      l - e[2].borderWidth,
                      c.BOTTOM_RIGHT,
                    )
                  : new r.default(
                      A.left + A.width - e[1].borderWidth,
                      A.top + A.height - e[2].borderWidth,
                    ),
              bottomLeftOuter:
                B > 0 || d > 0
                  ? u(A.left, A.top + Q, B, d, c.BOTTOM_LEFT)
                  : new r.default(A.left, A.top + A.height),
              bottomLeftInner:
                B > 0 || d > 0
                  ? u(
                      A.left + e[3].borderWidth,
                      A.top + Q,
                      Math.max(0, B - e[3].borderWidth),
                      d - e[2].borderWidth,
                      c.BOTTOM_LEFT,
                    )
                  : new r.default(
                      A.left + e[3].borderWidth,
                      A.top + A.height - e[2].borderWidth,
                    ),
            };
          }),
          { TOP_LEFT: 0, TOP_RIGHT: 1, BOTTOM_RIGHT: 2, BOTTOM_LEFT: 3 }),
        u = function(A, e, t, n, i) {
          var a = ((Math.sqrt(2) - 1) / 3) * 4,
            s = t * a,
            u = n * a,
            l = A + t,
            B = e + n;
          switch (i) {
            case c.TOP_LEFT:
              return new o.default(
                new r.default(A, B),
                new r.default(A, B - u),
                new r.default(l - s, e),
                new r.default(l, e),
              );
            case c.TOP_RIGHT:
              return new o.default(
                new r.default(A, e),
                new r.default(A + s, e),
                new r.default(l, B - u),
                new r.default(l, B),
              );
            case c.BOTTOM_RIGHT:
              return new o.default(
                new r.default(l, e),
                new r.default(l, e + u),
                new r.default(A + s, B),
                new r.default(A, B),
              );
            case c.BOTTOM_LEFT:
            default:
              return new o.default(
                new r.default(l, B),
                new r.default(l - s, B),
                new r.default(A, e + u),
                new r.default(A, e),
              );
          }
        };
    }.call(e, t(0)));
  },
  function(A, e, t) {
    'use strict';
    (function(A) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.calculateLengthFromValueWithUnit = e.LENGTH_TYPE = void 0);
      var n,
        r = (function() {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(A, n.key, n);
            }
          }
          return function(e, t, n) {
            return t && A(e.prototype, t), n && A(e, n), e;
          };
        })(),
        o = t(4);
      (n = o) && n.__esModule;
      var i = (e.LENGTH_TYPE = { PX: 0, PERCENTAGE: 1 }),
        a = (function() {
          function e(t) {
            !(function(A, e) {
              if (!(A instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.type =
                '%' === t.substr(t.length - 1) ? i.PERCENTAGE : i.PX);
            var n = parseFloat(t);
            'production' !== A.env.NODE_ENV &&
              isNaN(n) &&
              console.error('Invalid value given for Length: "' + t + '"'),
              (this.value = isNaN(n) ? 0 : n);
          }
          return (
            r(
              e,
              [
                {
                  key: 'isPercentage',
                  value: function() {
                    return this.type === i.PERCENTAGE;
                  },
                },
                {
                  key: 'getAbsoluteValue',
                  value: function(A) {
                    return this.isPercentage()
                      ? A * (this.value / 100)
                      : this.value;
                  },
                },
              ],
              [
                {
                  key: 'create',
                  value: function(A) {
                    return new e(A);
                  },
                },
              ],
            ),
            e
          );
        })();
      e.default = a;
      e.calculateLengthFromValueWithUnit = function(A, e, t) {
        switch (t) {
          case 'px':
          case '%':
            return new a(e + t);
          case 'em':
          case 'rem':
            var n = new a(e);
            return (
              (n.value *=
                'em' === t
                  ? parseFloat(A.style.font.fontSize)
                  : (function A(e) {
                      var t = e.parent;
                      return t ? A(t) : parseFloat(e.style.font.fontSize);
                    })(A)),
              n
            );
          default:
            return new a('0');
        }
      };
    }.call(e, t(0)));
  },
  function(A, e, t) {
    'use strict';
    (function(A) {
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n,
        r = (function() {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(A, n.key, n);
            }
          }
          return function(e, t, n) {
            return t && A(e.prototype, t), n && A(e, n), e;
          };
        })(),
        o = t(1),
        i = (n = o) && n.__esModule ? n : { default: n },
        a = t(5),
        s = t(6),
        c = t(13),
        u = t(43),
        l = t(44),
        B = t(45),
        d = t(46),
        g = t(47),
        f = t(48),
        h = t(9),
        w = t(49),
        p = t(50),
        Q = t(20),
        U = t(19),
        m = t(21),
        C = t(12),
        F = t(51),
        E = t(22),
        v = t(52),
        b = t(53),
        _ = t(54),
        H = t(55),
        y = t(2),
        N = t(23),
        T = t(15);
      var I = ['INPUT', 'TEXTAREA', 'SELECT'],
        K = (function() {
          function e(t, n, r, o) {
            var a = this;
            !(function(A, e) {
              if (!(A instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.parent = n),
              (this.tagName = t.tagName),
              (this.index = o),
              (this.childNodes = []),
              (this.listItems = []),
              'number' == typeof t.start && (this.listStart = t.start);
            var K = t.ownerDocument.defaultView,
              O = K.pageXOffset,
              L = K.pageYOffset,
              M = K.getComputedStyle(t, null),
              D = (0, l.parseDisplay)(M.display),
              x = 'radio' === t.type || 'checkbox' === t.type,
              R = (0, m.parsePosition)(M.position);
            if (
              ((this.style = {
                background: x
                  ? N.INPUT_BACKGROUND
                  : (0, s.parseBackground)(M, r),
                border: x ? N.INPUT_BORDERS : (0, c.parseBorder)(M),
                borderRadius:
                  (t instanceof K.HTMLInputElement ||
                    t instanceof HTMLInputElement) &&
                  x
                    ? (0, N.getInputBorderRadius)(t)
                    : (0, u.parseBorderRadius)(M),
                color: x ? N.INPUT_COLOR : new i.default(M.color),
                display: D,
                float: (0, B.parseCSSFloat)(M.float),
                font: (0, d.parseFont)(M),
                letterSpacing: (0, g.parseLetterSpacing)(M.letterSpacing),
                listStyle:
                  D === l.DISPLAY.LIST_ITEM ? (0, h.parseListStyle)(M) : null,
                lineBreak: (0, f.parseLineBreak)(M.lineBreak),
                margin: (0, w.parseMargin)(M),
                opacity: parseFloat(M.opacity),
                overflow:
                  -1 === I.indexOf(t.tagName)
                    ? (0, p.parseOverflow)(M.overflow)
                    : p.OVERFLOW.HIDDEN,
                overflowWrap: (0, Q.parseOverflowWrap)(
                  M.overflowWrap ? M.overflowWrap : M.wordWrap,
                ),
                padding: (0, U.parsePadding)(M),
                position: R,
                textDecoration: (0, C.parseTextDecoration)(M),
                textShadow: (0, F.parseTextShadow)(M.textShadow),
                textTransform: (0, E.parseTextTransform)(M.textTransform),
                transform: (0, v.parseTransform)(M),
                visibility: (0, b.parseVisibility)(M.visibility),
                wordBreak: (0, _.parseWordBreak)(M.wordBreak),
                zIndex: (0, H.parseZIndex)(
                  R !== m.POSITION.STATIC ? M.zIndex : 'auto',
                ),
              }),
              this.isTransformed() &&
                (t.style.transform = 'matrix(1,0,0,1,0,0)'),
              D === l.DISPLAY.LIST_ITEM)
            ) {
              var P = (0, T.getListOwner)(this);
              if (P) {
                var k = P.listItems.length;
                P.listItems.push(this),
                  (this.listIndex =
                    t.hasAttribute('value') && 'number' == typeof t.value
                      ? t.value
                      : 0 === k
                      ? 'number' == typeof P.listStart
                        ? P.listStart
                        : 1
                      : P.listItems[k - 1].listIndex + 1);
              }
            }
            'IMG' === t.tagName &&
              t.addEventListener('load', function() {
                (a.bounds = (0, y.parseBounds)(t, O, L)),
                  (a.curvedBounds = (0, y.parseBoundCurves)(
                    a.bounds,
                    a.style.border,
                    a.style.borderRadius,
                  ));
              }),
              (this.image = S(t, r)),
              (this.bounds = x
                ? (0, N.reformatInputBounds)((0, y.parseBounds)(t, O, L))
                : (0, y.parseBounds)(t, O, L)),
              (this.curvedBounds = (0, y.parseBoundCurves)(
                this.bounds,
                this.style.border,
                this.style.borderRadius,
              )),
              'production' !== A.env.NODE_ENV &&
                (this.name =
                  t.tagName.toLowerCase() +
                  (t.id ? '#' + t.id : '') +
                  t.className
                    .toString()
                    .split(' ')
                    .map(function(A) {
                      return A.length ? '.' + A : '';
                    })
                    .join(''));
          }
          return (
            r(e, [
              {
                key: 'getClipPaths',
                value: function() {
                  var A = this.parent ? this.parent.getClipPaths() : [];
                  return this.style.overflow !== p.OVERFLOW.VISIBLE
                    ? A.concat([
                        (0, y.calculatePaddingBoxPath)(this.curvedBounds),
                      ])
                    : A;
                },
              },
              {
                key: 'isInFlow',
                value: function() {
                  return (
                    this.isRootElement() &&
                    !this.isFloating() &&
                    !this.isAbsolutelyPositioned()
                  );
                },
              },
              {
                key: 'isVisible',
                value: function() {
                  return (
                    !(0, a.contains)(this.style.display, l.DISPLAY.NONE) &&
                    this.style.opacity > 0 &&
                    this.style.visibility === b.VISIBILITY.VISIBLE
                  );
                },
              },
              {
                key: 'isAbsolutelyPositioned',
                value: function() {
                  return (
                    this.style.position !== m.POSITION.STATIC &&
                    this.style.position !== m.POSITION.RELATIVE
                  );
                },
              },
              {
                key: 'isPositioned',
                value: function() {
                  return this.style.position !== m.POSITION.STATIC;
                },
              },
              {
                key: 'isFloating',
                value: function() {
                  return this.style.float !== B.FLOAT.NONE;
                },
              },
              {
                key: 'isRootElement',
                value: function() {
                  return null === this.parent;
                },
              },
              {
                key: 'isTransformed',
                value: function() {
                  return null !== this.style.transform;
                },
              },
              {
                key: 'isPositionedWithZIndex',
                value: function() {
                  return this.isPositioned() && !this.style.zIndex.auto;
                },
              },
              {
                key: 'isInlineLevel',
                value: function() {
                  return (
                    (0, a.contains)(this.style.display, l.DISPLAY.INLINE) ||
                    (0, a.contains)(
                      this.style.display,
                      l.DISPLAY.INLINE_BLOCK,
                    ) ||
                    (0, a.contains)(
                      this.style.display,
                      l.DISPLAY.INLINE_FLEX,
                    ) ||
                    (0, a.contains)(
                      this.style.display,
                      l.DISPLAY.INLINE_GRID,
                    ) ||
                    (0, a.contains)(
                      this.style.display,
                      l.DISPLAY.INLINE_LIST_ITEM,
                    ) ||
                    (0, a.contains)(this.style.display, l.DISPLAY.INLINE_TABLE)
                  );
                },
              },
              {
                key: 'isInlineBlockOrInlineTable',
                value: function() {
                  return (
                    (0, a.contains)(
                      this.style.display,
                      l.DISPLAY.INLINE_BLOCK,
                    ) ||
                    (0, a.contains)(this.style.display, l.DISPLAY.INLINE_TABLE)
                  );
                },
              },
            ]),
            e
          );
        })();
      e.default = K;
      var S = function(A, e) {
        if (
          A instanceof A.ownerDocument.defaultView.SVGSVGElement ||
          A instanceof SVGSVGElement
        ) {
          var t = new XMLSerializer();
          return e.loadImage(
            'data:image/svg+xml,' + encodeURIComponent(t.serializeToString(A)),
          );
        }
        switch (A.tagName) {
          case 'IMG':
            var n = A;
            return e.loadImage(n.currentSrc || n.src);
          case 'CANVAS':
            var r = A;
            return e.loadCanvas(r);
          case 'IFRAME':
            var o = A.getAttribute('data-html2canvas-internal-iframe-key');
            if (o) return o;
        }
        return null;
      };
    }.call(e, t(0)));
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    (e.contains = function(A, e) {
      return 0 != (A & e);
    }),
      (e.distance = function(A, e) {
        return Math.sqrt(A * A + e * e);
      }),
      (e.copyCSSStyles = function(A, e) {
        for (var t = A.length - 1; t >= 0; t--) {
          var n = A.item(t);
          'content' !== n && e.style.setProperty(n, A.getPropertyValue(n));
        }
        return e;
      }),
      (e.SMALL_IMAGE =
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
  },
  function(A, e, t) {
    'use strict';
    (function(A) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.parseBackgroundImage = e.parseBackground = e.calculateBackgroundRepeatPath = e.calculateBackgroundPosition = e.calculateBackgroungPositioningArea = e.calculateBackgroungPaintingArea = e.calculateGradientBackgroundSize = e.calculateBackgroundSize = e.BACKGROUND_ORIGIN = e.BACKGROUND_CLIP = e.BACKGROUND_SIZE = e.BACKGROUND_REPEAT = void 0);
      var n = c(t(1)),
        r = c(t(3)),
        o = c(t(41)),
        i = c(t(8)),
        a = t(2),
        s = t(19);
      function c(A) {
        return A && A.__esModule ? A : { default: A };
      }
      var u = (e.BACKGROUND_REPEAT = {
          REPEAT: 0,
          NO_REPEAT: 1,
          REPEAT_X: 2,
          REPEAT_Y: 3,
        }),
        l = (e.BACKGROUND_SIZE = { AUTO: 0, CONTAIN: 1, COVER: 2, LENGTH: 3 }),
        B = (e.BACKGROUND_CLIP = {
          BORDER_BOX: 0,
          PADDING_BOX: 1,
          CONTENT_BOX: 2,
        }),
        d = (e.BACKGROUND_ORIGIN = B),
        g = function A(e) {
          switch (
            ((function(A, e) {
              if (!(A instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, A),
            e)
          ) {
            case 'contain':
              this.size = l.CONTAIN;
              break;
            case 'cover':
              this.size = l.COVER;
              break;
            case 'auto':
              this.size = l.AUTO;
              break;
            default:
              this.value = new r.default(e);
          }
        },
        f =
          ((e.calculateBackgroundSize = function(A, e, t) {
            var n = 0,
              r = 0,
              i = A.size;
            if (i[0].size === l.CONTAIN || i[0].size === l.COVER) {
              var a = t.width / t.height,
                s = e.width / e.height;
              return a < s != (i[0].size === l.COVER)
                ? new o.default(t.width, t.width / s)
                : new o.default(t.height * s, t.height);
            }
            return (
              i[0].value && (n = i[0].value.getAbsoluteValue(t.width)),
              i[0].size === l.AUTO && i[1].size === l.AUTO
                ? (r = e.height)
                : i[1].size === l.AUTO
                ? (r = (n / e.width) * e.height)
                : i[1].value && (r = i[1].value.getAbsoluteValue(t.height)),
              i[0].size === l.AUTO && (n = (r / e.height) * e.width),
              new o.default(n, r)
            );
          }),
          (e.calculateGradientBackgroundSize = function(A, e) {
            var t = A.size,
              n = t[0].value ? t[0].value.getAbsoluteValue(e.width) : e.width,
              r = t[1].value
                ? t[1].value.getAbsoluteValue(e.height)
                : t[0].value
                ? n
                : e.height;
            return new o.default(n, r);
          }),
          new g('auto')),
        h =
          ((e.calculateBackgroungPaintingArea = function(A, e) {
            switch (e) {
              case B.BORDER_BOX:
                return (0, a.calculateBorderBoxPath)(A);
              case B.PADDING_BOX:
              default:
                return (0, a.calculatePaddingBoxPath)(A);
            }
          }),
          (e.calculateBackgroungPositioningArea = function(A, e, t, n) {
            var r = (0, a.calculatePaddingBox)(e, n);
            switch (A) {
              case d.BORDER_BOX:
                return e;
              case d.CONTENT_BOX:
                var o = t[s.PADDING_SIDES.LEFT].getAbsoluteValue(e.width),
                  i = t[s.PADDING_SIDES.RIGHT].getAbsoluteValue(e.width),
                  c = t[s.PADDING_SIDES.TOP].getAbsoluteValue(e.width),
                  u = t[s.PADDING_SIDES.BOTTOM].getAbsoluteValue(e.width);
                return new a.Bounds(
                  r.left + o,
                  r.top + c,
                  r.width - o - i,
                  r.height - c - u,
                );
              case d.PADDING_BOX:
              default:
                return r;
            }
          }),
          (e.calculateBackgroundPosition = function(A, e, t) {
            return new i.default(
              A[0].getAbsoluteValue(t.width - e.width),
              A[1].getAbsoluteValue(t.height - e.height),
            );
          }),
          (e.calculateBackgroundRepeatPath = function(A, e, t, n, r) {
            switch (A.repeat) {
              case u.REPEAT_X:
                return [
                  new i.default(Math.round(r.left), Math.round(n.top + e.y)),
                  new i.default(
                    Math.round(r.left + r.width),
                    Math.round(n.top + e.y),
                  ),
                  new i.default(
                    Math.round(r.left + r.width),
                    Math.round(t.height + n.top + e.y),
                  ),
                  new i.default(
                    Math.round(r.left),
                    Math.round(t.height + n.top + e.y),
                  ),
                ];
              case u.REPEAT_Y:
                return [
                  new i.default(Math.round(n.left + e.x), Math.round(r.top)),
                  new i.default(
                    Math.round(n.left + e.x + t.width),
                    Math.round(r.top),
                  ),
                  new i.default(
                    Math.round(n.left + e.x + t.width),
                    Math.round(r.height + r.top),
                  ),
                  new i.default(
                    Math.round(n.left + e.x),
                    Math.round(r.height + r.top),
                  ),
                ];
              case u.NO_REPEAT:
                return [
                  new i.default(
                    Math.round(n.left + e.x),
                    Math.round(n.top + e.y),
                  ),
                  new i.default(
                    Math.round(n.left + e.x + t.width),
                    Math.round(n.top + e.y),
                  ),
                  new i.default(
                    Math.round(n.left + e.x + t.width),
                    Math.round(n.top + e.y + t.height),
                  ),
                  new i.default(
                    Math.round(n.left + e.x),
                    Math.round(n.top + e.y + t.height),
                  ),
                ];
              default:
                return [
                  new i.default(Math.round(r.left), Math.round(r.top)),
                  new i.default(
                    Math.round(r.left + r.width),
                    Math.round(r.top),
                  ),
                  new i.default(
                    Math.round(r.left + r.width),
                    Math.round(r.height + r.top),
                  ),
                  new i.default(
                    Math.round(r.left),
                    Math.round(r.height + r.top),
                  ),
                ];
            }
          }),
          (e.parseBackground = function(A, e) {
            return {
              backgroundColor: new n.default(A.backgroundColor),
              backgroundImage: p(A, e),
              backgroundClip: h(A.backgroundClip),
              backgroundOrigin: w(A.backgroundOrigin),
            };
          }),
          function(A) {
            switch (A) {
              case 'padding-box':
                return B.PADDING_BOX;
              case 'content-box':
                return B.CONTENT_BOX;
            }
            return B.BORDER_BOX;
          }),
        w = function(A) {
          switch (A) {
            case 'padding-box':
              return d.PADDING_BOX;
            case 'content-box':
              return d.CONTENT_BOX;
          }
          return d.BORDER_BOX;
        },
        p = function(e, t) {
          var n = m(e.backgroundImage).map(function(A) {
              if ('url' === A.method) {
                var e = t.loadImage(A.args[0]);
                A.args = e ? [e] : [];
              }
              return A;
            }),
            r = e.backgroundPosition.split(','),
            o = e.backgroundRepeat.split(','),
            i = e.backgroundSize.split(',');
          return n.map(function(e, t) {
            var n = (i[t] || 'auto')
                .trim()
                .split(' ')
                .map(Q),
              a = (r[t] || 'auto')
                .trim()
                .split(' ')
                .map(U);
            return {
              source: e,
              repeat: (function(e) {
                switch (e.trim()) {
                  case 'no-repeat':
                    return u.NO_REPEAT;
                  case 'repeat-x':
                  case 'repeat no-repeat':
                    return u.REPEAT_X;
                  case 'repeat-y':
                  case 'no-repeat repeat':
                    return u.REPEAT_Y;
                  case 'repeat':
                    return u.REPEAT;
                }
                return (
                  'production' !== A.env.NODE_ENV &&
                    console.error(
                      'Invalid background-repeat value "' + e + '"',
                    ),
                  u.REPEAT
                );
              })('string' == typeof o[t] ? o[t] : o[0]),
              size: n.length < 2 ? [n[0], f] : [n[0], n[1]],
              position: a.length < 2 ? [a[0], a[0]] : [a[0], a[1]],
            };
          });
        },
        Q = function(A) {
          return 'auto' === A ? f : new g(A);
        },
        U = function(A) {
          switch (A) {
            case 'bottom':
            case 'right':
              return new r.default('100%');
            case 'left':
            case 'top':
              return new r.default('0%');
            case 'auto':
              return new r.default('0');
          }
          return new r.default(A);
        },
        m = (e.parseBackgroundImage = function(A) {
          var e = /^\s$/,
            t = [],
            n = [],
            r = '',
            o = null,
            i = '',
            a = 0,
            s = 0,
            c = function() {
              var A = '';
              if (r) {
                '"' === i.substr(0, 1) && (i = i.substr(1, i.length - 2)),
                  i && n.push(i.trim());
                var e = r.indexOf('-', 1) + 1;
                '-' === r.substr(0, 1) &&
                  e > 0 &&
                  ((A = r.substr(0, e).toLowerCase()), (r = r.substr(e))),
                  'none' !== (r = r.toLowerCase()) &&
                    t.push({ prefix: A, method: r, args: n });
              }
              (n = []), (r = i = '');
            };
          return (
            A.split('').forEach(function(A) {
              if (0 !== a || !e.test(A)) {
                switch (A) {
                  case '"':
                    o ? o === A && (o = null) : (o = A);
                    break;
                  case '(':
                    if (o) break;
                    if (0 === a) return void (a = 1);
                    s++;
                    break;
                  case ')':
                    if (o) break;
                    if (1 === a) {
                      if (0 === s) return (a = 0), void c();
                      s--;
                    }
                    break;
                  case ',':
                    if (o) break;
                    if (0 === a) return void c();
                    if (1 === a && 0 === s && !r.match(/^url$/i))
                      return n.push(i.trim()), void (i = '');
                }
                0 === a ? (r += A) : (i += A);
              }
            }),
            c(),
            t
          );
        });
    }.call(e, t(0)));
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    e.PATH = { VECTOR: 0, BEZIER_CURVE: 1, CIRCLE: 2 };
  },
  function(A, e, t) {
    'use strict';
    (function(A) {
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = t(7);
      e.default = function e(t, r) {
        !(function(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this.type = n.PATH.VECTOR),
          (this.x = t),
          (this.y = r),
          'production' !== A.env.NODE_ENV &&
            (isNaN(t) && console.error('Invalid x value given for Vector'),
            isNaN(r) && console.error('Invalid y value given for Vector'));
      };
    }.call(e, t(0)));
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.parseListStyle = e.parseListStyleType = e.LIST_STYLE_TYPE = e.LIST_STYLE_POSITION = void 0);
    var n = t(6),
      r = (e.LIST_STYLE_POSITION = { INSIDE: 0, OUTSIDE: 1 }),
      o = (e.LIST_STYLE_TYPE = {
        NONE: -1,
        DISC: 0,
        CIRCLE: 1,
        SQUARE: 2,
        DECIMAL: 3,
        CJK_DECIMAL: 4,
        DECIMAL_LEADING_ZERO: 5,
        LOWER_ROMAN: 6,
        UPPER_ROMAN: 7,
        LOWER_GREEK: 8,
        LOWER_ALPHA: 9,
        UPPER_ALPHA: 10,
        ARABIC_INDIC: 11,
        ARMENIAN: 12,
        BENGALI: 13,
        CAMBODIAN: 14,
        CJK_EARTHLY_BRANCH: 15,
        CJK_HEAVENLY_STEM: 16,
        CJK_IDEOGRAPHIC: 17,
        DEVANAGARI: 18,
        ETHIOPIC_NUMERIC: 19,
        GEORGIAN: 20,
        GUJARATI: 21,
        GURMUKHI: 22,
        HEBREW: 22,
        HIRAGANA: 23,
        HIRAGANA_IROHA: 24,
        JAPANESE_FORMAL: 25,
        JAPANESE_INFORMAL: 26,
        KANNADA: 27,
        KATAKANA: 28,
        KATAKANA_IROHA: 29,
        KHMER: 30,
        KOREAN_HANGUL_FORMAL: 31,
        KOREAN_HANJA_FORMAL: 32,
        KOREAN_HANJA_INFORMAL: 33,
        LAO: 34,
        LOWER_ARMENIAN: 35,
        MALAYALAM: 36,
        MONGOLIAN: 37,
        MYANMAR: 38,
        ORIYA: 39,
        PERSIAN: 40,
        SIMP_CHINESE_FORMAL: 41,
        SIMP_CHINESE_INFORMAL: 42,
        TAMIL: 43,
        TELUGU: 44,
        THAI: 45,
        TIBETAN: 46,
        TRAD_CHINESE_FORMAL: 47,
        TRAD_CHINESE_INFORMAL: 48,
        UPPER_ARMENIAN: 49,
        DISCLOSURE_OPEN: 50,
        DISCLOSURE_CLOSED: 51,
      }),
      i = (e.parseListStyleType = function(A) {
        switch (A) {
          case 'disc':
            return o.DISC;
          case 'circle':
            return o.CIRCLE;
          case 'square':
            return o.SQUARE;
          case 'decimal':
            return o.DECIMAL;
          case 'cjk-decimal':
            return o.CJK_DECIMAL;
          case 'decimal-leading-zero':
            return o.DECIMAL_LEADING_ZERO;
          case 'lower-roman':
            return o.LOWER_ROMAN;
          case 'upper-roman':
            return o.UPPER_ROMAN;
          case 'lower-greek':
            return o.LOWER_GREEK;
          case 'lower-alpha':
            return o.LOWER_ALPHA;
          case 'upper-alpha':
            return o.UPPER_ALPHA;
          case 'arabic-indic':
            return o.ARABIC_INDIC;
          case 'armenian':
            return o.ARMENIAN;
          case 'bengali':
            return o.BENGALI;
          case 'cambodian':
            return o.CAMBODIAN;
          case 'cjk-earthly-branch':
            return o.CJK_EARTHLY_BRANCH;
          case 'cjk-heavenly-stem':
            return o.CJK_HEAVENLY_STEM;
          case 'cjk-ideographic':
            return o.CJK_IDEOGRAPHIC;
          case 'devanagari':
            return o.DEVANAGARI;
          case 'ethiopic-numeric':
            return o.ETHIOPIC_NUMERIC;
          case 'georgian':
            return o.GEORGIAN;
          case 'gujarati':
            return o.GUJARATI;
          case 'gurmukhi':
            return o.GURMUKHI;
          case 'hebrew':
            return o.HEBREW;
          case 'hiragana':
            return o.HIRAGANA;
          case 'hiragana-iroha':
            return o.HIRAGANA_IROHA;
          case 'japanese-formal':
            return o.JAPANESE_FORMAL;
          case 'japanese-informal':
            return o.JAPANESE_INFORMAL;
          case 'kannada':
            return o.KANNADA;
          case 'katakana':
            return o.KATAKANA;
          case 'katakana-iroha':
            return o.KATAKANA_IROHA;
          case 'khmer':
            return o.KHMER;
          case 'korean-hangul-formal':
            return o.KOREAN_HANGUL_FORMAL;
          case 'korean-hanja-formal':
            return o.KOREAN_HANJA_FORMAL;
          case 'korean-hanja-informal':
            return o.KOREAN_HANJA_INFORMAL;
          case 'lao':
            return o.LAO;
          case 'lower-armenian':
            return o.LOWER_ARMENIAN;
          case 'malayalam':
            return o.MALAYALAM;
          case 'mongolian':
            return o.MONGOLIAN;
          case 'myanmar':
            return o.MYANMAR;
          case 'oriya':
            return o.ORIYA;
          case 'persian':
            return o.PERSIAN;
          case 'simp-chinese-formal':
            return o.SIMP_CHINESE_FORMAL;
          case 'simp-chinese-informal':
            return o.SIMP_CHINESE_INFORMAL;
          case 'tamil':
            return o.TAMIL;
          case 'telugu':
            return o.TELUGU;
          case 'thai':
            return o.THAI;
          case 'tibetan':
            return o.TIBETAN;
          case 'trad-chinese-formal':
            return o.TRAD_CHINESE_FORMAL;
          case 'trad-chinese-informal':
            return o.TRAD_CHINESE_INFORMAL;
          case 'upper-armenian':
            return o.UPPER_ARMENIAN;
          case 'disclosure-open':
            return o.DISCLOSURE_OPEN;
          case 'disclosure-closed':
            return o.DISCLOSURE_CLOSED;
          case 'none':
          default:
            return o.NONE;
        }
      }),
      a =
        ((e.parseListStyle = function(A) {
          var e = (0, n.parseBackgroundImage)(
            A.getPropertyValue('list-style-image'),
          );
          return {
            listStyleType: i(A.getPropertyValue('list-style-type')),
            listStyleImage: e.length ? e[0] : null,
            listStylePosition: a(A.getPropertyValue('list-style-position')),
          };
        }),
        function(A) {
          switch (A) {
            case 'inside':
              return r.INSIDE;
            case 'outside':
            default:
              return r.OUTSIDE;
          }
        });
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function A(A, e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(A, n.key, n);
          }
        }
        return function(e, t, n) {
          return t && A(e.prototype, t), n && A(e, n), e;
        };
      })(),
      r = t(22),
      o = t(24);
    var i = (function() {
      function A(e, t, n) {
        !(function(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, A),
          (this.text = e),
          (this.parent = t),
          (this.bounds = n);
      }
      return (
        n(A, null, [
          {
            key: 'fromTextNode',
            value: function(e, t) {
              var n = s(e.data, t.style.textTransform);
              return new A(n, t, (0, o.parseTextBounds)(n, t, e));
            },
          },
        ]),
        A
      );
    })();
    e.default = i;
    var a = /(^|\s|:|-|\(|\))([a-z])/g,
      s = function(A, e) {
        switch (e) {
          case r.TEXT_TRANSFORM.LOWERCASE:
            return A.toLowerCase();
          case r.TEXT_TRANSFORM.CAPITALIZE:
            return A.replace(a, c);
          case r.TEXT_TRANSFORM.UPPERCASE:
            return A.toUpperCase();
          default:
            return A;
        }
      };
    function c(A, e, t) {
      return A.length > 0 ? e + t.toUpperCase() : A;
    }
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = t(25),
      r = function(A) {
        return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3];
      },
      o = {
        get SUPPORT_RANGE_BOUNDS() {
          var A = (function(A) {
            if (A.createRange) {
              var e = A.createRange();
              if (e.getBoundingClientRect) {
                var t = A.createElement('boundtest');
                (t.style.height = '123px'),
                  (t.style.display = 'block'),
                  A.body.appendChild(t),
                  e.selectNode(t);
                var n = e.getBoundingClientRect(),
                  r = Math.round(n.height);
                if ((A.body.removeChild(t), 123 === r)) return !0;
              }
            }
            return !1;
          })(document);
          return (
            Object.defineProperty(o, 'SUPPORT_RANGE_BOUNDS', { value: A }), A
          );
        },
        get SUPPORT_SVG_DRAWING() {
          var A = (function(A) {
            var e = new Image(),
              t = A.createElement('canvas'),
              n = t.getContext('2d');
            e.src =
              "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
            try {
              n.drawImage(e, 0, 0), t.toDataURL();
            } catch (A) {
              return !1;
            }
            return !0;
          })(document);
          return (
            Object.defineProperty(o, 'SUPPORT_SVG_DRAWING', { value: A }), A
          );
        },
        get SUPPORT_BASE64_DRAWING() {
          return function(A) {
            var e = (function(A, e) {
              var t = new Image(),
                n = A.createElement('canvas'),
                r = n.getContext('2d');
              return new Promise(function(A) {
                t.src = e;
                var o = function() {
                  try {
                    r.drawImage(t, 0, 0), n.toDataURL();
                  } catch (e) {
                    return A(!1);
                  }
                  return A(!0);
                };
                (t.onload = o),
                  (t.onerror = function() {
                    return A(!1);
                  }),
                  !0 === t.complete &&
                    setTimeout(function() {
                      o();
                    }, 500);
              });
            })(document, A);
            return (
              Object.defineProperty(o, 'SUPPORT_BASE64_DRAWING', {
                value: function() {
                  return e;
                },
              }),
              e
            );
          };
        },
        get SUPPORT_FOREIGNOBJECT_DRAWING() {
          var A =
            'function' == typeof Array.from && 'function' == typeof window.fetch
              ? (function(A) {
                  var e = A.createElement('canvas');
                  (e.width = 100), (e.height = 100);
                  var t = e.getContext('2d');
                  (t.fillStyle = 'rgb(0, 255, 0)'), t.fillRect(0, 0, 100, 100);
                  var o = new Image(),
                    i = e.toDataURL();
                  o.src = i;
                  var a = (0, n.createForeignObjectSVG)(100, 100, 0, 0, o);
                  return (
                    (t.fillStyle = 'red'),
                    t.fillRect(0, 0, 100, 100),
                    (0, n.loadSerializedSVG)(a)
                      .then(function(e) {
                        t.drawImage(e, 0, 0);
                        var o = t.getImageData(0, 0, 100, 100).data;
                        (t.fillStyle = 'red'), t.fillRect(0, 0, 100, 100);
                        var a = A.createElement('div');
                        return (
                          (a.style.backgroundImage = 'url(' + i + ')'),
                          (a.style.height = '100px'),
                          r(o)
                            ? (0, n.loadSerializedSVG)(
                                (0, n.createForeignObjectSVG)(
                                  100,
                                  100,
                                  0,
                                  0,
                                  a,
                                ),
                              )
                            : Promise.reject(!1)
                        );
                      })
                      .then(function(A) {
                        return (
                          t.drawImage(A, 0, 0),
                          r(t.getImageData(0, 0, 100, 100).data)
                        );
                      })
                      .catch(function(A) {
                        return !1;
                      })
                  );
                })(document)
              : Promise.resolve(!1);
          return (
            Object.defineProperty(o, 'SUPPORT_FOREIGNOBJECT_DRAWING', {
              value: A,
            }),
            A
          );
        },
        get SUPPORT_CORS_IMAGES() {
          var A = void 0 !== new Image().crossOrigin;
          return (
            Object.defineProperty(o, 'SUPPORT_CORS_IMAGES', { value: A }), A
          );
        },
        get SUPPORT_RESPONSE_TYPE() {
          var A = 'string' == typeof new XMLHttpRequest().responseType;
          return (
            Object.defineProperty(o, 'SUPPORT_RESPONSE_TYPE', { value: A }), A
          );
        },
        get SUPPORT_CORS_XHR() {
          var A = 'withCredentials' in new XMLHttpRequest();
          return Object.defineProperty(o, 'SUPPORT_CORS_XHR', { value: A }), A;
        },
      };
    e.default = o;
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.parseTextDecoration = e.TEXT_DECORATION_LINE = e.TEXT_DECORATION = e.TEXT_DECORATION_STYLE = void 0);
    var n,
      r = t(1),
      o = (n = r) && n.__esModule ? n : { default: n };
    var i = (e.TEXT_DECORATION_STYLE = {
        SOLID: 0,
        DOUBLE: 1,
        DOTTED: 2,
        DASHED: 3,
        WAVY: 4,
      }),
      a = (e.TEXT_DECORATION = { NONE: null }),
      s = (e.TEXT_DECORATION_LINE = {
        UNDERLINE: 1,
        OVERLINE: 2,
        LINE_THROUGH: 3,
        BLINK: 4,
      }),
      c = function(A) {
        switch (A) {
          case 'underline':
            return s.UNDERLINE;
          case 'overline':
            return s.OVERLINE;
          case 'line-through':
            return s.LINE_THROUGH;
        }
        return s.BLINK;
      };
    e.parseTextDecoration = function(A) {
      var e,
        t =
          'none' ===
          (e = A.textDecorationLine ? A.textDecorationLine : A.textDecoration)
            ? null
            : e.split(' ').map(c);
      return null === t
        ? a.NONE
        : {
            textDecorationLine: t,
            textDecorationColor: A.textDecorationColor
              ? new o.default(A.textDecorationColor)
              : null,
            textDecorationStyle: (function(A) {
              switch (A) {
                case 'double':
                  return i.DOUBLE;
                case 'dotted':
                  return i.DOTTED;
                case 'dashed':
                  return i.DASHED;
                case 'wavy':
                  return i.WAVY;
              }
              return i.SOLID;
            })(A.textDecorationStyle),
          };
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.parseBorder = e.BORDER_SIDES = e.BORDER_STYLE = void 0);
    var n,
      r = t(1),
      o = (n = r) && n.__esModule ? n : { default: n };
    var i = (e.BORDER_STYLE = { NONE: 0, SOLID: 1 }),
      a = (e.BORDER_SIDES = { TOP: 0, RIGHT: 1, BOTTOM: 2, LEFT: 3 }),
      s = Object.keys(a).map(function(A) {
        return A.toLowerCase();
      });
    e.parseBorder = function(A) {
      return s.map(function(e) {
        var t = new o.default(A.getPropertyValue('border-' + e + '-color')),
          n = (function(A) {
            switch (A) {
              case 'none':
                return i.NONE;
            }
            return i.SOLID;
          })(A.getPropertyValue('border-' + e + '-style')),
          r = parseFloat(A.getPropertyValue('border-' + e + '-width'));
        return {
          borderColor: t,
          borderStyle: n,
          borderWidth: isNaN(r) ? 0 : r,
        };
      });
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    (e.toCodePoints = function(A) {
      for (var e = [], t = 0, n = A.length; t < n; ) {
        var r = A.charCodeAt(t++);
        if (r >= 55296 && r <= 56319 && t < n) {
          var o = A.charCodeAt(t++);
          56320 == (64512 & o)
            ? e.push(((1023 & r) << 10) + (1023 & o) + 65536)
            : (e.push(r), t--);
        } else e.push(r);
      }
      return e;
    }),
      (e.fromCodePoint = function() {
        if (String.fromCodePoint)
          return String.fromCodePoint.apply(String, arguments);
        var A = arguments.length;
        if (!A) return '';
        for (var e = [], t = -1, n = ''; ++t < A; ) {
          var r = arguments.length <= t ? void 0 : arguments[t];
          r <= 65535
            ? e.push(r)
            : ((r -= 65536), e.push(55296 + (r >> 10), (r % 1024) + 56320)),
            (t + 1 === A || e.length > 16384) &&
              ((n += String.fromCharCode.apply(String, e)), (e.length = 0));
        }
        return n;
      });
    for (
      var n =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        r = 'undefined' == typeof Uint8Array ? [] : new Uint8Array(256),
        o = 0;
      o < n.length;
      o++
    )
      r[n.charCodeAt(o)] = o;
    (e.decode = function(A) {
      var e = 0.75 * A.length,
        t = A.length,
        n = void 0,
        o = 0,
        i = void 0,
        a = void 0,
        s = void 0,
        c = void 0;
      '=' === A[A.length - 1] && (e--, '=' === A[A.length - 2] && e--);
      var u =
          'undefined' != typeof ArrayBuffer &&
          'undefined' != typeof Uint8Array &&
          void 0 !== Uint8Array.prototype.slice
            ? new ArrayBuffer(e)
            : new Array(e),
        l = Array.isArray(u) ? u : new Uint8Array(u);
      for (n = 0; n < t; n += 4)
        (i = r[A.charCodeAt(n)]),
          (a = r[A.charCodeAt(n + 1)]),
          (s = r[A.charCodeAt(n + 2)]),
          (c = r[A.charCodeAt(n + 3)]),
          (l[o++] = (i << 2) | (a >> 4)),
          (l[o++] = ((15 & a) << 4) | (s >> 2)),
          (l[o++] = ((3 & s) << 6) | (63 & c));
      return u;
    }),
      (e.polyUint16Array = function(A) {
        for (var e = A.length, t = [], n = 0; n < e; n += 2)
          t.push((A[n + 1] << 8) | A[n]);
        return t;
      }),
      (e.polyUint32Array = function(A) {
        for (var e = A.length, t = [], n = 0; n < e; n += 4)
          t.push((A[n + 3] << 24) | (A[n + 2] << 16) | (A[n + 1] << 8) | A[n]);
        return t;
      });
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.createCounterText = e.inlineListItemElement = e.getListOwner = void 0);
    var n = t(5),
      r = s(t(4)),
      o = s(t(10)),
      i = t(9),
      a = t(26);
    function s(A) {
      return A && A.__esModule ? A : { default: A };
    }
    var c = ['OL', 'UL', 'MENU'],
      u =
        ((e.getListOwner = function(A) {
          var e = A.parent;
          if (!e) return null;
          do {
            if (-1 !== c.indexOf(e.tagName)) return e;
            e = e.parent;
          } while (e);
          return A.parent;
        }),
        (e.inlineListItemElement = function(A, e, t) {
          var a = e.style.listStyle;
          if (a) {
            var s = A.ownerDocument.defaultView.getComputedStyle(A, null),
              c = A.ownerDocument.createElement('html2canvaswrapper');
            switch (
              ((0, n.copyCSSStyles)(s, c),
              (c.style.position = 'absolute'),
              (c.style.bottom = 'auto'),
              (c.style.display = 'block'),
              (c.style.letterSpacing = 'normal'),
              a.listStylePosition)
            ) {
              case i.LIST_STYLE_POSITION.OUTSIDE:
                (c.style.left = 'auto'),
                  (c.style.right =
                    A.ownerDocument.defaultView.innerWidth -
                    e.bounds.left -
                    e.style.margin[1].getAbsoluteValue(e.bounds.width) +
                    7 +
                    'px'),
                  (c.style.textAlign = 'right');
                break;
              case i.LIST_STYLE_POSITION.INSIDE:
                (c.style.left =
                  e.bounds.left -
                  e.style.margin[3].getAbsoluteValue(e.bounds.width) +
                  'px'),
                  (c.style.right = 'auto'),
                  (c.style.textAlign = 'left');
            }
            var u = void 0,
              l = e.style.margin[0].getAbsoluteValue(e.bounds.width),
              B = a.listStyleImage;
            if (B)
              if ('url' === B.method) {
                var d = A.ownerDocument.createElement('img');
                (d.src = B.args[0]),
                  (c.style.top = e.bounds.top - l + 'px'),
                  (c.style.width = 'auto'),
                  (c.style.height = 'auto'),
                  c.appendChild(d);
              } else {
                var g = 0.5 * parseFloat(e.style.font.fontSize);
                (c.style.top =
                  e.bounds.top - l + e.bounds.height - 1.5 * g + 'px'),
                  (c.style.width = g + 'px'),
                  (c.style.height = g + 'px'),
                  (c.style.backgroundImage = s.listStyleImage);
              }
            else
              'number' == typeof e.listIndex &&
                ((u = A.ownerDocument.createTextNode(
                  Q(e.listIndex, a.listStyleType, !0),
                )),
                c.appendChild(u),
                (c.style.top = e.bounds.top - l + 'px'));
            var f = A.ownerDocument.body;
            f.appendChild(c),
              u
                ? (e.childNodes.push(o.default.fromTextNode(u, e)),
                  f.removeChild(c))
                : e.childNodes.push(new r.default(c, e, t, 0));
          }
        }),
        {
          integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
          values: [
            'M',
            'CM',
            'D',
            'CD',
            'C',
            'XC',
            'L',
            'XL',
            'X',
            'IX',
            'V',
            'IV',
            'I',
          ],
        }),
      l = {
        integers: [
          9e3,
          8e3,
          7e3,
          6e3,
          5e3,
          4e3,
          3e3,
          2e3,
          1e3,
          900,
          800,
          700,
          600,
          500,
          400,
          300,
          200,
          100,
          90,
          80,
          70,
          60,
          50,
          40,
          30,
          20,
          10,
          9,
          8,
          7,
          6,
          5,
          4,
          3,
          2,
          1,
        ],
        values: [
          'Ք',
          'Փ',
          'Ւ',
          'Ց',
          'Ր',
          'Տ',
          'Վ',
          'Ս',
          'Ռ',
          'Ջ',
          'Պ',
          'Չ',
          'Ո',
          'Շ',
          'Ն',
          'Յ',
          'Մ',
          'Ճ',
          'Ղ',
          'Ձ',
          'Հ',
          'Կ',
          'Ծ',
          'Խ',
          'Լ',
          'Ի',
          'Ժ',
          'Թ',
          'Ը',
          'Է',
          'Զ',
          'Ե',
          'Դ',
          'Գ',
          'Բ',
          'Ա',
        ],
      },
      B = {
        integers: [
          1e4,
          9e3,
          8e3,
          7e3,
          6e3,
          5e3,
          4e3,
          3e3,
          2e3,
          1e3,
          400,
          300,
          200,
          100,
          90,
          80,
          70,
          60,
          50,
          40,
          30,
          20,
          19,
          18,
          17,
          16,
          15,
          10,
          9,
          8,
          7,
          6,
          5,
          4,
          3,
          2,
          1,
        ],
        values: [
          'י׳',
          'ט׳',
          'ח׳',
          'ז׳',
          'ו׳',
          'ה׳',
          'ד׳',
          'ג׳',
          'ב׳',
          'א׳',
          'ת',
          'ש',
          'ר',
          'ק',
          'צ',
          'פ',
          'ע',
          'ס',
          'נ',
          'מ',
          'ל',
          'כ',
          'יט',
          'יח',
          'יז',
          'טז',
          'טו',
          'י',
          'ט',
          'ח',
          'ז',
          'ו',
          'ה',
          'ד',
          'ג',
          'ב',
          'א',
        ],
      },
      d = {
        integers: [
          1e4,
          9e3,
          8e3,
          7e3,
          6e3,
          5e3,
          4e3,
          3e3,
          2e3,
          1e3,
          900,
          800,
          700,
          600,
          500,
          400,
          300,
          200,
          100,
          90,
          80,
          70,
          60,
          50,
          40,
          30,
          20,
          10,
          9,
          8,
          7,
          6,
          5,
          4,
          3,
          2,
          1,
        ],
        values: [
          'ჵ',
          'ჰ',
          'ჯ',
          'ჴ',
          'ხ',
          'ჭ',
          'წ',
          'ძ',
          'ც',
          'ჩ',
          'შ',
          'ყ',
          'ღ',
          'ქ',
          'ფ',
          'ჳ',
          'ტ',
          'ს',
          'რ',
          'ჟ',
          'პ',
          'ო',
          'ჲ',
          'ნ',
          'მ',
          'ლ',
          'კ',
          'ი',
          'თ',
          'ჱ',
          'ზ',
          'ვ',
          'ე',
          'დ',
          'გ',
          'ბ',
          'ა',
        ],
      },
      g = function(A, e, t, n, r, o) {
        return A < e || A > t
          ? Q(A, r, o.length > 0)
          : n.integers.reduce(function(e, t, r) {
              for (; A >= t; ) (A -= t), (e += n.values[r]);
              return e;
            }, '') + o;
      },
      f = function(A, e, t, n) {
        var r = '';
        do {
          t || A--, (r = n(A) + r), (A /= e);
        } while (A * e >= e);
        return r;
      },
      h = function(A, e, t, n, r) {
        var o = t - e + 1;
        return (
          (A < 0 ? '-' : '') +
          (f(Math.abs(A), o, n, function(A) {
            return (0, a.fromCodePoint)(Math.floor(A % o) + e);
          }) +
            r)
        );
      },
      w = function(A, e) {
        var t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : '. ',
          n = e.length;
        return (
          f(Math.abs(A), n, !1, function(A) {
            return e[Math.floor(A % n)];
          }) + t
        );
      },
      p = function(A, e, t, r, o, a) {
        if (A < -9999 || A > 9999)
          return Q(A, i.LIST_STYLE_TYPE.CJK_DECIMAL, o.length > 0);
        var s = Math.abs(A),
          c = o;
        if (0 === s) return e[0] + c;
        for (var u = 0; s > 0 && u <= 4; u++) {
          var l = s % 10;
          0 === l && (0, n.contains)(a, 1) && '' !== c
            ? (c = e[l] + c)
            : l > 1 ||
              (1 === l && 0 === u) ||
              (1 === l && 1 === u && (0, n.contains)(a, 2)) ||
              (1 === l && 1 === u && (0, n.contains)(a, 4) && A > 100) ||
              (1 === l && u > 1 && (0, n.contains)(a, 8))
            ? (c = e[l] + (u > 0 ? t[u - 1] : '') + c)
            : 1 === l && u > 0 && (c = t[u - 1] + c),
            (s = Math.floor(s / 10));
        }
        return (A < 0 ? r : '') + c;
      },
      Q = (e.createCounterText = function(A, e, t) {
        var n = t ? '. ' : '',
          r = t ? '、' : '',
          o = t ? ', ' : '';
        switch (e) {
          case i.LIST_STYLE_TYPE.DISC:
            return '•';
          case i.LIST_STYLE_TYPE.CIRCLE:
            return '◦';
          case i.LIST_STYLE_TYPE.SQUARE:
            return '◾';
          case i.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
            var a = h(A, 48, 57, !0, n);
            return a.length < 4 ? '0' + a : a;
          case i.LIST_STYLE_TYPE.CJK_DECIMAL:
            return w(A, '〇一二三四五六七八九', r);
          case i.LIST_STYLE_TYPE.LOWER_ROMAN:
            return g(A, 1, 3999, u, i.LIST_STYLE_TYPE.DECIMAL, n).toLowerCase();
          case i.LIST_STYLE_TYPE.UPPER_ROMAN:
            return g(A, 1, 3999, u, i.LIST_STYLE_TYPE.DECIMAL, n);
          case i.LIST_STYLE_TYPE.LOWER_GREEK:
            return h(A, 945, 969, !1, n);
          case i.LIST_STYLE_TYPE.LOWER_ALPHA:
            return h(A, 97, 122, !1, n);
          case i.LIST_STYLE_TYPE.UPPER_ALPHA:
            return h(A, 65, 90, !1, n);
          case i.LIST_STYLE_TYPE.ARABIC_INDIC:
            return h(A, 1632, 1641, !0, n);
          case i.LIST_STYLE_TYPE.ARMENIAN:
          case i.LIST_STYLE_TYPE.UPPER_ARMENIAN:
            return g(A, 1, 9999, l, i.LIST_STYLE_TYPE.DECIMAL, n);
          case i.LIST_STYLE_TYPE.LOWER_ARMENIAN:
            return g(A, 1, 9999, l, i.LIST_STYLE_TYPE.DECIMAL, n).toLowerCase();
          case i.LIST_STYLE_TYPE.BENGALI:
            return h(A, 2534, 2543, !0, n);
          case i.LIST_STYLE_TYPE.CAMBODIAN:
          case i.LIST_STYLE_TYPE.KHMER:
            return h(A, 6112, 6121, !0, n);
          case i.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
            return w(A, '子丑寅卯辰巳午未申酉戌亥', r);
          case i.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
            return w(A, '甲乙丙丁戊己庚辛壬癸', r);
          case i.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
          case i.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
            return p(A, '零一二三四五六七八九', '十百千萬', '負', r, 14);
          case i.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
            return p(A, '零壹貳參肆伍陸柒捌玖', '拾佰仟萬', '負', r, 15);
          case i.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
            return p(A, '零一二三四五六七八九', '十百千萬', '负', r, 14);
          case i.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
            return p(A, '零壹贰叁肆伍陆柒捌玖', '拾佰仟萬', '负', r, 15);
          case i.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
            return p(A, '〇一二三四五六七八九', '十百千万', 'マイナス', r, 0);
          case i.LIST_STYLE_TYPE.JAPANESE_FORMAL:
            return p(A, '零壱弐参四伍六七八九', '拾百千万', 'マイナス', r, 7);
          case i.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
            return p(A, '영일이삼사오육칠팔구', '십백천만', '마이너스 ', o, 7);
          case i.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
            return p(A, '零一二三四五六七八九', '十百千萬', '마이너스 ', o, 0);
          case i.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
            return p(A, '零壹貳參四五六七八九', '拾百千', '마이너스 ', o, 7);
          case i.LIST_STYLE_TYPE.DEVANAGARI:
            return h(A, 2406, 2415, !0, n);
          case i.LIST_STYLE_TYPE.GEORGIAN:
            return g(A, 1, 19999, d, i.LIST_STYLE_TYPE.DECIMAL, n);
          case i.LIST_STYLE_TYPE.GUJARATI:
            return h(A, 2790, 2799, !0, n);
          case i.LIST_STYLE_TYPE.GURMUKHI:
            return h(A, 2662, 2671, !0, n);
          case i.LIST_STYLE_TYPE.HEBREW:
            return g(A, 1, 10999, B, i.LIST_STYLE_TYPE.DECIMAL, n);
          case i.LIST_STYLE_TYPE.HIRAGANA:
            return w(
              A,
              'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん',
            );
          case i.LIST_STYLE_TYPE.HIRAGANA_IROHA:
            return w(
              A,
              'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす',
            );
          case i.LIST_STYLE_TYPE.KANNADA:
            return h(A, 3302, 3311, !0, n);
          case i.LIST_STYLE_TYPE.KATAKANA:
            return w(
              A,
              'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン',
              r,
            );
          case i.LIST_STYLE_TYPE.KATAKANA_IROHA:
            return w(
              A,
              'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス',
              r,
            );
          case i.LIST_STYLE_TYPE.LAO:
            return h(A, 3792, 3801, !0, n);
          case i.LIST_STYLE_TYPE.MONGOLIAN:
            return h(A, 6160, 6169, !0, n);
          case i.LIST_STYLE_TYPE.MYANMAR:
            return h(A, 4160, 4169, !0, n);
          case i.LIST_STYLE_TYPE.ORIYA:
            return h(A, 2918, 2927, !0, n);
          case i.LIST_STYLE_TYPE.PERSIAN:
            return h(A, 1776, 1785, !0, n);
          case i.LIST_STYLE_TYPE.TAMIL:
            return h(A, 3046, 3055, !0, n);
          case i.LIST_STYLE_TYPE.TELUGU:
            return h(A, 3174, 3183, !0, n);
          case i.LIST_STYLE_TYPE.THAI:
            return h(A, 3664, 3673, !0, n);
          case i.LIST_STYLE_TYPE.TIBETAN:
            return h(A, 3872, 3881, !0, n);
          case i.LIST_STYLE_TYPE.DECIMAL:
          default:
            return h(A, 48, 57, !0, n);
        }
      });
  },
  function(A, e) {
    var t;
    t = (function() {
      return this;
    })();
    try {
      t = t || Function('return this')() || (0, eval)('this');
    } catch (A) {
      'object' == typeof window && (t = window);
    }
    A.exports = t;
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
        function A(A, e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(A, n.key, n);
          }
        }
        return function(e, t, n) {
          return t && A(e.prototype, t), n && A(e, n), e;
        };
      })(),
      r = t(7),
      o = t(12);
    var i = function(A, e) {
        var t = Math.max.apply(
            null,
            A.colorStops.map(function(A) {
              return A.stop;
            }),
          ),
          n = 1 / Math.max(1, t);
        A.colorStops.forEach(function(A) {
          e.addColorStop(n * A.stop, A.color.toString());
        });
      },
      a = (function() {
        function A(e) {
          !(function(A, e) {
            if (!(A instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, A),
            (this.canvas = e || document.createElement('canvas'));
        }
        return (
          n(A, [
            {
              key: 'render',
              value: function(A) {
                (this.ctx = this.canvas.getContext('2d')),
                  (this.options = A),
                  (this.canvas.width = Math.floor(A.width * A.scale)),
                  (this.canvas.height = Math.floor(A.height * A.scale)),
                  (this.canvas.style.width = A.width + 'px'),
                  (this.canvas.style.height = A.height + 'px'),
                  this.ctx.scale(this.options.scale, this.options.scale),
                  this.ctx.translate(-A.x, -A.y),
                  (this.ctx.textBaseline = 'bottom'),
                  A.logger.log(
                    'Canvas renderer initialized (' +
                      A.width +
                      'x' +
                      A.height +
                      ' at ' +
                      A.x +
                      ',' +
                      A.y +
                      ') with scale ' +
                      this.options.scale,
                  );
              },
            },
            {
              key: 'clip',
              value: function(A, e) {
                var t = this;
                A.length &&
                  (this.ctx.save(),
                  A.forEach(function(A) {
                    t.path(A), t.ctx.clip();
                  })),
                  e(),
                  A.length && this.ctx.restore();
              },
            },
            {
              key: 'drawImage',
              value: function(A, e, t) {
                this.ctx.drawImage(
                  A,
                  e.left,
                  e.top,
                  e.width,
                  e.height,
                  t.left,
                  t.top,
                  t.width,
                  t.height,
                );
              },
            },
            {
              key: 'drawShape',
              value: function(A, e) {
                this.path(A),
                  (this.ctx.fillStyle = e.toString()),
                  this.ctx.fill();
              },
            },
            {
              key: 'fill',
              value: function(A) {
                (this.ctx.fillStyle = A.toString()), this.ctx.fill();
              },
            },
            {
              key: 'getTarget',
              value: function() {
                return Promise.resolve(this.canvas);
              },
            },
            {
              key: 'path',
              value: function(A) {
                var e = this;
                this.ctx.beginPath(),
                  Array.isArray(A)
                    ? A.forEach(function(A, t) {
                        var n = A.type === r.PATH.VECTOR ? A : A.start;
                        0 === t
                          ? e.ctx.moveTo(n.x, n.y)
                          : e.ctx.lineTo(n.x, n.y),
                          A.type === r.PATH.BEZIER_CURVE &&
                            e.ctx.bezierCurveTo(
                              A.startControl.x,
                              A.startControl.y,
                              A.endControl.x,
                              A.endControl.y,
                              A.end.x,
                              A.end.y,
                            );
                      })
                    : this.ctx.arc(
                        A.x + A.radius,
                        A.y + A.radius,
                        A.radius,
                        0,
                        2 * Math.PI,
                        !0,
                      ),
                  this.ctx.closePath();
              },
            },
            {
              key: 'rectangle',
              value: function(A, e, t, n, r) {
                (this.ctx.fillStyle = r.toString()),
                  this.ctx.fillRect(A, e, t, n);
              },
            },
            {
              key: 'renderLinearGradient',
              value: function(A, e) {
                var t = this.ctx.createLinearGradient(
                  A.left + e.direction.x1,
                  A.top + e.direction.y1,
                  A.left + e.direction.x0,
                  A.top + e.direction.y0,
                );
                i(e, t),
                  (this.ctx.fillStyle = t),
                  this.ctx.fillRect(A.left, A.top, A.width, A.height);
              },
            },
            {
              key: 'renderRadialGradient',
              value: function(A, e) {
                var t = this,
                  n = A.left + e.center.x,
                  r = A.top + e.center.y,
                  o = this.ctx.createRadialGradient(n, r, 0, n, r, e.radius.x);
                if (o)
                  if (
                    (i(e, o),
                    (this.ctx.fillStyle = o),
                    e.radius.x !== e.radius.y)
                  ) {
                    var a = A.left + 0.5 * A.width,
                      s = A.top + 0.5 * A.height,
                      c = e.radius.y / e.radius.x,
                      u = 1 / c;
                    this.transform(a, s, [1, 0, 0, c, 0, 0], function() {
                      return t.ctx.fillRect(
                        A.left,
                        u * (A.top - s) + s,
                        A.width,
                        A.height * u,
                      );
                    });
                  } else this.ctx.fillRect(A.left, A.top, A.width, A.height);
              },
            },
            {
              key: 'renderRepeat',
              value: function(A, e, t, n, r) {
                this.path(A),
                  (this.ctx.fillStyle = this.ctx.createPattern(
                    this.resizeImage(e, t),
                    'repeat',
                  )),
                  this.ctx.translate(n, r),
                  this.ctx.fill(),
                  this.ctx.translate(-n, -r);
              },
            },
            {
              key: 'renderTextNode',
              value: function(A, e, t, n, r) {
                var i = this;
                (this.ctx.font = [
                  t.fontStyle,
                  t.fontVariant,
                  t.fontWeight,
                  t.fontSize,
                  t.fontFamily,
                ].join(' ')),
                  A.forEach(function(A) {
                    if (
                      ((i.ctx.fillStyle = e.toString()),
                      r && A.text.trim().length
                        ? r
                            .slice(0)
                            .reverse()
                            .forEach(function(e) {
                              (i.ctx.shadowColor = e.color.toString()),
                                (i.ctx.shadowOffsetX =
                                  e.offsetX * i.options.scale),
                                (i.ctx.shadowOffsetY =
                                  e.offsetY * i.options.scale),
                                (i.ctx.shadowBlur = e.blur),
                                i.ctx.fillText(
                                  A.text,
                                  A.bounds.left,
                                  A.bounds.top + A.bounds.height,
                                );
                            })
                        : i.ctx.fillText(
                            A.text,
                            A.bounds.left,
                            A.bounds.top + A.bounds.height,
                          ),
                      null !== n)
                    ) {
                      var a = n.textDecorationColor || e;
                      n.textDecorationLine.forEach(function(e) {
                        switch (e) {
                          case o.TEXT_DECORATION_LINE.UNDERLINE:
                            var n = i.options.fontMetrics.getMetrics(t)
                              .baseline;
                            i.rectangle(
                              A.bounds.left,
                              Math.round(A.bounds.top + n),
                              A.bounds.width,
                              1,
                              a,
                            );
                            break;
                          case o.TEXT_DECORATION_LINE.OVERLINE:
                            i.rectangle(
                              A.bounds.left,
                              Math.round(A.bounds.top),
                              A.bounds.width,
                              1,
                              a,
                            );
                            break;
                          case o.TEXT_DECORATION_LINE.LINE_THROUGH:
                            var r = i.options.fontMetrics.getMetrics(t).middle;
                            i.rectangle(
                              A.bounds.left,
                              Math.ceil(A.bounds.top + r),
                              A.bounds.width,
                              1,
                              a,
                            );
                        }
                      });
                    }
                  });
              },
            },
            {
              key: 'resizeImage',
              value: function(A, e) {
                if (A.width === e.width && A.height === e.height) return A;
                var t = this.canvas.ownerDocument.createElement('canvas');
                return (
                  (t.width = e.width),
                  (t.height = e.height),
                  t
                    .getContext('2d')
                    .drawImage(
                      A,
                      0,
                      0,
                      A.width,
                      A.height,
                      0,
                      0,
                      e.width,
                      e.height,
                    ),
                  t
                );
              },
            },
            {
              key: 'setOpacity',
              value: function(A) {
                this.ctx.globalAlpha = A;
              },
            },
            {
              key: 'transform',
              value: function(A, e, t, n) {
                this.ctx.save(),
                  this.ctx.translate(A, e),
                  this.ctx.transform(t[0], t[1], t[2], t[3], t[4], t[5]),
                  this.ctx.translate(-A, -e),
                  n(),
                  this.ctx.restore();
              },
            },
          ]),
          A
        );
      })();
    e.default = a;
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
      function A(A, e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(A, n.key, n);
        }
      }
      return function(e, t, n) {
        return t && A(e.prototype, t), n && A(e, n), e;
      };
    })();
    var r = (function() {
      function A(e, t, n) {
        !(function(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, A),
          (this.enabled = 'undefined' != typeof window && e),
          (this.start = n || Date.now()),
          (this.id = t);
      }
      return (
        n(A, [
          {
            key: 'child',
            value: function(e) {
              return new A(this.enabled, e, this.start);
            },
          },
          {
            key: 'log',
            value: function() {
              if (this.enabled && window.console && window.console.log) {
                for (var A = arguments.length, e = Array(A), t = 0; t < A; t++)
                  e[t] = arguments[t];
                Function.prototype.bind
                  .call(window.console.log, window.console)
                  .apply(
                    window.console,
                    [
                      Date.now() - this.start + 'ms',
                      this.id
                        ? 'html2canvas (' + this.id + '):'
                        : 'html2canvas:',
                    ].concat([].slice.call(e, 0)),
                  );
              }
            },
          },
          {
            key: 'error',
            value: function() {
              if (this.enabled && window.console && window.console.error) {
                for (var A = arguments.length, e = Array(A), t = 0; t < A; t++)
                  e[t] = arguments[t];
                Function.prototype.bind
                  .call(window.console.error, window.console)
                  .apply(
                    window.console,
                    [
                      Date.now() - this.start + 'ms',
                      this.id
                        ? 'html2canvas (' + this.id + '):'
                        : 'html2canvas:',
                    ].concat([].slice.call(e, 0)),
                  );
              }
            },
          },
        ]),
        A
      );
    })();
    e.default = r;
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.parsePadding = e.PADDING_SIDES = void 0);
    var n,
      r = t(3),
      o = (n = r) && n.__esModule ? n : { default: n };
    e.PADDING_SIDES = { TOP: 0, RIGHT: 1, BOTTOM: 2, LEFT: 3 };
    var i = ['top', 'right', 'bottom', 'left'];
    e.parsePadding = function(A) {
      return i.map(function(e) {
        return new o.default(A.getPropertyValue('padding-' + e));
      });
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (e.OVERFLOW_WRAP = { NORMAL: 0, BREAK_WORD: 1 });
    e.parseOverflowWrap = function(A) {
      switch (A) {
        case 'break-word':
          return n.BREAK_WORD;
        case 'normal':
        default:
          return n.NORMAL;
      }
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (e.POSITION = {
      STATIC: 0,
      RELATIVE: 1,
      ABSOLUTE: 2,
      FIXED: 3,
      STICKY: 4,
    });
    e.parsePosition = function(A) {
      switch (A) {
        case 'relative':
          return n.RELATIVE;
        case 'absolute':
          return n.ABSOLUTE;
        case 'fixed':
          return n.FIXED;
        case 'sticky':
          return n.STICKY;
      }
      return n.STATIC;
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (e.TEXT_TRANSFORM = {
      NONE: 0,
      LOWERCASE: 1,
      UPPERCASE: 2,
      CAPITALIZE: 3,
    });
    e.parseTextTransform = function(A) {
      switch (A) {
        case 'uppercase':
          return n.UPPERCASE;
        case 'lowercase':
          return n.LOWERCASE;
        case 'capitalize':
          return n.CAPITALIZE;
      }
      return n.NONE;
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.reformatInputBounds = e.inlineSelectElement = e.inlineTextAreaElement = e.inlineInputElement = e.getInputBorderRadius = e.INPUT_BACKGROUND = e.INPUT_BORDERS = e.INPUT_COLOR = void 0);
    var n = l(t(10)),
      r = t(6),
      o = t(13),
      i = l(t(60)),
      a = l(t(8)),
      s = l(t(1)),
      c = l(t(3)),
      u = (t(2), t(24), t(5));
    function l(A) {
      return A && A.__esModule ? A : { default: A };
    }
    e.INPUT_COLOR = new s.default([42, 42, 42]);
    var B = new s.default([165, 165, 165]),
      d = new s.default([222, 222, 222]),
      g = { borderWidth: 1, borderColor: B, borderStyle: o.BORDER_STYLE.SOLID },
      f =
        ((e.INPUT_BORDERS = [g, g, g, g]),
        (e.INPUT_BACKGROUND = {
          backgroundColor: d,
          backgroundImage: [],
          backgroundClip: r.BACKGROUND_CLIP.PADDING_BOX,
          backgroundOrigin: r.BACKGROUND_ORIGIN.PADDING_BOX,
        }),
        new c.default('50%')),
      h = [f, f],
      w = [h, h, h, h],
      p = new c.default('3px'),
      Q = [p, p],
      U = [Q, Q, Q, Q],
      m =
        ((e.getInputBorderRadius = function(A) {
          return 'radio' === A.type ? w : U;
        }),
        (e.inlineInputElement = function(A, e) {
          if ('radio' === A.type || 'checkbox' === A.type) {
            if (A.checked) {
              var t = Math.min(e.bounds.width, e.bounds.height);
              e.childNodes.push(
                'checkbox' === A.type
                  ? [
                      new a.default(
                        e.bounds.left + 0.39363 * t,
                        e.bounds.top + 0.79 * t,
                      ),
                      new a.default(
                        e.bounds.left + 0.16 * t,
                        e.bounds.top + 0.5549 * t,
                      ),
                      new a.default(
                        e.bounds.left + 0.27347 * t,
                        e.bounds.top + 0.44071 * t,
                      ),
                      new a.default(
                        e.bounds.left + 0.39694 * t,
                        e.bounds.top + 0.5649 * t,
                      ),
                      new a.default(
                        e.bounds.left + 0.72983 * t,
                        e.bounds.top + 0.23 * t,
                      ),
                      new a.default(
                        e.bounds.left + 0.84 * t,
                        e.bounds.top + 0.34085 * t,
                      ),
                      new a.default(
                        e.bounds.left + 0.39363 * t,
                        e.bounds.top + 0.79 * t,
                      ),
                    ]
                  : new i.default(
                      e.bounds.left + t / 4,
                      e.bounds.top + t / 4,
                      t / 4,
                    ),
              );
            }
          } else m(C(A), A, e, !1);
        }),
        (e.inlineTextAreaElement = function(A, e) {
          m(A.value, A, e, !0);
        }),
        (e.inlineSelectElement = function(A, e) {
          var t = A.options[A.selectedIndex || 0];
          m((t && t.text) || '', A, e, !1);
        }),
        (e.reformatInputBounds = function(A) {
          return (
            A.width > A.height
              ? ((A.left += (A.width - A.height) / 2), (A.width = A.height))
              : A.width < A.height &&
                ((A.top += (A.height - A.width) / 2), (A.height = A.width)),
            A
          );
        }),
        function(A, e, t, r) {
          var o = e.ownerDocument.body;
          if (A.length > 0 && o) {
            var i = e.ownerDocument.createElement('html2canvaswrapper');
            (0, u.copyCSSStyles)(
              e.ownerDocument.defaultView.getComputedStyle(e, null),
              i,
            ),
              (i.style.position = 'absolute'),
              (i.style.left = t.bounds.left + 'px'),
              (i.style.top = t.bounds.top + 'px'),
              r || (i.style.whiteSpace = 'nowrap');
            var a = e.ownerDocument.createTextNode(A);
            i.appendChild(a),
              o.appendChild(i),
              t.childNodes.push(n.default.fromTextNode(a, t)),
              o.removeChild(i);
          }
        }),
      C = function(A) {
        var e =
          'password' === A.type
            ? new Array(A.value.length + 1).join('•')
            : A.value;
        return 0 === e.length ? A.placeholder || '' : e;
      };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.parseTextBounds = e.TextBounds = void 0);
    var n,
      r = t(2),
      o = t(12),
      i = t(11),
      a = (n = i) && n.__esModule ? n : { default: n },
      s = t(26);
    var c = (e.TextBounds = function A(e, t) {
        !(function(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, A),
          (this.text = e),
          (this.bounds = t);
      }),
      u =
        ((e.parseTextBounds = function(A, e, t) {
          for (
            var n =
                0 !== e.style.letterSpacing
                  ? (0, s.toCodePoints)(A).map(function(A) {
                      return (0, s.fromCodePoint)(A);
                    })
                  : (0, s.breakWords)(A, e),
              r = n.length,
              i = t.parentNode ? t.parentNode.ownerDocument.defaultView : null,
              B = i ? i.pageXOffset : 0,
              d = i ? i.pageYOffset : 0,
              g = [],
              f = 0,
              h = 0;
            h < r;
            h++
          ) {
            var w = n[h];
            if (
              e.style.textDecoration !== o.TEXT_DECORATION.NONE ||
              w.trim().length > 0
            )
              if (a.default.SUPPORT_RANGE_BOUNDS)
                g.push(new c(w, l(t, f, w.length, B, d)));
              else {
                var p = t.splitText(w.length);
                g.push(new c(w, u(t, B, d))), (t = p);
              }
            else a.default.SUPPORT_RANGE_BOUNDS || (t = t.splitText(w.length));
            f += w.length;
          }
          return g;
        }),
        function(A, e, t) {
          var n = A.ownerDocument.createElement('html2canvaswrapper');
          n.appendChild(A.cloneNode(!0));
          var o = A.parentNode;
          if (o) {
            o.replaceChild(n, A);
            var i = (0, r.parseBounds)(n, e, t);
            return n.firstChild && o.replaceChild(n.firstChild, n), i;
          }
          return new r.Bounds(0, 0, 0, 0);
        }),
      l = function(A, e, t, n, o) {
        var i = A.ownerDocument.createRange();
        return (
          i.setStart(A, e),
          i.setEnd(A, e + t),
          r.Bounds.fromClientRect(i.getBoundingClientRect(), n, o)
        );
      };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function() {
      function A(A, e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(A, n.key, n);
        }
      }
      return function(e, t, n) {
        return t && A(e.prototype, t), n && A(e, n), e;
      };
    })();
    var r = (function() {
      function A(e) {
        !(function(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, A),
          (this.element = e);
      }
      return (
        n(A, [
          {
            key: 'render',
            value: function(A) {
              var e = this;
              (this.options = A),
                (this.canvas = document.createElement('canvas')),
                (this.ctx = this.canvas.getContext('2d')),
                (this.canvas.width = Math.floor(A.width) * A.scale),
                (this.canvas.height = Math.floor(A.height) * A.scale),
                (this.canvas.style.width = A.width + 'px'),
                (this.canvas.style.height = A.height + 'px'),
                A.logger.log(
                  'ForeignObject renderer initialized (' +
                    A.width +
                    'x' +
                    A.height +
                    ' at ' +
                    A.x +
                    ',' +
                    A.y +
                    ') with scale ' +
                    A.scale,
                );
              var t = o(
                Math.max(A.windowWidth, A.width) * A.scale,
                Math.max(A.windowHeight, A.height) * A.scale,
                A.scrollX * A.scale,
                A.scrollY * A.scale,
                this.element,
              );
              return i(t).then(function(t) {
                return (
                  A.backgroundColor &&
                    ((e.ctx.fillStyle = A.backgroundColor.toString()),
                    e.ctx.fillRect(
                      0,
                      0,
                      A.width * A.scale,
                      A.height * A.scale,
                    )),
                  e.ctx.drawImage(t, -A.x * A.scale, -A.y * A.scale),
                  e.canvas
                );
              });
            },
          },
        ]),
        A
      );
    })();
    e.default = r;
    var o = (e.createForeignObjectSVG = function(A, e, t, n, r) {
        var o = 'http://www.w3.org/2000/svg',
          i = document.createElementNS(o, 'svg'),
          a = document.createElementNS(o, 'foreignObject');
        return (
          i.setAttributeNS(null, 'width', A),
          i.setAttributeNS(null, 'height', e),
          a.setAttributeNS(null, 'width', '100%'),
          a.setAttributeNS(null, 'height', '100%'),
          a.setAttributeNS(null, 'x', t),
          a.setAttributeNS(null, 'y', n),
          a.setAttributeNS(null, 'externalResourcesRequired', 'true'),
          i.appendChild(a),
          a.appendChild(r),
          i
        );
      }),
      i = (e.loadSerializedSVG = function(A) {
        return new Promise(function(e, t) {
          var n = new Image();
          (n.onload = function() {
            return e(n);
          }),
            (n.onerror = t),
            (n.src =
              'data:image/svg+xml;charset=utf-8,' +
              encodeURIComponent(new XMLSerializer().serializeToString(A)));
        });
      });
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.breakWords = e.fromCodePoint = e.toCodePoints = void 0);
    var n = t(56);
    Object.defineProperty(e, 'toCodePoints', {
      enumerable: !0,
      get: function() {
        return n.toCodePoints;
      },
    }),
      Object.defineProperty(e, 'fromCodePoint', {
        enumerable: !0,
        get: function() {
          return n.fromCodePoint;
        },
      });
    var r,
      o = t(4),
      i = ((r = o) && r.__esModule, t(20));
    e.breakWords = function(A, e) {
      for (
        var t = (0, n.LineBreaker)(A, {
            lineBreak: e.style.lineBreak,
            wordBreak:
              e.style.overflowWrap === i.OVERFLOW_WRAP.BREAK_WORD
                ? 'break-word'
                : e.style.wordBreak,
          }),
          r = [],
          o = void 0;
        !(o = t.next()).done;

      )
        r.push(o.value.slice());
      return r;
    };
  },
  function(A, e, t) {
    'use strict';
    (function(A) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.FontMetrics = void 0);
      var n = (function() {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(A, n.key, n);
            }
          }
          return function(e, t, n) {
            return t && A(e.prototype, t), n && A(e, n), e;
          };
        })(),
        r = t(5);
      e.FontMetrics = (function() {
        function e(A) {
          !(function(A, e) {
            if (!(A instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this._data = {}),
            (this._document = A);
        }
        return (
          n(e, [
            {
              key: '_parseMetrics',
              value: function(e) {
                var t = this._document.createElement('div'),
                  n = this._document.createElement('img'),
                  o = this._document.createElement('span'),
                  i = this._document.body;
                if (!i)
                  throw new Error(
                    'production' !== A.env.NODE_ENV
                      ? 'No document found for font metrics'
                      : '',
                  );
                (t.style.visibility = 'hidden'),
                  (t.style.fontFamily = e.fontFamily),
                  (t.style.fontSize = e.fontSize),
                  (t.style.margin = '0'),
                  (t.style.padding = '0'),
                  i.appendChild(t),
                  (n.src = r.SMALL_IMAGE),
                  (n.width = 1),
                  (n.height = 1),
                  (n.style.margin = '0'),
                  (n.style.padding = '0'),
                  (n.style.verticalAlign = 'baseline'),
                  (o.style.fontFamily = e.fontFamily),
                  (o.style.fontSize = e.fontSize),
                  (o.style.margin = '0'),
                  (o.style.padding = '0'),
                  o.appendChild(this._document.createTextNode('Hidden Text')),
                  t.appendChild(o),
                  t.appendChild(n);
                var a = n.offsetTop - o.offsetTop + 2;
                t.removeChild(o),
                  t.appendChild(this._document.createTextNode('Hidden Text')),
                  (t.style.lineHeight = 'normal'),
                  (n.style.verticalAlign = 'super');
                var s = n.offsetTop - t.offsetTop + 2;
                return i.removeChild(t), { baseline: a, middle: s };
              },
            },
            {
              key: 'getMetrics',
              value: function(A) {
                var e = A.fontFamily + ' ' + A.fontSize;
                return (
                  void 0 === this._data[e] &&
                    (this._data[e] = this._parseMetrics(A)),
                  this._data[e]
                );
              },
            },
          ]),
          e
        );
      })();
    }.call(e, t(0)));
  },
  function(A, e, t) {
    'use strict';
    (function(A) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Proxy = void 0);
      var n,
        r = t(11),
        o = (n = r) && n.__esModule ? n : { default: n };
      e.Proxy = function(e, t) {
        if (!t.proxy)
          return Promise.reject(
            'production' !== A.env.NODE_ENV ? 'No proxy defined' : null,
          );
        var n = t.proxy;
        return new Promise(function(r, i) {
          var a =
              o.default.SUPPORT_CORS_XHR && o.default.SUPPORT_RESPONSE_TYPE
                ? 'blob'
                : 'text',
            s = o.default.SUPPORT_CORS_XHR
              ? new XMLHttpRequest()
              : new XDomainRequest();
          if (
            ((s.onload = function() {
              if (s instanceof XMLHttpRequest)
                if (200 === s.status)
                  if ('text' === a) r(s.response);
                  else {
                    var t = new FileReader();
                    t.addEventListener(
                      'load',
                      function() {
                        return r(t.result);
                      },
                      !1,
                    ),
                      t.addEventListener(
                        'error',
                        function(A) {
                          return i(A);
                        },
                        !1,
                      ),
                      t.readAsDataURL(s.response);
                  }
                else
                  i(
                    'production' !== A.env.NODE_ENV
                      ? 'Failed to proxy resource ' +
                          e.substring(0, 256) +
                          ' with status code ' +
                          s.status
                      : '',
                  );
              else r(s.responseText);
            }),
            (s.onerror = i),
            s.open(
              'GET',
              n + '?url=' + encodeURIComponent(e) + '&responseType=' + a,
            ),
            'text' !== a && s instanceof XMLHttpRequest && (s.responseType = a),
            t.imageTimeout)
          ) {
            var c = t.imageTimeout;
            (s.timeout = c),
              (s.ontimeout = function() {
                return i(
                  'production' !== A.env.NODE_ENV
                    ? 'Timed out (' + c + 'ms) proxying ' + e.substring(0, 256)
                    : '',
                );
              });
          }
          s.send();
        });
      };
    }.call(e, t(0)));
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      function(A) {
        var e,
          n,
          r = t(31),
          o = (t.n(r), t(36)),
          i = (t.n(o), t(37)),
          a = (t.n(i), t(67)),
          s = t.n(a),
          c = t(68),
          u = t(69),
          l = t(70),
          B = t(71),
          d = t(73),
          g = t(74),
          f = t(75);
        (n = !1),
          (e = navigator.userAgent || navigator.vendor),
          (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            e,
          ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              e.substr(0, 4),
            )) &&
            (n = !0),
          n,
          Object(c.a)(),
          A('#main').show();
        var h = new B.a(),
          w = './images/',
          p = 1,
          Q = A('.btn-audio'),
          U = A('.btn-about,#photo-about'),
          m = A('#bg-loading'),
          C = A('#bg-envelope'),
          F = A('#bg-main'),
          E = A('#bg-dressing'),
          v = A('#bg-photo'),
          b = A('#bg-about'),
          _ = A('#btn-enter'),
          H = A('#couple'),
          y = A('#flower'),
          N = A('#btn-flower'),
          T = A('#flowers').children(),
          I = A('#mask'),
          K = A('#dialog-flower'),
          S = A('#dialog-candy'),
          O = K.find('li'),
          L = A('#btn-flower-ok'),
          M = A('#btn-dressing'),
          D = A('#photo-album'),
          x = [
            '新郎祖林正在吃早饭',
            '新娘媛媛正在化妆',
            '新郎祖林正在洗头',
            '新郎祖林正在打领带',
            '新娘媛媛正在穿婚纱',
            '新郎祖林正在出门',
            '新郎祖林正在迎接新娘媛媛',
          ],
          R = 0,
          P = null,
          k = null,
          z = 0,
          X = f.a.length,
          V = new Date().getTime(),
          G = null;
        function J() {
          var A = new Date().getTime();
          Object(g.a)('c_pv', 'envelope', 'from_last', A - G),
            (G = A),
            o({
              targets: C[0],
              duration: 400,
              scale: [0, 1],
              easing: 'easeOutBack',
              begin: function() {
                return C.show();
              },
              complete: function() {
                return m.hide();
              },
            }),
            h.play(h.enterMusic),
            P && (clearInterval(P), (P = null)),
            k && (clearInterval(k), (k = null));
        }
        function Y(A) {
          var e;
          return (
            void 0 === e && (e = 400),
            I.show(),
            o({
              targets: I[0],
              duration: 400,
              opacity: { value: [0, 0.25], easing: 'linear' },
            }),
            A.show(),
            o({
              targets: A[0],
              duration: 600,
              bottom: { value: ['-30%', '50%'], easing: 'easeOutBack' },
            })
          );
        }
        function W(A) {
          var e;
          return (
            void 0 === e && (e = 400),
            o({
              targets: I[0],
              duration: 400,
              opacity: { value: 0, easing: 'linear' },
            }).finished.then(function() {
              return I.hide();
            }),
            o({
              targets: A[0],
              duration: 400,
              bottom: { value: ['50%', '-30%'], easing: 'easeInQuad' },
            }).finished.then(function() {
              return A.hide();
            })
          );
        }
        new s.a(
          f.a.map(function(A) {
            return w + A;
          }),
          {
            onProgress: function(e, t, n) {
              var r;
              (r = ++z / X),
                A('#loading-process-content').css('width', 100 * r + '%'),
                A('#loading-text-percent').text(Math.floor(100 * r) + '%');
            },
            onComplete: function(e, t) {
              A('body').css('background', '#fff'),
                R === x.length - 1
                  ? J()
                  : (P && clearInterval(P),
                    (P = setInterval(function() {
                      R + 1 < x.length
                        ? (++R, A('#loading-text-content').text(x[R]))
                        : J();
                    }, 500)));
              var n = new Date().getTime();
              Object(g.a)('c_pv', 'loaded', 'from_last', n - V), (G = n);
            },
          },
        ),
          (P = setInterval(function() {
            R + 1 < x.length && (++R, A('#loading-text-content').text(x[R]));
          }, 1800)),
          (k = setInterval(function() {
            var e = A('#loading-dots').text();
            '...' === e
              ? A('#loading-dots').text('.')
              : '..' === e
              ? A('#loading-dots').text('...')
              : '.' === e && A('#loading-dots').text('..');
          }, 300)),
          Q.on('click', function(A) {
            return (
              (A.cancelBubble = !0),
              Q.toggleClass('off'),
              h.toggleMute(),
              Object(g.a)('mute_clk', '', '', new Date().getTime() - V),
              !0
            );
          }),
          U.on('click', function(A) {
            return (
              (j = new Date().getTime()),
              Object(g.a)('c_pv', 'about', '', j - V),
              o({
                targets: b[0],
                duration: 400,
                opacity: [0, 1],
                easing: 'linear',
                begin: function() {
                  return b.show();
                },
              }),
              !0
            );
          }),
          C.one('click', function(e) {
            var t, n;
            return (
              Object(g.a)('spot_clk', 'envelope', '', new Date().getTime() - V),
              (t = A('#envelope-hat')),
              (n = A('#envelope-hat-opened')),
              o({
                targets: t[0],
                duration: 400,
                opacity: 0,
                easing: 'linear',
              }).finished.then(function() {
                return t.hide();
              }),
              o.timeline().add([
                {
                  targets: n[0],
                  duration: 400,
                  opacity: [0, 1],
                  easing: 'linear',
                  begin: function() {
                    return n.show();
                  },
                },
                {
                  targets: A('.envelope-animate').get(),
                  duration: 3e3,
                  offset: '+=250',
                  translateY: '20rem',
                  easing: 'easeInQuad',
                },
                {
                  targets: _[0],
                  duration: 800,
                  offset: '+=800',
                  scale: [0, 1],
                  easing: 'easeOutElastic',
                  begin: function() {
                    return _.show();
                  },
                },
              ]),
              !0
            );
          }),
          _.on('click', function(e) {
            var t = new Date().getTime();
            return (
              Object(g.a)('c_pv', 'main', 'from_last', t - G),
              (G = t),
              o.timeline().add([
                {
                  targets: C[0],
                  opacity: 0,
                  duration: 400,
                  easing: 'linear',
                  complete: function() {
                    return C.hide();
                  },
                },
                {
                  targets: F[0],
                  opacity: [0, 1],
                  offset: '+=400',
                  duration: 1200,
                  easing: 'linear',
                  begin: function() {
                    return F.show();
                  },
                },
              ]),
              h.play(h.mainMusic),
              q(A('#cloud-1'), [5, -5], [10, 5], 0.35),
              q(A('#cloud-2'), [9, -3], [14, 9], 0.7),
              q(A('#cloud-3'), [2, -3], [12, 2], 0.84),
              q(A('#cloud-4'), [7, -3], [12, 7], 0.7 * 1.5),
              Object(d.a)(1800)
                .then(function() {
                  return (function(A) {
                    for (
                      var e = o.timeline(), t = 0, n = 0.5, r = 6.1;
                      t < 8;
                      ++t
                    ) {
                      var i = n + 0.0625,
                        a = r - (0.1 * i) / n;
                      e.add({
                        targets: A.get(),
                        duration: 500,
                        offset: 0 !== t ? '+=900' : void 0,
                        scale: { value: [n, i], easing: 'easeInOutSine' },
                        bottom: {
                          value: [r + 'rem', a + 'rem'],
                          easing: 'easeInOutBack',
                        },
                      }),
                        (n = i),
                        (r = a);
                    }
                    return e;
                  })(H).finished;
                })
                .then(function() {
                  return Object(d.a)(1e3);
                })
                .then(function() {
                  var A,
                    e = F.find('.btn-about');
                  return (
                    o({
                      targets: e[0],
                      duration: 300,
                      opacity: [0, 0.25],
                      easing: 'linear',
                      begin: function() {
                        return e.show();
                      },
                    }),
                    o({
                      targets: (A = N)[0],
                      duration: 800,
                      scale: [0, 1],
                      easing: 'easeOutElastic',
                      begin: function() {
                        return A.show();
                      },
                    })
                  );
                }),
              !0
            );
          }),
          N.on('click', function(A) {
            return (
              Object(g.a)(
                'btn_clk',
                'flower_open',
                '',
                new Date().getTime() - V,
              ),
              Y(K),
              N.hide(),
              !0
            );
          }),
          K.on('click', 'li', function(e) {
            O.removeClass('active');
            var t = A(e.currentTarget);
            return (
              t.addClass('active'), (p = t.data('id') || t.attr('data-id')), !0
            );
          }),
          L.on('click', function(e) {
            return (
              Object(g.a)(
                'btn_clk',
                'flower_close',
                p,
                new Date().getTime() - V,
              ),
              W(K).then(function() {
                var e;
                y.attr('src', w + 'flower-' + p + '.png').show(),
                  o
                    .timeline()
                    .add(
                      ((e = y),
                      Object(u.a)(
                        e,
                        { right: 0, bottom: -0.2 },
                        { right: 4.5, bottom: 2 },
                        800,
                        {
                          delay: 1500,
                          translateY: {
                            value: ['100%', 0],
                            delay: 200,
                            duration: 600,
                            easing: 'easeOutSine',
                          },
                          scale: { value: 0.4, easing: 'linear' },
                          rotate: { value: -15, easing: 'linear' },
                        },
                      )),
                    )
                    .add(
                      (function(e) {
                        e.parent().show();
                        var t = [];
                        return (
                          A.each(e, function(e, n) {
                            var r = A(n),
                              i = parseFloat(r.css('left')),
                              a = +(i + 7 * (i < 4.3 ? -1 : 1)).toFixed(1),
                              s = parseFloat(r.css('bottom')),
                              c = s + 1;
                            return (
                              t.push(
                                Object(u.a)(
                                  r,
                                  { left: a, bottom: c },
                                  { left: i, bottom: s },
                                  1e3,
                                  {
                                    rotate: {
                                      value: o.random(-20, 20),
                                      easing: 'linear',
                                    },
                                    offset: +e
                                      ? '-=' + (1e3 - o.random(0, 80))
                                      : '+=200',
                                  },
                                ),
                              ),
                              !0
                            );
                          }),
                          t
                        );
                      })(T),
                    )
                    .finished.then(function() {
                      return Object(d.a)(1e3);
                    })
                    .then(function() {
                      return Y(S);
                    }),
                  setTimeout(function() {
                    h.mainMusic.fadeInOut();
                  }, 2800);
              }),
              !0
            );
          }),
          M.on('click', function(e) {
            var t = new Date().getTime();
            return (
              Object(g.a)('c_pv', 'dressing', 'from_last', t - G),
              (G = t),
              W(S).then(function() {
                return o({
                  targets: E[0],
                  duration: 800,
                  left: ['10rem', 0],
                  easing: 'easeOutQuad',
                  begin: function() {
                    return E.show();
                  },
                  complete: function() {
                    F.hide(), y.hide(), A('#flowers').hide();
                  },
                });
              }),
              !0
            );
          }),
          D.on('click', function(A) {
            var e = new Date().getTime();
            return (
              Object(g.a)('c_pv', 'albumn', 'from_last', e - G),
              (G = e),
              h.mute(),
              !0
            );
          });
        var j = null;
        function q(A, e, t, n) {
          void 0 === n && (n = 1);
          var r = function(A) {
            return {
              value: A.map(function(A) {
                return A + 'rem';
              }),
              easing: 'linear',
              duration: (1e3 * (A[0] - A[1])) / n,
            };
          };
          return o({ targets: A[0], loop: !0, left: [r(e), r(t)] });
        }
        !(function() {
          var e = (function(A) {
            for (
              var e = window.location.search.substring(1).split('&'), t = 0;
              t < e.length;
              t++
            ) {
              var n = e[t].split('=');
              if (n[0] == A) return n[1];
            }
            return null;
          })('p');
          if (e) {
            var t = l.a.decode(e);
            A('#envelope-invitee').text(t), A('#envelope-paper').hide();
          } else A('#envelope-with-name').hide();
        })();
        var Z,
          $,
          AA = 'hair',
          eA = 'eyes',
          tA = 'mouth',
          nA = 'clothes',
          rA = 'pants',
          oA =
            (((Z = {})[AA] = 16),
            (Z[eA] = 9),
            (Z[tA] = 7),
            (Z[nA] = 11),
            (Z[rA] = 8),
            Z),
          iA =
            ((($ = {})[AA] = 1),
            ($[eA] = 1),
            ($[tA] = 1),
            ($[nA] = 1),
            ($[rA] = 1),
            $),
          aA = AA,
          sA = A('#part-list'),
          cA = A('#item-list'),
          uA = A('#model'),
          lA = A('#btn-photo');
        function BA(A, e, t) {
          return {
            targets: F.find('.model')[0],
            offset: '+=' + t,
            duration: 300,
            right: { value: [A + 'rem', e + 'rem'], easing: 'linear' },
            bottom: [
              {
                value: ['5.227rem', 5.227 + 0.2 + 'rem'],
                duration: 150,
                easing: 'easeOutQuad',
              },
              { value: '5.227rem', duration: 150, easing: 'easeOutQuad' },
            ],
          };
        }
        function dA(A) {
          return [
            {
              targets: A[0],
              offset: '+=800',
              duration: 200,
              opacity: [0, 1],
              easing: 'linear',
              begin: function() {
                return A.show();
              },
            },
            {
              targets: A[0],
              offset: '+=500',
              duration: 200,
              opacity: 0,
              easing: 'linear',
              complete: function() {
                return A.hide();
              },
            },
          ];
        }
        function gA() {
          h.photoSound.play();
          var e = A('#flash');
          return o({
            targets: e[0],
            opacity: [
              { value: 1, duration: 100, easing: 'easeOutQuad' },
              { value: 0, duration: 200, delay: 100, easing: 'easeInQuad' },
            ],
            begin: function() {
              return e.show();
            },
            complete: function() {
              return e.hide();
            },
          });
        }
        function fA(A, e) {
          cA.removeClass(aA).addClass(e);
          for (var t = [], n = 0; n < oA[e]; ++n)
            t.push(
              '\n            <li class="' +
                (n + 1 === iA[e] ? 'active' : '') +
                '">\n                <div class="legend" style="background-image: url(' +
                w +
                e +
                '-' +
                (n + 1) +
                '.png);">\n            </li>\n        ',
            );
          A.html(t.join('')), (A.parent()[0].scrollLeft = 0);
        }
        fA(cA, aA),
          sA.on('click', 'li', function(e) {
            sA.children().removeClass('active');
            var t = A(e.currentTarget);
            t.addClass('active');
            var n = t.data('name');
            return fA(cA, n), (aA = n), !0;
          }),
          cA.on('click', 'li', function(e) {
            cA.children().removeClass('active');
            var t = A(e.currentTarget);
            return (
              t.addClass('active'),
              (iA[aA] = t.index() + 1),
              uA
                .find('.' + aA)
                .attr('src', '' + w + aA + '-' + iA[aA] + '.png'),
              !0
            );
          }),
          lA.on('click', function(e) {
            var t = new Date().getTime();
            Object(g.a)('c_pv', 'photo', 'from_last', t - G), (G = t);
            var n = w.length,
              r = {
                hair: A('#model .hair')
                  .attr('src'),
                eyes: A('#model .eyes')
                  .attr('src'),
                mouth: A('#model .mouth')
                  .attr('src'),
                pants: A('#model .pants')
                  .attr('src'),
                clothes: A('#model .clothes')
                  .attr('src'),
              };

            return (
              Object(g.a)('auto', 'clothing', '', JSON.stringify(r)),
              H.css('left', '2.883rem'),
              uA
                .clone()
                .removeAttr('id')
                .insertBefore(H[0]),
              v.css('z-index', -1).show(),
              (function() {
                var e = new Date(),
                  t = function(A) {
                    return A < 10 ? '0' + A : A;
                  };
                A('#photo-time').text(
                  e.getFullYear() +
                    '.' +
                    t(e.getMonth() + 1) +
                    '.' +
                    t(e.getDate()) +
                    ' ' +
                    t(e.getHours()) +
                    ':' +
                    t(e.getMinutes()),
                );
                var n = uA.clone().removeAttr('id'),
                  r = n.children(),
                  o = r.length,
                  a = 0;
                A.each(r, function(e, t) {
                  var n = A(t);
                  return (
                    n
                      .one('load', function() {
                        ++a === o &&
                          setTimeout(function() {
                            var e = A('#photo');
                            i(e[0]).then(function(t) {
                              var n = t.toDataURL('image/png');
                              (function(e) {
                                return new Promise(function(t) {
                                  A.ajax({
                                    url: 'http://umeecorn.cn/store',
                                    type: 'POST',
                                    contentType: 'application/json',
                                    data: JSON.stringify({ url: e }),
                                    success: function(A) {
                                      A.data && t(A.data);
                                    },
                                  });
                                });
                              })(n).then(function(A) {
                                return e.append(
                                  '<img class="share-image" src=' + A + '>',
                                );
                              });
                            });
                          }, 1e3);
                      })
                      .attr(
                        'src',
                        A(t)
                          .attr('src'),
                      ),
                    !0
                  );
                }),
  
                  A('#photo-content').append(n);
              })(),
              o({
                targets: E[0],
                duration: 800,
                left: '10rem',
                easing: 'easeInQuad',
                begin: function() {
                  return F.show();
                },
                complete: function() {
                  return E.hide();
                },
              })
                .finished.then(function() {
                  return (
                    o
                      .timeline()
                      .add([
                        BA(2.604, 2.704, 800),
                        BA(2.704, 2.604 + 0.2, 1700),
                        BA(2.604 + 0.2, 2.904, 1700),
                      ]),
                    ((e = A('.countdown')),
                    o
                      .timeline()
                      .add(dA(e.eq(2)).concat(dA(e.eq(1)), dA(e.eq(0)))))
                      .finished
                  );
                  var e;
                })
                .then(function() {
                  return Object(d.a)(900);
                })
                .then(gA),
              Object(d.a)(7050).then(function() {
                var e;
                (e = A('#photo-mask').show()),
                  o({
                    targets: e[0],
                    opacity: {
                      value: 0,
                      duration: 1e3,
                      delay: 200,
                      easing: 'easeInQuad',
                    },
                  }),
                  F.hide(),
                  v.css('z-index', 0);
              }),
              !0
            );
          }),
          A('#about-back').on('click', function() {
            return (
              Object(g.a)(
                'btn_clk',
                'hide_about',
                '',
                j - new Date().getTime(),
              ),
              o({
                targets: b[0],
                duration: 400,
                opacity: 0,
                easing: 'linear',
                complete: function() {
                  return b.hide();
                },
              }),
              !0
            );
          });
      }.call(e, t(30));
  },
  function(A, e, t) {
    var n, r;
    (r = function() {
      var e,
        t = (function() {
          var A,
            e,
            t,
            n,
            r,
            o,
            i = [],
            a = i.concat,
            s = i.filter,
            c = i.slice,
            u = window.document,
            l = {},
            B = {},
            d = {
              'column-count': 1,
              columns: 1,
              'font-weight': 1,
              'line-height': 1,
              opacity: 1,
              'z-index': 1,
              zoom: 1,
            },
            g = /^\s*<(\w+|!)[^>]*>/,
            f = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            h = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            w = /^(?:body|html)$/i,
            p = /([A-Z])/g,
            Q = [
              'val',
              'css',
              'html',
              'text',
              'data',
              'width',
              'height',
              'offset',
            ],
            U = u.createElement('table'),
            m = u.createElement('tr'),
            C = {
              tr: u.createElement('tbody'),
              tbody: U,
              thead: U,
              tfoot: U,
              td: m,
              th: m,
              '*': u.createElement('div'),
            },
            F = /complete|loaded|interactive/,
            E = /^[\w-]*$/,
            v = {},
            b = v.toString,
            _ = {},
            H = u.createElement('div'),
            y = {
              tabindex: 'tabIndex',
              readonly: 'readOnly',
              for: 'htmlFor',
              class: 'className',
              maxlength: 'maxLength',
              cellspacing: 'cellSpacing',
              cellpadding: 'cellPadding',
              rowspan: 'rowSpan',
              colspan: 'colSpan',
              usemap: 'useMap',
              frameborder: 'frameBorder',
              contenteditable: 'contentEditable',
            },
            N =
              Array.isArray ||
              function(A) {
                return A instanceof Array;
              };
          function T(A) {
            return null == A ? String(A) : v[b.call(A)] || 'object';
          }
          function I(A) {
            return 'function' == T(A);
          }
          function K(A) {
            return null != A && A == A.window;
          }
          function S(A) {
            return null != A && A.nodeType == A.DOCUMENT_NODE;
          }
          function O(A) {
            return 'object' == T(A);
          }
          function L(A) {
            return (
              O(A) && !K(A) && Object.getPrototypeOf(A) == Object.prototype
            );
          }
          function M(A) {
            var e = !!A && 'length' in A && A.length,
              n = t.type(A);
            return (
              'function' != n &&
              !K(A) &&
              ('array' == n ||
                0 === e ||
                ('number' == typeof e && e > 0 && e - 1 in A))
            );
          }
          function D(A) {
            return A.replace(/::/g, '/')
              .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
              .replace(/([a-z\d])([A-Z])/g, '$1_$2')
              .replace(/_/g, '-')
              .toLowerCase();
          }
          function x(A) {
            return A in B
              ? B[A]
              : (B[A] = new RegExp('(^|\\s)' + A + '(\\s|$)'));
          }
          function R(A, e) {
            return 'number' != typeof e || d[D(A)] ? e : e + 'px';
          }
          function P(A) {
            return 'children' in A
              ? c.call(A.children)
              : t.map(A.childNodes, function(A) {
                  if (1 == A.nodeType) return A;
                });
          }
          function k(A, e) {
            var t,
              n = A ? A.length : 0;
            for (t = 0; t < n; t++) this[t] = A[t];
            (this.length = n), (this.selector = e || '');
          }
          function z(A, e) {
            return null == e ? t(A) : t(A).filter(e);
          }
          function X(A, e, t, n) {
            return I(e) ? e.call(A, t, n) : e;
          }
          function V(A, e, t) {
            null == t ? A.removeAttribute(e) : A.setAttribute(e, t);
          }
          function G(e, t) {
            var n = e.className || '',
              r = n && n.baseVal !== A;
            if (t === A) return r ? n.baseVal : n;
            r ? (n.baseVal = t) : (e.className = t);
          }
          function J(A) {
            try {
              return A
                ? 'true' == A ||
                    ('false' != A &&
                      ('null' == A
                        ? null
                        : +A + '' == A
                        ? +A
                        : /^[\[\{]/.test(A)
                        ? t.parseJSON(A)
                        : A))
                : A;
            } catch (e) {
              return A;
            }
          }
          return (
            (_.matches = function(A, e) {
              if (!e || !A || 1 !== A.nodeType) return !1;
              var t =
                A.matches ||
                A.webkitMatchesSelector ||
                A.mozMatchesSelector ||
                A.oMatchesSelector ||
                A.matchesSelector;
              if (t) return t.call(A, e);
              var n,
                r = A.parentNode,
                o = !r;
              return (
                o && (r = H).appendChild(A),
                (n = ~_.qsa(r, e).indexOf(A)),
                o && H.removeChild(A),
                n
              );
            }),
            (r = function(A) {
              return A.replace(/-+(.)?/g, function(A, e) {
                return e ? e.toUpperCase() : '';
              });
            }),
            (o = function(A) {
              return s.call(A, function(e, t) {
                return A.indexOf(e) == t;
              });
            }),
            (_.fragment = function(e, n, r) {
              var o, i, a;
              return (
                f.test(e) && (o = t(u.createElement(RegExp.$1))),
                o ||
                  (e.replace && (e = e.replace(h, '<$1></$2>')),
                  n === A && (n = g.test(e) && RegExp.$1),
                  n in C || (n = '*'),
                  ((a = C[n]).innerHTML = '' + e),
                  (o = t.each(c.call(a.childNodes), function() {
                    a.removeChild(this);
                  }))),
                L(r) &&
                  ((i = t(o)),
                  t.each(r, function(A, e) {
                    Q.indexOf(A) > -1 ? i[A](e) : i.attr(A, e);
                  })),
                o
              );
            }),
            (_.Z = function(A, e) {
              return new k(A, e);
            }),
            (_.isZ = function(A) {
              return A instanceof _.Z;
            }),
            (_.init = function(e, n) {
              var r, o;
              if (!e) return _.Z();
              if ('string' == typeof e)
                if ('<' == (e = e.trim())[0] && g.test(e))
                  (r = _.fragment(e, RegExp.$1, n)), (e = null);
                else {
                  if (n !== A) return t(n).find(e);
                  r = _.qsa(u, e);
                }
              else {
                if (I(e)) return t(u).ready(e);
                if (_.isZ(e)) return e;
                if (N(e))
                  (o = e),
                    (r = s.call(o, function(A) {
                      return null != A;
                    }));
                else if (O(e)) (r = [e]), (e = null);
                else if (g.test(e))
                  (r = _.fragment(e.trim(), RegExp.$1, n)), (e = null);
                else {
                  if (n !== A) return t(n).find(e);
                  r = _.qsa(u, e);
                }
              }
              return _.Z(r, e);
            }),
            ((t = function(A, e) {
              return _.init(A, e);
            }).extend = function(t) {
              var n,
                r = c.call(arguments, 1);
              return (
                'boolean' == typeof t && ((n = t), (t = r.shift())),
                r.forEach(function(r) {
                  !(function t(n, r, o) {
                    for (e in r)
                      o && (L(r[e]) || N(r[e]))
                        ? (L(r[e]) && !L(n[e]) && (n[e] = {}),
                          N(r[e]) && !N(n[e]) && (n[e] = []),
                          t(n[e], r[e], o))
                        : r[e] !== A && (n[e] = r[e]);
                  })(t, r, n);
                }),
                t
              );
            }),
            (_.qsa = function(A, e) {
              var t,
                n = '#' == e[0],
                r = !n && '.' == e[0],
                o = n || r ? e.slice(1) : e,
                i = E.test(o);
              return A.getElementById && i && n
                ? (t = A.getElementById(o))
                  ? [t]
                  : []
                : 1 !== A.nodeType && 9 !== A.nodeType && 11 !== A.nodeType
                ? []
                : c.call(
                    i && !n && A.getElementsByClassName
                      ? r
                        ? A.getElementsByClassName(o)
                        : A.getElementsByTagName(e)
                      : A.querySelectorAll(e),
                  );
            }),
            (t.contains = u.documentElement.contains
              ? function(A, e) {
                  return A !== e && A.contains(e);
                }
              : function(A, e) {
                  for (; e && (e = e.parentNode); ) if (e === A) return !0;
                  return !1;
                }),
            (t.type = T),
            (t.isFunction = I),
            (t.isWindow = K),
            (t.isArray = N),
            (t.isPlainObject = L),
            (t.isEmptyObject = function(A) {
              var e;
              for (e in A) return !1;
              return !0;
            }),
            (t.isNumeric = function(A) {
              var e = Number(A),
                t = typeof A;
              return (
                (null != A &&
                  'boolean' != t &&
                  ('string' != t || A.length) &&
                  !isNaN(e) &&
                  isFinite(e)) ||
                !1
              );
            }),
            (t.inArray = function(A, e, t) {
              return i.indexOf.call(e, A, t);
            }),
            (t.camelCase = r),
            (t.trim = function(A) {
              return null == A ? '' : String.prototype.trim.call(A);
            }),
            (t.uuid = 0),
            (t.support = {}),
            (t.expr = {}),
            (t.noop = function() {}),
            (t.map = function(A, e) {
              var n,
                r,
                o,
                i,
                a = [];
              if (M(A))
                for (r = 0; r < A.length; r++)
                  null != (n = e(A[r], r)) && a.push(n);
              else for (o in A) null != (n = e(A[o], o)) && a.push(n);
              return (i = a).length > 0 ? t.fn.concat.apply([], i) : i;
            }),
            (t.each = function(A, e) {
              var t, n;
              if (M(A)) {
                for (t = 0; t < A.length; t++)
                  if (!1 === e.call(A[t], t, A[t])) return A;
              } else for (n in A) if (!1 === e.call(A[n], n, A[n])) return A;
              return A;
            }),
            (t.grep = function(A, e) {
              return s.call(A, e);
            }),
            window.JSON && (t.parseJSON = JSON.parse),
            t.each(
              'Boolean Number String Function Array Date RegExp Object Error'.split(
                ' ',
              ),
              function(A, e) {
                v['[object ' + e + ']'] = e.toLowerCase();
              },
            ),
            (t.fn = {
              constructor: _.Z,
              length: 0,
              forEach: i.forEach,
              reduce: i.reduce,
              push: i.push,
              sort: i.sort,
              splice: i.splice,
              indexOf: i.indexOf,
              concat: function() {
                var A,
                  e,
                  t = [];
                for (A = 0; A < arguments.length; A++)
                  (e = arguments[A]), (t[A] = _.isZ(e) ? e.toArray() : e);
                return a.apply(_.isZ(this) ? this.toArray() : this, t);
              },
              map: function(A) {
                return t(
                  t.map(this, function(e, t) {
                    return A.call(e, t, e);
                  }),
                );
              },
              slice: function() {
                return t(c.apply(this, arguments));
              },
              ready: function(A) {
                return (
                  F.test(u.readyState) && u.body
                    ? A(t)
                    : u.addEventListener(
                        'DOMContentLoaded',
                        function() {
                          A(t);
                        },
                        !1,
                      ),
                  this
                );
              },
              get: function(e) {
                return e === A
                  ? c.call(this)
                  : this[e >= 0 ? e : e + this.length];
              },
              toArray: function() {
                return this.get();
              },
              size: function() {
                return this.length;
              },
              remove: function() {
                return this.each(function() {
                  null != this.parentNode && this.parentNode.removeChild(this);
                });
              },
              each: function(A) {
                return (
                  i.every.call(this, function(e, t) {
                    return !1 !== A.call(e, t, e);
                  }),
                  this
                );
              },
              filter: function(A) {
                return I(A)
                  ? this.not(this.not(A))
                  : t(
                      s.call(this, function(e) {
                        return _.matches(e, A);
                      }),
                    );
              },
              add: function(A, e) {
                return t(o(this.concat(t(A, e))));
              },
              is: function(A) {
                return this.length > 0 && _.matches(this[0], A);
              },
              not: function(e) {
                var n = [];
                if (I(e) && e.call !== A)
                  this.each(function(A) {
                    e.call(this, A) || n.push(this);
                  });
                else {
                  var r =
                    'string' == typeof e
                      ? this.filter(e)
                      : M(e) && I(e.item)
                      ? c.call(e)
                      : t(e);
                  this.forEach(function(A) {
                    r.indexOf(A) < 0 && n.push(A);
                  });
                }
                return t(n);
              },
              has: function(A) {
                return this.filter(function() {
                  return O(A)
                    ? t.contains(this, A)
                    : t(this)
                        .find(A)
                        .size();
                });
              },
              eq: function(A) {
                return -1 === A ? this.slice(A) : this.slice(A, +A + 1);
              },
              first: function() {
                var A = this[0];
                return A && !O(A) ? A : t(A);
              },
              last: function() {
                var A = this[this.length - 1];
                return A && !O(A) ? A : t(A);
              },
              find: function(A) {
                var e = this;
                return A
                  ? 'object' == typeof A
                    ? t(A).filter(function() {
                        var A = this;
                        return i.some.call(e, function(e) {
                          return t.contains(e, A);
                        });
                      })
                    : 1 == this.length
                    ? t(_.qsa(this[0], A))
                    : this.map(function() {
                        return _.qsa(this, A);
                      })
                  : t();
              },
              closest: function(A, e) {
                var n = [],
                  r = 'object' == typeof A && t(A);
                return (
                  this.each(function(t, o) {
                    for (; o && !(r ? r.indexOf(o) >= 0 : _.matches(o, A)); )
                      o = o !== e && !S(o) && o.parentNode;
                    o && n.indexOf(o) < 0 && n.push(o);
                  }),
                  t(n)
                );
              },
              parents: function(A) {
                for (var e = [], n = this; n.length > 0; )
                  n = t.map(n, function(A) {
                    if ((A = A.parentNode) && !S(A) && e.indexOf(A) < 0)
                      return e.push(A), A;
                  });
                return z(e, A);
              },
              parent: function(A) {
                return z(o(this.pluck('parentNode')), A);
              },
              children: function(A) {
                return z(
                  this.map(function() {
                    return P(this);
                  }),
                  A,
                );
              },
              contents: function() {
                return this.map(function() {
                  return this.contentDocument || c.call(this.childNodes);
                });
              },
              siblings: function(A) {
                return z(
                  this.map(function(A, e) {
                    return s.call(P(e.parentNode), function(A) {
                      return A !== e;
                    });
                  }),
                  A,
                );
              },
              empty: function() {
                return this.each(function() {
                  this.innerHTML = '';
                });
              },
              pluck: function(A) {
                return t.map(this, function(e) {
                  return e[A];
                });
              },
              show: function() {
                return this.each(function() {
                  var A, e, t;
                  'none' == this.style.display && (this.style.display = ''),
                    'none' ==
                      getComputedStyle(this, '').getPropertyValue('display') &&
                      (this.style.display =
                        ((A = this.nodeName),
                        l[A] ||
                          ((e = u.createElement(A)),
                          u.body.appendChild(e),
                          (t = getComputedStyle(e, '').getPropertyValue(
                            'display',
                          )),
                          e.parentNode.removeChild(e),
                          'none' == t && (t = 'block'),
                          (l[A] = t)),
                        l[A]));
                });
              },
              replaceWith: function(A) {
                return this.before(A).remove();
              },
              wrap: function(A) {
                var e = I(A);
                if (this[0] && !e)
                  var n = t(A).get(0),
                    r = n.parentNode || this.length > 1;
                return this.each(function(o) {
                  t(this).wrapAll(
                    e ? A.call(this, o) : r ? n.cloneNode(!0) : n,
                  );
                });
              },
              wrapAll: function(A) {
                if (this[0]) {
                  var e;
                  for (
                    t(this[0]).before((A = t(A)));
                    (e = A.children()).length;

                  )
                    A = e.first();
                  t(A).append(this);
                }
                return this;
              },
              wrapInner: function(A) {
                var e = I(A);
                return this.each(function(n) {
                  var r = t(this),
                    o = r.contents(),
                    i = e ? A.call(this, n) : A;
                  o.length ? o.wrapAll(i) : r.append(i);
                });
              },
              unwrap: function() {
                return (
                  this.parent().each(function() {
                    t(this).replaceWith(t(this).children());
                  }),
                  this
                );
              },
              clone: function() {
                return this.map(function() {
                  return this.cloneNode(!0);
                });
              },
              hide: function() {
                return this.css('display', 'none');
              },
              toggle: function(e) {
                return this.each(function() {
                  var n = t(this);
                  (e === A
                  ? 'none' == n.css('display')
                  : e)
                    ? n.show()
                    : n.hide();
                });
              },
              prev: function(A) {
                return t(this.pluck('previousElementSibling')).filter(A || '*');
              },
              next: function(A) {
                return t(this.pluck('nextElementSibling')).filter(A || '*');
              },
              html: function(A) {
                return 0 in arguments
                  ? this.each(function(e) {
                      var n = this.innerHTML;
                      t(this)
                        .empty()
                        .append(X(this, A, e, n));
                    })
                  : 0 in this
                  ? this[0].innerHTML
                  : null;
              },
              text: function(A) {
                return 0 in arguments
                  ? this.each(function(e) {
                      var t = X(this, A, e, this.textContent);
                      this.textContent = null == t ? '' : '' + t;
                    })
                  : 0 in this
                  ? this.pluck('textContent').join('')
                  : null;
              },
              attr: function(t, n) {
                var r;
                return 'string' != typeof t || 1 in arguments
                  ? this.each(function(A) {
                      if (1 === this.nodeType)
                        if (O(t)) for (e in t) V(this, e, t[e]);
                        else V(this, t, X(this, n, A, this.getAttribute(t)));
                    })
                  : 0 in this &&
                    1 == this[0].nodeType &&
                    null != (r = this[0].getAttribute(t))
                  ? r
                  : A;
              },
              removeAttr: function(A) {
                return this.each(function() {
                  1 === this.nodeType &&
                    A.split(' ').forEach(function(A) {
                      V(this, A);
                    }, this);
                });
              },
              prop: function(A, e) {
                return (
                  (A = y[A] || A),
                  1 in arguments
                    ? this.each(function(t) {
                        this[A] = X(this, e, t, this[A]);
                      })
                    : this[0] && this[0][A]
                );
              },
              removeProp: function(A) {
                return (
                  (A = y[A] || A),
                  this.each(function() {
                    delete this[A];
                  })
                );
              },
              data: function(e, t) {
                var n = 'data-' + e.replace(p, '-$1').toLowerCase(),
                  r = 1 in arguments ? this.attr(n, t) : this.attr(n);
                return null !== r ? J(r) : A;
              },
              val: function(A) {
                return 0 in arguments
                  ? (null == A && (A = ''),
                    this.each(function(e) {
                      this.value = X(this, A, e, this.value);
                    }))
                  : this[0] &&
                      (this[0].multiple
                        ? t(this[0])
                            .find('option')
                            .filter(function() {
                              return this.selected;
                            })
                            .pluck('value')
                        : this[0].value);
              },
              offset: function(A) {
                if (A)
                  return this.each(function(e) {
                    var n = t(this),
                      r = X(this, A, e, n.offset()),
                      o = n.offsetParent().offset(),
                      i = { top: r.top - o.top, left: r.left - o.left };
                    'static' == n.css('position') && (i.position = 'relative'),
                      n.css(i);
                  });
                if (!this.length) return null;
                if (
                  u.documentElement !== this[0] &&
                  !t.contains(u.documentElement, this[0])
                )
                  return { top: 0, left: 0 };
                var e = this[0].getBoundingClientRect();
                return {
                  left: e.left + window.pageXOffset,
                  top: e.top + window.pageYOffset,
                  width: Math.round(e.width),
                  height: Math.round(e.height),
                };
              },
              css: function(A, n) {
                if (arguments.length < 2) {
                  var o = this[0];
                  if ('string' == typeof A) {
                    if (!o) return;
                    return (
                      o.style[r(A)] ||
                      getComputedStyle(o, '').getPropertyValue(A)
                    );
                  }
                  if (N(A)) {
                    if (!o) return;
                    var i = {},
                      a = getComputedStyle(o, '');
                    return (
                      t.each(A, function(A, e) {
                        i[e] = o.style[r(e)] || a.getPropertyValue(e);
                      }),
                      i
                    );
                  }
                }
                var s = '';
                if ('string' == T(A))
                  n || 0 === n
                    ? (s = D(A) + ':' + R(A, n))
                    : this.each(function() {
                        this.style.removeProperty(D(A));
                      });
                else
                  for (e in A)
                    A[e] || 0 === A[e]
                      ? (s += D(e) + ':' + R(e, A[e]) + ';')
                      : this.each(function() {
                          this.style.removeProperty(D(e));
                        });
                return this.each(function() {
                  this.style.cssText += ';' + s;
                });
              },
              index: function(A) {
                return A
                  ? this.indexOf(t(A)[0])
                  : this.parent()
                      .children()
                      .indexOf(this[0]);
              },
              hasClass: function(A) {
                return (
                  !!A &&
                  i.some.call(
                    this,
                    function(A) {
                      return this.test(G(A));
                    },
                    x(A),
                  )
                );
              },
              addClass: function(A) {
                return A
                  ? this.each(function(e) {
                      if ('className' in this) {
                        n = [];
                        var r = G(this);
                        X(this, A, e, r)
                          .split(/\s+/g)
                          .forEach(function(A) {
                            t(this).hasClass(A) || n.push(A);
                          }, this),
                          n.length && G(this, r + (r ? ' ' : '') + n.join(' '));
                      }
                    })
                  : this;
              },
              removeClass: function(e) {
                return this.each(function(t) {
                  if ('className' in this) {
                    if (e === A) return G(this, '');
                    (n = G(this)),
                      X(this, e, t, n)
                        .split(/\s+/g)
                        .forEach(function(A) {
                          n = n.replace(x(A), ' ');
                        }),
                      G(this, n.trim());
                  }
                });
              },
              toggleClass: function(e, n) {
                return e
                  ? this.each(function(r) {
                      var o = t(this);
                      X(this, e, r, G(this))
                        .split(/\s+/g)
                        .forEach(function(e) {
                          (n === A
                          ? !o.hasClass(e)
                          : n)
                            ? o.addClass(e)
                            : o.removeClass(e);
                        });
                    })
                  : this;
              },
              scrollTop: function(e) {
                if (this.length) {
                  var t = 'scrollTop' in this[0];
                  return e === A
                    ? t
                      ? this[0].scrollTop
                      : this[0].pageYOffset
                    : this.each(
                        t
                          ? function() {
                              this.scrollTop = e;
                            }
                          : function() {
                              this.scrollTo(this.scrollX, e);
                            },
                      );
                }
              },
              scrollLeft: function(e) {
                if (this.length) {
                  var t = 'scrollLeft' in this[0];
                  return e === A
                    ? t
                      ? this[0].scrollLeft
                      : this[0].pageXOffset
                    : this.each(
                        t
                          ? function() {
                              this.scrollLeft = e;
                            }
                          : function() {
                              this.scrollTo(e, this.scrollY);
                            },
                      );
                }
              },
              position: function() {
                if (this.length) {
                  var A = this[0],
                    e = this.offsetParent(),
                    n = this.offset(),
                    r = w.test(e[0].nodeName)
                      ? { top: 0, left: 0 }
                      : e.offset();
                  return (
                    (n.top -= parseFloat(t(A).css('margin-top')) || 0),
                    (n.left -= parseFloat(t(A).css('margin-left')) || 0),
                    (r.top += parseFloat(t(e[0]).css('border-top-width')) || 0),
                    (r.left +=
                      parseFloat(t(e[0]).css('border-left-width')) || 0),
                    { top: n.top - r.top, left: n.left - r.left }
                  );
                }
              },
              offsetParent: function() {
                return this.map(function() {
                  for (
                    var A = this.offsetParent || u.body;
                    A &&
                    !w.test(A.nodeName) &&
                    'static' == t(A).css('position');

                  )
                    A = A.offsetParent;
                  return A;
                });
              },
            }),
            (t.fn.detach = t.fn.remove),
            ['width', 'height'].forEach(function(e) {
              var n = e.replace(/./, function(A) {
                return A[0].toUpperCase();
              });
              t.fn[e] = function(r) {
                var o,
                  i = this[0];
                return r === A
                  ? K(i)
                    ? i['inner' + n]
                    : S(i)
                    ? i.documentElement['scroll' + n]
                    : (o = this.offset()) && o[e]
                  : this.each(function(A) {
                      (i = t(this)).css(e, X(this, r, A, i[e]()));
                    });
              };
            }),
            ['after', 'prepend', 'before', 'append'].forEach(function(e, n) {
              var r = n % 2;
              (t.fn[e] = function() {
                var e,
                  o,
                  i = t.map(arguments, function(n) {
                    var r = [];
                    return 'array' == (e = T(n))
                      ? (n.forEach(function(e) {
                          return e.nodeType !== A
                            ? r.push(e)
                            : t.zepto.isZ(e)
                            ? (r = r.concat(e.get()))
                            : void (r = r.concat(_.fragment(e)));
                        }),
                        r)
                      : 'object' == e || null == n
                      ? n
                      : _.fragment(n);
                  }),
                  a = this.length > 1;
                return i.length < 1
                  ? this
                  : this.each(function(A, e) {
                      (o = r ? e : e.parentNode),
                        (e =
                          0 == n
                            ? e.nextSibling
                            : 1 == n
                            ? e.firstChild
                            : 2 == n
                            ? e
                            : null);
                      var s = t.contains(u.documentElement, o);
                      i.forEach(function(A) {
                        if (a) A = A.cloneNode(!0);
                        else if (!o) return t(A).remove();
                        o.insertBefore(A, e),
                          s &&
                            (function A(e, t) {
                              t(e);
                              for (
                                var n = 0, r = e.childNodes.length;
                                n < r;
                                n++
                              )
                                A(e.childNodes[n], t);
                            })(A, function(A) {
                              if (
                                !(
                                  null == A.nodeName ||
                                  'SCRIPT' !== A.nodeName.toUpperCase() ||
                                  (A.type && 'text/javascript' !== A.type) ||
                                  A.src
                                )
                              ) {
                                var e = A.ownerDocument
                                  ? A.ownerDocument.defaultView
                                  : window;
                                e.eval.call(e, A.innerHTML);
                              }
                            });
                      });
                    });
              }),
                (t.fn[
                  r ? e + 'To' : 'insert' + (n ? 'Before' : 'After')
                ] = function(A) {
                  return t(A)[e](this), this;
                });
            }),
            (_.Z.prototype = k.prototype = t.fn),
            (_.uniq = o),
            (_.deserializeValue = J),
            (t.zepto = _),
            t
          );
        })();
      return (
        (window.Zepto = t),
        void 0 === window.$ && (window.$ = t),
        (A.exports = t),
        (function(A) {
          var e,
            t = 1,
            n = Array.prototype.slice,
            r = A.isFunction,
            o = function(A) {
              return 'string' == typeof A;
            },
            i = {},
            a = {},
            s = 'onfocusin' in window,
            c = { focus: 'focusin', blur: 'focusout' },
            u = { mouseenter: 'mouseover', mouseleave: 'mouseout' };
          function l(A) {
            return A._zid || (A._zid = t++);
          }
          function B(A, e, t, n) {
            if ((e = d(e)).ns)
              var r =
                ((o = e.ns),
                new RegExp('(?:^| )' + o.replace(' ', ' .* ?') + '(?: |$)'));
            var o;
            return (i[l(A)] || []).filter(function(A) {
              return (
                A &&
                (!e.e || A.e == e.e) &&
                (!e.ns || r.test(A.ns)) &&
                (!t || l(A.fn) === l(t)) &&
                (!n || A.sel == n)
              );
            });
          }
          function d(A) {
            var e = ('' + A).split('.');
            return {
              e: e[0],
              ns: e
                .slice(1)
                .sort()
                .join(' '),
            };
          }
          function g(A, e) {
            return (A.del && !s && A.e in c) || !!e;
          }
          function f(A) {
            return u[A] || (s && c[A]) || A;
          }
          function h(t, n, r, o, a, s, c) {
            var B = l(t),
              h = i[B] || (i[B] = []);
            n.split(/\s/).forEach(function(n) {
              if ('ready' == n) return A(document).ready(r);
              var i = d(n);
              (i.fn = r),
                (i.sel = a),
                i.e in u &&
                  (r = function(e) {
                    var t = e.relatedTarget;
                    if (!t || (t !== this && !A.contains(this, t)))
                      return i.fn.apply(this, arguments);
                  }),
                (i.del = s);
              var l = s || r;
              (i.proxy = function(A) {
                if (!(A = C(A)).isImmediatePropagationStopped()) {
                  A.data = o;
                  var n = l.apply(t, A._args == e ? [A] : [A].concat(A._args));
                  return (
                    !1 === n && (A.preventDefault(), A.stopPropagation()), n
                  );
                }
              }),
                (i.i = h.length),
                h.push(i),
                'addEventListener' in t &&
                  t.addEventListener(f(i.e), i.proxy, g(i, c));
            });
          }
          function w(A, e, t, n, r) {
            var o = l(A);
            (e || '').split(/\s/).forEach(function(e) {
              B(A, e, t, n).forEach(function(e) {
                delete i[o][e.i],
                  'removeEventListener' in A &&
                    A.removeEventListener(f(e.e), e.proxy, g(e, r));
              });
            });
          }
          (a.click = a.mousedown = a.mouseup = a.mousemove = 'MouseEvents'),
            (A.event = { add: h, remove: w }),
            (A.proxy = function(e, t) {
              var i = 2 in arguments && n.call(arguments, 2);
              if (r(e)) {
                var a = function() {
                  return e.apply(
                    t,
                    i ? i.concat(n.call(arguments)) : arguments,
                  );
                };
                return (a._zid = l(e)), a;
              }
              if (o(t))
                return i
                  ? (i.unshift(e[t], e), A.proxy.apply(null, i))
                  : A.proxy(e[t], e);
              throw new TypeError('expected function');
            }),
            (A.fn.bind = function(A, e, t) {
              return this.on(A, e, t);
            }),
            (A.fn.unbind = function(A, e) {
              return this.off(A, e);
            }),
            (A.fn.one = function(A, e, t, n) {
              return this.on(A, e, t, n, 1);
            });
          var p = function() {
              return !0;
            },
            Q = function() {
              return !1;
            },
            U = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
            m = {
              preventDefault: 'isDefaultPrevented',
              stopImmediatePropagation: 'isImmediatePropagationStopped',
              stopPropagation: 'isPropagationStopped',
            };
          function C(t, n) {
            return (
              (!n && t.isDefaultPrevented) ||
                (n || (n = t),
                A.each(m, function(A, e) {
                  var r = n[A];
                  (t[A] = function() {
                    return (this[e] = p), r && r.apply(n, arguments);
                  }),
                    (t[e] = Q);
                }),
                t.timeStamp || (t.timeStamp = Date.now()),
                (n.defaultPrevented !== e
                  ? n.defaultPrevented
                  : 'returnValue' in n
                  ? !1 === n.returnValue
                  : n.getPreventDefault && n.getPreventDefault()) &&
                  (t.isDefaultPrevented = p)),
              t
            );
          }
          function F(A) {
            var t,
              n = { originalEvent: A };
            for (t in A) U.test(t) || A[t] === e || (n[t] = A[t]);
            return C(n, A);
          }
          (A.fn.delegate = function(A, e, t) {
            return this.on(e, A, t);
          }),
            (A.fn.undelegate = function(A, e, t) {
              return this.off(e, A, t);
            }),
            (A.fn.live = function(e, t) {
              return A(document.body).delegate(this.selector, e, t), this;
            }),
            (A.fn.die = function(e, t) {
              return A(document.body).undelegate(this.selector, e, t), this;
            }),
            (A.fn.on = function(t, i, a, s, c) {
              var u,
                l,
                B = this;
              return t && !o(t)
                ? (A.each(t, function(A, e) {
                    B.on(A, i, a, e, c);
                  }),
                  B)
                : (o(i) || r(s) || !1 === s || ((s = a), (a = i), (i = e)),
                  (s !== e && !1 !== a) || ((s = a), (a = e)),
                  !1 === s && (s = Q),
                  B.each(function(e, r) {
                    c &&
                      (u = function(A) {
                        return w(r, A.type, s), s.apply(this, arguments);
                      }),
                      i &&
                        (l = function(e) {
                          var t,
                            o = A(e.target)
                              .closest(i, r)
                              .get(0);
                          if (o && o !== r)
                            return (
                              (t = A.extend(F(e), {
                                currentTarget: o,
                                liveFired: r,
                              })),
                              (u || s).apply(
                                o,
                                [t].concat(n.call(arguments, 1)),
                              )
                            );
                        }),
                      h(r, t, s, a, i, l || u);
                  }));
            }),
            (A.fn.off = function(t, n, i) {
              var a = this;
              return t && !o(t)
                ? (A.each(t, function(A, e) {
                    a.off(A, n, e);
                  }),
                  a)
                : (o(n) || r(i) || !1 === i || ((i = n), (n = e)),
                  !1 === i && (i = Q),
                  a.each(function() {
                    w(this, t, i, n);
                  }));
            }),
            (A.fn.trigger = function(e, t) {
              return (
                ((e =
                  o(e) || A.isPlainObject(e) ? A.Event(e) : C(e))._args = t),
                this.each(function() {
                  e.type in c && 'function' == typeof this[e.type]
                    ? this[e.type]()
                    : 'dispatchEvent' in this
                    ? this.dispatchEvent(e)
                    : A(this).triggerHandler(e, t);
                })
              );
            }),
            (A.fn.triggerHandler = function(e, t) {
              var n, r;
              return (
                this.each(function(i, a) {
                  ((n = F(o(e) ? A.Event(e) : e))._args = t),
                    (n.target = a),
                    A.each(B(a, e.type || e), function(A, e) {
                      if (((r = e.proxy(n)), n.isImmediatePropagationStopped()))
                        return !1;
                    });
                }),
                r
              );
            }),
            'focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error'
              .split(' ')
              .forEach(function(e) {
                A.fn[e] = function(A) {
                  return 0 in arguments ? this.bind(e, A) : this.trigger(e);
                };
              }),
            (A.Event = function(A, e) {
              o(A) || (A = (e = A).type);
              var t = document.createEvent(a[A] || 'Events'),
                n = !0;
              if (e)
                for (var r in e) 'bubbles' == r ? (n = !!e[r]) : (t[r] = e[r]);
              return t.initEvent(A, n, !0), C(t);
            });
        })(t),
        (function(A) {
          var e,
            t,
            n = +new Date(),
            r = window.document,
            o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            i = /^(?:text|application)\/javascript/i,
            a = /^(?:text|application)\/xml/i,
            s = 'application/json',
            c = 'text/html',
            u = /^\s*$/,
            l = r.createElement('a');
          function B(e, t, n, o) {
            if (e.global)
              return (function(e, t, n) {
                var r = A.Event(t);
                return A(e).trigger(r, n), !r.isDefaultPrevented();
              })(t || r, n, o);
          }
          function d(A, e) {
            var t = e.context;
            if (
              !1 === e.beforeSend.call(t, A, e) ||
              !1 === B(e, t, 'ajaxBeforeSend', [A, e])
            )
              return !1;
            B(e, t, 'ajaxSend', [A, e]);
          }
          function g(A, e, t, n) {
            var r = t.context;
            t.success.call(r, A, 'success', e),
              n && n.resolveWith(r, [A, 'success', e]),
              B(t, r, 'ajaxSuccess', [e, t, A]),
              h('success', e, t);
          }
          function f(A, e, t, n, r) {
            var o = n.context;
            n.error.call(o, t, e, A),
              r && r.rejectWith(o, [t, e, A]),
              B(n, o, 'ajaxError', [t, n, A || e]),
              h(e, t, n);
          }
          function h(e, t, n) {
            var r = n.context;
            n.complete.call(r, t, e),
              B(n, r, 'ajaxComplete', [t, n]),
              (function(e) {
                e.global && !--A.active && B(e, null, 'ajaxStop');
              })(n);
          }
          function w() {}
          function p(A, e) {
            return '' == e ? A : (A + '&' + e).replace(/[&?]{1,2}/, '?');
          }
          function Q(e, t, n, r) {
            return (
              A.isFunction(t) && ((r = n), (n = t), (t = void 0)),
              A.isFunction(n) || ((r = n), (n = void 0)),
              { url: e, data: t, success: n, dataType: r }
            );
          }
          (l.href = window.location.href),
            (A.active = 0),
            (A.ajaxJSONP = function(e, t) {
              if (!('type' in e)) return A.ajax(e);
              var o,
                i,
                a = e.jsonpCallback,
                s = (A.isFunction(a) ? a() : a) || 'Zepto' + n++,
                c = r.createElement('script'),
                u = window[s],
                l = function(e) {
                  A(c).triggerHandler('error', e || 'abort');
                },
                B = { abort: l };
              return (
                t && t.promise(B),
                A(c).on('load error', function(n, r) {
                  clearTimeout(i),
                    A(c)
                      .off()
                      .remove(),
                    'error' != n.type && o
                      ? g(o[0], B, e, t)
                      : f(null, r || 'error', B, e, t),
                    (window[s] = u),
                    o && A.isFunction(u) && u(o[0]),
                    (u = o = void 0);
                }),
                !1 === d(B, e)
                  ? (l('abort'), B)
                  : ((window[s] = function() {
                      o = arguments;
                    }),
                    (c.src = e.url.replace(/\?(.+)=\?/, '?$1=' + s)),
                    r.head.appendChild(c),
                    e.timeout > 0 &&
                      (i = setTimeout(function() {
                        l('timeout');
                      }, e.timeout)),
                    B)
              );
            }),
            (A.ajaxSettings = {
              type: 'GET',
              beforeSend: w,
              success: w,
              error: w,
              complete: w,
              context: null,
              global: !0,
              xhr: function() {
                return new window.XMLHttpRequest();
              },
              accepts: {
                script:
                  'text/javascript, application/javascript, application/x-javascript',
                json: s,
                xml: 'application/xml, text/xml',
                html: c,
                text: 'text/plain',
              },
              crossDomain: !1,
              timeout: 0,
              processData: !0,
              cache: !0,
              dataFilter: w,
            }),
            (A.ajax = function(n) {
              var o,
                h,
                Q = A.extend({}, n || {}),
                U = A.Deferred && A.Deferred();
              for (e in A.ajaxSettings)
                void 0 === Q[e] && (Q[e] = A.ajaxSettings[e]);
              !(function(e) {
                e.global && 0 == A.active++ && B(e, null, 'ajaxStart');
              })(Q),
                Q.crossDomain ||
                  (((o = r.createElement('a')).href = Q.url),
                  (o.href = o.href),
                  (Q.crossDomain =
                    l.protocol + '//' + l.host != o.protocol + '//' + o.host)),
                Q.url || (Q.url = window.location.toString()),
                (h = Q.url.indexOf('#')) > -1 && (Q.url = Q.url.slice(0, h)),
                (function(e) {
                  e.processData &&
                    e.data &&
                    'string' != A.type(e.data) &&
                    (e.data = A.param(e.data, e.traditional)),
                    !e.data ||
                      (e.type &&
                        'GET' != e.type.toUpperCase() &&
                        'jsonp' != e.dataType) ||
                      ((e.url = p(e.url, e.data)), (e.data = void 0));
                })(Q);
              var m = Q.dataType,
                C = /\?.+=\?/.test(Q.url);
              if (
                (C && (m = 'jsonp'),
                (!1 !== Q.cache &&
                  ((n && !0 === n.cache) || ('script' != m && 'jsonp' != m))) ||
                  (Q.url = p(Q.url, '_=' + Date.now())),
                'jsonp' == m)
              )
                return (
                  C ||
                    (Q.url = p(
                      Q.url,
                      Q.jsonp
                        ? Q.jsonp + '=?'
                        : !1 === Q.jsonp
                        ? ''
                        : 'callback=?',
                    )),
                  A.ajaxJSONP(Q, U)
                );
              var F,
                E = Q.accepts[m],
                v = {},
                b = function(A, e) {
                  v[A.toLowerCase()] = [A, e];
                },
                _ = /^([\w-]+:)\/\//.test(Q.url)
                  ? RegExp.$1
                  : window.location.protocol,
                H = Q.xhr(),
                y = H.setRequestHeader;
              if (
                (U && U.promise(H),
                Q.crossDomain || b('X-Requested-With', 'XMLHttpRequest'),
                b('Accept', E || '*/*'),
                (E = Q.mimeType || E) &&
                  (E.indexOf(',') > -1 && (E = E.split(',', 2)[0]),
                  H.overrideMimeType && H.overrideMimeType(E)),
                (Q.contentType ||
                  (!1 !== Q.contentType &&
                    Q.data &&
                    'GET' != Q.type.toUpperCase())) &&
                  b(
                    'Content-Type',
                    Q.contentType || 'application/x-www-form-urlencoded',
                  ),
                Q.headers)
              )
                for (t in Q.headers) b(t, Q.headers[t]);
              if (
                ((H.setRequestHeader = b),
                (H.onreadystatechange = function() {
                  if (4 == H.readyState) {
                    (H.onreadystatechange = w), clearTimeout(F);
                    var e,
                      t = !1;
                    if (
                      (H.status >= 200 && H.status < 300) ||
                      304 == H.status ||
                      (0 == H.status && 'file:' == _)
                    ) {
                      if (
                        ((m =
                          m ||
                          ((n =
                            Q.mimeType ||
                            H.getResponseHeader('content-type')) &&
                            (n = n.split(';', 2)[0]),
                          (n &&
                            (n == c
                              ? 'html'
                              : n == s
                              ? 'json'
                              : i.test(n)
                              ? 'script'
                              : a.test(n) && 'xml')) ||
                            'text')),
                        'arraybuffer' == H.responseType ||
                          'blob' == H.responseType)
                      )
                        e = H.response;
                      else {
                        e = H.responseText;
                        try {
                          (e = (function(A, e, t) {
                            if (t.dataFilter == w) return A;
                            var n = t.context;
                            return t.dataFilter.call(n, A, e);
                          })(e, m, Q)),
                            'script' == m
                              ? (0, eval)(e)
                              : 'xml' == m
                              ? (e = H.responseXML)
                              : 'json' == m &&
                                (e = u.test(e) ? null : A.parseJSON(e));
                        } catch (A) {
                          t = A;
                        }
                        if (t) return f(t, 'parsererror', H, Q, U);
                      }
                      g(e, H, Q, U);
                    } else
                      f(
                        H.statusText || null,
                        H.status ? 'error' : 'abort',
                        H,
                        Q,
                        U,
                      );
                  }
                  var n;
                }),
                !1 === d(H, Q))
              )
                return H.abort(), f(null, 'abort', H, Q, U), H;
              var N = !('async' in Q) || Q.async;
              if (
                (H.open(Q.type, Q.url, N, Q.username, Q.password), Q.xhrFields)
              )
                for (t in Q.xhrFields) H[t] = Q.xhrFields[t];
              for (t in v) y.apply(H, v[t]);
              return (
                Q.timeout > 0 &&
                  (F = setTimeout(function() {
                    (H.onreadystatechange = w),
                      H.abort(),
                      f(null, 'timeout', H, Q, U);
                  }, Q.timeout)),
                H.send(Q.data ? Q.data : null),
                H
              );
            }),
            (A.get = function() {
              return A.ajax(Q.apply(null, arguments));
            }),
            (A.post = function() {
              var e = Q.apply(null, arguments);
              return (e.type = 'POST'), A.ajax(e);
            }),
            (A.getJSON = function() {
              var e = Q.apply(null, arguments);
              return (e.dataType = 'json'), A.ajax(e);
            }),
            (A.fn.load = function(e, t, n) {
              if (!this.length) return this;
              var r,
                i = this,
                a = e.split(/\s/),
                s = Q(e, t, n),
                c = s.success;
              return (
                a.length > 1 && ((s.url = a[0]), (r = a[1])),
                (s.success = function(e) {
                  i.html(
                    r
                      ? A('<div>')
                          .html(e.replace(o, ''))
                          .find(r)
                      : e,
                  ),
                    c && c.apply(i, arguments);
                }),
                A.ajax(s),
                this
              );
            });
          var U = encodeURIComponent;
          A.param = function(e, t) {
            var n = [];
            return (
              (n.add = function(e, t) {
                A.isFunction(t) && (t = t()),
                  null == t && (t = ''),
                  this.push(U(e) + '=' + U(t));
              }),
              (function e(t, n, r, o) {
                var i,
                  a = A.isArray(n),
                  s = A.isPlainObject(n);
                A.each(n, function(n, c) {
                  (i = A.type(c)),
                    o &&
                      (n = r
                        ? o
                        : o +
                          '[' +
                          (s || 'object' == i || 'array' == i ? n : '') +
                          ']'),
                    !o && a
                      ? t.add(c.name, c.value)
                      : 'array' == i || (!r && 'object' == i)
                      ? e(t, c, r, n)
                      : t.add(n, c);
                });
              })(n, e, t),
              n.join('&').replace(/%20/g, '+')
            );
          };
        })(t),
        ((e = t).fn.serializeArray = function() {
          var A,
            t,
            n = [],
            r = function(e) {
              if (e.forEach) return e.forEach(r);
              n.push({ name: A, value: e });
            };
          return (
            this[0] &&
              e.each(this[0].elements, function(n, o) {
                (t = o.type),
                  (A = o.name) &&
                    'fieldset' != o.nodeName.toLowerCase() &&
                    !o.disabled &&
                    'submit' != t &&
                    'reset' != t &&
                    'button' != t &&
                    'file' != t &&
                    (('radio' != t && 'checkbox' != t) || o.checked) &&
                    r(e(o).val());
              }),
            n
          );
        }),
        (e.fn.serialize = function() {
          var A = [];
          return (
            this.serializeArray().forEach(function(e) {
              A.push(
                encodeURIComponent(e.name) + '=' + encodeURIComponent(e.value),
              );
            }),
            A.join('&')
          );
        }),
        (e.fn.submit = function(A) {
          if (0 in arguments) this.bind('submit', A);
          else if (this.length) {
            var t = e.Event('submit');
            this.eq(0).trigger(t),
              t.isDefaultPrevented() || this.get(0).submit();
          }
          return this;
        }),
        (function() {
          try {
            getComputedStyle(void 0);
          } catch (e) {
            var A = getComputedStyle;
            window.getComputedStyle = function(e, t) {
              try {
                return A(e, t);
              } catch (A) {
                return null;
              }
            };
          }
        })(),
        t
      );
    }),
      void 0 ===
        (n = function() {
          return r();
        }.call(e, t, e, A)) || (A.exports = n);
  },
  function(A, e, t) {
    var n = t(32);
    'string' == typeof n && (n = [[A.i, n, '']]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(34)(n, r);
    n.locals && (A.exports = n.locals);
  },
  function(A, e, t) {
    (A.exports = t(33)(!1)).push([
      A.i,
      '/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nq:before,\nblockquote:after,\nq:after {\n  content: \'\';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n}\nhtml,\nbody {\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.icon-img {\n  width: 600px;\n  height: 600px;\n  opacity: 0;\n  position: absolute;\n  top: -1000px;\n  left: -1000px;\n}\n.btn {\n  display: block;\n  width: 5.20833333rem;\n  height: 2.29166667rem;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.dialog {\n  display: none;\n  position: absolute;\n  left: 50%;\n  bottom: 50%;\n  width: 6.875rem;\n  height: 9.0625rem;\n  -webkit-transform: translate(-50%, 50%);\n          transform: translate(-50%, 50%);\n  text-align: center;\n  background: url(./images/dialog.png) no-repeat;\n  background-size: contain;\n  z-index: 100;\n}\n#mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: .25;\n  z-index: 99;\n}\n.model {\n  position: absolute;\n  width: 2.29166667rem;\n  height: 8.75rem;\n}\n.model .body {\n  width: 100%;\n  height: 100%;\n}\n.model .hair {\n  position: absolute;\n  top: -0.625rem;\n  left: 50%;\n  width: 4.375rem;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.model .eyes,\n.model .mouth {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.model .pants {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 2.70833333rem;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.model .clothes {\n  position: absolute;\n  top: 2.70833333rem;\n  left: 50%;\n  width: 2.70833333rem;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: bottom center;\n  background-size: 100%;\n}\n.bg .model {\n  bottom: 5.22746rem;\n  right: 2.604rem;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n#bg-loading {\n  background-color: #95ab72;\n  color: #3f552c;\n  text-align: center;\n  font-size: 0.4rem;\n}\n#loading-dots {\n  display: inline-block;\n  width: 0.3rem;\n  text-align: left;\n}\n#bg-loading-content {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  margin-top: -2rem;\n}\n#loading-process {\n  width: 5rem;\n  height: 0.4rem;\n  margin: 0.35rem auto;\n  border: 0.1rem solid #66824d;\n}\n#loading-process-content {\n  width: 0;\n  height: 100%;\n  background-color: #3f552c;\n}\n#bg-loading-tip {\n  position: absolute;\n  bottom: 0.5rem;\n  width: 100%;\n  text-align: center;\n}\n#bg-envelope {\n  background-color: #fcd8ba;\n  display: none;\n}\n.envelope-top {\n  position: absolute;\n  width: 8.54166667rem;\n  height: 11.45833333rem;\n  left: 0.72916667rem;\n  top: 50%;\n  margin-top: -5.72916667rem;\n}\n#envelope-front {\n  width: 8.54166667rem;\n  height: 11.45833333rem;\n}\n#envelope-back {\n  background-color: #a24242;\n}\n#envelope-hat {\n  height: 3.85416667rem;\n}\n#envelope-hat-opened {\n  display: none;\n  position: absolute;\n  width: 8.54166667rem;\n  left: 0.72916667rem;\n  bottom: 50%;\n  margin-bottom: 5.72916667rem;\n}\n#envelope-paper,\n#envelope-paper-name {\n  width: 8.54166667rem;\n  height: 11.45833333rem;\n}\n#envelope-invitee {\n  position: absolute;\n  right: 1.25rem;\n  top: 3.2rem;\n  -webkit-writing-mode: tb-rl;\n      -ms-writing-mode: tb-rl;\n          writing-mode: tb-rl;\n  font-size: 0.5rem;\n  font-family: STXingkai, STLiti, STKaiti, KaiTi, KaiTiGB2312;\n  font-weight: 700;\n}\n#btn-enter {\n  display: none;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  width: 4.94791667rem;\n  height: 1.875rem;\n  margin-left: -2.60416667rem;\n  background-image: url(./images/btn-enter.png);\n}\n#btn-enter:active {\n  background-image: url(./images/btn-enter-active.png);\n}\n#bg-main {\n  display: none;\n  background-color: #efffa3;\n  background-image: url(./images/bg.png);\n}\n.cloud {\n  position: absolute;\n  background-size: 100% 100%;\n}\n#cloud-1 {\n  bottom: 14.8rem;\n  width: 3.02083333rem;\n  height: 1.35416667rem;\n  background-image: url(./images/cloud-1.png);\n}\n#cloud-2 {\n  bottom: 14rem;\n  width: 2.5rem;\n  height: 1.04166667rem;\n  background-image: url(./images/cloud-2.png);\n}\n#cloud-3 {\n  bottom: 13.4rem;\n  width: 1.5625rem;\n  height: 0.83333333rem;\n  background-image: url(./images/cloud-3.png);\n}\n#cloud-4 {\n  bottom: 12.7rem;\n  width: 1.35416667rem;\n  height: 0.83333333rem;\n  background-image: url(./images/cloud-4.png);\n}\n#arch {\n  position: absolute;\n  left: 50%;\n  bottom: 4.89583333rem;\n  width: 8.4375rem;\n  height: 8.54166667rem;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  background: url(./images/arch.png) no-repeat bottom center;\n  background-size: contain;\n}\n#couple {\n  position: absolute;\n  left: 3.4375rem;\n  bottom: 6.1rem;\n  width: 3.54166667rem;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n.countdown {\n  display: none;\n  position: absolute;\n  left: 4.5703125rem;\n  bottom: 2.4rem;\n  width: 0.859375rem;\n  height: 1.65364583rem;\n  background-size: 100% 100%;\n}\n#countdown-1 {\n  background-image: url(./images/countdown-1.png);\n}\n#countdown-2 {\n  background-image: url(./images/countdown-2.png);\n}\n#countdown-3 {\n  background-image: url(./images/countdown-3.png);\n}\n#btn-flower {\n  display: none;\n  position: absolute;\n  left: 2.39583333rem;\n  bottom: 1rem;\n  background-image: url(./images/btn-flower.png);\n}\n#btn-flower:active {\n  background-image: url(./images/btn-flower-active.png);\n}\n#dialog-flower {\n  padding: .55rem .3rem;\n}\n#dialog-flower ul {\n  zoom: 1;\n}\n#dialog-flower ul:before,\n#dialog-flower ul:after {\n  content: \' \';\n  display: table;\n}\n#dialog-flower ul:after {\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n  height: 0;\n}\n#dialog-flower li {\n  float: left;\n  width: 50%;\n  padding-bottom: .5rem;\n}\n#dialog-flower li .legend {\n  display: block;\n  margin: 0 auto;\n  width: 1.77083333rem;\n  height: 1.875rem;\n}\n#dialog-flower li .name {\n  display: block;\n  margin: .2rem auto 0;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 100%;\n  width: 1.71875rem;\n  height: 0.5078125rem;\n}\n#dialog-flower li:nth-child(1) .name {\n  background-image: url("./images/blessing-1.png");\n}\n#dialog-flower li:nth-child(1).active .name {\n  background-image: url("./images/blessing-1-active.png");\n}\n#dialog-flower li:nth-child(2) .name {\n  background-image: url("./images/blessing-2.png");\n}\n#dialog-flower li:nth-child(2).active .name {\n  background-image: url("./images/blessing-2-active.png");\n}\n#dialog-flower li:nth-child(3) .name {\n  background-image: url("./images/blessing-3.png");\n}\n#dialog-flower li:nth-child(3).active .name {\n  background-image: url("./images/blessing-3-active.png");\n}\n#dialog-flower li:nth-child(4) .name {\n  background-image: url("./images/blessing-4.png");\n}\n#dialog-flower li:nth-child(4).active .name {\n  background-image: url("./images/blessing-4-active.png");\n}\n#btn-flower-ok {\n  margin: -0.2rem auto 0;\n  background-image: url(./images/btn-flower-ok.png);\n}\n#btn-flower-ok:active {\n  background-image: url(./images/btn-flower-ok-active.png);\n}\n#flower {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 3.54166667rem;\n  height: 3.75rem;\n}\n#flowers {\n  display: none;\n}\n#flowers img {\n  position: absolute;\n  width: 1.41666667rem;\n  height: 1.5rem;\n}\n#dialog-candy .candy {\n  display: block;\n  margin: 1.2rem auto 0;\n  width: 4.40104167rem;\n  height: 4.36197917rem;\n}\n#btn-dressing {\n  margin: .5rem auto 0;\n  background-image: url(./images/btn-dressing.png);\n}\n#btn-dressing:active {\n  background-image: url(./images/btn-dressing-active.png);\n}\n#bg-dressing {\n  display: none;\n  background-repeat: repeat;\n  background-image: url(./images/bg-general.png);\n}\n#bg-dressing .part-list {\n  position: absolute;\n  bottom: 33%;\n  right: .5rem;\n}\n#bg-dressing .part-list li {\n  width: 1.25rem;\n  height: 1.25rem;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: contain;\n}\n#bg-dressing .part-list li + li {\n  margin-top: 0.59895833rem;\n}\n#bg-dressing .part-list .hair {\n  background-image: url("./images/icon-hair.png");\n}\n#bg-dressing .part-list .hair.active {\n  background-image: url("./images/icon-hair-active.png");\n}\n#bg-dressing .part-list .eyes {\n  background-image: url("./images/icon-eyes.png");\n}\n#bg-dressing .part-list .eyes.active {\n  background-image: url("./images/icon-eyes-active.png");\n}\n#bg-dressing .part-list .mouth {\n  background-image: url("./images/icon-mouth.png");\n}\n#bg-dressing .part-list .mouth.active {\n  background-image: url("./images/icon-mouth-active.png");\n}\n#bg-dressing .part-list .clothes {\n  background-image: url("./images/icon-clothes.png");\n}\n#bg-dressing .part-list .clothes.active {\n  background-image: url("./images/icon-clothes-active.png");\n}\n#bg-dressing .part-list .pants {\n  background-image: url("./images/icon-pants.png");\n}\n#bg-dressing .part-list .pants.active {\n  background-image: url("./images/icon-pants-active.png");\n}\n#bg-dressing .item-section {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2.39583333rem;\n  background-image: url(./images/bg-item-list.png);\n  background-size: 100% 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n}\n#bg-dressing .item-list {\n  zoom: 1;\n  padding: 0.41666667rem 0.3125rem;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n#bg-dressing .item-list:before,\n#bg-dressing .item-list:after {\n  content: \' \';\n  display: table;\n}\n#bg-dressing .item-list:after {\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n  height: 0;\n}\n#bg-dressing .item-list li {\n  float: left;\n  padding: 0.10416667rem;\n  width: 1.77083333rem;\n  height: 1.66666667rem;\n  background-image: url(./images/item-wrap.png);\n  background-size: 100% 100%;\n  overflow: hidden;\n}\n#bg-dressing .item-list li + li {\n  margin-left: 0.3125rem;\n}\n#bg-dressing .item-list li.active {\n  background-image: url(./images/item-wrap-active.png);\n}\n#bg-dressing .item-list li .legend {\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position-x: center;\n}\n#bg-dressing .item-list.hair .legend {\n  background-size: 1.82291667rem;\n  background-position-y: 0.078125rem;\n}\n#bg-dressing .item-list.clothes .legend {\n  background-size: 1.35416667rem;\n  background-position-y: center;\n}\n#bg-dressing .item-list.eyes .legend {\n  background-size: 1.35416667rem;\n  background-position-y: center;\n}\n#bg-dressing .item-list.mouth .legend {\n  background-size: 1.35416667rem;\n  background-position-y: -0.26041667rem;\n}\n#bg-dressing .item-list.pants .legend {\n  background-size: auto 100%;\n}\n#bg-dressing .model {\n  position: absolute;\n  bottom: 33%;\n  left: 50%;\n  margin: 0 auto;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n#btn-photo {\n  position: absolute;\n  left: 50%;\n  bottom: 2.3rem;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  background-image: url(./images/btn-dressing-save.png);\n}\n#btn-photo:active {\n  background-image: url(./images/btn-dressing-save-active.png);\n}\n#photo-panel {\n  position: absolute;\n  top: 0;\n  bottom: 1.171875rem;\n  width: 100%;\n}\n#photo-control {\n  position: absolute;\n  height: 1.171875rem;\n  bottom: 0;\n  width: 100%;\n  background-color: white;\n  -webkit-box-shadow: 0 0 5px rgba(100, 100, 100, 0.2);\n          box-shadow: 0 0 5px rgba(100, 100, 100, 0.2);\n}\n#photo-control a {\n  position: absolute;\n  width: 5rem;\n  height: 100%;\n  bottom: 0;\n  font-size: 0.390625rem;\n  padding: 0.390625rem;\n  text-decoration: none;\n  text-align: center;\n  color: #666;\n}\n#photo-control #photo-about {\n  left: 0;\n}\n#photo-control #photo-link {\n  right: 0;\n}\n#photo-control .split {\n  position: absolute;\n  top: 0.26041667rem;\n  bottom: 0.26041667rem;\n  width: 0.02604167rem;\n  left: 50%;\n  margin-left: -0.01302083rem;\n  background-color: #eee;\n}\n#bg-photo {\n  display: none;\n  background: #eee;\n}\n#bg-photo .photo {\n  position: absolute;\n  width: 7.578125rem;\n  height: 11.5625rem;\n  background: #fff;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-box-shadow: 0 0 0.41666667rem #999;\n          box-shadow: 0 0 0.41666667rem #999;\n}\n#bg-photo .photo .content {\n  position: relative;\n  margin: 0.33854167rem 0.33854167rem 0.41666667rem;\n  width: 6.90104167rem;\n  height: 9.03645833rem;\n}\n#bg-photo .photo .content-bg {\n  width: 100%;\n  height: 100%;\n}\n#bg-photo .photo .photo-couple {\n  position: absolute;\n  bottom: 1.69270833rem;\n  left: 1.97916667rem;\n  width: 2.47395833rem;\n  z-index: 1;\n}\n#bg-photo .photo .model {\n  bottom: 1.7578125rem;\n  right: 2.01822917rem;\n  -webkit-transform: scale(0.35);\n          transform: scale(0.35);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n#bg-photo .photo .text {\n  float: left;\n  margin-left: 0.33854167rem;\n  font-size: 0.3125rem;\n  color: #333;\n}\n#bg-photo .photo .text p + p {\n  margin-top: 0.20833333rem;\n}\n#bg-photo .photo .qrcode {\n  float: right;\n  margin-right: 0.33854167rem;\n  width: 1.43229167rem;\n  height: 1.43229167rem;\n}\n#bg-photo .share-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n}\n#bg-photo .tip {\n  position: absolute;\n  top: -0.65104167rem;\n  margin: 0 auto;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  font-size: 0.390625rem;\n  color: #666;\n}\n#bg-photo .photo-mask {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #999;\n  z-index: 2;\n}\n#flash {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  opacity: 0;\n}\n#bg-about {\n  display: none;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n#bg-about .back {\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding: 0.41666667rem 0.41666667rem;\n  width: 1.74479167rem;\n}\n#bg-about .about-wrap {\n  position: relative;\n  height: 26.04166667rem;\n  background: url(./images/bg-general.png) repeat;\n  background-attachment: scroll;\n}\n#bg-about .about {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n#bg-about .btn {\n  position: absolute;\n  bottom: 0.02604167rem;\n  width: 4.58333333rem;\n  height: 2.1875rem;\n}\n#bg-about .weibo-yumao {\n  left: 0.3125rem;\n  background-image: url(\'./images/weibo-yumao.png\');\n}\n#bg-about .weibo-xianzhe {\n  right: 0.3125rem;\n  background-image: url(\'./images/weibo-xianzhe.png\');\n}\n.top-btn {\n  position: absolute;\n  top: 0.33854167rem;\n  width: 1.04166667rem;\n  height: 1.04166667rem;\n  background-size: 100% 100%;\n  opacity: .25;\n}\n.btn-audio {\n  left: 0.33854167rem;\n  background-image: url(\'./images/btn-audio-on.png\');\n}\n.btn-audio.off {\n  background-image: url(\'./images/btn-audio-off.png\');\n}\n.btn-about {\n  right: 0.33854167rem;\n  background-image: url(\'./images/btn-about.png\');\n}\n',
      '',
    ]);
  },
  function(A, e) {
    A.exports = function(A) {
      var e = [];
      return (
        (e.toString = function() {
          return this.map(function(e) {
            var t = (function(A, e) {
              var t = A[1] || '',
                n = A[3];
              if (!n) return t;
              if (e && 'function' == typeof btoa) {
                var r =
                    ((i = n),
                    '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
                      ' */'),
                  o = n.sources.map(function(A) {
                    return '/*# sourceURL=' + n.sourceRoot + A + ' */';
                  });
                return [t]
                  .concat(o)
                  .concat([r])
                  .join('\n');
              }
              var i;
              return [t].join('\n');
            })(e, A);
            return e[2] ? '@media ' + e[2] + '{' + t + '}' : t;
          }).join('');
        }),
        (e.i = function(A, t) {
          'string' == typeof A && (A = [[null, A, '']]);
          for (var n = {}, r = 0; r < this.length; r++) {
            var o = this[r][0];
            'number' == typeof o && (n[o] = !0);
          }
          for (r = 0; r < A.length; r++) {
            var i = A[r];
            ('number' == typeof i[0] && n[i[0]]) ||
              (t && !i[2]
                ? (i[2] = t)
                : t && (i[2] = '(' + i[2] + ') and (' + t + ')'),
              e.push(i));
          }
        }),
        e
      );
    };
  },
  function(A, e, t) {
    var n,
      r,
      o = {},
      i =
        ((n = function() {
          return window && document && document.all && !window.atob;
        }),
        function() {
          return void 0 === r && (r = n.apply(this, arguments)), r;
        }),
      a = (function(A) {
        var e = {};
        return function(A) {
          if ('function' == typeof A) return A();
          if (void 0 === e[A]) {
            var t = function(A) {
              return document.querySelector(A);
            }.call(this, A);
            if (
              window.HTMLIFrameElement &&
              t instanceof window.HTMLIFrameElement
            )
              try {
                t = t.contentDocument.head;
              } catch (A) {
                t = null;
              }
            e[A] = t;
          }
          return e[A];
        };
      })(),
      s = null,
      c = 0,
      u = [],
      l = t(35);
    function B(A, e) {
      for (var t = 0; t < A.length; t++) {
        var n = A[t],
          r = o[n.id];
        if (r) {
          r.refs++;
          for (var i = 0; i < r.parts.length; i++) r.parts[i](n.parts[i]);
          for (; i < n.parts.length; i++) r.parts.push(p(n.parts[i], e));
        } else {
          var a = [];
          for (i = 0; i < n.parts.length; i++) a.push(p(n.parts[i], e));
          o[n.id] = { id: n.id, refs: 1, parts: a };
        }
      }
    }
    function d(A, e) {
      for (var t = [], n = {}, r = 0; r < A.length; r++) {
        var o = A[r],
          i = e.base ? o[0] + e.base : o[0],
          a = { css: o[1], media: o[2], sourceMap: o[3] };
        n[i] ? n[i].parts.push(a) : t.push((n[i] = { id: i, parts: [a] }));
      }
      return t;
    }
    function g(A, e) {
      var t = a(A.insertInto);
      if (!t)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.",
        );
      var n = u[u.length - 1];
      if ('top' === A.insertAt)
        n
          ? n.nextSibling
            ? t.insertBefore(e, n.nextSibling)
            : t.appendChild(e)
          : t.insertBefore(e, t.firstChild),
          u.push(e);
      else if ('bottom' === A.insertAt) t.appendChild(e);
      else {
        if ('object' != typeof A.insertAt || !A.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n",
          );
        var r = a(A.insertInto + ' ' + A.insertAt.before);
        t.insertBefore(e, r);
      }
    }
    function f(A) {
      if (null === A.parentNode) return !1;
      A.parentNode.removeChild(A);
      var e = u.indexOf(A);
      e >= 0 && u.splice(e, 1);
    }
    function h(A) {
      var e = document.createElement('style');
      return (A.attrs.type = 'text/css'), w(e, A.attrs), g(A, e), e;
    }
    function w(A, e) {
      Object.keys(e).forEach(function(t) {
        A.setAttribute(t, e[t]);
      });
    }
    function p(A, e) {
      var t, n, r, o;
      if (e.transform && A.css) {
        if (!(o = e.transform(A.css))) return function() {};
        A.css = o;
      }
      if (e.singleton) {
        var i = c++;
        (t = s || (s = h(e))),
          (n = m.bind(null, t, i, !1)),
          (r = m.bind(null, t, i, !0));
      } else
        A.sourceMap &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        'function' == typeof URL.revokeObjectURL &&
        'function' == typeof Blob &&
        'function' == typeof btoa
          ? ((t = (function(A) {
              var e = document.createElement('link');
              return (
                (A.attrs.type = 'text/css'),
                (A.attrs.rel = 'stylesheet'),
                w(e, A.attrs),
                g(A, e),
                e
              );
            })(e)),
            (n = function(A, e, t) {
              var n = t.css,
                r = t.sourceMap,
                o = void 0 === e.convertToAbsoluteUrls && r;
              (e.convertToAbsoluteUrls || o) && (n = l(n));
              r &&
                (n +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                  ' */');
              var i = new Blob([n], { type: 'text/css' }),
                a = A.href;
              (A.href = URL.createObjectURL(i)), a && URL.revokeObjectURL(a);
            }.bind(null, t, e)),
            (r = function() {
              f(t), t.href && URL.revokeObjectURL(t.href);
            }))
          : ((t = h(e)),
            (n = function(A, e) {
              var t = e.css,
                n = e.media;
              n && A.setAttribute('media', n);
              if (A.styleSheet) A.styleSheet.cssText = t;
              else {
                for (; A.firstChild; ) A.removeChild(A.firstChild);
                A.appendChild(document.createTextNode(t));
              }
            }.bind(null, t)),
            (r = function() {
              f(t);
            }));
      return (
        n(A),
        function(e) {
          if (e) {
            if (
              e.css === A.css &&
              e.media === A.media &&
              e.sourceMap === A.sourceMap
            )
              return;
            n((A = e));
          } else r();
        }
      );
    }
    A.exports = function(A, e) {
      if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
        throw new Error(
          'The style-loader cannot be used in a non-browser environment',
        );
      ((e = e || {}).attrs = 'object' == typeof e.attrs ? e.attrs : {}),
        e.singleton || 'boolean' == typeof e.singleton || (e.singleton = i()),
        e.insertInto || (e.insertInto = 'head'),
        e.insertAt || (e.insertAt = 'bottom');
      var t = d(A, e);
      return (
        B(t, e),
        function(A) {
          for (var n = [], r = 0; r < t.length; r++) {
            var i = t[r];
            (a = o[i.id]).refs--, n.push(a);
          }
          A && B(d(A, e), e);
          for (r = 0; r < n.length; r++) {
            var a;
            if (0 === (a = n[r]).refs) {
              for (var s = 0; s < a.parts.length; s++) a.parts[s]();
              delete o[a.id];
            }
          }
        }
      );
    };
    var Q,
      U =
        ((Q = []),
        function(A, e) {
          return (Q[A] = e), Q.filter(Boolean).join('\n');
        });
    function m(A, e, t, n) {
      var r = t ? '' : n.css;
      if (A.styleSheet) A.styleSheet.cssText = U(e, r);
      else {
        var o = document.createTextNode(r),
          i = A.childNodes;
        i[e] && A.removeChild(i[e]),
          i.length ? A.insertBefore(o, i[e]) : A.appendChild(o);
      }
    }
  },
  function(A, e) {
    A.exports = function(A) {
      var e = 'undefined' != typeof window && window.location;
      if (!e) throw new Error('fixUrls requires window.location');
      if (!A || 'string' != typeof A) return A;
      var t = e.protocol + '//' + e.host,
        n = t + e.pathname.replace(/\/[^\/]*$/, '/');
      return A.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(A, e) {
          var r,
            o = e
              .trim()
              .replace(/^"(.*)"$/, function(A, e) {
                return e;
              })
              .replace(/^'(.*)'$/, function(A, e) {
                return e;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)
            ? A
            : ((r =
                0 === o.indexOf('//')
                  ? o
                  : 0 === o.indexOf('/')
                  ? t + o
                  : n + o.replace(/^\.\//, '')),
              'url(' + JSON.stringify(r) + ')');
        },
      );
    };
  },
  function(A, e, t) {
    (function(t) {
      var n,
        r,
        o,
        i = { scope: {} };
      (i.defineProperty =
        'function' == typeof Object.defineProperties
          ? Object.defineProperty
          : function(A, e, t) {
              if (t.get || t.set)
                throw new TypeError(
                  'ES3 does not support getters and setters.',
                );
              A != Array.prototype && A != Object.prototype && (A[e] = t.value);
            }),
        (i.getGlobal = function(A) {
          return 'undefined' != typeof window && window === A
            ? A
            : void 0 !== t && null != t
            ? t
            : A;
        }),
        (i.global = i.getGlobal(this)),
        (i.SYMBOL_PREFIX = 'jscomp_symbol_'),
        (i.initSymbol = function() {
          (i.initSymbol = function() {}),
            i.global.Symbol || (i.global.Symbol = i.Symbol);
        }),
        (i.symbolCounter_ = 0),
        (i.Symbol = function(A) {
          return i.SYMBOL_PREFIX + (A || '') + i.symbolCounter_++;
        }),
        (i.initSymbolIterator = function() {
          i.initSymbol();
          var A = i.global.Symbol.iterator;
          A || (A = i.global.Symbol.iterator = i.global.Symbol('iterator')),
            'function' != typeof Array.prototype[A] &&
              i.defineProperty(Array.prototype, A, {
                configurable: !0,
                writable: !0,
                value: function() {
                  return i.arrayIterator(this);
                },
              }),
            (i.initSymbolIterator = function() {});
        }),
        (i.arrayIterator = function(A) {
          var e = 0;
          return i.iteratorPrototype(function() {
            return e < A.length ? { done: !1, value: A[e++] } : { done: !0 };
          });
        }),
        (i.iteratorPrototype = function(A) {
          return (
            i.initSymbolIterator(),
            ((A = { next: A })[i.global.Symbol.iterator] = function() {
              return this;
            }),
            A
          );
        }),
        (i.array = i.array || {}),
        (i.iteratorFromArray = function(A, e) {
          i.initSymbolIterator(), A instanceof String && (A += '');
          var t = 0,
            n = {
              next: function() {
                if (t < A.length) {
                  var r = t++;
                  return { value: e(r, A[r]), done: !1 };
                }
                return (
                  (n.next = function() {
                    return { done: !0, value: void 0 };
                  }),
                  n.next()
                );
              },
            };
          return (
            (n[Symbol.iterator] = function() {
              return n;
            }),
            n
          );
        }),
        (i.polyfill = function(A, e, t, n) {
          if (e) {
            for (t = i.global, A = A.split('.'), n = 0; n < A.length - 1; n++) {
              var r = A[n];
              r in t || (t[r] = {}), (t = t[r]);
            }
            (e = e((n = t[(A = A[A.length - 1])]))) != n &&
              null != e &&
              i.defineProperty(t, A, {
                configurable: !0,
                writable: !0,
                value: e,
              });
          }
        }),
        i.polyfill(
          'Array.prototype.keys',
          function(A) {
            return (
              A ||
              function() {
                return i.iteratorFromArray(this, function(A) {
                  return A;
                });
              }
            );
          },
          'es6-impl',
          'es3',
        );
      var a = this;
      (r = []),
        void 0 ===
          (o =
            'function' ==
            typeof (n = function() {
              function A(A) {
                if (!N.col(A))
                  try {
                    return document.querySelectorAll(A);
                  } catch (A) {}
              }
              function e(A, e) {
                for (
                  var t = A.length,
                    n = 2 <= arguments.length ? arguments[1] : void 0,
                    r = [],
                    o = 0;
                  o < t;
                  o++
                )
                  if (o in A) {
                    var i = A[o];
                    e.call(n, i, o, A) && r.push(i);
                  }
                return r;
              }
              function t(A) {
                return A.reduce(function(A, e) {
                  return A.concat(N.arr(e) ? t(e) : e);
                }, []);
              }
              function n(e) {
                return N.arr(e)
                  ? e
                  : (N.str(e) && (e = A(e) || e),
                    e instanceof NodeList || e instanceof HTMLCollection
                      ? [].slice.call(e)
                      : [e]);
              }
              function r(A, e) {
                return A.some(function(A) {
                  return A === e;
                });
              }
              function o(A) {
                var e,
                  t = {};
                for (e in A) t[e] = A[e];
                return t;
              }
              function i(A, e) {
                var t,
                  n = o(A);
                for (t in A) n[t] = e.hasOwnProperty(t) ? e[t] : A[t];
                return n;
              }
              function s(A, e) {
                var t,
                  n = o(A);
                for (t in e) n[t] = N.und(A[t]) ? e[t] : A[t];
                return n;
              }
              function c(A) {
                if (
                  (A = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
                    A,
                  ))
                )
                  return A[2];
              }
              function u(A, e) {
                return N.fnc(A) ? A(e.target, e.id, e.total) : A;
              }
              function l(A, e) {
                if (e in A.style)
                  return (
                    getComputedStyle(A).getPropertyValue(
                      e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
                    ) || '0'
                  );
              }
              function B(A, e) {
                return N.dom(A) && r(y, e)
                  ? 'transform'
                  : N.dom(A) && (A.getAttribute(e) || (N.svg(A) && A[e]))
                  ? 'attribute'
                  : N.dom(A) && 'transform' !== e && l(A, e)
                  ? 'css'
                  : null != A[e]
                  ? 'object'
                  : void 0;
              }
              function d(A, t) {
                switch (B(A, t)) {
                  case 'transform':
                    return (function(A, t) {
                      var n = (function(A) {
                        return -1 < A.indexOf('translate') ||
                          'perspective' === A
                          ? 'px'
                          : -1 < A.indexOf('rotate') || -1 < A.indexOf('skew')
                          ? 'deg'
                          : void 0;
                      })(t);
                      if (
                        ((n = -1 < t.indexOf('scale') ? 1 : 0 + n),
                        !(A = A.style.transform))
                      )
                        return n;
                      for (
                        var r = [], o = [], i = [], a = /(\w+)\((.+?)\)/g;
                        (r = a.exec(A));

                      )
                        o.push(r[1]), i.push(r[2]);
                      return (A = e(i, function(A, e) {
                        return o[e] === t;
                      })).length
                        ? A[0]
                        : n;
                    })(A, t);
                  case 'css':
                    return l(A, t);
                  case 'attribute':
                    return A.getAttribute(t);
                }
                return A[t] || 0;
              }
              function g(A, e) {
                var t = /^(\*=|\+=|-=)/.exec(A);
                if (!t) return A;
                var n = c(A) || 0;
                switch (
                  ((e = parseFloat(e)),
                  (A = parseFloat(A.replace(t[0], ''))),
                  t[0][0])
                ) {
                  case '+':
                    return e + A + n;
                  case '-':
                    return e - A + n;
                  case '*':
                    return e * A + n;
                }
              }
              function f(A, e) {
                return Math.sqrt(
                  Math.pow(e.x - A.x, 2) + Math.pow(e.y - A.y, 2),
                );
              }
              function h(A) {
                A = A.points;
                for (var e, t = 0, n = 0; n < A.numberOfItems; n++) {
                  var r = A.getItem(n);
                  0 < n && (t += f(e, r)), (e = r);
                }
                return t;
              }
              function w(A) {
                if (A.getTotalLength) return A.getTotalLength();
                switch (A.tagName.toLowerCase()) {
                  case 'circle':
                    return 2 * Math.PI * A.getAttribute('r');
                  case 'rect':
                    return (
                      2 * A.getAttribute('width') + 2 * A.getAttribute('height')
                    );
                  case 'line':
                    return f(
                      { x: A.getAttribute('x1'), y: A.getAttribute('y1') },
                      { x: A.getAttribute('x2'), y: A.getAttribute('y2') },
                    );
                  case 'polyline':
                    return h(A);
                  case 'polygon':
                    var e = A.points;
                    return (
                      h(A) + f(e.getItem(e.numberOfItems - 1), e.getItem(0))
                    );
                }
              }
              function p(A, e) {
                function t(t) {
                  return (
                    (t = void 0 === t ? 0 : t),
                    A.el.getPointAtLength(1 <= e + t ? e + t : 0)
                  );
                }
                var n = t(),
                  r = t(-1),
                  o = t(1);
                switch (A.property) {
                  case 'x':
                    return n.x;
                  case 'y':
                    return n.y;
                  case 'angle':
                    return (180 * Math.atan2(o.y - r.y, o.x - r.x)) / Math.PI;
                }
              }
              function Q(A, e) {
                var t,
                  n = /-?\d*\.?\d+/g;
                if (((t = N.pth(A) ? A.totalLength : A), N.col(t)))
                  if (N.rgb(t)) {
                    var r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t);
                    t = r ? 'rgba(' + r[1] + ',1)' : t;
                  } else
                    t = N.hex(t)
                      ? (function(A) {
                          A = A.replace(
                            /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            function(A, e, t, n) {
                              return e + e + t + t + n + n;
                            },
                          );
                          var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                            A,
                          );
                          return (
                            'rgba(' +
                            (A = parseInt(e[1], 16)) +
                            ',' +
                            parseInt(e[2], 16) +
                            ',' +
                            (e = parseInt(e[3], 16)) +
                            ',1)'
                          );
                        })(t)
                      : N.hsl(t)
                      ? (function(A) {
                          function e(A, e, t) {
                            return (
                              0 > t && (t += 1),
                              1 < t && --t,
                              t < 1 / 6
                                ? A + 6 * (e - A) * t
                                : 0.5 > t
                                ? e
                                : t < 2 / 3
                                ? A + (e - A) * (2 / 3 - t) * 6
                                : A
                            );
                          }
                          var t =
                            /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(A) ||
                            /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(
                              A,
                            );
                          A = parseInt(t[1]) / 360;
                          var n = parseInt(t[2]) / 100,
                            r = parseInt(t[3]) / 100;
                          if (((t = t[4] || 1), 0 == n)) r = n = A = r;
                          else {
                            var o = 0.5 > r ? r * (1 + n) : r + n - r * n,
                              i = 2 * r - o;
                            (r = e(i, o, A + 1 / 3)),
                              (n = e(i, o, A)),
                              (A = e(i, o, A - 1 / 3));
                          }
                          return (
                            'rgba(' +
                            255 * r +
                            ',' +
                            255 * n +
                            ',' +
                            255 * A +
                            ',' +
                            t +
                            ')'
                          );
                        })(t)
                      : void 0;
                else
                  (r = (r = c(t)) ? t.substr(0, t.length - r.length) : t),
                    (t = e && !/\s/g.test(t) ? r + e : r);
                return {
                  original: (t += ''),
                  numbers: t.match(n) ? t.match(n).map(Number) : [0],
                  strings: N.str(A) || e ? t.split(n) : [],
                };
              }
              function U(A) {
                return e((A = A ? t(N.arr(A) ? A.map(n) : n(A)) : []), function(
                  A,
                  e,
                  t,
                ) {
                  return t.indexOf(A) === e;
                });
              }
              function m(A, e) {
                var t = o(e);
                if (N.arr(A)) {
                  var r = A.length;
                  2 !== r || N.obj(A[0])
                    ? N.fnc(e.duration) || (t.duration = e.duration / r)
                    : (A = { value: A });
                }
                return n(A)
                  .map(function(A, t) {
                    return (
                      (t = t ? 0 : e.delay),
                      (A = N.obj(A) && !N.pth(A) ? A : { value: A }),
                      N.und(A.delay) && (A.delay = t),
                      A
                    );
                  })
                  .map(function(A) {
                    return s(A, t);
                  });
              }
              function C(A, e) {
                var t;
                return A.tweens.map(function(n) {
                  var r = (n = (function(A, e) {
                      var t,
                        n = {};
                      for (t in A) {
                        var r = u(A[t], e);
                        N.arr(r) &&
                          1 ===
                            (r = r.map(function(A) {
                              return u(A, e);
                            })).length &&
                          (r = r[0]),
                          (n[t] = r);
                      }
                      return (
                        (n.duration = parseFloat(n.duration)),
                        (n.delay = parseFloat(n.delay)),
                        n
                      );
                    })(n, e)).value,
                    o = d(e.target, A.name),
                    i = t ? t.to.original : o,
                    a = ((i = N.arr(r) ? r[0] : i), g(N.arr(r) ? r[1] : r, i));
                  o = c(a) || c(i) || c(o);
                  return (
                    (n.from = Q(i, o)),
                    (n.to = Q(a, o)),
                    (n.start = t ? t.end : A.offset),
                    (n.end = n.start + n.delay + n.duration),
                    (n.easing = (function(A) {
                      return N.arr(A) ? T.apply(this, A) : I[A];
                    })(n.easing)),
                    (n.elasticity =
                      (1e3 - Math.min(Math.max(n.elasticity, 1), 999)) / 1e3),
                    (n.isPath = N.pth(r)),
                    (n.isColor = N.col(n.from.original)),
                    n.isColor && (n.round = 1),
                    (t = n)
                  );
                });
              }
              function F(A, e, t, n) {
                var r = 'delay' === A;
                return e.length
                  ? (r ? Math.min : Math.max).apply(
                      Math,
                      e.map(function(e) {
                        return e[A];
                      }),
                    )
                  : r
                  ? n.delay
                  : t.offset + n.delay + n.duration;
              }
              function E(A) {
                var n,
                  r = i(_, A),
                  o = i(H, A),
                  a = (function(A) {
                    var e = U(A);
                    return e.map(function(A, t) {
                      return { target: A, id: t, total: e.length };
                    });
                  })(A.targets),
                  c = [],
                  u = s(r, o);
                for (n in A)
                  u.hasOwnProperty(n) ||
                    'targets' === n ||
                    c.push({ name: n, offset: u.offset, tweens: m(A[n], o) });
                return (
                  (A = (function(A, n) {
                    return e(
                      t(
                        A.map(function(A) {
                          return n.map(function(e) {
                            var t = B(A.target, e.name);
                            if (t) {
                              var n = C(e, A);
                              e = {
                                type: t,
                                property: e.name,
                                animatable: A,
                                tweens: n,
                                duration: n[n.length - 1].end,
                                delay: n[0].delay,
                              };
                            } else e = void 0;
                            return e;
                          });
                        }),
                      ),
                      function(A) {
                        return !N.und(A);
                      },
                    );
                  })(a, c)),
                  s(r, {
                    children: [],
                    animatables: a,
                    animations: A,
                    duration: F('duration', A, r, o),
                    delay: F('delay', A, r, o),
                  })
                );
              }
              function v(A) {
                function t() {
                  return (
                    window.Promise &&
                    new Promise(function(A) {
                      return (B = A);
                    })
                  );
                }
                function n(A) {
                  return g.reversed ? g.duration - A : A;
                }
                function r(A) {
                  for (
                    var t = 0, n = {}, r = g.animations, o = r.length;
                    t < o;

                  ) {
                    var i = r[t],
                      a = i.animatable,
                      s = (c = i.tweens)[(d = c.length - 1)];
                    d &&
                      (s =
                        e(c, function(e) {
                          return A < e.end;
                        })[0] || s);
                    for (
                      var c =
                          Math.min(
                            Math.max(A - s.start - s.delay, 0),
                            s.duration,
                          ) / s.duration,
                        u = isNaN(c) ? 1 : s.easing(c, s.elasticity),
                        B = ((c = s.to.strings), s.round),
                        d = [],
                        f = void 0,
                        h = ((f = s.to.numbers.length), 0);
                      h < f;
                      h++
                    ) {
                      var w = void 0,
                        Q = ((w = s.to.numbers[h]), s.from.numbers[h]);
                      w = s.isPath ? p(s.value, u * w) : Q + u * (w - Q);
                      B &&
                        ((s.isColor && 2 < h) || (w = Math.round(w * B) / B)),
                        d.push(w);
                    }
                    if ((s = c.length))
                      for (f = c[0], u = 0; u < s; u++)
                        (B = c[u + 1]),
                          (h = d[u]),
                          isNaN(h) || (f = B ? f + (h + B) : f + (h + ' '));
                    else f = d[0];
                    K[i.type](a.target, i.property, f, n, a.id),
                      (i.currentValue = f),
                      t++;
                  }
                  if ((t = Object.keys(n).length))
                    for (r = 0; r < t; r++)
                      b ||
                        (b = l(document.body, 'transform')
                          ? 'transform'
                          : '-webkit-transform'),
                        (g.animatables[r].target.style[b] = n[r].join(' '));
                  (g.currentTime = A), (g.progress = (A / g.duration) * 100);
                }
                function o(A) {
                  g[A] && g[A](g);
                }
                function i() {
                  g.remaining && !0 !== g.remaining && g.remaining--;
                }
                function a(A) {
                  var e = g.duration,
                    a = g.offset,
                    l = a + g.delay,
                    f = g.currentTime,
                    h = g.reversed,
                    w = n(A);
                  if (g.children.length) {
                    var p = g.children,
                      Q = p.length;
                    if (w >= g.currentTime)
                      for (var U = 0; U < Q; U++) p[U].seek(w);
                    else for (; Q--; ) p[Q].seek(w);
                  }
                  (w >= l || !e) &&
                    (g.began || ((g.began = !0), o('begin')), o('run')),
                    w > a && w < e
                      ? r(w)
                      : (w <= a && 0 !== f && (r(0), h && i()),
                        ((w >= e && f !== e) || !e) && (r(e), h || i())),
                    o('update'),
                    A >= e &&
                      (g.remaining
                        ? ((c = s),
                          'alternate' === g.direction &&
                            (g.reversed = !g.reversed))
                        : (g.pause(),
                          g.completed ||
                            ((g.completed = !0),
                            o('complete'),
                            'Promise' in window && (B(), (d = t())))),
                      (u = 0));
                }
                A = void 0 === A ? {} : A;
                var s,
                  c,
                  u = 0,
                  B = null,
                  d = t(),
                  g = E(A);
                return (
                  (g.reset = function() {
                    var A = g.direction,
                      e = g.loop;
                    for (
                      g.currentTime = 0,
                        g.progress = 0,
                        g.paused = !0,
                        g.began = !1,
                        g.completed = !1,
                        g.reversed = 'reverse' === A,
                        g.remaining = 'alternate' === A && 1 === e ? 2 : e,
                        r(0),
                        A = g.children.length;
                      A--;

                    )
                      g.children[A].reset();
                  }),
                  (g.tick = function(A) {
                    (s = A), c || (c = s), a((u + s - c) * v.speed);
                  }),
                  (g.seek = function(A) {
                    a(n(A));
                  }),
                  (g.pause = function() {
                    var A = S.indexOf(g);
                    -1 < A && S.splice(A, 1), (g.paused = !0);
                  }),
                  (g.play = function() {
                    g.paused &&
                      ((g.paused = !1),
                      (c = 0),
                      (u = n(g.currentTime)),
                      S.push(g),
                      O || L());
                  }),
                  (g.reverse = function() {
                    (g.reversed = !g.reversed), (c = 0), (u = n(g.currentTime));
                  }),
                  (g.restart = function() {
                    g.pause(), g.reset(), g.play();
                  }),
                  (g.finished = d),
                  g.reset(),
                  g.autoplay && g.play(),
                  g
                );
              }
              var b,
                _ = {
                  update: void 0,
                  begin: void 0,
                  run: void 0,
                  complete: void 0,
                  loop: 1,
                  direction: 'normal',
                  autoplay: !0,
                  offset: 0,
                },
                H = {
                  duration: 1e3,
                  delay: 0,
                  easing: 'easeOutElastic',
                  elasticity: 500,
                  round: 0,
                },
                y = 'translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective'.split(
                  ' ',
                ),
                N = {
                  arr: function(A) {
                    return Array.isArray(A);
                  },
                  obj: function(A) {
                    return (
                      -1 < Object.prototype.toString.call(A).indexOf('Object')
                    );
                  },
                  pth: function(A) {
                    return N.obj(A) && A.hasOwnProperty('totalLength');
                  },
                  svg: function(A) {
                    return A instanceof SVGElement;
                  },
                  dom: function(A) {
                    return A.nodeType || N.svg(A);
                  },
                  str: function(A) {
                    return 'string' == typeof A;
                  },
                  fnc: function(A) {
                    return 'function' == typeof A;
                  },
                  und: function(A) {
                    return void 0 === A;
                  },
                  hex: function(A) {
                    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(A);
                  },
                  rgb: function(A) {
                    return /^rgb/.test(A);
                  },
                  hsl: function(A) {
                    return /^hsl/.test(A);
                  },
                  col: function(A) {
                    return N.hex(A) || N.rgb(A) || N.hsl(A);
                  },
                },
                T = (function() {
                  function A(A, e, t) {
                    return (
                      (((1 - 3 * t + 3 * e) * A + (3 * t - 6 * e)) * A +
                        3 * e) *
                      A
                    );
                  }
                  return function(e, t, n, r) {
                    if (0 <= e && 1 >= e && 0 <= n && 1 >= n) {
                      var o = new Float32Array(11);
                      if (e !== t || n !== r)
                        for (var i = 0; 11 > i; ++i) o[i] = A(0.1 * i, e, n);
                      return function(i) {
                        if (e === t && n === r) return i;
                        if (0 === i) return 0;
                        if (1 === i) return 1;
                        for (var a = 0, s = 1; 10 !== s && o[s] <= i; ++s)
                          a += 0.1;
                        s = a + ((i - o[--s]) / (o[s + 1] - o[s])) * 0.1;
                        var c =
                          3 * (1 - 3 * n + 3 * e) * s * s +
                          2 * (3 * n - 6 * e) * s +
                          3 * e;
                        if (0.001 <= c) {
                          for (
                            a = 0;
                            4 > a &&
                            0 !==
                              (c =
                                3 * (1 - 3 * n + 3 * e) * s * s +
                                2 * (3 * n - 6 * e) * s +
                                3 * e);
                            ++a
                          ) {
                            var u = A(s, e, n) - i;
                            s = s - u / c;
                          }
                          i = s;
                        } else if (0 === c) i = s;
                        else {
                          (s = a), (a = a + 0.1);
                          var l = 0;
                          do {
                            0 < (c = A((u = s + (a - s) / 2), e, n) - i)
                              ? (a = u)
                              : (s = u);
                          } while (1e-7 < Math.abs(c) && 10 > ++l);
                          i = u;
                        }
                        return A(i, t, r);
                      };
                    }
                  };
                })(),
                I = (function() {
                  function A(A, e) {
                    return 0 === A || 1 === A
                      ? A
                      : -Math.pow(2, 10 * (A - 1)) *
                          Math.sin(
                            (2 *
                              (A - 1 - (e / (2 * Math.PI)) * Math.asin(1)) *
                              Math.PI) /
                              e,
                          );
                  }
                  var e,
                    t = 'Quad Cubic Quart Quint Sine Expo Circ Back Elastic'.split(
                      ' ',
                    ),
                    n = {
                      In: [
                        [0.55, 0.085, 0.68, 0.53],
                        [0.55, 0.055, 0.675, 0.19],
                        [0.895, 0.03, 0.685, 0.22],
                        [0.755, 0.05, 0.855, 0.06],
                        [0.47, 0, 0.745, 0.715],
                        [0.95, 0.05, 0.795, 0.035],
                        [0.6, 0.04, 0.98, 0.335],
                        [0.6, -0.28, 0.735, 0.045],
                        A,
                      ],
                      Out: [
                        [0.25, 0.46, 0.45, 0.94],
                        [0.215, 0.61, 0.355, 1],
                        [0.165, 0.84, 0.44, 1],
                        [0.23, 1, 0.32, 1],
                        [0.39, 0.575, 0.565, 1],
                        [0.19, 1, 0.22, 1],
                        [0.075, 0.82, 0.165, 1],
                        [0.175, 0.885, 0.32, 1.275],
                        function(e, t) {
                          return 1 - A(1 - e, t);
                        },
                      ],
                      InOut: [
                        [0.455, 0.03, 0.515, 0.955],
                        [0.645, 0.045, 0.355, 1],
                        [0.77, 0, 0.175, 1],
                        [0.86, 0, 0.07, 1],
                        [0.445, 0.05, 0.55, 0.95],
                        [1, 0, 0, 1],
                        [0.785, 0.135, 0.15, 0.86],
                        [0.68, -0.55, 0.265, 1.55],
                        function(e, t) {
                          return 0.5 > e
                            ? A(2 * e, t) / 2
                            : 1 - A(-2 * e + 2, t) / 2;
                        },
                      ],
                    },
                    r = { linear: T(0.25, 0.25, 0.75, 0.75) },
                    o = {};
                  for (e in n)
                    (o.type = e),
                      n[o.type].forEach(
                        (function(A) {
                          return function(e, n) {
                            r['ease' + A.type + t[n]] = N.fnc(e)
                              ? e
                              : T.apply(a, e);
                          };
                        })(o),
                      ),
                      (o = { type: o.type });
                  return r;
                })(),
                K = {
                  css: function(A, e, t) {
                    return (A.style[e] = t);
                  },
                  attribute: function(A, e, t) {
                    return A.setAttribute(e, t);
                  },
                  object: function(A, e, t) {
                    return (A[e] = t);
                  },
                  transform: function(A, e, t, n, r) {
                    n[r] || (n[r] = []), n[r].push(e + '(' + t + ')');
                  },
                },
                S = [],
                O = 0,
                L = (function() {
                  function A() {
                    O = requestAnimationFrame(e);
                  }
                  function e(e) {
                    var t = S.length;
                    if (t) {
                      for (var n = 0; n < t; ) S[n] && S[n].tick(e), n++;
                      A();
                    } else cancelAnimationFrame(O), (O = 0);
                  }
                  return A;
                })();
              return (
                (v.version = '2.2.0'),
                (v.speed = 1),
                (v.running = S),
                (v.remove = function(A) {
                  A = U(A);
                  for (var e = S.length; e--; )
                    for (var t = S[e], n = t.animations, o = n.length; o--; )
                      r(A, n[o].animatable.target) &&
                        (n.splice(o, 1), n.length || t.pause());
                }),
                (v.getValue = d),
                (v.path = function(e, t) {
                  var n = N.str(e) ? A(e)[0] : e,
                    r = t || 100;
                  return function(A) {
                    return {
                      el: n,
                      property: A,
                      totalLength: w(n) * (r / 100),
                    };
                  };
                }),
                (v.setDashoffset = function(A) {
                  var e = w(A);
                  return A.setAttribute('stroke-dasharray', e), e;
                }),
                (v.bezier = T),
                (v.easings = I),
                (v.timeline = function(A) {
                  var e = v(A);
                  return (
                    e.pause(),
                    (e.duration = 0),
                    (e.add = function(t) {
                      return (
                        e.children.forEach(function(A) {
                          (A.began = !0), (A.completed = !0);
                        }),
                        n(t).forEach(function(t) {
                          var n = s(t, i(H, A || {}));
                          (n.targets = n.targets || A.targets),
                            (t = e.duration);
                          var r = n.offset;
                          (n.autoplay = !1),
                            (n.direction = e.direction),
                            (n.offset = N.und(r) ? t : g(r, t)),
                            (e.began = !0),
                            (e.completed = !0),
                            e.seek(n.offset),
                            ((n = v(n)).began = !0),
                            (n.completed = !0),
                            n.duration > t && (e.duration = n.duration),
                            e.children.push(n);
                        }),
                        e.seek(0),
                        e.reset(),
                        e.autoplay && e.restart(),
                        e
                      );
                    }),
                    e
                  );
                }),
                (v.random = function(A, e) {
                  return Math.floor(Math.random() * (e - A + 1)) + A;
                }),
                v
              );
            })
              ? n.apply(e, r)
              : n) || (A.exports = o);
    }.call(e, t(16)));
  },
  function(A, e, t) {
    'use strict';
    (function(e) {
      var n =
          Object.assign ||
          function(A) {
            for (var e = 1; e < arguments.length; e++) {
              var t = arguments[e];
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (A[n] = t[n]);
            }
            return A;
          },
        r = s(t(17)),
        o = s(t(18)),
        i = t(38),
        a = t(2);
      function s(A) {
        return A && A.__esModule ? A : { default: A };
      }
      var c = function(A, t) {
        var s = t || {},
          c = new o.default('boolean' != typeof s.logging || s.logging);
        c.log('html2canvas $npm_package_version'),
          'production' !== e.env.NODE_ENV &&
            'function' == typeof s.onrendered &&
            c.error(
              'onrendered option is deprecated, html2canvas returns a Promise with the canvas as the value',
            );
        var u = A.ownerDocument;
        if (!u)
          return Promise.reject('Provided element is not within a Document');
        var l = u.defaultView,
          B = l.pageXOffset,
          d = l.pageYOffset,
          g =
            'HTML' === A.tagName || 'BODY' === A.tagName
              ? (0, a.parseDocumentSize)(u)
              : (0, a.parseBounds)(A, B, d),
          f = g.width,
          h = g.height,
          w = g.left,
          p = g.top,
          Q = {
            async: !0,
            allowTaint: !1,
            backgroundColor: '#ffffff',
            imageTimeout: 15e3,
            logging: !0,
            proxy: null,
            removeContainer: !0,
            foreignObjectRendering: !1,
            scale: l.devicePixelRatio || 1,
            target: new r.default(s.canvas),
            useCORS: !1,
            x: w,
            y: p,
            width: Math.ceil(f),
            height: Math.ceil(h),
            windowWidth: l.innerWidth,
            windowHeight: l.innerHeight,
            scrollX: l.pageXOffset,
            scrollY: l.pageYOffset,
          },
          U = (0, i.renderElement)(A, n({}, Q, s), c);
        return 'production' !== e.env.NODE_ENV
          ? U.catch(function(A) {
              throw (c.error(A), A);
            })
          : U;
      };
      (c.CanvasRenderer = r.default), (A.exports = c);
    }.call(e, t(0)));
  },
  function(A, e, t) {
    'use strict';
    (function(A) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.renderElement = void 0);
      var n = (function() {
          return function(A, e) {
            if (Array.isArray(A)) return A;
            if (Symbol.iterator in Object(A))
              return (function(A, e) {
                var t = [],
                  n = !0,
                  r = !1,
                  o = void 0;
                try {
                  for (
                    var i, a = A[Symbol.iterator]();
                    !(n = (i = a.next()).done) &&
                    (t.push(i.value), !e || t.length !== e);
                    n = !0
                  );
                } catch (A) {
                  (r = !0), (o = A);
                } finally {
                  try {
                    !n && a.return && a.return();
                  } finally {
                    if (r) throw o;
                  }
                }
                return t;
              })(A, e);
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance',
            );
          };
        })(),
        r = (d(t(18)), t(39)),
        o = d(t(61)),
        i = d(t(25)),
        a = d(t(11)),
        s = t(2),
        c = t(64),
        u = t(27),
        l = t(1),
        B = d(l);
      function d(A) {
        return A && A.__esModule ? A : { default: A };
      }
      e.renderElement = function e(t, d, g) {
        var f = t.ownerDocument,
          h = new s.Bounds(d.scrollX, d.scrollY, d.windowWidth, d.windowHeight),
          w = f.documentElement
            ? new B.default(getComputedStyle(f.documentElement).backgroundColor)
            : l.TRANSPARENT,
          p = f.body
            ? new B.default(getComputedStyle(f.body).backgroundColor)
            : l.TRANSPARENT,
          Q =
            t === f.documentElement
              ? w.isTransparent()
                ? p.isTransparent()
                  ? d.backgroundColor
                    ? new B.default(d.backgroundColor)
                    : null
                  : p
                : w
              : d.backgroundColor
              ? new B.default(d.backgroundColor)
              : null;
        return (d.foreignObjectRendering
          ? a.default.SUPPORT_FOREIGNOBJECT_DRAWING
          : Promise.resolve(!1)
        ).then(function(a) {
          return a
            ? ((s = new c.DocumentCloner(t, d, g, !0, e)),
              'production' !== A.env.NODE_ENV &&
                g.log('Document cloned, using foreignObject rendering'),
              s
                .inlineFonts(f)
                .then(function() {
                  return s.resourceLoader.ready();
                })
                .then(function() {
                  return new i.default(s.documentElement).render({
                    backgroundColor: Q,
                    logger: g,
                    scale: d.scale,
                    x: d.x,
                    y: d.y,
                    width: d.width,
                    height: d.height,
                    windowWidth: d.windowWidth,
                    windowHeight: d.windowHeight,
                    scrollX: d.scrollX,
                    scrollY: d.scrollY,
                  });
                }))
            : (0, c.cloneWindow)(f, h, t, d, g, e).then(function(e) {
                var t = n(e, 3),
                  i = t[0],
                  a = t[1],
                  s = t[2];
                'production' !== A.env.NODE_ENV &&
                  g.log('Document cloned, using computed rendering');
                var c = (0, r.NodeParser)(a, s, g),
                  B = a.ownerDocument;
                return (
                  Q === c.container.style.background.backgroundColor &&
                    (c.container.style.background.backgroundColor =
                      l.TRANSPARENT),
                  s.ready().then(function(e) {
                    var t = new u.FontMetrics(B);
                    'production' !== A.env.NODE_ENV &&
                      g.log('Starting renderer');
                    var n = {
                      backgroundColor: Q,
                      fontMetrics: t,
                      imageStore: e,
                      logger: g,
                      scale: d.scale,
                      x: d.x,
                      y: d.y,
                      width: d.width,
                      height: d.height,
                    };
                    if (Array.isArray(d.target))
                      return Promise.all(
                        d.target.map(function(A) {
                          return new o.default(A, n).render(c);
                        }),
                      );
                    var r = new o.default(d.target, n).render(c);
                    return (
                      !0 === d.removeContainer &&
                        (i.parentNode
                          ? i.parentNode.removeChild(i)
                          : 'production' !== A.env.NODE_ENV &&
                            g.log(
                              'Cannot detach cloned iframe as it is not in the DOM anymore',
                            )),
                      r
                    );
                  })
                );
              });
          var s;
        });
      };
    }.call(e, t(0)));
  },
  function(A, e, t) {
    'use strict';
    (function(A) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.NodeParser = void 0);
      var n = c(t(40)),
        r = c(t(4)),
        o = c(t(10)),
        i = t(23),
        a = t(15),
        s = t(9);
      function c(A) {
        return A && A.__esModule ? A : { default: A };
      }
      e.NodeParser = function(e, t, o) {
        'production' !== A.env.NODE_ENV && o.log('Starting node parsing');
        var i = 0,
          a = new r.default(e, null, t, i++),
          s = new n.default(a, null, !0);
        return (
          l(e, a, s, t, i),
          'production' !== A.env.NODE_ENV &&
            o.log('Finished parsing node tree'),
          s
        );
      };
      var u = ['SCRIPT', 'HEAD', 'TITLE', 'OBJECT', 'BR', 'OPTION'],
        l = function e(t, c, l, g, f) {
          if ('production' !== A.env.NODE_ENV && f > 5e4)
            throw new Error('Recursion error while parsing node tree');
          for (var h, w = t.firstChild; w; w = h) {
            h = w.nextSibling;
            var p = w.ownerDocument.defaultView;
            if (
              w instanceof p.Text ||
              w instanceof Text ||
              (p.parent && w instanceof p.parent.Text)
            )
              w.data.trim().length > 0 &&
                c.childNodes.push(o.default.fromTextNode(w, c));
            else if (
              w instanceof p.HTMLElement ||
              w instanceof HTMLElement ||
              (p.parent && w instanceof p.parent.HTMLElement)
            ) {
              if (-1 === u.indexOf(w.nodeName)) {
                var Q = new r.default(w, c, g, f++);
                if (Q.isVisible()) {
                  'INPUT' === w.tagName
                    ? (0, i.inlineInputElement)(w, Q)
                    : 'TEXTAREA' === w.tagName
                    ? (0, i.inlineTextAreaElement)(w, Q)
                    : 'SELECT' === w.tagName
                    ? (0, i.inlineSelectElement)(w, Q)
                    : Q.style.listStyle &&
                      Q.style.listStyle.listStyleType !==
                        s.LIST_STYLE_TYPE.NONE &&
                      (0, a.inlineListItemElement)(w, Q, g);
                  var U = 'TEXTAREA' !== w.tagName,
                    m = B(Q, w);
                  if (m || d(Q)) {
                    var C =
                        m || Q.isPositioned()
                          ? l.getRealParentStackingContext()
                          : l,
                      F = new n.default(Q, C, m);
                    C.contexts.push(F), U && e(w, Q, F, g, f);
                  } else l.children.push(Q), U && e(w, Q, l, g, f);
                }
              }
            } else if (
              w instanceof p.SVGSVGElement ||
              w instanceof SVGSVGElement ||
              (p.parent && w instanceof p.parent.SVGSVGElement)
            ) {
              var E = new r.default(w, c, g, f++),
                v = B(E, w);
              if (v || d(E)) {
                var b =
                    v || E.isPositioned()
                      ? l.getRealParentStackingContext()
                      : l,
                  _ = new n.default(E, b, v);
                b.contexts.push(_);
              } else l.children.push(E);
            }
          }
        },
        B = function(A, e) {
          return (
            A.isRootElement() ||
            A.isPositionedWithZIndex() ||
            A.style.opacity < 1 ||
            A.isTransformed() ||
            g(A, e)
          );
        },
        d = function(A) {
          return A.isPositioned() || A.isFloating();
        },
        g = function(A, e) {
          return (
            'BODY' === e.nodeName &&
            A.parent instanceof r.default &&
            A.parent.style.background.backgroundColor.isTransparent()
          );
        };
    }.call(e, t(0)));
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n,
      r = (function() {
        function A(A, e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(A, n.key, n);
          }
        }
        return function(e, t, n) {
          return t && A(e.prototype, t), n && A(e, n), e;
        };
      })(),
      o = t(4);
    (n = o) && n.__esModule, t(21);
    var i = (function() {
      function A(e, t, n) {
        !(function(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, A),
          (this.container = e),
          (this.parent = t),
          (this.contexts = []),
          (this.children = []),
          (this.treatAsRealStackingContext = n);
      }
      return (
        r(A, [
          {
            key: 'getOpacity',
            value: function() {
              return this.parent
                ? this.container.style.opacity * this.parent.getOpacity()
                : this.container.style.opacity;
            },
          },
          {
            key: 'getRealParentStackingContext',
            value: function() {
              return !this.parent || this.treatAsRealStackingContext
                ? this
                : this.parent.getRealParentStackingContext();
            },
          },
        ]),
        A
      );
    })();
    e.default = i;
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    e.default = function A(e, t) {
      !(function(A, e) {
        if (!(A instanceof e))
          throw new TypeError('Cannot call a class as a function');
      })(this, A),
        (this.width = e),
        (this.height = t);
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n,
      r = (function() {
        function A(A, e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(A, n.key, n);
          }
        }
        return function(e, t, n) {
          return t && A(e.prototype, t), n && A(e, n), e;
        };
      })(),
      o = t(7),
      i = t(8),
      a = (n = i) && n.__esModule ? n : { default: n };
    var s = function(A, e, t) {
        return new a.default(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
      },
      c = (function() {
        function A(e, t, n, r) {
          !(function(A, e) {
            if (!(A instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, A),
            (this.type = o.PATH.BEZIER_CURVE),
            (this.start = e),
            (this.startControl = t),
            (this.endControl = n),
            (this.end = r);
        }
        return (
          r(A, [
            {
              key: 'subdivide',
              value: function(e, t) {
                var n = s(this.start, this.startControl, e),
                  r = s(this.startControl, this.endControl, e),
                  o = s(this.endControl, this.end, e),
                  i = s(n, r, e),
                  a = s(r, o, e),
                  c = s(i, a, e);
                return t
                  ? new A(this.start, n, i, c)
                  : new A(c, a, o, this.end);
              },
            },
            {
              key: 'reverse',
              value: function() {
                return new A(
                  this.end,
                  this.endControl,
                  this.startControl,
                  this.start,
                );
              },
            },
          ]),
          A
        );
      })();
    e.default = c;
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.parseBorderRadius = void 0);
    var n,
      r = (function() {
        return function(A, e) {
          if (Array.isArray(A)) return A;
          if (Symbol.iterator in Object(A))
            return (function(A, e) {
              var t = [],
                n = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var i, a = A[Symbol.iterator]();
                  !(n = (i = a.next()).done) &&
                  (t.push(i.value), !e || t.length !== e);
                  n = !0
                );
              } catch (A) {
                (r = !0), (o = A);
              } finally {
                try {
                  !n && a.return && a.return();
                } finally {
                  if (r) throw o;
                }
              }
              return t;
            })(A, e);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance',
          );
        };
      })(),
      o = t(3),
      i = (n = o) && n.__esModule ? n : { default: n };
    var a = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];
    e.parseBorderRadius = function(A) {
      return a.map(function(e) {
        var t = A.getPropertyValue('border-' + e + '-radius')
            .split(' ')
            .map(i.default.create),
          n = r(t, 2),
          o = n[0],
          a = n[1];
        return void 0 === a ? [o, o] : [o, a];
      });
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (e.DISPLAY = {
        NONE: 1,
        BLOCK: 2,
        INLINE: 4,
        RUN_IN: 8,
        FLOW: 16,
        FLOW_ROOT: 32,
        TABLE: 64,
        FLEX: 128,
        GRID: 256,
        RUBY: 512,
        SUBGRID: 1024,
        LIST_ITEM: 2048,
        TABLE_ROW_GROUP: 4096,
        TABLE_HEADER_GROUP: 8192,
        TABLE_FOOTER_GROUP: 16384,
        TABLE_ROW: 32768,
        TABLE_CELL: 65536,
        TABLE_COLUMN_GROUP: 1 << 17,
        TABLE_COLUMN: 1 << 18,
        TABLE_CAPTION: 1 << 19,
        RUBY_BASE: 1 << 20,
        RUBY_TEXT: 1 << 21,
        RUBY_BASE_CONTAINER: 1 << 22,
        RUBY_TEXT_CONTAINER: 1 << 23,
        CONTENTS: 1 << 24,
        INLINE_BLOCK: 1 << 25,
        INLINE_LIST_ITEM: 1 << 26,
        INLINE_TABLE: 1 << 27,
        INLINE_FLEX: 1 << 28,
        INLINE_GRID: 1 << 29,
      }),
      r = function(A, e) {
        return (
          A |
          (function(A) {
            switch (A) {
              case 'block':
                return n.BLOCK;
              case 'inline':
                return n.INLINE;
              case 'run-in':
                return n.RUN_IN;
              case 'flow':
                return n.FLOW;
              case 'flow-root':
                return n.FLOW_ROOT;
              case 'table':
                return n.TABLE;
              case 'flex':
                return n.FLEX;
              case 'grid':
                return n.GRID;
              case 'ruby':
                return n.RUBY;
              case 'subgrid':
                return n.SUBGRID;
              case 'list-item':
                return n.LIST_ITEM;
              case 'table-row-group':
                return n.TABLE_ROW_GROUP;
              case 'table-header-group':
                return n.TABLE_HEADER_GROUP;
              case 'table-footer-group':
                return n.TABLE_FOOTER_GROUP;
              case 'table-row':
                return n.TABLE_ROW;
              case 'table-cell':
                return n.TABLE_CELL;
              case 'table-column-group':
                return n.TABLE_COLUMN_GROUP;
              case 'table-column':
                return n.TABLE_COLUMN;
              case 'table-caption':
                return n.TABLE_CAPTION;
              case 'ruby-base':
                return n.RUBY_BASE;
              case 'ruby-text':
                return n.RUBY_TEXT;
              case 'ruby-base-container':
                return n.RUBY_BASE_CONTAINER;
              case 'ruby-text-container':
                return n.RUBY_TEXT_CONTAINER;
              case 'contents':
                return n.CONTENTS;
              case 'inline-block':
                return n.INLINE_BLOCK;
              case 'inline-list-item':
                return n.INLINE_LIST_ITEM;
              case 'inline-table':
                return n.INLINE_TABLE;
              case 'inline-flex':
                return n.INLINE_FLEX;
              case 'inline-grid':
                return n.INLINE_GRID;
            }
            return n.NONE;
          })(e)
        );
      };
    e.parseDisplay = function(A) {
      return A.split(' ').reduce(r, 0);
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (e.FLOAT = {
      NONE: 0,
      LEFT: 1,
      RIGHT: 2,
      INLINE_START: 3,
      INLINE_END: 4,
    });
    e.parseCSSFloat = function(A) {
      switch (A) {
        case 'left':
          return n.LEFT;
        case 'right':
          return n.RIGHT;
        case 'inline-start':
          return n.INLINE_START;
        case 'inline-end':
          return n.INLINE_END;
      }
      return n.NONE;
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    e.parseFont = function(A) {
      return {
        fontFamily: A.fontFamily,
        fontSize: A.fontSize,
        fontStyle: A.fontStyle,
        fontVariant: A.fontVariant,
        fontWeight: (function(A) {
          switch (A) {
            case 'normal':
              return 400;
            case 'bold':
              return 700;
          }
          var e = parseInt(A, 10);
          return isNaN(e) ? 400 : e;
        })(A.fontWeight),
      };
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    e.parseLetterSpacing = function(A) {
      if ('normal' === A) return 0;
      var e = parseFloat(A);
      return isNaN(e) ? 0 : e;
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (e.LINE_BREAK = { NORMAL: 'normal', STRICT: 'strict' });
    e.parseLineBreak = function(A) {
      switch (A) {
        case 'strict':
          return n.STRICT;
        case 'normal':
        default:
          return n.NORMAL;
      }
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.parseMargin = void 0);
    var n,
      r = t(3),
      o = (n = r) && n.__esModule ? n : { default: n };
    var i = ['top', 'right', 'bottom', 'left'];
    e.parseMargin = function(A) {
      return i.map(function(e) {
        return new o.default(A.getPropertyValue('margin-' + e));
      });
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (e.OVERFLOW = { VISIBLE: 0, HIDDEN: 1, SCROLL: 2, AUTO: 3 });
    e.parseOverflow = function(A) {
      switch (A) {
        case 'hidden':
          return n.HIDDEN;
        case 'scroll':
          return n.SCROLL;
        case 'auto':
          return n.AUTO;
        case 'visible':
        default:
          return n.VISIBLE;
      }
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.parseTextShadow = void 0);
    var n,
      r = t(1),
      o = (n = r) && n.__esModule ? n : { default: n };
    var i = /^([+-]|\d|\.)$/i;
    e.parseTextShadow = function(A) {
      if ('none' === A || 'string' != typeof A) return null;
      for (
        var e = '',
          t = !1,
          n = [],
          r = [],
          a = 0,
          s = null,
          c = function() {
            e.length && (t ? n.push(parseFloat(e)) : (s = new o.default(e))),
              (t = !1),
              (e = '');
          },
          u = function() {
            n.length &&
              null !== s &&
              r.push({
                color: s,
                offsetX: n[0] || 0,
                offsetY: n[1] || 0,
                blur: n[2] || 0,
              }),
              n.splice(0, n.length),
              (s = null);
          },
          l = 0;
        l < A.length;
        l++
      ) {
        var B = A[l];
        switch (B) {
          case '(':
            (e += B), a++;
            break;
          case ')':
            (e += B), a--;
            break;
          case ',':
            0 === a ? (c(), u()) : (e += B);
            break;
          case ' ':
            0 === a ? c() : (e += B);
            break;
          default:
            0 === e.length && i.test(B) && (t = !0), (e += B);
        }
      }
      return c(), u(), 0 === r.length ? null : r;
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.parseTransform = void 0);
    var n,
      r = t(3),
      o = (n = r) && n.__esModule ? n : { default: n };
    var i = function(A) {
        return parseFloat(A.trim());
      },
      a = /(matrix|matrix3d)\((.+)\)/,
      s =
        ((e.parseTransform = function(A) {
          var e = c(
            A.transform ||
              A.webkitTransform ||
              A.mozTransform ||
              A.msTransform ||
              A.oTransform,
          );
          return null === e
            ? null
            : {
                transform: e,
                transformOrigin: s(
                  A.transformOrigin ||
                    A.webkitTransformOrigin ||
                    A.mozTransformOrigin ||
                    A.msTransformOrigin ||
                    A.oTransformOrigin,
                ),
              };
        }),
        function(A) {
          if ('string' != typeof A) {
            var e = new o.default('0');
            return [e, e];
          }
          var t = A.split(' ').map(o.default.create);
          return [t[0], t[1]];
        }),
      c = function(A) {
        if ('none' === A || 'string' != typeof A) return null;
        var e = A.match(a);
        if (e) {
          if ('matrix' === e[1]) {
            var t = e[2].split(',').map(i);
            return [t[0], t[1], t[2], t[3], t[4], t[5]];
          }
          var n = e[2].split(',').map(i);
          return [n[0], n[1], n[4], n[5], n[12], n[13]];
        }
        return null;
      };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (e.VISIBILITY = { VISIBLE: 0, HIDDEN: 1, COLLAPSE: 2 });
    e.parseVisibility = function(A) {
      switch (A) {
        case 'hidden':
          return n.HIDDEN;
        case 'collapse':
          return n.COLLAPSE;
        case 'visible':
        default:
          return n.VISIBLE;
      }
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (e.WORD_BREAK = {
      NORMAL: 'normal',
      BREAK_ALL: 'break-all',
      KEEP_ALL: 'keep-all',
    });
    e.parseWordBreak = function(A) {
      switch (A) {
        case 'break-all':
          return n.BREAK_ALL;
        case 'keep-all':
          return n.KEEP_ALL;
        case 'normal':
        default:
          return n.NORMAL;
      }
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    e.parseZIndex = function(A) {
      var e = 'auto' === A;
      return { auto: e, order: e ? 0 : parseInt(A, 10) };
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = t(14);
    Object.defineProperty(e, 'toCodePoints', {
      enumerable: !0,
      get: function() {
        return n.toCodePoints;
      },
    }),
      Object.defineProperty(e, 'fromCodePoint', {
        enumerable: !0,
        get: function() {
          return n.fromCodePoint;
        },
      });
    var r = t(57);
    Object.defineProperty(e, 'LineBreaker', {
      enumerable: !0,
      get: function() {
        return r.LineBreaker;
      },
    });
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.LineBreaker = e.inlineBreakOpportunities = e.lineBreakAtIndex = e.codePointsToCharacterClasses = e.UnicodeTrie = e.BREAK_ALLOWED = e.BREAK_NOT_ALLOWED = e.BREAK_MANDATORY = e.classes = e.LETTER_NUMBER_MODIFIER = void 0);
    var n,
      r = (function() {
        function A(A, e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(A, n.key, n);
          }
        }
        return function(e, t, n) {
          return t && A(e.prototype, t), n && A(e, n), e;
        };
      })(),
      o = (function() {
        return function(A, e) {
          if (Array.isArray(A)) return A;
          if (Symbol.iterator in Object(A))
            return (function(A, e) {
              var t = [],
                n = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var i, a = A[Symbol.iterator]();
                  !(n = (i = a.next()).done) &&
                  (t.push(i.value), !e || t.length !== e);
                  n = !0
                );
              } catch (A) {
                (r = !0), (o = A);
              } finally {
                try {
                  !n && a.return && a.return();
                } finally {
                  if (r) throw o;
                }
              }
              return t;
            })(A, e);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance',
          );
        };
      })(),
      i = t(58),
      a = t(59),
      s = (n = a) && n.__esModule ? n : { default: n },
      c = t(14);
    var u = (e.LETTER_NUMBER_MODIFIER = 50),
      l = 10,
      B = 13,
      d = 15,
      g = 17,
      f = 18,
      h = 19,
      w = 20,
      p = 21,
      Q = 22,
      U = 24,
      m = 25,
      C = 26,
      F = 27,
      E = 28,
      v = 30,
      b = 32,
      _ = 33,
      H = 34,
      y = 35,
      N = 37,
      T = 38,
      I = 39,
      K = 40,
      S = 42,
      O =
        ((e.classes = {
          BK: 1,
          CR: 2,
          LF: 3,
          CM: 4,
          NL: 5,
          SG: 6,
          WJ: 7,
          ZW: 8,
          GL: 9,
          SP: l,
          ZWJ: 11,
          B2: 12,
          BA: B,
          BB: 14,
          HY: d,
          CB: 16,
          CL: g,
          CP: f,
          EX: h,
          IN: w,
          NS: p,
          OP: Q,
          QU: 23,
          IS: U,
          NU: m,
          PO: C,
          PR: F,
          SY: E,
          AI: 29,
          AL: v,
          CJ: 31,
          EB: b,
          EM: _,
          H2: H,
          H3: y,
          HL: 36,
          ID: N,
          JL: T,
          JV: I,
          JT: K,
          RI: 41,
          SA: S,
          XX: 43,
        }),
        (e.BREAK_MANDATORY = '!')),
      L = (e.BREAK_NOT_ALLOWED = '×'),
      M = (e.BREAK_ALLOWED = '÷'),
      D = (e.UnicodeTrie = (0, i.createTrieFromBase64)(s.default)),
      x = [v, 36],
      R = [1, 2, 3, 5],
      P = [l, 8],
      k = [F, C],
      z = R.concat(P),
      X = [T, I, K, H, y],
      V = [d, B],
      G = (e.codePointsToCharacterClasses = function(A) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'strict',
          t = [],
          n = [],
          r = [];
        return (
          A.forEach(function(A, o) {
            var i = D.get(A);
            if (
              (i > u ? (r.push(!0), (i -= u)) : r.push(!1),
              -1 !== ['normal', 'auto', 'loose'].indexOf(e) &&
                -1 !== [8208, 8211, 12316, 12448].indexOf(A))
            )
              return n.push(o), t.push(16);
            if (4 === i || 11 === i) {
              if (0 === o) return n.push(o), t.push(v);
              var a = t[o - 1];
              return -1 === z.indexOf(a)
                ? (n.push(n[o - 1]), t.push(a))
                : (n.push(o), t.push(v));
            }
            return (
              n.push(o),
              31 === i
                ? t.push('strict' === e ? p : N)
                : i === S
                ? t.push(v)
                : 29 === i
                ? t.push(v)
                : 43 === i
                ? (A >= 131072 && A <= 196605) || (A >= 196608 && A <= 262141)
                  ? t.push(N)
                  : t.push(v)
                : void t.push(i)
            );
          }),
          [n, t, r]
        );
      }),
      J = function(A, e, t, n) {
        var r = n[t];
        if (Array.isArray(A) ? -1 !== A.indexOf(r) : A === r)
          for (var o = t; o <= n.length; ) {
            var i = n[++o];
            if (i === e) return !0;
            if (i !== l) break;
          }
        if (r === l)
          for (var a = t; a > 0; ) {
            var s = n[--a];
            if (Array.isArray(A) ? -1 !== A.indexOf(s) : A === s)
              for (var c = t; c <= n.length; ) {
                var u = n[++c];
                if (u === e) return !0;
                if (u !== l) break;
              }
            if (s !== l) break;
          }
        return !1;
      },
      Y = function(A, e) {
        for (var t = A; t >= 0; ) {
          var n = e[t];
          if (n !== l) return n;
          t--;
        }
        return 0;
      },
      W = function(A, e, t, n, r) {
        if (0 === t[n]) return L;
        var o = n - 1;
        if (Array.isArray(r) && !0 === r[o]) return L;
        var i = o - 1,
          a = o + 1,
          s = e[o],
          c = i >= 0 ? e[i] : 0,
          u = e[a];
        if (2 === s && 3 === u) return L;
        if (-1 !== R.indexOf(s)) return O;
        if (-1 !== R.indexOf(u)) return L;
        if (-1 !== P.indexOf(u)) return L;
        if (8 === Y(o, e)) return M;
        if (11 === D.get(A[o]) && (u === N || u === b || u === _)) return L;
        if (7 === s || 7 === u) return L;
        if (9 === s) return L;
        if (-1 === [l, B, d].indexOf(s) && 9 === u) return L;
        if (-1 !== [g, f, h, U, E].indexOf(u)) return L;
        if (Y(o, e) === Q) return L;
        if (J(23, Q, o, e)) return L;
        if (J([g, f], p, o, e)) return L;
        if (J(12, 12, o, e)) return L;
        if (s === l) return M;
        if (23 === s || 23 === u) return L;
        if (16 === u || 16 === s) return M;
        if (-1 !== [B, d, p].indexOf(u) || 14 === s) return L;
        if (36 === c && -1 !== V.indexOf(s)) return L;
        if (s === E && 36 === u) return L;
        if (u === w && -1 !== x.concat(w, h, m, N, b, _).indexOf(s)) return L;
        if (
          (-1 !== x.indexOf(u) && s === m) ||
          (-1 !== x.indexOf(s) && u === m)
        )
          return L;
        if (
          (s === F && -1 !== [N, b, _].indexOf(u)) ||
          (-1 !== [N, b, _].indexOf(s) && u === C)
        )
          return L;
        if (
          (-1 !== x.indexOf(s) && -1 !== k.indexOf(u)) ||
          (-1 !== k.indexOf(s) && -1 !== x.indexOf(u))
        )
          return L;
        if (
          (-1 !== [F, C].indexOf(s) &&
            (u === m || (-1 !== [Q, d].indexOf(u) && e[a + 1] === m))) ||
          (-1 !== [Q, d].indexOf(s) && u === m) ||
          (s === m && -1 !== [m, E, U].indexOf(u))
        )
          return L;
        if (-1 !== [m, E, U, g, f].indexOf(u))
          for (var v = o; v >= 0; ) {
            var S = e[v];
            if (S === m) return L;
            if (-1 === [E, U].indexOf(S)) break;
            v--;
          }
        if (-1 !== [F, C].indexOf(u))
          for (var z = -1 !== [g, f].indexOf(s) ? i : o; z >= 0; ) {
            var G = e[z];
            if (G === m) return L;
            if (-1 === [E, U].indexOf(G)) break;
            z--;
          }
        if (
          (T === s && -1 !== [T, I, H, y].indexOf(u)) ||
          (-1 !== [I, H].indexOf(s) && -1 !== [I, K].indexOf(u)) ||
          (-1 !== [K, y].indexOf(s) && u === K)
        )
          return L;
        if (
          (-1 !== X.indexOf(s) && -1 !== [w, C].indexOf(u)) ||
          (-1 !== X.indexOf(u) && s === F)
        )
          return L;
        if (-1 !== x.indexOf(s) && -1 !== x.indexOf(u)) return L;
        if (s === U && -1 !== x.indexOf(u)) return L;
        if (
          (-1 !== x.concat(m).indexOf(s) && u === Q) ||
          (-1 !== x.concat(m).indexOf(u) && s === f)
        )
          return L;
        if (41 === s && 41 === u) {
          for (var W = t[o], j = 1; W > 0 && 41 === e[--W]; ) j++;
          if (j % 2 != 0) return L;
        }
        return s === b && u === _ ? L : M;
      },
      j =
        ((e.lineBreakAtIndex = function(A, e) {
          if (0 === e) return L;
          if (e >= A.length) return O;
          var t = G(A),
            n = o(t, 2),
            r = n[0],
            i = n[1];
          return W(A, i, r, e);
        }),
        function(A, e) {
          e || (e = { lineBreak: 'normal', wordBreak: 'normal' });
          var t = G(A, e.lineBreak),
            n = o(t, 3),
            r = n[0],
            i = n[1],
            a = n[2];
          return (
            ('break-all' !== e.wordBreak && 'break-word' !== e.wordBreak) ||
              (i = i.map(function(A) {
                return -1 !== [m, v, S].indexOf(A) ? N : A;
              })),
            [
              r,
              i,
              'keep-all' === e.wordBreak
                ? a.map(function(e, t) {
                    return e && A[t] >= 19968 && A[t] <= 40959;
                  })
                : null,
            ]
          );
        }),
      q =
        ((e.inlineBreakOpportunities = function(A, e) {
          var t = (0, c.toCodePoints)(A),
            n = L,
            r = j(t, e),
            i = o(r, 3),
            a = i[0],
            s = i[1],
            u = i[2];
          return (
            t.forEach(function(A, e) {
              n +=
                (0, c.fromCodePoint)(A) +
                (e >= t.length - 1 ? O : W(t, s, a, e + 1, u));
            }),
            n
          );
        }),
        (function() {
          function A(e, t, n, r) {
            !(function(A, e) {
              if (!(A instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, A),
              (this._codePoints = e),
              (this.required = t === O),
              (this.start = n),
              (this.end = r);
          }
          return (
            r(A, [
              {
                key: 'slice',
                value: function() {
                  return c.fromCodePoint.apply(
                    void 0,
                    (function(A) {
                      if (Array.isArray(A)) {
                        for (var e = 0, t = Array(A.length); e < A.length; e++)
                          t[e] = A[e];
                        return t;
                      }
                      return Array.from(A);
                    })(this._codePoints.slice(this.start, this.end)),
                  );
                },
              },
            ]),
            A
          );
        })());
    e.LineBreaker = function(A, e) {
      var t = (0, c.toCodePoints)(A),
        n = j(t, e),
        r = o(n, 3),
        i = r[0],
        a = r[1],
        s = r[2],
        u = t.length,
        l = 0,
        B = 0;
      return {
        next: function() {
          if (B >= u) return { done: !0 };
          for (var A = L; B < u && (A = W(t, a, i, ++B, s)) === L; );
          if (A !== L || B === u) {
            var e = new q(t, A, l, B);
            return (l = B), { value: e, done: !1 };
          }
          return { done: !0 };
        },
      };
    };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.Trie = e.createTrieFromBase64 = e.UTRIE2_INDEX_2_MASK = e.UTRIE2_INDEX_2_BLOCK_LENGTH = e.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = e.UTRIE2_INDEX_1_OFFSET = e.UTRIE2_UTF8_2B_INDEX_2_LENGTH = e.UTRIE2_UTF8_2B_INDEX_2_OFFSET = e.UTRIE2_INDEX_2_BMP_LENGTH = e.UTRIE2_LSCP_INDEX_2_LENGTH = e.UTRIE2_DATA_MASK = e.UTRIE2_DATA_BLOCK_LENGTH = e.UTRIE2_LSCP_INDEX_2_OFFSET = e.UTRIE2_SHIFT_1_2 = e.UTRIE2_INDEX_SHIFT = e.UTRIE2_SHIFT_1 = e.UTRIE2_SHIFT_2 = void 0);
    var n = (function() {
        function A(A, e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(A, n.key, n);
          }
        }
        return function(e, t, n) {
          return t && A(e.prototype, t), n && A(e, n), e;
        };
      })(),
      r = t(14);
    var o = (e.UTRIE2_SHIFT_2 = 5),
      i = (e.UTRIE2_SHIFT_1 = 11),
      a = (e.UTRIE2_INDEX_SHIFT = 2),
      s = (e.UTRIE2_SHIFT_1_2 = i - o),
      c = (e.UTRIE2_LSCP_INDEX_2_OFFSET = 65536 >> o),
      u = (e.UTRIE2_DATA_BLOCK_LENGTH = 1 << o),
      l = (e.UTRIE2_DATA_MASK = u - 1),
      B = (e.UTRIE2_LSCP_INDEX_2_LENGTH = 1024 >> o),
      d = (e.UTRIE2_INDEX_2_BMP_LENGTH = c + B),
      g = (e.UTRIE2_UTF8_2B_INDEX_2_OFFSET = d),
      f = (e.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 32),
      h = (e.UTRIE2_INDEX_1_OFFSET = g + f),
      w = (e.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 65536 >> i),
      p = (e.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << s),
      Q = (e.UTRIE2_INDEX_2_MASK = p - 1),
      U =
        ((e.createTrieFromBase64 = function(A) {
          var e = (0, r.decode)(A),
            t = Array.isArray(e)
              ? (0, r.polyUint32Array)(e)
              : new Uint32Array(e),
            n = Array.isArray(e)
              ? (0, r.polyUint16Array)(e)
              : new Uint16Array(e),
            o = n.slice(12, t[4] / 2),
            i =
              2 === t[5]
                ? n.slice((24 + t[4]) / 2)
                : t.slice(Math.ceil((24 + t[4]) / 4));
          return new U(t[0], t[1], t[2], t[3], o, i);
        }),
        (e.Trie = (function() {
          function A(e, t, n, r, o, i) {
            !(function(A, e) {
              if (!(A instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, A),
              (this.initialValue = e),
              (this.errorValue = t),
              (this.highStart = n),
              (this.highValueIndex = r),
              (this.index = o),
              (this.data = i);
          }
          return (
            n(A, [
              {
                key: 'get',
                value: function(A) {
                  var e = void 0;
                  if (A >= 0) {
                    if (A < 55296 || (A > 56319 && A <= 65535))
                      return (
                        (e = ((e = this.index[A >> o]) << a) + (A & l)),
                        this.data[e]
                      );
                    if (A <= 65535)
                      return (
                        (e =
                          ((e = this.index[c + ((A - 55296) >> o)]) << a) +
                          (A & l)),
                        this.data[e]
                      );
                    if (A < this.highStart)
                      return (
                        (e = h - w + (A >> i)),
                        (e = this.index[e]),
                        (e += (A >> o) & Q),
                        (e = ((e = this.index[e]) << a) + (A & l)),
                        this.data[e]
                      );
                    if (A <= 1114111) return this.data[this.highValueIndex];
                  }
                  return this.errorValue;
                },
              },
            ]),
            A
          );
        })()));
  },
  function(A, e, t) {
    'use strict';
    A.exports =
      'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';
  },
  function(A, e, t) {
    'use strict';
    (function(A) {
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = t(7);
      e.default = function e(t, r, o) {
        !(function(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this.type = n.PATH.CIRCLE),
          (this.x = t),
          (this.y = r),
          (this.radius = o),
          'production' !== A.env.NODE_ENV &&
            (isNaN(t) && console.error('Invalid x value given for Circle'),
            isNaN(r) && console.error('Invalid y value given for Circle'),
            isNaN(o) && console.error('Invalid radius value given for Circle'));
      };
    }.call(e, t(0)));
  },
  function(A, e, t) {
    'use strict';
    (function(A) {
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n,
        r = (function() {
          return function(A, e) {
            if (Array.isArray(A)) return A;
            if (Symbol.iterator in Object(A))
              return (function(A, e) {
                var t = [],
                  n = !0,
                  r = !1,
                  o = void 0;
                try {
                  for (
                    var i, a = A[Symbol.iterator]();
                    !(n = (i = a.next()).done) &&
                    (t.push(i.value), !e || t.length !== e);
                    n = !0
                  );
                } catch (A) {
                  (r = !0), (o = A);
                } finally {
                  try {
                    !n && a.return && a.return();
                  } finally {
                    if (r) throw o;
                  }
                }
                return t;
              })(A, e);
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance',
            );
          };
        })(),
        o = (function() {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(A, n.key, n);
            }
          }
          return function(e, t, n) {
            return t && A(e.prototype, t), n && A(e, n), e;
          };
        })(),
        i = t(2),
        a = (t(27), t(62)),
        s = t(10),
        c = (n = s) && n.__esModule ? n : { default: n },
        u = t(6),
        l = t(13);
      var B = (function() {
        function e(A, t) {
          !(function(A, e) {
            if (!(A instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.target = A),
            (this.options = t),
            A.render(t);
        }
        return (
          o(e, [
            {
              key: 'renderNode',
              value: function(A) {
                A.isVisible() &&
                  (this.renderNodeBackgroundAndBorders(A),
                  this.renderNodeContent(A));
              },
            },
            {
              key: 'renderNodeContent',
              value: function(A) {
                var e = this,
                  t = function() {
                    if (
                      (A.childNodes.length &&
                        A.childNodes.forEach(function(t) {
                          if (t instanceof c.default) {
                            var n = t.parent.style;
                            e.target.renderTextNode(
                              t.bounds,
                              n.color,
                              n.font,
                              n.textDecoration,
                              n.textShadow,
                            );
                          } else e.target.drawShape(t, A.style.color);
                        }),
                      A.image)
                    ) {
                      var t = e.options.imageStore.get(A.image);
                      if (t) {
                        var n = (0, i.calculateContentBox)(
                            A.bounds,
                            A.style.padding,
                            A.style.border,
                          ),
                          r =
                            'number' == typeof t.width && t.width > 0
                              ? t.width
                              : n.width,
                          o =
                            'number' == typeof t.height && t.height > 0
                              ? t.height
                              : n.height;
                        r > 0 &&
                          o > 0 &&
                          e.target.clip(
                            [(0, i.calculatePaddingBoxPath)(A.curvedBounds)],
                            function() {
                              e.target.drawImage(
                                t,
                                new i.Bounds(0, 0, r, o),
                                n,
                              );
                            },
                          );
                      }
                    }
                  },
                  n = A.getClipPaths();
                n.length ? this.target.clip(n, t) : t();
              },
            },
            {
              key: 'renderNodeBackgroundAndBorders',
              value: function(A) {
                var e = this,
                  t =
                    !A.style.background.backgroundColor.isTransparent() ||
                    A.style.background.backgroundImage.length,
                  n = A.style.border.some(function(A) {
                    return (
                      A.borderStyle !== l.BORDER_STYLE.NONE &&
                      !A.borderColor.isTransparent()
                    );
                  }),
                  r = function() {
                    var n = (0, u.calculateBackgroungPaintingArea)(
                      A.curvedBounds,
                      A.style.background.backgroundClip,
                    );
                    t &&
                      e.target.clip([n], function() {
                        A.style.background.backgroundColor.isTransparent() ||
                          e.target.fill(A.style.background.backgroundColor),
                          e.renderBackgroundImage(A);
                      }),
                      A.style.border.forEach(function(t, n) {
                        t.borderStyle === l.BORDER_STYLE.NONE ||
                          t.borderColor.isTransparent() ||
                          e.renderBorder(t, n, A.curvedBounds);
                      });
                  };
                if (t || n) {
                  var o = A.parent ? A.parent.getClipPaths() : [];
                  o.length ? this.target.clip(o, r) : r();
                }
              },
            },
            {
              key: 'renderBackgroundImage',
              value: function(A) {
                var e = this;
                A.style.background.backgroundImage
                  .slice(0)
                  .reverse()
                  .forEach(function(t) {
                    'url' === t.source.method && t.source.args.length
                      ? e.renderBackgroundRepeat(A, t)
                      : /gradient/i.test(t.source.method) &&
                        e.renderBackgroundGradient(A, t);
                  });
              },
            },
            {
              key: 'renderBackgroundRepeat',
              value: function(A, e) {
                var t = this.options.imageStore.get(e.source.args[0]);
                if (t) {
                  var n = (0, u.calculateBackgroungPositioningArea)(
                      A.style.background.backgroundOrigin,
                      A.bounds,
                      A.style.padding,
                      A.style.border,
                    ),
                    r = (0, u.calculateBackgroundSize)(e, t, n),
                    o = (0, u.calculateBackgroundPosition)(e.position, r, n),
                    i = (0, u.calculateBackgroundRepeatPath)(
                      e,
                      o,
                      r,
                      n,
                      A.bounds,
                    ),
                    a = Math.round(n.left + o.x),
                    s = Math.round(n.top + o.y);
                  this.target.renderRepeat(i, t, r, a, s);
                }
              },
            },
            {
              key: 'renderBackgroundGradient',
              value: function(A, e) {
                var t = (0, u.calculateBackgroungPositioningArea)(
                    A.style.background.backgroundOrigin,
                    A.bounds,
                    A.style.padding,
                    A.style.border,
                  ),
                  n = (0, u.calculateGradientBackgroundSize)(e, t),
                  r = (0, u.calculateBackgroundPosition)(e.position, n, t),
                  o = new i.Bounds(
                    Math.round(t.left + r.x),
                    Math.round(t.top + r.y),
                    n.width,
                    n.height,
                  ),
                  s = (0, a.parseGradient)(A, e.source, o);
                if (s)
                  switch (s.type) {
                    case a.GRADIENT_TYPE.LINEAR_GRADIENT:
                      this.target.renderLinearGradient(o, s);
                      break;
                    case a.GRADIENT_TYPE.RADIAL_GRADIENT:
                      this.target.renderRadialGradient(o, s);
                  }
              },
            },
            {
              key: 'renderBorder',
              value: function(A, e, t) {
                this.target.drawShape(
                  (0, i.parsePathForBorder)(t, e),
                  A.borderColor,
                );
              },
            },
            {
              key: 'renderStack',
              value: function(A) {
                var e = this;
                if (A.container.isVisible()) {
                  var t = A.getOpacity();
                  t !== this._opacity &&
                    (this.target.setOpacity(A.getOpacity()),
                    (this._opacity = t));
                  var n = A.container.style.transform;
                  null !== n
                    ? this.target.transform(
                        A.container.bounds.left + n.transformOrigin[0].value,
                        A.container.bounds.top + n.transformOrigin[1].value,
                        n.transform,
                        function() {
                          return e.renderStackContent(A);
                        },
                      )
                    : this.renderStackContent(A);
                }
              },
            },
            {
              key: 'renderStackContent',
              value: function(A) {
                var e = g(A),
                  t = r(e, 5),
                  n = t[0],
                  o = t[1],
                  i = t[2],
                  a = t[3],
                  s = t[4],
                  c = d(A),
                  u = r(c, 2),
                  l = u[0],
                  B = u[1];
                this.renderNodeBackgroundAndBorders(A.container),
                  n.sort(f).forEach(this.renderStack, this),
                  this.renderNodeContent(A.container),
                  B.forEach(this.renderNode, this),
                  a.forEach(this.renderStack, this),
                  s.forEach(this.renderStack, this),
                  l.forEach(this.renderNode, this),
                  o.forEach(this.renderStack, this),
                  i.sort(f).forEach(this.renderStack, this);
              },
            },
            {
              key: 'render',
              value: function(e) {
                var t = this;
                this.options.backgroundColor &&
                  this.target.rectangle(
                    this.options.x,
                    this.options.y,
                    this.options.width,
                    this.options.height,
                    this.options.backgroundColor,
                  ),
                  this.renderStack(e);
                var n = this.target.getTarget();
                return 'production' !== A.env.NODE_ENV
                  ? n.then(function(A) {
                      return t.options.logger.log('Render completed'), A;
                    })
                  : n;
              },
            },
          ]),
          e
        );
      })();
      e.default = B;
      var d = function(A) {
          for (var e = [], t = [], n = A.children.length, r = 0; r < n; r++) {
            var o = A.children[r];
            o.isInlineLevel() ? e.push(o) : t.push(o);
          }
          return [e, t];
        },
        g = function(A) {
          for (
            var e = [],
              t = [],
              n = [],
              r = [],
              o = [],
              i = A.contexts.length,
              a = 0;
            a < i;
            a++
          ) {
            var s = A.contexts[a];
            s.container.isPositioned() ||
            s.container.style.opacity < 1 ||
            s.container.isTransformed()
              ? s.container.style.zIndex.order < 0
                ? e.push(s)
                : s.container.style.zIndex.order > 0
                ? n.push(s)
                : t.push(s)
              : s.container.isFloating()
              ? r.push(s)
              : o.push(s);
          }
          return [e, t, n, r, o];
        },
        f = function(A, e) {
          return A.container.style.zIndex.order > e.container.style.zIndex.order
            ? 1
            : A.container.style.zIndex.order < e.container.style.zIndex.order
            ? -1
            : A.container.index > e.container.index
            ? 1
            : -1;
        };
    }.call(e, t(0)));
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.transformWebkitRadialGradientArgs = e.parseGradient = e.RadialGradient = e.LinearGradient = e.RADIAL_GRADIENT_SHAPE = e.GRADIENT_TYPE = void 0);
    var n = (function() {
        return function(A, e) {
          if (Array.isArray(A)) return A;
          if (Symbol.iterator in Object(A))
            return (function(A, e) {
              var t = [],
                n = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var i, a = A[Symbol.iterator]();
                  !(n = (i = a.next()).done) &&
                  (t.push(i.value), !e || t.length !== e);
                  n = !0
                );
              } catch (A) {
                (r = !0), (o = A);
              } finally {
                try {
                  !n && a.return && a.return();
                } finally {
                  if (r) throw o;
                }
              }
              return t;
            })(A, e);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance',
          );
        };
      })(),
      r = (c(t(4)), t(63)),
      o = c(t(1)),
      i = t(3),
      a = c(i),
      s = t(5);
    function c(A) {
      return A && A.__esModule ? A : { default: A };
    }
    function u(A, e) {
      if (!(A instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    var l = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i,
      B = /^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i,
      d = /(px)|%|( 0)$/i,
      g = /^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i,
      f = /^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i,
      h = (e.GRADIENT_TYPE = { LINEAR_GRADIENT: 0, RADIAL_GRADIENT: 1 }),
      w = (e.RADIAL_GRADIENT_SHAPE = { CIRCLE: 0, ELLIPSE: 1 }),
      p = {
        left: new a.default('0%'),
        top: new a.default('0%'),
        center: new a.default('50%'),
        right: new a.default('100%'),
        bottom: new a.default('100%'),
      },
      Q = (e.LinearGradient = function A(e, t) {
        u(this, A),
          (this.type = h.LINEAR_GRADIENT),
          (this.colorStops = e),
          (this.direction = t);
      }),
      U = (e.RadialGradient = function A(e, t, n, r) {
        u(this, A),
          (this.type = h.RADIAL_GRADIENT),
          (this.colorStops = e),
          (this.shape = t),
          (this.center = n),
          (this.radius = r);
      }),
      m =
        ((e.parseGradient = function(A, e, t) {
          var n = e.args,
            r = e.method,
            o = e.prefix;
          return 'linear-gradient' === r
            ? C(n, t, !!o)
            : 'gradient' === r && 'linear' === n[0]
            ? C(['to bottom'].concat(T(n.slice(3))), t, !!o)
            : 'radial-gradient' === r
            ? F(A, '-webkit-' === o ? N(n) : n, t)
            : 'gradient' === r && 'radial' === n[0]
            ? F(A, T(N(n.slice(1))), t)
            : void 0;
        }),
        function(A, e, t) {
          for (var n = [], r = e; r < A.length; r++) {
            var i = A[r],
              s = d.test(i),
              c = i.lastIndexOf(' '),
              u = new o.default(s ? i.substring(0, c) : i),
              l = s
                ? new a.default(i.substring(c + 1))
                : r === e
                ? new a.default('0%')
                : r === A.length - 1
                ? new a.default('100%')
                : null;
            n.push({ color: u, stop: l });
          }
          for (
            var B = n.map(function(A) {
                var e = A.color,
                  n = A.stop;
                return {
                  color: e,
                  stop: 0 === t ? 0 : n ? n.getAbsoluteValue(t) / t : null,
                };
              }),
              g = B[0].stop,
              f = 0;
            f < B.length;
            f++
          )
            if (null !== g) {
              var h = B[f].stop;
              if (null === h) {
                for (var w = f; null === B[w].stop; ) w++;
                for (var p = w - f + 1, Q = (B[w].stop - g) / p; f < w; f++)
                  g = B[f].stop = g + Q;
              } else g = h;
            }
          return B;
        }),
      C = function(A, e, t) {
        var n = (0, r.parseAngle)(A[0]),
          o = l.test(A[0]),
          i = o || null !== n || B.test(A[0]),
          a = i
            ? null !== n
              ? E(t ? n - 0.5 * Math.PI : n, e)
              : o
              ? b(A[0], e)
              : _(A[0], e)
            : E(Math.PI, e),
          c = i ? 1 : 0,
          u = Math.min(
            (0, s.distance)(
              Math.abs(a.x0) + Math.abs(a.x1),
              Math.abs(a.y0) + Math.abs(a.y1),
            ),
            2 * e.width,
            2 * e.height,
          );
        return new Q(m(A, c, u), a);
      },
      F = function(A, e, t) {
        var n = e[0].match(f),
          r =
            n && ('circle' === n[1] || (void 0 !== n[3] && void 0 === n[5]))
              ? w.CIRCLE
              : w.ELLIPSE,
          o = {},
          a = {};
        n &&
          (void 0 !== n[3] &&
            (o.x = (0, i.calculateLengthFromValueWithUnit)(
              A,
              n[3],
              n[4],
            ).getAbsoluteValue(t.width)),
          void 0 !== n[5] &&
            (o.y = (0, i.calculateLengthFromValueWithUnit)(
              A,
              n[5],
              n[6],
            ).getAbsoluteValue(t.height)),
          n[7]
            ? (a.x = p[n[7].toLowerCase()])
            : void 0 !== n[8] &&
              (a.x = (0, i.calculateLengthFromValueWithUnit)(A, n[8], n[9])),
          n[10]
            ? (a.y = p[n[10].toLowerCase()])
            : void 0 !== n[11] &&
              (a.y = (0, i.calculateLengthFromValueWithUnit)(A, n[11], n[12])));
        var s = {
            x: void 0 === a.x ? t.width / 2 : a.x.getAbsoluteValue(t.width),
            y: void 0 === a.y ? t.height / 2 : a.y.getAbsoluteValue(t.height),
          },
          c = y((n && n[2]) || 'farthest-corner', r, s, o, t);
        return new U(m(e, n ? 1 : 0, Math.min(c.x, c.y)), r, s, c);
      },
      E = function(A, e) {
        var t = e.width,
          n = e.height,
          r = 0.5 * t,
          o = 0.5 * n,
          i = (Math.abs(t * Math.sin(A)) + Math.abs(n * Math.cos(A))) / 2,
          a = r + Math.sin(A) * i,
          s = o - Math.cos(A) * i;
        return { x0: a, x1: t - a, y0: s, y1: n - s };
      },
      v = function(A) {
        return Math.acos(
          A.width / 2 / ((0, s.distance)(A.width, A.height) / 2),
        );
      },
      b = function(A, e) {
        switch (A) {
          case 'bottom':
          case 'to top':
            return E(0, e);
          case 'left':
          case 'to right':
            return E(Math.PI / 2, e);
          case 'right':
          case 'to left':
            return E((3 * Math.PI) / 2, e);
          case 'top right':
          case 'right top':
          case 'to bottom left':
          case 'to left bottom':
            return E(Math.PI + v(e), e);
          case 'top left':
          case 'left top':
          case 'to bottom right':
          case 'to right bottom':
            return E(Math.PI - v(e), e);
          case 'bottom left':
          case 'left bottom':
          case 'to top right':
          case 'to right top':
            return E(v(e), e);
          case 'bottom right':
          case 'right bottom':
          case 'to top left':
          case 'to left top':
            return E(2 * Math.PI - v(e), e);
          case 'top':
          case 'to bottom':
          default:
            return E(Math.PI, e);
        }
      },
      _ = function(A, e) {
        var t = A.split(' ').map(parseFloat),
          r = n(t, 2),
          o = r[0],
          i = r[1],
          a = ((o / 100) * e.width) / ((i / 100) * e.height);
        return E(Math.atan(isNaN(a) ? 1 : a) + Math.PI / 2, e);
      },
      H = function(A, e, t, n) {
        return [
          { x: 0, y: 0 },
          { x: 0, y: A.height },
          { x: A.width, y: 0 },
          { x: A.width, y: A.height },
        ].reduce(
          function(A, r) {
            var o = (0, s.distance)(e - r.x, t - r.y);
            return (n
            ? o < A.optimumDistance
            : o > A.optimumDistance)
              ? { optimumCorner: r, optimumDistance: o }
              : A;
          },
          { optimumDistance: n ? 1 / 0 : -1 / 0, optimumCorner: null },
        ).optimumCorner;
      },
      y = function(A, e, t, n, r) {
        var o = t.x,
          i = t.y,
          a = 0,
          c = 0;
        switch (A) {
          case 'closest-side':
            e === w.CIRCLE
              ? (a = c = Math.min(
                  Math.abs(o),
                  Math.abs(o - r.width),
                  Math.abs(i),
                  Math.abs(i - r.height),
                ))
              : e === w.ELLIPSE &&
                ((a = Math.min(Math.abs(o), Math.abs(o - r.width))),
                (c = Math.min(Math.abs(i), Math.abs(i - r.height))));
            break;
          case 'closest-corner':
            if (e === w.CIRCLE)
              a = c = Math.min(
                (0, s.distance)(o, i),
                (0, s.distance)(o, i - r.height),
                (0, s.distance)(o - r.width, i),
                (0, s.distance)(o - r.width, i - r.height),
              );
            else if (e === w.ELLIPSE) {
              var u =
                  Math.min(Math.abs(i), Math.abs(i - r.height)) /
                  Math.min(Math.abs(o), Math.abs(o - r.width)),
                l = H(r, o, i, !0);
              c = u * (a = (0, s.distance)(l.x - o, (l.y - i) / u));
            }
            break;
          case 'farthest-side':
            e === w.CIRCLE
              ? (a = c = Math.max(
                  Math.abs(o),
                  Math.abs(o - r.width),
                  Math.abs(i),
                  Math.abs(i - r.height),
                ))
              : e === w.ELLIPSE &&
                ((a = Math.max(Math.abs(o), Math.abs(o - r.width))),
                (c = Math.max(Math.abs(i), Math.abs(i - r.height))));
            break;
          case 'farthest-corner':
            if (e === w.CIRCLE)
              a = c = Math.max(
                (0, s.distance)(o, i),
                (0, s.distance)(o, i - r.height),
                (0, s.distance)(o - r.width, i),
                (0, s.distance)(o - r.width, i - r.height),
              );
            else if (e === w.ELLIPSE) {
              var B =
                  Math.max(Math.abs(i), Math.abs(i - r.height)) /
                  Math.max(Math.abs(o), Math.abs(o - r.width)),
                d = H(r, o, i, !1);
              c = B * (a = (0, s.distance)(d.x - o, (d.y - i) / B));
            }
            break;
          default:
            (a = n.x || 0), (c = void 0 !== n.y ? n.y : a);
        }
        return { x: a, y: c };
      },
      N = (e.transformWebkitRadialGradientArgs = function(A) {
        var e = '',
          t = '',
          n = '',
          r = '',
          o = 0,
          i = /^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i,
          a = /^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i,
          s = A[o].match(i);
        s && o++;
        var c = A[o].match(
          /^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i,
        );
        c &&
          ((e = c[1] || ''),
          'contain' === (n = c[2] || '')
            ? (n = 'closest-side')
            : 'cover' === n && (n = 'farthest-corner'),
          o++);
        var u = A[o].match(a);
        u && o++;
        var l = A[o].match(i);
        l && o++;
        var B = A[o].match(a);
        B && o++;
        var d = l || s;
        d &&
          d[1] &&
          ((r = d[1] + (/^\d+$/.test(d[1]) ? 'px' : '')),
          d[2] && (r += ' ' + d[2] + (/^\d+$/.test(d[2]) ? 'px' : '')));
        var g = B || u;
        return (
          g && ((t = g[0]), g[1] || (t += 'px')),
          !r || e || t || n || ((t = r), (r = '')),
          r && (r = 'at ' + r),
          [
            [e, n, t, r]
              .filter(function(A) {
                return !!A;
              })
              .join(' '),
          ].concat(A.slice(o))
        );
      }),
      T = function(A) {
        return A.map(function(A) {
          return A.match(g);
        }).map(function(e, t) {
          if (!e) return A[t];
          switch (e[1]) {
            case 'from':
              return e[4] + ' 0%';
            case 'to':
              return e[4] + ' 100%';
            case 'color-stop':
              return '%' === e[3]
                ? e[4] + ' ' + e[2]
                : e[4] + ' ' + 100 * parseFloat(e[2]) + '%';
          }
        });
      };
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i;
    e.parseAngle = function(A) {
      var e = A.match(n);
      if (e) {
        var t = parseFloat(e[1]);
        switch (e[2].toLowerCase()) {
          case 'deg':
            return (Math.PI * t) / 180;
          case 'grad':
            return (Math.PI / 200) * t;
          case 'rad':
            return t;
          case 'turn':
            return 2 * Math.PI * t;
        }
      }
      return null;
    };
  },
  function(A, e, t) {
    'use strict';
    (function(A) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.cloneWindow = e.DocumentCloner = void 0);
      var n = (function() {
          return function(A, e) {
            if (Array.isArray(A)) return A;
            if (Symbol.iterator in Object(A))
              return (function(A, e) {
                var t = [],
                  n = !0,
                  r = !1,
                  o = void 0;
                try {
                  for (
                    var i, a = A[Symbol.iterator]();
                    !(n = (i = a.next()).done) &&
                    (t.push(i.value), !e || t.length !== e);
                    n = !0
                  );
                } catch (A) {
                  (r = !0), (o = A);
                } finally {
                  try {
                    !n && a.return && a.return();
                  } finally {
                    if (r) throw o;
                  }
                }
                return t;
              })(A, e);
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance',
            );
          };
        })(),
        r = (function() {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(A, n.key, n);
            }
          }
          return function(e, t, n) {
            return t && A(e.prototype, t), n && A(e, n), e;
          };
        })(),
        o = t(2),
        i = t(28),
        a = B(t(65)),
        s = t(5),
        c = t(6),
        u = B(t(17)),
        l = t(66);
      function B(A) {
        return A && A.__esModule ? A : { default: A };
      }
      var d = (e.DocumentCloner = (function() {
          function e(A, t, n, r, o) {
            !(function(A, e) {
              if (!(A instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.referenceElement = A),
              (this.scrolledElements = []),
              (this.copyStyles = r),
              (this.inlineImages = r),
              (this.logger = n),
              (this.options = t),
              (this.renderer = o),
              (this.resourceLoader = new a.default(t, n, window)),
              (this.pseudoContentData = { counters: {}, quoteDepth: 0 }),
              (this.documentElement = this.cloneNode(
                A.ownerDocument.documentElement,
              ));
          }
          return (
            r(e, [
              {
                key: 'inlineAllImages',
                value: function(e) {
                  var t = this;
                  if (this.inlineImages && e) {
                    var n = e.style;
                    Promise.all(
                      (0, c.parseBackgroundImage)(n.backgroundImage).map(
                        function(e) {
                          return 'url' === e.method
                            ? t.resourceLoader
                                .inlineImage(e.args[0])
                                .then(function(A) {
                                  return A && 'string' == typeof A.src
                                    ? 'url("' + A.src + '")'
                                    : 'none';
                                })
                                .catch(function(e) {
                                  'production' !== A.env.NODE_ENV &&
                                    t.logger.log('Unable to load image', e);
                                })
                            : Promise.resolve(
                                '' +
                                  e.prefix +
                                  e.method +
                                  '(' +
                                  e.args.join(',') +
                                  ')',
                              );
                        },
                      ),
                    ).then(function(A) {
                      A.length > 1 && (n.backgroundColor = ''),
                        (n.backgroundImage = A.join(','));
                    }),
                      e instanceof HTMLImageElement &&
                        this.resourceLoader
                          .inlineImage(e.src)
                          .then(function(A) {
                            if (
                              A &&
                              e instanceof HTMLImageElement &&
                              e.parentNode
                            ) {
                              var t = e.parentNode,
                                n = (0, s.copyCSSStyles)(
                                  e.style,
                                  A.cloneNode(!1),
                                );
                              t.replaceChild(n, e);
                            }
                          })
                          .catch(function(e) {
                            'production' !== A.env.NODE_ENV &&
                              t.logger.log('Unable to load image', e);
                          });
                  }
                },
              },
              {
                key: 'inlineFonts',
                value: function(e) {
                  var t = this;
                  return Promise.all(
                    Array.from(e.styleSheets).map(function(n) {
                      return n.href
                        ? fetch(n.href)
                            .then(function(A) {
                              return A.text();
                            })
                            .then(function(A) {
                              return f(A, n.href);
                            })
                            .catch(function(e) {
                              return (
                                'production' !== A.env.NODE_ENV &&
                                  t.logger.log('Unable to load stylesheet', e),
                                []
                              );
                            })
                        : g(n, e);
                    }),
                  )
                    .then(function(A) {
                      return A.reduce(function(A, e) {
                        return A.concat(e);
                      }, []);
                    })
                    .then(function(A) {
                      return Promise.all(
                        A.map(function(A) {
                          return fetch(A.formats[0].src)
                            .then(function(A) {
                              return A.blob();
                            })
                            .then(function(A) {
                              return new Promise(function(e, t) {
                                var n = new FileReader();
                                (n.onerror = t),
                                  (n.onload = function() {
                                    var A = n.result;
                                    e(A);
                                  }),
                                  n.readAsDataURL(A);
                              });
                            })
                            .then(function(e) {
                              return (
                                A.fontFace.setProperty(
                                  'src',
                                  'url("' + e + '")',
                                ),
                                '@font-face {' + A.fontFace.cssText + ' '
                              );
                            });
                        }),
                      );
                    })
                    .then(function(A) {
                      var n = e.createElement('style');
                      (n.textContent = A.join('\n')),
                        t.documentElement.appendChild(n);
                    });
                },
              },
              {
                key: 'createElementClone',
                value: function(e) {
                  var t = this;
                  if (this.copyStyles && e instanceof HTMLCanvasElement) {
                    var n = e.ownerDocument.createElement('img');
                    try {
                      return (n.src = e.toDataURL()), n;
                    } catch (e) {
                      'production' !== A.env.NODE_ENV &&
                        this.logger.log(
                          'Unable to clone canvas contents, canvas is tainted',
                        );
                    }
                  }
                  if (e instanceof HTMLIFrameElement) {
                    var r = e.cloneNode(!1),
                      i = v();
                    r.setAttribute('data-html2canvas-internal-iframe-key', i);
                    var a = (0, o.parseBounds)(e, 0, 0),
                      c = a.width,
                      l = a.height;
                    return (
                      (this.resourceLoader.cache[i] = _(e, this.options)
                        .then(function(A) {
                          return t.renderer(
                            A,
                            {
                              async: t.options.async,
                              allowTaint: t.options.allowTaint,
                              backgroundColor: '#ffffff',
                              canvas: null,
                              imageTimeout: t.options.imageTimeout,
                              logging: t.options.logging,
                              proxy: t.options.proxy,
                              removeContainer: t.options.removeContainer,
                              scale: t.options.scale,
                              foreignObjectRendering:
                                t.options.foreignObjectRendering,
                              useCORS: t.options.useCORS,
                              target: new u.default(),
                              width: c,
                              height: l,
                              x: 0,
                              y: 0,
                              windowWidth:
                                A.ownerDocument.defaultView.innerWidth,
                              windowHeight:
                                A.ownerDocument.defaultView.innerHeight,
                              scrollX: A.ownerDocument.defaultView.pageXOffset,
                              scrollY: A.ownerDocument.defaultView.pageYOffset,
                            },
                            t.logger.child(i),
                          );
                        })
                        .then(function(A) {
                          return new Promise(function(t, n) {
                            var o = document.createElement('img');
                            (o.onload = function() {
                              return t(A);
                            }),
                              (o.onerror = n),
                              (o.src = A.toDataURL()),
                              r.parentNode &&
                                r.parentNode.replaceChild(
                                  (0, s.copyCSSStyles)(
                                    e.ownerDocument.defaultView.getComputedStyle(
                                      e,
                                    ),
                                    o,
                                  ),
                                  r,
                                );
                          });
                        })),
                      r
                    );
                  }
                  if (
                    e instanceof HTMLStyleElement &&
                    e.sheet &&
                    e.sheet.cssRules
                  ) {
                    var B = [].slice
                        .call(e.sheet.cssRules, 0)
                        .reduce(function(A, e) {
                          return A + e.cssText;
                        }, ''),
                      d = e.cloneNode(!1);
                    return (d.textContent = B), d;
                  }
                  return e.cloneNode(!1);
                },
              },
              {
                key: 'cloneNode',
                value: function(A) {
                  var e =
                      A.nodeType === Node.TEXT_NODE
                        ? document.createTextNode(A.nodeValue)
                        : this.createElementClone(A),
                    t = A.ownerDocument.defaultView,
                    n =
                      A instanceof t.HTMLElement ? t.getComputedStyle(A) : null,
                    r =
                      A instanceof t.HTMLElement
                        ? t.getComputedStyle(A, ':before')
                        : null,
                    o =
                      A instanceof t.HTMLElement
                        ? t.getComputedStyle(A, ':after')
                        : null;
                  this.referenceElement === A &&
                    e instanceof t.HTMLElement &&
                    (this.clonedReferenceElement = e),
                    e instanceof t.HTMLBodyElement && C(e);
                  for (
                    var i = (0, l.parseCounterReset)(n, this.pseudoContentData),
                      a = (0, l.resolvePseudoContent)(
                        A,
                        r,
                        this.pseudoContentData,
                      ),
                      c = A.firstChild;
                    c;
                    c = c.nextSibling
                  )
                    (c.nodeType === Node.ELEMENT_NODE &&
                      ('SCRIPT' === c.nodeName ||
                        c.hasAttribute('data-html2canvas-ignore') ||
                        ('function' == typeof this.options.ignoreElements &&
                          this.options.ignoreElements(c)))) ||
                      (this.copyStyles && 'STYLE' === c.nodeName) ||
                      e.appendChild(this.cloneNode(c));
                  var u = (0, l.resolvePseudoContent)(
                    A,
                    o,
                    this.pseudoContentData,
                  );
                  if (
                    ((0, l.popCounters)(i, this.pseudoContentData),
                    A instanceof t.HTMLElement && e instanceof t.HTMLElement)
                  )
                    switch (
                      (r && this.inlineAllImages(w(A, e, r, a, p)),
                      o && this.inlineAllImages(w(A, e, o, u, Q)),
                      !n ||
                        !this.copyStyles ||
                        A instanceof HTMLIFrameElement ||
                        (0, s.copyCSSStyles)(n, e),
                      this.inlineAllImages(e),
                      (0 === A.scrollTop && 0 === A.scrollLeft) ||
                        this.scrolledElements.push([
                          e,
                          A.scrollLeft,
                          A.scrollTop,
                        ]),
                      A.nodeName)
                    ) {
                      case 'CANVAS':
                        this.copyStyles || h(A, e);
                        break;
                      case 'TEXTAREA':
                      case 'SELECT':
                        e.value = A.value;
                    }
                  return e;
                },
              },
            ]),
            e
          );
        })()),
        g = function(A, e) {
          return (A.cssRules ? Array.from(A.cssRules) : [])
            .filter(function(A) {
              return A.type === CSSRule.FONT_FACE_RULE;
            })
            .map(function(A) {
              for (
                var t = (0, c.parseBackgroundImage)(
                    A.style.getPropertyValue('src'),
                  ),
                  n = [],
                  r = 0;
                r < t.length;
                r++
              )
                if (
                  'url' === t[r].method &&
                  t[r + 1] &&
                  'format' === t[r + 1].method
                ) {
                  var o = e.createElement('a');
                  (o.href = t[r].args[0]), e.body && e.body.appendChild(o);
                  var i = { src: o.href, format: t[r + 1].args[0] };
                  n.push(i);
                }
              return {
                formats: n.filter(function(A) {
                  return /^woff/i.test(A.format);
                }),
                fontFace: A.style,
              };
            })
            .filter(function(A) {
              return A.formats.length;
            });
        },
        f = function(A, e) {
          var t = document.implementation.createHTMLDocument(''),
            n = document.createElement('base');
          n.href = e;
          var r = document.createElement('style');
          return (
            (r.textContent = A),
            t.head && t.head.appendChild(n),
            t.body && t.body.appendChild(r),
            r.sheet ? g(r.sheet, t) : []
          );
        },
        h = function(A, e) {
          try {
            if (e) {
              (e.width = A.width), (e.height = A.height);
              var t = A.getContext('2d'),
                n = e.getContext('2d');
              t
                ? n.putImageData(t.getImageData(0, 0, A.width, A.height), 0, 0)
                : n.drawImage(A, 0, 0);
            }
          } catch (A) {}
        },
        w = function(A, e, t, n, r) {
          if (
            t &&
            t.content &&
            'none' !== t.content &&
            '-moz-alt-content' !== t.content &&
            'none' !== t.display
          ) {
            var o = e.ownerDocument.createElement('html2canvaspseudoelement');
            if (((0, s.copyCSSStyles)(t, o), n))
              for (var i = n.length, a = 0; a < i; a++) {
                var u = n[a];
                switch (u.type) {
                  case l.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:
                    var B = e.ownerDocument.createElement('img');
                    (B.src = (0, c.parseBackgroundImage)(
                      'url(' + u.value + ')',
                    )[0].args[0]),
                      (B.style.opacity = '1'),
                      o.appendChild(B);
                    break;
                  case l.PSEUDO_CONTENT_ITEM_TYPE.TEXT:
                    o.appendChild(e.ownerDocument.createTextNode(u.value));
                }
              }
            return (
              (o.className = U + ' ' + m),
              (e.className += r === p ? ' ' + U : ' ' + m),
              r === p ? e.insertBefore(o, e.firstChild) : e.appendChild(o),
              o
            );
          }
        },
        p = ':before',
        Q = ':after',
        U = '___html2canvas___pseudoelement_before',
        m = '___html2canvas___pseudoelement_after',
        C = function(A) {
          F(
            A,
            '.' +
              U +
              p +
              '{\n    content: "" !important;\n    display: none !important;\n}\n         .' +
              m +
              Q +
              '{\n    content: "" !important;\n    display: none !important;\n}',
          );
        },
        F = function(A, e) {
          var t = A.ownerDocument.createElement('style');
          (t.innerHTML = e), A.appendChild(t);
        },
        E = function(A) {
          var e = n(A, 3),
            t = e[0],
            r = e[1],
            o = e[2];
          (t.scrollLeft = r), (t.scrollTop = o);
        },
        v = function() {
          return Math.ceil(Date.now() + 1e7 * Math.random()).toString(16);
        },
        b = /^data:text\/(.+);(base64)?,(.*)$/i,
        _ = function(A, e) {
          try {
            return Promise.resolve(A.contentWindow.document.documentElement);
          } catch (t) {
            return e.proxy
              ? (0, i.Proxy)(A.src, e)
                  .then(function(A) {
                    var e = A.match(b);
                    return e
                      ? 'base64' === e[2]
                        ? window.atob(decodeURIComponent(e[3]))
                        : decodeURIComponent(e[3])
                      : Promise.reject();
                  })
                  .then(function(e) {
                    return H(A.ownerDocument, (0, o.parseBounds)(A, 0, 0)).then(
                      function(A) {
                        var t = A.contentWindow.document;
                        t.open(), t.write(e);
                        var n = y(A).then(function() {
                          return t.documentElement;
                        });
                        return t.close(), n;
                      },
                    );
                  })
              : Promise.reject();
          }
        },
        H = function(e, t) {
          var n = e.createElement('iframe');
          return (
            (n.className = 'html2canvas-container'),
            (n.style.visibility = 'hidden'),
            (n.style.position = 'fixed'),
            (n.style.left = '-10000px'),
            (n.style.top = '0px'),
            (n.style.border = '0'),
            (n.width = t.width.toString()),
            (n.height = t.height.toString()),
            (n.scrolling = 'no'),
            n.setAttribute('data-html2canvas-ignore', 'true'),
            e.body
              ? (e.body.appendChild(n), Promise.resolve(n))
              : Promise.reject(
                  'production' !== A.env.NODE_ENV
                    ? 'Body element not found in Document that is getting rendered'
                    : '',
                )
          );
        },
        y = function(A) {
          var e = A.contentWindow,
            t = e.document;
          return new Promise(function(n, r) {
            e.onload = A.onload = t.onreadystatechange = function() {
              var e = setInterval(function() {
                t.body.childNodes.length > 0 &&
                  'complete' === t.readyState &&
                  (clearInterval(e), n(A));
              }, 50);
            };
          });
        },
        N =
          ((e.cloneWindow = function(e, t, n, r, o, i) {
            var a = new d(n, r, o, !1, i),
              s = e.defaultView.pageXOffset,
              c = e.defaultView.pageYOffset;
            return H(e, t).then(function(o) {
              var i = o.contentWindow,
                u = i.document,
                l = y(o).then(function() {
                  a.scrolledElements.forEach(E),
                    i.scrollTo(t.left, t.top),
                    !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) ||
                      (i.scrollY === t.top && i.scrollX === t.left) ||
                      ((u.documentElement.style.top = -t.top + 'px'),
                      (u.documentElement.style.left = -t.left + 'px'),
                      (u.documentElement.style.position = 'absolute'));
                  var s = Promise.resolve([
                      o,
                      a.clonedReferenceElement,
                      a.resourceLoader,
                    ]),
                    c = r.onclone;
                  return a.clonedReferenceElement instanceof i.HTMLElement ||
                    a.clonedReferenceElement instanceof
                      e.defaultView.HTMLElement ||
                    a.clonedReferenceElement instanceof HTMLElement
                    ? 'function' == typeof c
                      ? Promise.resolve()
                          .then(function() {
                            return c(u);
                          })
                          .then(function() {
                            return s;
                          })
                      : s
                    : Promise.reject(
                        'production' !== A.env.NODE_ENV
                          ? 'Error finding the ' +
                              n.nodeName +
                              ' in the cloned document'
                          : '',
                      );
                });
              return (
                u.open(),
                u.write(N(document.doctype) + '<html></html>'),
                (function(A, e, t) {
                  !A.defaultView ||
                    (e === A.defaultView.pageXOffset &&
                      t === A.defaultView.pageYOffset) ||
                    A.defaultView.scrollTo(e, t);
                })(n.ownerDocument, s, c),
                u.replaceChild(
                  u.adoptNode(a.documentElement),
                  u.documentElement,
                ),
                u.close(),
                l
              );
            });
          }),
          function(A) {
            var e = '';
            return (
              A &&
                ((e += '<!DOCTYPE '),
                A.name && (e += A.name),
                A.internalSubset && (e += A.internalSubset),
                A.publicId && (e += '"' + A.publicId + '"'),
                A.systemId && (e += '"' + A.systemId + '"'),
                (e += '>')),
              e
            );
          });
    }.call(e, t(0)));
  },
  function(A, e, t) {
    'use strict';
    (function(A) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ResourceStore = void 0);
      var n,
        r = (function() {
          function A(A, e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(A, n.key, n);
            }
          }
          return function(e, t, n) {
            return t && A(e.prototype, t), n && A(e, n), e;
          };
        })(),
        o = t(11),
        i = (n = o) && n.__esModule ? n : { default: n },
        a = t(28);
      function s(A, e) {
        if (!(A instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      var c = (function() {
        function e(A, t, n) {
          s(this, e),
            (this.options = A),
            (this._window = n),
            (this.origin = this.getOrigin(n.location.href)),
            (this.cache = {}),
            (this.logger = t),
            (this._index = 0);
        }
        return (
          r(e, [
            {
              key: 'loadImage',
              value: function(A) {
                var e = this;
                if (this.hasResourceInCache(A)) return A;
                if (!h(A) || i.default.SUPPORT_SVG_DRAWING) {
                  if (
                    !0 === this.options.allowTaint ||
                    g(A) ||
                    this.isSameOrigin(A)
                  )
                    return this.addImage(A, A, !1);
                  if (!this.isSameOrigin(A)) {
                    if ('string' == typeof this.options.proxy)
                      return (
                        (this.cache[A] = (0, a.Proxy)(A, this.options).then(
                          function(A) {
                            return w(A, e.options.imageTimeout || 0);
                          },
                        )),
                        A
                      );
                    if (
                      !0 === this.options.useCORS &&
                      i.default.SUPPORT_CORS_IMAGES
                    )
                      return this.addImage(A, A, !0);
                  }
                }
              },
            },
            {
              key: 'inlineImage',
              value: function(A) {
                var e = this;
                return g(A)
                  ? w(A, this.options.imageTimeout || 0)
                  : this.hasResourceInCache(A)
                  ? this.cache[A]
                  : this.isSameOrigin(A) ||
                    'string' != typeof this.options.proxy
                  ? this.xhrImage(A)
                  : (this.cache[A] = (0, a.Proxy)(A, this.options).then(
                      function(A) {
                        return w(A, e.options.imageTimeout || 0);
                      },
                    ));
              },
            },
            {
              key: 'xhrImage',
              value: function(e) {
                var t = this;
                return (
                  (this.cache[e] = new Promise(function(n, r) {
                    var o = new XMLHttpRequest();
                    if (
                      ((o.onreadystatechange = function() {
                        if (4 === o.readyState)
                          if (200 !== o.status)
                            r(
                              'Failed to fetch image ' +
                                e.substring(0, 256) +
                                ' with status code ' +
                                o.status,
                            );
                          else {
                            var A = new FileReader();
                            A.addEventListener(
                              'load',
                              function() {
                                var e = A.result;
                                n(e);
                              },
                              !1,
                            ),
                              A.addEventListener(
                                'error',
                                function(A) {
                                  return r(A);
                                },
                                !1,
                              ),
                              A.readAsDataURL(o.response);
                          }
                      }),
                      (o.responseType = 'blob'),
                      t.options.imageTimeout)
                    ) {
                      var i = t.options.imageTimeout;
                      (o.timeout = i),
                        (o.ontimeout = function() {
                          return r(
                            'production' !== A.env.NODE_ENV
                              ? 'Timed out (' +
                                  i +
                                  'ms) fetching ' +
                                  e.substring(0, 256)
                              : '',
                          );
                        });
                    }
                    o.open('GET', e, !0), o.send();
                  }).then(function(A) {
                    return w(A, t.options.imageTimeout || 0);
                  })),
                  this.cache[e]
                );
              },
            },
            {
              key: 'loadCanvas',
              value: function(A) {
                var e = String(this._index++);
                return (this.cache[e] = Promise.resolve(A)), e;
              },
            },
            {
              key: 'hasResourceInCache',
              value: function(A) {
                return void 0 !== this.cache[A];
              },
            },
            {
              key: 'addImage',
              value: function(e, t, n) {
                var r = this;
                'production' !== A.env.NODE_ENV &&
                  this.logger.log('Added image ' + e.substring(0, 256));
                var o = function(e) {
                  return new Promise(function(o, i) {
                    var a = new Image();
                    if (
                      ((a.onload = function() {
                        return o(a);
                      }),
                      (e && !n) || (a.crossOrigin = 'anonymous'),
                      (a.onerror = i),
                      (a.src = t),
                      !0 === a.complete &&
                        setTimeout(function() {
                          o(a);
                        }, 500),
                      r.options.imageTimeout)
                    ) {
                      var s = r.options.imageTimeout;
                      setTimeout(function() {
                        return i(
                          'production' !== A.env.NODE_ENV
                            ? 'Timed out (' +
                                s +
                                'ms) fetching ' +
                                t.substring(0, 256)
                            : '',
                        );
                      }, s);
                    }
                  });
                };
                return (
                  (this.cache[e] =
                    f(t) && !h(t)
                      ? i.default.SUPPORT_BASE64_DRAWING(t).then(o)
                      : o(!0)),
                  e
                );
              },
            },
            {
              key: 'isSameOrigin',
              value: function(A) {
                return this.getOrigin(A) === this.origin;
              },
            },
            {
              key: 'getOrigin',
              value: function(A) {
                var e =
                  this._link ||
                  (this._link = this._window.document.createElement('a'));
                return (
                  (e.href = A),
                  (e.href = e.href),
                  e.protocol + e.hostname + e.port
                );
              },
            },
            {
              key: 'ready',
              value: function() {
                var e = this,
                  t = Object.keys(this.cache),
                  n = t.map(function(t) {
                    return e.cache[t].catch(function(t) {
                      return (
                        'production' !== A.env.NODE_ENV &&
                          e.logger.log('Unable to load image', t),
                        null
                      );
                    });
                  });
                return Promise.all(n).then(function(n) {
                  return (
                    'production' !== A.env.NODE_ENV &&
                      e.logger.log(
                        'Finished loading ' + n.length + ' images',
                        n,
                      ),
                    new u(t, n)
                  );
                });
              },
            },
          ]),
          e
        );
      })();
      e.default = c;
      var u = (e.ResourceStore = (function() {
          function A(e, t) {
            s(this, A), (this._keys = e), (this._resources = t);
          }
          return (
            r(A, [
              {
                key: 'get',
                value: function(A) {
                  var e = this._keys.indexOf(A);
                  return -1 === e ? null : this._resources[e];
                },
              },
            ]),
            A
          );
        })()),
        l = /^data:image\/svg\+xml/i,
        B = /^data:image\/.*;base64,/i,
        d = /^data:image\/.*/i,
        g = function(A) {
          return d.test(A);
        },
        f = function(A) {
          return B.test(A);
        },
        h = function(A) {
          return 'svg' === A.substr(-3).toLowerCase() || l.test(A);
        },
        w = function(e, t) {
          return new Promise(function(n, r) {
            var o = new Image();
            (o.onload = function() {
              return n(o);
            }),
              (o.onerror = r),
              (o.src = e),
              !0 === o.complete &&
                setTimeout(function() {
                  n(o);
                }, 500),
              t &&
                setTimeout(function() {
                  return r(
                    'production' !== A.env.NODE_ENV
                      ? 'Timed out (' + t + 'ms) loading image'
                      : '',
                  );
                }, t);
          });
        };
    }.call(e, t(0)));
  },
  function(A, e, t) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.parseContent = e.resolvePseudoContent = e.popCounters = e.parseCounterReset = e.TOKEN_TYPE = e.PSEUDO_CONTENT_ITEM_TYPE = void 0);
    var n = (function() {
        return function(A, e) {
          if (Array.isArray(A)) return A;
          if (Symbol.iterator in Object(A))
            return (function(A, e) {
              var t = [],
                n = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var i, a = A[Symbol.iterator]();
                  !(n = (i = a.next()).done) &&
                  (t.push(i.value), !e || t.length !== e);
                  n = !0
                );
              } catch (A) {
                (r = !0), (o = A);
              } finally {
                try {
                  !n && a.return && a.return();
                } finally {
                  if (r) throw o;
                }
              }
              return t;
            })(A, e);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance',
          );
        };
      })(),
      r = t(15),
      o = t(9),
      i = (e.PSEUDO_CONTENT_ITEM_TYPE = { TEXT: 0, IMAGE: 1 }),
      a = (e.TOKEN_TYPE = {
        STRING: 0,
        ATTRIBUTE: 1,
        URL: 2,
        COUNTER: 3,
        COUNTERS: 4,
        OPENQUOTE: 5,
        CLOSEQUOTE: 6,
      }),
      s =
        ((e.parseCounterReset = function(A, e) {
          if (!A || !A.counterReset || 'none' === A.counterReset) return [];
          for (
            var t = [],
              r = A.counterReset.split(/\s*,\s*/),
              o = r.length,
              i = 0;
            i < o;
            i++
          ) {
            var a = r[i].split(/\s+/),
              s = n(a, 2),
              c = s[0],
              u = s[1];
            t.push(c);
            var l = e.counters[c];
            l || (l = e.counters[c] = []), l.push(parseInt(u || 0, 10));
          }
          return t;
        }),
        (e.popCounters = function(A, e) {
          for (var t = A.length, n = 0; n < t; n++) e.counters[A[n]].pop();
        }),
        (e.resolvePseudoContent = function(A, e, t) {
          if (
            !e ||
            !e.content ||
            'none' === e.content ||
            '-moz-alt-content' === e.content ||
            'none' === e.display
          )
            return null;
          var r = s(e.content),
            o = r.length,
            c = [],
            B = '',
            d = e.counterIncrement;
          if (d && 'none' !== d) {
            var g = d.split(/\s+/),
              f = n(g, 2),
              h = f[0],
              w = f[1],
              p = t.counters[h];
            p && (p[p.length - 1] += void 0 === w ? 1 : parseInt(w, 10));
          }
          for (var Q = 0; Q < o; Q++) {
            var U = r[Q];
            switch (U.type) {
              case a.STRING:
                B += U.value || '';
                break;
              case a.ATTRIBUTE:
                A instanceof HTMLElement &&
                  U.value &&
                  (B += A.getAttribute(U.value) || '');
                break;
              case a.COUNTER:
                var m = t.counters[U.name || ''];
                m && (B += l([m[m.length - 1]], '', U.format));
                break;
              case a.COUNTERS:
                var C = t.counters[U.name || ''];
                C && (B += l(C, U.glue, U.format));
                break;
              case a.OPENQUOTE:
                (B += u(e, !0, t.quoteDepth)), t.quoteDepth++;
                break;
              case a.CLOSEQUOTE:
                t.quoteDepth--, (B += u(e, !1, t.quoteDepth));
                break;
              case a.URL:
                B && (c.push({ type: i.TEXT, value: B }), (B = '')),
                  c.push({ type: i.IMAGE, value: U.value || '' });
            }
          }
          return B && c.push({ type: i.TEXT, value: B }), c;
        }),
        (e.parseContent = function(A, e) {
          if (e && e[A]) return e[A];
          for (
            var t = [],
              n = A.length,
              r = !1,
              o = !1,
              i = !1,
              s = '',
              u = '',
              l = [],
              B = 0;
            B < n;
            B++
          ) {
            var d = A.charAt(B);
            switch (d) {
              case "'":
              case '"':
                o
                  ? (s += d)
                  : ((r = !r),
                    i || r || (t.push({ type: a.STRING, value: s }), (s = '')));
                break;
              case '\\':
                o ? ((s += d), (o = !1)) : (o = !0);
                break;
              case '(':
                r ? (s += d) : ((i = !0), (u = s), (s = ''), (l = []));
                break;
              case ')':
                if (r) s += d;
                else if (i) {
                  switch ((s && l.push(s), u)) {
                    case 'attr':
                      l.length > 0 &&
                        t.push({ type: a.ATTRIBUTE, value: l[0] });
                      break;
                    case 'counter':
                      if (l.length > 0) {
                        var g = { type: a.COUNTER, name: l[0] };
                        l.length > 1 && (g.format = l[1]), t.push(g);
                      }
                      break;
                    case 'counters':
                      if (l.length > 0) {
                        var f = { type: a.COUNTERS, name: l[0] };
                        l.length > 1 && (f.glue = l[1]),
                          l.length > 2 && (f.format = l[2]),
                          t.push(f);
                      }
                      break;
                    case 'url':
                      l.length > 0 && t.push({ type: a.URL, value: l[0] });
                  }
                  (i = !1), (s = '');
                }
                break;
              case ',':
                r ? (s += d) : i && (l.push(s), (s = ''));
                break;
              case ' ':
              case '\t':
                r ? (s += d) : s && (c(t, s), (s = ''));
                break;
              default:
                s += d;
            }
            '\\' !== d && (o = !1);
          }
          return s && c(t, s), e && (e[A] = t), t;
        })),
      c = function(A, e) {
        switch (e) {
          case 'open-quote':
            A.push({ type: a.OPENQUOTE });
            break;
          case 'close-quote':
            A.push({ type: a.CLOSEQUOTE });
        }
      },
      u = function(A, e, t) {
        var n = A.quotes ? A.quotes.split(/\s+/) : ["'\"'", "'\"'"],
          r = 2 * t;
        return (
          r >= n.length && (r = n.length - 2),
          e || ++r,
          n[r].replace(/^["']|["']$/g, '')
        );
      },
      l = function(A, e, t) {
        for (var n = A.length, i = '', a = 0; a < n; a++)
          a > 0 && (i += e || ''),
            (i += (0, r.createCounterText)(
              A[a],
              (0, o.parseListStyleType)(t || 'decimal'),
              !1,
            ));
        return i;
      };
  },
  function(A, e, t) {
    var n;
    (function() {
      'use strict';
      var r = 'addEventListener' in new Image(),
        o = function(A, e) {
          (this.options = {
            pipeline: !1,
            auto: !0,
            prefetch: !1,
            onComplete: function() {},
          }),
            e && 'object' == typeof e && this.setOptions(e),
            this.addQueue(A),
            this.queue.length && this.options.auto && this.processQueue();
        };
      function i(A, e) {
        var t = [],
          n = this.options;
        return (
          n.onProgress &&
            A &&
            n.onProgress.call(this, A, e, this.completed.length),
          this.completed.length + this.errors.length === this.queue.length &&
            (t.push(this.completed),
            this.errors.length && t.push(this.errors),
            n.onComplete.apply(this, t)),
          this
        );
      }
      (o.prototype.setOptions = function(A) {
        var e,
          t = this.options;
        for (e in A) A.hasOwnProperty(e) && (t[e] = A[e]);
        return this;
      }),
        (o.prototype.addQueue = function(A) {
          return (this.queue = A.slice()), this;
        }),
        (o.prototype.reset = function() {
          return (this.completed = []), (this.errors = []), this;
        }),
        (o.prototype._addEvents = function(A, e, t) {
          var n = this,
            o = this.options,
            a = function() {
              r
                ? (this.removeEventListener('error', s),
                  this.removeEventListener('abort', s),
                  this.removeEventListener('load', c))
                : (this.onerror = this.onabort = this.onload = null);
            },
            s = function() {
              a.call(this),
                n.errors.push(e),
                o.onError && o.onError.call(n, e),
                i.call(n, e),
                o.pipeline && n._loadNext(t);
            },
            c = function() {
              a.call(this),
                n.completed.push(e),
                i.call(n, e, this),
                o.pipeline && n._loadNext(t);
            };
          return (
            r
              ? (A.addEventListener('error', s, !1),
                A.addEventListener('abort', s, !1),
                A.addEventListener('load', c, !1))
              : ((A.onerror = A.onabort = s), (A.onload = c)),
            this
          );
        }),
        (o.prototype._load = function(A, e) {
          var t = new Image();
          return this._addEvents(t, A, e), (t.src = A), this;
        }),
        (o.prototype._loadNext = function(A) {
          return A++, this.queue[A] && this._load(this.queue[A], A), this;
        }),
        (o.prototype.processQueue = function() {
          var A = 0,
            e = this.queue,
            t = e.length;
          if ((this.reset(), this.options.pipeline)) this._load(e[0], 0);
          else for (; A < t; ++A) this._load(e[A], A);
          return this;
        }),
        (o.lazyLoad = function(A) {
          A || (A = {});
          for (
            var e,
              t = document.querySelectorAll(A.selector || 'img[data-preload]'),
              n = 0,
              r = t.length,
              i = [];
            n < r;
            n++
          )
            i.push(t[n].getAttribute('data-preload'));
          return (
            A.onProgress && (e = A.onProgress),
            (A.onProgress = function(A, n, r) {
              (t[r - 1].src = A),
                t[r - 1].removeAttribute('data-preload'),
                e && e.apply(this, arguments);
            }),
            i.length ? new o(i, A) : null
          );
        }),
        void 0 ===
          (n = function() {
            return o;
          }.call(e, t, e, A)) || (A.exports = n);
    }.call(this));
  },
  function(A, e, t) {
    'use strict';
    e.a = function() {
      var A = window.devicePixelRatio,
        e = document.getElementsByTagName('html')[0],
        t = document.documentElement.clientWidth || document.body.clientWidth,
        n = document.documentElement.clientHeight || document.body.clientHeight,
        r = Math.min(t, n),
        o = document.querySelector('meta[name=viewport]'),
        i = 1 / A;
      o.setAttribute(
        'content',
        'initial-scale=' +
          i +
          ', maximum-scale=' +
          i +
          ', minimum-scale=' +
          i +
          ', user-scalable=no',
      ),
        (e.style.fontSize = (r * A) / 10 + 'px'),
        (e.style.width = '100%'),
        (e.style.height = '100%'),
        e.setAttribute('data-dpr', '' + A);
    };
  },
  function(A, e, t) {
    'use strict';
    e.a = function(A, e, t, r, o) {
      void 0 === o && (o = {});
      var i,
        a = null != t.left ? 'left' : 'right',
        s = null != t.top ? 'top' : 'bottom',
        c = e[a],
        u = e[s],
        l = t[a],
        B = t[s],
        d = Math.max(u || 0, B) + 2.8;
      return n(
        (((i = { targets: A.get(), duration: r })[a] = {
          value: c ? [c + 'rem', l + 'rem'] : l + 'rem',
          easing: 'linear',
        }),
        (i[s] = [
          {
            value: u ? [u + 'rem', d + 'rem'] : d + 'rem',
            duration: r / 2,
            easing: 'easeOutQuad',
          },
          { value: B + 'rem', duration: r / 2, easing: 'easeInQuad' },
        ]),
        i),
        o,
      );
    };
    var n =
      (this && this.__assign) ||
      Object.assign ||
      function(A) {
        for (var e, t = 1, n = arguments.length; t < n; t++)
          for (var r in (e = arguments[t]))
            Object.prototype.hasOwnProperty.call(e, r) && (A[r] = e[r]);
        return A;
      };
  },
  function(A, e, t) {
    'use strict';
    var n = {
      _keyStr:
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      encode: function(A) {
        var e,
          t,
          r,
          o,
          i,
          a,
          s,
          c = '',
          u = 0;
        for (A = n._utf8_encode(A); u < A.length; )
          (o = (e = A.charCodeAt(u++)) >> 2),
            (i = ((3 & e) << 4) | ((t = A.charCodeAt(u++)) >> 4)),
            (a = ((15 & t) << 2) | ((r = A.charCodeAt(u++)) >> 6)),
            (s = 63 & r),
            isNaN(t) ? (a = s = 64) : isNaN(r) && (s = 64),
            (c =
              c +
              this._keyStr.charAt(o) +
              this._keyStr.charAt(i) +
              this._keyStr.charAt(a) +
              this._keyStr.charAt(s));
        return c;
      },
      decode: function(A) {
        var e,
          t,
          r,
          o,
          i,
          a,
          s = '',
          c = 0;
        for (A = A.replace(/[^A-Za-z0-9\+\/\=]/g, ''); c < A.length; )
          (e =
            (this._keyStr.indexOf(A.charAt(c++)) << 2) |
            ((o = this._keyStr.indexOf(A.charAt(c++))) >> 4)),
            (t =
              ((15 & o) << 4) |
              ((i = this._keyStr.indexOf(A.charAt(c++))) >> 2)),
            (r = ((3 & i) << 6) | (a = this._keyStr.indexOf(A.charAt(c++)))),
            (s += String.fromCharCode(e)),
            64 != i && (s += String.fromCharCode(t)),
            64 != a && (s += String.fromCharCode(r));
        return (s = n._utf8_decode(s));
      },
      _utf8_encode: function(A) {
        A = A.replace(/\r\n/g, '\n');
        for (var e = '', t = 0; t < A.length; t++) {
          var n = A.charCodeAt(t);
          n < 128
            ? (e += String.fromCharCode(n))
            : n > 127 && n < 2048
            ? ((e += String.fromCharCode((n >> 6) | 192)),
              (e += String.fromCharCode((63 & n) | 128)))
            : ((e += String.fromCharCode((n >> 12) | 224)),
              (e += String.fromCharCode(((n >> 6) & 63) | 128)),
              (e += String.fromCharCode((63 & n) | 128)));
        }
        return e;
      },
      _utf8_decode: function(A) {
        for (var e = '', t = 0, n = 0, r = 0, o = 0; t < A.length; )
          (n = A.charCodeAt(t)) < 128
            ? ((e += String.fromCharCode(n)), t++)
            : n > 191 && n < 224
            ? ((r = A.charCodeAt(t + 1)),
              (e += String.fromCharCode(((31 & n) << 6) | (63 & r))),
              (t += 2))
            : ((r = A.charCodeAt(t + 1)),
              (o = A.charCodeAt(t + 2)),
              (e += String.fromCharCode(
                ((15 & n) << 12) | ((63 & r) << 6) | (63 & o),
              )),
              (t += 3));
        return e;
      },
    };
    e.a = n;
  },
  function(A, e, t) {
    'use strict';
    t.d(e, 'a', function() {
      return s;
    });
    var n,
      r = t(72),
      o =
        (t.n(r),
        (this && this.__extends) ||
          ((n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(A, e) {
                A.__proto__ = e;
              }) ||
            function(A, e) {
              for (var t in e) e.hasOwnProperty(t) && (A[t] = e[t]);
            }),
          function(A, e) {
            function t() {
              this.constructor = A;
            }
            n(A, e),
              (A.prototype =
                null === e
                  ? Object.create(e)
                  : ((t.prototype = e.prototype), new t()));
          })),
      i = 0.6,
      a = (function(A) {
        function e(e, t) {
          var n =
            A.call(this, {
              src: 'string' == typeof e ? [e] : e,
              preload: !0,
              loop: t,
            }) || this;
          return n.volume(i), (n.isMusic = t), n;
        }
        return (
          o(e, A),
          (e.prototype.fadeOut = function() {
            var A = this;
            'loaded' === this.state() && this.playing()
              ? (this.fade(i, 0, 1e3),
                setTimeout(function() {
                  A.stop();
                }, 1e3))
              : this.stop();
          }),
          (e.prototype.fadeIn = function() {
            this.fade(0, i, 1e3), this.play();
          }),
          (e.prototype.fadeInOut = function(A) {
            var e = this,
              t = (A || 8e3) / 2;
            this.fade(i, 1, t),
              setTimeout(function() {
                e.fade(1, i, t);
              });
          }),
          e
        );
      })(r.Howl),
      s = (function() {
        function A() {
          this._loadAll(), (this._isMuted = !1);
        }
        return (
          (A.prototype.play = function(A) {
            this.enterMusic &&
              A !== this.enterMusic &&
              this.enterMusic.fadeOut(),
              this.mainMusic &&
                A !== this.mainMusic &&
                this.mainMusic.fadeOut(),
              A.fadeIn();
          }),
          (A.prototype.toggleMute = function() {
            (this._isMuted = !this._isMuted),
              this.enterMusic.mute(this._isMuted),
              this.mainMusic.mute(this._isMuted),
              this.photoSound.mute(this._isMuted);
          }),
          (A.prototype.mute = function() {
            (this._isMuted = !0),
              this.enterMusic.mute(!0),
              this.mainMusic.mute(!0),
              this.photoSound.mute(!0);
          }),
          (A.prototype._loadAll = function() {
            (this.enterMusic = new a(
              './images/music-enter.mp3',
              !0,
            )),
              (this.mainMusic = new a(
                './images/music-main.mp3',
                !0,
              )),
              (this.photoSound = new a(
                './images/camera.mp3',
                !1,
              ));
          }),
          A
        );
      })();
  },
  function(A, e, t) {
    (function(t) {
      var n;
      !(function() {
        'use strict';
        var r = function() {
          this.init();
        };
        r.prototype = {
          init: function() {
            var A = this || o;
            return (
              (A._counter = 1e3),
              (A._codecs = {}),
              (A._howls = []),
              (A._muted = !1),
              (A._volume = 1),
              (A._canPlayEvent = 'canplaythrough'),
              (A._navigator =
                'undefined' != typeof window && window.navigator
                  ? window.navigator
                  : null),
              (A.masterGain = null),
              (A.noAudio = !1),
              (A.usingWebAudio = !0),
              (A.autoSuspend = !0),
              (A.ctx = null),
              (A.mobileAutoEnable = !0),
              A._setup(),
              A
            );
          },
          volume: function(A) {
            var e = this || o;
            if (
              ((A = parseFloat(A)),
              e.ctx || d(),
              void 0 !== A && A >= 0 && A <= 1)
            ) {
              if (((e._volume = A), e._muted)) return e;
              e.usingWebAudio &&
                e.masterGain.gain.setValueAtTime(A, o.ctx.currentTime);
              for (var t = 0; t < e._howls.length; t++)
                if (!e._howls[t]._webAudio)
                  for (
                    var n = e._howls[t]._getSoundIds(), r = 0;
                    r < n.length;
                    r++
                  ) {
                    var i = e._howls[t]._soundById(n[r]);
                    i && i._node && (i._node.volume = i._volume * A);
                  }
              return e;
            }
            return e._volume;
          },
          mute: function(A) {
            var e = this || o;
            e.ctx || d(),
              (e._muted = A),
              e.usingWebAudio &&
                e.masterGain.gain.setValueAtTime(
                  A ? 0 : e._volume,
                  o.ctx.currentTime,
                );
            for (var t = 0; t < e._howls.length; t++)
              if (!e._howls[t]._webAudio)
                for (
                  var n = e._howls[t]._getSoundIds(), r = 0;
                  r < n.length;
                  r++
                ) {
                  var i = e._howls[t]._soundById(n[r]);
                  i && i._node && (i._node.muted = !!A || i._muted);
                }
            return e;
          },
          unload: function() {
            for (var A = this || o, e = A._howls.length - 1; e >= 0; e--)
              A._howls[e].unload();
            return (
              A.usingWebAudio &&
                A.ctx &&
                void 0 !== A.ctx.close &&
                (A.ctx.close(), (A.ctx = null), d()),
              A
            );
          },
          codecs: function(A) {
            return (this || o)._codecs[A.replace(/^x-/, '')];
          },
          _setup: function() {
            var A = this || o;
            if (
              ((A.state = (A.ctx && A.ctx.state) || 'running'),
              A._autoSuspend(),
              !A.usingWebAudio)
            )
              if ('undefined' != typeof Audio)
                try {
                  void 0 === new Audio().oncanplaythrough &&
                    (A._canPlayEvent = 'canplay');
                } catch (e) {
                  A.noAudio = !0;
                }
              else A.noAudio = !0;
            try {
              new Audio().muted && (A.noAudio = !0);
            } catch (A) {}
            return A.noAudio || A._setupCodecs(), A;
          },
          _setupCodecs: function() {
            var A = this || o,
              e = null;
            try {
              e = 'undefined' != typeof Audio ? new Audio() : null;
            } catch (e) {
              return A;
            }
            if (!e || 'function' != typeof e.canPlayType) return A;
            var t = e.canPlayType('audio/mpeg;').replace(/^no$/, ''),
              n =
                A._navigator && A._navigator.userAgent.match(/OPR\/([0-6].)/g),
              r = n && parseInt(n[0].split('/')[1], 10) < 33;
            return (
              (A._codecs = {
                mp3: !(
                  r ||
                  (!t && !e.canPlayType('audio/mp3;').replace(/^no$/, ''))
                ),
                mpeg: !!t,
                opus: !!e
                  .canPlayType('audio/ogg; codecs="opus"')
                  .replace(/^no$/, ''),
                ogg: !!e
                  .canPlayType('audio/ogg; codecs="vorbis"')
                  .replace(/^no$/, ''),
                oga: !!e
                  .canPlayType('audio/ogg; codecs="vorbis"')
                  .replace(/^no$/, ''),
                wav: !!e
                  .canPlayType('audio/wav; codecs="1"')
                  .replace(/^no$/, ''),
                aac: !!e.canPlayType('audio/aac;').replace(/^no$/, ''),
                caf: !!e.canPlayType('audio/x-caf;').replace(/^no$/, ''),
                m4a: !!(
                  e.canPlayType('audio/x-m4a;') ||
                  e.canPlayType('audio/m4a;') ||
                  e.canPlayType('audio/aac;')
                ).replace(/^no$/, ''),
                mp4: !!(
                  e.canPlayType('audio/x-mp4;') ||
                  e.canPlayType('audio/mp4;') ||
                  e.canPlayType('audio/aac;')
                ).replace(/^no$/, ''),
                weba: !!e
                  .canPlayType('audio/webm; codecs="vorbis"')
                  .replace(/^no$/, ''),
                webm: !!e
                  .canPlayType('audio/webm; codecs="vorbis"')
                  .replace(/^no$/, ''),
                dolby: !!e
                  .canPlayType('audio/mp4; codecs="ec-3"')
                  .replace(/^no$/, ''),
                flac: !!(
                  e.canPlayType('audio/x-flac;') || e.canPlayType('audio/flac;')
                ).replace(/^no$/, ''),
              }),
              A
            );
          },
          _enableMobileAudio: function() {
            var A = this || o,
              e = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(
                A._navigator && A._navigator.userAgent,
              ),
              t = !!(
                'ontouchend' in window ||
                (A._navigator && A._navigator.maxTouchPoints > 0) ||
                (A._navigator && A._navigator.msMaxTouchPoints > 0)
              );
            if (!A._mobileEnabled && A.ctx && (e || t)) {
              (A._mobileEnabled = !1),
                A._mobileUnloaded ||
                  44100 === A.ctx.sampleRate ||
                  ((A._mobileUnloaded = !0), A.unload()),
                (A._scratchBuffer = A.ctx.createBuffer(1, 1, 22050));
              var n = function() {
                o._autoResume();
                var e = A.ctx.createBufferSource();
                (e.buffer = A._scratchBuffer),
                  e.connect(A.ctx.destination),
                  void 0 === e.start ? e.noteOn(0) : e.start(0),
                  'function' == typeof A.ctx.resume && A.ctx.resume(),
                  (e.onended = function() {
                    e.disconnect(0),
                      (A._mobileEnabled = !0),
                      (A.mobileAutoEnable = !1),
                      document.removeEventListener('touchstart', n, !0),
                      document.removeEventListener('touchend', n, !0);
                  });
              };
              return (
                document.addEventListener('touchstart', n, !0),
                document.addEventListener('touchend', n, !0),
                A
              );
            }
          },
          _autoSuspend: function() {
            var A = this;
            if (
              A.autoSuspend &&
              A.ctx &&
              void 0 !== A.ctx.suspend &&
              o.usingWebAudio
            ) {
              for (var e = 0; e < A._howls.length; e++)
                if (A._howls[e]._webAudio)
                  for (var t = 0; t < A._howls[e]._sounds.length; t++)
                    if (!A._howls[e]._sounds[t]._paused) return A;
              return (
                A._suspendTimer && clearTimeout(A._suspendTimer),
                (A._suspendTimer = setTimeout(function() {
                  A.autoSuspend &&
                    ((A._suspendTimer = null),
                    (A.state = 'suspending'),
                    A.ctx.suspend().then(function() {
                      (A.state = 'suspended'),
                        A._resumeAfterSuspend &&
                          (delete A._resumeAfterSuspend, A._autoResume());
                    }));
                }, 3e4)),
                A
              );
            }
          },
          _autoResume: function() {
            var A = this;
            if (A.ctx && void 0 !== A.ctx.resume && o.usingWebAudio)
              return (
                'running' === A.state && A._suspendTimer
                  ? (clearTimeout(A._suspendTimer), (A._suspendTimer = null))
                  : 'suspended' === A.state
                  ? (A.ctx.resume().then(function() {
                      A.state = 'running';
                      for (var e = 0; e < A._howls.length; e++)
                        A._howls[e]._emit('resume');
                    }),
                    A._suspendTimer &&
                      (clearTimeout(A._suspendTimer), (A._suspendTimer = null)))
                  : 'suspending' === A.state && (A._resumeAfterSuspend = !0),
                A
              );
          },
        };
        var o = new r(),
          i = function(A) {
            A.src && 0 !== A.src.length
              ? this.init(A)
              : console.error(
                  'An array of source files must be passed with any new Howl.',
                );
          };
        i.prototype = {
          init: function(A) {
            var e = this;
            return (
              o.ctx || d(),
              (e._autoplay = A.autoplay || !1),
              (e._format = 'string' != typeof A.format ? A.format : [A.format]),
              (e._html5 = A.html5 || !1),
              (e._muted = A.mute || !1),
              (e._loop = A.loop || !1),
              (e._pool = A.pool || 5),
              (e._preload = 'boolean' != typeof A.preload || A.preload),
              (e._rate = A.rate || 1),
              (e._sprite = A.sprite || {}),
              (e._src = 'string' != typeof A.src ? A.src : [A.src]),
              (e._volume = void 0 !== A.volume ? A.volume : 1),
              (e._xhrWithCredentials = A.xhrWithCredentials || !1),
              (e._duration = 0),
              (e._state = 'unloaded'),
              (e._sounds = []),
              (e._endTimers = {}),
              (e._queue = []),
              (e._playLock = !1),
              (e._onend = A.onend ? [{ fn: A.onend }] : []),
              (e._onfade = A.onfade ? [{ fn: A.onfade }] : []),
              (e._onload = A.onload ? [{ fn: A.onload }] : []),
              (e._onloaderror = A.onloaderror ? [{ fn: A.onloaderror }] : []),
              (e._onplayerror = A.onplayerror ? [{ fn: A.onplayerror }] : []),
              (e._onpause = A.onpause ? [{ fn: A.onpause }] : []),
              (e._onplay = A.onplay ? [{ fn: A.onplay }] : []),
              (e._onstop = A.onstop ? [{ fn: A.onstop }] : []),
              (e._onmute = A.onmute ? [{ fn: A.onmute }] : []),
              (e._onvolume = A.onvolume ? [{ fn: A.onvolume }] : []),
              (e._onrate = A.onrate ? [{ fn: A.onrate }] : []),
              (e._onseek = A.onseek ? [{ fn: A.onseek }] : []),
              (e._onresume = []),
              (e._webAudio = o.usingWebAudio && !e._html5),
              void 0 !== o.ctx &&
                o.ctx &&
                o.mobileAutoEnable &&
                o._enableMobileAudio(),
              o._howls.push(e),
              e._autoplay &&
                e._queue.push({
                  event: 'play',
                  action: function() {
                    e.play();
                  },
                }),
              e._preload && e.load(),
              e
            );
          },
          load: function() {
            var A = null;
            if (o.noAudio) this._emit('loaderror', null, 'No audio support.');
            else {
              'string' == typeof this._src && (this._src = [this._src]);
              for (var e = 0; e < this._src.length; e++) {
                var t, n;
                if (this._format && this._format[e]) t = this._format[e];
                else {
                  if ('string' != typeof (n = this._src[e])) {
                    this._emit(
                      'loaderror',
                      null,
                      'Non-string found in selected audio sources - ignoring.',
                    );
                    continue;
                  }
                  (t = /^data:audio\/([^;,]+);/i.exec(n)) ||
                    (t = /\.([^.]+)$/.exec(n.split('?', 1)[0])),
                    t && (t = t[1].toLowerCase());
                }
                if (
                  (t ||
                    console.warn(
                      'No file extension was found. Consider using the "format" property or specify an extension.',
                    ),
                  t && o.codecs(t))
                ) {
                  A = this._src[e];
                  break;
                }
              }
              if (A)
                return (
                  (this._src = A),
                  (this._state = 'loading'),
                  'https:' === window.location.protocol &&
                    'http:' === A.slice(0, 5) &&
                    ((this._html5 = !0), (this._webAudio = !1)),
                  new a(this),
                  this._webAudio && c(this),
                  this
                );
              this._emit(
                'loaderror',
                null,
                'No codec support for selected audio sources.',
              );
            }
          },
          play: function(A, e) {
            var t = this,
              n = null;
            if ('number' == typeof A) (n = A), (A = null);
            else {
              if (
                'string' == typeof A &&
                'loaded' === t._state &&
                !t._sprite[A]
              )
                return null;
              if (void 0 === A) {
                A = '__default';
                for (var r = 0, i = 0; i < t._sounds.length; i++)
                  t._sounds[i]._paused &&
                    !t._sounds[i]._ended &&
                    (r++, (n = t._sounds[i]._id));
                1 === r ? (A = null) : (n = null);
              }
            }
            var a = n ? t._soundById(n) : t._inactiveSound();
            if (!a) return null;
            if (
              (n && !A && (A = a._sprite || '__default'), 'loaded' !== t._state)
            ) {
              (a._sprite = A), (a._ended = !1);
              var s = a._id;
              return (
                t._queue.push({
                  event: 'play',
                  action: function() {
                    t.play(s);
                  },
                }),
                s
              );
            }
            if (n && !a._paused) return e || t._loadQueue('play'), a._id;
            t._webAudio && o._autoResume();
            var c = Math.max(0, a._seek > 0 ? a._seek : t._sprite[A][0] / 1e3),
              u = Math.max(0, (t._sprite[A][0] + t._sprite[A][1]) / 1e3 - c),
              l = (1e3 * u) / Math.abs(a._rate);
            (a._paused = !1),
              (a._ended = !1),
              (a._sprite = A),
              (a._seek = c),
              (a._start = t._sprite[A][0] / 1e3),
              (a._stop = (t._sprite[A][0] + t._sprite[A][1]) / 1e3),
              (a._loop = !(!a._loop && !t._sprite[A][2]));
            var B = a._node;
            if (t._webAudio) {
              var d = function() {
                t._refreshBuffer(a);
                var A = a._muted || t._muted ? 0 : a._volume;
                B.gain.setValueAtTime(A, o.ctx.currentTime),
                  (a._playStart = o.ctx.currentTime),
                  void 0 === B.bufferSource.start
                    ? a._loop
                      ? B.bufferSource.noteGrainOn(0, c, 86400)
                      : B.bufferSource.noteGrainOn(0, c, u)
                    : a._loop
                    ? B.bufferSource.start(0, c, 86400)
                    : B.bufferSource.start(0, c, u),
                  l !== 1 / 0 &&
                    (t._endTimers[a._id] = setTimeout(t._ended.bind(t, a), l)),
                  e ||
                    setTimeout(function() {
                      t._emit('play', a._id);
                    }, 0);
              };
              'running' === o.state
                ? d()
                : (t.once('resume', d), t._clearTimer(a._id));
            } else {
              var g = function() {
                  (B.currentTime = c),
                    (B.muted = a._muted || t._muted || o._muted || B.muted),
                    (B.volume = a._volume * o.volume()),
                    (B.playbackRate = a._rate);
                  try {
                    var n = B.play();
                    if ('undefined' != typeof Promise && n instanceof Promise) {
                      t._playLock = !0;
                      var r = function() {
                        (t._playLock = !1), e || t._emit('play', a._id);
                      };
                      n.then(r, r);
                    } else e || t._emit('play', a._id);
                    if (B.paused)
                      return void t._emit(
                        'playerror',
                        a._id,
                        'Playback was unable to start. This is most commonly an issue on mobile devices where playback was not within a user interaction.',
                      );
                    '__default' !== A
                      ? (t._endTimers[a._id] = setTimeout(
                          t._ended.bind(t, a),
                          l,
                        ))
                      : ((t._endTimers[a._id] = function() {
                          t._ended(a),
                            B.removeEventListener(
                              'ended',
                              t._endTimers[a._id],
                              !1,
                            );
                        }),
                        B.addEventListener('ended', t._endTimers[a._id], !1));
                  } catch (A) {
                    t._emit('playerror', a._id, A);
                  }
                },
                f =
                  (window && window.ejecta) ||
                  (!B.readyState && o._navigator.isCocoonJS);
              if (B.readyState >= 3 || f) g();
              else {
                var h = function() {
                  g(), B.removeEventListener(o._canPlayEvent, h, !1);
                };
                B.addEventListener(o._canPlayEvent, h, !1),
                  t._clearTimer(a._id);
              }
            }
            return a._id;
          },
          pause: function(A) {
            var e = this;
            if ('loaded' !== e._state || e._playLock)
              return (
                e._queue.push({
                  event: 'pause',
                  action: function() {
                    e.pause(A);
                  },
                }),
                e
              );
            for (var t = e._getSoundIds(A), n = 0; n < t.length; n++) {
              e._clearTimer(t[n]);
              var r = e._soundById(t[n]);
              if (
                r &&
                !r._paused &&
                ((r._seek = e.seek(t[n])),
                (r._rateSeek = 0),
                (r._paused = !0),
                e._stopFade(t[n]),
                r._node)
              )
                if (e._webAudio) {
                  if (!r._node.bufferSource) continue;
                  void 0 === r._node.bufferSource.stop
                    ? r._node.bufferSource.noteOff(0)
                    : r._node.bufferSource.stop(0),
                    e._cleanBuffer(r._node);
                } else
                  (isNaN(r._node.duration) && r._node.duration !== 1 / 0) ||
                    r._node.pause();
              arguments[1] || e._emit('pause', r ? r._id : null);
            }
            return e;
          },
          stop: function(A, e) {
            var t = this;
            if ('loaded' !== t._state)
              return (
                t._queue.push({
                  event: 'stop',
                  action: function() {
                    t.stop(A);
                  },
                }),
                t
              );
            for (var n = t._getSoundIds(A), r = 0; r < n.length; r++) {
              t._clearTimer(n[r]);
              var o = t._soundById(n[r]);
              o &&
                ((o._seek = o._start || 0),
                (o._rateSeek = 0),
                (o._paused = !0),
                (o._ended = !0),
                t._stopFade(n[r]),
                o._node &&
                  (t._webAudio
                    ? o._node.bufferSource &&
                      (void 0 === o._node.bufferSource.stop
                        ? o._node.bufferSource.noteOff(0)
                        : o._node.bufferSource.stop(0),
                      t._cleanBuffer(o._node))
                    : (isNaN(o._node.duration) && o._node.duration !== 1 / 0) ||
                      ((o._node.currentTime = o._start || 0), o._node.pause())),
                e || t._emit('stop', o._id));
            }
            return t;
          },
          mute: function(A, e) {
            var t = this;
            if ('loaded' !== t._state)
              return (
                t._queue.push({
                  event: 'mute',
                  action: function() {
                    t.mute(A, e);
                  },
                }),
                t
              );
            if (void 0 === e) {
              if ('boolean' != typeof A) return t._muted;
              t._muted = A;
            }
            for (var n = t._getSoundIds(e), r = 0; r < n.length; r++) {
              var i = t._soundById(n[r]);
              i &&
                ((i._muted = A),
                i._interval && t._stopFade(i._id),
                t._webAudio && i._node
                  ? i._node.gain.setValueAtTime(
                      A ? 0 : i._volume,
                      o.ctx.currentTime,
                    )
                  : i._node && (i._node.muted = !!o._muted || A),
                t._emit('mute', i._id));
            }
            return t;
          },
          volume: function() {
            var A,
              e,
              t,
              n = this,
              r = arguments;
            if (0 === r.length) return n._volume;
            if (
              (1 === r.length || (2 === r.length && void 0 === r[1])
                ? n._getSoundIds().indexOf(r[0]) >= 0
                  ? (e = parseInt(r[0], 10))
                  : (A = parseFloat(r[0]))
                : r.length >= 2 &&
                  ((A = parseFloat(r[0])), (e = parseInt(r[1], 10))),
              !(void 0 !== A && A >= 0 && A <= 1))
            )
              return (t = e ? n._soundById(e) : n._sounds[0]) ? t._volume : 0;
            if ('loaded' !== n._state)
              return (
                n._queue.push({
                  event: 'volume',
                  action: function() {
                    n.volume.apply(n, r);
                  },
                }),
                n
              );
            void 0 === e && (n._volume = A), (e = n._getSoundIds(e));
            for (var i = 0; i < e.length; i++)
              (t = n._soundById(e[i])) &&
                ((t._volume = A),
                r[2] || n._stopFade(e[i]),
                n._webAudio && t._node && !t._muted
                  ? t._node.gain.setValueAtTime(A, o.ctx.currentTime)
                  : t._node && !t._muted && (t._node.volume = A * o.volume()),
                n._emit('volume', t._id));
            return n;
          },
          fade: function(A, e, t, n) {
            var r = this;
            if ('loaded' !== r._state)
              return (
                r._queue.push({
                  event: 'fade',
                  action: function() {
                    r.fade(A, e, t, n);
                  },
                }),
                r
              );
            r.volume(A, n);
            for (var i = r._getSoundIds(n), a = 0; a < i.length; a++) {
              var s = r._soundById(i[a]);
              if (s) {
                if ((n || r._stopFade(i[a]), r._webAudio && !s._muted)) {
                  var c = o.ctx.currentTime,
                    u = c + t / 1e3;
                  (s._volume = A),
                    s._node.gain.setValueAtTime(A, c),
                    s._node.gain.linearRampToValueAtTime(e, u);
                }
                r._startFadeInterval(s, A, e, t, i[a], void 0 === n);
              }
            }
            return r;
          },
          _startFadeInterval: function(A, e, t, n, r, o) {
            var i = this,
              a = e,
              s = t - e,
              c = Math.abs(s / 0.01),
              u = Math.max(4, c > 0 ? n / c : n),
              l = Date.now();
            (A._fadeTo = t),
              (A._interval = setInterval(function() {
                var r = (Date.now() - l) / n;
                (l = Date.now()),
                  (a += s * r),
                  (a = Math.max(0, a)),
                  (a = Math.min(1, a)),
                  (a = Math.round(100 * a) / 100),
                  i._webAudio ? (A._volume = a) : i.volume(a, A._id, !0),
                  o && (i._volume = a),
                  ((t < e && a <= t) || (t > e && a >= t)) &&
                    (clearInterval(A._interval),
                    (A._interval = null),
                    (A._fadeTo = null),
                    i.volume(t, A._id),
                    i._emit('fade', A._id));
              }, u));
          },
          _stopFade: function(A) {
            var e = this._soundById(A);
            return (
              e &&
                e._interval &&
                (this._webAudio &&
                  e._node.gain.cancelScheduledValues(o.ctx.currentTime),
                clearInterval(e._interval),
                (e._interval = null),
                this.volume(e._fadeTo, A),
                (e._fadeTo = null),
                this._emit('fade', A)),
              this
            );
          },
          loop: function() {
            var A,
              e,
              t,
              n = arguments;
            if (0 === n.length) return this._loop;
            if (1 === n.length) {
              if ('boolean' != typeof n[0])
                return !!(t = this._soundById(parseInt(n[0], 10))) && t._loop;
              (A = n[0]), (this._loop = A);
            } else 2 === n.length && ((A = n[0]), (e = parseInt(n[1], 10)));
            for (var r = this._getSoundIds(e), o = 0; o < r.length; o++)
              (t = this._soundById(r[o])) &&
                ((t._loop = A),
                this._webAudio &&
                  t._node &&
                  t._node.bufferSource &&
                  ((t._node.bufferSource.loop = A),
                  A &&
                    ((t._node.bufferSource.loopStart = t._start || 0),
                    (t._node.bufferSource.loopEnd = t._stop))));
            return this;
          },
          rate: function() {
            var A,
              e,
              t,
              n = this,
              r = arguments;
            if (0 === r.length) e = n._sounds[0]._id;
            else if (1 === r.length) {
              n._getSoundIds().indexOf(r[0]) >= 0
                ? (e = parseInt(r[0], 10))
                : (A = parseFloat(r[0]));
            } else
              2 === r.length &&
                ((A = parseFloat(r[0])), (e = parseInt(r[1], 10)));
            if ('number' != typeof A)
              return (t = n._soundById(e)) ? t._rate : n._rate;
            if ('loaded' !== n._state)
              return (
                n._queue.push({
                  event: 'rate',
                  action: function() {
                    n.rate.apply(n, r);
                  },
                }),
                n
              );
            void 0 === e && (n._rate = A), (e = n._getSoundIds(e));
            for (var i = 0; i < e.length; i++)
              if ((t = n._soundById(e[i]))) {
                (t._rateSeek = n.seek(e[i])),
                  (t._playStart = n._webAudio
                    ? o.ctx.currentTime
                    : t._playStart),
                  (t._rate = A),
                  n._webAudio && t._node && t._node.bufferSource
                    ? t._node.bufferSource.playbackRate.setValueAtTime(
                        A,
                        o.ctx.currentTime,
                      )
                    : t._node && (t._node.playbackRate = A);
                var a = n.seek(e[i]),
                  s =
                    (1e3 *
                      ((n._sprite[t._sprite][0] + n._sprite[t._sprite][1]) /
                        1e3 -
                        a)) /
                    Math.abs(t._rate);
                (!n._endTimers[e[i]] && t._paused) ||
                  (n._clearTimer(e[i]),
                  (n._endTimers[e[i]] = setTimeout(n._ended.bind(n, t), s))),
                  n._emit('rate', t._id);
              }
            return n;
          },
          seek: function() {
            var A,
              e,
              t = this,
              n = arguments;
            if (0 === n.length) e = t._sounds[0]._id;
            else if (1 === n.length) {
              t._getSoundIds().indexOf(n[0]) >= 0
                ? (e = parseInt(n[0], 10))
                : t._sounds.length &&
                  ((e = t._sounds[0]._id), (A = parseFloat(n[0])));
            } else
              2 === n.length &&
                ((A = parseFloat(n[0])), (e = parseInt(n[1], 10)));
            if (void 0 === e) return t;
            if ('loaded' !== t._state)
              return (
                t._queue.push({
                  event: 'seek',
                  action: function() {
                    t.seek.apply(t, n);
                  },
                }),
                t
              );
            var r = t._soundById(e);
            if (r) {
              if (!('number' == typeof A && A >= 0)) {
                if (t._webAudio) {
                  var i = t.playing(e) ? o.ctx.currentTime - r._playStart : 0,
                    a = r._rateSeek ? r._rateSeek - r._seek : 0;
                  return r._seek + (a + i * Math.abs(r._rate));
                }
                return r._node.currentTime;
              }
              var s = t.playing(e);
              if (
                (s && t.pause(e, !0),
                (r._seek = A),
                (r._ended = !1),
                t._clearTimer(e),
                s && t.play(e, !0),
                !t._webAudio && r._node && (r._node.currentTime = A),
                s && !t._webAudio)
              ) {
                var c = function() {
                  t._playLock ? setTimeout(c, 0) : t._emit('seek', e);
                };
                setTimeout(c, 0);
              } else t._emit('seek', e);
            }
            return t;
          },
          playing: function(A) {
            if ('number' == typeof A) {
              var e = this._soundById(A);
              return !!e && !e._paused;
            }
            for (var t = 0; t < this._sounds.length; t++)
              if (!this._sounds[t]._paused) return !0;
            return !1;
          },
          duration: function(A) {
            var e = this._duration,
              t = this._soundById(A);
            return t && (e = this._sprite[t._sprite][1] / 1e3), e;
          },
          state: function() {
            return this._state;
          },
          unload: function() {
            for (var A = this, e = A._sounds, t = 0; t < e.length; t++) {
              if ((e[t]._paused || A.stop(e[t]._id), !A._webAudio))
                /MSIE |Trident\//.test(
                  o._navigator && o._navigator.userAgent,
                ) ||
                  (e[t]._node.src =
                    'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA'),
                  e[t]._node.removeEventListener('error', e[t]._errorFn, !1),
                  e[t]._node.removeEventListener(
                    o._canPlayEvent,
                    e[t]._loadFn,
                    !1,
                  );
              delete e[t]._node, A._clearTimer(e[t]._id);
              var n = o._howls.indexOf(A);
              n >= 0 && o._howls.splice(n, 1);
            }
            var r = !0;
            for (t = 0; t < o._howls.length; t++)
              if (o._howls[t]._src === A._src) {
                r = !1;
                break;
              }
            return (
              s && r && delete s[A._src],
              (o.noAudio = !1),
              (A._state = 'unloaded'),
              (A._sounds = []),
              (A = null),
              null
            );
          },
          on: function(A, e, t, n) {
            var r = this['_on' + A];
            return (
              'function' == typeof e &&
                r.push(n ? { id: t, fn: e, once: n } : { id: t, fn: e }),
              this
            );
          },
          off: function(A, e, t) {
            var n = this['_on' + A],
              r = 0;
            if (('number' == typeof e && ((t = e), (e = null)), e || t))
              for (r = 0; r < n.length; r++) {
                var o = t === n[r].id;
                if ((e === n[r].fn && o) || (!e && o)) {
                  n.splice(r, 1);
                  break;
                }
              }
            else if (A) this['_on' + A] = [];
            else {
              var i = Object.keys(this);
              for (r = 0; r < i.length; r++)
                0 === i[r].indexOf('_on') &&
                  Array.isArray(this[i[r]]) &&
                  (this[i[r]] = []);
            }
            return this;
          },
          once: function(A, e, t) {
            return this.on(A, e, t, 1), this;
          },
          _emit: function(A, e, t) {
            for (var n = this['_on' + A], r = n.length - 1; r >= 0; r--)
              (n[r].id && n[r].id !== e && 'load' !== A) ||
                (setTimeout(
                  function(A) {
                    A.call(this, e, t);
                  }.bind(this, n[r].fn),
                  0,
                ),
                n[r].once && this.off(A, n[r].fn, n[r].id));
            return this._loadQueue(A), this;
          },
          _loadQueue: function(A) {
            if (this._queue.length > 0) {
              var e = this._queue[0];
              e.event === A && (this._queue.shift(), this._loadQueue()),
                A || e.action();
            }
            return this;
          },
          _ended: function(A) {
            var e = A._sprite;
            if (
              !this._webAudio &&
              A._node &&
              !A._node.paused &&
              !A._node.ended &&
              A._node.currentTime < A._stop
            )
              return setTimeout(this._ended.bind(this, A), 100), this;
            var t = !(!A._loop && !this._sprite[e][2]);
            if (
              (this._emit('end', A._id),
              !this._webAudio && t && this.stop(A._id, !0).play(A._id),
              this._webAudio && t)
            ) {
              this._emit('play', A._id),
                (A._seek = A._start || 0),
                (A._rateSeek = 0),
                (A._playStart = o.ctx.currentTime);
              var n = (1e3 * (A._stop - A._start)) / Math.abs(A._rate);
              this._endTimers[A._id] = setTimeout(this._ended.bind(this, A), n);
            }
            return (
              this._webAudio &&
                !t &&
                ((A._paused = !0),
                (A._ended = !0),
                (A._seek = A._start || 0),
                (A._rateSeek = 0),
                this._clearTimer(A._id),
                this._cleanBuffer(A._node),
                o._autoSuspend()),
              this._webAudio || t || this.stop(A._id),
              this
            );
          },
          _clearTimer: function(A) {
            if (this._endTimers[A]) {
              if ('function' != typeof this._endTimers[A])
                clearTimeout(this._endTimers[A]);
              else {
                var e = this._soundById(A);
                e &&
                  e._node &&
                  e._node.removeEventListener('ended', this._endTimers[A], !1);
              }
              delete this._endTimers[A];
            }
            return this;
          },
          _soundById: function(A) {
            for (var e = 0; e < this._sounds.length; e++)
              if (A === this._sounds[e]._id) return this._sounds[e];
            return null;
          },
          _inactiveSound: function() {
            this._drain();
            for (var A = 0; A < this._sounds.length; A++)
              if (this._sounds[A]._ended) return this._sounds[A].reset();
            return new a(this);
          },
          _drain: function() {
            var A = this._pool,
              e = 0,
              t = 0;
            if (!(this._sounds.length < A)) {
              for (t = 0; t < this._sounds.length; t++)
                this._sounds[t]._ended && e++;
              for (t = this._sounds.length - 1; t >= 0; t--) {
                if (e <= A) return;
                this._sounds[t]._ended &&
                  (this._webAudio &&
                    this._sounds[t]._node &&
                    this._sounds[t]._node.disconnect(0),
                  this._sounds.splice(t, 1),
                  e--);
              }
            }
          },
          _getSoundIds: function(A) {
            if (void 0 === A) {
              for (var e = [], t = 0; t < this._sounds.length; t++)
                e.push(this._sounds[t]._id);
              return e;
            }
            return [A];
          },
          _refreshBuffer: function(A) {
            return (
              (A._node.bufferSource = o.ctx.createBufferSource()),
              (A._node.bufferSource.buffer = s[this._src]),
              A._panner
                ? A._node.bufferSource.connect(A._panner)
                : A._node.bufferSource.connect(A._node),
              (A._node.bufferSource.loop = A._loop),
              A._loop &&
                ((A._node.bufferSource.loopStart = A._start || 0),
                (A._node.bufferSource.loopEnd = A._stop)),
              A._node.bufferSource.playbackRate.setValueAtTime(
                A._rate,
                o.ctx.currentTime,
              ),
              this
            );
          },
          _cleanBuffer: function(A) {
            if (o._scratchBuffer) {
              (A.bufferSource.onended = null), A.bufferSource.disconnect(0);
              try {
                A.bufferSource.buffer = o._scratchBuffer;
              } catch (A) {}
            }
            return (A.bufferSource = null), this;
          },
        };
        var a = function(A) {
          (this._parent = A), this.init();
        };
        a.prototype = {
          init: function() {
            var A = this._parent;
            return (
              (this._muted = A._muted),
              (this._loop = A._loop),
              (this._volume = A._volume),
              (this._rate = A._rate),
              (this._seek = 0),
              (this._paused = !0),
              (this._ended = !0),
              (this._sprite = '__default'),
              (this._id = ++o._counter),
              A._sounds.push(this),
              this.create(),
              this
            );
          },
          create: function() {
            var A = this._parent,
              e =
                o._muted || this._muted || this._parent._muted
                  ? 0
                  : this._volume;
            return (
              A._webAudio
                ? ((this._node =
                    void 0 === o.ctx.createGain
                      ? o.ctx.createGainNode()
                      : o.ctx.createGain()),
                  this._node.gain.setValueAtTime(e, o.ctx.currentTime),
                  (this._node.paused = !0),
                  this._node.connect(o.masterGain))
                : ((this._node = new Audio()),
                  (this._errorFn = this._errorListener.bind(this)),
                  this._node.addEventListener('error', this._errorFn, !1),
                  (this._loadFn = this._loadListener.bind(this)),
                  this._node.addEventListener(
                    o._canPlayEvent,
                    this._loadFn,
                    !1,
                  ),
                  (this._node.src = A._src),
                  (this._node.preload = 'auto'),
                  (this._node.volume = e * o.volume()),
                  this._node.load()),
              this
            );
          },
          reset: function() {
            var A = this._parent;
            return (
              (this._muted = A._muted),
              (this._loop = A._loop),
              (this._volume = A._volume),
              (this._rate = A._rate),
              (this._seek = 0),
              (this._rateSeek = 0),
              (this._paused = !0),
              (this._ended = !0),
              (this._sprite = '__default'),
              (this._id = ++o._counter),
              this
            );
          },
          _errorListener: function() {
            this._parent._emit(
              'loaderror',
              this._id,
              this._node.error ? this._node.error.code : 0,
            ),
              this._node.removeEventListener('error', this._errorFn, !1);
          },
          _loadListener: function() {
            var A = this._parent;
            (A._duration = Math.ceil(10 * this._node.duration) / 10),
              0 === Object.keys(A._sprite).length &&
                (A._sprite = { __default: [0, 1e3 * A._duration] }),
              'loaded' !== A._state &&
                ((A._state = 'loaded'), A._emit('load'), A._loadQueue()),
              this._node.removeEventListener(o._canPlayEvent, this._loadFn, !1);
          },
        };
        var s = {},
          c = function(A) {
            var e = A._src;
            if (s[e]) return (A._duration = s[e].duration), void B(A);
            if (/^data:[^;]+;base64,/.test(e)) {
              for (
                var t = atob(e.split(',')[1]),
                  n = new Uint8Array(t.length),
                  r = 0;
                r < t.length;
                ++r
              )
                n[r] = t.charCodeAt(r);
              l(n.buffer, A);
            } else {
              var o = new XMLHttpRequest();
              o.open('GET', e, !0),
                (o.withCredentials = A._xhrWithCredentials),
                (o.responseType = 'arraybuffer'),
                (o.onload = function() {
                  var e = (o.status + '')[0];
                  '0' === e || '2' === e || '3' === e
                    ? l(o.response, A)
                    : A._emit(
                        'loaderror',
                        null,
                        'Failed loading audio file with status: ' +
                          o.status +
                          '.',
                      );
                }),
                (o.onerror = function() {
                  A._webAudio &&
                    ((A._html5 = !0),
                    (A._webAudio = !1),
                    (A._sounds = []),
                    delete s[e],
                    A.load());
                }),
                u(o);
            }
          },
          u = function(A) {
            try {
              A.send();
            } catch (e) {
              A.onerror();
            }
          },
          l = function(A, e) {
            o.ctx.decodeAudioData(
              A,
              function(A) {
                A && e._sounds.length > 0 && ((s[e._src] = A), B(e, A));
              },
              function() {
                e._emit('loaderror', null, 'Decoding audio data failed.');
              },
            );
          },
          B = function(A, e) {
            e && !A._duration && (A._duration = e.duration),
              0 === Object.keys(A._sprite).length &&
                (A._sprite = { __default: [0, 1e3 * A._duration] }),
              'loaded' !== A._state &&
                ((A._state = 'loaded'), A._emit('load'), A._loadQueue());
          },
          d = function() {
            try {
              'undefined' != typeof AudioContext
                ? (o.ctx = new AudioContext())
                : 'undefined' != typeof webkitAudioContext
                ? (o.ctx = new webkitAudioContext())
                : (o.usingWebAudio = !1);
            } catch (A) {
              o.usingWebAudio = !1;
            }
            var A = /iP(hone|od|ad)/.test(
                o._navigator && o._navigator.platform,
              ),
              e =
                o._navigator &&
                o._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              t = e ? parseInt(e[1], 10) : null;
            if (A && t && t < 9) {
              var n = /safari/.test(
                o._navigator && o._navigator.userAgent.toLowerCase(),
              );
              ((o._navigator && o._navigator.standalone && !n) ||
                (o._navigator && !o._navigator.standalone && !n)) &&
                (o.usingWebAudio = !1);
            }
            o.usingWebAudio &&
              ((o.masterGain =
                void 0 === o.ctx.createGain
                  ? o.ctx.createGainNode()
                  : o.ctx.createGain()),
              o.masterGain.gain.setValueAtTime(
                o._muted ? 0 : 1,
                o.ctx.currentTime,
              ),
              o.masterGain.connect(o.ctx.destination)),
              o._setup();
          };
        void 0 ===
          (n = function() {
            return { Howler: o, Howl: i };
          }.apply(e, [])) || (A.exports = n),
          (e.Howler = o),
          (e.Howl = i),
          'undefined' != typeof window
            ? ((window.HowlerGlobal = r),
              (window.Howler = o),
              (window.Howl = i),
              (window.Sound = a))
            : void 0 !== t &&
              ((t.HowlerGlobal = r),
              (t.Howler = o),
              (t.Howl = i),
              (t.Sound = a));
      })(),
        (function() {
          'use strict';
          var A;
          (HowlerGlobal.prototype._pos = [0, 0, 0]),
            (HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0]),
            (HowlerGlobal.prototype.stereo = function(A) {
              if (!this.ctx || !this.ctx.listener) return this;
              for (var e = this._howls.length - 1; e >= 0; e--)
                this._howls[e].stereo(A);
              return this;
            }),
            (HowlerGlobal.prototype.pos = function(A, e, t) {
              return this.ctx && this.ctx.listener
                ? ((e = 'number' != typeof e ? this._pos[1] : e),
                  (t = 'number' != typeof t ? this._pos[2] : t),
                  'number' != typeof A
                    ? this._pos
                    : ((this._pos = [A, e, t]),
                      this.ctx.listener.setPosition(
                        this._pos[0],
                        this._pos[1],
                        this._pos[2],
                      ),
                      this))
                : this;
            }),
            (HowlerGlobal.prototype.orientation = function(A, e, t, n, r, o) {
              if (!this.ctx || !this.ctx.listener) return this;
              var i = this._orientation;
              return (
                (e = 'number' != typeof e ? i[1] : e),
                (t = 'number' != typeof t ? i[2] : t),
                (n = 'number' != typeof n ? i[3] : n),
                (r = 'number' != typeof r ? i[4] : r),
                (o = 'number' != typeof o ? i[5] : o),
                'number' != typeof A
                  ? i
                  : ((this._orientation = [A, e, t, n, r, o]),
                    this.ctx.listener.setOrientation(A, e, t, n, r, o),
                    this)
              );
            }),
            (Howl.prototype.init =
              ((A = Howl.prototype.init),
              function(e) {
                return (
                  (this._orientation = e.orientation || [1, 0, 0]),
                  (this._stereo = e.stereo || null),
                  (this._pos = e.pos || null),
                  (this._pannerAttr = {
                    coneInnerAngle:
                      void 0 !== e.coneInnerAngle ? e.coneInnerAngle : 360,
                    coneOuterAngle:
                      void 0 !== e.coneOuterAngle ? e.coneOuterAngle : 360,
                    coneOuterGain:
                      void 0 !== e.coneOuterGain ? e.coneOuterGain : 0,
                    distanceModel:
                      void 0 !== e.distanceModel ? e.distanceModel : 'inverse',
                    maxDistance: void 0 !== e.maxDistance ? e.maxDistance : 1e4,
                    panningModel:
                      void 0 !== e.panningModel ? e.panningModel : 'HRTF',
                    refDistance: void 0 !== e.refDistance ? e.refDistance : 1,
                    rolloffFactor:
                      void 0 !== e.rolloffFactor ? e.rolloffFactor : 1,
                  }),
                  (this._onstereo = e.onstereo ? [{ fn: e.onstereo }] : []),
                  (this._onpos = e.onpos ? [{ fn: e.onpos }] : []),
                  (this._onorientation = e.onorientation
                    ? [{ fn: e.onorientation }]
                    : []),
                  A.call(this, e)
                );
              })),
            (Howl.prototype.stereo = function(A, t) {
              var n = this;
              if (!n._webAudio) return n;
              if ('loaded' !== n._state)
                return (
                  n._queue.push({
                    event: 'stereo',
                    action: function() {
                      n.stereo(A, t);
                    },
                  }),
                  n
                );
              var r =
                void 0 === Howler.ctx.createStereoPanner ? 'spatial' : 'stereo';
              if (void 0 === t) {
                if ('number' != typeof A) return n._stereo;
                (n._stereo = A), (n._pos = [A, 0, 0]);
              }
              for (var o = n._getSoundIds(t), i = 0; i < o.length; i++) {
                var a = n._soundById(o[i]);
                if (a) {
                  if ('number' != typeof A) return a._stereo;
                  (a._stereo = A),
                    (a._pos = [A, 0, 0]),
                    a._node &&
                      ((a._pannerAttr.panningModel = 'equalpower'),
                      (a._panner && a._panner.pan) || e(a, r),
                      'spatial' === r
                        ? a._panner.setPosition(A, 0, 0)
                        : a._panner.pan.setValueAtTime(
                            A,
                            Howler.ctx.currentTime,
                          )),
                    n._emit('stereo', a._id);
                }
              }
              return n;
            }),
            (Howl.prototype.pos = function(A, t, n, r) {
              var o = this;
              if (!o._webAudio) return o;
              if ('loaded' !== o._state)
                return (
                  o._queue.push({
                    event: 'pos',
                    action: function() {
                      o.pos(A, t, n, r);
                    },
                  }),
                  o
                );
              if (
                ((t = 'number' != typeof t ? 0 : t),
                (n = 'number' != typeof n ? -0.5 : n),
                void 0 === r)
              ) {
                if ('number' != typeof A) return o._pos;
                o._pos = [A, t, n];
              }
              for (var i = o._getSoundIds(r), a = 0; a < i.length; a++) {
                var s = o._soundById(i[a]);
                if (s) {
                  if ('number' != typeof A) return s._pos;
                  (s._pos = [A, t, n]),
                    s._node &&
                      ((s._panner && !s._panner.pan) || e(s, 'spatial'),
                      s._panner.setPosition(A, t, n)),
                    o._emit('pos', s._id);
                }
              }
              return o;
            }),
            (Howl.prototype.orientation = function(A, t, n, r) {
              var o = this;
              if (!o._webAudio) return o;
              if ('loaded' !== o._state)
                return (
                  o._queue.push({
                    event: 'orientation',
                    action: function() {
                      o.orientation(A, t, n, r);
                    },
                  }),
                  o
                );
              if (
                ((t = 'number' != typeof t ? o._orientation[1] : t),
                (n = 'number' != typeof n ? o._orientation[2] : n),
                void 0 === r)
              ) {
                if ('number' != typeof A) return o._orientation;
                o._orientation = [A, t, n];
              }
              for (var i = o._getSoundIds(r), a = 0; a < i.length; a++) {
                var s = o._soundById(i[a]);
                if (s) {
                  if ('number' != typeof A) return s._orientation;
                  (s._orientation = [A, t, n]),
                    s._node &&
                      (s._panner ||
                        (s._pos || (s._pos = o._pos || [0, 0, -0.5]),
                        e(s, 'spatial')),
                      s._panner.setOrientation(A, t, n)),
                    o._emit('orientation', s._id);
                }
              }
              return o;
            }),
            (Howl.prototype.pannerAttr = function() {
              var A,
                t,
                n,
                r = arguments;
              if (!this._webAudio) return this;
              if (0 === r.length) return this._pannerAttr;
              if (1 === r.length) {
                if ('object' != typeof r[0])
                  return (n = this._soundById(parseInt(r[0], 10)))
                    ? n._pannerAttr
                    : this._pannerAttr;
                (A = r[0]),
                  void 0 === t &&
                    (A.pannerAttr ||
                      (A.pannerAttr = {
                        coneInnerAngle: A.coneInnerAngle,
                        coneOuterAngle: A.coneOuterAngle,
                        coneOuterGain: A.coneOuterGain,
                        distanceModel: A.distanceModel,
                        maxDistance: A.maxDistance,
                        refDistance: A.refDistance,
                        rolloffFactor: A.rolloffFactor,
                        panningModel: A.panningModel,
                      }),
                    (this._pannerAttr = {
                      coneInnerAngle:
                        void 0 !== A.pannerAttr.coneInnerAngle
                          ? A.pannerAttr.coneInnerAngle
                          : this._coneInnerAngle,
                      coneOuterAngle:
                        void 0 !== A.pannerAttr.coneOuterAngle
                          ? A.pannerAttr.coneOuterAngle
                          : this._coneOuterAngle,
                      coneOuterGain:
                        void 0 !== A.pannerAttr.coneOuterGain
                          ? A.pannerAttr.coneOuterGain
                          : this._coneOuterGain,
                      distanceModel:
                        void 0 !== A.pannerAttr.distanceModel
                          ? A.pannerAttr.distanceModel
                          : this._distanceModel,
                      maxDistance:
                        void 0 !== A.pannerAttr.maxDistance
                          ? A.pannerAttr.maxDistance
                          : this._maxDistance,
                      refDistance:
                        void 0 !== A.pannerAttr.refDistance
                          ? A.pannerAttr.refDistance
                          : this._refDistance,
                      rolloffFactor:
                        void 0 !== A.pannerAttr.rolloffFactor
                          ? A.pannerAttr.rolloffFactor
                          : this._rolloffFactor,
                      panningModel:
                        void 0 !== A.pannerAttr.panningModel
                          ? A.pannerAttr.panningModel
                          : this._panningModel,
                    }));
              } else 2 === r.length && ((A = r[0]), (t = parseInt(r[1], 10)));
              for (var o = this._getSoundIds(t), i = 0; i < o.length; i++)
                if ((n = this._soundById(o[i]))) {
                  var a = n._pannerAttr;
                  a = {
                    coneInnerAngle:
                      void 0 !== A.coneInnerAngle
                        ? A.coneInnerAngle
                        : a.coneInnerAngle,
                    coneOuterAngle:
                      void 0 !== A.coneOuterAngle
                        ? A.coneOuterAngle
                        : a.coneOuterAngle,
                    coneOuterGain:
                      void 0 !== A.coneOuterGain
                        ? A.coneOuterGain
                        : a.coneOuterGain,
                    distanceModel:
                      void 0 !== A.distanceModel
                        ? A.distanceModel
                        : a.distanceModel,
                    maxDistance:
                      void 0 !== A.maxDistance ? A.maxDistance : a.maxDistance,
                    refDistance:
                      void 0 !== A.refDistance ? A.refDistance : a.refDistance,
                    rolloffFactor:
                      void 0 !== A.rolloffFactor
                        ? A.rolloffFactor
                        : a.rolloffFactor,
                    panningModel:
                      void 0 !== A.panningModel
                        ? A.panningModel
                        : a.panningModel,
                  };
                  var s = n._panner;
                  s
                    ? ((s.coneInnerAngle = a.coneInnerAngle),
                      (s.coneOuterAngle = a.coneOuterAngle),
                      (s.coneOuterGain = a.coneOuterGain),
                      (s.distanceModel = a.distanceModel),
                      (s.maxDistance = a.maxDistance),
                      (s.refDistance = a.refDistance),
                      (s.rolloffFactor = a.rolloffFactor),
                      (s.panningModel = a.panningModel))
                    : (n._pos || (n._pos = this._pos || [0, 0, -0.5]),
                      e(n, 'spatial'));
                }
              return this;
            }),
            (Sound.prototype.init = (function(A) {
              return function() {
                var e = this._parent;
                (this._orientation = e._orientation),
                  (this._stereo = e._stereo),
                  (this._pos = e._pos),
                  (this._pannerAttr = e._pannerAttr),
                  A.call(this),
                  this._stereo
                    ? e.stereo(this._stereo)
                    : this._pos &&
                      e.pos(this._pos[0], this._pos[1], this._pos[2], this._id);
              };
            })(Sound.prototype.init)),
            (Sound.prototype.reset = (function(A) {
              return function() {
                var e = this._parent;
                return (
                  (this._orientation = e._orientation),
                  (this._pos = e._pos),
                  (this._pannerAttr = e._pannerAttr),
                  A.call(this)
                );
              };
            })(Sound.prototype.reset));
          var e = function(A, e) {
            'spatial' === (e = e || 'spatial')
              ? ((A._panner = Howler.ctx.createPanner()),
                (A._panner.coneInnerAngle = A._pannerAttr.coneInnerAngle),
                (A._panner.coneOuterAngle = A._pannerAttr.coneOuterAngle),
                (A._panner.coneOuterGain = A._pannerAttr.coneOuterGain),
                (A._panner.distanceModel = A._pannerAttr.distanceModel),
                (A._panner.maxDistance = A._pannerAttr.maxDistance),
                (A._panner.refDistance = A._pannerAttr.refDistance),
                (A._panner.rolloffFactor = A._pannerAttr.rolloffFactor),
                (A._panner.panningModel = A._pannerAttr.panningModel),
                A._panner.setPosition(A._pos[0], A._pos[1], A._pos[2]),
                A._panner.setOrientation(
                  A._orientation[0],
                  A._orientation[1],
                  A._orientation[2],
                ))
              : ((A._panner = Howler.ctx.createStereoPanner()),
                A._panner.pan.setValueAtTime(
                  A._stereo,
                  Howler.ctx.currentTime,
                )),
              A._panner.connect(A._node),
              A._paused || A._parent.pause(A._id, !0).play(A._id, !0);
          };
        })();
    }.call(e, t(16)));
  },
  function(A, e, t) {
    'use strict';
    e.a = function(A) {
      return new Promise(function(e) {
        return setTimeout(e, A);
      });
    };
  },
  function(A, e, t) {
    'use strict';
    e.a = function(A, e, t, n) {
      var r = window._hmt;
      r && r.push(['_trackEvent', A, e, t, n]);
    };
  },
  function(A, e, t) {
    'use strict';
    e.a = [
      'icon.png',
      'about.png',
      'arch.png',
      'back.png',
      'bg-general.png',
      'bg-item-list.png',
      'bg.png',
      'blessing-1-active.png',
      'blessing-1.png',
      'blessing-2-active.png',
      'blessing-2.png',
      'blessing-3-active.png',
      'blessing-3.png',
      'blessing-4-active.png',
      'blessing-4.png',
      'btn-about.png',
      'btn-audio-off.png',
      'btn-audio-on.png',
      'btn-dressing-active.png',
      'btn-dressing-save-active.png',
      'btn-dressing-save.png',
      'btn-dressing.png',
      'btn-enter-active.png',
      'btn-enter.png',
      'btn-flower-active.png',
      'btn-flower-ok-active.png',
      'btn-flower-ok.png',
      'btn-flower.png',
      'candy.png',
      'clothes-1.png',
      'clothes-10.png',
      'clothes-11.png',
      'clothes-12.png',
      'clothes-2.png',
      'clothes-3.png',
      'clothes-4.png',
      'clothes-5.png',
      'clothes-6.png',
      'clothes-7.png',
      'clothes-8.png',
      'clothes-9.png',
      'cloud-1.png',
      'cloud-2.png',
      'cloud-3.png',
      'cloud-4.png',
      'countdown-1.png',
      'countdown-2.png',
      'countdown-3.png',
      'couple.png',
      'dialog.png',
      'envelope-front.png',
      'envelope-hat-opened.png',
      'envelope-hat.png',
      'envelope-paper-name.png',
      'envelope-paper.png',
      'eyes-1.png',
      'eyes-2.png',
      'eyes-3.png',
      'eyes-4.png',
      'eyes-5.png',
      'eyes-6.png',
      'eyes-7.png',
      'eyes-8.png',
      'flower-1.png',
      'flower-2.png',
      'flower-3.png',
      'flower-4.png',
      'hair-1.png',
      'hair-10.png',
      'hair-11.png',
      'hair-12.png',
      'hair-13.png',
      'hair-14.png',
      'hair-15.png',
      'hair-16.png',
      'hair-2.png',
      'hair-3.png',
      'hair-4.png',
      'hair-5.png',
      'hair-6.png',
      'hair-7.png',
      'hair-8.png',
      'hair-9.png',
      'icon-clothes-active.png',
      'icon-clothes.png',
      'icon-eyes-active.png',
      'icon-eyes.png',
      'icon-hair-active.png',
      'icon-hair.png',
      'icon-mouth-active.png',
      'icon-mouth.png',
      'icon-pants-active.png',
      'icon-pants.png',
      'item-wrap-active.png',
      'item-wrap.png',
      'model-body.png',
      'mouth-1.png',
      'mouth-2.png',
      'mouth-3.png',
      'mouth-4.png',
      'mouth-5.png',
      'mouth-6.png',
      'pants-1.png',
      'pants-2.png',
      'pants-3.png',
      'pants-4.png',
      'pants-5.png',
      'pants-6.png',
      'pants-7.png',
      'pants-8.png',
      'photo-content.png',
    ];
  },
]);
//# sourceMappingURL=index.js.map
