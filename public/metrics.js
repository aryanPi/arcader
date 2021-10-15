var __extends =
  (this && this.__extends) ||
  function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype =
      b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };
var tk_common;
(function (tk_common) {
  var metrics;
  (function (metrics) {
    var BasicMetricsCollector = (function () {
      function BasicMetricsCollector() {
        var _this = this;
        this.gamerounds = 0;
        this.fullCollection = {};
        this.gameRoundCollection = {};
        this._intervalId = setInterval(function () {
          if (window["eventHandler"] != null) {
            _this.handlePageLoaded();
          }
        }, 100);
      }
      BasicMetricsCollector.prototype.handlePageLoaded = function () {
        clearInterval(this._intervalId);
        if (metricsSettings == undefined) {
          console.warn("No metrics settings defined.");
          return;
        }
        try {
          this.uploadFrequency = metricsSettings.uploadFrequency || 10;
          delete metricsSettings.uploadFrequency;
          this.initCollections(metricsSettings);
          this.settings = metricsSettings;
          var eh = window["eventHandler"];
          eventHandler = this.createEventHandler(eh);
        } catch (error) {}
      };
      BasicMetricsCollector.prototype.createEventHandler = function (
        orgHandler
      ) {
        var _this = this;
        return function (eventId, data) {
          orgHandler(eventId, data);
          try {
            if (eventId === "gamestarted") {
              //Ok, the game has been started, let us start looking for quick stops
              game.gui.onGuiButtonClicked.add(
                _this.handleGuiButtonClicked,
                _this
              );
              //Also, let us try and measure average response times
              if (tk_common.net["onComStatusChange"]) {
                _this.addResponseTimeTracking();
              }
            }
            if (eventId === "roundstarted") {
              _this.gamerounds++;
              _this.gameRoundCollection.quickstops = 0;
              if (_this.settings.autoplay) {
                if (data.isautoplay === true) {
                  _this.gameRoundCollection.autoplay = true;
                } else {
                  _this.gameRoundCollection.autoplay = false;
                }
              }
            }
            if (eventId === "roundended") {
              //Check if the sound is on.
              if (_this.settings.soundEnabled) {
                if (_this.determineSoundEnablement()) {
                  _this.gameRoundCollection.soundEnabled = true;
                } else {
                  _this.gameRoundCollection.soundEnabled = false;
                }
              }
              if (_this.settings.vibrationsEnabled) {
                if (game.allowVibrate) {
                  _this.gameRoundCollection.vibrationsEnabled = true;
                } else {
                  _this.gameRoundCollection.vibrationsEnabled = false;
                }
              }
              _this.combineCollections();
              if (_this.gamerounds >= _this.uploadFrequency) {
                //Upload the collection data and reset the local collections.
                _this.uploadCollection();
              }
            }
          } catch (error) {}
        };
      };
      BasicMetricsCollector.prototype.handleGuiButtonClicked = function (
        buttonId,
        value
      ) {
        try {
          if (buttonId === tk_common.slots.gui.GuiButtonIds.QUICK_STOP) {
            if (this.settings.quickstops === true) {
              this.gameRoundCollection.quickstops = true;
            }
          } else if (buttonId === tk_common.slots.gui.GuiButtonIds.PAY_TABLE) {
            if (this.settings.paytable === true) {
              this.gameRoundCollection.paytable = true;
            }
          } else if (buttonId === tk_common.slots.gui.GuiButtonIds.GAME_RULES) {
            if (this.settings.gameRules === true) {
              this.gameRoundCollection.gameRules = true;
            }
          } else if (buttonId === tk_common.slots.gui.GuiButtonIds.HISTORY) {
            if (this.settings.history === true) {
              this.gameRoundCollection.history = true;
            }
          }
        } catch (error) {}
      };
      BasicMetricsCollector.prototype.initCollections = function (
        metricsSettings
      ) {
        metricsSettings = metricsSettings || {};
        this.gameRoundCollection = {};
        this.fullCollection = {};
        for (var key in metricsSettings) {
          this.gameRoundCollection[key] = false;
          this.fullCollection[key] = 0;
        }
      };
      BasicMetricsCollector.prototype.initGameRoundCollection = function (
        metricsSettings
      ) {
        metricsSettings = metricsSettings || {};
        this.gameRoundCollection = {};
        for (var key in metricsSettings) {
          this.gameRoundCollection[key] = false;
        }
      };
      BasicMetricsCollector.prototype.combineCollections = function () {
        try {
          for (var key in this.gameRoundCollection) {
            this.fullCollection[key] += this.gameRoundCollection[key] ? 1 : 0;
          }
        } catch (error) {}
      };
      BasicMetricsCollector.prototype.uploadCollection = function () {
        try {
          //Send the data to the metrics server
          var event = {
            playerId: game.model.playerId,
            samples: this.gamerounds,
          };
          var totalTime = 0;
          var totalValidEntries = 0;
          for (var i = 0; i < this._responseTimes.length; i++) {
            var time = this._responseTimes[i];
            if (isNaN(time)) {
            } else {
              totalTime += this._responseTimes[i];
              totalValidEntries++;
            }
          }
          this.fullCollection["averageResponseTime"] =
            totalTime / totalValidEntries / 1000;
          this._responseTimes = [];
          for (var key in this.fullCollection) {
            event[key] = this.fullCollection[key];
          }
          this.gamerounds = 0;
          this.initCollections(metricsSettings);
          sendLogData(event); //TODO: Should we move this into ourselves instead of relying on it being defined in the external script?
        } catch (error) {}
      };
      BasicMetricsCollector.prototype.determineSoundEnablement = function () {
        var gameid = game.initGameData.gameid;
        //A lot the early games do not set the proper flag in the game instance but instead have a SoundManager-singleton. We must treat these one differently.
        switch (gameid) {
          case "tk-esqueleto-a": {
            return (
              window["EsqueletoExplosivoMobile"].SoundManager.getInstance()
                ._isEnabled === true
            );
          }
          case "tk-birds-a": {
            return (
              window["tk_birds"].SoundManager.getInstance()._isEnabled === true
            );
          }
          case "tk-starvector": {
            return (
              window["tk_flux"].SoundManager.getInstance()._isEnabled === true
            );
          }
          case "tk-magicians-a": {
            return (
              game.soundManager._isLoading === false &&
              game.sound.mute === false
            );
          }
          case "tk-fruittime": {
            return (
              window["tk_fruittime"].SoundManager.getInstance()._isEnabled ===
              true
            );
          }
          case "tk-tokitime": {
            return (
              window["tk_tokitime"]["audial"].SoundManager.getInstance()
                ._isLoading === false && game.sound.mute === false
            );
          }
          case "tk-uncharted": {
            return game.activeState._isSoundOff === false;
          }
          default: {
            //The default/proper way in vanilla and chocolate to check the sound enablement.
            return game.soundEnabled;
          }
        }
      };
      BasicMetricsCollector.prototype.addResponseTimeTracking = function () {
        var _this = this;
        var frequency = this.uploadFrequency;
        this._responseTimes = new Array(frequency);
        var startTime;
        if (this.settings.averageResponseTime !== false) {
          var comTracker = tk_common.net.ComTracker.getInstance();
          var m = comTracker["requestSent"].bind(comTracker);
          comTracker["requestSent"] = function (sender) {
            startTime = Date.now ? Date.now() : new Date().getTime();
            _this._responseTimes.push(NaN);
            return m(sender);
          };
          var n = comTracker["requestReceived"].bind(comTracker);
          comTracker["requestReceived"] = function (sender) {
            var endTime = Date.now ? Date.now() : new Date().getTime();
            _this._responseTimes[_this._responseTimes.length - 1] =
              endTime - startTime;
            return n(sender);
          };
        }
      };
      return BasicMetricsCollector;
    })();
    metrics.BasicMetricsCollector = BasicMetricsCollector;
  })((metrics = tk_common.metrics || (tk_common.metrics = {})));
})(tk_common || (tk_common = {}));
///<reference path="../BasicMetricsCollector.ts"/>
var tk_common;
(function (tk_common) {
  var metrics;
  (function (metrics) {
    /**
     * Created by daniel.gjorwell on 2016-09-01.
     */
    var ZoomMetrics = (function (_super) {
      __extends(ZoomMetrics, _super);
      function ZoomMetrics() {
        _super.call(this);
      }
      return ZoomMetrics;
    })(metrics.BasicMetricsCollector);
    metrics.ZoomMetrics = ZoomMetrics;
  })((metrics = tk_common.metrics || (tk_common.metrics = {})));
})(tk_common || (tk_common = {}));
/**
 * Created by daniel.gjorwell on 2016-09-01.
 */
///<reference path="BasicMetricsCollector"/>
var bmc = new tk_common.metrics.BasicMetricsCollector();
window["__tk__mc"] = bmc;
