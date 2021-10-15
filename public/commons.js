var tk,
  __extends =
    (this && this.__extends) ||
    (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(t, n);
      };
      return function (t, n) {
        function o() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((o.prototype = n.prototype), new o()));
      };
    })(),
  __awaiter =
    (this && this.__awaiter) ||
    function (e, t, n, o) {
      return new (n || (n = Promise))(function (i, a) {
        function r(e) {
          try {
            u(o.next(e));
          } catch (e) {
            a(e);
          }
        }
        function s(e) {
          try {
            u(o.throw(e));
          } catch (e) {
            a(e);
          }
        }
        function u(e) {
          var t;
          e.done
            ? i(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(r, s);
        }
        u((o = o.apply(e, t || [])).next());
      });
    },
  __generator =
    (this && this.__generator) ||
    function (e, t) {
      var n,
        o,
        i,
        a,
        r = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (a = { next: s(0), throw: s(1), return: s(2) }),
        "function" == typeof Symbol &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function s(a) {
        return function (s) {
          return (function (a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; r; )
              try {
                if (
                  ((n = 1),
                  o &&
                    (i =
                      2 & a[0]
                        ? o.return
                        : a[0]
                        ? o.throw || ((i = o.return) && i.call(o), 0)
                        : o.next) &&
                    !(i = i.call(o, a[1])).done)
                )
                  return i;
                switch (((o = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                  case 0:
                  case 1:
                    i = a;
                    break;
                  case 4:
                    return r.label++, { value: a[1], done: !1 };
                  case 5:
                    r.label++, (o = a[1]), (a = [0]);
                    continue;
                  case 7:
                    (a = r.ops.pop()), r.trys.pop();
                    continue;
                  default:
                    if (
                      !((i = r.trys),
                      (i = i.length > 0 && i[i.length - 1]) ||
                        (6 !== a[0] && 2 !== a[0]))
                    ) {
                      r = 0;
                      continue;
                    }
                    if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                      r.label = a[1];
                      break;
                    }
                    if (6 === a[0] && r.label < i[1]) {
                      (r.label = i[1]), (i = a);
                      break;
                    }
                    if (i && r.label < i[2]) {
                      (r.label = i[2]), r.ops.push(a);
                      break;
                    }
                    i[2] && r.ops.pop(), r.trys.pop();
                    continue;
                }
                a = t.call(e, r);
              } catch (e) {
                (a = [6, e]), (o = 0);
              } finally {
                n = i = 0;
              }
            if (5 & a[0]) throw a[1];
            return { value: a[0] ? a[1] : void 0, done: !0 };
          })([a, s]);
        };
      }
    };
!(function (e) {
  !(function (e) {
    !(function (e) {
      !(function (e) {
        (e[(e.DelayedBetAndWin = 0)] = "DelayedBetAndWin"),
          (e[(e.ImmediateBetDelayedWin = 1)] = "ImmediateBetDelayedWin");
      })(e.AccountingModeEnum || (e.AccountingModeEnum = {}));
    })(e.finance || (e.finance = {}));
  })(e.d || (e.d = {}));
})(tk || (tk = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        !(function (e) {
          (e[(e.NoWin = 0)] = "NoWin"),
            (e[(e.MiniWin = 1)] = "MiniWin"),
            (e[(e.SmallWin = 2)] = "SmallWin"),
            (e[(e.MediumWin = 4)] = "MediumWin"),
            (e[(e.BigWin = 8)] = "BigWin"),
            (e[(e.MegaWin = 16)] = "MegaWin"),
            (e[(e.UltraWin = 32)] = "UltraWin");
        })(t.WinLevelIds || (t.WinLevelIds = {})),
          (t.getWinLevelId = function (t, n) {
            if (0 === t) {
              for (var o = 0; o < n.length; o++) {
                if (t >= (a = n[o]).minMultiplier) {
                  var i = a.maxMultiplier;
                  if ((-1 === i && (i = Number.MAX_VALUE), t <= i)) return a.id;
                }
              }
              return e.d.config.WinLevelIds.NoWin;
            }
            for (o = 0; o < n.length; o++) {
              var a;
              if (
                t >= (a = n[o]).minMultiplier &&
                (-1 === a.maxMultiplier && (a.maxMultiplier = Number.MAX_VALUE),
                t < a.maxMultiplier)
              )
                return a.id;
            }
            return e.d.config.WinLevelIds.NoWin;
          });
      })(t.config || (t.config = {}));
    })(e.d || (e.d = {}));
  })(tk || (tk = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        e.createBetFromPrimitives = function (e, t) {
          return {
            value: {
              amount: e,
              currencyiso: t,
              classname: "tk.d.finance.Money",
            },
            classname: "tk.d.finance.Bet",
            id: null,
          };
        };
      })(e.finance || (e.finance = {}));
    })(e.d || (e.d = {}));
  })(tk || (tk = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        e.convertNewSessionToActiveSession = function (e, t, n) {
          return (
            null == n && (n = e.availableaccounts[0]),
            {
              accountingmode: e.accountingmode,
              gamesessionid: e.gamesessionid,
              accountid: n,
              gameid: t,
              classname: "tk.d.session.ActiveGameSession",
              requestid: e.requestid,
            }
          );
        };
      })(e.session || (e.session = {}));
    })(e.d || (e.d = {}));
  })(tk || (tk = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        e.getFirstRequestWithMatchingRequestType = function (e, t) {
          for (var n = null, o = 0; o < t.length; o++) {
            var i = t[o];
            if (i.requesttype == e) {
              n = i;
              break;
            }
          }
          return n;
        };
      })(e.rq || (e.rq = {}));
    })(e.g || (e.g = {}));
  })(tk || (tk = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        e.getFirstResponseWithMatchingRequestType = function (e, t) {
          for (var n = null, o = 0; o < t.length; o++) {
            var i = t[o];
            if (i.requesttype == e) {
              n = i;
              break;
            }
          }
          return n;
        };
      })(e.rs || (e.rs = {}));
    })(e.g || (e.g = {}));
  })(tk || (tk = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        (e.IMessageTypes = {
          CUSTOM_MSG: "CUSTOM_MSG",
          ACCOUNT_SWITCH_TO_BONUS: "ACCOUNT_SWITCH_TO_BONUS",
          ACCOUNT_SWITCH_TO_REAL: "ACCOUNT_SWITCH_TO_REAL",
          ELIGIBLE_FOR_BONUS: "ELIGIBLE_FOR_BONUS",
          INELIGIBLE_FOR_BONUS: "INELIGIBLE_FOR_BONUS",
          CMA_MSG: "CMA_MSG",
        }),
          (e.IMessageOptionTypes = {
            OK: "OK",
            CANCEL: "CANCEL",
            ACCEPT: "ACCEPT",
            DECLINE: "DECLINE",
            TERMS: "TERMS",
            ACCOUNT: "ACCOUNT",
          });
      })(e.message || (e.message = {}));
    })(e.d || (e.d = {}));
  })(tk || (tk = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        !(function (e) {
          e.checkForErrors = function (e) {
            for (var t = e.serviceresponses, n = 0; n < t.length; n++) {
              var o = t[n];
              if (null != o.error) return { error: o.error, response: o };
            }
            return null;
          };
        })(e.e || (e.e = {}));
      })(e.rs || (e.rs = {}));
    })(e.gs || (e.gs = {}));
  })(tk || (tk = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        !(function (e) {
          !(function (e) {
            (e[(e.UNKNOWN_ERROR = 0)] = "UNKNOWN_ERROR"),
              (e[(e.WEBGL_NOT_SUPPORTED = 2)] = "WEBGL_NOT_SUPPORTED"),
              (e[(e.CANVAS_NOT_SUPPORTED = 3)] = "CANVAS_NOT_SUPPORTED"),
              (e[(e.BROWSER_NOT_SUPPORTED = 4)] = "BROWSER_NOT_SUPPORTED"),
              (e[(e.DEVICE_NOT_SUPPORTED = 5)] = "DEVICE_NOT_SUPPORTED"),
              (e[(e.WEBGL_FATAL_CONTEXT_LOSS = 6)] =
                "WEBGL_FATAL_CONTEXT_LOSS"),
              (e[(e.MALFORMED_DATA = 7)] = "MALFORMED_DATA"),
              (e[(e.GAME_CONTENT_NOT_FOUND = 2001)] = "GAME_CONTENT_NOT_FOUND"),
              (e[(e.LANGUAGE_RESOURCES_NOT_FOUND = 2002)] =
                "LANGUAGE_RESOURCES_NOT_FOUND"),
              (e[(e.SERVER_NOT_RESPONDING = 3e3)] = "SERVER_NOT_RESPONDING"),
              (e[(e.GAME_SERVER_TIME_OUT = 3001)] = "GAME_SERVER_TIME_OUT"),
              (e[(e.TRANSACTION_SERVER_TIME_OUT = 3005)] =
                "TRANSACTION_SERVER_TIME_OUT"),
              (e[(e.WALLET_SERVER_TIME_OUT = 3006)] = "WALLET_SERVER_TIME_OUT"),
              (e[(e.ACCESS_DENIED = 3007)] = "ACCESS_DENIED"),
              (e[(e.GAME_LAUNCHER_ERROR = 3008)] = "GAME_LAUNCHER_ERROR"),
              (e[(e.PLAYER_SESSION_EXPIRED = 4e3)] = "PLAYER_SESSION_EXPIRED"),
              (e[(e.INVALID_GAME_SESSION = 4001)] = "INVALID_GAME_SESSION"),
              (e[(e.INVALID_LOGIN = 4002)] = "INVALID_LOGIN"),
              (e[(e.INVALID_TOURNAMENT = 4003)] = "INVALID_TOURNAMENT"),
              (e[(e.TOURNAMENT_EXPIRED = 4004)] = "TOURNAMENT_EXPIRED"),
              (e[(e.UNKNOWN_BONUS_PROGRAM = 4005)] = "UNKNOWN_BONUS_PROGRAM"),
              (e[(e.BONUS_PROGRAM_EXPIRED = 4006)] = "BONUS_PROGRAM_EXPIRED"),
              (e[(e.INVALID_ACTIVATION_CODE = 4007)] =
                "INVALID_ACTIVATION_CODE"),
              (e[(e.INVALID_JURISDICTION = 4008)] = "INVALID_JURISDICTION"),
              (e[(e.BLOCKED_JURISDICTION = 4009)] = "BLOCKED_JURISDICTION"),
              (e[(e.GAME_BLOCKED = 4010)] = "GAME_BLOCKED"),
              (e[(e.ILLEGAL_OPERATION = 5e3)] = "ILLEGAL_OPERATION"),
              (e[(e.INVALID_GAME_ROUND = 5001)] = "INVALID_GAME_ROUND"),
              (e[(e.OUT_OF_MONEY = 5002)] = "OUT_OF_MONEY"),
              (e[(e.SESSION_LIMIT_EXCEEDED = 5004)] = "SESSION_LIMIT_EXCEEDED"),
              (e[(e.PLAYER_LIMIT_EXCEEDED = 5005)] = "PLAYER_LIMIT_EXCEEDED"),
              (e[(e.BET_REJECTED = 5006)] = "BET_REJECTED"),
              (e[(e.REGULATORY_ERROR = 5007)] = "REGULATORY_ERROR"),
              (e[(e.OPERATOR_ERROR = 6e3)] = "OPERATOR_ERROR"),
              (e[(e.OPERATOR_TEMPORARILY_UNAVAILABLE = 6001)] =
                "OPERATOR_TEMPORARILY_UNAVAILABLE");
          })(e.ServerErrorCodes || (e.ServerErrorCodes = {}));
        })(e.e || (e.e = {}));
      })(e.rs || (e.rs = {}));
    })(e.gs || (e.gs = {}));
  })(tk || (tk = {})),
  (function (e) {
    var t = (function () {
      function t() {}
      return (
        (t.isGameInstanceAlive = function (e) {
          return t._gameInstanceStatuses[e];
        }),
        (t.markGameAsDead = function (n) {
          t._gameInstanceStatuses[n] = !1;
          var o = t._gameInstances[n],
            i = t._gameInstanceList.indexOf(o);
          -1 !== i && t._gameInstanceList.splice(i, 1),
            delete e.games[n],
            0 === i && delete e.game,
            delete t._gameInstances[n];
        }),
        (t.addGameInstanceToManager = function (n, o) {
          (e.game = o),
            void 0 === e.games && (e.games = {}),
            (e.games[n] = o),
            (t._gameInstances[n] = o),
            t._gameInstanceList.unshift(o),
            (t._gameInstanceStatuses[n] = !0);
        }),
        (t.getGameInstances = function (e) {
          void 0 === e && (e = !0);
          var n = [];
          for (var o in t._gameInstanceStatuses)
            e ? t._gameInstanceStatuses[o] && n.push(o) : n.push(o);
          return n;
        }),
        Object.defineProperty(t, "latest", {
          get: function () {
            return t._gameInstanceList[0];
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.getGameInstanceById = function (e) {
          return t._gameInstances[e];
        }),
        (t.getGameInstanceStatusById = function (e) {
          return t._gameInstanceStatuses[e];
        }),
        (t._gameInstanceStatuses = {}),
        (t._gameInstances = {}),
        (t._gameInstanceList = []),
        t
      );
    })();
    e.GameInstanceManager = t;
  })(tk_common || (tk_common = {})),
  (function (e) {
    e.commonVersionNumber = "1.18.6";
  })(tk_common || (tk_common = {})),
  console && console.log,
  (function (e) {
    !(function (e) {
      !(function (e) {
        (e[(e.Other = 0)] = "Other"),
          (e[(e.Safari = 1)] = "Safari"),
          (e[(e.Chrome = 2)] = "Chrome"),
          (e[(e.IE = 3)] = "IE"),
          (e[(e.FireFox = 4)] = "FireFox"),
          (e[(e.Opera = 5)] = "Opera"),
          (e[(e.Legacy = 6)] = "Legacy");
      })(e.BrowserVendorEnum || (e.BrowserVendorEnum = {}));
    })(e.constants || (e.constants = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        (e[(e.OTHER = 0)] = "OTHER"),
          (e[(e.WEBPLAYER = 1)] = "WEBPLAYER"),
          (e[(e.FLASH = 2)] = "FLASH"),
          (e[(e.HTML = 3)] = "HTML"),
          (e[(e.IOS = 4)] = "IOS"),
          (e[(e.ANDROID = 5)] = "ANDROID"),
          (e[(e.WINPHONE = 6)] = "WINPHONE");
      })(e.ClientTypeEnum || (e.ClientTypeEnum = {}));
    })(e.constants || (e.constants = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {}
        return (
          (e.getCurrencyString = function (t) {
            switch (t) {
              case e.EUR:
                return "â‚¬";
              case e.GBP:
                return "Â£";
              case e.USD:
                return "$";
              case e.JPY:
                return "Â¥";
            }
            return t;
          }),
          (e.EUR = "EUR"),
          (e.USD = "USD"),
          (e.JPY = "JPY"),
          (e.GBP = "GBP"),
          (e.SEK = "SEK"),
          (e.NOK = "NOK"),
          e
        );
      })();
      e.CommonCurrencies = t;
    })(e.constants || (e.constants = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        (e[(e.SocialThrills = 1)] = "SocialThrills"),
          (e[(e.Thunderkick = 2)] = "Thunderkick"),
          (e[(e.UnibetIntDev = 9)] = "UnibetIntDev"),
          (e[(e.UnibetExtDev = 100)] = "UnibetExtDev"),
          (e[(e.CasumoDev = 200)] = "CasumoDev"),
          (e[(e.CasumoProd = 201)] = "CasumoProd");
      })(e.OperatorIds || (e.OperatorIds = {}));
    })(e.constants || (e.constants = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        (e[(e.LANDSCAPE = 0)] = "LANDSCAPE"),
          (e[(e.PORTRAIT = 1)] = "PORTRAIT");
      })(e.OrientationEnum || (e.OrientationEnum = {}));
    })(e.constants || (e.constants = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        (e[(e.Other = 0)] = "Other"),
          (e[(e.SamsungG2 = 1)] = "SamsungG2"),
          (e[(e.SamsungG3 = 2)] = "SamsungG3"),
          (e[(e.SamsungGX = 3)] = "SamsungGX"),
          (e[(e.NexusPhone = 4)] = "NexusPhone"),
          (e[(e.Nexus7 = 5)] = "Nexus7"),
          (e[(e.Nexus10 = 6)] = "Nexus10"),
          (e[(e.HTCOne = 7)] = "HTCOne"),
          (e[(e.HTCOneM8 = 8)] = "HTCOneM8"),
          (e[(e.LG_G3 = 9)] = "LG_G3"),
          (e[(e.iPhone4 = 10)] = "iPhone4"),
          (e[(e.iPhone4S = 11)] = "iPhone4S"),
          (e[(e.iPhone5 = 12)] = "iPhone5"),
          (e[(e.iPhone6 = 13)] = "iPhone6"),
          (e[(e.iPad2 = 14)] = "iPad2"),
          (e[(e.iPad3 = 15)] = "iPad3"),
          (e[(e.iPadMini = 16)] = "iPadMini"),
          (e[(e.iPad4 = 17)] = "iPad4"),
          (e[(e.Desktop = 18)] = "Desktop");
      })(e.TargetDeviceEnum || (e.TargetDeviceEnum = {}));
    })(e.constants || (e.constants = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        (e[(e.Other = 0)] = "Other"),
          (e[(e.Desktop = 1)] = "Desktop"),
          (e[(e.MobilePhone = 2)] = "MobilePhone"),
          (e[(e.Tablet = 3)] = "Tablet");
      })(e.TargetPlatformEnum || (e.TargetPlatformEnum = {}));
    })(e.constants || (e.constants = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e(e) {
          (this.isActive = !1), (this._id = null != e ? e : this.toString());
        }
        return (
          Object.defineProperty(e.prototype, "id", {
            get: function () {
              return this._id;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.activate = function () {
            this.isActive = !0;
          }),
          (e.prototype.deactivate = function () {
            this.isActive = !1;
          }),
          (e.prototype.restore = function () {}),
          (e.prototype.update = function (e) {}),
          (e.prototype.pause = function (e) {}),
          (e.prototype.resize = function (e, t) {}),
          (e.prototype.handleErrorOccurred = function (e) {}),
          (e.prototype.handleKeyboardInput = function (e) {}),
          e
        );
      })();
      e.AbstractState = t;
    })(e.fsm || (e.fsm = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = (function () {
        function t(e) {
          (this._injectorMappings = {}), (this._ctx = e);
        }
        return (
          (t.prototype.getInstance = function (e, t) {
            var n,
              o = e + (void 0 !== t ? "|" + t : ""),
              i = this.getPropertyMapping(o);
            if (null !== i)
              return void 0 !== i.instance
                ? i.instance
                : ((n = new i.to()).inject(this._ctx),
                  void 0 !== n.register && n.register(),
                  n);
            try {
              return null == (i = this.getPropertyMapping(e))
                ? null
                : void 0 !== i.instance
                ? i.instance
                : ((n = new i.to()).inject(this._ctx),
                  void 0 !== n.register && n.register(),
                  n);
            } catch (e) {
              throw new Error(
                "Injector.getInstance<T>: Failed to find injector mapping for " +
                  o
              );
            }
          }),
          (t.prototype.getPropertyMapping = function (e) {
            var t = this._injectorMappings[e];
            return null == t ? null : t;
          }),
          (t.prototype.mapInstance = function (e, t, n) {
            var o = e + (void 0 !== n ? n : "");
            return (
              ((this._injectorMappings[o] = {
                asSingleton: function () {},
                from: o,
                to: void 0,
              }).instance = t),
              t
            );
          }),
          (t.prototype.mapClass = function (e, t, n) {
            var o = e + (void 0 !== n ? n : "");
            this._injectorMappings[o] = {
              asSingleton: function () {
                (this.instance = new this.to()),
                  this.instance.inject(this.ctx),
                  void 0 !== this.instance.register && this.instance.register();
              },
              from: o,
              to: t,
            };
          }),
          (t.prototype.unmap = function (e, t) {
            var n = e + (void 0 !== t ? t : "");
            delete this._injectorMappings[n];
          }),
          (t.prototype.getMappingFor = function (t) {
            if ("object" != typeof t)
              throw new Error(
                "Injector.getMappingFor: Cannot resolve mapping for non-object value: " +
                  t
              );
            for (
              var n = e.utils.FullClassNameFinder.getPrototypeChain(t), o = 0;
              o < n.length;
              o++
            ) {
              var i = n[o],
                a = this.getPropertyMapping(i);
              if (null !== a) return { id: i, entry: a };
            }
          }),
          t
        );
      })();
      t.Injector = n;
    })(e.ioc || (e.ioc = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {}
        return (
          (e.prototype.inject = function (e) {
            this.eventBus = e.eventBus;
          }),
          (e.prototype.register = function () {}),
          (e.prototype.execute = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            throw new Error(
              "IocCommandBase.execute is abstract. Override and implement in subclass."
            );
          }),
          e
        );
      })();
      e.IocCommandBase = t;
    })(e.ioc || (e.ioc = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = function () {};
      e.IocContext = t;
    })(e.ioc || (e.ioc = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = (function () {
          function e(e, t, n) {
            (this.listener = e), (this.scope = t), (this.addOnce = n);
          }
          return (
            (e.prototype.dispatch = function (e) {
              this.listener.apply(this.scope, e),
                !0 === this.addOnce && (this.removeMe = !0);
            }),
            e
          );
        })(),
        o = (function () {
          function e() {
            this._signalBindings = [];
          }
          return (
            (e.prototype.add = function (e, t, o) {
              if (
                (void 0 === t && (t = void 0),
                void 0 === o && (o = !1),
                !1 === o)
              )
                for (var i = 0; i < this._signalBindings.length; i++) {
                  var a = this._signalBindings[i];
                  if (a.listener === e && a.scope === t)
                    throw new Error(
                      "tk_common.utils.Signal.add: Adding a listener with the same scope is not allowed unless allowDuplicates is true."
                    );
                }
              this._signalBindings.push(new n(e, t, !1));
            }),
            (e.prototype.addOnce = function (e, t, o) {
              if ((void 0 === o && (o = !1), !1 === o))
                for (var i = 0; i < this._signalBindings.length; i++) {
                  var a = this._signalBindings[i];
                  if (a.listener === e && a.scope === t)
                    throw new Error(
                      "tk_common.utils.Signal.addOnce: Adding a listener with the same scope is not allowed unless allowDuplicates is true."
                    );
                }
              this._signalBindings.push(new n(e, t, !0));
            }),
            (e.prototype.remove = function (e, t, n) {
              void 0 === n && (n = !1);
              for (
                var o = this._signalBindings, i = o.length - 1;
                i >= 0;
                i--
              ) {
                var a = o[i];
                if (
                  a.listener === e &&
                  a.scope === t &&
                  (o.splice(i, 1), !1 === n)
                )
                  break;
              }
            }),
            (e.prototype.removeAll = function () {
              this._signalBindings = [];
            }),
            (e.prototype.dispatch = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              if (0 !== this._signalBindings.length) {
                for (
                  var n = this._signalBindings.concat(),
                    o = this._signalBindings.length - 1;
                  o >= 0;
                  o--
                )
                  this._signalBindings[o].addOnce &&
                    this._signalBindings.splice(o, 1);
                for (var i = 0; i < n.length; i++) n[i].dispatch(e);
              }
            }),
            e
          );
        })();
      t.Signal = o;
      var i = (function () {
        function t() {
          this._signal = new e.utils.Signal();
        }
        return (
          (t.prototype.add = function (e, t, n) {
            void 0 === t && (t = void 0),
              void 0 === n && (n = !1),
              this._signal.add(e, t, n);
          }),
          (t.prototype.addOnce = function (e, t, n) {
            void 0 === n && (n = !1), this._signal.addOnce(e, t, n);
          }),
          (t.prototype.remove = function (e, t, n) {
            void 0 === n && (n = !1), this._signal.remove(e, t, n);
          }),
          (t.prototype.removeAll = function () {
            this._signal.removeAll();
          }),
          (t.prototype.dispatch = function () {
            if (arguments.length > 0)
              throw new Error(
                "Signal0 cannot take arguments. Use some of the other signal classes instead if you need to pass arguments to the dispatch-function."
              );
            this._signal.dispatch();
          }),
          t
        );
      })();
      t.Signal0 = i;
      var a = (function () {
        function t() {
          this._signal = new e.utils.Signal();
        }
        return (
          (t.prototype.add = function (e, t, n) {
            void 0 === t && (t = void 0),
              void 0 === n && (n = !1),
              this._signal.add(e, t, n);
          }),
          (t.prototype.addOnce = function (e, t, n) {
            void 0 === n && (n = !1), this._signal.addOnce(e, t, n);
          }),
          (t.prototype.remove = function (e, t, n) {
            void 0 === n && (n = !1), this._signal.remove(e, t, n);
          }),
          (t.prototype.removeAll = function () {
            this._signal.removeAll();
          }),
          (t.prototype.dispatch = function (e) {
            this._signal.dispatch(e);
          }),
          t
        );
      })();
      t.Signal1 = a;
      var r = (function () {
        function t() {
          this._signal = new e.utils.Signal();
        }
        return (
          (t.prototype.add = function (e, t, n) {
            void 0 === t && (t = void 0),
              void 0 === n && (n = !1),
              this._signal.add(e, t, n);
          }),
          (t.prototype.addOnce = function (e, t, n) {
            void 0 === n && (n = !1), this._signal.addOnce(e, t, n);
          }),
          (t.prototype.remove = function (e, t, n) {
            void 0 === n && (n = !1), this._signal.remove(e, t, n);
          }),
          (t.prototype.removeAll = function () {
            this._signal.removeAll();
          }),
          (t.prototype.dispatch = function (e, t) {
            this._signal.dispatch(e, t);
          }),
          t
        );
      })();
      t.Signal2 = r;
      var s = (function () {
        function t() {
          this._signal = new e.utils.Signal();
        }
        return (
          (t.prototype.add = function (e, t, n) {
            void 0 === t && (t = void 0),
              void 0 === n && (n = !1),
              this._signal.add(e, t, n);
          }),
          (t.prototype.addOnce = function (e, t, n) {
            void 0 === n && (n = !1), this._signal.addOnce(e, t, n);
          }),
          (t.prototype.remove = function (e, t, n) {
            void 0 === n && (n = !1), this._signal.remove(e, t, n);
          }),
          (t.prototype.removeAll = function () {
            this._signal.removeAll();
          }),
          (t.prototype.dispatch = function (e, t, n) {
            this._signal.dispatch(e, t, n);
          }),
          t
        );
      })();
      t.Signal3 = s;
      var u = (function () {
        function t() {
          this._signal = new e.utils.Signal();
        }
        return (
          (t.prototype.add = function (e, t, n) {
            void 0 === t && (t = void 0),
              void 0 === n && (n = !1),
              this._signal.add(e, t, n);
          }),
          (t.prototype.addOnce = function (e, t, n) {
            void 0 === n && (n = !1), this._signal.addOnce(e, t, n);
          }),
          (t.prototype.remove = function (e, t, n) {
            void 0 === n && (n = !1), this._signal.remove(e, t, n);
          }),
          (t.prototype.removeAll = function () {
            this._signal.removeAll();
          }),
          (t.prototype.dispatch = function (e, t, n, o) {
            this._signal.dispatch(e, t, n, o);
          }),
          t
        );
      })();
      t.Signal4 = u;
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = (function () {
        function t() {
          (this._signal = new e.utils.Signal2()),
            (this._listeners = {}),
            this._signal.add(this.handleEvent, this);
        }
        return (
          (t.prototype.handleEvent = function (e, t) {
            var n = this._listeners[t.eventId];
            if (n && n.length > 0) {
              n = n.concat();
              for (var o = 0; o < n.length; o++)
                n[o].func.apply(n[o].this, [e, t]);
            }
          }),
          (t.prototype.dispatch = function (e, t) {
            this._signal.dispatch(e, t);
          }),
          (t.prototype.addEventListener = function (e, t, n) {
            void 0 === this._listeners[e] && (this._listeners[e] = []),
              this._listeners[e].push({ func: t, this: n });
          }),
          (t.prototype.removeEventListener = function (e, t, n) {
            void 0 === this._listeners[e] && (this._listeners[e] = []);
            for (var o = this._listeners[e], i = 0; i < o.length; i++) {
              var a = o[i];
              if (a.func === t && a.this === n) {
                o.splice(i, 1);
                break;
              }
            }
          }),
          t
        );
      })();
      t.IocEventBus = n;
    })(e.ioc || (e.ioc = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {}
        return (
          (e.prototype.inject = function (e) {}),
          (e.prototype.register = function () {}),
          (e.prototype.destroy = function () {}),
          e
        );
      })();
      e.MediatorBase = t;
    })(e.ioc || (e.ioc = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = (function () {
        function e() {}
        return (
          (e.readUrlParameters = function (t, n) {
            if ((void 0 === n && (n = !0), "" == t))
              return (e._queryParameters = {}), {};
            for (var o = t.split("&"), i = {}, a = 0; a < o.length; ++a) {
              var r = o[a].split("=");
              2 == r.length &&
                (i[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " ")));
            }
            return !0 === n && (e._queryParameters = i), i;
          }),
          (e.getUrlParameter = function (t, n) {
            if (null == e._queryParameters) {
              var o = window.location.search;
              (null != o && "" !== o) ||
                (o = "?" + (window.location.href.split("?")[1] || ""));
              var i = o.substr(1);
              e.readUrlParameters(i);
            }
            var a = e._queryParameters[t];
            return null != a ? a : null != n ? n : a;
          }),
          e
        );
      })();
      (t.QueryStringHelper = n),
        (t.getQueryStringParam = function (e, t) {
          return n.getUrlParameter(e, t);
        }),
        (t.isQueryStringFlagSet = function (t, n) {
          return 0 != (parseInt(e.utils.getQueryStringParam(t, "0")) & n);
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {}
        return (
          (e.consoleCommand = "ccmd"),
          (e.startGame = "startgame"),
          (e.changeValidBets = "changevalidbets"),
          (e.changeBet = "changebet"),
          (e.updateAutoPlay = "updateautoplay"),
          (e.updateSound = "updatesound"),
          (e.pauseGame = "pausegame"),
          (e.resumeGame = "resumegame"),
          (e.changeBalance = "changebalance"),
          (e.changeInfoFields = "changeinfofields"),
          (e.setOperatorData = "setoperatordata"),
          (e.setExtraData = "setextradata"),
          (e.enableRealityCheck = "enablerealitycheck"),
          (e.shutDown = "shutDown"),
          (e.connectExternalGui = "connectexternalgui"),
          (e.resizeGame = "resizegame"),
          (e.forceOrientation = "forceorientation"),
          (e.stopAutoPlay = "stopautoplay"),
          (e.showRealityCheck = "showrealitycheck"),
          (e.externalRealityCheckClosed = "externalrealitycheckclosed"),
          (e.preventGamePlay = "preventgameplay"),
          (e.resumeGamePlay = "resumegameplay"),
          (e.recoverFromError = "recoverfromerror"),
          (e.displayMessage = "displaymessage"),
          (e.closeMessage = "closemessage"),
          (e.messageHandlingComplete = "messagehandlingcomplete"),
          (e.getInitGameData = "getinitgamedata"),
          (e.getTranslation = "gettranslation"),
          (e.getGameDimensions = "getgamedimensions"),
          (e.getPlayerCurrency = "getplayercurrency"),
          (e.closingGameCauseRestoreState = "closinggamecauserestorestate"),
          (e.updateOutcomeControlState = "setocqueue"),
          (e.emitOutcomeControlState = "emitocqueue"),
          (e.initializeGame = "initializegame"),
          (e.closeDialog = "closedialog"),
          (e.updateGuiOverrides = "updateguioverrides"),
          (e.openPayTable = "openpaytable"),
          (e.openGameRules = "opengamerules"),
          e
        );
      })();
      e.JSInboundEventIds = t;
    })(e.jsintegration || (e.jsintegration = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {}
        return (
          (e.gameLoading = "gameloading"),
          (e.gameLoaded = "gameloaded"),
          (e.connectExternalGui = "connectExternalGui"),
          (e.gameInitialized = "gameinitialized"),
          (e.gameStarted = "gamestarted"),
          (e.roundStarted = "roundstarted"),
          (e.roundEnded = "roundended"),
          (e.spinStarted = "spinstarted"),
          (e.spinEnded = "spinended"),
          (e.gamePaused = "gamepaused"),
          (e.gameResumed = "gameresumed"),
          (e.winPresentationStarted = "wpstarted"),
          (e.winPresentationComplete = "wpcomplete"),
          (e.partialWinPresentationStarted = "pwpstarted"),
          (e.partialWinPresentationComplete = "pwpcomplete"),
          (e.showingPaylineWin = "showingpaylinewin"),
          (e.showingScatterWin = "showingscatterwin"),
          (e.featureWon = "featurewon"),
          (e.featureEntered = "featureentered"),
          (e.featureExited = "featureexited"),
          (e.betChanged = "betchanged"),
          (e.fullScreenEntered = "fullscreenentered"),
          (e.fullScreenExited = "fullscreenexited"),
          (e.soundSettingsChanged = "soundsettingschanged"),
          (e.balanceChanged = "balancechanged"),
          (e.errorOccurred = "erroroccurred"),
          (e.idleStateEntered = "idlestateentered"),
          (e.restoreStateEntered = "restorestateentered"),
          (e.restoreStateExited = "restorestateexited"),
          (e.openExternalGameRules = "openexternalgamerules"),
          (e.openExternalHistory = "openexternalhistory"),
          (e.goBackToLobby = "backtolobby"),
          (e.playForReal = "playforreal"),
          (e.makeDeposit = "makedeposit"),
          (e.gamePlayDeclined = "gameplaydeclined"),
          (e.gamePlayAccepted = "gameplayaccepted"),
          (e.autoPlayStarted = "autoplaystarted"),
          (e.autoPlayStopped = "autoplaystopped"),
          (e.openExternalRealityCheck = "openexternalrealitycheck"),
          (e.nearWinStarted = "nearwinstarted"),
          (e.nearWinStopped = "nearwinstopped"),
          (e.reelStarted = "reelstarted"),
          (e.reelStopped = "reelstopped"),
          (e.realityCheckTriggered = "rctriggered"),
          (e.dialogOpened = "dialogopened"),
          (e.dialogClosed = "dialogclosed"),
          (e.quickStopped = "quickstopped"),
          (e.transitionSkipped = "skip"),
          (e.winPresentationAborted = "wpaborted"),
          (e.winLevelReached = "winlevelreached"),
          (e.messagesPending = "messagespending"),
          (e.messagesReceived = "messagesreceived"),
          (e.messageOpened = "messageopened"),
          (e.messageClosed = "messageclosed"),
          (e.messageOptionSelected = "messageoptionselected"),
          (e.getInitGameData = "getinitgamedata"),
          (e.getGameDimensions = "getgamedimensions"),
          (e.getTranslation = "gettranslation"),
          (e.getPlayerCurrency = "getplayercurrency"),
          (e.closingGameCauseRestoreStateResponse =
            "closinggamecausesrestorestateresponse"),
          (e.emitOcQueue = "ocqueue"),
          (e.preloaderProgress = "preloaderprogress"),
          (e.gamePlayPrevented = "gameplayprevented"),
          (e.freeRoundsEntered = "freeroundsentered"),
          (e.freeRoundsExited = "freeroundsexited"),
          (e.gamePlayPermitted = "gameplaypermitted"),
          (e.gameConfigured = "gameconfigured"),
          e
        );
      })();
      e.JSOutboundEventIds = t;
    })(e.jsintegration || (e.jsintegration = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = (function () {
        function n(n, o) {
          var i = this;
          if (
            ((this._inboundEventCounter = {}),
            (this._outboundEventCounter = {}),
            (this._gamePlayHasBeenPrevented = !1),
            (this._inboundEventToMethodMap = {}),
            (this.onStartGame = new e.utils.Signal0()),
            (this.onChangeClientBalance = new e.utils.Signal1()),
            (this.onPauseGame = new e.utils.Signal0()),
            (this.onResumeGame = new e.utils.Signal0()),
            (this.onSetOperatorData = new e.utils.Signal1()),
            (this.onSetExtraData = new e.utils.Signal1()),
            (this.onEnableRealityCheck = new e.utils.Signal1()),
            (this.onShutDownGame = new e.utils.Signal0()),
            (this.onExternalGuiConnected = new e.utils.Signal1()),
            (this.onResizeGame = new e.utils.Signal2()),
            (this.onUpdateAutoPlay = new e.utils.Signal1()),
            (this.onUpdateSound = new e.utils.Signal1()),
            (this.onForceOrientation = new e.utils.Signal1()),
            (this.onChangeValidBets = new e.utils.Signal1()),
            (this.onChangeBet = new e.utils.Signal1()),
            (this.onStopAutoPlay = new e.utils.Signal0()),
            (this.onShowRealityCheck = new e.utils.Signal0()),
            (this.onExternalRealityCheckClosed = new e.utils.Signal1()),
            (this.onPreventGamePlay = new e.utils.Signal0()),
            (this.onResumeGamePlay = new e.utils.Signal0()),
            (this.onRecoverFromError = new e.utils.Signal1()),
            (this.onCloseDialog = new e.utils.Signal4()),
            (this.onMessageHandlingComplete = new e.utils.Signal0()),
            (this.onGetPlayerCurrency = new e.utils.Signal0()),
            (this.onClosingGameCausesRestoreState = new e.utils.Signal0()),
            (this.onUpdateOC = new e.utils.Signal1()),
            (this.onGetOCState = new e.utils.Signal0()),
            (this.onInitializeGame = new e.utils.Signal0()),
            (this.updateGuiButtonOverrides = new e.utils.Signal2()),
            (this.onOpenPayTable = new e.utils.Signal0()),
            (this.onOpenGameRules = new e.utils.Signal0()),
            (this._senderId = n.gameInstanceId),
            (this._game = n),
            (this._handleMessageFunc =
              null == o
                ? window[
                    e.utils.QueryStringHelper.getUrlParameter(
                      "handleMessageFunc",
                      "handleMessage"
                    )
                  ]
                : o),
            void 0 === this._handleMessageFunc)
          )
            throw "JSBridge.constructor: No function to handle messages/outgoing events was found. You must either supply a valid function or make sure one is defined in the containing HTML page.";
          for (var a in t.JSOutboundEventIds)
            "string" == typeof t.JSOutboundEventIds[a] &&
              (this._outboundEventCounter[t.JSOutboundEventIds[a]] = 0);
          for (a in t.JSInboundEventIds)
            "string" == typeof t.JSInboundEventIds[a] &&
              (this._inboundEventCounter[t.JSInboundEventIds[a]] = 0);
          this._gamePlayPreventedStrategy = function () {};
          var r = this._inboundEventToMethodMap;
          (r[t.JSInboundEventIds.changeBalance] = function (e, t) {
            return i.changeBalance(t);
          }),
            (r[t.JSInboundEventIds.changeBet] = function (e, t) {
              return i.changeBet(t);
            }),
            (r[t.JSInboundEventIds.enableRealityCheck] = function (e, t) {
              return i.enableRealityCheck(t);
            }),
            (r[t.JSInboundEventIds.connectExternalGui] = function (e, t) {
              return i.connectExternalGui();
            }),
            (r[t.JSInboundEventIds.setOperatorData] = function (e, t) {
              return i.setOperatorData(t);
            }),
            (r[t.JSInboundEventIds.setExtraData] = function (e, t) {
              return i.setExtraData(t);
            }),
            (r[t.JSInboundEventIds.pauseGame] = function (e, t) {
              return i.pauseGame();
            }),
            (r[t.JSInboundEventIds.resumeGame] = function (e, t) {
              return i.resumeGame();
            }),
            (r[t.JSInboundEventIds.shutDown] = function (e, t) {
              return i.shutDown();
            }),
            (r[t.JSInboundEventIds.updateAutoPlay] = function (e, t) {
              return i.updateAutoPlay(t);
            }),
            (r[t.JSInboundEventIds.updateSound] = function (e, t) {
              return i.updateSound(t);
            }),
            (r[t.JSInboundEventIds.changeValidBets] = function (e, t) {
              return i.changeValidBets(t);
            }),
            (r[t.JSInboundEventIds.stopAutoPlay] = function (e, t) {
              return i.stopAutoPlay();
            }),
            (r[t.JSInboundEventIds.showRealityCheck] = function (e, t) {
              return i.showRealityCheck();
            }),
            (r[t.JSInboundEventIds.externalRealityCheckClosed] = function (
              e,
              t
            ) {
              return i.externalRealityCheckClosed(t);
            }),
            (r[t.JSInboundEventIds.preventGamePlay] = function (e, t) {
              return i.preventGamePlay(t);
            }),
            (r[t.JSInboundEventIds.resumeGamePlay] = function (e, t) {
              return i.resumeGamePlay();
            }),
            (r[t.JSInboundEventIds.messageHandlingComplete] = function (e) {
              return i.handleMessageHandlingCompleteEvent();
            }),
            (r[t.JSInboundEventIds.getInitGameData] = function (e) {
              return i.handleGetInitGameDataEvent();
            }),
            (r[t.JSInboundEventIds.getTranslation] = function (e, t) {
              return i.handleGetTranslation(t.phrases);
            }),
            (r[t.JSInboundEventIds.getGameDimensions] = function (e, t) {
              return i.handleGetGameDimensions();
            }),
            (r[t.JSInboundEventIds.getPlayerCurrency] = function (e, t) {
              return i.handleGetPlayerCurrency();
            }),
            (r[t.JSInboundEventIds.closingGameCauseRestoreState] = function (
              e,
              t
            ) {
              return i.handleClosingGameCausesRestoreState();
            }),
            (r[t.JSInboundEventIds.updateOutcomeControlState] = function (
              e,
              t
            ) {
              return i.updateOC(t);
            }),
            (r[t.JSInboundEventIds.emitOutcomeControlState] = function (e) {
              return i.emitOutcomeControlStateRequested();
            }),
            (r[t.JSInboundEventIds.startGame] = function (e) {
              return i.startGame();
            }),
            (r[t.JSInboundEventIds.initializeGame] = function (e) {
              return i.initializeGame();
            }),
            (r[t.JSInboundEventIds.recoverFromError] = function (e) {
              return i.onRecoverFromError.dispatch(i._latestError);
            }),
            (r[t.JSInboundEventIds.closeDialog] = function (e, t) {
              return i.closeDialog(
                t.dialogtype,
                t.button,
                t.value,
                t.extradata
              );
            }),
            (r[t.JSInboundEventIds.openPayTable] = function (e, t) {
              return i.handleOpenPayTable();
            }),
            (r[t.JSInboundEventIds.openGameRules] = function (e, t) {
              return i.handleOpenGameRules();
            });
        }
        return (
          (n.prototype.getOutboundEventCount = function (e) {
            return this._outboundEventCounter[e];
          }),
          (n.prototype.updateOutboundEventCounter = function (e) {
            return (
              this._outboundEventCounter[e]++, this.getOutboundEventCount(e)
            );
          }),
          (n.prototype.getInboundEventCount = function (e) {
            return this._inboundEventCounter[e];
          }),
          (n.prototype.updateInboundEventCounter = function (e) {
            return this._inboundEventCounter[e]++, this.getInboundEventCount(e);
          }),
          (n.prototype.handleEvent = function (e, t) {
            var n = this._inboundEventToMethodMap[e];
            return void 0 !== n && n(e, t);
          }),
          (n.prototype.gameLoading = function () {
            var e = t.JSOutboundEventIds.gameLoading;
            this.updateOutboundEventCounter(e),
              this._handleMessageFunc(e, {
                bridge: this,
                game: this._game,
                senderid: this._senderId,
              });
          }),
          (n.prototype.connectExternalGui = function () {
            var e = t.JSOutboundEventIds.connectExternalGui;
            if (
              0 === this._outboundEventCounter[t.JSOutboundEventIds.gameLoading]
            )
              throw "JSBridge.connectExternalGui: Function called before a call to JSBridge.gameLoading. This is not allowed!";
            this.updateOutboundEventCounter(e),
              this._handleMessageFunc(e, { senderid: this._senderId });
          }),
          (n.prototype.gameLoaded = function (e) {
            void 0 === e && (e = !0);
            var n = t.JSOutboundEventIds.gameLoaded;
            if (
              !e &&
              0 ===
                this._outboundEventCounter[
                  t.JSOutboundEventIds.connectExternalGui
                ]
            )
              throw "JSBridge.gameLoaded: Function called before a call to JSBridge.connectExternalGui. This is not allowed when using an externally supplied gui!";
            this.updateOutboundEventCounter(n),
              this._handleMessageFunc(n, { senderid: this._senderId });
          }),
          (n.prototype.gameConfigured = function (e) {
            var n = t.JSOutboundEventIds.gameConfigured;
            this.updateOutboundEventCounter(n),
              (e.senderid = this._senderId),
              this._handleMessageFunc(n, JSON.parse(JSON.stringify(e)));
          }),
          (n.prototype.gameInitialized = function (e) {
            var n = t.JSOutboundEventIds.gameInitialized;
            if (
              0 === this._outboundEventCounter[t.JSOutboundEventIds.gameLoaded]
            )
              throw "JSBridge.gameInitialized: Function called before a call to JSBridge.gameLoaded. This is not allowed!";
            this.updateOutboundEventCounter(n),
              (e.senderid = this._senderId),
              this._handleMessageFunc(n, e);
          }),
          (n.prototype.gameStarted = function () {
            var e = t.JSOutboundEventIds.gameStarted;
            if (
              0 ===
              this._outboundEventCounter[t.JSOutboundEventIds.gameInitialized]
            )
              throw "JSBridge.gameStarted: Function called before a call to JSBridge.gameInitialized. This is not allowed!";
            this.updateOutboundEventCounter(e),
              this._handleMessageFunc(e, { senderid: this._senderId });
          }),
          (n.prototype.featureWon = function (e) {
            var n = t.JSOutboundEventIds.featureWon;
            this.updateOutboundEventCounter(n);
            var o = { senderid: this._senderId, featureid: e };
            this._handleMessageFunc(n, o);
          }),
          (n.prototype.featureEntered = function (e) {
            var n = t.JSOutboundEventIds.featureEntered;
            this.updateOutboundEventCounter(n);
            var o = { senderid: this._senderId, featureid: e };
            this._handleMessageFunc(n, o);
          }),
          (n.prototype.featureExited = function (e, n, o) {
            var i = t.JSOutboundEventIds.featureExited;
            this.updateOutboundEventCounter(i);
            var a = {
              senderid: this._senderId,
              featureid: e,
              totalwin: n,
              totalbetmultiplier: o,
            };
            this._handleMessageFunc(i, a);
          }),
          (n.prototype.idleStateEntered = function () {
            var e = t.JSOutboundEventIds.idleStateEntered;
            if (
              0 === this._outboundEventCounter[t.JSOutboundEventIds.gameStarted]
            )
              throw "JSBridge.idleStateEntered: Function called before a call to JSBridge.gameStarted. This is not allowed!";
            this.updateOutboundEventCounter(e),
              this._handleMessageFunc(e, { senderid: this._senderId });
          }),
          (n.prototype.gamePlayPrevented = function () {
            (this._gamePlayHasBeenPrevented = !0),
              this._gamePlayPreventedStrategy();
          }),
          (n.prototype.roundStarted = function (e) {
            var n = t.JSOutboundEventIds.roundStarted;
            0 !==
              this._outboundEventCounter[t.JSOutboundEventIds.gameStarted] &&
              (this.updateOutboundEventCounter(n),
              this._outboundEventCounter[t.JSOutboundEventIds.roundStarted] ===
                this._outboundEventCounter[t.JSOutboundEventIds.roundEnded] +
                  1 &&
                ((e.senderid = this._senderId), this._handleMessageFunc(n, e)),
              (this._outboundEventCounter[
                t.JSOutboundEventIds.winPresentationComplete
              ] =
                this._outboundEventCounter[
                  t.JSOutboundEventIds.winPresentationStarted
                ]),
              (this._outboundEventCounter[t.JSOutboundEventIds.spinEnded] =
                this._outboundEventCounter[t.JSOutboundEventIds.spinStarted]));
          }),
          (n.prototype.roundEnded = function (e) {
            var n = t.JSOutboundEventIds.roundEnded;
            this._outboundEventCounter[t.JSOutboundEventIds.gameStarted],
              this.updateOutboundEventCounter(n),
              this._outboundEventCounter[t.JSOutboundEventIds.roundStarted] ===
                this._outboundEventCounter[t.JSOutboundEventIds.roundEnded] &&
                ((e.senderid = this._senderId), this._handleMessageFunc(n, e));
          }),
          (n.prototype.syncRoundStartedWithEnded = function () {
            (this._outboundEventCounter[t.JSOutboundEventIds.roundStarted] =
              this._outboundEventCounter[t.JSOutboundEventIds.roundEnded]),
              (this._outboundEventCounter[t.JSOutboundEventIds.spinEnded] =
                this._outboundEventCounter[t.JSOutboundEventIds.spinStarted]);
          }),
          (n.prototype.spinStarted = function (e) {
            var n = t.JSOutboundEventIds.spinStarted;
            this.updateOutboundEventCounter(n),
              (e.senderid = this._senderId),
              this._outboundEventCounter[t.JSOutboundEventIds.spinStarted] ===
                this._outboundEventCounter[t.JSOutboundEventIds.spinEnded] +
                  1 &&
                ((e.senderid = this._senderId), this._handleMessageFunc(n, e));
          }),
          (n.prototype.spinEnded = function (e) {
            var n = t.JSOutboundEventIds.spinEnded;
            this.updateOutboundEventCounter(n),
              this._outboundEventCounter[t.JSOutboundEventIds.spinStarted] ===
                this._outboundEventCounter[t.JSOutboundEventIds.spinEnded] &&
                ((e.senderid = this._senderId), this._handleMessageFunc(n, e));
          }),
          (n.prototype.showingPaylineWin = function (e) {}),
          (n.prototype.showingScatterWin = function (e) {}),
          (n.prototype.openExternalGameRules = function (e) {
            var n = t.JSOutboundEventIds.openExternalGameRules;
            this.updateOutboundEventCounter(n),
              (e.senderid = this._senderId),
              this._handleMessageFunc(n, e);
          }),
          (n.prototype.openExternalRealityCheck = function (n) {
            var o = t.JSOutboundEventIds.openExternalRealityCheck;
            this.updateOutboundEventCounter(o),
              (n = e.utils.combineObject({ senderid: this._senderId }, n)),
              this._handleMessageFunc(o, n);
          }),
          (n.prototype.openExternalHistoryPage = function () {
            var e = t.JSOutboundEventIds.openExternalHistory;
            this.updateOutboundEventCounter(e),
              this._handleMessageFunc(e, { senderid: this._senderId });
          }),
          (n.prototype.errorOccurred = function (e) {
            var n = t.JSOutboundEventIds.errorOccurred;
            this.updateOutboundEventCounter(n),
              (this._outboundEventCounter[t.JSOutboundEventIds.roundEnded] =
                this._outboundEventCounter[t.JSOutboundEventIds.roundStarted]),
              (e.senderid = this._senderId),
              (this._latestError = e),
              this._handleMessageFunc(n, e);
          }),
          (n.prototype.balanceChanged = function (e) {
            var n = t.JSOutboundEventIds.balanceChanged;
            this.updateOutboundEventCounter(n),
              (e.senderid = this._senderId),
              this._handleMessageFunc(n, e);
          }),
          (n.prototype.betChanged = function (e) {
            var n = t.JSOutboundEventIds.betChanged;
            this.updateOutboundEventCounter(n),
              (e.senderid = this._senderId),
              this._handleMessageFunc(n, e);
          }),
          (n.prototype.goBackToLobby = function (e) {
            var n = t.JSOutboundEventIds.goBackToLobby;
            this.updateOutboundEventCounter(n),
              (e.senderid = this._senderId),
              this._handleMessageFunc(n, e);
          }),
          (n.prototype.openLoginPage = function () {
            var e = t.JSOutboundEventIds.playForReal;
            this.updateOutboundEventCounter(e),
              this._handleMessageFunc(e, { senderid: this._senderId });
          }),
          (n.prototype.openDepositPage = function () {
            var e = t.JSOutboundEventIds.makeDeposit;
            this.updateOutboundEventCounter(e),
              this._handleMessageFunc(e, { senderid: this._senderId });
          }),
          (n.prototype.gamePlayAccepted = function () {
            var e = t.JSOutboundEventIds.gamePlayAccepted;
            this.updateOutboundEventCounter(e);
            var n = { senderid: this._senderId, time: Date.now() };
            this._handleMessageFunc(e, n);
          }),
          (n.prototype.gamePlayDeclined = function () {
            var e = t.JSOutboundEventIds.gamePlayDeclined;
            this.updateOutboundEventCounter(e);
            var n = { senderid: this._senderId, time: Date.now() };
            this._handleMessageFunc(e, n);
          }),
          (n.prototype.autoPlayStarted = function (e) {
            var n = t.JSOutboundEventIds.autoPlayStarted;
            this.updateOutboundEventCounter(n),
              (e.senderid = this._senderId),
              this._handleMessageFunc(n, e);
          }),
          (n.prototype.autoPlayStopped = function (e, n) {
            var o = t.JSOutboundEventIds.autoPlayStopped;
            this.updateOutboundEventCounter(o),
              this._handleMessageFunc(o, {
                senderid: this._senderId,
                autospins: e,
                reason: n,
              });
          }),
          (n.prototype.winPresentationStarted = function (e) {
            var n = t.JSOutboundEventIds.winPresentationStarted;
            this.updateOutboundEventCounter(n),
              this._outboundEventCounter[
                t.JSOutboundEventIds.winPresentationStarted
              ] ===
              this._outboundEventCounter[
                t.JSOutboundEventIds.winPresentationComplete
              ] +
                1
                ? ((e.senderid = this._senderId), this._handleMessageFunc(n, e))
                : (this._outboundEventCounter[
                    t.JSOutboundEventIds.winPresentationStarted
                  ] =
                    this._outboundEventCounter[
                      t.JSOutboundEventIds.winPresentationComplete
                    ]);
          }),
          (n.prototype.winPresentationComplete = function (e) {
            var n = t.JSOutboundEventIds.winPresentationComplete;
            this.updateOutboundEventCounter(n),
              this._outboundEventCounter[
                t.JSOutboundEventIds.winPresentationStarted
              ] ===
              this._outboundEventCounter[
                t.JSOutboundEventIds.winPresentationComplete
              ]
                ? ((e.senderid = this._senderId), this._handleMessageFunc(n, e))
                : (this._outboundEventCounter[
                    t.JSOutboundEventIds.winPresentationComplete
                  ] =
                    this._outboundEventCounter[
                      t.JSOutboundEventIds.winPresentationStarted
                    ]);
          }),
          (n.prototype.winPresentationAborted = function (e) {
            var n = t.JSOutboundEventIds.winPresentationAborted;
            this.updateOutboundEventCounter(n),
              this._handleMessageFunc(n, {
                gameover: e,
                senderid: this._senderId,
              });
          }),
          (n.prototype.restoreStateEntered = function () {
            var e = t.JSOutboundEventIds.restoreStateEntered;
            this.updateOutboundEventCounter(e),
              this._handleMessageFunc(e, { senderid: this._senderId });
          }),
          (n.prototype.restoreStateExited = function () {
            var e = t.JSOutboundEventIds.restoreStateExited;
            this.updateOutboundEventCounter(e),
              this._handleMessageFunc(e, { senderid: this._senderId });
          }),
          (n.prototype.sendGameSpecificOutboundEvent = function (e, t) {
            (t = t || {}),
              null == this._outboundEventCounter[e] &&
                (this._outboundEventCounter[e] = 0),
              this.updateOutboundEventCounter(e),
              (t.senderid = this._senderId),
              this._handleMessageFunc(e, t);
          }),
          (n.prototype.nearWinStarted = function () {
            var e = t.JSOutboundEventIds.nearWinStarted;
            this.updateOutboundEventCounter(e),
              this._handleMessageFunc(e, { senderid: this._senderId });
          }),
          (n.prototype.nearWinStopped = function () {
            var e = t.JSOutboundEventIds.nearWinStopped;
            this.updateOutboundEventCounter(e),
              this._handleMessageFunc(e, { senderid: this._senderId });
          }),
          (n.prototype.reelStarted = function (e) {
            var n = t.JSOutboundEventIds.reelStarted;
            this.updateOutboundEventCounter(n),
              this._handleMessageFunc(n, { reel: e, senderid: this._senderId });
          }),
          (n.prototype.reelStopped = function (e) {
            var n = t.JSOutboundEventIds.reelStopped;
            this.updateOutboundEventCounter(n),
              this._handleMessageFunc(n, { reel: e, senderid: this._senderId });
          }),
          (n.prototype.realityCheckTriggered = function (e) {
            var n = t.JSOutboundEventIds.realityCheckTriggered;
            (e.senderid = this._senderId),
              this.updateOutboundEventCounter(n),
              this._handleMessageFunc(n, e);
          }),
          (n.prototype.dialogOpened = function (e, n) {
            var o = t.JSOutboundEventIds.dialogOpened;
            this.updateOutboundEventCounter(o),
              this._handleMessageFunc(o, {
                dialogtype: e,
                senderid: this._senderId,
                info: n,
              });
          }),
          (n.prototype.dialogClosed = function (e) {
            var n = t.JSOutboundEventIds.dialogClosed;
            this.updateOutboundEventCounter(n),
              this._handleMessageFunc(n, {
                senderid: this._senderId,
                button: e,
              });
          }),
          (n.prototype.messageOpened = function (e) {
            var n = t.JSOutboundEventIds.messageOpened;
            this.updateOutboundEventCounter(n),
              this._handleMessageFunc(n, {
                senderid: this._senderId,
                messageid: e,
              });
          }),
          (n.prototype.messageOptionSelected = function (e, n) {
            var o = t.JSOutboundEventIds.messageOptionSelected;
            this.updateOutboundEventCounter(o),
              this._handleMessageFunc(o, {
                senderid: this._senderId,
                messageid: e,
                option: n,
              });
          }),
          (n.prototype.messageClosed = function (e) {
            var n = t.JSOutboundEventIds.messageClosed;
            this.updateOutboundEventCounter(n),
              this._handleMessageFunc(n, {
                senderid: this._senderId,
                messageid: e,
              });
          }),
          (n.prototype.reelsQuickStopped = function () {
            var e = t.JSOutboundEventIds.quickStopped;
            this.updateOutboundEventCounter(e),
              this._handleMessageFunc(e, { senderid: this._senderId });
          }),
          (n.prototype.gamePaused = function () {
            var e = t.JSOutboundEventIds.gamePaused;
            this.updateOutboundEventCounter(e),
              this._handleMessageFunc(e, { senderid: this._senderId });
          }),
          (n.prototype.gameResumed = function () {
            var e = t.JSOutboundEventIds.gameResumed;
            this.updateOutboundEventCounter(e),
              this._handleMessageFunc(e, { senderid: this._senderId });
          }),
          (n.prototype.transitionSkipped = function (e) {
            var n = t.JSOutboundEventIds.transitionSkipped;
            this.updateOutboundEventCounter(n),
              this._handleMessageFunc(n, {
                transition: e,
                senderid: this._senderId,
              });
          }),
          (n.prototype.soundEnabled = function () {
            var e = t.JSOutboundEventIds.soundSettingsChanged;
            this.updateOutboundEventCounter(e),
              this._handleMessageFunc(e, {
                enabled: !0,
                senderid: this._senderId,
              });
          }),
          (n.prototype.soundDisabled = function () {
            var e = t.JSOutboundEventIds.soundSettingsChanged;
            this.updateOutboundEventCounter(e),
              this._handleMessageFunc(e, {
                enabled: !1,
                senderid: this._senderId,
              });
          }),
          (n.prototype.messagesPending = function (e) {
            var n = t.JSOutboundEventIds.messagesPending;
            this.updateOutboundEventCounter(n),
              this._handleMessageFunc(n, { senderid: this._senderId, data: e });
          }),
          (n.prototype.messagesReceived = function (e) {
            var n = t.JSOutboundEventIds.messagesReceived;
            this.updateOutboundEventCounter(n),
              this._handleMessageFunc(n, { senderid: this._senderId, data: e });
          }),
          (n.prototype.playerCurrencyRetrieved = function (e) {
            var n = t.JSOutboundEventIds.getPlayerCurrency;
            this.updateOutboundEventCounter(n),
              this._handleMessageFunc(n, { senderid: this._senderId, data: e });
          }),
          (n.prototype.closingGameCauseRestoreStateResponse = function (e) {
            var n = t.JSOutboundEventIds.closingGameCauseRestoreStateResponse;
            this.updateOutboundEventCounter(n),
              this._handleMessageFunc(n, { senderid: this._senderId, data: e });
          }),
          (n.prototype.emitOcQueue = function (e) {
            var n = t.JSOutboundEventIds.emitOcQueue;
            this.updateOutboundEventCounter(n),
              this._handleMessageFunc(n, {
                senderid: this._senderId,
                data: e || null,
              });
          }),
          (n.prototype.preloaderProgress = function (e) {
            var n = t.JSOutboundEventIds.preloaderProgress;
            this.updateOutboundEventCounter(n),
              this._handleMessageFunc(n, {
                senderid: this._senderId,
                percentage: Math.min(100, e),
              });
          }),
          (n.prototype.freeRoundsEntered = function (e) {
            var n = t.JSOutboundEventIds.freeRoundsEntered;
            this.updateOutboundEventCounter(n), this._handleMessageFunc(n, e);
          }),
          (n.prototype.freeRoundsExited = function (e) {
            var n = t.JSOutboundEventIds.freeRoundsExited;
            this.updateOutboundEventCounter(n), this._handleMessageFunc(n, e);
          }),
          (n.prototype.gamePlayPermitted = function () {
            var e = t.JSOutboundEventIds.gamePlayPermitted;
            this.updateOutboundEventCounter(e),
              this._handleMessageFunc(e, { senderid: this._senderId });
          }),
          (n.prototype.startGame = function () {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.startGame
            ),
              this.onStartGame.dispatch();
          }),
          (n.prototype.changeBalance = function (t) {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.changeBalance
            ),
              this.onChangeClientBalance.dispatch(t);
          }),
          (n.prototype.pauseGame = function () {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.pauseGame
            ),
              this.onPauseGame.dispatch();
          }),
          (n.prototype.resumeGame = function () {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.resumeGame
            ),
              this.onResumeGame.dispatch();
          }),
          (n.prototype.setOperatorData = function (t) {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.setOperatorData
            ),
              this.onSetOperatorData.dispatch(t);
          }),
          (n.prototype.setExtraData = function (t) {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.setExtraData
            ),
              this.onSetExtraData.dispatch(t);
          }),
          (n.prototype.enableRealityCheck = function (t) {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.enableRealityCheck
            ),
              (t =
                e.jsintegration.data.verifyEnableRealityCheckDataIntegrity(t)),
              this.onEnableRealityCheck.dispatch(t);
          }),
          (n.prototype.externalRealityCheckClosed = function (t) {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.externalRealityCheckClosed
            ),
              this.onExternalRealityCheckClosed.dispatch(t);
          }),
          (n.prototype.shutDown = function () {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.shutDown
            ),
              this.onShutDownGame.dispatch();
          }),
          (n.prototype.externalGuiConnected = function (t) {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.connectExternalGui
            ),
              this.onExternalGuiConnected.dispatch(t);
          }),
          (n.prototype.resizeGame = function (e) {
            this.onResizeGame.dispatch(e.width, e.height);
          }),
          (n.prototype.forceOrientation = function (t) {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.forceOrientation
            ),
              "landscape" === t.orientation
                ? this.onForceOrientation.dispatch(
                    e.constants.OrientationEnum.LANDSCAPE
                  )
                : "portrait" === t.orientation &&
                  this.onForceOrientation.dispatch(
                    e.constants.OrientationEnum.PORTRAIT
                  );
          }),
          (n.prototype.updateSound = function (t) {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.updateSound
            ),
              this.onUpdateSound.dispatch(t);
          }),
          (n.prototype.updateAutoPlay = function (t) {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.updateAutoPlay
            ),
              this.onUpdateAutoPlay.dispatch(t);
          }),
          (n.prototype.stopAutoPlay = function () {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.stopAutoPlay
            ),
              this.onStopAutoPlay.dispatch();
          }),
          (n.prototype.changeValidBets = function (t) {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.changeValidBets
            ),
              this.onChangeValidBets.dispatch(t);
          }),
          (n.prototype.changeBet = function (t) {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.changeBet
            ),
              this.onChangeBet.dispatch(t);
          }),
          (n.prototype.showRealityCheck = function () {
            this.onShowRealityCheck.dispatch();
          }),
          (n.prototype.preventGamePlay = function (n) {
            var o = this;
            if (!0 === n) this.resumeGamePlay();
            else {
              if (
                (this.updateInboundEventCounter(
                  e.jsintegration.JSInboundEventIds.preventGamePlay
                ),
                !1 === this._game.gamePlayAllowed)
              )
                return void (
                  !0 === this._gamePlayHasBeenPrevented &&
                  this._handleMessageFunc(
                    t.JSOutboundEventIds.gamePlayPrevented,
                    { senderid: this._senderId }
                  )
                );
              (this._gamePlayPreventedStrategy = function () {
                var e = t.JSOutboundEventIds.gamePlayPrevented;
                o.updateOutboundEventCounter(e),
                  (o._gamePlayPreventedStrategy = function () {}),
                  o._handleMessageFunc(e, { senderid: o._senderId });
              }),
                this.onPreventGamePlay.dispatch();
            }
          }),
          (n.prototype.resumeGamePlay = function () {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.resumeGamePlay
            ),
              !0 !== this._game.gamePlayAllowed
                ? ((this._gamePlayHasBeenPrevented = !1),
                  this.onResumeGamePlay.dispatch(),
                  this._game.gamePlayAllowed && this.gamePlayPermitted())
                : this.gamePlayPermitted();
          }),
          (n.prototype.handleOpenPayTable = function () {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.openPayTable
            ),
              this.onOpenPayTable.dispatch();
          }),
          (n.prototype.handleOpenGameRules = function () {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.openGameRules
            ),
              this.onOpenGameRules.dispatch();
          }),
          (n.prototype.setGuiButtonOverrides = function (t, n) {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.updateGuiOverrides
            ),
              this.updateGuiButtonOverrides.dispatch(t, n);
          }),
          (n.prototype.closeDialog = function (t, n, o, i) {
            this.updateInboundEventCounter(
              e.jsintegration.JSInboundEventIds.closeDialog
            ),
              this.onCloseDialog.dispatch(t, n, o, i);
          }),
          (n.prototype.handleGetTranslation = function (e) {
            var n = this,
              o = t.JSInboundEventIds.getTranslation;
            this.updateInboundEventCounter(o);
            var i = {};
            return (
              e.forEach(function (e) {
                var t = n._game.languageSystem.getTranslatedPhrase(
                  e.phraseid,
                  e.params
                );
                i[e.phraseid] = t;
              }),
              this.sendGameSpecificOutboundEvent(
                t.JSOutboundEventIds.getTranslation,
                { senderid: this._senderId, phrases: i }
              ),
              i
            );
          }),
          (n.prototype.handleGetPlayerCurrency = function () {
            var e = t.JSInboundEventIds.getPlayerCurrency;
            this.updateInboundEventCounter(e),
              this.onGetPlayerCurrency.dispatch();
          }),
          (n.prototype.handleGetGameDimensions = function () {
            var e =
              this._gameWrapper ||
              (this._gameWrapper = document.getElementById("gameWrapper"));
            this.sendGameSpecificOutboundEvent(
              t.JSOutboundEventIds.getGameDimensions,
              {
                width: (e || { clientWidth: this._game.width || 0 })
                  .clientWidth,
                height: (e || { clientHeight: this._game.height || 0 })
                  .clientHeight,
                senderid: this._senderId,
              }
            );
          }),
          (n.prototype.handleMessageHandlingCompleteEvent = function () {
            this.onMessageHandlingComplete.dispatch();
          }),
          (n.prototype.handleGetInitGameDataEvent = function () {
            var e = t.JSOutboundEventIds.getInitGameData;
            this.updateInboundEventCounter(e),
              this.updateOutboundEventCounter(e),
              this._handleMessageFunc(e, {
                senderid: this._senderId,
                data: JSON.parse(JSON.stringify(this._game.initGameData)),
              });
          }),
          (n.prototype.handleClosingGameCausesRestoreState = function () {
            var e = t.JSInboundEventIds.closingGameCauseRestoreState;
            this.updateInboundEventCounter(e),
              this.onClosingGameCausesRestoreState.dispatch();
          }),
          (n.prototype.updateOC = function (e) {
            this.updateInboundEventCounter(
              t.JSInboundEventIds.updateOutcomeControlState
            ),
              this.onUpdateOC.dispatch(e);
          }),
          (n.prototype.emitOutcomeControlStateRequested = function () {
            this.updateInboundEventCounter(
              t.JSInboundEventIds.emitOutcomeControlState
            ),
              this.onGetOCState.dispatch();
          }),
          (n.prototype.initializeGame = function () {
            this.updateInboundEventCounter(t.JSInboundEventIds.initializeGame),
              this.onInitializeGame.dispatch();
          }),
          n
        );
      })();
      t.JSBridge = n;
    })(e.jsintegration || (e.jsintegration = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        var t = (function () {
          function e() {}
          return (
            (e.INSTIGATOR_PLAYER = "PLAYER"),
            (e.INSTIGATOR_GAME = "GAME"),
            (e.REASON_ERROR = "ERROR"),
            (e.REASON_LOBBY_BUTTON = "LOBBY_BUTTON"),
            (e.GAME_PLAY_DECLINED = "GAME_PLAY_DECLINED"),
            (e.DOWNLOAD_GAME_RULES_BUTTON = "DOWNLOAD_GAME_RULES"),
            (e.PLAY_FOR_REAL_BUTTON = "PLAY_FOR_REAL"),
            (e.DEPOSIT = "DEPOSIT"),
            e
          );
        })();
        e.BackToLobbyDataConstants = t;
      })(e.data || (e.data = {}));
    })(e.jsintegration || (e.jsintegration = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      (t.combineObject = function e(t, n) {
        var o = n;
        if (Array.isArray(n) || Array.isArray(t))
          o =
            null != t
              ? null != n
                ? t.concat(n)
                : t.concat()
              : null != n
              ? n.concat()
              : n;
        else {
          if (null != t)
            for (var i in ((o = {}), t))
              "object" == typeof t[i]
                ? (o[i] = e(t[i], void 0))
                : (o[i] = t[i]);
          if (null != n)
            for (var i in (null == o && (o = {}), n))
              "object" == typeof n[i]
                ? (o[i] = null != t ? e(t[i], n[i]) : e(n[i], void 0))
                : (o[i] = n[i]);
        }
        return o;
      }),
        (t.copyProperties = function (t, n, o) {
          if ((void 0 === o && (o = !1), n))
            for (var i in n)
              if ("object" == typeof n[i])
                if (void 0 === n[i]) o || (t[i] = n[i]);
                else if (null === n[i]) t[i] = n[i];
                else if (Array.isArray(n[i]) || Array.isArray(t[i]))
                  t[i] = n[i];
                else {
                  var a = e.utils.copyProperties(t[i] || {}, n[i], o);
                  t[i] = a;
                }
              else (void 0 === n[i] && o) || (t[i] = n[i]);
          return t;
        }),
        (t.deleteUndefinedProperties = function (t) {
          if (t)
            for (var n in t)
              if ("object" == typeof t[n])
                if (Array.isArray(t[n]))
                  for (var o = 0; o < t[n].length; o++) {
                    var i = t[n][o];
                    e.utils.deleteUndefinedProperties(i);
                  }
                else e.utils.deleteUndefinedProperties(t[n]);
              else void 0 === t[n] && delete t[n];
        }),
        (t.iterateOverLeaves = function (t, n) {
          if (t)
            for (var o in t) {
              var i = t[o];
              if ("object" == typeof i)
                if (Array.isArray(i))
                  for (var a = 0; a < i.length; a++) {
                    var r = i[a];
                    i[a] = n(i, a, r);
                  }
                else e.utils.iterateOverLeaves(i, n);
              else t[o] = n(t, o, i);
            }
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      (t.data || (t.data = {})).verifyEnableRealityCheckDataIntegrity =
        function (t) {
          var n = {
            enabled: !1,
            externaldialog: !1,
            idleresetinterval: 240,
            initialcheckinterval: 3600,
            regularcheckinterval: 3600,
            playtime: 0,
            totalbetatstart: 0,
            totalwinatstart: 0,
            gameroundsplayed: 0,
            dialogsettings: {
              titlePhraseId: void 0,
              wonPhraseId: void 0,
              lostPhraseId: void 0,
              accountButtonPhraseId: void 0,
              useLogOutButton: !1,
            },
          };
          return (n = e.utils.combineObject(n, t));
        };
    })(e.jsintegration || (e.jsintegration = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        function n(t) {
          var n = new Date().getTime();
          return {
            regulator: "MGA",
            systemurl:
              "http://home.thunderkick.com/thunderkick/services-ext-dev.json",
            gameserviceurl: void 0,
            playersessionid: null,
            authenticationtoken: null,
            gameid: t,
            gameinstanceid:
              null != t ? t + "-instance-" + n : "tk-game-instance-" + n,
            operatorid: e.constants.OperatorIds.Thunderkick,
            assetsbaseurl: "assets",
            localesurl: null,
            localesvariant: "any",
            handlemessagefunc: window.handleMessage,
            showbacktolobbybutton: !0,
            showdepositlink: !1,
            showhistorylink: !1,
            allowingamehistory: !0,
            ignorerestorestates: !1,
            allowfullscreen: !0,
            sendkeepalives: !0,
            keepaliveinterval: 240,
            allowreplaysharing: !1,
            showerrornotifications: !0,
            autostartfreerounds: !1,
            showsubtitles: !0,
            playforfree: !0,
            pauseiffocuslost: !1,
            localhostisspecial: !0,
            allowautoplay: !0,
            enablelogging: !1,
            loggingserviceurl: "https://metrics.thunderkick.com",
            responsiblegaminglink: void 0,
            developmentmode: !1,
            enablerealitycheck: !1,
            realitycheckdata: {
              enabled: !1,
              regularcheckinterval: 3600,
              initialcheckinterval: 3600,
              idleresetinterval: 300,
              playtime: 0,
              totalbetatstart: 0,
              totalwinatstart: 0,
              externaldialog: !1,
              gameroundsplayed: 0,
            },
            allowkeyboardinput: !0,
            showlogindialog: !1,
            clientversion: "?",
            lowresmode: !1,
            allowresoverride: !0,
            usedesktopgui: void 0,
            requireautoplaylosslimit: !1,
            showadvancedautoplaysettings: !1,
            distributionchannel: void 0,
            regulationdisclaimer: void 0,
            allowwwajax: !0,
            maxbetlimit: void 0,
            handleplayermessagesexternally: !1,
            externalloader: !1,
            alwaysplacebet: !0,
            allowedguielements: { fields: {}, buttons: {} },
            currencyconfig: {
              currencysign: void 0,
              showcurrency: !0,
              decimalplaces: void 0,
            },
            animationspeed: "normal",
            allowedanimationspeeds: { normal: !0, fast: !0 },
            externalerrorhandling: !1,
            externaldialoghandling: !1,
            awaitinitializecall: !1,
            splashscreensallowed: !0,
            idempotency: !1,
            allowlocalstorage: !0,
          };
        }
        (t.createDefaultInitGameDataObject = n),
          (t.combineInitGameDataSets = function (e, t) {
            var o = n();
            for (var i in e) void 0 !== e[i] && (o[i] = e[i]);
            for (var i in t) void 0 !== t[i] && (o[i] = t[i]);
            return o;
          });
      })(t.data || (t.data = {}));
    })(e.jsintegration || (e.jsintegration = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = (function () {
        function t() {
          (this.onDirtyPhrasesUpdated = new e.utils.Signal1()),
            (this._activeLanguagePhraseCollection = {}),
            (this._cachedParameters = {}),
            (this._cachedPhrases = {}),
            (this._dirtyParameters = { start: null, end: null }),
            (this._dirtyPhrases = { start: null, end: null });
        }
        return (
          (t.prototype.setActiveLanguage = function (e, t) {
            (this.activeLanguageIso = e),
              (this._activeLanguagePhraseCollection = t),
              this.buildPhraseCache();
          }),
          (t.prototype.addPhraseChangedListener = function (e, t) {
            this.getCacheEntry(e).changeSignal.add(t);
          }),
          (t.prototype.removePhraseChangedListener = function (e, t) {
            this.getCacheEntry(e).changeSignal.remove(t);
          }),
          (t.prototype.replacePhraseContent = function (e, t) {
            if (
              ((this._activeLanguagePhraseCollection[e] = t),
              void 0 !== this._cachedPhrases[e])
            ) {
              var n = this.getCacheEntry(e),
                o = {
                  cachedValue: t,
                  parametersInUse: this.findParametersInPhrase(t, e),
                  isDirty: !0,
                  changeSignal: n.changeSignal,
                };
              this.markPhraseDirty(e), (this._cachedPhrases[e] = o);
            } else this.addPhrase(e, t);
            this.updatePhraseContent(e);
          }),
          (t.prototype.addPhrase = function (e, t) {
            (this.getCacheEntry(e, t).cachedValue = t),
              this.markPhraseDirty(e),
              this.updatePhraseContent(e);
          }),
          (t.prototype.getCacheEntry = function (t, n) {
            if (void 0 === this._cachedPhrases[t]) {
              var o = {
                cachedValue: n,
                parametersInUse: this.findParametersInPhrase(n, t),
                isDirty: !0,
                changeSignal: new e.utils.Signal2(),
              };
              this.markPhraseDirty(t), (this._cachedPhrases[t] = o);
            }
            return this._cachedPhrases[t];
          }),
          (t.prototype.getPhraseContent = function (e, t) {
            return (
              void 0 === t && (t = !1),
              null == this._cachedPhrases[e]
                ? t
                  ? e
                  : "MISSING_PHRASE(" + e + ")"
                : this._cachedPhrases[e].cachedValue
            );
          }),
          (t.prototype.getRawPhrase = function (e) {
            return this._activeLanguagePhraseCollection[e];
          }),
          (t.prototype.getParameterValue = function (e) {
            return this.getCachedParameter(e).cachedValue;
          }),
          (t.prototype.getCachedParameter = function (e) {
            return (
              null == this._cachedParameters[e] &&
                this.setParameterValue(
                  e,
                  "UNSET_PARAMETER_VALUE(" + e + ")",
                  !1
                ),
              this._cachedParameters[e]
            );
          }),
          (t.prototype.setParameterValue = function (e, t, n) {
            void 0 === n && (n = !1),
              this.setParameterValueInternal(e, t),
              n && this.updateAllDirtyEntries();
          }),
          (t.prototype.setParameterValueInternal = function (e, t, n) {
            var o = this._cachedParameters[e];
            null == o
              ? ((this._cachedParameters[e] = o =
                  {
                    baseValue: t,
                    cachedValue: t,
                    phrasesUsingThis: null != n ? [n] : [],
                    isDirty: !0,
                    overrides: [],
                  }),
                this.markParameterDirty(e))
              : ((o.baseValue = t),
                (o.isDirty = !0),
                this.markParameterDirty(e),
                null != n && o.phrasesUsingThis.push(n));
          }),
          (t.prototype.findParametersInPhrase = function (e, t) {
            var n,
              o = new RegExp("{[a-zA-Z0-9_]*?}", "g"),
              i = [];
            do {
              if (null != (n = o.exec(e))) {
                var a = n[0];
                a = a.substr(1, a.length - 2);
                var r = this._cachedParameters[a];
                null == r
                  ? this.setParameterValueInternal(
                      a,
                      "UNSET_PARAMETER_VALUE(" + a + ")",
                      t
                    )
                  : -1 === r.phrasesUsingThis.indexOf(t) &&
                    r.phrasesUsingThis.push(t),
                  i.push(a);
              }
            } while (null != n);
            return i;
          }),
          (t.prototype.buildPhraseCache = function () {
            for (var e in this._activeLanguagePhraseCollection) {
              var t = this._activeLanguagePhraseCollection[e];
              this.addPhrase(e, t);
            }
          }),
          (t.prototype.addParameterValueOverride = function (e, t, n) {
            var o = this.getCachedParameter(e);
            o.overrides.push({ overrideKey: t, overrideFunc: n }),
              (o.isDirty = !0),
              this.markParameterDirty(e);
          }),
          (t.prototype.removeParameterValueOverride = function (e, t) {
            for (
              var n = this.getCachedParameter(e), o = 0;
              o < n.overrides.length;
              o++
            ) {
              n.overrides[o].overrideKey == t &&
                (n.overrides.splice(o, 1), (o -= 1));
            }
            (n.isDirty = !0), this.markParameterDirty(e);
          }),
          (t.prototype.updateAllDirtyEntries = function () {
            var e = this._dirtyParameters.start;
            for (
              this._dirtyParameters.start = null,
                this._dirtyParameters.end = null;
              null != e;

            ) {
              var t = e.data,
                n = this._cachedParameters[t];
              if (!0 === n.isDirty) {
                "function" !== typeof n.baseValue && (n.isDirty = !1),
                  (n = this.updateParameterValue(t));
                for (var o = 0; o < n.phrasesUsingThis.length; o++) {
                  var i = n.phrasesUsingThis[o];
                  (this._cachedPhrases[i].isDirty = !0),
                    this.markPhraseDirty(i);
                }
              }
              e = e.next;
            }
            var a = this._dirtyPhrases.start;
            (this._dirtyPhrases.start = null), (this._dirtyPhrases.end = null);
            for (var r = null; null != a; ) {
              var s = a.data,
                u = this._cachedPhrases[s];
              u.isDirty &&
                ((u.isDirty = !1),
                (r = null !== r ? r : []).push(s),
                this.updatePhraseContent(s)),
                (a = a.next);
            }
            null !== r && this.onDirtyPhrasesUpdated.dispatch(r);
          }),
          (t.prototype.updateAllEntries = function () {
            var e = [];
            for (var t in this._cachedPhrases) e.push(t);
            this.onDirtyPhrasesUpdated.dispatch(e);
          }),
          (t.prototype.updateParameterValue = function (e) {
            var t = this._cachedParameters[e];
            null == t.baseValue && (t.baseValue = "");
            var n =
              "function" == typeof t.baseValue
                ? t.baseValue(e).toString()
                : t.baseValue.toString();
            if (t.overrides.length > 0) {
              var o = t.overrides[t.overrides.length - 1].overrideFunc(e, n);
              t.cachedValue = o;
            } else t.cachedValue = n;
            return t;
          }),
          (t.prototype.updatePhraseContent = function (e) {
            var t = this._cachedPhrases[e];
            t.cachedValue = this._activeLanguagePhraseCollection[e];
            for (
              var n = t.cachedValue, o = 0;
              o < t.parametersInUse.length;
              o++
            ) {
              var i = t.parametersInUse[o],
                a = this.getParameterValue(i);
              n = n.replace(
                new RegExp("{" + t.parametersInUse[o] + "}", "g"),
                a
              );
            }
            (t.cachedValue = n),
              t.changeSignal.dispatch(e, this.getPhraseContent(e));
          }),
          (t.prototype.markPhraseDirty = function (e) {
            null == this._dirtyPhrases.start
              ? ((this._dirtyPhrases.start = { data: e, next: null }),
                (this._dirtyPhrases.end = this._dirtyPhrases.start))
              : ((this._dirtyPhrases.end.next = { data: e, next: null }),
                (this._dirtyPhrases.end = this._dirtyPhrases.end.next));
          }),
          (t.prototype.markParameterDirty = function (e) {
            null == this._dirtyParameters.start
              ? ((this._dirtyParameters.start = { data: e, next: null }),
                (this._dirtyParameters.end = this._dirtyParameters.start))
              : ((this._dirtyParameters.end.next = { data: e, next: null }),
                (this._dirtyParameters.end = this._dirtyParameters.end.next));
          }),
          (t.prototype.getTranslatedPhrase = function (e, t) {
            t = t || {};
            var n = void 0,
              o = this._cachedPhrases[e];
            if (null != o) {
              n = this._activeLanguagePhraseCollection[e];
              for (var i = 0; i < o.parametersInUse.length; i++) {
                var a = o.parametersInUse[i],
                  r = t[a];
                null == r && (r = "" + this.getParameterValue(a)),
                  (n = n.replace(
                    new RegExp("{" + o.parametersInUse[i] + "}", "g"),
                    "" + r
                  ));
              }
            }
            return n;
          }),
          t
        );
      })();
      t.LanguageSystem = n;
    })(e.localization || (e.localization = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = (function () {
        function t(n, o, i) {
          (this.url = n),
            (this._webWorkerSrc = o),
            -1 != t._failedWebWorkerSrcs.indexOf(o) &&
              (this._webWorkerSrc = void 0),
            (this.onError = new e.utils.Signal3()),
            (this.onResponseReceived = new e.utils.Signal2()),
            (this._deserializer = i);
        }
        return (
          Object.defineProperty(t.prototype, "requestObject", {
            get: function () {
              return this._requestData;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.sendRequest = function (n, o) {
            if ((void 0 === o && (o = 1), 1 == this._dataAlreadySent))
              throw "GameServerActivityPost.sendRequest: Instance has already sent its data.";
            (this._requestData = e.utils.QueryStringHelper.readUrlParameters(
              this.url,
              !1
            )),
              (this._dataAlreadySent = !0);
            var i = this;
            if (window.Worker && null != this._webWorkerSrc)
              try {
                return void this.makeWebWorkerRequest(this.url, n);
              } catch (e) {
                if (
                  (t._failedWebWorkerSrcs.push(i._webWorkerSrc),
                  -1 != t._workingWebWorkerSrcs.indexOf(i._webWorkerSrc))
                )
                  return void (i._webWorkerSrc = void 0);
                i._webWorkerSrc = void 0;
              }
            jQuery
              .get(i.url)
              .done(function (e, t, n) {
                i.handleXHRResponse(e, t, n);
              })
              .fail(function (e, t, n) {
                i.handleFailure(e, t, n);
              });
          }),
          (t.prototype.handleXHRResponse = function (e, t, n) {
            this.responseReceived = e;
            try {
              this.responseObject = this._deserializer.deserialize(e);
            } catch (e) {
              return (
                this.onResponseReceived.removeAll(),
                void this.onError.dispatch(
                  this,
                  this.responseReceived,
                  "Could not parse response data"
                )
              );
            }
            this.onError.removeAll(),
              this.onResponseReceived.dispatch(this, this.responseObject);
          }),
          (t.prototype.handleFailure = function (e, t, n) {
            clearTimeout(this._timeoutId),
              this.onResponseReceived.removeAll(),
              this.onError.dispatch(this, t, n);
          }),
          (t.prototype.makeWebWorkerRequest = function (e, n) {
            var o = this,
              i = this,
              a = new Blob([this._webWorkerSrc], {
                type: "application/javascript",
              }),
              r = new Worker(URL.createObjectURL(a));
            r.addEventListener("message", function (e) {
              return o.handleWebWorkerMessage(e);
            }),
              r.addEventListener("error", function (e) {
                r.terminate(),
                  -1 == t._workingWebWorkerSrcs.indexOf(i._webWorkerSrc)
                    ? ((i._webWorkerSrc = void 0),
                      jQuery
                        .post(i.url, n)
                        .done(i.handleXHRResponse.bind(i))
                        .fail(i.handleFailure.bind(i)))
                    : (i._webWorkerSrc = void 0);
              }),
              r.postMessage({ type: "GET", url: e });
          }),
          (t.prototype.handleWebWorkerMessage = function (e) {
            -1 === t._workingWebWorkerSrcs.indexOf(this._webWorkerSrc) &&
              t._workingWebWorkerSrcs.push(this._webWorkerSrc);
            var n = e.data,
              o = this;
            setTimeout(function () {
              o.responseReceived = n;
              try {
                o.responseObject = o._deserializer.deserialize(n);
              } catch (e) {
                return (
                  o.onResponseReceived.removeAll(),
                  void o.onError.dispatch(
                    o,
                    o.responseReceived,
                    "Could not parse response data"
                  )
                );
              }
              o.onError.removeAll(),
                o.onResponseReceived.dispatch(o, o.responseObject);
            }, 1);
          }),
          (t._failedWebWorkerSrcs = []),
          (t._workingWebWorkerSrcs = []),
          t
        );
      })();
      t.GameServerActivityGet = n;
    })(e.net || (e.net = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      e.net.onComStatusChange = new e.utils.Signal1();
      var n = (function () {
        function t() {
          (this._outstandingRequests = []),
            (this.onComStatusChange = e.net.onComStatusChange);
        }
        return (
          (t.getInstance = function () {
            return (
              null == e.net.ComTracker._instance &&
                (e.net.ComTracker._instance = new e.net.ComTracker()),
              e.net.ComTracker._instance
            );
          }),
          (t.prototype.requestSent = function (e) {
            for (var t = 0; t < this._outstandingRequests.length; t++)
              if (this._outstandingRequests[t].sender === e)
                return (
                  this._outstandingRequests[t].count++,
                  void this.onComStatusChange.dispatch(!0)
                );
            this._outstandingRequests.push({ sender: e, count: 1 }),
              this.onComStatusChange.dispatch(!0);
          }),
          (t.prototype.requestReceived = function (e) {
            for (
              var t = !1, n = this._outstandingRequests.length - 1;
              n >= 0;
              n--
            )
              this._outstandingRequests[n].sender === e &&
                this._outstandingRequests[n].count--,
                this._outstandingRequests[n].count > 0
                  ? (t = !0)
                  : this._outstandingRequests.splice(n, 1);
            this.onComStatusChange.dispatch(t);
          }),
          t
        );
      })();
      t.ComTracker = n;
    })(e.net || (e.net = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = (function () {
        function t(t, n, o, i, a) {
          (this._errorSent = !1),
            (this._attemptsLeft = 1),
            (this.url = t),
            (this._webWorkerSrc = n),
            (this._dataValidityCheck =
              a ||
              function (e) {
                return !0;
              }),
            this.isWebWorkerMarkedAsFailed(n) && (this._webWorkerSrc = void 0),
            (this._dataReceived = !1),
            (this._attemptsMade = 0),
            (this._requestResponsePairs = []),
            (this.onError = new e.utils.Signal3()),
            (this.onResponseReceived = new e.utils.Signal2()),
            (this._serializer = o),
            (this._deserializer = i);
        }
        return (
          (t.prototype.sendRequest = function (n, o) {
            var i = this;
            if ((void 0 === o && (o = 1), 1 == this._dataAlreadySent))
              throw "GameServerActivityPost.sendRequest: Instance has already sent its data.";
            e.net.ComTracker.getInstance().requestSent(this),
              (this._dataAlreadySent = !0),
              (this.requestObject = n),
              (this._attemptsLeft = o),
              (this._requestTimeStamp = new Date().getTime());
            try {
              this.requestSent = this._serializer.serialize(this.requestObject);
            } catch (t) {
              return (
                (this._errorSent = !0),
                e.net.ComTracker.getInstance().requestReceived(this),
                void this.onError.dispatch(
                  this,
                  this.responseReceived,
                  "Could not parse response data"
                )
              );
            }
            var a = 1 === o ? t.DEFAULT_TIME_OUT_MS : 5e3;
            clearInterval(this._timeOutIntervalId);
            (this._timeOutIntervalId = setInterval(function () {
              i.handleGlobalTimeOut();
            }, window._tk_retry_interval || a)),
              this.sendRequestInternal(a);
          }),
          (t.prototype.sendRequestInternal = function (e) {
            this._attemptsMade++, this._attemptsLeft--;
            null == this._urid &&
              (this._urid =
                this._requestTimeStamp +
                "-" +
                Math.random() +
                "-" +
                Math.random());
            var t = this.url;
            if (
              (-1 != this.url.indexOf("?")
                ? (t += "&urid=" + this._urid)
                : (t += "?urid=" + this._urid),
              window.Worker && null != this._webWorkerSrc)
            )
              try {
                return void this.makeWebWorkerRequest(t, this.requestSent, e);
              } catch (e) {
                if (
                  (this.markWebWorkerAsFailed(this._webWorkerSrc),
                  this.isWebWorkerMarkedAsWorking())
                )
                  return void (this._webWorkerSrc = void 0);
                this._webWorkerSrc = void 0;
              }
            this.performJqueryFallback(this, t, e);
          }),
          (t.prototype.performJqueryFallback = function (e, t, n) {
            var o = this,
              i = setTimeout(function () {
                return o.handleGlobalTimeOut();
              }, n),
              a = {
                req: this.requestSent,
                res: null,
                done: !1,
                attempt: this._attemptsMade,
                timeOutId: i,
                error: null,
              };
            this._requestResponsePairs.push(a),
              jQuery
                .post(t, this.requestSent)
                .done(function (t, n, o) {
                  e.handleDataReceived(t, n, o, a);
                })
                .fail(function (t, n) {
                  e.handleFailure(t, n, a);
                });
          }),
          (t.prototype.isWebWorkerMarkedAsWorking = function () {
            return -1 != t._workingWebWorkerSrcs.indexOf(this._webWorkerSrc);
          }),
          (t.prototype.markWebWorkerAsFailed = function (e) {
            t._failedWebWorkerSrcs.push(e);
          }),
          (t.prototype.makeWebWorkerRequest = function (e, t, n) {
            var o = this,
              i = this,
              a = new Blob([this._webWorkerSrc], {
                type: "application/javascript",
              }),
              r = new Worker(URL.createObjectURL(a)),
              s = { res: null, done: !1, timeOutId: null };
            setTimeout(function () {
              clearTimeout(s.timeOutId), (s.done = !0);
            }, n),
              this._requestResponsePairs.push(s),
              r.addEventListener("message", function (e) {
                return o.handleWebWorkerMessage(e, s, r);
              }),
              r.addEventListener("error", function (t) {
                setTimeout(function () {
                  o.markWebWorkerAsFailed(i._webWorkerSrc),
                    r.terminate(),
                    o.isWebWorkerMarkedAsWorking()
                      ? (i._webWorkerSrc = void 0)
                      : ((i._webWorkerSrc = void 0),
                        jQuery
                          .post(e, i.requestSent)
                          .done(function (e, t, n) {
                            i.handleDataReceived(e, t, n, s);
                          })
                          .fail(function (e, t) {
                            i.handleFailure.bind(i);
                          }));
                }, 1);
              }),
              r.postMessage({ type: "POST", url: e, data: t });
          }),
          (t.prototype.handleWebWorkerMessage = function (t, n, o) {
            var i = this;
            0 == this.isWebWorkerMarkedAsWorking() &&
              this.markWebWorkerAsWorking(this._webWorkerSrc);
            var a = t.data.response,
              r = t.data.status;
            clearTimeout(n.timeOutId), (n.done = !0), (n.res = a);
            var s = this;
            o.terminate(),
              "" === a
                ? setTimeout(function () {
                    !0 !== s._errorSent &&
                      !0 !== s._dataReceived &&
                      s.handleFailure("", r, n);
                  }, 1)
                : setTimeout(function () {
                    if (!0 !== s._errorSent && !0 !== s._dataReceived) {
                      try {
                        var t = s._deserializer.deserialize(a);
                      } catch (t) {
                        return (
                          e.net.ComTracker.getInstance().requestReceived(s),
                          (s.timeBetweenRequestAndResponse =
                            new Date().getTime() - s._requestTimeStamp),
                          s.onResponseReceived.removeAll(),
                          (s._errorSent = !0),
                          void s.onError.dispatch(
                            i,
                            s.responseReceived,
                            "Could not parse response data"
                          )
                        );
                      }
                      (s.responseObject = t || s.responseObject),
                        i._dataValidityCheck(t)
                          ? (e.net.ComTracker.getInstance().requestReceived(s),
                            (s._dataReceived = !0),
                            (s.timeBetweenRequestAndResponse =
                              new Date().getTime() - s._requestTimeStamp),
                            (s.responseReceived = a),
                            s.onError.removeAll(),
                            s.onResponseReceived.dispatch(s, s.responseObject))
                          : ((i._waitForDone = !0),
                            0 === s._attemptsLeft &&
                              i.checkIfAllDone() &&
                              i.handleGlobalTimeOut());
                    }
                  }, 1);
          }),
          (t.prototype.handleFailure = function (t, n, o) {
            clearTimeout(o.timeOutId),
              (o.done = !0),
              (o.res = t),
              !0 !== this._errorSent &&
                !0 !== this._dataReceived &&
                (this._waitForDone
                  ? this.checkIfAllDone() &&
                    (clearInterval(this._timeOutIntervalId),
                    (this.timeBetweenRequestAndResponse =
                      new Date().getTime() - this._requestTimeStamp),
                    e.net.ComTracker.getInstance().requestReceived(this),
                    this.onError.removeAll(),
                    this.onResponseReceived.dispatch(this, this.responseObject))
                  : 0 === this._attemptsLeft &&
                    this.checkIfAllDone() &&
                    this.handleGlobalTimeOut());
          }),
          (t.prototype.handleDataReceived = function (t, n, o, i) {
            if (
              (clearTimeout(i.timeOutId),
              (i.done = !0),
              (i.res = t),
              !0 !== this._errorSent && !0 !== this._dataReceived)
            )
              try {
                var a = this._deserializer.deserialize(t);
                (this.responseObject = a || this.responseObject),
                  this._dataValidityCheck(a)
                    ? ((this._dataReceived = !0),
                      (this.responseObject = a),
                      (this.timeBetweenRequestAndResponse =
                        new Date().getTime() - this._requestTimeStamp),
                      this.onError.removeAll(),
                      e.net.ComTracker.getInstance().requestReceived(this),
                      this.onResponseReceived.dispatch(
                        this,
                        this.responseObject
                      ))
                    : ((this._waitForDone = !0),
                      0 === this._attemptsLeft &&
                        this.checkIfAllDone() &&
                        this.handleGlobalTimeOut());
              } catch (e) {}
          }),
          (t.prototype.handleGlobalTimeOut = function () {
            var t = this;
            !0 !== this._errorSent && !0 !== this._dataReceived
              ? this._waitForDone
                ? this.checkIfAllDone() &&
                  (e.net.ComTracker.getInstance().requestReceived(this),
                  (this.timeBetweenRequestAndResponse =
                    new Date().getTime() - this._requestTimeStamp),
                  clearInterval(this._timeOutIntervalId),
                  (this._dataReceived = !0),
                  this.onResponseReceived.dispatch(this, this.responseObject))
                : this._attemptsLeft > 0
                ? setTimeout(function () {
                    return t.sendRequestInternal(5e3);
                  }, 1)
                : (e.net.ComTracker.getInstance().requestReceived(this),
                  (this.timeBetweenRequestAndResponse =
                    new Date().getTime() - this._requestTimeStamp),
                  clearInterval(this._timeOutIntervalId),
                  (this._errorSent = !0),
                  this.onError.dispatch(
                    this,
                    "Server time out",
                    tk.gs.rs.e.ServerErrorCodes.SERVER_NOT_RESPONDING
                  ))
              : clearInterval(this._timeOutIntervalId);
          }),
          (t.prototype.markWebWorkerAsWorking = function (e) {
            t._workingWebWorkerSrcs.push(e);
          }),
          (t.prototype.isWebWorkerMarkedAsFailed = function (e) {
            return -1 != t._failedWebWorkerSrcs.indexOf(e);
          }),
          (t.prototype.checkIfAllDone = function () {
            for (var e = 0; e < this._requestResponsePairs.length; e++) {
              if (!1 === this._requestResponsePairs[e].done) return !1;
            }
            return !0;
          }),
          (t.DEFAULT_TIME_OUT_MS = 3e4),
          (t._failedWebWorkerSrcs = []),
          (t._workingWebWorkerSrcs = []),
          t
        );
      })();
      t.GameServerActivityPost = n;
    })(e.net || (e.net = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {}
        return (
          (e.prototype.serialize = function (e) {
            return JSON.stringify(e);
          }),
          e
        );
      })();
      e.GameServerRequestSerializerJson = t;
      var n = (function () {
        function e() {}
        return (
          (e.prototype.deserialize = function (e) {
            return "object" == typeof e ? e : JSON.parse(e);
          }),
          e
        );
      })();
      e.GameServerResponseDeserializerJson = n;
    })(e.net || (e.net = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = (function () {
        function t(t, n) {
          void 0 === n && (n = void 0),
            (this._url = t),
            (this._webWorkerSrc = n),
            (this._serializer = new e.net.GameServerRequestSerializerJson()),
            (this._deserializer =
              new e.net.GameServerResponseDeserializerJson());
        }
        return (
          (t.prototype.createPostActivity = function (n) {
            return new e.net.GameServerActivityPost(
              this._url,
              t.allowWebWorkers ? this._webWorkerSrc : null,
              this._serializer,
              this._deserializer,
              n
            );
          }),
          (t.prototype.createGetActivity = function () {
            return new e.net.GameServerActivityGet(
              this._url,
              t.allowWebWorkers ? this._webWorkerSrc : null,
              this._deserializer
            );
          }),
          (t.allowWebWorkers = !0),
          t
        );
      })();
      t.ServerConnectionHttp = n;
    })(e.net || (e.net = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = (function () {
        function t() {
          (this._running = !1),
            (this._stopped = !1),
            (this._name = null),
            (this.onComplete = new e.utils.Signal1()),
            (this.onStopped = new e.utils.Signal1());
        }
        return (
          (t.getRunningItems = function () {
            return t._runningItems;
          }),
          (t.prototype.isRunning = function () {
            return this._running;
          }),
          Object.defineProperty(t.prototype, "stopped", {
            get: function () {
              return this._stopped;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "name", {
            get: function () {
              return this._name;
            },
            set: function (e) {
              this._name = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.start = function () {
            1 != this._running &&
              (t._runningItems.push(this),
              (this._stopped = !1),
              (this._running = !0),
              this.startInternal());
          }),
          (t.prototype.stop = function () {
            0 != this._running &&
              1 != this._stopped &&
              ((this._stopped = !0), this.stopInternal());
          }),
          (t.prototype.startInternal = function () {}),
          (t.prototype.stopInternal = function () {}),
          (t.prototype.handleItemStopped = function () {
            (this._running = !1),
              t._runningItems.splice(t._runningItems.indexOf(this), 1),
              this.onStopped.dispatch(this);
          }),
          (t.prototype.handleItemCompleted = function () {
            (this._running = !1),
              1 == this._stopped
                ? this.onStopped.dispatch(this)
                : this.onComplete.dispatch(this);
          }),
          (t._runningItems = []),
          t
        );
      })();
      t.AbstractSequenceItem = n;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t() {
          var t = e.call(this) || this;
          return (
            (t._itemsStarted = -1),
            (t._itemsRunning = -1),
            (t._itemsCompleted = 0),
            (t.items = []),
            t
          );
        }
        return (
          __extends(t, e),
          (t.prototype.startInternal = function () {
            if (
              ((this._itemsStarted = 0),
              (this._itemsRunning = 0),
              (this._itemsCompleted = 0),
              0 !== this.items.length)
            )
              for (var e = 0; e < this.items.length; e++) {
                var t = this.items[e];
                if (
                  (t.onComplete.addOnce(this.onCurrentItemComplete, this),
                  this._itemsStarted++,
                  this._itemsRunning++,
                  t.start(),
                  !0 === this.stopped)
                )
                  break;
              }
            else this.handleItemCompleted();
          }),
          (t.prototype.onCurrentItemComplete = function (e) {
            e.onStopped.remove(this.onCurrentItemComplete, this),
              e.onComplete.remove(this.onCurrentItemComplete, this),
              this._itemsRunning--,
              this._itemsCompleted++,
              1 == this.stopped
                ? 0 === this._itemsRunning && this.handleItemStopped()
                : 0 === this._itemsRunning &&
                  this._itemsStarted === this.items.length &&
                  this.handleItemCompleted();
          }),
          (t.prototype.stopInternal = function () {
            for (var e = 0; e < this.items.length; e++)
              !0 === this.items[e].isRunning() &&
                (this.items[e].onComplete.remove(
                  this.onCurrentItemComplete,
                  this
                ),
                this.items[e].onStopped.addOnce(
                  this.onCurrentItemComplete,
                  this
                ),
                this.items[e].stop());
          }),
          t
        );
      })(e.AbstractSequenceItem);
      e.AbstractSequence = t;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t, n) {
          var o = e.call(this) || this;
          return (o._aDone = !1), (o._bDone = !1), o.init(t, n), o;
        }
        return (
          __extends(t, e),
          (t.prototype.init = function (e, t) {
            (this._aItem = e), (this._bItem = t);
          }),
          (t.prototype.startInternal = function () {
            (this._aDone = !1),
              (this._bDone = !1),
              this._aItem.onComplete.addOnce(this.onCurrentItemComplete, this),
              this._bItem.onComplete.addOnce(this.onCurrentItemComplete, this),
              this._aItem.start(),
              this._bItem.start();
          }),
          (t.prototype.stopInternal = function () {
            this._aItem.onStopped.addOnce(this.onCurrentItemComplete, this),
              this._bItem.onStopped.addOnce(this.onCurrentItemComplete, this),
              this._aItem.stop(),
              this._bItem.stop();
          }),
          (t.prototype.onCurrentItemComplete = function (e) {
            e == this._aItem ? (this._aDone = !0) : (this._bDone = !0),
              e.onStopped.remove(this.onCurrentItemComplete, this),
              e.onComplete.remove(this.onCurrentItemComplete, this),
              1 == this._aDone &&
                1 == this._bDone &&
                (1 == this.stopped
                  ? this.handleItemStopped()
                  : this.handleItemCompleted());
          }),
          t
        );
      })(e.AbstractSequenceItem);
      e.AndItem = t;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t() {
          return e.call(this) || this;
        }
        return __extends(t, e), t;
      })(e.AbstractSequence);
      e.ConcurrentSequence = t;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t, n, o, i) {
          var a = e.call(this) || this;
          return (a._negateResult = !1), a.init(t, n, o, i), a;
        }
        return (
          __extends(t, e),
          (t.prototype.init = function (e, t, n, o) {
            (this._condition = e),
              (this._negateResult = t),
              (this._trueItem = n),
              (this._falseItem = o);
          }),
          (t.prototype.startInternal = function () {
            var e = this._condition();
            !0 === this._negateResult && (e = !e),
              (this._item = !0 === e ? this._trueItem : this._falseItem),
              null == this._item
                ? this.handleItemCompleted()
                : (this._item.onComplete.addOnce(
                    this.onCurrentItemComplete,
                    this
                  ),
                  this._item.start());
          }),
          (t.prototype.stopInternal = function () {
            this._item.onStopped.addOnce(this.onCurrentItemComplete, this),
              this._item.stop();
          }),
          (t.prototype.onCurrentItemComplete = function (e) {
            e.onStopped.remove(this.onCurrentItemComplete, this),
              e.onComplete.remove(this.onCurrentItemComplete, this),
              1 == this.stopped
                ? this.handleItemStopped()
                : this.handleItemCompleted();
          }),
          t
        );
      })(e.AbstractSequenceItem);
      e.ConditionalItem = t;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t() {
          var t = e.call(this) || this;
          return (t._currentIndex = -1), (t._nextIndex = 0), t;
        }
        return (
          __extends(t, e),
          (t.prototype.startInternal = function () {
            if (
              ((this._currentIndex = 0),
              (this._nextIndex = 1),
              0 !== this.items.length)
            ) {
              var e = this.items[0];
              e.onComplete.addOnce(this.onCurrentItemComplete, this), e.start();
            } else this.handleItemCompleted();
          }),
          (t.prototype.onCurrentItemComplete = function (e) {
            if (
              (e.onStopped.remove(this.onCurrentItemComplete, this),
              e.onComplete.remove(this.onCurrentItemComplete, this),
              !0 === this.stopped)
            )
              this.handleItemStopped();
            else if (
              ((this._currentIndex = this._nextIndex),
              this._nextIndex++,
              this._currentIndex >= this.items.length)
            )
              (this._currentIndex = -1),
                (this._nextIndex = 0),
                this.handleItemCompleted();
            else {
              var t = this.items[this._currentIndex];
              t.onComplete.addOnce(this.onCurrentItemComplete, this), t.start();
            }
          }),
          (t.prototype.stopInternal = function () {
            var e = this.items[this._currentIndex];
            e.onStopped.addOnce(this.onCurrentItemComplete, this), e.stop();
          }),
          t
        );
      })(e.AbstractSequence);
      e.Sequence = t;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (t) {
        function n(n) {
          var o = t.call(this) || this;
          return (
            (o._itemsToRunRetriever = n),
            (o._internalSequence = new e.Sequence()),
            o._internalSequence.onComplete.add(
              o.handleInternalSequenceComplete,
              o
            ),
            o._internalSequence.onStopped.add(
              o.handleInternalSequenceStopped,
              o
            ),
            o
          );
        }
        return (
          __extends(n, t),
          (n.prototype.startInternal = function () {
            (this._internalSequence.items = this._itemsToRunRetriever()),
              this._internalSequence.start();
          }),
          (n.prototype.stopInternal = function () {
            this._internalSequence.stop();
          }),
          (n.prototype.handleInternalSequenceStopped = function () {
            this.handleItemStopped();
          }),
          (n.prototype.handleInternalSequenceComplete = function () {
            !0 === this.stopped
              ? this.handleItemStopped()
              : this.handleItemCompleted();
          }),
          n
        );
      })(e.AbstractSequenceItem);
      e.ForEachItem = t;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t, n, o) {
          var i = e.call(this) || this;
          return (
            (i._funcRef = t),
            (i._paramList = n),
            (i._thisObject = void 0 !== o ? o : i),
            i
          );
        }
        return (
          __extends(t, e),
          (t.prototype.startInternal = function () {
            this._funcRef.apply(this._thisObject, this._paramList),
              this.handleItemCompleted();
          }),
          (t.prototype.stopInternal = function () {
            this.handleItemStopped();
          }),
          t
        );
      })(e.AbstractSequenceItem);
      e.InvokeFunctionItem = t;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t, n) {
          var o = e.call(this) || this;
          return o.init(t, n), o;
        }
        return (
          __extends(t, e),
          (t.prototype.init = function (e, t) {
            (this._aItem = e), (this._bItem = t);
          }),
          (t.prototype.startInternal = function () {
            this._aItem.onComplete.addOnce(this.onCurrentItemComplete, this),
              this._bItem.onComplete.addOnce(this.onCurrentItemComplete, this),
              this._aItem.start(),
              this._bItem.start();
          }),
          (t.prototype.stopInternal = function () {
            this._aItem.onStopped.addOnce(this.onCurrentItemComplete, this),
              this._bItem.onStopped.addOnce(this.onCurrentItemComplete, this),
              this._aItem.stop(),
              this._bItem.stop();
          }),
          (t.prototype.onCurrentItemComplete = function (e) {
            this._aItem.onStopped.remove(this.onCurrentItemComplete, this),
              this._aItem.onComplete.remove(this.onCurrentItemComplete, this),
              this._bItem.onStopped.remove(this.onCurrentItemComplete, this),
              this._bItem.onComplete.remove(this.onCurrentItemComplete, this),
              1 == this.stopped
                ? this.handleItemStopped()
                : this.handleItemCompleted();
          }),
          t
        );
      })(e.AbstractSequenceItem);
      e.OrItem = t;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = function () {},
        n = (function () {
          function e() {
            this._registeredItems = {};
          }
          return (
            (e.prototype.registerItem = function (e) {
              if (null != e.name && null != e.name) {
                var n = new t();
                return (
                  (n.item = e),
                  (n.children = {}),
                  (this._registeredItems[e.name] = n),
                  e
                );
              }
            }),
            (e.prototype.unregisterItem = function (e) {
              return delete this._registeredItems[e.name], e;
            }),
            (e.prototype.findItemByName = function (e) {
              for (var t in this._registeredItems)
                if (t === e) return this._registeredItems[t].item;
              for (t in this._registeredItems) {
                if (
                  null !=
                  this.findItemByNameInternal(e, this._registeredItems[t])
                )
                  break;
              }
              return null;
            }),
            (e.prototype.findItemByNameInternal = function (e, t) {
              var n = null;
              for (var o in t.children) o === e && (n = t.children[o].item);
              if (null == n)
                for (var o in t.children) {
                  if (null != this.findItemByNameInternal(e, t)) break;
                }
              return n;
            }),
            e
          );
        })();
      e.SequenceItemLocator = n;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = (function (t) {
        function n(e, n) {
          var o = t.call(this) || this;
          return (o._gameInstanceId = n), (o._timeOutAfterMs = e), o;
        }
        return (
          __extends(n, t),
          (n.prototype.init = function (e) {
            this._timeOutAfterMs = e;
          }),
          (n.prototype.abort = function () {
            e.time.clearSafeTimeout(this._activeTimeOutId),
              this.handleItemCompleted();
          }),
          (n.prototype.startInternal = function () {
            var t = this;
            e.time.clearSafeTimeout(this._activeTimeOutId),
              e.time.setSafeTimeout(
                this._gameInstanceId,
                function () {
                  t.stopped ? t.handleItemStopped() : t.handleItemCompleted();
                },
                this._timeOutAfterMs()
              );
          }),
          (n.prototype.stopInternal = function () {
            e.time.clearSafeTimeout(this._activeTimeOutId),
              this.handleItemStopped();
          }),
          n
        );
      })(t.AbstractSequenceItem);
      t.SetTimeoutItem = n;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t) {
          var n = e.call(this) || this;
          return (
            (n._invokeCompleteWhenStarted = !1), (n._invokeOnStartFunc = t), n
          );
        }
        return (
          __extends(t, e),
          (t.prototype.callback = function () {
            this.isRunning()
              ? ((this._invokeCompleteWhenStarted = !1),
                this.stopped
                  ? this.handleItemStopped()
                  : this.handleItemCompleted())
              : (this._invokeCompleteWhenStarted = !0);
          }),
          (t.prototype.startInternal = function () {
            null != this._invokeOnStartFunc && this._invokeOnStartFunc(),
              !0 === this._invokeCompleteWhenStarted &&
                ((this._invokeCompleteWhenStarted = !1),
                this.handleItemCompleted());
          }),
          (t.prototype.stopInternal = function () {
            this.handleItemStopped();
          }),
          t
        );
      })(e.AbstractSequenceItem);
      e.WaitForCallbackItem = t;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t, n) {
          var o = e.call(this) || this;
          return (o._signal = t), (o._funcToRunAtStart = n), o;
        }
        return (
          __extends(t, e),
          (t.prototype.startInternal = function () {
            this._signal.addOnce(this.handleSignalReceived, this),
              null != this._funcToRunAtStart && this._funcToRunAtStart();
          }),
          (t.prototype.stopInternal = function () {
            this._signal.remove(this.handleSignalReceived, this),
              this.handleItemStopped();
          }),
          (t.prototype.handleSignalReceived = function () {
            !1 === this.stopped
              ? this.handleItemCompleted()
              : this.handleItemStopped();
          }),
          t
        );
      })(e.AbstractSequenceItem);
      e.WaitForSignalItem = t;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      (t.setSafeInterval = function (t, n, o) {
        var i = { callback: n, intervalId: NaN };
        return (
          (i.intervalId = setInterval(function () {
            e.GameInstanceManager.isGameInstanceAlive(t) && i.callback();
          }, o)),
          i.intervalId
        );
      }),
        (t.setSafeTimeout = function (t, n, o) {
          var i = { callback: n, intervalId: NaN };
          return (
            (i.intervalId = setTimeout(function () {
              e.GameInstanceManager.isGameInstanceAlive(t) && i.callback();
            }, o)),
            i.intervalId
          );
        }),
        (t.clearSafeTimeout = function (e) {
          clearTimeout(e);
        }),
        (t.clearSafeInterval = function (e) {
          clearTimeout(e);
        });
    })(e.time || (e.time = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      e.formatTimeHHMM = function (e) {
        var t = Math.floor((e / 6e4) % 60),
          n = e / 864e5,
          o = 24 * (n = Math.floor(n)) + Math.floor((e / 36e5) % 24);
        return (
          (o = o < 10 ? "0" + o : "" + o) +
          ":" +
          (t = t < 10 ? "0" + t : "" + t)
        );
      };
    })(e.time || (e.time = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    var t = (function () {
      function t() {}
      return (
        (t.getRunningSequenceItems = function () {
          return e.seqlib.AbstractSequenceItem.getRunningItems();
        }),
        (t.getGameInstances = function () {
          return e.GameInstanceManager.getGameInstances(!1);
        }),
        (t.getGameInstance = function (t) {
          return e.GameInstanceManager.getGameInstanceById(t);
        }),
        (t.getActiveGameState = function (t) {
          var n = e.GameInstanceManager.getGameInstanceById(t);
          if (null != n && void 0 !== n.activeState) return n.activeState;
        }),
        (t.countListeners = function (t, n, o, i, a, r, s) {
          if (
            ((s = s || []),
            (a = a || ""),
            (r = r || [window, document]),
            (i = i || 1),
            !1 === (o = void 0 === o || o) && i > 1)
          )
            return s;
          if (null == t || -1 !== r.indexOf(t)) return s;
          if (t instanceof HTMLElement) return s;
          r.push(t);
          var u = a + (t.name || t.toString());
          try {
            if (Array.isArray(t))
              for (var l = 0; l < t.length; l++) {
                var d = t[l];
                s = this.countListeners(d, t, o, i + 1, u, r, s);
              }
            else if ("object" == typeof t)
              for (var c in t) {
                var h = typeof t[c];
                if (
                  "string" !== h &&
                  "boolean" !== h &&
                  "number" !== h &&
                  "function" != h &&
                  "_bindings" !== c &&
                  "__proto__" !== c
                )
                  if (t[c] instanceof e.utils.Signal) {
                    var p = t[c];
                    s.push({
                      path: u,
                      propName: c,
                      target: t,
                      parent: n,
                      count: p._signalBindings.length,
                    });
                  } else if (null != t[c])
                    if (null != t[c]._bindings) {
                      var m = t[c]._bindings;
                      null != m &&
                        s.push({
                          path: u,
                          propName: c,
                          target: t,
                          parent: n,
                          count: m.length,
                        });
                    } else s = this.countListeners(t[c], t, o, i + 1, u, r, s);
              }
          } catch (e) {
            return s;
          }
          return s;
        }),
        t
      );
    })();
    e.DebugQuery = t;
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {}
        return (
          (e.getClassName = function (e) {
            var t = /function (.{1,})\(/.exec(e.constructor.toString());
            return t && t.length > 1 ? t[1] : "";
          }),
          (e.isInstanceOf = function (e, t) {
            var n = /function (.{1,})\(/.exec(t.constructor.toString());
            return n && n.length > 1 ? n[1] : "";
          }),
          (e.isImplementationOf = function (e, t) {
            var n = /function (.{1,})\(/.exec(t.constructor.toString());
            return n && n.length > 1 ? n[1] : "";
          }),
          e
        );
      })();
      e.Describer = t;
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {}
        return (
          (e.prototype.find = function (e, t) {
            (void 0 !== t && null != t) || (t = window);
            var n = e.split(".");
            return this.findInternal(n, t);
          }),
          (e.prototype.setValue = function (e, t, n) {
            (void 0 !== n && null != n) || (n = window);
            var o = e.split(".");
            return this.setValueInternal(o, n, t);
          }),
          (e.prototype.findInternal = function (e, t) {
            return 0 === e.length ? t : this.findInternal(e.slice(1), t[e[0]]);
          }),
          (e.prototype.setValueInternal = function (e, t, n) {
            return 1 === e.length
              ? (t[e[0]] = n)
              : this.setValueInternal(e.slice(1), t[e[0]], n);
          }),
          e
        );
      })();
      e.FindInHierarchy = t;
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {}
        return (
          (e.getClassName = function (e) {
            var t = e.constructor.toString().substring("function ".length);
            return (t = t.substring(0, t.indexOf("(")));
          }),
          (e.registerClass = function (t, n) {
            null == e._allRegisteredClasses && (e._allRegisteredClasses = {}),
              (e._allRegisteredClasses[n] = t);
          }),
          (e.getPrototypeChain = function (t) {
            var n = [];
            try {
              for (; null != t; )
                (t = Object.getPrototypeOf(t)), n.push(e.getClassName(t));
            } catch (e) {}
            return n;
          }),
          (e.getClassPath = function (t) {
            return e._allRegisteredClasses[t];
          }),
          (e.findClassNameFromRootObject = function (t, n, o, i) {
            void 0 === i && (i = !0);
            var a = e.f_findClassNameFromRootObjectRecursive(t, o, n, [t], i);
            return null != a && e.registerClass(o, a), a;
          }),
          (e.f_findClassNameFromRootObjectRecursive = function (t, n, o, i, a) {
            for (var r in t) {
              var s = t[r],
                u = "" != o ? o + "." + r : r,
                l = r.toString();
              if (("I" == l[0] && (l = l.substring(1)), l == n)) return u;
              if ("object" == typeof s) {
                if (-1 != i.indexOf(s)) continue;
                i.push(s);
                var d = e.f_findClassNameFromRootObjectRecursive(
                  t[r],
                  n,
                  u,
                  i,
                  a
                );
                if (null != d) return d;
              }
            }
            return null;
          }),
          e
        );
      })();
      e.FullClassNameFinder = t;
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = {};
      e.instantiateFromString = function (e, n) {
        if (void 0 === t[e]) {
          n = n || window;
          for (var o = e.split("."), i = 0; i < o.length; i++) n = n[o[i]];
          t[e] = n;
        }
        return new t[e]();
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {}
        return (
          (e.prototype.size = function () {
            var e = 0;
            for (var t in this) "size" != t && this.hasOwnProperty(t) && e++;
            return e;
          }),
          e
        );
      })();
      (e.Map = t),
        (e.countObjectProperties = function (e, t) {
          void 0 === t && (t = !1), null == e && (e = this);
          var n = 0;
          for (var o in e)
            "size" != o && (0 == t || e.hasOwnProperty(o)) && n++;
          return n;
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      (t.createSafeLambda = function (t, n) {
        return function () {
          for (var o = [], i = 0; i < arguments.length; i++)
            o[i] = arguments[i];
          if (e.GameInstanceManager.isGameInstanceAlive(t))
            return n.apply(void 0, o);
        };
      }),
        (t.createSafeClosure = function (t, n, o, i) {
          return function () {
            if (e.GameInstanceManager.isGameInstanceAlive(t))
              return o.apply(n, i);
          };
        }),
        (t.createKillableClosure = function (e, t, n, o) {
          var i;
          return (
            ((i = function () {
              for (var a = [], r = 0; r < arguments.length; r++)
                a[r] = arguments[r];
              return !1 === i.killed
                ? e.apply(t, a)
                : n
                ? n.apply(o, a)
                : void 0;
            }).killed = !1),
            i
          );
        }),
        (t.createDecorator = function (e, t, n, o, i, a) {
          void 0 === a && (a = !0);
          var r = e[t].bind(e);
          e[t] = function () {
            a && n.apply(o, i || arguments);
            var t = r.apply(e, arguments);
            return a || n.apply(o, i || arguments), t;
          };
        }),
        (t.createListInvokingMethod = function (t, n) {
          var o = t[n].bind(t),
            i = { start: null, end: null, result: null };
          return (
            (i.start = { data: o, next: null }),
            (i.end = i.start),
            (t[n] = function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return (
                (i.result = void 0),
                e.utils.linkedlist.iterateOverList(i, function (e) {
                  i.result = e.apply(void 0, t);
                }),
                i.result
              );
            }),
            (t[n].decoratorList = i),
            i
          );
        }),
        (t.createListInvokingFunction = function (t) {
          var n = { start: null, end: null, result: void 0 };
          (t = t || function () {}),
            (n.start = { data: t, next: null }),
            (n.end = n.start);
          var o = function () {
            for (var t = [], o = 0; o < arguments.length; o++)
              t[o] = arguments[o];
            return (
              (n.result = void 0),
              e.utils.linkedlist.iterateOverList(n, function (e) {
                var o = e.apply(void 0, t);
                n.result = o;
              }),
              n.result
            );
          };
          return (o.decoratorList = n), o;
        }),
        (t.addEnablementToFunction = function (e, t) {
          var n = null;
          return (
            ((n = function () {
              for (var o = [], i = 0; i < arguments.length; i++)
                o[i] = arguments[i];
              return n.enabled ? e.apply(t, o) : void 0;
            }).enabled = !0),
            n
          );
        }),
        (t.addForkingByEnablementStatusToFunction = function (e, t, n) {
          var o = null;
          return (
            ((o = function () {
              for (var i = [], a = 0; a < arguments.length; a++)
                i[a] = arguments[a];
              return o.enabled ? e.apply(n, i) : t.apply(n, i);
            }).enabled = !0),
            o
          );
        }),
        (t.createTweenMaxTargetProxy = function (t, n, o) {
          (n = e.utils.copyProperties({}, n)),
            o && (o = e.utils.copyProperties({}, o));
          var i = {
            alive: !0,
            onUpdate:
              (null,
              function () {
                if (i.alive) {
                  var e = i.to;
                  for (var n in e) t[n] = i[n];
                }
                i.to.onUpdate &&
                  i.to.onUpdate.apply(i.to.onUpdateScope, i.to.onUpdateParams);
              }),
            onComplete:
              (null,
              function () {
                if (i.alive) {
                  var e = i.to;
                  for (var n in e) t[n] = i[n];
                }
                i.to.onComplete &&
                  i.to.onComplete.apply(
                    i.to.onCompleteScope,
                    i.to.onCompleteParams
                  );
              }),
            to: n,
            from: o,
          };
          for (var a in n) i[a] = t[a];
          if (((n.onUpdate = i.onUpdate), (n.onComplete = i.onComplete), o))
            for (var a in o) i[a] = o[a];
          return i;
        }),
        (t.killClosure = function (e) {
          e.killed = !0;
        }),
        (t.createListener = function (e, t, n) {
          return function () {
            return e.apply(t, n);
          };
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {
          this._internalArray = [];
        }
        return (
          Object.defineProperty(e.prototype, "length", {
            get: function () {
              return this._internalArray.length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.getAt = function (e) {
            return this._internalArray[e];
          }),
          (e.prototype.push = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            for (var n = 0; n < e.length; n++) {
              var o = e[n],
                i = this._internalArray.indexOf(o);
              -1 == i && this._internalArray.push(o);
            }
            return this._internalArray.length;
          }),
          (e.prototype.pop = function () {
            return this._internalArray.pop();
          }),
          (e.prototype.concat = function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            var o,
              i = new e();
            for (o = 0; o < this._internalArray.length; o++)
              i.push(this._internalArray[o]);
            for (o = 0; o < t.length; o++) i.push(t[o]);
            return i;
          }),
          (e.prototype.join = function (e) {
            return this._internalArray.join(e);
          }),
          (e.prototype.reverse = function () {
            var t = new e();
            return (t._internalArray = this._internalArray.reverse()), t;
          }),
          (e.prototype.shift = function () {
            return this._internalArray.shift();
          }),
          (e.prototype.unshift = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            for (var n = 0; n < e.length; n++) {
              var o = this._internalArray.indexOf(e[n]);
              -1 === o && this._internalArray.unshift(e[n]);
            }
            return this._internalArray.length;
          }),
          (e.prototype.slice = function (t, n) {
            var o = new e();
            return (o._internalArray = this._internalArray.slice(t, n)), o;
          }),
          (e.prototype.remove = function (t, n) {
            var o = new e();
            return (o._internalArray = this._internalArray.splice(t, n)), o;
          }),
          (e.prototype.removeElement = function (e) {
            var t = this.indexOf(e, 0);
            return -1 != t && this.remove(t, 1), this;
          }),
          (e.prototype.insert = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            for (var o = 0; o < t.length; o++)
              this.isItemAllowedToBePushed(t[o]) &&
                (this._internalArray.splice(e, 0, t[o]), e++);
          }),
          (e.prototype.last = function () {
            return 0 === this._internalArray.length
              ? null
              : this._internalArray[this._internalArray.length - 1];
          }),
          (e.prototype.indexOf = function (e, t) {
            return this._internalArray.indexOf(e, t);
          }),
          (e.prototype.isItemAllowedToBePushed = function (e) {
            return -1 === this._internalArray.indexOf(e);
          }),
          (e.prototype.sort = function (t) {
            var n = new e();
            return (n._internalArray = this._internalArray.sort(t)), n;
          }),
          (e.prototype.toArray = function () {
            return this._internalArray.concat();
          }),
          e
        );
      })();
      e.UniqueSet = t;
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      e.buildUrl = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        for (var n = e[0], o = 1; o < e.length; o++)
          0 !== e[o].indexOf("/")
            ? n.lastIndexOf("/") === n.length - 1
              ? (n += e[o])
              : (n += "/" + e[o])
            : (n += e[o]);
        return n;
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      e.applyMixins = function (e, t) {
        t.forEach(function (t) {
          Object.getOwnPropertyNames(t.prototype).forEach(function (n) {
            e.prototype[n] = t.prototype[n];
          });
        });
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      e.generateGUID = function () {
        var e = new Date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (t) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            return (
              (e = Math.floor(e / 16)),
              ("x" === t ? n : (3 & n) | 8).toString(16)
            );
          }
        );
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        e.createGetBalanceRequest = function (e) {
          return {
            requestid: null,
            operatordata: void 0,
            extradata: void 0,
            classname: "tk.gs.rq.GetBalanceRequest",
            distributionChannel: e.distributionChannel,
            gameid: e.gameId,
            playersessionid: e.playerSessionId,
            requesttype: "getbalance",
            serviceid: "gs",
            gameinstanceid: e.gameInstanceId,
          };
        };
      })(e.rq || (e.rq = {}));
    })(e.gs || (e.gs = {}));
  })(tk || (tk = {})),
  (function (e) {
    !(function (e) {
      e.replaceTKVariables = function (e, t) {
        var n = e;
        return (
          Object.keys(t).forEach(function (e) {
            var o = new RegExp("{" + e + "}", "gi");
            n = n.replace(o, t[e]);
          }),
          n
        );
      };
    })(e.localization || (e.localization = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e(e) {
          void 0 === e && (e = { requestsMade: 0 }), (this._idTracker = e);
        }
        return (
          (e.prototype.createGameSetupServerRequest = function (e, t) {
            void 0 === t && (t = "systemservice");
            var n = this.createGetSetupRequest(t);
            return this.createServerRequest(e, [n]);
          }),
          (e.prototype.createGameConfigServerRequest = function (e, t) {
            void 0 === t && (t = "systemservice");
            var n = this.createGetConfigRequest(e, t);
            return this.createServerRequest(e.operatorId, [n]);
          }),
          (e.prototype.createFreeGameSessionServerRequest = function (e, t) {
            void 0 === t && (t = "gameservice");
            var n = this.createGetFreeGameSessionRequest(e, t);
            return this.createServerRequest(e.operatorId, [n]);
          }),
          (e.prototype.createRealGameSessionServerRequest = function (e, t) {
            void 0 === t && (t = "gameservice");
            var n = this.createGetRealGameSessionRequest(e, t);
            return this.createServerRequest(e.operatorId, [n]);
          }),
          (e.prototype.createNewGameRoundServerRequest = function (e, t, n) {
            void 0 === n && (n = "gameservice");
            var o = this.createNewGameRoundRequest(e, t, n);
            return this.createServerRequest(e.operatorId, [o]);
          }),
          (e.prototype.createContinueGameRoundServerRequest = function (
            e,
            t,
            n
          ) {
            void 0 === n && (n = "gameservice");
            var o = this.createContinueGameRoundRequest(e, t, n);
            return this.createServerRequest(e.operatorId, [o]);
          }),
          (e.prototype.createServerRequest = function (e, t) {
            var n = {
              requestid: this._idTracker.requestsMade,
              classname: "tk.ServerRequest",
              operatorid: e,
              servicerequests: t,
            };
            return this._idTracker.requestsMade++, n;
          }),
          (e.prototype.createGetConfigRequest = function (e, t) {
            void 0 === t && (t = "gameservice");
            var n = "gs.getconfig";
            return {
              serviceid: t,
              gameid: e.gameId,
              operatorid: e.operatorId,
              playerid: e.playerId,
              currencies: null != e.playerCurrency ? [e.playerCurrency] : null,
              requesttype: n,
              operatordata:
                null != e.getOperatorData ? e.getOperatorData(n) : [],
              regulator: e.regulator,
              classname: "tk.gs.rq.GetConfigRequest",
            };
          }),
          (e.prototype.createGetSetupRequest = function (e) {
            return (
              void 0 === e && (e = "systemservice"),
              {
                serviceid: e,
                requesttype: "gss.getsetup",
                operatordata: [],
                classname: "tk.gss.rq.GetSetupRequest",
              }
            );
          }),
          (e.prototype.createGetFreeGameSessionRequest = function (e, t) {
            void 0 === t && (t = "gameservice");
            var n = "gs.getfreesession";
            return {
              playersessionid: e.playerSessionId,
              playerid: e.playerId,
              freeaccountsetup: e.freeAccountSetup,
              gameid: e.gameId,
              serviceid: t,
              requesttype: n,
              regulator: e.regulator,
              operatordata:
                null != e.getOperatorData ? e.getOperatorData(n) : [],
              extradata: null != e.getExtraData ? e.getExtraData(n) : null,
              classname: "tk.gs.rq.GetFreeGameSessionRequest",
            };
          }),
          (e.prototype.createGetRealGameSessionRequest = function (e, t) {
            void 0 === t && (t = "gameservice");
            var n = "gs.getrealsession";
            return {
              playersessionid: e.playerSessionId,
              playerid: e.playerId,
              accounttypes: e.accountTypes,
              operatorid: e.operatorId,
              distributionchannel: e.distributionChannel,
              clienttype: e.clientType,
              currencies:
                void 0 !== e.playerCurrency ? [e.playerCurrency] : null,
              gameid: e.gameId,
              serviceid: t,
              requesttype: n,
              regulator: e.regulator,
              operatordata:
                null != e.getOperatorData ? e.getOperatorData(n) : [],
              extradata: null != e.getExtraData ? e.getExtraData(n) : null,
              classname: "tk.gs.rq.GetRealGameSessionRequest",
            };
          }),
          (e.prototype.createNewGameRoundRequest = function (e, t, n) {
            void 0 === n && (n = "gameservice");
            var o = "gs.newgameround";
            return {
              accountid: e.accountId,
              accounttype: e.accountType,
              activationcode: e.activationCode,
              clientversion: e.clientVersion,
              currencyiso: e.currencyIso,
              clienttype: e.clientType,
              freeroundid: e.freeRoundId,
              distributionchannel: e.distributionChannel,
              gameid: e.gameId,
              gamesessionid: e.gameSessionId,
              operatorid: e.operatorId,
              playerid: e.playerId,
              playersessionid: e.playerSessionId,
              serviceid: n,
              requesttype: o,
              operatordata:
                null != e.getOperatorData ? e.getOperatorData(o) : [],
              extradata: null != e.getExtraData ? e.getExtraData(o) : null,
              classname: "tk.gs.rq.NewGameRoundRequest",
              symbolsbeforeactionfinal: e.symbolsBeforeActionFinal,
              symbolsbeforeactioninitial: e.symbolsBeforeActionInitial,
              gamerequests: t,
              requestid: e.getNextGameServiceRequestId
                ? e.getNextGameServiceRequestId()
                : null,
              gameinstanceid: e.gameInstanceId,
              regulator: e.regulator,
            };
          }),
          (e.prototype.createContinueGameRoundRequest = function (e, t, n) {
            void 0 === n && (n = "gameservice");
            var o = "gs.continuegameround";
            return {
              currencyiso: e.currencyIso,
              gameid: e.gameId,
              gamesessionid: e.gameSessionId,
              gameroundid: e.gameRoundId,
              playerid: e.playerId,
              playersessionid: e.playerSessionId,
              serviceid: n,
              requesttype: o,
              operatordata:
                null != e.getOperatorData ? e.getOperatorData(o) : [],
              extradata: null != e.getExtraData ? e.getExtraData(o) : null,
              classname: "tk.gs.rq.ContinueGameRoundRequest",
              gamerequests: t,
              requestid: e.getNextGameServiceRequestId
                ? e.getNextGameServiceRequestId()
                : null,
              gameinstanceid: e.gameInstanceId,
            };
          }),
          (e.prototype.createGetStateRequest = function (e, t) {
            return {
              currencyiso: e.playerCurrency,
              playersessionid: e.playerSessionId,
              playerid: e.playerId,
              gameid: e.gameId,
              gamesessionid: t,
              peek: !1,
              serviceid: "gameservice",
              requesttype: "gs.getstate",
              operatordata: [],
              classname: "tk.gs.rq.GetGameStateRequest",
              gameinstanceid: e.gameInstanceId,
              requestid: void 0,
              extradata: void 0,
            };
          }),
          e
        );
      })();
      e.GameServerRequestBuilder = t;
    })(e.net || (e.net = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = tk.gs.rs.e.ServerErrorCodes,
        o = tk.gs.rq.createGetBalanceRequest,
        i = (function () {
          function t(t, n, o, i) {
            (this._responseTimePerRequest = [0, 0, 0, 0, 0]),
              (this._paused = !1),
              (this._onPauseStatusChanged = new e.utils.Signal1()),
              (this._timeStampForLastRound = 0),
              (this._isSendingCriticalGameRoundRequest = !1),
              (this._serverConnection = n),
              (this._requestDataProvider = t),
              (this._requestBuilder = this.createRequestBuilder()),
              (this._spinStartDuration = o),
              (this._spinStopDuration = i);
          }
          return (
            Object.defineProperty(t.prototype, "averageTimeBetweenResponses", {
              get: function () {
                for (var e = 0, t = 0; t < 5; t++)
                  e += this._responseTimePerRequest[t];
                return e / 5;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.pause = function () {
              (this._paused = !0), this._onPauseStatusChanged.dispatch(!0);
            }),
            (t.prototype.resume = function () {
              (this._paused = !1), this._onPauseStatusChanged.dispatch(!1);
            }),
            (t.prototype.setBalanceUpdaterOnErrors = function (e) {
              this._balanceUpdaterOnError = e;
            }),
            (t.prototype.createRequestBuilder = function () {
              return new e.net.GameServerRequestBuilder();
            }),
            (t.prototype.sendKeepAlive = function (e) {
              var t = this,
                n = {
                  classname: "tk.gs.rq.KeepAliveRequest",
                  operatordata: void 0,
                  operatorid: this._requestDataProvider.operatorId,
                  playersessionid: this._requestDataProvider.playerSessionId,
                  serviceid: "gameservice",
                  requesttype: "gs.keepalive",
                  requestid: null,
                  gameinstanceid: this._requestDataProvider.gameInstanceId,
                },
                o = this._requestBuilder.createServerRequest(
                  this._requestDataProvider.operatorId,
                  [n]
                );
              this.createPostActivity(
                function () {
                  void 0 !== e && e(),
                    t._requestDataProvider.initGameData.developmentmode;
                },
                {},
                null
              ).sendRequest(o, 5);
            }),
            (t.prototype.sendGetBalanceRequest = function (e, t, n) {
              var i = o(e),
                a = this._requestBuilder.createServerRequest(
                  this._requestDataProvider.operatorId,
                  [i]
                );
              this.sendRequest(
                a,
                t,
                n,
                3,
                !1,
                this.createDefaultValidtyChecker()
              );
            }),
            (t.prototype.sendGetConfigServerRequest = function (e, t) {
              var n = this._requestBuilder.createGetConfigRequest(
                  this._requestDataProvider,
                  "gameservice"
                ),
                o = this._requestBuilder.createServerRequest(
                  this._requestDataProvider.operatorId,
                  [n]
                );
              this.sendRequest(
                o,
                e,
                t,
                10,
                !1,
                this.createDefaultValidtyChecker()
              );
            }),
            (t.prototype.sendGetFreeSessionServerRequest = function (e, t) {
              var n;
              n = this._requestBuilder.createGetFreeGameSessionRequest(
                this._requestDataProvider,
                "gameservice"
              );
              var o = this._requestBuilder.createServerRequest(
                  this._requestDataProvider.operatorId,
                  [n]
                ),
                i = this;
              (i._isSendingCriticalGameRoundRequest = !0),
                this.sendRequest(
                  o,
                  function (t) {
                    (i._isSendingCriticalGameRoundRequest = !1), e(t);
                  },
                  t,
                  1,
                  !1,
                  this.createDefaultValidtyChecker()
                );
            }),
            (t.prototype.sendGetRealSessionServerRequest = function (e, t) {
              var n;
              n = this._requestBuilder.createGetRealGameSessionRequest(
                this._requestDataProvider,
                "gameservice"
              );
              var o = this._requestBuilder.createServerRequest(
                  this._requestDataProvider.operatorId,
                  [n]
                ),
                i = this;
              (i._isSendingCriticalGameRoundRequest = !0),
                this.sendRequest(
                  o,
                  function (t) {
                    (i._isSendingCriticalGameRoundRequest = !1), e(t);
                  },
                  t,
                  1,
                  !1,
                  this.createDefaultValidtyChecker()
                );
            }),
            (t.prototype.sendGetStateServerRequest = function (e, t, n) {
              var o = this._requestBuilder.createGetStateRequest(
                  this._requestDataProvider,
                  e
                ),
                i = this._requestBuilder.createServerRequest(
                  this._requestDataProvider.operatorId,
                  [o]
                );
              this.sendRequest(
                i,
                t,
                n,
                10,
                !1,
                this.createDefaultValidtyChecker()
              );
            }),
            (t.prototype.sendNewGameRoundServerRequest = function (e, t, o, i) {
              void 0 === i && (i = 0);
              var a = this._requestBuilder.createNewGameRoundServerRequest(
                this._requestDataProvider,
                e
              );
              if (this._isSendingCriticalGameRoundRequest)
                o({
                  message:
                    "Cannot send a new game round request before receiving the response from the previously sent request.",
                  callstack: new Error().stack,
                  code: n.ILLEGAL_OPERATION,
                });
              else {
                var r = this._requestDataProvider.isIdempotencyEnabled()
                  ? 30
                  : 1;
                this._isSendingCriticalGameRoundRequest = !0;
                var s = this;
                this.sendRequest(
                  a,
                  function (e) {
                    (s._isSendingCriticalGameRoundRequest = !1), t(e);
                  },
                  o,
                  r,
                  !0,
                  this.createDefaultValidtyChecker()
                );
              }
            }),
            (t.prototype.sendContinueGameRoundServerRequest = function (
              e,
              t,
              o
            ) {
              var i = this._requestBuilder.createContinueGameRoundServerRequest(
                this._requestDataProvider,
                e
              );
              if (this._isSendingCriticalGameRoundRequest)
                o({
                  message:
                    "Cannot send a continue game round request before receiving the response from the previously sent request.",
                  callstack: new Error().stack,
                  code: n.ILLEGAL_OPERATION,
                });
              else {
                this._isSendingCriticalGameRoundRequest = !0;
                var a = this._requestDataProvider.isIdempotencyEnabled()
                    ? 30
                    : 1,
                  r = this;
                this.sendRequest(
                  i,
                  function (e) {
                    (r._isSendingCriticalGameRoundRequest = !1), t(e);
                  },
                  o,
                  a,
                  !1,
                  this.createDefaultValidtyChecker()
                );
              }
            }),
            (t.prototype.createPostActivity = function (e, t, n) {
              var o = this._serverConnection.createPostActivity(n);
              return o.onResponseReceived.addOnce(e, t), o;
            }),
            (t.prototype.pushResponseTimeEntry = function (e) {
              this._responseTimePerRequest.unshift(e),
                (this._responseTimePerRequest.length = 5);
            }),
            (t.prototype.createResponseHandlerDecorator = function (e) {
              var t = this,
                n = {
                  _paused: function () {
                    return t._paused;
                  }.bind(this),
                  _onPauseStatusChanged: this._onPauseStatusChanged,
                  _handler: e,
                };
              return function (e) {
                var t = this;
                !0 === this._paused()
                  ? this._onPauseStatusChanged.addOnce(function () {
                      (0, t._handler)(e);
                    })
                  : (0, this._handler)(e);
              }.bind(n);
            }),
            (t.prototype.sendRequest = function (t, n, o, i, a, r) {
              void 0 === a && (a = !0);
              var s = new Date().getTime(),
                u = {
                  responseHandler: this.createResponseHandlerDecorator(n),
                  errorCallback: o,
                  startTime: s,
                  rm: this,
                  sr: t,
                  internalHandler: void 0,
                  pauseSignal: this._onPauseStatusChanged,
                },
                l = this,
                d = function (n, o) {
                  var i;
                  if (
                    ((l._isSendingCriticalGameRoundRequest = !1),
                    "number" == typeof o)
                  )
                    return (
                      (i = {
                        error: { code: 0, callstack: void 0, message: "" + o },
                        classname: "tk.gs.rs.e.GameServiceErrorResponse",
                        requestid: "" + n.requestObject.requestid,
                        serviceid: "gameservice",
                        requesttype:
                          n.requestObject.servicerequests[0].requesttype,
                      }),
                      void u.errorCallback(i.error)
                    );
                  if (null != o.serviceresponses[0].error)
                    return (
                      ((i = o.serviceresponses[0]).error.clientData =
                        i.clientData),
                      i.playeraccounts &&
                        ((i.error.clientData = i.error.clientData || {
                          messages: null,
                          playeraccounts: null,
                        }),
                        (i.error.clientData.playeraccounts = i.playeraccounts),
                        l._balanceUpdaterOnError &&
                          l._balanceUpdaterOnError(
                            i.playeraccounts,
                            i.totalbalance
                          )),
                      void u.errorCallback(i.error)
                    );
                  var r = o.serviceresponses[0],
                    s =
                      n.timeBetweenRequestAndResponse ||
                      new Date().getTime() - u.startTime,
                    d = Math.max(1, u.rm.averageTimeBetweenResponses - s);
                  (d = Math.min(3e3, d)),
                    !0 === r.gameover &&
                      u.rm.pushResponseTimeEntry(Math.min(3e3, s));
                  var c = u.responseHandler;
                  a
                    ? e.time.setSafeTimeout(
                        u.rm._requestDataProvider.initGameData.gameinstanceid,
                        function () {
                          return c(r, t);
                        },
                        d
                      )
                    : c(r, t);
                };
              u.internalHandler = d;
              var c = this.createPostActivity(d, u, r);
              c.onError.addOnce(function (e, t, n) {
                return o({
                  callstack: null,
                  code: tk.gs.rs.e.ServerErrorCodes.SERVER_NOT_RESPONDING,
                  message: n,
                });
              }),
                c.sendRequest(t, i);
            }),
            (t.prototype.createDefaultValidtyChecker = function () {
              return function (e) {
                try {
                  var t = e.serviceresponses[0];
                  return null == t.error || 0 != t.error.code;
                } catch (e) {
                  return !1;
                }
                return !0;
              };
            }),
            t
          );
        })();
      t.GameServerRequestMaker = i;
    })(e.net || (e.net = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t() {
          var t = e.call(this) || this;
          return (
            (t.loops = 0),
            (t._currentIndex = -1),
            (t._nextIndex = 0),
            (t._loopsRemaining = 0),
            t
          );
        }
        return (
          __extends(t, e),
          (t.prototype.start = function () {
            (this._loopsRemaining = this.loops), e.prototype.start.call(this);
          }),
          (t.prototype.startInternal = function () {
            if (
              ((this._currentIndex = 0),
              (this._nextIndex = 1),
              0 !== this.items.length)
            ) {
              var e = this.items[0];
              e.onComplete.addOnce(this.onCurrentItemComplete, this), e.start();
            } else this.handleItemCompleted();
          }),
          (t.prototype.onCurrentItemComplete = function (e) {
            if (
              (e.onStopped.remove(this.onCurrentItemComplete, this),
              e.onComplete.remove(this.onCurrentItemComplete, this),
              !0 === this.stopped)
            )
              this.handleItemStopped();
            else if (
              ((this._currentIndex = this._nextIndex),
              this._nextIndex++,
              this._currentIndex >= this.items.length)
            )
              this._loopsRemaining--,
                (this._currentIndex = -1),
                (this._nextIndex = 0),
                0 === this._loopsRemaining
                  ? this.handleItemCompleted()
                  : this.startInternal();
            else {
              var t = this.items[this._currentIndex];
              t.onComplete.addOnce(this.onCurrentItemComplete, this), t.start();
            }
          }),
          (t.prototype.stopInternal = function () {
            var e = this.items[this._currentIndex];
            e.onStopped.addOnce(this.onCurrentItemComplete, this), e.stop();
          }),
          t
        );
      })(e.AbstractSequence);
      e.LoopingSequence = t;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          __extends(t, e),
          (t.prototype.startInternal = function () {
            this.handleItemCompleted();
          }),
          (t.prototype.stopInternal = function () {
            this.handleItemStopped();
          }),
          t
        );
      })(e.AbstractSequenceItem);
      e.NoOpItem = t;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {
          (this._raf = (
            window.requestAnimationFrame || window.webkitRequestAnimationFrame
          ).bind(window)),
            (this._caf = (
              window.cancelAnimationFrame || window.webkitCancelAnimationFrame
            ).bind(window));
        }
        return (
          (e.prototype.setTimer = function (e, t, n) {
            var o,
              i,
              a = this._raf,
              r = Date.now();
            return (
              (i = function () {
                var s = Date.now() - r;
                n && n(s, e), s >= e ? t(o) : a(i);
              }),
              (o = a(i))
            );
          }),
          (e.prototype.clearTimer = function (e) {
            this._caf(e);
          }),
          (e.prototype.wait = function (e) {
            var t = this;
            return new Promise(function (n) {
              t.setTimer(e, n);
            });
          }),
          e
        );
      })();
      e.RAFBasedTimer = t;
    })(e.time || (e.time = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      e.wait = function (e, t) {
        return (
          (t =
            t ||
            function (e, t) {
              setTimeout(t, e);
            }),
          new Promise(function (n, o) {
            t(e, n);
          })
        );
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        (e.addKeyboardShortCut = function (e, t, n, o) {
          void 0 === o && (o = !0);
          var i = !0;
          return (
            (o ? e.developmentmode : e.allowkeyboardinput) &&
              document.addEventListener("keydown", function (e) {
                i && ((e.key !== t && e.keyCode !== t) || n());
              }),
            {
              get enabled() {
                return i;
              },
              set enabled(e) {
                i = e;
              },
              get func() {
                return n;
              },
              set func(e) {
                n = e;
              },
            }
          );
        }),
          (e.addKeyDownListener = function (e, t, n) {
            void 0 === n && (n = !0);
            var o = !0,
              i = function (e) {
                if (
                  "Alt" !== e.key &&
                  "ControlLeft" !== e.key &&
                  "ControlRight" !== e.key &&
                  "ShiftLeft" !== e.key &&
                  "ShiftRight" !== e.key
                )
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n],
                      i = o.char;
                    if (
                      (!0 === o.modifiers.shift &&
                        (i = i.toString().toUpperCase()),
                      e.key === i)
                    ) {
                      if (
                        void 0 !== o.modifiers.alt &&
                        e.altKey != o.modifiers.alt
                      )
                        continue;
                      if (
                        void 0 !== o.modifiers.shift &&
                        e.shiftKey != o.modifiers.shift
                      )
                        continue;
                      if (
                        void 0 !== o.modifiers.ctrl &&
                        e.ctrlKey != o.modifiers.ctrl
                      )
                        continue;
                      o.func(e.key, {
                        shift: e.shiftKey,
                        ctrl: e.ctrlKey,
                        alt: e.altKey,
                      });
                    }
                  }
              },
              a = {
                get enabled() {
                  return o;
                },
                set enabled(t) {
                  ((o = t), t)
                    ? (n ? e.developmentmode : e.allowkeyboardinput) &&
                      document.addEventListener("keydown", i)
                    : document.removeEventListener("keydown", i);
                },
              };
            return (a.enabled = !0), a;
          }),
          (e.addKeyDownComboListener = function (e, t, n) {
            void 0 === n && (n = !0);
            var o = !0,
              i = t.map(function () {
                return 0;
              }),
              a = function (e) {
                "Alt" !== e.key &&
                  "ControlLeft" !== e.key &&
                  "ControlRight" !== e.key &&
                  "ShiftLeft" !== e.key &&
                  "ShiftRight" !== e.key &&
                  t.forEach(function (t, n) {
                    var o = i[n],
                      a = t.keys[o],
                      r = a.key,
                      s = a.modifiers;
                    if (
                      (!0 === s.shift && (r = r.toString().toUpperCase()),
                      e.key === r)
                    ) {
                      if (void 0 !== s.alt && e.altKey != s.alt)
                        return void (o = 0);
                      if (void 0 !== s.shift && e.shiftKey != s.shift)
                        return void (o = 0);
                      if (void 0 !== s.ctrl && e.ctrlKey != s.ctrl)
                        return void (o = 0);
                      ++o >= t.keys.length && ((o = 0), t.func());
                    } else o = 0;
                    i[n] = o;
                  });
              },
              r = {
                get enabled() {
                  return o;
                },
                set enabled(t) {
                  ((o = t), t)
                    ? (n ? e.developmentmode : e.allowkeyboardinput) &&
                      document.addEventListener("keydown", a)
                    : document.removeEventListener("keydown", a);
                },
              };
            return (r.enabled = !0), r;
          }),
          (e.addKeyboardComboShortCut = function (e, t, n, o) {
            void 0 === o && (o = !0);
            var i = !0;
            if (o ? e.developmentmode : e.allowkeyboardinput) {
              var a = 0;
              document.addEventListener("keydown", function (e) {
                if (i) {
                  if (
                    "Alt" === e.key ||
                    "ControlLeft" === e.key ||
                    "ControlRight" === e.key ||
                    "ShiftLeft" === e.key ||
                    "ShiftRight" === e.key
                  )
                    return;
                  var o = t[a],
                    r = o.char;
                  if (
                    (!0 === o.modifiers.shift &&
                      (r = r.toString().toUpperCase()),
                    e.key === r)
                  ) {
                    if (
                      void 0 !== o.modifiers.alt &&
                      e.altKey != o.modifiers.alt
                    )
                      return void (a = 0);
                    if (
                      void 0 !== o.modifiers.shift &&
                      e.shiftKey != o.modifiers.shift
                    )
                      return void (a = 0);
                    if (
                      void 0 !== o.modifiers.ctrl &&
                      e.ctrlKey != o.modifiers.ctrl
                    )
                      return void (a = 0);
                    ++a >= t.length && ((a = 0), n());
                  } else a = 0;
                } else a = 0;
              });
            }
            return {
              get enabled() {
                return i;
              },
              set enabled(e) {
                i = e;
              },
              get func() {
                return n;
              },
              set func(e) {
                n = e;
              },
            };
          });
      })(e.utils || (e.utils = {}));
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      (e.roundAfterMaximumDecimals = function (e) {
        return Math.round(e * Math.pow(10, 6)) / Math.pow(10, 6);
      }),
        (e.formatAmountUsingGlobalFormatter = function (e) {
          return t.globalFormatter.formatAmount(e);
        });
      var t = (function () {
        function e() {
          (this._currency = "EUR"), (this._langauge = "en");
        }
        return (
          (e.initGlobalFormatter = function (t, n, o) {
            return e.globalFormatter.init(t, n, o), e.globalFormatter;
          }),
          (e.replaceWithExternalFormatter = function (t) {
            e.globalFormatter._customFormatter = t;
          }),
          (e.prototype.init = function (e, t, n) {
            if (
              ((this._langauge = t),
              (this._currency = e),
              (this._decimalPlaces = n),
              "PSD" === e && (e = "USD"),
              void 0 !== n)
            )
              try {
                this._defNumberFormat = new Intl.NumberFormat(t, {
                  currency: e,
                  style: "currency",
                  minimumFractionDigits: n,
                  maximumFractionDigits: n,
                  currencyDisplay: "code",
                  useGrouping: !1,
                });
              } catch (o) {
                (t = "en"),
                  (this._defNumberFormat = new Intl.NumberFormat(t, {
                    currency: e,
                    style: "currency",
                    minimumFractionDigits: n,
                    maximumFractionDigits: n,
                    currencyDisplay: "code",
                    useGrouping: !1,
                  }));
              }
            else
              try {
                this._defNumberFormat = new Intl.NumberFormat(t, {
                  currency: e,
                  style: "currency",
                  currencyDisplay: "code",
                  useGrouping: !1,
                });
              } catch (n) {
                (t = "en"),
                  (this._defNumberFormat = new Intl.NumberFormat(t, {
                    currency: e,
                    style: "currency",
                    currencyDisplay: "code",
                    useGrouping: !1,
                  }));
              }
          }),
          (e.prototype.getMostPreciseNumberFormat = function (e) {
            return this._defNumberFormat;
          }),
          (e.prototype.getDecimalPlacesInAmount = function (e) {
            return (e.toString().split(".")[1] || "").length;
          }),
          (e.prototype.formatAmount = function (e) {
            return this.formatAmount2(e, 1);
          }),
          (e.prototype.formatAmount2 = function (e, t) {
            if (isNaN(e) || null == e) return "";
            if (
              ((e = Math.round(e * Math.pow(10, 6)) / Math.pow(10, 6)),
              this._customFormatter)
            )
              return this._customFormatter(
                e,
                this._langauge,
                this._currency,
                t
              );
            var n = (
              "number" == typeof (t = null != t ? t : e)
                ? this._defNumberFormat
                : t
            ).format(e);
            return (n = n.replace(/[^\d.,]/g, ""));
          }),
          (e.prototype.formatPaytablePayoutValue = function (e, t) {
            var n =
                this._defNumberFormat.resolvedOptions().maximumFractionDigits,
              o = n + n,
              i = Math.round(e * t * Math.pow(10, o)) / Math.pow(10, o);
            return this.formatAmount2(i, i);
          }),
          (e.prototype.getFastFormatFunc = function (e) {
            var t = this._defNumberFormat,
              n = new RegExp("[Â  " + this._currency + "]", "g");
            return function (e) {
              var o = t.format(e);
              return (o = o.replace(n, ""));
            };
          }),
          (e.globalFormatter = new e()),
          e
        );
      })();
      e.AmountFormatter = t;
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t, n;
      e.throttleCPU = function (e) {
        var o;
        (n = e),
          t ||
            ((t = !0),
            (o = function () {
              for (var e = 0, t = 0; t < n; t++) e += t;
              return window.requestAnimationFrame(o), e;
            }),
            window.requestAnimationFrame(o));
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        (e.RGBtoHEX = function (e, t, n) {
          return (e << 16) | (t << 8) | n;
        }),
          (e.HEXtoRGB = function (e) {
            return { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
          });
      })(e.colors || (e.colors = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      e.convertFuncToPromise = function (e) {
        for (var t = this, n = [], o = 1; o < arguments.length; o++)
          n[o - 1] = arguments[o];
        return new Promise(function (o, i) {
          return __awaiter(t, void 0, void 0, function () {
            var t, a;
            return __generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    r.trys.push([0, 2, , 3]), (t = o), [4, e.apply(void 0, n)]
                  );
                case 1:
                  return t.apply(void 0, [r.sent()]), [3, 3];
                case 2:
                  return (a = r.sent()), i(a), [3, 3];
                case 3:
                  return [2];
              }
            });
          });
        });
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        function t() {
          return { start: null, end: null };
        }
        function n(e, t) {
          var n = { data: t, next: null };
          return (
            e.end
              ? ((e.end.next = n), (e.end = n))
              : ((e.start = n), (e.end = n)),
            e
          );
        }
        function o(e, t) {
          for (var n = e.start; n; ) t(n.data), (n = n.next);
        }
        (e.createSimpleLinkedList = t),
          (e.addNodeToList = n),
          (e.popFromList = function (e) {
            if (e.end) {
              var t = e.end.data,
                n = e.start;
              if (n === e.end) return (e.start = null), (e.end = null), t;
              for (; n.next != e.end; ) n = n.next;
              return (n.next = null), (e.end = n), t;
            }
            return null;
          }),
          (e.shiftList = function (e) {
            if (e.start) {
              var t = e.start.data;
              return (
                e.end === e.start
                  ? ((e.start = null), (e.end = null))
                  : (e.start = e.start.next),
                t
              );
            }
            return null;
          }),
          (e.unshiftList = function (e, t) {
            return e.start
              ? ((e.start = { next: e.start, data: t }), e)
              : n(e, t);
          }),
          (e.getNodeFromList = function (e, t) {
            if (null == e.start) return null;
            for (var n = e.start; n; ) {
              if (n.data === t) return n;
              n = n.next;
            }
            return null;
          }),
          (e.insertNodeIntoList = function (e, t, n) {
            if (null == e.start) this.addNode(t);
            else {
              for (var o = e.start; o; ) {
                if (o === n || o.data === t)
                  if (o === e.end) this.addNode(t);
                  else if (o === e.start) {
                    (o.next = e.start), (e.start = o);
                    break;
                  }
                o = o.next;
              }
              this.addNode(t);
            }
            return e;
          }),
          (e.removeNodeFromList = function (e, t) {
            if (null == e.start) return e;
            for (var n = e.start; n; )
              n.data === t &&
                (n === e.start && (e.start = n.next),
                n === e.end && (e.end = e.start)),
                (n = n.next);
            return e;
          }),
          (e.reduceList = function (e, t, n) {
            if (null == e.start) return n;
            for (var o = n, i = e.start, a = 0; i; )
              (o = t(o, i.data, a)), a++, (i = i.next);
            return o;
          }),
          (e.iterateOverList = o),
          (e.createLinkedListFromArray = function (e, t) {
            t =
              t ||
              function (e, t) {
                return !0;
              };
            var o = { start: null, end: null };
            return (
              null != e &&
                e.forEach(function (e, i) {
                  t(e, i) && n(o, e);
                }),
              o
            );
          }),
          (e.filterList = function (e, t) {
            var i = { start: null, end: null };
            return (
              o(e, function (e) {
                t(e) && n(i, e);
              }),
              i
            );
          });
      })(e.linkedlist || (e.linkedlist = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        e.createDblLinkedList = function () {
          var e = 0,
            t = {
              _head: null,
              _tail: null,
              add: function (n) {
                var o = { data: n, _next: null, _prev: null };
                return (
                  null == t._head
                    ? ((t._head = o), (t._tail = o), (e = 1))
                    : ((t._tail._next = o),
                      (o._prev = t._tail),
                      (t._tail = o),
                      e++),
                  o
                );
              },
              remove: function (n) {
                var o = n;
                null != t._head &&
                  (null != o._prev
                    ? ((o._prev._next = o._next),
                      t._tail == o && (t._tail = o._prev))
                    : ((t._head = o._next),
                      null == t._head && (t._tail = null)),
                  e--);
              },
              find: function (e, n) {
                void 0 === n && (n = !1);
                var o = [];
                if (n)
                  for (var i = t._tail; i; )
                    i.data === e && o.push(i), (i = i._prev);
                else
                  for (i = t._head; i; )
                    i.data === e && o.push(i), (i = i._next);
                return o;
              },
              locate: function (e) {
                for (var n = t._head; n; ) {
                  if (e(n.data)) return n.data;
                  n = n._next;
                }
              },
              shift: function () {
                if (null == t._head) return null;
                var e = t._head;
                return t.remove(t._head), e.data;
              },
              unshift: function () {
                for (var n = [], o = 0; o < arguments.length; o++)
                  n[o] = arguments[o];
                var i = n.reverse();
                if (null == t._head)
                  i.forEach(function (e) {
                    t.add(e);
                  });
                else {
                  var a = t._head,
                    r = t._tail;
                  (t._head = null),
                    (t._tail = null),
                    i.forEach(function (e) {
                      t.add(e);
                    }),
                    (t._tail._next = a),
                    (a._prev = t._tail),
                    (t._tail = r),
                    (e += n.length);
                }
              },
              forEach: function (e) {
                for (var n = t._head; n; )
                  e(n.data, null === n._next), (n = n._next);
              },
              filter: function (e) {
                for (var n = t._head; n; )
                  e(n.data) || t.remove(n), (n = n._next);
              },
              reduce: function (e, n) {
                for (var o = t._head, i = n; o; ) e(i, o.data), (o = o._next);
                return i;
              },
              toArray: function () {
                return t.reduce(function (e, t) {
                  return e.push(t), e;
                }, []);
              },
              at: function (e) {
                for (var n = t._head, o = 0; n; ) {
                  if (o === e) return n.data;
                  (n = n._next), o++;
                }
              },
              insert: function (e, t) {
                var n = t,
                  o = { data: e, _next: n, _prev: n._prev };
                n._prev ? (n._prev = o) : (this._head = o);
              },
              head: function () {
                return this._head;
              },
              tail: function () {
                return this._tail;
              },
              next: function (e) {
                return e._next;
              },
              prev: function (e) {
                return e._prev;
              },
              get length() {
                return e;
              },
            };
          return t;
        };
      })(e.linkedlist || (e.linkedlist = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = e.utils.linkedlist.createSimpleLinkedList,
          o = e.utils.linkedlist.createDblLinkedList,
          i = (function () {
            function t(e, t) {
              (this._count = 0),
                (this._factory = e),
                (this._items = n()),
                (this._applyOnReturn = t);
            }
            return (
              (t.prototype.getItem = function () {
                var t = e.utils.linkedlist.shiftList(this._items);
                return t ? this._count-- : (t = this._factory()), t;
              }),
              (t.prototype.getItems = function (t) {
                for (var n = [], o = 0; o < t; o++) {
                  var i = e.utils.linkedlist.shiftList(this._items);
                  i ? this._count-- : (i = this._factory()), (n[o] = i);
                }
                return n;
              }),
              (t.prototype.returnItem = function (t) {
                e.utils.linkedlist.addNodeToList(this._items, t),
                  this._count++,
                  this._applyOnReturn && this._applyOnReturn(t);
              }),
              (t.prototype.returnItems = function (e) {
                var t = this;
                e.forEach(function (e) {
                  t.returnItem(e);
                });
              }),
              t
            );
          })();
        t.FastPool = i;
        var a = (function () {
          function e(e, t) {
            (this._inUse = o()), (this._pool = new i(e, t));
          }
          return (
            (e.prototype.getItem = function () {
              var e = this._pool.getItem();
              return this._inUse.add(e), e;
            }),
            (e.prototype.getItems = function (e) {
              for (var t = [], n = 0; n < e; n++) t.push(this.getItem());
              return t;
            }),
            (e.prototype.returnItem = function (e) {
              var t = this._inUse.find(e)[0];
              t && (this._inUse.remove(t), this._pool.returnItem(e));
            }),
            (e.prototype.returnItems = function (e) {
              var t = this;
              e.forEach(function (e) {
                t.returnItem(e);
              });
            }),
            (e.prototype.returnAllItemsInUse = function () {
              var e = this;
              this.forEachItemInUse(function (t) {
                e._pool.returnItem(t);
              }),
                (this._inUse = o());
            }),
            (e.prototype.forEachItemInUse = function (e) {
              this._inUse.forEach(e);
            }),
            e
          );
        })();
        t.TrackingFastPool = a;
        var r = (function () {
          function e(e, t) {
            (this._inUse = o()), (this._pool = new i(e, t));
          }
          return (
            (e.prototype.getItem = function () {
              var e = this._pool.getItem();
              return (e.node = this._inUse.add(e)), (e.pool = this), e;
            }),
            (e.prototype.getItems = function (e) {
              for (var t = [], n = 0; n < e; n++) t.push(this.getItem());
              return t;
            }),
            (e.prototype.returnItem = function (e) {
              var t = e.node;
              t &&
                (this._inUse.remove(t),
                (e.node = null),
                this._pool.returnItem(e));
            }),
            (e.prototype.returnItems = function (e) {
              var t = this;
              e.forEach(function (e) {
                t.returnItem(e);
              });
            }),
            (e.prototype.returnAllItemsInUse = function () {
              var e = this;
              this.forEachItemInUse(function (t) {
                e._pool.returnItem(t);
              }),
                (this._inUse = o());
            }),
            (e.prototype.forEachItemInUse = function (e) {
              this._inUse.forEach(e);
            }),
            e
          );
        })();
        t.TrackingFastPool2 = r;
      })(t.pools || (t.pools = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        var t = (function () {
          function e(e) {
            this._index = -1;
            var t = [];
            (this._objects = t),
              e.forEach(function (e) {
                t.push({ obj: e, used: !1, owner: null });
              });
          }
          return (
            (e.prototype.getItem = function (e) {
              var t = null,
                n = this._index;
              do {
                if (
                  (this._index++,
                  this._index >= this._objects.length && (this._index = 0),
                  !(t = this._objects[this._index]).used)
                )
                  break;
                if (this._index == n)
                  throw new Error(
                    "All elements in the pool are in use. You need a larger pool."
                  );
              } while (null == t);
              return (t.used = !0), (t.owner = e), t.obj;
            }),
            (e.prototype.returnItem = function (e) {
              for (var t = 0; t < this._objects.length; t++) {
                var n = this._objects[t];
                n.obj === e && ((n.used = !1), (n.owner = null));
              }
            }),
            e
          );
        })();
        e.FixedPool = t;
      })(e.pools || (e.pools = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = function (e, t, n) {
          (this.id = e), (this.remapEvent = n), (this.children = t);
        },
        n = (function () {
          function e(e) {
            if (((this._currentNode = null), (this._nodeMap = {}), e)) {
              var t = e.nodes;
              for (var n in t) this.addNode(n, t[n].children, t[n].remapEvent);
            }
          }
          return (
            (e.prototype.progress = function (e) {
              if (null !== this._currentNode) {
                for (var t = 0; t < this._currentNode.children.length; t++) {
                  var n = this._currentNode.children[t];
                  if (n === e)
                    return void this.setCurrentNode(n, this._nodeMap);
                }
                throw new Error(
                  "Invalid transition: " + this._currentNode.id + " to " + e
                );
              }
              this.setCurrentNode(e, this._nodeMap);
            }),
            (e.prototype.addNode = function (e, n, o) {
              return (this._nodeMap[e] = new t(e, n, o)), this;
            }),
            (e.prototype.setCurrentNode = function (e, t) {
              var n = t[e];
              if (null == n) throw new Error("Invalid node: " + e);
              if (n.remapEvent) {
                var o = n.remapEvent().nodes;
                for (var i in o)
                  (this._nodeMap[i].children =
                    o[i].children || this._nodeMap[i].children),
                    (this._nodeMap[i].remapEvent =
                      o[i].remapEvent || this._nodeMap[i].remapEvent);
              }
              this._currentNode = n;
            }),
            e
          );
        })();
      e.FlowEnforcer = n;
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = void 0;
      function o() {
        if (/iPad/.test(navigator.platform)) {
          if (null != n) return n;
          var e,
            t = document.createElement("canvas");
          if (t) {
            var o = t.getContext("webgl") || t.getContext("experimental-webgl");
            if (o) {
              var i = o.getExtension("WEBGL_debug_renderer_info");
              i && (e = o.getParameter(i.UNMASKED_RENDERER_WEBGL));
            }
          }
          if (window.screen.height / window.screen.width == 1024 / 768)
            if (1 === window.devicePixelRatio)
              switch (e) {
                default:
                  return (n = "iPad, iPad 2, iPad Mini");
                case "PowerVR SGX 535":
                  return (n = "iPad");
                case "PowerVR SGX 543":
                  return (n = "iPad 2, iPad Mini");
              }
            else
              switch (e) {
                default:
                  return (n =
                    "iPad 3, iPad 4, iPad 5, iPad Mini 2, iPad Mini 3, iPad Mini 4, iPad Air, iPad Air 2");
                case "PowerVR SGX 543":
                  return (n = "iPad 3");
                case "PowerVR SGX 554":
                  return (n = "iPad 4");
                case "Apple A7 GPU":
                  return (n = "iPad Air, iPad Mini 2, iPad Mini 3");
                case "Apple A8X GPU":
                  return (n = "iPad Air 2");
                case "Apple A8 GPU":
                  return (n = "iPad Mini 4");
                case "Apple A9 GPU":
                  return (n = "iPad 5, iPad Pro 9.7");
              }
          else {
            if (window.screen.height / window.screen.width == 1112 / 834)
              return (n = "iPad Pro 10.5");
            if (window.screen.height / window.screen.width != 1366 / 1024)
              return (n = void 0);
            switch (e) {
              default:
                return (n = "iPad Pro 12.9, iPad Pro 12.9 (2nd Gen)");
              case "Apple A10X GPU":
                return (n = "iPad Pro 12.9 (2nd Gen)");
              case "Apple A9 GPU":
                return (n = "iPad Pro 12.9");
            }
          }
        }
      }
      (t.getIPadModel = o),
        (t.isIPadModel = function (t) {
          return !!e.utils
            .getIPadModel()
            .match(new RegExp("(" + t + ",)|(" + t + "$)"));
        });
      var i = {
        iPad: 256,
        "iPad 2": 512,
        "iPad Mini": 512,
        "iPad 3": 1024,
        "iPad 4": 1024,
        "iPad Air": 1024,
        "iPad Mini 2": 1024,
        "iPad Mini 3": 1024,
        "iPad 5": 2048,
        "iPad Pro 9.7": 2048,
        "iPad Air 2": 2048,
        "iPad Mini 4": 2048,
        "iPad Pro 10.5": 4096,
        "iPad Pro 12.9": 4096,
        "iPad Pro 12.9 (2nd Gen)": 4096,
      };
      t.getEstimatedIPadRAM = function () {
        var e = o();
        if (!e) return 2;
        for (var t = e.split(", "), n = 4096, a = 0; a < t.length; a++) {
          var r = t[a],
            s = i[r];
          s && s < n && (n = s);
        }
        return n / 1024;
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      e.invokeOnGraph = function e(t, n) {
        n(t),
          t.children.forEach(function (t) {
            e(t, n);
          });
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        function t(e, t, n, o) {
          void 0 === o && (o = !1);
          var i = function (a, r, s) {
            t(a, r, s) && (o && e.remove(i), n(a, r, s));
          };
          return e.add(i), i;
        }
        (e.listenIf = t),
          (e.listenWhile = function (e, t, n) {
            var o = function (i, a, r) {
              !0 === t(i, a, r) ? n(i, a, r) : e.remove(o);
            };
            return e.add(o), o;
          }),
          (e.listenForId = function (e, n, o, i, a) {
            return (
              void 0 === i && (i = !1),
              void 0 === a && (a = !0),
              a && (n = n.trim()),
              t(
                e,
                function (e) {
                  return a ? e.trim() == n : e === n;
                },
                o,
                i
              )
            );
          });
      })(e.signals || (e.signals = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      t.createLogicalGate = function (t, n) {
        var o = {},
          i = !0,
          a = !1,
          r = null,
          s = null,
          u = null,
          l = null,
          d = [],
          c = 0;
        return (
          (r = {
            addCondition: function (e, t, n, i) {
              if (!a)
                return (
                  (o[e] = {
                    alive: !0,
                    initialValue: t,
                    matchingValue: n,
                    currentValue: t,
                    passed: t === n,
                    passedCallback: i,
                  }),
                  r
                );
            },
            replacePassedCallback: function (e, t) {
              return (o[e].passedCallback = t), r;
            },
            name: t,
            reset: function () {
              if ((c++, !a))
                for (var e in ((i = !0), o)) {
                  var t = o[e].initialValue;
                  o[e].currentValue = t;
                  var n = o[e].matchingValue;
                  (o[e].passed = t === n), (o[e].alive = !0);
                }
            },
            revive: function () {
              if (!a) for (var e in ((i = !0), o)) o[e].alive = !0;
            },
            getCondition: function (e) {
              return o[e].currentValue;
            },
            setCondition: function (e, t) {
              if (i && !a) {
                var n = o[e];
                if (0 != n.alive) {
                  n.currentValue = t;
                  var r = n.currentValue === n.matchingValue;
                  (n.passed = r),
                    !(function () {
                      for (var e in o) if (!o[e].passed) return !1;
                      return (i = !1), !0;
                    })()
                      ? r &&
                        ((n.alive = !1),
                        n.passedCallback && n.passedCallback(e, n.currentValue))
                      : (d.forEach(function (e) {
                          e.destroy();
                        }),
                        (n.alive = !1),
                        n.passedCallback && n.passedCallback(e, n.currentValue),
                        u || l ? s.apply(u, l) : s());
                }
              }
            },
            hasCondition: function (e) {
              return o.hasOwnProperty(e);
            },
            getSetter: function (e, t) {
              return function () {
                for (var n = [], o = 0; o < arguments.length; o++)
                  n[o] = arguments[o];
                r.setCondition(
                  e,
                  "function" == typeof t ? t.apply(null, n) : t
                );
              };
            },
            getSafeSetter: function (e, t) {
              var n = c;
              return function () {
                for (var o = [], i = 0; i < arguments.length; i++)
                  o[i] = arguments[i];
                c === n &&
                  r.setCondition(
                    e,
                    "function" == typeof t ? t.apply(null, o) : t
                  );
              };
            },
            then: function (e, t, n) {
              a || ((s = e), (u = n), (l = t));
            },
            destroy: function () {
              a = !0;
            },
            destroysGate: function (e) {
              if (e) return d.push(e), r;
            },
            inspect: function (n) {
              var r;
              if (n) {
                var s = {};
                for (var u in o)
                  if (o.hasOwnProperty(u)) {
                    var l = o[u],
                      d = { passed: l.passed };
                    l.passed ||
                      ((d.initial = l.initialValue),
                      (d.current = l.currentValue),
                      (d.expected = l.matchingValue)),
                      (s[u] = d);
                  }
                (r = { name: t, conditions: s }),
                  e.utils.logger.log(JSON.stringify(r, null, 2));
              } else
                (r = { name: t, alive: i, destroyed: a, conditions: o }),
                  e.utils.logger.log(JSON.stringify(r));
            },
          }),
          n && r.then(n),
          r
        );
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = 0;
      (e.makeFunctionUnique = function (e, n, o) {
        var i = function (t) {
            return e.apply(n, o || t);
          },
          a =
            "function(){ var tk__mfu__uuid__" + t + "; return f.apply(s,p); }";
        return (
          t++,
          (i.toString = function () {
            return a;
          }),
          i
        );
      }),
        (e.makeMethodUnique = function (e, n) {
          var o = n[e],
            i = (n[e] = function () {
              return o.apply(n, arguments);
            }),
            a =
              "function(){ var tk__mfu__uuid__" +
              t +
              "; return f.apply(s,p); }";
          t++,
            (i.toString = function () {
              return a;
            });
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        (e.cdf = function (e, t, n) {
          return 0.5 * (1 + this.erf((e - t) / Math.sqrt(2 * n)));
        }),
          (e.erf = function (e) {
            var t = e >= 0 ? 1 : -1,
              n = 1 / (1 + 0.3275911 * (e = Math.abs(e)));
            return (
              t *
              (1 -
                ((((1.061405429 * n - 1.453152027) * n + 1.421413741) * n -
                  0.284496736) *
                  n +
                  0.254829592) *
                  n *
                  Math.exp(-e * e))
            );
          });
      })(e.Maths || (e.Maths = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = (function () {
          function t(e) {
            (this._factory = e), (this._items = []), (this._all = []);
          }
          return (
            (t.prototype.applySetting = function (t) {
              this._items.forEach(function (n) {
                e.utils.copyProperties(n, t);
              });
            }),
            (t.prototype.getItem = function () {
              if (0 == this._items.length) {
                var e = this._factory();
                return this._all.push(e), e;
              }
              return this._items.pop();
            }),
            (t.prototype.returnItem = function (e) {
              -1 == this._items.indexOf(e) && this._items.push(e);
            }),
            (t.prototype.returnAllItems = function (e) {
              this._all.forEach(function (t) {
                e(t);
              }),
                (this._items = this._all.concat());
            }),
            (t.prototype.prewarm = function (t, n) {
              for (var o = 0; o < t; o++) {
                var i = this._factory();
                n && e.utils.copyProperties(i, n),
                  this._all.push(i),
                  this._items.push(i);
              }
            }),
            t
          );
        })();
        t.Pool = n;
      })(t.pools || (t.pools = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      (e.remapLangIso = function (e) {
        var t = { "zh-TR": "zht", "zh-TW": "zht", "zh-HK": "zht", vi: "vn" }[e];
        return void 0 !== t && (e = t), e;
      }),
        (e.getLanguageLayout = function (e, t, n) {
          var o = e.split("-")[0];
          return null != n[t][e]
            ? n[t][e]
            : o != e && null != n[t][o]
            ? n[t][o]
            : null != n[t].def
            ? n[t].def
            : n[t];
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      e.replaceWithClosureList = function (e, t, n) {
        void 0 === n && (n = !1);
        var o = e[t];
        if (o && null != o.__linkedList && !1 === n) return o;
        var i = { start: null, end: null },
          a = (e[t] = function () {
            for (var e, t = i.start; t; ) {
              var n = t.data;
              (e = n.f.apply(n.s, n.p || arguments)), (t = t.next);
            }
            return e;
          });
        return (
          (a.add = function (e, t, n) {
            if (i.start) {
              var o = i.end;
              (i.end = { data: { f: e, s: n, p: t }, next: null }),
                (o.next = i.end);
            } else
              (i.start = { data: { f: e, s: n, p: t }, next: null }),
                (i.end = i.start);
          }),
          (a.remove = function (e, t) {
            if (i.start) {
              var n = i.start;
              if (n.data.f === e && n.data.s === t)
                (i.start = n.next), n === i.end && (i.end = null);
              else
                do {
                  null != n.next &&
                    n.next.data.f === e &&
                    n.data.s === t &&
                    ((n.next = n.next.next),
                    n.next === i.end && (i.end = null)),
                    (n = n.next);
                } while (n);
            }
          }),
          (a.__linkedList = function () {
            return i;
          }),
          a
        );
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = e.utils.linkedlist.createDblLinkedList,
        o = (function () {
          function e(e) {
            (this._ll = n()), (e = e || []);
            for (var t = 0; t < e.length; t++) this.add(e[t].id, e[t].func);
          }
          return (
            (e.prototype.add = function (e, t) {
              this._ll.locate(function (n) {
                return n.id === e && ((n.func = t), !0);
              }) || this._ll.add({ id: e, func: t });
            }),
            (e.prototype.remove = function (e) {
              this._ll.filter(function (t) {
                return t.id != e;
              });
            }),
            (e.prototype.execute = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var n = null;
              return (
                this._ll.forEach(function (t) {
                  n = t.func.apply(t, e) || n;
                }),
                n
              );
            }),
            e
          );
        })();
      t.StrategyChain = o;
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      function t(e) {
        var t = 0;
        e = e.concat();
        return function () {
          for (var n = [], o = 0; o < arguments.length; o++)
            n[o] = arguments[o];
          var i = e[t].apply(e, n);
          return (t = (t + 1) % e.length), i;
        };
      }
      (e.createStrategyToggler = function (e, t) {
        var n,
          o = function () {
            for (var t = [], o = 0; o < arguments.length; o++)
              t[o] = arguments[o];
            var a = e.apply(void 0, t);
            return (n = i), a;
          },
          i = function () {
            for (var e = [], i = 0; i < arguments.length; i++)
              e[i] = arguments[i];
            var a = t.apply(void 0, e);
            return (n = o), a;
          };
        return (
          (n = o),
          function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return n.apply(void 0, e);
          }
        );
      }),
        (e.createMultiStrategyToggler = t),
        (e.createStrategyTogglerWithOnLoopCallback = function (e, n, o) {
          var i = (n = n.concat())[n.length - 1],
            a = !1;
          n[n.length - 1] = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var r = i.apply(void 0, e);
            return (a = !o(n)), r;
          };
          var r = t(n);
          return function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return a ? void 0 : r.apply(void 0, e);
          };
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e(e) {
          this._groups = [];
          for (var t = 0; t < e; t++)
            this._groups[t] = { activated: !1, callbacks: [] };
        }
        return (
          (e.prototype.activateOne = function (e) {
            void 0 === e && (e = 0);
            var t = this._groups[e];
            t || (t = this._groups[e] = { activated: !1, callbacks: [] }),
              !1 === t.activated &&
                ((t.activated = !0),
                t.callbacks.forEach(function (e) {
                  e();
                }));
          }),
          (e.prototype.activatePriorTo = function (e) {
            for (var t = 0; t < e; t++) {
              this._groups[t] && this.activateOne(t);
            }
          }),
          (e.prototype.activateSubsequentTo = function (e) {
            for (var t = e + 1; t < this._groups.length; t++) {
              this._groups[t] && this.activateOne(t);
            }
          }),
          (e.prototype.activateSome = function (e) {
            var t = this;
            e.forEach(function (e) {
              t.activateOne(e);
            });
          }),
          (e.prototype.activateNext = function () {
            for (var e = -1, t = 0; t < this._groups.length; t++) {
              if (!1 === this._groups[t].activated) {
                e = t;
                break;
              }
            }
            return this.activateOne(e), e;
          }),
          (e.prototype.activateAll = function () {
            var e = this;
            this._groups.forEach(function (t, n) {
              e.activateOne(n);
            });
          }),
          (e.prototype.addCallback = function (e, t) {
            void 0 === t && (t = 0);
            var n = this._groups[t];
            n || (n = this._groups[t] = { activated: !1, callbacks: [] }),
              n.callbacks.push(e),
              n.activated && e();
          }),
          (e.prototype.removeCallback = function (e, t) {
            void 0 === t && (t = 0);
            var n = this._groups[t];
            n &&
              (n.callbacks = n.callbacks.filter(function (t) {
                return t != e;
              }));
          }),
          (e.prototype.clearCallbacksOf = function (e) {
            var t = this._groups[e];
            t && (t = { activated: t.activated, callbacks: [] });
          }),
          e
        );
      })();
      e.TriggerCallbackGroups = t;
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      function t(e, t, n) {
        return (
          (n = n || function (e) {}),
          function () {
            for (var o = [], i = 0; i < arguments.length; i++)
              o[i] = arguments[i];
            var a = t.apply(null, o);
            return n(e.inspect()), a;
          }
        );
      }
      (e.enforceReadyCallOnGate = function (e) {
        var t = e;
        t.addCallback("ready");
        var n = t.addCallback;
        return (
          (t.addCallback = function (e, t, o) {
            if ("ready" === e)
              throw new Error(
                "You cannot use the sender id 'ready' in this kind of gate. See createWaitForCallbacksAndReadyGate for more information"
              );
            return n(e, t, o);
          }),
          (t.ready = function () {
            t.completeCallback("ready");
          }),
          t
        );
      }),
        (e.enforceAsyncCallbacksOnGate = function (e, t) {
          return (function (e, t) {
            var n = e.completeCallback;
            return (
              (e.completeCallback = function (e) {
                t.delayedCall(0, function () {
                  return n(e);
                });
              }),
              e
            );
          })(t, e);
        }),
        (e.wrapFunctionInWaitForCallbacksGateInspector = t),
        (e.wrapCompleteCallbackForGateInInspectorCall = function (e, n) {
          (n = n || function (e) {}),
            (e.completeCallback = t(e, e.completeCallback, n));
        }),
        (e.createWaitForCallbacksGate = function (e, t, n, o) {
          void 0 === o && (o = !0);
          var i,
            a,
            r,
            s = [],
            u = null,
            l = !0;
          return (
            (u = {
              addCallback: function (e, t, n, o) {
                return (
                  void 0 === o && (o = !1),
                  null == n && (n = !1),
                  o &&
                    (s = s.filter(function (t) {
                      return t.sender !== e;
                    })),
                  s.push({ sender: e, complete: !1, cb: t, invokeOnce: n }),
                  function () {
                    u.completeCallback(e);
                  }
                );
              },
              completeCallback: function (e) {
                var t = !0;
                s.forEach(function (n) {
                  if (n.sender === e) {
                    n.complete = !0;
                    var o = n.cb;
                    o && ((n.cb = n.invokeOnce ? null : o), o());
                  }
                  t = t && n.complete;
                }),
                  t &&
                    (u.prethen && u.prethen(),
                    l && (o && (l = !1), i && i.apply(a, r)),
                    u.postthen && u.postthen());
              },
              kill: function () {
                l = !1;
              },
              then: function (e, t, n) {
                (i = e), (r = t), (a = n);
              },
              inspect: function () {
                var e = [];
                return (
                  s.forEach(function (t) {
                    e.push({ sender: t.sender, completed: t.complete });
                  }),
                  e
                );
              },
            }),
            (i = e),
            (r = t),
            (a = n),
            u
          );
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      (e.convertStringArrayToNumberArray = function (e) {
        for (var t = [], n = 0; n < e.length; n++) t[n] = parseFloat(e[n]);
        return t;
      }),
        (e.convertNumberArrayToStringArray = function (e, t) {
          for (var n = [], o = 0; o < e.length; o++)
            n[o] = null != t ? t(e[o]) : "" + e[o];
          return n;
        }),
        (e.containsSame = function (e, t, n) {
          if ((void 0 === n && (n = !1), e.length != t.length)) return !1;
          for (var o = 0; o < e.length; o++)
            if (n) {
              if (e[o] !== t[o]) return !1;
            } else if (e[o] != t[o]) return !1;
          return !0;
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      t.createImposterObjectIfNeeded = function (t, n) {
        return null == t && ((t = {}), e.utils.copyProperties(t, n)), t;
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = [];
      function n(e, o) {
        o = o || function (e, t) {};
        for (var i = 0; i < t.length; i++) {
          var a = t[i];
          if (a.proto === e) {
            if (a.logger !== o)
              throw new Error(
                "Not allowed to use different loggers for the same prototype"
              );
            return;
          }
        }
        var r = e.constructor.name;
        Object.keys(e)
          .filter(function (t) {
            return (
              !!Object.getOwnPropertyDescriptor(e, t).value &&
              "function" == typeof e[t]
            );
          })
          .forEach(function (t) {
            var n = e[t];
            e[t] = function () {
              return o(r, t), n.apply(this, arguments);
            };
          }),
          (e = Object.getPrototypeOf(e)) && n(e, o);
      }
      (e.decoratePrototypeWithLoggerCall = n),
        (e.decoratePrototypesWithLoggerCalls = function (e, t) {
          e.forEach(function (e) {
            n(e, t);
          });
        }),
        (e.decorateInstanceWithLoggerCalls = function (e, t) {
          t = t || function (e, t) {};
          for (var n = Object.getPrototypeOf(e), o = n.constructor.name; n; ) {
            Object.keys(n)
              .filter(function (t) {
                return (
                  !!Object.getOwnPropertyDescriptor(n, t).value &&
                  "function" == typeof e[t]
                );
              })
              .forEach(function (n) {
                var i = e[n];
                (i = i.bind(e)),
                  (e[n] = function () {
                    return t(o, n), i.apply(e, arguments);
                  });
              }),
              (n = Object.getPrototypeOf(n));
          }
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      (e.enforceSingleInvocation = function (e, t, n) {
        var o = !1;
        return function () {
          if (o)
            throw (
              ((n = n || ""),
              new Error("Function '" + n + "' was invoked more than once."))
            );
          return (o = !0), e.apply(t || this, arguments);
        };
      }),
        (e.ensureSingleInvocation = function (e, t) {
          var n = function () {
            for (var o = [], i = 0; i < arguments.length; i++)
              o[i] = arguments[i];
            return (n = function () {}), e.apply(t, o);
          };
          return function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return n.apply(void 0, e);
          };
        }),
        (e.conditionalInvocation = function (e, t, n) {
          return (
            void 0 === n && (n = void 0),
            function () {
              for (var o = [], i = 0; i < arguments.length; i++)
                o[i] = arguments[i];
              if (t()) {
                var a = e.apply(void 0, o);
                return a;
              }
              return n;
            }
          );
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      (e.exposeObjectOnWindow = function (e, t) {
        window[e] = t;
      }),
        (e.exposeGetterOnWindow = function (e, t, n) {
          n && (t = t.bind(n)), Object.defineProperty(window, e, { get: t });
        }),
        (e.exposeSetterOnWindow = function (e, t, n) {
          n && (t = t.bind(n)), Object.defineProperty(window, e, { set: t });
        }),
        (e.exposeFunctionOnWindow = function (e, t, n) {
          n && (t = t.bind(n)), (window[e] = t);
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      function t(e) {
        void 0 === e && (e = !1);
        var t = NaN,
          n = void 0;
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
          var o = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
          o &&
            (n = [
              parseInt(o[1], 10),
              parseInt(o[2], 10),
              parseInt(o[3], 10),
            ]) &&
            (t = e ? n[1] : n[0]);
        }
        return t;
      }
      e.getIosVersion = t;
      var n = [
        [1280, 1762, 1920, 1280, 320, 480, 2, "iPhone 4"],
        [1280, 2114, 2272, 1280, 320, 568, 2, "iPhone 5 or 5s"],
        [1500, 2510, 2668, 1500, 375, 667, 2, "iPhone 6"],
        [1656, 2785, 2944, 1656, 414, 736, 3, "iPhone 6 plus"],
        [3072, 3936, 4096, 2912, 768, 1024, 1, "iPad 2"],
        [3072, 3938, 4096, 2914, 768, 1024, 2, "iPad Air or Retina"],
        [1656, 2785, 2944, 1656, 414, 736, 3, "iPhone 6 plus"],
        [1656, 2785, 2944, 1656, 414, 736, 3, "iPhone 7 plus"],
        [1500, 2509, 2668, 1500, 375, 667, 3, "iPhone 6 plus (Zoomed)"],
        [1500, 2509, 2668, 1500, 375, 667, 3, "iPhone 7 plus (Zoomed)"],
        [4096, 5306, 5464, 3938, 1024, 1366, 2, "iPad Pro"],
        [1280, 2554, 3248, 1500, 375, 812, 3, "iPhone X"],
      ];
      function o() {
        var e,
          t = void 0;
        window.gajus &&
          window.gajus.Scream &&
          (t = window.gajus.Scream._iosDeviceSpec),
          (e = (n = t || n).length);
        var o = "";
        for (e = (n || []).length; e--; )
          if (
            screen.width === n[e][4] &&
            screen.height === n[e][5] &&
            window.devicePixelRatio === n[e][6]
          ) {
            void 0 !== n[e] && (o = n[e][7]);
            break;
          }
        return o;
      }
      (e.getIosDeviceModel = o),
        (e.isLikelyToHaveIOSNotch = function () {
          var e = t();
          if (isNaN(e)) return !1;
          var n = o();
          return "iPhone X" === n || ("" !== n && screen.width >= 2554);
        }),
        (e.isLargeScreen = function () {
          return (
            screen.width * window.devicePixelRatio >= 1024 &&
            screen.height * window.devicePixelRatio >= 1024
          );
        }),
        (e.getPPI = function () {
          var e = document.createElement("div");
          e.style.width = "1in";
          var t = document.getElementsByTagName("body")[0];
          t.appendChild(e);
          var n = document.defaultView
            .getComputedStyle(e, null)
            .getPropertyValue("width");
          return t.removeChild(e), parseFloat(n);
        }),
        (e.getPPCM = function () {
          var e = document.createElement("div");
          e.style.width = "1cm";
          var t = document.getElementsByTagName("body")[0];
          t.appendChild(e);
          var n = document.defaultView
            .getComputedStyle(e, null)
            .getPropertyValue("width");
          return t.removeChild(e), parseFloat(n);
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      (t.initMultiArray = function (t) {
        for (var n = [], o = 1; o < arguments.length; o++)
          n[o - 1] = arguments[o];
        for (var i = n[0], a = 0; a < i; a++) {
          var r = [];
          (t[a] = r),
            e.utils.initMultiArray.apply(void 0, [r].concat(n.slice(1)));
        }
      }),
        (t.initArray = function (e, t) {
          for (var n = [], o = 0; o < t; o++) n[o] = e;
          return n;
        }),
        (t.fillArray = function (e, t, n, o) {
          var i = e;
          if (null == i.fill) {
            for (var a = n; a < o; a++) e[a] = t;
            return i;
          }
          return i.fill(t, n, o), i;
        }),
        (t.findArrayIndex = function (e, t) {
          var n = e;
          if (null == n.findIndex) {
            for (var o = 0; o < e.length; o++) if (1 == t(e[o])) return o;
            return -1;
          }
          return n.findIndex(t), n;
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      e.loadWebFont = function (e, t, n, o) {
        !(function (e, t, n, o) {
          var i = new XMLHttpRequest();
          i.open(e.method, e.url), (i.responseType = "arraybuffer");
          var a = e.headers || {};
          for (var r in a)
            if (a.hasOwnProperty(r)) {
              var s = a[r];
              i.setRequestHeader(r, s);
            }
          (i.onprogress = function (e) {
            o(e.loaded, e.total);
          }),
            (i.onreadystatechange = function () {
              if (4 === i.readyState)
                if (200 === i.status || 301 === i.status || 302 === i.status) {
                  var e = i.response,
                    o = new Blob([e], { type: "application/octet-stream" });
                  t(o);
                } else n(i.statusText);
            }),
            i.send(e.body);
        })(
          { method: "GET", url: e.url },
          function (o) {
            var i = new FileReader();
            window.FontFace
              ? (i.readAsArrayBuffer(o),
                (i.onload = function () {
                  var o = i.result;
                  if (window.FontFace) {
                    var a = new (0, window.FontFace)(e.family, o);
                    "loaded" == a.status
                      ? (document.fonts.add(a), t(e.family))
                      : n(a.state);
                  }
                }))
              : (i.readAsDataURL(o),
                (i.onload = function () {
                  var n = i.result,
                    o = document.createElement("style");
                  (n = n.replace(
                    "data:application/octet-stream;base64,",
                    "data:application/x-font-woff;charset=utf-8;base64,"
                  )),
                    o.appendChild(
                      document.createTextNode(
                        "\n                    @font-face {\n                        font-family: " +
                          e.family +
                          ";\n                        src: url(" +
                          n +
                          ");\n                    }\n                "
                      )
                    ),
                    document.head.appendChild(o),
                    t(e.family);
                }));
          },
          n,
          o
        );
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        (e.log = function (e) {
          return window.console.log(e);
        }),
          (e.warn = function (e) {
            return window.console.warn(e);
          }),
          (e.error = function (e) {
            return window.console.error(e);
          });
      })(e.logger || (e.logger = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = {};
      (e.makeObjectGroup = function (e) {
        var n = (t[e] = []);
        return {
          add: function (e) {
            n.push(e);
          },
        };
      }),
        (e.getObjectGroup = function (e) {
          var n = t[e];
          return {
            remove: function (e) {
              n.indexOf(e) > -1 && n.splice(n.indexOf(e), 1);
            },
            forEach: function (e) {
              n.forEach(e);
            },
          };
        }),
        (e.destroyGroup = function (e) {
          delete t[e];
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        e.cdf = function (e, t, n) {
          return 0.5 * (1 + this.erf((e - t) / Math.sqrt(2 * n)));
        };
      })(e.math || (e.math = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      e.shuffleArray = function (e) {
        var t, n, o;
        for (o = e.length; o; o -= 1)
          (t = Math.floor(Math.random() * o)),
            (n = e[o - 1]),
            (e[o - 1] = e[t]),
            (e[t] = n);
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      e.unwrap = function (e, t) {
        if ("function" == typeof e) {
          var n = e;
          return null != t ? n.apply(t) : n();
        }
        return e;
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      e.createWaitForAnyCallbackGate = function (e, t, n) {
        var o,
          i,
          a,
          r = [],
          s = null,
          u = !0;
        return (
          (s = {
            addCallback: function (e, t, n, o) {
              return (
                void 0 === o && (o = !1),
                null == n && (n = !1),
                o &&
                  (r = r.filter(function (t) {
                    return t.sender !== e;
                  })),
                r.push({ sender: e, complete: !1, cb: t, invokeOnce: n }),
                function () {
                  s.completeCallback(e);
                }
              );
            },
            completeCallback: function (e) {
              var t = !1;
              r.forEach(function (n) {
                if (n.sender === e) {
                  (n.complete = !0), (t = !0);
                  var o = n.cb;
                  o && ((n.cb = n.invokeOnce ? null : o), o());
                }
              }),
                t &&
                  (s.prethen && s.prethen(),
                  u && ((u = !1), o && o.apply(i, a)),
                  s.postthen && s.postthen());
            },
            kill: function () {
              u = !1;
            },
            then: function (e, t, n) {
              (o = e), (a = t), (i = n);
            },
            inspect: function () {
              var e = [];
              return (
                r.forEach(function (t) {
                  e.push({ sender: t.sender, completed: t.complete });
                }),
                e
              );
            },
          }),
          (o = e),
          (a = t),
          (i = n),
          s
        );
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      e.weightedPick = function (e) {
        var t = e.reduce(function (e, t, n) {
          return t + e;
        }, 0);
        if (0 !== t) {
          var n = Math.random() * t,
            o = 0,
            i = !1,
            a = e.reduce(function (e, t, r) {
              return 0 === t || i
                ? e
                : (o += t) >= n
                ? ((i = !0), (a = r), r)
                : e;
            }, 0);
          return a;
        }
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {}));
(__extends =
  (this && this.__extends) ||
  (function () {
    var e = function (t, n) {
      return (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(t, n);
    };
    return function (t, n) {
      function o() {
        this.constructor = t;
      }
      e(t, n),
        (t.prototype =
          null === n
            ? Object.create(n)
            : ((o.prototype = n.prototype), new o()));
    };
  })()),
  (__awaiter =
    (this && this.__awaiter) ||
    function (e, t, n, o) {
      return new (n || (n = Promise))(function (i, a) {
        function r(e) {
          try {
            u(o.next(e));
          } catch (e) {
            a(e);
          }
        }
        function s(e) {
          try {
            u(o.throw(e));
          } catch (e) {
            a(e);
          }
        }
        function u(e) {
          var t;
          e.done
            ? i(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(r, s);
        }
        u((o = o.apply(e, t || [])).next());
      });
    }),
  (__generator =
    (this && this.__generator) ||
    function (e, t) {
      var n,
        o,
        i,
        a,
        r = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (a = { next: s(0), throw: s(1), return: s(2) }),
        "function" == typeof Symbol &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function s(a) {
        return function (s) {
          return (function (a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; r; )
              try {
                if (
                  ((n = 1),
                  o &&
                    (i =
                      2 & a[0]
                        ? o.return
                        : a[0]
                        ? o.throw || ((i = o.return) && i.call(o), 0)
                        : o.next) &&
                    !(i = i.call(o, a[1])).done)
                )
                  return i;
                switch (((o = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                  case 0:
                  case 1:
                    i = a;
                    break;
                  case 4:
                    return r.label++, { value: a[1], done: !1 };
                  case 5:
                    r.label++, (o = a[1]), (a = [0]);
                    continue;
                  case 7:
                    (a = r.ops.pop()), r.trys.pop();
                    continue;
                  default:
                    if (
                      !((i = r.trys),
                      (i = i.length > 0 && i[i.length - 1]) ||
                        (6 !== a[0] && 2 !== a[0]))
                    ) {
                      r = 0;
                      continue;
                    }
                    if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                      r.label = a[1];
                      break;
                    }
                    if (6 === a[0] && r.label < i[1]) {
                      (r.label = i[1]), (i = a);
                      break;
                    }
                    if (i && r.label < i[2]) {
                      (r.label = i[2]), r.ops.push(a);
                      break;
                    }
                    i[2] && r.ops.pop(), r.trys.pop();
                    continue;
                }
                a = t.call(e, r);
              } catch (e) {
                (a = [6, e]), (o = 0);
              } finally {
                n = i = 0;
              }
            if (5 & a[0]) throw a[1];
            return { value: a[0] ? a[1] : void 0, done: !0 };
          })([a, s]);
        };
      }
    });
!(function (e) {
  !(function (e) {
    var t = (function () {
      function e(e, t, n, o) {
        void 0 === n && (n = !0),
          void 0 === o && (o = 30),
          (this._updaters = 0),
          (this._cachedAnimationValueUpdaters = {}),
          (this._game = e),
          (this._frameValueCollection = t),
          (this._supportOptimizedCollections = n),
          (this._defaultFrameRate = o);
      }
      return (
        (e.prototype.createDefinition = function (e, t, n, o) {
          var i = "string" == typeof t ? void 0 : t,
            a = void 0 === i ? t : void 0;
          void 0 === i &&
            void 0 === this._frameValueCollection[a] &&
            (i = this._frameValueCollection[a + ".txt"]);
          var r = {
            animId: e,
            frameValues: i,
            collectionKey: a,
            frameName: Array.isArray(n) ? null : n,
            ignoreInvalidScalings: !0,
            applyFirstFrameOnPlay: !0,
            applyLastFrameOnStop: !0,
            reverse: !1,
            loop: !1,
            frameRate: 60,
            frameNames: Array.isArray(n) ? n : null,
          };
          return (
            null != o &&
              ((r.reverse = o.reverse),
              (r.loop = o.loop),
              (r.frameRate = o.frameRate),
              (r.translateParent = o.translateParent),
              (r.scaleParent = o.scaleParent),
              (r.applyFirstFrameOnPlay =
                void 0 === o.applyFirstFrame || o.applyFirstFrame),
              (r.applyLastFrameOnStop =
                void 0 === o.applyLastFrameOnStop || o.applyLastFrameOnStop),
              (r.ignoreInvalidScalings =
                void 0 === o.ignoreInvalidScalings ||
                void 0 === o.ignoreInvalidScalings),
              (r.updateCallback = o.updateCallback),
              (r.updateScope = o.updateScope)),
            r
          );
        }),
        Object.defineProperty(e.prototype, "cache", {
          get: function () {
            return this._game.cache;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.createUpdater = function (e, t, n, o, i, a, r, s) {
          var u;
          void 0 === n && (n = !1),
            void 0 === o && (o = !1),
            void 0 === i && (i = !1),
            void 0 === a && (a = !0),
            (u = n ? t.concat().reverse() : t),
            (this._cachedAnimationValueUpdaters[e] = {
              frameValues: u,
              updater: this._createUpdater(t[0], o, i, a),
              updateCallback: r,
              updateScope: s,
              updateParams: [null, u, 0],
            });
        }),
        (e.prototype.hasUpdater = function (e) {
          return void 0 !== this._cachedAnimationValueUpdaters[e];
        }),
        (e.prototype._createUpdater = function (e, t, n, o) {
          return this._supportOptimizedCollections
            ? this._createUpdaterForOptimizedValues(e, t, n, o)
            : this._createUpdaterSimple(e, t, n, o);
        }),
        (e.prototype._createUpdaterSimple = function (e, t, n, o) {
          var i = "if (frameValues == undefined) return; ";
          for (var a in ((t || n) && (i += "var parent = target.parent; "),
          (i += "var tscale; var fscale; "),
          delete e.AE_FrameName,
          delete e.frame,
          e)) {
            "text.tint" === a
              ? (i += "target.text.tint = frameValues.text.tint; ")
              : "pivot" === a
              ? ((i +=
                  "var tpivot = target.pivot; var fpivot = frameValues.pivot;"),
                (i += "tpivot.x = fpivot.x; "),
                (i += "tpivot.y = fpivot.y; "))
              : "anchor" === a
              ? ((i +=
                  "var tanchor = target.anchor; var fanchor = frameValues.anchor;"),
                (i += "tanchor.x = fanchor.x; "),
                (i += "tanchor.y = fanchor.y; "))
              : "scale" === a
              ? ((i += n
                  ? "tscale = parent.scale; fscale = frameValues.scale; "
                  : "tscale = target.scale; fscale = frameValues.scale; "),
                (i += "tscale.x = fscale.x; "),
                (i += "tscale.y = fscale.y; "))
              : "sx" === a
              ? ((i += n
                  ? "tscale = parent.scale; "
                  : "tscale = target.scale; "),
                (i += "tscale.x = frameValues.sx; "))
              : "sy" === a
              ? ((i += n
                  ? "tscale = parent.scale; "
                  : "tscale = target.scale; "),
                (i += "tscale.y = frameValues.sy; "))
              : (i +=
                  "x" == a || "y" == a
                    ? t
                      ? "parent." + a + " = frameValues." + a + "; "
                      : "target." + a + " = frameValues." + a + "; "
                    : "target." + a + " = frameValues." + a + ";");
          }
          return new Function("target", "frameValues", i);
        }),
        (e.prototype._createUpdaterForOptimizedValues = function (e, t, n, o) {
          var i = "if (frameValues == undefined) return;";
          for (var a in (delete e.AE_FrameName, delete e.frame, e)) {
            "text.tint" === a
              ? (i +=
                  "target.text.tint = frameValues['text.tint'] != null ? frameValues.text.tint : target.text.tint;")
              : "pivot" === a
              ? ((i +=
                  "target.pivot.x = frameValues.pivot != null ? frameValues.pivot.x : target.pivot.x; "),
                (i +=
                  "target.pivot.y = frameValues.pivot != null ? frameValues.pivot.y : target.pivot.y; "))
              : "anchor" === a
              ? ((i +=
                  "target.anchor.x = frameValues.anchor != null ? frameValues.anchor.x : target.anchor.x; "),
                (i +=
                  "target.anchor.y = frameValues.anchor != null ? frameValues.anchor.y : target.anchor.y; "))
              : "scale" === a
              ? n
                ? ((i +=
                    "target.parent.scale.x = frameValues.scale != null ? frameValues.scale.x : target.parent.scale.x; "),
                  (i +=
                    "target.parent.scale.y = frameValues.scale != null ? frameValues.scale.y : target.parent.scale.y; "))
                : ((i +=
                    "target.scale.x = frameValues.scale != null ? frameValues.scale.x : target.scale.x; "),
                  (i +=
                    "target.scale.y = frameValues.scale != null ? frameValues.scale.y : target.scale.y; "))
              : (i +=
                  "sx" === a
                    ? n
                      ? "target.parent.scale.x = frameValues.sx != null ? frameValues.sx : target.parent.scale.x; "
                      : "target.scale.x = frameValues.sx != null ? frameValues.sx : target.scale.x; "
                    : "sy" === a
                    ? n
                      ? "target.parent.scale.y = frameValues.sy != null ? frameValues.sy : target.parent.scale.y; "
                      : "target.scale.y = frameValues.sy  != null ? frameValues.sy : target.scale.y; "
                    : t
                    ? "x" == a
                      ? "target.parent.x = frameValues.x != null ? frameValues.x : target.parent.x;"
                      : "y" == a
                      ? "target.parent.y = frameValues.y != null ? frameValues.y : target.parent.y;"
                      : "target." +
                        a +
                        " = frameValues." +
                        a +
                        " != null ? frameValues." +
                        a +
                        " : target." +
                        a +
                        ";"
                    : "target." +
                      a +
                      " = frameValues." +
                      a +
                      " != null ? frameValues." +
                      a +
                      " : target." +
                      a +
                      ";");
          }
          return new Function("target", "frameValues", i);
        }),
        (e.prototype.addSupportToSprite = function (e, t, n, o, i) {
          void 0 === o && (o = !1), void 0 === i && (i = !0);
          var a = t.animations._anims[n];
          if (null != a.__avUpdater)
            throw (
              "Cannot add AnimationValueUpdater to animation " +
              n +
              " on sprite " +
              t.name +
              ": Updater already set up for animation."
            );
          var r = this._cachedAnimationValueUpdaters[e];
          if (
            ((a.__avUpdater = r),
            this.createUpdateDelegate(r, a, t),
            this.createSetFrameDelegate(r, a, t),
            this.createCompleteDelegate(r, a, t),
            o)
          ) {
            var s = a.play.bind(a);
            a.play = function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              var o = r.frameValues[0];
              return (
                (r.updateParams[0] = o),
                (r.updateParams[2] = 0),
                r.updater(t, o),
                t.updateTransform(),
                t.parent && t.parent.updateTransform(),
                r.updateCallback &&
                  r.updateCallback.apply(r.updateScope, r.updateParams),
                s.apply(a, e)
              );
            };
          }
          if (i) {
            var u = a.stop.bind(a);
            a.stop = function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              if (a.isPlaying) {
                var o = r.frameValues.length - 1,
                  i = r.frameValues[o];
                (r.updateParams[0] = i),
                  (r.updateParams[2] = o),
                  r.updater(t, i),
                  t.updateTransform(),
                  t.parent && t.parent.updateTransform(),
                  r.updateCallback &&
                    r.updateCallback.apply(r.updateScope, r.updateParams);
              }
              return u.apply(a, e);
            };
          }
        }),
        (e.prototype.createUpdateDelegate = function (e, t, n) {
          var o = t.update.bind(t),
            i = function () {
              if (this.isPaused) return !1;
              var i = !1,
                a = this,
                r = Math.floor(a._frameIndex);
              this.isPlaying && r !== a._lastFrameIndex && (i = !0);
              var s = o();
              if (i) {
                t.logFrameValueUpdater;
                var u = Math.min(e.frameValues.length, r),
                  l = e.frameValues[u];
                e.updater(n, l),
                  (e.updateParams[0] = l),
                  (e.updateParams[2] = u),
                  e.updateCallback &&
                    e.updateCallback.apply(e.updateScope, e.updateParams),
                  (a._lastFrameIndex = r);
              }
              return s;
            }.bind(t);
          t.update = i;
        }),
        (e.prototype.addSupportToInanimateTarget = function (e, t, n, o, i, a) {
          void 0 === i && (i = !1), void 0 === a && (a = !1);
          var r = this._cachedAnimationValueUpdaters[e],
            s = n.animations._anims[o],
            u = s.update.bind(s);
          if (
            ((s.update = function () {
              if (this.isPaused) return !1;
              var e = !1,
                n = this;
              this.isPlaying &&
                n._lastFrameIndex != Math.floor(n._frameIndex) &&
                (e = !0);
              var o = u();
              if (e) {
                var i = Math.floor(n._frameIndex),
                  a = r.frameValues[i];
                (r.updateParams[0] = a),
                  (r.updateParams[2] = i),
                  r.updater(t, a),
                  r.updateCallback &&
                    r.updateCallback.apply(r.updateScope, r.updateParams);
              }
              return o;
            }.bind(s)),
            this.createCompleteDelegate(r, s, n),
            i)
          ) {
            var l = s.play.bind(s);
            s.play = function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              var o = r.frameValues[0];
              return (
                (r.updateParams[0] = o),
                (r.updateParams[2] = 0),
                r.updater(t, o),
                t.updateTransform && t.updateTransform(),
                t.parent &&
                  t.parent.updateTransform &&
                  t.parent.updateTransform(),
                r.updateCallback &&
                  r.updateCallback.apply(r.updateScope, r.updateParams),
                l.apply(s, e)
              );
            };
          }
          if (a) {
            var d = s.stop.bind(s);
            s.stop = function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              if (s.isPlaying) {
                var o = r.frameValues.length - 1,
                  i = r.frameValues[o];
                (r.updateParams[0] = i),
                  (r.updateParams[2] = o),
                  r.updater(t, i),
                  t.updateTransform && t.updateTransform(),
                  t.parent &&
                    t.parent.updateTransform &&
                    t.parent.updateTransform(),
                  r.updateCallback &&
                    r.updateCallback.apply(r.updateScope, r.updateParams);
              }
              return d.apply(s, e);
            };
          }
        }),
        (e.prototype.addSupportToSingleFrameSprite2 = function (e, t) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.translateParent =
              null == o.translateParent || o.translateParent),
              (o.scaleParent = null == o.scaleParent || o.scaleParent),
              (o.applyFirstFrameOnPlay =
                null == o.applyFirstFrameOnPlay || o.applyFirstFrameOnPlay),
              (o.loop = null != o.loop && o.loop),
              (o.reverse = null != o.reverse && o.reverse);
          }
          this.addSupportToSingleFrameSprite(e, t);
        }),
        (e.prototype.addAnimationToSingleFrameSprite = function (
          e,
          t,
          n,
          o,
          i,
          a
        ) {
          (void 0 === i && (i = 30), void 0 === a && (a = !1), null == o) &&
            (null != t.frameName
              ? (o = t.frameName)
              : null != t.animations._frameData
              ? (o = t.animations._frameData._frames[0].name)
              : ((t.animations._frameData = new Phaser.FrameData()).addFrame(
                  new Phaser.Frame(
                    0,
                    0,
                    0,
                    0,
                    0,
                    "dummyFrame",
                    "" + t.game.rnd.uuid()
                  )
                ),
                (o = "dummyFrame")));
          for (var r = [], s = 0; s < n; s++) r.push(o);
          if (
            (t.animations.add(e, r, i, a),
            0 === t.animations._anims[e]._frames.length)
          )
            throw new Error(
              "Cannot create valid animation " +
                e +
                " on " +
                t.name +
                ". No matching frame " +
                o +
                " was found in the sprite's frame list."
            );
        }),
        (e.prototype.addSupportToSingleFrameSprite = function (e, t) {
          for (var n = 0; n < e.length; n++)
            for (var o = e[n]; ; ) {
              var i = t.key + "_" + o.animId + this._updaters;
              //console.log(this._frameValueCollection);
              //console.log(o.frameValues[-1][2]);
              if ((this._updaters++, !this.hasUpdater(i))) {
                //console.log(e, t);
                var a =
                    o.frameValues ||
                    this._frameValueCollection[o.collectionKey],
                  r = !o.ignoreInvalidScalings || o.ignoreInvalidScalings;
                this.createUpdater(
                  i,
                  a,
                  !0 === o.reverse,
                  o.translateParent,
                  o.scaleParent,
                  r
                ),
                  this.addAnimationToSingleFrameSprite(
                    o.animId,
                    t,
                    a.length,
                    o.frameName || t.frameName,
                    o.frameRate || this._defaultFrameRate,
                    o.loop
                  ),
                  this.addSupportToSprite(
                    i,
                    t,
                    o.animId,
                    o.applyFirstFrameOnPlay,
                    o.applyLastFrameOnStop
                  );
                break;
              }
            }
        }),
        (e.prototype.addSupportToSpriteAdv = function (e, t) {
          for (var n = 0; n < e.length; n++)
            for (var o = e[n]; ; ) {
              var i = t.key + "_" + o.animId + this._updaters;
              if ((this._updaters++, !this.hasUpdater(i))) {
                var a =
                    o.frameValues ||
                    this._frameValueCollection[o.collectionKey],
                  r = !o.ignoreInvalidScalings || o.ignoreInvalidScalings;
                this.createUpdater(
                  i,
                  a,
                  !0 === o.reverse,
                  o.translateParent,
                  o.scaleParent,
                  r
                ),
                  null != o.frameName
                    ? this.addAnimationToSingleFrameSprite(
                        o.animId,
                        t,
                        a.length,
                        o.frameName || t.frameName,
                        o.frameRate || this._defaultFrameRate,
                        o.loop
                      )
                    : t.animations.add(
                        o.animId,
                        o.frameNames,
                        o.frameRate,
                        o.loop,
                        !1
                      ),
                  this.addSupportToSprite(
                    i,
                    t,
                    o.animId,
                    o.applyFirstFrameOnPlay,
                    o.applyLastFrameOnStop
                  );
                break;
              }
            }
        }),
        (e.prototype.padAnimationToFitValueArray = function (e, t, n) {
          t = t.concat();
          for (var o = 0; t.length < e.length; ) t.push(n(o, e, t)), o++;
          return t;
        }),
        (e.prototype.padAnimationValuesToFitFrameNamesArray = function (
          e,
          t,
          n
        ) {
          e = e.concat();
          for (var o = 0; e.length < t.length; ) e.push(n(o, e, t)), o++;
          return e;
        }),
        (e.prototype.addSupportToGroup = function (e, t) {
          var n = new Phaser.Sprite(t.game, 0, 0);
          (n.preUpdate = this.fastSpritePreUpdate.bind(n)),
            (n.postUpdate = this.fastSpritePostUpdate.bind(n)),
            (n.visible = !1),
            (n.name = "__avs_tempSprite_" + Math.random()),
            (n.animations.updateIfVisible = !1),
            t.game.world.add(n);
          for (var o = 0; o < e.length; o++)
            for (var i = e[o]; ; ) {
              var a = t.name + "_" + i.animId + this._updaters;
              if ((this._updaters++, !this.hasUpdater(a))) {
                var r =
                    i.frameValues ||
                    this._frameValueCollection[i.collectionKey],
                  s = !i.ignoreInvalidScalings || i.ignoreInvalidScalings;
                this.createUpdater(
                  a,
                  r,
                  !0 === i.reverse,
                  i.translateParent,
                  i.scaleParent,
                  s
                ),
                  this.addAnimationToSingleFrameSprite(
                    i.animId,
                    n,
                    r.length,
                    i.frameName || n.frameName,
                    i.frameRate || this._defaultFrameRate,
                    i.loop
                  ),
                  this.addSupportToInanimateTarget(
                    a,
                    t,
                    n,
                    i.animId,
                    i.applyFirstFrameOnPlay,
                    i.applyLastFrameOnStop
                  );
                break;
              }
            }
          (t.animations = n.animations), (t.play = n.play.bind(n));
        }),
        (e.prototype.addSupportToBitmapText = function (e, t) {
          var n = new Phaser.Sprite(t.game, 0, 0);
          (n.preUpdate = this.fastSpritePreUpdate.bind(n)),
            (n.postUpdate = this.fastSpritePostUpdate.bind(n)),
            (n.visible = !1),
            (n.name = "__avs_tempSprite_" + Math.random()),
            (n.animations.updateIfVisible = !1),
            t.game.world.add(n);
          for (var o = 0; o < e.length; o++)
            for (var i = e[o]; ; ) {
              var a = t.name + "_" + i.animId + this._updaters;
              if ((this._updaters++, !this.hasUpdater(a))) {
                var r =
                    i.frameValues ||
                    this._frameValueCollection[i.collectionKey],
                  s = !i.ignoreInvalidScalings || i.ignoreInvalidScalings;
                this.createUpdater(
                  a,
                  r,
                  !0 === i.reverse,
                  i.translateParent,
                  i.scaleParent,
                  s,
                  i.updateCallback,
                  i.updateScope
                ),
                  this.addAnimationToSingleFrameSprite(
                    i.animId,
                    n,
                    r.length,
                    i.frameName || n.frameName,
                    i.frameRate || this._defaultFrameRate,
                    i.loop
                  ),
                  this.addSupportToInanimateTarget(
                    a,
                    t,
                    n,
                    i.animId,
                    i.applyFirstFrameOnPlay,
                    i.applyLastFrameOnStop
                  );
                break;
              }
            }
          (t.animations = n.animations), (t.play = n.play.bind(n));
        }),
        (e.prototype.createSetFrameDelegate = function (e, t, n) {
          var o = t.setFrame.bind(t),
            i = t;
          t.setFrame = function (a, r) {
            var s = o(a, r),
              u = Math.floor(t._frameIndex);
            return (
              e.updater(n, e.frameValues[Math.min(e.frameValues.length, u)]),
              (i._lastFrameIndex = u),
              s
            );
          };
        }),
        (e.prototype.createCompleteDelegate = function (e, t, n) {
          var o = t.complete.bind(t);
          t.complete = function () {
            return e.updater(n, e.frameValues[e.frameValues.length - 1]), o();
          };
        }),
        (e.prototype.fastSpritePreUpdate = function () {
          return this.animations.update(), !0;
        }),
        (e.prototype.fastSpritePostUpdate = function () {}),
        e
      );
    })();
    e.AddAnimationValueSupport = t;
  })(e.phaser || (e.phaser = {}));
})(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        (t.printSceneGraph = function (e, t) {
          var n;
          void 0 === t && (t = !0),
            (n = function (e, o, i) {
              var a;
              (a = !1 === t ? { _do: o } : {}), (e[i + ":" + o.name] = a);
              for (var r = 0; r < o.children.length; r++)
                n(a, o.children[r], r);
            })({}, e.stage, 0);
        }),
          (t.printPropertyChain = function (e, t, n) {
            void 0 === n && (n = !1);
            var o = [],
              i = e[t],
              a = i;
            for (o.push(i); null != e.parent; )
              null != (e = e.parent)[t]
                ? ((i = e[t]),
                  o.push(i),
                  "boolean" == typeof i
                    ? (a = i && a)
                    : n
                    ? (a += parseFloat(i.toString()))
                    : (a *= parseFloat(i.toString())))
                : o.push(void 0);
            return a + ": " + o;
          }),
          (t.goThroughParentChain = function (e, t) {
            for (var n = 0, o = t(e, n); o; )
              (e = e.parent) && ((o = t(e, n)), n--);
          }),
          (t.printScaleChain = function (e) {
            var t = [],
              n = e.scale,
              o = { x: n.x, y: n.y };
            for (t.push({ x: n.x, y: n.y }); null != e.parent; )
              (n = (e = e.parent).scale),
                t.push({ x: n.x, y: n.y }),
                (o.x = o.x * n.x),
                (o.y = o.y * n.y);
            return JSON.stringify(o) + ": " + JSON.stringify(t);
          }),
          (t.printPivotChain = function (e) {
            var t = [],
              n = e.pivot,
              o = { x: n.x, y: n.y };
            for (t.push({ x: n.x, y: n.y }); null != e.parent; )
              (n = (e = e.parent).pivot),
                t.push({ x: n.x, y: n.y }),
                (o.x = o.x + n.x),
                (o.y = o.y + n.y);
            return JSON.stringify(o) + ": " + JSON.stringify(t);
          }),
          (t.printAnchorChain = function (e) {
            var t = [],
              n = e.anchor,
              o = { x: n.x, y: n.y };
            for (t.push({ x: n.x, y: n.y }); null != e.parent; )
              (n = (e = e.parent).anchor),
                t.push({ x: n.x, y: n.y }),
                (o.x = o.x + n.x),
                (o.y = o.y + n.y);
            return JSON.stringify(o) + ": " + JSON.stringify(t);
          }),
          (t.changePropertyForChain = function (e, t, n) {
            for (e[t] = n; null != e.parent; )
              null != (e = e.parent)[t] && (e[t] = n);
          }),
          (t.getParentAt = function (e, t) {
            for (var n = e, o = 0; o < t; o++)
              if (null === (n = n.parent)) return null;
            return n;
          }),
          (t.findInSceneGraph = function (t, n) {
            n = n || e.game;
            var o = function (e, t) {
                if (e.name === t) return e;
                for (var n = 0; n < e.children.length; n++) {
                  var i = e.children[n],
                    a = o(i, t);
                  if (a) return a;
                }
                return null;
              },
              i = n.world,
              a = o(i, t);
            return a || ((i = n.stage), (a = o(i, t))), a;
          }),
          (t.nameAllUnnamedDisplayObjects = function (t, n) {
            var o = t;
            if (((n = n || "root"), o.name))
              for (var i = o.children, a = 0; a < i.length; a++)
                e.phaser.utils.nameAllUnnamedDisplayObjects(i[a], n + "." + a);
            else o.name = n;
          }),
          (t.countSceneObjects = function (e, t) {
            var n = function (e) {
              var o = 0;
              if (null == t || t(e)) {
                o++;
                for (var i = e.children, a = 0; a < i.length; a++) o += n(i[a]);
              }
              return o;
            };
            return n(e);
          }),
          (t.setPropertyForChildChain = function (e, t, n) {
            var o = function (e) {
              e[t] = n;
              var i = e.children;
              if (i) for (var a = 0; a < i.length; a++) o(i[a]);
            };
            o(e);
          }),
          (t.makeUpdateOnlyExistingChildrenTrue = function (e) {
            var t = function (e) {
              e.updateOnlyExistingChildren = !0;
              var n = e.children;
              if (n) for (var o = 0; o < n.length; o++) t(n[o]);
            };
            t(e);
          }),
          (t.getAllSceneObjects = function (e, t) {
            t =
              t ||
              function (e) {
                return !0;
              };
            var n = [],
              o = function (e) {
                (null == t || t(e)) && n.push(e);
                for (var i = e.children, a = 0; a < i.length; a++) o(i[a]);
                return 0;
              };
            return o(e), n;
          }),
          (t.nameAllDisplayObjectsInSceneGraph = function (e, t) {
            void 0 === t && (t = !1);
            var n = e,
              o = e.name || "sceneGraphRoot";
            e.name = o;
            var i = function (e, n) {
              if (e) {
                (e.name &&
                  "" !== e.name &&
                  "group" !== e.name &&
                  "sprite" !== e.name &&
                  "image" !== e.name) ||
                  (t && (e.name = n));
                var o = e.children;
                if (o)
                  for (var a = 0; a < o.length; a++) {
                    var r = o[a];
                    i(r, n + "_" + a);
                  }
              }
            };
            i(n, o);
          }),
          (t.nameAllDisplayObjectsFoundOnScene = function (e, t) {
            void 0 === t && (t = !1), t && console.time;
            var n = 0,
              o = [],
              i = function (e, t) {
                if ((n++, o.indexOf(e) > -1)) n--;
                else if ((o.push(e), n > 1e4)) n--;
                else {
                  if ("object" == typeof e)
                    if (PIXI.DisplayObject.prototype.isPrototypeOf(e))
                      (e.name &&
                        "" !== e.name &&
                        "group" !== e.name &&
                        "sprite" !== e.name &&
                        "image" !== e.name) ||
                        (e.name = t);
                    else if (Array.isArray(e)) {
                      var a = e;
                      if ("object" == typeof a[0])
                        for (var r = 0; r < a.length; r++) i(a[r], t + "_" + r);
                    } else
                      for (var s in e)
                        if (e.hasOwnProperty(s)) {
                          var u = e[s];
                          if (Phaser.Game.prototype.isPrototypeOf(u)) continue;
                          i(u, t + "_" + s);
                        }
                  n--;
                }
              };
            for (var a in e)
              if (e.hasOwnProperty(a)) {
                var r = e[a];
                if (Phaser.Game.prototype.isPrototypeOf(r)) continue;
                i(r, "scene_" + a);
              }
            t && console.timeEnd;
          });
      })(t.utils || (t.utils = {}));
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    var t = (function (t) {
      function n(n, o, i, a, r, s) {
        var u = this,
          l = i.parentelementid
            ? i.parentelementid
            : "tk-game-container-" + i.gameinstanceid,
          d = "tk-game-" + i.gameinstanceid;
        (u = t.call(this, a, r, s, d) || this).gameInstanceId =
          i.gameinstanceid;
        var c = jQuery("#" + l);
        return (
          0 === c.length &&
            (c = jQuery("body").append("<div id='" + l + "'/>")),
          c.empty(),
          (u.gameElementId = d),
          c.append("<div id='" + u.gameElementId + "'></div>"),
          (u.gameName = n),
          (u.initGameData = i),
          (u.ownsPage = o),
          (u.gameContainerElementId = l),
          (u.guid = u.generateGuid()),
          (u._pausedByClient = u._pausedByOperator = !1),
          (u.onErrorOccurred = new e.utils.Signal1()),
          (u.hasLoadedSounds = !1),
          (u.soundAllowed = !0),
          (u.soundEnabled = !0),
          (u.hasPlayedSounds = !1),
          u
        );
      }
      return (
        __extends(n, t),
        Object.defineProperty(n.prototype, "pausedByClient", {
          get: function () {
            return this._pausedByClient;
          },
          set: function (e) {
            (this._pausedByClient = e),
              void 0 !== this.pauseGameHandler &&
                this.pauseGameHandler(
                  this._pausedByClient,
                  this._pausedByOperator
                );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, "pausedByOperator", {
          get: function () {
            return this._pausedByOperator;
          },
          set: function (e) {
            (this._pausedByOperator = e),
              void 0 !== this.pauseGameHandler &&
                this.pauseGameHandler(
                  this._pausedByClient,
                  this._pausedByOperator
                );
          },
          enumerable: !0,
          configurable: !0,
        }),
        (n.prototype.generateGuid = function () {
          for (var e = new Date().getTime().toString(16); e.length < 36; )
            e += Math.floor(16 * Math.random()).toString(16);
          for (var t = "", n = 0; n < 36; n++)
            t += n % 6 == 0 && n > 0 ? "-" : e.charAt(n);
          return t;
        }),
        (n.prototype.updateRender = function (e) {
          void 0 === this.runningTime && (this.runningTime = 0);
          var n = this.time.elapsed;
          this.paused || (this.runningTime += n),
            t.prototype.updateRender.call(this, e);
        }),
        (n.prototype.isDebugMode = function () {
          return this._debugMode;
        }),
        (n.prototype.setDebugMode = function (e) {
          (this._debugMode = e),
            (this.stage.disableVisibilityChange =
              this.initGameData.pauseiffocuslost || this._debugMode);
        }),
        (n.prototype.resizeGame = function () {
          var e = jQuery("#" + this.gameContainerElementId),
            t = Math.min(e.width() / this.width, e.height() / this.height);
          t != this._previousGameScale &&
            (this.scale.setUserScale(t, t, 0, 0),
            (this._previousGameScale = t));
        }),
        n
      );
    })(Phaser.Game);
    e.AbstractGameBase = t;
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t._selfTint = 16777215), (t._blendMode = PIXI.blendModes.NORMAL), t
          );
        }
        return (
          __extends(t, e),
          Object.defineProperty(t.prototype, "blendMode", {
            get: function () {
              return this._blendMode;
            },
            set: function (e) {
              (this._blendMode = e), (this.dirty = !0);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.updateText = function () {
            e.prototype.updateText.call(this),
              null == this._blendMode &&
                (this._blendMode = PIXI.blendModes.NORMAL);
            for (var t = 0; t < this.children.length; t++) {
              this.children[t].blendMode = this._blendMode;
            }
          }),
          Object.defineProperty(t.prototype, "hTint", {
            get: function () {
              return this._selfTint;
            },
            set: function (e) {
              this._selfTint = e;
              var t = 16777215;
              null != this.parent &&
                (t = null != this.parent.tint ? this.parent.tint : 16777215),
                (this.tint = this.combineColors(this._selfTint, t));
              for (var n = 0; n < this.children.length; n++) {
                var o = this.children[n];
                void 0 !== o._selfTint && (o.hTint = o._selfTint);
              }
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.combineColors = function (e, t) {
            var n = Math.min(255, Math.floor(((e >> 16) * (t >> 16)) / 255)),
              o = Math.min(
                255,
                Math.floor((((e >> 8) & 255) * ((t >> 8) & 255)) / 255)
              );
            return (
              Math.min(255, Math.floor(((255 & e) * (255 & t)) / 255)) |
              (o << 8) |
              (n << 16)
            );
          }),
          (t.prototype.addChild = function (t) {
            var n = t,
              o = e.prototype.addChild.call(this, n);
            return void 0 !== n._selfTint && (n.hTint = n._selfTint), o;
          }),
          (t.__px = "x"),
          (t.__py = "y"),
          (t.__sx = "sx"),
          (t.__sy = "sy"),
          t
        );
      })(Phaser.BitmapText);
      e.AdvancedBitmapText = t;
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t, n, o, i, a, r) {
          var s = e.call(this, t, n, o, i, a, r) || this;
          return (s._selfTint = 16777215), (s.tint = 16777215), s;
        }
        return (
          __extends(t, e),
          Object.defineProperty(t.prototype, "hTint", {
            get: function () {
              return this._selfTint;
            },
            set: function (e) {
              this._selfTint = e;
              var t = 16777215;
              null != this.parent &&
                (t = null != this.parent.tint ? this.parent.tint : 16777215),
                (this.tint = this.combineColors(this._selfTint, t));
              for (var n = 0; n < this.children.length; n++) {
                var o = this.children[n];
                void 0 !== o._selfTint && (o.hTint = o._selfTint);
              }
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.combineColors = function (e, t) {
            var n = Math.min(255, Math.floor(((e >> 16) * (t >> 16)) / 255)),
              o = Math.min(
                255,
                Math.floor((((e >> 8) & 255) * ((t >> 8) & 255)) / 255)
              );
            return (
              Math.min(255, Math.floor(((255 & e) * (255 & t)) / 255)) |
              (o << 8) |
              (n << 16)
            );
          }),
          (t.prototype.addChild = function (t) {
            var n = t,
              o = e.prototype.addChild.call(this, n);
            return void 0 !== n._selfTint && (n.hTint = n._selfTint), o;
          }),
          t
        );
      })(Phaser.Group);
      e.AdvancedGroup = t;
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t, n, o, i, a) {
          var r = e.call(this, t, n, o, i, a) || this;
          return (r._selfTint = 16777215), r;
        }
        return (
          __extends(t, e),
          Object.defineProperty(t.prototype, "hTint", {
            get: function () {
              return this._selfTint;
            },
            set: function (e) {
              this._selfTint = e;
              var t = 16777215;
              null != this.parent &&
                (t = null != this.parent.tint ? this.parent.tint : 16777215),
                (this.tint = this.combineColors(this._selfTint, t));
              for (var n = 0; n < this.children.length; n++) {
                var o = this.children[n];
                void 0 !== o._selfTint && (o.hTint = o._selfTint);
              }
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.combineColors = function (e, t) {
            var n = Math.min(255, Math.floor(((e >> 16) * (t >> 16)) / 255)),
              o = Math.min(
                255,
                Math.floor((((e >> 8) & 255) * ((t >> 8) & 255)) / 255)
              );
            return (
              Math.min(255, Math.floor(((255 & e) * (255 & t)) / 255)) |
              (o << 8) |
              (n << 16)
            );
          }),
          (t.prototype.addChild = function (t) {
            var n = t,
              o = e.prototype.addChild.call(this, n);
            return void 0 !== n._selfTint && (n.hTint = n._selfTint), o;
          }),
          t
        );
      })(Phaser.Image);
      e.AdvancedImage = t;
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t, n, o, i, a) {
          var r = e.call(this, t, n, o, i, a) || this;
          (r._selfTint = 16777215),
            (r.animationFrameValues = void 0),
            (r.__currentAnimFrameValues = void 0);
          var s = r.play.bind(r);
          return (r.play = r.wrapPlayMethod(s)), r;
        }
        return (
          __extends(t, e),
          (t.generateFrameNameListFromAnimationFile = function (e, t) {
            for (var n = [], o = 0; o < e; o++) n.push(t);
            return n;
          }),
          Object.defineProperty(t.prototype, "hTint", {
            get: function () {
              return this._selfTint;
            },
            set: function (e) {
              this._selfTint = e;
              var t = 16777215;
              null != this.parent &&
                (t = null != this.parent.tint ? this.parent.tint : 16777215),
                (this.tint = this.combineColors(this._selfTint, t));
              for (var n = 0; n < this.children.length; n++) {
                var o = this.children[n];
                void 0 !== o._selfTint && (o.hTint = o._selfTint);
              }
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.combineColors = function (e, t) {
            var n = Math.min(255, Math.floor(((e >> 16) * (t >> 16)) / 255)),
              o = Math.min(
                255,
                Math.floor((((e >> 8) & 255) * ((t >> 8) & 255)) / 255)
              );
            return (
              Math.min(255, Math.floor(((255 & e) * (255 & t)) / 255)) |
              (o << 8) |
              (n << 16)
            );
          }),
          (t.prototype.wrapPlayMethod = function (e) {
            var t = this,
              n = this;
            return function (o, i, a, r) {
              var s = e(o, i, a, r),
                u = s.stop.bind(s);
              if (
                ((s.stop = n.wrapStopMethod(u)),
                (s.__lastFrame = 0),
                (t.__currentAnimFrameValues = void 0),
                void 0 !== t.animationFrameValues)
              ) {
                var l = t.animationFrameValues[s.name];
                void 0 !== l &&
                  (t.__currentAnimFrameValues = { anim: s, values: l });
              }
              return s;
            };
          }),
          (t.prototype.preUpdate = function () {
            var t = e.prototype.preUpdate.call(this);
            if (
              void 0 !== this.__currentAnimFrameValues &&
              this.__currentAnimFrameValues.anim.isPlaying
            ) {
              var n = this.__currentAnimFrameValues.anim._frameIndex,
                o = this.__currentAnimFrameValues.values[n];
              this.copyAnimationFrameValues(o);
            }
            return !0 === t;
          }),
          (t.prototype.copyAnimationFrameValues = function (e) {
            for (var n in e)
              n === t.__sx
                ? (this.scale.x = e.sx)
                : n === t.__sy
                ? (this.scale.y = e.sy)
                : (this[n] = e[n]);
          }),
          (t.prototype.addChild = function (t) {
            var n = t,
              o = e.prototype.addChild.call(this, n);
            return void 0 !== n._selfTint && (n.hTint = n._selfTint), o;
          }),
          (t.prototype.wrapStopMethod = function (e) {
            var t = this;
            return function (n, o) {
              (t.animations.currentAnim.__lastFrame = 0),
                e(n, o),
                (t.__currentAnimFrameValues = void 0);
            };
          }),
          (t.__px = "x"),
          (t.__py = "y"),
          (t.__sx = "sx"),
          (t.__sy = "sy"),
          t
        );
      })(Phaser.Sprite);
      e.AdvancedSprite = t;
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      function n(e) {
        var t = e.play.bind(e);
        e.play = function () {
          return (e._parent.visible = !0), t.apply(e, arguments);
        };
      }
      function o(e) {
        if (null != e._hosm)
          throw new Error(
            "Trying to apply addHideOnStopMixin to anim " +
              e.name +
              " but it is already added."
          );
        var t = e.stop;
        e._hosm = t;
        var n = e;
        e.stop = function () {
          for (var o = [], i = 0; i < arguments.length; i++)
            o[i] = arguments[i];
          return (n._parent.visible = !1), t.apply(e, o);
        };
      }
      (t.addHandleVisibilityMixin = function (e, t) {
        void 0 === t && (t = !1);
        var n = e.play;
        if (!0 === e._vsmixin)
          throw new Error(
            "Trying apply addHandleVisibilityMixin to sprite " +
              e.name +
              " but it is already added."
          );
        return (
          e._vsmixin,
          (e.play = function () {
            for (var o = [], i = 0; i < arguments.length; i++)
              o[i] = arguments[i];
            var a = n.apply(e, o);
            return (
              (e.visible = !0),
              a.onComplete.addOnce(function () {
                e.animations.currentAnim == a &&
                  0 != a.isFinished &&
                  (t ? 0 === e.alpha && (e.visible = !1) : (e.visible = !1));
              }),
              a
            );
          }),
          e
        );
      }),
        (t.addOnBeforePlaySignal = function (t, n) {
          n = n || new e.utils.Signal0();
          var o = t.play.bind(t);
          return (
            (t.play = function () {
              for (var e = [], i = 0; i < arguments.length; i++)
                e[i] = arguments[i];
              return n.dispatch(), o.apply(t, e);
            }),
            (t.onBeforePlay = n),
            n
          );
        }),
        (t.addShowOnPlayMixin = function (e) {
          if (!0 === e._vssop)
            throw new Error(
              "Trying to apply addShowOnPlayMixin to sprite " +
                e.name +
                " but it is already added."
            );
          e._vssop;
          var t = e.play;
          return (
            (e.play = function () {
              for (var n = [], o = 0; o < arguments.length; o++)
                n[o] = arguments[o];
              return (e.visible = !0), t.apply(e, n);
            }),
            e
          );
        }),
        (t.addShowOnPlayAnimMixin = n),
        (t.addHideOnStopMixin = o),
        (t.addHideOnStopMixinForAnims = function (e, t) {
          t =
            t ||
            function (e) {
              return !0;
            };
          var n = e.animations._anims;
          for (var i in n) t(i) && o(n[i]);
        }),
        (t.addShowOnPlayMixinForAnims = function (e, t) {
          t =
            t ||
            function (e) {
              return !0;
            };
          var o = e.animations._anims;
          for (var i in o) t(i) && n(o[i]);
        }),
        (t.removeHideOnStopMixin = function (e) {
          null != e._hosm && (e.stop = e._hosm);
        }),
        (t.addSetAlphaOnPlayMixin = function (e, t) {
          if (!0 === e._avssop)
            throw new Error(
              "Trying to apply addSetAlphaOnPlayMixin to sprite " +
                e.name +
                " but it is already added."
            );
          e._avssop;
          var n = e.play;
          return (
            (e.play = function () {
              for (var o = [], i = 0; i < arguments.length; i++)
                o[i] = arguments[i];
              e.visible = !0;
              var a = o[0];
              return (
                "function" == typeof t && (t = t(a)),
                (e.alpha = t),
                n.apply(e, o)
              );
            }),
            e
          );
        });
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = (function () {
        function t(t, n) {
          (this.onQueueProcessed = new e.utils.Signal0()),
            (this.onBatchProcessed = new e.utils.Signal1()),
            (this._ni = 0),
            (this._queue = []),
            (this._batchSizes = {}),
            (this._add = t),
            (this._timer = n.create(!1));
        }
        return (
          (t.prototype.start = function (e) {
            this._timer.stop(!0),
              this._timer.loop(e || 0.06, this.processQueue, this),
              this._timer.start();
          }),
          (t.prototype.stop = function () {
            this._timer.stop();
          }),
          (t.prototype.addSprite = function (e, t, n, o, i) {
            var a = this,
              r = "instance_" + this._ni;
            this._ni++;
            var s = {
              id: r,
              f: function () {
                var t = a._add.sprite(0, 0, e, o, void 0);
                return (
                  null != n && (void 0 !== n.add ? n.add(t) : n.addChild(t)), t
                );
              },
              batch: i,
              props: t,
              o: {},
            };
            return this.increaseBatchCount(i), this._queue.push(s), s.o;
          }),
          (t.prototype.insertSprite = function (e, t, n, o, i) {
            var a = this,
              r = "instance_" + this._ni;
            this._ni++;
            var s = {
              id: r,
              f: function () {
                var t = a._add.sprite(0, 0, e, o, void 0);
                return (
                  null != n && (void 0 !== n.add ? n.add(t) : n.addChild(t)), t
                );
              },
              batch: i,
              props: t,
              o: {},
            };
            return this.increaseBatchCount(i), this._queue.unshift(s), s.o;
          }),
          (t.prototype.addImage = function (e, t, n, o, i) {
            var a = this,
              r = "instance_" + this._ni;
            this._ni++;
            var s = {
              id: r,
              f: function () {
                var t = a._add.image(0, 0, e, o, void 0);
                return (
                  null != n && (void 0 !== n.add ? n.add(t) : n.addChild(t)), t
                );
              },
              batch: i,
              props: t,
              o: {},
            };
            return this.increaseBatchCount(i), this._queue.push(s), s.o;
          }),
          (t.prototype.insertImage = function (e, t, n, o, i) {
            var a = this,
              r = "instance_" + this._ni;
            this._ni++;
            var s = {
              id: r,
              f: function () {
                var t = a._add.image(0, 0, e, o, void 0);
                return (
                  null != n && (void 0 !== n.add ? n.add(t) : n.addChild(t)), t
                );
              },
              batch: i,
              props: t,
              o: {},
            };
            return this.increaseBatchCount(i), this._queue.unshift(s), s.o;
          }),
          (t.prototype.addBitmapText = function (e, t, n, o) {
            var i = this,
              a = "instance_" + this._ni;
            this._ni++;
            var r = {
              id: a,
              f: function () {
                var t = i._add.bitmapText(0, 0, e, "", 12, void 0);
                return (
                  null != n && (void 0 !== n.add ? n.add(t) : n.addChild(t)), t
                );
              },
              batch: o,
              props: t,
              o: {},
            };
            return this.increaseBatchCount(o), this._queue.push(r), r.o;
          }),
          (t.prototype.insertBitmapText = function (e, t, n, o) {
            var i = this,
              a = "instance_" + this._ni;
            this._ni++;
            var r = {
              id: a,
              f: function () {
                var t = i._add.bitmapText(0, 0, e, "", 12, void 0);
                return (
                  null != n && (void 0 !== n.add ? n.add(t) : n.addChild(t)), t
                );
              },
              batch: o,
              props: t,
              o: {},
            };
            return this.increaseBatchCount(o), this._queue.unshift(r), r.o;
          }),
          (t.prototype.addGroup = function (e, t, n) {
            var o = this,
              i = "instance_" + this._ni;
            this._ni++;
            var a = {
              id: i,
              f: function () {
                var e = o._add.group(void 0, void 0, !1, !1);
                return (
                  null != t && (void 0 !== t.add ? t.add(e) : t.addChild(e)), e
                );
              },
              batch: n,
              props: e,
              o: {},
            };
            return this.increaseBatchCount(n), this._queue.push(a), a.o;
          }),
          (t.prototype.insertGroup = function (e, t, n) {
            var o = this,
              i = {
                id: "instance_" + this._ni,
                f: function () {
                  var e = o._add.group(void 0, void 0, !1, !1);
                  return (
                    null != t && (void 0 !== t.add ? t.add(e) : t.addChild(e)),
                    e
                  );
                },
                batch: n,
                props: e,
                o: {},
              };
            return (
              this.increaseBatchCount(n),
              this._ni++,
              this._queue.unshift(i),
              i.o
            );
          }),
          (t.prototype.processQueue = function () {
            if (0 === this._queue.length) return this._timer.stop(!1), !1;
            var t = this._queue.shift(),
              n = t.f();
            return (
              e.utils.copyProperties(n, t.props),
              null != t.o.complete && t.o.complete(n),
              this.decreaseBatchCount(t.batch),
              0 === this._queue.length &&
                (this._timer.stop(!1), this.onQueueProcessed.dispatch()),
              this._queue.length > 0
            );
          }),
          (t.prototype.loadBatch = function (t) {
            for (var n = [], o = 0; o < this._queue.length; o++) {
              var i = this._queue[o];
              if (i.batch === t) {
                var a = i.f();
                e.utils.copyProperties(a, i.props),
                  null != i.o.complete && i.o.complete(a);
              }
            }
            this._batchSizes[t] = void 0;
            for (var r = 0; r < n.length; r++)
              this._queue.splice(this._queue.indexOf(n[r]), 1);
          }),
          (t.prototype.increaseBatchCount = function (e) {
            void 0 !== e &&
              (void 0 !== this._batchSizes[e]
                ? this._batchSizes[e]++
                : (this._batchSizes[e] = 1));
          }),
          (t.prototype.decreaseBatchCount = function (e) {
            if (void 0 !== e) {
              var t = this._batchSizes[e];
              void 0 !== t &&
                0 === (t = this._batchSizes[e] = Math.max(t - 1, 0)) &&
                this.onBatchProcessed.dispatch(e);
            }
          }),
          t
        );
      })();
      t.InstantiateElementQueue = n;
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = 0,
        o = !1;
      (t.optimizeUpdateLoop = function (e) {
        if (!0 === e.forceSingleUpdate) {
          var t = e,
            i = t.getUpdateLogicDeltaTime ? t.getUpdateLogicDeltaTime() : 0;
          (t.getUpdateLogicDeltaTime = function () {
            return i;
          }),
            (e.update = function (t) {
              (e.forceSingleUpdate = !0),
                60 != this.time.desiredFps &&
                  ((this.time.desiredFps = 60), this.game.setTweenMaxFps(60)),
                this.time.update(t);
              var a = (1e3 * this.time.slowMotion) / 60,
                r = Math.max(Math.min(3 * a, this.time.elapsed), 0);
              (this._deltaTime += r),
                (this.updatesThisFrame = Math.floor(this._deltaTime / a)),
                (this.updatesThisFrame = Math.min(1, this.updatesThisFrame)),
                e.paused
                  ? (o = !0)
                  : o
                  ? ((n += a), (o = !1))
                  : (n += this.time.elapsed),
                n >= Math.floor(a - (60 / this.time.desiredFps) * 5) &&
                  ((this._deltaTime -= a),
                  (this.currentUpdateID = 1),
                  (i = n / 1e3),
                  (n = 0),
                  this.updateLogic(i),
                  this.updateRender(i)),
                (this._spiraling = 0),
                (this._lastCount = 1);
            });
        }
      }),
        (t.optimizeUpdateLogic = function (t, n) {
          var o = {
            remDebug: !0,
            remCamera: !0,
            remParticles: !0,
            remPhysics: !0,
            remPlugins: !0,
            remInput: !0,
          };
          n = n ? e.utils.combineObject(o, n) : o;
          var i = t.renderer instanceof PIXI.WebGLRenderer,
            a = [
              "if (!this._paused && !this.pendingStep) {",
              "if (this.stepping) { this.pendingStep = true; }",
              "this.scale.preUpdate();",
              n.remDebug ? "" : "this.debug.preUpdate();",
              n.remCamera ? "" : "this.camera.preUpdate();",
              n.remPhysics ? "" : "this.physics.preUpdate();",
              "this.state.preUpdate(timeStep);",
              n.remPlugins ? "" : "this.plugins.preUpdate();",
              "this.stage.preUpdate();",
              "this.state.update();",
              "this.stage.update();",
              "this.tweens.update();",
              "this.sound.update();",
              n.remInput ? "" : "this.input.update();",
              n.remPhysics ? "" : "this.physics.update();",
              n.remParticles ? "" : "this.particles.update();",
              n.remPlugins ? "" : "this.plugins.update();",
              "this.stage.postUpdate();",
              n.remPlugins ? "" : "this.plugins.postUpdate();",
              "} else {",
              "this.scale.pauseUpdate();",
              "this.state.pauseUpdate();",
              n.remDebug ? "" : "this.debug.preUpdate();",
              "}",
              i ? "" : "this.stage.updateTransform();",
            ],
            r = new Function("timeStep", a.join(""));
          t.updateLogic = r.bind(t);
        }),
        (t.optimizePreUpdateCalls = function (t, n, o) {
          void 0 === o && (o = !1),
            (n =
              n ||
              function (e) {
                return !0;
              }),
            e.utils.invokeOnGraph(t, function (e) {
              if (n(e)) {
                if (e instanceof Phaser.BitmapText) return;
                if (e.preUpdate) {
                  var t = e.preUpdate.bind(e);
                  e.preUpdate = function () {
                    if (!e.exists || !e.parent.exists)
                      return (e.renderOrderID = -1), !1;
                    if (!1 === e.visible && o)
                      return (e.renderOrderID = -1), !1;
                    var n = !1;
                    if (
                      ((e._cachedX == e.position.x &&
                        e._cachedY == e.position.y) ||
                        ((e._cachedX = e.position.x),
                        (e._cachedY = e.position.y),
                        (n = !0)),
                      (e._cachedSX == e.scale.x && e._cachedSY == e.scale.y) ||
                        ((e._cachedSX = e.scale.x),
                        (e._cachedSY = e.scale.y),
                        (n = !0)),
                      e._cachedRotation != e.rotation &&
                        ((e._cachedRotation = e.rotation), (n = !0)),
                      !1 === n)
                    ) {
                      e.animations && e.animations.update();
                      for (var i = 0; i < e.children.length; i++)
                        e.children[i].preUpdate();
                      return !0;
                    }
                    return t();
                  };
                }
              }
            });
        }),
        (t.optimizePostUpdateCalls = function (t, n, o) {
          void 0 === o && (o = !1),
            (n =
              n ||
              function (e) {
                return !0;
              }),
            e.utils.invokeOnGraph(t, function (e) {
              if (n(e)) {
                if (e instanceof Phaser.BitmapText) return;
                if (e.postUpdate) {
                  var t = e.postUpdate.bind(e);
                  e.postUpdate = function () {
                    return (
                      !(!this.exists || !this.parent.exists) &&
                      (!1 !== this.visible || !o) &&
                      void t()
                    );
                  };
                }
              }
            });
        }),
        (t.optimizeUpdateCalls = function (t, n, o) {
          void 0 === o && (o = !1),
            (n =
              n ||
              function (e) {
                return !0;
              }),
            e.utils.invokeOnGraph(t, function (e) {
              if (n(e)) {
                if (e instanceof Phaser.BitmapText) return;
                if (e.update) {
                  var t = e.update.bind(e);
                  e.update = function () {
                    return (
                      !(!this.exists || !this.parent.exists) &&
                      (!1 !== this.visible || !o) &&
                      void t()
                    );
                  };
                }
              }
            });
        });
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        function n(e) {
          var t = e._renderWebGL;
          e._renderWebGL = function () {
            e.renderable && t.apply(e, arguments);
          };
        }
        t.createSceneGraphToRenderTextureUtilityObject = function (t, o) {
          var i,
            a = [],
            r = !0,
            s =
              o.renderTexture ||
              (function (e, t) {
                var n,
                  o,
                  i,
                  a,
                  r = e.add.renderTexture(t.width || 1280, t.height || 720);
                t.getTransformMatrix ||
                  (t.getTransformMatrix = function (e) {
                    return e;
                  });
                t.stripMatrixIdentity &&
                  ((t.viewPort = {
                    x:
                      (null ===
                        (o =
                          null === (n = t) || void 0 === n
                            ? void 0
                            : n.viewPort) || void 0 === o
                        ? void 0
                        : o.x) || 0,
                    y:
                      (null ===
                        (a =
                          null === (i = t) || void 0 === i
                            ? void 0
                            : i.viewPort) || void 0 === a
                        ? void 0
                        : a.y) || 0,
                  }),
                  (r.render = function (e, n, o) {
                    if (this.valid && 0 !== e.alpha) {
                      n = t.getTransformMatrix(n);
                      var i = this.renderer.gl;
                      i.viewport(
                        t.viewPort.x,
                        t.viewPort.y,
                        this.width * this.resolution,
                        this.height * this.resolution
                      ),
                        i.bindFramebuffer(
                          i.FRAMEBUFFER,
                          this.textureBuffer.frameBuffer
                        ),
                        o && this.textureBuffer.clear(),
                        (this.renderer.spriteBatch.dirty = !0),
                        this.renderer.renderDisplayObject(
                          e,
                          this.projection,
                          this.textureBuffer.frameBuffer,
                          n
                        ),
                        (this.renderer.spriteBatch.dirty = !0);
                    }
                  }));
                return r;
              })(t, o),
            u = e.phaser.utils.createUpdateTicker(t);
          return (
            u.onUpdate.add(function () {
              if (r) {
                o.clearBeforeRender && s.clear();
                for (var e = 0; e < a.length; e++) {
                  var t = a[e].do;
                  t.visible &&
                    ((t.renderable = !0), s.render(t), (t.renderable = !1));
                }
              }
            }),
            {
              addRenderObject: function (e) {
                r &&
                  (a.push({ do: e, orgRenderer: e._renderWebGL }),
                  o.keepOriginalRender || n(e));
              },
              removeRenderObject: function (e) {
                var t = a.reduce(function (t, n, o) {
                  return n.do === e ? ((e._renderWebGL = n.orgRenderer), o) : t;
                }, -1);
                -1 !== t && a.splice(t, 1);
              },
              getImage: function () {
                return (
                  i ||
                    ((i = t.add.image(0, 0, s, null)),
                    o.stripMatrixIdentity && ((i.scale.y = -1), (i.y = 720))),
                  i
                );
              },
              getRenderTexture: function () {
                return s;
              },
              setActive: function (e) {
                (r = e), i && (i.visible = i.exists = e);
                for (var t = 0; t < a.length; t++) {
                  var s = a[t],
                    l = s.do;
                  (l.renderable = !e),
                    e &&
                      l._renderWebGL === s.orgRenderer &&
                      !o.keepOriginalRender &&
                      n(s),
                    e ||
                      l._renderWebGL !== s.orgRenderer ||
                      o.keepOriginalRender ||
                      (l._renderWebGL = s.orgRenderer);
                }
                e && o.forceRenderOnActivate && u.onUpdate.dispatch();
              },
            }
          );
        };
      })(t.utils || (t.utils = {}));
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = 0;
        t.createUpdateTicker = function (t) {
          var o = { onUpdate: new e.utils.Signal0() },
            i = t.add.group(null, "__tk_updateTicker__" + n, !0, !1);
          return (
            n++,
            (i.update = function () {
              o.onUpdate.dispatch();
            }),
            o
          );
        };
      })(t.utils || (t.utils = {}));
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      t.addAnimationEventSupport = function (t, n) {
        var o = t.update.bind(t),
          i = t;
        (i._lastFrame = 0),
          (i.animEvents = n),
          (i.onAnimationEvent = new e.utils.Signal2()),
          (t.update = function () {
            var e = o();
            if (i._lastFrame !== i._frameIndex) {
              var t = i._lastFrame - i._frameIndex,
                n = i._frames.length;
              t < 0 && (t = n - i._lastFrame + i._frameIndex);
              for (var a = 0; a < t; a++) {
                var r = (i._lastFrame + a) % n;
                void 0 !== i.animEvents[r] &&
                  i.onAnimationEvent.dispatch(i, i.animEvents[r]);
              }
            }
            return (i._lastFrame = i._frameIndex), e;
          });
        var a = t.stop.bind(t);
        t.stop = function (e, t) {
          (i._lastFrame = 0), a(e, t);
        };
        var r = t.play.bind(t);
        t.play = function (e, t, n) {
          return (i._lastFrame = 0), r(e, t, n);
        };
        var s = t.complete.bind(t);
        t.complete = function () {
          (i._lastFrame = 0), s();
        };
      };
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      (t.addHTintSupport = function (t) {
        var n = t;
        n._selfTint = 16777215;
        var o = Object.defineProperty(n, "hTint", {
          enumerable: !0,
          configurable: !1,
          get: function () {
            return this._selfTint;
          },
          set: function (t) {
            this._selfTint = t;
            var n = 16777215;
            if (
              (null != this.parent &&
                (n = null != this.parent.tint ? this.parent.tint : 16777215),
              (this.tint = e.phaser.combineColors(this._selfTint, n)),
              this instanceof Phaser.BitmapText)
            )
              for (var o = 0; o < this.children.length; o++) {
                (i = this.children[o]).tint = this.tint;
              }
            else
              for (o = 0; o < this.children.length; o++) {
                var i;
                void 0 !== (i = this.children[o])._selfTint
                  ? (i.hTint = i._selfTint)
                  : (i.tint = this.tint);
              }
          },
        });
        if (t instanceof PIXI.DisplayObjectContainer)
          for (var i = t, a = 0; a < i.children.length; a++)
            e.phaser.addHTintSupport(i.children[a]);
        return o;
      }),
        (t.combineColors = function (e, t) {
          var n = Math.min(255, Math.floor(((e >> 16) * (t >> 16)) / 255)),
            o = Math.min(
              255,
              Math.floor((((e >> 8) & 255) * ((t >> 8) & 255)) / 255)
            );
          return (
            Math.min(255, Math.floor(((255 & e) * (255 & t)) / 255)) |
            (o << 8) |
            (n << 16)
          );
        }),
        (t.addBlendModeSupportToBitmapText = function (e) {
          Object.defineProperty(e, "blendMode", {
            get: function () {
              return this._blendMode || PIXI.blendModes.NORMAL;
            },
            set: function (e) {
              this._blendMode = e;
              for (var t = 0; t < this.children.length; t++)
                this.children[t].blendMode = e;
              return e;
            },
          });
          var t = e.updateText.bind(e);
          e.updateText = function () {
            t();
            for (var e = 0; e < this.children.length; e++)
              this.children[e].blendMode = this._blendMode;
          }.bind(e);
        });
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      (t.makeSearchable = function (t) {
        return (
          (t.getChildByName = function (t, n) {
            return !0 !== n
              ? e.phaser.findPhaserSceneElementById(t, this)
              : e.phaser.findPhaserSceneElementByPath(t.split("."), this);
          }.bind(t)),
          t
        );
      }),
        (t.mapAllElements = function (t, n) {
          void 0 === n && (n = !0);
          var o = {};
          if (null == t.children || 0 === t.children.length) return o;
          if (t instanceof Phaser.BitmapText) return o;
          for (var i = 0; i < t.children.length; i++) {
            var a = t.children[i];
            if (void 0 === a.name)
              throw new Error(
                "mapAllElements: Cannot map " + a + " because it has no name!"
              );
            o[a.name] = a;
            var r = e.phaser.mapAllElements(a, !1);
            for (var s in r) o[s] = r[s];
          }
          return !0 === n
            ? ((t.childrenMap = o),
              (t.getChildByName = function (n, i) {
                return !0 === i
                  ? (o = e.phaser.findPhaserSceneElementByPath(
                      n.split("."),
                      this
                    ))
                  : (void 0 !== this.childrenMap && (o = this.childrenMap[n]),
                    null == o &&
                      null !=
                        (o = e.phaser.findPhaserSceneElementById(n, this)) &&
                      (t.childrenMap[n] = o),
                    o);
              }.bind(t)),
              t)
            : o;
        }),
        (t.addNamedImage = function (e, t, n, o, i, a, r) {
          var s = null != r && r instanceof Phaser.Group,
            u = e.image(n, o, i, a, s ? r : void 0);
          return (u.name = t), !1 === s && null != r && r.addChild(u), u;
        }),
        (t.addNamedSprite = function (e, t, n, o, i, a, r) {
          var s = null != r && r instanceof Phaser.Group,
            u = e.sprite(n, o, i, a, s ? r : void 0);
          return (u.name = t), !1 === s && null != r && r.addChild(u), u;
        }),
        (t.addNamedBitmapText = function (e, t, n, o, i, a, r, s) {
          var u = null != s && s instanceof Phaser.Group,
            l = e.bitmapText(n, o, i, r, a, void 0, u ? s : void 0);
          return (l.name = t), !1 === u && null != s && s.addChild(l), l;
        }),
        (t.addNamedGroup = function (e, t, n) {
          return e.group(n, t, !1, !1);
        }),
        (t.findPhaserSceneElementById = function (t, n) {
          for (var o = 0; o < n.children.length; o++) {
            var i = n.children[o];
            if (i.name === t) return i;
            var a = e.phaser.findPhaserSceneElementById(t, i);
            if (null !== a) return a;
          }
          return null;
        }),
        (t.findPhaserSceneElementByPath = function (t, n) {
          if (0 === t.length) return n;
          if (void 0 === n.children || 0 === n.children.length) return n;
          for (var o = 0; o < n.children.length; o++) {
            var i = n.children[o];
            if (i.name === t[0])
              return (
                (t = t.slice(1)), e.phaser.findPhaserSceneElementByPath(t, i)
              );
          }
          return null;
        }),
        (t.findPhaserSceneElementByKey = function (t, n) {
          if (null == n.children || 0 === n.children.length) return [];
          for (var o = [], i = 0; i < n.children.length; i++) {
            var a = n.children[i];
            if (a.key === t) o.push(a);
            else
              for (
                var r = e.phaser.findPhaserSceneElementByKey(t, a), s = 0;
                s < r.length;
                s++
              )
                o.push(r[s]);
          }
          return o;
        });
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      e.modifyFrameValueProperties = function (e, t) {
        for (var n in t) {
          var o,
            i = !1,
            a = t[n].toString();
          -1 != a.indexOf("=")
            ? ((i = !0), (o = parseFloat(a.substr(1))))
            : (o = parseFloat(a));
          for (var r = 0; r < e.length; r++) {
            var s = e[r];
            null != s[n] && (i ? (s[n] += o) : (s[n] = o));
          }
        }
      };
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t, n) {
          var o = e.call(this) || this;
          return (o._timeManager = t), (o._timeOutAfterMs = n), o;
        }
        return (
          __extends(t, e),
          (t.prototype.init = function (e, t) {
            (this._timeManager = e), (this._timeOutAfterMs = t);
          }),
          (t.prototype.startInternal = function () {
            null != this._timer && (this._timer.stop(), (this._timer = null)),
              (this._timer = this._timeManager.create(!0)),
              this._timer.add(this._timeOutAfterMs(), this.handleTimeOut, this),
              this._timer.start();
          }),
          (t.prototype.handleTimeOut = function () {
            this.stopped
              ? this.handleItemStopped()
              : this.handleItemCompleted();
          }),
          (t.prototype.stopInternal = function () {
            null != this._timer && (this._timer.stop(), (this._timer = null)),
              this.handleItemStopped();
          }),
          t
        );
      })(e.AbstractSequenceItem);
      e.PhaserTimeOutItem = t;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = (function () {
        function t(t, n) {
          var o = this;
          (this.onComplete = new e.utils.Signal1()),
            (this.onStopped = new e.utils.Signal1()),
            (this.name = n),
            (this._game = t),
            (this._internalSequence = new e.seqlib.Sequence()),
            this._internalSequence.onComplete.add(function () {
              o.onComplete.dispatch(o);
            }),
            this._internalSequence.onStopped.add(function () {
              o.onStopped.dispatch(o);
            });
        }
        return (
          (t.prototype.call = function (t, n, o) {
            return (
              this._internalSequence.items.push(
                new e.seqlib.InvokeFunctionItem(t, n, o)
              ),
              this
            );
          }),
          (t.prototype.delayedCall = function (t, n, o, i) {
            return (
              this._internalSequence.items.push(
                new e.seqlib.PhaserTimeOutItem(this._game.time, function () {
                  return t;
                })
              ),
              this
            );
          }),
          (t.prototype.waitForSignal = function (t) {
            return (
              this._internalSequence.items.push(
                new e.seqlib.WaitForSignalItem(t)
              ),
              this
            );
          }),
          (t.prototype.waitForPhaserSignal = function (t) {
            return (
              this._internalSequence.items.push(
                new e.seqlib.WaitForSignalItem(t)
              ),
              this
            );
          }),
          (t.prototype.delay = function (t) {
            return (
              this._internalSequence.items.push(
                new e.seqlib.PhaserTimeOutItem(this._game.time, function () {
                  return t;
                })
              ),
              this
            );
          }),
          (t.prototype.and = function (t, n) {
            var o = new e.seqlib.AndItem(t, n);
            return this._internalSequence.items.push(o), this;
          }),
          (t.prototype.all = function (t) {
            var n = new e.seqlib.ConcurrentSequence();
            return (n.items = t), this._internalSequence.items.push(n), this;
          }),
          (t.prototype.or = function (t, n) {
            var o = new e.seqlib.OrItem(t, n);
            return this._internalSequence.items.push(o), this;
          }),
          (t.prototype.if = function (t, n, o) {
            null == n && (n = new e.seqlib.NoOpItem());
            var i = new e.seqlib.ConditionalItem(o, !1, t, n);
            return this._internalSequence.items.push(i), this;
          }),
          (t.prototype.isRunning = function () {
            return this._internalSequence.isRunning();
          }),
          (t.prototype.start = function () {
            this._internalSequence.start();
          }),
          (t.prototype.stop = function () {
            this._internalSequence.stop();
          }),
          t
        );
      })();
      t.SequenceBuilder = n;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t) {
          var n = e.call(this) || this;
          return (n._funcToRunAtStart = t), n;
        }
        return (
          __extends(t, e),
          (t.prototype.startInternal = function () {
            null != this._funcToRunAtStart &&
              ((this._anim = this._funcToRunAtStart()),
              this._anim.onComplete.addOnce(
                this.handleAnimationComplete,
                this
              ));
          }),
          (t.prototype.stopInternal = function () {
            null != this._anim &&
              this._anim.onComplete.remove(this.handleAnimationComplete, this),
              this.handleItemStopped();
          }),
          (t.prototype.handleAnimationComplete = function () {
            !1 === this.stopped
              ? this.handleItemCompleted()
              : this.handleItemStopped();
          }),
          t
        );
      })(e.AbstractSequenceItem);
      e.WaitForAnimationItem = t;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t, n, o) {
          var i = e.call(this) || this;
          return (
            (i._signal = t),
            (i._signalRetriever = n),
            (i._funcToRunAtStart = o),
            i
          );
        }
        return (
          __extends(t, e),
          (t.prototype.startInternal = function () {
            null != this._signal
              ? ((this._actualSignal = this._signal),
                this._actualSignal.addOnce(this.handleSignalReceived, this))
              : ((this._actualSignal = this._signalRetriever()),
                this._actualSignal.addOnce(this.handleSignalReceived, this)),
              null != this._funcToRunAtStart && this._funcToRunAtStart();
          }),
          (t.prototype.stopInternal = function () {
            this._actualSignal.remove(this.handleSignalReceived, this),
              this.handleItemStopped();
          }),
          (t.prototype.handleSignalReceived = function () {
            !1 === this.stopped
              ? this.handleItemCompleted()
              : this.handleItemStopped();
          }),
          t
        );
      })(e.AbstractSequenceItem);
      e.WaitForPhaserSignalItem = t;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e(e) {
          this._wrappedSignal = null == e ? new Phaser.Signal() : e;
        }
        return (
          Object.defineProperty(e.prototype, "active", {
            get: function () {
              return this._wrappedSignal.active;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "memorize", {
            get: function () {
              return this._wrappedSignal.memorize;
            },
            set: function (e) {
              this._wrappedSignal.memorize = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.add = function (e, t, n) {
            return this._wrappedSignal.add(e, t, n);
          }),
          (e.prototype.addOnce = function (e, t, n) {
            return this._wrappedSignal.addOnce(e, t, n);
          }),
          (e.prototype.dispatch = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._wrappedSignal.dispatch.apply(this._wrappedSignal, e);
          }),
          (e.prototype.dispose = function () {
            this._wrappedSignal.dispose();
          }),
          (e.prototype.forget = function () {
            this._wrappedSignal.dispose();
          }),
          (e.prototype.getNumListeners = function () {
            return this._wrappedSignal.getNumListeners();
          }),
          (e.prototype.halt = function () {
            this._wrappedSignal.halt();
          }),
          (e.prototype.has = function (e, t) {
            return this._wrappedSignal.has(e, t);
          }),
          (e.prototype.remove = function (e, t) {
            return this._wrappedSignal.remove(e, t);
          }),
          (e.prototype.removeAll = function (e) {
            this._wrappedSignal.removeAll();
          }),
          e
        );
      })();
      e.TypedPhaserSignal = t;
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t, n, o) {
          var i = e.call(this) || this;
          return (
            (i._typedSignal = t),
            (i._signalRetriever = n),
            (i._funcToRunAtStart = o),
            i
          );
        }
        return (
          __extends(t, e),
          (t.prototype.startInternal = function () {
            null != this._typedSignal
              ? ((this._actualSignal = this._typedSignal),
                this._actualSignal.addOnce.apply(this._typedSignal, [
                  this.handleSignalReceived,
                  this,
                ]))
              : ((this._actualSignal = this._signalRetriever()),
                this._actualSignal.addOnce.apply(this._typedSignal, [
                  this.handleSignalReceived,
                  this,
                ])),
              null != this._funcToRunAtStart && this._funcToRunAtStart();
          }),
          (t.prototype.stopInternal = function () {
            this._actualSignal.remove.apply(this._actualSignal, [
              this.handleSignalReceived,
              this,
            ]),
              this.handleItemStopped();
          }),
          (t.prototype.handleSignalReceived = function () {
            !1 === this.stopped
              ? this.handleItemCompleted()
              : this.handleItemStopped();
          }),
          t
        );
      })(e.AbstractSequenceItem);
      e.WaitForTypedSignalItem = t;
    })(e.seqlib || (e.seqlib = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = (function () {
        function t(t, n, o, i, a) {
          void 0 === o && (o = !1),
            void 0 === i && (i = 1),
            void 0 === a && (a = !1),
            (this.onStop = new e.utils.Signal1()),
            (this.soundId = void 0),
            (this.startTime = 0),
            (this.stopTime = 0),
            (this.isPlaying = !1),
            (this.volume = 1),
            (this.loop = !1),
            (this._fadeDuration = 0),
            (this.soundId = t),
            (this._soundManager = n),
            (this.loop = a),
            (this.volume = i),
            o && this.play(i, a);
        }
        return (
          (t.prototype.play = function (e, t) {
            (this.isPlaying = !0),
              this._soundManager.game.cache.isSoundReady(this.soundId)
                ? ((this._sound = this._soundManager.play(
                    this.soundId,
                    this.volume,
                    this.loop
                  )),
                  this._soundManager.game.device.ie &&
                    (this._sound.mute = this._soundManager.mute))
                : ((this.startTime = this._soundManager.game.runningTime),
                  this._soundManager.onSoundDecode.remove(
                    this.playSoundWhenDecoded,
                    this
                  ),
                  this._soundManager.onSoundDecode.remove(
                    this.fadeInSoundWhenDecoded,
                    this
                  ),
                  this._soundManager.onSoundDecode.add(
                    this.playSoundWhenDecoded,
                    this
                  ));
          }),
          (t.prototype.playSoundWhenDecoded = function (e) {
            if (e === this.soundId)
              if (
                (this._soundManager.onSoundDecode.remove(
                  this.playSoundWhenDecoded,
                  this
                ),
                this.isPlaying)
              ) {
                var t =
                  (this._soundManager.game.runningTime - this.startTime) / 1e3;
                (this._sound = this._soundManager.play(
                  this.soundId,
                  this.volume,
                  this.loop
                )),
                  this.loop
                    ? (this._sound.play(
                        void 0,
                        t % this._sound.totalDuration,
                        this.volume,
                        this.loop,
                        !0
                      ),
                      this._soundManager.game.device.ie &&
                        (this._sound.mute = this._soundManager.mute))
                    : t >= this._sound.totalDuration
                    ? this._sound.stop()
                    : (this._sound.play(void 0, t, this.volume, this.loop, !0),
                      this._soundManager.game.device.ie &&
                        (this._sound.mute = this._soundManager.mute));
              } else this._sound && this._sound.stop();
          }),
          (t.prototype.fadeInSoundWhenDecoded = function (e) {
            if (e === this.soundId)
              if (this.isPlaying) {
                var t =
                  (this._soundManager.game.runningTime - this.startTime) / 1e3;
                (this._sound = this._soundManager.play(
                  this.soundId,
                  this.volume,
                  this.loop
                )),
                  this.loop
                    ? (this._sound.play(
                        void 0,
                        t % this._sound.totalDuration,
                        this.volume,
                        this.loop,
                        !0
                      ),
                      this._sound.fadeTo(this._fadeDuration, this.volume))
                    : t >= this._sound.totalDuration
                    ? this._sound.stop()
                    : (this._sound.play(void 0, t, this.volume, this.loop, !0),
                      this._sound.fadeTo(this._fadeDuration, this.volume)),
                  this._soundManager.game.device.ie &&
                    (this._sound.mute = this._soundManager.mute);
              } else this._sound && this._sound.stop();
          }),
          (t.prototype.handleSoundStopped = function () {
            (this.isPlaying = !1), this.onStop.dispatch(this);
          }),
          (t.prototype.fadeOut = function (e) {
            void 0 === this._sound
              ? (this.isPlaying = !1)
              : this._sound.fadeOut(e);
          }),
          (t.prototype.fadeIn = function (e) {
            (e = e || 1e3),
              (this.isPlaying = !0),
              (this._fadeDuration = e),
              this._soundManager.game.cache.isSoundReady(this.soundId)
                ? ((this._sound = this._soundManager.play(
                    this.soundId,
                    this.volume,
                    this.loop
                  )),
                  this._sound.fadeIn(e, this.loop),
                  this._soundManager.game.device.ie &&
                    (this._sound.mute = this._soundManager.mute))
                : ((this.startTime = this._soundManager.game.runningTime),
                  this._soundManager.onSoundDecode.remove(
                    this.playSoundWhenDecoded,
                    this
                  ),
                  this._soundManager.onSoundDecode.remove(
                    this.fadeInSoundWhenDecoded,
                    this
                  ),
                  this._soundManager.onSoundDecode.add(
                    this.fadeInSoundWhenDecoded,
                    this
                  ));
          }),
          (t.prototype.stop = function () {
            void 0 !== this._sound &&
              (this._sound.onDecoded.remove(this.playSoundWhenDecoded, this),
              this._sound.onDecoded.remove(this.fadeInSoundWhenDecoded, this),
              this._sound.stop()),
              (this.isPlaying = !1);
          }),
          t
        );
      })();
      t.PhaserSoundWrapper = n;
    })(e.sounds || (e.sounds = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      t.createSimplePhaserTimer = function (t, n, o, i) {
        void 0 === i && (i = !0);
        var a = t.time.create(!0);
        return (
          a.add(
            n,
            e.utils.createSafeLambda(t.gameInstanceId, function () {
              return o();
            }),
            null
          ),
          i && a.start(),
          a
        );
      };
    })(e.time || (e.time = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        e.abortAnimationAndSetFrame = function (e, t) {
          var n = e;
          t.stopNow
            ? (e.stop(!1, !1), n._sprite.setFrame(t.frame))
            : null != t.stopLoop &&
              ((e.loop = !t.stopLoop),
              e.onComplete.addOnce(function () {
                n._sprite.setFrame(t.frame);
              }));
        };
      })(e.utils || (e.utils = {}));
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        (e.addLoopCountMixin = function (e, t) {
          var n = t;
          return (
            e.onLoop.add(function () {
              0 === --n && e.stop(!1, !0);
            }),
            e.onStart.add(function () {
              n = t;
            }),
            e
          );
        }),
          (e.removeLoopCountMixin = function (e) {
            return e.onLoop.removeAll(), e.onStart.removeAll(), e;
          });
      })(e.utils || (e.utils = {}));
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      (t.chainAnimations = function (e, t, n, o) {
        void 0 === o && (o = !1),
          (n = n || {}),
          o
            ? e.onComplete.addOnce(function () {
                t.play(n.frameRate, n.loop, n.killOnComplete);
              })
            : e.onComplete.add(function () {
                t.play(n.frameRate, n.loop, n.killOnComplete);
              });
      }),
        (t.chainAnimationToOtherSprite = function (e, t, n, o) {
          void 0 === o && (o = !1),
            o
              ? e.onComplete.addOnce(function () {
                  t.play(n.animName, n.frameRate, n.loop, n.killOnComplete);
                })
              : e.onComplete.add(function () {
                  t.play(n.animName, n.frameRate, n.loop, n.killOnComplete);
                });
        }),
        (t.triggerAnimationOnAnimationStart = function (e, t, n) {
          void 0 === n && (n = !1),
            n
              ? e.onStart.addOnce(function () {
                  t.play();
                })
              : e.onStart.add(function () {
                  t.play();
                });
        }),
        (t.triggerFunctionOnAnimationStart = function (e, t, n) {
          void 0 === n && (n = !1),
            n
              ? e.onStart.addOnce(function () {
                  t();
                })
              : e.onStart.add(function () {
                  t();
                });
        }),
        (t.triggerPlayOnAnimationStart = function (e, t, n, o) {
          void 0 === o && (o = !1),
            o
              ? e.onStart.addOnce(function () {
                  t.play(n.animId, n.frameRate, n.loop, n.killOnComplete);
                })
              : e.onStart.add(function () {
                  t.play(n.animId, n.frameRate, n.loop, n.killOnComplete);
                });
        }),
        (t.triggerStopOnAnimationStop = function (e, t) {
          var n = e.stop;
          e.stop = function () {
            n.apply(e, arguments), t.stop();
          };
        }),
        (t.syncAnimations = function (e) {
          var t = e[0];
          (t.enableUpdate = !0),
            t.onUpdate.add(function () {
              e.forEach(function (e) {
                e !== t && e.setFrame(t.currentFrame);
              });
            });
        }),
        (t.syncAnimationTo = function (e, t) {
          t.setFrame(Math.floor(e._frameIndex) % t.frameTotal, !0);
        }),
        (t.syncAnimationsByFrameNumber = function (e) {
          var t = e[0];
          (t.enableUpdate = !0),
            t.onUpdate.add(function () {
              e.forEach(function (e) {
                e !== t && e.setFrame(Math.floor(t._frameIndex), !0);
              });
            });
        }),
        (t.syncFrameNames = function (e, t) {
          (e.enableUpdate = !0),
            e.onUpdate.add(function () {
              t.forEach(function (t) {
                t.frameName = e.currentFrame.name;
              });
            });
        }),
        (t.addSyncFrameNamesToUpdateClosureList = function (t, n) {
          e.utils.replaceWithClosureList(t, "update", !1).add(function () {
            n.forEach(function (e) {
              e.frameName = t.frameName;
            });
          });
        }),
        (t.syncFramesCustom = function (e, t, n) {
          (e.enableUpdate = !0),
            e.onUpdate.add(function () {
              t.forEach(function (t) {
                n(e.currentFrame, t);
              });
            });
        }),
        (t.syncAnimationsCustom = function (e, t, n) {
          (e.enableUpdate = !0),
            e.onUpdate.add(function () {
              t.forEach(function (t) {
                n(e, t);
              });
            });
        }),
        (t.buildFrameToFrameMapper = function (e, t) {
          for (var n = {}, o = 0; o < e.length; o++) n[e[o].name] = t[o];
          return {
            getFrame: function (e) {
              return "string" == typeof e ? n[e] : n[e.name];
            },
          };
        }),
        (t.supplantAnimation = function (e, t, n) {
          void 0 === n && (n = !1);
          var o = e;
          n &&
            ((t.onComplete = e.onComplete),
            (t.onStart = e.onStart),
            (t.onLoop = e.onLoop),
            (t.onUpdate = e.onUpdate));
          var i = Math.min(o._frameIndex, t.frameTotal - 1) || 0;
          return (
            o.isPlaying
              ? (o.stop(), t.play(), t.setFrame(i, !0))
              : (t.play(), t.setFrame(i, !0), t.stop()),
            t
          );
        });
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        e.clampFontSizeOnSafari = function (e, t) {
          e.device.iOS &&
            "boku" === t.font &&
            (t.fontSize = Math.min(70, t.fontSize));
        };
      })(e.utils || (e.utils = {}));
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {}));
var wait = tk_common.utils.wait;
!(function (e) {
  !(function (e) {
    function t(e, t, o, i) {
      var a = this;
      return (
        void 0 === e && (e = 512),
        void 0 === t && (t = 4096),
        void 0 === o && (o = 1),
        void 0 === i && (i = 8),
        new Promise(function (r) {
          return __awaiter(a, void 0, void 0, function () {
            var a, s, u;
            return __generator(this, function (l) {
              switch (l.label) {
                case 0:
                  return o > 1 ? [4, n(e, e / o)] : [3, 2];
                case 1:
                  return (a = l.sent()), [3, 4];
                case 2:
                  return [4, n(e, e * o)];
                case 3:
                  (a = l.sent()), (l.label = 4);
                case 4:
                  return a ? [3, 5] : (r(e), [3, 11]);
                case 5:
                  return [4, n(t, t / o)];
                case 6:
                  if ((a = l.sent())) return [2, r(t)];
                  (s = t), (l.label = 7);
                case 7:
                  return [4, n((u = (e + s) / 2), u / o)];
                case 8:
                  (a = l.sent()), (s = u), i--, (l.label = 9);
                case 9:
                  if (a && i > 0) return [3, 7];
                  l.label = 10;
                case 10:
                  return [2, r(s)];
                case 11:
                  return [2];
              }
            });
          });
        })
      );
    }
    function n(t, n) {
      return __awaiter(this, void 0, void 0, function () {
        var o, i, a;
        return __generator(this, function (r) {
          switch (r.label) {
            case 0:
              return (
                ((o = document.createElement("canvas")).width = Math.round(t)),
                (o.height = Math.round(n)),
                (o.style.width = "4px"),
                (o.style.height = "4px"),
                ((i = o.getContext("2d")).fillStyle = "#ff00ff"),
                i.fillRect(0, 0, t, n),
                (a = i.getImageData(0, 0, 1, 1)),
                [4, e.wait(0.05)]
              );
            case 1:
              return (
                r.sent(),
                255 == a.data[0] && 0 == a.data[1] && 255 == a.data[2]
                  ? [2, !0]
                  : [2, !1]
              );
          }
        });
      });
    }
    (e.findLargestPossibleCanvasSize = t),
      (e.isCanvasSizeSupported = function (e, t) {
        var o = this;
        return new Promise(function (i) {
          return __awaiter(o, void 0, void 0, function () {
            var o;
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return [4, n(e, t)];
                case 1:
                  return (o = a.sent()), i(o), [2];
              }
            });
          });
        });
      }),
      (e.getClosestSupportedCanvasSize = function (e, o, i, a) {
        var r = this;
        return (
          void 0 === i && (i = 1),
          void 0 === a && (a = 8),
          new Promise(function (a) {
            return __awaiter(r, void 0, void 0, function () {
              var r;
              return __generator(this, function (s) {
                switch (s.label) {
                  case 0:
                    return [4, n(e, o)];
                  case 1:
                    return s.sent()
                      ? (a({ width: e, height: o }), [3, 4])
                      : [3, 2];
                  case 2:
                    return [4, t(0, e, i)];
                  case 3:
                    (r = s.sent()),
                      a({ width: r, height: r / i }),
                      (s.label = 4);
                  case 4:
                    return [2];
                }
              });
            });
          })
        );
      });
  })(e.utils || (e.utils = {}));
})(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      (e.generateAnimationFramesAdv = function (e, t, n, o) {
        for (var i, a = [], r = 0; r < t.length; r++)
          1 === t[r].length
            ? ((i = Phaser.Animation.generateFrameNames(
                e,
                t[r][0],
                t[r][0],
                n,
                o
              )),
              a.push(i[0]))
            : ((i = Phaser.Animation.generateFrameNames(
                e,
                t[r][0],
                t[r][1],
                n,
                o
              )),
              (a = a.concat(i)));
        return a;
      }),
        (e.generateDummyAnimationFrames = function (e, t) {
          for (var n = [], o = 0; o < t; o++) n.push(e);
          return n;
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        (e.movePivotToCenterCenter = function (e) {
          (e.pivot.x = e.width / 2), (e.pivot.y = e.height / 2);
        }),
          (e.movePivotToCenterTop = function (e) {
            (e.pivot.x = e.width / 2), (e.pivot.y = 0);
          }),
          (e.movePivotToCenterBottom = function (e) {
            (e.pivot.x = e.width / 2), (e.pivot.y = e.height);
          }),
          (e.movePivotToLeftCenter = function (e) {
            (e.pivot.x = 0), (e.pivot.y = e.height / 2);
          }),
          (e.movePivotToRightCenter = function (e) {
            (e.pivot.x = e.width), (e.pivot.y = e.height / 2);
          }),
          (e.movePivotToLeftTop = function (e) {
            (e.pivot.x = 0), (e.pivot.y = 0);
          }),
          (e.movePivotToRightBottom = function (e) {
            (e.pivot.x = e.width), (e.pivot.y = e.height);
          }),
          (e.moveAnchorToCenterCenter = function (e) {
            (e.anchor.x = 0.5), (e.anchor.y = 0.5);
          }),
          (e.moveAnchorToCenterTop = function (e) {
            (e.anchor.x = 0.5), (e.anchor.y = 0);
          }),
          (e.moveAnchorToCenterBottom = function (e) {
            (e.anchor.x = 0.5), (e.anchor.y = 1);
          }),
          (e.moveAnchorToLeftCenter = function (e) {
            (e.anchor.x = 0), (e.anchor.y = 0.5);
          }),
          (e.moveAnchorToRightCenter = function (e) {
            (e.anchor.x = 1), (e.anchor.y = 0.5);
          }),
          (e.moveAnchorToLeftTop = function (e) {
            (e.anchor.x = 0), (e.anchor.y = 0);
          }),
          (e.moveAnchorToRightBottom = function (e) {
            (e.anchor.x = 1), (e.anchor.y = 1);
          });
      })(e.utils || (e.utils = {}));
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      e.stopAnimationsOnSprite = function e(t, n) {
        if (
          (void 0 === n && (n = !0),
          t instanceof Phaser.Sprite && t.animations.stop(),
          n)
        ) {
          if (null == t.children) return;
          for (var o = 0; o < t.children.length; o++) {
            e(t.children[o], !0);
          }
        }
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        e.syncFrameRateToTimeScale = function (e, t) {
          return (
            null == e.__tk_sync_to_timescale &&
              ((e.__tk_sync_to_timescale = t),
              (e.play = (function () {
                var t = 60;
                null == e.onUpdate && (e.enableUpdate = !0),
                  e.onUpdate.add(function () {
                    var n = e.__tk_sync_to_timescale,
                      o = t * n.calcTimeScale();
                    e.delay = 0 !== o ? 1e3 / o : Number.MAX_VALUE;
                  });
                var n = e.play.bind(e);
                return function (o, i, a) {
                  var r = e.__tk_sync_to_timescale;
                  return (
                    (t = null != o ? o : t), n(o * r.calcTimeScale(), i, a)
                  );
                };
              })())),
            e
          );
        };
      })(e.utils || (e.utils = {}));
    })(e.phaser || (e.phaser = {}));
  })(tk_common || (tk_common = {}));
var tk_gui;
__extends =
  (this && this.__extends) ||
  (function () {
    var e = function (t, n) {
      return (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(t, n);
    };
    return function (t, n) {
      function o() {
        this.constructor = t;
      }
      e(t, n),
        (t.prototype =
          null === n
            ? Object.create(n)
            : ((o.prototype = n.prototype), new o()));
    };
  })();
!(function (e) {
  !(function (e) {
    !(function (e) {
      var t = (function () {
        function e(e, t) {
          (this.bridge = e), (this._model = t);
        }
        return (
          (e.prototype.roundStarted = function (e, t) {
            var n = void 0,
              o = this._model.currentFreeRoundProgram;
            void 0 !== o && (n = o.playerfreeroundreference),
              this.bridge.roundStarted({
                accountid: this._model.accountId,
                currencyiso: this._model.placedBet.value.currencyiso,
                totalbet: this._model.placedBetAmount,
                isautoplay: e,
                freeroundid: n,
                timestamp: t,
              });
          }),
          (e.prototype.roundEnded = function () {
            var e = void 0,
              t = this._model.currentFreeRoundProgram;
            void 0 !== t && (e = t.playerfreeroundreference);
            var n = this._model.gameRound;
            null != n &&
              this.bridge.roundEnded({
                freeroundid: e,
                gameroundid: n.gameRoundId,
                replayid: n.replayId,
                totalbetmultiplier: n.totalBetMultiplierForGameRound,
                totalwin: n.totalWinAmountForGameRound,
                winlevel: this._model.getWinLevelId(
                  n.totalBetMultiplierForGameRound
                ),
                metagametags: n.metaTags,
              });
          }),
          (e.prototype.spinStarted = function () {
            this.bridge.spinStarted({});
          }),
          (e.prototype.spinEnded = function (e) {
            this.bridge.spinEnded({
              totalbetmultiplier: e.totalBetMultiplier,
              totalwin: e.totalWinAmount,
              finalsymbols: e.finalSymbols,
              metagametags: e.metaTags,
              winnings: void 0,
            });
          }),
          (e.prototype.balanceChanged = function () {
            this.bridge.balanceChanged({
              accountid: this._model.accountId,
              currencyiso: this._model.activeAccount.currencyiso,
              balance: this._model.activeAccount.balance,
              real: this._model.getRealMoneyBalance(),
              bonus: this._model.getBonusMoneyBalance(),
            });
          }),
          (e.prototype.betChanged = function () {
            this.bridge.betChanged({
              accountid: this._model.accountId,
              currencyiso: this._model.selectedBet.value.currencyiso,
              totalbet: this._model.selectedBet.value.amount,
            });
          }),
          (e.prototype.winPresentationStarted = function (e, t) {
            void 0 === e && (e = "main"),
              null != t
                ? this.bridge.winPresentationStarted({
                    gamepartid: e,
                    totalbetmultiplier: t.betMultiplier,
                    totalwinamount: t.winAmount,
                    waswinningspin: t.betMultiplier > 0,
                    winlevelid: t.winLevelId,
                  })
                : this.bridge.winPresentationStarted({ gamepartid: e });
          }),
          (e.prototype.winPresentationComplete = function (e, t) {
            if ((void 0 === e && (e = "main"), null == t)) {
              if (null == this._model.gameRound) return;
              var n = this._model.gameRound.currentOutcome.totalBetMultiplier;
              t = {
                betMultiplier: n,
                winAmount: this._model.gameRound.currentOutcome.totalWinAmount,
                winLevelId: this._model.getWinLevelId(n),
              };
            }
            this.bridge.winPresentationComplete({
              gamepartid: e,
              gameover: this._model.gameOver,
              totalbetmultiplier: t.betMultiplier,
              totalwinamount: t.winAmount,
              waswinningspin: t.betMultiplier > 0,
              winlevelid: t.winLevelId,
            });
          }),
          (e.prototype.finalWinPresentationStarted = function (e, t) {
            void 0 === e && (e = "main"),
              null != t
                ? this.bridge.winPresentationStarted({
                    gamepartid: e,
                    totalbetmultiplier: t.betMultiplier,
                    totalwinamount: t.winAmount,
                    waswinningspin: t.betMultiplier > 0,
                    winlevelid: t.winLevelId,
                  })
                : this.bridge.winPresentationStarted({ gamepartid: e });
          }),
          (e.prototype.finalWinPresentationComplete = function (e, t) {
            if ((void 0 === e && (e = "main"), null == t)) {
              if (null == this._model.gameRound) return;
              var n = this._model.gameRound.currentState.totalBetMultiplier;
              t = {
                betMultiplier: n,
                winAmount: this._model.gameRound.currentState.totalWinAmount,
                winLevelId: this._model.getWinLevelId(n),
              };
            }
            this.bridge.winPresentationComplete({
              gamepartid: e,
              gameover: this._model.gameOver,
              totalbetmultiplier: t.betMultiplier,
              totalwinamount: t.winAmount,
              waswinningspin: t.betMultiplier > 0,
              winlevelid: t.winLevelId,
            });
          }),
          e
        );
      })();
      e.JSBridgeHelper = t;
    })(e.slots || (e.slots = {}));
  })(e.jsintegration || (e.jsintegration = {}));
})(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            __extends(t, e),
            (t.prototype.dispatch = function (t, n) {
              e.prototype.dispatch.call(this, t, n);
            }),
            t
          );
        })(e.utils.Signal2);
        t.ControlPanelButtonClickedSignal = n;
      })(t.gui || (t.gui = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            __extends(t, e),
            (t.prototype.dispatch = function (t, n, o) {
              for (var i = [], a = 3; a < arguments.length; a++)
                i[a - 3] = arguments[a];
              e.prototype.dispatch.apply(this, [t, n, o].concat(i));
            }),
            t
          );
        })(e.utils.Signal4);
        t.DialogButtonClickedSignal = n;
      })(t.gui || (t.gui = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        !(function (e) {
          (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
            (e[(e.CUSTOM = 1)] = "CUSTOM"),
            (e[(e.PLAY_TIME_EXCEEDED_LOST_MONEY = 2)] =
              "PLAY_TIME_EXCEEDED_LOST_MONEY"),
            (e[(e.PLAY_TIME_EXCEEDED_WON_MONEY = 3)] =
              "PLAY_TIME_EXCEEDED_WON_MONEY"),
            (e[(e.SLOW_CONNECTION = 4)] = "SLOW_CONNECTION"),
            (e[(e.FREE_ROUNDS_FOUND = 5)] = "FREE_ROUNDS_FOUND"),
            (e[(e.FREE_ROUNDS_COMPLETED = 6)] = "FREE_ROUNDS_COMPLETED"),
            (e[(e.RESTORE_STATE_FOUND = 7)] = "RESTORE_STATE_FOUND"),
            (e[(e.GAME_ROUND_RESTORED = 8)] = "GAME_ROUND_RESTORED"),
            (e[(e.GAME_ROUND_ROLLED_BACK = 9)] = "GAME_ROUND_ROLLED_BACK"),
            (e[(e.INSUFFICIENT_FUNDS = 10)] = "INSUFFICIENT_FUNDS"),
            (e[(e.BET_CHANGE_RESETS_PROGRESSIVES = 11)] =
              "BET_CHANGE_RESETS_PROGRESSIVES"),
            (e[(e.PLAYER_LIMIT_EXCEEDED = 12)] = "PLAYER_LIMIT_EXCEEDED"),
            (e[(e.TECHNICAL_ERROR = 13)] = "TECHNICAL_ERROR"),
            (e[(e.JACKPOT_WON = 14)] = "JACKPOT_WON"),
            (e[(e.TOURNAMENT_ENTERED = 15)] = "TOURNAMENT_ENTERED"),
            (e[(e.TOURNAMENT_ENDED = 16)] = "TOURNAMENT_ENDED"),
            (e[(e.OC = 17)] = "OC"),
            (e[(e.WANT_TO_PLAY_FOR_REAL = 18)] = "WANT_TO_PLAY_FOR_REAL"),
            (e[(e.NOW_PLAYING_FOR_YOUR_OWN_MONEY = 19)] =
              "NOW_PLAYING_FOR_YOUR_OWN_MONEY"),
            (e[(e.LOSS_LIMIT_REACHED = 20)] = "LOSS_LIMIT_REACHED"),
            (e[(e.LOADER = 21)] = "LOADER"),
            (e[(e.SERVER_SIDE_INSUFFICIENT_FUNDS = 22)] =
              "SERVER_SIDE_INSUFFICIENT_FUNDS"),
            (e[(e.TOP_SPINS_FOUND = 23)] = "TOP_SPINS_FOUND"),
            (e[(e.TOP_SPINS_COMPLETED = 24)] = "TOP_SPINS_COMPLETED"),
            (e[(e.BLOCKED_JURISDICTION = 25)] = "BLOCKED_JURISDICTION"),
            (e[(e.DEVICE_NOT_SUPPORTED = 26)] = "DEVICE_NOT_SUPPORTED"),
            (e[(e.INVALID_PLAYER_SESSION = 27)] = "INVALID_PLAYER_SESSION"),
            (e[(e.REGULATION_DISCLAIMER = 28)] = "REGULATION_DISCLAIMER"),
            (e[(e.BET_REJECTED = 29)] = "BET_REJECTED"),
            (e[(e.MAX_EXPOSURE_WIN_CAP_REACHED = 30)] =
              "MAX_EXPOSURE_WIN_CAP_REACHED"),
            (e[(e.SESSION_LIMIT_EXCEEDED = 31)] = "SESSION_LIMIT_EXCEEDED");
        })(e.DialogTypeEnum || (e.DialogTypeEnum = {}));
      })(e.gui || (e.gui = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            __extends(t, e),
            (t.prototype.dispatch = function (t, n) {
              e.prototype.dispatch.call(this, t, n);
            }),
            t
          );
        })(e.utils.Signal2);
        t.GuiButtonClickedSignal = n;
      })(t.gui || (t.gui = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        !(function (e) {
          (e[(e.BACK_TO_GAME = 0)] = "BACK_TO_GAME"),
            (e[(e.SPIN = 1)] = "SPIN"),
            (e[(e.START_AUTO_PLAY = 2)] = "START_AUTO_PLAY"),
            (e[(e.STOP_AUTO_PLAY = 3)] = "STOP_AUTO_PLAY"),
            (e[(e.START_FEATURE = 4)] = "START_FEATURE"),
            (e[(e.START_FREE_ROUND = 5)] = "START_FREE_ROUND"),
            (e[(e.QUICK_STOP = 6)] = "QUICK_STOP"),
            (e[(e.SKIP = 7)] = "SKIP"),
            (e[(e.HOME = 8)] = "HOME"),
            (e[(e.PAY_TABLE = 9)] = "PAY_TABLE"),
            (e[(e.GAME_RULES = 10)] = "GAME_RULES"),
            (e[(e.BET = 11)] = "BET"),
            (e[(e.AUTO_PLAY = 12)] = "AUTO_PLAY"),
            (e[(e.TOGGLE_SOUND = 13)] = "TOGGLE_SOUND"),
            (e[(e.SOUND_SETTINGS = 14)] = "SOUND_SETTINGS"),
            (e[(e.HISTORY = 15)] = "HISTORY"),
            (e[(e.FAST_PLAY = 16)] = "FAST_PLAY"),
            (e[(e.GAME_SETTINGS = 17)] = "GAME_SETTINGS"),
            (e[(e.BACK_TO_LOBBY_BUTTON = 18)] = "BACK_TO_LOBBY_BUTTON"),
            (e[(e.ACHIEVEMENTS = 19)] = "ACHIEVEMENTS"),
            (e[(e.TOURNAMENTS = 20)] = "TOURNAMENTS"),
            (e[(e.BONUSES = 21)] = "BONUSES"),
            (e[(e.PROFILE_PAGE = 22)] = "PROFILE_PAGE"),
            (e[(e.CAMPAIGNS = 23)] = "CAMPAIGNS"),
            (e[(e.DEPOSIT = 24)] = "DEPOSIT"),
            (e[(e.PROVIDER_LINK = 25)] = "PROVIDER_LINK"),
            (e[(e.EXTERNAL_GAME_RULES = 26)] = "EXTERNAL_GAME_RULES"),
            (e[(e.RESUME_GAME_PLAY = 27)] = "RESUME_GAME_PLAY"),
            (e[(e.PAUSE_GAME_PLAY = 28)] = "PAUSE_GAME_PLAY"),
            (e[(e.OC = 29)] = "OC"),
            (e[(e.YES = 30)] = "YES"),
            (e[(e.NO = 31)] = "NO"),
            (e[(e.OK = 32)] = "OK"),
            (e[(e.CANCEL = 33)] = "CANCEL"),
            (e[(e.TOGGLE_POPUP_MENU = 34)] = "TOGGLE_POPUP_MENU"),
            (e[(e.DOWNLOAD = 35)] = "DOWNLOAD"),
            (e[(e.APPLY = 36)] = "APPLY"),
            (e[(e.LOGIN = 37)] = "LOGIN"),
            (e[(e.LOGOUT = 38)] = "LOGOUT"),
            (e[(e.CONTINUE = 39)] = "CONTINUE"),
            (e[(e.RELOAD = 40)] = "RELOAD"),
            (e[(e.CLEAR = 41)] = "CLEAR"),
            (e[(e.ACCOUNT = 42)] = "ACCOUNT"),
            (e[(e.TOGGLE_VIBRATE = 43)] = "TOGGLE_VIBRATE"),
            (e[(e.SKIP_DURING_FEATURE = 44)] = "SKIP_DURING_FEATURE"),
            (e[(e.QUICK_STOP_DURING_FEATURE = 45)] =
              "QUICK_STOP_DURING_FEATURE"),
            (e[(e.CUSTOM0 = 46)] = "CUSTOM0"),
            (e[(e.CUSTOM1 = 47)] = "CUSTOM1"),
            (e[(e.CUSTOM2 = 48)] = "CUSTOM2"),
            (e[(e.RESPONSIBLE_GAMING_LINK = 49)] = "RESPONSIBLE_GAMING_LINK");
        })(e.GuiButtonIds || (e.GuiButtonIds = {}));
      })(e.gui || (e.gui = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        function n(e, t) {
          var n = function () {
            return { enabled: t, allowed: e };
          };
          return {
            autoSpinConfigButton: n(),
            spin: n(),
            skipFeature: n(),
            quickStopFeature: n(),
            quickStop: n(),
            skip: n(),
            popUpMenuButton: n(),
            fastPlayButton: n(),
            vibrateButton: n(),
            soundButton: n(),
            startFreeRounds: n(),
            startAutoPlay: n(),
            betButton: n(),
            stopAutoPlay: n(),
            startFeature: n(),
            payTableButton: n(),
            ocButton: n(),
            historyButton: n(),
            gameRulesButton: n(),
            backToLobbyButton: n(),
          };
        }
        function o() {
          return {
            spin: { enabled: !1 },
            startAutoPlay: { enabled: !1 },
            startFreeRounds: { enabled: !1 },
          };
        }
        (t.createCompleteGuiOverridesSet = n),
          (t.createClearingGuiOverridesSet = function (e) {
            var t = JSON.parse(JSON.stringify(e));
            for (var n in e) {
              var o = t[n];
              !1 === o.enabled && (o.enabled = void 0),
                !1 === o.allowed && (o.allowed = void 0);
            }
            return t;
          }),
          (t.createCompleteSetButWithExclusions = function (t, o, i) {
            var a = n(t, o),
              r = e.utils.copyProperties(a, i, !1);
            for (var s in i)
              void 0 === i[s] && (a[s] = { allowed: void 0, enabled: void 0 });
            return r;
          }),
          (t.createStartNewRoundBlockingOverrides = o),
          (t.createGuiOverridesForActiveGameRound = function () {
            var e = {
              spin: { enabled: !1 },
              startAutoPlay: { enabled: !1 },
              startFreeRounds: { enabled: !1 },
              autoSpinConfigButton: { enabled: !1 },
              betButton: { enabled: !1 },
              historyButton: { enabled: !1 },
            };
            return e;
          }),
          (t.createGuiOverridesForPendingDialog = function () {
            var e = {
              spin: { enabled: !1 },
              startAutoPlay: { enabled: !1 },
              startFreeRounds: { enabled: !1 },
              autoSpinConfigButton: { enabled: !1 },
              betButton: { enabled: !1 },
              historyButton: { enabled: !1 },
            };
            return e;
          });
      })(t.gui || (t.gui = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  tk_gui || (tk_gui = {}),
  (function (e) {
    !(function (e) {
      !(function (e) {
        !(function (e) {
          (e[(e.ERROR = 0)] = "ERROR"),
            (e[(e.OUT_OF_MONEY = 1)] = "OUT_OF_MONEY"),
            (e[(e.NOTIFICATION = 2)] = "NOTIFICATION"),
            (e[(e.HOME = 3)] = "HOME"),
            (e[(e.BET = 4)] = "BET"),
            (e[(e.GAME_RULES = 5)] = "GAME_RULES"),
            (e[(e.AUTO_PLAY = 6)] = "AUTO_PLAY"),
            (e[(e.PAY_TABLE = 7)] = "PAY_TABLE"),
            (e[(e.HISTORY = 8)] = "HISTORY");
        })(e.PageIds || (e.PageIds = {}));
      })(e.gui || (e.gui = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = e.utils.roundAfterMaximumDecimals,
          o = (function () {
            function t(t, n, o) {
              void 0 === o && (o = 3),
                (this.onModelUpdatedFromGameResponse = new e.utils.Signal1()),
                (this.onModelUpdatedFromJackpotResponse =
                  new e.utils.Signal1()),
                (this.onPlayerMessagesQueueChanged = new e.utils.Signal1()),
                (this.realPlay = !1),
                (this.ocQueue = []),
                (this.sessionInfo = {
                  bigWins: 0,
                  nowins: 0,
                  roundsPlayed: 0,
                  rtp: 0,
                  wins: 0,
                  nearWins: 0,
                  features: 0,
                }),
                (this.totalWinAmountForSession = 0),
                (this.totalBetAmountForSession = 0),
                (this.autoPlayState = {
                  lossLimit: void 0,
                  singleWinLimit: void 0,
                  stopOnFeatureWon: !0,
                  stopOnJackpotWon: !1,
                  started: !1,
                  roundsLeft: 0,
                  roundsTotal: 0,
                  completed: !1,
                  aborted: !1,
                  lastSpin: !1,
                  running: !1,
                  allowedValues: [5, 10, 25, 50, 100],
                  cashLost: 0,
                  jackpotWon: void 0,
                  roundsPlayed: 0,
                }),
                (this._activeFreeRoundPrograms = {}),
                (this._clientType = 24),
                (this._clientBalance = 0),
                (this.selectedBet = {
                  value: {
                    amount: 1,
                    currencyiso: e.constants.CommonCurrencies.EUR,
                    classname: "tk.d.finance.Money",
                  },
                  id: "selectedBet",
                  classname: "tk.d.finance.Bet",
                }),
                (this._defaultGameActivity = "main.spin"),
                (this._clientVersion =
                  t.clientversion || (t.developmentmode ? "" : "?")),
                (this._initGameData = t),
                (this._distributionChannel = n),
                (this._clientType = o),
                (this._playerSessionId = t.playersessionid),
                (this.jackpots = {}),
                (this._playerMessageQueue = []),
                (this._gameRoundsDuringSession =
                  (t.realitycheckdata && t.realitycheckdata.gameroundsplayed) ||
                  0),
                (this._extraData = {});
            }
            return (
              (t.prototype.getFeatureBuyCost = function (e, t) {
                return this.featureBuyConfig
                  ? this.featureBuyConfig.options.find(function (t) {
                      return t.id === e;
                    })["" + t]
                  : t;
              }),
              Object.defineProperty(
                t.prototype,
                "gameRoundsPlayedDuringSession",
                {
                  get: function () {
                    return this._gameRoundsDuringSession;
                  },
                  enumerable: !0,
                  configurable: !0,
                }
              ),
              Object.defineProperty(t.prototype, "regulator", {
                get: function () {
                  return this.initGameData.regulator || "MT";
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "freeAccountSetup", {
                get: function () {
                  return this.initGameData.freeaccountsetup;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.getPlayerMessageQueue = function (e) {
                void 0 === e && (e = !0);
                var t = (this._playerMessageQueue || []).concat();
                return (
                  e &&
                    ((this._playerMessageQueue = []),
                    this.onPlayerMessagesQueueChanged.dispatch(0)),
                  t
                );
              }),
              (t.prototype.setPlayerMessageQueue = function (e) {
                (this._playerMessageQueue = e ? e.concat() : []),
                  this.onPlayerMessagesQueueChanged.dispatch(
                    this._playerMessageQueue.length
                  );
              }),
              (t.prototype.getWinLevelById = function (e, t) {
                return (
                  (t = t || this._winLevels),
                  this._winLevels.reduce(function (t, n) {
                    return n.id === e ? n : t;
                  }, null)
                );
              }),
              Object.defineProperty(t.prototype, "selectedBet", {
                get: function () {
                  return void 0 !== this._freeRoundBet
                    ? this._freeRoundBet
                    : this._selectedBet;
                },
                set: function (e) {
                  this._selectedBet = e;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "defaultBet", {
                get: function () {
                  return this._defaultBetAmount;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.updateDefaultBet = function (e) {
                this._defaultBetAmount = e;
              }),
              (t.prototype.getBetFromAllowedBetsList = function (e) {
                return this._validBets[e];
              }),
              (t.prototype.getAllowedBets = function () {
                return this._validBets;
              }),
              Object.defineProperty(t.prototype, "gameSessionId", {
                get: function () {
                  return void 0 !== this._activeGameRound &&
                    !0 !== this._activeGameRound.gameOver
                    ? this._activeGameRound.gameSessionId
                    : void 0 !== this.currentFreeRoundProgram &&
                      null != this.currentFreeRoundProgram.gamesessionid
                    ? this.currentFreeRoundProgram.gamesessionid
                    : this.newGameSession.gamesessionid;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "gameId", {
                get: function () {
                  return this._initGameData.gameid;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "playerId", {
                get: function () {
                  return this._playerId;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "playerSessionId", {
                get: function () {
                  return this._playerSessionId;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "initGameData", {
                get: function () {
                  return this._initGameData;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "gameServiceConfig", {
                get: function () {
                  return !0 === this._initGameData.playforfree
                    ? this.freePlayServiceConfig.gameserviceconfig
                    : this.realPlayServiceConfig.gameserviceconfig;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "trackingServiceConfig", {
                get: function () {
                  return !0 === this._initGameData.playforfree
                    ? this.freePlayServiceConfig.trackingserviceconfig
                    : this.realPlayServiceConfig.trackingserviceconfig;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.updateValidBetsList = function (e) {
                this._validBets = e;
              }),
              Object.defineProperty(t.prototype, "activeAccount", {
                get: function () {
                  return null == this._playerAccounts
                    ? null
                    : void 0 !== this._freeRoundAccount
                    ? this._freeRoundAccount
                    : null != this._playerAccounts
                    ? this._playerAccounts[this._activeAccountId]
                    : void 0;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.updateModelFromSetupData = function (e) {
                (this.freePlayServiceConfig = e.free),
                  (this.realPlayServiceConfig = e.real),
                  this.updateMessageQueue(e.clientData);
              }),
              (t.prototype.updateModelWithHistoryData = function (e) {
                (this.playerHistory = e.historyentries),
                  this.updateMessageQueue(e.clientData);
              }),
              (t.prototype.updateModelWithJackpotData = function (e) {
                (this.jackpots = JSON.parse(JSON.stringify(e.jackpots))),
                  this.updateMessageQueue(e.clientData),
                  this.onModelUpdatedFromJackpotResponse.dispatch(e);
              }),
              (t.prototype.updateModelFromGetConfigResponse = function (e) {
                var t = e.games[this.playerCurrency];
                if (
                  (this.updateModelFromGameConfig(t),
                  void 0 === this._winLevels)
                )
                  throw "CommonSlotModel: this._winLevels must be set by the call to CommonSlotModel.updateModelFromGameConfig.";
                this._validBets = this.filterBetsByMaxLimit(
                  this._validBets,
                  this.initGameData.maxbetlimit
                );
                var n = this.getSelectedBetFromGameConfig(t);
                (this._defaultBetAmount = n),
                  (this.selectedBet = tk.d.finance.createBetFromPrimitives(
                    n,
                    this.playerCurrency
                  )),
                  (this.featureBuyConfig =
                    e.games[this.playerCurrency].featurebuy),
                  this.updateMessageQueue(e.clientData);
              }),
              (t.prototype.updateModelFromFreeGameSessionResponse = function (
                e
              ) {
                (this._playerId = e.playerid),
                  (this._playerSessionId = e.playersessionid),
                  (this.newGameSession = e.newsession),
                  (this._playerAccounts = {}),
                  ((this._playerAccounts[e.freeplayaccount.id] =
                    e.freeplayaccount).currencyiso =
                    e.freeplayaccount.currencyiso ||
                    this._initGameData.freeaccountsetup.currencyiso ||
                    this._initGameData.currencyiso),
                  (this._activeAccountId = e.freeplayaccount.id),
                  (this.realPlay = !1),
                  this.setClientBalance(this.activeAccount.balance),
                  (this._balanceAtRoundStart = this.serverBalance),
                  this.updateMessageQueue(e.clientData);
              }),
              (t.prototype.updateModelFromRealGameSessionResponse = function (
                e
              ) {
                (this._playerId = e.playerid),
                  (this._playerSessionId = e.playersessionid),
                  (this.newGameSession = e.newsession),
                  (this._playerAccounts = this.buildPlayerAccountMap(
                    e.playeraccounts
                  )),
                  (this._activeAccountId = this.getFirstRealAccountId(
                    e.playeraccounts
                  )),
                  (this.realPlay = !0);
                var t = e.newsession.gamesessionid;
                if (
                  ((this._activeFreeRoundPrograms[t] = []),
                  null != e.freeroundprograms)
                )
                  for (var n = 0; n < e.freeroundprograms.length; n++) {
                    var o = e.freeroundprograms[n];
                    void 0 !== o.gamesessionid
                      ? (void 0 ===
                          this._activeFreeRoundPrograms[o.gamesessionid] &&
                          (this._activeFreeRoundPrograms[o.gamesessionid] = []),
                        this._activeFreeRoundPrograms[o.gamesessionid].push(o))
                      : this._activeFreeRoundPrograms[t].push(o);
                  }
                this.updateTotalBalance(e.totalbalance),
                  this.setClientBalance(this.totalBalance),
                  (this._balanceAtRoundStart = this.serverBalance),
                  null != e.activesessions &&
                    e.activesessions.length > 0 &&
                    (this._restoredGameSession = e.activesessions[0]),
                  this.updateMessageQueue(e.clientData);
              }),
              (t.prototype.isFreeRound = function (e) {
                if (e.isFreeRound || null != e.freeRoundProgram)
                  return (e.isFreeRound = !0), !0;
                var t = e.accountId;
                for (var n in this._activeFreeRoundPrograms) {
                  var o = this._activeFreeRoundPrograms[n];
                  if (null != o && o.length > 0)
                    for (var i = 0; i < o.length; i++) {
                      var a = o[i];
                      if (a.playerfreeroundreference === t)
                        return (
                          (e.isFreeRound = !0), (e.freeRoundProgram = a), !0
                        );
                    }
                }
                return (e.isFreeRound = !1), (e.freeRoundProgram = null), !1;
              }),
              (t.prototype.updateModelFromRestoreStateData = function (e) {
                var t = this;
                this.initGameData.developmentmode,
                  this._restoredGameSession.gamesessionid !== e.gamesessionid &&
                    alert(
                      "CommonSlotModel.updateModelFromRestoreStateData: the game sessions must match! Please reload the game and try again."
                    );
                var n = e.restorestate;
                if (null != n) {
                  (n.gamesessionid = this._restoredGameSession.gamesessionid),
                    (this._restoredGameSession.accountid =
                      n.accountid || this._restoredGameSession.accountid),
                    (this._restoredGameSession.accountingmode =
                      n.accountingmode ||
                      this._restoredGameSession.accountingmode),
                    (this._restoredGameSession.gameid = this.gameId);
                  var o = n.serviceresponses[0],
                    i = n.servicerequests[0];
                  (this._activeFreeRoundPrograms[
                    this._restoredGameSession.gamesessionid
                  ] = o.freeroundprograms),
                    (this.symbolsBeforeActionInitial =
                      i.symbolsbeforeactioninitial),
                    (this.symbolsBeforeActionFinal =
                      i.symbolsbeforeactionfinal);
                  var a = this.getAnteBetFromRestoreStateData(n);
                  (this._activeGameRound = this.createActiveGameRound(
                    a,
                    n.gamesessionid,
                    n.gameroundid
                  )),
                    (this._activeGameRound.accountId =
                      this._restoredGameSession.accountid),
                    (this._activeGameRound.canRecoverFromError = !1),
                    this.isFreeRound(this._activeGameRound) ||
                      (this._selectedBet = a);
                  var r = n.serviceresponses;
                  (this._activeGameRound.responses = r),
                    (this._restoredGameSession.requestid =
                      r[r.length - 1].requestid);
                  var s = this.getPlayerMessageQueue(!0);
                  r.forEach(function (e) {
                    t.updateMessageQueue(e.clientData);
                  }),
                    this.updateMessageQueue({ messages: s }),
                    this.updateActiveGameRoundFromRestoreStateData(
                      this._activeGameRound,
                      n
                    ),
                    (this._balanceAtRoundStart = this.serverBalance);
                } else
                  this._initGameData.developmentmode,
                    (this._restoredGameSession = null);
              }),
              (t.prototype.getAnteBetFromRestoreStateData = function (e) {
                throw "CommonSlotModel.getAnteBetFromRestoreStateData is abstract and must be overriden in subclass.";
              }),
              (t.prototype.updateModelFromHistoryData = function (e) {
                (this.playerHistory = e.historyentries),
                  this.updateMessageQueue(e.clientData);
              }),
              (t.prototype.prepareSlotModelForNewGameRound = function () {
                null == this._activeGameRound ||
                  this._activeGameRound.gameOver ||
                  alert(
                    "CommonSlotModel.prepareSlotModelForNewGameRound: Cannot prepare the slot for a new game round before the old one has been properly finished."
                  );
                var e = this.selectedBet.value,
                  t = {
                    id: "anteBet",
                    value: {
                      amount: e.amount,
                      currencyiso: e.currencyiso,
                      classname: e.classname,
                    },
                    classname: this.selectedBet.classname,
                  };
                (this._activeGameRound = this.createActiveGameRound(
                  t,
                  this.gameSessionId
                )),
                  (this._activeGameRound.canRecoverFromError = !0),
                  (null != this.symbolsBeforeActionFinal &&
                    null != this.symbolsBeforeActionInitial) ||
                    alert(
                      "CommonSlotModel.prepareSlotModelForNewGameRound: The properties SlotModel.symbolsBeforeActionFinal and SlotModel.symbolsBeforeActionInitial must be set before calling SlotModel.prepareSlotModelForNewGameRound."
                    );
              }),
              (t.prototype.clearActiveGameRound = function () {
                (this.featureBuyCost = void 0),
                  (this._activeGameRound = void 0);
              }),
              (t.prototype.createActiveGameRound = function (e, t, n) {
                var o = null != this.currentFreeRoundProgram,
                  i = e,
                  a = this._activeAccountId;
                if (o) {
                  a = this.currentFreeRoundProgram.playerfreeroundreference;
                  var r = this.currentFreeRoundProgram.betconfiguration;
                  i = tk.d.finance.createBetFromPrimitives(
                    r.amount,
                    r.currencyiso || r.currency
                  );
                }
                return {
                  anteBet: i,
                  gameOver: !1,
                  currentState: void 0,
                  previousState: void 0,
                  currentOutcome: void 0,
                  previousOutcome: void 0,
                  gameSessionId: t,
                  gameRoundId: n,
                  executedAction: void 0,
                  nextAction: void 0,
                  replayId: void 0,
                  metaTags: [],
                  totalWinAmountForGameRound: 0,
                  totalBetMultiplierForGameRound: 0,
                  accountId: a,
                  isFreeRound: o,
                  freeRoundProgram: this.currentFreeRoundProgram,
                  responses: [],
                  canRecoverFromError: !0,
                };
              }),
              (t.prototype.updateSlotModelFromNewGameRoundResponse = function (
                e,
                t
              ) {
                if (
                  ((this._activeGameRound.gameOver = e.gameover),
                  (this._activeGameRound.gameRoundId = e.gameroundid),
                  (this._activeGameRound.replayId = e.replayid),
                  (this._activeGameRound.previousState = void 0),
                  (this._activeGameRound.previousOutcome = void 0),
                  (this._activeGameRound.canRecoverFromError = !1),
                  this.updateRequestIdFromResponse(e),
                  this.sessionInfo.roundsPlayed++,
                  this.updateBalanceAtRoundStart(),
                  (this.featureBuyCost = void 0),
                  null != e.updatedaccounts &&
                    this.updatePlayerAccounts(e.updatedaccounts),
                  this.updateBalanceAfterRoundStart(),
                  null != e.totalbalance &&
                    this.updateTotalBalance(e.totalbalance),
                  void 0 !== e.metagametags)
                ) {
                  null == this._activeGameRound.metaTags &&
                    (this._activeGameRound.metaTags = []);
                  for (var n = 0; n < e.metagametags.length; n++)
                    this._activeGameRound.metaTags.push(e.metagametags[n]);
                  this.latestMetaTags = e.metagametags;
                } else this.latestMetaTags = void 0;
                this.isFreeRound(this.gameRound),
                  (this._activeGameRound.responses =
                    this._activeGameRound.responses || []).push(e);
                var o = (this._activeGameRound.requests =
                  this._activeGameRound.requests || []);
                t ? o.push(t) : o.push("not supplied"),
                  this.updateMessageQueue(e.clientData),
                  this.updateGameSpecificModelFromNewGameRoundResponse(e),
                  this.updateSessionInfoFromNewGameRoundResponse(e, e.gameover),
                  void 0 === this.currentFreeRoundProgram &&
                    (this.totalBetAmountForSession += this.placedBetAmount),
                  !0 === e.gameover &&
                    ((this.totalWinAmountForSession +=
                      this.gameRound.totalWinAmountForGameRound),
                    this.updateFreeRoundProgramsIfApplicable(
                      e.freeroundprograms
                    ),
                    (this._restoredGameSession = void 0),
                    this.updateBalanceAtRoundEnd(this.serverBalance)),
                  this.onModelUpdatedFromGameResponse.dispatch(e);
              }),
              (t.prototype.updateGameSpecificModelFromNewGameRoundResponse =
                function (e) {}),
              (t.prototype.updateSlotModelFromContinueGameRoundResponse =
                function (e, t) {
                  if (
                    ((this._activeGameRound.gameOver = e.gameover),
                    (this._activeGameRound.replayId = e.replayid),
                    (this._activeGameRound.previousState =
                      this._activeGameRound.currentState),
                    (this._activeGameRound.previousOutcome =
                      this._activeGameRound.currentOutcome),
                    this.updateRequestIdFromResponse(e),
                    null != e.updatedaccounts &&
                      this.updatePlayerAccounts(e.updatedaccounts),
                    null != e.totalbalance &&
                      this.updateTotalBalance(e.totalbalance),
                    void 0 !== e.metagametags)
                  ) {
                    null == this._activeGameRound.metaTags &&
                      (this._activeGameRound.metaTags = []);
                    for (var n = 0; n < e.metagametags.length; n++)
                      this._activeGameRound.metaTags.push(e.metagametags[n]);
                    this.latestMetaTags = e.metagametags;
                  } else this.latestMetaTags = void 0;
                  (this._activeGameRound.responses =
                    this._activeGameRound.responses || []).push(e);
                  var o = (this._activeGameRound.requests =
                    this._activeGameRound.requests || []);
                  t ? o.push(t) : o.push("not supplied"),
                    this.updateMessageQueue(e.clientData),
                    this.updateGameSpecificModelFromContinueGameRoundResponse(
                      e
                    ),
                    this.updateSessionInfoFromContinueGameRoundResponse(
                      e,
                      e.gameover
                    ),
                    !0 === e.gameover &&
                      ((this.totalWinAmountForSession +=
                        this.gameRound.totalWinAmountForGameRound),
                      this.updateFreeRoundProgramsIfApplicable(
                        e.freeroundprograms
                      ),
                      (this._restoredGameSession = void 0),
                      this.updateBalanceAtRoundEnd(this.serverBalance)),
                    this.onModelUpdatedFromGameResponse.dispatch(e);
                }),
              (t.prototype.updateSessionInfoFromContinueGameRoundResponse =
                function (e, t) {}),
              (t.prototype.updateSessionInfoFromNewGameRoundResponse =
                function (e, t) {}),
              (t.prototype.updateGameSpecificModelFromContinueGameRoundResponse =
                function (e) {}),
              (t.prototype.isTopSpinProgram = function (e) {
                return !(
                  !(e = e || this.currentFreeRoundProgram) ||
                  "TOP_SPINS" !== e.freeRoundsBonusType
                );
              }),
              (t.prototype.updateFreeRoundProgramsIfApplicable = function (e) {
                if (
                  ((this._activeFreeRoundPrograms = {}),
                  (this._activeFreeRoundPrograms[this.gameSessionId] = []),
                  null != e)
                ) {
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    this.updateFreeRoundProgramIfApplicable_v2(n);
                  }
                  for (t = 0; t < e.length; t++)
                    if (void 0 !== this.currentFreeRoundProgram) {
                      var o = e[t],
                        i = this.currentFreeRoundProgram;
                      if (
                        o.playerfreeroundreference ===
                        i.playerfreeroundreference
                      ) {
                        (this.currentFreeRoundProgram = o),
                          (this.currentFreeRoundProgram.requestid =
                            i.requestid),
                          (this._freeRoundAccount.balance = o.totalwin.amount);
                        break;
                      }
                    }
                }
              }),
              (t.prototype.updateFreeRoundProgramIfApplicable_v2 = function (
                e
              ) {
                e.freeroundsremaining > 0 &&
                  null != e.gamesessionid &&
                  (this._activeFreeRoundPrograms[e.gamesessionid] =
                    this._activeFreeRoundPrograms[e.gamesessionid] || []);
              }),
              (t.prototype.getBestWinsInFreeRoundProgram = function () {
                if (null == this.currentFreeRoundProgram.numberOfTopSpins)
                  throw new Error(
                    "Cannot ask for the best wins in a non-TOP_MAX_WINS free rounds program."
                  );
                return (
                  this.currentFreeRoundProgram.topSpinsGameRounds || []
                ).concat();
              }),
              (t.prototype.updatePlayerAccounts = function (e) {
                for (var t = this.playerCurrency, n = 0; n < e.length; n++)
                  (this._playerAccounts[e[n].id] = e[n]),
                    (this._playerAccounts[e[n].id].currencyiso =
                      e[n].currencyiso || t);
              }),
              Object.defineProperty(t.prototype, "currentOutcome", {
                get: function () {
                  return null == this._activeGameRound
                    ? null
                    : this._activeGameRound.currentOutcome;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "previousOutcome", {
                get: function () {
                  return null == this._activeGameRound
                    ? null
                    : this._activeGameRound.previousOutcome;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "currentState", {
                get: function () {
                  return null == this._activeGameRound
                    ? null
                    : this._activeGameRound.currentState;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "previousState", {
                get: function () {
                  return null == this._activeGameRound
                    ? null
                    : this._activeGameRound.previousState;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "selectedBetAmount", {
                get: function () {
                  return this.selectedBet.value.amount;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.changeSelectedBetAmount = function (e) {
                this.selectedBet.value.amount = e;
              }),
              Object.defineProperty(t.prototype, "placedBet", {
                get: function () {
                  return null == this._activeGameRound
                    ? this.selectedBet
                    : this._activeGameRound.anteBet;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "placedBetAmount", {
                get: function () {
                  return null == this._activeGameRound ||
                    this._activeGameRound.gameOver
                    ? this.selectedBet.value.amount
                    : this._activeGameRound.anteBet.value.amount;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "placedBetCurrencyString", {
                get: function () {
                  return e.constants.CommonCurrencies.getCurrencyString(
                    this.placedBet.value.currencyiso
                  );
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.deductFromClientBalance = function (e) {
                return (
                  void 0 !== this.currentFreeRoundProgram ||
                    (void 0 !== this.featureBuyCost
                      ? ((e = this.featureBuyCost),
                        (this.featureBuyCost = void 0))
                      : (e = e || this.placedBetAmount),
                    (this._clientBalance = n(this._clientBalance - e))),
                  this._clientBalance
                );
              }),
              (t.prototype.canCoverBet = function (e) {
                return !0;
              }),
              (t.prototype.isClientBalanceLessThanCurrentBet = function () {
                return this.selectedBetAmount > this.clientBalance;
              }),
              (t.prototype.isServerBalanceLessThanCurrentBet = function () {
                return this.selectedBetAmount > this.serverBalance;
              }),
              (t.prototype.setClientBalance = function (e) {
                var t = this._clientBalance;
                return (this._clientBalance = e), t;
              }),
              Object.defineProperty(t.prototype, "clientBalance", {
                get: function () {
                  return null != this._freeRoundAccount
                    ? this._freeRoundAccount.balance
                    : this._clientBalance;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "serverBalance", {
                get: function () {
                  return null != this._freeRoundAccount
                    ? this._freeRoundAccount.balance
                    : this._totalBalance
                    ? this._totalBalance.amount
                    : this.activeAccount
                    ? this.activeAccount.balance
                    : 0;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "totalBalance", {
                get: function () {
                  return this.serverBalance;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "playerCurrency", {
                get: function () {
                  return null != this.activeAccount
                    ? this.activeAccount.currencyiso
                    : this._initGameData.playforfree &&
                      null != this._initGameData.freeaccountsetup
                    ? this._initGameData.freeaccountsetup.currencyiso
                    : this._initGameData.currencyiso;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "playerCurrencyString", {
                get: function () {
                  var t = e.constants.CommonCurrencies.getCurrencyString(
                    this.playerCurrency
                  );
                  return (
                    this.initGameData.currencyconfig &&
                      null != this.initGameData.currencyconfig.currencysign &&
                      (t = this.initGameData.currencyconfig.currencysign),
                    t
                  );
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.getOperatorData = function (e) {
                return (
                  null == this._operatorData && (this._operatorData = {}),
                  this._operatorData[e]
                );
              }),
              (t.prototype.addOperatorData = function (e, t) {
                null == this._operatorData && (this._operatorData = {}),
                  null == this._operatorData[e] && (this._operatorData[e] = []),
                  this._operatorData[e].push(t);
              }),
              Object.defineProperty(t.prototype, "gameRoundId", {
                get: function () {
                  return null != this._activeGameRound &&
                    !1 === this._activeGameRound.gameOver
                    ? this._activeGameRound.gameRoundId
                    : null;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.hasRestoreState = function () {
                return null != this._restoredGameSession;
              }),
              (t.prototype.getRestoreStateGameSession = function () {
                return this._restoredGameSession.gamesessionid;
              }),
              Object.defineProperty(t.prototype, "gameOver", {
                get: function () {
                  return (
                    null == this._activeGameRound ||
                    this._activeGameRound.gameOver
                  );
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.getNextActiveFreeRoundProgram = function (e) {
                void 0 === e && (e = !0),
                  null == this._activeFreeRoundPrograms[this.gameSessionId] &&
                    (this._activeFreeRoundPrograms[this.gameSessionId] = []);
                var t = -1,
                  n = null;
                for (var o in this._activeFreeRoundPrograms) {
                  if ((r = this._activeFreeRoundPrograms[o]).length > 0)
                    for (var i = 0; i < r.length; i++) {
                      var a = r[i];
                      if (a.freeroundsremaining < a.numberoffreerounds) {
                        (n = o), (t = i);
                        break;
                      }
                    }
                }
                if (-1 != t)
                  return e
                    ? this._activeFreeRoundPrograms[n].splice(t, 1)[0]
                    : this._activeFreeRoundPrograms[n][t];
                for (var o in this._activeFreeRoundPrograms) {
                  var r;
                  if ((r = this._activeFreeRoundPrograms[o]).length > 0)
                    return e
                      ? this._activeFreeRoundPrograms[o].pop()
                      : this._activeFreeRoundPrograms[o][r.length - 1];
                }
              }),
              (t.prototype.activateFreeRoundProgram = function (e) {
                (this.currentFreeRoundProgram = e),
                  (this._freeRoundAccount = {
                    balance: e.totalwin.amount,
                    classname: "tk.d.finance.Account",
                    currencyiso:
                      e.betconfiguration.currencyiso ||
                      e.betconfiguration.currency,
                    id: e.playerfreeroundreference,
                    type: "FREE_ROUND",
                    locked: !1,
                    priority: 0,
                  }),
                  (this._freeRoundBet = {
                    classname: "tk.d.finance.Bet",
                    value: {
                      classname: "tk.d.finance.Money",
                      currencyiso:
                        e.betconfiguration.currencyiso ||
                        e.betconfiguration.currency,
                      amount: e.betconfiguration.amount,
                    },
                  });
              }),
              (t.prototype.closeActiveFreeRoundProgram = function () {
                var e =
                  this._activeFreeRoundPrograms[
                    this.currentFreeRoundProgram.gamesessionid
                  ];
                e.splice(e.indexOf(this.currentFreeRoundProgram), 1),
                  (this._freeRoundAccount = void 0),
                  (this.currentFreeRoundProgram = void 0),
                  (this._freeRoundBet = void 0),
                  (this.selectedBet = tk.d.finance.createBetFromPrimitives(
                    this._defaultBetAmount,
                    this.playerCurrency
                  ));
              }),
              (t.prototype.wasRoundDiscarded = function (e) {
                if (
                  (null != this._activeGameRound &&
                    (e = e || this._activeGameRound.gameRoundId),
                  this.isTopSpinProgram())
                ) {
                  if (this.currentFreeRoundProgram.topSpinsGameRounds) {
                    var t = parseInt(e);
                    return this.currentFreeRoundProgram.topSpinsGameRounds.reduce(
                      function (n, o) {
                        return "number" == typeof o.providerGameRoundId
                          ? o.providerGameRoundId != t && n
                          : o.providerGameRoundId !== e && n;
                      },
                      !0
                    );
                  }
                  return !1;
                }
                return !1;
              }),
              (t.prototype.buildPlayerAccountMap = function (e) {
                for (var t = {}, n = 0; n < e.length; n++) {
                  var o = e[n];
                  t[o.id] = o;
                }
                return t;
              }),
              Object.defineProperty(t.prototype, "currencyIso", {
                get: function () {
                  return this.activeAccount.currencyiso;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "accountId", {
                get: function () {
                  return this.activeAccount.id;
                },
                set: function (e) {
                  this._activeAccountId = e;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.updateAccount = function (e, t) {
                this._playerAccounts[e].balance = t;
              }),
              (t.prototype.getAccountBalance = function (e) {
                var t = this._playerAccounts[e];
                return t ? t.balance : void 0;
              }),
              Object.defineProperty(t.prototype, "gameRound", {
                get: function () {
                  return this._activeGameRound;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "accountType", {
                get: function () {
                  return this.activeAccount.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "accountTypes", {
                get: function () {
                  return !0 === this.initGameData.playforfree
                    ? ["FREE"]
                    : ["REAL"];
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "operatorId", {
                get: function () {
                  return this._initGameData.operatorid;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "clientType", {
                get: function () {
                  return this._clientType;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "distributionChannel", {
                get: function () {
                  return this._distributionChannel;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "clientVersion", {
                get: function () {
                  return this._clientVersion;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "freeRoundId", {
                get: function () {
                  return null != this.currentFreeRoundProgram
                    ? this.currentFreeRoundProgram.playerfreeroundreference
                    : null;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "nextActionForGameRound", {
                get: function () {
                  return null == this._activeGameRound
                    ? this._defaultGameActivity
                    : void 0 !== this._activeGameRound.gameRoundId
                    ? 1 == this._activeGameRound.gameOver
                      ? this._defaultGameActivity
                      : this._activeGameRound.nextAction
                    : this._defaultGameActivity;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.isPlayingGameRound = function () {
                return (
                  null != this._activeGameRound &&
                  !0 !== this._activeGameRound.gameOver &&
                  void 0 !== this._activeGameRound.gameRoundId
                );
              }),
              (t.prototype.getWinLevelId = function (e, t) {
                return (
                  void 0 === t && (t = this._winLevels),
                  tk.d.config.getWinLevelId(e, t)
                );
              }),
              (t.prototype.updateActiveGameRoundFromRestoreStateData =
                function (e, t) {
                  throw new Error(
                    "CommonSlotModel.updateActiveGameRoundFromRestoreStateData is abstract. Override in subclass."
                  );
                }),
              (t.prototype.getPaymentForSymbol = function (e, t) {
                return this.gameConfig.paylinePaytable[e].values["" + t];
              }),
              (t.prototype.updateModelFromGameConfig = function (e) {
                (this.gameConfig = e),
                  (this._validBets = this.gameConfig.betconfig.allowedbets),
                  this.setupWinLevels(e);
              }),
              (t.prototype.setupWinLevels = function (e) {
                if (null != e.winLevels) {
                  var t = e.winLevels.levels;
                  if (null != t) {
                    for (var n = [], o = 0; o < t.length; o++) {
                      var i = t[o];
                      if (null == i.minMultiplier) {
                        var a = i;
                        (i.maxMultiplier = a.max),
                          (i.minMultiplier = a.min),
                          (i.id = 0 == o ? 0 : Math.pow(2, o - 1)),
                          (i.name = a.name),
                          delete a.min,
                          delete a.max;
                      }
                      n.push(i);
                    }
                    e.winLevels = n;
                  }
                  this._winLevels = e.winLevels;
                } else
                  this._winLevels = [
                    {
                      minMultiplier: 0,
                      maxMultiplier: 1,
                      id: tk.d.config.WinLevelIds.MiniWin,
                    },
                    {
                      minMultiplier: 1,
                      maxMultiplier: 5,
                      id: tk.d.config.WinLevelIds.SmallWin,
                    },
                    {
                      minMultiplier: 5,
                      maxMultiplier: 15,
                      id: tk.d.config.WinLevelIds.MediumWin,
                    },
                    {
                      minMultiplier: 15,
                      maxMultiplier: 50,
                      id: tk.d.config.WinLevelIds.BigWin,
                    },
                    {
                      minMultiplier: 50,
                      maxMultiplier: 100,
                      id: tk.d.config.WinLevelIds.MegaWin,
                    },
                    {
                      minMultiplier: 100,
                      maxMultiplier: -1,
                      id: tk.d.config.WinLevelIds.UltraWin,
                    },
                  ];
              }),
              (t.prototype.getSelectedBetFromGameConfig = function (e) {
                return this.gameConfig.betconfig.defaultbet;
              }),
              (t.prototype.filterBetsByMaxLimit = function (e, t) {
                return null == t
                  ? e.concat()
                  : e.filter(function (e) {
                      return !(e > t);
                    });
              }),
              (t.prototype.updateMessageQueue = function (e) {
                var t = this;
                e &&
                  e.messages &&
                  (e.messages.forEach(function (e) {
                    var n = t._playerMessageQueue.push(e);
                    e.order = n;
                  }),
                  this.onPlayerMessagesQueueChanged.dispatch(
                    this._playerMessageQueue.length
                  ));
              }),
              (t.prototype.updateTotalBalance = function (e) {
                this._totalBalance = e;
              }),
              (t.prototype.getRealMoneyBalance = function (e) {
                void 0 === e && (e = null);
                var t = 0;
                for (var n in ((e = e || this.playerCurrency),
                this._playerAccounts)) {
                  var o = this._playerAccounts[n];
                  o.currencyiso === e &&
                    "REAL" === o.type &&
                    (t += o.balance || 0);
                }
                return t;
              }),
              (t.prototype.getBonusMoneyBalance = function (e) {
                void 0 === e && (e = null);
                var t = 0;
                for (var n in ((e = e || this.playerCurrency),
                this._playerAccounts)) {
                  var o = this._playerAccounts[n];
                  o.currencyiso === e &&
                    "BONUS" === o.type &&
                    (t += o.balance || 0);
                }
                return t;
              }),
              (t.prototype.getExtraData = function (t) {
                var n,
                  o = this._extraData.any,
                  i = this._extraData[t];
                return (
                  (null == o && null == i) ||
                    (n = e.utils.combineObject(o || {}, i || {})),
                  (this._extraData.any = null),
                  (this._extraData[t] = null),
                  n
                );
              }),
              (t.prototype.setExtraData = function (t, n, o) {
                if ((void 0 === n && (n = !0), n)) {
                  var i = this._extraData[o || "any"] || {};
                  t = e.utils.combineObject(i, t);
                }
                this._extraData[o || "any"] = t;
              }),
              (t.prototype.getFirstRealAccountId = function (e) {
                for (var t = 0; t < e.length; t++)
                  if ("REAL" === e[t].type) return e[t].id;
                return e[0].id;
              }),
              (t.prototype.willClosingTheGameGenerateRestoreState =
                function () {
                  return (
                    null != this._activeGameRound &&
                    !1 === this._activeGameRound.gameOver
                  );
                }),
              (t.prototype.getSumOfAllAccountBalances = function (e) {
                e =
                  e ||
                  function (e, t, n, o) {
                    return e + t;
                  };
                for (var t in this._playerAccounts)
                  if (this._playerAccounts.hasOwnProperty(t)) {
                    var n = this._playerAccounts[t];
                    e(0, n.balance, n.currencyiso, n.type);
                  }
                return 0;
              }),
              (t.prototype.updateBalanceAtRoundStart = function () {
                this._balanceAtRoundStart = this.serverBalance;
              }),
              (t.prototype.getBalanceAtRoundStart = function () {
                return this._balanceAtRoundStart;
              }),
              (t.prototype.getBalanceAfterRoundStart = function () {
                return this._balanceAfterRoundStart;
              }),
              (t.prototype.updateBalanceAtRoundEnd = function (e) {
                this._balanceAtRoundEnd = e;
              }),
              (t.prototype.getBalanceAtRoundEnd = function () {
                return this._balanceAtRoundEnd;
              }),
              (t.prototype.canRecoverFromError = function () {
                return (
                  null === this._activeGameRound ||
                  this._activeGameRound.canRecoverFromError
                );
              }),
              (t.prototype.updateBalanceAfterRoundStart = function () {
                void 0 !== this.currentFreeRoundProgram
                  ? (this._deductedBet = 0)
                  : (this._deductedBet = this.placedBetAmount),
                  (this._balanceAfterRoundStart = n(
                    this._balanceAtRoundStart - this._deductedBet
                  ));
              }),
              (t.prototype.expectedBalanceAfterRound = function (e) {
                return (
                  (e =
                    null != e
                      ? e
                      : this._activeGameRound.totalWinAmountForGameRound),
                  n(this._balanceAfterRoundStart + e)
                );
              }),
              (t.prototype.getNextGameServiceRequestId = function () {
                return !0 !== this.initGameData.idempotency
                  ? void 0
                  : this.newGameSession.requestid;
              }),
              (t.prototype.updateRequestIdFromResponse = function (e) {
                if (this.initGameData.idempotency) {
                  if (
                    this.newGameSession.requestid &&
                    this.newGameSession.requestid === e.requestid
                  )
                    throw new Error(
                      "The idempotency request ID is already the active ID. This indicates an illegal server call has been made."
                    );
                  this.newGameSession.requestid = e.requestid;
                }
              }),
              (t.prototype.isIdempotencyEnabled = function () {
                return null != this.getNextGameServiceRequestId();
              }),
              Object.defineProperty(t.prototype, "gameInstanceId", {
                get: function () {
                  return this.initGameData.gameinstanceid;
                },
                enumerable: !0,
                configurable: !0,
              }),
              t
            );
          })();
        t.CommonSlotModel = o;
      })(t.model || (t.model = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = (function () {
          function t() {
            this.onVisibilityChanged = new e.utils.Signal1();
            var t = this.getHiddenProp();
            if (t) {
              var n = t.replace(/[H|h]idden/, "") + "visibilitychange";
              document.addEventListener(
                n,
                this.handleTabVisibilityChanged.bind(this),
                !1
              );
            }
          }
          return (
            (t.prototype.handleTabVisibilityChanged = function () {
              this.onVisibilityChanged.dispatch(this.isHidden());
            }),
            (t.prototype.isHidden = function () {
              var e = this.getHiddenProp();
              return !!e && document[e];
            }),
            (t.prototype.getHiddenProp = function () {
              var e = ["webkit", "moz", "ms", "o"];
              if ("hidden" in document) return "hidden";
              for (var t = 0; t < e.length; t++)
                if (e[t] + "Hidden" in document) return e[t] + "Hidden";
              return null;
            }),
            t
          );
        })();
        t.BrowserTabVisibilityManager = n;
      })(t.utils || (t.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = (function () {
          function t(t, n, o, i) {
            (this._requestMaker = n),
              (this._model = t),
              (this._slowConnectionTracker = o),
              (this._jsBridge = i),
              (this.onStartupComplete = new e.utils.Signal0()),
              (this.onStartupFailed = new e.utils.Signal1()),
              (this.onGameConfigured = new e.utils.Signal0());
          }
          return (
            (t.prototype.performStartup = function (e) {
              var t = this;
              this._model.updateModelFromSetupData(e);
              var n = this;
              setTimeout(function () {
                t._slowConnectionTracker.requestSent(),
                  n._model.initGameData.playforfree
                    ? n._requestMaker.sendGetFreeSessionServerRequest(
                        function (e) {
                          return n.getFreeSessionComplete(e);
                        },
                        function (e) {
                          return n.getSessionFailed(e);
                        }
                      )
                    : n._requestMaker.sendGetRealSessionServerRequest(
                        function (e) {
                          return n.getRealSessionComplete(e);
                        },
                        function (e) {
                          return n.getSessionFailed(e);
                        }
                      );
              }, 100);
            }),
            (t.prototype.getFreeSessionComplete = function (e) {
              var t = this;
              this._slowConnectionTracker.responseReceived(),
                this._model.updateModelFromFreeGameSessionResponse(e),
                this._slowConnectionTracker.requestSent(),
                this._requestMaker.sendGetConfigServerRequest(
                  function (e) {
                    return t.getConfigComplete(e);
                  },
                  function (e) {
                    return t.getConfigFailed(e);
                  }
                );
            }),
            (t.prototype.getRealSessionComplete = function (e) {
              var t = this;
              this._slowConnectionTracker.responseReceived(),
                this._model.updateModelFromRealGameSessionResponse(e),
                this._slowConnectionTracker.requestSent(),
                this._requestMaker.sendGetConfigServerRequest(
                  function (e) {
                    return t.getConfigComplete(e);
                  },
                  function (e) {
                    return t.getConfigFailed(e);
                  }
                );
            }),
            (t.prototype.getConfigComplete = function (e) {
              var t = this;
              this._slowConnectionTracker.responseReceived(),
                this._model.updateModelFromGetConfigResponse(e),
                0 != this._model.getAllowedBets().length
                  ? -1 !=
                    this._model
                      .getAllowedBets()
                      .indexOf(this._model.selectedBetAmount)
                    ? (this._jsBridge.gameConfigured({
                        configresponse: e,
                        initgamedata: this._model.initGameData,
                      }),
                      this.onGameConfigured.dispatch(),
                      this._model.hasRestoreState()
                        ? (this._slowConnectionTracker.requestSent(),
                          this._requestMaker.sendGetStateServerRequest(
                            this._model.getRestoreStateGameSession(),
                            function (e) {
                              return t.getStateComplete(e);
                            },
                            function (e) {
                              return t.getConfigFailed(e);
                            }
                          ))
                        : this.onStartupComplete.dispatch())
                    : this.onStartupFailed.dispatch({
                        code: 0,
                        message: "The default bet amount must be a valid bet.",
                        callstack: null,
                      })
                  : this.onStartupFailed.dispatch({
                      code: 0,
                      message: "The valid bets array must not be empty.",
                      callstack: null,
                    });
            }),
            (t.prototype.getStateComplete = function (e) {
              this._slowConnectionTracker.responseReceived(),
                this._model.updateModelFromRestoreStateData(e),
                this.onStartupComplete.dispatch();
            }),
            (t.prototype.getStateFailed = function (e) {
              this._slowConnectionTracker.responseReceived(),
                this.onStartupFailed.dispatch(e);
            }),
            (t.prototype.getSetupFailed = function (e) {
              this._slowConnectionTracker.responseReceived(),
                this.onStartupFailed.dispatch(e);
            }),
            (t.prototype.getSessionFailed = function (e) {
              this._slowConnectionTracker.responseReceived(),
                this.onStartupFailed.dispatch(e);
            }),
            (t.prototype.getConfigFailed = function (e) {
              this._slowConnectionTracker.responseReceived(),
                this.onStartupFailed.dispatch(e);
            }),
            t
          );
        })();
        t.GameStartupHelper = n;
      })(t.utils || (t.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = (function () {
          function t(e, t) {
            (this._isPlaying = !1),
              (this._sendIfTouched = !1),
              (this._wasPoked = !1),
              (this._requestMaker = t),
              (this._initGameData = e);
          }
          return (
            (t.prototype.start = function () {
              var t = this;
              e.time.clearSafeInterval(this._intervalId),
                (this._intervalId = e.time.setSafeInterval(
                  this._initGameData.gameinstanceid,
                  function () {
                    return t.handleKeepAliveTimeOut();
                  },
                  1e3 * this._initGameData.keepaliveinterval
                ));
            }),
            (t.prototype.isPlaying = function (e) {
              (this._isPlaying = e), this.keepAlive();
            }),
            (t.prototype.keepAlive = function () {
              this._sendIfTouched
                ? ((this._sendIfTouched = !1),
                  this._requestMaker.sendKeepAlive(),
                  this.start())
                : (this._wasPoked = !0);
            }),
            (t.prototype.handleKeepAliveTimeOut = function () {
              this._wasPoked
                ? ((this._wasPoked = !1), this._requestMaker.sendKeepAlive())
                : ((this._sendIfTouched = !0),
                  e.time.clearSafeInterval(this._intervalId));
            }),
            t
          );
        })();
        t.KeepAliveManager = n;
      })(t.utils || (t.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        var t = (function () {
          function e(e, t) {
            void 0 === t && (t = 50),
              (this._enabled = e),
              (this._roundsPerCheck = t),
              (this._roundsStarted = 0);
          }
          return (
            (e.prototype.roundStarted = function () {
              this._roundsStarted++,
                !1 !== this._enabled &&
                  this._roundsStarted >= this._roundsPerCheck &&
                  ((this._roundsStarted = 0), (this.shouldShowDialog = !0));
            }),
            (e.prototype.reset = function () {
              (this._roundsStarted = 0), (this.shouldShowDialog = !1);
            }),
            e
          );
        })();
        e.LoginCheckManager = t;
      })(e.utils || (e.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = (function () {
          function t(t, n) {
            (this.shouldShowDialog = !1),
              (this.onShowRealityCheck = new e.utils.Signal0()),
              (this._model = n),
              (this._gameInstanceId = t),
              (this._clockStartTime = this._constructionTime =
                new Date().getTime());
          }
          return (
            Object.defineProperty(t.prototype, "showDialogData", {
              get: function () {
                var e =
                  this._config.totalwinatstart -
                  this._config.totalbetatstart +
                  (this._model.totalWinAmountForSession -
                    this._model.totalBetAmountForSession);
                return {
                  startTime: this._clockStartTime,
                  winAmount: e,
                  totalBetForSession: this._model.totalBetAmountForSession,
                  totalWinForSession: this._model.totalWinAmountForSession,
                  roundsPlayed: this._model.gameRoundsPlayedDuringSession,
                };
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "settings", {
              get: function () {
                return this._config;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.updateSettings = function (t) {
              void 0 === this._config
                ? ((t =
                    e.jsintegration.data.verifyEnableRealityCheckDataIntegrity(
                      t
                    )),
                  (this._config = t))
                : (-1 !== t.idleresetinterval &&
                    null != t.idleresetinterval &&
                    (this._config.idleresetinterval = t.idleresetinterval),
                  -1 !== t.regularcheckinterval &&
                    null != t.regularcheckinterval &&
                    (this._config.regularcheckinterval =
                      t.regularcheckinterval),
                  -1 !== t.totalbetatstart &&
                    null != t.totalbetatstart &&
                    (this._config.totalbetatstart = t.totalbetatstart),
                  -1 !== t.totalwinatstart &&
                    null != t.totalwinatstart &&
                    (this._config.totalwinatstart = t.totalwinatstart),
                  -1 !== t.playtime &&
                    null != t.playtime &&
                    (this._config.playtime = t.playtime),
                  t.gameroundsplayed > -1 &&
                    (this._config.gameroundsplayed = t.gameroundsplayed),
                  (this._config.externaldialog =
                    null != t.externaldialog
                      ? t.externaldialog
                      : this._config.externaldialog)),
                (this._config.enabled = t.enabled),
                (this._timeToReach = 1e3 * t.initialcheckinterval),
                (this._clockStartTime =
                  this._constructionTime - 1e3 * this._config.playtime),
                (this.shouldShowDialog = this.shouldShowDialog && t.enabled),
                this.stopTimers();
            }),
            (t.prototype.stopTimers = function () {
              e.time.clearSafeTimeout(this._checkTimer),
                (this._checkTimer = void 0),
                (this._nextCheckAt = void 0);
            }),
            (t.prototype.isPlaying = function (e) {
              this.handlePlaying();
            }),
            (t.prototype.realityCheckPresented = function () {
              (this._showingDialog = !0), this.stopTimers();
            }),
            (t.prototype.realityCheckAcknowledged = function (e) {
              (this._showingDialog = !1),
                (this._killed = e),
                (this.shouldShowDialog = !1),
                this.isPlaying(!0);
            }),
            (t.prototype.handlePlaying = function () {
              var t = this;
              !0 !== this.shouldShowDialog &&
                (this._showingDialog ||
                  this._killed ||
                  (void 0 !== this._config &&
                    !0 === this._config.enabled &&
                    void 0 === this._checkTimer &&
                    0 !== this._config.regularcheckinterval &&
                    ((this._nextCheckAt = Date.now() + this._timeToReach),
                    (this._checkTimer = e.time.setSafeTimeout(
                      this._gameInstanceId,
                      function () {
                        return t.sendRealityCheckDialogRequest();
                      },
                      this._timeToReach
                    )))));
            }),
            (t.prototype.sendRealityCheckDialogRequest = function () {
              this.stopTimers(),
                (this._timeToReach = 1e3 * this._config.regularcheckinterval),
                (this.shouldShowDialog = !0),
                this.onShowRealityCheck.dispatch();
            }),
            Object.defineProperty(t.prototype, "timeRemainingBeforeCheck", {
              get: function () {
                return void 0 === this._nextCheckAt
                  ? this.shouldShowDialog
                    ? 0
                    : Number.POSITIVE_INFINITY
                  : Math.max(0, this._nextCheckAt - Date.now());
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "timeRemainingBeforeReset", {
              get: function () {
                return Number.POSITIVE_INFINITY;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "timersRunning", {
              get: function () {
                return { idle: !1, check: null != this._checkTimer };
              },
              enumerable: !0,
              configurable: !0,
            }),
            t
          );
        })();
        t.RealityCheckManager = n;
      })(t.utils || (t.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {}));
(__extends =
  (this && this.__extends) ||
  (function () {
    var e = function (t, n) {
      return (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(t, n);
    };
    return function (t, n) {
      function o() {
        this.constructor = t;
      }
      e(t, n),
        (t.prototype =
          null === n
            ? Object.create(n)
            : ((o.prototype = n.prototype), new o()));
    };
  })()),
  (__awaiter =
    (this && this.__awaiter) ||
    function (e, t, n, o) {
      return new (n || (n = Promise))(function (i, a) {
        function r(e) {
          try {
            u(o.next(e));
          } catch (e) {
            a(e);
          }
        }
        function s(e) {
          try {
            u(o.throw(e));
          } catch (e) {
            a(e);
          }
        }
        function u(e) {
          var t;
          e.done
            ? i(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(r, s);
        }
        u((o = o.apply(e, t || [])).next());
      });
    }),
  (__generator =
    (this && this.__generator) ||
    function (e, t) {
      var n,
        o,
        i,
        a,
        r = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (a = { next: s(0), throw: s(1), return: s(2) }),
        "function" == typeof Symbol &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function s(a) {
        return function (s) {
          return (function (a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; r; )
              try {
                if (
                  ((n = 1),
                  o &&
                    (i =
                      2 & a[0]
                        ? o.return
                        : a[0]
                        ? o.throw || ((i = o.return) && i.call(o), 0)
                        : o.next) &&
                    !(i = i.call(o, a[1])).done)
                )
                  return i;
                switch (((o = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                  case 0:
                  case 1:
                    i = a;
                    break;
                  case 4:
                    return r.label++, { value: a[1], done: !1 };
                  case 5:
                    r.label++, (o = a[1]), (a = [0]);
                    continue;
                  case 7:
                    (a = r.ops.pop()), r.trys.pop();
                    continue;
                  default:
                    if (
                      !((i = r.trys),
                      (i = i.length > 0 && i[i.length - 1]) ||
                        (6 !== a[0] && 2 !== a[0]))
                    ) {
                      r = 0;
                      continue;
                    }
                    if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                      r.label = a[1];
                      break;
                    }
                    if (6 === a[0] && r.label < i[1]) {
                      (r.label = i[1]), (i = a);
                      break;
                    }
                    if (i && r.label < i[2]) {
                      (r.label = i[2]), r.ops.push(a);
                      break;
                    }
                    i[2] && r.ops.pop(), r.trys.pop();
                    continue;
                }
                a = t.call(e, r);
              } catch (e) {
                (a = [6, e]), (o = 0);
              } finally {
                n = i = 0;
              }
            if (5 & a[0]) throw a[1];
            return { value: a[0] ? a[1] : void 0, done: !0 };
          })([a, s]);
        };
      }
    });
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++)
      e += arguments[t].length;
    var o = Array(e),
      i = 0;
    for (t = 0; t < n; t++)
      for (var a = arguments[t], r = 0, s = a.length; r < s; r++, i++)
        o[i] = a[r];
    return o;
  };
!(function (e) {
  !(function (t) {
    t.createIdleStateEventForDialogs = function (e, t, n) {
      return {
        exec: n,
        id: t,
        pre: function () {
          return e.gui.setDialogModalMode(!0, !1, t), !0;
        },
        post: function () {
          e.gui.setDialogModalMode(!1, !1, t);
        },
      };
    };
    var n,
      o = [],
      i = !1,
      a = !1;
    function r() {
      a &&
        (u ||
          i ||
          (function () {
            if (!u) {
              var e = o.shift();
              if ((e || (e = d.shift()), (n = e), e)) {
                i = !0;
                var t = !0;
                e.pre && (t = e.pre()),
                  t
                    ? (m.eventProcessing.dispatch(e.id),
                      setTimeout(function () {
                        null == n
                          ? ((i = !1), r())
                          : e.exec(function () {
                              (i = !1), e.post && e.post(), r();
                            }, e.id);
                      }, 1))
                    : ((i = !1), r());
              } else h.setCondition("queueEmpty", !0);
            }
          })());
    }
    var s = function () {},
      u = !1,
      l = [],
      d = [],
      c = t.createLogicalGate("ProcessingQueue", function () {
        m.processingStarting.dispatch(),
          c.revive(),
          !1 === (u = !1) &&
            (l.forEach(function (e) {
              m.addEvent(e);
            }),
            (l = []),
            r());
      });
    c.addCondition("enableQueueProcessing", !1, !0);
    var h = t.createLogicalGate("CompleteGate", function () {
      h.revive(),
        i ||
          (0 === o.length ? (s && s(), m.processingComplete.dispatch()) : r());
    });
    function p(e) {
      o = o.filter(function (t) {
        return !t.id || t.id !== e.id;
      });
    }
    h.addCondition("queueEmpty", !0, !0);
    var m = (function () {
      function e() {}
      return (
        (e.blockProcessing = function (e) {
          c.addCondition(e, !0, !0), c.setCondition(e, !1), (u = !0);
        }),
        (e.unblockProcessing = function (e) {
          c.hasCondition(e) && c.setCondition(e, !0);
        }),
        (e.blockCompleteNotifications = function (e) {
          h.addCondition(e, !0, !0), h.setCondition(e, !1);
        }),
        (e.unblockCompleteNotifications = function (e) {
          h.hasCondition(e) && h.setCondition(e, !0);
        }),
        (e.setCompleteCallback = function (e) {
          s = function () {
            (s = null), e();
          };
        }),
        (e.enableProcessing = function () {
          (a = !0), c.setCondition("enableQueueProcessing", !0);
        }),
        (e.cancelEvent = function (e) {
          (o = o.filter(function (t) {
            return t.id != e;
          })),
            (l = l.filter(function (t) {
              return t.id != e;
            })),
            (d = d.filter(function (t) {
              return t.id != e;
            })),
            n && n.id === e && (n = null);
        }),
        (e.disableProcessing = function () {
          (a = !1), c.setCondition("enableQueueProcessing", !1);
        }),
        (e.addEvent = function (e) {
          "function" == typeof e && (e = { exec: e, id: void 0 }),
            p(e),
            o.push(e),
            setTimeout(function () {
              r();
            }, 1);
        }),
        (e.addEventWhenEnabled = function (e) {
          "function" == typeof e &&
            (e = { exec: e, id: void 0, pre: null, post: null });
          var t = e;
          a ? (p(t), o.push(t), r()) : l.push(t);
        }),
        (e.addLateEvent = function (e) {
          var t = e;
          a ? (p(t), d.push(t), r()) : d.push(t);
        }),
        (e.addPriorityEvent = function (e) {
          "function" == typeof e &&
            (e = { exec: e, id: void 0, pre: null, post: null });
          var t = e;
          p(t), o.unshift(t), a && r();
        }),
        (e.clearAllEvents = function () {
          (o = []), (l = []);
        }),
        (e.inspect = function () {
          c.inspect(!0), h.inspect(!0);
        }),
        e
      );
    })();
    (t.GlobalIdleStateEventQueue = m),
      (m.eventProcessing = new e.utils.Signal1()),
      (m.processingStarting = new e.utils.Signal0()),
      (m.processingComplete = new e.utils.Signal0());
  })(e.utils || (e.utils = {}));
})(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        e.isUsingGUI_2_0 = function (e, t) {
          var n,
            o =
              void 0 !==
              (null === (n = window.tk_gui) || void 0 === n
                ? void 0
                : n.adapter);
          return o && e && e(tk_gui.adapter), !o && t && t(), o;
        };
      })(e.gui || (e.gui = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = e.utils.GlobalIdleStateEventQueue,
          o = e.utils.createIdleStateEventForDialogs,
          i = e.slots.gui.createGuiOverridesForActiveGameRound,
          a = e.slots.gui.isUsingGUI_2_0,
          r = (function () {
            function t(e, t) {
              (this.isActive = !1),
                (this._lastAutoRound = !1),
                (this._game = e),
                (this._autoPlayState = e.model.autoPlayState),
                (this._roundState = t),
                (this.autoContinueSessionOnWpComplete = !0),
                (this._sessionRequestedByPlayer = !1);
            }
            return (
              (t.prototype.activate = function () {
                var e = this;
                this.isActive ||
                  ((this.isActive = !0),
                  (this._autoPlayState.started = !1),
                  (this._autoPlayState.cashLost = 0),
                  (this._autoPlayState.roundsPlayed = 0),
                  (this._lastAutoRound = !1),
                  (this._sessionRequestedByPlayer = !1),
                  this._roundState.setupForAutoPlayContext(),
                  this._game.jsBridge.onStopAutoPlay.remove(
                    this.handleStopAutoPlayRequested,
                    this
                  ),
                  this._game.jsBridge.onStopAutoPlay.add(
                    this.handleStopAutoPlayRequested,
                    this
                  ),
                  this._game.nextRoundStartGate.autoSpinContextActivated(),
                  this._game.messageManager.onMessageProcessing.remove(
                    this.stopAutoPlayOnMessageProcessing,
                    this
                  ),
                  this._game.messageManager.onMessageProcessing.addOnce(
                    this.stopAutoPlayOnMessageProcessing,
                    this
                  ),
                  this._game.winCapManager.setStopAutoPlayCallback(function () {
                    e.handleStopAutoPlayRequested();
                  }));
              }),
              (t.prototype.handleStopAutoPlayRequested = function () {
                this.stopAutoPlay("jsbridge");
              }),
              (t.prototype.deactivate = function () {
                (this.isActive = !1),
                  (this._autoPlayState.started = !1),
                  (this._autoPlayState.cashLost = 0),
                  (this._autoPlayState.roundsPlayed = 0),
                  (this._autoPlayState.running = !1),
                  (this._stopConditionCheckResult = null),
                  (this._sessionRequestedByPlayer = !1),
                  this._game.winCapManager.setStopAutoPlayCallback(null),
                  this._game.messageManager.onMessageProcessing.remove(
                    this.stopAutoPlayOnMessageProcessing,
                    this
                  );
              }),
              (t.prototype.preventGamePlay = function () {}),
              (t.prototype.restore = function () {
                throw new Error(
                  "AutoSpinContext.restore is abstract and must be implemented in subclass. Is it even possible to restore an autoplay session?"
                );
              }),
              (t.prototype.resumeRestoredRound = function () {
                throw new Error(
                  "AutoSpinContext.resumeRestoredRound is abstract and must be implemented in subclass. Is it even possible to restore an autoplay session?"
                );
              }),
              (t.prototype.handleStartNewRoundRequested = function (e) {
                !1 === this._sessionRequestedByPlayer ||
                  ((this._startNewRoundData = e),
                  this._roundState.abortFinalWinPresentation());
              }),
              (t.prototype.handleAutoPlayRoundsSelected = function (e) {
                (this._autoPlayState.roundsLeft =
                  this._autoPlayState.roundsTotal =
                    e),
                  this._game.gui.setAutoSpinMode(e, !1);
              }),
              (t.prototype.handleAutoPlayRoundsCleared = function () {
                this._game.gui.updateGuiButtonOverrides(
                  "commons-uk.mustSelectBet",
                  null
                ),
                  !0 === this._autoPlayState.started
                    ? this.stopAutoPlay("player")
                    : ((this._sessionRequestedByPlayer = !1),
                      (this._autoPlayState.running = !1),
                      (this._autoPlayState.started = !1),
                      this.onAutoPlayStoppedCallback());
              }),
              (t.prototype.handleRoundStarted = function () {}),
              (t.prototype.handleFinalWinPresentationStarted = function () {
                var t = this;
                this._game.keepAliveManager.isPlaying(!1),
                  (this._autoPlayState.cashLost +=
                    this._game.model.placedBetAmount -
                    this._game.model.gameRound.totalWinAmountForGameRound),
                  this._game.nextRoundStartGate.winPresentationStarted();
                var i = this.checkForStopAutoPlayOptions();
                (this._stopConditionCheckResult = i),
                  this._autoPlayState.roundsLeft > 0 && !0 === i.abort
                    ? n.addPriorityEvent(
                        o(
                          this._game,
                          "commons.stopConditionActivated",
                          function (e) {
                            t.handleStopConditionActivated(i), e();
                          }
                        )
                      )
                    : 0 === this._autoPlayState.roundsLeft &&
                      ((this._stopConditionCheckResult = {
                        abort: !1,
                        reason: null,
                        dialogToShow: null,
                      }),
                      (this._autoPlayState.running = !1),
                      (this._autoPlayState.started = !1),
                      (this._autoPlayState.roundsLeft =
                        this._autoPlayState.roundsTotal),
                      e.slots.gui.isUsingGUI_2_0()
                        ? this.stopAutoPlay("commons")
                        : this._game.regulationManager.handleLastAutoRoundFinalWinPresentationStarted() &&
                          this.stopAutoPlay("regulation")),
                  this.isActive &&
                    this._game.messageManager.shouldShowMessage() &&
                    (n.addEvent(
                      this._game.messageManager.createIdleStateEvent()
                    ),
                    this.stopAutoPlay("playerMessages"));
              }),
              (t.prototype.handleStopConditionActivated = function (e) {
                var t = this;
                this.isActive &&
                  (e.dialogToShow
                    ? (this._game.gui.setDialogModalMode(
                        !0,
                        !1,
                        "commons.autoSpinStopConditionActivated"
                      ),
                      this._game.dialogManager.showDialog(
                        e.dialogToShow,
                        function () {
                          t._game.gui.setDialogModalMode(
                            !1,
                            !1,
                            "commons.autoSpinStopConditionActivated"
                          ),
                            t._roundState.handleAutoPlayStopConditionActivated(),
                            t.isActive && t.stopAutoPlay("stopcondition");
                        }
                      ))
                    : (this._roundState.handleAutoPlayStopConditionActivated(),
                      this.isActive && this.stopAutoPlay("stopcondition")));
              }),
              (t.prototype.handleFinalWinPresentationComplete = function () {
                this._game.nextRoundStartGate.winPresentationComplete(),
                  !0 === this._autoPlayState.started &&
                    !0 === this.autoContinueSessionOnWpComplete &&
                    this.onContinueSessionOnWpCompleteCallback();
              }),
              (t.prototype.enterRoundState = function () {
                n.disableProcessing();
                var e = this._autoPlayState;
                e.roundsLeft--,
                  0 === e.roundsLeft
                    ? ((this._lastAutoRound = !0),
                      (this._autoPlayState.completed = !0))
                    : ((this._lastAutoRound = !1),
                      (this._autoPlayState.completed = !1)),
                  this._game.loginCheckManager.roundStarted(),
                  void 0 !== this._game.keepAliveManager &&
                    this._game.keepAliveManager.keepAlive(),
                  this._game.keepAliveManager.isPlaying(!0),
                  this._game.keepAliveManager.keepAlive(),
                  this._game.realityCheckManager.isPlaying(!0),
                  this._game.winCapManager.resetOnNewGameRound();
                var t = this._startNewRoundData;
                (this._startNewRoundData = null),
                  this._autoPlayState.roundsPlayed++,
                  a(function (e) {
                    e.roundStarted();
                  }),
                  this._roundState.newRoundAccepted(t);
              }),
              (t.prototype.handleGuiButtonClicked = function (t, n) {
                var o = e.slots.gui.GuiButtonIds;
                switch (t) {
                  case o.STOP_AUTO_PLAY:
                    (this._sessionRequestedByPlayer = !1),
                      this.handleStopAutoPlayButtonClicked();
                    break;
                  case o.START_AUTO_PLAY:
                    (this._sessionRequestedByPlayer = !0),
                      (this._lastAutoRound = !1);
                }
                this._roundState.handleGuiButtonClicked(t, n);
              }),
              (t.prototype.handleFinalWinPresentationAborted = function () {
                this._game.keepAliveManager.keepAlive(),
                  this._game.keepAliveManager.isPlaying(!1),
                  !1 === this._autoPlayState.started
                    ? 1 == this._lastAutoRound
                      ? this.performLastRoundCompletedLogic()
                      : this._sessionRequestedByPlayer
                      ? (n.disableProcessing(),
                        this.newRoundPendingCallback(),
                        this.startNewSession())
                      : (this.pendingRoundCancelled(), n.enableProcessing())
                    : (n.disableProcessing(),
                      this.newRoundPendingCallback(),
                      this.continueExistingSession());
              }),
              (t.prototype.handleStopAutoPlayButtonClicked = function () {
                this._game.keepAliveManager.keepAlive(),
                  this.stopAutoPlay("player");
              }),
              (t.prototype.stopAutoPlay = function (e) {
                !0 === this._autoPlayState.started &&
                  this._game.jsBridge.autoPlayStopped(
                    this._autoPlayState.roundsPlayed,
                    e
                  ),
                  (this._sessionRequestedByPlayer = !1),
                  (this._autoPlayState.aborted = !0),
                  (this._autoPlayState.started = !1),
                  (this._game.model.autoPlayState.roundsLeft =
                    this._game.model.autoPlayState.roundsTotal),
                  this.onAutoPlayStoppedCallback();
              }),
              (t.prototype.handleDialogButtonClicked = function (t, n, o) {
                t !== e.slots.gui.DialogTypeEnum.OC &&
                  (this._game.dialogManager.closeCurrentDialog(n),
                  this._roundState.handleDialogButtonClicked(t, n),
                  t ===
                    e.slots.gui.DialogTypeEnum.PLAY_TIME_EXCEEDED_LOST_MONEY ||
                  t === e.slots.gui.DialogTypeEnum.PLAY_TIME_EXCEEDED_WON_MONEY
                    ? this._game.regulationManager.handleRealityCheckInterruptedAutoPlay() &&
                      ((this._sessionRequestedByPlayer = !1),
                      this._game.jsBridge.autoPlayStopped(
                        this._autoPlayState.roundsPlayed,
                        "realitycheck"
                      ),
                      this.onAutoPlayStoppedCallback())
                    : (t !== e.slots.gui.DialogTypeEnum.INSUFFICIENT_FUNDS &&
                        t !==
                          e.slots.gui.DialogTypeEnum
                            .SERVER_SIDE_INSUFFICIENT_FUNDS) ||
                      (this._game.jsBridge.autoPlayStopped(
                        this._autoPlayState.roundsPlayed,
                        "insufficentfunds"
                      ),
                      this.onAutoPlayStoppedCallback()));
              }),
              (t.prototype.checkForStopAutoPlayOptions = function () {
                return this._game.model.autoPlayState.lossLimit <
                  this._game.model.autoPlayState.cashLost +
                    this._game.model.placedBetAmount
                  ? {
                      abort: !0,
                      reason: "losslimit",
                      dialogToShow:
                        e.slots.gui.DialogTypeEnum.LOSS_LIMIT_REACHED,
                    }
                  : this._game.model.autoPlayState.singleWinLimit <=
                    this._game.model.gameRound.totalWinAmountForGameRound
                  ? { abort: !0, reason: "singlewin", dialogToShow: null }
                  : null != this._game.model.gameRound.jackpotWon &&
                    !0 === this._game.model.autoPlayState.stopOnJackpotWon
                  ? { abort: !0, reason: "jackpotwon", dialogToShow: null }
                  : { abort: !1, reason: null, dialogToShow: null };
              }),
              (t.prototype.handleSpacebarPressed = function () {
                void 0 !== this._game.keepAliveManager &&
                  this._game.keepAliveManager.keepAlive(),
                  this._roundState.handleSpacebarPressed();
              }),
              (t.prototype.performOutOfMoneyLogic = function () {
                this.onClientSideOOMCallback();
              }),
              (t.prototype.continueExistingSession = function () {
                var e = this;
                this._game.nextRoundStartGate.newRoundRequested(function () {
                  e.enterRoundState();
                });
              }),
              (t.prototype.performLastRoundCompletedLogic = function () {
                var e = this._game.model.autoPlayState;
                (e.roundsLeft = e.roundsTotal),
                  (e.started = !1),
                  (e.cashLost = 0),
                  (e.running = !1),
                  (e.completed = !0),
                  (e.started = !1),
                  (this._sessionRequestedByPlayer = !1),
                  (this._autoPlayState = e),
                  this.pendingRoundCancelled(),
                  this._game.regulationManager.handleLastAutoRoundComplete()
                    ? (this._game.jsBridge.autoPlayStopped(
                        this._autoPlayState.roundsTotal,
                        "regulation"
                      ),
                      this.onAutoPlayStoppedCallback())
                    : this.autoPlaySessionCompletedCallback();
              }),
              (t.prototype.startNewSession = function () {
                var e = this;
                !(function () {
                  if (e._game.regulationManager.canStartAutoPlaySession()) {
                    (e._autoPlayState.roundsPlayed = 0),
                      (e._autoPlayState.cashLost = 0);
                    var t = e._game.gui.getAutoPlayLossLimitValue(),
                      o = e._game.gui.getAutoPlaySingleWinLimitValue();
                    (e._autoPlayState.lossLimit = t),
                      (e._autoPlayState.singleWinLimit = o),
                      (e._autoPlayState.started = !0),
                      a()
                        ? (e._game.gui.updateGuiButtonOverrides(
                            "commons:autoSpinContext:startNewSession",
                            i()
                          ),
                          setTimeout(function () {
                            e._game.jsBridge.autoPlayStarted({
                              betperspin: e._game.model.placedBetAmount,
                              losslimit: e._game.model.autoPlayState.lossLimit,
                              singlewinlimit:
                                e._game.model.autoPlayState.singleWinLimit,
                              spinsselected:
                                e._game.model.autoPlayState.roundsLeft,
                              stoponfeaturewon:
                                e._game.model.autoPlayState.stopOnFeatureWon,
                              stoponjackpotwon:
                                e._game.model.autoPlayState.stopOnJackpotWon,
                            }),
                              e._game.gui.updateGuiButtonOverrides(
                                "commons:autoSpinContext:startNewSession",
                                null
                              ),
                              e._game.nextRoundStartGate.newRoundRequested(
                                function () {
                                  e.enterRoundState();
                                }
                              );
                          }, 300))
                        : (e._game.jsBridge.autoPlayStarted({
                            betperspin: e._game.model.placedBetAmount,
                            losslimit: e._game.model.autoPlayState.lossLimit,
                            singlewinlimit:
                              e._game.model.autoPlayState.singleWinLimit,
                            spinsselected:
                              e._game.model.autoPlayState.roundsLeft,
                            stoponfeaturewon:
                              e._game.model.autoPlayState.stopOnFeatureWon,
                            stoponjackpotwon:
                              e._game.model.autoPlayState.stopOnJackpotWon,
                          }),
                          e._game.nextRoundStartGate.newRoundRequested(
                            function () {
                              e.enterRoundState();
                            }
                          ));
                  } else
                    (e._autoPlayState.started = !1),
                      e.pendingRoundCancelled(),
                      e._game.nextRoundStartGate.newRoundRejected(),
                      e._roundState.newRoundRejected(),
                      n.enableProcessing();
                })();
              }),
              (t.prototype.handleBetChanged = function () {
                this._game.gui.setAutoSpinMode(
                  this._autoPlayState.roundsLeft ||
                    this._autoPlayState.roundsTotal,
                  !1
                ),
                  this._game.gui.enableSpinButton();
              }),
              (t.prototype.handleGameRoundRestored = function () {}),
              (t.prototype.showAutoPlayAbortedByStopConditionDialog = function (
                e
              ) {
                (this._game.pausedByClient = !0),
                  this._game.dialogManager.showDialog(e);
              }),
              (t.prototype.handleStopConditionDialogClosed = function () {
                this._game.pausedByClient = !1;
                var t = this._stopConditionCheckResult.reason;
                (this._stopConditionCheckResult = null),
                  this.isActive && this.stopAutoPlay(t),
                  this._game.dialogManager.closeCurrentDialog(
                    e.slots.gui.GuiButtonIds.OK
                  );
              }),
              (t.prototype.stopAutoPlayOnMessageProcessing = function () {
                this.stopAutoPlay("commons.autoPlay.stopOnMessageHandling");
              }),
              (t.prototype.handleRealityCheckClosed = function () {
                n.enableProcessing();
              }),
              (t.prototype.sendGetBalanceRequestThenRetry = function (e) {
                var t = this;
                if (this._game.model.realPlay) {
                  n.blockProcessing("autoSpin:updatingBalance"),
                    this._game.gui.updateGuiButtonOverrides(
                      "autoSpin:updatingBalance",
                      i()
                    );
                  var o = function () {
                    t._game.slowConnectionTracker.responseReceived(),
                      n.unblockProcessing("autoSpin:updatingBalance"),
                      t._game.gui.updateGuiButtonOverrides(
                        "autoSpin:updatingBalance",
                        null
                      ),
                      e();
                  };
                  this._game.slowConnectionTracker.requestSent(),
                    this._game.requestMaker.sendGetBalanceRequest(
                      {
                        playerSessionId: this._game.model.playerSessionId,
                        gameId: this._game.model.gameId,
                        distributionChannel:
                          this._game.model.distributionChannel,
                      },
                      function (e) {
                        t._game.model.updatePlayerAccounts(e.playeraccounts),
                          t._game.model.updateTotalBalance(e.totalbalance),
                          t._game.setClientBalanceToServerBalance(!1),
                          t._game.updateCashField(),
                          t._game.sendBalanceChangedCallToJsBridge(),
                          o();
                      },
                      o
                    );
                } else e();
              }),
              (t.prototype.handleFeatureBought = function (e) {
                throw new Error(
                  "Feature buy is not supported in auto play mode"
                );
              }),
              t
            );
          })();
        t.AutoSpinContext = r;
      })(t.fsm || (t.fsm = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = e.utils.GlobalIdleStateEventQueue,
          o = e.slots.gui.isUsingGUI_2_0,
          i = (function () {
            function t(e) {
              this._game = e;
            }
            return (
              (t.prototype.handleAutoPlayRoundsSelected = function (t) {
                this._game.updateAvailableBets(!0),
                  o()
                    ? (this._mustSelectBet = !1)
                    : ((this._game.pausedByClient = !0),
                      n.blockProcessing("commons-uk.mustSelectBet"),
                      this._game.gui.showControlPanel(
                        e.slots.gui.PageIds.BET,
                        !1
                      ),
                      this._game.gui.updateGuiButtonOverrides(
                        "commons-uk.mustSelectBet",
                        {
                          startAutoPlay: { enabled: !1 },
                          spin: { enabled: !1 },
                        }
                      ),
                      (this._mustSelectBet = !0));
              }),
              (t.prototype.handleAutoPlayStoppedOrCancelled = function () {
                this._game.gui.updateGuiButtonOverrides(
                  "commons-uk.mustSelectBet",
                  null
                ),
                  n.unblockProcessing("commons-uk.mustSelectBet"),
                  (this._mustSelectBet = !1);
              }),
              (t.prototype.handleLastAutoRoundComplete = function () {
                return !0;
              }),
              (t.prototype.handleLastAutoRoundFinalWinPresentationStarted =
                function () {
                  return !0;
                }),
              (t.prototype.handleOutOfMoneyDuringAutoPlay = function () {
                return !0;
              }),
              (t.prototype.handleRealityCheckInterruptedAutoPlay = function () {
                return !0;
              }),
              (t.prototype.canStartAutoPlaySession = function () {
                var e = this._game.gui.getAutoPlayLossLimitValue();
                return null != e && this._game.model.selectedBetAmount <= e;
              }),
              (t.prototype.handleBetAmountSelected = function (e) {
                n.unblockProcessing("commons-uk.mustSelectBet"),
                  this._game.gui.updateGuiButtonOverrides(
                    "commons-uk.mustSelectBet",
                    null
                  ),
                  (this._mustSelectBet = !1);
              }),
              (t.prototype.abortAutoPlayOnButtonClicked = function (t, o) {
                return (
                  !!this._mustSelectBet &&
                  !(
                    t === e.slots.gui.GuiButtonIds.BET ||
                    t === e.slots.gui.GuiButtonIds.AUTO_PLAY
                  ) &&
                  ((this._mustSelectBet = !1),
                  this._game.gui.updateGuiButtonOverrides(
                    "commons-uk.mustSelectBet",
                    null
                  ),
                  n.unblockProcessing("commons-uk.mustSelectBet"),
                  !0)
                );
              }),
              (t.prototype.mayCelebrateWin = function (e) {
                return e > 1;
              }),
              (t.prototype.mayAutoExitFeatures = function () {
                return !1;
              }),
              (t.prototype.mayAutoEnterFeatures = function () {
                return !1;
              }),
              t
            );
          })();
        t.UKRegulationManager = i;
      })(t.utils || (t.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        var t = (function () {
          function e(e) {
            this._game = e;
          }
          return (
            (e.prototype.handleAutoPlayRoundsSelected = function (e) {
              this._game.pausedByClient = !1;
            }),
            (e.prototype.handleLastAutoRoundComplete = function () {
              return !1;
            }),
            (e.prototype.handleLastAutoRoundFinalWinPresentationStarted =
              function () {
                return !1;
              }),
            (e.prototype.handleOutOfMoneyDuringAutoPlay = function () {
              return !0;
            }),
            (e.prototype.handleRealityCheckInterruptedAutoPlay = function () {
              return !1;
            }),
            (e.prototype.canStartAutoPlaySession = function () {
              return !0;
            }),
            (e.prototype.handleBetAmountSelected = function (e) {}),
            (e.prototype.handleAutoPlayStoppedOrCancelled = function () {}),
            (e.prototype.abortAutoPlayOnButtonClicked = function (e, t) {
              return !1;
            }),
            (e.prototype.mayCelebrateWin = function (e) {
              return !0;
            }),
            (e.prototype.mayAutoEnterFeatures = function () {
              return !0;
            }),
            (e.prototype.mayAutoExitFeatures = function () {
              return !0;
            }),
            e
          );
        })();
        e.MTRegulationManager = t;
      })(e.utils || (e.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = e.time.RAFBasedTimer,
          o = e.utils.GlobalIdleStateEventQueue,
          i = e.slots.gui.createStartNewRoundBlockingOverrides,
          a = e.slots.gui.createGuiOverridesForActiveGameRound,
          r = e.slots.gui.isUsingGUI_2_0,
          s = (function () {
            function t(t) {
              var i = this;
              (this._extraDelay = 0),
                (this.minRoundDurationLocksDownBetAndAutoPlay = !1),
                (this._game = t),
                (this._startNewRoundGate = e.utils.createLogicalGate(
                  "startNewRoundGate",
                  function () {
                    i.newRoundAccepted();
                  }
                )),
                this._startNewRoundGate.addCondition("gameplayallowed", !0, !0),
                this._startNewRoundGate.addCondition(
                  "minimumroundduration",
                  !0,
                  !0,
                  function () {
                    i.unblockRoundStartingGuiElements("minimumroundduration");
                  }
                ),
                this._startNewRoundGate.addCondition("extradelay", !0, !0),
                this._startNewRoundGate.addCondition("winpresaborted", !0, !0),
                this._startNewRoundGate.addCondition(
                  "newroundrequested",
                  !1,
                  !0
                ),
                this._startNewRoundGate.addCondition("messagespending", !1, !1),
                this._startNewRoundGate.addCondition("handlingmessage", !1, !1),
                this._startNewRoundGate.addCondition(
                  "gameplaydeclined",
                  !1,
                  !1
                ),
                (this._timer = new n()),
                (this.onMinimumRoundDurationTimerStarted =
                  new e.utils.Signal1()),
                (this.onMinimumRoundDurationTimerEnded = new e.utils.Signal0()),
                this._game.model.onPlayerMessagesQueueChanged.add(function (e) {
                  0 == e
                    ? (i.unblockRoundStartingGuiElements("messagespending"),
                      i.unblockAutoPlayAndBetButton("messagespending"),
                      i._startNewRoundGate.setCondition("messagespending", !1))
                    : (i.blockRoundStartingGuiElements("messagespending"),
                      i.blockAutoPlayAndBetButton("messagespending"),
                      i._startNewRoundGate.setCondition("messagespending", !0),
                      o.addEvent({
                        exec: function (e) {
                          i.blockControlPanelEntry(),
                            i._game.messageManager.handleMessageQueue(e);
                        },
                        id: "nextRoundStartGate:handleMessageQueue",
                        pre: function () {
                          return i._game.messageManager.shouldShowMessage();
                        },
                        post: function () {
                          i.unblockControlPanelEntry();
                        },
                      }));
                }),
                this._game.messageManager.onMessageProcessing.add(function (e) {
                  e
                    ? (i.unblockRoundStartingGuiElements("handlingmessage"),
                      i.unblockAutoPlayAndBetButton("handlingmessage"),
                      i._startNewRoundGate.setCondition("handlingmessage", !1))
                    : (i.blockRoundStartingGuiElements("handlingmessage"),
                      i.blockAutoPlayAndBetButton("handlingmessage"),
                      i._startNewRoundGate.setCondition("handlingmessage", !0));
                }),
                this._game.dialogManager.onDialogShowing.add(function () {
                  i.blockRoundStartingGuiElements("dialogshowing");
                }),
                this._game.dialogManager.onDialogClosed.add(function () {
                  i.unblockRoundStartingGuiElements("dialogshowing");
                });
            }
            return (
              (t.prototype.singleSpinContextActivated = function () {
                var e = this._startNewRoundGate;
                e.revive(),
                  e.setCondition("newroundrequested", !1),
                  e.setCondition("extradelay", !0),
                  e.replacePassedCallback("winpresaborted", null),
                  this._timer.clearTimer(this._extraDelayTid),
                  (this._extraDelayTid = void 0),
                  (this._startNewRoundRequestedCallback = function () {});
              }),
              (t.prototype.autoSpinContextActivated = function () {
                var e = this,
                  t = this._startNewRoundGate;
                t.revive(),
                  t.setCondition("newroundrequested", !1),
                  this._extraDelay > 0
                    ? (t.setCondition("extradelay", !1),
                      t.addCondition(
                        "winpresaborted",
                        this._startNewRoundGate.getCondition("winpresaborted"),
                        !0,
                        function () {
                          e._timer.clearTimer(e._extraDelayTid),
                            (e._extraDelayTid = e._timer.setTimer(
                              e._extraDelay,
                              function () {
                                t.setCondition("extradelay", !0);
                              }
                            ));
                        }
                      ))
                    : t.setCondition("extradelay", !0),
                  (this._startNewRoundRequestedCallback = function () {});
              }),
              (t.prototype.autoPlayAborted = function () {
                this._startNewRoundGate.setCondition("newroundrequested", !1);
              }),
              (t.prototype.freeRoundContextActivated = function () {
                var e = this._startNewRoundGate;
                e.revive(),
                  e.setCondition("newroundrequested", !1),
                  e.setCondition("extradelay", !0),
                  e.replacePassedCallback("winpresaborted", null),
                  clearTimeout(this._extraDelayTid),
                  (this._extraDelayTid = void 0),
                  (this._startNewRoundRequestedCallback = function () {});
              }),
              (t.prototype.setExtraDelayBeforeAutoSpin = function (e) {
                this._extraDelay = e;
              }),
              (t.prototype.newRoundRequested = function (e) {
                (this._startNewRoundRequestedCallback = e),
                  this._startNewRoundGate.setCondition("newroundrequested", !0);
              }),
              (t.prototype.newRoundRejected = function () {
                this._startNewRoundGate.setCondition("newroundrequested", !1),
                  this._startNewRoundGate.setCondition("winpresaborted", !0),
                  this._startNewRoundGate.setCondition(
                    "minimumroundduration",
                    !0
                  ),
                  this.unblockRoundStartingGuiElements("minimumroundduration"),
                  o.unblockProcessing("commons.idleblock.roundinprogress"),
                  this.stopTimeCounting(),
                  this._game.gui.updateGuiButtonOverrides(
                    "nextroundstartgate.roundinprogress",
                    null
                  );
              }),
              (t.prototype.preventGamePlay = function () {
                var e = this;
                this._startNewRoundGate.setCondition("gameplayallowed", !1),
                  o.addLateEvent({
                    id: "nextroundstartgate:gameplayprevented",
                    exec: function (t) {
                      e.blockRoundStartingGuiElements("gameplayprevented"), t();
                    },
                  });
              }),
              (t.prototype.gamePlayResumed = function () {
                this._startNewRoundGate.setCondition("gameplayallowed", !0),
                  this.unblockRoundStartingGuiElements("gameplayprevented"),
                  o.cancelEvent("nextroundstartgate:gameplayprevented"),
                  o.unblockProcessing("gameplayprevented");
              }),
              (t.prototype.gamePlayPrevented = function () {
                o.blockProcessing("gameplayprevented");
              }),
              (t.prototype.winPresentationStarted = function () {
                this._game.gui.updateGuiButtonOverrides(
                  "nextroundstartgate.roundinprogress",
                  null
                );
              }),
              (t.prototype.winPresentationComplete = function () {
                o.unblockProcessing("commons.idleblock.roundinprogress");
              }),
              (t.prototype.winPresentationAborted = function () {
                this._startNewRoundGate.setCondition("winpresaborted", !0),
                  this._game.gui.updateGuiButtonOverrides(
                    "nextroundstartgate.roundinprogress",
                    null
                  ),
                  o.unblockProcessing("commons.idleblock.roundinprogress");
              }),
              (t.prototype.newRoundAccepted = function () {
                var e = this;
                this._startNewRoundGate.revive(),
                  this._startNewRoundGate.setCondition("winpresaborted", !1),
                  this._startNewRoundGate.setCondition("newroundrequested", !1),
                  this._startNewRoundGate.setCondition(
                    "messagespending",
                    this._game.messageManager.shouldShowMessage()
                  ),
                  this.stopTimeCounting();
                var t = r(function (t) {
                  (0, e._startNewRoundRequestedCallback)();
                });
                o.blockProcessing("commons.idleblock.roundinprogress"),
                  this._game.gui.updateGuiButtonOverrides(
                    "nextroundstartgate.roundinprogress",
                    a()
                  );
                var n = this._game.initGameData.minimumtimebetweenrounds;
                if (n > 0) {
                  this.blockRoundStartingGuiElements("minimumroundduration"),
                    this._startNewRoundGate.setCondition(
                      "minimumroundduration",
                      !1
                    );
                  (this._timeStamp = Date.now()),
                    this.startTimeCounting(n + 50, function () {
                      e.onMinimumRoundDurationTimerEnded.dispatch(),
                        e._startNewRoundGate.setCondition(
                          "minimumroundduration",
                          !0
                        );
                    }),
                    this.onMinimumRoundDurationTimerStarted.dispatch(n);
                } else
                  this._startNewRoundGate.setCondition(
                    "minimumroundduration",
                    !0
                  );
                t || (0, this._startNewRoundRequestedCallback)();
              }),
              (t.prototype.stopTimeCounting = function () {
                this._timer.clearTimer(this._nraTid),
                  (this._nraTid = void 0),
                  this.onMinimumRoundDurationTimerEnded.dispatch();
              }),
              (t.prototype.startTimeCounting = function (e, t) {
                var n = this;
                r() && this._game.gui.showMinimumRoundDurationProgression(e);
                this._nraTid = this._timer.setTimer(
                  e,
                  function () {
                    t();
                  },
                  function (e, t) {
                    r() &&
                      n._game.gui.updateMinimumRoundDurationProgression(e / t);
                  }
                );
              }),
              (t.prototype.blockRoundStartingGuiElements = function (e) {
                var t = i();
                "minimumroundduration" === e &&
                  this.minRoundDurationLocksDownBetAndAutoPlay &&
                  ((t.betButton = { enabled: !1 }),
                  (t.autoSpinConfigButton = { enabled: !1 })),
                  this._game.gui.updateGuiButtonOverrides(
                    "nextroundstartgate:" + e,
                    t
                  );
              }),
              (t.prototype.unblockRoundStartingGuiElements = function (e) {
                this._game.gui.updateGuiButtonOverrides(
                  "nextroundstartgate:" + e,
                  null
                );
              }),
              (t.prototype.blockAutoPlayAndBetButton = function (e) {
                this._game.gui.updateGuiButtonOverrides(
                  "nextroundstartgate-messaging:" + e,
                  {
                    autoSpinConfigButton: { enabled: !1 },
                    betButton: { enabled: !1 },
                  }
                );
              }),
              (t.prototype.unblockAutoPlayAndBetButton = function (e) {
                this._game.gui.updateGuiButtonOverrides(
                  "nextroundstartgate-messaging:" + e,
                  {
                    autoSpinConfigButton: { enabled: void 0 },
                    betButton: { enabled: void 0 },
                  }
                );
              }),
              (t.prototype.gamePlayDeclined = function () {
                var t = e.slots.gui.createStartNewRoundBlockingOverrides();
                (t.autoSpinConfigButton = { enabled: !1 }),
                  (t.betButton = { enabled: !1 }),
                  (t.startAutoPlay = { enabled: !1 }),
                  (t.stopAutoPlay = { enabled: !1 }),
                  (t.startFreeRounds = { enabled: !1 }),
                  this._game.gui.updateGuiButtonOverrides(
                    "nextroundstartgate:gameplaydeclined",
                    t
                  ),
                  this._startNewRoundGate.setCondition("gameplaydeclined", !0);
              }),
              (t.prototype.blockControlPanelEntry = function () {
                this._game.gui.updateGuiButtonOverrides(
                  "nextroundstartgate:blockcontrolpanelentry",
                  {
                    payTableButton: { enabled: !1 },
                    historyButton: { enabled: !1 },
                    gameRulesButton: { enabled: !1 },
                    autoSpinConfigButton: { enabled: !1 },
                    betButton: { enabled: !1 },
                  }
                );
              }),
              (t.prototype.unblockControlPanelEntry = function () {
                this._game.gui.updateGuiButtonOverrides(
                  "nextroundstartgate:blockcontrolpanelentry",
                  null
                );
              }),
              (t.prototype.getTimeStamp = function () {
                return this._timeStamp;
              }),
              (t.prototype.errorOccurred = function () {
                r() && this._game.gui.hideMinimumRoundDurationProgression();
                o.unblockProcessing("commons.idleblock.roundinprogress");
              }),
              (t.prototype.pendingRoundCancelled = function () {
                this._startNewRoundGate.setCondition("newroundrequested", !1),
                  this._startNewRoundGate.setCondition("winpresaborted", !0),
                  o.unblockProcessing("commons.idleblock.roundinprogress");
              }),
              t
            );
          })();
        t.NextRoundStartGate = s;
      })(t.utils || (t.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = e.utils.AmountFormatter,
          o = tk.gs.rs.e.ServerErrorCodes,
          i = e.phaser.utils.createUpdateTicker,
          a = e.slots.utils.NextRoundStartGate,
          r = e.slots.gui.isUsingGUI_2_0,
          s = tk_gui.adapter,
          u = (function (t) {
            function u(n, o, i, a, r, s) {
              var u = this;
              if (
                null ==
                  (i = e.jsintegration.data.combineInitGameDataSets(
                    e.jsintegration.data.createDefaultInitGameDataObject(
                      i.gameid
                    ),
                    i
                  )).localesurl ||
                "" == i.localesurl
              ) {
                var l = i.langiso.split("-"),
                  d = l[0],
                  c = l[1];
                (i.localesurl =
                  i.assetsbaseurl +
                  "/assets/locales" +
                  (i.localesvariant
                    ? "/" + i.localesvariant.toLowerCase()
                    : "/any") +
                  "/locale_" +
                  i.langiso +
                  ".json"),
                  c &&
                    (i.localesurlfallback =
                      i.assetsbaseurl +
                      "/assets/locales" +
                      (i.localesvariant
                        ? "/" + i.localesvariant.toLowerCase()
                        : "/any") +
                      "/locale_" +
                      d +
                      ".json"),
                  (i.localesurlenglish =
                    i.assetsbaseurl +
                    "/assets/locales" +
                    (i.localesvariant
                      ? "/" + i.localesvariant.toLowerCase()
                      : "/any") +
                    "/locale_en.json");
              }
              ((u = t.call(this, n, o, i, a, r, s) || this)._previousGameScale =
                NaN),
                (u._mayPause = !1),
                e.GameInstanceManager.addGameInstanceToManager(
                  u.initGameData.gameinstanceid,
                  u
                ),
                (u.buildDate = "%buildDate%"),
                (u.gamePlayAllowed = !0),
                (u.fastPlay = !1),
                (u.canRecoverFromWebGLContextLoss = !1);
              var h = u.ensureWebAudioSampleRate();
              h &&
                ((window.PhaserGlobal = window.PhaserGlobal || {
                  audioContext: void 0,
                }).audioContext = h);
              return (
                (u.isLocalHost =
                  0 === window.location.href.indexOf("http://localhost") ||
                  0 === window.location.href.indexOf("https://localhost")),
                (u.isLocalHost = u.isLocalHost && i.developmentmode),
                (u.winCapManager = new e.slots.utils.WinCapManager(u)),
                (u.updateBalanceOnError = u.updateBalanceOnError.bind(u)),
                (u.gameLayoutComplete = new e.utils.Signal2()),
                (u.sceneLayoutComplete = new e.utils.Signal2()),
                u.setupUpdateLogicDeltaTimeCalculation(),
                u.state.add("Boot", u.getBootStateClass(), !1),
                u.state.add("Preloader", u.getPreloaderStateClass(), !1),
                u.state.add("GameFlow", u.getGameFlowStateClass(), !1),
                u.state.start("Boot"),
                u
              );
            }
            return (
              __extends(u, t),
              (u.prototype.setupUpdateLogicDeltaTimeCalculation = function () {
                var e = this,
                  t = this.updateLogic.bind(this),
                  n = 0;
                (this.updateLogic = function (o) {
                  (n =
                    (e.forceSingleUpdate
                      ? Math.max(1 / e.time.desiredFps, o)
                      : o) || 0),
                    t(o);
                }),
                  (this.getUpdateLogicDeltaTime = function () {
                    return n;
                  });
              }),
              (u.prototype.getUpdateLogicDeltaTime = function () {
                return 0;
              }),
              (u.prototype.ensureWebAudioSampleRate = function () {
                var e = window.AudioContext || window.webkitAudioContext,
                  t = null;
                if (null != e && this.shouldEnsureSampleRateMatching()) {
                  var n = this.getDesiredSampleRate();
                  if (
                    null != (t = window.PhaserGlobal || new e()) &&
                    (null != t.close || null != t.suspend)
                  )
                    if (n !== t.sampleRate) {
                      var o = t.createBuffer(1, 1, n),
                        i = t.createBufferSource();
                      (i.buffer = o),
                        i.connect(t.destination),
                        i.start(0),
                        i.disconnect();
                      try {
                        t.close ? t.close() : t.suspend(), (t = new e());
                      } catch (e) {
                        if (this.initGameData.developmentmode) throw e;
                      }
                    } else t = null;
                }
                return t;
              }),
              (u.prototype.getDesiredSampleRate = function () {
                return 44100;
              }),
              (u.prototype.printSessionInfo = function () {
                return this.model.sessionInfo;
              }),
              (u.prototype.sendErrorOccurredEventDuringStartup = function (e) {
                this.jsBridge.errorOccurred(e),
                  this.slowConnectionTracker &&
                    this.slowConnectionTracker.responseReceived(),
                  null != this.gameState &&
                    0 == this.initGameData.externalerrorhandling &&
                    this.gameState.handleErrorOccurred(e);
              }),
              (u.prototype.handleEvent = function (e, t) {
                return this.jsBridge.handleEvent(e, t);
              }),
              (u.prototype.layoutGui = function (e) {
                if (void 0 !== this.gui && this.gui.isInitialized()) {
                  var t = jQuery("#" + this.initGameData.parentelementid),
                    n = t.position();
                  new Phaser.Rectangle(n.left, n.top, t.width(), t.height());
                }
              }),
              (u.prototype.showGui = function () {
                void 0 !== this.gui &&
                  this.gui.isInitialized() &&
                  this.gui.showGui();
              }),
              (u.prototype.hideGui = function () {
                void 0 !== this.gui &&
                  this.gui.isInitialized() &&
                  this.gui.hideGui();
              }),
              (u.prototype.getPathRelativeAssetPath = function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                var o = this.initGameData.localhostisspecial || !1;
                return -1 !== window.location.href.indexOf("localhost") && o
                  ? e.utils.buildUrl.apply(this, t)
                  : e.utils.buildUrl.apply(
                      this,
                      [this.initGameData.assetsbaseurl].concat(t)
                    );
              }),
              (u.prototype.getCurrentDeviceOrientation = function () {
                return this.scale.isGamePortrait
                  ? e.constants.OrientationEnum.PORTRAIT
                  : e.constants.OrientationEnum.LANDSCAPE;
              }),
              (u.prototype.updateTotalWinField = function (e) {
                var t = 0;
                if (null == e)
                  if (void 0 !== this.model.gameRound) {
                    if (this.model.gameRound.isFreeRound) {
                      var o = this.model.currentFreeRoundProgram;
                      (this.model.gameRound.freeRoundProgram === o ||
                        (null != this.model.gameRound.freeRoundProgram &&
                          null != o &&
                          this.model.gameRound.freeRoundProgram
                            .playerfreeroundreference ===
                            o.playerfreeroundreference)) &&
                        (t = this.model.gameRound.totalWinAmountForGameRound);
                    } else t = this.model.gameRound.totalWinAmountForGameRound;
                    if (0 === t) {
                      if (r()) this.gui.clearTotalWinField();
                      e = " ";
                    } else {
                      if (r()) this.gui.updateTotalWinAmount(t);
                      e = n.globalFormatter.formatAmount2(t, t);
                    }
                  } else e = " ";
                else if ("" === e) r() && this.gui.clearTotalWinField();
                else if (r()) {
                  var i = this.gui;
                  n.globalFormatter.formatAmount2(1.23).includes(",") &&
                    (e = e.replace(",", ".")),
                    i.updateTotalWinAmount(parseFloat(e));
                }
                return this.languageSystem.setParameterValue("win", e), t;
              }),
              (u.prototype.updateTotalWinFieldValue = function (e) {
                var t, o;
                if (
                  ((t =
                    void 0 !== this.model.gameRound
                      ? this.model.gameRound.totalWinAmountForGameRound
                      : 0),
                  null == e && (e = t),
                  (e = Math.min(e, t)),
                  0 === (e = Math.max(e, 0)))
                ) {
                  if (r()) this.gui.clearTotalWinField();
                  o = " ";
                } else {
                  if (r()) this.gui.updateTotalWinAmount(t);
                  o = n.globalFormatter.formatAmount2(e, e);
                }
                return this.languageSystem.setParameterValue("win", o), t;
              }),
              (u.prototype.getTotalWinForGameRound = function () {
                return this.model.gameRound
                  ? this.model.gameRound.totalWinAmountForGameRound
                  : 0;
              }),
              (u.prototype.updateAvailableBets = function (t) {
                void 0 === t && (t = !1);
                var o = this.model.getAllowedBets(),
                  i = 0,
                  a = this.gui.getAutoPlayLossLimitValue();
                void 0 === a && (a = Number.MAX_VALUE);
                for (
                  var r = n.globalFormatter.getMostPreciseNumberFormat(o),
                    s = 0,
                    u = 0;
                  u < o.length;
                  u++
                ) {
                  void 0 !== this.languageSystem &&
                    this.languageSystem.setParameterValue(
                      "betOption" + (u + 1),
                      n.globalFormatter.formatAmount2(o[u], r)
                    );
                  var l = o[u];
                  this.model.canCoverBet(l) && l > i && (i = l),
                    a >= l && (s = l);
                }
                t && (i = Math.min(s, i));
                var d = {
                  betOptions: o,
                  highestCoverableBet: i,
                  defaultBet: this.model.defaultBet,
                  selectedBet: this.model.selectedBetAmount,
                };
                void 0 !== this.gui &&
                  this.gui.updatePageSettings(e.slots.gui.PageIds.BET, d);
              }),
              (u.prototype.getAllowedBetsFromServerConfig = function () {
                return [1];
              }),
              (u.prototype.setClientBalanceToServerBalance = function (e) {
                void 0 === e && (e = !1),
                  this.model.setClientBalance(this.model.serverBalance),
                  this.updateAvailableBets(),
                  !0 === e && this.updateCashField();
              }),
              (u.prototype.updateCashField = function (e) {
                var t;
                return (
                  null == e &&
                    ((t =
                      null == this.model.currentFreeRoundProgram
                        ? this.model.clientBalance
                        : this.model.activeAccount.balance),
                    r(function (e) {
                      e.updateBalanceAmount(t);
                    }),
                    (e = t < 0 ? "" : n.globalFormatter.formatAmount2(t, t))),
                  this.languageSystem.setParameterValue("cash", e),
                  t
                );
              }),
              (u.prototype.updateCashFieldOnNewGameRoundSpinStart = function (
                e
              ) {
                void 0 === e && (e = !0),
                  e && this.model.deductFromClientBalance(),
                  this.sendBalanceChangedCallToJsBridge(),
                  this.updateCashField();
              }),
              (u.prototype.updateCashFieldOnFreeRoundStart = function () {
                var e = this.model.activeAccount.balance,
                  t = n.globalFormatter.formatAmount2(e, e);
                this.languageSystem.setParameterValue("cash", t),
                  r() && s.updateBalanceAmount(e);
              }),
              (u.prototype.sendBalanceChangedCallToJsBridge = function () {
                this.jsBridge.balanceChanged({
                  accountid: this.model.accountId,
                  balance: this.model.clientBalance,
                  currencyiso: this.model.currencyIso,
                  senderid: this.gameInstanceId,
                  real: this.model.getRealMoneyBalance(),
                  bonus: this.model.getBonusMoneyBalance(),
                });
              }),
              (u.prototype.sendBetChangedCallToJsBridge = function () {
                this.jsBridge.betChanged({
                  totalbet: this.model.placedBetAmount,
                  accountid: this.model.accountId,
                  currencyiso: this.model.playerCurrencyString,
                });
              }),
              (u.prototype.updateBetField = function (e) {
                var t = this.model.placedBetAmount;
                return (
                  (e = e || n.globalFormatter.formatAmount2(t, t)),
                  this.languageSystem.setParameterValue("totalBet", e),
                  r(function (e) {
                    e.updateBetAmount(t);
                  }),
                  t
                );
              }),
              (u.prototype.updateAutoPlaySpinsLeft = function (e) {
                this.languageSystem.setParameterValue("autoSpinsLeft", e);
              }),
              (u.prototype.updateFreeSpinsLeft = function (e) {
                this.languageSystem.setParameterValue(
                  "numberOfBonusSpinsLeft_uc",
                  e
                );
              }),
              (u.prototype.updateFreeRoundsLeft = function (e) {
                this.languageSystem.setParameterValue("freeRoundsLeft", e);
              }),
              (u.prototype.resizeGame = function () {
                var e = jQuery("#" + this.gameContainerElementId),
                  t = Math.min(
                    e.width() / this.width,
                    e.height() / this.height
                  );
                t != this._previousGameScale &&
                  (this.scale.setUserScale(t, t, 0, 0),
                  (this._previousGameScale = t));
              }),
              (u.prototype.vibrateDevice = function (e) {
                navigator.vibrate && this.allowVibrate && navigator.vibrate(e);
              }),
              (u.prototype.getBootStateClass = function () {
                throw "AbstractGame.getBootStateClass: Abstract method must be overriden in subclass.";
              }),
              (u.prototype.getPreloaderStateClass = function () {
                throw "AbstractGame.getPreloaderStateClass: Abstract method must be overriden in subclass.";
              }),
              (u.prototype.getGameFlowStateClass = function () {
                throw "AbstractGame.getGameFlowStateClass: Abstract method must be overriden in subclass.";
              }),
              (u.prototype.destroy = function () {
                e.GameInstanceManager.markGameAsDead(
                  this.initGameData.gameinstanceid
                ),
                  this.gui.lockScreen(!0),
                  this.gui.destroyGui(),
                  t.prototype.destroy.call(this);
              }),
              (u.prototype.getAssetUrl = function (e) {
                return this.getPathRelativeAssetPath(e);
              }),
              (u.prototype.shouldEnsureSampleRateMatching = function () {
                return null != navigator.userAgent.match(/iPhone|iPad/g);
              }),
              (u.prototype.update = function (e) {
                this.device.iOS &&
                  this.renderType === Phaser.WEBGL &&
                  PIXI.glContexts[0].flush(),
                  t.prototype.update.call(this, e);
              }),
              (u.prototype.updateBalanceOnError = function (e, t) {
                var n = this.model;
                n.updatePlayerAccounts(e),
                  n.updateTotalBalance(t),
                  n.setClientBalance(n.serverBalance),
                  this.updateAvailableBets(),
                  this.updateCashField(),
                  this.languageSystem.updateAllDirtyEntries(),
                  this.sendBalanceChangedCallToJsBridge();
              }),
              (u.prototype.getPaytableRelativeBetPhraseId = function () {
                var e = "payTablePageSymbolInfoBetText_vars_activeCurrency_nc";
                this.initGameData.currencyconfig &&
                  (e =
                    !1 !== this.initGameData.currencyconfig.showcurrency
                      ? "payTablePageSymbolInfoBetText_vars_activeCurrency_nc"
                      : "empty");
                return e;
              }),
              (u.prototype.boot = function () {
                var e = this;
                t.prototype.boot.call(this),
                  this.canRecoverFromWebGLContextLoss ||
                    this.canvas.addEventListener(
                      "webglcontextlost",
                      function () {
                        e.jsBridge.errorOccurred({
                          code: o.WEBGL_FATAL_CONTEXT_LOSS,
                          callstack: null,
                          clientData: null,
                          message:
                            "WebGL context lost and we could not recover.",
                        });
                      }
                    ),
                  this.setupPausePreventionLogic();
              }),
              (u.prototype.mayShowSplashScreenInEnglishOnly = function () {
                if (!1 === this.initGameData.splashscreensallowed) return !1;
                var e =
                  "en" ===
                  this.initGameData.langiso.split("-")[0].toLowerCase();
                switch (this.initGameData.regulator) {
                  case "DK":
                  case "SE":
                    return e;
                  default:
                    return !0;
                }
              }),
              (u.prototype.mayPause = function (e) {
                return null != e && (this._mayPause = e), this._mayPause;
              }),
              (u.prototype.setupPausePreventionLogic = function () {
                var e = this;
                this.onPause.add(function () {
                  0 == e._mayPause &&
                    setTimeout(function () {
                      e.gameResumed(null), e.state.preUpdate();
                    }, 0);
                });
              }),
              (u.prototype.mayCountUpCashField = function (e) {
                return !1;
              }),
              (u.prototype.runOnNextUpdate = function (e) {
                (this._nextUpdateTicker = this._nextUpdateTicker || i(this)),
                  this._nextUpdateTicker.onUpdate.addOnce(e);
              }),
              (u.prototype.getWebGLContext = function (e, t, n) {
                void 0 === n && (n = !1);
                var o = this.renderer.gl;
                return (
                  o ||
                  ((e = e || this.canvas),
                  (t = t || { alpha: !0 }),
                  n &&
                    !this.device.iOS &&
                    (o =
                      e.getContext("webgl2", t) ||
                      e.getContext("experimental-webgl2", t)),
                  (o =
                    o ||
                    e.getContext("webgl", t) ||
                    e.getContext("experimental-webgl", t)))
                );
              }),
              (u.prototype.createNextRoundStartGame = function () {
                this.nextRoundStartGate = new a(this);
              }),
              (u.prototype.setTweenMaxFps = function (e) {
                window.TweenMax && window.TweenMax.ticker.fps(60);
              }),
              (u.prototype.getRelativeGameRulesUrl = function (e, t, n) {
                return this.getPathRelativeAssetPath(
                  "assets/gamerules/" +
                    this.getGameRulesSubFolderByRTPVariant(n) +
                    t +
                    "/" +
                    e +
                    "/rules.html"
                );
              }),
              (u.prototype.getGameRulesSubFolderByRTPVariant = function (e) {
                return e + "/";
              }),
              (u.prototype.mayCelebrateWin = function (e) {
                return this.regulationManager.mayCelebrateWin(e);
              }),
              (u.prototype.mayAutoEnterFeatures = function (e) {
                return (
                  void 0 === e && (e = !1),
                  ("SE" !== this.initGameData.regulator || !0 !== e) &&
                    this.regulationManager.mayAutoEnterFeatures()
                );
              }),
              (u.prototype.mayAutoExitFeatures = function () {
                return this.regulationManager.mayAutoExitFeatures();
              }),
              u
            );
          })(e.AbstractGameBase);
        t.AbstractSlot = u;
      })(t.phaser || (t.phaser = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    var t, n, o, i;
    (t = e.sounds || (e.sounds = {})),
      (n = e.utils.UniqueSet),
      (o = (function () {
        function e(e, o) {
          (this._sounds = []),
            (this._id = o),
            (this._in = e.createGain()),
            (this._out = e.createGain()),
            (this._chain = new t.AudioNodeChain(e, o + "_internal")),
            this._in.connect(this._chain.in),
            this._chain.out.connect(this._out),
            (this.children = new n());
        }
        return (
          Object.defineProperty(e.prototype, "parent", {
            get: function () {
              return this._parent;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "id", {
            get: function () {
              return this._id;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "in", {
            get: function () {
              return this._in;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "out", {
            get: function () {
              return this._out;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "chain", {
            get: function () {
              return this._chain;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "muted", {
            get: function () {
              return 0 === this._in.gain.value;
            },
            set: function (e) {
              this._in.gain.value = e ? 0 : 1;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "volume", {
            get: function () {
              return this._out.gain.value;
            },
            set: function (e) {
              this._out.gain.value = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })()),
      (i = (function () {
        function e(e) {
          var t = this;
          if (!1 === e.sound.usingWebAudio)
            throw new Error(
              "You cannot create a WebAudioSoundGroupManager if the game is not running in Web Audio mode."
            );
          var n = e.sound.context;
          (this._ctx = n),
            (this._ss = e.soundSystem),
            (this._global = new o(this._ctx, "global")),
            this._global.out.connect(e.sound.masterGain),
            (this._groups = {});
          var i = (this._soundIdToGroup = {}),
            a = (this._soundIdToTrim = {});
          this._ss.onSoundPlaying.add(function (n) {
            var o = e.soundSystem.getPhaserSound(n),
              r = n.trim();
            !0 === a[r] && (n = r),
              i[n] && t._attachSoundToGroup(o, n, t.getGroup(i[n]));
          });
        }
        return (
          Object.defineProperty(e.prototype, "muted", {
            get: function () {
              return this._global.muted;
            },
            set: function (e) {
              this._global.muted = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "volume", {
            get: function () {
              return this._global.volume;
            },
            set: function (e) {
              this._global.volume = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.getGroup = function (e) {
            return (
              null == this._groups[e] &&
                ((this._groups[e] = new o(this._ctx, e)),
                this._groups[e].out.connect(this._global.in)),
              this._groups[e]
            );
          }),
          (e.prototype._getGroup = function (e) {
            return this._groups[e] || null;
          }),
          (e.prototype.getAssignedGroups = function (e) {
            var t = this,
              n = {};
            return (
              e.forEach(function (e) {
                n[e] = t._getGroup(e);
              }),
              n
            );
          }),
          (e.prototype.assignSoundsToGroup = function (e) {
            var t = {};
            for (var n in e) {
              var o = this.assignSoundToGroup(n, e[n]);
              t[n] = o;
            }
            return t;
          }),
          (e.prototype.assignSoundToGroup = function (e, t, n) {
            void 0 === n && (n = !0),
              this._soundIdToGroup[e] != t && this.removeSoundFromGroup(e),
              (this._soundIdToGroup[e] = t),
              (this._soundIdToTrim[e] = n);
            var o = this.getGroup(t),
              i = this._ss.getPhaserSound(e);
            return i && this._attachSoundToGroup(i, e, o), o;
          }),
          (e.prototype.getGroupForSoundId = function (e) {
            return this._getGroup(this._soundIdToGroup[e]);
          }),
          (e.prototype.removeSoundFromGroup = function (e) {
            var t = this._getGroup(this._soundIdToGroup[e]);
            t &&
              (delete this._soundIdToGroup[e],
              delete this._soundIdToTrim[e],
              this._detachSoundFromGroup(e, t));
          }),
          (e.prototype.connectGroups = function (e, t, o) {
            void 0 === o && (o = !0);
            var i = this.getGroup(e),
              a = this.getGroup(t);
            o && (i.out.disconnect(), (i.children = new n())),
              i.out.connect(a.in),
              a.children.push(e),
              (i._parent = a);
          }),
          (e.prototype.disconnectGroups = function (e, t) {
            var n = this._getGroup(e),
              o = this._getGroup(t);
            try {
              if (n.parent != o) throw new Error();
              (n._parent = null),
                o.children.removeElement(t),
                n.out.disconnect(o.in);
            } catch (e) {}
          }),
          (e.prototype.stopSoundsInGroup = function (e, t) {
            var n = this;
            void 0 === t && (t = !1);
            var o = this.getGroup(e);
            if (
              (o._sounds.concat().forEach(function (e) {
                n._ss.stopSound(e.id);
              }),
              t)
            )
              for (var i = 0; i < o.children.length; i++) {
                var a = o.children.getAt(i);
                this.stopSoundsInGroup(a, !0);
              }
          }),
          (e.prototype.fadeGroup = function (e, t, n, o, i) {
            void 0 === n && (n = 0),
              void 0 === o && (o = !1),
              void 0 === i && (i = null);
            var a = this;
            this.abortFade(e);
            var r = this.getGroup(e);
            window.TweenMax
              ? (r.tween = TweenMax.to(r, t, {
                  volume: n,
                  onComplete: function () {
                    o && a.stopSoundsInGroup(e, !1), i && i();
                  },
                }))
              : ((r.volume = n), o && this.stopSoundsInGroup(e));
          }),
          (e.prototype.abortFade = function (e) {
            var t = this.getGroup(e);
            t.tween &&
              ((t.tween.vars.onComplete = function () {}),
              t.tween.kill(),
              (t.tween = void 0));
          }),
          (e.prototype._attachSoundToGroup = function (e, t, n) {
            if (!this._isSoundAttachedToGroup(e, n)) {
              var o = e.gainNode;
              o.disconnect(),
                o.connect(n.in),
                n._sounds.push({ sound: e, id: t });
            }
          }),
          (e.prototype._detachSoundFromGroup = function (e, t) {
            t._sounds = t._sounds.filter(function (t) {
              if (t.id === e) {
                var n = t.sound.gainNode;
                return n.disconnect(), n.connect(t.sound.masterGainNode), !1;
              }
              return !0;
            });
          }),
          (e.prototype._isSoundAttachedToGroup = function (e, t) {
            for (var n = 0; n < t._sounds.length; n++)
              if (t._sounds[n].sound === e) return !0;
            return !1;
          }),
          e
        );
      })()),
      (t.WebAudioSoundGroupManager = i);
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n,
        o = e.utils.linkedlist.createDblLinkedList,
        i = e.utils.Signal1;
      function a(e, t, o, i, a) {
        void 0 === a && (a = !0),
          n ||
            (function (e) {
              (n = {}),
                e.onSoundPlaying.add(function (e) {
                  n[e] &&
                    n[e].forEach(function (t) {
                      t(e);
                    });
                });
            })(e);
        var r = e.getPhaserSound(t);
        if (null == r || !r.isPlaying || (i(t), !a)) {
          if (a) {
            var s = i;
            i = function (e) {
              s(e);
              var t = n[e],
                o = t.indexOf(i);
              -1 !== o && t.splice(o, 1), 0 === n[e].length && delete n[e];
            };
          }
          (n[t] = n[t] || []).push(i);
        }
      }
      function r(e, t) {
        return { in: t, out: t, id: e };
      }
      (t.invokeFunctionWhenOrIfSoundIsPlaying = a),
        (t.createListenerForSpecificSound = function (e, t, n) {
          return (
            void 0 === n && (n = !0),
            function (o) {
              n && (o = o.trim()), o === e && t(o);
            }
          );
        }),
        (t.addListenerForSpecificSoundPlaying = function (e, t, n, o, i) {
          void 0 === o && (o = !1), void 0 === i && (i = !1);
          var a = function (i) {
            i === t && (o && e.onSoundPlaying.remove(a), n(i));
          };
          return e.onSoundPlaying.add(a), a;
        }),
        (t.addListenerForSpecificSoundComplete = function (e, t, n, o) {
          void 0 === o && (o = !1);
          var i = function (a) {
            a === t && (o && e.onSoundPlaying.remove(i), n(a));
          };
          return e.onSoundPlaying.add(i), i;
        }),
        (t.addListenerForSpecificSoundsPlaying = function (e, t, n, o) {
          void 0 === o && (o = !1);
          var i = function (a) {
            null != a.match(t) && (o && e.onSoundPlaying.remove(i), n(a));
          };
          return e.onSoundPlaying.add(i), i;
        }),
        (t.attachChainWhenSpecificSoundIsPlaying = function (e, t, n) {
          a(
            e,
            n,
            0,
            function () {
              u.attach(t, e.getPhaserSound(n));
            },
            !0
          );
        }),
        (t.createAudioNodeChainElement = r),
        (t.connnectAudioNodeToPhaserSoundDestinationNode = function (e, t) {
          e.connect(t.gainNode);
        }),
        (t.connnectPhaserSoundToExternalAudioNode = function (e, t) {
          var n = e._sound;
          n.disconnect(), (e.externalNode = t), n.connect(t);
        }),
        (t.disconnectPhaserSoundFromExternalAudioNode = function (e) {
          var t = e._sound;
          t.disconnect(), (e.externalNode = null), t.connect(e.gainNode);
        });
      var s = (function () {
        function e(e) {
          this._game = e;
        }
        return (
          (e.prototype.attachChain = function (t) {
            var n = this,
              o = this._game.soundSystem,
              i = this._game.sound.context;
            return (
              null == this.getChain(t) &&
                ((e._map[t] = new u(i, t)),
                a(o, t, 0, function () {
                  var e = o.getPhaserSound(t),
                    i = n.getChain(t);
                  i && (u.attach(i, e), n._stopFade(i, 1));
                })),
              this.getChain(t)
            );
          }),
          (e.prototype.detachChain = function (t) {
            var n = this.getChain(t);
            if (n) {
              delete e._map[t];
              var o = this._game.soundSystem.getPhaserSound(t);
              o && u.detach(n, o);
            }
          }),
          (e.prototype.getChain = function (t) {
            return e._map[t] || null;
          }),
          (e.prototype._stopFade = function (e, t) {
            TweenMax.killTweensOf(e, { volume: !0 }), (e.volume = t);
          }),
          (e._map = {}),
          e
        );
      })();
      t.AudioNodeChainMap = s;
      var u = (function () {
        function e(e, t) {
          (this._id = t),
            (this._ctx = e),
            (this._in = e.createGain()),
            (this._out = e.createGain()),
            this._in.connect(this.out),
            (this._list = o()),
            (this._nodeMap = {}),
            (this.attached = new i()),
            (this.detached = new i());
        }
        return (
          Object.defineProperty(e.prototype, "id", {
            get: function () {
              return this._id;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "volume", {
            get: function () {
              return this._out.gain.value;
            },
            set: function (e) {
              this._out.gain.value = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "muted", {
            get: function () {
              return 0 == this._in.gain.value;
            },
            set: function (e) {
              this._in.gain.value = !0 === e ? 0 : 1;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.convertAudioNodeToChainElement = function (e, t) {
            return r(e, t);
          }),
          (e.attach = function (t, n) {
            e.detach(t, n);
            var o = n._sound;
            o && (o.disconnect(), o.connect(t.in)),
              t.out.connect(n.gainNode),
              (n.externalNode = t.in),
              (t._attachedSound = n),
              t.attached.dispatch(t);
          }),
          (e.detach = function (e, t) {
            var n = t._sound;
            n && (n.disconnect(), n.connect(t.gainNode)),
              (t.externalNode = null),
              (e._attachedSound = null),
              e.detached.dispatch(e);
          }),
          Object.defineProperty(e.prototype, "in", {
            get: function () {
              return this._in;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "out", {
            get: function () {
              return this._out;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "sound", {
            get: function () {
              return this._attachedSound;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.add = function (e) {
            if (null == e || null == e.in || null == e.out)
              throw new Error(
                "Invalid argument error. The audio node chain element to add must not be null nor have null-connectors."
              );
            if (null == e.id)
              throw new Error(
                "Invalid argument error. The audio node chain element must have a valid ID."
              );
            if (this._nodeMap[e.id])
              throw new Error(
                "Invalid argument error. The audio node chain element must have a for the chain unique ID."
              );
            var t = this._list.at(this._list.length - 1);
            return (
              t || (t = { in: null, out: this._in, id: void 0 }),
              t.out.disconnect(),
              t.out.connect(e.in),
              e.out.connect(this._out),
              this._list.add(e),
              (this._nodeMap[e.id] = e),
              this
            );
          }),
          (e.prototype.remove = function (e) {
            var t = this._list.find(e)[0];
            if (t) {
              var n = this._list.prev(t),
                o = this._list.next(t);
              e.out.disconnect(),
                n
                  ? (n.data.out.disconnect(),
                    o
                      ? n.data.out.connect(o.data.in)
                      : n.data.out.connect(this._out))
                  : (this._in.disconnect(),
                    o
                      ? this._in.connect(o.data.in)
                      : this._in.connect(this._out)),
                this._list.remove(t),
                (this._nodeMap[t.data.id] = null);
            }
            return this;
          }),
          (e.prototype.getElement = function (e) {
            return this._nodeMap[e];
          }),
          (e.prototype.clear = function () {
            return (
              (this._list = o()),
              this._in.disconnect(),
              this._in.connect(this.out),
              this
            );
          }),
          (e.prototype.insert = function (e, t) {
            var n = this._list.find(t)[0];
            if (!n)
              throw new Error(
                "Could not find 'after'-element in the audio element chain."
              );
            n.data.out.disconnect(), n.data.out.connect(e.in);
            var o = this._list.next(n);
            return (
              (e.out = o ? o.data.in : this._out), this._list.insert(e, n), this
            );
          }),
          (e.prototype.at = function (e) {
            var t = this._list.at(e);
            return t || null;
          }),
          (e.prototype.disable = function (e) {
            var t = this._list.find(e)[0];
            if (t) {
              var n = this._list.prev(t),
                o = this._list.next(t);
              e.out.disconnect();
              var i = n ? n.data : { in: null, out: this._in },
                a = o ? o.data : { in: this._out, out: null };
              i.out.disconnect(), i.out.connect(a.in);
            }
            return this;
          }),
          (e.prototype.enable = function (e) {
            var t = this._list.find(e)[0];
            if (t) {
              var n = this._list.prev(t),
                o = this._list.next(t),
                i = n ? n.data : { in: null, out: this._in },
                a = o ? o.data : { in: this._out, out: null };
              i.out.disconnect(), i.out.connect(e.in), e.out.connect(a.in);
            }
            return this;
          }),
          (e.prototype.forEach = function (e) {
            this._list.forEach(function (t, n) {
              e(t);
            });
          }),
          Object.defineProperty(e.prototype, "length", {
            get: function () {
              return this._list.length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
      (t.AudioNodeChain = u),
        (t.createGainSynchronizer = function (e) {
          var t,
            n = {},
            o = 1,
            i = !1,
            a = e.webAudioUtils.audioNodeChainMap,
            s = function (e) {
              t.forEach(function (t) {
                n[t].in.gain.value = e;
              });
            };
          return {
            add: function (s, u) {
              void 0 === u && (u = !0);
              var l = a.attachChain(s),
                d = e.sound.context.createGain();
              d.gain.value = o * (i ? 0 : 1);
              var c = r(s, d);
              (n[s] = c), l.add(c), (t = Object.keys(n));
            },
            remove: function (e) {
              var o = a.getChain(e);
              if (o) {
                var i = n[e];
                o.remove(i), delete n[e], (t = Object.keys(n));
              }
            },
            get volume() {
              return o;
            },
            set volume(e) {
              (o = e), i || s(e);
            },
            get muted() {
              return i;
            },
            set muted(e) {
              (i = e), s(e ? 0 : o);
            },
          };
        });
    })(e.sounds || (e.sounds = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        function n(e, t) {
          var n = {},
            o = function () {
              var o = i;
              "function" == typeof e[i]
                ? (n[i] = function () {
                    var n = e[o].apply(e, arguments);
                    return t(n), n;
                  })
                : (n[i] = e[i]);
            };
          for (var i in e) o();
          return n;
        }
        (t.wrapFactoryInThenSetter = n),
          (t.createSequence = function (t, o) {
            var i, a;
            (i =
              "string" == typeof o
                ? { id: o, skippable: !0 }
                : e.utils.combineObject(
                    {
                      skippable: !0,
                      id: void 0,
                      onabort: null,
                      oncomplete: null,
                      onskip: null,
                    },
                    o
                  )),
              (t = t || e.utils.sequence2.createSequenceItemFactory());
            var r,
              s,
              u = !1,
              l = !1,
              d = !1,
              c = function (e) {
                (p = !1),
                  l ||
                    ((l = !0),
                    u &&
                      (d && a.onskip
                        ? a.onskip(e)
                        : a.oncomplete && a.oncomplete(e),
                      r(e)));
              },
              h = !1,
              p = !1,
              m = null;
            return (
              window.Promise
                ? (new Promise(function (e) {
                    r = e;
                  }),
                  (s = function (e, t) {
                    return new Promise(function (n) {
                      (r = n), m.run(e, t, d);
                    });
                  }))
                : (s = function (e, t) {
                    return (
                      m.run(e, t, d),
                      {
                        then: function (e, t) {
                          throw new Error(
                            "Promises are not supported by this browser but the game requires it. You should add a check to the startup sequence (see addRequiredBrowserFeatureSetForGame)."
                          );
                        },
                        catch: function (e) {
                          throw new Error(
                            "Promises are not supported by this browser but the game requires it. You should add a check to the startup sequence (see addRequiredBrowserFeatureSetForGame)."
                          );
                        },
                      }
                    );
                  }),
              (a = {
                run: function (e) {
                  if (p)
                    throw new Error(
                      "Cannot start a sequence that is already running. Wait for it to complete or call abort on it before running again."
                    );
                  return (
                    (d = !1), (l = !1), (u = !0), (h = !0), (p = !0), s(c, e)
                  );
                },
                abort: function () {
                  if (((p = !1), (u = !1), (d = !1), h)) {
                    h = !1;
                    m.abort(function () {
                      a.onabort && a.onabort();
                    });
                  } else a.onabort && a.onabort();
                },
                conf: function (t) {
                  return e.utils.copyProperties(a, t), a;
                },
                skip: function () {
                  p && ((d = i.skippable), m.skip());
                },
                status: function () {
                  var e = { startWith: {} };
                  return m.status(e.startWith), e;
                },
                id: i.id,
                onabort: null,
                onskip: null,
                startWith: null,
                oncomplete: null,
              }),
              (m = (function (e) {
                var t,
                  o,
                  i,
                  a = !1,
                  r = n(e, function (e) {
                    (t = e), (i.then = null), (r = null);
                  });
                return (i = {
                  run: function (e, n) {
                    (a = !0), t ? t.run(e, n, !1) : e(n);
                  },
                  abort: function (e) {
                    a && t
                      ? t.abort(function () {
                          o && o(), e();
                        })
                      : (o && o(), e());
                  },
                  skip: function () {
                    a && t && t.skip();
                  },
                  onaborting: function (e) {
                    throw new Error("Cannot set onaborting on the entry item.");
                  },
                  status: function (e) {
                    return t.status(e);
                  },
                  conf: function () {
                    throw new Error(
                      "Cannot configure the start item of a sequence."
                    );
                  },
                  set onabort(e) {
                    o = e;
                  },
                  then: r,
                });
              })(t)),
              (a.startWith = m.then),
              a
            );
          });
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {}
        return (
          (e.iDeviceModel = function () {
            var e, t;
            t = (e = [
              [1280, 1762, 1920, 1280, 320, 480, 2, "iPhone 4"],
              [1280, 2114, 2272, 1280, 320, 568, 2, "iPhone 5 or 5s"],
              [1500, 2510, 2668, 1500, 375, 667, 2, "iPhone 6"],
              [1656, 2785, 2944, 1656, 414, 736, 3, "iPhone 6 plus"],
              [3072, 3936, 4096, 2912, 768, 1024, 1, "iPad 2"],
              [3072, 3938, 4096, 2914, 768, 1024, 2, "iPad Air or Retina"],
              [2048, 2604, 2732, 1920, 1024, 1366, 2, "iPad Pro"],
            ]).length;
            for (var n = ""; t--; )
              if (
                screen.width === e[t][4] &&
                screen.height === e[t][5] &&
                window.devicePixelRatio === e[t][6]
              ) {
                void 0 !== e[t] && (n = e[t][7]);
                break;
              }
            return n;
          }),
          (e.isIosChrome = function () {
            var e = !1;
            return navigator.userAgent.match("CriOS") && (e = !0), e;
          }),
          (e.isIosUiWebView = function () {
            return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              navigator.userAgent
            );
          }),
          (e.isIosFireFox = function () {
            var e = !1;
            return navigator.userAgent.match("FxiOS") && (e = !0), e;
          }),
          e
        );
      })();
      e.iDeviceModelChecker = t;
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        !(function (t) {
          var n = e.utils.getIosVersion,
            o = e.constants.OrientationEnum,
            i = e.utils.isLikelyToHaveIOSNotch;
          function a(e) {
            return window.innerHeight > window.innerWidth && !e.usedesktopgui;
          }
          function r(e, t, n) {
            if (null != t.gui)
              if (document.fullscreenElement === document.body) {
                var i = e.innerHeight,
                  r = e.innerWidth,
                  s = 9 / 16;
                i / s < r && (r = i / s);
                var l = 1280 / r,
                  d = 720 / i,
                  c = r / 1280,
                  h = i / 720,
                  p = new Phaser.Rectangle(0, 0, r, i),
                  m = jQuery("#gameWrapper"),
                  g = Math.min(c, h);
                Math.min(l, d);
                m.css({ width: 1280 * g }),
                  m.css({ height: 720 * g }),
                  m.css("-webkit-transform", "scale(" + g + ")"),
                  m.css("-webkit-transform-origin", "0 0 0px");
                var f = jQuery("#" + t.gameElementId);
                if (
                  (jQuery("#centeringContainer").removeClass(
                    "screenCenteredElement"
                  ),
                  a(t.initGameData))
                )
                  jQuery("#centeringContainer").addClass(
                    "screenTopAlignedElement"
                  ),
                    t.gui.setGameTopMargin(0),
                    f.css("margin-top", "0px"),
                    t.gui.layout(!0, o.PORTRAIT, p, n);
                else {
                  jQuery("#centeringContainer").addClass(
                    "screenCenteredElement"
                  ),
                    jQuery("#centeringContainer").removeClass(
                      "screenTopAlignedElement"
                    );
                  var _ = (i - r * s) / 2;
                  (_ += 18),
                    t.gui.setGameTopMargin(_),
                    f.css("margin-top", _ + "px"),
                    t.gui.layout(!0, o.LANDSCAPE, p, n);
                }
              } else u(e, t, n);
          }
          function s(e, t, n) {
            if (null != t.gui) {
              var r = e.innerHeight,
                s = e.innerWidth,
                u = 9 / 16;
              r / u < s && (s = r / u);
              var l = s / 1280,
                d = r / 720,
                c = new Phaser.Rectangle(0, 0, s, r),
                h = jQuery("#gameWrapper"),
                p = Math.min(l, d),
                m = a(t.initGameData),
                g = { x: 0, y: 0, z: 0 };
              i()
                ? ((p *= (r - 2) / r),
                  (p *= (r - 6) / r),
                  m ? (g.x = 2) : ((g.x = (e.innerWidth - s) / 2), (g.y = -2)))
                : m || (g.x = (e.innerWidth - s) / 2),
                h.css(
                  "-webkit-transform-origin",
                  g.x + "px " + g.y + "px " + g.z + "px"
                ),
                h.css("-webkit-transform", "scale(" + p + ")"),
                h.css({ width: 1280 * p }),
                h.css({ height: 720 * p });
              var f = jQuery("#" + t.gameElementId);
              if (
                (jQuery("#centeringContainer").removeClass(
                  "screenCenteredElement"
                ),
                m)
              )
                jQuery("#centeringContainer").addClass(
                  "screenTopAlignedElement"
                ),
                  t.gui.setGameTopMargin(0),
                  f.css("margin-top", "0px"),
                  t.gui.layout(!0, o.PORTRAIT, c, n);
              else {
                jQuery("#centeringContainer").addClass("screenCenteredElement"),
                  jQuery("#centeringContainer").removeClass(
                    "screenTopAlignedElement"
                  );
                var _ = (r - s * u) / 2;
                t.gui.setGameTopMargin(_),
                  f.css("margin-top", _ + "px"),
                  t.gui.layout(!0, o.LANDSCAPE, c, n);
              }
            }
          }
          function u(e, t, n) {
            if (null != t.gui) {
              var i = e.innerHeight,
                r = e.innerWidth,
                s = 9 / 16;
              i / s < r && (r = i / s);
              var u = r / 1280,
                l = i / 720,
                d = Math.min(u, l),
                c = new Phaser.Rectangle(0, 0, r, i),
                h = jQuery("#gameWrapper"),
                p = 1280 * d;
              h.css({ width: p });
              var m = 720 * d;
              h.css({ height: m }),
                h.css("-webkit-transform", "scale(" + d + ")"),
                h.css("-webkit-transform-origin", "0 0 0px");
              var g = jQuery("#" + t.gameElementId);
              if (
                (jQuery("#centeringContainer").removeClass(
                  "screenCenteredElement"
                ),
                a(t.initGameData))
              )
                jQuery("#centeringContainer").addClass(
                  "screenTopAlignedElement"
                ),
                  t.gui.setGameTopMargin(0),
                  g.css("margin-top", "0px"),
                  t.gui.layout(!0, o.PORTRAIT, c, n);
              else {
                jQuery("#centeringContainer").addClass("screenCenteredElement"),
                  jQuery("#centeringContainer").removeClass(
                    "screenTopAlignedElement"
                  );
                var f = (i - r * s) / 2;
                t.gui.setGameTopMargin(f),
                  g.css("margin-top", f + "px"),
                  t.gui.layout(!0, o.LANDSCAPE, c, n);
              }
            }
          }
          function l(e, t, n) {
            var i = a(t.initGameData) ? o.PORTRAIT : o.LANDSCAPE;
            return null != t.gui && u(e, t, n), i;
          }
          function d(e, t, n) {
            var i = a(t.initGameData) ? o.PORTRAIT : o.LANDSCAPE;
            return null != t.gui && u(e, t, n), i;
          }
          function c(e, t, i) {
            var u = a(t.initGameData) ? o.PORTRAIT : o.LANDSCAPE;
            if (null == t.gui) return u;
            var l = e == e.top,
              d = n(!1) >= 12,
              c =
                document.fullscreenEnabled || document.webkitFullscreenEnabled,
              h = !1 !== t.initGameData.allowfullscreen;
            return l && h && c && d ? r(e, t, i) : s(e, t, i), u;
          }
          function h(e, t, i) {
            var u = a(t.initGameData) ? o.PORTRAIT : o.LANDSCAPE;
            if (null == t.gui) return u;
            var l = e == e.top,
              d = n(!1) >= 12,
              c =
                document.fullscreenEnabled || document.webkitFullscreenEnabled,
              h = !1 !== t.initGameData.allowfullscreen;
            return l && h && c && d ? r(e, t, i) : s(e, t, i), u;
          }
          (t.resizeForIPhone = function (e, t, n) {
            var r = a(t.initGameData) ? o.PORTRAIT : o.LANDSCAPE;
            if (null == t.gui) return r;
            var c = e == e.top,
              h =
                (document.fullscreenEnabled || document.webkitFullscreenEnabled,
                !1 !== t.initGameData.allowfullscreen);
            return (
              t.device.chrome
                ? l(e, t, n)
                : t.device.firefox
                ? d(e, t, n)
                : c && h
                ? (function (e, t, n) {
                    if (null == t.gui) return;
                    var r = jQuery("#fullscreenMask");
                    if (null == r) return void s(e, t, n);
                    var u = e.innerHeight,
                      l = e.innerWidth;
                    r.css({ width: l + "px" }), r.css({ height: u + "px" });
                    var d = 9 / 16;
                    u / d < l && (l = u / d);
                    var c = l / 1280,
                      h = u / 720,
                      p = new Phaser.Rectangle(0, 0, l, u),
                      m = jQuery("#gameWrapper"),
                      g = Math.min(c, h),
                      f = a(t.initGameData);
                    m.css({ width: 1280 * g }), m.css({ height: 720 * g });
                    var _ = { x: 0, y: 0, z: 0 };
                    i()
                      ? ((g *= (u - 2) / u),
                        (g *= (u - 6) / u),
                        m.css("-webkit-transform", "scale(" + g + ")"),
                        f || (_.x = (3 * (e.innerWidth - l)) / 4),
                        (_.y = -2))
                      : (f || (_.x = (e.innerWidth - l) / 2),
                        m.css("-webkit-transform", "scale(" + g + ")"));
                    m.css(
                      "-webkit-transform-origin",
                      _.x + "px " + _.y + "px " + _.z + "px"
                    );
                    var v = jQuery("#content");
                    v.css({ height: u + "px" }), v.css({ width: l + "px" });
                    var y = jQuery("#" + t.gameElementId);
                    if (
                      (jQuery("#centeringContainer").removeClass(
                        "screenCenteredElement"
                      ),
                      f)
                    )
                      jQuery("#centeringContainer").addClass(
                        "screenTopAlignedElement"
                      ),
                        t.gui.setGameTopMargin(0),
                        y.css("margin-top", "0px"),
                        t.gui.layout(!0, o.PORTRAIT, p, n);
                    else {
                      jQuery("#centeringContainer").addClass(
                        "screenCenteredElement"
                      ),
                        jQuery("#centeringContainer").removeClass(
                          "screenTopAlignedElement"
                        );
                      var S = (u - l * d) / 2;
                      t.gui.setGameTopMargin(S),
                        y.css("margin-top", S + "px"),
                        t.gui.layout(!0, o.LANDSCAPE, p, n);
                    }
                  })(e, t, n)
                : u(e, t, n),
              r
            );
          }),
            (t.resizeForIPad = function (e, t, u) {
              var l = a(t.initGameData) ? o.PORTRAIT : o.LANDSCAPE;
              if (null == t.gui) return l;
              var d = e == e.top,
                p = n(!1) >= 12,
                m =
                  document.fullscreenEnabled ||
                  document.webkitFullscreenEnabled,
                g = !1 !== t.initGameData.allowfullscreen;
              return (
                d && g && m && p
                  ? r(e, t, u)
                  : t.device.chrome
                  ? c(e, t, u)
                  : t.device.firefox
                  ? h(e, t, u)
                  : d && g
                  ? (function (e, t, n) {
                      if (null == t.gui) return;
                      var r = jQuery("#fullscreenMask");
                      if (null == r) return void s(e, t, n);
                      var u = e.innerHeight,
                        l = e.innerWidth,
                        d = 9 / 16;
                      u / d < l && (l = u / d);
                      r.css({ width: l + "px" }), r.css({ height: u + "px" });
                      var c = l / 1280,
                        h = u / 720,
                        p = new Phaser.Rectangle(0, 0, l, u),
                        m = jQuery("#gameWrapper"),
                        g = Math.min(c, h),
                        f = jQuery("#content"),
                        _ = a(t.initGameData),
                        v = { x: 0, y: 0, z: 0 };
                      i()
                        ? ((g *= (u - 2) / u),
                          (g *= (u - 6) / u),
                          _
                            ? (v.x = 2)
                            : ((v.x = (e.innerWidth - l) / 2), (v.y = -2)))
                        : _ || (v.x = (e.innerWidth - l) / 2);
                      m.css("-webkit-transform", "scale(" + g + ")"),
                        m.css(
                          "-webkit-transform-origin",
                          v.x + "px " + v.y + "px " + v.z + "px"
                        ),
                        f.css({ height: u + "px" }),
                        f.css({ width: l + "px" });
                      var y = jQuery("#" + t.gameElementId);
                      if (
                        (jQuery("#centeringContainer").removeClass(
                          "screenCenteredElement"
                        ),
                        _)
                      )
                        jQuery("#centeringContainer").addClass(
                          "screenTopAlignedElement"
                        ),
                          t.gui.setGameTopMargin(0),
                          y.css("margin-top", "0px"),
                          t.gui.layout(!0, o.PORTRAIT, p, n);
                      else {
                        jQuery("#centeringContainer").addClass(
                          "screenCenteredElement"
                        ),
                          jQuery("#centeringContainer").removeClass(
                            "screenTopAlignedElement"
                          );
                        var S = (u - l * (9 / 16)) / 2;
                        (S += 18),
                          t.gui.setGameTopMargin(S),
                          y.css("margin-top", S + "px"),
                          t.gui.layout(!0, o.LANDSCAPE, p, n);
                      }
                    })(e, t, u)
                  : s(e, t, u),
                l
              );
            }),
            (t.resizeForWebView = function (e, t, n) {
              var i = a(t.initGameData) ? o.PORTRAIT : o.LANDSCAPE;
              return t.device.iPad ? s(e, t, n) : u(e, t, n), i;
            }),
            (t.resizeForChromeOnIPhone = l),
            (t.resizeForFireFoxOnIPhone = d),
            (t.resizeForChromeOnIPad = c),
            (t.resizeForFireFoxOnIPad = h);
        })(t.resizing || (t.resizing = {}));
      })(t.utils || (t.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {}));
var AbstractSlot = tk_common.slots.phaser.AbstractSlot;
!(function (e) {
  !(function (e) {
    !(function (e) {
      var t = (function () {
        function e(e) {
          this._game = e;
        }
        return (
          (e.prototype.recoverFromErrorOnNewGameRound = function (e) {
            var t = this;
            this.restoreBalances(),
              this.restoreViewAfterNewGameRoundError(function () {
                (t._game.pausedByClient = !1),
                  t.restoreModeAfterNewGameRoundError(),
                  e();
              });
          }),
          (e.prototype.restoreBalances = function () {
            this._game.setClientBalanceToServerBalance(!0),
              this._game.updateTotalWinField(""),
              this._game.sendBalanceChangedCallToJsBridge();
          }),
          e
        );
      })();
      e.RecoverFromErrorHelper = t;
    })(e.utils || (e.utils = {}));
  })(e.slots || (e.slots = {}));
})(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        !(function (t) {
          var n = e.constants.OrientationEnum;
          function o(e) {
            return window.innerHeight > window.innerWidth && !e.usedesktopgui;
          }
          t.resizeForAndroid = function (e, t, i) {
            var a = o(t.initGameData) ? n.PORTRAIT : n.LANDSCAPE;
            if (null != t.gui) {
              var r,
                s,
                u,
                l = e.innerWidth,
                d = e.innerHeight,
                c = 9 / 16;
              d / c < l && (l = d / c),
                (r = l / 1280),
                (s = d / 720),
                (u = Math.min(r, s));
              var h = new Phaser.Rectangle(0, 0, l, d),
                p = jQuery("#" + t.gameElementId),
                m = jQuery("#gameWrapper");
              m.css({ width: 1280 * u }), m.css({ height: 720 * u });
              var g = jQuery("body");
              if (
                (g.css({ height: d }),
                g.css({ width: l }),
                m.css("-webkit-transform", "scale(" + u + ")"),
                m.css("-webkit-transform-origin", "0 0 0px"),
                m.css("-moz-transform", "scale(" + u + ")"),
                m.css("-moz-transform-origin", "0 0 0px"),
                m.css("-ms-transform", "scale(" + u + ")"),
                m.css("-ms-transform-origin", "0 0 0px"),
                jQuery("#centeringContainer").removeClass(
                  "screenCenteredElement"
                ),
                o(t.initGameData))
              )
                jQuery("#centeringContainer").addClass(
                  "screenTopAlignedElement"
                ),
                  t.gui.setGameTopMargin(0),
                  p.css("margin-top", "0px"),
                  t.gui.layout(!0, n.PORTRAIT, h, i);
              else {
                jQuery("#centeringContainer").addClass("screenCenteredElement"),
                  jQuery("#centeringContainer").removeClass(
                    "screenTopAlignedElement"
                  );
                var f = ((d - l * c) / 2) * (1 / u);
                t.gui.setGameTopMargin(f),
                  p.css("margin-top", f + "px"),
                  t.gui.layout(!0, n.LANDSCAPE, h, i);
              }
              return a;
            }
          };
        })(t.resizing || (t.resizing = {}));
      })(t.utils || (t.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        !(function (t) {
          var n = e.constants.OrientationEnum;
          function o(e) {
            return window.innerHeight > window.innerWidth && !e.usedesktopgui;
          }
          t.resizeForDesktop = function (e, t, i) {
            var a = o(t.initGameData) ? n.PORTRAIT : n.LANDSCAPE;
            if (null != t.gui) {
              var r,
                s,
                u,
                l = e.innerWidth,
                d = e.innerHeight,
                c = 9 / 16;
              d / c < l && (l = d / c),
                (r = l / 1280),
                (s = d / 720),
                (u = Math.min(r, s));
              var h = new Phaser.Rectangle(0, 0, l, d),
                p = jQuery("#" + t.gameElementId),
                m = jQuery("#gameWrapper");
              m.css({ width: 1280 * u }), m.css({ height: 720 * u });
              var g = jQuery("body");
              if (
                (g.css({ height: d }),
                g.css({ width: l }),
                m.css("-webkit-transform", "scale(" + u + ")"),
                m.css("-webkit-transform-origin", "0 0 0px"),
                m.css("-moz-transform", "scale(" + u + ")"),
                m.css("-moz-transform-origin", "0 0 0px"),
                m.css("-ms-transform", "scale(" + u + ")"),
                m.css("-ms-transform-origin", "0 0 0px"),
                jQuery("#centeringContainer").removeClass(
                  "screenCenteredElement"
                ),
                o(t.initGameData))
              )
                jQuery("#centeringContainer").addClass(
                  "screenTopAlignedElement"
                ),
                  t.gui.setGameTopMargin(0),
                  p.css("margin-top", "0px"),
                  t.gui.layout(!0, n.PORTRAIT, h, i);
              else {
                jQuery("#centeringContainer").addClass("screenCenteredElement"),
                  jQuery("#centeringContainer").removeClass(
                    "screenTopAlignedElement"
                  );
                var f = ((d - l * c) / 2) * (1 / u);
                t.gui.setGameTopMargin(f),
                  p.css("margin-top", f + "px"),
                  t.gui.layout(!0, n.LANDSCAPE, h, i);
              }
              return a;
            }
          };
        })(t.resizing || (t.resizing = {}));
      })(t.utils || (t.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = e.utils.getIosVersion,
          o = e.slots.utils.resizing.resizeForIPad,
          i = e.slots.utils.resizing.resizeForIPhone,
          a = e.slots.utils.resizing.resizeForAndroid,
          r = e.slots.utils.resizing.resizeForDesktop,
          s = e.slots.utils.resizing.resizeForWebView,
          u = e.slots.gui.isUsingGUI_2_0,
          l = (function (t) {
            function l() {
              return t.call(this) || this;
            }
            return (
              __extends(l, t),
              (l.prototype.create = function () {
                var e = this;
                this.setupResizeHandling(),
                  (this.game.canvas.oncontextmenu = this.handleRightClick);
                this.slotGame.device.iOS &&
                  document.body.addEventListener(
                    "webkitfullscreenchange",
                    function () {
                      e.resize(),
                        setTimeout(function () {
                          return e.resize();
                        }, 2e3);
                    }
                  );
                var t = this.slotGame;
                void 0 !== t &&
                  (t.layoutGui(!1),
                  (this.stage.disableVisibilityChange =
                    !t.initGameData.pauseiffocuslost));
              }),
              (l.prototype.shutdown = function () {
                this.destroy();
              }),
              (l.prototype.destroy = function () {
                this.tearDownResizeHandling();
              }),
              (l.prototype.goFullScreen = function () {
                try {
                  this.slotGame.initGameData.allowfullscreen &&
                    !1 === this.slotGame.device.iOS &&
                    ((this.game.scale.fullScreenTarget = document.body),
                    this.game.scale.startFullScreen(!1, !1));
                } catch (e) {}
              }),
              (l.prototype.handleRightClick = function (e) {
                e.preventDefault();
              }),
              (l.prototype.setupResizeHandling = function () {
                var e = this,
                  t = jQuery("#content"),
                  n = jQuery("#gameWrapper"),
                  o = jQuery("#fullscreenMask"),
                  i = jQuery("body");
                n.css("overflow", "visible"),
                  t.css("overflow", "visible"),
                  this.game.device.iOS
                    ? (o &&
                        (o.css({ width: screen.width + "px" }),
                        o.css({ height: screen.height + "px" })),
                      t.css({ height: screen.height + "px" }),
                      t.css({ width: screen.width + "px" }),
                      n.css({ width: screen.width + "px" }),
                      n.css({ height: screen.height + "px" }))
                    : (i.css({ height: window.innerHeight + "px" }),
                      i.css({ width: window.innerWidth + "px" }));
                var a = this;
                if (this.game.device.iOS) {
                  var r,
                    s = null;
                  window.addEventListener(
                    "orientationchange",
                    function () {
                      (r = 0),
                        clearInterval(s),
                        (s = setInterval(function () {
                          a.handleSizeChanged(),
                            ++r >= 10 && ((r = 0), clearInterval(s));
                        }, 100));
                    },
                    !1
                  );
                }
                this.game.scale.onSizeChange.add(this.handleSizeChanged, this),
                  (this._resizeDelegate = function () {
                    return e.handleSizeChanged();
                  }),
                  jQuery(window).resize(this._resizeDelegate);
              }),
              (l.prototype.handleSizeChanged = function () {
                var e = this;
                if ((this.resize(), this.game.device.iOS)) {
                  var t = void 0,
                    o = n(!1);
                  (t = o <= 10 ? 400 : o <= 12 ? 300 : 200),
                    setTimeout(function () {
                      return e.resize();
                    }, t);
                }
              }),
              (l.prototype.forceOrientation = function (t) {
                t === e.constants.OrientationEnum.PORTRAIT
                  ? (this.game.scale.forcePortrait = !0)
                  : (this.game.scale.forceLandscape = !0),
                  this.resize();
              }),
              (l.prototype.iDeviceModel = function () {
                return e.utils.iDeviceModelChecker.iDeviceModel();
              }),
              Object.defineProperty(l.prototype, "isIosChrome", {
                get: function () {
                  return e.utils.iDeviceModelChecker.isIosChrome();
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(l.prototype, "isIosFireFox", {
                get: function () {
                  return e.utils.iDeviceModelChecker.isIosFireFox();
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(l.prototype, "isIosOpera", {
                get: function () {
                  return (
                    navigator.userAgent.indexOf("Opera Mini") > -1 &&
                    this.game.device.iOS
                  );
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(l.prototype, "isIosUiWebView", {
                get: function () {
                  return e.utils.iDeviceModelChecker.isIosUiWebView();
                },
                enumerable: !0,
                configurable: !0,
              }),
              (l.prototype.resize = function (t, n, d, c) {
                var h = void 0 === l._resizeCache.innerHeight || !0 === c;
                if (
                  ((h =
                    (h =
                      (h =
                        (h =
                          (h =
                            (h =
                              (h =
                                h ||
                                l._resizeCache.innerHeight !==
                                  window.innerHeight) ||
                              l._resizeCache.innerWidth !==
                                window.innerWidth) ||
                            l._resizeCache.width !== n) ||
                          l._resizeCache.height !== d) ||
                        l._resizeCache.scaleToViewPort !== t) ||
                      l._resizeCache.orientation !== window.orientation) ||
                    l._resizeCache.gui !== this.slotGame.gui),
                  (l._resizeCache.width = n || l._resizeCache.width),
                  (l._resizeCache.height = d || l._resizeCache.height),
                  (l._resizeCache.scaleToViewPort =
                    t || l._resizeCache.scaleToViewport),
                  (l._resizeCache.innerHeight =
                    null == window.innerHeight
                      ? l._resizeCache.innerHeight
                      : window.innerHeight),
                  (l._resizeCache.innerWidth =
                    null == window.innerWidth
                      ? l._resizeCache.innerWidth
                      : window.innerWidth),
                  (l._resizeCache.orientation =
                    null == window.orientation
                      ? l._resizeCache.orientation
                      : window.orientation),
                  (l._resizeCache.gui =
                    this.slotGame.gui || l._resizeCache.gui),
                  !1 !== (h = h || u()))
                ) {
                  if (this.slotGame.device.webApp || this.isIosUiWebView) {
                    var p = s(window, this.slotGame, this.getGameBounds());
                    this.layoutScene(p, c);
                  } else if (this.slotGame.device.iPad) {
                    var m = o(window, this.slotGame, this.getGameBounds());
                    this.layoutScene(m, c);
                  } else if (this.slotGame.device.iPhone) {
                    var g = i(window, this.slotGame, this.getGameBounds());
                    this.layoutScene(g, c);
                  } else if (this.slotGame.device.desktop) {
                    var f = r(window, this.slotGame, this.getGameBounds());
                    this.layoutScene(f, c);
                  } else {
                    var _ = a(window, this.slotGame, this.getGameBounds());
                    this.layoutScene(_, c);
                  }
                  this.slotGame.sceneLayoutComplete.dispatch(n, d),
                    this.resizeGameSpecificElements(n, d),
                    this.slotGame.gameLayoutComplete.dispatch(n, d);
                } else {
                  var v =
                    window.innerHeight > window.innerWidth &&
                    !this.slotGame.initGameData.usedesktopgui;
                  this.layoutScene(
                    v
                      ? e.constants.OrientationEnum.PORTRAIT
                      : e.constants.OrientationEnum.LANDSCAPE,
                    c
                  );
                }
              }),
              (l.prototype.getGameBounds = function () {
                return this.scale.bounds;
              }),
              (l.prototype.tearDownResizeHandling = function () {
                this.game.scale.onSizeChange.remove(
                  this.handleSizeChanged,
                  this
                ),
                  jQuery(window).unbind("resize", this._resizeDelegate);
              }),
              Object.defineProperty(l.prototype, "slotGame", {
                get: function () {
                  return this.game;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (l.prototype.update = function () {
                var e = this.slotGame.getUpdateLogicDeltaTime
                    ? 1e3 * this.slotGame.getUpdateLogicDeltaTime()
                    : this.game.time.elapsedMS,
                  t = this.slotGame;
                null != t.languageSystem &&
                  t.languageSystem.updateAllDirtyEntries(),
                  this.updateInternal(e);
              }),
              (l.prototype.updateInternal = function (e) {}),
              (l.prototype.pause = function (e, t) {
                var n = this.slotGame;
                t = t || n.pausedByOperator;
                var o = (n.paused = e || t);
                null != n.requestMaker &&
                  (o ? n.requestMaker.pause() : n.requestMaker.resume());
              }),
              (l.prototype.layoutScene = function (e, t) {
                this.slotGame.sceneLayoutManager &&
                  this.slotGame.sceneLayoutManager.layoutScene(e, t);
              }),
              (l.prototype.getAssetUrl = function (e) {
                return this.slotGame.getAssetUrl(e);
              }),
              (l.prototype.resizeGameSpecificElements = function (e, t) {}),
              (l.prototype.handleErrorOccurred = function (t, n) {
                var o = this.slotGame;
                try {
                  t.code === tk.gs.rs.e.ServerErrorCodes.BLOCKED_JURISDICTION
                    ? o.dialogManager.showDialog(
                        e.slots.gui.DialogTypeEnum.BLOCKED_JURISDICTION
                      )
                    : t.code ===
                        tk.gs.rs.e.ServerErrorCodes.BROWSER_NOT_SUPPORTED ||
                      t.code ===
                        tk.gs.rs.e.ServerErrorCodes.DEVICE_NOT_SUPPORTED
                    ? o.dialogManager.showDialog(
                        e.slots.gui.DialogTypeEnum.DEVICE_NOT_SUPPORTED
                      )
                    : t.code ===
                        tk.gs.rs.e.ServerErrorCodes.INVALID_GAME_SESSION ||
                      t.code ===
                        tk.gs.rs.e.ServerErrorCodes.PLAYER_SESSION_EXPIRED
                    ? o.dialogManager.showDialog(
                        e.slots.gui.DialogTypeEnum.INVALID_PLAYER_SESSION
                      )
                    : o.dialogManager.showDialog(
                        e.slots.gui.DialogTypeEnum.TECHNICAL_ERROR
                      );
                } catch (e) {}
              }),
              (l.prototype.shouldActivateIosFullScreenSwipeManager =
                function () {
                  if (this.slotGame.initGameData.allowfullscreen) {
                    if (window === window.top) {
                      if (this.game.device.iPhone && n(!1) >= 13) return !1;
                      if (this.game.device.iPad) return !1;
                      var e = this.game.device.iOS && !this.game.device.webApp,
                        t =
                          this.game.device.safari ||
                          this.game.device.mobileSafari,
                        o = this.isIosChrome,
                        i = this.isIosFireFox,
                        a = this.game.device.opera || this.isIosOpera;
                      return e && t && !(o || i || a);
                    }
                    return !1;
                  }
                  return !1;
                }),
              (l._resizeCache = {}),
              l
            );
          })(Phaser.State);
        t.AbstractPhaserGameState = l;
      })(t.phaser || (t.phaser = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = e.slots.gui.isUsingGUI_2_0,
          o = (function (t) {
            function o() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              __extends(o, t),
              (o.prototype.create = function () {
                t.prototype.create.call(this), (this.slotGame.gameState = this);
                var e = this.slotGame;
                this.setupBasicJsBridgeHandling(e, e.jsBridge, e.gui),
                  this.buildGameScene(),
                  e.model.initGameData && this.setupFullscreenTrigger(),
                  e.device.desktop && e.model.initGameData.allowkeyboardinput
                    ? ((this._spaceKey = e.input.keyboard.addKey(
                        Phaser.Keyboard.SPACEBAR
                      )),
                      (this._userAllowsSpinUsingSpaceBar = !0))
                    : (this._userAllowsSpinUsingSpaceBar = !1),
                  this.addGuiListeners(),
                  !1 === e.initGameData.allowfullscreen &&
                    (this.slotGame.gui.activateIosFullScreenSwipeManager =
                      function () {}),
                  (e.pauseGameHandler =
                    this.handleGamePauseStateChanged.bind(this)),
                  (this._dialogButtonReroutingTarget = null);
              }),
              (o.prototype.destroy = function () {
                this.removeGuiListeners();
                var e = this.slotGame;
                (e.pauseGameHandler = void 0),
                  e.realityCheckManager.onShowRealityCheck.remove(
                    this.handleRealityCheckDialogRequested,
                    this
                  );
              }),
              (o.prototype.handleRealityCheckDialogRequested = function () {}),
              (o.prototype.setupBasicJsBridgeHandling = function (e, t, n) {
                t.onResizeGame.add(this.handleGameResizedByOperator, this),
                  t.onForceOrientation.add(
                    this.handleOrientationChangedByOperator,
                    this
                  );
              }),
              (o.prototype.handleGameResizedByOperator = function (e) {
                this.resize(!1, e.width, e.height);
              }),
              (o.prototype.handleOrientationChangedByOperator = function (t) {
                this.forceOrientation(
                  "landscape" === t.orientation
                    ? e.constants.OrientationEnum.LANDSCAPE
                    : e.constants.OrientationEnum.PORTRAIT
                );
              }),
              (o.prototype.buildGameScene = function () {}),
              (o.prototype.setupFullscreenTrigger = function () {}),
              (o.prototype.update = function () {
                null != this._spaceKey &&
                  this._spaceKey.justDown &&
                  this.handleKeyboardInput(Phaser.Keyboard.SPACEBAR),
                  t.prototype.update.call(this);
              }),
              (o.prototype.addGuiListeners = function () {
                var e = this.slotGame.gui;
                if (
                  (e.onGuiButtonClicked.add(this.handleGuiButtonClicked, this),
                  e.onDialogButtonClicked.add(
                    this.handleDialogButtonClicked,
                    this
                  ),
                  e.onControlPanelButtonClicked.add(
                    this.handleControlPanelButtonClicked,
                    this
                  ),
                  e.onStopOnFeatureWonValueChanged.add(
                    this.handleStopOnFeatureWonValueChanged,
                    this
                  ),
                  n())
                ) {
                  var t = e;
                  t.onSettingChanged.add(this.handleGuiSettingChanged, this),
                    t.onFeatureBought.add(this.handleFeatureBought, this),
                    t.onBetChanged.add(this.handleChangeBet, this);
                }
                this.setupPlayAudioOnInteractionListeners();
              }),
              (o.prototype.handleFeatureBought = function (e) {}),
              (o.prototype.handleChangeBet = function (e) {}),
              (o.prototype.removeGuiListeners = function () {
                var e = this.slotGame.gui;
                (e.onGuiButtonClicked.remove(this.handleGuiButtonClicked, this),
                e.onDialogButtonClicked.remove(
                  this.handleDialogButtonClicked,
                  this
                ),
                e.onControlPanelButtonClicked.remove(
                  this.handleControlPanelButtonClicked
                ),
                n()) &&
                  e.onSettingChanged.add(this.handleGuiSettingChanged, this);
                this.removeHandlePlayAudioOnInteractionListeners();
              }),
              (o.prototype.handleGuiSettingChanged = function (e, t) {
                switch (e) {
                  case "allowVibrations":
                    break;
                  case "spinUsingSpaceBar":
                    this._userAllowsSpinUsingSpaceBar = t;
                }
              }),
              (o.prototype.handleGuiButtonClicked = function (e, t) {
                var n = this.slotGame;
                void 0 !== n.keepAliveManager && n.keepAliveManager.keepAlive();
              }),
              (o.prototype.handleDialogButtonClicked = function (t, n, o) {
                for (var i = [], a = 3; a < arguments.length; a++)
                  i[a - 3] = arguments[a];
                if (t === e.slots.gui.DialogTypeEnum.OC)
                  this.handleOcDialogButtonClicked(
                    n,
                    o,
                    null != i ? i[0] : void 0
                  );
                else {
                  var r = this.slotGame;
                  void 0 !== r.keepAliveManager &&
                    r.keepAliveManager.keepAlive();
                }
              }),
              (o.prototype.handleControlPanelButtonClicked = function (e, t) {
                throw new Error(
                  "AbstractGameExecutionState.handleControlPanelButtonClicked: Method is abstract. Override and implement in subclass."
                );
              }),
              (o.prototype.handleStopOnFeatureWonValueChanged = function (e) {
                throw new Error(
                  "AbstractGameExecutionState.handleStopOnFeatureWonValueChanged: Method is abstract. Override and implement in subclass."
                );
              }),
              (o.prototype.handleGamePauseStateChanged = function (e, t) {
                throw new Error(
                  "AbstractGameExecutionState.handleGamePauseStateChanged: Method is abstract. Override and implement in subclass."
                );
              }),
              (o.prototype.handleOcDialogButtonClicked = function (e, t, n) {
                throw new Error(
                  "AbstractGameExecutionState.handleOcDialogButtonClicked: Method is abstract. Override and implement in subclass."
                );
              }),
              (o.prototype.handleKeyboardInput = function (e) {
                if (e === Phaser.Keyboard.SPACEBAR) {
                  var t = this.slotGame,
                    n = t.initGameData;
                  n.allowkeyboardinput &&
                    t.device.desktop &&
                    n.usedesktopgui &&
                    this._userAllowsSpinUsingSpaceBar &&
                    this.handleSpacebarPressed();
                }
              }),
              (o.prototype.handleSpacebarPressed = function () {}),
              (o.prototype.setupPlayAudioOnInteractionListeners = function () {
                var e = this.slotGame.gui;
                e.onGuiButtonClicked.add(
                  this.handlePlayAudioOnInteraction,
                  this
                ),
                  e.onFullScreenClick.add(
                    this.handlePlayAudioOnInteraction,
                    this
                  ),
                  e.onGuiAreaClicked.add(
                    this.handlePlayAudioOnInteraction,
                    this
                  );
              }),
              (o.prototype.handlePlayAudioOnInteraction = function () {
                var e = "dummyIosSound",
                  t = this.resumeNonClosedWebAudioContext();
                if ("running" !== t && "closed" !== t) {
                  var n = this.game.cache.getSound(e),
                    o = this.game.sound.touchLocked;
                  (this.game.sound.touchLocked = !1),
                    n &&
                      this.game.cache.isSoundReady(e) &&
                      this.game.sound.play(e, 0.001, !1),
                    (this.game.sound.touchLocked = o);
                }
              }),
              (o.prototype.resumeNonClosedWebAudioContext = function () {
                var e;
                if (this.game.sound.usingWebAudio) {
                  e = this.game.sound.context.state || "suspended";
                  var t = this.game.sound.context.resume();
                  t && t.catch(function () {});
                } else e = "notwebaudio";
                return e;
              }),
              (o.prototype.removeHandlePlayAudioOnInteractionListeners =
                function () {
                  if (this.slotGame) {
                    var e = this.slotGame.gui;
                    e &&
                      (e.onGuiButtonClicked.remove(
                        this.handlePlayAudioOnInteraction,
                        this
                      ),
                      e.onFullScreenClick.remove(
                        this.handlePlayAudioOnInteraction,
                        this
                      ),
                      e.onGuiAreaClicked.remove(
                        this.handlePlayAudioOnInteraction,
                        this
                      ));
                  }
                }),
              (o.prototype.setDialogButtonHandlingRerouting = function (e) {
                this._dialogButtonReroutingTarget = e;
              }),
              o
            );
          })(t.AbstractPhaserGameState);
        t.AbstractGameExecutionState = o;
      })(t.phaser || (t.phaser = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (n) {
        var o = tk.gs.rs.e.ServerErrorCodes,
          i = e.utils.AmountFormatter,
          a = e.slots.gui.PageIds,
          r = e.sounds.WebAudioSoundGroupManager,
          s = e.sounds.AudioNodeChainMap,
          u = e.utils.GlobalIdleStateEventQueue,
          l = e.utils.sequence2.createSequence,
          d = e.slots.gui.createCompleteGuiOverridesSet,
          c = e.slots.gui.createStartNewRoundBlockingOverrides,
          h = e.slots.gui.createGuiOverridesForPendingDialog,
          p = e.slots.gui.createGuiOverridesForActiveGameRound,
          m = e.slots.gui.isUsingGUI_2_0,
          g = (function (n) {
            function g(e) {
              var t = n.call(this) || this;
              return (
                (t._gameIsIdle = !1),
                (t._roundClosed = !0),
                (t._controlPanelVisible = !1),
                (t._loadingSounds = !1),
                (t._isRestoreState = !1),
                (t._presentingFinalWin = !0),
                (t._handleFinalWinPresentationPairs = 0),
                (t._readyForPlay = !1),
                (t._newRoundPending = !1),
                (t._game = e),
                t
              );
            }
            return (
              __extends(g, n),
              (g.prototype.updateInternal = function (e) {}),
              (g.prototype.create = function () {
                var t = this;
                n.prototype.create.call(this),
                  this.game.onPause.add(this.handlePhaserPaused, this),
                  this.game.onResume.add(this.handlePhaserResumed, this),
                  (this._game.regulationManager =
                    this.createRegulationManager()),
                  this._game.dialogManager.onDialogShowing.add(
                    this.handleDialogOpened,
                    this,
                    !1
                  ),
                  this._game.dialogManager.onDialogClosed.add(
                    this.handleDialogClosed,
                    this,
                    !1
                  ),
                  this._game.jsBridge.onChangeBet.add(
                    this.handleBetChangedByBridgeEvent,
                    this
                  ),
                  this._game.jsBridge.onUpdateSound.add(
                    this.handleUpdateSoundFromBridgeEvent,
                    this
                  ),
                  this._game.jsBridge.onPreventGamePlay.addOnce(
                    this.handlePreventGamePlay,
                    this
                  ),
                  this.createRoundStateAndContexts(),
                  this.setupStateListeners(),
                  this._game.sound.usingWebAudio && this.setupWebAudioUtils();
                var o = this.slotGame;
                o.realityCheckManager.onShowRealityCheck.add(
                  this.handleRealityCheckDialogRequested,
                  this
                ),
                  !0 === o.model.realPlay &&
                  !1 !== this.slotGame.initGameData.allowingamehistory
                    ? o.gui.setShowHistoryButton(!0)
                    : o.gui.setShowHistoryButton(!1),
                  this.addStartupGuiButtonOverrides(),
                  (this.time.desiredFps = 60),
                  e.utils.tweens.setLocalTweenMaxPauseChecker(function () {
                    return t._game.paused;
                  }),
                  this.setTweenMaxFps();
              }),
              (g.prototype.setTweenMaxFps = function () {
                this.slotGame.setTweenMaxFps();
              }),
              (g.prototype.setupWebAudioUtils = function () {
                var t = this;
                this._game.webAudioUtils ||
                  (this._game.webAudioUtils = {
                    soundGroupManager: new r(this._game),
                    audioNodeChainMap: new s(this._game),
                    utils: {
                      panSound: function (n, o) {
                        e.sounds.audiochainutils.setStereoPanning(
                          t._game,
                          n,
                          o
                        );
                      },
                    },
                  });
              }),
              (g.prototype.setupVibrationSupport = function () {
                var t = this,
                  n = this.slotGame,
                  o = (n.allowVibrate =
                    !1 === this._game.device.desktop &&
                    null != navigator.vibrate &&
                    !1 === this._game.device.iOS);
                n.gui.setShowVibrateButton(n.allowVibrate);
                try {
                  if (o && null != window.localStorage) {
                    if (n.initGameData.allowlocalstorage)
                      var i =
                        "false" !==
                        window.localStorage.getItem("vibrationEnabled");
                    else i = !0;
                    n.gui.setVibrateButtonChecked(i), (n.allowVibrate = i);
                  }
                } catch (e) {
                  n.allowVibrate = o;
                }
                o &&
                  n.gui.onGuiButtonClicked.add(function (n) {
                    n === e.slots.gui.GuiButtonIds.TOGGLE_VIBRATE &&
                      t.toggleVibrate();
                  });
              }),
              (g.prototype.toggleVibrate = function (e) {
                var t = this.slotGame;
                !1 === (e = null != e ? e : !t.allowVibrate)
                  ? (t.allowVibrate = !1)
                  : ((t.allowVibrate = !0), this.slotGame.vibrateDevice(100));
                try {
                  t.initGameData.allowlocalstorage &&
                    window.localStorage &&
                    window.localStorage.setItem(
                      "vibrationEnabled",
                      t.allowVibrate.toString().toLowerCase()
                    );
                } catch (e) {}
              }),
              (g.prototype.handleGuiSettingChanged = function (e, t) {
                switch (e) {
                  case "allowVibrations":
                    this.toggleVibrate(t);
                  case "spinUsingSpaceBar":
                    this._userAllowsSpinUsingSpaceBar = t;
                }
              }),
              (g.prototype.setupHandednessSupport = function () {
                this.slotGame;
              }),
              (g.prototype.setupFastPlaySupport = function () {
                var t,
                  n = this.slotGame,
                  o = 0 == n.initGameData.minimumtimebetweenrounds;
                (o = o && !1 !== n.initGameData.allowedanimationspeeds.fast),
                  n.gui.setAllowFastPlayButton(o);
                try {
                  if (o && null != window.localStorage) {
                    var i = void 0;
                    n.initGameData.allowlocalstorage &&
                      (i = window.localStorage.getItem("fastPlayEnabled")),
                      (t =
                        void 0 !== i &&
                        "fast" === n.initGameData.animationspeed),
                      n.gui.setFastPlayMode(t),
                      (n.fastPlay = t);
                  }
                } catch (e) {
                  (n.fastPlay = !1), n.gui.setFastPlayMode(!1);
                }
                var a = this._roundState;
                o &&
                  n.gui.onGuiButtonClicked.add(function (t) {
                    if (t === e.slots.gui.GuiButtonIds.FAST_PLAY) {
                      !0 === n.fastPlay ? (n.fastPlay = !1) : (n.fastPlay = !0),
                        n.gui.setFastPlayMode(n.fastPlay);
                      try {
                        window.localStorage &&
                          n.initGameData.allowlocalstorage &&
                          window.localStorage.setItem(
                            "fastPlayEnabled",
                            n.fastPlay.toString().toLowerCase()
                          );
                      } catch (e) {}
                      a.handleFastPlayModeChanged &&
                        a.handleFastPlayModeChanged(n.fastPlay);
                    }
                  });
              }),
              (g.prototype.handleWebGLRequiredButNotAvailable = function (
                e,
                t
              ) {
                (e.visible = !1),
                  this.activateSingleSpinContext(),
                  void 0 !== t && t.gameStarting(),
                  this.handleErrorOccurred({
                    callstack: null,
                    code: o.DEVICE_NOT_SUPPORTED,
                    message: "WebGL not available on this device.",
                  });
              }),
              (g.prototype.readyForPlay = function () {
                (this._gameIsIdle = !0),
                  (this._readyForPlay = !0),
                  g.removeStartupGuiButtonOverrides(this._game.gui),
                  this._game.sendBalanceChangedCallToJsBridge(),
                  this._game.model.hasRestoreState() || u.enableProcessing();
              }),
              (g.prototype.enterRestoreState = function (e) {
                (this._gameIsIdle = !1),
                  (this._presentingFinalWin = !1),
                  this._game.model.setPlayerMessageQueue([]),
                  g.removeStartupGuiButtonOverrides(this._game.gui),
                  this._game.gui.updateGuiButtonOverrides(
                    "commons:restoregameround",
                    p()
                  ),
                  this._game.model.isFreeRound(this._game.model.gameRound)
                    ? this.restoreFreeRound(e)
                    : this.restoreNormalRound(e);
              }),
              (g.prototype.handlePhaserPaused = function () {
                this.handleGamePaused(),
                  null != this._game.requestMaker &&
                    this._game.requestMaker.pause();
              }),
              (g.prototype.handleGamePaused = function () {
                var e = window.TweenMax;
                null != e && e.pauseAll(), this.slotGame.jsBridge.gamePaused();
              }),
              (g.prototype.handlePhaserResumed = function () {
                this.handleGameResumed();
                var e = this.slotGame;
                e.pausedByOperator || e.pausedByClient
                  ? ((this.game.paused = !0),
                    this.slotGame.jsBridge.gamePaused())
                  : null != e.requestMaker && e.requestMaker.resume();
              }),
              (g.prototype.handleGameResumed = function () {
                var e = window.TweenMax;
                if (
                  (null != e && e.resumeAll(),
                  this.game.renderType === Phaser.WEBGL &&
                    this.game.device.iPad)
                ) {
                  var t = this.game.renderer.view;
                  if (t) {
                    var n = t.width;
                    (t.width = n - 1), (t.width = n);
                  }
                  PIXI.glContexts[0].flush();
                }
                this.slotGame.jsBridge.gameResumed();
              }),
              (g.prototype.setupStateListeners = function () {
                var e = this;
                this._roundStateCallbacks = {
                  errorCallback: function (t) {
                    return e.handleErrorOccurred(t);
                  },
                  finalWinPresentationStartedCallback: function () {
                    return e.handleFinalWinPresentationStarted();
                  },
                  finalWinPresentationCompleteCallback: function () {
                    return e.handleFinalWinPresentationComplete();
                  },
                  finalWinPresentationAbortedCallback: function () {
                    return e.handleFinalWinPresentationAborted();
                  },
                  roundStartedCallback: function () {
                    return e.handleRoundStarted();
                  },
                  gameRoundRestoredCallback: function () {
                    return e.handleGameRoundRestored();
                  },
                  startNewRoundRequestedCallback: function () {
                    e.handleStartNewRoundRequested();
                  },
                  stopAutoPlayRequestedCallback: function (t) {
                    return e.handleStopAutoPlayRequested(t);
                  },
                  setAutoContinueAutoPlaySessionCallback: function (t) {
                    return e.setWinPresentationCompleteContinuesSession(t);
                  },
                };
                var t = this._roundState,
                  n = this._roundStateCallbacks;
                (t.errorCallback = function (e) {
                  return n.errorCallback(e);
                }),
                  (t.finalWinPresentationStartedCallback = function () {
                    return n.finalWinPresentationStartedCallback();
                  }),
                  (t.finalWinPresentationCompleteCallback = function () {
                    return n.finalWinPresentationCompleteCallback();
                  }),
                  (t.finalWinPresentationAbortedCallback = function () {
                    return n.finalWinPresentationAbortedCallback();
                  }),
                  (t.roundStartedCallback = function () {
                    return n.roundStartedCallback();
                  }),
                  (t.gameRoundRestoredCallback = function () {
                    return n.gameRoundRestoredCallback();
                  }),
                  (t.startNewRoundRequestedCallback = function (e) {
                    return n.startNewRoundRequestedCallback(e);
                  }),
                  (t.stopAutoPlayRequestedCallback = function (e) {
                    return n.stopAutoPlayRequestedCallback(e);
                  }),
                  (t.setAutoContinueAutoPlaySessionCallback = function (e) {
                    return n.setAutoContinueAutoPlaySessionCallback(e);
                  }),
                  (this._autoSpinContext.onAutoPlayStoppedCallback =
                    function () {
                      return e.handleAutoPlayStopped();
                    }),
                  (this._autoSpinContext.onContinueSessionOnWpCompleteCallback =
                    function () {
                      return e.continueAutoPlaySessionOnWpComplete();
                    }),
                  (this._autoSpinContext.autoPlaySessionCompletedCallback =
                    function () {
                      return e.handleAutoPlaySessionComplete();
                    }),
                  (this._freeRoundContext.freeRoundProgramCompletedCallback =
                    function () {
                      return e.handleFreeRoundProgramCompleted();
                    }),
                  (this._freeRoundContext.closeFreeRoundProgramRequestedCallback =
                    function () {
                      return e.handleContinuePlayAfterFreeRoundProgram();
                    }),
                  (this._autoSpinContext.pendingRoundCancelled = function () {
                    return e.handlePendingRoundCancelled();
                  }),
                  (this._singleSpinContext.pendingRoundCancelled = function () {
                    return e.handlePendingRoundCancelled();
                  }),
                  (this._freeRoundContext.pendingRoundCancelled = function () {
                    return e.handlePendingRoundCancelled();
                  }),
                  (this._autoSpinContext.newRoundPendingCallback = function () {
                    return e.handleNewRoundPending();
                  }),
                  (this._singleSpinContext.newRoundPendingCallback =
                    function () {
                      return e.handleNewRoundPending();
                    }),
                  (this._freeRoundContext.newRoundPendingCallback =
                    function () {
                      return e.handleNewRoundPending();
                    });
              }),
              (g.prototype.handleErrorOccurred = function (e) {
                var t = this;
                this._game.slowConnectionTracker &&
                  this._game.slowConnectionTracker.responseReceived(),
                  this._game.gui.updateGuiButtonOverrides(
                    "commons.gameStartup",
                    null
                  ),
                  this._game.nextRoundStartGate.errorOccurred(),
                  this._game.gui.hideControlPanel(!1),
                  e.clientData &&
                    (e.clientData.playeraccounts &&
                      this._game.model.updatePlayerAccounts(
                        e.clientData.playeraccounts
                      ),
                    e.clientData.messages &&
                      (e.clientData.messages.forEach(function (e) {
                        null == e.type &&
                          (null == e.title && (e.title = ""),
                          null == e.text && (e.text = ""));
                      }),
                      this._game.model.setPlayerMessageQueue(
                        e.clientData.messages
                      ))),
                  this.handleOngoingTweensOnErrorOccurred(),
                  this._game.nextRoundStartGate.newRoundRejected(),
                  (this._roundStateCallbacks.startNewRoundRequestedCallback =
                    function (e) {
                      t.handleStartNewRoundRequested(e);
                    }),
                  (this._roundStateCallbacks.finalWinPresentationAbortedCallback =
                    function () {
                      t.handleFinalWinPresentationAborted();
                    }),
                  0 == this._game.initGameData.externalerrorhandling
                    ? this.showTechnicalErrorDialog(e)
                    : this.handleErrorThroughExternalErrorHandling(e);
              }),
              (g.prototype.canRecoverFromError = function () {
                return this._game.model.canRecoverFromError();
              }),
              (g.prototype.handleContinuePlayAfterFreeRoundProgram =
                function () {
                  null != this._game.model.getNextActiveFreeRoundProgram(!1)
                    ? this.activateFreeRoundsContext(!0)
                    : (this._game.updateAvailableBets(!1),
                      this.updatePaytableSymbolValues(
                        this._game.model.placedBetAmount
                      ),
                      this.activateSingleSpinContext(),
                      u.enableProcessing());
                }),
              (g.prototype.handleStartNewRoundRequested = function (e) {
                (this._roundStateCallbacks.startNewRoundRequestedCallback =
                  function () {}),
                  this._currentContext.handleStartNewRoundRequested(e);
              }),
              (g.prototype.handleGameRoundRestored = function () {
                this._currentContext.handleGameRoundRestored();
              }),
              (g.prototype.handleAutoPlayStopped = function () {
                var e = this;
                this._newRoundPending && this.handlePendingRoundCancelled(),
                  m(function (e) {
                    e.autoPlayStopped();
                  }),
                  this.activateSingleSpinContext(),
                  this._game.regulationManager.handleAutoPlayStoppedOrCancelled(),
                  (this._presentingFinalWin || this._roundClosed) &&
                    (this._game.nextRoundStartGate.singleSpinContextActivated(),
                    (this._roundStateCallbacks.startNewRoundRequestedCallback =
                      function (t) {
                        e.handleStartNewRoundRequested(t);
                      }),
                    (this._roundStateCallbacks.finalWinPresentationAbortedCallback =
                      function () {
                        e.handleFinalWinPresentationAborted();
                      }),
                    u.setCompleteCallback(function () {}),
                    u.enableProcessing());
              }),
              (g.prototype.handleFreeRoundProgramCompleted = function () {
                u.blockProcessing("commons:freeRoundsCompleted");
                var t = this._game.model.currentFreeRoundProgram,
                  n = this._game.model.getNextActiveFreeRoundProgram(!1);
                this._game.jsBridge.freeRoundsExited({ program: t, next: n }),
                  this._game.languageSystem.setParameterValue(
                    "freeRoundTotalWin",
                    t.totalwin.currencyiso +
                      " " +
                      i.globalFormatter.formatAmount2(
                        t.totalwin.amount,
                        t.totalwin.amount
                      )
                  ),
                  this._game.languageSystem.updateAllDirtyEntries(),
                  this._game.dialogManager.showDialog(
                    e.slots.gui.DialogTypeEnum.FREE_ROUNDS_COMPLETED
                  );
              }),
              (g.prototype.sendRoundStartedToWebPage = function (e) {
                this._game.jsBridgeHelper.roundStarted(
                  e,
                  this._game.nextRoundStartGate.getTimeStamp()
                );
              }),
              (g.prototype.handleFinalWinPresentationStarted = function () {
                var e = this;
                this._presentingFinalWin = !0;
                var t = this._game,
                  n = t.gui;
                if (
                  ((this._roundStateCallbacks.finalWinPresentationAbortedCallback =
                    function () {
                      e.handleFinalWinPresentationAborted();
                    }),
                  n.updateGuiButtonOverrides("commons:restoregameround", null),
                  t.initGameData.developmentmode &&
                    (this._handleFinalWinPresentationPairs++,
                    this._handleFinalWinPresentationPairs > 1))
                )
                  throw new Error(
                    "GameState: handleFinalWinPresentationStarted called more than once without a handleFinalWinPresentationComplete in between."
                  );
                t.realityCheckManager.shouldShowDialog &&
                  n.updateGuiButtonOverrides(
                    "commons:realityCheckPending",
                    c()
                  ),
                  this.queueDefaultLoginDialog(),
                  (this._roundStateCallbacks.startNewRoundRequestedCallback =
                    function (t) {
                      e.handleStartNewRoundRequested(t);
                    }),
                  (this._roundStateCallbacks.finalWinPresentationAbortedCallback =
                    function () {
                      e.handleFinalWinPresentationAborted();
                    }),
                  u.setCompleteCallback(function () {}),
                  this._currentContext.handleFinalWinPresentationStarted(),
                  null != t.model.getNextActiveFreeRoundProgram(!1) &&
                    this._currentContext != this._freeRoundContext &&
                    (u.blockCompleteNotifications("common:freeRoundsPending"),
                    n.setDialogModalMode(!0, !0, "commons:freeRoundsPending"));
              }),
              (g.prototype.handleFinalWinPresentationComplete = function () {
                var e = this;
                if (!1 !== this._presentingFinalWin) {
                  if (
                    (u.blockProcessing("common:finalWinPresentationHandling"),
                    this._game.nextRoundStartGate.winPresentationComplete(),
                    this._game.initGameData.developmentmode &&
                      (this._handleFinalWinPresentationPairs--,
                      this._handleFinalWinPresentationPairs < 0))
                  )
                    throw new Error(
                      "GameState: handleFinalWinPresentationComplete called more than once without a handleFinalWinPresentationStarted in between."
                    );
                  (this._gameIsIdle = !0),
                    (this._roundClosed = !0),
                    this._game.gui.updateGuiButtonOverrides(
                      "commons.blockAutoPlayAccessDuringGameRound",
                      null
                    ),
                    m(function (e) {
                      e.finalWinPresentationComplete();
                    }),
                    this._game.messageManager.gameRoundEnding(),
                    this._game.realityCheckManager.isPlaying(!0),
                    this._game.keepAliveManager.isPlaying(!1),
                    this.sendRoundCompleteEventToWebPage(),
                    this._game.jsBridge.idleStateEntered();
                  var t = this._game.model.getNextActiveFreeRoundProgram(!1);
                  this._currentContext.handleFinalWinPresentationComplete(),
                    null != t &&
                      this._currentContext != this._freeRoundContext &&
                      u.setCompleteCallback(function () {
                        e.activateFreeRoundsContext(!0);
                      }),
                    u.enableProcessing(),
                    u.unblockProcessing("common:finalWinPresentationHandling");
                }
              }),
              (g.prototype.handleFinalWinPresentationAborted = function () {
                var e = this;
                this._roundClosed ||
                  (m(function (e) {
                    e.finalWinPresentationAborted();
                  }),
                  (this._roundClosed = !0),
                  this._game.messageManager.gameRoundEnding(),
                  this._game.jsBridge.winPresentationAborted(!0),
                  this._game.updateCashField(),
                  this._game.gui.updateGuiButtonOverrides(
                    "commons.blockAutoPlayAccessDuringGameRound",
                    null
                  ),
                  this._game.sendBalanceChangedCallToJsBridge(),
                  m(function (e) {
                    e.roundEnded();
                  }),
                  this._game.jsBridgeHelper.roundEnded()),
                  this._game.initGameData.developmentmode &&
                    1 === this._handleFinalWinPresentationPairs &&
                    this._handleFinalWinPresentationPairs--,
                  this._game.nextRoundStartGate.winPresentationAborted(),
                  this._game.realityCheckManager.isPlaying(!0),
                  (this._presentingFinalWin = !1),
                  (this._gameIsIdle = !0),
                  this._game.updateAvailableBets(),
                  (this._roundStateCallbacks.startNewRoundRequestedCallback =
                    function () {}),
                  (this._roundStateCallbacks.finalWinPresentationAbortedCallback =
                    function () {}),
                  u.setCompleteCallback(function () {
                    e._currentContext.handleFinalWinPresentationAborted();
                  }),
                  u.enableProcessing();
              }),
              (g.prototype.handleRealityCheckDialogRequested = function () {
                var e = this,
                  t = this._game,
                  n = "commons:realityCheckPending";
                t.gui.updateConditionalGuiButtonOverrides(n, function () {
                  return !1 === t.gui.isControlPanelOpen() ? h() : c();
                }),
                  u.addEventWhenEnabled(function (o) {
                    t.realityCheckManager.shouldShowDialog
                      ? e.showDefaultRealityCheckDialog(function () {
                          t.gui.updateGuiButtonOverrides(n, null),
                            e._currentContext.handleRealityCheckClosed(),
                            o();
                        })
                      : (t.gui.updateGuiButtonOverrides(n, null), o());
                  });
              }),
              (g.prototype.activateFreeRoundsContext = function (t, n) {
                var o = this;
                void 0 === t && (t = !0), this.setupForFreeRounds();
                var i = this._game.model.currentFreeRoundProgram,
                  a = i.freeroundsremaining;
                if (
                  (this._game.gui.setDialogModalMode(
                    !1,
                    !1,
                    "commons:freeRoundsPending"
                  ),
                  this._game.languageSystem.setParameterValue(
                    "freeRoundsLeft",
                    a.toString()
                  ),
                  this._game.languageSystem.setParameterValue(
                    "freeRoundsLeft",
                    a.toString()
                  ),
                  this._game.languageSystem.updateAllEntries(),
                  this._game.jsBridge.freeRoundsEntered({
                    program: this._game.model.currentFreeRoundProgram,
                  }),
                  void 0 !== this._currentContext &&
                    this._currentContext.deactivate(),
                  "TOP_SPINS" === (i.freeRoundsBonusType || "NORMAL"))
                )
                  throw new Error("TOP SPINS IS NO LONGER SUPPORTED");
                this._freeRoundContext.activate(),
                  (this._currentContext = this._freeRoundContext),
                  this._freeRoundContext.startFreeRoundProgram(),
                  n
                    ? n().then(function () {
                        t &&
                          o._game.dialogManager.showDialog(
                            e.slots.gui.DialogTypeEnum.FREE_ROUNDS_FOUND
                          );
                      })
                    : t &&
                      this._game.dialogManager.showDialog(
                        e.slots.gui.DialogTypeEnum.FREE_ROUNDS_FOUND
                      ),
                  u.unblockCompleteNotifications("common:freeRoundsPending");
              }),
              (g.prototype.activateSingleSpinContext = function (e) {
                void 0 !== this._currentContext &&
                  this._currentContext.deactivate(),
                  this._singleSpinContext.activate(),
                  (this._currentContext = this._singleSpinContext),
                  e &&
                    (u.blockCompleteNotifications(
                      "common:waitingForSingleSpinStartSeq"
                    ),
                    e().then(function () {
                      u.unblockCompleteNotifications(
                        "common:waitingForSingleSpinStartSeq"
                      );
                    }));
              }),
              (g.prototype.activateAutoSpinContext = function () {
                void 0 !== this._currentContext &&
                  this._currentContext.deactivate(),
                  this._autoSpinContext.activate(),
                  (this._currentContext = this._autoSpinContext);
              }),
              (g.prototype.handleBetDialogButtonClicked = function (e) {
                this._game.pausedByClient = !1;
                var t = this._game.model.getBetFromAllowedBetsList(e);
                this._game.model.changeSelectedBetAmount(t),
                  this._game.updateBetField(
                    i.globalFormatter.formatAmount2(t, t)
                  ),
                  this.updatePaytableSymbolValues(
                    this._game.model.selectedBetAmount
                  ),
                  this._currentContext.handleBetChanged();
              }),
              (g.prototype.sendRoundCompleteEventToWebPage = function () {
                this._game.updateCashField(),
                  this._game.sendBalanceChangedCallToJsBridge(),
                  m(function (e) {
                    e.roundEnded();
                  }),
                  this._game.jsBridgeHelper.roundEnded();
              }),
              (g.prototype.handleRoundStarted = function () {
                var e = this;
                (this._gameIsIdle = !1),
                  (this._presentingFinalWin = !1),
                  (this._roundClosed = !1),
                  (this._newRoundPending = !1),
                  this.sendRoundStartedToWebPage(
                    this._currentContext === this._autoSpinContext
                  ),
                  this._currentContext.handleRoundStarted(),
                  this._game.gui.updateGuiButtonOverrides(
                    "commons.blockAutoPlayAccessDuringGameRound",
                    { autoSpinConfigButton: { enabled: !1 } }
                  ),
                  (this._roundStateCallbacks.finalWinPresentationAbortedCallback =
                    function () {
                      if (e._game.initGameData.developmentmode)
                        throw new Error(
                          "Illegal invocation of finalWinPresentationAbortedCallback while game round is pending or in progress."
                        );
                    });
              }),
              (g.prototype.restoreFreeRound = function (e) {
                (this._gameIsIdle = !1),
                  (this._presentingFinalWin = !1),
                  (this._isRestoreState = !0),
                  (this._roundClosed = !1),
                  this._game.jsBridge.restoreStateEntered(),
                  this.activateFreeRoundsContext(!1),
                  this._game.sendBalanceChangedCallToJsBridge(),
                  this._game.sendBetChangedCallToJsBridge(),
                  m(function (e) {
                    e.roundStarted();
                  }),
                  this._game.jsBridgeHelper.roundStarted(!1, void 0),
                  this._currentContext.restore(e);
              }),
              (g.prototype.restoreNormalRound = function (e) {
                (this._gameIsIdle = !1),
                  (this._presentingFinalWin = !1),
                  (this._isRestoreState = !0),
                  (this._roundClosed = !1),
                  this._game.jsBridge.restoreStateEntered(),
                  m(function (e) {
                    e.roundStarted();
                  }),
                  this._game.jsBridgeHelper.roundStarted(!1, void 0),
                  this.activateSingleSpinContext(),
                  this._game.sendBalanceChangedCallToJsBridge(),
                  this._game.sendBetChangedCallToJsBridge(),
                  this._currentContext.restore(e);
              }),
              (g.prototype.createRoundStateAndContexts = function () {
                var e = this;
                (this._roundState = this.createRoundState(this._game)),
                  (this._autoSpinContext = this.createAutoSpinContext(
                    this._roundState
                  )),
                  (this._autoSpinContext.onClientSideOOMCallback = function () {
                    e.handleClientSideOOM();
                  }),
                  (this._singleSpinContext = this.createSingleSpinContext(
                    this._roundState
                  )),
                  (this._singleSpinContext.onClientSideOOMCallback =
                    function () {
                      e.handleClientSideOOM();
                    }),
                  (this._freeRoundContext = this.createFreeRoundContext(
                    this._roundState
                  )),
                  this._roundState.activate();
              }),
              (g.prototype.createRoundState = function (e) {
                throw new Error(
                  "GameState.createRoundState is abstract. Override and implement in subclass."
                );
              }),
              (g.prototype.createAutoSpinContext = function (e) {
                return new t.fsm.AutoSpinContext(this._game, e);
              }),
              (g.prototype.createSingleSpinContext = function (e) {
                return new t.fsm.SingleSpinContext(this._game, e);
              }),
              (g.prototype.createFreeRoundContext = function (e) {
                return new t.fsm.FreeRoundContext(this._game, e);
              }),
              (g.prototype.handleSpacebarPressed = function () {
                null != this._currentContext &&
                  this._currentContext.handleSpacebarPressed();
              }),
              (g.prototype.createRegulationManager = function () {
                switch (this._game.initGameData.regulator || "MT") {
                  case "MT":
                    return new e.slots.utils.MTRegulationManager(this._game);
                  case "UK":
                    return new e.slots.utils.UKRegulationManager(this._game);
                  default:
                    return new e.slots.utils.MTRegulationManager(this._game);
                }
              }),
              (g.prototype.handleDialogButtonClicked = function (t, o, i) {
                for (var a = [], r = 3; r < arguments.length; r++)
                  a[r - 3] = arguments[r];
                if (
                  (n.prototype.handleDialogButtonClicked.apply(
                    this,
                    [t, o, i].concat(a)
                  ),
                  this._dialogButtonReroutingTarget)
                )
                  this._dialogButtonReroutingTarget.handleDialogButtonClicked(
                    t,
                    o
                  );
                else {
                  u.blockProcessing("common.handlingDialogButtonClicked"),
                    this.playDummyIosSound(),
                    t ===
                      e.slots.gui.DialogTypeEnum
                        .PLAY_TIME_EXCEEDED_LOST_MONEY ||
                    t ===
                      e.slots.gui.DialogTypeEnum.PLAY_TIME_EXCEEDED_WON_MONEY
                      ? o === e.slots.gui.GuiButtonIds.YES
                        ? (this._game.dialogManager.closeCurrentDialog(o),
                          this.handleRealityCheckDialogYesOptionSelected(),
                          this._currentContext.handleDialogButtonClicked(
                            t,
                            o,
                            i
                          ))
                        : o === e.slots.gui.GuiButtonIds.NO ||
                          o === e.slots.gui.GuiButtonIds.LOGOUT
                        ? (this._game.dialogManager.closeCurrentDialog(o),
                          this.handleRealityCheckDialogNoOptionSelected())
                        : this.handleRealityCheckDialogLinkButtonSelected()
                      : t === e.slots.gui.DialogTypeEnum.TECHNICAL_ERROR ||
                        t ===
                          e.slots.gui.DialogTypeEnum.PLAYER_LIMIT_EXCEEDED ||
                        t ===
                          e.slots.gui.DialogTypeEnum.INVALID_PLAYER_SESSION ||
                        t === e.slots.gui.DialogTypeEnum.BLOCKED_JURISDICTION ||
                        t === e.slots.gui.DialogTypeEnum.DEVICE_NOT_SUPPORTED ||
                        t ===
                          e.slots.gui.DialogTypeEnum
                            .SERVER_SIDE_INSUFFICIENT_FUNDS ||
                        t === e.slots.gui.DialogTypeEnum.BET_REJECTED
                      ? this._game.dialogManager.closeCurrentDialog(o)
                      : t === e.slots.gui.DialogTypeEnum.WANT_TO_PLAY_FOR_REAL
                      ? this.handleLoginDialogButtonClicked(t, o)
                      : t === e.slots.gui.DialogTypeEnum.FREE_ROUNDS_FOUND
                      ? (this._game.dialogManager.closeCurrentDialog(o),
                        this._currentContext.handleDialogButtonClicked(t, o, i))
                      : t === e.slots.gui.DialogTypeEnum.FREE_ROUNDS_COMPLETED
                      ? (this._game.dialogManager.closeCurrentDialog(o),
                        this.handleFreeRoundsCompletedDialogClosed(),
                        this._currentContext.handleDialogButtonClicked(t, o, i))
                      : t ===
                        e.slots.gui.DialogTypeEnum
                          .NOW_PLAYING_FOR_YOUR_OWN_MONEY
                      ? (this._game.dialogManager.closeCurrentDialog(o),
                        this.handleNowPlayingForYourOwnMoneyDialogClosed(),
                        this._currentContext.handleDialogButtonClicked(t, o, i))
                      : t === e.slots.gui.DialogTypeEnum.GAME_ROUND_RESTORED
                      ? this.handleGameRoundRestoredDialogClosed()
                      : t === e.slots.gui.DialogTypeEnum.LOSS_LIMIT_REACHED
                      ? this.handleLossLimitReachedDialogClosed()
                      : t === e.slots.gui.DialogTypeEnum.TOP_SPINS_FOUND
                      ? (this._game.dialogManager.closeCurrentDialog(o),
                        this._currentContext.handleDialogButtonClicked(t, o, i))
                      : t === e.slots.gui.DialogTypeEnum.TOP_SPINS_COMPLETED
                      ? (this._game.dialogManager.closeCurrentDialog(o),
                        this.handleFreeRoundsCompletedDialogClosed(),
                        this._currentContext.handleDialogButtonClicked(t, o, i))
                      : t === e.slots.gui.DialogTypeEnum.REGULATION_DISCLAIMER
                      ? this._game.dialogManager.closeCurrentDialog(o)
                      : t === e.slots.gui.DialogTypeEnum.CUSTOM &&
                        (this._game.dialogManager.closeCurrentDialog(o),
                        this.handleCustomDialogClosed(o));
                  var s = this.slotGame;
                  void 0 !== s.keepAliveManager &&
                    s.keepAliveManager.keepAlive(),
                    u.unblockProcessing("common.handlingDialogButtonClicked");
                }
              }),
              (g.prototype.handleGuiButtonClicked = function (t, n) {
                var o = this,
                  i = e.slots.gui.GuiButtonIds;
                switch (t) {
                  case i.OC:
                    this.handleOcButtonClicked();
                    break;
                  case i.DOWNLOAD:
                    this.handleDownloadGameRulesButtonClicked();
                    break;
                  case i.BACK_TO_LOBBY_BUTTON:
                    this._game.jsBridge.goBackToLobby({
                      instigator:
                        e.jsintegration.data.BackToLobbyDataConstants
                          .INSTIGATOR_PLAYER,
                      reason:
                        e.jsintegration.data.BackToLobbyDataConstants
                          .REASON_LOBBY_BUTTON,
                    });
                    break;
                  case i.BACK_TO_GAME:
                    this.handleBackToGameButtonClicked();
                    break;
                  case i.GAME_RULES:
                    this.handleOpenGameRulesButtonClicked();
                    break;
                  case i.PAY_TABLE:
                    this.handleOpenPaytableButtonClicked();
                    break;
                  case i.BET:
                    this.handleBetButtonClicked();
                    break;
                  case i.AUTO_PLAY:
                    this.handleAutoPlayButtonClicked();
                    break;
                  case i.TOGGLE_SOUND:
                    this.handleToggleSoundButtonClicked();
                    break;
                  case i.HISTORY:
                    this.handleHistoryButtonClicked();
                }
                this._game.gui.isPopupMenuOpen() &&
                  !0 === this.clickOnGuiButtonShouldClosePopupMenu(t) &&
                  this._game.gui.hidePopupMenu(),
                  this._currentContext &&
                    this._currentContext.handleGuiButtonClicked(t, n),
                  this._game.regulationManager.abortAutoPlayOnButtonClicked(
                    t,
                    n
                  ) &&
                    u.addPriorityEvent(function (e) {
                      o._currentContext === o._autoSpinContext &&
                        o.handleStopAutoPlayRequested("regulation"),
                        e();
                    });
                var a = this.slotGame;
                void 0 !== a.keepAliveManager && a.keepAliveManager.keepAlive();
              }),
              (g.prototype.handleControlPanelButtonClicked = function (t, n) {
                if (t === e.slots.gui.PageIds.AUTO_PLAY)
                  -1 === n
                    ? (this._singleSpinContext.handleAutoPlayRoundsCleared(),
                      this.activateSingleSpinContext(),
                      this.showControlPanel(!1, void 0, !0),
                      (this._game.pausedByClient = !1))
                    : (u.blockProcessing("commons:handleAutoPlaySpinsSelected"),
                      this._autoSpinContext.handleAutoPlayRoundsSelected(n),
                      this.activateAutoSpinContext(),
                      this.showControlPanel(!1, void 0, !0),
                      this._game.regulationManager.handleAutoPlayRoundsSelected(
                        n
                      ),
                      u.unblockProcessing(
                        "commons:handleAutoPlaySpinsSelected"
                      ));
                else if (t === e.slots.gui.PageIds.BET) {
                  var o = this._game.model.getBetFromAllowedBetsList(n);
                  this.handleChangeOfBetValue(o);
                } else if (t === e.slots.gui.PageIds.HISTORY) {
                  if (
                    (this.showControlPanel(!1, void 0, !0),
                    (this._game.pausedByClient = !1),
                    null != n)
                  ) {
                    var i = parseInt(n),
                      a = this._game.model.playerHistory[i];
                    if (null != a.detailsUrl) {
                      var r = a.detailsUrl + "";
                      -1 === r.indexOf("&langIso") &&
                        (r =
                          r +
                          "&langIso=" +
                          this._game.languageSystem.activeLanguageIso),
                        window.open(r, "_blank");
                    }
                  }
                } else
                  this.showControlPanel(!1, void 0, !0),
                    (this._game.pausedByClient = !1);
                var s = this.slotGame;
                void 0 !== s.keepAliveManager && s.keepAliveManager.keepAlive();
              }),
              (g.prototype.handleChangeOfBetValue = function (e) {
                this._game.model.changeSelectedBetAmount(e),
                  this._game.updateBetField(),
                  this.updatePaytableSymbolValues(
                    this._game.model.placedBetAmount
                  ),
                  this._game.jsBridge.betChanged({
                    accountid: this._game.model.accountId,
                    currencyiso: this._game.model.playerCurrency,
                    totalbet: e,
                  }),
                  m()
                    ? (this._game.pausedByClient = !1)
                    : (this.showControlPanel(!1, void 0, !0),
                      (this._game.pausedByClient = !1),
                      this._game.regulationManager.handleBetAmountSelected(e));
              }),
              (g.prototype.updatePaytableSymbolValues = function (e) {}),
              (g.prototype.setupForFreeRounds = function () {
                var e = this._game.model.getNextActiveFreeRoundProgram(!0);
                this._game.updateCashField(
                  i.globalFormatter.formatAmount2(e.totalwin.amount)
                ),
                  this._game.updateBetField(
                    i.globalFormatter.formatAmount2(e.betconfiguration.amount)
                  ),
                  this._game.model.activateFreeRoundProgram(e),
                  this._game.updateAvailableBets(),
                  this.updatePaytableSymbolValues(e.betconfiguration.amount);
              }),
              (g.prototype.handleFreeRoundsCompletedDialogClosed = function () {
                this._game.model.closeActiveFreeRoundProgram(),
                  this._game.updateAvailableBets(),
                  this.updatePaytableSymbolValues(
                    this._game.model.selectedBetAmount
                  ),
                  this._game.model.setClientBalance(
                    this._game.model.serverBalance
                  ),
                  this._game.updateCashField(
                    i.globalFormatter.formatAmount2(
                      this._game.model.serverBalance
                    )
                  ),
                  this._game.updateBetField(
                    i.globalFormatter.formatAmount2(
                      this._game.model.selectedBetAmount
                    )
                  ),
                  u.unblockProcessing("commons:freeRoundsCompleted");
              }),
              (g.prototype.handleGamePauseStateChanged = function (e, t) {
                this.pause(e, t);
              }),
              (g.prototype.showControlPanel = function (e, t, n) {
                void 0 === t && (t = null),
                  void 0 === n && (n = !0),
                  (this._controlPanelVisible = !this._controlPanelVisible),
                  e
                    ? (u.blockProcessing("commons.showingControlPanel"),
                      this._game.gui.showControlPanel(t, n, null))
                    : (u.unblockProcessing("commons.showingControlPanel"),
                      this._game.gui.hideControlPanel(n),
                      this.resize(void 0, void 0, void 0, !0));
              }),
              (g.prototype.showDefaultRealityCheckDialog = function (t) {
                var n = this,
                  o = this._game,
                  a = o.realityCheckManager.showDialogData;
                if (
                  (o.jsBridge.realityCheckTriggered({
                    gameroundsplayed: a.roundsPlayed,
                    totalbet: a.totalBetForSession,
                    totalwin: a.totalWinForSession,
                    playtime: new Date().getTime() - a.startTime,
                    totalbetatstart: o.initGameData.realitycheckdata
                      ? o.initGameData.realitycheckdata.totalbetatstart
                      : 0,
                    totalwinatstart: o.initGameData.realitycheckdata
                      ? o.initGameData.realitycheckdata.totalwinatstart
                      : 0,
                  }),
                  o.gui.setDialogModalMode(
                    !1,
                    !1,
                    "commons:realityCheckPending"
                  ),
                  o.realityCheckManager.realityCheckPresented(),
                  o.realityCheckManager.settings.externaldialog)
                ) {
                  o.gui.setDialogModalMode(
                    !0,
                    !0,
                    "commons:externalRealityCheck"
                  ),
                    m(function (e) {
                      e.hideControlPanel(!1);
                    });
                  var r = function (i, a) {
                    (i !==
                      e.slots.gui.DialogTypeEnum
                        .PLAY_TIME_EXCEEDED_LOST_MONEY &&
                      i !==
                        e.slots.gui.DialogTypeEnum
                          .PLAY_TIME_EXCEEDED_LOST_MONEY) ||
                      (n._game.jsBridge.onCloseDialog.remove(r),
                      o.gui.setDialogModalMode(
                        !1,
                        !1,
                        "commons:externalRealityCheck"
                      ),
                      o.realityCheckManager.realityCheckAcknowledged(
                        a == e.slots.gui.GuiButtonIds.NO
                      ),
                      t && t(a));
                  };
                  o.jsBridge.onCloseDialog.add(r),
                    o.jsBridge.openExternalRealityCheck(a);
                } else {
                  var s = Math.abs(a.winAmount),
                    u =
                      o.model.playerCurrencyString +
                      " " +
                      i.globalFormatter.formatAmount2(s, s);
                  o.gui;
                  a.winAmount < 0
                    ? o.languageSystem.setParameterValue(
                        "totalLossDuringPlay",
                        u
                      )
                    : o.languageSystem.setParameterValue(
                        "totalWinDuringPlay",
                        u
                      ),
                    o.languageSystem.setParameterValue(
                      "rcTotalWager",
                      "" + a.totalBetForSession
                    ),
                    o.languageSystem.setParameterValue(
                      "rcRoundsPlayed",
                      "" + a.roundsPlayed
                    );
                  var l = e.time.formatTimeHHMM(
                    new Date().getTime() - a.startTime
                  );
                  o.languageSystem.setParameterValue("playTime", l, !0),
                    o.languageSystem.updateAllDirtyEntries();
                  var d = function (n) {
                    o.realityCheckManager.realityCheckAcknowledged(
                      n === e.slots.gui.GuiButtonIds.NO
                    ),
                      t(n);
                  };
                  a.winAmount < 0
                    ? o.dialogManager.showDialog(
                        e.slots.gui.DialogTypeEnum
                          .PLAY_TIME_EXCEEDED_LOST_MONEY,
                        d
                      )
                    : o.dialogManager.showDialog(
                        e.slots.gui.DialogTypeEnum.PLAY_TIME_EXCEEDED_WON_MONEY,
                        d
                      );
                }
              }),
              (g.prototype.queueDefaultLoginDialog = function () {
                var t = this,
                  n = this._game;
                if (this._game.loginCheckManager.shouldShowDialog) {
                  var o = c();
                  this._game.gui.updateGuiButtonOverrides(
                    "vanilla.loginCheckPending",
                    o
                  ),
                    u.addEventWhenEnabled(function (o) {
                      t._game.gui.updateGuiButtonOverrides(
                        "vanilla.loginCheckPending",
                        null
                      ),
                        n.loginCheckManager.reset(),
                        n.dialogManager.showDialog(
                          e.slots.gui.DialogTypeEnum.WANT_TO_PLAY_FOR_REAL,
                          o
                        );
                    });
                }
              }),
              (g.prototype.showTechnicalErrorDialog = function (t) {
                var n = this._game;
                (n.latestError = t || {
                  code: 0,
                  message: "Uknown error. Error data is undefined.",
                  callstack: "",
                }),
                  this.pause(!0, !0),
                  this._controlPanelVisible &&
                    this.showControlPanel(!1, void 0, !1),
                  n.dialogManager.closeCurrentDialogSilently(),
                  t.code ===
                    tk.gs.rs.e.ServerErrorCodes.SESSION_LIMIT_EXCEEDED ||
                  t.code === tk.gs.rs.e.ServerErrorCodes.PLAYER_LIMIT_EXCEEDED
                    ? this.handleSessionOrPlayerLimitExceededError()
                    : t.code === tk.gs.rs.e.ServerErrorCodes.OUT_OF_MONEY
                    ? this.handleServerSideOutOfMoneyError()
                    : t.code === tk.gs.rs.e.ServerErrorCodes.BET_REJECTED ||
                      t.code === tk.gs.rs.e.ServerErrorCodes.REGULATORY_ERROR
                    ? this.handleBetRejectedError()
                    : t.code ===
                      tk.gs.rs.e.ServerErrorCodes.BLOCKED_JURISDICTION
                    ? this.handleCriticalError(
                        e.slots.gui.DialogTypeEnum.BLOCKED_JURISDICTION,
                        t
                      )
                    : t.code ===
                        tk.gs.rs.e.ServerErrorCodes.BROWSER_NOT_SUPPORTED ||
                      t.code ===
                        tk.gs.rs.e.ServerErrorCodes.DEVICE_NOT_SUPPORTED
                    ? this.handleCriticalError(
                        e.slots.gui.DialogTypeEnum.DEVICE_NOT_SUPPORTED,
                        t
                      )
                    : t.code ===
                        tk.gs.rs.e.ServerErrorCodes.INVALID_GAME_SESSION ||
                      t.code ===
                        tk.gs.rs.e.ServerErrorCodes.PLAYER_SESSION_EXPIRED
                    ? this.handleCriticalError(
                        e.slots.gui.DialogTypeEnum.INVALID_PLAYER_SESSION,
                        t
                      )
                    : this.handleCriticalError(
                        e.slots.gui.DialogTypeEnum.TECHNICAL_ERROR,
                        t
                      );
              }),
              (g.prototype.clickOnGuiButtonShouldClosePopupMenu = function (t) {
                var n = !1;
                switch (t) {
                  case e.slots.gui.GuiButtonIds.START_AUTO_PLAY:
                  case e.slots.gui.GuiButtonIds.STOP_AUTO_PLAY:
                  case e.slots.gui.GuiButtonIds.QUICK_STOP:
                  case e.slots.gui.GuiButtonIds.SKIP:
                  case e.slots.gui.GuiButtonIds.SPIN:
                    n = !0;
                }
                return (n =
                  n &&
                  this.popupMenuShouldCloseInOrientation(
                    this.slotGame.getCurrentDeviceOrientation()
                  ));
              }),
              (g.prototype.popupMenuShouldCloseInOrientation = function (t) {
                return t === e.constants.OrientationEnum.LANDSCAPE;
              }),
              (g.prototype.handleOcButtonClicked = function () {
                this._game.gui.showDialog(e.slots.gui.DialogTypeEnum.OC);
              }),
              (g.prototype.handleDownloadGameRulesButtonClicked = function () {
                var e = this._game.languageSystem.activeLanguageIso,
                  t = this._game.initGameData.localesvariant || "any",
                  n = this._game.model.gameId;
                this._game.jsBridge.openExternalGameRules({
                  clientversion: this._game.model.clientVersion,
                  gameid: n,
                  languageiso: e,
                  relativegamerulesurl: this.getRelativeGameRulesURL(e, t, n),
                });
              }),
              (g.prototype.getRelativeGameRulesURL = function (e, t, n) {
                return this._game.getRelativeGameRulesUrl(e, t, n);
              }),
              (g.prototype.handleBackToGameButtonClicked = function () {
                (this._game.gui.isPageOpen(a.BET) ||
                  this._game.gui.isPageOpen(a.AUTO_PLAY)) &&
                  (this._game.regulationManager.canStartAutoPlaySession() ||
                    (this._currentContext === this._autoSpinContext &&
                      this.handleStopAutoPlayRequested(
                        "INVALID_SESSION_SETUP"
                      ))),
                  (this._game.pausedByClient = !1),
                  this.showControlPanel(!1);
              }),
              (g.prototype.handleOpenGameRulesButtonClicked = function () {
                (this._game.pausedByClient = !m()),
                  this.showControlPanel(!0, e.slots.gui.PageIds.GAME_RULES, !0);
              }),
              (g.prototype.handleOpenPaytableButtonClicked = function () {
                (this._game.pausedByClient = !m()),
                  this.showControlPanel(!0, e.slots.gui.PageIds.PAY_TABLE, !0);
              }),
              (g.prototype.handleBetButtonClicked = function () {
                (this._game.pausedByClient = !m()),
                  this.showControlPanel(!0, e.slots.gui.PageIds.BET);
              }),
              (g.prototype.handleAutoPlayButtonClicked = function () {
                (this._game.pausedByClient = !m()),
                  this.showControlPanel(!0, e.slots.gui.PageIds.AUTO_PLAY);
              }),
              (g.prototype.handleToggleSoundButtonClicked = function () {
                this.toggleSound();
              }),
              (g.prototype.toggleSound = function (t) {
                var n = this,
                  o = this.slotGame;
                void 0 === o.soundEnabled && (o.soundEnabled = !1),
                  void 0 === t
                    ? ((o.soundEnabled = !o.soundEnabled), (t = o.soundEnabled))
                    : (o.soundEnabled = t);
                var i = o.soundSystem;
                i.setMute(!t),
                  this._game.device.iOS &&
                    !1 === this._game.hasPlayedSounds &&
                    this.playDummyIosSound(),
                  !i.allSoundsLoaded && t
                    ? !1 === this._loadingSounds
                      ? (o.gui.setSoundLoadMode(!0),
                        (this._loadingSounds = !0),
                        i.addSoundsToLoader(this.load),
                        this.load.onLoadComplete.addOnce(function () {
                          e.net.ComTracker.getInstance().requestReceived(
                            n.slotGame.soundSystem
                          ),
                            (n.slotGame.soundSystem.allSoundsLoaded = !0),
                            o.gui.setSoundButtonSelected(o.soundEnabled);
                        }, this),
                        e.net.ComTracker.getInstance().requestSent(i),
                        this.load.start())
                      : this.slotGame.initGameData.usedesktopgui &&
                        o.gui.setSoundButtonSelected(t)
                    : o.gui.setSoundButtonSelected(t);
              }),
              (g.prototype.playDummyIosSound = function () {
                (this._game.hasPlayedSounds = !0),
                  this._game.sound.play("dummyIosSound", 1e-5, !1);
              }),
              (g.prototype.handleAutoPlayDialogButtonClicked = function (e) {
                (this._game.pausedByClient = !1),
                  -1 !== e
                    ? this.handleAutoPlayRoundsSelected(e)
                    : this.handleAutoPlayRoundSelectionCleared();
              }),
              (g.prototype.handleAutoPlayRoundsSelected = function (e) {
                (this._game.model.autoPlayState.roundsLeft = e),
                  (this._game.model.autoPlayState.roundsTotal =
                    this._game.model.autoPlayState.roundsLeft),
                  this.activateAutoSpinContext(),
                  this._autoSpinContext.handleAutoPlayRoundsSelected(e),
                  this._game.regulationManager.handleAutoPlayRoundsSelected(e);
              }),
              (g.prototype.handleAutoPlayRoundSelectionCleared = function () {
                this._game.regulationManager.handleAutoPlayStoppedOrCancelled(),
                  this._autoSpinContext.handleAutoPlayRoundsCleared();
              }),
              (g.prototype.handleHistoryButtonClicked = function () {
                var t = this;
                (this._game.pausedByClient = !m()),
                  this.showControlPanel(!0, e.slots.gui.PageIds.HISTORY, !0),
                  this._game.requestMaker.performGetHistory(
                    function () {
                      t.handleGetHistoryResponse();
                    },
                    function (e) {
                      t.handleErrorOccurred(e);
                    }
                  );
              }),
              (g.prototype.handleGetHistoryResponse = function () {
                for (
                  var e = [],
                    t = Math.min(10, this._game.model.playerHistory.length),
                    n = 0;
                  n < t;
                  n++
                ) {
                  var o,
                    a,
                    r = this._game.model.playerHistory[n],
                    s = parseInt(r.endtime || r.starttime),
                    u = new Date(s);
                  try {
                    "UK" === this._game.initGameData.regulator
                      ? (o = u.toLocaleTimeString("en-GB"))
                      : "PT" === this._game.initGameData.regulator
                      ? (o = u.toLocaleTimeString("pt"))
                      : "DK" === this._game.initGameData.regulator &&
                        (o = u.toLocaleTimeString("da")),
                      (o =
                        "ES" === this._game.initGameData.regulator
                          ? u.toLocaleTimeString("es")
                          : u.toLocaleTimeString("en-GB"));
                  } catch (e) {
                    o = u.toLocaleTimeString();
                  }
                  try {
                    "UK" === this._game.initGameData.regulator
                      ? (a = u.toLocaleDateString("en-GB"))
                      : "PT" === this._game.initGameData.regulator
                      ? (a = u.toLocaleDateString("pt"))
                      : "DK" === this._game.initGameData.regulator &&
                        (a = u.toLocaleDateString("da")),
                      (a =
                        "ES" === this._game.initGameData.regulator
                          ? u.toLocaleDateString("es")
                          : u.toLocaleDateString("en-GB"));
                  } catch (e) {
                    a = u.toLocaleDateString();
                  }
                  var l = {
                    time: o,
                    date: a,
                    bet:
                      r.currencyiso +
                      " " +
                      i.globalFormatter.formatAmount2(r.totalbet),
                    win:
                      r.currencyiso +
                      " " +
                      i.globalFormatter.formatAmount2(r.totalwin),
                    replayId: r.replayid,
                    showDetailsButton: null != r.detailsUrl,
                  };
                  e.push(l);
                }
                this.slotGame.gui.setHistoryData(e);
              }),
              (g.prototype.handleRealityCheckDialogYesOptionSelected =
                function () {
                  (this._game.pausedByClient = !1),
                    (this._game.realityCheckManager.shouldShowDialog = !1),
                    this._game.gui.setDialogModalMode(
                      !1,
                      !1,
                      "commons:realityCheckPending"
                    ),
                    this._game.realityCheckManager.isPlaying(!0),
                    this._game.jsBridge.gamePlayAccepted();
                }),
              (g.prototype.handleRealityCheckDialogNoOptionSelected =
                function () {
                  this._game.jsBridge.gamePlayDeclined(),
                    this._game.nextRoundStartGate.gamePlayDeclined(),
                    this._game.realityCheckManager.realityCheckAcknowledged(!0);
                }),
              (g.prototype.handleContinuePlayAfterLoginDialog = function () {
                this._game.pausedByClient = !1;
              }),
              (g.prototype.handleNowPlayingForYourOwnMoneyDialogClosed =
                function () {
                  this._game.pausedByClient = !1;
                }),
              (g.prototype.handleGameRoundRestoredDialogClosed = function () {
                this._game.dialogManager.closeCurrentDialog(
                  e.slots.gui.GuiButtonIds.OK
                ),
                  this._currentContext.resumeRestoredRound();
              }),
              (g.prototype.handleRealityCheckDialogLinkButtonSelected =
                function () {
                  this._game.jsBridge.openExternalHistoryPage();
                }),
              (g.prototype.handleStopAutoPlayRequested = function (e) {
                this._currentContext === this._autoSpinContext &&
                  this._autoSpinContext.stopAutoPlay(e);
              }),
              (g.prototype.handleStopOnFeatureWonValueChanged = function (e) {
                this._game.model.autoPlayState.stopOnFeatureWon = e;
              }),
              (g.prototype.handleLossLimitReachedDialogClosed = function () {
                this._currentContext.handleStopConditionDialogClosed();
              }),
              (g.prototype.showTopSpinsFoundDialog = function (t) {
                var n = t.numberOfTopSpins;
                this._game.languageSystem.setParameterValue(
                  "topSpinsSaved",
                  n,
                  !0
                );
                var o = t.freeroundsremaining;
                this._game.languageSystem.setParameterValue(
                  "topSpinsRoundsLeft",
                  o,
                  !0
                ),
                  this._game.dialogManager.showDialog(
                    e.slots.gui.DialogTypeEnum.TOP_SPINS_FOUND
                  );
              }),
              (g.prototype.setWinPresentationCompleteContinuesSession =
                function (e) {
                  this._autoSpinContext.autoContinueSessionOnWpComplete = e;
                }),
              (g.prototype.handleDialogOpened = function (t) {
                if (
                  t !== e.slots.gui.DialogTypeEnum.SLOW_CONNECTION &&
                  t !== e.slots.gui.DialogTypeEnum.OC
                )
                  if (this._roundState.handleDialogOpened)
                    this._roundState.handleDialogOpened(t);
                  else {
                    if (t === e.slots.gui.DialogTypeEnum.JACKPOT_WON) return;
                    if (t === e.slots.gui.DialogTypeEnum.CUSTOM) return;
                    if (this._gameIsIdle)
                      this._game.gui.setDialogModalMode(
                        !0,
                        void 0,
                        "commons.dialogHandling"
                      );
                    else if (t === e.slots.gui.DialogTypeEnum.TECHNICAL_ERROR)
                      this._game.gui.setDialogModalMode(
                        !0,
                        void 0,
                        "commons.dialogHandling"
                      );
                    else {
                      if (
                        t !== e.slots.gui.DialogTypeEnum.INVALID_PLAYER_SESSION
                      )
                        return;
                      this._game.gui.setDialogModalMode(
                        !0,
                        void 0,
                        "commons.dialogHandling"
                      );
                    }
                  }
                else
                  this._roundState.handleDialogOpened &&
                    this._roundState.handleDialogOpened(t);
              }),
              (g.prototype.handleDialogClosed = function (e, t) {
                void 0 === t && (t = null),
                  this._roundState.handleDialogClosed
                    ? (this._game.gui.setDialogModalMode(
                        !1,
                        void 0,
                        "commons.dialogHandling"
                      ),
                      this._roundState.handleDialogClosed(e, t))
                    : (this._game.gui.setDialogModalMode(
                        !1,
                        void 0,
                        "commons.dialogHandling"
                      ),
                      this._game.gui.setDialogModalMode(!1, void 0));
              }),
              (g.prototype.handleTopSpinProgramComplete = function () {
                var t = this._game.model.currentFreeRoundProgram;
                this._game.languageSystem.setParameterValue(
                  "freeRoundTotalWin",
                  t.totalwin.currencyiso +
                    " " +
                    i.globalFormatter.formatAmount2(t.totalwin.amount)
                ),
                  this._game.languageSystem.updateAllDirtyEntries(),
                  this._game.dialogManager.showDialog(
                    e.slots.gui.DialogTypeEnum.TOP_SPINS_COMPLETED
                  );
              }),
              (g.prototype.handleBetChangedByBridgeEvent = function (e) {
                var t;
                this.updatePaytableSymbolValues(
                  null != (t = e.currentbet)
                    ? t
                    : this.slotGame.model.placedBetAmount
                );
              }),
              (g.prototype.handleGameStateInitializationComplete = function (
                e
              ) {
                e();
              }),
              (g.prototype.handleCustomDialogClosed = function (e) {}),
              (g.prototype.recoverFromErrorWithPlacingBet = function (e, t) {
                var n = this;
                this._game.model.clearActiveGameRound(),
                  this._game.jsBridge.syncRoundStartedWithEnded();
                if (
                  (this.handlePendingRoundCancelled(),
                  (this._roundStateCallbacks.finalWinPresentationAbortedCallback =
                    function () {
                      n.handleFinalWinPresentationAborted();
                    }),
                  this._currentContext === this._autoSpinContext)
                )
                  this.activateSingleSpinContext();
                else if (this._currentContext === this._freeRoundContext) {
                  var o = this._game.model.currentFreeRoundProgram;
                  o && o.freeroundsremaining++;
                }
                u.setCompleteCallback(function () {}),
                  (this._roundStateCallbacks.startNewRoundRequestedCallback =
                    function (e) {
                      n.handleStartNewRoundRequested(e);
                    }),
                  (this._roundStateCallbacks.finalWinPresentationAbortedCallback =
                    function () {
                      n.handleFinalWinPresentationAborted();
                    }),
                  this._roundState.recoverFromError(e, function () {
                    m(function (e) {
                      e.recoveredFromError();
                    }),
                      t();
                  });
              }),
              (g.prototype.handleUpdateSoundFromBridgeEvent = function (e) {
                this.toggleSound(e.enabled);
              }),
              (g.prototype.handlePreventGamePlay = function () {
                var e = this;
                this._game.nextRoundStartGate.preventGamePlay(),
                  this._singleSpinContext.preventGamePlay(),
                  this._autoSpinContext.preventGamePlay(),
                  this._freeRoundContext.preventGamePlay(),
                  this._game.jsBridge.onResumeGamePlay.addOnce(function () {
                    u.cancelEvent("commons:gamePlayPrevention"),
                      e._game.nextRoundStartGate.gamePlayResumed(),
                      e._game.jsBridge.onPreventGamePlay.addOnce(
                        e.handlePreventGamePlay,
                        e
                      );
                  }),
                  u.addLateEvent({
                    pre: function () {
                      return !1 === e.slotGame.gamePlayAllowed;
                    },
                    id: "commons:gamePlayPrevention",
                    exec: function (t) {
                      e._game.jsBridge.onResumeGamePlay.addOnce(function () {
                        t();
                      }, e),
                        e._game.nextRoundStartGate.gamePlayPrevented(),
                        e._game.jsBridge.gamePlayPrevented();
                    },
                  });
              }),
              (g.prototype.handleOngoingTweensOnErrorOccurred = function () {
                window.TweenMax && window.TweenMax.killAll();
              }),
              (g.prototype.createErrorHandlingSequence = function () {
                return l();
              }),
              (g.prototype.handleSessionOrPlayerLimitExceededError =
                function () {
                  var t = this,
                    n = this.slotGame,
                    o = (this._errorHandlingSequence =
                      this.createErrorHandlingSequence());
                  o.startWith
                    .call(function (o) {
                      var i;
                      (
                        null === (i = n.latestError.clientData) || void 0 === i
                          ? void 0
                          : i.messages
                      )
                        ? (n.model.setPlayerMessageQueue(
                            n.latestError.clientData.messages
                          ),
                          n.messageManager.handleMessageQueue(function () {
                            n.gui.setDialogModalMode(
                              !0,
                              !1,
                              "commons.criticalError:playerLimit-nonRecoverable"
                            ),
                              o && o();
                          }))
                        : (n.gui.setDialogModalMode(
                            !0,
                            !1,
                            "commons.criticalError:playerLimit-nonRecoverable"
                          ),
                          n.dialogManager.showDialog(
                            e.slots.gui.DialogTypeEnum.PLAYER_LIMIT_EXCEEDED,
                            function () {
                              t._game.messageManager.handleMessageQueue(
                                function () {
                                  o && o();
                                }
                              );
                            }
                          ));
                    })
                    .then.callSync(function () {
                      t._game.jsBridge.errorOccurred(n.latestError);
                    }).then,
                    o.run();
                }),
              (g.prototype.handleServerSideOutOfMoneyError = function () {
                var t,
                  n = this,
                  o = this.slotGame,
                  i = o.latestError,
                  a = (this._errorHandlingSequence =
                    this.createErrorHandlingSequence()),
                  r = a.startWith.call(function (a) {
                    var r, s;
                    if (
                      (u.blockProcessing("commons.handlingError:serverSideOOM"),
                      null === (r = o.latestError.clientData) || void 0 === r
                        ? void 0
                        : r.messages)
                    )
                      o.model.setPlayerMessageQueue(
                        o.latestError.clientData.messages
                      ),
                        o.messageManager.handleMessageQueue(function () {
                          a && a();
                        });
                    else if (
                      null === (s = i) || void 0 === s ? void 0 : s.silent
                    )
                      a();
                    else {
                      var l =
                        e.slots.gui.DialogTypeEnum
                          .SERVER_SIDE_INSUFFICIENT_FUNDS;
                      o.dialogManager.showDialog(l, function (e) {
                        (t = e),
                          n._currentContext.handleDialogButtonClicked(l, t),
                          a(t);
                      });
                    }
                  }).then;
                (r = (r = r.call(function (e) {
                  n.cleanUpModelAndContextForErrorRecovery(),
                    (o.pausedByClient = !1),
                    n._game.gui.updateGuiButtonOverrides(
                      "commons.blockAutoPlayAccessDuringGameRound",
                      null
                    ),
                    n._roundState.recoverFromError(i, e);
                }).then).callSync(function () {
                  m(function (e) {
                    e.recoveredFromError();
                  }),
                    n._game.jsBridge.errorOccurred(i),
                    t === e.slots.gui.GuiButtonIds.DEPOSIT &&
                      n._game.jsBridge.openDepositPage(),
                    n._game.jsBridge.sendGameSpecificOutboundEvent(
                      "recoveredfromerror",
                      { senderid: void 0, error: i }
                    );
                }).then).callSync(function () {
                  n._game.realityCheckManager.isPlaying(!0),
                    n._game.jsBridge.idleStateEntered(),
                    t === e.slots.gui.GuiButtonIds.BET &&
                      n.handleBetButtonClicked(),
                    u.addPriorityEvent(
                      n._game.messageManager.createIdleStateEvent()
                    ),
                    u.unblockProcessing("commons.handlingError:serverSideOOM"),
                    u.enableProcessing();
                }),
                  a.run();
              }),
              (g.prototype.cleanUpModelAndContextForErrorRecovery =
                function () {
                  var e = this;
                  if (
                    (this._game.model.clearActiveGameRound(),
                    this._game.jsBridge.syncRoundStartedWithEnded(),
                    this._game.model.setClientBalance(
                      this._game.model.serverBalance
                    ),
                    this._game.updateCashField(),
                    this._currentContext === this._autoSpinContext)
                  )
                    this.activateSingleSpinContext();
                  else if (this._currentContext === this._freeRoundContext) {
                    var t = this._game.model.currentFreeRoundProgram;
                    t && t.freeroundsremaining++;
                  }
                  u.setCompleteCallback(function () {}),
                    (this._roundStateCallbacks.startNewRoundRequestedCallback =
                      function (t) {
                        e.handleStartNewRoundRequested(t);
                      }),
                    (this._roundStateCallbacks.finalWinPresentationAbortedCallback =
                      function () {
                        e.handleFinalWinPresentationAborted();
                      });
                }),
              (g.prototype.handleBetRejectedError = function () {
                var t = this,
                  n = this.slotGame,
                  o = n.latestError,
                  i = (this._errorHandlingSequence =
                    this.createErrorHandlingSequence()),
                  a = i.startWith.call(function (i) {
                    var a, r;
                    if (
                      (u.blockProcessing("commons.handlingError:betRejected"),
                      null === (a = n.latestError.clientData) || void 0 === a
                        ? void 0
                        : a.messages)
                    )
                      n.model.setPlayerMessageQueue(
                        n.latestError.clientData.messages
                      ),
                        n.messageManager.handleMessageQueue(function () {
                          i && i();
                        });
                    else if (
                      null === (r = o) || void 0 === r ? void 0 : r.silent
                    )
                      i();
                    else {
                      var s = e.slots.gui.DialogTypeEnum.BET_REJECTED;
                      n.dialogManager.showDialog(s, function (e) {
                        e,
                          t._currentContext.handleDialogButtonClicked(s, e),
                          i();
                      });
                    }
                  }).then;
                (a = a.call(function (e) {
                  t.cleanUpModelAndContextForErrorRecovery(),
                    (n.pausedByClient = !1),
                    t._game.gui.updateGuiButtonOverrides(
                      "commons.blockAutoPlayAccessDuringGameRound",
                      null
                    ),
                    t._roundState.recoverFromError(o, e);
                }).then).callSync(function () {
                  m(function (e) {
                    e.recoveredFromError();
                  }),
                    t._game.realityCheckManager.isPlaying(!0),
                    u.addPriorityEvent(
                      t._game.messageManager.createIdleStateEvent()
                    ),
                    u.unblockProcessing("commons.handlingError:betRejected"),
                    u.enableProcessing();
                }).then,
                  i.run();
              }),
              (g.prototype.handleCriticalError = function (e, t) {
                var n,
                  o = this,
                  i = this.slotGame,
                  a = (this._errorHandlingSequence =
                    this.createErrorHandlingSequence());
                t = null != t ? t : i.latestError;
                var r = a.startWith.noop().then;
                i.model.setPlayerMessageQueue([]),
                  (r = (
                    null === (n = t.clientData) || void 0 === n
                      ? void 0
                      : n.messages
                  )
                    ? r.call(function (e) {
                        u.blockProcessing(
                          "commons.handlingError:criticalError-nonRecoverable"
                        );
                        var t = d(void 0, !1);
                        (t.soundButton = void 0),
                          (t.popUpMenuButton = void 0),
                          (t.backToLobbyButton = void 0),
                          i.gui.updateGuiButtonOverrides(
                            "commons.criticalError-nonRecoverable",
                            t
                          ),
                          i.model.setPlayerMessageQueue(
                            i.latestError.clientData.messages
                          ),
                          i.messageManager.handleMessageQueue(function () {
                            e && e();
                          });
                      }).then
                    : r.call(function (n) {
                        var o;
                        if (
                          (u.blockProcessing(
                            "commons.handlingError:criticalError-nonRecoverable"
                          ),
                          null === (o = t) || void 0 === o ? void 0 : o.silent)
                        )
                          n();
                        else {
                          var a = d(void 0, !1);
                          (a.soundButton = void 0),
                            (a.popUpMenuButton = void 0),
                            (a.backToLobbyButton = void 0),
                            i.gui.updateGuiButtonOverrides(
                              "commons.criticalError-nonRecoverable",
                              a
                            ),
                            i.dialogManager.showDialog(e, function () {
                              n();
                            });
                        }
                      }).then).call(function (e) {
                    o._game.jsBridge.onRecoverFromError.addOnce(function () {
                      i.gui.updateGuiButtonOverrides(
                        "commons.criticalError-nonRecoverable",
                        null
                      ),
                        o.recoverFromErrorWithPlacingBet(t, e),
                        u.unblockProcessing(
                          "commons.handlingError:criticalError-nonRecoverable"
                        );
                    }),
                      o._game.jsBridge.errorOccurred(i.latestError);
                  }).then,
                  a.run();
              }),
              (g.prototype.handleLoginDialogButtonClicked = function (t, n) {
                this._game.dialogManager.closeCurrentDialog(n),
                  n === e.slots.gui.GuiButtonIds.LOGIN ||
                  n === e.slots.gui.GuiButtonIds.NO
                    ? (this.handleContinuePlayAfterLoginDialog(),
                      this._currentContext.handleDialogButtonClicked(t, n))
                    : ((this._game.pausedByClient = !m()),
                      u.blockProcessing(
                        "commons:loginDialog-playForRealSelected"
                      ),
                      this._game.gui.setDialogModalMode(
                        !0,
                        !1,
                        "commons:loginDialog-playForRealSelected"
                      ),
                      this._game.jsBridge.openLoginPage());
              }),
              (g.prototype.addStartupGuiButtonOverrides = function () {
                var e = d(void 0, !1);
                (e.skip.enabled = void 0),
                  (e.soundButton.enabled = void 0),
                  (e.vibrateButton.enabled = void 0),
                  (e.fastPlayButton.enabled = void 0),
                  this._game.gui.updateGuiButtonOverrides(
                    "commons.gameStartup",
                    e
                  );
              }),
              (g.removeStartupGuiButtonOverrides = function (e) {
                e.updateGuiButtonOverrides("commons.gameStartup", null);
              }),
              (g.prototype.handleErrorThroughExternalErrorHandling = function (
                e
              ) {
                var t = this._game;
                this.pause(!0, !0),
                  this._controlPanelVisible
                    ? this.showControlPanel(!1, void 0, !1)
                    : m(function (e) {
                        e.hideControlPanel(!1);
                      }),
                  t.dialogManager.closeCurrentDialogSilently(),
                  e.code ===
                    tk.gs.rs.e.ServerErrorCodes.SESSION_LIMIT_EXCEEDED ||
                  e.code === tk.gs.rs.e.ServerErrorCodes.PLAYER_LIMIT_EXCEEDED
                    ? this.handleCriticalErrorExternally(e)
                    : e.code === tk.gs.rs.e.ServerErrorCodes.OUT_OF_MONEY ||
                      e.code === tk.gs.rs.e.ServerErrorCodes.BET_REJECTED ||
                      e.code === tk.gs.rs.e.ServerErrorCodes.REGULATORY_ERROR
                    ? this.handleRecoverableErrorExternally(e)
                    : (e.code ===
                        tk.gs.rs.e.ServerErrorCodes.BLOCKED_JURISDICTION ||
                        e.code ===
                          tk.gs.rs.e.ServerErrorCodes.BROWSER_NOT_SUPPORTED ||
                        e.code ===
                          tk.gs.rs.e.ServerErrorCodes.DEVICE_NOT_SUPPORTED ||
                        e.code ===
                          tk.gs.rs.e.ServerErrorCodes.INVALID_GAME_SESSION ||
                        (e.code,
                        tk.gs.rs.e.ServerErrorCodes.PLAYER_SESSION_EXPIRED),
                      this.handleCriticalErrorExternally(e));
              }),
              (g.prototype.handleCriticalErrorExternally = function (e) {
                var t = this,
                  n = this.slotGame,
                  o = (this._errorHandlingSequence =
                    this.createErrorHandlingSequence());
                o.startWith
                  .call(function (e) {
                    var t = d(void 0, !1);
                    (t.soundButton = void 0),
                      (t.popUpMenuButton = void 0),
                      (t.backToLobbyButton = void 0),
                      n.gui.updateGuiButtonOverrides(
                        "commons.criticalError-nonRecoverable",
                        t
                      ),
                      e();
                  })
                  .then.call(function (o) {
                    n.gui.updateGuiButtonOverrides(
                      "commons.criticalError-nonRecoverable",
                      null
                    ),
                      t._game.jsBridge.onRecoverFromError.addOnce(function () {
                        t.recoverFromErrorWithPlacingBet(e, o);
                      }),
                      t._game.jsBridge.errorOccurred(e);
                  }).then,
                  o.run();
              }),
              (g.prototype.handleRecoverableErrorExternally = function (e) {
                var t = this,
                  n = this.slotGame,
                  o = (this._errorHandlingSequence =
                    this.createErrorHandlingSequence()),
                  i = o.startWith.call(function (o) {
                    var i = d(void 0, !1);
                    (i.soundButton = void 0),
                      (i.popUpMenuButton = void 0),
                      (i.backToLobbyButton = void 0),
                      n.gui.updateGuiButtonOverrides(
                        "commons.criticalError-nonRecoverable",
                        i
                      ),
                      u.blockProcessing(
                        "commons.handlingError:recoverableError"
                      ),
                      n.jsBridge.onRecoverFromError.addOnce(function () {
                        t.recoverFromErrorWithPlacingBet(e, o);
                      }),
                      n.jsBridge.errorOccurred(e);
                  }).then;
                (i =
                  this._game.messageManager.createMessageHandlingItem(
                    i
                  )).callSync(function () {
                  n.gui.updateGuiButtonOverrides(
                    "commons.criticalError-nonRecoverable",
                    null
                  ),
                    n.jsBridge.idleStateEntered(),
                    n.gui.updateGuiButtonOverrides(
                      "commons.blockAutoPlayAccessDuringGameRound",
                      null
                    ),
                    u.unblockProcessing(
                      "commons.handlingError:recoverableError"
                    ),
                    u.enableProcessing();
                }),
                  o.run();
              }),
              (g.prototype.handleClientSideOOM = function () {
                var t = this;
                this._game.initGameData.externalerrorhandling
                  ? (this._game.jsBridge.onRecoverFromError.addOnce(
                      function () {
                        u.enableProcessing();
                      }
                    ),
                    this._game.jsBridge.errorOccurred({
                      code: o.OUT_OF_MONEY,
                      message: "Client side OOM",
                      callstack: null,
                    }))
                  : this._game.dialogManager.showDialog(
                      e.slots.gui.DialogTypeEnum.INSUFFICIENT_FUNDS,
                      function (n) {
                        t._currentContext.handleDialogButtonClicked(
                          e.slots.gui.DialogTypeEnum.INSUFFICIENT_FUNDS,
                          n
                        ),
                          u.enableProcessing();
                      }
                    );
              }),
              (g.prototype.continueAutoPlaySessionOnWpComplete = function () {
                var e = this;
                this._currentContext === this._autoSpinContext &&
                  (!1 === this._gameIsIdle ||
                    (u.setCompleteCallback(function () {
                      e.handleStartNewRoundRequested();
                    }),
                    u.enableProcessing()));
              }),
              (g.prototype.handlePendingRoundCancelled = function () {
                var e = this;
                (this._roundClosed = !0),
                  (this._gameIsIdle = !0),
                  (this._newRoundPending = !1),
                  this._game.gui.updateGuiButtonOverrides(
                    "commons.blockAutoPlayAccessDuringGameRound",
                    null
                  ),
                  u.setCompleteCallback(function () {}),
                  (this._roundStateCallbacks.startNewRoundRequestedCallback =
                    function (t) {
                      e.handleStartNewRoundRequested(t);
                    }),
                  (this._roundStateCallbacks.finalWinPresentationAbortedCallback =
                    function () {
                      e.handleFinalWinPresentationAborted();
                    }),
                  this._game.nextRoundStartGate.pendingRoundCancelled();
              }),
              (g.prototype.handleNewRoundPending = function () {
                (this._roundClosed = !1),
                  (this._gameIsIdle = !1),
                  (this._newRoundPending = !0),
                  (this._roundStateCallbacks.startNewRoundRequestedCallback =
                    function () {}),
                  (this._roundStateCallbacks.finalWinPresentationAbortedCallback =
                    function () {}),
                  u.disableProcessing();
              }),
              (g.prototype.handleAutoPlaySessionComplete = function () {
                var e = this._game.model.autoPlayState;
                (e.started = !1),
                  (e.completed = !0),
                  (e.aborted = !1),
                  (e.roundsLeft = e.roundsTotal),
                  (e.roundsPlayed = 0),
                  this._autoSpinContext.handleAutoPlayRoundsSelected(
                    e.roundsLeft
                  ),
                  this.activateAutoSpinContext();
              }),
              (g.prototype.handleFeatureBought = function (e) {
                this._game.model.placedBetAmount !== e.bet &&
                  this.handleChangeOfBetValue(e.bet),
                  (this._game.model.featureBuyCost =
                    this._game.model.getFeatureBuyCost(e.id, e.bet)),
                  this._currentContext.handleFeatureBought(e);
              }),
              (g.prototype.handleChangeBet = function (e) {
                this._game.model.placedBetAmount !== e &&
                  this.handleChangeOfBetValue(e);
              }),
              g
            );
          })(e.slots.phaser.AbstractGameExecutionState);
        n.GameState = g;
      })(t.phaser || (t.phaser = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = e.utils.GlobalIdleStateEventQueue,
          o = e.slots.phaser.GameState,
          i = e.slots.gui.isUsingGUI_2_0,
          a = (function () {
            function t(e, t) {
              (this.isActive = !1),
                (this._isRestoreState = !1),
                (this._game = e),
                (this._roundState = t);
            }
            return (
              (t.prototype.activate = function () {
                this.isActive ||
                  ((this.isActive = !0),
                  this._game.gui.updateGuiButtonOverrides(
                    "commons.freeRoundContext.active",
                    {
                      autoSpinConfigButton: { enabled: !1 },
                      betButton: { enabled: !1 },
                    }
                  ),
                  this._game.nextRoundStartGate.freeRoundContextActivated());
              }),
              (t.prototype.deactivate = function () {
                (this.isActive = !1),
                  this._game.gui.updateGuiButtonOverrides(
                    "commons.freeRoundContext.active",
                    {
                      autoSpinConfigButton: { enabled: void 0 },
                      betButton: { enabled: void 0 },
                    }
                  );
              }),
              (t.prototype.preventGamePlay = function () {}),
              (t.prototype.restore = function (e) {
                (this._isRestoreState = !0),
                  this._game.keepAliveManager.isPlaying(!0),
                  this._game.realityCheckManager.isPlaying(!0),
                  this._game.gui.setDialogModalMode(
                    !0,
                    !1,
                    "freeRoundContext:restoringGameRound"
                  ),
                  (this._restorePreDialogSeq = e),
                  this._roundState.restoreGameRound();
              }),
              (t.prototype.resumeRestoredRound = function () {
                this._game.gui.setDialogModalMode(
                  !1,
                  !1,
                  "freeRoundContext:restoringGameRound"
                ),
                  this._roundState.resumeRestoredGameRound();
              }),
              (t.prototype.startNewRound = function () {
                var e = this;
                this.newRoundPendingCallback(),
                  this._game.nextRoundStartGate.newRoundRequested(function () {
                    e.enterRoundState();
                  });
              }),
              (t.prototype.enterUponAutoPlayAborted = function () {
                throw new Error(
                  "FreeRoundContext.enterUponAutoPlayAborted. Autoplay during free rounds is not supported."
                );
              }),
              (t.prototype.handleAutoPlayRoundsSelected = function (e) {
                throw new Error(
                  "FreeRoundContext.handleAutoPlayRoundsSelected. Autoplay during free rounds is not supported."
                );
              }),
              (t.prototype.handleAutoPlayRoundsCleared = function () {
                throw new Error(
                  "FreeRoundContext.handleAutoPlayRoundsCleared. Autoplay during free rounds is not supported."
                );
              }),
              (t.prototype.handleRoundStarted = function () {}),
              (t.prototype.handleGameRoundRestored = function () {
                var t = this;
                o.removeStartupGuiButtonOverrides(this._game.gui),
                  this._restorePreDialogSeq
                    ? this._restorePreDialogSeq().then(function () {
                        t._game.messageManager.handleMessageQueue(function () {
                          t._game.dialogManager.showDialog(
                            e.slots.gui.DialogTypeEnum.GAME_ROUND_RESTORED
                          );
                        });
                      })
                    : this._game.messageManager.handleMessageQueue(function () {
                        t._game.dialogManager.showDialog(
                          e.slots.gui.DialogTypeEnum.GAME_ROUND_RESTORED
                        );
                      });
              }),
              (t.prototype.handleFinalWinPresentationStarted = function () {
                this._game.keepAliveManager.isPlaying(!1);
                var e = this._game.model.currentFreeRoundProgram;
                this._game.nextRoundStartGate.winPresentationStarted(),
                  (this._isRestoreState = !1),
                  e.freeroundsremaining > 0
                    ? this._game.gui.setFreeRoundsMode(
                        e.freeroundsremaining,
                        !0
                      )
                    : (this._game.gui.setFreeRoundsMode(
                        e.freeroundsremaining,
                        !1
                      ),
                      this._game.gui.updateGuiButtonOverrides(
                        "freeRoundContext:freeRoundsEnding",
                        {
                          spin: { enabled: !1 },
                          startAutoPlay: { enabled: !1 },
                          startFreeRounds: { enabled: !1 },
                          autoSpinConfigButton: { enabled: !1 },
                          betButton: { enabled: !1 },
                          stopAutoPlay: { enabled: !1 },
                        }
                      ));
              }),
              (t.prototype.handleFinalWinPresentationAborted = function () {
                n.disableProcessing(),
                  this._game.keepAliveManager.isPlaying(!1),
                  this.startNewRound();
              }),
              (t.prototype.handleFinalWinPresentationComplete = function () {
                this._game.keepAliveManager.isPlaying(!1),
                  this._game.nextRoundStartGate.winPresentationComplete(),
                  0 ===
                    this._game.model.currentFreeRoundProgram
                      .freeroundsremaining &&
                    (this._game.gui.updateGuiButtonOverrides(
                      "freeRoundContext:freeRoundsEnding",
                      null
                    ),
                    this.freeRoundProgramCompletedCallback());
              }),
              (t.prototype.enterRoundState = function () {
                var e = this._game.model.currentFreeRoundProgram;
                e.freeroundsremaining--,
                  this._game.languageSystem.setParameterValue(
                    "freeRoundsLeft",
                    e.freeroundsremaining
                  ),
                  this._game.keepAliveManager.isPlaying(!0),
                  this._game.realityCheckManager.isPlaying(!0),
                  this._game.keepAliveManager.keepAlive(),
                  this._game.winCapManager.resetOnNewGameRound();
                var t = this._startNewRoundData;
                (this._startNewRoundData = null),
                  i(function (e) {
                    e.roundStarted();
                  }),
                  this._roundState.newRoundAccepted(t);
              }),
              (t.prototype.startFreeRoundProgram = function () {
                var e = this;
                this._roundState.setupForFreeRoundContext(),
                  i(function (t) {
                    e._game.updateCashField(), e._game.updateBetField();
                  }),
                  this._game.languageSystem.updateAllDirtyEntries();
              }),
              (t.prototype.handleGuiButtonClicked = function (e, t) {
                this._roundState.handleGuiButtonClicked(e, t);
              }),
              (t.prototype.handleDialogButtonClicked = function (t, o, a) {
                t !== e.slots.gui.DialogTypeEnum.OC &&
                  (t === e.slots.gui.DialogTypeEnum.FREE_ROUNDS_COMPLETED
                    ? (this._game.dialogManager.closeCurrentDialog(o),
                      this._roundState.handleDialogButtonClicked(t, o, a),
                      null == this._game.model.getNextActiveFreeRoundProgram(!1)
                        ? (this._game.gui.setSingleSpinMode(!1),
                          this._game.dialogManager.showDialog(
                            e.slots.gui.DialogTypeEnum
                              .NOW_PLAYING_FOR_YOUR_OWN_MONEY
                          ))
                        : this.closeFreeRoundProgramRequestedCallback())
                    : t ===
                      e.slots.gui.DialogTypeEnum.NOW_PLAYING_FOR_YOUR_OWN_MONEY
                    ? (this._game.dialogManager.closeCurrentDialog(o),
                      this._game.setClientBalanceToServerBalance(!1),
                      this._roundState.handleDialogButtonClicked(t, o, a),
                      this._game.updateCashField(),
                      i(function (e) {
                        e.exitFreeRoundsMode();
                      }),
                      this.closeFreeRoundProgramRequestedCallback())
                    : t ===
                        e.slots.gui.DialogTypeEnum
                          .PLAY_TIME_EXCEEDED_LOST_MONEY ||
                      t ===
                        e.slots.gui.DialogTypeEnum.PLAY_TIME_EXCEEDED_WON_MONEY
                    ? (this._game.dialogManager.closeCurrentDialog(o),
                      this._roundState.handleDialogButtonClicked(t, o, a))
                    : (this._game.dialogManager.closeCurrentDialog(o),
                      this._roundState.handleDialogButtonClicked(t, o, a),
                      t === e.slots.gui.DialogTypeEnum.FREE_ROUNDS_FOUND &&
                        n.addEvent(
                          this._game.messageManager.createIdleStateEvent()
                        )));
              }),
              (t.prototype.handleBetChanged = function () {}),
              (t.prototype.handleSpacebarPressed = function () {
                this._roundState.handleSpacebarPressed();
              }),
              (t.prototype.handleStartNewRoundRequested = function (e) {
                (this._startNewRoundData = e),
                  this._roundState.abortFinalWinPresentation();
              }),
              (t.prototype.handleStopConditionDialogClosed = function () {}),
              (t.prototype.handleRealityCheckClosed = function () {
                this._game.gui.setFreeRoundsMode(
                  this._game.model.currentFreeRoundProgram.freeroundsremaining,
                  !0
                );
              }),
              (t.prototype.handleFeatureBought = function (e) {
                throw new Error(
                  "Buy feature is not supported in free rounds mode."
                );
              }),
              t
            );
          })();
        t.FreeRoundContext = a;
      })(t.fsm || (t.fsm = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        var t = (function () {
          function e() {
            this._isActive = !1;
          }
          return (
            Object.defineProperty(e.prototype, "isActive", {
              get: function () {
                return this._isActive;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.activate = function () {
              this._isActive = !0;
            }),
            (e.prototype.deactivate = function () {
              this._isActive = !1;
            }),
            (e.prototype.startReplay = function (e) {}),
            (e.prototype.handleAutoPlayRoundsSelected = function (e) {}),
            (e.prototype.restore = function () {}),
            (e.prototype.handleBetDialogButtonClicked = function () {}),
            (e.prototype.handleGuiButtonClicked = function (e, t) {}),
            (e.prototype.resumeRestoredRound = function () {}),
            (e.prototype.handleDialogButtonClicked = function (e, t, n) {}),
            (e.prototype.handleSpacebarPressed = function () {}),
            (e.prototype.handleRoundStarted = function () {}),
            (e.prototype.handleFinalWinPresentationStarted = function () {}),
            (e.prototype.handleFinalWinPresentationComplete = function () {}),
            (e.prototype.handleFinalWinPresentationAborted = function () {}),
            (e.prototype.handleGameRoundRestored = function () {}),
            (e.prototype.handleBetChanged = function () {}),
            (e.prototype.handleStartNewRoundRequested = function () {}),
            (e.prototype.handleLossLimitDialogClosed = function () {}),
            (e.prototype.handleStopConditionDialogClosed = function () {}),
            (e.prototype.preventGamePlay = function () {}),
            (e.prototype.resumeGamePlay = function () {}),
            (e.prototype.handleRealityCheckClosed = function () {}),
            (e.prototype.handleFeatureBought = function (e) {}),
            e
          );
        })();
        e.ReplayMode = t;
      })(e.fsm || (e.fsm = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = e.utils.GlobalIdleStateEventQueue,
          o = e.slots.phaser.GameState,
          i = e.slots.gui.createGuiOverridesForActiveGameRound,
          a = e.slots.gui.isUsingGUI_2_0,
          r = (function () {
            function t(e, t) {
              (this.isActive = !1), (this._game = e), (this._roundState = t);
            }
            return (
              (t.prototype.activate = function () {
                this.isActive ||
                  ((this.isActive = !0),
                  this._game.updateAvailableBets(!1),
                  this._game.nextRoundStartGate.singleSpinContextActivated(),
                  this._roundState.setupForSingleSpinContext(),
                  this._game.messageManager.onMessageProcessing.add(
                    this.cancelPendingRoundIfMessageProcessing,
                    this
                  ));
              }),
              (t.prototype.deactivate = function () {
                (this.isActive = !1),
                  this._game.messageManager.onMessageProcessing.remove(
                    this.cancelPendingRoundIfMessageProcessing,
                    this
                  );
              }),
              (t.prototype.cancelPendingRoundIfMessageProcessing = function (
                e
              ) {
                !1 === e && this.pendingRoundCancelled();
              }),
              (t.prototype.preventGamePlay = function () {}),
              (t.prototype.restore = function (e) {
                (this._restorePreDialogSeq = e),
                  this._game.keepAliveManager.isPlaying(!0),
                  this._game.gui.setDialogModalMode(
                    !0,
                    void 0,
                    "singleSpinContext:restoringGameRound"
                  ),
                  this._roundState.restoreGameRound();
              }),
              (t.prototype.resumeRestoredRound = function () {
                this._game.gui.setDialogModalMode(
                  !1,
                  void 0,
                  "singleSpinContext:restoringGameRound"
                ),
                  this._game.realityCheckManager.isPlaying(!0),
                  this._roundState.resumeRestoredGameRound();
              }),
              (t.prototype.startNewRound = function () {
                var e = this;
                this._game.realityCheckManager.isPlaying(!0),
                  this._game.keepAliveManager.isPlaying(!0),
                  this._game.keepAliveManager.keepAlive(),
                  this._game.winCapManager.resetOnNewGameRound(),
                  n.disableProcessing(),
                  this._game.loginCheckManager.roundStarted(),
                  this._game.nextRoundStartGate.newRoundRequested(function () {
                    var t = e._startNewRoundData;
                    (e._startNewRoundData = null),
                      a(function (e) {
                        e.roundStarted();
                      }),
                      e._roundState.newRoundAccepted(t);
                  });
              }),
              (t.prototype.handleAutoPlayRoundsSelected = function (e) {
                throw "SingleSpinContext.handleAutoPlayRoundsSelected: This should not happen. AutoSpinMode should handle this.";
              }),
              (t.prototype.handleAutoPlayRoundsCleared = function () {
                (this._game.model.autoPlayState.roundsLeft =
                  this._game.model.autoPlayState.roundsTotal =
                    0),
                  this._game.gui.setSingleSpinMode(!0);
              }),
              (t.prototype.handleFinalWinPresentationComplete = function () {
                this._game.nextRoundStartGate.winPresentationComplete();
              }),
              (t.prototype.handleGameRoundRestored = function () {
                var t = this;
                o.removeStartupGuiButtonOverrides(this._game.gui),
                  this._restorePreDialogSeq
                    ? this._restorePreDialogSeq().then(function () {
                        t._game.messageManager.handleMessageQueue(function () {
                          t._game.dialogManager.showDialog(
                            e.slots.gui.DialogTypeEnum.GAME_ROUND_RESTORED
                          );
                        });
                      })
                    : this._game.messageManager.handleMessageQueue(function () {
                        t._game.dialogManager.showDialog(
                          e.slots.gui.DialogTypeEnum.GAME_ROUND_RESTORED
                        );
                      });
              }),
              (t.prototype.handleRoundStarted = function () {}),
              (t.prototype.handleFinalWinPresentationStarted = function () {
                this._game.keepAliveManager.isPlaying(!1),
                  this._game.nextRoundStartGate.winPresentationStarted(),
                  this._game.gui.setSingleSpinMode(!0),
                  n.addEvent(this._game.messageManager.createIdleStateEvent());
              }),
              (t.prototype.handleGuiButtonClicked = function (e, t) {
                this._roundState.handleGuiButtonClicked(e, t);
              }),
              (t.prototype.handleDialogButtonClicked = function (t, n, o) {
                t !== e.slots.gui.DialogTypeEnum.OC &&
                  (this._game.dialogManager.closeCurrentDialog(n),
                  this._roundState.handleDialogButtonClicked(t, n));
              }),
              (t.prototype.setupForNormalPlayAfterFreeRounds = function () {
                this._game.gui.setSingleSpinMode(!0);
              }),
              (t.prototype.handleFinalWinPresentationAborted = function () {
                this._game.keepAliveManager.isPlaying(!1),
                  this.newRoundPendingCallback(),
                  this.startNewRound();
              }),
              (t.prototype.handleSpacebarPressed = function () {
                this._roundState.handleSpacebarPressed();
              }),
              (t.prototype.handleBetChanged = function () {
                this._game.gui.setSingleSpinMode(!0);
              }),
              (t.prototype.handleStartNewRoundRequested = function (e) {
                (this._startNewRoundData = e),
                  this._roundState.abortFinalWinPresentation();
              }),
              (t.prototype.handleStopConditionDialogClosed = function () {}),
              (t.prototype.handleRealityCheckClosed = function () {
                this._game.gui.setSingleSpinMode(!0);
              }),
              (t.prototype.sendGetBalanceRequestThenRetry = function (e) {
                var t = this;
                if (this._game.model.realPlay) {
                  n.blockProcessing("singleSpin:updatingBalance"),
                    this._game.gui.updateGuiButtonOverrides(
                      "singleSpin:updatingBalance",
                      i()
                    );
                  var o = function () {
                    t._game.slowConnectionTracker.responseReceived(),
                      n.unblockProcessing("singleSpin:updatingBalance"),
                      t._game.gui.updateGuiButtonOverrides(
                        "singleSpin:updatingBalance",
                        null
                      ),
                      e();
                  };
                  this._game.slowConnectionTracker.requestSent(),
                    this._game.requestMaker.sendGetBalanceRequest(
                      {
                        playerSessionId: this._game.model.playerSessionId,
                        gameId: this._game.model.gameId,
                        distributionChannel:
                          this._game.model.distributionChannel,
                      },
                      function (e) {
                        t._game.model.updatePlayerAccounts(e.playeraccounts),
                          t._game.model.updateTotalBalance(e.totalbalance),
                          t._game.setClientBalanceToServerBalance(!1),
                          t._game.updateCashField(),
                          t._game.sendBalanceChangedCallToJsBridge(),
                          o();
                      },
                      o
                    );
                } else e();
              }),
              (t.prototype.handleFeatureBought = function (e) {
                this._roundState.handleFeatureBought(e);
              }),
              t
            );
          })();
        t.SingleSpinContext = r;
      })(t.fsm || (t.fsm = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = (function (e) {
          function t(t, n, o, i) {
            var a = e.call(this, t.model, n, o, i) || this;
            return (a._game = t), a.setupDefaultBalanceUpdaterOnErrors(), a;
          }
          return (
            __extends(t, e),
            (t.prototype.performGetJackpot = function (e, t, n, o) {
              var i = {
                  classname: "tk.gs.rq.GetJackpotRequest",
                  gameid: this._game.model.gameId,
                  requesttype: "gs.getjackpot",
                  operatordata: null,
                  serviceid: "gameservice",
                  deltatime: e,
                  currencies: t,
                  requestid: null,
                  gameinstanceid: this._game.model.gameInstanceId,
                },
                a = {
                  slotModel: this._game.model,
                  completeCallback: n,
                  errorCallback: o,
                },
                r = this.createPostActivity(function (e, t) {
                  var n;
                  if ("number" == typeof t)
                    return (
                      (n = {
                        error: { code: 0, callstack: void 0, message: "" + t },
                        classname: "tk.gs.rs.e.GameServiceErrorResponse",
                        requestid: "" + e.requestObject.requestid,
                        serviceid: "jackpotservice",
                        requesttype: "gs.getjackpot",
                      }),
                      void this.errorCallback(n.error)
                    );
                  if (null != t.serviceresponses[0].error)
                    return (
                      ((n = t.serviceresponses[0]).error.clientData =
                        n.clientData),
                      void this.errorCallback(n.error)
                    );
                  var o = t.serviceresponses[0];
                  this.completeCallback(o);
                }, a);
              r.onError.addOnce(function (e, t, n) {
                return o({
                  callstack: null,
                  code: tk.gs.rs.e.ServerErrorCodes.SERVER_NOT_RESPONDING,
                  message: n,
                });
              });
              var s = this._requestBuilder.createServerRequest(
                this._game.model.operatorId,
                [i]
              );
              r.sendRequest(s, 1);
            }),
            (t.prototype.performGetHistory = function (e, t) {
              var n = {
                  numberofentries: 10,
                  classname: "tk.ts.rq.GetHistoryRequest",
                  gameid: this._game.model.gameId,
                  operatordata: null,
                  operatorid: this._game.model.operatorId,
                  playersessionid: this._game.model.playerSessionId,
                  requesttype: "gs.gethistory",
                  serviceid: this._game.model.gameServiceConfig.id,
                  requestid: null,
                  gameinstanceid: this._game.model.gameInstanceId,
                },
                o = {
                  slotModel: this._game.model,
                  completeCallback: e,
                  errorCallback: t,
                },
                i = this.createPostActivity(function (e, t) {
                  var n;
                  if ("number" == typeof t)
                    return (
                      (n = {
                        error: { code: 0, callstack: void 0, message: "" + t },
                        classname: "tk.gs.rs.e.GameServiceErrorResponse",
                        requestid: "" + e.requestObject.requestid,
                        serviceid: "gameservice",
                        requesttype: "gs.gethistory",
                      }),
                      void this.errorCallback(n.error)
                    );
                  if (null != t.serviceresponses[0].error)
                    return (
                      ((n = t.serviceresponses[0]).error.clientData =
                        n.clientData),
                      void this.errorCallback(n.error)
                    );
                  var o = t.serviceresponses[0];
                  this.slotModel.updateModelFromHistoryData(o),
                    this.completeCallback();
                }, o);
              i.onError.addOnce(function (e, n, o) {
                return t({
                  callstack: null,
                  code: tk.gs.rs.e.ServerErrorCodes.SERVER_NOT_RESPONDING,
                  message: o,
                });
              });
              var a = this._requestBuilder.createServerRequest(
                this._game.model.operatorId,
                [n]
              );
              i.sendRequest(a, 1);
            }),
            (t.prototype.setupDefaultBalanceUpdaterOnErrors = function () {
              var e = this;
              this.setBalanceUpdaterOnErrors(function (t, n) {
                e._game.updateBalanceOnError(t, n);
              });
            }),
            t
          );
        })(e.net.GameServerRequestMaker);
        t.SlotRequestMaker = n;
      })(t.net || (t.net = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = (function () {
          function t(t, n) {
            (this.onConnectionBack = new e.utils.Signal0()),
              (this._game = t),
              (this._isShowing = !1),
              (this._timeToReach = n);
          }
          return (
            (t.prototype.requestSent = function () {
              this._game.time.events.remove(this._timeOutTimer),
                (this._timeOutTimer = this._game.time.events.add(
                  this._timeToReach,
                  this.handleTimeReached,
                  this
                ));
            }),
            (t.prototype.responseReceived = function () {
              this._game.time.events.remove(this._timeOutTimer),
                this.hideDialog(),
                this.onConnectionBack.dispatch();
            }),
            (t.prototype.handleTimeReached = function () {
              (this._isShowing = !0),
                this._game.jsBridge.dialogOpened(
                  e.slots.gui.DialogTypeEnum.SLOW_CONNECTION
                ),
                this._game.gui.setDialogModalMode(
                  !0,
                  !1,
                  "slowConnectionTracker:showingDialog"
                ),
                this._game.gui.showDialog(
                  e.slots.gui.DialogTypeEnum.SLOW_CONNECTION
                );
            }),
            (t.prototype.hideDialog = function () {
              this._isShowing &&
                (this._game.jsBridge.dialogClosed(),
                (this._isShowing = !1),
                this._game.gui.setDialogModalMode(
                  !1,
                  !1,
                  "slowConnectionTracker:showingDialog"
                ),
                this._game.gui.hideDialog());
            }),
            t
          );
        })();
        t.SlowConnectionTracker = n;
      })(t.utils || (t.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = (function (t) {
          function n() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            __extends(n, t),
            (n.prototype.preload = function () {
              (this.load.crossOrigin = !0),
                this.preloadPreloaderSplashImage(),
                this.preloadPreloaderProgressBarImage(),
                this.preloadLanguageResources(),
                (this.game.device.iOS || this.game.device.chrome) &&
                  this.preloadIosDummySound(),
                this.preloadAdditionalBootAssets();
            }),
            (n.prototype.preloadAdditionalBootAssets = function () {}),
            (n.prototype.preloadIosDummySound = function () {
              this.game.load.audio(
                "dummyIosSound",
                this.getAssetUrl("assets/sounds/dummyIosSound.mp3"),
                !0
              );
            }),
            (n.prototype.preloadLanguageResources = function () {
              var e = this,
                t = e.slotGame,
                n = t.initGameData.localesurl,
                o = t.initGameData.localesurlenglish,
                i = t.initGameData.localesurlfallback,
                a = function (t) {
                  return (
                    null == t ||
                      (0 !== t.indexOf("http") &&
                        (0 === t.indexOf("./") ||
                          0 === t.indexOf("../") ||
                          (t = e.getAssetUrl(t)))),
                    t
                  );
                };
              (n = a(n)),
                (o = a(o)),
                (i = a(i)),
                e.load.json("localeFile", n),
                i && e.load.json("localeFile_fallback", i),
                e.load.json("localeFile_english", o);
            }),
            Object.defineProperty(n.prototype, "slotGame", {
              get: function () {
                return this.game;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (n.prototype.preloadPreloaderSplashImage = function () {}),
            (n.prototype.preloadPreloaderProgressBarImage = function () {}),
            (n.prototype.setupDefaultPhaserBehaviours = function () {
              (this.input.maxPointers = 1), this.setupScalingBehaviour();
            }),
            (n.prototype.getScaleMode = function () {
              return Phaser.ScaleManager.NO_SCALE;
            }),
            (n.prototype.setupScalingBehaviour = function () {
              (this.game.scale.scaleMode = this.getScaleMode()),
                (this.game.scale.fullScreenScaleMode =
                  Phaser.ScaleManager.NO_SCALE),
                this.game.scale.refresh(),
                this.game.device.desktop && this.configureDesktopVersion();
            }),
            (n.prototype.configureDesktopVersion = function () {}),
            (n.prototype.create = function () {
              var n = this;
              t.prototype.create.call(this),
                this.handleIosFullscreenSupportFlag(),
                this.setupDefaultPhaserBehaviours();
              var o = this.slotGame;
              o.jsBridge = new e.jsintegration.JSBridge(
                o,
                o.initGameData.handlemessagefunc
              );
              var i = o.jsBridge;
              i.gameLoading(),
                (o.dialogManager = this.createDialogManager()),
                (o.messageManager = this.createPlayerMessageManager());
              var a,
                r = o;
              a =
                null != o.initGameData.distributionchannel
                  ? o.initGameData.distributionchannel.toUpperCase()
                  : this.game.device.iOS ||
                    this.game.device.android ||
                    this.game.device.windowsPhone
                  ? "MOBILE"
                  : "WEB";
              var s = this.createGameModel(
                o.initGameData,
                a,
                e.constants.ClientTypeEnum.HTML
              );
              (r.model = s),
                (o.jsBridgeHelper = new e.jsintegration.slots.JSBridgeHelper(
                  i,
                  o.model
                )),
                this.setupDesiredFps(),
                r.createNextRoundStartGame(),
                this.prepareForEnteringPreloaderState(),
                this.resize(!0),
                this.setupBootLoadedReferences(),
                this.game.onPause.add(function () {
                  n.slotGame &&
                    n.slotGame.soundSystem &&
                    n.slotGame.soundSystem.setPause(!0);
                }, this),
                this.game.onResume.add(function () {
                  n.slotGame &&
                    n.slotGame.soundSystem &&
                    n.slotGame.soundSystem.setPause(!1);
                }, this),
                this.game.state.start("Preloader", !0, !1);
            }),
            (n.prototype.createGameModel = function (e, t, n) {
              throw new Error(
                "AbstractPhaserBootState.createGameModel is abstract and should be overriden in the game."
              );
            }),
            (n.prototype.prepareForEnteringPreloaderState = function () {
              var e = jQuery(
                  "<div id='centeringContainer' class='screenCenteredElement'></div>"
                ),
                t = jQuery("#gameWrapper");
              e.insertBefore(t), t.appendTo(e), this.resize(!0);
            }),
            (n.prototype.setupDesiredFps = function () {
              this.game.device.desktop
                ? ((this.game.forceSingleUpdate = !1),
                  (this.game.time.desiredFps = 60))
                : ((this.game.forceSingleUpdate = !0),
                  (this.game.time.desiredFps = 30));
            }),
            (n.prototype.createDialogManager = function () {
              return new e.slots.utils.DefaultDialogManager(this.slotGame);
            }),
            (n.prototype.createPlayerMessageManager = function () {
              return new e.slots.utils.PlayerMessagesManager(this.slotGame);
            }),
            (n.prototype.setupBootLoadedReferences = function () {}),
            (n.prototype.handleIosFullscreenSupportFlag = function () {
              var t = this.slotGame.initGameData.allowfullscreen,
                n = window;
              if (
                this.slotGame.device.iPad ||
                this.slotGame.device.iPhone ||
                this.slotGame.device.iPhone4
              ) {
                var o = /constructor/i.test(window.HTMLElement),
                  i = window.navigator,
                  a = i.userAgent,
                  r = !!window.indexedDB;
                (-1 === a.indexOf("Safari") ||
                  -1 === a.indexOf("Version") ||
                  i.standalone) &&
                  ((!r && o) ||
                    !window.statusbar.visible ||
                    (n.webkit && n.webkit.messageHandlers) ||
                    !o ||
                    r) &&
                  (t = !1),
                  (this.isIosChrome ||
                    this.isIosFireFox ||
                    this.isIosOpera ||
                    this.isIosUiWebView) &&
                    (t = !1);
                var s = e.utils.getIosDeviceModel();
                (null != s && "" != s) || (t = !1);
              }
              this.slotGame.initGameData.allowfullscreen = t;
            }),
            n
          );
        })(t.AbstractPhaserGameState);
        t.AbstractPhaserBootState = n;
      })(t.phaser || (t.phaser = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (n) {
        var o = e.utils.AmountFormatter,
          i = tk.gs.rs.e.ServerErrorCodes,
          a = e.utils.GlobalIdleStateEventQueue,
          r = e.slots.gui.isUsingGUI_2_0,
          s = e.sounds.WebAudioSoundGroupManager,
          u = e.sounds.AudioNodeChainMap,
          l = (function (n) {
            function l() {
              var e = n.call(this) || this;
              return (
                (e._preloaderErrorOccurred = !1),
                (e._includeSoundsInPreloaderPhase = !1),
                (e._loadErrorOccurred = !1),
                (e._requiredBrowserFeatures = {}),
                (e._requiredDeviceFeatures = {}),
                e
              );
            }
            return (
              __extends(l, n),
              Object.defineProperty(l.prototype, "slotGame", {
                get: function () {
                  return this.game;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (l.prototype.preload = function () {
                var t = this,
                  n = this.slotGame,
                  a = n.initGameData;
                a.enablelogging;
                var s = this.getAjaxCallMakingWebWorkerSrc();
                !1 === a.allowwwajax && (s = null),
                  this.addPreventionOfBackspaceNavigation();
                var u = new e.net.ServerConnectionHttp(a.gameserviceurl, s),
                  l = this.createGameServerRequestMaker(u);
                n.requestMaker = l;
                var d = (n.slowConnectionTracker =
                  this.createSlowConnectionTracker());
                (this._startupHelper = new e.slots.utils.GameStartupHelper(
                  n.model,
                  l,
                  d,
                  n.jsBridge
                )),
                  this._startupHelper.onGameConfigured.addOnce(function () {
                    if (n.initGameData.currencyconfig) {
                      var e = n.initGameData.currencyconfig.decimalplaces;
                      o.initGlobalFormatter(
                        n.model.playerCurrency,
                        n.languageSystem.activeLanguageIso,
                        e
                      );
                    } else o.initGlobalFormatter(n.model.playerCurrency, n.languageSystem.activeLanguageIso, void 0);
                  }),
                  this._startupHelper.onStartupFailed.addOnce(
                    this.handleStartupFailed,
                    this
                  ),
                  (this._splashSprite = this.createSplashSprite()),
                  (this._preloaderSequence = new e.seqlib.Sequence());
                var c = new e.seqlib.ConcurrentSequence();
                c.items.push(
                  new e.seqlib.WaitForSignalItem(
                    this._startupHelper.onStartupComplete
                  )
                ),
                  this.addRegulationDisclaimerDisplayCallbackItem(n, c),
                  (this._waitForCallbackItem =
                    new e.seqlib.WaitForCallbackItem()),
                  c.items.push(this._waitForCallbackItem),
                  c.items.push(
                    new e.seqlib.InvokeFunctionItem(function () {
                      return t.startInitializationProcess();
                    }, void 0)
                  ),
                  this._preloaderSequence.items.push(c);
                var h = new e.seqlib.ConcurrentSequence();
                h.items.push(
                  new e.seqlib.WaitForSignalItem(n.jsBridge.onStartGame)
                ),
                  h.items.push(
                    new e.seqlib.InvokeFunctionItem(function () {
                      return t.handleStartupComplete();
                    }, void 0)
                  ),
                  this._preloaderSequence.items.push(h),
                  (n.soundSystem = this.createSoundSystem()),
                  r(function () {
                    t.setupWebAudioUtils(n);
                  }),
                  this.addRequiredDeviceFeatureSetForGame(function (e, n) {
                    t._requiredDeviceFeatures[e] = n;
                  }),
                  this.addRequiredBrowserFeatureSetForGame(function (e, n) {
                    t._requiredBrowserFeatures[e] = n;
                  }),
                  this.shouldLoadSoundsDuringPreloaderState() &&
                    ((this._includeSoundsInPreloaderPhase = !0),
                    r(function (e) {
                      e.setSoundLoadMode(!0);
                    }),
                    this._preloaderSequence.items.push(
                      new e.seqlib.ConditionalItem(
                        function () {
                          return (
                            r(function (e) {
                              e.setSoundLoadMode(!1);
                            }),
                            n.soundSystem.allSoundsReady
                          );
                        },
                        !1,
                        new e.seqlib.NoOpItem(),
                        new e.seqlib.WaitForSignalItem(
                          n.soundSystem.onAllSoundsReady,
                          void 0
                        )
                      )
                    ));
                var p = new e.seqlib.WaitForCallbackItem(function () {
                  t.checkIfDeviceIsSupported(
                    function () {
                      return p.callback();
                    },
                    function (e) {
                      return t.handleErrorOccurred({
                        code: i.DEVICE_NOT_SUPPORTED,
                        message:
                          "This device does not meet the requirements for the game: " +
                          e.join("\n"),
                        clientData: null,
                        callstack: null,
                        operatorErrorCode: null,
                      });
                    }
                  );
                });
                this._preloaderSequence.items.push(p);
                var m = new e.seqlib.WaitForCallbackItem(function () {
                  t.checkIfBrowserIsSupported(
                    function () {
                      return m.callback();
                    },
                    function (e) {
                      return t.handleErrorOccurred({
                        code: i.BROWSER_NOT_SUPPORTED,
                        message:
                          "The browser does not support the required feature set needed by this game: " +
                          e.join("\n"),
                        clientData: null,
                        callstack: null,
                        operatorErrorCode: null,
                      });
                    }
                  );
                });
                this._preloaderSequence.items.push(m),
                  this._preloaderSequence.onComplete.addOnce(
                    this.handlePreloaderSequenceComplete,
                    this
                  ),
                  this.addFileLoadErrorHandling(),
                  this._preloaderSequence.start(),
                  this.startPreloadingAssets();
              }),
              (l.prototype.addRegulationDisclaimerDisplayCallbackItem =
                function (t, n) {
                  var o = new e.seqlib.WaitForCallbackItem();
                  n.items.push(o),
                    (this._regulationDisclaimerDisplayTimerItem = o);
                }),
              (l.prototype.addFileLoadErrorHandling = function () {
                var e = this;
                this.load.onFileError.add(function (t, n) {
                  e.isFileOptional(t, n.requestUrl) ||
                    ((e._loadErrorOccurred = !0),
                    e.handleErrorOccurred({
                      code: 0,
                      message:
                        "Failed to load resource '" +
                        n.url +
                        "' for key '" +
                        t +
                        "'",
                      callstack: null,
                    }));
                }, this);
              }),
              (l.prototype.isFileOptional = function (e, t) {
                return !1;
              }),
              (l.prototype.startPreloadingAssets = function () {
                this.configureSoundsToLoad(),
                  e.net.ComTracker.getInstance().requestSent(this),
                  this.preloadGameSpecificAssets(),
                  this.setupSoundGroups(),
                  !0 === this._includeSoundsInPreloaderPhase &&
                    this.addSoundsToPreloaderPhase(),
                  !0 === this.slotGame.initGameData.externalloader &&
                    this.startSendingFileProgressEventsToJsBridge();
              }),
              (l.prototype.shouldLoadSoundsDuringPreloaderState = function () {
                var e = this.slotGame.initGameData.preloadsoundsdirectly;
                return (
                  void 0 === e &&
                    (e = this.slotGame.initGameData.usedesktopgui),
                  e
                );
              }),
              (l.prototype.preloadGameSpecificAssets = function () {
                throw "AbstractPhaserPreloaderState.preloadGameSpecificAssets: Abstract method must be implemented in subclass.";
              }),
              (l.prototype.readyToShowRegulationDisclaimerInPreloader =
                function (e) {
                  var t = this;
                  if (
                    ((this.readyToShowRegulationDisclaimerInPreloader =
                      function (e) {}),
                    null == e)
                  )
                    t._regulationDisclaimerDisplayTimerItem.callback();
                  else {
                    var n = this.slotGame.initGameData.regulationdisclaimer;
                    if (n && !0 !== n.usedialog) {
                      var o = this.slotGame.languageSystem.getPhraseContent(
                        "regulationDisclaimerText_" +
                          n.from +
                          "_" +
                          n.to +
                          "_nc"
                      );
                      e.showDisclaimer(o);
                      var i = n.mindisplaytime || 0;
                      if (i >= 1) {
                        e.updateDisclaimerTime(i);
                        var a = window.setInterval(function () {
                          --i <= 0
                            ? (e.updateDisclaimerTime(0),
                              window.clearInterval(a),
                              !0 === n.autoclose && e.hideDisclaimer(),
                              t._regulationDisclaimerDisplayTimerItem.callback())
                            : e.updateDisclaimerTime(i);
                        }, 1e3);
                      } else t._regulationDisclaimerDisplayTimerItem.callback();
                    } else
                      this._regulationDisclaimerDisplayTimerItem.callback();
                  }
                }),
              (l.prototype.startInitializationProcess = function () {
                return __awaiter(this, void 0, void 0, function () {
                  var t, n, o, i, a;
                  return __generator(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          this.setupGameReferences(),
                          (t =
                            "true" ===
                            e.utils.QueryStringHelper.getUrlParameter(
                              "useExternalGui",
                              "false"
                            )),
                          (n = this.slotGame),
                          (o = n),
                          this.setupBasicJsBridgeHandling(o, o.jsBridge),
                          this.setupLanguageSystem(),
                          (i = n.jsBridge),
                          t
                            ? (i.onExternalGuiConnected.addOnce(
                                this.handleExternalGuiConnected,
                                this
                              ),
                              i.connectExternalGui(),
                              [3, 4])
                            : [3, 1]
                        );
                      case 1:
                        return (a = window.tk_gui).loadDependencies
                          ? [4, a.loadDependencies(this.getAssetUrl(""))]
                          : [3, 3];
                      case 2:
                        r.sent(), (r.label = 3);
                      case 3:
                        (n.gui = this.buildGameGui(this.buildGuiInitData())),
                          this.continueInitializationProcess(),
                          (r.label = 4);
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (l.prototype.handlePreloaderSequenceComplete = function () {
                var e = this.slotGame;
                e.initGameData.enablelogging,
                  e.jsBridge.gameStarted(),
                  e.sendBalanceChangedCallToJsBridge(),
                  e.sendBetChangedCallToJsBridge(),
                  e.layoutGui(!0),
                  this.configureGui(),
                  this.resize(!0),
                  e.languageSystem.updateAllDirtyEntries(),
                  e.gui.hideDialog(),
                  this.startGameExecution();
              }),
              (l.prototype.getGuiPageSettings = function () {
                var t = {},
                  n = {
                    autoPlayIsAllowed:
                      this.slotGame.model.initGameData.allowautoplay,
                    roundOptions: [5, 10, 25, 50, 75, 100, 250, 500, 1e3, 5e3],
                    stopOnFeatureWon: !0,
                    selectedIndex: -1,
                  };
                return (t[e.slots.gui.PageIds.AUTO_PLAY] = n), t;
              }),
              (l.prototype.startGameExecution = function () {}),
              (l.prototype.createSplashSprite = function () {
                if (this.cache.checkImageKey("splash")) {
                  var e = this.add.sprite(0, 0, "splash");
                  (e.x = (this.game.width - e.width) / 2),
                    (e.y = (this.game.height - e.height) / 2);
                }
                return e;
              }),
              (l.prototype.setupGameReferences = function () {
                throw "PhaserPreloaderStateBase.setupStateReferences: Abstract method must be implemented in subclass.";
              }),
              (l.prototype.buildGameGui = function (e) {
                throw "PhaserPreloaderStateBase.buildGameGui: Abstract method must be implemented in subclass.";
              }),
              (l.prototype.handleExternalGuiConnectedToGame = function (e) {
                throw "PhaserPreloaderStateBase.connectExternalGuiToGame: Abstract method must be implemented in subclass.";
              }),
              (l.prototype.create = function () {
                n.prototype.create.call(this),
                  e.net.ComTracker.getInstance().requestReceived(this),
                  this._loadErrorOccurred ||
                    (this.readyToShowRegulationDisclaimerInPreloader(null),
                    this._waitForCallbackItem.callback());
              }),
              (l.prototype.destroy = function () {
                n.prototype.destroy.call(this);
                var e = this.slotGame.jsBridge;
                e.onResizeGame.remove(this.handleGameResizedByOperator, this),
                  e.onForceOrientation.remove(
                    this.handleOrientationChangedByOperator,
                    this
                  ),
                  this.game.device.desktop ||
                    this.game.input.onDown.remove(this.goFullScreen, this);
              }),
              (l.prototype.handleExternalGuiConnected = function (e) {
                (this.slotGame.gui = e),
                  this.handleExternalGuiConnectedToGame(e),
                  this.continueInitializationProcess();
              }),
              (l.prototype.continueInitializationProcess = function () {
                var e = this,
                  t = this.slotGame,
                  n = t.initGameData;
                n.enablelogging,
                  (t.realityCheckManager = this.createRealityCheckManager()),
                  null != t.realityCheckManager &&
                    t.realityCheckManager.isPlaying(!0);
                var o = !0 === n.playforfree && n.showlogindialog;
                t.loginCheckManager = this.createLoginCheckManager(o, 50);
                var i = void 0;
                void 0 !== n.gameserviceurl &&
                  (i = this.createDefaultSetupResponse(n.gameserviceurl)),
                  this.addFullscreenSupport(),
                  this.addPopupMenuClosesOnGuiClickListener(),
                  !0 !== n.awaitinitializecall
                    ? this._startupHelper.performStartup(i)
                    : this.slotGame.jsBridge.onInitializeGame.addOnce(
                        function () {
                          (n.awaitinitializecall = !1),
                            e._startupHelper.performStartup(i);
                        }
                      ),
                  this.slotGame.jsBridge.gameLoaded();
              }),
              (l.prototype.addFullscreenSupport = function () {
                var e = this,
                  t = this.slotGame;
                !0 === (!1 !== t.initGameData.allowfullscreen) &&
                  (t.gui.onFullScreenClick.add(function () {
                    e.goFullScreen();
                  }, this),
                  t.gui.onGuiButtonClicked.add(function () {
                    e.goFullScreen();
                  }, this));
              }),
              (l.prototype.setupDefaultPhraseParameters = function () {
                var e = this.slotGame;
                e.updateBetField(),
                  e.updateCashField(),
                  e.updateTotalWinField(""),
                  e.languageSystem.setParameterValue(
                    "activeCurrency",
                    e.model.playerCurrencyString
                  );
              }),
              (l.prototype.setupLanguageSystem = function () {
                var t = this.slotGame;
                t.languageSystem = new e.localization.LanguageSystem();
                var n = this.cache.getJSON("localeFile");
                null == n && (n = this.cache.getJSON("localeFile_fallback")),
                  null == n && (n = this.cache.getJSON("localeFile_english")),
                  t.languageSystem.setActiveLanguage(n.iso, n.phrases),
                  (t.initGameData.langiso = n.iso);
              }),
              (l.prototype.handleStartupComplete = function () {
                var e = this.slotGame;
                e.updateAvailableBets(),
                  this.setupDefaultPhraseParameters(),
                  this.setupGameAccordingToLocalUserSettings(),
                  (e.keepAliveManager = this.createKeepAliveManager()),
                  null !== e.keepAliveManager &&
                    e.initGameData.sendkeepalives &&
                    e.keepAliveManager.start(),
                  (e.tabVisibilityManager =
                    this.createBrowserTabVisibilityManager()),
                  e.tabVisibilityManager &&
                    e.tabVisibilityManager.onVisibilityChanged.add(
                      this.handleTabVisibilityChanged,
                      this
                    ),
                  (e.sceneLayoutManager = this.createSceneLayoutManager());
                var t = e.initGameData,
                  n = t.realitycheckdata,
                  o = t.regulator;
                this.setupRealityCheck(t, n, e, o);
                var i = {
                  gamesessionid: e.model.gameSessionId,
                  playersessionid: e.model.playerSessionId,
                  senderid: null,
                };
                e.gui.initializeGui(
                  this.getGuiPageSettings(),
                  e.languageSystem,
                  e.model.currencyIso
                ),
                  this.initSoundSystem(),
                  e.mayPause(!0),
                  e.jsBridge.gameInitialized(i),
                  e.model.initGameData.startgameafterinit &&
                    e.jsBridge.startGame();
              }),
              (l.prototype.setupRealityCheck = function (e, t, n, o) {
                if (!0 === e.enablerealitycheck || null != t)
                  if (void 0 !== t) {
                    var i =
                      null != t.regularcheckinterval
                        ? t.regularcheckinterval
                        : 3600;
                    null != t.enabled
                      ? (e.enablerealitycheck = t.enabled)
                      : (t.enabled = e.enablerealitycheck),
                      n.jsBridge.enableRealityCheck({
                        enabled: e.enablerealitycheck && t.enabled,
                        idleresetinterval: t.idleresetinterval || 2 * i,
                        initialcheckinterval: t.initialcheckinterval || i,
                        regularcheckinterval: i,
                        playtime: t.playtime || 0,
                        totalbetatstart: t.totalbetatstart || 0,
                        totalwinatstart: t.totalwinatstart || 0,
                        externaldialog: t.externaldialog,
                        gameroundsplayed: t.gameroundsplayed || 0,
                      });
                  } else
                    n.jsBridge.enableRealityCheck({
                      enabled: !0,
                      idleresetinterval: 300,
                      initialcheckinterval: 3600,
                      regularcheckinterval: 3600,
                      playtime: 0,
                      totalbetatstart: 0,
                      totalwinatstart: 0,
                      gameroundsplayed: 0,
                      externaldialog: !1,
                    });
              }),
              (l.prototype.addImageToLoader = function (e, t) {
                this.load.image(e, this.getAssetUrl(t), !0);
              }),
              (l.prototype.addAtlasToLoader = function (e, t, n) {
                this.load.atlasJSONArray(
                  e,
                  this.getAssetUrl(t),
                  this.getAssetUrl(n)
                );
              }),
              (l.prototype.addJsonFileToLoader = function (e, t) {
                this.load.json(e, this.getAssetUrl(t));
              }),
              (l.prototype.addBitmapTextToLoader = function (e, t, n) {
                this.load.bitmapFont(
                  e,
                  this.getAssetUrl(t),
                  this.getAssetUrl(n)
                );
              }),
              (l.prototype.setupGameAccordingToLocalUserSettings =
                function () {}),
              (l.prototype.handleStartupFailed = function (e) {
                this.slotGame.sendErrorOccurredEventDuringStartup(e);
              }),
              (l.prototype.handleTabVisibilityChanged = function (e) {
                if (e) this.game.paused = !0;
                else {
                  if (
                    this.game.renderType === Phaser.WEBGL &&
                    this.game.device.iPad
                  ) {
                    var t = this.game.renderer.view;
                    if (t) {
                      var n = t.width;
                      (t.width = n - 1), (t.width = n);
                    }
                    PIXI.glContexts[0].flush();
                  }
                  this.slotGame.pausedByClient ||
                    this.slotGame.pausedByOperator ||
                    (this.game.paused = !1);
                }
              }),
              (l.prototype.setupBasicJsBridgeHandling = function (e, t) {
                t.onUpdateAutoPlay.add(
                  this.handleAutoPlaySettingsChanged,
                  this
                ),
                  t.onChangeValidBets.add(this.handleBetSettingsChanged, this),
                  t.onChangeClientBalance.add(
                    this.handleClientBalanceChanged,
                    this
                  ),
                  t.onEnableRealityCheck.add(
                    this.handleRealityCheckSettingsChanged,
                    this
                  ),
                  t.onShutDownGame.add(this.handleShutDownGame, this),
                  t.onSetOperatorData.add(this.handleSetOperatorData, this),
                  t.onSetExtraData.add(this.handleSetExtraData, this),
                  t.onPauseGame.add(this.handleGamePausedByOperator, this),
                  t.onResumeGame.add(this.handleGameResumedByOperator, this),
                  t.onResizeGame.add(this.handleGameResizedByOperator, this),
                  t.onForceOrientation.add(
                    this.handleOrientationChangedByOperator,
                    this
                  ),
                  t.onChangeBet.add(this.handleChangeBet, this),
                  t.onShowRealityCheck.add(
                    this.handleShowRealityCheckRequestedByOperator,
                    this
                  ),
                  t.onExternalRealityCheckClosed.add(
                    this.handleExternalRealityCheckClosed,
                    this
                  ),
                  t.onPreventGamePlay.add(this.handlePreventGamePlay, this),
                  t.onResumeGamePlay.add(this.handleResumeGamePlay, this),
                  t.onMessageHandlingComplete.add(
                    this.messageHandlingComplete,
                    this
                  ),
                  t.onCloseDialog.add(this.handleCloseDialog, this),
                  t.onGetPlayerCurrency.add(this.handleGetPlayerCurrency, this),
                  t.onClosingGameCausesRestoreState.add(
                    this.handleClosingGameCausesRestoreStateQuestion,
                    this
                  ),
                  t.onUpdateOC.add(this.handleUpdateOCRequested, this),
                  t.onGetOCState.add(this.handleGetOCStateRequested, this),
                  t.onUpdateSound.add(this.handleUpdateSound, this),
                  t.updateGuiButtonOverrides.add(
                    this.updateGuiButtonOverridesFromJsBridge,
                    this
                  ),
                  t.onOpenPayTable.add(
                    this.handleOpenPayTableFromJSBridge,
                    this
                  ),
                  t.onOpenGameRules.add(
                    this.handleOpenGameRulesFromJSBridge,
                    this
                  );
              }),
              (l.prototype.handleOpenPayTableFromJSBridge = function () {
                var t = this;
                a.addEvent(function (n) {
                  t.slotGame.gui.showControlPanel(
                    e.slots.gui.PageIds.PAY_TABLE,
                    !1,
                    function () {
                      n();
                    }
                  );
                });
              }),
              (l.prototype.handleOpenGameRulesFromJSBridge = function () {
                var t = this;
                a.addEvent(function (n) {
                  t.slotGame.gui.showControlPanel(
                    e.slots.gui.PageIds.GAME_RULES,
                    !1,
                    function () {
                      n();
                    }
                  );
                });
              }),
              (l.prototype.handleUpdateSound = function (e) {
                this.slotGame.soundEnabled = e.enabled;
              }),
              (l.prototype.handleShowRealityCheckRequestedByOperator =
                function () {
                  (this.slotGame.realityCheckManager.shouldShowDialog = !0),
                    this.slotGame.realityCheckManager.onShowRealityCheck.dispatch();
                }),
              (l.prototype.handleExternalRealityCheckClosed = function (t) {
                t
                  ? this.slotGame.gui.onDialogButtonClicked.dispatch(
                      e.slots.gui.DialogTypeEnum.PLAY_TIME_EXCEEDED_WON_MONEY,
                      e.slots.gui.GuiButtonIds.YES,
                      null
                    )
                  : this.slotGame.gui.onDialogButtonClicked.dispatch(
                      e.slots.gui.DialogTypeEnum.PLAY_TIME_EXCEEDED_WON_MONEY,
                      e.slots.gui.GuiButtonIds.NO,
                      null
                    );
              }),
              (l.prototype.handlePreventGamePlay = function () {
                (this.slotGame.gamePlayAllowed = !1),
                  this.slotGame.nextRoundStartGate.preventGamePlay();
              }),
              (l.prototype.handleResumeGamePlay = function () {
                this.slotGame.gamePlayAllowed = !0;
              }),
              (l.prototype.messageHandlingComplete = function () {
                this.slotGame.messageManager &&
                  this.slotGame.messageManager.messageHandlingComplete();
              }),
              (l.prototype.handleChangeBet = function (e) {
                var t = this;
                a.addEvent(function (n) {
                  null != t.slotGame.model.currentFreeRoundProgram
                    ? t.slotGame.model.updateDefaultBet(e.currentbet)
                    : (t.slotGame.model.changeSelectedBetAmount(e.currentbet),
                      null != e.currencyiso
                        ? ((t.slotGame.model.selectedBet.value.currencyiso =
                            e.currencyiso),
                          e.currencyiso === t.slotGame.model.playerCurrency &&
                            t.slotGame.model.updateDefaultBet(e.currentbet))
                        : t.slotGame.model.updateDefaultBet(e.currentbet)),
                    t.slotGame.updateBetField(),
                    t.slotGame.updateAvailableBets(),
                    n();
                });
              }),
              (l.prototype.handleGamePausedByOperator = function () {
                var e = this.slotGame;
                null != e.gameState &&
                  ((e.pausedByOperator = !0),
                  e.gameState.pause(e.pausedByClient, e.pausedByOperator));
              }),
              (l.prototype.handleGameResumedByOperator = function () {
                var e = this.slotGame;
                null != e.gameState &&
                  ((e.pausedByOperator = !1),
                  e.gameState.pause(e.pausedByClient, e.pausedByOperator));
              }),
              (l.prototype.handleSetOperatorData = function (e) {
                for (var t = 0; t < e.data.length; t++) {
                  var n = e.data[t];
                  this.slotGame.model.addOperatorData(e.requesttype, {
                    classname: "tk.d.OperatorDataEntry",
                    key: n.key,
                    value: n.value,
                  });
                }
              }),
              (l.prototype.handleSetExtraData = function (e) {
                this.slotGame.model.setExtraData(
                  e.data,
                  e.append,
                  e.requesttype
                );
              }),
              (l.prototype.handleShutDownGame = function () {
                this.slotGame.destroy();
              }),
              (l.prototype.handleRealityCheckSettingsChanged = function (e) {
                null != this.slotGame.realityCheckManager &&
                  (this.slotGame.realityCheckManager.updateSettings(e),
                  this.slotGame.realityCheckManager.isPlaying(!0));
              }),
              (l.prototype.handleAutoPlaySettingsChanged = function (t) {
                var n = this.slotGame,
                  o = n.model,
                  i = o.autoPlayState,
                  a = (i.allowedValues = t.sets || i.allowedValues),
                  r = a.indexOf(i.roundsTotal),
                  s = {
                    autoPlayIsAllowed:
                      t.allowed && o.initGameData.allowautoplay,
                    roundOptions: a,
                    stopOnFeatureWon: t.stoponfeaturewon || !1,
                    selectedIndex: t.allowed ? r : -1,
                  };
                n.gui.updatePageSettings(e.slots.gui.PageIds.AUTO_PLAY, s);
              }),
              (l.prototype.handleBetSettingsChanged = function (e) {
                var t = this.slotGame;
                t.model.updateValidBetsList(e.validbets),
                  t.updateAvailableBets();
              }),
              (l.prototype.handleClientBalanceChanged = function (e) {
                var t = this.slotGame,
                  n = t.model;
                if (null == e)
                  a.addEvent(function (e) {
                    t.model.realPlay
                      ? (t.slowConnectionTracker.requestSent(),
                        t.requestMaker.sendGetBalanceRequest(
                          {
                            distributionChannel: t.model.distributionChannel,
                            gameId: t.model.gameId,
                            playerSessionId: t.model.playerSessionId,
                          },
                          function (n) {
                            t.slowConnectionTracker.responseReceived(),
                              t.model.updatePlayerAccounts(n.playeraccounts),
                              t.model.updateTotalBalance(n.totalbalance),
                              t.setClientBalanceToServerBalance(),
                              t.updateCashField(),
                              t.sendBalanceChangedCallToJsBridge(),
                              e();
                          },
                          function () {
                            t.slowConnectionTracker.responseReceived(),
                              t.sendBalanceChangedCallToJsBridge(),
                              e();
                          }
                        ))
                      : e();
                  });
                else {
                  var o = e.accountid;
                  if (o) {
                    var i = n.getAccountBalance(o);
                    if (isNaN(i)) return;
                    n.updateAccount(o, e.balance),
                      n.updateTotalBalance({
                        amount: n.getSumOfAllAccountBalances(),
                      }),
                      n.setClientBalance(n.totalBalance);
                  } else
                    n.updateTotalBalance({ amount: e.balance }),
                      n.setClientBalance(e.balance);
                  t.updateAvailableBets(), t.updateCashField();
                }
              }),
              (l.prototype.buildGuiInitData = function () {
                var t, n, o, i;
                (n = this.game.device.firefox
                  ? e.constants.BrowserVendorEnum.FireFox
                  : this.game.device.chrome
                  ? e.constants.BrowserVendorEnum.Chrome
                  : this.game.device.ie
                  ? e.constants.BrowserVendorEnum.IE
                  : this.game.device.safari
                  ? e.constants.BrowserVendorEnum.Safari
                  : this.game.device.opera
                  ? e.constants.BrowserVendorEnum.Opera
                  : e.constants.BrowserVendorEnum.Other),
                  (o = this.game.device.desktop
                    ? e.constants.TargetDeviceEnum.Desktop
                    : this.game.device.iOS
                    ? this.game.device.iPhone4
                      ? e.constants.TargetDeviceEnum.iPhone4S
                      : this.game.device.iPad
                      ? e.constants.TargetDeviceEnum.iPad4
                      : e.constants.TargetDeviceEnum.iPhone5
                    : e.constants.TargetDeviceEnum.Other),
                  (i = this.game.device.desktop
                    ? e.constants.TargetPlatformEnum.Desktop
                    : this.game.device.iPhone
                    ? e.constants.TargetPlatformEnum.MobilePhone
                    : this.game.device.iPad
                    ? e.constants.TargetPlatformEnum.Tablet
                    : this.game.device.android
                    ? e.constants.TargetPlatformEnum.MobilePhone
                    : e.constants.TargetPlatformEnum.Other);
                var a = this.slotGame,
                  r = a.initGameData,
                  s = r.showhistorylink,
                  u = "UK" === r.regulator,
                  l = u || r.requireautoplaylosslimit,
                  d = u || r.showadvancedautoplaysettings,
                  c =
                    (this.isIosUiWebView || a.device.webApp,
                    null != r.responsiblegaminglink),
                  h = r.currencyconfig || {
                    showcurrency: !0,
                    currencysign: void 0,
                    decimalplaces: void 0,
                  };
                r.currencyconfig = h;
                var p = a.languageSystem.activeLanguageIso,
                  m = a.initGameData.localesvariant || "any",
                  g = a.getRelativeGameRulesUrl(p, m, r.gameid),
                  f = JSON.parse(
                    JSON.stringify(
                      r.allowedguielements || { fields: {}, buttons: {} }
                    )
                  );
                return (
                  (f.buttons.autoplay = r.allowautoplay && f.buttons.autoplay),
                  (f.buttons = f.buttons || {}),
                  (f.buttons.quickstop =
                    null == (t = f.buttons.quickstop) || t),
                  {
                    developmentMode: r.developmentmode,
                    browserVendor: n,
                    jsBridge: a.jsBridge,
                    targetDevice: o,
                    targetPlatform: i,
                    gameTitlePhraseId: this.getGameTitlePhraseId(),
                    gameRulesPhraseId: this.getGameRulesPhraseId(),
                    useDesktopGui: r.usedesktopgui,
                    showHistoryLinkInRealityCheckDialog: s,
                    requireLossLimitInAutoPlay: l,
                    showAdvancedAutoplaySettings: d,
                    showDownloadGameRulesButton: !1,
                    externalGameRulesUrl: g,
                    showResponsibleGamingButton: c,
                    realityCheckDialogSettings:
                      this.mapRealityCheckDialogSettings(
                        r.realitycheckdata.dialogsettings || {}
                      ),
                    allowedGuiElements: f,
                    showActiveCurrency: !1 !== h.showcurrency,
                    willShowScrollFinger:
                      this.shouldActivateIosFullScreenSwipeManager(),
                  }
                );
              }),
              (l.prototype.mapRealityCheckDialogSettings = function (e) {
                var t = {};
                return (
                  e.titlephraseid && (t.titlePhraseId = e.titlephraseid),
                  e.wonphraseid && (t.wonPhraseId = e.wonphraseid),
                  e.lostphraseid && (t.lostPhraseId = e.lostphraseid),
                  e.accountbuttonphraseid &&
                    (t.accountButtonPhraseId = e.accountbuttonphraseid),
                  e.uselogoutbutton && (t.useLogOutButton = e.uselogoutbutton),
                  t
                );
              }),
              (l.prototype.handleGameResizedByOperator = function (e) {
                this.resize(!0, e.width, e.height);
              }),
              (l.prototype.handleOrientationChangedByOperator = function (t) {
                this.forceOrientation(
                  "landscape" === t.orientation
                    ? e.constants.OrientationEnum.LANDSCAPE
                    : e.constants.OrientationEnum.PORTRAIT
                );
              }),
              (l.prototype.createSceneLayoutManager = function () {
                return null;
              }),
              (l.prototype.createKeepAliveManager = function () {
                return new e.slots.utils.KeepAliveManager(
                  this.slotGame.initGameData,
                  this.slotGame.requestMaker
                );
              }),
              (l.prototype.createRealityCheckManager = function () {
                return new t.utils.RealityCheckManager(
                  this.slotGame.gameInstanceId,
                  this.slotGame.model
                );
              }),
              (l.prototype.createLoginCheckManager = function (e, n) {
                return new t.utils.LoginCheckManager(e, n);
              }),
              (l.prototype.createBrowserTabVisibilityManager = function () {
                return new e.slots.utils.BrowserTabVisibilityManager();
              }),
              (l.prototype.createDefaultSetupResponse = function (e) {
                return {
                  requesttype: "gss.getsetup",
                  classname: "tk.gss.rs.GetSetupResponse",
                  free: {
                    classname: "tk.gss.rs.ServiceConfiguration",
                    gameserviceconfig: {
                      classname: "tk.d.config.ServiceConfig",
                      url: e,
                      id: "gameservice",
                    },
                    trackingserviceconfig: {
                      classname: "tk.d.config.ServiceConfig",
                      url: e,
                      id: "gameservice",
                    },
                  },
                  real: {
                    classname: "tk.gss.rs.ServiceConfiguration",
                    gameserviceconfig: {
                      classname: "tk.d.config.ServiceConfig",
                      url: e,
                      id: "gameservice",
                    },
                    trackingserviceconfig: {
                      classname: "tk.d.config.ServiceConfig",
                      url: e,
                      id: "gameservice",
                    },
                  },
                  serviceid: "systemservice",
                };
              }),
              (l.prototype.getGameTitlePhraseId = function () {
                throw new Error(
                  "AbstractPhaserPreloaderState.getGameTitlePhraseId is abstract!"
                );
              }),
              (l.prototype.getGameRulesPhraseId = function () {
                throw new Error(
                  "AbstractPhaserPreloaderState.getGameRulesPhraseId is abstract!"
                );
              }),
              (l.prototype.configureGui = function () {
                var e = this.slotGame,
                  t = e.gui,
                  n = e.model.initGameData;
                t.setPlayMode(!n.playforfree),
                  t.setShowBackToLobbyButton(n.showbacktolobbybutton),
                  t.setShowLoginButton(n.showlogindialog),
                  t.setShowDepositButton(n.showdepositlink),
                  !0 === e.initGameData.developmentmode
                    ? e.buildDate.indexOf("%") > -1
                      ? t.setGameVersion(e.model.clientVersion + " (dev)")
                      : t.setGameVersion(
                          e.model.clientVersion + " (" + e.buildDate + ")"
                        )
                    : t.setGameVersion(
                        e.model.clientVersion +
                          (e.initGameData.developmentmode ? " (dev)" : "")
                      ),
                  t.setOcEnabled(n.developmentmode);
              }),
              (l.prototype.createSlowConnectionTracker = function () {
                return new e.slots.utils.SlowConnectionTracker(
                  this.slotGame,
                  this.getSlowConnectionTimeLimit()
                );
              }),
              (l.prototype.getSlowConnectionTimeLimit = function () {
                return 8e3;
              }),
              (l.prototype.addPopupMenuClosesOnGuiClickListener = function () {
                this.slotGame.gui.onFullScreenClick.add(
                  this.handleGuiClickOutsidePopupMenu,
                  this
                );
              }),
              (l.prototype.handleGuiClickOutsidePopupMenu = function () {
                var t = this.slotGame;
                t.getCurrentDeviceOrientation() ===
                  e.constants.OrientationEnum.PORTRAIT ||
                  (t.gui.isPopupMenuOpen() && t.gui.hidePopupMenu());
              }),
              (l.prototype.configureSoundsToLoad = function () {
                var e = {};
                this.getSoundsToLoad(function (t, n) {
                  e[t] = n;
                }),
                  (this._soundsToLoad = e);
              }),
              (l.prototype.createSoundSystem = function () {
                return new e.sounds.DefaultSoundSystem(this.slotGame);
              }),
              (l.prototype.getSoundsToLoad = function (e) {
                throw new Error(
                  "AbstractPhaserPreloaderState.getSoundsToLoad is abstract. Override and implement in subclass."
                );
              }),
              (l.prototype.addSoundsToPreloaderPhase = function () {
                for (var e in this._soundsToLoad)
                  this.load.audio(e, this._soundsToLoad[e], !0);
              }),
              (l.prototype.initSoundSystem = function () {
                var e = this.slotGame,
                  t = e.initGameData,
                  n = t.usedesktopgui;
                e.soundEnabled = n && this.game.device.desktop;
                var o = n && this.game.device.desktop;
                (o = o && t.allowlocalstorage),
                  e.soundSystem.init(
                    e.soundEnabled,
                    o,
                    this._soundsToLoad,
                    this._includeSoundsInPreloaderPhase
                  );
              }),
              (l.prototype.createGameServerRequestMaker = function (t) {
                return new e.slots.net.SlotRequestMaker(
                  this.slotGame,
                  t,
                  0,
                  this.getNormalSpinStopDuration()
                );
              }),
              (l.prototype.getNormalSpinStopDuration = function () {
                return 0;
              }),
              (l.prototype.getPathToAjaxCallMakingWebWorkerFile = function () {
                return null;
              }),
              (l.prototype.getAjaxCallMakingWebWorkerSrc = function () {
                return null;
              }),
              (l.prototype.startSendingFileProgressEventsToJsBridge =
                function () {
                  this.slotGame.load.onFileComplete.add(
                    this.sendProgressEventToJSBridge,
                    this
                  );
                }),
              (l.prototype.sendProgressEventToJSBridge = function (e, t) {
                this.slotGame.jsBridge.sendGameSpecificOutboundEvent(
                  "loadprogress",
                  { senderid: this.slotGame.gameInstanceId, percentage: e }
                );
              }),
              (l.prototype.handleGetPlayerCurrency = function () {
                if (this.slotGame && this.slotGame.model) {
                  var e = this.slotGame.model.playerCurrency;
                  this.slotGame.jsBridge.playerCurrencyRetrieved(e);
                }
              }),
              (l.prototype.handleClosingGameCausesRestoreStateQuestion =
                function () {
                  this.slotGame.jsBridge.closingGameCauseRestoreStateResponse(
                    this.slotGame.model.willClosingTheGameGenerateRestoreState()
                  );
                }),
              (l.prototype.handleUpdateOCRequested = function (e) {
                this.slotGame.model.ocQueue = e || [];
              }),
              (l.prototype.handleGetOCStateRequested = function () {
                this.slotGame.jsBridge.emitOcQueue(
                  this.slotGame.model.ocQueue.concat()
                );
              }),
              (l.prototype.handleCloseDialog = function (e, t, n, o) {
                var i;
                null != o
                  ? (i =
                      this.slotGame.gui.onDialogButtonClicked).dispatch.apply(
                      i,
                      __spreadArrays([e, t, n], o)
                    )
                  : this.slotGame.gui.onDialogButtonClicked.dispatch(e, t, n);
              }),
              (l.prototype.checkIfBrowserIsSupported = function (e, t) {
                var n = [];
                for (var o in this._requiredBrowserFeatures) {
                  0 == this._requiredBrowserFeatures[o]() && n.push(o);
                }
                0 === n.length ? e() : t(n);
              }),
              (l.prototype.checkIfDeviceIsSupported = function (e, t) {
                var n = [];
                for (var o in this._requiredDeviceFeatures) {
                  0 == this._requiredDeviceFeatures[o]() && n.push(o);
                }
                0 === n.length ? e() : t(n);
              }),
              (l.prototype.addRequiredDeviceFeatureSetForGame = function (
                e
              ) {}),
              (l.prototype.addRequiredBrowserFeatureSetForGame = function (
                e
              ) {}),
              (l.prototype.setupSoundGroups = function () {}),
              (l.prototype.updateGuiButtonOverridesFromJsBridge = function (
                e,
                t
              ) {
                this.slotGame.gui.updateGuiButtonOverrides("jsbridge-" + e, t);
              }),
              (l.prototype.addPreventionOfBackspaceNavigation = function () {
                window.addEventListener("keydown", function (e) {
                  if ("Backspace" === e.key) {
                    var t = e.target;
                    /INPUT|SELECT|TEXTAREA/i.test(t.tagName) ||
                      e.preventDefault();
                  }
                });
              }),
              (l.prototype.setupWebAudioUtils = function (t) {
                t.webAudioUtils ||
                  (t.webAudioUtils = {
                    soundGroupManager: new s(t),
                    audioNodeChainMap: new u(t),
                    utils: {
                      panSound: function (n, o) {
                        e.sounds.audiochainutils.setStereoPanning(t, n, o);
                      },
                    },
                  });
              }),
              l
            );
          })(n.AbstractPhaserGameState);
        n.AbstractPhaserPreloaderState = l;
      })(t.phaser || (t.phaser = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {}));
var tk_common,
  GlobalIdleStateEventQueue = tk_common.utils.GlobalIdleStateEventQueue;
!(function (e) {
  !(function (e) {
    var t = (function () {
      function t(e) {
        this._game = e;
      }
      return (
        (t.prototype.enteredSingleSpinContext = function () {
          this._context = "single";
        }),
        (t.prototype.enteredAutoSpinContext = function () {
          this._context = "auto";
        }),
        (t.prototype.enteredFreeRoundContext = function () {
          this._context = "freeround";
        }),
        (t.prototype.enterCinematicMode = function (t, n) {
          void 0 === n && (n = !0);
          var o = this._game.gui;
          o.setCinematicMode(!0),
            t ? o.setSkipDuringFeatureMode(n) : o.setSkipMode(n),
            e.GlobalIdleStateEventQueue.blockProcessing(
              this._game.model.gameId + ":inCinematics"
            );
        }),
        (t.prototype.exitCinematicMode = function (t) {
          var n = this._game.gui;
          n.setCinematicMode(!1),
            t.isFeature
              ? t.useCustomFeatureSpinsValue
                ? n.setFeatureRoundsModeWithCustomValue(
                    t.spinsLeft + " / " + t.spinsTotal,
                    t.enableButton
                  )
                : n.setFeatureRoundsMode(t.spinsLeft, t.enableButton)
              : ("single" == this._context
                  ? n.setSingleSpinMode(t.enableButton)
                  : "auto" === this._context
                  ? n.setAutoSpinMode(t.spinsLeft, !0)
                  : n.setFreeRoundsMode(t.spinsLeft, t.enableButton),
                e.GlobalIdleStateEventQueue.unblockProcessing(
                  this._game.model.gameId + ":inCinematics"
                ));
        }),
        t
      );
    })();
    e.CinematicsModeHelper = t;
  })(e.utils || (e.utils = {}));
})(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = e.utils.GlobalIdleStateEventQueue,
          o = e.utils.ensureSingleInvocation,
          i = (function () {
            function t(t) {
              (this._showingDialog = !1),
                (this.onDialogShowing = new e.utils.Signal1()),
                (this.onDialogClosed = new e.utils.Signal2()),
                (this._game = t);
            }
            return (
              (t.prototype.registerSpecificDialogClosedListener = function (
                e,
                t
              ) {
                var n = this,
                  o = function (i, a) {
                    i === e && (n.onDialogClosed.remove(o), t(a));
                  };
                return this.onDialogClosed.add(o), o;
              }),
              (t.prototype.isShowingDialog = function () {
                return this._showingDialog;
              }),
              (t.prototype.showDialog = function (t, i) {
                var a,
                  r = this;
                if (t === e.slots.gui.DialogTypeEnum.CUSTOM)
                  throw new Error(
                    "Cannot show custom dialogs through the showDialog-method. Use the showCustomDialog-method instead."
                  );
                var s =
                  null != (a = document.exitFullscreen)
                    ? a
                    : function () {
                        return Promise.resolve();
                      };
                this.checkIfGameShouldPause(t) &&
                  (this._game.pausedByClient = !0),
                  n.blockProcessing("showingDialog"),
                  n.unblockProcessing("commons.controlPanelOpen"),
                  this._game.gui.hideControlPanel(!1, null);
                !(function () {
                  if (
                    ((r._showingDialog = !0),
                    (r._currentDialogType = t),
                    r._game.gui.setDialogModalMode(
                      !0,
                      !1,
                      "defaultDialogManager.showingDialog"
                    ),
                    i && (r._closeCallback = o(i)),
                    r._game.initGameData.externaldialoghandling)
                  )
                    try {
                      try {
                        s().catch(function () {});
                      } catch (e) {}
                    } catch (e) {}
                  else r._game.gui.showDialog(t);
                  r._game.jsBridge.dialogOpened(t),
                    r.onDialogShowing.dispatch(t);
                })();
              }),
              (t.prototype.showCustomDialog = function (t, i, a, r, s, u) {
                var l = this;
                void 0 === r && (r = !1), void 0 === s && (s = !1);
                var d = this,
                  c = [],
                  h = 0;
                a.forEach(function (t, n) {
                  t.text
                    ? (0 == h
                        ? c.push(e.slots.gui.GuiButtonIds.CUSTOM0)
                        : 1 == h
                        ? c.push(e.slots.gui.GuiButtonIds.CUSTOM1)
                        : c.push(e.slots.gui.GuiButtonIds.CUSTOM2),
                      h++)
                    : c.push(t.type);
                });
                return (
                  (!0 === r ||
                    this.checkIfGameShouldPause(
                      e.slots.gui.DialogTypeEnum.CUSTOM
                    )) &&
                    (this._game.pausedByClient = !0),
                  (function () {
                    var r;
                    n.blockProcessing("showingDialog"),
                      n.unblockProcessing("commons.controlPanelOpen"),
                      l._game.gui.hideControlPanel(!1, null),
                      d._game.gui.setDialogModalMode(
                        !0,
                        !1,
                        "defaultDialogManager.showingDialog"
                      ),
                      d._game.languageSystem.replacePhraseContent(
                        "customDialogTitle_uc",
                        t
                      ),
                      d._game.languageSystem.replacePhraseContent(
                        "customDialogText_nc",
                        i
                      );
                    var h = 0;
                    a.forEach(function (e) {
                      e.text &&
                        (d._game.languageSystem.replacePhraseContent(
                          "customButtonText" + h + "_nc",
                          e.text
                        ),
                        h++);
                    }),
                      l._game.gui.setCustomDialogButtons(c),
                      (l._showingDialog = !0),
                      (l._currentDialogType =
                        e.slots.gui.DialogTypeEnum.CUSTOM),
                      l._game.languageSystem.updateAllDirtyEntries();
                    var p =
                      null != (r = document.exitFullscreen)
                        ? r
                        : function () {
                            return Promise.resolve();
                          };
                    try {
                      p().catch(function () {});
                    } catch (e) {}
                    u && (l._closeCallback = o(u)),
                      (s || 0 == l._game.initGameData.externaldialoghandling) &&
                        l._game.gui.showDialog(
                          e.slots.gui.DialogTypeEnum.CUSTOM
                        ),
                      1 != s &&
                        l._game.jsBridge.dialogOpened(
                          e.slots.gui.DialogTypeEnum.CUSTOM,
                          {
                            title: d._game.languageSystem.getPhraseContent(
                              "customDialogTitle_uc",
                              !1
                            ),
                            text: d._game.languageSystem.getPhraseContent(
                              "customDialogText_nc",
                              !1
                            ),
                            buttons: a.map(function (e) {
                              return {
                                buttonText: e.text ? e.text : void 0,
                                buttonId: e.type,
                              };
                            }),
                          }
                        ),
                      l.onDialogShowing.dispatch(
                        e.slots.gui.DialogTypeEnum.CUSTOM
                      ),
                      c.concat();
                  })(),
                  c
                );
              }),
              (t.prototype.checkIfGameShouldPause = function (t) {
                return (
                  t === e.slots.gui.DialogTypeEnum.TECHNICAL_ERROR ||
                  t === e.slots.gui.DialogTypeEnum.RESTORE_STATE_FOUND ||
                  t ===
                    e.slots.gui.DialogTypeEnum.SERVER_SIDE_INSUFFICIENT_FUNDS ||
                  t === e.slots.gui.DialogTypeEnum.UNKNOWN
                );
              }),
              (t.prototype.closeCurrentDialog = function (e, t) {
                this._game.gui.setDialogModalMode(
                  !1,
                  !1,
                  "defaultDialogManager.showingDialog"
                ),
                  this._showingDialog &&
                    this.closeCurrentDialogInternal(
                      this._currentDialogType,
                      e,
                      t,
                      null !== e
                    );
              }),
              (t.prototype.closeCurrentDialogSilently = function () {
                this._game.gui.setDialogModalMode(
                  !1,
                  !1,
                  "defaultDialogManager.showingDialog"
                ),
                  this._showingDialog &&
                    this.closeCurrentDialogInternal(
                      this._currentDialogType,
                      null,
                      !1,
                      !1
                    );
              }),
              (t.prototype.closeCurrentDialogInternal = function (e, t, o, i) {
                if (
                  (n.unblockProcessing("showingDialog"), this._showingDialog)
                ) {
                  (this._showingDialog = !1),
                    this._game.gui.hideDialog(),
                    (this._game.pausedByClient = !1);
                  this._currentDialogType;
                  (this._currentDialogType = null),
                    1 != o && this._game.jsBridge.dialogClosed(t);
                }
                this._closeCallback && this._closeCallback(t),
                  i && this.onDialogClosed.dispatch(e, t);
              }),
              t
            );
          })();
        t.DefaultDialogManager = i;
      })(t.utils || (t.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        var t = (function () {
          function e(e) {
            var t = this;
            (void 0 === e && (e = !0),
            (this._measurements = new Array(240)),
            e) &&
              (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame
              )(function () {
                t.registerFrameTime();
              });
            (this._count = 0), (this._tcount = 0);
          }
          return (
            (e.prototype.registerFrameTime = function (e) {
              var t = e,
                n = Date.now();
              void 0 === t && (t = n - this._prevTime),
                (this._prevTime = n),
                (this._measurements[this._count] = t),
                (this._tcount = Math.max(this._count, this._tcount)),
                (this._count = (this._count + 1) % 240);
            }),
            (e.prototype.getAverageFps = function () {
              for (var e = 0, t = 0; t < 240; t++) e += this._measurements[t];
              return 1e3 / (e / this._tcount);
            }),
            (e.prototype.startLogging = function (e, t) {
              var n = this;
              void 0 === t && (t = 1),
                (this._tid = setInterval(function () {
                  return e(n.getAverageFps());
                }, 1e3 * t));
            }),
            (e.prototype.stopLogging = function (e) {
              clearInterval(this._tid);
            }),
            (e.prototype.getAllFrameTimes = function () {
              return this._measurements;
            }),
            e
          );
        })();
        e.FPSMeasurer = t;
      })(e.utils || (e.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      (e.hitTestSingle = function (e, t, n, o) {
        if (!1 === e.visible) return !1;
        var i = e.toLocal(new Phaser.Point(t, n), o || e.game.world),
          a = e.texture.frame.width,
          r = e.texture.frame.height,
          s = -a * e.anchor.x,
          u = !1;
        if (i.x >= s && i.x < s + a) {
          var l = -r * e.anchor.y;
          i.y >= l && i.y < l + r && (u = !0);
        }
        return u;
      }),
        (e.hitTestMultiple = function (e, t, n, o, i) {
          return (
            (i =
              i ||
              function (e, t) {
                return e.z < t.z ? -1 : 1;
              }),
            e.reduce(function (e, a, r) {
              var s = a;
              if (!1 === s.visible) return e;
              var u = s.toLocal(new Phaser.Point(t, n), o || s.game.world),
                l = s.texture.frame.width,
                d = s.texture.frame.height,
                c = -l * s.anchor.x,
                h = !1;
              if (u.x >= c && u.x < c + l) {
                var p = -d * s.anchor.y;
                u.y >= p && u.y < p + d && (h = !0);
              }
              return h && (e ? i(e, s) < 0 && (e = s) : (e = s)), e;
            }, null)
          );
        }),
        (e.simpleDepthTestFunc = function (e, t) {
          return e.z < t.z ? -1 : 1;
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = (function () {
          function t(t, n) {
            (this.onJackpotsUpdated = new e.utils.Signal2()),
              (this.onErrorOccurred = new e.utils.Signal1()),
              (this._intervalId = NaN),
              (this._currentJackpotData = {}),
              (this._prevJackpotData = null),
              (this._game = t),
              (this._currencies = n.concat() || [
                this._game.model.playerCurrency,
              ]);
          }
          return (
            (t.prototype.reinit = function (e) {
              (this._currencies = (e || this._currencies).concat()),
                (this._currentJackpotData = {}),
                (this._prevJackpotData = null);
            }),
            (t.prototype.startPeriodicUpdates = function (n, o, i) {
              var a = this;
              void 0 === o && (o = !0),
                e.time.clearSafeTimeout(this._intervalId),
                (n = n || t.DEFAULT_GET_JACKPOT_INTERVAL_MS),
                (this._dt = i || n),
                (this._intervalId = e.time.setSafeInterval(
                  this._game.gameInstanceId,
                  function () {
                    a.getJackpots(a._dt, a._currencies, o);
                  },
                  n
                ));
            }),
            (t.prototype.stopPeriodicUpdates = function () {
              e.time.clearSafeTimeout(this._intervalId),
                (this._intervalId = void 0);
            }),
            (t.prototype.getCurrentJackpotInformation = function (e) {
              return this._currentJackpotData[e];
            }),
            (t.prototype.getPreviousJackpotInformation = function (e) {
              return this._prevJackpotData[e];
            }),
            (t.prototype.wasJackpotWon = function (e) {
              if (
                null == this._currentJackpotData ||
                null == this._prevJackpotData
              )
                return !1;
              if (
                null == this._currentJackpotData[e] ||
                null == this._prevJackpotData[e]
              )
                throw new Error("Invalid jackpot requested.");
              return (
                this._currentJackpotData[e].id !== this._prevJackpotData[e].id
              );
            }),
            (t.prototype.setJackpots = function (e, t, n) {
              void 0 === t && (t = !0),
                void 0 === n && (n = !0),
                (this._prevJackpotData = this._currentJackpotData),
                (this._currentJackpotData = e),
                t &&
                  this._game.model.updateModelWithJackpotData({
                    jackpots: e,
                    classname: "tk.gs.rs.GetJackpotResponse",
                    requestid: "undefined",
                    serviceid: "client",
                    requesttype: "gs.getjackpot",
                  }),
                n &&
                  this.onJackpotsUpdated.dispatch(
                    this._currentJackpotData,
                    this._prevJackpotData
                  );
            }),
            (t.prototype.getJackpots = function (e, n, o) {
              var i = this,
                a = this._game.requestMaker;
              (o = null == o || o),
                (e = e || t.DEFAULT_GET_JACKPOT_INTERVAL_MS),
                (n = n || [this._game.model.playerCurrency]),
                a.performGetJackpot(
                  e,
                  n,
                  function (e) {
                    (i._prevJackpotData = i._currentJackpotData),
                      (i._currentJackpotData = e.jackpots),
                      o && i._game.model.updateModelWithJackpotData(e),
                      i.onJackpotsUpdated.dispatch(
                        i._currentJackpotData,
                        i._prevJackpotData
                      );
                  },
                  function (e) {
                    i.onErrorOccurred.dispatch(e);
                  }
                );
            }),
            (t.DEFAULT_GET_JACKPOT_INTERVAL_MS = 15e3),
            t
          );
        })();
        t.JackpotManager = n;
      })(t.utils || (t.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = [];
        function o(e, t) {
          void 0 === t && (t = !0),
            n.filter(function (n) {
              return n.owner() !== e || (t && n.killAll(), !1);
            });
        }
        (t.createGlobalTweenMax = function (e) {
          if (null == e)
            throw new Error(
              "createGlobalTweenMax: owner may not be undefined or null"
            );
          o(e);
          var t = u();
          return (
            (t.owner = function () {
              return e;
            }),
            n.push(t),
            t
          );
        }),
          (t.deleteGlobalTweenMax = o),
          (t.getGlobalTweenMax = function (e) {
            return n.reduce(function (t, n, o) {
              return n.owner() === e ? n : t;
            }, null);
          });
        var i = null;
        function a(e, t, n) {
          var o = e._callback.bind(e);
          return (
            e.vars.onComplete || (e.vars.onComplete = function () {}),
            (e._callback = function (e) {
              return null != n && "onComplete" === e && delete n[t], o(e);
            }),
            e.vars.onComplete || (e.vars.onComplete = function () {}),
            e
          );
        }
        t.setLocalTweenMaxPauseChecker = function (e) {
          i = e;
        };
        var r = 0,
          s = (function () {
            function e(e) {
              (this._tid = 0),
                (this._map = {}),
                (this._settings = e),
                (this._timeScale = null != e.timeScale ? e.timeScale : 1),
                (this._children = []),
                e.parent && e.parent._addChild(this),
                this._applyTimeScale();
            }
            return (
              (e.prototype.from = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                this._tid++;
                var n = { target: e[0], tweens: null },
                  o = TweenMax.from.apply(null, e);
                (n.tweens = [o]),
                  (this._map[this._tid] = n),
                  this._settings.selfClean && a(o, this._tid, this._map);
                var i = this._appliedTimeScale;
                return 1 !== i && o.timeScale(i), o;
              }),
              (e.prototype.to = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                this._tid++;
                var n = { target: e[0], tweens: null },
                  o = TweenMax.to.apply(null, e);
                (n.tweens = [o]),
                  (this._map[this._tid] = n),
                  this._settings.selfClean && a(o, this._tid, this._map);
                var i = this._appliedTimeScale;
                return 1 !== i && o.timeScale(i), o;
              }),
              (e.prototype.fromTo = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                this._tid++;
                var n = { target: e[0], tweens: null },
                  o = TweenMax.fromTo.apply(null, e);
                (n.tweens = [o]),
                  (this._map[this._tid] = n),
                  this._settings.selfClean && a(o, this._tid, this._map);
                var i = this._appliedTimeScale;
                return 1 !== i && o.timeScale(i), o;
              }),
              (e.prototype.staggerFrom = function () {
                for (var e = this, t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                this._tid++;
                var o = { target: t[0], tweens: null },
                  i = TweenMax.staggerFrom.apply(null, t);
                (o.tweens = i),
                  (this._map[this._tid] = o),
                  this._settings.selfClean &&
                    i.forEach(function (t) {
                      a(t, e._tid, e._map);
                    });
                var r = this._appliedTimeScale;
                if (1 !== r)
                  for (var s = 0; s < i.length; s++) {
                    var u = i[s];
                    u.timeScale(r);
                  }
                return i;
              }),
              (e.prototype.staggerTo = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                this._tid++;
                var n = { target: e[0], tweens: null },
                  o = TweenMax.staggerTo.apply(null, e);
                ((n.tweens = o),
                (this._map[this._tid] = n),
                this._settings.selfClean) &&
                  a(o[o.length - 1], this._tid, this._map);
                var i = this._appliedTimeScale;
                if (1 !== i)
                  for (var r = 0; r < o.length; r++) {
                    o[r].timeScale(i);
                  }
                return o;
              }),
              (e.prototype.staggerFromTo = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                this._tid++;
                var n = { target: e[0], tweens: null },
                  o = TweenMax.staggerFromTo.apply(null, e);
                ((n.tweens = o),
                (this._map[this._tid] = n),
                this._settings.selfClean) &&
                  a(o[o.length - 1], this._tid, this._map);
                var i = this._appliedTimeScale;
                if (1 !== i)
                  for (var r = 0; r < o.length; r++) {
                    o[r].timeScale(i);
                  }
                return o;
              }),
              (e.prototype.delayedCall = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                this._tid++;
                var n = { func: e[1], tweens: null },
                  o = TweenMax.delayedCall.apply(null, e);
                (n.tweens = [o]),
                  (this._map[this._tid] = n),
                  this._settings.selfClean && a(o, this._tid, this._map);
                var i = this._appliedTimeScale;
                return 1 !== i && o.timeScale(i), o;
              }),
              (e.prototype.killDelayedCallsTo = function (e) {
                for (var t in this._map) {
                  this._map[t].func === e &&
                    (delete this._map[t], TweenMax.killDelayedCallsTo(e));
                }
                for (var n = 0; n < this._children.length; n++)
                  this._children[n].killAllDelayedCalls();
                this.onKill &&
                  this.onKill(
                    { all: !1, delayedCalls: !0, tweens: !1 },
                    e,
                    null
                  );
              }),
              (e.prototype.killTweensOf = function (e, t) {
                for (var n in this._map) {
                  var o = this._map[n];
                  o.target === e &&
                    ((null != t && t !== o.vars) || delete this._map[n],
                    (t = t || o.vars),
                    TweenMax.killTweensOf(o.target, t));
                }
                for (var i = 0; i < this._children.length; i++)
                  this._children[i].killTweensOf(e, t);
                this.onKill &&
                  this.onKill({ all: !1, delayedCalls: !1, tweens: !0 }, e, t);
              }),
              (e.prototype.killAll = function () {
                for (var e in this._map) {
                  var t = this._map[e];
                  t.func
                    ? TweenMax.killDelayedCallsTo(t.func)
                    : TweenMax.killTweensOf(t.target);
                }
                this._map = {};
                for (var n = 0; n < this._children.length; n++)
                  this._children[n].killAll();
                this.onKill &&
                  this.onKill(
                    { all: !0, delayedCalls: !1, tweens: !1 },
                    null,
                    null
                  );
              }),
              (e.prototype.killAllDelayedCalls = function () {
                for (var e in this._map) {
                  var t = this._map[e];
                  t.func &&
                    (delete this._map[e], TweenMax.killDelayedCallsTo(t.func));
                }
                for (var n = 0; n < this._children.length; n++)
                  this._children[n].killAllDelayedCalls();
                this.onKill &&
                  this.onKill(
                    { all: !1, delayedCalls: !0, tweens: !1 },
                    null,
                    null
                  );
              }),
              (e.prototype.killAllTweens = function () {
                for (var e in this._map) {
                  var t = this._map[e];
                  delete this._map[e],
                    t.target &&
                      (delete this._map[e], TweenMax.killTweensOf(t.target));
                }
                for (var n = 0; n < this._children.length; n++)
                  this._children[n].killAllTweens();
                this.onKill &&
                  this.onKill(
                    { all: !1, delayedCalls: !1, tweens: !0 },
                    null,
                    null
                  );
              }),
              (e.prototype.set = function (e, t) {
                return TweenMax.set(e, t);
              }),
              Object.defineProperty(e.prototype, "timeScale", {
                get: function () {
                  return this._timeScale;
                },
                set: function (e) {
                  (this._timeScale = e), this._applyTimeScale();
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.setAllDelays = function (e) {
                for (var t in this._map) {
                  this._map[t].tweens.forEach(function (t) {
                    t.delay(e);
                  });
                }
                for (var n = 0; n < this._children.length; n++)
                  this._children[n].setAllDelays(e);
              }),
              Object.defineProperty(e.prototype, "tracked", {
                get: function () {
                  return Object.keys(this._map).length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype._addChild = function (e) {
                (e._settings.parent = this),
                  this._children.push(e),
                  e._applyTimeScale();
              }),
              (e.prototype._removeChild = function (e) {
                var t = this._children.indexOf(e);
                this._children.splice(t, 1),
                  (e._settings.parent = null),
                  e._applyTimeScale();
              }),
              (e.prototype._applyTimeScale = function () {
                this._dirtyTimeScale = !0;
                var e = this.calcTimeScale();
                for (var t in this._map) {
                  this._map[t].tweens.forEach(function (t) {
                    t.timeScale(e);
                  });
                }
                for (var n = 0; n < this._children.length; n++)
                  this._children[n]._applyTimeScale();
              }),
              (e.prototype.calcTimeScale = function () {
                if (this._dirtyTimeScale) {
                  var e = this._settings.parent
                    ? this._settings.parent.calcTimeScale()
                    : 1;
                  (this._appliedTimeScale = this._timeScale * e),
                    (this._dirtyTimeScale = !1);
                }
                return this._appliedTimeScale;
              }),
              (e.prototype.destroy = function (e) {
                void 0 === e && (e = !0),
                  e && this.killAll(),
                  this._settings.parent &&
                    this._settings.parent._removeChild(this);
              }),
              (e.prototype.changeParent = function (e) {
                var t = this._settings.parent;
                t && t._removeChild(this), e._addChild(this);
              }),
              (e.prototype.init = function () {
                (this.delayedCall = this.delayedCall.bind(this)),
                  (this.from = this.from.bind(this)),
                  (this.fromTo = this.fromTo.bind(this)),
                  (this.to = this.to.bind(this)),
                  (this.staggerFrom = this.staggerFrom.bind(this)),
                  (this.staggerFromTo = this.staggerFromTo.bind(this)),
                  (this.staggerTo = this.staggerTo.bind(this)),
                  (this.killTweensOf = this.killTweensOf.bind(this)),
                  (this.killDelayedCallsTo =
                    this.killDelayedCallsTo.bind(this)),
                  (this.killAll = this.killAll.bind(this)),
                  (this.killAllDelayedCalls =
                    this.killAllDelayedCalls.bind(this)),
                  (this.killAllTweens = this.killAllTweens.bind(this)),
                  (this.setAllDelays = this.setAllDelays.bind(this)),
                  (this.destroy = this.destroy.bind(this)),
                  (this.changeParent = this.changeParent.bind(this));
              }),
              (e.prototype.getLineage = function () {
                for (var e = [this], t = this; t; )
                  t._settings.parent &&
                    (e.push(t._settings.parent), (t = t._settings.parent));
                return e;
              }),
              (e.prototype.onKill = function (e, t, n) {}),
              e
            );
          })();
        function u(t) {
          void 0 === t && (t = !0), r++;
          var n;
          n =
            "boolean" != typeof t
              ? {
                  id: t.id || "LTM_" + r,
                  selfClean: null == t.selfClean || t.selfClean,
                  parent: t.parent,
                }
              : { id: "LTM_" + r, selfClean: t, parent: null };
          var o = new s(n);
          return (
            o.init(),
            e.utils.modifyTweenMaxToAdhereToPausedFunction(o, function () {
              return null != i && i();
            }),
            o
          );
        }
        t.createLocalTweenMax = u;
      })(t.tweens || (t.tweens = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = (function () {
          function t(t, n, o) {
            (this._game = t),
              (this._checkedObjects = []),
              (this._overCallbacks = []),
              (this._outCallbacks = []),
              (this._sceneRoot = n),
              (this._converter =
                o || t.gui.convertPagePointToClientPoint.bind(t.gui)),
              (this._depthTester = e.utils.simpleDepthTestFunc);
            var i = this;
            this._handler = function (e) {
              i.handleMouseMove(e);
            };
          }
          return (
            (t.prototype.enable = function () {
              window.document.removeEventListener("mousemove", this._handler),
                window.document.addEventListener("mousemove", this._handler);
            }),
            (t.prototype.disable = function () {
              window.document.removeEventListener("mousemove", this._handler);
            }),
            (t.prototype.clear = function () {
              (this._checkedObjects = []),
                (this._outCallbacks = []),
                (this._overCallbacks = []),
                (this._focus = null);
            }),
            (t.prototype.add = function (e, t, n) {
              var o = this;
              Array.isArray(e) || (e = [e]),
                e.forEach(function (e) {
                  o._checkedObjects.push(e),
                    o._overCallbacks.push(t),
                    o._outCallbacks.push(n);
                });
            }),
            (t.prototype.remove = function (e) {
              var t = this._checkedObjects.reduce(function (t, n, o) {
                return n === e ? o : t;
              }, -1);
              -1 != t &&
                (this._checkedObjects.splice(t, 1),
                this._overCallbacks.splice(t, 1),
                this._outCallbacks.splice(t, 1)),
                e === this._focus && (this._focus = null);
            }),
            (t.prototype.setDepthTestFunc = function (e) {
              this._depthTester = e;
            }),
            (t.prototype.handleMouseMove = function (t) {
              if (0 !== this._checkedObjects.length) {
                var n = this._converter(t),
                  o = e.utils.hitTestMultiple(
                    this._checkedObjects,
                    n.x,
                    n.y,
                    this._sceneRoot,
                    this._depthTester
                  ),
                  i = this._focus;
                if (((this._focus = null), o)) {
                  if (((this._focus = o), o != i)) {
                    var a, r;
                    if (-1 != (a = this._checkedObjects.indexOf(i)))
                      (r = this._outCallbacks[a]) && r(i);
                    var s = this._checkedObjects.indexOf(o);
                    if (-1 != s) {
                      var u = this._overCallbacks[s];
                      u && u(o, n.x, n.y);
                    }
                  }
                } else if (null != i)
                  if (-1 != (a = this._checkedObjects.indexOf(i)))
                    (r = this._outCallbacks[a]) && r(i);
              }
            }),
            t
          );
        })();
        t.MouseMoveHitTestManager = n;
      })(t.utils || (t.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        (e.addPauseByKeyPressSupport = function (e, t) {
          void 0 === t && (t = 19),
            e.initGameData.allowkeyboardinput &&
              document.addEventListener("keydown", function (n) {
                (n.key !== t && n.keyCode !== t) ||
                  (e.pausedByClient = !e.pausedByClient);
              });
        }),
          (e.addDeveloperPauseByKeyPressSupport = function (e, t) {
            void 0 === t && (t = 19),
              e.initGameData.developmentmode &&
                document.addEventListener("keydown", function (n) {
                  (n.key !== t && n.keyCode !== t) ||
                    (e.pausedByClient = !e.pausedByClient);
                });
          });
      })(e.utils || (e.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = tk.d.message.IMessageOptionTypes,
          o = tk.d.message.IMessageTypes,
          i = (function () {
            function t(t) {
              (this._game = t),
                (this._showingMessage = !1),
                (this.onMessageProcessing = new e.utils.Signal1());
            }
            return (
              (t.prototype.handleDialogButtonClicked = function (e, t, n) {
                for (var o = [], i = 3; i < arguments.length; i++)
                  o[i - 3] = arguments[i];
                var a = this._optionsHandlers[t];
                a();
              }),
              (t.prototype.gameRoundEnding = function () {
                var e = this._game.model.getPlayerMessageQueue(!1);
                this._game.jsBridge.messagesPending(e.length > 0);
              }),
              (t.prototype.handleMessageQueue = function (e) {
                void 0 === e && (e = null);
                var t = this._game.model.getPlayerMessageQueue(!0);
                t && t.length > 0
                  ? ((this._allMessagesHandledCb = e),
                    (this._showingMessage = !0),
                    this._game.initGameData.handleplayermessagesexternally
                      ? (this.onMessageProcessing.dispatch(!1),
                        this._game.jsBridge.messagesReceived(t))
                      : this.handleNextMessage(t))
                  : e();
              }),
              (t.prototype.createIdleStateEvent = function () {
                var e = this,
                  t = this._game.gui;
                return {
                  id: "PlayerMessagesManager:idleStateEvent",
                  pre: function () {
                    return (
                      !!e.shouldShowMessage() &&
                      (t.setDialogModalMode(
                        !0,
                        !1,
                        "PlayerMessagesManager:idleStateEvent"
                      ),
                      !0)
                    );
                  },
                  exec: function (t) {
                    e.handleMessageQueue(t);
                  },
                  post: function () {
                    t.setDialogModalMode(
                      !1,
                      !1,
                      "PlayerMessagesManager:idleStateEvent"
                    );
                  },
                };
              }),
              (t.prototype.shouldShowMessage = function () {
                return this._game.model.getPlayerMessageQueue(!1).length > 0;
              }),
              (t.prototype.isShowingMessage = function () {
                return this._showingMessage;
              }),
              (t.prototype.handleNextMessage = function (e) {
                var t = e.shift();
                if (t) {
                  var n = this;
                  this.onMessageProcessing.dispatch(!1),
                    this._game.gameState.setDialogButtonHandlingRerouting(this);
                  var o = this._game.dialogManager;
                  t.options = t.options.sort(function (e, t) {
                    return e.order < t.order ? -1 : 1;
                  });
                  var i = this.convertMessageOptionToGuiDialogOptions(
                    t.options
                  );
                  t = this.findTextAndTitleForDialogFromType(t);
                  var a = o.showCustomDialog(t.title, t.text, i, !1, !0);
                  this._game.jsBridge.messageOpened(t.type),
                    (this._showingMessage = !0),
                    (this._currentMessage = t),
                    (this._optionsHandlers = []),
                    a.forEach(function (i, a) {
                      n._optionsHandlers[i] = function () {
                        var r = !1,
                          s = t.options[a];
                        if (
                          (s.link
                            ? "_blank" != s.link.target &&
                              ((r = !0), o.closeCurrentDialog(i, !0))
                            : ((r = !0), o.closeCurrentDialog(i, !0)),
                          null != s.ackData &&
                            n._game.model.setExtraData(
                              s.ackData,
                              !0,
                              "gs.newgameround"
                            ),
                          s.link)
                        ) {
                          var u = s.link.url;
                          "get" === s.link.target
                            ? jQuery
                                .get(u, function () {
                                  n.handleNextMessage(e);
                                })
                                .fail(function () {
                                  n.handleNextMessage(e);
                                })
                            : "post" === s.link.target
                            ? jQuery
                                .post(u, function () {
                                  n.handleNextMessage(e);
                                })
                                .fail(function () {
                                  n.handleNextMessage(e);
                                })
                            : (window.open(u, s.link.target),
                              1 == r && n.handleNextMessage(e));
                        } else n.handleNextMessage(e);
                      };
                    });
                } else this.messageHandlingComplete();
              }),
              (t.prototype.convertMessageOptionToGuiDialogOptions = function (
                e
              ) {
                var t = this;
                return e.map(function (e) {
                  return {
                    type: e.text ? null : t.mapTypeToGuiButton(e.type),
                    text: e.text,
                  };
                });
              }),
              (t.prototype.mapTypeToGuiButton = function (t) {
                return t === n.OK
                  ? e.slots.gui.GuiButtonIds.OK
                  : t === n.CANCEL
                  ? e.slots.gui.GuiButtonIds.CANCEL
                  : t === n.ACCEPT
                  ? e.slots.gui.GuiButtonIds.YES
                  : t === n.DECLINE
                  ? e.slots.gui.GuiButtonIds.NO
                  : t === n.ACCOUNT
                  ? e.slots.gui.GuiButtonIds.ACCOUNT
                  : e.slots.gui.GuiButtonIds.OK;
              }),
              (t.prototype.findTextAndTitleForDialogFromType = function (e) {
                return (
                  e.title ||
                    e.text ||
                    (e.type === o.ACCOUNT_SWITCH_TO_BONUS
                      ? ((e.title = "!ACCOUNT_SWITCH_TO_BONUS!"),
                        (e.text =
                          "!Placing this bet will use your bonus funds.!"))
                      : e.type === o.ACCOUNT_SWITCH_TO_REAL
                      ? ((e.title = "<ACCOUNT_SWITCH_TO_REAL>"),
                        (e.text =
                          "!Placing this bet will use your real money funds.!"))
                      : e.type === o.ELIGIBLE_FOR_BONUS
                      ? ((e.title = "!ELIGABLE_FOR_BONUS!"),
                        (e.text =
                          "!You are eligable for the use of bonus money when playing this game.!"))
                      : e.type === o.INELIGIBLE_FOR_BONUS
                      ? ((e.title = "!INELIGABLE_FOR_BONUS!"),
                        (e.text =
                          "!You are not eligable to use your bonus money when playing this game.!"))
                      : e.type === o.CUSTOM_MSG || (e.type, o.CMA_MSG)),
                  e
                );
              }),
              (t.prototype.messageHandlingComplete = function () {
                this._game.gameState.setDialogButtonHandlingRerouting(null),
                  (this._showingMessage = !1),
                  this._allMessagesHandledCb && this._allMessagesHandledCb(),
                  this.onMessageProcessing.dispatch(!0);
              }),
              (t.prototype.createMessageHandlingItem = function (e) {
                var t = this;
                return e.call(function (e, n) {
                  t.handleMessageQueue(function () {
                    e(n);
                  });
                }).then;
              }),
              t
            );
          })();
        t.PlayerMessagesManager = i;
      })(t.utils || (t.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      function t(e, t) {
        return new Promise(function (n) {
          e.eventCallback(t, n);
        });
      }
      (e.resolvePromiseOnTweenEvent = t),
        (e.resolvePromiseOnTweenComplete = function (e) {
          return t(e, "onComplete");
        }),
        (e.makeCallbackIntoPromise = function (e) {
          return new Promise(function (t) {
            return e(t);
          });
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n, o;
        (t.hideRealityCheckStateOverlay = function () {
          (n = !1), o && (o.group.visible = !1);
        }),
          (t.showRealityCheckStateOverlay = function (t) {
            if (!(t = t || e.game))
              throw new Error(
                "Cannot show the reality check as the game instance was not available."
              );
            return (
              o ||
                (o = (function (e) {
                  var t = { group: null, checkTime: null, resetTime: null };
                  t.group = e.add.group(null, "__tk_rcStateView", !0, !1);
                  var o = e.add.graphics(0, 0, t.group);
                  o.beginFill(0, 0.5),
                    o.drawRoundedRect(0, 0, 240, 66, 4),
                    o.endFill();
                  var i = e.add.text(8, 8, "Next RC in: ", {
                    font: "Verdana",
                    fontSize: 14,
                    fill: "#FFFFFF",
                  });
                  t.group.add(i),
                    (t.checkTime = e.add.text(128, 8, "", {
                      font: "Verdana",
                      fontSize: 14,
                      fill: "#FFFFFF",
                    })),
                    t.group.add(t.checkTime);
                  var a = e.add.text(8, 40, "RC reset in: ", {
                    font: "Verdana",
                    fontSize: 12,
                    fill: "#FFFFFF",
                  });
                  t.group.add(a),
                    (t.resetTime = e.add.text(128, 40, "", {
                      font: "Verdana",
                      fontSize: 12,
                      fill: "#FFFFFF",
                    })),
                    t.group.add(t.resetTime);
                  var r =
                      window.requestAnimationFrame ||
                      window.webkitRequestAnimationFrame,
                    s = function () {
                      if (n) {
                        var o = e.realityCheckManager,
                          i = o.timersRunning,
                          a = o.timeRemainingBeforeReset;
                        (t.resetTime.text = "" + a / 1e3),
                          (t.resetTime.fill =
                            0 === a
                              ? "#00CC00"
                              : i.reset
                              ? "#CCCC00"
                              : "#CC0000");
                        var u = o.timeRemainingBeforeCheck;
                        (t.checkTime.text = "" + u / 1e3),
                          (t.checkTime.fill =
                            0 === u
                              ? "#00CC00"
                              : i.check
                              ? "#CCCC00"
                              : "#CC0000");
                      }
                      r(s);
                    };
                  return r(s), t;
                })(t)),
              o.group.parent.addChild(o.group),
              (n = !0),
              (o.group.visible = !0),
              o
            );
          });
      })(t.utils || (t.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = e.utils.AmountFormatter,
          o = (function () {
            function t(e, t) {
              (this._game = e),
                (this._lastWCE = null),
                (this._stopCallback = t);
            }
            return (
              (t.prototype.resetOnNewGameRound = function () {
                this._lastWCE = null;
              }),
              (t.prototype.setStopAutoPlayCallback = function (e) {
                this._stopCallback = e;
              }),
              (t.prototype.prepareForWinCap = function (e) {
                if (null != e) {
                  var t = this.findBestWCE(e.wces);
                  t &&
                    (this._lastWCE
                      ? t.tbmac !== this._lastWCE.tbmac &&
                        this.blockGuiUntilWinCapShown()
                      : this.blockGuiUntilWinCapShown());
                }
              }),
              (t.prototype.handleWinCapReached = function (e, t, n) {
                var o = this;
                void 0 === n && (n = !1);
                var i = null,
                  a = function () {
                    (o._lastWCE = i),
                      o.showCustomDialogForWCE(i, n, function () {
                        o._game.gui.setDialogModalMode(!1, !1, "winCapManager"),
                          o._stopCallback && o._stopCallback(),
                          t(!0);
                      });
                  };
                null == e
                  ? t(!1)
                  : (i = this.findBestWCE(e.wces))
                  ? null !== this._lastWCE
                    ? i.tbmac < this._lastWCE.tbmac
                      ? a()
                      : t(!1)
                    : a()
                  : t(!1);
              }),
              (t.prototype.createWinCapReachedItem = function (e, t, n) {
                var o = this;
                return (
                  void 0 === n && (n = !1),
                  (e = e.call(function (e) {
                    var i;
                    (i = "function" == typeof t ? t() : t),
                      o.handleWinCapReached(i, e, n);
                  }).then)
                );
              }),
              (t.prototype.getWinCapReachedAcknowledgement = function (e, t) {
                var n = this;
                return (
                  void 0 === t && (t = !1),
                  new Promise(function (o) {
                    n.handleWinCapReached(e, o, t);
                  })
                );
              }),
              (t.prototype.showCustomDialogForWCE = function (t, o, i) {
                var a,
                  r,
                  s = this._game.languageSystem,
                  u = s.getPhraseContent("notificationPageOkOption_uc", !0);
                s.setParameterValue("winCapTbm", t.tbmac, !1);
                var l =
                  this._game.model.playerCurrencyString +
                  " " +
                  n.globalFormatter.formatAmount2(t.twaac);
                s.setParameterValue("winCapTwa", l, !1),
                  s.updateAllDirtyEntries(),
                  t.rc,
                  (a = s.getPhraseContent("winCapDialogTitle_uc", !0)),
                  (r = (r = s.getPhraseContent(
                    "winCapDialogText_vars_winCapTbm_winCapTwa_nc",
                    !0
                  )).replace(/(\\n)+/g, "<BR>")),
                  this.unblockGuiAfterWinCapShown(),
                  this._game.gui.setDialogModalMode(!0, !1, "winCapManager"),
                  this._game.dialogManager.showCustomDialog(
                    a,
                    r,
                    [{ type: e.slots.gui.GuiButtonIds.OK, text: u }],
                    !1,
                    !1,
                    i
                  );
              }),
              (t.prototype.findBestWCE = function (e) {
                var t = null;
                return (
                  e &&
                    (t = e.reduce(function (e, n) {
                      return t ? (n.tbmac < e.tbmac ? n : e) : n;
                    }, t)),
                  t
                );
              }),
              (t.prototype.blockGuiUntilWinCapShown = function () {
                this._game.gui.updateGuiButtonOverrides(
                  "winCapManager:prepareForWinCapDialog",
                  {
                    betButton: { enabled: !1 },
                    autoSpinConfigButton: { enabled: !1 },
                    spin: { enabled: !1 },
                    startAutoPlay: { enabled: !1 },
                    startFreeRounds: { enabled: !1 },
                  }
                );
              }),
              (t.prototype.unblockGuiAfterWinCapShown = function () {
                this._game.gui.updateGuiButtonOverrides(
                  "winCapManager:prepareForWinCapDialog",
                  {
                    betButton: { enabled: void 0 },
                    autoSpinConfigButton: { enabled: void 0 },
                    spin: { enabled: void 0 },
                    startAutoPlay: { enabled: void 0 },
                    startFreeRounds: { enabled: void 0 },
                  }
                );
              }),
              t
            );
          })();
        t.WinCapManager = o;
      })(t.utils || (t.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      e.addPromiseCheckAtStartup = function (e) {
        e("Promises", function () {
          return null != window.Promise;
        });
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = e.utils.createWaitForCallbacksGate,
          o = e.utils.loadWebFont;
        t.loadCommonWebFonts = function (e) {
          var t = e.langIso.split("-")[0],
            i = {},
            a = n(function () {
              e.done(i);
            }),
            r = e.langToFamilyMap || {
              ja: "boku",
              ko: "JejuGothic",
              zh: "SimHei",
              zht: "SimHei",
            },
            s = r[t],
            u = e.fontPath || "assets/fonts",
            l = e.error || function (e, t) {},
            d = 0 != e.loadVerlag;
          if (null != s) {
            var c = a.addCallback(r[t]),
              h = e.getAssetUrl(u + "/" + t + "/" + t + ".woff");
            (i[e.langIso] = s),
              (i[t] = s),
              o(
                { family: s, url: h },
                c,
                function () {
                  l(s, h);
                },
                function () {}
              );
          }
          if (1 == d && "verlag" != s) {
            s = r.fallback || "verlag";
            var p = e.getAssetUrl(u + "/verlagcombined-webfont.woff");
            (i.fallback = s), (i[e.langIso] = i[e.langIso] || s);
            c = a.addCallback(s);
            o(
              { family: s, url: p },
              c,
              function () {
                l(s, p);
              },
              function () {}
            );
          }
        };
      })(t.utils || (t.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      (e.modifyTweenMaxToAdhereToGamePaused = function (e, t) {
        [
          "from",
          "to",
          "fromTo",
          "staggerTo",
          "staggerFrom",
          "staggerFromTo",
          "delayedCall",
        ].forEach(function (n) {
          var o = t[n];
          t[n] = function () {
            var t = o.apply(null, arguments);
            return e.paused && t.paused(!0), t;
          };
        });
      }),
        (e.modifyTweenMaxToAdhereToPausedFunction = function (e, t) {
          [
            "from",
            "to",
            "fromTo",
            "staggerTo",
            "staggerFrom",
            "staggerFromTo",
            "delayedCall",
          ].forEach(function (n) {
            var o = e[n];
            e[n] = function () {
              var e = o.apply(null, arguments);
              return t() && e.paused(!0), e;
            };
          });
        });
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createCallSyncItem = function (n, o, i, a) {
          var r;
          a = t.createItemConfig(a);
          var s = !1,
            u = !1,
            l = function () {},
            d = function (e) {
              a.debug,
                s && ((m = !0), (s = !1), (p = !1), r ? r.run(l, e, u) : l(e));
            },
            c = i;
          null != c
            ? "function" != typeof c &&
              (c = function (e) {
                return i;
              })
            : (c = function (e) {
                return e;
              });
          var h = t.wrapFactoryInThenSetter(n, function (e) {
              (f.then = null), (r = e), (h = null);
            }),
            p = !1,
            m = !1,
            g = function (e, t) {
              e();
            },
            f = null;
          return (
            ((f = {
              then: h,
              run: function (e, t, n) {
                if (
                  ((u = n),
                  a.debug,
                  (p = !0),
                  (m = !1),
                  (l = e),
                  (s = !0),
                  (t = c(t)),
                  n && a.skippable)
                )
                  d(t);
                else {
                  var i = o(t);
                  void 0 === i && (i = t), d(i);
                }
              },
              abort: function (e) {
                a.debug,
                  (s = !1),
                  p || m
                    ? ((p = !1),
                      g(function () {
                        f.onabort && f.onabort(), r ? r.abort(e) : e();
                      }, m))
                    : e();
              },
              skip: function () {
                (u = !0), p && m && r && r.skip();
              },
              conf: function (t) {
                return (a = e.utils.combineObject(a, t)), f;
              },
              onaborting: function (e) {
                return (
                  (g = function (t, n) {
                    e(t, n);
                  }),
                  f
                );
              },
              status: function (e) {
                return (
                  (e.callSync = {
                    id: a.id,
                    cb: o,
                    running: p,
                    completed: m,
                    alive: s,
                    then: r ? r.status({}) : null,
                  }),
                  e
                );
              },
              setCallback: function (e) {
                o = e;
              },
            }).onabort = a.onabort),
            (g = a.onaborting || g),
            f
          );
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createCallItem = function (n, o, i, a) {
          var r;
          a = t.createItemConfig(a);
          var s,
            u = !1,
            l = !1,
            d = function () {},
            c = function (e) {
              a.debug,
                void 0 === e && (e = s),
                u && ((g = !0), (u = !1), (m = !1), r ? r.run(d, e, l) : d(e));
            },
            h = i;
          null != h
            ? "function" != typeof h &&
              (h = function (e) {
                return i;
              })
            : (h = function (e) {
                return e;
              });
          var p = t.wrapFactoryInThenSetter(n, function (e) {
              (_.then = null), (r = e), (p = null);
            }),
            m = !1,
            g = !1,
            f = function (e, t) {
              e();
            },
            _ = null;
          return (
            ((_ = {
              then: p,
              run: function (e, t, n) {
                (l = n),
                  a.debug,
                  (m = !0),
                  (g = !1),
                  (d = e),
                  (u = !0),
                  (s = h(t)),
                  n && a.skippable ? c(s) : o(c, s);
              },
              abort: function (e) {
                a.debug,
                  (u = !1),
                  m || g
                    ? ((m = !1),
                      f(function () {
                        _.onabort && _.onabort(), r ? r.abort(e) : e();
                      }, g))
                    : e();
              },
              skip: function () {
                (l = !0), g && r && r.skip();
              },
              conf: function (t) {
                return (a = e.utils.combineObject(a, t)), _;
              },
              onaborting: function (e) {
                return (
                  (f = function (t, n) {
                    e(t, n);
                  }),
                  _
                );
              },
              status: function (e) {
                return (
                  (e.call = {
                    id: a.id,
                    cb: o,
                    completed: g,
                    running: m,
                    alive: u,
                    then: r ? r.status({}) : null,
                  }),
                  e
                );
              },
              setCallback: function (e) {
                o = e;
              },
            }).onabort = a.onabort),
            (f = a.onaborting || f),
            _
          );
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createItemConfig = function (t) {
          return e.utils.combineObject(
            {
              debug: !1,
              onabort: null,
              onaborting: null,
              skippable: !0,
              id: null,
            },
            t
          );
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createTimeoutItem = function (n, o, i) {
          var a;
          i = t.createItemConfig(i);
          var r = !1,
            s = !1,
            u = function () {},
            l = function (e) {
              i.debug,
                void 0 === e && (e = undefined),
                r && ((r = !1), (c = !1), (h = !0), a ? a.run(u, e, s) : u(e));
            },
            d = t.wrapFactoryInThenSetter(n, function (e) {
              (g.then = null), (a = e), (d = null);
            }),
            c = !1,
            h = !1,
            p = NaN,
            m = function (e, t) {
              e();
            },
            g = {
              then: d,
              run: function (e, t, n) {
                (s = n),
                  i.debug,
                  (c = !0),
                  (h = !1),
                  (u = e),
                  (r = !0),
                  n && i.skippable
                    ? l(t)
                    : (p = setTimeout(function () {
                        l(t);
                      }, 1e3 * o));
              },
              abort: function (e) {
                i.debug,
                  (r = !1),
                  c || h
                    ? ((c = !1),
                      clearTimeout(p),
                      m(function () {
                        a ? a.abort(e) : e();
                      }, h))
                    : e();
              },
              conf: function (t) {
                return (i = e.utils.combineObject(i, t)), g;
              },
              onaborting: function (e) {
                return (
                  (m = function (t, n) {
                    e(t, n);
                  }),
                  g
                );
              },
              skip: function () {
                (s = !0), h && a && a.skip();
              },
              status: function (e) {
                return (
                  (e.timeout = {
                    id: i.id,
                    intervalId: p,
                    seconds: o,
                    completed: h,
                    running: c,
                    alive: r,
                    then: a ? a.status({}) : null,
                  }),
                  e
                );
              },
            };
          return (g.onabort = i.onabort), (m = i.onaborting || m), g;
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createLoggerItem = function (n, o, i, a) {
          var r;
          void 0 === i && (i = "log"), (a = t.createItemConfig(a));
          var s = !1,
            u = !1;
          i = i || "log";
          var l,
            d = function () {},
            c = t.wrapFactoryInThenSetter(n, function (e) {
              (g.then = null), (r = e), (c = null);
            }),
            h = !1,
            p = !1,
            m = function (e, t) {
              e();
            };
          l =
            "function" == typeof o
              ? o
              : function (e) {
                  return o;
                };
          var g = null;
          return (
            ((g = {
              then: c,
              run: function (e, t, n) {
                var o;
                if (
                  ((u = n),
                  a.debug,
                  (h = !0),
                  (p = !1),
                  (d = e),
                  (s = !0),
                  !(n && a.skippable))
                ) {
                  var c = window.console;
                  "log" === i
                    ? c.log(l(t))
                    : "info" === i
                    ? c.info(l(t))
                    : "warn" === i
                    ? c.warn(l(t))
                    : "error" === i
                    ? c.error(l(t))
                    : "debug" === i && c.debug(l(t));
                }
                (o = t),
                  a.debug,
                  s &&
                    ((s = !1), (p = !0), (h = !1), r ? r.run(d, o, u) : d(o));
              },
              abort: function (e) {
                a.debug,
                  (s = !1),
                  h || p
                    ? (clearTimeout(NaN),
                      (h = !1),
                      m(function () {
                        g.onabort && g.onabort(), r ? r.abort(e) : e();
                      }, p))
                    : e();
              },
              skip: function () {
                (u = !0), p && r && r.skip();
              },
              conf: function (t) {
                return (a = e.utils.combineObject(a, t)), g;
              },
              onaborting: function (e) {
                return (
                  (m = function (t, n) {
                    e(t, n);
                  }),
                  g
                );
              },
              status: function (e) {
                return (
                  (e.logger = {
                    id: a.id,
                    completed: p,
                    running: h,
                    alive: s,
                    message: l,
                    then: r ? r.status({}) : null,
                  }),
                  e
                );
              },
            }).onabort = a.onabort),
            (m = a.onaborting || m),
            g
          );
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (n) {
        n.createAndItem = function (o, i, a) {
          var r;
          a = n.createItemConfig(a);
          var s = !1,
            u = !1,
            l = 0,
            d = function () {},
            c = function (e) {
              a.debug,
                l++,
                s &&
                  l === h.length &&
                  ((f = !0), (s = !1), (g = !1), r ? r.run(d, e, u) : d(e));
            },
            h = [],
            p = function () {
              var e = n.createDummyItem(o, "item" + h.length, !1);
              return h.push(e), e.then;
            };
          i && i(p);
          var m = n.wrapFactoryInThenSetter(o, function (e) {
              (v.then = null), (r = e), (m = null);
            }),
            g = !1,
            f = !1,
            _ = function (e, t) {
              e();
            },
            v = {
              then: m,
              run: function (e, t, n) {
                (u = n),
                  a.debug,
                  (l = 0),
                  (f = !1),
                  (g = !0),
                  (d = e),
                  (s = !0),
                  n && a.skippable
                    ? c(t)
                    : h.forEach(function (e) {
                        e.run(c, t, n);
                      });
              },
              abort: function (e) {
                a.debug,
                  (l = h.length),
                  (s = !1),
                  g || f
                    ? ((g = !1),
                      _(function () {
                        v.onabort && v.onabort();
                        var n = [];
                        h.forEach(function (e) {
                          n.push(
                            t.makeCallbackIntoPromise(function (t) {
                              return e.abort(t);
                            })
                          );
                        });
                        Promise.all(n).then(function () {
                          r ? r.abort(e) : e();
                        });
                      }, f))
                    : e();
              },
              skip: function () {
                (u = !0),
                  g
                    ? h.forEach(function (e) {
                        e.skip();
                      })
                    : f && r && r.skip();
              },
              conf: function (t) {
                return (a = e.utils.combineObject(a, t)), v;
              },
              onaborting: function (e) {
                return (
                  (_ = function (t, n) {
                    e(t, n);
                  }),
                  v
                );
              },
              status: function (e) {
                return (
                  (e.and = {
                    id: a.id,
                    list: h
                      ? h.map(function (e) {
                          return e.status({});
                        })
                      : null,
                    completed: f,
                    running: g,
                    alive: s,
                    then: r ? r.status({}) : null,
                  }),
                  e
                );
              },
              add: p,
            };
          return (v.onabort = a.onabort), (_ = a.onaborting || _), v;
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (n) {
        n.createOrItem = function (o, i, a) {
          var r;
          a = n.createItemConfig(a);
          var s = !1,
            u = !1,
            l = function () {},
            d = function (e) {
              a.debug,
                s && ((s = !1), (g = !0), (m = !1), r ? r.run(l, e, u) : l(e));
            },
            c = [],
            h = function () {
              var e = n.createDummyItem(o, "item" + c.length, !1);
              return c.push(e), e.then;
            };
          i && i(h);
          var p = n.wrapFactoryInThenSetter(o, function (e) {
              (_.then = null), (r = e), (p = null);
            }),
            m = !1,
            g = !1,
            f = function (e, t) {
              e();
            },
            _ = {
              then: p,
              run: function (e, n, o) {
                (u = o), a.debug, (g = !1), (m = !0), (l = e), (s = !0);
                var i = t.ensureSingleInvocation(d);
                o && a.skippable
                  ? i(n)
                  : c.forEach(function (e) {
                      e.run(i, n, u);
                    });
              },
              abort: function (e) {
                a.debug,
                  (s = !1),
                  m || g
                    ? ((m = !1),
                      f(function () {
                        var n = [];
                        c.forEach(function (e) {
                          n.push(
                            t.makeCallbackIntoPromise(function (t) {
                              return e.abort(t);
                            })
                          );
                        }),
                          Promise.all(n).then(function () {
                            r ? r.abort(e) : e();
                          });
                      }, g))
                    : e();
              },
              skip: function () {
                (u = !0),
                  m
                    ? c.forEach(function (e) {
                        e.skip();
                      })
                    : g && r && r.skip();
              },
              conf: function (t) {
                return (a = e.utils.combineObject(a, t)), _;
              },
              onaborting: function (e) {
                return (
                  (f = function (t, n) {
                    e(t, n);
                  }),
                  _
                );
              },
              status: function (e) {
                return (
                  (e.or = {
                    id: a.id,
                    list: c,
                    running: m,
                    completed: g,
                    alive: s,
                    then: r ? r.status({}) : null,
                  }),
                  e
                );
              },
              or: h,
            };
          return (_.onabort = a.onabort), (f = a.onaborting || f), _;
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createIfItem = function (n, o, i) {
          var a;
          i = t.createItemConfig(i);
          var r,
            s,
            u = !1,
            l = !1,
            d = o,
            c = function () {},
            h = function (e) {
              i.debug,
                u && ((u = !1), (f = !0), (g = !1), a ? a.run(c, e, l) : c(e));
            },
            p = !1,
            m = t.wrapFactoryInThenSetter(n, function (e) {
              (v.then = null), (a = e), (m = null);
            }),
            g = !1,
            f = !1,
            _ = function (e, t) {
              e();
            },
            v = {
              then: m,
              run: function (e, t, n) {
                (l = n),
                  i.debug,
                  (g = !0),
                  (f = !1),
                  (c = e),
                  (u = !0),
                  n && i.skippable
                    ? h(t)
                    : d(t)
                    ? ((p = !0), r ? r.run(h, t, n) : h(t))
                    : ((p = !1), s ? s.run(h, t, n) : h(t));
              },
              abort: function (e) {
                i.debug,
                  (u = !1),
                  g || f
                    ? ((g = !1),
                      _(function () {
                        r &&
                          r.abort(function () {
                            a ? a.abort(e) : e();
                          }),
                          s &&
                            s.abort(function () {
                              a ? a.abort(e) : e();
                            });
                      }, f))
                    : e();
              },
              skip: function () {
                (l = !0), g && (p ? r && r.skip() : s && s.skip());
              },
              conf: function (t) {
                return (i = e.utils.combineObject(i, t)), v;
              },
              onaborting: function (e) {
                return (
                  (_ = function (t, n) {
                    e(t, n);
                  }),
                  v
                );
              },
              status: function (e) {
                return (
                  (e.if = {
                    id: i.id,
                    completed: f,
                    running: g,
                    alive: u,
                    true: r ? r.status({}) : null,
                    false: s ? s.status({}) : null,
                    then: a ? a.status({}) : null,
                  }),
                  e
                );
              },
              true: function () {
                var e = t.createDummyItem(n, "true", !1);
                return (r = e), e.then;
              },
              false: function () {
                var e = t.createDummyItem(n, "false", !1);
                return (s = e), e.then;
              },
            };
          return (v.onabort = i.onabort), (_ = i.onaborting || _), v;
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createForItem = function (n, o, i, a) {
          var r;
          a = t.createItemConfig(a);
          var s,
            u = !1;
          s = Array.isArray(i)
            ? function () {
                return i;
              }
            : i;
          var l = t.createDummyItem(n, "each", !1),
            d = { each: l.then, current: null, index: -1, list: null };
          o(d);
          var c,
            h = t.wrapFactoryInThenSetter(n, function (e) {
              (y.then = null), (r = e), (h = null);
            }),
            p = !1,
            m = !1,
            g = !1,
            f = function (e, t) {
              e();
            },
            _ = function () {},
            v = function (e) {
              a.debug,
                u &&
                  (d.index++,
                  (d.current = d.list[d.index]),
                  d.index === d.list.length
                    ? ((u = !1), (m = !0), (p = !1), r ? r.run(_, e, g) : _(e))
                    : l.run(v, e, g));
            },
            y = {
              then: h,
              run: function (e, t, n) {
                (g = n),
                  a.debug,
                  (p = !0),
                  (m = !1),
                  (_ = e),
                  (u = !0),
                  n && a.skippable
                    ? v(t)
                    : ((c = s(t)),
                      (d.index = 0),
                      (d.current = c[0]),
                      (d.list = c),
                      l.run(v, t, g));
              },
              abort: function (e) {
                a.debug,
                  (u = !1),
                  p || m
                    ? ((p = !1),
                      f(function () {
                        y.onabort && y.onabort(),
                          l.abort(function () {
                            r ? r.abort(e) : e();
                          });
                      }, m))
                    : e();
              },
              skip: function () {
                (g = !0), p ? l && l.skip() : m && r && r.skip();
              },
              conf: function (t) {
                return (a = e.utils.combineObject(a, t)), y;
              },
              onaborting: function (e) {
                return (
                  (f = function (t, n) {
                    e(t, n);
                  }),
                  y
                );
              },
              status: function (e) {
                return (
                  (e.for = {
                    id: a.id,
                    list:
                      d && d.list
                        ? d.list.map(function (e) {
                            e.status();
                          })
                        : null,
                    index: d ? d.index : null,
                    completed: m,
                    running: p,
                    alive: u,
                    then: r ? r.status({}) : null,
                  }),
                  e
                );
              },
            };
          return (y.onabort = a.onabort), (f = a.onaborting || f), y;
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createWhileItem = function (n, o, i, a) {
          var r;
          a = t.createItemConfig(a);
          var s = !1,
            u = !1,
            l = t.createDummyItem(n, "each", !1);
          o(l.then);
          var d = t.wrapFactoryInThenSetter(n, function (e) {
              (f.then = null), (r = e), (d = null);
            }),
            c = !1,
            h = !1,
            p = function (e, t) {
              e();
            },
            m = function () {},
            g = function (e) {
              a.debug,
                s &&
                  (1 == i(e)
                    ? l.run(g, e, u)
                    : ((s = !1),
                      (c = !1),
                      (h = !0),
                      r ? r.run(m, e, u) : m(e)));
            },
            f = {
              then: d,
              run: function (e, t, n) {
                (u = n),
                  a.debug,
                  (c = !0),
                  (h = !0),
                  (m = e),
                  (s = !0),
                  n && a.skippable
                    ? g(t)
                    : 1 == i(t)
                    ? l.run(g, t, u)
                    : r
                    ? r.run(m, t, u)
                    : m(t);
              },
              abort: function (e) {
                a.debug,
                  (s = !1),
                  c || h
                    ? ((c = !1),
                      p(function () {
                        l.abort(function () {
                          r ? r.abort(e) : e();
                        });
                      }, h))
                    : e();
              },
              skip: function () {
                (u = !0), c ? l && l.skip() : h && r && r.skip();
              },
              conf: function (t) {
                return (a = e.utils.combineObject(a, t)), f;
              },
              onaborting: function (e) {
                return (
                  (p = function (t, n) {
                    e(t, n);
                  }),
                  f
                );
              },
              status: function (e) {
                return (
                  (e.while = {
                    id: a.id,
                    condition: i,
                    each: l.status({}),
                    completed: h,
                    running: c,
                    alive: s,
                    then: r ? r.status({}) : null,
                  }),
                  e
                );
              },
            };
          return (f.onabort = a.onabort), (p = a.onaborting || p), f;
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createBlockingItem = function (n, o, i) {
          var a;
          i = t.createItemConfig(i);
          var r,
            s = !1,
            u = !1,
            l = function () {},
            d = function (e) {
              i.debug,
                s && ((p = !1), (s = !1), (m = !0), a ? a.run(l, e, u) : l(e));
            },
            c = function () {
              p && s && d(r);
            };
          o && o(c);
          var h = t.wrapFactoryInThenSetter(n, function (e) {
              (f.then = null), (a = e), (h = null);
            }),
            p = !1,
            m = !1,
            g = function (e, t) {
              e();
            },
            f = null;
          return (
            ((f = {
              then: h,
              run: function (e, t, n) {
                (u = n),
                  i.debug,
                  (m = !1),
                  (p = !0),
                  (l = e),
                  (s = !0),
                  (r = t),
                  n && i.skippable && d(t);
              },
              abort: function (e) {
                i.debug,
                  (s = !1),
                  p || m
                    ? ((p = !1),
                      g(function () {
                        f.onabort && f.onabort(), a ? a.abort(e) : e();
                      }, m))
                    : e();
              },
              skip: function () {
                (u = !0), m && a && a.skip();
              },
              conf: function (t) {
                return (i = e.utils.combineObject(i, t)), f;
              },
              onaborting: function (e) {
                return (
                  (g = function (t, n) {
                    e(t, n);
                  }),
                  f
                );
              },
              status: function (e) {
                return (
                  (e.blocking = {
                    id: i.id,
                    completed: m,
                    running: p,
                    alive: s,
                    then: a ? a.status({}) : null,
                  }),
                  e
                );
              },
              unblock: c,
              assignUnblocker: function (e, t) {
                return (e[t] = c), f;
              },
            }).onabort = i.onabort),
            (g = i.onaborting || g),
            f
          );
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createSubSequence = function (n, o, i, a) {
          var r;
          a = t.createItemConfig(a);
          var s,
            u,
            l = !1,
            d = !1;
          u = "function" == typeof o ? o() : o;
          var c = function () {},
            h = function (e) {
              a.debug,
                void 0 === e && (e = s),
                l && ((l = !1), (f = !0), (g = !1), r ? r.run(c, e, d) : c(e));
            },
            p = i;
          null != p
            ? "function" != typeof p &&
              (p = function (e) {
                return i;
              })
            : (p = function (e) {
                return e;
              });
          var m = t.wrapFactoryInThenSetter(n, function (e) {
              (v.then = null), (r = e), (m = null);
            }),
            g = !1,
            f = !1,
            _ = function (e, t) {
              e();
            },
            v = {
              then: m,
              run: function (e, t, n) {
                if (
                  ((d = n),
                  a.debug,
                  (g = !0),
                  (f = !1),
                  (c = e),
                  (l = !0),
                  (s = p(t)),
                  n && a.skippable)
                )
                  h(s);
                else {
                  var o = u.oncomplete;
                  (u.oncomplete = function () {
                    o && o(), (u.oncomplete = o), h();
                  }),
                    u.run(s);
                }
              },
              abort: function (e) {
                a.debug,
                  (l = !1),
                  g || f
                    ? ((g = !1),
                      (u.oncomplete = function () {}),
                      _(function () {
                        if (f) r ? r.abort(e) : e();
                        else {
                          var t = u.onabort;
                          (u.onabort = function () {
                            (u.onabort = t), t && t(), r ? r.abort(e) : e();
                          }),
                            u.abort();
                        }
                      }, f))
                    : e();
              },
              skip: function () {
                (d = !0), g ? u.skip() : f && r && r.skip();
              },
              conf: function (t) {
                return (a = e.utils.combineObject(a, t)), v;
              },
              onaborting: function (e) {
                return (
                  (_ = function (t, n) {
                    e(t, n);
                  }),
                  v
                );
              },
              status: function (e) {
                return (
                  (e.subseq = {
                    id: a.id,
                    sequence: u ? u.status() : null,
                    completed: f,
                    running: g,
                    alive: l,
                    then: r ? r.status({}) : null,
                  }),
                  e
                );
              },
            };
          return (v.onabort = a.onabort), (_ = a.onaborting || _), v;
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createSignalItem = function (n, o, i) {
          var a;
          i = t.createItemConfig(i);
          var r,
            s = !1,
            u = !1,
            l = function () {},
            d = function (e) {
              i.debug,
                o.remove(d),
                s &&
                  ((h = !1),
                  (s = !1),
                  (p = !0),
                  (e = void 0 === e ? r : e),
                  a ? a.run(l, e, u) : l(e));
            },
            c = t.wrapFactoryInThenSetter(n, function (e) {
              (g.then = null), (a = e), (c = null);
            }),
            h = !1,
            p = !1,
            m = function (e, t) {
              e();
            },
            g = {
              then: c,
              run: function (e, t, n) {
                (u = n),
                  i.debug,
                  (h = !0),
                  (p = !1),
                  (l = e),
                  (s = !0),
                  (r = t),
                  n && i.skippable ? d(r) : o.addOnce ? o.addOnce(d) : o.add(d);
              },
              abort: function (e) {
                i.debug,
                  (s = !1),
                  h || p
                    ? ((h = !1),
                      o.remove(d),
                      m(function () {
                        g.onabort && g.onabort(), a ? a.abort(e) : e();
                      }, p))
                    : e();
              },
              skip: function () {
                (u = !0), p && a && a.skip();
              },
              conf: function (t) {
                return (i = e.utils.combineObject(i, t)), g;
              },
              onaborting: function (e) {
                return (
                  (m = function (t, n) {
                    e(t, n);
                  }),
                  g
                );
              },
              status: function (e) {
                return (
                  (e.listen = {
                    id: i.id,
                    completed: p,
                    signal: o,
                    running: h,
                    alive: s,
                    then: a ? a.status({}) : null,
                  }),
                  e
                );
              },
            };
          return (g.onabort = i.onabort), (m = i.onaborting || m), g;
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (n) {
        n.createForkingItem = function (o, i, a, r) {
          var s;
          r = n.createItemConfig(r);
          var u = !1,
            l = !1,
            d = function () {},
            c = function (e) {
              r.debug,
                u && ((u = !1), (m = !0), (p = !1), s ? s.run(d, e, l) : d(e));
            },
            h = n.wrapFactoryInThenSetter(o, function (e) {
              (v.then = null), (s = e), (h = null);
            }),
            p = !1,
            m = !1,
            g = void 0,
            f = function (e, t) {
              e();
            },
            _ = [],
            v = {
              then: h,
              run: function (e, t, n) {
                if (
                  ((l = n),
                  r.debug,
                  (g = void 0),
                  (p = !0),
                  (m = !1),
                  (d = e),
                  (u = !0),
                  (_ = []),
                  n && r.skippable)
                )
                  c(t);
                else {
                  var o = !1;
                  a.forEach(function (e) {
                    _.push(function (t) {
                      if (o)
                        throw new Error(
                          "Forking into multiple paths is not allowed!"
                        );
                      (o = !0), (g = e), e.run(c, t, l);
                    });
                  }),
                    i(t, _);
                }
              },
              abort: function (e) {
                r.debug,
                  (u = !1),
                  p || m
                    ? ((p = !1),
                      f(function () {
                        var n = [];
                        a.forEach(function (e) {
                          n.push(
                            t.makeCallbackIntoPromise(function (t) {
                              return e.abort(t);
                            })
                          );
                        }),
                          Promise.all(n).then(function () {
                            s ? s.abort(e) : e();
                          });
                      }, m))
                    : e();
              },
              skip: function () {
                (l = !0), p ? g && g.skip() : m && s && s.skip();
              },
              conf: function (t) {
                return (r = e.utils.combineObject(r, t)), v;
              },
              onaborting: function (e) {
                return (
                  (f = function (t, n) {
                    e(t, n);
                  }),
                  v
                );
              },
              status: function (e) {
                return (
                  (e.forking = {
                    id: r.id,
                    forks: a,
                    picked: g,
                    completed: m,
                    running: p,
                    alive: u,
                    then: s ? s.status({}) : null,
                  }),
                  e
                );
              },
            };
          return (v.onabort = r.onabort), (f = r.onaborting || f), v;
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        e.createSequenceItemFactory = function (t) {
          var n;
          if (
            ((n = {
              call: function (t, o, i) {
                return e.createCallItem(n, t, o, i);
              },
              callSync: function (t, o, i) {
                return e.createCallSyncItem(n, t, o, i);
              },
              callOn: function (t, o, i, a) {
                return e.createCallItem(n, t.bind(o), i, a);
              },
              callSyncOn: function (t, o, i, a) {
                return e.createCallSyncItem(n, t.bind(o), i, a);
              },
              delay: function (t, o, i) {
                return e.createDelayItem(n, t, o, i);
              },
              timeout: function (t, o) {
                return e.createTimeoutItem(n, t, o);
              },
              trace: function (t, o, i) {
                return e.createLoggerItem(n, t, o, i);
              },
              and: function (t, o) {
                return e.createAndItem(n, t, o);
              },
              or: function (t, o) {
                return e.createOrItem(n, t, o);
              },
              if: function (t, o) {
                return e.createIfItem(n, t, o);
              },
              triggerIf: function (t, o, i) {
                return e.createTriggerIfItem(n, t, o, i);
              },
              for: function (t, o, i) {
                return e.createForItem(n, t, o, i);
              },
              while: function (t, o, i) {
                return e.createWhileItem(n, t, o, i);
              },
              block: function (t, o) {
                return e.createBlockingItem(n, t, o);
              },
              subseq: function (t, o, i) {
                return e.createSubSequence(n, t, o, i);
              },
              subflow: function (t, o, i, a) {
                return e.createSubFlow(n, t, o, i, a);
              },
              listen: function (t, o) {
                return e.createSignalItem(n, t, o);
              },
              fork: function (t, o, i) {
                return e.createForkingItem(n, t, o, i);
              },
              noop: function (t) {
                return e.createNoopItem(n, t);
              },
              passAll: function (t, o) {
                return e.createPassAllItem(n, t, o);
              },
              playAnimation: function (t, o, i) {
                return e.createPlayAnimItem(n, t, o, i);
              },
              stopAnimation: function (t, o, i) {
                return e.createStopAnimItem(n, t, o, i);
              },
              timeScaler: function (t, o) {
                return e.createTimeScaleItem(n, t, o);
              },
              custom: function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
                return e.apply(void 0, __spreadArrays([n], t));
              },
            }),
            (t = t || {}))
          )
            for (var o in t)
              void 0 === n[o] &&
                "function" == typeof t[o] &&
                (n[o] = function () {
                  for (var e = [], i = 0; i < arguments.length; i++)
                    e[i] = arguments[i];
                  return t[o].apply(t, [n].concat(e));
                });
          return n;
        };
      })(e.sequence2 || (e.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        e.createAbortableSubSeq = function (t, n, o) {
          (o = e.createItemConfig(o)).debug;
          var i,
            a = e.createItemConfig(o);
          return (i = t.call(
            function (t, a) {
              !0;
              var r = e.createSequence(e.createSequenceItemFactory());
              if ((r.conf({ skippable: o.skippable }), o.skippable)) {
                var s = i.skip;
                i.skip = function () {
                  r.skip(), s();
                };
              }
              var u = r.startWith.callSync(function () {}).then;
              n(u, r.abort);
              (r.oncomplete = function () {
                !1, t();
              }),
                (r.onabort = function () {
                  !1, t();
                }),
                r.run(a);
            },
            void 0,
            a
          )).then;
        };
      })(e.sequence2 || (e.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = 0;
        t.createDelayItem = function (o, i, a, r) {
          var s;
          a = t.createItemConfig(a);
          var u = !1,
            l = !1,
            d = function () {},
            c = t.wrapFactoryInThenSetter(o, function (e) {
              (f.then = null), (s = e), (c = null);
            }),
            h = !1,
            p = !1,
            m = null,
            g = function (e, t) {
              e();
            };
          r = r = {
            delayedCall: TweenMax.delayedCall,
            killDelayedCallsTo: TweenMax.killDelayedCallsTo,
          };
          var f = {
            then: c,
            run: function (e, t, o) {
              var c, g, f, _, v;
              (l = o),
                a.debug,
                (h = !0),
                (p = !1),
                (d = e),
                (u = !0),
                (c = function () {
                  var e;
                  (e = t),
                    a.debug,
                    void 0 === e && (e = void 0),
                    u &&
                      ((h = !1), (p = !0), (u = !1), s ? s.run(d, e, l) : d(e));
                }),
                (v =
                  "function(){ var tk__mfu__uuid__" +
                  n +
                  "; return f.apply(s,p); }"),
                n++,
                ((_ = function (e) {
                  return c.apply(g, f || e);
                }).toString = function () {
                  return v;
                }),
                (m = _),
                o && a.skippable ? m() : r.delayedCall(i, m);
            },
            abort: function (e) {
              a.debug,
                (u = !1),
                h || p
                  ? (r.killDelayedCallsTo(m),
                    (h = !1),
                    g(function () {
                      f.onabort && f.onabort(), s ? s.abort(e) : e();
                    }, p))
                  : e();
            },
            skip: function () {
              (l = !0),
                p
                  ? s && s.skip()
                  : h && a.skippable && (r.killDelayedCallsTo(m), m());
            },
            conf: function (t) {
              return (a = e.utils.combineObject(a, t)), f;
            },
            onaborting: function (e) {
              return (
                (g = function (t, n) {
                  e(t, n);
                }),
                f
              );
            },
            status: function (e) {
              return (
                (e.delay = {
                  id: a.id,
                  seconds: i,
                  completed: p,
                  running: h,
                  alive: u,
                  then: s ? s.status({}) : null,
                }),
                e
              );
            },
          };
          return (f.onabort = a.onabort), (g = a.onaborting || g), f;
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createDummyItem = function (n, o, i) {
          var a,
            r = t.createItemConfig({ debug: i, id: o }),
            s = !1,
            u = !1,
            l = function () {},
            d = t.wrapFactoryInThenSetter(n, function (e) {
              (m.then = null), (a = e), (d = null);
            }),
            c = !1,
            h = !1,
            p = function (e, t) {
              e();
            },
            m = null;
          return (
            ((m = {
              then: d,
              run: function (e, t, n) {
                var o;
                (u = n),
                  r.debug,
                  (c = !0),
                  (h = !1),
                  (l = e),
                  (s = !0),
                  (o = t),
                  r.debug,
                  s &&
                    ((h = !0), (s = !1), (c = !1), a ? a.run(l, o, u) : l(o));
              },
              abort: function (e) {
                r.debug,
                  (s = !1),
                  c || h
                    ? ((c = !1),
                      p(function () {
                        m.onabort && m.onabort(), a ? a.abort(e) : e();
                      }, h))
                    : e();
              },
              skip: function () {
                (u = !0), h && a && a.skip();
              },
              conf: function (t) {
                return (r = e.utils.combineObject(r, t)), m;
              },
              onaborting: function (e) {
                return (
                  (p = function (t, n) {
                    e(t, n);
                  }),
                  m
                );
              },
              status: function (e) {
                return (
                  (e[o] = {
                    id: r.id,
                    completed: h,
                    running: c,
                    alive: s,
                    then: a ? a.status({}) : null,
                  }),
                  e
                );
              },
            }).onabort = r.onabort),
            (p = r.onaborting || p),
            m
          );
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        e.createGenericItemFactoryInstance = function (t) {
          return function (n, o) {
            var i,
              a = null,
              r = !1,
              s = t.createItem(o),
              u = (s.debug, function (e) {}),
              l = function (e) {
                void 0 === e && (e = i),
                  r && ((r = !1), (h = !0), (c = !1), s.done(e, a, u));
              },
              d = e.wrapFactoryInThenSetter(n, function (e) {
                (m.then = null), (a = e), (d = null);
              }),
              c = !1,
              h = !1,
              p = function (e, t) {
                e();
              },
              m = {
                then: d,
                run: function (e, t, n) {
                  (c = !0),
                    (h = !1),
                    (u = e),
                    (r = !0),
                    (i = s.dataVO(t)),
                    s.run(i, l, n);
                },
                abort: function (e) {
                  (r = !1),
                    c || h
                      ? ((c = !1),
                        p(function () {
                          !(function (e) {
                            return null != e.abortAsync;
                          })(s)
                            ? (s.abort(a), e())
                            : s.abortAsync(a, e);
                        }, h))
                      : e();
                },
                skip: function () {
                  c ? s.skip && s.skip() : h && a && a.skip();
                },
                conf: function (e) {
                  throw new Error("Cannot configure generic items.");
                },
                onaborting: function (e) {
                  return (
                    (p = function (t, n) {
                      e(t, n);
                    }),
                    m
                  );
                },
                status: function (e) {
                  return (
                    (e.generic = {
                      id: s.id,
                      completed: h,
                      running: c,
                      alive: r,
                      then: a ? a.status({}) : null,
                    }),
                    e
                  );
                },
              };
            return m;
          };
        };
      })(e.sequence2 || (e.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createNoopItem = function (n, o, i) {
          void 0 === i && (i = !1);
          var a,
            r = t.createItemConfig({}),
            s = !1,
            u = !1,
            l = function () {},
            d = t.wrapFactoryInThenSetter(n, function (e) {
              (m.then = null), (a = e), (d = null);
            }),
            c = !1,
            h = !1,
            p = function (e, t) {
              e();
            },
            m = null;
          return (
            ((m = {
              then: d,
              run: function (e, t, n) {
                var o;
                (u = n),
                  r.debug,
                  (c = !0),
                  (h = !1),
                  (l = e),
                  (s = !0),
                  (o = t),
                  r.debug,
                  s &&
                    ((h = !0), (s = !1), (c = !1), a ? a.run(l, o, u) : l(o));
              },
              abort: function (e) {
                r.debug,
                  (s = !1),
                  c || h
                    ? ((c = !1),
                      p(function () {
                        m.onabort && m.onabort(), a ? a.abort(e) : e();
                      }, h))
                    : e();
              },
              skip: function () {
                h && a && a.skip();
              },
              conf: function (t) {
                return (r = e.utils.combineObject(r, t)), m;
              },
              onaborting: function (e) {
                return (
                  (p = function (t, n) {
                    e(t, n);
                  }),
                  m
                );
              },
              status: function (e) {
                return (
                  i
                    ? (e = a ? a.status(e) : e)
                    : (e.noop = {
                        id: r.id,
                        completed: h,
                        running: c,
                        alive: s,
                        then: a ? a.status({}) : null,
                      }),
                  e
                );
              },
            }).onabort = r.onabort),
            (p = r.onaborting || p),
            m
          );
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createPassAllItem = function (n, o, i) {
          var a;
          i = t.createItemConfig(i);
          var r = !1,
            s = !1,
            u = [];
          o &&
            o.forEach(function (e) {
              u.push({ key: e, passed: !1 });
            });
          var l = function () {},
            d = function (e) {
              i.debug,
                r && ((h = !1), (r = !1), (p = !0), a ? a.run(l, e, s) : l(e));
            },
            c = t.wrapFactoryInThenSetter(n, function (e) {
              (g.then = null), (a = e), (c = null);
            }),
            h = !1,
            p = !1,
            m = function (e, t) {
              e();
            },
            g = null;
          return (
            ((g = {
              then: c,
              run: function (e, t, n) {
                (s = n),
                  i.debug,
                  (p = !1),
                  (h = !0),
                  (l = e),
                  (r = !0),
                  t,
                  n && i.skippable
                    ? d(t)
                    : u.forEach(function (e) {
                        e.passed = !1;
                      });
              },
              abort: function (e) {
                i.debug,
                  (r = !1),
                  h || p
                    ? ((h = !1),
                      m(function () {
                        g.onabort && g.onabort(), a ? a.abort(e) : e();
                      }, p))
                    : e();
              },
              skip: function () {
                (s = !0), p && a && a.skip();
              },
              conf: function (t) {
                return (i = e.utils.combineObject(i, t)), g;
              },
              onaborting: function (e) {
                return (
                  (m = function (t, n) {
                    e(t, n);
                  }),
                  g
                );
              },
              status: function (e) {
                return (
                  (e.blocking = {
                    id: i.id,
                    completed: p,
                    running: h,
                    alive: r,
                    keys: u.map(function (e) {
                      return { key: e.key, passed: e.passed };
                    }),
                    then: a ? a.status({}) : null,
                  }),
                  e
                );
              },
              add: function (e) {
                if (null == e)
                  throw new Error("A PassItem cannot have a key that is " + e);
                return u.push({ key: e, passed: !1 }), g;
              },
              pass: function (e) {
                null != e && i.debug;
                var t = !0;
                u.forEach(function (n) {
                  n.key === e && (n.passed = !0), n.passed || (t = !1);
                }),
                  t && d();
              },
            }).onabort = i.onabort),
            (m = i.onaborting || m),
            g
          );
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createPlayAnimItem = function (n, o, i, a) {
          var r;
          a = t.createItemConfig(a);
          var s,
            u,
            l,
            d = !1,
            c = !1,
            h = function () {},
            p = function (e) {
              a.debug,
                void 0 === e && (e = s),
                d && ((d = !1), (f = !0), (g = !1), r ? r.run(h, e, c) : h(e));
            },
            m = t.wrapFactoryInThenSetter(n, function (e) {
              (v.then = null), (r = e), (m = null);
            }),
            g = !1,
            f = !1,
            _ = function (e, t) {
              e();
            },
            v = null;
          return (
            ((v = {
              then: m,
              run: function (e, t, n) {
                (c = n),
                  a.debug,
                  (g = !0),
                  (f = !1),
                  (h = e),
                  (d = !0),
                  (s = t),
                  n && a.skippable
                    ? p(s)
                    : ((l = o.play(i.animId, i.frameRate, i.loop, !1)),
                      i.waitForCompletion
                        ? ((u = function () {
                            p(s);
                          }),
                          l.onComplete.addOnce(u))
                        : p(s));
              },
              abort: function (e) {
                a.debug,
                  (d = !1),
                  g || f
                    ? ((g = !1),
                      l && i.stopOnAbort && l.stop(),
                      _(function () {
                        v.onabort && v.onabort(), r ? r.abort(e) : e();
                      }, f))
                    : e();
              },
              skip: function () {
                (c = !0), f && r && r.skip();
              },
              conf: function (t) {
                return (a = e.utils.combineObject(a, t)), v;
              },
              onaborting: function (e) {
                return (
                  (_ = function (t, n) {
                    e(t, n);
                  }),
                  v
                );
              },
              status: function (e) {
                return (
                  (e.playAnimation = {
                    id: a.id,
                    completed: f,
                    sprite: o,
                    settings: i,
                    running: g,
                    alive: d,
                    then: r ? r.status({}) : null,
                  }),
                  e
                );
              },
            }).onabort = a.onabort),
            (_ = a.onaborting || _),
            v
          );
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createPlaySpineAnimItem = function (n, o, i, a, r) {
          var s;
          r = t.createItemConfig(r);
          var u,
            l,
            d = !1,
            c = !1,
            h = i(),
            p = function () {},
            m = function (e) {
              r.debug,
                void 0 === e && (e = u),
                d &&
                  ((d = !1),
                  (_ = !0),
                  (f = !1),
                  h.clear(),
                  s ? s.run(p, e, c) : p(e));
            },
            g = t.wrapFactoryInThenSetter(n, function (e) {
              (y.then = null), (s = e), (g = null);
            }),
            f = !1,
            _ = !1,
            v = function (e, t) {
              e();
            },
            y = null;
          return (
            ((y = {
              then: g,
              run: function (e, t, n) {
                if (
                  ((c = n),
                  r.debug,
                  (f = !0),
                  (_ = !1),
                  (p = e),
                  (d = !0),
                  (u = t),
                  n && r.skippable)
                )
                  m(u);
                else {
                  var i = a.eventHandlers || {};
                  if (a.completeEventName) {
                    l = function () {
                      m(u);
                    };
                    var s = i[a.completeEventName];
                    (i[a.completeEventName] = function () {
                      s && s(), l();
                    }),
                      h.playAnimation(o, a.track || 0, a.animId, a.loop, i);
                  } else
                    h.playAnimation(o, a.track || 0, a.animId, a.loop, i), m(u);
                }
              },
              abort: function (e) {
                r.debug,
                  (d = !1),
                  h.clear(),
                  f || _
                    ? ((f = !1),
                      v(function () {
                        y.onabort && y.onabort(), s ? s.abort(e) : e();
                      }, _))
                    : e();
              },
              skip: function () {
                (c = !0), _ && s && s.skip();
              },
              conf: function (t) {
                return (r = e.utils.combineObject(r, t)), y;
              },
              onaborting: function (e) {
                return (
                  (v = function (t, n) {
                    e(t, n);
                  }),
                  y
                );
              },
              status: function (e) {
                return (
                  (e.playAnimation = {
                    id: r.id,
                    completed: _,
                    spineObject: o,
                    settings: a,
                    running: f,
                    alive: d,
                    then: s ? s.status({}) : null,
                  }),
                  e
                );
              },
            }).onabort = r.onabort),
            (v = r.onaborting || v),
            y
          );
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createStopAnimItem = function (n, o, i, a) {
          var r;
          a = t.createItemConfig(a);
          var s,
            u = !1,
            l = !1,
            d = function () {},
            c = t.wrapFactoryInThenSetter(n, function (e) {
              (g.then = null), (r = e), (c = null);
            }),
            h = !1,
            p = !1,
            m = function (e, t) {
              e();
            },
            g = null;
          return (
            ((g = {
              then: c,
              run: function (e, t, n) {
                var c;
                (l = n),
                  a.debug,
                  (h = !0),
                  (p = !1),
                  (d = e),
                  (u = !0),
                  (s = t),
                  (n && a.skippable) || o.animations.stop(i),
                  (c = s),
                  a.debug,
                  void 0 === c && (c = s),
                  u &&
                    ((u = !1), (p = !0), (h = !1), r ? r.run(d, c, l) : d(c));
              },
              abort: function (e) {
                a.debug,
                  (u = !1),
                  h || p
                    ? ((h = !1),
                      m(function () {
                        g.onabort && g.onabort(), r ? r.abort(e) : e();
                      }, p))
                    : e();
              },
              skip: function () {
                (l = !0), p && r && r.skip();
              },
              conf: function (t) {
                return (a = e.utils.combineObject(a, t)), g;
              },
              onaborting: function (e) {
                return (
                  (m = function (t, n) {
                    e(t, n);
                  }),
                  g
                );
              },
              status: function (e) {
                return (
                  (e.signal = {
                    id: a.id,
                    completed: p,
                    sprite: o,
                    animId: i,
                    running: h,
                    alive: u,
                    then: r ? r.status({}) : null,
                  }),
                  e
                );
              },
            }).onabort = a.onabort),
            (m = a.onaborting || m),
            g
          );
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createSubFlow = function (n, o, i, a, r) {
          var s;
          r = t.createItemConfig(r);
          var u,
            l = !1,
            d = !1,
            c = function () {},
            h = function (e) {
              r.debug,
                void 0 === e && (e = u),
                l && ((_ = !0), (l = !1), (f = !1), s ? s.run(c, e, d) : c(e));
            },
            p = a;
          null != p
            ? "function" != typeof p &&
              (p = function (e) {
                return a;
              })
            : (p = function (e) {
                return e;
              });
          var m = t.wrapFactoryInThenSetter(n, function (e) {
              (S.then = null), (s = e), (m = null);
            }),
            g = t.createSequence(n),
            f = !1,
            _ = !1,
            v = function (e, t) {
              e();
            },
            y = g.startWith.noop();
          !1 === i && o(y);
          var S = {
            then: m,
            run: function (e, t, n) {
              if (
                ((d = n),
                r.debug,
                (f = !0),
                (_ = !1),
                (c = e),
                (l = !0),
                (u = p(t)),
                n && r.skippable)
              )
                h(u);
              else {
                !0 === i && o(y);
                var a = g.oncomplete;
                (g.oncomplete = function () {
                  a && a(), (g.oncomplete = a), h();
                }),
                  g.run(u);
              }
            },
            abort: function (e) {
              r.debug,
                (l = !1),
                f || _
                  ? ((f = !1),
                    (g.oncomplete = function () {}),
                    v(function () {
                      _
                        ? e()
                        : ((g.onabort = function () {
                            s ? s.abort(e) : e();
                          }),
                          g.abort());
                    }, _))
                  : e();
            },
            skip: function () {
              (d = !0), f ? g && g.skip() : _ && s && s.skip();
            },
            conf: function (t) {
              return (r = e.utils.combineObject(r, t)), S;
            },
            onaborting: function (e) {
              return (
                (v = function (t, n) {
                  e(t, n);
                }),
                S
              );
            },
            status: function (e) {
              return (
                (e.subflow = {
                  id: r.id,
                  sequence: g ? g.status() : null,
                  completed: _,
                  running: f,
                  alive: l,
                  then: s ? s.status({}) : null,
                }),
                e
              );
            },
          };
          return (S.onabort = r.onabort), (v = r.onaborting || v), S;
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createTimeScaleItem = function (n, o, i) {
          var a;
          i = t.createItemConfig(i);
          var r = !1,
            s = !1,
            u = o,
            l = function () {},
            d = t.wrapFactoryInThenSetter(n, function (e) {
              (m.then = null), (a = e), (d = null);
            }),
            c = !1,
            h = !1,
            p = function (e, t) {
              e();
            },
            m = {
              then: d,
              run: function (e, t, n) {
                var o, d, p;
                (s = n),
                  i.debug,
                  (c = !0),
                  (h = !1),
                  (l = function (t) {
                    var n;
                    (u.timeScale =
                      null != (n = i.timeScales.done) ? n : u.timeScale),
                      e(t);
                  }),
                  (r = !0),
                  (u.timeScale =
                    null != (o = i.timeScales.run) ? o : u.timeScale),
                  n &&
                    i.skippable &&
                    ((u.timeScale =
                      null != (d = i.timeScales.skip) ? d : u.timeScale),
                    (p = t),
                    i.debug,
                    void 0 === p && (p = void 0),
                    r &&
                      ((r = !1),
                      (c = !1),
                      (h = !0),
                      a ? a.run(l, p, s) : l(p)));
              },
              abort: function (e) {
                var t;
                i.debug,
                  (r = !1),
                  c || h
                    ? ((c = !1),
                      h ||
                        (u.timeScale =
                          null != (t = i.timeScales.abort) ? t : u.timeScale),
                      p(function () {
                        a ? a.abort(e) : e();
                      }, h))
                    : e();
              },
              conf: function (t) {
                return (i = e.utils.combineObject(i, t)), m;
              },
              onaborting: function (e) {
                return (
                  (p = function (t, n) {
                    e(t, n);
                  }),
                  m
                );
              },
              skip: function () {
                var e;
                (s = !0),
                  h
                    ? a && a.skip()
                    : (u.timeScale =
                        null != (e = i.timeScales.skip) ? e : u.timeScale);
              },
              status: function (e) {
                return (
                  (e.timeout = {
                    id: i.id,
                    timeScale: u.timeScale,
                    completed: h,
                    running: c,
                    alive: r,
                    then: a ? a.status({}) : null,
                  }),
                  e
                );
              },
            };
          return (m.onabort = i.onabort), (p = i.onaborting || p), m;
        };
      })(t.sequence2 || (t.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        e.createTriggerIfItem = function (e, t, n, o) {
          var i = e.if(t, o),
            a = i.true();
          if ((n.ifTrue(a), n.ifFalse)) {
            var r = i.false();
            n.ifFalse(r);
          }
          return i;
        };
      })(e.sequence2 || (e.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        e.createWhenSkippedItem = function (t, n, o) {
          var i = e.createItemConfig({ skippable: !1 }),
            a = t.call(
              function (e, t) {
                return r && n(!0), e(t);
              },
              o,
              i
            ),
            r = !1,
            s = a.run;
          a.run = function (e, t, n) {
            return (r = n), s(e, t, n);
          };
          var u = a.skip;
          return (
            (a.skip = function () {
              return (r = !0), n(!1), u();
            }),
            a
          );
        };
      })(e.sequence2 || (e.sequence2 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        var t = (function () {
          function e(e) {
            (this._runner = e),
              (this._aborted = !1),
              (this._running = !1),
              (this._onCompleted = function () {}),
              (this._onAborted = function () {});
          }
          return (
            Object.defineProperty(e.prototype, "data", {
              get: function () {
                return this._data;
              },
              set: function (e) {
                this._data = e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "aborted", {
              get: function () {
                return this._aborted;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "running", {
              get: function () {
                return this._running;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.abort = function () {
              return __awaiter(this, void 0, void 0, function () {
                var e;
                return __generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (this._aborted = !0),
                        this._running
                          ? [3, 1]
                          : [2, Promise.resolve(this._data)]
                      );
                    case 1:
                      return (
                        t.trys.push([1, 3, , 4]), [4, this._currentItem.abort()]
                      );
                    case 2:
                      return (
                        (e = t.sent()),
                        (this._data = e || this._data),
                        this._onAborted(this._data),
                        (this._running = !1),
                        [2, e]
                      );
                    case 3:
                      throw t.sent();
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.run = function (e, t, n) {
              var o = this;
              if (this._running)
                throw new Error("Cannot start an already running PBSequence.");
              return (
                (this._running = !0),
                (this._aborted = !1),
                (this._data = e),
                t && this.onCompleted().then(t),
                n && this.onAborted().then(n),
                new Promise(function (t) {
                  return __awaiter(o, void 0, void 0, function () {
                    var n;
                    return __generator(this, function (o) {
                      switch (o.label) {
                        case 0:
                          return (
                            o.trys.push([0, 2, , 3]), [4, this._runner(e, this)]
                          );
                        case 1:
                          return (
                            (n = o.sent()),
                            (this._data = n || this._data),
                            (this._running = !1),
                            this._aborted || this._onCompleted(this._data),
                            t(n),
                            [3, 3]
                          );
                        case 2:
                          throw o.sent();
                        case 3:
                          return [2];
                      }
                    });
                  });
                })
              );
            }),
            (e.prototype.onCompleted = function () {
              var e = this;
              return new Promise(function (t) {
                e._onCompleted = t;
              });
            }),
            (e.prototype.onAborted = function () {
              var e = this;
              return new Promise(function (t) {
                e._onAborted = t;
              });
            }),
            (e.next = function (e, t) {
              e.running || (e._running = !0), (e._currentItem = t);
            }),
            (e.create = function (t) {
              return new e(t);
            }),
            e
          );
        })();
        e.PBSequence = t;
      })(e.sequence3 || (e.sequence3 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        var t = (function () {
          function t(e) {
            (this.alive = !0), (this.running = !1), (this._seq = e);
          }
          return (
            (t.prototype.abort = function () {}),
            (t.prototype.run = function () {
              var t = this;
              return (
                (this.running = !0),
                (this.alive = !0),
                e.PBSequence.next(this._seq, this),
                new Promise(function (e) {
                  (t.running = !1), (t.alive = !1), e(t._seq.data);
                })
              );
            }),
            (t.execute = function (e) {
              return new t(e).run();
            }),
            t
          );
        })();
        e.PBNoopItem = t;
      })(e.sequence3 || (e.sequence3 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = (function () {
          function t(e, t) {
            (this._seq = e), (this._promises = t || []);
          }
          return (
            (t.prototype.addPromise = function (e) {
              this._promises.push(e);
            }),
            (t.prototype.abort = function () {
              this._running = !1;
              var e = this._promiseResolver;
              (this._promiseResolver = function () {}), e();
            }),
            (t.prototype.run = function () {
              var t = this;
              return (
                (this._running = !0),
                new Promise(function (n) {
                  return __awaiter(t, void 0, void 0, function () {
                    var t,
                      o = this;
                    return __generator(this, function (i) {
                      return (
                        (t = function (e) {
                          (o._running = !1), n(e);
                        }),
                        (this._promiseResolver =
                          e.utils.ensureSingleInvocation(t)),
                        this._promises.forEach(function (e) {
                          e.then(function (e) {
                            o._promiseResolver(e);
                          });
                        }),
                        [2]
                      );
                    });
                  });
                })
              );
            }),
            (t.execute = function (e, n) {
              return new t(e, n).run();
            }),
            t
          );
        })();
        t.PBAnyPromiseItem = n;
      })(t.sequence3 || (t.sequence3 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = e.utils.sequence3.PBSequence,
          o = (function () {
            function e(e, t) {
              (this._seq = e),
                (this.alive = !0),
                (this.running = !1),
                (this._settings = { func: t.func });
            }
            return (
              (e.prototype.abort = function () {
                var e = this._resolvePromise;
                (this._resolvePromise = function () {}), e();
              }),
              (e.prototype.run = function () {
                var e = this;
                return (
                  (this.running = !0),
                  (this.alive = !0),
                  n.next(this._seq, this),
                  this._seq.aborted
                    ? Promise.resolve(this._seq.data)
                    : new Promise(function (t) {
                        return __awaiter(e, void 0, void 0, function () {
                          var e,
                            n = this;
                          return __generator(this, function (o) {
                            switch (o.label) {
                              case 0:
                                return (
                                  (this._resolvePromise = function () {
                                    (n.alive = !1),
                                      (n.running = !1),
                                      t(n._seq.data);
                                  }),
                                  [4, this._settings.func(this._seq.data)]
                                );
                              case 1:
                                return (
                                  (e = o.sent()),
                                  this.alive &&
                                    ((this._seq.data = e || this._seq.data),
                                    this._resolvePromise()),
                                  [2]
                                );
                            }
                          });
                        });
                      })
                );
              }),
              (e.execute = function (t, n) {
                return new e(t, {
                  func: (void 0 !== n.func ? n : { func: n }).func,
                }).run();
              }),
              e
            );
          })();
        t.PBCallItem = o;
      })(t.sequence3 || (t.sequence3 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = e.utils.sequence3.PBSequence,
          o = e.utils.tweens.createLocalTweenMax,
          i = (function () {
            function e(e, t) {
              (this._seq = e),
                (this.alive = !0),
                (this.running = !1),
                (this._ltm = t.ltm),
                (this._delay = t.delay);
            }
            return (
              (e.prototype.abort = function () {
                this._ltm.killDelayedCallsTo(this._resolvePromise),
                  this._resolvePromise();
              }),
              (e.prototype.run = function () {
                var e = this;
                return (
                  (this.running = !0),
                  (this.alive = !0),
                  n.next(this._seq, this),
                  this._seq.aborted
                    ? Promise.resolve(this._seq.data)
                    : new Promise(function (t) {
                        (e._resolvePromise = function () {
                          (e.alive = !1), (e.running = !1), t(e._seq.data);
                        }),
                          e._ltm.delayedCall(e._delay, e._resolvePromise);
                      })
                );
              }),
              (e.execute = function (t, n) {
                return new e(t, { ltm: n.ltm || o(!0), delay: n.delay }).run();
              }),
              e
            );
          })();
        t.PBDelayedCallItem = i;
      })(t.sequence3 || (t.sequence3 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        var t = (function () {
          function e(e, t) {
            (this._seq = e), (this._promises = t || []);
          }
          return (
            (e.prototype.addPromise = function (e) {
              this._promises.push(e);
            }),
            (e.prototype.abort = function () {
              this._running = !1;
              var e = this._promiseResolver;
              (this._promiseResolver = function () {}), e();
            }),
            (e.prototype.run = function () {
              var e = this;
              return (
                (this._running = !0),
                new Promise(function (t) {
                  return __awaiter(e, void 0, void 0, function () {
                    var e = this;
                    return __generator(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return (
                            (this._promiseResolver = function (n) {
                              (e._running = !1), t(n);
                            }),
                            [4, Promise.all(this._promises)]
                          );
                        case 1:
                          return n.sent(), this._promiseResolver(), [2];
                      }
                    });
                  });
                })
              );
            }),
            (e.execute = function (t, n) {
              return new e(t, n).run();
            }),
            e
          );
        })();
        e.PBMultiplePromiseItem = t;
      })(e.sequence3 || (e.sequence3 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = e.utils.sequence3.PBSequence,
          o = e.utils.createWaitForCallbacksGate,
          i = (function () {
            function e(e, t) {
              (this._seq = e),
                (this.alive = !0),
                (this.running = !1),
                (this._gate = t.gate || o());
            }
            return (
              (e.prototype.abort = function () {
                var e = this._resolvePromise;
                (this._resolvePromise = function () {}), e();
              }),
              (e.prototype.addCallback = function (e, t) {
                return this._gate.addCallback(e, t, !0);
              }),
              (e.prototype.completeCallback = function (e) {
                this._gate.completeCallback(e);
              }),
              (e.prototype.inspectGate = function () {
                return this._gate.inspect();
              }),
              (e.prototype.run = function () {
                var e = this;
                return (
                  (this.running = !0),
                  (this.alive = !0),
                  n.next(this._seq, this),
                  this._seq.aborted
                    ? Promise.resolve(this._seq.data)
                    : new Promise(function (t) {
                        return __awaiter(e, void 0, void 0, function () {
                          var e = this;
                          return __generator(this, function (n) {
                            return (
                              (this._resolvePromise = function () {
                                (e.alive = !1),
                                  (e.running = !1),
                                  t(e._seq.data);
                              }),
                              this._gate.then(function () {
                                return e._resolvePromise();
                              }),
                              [2]
                            );
                          });
                        });
                      })
                );
              }),
              (e.execute = function (t, n) {
                return new e(t, { gate: n }).run();
              }),
              e
            );
          })();
        t.PBWaitForCallbacksItem = i;
      })(t.sequence3 || (t.sequence3 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = e.utils.sequence3.PBSequence,
          o = (function () {
            function e(e, t) {
              (this._seq = e),
                (this.alive = !0),
                (this.running = !1),
                (this._factory =
                  "function" == typeof t
                    ? t
                    : function () {
                        return t;
                      });
            }
            return (
              (e.prototype.abort = function () {
                var e = this._resolvePromise;
                (this._resolvePromise = function (e) {}), e(null);
              }),
              (e.prototype.run = function () {
                var e = this;
                return (
                  (this.running = !0),
                  (this.alive = !0),
                  n.next(this._seq, this),
                  this._seq.aborted
                    ? Promise.resolve(this._seq.data)
                    : new Promise(function (t) {
                        return __awaiter(e, void 0, void 0, function () {
                          var e,
                            n = this;
                          return __generator(this, function (o) {
                            switch (o.label) {
                              case 0:
                                return (
                                  (this._resolvePromise = function (o) {
                                    (n._seq.data = e),
                                      (n.alive = !1),
                                      (n.running = !1),
                                      t(o);
                                  }),
                                  [4, this._subSeqFactory().run(this._seq.data)]
                                );
                              case 1:
                                return (
                                  (e = o.sent()), this._resolvePromise(e), [2]
                                );
                            }
                          });
                        });
                      })
                );
              }),
              (e.execute = function (t, n) {
                return new e(t, n).run();
              }),
              e
            );
          })();
        t.PBWaitForSequenceItem = o;
      })(t.sequence3 || (t.sequence3 = {}));
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = e.utils.ensureSingleInvocation;
      t.wrapInTimeOut = function (e, t, o, i, a, r) {
        void 0 === i && (i = null),
          void 0 === a && (a = null),
          void 0 === r && (r = !0);
        var s = function () {
          o.apply(a, i);
        };
        return r && (s = n(s)), e.delayedCall(t, s), s;
      };
    })(e.utils || (e.utils = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        function n(e, t, n) {
          void 0 === n && (n = "stereoPanner");
          var i = e.webAudioUtils.audioNodeChainMap.attachChain(t),
            a = i.getElement(n);
          return a || (a = o(e, i, n)), a.in;
        }
        function o(t, n, o) {
          var i;
          void 0 === o && (o = "stereoPanner");
          var a = t.sound.context;
          if (a.createStereoPanner) {
            var r = a.createStereoPanner();
            (i = e.sounds.AudioNodeChain.convertAudioNodeToChainElement(o, r)),
              n.add(i);
          } else {
            var s,
              u = a.createPanner();
            (u.panningModel = "equalpower"),
              u.setPosition
                ? (s = function (e) {
                    u.setPosition(e, 0, 1 - Math.abs(e));
                  })
                : ((u.positionY.value = 0),
                  (s = function (e) {
                    (u.positionX.value = e),
                      (u.positionZ.value = 1 - Math.abs(e));
                  }));
            var l = 0;
            (u.pan = {
              get value() {
                return l;
              },
              set value(e) {
                (l = e), s(e);
              },
            }),
              (i = e.sounds.AudioNodeChain.convertAudioNodeToChainElement(
                o,
                u
              ));
          }
          return i;
        }
        (t.setStereoPanning = function (e, t, o, i) {
          void 0 === i && (i = "stereoPanner");
          var a = n(e, t, i);
          return (a.pan.value = o), a;
        }),
          (t.getStereoPannerNodeForSound = n),
          (t.getStereoPannerNodeForGroup = function (e, t, n) {
            void 0 === n && (n = "stereoPanner");
            var i = e.webAudioUtils.soundGroupManager.getGroup(t).chain,
              a = i._nodeMap[n];
            return a || (a = o(e, i, n)), a.in;
          });
      })(t.audiochainutils || (t.audiochainutils = {}));
    })(e.sounds || (e.sounds = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = void 0;
      (e.createPannerNode = function e(n, o) {
        if (null == n) return null;
        if (!0 === t) {
          var i = n.createPanner();
          if (o)
            for (var a in o)
              "positionX" === a || "positionY" === a || "positionZ" === a
                ? (i[a].value = o[a].value)
                : (i[a] = o[a]);
          return i;
        }
        if (void 0 === t) {
          var r = n instanceof window.webkitAudioContext,
            s = n instanceof window.AudioContext;
          return (t = r || s), e(n, o);
        }
        return null;
      }),
        (e.createStereoPannerNode = function e(n, o) {
          if (null == n) return null;
          if (!0 === t) {
            var i = n.createStereoPanner();
            if (o)
              for (var a in o)
                "pan" === a ? (i[a].value = o[a].value) : (i[a] = o[a]);
            return i;
          }
          if (void 0 === t) {
            var r = n instanceof window.webkitAudioContext,
              s = n instanceof window.AudioContext;
            return (t = r || s), e(n, o);
          }
          return null;
        });
    })(e.sounds || (e.sounds = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = (function () {
        function t(e) {
          (this._game = e),
            (this._started = !1),
            (this._audioTrackerData = []),
            (this._propertyTrackers = {}),
            e.webAudioUtils &&
              (this.setPropertyTracker("volume", i(e)),
              this.setPropertyTracker("mute", a(e)));
        }
        return (
          (t.prototype.start = function () {
            var t = this;
            this._started ||
              ((this._started = !0),
              this._game.soundSystem.onSoundPlaying.add(function (e) {
                t.handleSoundPlaying(e);
              }),
              this._game.soundSystem.onSoundComplete.add(function (e) {
                t.handleSoundComplete(e);
              }),
              e.phaser.utils
                .createUpdateTicker(this._game)
                .onUpdate.add(function () {
                  t.updateAudioData(), t.feedVisualizer();
                }));
          }),
          (t.prototype.setPropertyTracker = function (e, t) {
            null == t
              ? delete this._propertyTrackers[e]
              : (this._propertyTrackers[e] = t);
          }),
          (t.prototype.setVisualizer = function (e, t) {
            (this._visualizer = e),
              (this._trackedProperties = t || { volume: !0, mute: !0 }),
              (this._trackedKeys = Object.keys(this._trackedProperties));
          }),
          (t.prototype.feedVisualizer = function () {
            this._visualizer && this._visualizer(this._audioTrackerData);
          }),
          (t.prototype.handleSoundPlaying = function (e) {
            this.handleSoundComplete(e),
              this._audioTrackerData.push({ sndId: e, trackedProperties: {} });
          }),
          (t.prototype.updateAudioData = function () {
            var e = this;
            this._visualizer &&
              this._audioTrackerData.forEach(function (t) {
                var n = e._game.soundSystem.getPhaserSound(t.sndId);
                n &&
                  e._trackedKeys.forEach(function (o) {
                    !0 === e._trackedProperties[o]
                      ? e._propertyTrackers[o]
                        ? (t.trackedProperties[o] = e._propertyTrackers[o]({
                            snd: n,
                            id: t.sndId,
                          }))
                        : (t.trackedProperties[o] = n[o])
                      : delete t.trackedProperties[o];
                  });
              });
          }),
          (t.prototype.handleSoundComplete = function (e) {
            for (var t = 0; t < this._audioTrackerData.length; t++)
              if (this._audioTrackerData[t].sndId === e) {
                this._audioTrackerData.splice(t, 1);
                break;
              }
          }),
          t
        );
      })();
      t.AudioTracker = n;
      var o = (function () {
        function e(e, t, n) {
          var o = this;
          (this._root = t),
            (this._tracker = e),
            (this._children = []),
            (this._settings = {
              backgroundColor: "#000000",
              textColor: "#44FF44",
              muteTextColor: "#CCCCCC",
              muteBackgroundColor: "#0000000",
              zeroVolumeTextColor: "#44FF44",
              zeroVolumeBackgroundColor: "#000000",
              zeroVolumeAlpha: 0.2,
            }),
            (this._textFactory =
              n ||
              function () {
                var e = t.game.add.text(0, 0, "", {
                  font: "Arial",
                  fontSize: 24,
                  fill: o._settings.textColor,
                  backgroundColor: o._settings.backgroundColor,
                });
                return o._nodesHolder.add(e), e;
              }),
            (this._nodesHolder = t.game.add.group(
              t,
              "audioTrackerNodes",
              !1,
              !1
            ));
        }
        return (
          (e.prototype.startVisualization = function (e) {
            var t = this;
            this._tracker.setVisualizer(
              function (e) {
                return t.visualize(e);
              },
              { volume: !0, mute: !0 }
            ),
              this._tracker.start(),
              (this._settings = e || this._settings);
          }),
          (e.prototype.stopVisualization = function () {
            this._tracker.setVisualizer(null, {}),
              this._children.forEach(function (e) {
                e.visible = !1;
              });
          }),
          (e.prototype.visualize = function (e) {
            var t = this,
              n = 20,
              o = 20;
            this._children.forEach(function (e) {
              e.visible = !1;
            }),
              e.forEach(function (e, i) {
                var a = t._children[i];
                null == a && (t._children[i] = t.createNewText()),
                  ((a = t._children[i]).visible = !0),
                  (a.y = n),
                  (a.x = o),
                  (n += 30) > 700 && ((o += 200), (n = 20)),
                  (a.text = e.sndId);
                var r = e.trackedProperties.volume;
                a.alpha = r;
                var s = !0 === e.trackedProperties.mute;
                s
                  ? ((a.fill = t._settings.muteTextColor),
                    (a.style.backgroundColor = t._settings.muteBackgroundColor))
                  : ((a.fill = t._settings.textColor),
                    (a.style.backgroundColor = t._settings.backgroundColor)),
                  0 === r &&
                    ((a.alpha = t._settings.zeroVolumeAlpha),
                    !1 === s &&
                      ((a.style.backgroundColor =
                        t._settings.zeroVolumeBackgroundColor),
                      (a.fill = t._settings.zeroVolumeTextColor)));
              });
          }),
          (e.prototype.createNewText = function () {
            return this._textFactory();
          }),
          e
        );
      })();
      function i(e) {
        return function (t) {
          for (
            var n = t.snd.volume,
              o = e.webAudioUtils.soundGroupManager.getGroupForSoundId(t.id);
            o;

          )
            (n *= o.volume), (o = o.parent);
          var i = e.webAudioUtils.audioNodeChainMap.getChain(t.id);
          return i && (n *= i.volume), n;
        };
      }
      function a(e) {
        return function (t) {
          for (
            var n = t.snd.mute,
              o = e.webAudioUtils.soundGroupManager.getGroupForSoundId(t.id);
            o;

          )
            (n = n || o.muted), (o = o.parent);
          var i = e.webAudioUtils.audioNodeChainMap.getChain(t.id);
          return i && (n = n || i.muted), n;
        };
      }
      (t.SimpleAudioTrackerVisualizer = o),
        (t.createAudioGroupAndChainVolumeCalculator = i),
        (t.createAudioGroupAndChainMuteStatusCalculator = a);
    })(e.sounds || (e.sounds = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        e.createBiquadFilter = function (e, t) {
          var n;
          try {
            if (!e) return;
            (n = e.createBiquadFilter()),
              Object.keys(t).forEach(function (e) {
                "type" !== e ? (n[e].value = t[e]) : (n.type = t[e]);
              });
          } catch (e) {
            n = function () {
              return {
                frequency: { value: 24e3 },
                Q: { value: 0 },
                detune: { value: 0 },
                gain: { value: 0 },
                type: "none",
                getFrequencyResponse: function (e, t, n) {},
              };
            };
          }
          return n;
        };
      })(e.audiochainutils || (e.audiochainutils = {}));
    })(e.sounds || (e.sounds = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        t.createConvolutionReverbChain = function (t, n, o) {
          var i = new e.sounds.AudioNodeChain(
              n,
              "convolutionReverb" + o.toString()
            ),
            a = n.createGain(),
            r = n.createConvolver();
          (r.buffer = t.cache.getSoundData(o)),
            i.in.connect(r),
            i.in.connect(a);
          var s = n.createGain();
          r.connect(s), s.connect(i.out), a.connect(i.out);
          var u = 0.5,
            l = {
              get dryWetRatio() {
                return u;
              },
              set dryWetRatio(e) {
                (u = Math.max(Math.min(e, 1), 0)),
                  (s.gain.value = u),
                  (a.gain.value = 1 - u);
              },
            };
          return (
            (l.dryWetRatio = 0.5),
            { data: l, convolver: r, audioNodeChainElement: i }
          );
        };
      })(t.audiochainutils || (t.audiochainutils = {}));
    })(e.sounds || (e.sounds = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = e.slots.gui.isUsingGUI_2_0,
        o = (function () {
          function t(t) {
            var n = this;
            (this.onSoundReady = new e.utils.Signal1()),
              (this.onSoundComplete = new e.utils.Signal1()),
              (this.onSoundPlaying = new e.utils.Signal1()),
              (this.onAllSoundsReady = new e.utils.Signal0()),
              (this.onContextSuspended = new e.utils.Signal0()),
              (this.onContextResumed = new e.utils.Signal0()),
              (this._allSounds = {}),
              (this._readySounds = {}),
              (this._playOnLoad = {}),
              (this._soundsToLoad = {}),
              (this._paused = !1),
              (this.allSoundsLoaded = !1),
              (this.allSoundsReady = !1),
              (this.logCalls = !1),
              (this.initialized = !1),
              (this._muted = !1),
              (this.soundSettingFromJSBridge = void 0),
              (this._game = t),
              this._game.sound.onSoundDecode.add(this.handleSoundDecoded, this),
              this._game.load.onFileComplete.add(this.handleFileLoaded, this);
            var o =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame,
              i = void 0,
              a = this._game.sound.context,
              r = function () {
                i &&
                  a.state != i &&
                  ("suspended" == a.state && n.onContextSuspended.dispatch(),
                  "running" == a.state && n.onContextResumed.dispatch(),
                  (i = a.state)),
                  o(r);
              };
            o(r), this.saveExtraPauseData();
          }
          return (
            (t.prototype.saveExtraPauseData = function () {
              var e = this,
                t = {};
              if (this._game.sound.usingWebAudio) {
                this.onSoundPlaying.add(function (n) {
                  var o = e._allSounds[n];
                  o &&
                    (function (e, n) {
                      e.onPause.add(function () {
                        var o,
                          i,
                          a,
                          r,
                          s,
                          u,
                          l = e._sound,
                          d =
                            l.detune &&
                            0 !==
                              (null === (o = l.detune) || void 0 === o
                                ? void 0
                                : o.value),
                          c =
                            l.playbackRate &&
                            1 !==
                              (null === (i = l.playbackRate) || void 0 === i
                                ? void 0
                                : i.value);
                        (d || c) &&
                          (t[n] = {
                            detune:
                              null ===
                                (r =
                                  null === (a = l) || void 0 === a
                                    ? void 0
                                    : a.detune) || void 0 === r
                                ? void 0
                                : r.value,
                            playbackRate:
                              null ===
                                (u =
                                  null === (s = l) || void 0 === s
                                    ? void 0
                                    : s.playbackRate) || void 0 === u
                                ? void 0
                                : u.value,
                          });
                      }),
                        e.onResume.add(function () {
                          var o = e._sound,
                            i = t[n];
                          i &&
                            (void 0 !== i.detune && (o.detune.value = i.detune),
                            void 0 !== i.playbackRate &&
                              (o.playbackRate.value = i.playbackRate)),
                            delete t[n];
                        });
                    })(o, n);
                });
              }
            }),
            (t.prototype.handleSoundDecoded = function (e) {
              if (!0 !== this._readySounds[e])
                for (var n in ((this._readySounds[e] = !0),
                this.onSoundReady.dispatch(e),
                this.checkIfAllSoundsReady(),
                this._playOnLoad)) {
                  var o = this._playOnLoad[n];
                  if (o._key === e)
                    if (
                      (delete this._playOnLoad[n],
                      this.playSoundWithId(n, e, o._volume, o.loop, !1),
                      o.tween)
                    )
                      this.getPhaserSound(n)[t._fadeTweenKey] = o.tween;
                }
            }),
            (t.prototype.handleFileLoaded = function (e, n, o) {
              if (this._game.cache.checkSoundKey(n))
                if (null != this._soundsToLoad[n]) {
                  if (this._game.cache.isSoundReady(n))
                    for (var i in ((this._readySounds[n] = !0),
                    this.onSoundReady.dispatch(n),
                    this.checkIfAllSoundsReady(),
                    this._playOnLoad)) {
                      if ((a = this._playOnLoad[i])._key === n)
                        if (
                          (delete this._playOnLoad[i],
                          this.playSoundWithId(i, n, a._volume, a.loop, !1),
                          a.tween)
                        )
                          this.getPhaserSound(i)[t._fadeTweenKey] = a.tween;
                    }
                } else if (this._game.cache.isSoundReady(n))
                  for (var i in ((this._readySounds[n] = !0),
                  this.onSoundReady.dispatch(n),
                  this.checkIfAllSoundsReady(),
                  this._playOnLoad)) {
                    var a;
                    if ((a = this._playOnLoad[i])._key === n)
                      if (
                        (delete this._playOnLoad[i],
                        this.playSoundWithId(i, n, a._volume, a.loop, !1),
                        a.tween)
                      )
                        this.getPhaserSound(i)[t._fadeTweenKey] = a.tween;
                  }
            }),
            (t.prototype.setGlobalVolume = function (e) {
              e < 0 && (e = 0),
                e > 1 && (e = 1),
                (this._game.sound.volume = e),
                (this._game.sound.mute = !this._game.sound.mute),
                (this._game.sound.mute = this._muted);
            }),
            (t.prototype.getGlobalVolume = function () {
              return this._game.sound.volume;
            }),
            (t.prototype.getPhaserSound = function (e) {
              return this._allSounds[e];
            }),
            (t.prototype.isSoundReady = function (e) {
              if (this._game.device.ie || this._game.device.edge) {
                if (!this._game.cache.checkSoundKey(e)) return !1;
                this._game.cache.isSoundReady(e) &&
                  !0 !== this._readySounds[e] &&
                  ((this._readySounds[e] = !0),
                  this.onSoundReady.dispatch(e),
                  this.checkIfAllSoundsReady());
              }
              return this._readySounds[e];
            }),
            (t.prototype.isSoundReadyInternal = function (e) {
              if (!this._game.cache.checkSoundKey(e)) return !1;
              var t = this._game.sound.touchLocked;
              this._game.sound.touchLocked = !1;
              var n = this._game.cache.isSoundReady(e);
              return (
                (this._game.sound.touchLocked = t),
                n &&
                  !0 !== this._readySounds[e] &&
                  ((this._readySounds[e] = !0), this.onSoundReady.dispatch(e)),
                this._readySounds[e]
              );
            }),
            (t.prototype.isSoundPlaying = function (e) {
              if (null != this._allSounds[e]) {
                var t = this.getPhaserSound(e);
                if (null != t) return t.isPlaying;
              }
              return !1;
            }),
            (t.prototype.setVolumeOf = function (e, n) {
              if (null != this._allSounds[e]) {
                var o = this.getPhaserSound(e);
                if (((o.volume = n), null != o[t._fadeTweenKey])) {
                  var i = o[t._fadeTweenKey];
                  i.stop(), (o[t._fadeTweenKey] = void 0);
                }
              } else if (null != this._playOnLoad[e]) {
                var a = this._playOnLoad[e];
                (a._volume = n),
                  null != (i = a.tween) &&
                    (i.onUpdateCallback(null, null),
                    i.stop(!1),
                    (a.tween = void 0));
              }
            }),
            (t.prototype.init = function (e, t, n, o) {
              var i = this;
              this.logCalls,
                (this.initialized = !0),
                (this.allSoundsLoaded = o);
              var a = void 0;
              if (t)
                try {
                  a = window.localStorage.getItem(
                    this._game.initGameData.gameid + "_soundEnabled"
                  );
                } catch (e) {}
              for (var r in ((e = e && "false" !== a),
              this.setMute(!e, !1),
              (this._game.soundEnabled = e),
              this._game.gui.setSoundButtonSelected(e),
              (this._soundsToLoad = n || {}),
              n))
                (this._allSounds[r] = null),
                  (this._readySounds[r] = !1),
                  o &&
                    this._game.cache.isSoundReady(r) &&
                    ((this._readySounds[r] = !0),
                    this.onSoundReady.dispatch(r));
              (o && this.checkIfAllSoundsReady()) ||
                (this._ieLoadCheckInterval = setInterval(function () {
                  i.checkIfAllSoundsReady();
                }, 500));
            }),
            Object.defineProperty(t.prototype, "masterVolume", {
              get: function () {
                return this._game.sound.volume;
              },
              set: function (e) {
                this.logCalls,
                  (this._game.sound.volume = e),
                  (this._game.sound.mute = !this._game.sound.mute),
                  (this._game.sound.mute = this._muted);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.addSoundsToLoader = function (e) {
              for (var t in this._soundsToLoad)
                e.audio(t, this._soundsToLoad[t], !0);
              this._game.gui.setSoundLoadMode(!0);
            }),
            (t.prototype.playFireAndForgetSound = function (e, t, n) {
              void 0 === t && (t = 1), void 0 === n && (n = 0), this.logCalls;
              var o = null;
              return (
                this._readySounds[e] &&
                  ((o = this._game.sound.play(e, t, !1, n)),
                  this._game.device.ie && (o.mute = this._game.sound.mute),
                  this._paused && o.pause()),
                null != o
              );
            }),
            (t.prototype.playSoundWithUniqueID = function (e, t, n) {
              var o = e,
                i = void 0,
                a = "";
              do {
                (o = "" + e + (a += " ")), (i = this._allSounds[o]);
              } while (void 0 !== i && i.isPlaying);
              return this.playSoundWithId(o, e, t, !1, !1, !0, n), o;
            }),
            (t.prototype.playSound = function (e, t, n, o, i, a) {
              void 0 === t && (t = 1),
                void 0 === n && (n = !1),
                void 0 === o && (o = !1),
                void 0 === i && (i = !0),
                void 0 === a && (a = 0),
                this.playSoundWithId(e, e, t, n, o, i, a);
            }),
            (t.prototype.playSoundWithId = function (e, n, o, i, a, r, s) {
              if (
                (void 0 === o && (o = 1),
                void 0 === i && (i = !1),
                void 0 === a && (a = !1),
                void 0 === r && (r = !0),
                void 0 === s && (s = 0),
                this.logCalls,
                this._game.device.webAudio) &&
                "suspended" === this._game.sound.context.state &&
                !1 === a
              )
                return;
              if (null == this._allSounds[e])
                if (this._readySounds[n]) {
                  ((u = this._game.sound.play(n, o, i, s)).__tk_id = e),
                    u.onStop.addOnce(this.handleSoundComplete, this),
                    this._game.device.ie && (u.mute = this._game.sound.mute),
                    (this._allSounds[e] = u),
                    this._paused && u.pause(),
                    this.onSoundPlaying.dispatch(e);
                } else {
                  if (
                    !0 === this.allSoundsReady &&
                    this._game.initGameData.developmentmode
                  )
                    throw new Error(
                      "Trying to play sound with key '" +
                        n +
                        "' but sound has not been added to the sound system during loading."
                    );
                  a && (this._playOnLoad[e] = { _key: n, _volume: o, loop: i });
                }
              else {
                var u = this._allSounds[e];
                if ((r && u.stop(), null != u[t._fadeTweenKey])) {
                  var l = u[t._fadeTweenKey];
                  l.onUpdateCallback(null, null),
                    l.stop(),
                    delete u[t._fadeTweenKey];
                }
                u.play(void 0, 0, o, i, !1, s),
                  (u.__tk_id = e),
                  u.onStop.addOnce(this.handleSoundComplete, this),
                  this._game.device.ie && (u.mute = this._game.sound.mute),
                  this._paused && u.pause(),
                  this.onSoundPlaying.dispatch(e);
              }
            }),
            (t.prototype.playRandomSound = function (e, n, o, i, a, r, s) {
              void 0 === r && (r = !1), void 0 === s && (s = 0), this.logCalls;
              var u = e[this._game.rnd.integerInRange(0, e.length - 1)];
              if (((n = n || u), null == this._allSounds[n]))
                this.playSoundWithId(n || u, u, o, i, !1, a);
              else {
                var l = this._allSounds[n];
                if (l.key === u)
                  if (r) {
                    var d = t._fadeTweenKey;
                    null != l[d] && (l[d].stop(), delete l[d]),
                      l.play(void 0, 0, o, i, a, s),
                      (l.__tk_id = n),
                      l.onStop.addOnce(this.handleSoundComplete, this),
                      this._game.device.ie && (l.mute = this._game.sound.mute),
                      this._paused && l.pause(),
                      this.onSoundPlaying.dispatch(n);
                  } else {
                    if (1 === e.length) return null;
                    this.playRandomSound(e, n, o, i, a, r);
                  }
                else
                  this.stopSound(n),
                    (this._allSounds[n] = void 0),
                    this.playSoundWithId(n, u, o, i, !1, a);
              }
              return u;
            }),
            (t.prototype.jump = function (e, t) {
              this.logCalls;
              var n = this._allSounds[e];
              null != n && (n.position = t);
            }),
            (t.prototype.syncTimes = function (e, t) {
              this.logCalls;
              var n = this._allSounds[e],
                o = this._allSounds[t];
              n && o && (o.currentTime = n.currentTime);
            }),
            (t.prototype.syncSounds = function (e, t) {
              var n = this.getPhaserSound(e);
              if (n) {
                var o = this.getPhaserSound(t);
                if (o)
                  return (
                    this.logCalls,
                    o.onStop.remove(this.handleSoundComplete, this),
                    o._sound && o.usingWebAudio && (o._sound.onended = null),
                    o.stop(),
                    o.play(void 0, n.currentTime / 1e3, o.volume, o.loop, !0),
                    o.onStop.addOnce(this.handleSoundComplete, this),
                    (o.position = n.position),
                    (o.currentTime = n.currentTime),
                    (o.startTime = n.startTime),
                    (o.stopTime = n.stopTime),
                    !0
                  );
              }
              return !1;
            }),
            (t.prototype.stopSound = function (e, n) {
              var o = this;
              if ((this.logCalls, !0 === n)) {
                Object.keys(this._allSounds)
                  .filter(function (t) {
                    return t.trim() === e;
                  })
                  .forEach(function (e) {
                    o.stopSound(e, !1);
                  });
              } else {
                var i,
                  a = this._allSounds[e];
                null != a &&
                  (a.paused && a.resume(),
                  a.stop(),
                  a.onStop.remove(this.handleSoundComplete, this),
                  null != a[t._fadeTweenKey] &&
                    ((i = a[t._fadeTweenKey]).onUpdateCallback(null, null),
                    i.stop(),
                    delete a[t._fadeTweenKey])),
                  this._playOnLoad[e] &&
                    (void 0 !== this._playOnLoad[e].tween &&
                      ((i = this._playOnLoad[e].tween).onUpdateCallback(
                        null,
                        null
                      ),
                      i.stop(!1)),
                    delete this._playOnLoad[e]);
              }
            }),
            (t.prototype.fadeSound = function (e, n, o, i) {
              this.logCalls, (o = o || 0);
              var a,
                r = this._allSounds[e],
                s = this._playOnLoad[e];
              null != s &&
                (null != (a = s.tween) &&
                  (a.onUpdateCallback(null, null),
                  a.stop(!1),
                  (s.tween = void 0)),
                (a = this._game.add
                  .tween(s)
                  .to({ _volume: o }, 1e3 * n)).onUpdateCallback(
                  this.createFadeUpdateCallback(e, s),
                  null
                ),
                a.onComplete.addOnce(this.createFadeCompleteCallback(e, i)),
                (s.tween = a),
                a.start()),
                null != r &&
                  (null != r[t._fadeTweenKey] &&
                    ((a = r[t._fadeTweenKey]).onUpdateCallback(null, null),
                    a.stop(),
                    delete r[t._fadeTweenKey]),
                  (a = this._game.add
                    .tween(r)
                    .to({ _volume: o }, 1e3 * n)).onUpdateCallback(
                    this.createFadeUpdateCallback(e, null),
                    null
                  ),
                  a.onComplete.addOnce(this.createFadeCompleteCallback(e, i)),
                  (r[t._fadeTweenKey] = a),
                  a.start());
            }),
            (t.prototype.createFadeUpdateCallback = function (e, t) {
              var n = this;
              return function () {
                var o = n._allSounds[e];
                o && (o.volume = null != t ? t._volume : o._volume);
              };
            }),
            (t.prototype.createFadeCompleteCallback = function (e, n) {
              var o = this;
              return function () {
                var i,
                  a = o._allSounds[e];
                a &&
                  ((a.volume = a.volume),
                  (i = a[t._fadeTweenKey]) &&
                    (delete a[t._fadeTweenKey],
                    i.onUpdateCallback(null, null)));
                var r = o._playOnLoad[e];
                null != r &&
                  ((i = r.tween) && i.onUpdateCallback(null, null),
                  delete r.tween),
                  n && o.stopSound(e);
              };
            }),
            (t.prototype.stopAllSounds = function () {
              for (var e in (this.logCalls, this._allSounds)) this.stopSound(e);
              this._game.sound.stopAll();
            }),
            (t.prototype.setPause = function (e) {
              this.logCalls,
                (this._paused = e),
                !0 === e
                  ? ((this._game.sound.mute = !0), this._game.sound.pauseAll())
                  : ((this._game.sound.mute = this._muted),
                    this._game.sound.resumeAll());
            }),
            (t.prototype.setMute = function (e, t) {
              void 0 === t && (t = !0), this.logCalls;
              try {
                t &&
                  this._game.initGameData.allowlocalstorage &&
                  window.localStorage.setItem(
                    this._game.initGameData.gameid + "_soundEnabled",
                    "" + !e
                  );
              } catch (e) {}
              for (var o in ((this._muted = e),
              (this._game.sound.mute =
                !0 === e || !1 === this._game.soundAllowed),
              this._allSounds)) {
                var i = this._allSounds[o];
                i &&
                  (this._game.device.ie &&
                    ((i.mute = !this._game.sound.mute),
                    (i.mute = this._game.sound.mute)),
                  (i.volume = i.volume));
              }
              this._game.sound.mute
                ? (this._game.jsBridge.soundDisabled(),
                  n(function (e) {
                    e.setSoundButtonSelected(!1);
                  }))
                : (this._game.jsBridge.soundEnabled(),
                  n(function (e) {
                    e.setSoundButtonSelected(!0);
                  }));
            }),
            (t.prototype.getMute = function () {
              return this._muted;
            }),
            (t.prototype.checkIfAllSoundsReady = function () {
              if (!1 === this.initialized) return !1;
              var e = !1;
              for (var n in this._readySounds) {
                if (((e = !0), !1 === this.isSoundReadyInternal(n))) {
                  e = !1;
                  break;
                }
                for (var o in this._playOnLoad) {
                  var i = this._playOnLoad[o];
                  if (i._key === n)
                    if (
                      (delete this._playOnLoad[o],
                      this.playSoundWithId(o, n, i._volume, i.loop, !1),
                      i.tween)
                    )
                      this.getPhaserSound(n)[t._fadeTweenKey] = i.tween;
                }
              }
              return (
                (this.allSoundsReady = e),
                e &&
                  (clearInterval(this._ieLoadCheckInterval),
                  this._game.gui.setSoundLoadMode(!1),
                  this.onAllSoundsReady.dispatch()),
                e
              );
            }),
            (t.prototype.handleSoundComplete = function (e, t) {
              this.onSoundComplete.dispatch(e.__tk_id);
            }),
            (t._fadeTweenKey = "__tk_fadeTween"),
            t
          );
        })();
      t.DefaultSoundSystem = o;
    })(e.sounds || (e.sounds = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e(e, t) {
          (this.repeatLast = !1), (this._playList = e), (this._soundSystem = t);
        }
        return (
          (e.prototype.getCurrentId = function () {
            return this._playList.current;
          }),
          (e.prototype.stopCurrent = function () {
            null != this._playList.current &&
              this._soundSystem.stopSound(this._playList.current);
          }),
          (e.prototype.reset = function () {
            this._playList.current = void 0;
          }),
          (e.prototype.playNext = function () {
            var e = this.findCurrentIndex() + 1;
            e === this._playList.set.length &&
              (this.repeatLast ? e-- : (e = 0));
            var t = this._playList.set[e];
            return (
              this._soundSystem.playSoundWithId(
                t.id,
                t.key,
                t.volume,
                t.loop,
                !1,
                t.restart
              ),
              (this._playList.current = t.id),
              t.id
            );
          }),
          (e.prototype.playAt = function (e) {
            var t = this._playList.set[e];
            return (
              this._soundSystem.playSoundWithId(
                t.id,
                t.key,
                t.volume,
                t.loop,
                !1,
                t.restart
              ),
              (this._playList.current = t.id),
              t.id
            );
          }),
          (e.prototype.playLast = function () {
            var e = this._playList.set.length - 1,
              t = this._playList.set[e];
            return (
              this._soundSystem.playSoundWithId(
                t.id,
                t.key,
                t.volume,
                t.loop,
                !1,
                t.restart
              ),
              (this._playList.current = t.id),
              t.id
            );
          }),
          (e.prototype.playFirst = function () {
            var e = this._playList.set[0];
            return (
              this._soundSystem.playSoundWithId(
                e.id,
                e.key,
                e.volume,
                e.loop,
                !1,
                e.restart
              ),
              (this._playList.current = e.id),
              e.id
            );
          }),
          (e.prototype.playRandom = function (e) {
            var t, n;
            if ((void 0 === e && (e = !1), e))
              (t = Math.floor(Math.random() * this._playList.set.length)),
                (n = this._playList.set[t]),
                this._soundSystem.playSoundWithId(
                  n.id,
                  n.key,
                  n.volume,
                  n.loop
                );
            else {
              if (this._playList.set.length < 2) return;
              n = this._playList.set[t];
              do {
                t = Math.floor(Math.random() * this._playList.set.length);
              } while (n.id === this._playList.current);
            }
            return (
              (n = this._playList.set[t]),
              this._soundSystem.playSoundWithId(
                n.id,
                n.key,
                n.volume,
                n.loop,
                !1,
                !0
              ),
              (this._playList.current = n.id),
              n.id
            );
          }),
          (e.prototype.findCurrentIndex = function () {
            for (var e = 0; e < this._playList.set.length; e++)
              if (this._playList.set[e].id === this._playList.current) return e;
            return -1;
          }),
          e
        );
      })();
      e.PlaylistSoundSelector = t;
    })(e.sounds || (e.sounds = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      !(function (t) {
        var n = e.slots.gui.isUsingGUI_2_0,
          o = void 0;
        function i(e, t) {
          return (
            void 0 === t && (t = "dummyIosSound"),
            new Promise(function (i) {
              n(function (n) {
                e.jsBridge.sendGameSpecificOutboundEvent(
                  "showingSoundPrompt",
                  null
                ),
                  void 0 !== o
                    ? !0 === o
                      ? (e.soundSystem.playFireAndForgetSound(t, 0), i(!0))
                      : i(!1)
                    : i(
                        tk_gui.adapter.showLoadSoundsPrompt(function () {
                          e.soundSystem.playFireAndForgetSound(t, 0);
                        })
                      );
              }) || i(e.initGameData.preloadsoundsdirectly);
            })
          );
        }
        (t.forceSoundPromptAnswer = function (e) {
          o = e;
        }),
          (t.showLoadSoundsPrompt = function (e, t) {
            return (
              void 0 === t && (t = "dummyIosSound"),
              __awaiter(this, void 0, void 0, function () {
                var n;
                return __generator(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [4, i(e, t)];
                    case 1:
                      return (n = o.sent()), e.soundSystem.setMute(!n), [2, n];
                  }
                });
              })
            );
          });
      })(t.utils || (t.utils = {}));
    })(e.slots || (e.slots = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = (function () {
        function t(e) {
          (this._game = e),
            (this._soundTree = {
              name: "root",
              volume: 1,
              audioNodes: { base: [], fade: null, _fvolume: 1 },
              sounds: {},
              children: [],
            }),
            (this._soundGroups = { root: this._soundTree });
        }
        return (
          (t.prototype.startUpdateLoop = function () {
            var t = this;
            e.phaser.utils
              .createUpdateTicker(this._game)
              .onUpdate.add(function () {
                t.applyVolume();
              });
          }),
          (t.prototype.createGroup = function (e, t) {
            void 0 === t && (t = "root");
            var n = {
              name: e,
              volume: 1,
              audioNodes: { base: [], fade: null, _fvolume: 1 },
              children: [],
              sounds: {},
            };
            this.getGroupByName(t).children.push(n), (this._soundGroups[e] = n);
          }),
          (t.prototype.addSoundToGroup = function (e, t) {
            this.getGroupByName(t).sounds[e] = {
              volume: 1,
              audioNodes: { base: [], fade: null, _fvolume: 1 },
            };
          }),
          (t.prototype.removeSoundFromGroup = function (e, t) {
            delete this.getGroupByName(t).sounds[e];
          }),
          (t.prototype.applyVolume = function () {
            var e = this._game.soundSystem,
              t = function (n, o) {
                (o *= n.audioNodes.base.reduce(function (e, t) {
                  return t(e);
                }, n.volume)),
                  n.audioNodes.fade && (o *= n.audioNodes.fade());
                var i = o;
                Object.keys(n.sounds).forEach(function (t) {
                  var a = n.sounds[t];
                  if (
                    ((o = a.audioNodes.base.reduce(function (e, t) {
                      return t(e);
                    }, a.volume)),
                    a.audioNodes.fade)
                  ) {
                    var r = a.audioNodes.fade();
                    (a.audioNodes._fvolume = r), (o *= r);
                  }
                  var s = i * o;
                  e.setVolumeOf(t, s);
                }),
                  n.children.forEach(function (e) {
                    t(e, o);
                  });
              };
            t(this.getGroupByName("root"), 1);
          }),
          (t.prototype.setVolumeOnGroup = function (e, t, n) {
            void 0 === n && (n = !0),
              (this.getGroupByName(e).volume = t),
              n || this.applyVolume();
          }),
          (t.prototype.getVolumeOfSound = function (e, t, n) {
            var o = this.getGroupByName(e).sounds[t];
            return o
              ? n
                ? o.audioNodes.base.reduce(function (e, t) {
                    return t(e);
                  }, o.volume)
                : o.volume
              : void 0;
          }),
          (t.prototype.setVolumeOnSound = function (e, t, n) {
            var o = this.getGroupByName(e);
            o.sounds[t] &&
              ((o.sounds[t].volume = n),
              this._game.soundSystem.setVolumeOf(t, n));
          }),
          (t.prototype.addBaseModifierToGroup = function (e, t) {
            this.getGroupByName(e).audioNodes.base.push(t);
          }),
          (t.prototype.removeBaseModifierFromGroup = function (e, t) {
            var n = this.getGroupByName(e),
              o = n.audioNodes.base.indexOf(t);
            -1 != o && n.audioNodes.base.splice(o, 1);
          }),
          (t.prototype.removeAllBaseModifiersGroup = function (e) {
            this.getGroupByName(e).audioNodes.base = [];
          }),
          (t.prototype.addBaseModifierToSound = function (e, t, n) {
            this.getGroupByName(e).sounds[t].audioNodes.base.push(n);
          }),
          (t.prototype.removeBaseModifierFromSound = function (e, t, n) {
            var o = this.getGroupByName(e),
              i = o.sounds[t],
              a = o.audioNodes.base.indexOf(n);
            -1 != a &&
              (o.audioNodes.base.splice(a, 1), i.audioNodes.base.push(n));
          }),
          (t.prototype.removeAllBaseModifiersFromSound = function (e, t) {
            this.getGroupByName(e).sounds[t].audioNodes.base = [];
          }),
          (t.prototype.setFadeNodeForSound = function (e, t, n) {
            this.getGroupByName(e).sounds[t].audioNodes.fade = n;
          }),
          (t.prototype.setFadeNodeForGroup = function (e, t) {
            this.getGroupByName(e).audioNodes.fade = t;
          }),
          (t.prototype.clearFadeNodeForSound = function (e, t, n) {
            var o = this.getGroupByName(e).sounds[t];
            o.audioNodes.fade == n && (o.audioNodes.fade = null);
          }),
          (t.prototype.clearFadeNodeForGroup = function (e, t) {
            var n = this.getGroupByName(e);
            n.audioNodes.fade == t && (n.audioNodes.fade = null);
          }),
          (t.prototype.getFadeValue = function (e, t, n) {
            void 0 === n && (n = !1);
            var o,
              i,
              a = this.getGroupByName(e);
            return (
              null != t
                ? (o = (i = a.sounds[t].audioNodes).fade)
                : ((i = a.audioNodes), (o = a.audioNodes.fade)),
              n && o && (i._fvolume = o()),
              i._fvolume
            );
          }),
          (t.prototype.getGroupByName = function (e) {
            var t = this._soundGroups[e];
            if (null == t)
              throw new Error(
                "SoundVolumeManager.getGroupByName: Cannot find sound group with name '" +
                  e +
                  "'"
              );
            return t;
          }),
          (t.createVolumeModifier = function () {
            var e = {
              volume: 1,
              apply: function (t) {
                return t * e.volume;
              },
            };
            return e;
          }),
          (t.prototype.addSoundFadeNode = function (t, n, o, i, a, r, s, u) {
            var l = this._game.soundSystem;
            (i = null == i ? this.getFadeValue(t, n, !1) : i), (u = u || {});
            var d = e.utils.combineObject({}, u),
              c = {
                volume: i,
                apply: function () {
                  return c.volume;
                },
                to: function (t, o, i, a) {
                  (a = a || {}), s.killTweensOf(c);
                  var u = e.utils.combineObject({}, a || d);
                  (u.volume = t),
                    (u.onComplete = function () {
                      (null == i ? r : i) && l.stopSound(n),
                        a.onComplete &&
                          a.onComplete.apply(
                            a.onCompleteScope,
                            a.onCompleteParams
                          );
                    }),
                    s.to(c, o, u);
                },
              };
            return (
              (d.volume = a),
              (d.onComplete = function () {
                r && l.stopSound(n),
                  u.onComplete &&
                    u.onComplete.apply(u.onCompleteScope, u.onCompleteParams);
              }),
              s.to(c, o, d),
              this.setFadeNodeForSound(t, n, c.apply),
              c
            );
          }),
          (t.prototype.addGroupFadeNode = function (t, n, o, i, a, r) {
            var s = {
              volume: (o = null == o ? this.getFadeValue(t, null, !1) : o),
              apply: function () {
                return s.volume;
              },
              to: function (t, n, o) {
                (o = o || {}), a.killTweensOf(s);
                var i = e.utils.combineObject({}, o || u);
                (i.volume = t),
                  (i.onComplete = function () {
                    o.onComplete &&
                      o.onComplete.apply(o.onCompleteScope, o.onCompleteParams);
                  }),
                  a.to(s, n, i);
              },
            };
            r = r || {};
            var u = e.utils.combineObject({}, r);
            return (
              (u.volume = i),
              (u.onComplete = function () {
                r.onComplete &&
                  r.onComplete.apply(r.onCompleteScope, r.onCompleteParams);
              }),
              a.to(s, n, u),
              this.setFadeNodeForGroup(t, s.apply),
              s
            );
          }),
          t
        );
      })();
      t.SoundVolumeManager = n;
      var o = (function () {
        function e(e, t) {
          (this._svm = e),
            (this._ltm = t),
            (this._soundFadeNodes = {}),
            (this._groupFadeNodes = {});
        }
        return (
          (e.prototype.addSoundFadeNode = function (e, t, n, o, i, a) {
            this.clearSoundFadeNode(e, t);
            var r = this._svm.addSoundFadeNode(
              e,
              t,
              n,
              i.volume,
              a.volume,
              o,
              this._ltm
            );
            this._soundFadeNodes[e][t] = r;
          }),
          (e.prototype.clearSoundFadeNode = function (e, t) {
            this._soundFadeNodes[e] = this._soundFadeNodes[e] || {};
            var n = this._soundFadeNodes[e][t];
            n &&
              (this._ltm.killTweensOf(n),
              this._svm.clearFadeNodeForSound(e, t, n.apply),
              (this._soundFadeNodes[e][t] = null));
          }),
          (e.prototype.addGroupFadeNode = function (e, t, n, o) {
            this.clearGroupFadeNode(e);
            var i = this._svm.addGroupFadeNode(
              e,
              t,
              n.volume,
              o.volume,
              this._ltm,
              o
            );
            this._groupFadeNodes[e] = i;
          }),
          (e.prototype.clearGroupFadeNode = function (e) {
            var t = this._groupFadeNodes[e];
            t &&
              (this._svm.clearFadeNodeForGroup(e, t.apply),
              this._ltm.killTweensOf(t));
          }),
          e
        );
      })();
      t.FadeNodeHelper = o;
    })(e.sounds || (e.sounds = {}));
  })(tk_common || (tk_common = {})),
  (function (e) {
    !(function (t) {
      var n = e.utils.linkedlist.createDblLinkedList,
        o = (function () {
          function e(e, t, n, o) {
            (this._ss = e),
              (this._id = t),
              (this._settings = n),
              (this._playNext = o);
          }
          return (
            Object.defineProperty(e.prototype, "id", {
              get: function () {
                return this._id;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.play = function () {
              var e = this,
                n = (this._listener = t.createListenerForSpecificSound(
                  this._id,
                  function () {
                    e._ss.onSoundComplete.remove(n), e._playNext();
                  },
                  !1
                ));
              this._ss.onSoundComplete.add(n),
                this._ss.playSoundWithId(
                  this._id,
                  this._settings.key || this._id,
                  this._settings.volume,
                  this._settings.loop,
                  this._settings.playonload,
                  this._settings.restart,
                  this._settings.delay
                );
            }),
            (e.prototype.stop = function () {
              this._ss.stopSound(this._id);
            }),
            e
          );
        })();
      function i(e) {
        var t,
          i = n(),
          a = null,
          r = !1,
          s = function () {
            r || ((t = i.next(t)) ? t.data.play() : a && a());
          },
          u = function (t, n) {
            var a = new o(e, t, n, s);
            return i.add(a), { then: u };
          };
        return {
          startWith: function (e, t) {
            return u(e, t);
          },
          play: function () {
            (r = !1),
              t && t.data.stop(),
              (t = i.head()) ? t.data.play() : a && a();
          },
          stop: function () {
            if (((r = !0), t)) {
              var e = t;
              (t = null), e.data.stop();
            }
          },
          skipTo: function (e) {
            var n = t;
            if ((t = t || i.head()).data.id !== e) {
              do {
                if ((t = i.next(t)) && t.data.id === e) break;
              } while (t);
              if ((n && t != n && n.data.stop(), !t))
                throw new Error(
                  "Cannot skip to " + e + " as it is not part of the sequence."
                );
              t.data.play(), (t = i.next(t));
            }
          },
          set done(e) {
            a = e;
          },
        };
      }
      t.createSoundSequence = i;
    })(e.sounds || (e.sounds = {}));
  })(tk_common || (tk_common = {}));
