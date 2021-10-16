var tempD = undefined;
var tk_gui,
  __extends =
    (this && this.__extends) ||
    (function () {
      var t = function (e, n) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(e, n);
      };
      return function (e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        function s() {
          this.constructor = e;
        }
        t(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((s.prototype = n.prototype), new s()));
      };
    })();
!(function (t) {
  var e = (function () {
    function t(t, e) {
      (this._visible = t),
        (this._parentElement = e),
        this._parentElement.css("left", "-1px"),
        this._parentElement.css("top", "-1px"),
        this._parentElement.css("pointer-events", "none"),
        this._parentElement.css("display", "none"),
        this._parentElement.css("position", "absolute"),
        this._parentElement.css("width", "100%"),
        this._parentElement.css("height", "100%"),
        this._parentElement.css("font-family", "Verlag"),
        this._parentElement.css("color", "white");
      var n = this._parentElement,
        s = (this._contentDiv = $("<div/>"));
      s.css("position", "absolute"),
        s.css("top", "0px"),
        s.css("left", "0px"),
        s.css("width", "100%"),
        s.css("height", "100%"),
        n.append(s);
      var i = $("<span/>");
      i.css("width", "100%"),
        i.css("height", "50%"),
        i.css("display", "flex"),
        i.css("flex-direction", "column"),
        i.css("align-items", "center"),
        i.css("justify-content", "center"),
        i.css("position", "relative"),
        n.append(i);
      var o = $("<div/>");
      o.css("padding", "min(20px, 10%)"), i.append(o);
      var a = $("<span/>");
      i.append(a);
      var l = $("<label/>");
      a.append(l),
        l.css("background-color", "transparent"),
        l.css("border", "none"),
        l.css("font-size", "1.0em"),
        l.css("text-align", "center"),
        l.css("display", "inline-block"),
        l.css("text-shadow", "1px 1px black"),
        (this._titleSpan = a),
        (this._title = l),
        (o = $("<div/>")),
        i.append(o),
        o.css("padding", "min(20px, 10%)");
      var r = $("<span/>");
      i.append(r);
      var c = $("<label/>");
      r.append(c),
        c.css("background-color", "transparent"),
        c.css("border", "none"),
        c.css("font-size", "1.0em"),
        c.css("text-align", "center"),
        c.css("display", "inline-block"),
        c.css("text-shadow", "1px 1px black"),
        (this._textSpan = r),
        (this._text = c),
        (o = $("<div/>")).css("padding", "min(20px, 10%)"),
        i.append(o);
    }
    return (
      (t.prototype.show = function (t) {
        return (
          this._parentElement.css("display", "block"),
          (this._visible = !0),
          this._title.text(t.title),
          this._text.text(t.text),
          this._contentDiv.empty(),
          t.content
            ? this._contentDiv.append(jQuery(t.content))
            : this._contentDiv.append(
                $(
                  '<div style="width:100%; height:100%; background-color:black;"/>'
                )
              ),
          { parentElement: this._parentElement[0] }
        );
      }),
      (t.prototype.hide = function () {
        this._parentElement.css("display", "none"), (this._visible = !1);
      }),
      (t.prototype.layout = function (t, e, n, s) {
        if (t === tk_common.constants.OrientationEnum.LANDSCAPE)
          this._parentElement.css("height", "722px"),
            this._parentElement.css("width", "1282px"),
            this._parentElement.css("font-size", "40px");
        else {
          var i = 1280 / e.width;
          this._parentElement.css("height", e.height * i + 1 + "px"),
            this._parentElement.css("width", e.width * i + 1 + "px"),
            this._parentElement.css("font-size", 36 * i + "px");
        }
      }),
      t
    );
  })();
  t.CoverScreenManager = e;
})(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function () {
      function t() {}
      return (
        (t.CONTROL_PANEL_PAGE_FADE_IN_DURATION = 30),
        (t.CONTROL_PANEL_PAGE_FADE_OUT_DURATION = 200),
        (t.NAVIGATION_BAR_WAIT_BEFORE_HIDE_DURATION = 2500),
        t
      );
    })();
    t.DefaultGameGuiConstants = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function () {
      function t(t, e, n) {
        (this._pageSettings = {}),
          (this._cachedElements = {}),
          (this._initialized = !1),
          (this._cachedNames = {}),
          (this._boundLabelUpdaters = {}),
          (this._hasMaximizedPortrait = !1),
          (this._parentElement = jQuery("#" + t));
        var s = "tk-game-gui-" + n;
        (this._gameGuiElement = this._parentElement.append(
          "<div id='" + s + "'/>"
        )),
          (this._gameGuiElementId = s),
          (this._cachedElements[this._parentElementId] = this._parentElement),
          (this._cachedElements[this._gameGuiElementId] = this._gameGuiElement),
          (this._hasMaximizedPortrait = !1),
          (this._guiAssetBaseUrl = e),
          (this._gameInstanceId = n),
          (this.onFullScreenClick = new tk_common.utils.Signal1()),
          (this.onPopupMenuVisibilityChanged = new tk_common.utils.Signal1()),
          (this.onGuiButtonClicked =
            new tk_common.slots.gui.GuiButtonClickedSignal()),
          (this.onDialogButtonClicked =
            new tk_common.slots.gui.DialogButtonClickedSignal()),
          (this.onControlPanelButtonClicked =
            new tk_common.slots.gui.ControlPanelButtonClickedSignal()),
          (this.onIosFullscreenModeChanged = new tk_common.utils.Signal1()),
          (this.onGuiAreaClicked = new tk_common.utils.Signal4()),
          (this.onStopOnFeatureWonValueChanged = new tk_common.utils.Signal1());
      }
      return (
        Object.defineProperty(t.prototype, "enabled", {
          get: function () {
            return this._enabled;
          },
          set: function (t) {
            this._enabled = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "guiParentElement", {
          get: function () {
            return this._parentElement[0];
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "guiContainer", {
          get: function () {
            return this._gameGuiElement[0];
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.setShowStopAutoplayOnFeatureWon = function (t) {}),
        (t.prototype.setStopOnFeatureWonChecked = function (t) {}),
        (t.prototype.setShowBackToLobbyButton = function (t) {}),
        (t.prototype.setShowHistoryButton = function (t) {}),
        (t.prototype.setShowVibrateButton = function (t) {}),
        (t.prototype.setVibrateButtonChecked = function (t) {}),
        (t.prototype.setShowLoginButton = function (t) {}),
        (t.prototype.setShowDepositButton = function (t) {}),
        (t.prototype.setGameVersion = function (t) {}),
        (t.prototype.getAutoPlayLossLimitValue = function () {
          return -1;
        }),
        (t.prototype.getAutoPlaySingleWinLimitValue = function () {
          return -1;
        }),
        (t.prototype.isVisible = function () {
          return this._isVisible;
        }),
        (t.prototype.buildGui = function (t, e) {
          throw "MobileGui.buildGui is abstract. Override in subclass.";
        }),
        (t.prototype.update = function (t) {
          throw "MobileGui.update is abstract. Override in subclass.";
        }),
        (t.prototype.layout = function (t, e, n, s) {
          throw "MobileGui.layout is abstract. Override in subclass.";
        }),
        (t.prototype.preloadGuiAssets = function () {}),
        (t.prototype.createElementId = function (t, e, n) {
          var s;
          return (
            void 0 !== this._cachedNames[t]
              ? (s = this._cachedNames[t])
              : ((e = e || "-"),
                (n = n || this._gameInstanceId),
                (s = this._cachedNames[t] = n + e + t)),
            s
          );
        }),
        (t.prototype.initializeGui = function (t, e, n) {
          for (var s in ((this._languageSystem = e),
          (this._pageSettings = t),
          t))
            this.updatePageSettings(parseInt(s), this._pageSettings[s]);
          this.performAdditionalInitializationLogic(),
            this._languageSystem.onDirtyPhrasesUpdated.add(
              this.handleDirtyPhrasesUpdated,
              this
            ),
            this._languageSystem.updateAllEntries(),
            (this._initialized = !0);
        }),
        (t.prototype.performAdditionalInitializationLogic = function () {}),
        (t.prototype.handleDirtyPhrasesUpdated = function (t) {
          for (var e = 0; e < t.length; e++) {
            var n = t[e];
            if (void 0 !== this._boundLabelUpdaters[n])
              for (
                var s = this._boundLabelUpdaters[n], i = 0;
                i < s.length;
                i++
              )
                s[i](n, this._languageSystem.getPhraseContent(n));
          }
        }),
        (t.prototype.bindLabelFunctionToLanguageSystem = function (t, e) {
          return (
            void 0 === this._boundLabelUpdaters[t] &&
              (this._boundLabelUpdaters[t] = []),
            this._boundLabelUpdaters[t].push(e),
            null != this._languageSystem
              ? this._languageSystem.getPhraseContent(t)
              : t
          );
        }),
        (t.prototype.destroyGui = function () {
          this._languageSystem.onDirtyPhrasesUpdated.remove(
            this.handleDirtyPhrasesUpdated,
            this
          ),
            (this._languageSystem = null),
            (this._boundLabelUpdaters = {}),
            this._gameGuiElement.empty(),
            this._gameGuiElement.parent().remove(this._gameGuiElementId);
        }),
        (t.prototype.isInitialized = function () {
          return this._initialized;
        }),
        (t.prototype.playSpinAnimation = function (t) {
          throw "MobileGui.playSpinAnimation is abstract. Overriden and implement in subclass.";
        }),
        (t.prototype.enableSpinButton = function () {
          throw "MobileGui.enableSpinButton is abstract. Overriden and implement in subclass.";
        }),
        (t.prototype.disableSpinButton = function () {
          throw "MobileGui.disableSpinButton is abstract. Overriden and implement in subclass.";
        }),
        (t.prototype.hasMaximizedPortrait = function (t) {
          this._hasMaximizedPortrait = t;
        }),
        (t.prototype.setCashFieldValue = function (t, e, n) {}),
        (t.prototype.setBetFieldValue = function (t, e, n) {}),
        (t.prototype.setGuiButtonState = function (t, e, n) {}),
        (t.prototype.setHistoryData = function (t) {}),
        (t.prototype.showGui = function () {}),
        (t.prototype.hideGui = function () {}),
        (t.prototype.showDialog = function (t) {}),
        (t.prototype.hideDialog = function () {}),
        (t.prototype.updatePlayerHistoryData = function (t) {}),
        (t.prototype.updatePageSettings = function (t, e) {}),
        (t.prototype.isControlPanelOpen = function () {
          return this._isControlPanelOpen;
        }),
        (t.prototype.isPageOpen = function (t) {
          return this._currentControlPanelPage === t;
        }),
        (t.prototype.isSpinButtonEnabled = function () {
          return !0;
        }),
        (t.prototype.showFade = function (t, e) {}),
        (t.prototype.hideFade = function (t, e) {}),
        (t.prototype.showControlPanel = function (t, e, n) {}),
        (t.prototype.hideControlPanel = function (t, e) {}),
        (t.prototype.setSoundLoadMode = function (t) {}),
        (t.prototype.setSpinMode = function (t) {}),
        (t.prototype.setQuickStopMode = function (t) {}),
        (t.prototype.setQuickStopDuringFeatureMode = function (t) {}),
        (t.prototype.setAutoSpinMode = function (t, e) {}),
        (t.prototype.setLastAutoSpinMode = function (t) {}),
        (t.prototype.setSkipMode = function (t) {}),
        (t.prototype.setSkipDuringFeatureMode = function (t) {}),
        (t.prototype.show = function (t) {}),
        (t.prototype.setLanguageParameterValue = function (t, e) {
          this._languageSystem.setParameterValue(t, e);
        }),
        (t.prototype.setSoundButtonSelected = function (t) {}),
        (t.prototype.enableGuiButton = function (t, e, n) {}),
        (t.prototype.setDialogModalMode = function (t) {}),
        (t.prototype.setFreeRoundsMode = function (t) {}),
        (t.prototype.setFreeRoundsFeatureMode = function (t, e, n) {}),
        (t.prototype.setFeatureRoundsMode = function (t, e) {}),
        (t.prototype.setFeatureRoundsModeWithCustomValue = function (t, e) {}),
        (t.prototype.setOcConfiguration = function (t) {
          this._ocConfiguration = t;
        }),
        (t.prototype.setOcEnabled = function (t) {}),
        (t.prototype.showOc = function () {}),
        (t.prototype.hideOc = function () {}),
        (t.prototype.setSingleSpinMode = function (t) {}),
        (t.prototype.hidePopupMenu = function () {}),
        (t.prototype.preventPopupMenu = function (t, e) {}),
        (t.prototype.setOverrideOrientation = function (t) {}),
        (t.prototype.isEnabled = function () {
          throw new Error("Not implemented");
        }),
        (t.prototype.isPopupMenuOpen = function () {
          throw new Error("Not implemented");
        }),
        (t.prototype.setGameTopMargin = function (t) {}),
        (t.prototype.setPlayMode = function (t) {}),
        (t.prototype.activateIosFullScreenSwipeManager = function () {}),
        (t.prototype.setPopupMenuOnlyMode = function (t) {}),
        (t.prototype.clickSpinButton = function () {}),
        (t.prototype.lockScreen = function (t) {}),
        (t.prototype.setTopSpinsMode = function (t, e, n) {}),
        (t.prototype.showTopSpinView = function () {}),
        (t.prototype.hideTopSpinView = function () {}),
        (t.prototype.animateInTopSpinView = function () {}),
        (t.prototype.animateOutTopSpinView = function () {}),
        (t.prototype.setTotalWinFieldColor = function (t, e) {}),
        (t.prototype.setCashFieldColor = function (t, e) {}),
        (t.prototype.setCustomDialogButtons = function (t) {}),
        (t.prototype.setHandedness = function (t) {}),
        (t.prototype.enableOrientationControlsHandedness = function (t) {}),
        (t.prototype.setAllowFastPlayButton = function (t) {}),
        (t.prototype.setFastPlayMode = function (t) {}),
        (t.prototype.setOcActionList = function (t, e) {}),
        (t.prototype.updateAllowedGuiElements = function (t) {}),
        (t.prototype.updateGuiButtonOverrides = function (t, e) {
          throw new Error("Method not implemented.");
        }),
        (t.prototype.updateConditionalGuiButtonOverrides = function (t, e) {
          throw new Error("Method not implemented.");
        }),
        (t.prototype.setCinematicMode = function (t) {}),
        (t.prototype.flashTotalWinField = function (t, e, n) {
          setTimeout(n, t);
        }),
        (t.prototype.hideGameCoveringMessage = function () {}),
        (t.prototype.showGameCoveringMessage = function (t) {
          return { parentElement: void 0 };
        }),
        (t.CSS_CLASS_UNSELECTABLE = "tk-game-gui-unselectable-element"),
        t
      );
    })();
    t.MobileGui = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    t.guiBuildDate = "v1.16.0";
  })(tk_gui || (tk_gui = {})),
  console && console.log,
  (function (t) {
    var e = (function () {
      function e() {
        (this.DialogButtonClicked = new Phaser.Signal()),
          (this._isShowing = !1);
      }
      return (
        Object.defineProperty(e.prototype, "showLogin", {
          set: function (t) {
            this._showLogin = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "showDeposit", {
          set: function (t) {
            this._showDeposit = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "realityCheckDialogTitlePhraseId", {
          set: function (t) {
            this._realityCheckDialogTitlePhraseId = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "realityCheckDialogWonPhraseId", {
          set: function (t) {
            this._realityCheckDialogWonPhraseId = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "realityCheckDialogLostPhraseId", {
          set: function (t) {
            this._realityCheckDialogLostPhraseId = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "accountButtonPhraseId", {
          set: function (t) {
            this._accountButtonPhraseId = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "showRealityCheckHistoryButton", {
          set: function (t) {
            this._showRealityCheckHistoryButton = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "showRealityCheckLogoutButton", {
          set: function (t) {
            this._showRealityCheckLogoutButton = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.handleButtonClicked = function (t) {
          9 === t && (t = 5);
          var e = this._currentButtonSelections[t];
          this._isShowing &&
            this.DialogButtonClicked.dispatch(this._currentType, e);
        }),
        (e.prototype.setCustomDialogButtons = function (t) {
          this._customDialogButtonsMap = t;
        }),
        (e.prototype.show = function (t, e) {
          var n = this;
          (this._isShowing = !0),
            this.hideComponents(),
            clearTimeout(this._hideTimeOut);
          for (var s = 0; s < this._titleLabelElements.length; s++)
            this._titleLabelElements[s].css("display", "none");
          for (var i = 0; i < this._textLabelElements.length; i++)
            this._textLabelElements[i].css("display", "none");
          switch (
            ((this._currentType = t),
            this._containerElement.css("display", "block"),
            this._loaderAnimationContainerElement.css("display", "none"),
            this._loaderAnimationElement.css("display", "none"),
            this._loaderAnimationElement.removeClass("loaderSpin"),
            t)
          ) {
            case tk_common.slots.gui.DialogTypeEnum.INSUFFICIENT_FUNDS:
            case tk_common.slots.gui.DialogTypeEnum
              .SERVER_SIDE_INSUFFICIENT_FUNDS:
              (this._currentTextLabelIndex = 0),
                (this._currentTitleLabelIndex = 0),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[0].css("display", "block"),
                this._titleLabelElements[0].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[0].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[0].css("display", "block"),
                this._textLabelElements[0].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[0].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._showDeposit
                  ? this._buttonManager.setActiveIndexes([2, 3])
                  : this._buttonManager.setActiveIndexes([3]),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.LOADER:
              this._loaderAnimationContainerElement.css("display", "block"),
                this._loaderAnimationElement.css("display", "block"),
                this._loaderAnimationElement.addClass("loaderSpin"),
                this._textContainerElement.css("display", "none"),
                this._titleDividerElement.css("display", "none"),
                this._buttonManager.setValues(null);
              break;
            case tk_common.slots.gui.DialogTypeEnum.SLOW_CONNECTION:
              (this._currentTextLabelIndex = 1),
                (this._currentTitleLabelIndex = 1),
                this._loaderAnimationContainerElement.css("display", "block"),
                this._loaderAnimationElement.css("display", "block"),
                this._loaderAnimationElement.addClass("loaderSpin"),
                this._titleDividerElement.css("display", "none"),
                this._textLabelElements[1].css("display", "block"),
                this._textLabelElements[1].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[1].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setValues(null);
              break;
            case tk_common.slots.gui.DialogTypeEnum
              .PLAY_TIME_EXCEEDED_LOST_MONEY:
              (this._currentTitleLabelIndex = 1),
                (this._currentTextLabelIndex = 2),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[1].css("display", "block"),
                this._titleLabelElements[1].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[1].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[2].css("display", "block"),
                this._textLabelElements[2].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[2].addClass(
                  "verticalTopOverlayDialogLabel"
                );
              var o = [4];
              this._showRealityCheckLogoutButton ? o.push(9) : o.push(5),
                this._showRealityCheckHistoryButton && o.push(8),
                this._buttonManager.setActiveIndexes(o),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum
              .PLAY_TIME_EXCEEDED_WON_MONEY:
              (this._currentTitleLabelIndex = 1),
                (this._currentTextLabelIndex = 3),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[1].css("display", "block"),
                this._titleLabelElements[1].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[1].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[3].css("display", "block"),
                this._textLabelElements[3].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[3].addClass(
                  "verticalTopOverlayDialogLabel"
                );
              o = [4];
              this._showRealityCheckLogoutButton ? o.push(9) : o.push(5),
                this._showRealityCheckHistoryButton && o.push(8),
                this._buttonManager.setActiveIndexes(o),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.RESTORE_STATE_FOUND:
              (this._currentTitleLabelIndex = 4),
                (this._currentTextLabelIndex = 5),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[4].css("display", "block"),
                this._titleLabelElements[4].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[4].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[5].css("display", "block"),
                this._textLabelElements[5].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[5].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setActiveIndexes([0]),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.GAME_ROUND_RESTORED:
              (this._currentTitleLabelIndex = 5),
                (this._currentTextLabelIndex = 6),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[5].css("display", "block"),
                this._titleLabelElements[5].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[5].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[6].css("display", "block"),
                this._textLabelElements[6].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[6].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setActiveIndexes([0]),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.FREE_ROUNDS_FOUND:
              (this._currentTitleLabelIndex = 2),
                (this._currentTextLabelIndex = 4),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[2].css("display", "block"),
                this._titleLabelElements[2].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[2].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[4].css("display", "block"),
                this._textLabelElements[4].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[4].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setActiveIndexes([0]),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.FREE_ROUNDS_COMPLETED:
              (this._currentTitleLabelIndex = 3),
                (this._currentTextLabelIndex = 7),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[3].css("display", "block"),
                this._titleLabelElements[3].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[3].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[7].css("display", "block"),
                this._textLabelElements[7].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[7].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setActiveIndexes([0]),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.TOP_SPINS_FOUND:
              (this._currentTitleLabelIndex = 13),
                (this._currentTextLabelIndex = 15),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[13].css("display", "block"),
                this._titleLabelElements[13].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[13].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[15].css("display", "block"),
                this._textLabelElements[15].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[15].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setActiveIndexes([0]),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.TOP_SPINS_COMPLETED:
              (this._currentTitleLabelIndex = 14),
                (this._currentTextLabelIndex = 16),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[14].css("display", "block"),
                this._titleLabelElements[14].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[14].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[16].css("display", "block"),
                this._textLabelElements[16].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[16].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setActiveIndexes([0]),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.GAME_ROUND_ROLLED_BACK:
              (this._currentTitleLabelIndex = 6),
                (this._currentTextLabelIndex = 8),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[6].css("display", "block"),
                this._titleLabelElements[6].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[6].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[8].css("display", "block"),
                this._textLabelElements[8].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[8].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setActiveIndexes([0]),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.TECHNICAL_ERROR:
              (this._currentTitleLabelIndex = 7),
                (this._currentTextLabelIndex = 9),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[this._currentTitleLabelIndex].css(
                  "display",
                  "block"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].css(
                  "display",
                  "block"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setActiveIndexes([0]),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.DEVICE_NOT_SUPPORTED:
              (this._currentTitleLabelIndex = 15),
                (this._currentTextLabelIndex = 18),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[this._currentTitleLabelIndex].css(
                  "display",
                  "block"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].css(
                  "display",
                  "block"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setActiveIndexes([0]),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.BLOCKED_JURISDICTION:
              (this._currentTitleLabelIndex = 14),
                (this._currentTextLabelIndex = 17),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[this._currentTitleLabelIndex].css(
                  "display",
                  "block"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].css(
                  "display",
                  "block"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setActiveIndexes([0]),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.PLAYER_LIMIT_EXCEEDED:
              (this._currentTitleLabelIndex = 11),
                (this._currentTextLabelIndex = 13),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[this._currentTitleLabelIndex].css(
                  "display",
                  "block"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].css(
                  "display",
                  "block"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setActiveIndexes([0]),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.SESSION_LIMIT_EXCEEDED:
              (this._currentTitleLabelIndex = 11),
                (this._currentTextLabelIndex = 23),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[this._currentTitleLabelIndex].css(
                  "display",
                  "block"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].css(
                  "display",
                  "block"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setActiveIndexes([0]),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.LOSS_LIMIT_REACHED:
              (this._currentTitleLabelIndex = 12),
                (this._currentTextLabelIndex = 14),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[this._currentTitleLabelIndex].css(
                  "display",
                  "block"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].css(
                  "display",
                  "block"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setActiveIndexes([0]),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum
              .NOW_PLAYING_FOR_YOUR_OWN_MONEY:
              (this._currentTitleLabelIndex = 10),
                (this._currentTextLabelIndex = 12),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[this._currentTitleLabelIndex].css(
                  "display",
                  "block"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].css(
                  "display",
                  "block"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setActiveIndexes([0]),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.WANT_TO_PLAY_FOR_REAL:
              (this._currentTitleLabelIndex = 9),
                (this._currentTextLabelIndex = 11),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[this._currentTitleLabelIndex].css(
                  "display",
                  "block"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].css(
                  "display",
                  "block"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setActiveIndexes([4, 5]),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.INVALID_PLAYER_SESSION:
              (this._currentTitleLabelIndex = 17),
                (this._currentTextLabelIndex = 20),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[this._currentTitleLabelIndex].css(
                  "display",
                  "block"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].css(
                  "display",
                  "block"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setActiveIndexes([0]),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.REGULATION_DISCLAIMER:
              (this._currentTitleLabelIndex = 16),
                (this._currentTextLabelIndex = 19),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[this._currentTitleLabelIndex].css(
                  "display",
                  "block"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].css(
                  "display",
                  "block"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setActiveIndexes([0]),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.CUSTOM:
              (this._currentTitleLabelIndex = 18),
                (this._currentTextLabelIndex = 21),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[this._currentTitleLabelIndex].css(
                  "display",
                  "block"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].css(
                  "display",
                  "block"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                );
              var a = this._customDialogButtonsMap.map(function (t) {
                return n._guiButtonIdToDialogButtonMap[t];
              });
              this._buttonManager.setActiveIndexes(a),
                this._buttonManager.show();
              break;
            case tk_common.slots.gui.DialogTypeEnum.BET_REJECTED:
              (this._currentTitleLabelIndex = 19),
                (this._currentTextLabelIndex = 22),
                this._titleDividerElement.css("display", "block"),
                this._titleLabelElements[this._currentTitleLabelIndex].css(
                  "display",
                  "block"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._titleLabelElements[this._currentTitleLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].css(
                  "display",
                  "block"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "horizontalCenteredOverlayDialogLabel"
                ),
                this._textLabelElements[this._currentTextLabelIndex].addClass(
                  "verticalTopOverlayDialogLabel"
                ),
                this._buttonManager.setActiveIndexes([0]),
                this._buttonManager.show();
          }
          this._backgroundElement.css("display", "block"),
            this._backgroundElement.removeClass("fadedOut"),
            this._backgroundElement.addClass("forceRedrawClass"),
            this.layout(
              this._orientation,
              this._gameContainerArea,
              this._gameArea,
              this._hasDesktopGui,
              !1,
              this._isControlPanelOpen,
              this._showingInfoBar,
              this._gameMarginTop
            ),
            this.updateTextLabelSize();
        }),
        (e.prototype.hide = function (t) {
          var e = this;
          void 0 === t && (t = !1),
            this._isShowing &&
              ((this._isShowing = !1),
              t
                ? (this._containerElement.removeClass(
                    "openDialogPopupAnimation"
                  ),
                  this._containerElement.addClass("closeDialogPopupAnimation"),
                  (this._hideTimeOut = setTimeout(function () {
                    return e.hideComponents();
                  }, 300)))
                : this.hideComponents());
        }),
        (e.prototype.hideComponents = function () {
          this._containerElement.css("display", "none"),
            this._loaderAnimationElement.css("display", "none"),
            this._loaderAnimationContainerElement.css("display", "none");
          for (var t = 0; t < this._buttonElements.length; t++)
            this._buttonElements[t].css("display", "none"),
              this._buttonLabelElements[t].css("display", "none");
          for (t = 0; t < this._titleLabelElements.length; t++)
            this._titleLabelElements[t].css("display", "none");
          for (var e = 0; e < this._textLabelElements.length; e++)
            this._textLabelElements[e].css("display", "none");
          this._backgroundElement.css("display", "none"),
            this._containerElement.removeClass("closeDialogPopupAnimation");
        }),
        (e.prototype.layout = function (t, e, n, s, i, o, a, l) {
          if (
            ((this._orientation = t),
            (this._gameContainerArea = e),
            (this._gameArea = n),
            (this._isControlPanelOpen = o),
            (this._showingInfoBar = a),
            (this._gameMarginTop = l),
            (this._hasDesktopGui = s),
            null != e)
          ) {
            if (t === tk_common.constants.OrientationEnum.LANDSCAPE)
              this._dialogContentContainerElement.css(
                "-webkit-transform",
                "none"
              ),
                this._dialogContentContainerElement.css(
                  "-moz-transform",
                  "none"
                ),
                this._dialogContentContainerElement.css(
                  "-ms-transform",
                  "none"
                ),
                this._containerElement.css("top", "150px"),
                this._backgroundElement.css("left", 0),
                this._backgroundElement.css("top", 0),
                this._backgroundElement.css("border-radius", "15px"),
                this._backgroundElement.css("opacity", 0.8),
                this._dialogContentContainerElement.css("top", ""),
                null !=
                  this._titleLabelElements[this._currentTitleLabelIndex] &&
                  this._titleLabelElements[this._currentTitleLabelIndex].css(
                    "font-size",
                    "40px"
                  ),
                this._currentType === tk_common.slots.gui.DialogTypeEnum.LOADER
                  ? (this._titleDividerElement.css("display", "none"),
                    this._dialogContentContainerElement.css("width", "285px"),
                    this._dialogContentContainerElement.css("height", "285px"),
                    this._containerElement.css("height", "285px"),
                    this._containerElement.css("width", "285px"),
                    this._containerElement.css("left", "0"),
                    this._containerElement.css("top", "0"),
                    this._containerElement.css("padding-top", ""),
                    this._backgroundElement.css("width", "1280px"),
                    this._backgroundElement.css("height", "720px"),
                    this._backgroundElement.css("border-radius", "0"),
                    this._backgroundElement.css("opacity", 1),
                    this._loaderAnimationContainerElement.css(
                      "display",
                      "block"
                    ),
                    this._loaderAnimationContainerElement.css("left", "545px"),
                    this._loaderAnimationContainerElement.css("top", "237px"),
                    this._loaderAnimationContainerElement.css("width", "180px"),
                    this._loaderAnimationContainerElement.css(
                      "height",
                      "180px"
                    ),
                    this._loaderAnimationElement.css("width", "190px"),
                    this._loaderAnimationElement.css("height", "190px"),
                    this._loaderAnimationElement.css("top", "0"),
                    this._loaderAnimationElement.css("left", "0"))
                  : this._currentType ===
                    tk_common.slots.gui.DialogTypeEnum.SLOW_CONNECTION
                  ? (this._textLabelElements[this._currentTextLabelIndex].css(
                      "font-size",
                      "32px"
                    ),
                    this._titleDividerElement.css("display", "none"),
                    this._textContainerElement.css("height", ""),
                    this._textContainerElement.css("width", "265px"),
                    this._textContainerElement.css("top", "195px"),
                    this._textContainerElement.css("left", "10px"),
                    this._dialogContentContainerElement.css("width", "285px"),
                    this._dialogContentContainerElement.css("height", "285px"),
                    this._containerElement.css("height", "285px"),
                    this._containerElement.css("width", "285px"),
                    this._containerElement.css("left", "500px"),
                    this._containerElement.css("top", "180px"),
                    this._containerElement.css("padding-top", ""),
                    this._backgroundElement.css("width", "285px"),
                    this._backgroundElement.css("height", "285px"),
                    this._loaderAnimationContainerElement.css("left", "50px"),
                    this._loaderAnimationContainerElement.css("top", "21px"),
                    this._loaderAnimationContainerElement.css("width", "180px"),
                    this._loaderAnimationContainerElement.css(
                      "height",
                      "180px"
                    ),
                    this._loaderAnimationElement.css("width", "190px"),
                    this._loaderAnimationElement.css("height", "190px"),
                    this._loaderAnimationElement.css("top", "0"),
                    this._loaderAnimationElement.css("left", "0"))
                  : (this._containerElement.css("height", "355px"),
                    this._containerElement.css("top", "130px"),
                    this._textContainerElement.css("height", "85px"),
                    this._textContainerElement.css("top", "110px"),
                    this._textContainerElement.css("width", "565px"),
                    this._textContainerElement.css("left", "25px"),
                    this._titleTextContainerElement.css("top", "30px"),
                    this._dialogContentContainerElement.css("width", "625px"),
                    this._containerElement.css("width", "625px"),
                    this._containerElement.css("padding-top", 0),
                    this._backgroundElement.css("width", "625px"),
                    this._backgroundElement.css("height", "355px"),
                    this._titleDividerElement.css(
                      "border-bottom",
                      "1.5px solid #5f6561"
                    ),
                    this._titleDividerElement.css("left", 0),
                    this._titleDividerElement.css("top", "90px"),
                    this._titleDividerElement.css("width", "625px"),
                    this._containerElement.css("left", "330px"),
                    this._buttonsContainerElement.css("left", "-17px"),
                    this._buttonsContainerElement.css("top", "208px"),
                    (this._buttonManager.minWidth = "200px"),
                    (this._buttonManager.paddingTop = "8px"),
                    (this._buttonManager.paddingBottom = "8px"),
                    (this._buttonManager.paddingLeft = "10px"),
                    (this._buttonManager.paddingRight = "10px"),
                    (this._buttonManager.marginLeft = "20px"),
                    (this._buttonManager.marginRight = "10px"),
                    (this._buttonManager.marginBottom = "0"),
                    (this._buttonManager.fontSize = "54px"),
                    (this._buttonManager.borderSize = "4px"),
                    (this._buttonManager.borderRadius = "90px"),
                    (this._currentType !==
                      tk_common.slots.gui.DialogTypeEnum
                        .PLAY_TIME_EXCEEDED_LOST_MONEY &&
                      this._currentType !==
                        tk_common.slots.gui.DialogTypeEnum
                          .PLAY_TIME_EXCEEDED_WON_MONEY) ||
                      !this._showRealityCheckHistoryButton ||
                      ((this._buttonManager.minWidth = "155px"),
                      (this._buttonManager.fontSize = "34px")));
            else {
              var r = e.width / 1280,
                c = 1280 / e.width,
                h = e.height - (n.height * r - l * r);
              this._containerElement.css("height", h + "px"),
                this._containerElement.css("top", l + n.height + "px"),
                this._containerElement.css("left", 0),
                this._containerElement.css("width", e.width * c + "px"),
                this._backgroundElement.css("border-radius", "0px"),
                this._backgroundElement.css("left", 0),
                this._backgroundElement.css("top", 0),
                this._backgroundElement.css("width", e.width * c + "px"),
                this._backgroundElement.css("height", h * c + "px"),
                this._titleLabelElements[this._currentTitleLabelIndex].css(
                  "font-size",
                  "72px"
                ),
                this._backgroundElement.css("opacity", 1),
                this._backgroundElement.css("top", "165px"),
                this._dialogContentContainerElement.css(
                  "width",
                  e.width * c + "px"
                ),
                this._dialogContentContainerElement.css(
                  "top",
                  h * c * 0.5 + (200 * c - 40) + "px"
                );
              this._dialogContentContainerElement.css("top", "50px"),
                1,
                this._containerElement.css("top", 0.4 * e.height * c + "px"),
                this._backgroundElement.css("height", e.height * c + "px"),
                this._dialogContentContainerElement.css(
                  "-webkit-transform",
                  "scale(1)"
                ),
                this._dialogContentContainerElement.css(
                  "-webkit-transform-origin",
                  "50% 0 0px"
                ),
                this._dialogContentContainerElement.css(
                  "-moz-transform",
                  "scale(1)"
                ),
                this._dialogContentContainerElement.css(
                  "-moz-transform-origin",
                  "50% 0 0px"
                ),
                this._dialogContentContainerElement.css(
                  "-ms-transform",
                  "scale(1)"
                ),
                this._dialogContentContainerElement.css(
                  "-ms-transform-origin",
                  "50% 0 0px"
                ),
                this._currentType === tk_common.slots.gui.DialogTypeEnum.LOADER
                  ? (this._titleDividerElement.css("display", "none"),
                    this._dialogContentContainerElement.css("width", "285px"),
                    this._dialogContentContainerElement.css("height", "285px"),
                    this._containerElement.css("height", "285px"),
                    this._containerElement.css("width", "285px"),
                    this._containerElement.css("left", "0"),
                    this._containerElement.css("top", "0"),
                    this._containerElement.css("padding-top", ""),
                    this._backgroundElement.css("width", "1280px"),
                    this._backgroundElement.css("height", e.height * r + "px"),
                    this._backgroundElement.css("border-radius", "0"),
                    this._backgroundElement.css("opacity", 1),
                    this._loaderAnimationContainerElement.css(
                      "display",
                      "block"
                    ),
                    this._loaderAnimationContainerElement.css("left", "535px"),
                    this._loaderAnimationContainerElement.css(
                      "top",
                      0.5 * e.height - l - 75 * r + "px"
                    ),
                    this._loaderAnimationContainerElement.css("width", "320px"),
                    this._loaderAnimationContainerElement.css(
                      "height",
                      "320px"
                    ),
                    this._loaderAnimationElement.css("width", "320px"),
                    this._loaderAnimationElement.css("height", "320px"),
                    this._loaderAnimationElement.css("top", "0"),
                    this._loaderAnimationElement.css("left", "0"))
                  : this._currentType ===
                    tk_common.slots.gui.DialogTypeEnum.SLOW_CONNECTION
                  ? (this._textContainerElement.css("height", ""),
                    this._textContainerElement.css("width", "1280px"),
                    this._textContainerElement.css("left", "0px"),
                    this._loaderAnimationContainerElement.css("top", ""),
                    this._loaderAnimationContainerElement.css("left", "380px"),
                    this._loaderAnimationContainerElement.css("width", "520px"),
                    this._textContainerElement.css("top", "720px"),
                    this._loaderAnimationContainerElement.css(
                      "height",
                      "300px"
                    ),
                    this._loaderAnimationContainerElement.css("top", "200px"),
                    this._loaderAnimationElement.css("width", "520px"),
                    this._loaderAnimationElement.css("height", "520px"),
                    this._loaderAnimationElement.css("top", 0),
                    this._loaderAnimationElement.css("left", ""),
                    this._textLabelElements[this._currentTextLabelIndex].css(
                      "font-size",
                      "70px"
                    ),
                    this._textLabelElements[this._currentTextLabelIndex].css(
                      "padding-left",
                      0
                    ),
                    this._textLabelElements[this._currentTextLabelIndex].css(
                      "padding-right",
                      0
                    ),
                    this._textLabelElements[this._currentTextLabelIndex].css(
                      "padding-top",
                      0
                    ))
                  : (this._titleDividerElement.css(
                      "border-bottom",
                      "2.5px solid #4e4e4e"
                    ),
                    this._titleDividerElement.css("width", "540px"),
                    this._titleDividerElement.css("left", "370px"),
                    this._textContainerElement.css("height", "210px"),
                    this._titleTextContainerElement.css("top", "225px"),
                    this._titleDividerElement.css("top", "330px"),
                    this._textContainerElement.css("top", "380px"),
                    this._buttonsContainerElement.css("top", "590px"),
                    (this._buttonManager.minWidth = "360px"),
                    (this._buttonManager.paddingTop = "8px"),
                    (this._buttonManager.paddingBottom = "8px"),
                    (this._buttonManager.paddingLeft = "15px"),
                    (this._buttonManager.paddingRight = "15px"),
                    (this._buttonManager.marginLeft = "10px"),
                    (this._buttonManager.marginRight = "60px"),
                    (this._buttonManager.marginBottom = "30px"),
                    (this._buttonManager.fontSize = "90px"),
                    (this._buttonManager.borderSize = "7px"),
                    (this._buttonManager.borderRadius = "90px"),
                    (this._currentType !==
                      tk_common.slots.gui.DialogTypeEnum
                        .PLAY_TIME_EXCEEDED_LOST_MONEY &&
                      this._currentType !==
                        tk_common.slots.gui.DialogTypeEnum
                          .PLAY_TIME_EXCEEDED_WON_MONEY) ||
                      !this._showRealityCheckHistoryButton ||
                      ((this._buttonManager.paddingLeft = "20px"),
                      (this._buttonManager.paddingRight = "20px"),
                      (this._buttonManager.minWidth = "200px"),
                      (this._buttonManager.fontSize = "70px")),
                    this._textContainerElement.css("width", "850px"),
                    this._textContainerElement.css("left", "215px"),
                    this._titleTextContainerElement.css("height", "100px"));
            }
            TweenMax.delayedCall(0.3, this.updateTextLabelSize, [], this),
              this.updateTextLabelSize(),
              this._buttonManager.layout(t, e, n);
          }
        }),
        (e.prototype.updateTextLabelSize = function () {
          var t = 35;
          this._orientation === tk_common.constants.OrientationEnum.PORTRAIT &&
            (t = 55),
            this._titleTextContainerElement.textfill({
              innerTag: "label",
              maxFontPixels: t + 10,
            }),
            this._textContainerElement.textfill({
              innerTag: "label",
              maxFontPixels: t,
            });
        }),
        (e.prototype.buildContent = function (e, n) {
          var s = n.createDivElement(e, "dialogContainer"),
            i = n.createDivElement(s, "dialogBackground");
          i.addClass("dialogBackground"),
            (this._dialogContentContainerElement = n.createDivElement(
              s,
              "dialogContentContainerElement"
            ));
          var o = n.createDivElement(
            this._dialogContentContainerElement,
            "titleTextContainerElement"
          );
          o.addClass("overlayDialogLabelContainer");
          var a,
            l = n.createLabelTextElement(
              o,
              "outOfMoneyDialogTitleTextLabel",
              "notificationPageOutOfMoneyTitle_uc"
            );
          l.addClass("dialogLabel"),
            l.css("position", "relative"),
            (a =
              void 0 === this._realityCheckDialogTitlePhraseId
                ? n.createLabelTextElement(
                    o,
                    "notificationPagePlayTimeExceededLabel",
                    "notificationPagePlayTimeExceededDialogTitle_uc"
                  )
                : n.createLabelTextElement(
                    o,
                    "notificationPagePlayTimeExceededLabel",
                    this._realityCheckDialogTitlePhraseId
                  )).addClass("dialogLabel"),
            a.css("position", "relative");
          var r = n.createLabelTextElement(
            o,
            "freeRoundsFoundDialogTitleTextLabel",
            "presentationPageFreeRoundProgramFound_uc"
          );
          r.addClass("dialogLabel"), r.css("position", "relative");
          var c = n.createLabelTextElement(
            o,
            "freeRoundsCompleteTitleTextLabel",
            "totalPayoutInFreeRounds_uc"
          );
          c.addClass("dialogLabel"), c.css("position", "relative");
          var h = n.createLabelTextElement(
            o,
            "topSpinRoundsFoundDialogTitleTextLabel",
            "topSpinsFoundDialogTitle_uc"
          );
          h.addClass("dialogLabel"), h.css("position", "relative");
          var u = n.createLabelTextElement(
            o,
            "restoreFoundDialogTitleTextLabel",
            "notificationPageRestoreStateTitle_uc"
          );
          u.addClass("dialogLabel"), u.css("position", "relative");
          var p = n.createLabelTextElement(
            o,
            "restoreCompleteDialogTitleTextLabel",
            "notificationPageRestoreStateExitTitle_uc"
          );
          p.addClass("dialogLabel"), p.css("position", "relative");
          var d = n.createLabelTextElement(
            o,
            "gameRoundRolledBackDialogTitleTextLabel",
            "notificationPageGameRoundRolledBackExitTitle_uc"
          );
          d.addClass("dialogLabel"), d.css("position", "relative");
          var m = n.createLabelTextElement(
            o,
            "technicalErrorDialogTitleTextLabel",
            "notificationPageRecoverStateTitle_uc"
          );
          m.addClass("dialogLabel"), m.css("position", "relative");
          var _ = n.createLabelTextElement(
            o,
            "errorDialogDeviceNotSupportedTitleTextLabel",
            "errorDialogDeviceNotSupportedTitle_uc"
          );
          _.addClass("dialogLabel"), _.css("position", "relative");
          var g = n.createLabelTextElement(
            o,
            "jurisdictionBlockedDialogTitleTextLabel",
            "errorDialogBlockedJurisdictionTitle_uc"
          );
          g.addClass("dialogLabel"), g.css("position", "relative");
          var E = n.createLabelTextElement(
            o,
            "serverNotRespondingDialogTitleTextLabel",
            "notificationPageServerNotRespondingTitle_uc"
          );
          E.addClass("dialogLabel"), E.css("position", "relative");
          var b = n.createLabelTextElement(
            o,
            "wantToPlayForRealTitleTextLabel",
            "notificationPageNotificationDialogText_uc"
          );
          b.addClass("dialogLabel"), b.css("position", "relative");
          var B = n.createLabelTextElement(
            o,
            "youNowPlayForOwnMoneyTitleTextLabel",
            "notificationPageNotificationDialogText_uc"
          );
          B.addClass("dialogLabel"), B.css("position", "relative");
          var x = n.createLabelTextElement(
            o,
            "playerLimitReachedDialogTitleTextLabel",
            "notificationPageNotificationDialogText_uc"
          );
          x.addClass("dialogLabel"), x.css("position", "relative");
          var C = n.createLabelTextElement(
            o,
            "lossLimitReachedDialogTitleTextLabel",
            "notificationPageLimitReachedTitle_nc"
          );
          C.addClass("dialogLabel"), C.css("position", "relative");
          var f = n.createLabelTextElement(
            o,
            "regulationDisclaimerTitleTextLabel",
            "regulationDisclaimerTitle_uc"
          );
          f.addClass("dialogLabel"), f.css("position", "relative");
          var k = n.createLabelTextElement(
            o,
            "invalidPlayerSessionTitleTextLabel",
            "errorDialogInvalidPlayerSessionTitle_uc"
          );
          k.addClass("dialogLabel"), k.css("position", "relative");
          var y = n.createLabelTextElement(
            o,
            "customDialogTitleTextLabel",
            "customDialogTitle_uc"
          );
          y.addClass("dialogLabel"), y.css("position", "relative");
          var S = n.createLabelTextElement(
            o,
            "betRejectedTitleTextLabel",
            "notificationBetRejectedErrorDialogTitle_nc"
          );
          S.addClass("dialogLabel"), S.css("position", "relative");
          var T = [l, a, r, c, u, p, d, m, E, b, B, x, C, h, g, _, f, k, y, S],
            L = n.createDivElement(
              this._dialogContentContainerElement,
              "popupDialogTitleDivider"
            ),
            w = n.createDivElement(
              this._dialogContentContainerElement,
              "textContainerElement"
            );
          w.addClass("overlayDialogLabelContainer");
          var v = n.createLabelTextElement(
            w,
            "outOfMoneyDialogTextLabel",
            "notificationPageOutOfMoneyText_nc"
          );
          v.addClass("dialogLabel"), v.css("position", "relative");
          var P = n.createLabelTextElement(
            w,
            "connectionSlowTextLabel",
            "notificationPageConnectionSlowDialogText_nc"
          );
          P.addClass("dialogLabel"), P.css("position", "relative");
          var I = n.createLabelTextElement(
            w,
            "youHaveBeenPlayingAndLostTextLabel",
            this._realityCheckDialogLostPhraseId ||
              "notificationPagePlayTimeExceededDialogTextLost_vars_playTime_totalLossDuringPlay_nc"
          );
          I.addClass("dialogLabel"), I.css("position", "relative");
          var M = n.createLabelTextElement(
            w,
            "youHaveBeenPlayingAndWonTextLabel",
            this._realityCheckDialogWonPhraseId ||
              "notificationPagePlayTimeExceededDialogTextWon_vars_playTime_totalWinDuringPlay_nc"
          );
          M.addClass("dialogLabel"), M.css("position", "relative");
          var O = n.createLabelTextElement(
            w,
            "freeRoundsFoundDialogTextLabel",
            "presentationPageFreeRoundInfoRoundsRemaining_vars_freeRoundsLeft-p_uc"
          );
          O.addClass("dialogLabel"), O.css("position", "relative");
          var D = n.createLabelTextElement(
            w,
            "freeRoundsCompletedTextLabel",
            "presentationPageFreeRoundTotalWin_vars_freeRoundTotalWin"
          );
          D.addClass("dialogLabel"), D.css("position", "relative");
          var R = n.createLabelTextElement(
            w,
            "topSpinsRoundsFoundDialogTextLabel",
            "topSpinsFoundDialogText_nc"
          );
          R.addClass("dialogLabel"), R.css("position", "relative");
          var A = n.createLabelTextElement(
            w,
            "topSpinsRoundsCompletedTextLabel",
            "topSpinsCompleteDialogText_nc"
          );
          A.addClass("dialogLabel"), A.css("position", "relative");
          var F = n.createLabelHtmlElement(
            w,
            "restoreFoundDialogTextLabel",
            "notificationPageUnfinishedGameRoundText_nc"
          );
          F.addClass("dialogLabel"), F.css("position", "relative");
          var G = n.createLabelHtmlElement(
            w,
            "restoreCompleteDialogTextLabel",
            "notificationPageRameRoundRestoredText_nc"
          );
          G.addClass("dialogLabel"), G.css("position", "relative");
          var W = n.createLabelHtmlElement(
            w,
            "gameRoundRolledBackTextLabel",
            "notificationPageGameRoundRolledBackText_nc"
          );
          W.addClass("dialogLabel"), W.css("position", "relative");
          var H = n.createLabelHtmlElement(
            w,
            "technicalErrorTextLabel",
            "notificationPageUnhandledErrorText_nc"
          );
          H.addClass("dialogLabel"), H.css("position", "relative");
          var z = n.createLabelHtmlElement(
            w,
            "errorDeviceNotSupportedTextLabel",
            "errorDialogDeviceNotSupportedText_nc"
          );
          z.addClass("dialogLabel"), z.css("position", "relative");
          var U = n.createLabelHtmlElement(
            w,
            "jurisdictionBlockedTextLabel",
            "errorDialogBlockedJurisdictionText_nc"
          );
          U.addClass("dialogLabel"), U.css("position", "relative");
          var V = n.createLabelHtmlElement(
            w,
            "serverNotRespondingTextLabel",
            "notificationPageServerNotRespondingText_nc"
          );
          V.addClass("dialogLabel"), V.css("position", "relative");
          var N = n.createLabelHtmlElement(
            w,
            "wantToPlayForRealTextLabel",
            "notificationPageLoginDialogText_nc"
          );
          N.addClass("dialogLabel"), N.css("position", "relative");
          var j = n.createLabelHtmlElement(
            w,
            "nowPlayingForYourOwnMoneyTextLabel",
            "presentationPageAccountDisclaimer_nc"
          );
          j.addClass("dialogLabel"), j.css("position", "relative");
          var Q = n.createLabelHtmlElement(
            w,
            "playerLimitReachedTextLabel",
            "notificationPagePlayerSpendingLimitReachedText_nc"
          );
          Q.addClass("dialogLabel"), Q.css("position", "relative");
          var K = n.createLabelHtmlElement(
            w,
            "lossLimitReachedTextLabel",
            "notificationPageLossLimitReachedText_nc"
          );
          K.addClass("dialogLabel"), K.css("position", "relative");
          var Y = n.createLabelHtmlElement(
            w,
            "regulationDisclaimerTextLabel",
            "regulationDisclaimerText_nc"
          );
          Y.addClass("dialogLabel"), Y.css("position", "relative");
          var q = n.createLabelHtmlElement(
            w,
            "invalidPlayerSessionTextLabel",
            "errorDialogInvalidPlayerSessionText_nc"
          );
          q.addClass("dialogLabel"), q.css("position", "relative");
          var Z = n.createLabelHtmlElement(
            w,
            "customDialogTextLabel",
            "customDialogText_nc"
          );
          Z.addClass("dialogLabel"), Z.css("position", "relative");
          var X = n.createLabelHtmlElement(
            w,
            "betRejectedTextLabel",
            "notificationBetRejectedErrorDialogText_nc"
          );
          X.addClass("dialogLabel"), X.css("position", "relative");
          var J = n.createLabelHtmlElement(
            w,
            "sessionLimitReached",
            "notificationPageSessionLimitReachedText_nc"
          );
          J.addClass("dialogLabel"), J.css("position", "relative");
          var $ = [
              v,
              P,
              I,
              M,
              O,
              F,
              G,
              D,
              W,
              H,
              V,
              N,
              j,
              Q,
              K,
              R,
              A,
              U,
              z,
              Y,
              q,
              Z,
              X,
              J,
            ],
            tt = n.createDivElement(
              this._dialogContentContainerElement,
              "buttonsContainer"
            );
          tt.addClass("overlayDialogButtonsContainer"),
            tt.css("position", "relative");
          var et = n.createDivElement(tt, "dialogButtonOk");
          et.addClass("controlPanelButton"),
            et.addClass("overlayDialogButton"),
            et.css("position", "relative");
          var nt = n.createLabelTextElement(
            et,
            "dialogButtonLabelOk",
            "notificationPageOkOption_uc"
          );
          nt.addClass("controlPanelButtonLabel"),
            nt.css("position", "relative");
          var st = n.createDivElement(tt, "dialogButtonCancel");
          st.addClass("controlPanelButton"),
            st.addClass("overlayDialogButton"),
            st.css("position", "relative");
          var it = n.createLabelTextElement(
            st,
            "dialogButtonLabelCancel",
            "dialogButtonLabelCancel_uc"
          );
          it.addClass("controlPanelButtonLabel"),
            it.css("position", "relative");
          var ot = n.createDivElement(tt, "dialogButtonDeposit");
          ot.addClass("controlPanelButton"),
            ot.addClass("overlayDialogButton"),
            ot.css("position", "relative");
          var at = n.createLabelTextElement(
            ot,
            "dialogButtonLabelDeposit",
            "notificationPageDepositDialogText_uc"
          );
          at.addClass("controlPanelButtonLabel"),
            at.css("position", "relative");
          var lt,
            rt = n.createDivElement(tt, "dialogButtonAccount");
          rt.addClass("controlPanelButton"),
            rt.addClass("overlayDialogButton"),
            rt.css("position", "relative"),
            (lt =
              void 0 === this._accountButtonPhraseId
                ? n.createLabelTextElement(
                    rt,
                    "dialogButtonLabelAccount",
                    "homePageAccountButton_uc"
                  )
                : n.createLabelTextElement(
                    rt,
                    "dialogButtonLabelAccount",
                    this._accountButtonPhraseId
                  )).addClass("controlPanelButtonLabel"),
            lt.css("position", "relative");
          var ct = n.createDivElement(tt, "dialogButtonBet");
          ct.addClass("controlPanelButton"),
            ct.addClass("overlayDialogButton"),
            ct.css("position", "relative");
          var ht = n.createLabelTextElement(
            ct,
            "dialogButtonLabelBet",
            "betButtonBetTitle_uc"
          );
          ht.addClass("controlPanelButtonLabel"),
            ht.css("position", "relative");
          var ut = n.createDivElement(tt, "dialogButtonYes");
          ut.addClass("controlPanelButton"),
            ut.addClass("overlayDialogButton"),
            ut.css("position", "relative");
          var pt = n.createLabelTextElement(
            ut,
            "dialogButtonLabelYes",
            "notificationPageYesOption_uc"
          );
          pt.addClass("controlPanelButtonLabel"),
            pt.css("position", "relative");
          var dt = n.createDivElement(tt, "dialogButtonNo");
          dt.addClass("controlPanelButton"),
            dt.addClass("overlayDialogButton"),
            dt.css("position", "relative");
          var mt = n.createLabelTextElement(
            dt,
            "dialogButtonLabelNo",
            "notificationPageNoOption_uc"
          );
          mt.addClass("controlPanelButtonLabel"),
            mt.css("position", "relative");
          var _t = n.createDivElement(tt, "dialogButtonLogin");
          _t.addClass("controlPanelButton"),
            _t.addClass("overlayDialogButton"),
            _t.css("position", "relative");
          var gt = n.createLabelTextElement(
            _t,
            "dialogButtonLabelLogin",
            "LOGIN"
          );
          gt.addClass("controlPanelButtonLabel"),
            gt.css("position", "relative");
          var Et = n.createDivElement(tt, "dialogButtonLogout");
          Et.addClass("controlPanelButton"),
            Et.addClass("overlayDialogButton"),
            Et.css("position", "relative");
          var bt = n.createLabelTextElement(
            Et,
            "dialogButtonLabelLogout",
            "logOutButton_uc"
          );
          bt.addClass("controlPanelButtonLabel"),
            bt.css("position", "relative");
          var Bt = n.createDivElement(tt, "dialogButtonContinue");
          Bt.addClass("controlPanelButton"),
            Bt.addClass("overlayDialogButton"),
            Bt.css("position", "relative");
          var xt = n.createLabelTextElement(
            Bt,
            "dialogButtonLabelContinue",
            "CONTINUE"
          );
          xt.addClass("controlPanelButtonLabel"),
            xt.css("position", "relative");
          for (var Ct = [], ft = [], kt = 0; kt < 3; kt++) {
            var yt = n.createDivElement(tt, "customButton" + kt);
            yt.addClass("controlPanelButton"),
              yt.addClass("overlayDialogButton"),
              yt.css("position", "relative"),
              Ct.push(yt);
            var St = n.createLabelTextElement(
              yt,
              "customButtonLabel" + kt,
              "customButtonText" + kt + "_nc"
            );
            St.addClass("controlPanelButtonLabel"),
              St.css("position", "relative"),
              ft.push(St);
          }
          var Tt = n.createDivElement(
              this._dialogContentContainerElement,
              "loaderAnimationContainerElement"
            ),
            Lt = n.createDivElement(Tt, "loaderAnimationImage");
          Lt.addClass("loaderSpinner"),
            (this._loaderAnimationElement = Lt),
            (this._loaderAnimationContainerElement = Tt),
            (this._containerElement = s),
            (this._backgroundElement = i),
            (this._titleTextContainerElement = o),
            (this._titleDividerElement = L),
            (this._textContainerElement = w),
            (this._buttonsContainerElement = tt),
            (this._titleLabelElements = T),
            (this._textLabelElements = $),
            (this._buttonElements = [
              et,
              st,
              ot,
              ct,
              ut,
              dt,
              _t,
              Bt,
              rt,
              Et,
              Ct[0],
              Ct[1],
              Ct[2],
            ]);
          var wt = (this._guiButtonIdToDialogButtonMap = {});
          (wt[tk_common.slots.gui.GuiButtonIds.OK] = 0),
            (wt[tk_common.slots.gui.GuiButtonIds.CANCEL] = 1),
            (wt[tk_common.slots.gui.GuiButtonIds.DEPOSIT] = 2),
            (wt[tk_common.slots.gui.GuiButtonIds.BET] = 3),
            (wt[tk_common.slots.gui.GuiButtonIds.YES] = 4),
            (wt[tk_common.slots.gui.GuiButtonIds.NO] = 5),
            (wt[tk_common.slots.gui.GuiButtonIds.LOGIN] = 6),
            (wt[tk_common.slots.gui.GuiButtonIds.CONTINUE] = 7),
            (wt[tk_common.slots.gui.GuiButtonIds.ACCOUNT] = 8),
            (wt[tk_common.slots.gui.GuiButtonIds.LOGOUT] = 9),
            (wt[tk_common.slots.gui.GuiButtonIds.CUSTOM0] = 10),
            (wt[tk_common.slots.gui.GuiButtonIds.CUSTOM1] = 11),
            (wt[tk_common.slots.gui.GuiButtonIds.CUSTOM2] = 12),
            (this._buttonLabelElements = [
              nt,
              it,
              ot,
              ht,
              pt,
              mt,
              gt,
              Bt,
              lt,
              bt,
              ft[0],
              ft[1],
              ft[2],
            ]),
            (this._buttonManager = new t.ButtonManager(
              this._buttonElements,
              this._buttonLabelElements
            )),
            (this._buttonManager.fontSize = "20px"),
            (this._buttonManager.minWidth = "100px"),
            this._buttonManager.ButtonClicked.add(
              this.handleButtonClicked,
              this
            ),
            this.hideComponents(),
            (this._currentTextLabelIndex = 0),
            (this._currentTitleLabelIndex = 0),
            (this._currentButtonSelections = [
              tk_common.slots.gui.GuiButtonIds.OK,
              tk_common.slots.gui.GuiButtonIds.CANCEL,
              tk_common.slots.gui.GuiButtonIds.DEPOSIT,
              tk_common.slots.gui.GuiButtonIds.BET,
              tk_common.slots.gui.GuiButtonIds.YES,
              tk_common.slots.gui.GuiButtonIds.NO,
              tk_common.slots.gui.GuiButtonIds.LOGIN,
              tk_common.slots.gui.GuiButtonIds.CONTINUE,
              tk_common.slots.gui.GuiButtonIds.ACCOUNT,
              tk_common.slots.gui.GuiButtonIds.LOGOUT,
              tk_common.slots.gui.GuiButtonIds.CUSTOM0,
              tk_common.slots.gui.GuiButtonIds.CUSTOM1,
              tk_common.slots.gui.GuiButtonIds.CUSTOM2,
            ]);
        }),
        e
      );
    })();
    t.Dialog = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function () {
      function t(t, e, n) {
        (this._gameInstanceId = n),
          (this._fadeElement = e),
          this._fadeElement.css("left", "-1px"),
          this._fadeElement.css("top", "-1px"),
          this._fadeElement.css("pointer-events", "none"),
          this._fadeElement.css("display", "none");
      }
      return (
        (t.prototype.show = function (t, e, n) {
          var s = this;
          t
            ? (this._fadeElement.css("display", "block"),
              this._fadeElement.removeClass("fadedOut"),
              e
                ? n && n(t)
                : tk_common.time.setSafeTimeout(
                    this._gameInstanceId,
                    function () {
                      s.handleFadeOutComplete(), n && n(t);
                    },
                    200
                  ))
            : e
            ? (this._fadeElement.css("display", "none"),
              this._fadeElement.addClass("fadedOut"),
              n && n(t))
            : (this._fadeElement.addClass("fadedOut"),
              tk_common.time.setSafeTimeout(
                this._gameInstanceId,
                function () {
                  s.handleFadeOutComplete(), n && n(t);
                },
                200
              )),
            (this._visible = t);
        }),
        (t.prototype.handleFadeOutComplete = function () {
          this._fadeElement.css("display", "none");
        }),
        (t.prototype.layout = function (t, e, n, s) {
          if (t === tk_common.constants.OrientationEnum.LANDSCAPE)
            this._fadeElement.css("height", "722px"),
              this._fadeElement.css("width", "1282px");
          else {
            var i = 1280 / e.width;
            this._fadeElement.css("height", e.height * i + 1 + "px"),
              this._fadeElement.css("width", e.width * i + 1 + "px");
          }
        }),
        t
      );
    })();
    t.FadeOverlay = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function () {
      function e(t, e) {
        (this._isForReal = !1),
          (this._gameTitlePhraseId = t),
          (this._guiSettingsHelper = e),
          (this.onGuiButtonClicked =
            new tk_common.slots.gui.GuiButtonClickedSignal());
      }
      return (
        (e.prototype.initTimeLabel = function (t) {
          (this._timeLabelElement = t), this._timeLabelElement.text("00:00");
        }),
        // (e.prototype.initPlayModeRealLabel = function (t) {
        //   (this._playModeRealLabelElement = t),
        //     this._playModeRealLabelElement.css("white-space", "nowrap");
        // }),
        (e.prototype.initPlayModeFreeLabel = function (t) {
          this._playModeFreeLabelElement = t;
          //this._playModeFreeLabelElement.css("white-space", "nowrap");
        }),
        (e.prototype.initGameRulesButton = function (e, n, s, i) {
          var o = this;
          (this._gameRulesButtonContainerElement = e),
            (this._gameRulesIconElement = s),
            (this._gameRulesButtonBackgroundElement = n),
            (this._gameRulesButton = new t.SpriteButton(
              tk_common.slots.gui.GuiButtonIds.GAME_RULES,
              !0,
              s,
              i,
              e
            )),
            this._gameRulesButton.Clicked.add(
              this.handleGuiButtonClicked,
              this
            ),
            this._guiSettingsHelper.onOverrideStateChanged.add(function () {
              o._gameRulesButton.enabled =
                o._guiSettingsHelper.getButtonEnabledOverrideState(
                  "gameRulesButton"
                );
            });
        }),
        (e.prototype.handleGuiButtonClicked = function (t) {
          this.onGuiButtonClicked.dispatch(t);
        }),
        // (e.prototype.setPlayMode = function (t) {
        //   (this._isForReal = t),
        //     this._guiSettingsHelper.isFieldAllowed("playmode")
        //       ? t
        //         ? (this._playModeRealLabelElement.css("display", "block"),
        //           this._playModeFreeLabelElement.css("display", "none"))
        //         : (this._playModeRealLabelElement.css("display", "none"),
        //           this._playModeFreeLabelElement.css("display", "block"))
        //       : (this._playModeRealLabelElement.css("display", "none"),
        //         this._playModeFreeLabelElement.css("display", "none"));
        // }),
        (e.prototype.initGameNameLabel = function (t) {
          //( this._gameNameLabelElement = t),
          // this._gameNameLabelElement.css("white-space", "nowrap");
        }),
        (e.prototype.initVersionLabel = function (t) {
          this._versionLabelElement = t;
        }),
        (e.prototype.setVersion = function (t) {
          //this._versionLabelElement.text(t);
        }),
        (e.prototype.show = function () {
          //   this._guiSettingsHelper.isFieldAllowed("clock") &&
          //     this._timeLabelElement.css("display", "block"),
          //     this._guiSettingsHelper.isButtonAllowed("gamerules") &&
          //       this._gameRulesButton.show(),
          //     this.setPlayMode(this._isForReal),
          //     this._containerBackgroundElement.css("display", "block"),
          //     //this._infoBarContainerElement.css("display", "block"),
          //     this._guiSettingsHelper.isFieldAllowed("gamename") &&
          //       // this._gameNameLabelElement.css("display", "block"),
          //     this._guiSettingsHelper.isFieldAllowed("clientversion") &&
          //       //this._versionLabelElement.css("display", "block"),
          //     this.updateClock();
        }),
        (e.prototype.hide = function () {
          //   this._guiSettingsHelper.isButtonAllowed("gamerules") &&
          //     this._gameRulesButton.hide(),
          //     //this._infoBarContainerElement.css("display", "none"),
          //     this._timeLabelElement.css("display", "none"),
          //     this._playModeFreeLabelElement.css("display", "none"),
          //     //this._playModeRealLabelElement.css("display", "none"),
          //     this._containerBackgroundElement.css("display", "none"),
          //     this._versionLabelElement.css("display", "none"),
          //     // this._gameNameLabelElement.css("display", "none");
        }),
        (e.prototype.layout = function (t, e, n, s, i) {
          (this._orientation = t),
            s
              ? this.layoutForDesktop(t, e, n, s, i)
              : this.layoutForMobile(t, e, n, s, i);
        }),
        (e.prototype.layoutForMobile = function (t, e, n, s, i) {
          if (null != e)
            if (t === tk_common.constants.OrientationEnum.LANDSCAPE) {
              return;
              //this._infoBarContainerElement.css("top", "696px"),
              // this._infoBarContainerElement.css("left", 0),
              // this._infoBarContainerElement.css("height", "25px"),
              // this._infoBarContainerElement.css("width", "1280px"),
              //   this._timeLabelElement.css("top", "2px"),
              //     this._timeLabelElement.css("left", "12px"),
              //     this._timeLabelElement.css("font-size", "16px"),
              //   this._playModeFreeLabelElement.css("font-size", "16px"),
              //     this._playModeFreeLabelElement.css("top", "2px"),
              //     this._playModeFreeLabelElement.css("left", "75px"),
              // this._playModeRealLabelElement.css("font-size", "16px"),
              // this._playModeRealLabelElement.css("top", "2px"),
              // this._playModeRealLabelElement.css("left", "75px"),
              //   this._versionLabelElement.css("padding-top", "2px"),
              // this._gameNameLabelElement.css("padding-top", "2px"),
              // this._versionLabelElement.css("font-size", "16px"),
              //   this._rightContentElement.css("right", "45px"),
              //   this._logoElement.css("width", "28px"),
              //     this._logoElement.css("height", "28px"),
              //     this._logoElement.css("top", "-1px");
              // this._gameNameLabelElement.css("font-size", "16px");
              var o = "20px";
              //   this._gameRulesButtonContainerElement.css("top", "2px"),
              //     this._gameRulesButtonContainerElement.css("left", "45px"),
              //     this._gameRulesButtonContainerElement.css("width", o),
              //     this._gameRulesButtonContainerElement.css("height", o),
              this._gameRulesButtonBackgroundElement.css("width", o),
                this._gameRulesButtonBackgroundElement.css("height", o),
                this._gameRulesButtonBackgroundElement.removeClass(
                  "circleButtonBackgroundPortrait"
                ),
                this._gameRulesButtonBackgroundElement.addClass(
                  "circleButtonBackgroundLandscape"
                ),
                this._gameRulesIconElement.css("width", o),
                this._gameRulesIconElement.css("height", o),
                this._gameRulesButtonClickElement.css("top", 0),
                this._gameRulesButtonClickElement.css("left", 0),
                this._gameRulesButtonClickElement.css("width", o),
                this._gameRulesButtonClickElement.css("height", o);
            } else {
              var a = 1280 / e.width;
              //   this._infoBarContainerElement.css(
              //     "top",
              //     e.height * a - 75 + "px"
              //   ),
              //     this._infoBarContainerElement.css("left", 0),
              //     this._infoBarContainerElement.css("height", "76px"),
              //     this._infoBarContainerElement.css("width", "1280px"),
              //   this._timeLabelElement.css("left", "25px"),
              //     this._timeLabelElement.css("top", "15px"),
              //     this._timeLabelElement.css("font-size", "31px"),
              //   this._playModeFreeLabelElement.css("font-size", "31px"),
              //     this._playModeFreeLabelElement.css("top", "15px"),
              //     this._playModeFreeLabelElement.css("left", "140px"),
              // this._playModeRealLabelElement.css("font-size", "31px"),
              // this._playModeRealLabelElement.css("top", "15px"),
              // this._playModeRealLabelElement.css("left", "140px"),
              //   this._rightContentElement.css("right", "85px"),
              // this._versionLabelElement.css("font-size", "31px"),
              // this._versionLabelElement.css("padding-top", "15px"),
              // this._gameNameLabelElement.css("padding-top", "15px"),
              //   this._logoElement.css("top", "3px"),
              //     this._logoElement.css("width", "65px"),
              //     this._logoElement.css("height", "65px"),
              // this._gameNameLabelElement.css("font-size", "31px");
              o = "40px";
              return;
              this._gameRulesButtonContainerElement.css("top", "12px"),
                this._gameRulesButtonContainerElement.css("left", "86px"),
                this._gameRulesButtonContainerElement.css("width", o),
                this._gameRulesButtonContainerElement.css("height", o),
                this._gameRulesButtonBackgroundElement.css("width", o),
                this._gameRulesButtonBackgroundElement.css("height", o),
                this._gameRulesButtonBackgroundElement.removeClass(
                  "circleButtonBackgroundPortrait"
                ),
                this._gameRulesButtonBackgroundElement.addClass(
                  "circleButtonBackgroundLandscape"
                ),
                this._gameRulesIconElement.css("width", o),
                this._gameRulesIconElement.css("height", o),
                this._gameRulesButtonClickElement.css("top", 0),
                this._gameRulesButtonClickElement.css("left", 0),
                this._gameRulesButtonClickElement.css("width", o),
                this._gameRulesButtonClickElement.css("height", o);
            }
        }),
        (e.prototype.layoutForDesktop = function (t, e, n, s, i) {
          //   this._infoBarContainerElement.css("top", "698px"),
          //     this._infoBarContainerElement.css("left", 0),
          //     this._infoBarContainerElement.css("height", "25px"),
          //     this._infoBarContainerElement.css("width", "1280px"),
          //   this._timeLabelElement.css("top", "1px"),
          //     this._timeLabelElement.css("left", "12px"),
          //     this._timeLabelElement.css("font-size", "16px"),
          //   this._playModeFreeLabelElement.css("font-size", "16px"),
          //     this._playModeFreeLabelElement.css("top", "1px"),
          //     this._playModeFreeLabelElement.css("left", "88px"),
          // this._playModeRealLabelElement.css("font-size", "16px"),
          // this._playModeRealLabelElement.css("top", "1px"),
          // this._playModeRealLabelElement.css("left", "88px"),
          //   this._versionLabelElement.css("padding-top", "1px"),
          // this._gameNameLabelElement.css("padding-top", "1px"),
          // this._versionLabelElement.css("font-size", "16px"),
          //   this._rightContentElement.css("right", "45px"),
          //   this._logoElement.css("width", "28px"),
          //     this._logoElement.css("height", "28px"),
          //     this._logoElement.css("top", "-2px");
          // this._gameNameLabelElement.css("font-size", "16px");
          var o = "20px";
          return;
          this._gameRulesButtonContainerElement.css("top", "0px"),
            this._gameRulesButtonContainerElement.css("left", "52px"),
            this._gameRulesButtonContainerElement.css("width", o),
            this._gameRulesButtonContainerElement.css("height", o),
            this._gameRulesButtonBackgroundElement.css("width", o),
            this._gameRulesButtonBackgroundElement.css("height", o),
            this._gameRulesButtonBackgroundElement.removeClass(
              "circleButtonBackgroundPortrait"
            ),
            this._gameRulesButtonBackgroundElement.addClass(
              "circleButtonBackgroundLandscape"
            ),
            this._gameRulesIconElement.css("width", o),
            this._gameRulesIconElement.css("height", o),
            this._gameRulesButtonClickElement.css("top", "5px"),
            this._gameRulesButtonClickElement.css("left", "5px"),
            this._gameRulesButtonClickElement.css("width", o),
            this._gameRulesButtonClickElement.css("height", o);
        }),
        (e.prototype.updateClock = function () {
          var t = this,
            e = new Date(),
            n = e.getHours();
          n = this.formatTime(n);
          var s = e.getMinutes();
          e.getSeconds();
          (s = this.formatTime(s)),
            //this._timeLabelElement.text(n + ":" + s),
            setTimeout(function () {
              //return t.updateClock();
            }, 1e3);
        }),
        (e.prototype.formatTime = function (t) {
          return t < 10 && (t = "0" + t), t;
        }),
        (e.prototype.buildContent = function (t, e) {
          return;
          (this._containerElement = t),
            (this._infoBarContainerElement = e.createDivElement(
              t,
              "infoBarContainer"
            )),
            this._infoBarContainerElement.addClass("infoBarBackground"),
            this._infoBarContainerElement.css("background-color", "black"),
            this._infoBarContainerElement.css("pointer-events", "none");
          var n = e.createDivElement(
            this._infoBarContainerElement,
            "infoBarBackground"
          );
          this._containerBackgroundElement = n;
          var s = e.createLabelTextElement(
            this._infoBarContainerElement,
            "infoBarTimeLabel",
            "time_nc"
          );
          s.addClass("infoBarLabelClock"),
            s.css("position", "absolute"),
            this.initTimeLabel(s);
          var i = e.createLabelTextElement(
            this._infoBarContainerElement,
            "infoBarPlayFreeModeLabel",
            "infoBarPlayModeFreePlay_uc"
          );
          i.addClass("infoBarLabelPlayMode"),
            i.css("position", "absolute"),
            this.initPlayModeFreeLabel(i);
          var o = e.createLabelTextElement(
            this._infoBarContainerElement,
            "infoBarPlayRealModeLabel",
            "infoBarPlayModeRealPlay_uc"
          );
          o.addClass("infoBarLabelPlayMode"),
            o.css("position", "absolute"),
            this.initPlayModeRealLabel(o),
            (this._rightContentElement = e.createDivElement(
              this._infoBarContainerElement,
              "infoBarRightContent"
            )),
            this._rightContentElement.css("position", "absolute"),
            this._rightContentElement.css("text-align", "right");
          var a = e.createLabelTextElement(
            this._rightContentElement,
            "infoBarVersionLabel",
            "version_nc"
          );
          a.addClass("infoBarLabelGameInfo"),
            a.css("position", "relative"),
            a.css("white-space", "nowrap"),
            a.css("float", "right"),
            this.initVersionLabel(a);
          var l = e.createLabelTextElement(
            this._rightContentElement,
            "infoBarGameNameLabel",
            this._gameTitlePhraseId
          );
          l.addClass("infoBarLabelGameInfo"),
            l.css("padding-right", "20px"),
            l.css("overflow", "hidden"),
            l.css("position", "relative"),
            l.css("white-space", "nowrap"),
            l.css("float", "right"),
            this.initGameNameLabel(l),
            (this._logoElement = e.createDivElement(
              this._infoBarContainerElement,
              "tkLogo"
            )),
            this._logoElement.addClass("tkLogo"),
            this._logoElement.css("position", "absolute"),
            this._logoElement.css("right", "5px");
          var r = e.createDivElement(
              this._infoBarContainerElement,
              "infoBarGameRulesButtonContainer"
            ),
            c = e.createDivElement(r, "infoBarGameRulesButtonBackground");
          c.addClass("circleButtonBackground");
          var h = e.createDivElement(r, "infoBarGameRulesButtonIcon");
          h.addClass("iconGameRules"),
            (this._gameRulesButtonClickElement = e.createDivElement(
              r,
              "infoBarGameRulesButtonClickElement"
            )),
            this._gameRulesButtonClickElement.css("pointer-events", "all"),
            this.initGameRulesButton(
              r,
              c,
              h,
              this._gameRulesButtonClickElement
            ),
            this.hide();
        }),
        e
      );
    })();
    t.InfoBarManager = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function () {
      function e(t) {
        (this._numberOfRows = 0),
          (this._visible = !0),
          (this._open = !0),
          (this._guiSettingsHelper = t),
          (this.OkButtonClicked = new Phaser.Signal()),
          (this.CancelButtonClicked = new Phaser.Signal());
      }
      return (
        (e.prototype.buildContent = function (e, n) {
          var s = this;
          (this._containerElement = n.createDivElement(e, "numPadContainer")),
            // (this._lockScreenElement = n.createDivElement(
            //   this._containerElement,
            //   "numPadLockScreenElement"
            // )),
            // this._lockScreenElement.css("width", "1280px"),
            // this._lockScreenElement.css("height", "720px"),
            // this._lockScreenElement.css("background-color", "black"),
            // this._lockScreenElement.css("opacity", 0.55),
            // this._lockScreenElement.css("position", "absolute"),
            // this._lockScreenElement.css("display", "none"),
            (this._padContainer = n.createDivElement(
              this._containerElement,
              "padContainer"
            )),
            (this._dialogBackgroundElement = n.createDivElement(
              this._padContainer,
              "numPadBackground"
            )),
            this._dialogBackgroundElement.css("position", "absolute"),
            this._dialogBackgroundElement.css("border-radius", "8px"),
            this._dialogBackgroundElement.css("min-width", "515px"),
            this._dialogBackgroundElement.css("min-height", "450px"),
            this._dialogBackgroundElement.css("background-color", "black"),
            this._dialogBackgroundElement.css("border-width", "4px"),
            this._dialogBackgroundElement.css("left", "-20px"),
            this._dialogBackgroundElement.css("top", "-20px"),
            (this._buttonContainer = n.createDivElement(
              this._padContainer,
              "numPadButtonContainerElement"
            )),
            this._buttonContainer.css("width", "700px"),
            (this._numberButtonElements = []);
          for (var i = [], o = 0; o < 9; o++) {
            (r = n.createDivElement(
              this._buttonContainer,
              "numPadButton" + (o + 1)
            )).addClass("controlPanelButton"),
              r.addClass("overlayDialogButton"),
              r.css("position", "absolute"),
              this._numberButtonElements.push(r),
              (c = n.createLabelTextElement(
                r,
                "numPadLabelButton" + (o + 1),
                (o + 1).toString()
              )).addClass("controlPanelButtonLabel"),
              c.css("position", "relative"),
              i.push(c);
            var a = o - 3 * (p = Math.floor(o / 3));
            r.css("top", 90 * p + "px"), r.css("left", 160 * a + "px");
          }
          (this._dialogButtonClearElement = n.createDivElement(
            this._padContainer,
            "numPadButtonClear"
          )),
            this._dialogButtonClearElement.addClass("controlPanelButton"),
            this._dialogButtonClearElement.addClass("overlayDialogButton"),
            this._dialogButtonClearElement.css("position", "absolute"),
            this._dialogButtonClearElement.css("border-radius", "8px"),
            this._dialogButtonClearElement.css("min-width", "100px"),
            this._dialogButtonClearElement.css("min-height", "40px"),
            this._dialogButtonClearElement.css("background-color", "black"),
            this._dialogButtonClearElement.css("border-width", "4px"),
            this._dialogButtonClearElement.addClass("notSelected"),
            this._dialogButtonClearElement.bind("tap", function (t) {
              s.handleRemoveButtonClicked();
            }),
            (this._dialogButtonClearIconElement = n.createDivElement(
              this._dialogButtonClearElement,
              "numPadLabelButtonClear"
            )),
            this._dialogButtonClearIconElement.css("position", "relative"),
            this._dialogButtonClearIconElement.css(
              "background-image",
              "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNDc4LjA0Nyw1Ny4yNTFIMTU2LjYyOUwwLDI1Ni4wMDVsMTU2LjYyOCwxOTguNzQ0aDMyMS40MThjMTguNzYzLDAsMzMuOTUzLTE1LjE3MSwzMy45NTMtMzMuOTEzVjkxLjE4OCAgQzUxMiw3Mi40NjgsNDk2LjgxLDU3LjI1MSw0NzguMDQ3LDU3LjI1MSBNNDA4LjYwMiwzNDUuMzYzbC0yNS4zOTYsMjUuNGwtODkuMzg3LTg5LjM0NmwtODkuMzc5LDg5LjM0NmwtMjUuMzU4LTI1LjRsODkuMzM5LTg5LjM1OCAgbC04OS4zMzktODkuMzY2bDI1LjM1OC0yNS4zOTVsODkuMzc5LDg5LjM3OWw4OS4zODctODkuMzc5bDI1LjM5NiwyNS4zOTVsLTg5LjM0Miw4OS4zNjZMNDA4LjYwMiwzNDUuMzYzeiIvPjwvc3ZnPg==)"
            ),
            this._dialogButtonClearIconElement.css(
              "-webkit-background-size",
              "100% 100%"
            ),
            this._dialogButtonClearIconElement.css(
              "background-size",
              "100% 100%"
            ),
            this._dialogButtonClearIconElement.css(
              "background-repeat",
              "no-repeat"
            ),
            this._dialogButtonClearIconElement.css("width", "50px"),
            this._dialogButtonClearIconElement.css("height", "53px"),
            this._dialogButtonClearIconElement.css("left", "20px");
          a = 9 - 3 * (p = Math.floor(3));
          this._dialogButtonClearElement.css("top", "0px"),
            this._dialogButtonClearElement.css("left", "370px");
          var l = n.createDivElement(
            this._buttonContainer,
            "numPadButtonClear"
          );
          l.addClass("controlPanelButton"),
            l.addClass("overlayDialogButton"),
            l.css("position", "absolute"),
            this._numberButtonElements.push(l),
            (this._cancelButtonLabel = n.createLabelTextElement(
              l,
              "numPadLabelButtonClear",
              "dialogButtonLabelCancel_uc"
            )),
            this._cancelButtonLabel.addClass("controlPanelButtonLabel"),
            this._cancelButtonLabel.css("position", "relative"),
            i.push(this._cancelButtonLabel);
          var r, c;
          a = 9 - 3 * (p = Math.floor(11 / 3));
          l.css("top", 90 * p + "px"),
            l.css("left", 160 * a + "px"),
            (r = n.createDivElement(
              this._buttonContainer,
              "numPadButton0"
            )).addClass("controlPanelButton"),
            r.addClass("overlayDialogButton"),
            r.css("position", "absolute"),
            this._numberButtonElements.push(r),
            (c = n.createLabelTextElement(
              r,
              "numPadLabelButton0",
              "0"
            )).addClass("controlPanelButtonLabel"),
            c.css("position", "relative"),
            i.push(c);
          a = 10 - 3 * (p = Math.floor(11 / 3));
          r.css("top", 90 * p + "px"), r.css("left", 160 * a + "px");
          var h = n.createDivElement(this._buttonContainer, "numPadButtonOk");
          h.addClass("controlPanelButton"),
            h.addClass("overlayDialogButton"),
            h.css("position", "absolute"),
            this._numberButtonElements.push(h);
          var u = n.createLabelTextElement(
            h,
            "numPadLabelButtonOk",
            "notificationPageOkOption_uc"
          );
          u.addClass("controlPanelButtonLabel"),
            u.css("position", "relative"),
            i.push(u);
          var p;
          a = 11 - 3 * (p = Math.floor(11 / 3));
          h.css("top", 90 * p + "px"),
            h.css("left", 160 * a + "px"),
            (this._buttonManager = new t.ButtonManager(
              this._numberButtonElements,
              i
            )),
            this._buttonManager.ButtonClicked.add(
              this.handleButtonClicked,
              this
            ),
            (this._buttonManager.minWidth = "150px"),
            (this._inputFieldBackground = n.createDivElement(
              this._padContainer,
              "numPadInputFieldBackground"
            )),
            this._inputFieldBackground.addClass("controlPanelButton"),
            this._inputFieldBackground.addClass("overlayDialogButton"),
            this._inputFieldBackground.css("position", "absolute"),
            this._inputFieldBackground.css("border-radius", "8px"),
            this._inputFieldBackground.css("border-width", "4px"),
            this._inputFieldBackground.addClass("notSelected"),
            (this._targetValueTextElement = n.createLabelTextElement(
              this._inputFieldBackground,
              "numPadValueLabel",
              ""
            )),
            this._targetValueTextElement.addClass("controlPanelButtonLabel"),
            this._targetValueTextElement.css("font-size", "40px"),
            this._targetValueTextElement.css("text-align", "left"),
            this._targetValueTextElement.css("position", "absolute"),
            this._targetValueTextElement.css("left", "10px"),
            (this._cursorTextElement = n.createLabelTextElement(
              this._inputFieldBackground,
              "numPadLabelCursor",
              "|"
            )),
            this._cursorTextElement.addClass("controlPanelButtonLabel"),
            this._cursorTextElement.css("position", "absolute"),
            this._cursorTextElement.css("left", "10px"),
            this._cursorTextElement.css("font-size", "40px"),
            this._cursorTextElement.css("font-weight", "bold"),
            this._cursorTextElement.css("color", "white"),
            this._buttonManager.setActiveIndexes([]),
            this.hide();
        }),
        Object.defineProperty(e.prototype, "isVisible", {
          get: function () {
            return this._visible;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "text", {
          get: function () {
            return this._targetValueTextElement.text();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.handleRemoveButtonClicked = function () {
          this.removeValueChar();
        }),
        (e.prototype.handleOkButtonClicked = function () {
          this.OkButtonClicked.dispatch(this._targetFieldName);
        }),
        (e.prototype.handleCancelButtonClicked = function () {
          this.CancelButtonClicked.dispatch();
        }),
        (e.prototype.handleButtonClicked = function (t) {
          t >= 0 && t < 9 && this.addValueChar((t + 1).toString()),
            9 === t && this.handleCancelButtonClicked(),
            10 === t &&
              "" !== this._currentValueString &&
              this.addValueChar("0"),
            11 === t && this.handleOkButtonClicked();
        }),
        (e.prototype.addValueChar = function (t) {
          (this._currentValueString += t),
            this._targetValueTextElement.text(this._currentValueString),
            TweenMax.delayedCall(0.01, this.placeCursor, [], this);
        }),
        (e.prototype.placeCursor = function () {
          if (
            this._orientation === tk_common.constants.OrientationEnum.LANDSCAPE
          )
            this._targetValueTextElement.width() + 10 < 330
              ? this._cursorTextElement.css(
                  "left",
                  this._targetValueTextElement.width() + 10 + "px"
                )
              : this._cursorTextElement.css("left", "330px");
          else {
            var t = 1280 / this._gameContainerArea.width,
              e = this._gameContainerArea.width * t * 0.55;
            this._targetValueTextElement.width() + 10 < e
              ? this._cursorTextElement.css(
                  "left",
                  this._targetValueTextElement.width() + 10 + "px"
                )
              : this._cursorTextElement.css("left", e + "px");
          }
        }),
        (e.prototype.removeValueChar = function () {
          (this._currentValueString = this._currentValueString.slice(0, -1)),
            this._targetValueTextElement.text(this._currentValueString),
            TweenMax.delayedCall(0.01, this.placeCursor, [], this);
        }),
        (e.prototype.show = function (t, e) {
          !1 === this._visible &&
            ((this._targetFieldName = e),
            this.toggleCursor(),
            (this._currentValueString = ""),
            this.addValueChar(t),
            (this._visible = !0),
            //this._lockScreenElement.css("display", "block"),
            this._containerElement.css("display", "block"),
            this.relayout());
        }),
        (e.prototype.toggleCursor = function () {
          TweenMax.delayedCall(0.3, this.showCursor, [!1], this),
            TweenMax.delayedCall(0.6, this.showCursor, [!0], this),
            TweenMax.delayedCall(0.9, this.toggleCursor, [], this);
        }),
        (e.prototype.showCursor = function (t) {
          t
            ? this._cursorTextElement.css("display", "block")
            : this._cursorTextElement.css("display", "none");
        }),
        (e.prototype.hide = function () {
          TweenMax.killDelayedCallsTo(this.showCursor),
            TweenMax.killDelayedCallsTo(this.toggleCursor),
            (this._visible = !1),
            this._containerElement.css("display", "none");
        }),
        (e.prototype.relayout = function () {
          this.layout(
            this._orientation,
            this._gameContainerArea,
            this._gameArea,
            this._hasDesktopGui,
            this._hasMaximizedPortrait,
            this._isControlPanelOpen,
            this._showingInfoBar,
            this._gameMarginTop
          );
        }),
        (e.prototype.layout = function (t, e, n, s, i, o, a, l) {
          (this._orientation = t),
            (this._gameContainerArea = e),
            (this._gameArea = n),
            (this._hasDesktopGui = s),
            (this._hasMaximizedPortrait = i),
            (this._isControlPanelOpen = o),
            (this._showingInfoBar = a),
            (this._gameMarginTop = l),
            s
              ? this.layoutForDesktop(t, e, n, s, a)
              : this.layoutForMobile(t, e, n, s, a),
            this._buttonManager.layout(t, e, n);
        }),
        (e.prototype.layoutForDesktop = function (t, e, n, s, i) {
          e.width, e.width;
          this._padContainer.css("width", "600px"),
            this._padContainer.css("height", "300px"),
            this._padContainer.css("left", "360px"),
            this._padContainer.css("top", "150px"),
            (this._buttonManager.minWidth = "150px"),
            (this._buttonManager.paddingTop = "5px"),
            (this._buttonManager.paddingBottom = "5px"),
            (this._buttonManager.marginLeft = "0px"),
            (this._buttonManager.marginRight = "20px"),
            (this._buttonManager.marginBottom = "47px"),
            (this._buttonManager.fontSize = "30px"),
            (this._buttonManager.borderRadius = "70px"),
            (this._buttonManager.borderSize = "4px"),
            this._buttonContainer.css("width", "600px"),
            this._buttonContainer.css("top", "80px"),
            this._buttonContainer.css("left", "0"),
            t === tk_common.constants.OrientationEnum.LANDSCAPE &&
              (this._inputFieldBackground.css("width", "350px"),
              this._inputFieldBackground.css("height", "60px"));
        }),
        (e.prototype.layoutForMobile = function (t, e, n, s, i) {
          if (t === tk_common.constants.OrientationEnum.LANDSCAPE) {
            var o = 1280 / e.width;
            e.width;
            this._dialogBackgroundElement.css("position", "absolute"),
              this._dialogBackgroundElement.css("border-radius", "8px"),
              this._dialogBackgroundElement.css("width", "515px"),
              this._dialogBackgroundElement.css("height", "470px"),
              this._dialogBackgroundElement.css("background-color", "black"),
              this._dialogBackgroundElement.css("border-width", "4px"),
              this._dialogBackgroundElement.css("left", "-20px"),
              this._dialogBackgroundElement.css("top", "-20px"),
              this._buttonContainer.css("width", "700px");
            for (var a = 0; a < 12; a++) {
              var l = a - 3 * (c = Math.floor(a / 3));
              this._numberButtonElements[a].css("top", 90 * c + "px"),
                this._numberButtonElements[a].css("left", 160 * l + "px");
            }
            this._dialogButtonClearElement.css("border-radius", "8px"),
              this._dialogButtonClearElement.css("min-width", "100px"),
              this._dialogButtonClearElement.css("min-height", "40px"),
              this._dialogButtonClearElement.css("background-color", "black"),
              this._dialogButtonClearElement.css("border-width", "4px"),
              this._dialogButtonClearElement.addClass("notSelected"),
              this._dialogButtonClearIconElement.css("width", "50px"),
              this._dialogButtonClearIconElement.css("height", "53px"),
              this._dialogButtonClearIconElement.css("left", "20px"),
              this._dialogButtonClearIconElement.css("top", "0px");
            l = 9 - 3 * (c = Math.floor(3));
            this._dialogButtonClearElement.css("top", "0px"),
              this._dialogButtonClearElement.css("left", "370px"),
              this._buttonManager.ButtonClicked.add(
                this.handleButtonClicked,
                this
              ),
              (this._buttonManager.minWidth = "150px"),
              this._inputFieldBackground.css("top", "0px"),
              this._inputFieldBackground.css("border-radius", "8px"),
              this._inputFieldBackground.css("border-width", "4px"),
              this._inputFieldBackground.addClass("notSelected"),
              this._targetValueTextElement.css("font-size", "45px"),
              this._targetValueTextElement.css("text-align", "left"),
              this._targetValueTextElement.css("position", "absolute"),
              this._targetValueTextElement.css("left", "10px"),
              this._targetValueTextElement.css(
                "clip",
                "rect(0px, 325px, 200px, 0px)"
              ),
              this._cursorTextElement.css("top", "0px"),
              this._cursorTextElement.css("left", "10px"),
              this._cursorTextElement.css("font-size", "40px"),
              this._cursorTextElement.css("font-weight", "bold"),
              this._cursorTextElement.css("color", "white"),
              this._cursorTextElement.css("height", "60px"),
              this._padContainer.css("width", "600px"),
              this._padContainer.css("height", "300px"),
              this._padContainer.css("left", "380px"),
              this._padContainer.css("top", "100px"),
              (this._buttonManager.minWidth = "150px"),
              (this._buttonManager.minHeight = "65px"),
              (this._buttonManager.paddingTop = "5px"),
              (this._buttonManager.paddingBottom = "5px"),
              (this._buttonManager.marginLeft = "0px"),
              (this._buttonManager.marginRight = "20px"),
              (this._buttonManager.marginBottom = "47px"),
              (this._buttonManager.fontSize = "40px"),
              (this._buttonManager.borderRadius = "70px"),
              (this._buttonManager.borderSize = "4px"),
              "ko" === this._guiSettingsHelper.activeLanguageIso &&
                (this._buttonManager.fontSize = "32px"),
              this._buttonContainer.css("width", "600px"),
              this._buttonContainer.css("top", "80px"),
              this._buttonContainer.css("left", "0"),
              this._inputFieldBackground.css("width", "350px"),
              this._inputFieldBackground.css("height", "60px");
          } else {
            (o = 1280 / e.width), e.width;
            this._containerElement.css("top", "0px"),
              this._padContainer.css(
                "left",
                e.width * o * 0.5 - e.width * o * 0.4 + "px"
              ),
              this._padContainer.css(
                "top",
                e.height * o * 0.5 - e.width * o * 0.4 + "px"
              );
            var r = e.width * o * 0.8;
            this._padContainer.css("width", 0.8 * r + "px"),
              this._padContainer.css("height", e.width * o * 0.62 + "px"),
              this._dialogBackgroundElement.css("width", r + "px"),
              this._dialogBackgroundElement.css(
                "height",
                e.width * o * 0.62 + "px"
              ),
              this._inputFieldBackground.css("border-radius", "10px"),
              this._inputFieldBackground.css("border-width", "4px"),
              this._inputFieldBackground.css("left", 0.014 * r + "px"),
              this._inputFieldBackground.css("top", 0.005 * r + "px"),
              this._inputFieldBackground.css("width", 0.73 * r + "px"),
              this._inputFieldBackground.css("height", 0.12 * r + "px"),
              this._cursorTextElement.css("top", "0px"),
              this._cursorTextElement.css("font-size", "90px"),
              this._targetValueTextElement.css("font-size", "100px"),
              this._targetValueTextElement.css(
                "clip",
                "rect(0px, " + 0.675 * r + "px, 200px, 0px)"
              ),
              this._buttonContainer.css("top", 0.15 * r + "px"),
              this._buttonContainer.css("left", 0.016 * r + "px"),
              this._buttonContainer.css("width", 0.8 * r + "px"),
              this._dialogButtonClearElement.css("top", 0.005 * r + "px"),
              this._dialogButtonClearElement.css("left", 0.77 * r + "px"),
              this._dialogButtonClearElement.css("min-width", 0.16 * r + "px"),
              this._dialogButtonClearElement.css("min-height", 0.12 * r + "px"),
              this._dialogButtonClearIconElement.css("width", 0.09 * r + "px"),
              this._dialogButtonClearIconElement.css("height", 0.09 * r + "px"),
              this._dialogButtonClearIconElement.css("top", "10px"),
              this._dialogButtonClearIconElement.css("left", "25px"),
              (this._buttonManager.minWidth = "300px"),
              (this._buttonManager.paddingTop = "5px"),
              (this._buttonManager.paddingBottom = "5px"),
              (this._buttonManager.marginLeft = "0px"),
              (this._buttonManager.marginRight = "160px"),
              (this._buttonManager.marginBottom = "160px"),
              (this._buttonManager.fontSize = "80px"),
              (this._buttonManager.borderRadius = "70px"),
              (this._buttonManager.borderSize = "4px"),
              "ko" === this._guiSettingsHelper.activeLanguageIso &&
                (this._buttonManager.fontSize = "70px");
            for (a = 0; a < 12; a++) {
              var c;
              l = a - 3 * (c = Math.floor(a / 3));
              this._numberButtonElements[a].css("top", 150 * c + "px"),
                this._numberButtonElements[a].css("left", 320 * l + "px");
            }
            // this._lockScreenElement.css("width", e.width * o + "px"),
            //   this._lockScreenElement.css("height", e.height * o + "px");
          }
        }),
        (e.prototype.close = function () {
          this._open = !1;
        }),
        (e.prototype.open = function () {
          this._open = !0;
        }),
        e
      );
    })();
    t.NumPadManager = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function () {
      function t(t, e, n, s) {
        var i = this;
        void 0 === s && (s = !0),
          (this._id = t),
          (this.Clicked = new Phaser.Signal()),
          (this._backgroundElement = e),
          (this._valueTextElement = n),
          (this._selected = !1),
          (this._isEnabled = !0),
          e.bind("tap", function (t) {
            i.handleClick();
          }),
          s &&
            this._backgroundElement.css({
              "-webkit-transform": "translate3d(0,0,0)",
              "-webkit-backface-visibility": "hidden",
            }),
          e.css("pointer-events", "all"),
          e.css("cursor", "pointer");
      }
      return (
        (t.prototype.handleMouseDown = function () {
          this.showSelected();
        }),
        (t.prototype.handleMouseUp = function () {
          this.showNonSelected();
        }),
        Object.defineProperty(t.prototype, "hasToggle", {
          set: function (t) {
            this._hasToggle = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.handleClick = function () {
          var t = this;
          this._isEnabled &&
            (setTimeout(function () {
              return t.removeClickAnimation();
            }, 300),
            this._backgroundElement.addClass("buttonClickAnimation"),
            this.Clicked.dispatch(this._id));
        }),
        (t.prototype.removeClickAnimation = function () {
          this._backgroundElement.removeClass("buttonClickAnimation");
        }),
        (t.prototype.show = function () {
          this._backgroundElement.css("display", "block"),
            this._valueTextElement.css("display", "block");
        }),
        (t.prototype.hide = function () {
          this._backgroundElement.css("display", "none"),
            this._valueTextElement.css("display", "none");
        }),
        (t.prototype.setValue = function (t) {
          this._valueTextElement.text(t);
        }),
        Object.defineProperty(t.prototype, "selected", {
          set: function (t) {
            this._selected != t &&
              ((this._selected = t),
              this.layout(
                this._borderRadius,
                this._border,
                this._borderColor,
                this._minWidth,
                this._minHeight,
                this._fontSize,
                this._marginRight,
                this._marginLeft,
                this._marginTop,
                this._marginBottom,
                this._paddingTop,
                this._paddingRight,
                this._paddingBottom,
                this._paddingLeft
              ));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "enabled", {
          set: function (t) {
            (this._isEnabled = t),
              t
                ? (this._backgroundElement.css("cursor", "pointer"),
                  this._valueTextElement.css("cursor", "pointer"),
                  this._backgroundElement.css("border-color", ""),
                  this._valueTextElement.css("color", ""),
                  this._backgroundElement.css("background-color", ""),
                  this._backgroundElement.css("opacity", 1),
                  this._valueTextElement.css("opacity", 1))
                : (this._backgroundElement.css("cursor", "default"),
                  this._valueTextElement.css("cursor", "default"),
                  this._backgroundElement.css("border-color", "#808080"),
                  this._valueTextElement.css("color", "white"),
                  this._backgroundElement.css("background-color", "black"),
                  this._backgroundElement.css("opacity", 0.4),
                  this._valueTextElement.css("opacity", 0.6));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.showSelected = function () {
          this._backgroundElement.removeClass("notSelected"),
            this._backgroundElement.addClass("selected"),
            this._backgroundElement.css(
              "-webkit-border-radius",
              this._borderRadius
            ),
            this._backgroundElement.css("border-radius", this._borderRadius),
            this._backgroundElement.css("border-width", this._borderSize);
        }),
        (t.prototype.showNonSelected = function () {
          this._backgroundElement.removeClass("selected"),
            this._backgroundElement.addClass("notSelected"),
            this._backgroundElement.css(
              "-webkit-border-radius",
              this._borderRadius
            ),
            this._backgroundElement.css("border-radius", this._borderRadius),
            this._backgroundElement.css("border-width", this._borderSize);
        }),
        (t.prototype.layout = function (
          t,
          e,
          n,
          s,
          i,
          o,
          a,
          l,
          r,
          c,
          h,
          u,
          p,
          d
        ) {
          (this._borderRadius = t),
            (this._borderSize = e),
            (this._minWidth = s),
            (this._minHeight = i),
            (this._fontSize = o),
            (this._marginRight = a),
            (this._marginLeft = l),
            (this._marginTop = r),
            (this._marginBottom = c),
            (this._paddingTop = h),
            (this._paddingRight = u),
            (this._paddingBottom = p),
            (this._paddingLeft = d),
            this._backgroundElement.css("margin-right", a),
            this._backgroundElement.css("margin-bottom", c),
            this._backgroundElement.css("margin-left", l),
            this._backgroundElement.css("margin-top", r),
            this._backgroundElement.css("min-width", s),
            this._backgroundElement.css("min-height", i),
            this._selected ? this.showSelected() : this.showNonSelected(),
            "" !== o && this._valueTextElement.css("font-size", o),
            this._valueTextElement.css("padding-right", u),
            this._valueTextElement.css("padding-bottom", p),
            this._valueTextElement.css("padding-left", d),
            this._valueTextElement.css("padding-top", h);
        }),
        (t.prototype.appendToParent = function () {
          this._backgroundElement.appendTo(this._backgroundElement.parent()),
            this._valueTextElement.appendTo(this._valueTextElement.parent());
        }),
        t
      );
    })();
    t.ControlPanelButton = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function () {
      function t(t) {
        (this._guiSettingsHelper = t),
          (this.onGuiButtonClicked =
            new tk_common.slots.gui.GuiButtonClickedSignal());
      }
      return (
        Object.defineProperty(t.prototype, "isControlPanelMode", {
          set: function (t) {
            (this._isControlPanelMode = t), this.hide(), this.show();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.initBottomBar = function (t, e, n, s, i, o, a, l) {
          (this._cashTitleElement = n),
            (this._cashValueElement = s),
            (this._totalWinTitleElement = i),
            (this._totalWinValueElement = o),
            (this._betTitleElement = a),
            (this._betValueElement = l),
            (this._dividerLines = e);
        }),
        (t.prototype.setHandedness = function (t) {
          this._handedness = t;
        }),
        (t.prototype.setSingleSpinMode = function () {
          !1 !== this._isShowingFreeRoundsCounter &&
            ((this._isShowingFreeRoundsCounter = !1),
            this._guiSettingsHelper.isFieldAllowed("cash") &&
              this._cashTitleElement.css("display", "block"),
            this._guiSettingsHelper.isFieldAllowed("bet") &&
              this._betTitleElement.css("display", "block"),
            this._guiSettingsHelper.isFieldAllowed("totalwin") &&
              this._totalWinTitleElement.css("display", "block"),
            this._freeRoundsCounterContainer.css("display", "none"),
            this._freeRoundsCashTitleElement.css("display", "none"),
            this._freeRoundsCashTitleElement.css("display", "none"),
            this._freeRoundsBetTitleElement.css("display", "none"),
            this._freeRoundsCashTitleElement.css("display", "none"),
            this._freeRoundsBetTitleElement.css("display", "none"));
        }),
        (t.prototype.setFreeRoundsMode = function (t) {
          (this._isShowingFreeRoundsCounter = !0),
            this._freeRoundsCounterContainer.css("display", "block"),
            this._cashTitleElement.css("display", "none"),
            this._guiSettingsHelper.isFieldAllowed("totalwin") &&
              this._totalWinTitleElement.css("display", "block"),
            this._betTitleElement.css("display", "none"),
            this._guiSettingsHelper.isFieldAllowed("freeroundcash") &&
              this._freeRoundsCashTitleElement.css("display", "block"),
            this._guiSettingsHelper.isFieldAllowed("freeroundbet") &&
              this._freeRoundsBetTitleElement.css("display", "block");
        }),
        (t.prototype.setFeatureRoundsMode = function (t) {
          !0 !== this._isShowingFreeRoundsCounter &&
            (this._guiSettingsHelper.isFieldAllowed("cash") &&
              this._cashTitleElement.css("display", "block"),
            this._guiSettingsHelper.isFieldAllowed("bet") &&
              this._betTitleElement.css("display", "block"),
            this._guiSettingsHelper.isFieldAllowed("totalwin") &&
              this._totalWinTitleElement.css("display", "block"),
            this._freeRoundsCashTitleElement.css("display", "none"),
            this._freeRoundsBetTitleElement.css("display", "none"));
        }),
        (t.prototype.addFastClickHandler = function (t, e) {
          t.fastClick(e);
        }),
        (t.prototype.handleGuiButtonClicked = function (t) {
          this.onGuiButtonClicked.dispatch(t);
        }),
        (t.prototype.show = function () {
          this._containerElement.css("display", "block"),
            !0 !== this._isShowingFreeRoundsCounter
              ? (this._guiSettingsHelper.isFieldAllowed("cash") &&
                  (this._cashTitleElement.css("display", "block"),
                  this._cashValueElement.css("display", "block")),
                this._guiSettingsHelper.isFieldAllowed("bet") &&
                  (this._betTitleElement.css("display", "block"),
                  this._betValueElement.css("display", "block")),
                this._guiSettingsHelper.isFieldAllowed("totalwin") &&
                  (this._totalWinTitleElement.css("display", "block"),
                  this._totalWinValueElement.css("display", "block")))
              : (this._freeRoundsCounterContainer.css("display", "block"),
                this._freeRoundsCashTitleElement.css("display", "block"),
                this._freeRoundsCashTitleElement.css("display", "block"),
                this._freeRoundsBetTitleElement.css("display", "block"),
                this._cashValueElement.css("display", "block"),
                this._betValueElement.css("display", "block"),
                this._totalWinValueElement.css("display", "block"));
        }),
        (t.prototype.hide = function () {
          (this._isShowingFreeRoundsCounter = !1),
            this._freeRoundsCounterContainer.css("display", "none"),
            this._freeRoundsCashTitleElement.css("display", "none"),
            this._freeRoundsCashTitleElement.css("display", "none"),
            this._freeRoundsBetTitleElement.css("display", "none"),
            this._containerElement.css("display", "none"),
            this._cashTitleElement.css("display", "none"),
            this._cashValueElement.css("display", "none"),
            this._betTitleElement.css("display", "none"),
            this._betValueElement.css("display", "none"),
            this._totalWinTitleElement.css("display", "none"),
            this._totalWinValueElement.css("display", "none");
        }),
        (t.prototype.layout = function (t, e, n, s, i, o, a, l) {
          s
            ? this.layoutForDesktop(t, e, n, s, o, l, a, i)
            : this.layoutForMobile(t, e, n, s, o, l, a, i);
        }),
        (t.prototype.layoutForMobile = function (t, e, n, s, i, o, a, l) {
          if (
            (this._containerElement.addClass("actionBar"),
            t === tk_common.constants.OrientationEnum.LANDSCAPE)
          )
            this._containerElement.css("width", "1280px"),
              this._containerElement.css("height", "75px"),
              a
                ? (this._freeRoundsCounterContainer.css("top", "610px"),
                  this._containerElement.css("top", "635px"))
                : this._containerElement.css("top", "634px"),
              this._freeRoundsCounterContainer.css("left", "0px"),
              this._freeRoundsCounterContainer.css("width", "1280px"),
              this._freeRoundsCounterContainer.css("height", "30px"),
              this._freeRoundsCounterBackground.css("width", "1280px"),
              this._freeRoundsCounterBackground.css("height", "30px"),
              this._freeRoundsCounterCountLabel.css("left", "0px"),
              this._freeRoundsCounterCountLabel.css("width", "1280px"),
              this._freeRoundsCounterCountLabel.css("top", "0px"),
              this._freeRoundsCounterCountLabel.css("font-size", "25px"),
              this._freeRoundsCounterCountLabel.css("text-align", "center"),
              i
                ? (this._containerElement.addClass(
                    "actionBarMobileControlPanel"
                  ),
                  this._freeRoundsCounterContainer.css("display", "none"))
                : (this._containerElement.removeClass(
                    "actionBarMobileControlPanel"
                  ),
                  this._isShowingFreeRoundsCounter &&
                    this._freeRoundsCounterContainer.css("display", "block")),
              this._dividerLines[0].css("left", "425px"),
              this._dividerLines[1].css("left", "852px"),
              this._dividerLines[0].css("border-right", "2px solid black"),
              this._dividerLines[1].css("border-right", "2px solid black"),
              this._cashTitleElement.css("fontSize", "13px"),
              this._cashTitleElement.css("left", "28px"),
              this._cashTitleElement.css("top", "7px"),
              this._cashTitleElement.css("white-space", "nowrap"),
              this._cashValueElement.css("fontSize", "32px"),
              this._cashValueElement.css("left", "28px"),
              this._cashValueElement.css("top", "18px"),
              this._totalWinTitleElement.css("fontSize", "13px"),
              this._totalWinTitleElement.css("left", "453px"),
              this._totalWinTitleElement.css("top", "7px"),
              this._totalWinTitleElement.css("white-space", "nowrap"),
              this._totalWinValueElement.css("left", "453px"),
              this._totalWinValueElement.css("fontSize", "32px"),
              this._totalWinValueElement.css("top", "18px"),
              this._betTitleElement.css("fontSize", "13px"),
              this._betTitleElement.css("left", "878px"),
              this._betTitleElement.css("top", "7px"),
              this._betTitleElement.css("white-space", "nowrap"),
              this._betValueElement.css("left", "878px"),
              this._betValueElement.css("fontSize", "32px"),
              this._betValueElement.css("top", "18px"),
              this._freeRoundsCashTitleElement.css("fontSize", "13px"),
              this._freeRoundsCashTitleElement.css("left", "38px"),
              this._freeRoundsCashTitleElement.css("top", "7px"),
              this._freeRoundsCashTitleElement.css("white-space", "nowrap"),
              this._freeRoundsBetTitleElement.css("fontSize", "13px"),
              this._freeRoundsBetTitleElement.css("left", "888px"),
              this._freeRoundsBetTitleElement.css("top", "7px"),
              this._freeRoundsBetTitleElement.css("white-space", "nowrap");
          else {
            i
              ? this._freeRoundsCounterContainer.css("display", "none")
              : this._isShowingFreeRoundsCounter &&
                this._freeRoundsCounterContainer.css("display", "block");
            var r = 1280 / e.width,
              c = e.width / 1280;
            if (
              (this._containerElement.css("height", "160px"),
              this._containerElement.css("width", "1280px"),
              this._dividerLines[0].css("left", "428px"),
              this._dividerLines[1].css("left", "853px"),
              this._dividerLines[0].css("border-right", "3px solid black"),
              this._dividerLines[1].css("border-right", "3px solid black"),
              i)
            )
              a
                ? this._containerElement.css(
                    "top",
                    e.height * r - 160 - 75 + "px"
                  )
                : this._containerElement.css("top", e.height * r - 160 + "px"),
                this._containerElement.css("left", 0);
            else {
              this._containerElement.css("left", 0);
              c = 1280 / e.width;
              this._containerElement.css("top", e.height * c - 158 - 75 + "px"),
                this._freeRoundsCounterContainer.css(
                  "top",
                  e.height * c - 158 - 75 - 40 + "px"
                );
            }
            this._freeRoundsCounterContainer.css("left", "0px"),
              this._freeRoundsCounterContainer.css("width", "1280px"),
              this._freeRoundsCounterContainer.css("height", "50px"),
              this._freeRoundsCounterContainer.css("width", "1280px"),
              this._freeRoundsCounterContainer.css("height", "50px"),
              this._freeRoundsCounterBackground.css("width", "1280px"),
              this._freeRoundsCounterBackground.css("height", "50px"),
              this._freeRoundsCounterCountLabel.css("left", "0px"),
              this._freeRoundsCounterCountLabel.css("width", "1280px"),
              this._freeRoundsCounterCountLabel.css("top", "0px"),
              this._freeRoundsCounterCountLabel.css("font-size", "35px"),
              this._freeRoundsCounterCountLabel.css("text-align", "center"),
              this._cashTitleElement.css("fontSize", "30px"),
              this._cashTitleElement.css("left", "24px"),
              this._cashTitleElement.css("top", "30px"),
              this._cashTitleElement.css("white-space", "nowrap"),
              this._cashValueElement.css("fontSize", "70px"),
              this._cashValueElement.css("left", "24px"),
              this._cashValueElement.css("top", "52px"),
              ("VND" !== this._guiSettingsHelper.activeCurrencyIso &&
                "IDR" !== this._guiSettingsHelper.activeCurrencyIso &&
                "HUF" !== this._guiSettingsHelper.activeCurrencyIso) ||
                this._cashValueElement.css("fontSize", "60px"),
              this._totalWinTitleElement.css("fontSize", "30px"),
              this._totalWinTitleElement.css("left", "450px"),
              this._totalWinTitleElement.css("top", "30px"),
              this._totalWinTitleElement.css("white-space", "nowrap"),
              this._totalWinValueElement.css("fontSize", "70px"),
              this._totalWinValueElement.css("left", "450px"),
              this._totalWinValueElement.css("top", "52px"),
              ("VND" !== this._guiSettingsHelper.activeCurrencyIso &&
                "IDR" !== this._guiSettingsHelper.activeCurrencyIso &&
                "HUF" !== this._guiSettingsHelper.activeCurrencyIso) ||
                this._totalWinValueElement.css("fontSize", "60px"),
              this._betTitleElement.css("fontSize", "30px"),
              this._betTitleElement.css("left", "880px"),
              this._betTitleElement.css("top", "30px"),
              this._betTitleElement.css("white-space", "nowrap"),
              this._betValueElement.css("left", "880px"),
              this._betValueElement.css("top", "52px"),
              this._betValueElement.css("fontSize", "70px"),
              this._freeRoundsCashTitleElement.css("fontSize", "30px"),
              this._freeRoundsCashTitleElement.css("left", "24px"),
              this._freeRoundsCashTitleElement.css("top", "30px"),
              this._freeRoundsCashTitleElement.css("white-space", "nowrap"),
              this._freeRoundsBetTitleElement.css("fontSize", "30px"),
              this._freeRoundsBetTitleElement.css("left", "880px"),
              this._freeRoundsBetTitleElement.css("top", "30px"),
              this._freeRoundsBetTitleElement.css("white-space", "nowrap");
          }
        }),
        (t.prototype.layoutForDesktop = function (t, e, n, s, i, o, a, l) {
          i
            ? (this._containerElement.addClass("actionBarDesktopControlPanel"),
              this._containerElement.removeClass("actionBarDesktop"))
            : (this._containerElement.removeClass(
                "actionBarDesktopControlPanel"
              ),
              this._containerElement.addClass("actionBarDesktop")),
            this._containerElement.css("width", "1281px"),
            this._containerElement.css("height", "60px"),
            this._containerElement.css("left", "-1px"),
            a
              ? (s
                  ? this._freeRoundsCounterContainer.css("top", "618px")
                  : this._freeRoundsCounterContainer.css("top", "590px"),
                this._containerElement.css("top", "647px"))
              : this._containerElement.css("top", "634px"),
            this._freeRoundsCounterContainer.css("left", "0px"),
            this._freeRoundsCounterContainer.css("width", "1280px"),
            this._freeRoundsCounterContainer.css("height", "30px"),
            this._freeRoundsCounterBackground.css("width", "1280px"),
            this._freeRoundsCounterBackground.css("height", "30px"),
            this._freeRoundsCounterCountLabel.css("left", "0px"),
            this._freeRoundsCounterCountLabel.css("width", "1280px"),
            this._freeRoundsCounterCountLabel.css("top", "0px"),
            this._freeRoundsCounterCountLabel.css("font-size", "25px"),
            this._freeRoundsCounterCountLabel.css("text-align", "center"),
            i
              ? this._freeRoundsCounterContainer.css("display", "none")
              : this._isShowingFreeRoundsCounter &&
                this._freeRoundsCounterContainer.css("display", "block"),
            this._dividerLines[0].css("left", "450px"),
            this._dividerLines[1].css("left", "718px"),
            this._dividerLines[0].css("border-right", "2px dotted white"),
            this._dividerLines[1].css("border-right", "2px dotted white"),
            this._dividerLines[0].css("opacity", ".2"),
            this._dividerLines[1].css("opacity", ".2"),
            this._cashTitleElement.css("fontSize", "15px"),
            this._cashTitleElement.css("left", "153px"),
            this._cashTitleElement.css("top", "2px"),
            this._cashTitleElement.css("opacity", ".5"),
            this._cashValueElement.css("fontSize", "35px"),
            this._cashValueElement.css("left", "153px"),
            this._cashValueElement.css("top", "12px"),
            this._totalWinTitleElement.css("fontSize", "15px"),
            this._totalWinTitleElement.css("left", "460px"),
            this._totalWinTitleElement.css("top", "2px"),
            this._totalWinTitleElement.css("opacity", ".5"),
            this._totalWinValueElement.css("left", "460px"),
            this._totalWinValueElement.css("fontSize", "35px"),
            this._totalWinValueElement.css("top", "12px"),
            this._betTitleElement.css("fontSize", "15px"),
            this._betTitleElement.css("left", "730px"),
            this._betTitleElement.css("top", "2px"),
            this._betTitleElement.css("opacity", ".5"),
            this._betValueElement.css("left", "730px"),
            this._betValueElement.css("fontSize", "35px"),
            this._betValueElement.css("top", "12px"),
            this._freeRoundsCashTitleElement.css("fontSize", "15px"),
            this._freeRoundsCashTitleElement.css("left", "153px"),
            this._freeRoundsCashTitleElement.css("top", "2px"),
            this._freeRoundsCashTitleElement.css("opacity", ".5"),
            this._freeRoundsBetTitleElement.css("fontSize", "15px"),
            this._freeRoundsBetTitleElement.css("left", "730px"),
            this._freeRoundsBetTitleElement.css("top", "2px"),
            this._freeRoundsBetTitleElement.css("opacity", ".5");
        }),
        (t.prototype.buildContent = function (t, e) {
          var n = e.createDivElement(t, "bottomBarContainer");
          n.addClass("actionBar"),
            n.css("pointer-events", "none"),
            (this._freeRoundsCounterContainer = e.createDivElement(
              t,
              "freeRoundsCounterContainer"
            )),
            this._freeRoundsCounterContainer.css("display", "none"),
            (this._freeRoundsCounterBackground = e.createDivElement(
              this._freeRoundsCounterContainer,
              "freeRoundsCounterBackground"
            )),
            this._freeRoundsCounterBackground.css("background-color", "white"),
            (this._freeRoundsCounterCountLabel = e.createLabelTextElement(
              this._freeRoundsCounterContainer,
              "freeRoundsCounterCountLabel",
              "actionButtonFreeRoundsLeft_vars_freeRoundsLeft_uc"
            )),
            this._freeRoundsCounterCountLabel.addClass("cashTitle"),
            this._freeRoundsCounterCountLabel.css("color", "black"),
            (this._containerElement = n);
          var s = this._guiSettingsHelper.getFreeRoundCashTitlePhraseId(),
            i = e.createLabelTextElement(n, "freeRoundsCashTitle", s);
          i.addClass("cashTitle"),
            i.css("display", "none"),
            i.css("white-space", "nowrap"),
            (s = this._guiSettingsHelper.getCashTitlePhraseId());
          var o = e.createLabelTextElement(n, "cashTitle", s);
          o.addClass("cashTitle"),
            o.css("display", "none"),
            o.css("white-space", "nowrap");
          var a = e.createLabelTextElement(
            n,
            "cashValue",
            "cashButton_vars_cash"
          );
          a.addClass("cashValue"),
            a.css("display", "none"),
            (s = this._guiSettingsHelper.getTotalWinTitlePhraseId());
          var l = e.createLabelTextElement(n, "winTitle", s);
          l.addClass("winTitle"),
            l.css("display", "none"),
            l.css("white-space", "nowrap");
          var r = e.createLabelTextElement(n, "winValue", "winButton_vars_win");
          r.addClass("winValue"),
            r.css("display", "none"),
            (s = this._guiSettingsHelper.getFreeRoundBetTitlePhraseId());
          var c = e.createLabelTextElement(n, "freeRoundsBetTitle", s);
          c.addClass("betTitle"),
            c.css("display", "none"),
            c.css("white-space", "nowrap"),
            (s = this._guiSettingsHelper.getBetTitlePhraseId());
          var h = e.createLabelTextElement(n, "betTitle", s);
          h.addClass("betTitle"),
            h.css("display", "none"),
            h.css("white-space", "nowrap");
          var u = e.createLabelTextElement(
            n,
            "betValue",
            "betButton_vars_totalBet"
          );
          u.addClass("betValue"), u.css("display", "none");
          var p = e.createDivElement(n, "actionBarDividerLineElement1");
          p.addClass("actionBarDivider");
          var d = e.createDivElement(n, "actionBarDividerLineElement2");
          d.addClass("actionBarDivider"),
            n.hide().show(0),
            (this._cashTitleElement = o),
            (this._cashValueElement = a),
            (this._totalWinTitleElement = l),
            (this._totalWinValueElement = r),
            (this._betTitleElement = h),
            (this._betValueElement = u),
            (this._freeRoundsCashTitleElement = i),
            (this._freeRoundsBetTitleElement = c),
            (this._dividerLines = [p, d]),
            this.hide(),
            this.show();
        }),
        (t.prototype.setWinFieldColor = function (t, e) {
          void 0 === e && (e = !1),
            this._totalWinValueElement.css("color", t),
            e && this._totalWinTitleElement.css("color", t);
        }),
        (t.prototype.setCashFieldColor = function (t, e) {
          void 0 === e && (e = !1),
            this._cashValueElement.css("color", t),
            e && this._cashTitleElement.css("color", t);
        }),
        (t.prototype.flashTotalWinField = function (t, e, n) {
          var s = e.toString(16),
            i = { value: 8 },
            o = this._totalWinValueElement;
          o.css("text-shadow", "0 0 0px #000"),
            TweenMax.delayedCall(t / 1e3 / 6, function () {
              o.css("text-shadow", "0 0 " + i.value + "px #" + s);
            }),
            TweenMax.to(i, (t / 1e3 / 6) * 5, {
              value: 0,
              ease: Cubic.easeOut,
              onUpdate: function () {
                o.css("text-shadow", "0 0 " + i.value + "px #" + s);
              },
              onComplete: n,
            });
        }),
        t
      );
    })();
    t.BottomBarManager = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = tk_common.slots.gui.PageIds,
      n = tk_common.slots.gui.DialogTypeEnum,
      s = (function (s) {
        function i(t, e, n, i, o) {
          var a = s.call(this, t, e, n) || this;
          return (
            (a._guiContainer = jQuery("#" + a._gameGuiElementId)),
            (a._overrideOrientation = void 0),
            (a._guiBuildHelper = o),
            (a._paytableHelper = i),
            (a._replayMode = !1),
            (a._forceLayout = !0),
            (a.enabled = !0),
            a
          );
        }
        return (
          __extends(i, s),
          (i.prototype.buildGui = function (e, n) {
            var s = this;
            if (
              ((this._ownsPage = e),
              (this._isTopSpinMode = !1),
              (this._guiInitData = n),
              !0 !== this._guiInitData.useDesktopGui &&
                (this._guiInitData.useDesktopGui = !1),
              (this._guiSettingsHelper = new t.GuiSettingsHelper()),
              (this._guiSettingsHelper.useKineticScroll =
                !0 === n.willShowScrollFinger),
              this._guiSettingsHelper.setInitData(this._guiInitData),
              this._guiContainer.css("width", "1280px"),
              this._guiContainer.css("height", "720px"),
              this._guiContainer.css("position", "absolute"),
              this.buildGameSpecificUiElements(this._gameGuiElementId),
              this.buildCustomCover(),
              (this._customCoverScreenManager = new t.CoverScreenManager(
                !1,
                this._customCoverParentElement
              )),
              (this._fullScreenClickArea = this.createDivElement(
                this._guiContainer,
                "fullScreenClickArea"
              )),
              this._guiSettingsHelper.isAppleDevice &&
                !this._guiSettingsHelper.isDesktop &&
                !this._guiSettingsHelper.isUiWebView)
            ) {
              var i = jQuery("#fullscreenMask");
              (this._swipeFinger = this.createDivElement(
                i,
                "fullScreenSwipeFinger"
              )),
                this._swipeFinger.addClass("fullscreenFinger"),
                this._swipeFinger.css("display", "block"),
                this._swipeFinger.css("pointer-events", "none"),
                this._fullScreenClickArea.on("touchstart", function (t) {
                  s.handleFullScreenClick(),
                    s.dispatchClick(
                      t.originalEvent.targetTouches[0].clientX,
                      t.originalEvent.targetTouches[0].clientY
                    ),
                    t.preventDefault();
                }),
                document.addEventListener(
                  "touchend",
                  function (t) {
                    t.preventDefault(), $(t.target).trigger("click");
                  },
                  !1
                ),
                document.addEventListener(
                  "touchmove",
                  function (t) {
                    1 != (t = t.originalEvent || t).scale && t.preventDefault();
                  },
                  !1
                ),
                document.addEventListener(
                  "gesturestart",
                  function (t) {
                    1 != (t = t.originalEvent || t).scale && t.preventDefault();
                  },
                  !1
                );
            }
            this._fullScreenClickArea.on("click", function (t) {
              s.dispatchClick(t.clientX, t.clientY), s.handleFullScreenClick();
            }),
              (this._showInfoBar = !0),
              jQuery("head").append(
                jQuery('<link rel="stylesheet" type="text/css" />').attr(
                  "href",
                  tk_common.utils.buildUrl(this._guiAssetBaseUrl, "gui.css")
                )
              ),
              this.buildBottomBar(this._gameGuiElementId),
              this.buildPopupMenuManager(this._gameGuiElementId),
              this.buildControlPanel(
                this._gameGuiElementId,
                n.gameRulesPhraseId
              ),
              this.buildActionButtons(this._gameGuiElementId),
              this.buildTopSpinsManager(this._gameGuiElementId),
              (this._ocInitialized = !1),
              this.buildNumPadManager(this._gameGuiElementId),
              this.buildDialog(this._gameGuiElementId),
              this._showInfoBar &&
                this.buildInfoBarManager(
                  this._gameGuiElementId,
                  n.gameTitlePhraseId,
                  this._guiSettingsHelper
                ),
              this.buildFadeOverlay(this._gameGuiElementId),
              this.makeGuiUnselectable(this._gameGuiElementId);
            // n.developmentMode && this.buildOcDialog(this._gameGuiElementId),
            // (this._lockScreenElement = this.createDivElement(
            //   this._guiContainer,
            //   "lockScreenElement"
            // )),
            // this._lockScreenElement.css("width", "1280px"),
            // this._lockScreenElement.css("height", "720px"),
            // this._lockScreenElement.css("background-color", "black"),
            // this._lockScreenElement.css("opacity", 0.3),
            // this._lockScreenElement.css("position", "absolute"),
            // this._lockScreenElement.css("display", "none");
            for (
              var o = document.querySelectorAll("style"), a = 0, l = o.length;
              a < l;
              a += 1
            )
              o[a].textContent += "";
          }),
          (i.prototype.isSpinButtonEnabled = function () {
            return (
              !!this._actionButtonsManager &&
              this._actionButtonsManager.isSpinButtonEnabled()
            );
          }),
          // (i.prototype.lockScreen = function (t) {
          //   t
          //     ? this._lockScreenElement.css("display", "block")
          //     : this._lockScreenElement.css("display", "none");
          // }),
          (i.prototype.dispatchClick = function (t, e) {
            var n = this.convertPagePointToClientPoint({ x: t, y: e });
            this.onGuiAreaClicked.dispatch(t, e, n.x, n.y);
          }),
          (i.prototype.convertPagePointToClientPoint = function (t) {
            var e = 0;
            e =
              Math.abs(this._gameArea.left) < 1
                ? 1280 / window.innerWidth
                : 720 / window.innerHeight;
            var n = this._gameGuiElement.offset().top - $(window).scrollTop(),
              s = this._gameArea.left * e;
            return { x: t.x * e - s, y: (t.y - n) * e };
          }),
          (i.prototype.buildGameSpecificUiElements = function (t) {
            var e = this;
            if (null !== this._guiBuildHelper) {
              var n = jQuery("#" + t),
                s = this.createDivElement(n, "gameSpecificUiElementsContainer");
              this._guiBuildHelper.buildContent(s, {
                createDivElement: function (t, n, s) {
                  return e.createDivElement(t, n, s);
                },
                createImgElement: function (t, n, s, i) {
                  return e.createImgElement(t, n, s, i);
                },
                createLabelTextElement: function (t, n, s, i) {
                  return e.createLabelTextElement(t, n, s, i);
                },
                createLabelHtmlElement: function (t, n, s, i) {
                  return e.createLabelHtmlElement(t, n, s, i);
                },
                createTextInputElement: function (t, n, s, i, o) {
                  return e.createTextInputElement(t, n, s, i, o);
                },
              });
            }
          }),
          (i.prototype.initializeGui = function (t, e, n) {
            s.prototype.initializeGui.call(this, t, e),
              (this._guiSettingsHelper.activeLanguageIso = e.activeLanguageIso),
              (this._guiSettingsHelper.activeCurrencyIso = n);
            var i = e.activeLanguageIso.split("-"),
              o = i[0].toLowerCase(),
              a = (i[1] || "").toUpperCase();
            "ja" === o &&
              jQuery("head").append(
                jQuery('<link rel="stylesheet" type="text/css" />').attr(
                  "href",
                  tk_common.utils.buildUrl(this._guiAssetBaseUrl, "guiJpn.css")
                )
              ),
              "zht" === o &&
                jQuery("head").append(
                  jQuery('<link rel="stylesheet" type="text/css" />').attr(
                    "href",
                    tk_common.utils.buildUrl(
                      this._guiAssetBaseUrl,
                      "guiZht.css"
                    )
                  )
                ),
              "zhs" === o &&
                jQuery("head").append(
                  jQuery('<link rel="stylesheet" type="text/css" />').attr(
                    "href",
                    tk_common.utils.buildUrl(this._guiAssetBaseUrl, "guiZh.css")
                  )
                ),
              "ko" === o &&
                jQuery("head").append(
                  jQuery('<link rel="stylesheet" type="text/css" />').attr(
                    "href",
                    tk_common.utils.buildUrl(this._guiAssetBaseUrl, "guiKo.css")
                  )
                ),
              "zh" === o &&
                ("CN" === a || "" === a
                  ? jQuery("head").append(
                      jQuery('<link rel="stylesheet" type="text/css" />').attr(
                        "href",
                        tk_common.utils.buildUrl(
                          this._guiAssetBaseUrl,
                          "guiZh.css"
                        )
                      )
                    )
                  : jQuery("head").append(
                      jQuery('<link rel="stylesheet" type="text/css" />').attr(
                        "href",
                        tk_common.utils.buildUrl(
                          this._guiAssetBaseUrl,
                          "guiZht.css"
                        )
                      )
                    )),
              void 0 !== this._guiInitData.gameGuiCss &&
                jQuery("head").append(
                  jQuery('<link rel="stylesheet" type="text/css" />').attr(
                    "href",
                    tk_common.utils.buildUrl(
                      this._guiAssetBaseUrl,
                      this._guiInitData.gameGuiCss
                    )
                  )
                ),
              e.setParameterValue("bonusSpinsWon", "", !0),
              e.setParameterValue("freeRoundsLeft", "", !0);
          }),
          (i.prototype.handleFullScreenClick = function () {
            this.onFullScreenClick.dispatch(!0);
          }),
          (i.prototype.setOcEnabled = function (t) {
            t &&
              (this._ocInitialized ||
                ((this._ocInitialized = !0),
                (this._popupMenuManager.ocEnabled = !0)));
          }),
          (i.prototype.setStopOnFeatureWonChecked = function (t) {
            this._controlPanelManager.stopOnFeatureWonChecked = t;
          }),
          (i.prototype.setShowStopAutoplayOnFeatureWon = function (t) {
            this._controlPanelManager.showStopAutoplayOnFeatureWon = t;
          }),
          (i.prototype.setShowBackToLobbyButton = function (t) {
            this._popupMenuManager.showBackToLobbyButton = t;
          }),
          (i.prototype.setShowHistoryButton = function (t) {
            this._popupMenuManager.showHistoryButton = t;
          }),
          (i.prototype.setShowVibrateButton = function (t) {
            this._popupMenuManager.showVibrateButton = t;
          }),
          (i.prototype.setVibrateButtonChecked = function (t) {
            this._popupMenuManager.setVibrateButtonChecked(t);
          }),
          (i.prototype.setShowLoginButton = function (t) {
            this._dialog.showLogin = t;
          }),
          (i.prototype.setShowDepositButton = function (t) {
            this._dialog.showDeposit = t;
          }),
          (i.prototype.setPlayMode = function (t) {
            //this._infoBarManager.setPlayMode(t);
          }),
          (i.prototype.setGameVersion = function (t) {
            this._infoBarManager.setVersion(t);
          }),
          (i.prototype.isInitialized = function () {
            return !0;
          }),
          (i.prototype.getAutoPlayLossLimitValue = function () {
            return this._controlPanelManager.getAutoPlayLossLimitValue();
          }),
          (i.prototype.getAutoPlaySingleWinLimitValue = function () {
            return this._controlPanelManager.getAutoPlaySingleWinLimitValue();
          }),
          (i.prototype.isVisible = function () {
            return this._isVisible;
          }),
          (i.prototype.setGameTopMargin = function (t) {
            this._gameTopMargin = t;
          }),
          (i.prototype.showGui = function () {
            (this._isVisible = !0),
              this._guiContainer.css("display", "block"),
              this._bottomBarManager.show(),
              this._popupMenuManager.show(),
              this._actionButtonsManager.show(),
              this._showInfoBar && this._infoBarManager.show(),
              this.hidePopupMenu();
          }),
          (i.prototype.hideGui = function () {
            (this._isVisible = !1),
              this._bottomBarManager.hide(),
              this._popupMenuManager.hide(),
              this._actionButtonsManager.hide(),
              this._showInfoBar && this._infoBarManager.hide();
          }),
          (i.prototype.showOc = function () {
            this._ocDialogManager && this._ocDialogManager.show();
          }),
          (i.prototype.hideOc = function () {
            this._ocDialogManager && this._ocDialogManager.hide(!0);
          }),
          (i.prototype.setOcActionList = function (t, e) {
            this._ocDialogManager &&
              this._ocDialogManager.setQueuedActionsList(t, e);
          }),
          (i.prototype.makeGuiUnselectable = function (e) {
            i.addCssClassRecursively(
              jQuery("#" + e),
              t.MobileGui.CSS_CLASS_UNSELECTABLE
            );
          }),
          (i.addCssClassRecursively = function (t, e) {
            jQuery(t).addClass(e),
              jQuery(t)
                .children()
                .each(function () {
                  jQuery(this).addClass(e),
                    i.addCssClassRecursively(jQuery(this), e);
                });
          }),
          (i.prototype.activateIosFullScreenSwipeManager = function () {
            var t,
              e = this;
            ((this._guiSettingsHelper.useKineticScroll = !1),
            !this._guiSettingsHelper.isAppleDevice ||
              this._guiSettingsHelper.isIosChrome ||
              this._guiSettingsHelper.isFirefox ||
              this._guiSettingsHelper.isDesktop ||
              !this._guiSettingsHelper.isAtLeastIos8 ||
              this._guiSettingsHelper.isUiWebView)
              ? jQuery("#fullscreenMask").remove()
              : ((this._guiSettingsHelper.useKineticScroll = !0),
                jQuery("#content").css("position", "fixed"),
                jQuery("body").css("overflow", ""),
                (t = gajus.Scream({})),
                gajus.Brim({ viewport: t }).on("viewchange", function (t) {
                  "full" === t.viewName
                    ? e.onIosFullscreenModeChanged.dispatch(!0)
                    : e.onIosFullscreenModeChanged.dispatch(!1),
                    (document.body.className = t.viewName);
                }));
          }),
          (i.prototype.buildTopSpinsManager = function (e) {
            var n = this,
              s = jQuery("#" + e);
            (this._topSpinsManager = new t.TopSpinManager()),
              this._topSpinsManager.buildContent(s, {
                createDivElement: function (t, e, s) {
                  return n.createDivElement(t, e, s);
                },
                createImgElement: function (t, e, s, i) {
                  return n.createImgElement(t, e, s, i);
                },
                createLabelTextElement: function (t, e, s, i) {
                  return n.createLabelTextElement(t, e, s, i);
                },
                createLabelHtmlElement: function (t, e, s, i) {
                  return n.createLabelHtmlElement(t, e, s, i);
                },
                createTextInputElement: function (t, e, s) {
                  return n.createTextInputElement(t, e, s);
                },
              }),
              (this._topSpinsManager.guiSettingsHelper =
                this._guiSettingsHelper);
          }),
          (i.prototype.buildNumPadManager = function (e) {
            var n = this,
              s = jQuery("#" + e);
            (this._numPadManager = new t.NumPadManager(
              this._guiSettingsHelper
            )),
              this._numPadManager.buildContent(s, {
                createDivElement: function (t, e, s) {
                  return n.createDivElement(t, e, s);
                },
                createImgElement: function (t, e, s, i) {
                  return n.createImgElement(t, e, s, i);
                },
                createLabelTextElement: function (t, e, s, i) {
                  return n.createLabelTextElement(t, e, s, i);
                },
                createLabelHtmlElement: function (t, e, s, i) {
                  return n.createLabelHtmlElement(t, e, s, i);
                },
                createTextInputElement: function (t, e, s) {
                  return n.createTextInputElement(t, e, s);
                },
              }),
              (this._controlPanelManager.numPadManager = this._numPadManager);
          }),
          (i.prototype.buildPopupMenuManager = function (e) {
            var n = this,
              s = jQuery("#" + e);
            this._popupMenuManager = new t.PopupMenuManager(
              this._gameInstanceId,
              this._guiSettingsHelper
            );
            var i = this.createDivElement(s, "popupContainer");
            this._popupMenuManager.buildContent(i, {
              createDivElement: function (t, e, s) {
                return n.createDivElement(t, e, s);
              },
              createImgElement: function (t, e, s, i) {
                return n.createImgElement(t, e, s, i);
              },
              createLabelTextElement: function (t, e, s, i) {
                return n.createLabelTextElement(t, e, s, i);
              },
              createLabelHtmlElement: function (t, e, s, i) {
                return n.createLabelHtmlElement(t, e, s, i);
              },
              createTextInputElement: function (t, e, s) {
                return n.createTextInputElement(t, e, s);
              },
            }),
              this._popupMenuManager.onGuiButtonClicked.add(
                this.handleGuiButtonClicked,
                this
              ),
              this._popupMenuManager.visibilityChanged.add(
                this.handlePoupMenuVisibilityChanged,
                this
              );
          }),
          (i.prototype.handlePoupMenuVisibilityChanged = function (t) {
            this.onPopupMenuVisibilityChanged.dispatch(t),
              this._actionButtonsManager.handlePopupMenuVisibilityChanged(t),
              this._isTopSpinMode &&
                (t
                  ? this._topSpinsManager.hide()
                  : this._topSpinsManager.show());
          }),
          (i.prototype.buildInfoBarManager = function (e, n, s) {
            var i = this,
              o = jQuery("#" + e);
            (this._infoBarManager = new t.InfoBarManager(n, s)),
              this._infoBarManager.buildContent(o, {
                createDivElement: function (t, e, n) {
                  return i.createDivElement(t, e, n);
                },
                createImgElement: function (t, e, n, s) {
                  return i.createImgElement(t, e, n, s);
                },
                createLabelTextElement: function (t, e, n, s) {
                  return i.createLabelTextElement(t, e, n, s);
                },
                createLabelHtmlElement: function (t, e, n, s) {
                  return i.createLabelHtmlElement(t, e, n, s);
                },
                createTextInputElement: function (t, e, n) {
                  return i.createTextInputElement(t, e, n);
                },
              }),
              this._infoBarManager.onGuiButtonClicked.add(
                this.handleGuiButtonClicked,
                this
              );
          }),
          (i.prototype.buildFadeOverlay = function (e) {
            var n = jQuery("#" + e),
              s = this.createDivElement(n, "fadeOverlay");
            s.addClass("fadedOut"),
              s.addClass("fadeOverlay"),
              s.addClass("fadeFader"),
              s.css("width", "1280px"),
              s.css("height", "720px"),
              (this._fadeOverlay = new t.FadeOverlay(
                !1,
                s,
                this._gameInstanceId
              ));
          }),
          (i.prototype.buildDialog = function (e) {
            var n = this,
              s = jQuery("#" + e),
              i = this.createDivElement(s, "dialogContainer");
            (this._dialog = new t.Dialog()),
              (this._dialog.showRealityCheckHistoryButton =
                this._guiInitData.showHistoryLinkInRealityCheckDialog),
              (this._dialog.showRealityCheckLogoutButton =
                this._guiInitData.realityCheckDialogSettings.useLogOutButton),
              (this._dialog.realityCheckDialogTitlePhraseId =
                this._guiInitData.realityCheckDialogSettings.titlePhraseId),
              (this._dialog.accountButtonPhraseId =
                this._guiInitData.realityCheckDialogSettings.accountButtonPhraseId),
              (this._dialog.realityCheckDialogWonPhraseId =
                this._guiInitData.realityCheckDialogSettings.wonPhraseId),
              (this._dialog.realityCheckDialogLostPhraseId =
                this._guiInitData.realityCheckDialogSettings.lostPhraseId),
              this._dialog.buildContent(i, {
                createDivElement: function (t, e, s) {
                  return n.createDivElement(t, e, s);
                },
                createImgElement: function (t, e, s, i) {
                  return n.createImgElement(t, e, s, i);
                },
                createLabelTextElement: function (t, e, s, i) {
                  return n.createLabelTextElement(t, e, s, i);
                },
                createLabelHtmlElement: function (t, e, s, i) {
                  return n.createLabelHtmlElement(t, e, s, i);
                },
                createTextInputElement: function (t, e, s) {
                  return n.createTextInputElement(t, e, s);
                },
              }),
              this._dialog.DialogButtonClicked.add(
                this.handleDialogButtonClicked,
                this
              );
          }),
          (i.prototype.buildOcDialog = function (e) {
            var n = this,
              s = jQuery("#" + e),
              i = this.createDivElement(s, "ocDialogContainer");
            (this._ocDialogManager = new t.OcDialogManager()),
              void 0 !== this._ocConfiguration &&
                (this._ocDialogManager.setConfiguration(this._ocConfiguration),
                this._ocDialogManager.buildContent(i, {
                  createDivElement: function (t, e, s) {
                    return n.createDivElement(t, e, s);
                  },
                  createImgElement: function (t, e, s, i) {
                    return n.createImgElement(t, e, s, i);
                  },
                  createLabelTextElement: function (t, e, s, i) {
                    return n.createLabelTextElement(t, e, s, i);
                  },
                  createLabelHtmlElement: function (t, e, s, i) {
                    return n.createLabelHtmlElement(t, e, s, i);
                  },
                  createTextInputElement: function (t, e, s) {
                    return n.createTextInputElement(t, e, s);
                  },
                }),
                this._ocDialogManager.DialogButtonClicked.add(
                  this.handleOcDialogButtonClicked,
                  this
                ),
                this._ocDialogManager.ApplyCustomOutcomeButtonClicked.add(
                  this.handleApplyCustomOutcome,
                  this
                ),
                this._ocDialogManager.ClearCustomOutcomeButtonClicked.add(
                  this.handleClearCustomOutcome,
                  this
                ));
          }),
          (i.prototype.handleApplyCustomOutcome = function (t) {
            this.onDialogButtonClicked.dispatch(
              tk_common.slots.gui.DialogTypeEnum.OC,
              tk_common.slots.gui.GuiButtonIds.APPLY,
              t
            );
          }),
          (i.prototype.handleClearCustomOutcome = function (t) {
            this.onDialogButtonClicked.dispatch(
              tk_common.slots.gui.DialogTypeEnum.OC,
              tk_common.slots.gui.GuiButtonIds.CLEAR,
              null
            );
          }),
          (i.prototype.handleOcDialogButtonClicked = function (t, e) {
            this.onDialogButtonClicked.dispatch(
              tk_common.slots.gui.DialogTypeEnum.OC,
              tk_common.slots.gui.GuiButtonIds.OC,
              t,
              e
            );
          }),
          (i.prototype.handleDialogButtonClicked = function (t, e, s) {
            var i = this;
            t === n.CUSTOM ||
            (e === tk_common.slots.gui.GuiButtonIds.ACCOUNT &&
              t ===
                tk_common.slots.gui.DialogTypeEnum
                  .PLAY_TIME_EXCEEDED_LOST_MONEY) ||
            (e === tk_common.slots.gui.GuiButtonIds.ACCOUNT &&
              t ===
                tk_common.slots.gui.DialogTypeEnum.PLAY_TIME_EXCEEDED_WON_MONEY)
              ? this.dispatchDelayedDialogClick(t, e, s)
              : (setTimeout(function () {
                  return i.dispatchDelayedDialogClick(t, e, s);
                }, 110),
                this._dialog.hide(!0));
          }),
          (i.prototype.dispatchDelayedDialogClick = function (t, e, n) {
            this.onDialogButtonClicked.dispatch(t, e, n);
          }),
          (i.prototype.buildControlPanel = function (e, n) {
            var s = this,
              i = jQuery("#" + e);
            (this._controlPanelManager = new t.ControlPanelManager(
              this._paytableHelper,
              this._guiSettingsHelper,
              n
            )),
              this._controlPanelManager.buildContent(i, {
                createDivElement: function (t, e, n) {
                  return s.createDivElement(t, e, n);
                },
                createImgElement: function (t, e, n, i) {
                  return s.createImgElement(t, e, n, i);
                },
                createLabelTextElement: function (t, e, n, i) {
                  return s.createLabelTextElement(t, e, n, i);
                },
                createLabelHtmlElement: function (t, e, n, i) {
                  return s.createLabelHtmlElement(t, e, n, i);
                },
                createTextInputElement: function (t, e, n) {
                  return s.createTextInputElement(t, e, n);
                },
              }),
              (this._controlPanelManager.showAutoplayStopOptions =
                this._guiInitData.showAdvancedAutoplaySettings),
              (this._controlPanelManager.autoplayLossLimitRequired =
                this._guiInitData.requireLossLimitInAutoPlay),
              this._controlPanelManager.PageButtonClicked.add(
                this.handleControlPanelPageButtonClicked,
                this
              ),
              this._controlPanelManager.AutoplayValueChanged.add(
                this.handleAutoplayValueChanged,
                this
              ),
              this._controlPanelManager.BetPageButtonClicked.add(
                this.handleBetPageButtonClicked,
                this
              ),
              this._controlPanelManager.BackButtonClicked.add(
                this.handleBackButtonClicked,
                this
              ),
              this._controlPanelManager.StopOnFeatureWonValueChanged.add(
                this.handleStopOnFeatureWonValueChanged,
                this
              ),
              this._controlPanelManager.DetailsButtonClicked.add(
                this.handleDetailsButtonClicked,
                this
              );
          }),
          (i.prototype.handleDetailsButtonClicked = function (t) {
            this.onControlPanelButtonClicked.dispatch(
              tk_common.slots.gui.PageIds.HISTORY,
              t
            );
          }),
          (i.prototype.handleStopOnFeatureWonValueChanged = function (t) {
            this.onStopOnFeatureWonValueChanged.dispatch(t);
          }),
          (i.prototype.handleControlPanelPageButtonClicked = function (t) {
            this.onGuiButtonClicked.dispatch(t);
          }),
          (i.prototype.handleBackButtonClicked = function () {
            this.onGuiButtonClicked.dispatch(
              tk_common.slots.gui.GuiButtonIds.BACK_TO_GAME
            );
          }),
          (i.prototype.showFade = function (t, e) {
            this._fadeOverlay.show(!0, t, e);
          }),
          (i.prototype.hideFade = function (t, e) {
            this._fadeOverlay.show(!1, t, e);
          }),
          (i.prototype.handleAutoplayValueChanged = function (t) {
            this.onControlPanelButtonClicked.dispatch(
              tk_common.slots.gui.PageIds.AUTO_PLAY,
              t
            );
          }),
          (i.prototype.handleBetPageButtonClicked = function (t) {
            this.onControlPanelButtonClicked.dispatch(
              tk_common.slots.gui.PageIds.BET,
              t
            );
          }),
          (i.prototype.showControlPanel = function (t, e, n) {
            this._actionButtonsManager.setControlPanelMode(!0),
              this._controlPanelManager.showPage(t, e),
              (this._currentControlPanelPage = t),
              this._isTopSpinMode && this._topSpinsManager.hide(),
              (this._forceLayout = !0),
              this.layout(
                !1,
                this._orientation,
                this._gameContainerArea,
                this._gameArea
              );
          }),
          (i.prototype.hideControlPanel = function (t, e) {
            this._controlPanelManager.hidePage(t),
              this._actionButtonsManager.setControlPanelMode(!1),
              (this._currentControlPanelPage = void 0),
              this._isTopSpinMode &&
                !this._popupMenuManager.isShowing &&
                this._topSpinsManager.show(),
              (this._forceLayout = !0),
              this.forceLayout(
                !1,
                this._orientation,
                this._gameContainerArea,
                this._gameArea
              );
          }),
          (i.prototype.isControlPanelOpen = function () {
            return (this._isControlPanelOpen =
              this._controlPanelManager.isVisible);
          }),
          (i.prototype.showDialog = function (t) {
            t === n.OC
              ? this._ocDialogManager && this._ocDialogManager.show()
              : t === n.TOP_SPINS_COMPLETED
              ? (this._topSpinsManager.OkButtonClicked.addOnce(
                  this.handleTopSpinsFinalDialogOkButtonClicked,
                  this
                ),
                this._topSpinsManager.showCompleteDialog())
              : this._dialog.show(t);
          }),
          (i.prototype.setCustomDialogButtons = function (t) {
            this._dialog.setCustomDialogButtons(t);
          }),
          (i.prototype.setHandedness = function (t) {
            this._popupMenuManager.setHandedness(t),
              this._actionButtonsManager.setHandedness(t),
              this._bottomBarManager.setHandedness(t),
              this._topSpinsManager.setHandedness(t),
              this.layout(
                !0,
                this._orientation,
                this._gameContainerArea,
                this._gameArea
              );
          }),
          (i.prototype.handleTopSpinsFinalDialogOkButtonClicked = function () {
            this.dispatchDelayedDialogClick(
              tk_common.slots.gui.DialogTypeEnum.TOP_SPINS_COMPLETED,
              tk_common.slots.gui.GuiButtonIds.OK
            ),
              this._topSpinsManager.hide(),
              (this._isTopSpinMode = !1);
          }),
          (i.prototype.hideDialog = function () {
            this._dialog.hide(!0);
          }),
          (i.prototype.setHistoryData = function (t) {
            this._controlPanelManager.setHistoryData(t);
          }),
          (i.prototype.setSoundButtonSelected = function (t) {
            (this._actionButtonsManager.soundButtonSelected = t),
              (this._popupMenuManager.soundButtonSelected = t);
          }),
          (i.prototype.hidePopupMenu = function () {
            this._controlPanelManager.isVisible ||
              this._popupMenuManager.toggleShow(!1);
          }),
          (i.prototype.preventPopupMenu = function (t, e) {
            var n = t;
            t
              ? (this._popupMenuManager.toggleShow(!1),
                this._guiSettingsHelper.updateOverrides(e || "gui", {
                  popUpMenuButton: { enabled: !1 },
                }))
              : this._guiSettingsHelper.updateOverrides(e || "gui", {
                  popUpMenuButton: { enabled: void 0 },
                }),
              this._popupMenuManager.preventPopupMenu(n);
          }),
          (i.prototype.enableGuiButton = function (t, e, n) {
            switch (t) {
              case tk_common.slots.gui.GuiButtonIds.BET:
                this._actionButtonsManager.enableBetButton(e);
            }
          }),
          (i.prototype.setDialogModalMode = function (t, e, n) {
            this._guiSettingsHelper.setDialogModalMode(t, e, n || "gui");
            var s =
              this._guiSettingsHelper.getButtonEnabledOverrideState(
                "popUpMenuButton"
              );
            this._popupMenuManager.isShowing &&
              !1 === s &&
              this._popupMenuManager.toggleShow(!1);
          }),
          (i.prototype.setPopupMenuOnlyMode = function (t) {
            t
              ? this._actionButtonsManager.hide()
              : this._actionButtonsManager.show();
          }),
          (i.prototype.setSoundLoadMode = function (t) {
            this._popupMenuManager.loadSoundMode = t;
          }),
          (i.prototype.setSpinMode = function (t) {
            this._actionButtonsManager.setSpinMode(t);
          }),
          (i.prototype.setQuickStopMode = function (t) {
            this._actionButtonsManager.setQuickStopMode(t);
          }),
          (i.prototype.setSingleSpinMode = function (t) {
            this._popupMenuManager.enableOpenMenuButton(!0),
              this._bottomBarManager.setSingleSpinMode(),
              this._topSpinsManager.showingFinalDialog ||
                this._popupMenuManager.setSingleSpinMode(),
              this._controlPanelManager.autoplayPage.clear(),
              this._actionButtonsManager.setSingleSpinMode(t);
          }),
          (i.prototype.setSkipMode = function (t) {
            this._actionButtonsManager.setSkipMode(t);
          }),
          (i.prototype.setSkipDuringFeatureMode = function (t) {
            this._actionButtonsManager.setSkipDuringFeatureMode(t);
          }),
          (i.prototype.setQuickStopDuringFeatureMode = function (t) {
            this._actionButtonsManager.setQuickStopDuringFeatureMode(t);
          }),
          (i.prototype.setAutoSpinMode = function (t, e) {
            this._actionButtonsManager.setAutospinMode(t, e);
          }),
          (i.prototype.setLastAutoSpinMode = function (t) {
            this._actionButtonsManager.setAutospinMode(t, !1),
              this._actionButtonsManager.enableBetButton(!1),
              this._actionButtonsManager.enableAutospinConfigButton(!1),
              this.disableSpinButton();
          }),
          (i.prototype.setFreeRoundsMode = function (t, e) {
            this.setLanguageParameterValue("freeRoundsLeft", t.toString()),
              this._popupMenuManager.enableOpenMenuButton(!0),
              this._bottomBarManager.setFreeRoundsMode(t),
              this._actionButtonsManager.setFreeRoundsMode(t, e);
          }),
          (i.prototype.setFreeRoundsFeatureMode = function (t, e, n) {
            this.setLanguageParameterValue("freeRoundsLeft", t.toString()),
              this._popupMenuManager.enableOpenMenuButton(!0),
              this._bottomBarManager.setFreeRoundsMode(t),
              this._actionButtonsManager.setFreeRoundsFeatureMode(e, n);
          }),
          (i.prototype.setFeatureRoundsMode = function (t, e) {
            this._popupMenuManager.enableOpenMenuButton(!0),
              this._bottomBarManager.setFeatureRoundsMode(t),
              this._actionButtonsManager.setFeatureRoundsMode(t, e);
          }),
          (i.prototype.setFeatureRoundsModeWithCustomValue = function (t, e) {
            this.setFeatureRoundsMode(0, e),
              this._actionButtonsManager.setCustomFeatureRoundsValue(t);
          }),
          (i.prototype.setTopSpinsMode = function (t, e, n) {
            null !== e && this._topSpinsManager.numberOfRows(e.length),
              (this._topSpinsManager.spinsLeft = t),
              (this._topSpinsManager.currentWins = e),
              (this._topSpinsManager.totalWin = n);
          }),
          (i.prototype.showTopSpinView = function () {
            (this._isTopSpinMode = !0),
              this._actionButtonsManager.setTopSpinMode(),
              this._popupMenuManager.setTopSpinsFeatureMode(),
              this._topSpinsManager.show();
          }),
          (i.prototype.hideTopSpinView = function () {
            (this._isTopSpinMode = !1),
              this._actionButtonsManager.removeTopSpinMode(),
              this._topSpinsManager.hide();
          }),
          (i.prototype.showSplashScreenView = function () {
            this._bottomBarManager.hide(),
              this._popupMenuManager.hide(),
              this._actionButtonsManager.hide(),
              this._showInfoBar && this._infoBarManager.hide();
          }),
          (i.prototype.hideSplashScreenView = function () {
            this._bottomBarManager.show(),
              this._popupMenuManager.show(),
              this._actionButtonsManager.show(),
              this._showInfoBar && this._infoBarManager.show();
          }),
          Object.defineProperty(i.prototype, "isShowingTopSpinsFinalDialog", {
            get: function () {
              return this._topSpinsManager.showingFinalDialog;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (i.prototype.animateInTopSpinView = function () {
            this._topSpinsManager.open();
          }),
          (i.prototype.animateOutTopSpinView = function () {
            this._topSpinsManager.close();
          }),
          (i.prototype.playSpinAnimation = function (t) {
            this._actionButtonsManager.playSpinButtonRotation(t);
          }),
          (i.prototype.enableSpinButton = function () {
            this._actionButtonsManager.enableSpinButton(!0);
          }),
          (i.prototype.disableSpinButton = function () {
            this._actionButtonsManager.enableSpinButton(!1);
          }),
          (i.prototype.handleGuiButtonClicked = function (t) {
            t === tk_common.slots.gui.GuiButtonIds.BET &&
              this._controlPanelManager.isVisible &&
              this._controlPanelManager.currentPage === e.BET &&
              (t = tk_common.slots.gui.GuiButtonIds.BACK_TO_GAME),
              t === tk_common.slots.gui.GuiButtonIds.AUTO_PLAY &&
                this._controlPanelManager.isVisible &&
                this._controlPanelManager.currentPage === e.AUTO_PLAY &&
                (t = tk_common.slots.gui.GuiButtonIds.BACK_TO_GAME),
              t === tk_common.slots.gui.GuiButtonIds.GAME_RULES &&
                this._controlPanelManager.isVisible &&
                this._controlPanelManager.currentPage === e.GAME_RULES &&
                (t = tk_common.slots.gui.GuiButtonIds.BACK_TO_GAME),
              t === tk_common.slots.gui.GuiButtonIds.PAY_TABLE &&
                this._controlPanelManager.isVisible &&
                this._controlPanelManager.currentPage === e.PAY_TABLE &&
                (t = tk_common.slots.gui.GuiButtonIds.BACK_TO_GAME),
              t === tk_common.slots.gui.GuiButtonIds.HISTORY &&
                this._controlPanelManager.isVisible &&
                this._controlPanelManager.currentPage === e.HISTORY &&
                (t = tk_common.slots.gui.GuiButtonIds.BACK_TO_GAME),
              this.onGuiButtonClicked.dispatch(t);
          }),
          (i.prototype.buildActionButtons = function (e) {
            var n = this,
              s = jQuery("#" + e),
              i = this.createDivElement(s, "actionButtonsContainer");
            (this._actionButtonsManager = new t.ActionButtonsManager(
              this._hasMaximizedPortrait,
              this._guiInitData.useDesktopGui,
              this._guiSettingsHelper
            )),
              this._actionButtonsManager.buildContent(i, {
                createDivElement: function (t, e, s) {
                  return n.createDivElement(t, e, s);
                },
                createImgElement: function (t, e, s, i) {
                  return n.createImgElement(t, e, s, i);
                },
                createLabelTextElement: function (t, e, s, i) {
                  return n.createLabelTextElement(t, e, s, i);
                },
                createLabelHtmlElement: function (t, e, s, i) {
                  return n.createLabelHtmlElement(t, e, s, i);
                },
                createTextInputElement: function (t, e, s) {
                  return n.createTextInputElement(t, e, s);
                },
              }),
              this._actionButtonsManager.onGuiButtonClicked.add(
                this.handleGuiButtonClicked,
                this
              ),
              this._actionButtonsManager.hide();
          }),
          (i.prototype.buildBottomBar = function (e) {
            var n = this,
              s = jQuery("#" + e);
            (this._bottomBarManager = new t.BottomBarManager(
              this._guiSettingsHelper
            )),
              this._bottomBarManager.buildContent(s, {
                createDivElement: function (t, e, s) {
                  return n.createDivElement(t, e, s);
                },
                createImgElement: function (t, e, s, i) {
                  return n.createImgElement(t, e, s, i);
                },
                createLabelTextElement: function (t, e, s, i) {
                  return n.createLabelTextElement(t, e, s, i);
                },
                createLabelHtmlElement: function (t, e, s, i) {
                  return n.createLabelHtmlElement(t, e, s, i);
                },
                createTextInputElement: function (t, e, s) {
                  return n.createTextInputElement(t, e, s);
                },
              }),
              this._bottomBarManager.hide();
          }),
          (i.prototype.createDivElement = function (t, e, n) {
            var s = this.createElementId(e);
            t.append("<div id='" + s + "'></div>");
            var i = jQuery("#" + s);
            return (
              i.css("position", "absolute"),
              this.addClassesToElement(i, n),
              (this._cachedElements[s] = i),
              i
            );
          }),
          (i.prototype.createImgElement = function (t, e, n, s) {
            var i = this.createElementId(e);
            (n = tk_common.utils.buildUrl(this._guiAssetBaseUrl, n)),
              t.append("<img id='" + i + "' src='" + n + "'></img>");
            var o = jQuery("#" + i);
            return (
              o.css("position", "absolute"),
              this.addClassesToElement(o, s),
              (this._cachedElements[i] = o),
              o
            );
          }),
          (i.prototype.createTextInputElement = function (t, e, n, s, i) {
            var o = this.createElementId(e);
            t.append("<input type='text' size='40' id='" + o + "'></input>");
            var a = jQuery("#" + o);
            return (
              a.css("position", "absolute"),
              this.addClassesToElement(a, i),
              (this._cachedElements[o] = a),
              a
            );
          }),
          (i.prototype.createLabelTextElement = function (t, e, n, s) {
            var i = this.createElementId(e);
            t.append("<label id='" + i + "'>" + n + "</label>");
            var o = jQuery("#" + i);
            return (
              o.css("position", "absolute"),
              this.addClassesToElement(o, s),
              this.bindLabelFunctionToLanguageSystem(
                n,
                this.createLabelTextUpdateFunction(i)
              ),
              (this._cachedElements[i] = o),
              o
            );
          }),
          (i.prototype.createLabelTextUpdateFunction = function (t) {
            var e = { elementId: t, cachedElement: jQuery("#" + t) };
            return function (n, s) {
              null !== e.cachedElement && (e.cachedElement = jQuery("#" + t)),
                e.cachedElement.text(s);
            };
          }),
          (i.prototype.createLabelHtmlElement = function (t, e, n, s) {
            var i = this.createElementId(e);
            t.append("<label id='" + i + "'>" + n + "</label>");
            var o = jQuery("#" + i);
            return (
              o.css("position", "absolute"),
              this.addClassesToElement(o, s),
              this.bindLabelFunctionToLanguageSystem(
                n,
                this.createLabelHtmlUpdateFunction(i)
              ),
              (this._cachedElements[i] = o),
              o
            );
          }),
          (i.prototype.createLabelHtmlUpdateFunction = function (t) {
            var e = { elementId: t, cachedElement: jQuery("#" + t) };
            return function (n, s) {
              null !== e.cachedElement && (e.cachedElement = jQuery("#" + t)),
                (s = s.replace(/(\r\n)|(\r|\n)/g, "<br>")),
                e.cachedElement.html(s);
            };
          }),
          (i.prototype.clickSpinButton = function () {
            this._actionButtonsManager.clickSpinButton();
          }),
          (i.prototype.addClassesToElement = function (t, e) {
            if (null != e)
              for (var n = 0; n < e.length; n++) t = t.addClass(e[n]);
            return t;
          }),
          (i.prototype.updatePageSettings = function (t, e) {
            this._controlPanelManager.updatePageSettings(t, e);
          }),
          (i.prototype.isPopupMenuOpen = function () {
            return this._popupMenuManager.isShowing;
          }),
          (i.prototype.setOverrideOrientation = function (t) {
            this._overrideOrientation = t;
          }),
          (i.prototype.update = function (t) {
            throw "MobileGui.update is abstract. Override in subclass.";
          }),
          (i.prototype.forceLayout = function (t, e, n, s) {
            (this._forceLayout = !0), this.layout(t, e, n, s);
          }),
          (i.prototype.layout = function (t, e, n, s) {
            var i = this._forceLayout;
            if (
              (this._cachedLayoutValues ||
                ((this._cachedLayoutValues = {
                  gameArea: null,
                  gameContainerArea: null,
                  hasGuiHelper: void 0,
                  isAppleDevice: void 0,
                  isIpad: void 0,
                  onlyVisible: void 0,
                  orientation: void 0,
                  customPopUpMenuButtonTopOffset: void 0,
                  portraitButtonOffset: void 0,
                }),
                (i = !0)),
              (e = null != e ? e : this._cachedLayoutValues.orientation),
              null != n)
            ) {
              var o = n.width / 1280,
                a = 1280 / n.width;
              null != this._overrideOrientation &&
                (e = this._overrideOrientation),
                (this._orientation = e),
                (this._gameContainerArea = n),
                (this._gameArea = s),
                (i =
                  (i =
                    (i =
                      (i =
                        (i =
                          i || !(e === this._cachedLayoutValues.orientation)) ||
                        !(n === this._cachedLayoutValues.gameContainerArea)) ||
                      !(s === this._cachedLayoutValues.gameArea)) ||
                    !(
                      this._cachedLayoutValues.portraitButtonOffset ===
                      this._guiSettingsHelper.portraitButtonOffset
                    )) ||
                  !(
                    this._cachedLayoutValues.customPopUpMenuButtonTopOffset ===
                    this._guiSettingsHelper.customPopUpMenuButtonTopOffset
                  )),
                (this._cachedLayoutValues.orientation = e),
                (this._cachedLayoutValues.gameContainerArea = n),
                (this._cachedLayoutValues.gameArea = s),
                (this._cachedLayoutValues.portraitButtonOffset =
                  this._guiSettingsHelper.portraitButtonOffset),
                (this._cachedLayoutValues.customPopUpMenuButtonTopOffset =
                  this._guiSettingsHelper.customPopUpMenuButtonTopOffset),
                this._guiContainer.css("top", 0),
                this._guiContainer.css("left", 0),
                i &&
                  (e === tk_common.constants.OrientationEnum.LANDSCAPE
                    ? (this._fullScreenClickArea.css("width", "1280px"),
                      this._fullScreenClickArea.css("height", "720px"))
                    : // this._lockScreenElement.css("width", "1280px"),
                      // this._lockScreenElement.css("height", "720px"))
                      (this._fullScreenClickArea.css(
                        "width",
                        n.width * a + "px"
                      ),
                      this._fullScreenClickArea.css(
                        "height",
                        n.height * a + "px"
                      ))),
                      // this._lockScreenElement.css("width", n.width * a + "px"),
                      // this._lockScreenElement.css(
                      //   "height",
                      //   n.height * a + "px"
                      // )
                (i =
                  i ||
                  (null != this._guiBuildHelper &&
                    !1 === this._cachedLayoutValues.hasGuiHelper)),
                null !== this._guiBuildHelper &&
                  ((this._cachedLayoutValues.hasGuiHelper = !0),
                  i &&
                    this._guiBuildHelper.layout(
                      e,
                      n,
                      s,
                      this._guiInitData.useDesktopGui,
                      this._hasMaximizedPortrait,
                      this.isControlPanelOpen(),
                      this._showInfoBar,
                      this._gameTopMargin,
                      this._languageSystem.activeLanguageIso
                    ));
              var l =
                this._guiSettingsHelper.isAppleDevice &&
                !this._guiSettingsHelper.isIosChrome &&
                !this._guiInitData.useDesktopGui &&
                this._guiSettingsHelper.isAtLeastIos8 &&
                !this._guiSettingsHelper.isUiWebView;
              if (
                ((i = i || !(l === this._cachedLayoutValues.isAppleDevice)),
                (this._cachedLayoutValues.isAppleDevice = l),
                l)
              ) {
                var r = this._guiSettingsHelper.isIpad;
                (i = i || !(r === this._cachedLayoutValues.isIpad)),
                  (this._cachedLayoutValues.isIpad = !0),
                  e === tk_common.constants.OrientationEnum.LANDSCAPE
                    ? (this._guiContainer.css(
                        "top",
                        this._gameTopMargin + "px"
                      ),
                      r
                        ? (this._swipeFinger.css("left", 540 * o + "px"),
                          this._swipeFinger.css("width", 250 * o + "px"),
                          this._swipeFinger.css("height", 210 * o + "px"),
                          this._swipeFinger.css("top", 120 * o + "px"))
                        : (this._swipeFinger.css("left", 470 * o + "px"),
                          this._swipeFinger.css("top", "0px"),
                          this._swipeFinger.css("width", 350 * o + "px"),
                          this._swipeFinger.css("height", 310 * o + "px")),
                      this._swipeFinger.addClass(
                        "scrollFingerAnimationLandscape"
                      ),
                      this._swipeFinger.removeClass(
                        "scrollFingerAnimationPortrait"
                      ))
                    : (r
                        ? (this._swipeFinger.css("left", 540 * o + "px"),
                          this._swipeFinger.css("top", 120 * o + "px"),
                          this._swipeFinger.css("width", 350 * o + "px"),
                          this._swipeFinger.css("height", 310 * o + "px"))
                        : (this._swipeFinger.css("left", 440 * o + "px"),
                          this._swipeFinger.css("top", "0px"),
                          this._swipeFinger.css("width", 450 * o + "px"),
                          this._swipeFinger.css("height", 410 * o + "px")),
                      this._swipeFinger.addClass(
                        "scrollFingerAnimationPortrait"
                      ),
                      this._swipeFinger.removeClass(
                        "scrollFingerAnimationLandscape"
                      ));
              } else this._guiContainer.css("top", this._gameTopMargin + "px");
              this._showInfoBar &&
                this._infoBarManager.layout(
                  e,
                  n,
                  s,
                  this._guiInitData.useDesktopGui,
                  this.isControlPanelOpen()
                ),
                i &&
                  (this._dialog.layout(
                    e,
                    n,
                    s,
                    this._guiInitData.useDesktopGui,
                    this._hasMaximizedPortrait,
                    this.isControlPanelOpen(),
                    this._showInfoBar,
                    this._gameTopMargin
                  ),
                  this._controlPanelManager.layout(
                    e,
                    n,
                    s,
                    this._guiInitData.useDesktopGui,
                    this._hasMaximizedPortrait,
                    this._isControlPanelOpen,
                    this._showInfoBar,
                    this._gameTopMargin
                  ),
                  this._forceLayout
                    ? (this._actionButtonsManager.forceLayout(
                        e,
                        n,
                        s,
                        this._guiInitData.useDesktopGui,
                        this._hasMaximizedPortrait,
                        this.isControlPanelOpen(),
                        this._showInfoBar,
                        this._gameTopMargin
                      ),
                      this._popupMenuManager.forceLayout(
                        e,
                        n,
                        s,
                        this._guiInitData.useDesktopGui,
                        this._hasMaximizedPortrait,
                        this.isControlPanelOpen(),
                        this._showInfoBar,
                        this._gameTopMargin
                      ))
                    : (this._actionButtonsManager.layout(
                        e,
                        n,
                        s,
                        this._guiInitData.useDesktopGui,
                        this._hasMaximizedPortrait,
                        this.isControlPanelOpen(),
                        this._showInfoBar,
                        this._gameTopMargin
                      ),
                      this._popupMenuManager.layout(
                        e,
                        n,
                        s,
                        this._guiInitData.useDesktopGui,
                        this._hasMaximizedPortrait,
                        this.isControlPanelOpen(),
                        this._showInfoBar,
                        this._gameTopMargin
                      )),
                  this._popupMenuManager.layout(
                    e,
                    n,
                    s,
                    this._guiInitData.useDesktopGui,
                    this._hasMaximizedPortrait,
                    this.isControlPanelOpen(),
                    this._showInfoBar,
                    this._gameTopMargin
                  ),
                  this._bottomBarManager.layout(
                    e,
                    n,
                    s,
                    this._guiInitData.useDesktopGui,
                    this._hasMaximizedPortrait,
                    this.isControlPanelOpen(),
                    this._showInfoBar,
                    this._gameTopMargin
                  ),
                  this._topSpinsManager.layout(
                    e,
                    n,
                    s,
                    this._guiInitData.useDesktopGui,
                    this._hasMaximizedPortrait,
                    this.isControlPanelOpen(),
                    this._showInfoBar,
                    this._gameTopMargin
                  ),
                  this._numPadManager.layout(
                    e,
                    n,
                    s,
                    this._guiInitData.useDesktopGui,
                    this._hasMaximizedPortrait,
                    this.isControlPanelOpen(),
                    this._showInfoBar,
                    this._gameTopMargin
                  ),
                  void 0 !== this._ocConfiguration &&
                    this._ocDialogManager &&
                    this._ocDialogManager.layout(e, n, s),
                  this._fadeOverlay.layout(
                    e,
                    n,
                    s,
                    this._guiInitData.useDesktopGui
                  ),
                  this._customCoverScreenManager.layout(
                    e,
                    n,
                    s,
                    this._guiInitData.useDesktopGui
                  )),
                (this._forceLayout = !1);
            }
          }),
          (i.prototype.setTotalWinFieldColor = function (t, e) {
            void 0 === e && (e = !1),
              this._bottomBarManager.setWinFieldColor(t, e);
          }),
          (i.prototype.setCashFieldColor = function (t, e) {
            this._bottomBarManager.setCashFieldColor(t, e);
          }),
          (i.prototype.enableOrientationControlsHandedness = function (t) {
            if (
              (window.removeEventListener(
                "orientationchange",
                this._setHandednessByOrientation
              ),
              t)
            ) {
              var e = this;
              (this._setHandednessByOrientation =
                this._setHandednessByOrientation ||
                function () {
                  -90 == window.orientation
                    ? e.setHandedness(!1)
                    : (window.orientation, e.setHandedness(!0));
                }),
                window.addEventListener(
                  "orientationchange",
                  this._setHandednessByOrientation
                );
            }
          }),
          (i.prototype.setAllowFastPlayButton = function (t) {
            this._actionButtonsManager.setAllowFastPlayButton(t);
          }),
          (i.prototype.setFastPlayMode = function (t) {
            this._actionButtonsManager.setFastPlayMode(t);
          }),
          (i.prototype.updateAllowedGuiElements = function (t) {
            this._guiSettingsHelper.updateAllowedElements(t);
          }),
          (i.prototype.updateGuiButtonOverrides = function (t, e) {
            this._guiSettingsHelper.updateOverrides(t, e, !0);
          }),
          (i.prototype.updateConditionalGuiButtonOverrides = function (t, e) {
            this._guiSettingsHelper.updateConditionalOverrides(t, e);
          }),
          (i.prototype.debug_getGuiButtonOverrides = function () {
            return this._guiSettingsHelper.debug_getGuiButtonOverrides();
          }),
          (i.prototype.setCinematicMode = function (t) {
            var e = !t && void 0;
            this._guiSettingsHelper.updateOverrides(
              "gui:cinematicMode",
              {
                gameRulesButton: { enabled: e },
                historyButton: { enabled: e },
                betButton: { enabled: e },
                autoSpinConfigButton: { enabled: e },
                payTableButton: { enabled: e },
                spin: { enabled: e },
                startAutoPlay: { enabled: e },
                startFeature: { enabled: e },
                quickStop: { enabled: e },
                quickStopFeature: { enabled: e },
              },
              !0
            );
          }),
          (i.prototype.setPortraitButtonOffset = function (t) {
            var e = this._guiSettingsHelper.portraitButtonOffset;
            return (
              (this._guiSettingsHelper.portraitButtonOffset = t),
              this._cachedLayoutValues &&
                this._cachedLayoutValues.gameContainerArea &&
                this._cachedLayoutValues.gameArea &&
                ((this._forceLayout = !0),
                this.layout(
                  !0,
                  this._orientation,
                  this._cachedLayoutValues.gameContainerArea,
                  this._cachedLayoutValues.gameArea
                )),
              e
            );
          }),
          (i.prototype.setCustomPopUpMenuButtonTopOffset = function (t) {
            (this._guiSettingsHelper.customPopUpMenuButtonTopOffset = t),
              this._cachedLayoutValues &&
                this._cachedLayoutValues.gameContainerArea &&
                this._cachedLayoutValues.gameArea &&
                ((this._forceLayout = !0),
                this.layout(
                  !0,
                  this._orientation,
                  this._cachedLayoutValues.gameContainerArea,
                  this._cachedLayoutValues.gameArea
                ));
          }),
          (i.prototype.setUseAlternativePopupMenuLayout = function (t) {
            (this._guiSettingsHelper.useAlternativePopupMenuLayout = t),
              this._cachedLayoutValues &&
                this._cachedLayoutValues.gameContainerArea &&
                this._cachedLayoutValues.gameArea &&
                ((this._forceLayout = !0),
                this.layout(
                  !0,
                  this._orientation,
                  this._cachedLayoutValues.gameContainerArea,
                  this._cachedLayoutValues.gameArea
                ));
          }),
          Object.defineProperty(i.prototype, "enabled", {
            set: function (t) {
              (this._enabled = t),
                this._guiContainer &&
                  (!1 === t || !0 === this._replayMode
                    ? (this._guiContainer[0].style.pointerEvents = "none")
                    : (this._guiContainer[0].style.pointerEvents = "all"));
            },
            enumerable: !1,
            configurable: !0,
          }),
          (i.prototype.setReplayMode = function (t) {
            (this._replayMode = t), (this.enabled = this.enabled);
          }),
          (i.prototype.flashTotalWinField = function (t, e, n) {
            this._bottomBarManager.flashTotalWinField(
              t,
              e || 16777215,
              n || function () {}
            );
          }),
          (i.prototype.updateMinimumRoundDurationProgression = function (t) {
            this._actionButtonsManager.updateMinimumRoundDurationProgression(t);
          }),
          (i.prototype.hideGameCoveringMessage = function () {
            this._customCoverScreenManager.hide();
          }),
          (i.prototype.showGameCoveringMessage = function (t) {
            return this._customCoverScreenManager.show(t);
          }),
          (i.prototype.buildCustomCover = function () {
            this._customCoverParentElement = this.createDivElement(
              this._guiContainer,
              "customCoverParentElement"
            );
          }),
          i
        );
      })(t.MobileGui);
    t.DefaultMobileGui = s;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = tk_common.utils.copyProperties,
      n = tk_common.utils.iterateOverLeaves,
      s = (function () {
        function t() {
          (this._isAutoPlayAllowed = !0),
            (this.onOverrideStateChanged = new tk_common.utils.Signal1()),
            (this._baseState = {
              spin: { enabled: !0, allowed: !0 },
              startAutoPlay: { enabled: !0, allowed: !0 },
              stopAutoPlay: { enabled: !0, allowed: !0 },
              startFeature: { enabled: !0, allowed: !0 },
              startFreeRounds: { enabled: !0, allowed: !0 },
              skip: { enabled: !0, allowed: !0 },
              skipFeature: { enabled: !0, allowed: !0 },
              quickStop: { enabled: !0, allowed: !0 },
              quickStopFeature: { enabled: !0, allowed: !0 },
              autoSpinConfigButton: { enabled: !0, allowed: !0 },
              backToLobbyButton: { enabled: !0, allowed: !0 },
              betButton: { enabled: !0, allowed: !0 },
              fastPlayButton: { enabled: !0, allowed: !0 },
              gameRulesButton: { enabled: !0, allowed: !0 },
              historyButton: { enabled: !0, allowed: !0 },
              ocButton: { enabled: !0, allowed: !0 },
              payTableButton: { enabled: !0, allowed: !0 },
              popUpMenuButton: { enabled: !0, allowed: !0 },
              soundButton: { enabled: !0, allowed: !0 },
              vibrateButton: { enabled: !0, allowed: !0 },
            }),
            (this._overrides = {
              gui: {
                spin: {},
                startAutoPlay: {},
                stopAutoPlay: {},
                startFeature: {},
                startFreeRounds: {},
                skip: {},
                skipFeature: {},
                quickStop: {},
                quickStopFeature: {},
                autoSpinConfigButton: {},
                backToLobbyButton: {},
                betButton: {},
                fastPlayButton: {},
                gameRulesButton: {},
                historyButton: {},
                ocButton: {},
                payTableButton: {},
                popUpMenuButton: {},
                soundButton: {},
                vibrateButton: {},
              },
            }),
            (this._conditionalOverrides = {}),
            this.createOverrideCollection(),
            (this._portraitButtonOffset = 0),
            (this._customPopUpMenuButtonOffset = { landscape: 0, portrait: 0 }),
            (this._usingAlternativePopupMenuLayout = !1);
        }
        return (
          (t.prototype.replaceOverrides = function (t, e, n) {
            return (
              void 0 === n && (n = !0),
              (this._overrides[t] = {}),
              this.updateOverrides(t, e || {}, n)
            );
          }),
          (t.prototype.updateOverrides = function (t, e, n) {
            void 0 === n && (n = !0),
              null === e
                ? (delete this._overrides[t],
                  delete this._conditionalOverrides[t])
                : ((this._overrides[t] = this._overrides[t] || {}),
                  (this._overrides[t] = tk_common.utils.copyProperties(
                    this._overrides[t],
                    e,
                    !1
                  ))),
              this.createOverrideCollection(),
              this.cleanUpOverrides();
            var s = this.buttonStates;
            return (
              n && this.onOverrideStateChanged.dispatch(s), this.buttonStates
            );
          }),
          (t.prototype.getButtonEnabledOverrideState = function (t) {
            return !1 !== (this.buttonStates[t] || { enabled: !0 }).enabled;
          }),
          (t.prototype.getButtonAllowedOverrideState = function (t) {
            return !1 !== (this.buttonStates[t] || { allowed: !0 }).allowed;
          }),
          (t.prototype.createOverrideCollection = function () {
            for (var t in ((this.buttonStates = {}),
            (this.buttonStates = tk_common.utils.copyProperties(
              this.buttonStates,
              this._baseState,
              !1
            )),
            this._conditionalOverrides)) {
              var s = this._conditionalOverrides[t]({});
              null === s ? delete this._overrides[t] : (this._overrides[t] = s);
            }
            for (var i in this._overrides) {
              var o = this._overrides[i];
              n(o, function (t, e, n) {
                if (!0 !== n) return n;
              }),
                (this.buttonStates = e(this.buttonStates, o, !0));
            }
          }),
          (t.prototype.setInitData = function (t) {
            this._guiInitData = t;
          }),
          Object.defineProperty(t.prototype, "showDepositLink", {
            get: function () {
              return !1;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "externalGameRulesUrl", {
            get: function () {
              return this._guiInitData.externalGameRulesUrl;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "activeLanguageIso", {
            get: function () {
              return this._activateLanguageIso;
            },
            set: function (t) {
              this._activateLanguageIso = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "activeCurrencyIso", {
            get: function () {
              return this._activeCurrencyIso;
            },
            set: function (t) {
              this._activeCurrencyIso = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isUiWebView", {
            get: function () {
              return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                navigator.userAgent
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isAppleDevice", {
            get: function () {
              var t = !1,
                e = window.navigator.userAgent;
              return (
                (e.match(/iPad/i) ||
                  (e.match(/iPhone/i) && !this.isMobileInternetExplorer)) &&
                  (t = !0),
                t
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isIpad", {
            get: function () {
              var t = !1;
              return window.navigator.userAgent.match(/iPad/i) && (t = !0), t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isAtLeastIos8", {
            get: function () {
              var t = !1,
                e = void 0;
              if (/iP(hone|od|ad)/.test(navigator.platform)) {
                var n = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                if (
                  !(e = [
                    parseInt(n[1], 10),
                    parseInt(n[2], 10),
                    parseInt(n[3], 10),
                  ])
                )
                  return !0;
                e[0] >= 8 && (t = !0);
              }
              return t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isIosChrome", {
            get: function () {
              var t = !1;
              return navigator.userAgent.match("CriOS") && (t = !0), t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isChrome", {
            get: function () {
              return (
                this._guiInitData.browserVendor ===
                tk_common.constants.BrowserVendorEnum.Chrome
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isChromeMobile", {
            get: function () {
              var t = navigator.userAgent;
              return (
                !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
                  t
                ) && !!/Chrome/i.test(t)
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isFirefox", {
            get: function () {
              return (
                this._guiInitData.browserVendor ===
                tk_common.constants.BrowserVendorEnum.FireFox
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isMobileInternetExplorer", {
            get: function () {
              var t = !1;
              return (
                window.navigator.userAgent.match(/iemobile/i) && (t = !0), t
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "useDesktopGui", {
            get: function () {
              return this._guiInitData.useDesktopGui;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isDesktop", {
            get: function () {
              return (
                this._guiInitData.targetDevice ===
                tk_common.constants.TargetDeviceEnum.Desktop
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "useKineticScroll", {
            get: function () {
              return !(
                this.isChrome ||
                this.isFirefox ||
                this.isMobileInternetExplorer ||
                this.isDesktop
              );
            },
            set: function (t) {
              this._useKineticScroll = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "showDownloadGameRulesButton", {
            get: function () {
              return this._guiInitData.showDownloadGameRulesButton;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.isButtonAllowed = function (t) {
            return (
              ("string" != typeof t &&
                null ===
                  (t = this.mapGuiButtonIdToAllowedElementEquivalent(t))) ||
              !1 !== this._guiInitData.allowedGuiElements.buttons[t]
            );
          }),
          (t.prototype.isFieldAllowed = function (t) {
            return !1 !== this._guiInitData.allowedGuiElements.fields[t];
          }),
          (t.prototype.getFreeRoundCashTitlePhraseId = function () {
            return this._guiInitData.showActiveCurrency
              ? "cashButtonFreeRoundBalanceTitle_vars_activeCurrency_uc"
              : "cashButtonFreeRoundBalanceTitle_uc";
          }),
          (t.prototype.getCashTitlePhraseId = function () {
            return this._guiInitData.showActiveCurrency
              ? "cashButtonCashTitle_vars_activeCurrency_uc"
              : "cashButtonCashTitle_uc";
          }),
          (t.prototype.getTotalWinTitlePhraseId = function () {
            return this._guiInitData.showActiveCurrency
              ? "action_bar_payout_field_vars_activeCurrency_uc"
              : "gui_2_0_payoutFieldTitle_uc";
          }),
          (t.prototype.getBetTitlePhraseId = function () {
            return this._guiInitData.showActiveCurrency
              ? "betButtonBetTitle_vars_activeCurrency_uc"
              : "betButtonBetTitle_uc";
          }),
          (t.prototype.getFreeRoundBetTitlePhraseId = function () {
            return this._guiInitData.showActiveCurrency
              ? "betButtonFreeBetTitle_vars_activeCurrency_uc"
              : "betButtonFreeBetTitle_uc";
          }),
          (t.prototype.updateAllowedElements = function (t) {
            this._guiInitData.allowedGuiElements = t;
          }),
          Object.defineProperty(t.prototype, "autoPlayAllowed", {
            get: function () {
              return this._isAutoPlayAllowed;
            },
            set: function (t) {
              this._isAutoPlayAllowed = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.getOverrideStateForCurrentSpinButton = function (t, e) {
            var n = t,
              s = tk_common.slots.gui.GuiButtonIds;
            switch (n) {
              case s.START_AUTO_PLAY:
                return e.startAutoPlay;
              case s.START_FEATURE:
                return e.startFeature;
              case s.STOP_AUTO_PLAY:
                return e.stopAutoPlay;
              case s.SPIN:
                return e.spin;
              case s.SKIP:
                return e.skip;
              case s.SKIP_DURING_FEATURE:
                return e.skipFeature;
              case s.QUICK_STOP:
                return e.quickStop;
              case s.QUICK_STOP_DURING_FEATURE:
                return e.quickStopFeature;
              case s.START_FREE_ROUND:
                return e.startFreeRounds;
            }
          }),
          (t.prototype.updateButtonBaseStates = function (t) {
            for (var e in ((this._baseState = tk_common.utils.copyProperties(
              this._baseState,
              t,
              !1
            )),
            this._baseState)) {
              var n = this._baseState[e];
              void 0 === n.enabled && (n.enabled = !0),
                void 0 === n.allowed && (n.allowed = !0);
            }
            this.createOverrideCollection();
            var s = this.buttonStates;
            return (this.buttonStates = s), s;
          }),
          (t.prototype.getSpinButtonEnabledState = function (e) {
            return t.getOverrideStateForCurrentSpinButton(e, this.buttonStates)
              .enabled;
          }),
          (t.getBaseStateForSpinButton = function (e, n) {
            var s = {
              spin: { enabled: void 0 },
              startAutoPlay: { enabled: void 0 },
              stopAutoPlay: { enabled: void 0 },
              startFeature: { enabled: void 0 },
              startFreeRounds: { enabled: void 0 },
              skip: { enabled: void 0 },
              skipFeature: { enabled: void 0 },
              quickStop: { enabled: void 0 },
              quickStopFeature: { enabled: void 0 },
            };
            return (
              (t.getOverrideStateForCurrentSpinButton(e, s).enabled = n), s
            );
          }),
          (t.prototype.setDialogModalMode = function (t, e, n) {
            var s,
              i = !0 !== t && void 0;
            (s = {
              betButton: { enabled: i },
              autoSpinConfigButton: { enabled: i },
              spin: { enabled: i },
              startAutoPlay: { enabled: i },
              startFreeRounds: { enabled: i },
              soundButton: { enabled: i },
              vibrateButton: { enabled: i },
              fastPlayButton: { enabled: i },
              payTableButton: { enabled: i },
              gameRulesButton: { enabled: i },
              historyButton: { enabled: i },
              skip: { enabled: i },
              quickStop: { enabled: i },
              quickStopFeature: { enabled: i },
              skipFeature: { enabled: i },
              popUpMenuButton: { enabled: (!e || !t) && void 0 },
              stopAutoPlay: { enabled: i },
              startFeature: { enabled: i },
            }),
              (n = n || "gui"),
              this.updateOverrides(n + ":dialogModalMode", s);
          }),
          (t.prototype.debug_getGuiButtonOverrides = function () {
            return {
              base: JSON.parse(JSON.stringify(this._baseState)),
              overrides: JSON.parse(JSON.stringify(this._overrides)),
            };
          }),
          (t.prototype.cleanUpOverrides = function () {
            for (var t in this._overrides)
              if ("gui" !== t && this._overrides.hasOwnProperty(t)) {
                var e = this._overrides[t],
                  n = !0;
                for (var s in e) {
                  var i = e[s];

                  void 0 === i.enabled && void 0 === i.allowed
                    ? delete e[s]
                    : (n = !1);
                }
                n && delete this._overrides[t];
              }
          }),
          (t.prototype.updateConditionalOverrides = function (t, e) {
            (this._conditionalOverrides[t] = e),
              null === e &&
                (delete this._overrides[t],
                delete this._conditionalOverrides[t]),
              this.createOverrideCollection(),
              this.cleanUpOverrides();
            var n = this.buttonStates;
            this.onOverrideStateChanged.dispatch(n);
          }),
          Object.defineProperty(t.prototype, "portraitButtonOffset", {
            get: function () {
              return this._portraitButtonOffset;
            },
            set: function (t) {
              this._portraitButtonOffset = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "useAlternativePopupMenuLayout", {
            get: function () {
              return this._usingAlternativePopupMenuLayout;
            },
            set: function (t) {
              this._usingAlternativePopupMenuLayout = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "customPopUpMenuButtonTopOffset", {
            get: function () {
              return this._customPopUpMenuButtonOffset;
            },
            set: function (t) {
              this._customPopUpMenuButtonOffset = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.mapGuiButtonIdToAllowedElementEquivalent = function (t) {
            var e = tk_common.slots.gui.GuiButtonIds;
            switch (t) {
              case e.SPIN:
                return "spin";
              case e.QUICK_STOP:
                return "quickstop";
              case e.AUTO_PLAY:
                return "autoplay";
              case e.BET:
                return "bet";
              case e.START_AUTO_PLAY:
              case e.STOP_AUTO_PLAY:
                return "autoplay";
              case e.PAY_TABLE:
                return "paytable";
              case e.GAME_RULES:
                return "gamerules";
              case e.BACK_TO_LOBBY_BUTTON:
                return "backtolobby";
              case e.HISTORY:
                return "history";
              case e.TOGGLE_VIBRATE:
                return "vibrate";
              case e.TOGGLE_SOUND:
                return "sound";
              case e.TOGGLE_POPUP_MENU:
                return "popupmenu";
              default:
                return null;
            }
          }),
          t
        );
      })();
    t.GuiSettingsHelper = s;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = tk_common.constants.OrientationEnum,
      n = (function () {
        function n(t, e, n) {
          var s = this;
          (this._isFastPlayActive = !1),
            (this._allowFastPlayButton = !1),
            (this._handedness = !0),
            (this._cachedLayoutValues = {
              gameArea: null,
              gameContainerArea: null,
              gameMarginTop: void 0,
              hasDesktopGui: void 0,
              hasMaximizedPortrait: void 0,
              orientation: null,
              showingInfoBar: void 0,
              isControlPanelOpen: void 0,
            }),
            (this._hasDesktopGui = e),
            (this._guiSettingsHelper = n),
            n.onOverrideStateChanged.add(function (t) {
              s._spinButton.enable(
                s._guiSettingsHelper.getSpinButtonEnabledState(
                  s._spinButton.state
                )
              ),
                (s._autospinConfigButton.enabled =
                  t.autoSpinConfigButton.enabled),
                (s._betButton.enabled = t.betButton.enabled);
            }),
            (this.onGuiButtonClicked =
              new tk_common.slots.gui.GuiButtonClickedSignal()),
            (this._showsSoundButtonInPopUpMenu = !e),
            (this._forceLayout = !0);
        }
        return (
          Object.defineProperty(n.prototype, "soundButtonSelected", {
            set: function (t) {
              this._soundButton.selected = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (n.prototype.initSpinButton = function (e) {
            (this._spinButton = new t.SpinButton(e, this._guiSettingsHelper)),
              this._spinButton.Clicked.add(this.handleGuiButtonClicked, this);
          }),
          (n.prototype.enableAutospinConfigButton = function (t) {
            this._guiSettingsHelper.updateButtonBaseStates({
              autoSpinConfigButton: { enabled: t },
            });
            var e = this._guiSettingsHelper.getButtonEnabledOverrideState(
              "autoSpinConfigButton"
            );
            this._autospinConfigButton.enabled =
              this._guiSettingsHelper.autoPlayAllowed && e;
          }),
          (n.prototype.enableBetButton = function (t) {
            t &&
            this._orientation === tk_common.constants.OrientationEnum.LANDSCAPE
              ? this._bottomBarBetButtonClickElement.css("display", "block")
              : this._bottomBarBetButtonClickElement.css("display", "none"),
              this._guiSettingsHelper.updateButtonBaseStates({
                betButton: { enabled: t },
              });
            var e =
              this._guiSettingsHelper.getButtonEnabledOverrideState(
                "betButton"
              );
            this._betButton.enabled = e;
          }),
          (n.prototype.enableSpinButton = function (e) {
            this._guiSettingsHelper.updateButtonBaseStates(
              t.GuiSettingsHelper.getBaseStateForSpinButton(
                this._spinButton.state,
                e
              )
            ),
              this._spinButton.enable(
                this._guiSettingsHelper.getSpinButtonEnabledState(
                  this._spinButton.state
                )
              );
          }),
          (n.prototype.clickSpinButton = function () {
            this._spinButton.click();
          }),
          (n.prototype.playSpinButtonRotation = function (t) {
            void 0 === t && (t = !0), this._spinButton.playSpinAnimation(t);
          }),
          (n.prototype.initAutospinConfigurationButton = function (e, n, s, i) {
            (this._autospinConfigButtonContainerElement = e),
              (this._autospinConfigButtonBackgroundElement = n),
              (this._autospinConfigButtonIconElement = s),
              (this._autospinConfigButtonClickElement = i),
              (this._autospinConfigButton = new t.SpriteButton(
                tk_common.slots.gui.GuiButtonIds.AUTO_PLAY,
                !0,
                s,
                i,
                e
              )),
              this._autospinConfigButton.Clicked.add(
                this.handleAutospinConfigButtonClicked,
                this
              );
          }),
          (n.prototype.handleAutospinConfigButtonClicked = function () {
            this.onGuiButtonClicked.dispatch(
              tk_common.slots.gui.GuiButtonIds.AUTO_PLAY
            );
          }),
          (n.prototype.setAutospinMode = function (t, e) {
            void 0 !== t && (this._spinButton.autospinCount = t),
              t > 0
                ? ((this._spinButton.state = e
                    ? tk_common.slots.gui.GuiButtonIds.STOP_AUTO_PLAY
                    : tk_common.slots.gui.GuiButtonIds.START_AUTO_PLAY),
                  this.enableSpinButton(!0),
                  this.enableAutospinConfigButton(!e),
                  this.enableBetButton(!e))
                : (this.enableSpinButton(!1),
                  this.enableAutospinConfigButton(!e),
                  this.enableBetButton(!e));
          }),
          (n.prototype.setSingleSpinMode = function (t) {
            (this._spinButton.state = tk_common.slots.gui.GuiButtonIds.SPIN),
              this.enableSpinButton(t),
              this.enableBetButton(t),
              this._guiSettingsHelper.updateButtonBaseStates({
                autoSpinConfigButton: { enabled: t },
              });
            var e = this._guiSettingsHelper.getButtonEnabledOverrideState(
              "autoSpinConfigButton"
            );
            this._autospinConfigButton.enabled =
              t && this._guiSettingsHelper.autoPlayAllowed && e;
          }),
          (n.prototype.setSkipMode = function (t) {
            (this._spinButton.state = tk_common.slots.gui.GuiButtonIds.SKIP),
              this.enableSpinButton(t);
          }),
          (n.prototype.setSkipDuringFeatureMode = function (t) {
            (this._spinButton.state =
              tk_common.slots.gui.GuiButtonIds.SKIP_DURING_FEATURE),
              this.enableSpinButton(t);
          }),
          (n.prototype.setQuickStopDuringFeatureMode = function (t) {
            (this._spinButton.state =
              tk_common.slots.gui.GuiButtonIds.QUICK_STOP_DURING_FEATURE),
              this.enableSpinButton(t);
          }),
          (n.prototype.setFreeRoundsMode = function (t, e) {
            (this._spinButton.state =
              tk_common.slots.gui.GuiButtonIds.START_FREE_ROUND),
              this.enableSpinButton(e),
              this.enableBetButton(!1),
              this._guiSettingsHelper.updateButtonBaseStates({
                autoSpinConfigButton: { enabled: !1 },
              }),
              (this._autospinConfigButton.enabled = !1);
          }),
          (n.prototype.setFeatureRoundsMode = function (t, e) {
            (this._spinButton.featureRoundsCount = t),
              (this._spinButton.state =
                tk_common.slots.gui.GuiButtonIds.START_FEATURE),
              this.enableSpinButton(e),
              this.enableBetButton(!1),
              this._guiSettingsHelper.updateButtonBaseStates({
                autoSpinConfigButton: { enabled: !1 },
              }),
              (this._autospinConfigButton.enabled = !1);
          }),
          (n.prototype.setTopSpinMode = function () {
            this.enableBetButton(!1),
              this._guiSettingsHelper.updateButtonBaseStates({
                autoSpinConfigButton: { enabled: !1 },
              }),
              (this._autospinConfigButton.enabled = !1);
          }),
          (n.prototype.removeTopSpinMode = function () {}),
          (n.prototype.setFreeRoundsFeatureMode = function (t, e) {
            (this._spinButton.featureRoundsCount = t),
              (this._spinButton.state =
                tk_common.slots.gui.GuiButtonIds.START_FEATURE),
              this.enableSpinButton(e),
              this.enableBetButton(!1),
              this._guiSettingsHelper.updateButtonBaseStates({
                autoSpinConfigButton: { enabled: !1 },
              }),
              (this._autospinConfigButton.enabled = !1);
          }),
          (n.prototype.setSpinMode = function (t) {
            var e = !t;
            this.enableSpinButton(e),
              this.enableBetButton(e),
              this._guiSettingsHelper.updateButtonBaseStates({
                autoSpinConfigButton: { enabled: e },
              });
            var n = this._guiSettingsHelper.getButtonEnabledOverrideState(
              "autoSpinConfigButton"
            );
            this._autospinConfigButton.enabled =
              e && this._guiSettingsHelper.autoPlayAllowed && n;
          }),
          (n.prototype.setQuickStopMode = function (t) {
            (this._spinButton.state = t
              ? tk_common.slots.gui.GuiButtonIds.QUICK_STOP
              : tk_common.slots.gui.GuiButtonIds.SPIN),
              this.enableSpinButton(t);
          }),
          (n.prototype.setControlPanelMode = function (t) {
            (this._isControlPanelMode = t), this.hide(), this.show();
          }),
          (n.prototype.setCustomFeatureRoundsValue = function (t) {
            this._spinButton.setCustomFeatureRoundsValue(t);
          }),
          (n.prototype.setFastPlayMode = function (t) {
            this._fastPlayButton.selected = t;
          }),
          (n.prototype.setAllowFastPlayButton = function (t) {
            (this._allowFastPlayButton = t),
              this._isControlPanelMode || this.show();
          }),
          (n.prototype.initBetButton = function (e, n, s, i, o) {
            var a = this;
            (this._betButton = new t.SpriteButton(
              tk_common.slots.gui.GuiButtonIds.BET,
              !0,
              s,
              i,
              e
            )),
              (this._bottomBarBetButtonClickElement = o),
              this._bottomBarBetButtonClickElement.css("left", "-270px"),
              this._bottomBarBetButtonClickElement.css("top", "36px"),
              this._bottomBarBetButtonClickElement.css("width", "300px"),
              this._bottomBarBetButtonClickElement.css("height", "52px"),
              this._guiSettingsHelper.isButtonAllowed("bet") &&
                this._bottomBarBetButtonClickElement.bind("tap", function (t) {
                  a.handleBottomBetButtonClicked();
                }),
              this._betButton.Clicked.add(
                this.handleGuiButtonClicked,
                this,
                tk_common.slots.gui.GuiButtonIds.BET
              ),
              (this._betButtonContainerElement = e),
              (this._betButtonIconElement = s),
              (this._betButtonBackgroundElement = n);
          }),
          (n.prototype.handleBottomBetButtonClicked = function () {
            this._betButton.enabled &&
              this.onGuiButtonClicked.dispatch(
                tk_common.slots.gui.GuiButtonIds.BET
              );
          }),
          (n.prototype.initSoundButton = function (e, n, s, i, o) {
            (this._soundButtonContainerElement = e),
              (this._soundButtonBackgroundElement = n),
              (this._soundButtonOnElement = s),
              (this._soundButtonOffElement = i),
              (this._soundButton = new t.ToggleButton(
                tk_common.slots.gui.GuiButtonIds.TOGGLE_SOUND,
                !1,
                s,
                i,
                o,
                e
              )),
              this._soundButton.Clicked.add(
                this.handleGuiButtonClicked,
                this,
                tk_common.slots.gui.GuiButtonIds.TOGGLE_SOUND
              );
          }),
          (n.prototype.initFastPlayButton = function (e, n, s, i, o) {
            (this._fastPlayButtonContainerElement = e),
              (this._fastPlayButtonBackgroundElement = n),
              (this._fastPlayButtonOnElement = s),
              (this._fastPlayButtonOffElement = i),
              (this._fastPlayButton = new t.ToggleButton(
                tk_common.slots.gui.GuiButtonIds.FAST_PLAY,
                !1,
                s,
                i,
                o,
                e
              )),
              this._fastPlayButton.Clicked.add(
                this.handleGuiButtonClicked,
                this,
                tk_common.slots.gui.GuiButtonIds.FAST_PLAY
              ),
              this._fastPlayButton.hide();
          }),
          (n.prototype.handleGuiButtonClicked = function (t) {
            t === tk_common.slots.gui.GuiButtonIds.SPIN &&
              this._isControlPanelMode &&
              (t = tk_common.slots.gui.GuiButtonIds.BACK_TO_GAME),
              t === tk_common.slots.gui.GuiButtonIds.START_AUTO_PLAY &&
                this._isControlPanelMode &&
                (t = tk_common.slots.gui.GuiButtonIds.BACK_TO_GAME),
              t === tk_common.slots.gui.GuiButtonIds.STOP_AUTO_PLAY &&
                this._isControlPanelMode &&
                (t = tk_common.slots.gui.GuiButtonIds.BACK_TO_GAME),
              t === tk_common.slots.gui.GuiButtonIds.START_FREE_ROUND &&
                this._isControlPanelMode &&
                (t = tk_common.slots.gui.GuiButtonIds.BACK_TO_GAME),
              t === tk_common.slots.gui.GuiButtonIds.START_FEATURE &&
                this._isControlPanelMode &&
                (t = tk_common.slots.gui.GuiButtonIds.BACK_TO_GAME),
              t === tk_common.slots.gui.GuiButtonIds.SKIP &&
                this._isControlPanelMode &&
                (t = tk_common.slots.gui.GuiButtonIds.BACK_TO_GAME),
              t === tk_common.slots.gui.GuiButtonIds.SKIP_DURING_FEATURE &&
                this._isControlPanelMode &&
                (t = tk_common.slots.gui.GuiButtonIds.BACK_TO_GAME),
              t === tk_common.slots.gui.GuiButtonIds.QUICK_STOP &&
                this._isControlPanelMode &&
                (t = tk_common.slots.gui.GuiButtonIds.BACK_TO_GAME),
              t ===
                tk_common.slots.gui.GuiButtonIds.QUICK_STOP_DURING_FEATURE &&
                this._isControlPanelMode &&
                (t = tk_common.slots.gui.GuiButtonIds.BACK_TO_GAME),
              t === tk_common.slots.gui.GuiButtonIds.TOGGLE_SOUND &&
                this._soundButton.toggle(),
              t === tk_common.slots.gui.GuiButtonIds.FAST_PLAY &&
                this._fastPlayButton.toggle(),
              this._guiSettingsHelper.isButtonAllowed(t) &&
                this.onGuiButtonClicked.dispatch(t);
          }),
          (n.prototype.handleToggleFastPlayClicked = function () {
            this.onGuiButtonClicked.dispatch(
              tk_common.slots.gui.GuiButtonIds.FAST_PLAY
            );
          }),
          (n.prototype.show = function () {
            this._containerElement.css("display", "block"),
              this._orientation ===
                tk_common.constants.OrientationEnum.PORTRAIT &&
                this._backgroundElementPortrait.css("display", "block"),
              this._guiSettingsHelper.isButtonAllowed("spin") &&
                this._spinButton.show(),
              this._guiSettingsHelper.isButtonAllowed("autoplay") &&
                this._autospinConfigButton.show(),
              this._hasTopSpinsMode ||
                (this._guiSettingsHelper.isButtonAllowed("bet") &&
                  (this._betButton.show(),
                  this._betButtonContainerElement.css("display", "none"))),
              this._allowFastPlayButton &&
              this._guiSettingsHelper.isButtonAllowed("fastplay") &&
              !0 !== this._isControlPanelMode
                ? (this._fastPlayButton.show(),
                  this._fastPlayButtonContainerElement.css("display", "block"),
                  this._fastPlayButtonClickElement.css("display", "block"))
                : (this._fastPlayButtonContainerElement.css("display", "none"),
                  this._fastPlayButtonClickElement.css("display", "none")),
              this._guiSettingsHelper.isButtonAllowed("autoplay") &&
                this._autospinConfigButtonContainerElement.css(
                  "display",
                  "block"
                ),
              this._guiSettingsHelper.isButtonAllowed("sound") &&
              0 == this._showsSoundButtonInPopUpMenu
                ? this._soundButton.show()
                : this._soundButton.hide();
          }),
          (n.prototype.hide = function () {
            this._containerElement.css("display", "none"),
              this._betButton.hide(),
              this._backgroundElementPortrait.css("display", "none"),
              this._spinButton.hide(),
              this._autospinConfigButton.hide(),
              this._soundButton.hide(),
              this._fastPlayButton.hide(),
              this._betButtonContainerElement.css("display", "none"),
              this._autospinConfigButtonContainerElement.css("display", "none"),
              this._fastPlayButtonContainerElement.css("display", "none"),
              this._fastPlayButtonClickElement.css("display", "none");
          }),
          (n.prototype.setHandedness = function (t) {
            (this._handedness = t), this._spinButton.setHandedness(t);
          }),
          (n.prototype.relayout = function () {
            this.layout(
              this._orientation,
              this._gameContainerArea,
              this._gameArea,
              this._hasDesktopGui,
              this._hasMaximizedPortrait,
              this._isControlPanelOpen,
              this._showingInfoBar,
              this._gameMarginTop
            );
          }),
          (n.prototype.forceLayout = function (t, e, n, s, i, o, a, l) {
            (this._forceLayout = !0), this.layout(t, e, n, s, i, o, a, l);
          }),
          (n.prototype.layout = function (t, e, n, s, i, o, a, l) {
            var r = this._forceLayout;
            (this._forceLayout = !1),
              t !== this._cachedLayoutValues.orientation && (r = !0),
              e !== this._cachedLayoutValues.gameContainerArea && (r = !0),
              n !== this._cachedLayoutValues.gameArea && (r = !0),
              s !== this._cachedLayoutValues.hasDesktopGui && (r = !0),
              o !== this._cachedLayoutValues.isControlPanelOpen && (r = !0),
              a !== this._cachedLayoutValues.showingInfoBar && (r = !0),
              l !== this._cachedLayoutValues.gameMarginTop && (r = !0),
              (this._orientation = t),
              (this._gameContainerArea = e),
              (this._gameArea = n),
              (this._hasDesktopGui = s),
              (this._hasMaximizedPortrait = i),
              (this._isControlPanelOpen = o),
              (this._showingInfoBar = a),
              (this._gameMarginTop = l),
              (this._cachedLayoutValues.orientation = t),
              (this._cachedLayoutValues.gameContainerArea = e),
              (this._cachedLayoutValues.gameArea = n),
              (this._cachedLayoutValues.hasDesktopGui = s),
              (this._cachedLayoutValues.hasMaximizedPortrait = i),
              (this._cachedLayoutValues.isControlPanelOpen = o),
              (this._cachedLayoutValues.showingInfoBar = a),
              (this._cachedLayoutValues.gameMarginTop = l),
              r
                ? s
                  ? this.layoutForDesktop(t, e, n, s, i, o, a, l)
                  : this.layoutForMobile(t, e, n, s, i, o, a, l)
                : s ||
                  (this._isControlPanelOpen &&
                    this.layoutForMobile(t, e, n, s, i, o, a, l));
          }),
          (n.prototype.layoutForDesktop = function (t, e, n, s, i, o, a, l) {
            this._backgroundElementPortrait.css("display", "none"),
              this._buttonsContainerElement.css({
                "-webkit-transform": "scale(1)",
                "-moz-transform": "scale(1)",
                "-ms-transform": "scale(1)",
              }),
              this._buttonsContainerElement.css("top", "0"),
              this._buttonsContainerElement.css("left", "0"),
              this._autospinConfigButtonContainerElement.css("right", "15px"),
              this._autospinConfigButtonContainerElement.css("width", "70px"),
              this._autospinConfigButtonContainerElement.css("height", "70px"),
              this._autospinConfigButtonContainerElement.css("top", "641px"),
              this._autospinConfigButtonBackgroundElement.css("width", "70px"),
              this._autospinConfigButtonBackgroundElement.css("height", "70px"),
              this._autospinConfigButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortrait"
              ),
              this._autospinConfigButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscapeDesktop"
              ),
              this._autospinConfigButtonIconElement.css("width", "70px"),
              this._autospinConfigButtonIconElement.css("height", "70px"),
              this._autospinConfigButtonClickElement.css("left", "0px"),
              this._autospinConfigButtonClickElement.css("top", "0px"),
              this._autospinConfigButtonClickElement.css("width", "70px"),
              this._autospinConfigButtonClickElement.css("height", "70px"),
              this._betButtonContainerElement.css("display", "none"),
              this._betButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortraitDesktop"
              ),
              this._betButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscapeDesktop"
              ),
              this._betButtonBackgroundElement.css("width", "70px"),
              this._betButtonBackgroundElement.css("height", "70px"),
              this._betButtonIconElement.css("width", "70px"),
              this._betButtonIconElement.css("height", "70px"),
              this._betButtonClickElement.css("left", "0px"),
              this._betButtonClickElement.css("top", "-2px"),
              this._betButtonClickElement.css("width", "70px"),
              this._betButtonClickElement.css("height", "70px"),

              this._spinButton.update(),
              this._spinButton.layout(t, e, n, s, o, l, void 0),
              this._soundButtonContainerElement.css("width", "40px"),
              this._soundButtonContainerElement.css("height", "40px"),
              this._soundButtonContainerElement.css("left", "100px"),
              this._soundButtonContainerElement.css("top", "654px"),
              this._soundButtonBackgroundElement.css("width", "40px"),
              this._soundButtonBackgroundElement.css("height", "40px"),
              this._soundButtonBackgroundElement.css("left", 0),
              this._soundButtonBackgroundElement.css("top", 0),
              this._soundButtonClickElement.css("width", "40px"),
              this._soundButtonClickElement.css("height", "40px"),
              this._soundButtonClickElement.css("left", 0),
              this._soundButtonClickElement.css("top", 0),
              this._soundButtonOffElement.css("width", "36px"),
              this._soundButtonOffElement.css("height", "36px"),
              this._soundButtonOffElement.css("left", "2px"),
              this._soundButtonOffElement.css("top", "2px"),
              this._soundButtonOnElement.css("width", "36px"),
              this._soundButtonOnElement.css("height", "36px"),
              this._soundButtonOnElement.css("left", "2px"),
              this._soundButtonOnElement.css("top", "2px"),
              this._fastPlayButtonContainerElement.css("left", "910px"),
              this._fastPlayButtonContainerElement.css("width", "70px"),
              this._fastPlayButtonContainerElement.css("height", "70px"),
              this._fastPlayButtonContainerElement.css("top", "612px"),
              this._fastPlayButtonBackgroundElement.css("width", "70px"),
              this._fastPlayButtonBackgroundElement.css("height", "70px"),
              this._fastPlayButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortrait"
              ),
              this._fastPlayButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscapeDesktop"
              ),
              this._fastPlayButtonClickElement.css("left", "0px"),
              this._fastPlayButtonClickElement.css("top", "-2px"),
              this._fastPlayButtonClickElement.css("width", "70px"),
              this._fastPlayButtonClickElement.css("height", "70px"),
              this._fastPlayButtonOffElement.css("width", "70px"),
              this._fastPlayButtonOffElement.css("height", "70px"),
              this._fastPlayButtonOffElement.css("left", "2px"),
              this._fastPlayButtonOffElement.css("top", "2px"),
              this._fastPlayButtonOnElement.css("width", "70px"),
              this._fastPlayButtonOnElement.css("height", "70px"),
              this._fastPlayButtonOnElement.css("left", "2px"),
              this._fastPlayButtonOnElement.css("top", "2px"),
              this._bottomBarBetButtonClickElement.css("left", "-270px"),
              this._bottomBarBetButtonClickElement.css("top", "36px"),
              this._bottomBarBetButtonClickElement.css("width", "300px"),
              this._bottomBarBetButtonClickElement.css("height", "52px");
          }),
          (n.prototype.layoutForMobile = function (t, e, n, s, i, o, a, l) {
            if (
              (this._soundButtonContainerElement.css("display", "none"),
              (this._showsSoundButtonInPopUpMenu = !0),
              t === tk_common.constants.OrientationEnum.LANDSCAPE)
            )
              this._backgroundElementPortrait.css("display", "none"),
                this._buttonsContainerElement.css({
                  "-webkit-transform": "scale(1)",
                  "-moz-transform": "scale(1)",
                  "-ms-transform": "scale(1)",
                }),
                !0 === this._handedness
                  ? (this._bottomBarBetButtonClickElement.css(
                      "display",
                      "block"
                    ),
                    this._buttonsContainerElement.css("top", "0"),
                    this._buttonsContainerElement.css("left", "0"),
                    this._autospinConfigButtonContainerElement.css(
                      "left",
                      "1141px"
                    ),
                    this._autospinConfigButtonContainerElement.css(
                      "width",
                      "100px"
                    ),
                    this._autospinConfigButtonContainerElement.css(
                      "height",
                      "100px"
                    ),
                    this._autospinConfigButtonContainerElement.css(
                      "top",
                      "60px"
                    ),
                    this._autospinConfigButtonBackgroundElement.css(
                      "width",
                      "100px"
                    ),
                    this._autospinConfigButtonBackgroundElement.css(
                      "height",
                      "100px"
                    ),
                    this._autospinConfigButtonBackgroundElement.removeClass(
                      "circleButtonBackgroundPortrait"
                    ),
                    this._autospinConfigButtonBackgroundElement.addClass(
                      "circleButtonBackgroundLandscape"
                    ),
                    this._autospinConfigButtonIconElement.css("width", "100px"),
                    this._autospinConfigButtonIconElement.css(
                      "height",
                      "100px"
                    ),
                    this._autospinConfigButtonClickElement.css("left", "-10px"),
                    this._autospinConfigButtonClickElement.css("top", "-10px"),
                    this._autospinConfigButtonClickElement.css(
                      "width",
                      "120px"
                    ),
                    this._autospinConfigButtonClickElement.css(
                      "height",
                      "120px"
                    ),
                    this._betButtonContainerElement.css("display", "none"),
                    this._betButtonBackgroundElement.removeClass(
                      "circleButtonBackgroundPortrait"
                    ),
                    this._betButtonBackgroundElement.addClass(
                      "circleButtonBackgroundLandscape"
                    ),
                    this._betButtonBackgroundElement.css("width", "100px"),
                    this._betButtonBackgroundElement.css("height", "100px"),
                    this._betButtonIconElement.css("width", "100px"),
                    this._betButtonIconElement.css("height", "100px"),
                    this._betButtonClickElement.css("left", "-10px"),
                    this._betButtonClickElement.css("top", "-10px"),
                    this._betButtonClickElement.css("width", "120px"),
                    this._betButtonClickElement.css("height", "120px"),
                    this._fastPlayButtonContainerElement.css("left", "36px"),
                    this._fastPlayButtonContainerElement.css("top", "60px"),
                    this._fastPlayButtonContainerElement.css("width", "100px"),
                    this._fastPlayButtonContainerElement.css("height", "100px"),
                    this._fastPlayButtonBackgroundElement.css("width", "100px"),
                    this._fastPlayButtonBackgroundElement.css(
                      "height",
                      "100px"
                    ),
                    this._fastPlayButtonBackgroundElement.removeClass(
                      "circleButtonBackgroundPortrait"
                    ),
                    this._fastPlayButtonBackgroundElement.removeClass(
                      "circleButtonBackgroundLandscapeDesktop"
                    ),
                    this._fastPlayButtonBackgroundElement.addClass(
                      "circleButtonBackgroundLandscape"
                    ),
                    this._fastPlayButtonOnElement.css("width", "100px"),
                    this._fastPlayButtonOnElement.css("height", "100px"),
                    this._fastPlayButtonOffElement.css("width", "100px"),
                    this._fastPlayButtonOffElement.css("height", "100px"),
                    this._fastPlayButtonClickElement.css("left", "-10px"),
                    this._fastPlayButtonClickElement.css("top", "-10px"),
                    this._fastPlayButtonClickElement.css("width", "120px"),
                    this._fastPlayButtonClickElement.css("height", "120px"),
                    this._bottomBarBetButtonClickElement.css("left", "-285px"),
                    this._bottomBarBetButtonClickElement.css("top", "181px"),
                    this._bottomBarBetButtonClickElement.css("width", "500px"),
                    this._bottomBarBetButtonClickElement.css("height", "60px"))
                  : (this._bottomBarBetButtonClickElement.css(
                      "display",
                      "block"
                    ),
                    this._buttonsContainerElement.css("top", "0"),
                    this._buttonsContainerElement.css("left", "0"),
                    this._autospinConfigButtonContainerElement.css(
                      "left",
                      "39px"
                    ),
                    this._autospinConfigButtonContainerElement.css(
                      "width",
                      "100px"
                    ),
                    this._autospinConfigButtonContainerElement.css(
                      "height",
                      "100px"
                    ),
                    this._autospinConfigButtonContainerElement.css(
                      "top",
                      "60px"
                    ),
                    this._autospinConfigButtonBackgroundElement.css(
                      "width",
                      "100px"
                    ),
                    this._autospinConfigButtonBackgroundElement.css(
                      "height",
                      "100px"
                    ),
                    this._autospinConfigButtonBackgroundElement.removeClass(
                      "circleButtonBackgroundPortrait"
                    ),
                    this._autospinConfigButtonBackgroundElement.addClass(
                      "circleButtonBackgroundLandscape"
                    ),
                    this._autospinConfigButtonIconElement.css("width", "100px"),
                    this._autospinConfigButtonIconElement.css(
                      "height",
                      "100px"
                    ),
                    this._autospinConfigButtonClickElement.css("left", "-10px"),
                    this._autospinConfigButtonClickElement.css("top", "-10px"),
                    this._autospinConfigButtonClickElement.css(
                      "width",
                      "120px"
                    ),
                    this._autospinConfigButtonClickElement.css(
                      "height",
                      "120px"
                    ),
                    this._betButtonContainerElement.css("display", "none"),

                    this._betButtonBackgroundElement.removeClass(
                      "circleButtonBackgroundPortrait"
                    ),
                    this._betButtonBackgroundElement.addClass(
                      "circleButtonBackgroundLandscape"
                    ),
                    this._betButtonBackgroundElement.css("width", "100px"),
                    this._betButtonBackgroundElement.css("height", "100px"),
                    this._betButtonIconElement.css("width", "100px"),
                    this._betButtonIconElement.css("height", "100px"),
                    this._betButtonClickElement.css("left", "-10px"),
                    this._betButtonClickElement.css("top", "-10px"),
                    this._betButtonClickElement.css("width", "120px"),
                    this._betButtonClickElement.css("height", "120px"),
                    this._fastPlayButtonContainerElement.css("left", "39px"),
                    this._fastPlayButtonContainerElement.css("top", "455px"),
                    this._fastPlayButtonContainerElement.css("width", "100px"),
                    this._fastPlayButtonContainerElement.css("height", "100px"),
                    this._fastPlayButtonContainerElement.removeClass(
                      "circleButtonBackgroundPortrait"
                    ),
                    this._fastPlayButtonContainerElement.addClass(
                      "circleButtonBackgroundLandscape"
                    ),
                    this._fastPlayButtonBackgroundElement.css("width", "100px"),
                    this._fastPlayButtonBackgroundElement.css(
                      "height",
                      "100px"
                    ),
                    this._fastPlayButtonOnElement.css("width", "100px"),
                    this._fastPlayButtonOnElement.css("height", "100px"),
                    this._fastPlayButtonOffElement.css("width", "100px"),
                    this._fastPlayButtonOffElement.css("height", "100px"),
                    this._fastPlayButtonClickElement.css("left", "-10px"),
                    this._fastPlayButtonClickElement.css("top", "-10px"),
                    this._fastPlayButtonClickElement.css("width", "120px"),
                    this._fastPlayButtonClickElement.css("height", "120px"),
                    this._bottomBarBetButtonClickElement.css("left", "-285px"),
                    this._bottomBarBetButtonClickElement.css("top", "181px"),
                    this._bottomBarBetButtonClickElement.css("width", "500px"),
                    this._bottomBarBetButtonClickElement.css("height", "60px"));
            else {
              var r = 1280 / e.width,
                c = e.width / 1280;
              this._backgroundElementPortrait.css(
                "top",
                n.height + l + 100 + "px"
              ),
                this._backgroundElementPortrait.css(
                  "width",
                  e.width * r + "px"
                ),
                this._backgroundElementPortrait.css(
                  "height",
                  e.width * r + "px"
                );
              var h = e.height - 650 * c - l * c,
                u = (720 * c) / h;
              if (u > 0.35) {
                u = 0.4 - (u - 1);
              } else u = 1;
              this._buttonsContainerElement.css({
                "-webkit-transform": "scale(" + u + ")",
                "-webkit-transform-origin": "50% 0 0px",
                "moz-transform": "scale(" + u + ")",
                "-moz-transform-origin": "50% 0 0px",
                "ms-transform": "scale(" + u + ")",
                "-ms-transform-origin": "50% 0 0px",
              });
              var p =
                (650 + this._guiSettingsHelper.portraitButtonOffset) * c +
                l * c +
                0.5 * h -
                50 * c;
              c = 1280 / e.width;
              this._buttonsContainerElement.css("top", p * r + "px"),
                this._backgroundElementPortrait.css("display", "block"),
                this._backgroundElementPortrait.hide().show(0),
                this._buttonsContainerElement.css("left", "0"),
                this._autospinConfigButtonContainerElement.css(
                  "width",
                  "170px"
                ),
                this._autospinConfigButtonContainerElement.css(
                  "height",
                  "170px"
                ),
                this._autospinConfigButtonContainerElement.css("left", "80px"),
                this._autospinConfigButtonContainerElement.css("top", "-80px"),
                this._autospinConfigButtonIconElement.css("width", "170px"),
                this._autospinConfigButtonIconElement.css("height", "170px"),
                this._autospinConfigButtonBackgroundElement.css(
                  "width",
                  "170px"
                ),
                this._autospinConfigButtonBackgroundElement.css(
                  "height",
                  "170px"
                ),
                this._autospinConfigButtonBackgroundElement.removeClass(
                  "circleButtonBackgroundLandscape"
                ),
                this._autospinConfigButtonBackgroundElement.addClass(
                  "circleButtonBackgroundPortrait"
                ),
                this._autospinConfigButtonClickElement.css("left", "-30px"),
                this._autospinConfigButtonClickElement.css("top", "-30px"),
                this._autospinConfigButtonClickElement.css("width", "230px"),
                this._autospinConfigButtonClickElement.css("height", "230px"),
                this._betButtonContainerElement.css("display", "none"),
                this._betButtonIconElement.css("width", "170px"),
                this._betButtonIconElement.css("height", "170px"),
                this._betButtonBackgroundElement.css("width", "170px"),
                this._betButtonBackgroundElement.css("height", "170px"),
                this._betButtonBackgroundElement.removeClass(
                  "circleButtonBackgroundLandscape"
                ),
                this._betButtonBackgroundElement.addClass(
                  "circleButtonBackgroundPortrait"
                ),
                this._betButtonClickElement.css("left", "-30px"),
                this._betButtonClickElement.css("top", "-30px"),
                this._betButtonClickElement.css("width", "230px"),
                this._betButtonClickElement.css("height", "230px"),
                this._fastPlayButtonContainerElement.css("width", "170px"),
                this._fastPlayButtonContainerElement.css("height", "170px"),
                this._fastPlayButtonContainerElement.css("left", "560px"),
                this._fastPlayButtonContainerElement.css("top", "-370px"),
                this._fastPlayButtonOnElement.css("width", "170px"),
                this._fastPlayButtonOnElement.css("height", "170px"),
                this._fastPlayButtonOffElement.css("width", "170px"),
                this._fastPlayButtonOffElement.css("height", "170px"),
                this._fastPlayButtonBackgroundElement.css("width", "170px"),
                this._fastPlayButtonBackgroundElement.css("height", "170px"),
                this._fastPlayButtonBackgroundElement.removeClass(
                  "circleButtonBackgroundLandscape"
                ),
                this._fastPlayButtonBackgroundElement.removeClass(
                  "circleButtonBackgroundLandscapeDesktop"
                ),
                this._fastPlayButtonBackgroundElement.addClass(
                  "circleButtonBackgroundPortrait"
                ),
                this._fastPlayButtonClickElement.css("left", "-30px"),
                this._fastPlayButtonClickElement.css("top", "-30px"),
                this._fastPlayButtonClickElement.css("width", "230px"),
                this._fastPlayButtonClickElement.css("height", "230px"),
                this._hasTopSpinsMode
                  ? this._autospinConfigButtonContainerElement.css(
                      "left",
                      "1027px"
                    )
                  : this._autospinConfigButtonContainerElement.css(
                      "left",
                      "90px"
                    ),
                this._bottomBarBetButtonClickElement.css("display", "none");
            }
            o &&
              (this._autospinConfigButtonContainerElement.css(
                "display",
                "none"
              ),
              this._betButtonContainerElement.css("display", "none")),
              this._spinButton.update(),
              this._spinButton.layout(t, e, n, s, o, l, void 0);
          }),
          (n.prototype.buildContent = function (t, e) {
            (this._backgroundElementPortrait = e.createDivElement(
              t,
              "actionBarButtonsPortraitBackground"
            )),
              this._backgroundElementPortrait.css("width", "720px"),
              this._backgroundElementPortrait.css("height", "745px"),
              this._backgroundElementPortrait.css("pointer-events", "none"),
              this._backgroundElementPortrait.css({
                "-webkit-transform": "scale(1)",
                "-moz-transform": "scale(1)",
                "-ms-transform": "scale(1)",
                "-webkit-transform-origin": "50% 0 0px",
                "-moz-transform-origin": "50% 0 0px",
                "-ms-transform-origin": "50% 0 0px",
              });
            var n = e.createDivElement(t, "actionBarButtonsContainer"),
              s = e.createDivElement(n, "spinButtonContainer"),
              i = e.createDivElement(n, "autospinButtonContainer"),
              o = e.createDivElement(i, "autospinConfigButtonBackground");
            o.addClass("circleButtonBackground");
            var a = e.createDivElement(i, "autospinConfigButtonIcon");
            a.addClass("autospinIcon"), a.addClass("spinButtonFader");

            var l = e.createDivElement(i, "autospinButtonClickElement");
            this.initAutospinConfigurationButton(i, o, a, l),
              this.initSpinButton(s);
            var r = e.createDivElement(s, "skipButtonContainer"),
              c = e.createDivElement(r, "skipButtonBackground");
            c.addClass("circleButtonBackground");
            var h = e.createDivElement(r, "skipButtonIcon");
            h.addClass("iconSkip"),
              h.addClass("spinButtonFader"),
              this._spinButton.setSkipButton(r, h, c);
            var u = e.createDivElement(n, "betButtonContainer"),
              p = e.createDivElement(u, "betButtonBackground");
            p.addClass("circleButtonBackground");
            var d = e.createDivElement(u, "betButtonIcon");
            d.addClass("betIcon"),
              d.addClass("betButtonFader"),
              (this._bottomBarBetButtonClickElement = e.createDivElement(
                u,
                "bottomBarBetButtonClickElement"
              )),
              (this._betButtonClickElement = e.createDivElement(
                u,
                "betButtonClickElement"
              )),
              this.initBetButton(
                u,
                p,
                d,
                this._betButtonClickElement,
                this._bottomBarBetButtonClickElement
              ),
              (this._containerElement = t),
              (this._buttonsContainerElement = n),
              this._buttonsContainerElement.css("width", "1280px"),
              this._buttonsContainerElement.css("height", "0px"),
              (this._soundButtonContainerElement = e.createDivElement(
                n,
                "desktopSoundButtonContainer"
              )),
              (this._soundButtonBackgroundElement = e.createDivElement(
                this._soundButtonContainerElement,
                "desktopSoundButtonBackground"
              )),
              this._soundButtonBackgroundElement.addClass(
                "circleButtonBackground"
              ),
              this._soundButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscapeDesktop"
              );
            var m = e.createDivElement(
              this._soundButtonContainerElement,
              "desktopSoundButtonOnIcon"
            );
            m.addClass("iconSoundOn");
            var _ = e.createDivElement(
              this._soundButtonContainerElement,
              "desktopSoundButtonOffIcon"
            );
            _.addClass("iconSoundOff"),
              (this._soundButtonClickElement = e.createDivElement(
                this._soundButtonContainerElement,
                "desktopSoundButtonClickElement"
              )),
              this.initSoundButton(
                this._soundButtonContainerElement,
                this._soundButtonBackgroundElement,
                m,
                _,
                this._soundButtonClickElement
              ),
              (this._fastPlayButtonContainerElement = e.createDivElement(
                n,
                "desktopFastPlayButtonContainer"
              )),
              (this._fastPlayButtonBackgroundElement = e.createDivElement(
                this._fastPlayButtonContainerElement,
                "desktopFastPlayButtonBackground"
              )),
              this._fastPlayButtonBackgroundElement.addClass(
                "circleButtonBackground"
              ),
              this._fastPlayButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscapeDesktop"
              );
            var g = e.createDivElement(
              this._fastPlayButtonContainerElement,
              "desktopFastPlayButtonOnIcon"
            );
            g.addClass("iconFastplayOn");
            var E = e.createDivElement(
              this._fastPlayButtonContainerElement,
              "desktopFastPlayButtonOffIcon"
            );
            E.addClass("iconFastplayOff"),
              (this._fastPlayButtonClickElement = e.createDivElement(
                this._fastPlayButtonContainerElement,
                "desktopFastPlayButtonClickElement"
              )),
              this.initFastPlayButton(
                this._fastPlayButtonContainerElement,
                this._fastPlayButtonBackgroundElement,
                g,
                E,
                this._fastPlayButtonClickElement
              ),
              this._hasDesktopGui
                ? (this.buildDesktopAutoSpinButton(this._spinButton, s, e),
                  this.buildDesktopFeatureSpinButton(this._spinButton, s, e),
                  this.buildDesktopFreeRoundsSpinButton(this._spinButton, s, e),
                  this.buildDesktopSingleSpinButton(this._spinButton, s, e),
                  this.buildDesktopQuickStopButton(this._spinButton, s, e),
                  this.buildDesktopMinSpinDurationProgressBar(
                    this._spinButton,
                    s,
                    e
                  ))
                : (this.buildMobileAutoSpinButton(this._spinButton, s, e),
                  this.buildMobileFeatureSpinButton(this._spinButton, s, e),
                  this.buildMobileFreeRoundsSpinButton(this._spinButton, s, e),
                  this.buildMobileSingleSpinButton(this._spinButton, s, e),
                  this.buildMobileQuickStopButton(this._spinButton, s, e),
                  this.buildMobileMinSpinDurationProgressBar(
                    this._spinButton,
                    s,
                    e
                  ));
            var b = e.createDivElement(s, "spinButtonClickElement");
            this._spinButton.setClickElement(b), this._spinButton.hide();
            b.hide();
          }),
          (n.prototype.buildMobileSingleSpinButton = function (t, e, n) {
            var s = n.createDivElement(e, "singleSpinButtonContainer"),
              i = n.createDivElement(s, "singleSpinButtonBackground");
            i.addClass("circleButtonBackground");
            var o = n.createDivElement(s, "singleSpinButtonIcon");
            o.addClass("spinIcon"),
              o.addClass("spinButtonFader"),
              t.setSingleSpinButton(s, o, i);
          }),
          (n.prototype.buildDesktopSingleSpinButton = function (t, e, n) {
            var s = n.createDivElement(e, "singleSpinButtonContainer"),
              i = n.createDivElement(s, "singleSpinButtonBackground");
            i.addClass("circleButtonBackground");
            var o = n.createDivElement(s, "singleSpinButtonIcon");
            o.addClass("spinIcon"),
              o.addClass("spinButtonFader"),
              t.setSingleSpinButton(s, o, i);
          }),
          (n.prototype.buildMobileQuickStopButton = function (t, e, n) {
            var s = n.createDivElement(e, "quickStopButtonContainer"),
              i = n.createDivElement(s, "quickStopButtonBackground");
            i.addClass("circleButtonBackground");
            var o = n.createDivElement(s, "quickStopButtonIcon");
            o.addClass("iconQuickStop"),
              o.addClass("spinButtonFader"),
              t.setQuickStopButton(s, o, i);
          }),
          (n.prototype.buildDesktopQuickStopButton = function (t, e, n) {
            var s = n.createDivElement(e, "quickStopButtonContainer"),
              i = n.createDivElement(s, "quickStopButtonBackground");
            i.addClass("circleButtonBackground");
            var o = n.createDivElement(s, "quickStopButtonIcon");
            o.addClass("iconQuickStop"),
              o.addClass("spinButtonFader"),
              t.setQuickStopButton(s, o, i);
          }),
          (n.prototype.buildMobileAutoSpinButton = function (t, e, n) {
            var s = n.createDivElement(e, "autoSpinButtonContainer"),
              i = n.createDivElement(s, "autoSpinContainerBackground");
            i.addClass("countButtonBackgroundDesktop");
            var o = n.createLabelTextElement(
              s,
              "autoSpinTitleLabelElement",
              "autoPlayPageTitle_uc"
            );
            o.addClass("autospinCountLabel"),
              o.addClass("autospinCountLabelFader");
            var a = n.createDivElement(s, "autospinButtonPartContainer"),
              l = n.createDivElement(a, "autoSpinButtonBackground");
            l.addClass("autoSpinButtonBackground");
            var r = n.createLabelTextElement(
              a,
              "autoSpinButtonCountLabel",
              "-"
            );
            r.addClass("autospinCountLabel"),
              r.addClass("autospinCountLabelFader");
            var c = n.createDivElement(a, "startAutospinButton");
            c.addClass("spinIcon"), c.addClass("autospinStartButtonFader");
            var h = n.createDivElement(a, "stopAutospinButton");
            h.addClass("iconStopAutoSpin"),
              h.addClass("autospinStopButtonFader"),
              t.setAutospinButton(s, a, i, l, c, h, o, r);
          }),
          (n.prototype.buildDesktopAutoSpinButton = function (t, e, n) {
            var s = n.createDivElement(e, "autoSpinButtonContainer"),
              i = n.createDivElement(s, "autoSpinContainerBackground");
            i.addClass("countButtonBackgroundDesktop");
            var o = n.createDivElement(s, "autospinButtonPartContainer"),
              a = n.createDivElement(o, "autoSpinButtonDesktopBackground");
            a.addClass("circleButtonBackground");
            var l = n.createLabelTextElement(
              s,
              "autoSpinTitleLabelElement",
              "autoPlayPageTitle_uc"
            );
            l.addClass("autospinCountLabel"),
              l.addClass("autospinCountLabelFader");
            var r = n.createLabelTextElement(
              s,
              "autoSpinButtonCountLabel",
              "-"
            );
            r.addClass("autospinCountLabel"),
              r.addClass("autospinCountLabelFader");
            var c = n.createDivElement(o, "startAutospinButton");
            c.addClass("spinIcon"), c.addClass("autospinStartButtonFader");
            var h = n.createDivElement(o, "stopAutospinButton");
            h.addClass("iconStopAutoSpin"),
              h.addClass("autospinStopButtonFader"),
              t.setAutospinButton(s, o, i, a, c, h, l, r);
          }),
          (n.prototype.buildMobileFeatureSpinButton = function (t, e, n) {
            var s = n.createDivElement(e, "featureSpinButtonContainer"),
              i = n.createDivElement(s, "featureSpinButtonPartContainer"),
              o = n.createDivElement(i, "featureSpinContainerBackground");
            o.addClass("autoSpinButtonBackground");
            var a = n.createDivElement(i, "featureSpinButtonStartIcon");
            a.addClass("spinIcon"), a.addClass("autospinStartButtonFader");
            var l = n.createDivElement(i, "featureSpinButtonSkipIcon");
            l.addClass("iconSkip"), l.addClass("autospinStartButtonFader");
            var r = n.createDivElement(
              i,
              "featureSpinButtonQuickStopIconElement"
            );
            r.addClass("iconQuickStop"), r.addClass("autospinStartButtonFader");
            var c = n.createDivElement(i, "featureSpinButtonInwinityIcon");
            c.addClass("iconInwinity");
            var h = n.createLabelTextElement(
              s,
              "featureSpinButtonTitleLabel",
              "presentationPageNumberOfBonusSpins_vars_bonusSpinsWon_uc"
            );
            h.addClass("autospinCountLabel"),
              h.addClass("autospinCountLabelFader");
            var u = n.createLabelHtmlElement(i, "featureRoundsCountLabel", "-");
            u.addClass("autospinCountLabel"),
              u.addClass("autospinCountLabelFader"),
              t.setFeatureSpinsButton(s, i, i, o, a, h, u, c, l, r);
          }),
          (n.prototype.buildDesktopFeatureSpinButton = function (t, e, n) {
            var s = n.createDivElement(e, "featureSpinButtonContainer"),
              i = n.createDivElement(s, "featureSpinContainerBackground");
            i.addClass("countButtonBackgroundDesktop");
            var o = n.createDivElement(s, "featureSpinButtonPartContainer"),
              a = n.createDivElement(o, "featureSpinButtonBackground");
            a.addClass("circleButtonBackground");
            var l = n.createDivElement(s, "featureSpinButtonInwinityIcon");
            l.addClass("iconInwinity");
            var r = n.createDivElement(o, "featureSpinButtonStartIcon");
            r.addClass("spinIcon"), r.addClass("autospinStartButtonFader");
            var c = n.createDivElement(o, "featureSpinButtonSkipIcon");
            c.addClass("iconSkip"), c.addClass("autospinStartButtonFader");
            var h = n.createDivElement(
              o,
              "featureSpinButtonQuickStopIconElement"
            );
            h.addClass("iconQuickStop"), h.addClass("autospinStartButtonFader");
            var u = n.createLabelTextElement(
              s,
              "featureSpinButtonTitleLabel",
              "presentationPageNumberOfBonusSpins_vars_bonusSpinsWon_uc"
            );
            u.addClass("autospinCountLabel"),
              u.addClass("autospinCountLabelFader");
            var p = n.createLabelTextElement(
              s,
              "featureSpinButtonCountLabel",
              ""
            );
            p.addClass("autospinCountLabel"),
              p.addClass("autospinCountLabelFader"),
              t.setFeatureSpinsButton(s, o, i, a, r, u, p, l, c, h);
          }),
          (n.prototype.buildDesktopFreeRoundsSpinButton = function (t, e, n) {
            var s = n.createDivElement(e, "freeRoundsSpinButtonContainer"),
              i = n.createDivElement(s, "freeRoundsSpinButtonPartContainer"),
              o = n.createDivElement(i, "freeRoundsSpinButtonBackground");
            o.addClass("circleButtonBackground");
            var a = n.createDivElement(i, "startFreeRoundButtonIcon");
            a.addClass("spinIcon"),
              a.addClass("autospinStartButtonFader"),
              t.setFreeRoundsSpinsButton(s, s, o, a);
          }),
          (n.prototype.buildMobileFreeRoundsSpinButton = function (t, e, n) {
            var s = n.createDivElement(e, "freeRoundsSpinButtonContainer"),
              i = n.createDivElement(s, "freeRoundsSpinButtonPartContainer"),
              o = n.createDivElement(i, "freeRoundsSpinButtonBackground");
            o.addClass("circleButtonBackground");
            var a = n.createDivElement(i, "startFreeRoundButtonIcon");
            a.addClass("spinIcon"),
              a.addClass("autospinStartButtonFader"),
              t.setFreeRoundsSpinsButton(s, s, o, a);
          }),
          (n.prototype.handlePopupMenuVisibilityChanged = function (t) {
            t
              ? this._orientation === e.LANDSCAPE && this._fastPlayButton.hide()
              : this.show();
          }),
          (n.prototype.isSpinButtonEnabled = function () {
            return this._guiSettingsHelper.getSpinButtonEnabledState(
              this._spinButton.state
            );
          }),
          (n.prototype.buildDesktopMinSpinDurationProgressBar = function (
            t,
            e,
            n
          ) {
            var s = n.createDivElement(e, "minSpinDuration_progressBar"),
              i = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
              o = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "circle"
              ),
              a = jQuery(i),
              l = jQuery(o);
            a.attr({ width: "100%", height: "100%", viewBox: "0 0 100 100" }),
              a.css({
                transform: "rotateZ(270deg)",
                "transform-origin": "center",
              }),
              l.attr({ r: "49", cx: "50", cy: "50" }),
              l.css({
                stroke: "white",
                fill: "transparent",
                "stroke-width": "2px",
                "stroke-dasharray":
                  "calc(var(--minSpinDurationProgression) * 314.159) calc(314.159 - (var(--minSpinDurationProgression) * 314.159))",
              }),
              a.append(l),
              s.append(a),
              t.setMinRoundDurationProgressBar(s, a),
              t.updateMinRoundDurationProgression(0);
          }),
          (n.prototype.buildMobileMinSpinDurationProgressBar = function (
            t,
            e,
            n
          ) {
            var s = n.createDivElement(e, "minSpinDuration_progressBar"),
              i = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
              o = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "circle"
              ),
              a = jQuery(i),
              l = jQuery(o);
            a.attr({ width: "100%", height: "100%", viewBox: "0 0 100 100" }),
              a.css({
                transform: "rotateZ(270deg)",
                "transform-origin": "center",
                "stroke-width": "4px",
              }),
              l.attr({ r: "49%", cx: "50%", cy: "50%" }),
              l.css({ stroke: "white", fill: "transparent" }),
              a.append(l),
              s.append(a),
              t.setMinRoundDurationProgressBar(s, a),
              t.updateMinRoundDurationProgression(0);
          }),
          (n.prototype.updateMinimumRoundDurationProgression = function (t) {
            this._spinButton.updateMinRoundDurationProgression(t);
          }),
          n
        );
      })();
    t.ActionButtonsManager = n;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function () {
      function e(t, e) {
        var n = this;
        (this._handedness = !0),
          (this._cachedLayoutValues = {
            gameArea: null,
            gameContainerArea: null,
            gameMarginTop: void 0,
            hasDesktopGui: void 0,
            isControlPanelOpen: void 0,
            hasMaximizedPortrait: void 0,
            orientation: null,
            showingInfoBar: void 0,
          }),
          (this._gameInstanceId = t),
          (this._isShowing = !0),
          (this._initialHide = !0),
          (this._canShowHistoryButton = !1),
          (this._canShowVibrateButton = !1),
          (this._isTopSpinMode = !1),
          (this._isPreventedFromOpening = !1),
          (this._forceLayout = !0),
          (this._guiSettingsHelper = e),
          e.onOverrideStateChanged.add(function () {
            [
              { button: n._openMenuButton, key: "popUpMenuButton" },
              { button: n._vibrateButton, key: "vibrateButton" },
              { button: n._soundButton, key: "soundButton" },
              { button: n._gameRulesButton, key: "gameRulesButton" },
              { button: n._paytableButton, key: "payTableButton" },
              { button: n._ocButton, key: "ocButton" },
              { button: n._historyButton, key: "historyButton" },
            ].forEach(function (t) {
              t.button &&
                (t.button.enabled = e.getButtonEnabledOverrideState(t.key));
            });
          }),
          (this.onGuiButtonClicked =
            new tk_common.slots.gui.GuiButtonClickedSignal()),
          (this.visibilityChanged = new tk_common.utils.Signal1());
      }
      return (
        Object.defineProperty(e.prototype, "showBackToLobbyButton", {
          set: function (t) {
            (t = t && this._guiSettingsHelper.isButtonAllowed("backtolobby"))
              ? (this._backToLobbyButtonClickElement.css("display", "block"),
                this._backToLobbyButtonBackgroundElement.css(
                  "display",
                  "block"
                ),
                this._backToLobbyButtonElement.css("display", "block"),
                this._backToLobbyButtonContainerElement.css("display", "block"),
                (this._backToLobbyButton.enabled = !0))
              : (this._backToLobbyButtonClickElement.css("display", "none"),
                this._backToLobbyButtonBackgroundElement.css("display", "none"),
                this._backToLobbyButtonElement.css("display", "none"),
                this._backToLobbyButtonContainerElement.css("display", "none"),
                (this._backToLobbyButton.enabled = !1));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "showHistoryButton", {
          set: function (t) {
            (t = t && this._guiSettingsHelper.isButtonAllowed("history")),
              (this._canShowHistoryButton = t),
              t
                ? (this._historyButtonClickElement.css("display", "block"),
                  this._historyButtonBackgroundElement.css("display", "block"),
                  this._historyIconElement.css("display", "block"),
                  this._historyButtonContainerElement.css("display", "block"))
                : (this._historyButtonClickElement.css("display", "none"),
                  this._historyButtonBackgroundElement.css("display", "none"),
                  this._historyIconElement.css("display", "none"),
                  this._historyButtonContainerElement.css("display", "none"));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "showVibrateButton", {
          set: function (t) {
            (t = t && this._guiSettingsHelper.isButtonAllowed("vibrate")),
              (this._canShowVibrateButton = t),
              t
                ? (this._vibrateButtonClickElement.css("display", "block"),
                  this._vibrateButtonBackgroundElement.css("display", "block"),
                  this._vibrateButtonOnElement.css("display", "block"),
                  this._vibrateButtonOffElement.css("display", "block"),
                  this._vibrateButtonContainerElement.css("display", "block"))
                : (this._vibrateButtonClickElement.css("display", "none"),
                  this._vibrateButtonBackgroundElement.css("display", "none"),
                  this._vibrateButtonOnElement.css("display", "none"),
                  this._vibrateButtonOffElement.css("display", "none"),
                  this._vibrateButtonContainerElement.css("display", "none"));
          },
          enumerable: !1,
          configurable: !0,
        }),
        // Object.defineProperty(e.prototype, "ocEnabled", {
        //   set: function (t) {
        //     // if (((this._ocEnabled = t), this._ocEnabled)) {
        //       // if (!this._ocInitialized) {
        //       //   var e = this._guiElementFactory.createDivElement(
        //       //       this._navigationButtonsContainerElement,
        //       //       "ocButtonContainer"
        //       //     ),
        //       //     n = this._guiElementFactory.createDivElement(
        //       //       e,
        //       //       "ocButtonBackground"
        //       //     );
        //       //   n.addClass("circleButtonBackground"),
        //       //     n.addClass("circleButtonBackgroundLandscape");
        //       //   var s = this._guiElementFactory.createDivElement(
        //       //     e,
        //       //     "ocButtonIcon"
        //       //   );
        //       //   s.addClass("iconOc"),
        //       //     (this._ocButtonClickElement =
        //       //       this._guiElementFactory.createDivElement(
        //       //         e,
        //       //         "ocButtonClickElement"
        //       //       )),
        //       //     this.initOcButton(e, n, s, this._ocButtonClickElement),
        //       //     this._ocButtonContainerElement.css("top", "455px"),
        //       //     this._ocButtonContainerElement.css("left", "186px"),
        //       //     this._ocButtonContainerElement.css("width", "100px"),
        //       //     this._ocButtonContainerElement.css("height", "100px"),
        //       //     this._ocIconElement.css("width", "100px"),
        //       //     this._ocIconElement.css("height", "100px"),
        //       //     this._ocButtonClickElement.css("top", 0),
        //       //     this._ocButtonClickElement.css("left", 0),
        //       //     this._ocButtonClickElement.css("width", "100px"),
        //       //     this._ocButtonClickElement.css("height", "100px");
        //       //  }
        //       // this._orientation ===
        //       //   tk_common.constants.OrientationEnum.LANDSCAPE &&
        //       //   this._ocButtonContainerElement.css("display", "block");
        //     // }
        //   },
        //   enumerable: !1,
        //   configurable: !0,
        // }),
        Object.defineProperty(e.prototype, "isShowing", {
          get: function () {
            return this._isShowing;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.setHandedness = function (t) {
          this._handedness = t;
        }),
        (e.prototype.initButtonsContainer = function (t) {
          this._buttonsContainerElement = t;
        }),
        (e.prototype.enableOpenMenuButton = function (t) {
          this._guiSettingsHelper.updateButtonBaseStates({
            popUpMenuButton: { enabled: t },
          });
        }),
        (e.prototype.initOpenMenuButton = function (e, n, s, i) {
          (this._openMenuButtonContainerElement = e),
            (this._openMenuButtonElement = s),
            (this._openMenuButtonBackgroundElement = n),
            (this._openMenuButton = new t.SpriteButton(
              tk_common.slots.gui.GuiButtonIds.TOGGLE_POPUP_MENU,
              !0,
              s,
              i,
              e
            )),
            this._openMenuButton.Clicked.add(
              this.handleShowButtonClicked,
              this
            );
        }),
        (e.prototype.handleShowButtonClicked = function () {
          this.toggleShow();
        }),
        (e.prototype.initBackToLobbyButton = function (e, n, s, i) {
          (this._backToLobbyButtonContainerElement = e),
            (this._backToLobbyButtonElement = s),
            (this._backToLobbyButtonBackgroundElement = n),
            (this._backToLobbyButton = new t.SpriteButton(
              tk_common.slots.gui.GuiButtonIds.BACK_TO_LOBBY_BUTTON,
              !0,
              this._backToLobbyButtonElement,
              i,
              this._backToLobbyButtonContainerElement
            )),
            this._backToLobbyButton.Clicked.add(
              this.handleGuiButtonClicked,
              this
            );
        }),
        (e.prototype.initSoundLoader = function (t, e, n) {
          (this._soundLoadContainerElement = t),
            (this._soundLoadIconElement = e),
            (this._soundLoadCircleElement = n),
            (this.loadSoundMode = !1);
        }),
        (e.prototype.initSoundButton = function (e, n, s, i, o) {
          (this._soundButtonContainerElement = e),
            (this._soundButtonBackgroundElement = n),
            (this._soundButtonOnElement = s),
            (this._soundButtonOffElement = i),
            (this._soundButton = new t.ToggleButton(
              tk_common.slots.gui.GuiButtonIds.TOGGLE_SOUND,
              !1,
              s,
              i,
              o,
              e
            )),
            this._soundButton.Clicked.add(
              this.handleGuiButtonClicked,
              this,
              tk_common.slots.gui.GuiButtonIds.TOGGLE_SOUND
            );
        }),
        (e.prototype.initVibrateButton = function (e, n, s, i, o) {
          (this._vibrateButtonContainerElement = e),
            (this._vibrateButtonBackgroundElement = n),
            (this._vibrateButtonOnElement = s),
            (this._vibrateButtonOffElement = i),
            (this._vibrateButton = new t.ToggleButton(
              tk_common.slots.gui.GuiButtonIds.TOGGLE_VIBRATE,
              !1,
              s,
              i,
              o,
              e
            )),
            this._vibrateButton.Clicked.add(
              this.handleGuiButtonClicked,
              this,
              tk_common.slots.gui.GuiButtonIds.TOGGLE_VIBRATE
            ),
            (this._vibrateButton.selected = !0),
            (this.showVibrateButton = !1);
        }),
        Object.defineProperty(e.prototype, "loadSoundMode", {
          set: function (t) {
            t
              ? (this._soundLoadContainerElement.css("display", "block"),
                this._soundLoadCircleElement.addClass("loaderSpin"),
                this._soundLoadCircleElement.css("display", "block"))
              : (this._soundButton.show(),
                this._soundLoadContainerElement.css("display", "none"),
                this._soundLoadCircleElement.removeClass("loaderSpin"),
                this._soundLoadCircleElement.css("display", "none"));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "soundButtonSelected", {
          set: function (t) {
            this._soundButton.selected = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.initHistoryButton = function (e, n, s, i) {
          (this._historyButtonContainerElement = e),
            (this._historyIconElement = s),
            (this._historyButtonBackgroundElement = n),
            (this._historyButton = new t.SpriteButton(
              tk_common.slots.gui.GuiButtonIds.HISTORY,
              !0,
              s,
              i,
              e
            )),
            this._historyButton.Clicked.add(this.handleGuiButtonClicked, this);
        }),
        (e.prototype.initGameRulesButton = function (e, n, s, i) {
          (this._gameRulesButtonContainerElement = e),
            (this._gameRulesIconElement = s),
            (this._gameRulesButtonBackgroundElement = n),
            (this._gameRulesButton = new t.SpriteButton(
              tk_common.slots.gui.GuiButtonIds.GAME_RULES,
              !0,
              s,
              i,
              e
            )),
            this._gameRulesButton.Clicked.add(
              this.handleGuiButtonClicked,
              this
            );
        }),
        (e.prototype.initPaytableButton = function (e, n, s, i) {
          (this._paytableButtonContainerElement = e),
            (this._paytableIconElement = s),
            (this._paytableButtonBackgroundElement = n),
            (this._paytableButton = new t.SpriteButton(
              tk_common.slots.gui.GuiButtonIds.PAY_TABLE,
              !0,
              s,
              i,
              e
            )),
            this._paytableButton.Clicked.add(this.handleGuiButtonClicked, this);
        }),
        // (e.prototype.initOcButton = function (e, n, s, i) {
        //   (this._ocButtonContainerElement = e),
        //     (this._ocIconElement = s),
        //     (this._ocButtonBackgroundElement = n),
        //     (this._ocButton = new t.SpriteButton(
        //       tk_common.slots.gui.GuiButtonIds.OC,
        //       !0,
        //       s,
        //       i,
        //       e
        //     )),
        //     this._ocButton.Clicked.add(this.handleGuiButtonClicked, this);
        // }),
        (e.prototype.handleGuiButtonClicked = function (t) {
          this._isShowing &&
            (t === tk_common.slots.gui.GuiButtonIds.TOGGLE_SOUND &&
              this._soundButton.toggle(),
            t === tk_common.slots.gui.GuiButtonIds.TOGGLE_VIBRATE &&
              this._vibrateButton.toggle(),
            this.onGuiButtonClicked.dispatch(t));
        }),
        (e.prototype.setTopSpinsFeatureMode = function () {
          (this._isTopSpinMode = !0), this.relayout();
        }),
        (e.prototype.setSingleSpinMode = function () {
          (this._isTopSpinMode = !1), this.relayout();
        }),
        (e.prototype.toggleShow = function (t) {
          var e = this;
          this._buttonsContainerElement.css("display", "block"),
            this._backgroundElement.css("visibility", "visible"),
            tk_common.time.clearSafeTimeout(this._disableNavigationTimeOut),
            void 0 === t && (t = !this._isShowing),
            (t = t && !1 === this._isPreventedFromOpening) !==
              this._isShowing &&
              (0 == t
                ? (this._orientation,
                  tk_common.constants.OrientationEnum.LANDSCAPE,
                  TweenMax.to(this._buttonsContainerElement, 0.4, {
                    opacity: 0,
                  }),
                  (this._disableNavigationTimeOut =
                    tk_common.time.setSafeTimeout(
                      this._gameInstanceId,
                      function () {
                        return e.handleCloseAnimationComplete();
                      },
                      600
                    )),
                  TweenMax.to(this._backgroundElement, 0.4, { opacity: 0 }))
                : (TweenMax.to(this._backgroundElement, 0.4, { opacity: 1 }),
                  this._orientation,
                  tk_common.constants.OrientationEnum.LANDSCAPE,
                  TweenMax.to(this._buttonsContainerElement, 0.4, {
                    opacity: 1,
                  })),
              this.updateVisibilityOfButtons(),
              (this._isShowing = t),
              this.relayout(),
              this._initialHide ||
                this.visibilityChanged.dispatch(this._isShowing),
              (this._initialHide = !1));
        }),
        (e.prototype.handleCloseAnimationComplete = function () {
          tk_common.time.clearSafeTimeout(this._disableNavigationTimeOut),
            this._backgroundElement.css("visibility", "hidden"),
            this._buttonsContainerElement.css("display", "none");
        }),
        (e.prototype.show = function () {
          this._containerElement.css("display", "block"),
            this._buttonsContainerElement.css("display", "none"),
            this._backgroundElement.css("visibility", "hidden"),
            this._ocButton && this._ocButton.show(),
            this.updateVisibilityOfButtons(),
            this.toggleShow();
        }),
        (e.prototype.hide = function () {
          this._soundLoadContainerElement.css("display", "none"),
            this._soundLoadCircleElement.css("display", "none"),
            this._soundLoadCircleElement.removeClass("loaderSpin"),
            this._containerElement.css("display", "none"),
            this._openMenuButton.hide(),
            this._soundButton.hide(),
            this._backToLobbyButton.hide(),
            this._paytableButton.hide(),
            this._gameRulesButton.hide(),
            this._historyButton.hide(),
            this._vibrateButton.hide(),
            this._ocButton && this._ocButton.hide();
        }),
        (e.prototype.relayout = function () {
          this.layout(
            this._orientation,
            this._gameContainerArea,
            this._gameArea,
            this._hasDesktopGui,
            this._hasMaximizedPortrait,
            this._isControlPanelOpen,
            this._showingInfoBar,
            this._gameMarginTop
          );
        }),
        (e.prototype.forceLayout = function (t, e, n, s, i, o, a, l) {
          (this._forceLayout = !0), this.layout(t, e, n, s, i, o, a, l);
        }),
        (e.prototype.layout = function (t, e, n, s, i, o, a, l) {
          (this._orientation = t),
            (this._gameContainerArea = e),
            (this._gameArea = n),
            (this._hasDesktopGui = s),
            (this._hasMaximizedPortrait = i),
            (this._isControlPanelOpen = o),
            (this._showingInfoBar = a),
            (this._gameMarginTop = l);
          var r = this._forceLayout;
          (r =
            (r =
              (r =
                (r =
                  (r =
                    (r =
                      (r =
                        (r = r || this._cachedLayoutValues.orientation != t) ||
                        this._cachedLayoutValues.gameArea != n) ||
                      this._cachedLayoutValues.gameContainerArea != e) ||
                    this._cachedLayoutValues.showingInfoBar != a) ||
                  this._cachedLayoutValues.hasMaximizedPortrait != i) ||
                this._cachedLayoutValues.hasDesktopGui != s) ||
              this._cachedLayoutValues.gameMarginTop != l) ||
            this._cachedLayoutValues.isControlPanelOpen != o),
            (this._cachedLayoutValues = {
              showingInfoBar: a,
              gameContainerArea: e,
              gameArea: n,
              orientation: t,
              isControlPanelOpen: o,
              gameMarginTop: l,
              hasDesktopGui: s,
              hasMaximizedPortrait: i,
            }),
            r &&
              (this._containerElement.css("top", "28px"),
              this._containerElement.css("left", "0"),
              this._containerElement.css("width", "0"),
              this._containerElement.css("height", "0"),
              this._buttonsContainerElement.css("top", 0),
              this._buttonsContainerElement.css("left", 0),
              (this._hasDesktopGui = s),
              s
                ? this.layoutForDesktop(t, e, n, s, o, l, i)
                : this.layoutForMobile(t, e, n, s, o, l, i)),
            (this._forceLayout = !1);
        }),
        (e.prototype.layoutForDesktop = function (t, e, n, s, i, o, a) {
          var l = "70px";
          this._containerElement.css({
            "-webkit-transform-origin": "50% 0 0px",
            "-webkit-transform": "scale(1)",
            "-moz-transform-origin": "50% 0 0px",
            "-moz-transform": "scale(1)",
            "-ms-transform-origin": "50% 0 0px",
            "-ms-transform": "scale(1)",
          }),
            this._backgroundElement.css("left", 0),
            this._backgroundElement.css("top", '-30px'),
            this._backgroundElement.css("display", "block"),
            this._backgroundElement.css("width", "115px"),
            this._backgroundElement.css("height", "724px"),
            this._openMenuButtonContainerElement.css("left", "9px"),
            this._openMenuButtonContainerElement.css("top", "612px"),
            this._openMenuButtonContainerElement.css("width", "70px"),
            this._openMenuButtonContainerElement.css("height", "70px"),
            this._openMenuButtonElement.css("width", "60px"),
            this._openMenuButtonElement.css("height", "60px"),
            this._openMenuButtonElement.css("left", "5px"),
            this._openMenuButtonElement.css("top", "5px"),
            this._openMenuButtonBackgroundElement.css("width", "70px"),
            this._openMenuButtonBackgroundElement.css("height", "70px"),
            this._openMenuButtonBackgroundElement.addClass(
              "circleButtonBackgroundLandscapeDesktop"
            ),
            this._openMenuButtonClickElement.css("left", "9px"),
            this._openMenuButtonClickElement.css("top", "608px"),
            this._openMenuButtonClickElement.css("width", "71px"),
            this._openMenuButtonClickElement.css("height", "71px"),
            this._backToLobbyButtonContainerElement.css("left", "10px"),
            this._backToLobbyButtonContainerElement.css("width", l),
            this._backToLobbyButtonContainerElement.css("height", l),
            this._backToLobbyButtonContainerElement.css("top", "164px"),
            this._backToLobbyButtonElement.css("width", l),
            this._backToLobbyButtonElement.css("height", l),
            this._backToLobbyButtonBackgroundElement.css("width", l),
            this._backToLobbyButtonBackgroundElement.css("height", l),
            this._backToLobbyButtonBackgroundElement.removeClass(
              "circleButtonBackgroundPortrait"
            ),
            this._backToLobbyButtonBackgroundElement.addClass(
              "circleButtonBackgroundLandscapeDesktopPopupMenu"
            ),
            this._backToLobbyButtonClickElement.css("top", 0),
            this._backToLobbyButtonClickElement.css("left", 0),
            this._backToLobbyButtonClickElement.css("width", l),
            this._backToLobbyButtonClickElement.css("height", l),
            this._historyButtonContainerElement.css("top", "275px"),
            this._historyButtonContainerElement.css("left", "10px"),
            this._historyButtonContainerElement.css("width", l),
            this._historyButtonContainerElement.css("height", l),
            this._historyButtonBackgroundElement.css("width", l),
            this._historyButtonBackgroundElement.css("height", l),
            this._historyButtonBackgroundElement.removeClass(
              "circleButtonBackgroundPortrait"
            ),
            this._historyButtonBackgroundElement.addClass(
              "circleButtonBackgroundLandscapeDesktopPopupMenu"
            ),
            this._historyIconElement.css("width", l),
            this._historyIconElement.css("height", l),
            this._historyButtonClickElement.css("top", 0),
            this._historyButtonClickElement.css("left", 0),
            this._historyButtonClickElement.css("width", l),
            this._historyButtonClickElement.css("height", l),
            this._gameRulesButtonContainerElement.css("top", "389px"),
            this._gameRulesButtonContainerElement.css("left", "10px"),
            this._gameRulesButtonContainerElement.css("width", l),
            this._gameRulesButtonContainerElement.css("height", l),
            this._gameRulesButtonBackgroundElement.css("width", l),
            this._gameRulesButtonBackgroundElement.css("height", l),
            this._gameRulesButtonBackgroundElement.removeClass(
              "circleButtonBackgroundPortrait"
            ),
            this._gameRulesButtonBackgroundElement.addClass(
              "circleButtonBackgroundLandscapeDesktopPopupMenu"
            ),
            this._gameRulesIconElement.css("width", l),
            this._gameRulesIconElement.css("height", l),
            this._gameRulesButtonClickElement.css("top", 0),
            this._gameRulesButtonClickElement.css("left", 0),
            this._gameRulesButtonClickElement.css("width", l),
            this._gameRulesButtonClickElement.css("height", l),
            this._paytableButtonContainerElement.css("top", "500px"),
            this._paytableButtonContainerElement.css("left", "10px"),
            this._guiSettingsHelper.isButtonAllowed("paytable") &&
              this._paytableButtonContainerElement.hide().show(0),
            this._paytableButtonContainerElement.css("width", l),
            this._paytableButtonContainerElement.css("height", l),
            this._paytableIconElement.css("width", l),
            this._paytableIconElement.css("height", l),
            this._paytableIconElement.css("top", "6px"),
            this._paytableButtonBackgroundElement.css("width", l),
            this._paytableButtonBackgroundElement.css("height", l),
            this._paytableButtonBackgroundElement.removeClass(
              "circleButtonBackgroundPortrait"
            ),
            this._paytableButtonBackgroundElement.addClass(
              "circleButtonBackgroundLandscapeDesktopPopupMenu"
            ),
            this._paytableButtonClickElement.css("left", 0),
            this._paytableButtonClickElement.css("top", 0),
            this._paytableButtonClickElement.css("width", l),
            this._paytableButtonClickElement.css("height", l);
          // this._ocEnabled &&
          //   (this._ocButtonBackgroundElement.addClass(
          //     "circleButtonBackgroundLandscapeDesktopPopupMenu"
          //   ),
          //   this._ocButtonContainerElement.css("display", "block"),
          //   this._ocButtonContainerElement.css("top", "30px"),
          //   this._ocButtonContainerElement.css("left", "10px"),
          //   this._ocButtonContainerElement.css("width", l),
          //   this._ocButtonContainerElement.css("height", l),
          //   this._ocIconElement.css("width", l),
          //   this._ocIconElement.css("height", l),
          //   this._ocButtonClickElement.css("top", 0),
          //   this._ocButtonClickElement.css("left", 0),
          //   this._ocButtonClickElement.css("width", l),
          //   this._ocButtonClickElement.css("height", l));
        }),
        (e.prototype.layoutForMobile = function (t, e, n, s, i, o, a) {
          if (t === tk_common.constants.OrientationEnum.LANDSCAPE) {
            var l = "100px";
            this._containerElement.css({
              "-webkit-transform-origin": "50% 0 0px",
              "-webkit-transform": "scale(1)",
              "-moz-transform-origin": "50% 0 0px",
              "-moz-transform": "scale(1)",
              "-ms-transform-origin": "50% 0 0px",
              "-ms-transform": "scale(1)",
            }),
              1 == this._handedness
                ? (this._backgroundElement.css("left", 0),
                  this._backgroundElement.css("top", 0),
                  this._backgroundElement.css("display", "block"),
                  this._backgroundElement.css(
                    "-webkit-transform",
                    "translate3d(0, 0, 0)  scale3d(1,1,1)"
                  ),
                  this._openMenuButtonContainerElement.css("left", "40px"),
                  this._guiSettingsHelper.useAlternativePopupMenuLayout
                    ? this._openMenuButtonContainerElement.css(
                        "top",
                        270 +
                          this._guiSettingsHelper.customPopUpMenuButtonTopOffset
                            .landscape +
                          "px"
                      )
                    : this._openMenuButtonContainerElement.css("top", "270px"),
                  this._openMenuButtonContainerElement.css("width", "65px"),
                  this._openMenuButtonContainerElement.css("height", "65px"),
                  this._guiSettingsHelper.isButtonAllowed("popupmenu") &&
                    this._openMenuButtonContainerElement.hide().show(0),
                  this._openMenuButtonElement.css("width", "65px"),
                  this._openMenuButtonElement.css("height", "65px"),
                  this._openMenuButtonBackgroundElement.css("width", "65px"),
                  this._openMenuButtonBackgroundElement.css("height", "65px"),
                  this._openMenuButtonBackgroundElement.removeClass(
                    "circleButtonBackgroundPortrait"
                  ),
                  this._openMenuButtonBackgroundElement.addClass(
                    "circleButtonBackgroundLandscape"
                  ),
                  this._openMenuButtonClickElement.css("width", "125px"),
                  this._openMenuButtonClickElement.css("height", "125px"),
                  this._openMenuButtonClickElement.css("left", "7px"),
                  this._guiSettingsHelper.useAlternativePopupMenuLayout
                    ? this._openMenuButtonClickElement.css(
                        "top",
                        240 +
                          this._guiSettingsHelper.customPopUpMenuButtonTopOffset
                            .landscape +
                          "px"
                      )
                    : this._openMenuButtonClickElement.css("top", "240px"),
                  this._backToLobbyButtonContainerElement.css("left", "38px"),
                  this._backToLobbyButtonContainerElement.css("width", l),
                  this._backToLobbyButtonContainerElement.css("height", l),
                  this._backToLobbyButtonContainerElement.css("top", "60px"),
                  this._backToLobbyButtonElement.css("width", l),
                  this._backToLobbyButtonElement.css("height", l),
                  this._backToLobbyButtonBackgroundElement.css("width", l),
                  this._backToLobbyButtonBackgroundElement.css("height", l),
                  this._backToLobbyButtonBackgroundElement.removeClass(
                    "circleButtonBackgroundPortrait"
                  ),
                  this._backToLobbyButtonBackgroundElement.addClass(
                    "circleButtonBackgroundLandscape"
                  ),
                  this._backToLobbyButtonClickElement.css("top", 0),
                  this._backToLobbyButtonClickElement.css("left", 0),
                  this._backToLobbyButtonClickElement.css("width", l),
                  this._backToLobbyButtonClickElement.css("height", l),
                  this._gameRulesButtonContainerElement.css("top", "254px"),
                  this._gameRulesButtonContainerElement.css("left", "186px"),
                  this._gameRulesButtonContainerElement.css("width", l),
                  this._gameRulesButtonContainerElement.css("height", l),
                  this._gameRulesButtonBackgroundElement.css("width", l),
                  this._gameRulesButtonBackgroundElement.css("height", l),
                  this._gameRulesButtonBackgroundElement.removeClass(
                    "circleButtonBackgroundPortrait"
                  ),
                  this._gameRulesButtonBackgroundElement.addClass(
                    "circleButtonBackgroundLandscape"
                  ),
                  this._gameRulesIconElement.css("width", l),
                  this._gameRulesIconElement.css("height", l),
                  this._gameRulesButtonClickElement.css("top", 0),
                  this._gameRulesButtonClickElement.css("left", 0),
                  this._gameRulesButtonClickElement.css("width", l),
                  this._gameRulesButtonClickElement.css("height", l),
                  this._guiSettingsHelper.useAlternativePopupMenuLayout
                    ? (this._historyButtonContainerElement.css("top", "255px"),
                      this._historyButtonContainerElement.css("left", "38px"))
                    : (this._historyButtonContainerElement.css("top", "455px"),
                      this._historyButtonContainerElement.css("left", "186px")),
                  this._historyButtonContainerElement.css("width", l),
                  this._historyButtonContainerElement.css("height", l),
                  this._historyButtonBackgroundElement.css("width", l),
                  this._historyButtonBackgroundElement.css("height", l),
                  this._historyButtonBackgroundElement.removeClass(
                    "circleButtonBackgroundPortrait"
                  ),
                  this._historyButtonBackgroundElement.addClass(
                    "circleButtonBackgroundLandscape"
                  ),
                  this._historyIconElement.css("width", l),
                  this._historyIconElement.css("height", l),
                  this._historyButtonClickElement.css("top", 0),
                  this._historyButtonClickElement.css("left", 0),
                  this._historyButtonClickElement.css("width", l),
                  this._historyButtonClickElement.css("height", l),
                  this._soundButtonContainerElement.css("top", "455px"),
                  this._guiSettingsHelper.useAlternativePopupMenuLayout
                    ? this._soundButtonContainerElement.css("left", "186px")
                    : this._soundButtonContainerElement.css("left", "38px"),
                  this._soundButtonBackgroundElement.css("width", l),
                  this._soundButtonBackgroundElement.css("height", l),
                  this._soundButtonBackgroundElement.removeClass(
                    "circleButtonBackgroundPortrait"
                  ),
                  this._soundButtonBackgroundElement.addClass(
                    "circleButtonBackgroundLandscape"
                  ),
                  this._soundButtonContainerElement.css("width", l),
                  this._soundButtonContainerElement.css("height", l),
                  this._soundButtonOnElement.css("width", l),
                  this._soundButtonOnElement.css("height", l),
                  this._soundButtonOffElement.css("width", l),
                  this._soundButtonOffElement.css("height", l),
                  this._soundLoadContainerElement.css("top", "455px"),
                  this._guiSettingsHelper.useAlternativePopupMenuLayout
                    ? this._soundLoadContainerElement.css("left", "186px")
                    : this._soundLoadContainerElement.css("left", "38px"),
                  this._soundLoadContainerElement.css("width", "100pxpx"),
                  this._soundLoadContainerElement.css("height", "100pxpx"),
                  this._soundLoadCircleElement.css("top", "-15px"),
                  this._soundLoadCircleElement.css("left", "-15px"),
                  this._soundLoadCircleElement.css("width", "130px"),
                  this._soundLoadCircleElement.css("height", "130px"),
                  this._soundLoadIconElement.css("width", l),
                  this._soundLoadIconElement.css("height", l),
                  this._soundLoadIconElement.css("left", "0px"),
                  this._soundLoadIconElement.css("top", "0px"),
                  this._soundButtonClickElement.css("left", 0),
                  this._soundButtonClickElement.css("top", 0),
                  this._soundButtonClickElement.css("width", l),
                  this._soundButtonClickElement.css("height", l),
                  this._paytableButtonContainerElement.css("top", "60px"),
                  this._paytableButtonContainerElement.css("left", "186px"),
                  this._paytableButtonContainerElement.css("width", l),
                  this._paytableButtonContainerElement.css("height", l),
                  this._paytableIconElement.css("width", l),
                  this._paytableIconElement.css("height", l),
                  this._paytableIconElement.css("top", "6px"),
                  this._paytableButtonBackgroundElement.css("width", l),
                  this._paytableButtonBackgroundElement.css("height", l),
                  this._paytableButtonBackgroundElement.removeClass(
                    "circleButtonBackgroundPortrait"
                  ),
                  this._paytableButtonBackgroundElement.addClass(
                    "circleButtonBackgroundLandscape"
                  ),
                  this._paytableButtonClickElement.css("left", 0),
                  this._paytableButtonClickElement.css("top", 0),
                  this._paytableButtonClickElement.css("width", l),
                  this._paytableButtonClickElement.css("height", l),
                  // this._ocEnabled &&
                  //   (this._ocButtonContainerElement.css("display", "block"),
                  //   this._ocButtonContainerElement.css("top", "455px"),
                  //   this._ocButtonContainerElement.css("left", "340px"),
                  //   this._ocButtonContainerElement.css("width", l),
                  //   this._ocButtonContainerElement.css("height", l),
                  //   this._ocIconElement.css("width", l),
                  //   this._ocIconElement.css("height", l),
                  //   this._ocButtonClickElement.css("top", 0),
                  //   this._ocButtonClickElement.css("left", 0),
                  //   this._ocButtonClickElement.css("width", l),
                  //   this._ocButtonClickElement.css("height", l)),
                  this._vibrateButtonContainerElement.css("top", "60px"),
                  this._vibrateButtonContainerElement.css("left", "340px"),
                  this._vibrateButtonBackgroundElement.css("width", l),
                  this._vibrateButtonBackgroundElement.css("height", l),
                  this._vibrateButtonBackgroundElement.removeClass(
                    "circleButtonBackgroundPortrait"
                  ),
                  this._vibrateButtonBackgroundElement.addClass(
                    "circleButtonBackgroundLandscape"
                  ),
                  this._vibrateButtonContainerElement.css("width", l),
                  this._vibrateButtonContainerElement.css("height", l),
                  this._vibrateButtonOnElement.css("width", l),
                  this._vibrateButtonOnElement.css("height", l),
                  this._vibrateButtonOffElement.css("width", l),
                  this._vibrateButtonOffElement.css("height", l),
                  this._vibrateButtonClickElement.css("left", 0),
                  this._vibrateButtonClickElement.css("top", 0),
                  this._vibrateButtonClickElement.css("width", l),
                  this._vibrateButtonClickElement.css("height", l))
                : (this._backgroundElement.css("left", "893px"),
                  this._backgroundElement.css("top", 0),
                  this._backgroundElement.css("display", "block"),
                  this._backgroundElement.css(
                    "-webkit-transform",
                    "translate3d(0, 0, 0) scale3d(-1,1,1)"
                  ),
                  this._openMenuButtonContainerElement.css("left", "1168px"),
                  this._guiSettingsHelper.useAlternativePopupMenuLayout
                    ? this._openMenuButtonContainerElement.css(
                        "top",
                        270 +
                          this._guiSettingsHelper.customPopUpMenuButtonTopOffset
                            .landscape +
                          "px"
                      )
                    : this._openMenuButtonContainerElement.css("top", "270px"),
                  this._openMenuButtonContainerElement.css("width", "65px"),
                  this._openMenuButtonContainerElement.css("height", "65px"),
                  this._openMenuButtonElement.css("width", "65px"),
                  this._openMenuButtonElement.css("height", "65px"),
                  this._openMenuButtonBackgroundElement.css("width", "65px"),
                  this._openMenuButtonBackgroundElement.css("height", "65px"),
                  this._openMenuButtonBackgroundElement.removeClass(
                    "circleButtonBackgroundPortrait"
                  ),
                  this._openMenuButtonBackgroundElement.addClass(
                    "circleButtonBackgroundLandscape"
                  ),
                  this._openMenuButtonClickElement.css("width", "125px"),
                  this._openMenuButtonClickElement.css("height", "125px"),
                  this._openMenuButtonClickElement.css("left", "1138px"),
                  this._guiSettingsHelper.useAlternativePopupMenuLayout
                    ? this._openMenuButtonClickElement.css(
                        "top",
                        240 +
                          this._guiSettingsHelper.customPopUpMenuButtonTopOffset
                            .landscape +
                          "px"
                      )
                    : this._openMenuButtonClickElement.css("top", "240px"),
                  this._backToLobbyButtonContainerElement.css("left", "1142px"),
                  this._backToLobbyButtonContainerElement.css("width", l),
                  this._backToLobbyButtonContainerElement.css("height", l),
                  this._backToLobbyButtonContainerElement.css("top", "60px"),
                  this._backToLobbyButtonElement.css("width", l),
                  this._backToLobbyButtonElement.css("height", l),
                  this._backToLobbyButtonBackgroundElement.css("width", l),
                  this._backToLobbyButtonBackgroundElement.css("height", l),
                  this._backToLobbyButtonBackgroundElement.removeClass(
                    "circleButtonBackgroundPortrait"
                  ),
                  this._backToLobbyButtonBackgroundElement.addClass(
                    "circleButtonBackgroundLandscape"
                  ),
                  this._backToLobbyButtonClickElement.css("top", 0),
                  this._backToLobbyButtonClickElement.css("left", 0),
                  this._backToLobbyButtonClickElement.css("width", l),
                  this._backToLobbyButtonClickElement.css("height", l),
                  this._gameRulesButtonContainerElement.css("top", "254px"),
                  this._gameRulesButtonContainerElement.css("left", "968px"),
                  this._gameRulesButtonContainerElement.css("width", l),
                  this._gameRulesButtonContainerElement.css("height", l),
                  this._gameRulesButtonBackgroundElement.css("width", l),
                  this._gameRulesButtonBackgroundElement.css("height", l),
                  this._gameRulesButtonBackgroundElement.removeClass(
                    "circleButtonBackgroundPortrait"
                  ),
                  this._gameRulesButtonBackgroundElement.addClass(
                    "circleButtonBackgroundLandscape"
                  ),
                  this._gameRulesIconElement.css("width", l),
                  this._gameRulesIconElement.css("height", l),
                  this._gameRulesButtonClickElement.css("top", 0),
                  this._gameRulesButtonClickElement.css("left", 0),
                  this._gameRulesButtonClickElement.css("width", l),
                  this._gameRulesButtonClickElement.css("height", l),
                  this._historyButtonContainerElement.css("top", "455px"),
                  this._historyButtonContainerElement.css("left", "968px"),
                  this._historyButtonContainerElement.css("width", l),
                  this._historyButtonContainerElement.css("height", l),
                  this._historyButtonBackgroundElement.css("width", l),
                  this._historyButtonBackgroundElement.css("height", l),
                  this._historyButtonBackgroundElement.removeClass(
                    "circleButtonBackgroundPortrait"
                  ),
                  this._historyButtonBackgroundElement.addClass(
                    "circleButtonBackgroundLandscape"
                  ),
                  this._historyIconElement.css("width", l),
                  this._historyIconElement.css("height", l),
                  this._historyButtonClickElement.css("top", 0),
                  this._historyButtonClickElement.css("left", 0),
                  this._historyButtonClickElement.css("width", l),
                  this._historyButtonClickElement.css("height", l),
                  this._soundButtonContainerElement.css("top", "455px"),
                  this._soundButtonContainerElement.css("left", "1142px"),
                  this._soundButtonBackgroundElement.css("width", l),
                  this._soundButtonBackgroundElement.css("height", l),
                  this._soundButtonBackgroundElement.removeClass(
                    "circleButtonBackgroundPortrait"
                  ),
                  this._soundButtonBackgroundElement.addClass(
                    "circleButtonBackgroundLandscape"
                  ),
                  this._soundButtonContainerElement.css("width", l),
                  this._soundButtonContainerElement.css("height", l),
                  this._soundButtonOnElement.css("width", l),
                  this._soundButtonOnElement.css("height", l),
                  this._soundButtonOffElement.css("width", l),
                  this._soundButtonOffElement.css("height", l),
                  this._soundLoadContainerElement.css("left", "1142px"),
                  this._soundLoadContainerElement.css("top", "455px"),
                  this._soundLoadContainerElement.css("width", "100pxpx"),
                  this._soundLoadContainerElement.css("height", "100pxpx"),
                  this._soundLoadCircleElement.css("top", "-15px"),
                  this._soundLoadCircleElement.css("left", "-15px"),
                  this._soundLoadCircleElement.css("width", "130px"),
                  this._soundLoadCircleElement.css("height", "130px"),
                  this._soundLoadIconElement.css("width", l),
                  this._soundLoadIconElement.css("height", l),
                  this._soundLoadIconElement.css("left", "0px"),
                  this._soundLoadIconElement.css("top", "0px"),
                  this._soundButtonClickElement.css("left", 0),
                  this._soundButtonClickElement.css("top", 0),
                  this._soundButtonClickElement.css("width", l),
                  this._soundButtonClickElement.css("height", l),
                  this._paytableButtonContainerElement.css("top", "60px"),
                  this._paytableButtonContainerElement.css("left", "968px"),
                  this._paytableButtonContainerElement.css("width", l),
                  this._paytableButtonContainerElement.css("height", l),
                  this._paytableIconElement.css("width", l),
                  this._paytableIconElement.css("height", l),
                  this._paytableIconElement.css("top", "6px"),
                  this._paytableButtonBackgroundElement.css("width", l),
                  this._paytableButtonBackgroundElement.css("height", l),
                  this._paytableButtonBackgroundElement.removeClass(
                    "circleButtonBackgroundPortrait"
                  ),
                  this._paytableButtonBackgroundElement.addClass(
                    "circleButtonBackgroundLandscape"
                  ),
                  this._paytableButtonClickElement.css("left", 0),
                  this._paytableButtonClickElement.css("top", 0),
                  this._paytableButtonClickElement.css("width", l),
                  this._paytableButtonClickElement.css("height", l),
                  // this._ocEnabled &&
                  //   (this._ocButtonContainerElement.css("display", "block"),
                  //   this._ocButtonContainerElement.css("top", "874px"),
                  //   this._ocButtonContainerElement.css("left", "814x"),
                  //   this._ocButtonContainerElement.css("width", l),
                  //   this._ocButtonContainerElement.css("height", l),
                  //   this._ocIconElement.css("width", l),
                  //   this._ocIconElement.css("height", l),
                  //   this._ocButtonClickElement.css("top", 0),
                  //   this._ocButtonClickElement.css("left", 0),
                  //   this._ocButtonClickElement.css("width", l),
                  //   this._ocButtonClickElement.css("height", l)),
                  this._vibrateButtonContainerElement.css("top", "60px"),
                  this._vibrateButtonContainerElement.css("left", "814px"),
                  this._vibrateButtonBackgroundElement.css("width", l),
                  this._vibrateButtonBackgroundElement.css("height", l),
                  this._vibrateButtonBackgroundElement.removeClass(
                    "circleButtonBackgroundPortrait"
                  ),
                  this._vibrateButtonBackgroundElement.addClass(
                    "circleButtonBackgroundLandscape"
                  ),
                  this._vibrateButtonContainerElement.css("width", l),
                  this._vibrateButtonContainerElement.css("height", l),
                  this._vibrateButtonOnElement.css("width", l),
                  this._vibrateButtonOnElement.css("height", l),
                  this._vibrateButtonOffElement.css("width", l),
                  this._vibrateButtonOffElement.css("height", l),
                  this._vibrateButtonClickElement.css("left", 0),
                  this._vibrateButtonClickElement.css("top", 0),
                  this._vibrateButtonClickElement.css("width", l),
                  this._vibrateButtonClickElement.css("height", l));
          } else {
            if (null == e) return;
            var r = 1280 / e.width,
              c = e.width / 1280,
              h = e.height - 650 * c - o * c,
              u =
                (650 + this._guiSettingsHelper.portraitButtonOffset) * c +
                o * c +
                0.5 * h -
                50 * c;
            this._containerElement.css("left", "0"),
              this._containerElement.css("top", u * r + "px");
            var p = (720 * c) / h;
            if (p > 0.35) {
              p = 0.4 - (p - 1);
            } else p = 1;
            this._containerElement.css("width", "1280px"),
              this._containerElement.css(
                "-webkit-transform",
                "scale(" + p + ")"
              ),
              this._containerElement.css(
                "-webkit-transform-origin",
                "50% 0 0px"
              ),
              this._containerElement.css("-moz-transform", "scale(" + p + ")"),
              this._containerElement.css("-moz-transform-origin", "50% 0 0px"),
              this._containerElement.css("-ms-transform", "scale(" + p + ")"),
              this._containerElement.css("-ms-transform-origin", "50% 0 0px"),
              this._backgroundElement.css("display", "none"),
              a
                ? (this._openMenuButtonClickElement.css("left", "530px"),
                  this._openMenuButtonContainerElement.css("left", "580px"),
                  this._openMenuButtonContainerElement.css("top", "290px"),
                  this._guiSettingsHelper.useAlternativePopupMenuLayout
                    ? (this._openMenuButtonContainerElement.css(
                        "top",
                        290 +
                          this._guiSettingsHelper.customPopUpMenuButtonTopOffset
                            .portrait +
                          "px"
                      ),
                      this._openMenuButtonClickElement.css(
                        "top",
                        240 +
                          this._guiSettingsHelper.customPopUpMenuButtonTopOffset
                            .portrait +
                          "px"
                      ))
                    : (this._openMenuButtonContainerElement.css("top", "290px"),
                      this._openMenuButtonClickElement.css("top", "240px")))
                : (this._openMenuButtonClickElement.css("left", "530px"),
                  this._openMenuButtonContainerElement.css("left", "580px"),
                  this._openMenuButtonContainerElement.css("top", "345px"),
                  this._guiSettingsHelper.useAlternativePopupMenuLayout
                    ? (this._openMenuButtonContainerElement.css(
                        "top",
                        345 +
                          this._guiSettingsHelper.customPopUpMenuButtonTopOffset
                            .portrait +
                          "px"
                      ),
                      this._openMenuButtonClickElement.css(
                        "top",
                        300 +
                          this._guiSettingsHelper.customPopUpMenuButtonTopOffset
                            .portrait +
                          "px"
                      ))
                    : (this._openMenuButtonContainerElement.css("top", "345px"),
                      this._openMenuButtonClickElement.css("top", "300px"))),
              i
                ? this._openMenuButtonContainerElement.css("display", "none")
                : this._guiSettingsHelper.isButtonAllowed("popupmenu")
                ? this._openMenuButtonContainerElement.css("display", "block")
                : this._openMenuButtonContainerElement.css("display", "none"),
              this._openMenuButtonContainerElement.css("width", "120px"),
              this._openMenuButtonContainerElement.css("height", "120px"),
              this._openMenuButtonBackgroundElement.css("width", "120px"),
              this._openMenuButtonBackgroundElement.css("height", "120px"),
              this._openMenuButtonBackgroundElement.css("opacity", "1"),
              this._openMenuButtonBackgroundElement.removeClass(
                "circleButtonBackgroundLandscape"
              ),
              this._openMenuButtonBackgroundElement.addClass(
                "circleButtonBackgroundPortrait"
              ),
              this._openMenuButtonElement.css("width", "120px"),
              this._openMenuButtonElement.css("height", "120px"),
              this._openMenuButtonClickElement.css("width", "220px"),
              this._openMenuButtonClickElement.css("height", "220px"),
              this._backToLobbyButtonContainerElement.css("width", "170px"),
              this._backToLobbyButtonContainerElement.css("height", "170px"),
              this._backToLobbyButtonContainerElement.css("left", "82px"),
              this._backToLobbyButtonContainerElement.css("top", "-385px"),
              this._backToLobbyButtonElement.css("width", "170px"),
              this._backToLobbyButtonElement.css("height", "170px"),
              this._backToLobbyButtonBackgroundElement.css("width", "170px"),
              this._backToLobbyButtonBackgroundElement.css("height", "170px"),
              this._backToLobbyButtonBackgroundElement.removeClass(
                "circleButtonBackgroundLandscape"
              ),
              this._backToLobbyButtonBackgroundElement.addClass(
                "circleButtonBackgroundPortrait"
              ),
              this._backToLobbyButtonClickElement.css("top", 0),
              this._backToLobbyButtonClickElement.css("left", 0),
              this._backToLobbyButtonClickElement.css("width", "170px"),
              this._backToLobbyButtonClickElement.css("height", "170px"),
              this._gameRulesButtonContainerElement.css("width", "170px"),
              this._gameRulesButtonContainerElement.css("height", "170px"),
              this._gameRulesButtonContainerElement.css("left", "1028px"),
              this._gameRulesButtonContainerElement.css("top", "-385px"),
              this._gameRulesIconElement.css("width", "170px"),
              this._gameRulesIconElement.css("height", "170px"),
              this._gameRulesButtonBackgroundElement.css("width", "170px"),
              this._gameRulesButtonBackgroundElement.css("height", "170px"),
              this._gameRulesButtonBackgroundElement.removeClass(
                "circleButtonBackgroundLandscape"
              ),
              this._gameRulesButtonBackgroundElement.addClass(
                "circleButtonBackgroundPortrait"
              ),
              this._gameRulesButtonClickElement.css("top", 0),
              this._gameRulesButtonClickElement.css("left", 0),
              this._gameRulesButtonClickElement.css("width", "170px"),
              this._gameRulesButtonClickElement.css("height", "170px"),
              this._historyButtonContainerElement.css("width", "170px"),
              this._historyButtonContainerElement.css("height", "170px"),
              this._historyButtonContainerElement.css("left", "560px"),
              this._historyButtonContainerElement.css("top", "-385px"),
              this._historyIconElement.css("width", "170px"),
              this._historyIconElement.css("height", "170px"),
              this._historyButtonBackgroundElement.css("width", "170px"),
              this._historyButtonBackgroundElement.css("height", "170px"),
              this._historyButtonBackgroundElement.removeClass(
                "circleButtonBackgroundLandscape"
              ),
              this._historyButtonBackgroundElement.addClass(
                "circleButtonBackgroundPortrait"
              ),
              this._historyButtonClickElement.css("top", 0),
              this._historyButtonClickElement.css("left", 0),
              this._historyButtonClickElement.css("width", "170px"),
              this._historyButtonClickElement.css("height", "170px"),
              this._soundButtonContainerElement.css("width", "170px"),
              this._soundButtonContainerElement.css("height", "170px"),
              this._soundButtonContainerElement.css("left", "82px"),
              this._soundButtonContainerElement.css("top", "240px"),
              this._soundLoadContainerElement.css("left", "82px"),
              this._soundLoadContainerElement.css("top", "240px"),
              this._soundButtonBackgroundElement.css("width", "170px"),
              this._soundButtonBackgroundElement.css("height", "170px"),
              this._soundButtonBackgroundElement.removeClass(
                "circleButtonBackgroundLandscape"
              ),
              this._soundButtonBackgroundElement.addClass(
                "circleButtonBackgroundPortrait"
              ),
              this._soundButtonClickElement.css("width", "170px"),
              this._soundButtonClickElement.css("height", "170px"),
              this._soundButtonClickElement.css("left", 0),
              this._soundButtonClickElement.css("top", 0),
              this._soundButtonOffElement.css("width", "170px"),
              this._soundButtonOffElement.css("height", "170px"),
              this._soundButtonOnElement.css("width", "170px"),
              this._soundButtonOnElement.css("height", "170px"),
              this._soundLoadContainerElement.css("width", "170px"),
              this._soundLoadContainerElement.css("height", "170px"),
              this._soundLoadCircleElement.css("top", "-30px"),
              this._soundLoadCircleElement.css("left", "-30px"),
              this._soundLoadCircleElement.css("width", "230px"),
              this._soundLoadCircleElement.css("height", "230px"),
              this._soundLoadIconElement.css("top", "1px"),
              this._soundLoadIconElement.css("left", "2px"),
              this._soundLoadIconElement.css("width", "170px"),
              this._soundLoadIconElement.css("height", "170px"),
              this._paytableButtonContainerElement.css("left", "1028px"),
              this._paytableButtonContainerElement.css("top", "240px"),
              this._paytableButtonContainerElement.css("width", "170px"),
              this._paytableButtonContainerElement.css("height", "170px"),
              this._paytableIconElement.css("width", "170px"),
              this._paytableIconElement.css("height", "170px"),
              this._paytableIconElement.css("top", "6px"),
              this._paytableButtonBackgroundElement.css("width", "170px"),
              this._paytableButtonBackgroundElement.css("height", "170px"),
              this._paytableButtonBackgroundElement.removeClass(
                "circleButtonBackgroundLandscape"
              ),
              this._paytableButtonBackgroundElement.addClass(
                "circleButtonBackgroundPortrait"
              ),
              this._paytableButtonClickElement.css("left", 0),
              this._paytableButtonClickElement.css("top", 0),
              this._paytableButtonClickElement.css("width", "170px"),
              this._paytableButtonClickElement.css("height", "170px"),
              // this._ocEnabled &&
              //   (this._ocButtonContainerElement.css("display", "block"),
              //   this._ocButtonContainerElement.css("top", "-640px"),
              //   this._ocButtonContainerElement.css("left", "82px"),
              //   this._ocButtonContainerElement.css("width", "170px"),
              //   this._ocButtonContainerElement.css("height", "170px"),
              //   this._ocIconElement.css("width", "170px"),
              //   this._ocIconElement.css("height", "170px"),
              //   this._ocButtonClickElement.css("top", "0px"),
              //   this._ocButtonClickElement.css("left", "0px"),
              //   this._ocButtonClickElement.css("width", "170px"),
              //   this._ocButtonClickElement.css("height", "170px"),
              //   this._ocButtonBackgroundElement.removeClass(
              //     "circleButtonBackgroundLandscape"
              //   ),
              //   this._ocButtonBackgroundElement.addClass(
              //     "circleButtonBackgroundPortrait"
              //   )),
              this._vibrateButtonContainerElement.css("width", "170px"),
              this._vibrateButtonContainerElement.css("height", "170px"),
              this._vibrateButtonContainerElement.css("left", "325px"),
              this._vibrateButtonContainerElement.css("top", "240px"),
              this._vibrateButtonBackgroundElement.css("width", "170px"),
              this._vibrateButtonBackgroundElement.css("height", "170px"),
              this._vibrateButtonBackgroundElement.removeClass(
                "circleButtonBackgroundLandscape"
              ),
              this._vibrateButtonBackgroundElement.addClass(
                "circleButtonBackgroundPortrait"
              ),
              this._vibrateButtonClickElement.css("width", "170px"),
              this._vibrateButtonClickElement.css("height", "170px"),
              this._vibrateButtonClickElement.css("left", 0),
              this._vibrateButtonClickElement.css("top", 0),
              this._vibrateButtonOffElement.css("width", "170px"),
              this._vibrateButtonOffElement.css("height", "170px"),
              this._vibrateButtonOnElement.css("width", "170px"),
              this._vibrateButtonOnElement.css("height", "170px");
          }
        }),
        (e.prototype.buildContent = function (t, e) {
          (this._guiElementFactory = e),
            (this._containerElement = e.createDivElement(
              t,
              "popupMenuContainer"
            )),
            this._hasDesktopGui
              ? (this._backgroundElement = e.createImgElement(
                  this._containerElement,
                  "popupMenuBackground",
                  "images/gui/popupMenuLandscapeDesktopBackground.png"
                ))
              : (this._backgroundElement = e.createImgElement(
                  this._containerElement,
                  "popupMenuBackground",
                  "images/gui/popupMenuLandscapeBackground.png"
                )),
            this._backgroundElement.addClass("popupMenuBackground"),
            this._backgroundElement.css("width", "387px"),
            this._backgroundElement.css("height", "636px"),
            this._backgroundElement.css({
              "-webkit-transform": "translate3d(0,0,0)",
              "-webkit-backface-visibility": "hidden",
            }),
            (this._navigationButtonsContainerElement = e.createDivElement(
              this._containerElement,
              "navigationButtonsContainer"
            )),
            this.initButtonsContainer(this._navigationButtonsContainerElement);
          var n = e.createDivElement(
              this._containerElement,
              "openMenuButtonContainer"
            ),
            s = e.createDivElement(n, "openMenuButtonBackground");
          s.addClass("circleButtonBackground");
          var i = e.createDivElement(n, "openMenuButtonIcon");
          i.addClass("homeIcon"),
            s.addClass("buttonBackground"),
            (this._openMenuButtonClickElement = e.createDivElement(
              this._containerElement,
              "openMenuButtonClickElement"
            )),
            this.initOpenMenuButton(n, s, i, this._openMenuButtonClickElement);
          var o = e.createDivElement(
              this._navigationButtonsContainerElement,
              "backToLobbyButtonContainer"
            ),
            a = e.createDivElement(o, "backToLobbyButtonBackground");
          a.addClass("circleButtonBackground");
          var l = e.createDivElement(o, "backToLobbyButtonIcon");
          l.addClass("iconExit"),
            (this._backToLobbyButtonClickElement = e.createDivElement(
              o,
              "backToLobbyButtonClickElement"
            )),
            this.initBackToLobbyButton(
              o,
              a,
              l,
              this._backToLobbyButtonClickElement
            );
          var r = e.createDivElement(
              this._navigationButtonsContainerElement,
              "gameRulesButtonContainer"
            ),
            c = e.createDivElement(r, "gameRulesButtonBackground");
          c.addClass("circleButtonBackground");
          var h = e.createDivElement(r, "gameRulesButtonIcon");
          h.addClass("iconGameRules"),
            (this._gameRulesButtonClickElement = e.createDivElement(
              r,
              "gameRulesButtonClickElement"
            )),
            this.initGameRulesButton(
              r,
              c,
              h,
              this._gameRulesButtonClickElement
            );
          var u = e.createDivElement(
              this._navigationButtonsContainerElement,
              "soundButtonContainer"
            ),
            p = e.createDivElement(u, "soundButtonBackground");
          p.addClass("circleButtonBackground");
          var d = e.createDivElement(u, "soundButtonOnIcon");
          d.addClass("iconSoundOn");
          var m = e.createDivElement(u, "soundButtonOffIcon");
          m.addClass("iconSoundOff"),
            (this._soundButtonClickElement = e.createDivElement(
              u,
              "soundButtonClickElement"
            )),
            this.initSoundButton(u, p, d, m, this._soundButtonClickElement);
          var _ = e.createDivElement(
              this._containerElement,
              "soundLoaderContainer"
            ),
            g = e.createDivElement(_, "soundLoaderAnimation");
          g.addClass("loaderSpinner"), g.css("display", "block");
          var E = e.createDivElement(_, "soundIconLoading");
          E.addClass("iconSoundOn"), this.initSoundLoader(_, E, g);
          var b = e.createDivElement(
              this._navigationButtonsContainerElement,
              "paytableButtonContainer"
            ),
            B = e.createDivElement(b, "paytableButtonBackground");
          B.addClass("circleButtonBackground");
          var x = e.createDivElement(b, "paytableButtonIcon");
          x.addClass("iconPaytable"),
            B.addClass("circleButtonBackground"),
            (this._paytableButtonClickElement = e.createDivElement(
              b,
              "paytableButtonClickElement"
            )),
            this.initPaytableButton(b, B, x, this._paytableButtonClickElement);
          var C = e.createDivElement(
              this._navigationButtonsContainerElement,
              "vibrateButtonContainer"
            ),
            f = e.createDivElement(C, "vibrateButtonBackground");
          f.addClass("circleButtonBackground");
          var k = e.createDivElement(C, "vibrateButtonOnIcon");
          k.addClass("iconVibrateOn");
          var y = e.createDivElement(C, "vibrateButtonOffIcon");
          y.addClass("iconVibrateOff"),
            (this._vibrateButtonClickElement = e.createDivElement(
              C,
              "vibrateButtonClickElement"
            )),
            this.initVibrateButton(C, f, k, y, this._vibrateButtonClickElement);
          var S = e.createDivElement(
              this._navigationButtonsContainerElement,
              "historyButtonContainer"
            ),
            T = e.createDivElement(S, "historyButtonBackground");
          T.addClass("circleButtonBackground");
          var L = e.createDivElement(S, "historyButtonIcon");
          L.addClass("iconHistory"),
            (this._historyButtonClickElement = e.createDivElement(
              S,
              "historyButtonClickElement"
            )),
            this.initHistoryButton(S, T, L, this._historyButtonClickElement),
            this.hide();
        }),
        (e.prototype.setVibrateButtonChecked = function (t) {
          this._vibrateButton.selected = t;
        }),
        (e.prototype.preventPopupMenu = function (t) {
          this._isPreventedFromOpening = t;
        }),
        (e.prototype.updateVisibilityOfButtons = function () {
          var t = this,
            e = this._guiSettingsHelper;
          [
            {
              allowed: "sound",
              override: "soundButton",
              button: this._soundButton,
              show: function (e) {
                t._hasDesktopGui ? e.button.hide() : e.button.show();
              },
              hide: function (e) {
                t._soundButtonContainerElement.css("display", "none"),
                  e.button.hide();
              },
            },
            {
              allowed: "paytable",
              override: "payTableButton",
              button: this._paytableButton,
            },
            {
              allowed: "gamerules",
              override: "gameRulesButton",
              button: this._gameRulesButton,
            },
            {
              allowed: "vibrate",
              override: "vibrateButton",
              button: this._vibrateButton,
              show: function (e) {
                t._canShowVibrateButton ? e.button.show() : e.button.hide();
              },
            },
            {
              allowed: "history",
              override: "historyButton",
              button: this._historyButton,
              show: function (e) {
                t._canShowHistoryButton ? e.button.show() : e.button.hide();
              },
            },
            {
              allowed: "backtolobby",
              override: "backToLobbyButton",
              button: this._backToLobbyButton,
            },
            {
              allowed: "popupmenu",
              override: "popUpMenuButton",
              button: this._openMenuButton,
            },
          ].forEach(function (t) {
            var n = e.isButtonAllowed(t.allowed),
              s = e.getButtonAllowedOverrideState(t.override);
            t.button &&
              (n && s
                ? t.show
                  ? t.show(t)
                  : t.button.show()
                : t.hide
                ? t.hide(t)
                : t.button.hide());
          });
        }),
        e
      );
    })();
    t.PopupMenuManager = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function () {
      function t(t, e) {
        (this._handedness = !0),
          (this._containerElement = t),
          (this.Clicked = new Phaser.Signal()),
          (this.DisabledClicked = new Phaser.Signal()),
          (this._currentState = tk_common.slots.gui.GuiButtonIds.SPIN),
          (this._isShowing = !0),
          (this._isEnabled = !0),
          (this._isAnimatingClick = !1),
          (this._guiSettingsHelper = e),
          (window.spinButton = this);
      }
      return (
        (t.prototype.setClickElement = function (t) {
          runBTN = t;
          runBTN[0].parentElement.style.display = "none";
          var e = this;
          (this._clickElement = t),
            this._clickElement.css("cursor", "pointer"),
            t.bind("tap", function (t) {
              e.handleButtonClicked();
            });
        }),
        (t.prototype.setSingleSpinButton = function (t, e, n) {
          (this._singleSpinButtonContainerElement = t),
            (this._singleSpinIconElement = e),
            (this._singleSpinButtonBackgroundElement = n);
        }),
        (t.prototype.setMinRoundDurationProgressBar = function (t, e) {
          (this._singleSpinMinTimeProgressionWrapper = t),
            (this._singleSpinMinTimeProgressBar = e);
        }),
        (t.prototype.setQuickStopButton = function (t, e, n) {
          (this._quickStopButtonContainerElement = t),
            (this._quickStopButtonIconElement = e),
            (this._quickStopButtonBackgroundElement = n);
        }),
        (t.prototype.setSkipButton = function (t, e, n) {
          (this._skipButtonContainerElement = t),
            (this._skipButtonBackgroundElement = n),
            (this._skipButtonIconElement = e);
        }),
        (t.prototype.setAutospinButton = function (t, e, n, s, i, o, a, l) {
          (this._autoSpinButtonContainerElement = t),
            (this._autoSpinButtonContainerBackgroundElement = n),
            (this._autospinButtonPartContainer = e),
            (this._autoSpinButtonBackgroundElement = s),
            (this._autospinStartIconElement = i),
            (this._autospinStopIconElement = o),
            (this._autoSpinTitleLabelElement = a),
            this._autoSpinTitleLabelElement.css("pointer-events", "none"),
            (this._autoSpinCountLabelElement = l),
            this._autoSpinCountLabelElement.css("pointer-events", "none");
        }),
        (t.prototype.setFeatureSpinsButton = function (
          t,
          e,
          n,
          s,
          i,
          o,
          a,
          l,
          r,
          c
        ) {
          (this._featureSpinButtonContainerElement = t),
            (this._featureSpinButtonContainerBackgroundElement = n),
            (this._featureSpinButtonPartContainer = e),
            (this._featureSpinButtonBackgroundElement = s),
            (this._featureSpinStartIconElement = i),
            (this._featureSpinSkipIconElement = r),
            (this._featureSpinQuickStopIconElement = c),
            (this._featureSpinsTitleLabel = o),
            (this._featureRoundsCountLabel = a),
            (this._featureSpinButtonInwinityIconElement = l);
        }),
        (t.prototype.setFreeRoundsSpinsButton = function (t, e, n, s) {
          (this._freeRoundsSpinButtonContainerElement = t),
            (this._freeRoundsSpinButtonPartContainer = e),
            (this._freeRoundsSpinButtonBackgroundElement = n),
            (this._freeRoundsSpinStartIconElement = s);
        }),
        (t.prototype.setHandedness = function (t) {
          this._handedness = t;
        }),
        Object.defineProperty(t.prototype, "state", {
          get: function () {
            return (
              (this._isAnimatingClick && this._buttonStateAfterAnimation) ||
              this._currentState
            );
          },
          set: function (t) {
            if (this._isAnimatingClick) this._buttonStateAfterAnimation = t;
            else {
              var e = this._currentState;
              (this._currentState = t),
                this.layout(
                  this._orientation,
                  this._gameContainerArea,
                  this._gameArea,
                  this._hasDesktopGui,
                  this._isControlPanelOpen,
                  this._gameMarginTop,
                  e
                ),
                this._isShowing && this.show();
            }
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "autospinCount", {
          set: function (t) {
            this._autoSpinCountLabelElement.text(t.toString());
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "featureRoundsCount", {
          set: function (t) {
            var e = t.toString();
            t < 0
              ? (this._featureSpinButtonInwinityIconElement.css(
                  "display",
                  "block"
                ),
                (e = ""))
              : this._featureSpinButtonInwinityIconElement.css(
                  "display",
                  "none"
                ),
              this._featureRoundsCountLabel.text(e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.setCustomFeatureRoundsValue = function (t) {
          this._featureRoundsCountLabel.text(t);
        }),
        (t.prototype.click = function () {
          this.handleButtonClicked();
        }),
        (t.prototype.handleButtonClicked = function () {
          var e = this;
          if (this._isEnabled && !this._isAnimatingClick) {
            var n = tk_common.slots.gui.GuiButtonIds;
            this._currentState === n.SPIN &&
              this._singleSpinButtonContainerElement,
              this._currentState === n.SKIP && this._skipButtonContainerElement,
              this._currentState === n.QUICK_STOP &&
                this._quickStopButtonContainerElement,
              this._currentState === n.START_FEATURE &&
                this._featureSpinButtonPartContainer,
              this._currentState === n.START_FREE_ROUND &&
                this._freeRoundsSpinButtonPartContainer,
              this._currentState === n.START_AUTO_PLAY &&
                this._autospinButtonPartContainer,
              this._currentState === n.STOP_AUTO_PLAY &&
                this._autospinButtonPartContainer,
              this._currentState === n.SKIP_DURING_FEATURE &&
                this._featureSpinButtonPartContainer,
              this._currentState === n.QUICK_STOP_DURING_FEATURE &&
                this._featureSpinButtonPartContainer,
              (this._isAnimatingClick = !0),
              setTimeout(function () {
                return e.removeClickAnimation();
              }, t.removeClickAnimationAfterMs),
              this.Clicked.dispatch(this._currentState);
          } else this.DisabledClicked.dispatch(this._currentState);
        }),
        (t.prototype.removeClickAnimation = function () {
          this._autoSpinButtonContainerElement;
          var t = tk_common.slots.gui.GuiButtonIds;
          this._currentState === t.SPIN &&
            this._singleSpinButtonContainerElement,
            this._currentState === t.SKIP && this._skipButtonContainerElement,
            this._currentState === t.START_FREE_ROUND &&
              this._freeRoundsSpinButtonPartContainer,
            this._currentState === t.START_AUTO_PLAY &&
              this._autospinButtonPartContainer,
            this._currentState === t.STOP_AUTO_PLAY &&
              this._autospinButtonPartContainer,
            this._currentState === t.QUICK_STOP &&
              this._quickStopButtonContainerElement,
            this._currentState === t.START_FEATURE &&
              this._featureSpinButtonPartContainer,
            this._currentState === t.SKIP_DURING_FEATURE &&
              this._featureSpinButtonPartContainer,
            (this._isAnimatingClick = !1),
            void 0 !== this._buttonStateAfterAnimation &&
              ((this.state = this._buttonStateAfterAnimation),
              (this._buttonStateAfterAnimation = void 0),
              this.enable(void 0));
        }),
        (t.prototype.enable = function (t) {
          (t = void 0 === t ? this._isEnabled : t),
            this._isEnabled !== t &&
              ((this._currentState !==
                tk_common.slots.gui.GuiButtonIds.QUICK_STOP &&
                this._currentState !==
                  tk_common.slots.gui.GuiButtonIds.QUICK_STOP_DURING_FEATURE) ||
                (t = t && this._guiSettingsHelper.isButtonAllowed("quickstop")),
              (this._buttonStateAfterAnimation !==
                tk_common.slots.gui.GuiButtonIds.QUICK_STOP &&
                this._buttonStateAfterAnimation !==
                  tk_common.slots.gui.GuiButtonIds.QUICK_STOP_DURING_FEATURE) ||
                (t = t && this._guiSettingsHelper.isButtonAllowed("quickstop")),
              (this._isEnabled = t),
              t
                ? (this._clickElement.css("cursor", "pointer"),
                  this._singleSpinIconElement.removeClass("fadedOut"),
                  this._autospinStartIconElement.removeClass("fadedOut"),
                  this._quickStopButtonIconElement.removeClass("fadedOut"),
                  this._autospinStopIconElement.removeClass("fadedOut"),
                  this._featureSpinStartIconElement.removeClass("fadedOut"),
                  this._featureSpinSkipIconElement.removeClass("fadedOut"),
                  this._featureSpinQuickStopIconElement.removeClass("fadedOut"),
                  this._freeRoundsSpinStartIconElement.removeClass("fadedOut"),
                  this._skipButtonIconElement.removeClass("fadedOut"))
                : (this._clickElement.css("cursor", "default"),
                  this._singleSpinIconElement.addClass("fadedOut"),
                  this._autospinStartIconElement.addClass("fadedOut"),
                  this._quickStopButtonIconElement.addClass("fadedOut"),
                  this._autospinStopIconElement.addClass("fadedOut"),
                  this._featureSpinStartIconElement.addClass("fadedOut"),
                  this._featureSpinSkipIconElement.addClass("fadedOut"),
                  this._featureSpinQuickStopIconElement.addClass("fadedOut"),
                  this._freeRoundsSpinStartIconElement.addClass("fadedOut"),
                  this._skipButtonIconElement.addClass("fadedOut")));
        }),
        (t.prototype.playSpinAnimation = function (t) {
          void 0 === t && (t = !0), this.enable(!t);
        }),
        (t.prototype.update = function () {}),
        (t.prototype.show = function () {
          if (
            this._lastRenderedState !== this._currentState &&
            (this.hide(), this._guiSettingsHelper.isButtonAllowed("spin"))
          ) {
            (this._isShowing = !0),
              this._clickElement.css("display", "block"),
              (this._lastRenderedState = this._currentState);
            var t = this._currentState;
            switch (
              (this._guiSettingsHelper.isButtonAllowed("quickstop") ||
                (t === tk_common.slots.gui.GuiButtonIds.QUICK_STOP
                  ? (t = tk_common.slots.gui.GuiButtonIds.SPIN)
                  : t ===
                      tk_common.slots.gui.GuiButtonIds
                        .QUICK_STOP_DURING_FEATURE &&
                    (t = tk_common.slots.gui.GuiButtonIds.START_FEATURE)),
              this._singleSpinMinTimeProgressionWrapper.css("display", "block"),
              t)
            ) {
              case tk_common.slots.gui.GuiButtonIds.SPIN:
                (this._currentSpinIconElement = this._singleSpinIconElement),
                  this._singleSpinButtonContainerElement.css(
                    "display",
                    "block"
                  );
                break;
              case tk_common.slots.gui.GuiButtonIds.QUICK_STOP:
                this._quickStopButtonContainerElement.css("display", "block");
                break;
              case tk_common.slots.gui.GuiButtonIds.START_AUTO_PLAY:
                (this._currentSpinIconElement = this._autospinStartIconElement),
                  this._autoSpinButtonContainerElement.css("display", "block"),
                  this._autospinStartIconElement.css("display", "block"),
                  this._autospinStopIconElement.css("display", "none"),
                  this._hasDesktopGui
                    ? this._autoSpinTitleLabelElement.css("display", "block")
                    : this._autoSpinTitleLabelElement.css("display", "none");
                break;
              case tk_common.slots.gui.GuiButtonIds.STOP_AUTO_PLAY:
                this._autoSpinButtonContainerElement.css("display", "block"),
                  this._autospinStartIconElement.css("display", "none"),
                  this._autospinStopIconElement.css("display", "block"),
                  this._hasDesktopGui
                    ? this._autoSpinTitleLabelElement.css("display", "block")
                    : this._autoSpinTitleLabelElement.css("display", "none");
                break;
              case tk_common.slots.gui.GuiButtonIds.START_FREE_ROUND:
                (this._currentSpinIconElement =
                  this._freeRoundsSpinStartIconElement),
                  this._freeRoundsSpinButtonContainerElement.css(
                    "display",
                    "block"
                  );
                break;
              case tk_common.slots.gui.GuiButtonIds.START_FEATURE:
                (this._currentSpinIconElement =
                  this._featureSpinStartIconElement),
                  this._featureSpinSkipIconElement.css("display", "none"),
                  this._featureSpinQuickStopIconElement.css("display", "none"),
                  this._featureSpinButtonContainerElement.css(
                    "display",
                    "block"
                  ),
                  this._hasDesktopGui
                    ? this._featureSpinsTitleLabel.css("display", "block")
                    : this._featureSpinsTitleLabel.css("display", "none"),
                  this._featureRoundsCountLabel.css("display", "block"),
                  this._featureSpinStartIconElement.css("display", "block");
                break;
              case tk_common.slots.gui.GuiButtonIds.SKIP:
                this._skipButtonContainerElement.css("display", "block");
                break;
              case tk_common.slots.gui.GuiButtonIds.SKIP_DURING_FEATURE:
                (this._currentSpinIconElement =
                  this._featureSpinSkipIconElement),
                  this._featureSpinStartIconElement.css("display", "none"),
                  this._featureSpinQuickStopIconElement.css("display", "none"),
                  this._featureSpinButtonContainerElement.css(
                    "display",
                    "block"
                  ),
                  this._hasDesktopGui
                    ? this._featureSpinsTitleLabel.css("display", "block")
                    : this._featureSpinsTitleLabel.css("display", "none"),
                  this._featureRoundsCountLabel.css("display", "block"),
                  this._featureSpinSkipIconElement.css("display", "block");
                break;
              case tk_common.slots.gui.GuiButtonIds.QUICK_STOP_DURING_FEATURE:
                (this._currentSpinIconElement =
                  this._featureSpinQuickStopIconElement),
                  this._featureSpinStartIconElement.css("display", "none"),
                  this._featureSpinSkipIconElement.css("display", "none"),
                  this._featureSpinButtonContainerElement.css(
                    "display",
                    "block"
                  ),
                  this._hasDesktopGui
                    ? this._featureSpinsTitleLabel.css("display", "block")
                    : this._featureSpinsTitleLabel.css("display", "none"),
                  this._featureRoundsCountLabel.css("display", "block"),
                  this._featureSpinQuickStopIconElement.css("display", "block");
            }
          }
        }),
        (t.prototype.hide = function () {
          (this._lastRenderedState = null),
            !1 !== this._isShowing &&
              ((this._isShowing = !1),
              this._autoSpinButtonContainerElement.css("display", "none"),
              this._freeRoundsSpinButtonContainerElement.css("display", "none"),
              this._featureSpinButtonContainerElement.css("display", "none"),
              this._skipButtonContainerElement.css("display", "none"),
              this._quickStopButtonContainerElement.css("display", "none"),
              this._singleSpinButtonContainerElement.css("display", "none"),
              this._clickElement.css("display", "none"),
              this._singleSpinMinTimeProgressionWrapper.css("display", "none"));
        }),
        (t.prototype.layoutForDesktop = function (t, e, n, s, i, o, a) {
          var l = tk_common.slots.gui.GuiButtonIds,
            r = this._currentState;
          switch (
            ((r === l.SPIN || a) &&
              (this._singleSpinButtonContainerElement.css(
                "will-change",
                "transform"
              ),
              //commentis
              this._singleSpinButtonContainerElement.css("left", "1160px"),
              this._singleSpinButtonContainerElement.css("width", "100px"),
              this._singleSpinButtonContainerElement.css("height", "100px"),
              this._singleSpinButtonContainerElement.css("top", "580px"),
              this._singleSpinButtonBackgroundElement.css("width", "100px"),
              this._singleSpinButtonBackgroundElement.css("height", "100px"),
              this._singleSpinButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortrait"
              ),
              this._singleSpinButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscapeDesktop"
              ),
              this._singleSpinButtonBackgroundElement.css("cursor", "pointer"),
              this._singleSpinIconElement.css("width", "100px"),
              this._singleSpinIconElement.css("height", "100px"),
              this._singleSpinIconElement.css("cursor", "pointer")),
            this._singleSpinMinTimeProgressionWrapper.css(
              "position",
              "absolute"
            ),
            this._singleSpinMinTimeProgressionWrapper.css("left", "1160px"),
            this._singleSpinMinTimeProgressionWrapper.css("top", "580px"),
            this._singleSpinMinTimeProgressionWrapper.css("width", "100px"),
            this._singleSpinMinTimeProgressionWrapper.css("height", "100px"),
            this._singleSpinMinTimeProgressBar.css({
              "stroke-dasharray":
                "calc(var(--minSpinDurationProgression) * 315px) calc(315px - (var(--minSpinDurationProgression) * 315px))",
            }),
            this._singleSpinMinTimeProgressBar.css("stroke-width", "2px"),
            (r === l.QUICK_STOP || a) &&
              (this._quickStopButtonContainerElement.css(
                "will-change",
                "transform"
              ),
              this._quickStopButtonContainerElement.css("left", "1160px"),
              this._quickStopButtonContainerElement.css("width", "100px"),
              this._quickStopButtonContainerElement.css("height", "100px"),
              this._quickStopButtonContainerElement.css("top", "580px"),
              this._quickStopButtonBackgroundElement.css("width", "100px"),
              this._quickStopButtonBackgroundElement.css("height", "100px"),
              this._quickStopButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortrait"
              ),
              this._quickStopButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscapeDesktop"
              ),
              this._quickStopButtonIconElement.css("width", "100px"),
              this._quickStopButtonIconElement.css("height", "100px")),
            (r === l.SKIP || r === l.SKIP_DURING_FEATURE || a) &&
              (this._skipButtonContainerElement.css("will-change", "transform"),
              this._skipButtonContainerElement.css("left", "1160px"),
              this._skipButtonContainerElement.css("width", "100px"),
              this._skipButtonContainerElement.css("height", "100px"),
              this._skipButtonContainerElement.css("top", "580px"),
              this._skipButtonBackgroundElement.css("width", "100px"),
              this._skipButtonBackgroundElement.css("height", "100px"),
              this._skipButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortrait"
              ),
              this._skipButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscapeDesktop"
              ),
              this._skipButtonBackgroundElement.css("cursor", "pointer"),
              this._skipButtonIconElement.css("width", "100px"),
              this._skipButtonIconElement.css("height", "100px"),
              this._skipButtonIconElement.css("cursor", "pointer")),
            (r === l.START_FREE_ROUND || a) &&
              (this._freeRoundsSpinButtonContainerElement.css(
                "will-change",
                "transform"
              ),
              this._freeRoundsSpinButtonContainerElement.css("left", "1160px"),
              this._freeRoundsSpinButtonContainerElement.css("width", "100px"),
              this._freeRoundsSpinButtonContainerElement.css("height", "100px"),
              this._freeRoundsSpinButtonContainerElement.css("top", "580px"),
              this._freeRoundsSpinButtonBackgroundElement.css("width", "100px"),
              this._freeRoundsSpinButtonBackgroundElement.css(
                "height",
                "100px"
              ),
              this._freeRoundsSpinButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortrait"
              ),
              this._freeRoundsSpinButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscapeDesktop"
              ),
              this._freeRoundsSpinButtonBackgroundElement.css(
                "cursor",
                "pointer"
              ),
              this._freeRoundsSpinStartIconElement.css("width", "100px"),
              this._freeRoundsSpinStartIconElement.css("height", "100px"),
              this._freeRoundsSpinStartIconElement.css("cursor", "pointer")),
            (r === l.START_FEATURE ||
              r === l.QUICK_STOP_DURING_FEATURE ||
              r === l.SKIP_DURING_FEATURE ||
              a) &&
              (this._featureSpinButtonContainerElement.css(
                "will-change",
                "transform"
              ),
              this._featureSpinButtonContainerElement.css("left", "1110px"),
              this._featureSpinButtonContainerElement.css("width", "130px"),
              this._featureSpinButtonContainerElement.css("height", "130px"),
              this._featureSpinButtonContainerElement.css("top", "510px"),
              this._featureSpinsTitleLabel.css("left", "22px"),
              this._featureSpinsTitleLabel.css("width", "155px"),
              this._featureSpinsTitleLabel.css("top", "5px"),
              this._featureSpinsTitleLabel.css("opacity", ".5"),
              this._featureSpinButtonContainerBackgroundElement.css(
                "will-change",
                "transform"
              ),
              this._featureSpinButtonContainerBackgroundElement.css(
                "left",
                "10px"
              ),
              this._featureSpinButtonContainerBackgroundElement.css(
                "width",
                "160px"
              ),
              this._featureSpinButtonContainerBackgroundElement.css(
                "height",
                "143px"
              ),
              this._featureSpinButtonContainerBackgroundElement.css(
                "top",
                "-5px"
              ),
              i
                ? (this._featureSpinButtonContainerBackgroundElement.css(
                    "pointer-events",
                    "none"
                  ),
                  this._featureSpinButtonContainerBackgroundElement.css(
                    "pointer-events",
                    "none"
                  ),
                  this._featureSpinButtonContainerBackgroundElement.css(
                    "display",
                    "none"
                  ))
                : (this._featureSpinButtonContainerBackgroundElement.css(
                    "pointer-events",
                    "all"
                  ),
                  this._featureSpinButtonContainerBackgroundElement.css(
                    "pointer-events",
                    "all"
                  ),
                  this._featureSpinButtonContainerBackgroundElement.css(
                    "display",
                    "block"
                  )),
              this._featureSpinButtonPartContainer.css("left", "50px"),
              this._featureSpinButtonPartContainer.css("top", "70px"),
              this._featureSpinButtonPartContainer.css("width", "100px"),
              this._featureSpinButtonPartContainer.css("height", "100px"),
              this._featureSpinButtonBackgroundElement.css("cursor", "pointer"),
              this._featureSpinButtonBackgroundElement.css("width", "100px"),
              this._featureSpinButtonBackgroundElement.css("height", "100px"),
              this._featureSpinButtonBackgroundElement.css("top", "0"),
              this._featureSpinButtonBackgroundElement.css("left", "0"),
              this._featureSpinButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscapeDesktop"
              ),
              this._featureSpinStartIconElement.css("left", "0"),
              this._featureSpinStartIconElement.css("top", "0"),
              this._featureSpinStartIconElement.css("width", "100px"),
              this._featureSpinStartIconElement.css("height", "100px")),
            (r === l.START_FREE_ROUND || a) &&
              (this._featureRoundsCountLabel.css("left", "22px"),
              this._featureRoundsCountLabel.css("width", "155px"),
              this._featureRoundsCountLabel.css("top", "15px"),
              this._featureRoundsCountLabel.css("fontSize", "45px")),
            (r === l.SKIP_DURING_FEATURE || a) &&
              (this._featureSpinSkipIconElement.css("left", "0"),
              this._featureSpinSkipIconElement.css("top", "0"),
              this._featureSpinSkipIconElement.css("width", "100px"),
              this._featureSpinSkipIconElement.css("height", "100px")),
            (r === l.QUICK_STOP_DURING_FEATURE || a) &&
              (this._featureSpinQuickStopIconElement.css("left", "0"),
              this._featureSpinQuickStopIconElement.css("top", "0"),
              this._featureSpinQuickStopIconElement.css("width", "100px"),
              this._featureSpinQuickStopIconElement.css("height", "100px")),
            (r === l.START_FEATURE ||
              r === l.QUICK_STOP_DURING_FEATURE ||
              r === l.SKIP_DURING_FEATURE ||
              a) &&
              (this._featureSpinButtonInwinityIconElement.css("left", "62px"),
              this._featureSpinButtonInwinityIconElement.css("top", "10px"),
              this._featureSpinButtonInwinityIconElement.css("width", "75px"),
              this._featureSpinButtonInwinityIconElement.css("height", "75px")),
            (r === l.START_AUTO_PLAY || r === l.STOP_AUTO_PLAY || a) &&
              (this._autoSpinTitleLabelElement.css("left", "22px"),
              this._autoSpinTitleLabelElement.css("width", "155px"),
              this._autoSpinTitleLabelElement.css("top", "5px"),
              this._autoSpinTitleLabelElement.css("opacity", ".5"),
              this._autoSpinCountLabelElement.css("left", "22px"),
              this._autoSpinCountLabelElement.css("width", "155px"),
              this._autoSpinCountLabelElement.css("top", "15px"),
              this._autoSpinCountLabelElement.css("fontSize", "45px"),
              this._autoSpinButtonContainerElement.css(
                "will-change",
                "transform"
              ),
              this._autoSpinButtonContainerElement.css("left", "1110px"),
              this._autoSpinButtonContainerElement.css("width", "130px"),
              this._autoSpinButtonContainerElement.css("height", "130px"),
              this._autoSpinButtonContainerElement.css("top", "510px"),
              this._autoSpinButtonContainerBackgroundElement.css(
                "left",
                "10px"
              ),
              this._autoSpinButtonContainerBackgroundElement.css("top", "-5px"),
              this._autoSpinButtonContainerBackgroundElement.css(
                "width",
                "160px"
              ),
              this._autoSpinButtonContainerBackgroundElement.css(
                "height",
                "143px"
              ),
              i
                ? (this._autoSpinButtonContainerElement.css(
                    "pointer-events",
                    "none"
                  ),
                  this._autoSpinButtonContainerBackgroundElement.css(
                    "pointer-events",
                    "none"
                  ),
                  this._autoSpinButtonContainerBackgroundElement.css(
                    "display",
                    "none"
                  ))
                : (this._autoSpinButtonContainerElement.css(
                    "pointer-events",
                    "all"
                  ),
                  this._autoSpinButtonContainerBackgroundElement.css(
                    "pointer-events",
                    "all"
                  ),
                  this._autoSpinButtonContainerBackgroundElement.css(
                    "display",
                    "block"
                  )),
              this._autospinButtonPartContainer.css("left", "50px"),
              this._autospinButtonPartContainer.css("top", "70px"),
              this._autospinButtonPartContainer.css("width", "100px"),
              this._autospinButtonPartContainer.css("height", "100px"),
              this._autoSpinButtonBackgroundElement.css("cursor", "pointer"),
              this._autoSpinButtonBackgroundElement.css("width", "100px"),
              this._autoSpinButtonBackgroundElement.css("height", "100px"),
              this._autoSpinButtonBackgroundElement.css("top", "0px"),
              this._autoSpinButtonBackgroundElement.css("left", "0px"),
              this._autoSpinButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscapeDesktop"
              ),
              this._autospinStartIconElement.css("left", "0px"),
              this._autospinStartIconElement.css("top", "0px"),
              this._autospinStartIconElement.css("width", "100px"),
              this._autospinStartIconElement.css("height", "100px"),
              this._autospinStopIconElement.css("left", "0px"),
              this._autospinStopIconElement.css("top", "0px"),
              this._autospinStopIconElement.css("width", "100px"),
              this._autospinStopIconElement.css("height", "100px")),
            r)
          ) {
            case l.SPIN:
            case l.QUICK_STOP:
              this._clickElement.css("width", "100px"),
                this._clickElement.css("height", "100px"),
                this._clickElement.css("left", "1160px"),
                this._clickElement.css("top", "575px");
              break;
            case l.START_AUTO_PLAY:
            case l.STOP_AUTO_PLAY:
              this._clickElement.css("left", "1160px"),
                this._clickElement.css("width", "100px"),
                this._clickElement.css("height", "100px"),
                this._hasDesktopGui
                  ? this._clickElement.css("top", "575px")
                  : this._clickElement.css("top", "180px");
              break;
            case l.START_FREE_ROUND:
              this._clickElement.css("width", "100px"),
                this._clickElement.css("height", "100px"),
                this._clickElement.css("left", "1180px"),
                this._clickElement.css("top", "580px");
              break;
            case l.START_FEATURE:
              this._clickElement.css("left", "1160px"),
                this._clickElement.css("width", "100px"),
                this._clickElement.css("height", "100px"),
                this._hasDesktopGui
                  ? this._clickElement.css("top", "575px")
                  : this._clickElement.css("top", "180px");
              break;
            case l.SKIP:
              this._clickElement.css("width", "100px"),
                this._clickElement.css("height", "100px"),
                this._clickElement.css("left", "1160px"),
                this._clickElement.css("top", "575px");
              break;
            case l.SKIP_DURING_FEATURE:
              this._clickElement.css("width", "100px"),
                this._clickElement.css("height", "100px"),
                this._clickElement.css("left", "1180px"),
                this._clickElement.css("top", "580px");
          }
        }),
        (t.prototype.layoutForMobile = function (t, e, n, s, i, o, a) {
          i && this.hide();
          var l = this._currentState;
          this._autoSpinButtonContainerBackgroundElement.css("display", "none"),
            t === tk_common.constants.OrientationEnum.LANDSCAPE
              ? (this._singleSpinMinTimeProgressBar.css("stroke-width", "4px"),
                1 == this._handedness
                  ? this.layoutElementsForMobileLandscapeRightHanded(l, a)
                  : this.layoutElementsForMobileLandscapeLeftHanded(l, a))
              : this.layoutElementsForMobilePortrait(l, a);
        }),
        (t.prototype.layoutElementsForMobilePortrait = function (t, e) {
          this._singleSpinMinTimeProgressBar.css("stroke-width", "8px");
          var n = tk_common.slots.gui.GuiButtonIds;
          switch (
            ((t === n.SPIN || e) &&
              (this._singleSpinButtonContainerElement.css("width", "381px"),
              this._singleSpinButtonContainerElement.css("height", "381px"),
              this._singleSpinButtonContainerElement.css("left", "450px"),
              this._singleSpinButtonContainerElement.css("top", "-185px"),
              this._singleSpinButtonBackgroundElement.css("width", "381px"),
              this._singleSpinButtonBackgroundElement.css("height", "381px"),
              this._singleSpinButtonBackgroundElement.removeClass(
                "circleButtonBackgroundLandscape"
              ),
              this._singleSpinButtonBackgroundElement.addClass(
                "circleButtonBackgroundPortrait"
              ),
              this._singleSpinIconElement.css("width", "381px"),
              this._singleSpinIconElement.css("height", "381px")),
            this._singleSpinMinTimeProgressionWrapper.css(
              "position",
              "absolute"
            ),
            this._singleSpinMinTimeProgressionWrapper.css("left", "450px"),
            this._singleSpinMinTimeProgressionWrapper.css("top", "-185px"),
            this._singleSpinMinTimeProgressionWrapper.css("width", "381px"),
            this._singleSpinMinTimeProgressionWrapper.css("height", "381px"),
            this._singleSpinMinTimeProgressBar.css({
              "stroke-dasharray":
                "calc(var(--minSpinDurationProgression) * 1197px) calc(1197px - (var(--minSpinDurationProgression) * 1197px))",
            }),
            (t === n.QUICK_STOP || e) &&
              (this._quickStopButtonContainerElement.css("width", "381px"),
              this._quickStopButtonContainerElement.css("height", "381px"),
              this._quickStopButtonContainerElement.css("left", "450px"),
              this._quickStopButtonContainerElement.css("top", "-185px"),
              this._quickStopButtonBackgroundElement.css("width", "381px"),
              this._quickStopButtonBackgroundElement.css("height", "381px"),
              this._quickStopButtonBackgroundElement.removeClass(
                "circleButtonBackgroundLandscape"
              ),
              this._quickStopButtonBackgroundElement.addClass(
                "circleButtonBackgroundPortrait"
              ),
              this._quickStopButtonIconElement.css("width", "381px"),
              this._quickStopButtonIconElement.css("height", "381px")),
            (t === n.SKIP || e) &&
              (this._skipButtonContainerElement.css("width", "381px"),
              this._skipButtonContainerElement.css("height", "381px"),
              this._skipButtonContainerElement.css("left", "450px"),
              this._skipButtonContainerElement.css("top", "-185px"),
              this._skipButtonBackgroundElement.css("width", "381px"),
              this._skipButtonBackgroundElement.css("height", "381px"),
              this._skipButtonBackgroundElement.removeClass(
                "circleButtonBackgroundLandscape"
              ),
              this._skipButtonBackgroundElement.addClass(
                "circleButtonBackgroundPortrait"
              ),
              this._skipButtonIconElement.css("width", "381px"),
              this._skipButtonIconElement.css("height", "381px")),
            (t === n.START_FEATURE ||
              t === n.SKIP_DURING_FEATURE ||
              t === n.QUICK_STOP_DURING_FEATURE ||
              e) &&
              (this._featureRoundsCountLabel.css("left", "-65px"),
              this._featureRoundsCountLabel.css("width", "450px"),
              this._featureRoundsCountLabel.css("text-align", "center"),
              this._featureRoundsCountLabel.css("top", "-50px"),
              this._featureRoundsCountLabel.css("fontSize", "110px"),
              this._featureSpinButtonContainerElement.css("top", "0px"),
              this._featureSpinButtonContainerElement.css("left", "475px"),
              this._featureSpinButtonContainerElement.css("width", "410px"),
              this._featureSpinButtonContainerElement.css("height", "200px"),
              this._featureSpinButtonPartContainer.css("top", "-150px"),
              this._featureSpinButtonPartContainer.css("width", "330px"),
              this._featureSpinButtonBackgroundElement.css("top", "-45px"),
              this._featureSpinButtonBackgroundElement.css("left", "0"),
              this._featureSpinButtonBackgroundElement.css("width", "330px"),
              this._featureSpinButtonBackgroundElement.css("height", "450px"),
              this._featureSpinButtonBackgroundElement.css(
                "-webkit-border-radius",
                "15px"
              ),
              this._featureSpinButtonBackgroundElement.css(
                "border-radius",
                "15px"
              ),
              this._featureSpinButtonBackgroundElement.removeClass(
                "circleButtonBackgroundLandscape"
              ),
              this._featureSpinButtonBackgroundElement.addClass(
                "circleButtonBackgroundPortrait"
              ),
              this._featureSpinStartIconElement.css("top", "65px"),
              this._featureSpinStartIconElement.css("left", "5px"),
              this._featureSpinStartIconElement.css("width", "310px"),
              this._featureSpinStartIconElement.css("height", "310px"),
              this._featureSpinSkipIconElement.css("top", "65px"),
              this._featureSpinSkipIconElement.css("left", "5px"),
              this._featureSpinSkipIconElement.css("width", "310px"),
              this._featureSpinSkipIconElement.css("height", "310px"),
              this._featureSpinQuickStopIconElement.css("top", "65px"),
              this._featureSpinQuickStopIconElement.css("left", "5px"),
              this._featureSpinQuickStopIconElement.css("width", "310px"),
              this._featureSpinQuickStopIconElement.css("height", "310px"),
              this._featureSpinButtonInwinityIconElement.css("left", "45px"),
              this._featureSpinButtonInwinityIconElement.css("top", "-175px"),
              this._featureSpinButtonInwinityIconElement.css("width", "232px"),
              this._featureSpinButtonInwinityIconElement.css(
                "height",
                "232px"
              )),
            (t === n.START_AUTO_PLAY || t === n.STOP_AUTO_PLAY || e) &&
              (this._autoSpinCountLabelElement.css("left", "-65px"),
              this._autoSpinCountLabelElement.css("width", "450px"),
              this._autoSpinCountLabelElement.css("text-align", "center"),
              this._autoSpinCountLabelElement.css("top", "-50px"),
              this._autoSpinCountLabelElement.css("fontSize", "110px"),
              this._autoSpinButtonContainerElement.css("top", "0px"),
              this._autoSpinButtonContainerElement.css("left", "475px"),
              this._autoSpinButtonContainerElement.css("width", "410px"),
              this._autoSpinButtonContainerElement.css("height", "200px"),
              this._autospinButtonPartContainer.css("top", "-150px"),
              this._autospinButtonPartContainer.css("width", "330px"),
              this._autospinButtonPartContainer.css("height", "360px"),
              this._autoSpinButtonBackgroundElement.css("top", "-45px"),
              this._autoSpinButtonBackgroundElement.css("left", "0"),
              this._autoSpinButtonBackgroundElement.css("width", "330px"),
              this._autoSpinButtonBackgroundElement.css("height", "450px"),
              this._autoSpinButtonBackgroundElement.css(
                "-webkit-border-radius",
                "15px"
              ),
              this._autoSpinButtonBackgroundElement.css(
                "border-radius",
                "15px"
              ),
              this._autoSpinButtonBackgroundElement.removeClass(
                "circleButtonBackgroundLandscape"
              ),
              this._autoSpinButtonBackgroundElement.addClass(
                "circleButtonBackgroundPortrait"
              ),
              this._autospinStartIconElement.css("top", "65px"),
              this._autospinStartIconElement.css("left", "5px"),
              this._autospinStartIconElement.css("width", "310px"),
              this._autospinStartIconElement.css("height", "310px"),
              this._autospinStopIconElement.css("top", "65px"),
              this._autospinStopIconElement.css("left", "5px"),
              this._autospinStopIconElement.css("width", "310px"),
              this._autospinStopIconElement.css("height", "310px")),
            (t !== n.START_AUTO_PLAY && t !== n.STOP_AUTO_PLAY) ||
              (this._singleSpinMinTimeProgressionWrapper.css(
                "position",
                "absolute"
              ),
              this._singleSpinMinTimeProgressionWrapper.css("left", "495px"),
              this._singleSpinMinTimeProgressionWrapper.css("top", "-70px"),
              this._singleSpinMinTimeProgressionWrapper.css("width", "280px"),
              this._singleSpinMinTimeProgressionWrapper.css("height", "280px"),
              this._singleSpinMinTimeProgressBar.css({
                "stroke-dasharray":
                  "calc(var(--minSpinDurationProgression) * 879px) calc(879px - (var(--minSpinDurationProgression) * 879px))",
              })),
            (t === n.START_FREE_ROUND || e) &&
              (this._freeRoundsSpinButtonContainerElement.css("top", "-185px"),
              this._freeRoundsSpinButtonContainerElement.css("left", "450px"),
              this._freeRoundsSpinButtonContainerElement.css("width", "410px"),
              this._freeRoundsSpinButtonContainerElement.css("height", "200px"),
              this._freeRoundsSpinButtonBackgroundElement.css("width", "381px"),
              this._freeRoundsSpinButtonBackgroundElement.css(
                "height",
                "381px"
              ),
              this._freeRoundsSpinButtonBackgroundElement.removeClass(
                "circleButtonBackgroundLandscape"
              ),
              this._freeRoundsSpinButtonBackgroundElement.addClass(
                "circleButtonBackgroundPortrait"
              ),
              this._freeRoundsSpinStartIconElement.css("width", "381px"),
              this._freeRoundsSpinStartIconElement.css("height", "381px")),
            t)
          ) {
            case n.SPIN:
            case n.QUICK_STOP:
              this._clickElement.css("width", "410px"),
                this._clickElement.css("height", "410px"),
                this._clickElement.css("left", "435px"),
                this._clickElement.css("top", "-205px");
              break;
            case n.START_AUTO_PLAY:
            case n.STOP_AUTO_PLAY:
              this._clickElement.css("top", "-190px"),
                this._clickElement.css("left", "460px"),
                this._clickElement.css("width", "365px"),
                this._clickElement.css("height", "450px");
              break;
            case n.START_FREE_ROUND:
              this._clickElement.css("width", "410px"),
                this._clickElement.css("height", "410px"),
                this._clickElement.css("left", "435px"),
                this._clickElement.css("top", "-205px");
              break;
            case n.START_FEATURE:
              this._clickElement.css("top", "-190px"),
                this._clickElement.css("left", "460px"),
                this._clickElement.css("width", "365px"),
                this._clickElement.css("height", "450px");
              break;
            case n.SKIP:
              this._clickElement.css("width", "410px"),
                this._clickElement.css("height", "410px"),
                this._clickElement.css("left", "435px"),
                this._clickElement.css("top", "-205px");
              break;
            case n.SKIP_DURING_FEATURE:
            case n.QUICK_STOP_DURING_FEATURE:
              this._clickElement.css("top", "-190px"),
                this._clickElement.css("left", "460px"),
                this._clickElement.css("width", "365px"),
                this._clickElement.css("height", "450px");
          }
        }),
        (t.prototype.layoutElementsForMobileLandscapeRightHanded = function (
          t,
          e
        ) {
          var n = tk_common.slots.gui.GuiButtonIds;
          switch (
            ((t === n.SPIN || e) &&
              (this._singleSpinButtonContainerElement.css("left", "1127px"),
              this._singleSpinButtonContainerElement.css("width", "128px"),
              this._singleSpinButtonContainerElement.css("height", "128px"),
              this._singleSpinButtonContainerElement.css("top", "240px"),
              this._singleSpinButtonBackgroundElement.css("width", "128px"),
              this._singleSpinButtonBackgroundElement.css("height", "128px"),
              this._singleSpinButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortrait"
              ),
              this._singleSpinButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscape"
              ),
              this._singleSpinIconElement.css("width", "128px"),
              this._singleSpinIconElement.css("height", "128px")),
            this._singleSpinMinTimeProgressionWrapper.css(
              "position",
              "absolute"
            ),
            this._singleSpinMinTimeProgressionWrapper.css("left", "1127px"),
            this._singleSpinMinTimeProgressionWrapper.css("top", "240px"),
            this._singleSpinMinTimeProgressionWrapper.css("width", "128px"),
            this._singleSpinMinTimeProgressionWrapper.css("height", "128px"),
            this._singleSpinMinTimeProgressBar.css({
              "stroke-dasharray":
                "calc(var(--minSpinDurationProgression) * 402px) calc(402px - (var(--minSpinDurationProgression) * 402px))",
            }),
            (t === n.SKIP || t === n.SKIP_DURING_FEATURE || e) &&
              (this._skipButtonContainerElement.css("left", "1127px"),
              this._skipButtonContainerElement.css("width", "128px"),
              this._skipButtonContainerElement.css("height", "128px"),
              this._skipButtonContainerElement.css("top", "240px"),
              this._skipButtonBackgroundElement.css("width", "128px"),
              this._skipButtonBackgroundElement.css("height", "128px"),
              this._skipButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortrait"
              ),
              this._skipButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscape"
              ),
              this._skipButtonIconElement.css("width", "128px"),
              this._skipButtonIconElement.css("height", "128px")),
            (t === n.QUICK_STOP || t === n.QUICK_STOP_DURING_FEATURE || e) &&
              (this._quickStopButtonContainerElement.css("left", "1127px"),
              this._quickStopButtonContainerElement.css("width", "128px"),
              this._quickStopButtonContainerElement.css("height", "128px"),
              this._quickStopButtonContainerElement.css("top", "240px"),
              this._quickStopButtonBackgroundElement.css("width", "128px"),
              this._quickStopButtonBackgroundElement.css("height", "128px"),
              this._quickStopButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortrait"
              ),
              this._quickStopButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscape"
              ),
              this._quickStopButtonIconElement.css("width", "128px"),
              this._quickStopButtonIconElement.css("height", "128px")),
            (t === n.START_FEATURE ||
              t === n.SKIP_DURING_FEATURE ||
              t === n.QUICK_STOP_DURING_FEATURE ||
              e) &&
              (this._featureRoundsCountLabel.css("left", 0),
              this._featureRoundsCountLabel.css("width", "130px"),
              this._featureRoundsCountLabel.css("top", "-64px"),
              this._featureRoundsCountLabel.css("fontSize", "45px"),
              this._featureSpinButtonContainerElement.css("left", "1125px"),
              this._featureSpinButtonContainerElement.css("width", "130px"),
              this._featureSpinButtonContainerElement.css("height", "130px"),
              this._featureSpinButtonContainerElement.css("top", "252px"),
              this._featureSpinButtonBackgroundElement.css("width", "130px"),
              this._featureSpinButtonBackgroundElement.css("height", "255px"),
              this._featureSpinButtonBackgroundElement.css("top", "-72px"),
              this._featureSpinButtonBackgroundElement.css("left", 0),
              this._featureSpinButtonBackgroundElement.css(
                "-webkit-border-radius",
                "9px"
              ),
              this._featureSpinButtonBackgroundElement.css(
                "border-radius",
                "9px"
              ),
              this._featureSpinButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortrait"
              ),
              this._featureSpinButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscape"
              ),
              this._featureSpinButtonPartContainer.css("width", "130px"),
              this._featureSpinButtonPartContainer.css("height", "255px"),
              this._featureSpinButtonPartContainer.css("top", "0"),
              this._featureSpinStartIconElement.css("left", 0),
              this._featureSpinStartIconElement.css("top", "-10px"),
              this._featureSpinStartIconElement.css("width", "130px"),
              this._featureSpinStartIconElement.css("height", "130px"),
              this._featureSpinSkipIconElement.css("left", 0),
              this._featureSpinSkipIconElement.css("top", "-10px"),
              this._featureSpinSkipIconElement.css("width", "130px"),
              this._featureSpinSkipIconElement.css("height", "130px"),
              this._featureSpinQuickStopIconElement.css("left", 0),
              this._featureSpinQuickStopIconElement.css("top", "-10px"),
              this._featureSpinQuickStopIconElement.css("width", "130px"),
              this._featureSpinQuickStopIconElement.css("height", "130px"),
              this._featureSpinButtonInwinityIconElement.css("left", "17px"),
              this._featureSpinButtonInwinityIconElement.css("top", "-80px"),
              this._featureSpinButtonInwinityIconElement.css("width", "97.5px"),
              this._featureSpinButtonInwinityIconElement.css(
                "height",
                "97.5px"
              )),
            (t === n.START_AUTO_PLAY || t === n.STOP_AUTO_PLAY || e) &&
              (this._autoSpinCountLabelElement.css("left", 0),
              this._autoSpinCountLabelElement.css("width", "130px"),
              this._autoSpinCountLabelElement.css("top", "-64px"),
              this._autoSpinCountLabelElement.css("fontSize", "45px"),
              this._autoSpinButtonContainerElement.css("left", "1125px"),
              this._autoSpinButtonContainerElement.css("width", "130px"),
              this._autoSpinButtonContainerElement.css("height", "130px"),
              this._autoSpinButtonContainerElement.css("top", "252px"),
              this._autoSpinButtonBackgroundElement.css("width", "130px"),
              this._autoSpinButtonBackgroundElement.css("height", "255px"),
              this._autoSpinButtonBackgroundElement.css("top", "-72px"),
              this._autoSpinButtonBackgroundElement.css("left", 0),
              this._autoSpinButtonBackgroundElement.css(
                "-webkit-border-radius",
                "9px"
              ),
              this._autoSpinButtonBackgroundElement.css("border-radius", "9px"),
              this._autoSpinButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortrait"
              ),
              this._autoSpinButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscape"
              ),
              this._autospinButtonPartContainer.css("width", "130px"),
              this._autospinButtonPartContainer.css("height", "255px"),
              this._autospinButtonPartContainer.css("top", "0"),
              this._autospinStartIconElement.css("left", 0),
              this._autospinStartIconElement.css("top", "-10px"),
              this._autospinStartIconElement.css("width", "130px"),
              this._autospinStartIconElement.css("height", "130px"),
              this._autospinStopIconElement.css("left", 0),
              this._autospinStopIconElement.css("top", "-10px"),
              this._autospinStopIconElement.css("width", "130px"),
              this._autospinStopIconElement.css("height", "130px")),
            (t !== n.START_AUTO_PLAY && t !== n.STOP_AUTO_PLAY) ||
              (this._singleSpinMinTimeProgressionWrapper.css(
                "position",
                "absolute"
              ),
              this._singleSpinMinTimeProgressionWrapper.css("left", "1129px"),
              this._singleSpinMinTimeProgressionWrapper.css("top", "246px"),
              this._singleSpinMinTimeProgressionWrapper.css("width", "122px"),
              this._singleSpinMinTimeProgressionWrapper.css("height", "122px"),
              this._singleSpinMinTimeProgressBar.css({
                "stroke-dasharray":
                  "calc(var(--minSpinDurationProgression) * 384px) calc(402px - (var(--minSpinDurationProgression) * 384px))",
              })),
            (t === n.START_FREE_ROUND || e) &&
              (this._freeRoundsSpinButtonContainerElement.css("left", "1125px"),
              this._freeRoundsSpinButtonContainerElement.css("width", "130px"),
              this._freeRoundsSpinButtonContainerElement.css("height", "130px"),
              this._freeRoundsSpinButtonContainerElement.css("top", "240px"),
              this._freeRoundsSpinButtonBackgroundElement.css("width", "128px"),
              this._freeRoundsSpinButtonBackgroundElement.css(
                "height",
                "128px"
              ),
              this._freeRoundsSpinButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortrait"
              ),
              this._freeRoundsSpinButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscape"
              ),
              this._freeRoundsSpinStartIconElement.css("width", "128px"),
              this._freeRoundsSpinStartIconElement.css("height", "128px")),
            t)
          ) {
            case n.SPIN:
            case n.QUICK_STOP:
              this._clickElement.css("width", "140px"),
                this._clickElement.css("height", "140px"),
                this._clickElement.css("left", "1120px"),
                this._clickElement.css("top", "235px");
              break;
            case n.START_AUTO_PLAY:
            case n.STOP_AUTO_PLAY:
              this._clickElement.css("left", "1125px"),
                this._clickElement.css("width", "130px"),
                this._clickElement.css("height", "255px"),
                this._clickElement.css("top", "180px");
              break;
            case n.START_FREE_ROUND:
              this._clickElement.css("width", "130px"),
                this._clickElement.css("height", "255px"),
                this._clickElement.css("left", "1125px"),
                this._clickElement.css("top", "180px");
              break;
            case n.START_FEATURE:
              this._clickElement.css("left", "1125px"),
                this._clickElement.css("width", "130px"),
                this._clickElement.css("height", "255px"),
                this._clickElement.css("top", "180px");
              break;
            case n.SKIP:
              this._clickElement.css("width", "140px"),
                this._clickElement.css("height", "140px"),
                this._clickElement.css("left", "1120px"),
                this._clickElement.css("top", "235px");
              break;
            case n.SKIP_DURING_FEATURE:
            case n.QUICK_STOP_DURING_FEATURE:
              this._clickElement.css("width", "130px"),
                this._clickElement.css("height", "255px"),
                this._clickElement.css("left", "1125px"),
                this._clickElement.css("top", "180px");
          }
        }),
        (t.prototype.layoutElementsForMobileLandscapeLeftHanded = function (
          t,
          e
        ) {
          var n = tk_common.slots.gui.GuiButtonIds;
          switch (
            ((t === n.SPIN || e) &&
              (this._singleSpinButtonContainerElement.css("left", "25px"),
              this._singleSpinButtonContainerElement.css("width", "128px"),
              this._singleSpinButtonContainerElement.css("height", "128px"),
              this._singleSpinButtonContainerElement.css("top", "240px"),
              this._singleSpinButtonBackgroundElement.css("width", "128px"),
              this._singleSpinButtonBackgroundElement.css("height", "128px"),
              this._singleSpinButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortrait"
              ),
              this._singleSpinButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscape"
              ),
              this._singleSpinIconElement.css("width", "128px"),
              this._singleSpinIconElement.css("height", "128px")),
            this._singleSpinMinTimeProgressionWrapper.css(
              "position",
              "absolute"
            ),
            this._singleSpinMinTimeProgressionWrapper.css("left", "25px"),
            this._singleSpinMinTimeProgressionWrapper.css("top", "240px"),
            this._singleSpinMinTimeProgressionWrapper.css("width", "128px"),
            this._singleSpinMinTimeProgressionWrapper.css("height", "128px"),
            this._singleSpinMinTimeProgressBar.css({
              "stroke-dasharray":
                "calc(var(--minSpinDurationProgression) * 402px) calc(402px - (var(--minSpinDurationProgression) * 402px))",
            }),
            (t !== n.START_AUTO_PLAY && t !== n.STOP_AUTO_PLAY) ||
              (this._singleSpinMinTimeProgressionWrapper.css(
                "position",
                "absolute"
              ),
              this._singleSpinMinTimeProgressionWrapper.css("left", "25px"),
              this._singleSpinMinTimeProgressionWrapper.css("top", "242px"),
              this._singleSpinMinTimeProgressionWrapper.css("width", "128px"),
              this._singleSpinMinTimeProgressionWrapper.css("height", "128px"),
              this._singleSpinMinTimeProgressBar.css({
                "stroke-dasharray":
                  "calc(var(--minSpinDurationProgression) * 402px) calc(402px - (var(--minSpinDurationProgression) * 402px))",
              })),
            (t === n.SKIP || t === n.SKIP_DURING_FEATURE || e) &&
              (this._skipButtonContainerElement.css("left", "25px"),
              this._skipButtonContainerElement.css("width", "128px"),
              this._skipButtonContainerElement.css("height", "128px"),
              this._skipButtonContainerElement.css("top", "240px"),
              this._skipButtonBackgroundElement.css("width", "128px"),
              this._skipButtonBackgroundElement.css("height", "128px"),
              this._skipButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortrait"
              ),
              this._skipButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscape"
              ),
              this._skipButtonIconElement.css("width", "128px"),
              this._skipButtonIconElement.css("height", "128px")),
            (t === n.QUICK_STOP || t === n.QUICK_STOP_DURING_FEATURE || e) &&
              (this._quickStopButtonContainerElement.css("left", "25px"),
              this._quickStopButtonContainerElement.css("width", "128px"),
              this._quickStopButtonContainerElement.css("height", "128px"),
              this._quickStopButtonContainerElement.css("top", "240px"),
              this._quickStopButtonBackgroundElement.css("width", "128px"),
              this._quickStopButtonBackgroundElement.css("height", "128px"),
              this._quickStopButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortrait"
              ),
              this._quickStopButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscape"
              ),
              this._quickStopButtonIconElement.css("width", "128px"),
              this._quickStopButtonIconElement.css("height", "128px")),
            (t === n.START_FEATURE ||
              t === n.SKIP_DURING_FEATURE ||
              t === n.QUICK_STOP_DURING_FEATURE ||
              e) &&
              (this._featureRoundsCountLabel.css("left", 0),
              this._featureRoundsCountLabel.css("width", "130px"),
              this._featureRoundsCountLabel.css("top", "-64px"),
              this._featureRoundsCountLabel.css("fontSize", "45px"),
              this._featureSpinButtonContainerElement.css("left", "23px"),
              this._featureSpinButtonContainerElement.css("width", "130px"),
              this._featureSpinButtonContainerElement.css("height", "130px"),
              this._featureSpinButtonContainerElement.css("top", "252px"),
              this._featureSpinButtonBackgroundElement.css("width", "130px"),
              this._featureSpinButtonBackgroundElement.css("height", "255px"),
              this._featureSpinButtonBackgroundElement.css("top", "-72px"),
              this._featureSpinButtonBackgroundElement.css("left", 0),
              this._featureSpinButtonBackgroundElement.css(
                "-webkit-border-radius",
                "9px"
              ),
              this._featureSpinButtonBackgroundElement.css(
                "border-radius",
                "9px"
              ),
              this._featureSpinButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortrait"
              ),
              this._featureSpinButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscape"
              ),
              this._featureSpinButtonPartContainer.css("width", "130px"),
              this._featureSpinButtonPartContainer.css("height", "255px"),
              this._featureSpinButtonPartContainer.css("top", "0")),
            (t === n.START_FEATURE || e) &&
              (this._featureSpinStartIconElement.css("left", 0),
              this._featureSpinStartIconElement.css("top", "-10px"),
              this._featureSpinStartIconElement.css("width", "130px"),
              this._featureSpinStartIconElement.css("height", "130px")),
            (t === n.SKIP_DURING_FEATURE || e) &&
              (this._featureSpinSkipIconElement.css("left", 0),
              this._featureSpinSkipIconElement.css("top", "-10px"),
              this._featureSpinSkipIconElement.css("width", "130px"),
              this._featureSpinSkipIconElement.css("height", "130px")),
            (t === n.QUICK_STOP_DURING_FEATURE || e) &&
              (this._featureSpinQuickStopIconElement.css("left", 0),
              this._featureSpinQuickStopIconElement.css("top", "-10px"),
              this._featureSpinQuickStopIconElement.css("width", "130px"),
              this._featureSpinQuickStopIconElement.css("height", "130px")),
            (t === n.START_FEATURE ||
              t === n.QUICK_STOP_DURING_FEATURE ||
              t === n.SKIP_DURING_FEATURE ||
              e) &&
              (this._featureSpinButtonInwinityIconElement.css("left", "17px"),
              this._featureSpinButtonInwinityIconElement.css("top", "-80px"),
              this._featureSpinButtonInwinityIconElement.css("width", "97.5px"),
              this._featureSpinButtonInwinityIconElement.css(
                "height",
                "97.5px"
              )),
            (t === n.START_AUTO_PLAY || t === n.STOP_AUTO_PLAY || e) &&
              (this._autoSpinCountLabelElement.css("left", 0),
              this._autoSpinCountLabelElement.css("width", "130px"),
              this._autoSpinCountLabelElement.css("top", "-64px"),
              this._autoSpinCountLabelElement.css("fontSize", "45px"),
              this._autoSpinButtonContainerElement.css("left", "23px"),
              this._autoSpinButtonContainerElement.css("width", "130px"),
              this._autoSpinButtonContainerElement.css("height", "130px"),
              this._autoSpinButtonContainerElement.css("top", "252px"),
              this._autoSpinButtonBackgroundElement.css("width", "130px"),
              this._autoSpinButtonBackgroundElement.css("height", "255px"),
              this._autoSpinButtonBackgroundElement.css("top", "-72px"),
              this._autoSpinButtonBackgroundElement.css("left", 0),
              this._autoSpinButtonBackgroundElement.css(
                "-webkit-border-radius",
                "9px"
              ),
              this._autoSpinButtonBackgroundElement.css("border-radius", "9px"),
              this._autoSpinButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortrait"
              ),
              this._autoSpinButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscape"
              ),
              this._autospinButtonPartContainer.css("width", "130px"),
              this._autospinButtonPartContainer.css("height", "255px"),
              this._autospinButtonPartContainer.css("top", "0"),
              this._autospinStartIconElement.css("left", 0),
              this._autospinStartIconElement.css("top", "-10px"),
              this._autospinStartIconElement.css("width", "130px"),
              this._autospinStartIconElement.css("height", "130px"),
              this._autospinStopIconElement.css("left", 0),
              this._autospinStopIconElement.css("top", "-10px"),
              this._autospinStopIconElement.css("width", "130px"),
              this._autospinStopIconElement.css("height", "130px")),
            (t === n.START_FREE_ROUND || e) &&
              (this._freeRoundsSpinButtonContainerElement.css("left", "23px"),
              this._freeRoundsSpinButtonContainerElement.css("width", "130px"),
              this._freeRoundsSpinButtonContainerElement.css("height", "130px"),
              this._freeRoundsSpinButtonContainerElement.css("top", "240px"),
              this._freeRoundsSpinButtonBackgroundElement.css("width", "128px"),
              this._freeRoundsSpinButtonBackgroundElement.css(
                "height",
                "128px"
              ),
              this._freeRoundsSpinButtonBackgroundElement.removeClass(
                "circleButtonBackgroundPortrait"
              ),
              this._freeRoundsSpinButtonBackgroundElement.addClass(
                "circleButtonBackgroundLandscape"
              ),
              this._freeRoundsSpinStartIconElement.css("width", "128px"),
              this._freeRoundsSpinStartIconElement.css("height", "128px")),
            t)
          ) {
            case n.SPIN:
            case n.QUICK_STOP:
              this._clickElement.css("width", "140px"),
                this._clickElement.css("height", "140px"),
                this._clickElement.css("left", "18px"),
                this._clickElement.css("top", "235px");
              break;
            case n.START_AUTO_PLAY:
            case n.STOP_AUTO_PLAY:
              this._clickElement.css("left", "23px"),
                this._clickElement.css("width", "130px"),
                this._clickElement.css("height", "255px"),
                this._clickElement.css("top", "180px");
              break;
            case n.START_FREE_ROUND:
              this._clickElement.css("width", "130px"),
                this._clickElement.css("height", "255px"),
                this._clickElement.css("left", "23px"),
                this._clickElement.css("top", "180px");
              break;
            case n.START_FEATURE:
              this._clickElement.css("left", "23px"),
                this._clickElement.css("width", "130px"),
                this._clickElement.css("height", "255px"),
                this._clickElement.css("top", "180px");
              break;
            case n.SKIP:
              this._clickElement.css("width", "140px"),
                this._clickElement.css("height", "140px"),
                this._clickElement.css("left", "23px"),
                this._clickElement.css("top", "235px");
              break;
            case n.SKIP_DURING_FEATURE:
            case n.QUICK_STOP_DURING_FEATURE:
              this._clickElement.css("width", "130px"),
                this._clickElement.css("height", "255px"),
                this._clickElement.css("left", "23px"),
                this._clickElement.css("top", "180px");
          }
        }),
        (t.prototype.layout = function (t, e, n, s, i, o, a) {
          (this._orientation = t),
            (this._gameContainerArea = e),
            (this._gameArea = n),
            (this._isControlPanelOpen = i),
            (this._gameMarginTop = o),
            (this._hasDesktopGui = s),
            s
              ? this.layoutForDesktop(t, e, n, s, i, o, !0)
              : this.layoutForMobile(t, e, n, s, i, o, !0);
        }),
        (t.prototype.isLayoutNeeded = function (t, e, n, s, i, o, a) {
          var l = this._orientation === t;
          return (
            !(l =
              (l =
                (l =
                  (l = l && e.equals(this._gameContainerArea)) &&
                  n.equals(this._gameArea)) && this._hasDesktopGui === s) &&
              this._currentState === a) || i
          );
        }),
        (t.prototype.updateMinRoundDurationProgression = function (t) {
          document.documentElement.style.setProperty(
            "--minSpinDurationProgression",
            "" + Math.round(t * Math.pow(10, 2)) / Math.pow(10, 2)
          ),
            t <= 0 || t >= 1
              ? this._singleSpinMinTimeProgressBar.css("display", "none")
              : this._singleSpinMinTimeProgressBar.css("display", "block");
        }),
        (t.removeClickAnimationAfterMs = 1),
        t
      );
    })();
    t.SpinButton = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function () {
      function t(t, e, n, s, i) {
        var o = this;
        (this._id = t),
          (this.Clicked = new Phaser.Signal()),
          (this._containerElement = i),
          this._containerElement.css({
            "-webkit-transform": "translate3d(0,0,0)",
            "-webkit-backface-visibility": "hidden",
          }),
          (this._spriteElement = n),
          (this._clickElement = s),
          this._clickElement.css("cursor", "pointer"),
          s.bind("tap", function (t) {
            o.handleClick();
          }),
          (this.enabled = e),
          this.hide();
      }
      return (
        (t.prototype.handleClick = function () {
          var t = this;
          this._enabled &&
            (setTimeout(function () {
              return t.removeClickAnimation();
            }, 300),
            this._containerElement.addClass("buttonClickAnimation"),
            this.Clicked.dispatch(this._id));
        }),
        (t.prototype.removeClickAnimation = function () {
          this._containerElement.removeClass("buttonClickAnimation");
        }),
        (t.prototype.show = function () {
          this._containerElement.css("display", "block"),
            this._clickElement.css("display", "block"),
            (this.enabled = this._enabled);
        }),
        (t.prototype.hide = function () {
          this._containerElement.css("display", "none"),
            this._clickElement.css("display", "none");
        }),
        Object.defineProperty(t.prototype, "enabled", {
          get: function () {
            return this._enabled;
          },
          set: function (t) {
            (this._enabled = t),
              t
                ? (this._clickElement.css("cursor", "pointer"),
                  this._spriteElement.css("opacity", 1))
                : (this._clickElement.css("cursor", "default"),
                  this._spriteElement.css("opacity", 0.3));
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })();
    t.SpriteButton = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function () {
      function t(t, e, n, s, i, o) {
        var a = this;
        (this._id = t),
          (this.Clicked = new Phaser.Signal()),
          (this._toggleOnSpriteElement = n),
          (this._toggleOffSpriteElement = s),
          (this._clickElement = i),
          (this._containerElement = o),
          this._clickElement.bind("tap", function (t) {
            a.handleClick();
          }),
          this._clickElement.css("cursor", "pointer"),
          this._containerElement.css("cursor", "pointer"),
          (this.selected = e);
      }
      return (
        (t.prototype.handleClick = function () {
          var t = this;
          setTimeout(function () {
            return t.removeClickAnimation();
          }, 300),
            this._containerElement.addClass("buttonClickAnimation"),
            this.Clicked.dispatch(this._id);
        }),
        (t.prototype.removeClickAnimation = function () {
          this._containerElement.removeClass("buttonClickAnimation");
        }),
        Object.defineProperty(t.prototype, "enabled", {
          set: function (t) {
            t
              ? (this._containerElement.css("opacity", 1),
                this._containerElement.css("cursor", "pointer"),
                this._clickElement.css("cursor", "pointer"),
                this._clickElement.css("display", "block"))
              : (this._containerElement.css("opacity", 0.3),
                this._containerElement.css("cursor", "default"),
                this._clickElement.css("cursor", "default"),
                this._clickElement.css("display", "none"));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.toggle = function () {
          this.selected = !this._selected;
        }),
        (t.prototype.show = function () {
          this._containerElement.css("display", "block"),
            (this.selected = this._selected);
        }),
        (t.prototype.hide = function () {
          this._containerElement.css("display", "none"),
            this._toggleOnSpriteElement.css("display", "none"),
            this._toggleOffSpriteElement.css("display", "none");
        }),
        Object.defineProperty(t.prototype, "selected", {
          set: function (t) {
            (this._selected = t),
              t
                ? (this._toggleOnSpriteElement.css("display", "block"),
                  this._toggleOffSpriteElement.css("display", "none"))
                : (this._toggleOnSpriteElement.css("display", "none"),
                  this._toggleOffSpriteElement.css("display", "block"));
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })();
    t.ToggleButton = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function () {
      function e(e, n, s, i, o, a, l, r, c, h, u) {
        (this._containerElement = e),
          (this._backToGameButtonBackgroundElement = i),
          (this._backToGameClickElement = o),
          (this.BackButtonClicked = new Phaser.Signal()),
          null != r &&
            ((this._titleContainerElement = r),
            this._titleContainerElement.css({
              "-webkit-transform": "translate3d(0,0,0)",
              "-webkit-backface-visibility": "hidden",
            })),
          null != a &&
            ((this._titleIconElement = a),
            this._titleIconElement.css({
              "-webkit-transform": "translate3d(0,0,0)",
              "-webkit-backface-visibility": "hidden",
            })),
          (this._titleIconCoverElement = l),
          null != c && (this._titleTextElement = c),
          null != h && (this._titleBorderContainerElement = h),
          (this._contentBottomBorderContainerElement = u),
          this._contentBottomBorderContainerElement.css({
            "-webkit-transform": "translate3d(0,0,0)",
            "-webkit-backface-visibility": "hidden",
          }),
          (this._backToGameButtonContainerElement = n),
          (this._backToGameButtonIconElement = s),
          (this.backToGameButton = new t.SpriteButton(
            tk_common.slots.gui.GuiButtonIds.BACK_TO_GAME,
            !0,
            this._backToGameButtonIconElement,
            this._backToGameClickElement,
            this._backToGameButtonContainerElement
          )),
          this.backToGameButton.Clicked.add(this.handleBackButtonClicked, this);
      }
      return (
        Object.defineProperty(e.prototype, "isVisible", {
          get: function () {
            return this._isVisible;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.show = function () {
          this._containerElement.css("display", "block"),
            this._titleBorderContainerElement.css("display", "block"),
            this._contentBottomBorderContainerElement.css("display", "block"),
            this._titleContainerElement.css("display", "block"),
            this.backToGameButton.show(),
            (this._isVisible = !0);
        }),
        (e.prototype.hide = function () {
          this.backToGameButton.hide(),
            this._containerElement.css("display", "none"),
            this._titleBorderContainerElement.css("display", "none"),
            this._contentBottomBorderContainerElement.css("display", "none"),
            this._titleContainerElement.css("display", "none"),
            (this._isVisible = !1);
        }),
        (e.prototype.layout = function (t, e, n, s, i, o) {
          (this._orientation = t),
            this._containerElement.css("left", 0),
            this._containerElement.css("top", 0),
            this._containerElement.css("width", "1280px"),
            this._titleContainerElement.css("width", "1280px"),
            this._titleContainerElement.css("height", "120px"),
            this._titleContainerElement.css("left", "0px"),
            this._titleIconElement.css("padding-right", "7px"),
            s
              ? this.layoutForDesktop(t, e, n, s, i)
              : this.layoutForMobile(t, e, n, s, i);
        }),
        (e.prototype.layoutForDesktop = function (t, e, n, s, i) {
          i
            ? this._containerElement.css("height", "648px")
            : this._containerElement.css("height", "720px"),
            this._backToGameButtonContainerElement.css("left", "9px"),
            this._backToGameButtonContainerElement.css("top", "641px"),
            this._backToGameButtonContainerElement.css("width", "70px"),
            this._backToGameButtonContainerElement.css("height", "70px"),
            this._backToGameButtonBackgroundElement.css("width", "70px"),
            this._backToGameButtonBackgroundElement.css("height", "70px"),
            this._backToGameButtonBackgroundElement.addClass(
              "circleButtonBackgroundLandscapeDesktopControlPanel"
            ),
            this._backToGameButtonIconElement.css("width", "70px"),
            this._backToGameButtonIconElement.css("height", "70px"),
            this._backToGameClickElement.css("left", "7px"),
            this._backToGameClickElement.css("top", "607px"),
            this._backToGameClickElement.css("width", "100px"),
            this._backToGameClickElement.css("height", "100px"),
            this._titleContainerElement.css("top", "12px"),
            this._titleTextElement.css("font-size", "50px"),
            this._titleIconElement.css("width", "75px"),
            this._titleIconElement.css("height", "68px"),
            this._titleIconCoverElement.css("width", "75px"),
            this._titleIconCoverElement.css("height", "68px"),
            this._titleIconCoverElement.css("top", "0"),
            this._titleIconCoverElement.css("left", "0"),
            this._titleBorderContainerElement.css(
              "border-bottom",
              "2px solid #333333"
            ),
            this._titleBorderContainerElement.css("left", 0),
            this._titleBorderContainerElement.css("width", "1280px"),
            this._titleBorderContainerElement.css("top", "88px"),
            this._contentBottomBorderContainerElement.css("display", "none");
        }),
        (e.prototype.layoutForMobile = function (t, e, n, s, i) {
          if (t === tk_common.constants.OrientationEnum.LANDSCAPE)
            i
              ? this._containerElement.css("height", "636px")
              : this._containerElement.css("height", "720px"),
              this._backToGameButtonContainerElement.css("left", "40px"),
              this._backToGameButtonContainerElement.css("top", "270px"),
              this._backToGameButtonContainerElement.css("width", "65px"),
              this._backToGameButtonContainerElement.css("height", "65px"),
              this._backToGameButtonBackgroundElement.css("width", "65px"),
              this._backToGameButtonBackgroundElement.css("height", "65px"),
              this._backToGameButtonIconElement.css("width", "65px"),
              this._backToGameButtonIconElement.css("height", "65px"),
              this._backToGameClickElement.css("left", "7px"),
              this._backToGameClickElement.css("top", "250px"),
              this._backToGameClickElement.css("width", "122px"),
              this._backToGameClickElement.css("height", "122px"),
              this._titleContainerElement.css("top", "12px"),
              this._titleTextElement.css("font-size", "50px"),
              this._titleIconElement.css("width", "75px"),
              this._titleIconElement.css("height", "68px"),
              this._titleIconCoverElement.css("width", "75px"),
              this._titleIconCoverElement.css("height", "68px"),
              this._titleIconCoverElement.css("top", "0"),
              this._titleIconCoverElement.css("left", "0"),
              this._titleBorderContainerElement.css(
                "border-bottom",
                "2px solid #333333"
              ),
              this._titleBorderContainerElement.css("left", 0),
              this._titleBorderContainerElement.css("width", "1280px"),
              this._titleBorderContainerElement.css("top", "88px"),
              this._contentBottomBorderContainerElement.css("display", "none");
          else {
            var o = 1280 / e.width;
            i
              ? this._containerElement.css("height", e.height * o - 230 + "px")
              : this._containerElement.css("height", "1280px"),
              this._titleContainerElement.css("top", "10px"),
              this._titleTextElement.css("font-size", "90px"),
              this._titleIconElement.css("width", "140px"),
              this._titleIconElement.css("height", "120px"),
              this._titleBorderContainerElement.css(
                "border-bottom",
                "3px solid #333333"
              ),
              this._titleBorderContainerElement.css("left", 0),
              this._titleBorderContainerElement.css("width", "1280px"),
              this._titleBorderContainerElement.css("top", "154px"),
              this._contentBottomBorderContainerElement.css("display", "block"),
              this._contentBottomBorderContainerElement.css(
                "border-bottom",
                "3px solid #333333"
              ),
              this._contentBottomBorderContainerElement.css("left", 0),
              this._contentBottomBorderContainerElement.css("width", "1280px"),
              this._backToGameButtonContainerElement.css("left", "590px"),
              this._backToGameButtonContainerElement.css("top", "359px"),
              this._backToGameButtonContainerElement.css("width", "100px"),
              this._backToGameButtonContainerElement.css("height", "100px"),
              this._backToGameButtonContainerElement.css("width", "100px"),
              this._backToGameButtonContainerElement.css("height", "100px"),
              this._backToGameButtonBackgroundElement.css("width", "100px"),
              this._backToGameButtonBackgroundElement.css("height", "100px"),
              this._backToGameButtonIconElement.css("width", "100px"),
              this._backToGameButtonIconElement.css("height", "100px"),
              this._backToGameClickElement.css("left", "0px"),
              this._backToGameClickElement.css("top", "0px"),
              this._backToGameClickElement.css("width", "1280px"),
              this._backToGameClickElement.css("height", "240px"),
              i
                ? (this._contentBottomBorderContainerElement.css(
                    "top",
                    e.height * o - 100 - 130 - 210 + "px"
                  ),
                  this._backToGameClickElement.css(
                    "top",
                    e.height * o - 100 - 130 - 210 + "px"
                  ),
                  this._backToGameButtonContainerElement.css(
                    "top",
                    e.height * o - 100 - 130 - 150 + "px"
                  ))
                : (this._backToGameButtonContainerElement.css(
                    "top",
                    e.height * o - 100 - 130 + "px"
                  ),
                  this._contentBottomBorderContainerElement.css(
                    "top",
                    e.height * o - 0.26 * e.width + "px"
                  ),
                  this._backToGameClickElement.css(
                    "top",
                    e.height * o - 0.26 * e.width + "px"
                  ));
          }
        }),
        (e.prototype.handleBackButtonClicked = function () {
          this.BackButtonClicked.dispatch();
        }),
        e
      );
    })();
    t.ControlPanelPage = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function () {
      function e(e, n, s) {
        void 0 === s && (s = !0),
          (this._buttons = []),
          (this.ButtonClicked = new Phaser.Signal());
        for (var i = 0; i < n.length; i++) {
          var o = new t.ControlPanelButton(i, e[i], n[i], s);
          o.Clicked.add(this.handleValueButtonClicked, this, i),
            this._buttons.push(o);
        }
        (this._activeIndexes = []),
          (this._hasToggle = !1),
          (this._fontSize = "50px"),
          (this._minWidth = "150px"),
          (this._minHeight = "30px"),
          (this._marginTop = "10px"),
          (this._marginBottom = "30px"),
          (this._marginLeft = "10px"),
          (this._marginRight = "57px"),
          (this._paddingLeft = "10px"),
          (this._paddingRight = "10px"),
          (this._paddingTop = "5px"),
          (this._paddingBottom = "5px"),
          (this._borderRadius = "50px"),
          (this._borderSize = "4px"),
          (this._borderColor = "#808080"),
          this.hide();
      }
      return (
        Object.defineProperty(e.prototype, "hasToggle", {
          set: function (t) {
            this._hasToggle = t;
            for (var e = 0; e < this._buttons.length; e++)
              this._buttons[e].hasToggle = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "fontSize", {
          set: function (t) {
            this._fontSize = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "minWidth", {
          set: function (t) {
            this._minWidth = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "minHeight", {
          set: function (t) {
            this._minHeight = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "marginLeft", {
          set: function (t) {
            this._marginLeft = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "marginRight", {
          set: function (t) {
            this._marginRight = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "marginTop", {
          set: function (t) {
            this._marginTop = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "marginBottom", {
          set: function (t) {
            this._marginBottom = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "paddingLeft", {
          set: function (t) {
            this._paddingLeft = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "paddingRight", {
          set: function (t) {
            this._paddingRight = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "paddingTop", {
          set: function (t) {
            this._paddingTop = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "paddingBottom", {
          set: function (t) {
            this._paddingBottom = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "borderSize", {
          set: function (t) {
            this._borderSize = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "borderRadius", {
          set: function (t) {
            this._borderRadius = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.handleValueButtonClicked = function (t) {
          this.selectElement(t), this.ButtonClicked.dispatch(t);
        }),
        (e.prototype.selectElement = function (t) {
          this._hasToggle && (this.clear(), (this._buttons[t].selected = !0));
        }),
        (e.prototype.clear = function () {
          for (var t = 0; t < this._buttons.length; t++)
            this._buttons[t].selected = !1;
        }),
        (e.prototype.setEnabledIndexes = function (t) {
          this.disableAllButtons();
          for (var e = 0; e < t.length; e++) this._buttons[t[e]].enabled = !0;
        }),
        (e.prototype.enableAllButtons = function () {
          for (var t = 0; t < this._buttons.length; t++)
            this._buttons[t].enabled = !0;
        }),
        (e.prototype.disableAllButtons = function () {
          for (var t = 0; t < this._buttons.length; t++)
            this._buttons[t].enabled = !1;
        }),
        (e.prototype.setActiveIndexes = function (t) {
          (this._activeIndexes = t), this.hide(), this.show();
        }),
        (e.prototype.setValues = function (t) {
          if (((this._valueStrings = t), null != t)) {
            for (var e = 0; e < this._buttons.length; e++)
              "" !== t[e] && this._buttons[e].setValue(t[e]);
            this.show();
          } else this.hide();
        }),
        (e.prototype.show = function () {
          if (0 === this._activeIndexes.length)
            for (var t = 0; t < this._buttons.length; t++)
              this._activeIndexes.push(t);
          for (var e = 0; e < this._activeIndexes.length; e++)
            this._buttons[this._activeIndexes[e]].show();
          this.layout(
            this._orientation,
            this._gameContainerArea,
            this._gameArea
          );
        }),
        (e.prototype.hide = function () {
          for (var t = 0; t < this._buttons.length; t++)
            this._buttons[t].hide();
        }),
        (e.prototype.layout = function (t, e, n) {
          (this._orientation = t),
            (this._gameContainerArea = e),
            (this._gameArea = n);
          for (var s = 0; s < this._activeIndexes.length; s++) {
            var i = this._marginRight;
            this._buttons[this._activeIndexes[s]].appendToParent(),
              this._buttons[this._activeIndexes[s]].layout(
                this._borderRadius,
                this._borderSize,
                this._borderColor,
                this._minWidth,
                this._minHeight,
                this._fontSize,
                i,
                this._marginLeft,
                this._marginTop,
                this._marginBottom,
                this._paddingTop,
                this._paddingRight,
                this._paddingBottom,
                this._paddingLeft
              );
          }
        }),
        e
      );
    })();
    t.ButtonManager = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function (e) {
      function n(
        n,
        s,
        i,
        o,
        a,
        l,
        r,
        c,
        h,
        u,
        p,
        d,
        m,
        _,
        g,
        E,
        b,
        B,
        x,
        C,
        f,
        k,
        y,
        S,
        T,
        L
      ) {
        var w = e.call(this, n, s, i, a, o, r, c, l, h, u, C) || this;
        return (
          (w._selectedValue = -1),
          (w._autoplayButtonsScrollContainer = x),
          (w._guiSettingsHelper = f),
          w._guiSettingsHelper.useKineticScroll &&
            (Draggable.create("#" + x.attr("id"), {
              type: "scrollTop",
              edgeResistance: 0.75,
              throwProps: !0,
            }),
            x.perfectScrollbar({ suppressScrollX: !0 })),
          (w.PageButtonClicked = new Phaser.Signal()),
          (w.StopOnFeatureWonButtonClicked = new Phaser.Signal()),
          (w._subTitleTextElement = d),
          (w._topGradientContainer = B),
          (w._autoplayClearButtonElement = E),
          (w._controlPanelAutoplayPageSubTitleLabelContainer = p),
          w._controlPanelAutoplayPageSubTitleLabelContainer.css({
            "-webkit-transform": "translate3d(0,0,0)",
            "-webkit-backface-visibility": "hidden",
          }),
          (w._clearButtonManager = new t.ButtonManager([E], [b])),
          (w._clearButtonManager.hasToggle = !1),
          w._clearButtonManager.ButtonClicked.add(
            w.handleClearButtonClicked,
            w
          ),
          w._clearButtonManager.setActiveIndexes([0]),
          (w._autoplayButtonsContainerElements = g),
          (w._buttonManager = new t.ButtonManager(m, _)),
          (w._values = []),
          (w._buttonManager.hasToggle = !0),
          w._buttonManager.ButtonClicked.add(w.handleValueSelected, w),
          (w._stopOnFeatureWonContainerElement = k),
          w._stopOnFeatureWonContainerElement.css({
            "-webkit-transform": "translate3d(0,0,0)",
            "-webkit-backface-visibility": "hidden",
          }),
          (w._stopOnFeatureWonCheckBoxElement = y),
          w._stopOnFeatureWonCheckBoxElement.css({
            "-webkit-transform": "translate3d(0,0,0)",
            "-webkit-backface-visibility": "hidden",
          }),
          (w._stopOnFeatureWonCheckBoxCheckerElement = S),
          (w._stopOnFeatureWonLabelElement = T),
          w._stopOnFeatureWonLabelElement.css({
            "-webkit-transform": "translate3d(0,0,0)",
            "-webkit-backface-visibility": "hidden",
          }),
          (w._stopOnFeatureWonClickElement = L),
          w._stopOnFeatureWonClickElement.bind("tap", function (t) {
            w.handleStopOnFeatueWonCheckboxClicked();
          }),
          w._stopOnFeatureWonClickElement.css("pointer-events", "all"),
          (w._hasStopOnFeatureWon = !1),
          (w._stopOnFeatureWon = !0),
          w.hide(),
          w
        );
      }
      return (
        __extends(n, e),
        (n.prototype.handleKeyDown = function (t) {
          this._lossLimitRequired &&
            (this.getLossStopValue().length > 0
              ? this.enableButtonsForLossLimit()
              : (this.clear(), this.disableButtonsForLossLimit()));
        }),
        (n.prototype.getAutoPlayLossLimitValue = function () {
          return this._guiSettingsHelper.useDesktopGui
            ? parseInt(this._lossStopTextFieldElement.val())
            : parseInt(this._lossStopTextElement.text());
        }),
        (n.prototype.getAutoPlaySingleWinLimitValue = function () {
          return this._guiSettingsHelper.useDesktopGui
            ? parseInt(this._singleWinLimitTextFieldElement.val())
            : parseInt(this._singleWinLimitTextElement.text());
        }),
        Object.defineProperty(n.prototype, "numPadManager", {
          set: function (t) {
            (this._numPadManager = t),
              this._numPadManager.CancelButtonClicked.add(
                this.handleNumPadCancelClicked,
                this
              ),
              this._numPadManager.OkButtonClicked.add(
                this.handleNumPadOkClicked,
                this
              );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.prototype.handleNumPadCancelClicked = function () {
          this._numPadManager.hide();
        }),
        (n.prototype.handleNumPadOkClicked = function (t) {
          "stopLoss" === t
            ? (this._lossStopTextElement.text(this._numPadManager.text),
              this.getLossStopValue().length > 0
                ? this.enableButtonsForLossLimit()
                : (this.clear(), this.disableButtonsForLossLimit()))
            : this._singleWinLimitTextElement.text(this._numPadManager.text),
            this._numPadManager.hide();
        }),
        Object.defineProperty(n.prototype, "hasStopOnFeatureWon", {
          set: function (t) {
            this._hasStopOnFeatureWon = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, "stopOnFeatureWonChecked", {
          set: function (t) {
            t
              ? this._stopOnFeatureWonCheckBoxCheckerElement.css(
                  "display",
                  "block"
                )
              : this._stopOnFeatureWonCheckBoxCheckerElement.css(
                  "display",
                  "none"
                ),
              (this._stopOnFeatureWon = t);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.prototype.disableButtonsForLossLimit = function () {
          this._stopOnFeatureWonClickElement.css("pointer-events", "none"),
            this._singleWinLimitTextElement.css("pointer-events", "none"),
            this._singleWinLimitTitleTextElement.css("opacity", 0.3),
            this._singleWinLimitTextElement.css("opacity", 0.3),
            this._singleWinLimitBackgroundElement.css("opacity", 0.3),
            this._subTitleTextElement.css("opacity", 0.3),
            this._stopOnFeatureWonContainerElement.css("opacity", 0.3),
            this._singleWinLimitTextFieldElement.css("display", "none"),
            this._clearButtonManager.disableAllButtons(),
            this._buttonManager.disableAllButtons();
        }),
        (n.prototype.enableButtonsForLossLimit = function () {
          this._subTitleTextElement.css("opacity", 1),
            this._stopOnFeatureWonClickElement.css("pointer-events", "all"),
            this._singleWinLimitTextElement.css("pointer-events", "all"),
            this._singleWinLimitTitleTextElement.css("opacity", 1),
            this._singleWinLimitTextElement.css("opacity", 1),
            this._stopOnFeatureWonContainerElement.css("opacity", 1),
            this._singleWinLimitBackgroundElement.css("opacity", 1),
            this._singleWinLimitTextFieldElement.css("display", "block"),
            this._clearButtonManager.enableAllButtons(),
            this._buttonManager.enableAllButtons();
        }),
        Object.defineProperty(n.prototype, "lossLimitRequired", {
          set: function (t) {
            (this._lossLimitRequired = t),
              t
                ? this.disableButtonsForLossLimit()
                : this.enableButtonsForLossLimit();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, "showAutoplayStopOptions", {
          set: function (t) {
            (this._showAutoplayStopSettings = t),
              t
                ? (this._lossStopBackgroundElement.css("pointer-events", "all"),
                  this._singleWinLimitBackgroundElement.css(
                    "pointer-events",
                    "all"
                  ),
                  this._lossStopTitleTextElement.css("display", "block"),
                  this._singleWinLimitBackgroundElement.css("display", "block"),
                  this._lossStopBackgroundElement.css("display", "block"),
                  this._singleWinLimitTitleTextElement.css("display", "block"))
                : (this._lossStopBackgroundElement.css(
                    "pointer-events",
                    "none"
                  ),
                  this._singleWinLimitBackgroundElement.css(
                    "pointer-events",
                    "none"
                  ),
                  this._lossStopTitleTextElement.css("display", "none"),
                  this._singleWinLimitBackgroundElement.css("display", "none"),
                  this._lossStopBackgroundElement.css("display", "none"),
                  this._singleWinLimitTitleTextElement.css("display", "none"));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.prototype.handleStopOnFeatueWonCheckboxClicked = function () {
          (this._stopOnFeatureWon = !this._stopOnFeatureWon),
            this._stopOnFeatureWon
              ? this._stopOnFeatureWonCheckBoxCheckerElement.css(
                  "display",
                  "block"
                )
              : this._stopOnFeatureWonCheckBoxCheckerElement.css(
                  "display",
                  "none"
                ),
            this.StopOnFeatureWonButtonClicked.dispatch(this._stopOnFeatureWon);
        }),
        Object.defineProperty(n.prototype, "lossStopTitleTextElement", {
          set: function (t) {
            this._lossStopTitleTextElement = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, "lossStopTextFieldElement", {
          set: function (t) {
            (this._lossStopTextFieldElement = t),
              this._lossStopTextFieldElement.keydown(function (t) {
                if (
                  !(
                    (t.keyCode > 95 && t.keyCode < 106) ||
                    (t.keyCode > 47 && t.keyCode < 58) ||
                    8 == t.keyCode
                  )
                )
                  return !1;
              });
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, "lossStopTextElement", {
          set: function (t) {
            this._lossStopTextElement = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(
          n.prototype,
          "lossStopTextFieldBackgroundElement",
          {
            set: function (t) {
              this._lossStopTextFieldBackgroundElement = t;
            },
            enumerable: !1,
            configurable: !0,
          }
        ),
        Object.defineProperty(n.prototype, "lossStopBackgroundElement", {
          set: function (t) {
            var e = this;
            (this._lossStopBackgroundElement = t),
              this._lossStopBackgroundElement.bind("tap", function (t) {
                e.handleLossStopClicked();
              });
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.prototype.handleLossStopClicked = function () {
          this._numPadManager.show(
            this._lossStopTextElement.text(),
            "stopLoss"
          );
        }),
        Object.defineProperty(n.prototype, "singleWinLimitTitleTextElement", {
          set: function (t) {
            this._singleWinLimitTitleTextElement = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, "singleWinLimitTextElement", {
          set: function (t) {
            this._singleWinLimitTextElement = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, "singleWinLimitTextFieldElement", {
          set: function (t) {
            (this._singleWinLimitTextFieldElement = t),
              this._singleWinLimitTextFieldElement.keydown(function (t) {
                if (
                  !(
                    (t.keyCode > 95 && t.keyCode < 106) ||
                    (t.keyCode > 47 && t.keyCode < 58) ||
                    8 == t.keyCode
                  )
                )
                  return !1;
              });
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(
          n.prototype,
          "singleWinLimitTextFieldBackgroundElement",
          {
            set: function (t) {
              this._singleWinLimitTextFieldBackgroundElement = t;
            },
            enumerable: !1,
            configurable: !0,
          }
        ),
        Object.defineProperty(n.prototype, "singleWinLimitBackgroundElement", {
          set: function (t) {
            var e = this;
            (this._singleWinLimitBackgroundElement = t),
              this._singleWinLimitBackgroundElement.bind("tap", function (t) {
                e.handleSingleWinLimitClicked();
              });
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.prototype.getSingleWinLimit = function () {
          return this._guiSettingsHelper.useDesktopGui
            ? this._singleWinLimitTextFieldElement.val()
            : this._singleWinLimitTextElement.text();
        }),
        (n.prototype.getLossStopValue = function () {
          return this._guiSettingsHelper.useDesktopGui
            ? this._lossStopTextFieldElement.val()
            : this._lossStopTextElement.text();
        }),
        (n.prototype.handleSingleWinLimitClicked = function () {
          "" !== this.getLossStopValue() &&
            this._numPadManager.show(
              this._singleWinLimitTextElement.text(),
              "winLimit"
            );
        }),
        (n.prototype.clear = function () {
          this._lossLimitRequired &&
            (this._lossStopTextElement.text(""),
            this._lossStopTextFieldElement.val(""),
            this._singleWinLimitTextElement.text(""),
            this._singleWinLimitTextFieldElement.val(""),
            this.disableButtonsForLossLimit()),
            (this._selectedValue = -1),
            this._buttonManager.clear();
        }),
        (n.prototype.handleClearButtonClicked = function () {
          this.PageButtonClicked.dispatch(-1), this.clear();
        }),
        (n.prototype.handleValueSelected = function (t) {
          (this._selectedValue = this._values[t]),
            this.PageButtonClicked.dispatch(this._values[t]);
        }),
        (n.prototype.show = function (n) {
          void 0 === n && (n = !1),
            e.prototype.show.call(this),
            (this.handleKeyDown = this.handleKeyDown.bind(this)),
            document.addEventListener("keyup", this.handleKeyDown),
            document.addEventListener("change", this.handleKeyDown),
            this._lossStopTextFieldElement.removeClass(
              t.MobileGui.CSS_CLASS_UNSELECTABLE
            ),
            this._singleWinLimitTextFieldElement.removeClass(
              t.MobileGui.CSS_CLASS_UNSELECTABLE
            ),
            this._guiSettingsHelper.useDesktopGui
              ? (this._singleWinLimitBackgroundElement.css("display", "none"),
                this._lossStopBackgroundElement.css("display", "none"),
                this._lossLimitRequired
                  ? (this._lossStopTextFieldBackgroundElement.css(
                      "display",
                      "block"
                    ),
                    this._singleWinLimitTextFieldBackgroundElement.css(
                      "display",
                      "block"
                    ),
                    this._lossStopTextFieldElement.css("display", "block"),
                    this._singleWinLimitTextFieldElement.css(
                      "display",
                      "block"
                    ))
                  : (this._lossStopTextFieldBackgroundElement.css(
                      "display",
                      "none"
                    ),
                    this._singleWinLimitTextFieldBackgroundElement.css(
                      "display",
                      "none"
                    ),
                    this._lossStopTextFieldElement.css("display", "none"),
                    this._singleWinLimitTextFieldElement.css(
                      "display",
                      "none"
                    )))
              : (this._lossLimitRequired &&
                  (this._singleWinLimitBackgroundElement.css(
                    "display",
                    "block"
                  ),
                  this._lossStopBackgroundElement.css("display", "block")),
                this._lossStopTextFieldBackgroundElement.css("display", "none"),
                this._singleWinLimitTextFieldBackgroundElement.css(
                  "display",
                  "none"
                ),
                this._lossStopTextFieldElement.css("display", "none"),
                this._singleWinLimitTextFieldElement.css("display", "none")),
            this._lossLimitRequired &&
              (this.getLossStopValue().length > 0
                ? (this.enableButtonsForLossLimit(),
                  this._singleWinLimitTextFieldElement.css("display", "block"))
                : this._singleWinLimitTextFieldElement.css("display", "none")),
            this._hasStopOnFeatureWon
              ? this._stopOnFeatureWonContainerElement.css("display", "block")
              : this._stopOnFeatureWonContainerElement.css("display", "none"),
            this._autoplayClearButtonElement.css("display", "block"),
            this._topGradientContainer.css("display", "block"),
            this._autoplayButtonsContainerElements.css("display", "block"),
            this._subTitleTextElement.css("display", "block"),
            this._autoplayButtonsScrollContainer.css("display", "block"),
            this._clearButtonManager.show(),
            this._buttonManager.show();
        }),
        (n.prototype.handleBackButtonClicked = function () {
          !this._lossLimitRequired ||
          ("" !== this.getLossStopValue() && -1 !== this._selectedValue)
            ? this.BackButtonClicked.dispatch()
            : this.handleClearButtonClicked();
        }),
        (n.prototype.hide = function (t) {
          void 0 === t && (t = !1),
            e.prototype.hide.call(this),
            document.removeEventListener("keydown", this.handleKeyDown),
            this._clearButtonManager.hide(),
            this._stopOnFeatureWonContainerElement.css("display", "none"),
            this._topGradientContainer.css("display", "none"),
            this._autoplayButtonsScrollContainer.css("display", "none"),
            this._autoplayClearButtonElement.css("display", "none"),
            this._subTitleTextElement.css("display", "none"),
            this._autoplayButtonsContainerElements.css("display", "none"),
            this._buttonManager.hide();
        }),
        (n.prototype.layout = function (t, n, s, i, o, a) {
          e.prototype.layout.call(this, t, n, s, i, o, a);
          var l = n.width / 1280,
            r = 1280 / n.width;
          if (t === tk_common.constants.OrientationEnum.LANDSCAPE)
            (this._clearButtonManager.minWidth = "173px"),
              (this._clearButtonManager.fontSize = "50px"),
              (this._clearButtonManager.paddingTop = "10px"),
              "ja" === this._guiSettingsHelper.activeLanguageIso &&
                ((this._clearButtonManager.fontSize = "35px"),
                (this._clearButtonManager.paddingTop = "12px")),
              "ko" === this._guiSettingsHelper.activeLanguageIso &&
                ((this._clearButtonManager.fontSize = "45px"),
                (this._clearButtonManager.paddingTop = "20px")),
              "el" === this._guiSettingsHelper.activeLanguageIso &&
                ((this._clearButtonManager.minWidth = "190px"),
                (this._clearButtonManager.paddingTop = "10px"),
                (this._clearButtonManager.fontSize = "40px")),
              ("fi" !== this._guiSettingsHelper.activeLanguageIso &&
                "ru" !== this._guiSettingsHelper.activeLanguageIso &&
                "bg" !== this._guiSettingsHelper.activeLanguageIso) ||
                ((this._clearButtonManager.minWidth = "180px"),
                (this._clearButtonManager.paddingTop = "15px"),
                (this._clearButtonManager.fontSize = "38px")),
              (this._clearButtonManager.borderSize = "4px"),
              (this._clearButtonManager.minHeight = "35px"),
              (this._clearButtonManager.marginTop = "10px"),
              (this._clearButtonManager.paddingBottom = "5px"),
              (this._clearButtonManager.paddingLeft = "10px"),
              (this._clearButtonManager.paddingRight = "10px"),
              (this._clearButtonManager.marginLeft = "10px"),
              (this._clearButtonManager.marginRight = "57px"),
              (this._clearButtonManager.marginBottom = "30px"),
              this._clearButtonManager.layout(t, n, s),
              this._autoplayClearButtonElement.css("top", "250px"),
              this._autoplayClearButtonElement.css("left", "850px"),
              this._autoplayClearButtonElement.css("width", "170px"),
              ("es-LA" !== this._guiSettingsHelper.activeLanguageIso &&
                "es-419" !== this._guiSettingsHelper.activeLanguageIso) ||
                this._autoplayClearButtonElement.css("width", "270px"),
              this._autoplayClearButtonElement.css("height", "90px"),
              this._autoplayButtonsContainerElements.css("top", "120px"),
              this._autoplayButtonsContainerElements.css("width", "1280px"),
              this._autoplayButtonsContainerElements.css("padding-top", 0),
              this._autoplayButtonsContainerElements.css(
                "-webkit-transform",
                "none"
              ),
              this._autoplayButtonsContainerElements.css(
                "-webkit-transform-origin",
                "none"
              ),
              this._autoplayButtonsContainerElements.css(
                "-moz-transform",
                "none"
              ),
              this._autoplayButtonsContainerElements.css(
                "-moz-transform-origin",
                "none"
              ),
              this._autoplayButtonsContainerElements.css(
                "-ms-transform",
                "none"
              ),
              this._autoplayButtonsContainerElements.css(
                "-ms-transform-origin",
                "none"
              ),
              this._autoplayButtonsContainerElements.css("left", "121px"),
              (this._buttonManager.minWidth = "150px"),
              (this._buttonManager.paddingTop = "5px"),
              (this._buttonManager.paddingBottom = "5px"),
              (this._buttonManager.paddingLeft = "10px"),
              (this._buttonManager.paddingRight = "10px"),
              (this._buttonManager.marginLeft = "10px"),
              (this._buttonManager.marginRight = "57px"),
              (this._buttonManager.marginBottom = "10px"),
              (this._buttonManager.fontSize = "50px"),
              (this._buttonManager.borderSize = "4px"),
              this._autoplayButtonsScrollContainer.css(
                "-webkit-transform",
                "none"
              ),
              this._autoplayButtonsScrollContainer.css(
                "-webkit-transform-origin",
                "none"
              ),
              this._autoplayButtonsScrollContainer.css(
                "-moz-transform",
                "none"
              ),
              this._autoplayButtonsScrollContainer.css(
                "-moz-transform-origin",
                "none"
              ),
              this._autoplayButtonsScrollContainer.css("-ms-transform", "none"),
              this._autoplayButtonsScrollContainer.css(
                "-ms-transform-origin",
                "none"
              ),
              this._subTitleTextElement.css("text-align", "left"),
              this._subTitleTextElement.css("left", "0px"),
              this._subTitleTextElement.css("top", "0px"),
              "ja" === this._guiSettingsHelper.activeLanguageIso
                ? this._subTitleTextElement.css("font-size", "35px")
                : this._subTitleTextElement.css("font-size", "47px"),
              this._controlPanelAutoplayPageSubTitleLabelContainer.css(
                "width",
                "1280px"
              ),
              this._controlPanelAutoplayPageSubTitleLabelContainer.css(
                "height",
                "70px"
              ),
              this._controlPanelAutoplayPageSubTitleLabelContainer.css(
                "padding-left",
                "140px"
              ),
              this._controlPanelAutoplayPageSubTitleLabelContainer.css(
                "left",
                "0"
              ),
              this._controlPanelAutoplayPageSubTitleLabelContainer.css(
                "top",
                "40px"
              ),
              this._hasStopOnFeatureWon &&
                (this._stopOnFeatureWonContainerElement.css("left", "135px"),
                this._stopOnFeatureWonContainerElement.css("top", "335px"),
                this._stopOnFeatureWonContainerElement.css("width", "500px"),
                this._stopOnFeatureWonContainerElement.css("height", "70px"),
                this._stopOnFeatureWonLabelElement.css("left", "90px"),
                this._stopOnFeatureWonLabelElement.css("top", "10px"),
                this._stopOnFeatureWonLabelElement.css("width", "500px"),
                this._stopOnFeatureWonLabelElement.css("height", "100px"),
                this._stopOnFeatureWonLabelElement.css("display", "block"),
                this._stopOnFeatureWonLabelElement.css("font-size", "38px"),
                this._stopOnFeatureWonLabelElement.css("text-align", "left"),
                this._stopOnFeatureWonCheckBoxElement.css("width", "55px"),
                this._stopOnFeatureWonCheckBoxElement.css("height", "55px"),
                this._stopOnFeatureWonCheckBoxElement.css("left", "5px"),
                this._stopOnFeatureWonCheckBoxElement.css("display", "block"),
                this._stopOnFeatureWonCheckBoxElement.css("top", "10px"),
                this._stopOnFeatureWonCheckBoxCheckerElement.css(
                  "width",
                  "55px"
                ),
                this._stopOnFeatureWonCheckBoxCheckerElement.css(
                  "height",
                  "55px"
                ),
                this._stopOnFeatureWonCheckBoxCheckerElement.css("left", "5px"),
                this._stopOnFeatureWonCheckBoxCheckerElement.css("top", "10px"),
                this._stopOnFeatureWonClickElement.css("top", "0px"),
                this._stopOnFeatureWonClickElement.css("left", "0px"),
                this._stopOnFeatureWonClickElement.css("width", "400px"),
                this._stopOnFeatureWonClickElement.css("height", "80px")),
              this._topGradientContainer.css("left", 0),
              this._topGradientContainer.css("top", 0),
              this._topGradientContainer.css("height", 0),
              this._topGradientContainer.css("width", 0),
              this._autoplayButtonsScrollContainer.css("padding-top", 0),
              this._autoplayButtonsScrollContainer.css("top", "90px"),
              this._autoplayButtonsScrollContainer.css("left", 0),
              this._autoplayButtonsScrollContainer.css("width", "1280px"),
              this._autoplayButtonsScrollContainer.css("height", "600px"),
              this._lossStopTitleTextElement.css("top", "430px"),
              this._lossStopTitleTextElement.css("left", "120px"),
              this._lossStopTitleTextElement.css("font-size", "30px"),
              this._lossStopTitleTextElement.css("white-space", ""),
              "bg" === this._guiSettingsHelper.activeLanguageIso &&
                (this._lossStopTitleTextElement.css("left", "90px"),
                this._lossStopTitleTextElement.css("font-size", "25px")),
              "el" === this._guiSettingsHelper.activeLanguageIso &&
                (this._lossStopTitleTextElement.css("left", "105px"),
                this._lossStopTitleTextElement.css("font-size", "25px")),
              "th" === this._guiSettingsHelper.activeLanguageIso &&
                (this._lossStopTitleTextElement.css("top", "410px"),
                this._lossStopTitleTextElement.css("left", "70px"),
                this._lossStopTitleTextElement.css("width", "180px")),
              "lt" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", "80px"),
              "es" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", "90px"),
              "pt" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", "90px"),
              "ru" === this._guiSettingsHelper.activeLanguageIso &&
                (this._lossStopTitleTextElement.css("left", "90px"),
                this._lossStopTitleTextElement.css("font-size", "25px")),
              "hr" === this._guiSettingsHelper.activeLanguageIso &&
                (this._lossStopTitleTextElement.css("left", "90px"),
                this._lossStopTitleTextElement.css("font-size", "25px")),
              "de" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", "150px"),
              "en" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", "170px"),
              "no" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", "160px"),
              "sv" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", "140px"),
              "pl" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", "160px"),
              "ro" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", "110px"),
              "ja" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", "100px"),
              this._lossStopTitleTextElement.css("text-align", "right"),
              this._lossStopBackgroundElement.css("left", "270px"),
              this._lossStopBackgroundElement.css("top", "420px"),
              this._lossStopBackgroundElement.css("border-width", "4px"),
              this._lossStopBackgroundElement.css(
                "-webkit-border-radius",
                "10px"
              ),
              this._lossStopBackgroundElement.css("border-radius", "10px"),
              this._lossStopBackgroundElement.css("width", "140px"),
              this._lossStopBackgroundElement.css("height", "70px"),
              this._lossStopTextElement.css("font-size", "50px"),
              this._lossStopTextElement.css("left", "10px"),
              this._lossStopTextElement.css("top", "0px"),
              this._lossStopTextElement.css("width", "150px"),
              this._lossStopTextElement.css("height", "70px"),
              this._lossStopTextElement.css("text-align", "left"),
              this._lossStopTextElement.css(
                "clip",
                "rect(0px, 114px, 200px, 0px)"
              ),
              this._lossStopTextFieldBackgroundElement.css("left", "270px"),
              this._lossStopTextFieldBackgroundElement.css("top", "420px"),
              this._lossStopTextFieldBackgroundElement.css(
                "border-width",
                "4px"
              ),
              this._lossStopTextFieldBackgroundElement.css(
                "-webkit-border-radius",
                "10px"
              ),
              this._lossStopTextFieldBackgroundElement.css(
                "border-radius",
                "10px"
              ),
              this._lossStopTextFieldBackgroundElement.css("width", "120px"),
              this._lossStopTextFieldBackgroundElement.css("height", "70px"),
              this._lossStopTextFieldElement.css("border", "0px"),
              this._lossStopTextFieldElement.addClass("customInputField"),
              this._lossStopTextFieldElement.css("width", "92px"),
              this._lossStopTextFieldElement.css("height", "60px"),
              this._lossStopTextFieldElement.css("left", "7px"),
              this._lossStopTextFieldElement.css("font-size", "35px"),
              this._lossStopTextFieldElement.css("background", "rgba(0,0,0,1)"),
              this._singleWinLimitTitleTextElement.css("top", "430px"),
              this._singleWinLimitTitleTextElement.css("left", "435px"),
              this._singleWinLimitTitleTextElement.css("font-size", "30px"),
              this._singleWinLimitTitleTextElement.css("white-space", ""),
              this._singleWinLimitBackgroundElement.css("left", "270px"),
              this._singleWinLimitBackgroundElement.css("top", "420px"),
              this._singleWinLimitBackgroundElement.css("border-width", "4px"),
              this._singleWinLimitBackgroundElement.css(
                "-webkit-border-radius",
                "10px"
              ),
              this._singleWinLimitBackgroundElement.css(
                "border-radius",
                "10px"
              ),
              this._singleWinLimitBackgroundElement.css("width", "160px"),
              this._singleWinLimitBackgroundElement.css("height", "70px"),
              this._singleWinLimitTextFieldBackgroundElement.css(
                "left",
                "270px"
              ),
              this._singleWinLimitTextFieldBackgroundElement.css(
                "top",
                "420px"
              ),
              this._singleWinLimitTextFieldBackgroundElement.css(
                "border-width",
                "4px"
              ),
              this._singleWinLimitTextFieldBackgroundElement.css(
                "-webkit-border-radius",
                "10px"
              ),
              this._singleWinLimitTextFieldBackgroundElement.css(
                "border-radius",
                "10px"
              ),
              this._singleWinLimitTextFieldBackgroundElement.css(
                "width",
                "160px"
              ),
              this._singleWinLimitTextFieldBackgroundElement.css(
                "height",
                "70px"
              ),
              this._singleWinLimitTextElement.css("font-size", "50px"),
              this._singleWinLimitTextElement.css("left", "10px"),
              this._singleWinLimitTextElement.css("top", "0px"),
              this._singleWinLimitTextElement.css("width", "150px"),
              this._singleWinLimitTextElement.css("height", "70px"),
              this._singleWinLimitTextElement.css("text-align", "left"),
              this._singleWinLimitTextElement.css(
                "clip",
                "rect(0px, 112px, 200px, 0px)"
              ),
              this._singleWinLimitTextFieldElement.css("border", "0px"),
              this._singleWinLimitTextFieldElement.addClass("customInputField"),
              this._singleWinLimitTextFieldElement.css("width", "102px"),
              this._singleWinLimitTextFieldElement.css("height", "60px"),
              this._singleWinLimitTextFieldElement.css("left", "7px"),
              this._singleWinLimitTextFieldElement.css("font-size", "35px"),
              this._singleWinLimitTextFieldElement.css(
                "background",
                "rgba(0,0,0,1)"
              ),
              "en" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css("left", "490px"),
              "fr" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css("left", "420px"),
              "hu" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css("left", "410px"),
              "no" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css("left", "415px"),
              "lt" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css("left", "410px"),
              "de" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css("left", "415px"),
              "ro" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css("left", "415px"),
              "es" === this._guiSettingsHelper.activeLanguageIso &&
                (this._singleWinLimitTitleTextElement.css("top", "410px"),
                this._singleWinLimitTitleTextElement.css("left", "420px"),
                this._singleWinLimitTitleTextElement.css("width", "200px")),
              "el" === this._guiSettingsHelper.activeLanguageIso &&
                (this._singleWinLimitTitleTextElement.css("top", "410px"),
                this._singleWinLimitTitleTextElement.css("left", "420px"),
                this._singleWinLimitTitleTextElement.css("font-size", "25px"),
                this._singleWinLimitTitleTextElement.css("width", "200px")),
              "th" === this._guiSettingsHelper.activeLanguageIso &&
                (this._singleWinLimitTitleTextElement.css("top", "410px"),
                this._singleWinLimitTitleTextElement.css("left", "420px"),
                this._singleWinLimitTitleTextElement.css("width", "200px")),
              "pl" === this._guiSettingsHelper.activeLanguageIso &&
                (this._singleWinLimitTitleTextElement.css("top", "410px"),
                this._singleWinLimitTitleTextElement.css("left", "420px"),
                this._singleWinLimitTitleTextElement.css("width", "200px")),
              "pt" === this._guiSettingsHelper.activeLanguageIso &&
                (this._singleWinLimitTitleTextElement.css("top", "410px"),
                this._singleWinLimitTitleTextElement.css("left", "420px"),
                this._singleWinLimitTitleTextElement.css("width", "200px")),
              "ru" === this._guiSettingsHelper.activeLanguageIso &&
                (this._singleWinLimitTitleTextElement.css("top", "420px"),
                this._singleWinLimitTitleTextElement.css("left", "420px"),
                this._singleWinLimitTitleTextElement.css("font-size", "25px"),
                this._singleWinLimitTitleTextElement.css("width", "200px")),
              "bg" === this._guiSettingsHelper.activeLanguageIso &&
                (this._singleWinLimitTitleTextElement.css("top", "410px"),
                this._singleWinLimitTitleTextElement.css("left", "420px"),
                this._singleWinLimitTitleTextElement.css("font-size", "25px"),
                this._singleWinLimitTitleTextElement.css("width", "200px")),
              "hr" === this._guiSettingsHelper.activeLanguageIso &&
                (this._singleWinLimitTitleTextElement.css("top", "420px"),
                this._singleWinLimitTitleTextElement.css("left", "420px"),
                this._singleWinLimitTitleTextElement.css("font-size", "25px"),
                this._singleWinLimitTitleTextElement.css("width", "200px")),
              this._singleWinLimitTitleTextElement.css("text-align", "right"),
              this._singleWinLimitBackgroundElement.css("left", "650px"),
              this._singleWinLimitBackgroundElement.css("top", "420px"),
              this._singleWinLimitBackgroundElement.css("border-width", "4px"),
              this._singleWinLimitBackgroundElement.css(
                "-webkit-border-radius",
                "10px"
              ),
              this._singleWinLimitBackgroundElement.css(
                "border-radius",
                "10px"
              ),
              this._singleWinLimitBackgroundElement.css("width", "130px"),
              this._singleWinLimitBackgroundElement.css("height", "70px"),
              this._singleWinLimitTextFieldBackgroundElement.css(
                "left",
                "650px"
              ),
              this._singleWinLimitTextFieldBackgroundElement.css(
                "top",
                "420px"
              ),
              this._singleWinLimitTextFieldBackgroundElement.css(
                "border-width",
                "4px"
              ),
              this._singleWinLimitTextFieldBackgroundElement.css(
                "-webkit-border-radius",
                "10px"
              ),
              this._singleWinLimitTextFieldBackgroundElement.css(
                "border-radius",
                "10px"
              ),
              this._singleWinLimitTextFieldBackgroundElement.css(
                "width",
                "130px"
              ),
              this._singleWinLimitTextFieldBackgroundElement.css(
                "height",
                "70px"
              );
          else {
            var c = 0,
              h = 0,
              u = 100,
              p = 200,
              d = 600;
            (p = 0), (d = 400);
            this._hasStopOnFeatureWon && ((p = 200), (d = 600)),
              this._showAutoplayStopSettings &&
                ((c = 180),
                (h = 450),
                (u = 680),
                (p = 780),
                (d = 1180),
                this._hasStopOnFeatureWon || ((p = 600), (d = 1e3)),
                this._guiSettingsHelper.isIpad &&
                  ((c += 100), (h += 100), (u += 100), (p += 100), (d += 100))),
              this._lossStopTitleTextElement.css("top", (c - 90) * l + "px"),
              this._lossStopTitleTextElement.css("left", 560 * l + "px"),
              this._lossStopTitleTextElement.css("font-size", 60 * l + "px"),
              this._lossStopTitleTextElement.css("white-space", "no-wrap"),
              "bg" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", 450 * l + "px"),
              "ru" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", 450 * l + "px"),
              "th" === this._guiSettingsHelper.activeLanguageIso &&
                (this._lossStopTitleTextElement.css("left", 430 * l + "px"),
                this._lossStopTitleTextElement.css("width", "")),
              "hu" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", 510 * l + "px"),
              "el" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", 500 * l + "px"),
              "hr" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", 450 * l + "px"),
              "it" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", 510 * l + "px"),
              "lv" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", 510 * l + "px"),
              "lt" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", 480 * l + "px"),
              "fr" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", 525 * l + "px"),
              "ko" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", 525 * l + "px"),
              "zh" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", 530 * l + "px"),
              "vn" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", 530 * l + "px"),
              "es" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", 490 * l + "px"),
              "no" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", 550 * l + "px"),
              "sv" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", 540 * l + "px"),
              "pt" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", 515 * l + "px"),
              "ro" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", 505 * l + "px"),
              "ja" === this._guiSettingsHelper.activeLanguageIso &&
                this._lossStopTitleTextElement.css("left", 505 * l + "px"),
              this._lossStopBackgroundElement.css("left", 500 * l + "px"),
              this._lossStopBackgroundElement.css("top", c * l + "px"),
              this._lossStopBackgroundElement.css("border-width", 8 * l + "px"),
              this._lossStopBackgroundElement.css(
                "-webkit-border-radius",
                "10px"
              ),
              this._lossStopBackgroundElement.css("border-radius", "10px"),
              this._lossStopBackgroundElement.css("width", 300 * l + "px"),
              this._lossStopBackgroundElement.css("height", 140 * l + "px"),
              this._lossStopTextElement.css("font-size", 80 * l + "px"),
              this._lossStopTextElement.css("left", 5 * l + "px"),
              this._lossStopTextElement.css("top", 15 * l + "px"),
              this._lossStopTextElement.css("width", 290 * l + "px"),
              this._lossStopTextElement.css("height", 140 * l + "px"),
              this._lossStopTextElement.css("text-align", "center"),
              this._lossStopTextElement.css(
                "clip",
                "rect(0px, " + 280 * l + "px," + 140 * l + "px, 0px)"
              ),
              this._singleWinLimitTitleTextElement.css(
                "top",
                (h - 90) * l + "px"
              ),
              this._singleWinLimitTitleTextElement.css("left", 515 * l + "px"),
              this._singleWinLimitTitleTextElement.css(
                "font-size",
                60 * l + "px"
              ),
              this._singleWinLimitTitleTextElement.css(
                "white-space",
                "no-wrap"
              ),
              this._singleWinLimitTextElement.css("font-size", 80 * l + "px"),
              this._singleWinLimitTextElement.css("left", 5 * l + "px"),
              this._singleWinLimitTextElement.css("top", 15 * l + "px"),
              this._singleWinLimitTextElement.css("width", 290 * l + "px"),
              this._singleWinLimitTextElement.css("height", 140 * l + "px"),
              this._singleWinLimitTextElement.css("text-align", "center"),
              this._singleWinLimitTextElement.css(
                "clip",
                "rect(0px, " + 280 * l + "px," + 140 * l + "px, 0px)"
              ),
              "bg" === this._guiSettingsHelper.activeLanguageIso &&
                (this._singleWinLimitTitleTextElement.css(
                  "left",
                  350 * l + "px"
                ),
                this._singleWinLimitTitleTextElement.css(
                  "font-size",
                  60 * l + "px"
                ),
                this._singleWinLimitTitleTextElement.css("width", "")),
              "el" === this._guiSettingsHelper.activeLanguageIso &&
                (this._singleWinLimitTitleTextElement.css(
                  "left",
                  370 * l + "px"
                ),
                this._singleWinLimitTitleTextElement.css("width", "")),
              "hu" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css(
                  "left",
                  440 * l + "px"
                ),
              "it" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css(
                  "left",
                  440 * l + "px"
                ),
              "lv" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css(
                  "left",
                  470 * l + "px"
                ),
              "lt" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css(
                  "left",
                  430 * l + "px"
                ),
              "da" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css(
                  "left",
                  460 * l + "px"
                ),
              "ko" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css(
                  "left",
                  470 * l + "px"
                ),
              "nl" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css(
                  "left",
                  485 * l + "px"
                ),
              "et" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css(
                  "left",
                  450 * l + "px"
                ),
              "fi" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css(
                  "left",
                  455 * l + "px"
                ),
              "fr" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css(
                  "left",
                  445 * l + "px"
                ),
              "no" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css(
                  "left",
                  440 * l + "px"
                ),
              "sv" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css(
                  "left",
                  460 * l + "px"
                ),
              "de" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css(
                  "left",
                  430 * l + "px"
                ),
              "es" === this._guiSettingsHelper.activeLanguageIso &&
                (this._singleWinLimitTitleTextElement.css(
                  "left",
                  400 * l + "px"
                ),
                this._singleWinLimitTitleTextElement.css(
                  "font-size",
                  60 * l + "px"
                ),
                this._singleWinLimitTitleTextElement.css("width", "")),
              "hr" === this._guiSettingsHelper.activeLanguageIso &&
                (this._singleWinLimitTitleTextElement.css(
                  "left",
                  350 * l + "px"
                ),
                this._singleWinLimitTitleTextElement.css(
                  "font-size",
                  60 * l + "px"
                ),
                this._singleWinLimitTitleTextElement.css("width", "")),
              "ru" === this._guiSettingsHelper.activeLanguageIso &&
                (this._singleWinLimitTitleTextElement.css(
                  "left",
                  350 * l + "px"
                ),
                this._singleWinLimitTitleTextElement.css(
                  "font-size",
                  60 * l + "px"
                ),
                this._singleWinLimitTitleTextElement.css("width", "")),
              "pl" === this._guiSettingsHelper.activeLanguageIso &&
                (this._singleWinLimitTitleTextElement.css(
                  "left",
                  390 * l + "px"
                ),
                this._singleWinLimitTitleTextElement.css(
                  "font-size",
                  60 * l + "px"
                ),
                this._singleWinLimitTitleTextElement.css("width", "")),
              "pt" === this._guiSettingsHelper.activeLanguageIso &&
                (this._singleWinLimitTitleTextElement.css(
                  "left",
                  390 * l + "px"
                ),
                this._singleWinLimitTitleTextElement.css(
                  "font-size",
                  60 * l + "px"
                ),
                this._singleWinLimitTitleTextElement.css("width", "")),
              "zh" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css(
                  "left",
                  480 * l + "px"
                ),
              "ro" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css(
                  "left",
                  450 * l + "px"
                ),
              "ja" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css(
                  "left",
                  465 * l + "px"
                ),
              "th" === this._guiSettingsHelper.activeLanguageIso &&
                (this._singleWinLimitTitleTextElement.css(
                  "left",
                  380 * l + "px"
                ),
                this._singleWinLimitTitleTextElement.css(
                  "font-size",
                  60 * l + "px"
                ),
                this._singleWinLimitTitleTextElement.css("width", "")),
              "vn" === this._guiSettingsHelper.activeLanguageIso &&
                this._singleWinLimitTitleTextElement.css(
                  "left",
                  470 * l + "px"
                ),
              this._singleWinLimitBackgroundElement.css("left", 500 * l + "px"),
              this._singleWinLimitBackgroundElement.css("top", h * l + "px"),
              this._singleWinLimitBackgroundElement.css(
                "border-width",
                8 * l + "px"
              ),
              this._singleWinLimitBackgroundElement.css(
                "-webkit-border-radius",
                "10px"
              ),
              this._singleWinLimitBackgroundElement.css(
                "border-radius",
                "10px"
              ),
              this._singleWinLimitBackgroundElement.css(
                "width",
                300 * l + "px"
              ),
              this._singleWinLimitBackgroundElement.css(
                "height",
                140 * l + "px"
              ),
              (this._clearButtonManager.minWidth = "310px"),
              (this._clearButtonManager.paddingTop = "15px"),
              (this._clearButtonManager.paddingRight = "10px"),
              (this._clearButtonManager.paddingLeft = "10px"),
              (this._clearButtonManager.paddingBottom = "10px"),
              (this._clearButtonManager.borderRadius = "90px"),
              (this._clearButtonManager.fontSize = "85px"),
              "ja" === this._guiSettingsHelper.activeLanguageIso &&
                ((this._clearButtonManager.paddingTop = "15px"),
                (this._clearButtonManager.fontSize = "60px")),
              "ko" === this._guiSettingsHelper.activeLanguageIso &&
                (this._clearButtonManager.paddingTop = "30px"),
              "el" === this._guiSettingsHelper.activeLanguageIso &&
                ((this._clearButtonManager.paddingTop = "25px"),
                (this._clearButtonManager.fontSize = "55px")),
              ("fi" !== this._guiSettingsHelper.activeLanguageIso &&
                "ru" !== this._guiSettingsHelper.activeLanguageIso &&
                "bg" !== this._guiSettingsHelper.activeLanguageIso) ||
                ((this._clearButtonManager.paddingTop = "10px"),
                (this._clearButtonManager.fontSize = "75px")),
              (this._clearButtonManager.borderSize = "8px"),
              (this._clearButtonManager.minHeight = "30px"),
              (this._clearButtonManager.marginTop = "0"),
              (this._clearButtonManager.marginLeft = "0px"),
              (this._clearButtonManager.marginRight = "0px"),
              (this._clearButtonManager.marginBottom = "0px"),
              this._autoplayClearButtonElement.css("left", "40px"),
              this._autoplayClearButtonElement.css("top", "-190px"),
              this._autoplayClearButtonElement.css("width", "190px"),
              this._autoplayClearButtonElement.css("height", "150px"),
              ("es-LA" !== this._guiSettingsHelper.activeLanguageIso &&
                "es-419" !== this._guiSettingsHelper.activeLanguageIso) ||
                (this._autoplayClearButtonElement.css("left", "0px"),
                this._autoplayClearButtonElement.css("width", "420px")),
              this._clearButtonManager.layout(t, n, s),
              this._subTitleTextElement.css("top", p * l + "px"),
              this._subTitleTextElement.css("left", "0px"),
              this._subTitleTextElement.css("text-align", "center"),
              this._subTitleTextElement.css("width", "100%"),
              this._subTitleTextElement.css("font-size", 80 * l + "px"),
              "ja" === this._guiSettingsHelper.activeLanguageIso &&
                (this._subTitleTextElement.css("font-size", 40 * l + "px"),
                this._subTitleTextElement.css("left", "-45px")),
              "el" === this._guiSettingsHelper.activeLanguageIso &&
                this._subTitleTextElement.css("line-height", 75 * l + "px"),
              ("fi" !== this._guiSettingsHelper.activeLanguageIso &&
                "ru" !== this._guiSettingsHelper.activeLanguageIso &&
                "bg" !== this._guiSettingsHelper.activeLanguageIso) ||
                this._subTitleTextElement.css("line-height", 75 * l + "px"),
              "es" === this._guiSettingsHelper.activeLanguageIso &&
                this._subTitleTextElement.css("font-size", 75 * l + "px"),
              this._controlPanelAutoplayPageSubTitleLabelContainer.css(
                "top",
                "0px"
              ),
              this._controlPanelAutoplayPageSubTitleLabelContainer.css(
                "left",
                "0px"
              ),
              this._controlPanelAutoplayPageSubTitleLabelContainer.css(
                "width",
                "100%"
              ),
              this._controlPanelAutoplayPageSubTitleLabelContainer.css(
                "height",
                140 * l + "px"
              ),
              this._controlPanelAutoplayPageSubTitleLabelContainer.css(
                "padding-left",
                190 * l + "px"
              ),
              this._controlPanelAutoplayPageSubTitleLabelContainer.css(
                "padding-right",
                190 * l + "px"
              ),
              this._controlPanelAutoplayPageSubTitleLabelContainer.css(
                "top",
                40 * l + "px"
              ),
              this._autoplayButtonsScrollContainer.css("top", "155px"),
              this._autoplayButtonsScrollContainer.css("left", 0),
              this._autoplayButtonsScrollContainer.css(
                "width",
                1280 * l + "px"
              ),
              this._autoplayButtonsScrollContainer.css(
                "-webkit-transform",
                "scale(" + r + ")"
              ),
              this._autoplayButtonsScrollContainer.css(
                "-webkit-transform-origin",
                "0 0 0px"
              ),
              this._autoplayButtonsScrollContainer.css(
                "-moz-transform",
                "scale(" + r + ")"
              ),
              this._autoplayButtonsScrollContainer.css(
                "-moz-transform-origin",
                "0 0 0px"
              ),
              this._autoplayButtonsScrollContainer.css(
                "-ms-transform",
                "scale(" + r + ")"
              ),
              this._autoplayButtonsScrollContainer.css(
                "-ms-transform-origin",
                "0 0 0px"
              ),
              (this._buttonManager.minWidth = "390px"),
              (this._buttonManager.paddingTop = "10px"),
              (this._buttonManager.paddingBottom = "10px"),
              (this._buttonManager.marginLeft = "0px"),
              (this._buttonManager.marginRight = "0px"),
              (this._buttonManager.marginBottom = "47px"),
              (this._buttonManager.fontSize = "85px"),
              (this._buttonManager.borderRadius = "90px"),
              (this._buttonManager.borderSize = "8px"),
              this._autoplayButtonsContainerElements.css(
                "-webkit-transform",
                "scale(" + l + ")"
              ),
              this._autoplayButtonsContainerElements.css(
                "-webkit-transform-origin",
                "0 0 0px"
              ),
              this._autoplayButtonsContainerElements.css(
                "-moz-transform",
                "scale(" + l + ")"
              ),
              this._autoplayButtonsContainerElements.css(
                "-moz-transform-origin",
                "0 0 0px"
              ),
              this._autoplayButtonsContainerElements.css(
                "-ms-transform",
                "scale(" + l + ")"
              ),
              this._autoplayButtonsContainerElements.css(
                "-ms-transform-origin",
                "0 0 0px"
              ),
              this._autoplayButtonsContainerElements.css("top", d * l + "px"),
              this._autoplayButtonsContainerElements.css("width", "390px"),
              this._autoplayButtonsContainerElements.css("padding-left", ""),
              this._autoplayButtonsContainerElements.css("padding-right", ""),
              this._autoplayButtonsContainerElements.css("padding-top", "20px"),
              this._autoplayButtonsContainerElements.css(
                "padding-bottom",
                "20px"
              ),
              this._autoplayButtonsContainerElements.css(
                "left",
                0.5 * n.width - 200 * l + "px"
              ),
              this._topGradientContainer.css("left", 0),
              this._topGradientContainer.css("top", "155px"),
              this._topGradientContainer.css("height", "60px"),
              this._topGradientContainer.css("width", "1200px"),
              this._hasStopOnFeatureWon &&
                (this._stopOnFeatureWonClickElement.css(
                  "width",
                  600 * l + "px"
                ),
                this._stopOnFeatureWonLabelElement.css("width", 800 * l + "px"),
                this._stopOnFeatureWonContainerElement.css(
                  "width",
                  800 * l + "px"
                ),
                "en" === this._guiSettingsHelper.activeLanguageIso &&
                  this._stopOnFeatureWonContainerElement.css(
                    "left",
                    360 * l + "px"
                  ),
                "fi" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonContainerElement.css(
                    "left",
                    230 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    830 * l + "px"
                  )),
                "bg" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonContainerElement.css(
                    "left",
                    230 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    830 * l + "px"
                  )),
                "cs" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonContainerElement.css(
                    "left",
                    320 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    700 * l + "px"
                  )),
                "da" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonContainerElement.css(
                    "left",
                    320 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    600 * l + "px"
                  )),
                "de" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonContainerElement.css(
                    "left",
                    320 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    600 * l + "px"
                  )),
                "el" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonContainerElement.css(
                    "left",
                    120 * l + "px"
                  ),
                  this._stopOnFeatureWonContainerElement.css(
                    "width",
                    900 * l + "px"
                  ),
                  this._stopOnFeatureWonLabelElement.css(
                    "width",
                    900 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    1e3 * l + "px"
                  )),
                "sv" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonContainerElement.css(
                    "left",
                    290 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    700 * l + "px"
                  )),
                "no" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonContainerElement.css(
                    "left",
                    290 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    700 * l + "px"
                  )),
                "ru" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonContainerElement.css(
                    "left",
                    120 * l + "px"
                  ),
                  this._stopOnFeatureWonContainerElement.css(
                    "width",
                    900 * l + "px"
                  ),
                  this._stopOnFeatureWonLabelElement.css(
                    "width",
                    900 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    1e3 * l + "px"
                  )),
                "fr" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonContainerElement.css(
                    "left",
                    260 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    700 * l + "px"
                  )),
                "ja" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonContainerElement.css(
                    "left",
                    135 * l + "px"
                  ),
                  this._stopOnFeatureWonContainerElement.css(
                    "width",
                    900 * l + "px"
                  ),
                  this._stopOnFeatureWonLabelElement.css(
                    "width",
                    900 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    1e3 * l + "px"
                  )),
                "it" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonContainerElement.css(
                    "left",
                    210 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    800 * l + "px"
                  )),
                "es" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonContainerElement.css(
                    "left",
                    190 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    1e3 * l + "px"
                  )),
                "et" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonContainerElement.css(
                    "left",
                    255 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    800 * l + "px"
                  )),
                "vn" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonContainerElement.css(
                    "left",
                    295 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    700 * l + "px"
                  )),
                "tr" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonContainerElement.css(
                    "left",
                    270 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    750 * l + "px"
                  )),
                "th" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonContainerElement.css(
                    "left",
                    330 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    640 * l + "px"
                  )),
                "ro" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonContainerElement.css(
                    "left",
                    300 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    700 * l + "px"
                  )),
                "pt" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonLabelElement.css(
                    "width",
                    900 * l + "px"
                  ),
                  this._stopOnFeatureWonContainerElement.css(
                    "width",
                    1e3 * l + "px"
                  ),
                  this._stopOnFeatureWonContainerElement.css(
                    "left",
                    150 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    1e3 * l + "px"
                  )),
                "pl" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonLabelElement.css(
                    "width",
                    900 * l + "px"
                  ),
                  this._stopOnFeatureWonContainerElement.css(
                    "width",
                    1e3 * l + "px"
                  ),
                  this._stopOnFeatureWonContainerElement.css(
                    "left",
                    160 * l + "px"
                  ),
                  this._stopOnFeatureWonClickElement.css(
                    "width",
                    920 * l + "px"
                  )),
                "nl" === this._guiSettingsHelper.activeLanguageIso &&
                  this._stopOnFeatureWonContainerElement.css(
                    "left",
                    350 * l + "px"
                  ),
                "lv" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonClickElement.css(
                    "width",
                    800 * l + "px"
                  ),
                  this._stopOnFeatureWonContainerElement.css(
                    "left",
                    250 * l + "px"
                  )),
                "lt" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonClickElement.css(
                    "width",
                    840 * l + "px"
                  ),
                  this._stopOnFeatureWonContainerElement.css(
                    "left",
                    220 * l + "px"
                  )),
                "hu" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonClickElement.css(
                    "width",
                    780 * l + "px"
                  ),
                  this._stopOnFeatureWonContainerElement.css(
                    "left",
                    260 * l + "px"
                  )),
                "hr" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._stopOnFeatureWonClickElement.css(
                    "width",
                    780 * l + "px"
                  ),
                  this._stopOnFeatureWonContainerElement.css(
                    "left",
                    260 * l + "px"
                  )),
                this._stopOnFeatureWonContainerElement.css("top", u * l + "px"),
                this._stopOnFeatureWonContainerElement.css(
                  "height",
                  200 * l + "px"
                ),
                this._stopOnFeatureWonLabelElement.css("left", 130 * l + "px"),
                this._stopOnFeatureWonLabelElement.css("top", 0),
                this._stopOnFeatureWonLabelElement.css(
                  "height",
                  200 * l + "px"
                ),
                this._stopOnFeatureWonLabelElement.css("display", "block"),
                this._stopOnFeatureWonLabelElement.css(
                  "font-size",
                  70 * l + "px"
                ),
                this._stopOnFeatureWonLabelElement.css("text-align", "left"),
                "it" === this._guiSettingsHelper.activeLanguageIso &&
                  this._stopOnFeatureWonLabelElement.css(
                    "font-size",
                    60 * l + "px"
                  ),
                this._stopOnFeatureWonCheckBoxElement.css(
                  "width",
                  100 * l + "px"
                ),
                this._stopOnFeatureWonCheckBoxElement.css(
                  "height",
                  100 * l + "px"
                ),
                this._stopOnFeatureWonCheckBoxElement.css("left", 0),
                this._stopOnFeatureWonCheckBoxElement.css("display", "block"),
                this._stopOnFeatureWonCheckBoxElement.css("top", "0px"),
                this._stopOnFeatureWonCheckBoxCheckerElement.css(
                  "width",
                  100 * l + "px"
                ),
                this._stopOnFeatureWonCheckBoxCheckerElement.css(
                  "height",
                  100 * l + "px"
                ),
                this._stopOnFeatureWonCheckBoxCheckerElement.css("left", 0),
                this._stopOnFeatureWonCheckBoxCheckerElement.css("top", "0px"),
                this._stopOnFeatureWonClickElement.css("top", -30 * l + "px"),
                this._stopOnFeatureWonClickElement.css(
                  "height",
                  140 * l + "px"
                )),
              o
                ? this._autoplayButtonsScrollContainer.css(
                    "height",
                    n.height - 595 * l + "px"
                  )
                : this._autoplayButtonsScrollContainer.css(
                    "height",
                    n.height - 565 * l + "px"
                  ),
              this._autoplayButtonsScrollContainer.css(
                "width",
                1280 * l + "px"
              );
          }
          this._buttonManager.layout(t, n, s),
            this._guiSettingsHelper.useKineticScroll &&
              (t === tk_common.constants.OrientationEnum.LANDSCAPE
                ? this._autoplayButtonsScrollContainer.css(
                    "pointer-events",
                    "none"
                  )
                : this._autoplayButtonsScrollContainer.css(
                    "pointer-events",
                    ""
                  ),
              this._autoplayButtonsScrollContainer.perfectScrollbar("update"));
        }),
        (n.prototype.updatePageSettings = function (t) {
          this._values = [];
          for (var e = [], n = [], s = 0; s < t.roundOptions.length; s++)
            n.push(s),
              e.push(t.roundOptions[s].toString()),
              this._values.push(t.roundOptions[s]);
          this._buttonManager.setActiveIndexes(n),
            this._buttonManager.setValues(e),
            (this._guiSettingsHelper.autoPlayAllowed =
              null != t.autoPlayIsAllowed
                ? t.autoPlayIsAllowed
                : this._guiSettingsHelper.autoPlayAllowed);
        }),
        n
      );
    })(t.ControlPanelPage);
    t.ControlPanelAutoplayPage = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = tk_common.utils.AmountFormatter,
      n = (function (n) {
        function s(e, s, i, o, a, l, r, c, h, u, p, d, m, _, g, E, b, B, x) {
          var C = n.call(this, e, s, i, o, a, l, r, c, h, u, B) || this;
          return (
            (C._previousSelectedBet = NaN),
            (C._betButtonsScrollContainer = b),
            (C._guiSettingsHelper = x),
            x.useKineticScroll &&
              ((C._scroller = Draggable.create("#" + b.attr("id"), {
                type: "scrollTop",
                edgeResistance: 0.75,
                throwProps: !0,
              })),
              (C._scrollbar = b.perfectScrollbar({ suppressScrollX: !0 }))),
            (C._previousBetPageValues = []),
            (C._previousHighestCoverableBet = -1),
            (C.PageButtonClicked = new Phaser.Signal()),
            (C._topGradientContainer = E),
            (C._buttonManager = new t.ButtonManager(m, _)),
            (C._subTitleTextElement = d),
            (C._controlPanelBetPageSubTitleLabelContainer = p),
            (C._betButtonsContainerElements = g),
            (C._buttonManager.hasToggle = !0),
            C._buttonManager.ButtonClicked.add(C.handleValueSelected, C),
            C.hide(),
            C
          );
        }
        return (
          __extends(s, n),
          Object.defineProperty(s.prototype, "isEnabled", {
            set: function (t) {
              this._guiSettingsHelper.useKineticScroll;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (s.prototype.setSelectedValue = function (t) {
            this._buttonManager.selectElement(t);
          }),
          (s.prototype.handleValueSelected = function (t) {
            this.PageButtonClicked.dispatch(t);
          }),
          (s.prototype.show = function () {
            n.prototype.show.call(this),
              this._topGradientContainer.css("display", "block"),
              this._betButtonsContainerElements.css("display", "block"),
              this._subTitleTextElement.css("display", "block"),
              this._betButtonsScrollContainer.css("display", "block"),
              this._buttonManager.show();
          }),
          (s.prototype.hide = function () {
            n.prototype.hide.call(this),
              this._betButtonsScrollContainer.css("display", "none"),
              this._topGradientContainer.css("display", "none"),
              this._subTitleTextElement.css("display", "none"),
              this._betButtonsContainerElements.css("display", "none"),
              this._buttonManager.hide();
          }),
          (s.prototype.scaleTexts = function () {
            this._controlPanelBetPageSubTitleLabelContainer.textfill({
              innerTag: "label",
            });
          }),
          (s.prototype.layout = function (t, e, s, i, o, a) {
            n.prototype.layout.call(this, t, e, s, i, o, a),
              i
                ? this.layoutPageForDesktop(t, e, s, i, a, o)
                : this.layoutPageForMobile(t, e, s, i, a, o),
              this._buttonManager.layout(t, e, s),
              this._guiSettingsHelper.useKineticScroll &&
                (t === tk_common.constants.OrientationEnum.LANDSCAPE
                  ? this._betButtonsScrollContainer.css(
                      "pointer-events",
                      "none"
                    )
                  : this._betButtonsScrollContainer.css("pointer-events", ""),
                this._betButtonsScrollContainer.perfectScrollbar("update"));
          }),
          (s.prototype.layoutPageForDesktop = function (t, e, n, s, i, o) {
            if (t === tk_common.constants.OrientationEnum.LANDSCAPE)
              this._subTitleTextElement.css("text-align", "left"),
                this._subTitleTextElement.css("left", "0px"),
                this._subTitleTextElement.css("top", "0px"),
                this._subTitleTextElement.css("font-size", "47px"),
                "ja" === this._guiSettingsHelper.activeLanguageIso
                  ? this._subTitleTextElement.css("font-size", "41px")
                  : this._subTitleTextElement.css("font-size", "47px"),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "width",
                  "1000px"
                ),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "height",
                  "70px"
                ),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "left",
                  "140px"
                ),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "top",
                  "40px"
                ),
                this._betButtonsContainerElements.css("top", "110px"),
                this._betButtonsContainerElements.css("width", "1280px"),
                this._betButtonsContainerElements.css("padding-top", 0),
                this._betButtonsContainerElements.css("left", "121px"),
                this._topGradientContainer.css("left", 0),
                this._topGradientContainer.css("top", 0),
                this._topGradientContainer.css("height", 0),
                this._topGradientContainer.css("width", 0),
                (this._buttonManager.minWidth = "150px"),
                (this._buttonManager.paddingTop = "5px"),
                (this._buttonManager.paddingBottom = "5px"),
                (this._buttonManager.paddingLeft = "10px"),
                (this._buttonManager.paddingRight = "10px"),
                (this._buttonManager.marginLeft = "10px"),
                (this._buttonManager.marginRight = "57px"),
                (this._buttonManager.marginBottom = "30px"),
                (this._buttonManager.fontSize = "50px"),
                ("VND" !== this._guiSettingsHelper.activeCurrencyIso &&
                  "IDR" !== this._guiSettingsHelper.activeCurrencyIso) ||
                  (this._buttonManager.fontSize = "43px"),
                (this._buttonManager.borderSize = "4px"),
                this._betButtonsScrollContainer.css(
                  "-webkit-transform",
                  "none"
                ),
                this._betButtonsScrollContainer.css(
                  "-webkit-transform-origin",
                  "none"
                ),
                this._betButtonsScrollContainer.css("-moz-transform", "none"),
                this._betButtonsScrollContainer.css(
                  "-moz-transform-origin",
                  "none"
                ),
                this._betButtonsScrollContainer.css("-ms-transform", "none"),
                this._betButtonsScrollContainer.css(
                  "-ms-transform-origin",
                  "none"
                ),
                this._betButtonsContainerElements.css(
                  "-webkit-transform",
                  "none"
                ),
                this._betButtonsContainerElements.css(
                  "-webkit-transform-origin",
                  "none"
                ),
                this._betButtonsContainerElements.css("-moz-transform", "none"),
                this._betButtonsContainerElements.css(
                  "-moz-transform-origin",
                  "none"
                ),
                this._betButtonsContainerElements.css("-ms-transform", "none"),
                this._betButtonsContainerElements.css(
                  "-ms-transform-origin",
                  "none"
                ),
                this._betButtonsScrollContainer.css("padding-top", 0),
                this._betButtonsScrollContainer.css("top", "90px"),
                this._betButtonsScrollContainer.css("left", 0),
                this._betButtonsScrollContainer.css("width", "1280px"),
                this._betButtonsScrollContainer.css("height", "558px");
            else {
              var a = e.width / 1280,
                l = 1280 / e.width;
              this._subTitleTextElement.css("top", "0px"),
                this._subTitleTextElement.css("left", "0px"),
                this._subTitleTextElement.css("text-align", "center"),
                this._subTitleTextElement.css("width", "100%"),
                this._subTitleTextElement.css("font-size", 95 * a + "px"),
                "ja" === this._guiSettingsHelper.activeLanguageIso &&
                  this._subTitleTextElement.css("font-size", 60 * a + "px"),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "top",
                  "0px"
                ),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "left",
                  "0px"
                ),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "width",
                  900 * a + "px"
                ),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "height",
                  140 * a + "px"
                ),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "left",
                  190 * a + "px"
                ),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "top",
                  40 * a + "px"
                ),
                this._betButtonsScrollContainer.css("top", "155px"),
                this._betButtonsScrollContainer.css("left", 0),
                this._betButtonsScrollContainer.css(
                  "-webkit-transform",
                  "scale(" + l + ")"
                ),
                this._betButtonsScrollContainer.css(
                  "-webkit-transform-origin",
                  "0 0 0px"
                ),
                this._betButtonsScrollContainer.css(
                  "-moz-transform",
                  "scale(" + l + ")"
                ),
                this._betButtonsScrollContainer.css(
                  "-moz-transform-origin",
                  "0 0 0px"
                ),
                this._betButtonsScrollContainer.css(
                  "-ms-transform",
                  "scale(" + l + ")"
                ),
                this._betButtonsScrollContainer.css(
                  "-ms-transform-origin",
                  "0 0 0px"
                ),
                this._betButtonsContainerElements.css(
                  "-webkit-transform",
                  "scale(" + a + ")"
                ),
                this._betButtonsContainerElements.css(
                  "-webkit-transform-origin",
                  "0 0 0px"
                ),
                this._betButtonsContainerElements.css(
                  "-moz-transform",
                  "scale(" + a + ")"
                ),
                this._betButtonsContainerElements.css(
                  "-moz-transform-origin",
                  "0 0 0px"
                ),
                this._betButtonsContainerElements.css(
                  "-ms-transform",
                  "scale(" + a + ")"
                ),
                this._betButtonsContainerElements.css(
                  "-ms-transform-origin",
                  "0 0 0px"
                ),
                this._betButtonsContainerElements.css("top", 220 * a + "px"),
                this._betButtonsContainerElements.css("width", "400px"),
                this._betButtonsContainerElements.css("padding-left", ""),
                this._betButtonsContainerElements.css("padding-top", "20px"),
                this._betButtonsContainerElements.css("padding-bottom", "20px"),
                this._betButtonsContainerElements.css(
                  "left",
                  0.5 * e.width - 200 * a + "px"
                ),
                this._betButtonsContainerElements.css("height", ""),
                (this._buttonManager.minWidth = "390px"),
                (this._buttonManager.paddingTop = "10px"),
                (this._buttonManager.paddingBottom = "10px"),
                (this._buttonManager.marginLeft = "0px"),
                (this._buttonManager.marginRight = "0px"),
                (this._buttonManager.marginBottom = "47px"),
                (this._buttonManager.fontSize = "85px"),
                (this._buttonManager.borderRadius = "90px"),
                (this._buttonManager.borderSize = "8px"),
                this._topGradientContainer.css("left", 0),
                this._topGradientContainer.css("top", "155px"),
                this._topGradientContainer.css("height", "60px"),
                this._topGradientContainer.css("width", "1200px"),
                o
                  ? this._betButtonsScrollContainer.css(
                      "height",
                      e.height - 595 * a + "px"
                    )
                  : this._betButtonsScrollContainer.css(
                      "height",
                      e.height - 565 * a + "px"
                    ),
                this._betButtonsScrollContainer.css("width", 1280 * a + "px");
            }
          }),
          (s.prototype.layoutPageForMobile = function (t, e, n, s, i, o) {
            if (t === tk_common.constants.OrientationEnum.LANDSCAPE)
              this._subTitleTextElement.css("text-align", "left"),
                this._subTitleTextElement.css("left", "0px"),
                this._subTitleTextElement.css("top", "0px"),
                this._subTitleTextElement.css("font-size", "47px"),
                "ja" === this._guiSettingsHelper.activeLanguageIso
                  ? this._subTitleTextElement.css("font-size", "41px")
                  : this._subTitleTextElement.css("font-size", "47px"),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "width",
                  "1000px"
                ),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "height",
                  "70px"
                ),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "left",
                  "140px"
                ),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "top",
                  "40px"
                ),
                this._betButtonsContainerElements.css("top", "110px"),
                this._betButtonsContainerElements.css("width", "1280px"),
                this._betButtonsContainerElements.css("padding-top", 0),
                this._betButtonsContainerElements.css("left", "121px"),
                this._topGradientContainer.css("left", 0),
                this._topGradientContainer.css("top", 0),
                this._topGradientContainer.css("height", 0),
                this._topGradientContainer.css("width", 0),
                (this._buttonManager.minWidth = "150px"),
                (this._buttonManager.paddingTop = "5px"),
                (this._buttonManager.paddingBottom = "5px"),
                (this._buttonManager.paddingLeft = "10px"),
                (this._buttonManager.paddingRight = "10px"),
                (this._buttonManager.marginLeft = "10px"),
                (this._buttonManager.marginRight = "57px"),
                (this._buttonManager.marginBottom = "30px"),
                (this._buttonManager.fontSize = "50px"),
                ("VND" !== this._guiSettingsHelper.activeCurrencyIso &&
                  "IDR" !== this._guiSettingsHelper.activeCurrencyIso) ||
                  (this._buttonManager.fontSize = "43px"),
                (this._buttonManager.borderSize = "4px"),
                this._betButtonsScrollContainer.css(
                  "-webkit-transform",
                  "none"
                ),
                this._betButtonsScrollContainer.css(
                  "-webkit-transform-origin",
                  "none"
                ),
                this._betButtonsScrollContainer.css("-moz-transform", "none"),
                this._betButtonsScrollContainer.css(
                  "-moz-transform-origin",
                  "none"
                ),
                this._betButtonsScrollContainer.css("-ms-transform", "none"),
                this._betButtonsScrollContainer.css(
                  "-ms-transform-origin",
                  "none"
                ),
                this._betButtonsContainerElements.css(
                  "-webkit-transform",
                  "none"
                ),
                this._betButtonsContainerElements.css(
                  "-webkit-transform-origin",
                  "none"
                ),
                this._betButtonsContainerElements.css("-moz-transform", "none"),
                this._betButtonsContainerElements.css(
                  "-moz-transform-origin",
                  "none"
                ),
                this._betButtonsContainerElements.css("-ms-transform", "none"),
                this._betButtonsContainerElements.css(
                  "-ms-transform-origin",
                  "none"
                ),
                this._betButtonsContainerElements.css("height", "200px"),
                this._betButtonsScrollContainer.css("padding-top", 0),
                this._betButtonsScrollContainer.css("top", "90px"),
                this._betButtonsScrollContainer.css("left", 0),
                this._betButtonsScrollContainer.css("width", "1280px"),
                this._betButtonsScrollContainer.css("height", "490px");
            else {
              var a = e.width / 1280,
                l = 1280 / e.width;
              this._subTitleTextElement.css("top", "0px"),
                this._subTitleTextElement.css("left", "0px"),
                this._subTitleTextElement.css("text-align", "center"),
                this._subTitleTextElement.css("width", "100%"),
                this._subTitleTextElement.css("font-size", 95 * a + "px"),
                "ja" === this._guiSettingsHelper.activeLanguageIso &&
                  (this._subTitleTextElement.css("font-size", 45 * a + "px"),
                  this._subTitleTextElement.css("left", "-30px")),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "top",
                  "0px"
                ),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "left",
                  "0px"
                ),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "width",
                  900 * a + "px"
                ),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "height",
                  140 * a + "px"
                ),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "left",
                  190 * a + "px"
                ),
                this._controlPanelBetPageSubTitleLabelContainer.css(
                  "top",
                  40 * a + "px"
                ),
                this._betButtonsScrollContainer.css("top", "155px"),
                this._betButtonsScrollContainer.css("left", 0),
                this._betButtonsScrollContainer.css(
                  "-webkit-transform",
                  "scale(" + l + ")"
                ),
                this._betButtonsScrollContainer.css(
                  "-webkit-transform-origin",
                  "0 0 0px"
                ),
                this._betButtonsScrollContainer.css(
                  "-moz-transform",
                  "scale(" + l + ")"
                ),
                this._betButtonsScrollContainer.css(
                  "-moz-transform-origin",
                  "0 0 0px"
                ),
                this._betButtonsScrollContainer.css(
                  "-ms-transform",
                  "scale(" + l + ")"
                ),
                this._betButtonsScrollContainer.css(
                  "-ms-transform-origin",
                  "0 0 0px"
                ),
                this._betButtonsContainerElements.css(
                  "-webkit-transform",
                  "scale(" + a + ")"
                ),
                this._betButtonsContainerElements.css(
                  "-webkit-transform-origin",
                  "0 0 0px"
                ),
                this._betButtonsContainerElements.css(
                  "-moz-transform",
                  "scale(" + a + ")"
                ),
                this._betButtonsContainerElements.css(
                  "-moz-transform-origin",
                  "0 0 0px"
                ),
                this._betButtonsContainerElements.css(
                  "-ms-transform",
                  "scale(" + a + ")"
                ),
                this._betButtonsContainerElements.css(
                  "-ms-transform-origin",
                  "0 0 0px"
                ),
                this._betButtonsContainerElements.css("top", 220 * a + "px"),
                this._betButtonsContainerElements.css("width", "400px"),
                this._betButtonsContainerElements.css("padding-left", ""),
                this._betButtonsContainerElements.css("padding-top", "20px"),
                this._betButtonsContainerElements.css("padding-bottom", "20px"),
                this._betButtonsContainerElements.css(
                  "left",
                  0.5 * e.width - 200 * a + "px"
                ),
                this._betButtonsContainerElements.css("height", ""),
                (this._buttonManager.minWidth = "390px"),
                (this._buttonManager.paddingTop = "10px"),
                (this._buttonManager.paddingBottom = "10px"),
                (this._buttonManager.marginLeft = "0px"),
                (this._buttonManager.marginRight = "0px"),
                (this._buttonManager.marginBottom = "47px"),
                (this._buttonManager.fontSize = "85px"),
                (this._buttonManager.borderRadius = "90px"),
                (this._buttonManager.borderSize = "8px"),
                this._topGradientContainer.css("left", 0),
                this._topGradientContainer.css("top", "155px"),
                this._topGradientContainer.css("height", "60px"),
                this._topGradientContainer.css("width", "1200px"),
                o
                  ? this._betButtonsScrollContainer.css(
                      "height",
                      e.height - 595 * a + "px"
                    )
                  : this._betButtonsScrollContainer.css(
                      "height",
                      e.height - 565 * a + "px"
                    ),
                this._betButtonsScrollContainer.css("width", 1280 * a + "px");
            }
            this._buttonManager.layout(t, e, n),
              this._guiSettingsHelper.useKineticScroll &&
                (t === tk_common.constants.OrientationEnum.LANDSCAPE
                  ? this._betButtonsScrollContainer.css(
                      "pointer-events",
                      "none"
                    )
                  : this._betButtonsScrollContainer.css("pointer-events", ""),
                this._betButtonsScrollContainer.perfectScrollbar("update"));
          }),
          (s.prototype.updatePageSettings = function (t) {
            var n = !1,
              s = [],
              i = [],
              o = [];
            for (
              t.selectedBet != this._previousSelectedBet &&
                ((this._previousSelectedBet = t.selectedBet), (n = !0)),
                l = 0;
              l < t.betOptions.length;
              l++
            )
              this._previousBetPageValues[l] !== t.betOptions[l] &&
                ((this._previousBetPageValues[l] = t.betOptions[l]), (n = !0));
            if (
              (this._previousHighestCoverableBet != t.highestCoverableBet &&
                (n = !0),
              (this._previousHighestCoverableBet = t.highestCoverableBet),
              n)
            ) {
              for (
                var a = e.globalFormatter.getMostPreciseNumberFormat(
                    t.betOptions
                  ),
                  l = 0;
                l < t.betOptions.length;
                l++
              ) {
                i.push(l);
                var r = t.betOptions[l],
                  c = e.globalFormatter.formatAmount2(r, a);
                s.push(c);
              }
              for (
                this._buttonManager.setActiveIndexes(i),
                  this._buttonManager.setValues(s),
                  l = 0;
                l < t.betOptions.length;
                l++
              )
                t.selectedBet === t.betOptions[l] && this.setSelectedValue(l),
                  t.highestCoverableBet >= t.betOptions[l] && o.push(l);
              this._buttonManager.setEnabledIndexes(o);
            }
          }),
          s
        );
      })(t.ControlPanelPage);
    t.ControlPanelBetPage = n;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function (t) {
      function e(e, n, s, i, o, a, l, r, c, h, u, p, d, m, _, g) {
        var E = t.call(this, e, n, s, o, i, l, r, a, c, h, _) || this;
        return (
          (E.PageButtonClicked = new Phaser.Signal()),
          (E.DownloadButtonClicked = new Phaser.Signal()),
          (E._scrollContentContainer = u),
          (E._guiSettingsHelper = g),
          (E._rulesTextTitleLabel = p),
          (E._topGradientContainer = m),
          (E._rulesTextLabelContainer = d),
          E.hide(),
          E
        );
      }
      return (
        __extends(e, t),
        (e.prototype.show = function () {
          if ((t.prototype.show.call(this), !this._gameRulesLoaded)) {
            this._gameRulesLoaded = !0;
            var e = this;
            this._rulesTextLabelContainer.load(
              this._guiSettingsHelper.externalGameRulesUrl,
              function () {
                jQuery(this).find("body").css("background-color", "black"),
                  jQuery("body").css("background-color", "black"),
                  jQuery(this).find("body").css("background-color", "black"),
                  jQuery(this).find("body").css("color", "white"),
                  jQuery(this).find("div").css("font-family", "Verlag"),
                  jQuery(this).find("div").css("margin-left", "0px"),
                  jQuery(this).find("div").css("margin-right", "0px"),
                  jQuery(this).find("body").css("color", "white"),
                  jQuery(this).find("p").css("color", "white"),
                  jQuery(this).find("p").css("font-family", "Verlag"),
                  jQuery(this)
                    .find(".dictionaryColumn")
                    .css("border-bottom", "1px solid white"),
                  jQuery(this)
                    .find(".dictionaryColumn")
                    .css("padding", "2px 0 2px 0"),
                  jQuery(this).find("div").css("font-size", "31px"),
                  jQuery(this).find("td").css("font-size", "31px"),
                  jQuery(this).find("p").css("font-size", "31px"),
                  jQuery(this).find("h1").css("font-size", "45px");
                var t = jQuery(this)
                  .find(".content")
                  .html()
                  .replace(",,,,,,,", "");
                jQuery(this).find(".content").html(t),
                  e.createKineticScroll(),
                  e._guiSettingsHelper.useKineticScroll &&
                    jQuery(this).children().first().css("height", "0px"),
                  e.relayout();
              }
            );
          }
          this._topGradientContainer.css("display", "block"),
            this._rulesTextLabelContainer.css("display", "block");
        }),
        (e.prototype.createKineticScroll = function () {
          this._guiSettingsHelper.useKineticScroll &&
            !this._kineticScrollCreated &&
            ((this._kineticScrollCreated = !0),
            Draggable.create("#" + this._rulesTextLabelContainer.attr("id"), {
              type: "scrollTop",
              edgeResistance: 0.75,
              throwProps: !0,
              force3D: !1,
            }),
            this._rulesTextLabelContainer.perfectScrollbar({
              suppressScrollX: !0,
            }));
        }),
        (e.prototype.hide = function (e) {
          void 0 === e && (e = !1),
            t.prototype.hide.call(this),
            this._topGradientContainer.css("display", "none"),
            this._rulesTextLabelContainer.css("display", "none");
        }),
        (e.prototype.relayout = function () {
          this.layout(
            this._storedOrientation,
            this._gameContainerArea,
            this._gameArea,
            this._hasDesktopGui,
            this._showingInfoBar,
            this._gameTopMargin
          );
        }),
        (e.prototype.layout = function (e, n, s, i, o, a) {
          (this._storedOrientation = e),
            (this._gameContainerArea = n),
            (this._gameArea = s),
            (this._hasDesktopGui = i),
            (this._showingInfoBar = o),
            (this._gameTopMargin = a),
            t.prototype.layout.call(this, e, n, s, i, o, a),
            i
              ? this.layoutPageForDesktop(e, n, s, i, a, o)
              : this.layoutPageForMobile(e, n, s, i, a, o),
            this._guiSettingsHelper.useKineticScroll &&
              this._kineticScrollCreated &&
              this._rulesTextLabelContainer.perfectScrollbar("update");
        }),
        (e.prototype.layoutPageForMobile = function (t, e, n, s, i, o) {
          if (t === tk_common.constants.OrientationEnum.LANDSCAPE) {
            var a = e.width / 1280,
              l = 1280 / e.width;
            this._rulesTextLabelContainer.css("top", "90px"),
              this._rulesTextLabelContainer.css("padding-left", 0),
              this._rulesTextLabelContainer.css("padding-top", 0),
              this._rulesTextLabelContainer.css("left", 0),
              this._rulesTextLabelContainer.css("width", 1280 * a + "px"),
              this._rulesTextLabelContainer.css(
                "-webkit-transform",
                "scale(" + l + ")"
              ),
              this._rulesTextLabelContainer.css(
                "-webkit-transform-origin",
                "0 0 0px"
              ),
              this._rulesTextLabelContainer.css(
                "-moz-transform",
                "scale(" + l + ")"
              ),
              this._rulesTextLabelContainer.css(
                "-moz-transform-origin",
                "0 0 0px"
              ),
              this._rulesTextLabelContainer.css(
                "-ms-transform",
                "scale(" + l + ")"
              ),
              this._rulesTextLabelContainer.css(
                "-ms-transform-origin",
                "0 0 0px"
              ),
              this._topGradientContainer.css("left", 0),
              this._topGradientContainer.css("top", "89px"),
              this._topGradientContainer.css("height", "40px"),
              this._topGradientContainer.css("width", "1200px"),
              o
                ? this._rulesTextLabelContainer.css("height", 550 * a + "px")
                : this._rulesTextLabelContainer.css("height", "550px"),
              this._rulesTextLabelContainer
                .find(".main_container")
                .css("padding-left", "140px"),
              this._rulesTextLabelContainer
                .find(".main_container")
                .css("padding-right", "50px"),
              this._rulesTextLabelContainer
                .find(".main_container")
                .css("height", e.height - 595 * l + "px"),
              this._rulesTextLabelContainer
                .find(".main_container")
                .css("width", "1150px"),
              this._rulesTextLabelContainer
                .find("div")
                .css("font-size", "31px"),
              this._rulesTextLabelContainer.find("td").css("font-size", "31px"),
              this._rulesTextLabelContainer.find("p").css("font-size", "31px"),
              this._rulesTextLabelContainer.find("h1").css("font-size", "42px"),
              this._rulesTextLabelContainer
                .find("h1")
                .css("font-weight", "normal"),
              this._rulesTextLabelContainer.find("h2").css("font-size", "42px"),
              this._rulesTextLabelContainer
                .find("h2")
                .css("font-weight", "normal"),
              (r = this._rulesTextLabelContainer.find(".main_container")).css(
                "-webkit-transform",
                "scale(" + a + ")"
              ),
              r.css("-webkit-transform-origin", "0 0 0px"),
              r.css("-moz-transform", "scale(" + a + ")"),
              r.css("-moz-transform-origin", "0 0 0px"),
              r.css("-ms-transform", "scale(" + a + ")"),
              r.css("-ms-transform-origin", "0 0 0px"),
              this._scrollContentContainer.css("width", "1280px"),
              this._scrollContentContainer.css(
                "-webkit-transform",
                "scale(" + a + ")"
              ),
              this._scrollContentContainer.css(
                "-webkit-transform-origin",
                "0 0 0px"
              ),
              this._scrollContentContainer.css(
                "-moz-transform",
                "scale(" + a + ")"
              ),
              this._scrollContentContainer.css(
                "-moz-transform-origin",
                "0 0 0px"
              ),
              this._scrollContentContainer.css(
                "-ms-transform",
                "scale(" + a + ")"
              ),
              this._scrollContentContainer.css(
                "-ms-transform-origin",
                "0 0 0px"
              ),
              this._rulesTextTitleLabel.css("top", "0px"),
              this._rulesTextTitleLabel.css("font-size", "45px"),
              this._rulesTextTitleLabel.css("padding-top", "30px"),
              this._rulesTextTitleLabel.css("padding-bottom", "20px"),
              this._rulesTextTitleLabel.css("padding-left", "130px"),
              this._rulesTextTitleLabel.css("padding-right", "120px");
          } else {
            var r;
            (a = e.width / 1280), (l = 1280 / e.width);
            this._rulesTextLabelContainer.css("left", 0),
              this._rulesTextLabelContainer.css("top", "155px"),
              this._rulesTextLabelContainer.css("padding-left", 0),
              this._rulesTextLabelContainer.css("padding-top", 0),
              this._rulesTextLabelContainer.css(
                "height",
                e.height - 595 * a + "px"
              ),
              this._rulesTextLabelContainer.css("width", 1280 * a + "px"),
              this._rulesTextLabelContainer.css(
                "-webkit-transform",
                "scale(" + l + ")"
              ),
              this._rulesTextLabelContainer.css(
                "-webkit-transform-origin",
                "0 0 0px"
              ),
              this._rulesTextLabelContainer.css(
                "-moz-transform",
                "scale(" + l + ")"
              ),
              this._rulesTextLabelContainer.css(
                "-moz-transform-origin",
                "0 0 0px"
              ),
              this._rulesTextLabelContainer.css(
                "-ms-transform",
                "scale(" + l + ")"
              ),
              this._rulesTextLabelContainer.css(
                "-ms-transform-origin",
                "0 0 0px"
              ),
              this._rulesTextLabelContainer
                .find(".main_container")
                .css("height", e.height - 595 * l + "px"),
              this._rulesTextLabelContainer
                .find(".main_container")
                .css("width", e.width + "px"),
              this._rulesTextLabelContainer
                .find(".main_container")
                .css("padding-left", 40 * a + "px"),
              this._rulesTextLabelContainer
                .find(".main_container")
                .css("padding-right", 40 * a + "px"),
              (r = this._rulesTextLabelContainer.find(".main_container")).css(
                "-webkit-transform",
                "scale(1)"
              ),
              r.css("-webkit-transform-origin", "0 0 0px"),
              r.css("-moz-transform", "scale(1)"),
              r.css("-moz-transform-origin", "0 0 0px"),
              r.css("-ms-transform", "scale(1)"),
              r.css("-ms-transform-origin", "0 0 0px"),
              this._rulesTextLabelContainer
                .find("div")
                .css("font-size", "22px"),
              this._rulesTextLabelContainer.find("td").css("font-size", "22px"),
              this._rulesTextLabelContainer.find("p").css("font-size", "22px"),
              this._rulesTextLabelContainer.find("h1").css("font-size", "30px"),
              this._rulesTextLabelContainer.find("h1").css("font-size", "30px"),
              this._rulesTextLabelContainer
                .find("h1")
                .css("font-weight", "normal"),
              this._rulesTextLabelContainer.find("h2").css("font-size", "30px"),
              this._rulesTextLabelContainer
                .find("h2")
                .css("font-weight", "normal"),
              this._scrollContentContainer.css("width", "1280px"),
              this._scrollContentContainer.css(
                "-webkit-transform",
                "scale(" + a + ")"
              ),
              this._scrollContentContainer.css(
                "-webkit-transform-origin",
                "0 0 0px"
              ),
              this._scrollContentContainer.css(
                "-moz-transform",
                "scale(" + a + ")"
              ),
              this._scrollContentContainer.css(
                "-moz-transform-origin",
                "0 0 0px"
              ),
              this._scrollContentContainer.css(
                "-ms-transform",
                "scale(" + a + ")"
              ),
              this._scrollContentContainer.css(
                "-ms-transform-origin",
                "0 0 0px"
              ),
              this._rulesTextTitleLabel.css("font-size", "78px"),
              this._rulesTextTitleLabel.css("top", "30px"),
              this._rulesTextTitleLabel.css("padding-bottom", "30px"),
              this._rulesTextTitleLabel.css("padding-left", "126px"),
              this._topGradientContainer.css("left", 0),
              this._topGradientContainer.css("top", "154px"),
              this._topGradientContainer.css("height", "60px"),
              this._topGradientContainer.css("width", "1200px");
          }
        }),
        (e.prototype.layoutPageForDesktop = function (t, e, n, s, i, o) {
          var a = e.width / 1280,
            l = 1280 / e.width;
          this._rulesTextLabelContainer.css("top", "90px"),
            this._rulesTextLabelContainer.css("padding-left", 0),
            this._rulesTextLabelContainer.css("padding-top", 0),
            this._rulesTextLabelContainer.css("left", 0),
            this._rulesTextLabelContainer.css("width", 1280 * a + "px"),
            this._rulesTextLabelContainer.css(
              "-webkit-transform",
              "scale(" + l + ")"
            ),
            this._rulesTextLabelContainer.css(
              "-webkit-transform-origin",
              "0 0 0px"
            ),
            this._rulesTextLabelContainer.css(
              "-moz-transform",
              "scale(" + l + ")"
            ),
            this._rulesTextLabelContainer.css(
              "-moz-transform-origin",
              "0 0 0px"
            ),
            this._rulesTextLabelContainer.css(
              "-ms-transform",
              "scale(" + l + ")"
            ),
            this._rulesTextLabelContainer.css(
              "-ms-transform-origin",
              "0 0 0px"
            ),
            this._topGradientContainer.css("left", 0),
            this._topGradientContainer.css("top", "89px"),
            this._topGradientContainer.css("height", "40px"),
            this._topGradientContainer.css("width", "1200px"),
            o
              ? this._rulesTextLabelContainer.css("height", 557 * a + "px")
              : this._rulesTextLabelContainer.css("height", "550px"),
            this._scrollContentContainer.css("width", "1280px"),
            this._scrollContentContainer.css(
              "-webkit-transform",
              "scale(" + a + ")"
            ),
            this._scrollContentContainer.css(
              "-webkit-transform-origin",
              "0 0 0px"
            ),
            this._scrollContentContainer.css(
              "-moz-transform",
              "scale(" + a + ")"
            ),
            this._scrollContentContainer.css(
              "-moz-transform-origin",
              "0 0 0px"
            ),
            this._scrollContentContainer.css(
              "-ms-transform",
              "scale(" + a + ")"
            ),
            this._scrollContentContainer.css("-ms-transform-origin", "0 0 0px"),
            this._rulesTextLabelContainer
              .find(".main_container")
              .css("padding-left", 140 * a + "px"),
            this._rulesTextLabelContainer
              .find(".main_container")
              .css("padding-right", "50px"),
            this._rulesTextLabelContainer
              .find(".main_container")
              .css("height", this._rulesTextLabelContainer.height + "px"),
            this._rulesTextLabelContainer
              .find(".main_container")
              .css("width", "1150px"),
            this._rulesTextLabelContainer.find("div").css("font-size", "31px"),
            this._rulesTextLabelContainer.find("td").css("font-size", "31px"),
            this._rulesTextLabelContainer.find("p").css("font-size", "31px"),
            this._rulesTextLabelContainer.find("h1").css("font-size", "45px");
          var r = this._rulesTextLabelContainer.find(".main_container");
          r.css("-webkit-transform", "scale(" + a + ")"),
            r.css("-webkit-transform-origin", "0 0 0px"),
            r.css("-moz-transform", "scale(" + a + ")"),
            r.css("-moz-transform-origin", "0 0 0px"),
            r.css("-ms-transform", "scale(" + a + ")"),
            r.css("-ms-transform-origin", "0 0 0px"),
            this._rulesTextTitleLabel.css("top", "0px"),
            this._rulesTextTitleLabel.css("font-size", "45px"),
            this._rulesTextTitleLabel.css("padding-top", "30px"),
            this._rulesTextTitleLabel.css("padding-bottom", "20px"),
            this._rulesTextTitleLabel.css("padding-left", "130px"),
            this._rulesTextTitleLabel.css("padding-right", "120px");
        }),
        (e.prototype.handlePageButtonClicked = function (t) {
          this.PageButtonClicked.dispatch(t);
        }),
        e
      );
    })(t.ControlPanelPage);
    t.ControlPanelGameRulesPage = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function (e) {
      function n(t, n, s, i, o, a, l, r, c, h, u, p, d, m, _, g, E) {
        var b = e.call(this, t, n, s, o, i, l, r, a, c, h, g) || this;
        return (
          (b.DetailsButtonClicked = new Phaser.Signal()),
          (b._scrollContentContainer = u),
          (b._guiSettingsHelper = E),
          (b._rulesTextTitleLabel = p),
          (b._topGradientContainer = _),
          (b._rulesTextLabel = d),
          (b._historyRowsContainer = m),
          b._guiSettingsHelper.useKineticScroll &&
            (Draggable.create("#" + b._historyRowsContainer.attr("id"), {
              type: "scrollTop",
              edgeResistance: 0.75,
              throwProps: !0,
            }),
            b._historyRowsContainer.perfectScrollbar({ suppressScrollX: !0 })),
          b.hide(),
          b
        );
      }
      return (
        __extends(n, e),
        (n.prototype.initiateDetailButtons = function (e, n) {
          (this._buttonManager = new t.ButtonManager(e, n)),
            this._buttonManager.ButtonClicked.add(
              this.handleDetailButtonClicked,
              this
            ),
            this._buttonManager.hide();
        }),
        (n.prototype.handleDetailButtonClicked = function (t) {
          this.DetailsButtonClicked.dispatch(t);
        }),
        (n.prototype.setHistoryListContainer = function (t) {
          this._historyListContainer = t;
        }),
        (n.prototype.setRowsElements = function (t) {
          this._rowsElements = t;
        }),
        (n.prototype.setTitleLabelElements = function (t) {
          this._titleLabelElements = t;
        }),
        (n.prototype.setHistoryData = function (t) {
          for (var e = [], n = 0; n < this._rowsElements.length; n++)
            n >= t.length
              ? (this._rowsElements[n][1].text(""),
                this._rowsElements[n][2].text(""),
                this._rowsElements[n][3].text(""),
                this._rowsElements[n][4].text(""))
              : (this._rowsElements[n][1].text(t[n].time),
                this._rowsElements[n][2].text(t[n].date),
                this._rowsElements[n][3].text(t[n].bet),
                this._rowsElements[n][4].text(t[n].win),
                e.push(n));
          t.length > 0 &&
            t[0].showDetailsButton &&
            this._buttonManager.setActiveIndexes(e);
        }),
        (n.prototype.show = function () {
          e.prototype.show.call(this),
            this._topGradientContainer.css("display", "block"),
            this._historyRowsContainer.css("display", "block");
        }),
        (n.prototype.hide = function (t) {
          void 0 === t && (t = !1),
            e.prototype.hide.call(this),
            void 0 !== this._buttonManager && this._buttonManager.hide(),
            this._topGradientContainer.css("display", "none"),
            this._historyRowsContainer.css("display", "none");
        }),
        (n.prototype.layout = function (t, n, s, i, o, a) {
          e.prototype.layout.call(this, t, n, s, i, o, a),
            i
              ? this.layoutPageForDesktop(t, n, s, i, a, o)
              : this.layoutPageForMobile(t, n, s, i, a, o),
            this._guiSettingsHelper.useKineticScroll &&
              this._historyRowsContainer.perfectScrollbar("update");
        }),
        (n.prototype.layoutPageForMobile = function (t, e, n, s, i, o) {
          if (t === tk_common.constants.OrientationEnum.LANDSCAPE) {
            var a = e.width / 1280,
              l = 1280 / e.width;
            this._historyListContainer.css("padding-top", "20px"),
              this._historyListContainer.css("padding-bottom", "50px"),
              (this._buttonManager.minWidth = "150px"),
              (this._buttonManager.paddingTop = "3px"),
              (this._buttonManager.paddingBottom = "3px"),
              (this._buttonManager.paddingLeft = "20px"),
              (this._buttonManager.paddingRight = "20px"),
              (this._buttonManager.marginTop = "0"),
              (this._buttonManager.marginLeft = "0"),
              (this._buttonManager.marginRight = "0"),
              (this._buttonManager.marginBottom = "0px"),
              (this._buttonManager.fontSize = "25px"),
              (this._buttonManager.borderSize = "3px"),
              this._historyRowsContainer.css("top", "90px"),
              this._historyRowsContainer.css("padding-left", 0),
              this._historyRowsContainer.css("padding-top", 0),
              this._historyRowsContainer.css("left", 0),
              this._historyRowsContainer.css("width", 1280 * a + "px"),
              this._historyRowsContainer.css(
                "-webkit-transform",
                "scale(" + l + ")"
              ),
              this._historyRowsContainer.css(
                "-webkit-transform-origin",
                "0 0 0px"
              ),
              this._historyRowsContainer.css(
                "-moz-transform",
                "scale(" + l + ")"
              ),
              this._historyRowsContainer.css(
                "-moz-transform-origin",
                "0 0 0px"
              ),
              this._historyRowsContainer.css(
                "-ms-transform",
                "scale(" + l + ")"
              ),
              this._historyRowsContainer.css("-ms-transform-origin", "0 0 0px"),
              this._topGradientContainer.css("left", 0),
              this._topGradientContainer.css("top", "89px"),
              this._topGradientContainer.css("height", "40px"),
              this._topGradientContainer.css("width", "1200px"),
              o
                ? this._historyRowsContainer.css("height", 520 * a + "px")
                : this._historyRowsContainer.css("height", "550px"),
              this._scrollContentContainer.css("width", "1280px"),
              this._scrollContentContainer.css(
                "-webkit-transform",
                "scale(" + a + ")"
              ),
              this._scrollContentContainer.css(
                "-webkit-transform-origin",
                "0 0 0px"
              ),
              this._scrollContentContainer.css(
                "-moz-transform",
                "scale(" + a + ")"
              ),
              this._scrollContentContainer.css(
                "-moz-transform-origin",
                "0 0 0px"
              ),
              this._scrollContentContainer.css(
                "-ms-transform",
                "scale(" + a + ")"
              ),
              this._scrollContentContainer.css(
                "-ms-transform-origin",
                "0 0 0px"
              ),
              this._rulesTextTitleLabel.css("top", "0px"),
              this._rulesTextTitleLabel.css("font-size", "45px"),
              this._rulesTextTitleLabel.css("padding-top", "30px"),
              this._rulesTextTitleLabel.css("padding-bottom", "20px"),
              this._rulesTextTitleLabel.css("padding-left", "130px"),
              this._rulesTextTitleLabel.css("padding-right", "120px"),
              this._rulesTextLabel.css("width", "1280px"),
              this._rulesTextLabel.css("left", "0px"),
              this._rulesTextLabel.css("padding-left", "130px"),
              this._rulesTextLabel.css("padding-right", "130px"),
              this._rulesTextLabel.css("padding-top", "0px"),
              this._rulesTextLabel.css("padding-bottom", "20px"),
              this._rulesTextLabel.css("font-size", "40px"),
              this._rulesTextLabel.css("line-height", "50px"),
              this._rulesTextLabel.css("top", "0px");
            for (var r = 0; r < 10; r++)
              this._rowsElements[r][0].css("width", "100%"),
                this._rowsElements[r][0].css("margin-bottom", "60px"),
                this._rowsElements[r][0].css("float", "left"),
                this._rowsElements[r][0].css("left", "135px"),
                this._rowsElements[r][1].css("left", "0px"),
                this._rowsElements[r][1].css("font-size", "24px"),
                this._rowsElements[r][2].css("left", "140px"),
                this._rowsElements[r][2].css("font-size", "24px"),
                this._rowsElements[r][2].css("white-space", "nowrap"),
                this._rowsElements[r][3].css("left", "300px"),
                this._rowsElements[r][3].css("font-size", "24px"),
                this._rowsElements[r][3].css("white-space", "nowrap"),
                this._rowsElements[r][4].css("left", "465px"),
                this._rowsElements[r][4].css("font-size", "24px"),
                this._rowsElements[r][4].css("white-space", "nowrap"),
                this._rowsElements[r][5].css("top", "-5px"),
                this._rowsElements[r][5].css("left", "880px");
            this._titleLabelElements[0].css("left", "135px"),
              this._titleLabelElements[0].css("top", "95px"),
              this._titleLabelElements[1].css("left", "0px"),
              this._titleLabelElements[1].css("font-size", "24px"),
              this._titleLabelElements[2].css("left", "140px"),
              this._titleLabelElements[2].css("font-size", "24px"),
              this._titleLabelElements[3].css("left", "300px"),
              this._titleLabelElements[3].css("font-size", "24px"),
              this._titleLabelElements[4].css("left", "465px"),
              this._titleLabelElements[4].css("font-size", "24px"),
              ("zh" !== this._guiSettingsHelper.activeLanguageIso &&
                "ko" !== this._guiSettingsHelper.activeLanguageIso &&
                "ja" !== this._guiSettingsHelper.activeLanguageIso &&
                "th" !== this._guiSettingsHelper.activeLanguageIso) ||
                (this._titleLabelElements[1].css("width", "100px"),
                this._titleLabelElements[2].css("width", "100px"),
                this._titleLabelElements[3].css("width", "150px"),
                this._titleLabelElements[4].css("width", "150px"));
          } else {
            (a = e.width / 1280), (l = 1280 / e.width);
            this._historyRowsContainer.css("left", 0),
              this._historyRowsContainer.css("top", "155px"),
              this._historyRowsContainer.css("padding-left", 0),
              this._historyRowsContainer.css("padding-top", 0),
              this._historyListContainer.css("padding-top", "40px"),
              this._historyListContainer.css("padding-bottom", "50px"),
              (this._buttonManager.minWidth = "150px"),
              (this._buttonManager.paddingTop = "7px"),
              (this._buttonManager.paddingBottom = "7px"),
              (this._buttonManager.paddingLeft = "20px"),
              (this._buttonManager.paddingRight = "20px"),
              (this._buttonManager.marginTop = "0"),
              (this._buttonManager.marginLeft = "0"),
              (this._buttonManager.marginRight = "0"),
              (this._buttonManager.marginBottom = "0px"),
              (this._buttonManager.fontSize = "32px"),
              (this._buttonManager.borderSize = "3px"),
              o
                ? this._historyRowsContainer.css(
                    "height",
                    e.height - 595 * a + "px"
                  )
                : this._historyRowsContainer.css(
                    "height",
                    e.height - 565 * a + "px"
                  ),
              this._historyRowsContainer.css("width", 1280 * a + "px"),
              this._historyRowsContainer.css(
                "-webkit-transform",
                "scale(" + l + ")"
              ),
              this._historyRowsContainer.css(
                "-webkit-transform-origin",
                "0 0 0px"
              ),
              this._historyRowsContainer.css(
                "-moz-transform",
                "scale(" + l + ")"
              ),
              this._historyRowsContainer.css(
                "-moz-transform-origin",
                "0 0 0px"
              ),
              this._historyRowsContainer.css(
                "-ms-transform",
                "scale(" + l + ")"
              ),
              this._historyRowsContainer.css("-ms-transform-origin", "0 0 0px"),
              this._scrollContentContainer.css("width", "1280px"),
              this._scrollContentContainer.css(
                "-webkit-transform",
                "scale(" + a + ")"
              ),
              this._scrollContentContainer.css(
                "-webkit-transform-origin",
                "0 0 0px"
              ),
              this._scrollContentContainer.css(
                "-moz-transform",
                "scale(" + a + ")"
              ),
              this._scrollContentContainer.css(
                "-moz-transform-origin",
                "0 0 0px"
              ),
              this._scrollContentContainer.css(
                "-ms-transform",
                "scale(" + a + ")"
              ),
              this._scrollContentContainer.css(
                "-ms-transform-origin",
                "0 0 0px"
              ),
              this._rulesTextTitleLabel.css("font-size", "78px"),
              this._rulesTextTitleLabel.css("top", "60px"),
              this._rulesTextTitleLabel.css("padding-bottom", "100px"),
              this._rulesTextTitleLabel.css("padding-left", "126px"),
              this._rulesTextTitleLabel.css("padding-top", ""),
              this._rulesTextLabel.css("width", "1280px"),
              this._rulesTextLabel.css("padding-left", "133px"),
              this._rulesTextLabel.css("padding-right", "130px"),
              this._rulesTextLabel.css("top", "62px"),
              this._rulesTextLabel.css("padding-bottom", "0px"),
              this._rulesTextLabel.css("font-size", "71px"),
              this._rulesTextLabel.css("line-height", "79px"),
              this._topGradientContainer.css("left", 0),
              this._topGradientContainer.css("top", "154px"),
              this._topGradientContainer.css("height", "60px"),
              this._topGradientContainer.css("width", "1200px");
            for (r = 0; r < 10; r++)
              this._rowsElements[r][0].css("width", "100%"),
                this._rowsElements[r][0].css("margin-bottom", "90px"),
                this._rowsElements[r][0].css("float", "left"),
                this._rowsElements[r][0].css("left", "135px"),
                this._rowsElements[r][1].css("left", "0px"),
                this._rowsElements[r][1].css("font-size", "40px"),
                this._rowsElements[r][2].css("left", "180px"),
                this._rowsElements[r][2].css("font-size", "40px"),
                this._rowsElements[r][2].css("white-space", "nowrap"),
                this._rowsElements[r][3].css("left", "450px"),
                this._rowsElements[r][3].css("font-size", "40px"),
                this._rowsElements[r][3].css("white-space", "nowrap"),
                this._rowsElements[r][4].css("left", "665px"),
                this._rowsElements[r][4].css("font-size", "40px"),
                this._rowsElements[r][4].css("white-space", "nowrap"),
                this._rowsElements[r][5].css("top", "0px"),
                this._rowsElements[r][5].css("left", "900px");
            this._titleLabelElements[0].css("left", "135px"),
              this._titleLabelElements[0].css("top", "165px"),
              this._titleLabelElements[1].css("left", "0px"),
              this._titleLabelElements[1].css("font-size", "40px"),
              this._titleLabelElements[2].css("left", "180px"),
              this._titleLabelElements[2].css("font-size", "40px"),
              this._titleLabelElements[3].css("left", "450px"),
              this._titleLabelElements[3].css("font-size", "40px"),
              this._titleLabelElements[4].css("left", "665px"),
              this._titleLabelElements[4].css("font-size", "40px"),
              ("zh" !== this._guiSettingsHelper.activeLanguageIso &&
                "ko" !== this._guiSettingsHelper.activeLanguageIso &&
                "ja" !== this._guiSettingsHelper.activeLanguageIso &&
                "th" !== this._guiSettingsHelper.activeLanguageIso) ||
                (this._titleLabelElements[1].css("width", "100px"),
                this._titleLabelElements[2].css("width", "100px"),
                this._titleLabelElements[3].css("width", "150px"),
                this._titleLabelElements[4].css("width", "190px"));
          }
          this._buttonManager.layout(t, e, n);
        }),
        (n.prototype.layoutPageForDesktop = function (t, e, n, s, i, o) {
          var a = e.width / 1280,
            l = 1280 / e.width;
          this._historyRowsContainer.css("top", "90px"),
            this._historyRowsContainer.css("padding-left", 0),
            this._historyRowsContainer.css("padding-top", 0),
            this._historyRowsContainer.css("left", 0),
            this._historyRowsContainer.css("width", 1280 * a + "px"),
            this._historyRowsContainer.css(
              "-webkit-transform",
              "scale(" + l + ")"
            ),
            this._historyRowsContainer.css(
              "-webkit-transform-origin",
              "0 0 0px"
            ),
            this._historyRowsContainer.css(
              "-moz-transform",
              "scale(" + l + ")"
            ),
            this._historyRowsContainer.css("-moz-transform-origin", "0 0 0px"),
            this._historyRowsContainer.css("-ms-transform", "scale(" + l + ")"),
            this._historyRowsContainer.css("-ms-transform-origin", "0 0 0px"),
            this._historyListContainer.css("padding-top", "20px"),
            this._historyListContainer.css("padding-bottom", "50px"),
            this._topGradientContainer.css("left", 0),
            this._topGradientContainer.css("top", "89px"),
            this._topGradientContainer.css("height", "40px"),
            this._topGradientContainer.css("width", "1200px"),
            (this._buttonManager.minWidth = "150px"),
            (this._buttonManager.paddingTop = "3px"),
            (this._buttonManager.paddingBottom = "3px"),
            (this._buttonManager.paddingLeft = "20px"),
            (this._buttonManager.paddingRight = "20px"),
            (this._buttonManager.marginTop = "0"),
            (this._buttonManager.marginLeft = "0"),
            (this._buttonManager.marginRight = "0"),
            (this._buttonManager.marginBottom = "0px"),
            (this._buttonManager.fontSize = "30px"),
            (this._buttonManager.borderSize = "3px"),
            o
              ? this._historyRowsContainer.css("height", 557 * a + "px")
              : this._historyRowsContainer.css("height", "550px"),
            this._scrollContentContainer.css("width", "1280px"),
            this._scrollContentContainer.css(
              "-webkit-transform",
              "scale(" + a + ")"
            ),
            this._scrollContentContainer.css(
              "-webkit-transform-origin",
              "0 0 0px"
            ),
            this._scrollContentContainer.css(
              "-moz-transform",
              "scale(" + a + ")"
            ),
            this._scrollContentContainer.css(
              "-moz-transform-origin",
              "0 0 0px"
            ),
            this._scrollContentContainer.css(
              "-ms-transform",
              "scale(" + a + ")"
            ),
            this._scrollContentContainer.css("-ms-transform-origin", "0 0 0px"),
            this._rulesTextTitleLabel.css("top", "0px"),
            this._rulesTextTitleLabel.css("font-size", "45px"),
            this._rulesTextTitleLabel.css("padding-top", "30px"),
            this._rulesTextTitleLabel.css("padding-bottom", "20px"),
            this._rulesTextTitleLabel.css("padding-left", "130px"),
            this._rulesTextTitleLabel.css("padding-right", "120px"),
            this._rulesTextLabel.css("width", "1280px"),
            this._rulesTextLabel.css("left", "0px"),
            this._rulesTextLabel.css("padding-left", "130px"),
            this._rulesTextLabel.css("padding-right", "130px"),
            this._rulesTextLabel.css("padding-top", "0px"),
            this._rulesTextLabel.css("padding-bottom", "20px"),
            this._rulesTextLabel.css("font-size", "40px"),
            this._rulesTextLabel.css("line-height", "50px"),
            this._rulesTextLabel.css("top", "0px");
          for (var r = 0; r < 10; r++)
            this._rowsElements[r][0].css("width", "100%"),
              this._rowsElements[r][0].css("margin-bottom", "70px"),
              this._rowsElements[r][0].css("float", "left"),
              this._rowsElements[r][0].css("left", "135px"),
              this._rowsElements[r][1].css("left", "0px"),
              this._rowsElements[r][1].css("font-size", "24px"),
              this._rowsElements[r][2].css("left", "180px"),
              this._rowsElements[r][2].css("font-size", "24px"),
              this._rowsElements[r][3].css("left", "460px"),
              this._rowsElements[r][3].css("font-size", "24px"),
              this._rowsElements[r][4].css("left", "660px"),
              this._rowsElements[r][4].css("font-size", "24px"),
              this._rowsElements[r][5].css("top", "-5px"),
              this._rowsElements[r][5].css("left", "880px");
          this._buttonManager.layout(t, e, n),
            this._titleLabelElements[0].css("left", "135px"),
            this._titleLabelElements[0].css("top", "100px"),
            this._titleLabelElements[1].css("left", "0px"),
            this._titleLabelElements[1].css("font-size", "24px"),
            this._titleLabelElements[2].css("left", "180px"),
            this._titleLabelElements[2].css("font-size", "24px"),
            this._titleLabelElements[3].css("left", "460px"),
            this._titleLabelElements[3].css("font-size", "24px"),
            this._titleLabelElements[4].css("left", "660px"),
            this._titleLabelElements[4].css("font-size", "24px"),
            ("zh" !== this._guiSettingsHelper.activeLanguageIso &&
              "ko" !== this._guiSettingsHelper.activeLanguageIso &&
              "ja" !== this._guiSettingsHelper.activeLanguageIso &&
              "th" !== this._guiSettingsHelper.activeLanguageIso) ||
              (this._titleLabelElements[1].css("width", "100px"),
              this._titleLabelElements[2].css("width", "100px"),
              this._titleLabelElements[3].css("width", "150px"),
              this._titleLabelElements[4].css("width", "190px"));
        }),
        n
      );
    })(t.ControlPanelPage);
    t.ControlPanelHistoryPage = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function (t) {
      function e(e, n, s, i, o, a, l, r, c, h, u, p, d, m, _, g) {
        var E = t.call(this, e, n, s, o, i, r, c, a, l, h, _) || this;
        return (
          (E._paytableHelper = m),
          (E._guiSettingsHelper = g),
          (E.PageButtonClicked = new Phaser.Signal()),
          (E._topGradientContainer = d),
          (E._paytableScrollContainerElement = u),
          (E._paytableContainerElement = p),
          E._guiSettingsHelper.useKineticScroll &&
            (Draggable.create("#" + u.attr("id"), {
              type: "scrollTop",
              edgeResistance: 0.75,
              throwProps: !0,
              force3D: !1,
            }),
            u.perfectScrollbar({ suppressScrollX: !0 })),
          E.hide(),
          E
        );
      }
      return (
        __extends(e, t),
        (e.prototype.show = function () {
          t.prototype.show.call(this),
            this._topGradientContainer.css("display", "block"),
            this._paytableContainerElement.css("display", "block"),
            this._paytableScrollContainerElement.css("display", "block");
        }),
        (e.prototype.hide = function () {
          t.prototype.hide.call(this),
            this._topGradientContainer.css("display", "none"),
            this._paytableContainerElement.css("display", "none"),
            this._paytableScrollContainerElement.css("display", "none");
        }),
        (e.prototype.layout = function (e, n, s, i, o, a) {
          t.prototype.layout.call(this, e, n, s, i, o, a),
            null !== this._paytableHelper &&
              this._paytableHelper.layoutPageContent(
                e,
                n,
                s,
                o,
                this._guiSettingsHelper.activeLanguageIso,
                this._guiSettingsHelper.activeCurrencyIso
              ),
            i
              ? this.layoutPageForDesktop(e, n, s, i, a, o)
              : this.layoutPageForMobile(e, n, s, i, a, o),
            this._guiSettingsHelper.useKineticScroll &&
              this._paytableScrollContainerElement.perfectScrollbar("update");
        }),
        (e.prototype.layoutPageForDesktop = function (t, e, n, s, i, o) {
          var a = e.width / 1280,
            l = 1280 / e.width;
          o
            ? this._paytableScrollContainerElement.css("height", 558 * a + "px")
            : this._paytableScrollContainerElement.css(
                "height",
                e.height * a - 550 + "px"
              ),
            this._paytableScrollContainerElement.css(
              "-webkit-transform",
              "scale(" + l + ")"
            ),
            this._paytableScrollContainerElement.css(
              "-webkit-transform-origin",
              "0 0 0px"
            ),
            this._paytableScrollContainerElement.css(
              "-moz-transform",
              "scale(" + l + ")"
            ),
            this._paytableScrollContainerElement.css(
              "-moz-transform-origin",
              "0 0 0px"
            ),
            this._paytableScrollContainerElement.css(
              "-ms-transform",
              "scale(" + l + ")"
            ),
            this._paytableScrollContainerElement.css(
              "-ms-transform-origin",
              "0 0 0px"
            ),
            this._paytableScrollContainerElement.css("top", "90px"),
            this._paytableScrollContainerElement.css("width", 1280 * a + "px"),
            this._paytableScrollContainerElement.css("padding-left", 0),
            this._paytableScrollContainerElement.css("padding-top", 0),
            this._paytableContainerElement.css("left", 0),
            this._paytableContainerElement.css("width", "1280px"),
            this._paytableContainerElement.css("overflow", "hidden"),
            this._paytableContainerElement.css(
              "-webkit-transform",
              "scale(" + a + ")"
            ),
            this._paytableContainerElement.css(
              "-webkit-transform-origin",
              "0 0 0px"
            ),
            this._paytableContainerElement.css(
              "-moz-transform",
              "scale(" + a + ")"
            ),
            this._paytableContainerElement.css(
              "-moz-transform-origin",
              "0 0 0px"
            ),
            this._paytableContainerElement.css(
              "-ms-transform",
              "scale(" + a + ")"
            ),
            this._paytableContainerElement.css(
              "-ms-transform-origin",
              "0 0 0px"
            ),
            this._topGradientContainer.css("left", 0),
            this._topGradientContainer.css("top", "90px"),
            this._topGradientContainer.css("height", "40px"),
            this._topGradientContainer.css("width", "1200px");
        }),
        (e.prototype.layoutPageForMobile = function (t, e, n, s, i, o) {
          var a = e.width / 1280,
            l = 1280 / e.width;
          if (t === tk_common.constants.OrientationEnum.LANDSCAPE)
            o
              ? this._paytableScrollContainerElement.css(
                  "height",
                  545 * a + "px"
                )
              : this._paytableScrollContainerElement.css(
                  "height",
                  e.height * a - 550 + "px"
                ),
              this._paytableScrollContainerElement.css(
                "-webkit-transform",
                "scale(" + l + ")"
              ),
              this._paytableScrollContainerElement.css(
                "-webkit-transform-origin",
                "0 0 0px"
              ),
              this._paytableScrollContainerElement.css(
                "-moz-transform",
                "scale(" + l + ")"
              ),
              this._paytableScrollContainerElement.css(
                "-moz-transform-origin",
                "0 0 0px"
              ),
              this._paytableScrollContainerElement.css(
                "-ms-transform",
                "scale(" + l + ")"
              ),
              this._paytableScrollContainerElement.css(
                "-ms-transform-origin",
                "0 0 0px"
              ),
              this._paytableScrollContainerElement.css("top", "90px"),
              this._paytableScrollContainerElement.css(
                "width",
                1280 * a + "px"
              ),
              this._paytableScrollContainerElement.css("padding-left", 0),
              this._paytableScrollContainerElement.css("padding-top", 0),
              this._paytableContainerElement.css("left", 0),
              this._paytableContainerElement.css("width", "1280px"),
              this._paytableContainerElement.css("overflow", "hidden"),
              this._paytableContainerElement.css(
                "-webkit-transform",
                "scale(" + a + ")"
              ),
              this._paytableContainerElement.css(
                "-webkit-transform-origin",
                "0 0 0px"
              ),
              this._paytableContainerElement.css(
                "-moz-transform",
                "scale(" + a + ")"
              ),
              this._paytableContainerElement.css(
                "-moz-transform-origin",
                "0 0 0px"
              ),
              this._paytableContainerElement.css(
                "-ms-transform",
                "scale(" + a + ")"
              ),
              this._paytableContainerElement.css(
                "-ms-transform-origin",
                "0 0 0px"
              ),
              this._topGradientContainer.css("left", 0),
              this._topGradientContainer.css("top", "90px"),
              this._topGradientContainer.css("height", "40px"),
              this._topGradientContainer.css("width", "1200px");
          else {
            (a = e.width / 1280), (l = 1280 / e.width);
            this._paytableScrollContainerElement.css("left", 0),
              this._paytableScrollContainerElement.css("top", "155px"),
              o
                ? this._paytableScrollContainerElement.css(
                    "height",
                    e.height - 595 * a + "px"
                  )
                : this._paytableScrollContainerElement.css(
                    "height",
                    e.height - 565 * a + "px"
                  ),
              this._paytableScrollContainerElement.css(
                "width",
                1280 * a + "px"
              ),
              this._paytableScrollContainerElement.css(
                "-webkit-transform",
                "scale(" + l + ")"
              ),
              this._paytableScrollContainerElement.css(
                "-webkit-transform-origin",
                "0 0 0px"
              ),
              this._paytableScrollContainerElement.css(
                "-moz-transform",
                "scale(" + l + ")"
              ),
              this._paytableScrollContainerElement.css(
                "-moz-transform-origin",
                "0 0 0px"
              ),
              this._paytableScrollContainerElement.css(
                "-ms-transform",
                "scale(" + l + ")"
              ),
              this._paytableScrollContainerElement.css(
                "-ms-transform-origin",
                "0 0 0px"
              ),
              this._paytableContainerElement.css("width", "1280px"),
              this._paytableContainerElement.css(
                "-webkit-transform",
                "scale(" + a + ")"
              ),
              this._paytableContainerElement.css(
                "-webkit-transform-origin",
                "0 0 0px"
              ),
              this._paytableContainerElement.css(
                "-moz-transform",
                "scale(" + a + ")"
              ),
              this._paytableContainerElement.css(
                "-moz-transform-origin",
                "0 0 0px"
              ),
              this._paytableContainerElement.css(
                "-ms-transform",
                "scale(" + a + ")"
              ),
              this._paytableContainerElement.css(
                "-ms-transform-origin",
                "0 0 0px"
              ),
              this._topGradientContainer.css("left", 0),
              this._topGradientContainer.css("top", "156px"),
              this._topGradientContainer.css("height", "60px"),
              this._topGradientContainer.css("width", "1200px");
          }
        }),
        (e.prototype.handlePageButtonClicked = function (t) {
          this.PageButtonClicked.dispatch(t);
        }),
        e
      );
    })(t.ControlPanelPage);
    t.ControlPanelPaytablePage = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = tk_common.slots.gui.PageIds,
      n = (function () {
        function n(t, e, n) {
          (this.AutoplayValueChanged = new Phaser.Signal()),
            (this.StopOnFeatureWonValueChanged = new Phaser.Signal()),
            (this.BetPageButtonClicked = new Phaser.Signal()),
            (this.DetailsButtonClicked = new Phaser.Signal()),
            (this.PageButtonClicked = new Phaser.Signal()),
            (this.BackButtonClicked = new Phaser.Signal()),
            (this._gameRulesPhraseId = n),
            (this._paytableHelper = t),
            (this._guiSettingsHelper = e),
            (this._pages = []),
            (this._currentPage = null),
            (this._isVisible = !1);
        }
        return (
          (n.prototype.getAutoPlayLossLimitValue = function () {
            return this._autoplayPage.getAutoPlayLossLimitValue();
          }),
          (n.prototype.getAutoPlaySingleWinLimitValue = function () {
            return this._autoplayPage.getAutoPlaySingleWinLimitValue();
          }),
          Object.defineProperty(n.prototype, "numPadManager", {
            set: function (t) {
              (this._numPadManager = t), (this._autoplayPage.numPadManager = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "stopOnFeatureWonChecked", {
            set: function (t) {
              this._autoplayPage.stopOnFeatureWonChecked = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "showAutoplayStopOptions", {
            set: function (t) {
              this._autoplayPage.showAutoplayStopOptions = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "autoplayLossLimitRequired", {
            set: function (t) {
              this._autoplayPage.lossLimitRequired = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "autoplayPage", {
            get: function () {
              return this._autoplayPage;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "isVisible", {
            get: function () {
              return this._isVisible;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "currentPage", {
            get: function () {
              return this._currentPageId;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (n.prototype.setHistoryData = function (t) {
            this._historyPage.setHistoryData(t);
          }),
          Object.defineProperty(n.prototype, "showStopAutoplayOnFeatureWon", {
            set: function (t) {
              this._autoplayPage.hasStopOnFeatureWon = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (n.prototype.initBetPage = function (
            e,
            n,
            s,
            i,
            o,
            a,
            l,
            r,
            c,
            h,
            u,
            p,
            d,
            m,
            _,
            g,
            E,
            b
          ) {
            (this._betPage = new t.ControlPanelBetPage(
              e,
              c,
              h,
              p,
              u,
              o,
              a,
              l,
              n,
              r,
              s,
              i,
              d,
              m,
              _,
              g,
              E,
              b,
              this._guiSettingsHelper
            )),
              this._betPage.BackButtonClicked.add(
                this.handleBackButtonClicked,
                this
              ),
              this._betPage.PageButtonClicked.add(
                this.handleBetPageButtonClicked,
                this
              ),
              this._pages.push(this._betPage);
          }),
          Object.defineProperty(n.prototype, "betPage", {
            get: function () {
              return this._betPage;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (n.prototype.handleBetPageButtonClicked = function (t) {
            this.BetPageButtonClicked.dispatch(t);
          }),
          (n.prototype.initPaytablePage = function (
            e,
            n,
            s,
            i,
            o,
            a,
            l,
            r,
            c,
            h,
            u,
            p,
            d,
            m,
            _
          ) {
            (this._paytablePage = new t.ControlPanelPaytablePage(
              e,
              l,
              r,
              c,
              h,
              n,
              o,
              s,
              i,
              a,
              u,
              p,
              d,
              m,
              _,
              this._guiSettingsHelper
            )),
              this._paytablePage.BackButtonClicked.add(
                this.handleBackButtonClicked,
                this
              ),
              this._pages.push(this._paytablePage);
          }),
          (n.prototype.initAutoplayPage = function (
            e,
            n,
            s,
            i,
            o,
            a,
            l,
            r,
            c,
            h,
            u,
            p,
            d,
            m,
            _,
            g,
            E,
            b,
            B,
            x,
            C,
            f,
            k,
            y,
            S
          ) {
            (this._autoplayPage = new t.ControlPanelAutoplayPage(
              e,
              n,
              s,
              i,
              o,
              c,
              h,
              u,
              a,
              p,
              l,
              r,
              d,
              m,
              _,
              g,
              E,
              b,
              B,
              x,
              this._guiSettingsHelper,
              C,
              f,
              k,
              y,
              S
            )),
              this._autoplayPage.BackButtonClicked.add(
                this.handleBackButtonClicked,
                this
              ),
              this._autoplayPage.PageButtonClicked.add(
                this.handleAutoplayPageButtonClicked,
                this
              ),
              this._autoplayPage.StopOnFeatureWonButtonClicked.add(
                this.handleAutoplayPageStopOnFeatureWonButtonClicked,
                this
              ),
              this._pages.push(this._autoplayPage);
          }),
          (n.prototype.handleAutoplayPageStopOnFeatureWonButtonClicked =
            function (t) {
              this.StopOnFeatureWonValueChanged.dispatch(t);
            }),
          (n.prototype.handleAutoplayPageButtonClicked = function (t) {
            this.AutoplayValueChanged.dispatch(t);
          }),
          (n.prototype.initGameRulesPage = function (
            e,
            n,
            s,
            i,
            o,
            a,
            l,
            r,
            c,
            h,
            u,
            p,
            d,
            m,
            _
          ) {
            (this._gameRulesPage = new t.ControlPanelGameRulesPage(
              e,
              n,
              s,
              i,
              o,
              a,
              l,
              r,
              c,
              h,
              u,
              p,
              d,
              m,
              _,
              this._guiSettingsHelper
            )),
              this._gameRulesPage.BackButtonClicked.add(
                this.handleBackButtonClicked,
                this
              ),
              this._pages.push(this._gameRulesPage);
          }),
          (n.prototype.initHistoryPage = function (
            e,
            n,
            s,
            i,
            o,
            a,
            l,
            r,
            c,
            h,
            u,
            p,
            d,
            m,
            _,
            g
          ) {
            (this._historyPage = new t.ControlPanelHistoryPage(
              e,
              n,
              s,
              i,
              o,
              a,
              l,
              r,
              c,
              h,
              u,
              p,
              d,
              m,
              _,
              g,
              this._guiSettingsHelper
            )),
              this._historyPage.BackButtonClicked.add(
                this.handleBackButtonClicked,
                this
              ),
              this._pages.push(this._historyPage);
          }),
          (n.prototype.handleBackButtonClicked = function () {
            this.BackButtonClicked.dispatch();
          }),
          (n.prototype.handleDownloadGameRulesButtonClicked = function () {
            this.PageButtonClicked.dispatch(
              tk_common.slots.gui.GuiButtonIds.DOWNLOAD
            );
          }),
          (n.prototype.layoutAllPages = function (t, e, n, s, i, o) {
            for (var a = 0; a < this._pages.length; a++)
              this._pages[a].layout(t, e, n, s, i, o);
          }),
          (n.prototype.layoutCurrentPage = function (t, e, n, s, i, o) {
            null != this._currentPage &&
              this._currentPage.layout(t, e, n, s, i, o);
          }),
          (n.prototype.showPage = function (t, n) {
            switch (
              (void 0 === n && (n = !1),
              (this._currentPageId = t),
              this.hidePage(),
              (this._isVisible = !0),
              this._guiSettingsHelper.updateOverrides("gui:controlPanelOpen", {
                spin: { enabled: !1 },
                skip: { enabled: !1 },
                skipFeature: { enabled: !1 },
                quickStop: { enabled: !1 },
                startFreeRounds: { enabled: !1 },
                startAutoPlay: { enabled: !1 },
                stopAutoPlay: { enabled: !1 },
                quickStopFeature: { enabled: !1 },
              }),
              t)
            ) {
              case e.BET:
                this._currentPage = this._betPage;
                break;
              case e.PAY_TABLE:
                this._currentPage = this._paytablePage;
                break;
              case e.GAME_RULES:
                this._currentPage = this._gameRulesPage;
                break;
              case e.AUTO_PLAY:
                this._currentPage = this._autoplayPage;
                break;
              case e.HISTORY:
                this._currentPage = this._historyPage;
            }
            this._currentPage.layout(
              this._orientation,
              this._gameContainerArea,
              this._gameArea,
              this._hasDesktopGui,
              this._showingInfoBar,
              this._gameMarginTop
            ),
              this._currentPage.show();
          }),
          (n.prototype.hidePage = function (t) {
            void 0 === t && (t = !1),
              this._guiSettingsHelper.updateOverrides(
                "gui:controlPanelOpen",
                null
              ),
              null != this._currentPage &&
                ((this._isVisible = !1),
                this._currentPage.hide(),
                (this._currentPage = null));
          }),
          (n.prototype.updatePageSettings = function (t, e) {
            var n = tk_common.slots.gui.PageIds;
            switch (t) {
              case n.AUTO_PLAY:
                this._autoplayPage.updatePageSettings(e);
                break;
              case n.BET:
                this._betPage.updatePageSettings(e);
            }
          }),
          (n.prototype.buildContent = function (t, e) {
            this._containerElement = t;
            var n = e.createDivElement(t, "controlPanel");
            n.addClass("controlPanel"), n.addClass("controlPanelFader");
            var s = e.createDivElement(n, "controlPanelBetTitleContainer"),
              i = e.createDivElement(s, "controlPanelBetTitleInnerContainer");
            i.css("position", "relative");
            var o = e.createDivElement(i, "titleIconContainerBet"),
              a = e.createDivElement(o, "controlPanelBetPageIcon");
            a.addClass("betIcon"),
              o.addClass("controlPanelTitleIconContainer"),
              o.css("position", "relative"),
              a.css("position", "relative"),
              a.addClass("controlPanelPageTitleIcon");
            var l = e.createDivElement(o, "titleIconCoverBet"),
              r = e.createDivElement(i, "titleLabelContainerBet");
            r.addClass("controlPanelTitleLabelContainer"),
              r.css("position", "relative");
            var c = e.createLabelTextElement(
              r,
              "controlPanelBetPageTitleLabel",
              "betPageTitle_uc"
            );
            c.addClass("controlPanelPageTitleLabel"),
              c.css("position", "relative"),
              i.addClass("controlPanelTitleInnerContainer"),
              s.addClass("controlPanelTitleContainer");
            var h = [],
              u = [],
              p = e.createDivElement(n, "betButtonsScrollContainer");
            this._guiSettingsHelper.useKineticScroll
              ? p.css("overflow", "scroll")
              : p.addClass("scrollable"),
              p.css("background-color", "black");
            var d = e.createDivElement(p, "betButtonsContainer");
            d.addClass("betButtonsContainer"), d.css("position", "absolute");

            var m = e.createDivElement(
                p,
                "controlPanelBetPageSubTitleLabelContainer"
              ),
              _ = e.createLabelTextElement(
                m,
                "controlPanelBetPageSubTitleLabel",
                "betPageSubTitle_nc"
              );
            _.addClass("controlPanelPageTitleLabel"),
              _.css("position", "absolute"),
              _.css("white-space", "nowrap");
            for (var g = 0; g < 15; g++) {
              var E = e.createDivElement(d, "betButton" + g);
              E.addClass("controlPanelButton"),
                E.css("position", "relative"),
                h.push(E),
                d.append(E);
              var b = e.createLabelTextElement(
                E,
                "betButtonLabel" + g,
                "betPageOptionButton" + (g + 1) + "_vars_betOption" + (g + 1)
              );
              b.addClass("controlPanelButtonNumberLabel"),
                b.css("position", "relative"),
                u.push(b);
            }
            var B = e.createDivElement(
              n,
              "controlPanelBetTopGradientContainer"
            );
            B.addClass("controlPanelScrollContainerTopGradient");
            var x = e.createDivElement(n, "betPageBackToGameButtonContainer"),
              C = e.createDivElement(x, "betPageBackToGameButtonBackground");
            C.addClass("circleButtonBackground"),
              C.addClass("paytableButtonBackground");
            var f = e.createDivElement(x, "betPageBackToGameButtonIcon");
            f.addClass("backToGameIcon");
            var k = e.createDivElement(n, "controlPanelBetPageHeaderDivider");
            k.addClass("controlPanelBetPageHeaderDivider");
            var y = e.createDivElement(
                n,
                "controlPanelBetPageBackToGameClickElement"
              ),
              S = e.createDivElement(
                n,
                "controlPanelBetPageContentBottomDivider"
              );
            S.addClass("controlPanelBetPageHeaderDivider"),
              this.initBetPage(
                n,
                c,
                m,
                _,
                a,
                l,
                s,
                k,
                x,
                f,
                y,
                C,
                h,
                u,
                d,
                B,
                p,
                S
              ),
              this.buildPaytablePage(n, e),
              this.buildGameRulesPage(n, e),
              this.buildHistoryPage(n, e);
            var T = e.createDivElement(n, "controlPanelAutoplayTitleContainer"),
              L = e.createDivElement(
                T,
                "controlPanelAutoplayTitleInnerContainer"
              );
            L.css("position", "relative");
            var w = e.createDivElement(L, "titleIconContainerAutoplay"),
              v = e.createDivElement(w, "controlPanelAutoplayPageIcon");
            v.addClass("autospinIcon"),
              w.addClass("controlPanelTitleIconContainer"),
              w.css("position", "relative"),
              v.css("position", "relative"),
              v.addClass("controlPanelPageTitleIcon");
            var P = e.createDivElement(w, "titleIconCoverAutoplay"),
              I = e.createDivElement(L, "titleLabelContainerAutoplay");
            I.addClass("controlPanelTitleLabelContainer"),
              I.css("position", "relative");
            var M = e.createLabelTextElement(
              I,
              "controlPanelAutoplayPageTitleLabel",
              "autoPlayPageTitle_uc"
            );
            M.addClass("controlPanelPageTitleLabel"),
              M.css("position", "relative"),
              L.addClass("controlPanelTitleInnerContainer"),
              T.addClass("controlPanelTitleContainer");
            var O = [],
              D = [],
              R = e.createDivElement(n, "autoplayButtonsScrollContainer");
            this._guiSettingsHelper.useKineticScroll
              ? R.css("overflow", "scroll")
              : R.addClass("scrollable");
            var A = e.createDivElement(R, "autoplayButtonsContainer");
            A.addClass("autoplayButtonsContainer"),
              A.css("position", "absolute");
            var F = e.createDivElement(
                R,
                "controlPanelAutoplayPageSubTitleLabelContainer"
              ),
              G = e.createLabelTextElement(
                F,
                "controlPanelAutoplayPageSubTitleLabel",
                "autoPlayPageSubTitle_nc"
              );
            G.addClass("controlPanelPageTitleLabel"),
              G.css("position", "relative"),
              G.css("white-space", "nowrap");
            var W = e.createLabelTextElement(
              R,
              "lossStopLabel",
              "autoPlayPageLossLimit_nc"
            );
            W.css("will-change", "transform"),
              W.addClass("controlPanelPageTitleLabel"),
              W.css("position", "absolute"),
              W.css("white-space", "nowrap");
            var H = e.createDivElement(R, "lossStopBackground");
            H.css("will-change", "transform"),
              H.addClass("controlPanelButton"),
              H.addClass("overlayDialogButton"),
              H.css("position", "absolute"),
              H.css("border-radius", "8px"),
              H.css("border-width", "4px"),
              H.addClass("notSelected");
            var z = e.createDivElement(R, "lossStopTextFieldBackground");
            z.css("will-change", "transform"),
              z.css("position", "absolute"),
              z.css("background-color", "black"),
              z.css("border-color", "gray"),
              z.css("border-style", "solid");
            var U = e.createTextInputElement(
              z,
              "lossStopTextInputElement",
              "",
              ""
            );
            U.css("will-change", "transform"),
              U.attr("type", "number"),
              U.attr("min", "1"),
              U.attr("pattern", "[0-9]*");
            var V = e.createLabelTextElement(H, "lossStopValueLabel", "");
            V.css("will-change", "transform"),
              V.addClass("controlPanelPageTitleLabel"),
              V.css("position", "absolute"),
              V.css("white-space", "nowrap");
            var N = e.createLabelTextElement(
              R,
              "singleWinLimitLabel",
              "autoPlayPageSingleWinLimit_nc"
            );
            N.css("will-change", "transform"),
              N.addClass("controlPanelPageTitleLabel"),
              N.css("position", "absolute"),
              N.css("white-space", "nowrap");
            var j = e.createDivElement(R, "singleWinLimitBackground");
            j.css("will-change", "transform"),
              j.addClass("controlPanelButton"),
              j.addClass("overlayDialogButton"),
              j.css("position", "absolute"),
              j.css("border-radius", "8px"),
              j.css("border-width", "4px"),
              j.addClass("notSelected");
            var Q = e.createLabelTextElement(
              j,
              "singleWinLimitTextElement",
              ""
            );
            Q.css("will-change", "transform"),
              Q.addClass("controlPanelPageTitleLabel"),
              Q.css("position", "absolute"),
              Q.css("white-space", "nowrap");
            var K = e.createDivElement(R, "singleWinLimitTextFieldBackground");
            K.css("will-change", "transform"),
              K.css("position", "absolute"),
              K.css("background-color", "black"),
              K.css("border-color", "gray"),
              K.css("border-style", "solid");
            var Y = e.createTextInputElement(
              K,
              "singleWinLimitTextInputElement",
              "",
              ""
            );
            Y.css("will-change", "transform"),
              Y.attr("inputmode", "numeric"),
              Y.attr("type", "number"),
              Y.attr("min", "1"),
              Y.attr("pattern", "[0-9]*");
            var q = e.createDivElement(A, "autoplayClearButton");
            q.addClass("controlPanelButton"), q.css("position", "absolute");
            var Z = e.createLabelTextElement(
              q,
              "autoplayClearButtonLabel",
              "autoPlayPageClearButton_uc"
            );
            Z.addClass("controlPanelButtonLabel"),
              Z.css("position", "relative");
            var X = [];
            for (g = 0; g < 10; g++) {
              X.push(0);
              var J = e.createDivElement(A, "autoplayButton" + g);
              J.addClass("controlPanelButton"),
                J.css("position", "relative"),
                O.push(J);
              var $ = e.createLabelTextElement(
                J,
                "autoplayButtonLabel" + g,
                X[g].toString()
              );
              $.addClass("controlPanelButtonNumberLabel"),
                $.css("position", "relative"),
                D.push($);
            }
            var tt = e.createDivElement(
              n,
              "controlPanelAutoplayTopGradientContainer"
            );
            tt.addClass("controlPanelScrollContainerTopGradient");
            var et = e.createDivElement(
                n,
                "autoplayPageBackToGameButtonContainer"
              ),
              nt = e.createDivElement(
                et,
                "autoplayPageBackToGameButtonBackground"
              );
            nt.addClass("circleButtonBackground"),
              nt.addClass("paytableButtonBackground");
            var st = e.createDivElement(et, "autoplayPageBackToGameButtonIcon");
            st.addClass("backToGameIcon");
            var it = e.createDivElement(
              n,
              "controlPanelAutoplayPageHeaderDivider"
            );
            it.addClass("controlPanelAutoplayPageHeaderDivider");
            var ot = e.createDivElement(
                n,
                "controlPanelAutoPlayBackToGameClickElement"
              ),
              at = e.createDivElement(
                n,
                "controlPanelAutoplayPageContentBottomDivider"
              );
            at.addClass("controlPanelAutoplayPageHeaderDivider");
            var lt = e.createDivElement(
                R,
                "controlPanelAutoplayPageStopOnFeatureWonContainer"
              ),
              rt = e.createDivElement(
                lt,
                "controlPanelAutoplayPageStopOnFeatureWonCheckBoxElement"
              );
            rt.addClass("checkbox");
            var ct = e.createDivElement(
              lt,
              "controlPanelAutoplayPageStopOnFeatureWonCheckBoxCheckerElement"
            );
            ct.addClass("checkboxSelected");
            var ht = e.createLabelTextElement(
              lt,
              "controlPanelAutoplayPageStopOnFeatureWonLabelElement",
              "autoPlayPageOptionStopOnFeatureWon_nc"
            );
            ht.addClass("controlPanelPageTitleLabel"),
              ht.css("white-space", "nowrap");
            var ut = e.createDivElement(
              lt,
              "controlPanelAutoplayPageStopOnFeatureWonClickElement"
            );
            this.initAutoplayPage(
              n,
              et,
              st,
              ot,
              nt,
              M,
              F,
              G,
              T,
              v,
              P,
              it,
              O,
              D,
              A,
              q,
              Z,
              tt,
              R,
              at,
              lt,
              rt,
              ct,
              ht,
              ut
            ),
              (this._autoplayPage.lossStopTitleTextElement = W),
              (this._autoplayPage.lossStopTextElement = V),
              (this._autoplayPage.lossStopBackgroundElement = H),
              (this._autoplayPage.lossStopTextFieldBackgroundElement = z),
              (this._autoplayPage.lossStopTextFieldElement = U),
              (this._autoplayPage.singleWinLimitTitleTextElement = N),
              (this._autoplayPage.singleWinLimitTextElement = Q),
              (this._autoplayPage.singleWinLimitTextFieldElement = Y),
              (this._autoplayPage.singleWinLimitBackgroundElement = j),
              (this._autoplayPage.singleWinLimitTextFieldBackgroundElement = K);
          }),
          (n.prototype.buildGameRulesPage = function (t, e) {
            var n = e.createDivElement(
                t,
                "controlPanelGameRulesTitleContainer"
              ),
              s = e.createDivElement(
                n,
                "controlPanelGameRulesTitleInnerContainer"
              );
            s.css("position", "relative");
            var i = e.createDivElement(s, "titleIconContainerGameRules"),
              o = e.createDivElement(i, "controlPanelGameRulesPageIcon");
            o.addClass("iconGameRules"),
              i.addClass("controlPanelTitleIconContainer"),
              i.css("position", "relative"),
              o.css("position", "relative"),
              o.addClass("controlPanelPageTitleIcon");
            var a = e.createDivElement(i, "titleIconCoverGameRules"),
              l = e.createDivElement(s, "titleLabelContainerGameRules");
            l.addClass("controlPanelTitleLabelContainer"),
              l.css("position", "relative");
            var r = e.createLabelTextElement(
              l,
              "controlPanelGameRulesPageTitleLabel",
              "gameRulesPageTitle_uc"
            );
            r.addClass("controlPanelPageTitleLabel"),
              r.css("position", "relative"),
              s.addClass("controlPanelTitleInnerContainer"),
              n.addClass("controlPanelTitleContainer");
            var c = e.createDivElement(
              t,
              "controlPanelRulesTextLabelContainer"
            );
            this._guiSettingsHelper.useKineticScroll
              ? c.css("overflow", "scroll")
              : c.addClass("scrollable");
            var h = e.createDivElement(
                c,
                "controlPanelRulesScrollContentContainer"
              ),
              u = e.createLabelTextElement(
                h,
                "controlPanelRulesTitleTextLabel",
                "gameRulesPageSubTitle_nc"
              );
            u.css("position", "relative"), u.addClass("gameRulesTextLabel");
            var p = e.createDivElement(
              t,
              "controlPanelRulesTextLabelContainerTopGradientContainer"
            );
            p.addClass("controlPanelScrollContainerTopGradient");
            var d = e.createDivElement(
                t,
                "gameRulesPageBackToGameButtonContainer"
              ),
              m = e.createDivElement(
                d,
                "gameRulesPageBackToGameButtonBackground"
              );
            m.addClass("circleButtonBackground"),
              m.addClass("paytableButtonBackground");
            var _ = e.createDivElement(d, "gameRulesPageBackToGameButtonIcon");
            _.addClass("backToGameIcon");
            var g = e.createDivElement(
              t,
              "controlPanelGameRulesPageHeaderDivider"
            );
            g.addClass("controlPanelGameRulesPageHeaderDivider");
            var E = e.createDivElement(
                t,
                "controlPanelGameRulesBackToGameClickElement"
              ),
              b = e.createDivElement(
                t,
                "controlPanelGameRulesContentBottomDivider"
              );
            b.addClass("controlPanelGameRulesPageHeaderDivider"),
              this.initGameRulesPage(
                t,
                d,
                _,
                E,
                m,
                n,
                o,
                a,
                r,
                g,
                h,
                u,
                c,
                p,
                b
              );
          }),
          (n.prototype.buildPaytablePage = function (t, e) {
            var n = e.createDivElement(t, "controlPanelPaytableTitleContainer"),
              s = e.createDivElement(
                n,
                "controlPanelPaytableTitleInnerContainer"
              );
            s.css("position", "relative");
            var i = e.createDivElement(s, "titleIconContainerPaytable"),
              o = e.createDivElement(i, "controlPanelPaytablePageIcon");
            o.addClass("iconPaytable");
            var a = e.createDivElement(i, "titleIconCoverPaytable");
            i.addClass("controlPanelTitleIconContainer"),
              i.css("position", "relative"),
              o.css("position", "relative"),
              o.addClass("controlPanelPageTitleIcon");
            var l = e.createDivElement(s, "titleLabelContainerPaytable");
            l.addClass("controlPanelTitleLabelContainer"),
              l.css("position", "relative");
            var r = e.createLabelTextElement(
              l,
              "controlPanelPaytablePageTitleLabel",
              "payTablePageTitle_uc"
            );
            r.addClass("controlPanelPageTitleLabel"),
              r.css("position", "relative"),
              s.addClass("controlPanelTitleInnerContainer"),
              n.addClass("controlPanelTitleContainer"),
              n.css("position", "relative");
            var c = e.createDivElement(t, "paytableScrollContainer"),
              h = e.createDivElement(c, "paytableContainer");
            e
              .createDivElement(h, "topSpacer")
              .html("<br>")
              .css("position", "relative"),
              h.css("pointer-events", "none"),
              this._guiSettingsHelper.useKineticScroll
                ? c.css("overflow", "scroll")
                : c.addClass("scrollable"),
              null !== this._paytableHelper &&
                this._paytableHelper.buildPageContent(h, {
                  createDivElement: function (t, n, s) {
                    return e.createDivElement(t, n, s);
                  },
                  createImgElement: function (t, n, s, i) {
                    return e.createImgElement(t, n, s, i);
                  },
                  createLabelTextElement: function (t, n, s, i) {
                    return e.createLabelTextElement(t, n, s, i);
                  },
                  createLabelHtmlElement: function (t, n, s, i) {
                    return e.createLabelHtmlElement(t, n, s, i);
                  },
                });
            var u = e.createDivElement(
              t,
              "controlPanelPaytablePageHeaderDivider"
            );
            u.addClass("controlPanelPaytablePageHeaderDivider");
            var p = e.createDivElement(
                t,
                "paytablePageBackToGameButtonContainer"
              ),
              d = e.createDivElement(
                p,
                "paytablePageBackToGameButtonBackground"
              );
            d.addClass("paytableButtonBackground"),
              d.addClass("circleButtonBackground");
            var m = e.createDivElement(p, "paytablePageBackToGameButtonIcon");
            m.addClass("backToGameIcon"),
              d.addClass("paytableButtonBackground");
            var _ = e.createDivElement(
              t,
              "controlPanelPaytableContainerTopGradientContainer"
            );
            _.addClass("controlPanelScrollContainerTopGradient");
            var g = e.createDivElement(
                t,
                "paytablePageGameRulesBackToGameClickElement"
              ),
              E = e.createDivElement(
                t,
                "controlPanelPaytablePageContentBottomDivider"
              );
            E.addClass("controlPanelPaytablePageHeaderDivider"),
              this.initPaytablePage(
                t,
                n,
                o,
                a,
                r,
                u,
                p,
                m,
                g,
                d,
                c,
                h,
                _,
                this._paytableHelper,
                E
              );
          }),
          (n.prototype.buildHistoryPage = function (t, e) {
            var n = e.createDivElement(t, "controlPanelHistoryTitleContainer"),
              s = e.createDivElement(
                n,
                "controlPanelHistoryTitleInnerContainer"
              );
            s.css("position", "relative");
            var i = e.createDivElement(s, "titleIconContainerHistory"),
              o = e.createDivElement(i, "controlPanelHistoryPageIcon");
            o.addClass("iconHistory"),
              i.addClass("controlPanelTitleIconContainer"),
              i.css("position", "relative"),
              o.css("position", "relative"),
              o.addClass("controlPanelPageTitleIcon");
            var a = e.createDivElement(i, "titleIconCoverHistory"),
              l = e.createDivElement(s, "titleLabelContainerHistory");
            l.addClass("controlPanelTitleLabelContainer"),
              l.css("position", "relative");
            var r = e.createLabelTextElement(
              l,
              "controlPanelHistoryPageTitleLabel",
              "historyPageTitle_uc"
            );
            r.addClass("controlPanelPageTitleLabel"),
              r.css("position", "relative"),
              r.css("will-change", "transform"),
              s.addClass("controlPanelTitleInnerContainer"),
              n.addClass("controlPanelTitleContainer");
            var c = e.createDivElement(t, "controlPanelHistoryRowsContainer");
            this._guiSettingsHelper.useKineticScroll
              ? c.css("overflow", "scroll")
              : c.addClass("scrollable");
            var h = e.createDivElement(
                c,
                "controlPanelHistoryScrollContentContainer"
              ),
              u = e.createLabelTextElement(
                h,
                "controlPanelHistoryTitleTextLabel",
                "historyPageSubTitle_nc"
              );
            u.css("position", "relative"),
              u.addClass("gameRulesTextLabel"),
              u.css("will-change", "transform");
            var p = e.createLabelHtmlElement(
              h,
              "controlPanelHistoryTextLabel",
              ""
            );
            p.css("position", "relative"),
              p.addClass("gameRulesTextLabel"),
              p.css("will-change", "transform");
            var d = e.createDivElement(
              t,
              "controlPanelHistoryTextLabelContainerTopGradientContainer"
            );
            d.addClass("controlPanelScrollContainerTopGradient");
            var m = e.createDivElement(
                t,
                "gameHistoryPageBackToGameButtonContainer"
              ),
              _ = e.createDivElement(
                m,
                "historyPageBackToGameButtonBackground"
              );
            _.addClass("circleButtonBackground"),
              _.addClass("paytableButtonBackground");
            var g = e.createDivElement(m, "historyPageBackToGameButtonIcon");
            g.addClass("backToGameIcon");
            var E = e.createDivElement(
              t,
              "controlPanelHistoryPageHeaderDivider"
            );
            E.addClass("controlPanelGameRulesPageHeaderDivider");
            var b = e.createDivElement(
                t,
                "controlPanelHistoryBackToGameClickElement"
              ),
              B = e.createDivElement(
                t,
                "controlPanelHistoryContentBottomDivider"
              );
            B.addClass("controlPanelHistoryPageHeaderDivider"),
              B.css("will-change", "transform");
            var x = e.createDivElement(
                h,
                "controlPanelHistoryTitleLabelsContainer"
              ),
              C = e.createLabelTextElement(
                x,
                "controlPanelHistoryTimeTitleLabel",
                "historyPageListHeadingTime_nc"
              );
            C.addClass("gameRulesTextLabel"), C.css("will-change", "transform");
            var f = e.createLabelTextElement(
              x,
              "controlPanelHistoryDateTitleLabel",
              "historyPageListHeadingDate_nc"
            );
            f.addClass("gameRulesTextLabel"), f.css("will-change", "transform");
            var k = e.createLabelTextElement(
              x,
              "controlPanelHistoryBetTitleLabel",
              "historyPageListHeadingBet_nc"
            );
            k.addClass("gameRulesTextLabel"), k.css("will-change", "transform");
            var y = e.createLabelTextElement(
              x,
              "controlPanelHistoryWinTitleLabel",
              "historyPageListHeadingWin_nc"
            );
            y.addClass("gameRulesTextLabel"), y.css("will-change", "transform");
            var S = e.createDivElement(
              h,
              "controlPanelHistoryRowsListContainer"
            );
            S.css("width", "100%");
            for (var T = [], L = [], w = [], v = 0; v < 10; v++) {
              var P = e.createDivElement(
                S,
                "controlPanelHistoryRowContainer" + v
              );
              P.css("position", "relative");
              var I = e.createLabelTextElement(
                P,
                "controlPanelHistoryTimeLabel" + v,
                ""
              );
              I.addClass("gameRulesTextLabel"),
                I.css("will-change", "transform");
              var M = e.createLabelTextElement(
                P,
                "controlPanelHistoryDateLabel" + v,
                ""
              );
              M.addClass("gameRulesTextLabel"),
                M.css("will-change", "transform");
              var O = e.createLabelTextElement(
                P,
                "controlPanelHistoryBetLabel" + v,
                ""
              );
              O.addClass("gameRulesTextLabel"),
                O.css("will-change", "transform");
              var D = e.createLabelTextElement(
                P,
                "controlPanelHistoryWinLabel" + v,
                ""
              );
              D.addClass("gameRulesTextLabel"),
                D.css("will-change", "transform");
              var R = e.createDivElement(P, "gameDetailsButton" + v);
              R.addClass("controlPanelButton"),
                R.css("position", "absolute"),
                L.push(R);
              var A = e.createLabelTextElement(
                R,
                "detailButtonLabel" + v,
                "historyPageListDetailButton_nc"
              );
              A.addClass("controlPanelButtonNumberLabel"),
                A.css("position", "relative"),
                w.push(A);
              var F = [P, I, M, O, D, R];
              T.push(F);
            }
            this.initHistoryPage(
              t,
              m,
              g,
              b,
              _,
              n,
              o,
              a,
              r,
              E,
              h,
              u,
              p,
              c,
              d,
              B
            ),
              this._historyPage.setHistoryListContainer(S),
              this._historyPage.setRowsElements(T),
              this._historyPage.initiateDetailButtons(L, w);
            var G = [x, C, f, k, y];
            this._historyPage.setTitleLabelElements(G),
              this._historyPage.DetailsButtonClicked.add(
                this.handleDetailsButtonClicked,
                this
              );
          }),
          (n.prototype.handleDetailsButtonClicked = function (t) {
            this.DetailsButtonClicked.dispatch(t);
          }),
          (n.prototype.layout = function (t, e, n, s, i, o, a, l) {
            (this._orientation = t),
              (this._gameContainerArea = e),
              (this._gameArea = n),
              (this._isControlPanelOpen = o),
              (this._showingInfoBar = a),
              (this._gameMarginTop = l),
              (this._hasDesktopGui = s),
              this.layoutCurrentPage(t, e, n, s, a, l);
          }),
          n
        );
      })();
    t.ControlPanelManager = n;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = function () {};
    t.HistoryRowData = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function () {
      function e() {
        (this._buttonManagers = []),
          (this._actionButtons = {}),
          (this._customPageIndex = 1),
          (this._currentPageIndex = -1),
          (this._customOutcome = []),
          (this._pageContainerElements = []),
          (this._actionButtons = {}),
          (this._bottomButtonManagers = {}),
          (this._bottomButtonClickHandlers = {}),
          (this.DialogButtonClicked = new Phaser.Signal()),
          (this.ApplyCustomOutcomeButtonClicked = new Phaser.Signal()),
          (this.ClearCustomOutcomeButtonClicked = new Phaser.Signal()),
          (this._buttonShortCuts = {});
      }
      return (
        (e.prototype.setConfiguration = function (t) {
          var e = this;
          (this._customLabelOutcomeFontSize = t.customOutcomeLabelFontSize),
            (this._pages = []);
          var n = t.pages[t.defaultOcPageId];
          void 0 !== n.custom &&
            (this._pages.push("CUSTOM"),
            (this._availableSymbols = n.custom.symbolTypes),
            (this._reelSymbolCount = n.custom.listLength));
          var s = function () {
              if (((n = t.pages[o]), "CUSTOM" === o.toUpperCase()))
                return "continue";
              var s = i._pages.push(n.title) - 1;
              o.toUpperCase() === t.defaultOcPageId.toUpperCase() &&
                (i._initialPage = s),
                (i._actionButtons[o.toUpperCase()] = []),
                void 0 !== n.presets &&
                  jQuery.each(n.presets, function (t, n) {
                    e._actionButtons[o.toUpperCase()].push(n.title),
                      "keep" === n.id
                        ? (e._keepButtonId = t)
                        : "combine" === n.id && (e._combineButtonId = t);
                  }),
                tk_common.phaser.utils.addKeyboardShortCut &&
                  tk_common.phaser.utils.addKeyboardShortCut(
                    { allowkeyboardinput: !0, developmentmode: !0 },
                    o[0].toLowerCase(),
                    function () {
                      e._isVisible && e.setSelectedPageIndex(s);
                    }
                  );
            },
            i = this;
          for (var o in t.pages) s();
          for (var a in (tk_common.phaser.utils.addKeyboardComboShortCut &&
            (tk_common.phaser.utils.addKeyboardComboShortCut(
              { developmentmode: !0, allowkeyboardinput: !0 },
              [{ char: "o", modifiers: {} }],
              function () {
                e._isVisible ? e.hide(!0) : e.show();
              }
            ),
            tk_common.phaser.utils.addKeyboardComboShortCut(
              { developmentmode: !0, allowkeyboardinput: !0 },
              [{ char: "ArrowRight", modifiers: {} }],
              function () {
                if (e._isVisible) {
                  var t = Math.min(
                    e._pages.length - 1,
                    e._currentPageIndex + 1
                  );
                  e.setSelectedPageIndex(t);
                }
              }
            ),
            tk_common.phaser.utils.addKeyboardComboShortCut(
              { developmentmode: !0, allowkeyboardinput: !0 },
              [{ char: "ArrowLeft", modifiers: {} }],
              function () {
                if (e._isVisible) {
                  var t = Math.max(0, e._currentPageIndex - 1);
                  e.setSelectedPageIndex(t);
                }
              }
            )),
          (this._sides = {}),
          (t.sides = t.sides || {}),
          t.pages))
            if (((this._sides[a] = {}), null != t.sides[a])) {
              var l = t.sides[a];
              for (var r in l)
                if ("apply" === r || "clear" === r) this._sides[a][r] = l[r];
                else {
                  var c = l[r];
                  this._sides[a][r] = {
                    action: c.action,
                    close: c.close,
                    id: r,
                    title: c.title,
                  };
                }
            } else this._sides[a] = { apply: !0, clear: !0 };
          (this._sides.CUSTOM = { apply: !0, clear: !0 }),
            (this._configuration = t);
        }),
        (e.prototype.handleButtonClicked = function (t) {
          try {
            var e = this._configuration.pages[this._currentPageId];
            if (e) {
              var n = e.presets[t];
              n ? !1 !== n.close && this.hide(!0) : this.hide(!0);
            } else this.hide(!0);
          } catch (t) {
            this.hide(!0);
          }
          this.DialogButtonClicked.dispatch(t, this._currentPageId);
        }),
        (e.prototype.setQueuedActionsList = function (t, e) {
          (e = e || function (t) {}),
            this._actionListLabels.forEach(function (t) {
              t.css("display", "none");
            });
          for (var n = 19, s = (t = t || []).length - 1; s >= 0; s--) {
            var i = this._actionListLabels[n],
              o = "";
            if (
              (null != t[s] && (o = t[s].toString()),
              i.text(o),
              this._isVisible &&
                (i.css("display", "inline"),
                i.css("margin-left", "4px"),
                i.css("border", "1px dashed #cccccc")),
              0 === n)
            ) {
              s > 0 && (i.text("..."), i.css("border", "none"));
              break;
            }
            i.click(null),
              i.click(
                (function (t) {
                  return function () {
                    e(t);
                  };
                })(s)
              ),
              n--;
          }
          (this._queuedActionsList = t),
            (this._queuedActionsClickHandler = e),
            this.updateLayout();
        }),
        (e.prototype.show = function () {
          (this._isVisible = !0),
            this.updateLayout(),
            this.generateOutcomeString(),
            (this.handleKeyDown = this.handleKeyDown.bind(this)),
            document.addEventListener("keydown", this.handleKeyDown),
            this.enablePageShortCuts(void 0, this._currentPageId),
            this._containerElement.css("display", "block"),
            this._containerElement.addClass("openDialogPopupAnimation"),
            this._titleTextContainerElement.css("display", "block");
          for (var t = 0; t < this._buttonManagers.length; t++)
            null != this._buttonManagers[t] && this._buttonManagers[t].show();
          this.setQueuedActionsList(
            this._queuedActionsList,
            this._queuedActionsClickHandler
          ),
            this._customSymbolsButtonManager.show(),
            this._pageButtonManager.show();
          var e = this._currentPageId;
          this.changeCurrentBottomButtonManager(e, !0);
        }),
        (e.prototype.changeCurrentBottomButtonManager = function (t, e) {
          void 0 === e && (e = !0),
            this._currentBottomButtonManager &&
              (this._currentBottomButtonManager.ButtonClicked.removeAll(),
              this._currentBottomButtonManager.hide());
          var n = t.toUpperCase();
          this._currentBottomButtonManager = this._bottomButtonManagers[n];
          var s = this._bottomButtonClickHandlers[n];
          e &&
            (this._currentBottomButtonManager.ButtonClicked.add(function (t) {
              s[t](t);
            }),
            this._currentBottomButtonManager.show(),
            this._currentBottomButtonManager.layout(
              this._orientation,
              this._gameContainerArea,
              this._gameArea
            ));
        }),
        (e.prototype.handleKeyDown = function (t) {
          "CUSTOM" === this._currentPageId &&
            (8 === t.keyCode && this.handleBackspace(),
            13 === t.keyCode && this.handleEnterKey(),
            82 === t.keyCode && this.handleCustomSymbolButtonClicked(0),
            -1 !== $.inArray(t.keyCode, [46, 8, 9, 27, 13, 110, 190, 188]) ||
              (65 === t.keyCode && t.ctrlKey) ||
              (t.keyCode >= 35 && t.keyCode <= 39) ||
              ((t.shiftKey || t.keyCode < 48 || t.keyCode > 57) &&
                (t.keyCode < 96 || t.keyCode)));
        }),
        (e.prototype.hide = function (t) {
          var e = this;
          void 0 === t && (t = !1),
            document.removeEventListener("keydown", this.handleKeyDown),
            (this._isVisible = !1),
            this.disablePageShortCuts(this._currentPageId),
            t
              ? (this._containerElement.removeClass("openDialogPopupAnimation"),
                this._containerElement.addClass("closeDialogPopupAnimation"),
                setTimeout(function () {
                  return e.hideComponents();
                }, 300))
              : this.hideComponents();
        }),
        (e.prototype.handleEnterKey = function () {
          this.apply();
        }),
        (e.prototype.handleBackspace = function () {
          this._customOutcome.pop(), this.generateOutcomeString();
        }),
        (e.prototype.hideComponents = function () {
          this._customSymbolsButtonManager.hide(),
            this._pageButtonManager.hide(),
            this._currentBottomButtonManager.hide(),
            this._containerElement.css("display", "none"),
            this._actionListLabels.forEach(function (t) {
              t.css("display", "none");
            }),
            this._containerElement.removeClass("closeDialogPopupAnimation");
        }),
        (e.prototype.handleBottomButtonClicked = function (t) {
          switch (t) {
            case 0:
              (this._customOutcome = []),
                this._customOutcomeTextInputElement.val(""),
                this.generateOutcomeString(),
                this.ClearCustomOutcomeButtonClicked.dispatch();
              break;
            case 1:
              this.apply();
              break;
            case 2:
              this.hide(!0);
          }
        }),
        (e.prototype.apply = function () {
          this.hide(!0),
            this.paddOutcome(),
            this.ApplyCustomOutcomeButtonClicked.dispatch(
              this._customOutcomeTextInputElement.val()
            );
        }),
        (e.prototype.paddOutcome = function () {
          if (this._customOutcome.length < this._reelSymbolCount)
            for (
              var t = this._currentOutcomeLength - 1;
              t < this._reelSymbolCount - 1;
              t++
            )
              this._customOutcomeTextInputElement.val(
                this._customOutcomeTextInputElement.val() + ",-1"
              );
          this.generateOutcomeString();
        }),
        (e.prototype.handlePageButtonClicked = function (t) {
          this.setSelectedPageIndex(t);
        }),
        (e.prototype.setSelectedPageIndex = function (t) {
          var e = this._currentPageId;
          (this._currentPageId = this._pages[t]),
            (this._currentPageIndex = t),
            t !== this._customPageIndex
              ? this._customOutcomeSymbolCounterLabel.css("display", "none")
              : this._customOutcomeSymbolCounterLabel.css("display", "block"),
            this.changeCurrentBottomButtonManager(this._currentPageId, !0),
            this.enablePageShortCuts(e, this._currentPageId);
          for (var n = 0; n < this._pageContainerElements.length; n++)
            this._pageContainerElements[n].css("display", "none");
          this._pageContainerElements[t].css("display", "block"),
            this._pageButtonManager.selectElement(t);
        }),
        (e.prototype.handleCustomSymbolButtonClicked = function (t) {
          if (this._customOutcome.length < this._reelSymbolCount) {
            var e = "";
            this._customOutcomeTextInputElement.val().length > 0 && (e += ","),
              (e += t - 1),
              this._customOutcomeTextInputElement.val(
                this._customOutcomeTextInputElement.val() + e
              ),
              this.generateOutcomeString();
          }
        }),
        (e.prototype.generateOutcomeString = function () {
          (this._currentOutcomeLength = this._customOutcomeTextInputElement
            .val()
            .split(",").length),
            1 === this._currentOutcomeLength &&
            this._customOutcomeTextInputElement.val().length > 0
              ? (this._currentOutcomeLength = 1)
              : 1 === this._currentOutcomeLength &&
                0 === this._customOutcomeTextInputElement.val().length &&
                (this._currentOutcomeLength = 0),
            this._currentOutcomeLength === this._reelSymbolCount
              ? this._customSymbolsButtonManager.disableAllButtons()
              : this._customSymbolsButtonManager.enableAllButtons(),
            this._customOutcomeSymbolCounterLabel.text(
              "Symbol count: " +
                this._currentOutcomeLength +
                "/" +
                this._reelSymbolCount.toString()
            );
        }),
        (e.prototype.handleCloseButtonClicked = function () {
          this.hide(!0);
        }),
        (e.prototype.buildContent = function (e, n) {
          var s = this;
          (this._containerElement = e),
            (this._backgroundElement = n.createDivElement(
              this._containerElement,
              "ocDialogBackground"
            )),
            this._backgroundElement.addClass("dialogBackground"),
            (this._titleTextContainerElement = n.createDivElement(
              this._containerElement,
              "ocTitleTextContainerElement"
            )),
            this._titleTextContainerElement.addClass(
              "overlayDialogLabelContainer"
            ),
            (this._closeIcon = n.createDivElement(
              this._containerElement,
              "ocCloseIcon"
            )),
            this._closeIcon.addClass("iconClose"),
            this._closeIcon.bind("tap", function (t) {
              s.handleCloseButtonClicked();
            }),
            (this._ocIcon = n.createDivElement(
              this._containerElement,
              "ocPageIcon"
            )),
            this._ocIcon.addClass("iconOc"),
            (this._titleLabelElement = n.createLabelTextElement(
              this._titleTextContainerElement,
              "ocDialogTitleTextLabel",
              "Outcome Control"
            )),
            this._titleLabelElement.addClass("overlayDialogLabel"),
            this._titleLabelElement.css("position", "absolute"),
            (this._titleDividerElement = n.createDivElement(
              this._containerElement,
              "ocDialogTitleDivider"
            ));
          var i = [],
            o = [];
          (this._leftSideContainerElement = n.createDivElement(
            this._containerElement,
            "ocDialogLeftSideContainer"
          )),
            (this._rightSideContainerElement = n.createDivElement(
              this._containerElement,
              "ocDialogRightSideContainer"
            ));
          var a = n.createDivElement(
              this._leftSideContainerElement,
              "ocDialogCustomPageContainer"
            ),
            l = n.createDivElement(a, "ocDialogCustomPageButtonsContainer");
          l.css("position", ""),
            l.css("overflow", "auto"),
            l.css("height", "300px"),
            this._pageContainerElements.push(a),
            (this._customOutcomeBackgroundElement = n.createDivElement(
              a,
              "ocDialogCustomOutcomeBackground"
            )),
            this._customOutcomeBackgroundElement.css("position", "absolute"),
            this._customOutcomeBackgroundElement.css(
              "background-color",
              "black"
            ),
            this._customOutcomeBackgroundElement.css("border-color", "gray"),
            this._customOutcomeBackgroundElement.css("border-style", "solid"),
            (this._customOutcomeSymbolCounterLabel = n.createLabelTextElement(
              this._containerElement,
              "ocDialogCustomOutcomeSymbolCounterLabel",
              ""
            )),
            this._customOutcomeSymbolCounterLabel.addClass("dialogLabel"),
            this._customOutcomeSymbolCounterLabel.css("position", "absolute"),
            (this._customOutcomeLabel = n.createLabelTextElement(
              this._customOutcomeBackgroundElement,
              "ocDialogCustomOutcomeLabel",
              ""
            )),
            this._customOutcomeLabel.addClass("dialogLabel"),
            this._customOutcomeLabel.css("position", "absolute");
          for (var r = 0; r < this._availableSymbols.length; r++) {
            var c = n.createDivElement(l, "ocDialogCustomSymbolButton" + r);
            c.addClass("controlPanelButton"),
              c.addClass("overlayDialogButton"),
              c.css("position", "relative"),
              o.push(c);
            var h = n.createLabelTextElement(
              c,
              "ocDialogCustomSymbolButtonLabel" + r,
              this._availableSymbols[r]
            );
            h.addClass("controlPanelButtonLabel"),
              h.css("position", "relative"),
              i.push(h);
          }
          (this._customSymbolsButtonManager = new t.ButtonManager(o, i)),
            this._customSymbolsButtonManager.ButtonClicked.add(
              this.handleCustomSymbolButtonClicked,
              this
            ),
            (this._customSymbolsButtonManager.hasToggle = !1);
          var u = [],
            p = [];
          if (this._pages.length > 1) {
            this._pageButtonsContainerElement = n.createDivElement(
              this._containerElement,
              "ocDialogPageButtonsContainer"
            );
            var d,
              m,
              _,
              g,
              E,
              b,
              B,
              x = function () {
                var e = C._pages[r].toUpperCase();
                "CUSTOM" == e && (C._customPageIndex = r),
                  (d = n.createDivElement(
                    C._leftSideContainerElement,
                    "ocDialogPageContainer" + r
                  )).css("overflow", "auto"),
                  d.css("height", "420px"),
                  C._pageContainerElements.push(d),
                  (m = n.createDivElement(
                    C._pageButtonsContainerElement,
                    "ocDialogPageButton" + r
                  )).addClass("controlPanelButton"),
                  m.addClass("overlayDialogButton"),
                  m.css("position", "relative"),
                  p.push(m),
                  (_ = n.createLabelTextElement(
                    m,
                    "ocDialogPageButtonLabel" + r,
                    C._pages[r]
                  )).addClass("controlPanelButtonLabel"),
                  _.css("position", "relative"),
                  u.push(_);
                var s = [];
                if (null != (g = C._actionButtons[e]) && g.length > 0) {
                  (E = []), (b = []);
                  for (var i = 0; i < g.length; i++) {
                    (B = n.createDivElement(
                      C._pageContainerElements[r],
                      "ocDialogButton" + r + "_" + i
                    )).addClass("controlPanelButton"),
                      B.addClass("overlayDialogButton"),
                      B.css("position", "relative"),
                      b.push(B);
                    var o = "";
                    if (tk_common.phaser.utils.addKeyDownComboListener) {
                      var a = (i + 1).toString().split("");
                      1 === a.length && a.unshift("0"),
                        s.push(a),
                        (o = " (" + a.join("") + ")");
                    }
                    var l = n.createLabelTextElement(
                      B,
                      "ocDialogButtonLabel" + r + "_" + i,
                      g[i] + o
                    );
                    l.addClass("controlPanelButtonLabel"),
                      l.css("position", "relative"),
                      E.push(l);
                  }
                  var c = (C._buttonManagers[r] = new t.ButtonManager(b, E));
                  C._buttonManagers[r].ButtonClicked.add(
                    C.handleButtonClicked,
                    C
                  ),
                    (C._buttonManagers[r].hasToggle = !1),
                    tk_common.phaser.utils.addKeyDownComboListener &&
                      ((C._buttonShortCuts[e] =
                        tk_common.phaser.utils.addKeyDownComboListener(
                          { developmentmode: !0, allowkeyboardinput: !0 },
                          s.map(function (t, e) {
                            return {
                              keys: t.map(function (t) {
                                return { key: t, modifiers: {} };
                              }),
                              func: function () {
                                c.ButtonClicked.dispatch(e);
                              },
                            };
                          })
                        )),
                      (C._buttonShortCuts[e].enabled = !1));
                }
              },
              C = this;
            for (r = 0; r < this._pages.length; r++) x();
          }
          for (var f in ((this._pageButtonManager = new t.ButtonManager(p, u)),
          this._pageButtonManager.ButtonClicked.add(
            this.handlePageButtonClicked,
            this
          ),
          (this._pageButtonManager.hasToggle = !0),
          (this._bottomButtonsContainerElement = n.createDivElement(
            this._containerElement,
            "ocBottomButtonsContainer"
          )),
          this._bottomButtonsContainerElement.addClass(
            "dialogButtonsContainer"
          ),
          this._bottomButtonsContainerElement.css("position", "absolute"),
          (this._bottomButtonManagers = {}),
          this._sides)) {
            var k = [],
              y = [],
              S = [],
              T = this._sides[f],
              L = function (t) {
                if ("apply" === t || "clear" === t) return "continue";
                var e = T[t],
                  i = n.createDivElement(
                    w._rightSideContainerElement,
                    "ocBottomButton_" + f + "_" + t
                  );
                i.addClass("controlPanelButton"),
                  i.addClass("overlayDialogButton"),
                  i.css("position", "relative"),
                  i.css("left", "15%");
                var o = n.createLabelTextElement(
                  i,
                  "ocButtonButtonLabel_" + f + "_" + t,
                  e.title
                );
                o.addClass("controlPanelButtonLabel"),
                  o.css("position", "relative"),
                  S.push(function () {
                    e.action(e.id), e.close && s.handleCloseButtonClicked();
                  }),
                  k.push(i),
                  y.push(i);
              },
              w = this;
            for (var v in T) L(v);
            if (!1 !== T.clear) {
              var P = n.createDivElement(
                this._rightSideContainerElement,
                "ocDialogButtonClear_" + f
              );
              P.addClass("controlPanelButton"),
                P.addClass("overlayDialogButton"),
                P.css("position", "relative"),
                P.css("left", "15%"),
                k.push(P);
              var I = n.createLabelTextElement(
                P,
                "ocDialogButtonLabelClear_" + f,
                "CLEAR"
              );
              I.addClass("controlPanelButtonLabel"),
                I.css("position", "relative"),
                y.push(P),
                S.push(function (t) {
                  s.handleBottomButtonClicked(0);
                });
            }
            if (!1 !== T.apply) {
              var M = n.createDivElement(
                this._rightSideContainerElement,
                "ocDialogButtonApply_" + f
              );
              M.addClass("controlPanelButton"),
                M.addClass("overlayDialogButton"),
                M.css("position", "relative"),
                M.css("left", "15%");
              var O = n.createLabelTextElement(
                M,
                "ocDialogButtonLabelApply_" + f,
                "APPLY"
              );
              O.addClass("controlPanelButtonLabel"),
                O.css("position", "relative"),
                k.push(M),
                y.push(M),
                S.push(function (t) {
                  s.handleBottomButtonClicked(1);
                });
            }
            (this._bottomButtonManagers[f.toUpperCase()] = new t.ButtonManager(
              k,
              y
            )),
              (this._bottomButtonClickHandlers[f.toUpperCase()] = S);
          }
          (this._customOutcomeTextInputElement = n.createTextInputElement(
            this._customOutcomeBackgroundElement,
            "ocCustomInputTextElement",
            "",
            ""
          )),
            (this._actionListContainerElement = n.createDivElement(
              this._containerElement,
              "ocActionListContainerElement"
            )),
            this._actionListContainerElement.css("position", "absolute"),
            (this._actionListLabels = []);
          for (var D = 0; D < 20; D++) {
            var R = (this._actionListLabels[D] = n.createLabelTextElement(
              this._actionListContainerElement,
              "ocActionListLabel" + D,
              ""
            ));
            R.addClass("dialogLabel"), R.css("position", "static");
          }
          this.setSelectedPageIndex(this._initialPage), this.hide();
        }),
        (e.prototype.updateLayout = function () {
          this._backgroundElement.css("left", 0),
            this._backgroundElement.css("top", 0),
            this._backgroundElement.css("opacity", 0.8),
            this._closeIcon.css("right", "30px"),
            this._closeIcon.css("top", "15px"),
            this._closeIcon.css("width", "80px"),
            this._closeIcon.css("height", "80px"),
            this._ocIcon.css("left", "20px"),
            this._ocIcon.css("top", "15px"),
            this._ocIcon.css("width", "80px"),
            this._ocIcon.css("height", "80px"),
            this._titleLabelElement.css("font-size", "40px"),
            this._titleLabelElement.css("padding-top", "30px"),
            this._titleLabelElement.css("left", "120px"),
            this._titleLabelElement.css("text-align", "left"),
            this._titleLabelElement.css("width", "500px"),
            this._containerElement.css("padding-top", 0),
            this._containerElement.css("width", "1100px"),
            this._containerElement.css("height", "600px"),
            this._containerElement.css("top", "16px"),
            this._containerElement.css("left", "90px"),
            this._titleDividerElement.css("border-bottom", "2px solid #333333"),
            this._titleDividerElement.css("left", 0),
            this._titleDividerElement.css("top", "140px"),
            this._titleDividerElement.css(
              "width",
              this._containerElement.width() + "px"
            ),
            this._backgroundElement.css("border-radius", "20px"),
            this._backgroundElement.css("width", "100%"),
            this._backgroundElement.css("height", "100%"),
            this._leftSideContainerElement.css("top", "150px"),
            this._leftSideContainerElement.css("width", "80%"),
            this._rightSideContainerElement.css("left", "80%"),
            this._rightSideContainerElement.css("top", "150px"),
            this._rightSideContainerElement.css("width", "20%"),
            this._pageButtonsContainerElement.css("top", "14px"),
            this._pageButtonsContainerElement.css("left", "40%"),
            this._pageButtonsContainerElement.css("width", "50%"),
            this._pageButtonsContainerElement.css("height", "140px"),
            this._pageButtonsContainerElement.css("overflow", "auto");
          for (var t = 0; t < this._pageContainerElements.length; t++)
            this._pageContainerElements[t].css("padding-left", "20px");
          this._customOutcomeSymbolCounterLabel.css("top", "530px"),
            this._customOutcomeSymbolCounterLabel.css("font-size", "20px"),
            this._customOutcomeSymbolCounterLabel.css("left", "30px"),
            this._customOutcomeLabel.css("top", "0px"),
            this._customOutcomeLabel.css(
              "font-size",
              this._customLabelOutcomeFontSize + "px"
            ),
            this._customOutcomeLabel.css("left", "20px"),
            this._customOutcomeBackgroundElement.css("border-width", "4px"),
            this._customOutcomeBackgroundElement.css(
              "-webkit-border-radius",
              "10px"
            ),
            this._customOutcomeBackgroundElement.css("border-radius", "10px"),
            this._customOutcomeBackgroundElement.css("left", "20px"),
            this._customOutcomeBackgroundElement.css("top", "310px"),
            this._customOutcomeBackgroundElement.css("width", "670px"),
            this._customOutcomeBackgroundElement.css("height", "70px"),
            this._customOutcomeTextInputElement.css("border", "0px"),
            this._customOutcomeTextInputElement.addClass("customInputField"),
            this._customOutcomeTextInputElement.css("width", "630px"),
            this._customOutcomeTextInputElement.css("height", "50px"),
            this._customOutcomeTextInputElement.css("left", "20px"),
            this._customOutcomeTextInputElement.css("font-size", "40px"),
            this._customOutcomeTextInputElement.css(
              "background",
              "rgba(0,0,0,1)"
            );
          var e = this;
          this._customOutcomeTextInputElement.on("paste", function () {
            var t = this;
            setTimeout(function () {
              var n = $(t).val();
              (e._customOutcome = n.split(",")), e.generateOutcomeString();
            }, 10);
          }),
            this._customOutcomeTextInputElement.on("keydown", function (t) {
              var n = this;
              return (
                17 === t.which ||
                86 === t.which ||
                (8 === t.which
                  ? (setTimeout(function () {
                      var t = $(n).val();
                      (e._customOutcome = t.split(",")),
                        e.generateOutcomeString();
                    }, 30),
                    !0)
                  : 188 === t.which
                  ? (setTimeout(function () {
                      var t = $(n).val();
                      (e._customOutcome = t.split(",")),
                        e.generateOutcomeString();
                    }, 30),
                    !0)
                  : t.which < 48 ||
                    t.which > 57 ||
                    !(t.which < 96 || t.which > 105)
                  ? t.which > 57
                    ? (setTimeout(function () {
                        var t = $(n).val();
                        (e._customOutcome = t.split(",")),
                          e.generateOutcomeString();
                      }, 30),
                      !1)
                    : 32 != t.which ||
                      (setTimeout(function () {
                        var t = $(n).val();
                        (e._customOutcome = t.split(",")),
                          e.generateOutcomeString();
                      }, 30),
                      !1)
                  : (setTimeout(function () {
                      var t = $(n).val();
                      (e._customOutcome = t.split(",")),
                        e.generateOutcomeString();
                    }, 30),
                    !0))
              );
            }),
            (this._pageButtonManager.minWidth = "120px"),
            (this._pageButtonManager.paddingTop = "3px"),
            (this._pageButtonManager.paddingBottom = "3px"),
            (this._pageButtonManager.marginLeft = "0px"),
            (this._pageButtonManager.marginRight = "5px"),
            (this._pageButtonManager.marginBottom = "5px"),
            (this._pageButtonManager.fontSize = "25px"),
            (this._pageButtonManager.borderRadius = "50px"),
            (this._pageButtonManager.borderSize = "4px");
          for (t = 0; t < this._buttonManagers.length; t++)
            null != this._buttonManagers[t] &&
              ((this._buttonManagers[t].minWidth = "140px"),
              (this._buttonManagers[t].paddingTop = "6px"),
              (this._buttonManagers[t].paddingBottom = "6px"),
              (this._buttonManagers[t].marginLeft = "0px"),
              (this._buttonManagers[t].marginRight = "20px"),
              (this._buttonManagers[t].marginBottom = "10px"),
              (this._buttonManagers[t].fontSize = "30px"),
              (this._buttonManagers[t].borderRadius = "60px"),
              (this._buttonManagers[t].borderSize = "4px"));
          for (var n in ((this._customSymbolsButtonManager.minWidth = "140px"),
          (this._customSymbolsButtonManager.paddingTop = "6px"),
          (this._customSymbolsButtonManager.paddingBottom = "6px"),
          (this._customSymbolsButtonManager.marginLeft = "0px"),
          (this._customSymbolsButtonManager.marginRight = "20px"),
          (this._customSymbolsButtonManager.marginBottom = "10px"),
          (this._customSymbolsButtonManager.fontSize = "30px"),
          (this._customSymbolsButtonManager.borderRadius = "60px"),
          (this._customSymbolsButtonManager.borderSize = "4px"),
          this._bottomButtonsContainerElement.css("top", "430px"),
          this._bottomButtonsContainerElement.css("right", "30px"),
          this._bottomButtonManagers)) {
            var s = this._bottomButtonManagers[n];
            (s.minWidth = "150px"),
              (s.paddingTop = "7px"),
              (s.paddingBottom = "7px"),
              (s.marginLeft = "0px"),
              (s.marginRight = "30px"),
              (s.marginBottom = "5px"),
              (s.fontSize = "35px"),
              (s.borderRadius = "60px"),
              (s.borderSize = "4px");
          }
          this._actionListContainerElement.css("top", "555px"),
            this._actionListContainerElement.css("font-size", "20px"),
            this._actionListContainerElement.css("left", "30px"),
            this._customSymbolsButtonManager.layout(
              this._orientation,
              this._gameContainerArea,
              this._gameArea
            ),
            this._pageButtonManager.layout(
              this._orientation,
              this._gameContainerArea,
              this._gameArea
            );
          for (t = 0; t < this._buttonManagers.length; t++)
            null != this._buttonManagers[t] &&
              this._buttonManagers[t].layout(
                this._orientation,
                this._gameContainerArea,
                this._gameArea
              );
          this._currentBottomButtonManager.layout(
            this._orientation,
            this._gameContainerArea,
            this._gameArea
          );
        }),
        (e.prototype.layout = function (t, e, n) {
          (this._orientation = t),
            (this._gameContainerArea = e),
            (this._gameArea = n),
            this.updateLayout();
        }),
        (e.prototype.enablePageShortCuts = function (t, e) {
          tk_common.phaser.utils.addKeyDownListener &&
            (this._buttonShortCuts[t] &&
              (this._buttonShortCuts[t].enabled = !1),
            this._buttonShortCuts[e] &&
              (this._buttonShortCuts[e].enabled = !0));
        }),
        (e.prototype.disablePageShortCuts = function (t) {
          tk_common.phaser.utils.addKeyDownListener &&
            this._buttonShortCuts[t] &&
            (this._buttonShortCuts[t].enabled = !1);
        }),
        e
      );
    })();
    t.OcDialogManager = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function () {
      function t(t) {
        (this._containerElement = t),
          this._containerElement.css("display", "block");
      }
      return (
        (t.prototype.handleClick = function () {}),
        (t.prototype.show = function () {
          this._containerElement.css("display", "block");
        }),
        (t.prototype.hide = function () {}),
        (t.prototype.layout = function (t, e, n) {}),
        t
      );
    })();
    t.IOSFullScreenSwipeManager = e;
  })(tk_gui || (tk_gui = {})),
  (function (t) {
    var e = (function () {
      function e() {
        (this._numberOfRows = 0),
          (this._visible = !0),
          (this._open = !0),
          (this._showingFinalDialog = !1),
          (this._finalTransitionComplete = !1),
          (this._showingWinPresentation = !1),
          (this._showDelayedCompleteDialog = !1),
          (this._handedness = !0),
          (this.OkButtonClicked = new Phaser.Signal());
      }
      return (
        Object.defineProperty(e.prototype, "guiSettingsHelper", {
          set: function (t) {
            this._guiSettingsHelper = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.buildContent = function (e, n) {
          var s = this;
          (this._containerElement = n.createDivElement(e, "topSpinsContainer")),
            this._containerElement.css("overflow", "hidden"),
            (this._dialogContainerElement = n.createDivElement(
              this._containerElement,
              "topSpinsDialogContainer"
            )),
            this._dialogContainerElement.css("will-change", "transform"),
            this._dialogContainerElement.bind("tap", function (t) {
              s.handleToggleButtonClicked();
            }),
            this._dialogContainerElement.css("cursor", "pointer"),
            (this._openButtonBackgroundElement = n.createDivElement(
              this._dialogContainerElement,
              "topSpinsOpenButtonBackground"
            )),
            this._openButtonBackgroundElement.css("position", "absolute"),
            this._openButtonBackgroundElement.css(
              "background-color",
              "#373737"
            ),
            this._openButtonBackgroundElement.css("border-radius", "8px"),
            (this._backgroundElement = n.createDivElement(
              this._dialogContainerElement,
              "topSpinsDialogBackground"
            )),
            this._backgroundElement.css("border-radius", "15px"),
            this._backgroundElement.css("background-color", "#373737"),
            this._backgroundElement.css("opacity", ".7"),
            (this._innerBackgroundElement = n.createDivElement(
              this._dialogContainerElement,
              "topSpinsDialogInnerBackground"
            )),
            this._innerBackgroundElement.css("border-radius", "15px"),
            this._innerBackgroundElement.css("background-color", "black"),
            this._innerBackgroundElement.css("background", "rgba(0, 0, 0, 1)"),
            this._innerBackgroundElement.css(
              "background",
              "-moz-linear-gradient(top, rgba(0, 0, 0, 1) 0%, rgba(8, 8, 8, 0.74) 100%)"
            ),
            this._innerBackgroundElement.css(
              "background",
              "-webkit-gradient(left top, left bottom, color - stop(0 %, rgba(0, 0, 0, 1)), color - stop(100 %, rgba(8, 8, 8, 0.74))"
            ),
            this._innerBackgroundElement.css(
              "background",
              "-webkit-linear-gradient(top, rgba(0, 0, 0, 1) 0%, rgba(8, 8, 8, 0.74) 100%)"
            ),
            this._innerBackgroundElement.css(
              "background",
              "-o-linear-gradient(top, rgba(0, 0, 0, 1) 0%, rgba(8, 8, 8, 0.74) 100%)"
            ),
            this._innerBackgroundElement.css(
              "background",
              "-ms-linear-gradient(top, rgba(0, 0, 0, 1) 0%, rgba(8, 8, 8, 0.74) 100%)"
            ),
            (this._backgroundLightElement = n.createDivElement(
              this._dialogContainerElement,
              "topSpinBackgroundLightElement"
            )),
            this._backgroundLightElement.css("width", "170px"),
            this._backgroundLightElement.css("height", "350px"),
            this._backgroundLightElement.css(
              "background",
              "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI4MHB4IiBoZWlnaHQ9Ijk3cHgiIHZpZXdCb3g9IjAgMCA4MCA5NyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5SZWN0YW5nbGU8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM + PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsLW9wYWNpdHk9IjAuMTk0ODU5NjAxIj4gICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzMy4wMDAwMDAsIDAuMDAwMDAwKSIgZmlsbD0iI0FFQUVBRSI + ICAgICAgICAgICAgPHBhdGggZD0iTTE0OCwwIEwyMDQuNzc4MTEzLDAgTDIwNC43NzgxMTMsMS43NzYzNTY4NGUtMTUgQzIwOS4xOTYzOTEsOS42NDczMjMzOGUtMTYgMjEyLjc3ODExMywzLjU4MTcyMiAyMTIuNzc4MTEzLDggQzIxMi43NzgxMTMsOS44MDk0ODY1NSAyMTIuMTY0NjczLDExLjU2NTUyNTUgMjExLjAzNzk0OCwxMi45ODE0MTE1IEwxNDcuMjU5ODM1LDkzLjEyNzQ2ODggTDE0Ny4yNTk4MzUsOTMuMTI3NDY4OCBDMTQ0LjUwODY3OCw5Ni41ODQ2ODA1IDEzOS40NzU4LDk3LjE1NzA1MDQgMTM2LjAxODU4OSw5NC40MDU4OTI4IEMxMzQuMTExMjgzLDkyLjg4ODEwOTggMTMzLDkwLjU4MzU3MjEgMTMzLDg4LjE0NjA1NzMgTDEzMywxNSBMMTMzLDE1IEMxMzMsNi43MTU3Mjg3NSAxMzkuNzE1NzI5LDMuMjk4MTUyNzhlLTE1IDE0OCwxLjc3NjM1Njg0ZS0xNSBaIiBpZD0iUmVjdGFuZ2xlIj48L3BhdGg + ICAgICAgICA8L2c + ICAgIDwvZz48L3N2Zz4="
            ),
            this._backgroundLightElement.css("background-repeat", "no-repeat"),
            this._backgroundLightElement.css("display", "none"),
            (this._textContainerElement = n.createDivElement(
              this._dialogContainerElement,
              "topSpinsTextContainer"
            )),
            (this._titleLabelElement = n.createLabelTextElement(
              this._textContainerElement,
              "topSpinsTitleLabel",
              "TOP SPINS"
            )),
            this._titleLabelElement.addClass("dialogLabel"),
            this._titleLabelElement.css("font-size", "20px"),
            this._titleLabelElement.css("font-weight", "bold"),
            this._titleLabelElement.css("color", "#939393"),
            this._titleLabelElement.css("text-align", "center"),
            (this._resultTitleLabelElement = n.createLabelTextElement(
              this._textContainerElement,
              "topSpinsResultTitleLabel",
              "topSpinsCompleteDialogTitle_uc"
            )),
            this._resultTitleLabelElement.addClass("dialogLabel"),
            this._resultTitleLabelElement.css("font-size", "24px"),
            this._resultTitleLabelElement.css("display", "none"),
            (this._spinsCounterLabelElement = n.createLabelTextElement(
              this._textContainerElement,
              "topSpinsCounterLabel",
              "-"
            )),
            this._spinsCounterLabelElement.addClass("dialogLabel"),
            this._spinsCounterLabelElement.css("text-align", "center"),
            (this._totalWinTitleLabelElement = n.createLabelTextElement(
              this._textContainerElement,
              "totalWinTitleLabel",
              "TOTAL WIN"
            )),
            this._totalWinTitleLabelElement.addClass("dialogLabel"),
            this._totalWinTitleLabelElement.css("font-size", "15px"),
            this._totalWinTitleLabelElement.css("color", "#939393"),
            (this._totalWinValueLabelElement = n.createLabelTextElement(
              this._textContainerElement,
              "totalWinValueLabel",
              "-"
            )),
            this._totalWinValueLabelElement.addClass("dialogLabel"),
            this._totalWinValueLabelElement.css("font-size", "28px"),
            this._totalWinValueLabelElement.css("color", "white"),
            (this._openButtonContainerElement = n.createDivElement(
              this._textContainerElement,
              "topSpinsOpenButtonContainer"
            )),
            this._openButtonContainerElement.css("position", "absolute"),
            this._openButtonContainerElement.css("background-color", "black"),
            this._openButtonContainerElement.css("border-radius", "8px"),
            (this._positionRowsContainerElement = n.createDivElement(
              this._textContainerElement,
              "topSpinsPositionsContainerElement"
            )),
            (this._positionRowElements = []),
            (this._positionRowAnimationElements = []);
          for (var i = 0; i < 10; i++) {
            var o = n.createLabelTextElement(
              this._positionRowsContainerElement,
              "topSpinsPositionTextLabel" + i,
              "-"
            );
            o.addClass("dialogLabel"),
              o.css("position", "absolute"),
              o.css("display", "none"),
              o.css("top", (30 * i).toString() + "px"),
              o.css("width", "200px"),
              this._positionRowElements.push(o);
          }
          for (i = 0; i < 10; i++) {
            var a = n.createLabelTextElement(
              this._positionRowsContainerElement,
              "topSpinsPositionAnimationTextLabel" + i,
              "-"
            );
            a.addClass("dialogLabel"),
              a.css("position", "absolute"),
              a.css("display", "none"),
              a.css("top", (30 * i).toString() + "px"),
              a.css("width", "200px"),
              this._positionRowAnimationElements.push(a);
          }
          (this._winRowMarkerElement = n.createDivElement(
            this._positionRowsContainerElement,
            "topSpinWinRowMarker"
          )),
            this._winRowMarkerElement.css(
              "background",
              "url('data:image/png+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAzCAYAAAAO9DNzAAAHm0lEQVR4nO2dz6vkRBDHP5l5T1dd / QP2Ih4V7yII3vxxFAXBP8l / QfAogifxIggrehHBmyAiehFZZGUR9bnrvtk37SFTm5raqk53JjNvXPsLTZLuquru9Dc1lU7SAw0NDQ3 / N6SUupRSd + h6D17h3DjwSTtUXf / 1etImAaSu61JOeAoOStwCkk1pT4lOrd1S + WOwe5k2tWxSW0lrSV3XrStsFle6M0ZIacsi2VK5qKzU7r7acJk29yVb01ZN2AvgnkoXzOh9T6YqOkTtgn19PJY / p82aemvsRm0qaesu7au1OaXe2jbZYyHtPWAF3AXON9vVJv9yiKsImyNd5xzXbK2NQ8mX5kfH0XaqnV3OYYmdGvsAi4w8DJ5WSHsHuK31Ukr35ggbioi7IeuCobMLk7w8nb / cmFqqPL09UbYj + 92IHSsr8nLSbJs8O53K89ppz4Enp+ vSxzk523dv3zs / FOpZ2THbOOVenk2wHS68B3y70RNPu04p7RwydOMiDxDXEtKSxubpk3xiZLVO55R5tlF1WBvRxWUHy7Pj1R / lRReyvWg8MniE9uxhbOQukjHCSX9zhK0hLjzYHg3xvH8D7wK / An8AZ / QeeEV / wzaZvLWhgm10NICe17WkRu1bIlovbQc8umAi8kcEtMS1eZ5uKZkjz13iYSNPnfOWUTsokC9NnufW9QiEuEvgHeD9zbGkNdtTZtWYcnPmNTjqZI48EdFt + dLsS7utvTEv7LUhF3KMkVfaEnn1Ehu2LHcOS3UieTtOOV0rW5JERwh5sbH1HPAS8DlmhmGXkGHyrILC1A6W / GSNDfgY4cbIkyuvtWP7VNLmnC74oUKXyc8RV5 / 7uYiLsa0h+ Ql4FfiJPkSQ2YU1PXkvppB3MS6yV9SSvuSCyNnNkSVHLk9 / 7Cc/ uqjGyJu7cLx6bZ1j7c + Vl15kuT5LWtI7xhPgSeAt4CngKvAY8AjDL2c1aog7lUi76EX7JXWUlI3ZtOVaLyqz5TXt0LC2vDJry7O3yxjV2LNlQmAh7zPA6wzkvQKcAsspj + 3nCBUaGiyEiOJ5ZXrsZeA7+ ocSK4abteqQoRG3YW5o7yu / 6Ineu66BN4Cb9OSVmzWZZbgoreSyY9yGhwe5EGm5SafANeA1+ pDhCYZ4d5lSKuZjI27DvmBjXblZOwVeAJ6nJ + /jwKOb/EVpvNtChYZ9Q8ibGMi7Bt4GfmF4AUfHu6NP1ZrHbTgU7CzDVbanyK6wCRkomCJrxG04BHTYoOd3nwVexMS6FPCyEbfhUNAPLIS8S / qnatcwDyXGYt1G3IZDwt6sLelvzt6kJ + 0pzeM2HAHGnjaKB34aeIVt0jaP23C00DMHN6h4zbERt2GfSM527Wy/ pv9Sovhd3UbchkNDfwV8AfwOfEblB5WNuA2Hgl5nQT5dXwEfArfoP6w835S1BxANRwG73oJ41i + BH + m / TRPiyks3WTTiNuwb0SIhN4BPgb / oifsPm0e / Ja83NuI27AvJ7GvingEfMHz5q71t0cxCI27DPhHFtV8AP9N729tUeltob4c1zIfE8NBAk8 + S9nvgOkOIcIdK0kLzuA3zw87Z6rXEzoCPgD + ZGCIIajxuqkxWx3YqSt3IPkG5radz8mzc5W31vrXfqa3V7Yyel2 / b0OHbtX208AbZ1mntRPKe7ag99jiy5d2QrYCPgd8YvO3dTVn1qjYPW6iQI7Mtt0TLXShaH7btWhJHNjwyr + l / 9bytlfHaEeV5F0dOXiOS1zqWxGv8i0Wmvlb0T8e+ ofe2QtrqEEEwF3FLvK7se8TSSQ + eh86U64H28qRua7cztjyvYRe7iD4F12W2jwvnOBlbemvr1Ta9hT1svQuzj9Lz5L18rQMPXji5T9RhGEeZ + rpFP / UlpL3 / sGHqyo1TiDv2857Lt8RCHV8wDJqGEFJ7LlneJxkd / VWp / lwk50mF0FrGekBLQq0TLdLhLeCh81B5nSNn83TSK9kQ6I4RN0q6j53a1 + e3hLgSIpzTT33dZFj07n6IwETUEtfGd3agx0i6VrpaXuSsXU02TWhNomiVF3nnc23k9OBY0mtSeLY8YnoE89oTkTwiLoG81SHQ12TSn8N4MtY2Tjls1xcRV8ZTiHsd + IHB21ZPfXnYxeNqDwXbP8FWXiBv / whpF2zr6wFZMqz4J3nrQNYjnHhxjwSRt4zIGOlOIWROTrcTRzay4dkb87g2FLDkjOyQqVsgHvcG8AnDg4ZZSAuFxO26LqWUdByof0ZyV67tlL7yd / lJi7yBPc7FhLbuaFCtLW3PyxuzS1Bm + 2Nt6D7a/ dy50vXV2vBkrKw + tjdlX9G//SVTXxIi7ERa3ZAqmO+BvP3S8lLdWhs5uTnqlP2p/bTnPcqrtTslb67xg+2bsnN6Dyvp/muLc/yBySTiagQftUUdj/Jy8rvaH7M3VbbkeMy+zttnv0vGINeW0nLtcWXuVi8tOnkWIWrIrChcjaT0ZJbqluhPrXNqfXPXOaV/pfVNrVPL6BtquZ+R2YNZ/+tsL8Sdih3/JXKq7mXUOYedXeveR7/t3L2EDrP/u+RREfeycRn/SbsDjr2tCWAff4fa0NDQ0NDQ0NDQ0NDQcCT4F4w2jtAiGZBxAAAAAElFTkSuQmCC')"
            ),
            this._winRowMarkerElement.css("width", "170px"),
            this._winRowMarkerElement.css("height", "40px"),
            this._winRowMarkerElement.css("background-repeat", "no-repeat"),
            this._winRowMarkerElement.css("top", "-10px"),
            this._winRowMarkerElement.css("left", "-10px"),
            this._winRowMarkerElement.css("display", "none"),
            (this._buttonContainer = n.createDivElement(
              this._dialogContainerElement,
              "topSpinsButtonContainerElement"
            ));
          var l = n.createDivElement(
            this._buttonContainer,
            "topSpinsDialogButtonOk"
          );
          l.addClass("controlPanelButton"),
            l.addClass("overlayDialogButton"),
            l.css("position", "relative");
          var r = n.createLabelTextElement(
            l,
            "topSpinsDialogLabelButtonOk",
            "notificationPageOkOption_uc"
          );
          r.addClass("controlPanelButtonLabel"),
            r.css("position", "relative"),
            this._openButtonContainerElement.css("display", "none"),
            this._openButtonBackgroundElement.css("display", "none"),
            (this._buttonManager = new t.ButtonManager([l], [r])),
            this._buttonManager.ButtonClicked.add(
              this.handleOkButtonClicked,
              this
            ),
            (this._buttonManager.minWidth = "150px"),
            this._buttonManager.setActiveIndexes([0]),
            this._buttonManager.hide(),
            this.hide();
        }),
        Object.defineProperty(e.prototype, "isVisible", {
          get: function () {
            return this._visible;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "showingFinalDialog", {
          get: function () {
            return this._showingFinalDialog;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.handleOkButtonClicked = function () {
          this.OkButtonClicked.dispatch();
        }),
        (e.prototype.numberOfRows = function (t) {
          if (this._numberOfRows !== t) {
            this._numberOfRows = t;
            for (var e = 0; e < t; e++)
              this._positionRowElements[e].css("display", "block");
          }
        }),
        (e.prototype.show = function () {
          !1 === this._visible &&
            ((this._visible = !0),
            this._containerElement.css("display", "block"),
            this.relayout());
        }),
        (e.prototype.hide = function () {
          (this._showingFinalDialog = !1),
            (this._visible = !1),
            this._containerElement.css("display", "none");
        }),
        (e.prototype.relayout = function () {
          this.layout(
            this._orientation,
            this._gameContainerArea,
            this._gameArea,
            this._hasDesktopGui,
            this._hasMaximizedPortrait,
            this._isControlPanelOpen,
            this._showingInfoBar,
            this._gameMarginTop
          );
        }),
        (e.prototype.layout = function (t, e, n, s, i, o, a, l) {
          (this._orientation = t),
            (this._gameContainerArea = e),
            (this._gameArea = n),
            (this._hasDesktopGui = s),
            (this._hasMaximizedPortrait = i),
            (this._isControlPanelOpen = o),
            (this._showingInfoBar = a),
            (this._gameMarginTop = l),
            this._buttonManager.layout(t, e, n),
            s
              ? this.layoutForDesktop(t, e, n, s, a)
              : this.layoutForMobile(t, e, n, s, a);
        }),
        Object.defineProperty(e.prototype, "spinsLeft", {
          set: function (t) {
            this._spinsCounterLabelElement.text(t.toString());
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "totalWin", {
          set: function (t) {
            this._totalWinValueLabelElement.text(t);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "currentWins", {
          set: function (t) {
            if (void 0 === this._currentWinValues && null !== t) {
              this._currentWinValues = t;
              for (var e = 0; e < this._numberOfRows; e++)
                this._positionRowElements[e].text(
                  (e + 1).toString() + ") " + t[e]
                );
            }
            if (null != t && t.length > 0)
              for (e = 0; e < this._numberOfRows; e++)
                if (t[e] !== this._currentWinValues[e]) {
                  this._showingWinPresentation = !0;
                  for (var n = e; n < this._numberOfRows; n++)
                    this._positionRowElements[n].css("display", "none"),
                      this._positionRowElements[n].text(
                        (n + 1).toString() + ") " + t[n]
                      ),
                      n === e &&
                        (this._positionRowElements[n].css("display", "block"),
                        TweenMax.to(this._positionRowElements[n], 0.3, {
                          css: { scale: 1.3 },
                          ease: Linear.easeIn,
                        }),
                        TweenMax.to(this._positionRowElements[n], 0.3, {
                          css: { scale: 1 },
                          delay: 0.3,
                          ease: Linear.easeOut,
                        }),
                        TweenMax.to(this._positionRowElements[n], 0.3, {
                          textShadow: "0px 0px 8px rgba(255, 255, 255, 1)",
                          color: "white",
                        }),
                        TweenMax.to(this._positionRowElements[n], 0.3, {
                          textShadow: "0px 0px 0px rgba(255, 255, 255, 0)",
                          color: "white",
                          delay: 0.3,
                        }),
                        this._winRowMarkerElement.css("display", "block"),
                        this._orientation ===
                        tk_common.constants.OrientationEnum.LANDSCAPE
                          ? (TweenLite.fromTo(
                              this._winRowMarkerElement,
                              0.2,
                              { width: 0, transformOrigin: "left center" },
                              { width: 170, transformOrigin: "left center" }
                            ),
                            TweenLite.fromTo(
                              this._winRowMarkerElement,
                              0.3,
                              { width: 170, transformOrigin: "right center" },
                              {
                                width: 0,
                                transformOrigin: "right center",
                                delay: 0.2,
                              }
                            ),
                            this._winRowMarkerElement.css(
                              "top",
                              30 * n - 10 + "px"
                            ))
                          : (TweenLite.fromTo(
                              this._winRowMarkerElement,
                              0.2,
                              { width: 0, transformOrigin: "left center" },
                              { width: 340, transformOrigin: "left center" }
                            ),
                            TweenLite.fromTo(
                              this._winRowMarkerElement,
                              0.3,
                              { width: 340, transformOrigin: "right center" },
                              {
                                width: 0,
                                transformOrigin: "right center",
                                delay: 0.2,
                              }
                            ),
                            this._winRowMarkerElement.css(
                              "top",
                              60 * n - 10 + "px"
                            )),
                        TweenLite.fromTo(
                          this._winRowMarkerElement,
                          0.1,
                          { opacity: 0 },
                          { opacity: 1 }
                        ),
                        TweenLite.to(this._winRowMarkerElement, 0.3, {
                          opacity: 0,
                          delay: 0.1,
                        }),
                        TweenMax.fromTo(
                          this._positionRowElements[n],
                          0.3,
                          { css: { opacity: 0 } },
                          { css: { opacity: 1 } }
                        )),
                      this._positionRowAnimationElements[n].css(
                        "display",
                        "block"
                      ),
                      this._orientation ===
                      tk_common.constants.OrientationEnum.LANDSCAPE
                        ? TweenMax.to(
                            this._positionRowAnimationElements[n],
                            0.3,
                            { css: { top: "+=30px" } }
                          )
                        : TweenMax.to(
                            this._positionRowAnimationElements[n],
                            0.3,
                            { css: { top: "+=60px" } }
                          ),
                      n === this._numberOfRows - 1
                        ? TweenMax.to(
                            this._positionRowAnimationElements[n],
                            0.3,
                            { css: { opacity: 0 } }
                          )
                        : this._positionRowAnimationElements[n].text(
                            (n + 2).toString() +
                              ") " +
                              this._currentWinValues[n]
                          );
                  TweenMax.delayedCall(
                    0.4,
                    this.listUpdateAnimationComplete,
                    [],
                    this
                  );
                  break;
                }
            null !== t && (this._currentWinValues = t);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.listUpdateAnimationComplete = function () {
          TweenMax.to(this._totalWinValueLabelElement, 0.15, {
            css: { scale: 1.3 },
            ease: Linear.easeIn,
          }),
            TweenMax.to(this._totalWinValueLabelElement, 0.2, {
              css: { scale: 1 },
              delay: 0.15,
              ease: Linear.easeOut,
            }),
            TweenMax.to(this._totalWinValueLabelElement, 0.3, {
              textShadow: "0px 0px 8px rgba(255, 255, 255, 1)",
              color: "white",
            }),
            TweenMax.to(this._totalWinValueLabelElement, 0.3, {
              textShadow: "0px 0px 0px rgba(255, 255, 255, 0)",
              color: "white",
              delay: 0.3,
            });
          for (var t = 0; t < this._numberOfRows; t++)
            this._orientation === tk_common.constants.OrientationEnum.LANDSCAPE
              ? this._positionRowAnimationElements[t].css(
                  "top",
                  (30 * t).toString() + "px"
                )
              : this._positionRowAnimationElements[t].css(
                  "top",
                  (60 * t).toString() + "px"
                ),
              this._positionRowAnimationElements[t].css("display", "none"),
              this._positionRowElements[t].css("display", "block");
          TweenMax.delayedCall(
            0.6,
            this.handleWinPresentationComplete,
            [],
            this
          );
        }),
        (e.prototype.handleWinPresentationComplete = function () {
          (this._showingWinPresentation = !1),
            this._showDelayedCompleteDialog &&
              ((this._showDelayedCompleteDialog = !1),
              TweenMax.delayedCall(0.3, this.showCompleteDialog, [], this));
        }),
        (e.prototype.layoutForDesktop = function (t, e, n, s, i) {
          var o = 1280 / e.width;
          e.width;
          this._containerElement.css("width", "180px"),
            this._containerElement.css("height", "300px"),
            this._containerElement.css("left", "0px"),
            this._containerElement.css("top", "150px"),
            this._dialogContainerElement.css("width", "160px"),
            this._dialogContainerElement.css("height", "350px"),
            this._open
              ? this._dialogContainerElement.css("left", "15px")
              : this._dialogContainerElement.css(
                  "left",
                  "-" + (this._dialogContainerElement.width() - 35) + "px"
                ),
            this._titleLabelElement.css("font-size", "20px"),
            this._spinsCounterLabelElement.css("font-size", "40px"),
            this._backgroundElement.css("width", "160px"),
            this._innerBackgroundElement.css("width", "150px"),
            this._innerBackgroundElement.css("left", "5px"),
            this._innerBackgroundElement.css("top", "4px"),
            this._backgroundLightElement.css("top", "5px"),
            this._backgroundLightElement.css("left", "5px"),
            (this._buttonManager.minWidth = "150px"),
            (this._buttonManager.paddingTop = "5px"),
            (this._buttonManager.paddingBottom = "5px"),
            (this._buttonManager.marginLeft = "0px"),
            (this._buttonManager.marginRight = "20px"),
            (this._buttonManager.marginBottom = "47px"),
            (this._buttonManager.fontSize = "30px"),
            (this._buttonManager.borderRadius = "70px"),
            (this._buttonManager.borderSize = "4px"),
            this._buttonContainer.css("top", "195px"),
            this._buttonContainer.css("left", "30px"),
            1 === this._numberOfRows &&
              this._containerElement.css("top", "230px"),
            2 === this._numberOfRows &&
              this._containerElement.css("top", "220px"),
            3 === this._numberOfRows &&
              this._containerElement.css("top", "200px"),
            4 === this._numberOfRows &&
              this._containerElement.css("top", "185px"),
            5 === this._numberOfRows &&
              this._containerElement.css("top", "155px"),
            6 === this._numberOfRows &&
              this._containerElement.css("top", "140px"),
            7 === this._numberOfRows &&
              this._containerElement.css("top", "110px"),
            8 === this._numberOfRows &&
              this._containerElement.css("top", "80px"),
            9 === this._numberOfRows &&
              this._containerElement.css("top", "60px"),
            this._numberOfRows >= 10 &&
              this._containerElement.css("top", "30px"),
            this._titleLabelElement.css("top", "10px"),
            this._titleLabelElement.css("left", "0px"),
            this._titleLabelElement.css("width", "160px"),
            this._titleLabelElement.css("text-align", "center"),
            this._resultTitleLabelElement.css("top", "10px"),
            this._resultTitleLabelElement.css("left", "0px"),
            this._resultTitleLabelElement.css("width", "160px"),
            this._resultTitleLabelElement.css("text-align", "center"),
            this._spinsCounterLabelElement.css("top", "28px"),
            this._spinsCounterLabelElement.css("left", "0px"),
            this._spinsCounterLabelElement.css("width", "160px"),
            this._spinsCounterLabelElement.css("text-align", "center"),
            this._positionRowsContainerElement.css("width", "165px"),
            this._positionRowsContainerElement.css("left", "0px"),
            this._positionRowsContainerElement.css("top", "72px");
          for (var a = 0; a < this._numberOfRows; a++)
            this._positionRowElements[a].css("font-size", "21px"),
              this._positionRowElements[a].css(
                "top",
                (30 * a).toString() + "px"
              ),
              this._positionRowElements[a].css("width", "160px"),
              this._positionRowElements[a].css("text-align", "center"),
              this._positionRowElements[a].css("color", "white"),
              this._positionRowAnimationElements[a].css("font-size", "21px"),
              this._positionRowAnimationElements[a].css(
                "top",
                (30 * a).toString() + "px"
              ),
              this._positionRowAnimationElements[a].css("width", "160px"),
              this._positionRowAnimationElements[a].css("text-align", "center"),
              this._positionRowAnimationElements[a].css("color", "white");
          if (
            (this._totalWinTitleLabelElement.css(
              "top",
              (86 + 30 * this._numberOfRows).toString() + "px"
            ),
            this._totalWinTitleLabelElement.css("left", "0px"),
            this._totalWinTitleLabelElement.css("width", "160px"),
            this._totalWinTitleLabelElement.css("text-align", "center"),
            this._totalWinValueLabelElement.css(
              "top",
              (105 + 30 * this._numberOfRows).toString() + "px"
            ),
            this._totalWinValueLabelElement.css("left", "0px"),
            this._totalWinValueLabelElement.css("width", "160px"),
            this._totalWinValueLabelElement.css("text-align", "center"),
            this._resultTitleLabelElement.css("font-size", "26px"),
            this._resultTitleLabelElement.css("text-align", "center"),
            this._resultTitleLabelElement.css("left", "0px"),
            this._resultTitleLabelElement.css("top", "15px"),
            this._resultTitleLabelElement.css("width", "160px"),
            this._titleLabelElement.css("font-size", "20px"),
            this._resultTitleLabelElement.css("font-size", "24px"),
            "pt-BR" === this._guiSettingsHelper.activeLanguageIso &&
              this._resultTitleLabelElement.css("font-size", "18px"),
            this._totalWinTitleLabelElement.css("font-size", "18px"),
            this._totalWinValueLabelElement.css("font-size", "26px"),
            this._backgroundElement.css(
              "height",
              160 + 30 * this._numberOfRows + "px"
            ),
            this._innerBackgroundElement.css(
              "height",
              140 + 30 * this._numberOfRows + "px"
            ),
            this._containerElement.css(
              "height",
              160 + 30 * this._numberOfRows + "px"
            ),
            this._dialogContainerElement.css(
              "height",
              160 + 30 * this._numberOfRows + "px"
            ),
            this._showingFinalDialog)
          ) {
            this._positionRowsContainerElement.css("top", "55px"),
              this._totalWinTitleLabelElement.css(
                "top",
                (75 + 30 * this._numberOfRows).toString() + "px"
              ),
              this._totalWinValueLabelElement.css(
                "top",
                (95 + 30 * this._numberOfRows).toString() + "px"
              ),
              this._buttonContainer.css(
                "top",
                (135 + 30 * this._numberOfRows).toString() + "px"
              ),
              this._containerElement.css(
                "width",
                this._containerElement.width() + 50 + "px"
              ),
              this._dialogContainerElement.css(
                "width",
                this._dialogContainerElement.width() + 50 + "px"
              ),
              this._innerBackgroundElement.css(
                "width",
                this._innerBackgroundElement.width() + 50 + "px"
              ),
              this._backgroundElement.css(
                "width",
                this._backgroundElement.width() + 50 + "px"
              ),
              this._resultTitleLabelElement.css(
                "width",
                this._backgroundElement.width() + "px"
              ),
              this._totalWinTitleLabelElement.css(
                "width",
                this._backgroundElement.width() + "px"
              ),
              this._totalWinValueLabelElement.css(
                "width",
                this._backgroundElement.width() + "px"
              );
            for (a = 0; a < this._numberOfRows; a++)
              this._positionRowElements[a].css(
                "width",
                this._backgroundElement.width() + "px"
              );
            this._containerElement.css(
              "height",
              210 + 30 * this._numberOfRows + "px"
            ),
              this._dialogContainerElement.css(
                "height",
                210 + 30 * this._numberOfRows + "px"
              ),
              this._backgroundElement.css(
                "height",
                230 + 30 * this._numberOfRows + "px"
              ),
              this._innerBackgroundElement.css(
                "height",
                210 + 30 * this._numberOfRows + "px"
              ),
              this._dialogContainerElement.css(
                "left",
                0.5 * this._gameContainerArea.width * o -
                  0.5 * this._dialogContainerElement.width() +
                  "px"
              ),
              1 === this._numberOfRows &&
                this._containerElement.css("top", "195px"),
              2 === this._numberOfRows &&
                this._containerElement.css("top", "180px"),
              3 === this._numberOfRows &&
                this._containerElement.css("top", "165px"),
              4 === this._numberOfRows &&
                this._containerElement.css("top", "150px"),
              5 === this._numberOfRows &&
                this._containerElement.css("top", "125px"),
              6 === this._numberOfRows &&
                this._containerElement.css("top", "110px"),
              7 === this._numberOfRows &&
                this._containerElement.css("top", "90px"),
              8 === this._numberOfRows &&
                this._containerElement.css("top", "80px"),
              9 === this._numberOfRows &&
                this._containerElement.css("top", "70px"),
              10 === this._numberOfRows &&
                this._containerElement.css("top", "70px");
          }
        }),
        (e.prototype.layoutForMobile = function (t, e, n, s, i) {
          if (t === tk_common.constants.OrientationEnum.LANDSCAPE) {
            var o = 1280 / e.width;
            e.width;
            this._containerElement.css("width", "180px"),
              this._containerElement.css("height", "300px"),
              1 == this._handedness
                ? this._containerElement.css("left", "0px")
                : this._containerElement.css("left", "1100px"),
              this._containerElement.css("top", "150px"),
              this._dialogContainerElement.css("width", "160px"),
              this._dialogContainerElement.css("height", "350px"),
              this._open
                ? this._dialogContainerElement.css("left", "15px")
                : this._dialogContainerElement.css(
                    "left",
                    "-" + (this._dialogContainerElement.width() - 35) + "px"
                  ),
              this._spinsCounterLabelElement.css("font-size", "40px"),
              this._backgroundElement.css("width", "160px"),
              this._innerBackgroundElement.css("width", "150px"),
              this._innerBackgroundElement.css("left", "5px"),
              this._innerBackgroundElement.css("top", "4px"),
              this._backgroundLightElement.css("top", "5px"),
              this._backgroundLightElement.css("left", "5px"),
              (this._buttonManager.paddingTop = "5px"),
              (this._buttonManager.paddingBottom = "5px"),
              (this._buttonManager.marginLeft = "0px"),
              (this._buttonManager.marginRight = "20px"),
              (this._buttonManager.marginBottom = "47px"),
              (this._buttonManager.fontSize = "25px"),
              (this._buttonManager.borderRadius = "70px"),
              (this._buttonManager.borderSize = "4px"),
              this._buttonContainer.css("top", "195px"),
              this._buttonContainer.css("left", "30px"),
              1 === this._numberOfRows &&
                this._containerElement.css("top", "230px"),
              2 === this._numberOfRows &&
                this._containerElement.css("top", "220px"),
              3 === this._numberOfRows &&
                this._containerElement.css("top", "200px"),
              4 === this._numberOfRows &&
                this._containerElement.css("top", "185px"),
              5 === this._numberOfRows &&
                this._containerElement.css("top", "155px"),
              6 === this._numberOfRows &&
                this._containerElement.css("top", "140px"),
              7 === this._numberOfRows &&
                this._containerElement.css("top", "110px"),
              8 === this._numberOfRows &&
                this._containerElement.css("top", "80px"),
              9 === this._numberOfRows &&
                this._containerElement.css("top", "60px"),
              this._numberOfRows >= 10 &&
                this._containerElement.css("top", "30px"),
              this._titleLabelElement.css("font-size", "22px"),
              this._titleLabelElement.css("top", "10px"),
              this._titleLabelElement.css("left", "0px"),
              this._titleLabelElement.css("width", "160px"),
              this._titleLabelElement.css("text-align", "center"),
              this._resultTitleLabelElement.css("top", "10px"),
              this._resultTitleLabelElement.css("left", "0px"),
              this._resultTitleLabelElement.css("width", "160px"),
              this._resultTitleLabelElement.css("text-align", "center"),
              this._spinsCounterLabelElement.css("top", "28px"),
              this._spinsCounterLabelElement.css("left", "0px"),
              this._spinsCounterLabelElement.css("width", "160px"),
              this._spinsCounterLabelElement.css("text-align", "center"),
              this._winRowMarkerElement.css("width", "170px"),
              this._winRowMarkerElement.css("height", "40px"),
              this._positionRowsContainerElement.css("width", "165px"),
              this._positionRowsContainerElement.css("left", "0px"),
              this._positionRowsContainerElement.css("top", "72px");
            for (var a = 0; a < this._numberOfRows; a++)
              this._positionRowElements[a].css("font-size", "21px"),
                this._positionRowElements[a].css(
                  "top",
                  (30 * a).toString() + "px"
                ),
                this._positionRowElements[a].css("width", "160px"),
                this._positionRowElements[a].css("text-align", "center"),
                this._positionRowElements[a].css("color", "#666"),
                this._positionRowAnimationElements[a].css("font-size", "21px"),
                this._positionRowAnimationElements[a].css(
                  "top",
                  (30 * a).toString() + "px"
                ),
                this._positionRowAnimationElements[a].css("width", "160px"),
                this._positionRowAnimationElements[a].css(
                  "text-align",
                  "center"
                ),
                this._positionRowAnimationElements[a].css("color", "#666");
            if (
              (this._positionRowElements[0].css("font-size", "23px"),
              this._positionRowElements[0].css("color", "white"),
              this._positionRowElements[1].css("font-size", "22px"),
              this._positionRowElements[1].css("color", "#cccccc"),
              this._positionRowElements[2].css("font-size", "21px"),
              this._positionRowElements[2].css("color", "#aeaeae"),
              this._totalWinTitleLabelElement.css(
                "top",
                (86 + 30 * this._numberOfRows).toString() + "px"
              ),
              this._totalWinTitleLabelElement.css("left", "0px"),
              this._totalWinTitleLabelElement.css("width", "160px"),
              this._totalWinTitleLabelElement.css("text-align", "center"),
              this._totalWinValueLabelElement.css(
                "top",
                (105 + 30 * this._numberOfRows).toString() + "px"
              ),
              this._totalWinValueLabelElement.css("left", "0px"),
              this._totalWinValueLabelElement.css("width", "160px"),
              this._totalWinValueLabelElement.css("text-align", "center"),
              this._resultTitleLabelElement.css("font-size", "26px"),
              this._resultTitleLabelElement.css("text-align", "center"),
              this._resultTitleLabelElement.css("left", "0px"),
              this._resultTitleLabelElement.css("top", "15px"),
              this._resultTitleLabelElement.css("width", "160px"),
              this._titleLabelElement.css("font-size", "20px"),
              this._resultTitleLabelElement.css("font-size", "24px"),
              this._totalWinTitleLabelElement.css("font-size", "18px"),
              this._totalWinValueLabelElement.css("font-size", "26px"),
              this._backgroundElement.css(
                "height",
                160 + 30 * this._numberOfRows + "px"
              ),
              this._innerBackgroundElement.css(
                "height",
                140 + 30 * this._numberOfRows + "px"
              ),
              this._containerElement.css(
                "height",
                160 + 30 * this._numberOfRows + "px"
              ),
              this._dialogContainerElement.css(
                "height",
                160 + 30 * this._numberOfRows + "px"
              ),
              this._showingFinalDialog)
            ) {
              this._positionRowsContainerElement.css("top", "55px"),
                this._totalWinTitleLabelElement.css(
                  "top",
                  (75 + 30 * this._numberOfRows).toString() + "px"
                ),
                this._totalWinValueLabelElement.css(
                  "top",
                  (95 + 30 * this._numberOfRows).toString() + "px"
                ),
                this._buttonContainer.css(
                  "top",
                  (135 + 30 * this._numberOfRows).toString() + "px"
                ),
                this._containerElement.css(
                  "width",
                  this._containerElement.width() + 50 + "px"
                ),
                this._dialogContainerElement.css(
                  "width",
                  this._dialogContainerElement.width() + 50 + "px"
                ),
                this._innerBackgroundElement.css(
                  "width",
                  this._innerBackgroundElement.width() + 50 + "px"
                ),
                this._backgroundElement.css(
                  "width",
                  this._backgroundElement.width() + 50 + "px"
                ),
                this._resultTitleLabelElement.css(
                  "width",
                  this._backgroundElement.width() + "px"
                ),
                this._totalWinTitleLabelElement.css(
                  "width",
                  this._backgroundElement.width() + "px"
                ),
                this._totalWinValueLabelElement.css(
                  "width",
                  this._backgroundElement.width() + "px"
                );
              for (a = 0; a < this._numberOfRows; a++)
                this._positionRowElements[a].css(
                  "width",
                  this._backgroundElement.width() + "px"
                );
              this._containerElement.css(
                "height",
                210 + 30 * this._numberOfRows + "px"
              ),
                this._dialogContainerElement.css(
                  "height",
                  210 + 30 * this._numberOfRows + "px"
                ),
                this._backgroundElement.css(
                  "height",
                  230 + 30 * this._numberOfRows + "px"
                ),
                this._innerBackgroundElement.css(
                  "height",
                  210 + 30 * this._numberOfRows + "px"
                ),
                this._dialogContainerElement.css(
                  "left",
                  0.5 * this._gameContainerArea.width * o -
                    0.5 * this._dialogContainerElement.width() +
                    "px"
                ),
                1 === this._numberOfRows &&
                  this._containerElement.css("top", "195px"),
                2 === this._numberOfRows &&
                  this._containerElement.css("top", "180px"),
                3 === this._numberOfRows &&
                  this._containerElement.css("top", "165px"),
                4 === this._numberOfRows &&
                  this._containerElement.css("top", "150px"),
                5 === this._numberOfRows &&
                  this._containerElement.css("top", "125px"),
                6 === this._numberOfRows &&
                  this._containerElement.css("top", "110px"),
                7 === this._numberOfRows &&
                  this._containerElement.css("top", "90px"),
                8 === this._numberOfRows &&
                  this._containerElement.css("top", "80px"),
                9 === this._numberOfRows &&
                  this._containerElement.css("top", "70px"),
                10 === this._numberOfRows &&
                  this._containerElement.css("top", "70px");
            }
          } else {
            (o = 1280 / e.width), e.width;
            this._open
              ? this._dialogContainerElement.css("left", "40px")
              : this._dialogContainerElement.css(
                  "left",
                  "-" + (this._dialogContainerElement.width() - 35) + "px"
                ),
              this._containerElement.css("left", "0px"),
              this._containerElement.css("width", "450px"),
              this._containerElement.css("height", "480px"),
              this._dialogContainerElement.css("width", "340px"),
              this._dialogContainerElement.css("height", "480px"),
              this._titleLabelElement.css("top", "14px"),
              this._titleLabelElement.css("left", "0px"),
              this._titleLabelElement.css("font-size", "44px"),
              this._titleLabelElement.css("width", "340px"),
              this._resultTitleLabelElement.css("top", "10px"),
              this._resultTitleLabelElement.css("left", "0px"),
              this._resultTitleLabelElement.css("width", "340px"),
              this._resultTitleLabelElement.css("text-align", "center"),
              this._spinsCounterLabelElement.css("font-size", "70px"),
              this._spinsCounterLabelElement.css("width", "340px"),
              this._textContainerElement.css("width", "340px"),
              this._innerBackgroundElement.css("left", "5px"),
              this._innerBackgroundElement.css("top", "4px"),
              this._backgroundLightElement.css("top", "5px"),
              this._backgroundLightElement.css("left", "5px"),
              (this._buttonManager.paddingTop = "10px"),
              (this._buttonManager.paddingBottom = "10px"),
              (this._buttonManager.marginLeft = "0px"),
              (this._buttonManager.marginRight = "20px"),
              (this._buttonManager.marginBottom = "47px"),
              (this._buttonManager.fontSize = "80px"),
              (this._buttonManager.borderRadius = "70px"),
              (this._buttonManager.borderSize = "4px"),
              1 === this._numberOfRows &&
                this._containerElement.css("top", 0.55 * e.height * o + "px"),
              2 === this._numberOfRows &&
                this._containerElement.css("top", 0.55 * e.height * o + "px"),
              3 === this._numberOfRows &&
                this._containerElement.css("top", 0.53 * e.height * o + "px"),
              4 === this._numberOfRows &&
                this._containerElement.css("top", 0.52 * e.height * o + "px"),
              5 === this._numberOfRows &&
                this._containerElement.css("top", 0.51 * e.height * o + "px"),
              6 === this._numberOfRows &&
                this._containerElement.css("top", 0.5 * e.height * o + "px"),
              7 === this._numberOfRows &&
                this._containerElement.css("top", 0.49 * e.height * o + "px"),
              8 === this._numberOfRows &&
                this._containerElement.css("top", 0.48 * e.height * o + "px"),
              9 === this._numberOfRows &&
                this._containerElement.css("top", 0.47 * e.height * o + "px"),
              this._numberOfRows >= 10 &&
                this._containerElement.css("top", 0.46 * e.height * o + "px"),
              this._containerElement.css(
                "height",
                260 + 70 * this._numberOfRows
              ),
              this._dialogContainerElement.css(
                "height",
                260 + 70 * this._numberOfRows
              ),
              this._backgroundElement.css(
                "height",
                260 + 70 * this._numberOfRows
              ),
              this._backgroundElement.css("width", "350px"),
              this._innerBackgroundElement.css("width", "340px"),
              this._innerBackgroundElement.css(
                "height",
                240 + 70 * this._numberOfRows
              ),
              this._spinsCounterLabelElement.css("top", "60px"),
              this._spinsCounterLabelElement.css("left", "0px"),
              this._spinsCounterLabelElement.css("text-align", "center"),
              this._winRowMarkerElement.css("width", "340px"),
              this._winRowMarkerElement.css("height", "90px"),
              this._positionRowsContainerElement.css("width", "340px"),
              this._positionRowsContainerElement.css("left", "0px"),
              this._positionRowsContainerElement.css("top", "140px");
            for (a = 0; a < this._numberOfRows; a++)
              this._positionRowElements[a].css("font-size", "38px"),
                this._positionRowElements[a].css(
                  "top",
                  (60 * a).toString() + "px"
                ),
                this._positionRowElements[a].css("width", "340px"),
                this._positionRowElements[a].css("text-align", "center"),
                this._positionRowElements[a].css("color", "white"),
                this._positionRowAnimationElements[a].css("font-size", "38px"),
                this._positionRowAnimationElements[a].css(
                  "top",
                  (60 * a).toString() + "px"
                ),
                this._positionRowAnimationElements[a].css("width", "340px"),
                this._positionRowAnimationElements[a].css(
                  "text-align",
                  "center"
                ),
                this._positionRowAnimationElements[a].css("color", "white");
            this._totalWinTitleLabelElement.css(
              "top",
              (135 + 70 * this._numberOfRows).toString() + "px"
            ),
              this._totalWinTitleLabelElement.css("left", "0px"),
              this._totalWinTitleLabelElement.css("width", "340px"),
              this._totalWinTitleLabelElement.css("text-align", "center"),
              this._totalWinTitleLabelElement.css("font-size", "34px"),
              this._totalWinValueLabelElement.css(
                "top",
                (172 + 70 * this._numberOfRows).toString() + "px"
              ),
              this._totalWinValueLabelElement.css("left", "0px"),
              this._totalWinValueLabelElement.css("width", "340px"),
              this._totalWinValueLabelElement.css("text-align", "center"),
              this._totalWinValueLabelElement.css("font-size", "44px"),
              this._resultTitleLabelElement.css("font-size", "44px"),
              this._resultTitleLabelElement.css("text-align", "center"),
              this._resultTitleLabelElement.css("left", "0px"),
              this._resultTitleLabelElement.css("top", "15px"),
              this._resultTitleLabelElement.css("width", "350px"),
              this._titleLabelElement.css("font-size", "40px"),
              this._totalWinTitleLabelElement.css("font-size", "38px"),
              this._buttonContainer.css(
                "top",
                (130 + 70 * this._numberOfRows).toString() + "px"
              ),
              this._buttonContainer.css("left", "35px"),
              this._showingFinalDialog &&
                (this._positionRowsContainerElement.css("top", "100px"),
                this._totalWinTitleLabelElement.css("width", "350px"),
                this._titleLabelElement.css("width", "350px"),
                this._totalWinTitleLabelElement.css(
                  "top",
                  (90 + 70 * this._numberOfRows).toString() + "px"
                ),
                this._totalWinValueLabelElement.css(
                  "top",
                  (130 + 70 * this._numberOfRows).toString() + "px"
                ),
                this._totalWinValueLabelElement.css("font-size", "45px"),
                this._containerElement.css(
                  "height",
                  340 + 70 * this._numberOfRows + "px"
                ),
                this._dialogContainerElement.css(
                  "height",
                  340 + 70 * this._numberOfRows + "px"
                ),
                this._backgroundElement.css(
                  "height",
                  360 + 70 * this._numberOfRows + "px"
                ),
                this._innerBackgroundElement.css(
                  "height",
                  340 + 70 * this._numberOfRows + "px"
                ),
                this._dialogContainerElement.css(
                  "left",
                  0.5 * this._gameContainerArea.width * o -
                    0.5 * this._dialogContainerElement.width() +
                    "px"
                ),
                this._buttonContainer.css(
                  "top",
                  (170 + 70 * this._numberOfRows).toString() + "px"
                ),
                1 === this._numberOfRows &&
                  this._containerElement.css(
                    "top",
                    0.52 * this._gameContainerArea.height * o + "px"
                  ),
                2 === this._numberOfRows &&
                  this._containerElement.css(
                    "top",
                    0.52 * this._gameContainerArea.height * o + "px"
                  ),
                3 === this._numberOfRows &&
                  this._containerElement.css(
                    "top",
                    0.52 * this._gameContainerArea.height * o + "px"
                  ),
                4 === this._numberOfRows &&
                  this._containerElement.css(
                    "top",
                    0.52 * this._gameContainerArea.height * o + "px"
                  ),
                5 === this._numberOfRows &&
                  this._containerElement.css(
                    "top",
                    0.52 * this._gameContainerArea.height * o + "px"
                  ),
                6 === this._numberOfRows &&
                  this._containerElement.css(
                    "top",
                    0.5 * this._gameContainerArea.height * o + "px"
                  ),
                7 === this._numberOfRows &&
                  this._containerElement.css(
                    "top",
                    0.5 * this._gameContainerArea.height * o + "px"
                  ),
                8 === this._numberOfRows &&
                  this._containerElement.css(
                    "top",
                    0.5 * this._gameContainerArea.height * o + "px"
                  ),
                9 === this._numberOfRows &&
                  this._containerElement.css(
                    "top",
                    0.5 * this._gameContainerArea.height * o + "px"
                  ),
                10 === this._numberOfRows &&
                  this._containerElement.css(
                    "top",
                    0.5 * this._gameContainerArea.height * o + "px"
                  ));
          }
          TweenMax.delayedCall(0.2, this.resizeOkButton, [], this);
        }),
        (e.prototype.resizeOkButton = function () {
          this._orientation === tk_common.constants.OrientationEnum.LANDSCAPE
            ? ((this._buttonManager.fontSize = "20px"),
              (this._buttonManager.minWidth = "140px"))
            : ((this._buttonManager.fontSize = "35px"),
              (this._buttonManager.minWidth = "280px")),
            this._buttonManager.layout(
              this._orientation,
              this._gameContainerArea,
              this._gameArea
            );
        }),
        (e.prototype.handleToggleButtonClicked = function () {
          this._showingFinalDialog;
        }),
        (e.prototype.close = function () {
          this._orientation === tk_common.constants.OrientationEnum.LANDSCAPE
            ? TweenMax.to(this._dialogContainerElement, 0.3, {
                css: {
                  left:
                    "-" + (this._dialogContainerElement.width() - 40) + "px",
                },
              })
            : TweenMax.to(this._dialogContainerElement, 0.3, {
                css: {
                  left:
                    "-" + (this._dialogContainerElement.width() - 80) + "px",
                },
              }),
            (this._open = !1);
        }),
        (e.prototype.open = function () {
          TweenMax.to(this._dialogContainerElement, 0.3, {
            css: { left: "15px" },
          }),
            (this._open = !0);
        }),
        (e.prototype.showCompleteDialog = function () {
          if (
            (this.show(),
            this._showingWinPresentation || this._finalTransitionComplete)
          )
            this._showDelayedCompleteDialog = !0;
          else {
            (this._showingFinalDialog = !0),
              this._containerElement.css("overflow", "visible");
            var t = 1280 / this._gameContainerArea.width;
            this._gameContainerArea.width;
            if (
              (this._resultTitleLabelElement.css("display", "block"),
              this._titleLabelElement.css("display", "none"),
              this._openButtonContainerElement.css("display", "none"),
              this._winRowMarkerElement.css("display", "none"),
              this._openButtonBackgroundElement.css("display", "none"),
              TweenMax.to(this._spinsCounterLabelElement, 0.3, {
                css: { opacity: "0" },
              }),
              this._orientation ===
                tk_common.constants.OrientationEnum.LANDSCAPE)
            ) {
              this._positionRowsContainerElement.css("top", "55px"),
                this._totalWinTitleLabelElement.css(
                  "top",
                  (75 + 30 * this._numberOfRows).toString() + "px"
                ),
                this._totalWinValueLabelElement.css(
                  "top",
                  (95 + 30 * this._numberOfRows).toString() + "px"
                ),
                this._buttonContainer.css(
                  "top",
                  (135 + 30 * this._numberOfRows).toString() + "px"
                ),
                this._containerElement.css(
                  "width",
                  this._containerElement.width() + 50 + "px"
                ),
                this._dialogContainerElement.css(
                  "width",
                  this._dialogContainerElement.width() + 50 + "px"
                ),
                this._innerBackgroundElement.css(
                  "width",
                  this._innerBackgroundElement.width() + 50 + "px"
                ),
                this._backgroundElement.css(
                  "width",
                  this._backgroundElement.width() + 50 + "px"
                ),
                this._resultTitleLabelElement.css(
                  "width",
                  this._backgroundElement.width() + "px"
                ),
                this._totalWinTitleLabelElement.css(
                  "width",
                  this._backgroundElement.width() + "px"
                ),
                this._totalWinValueLabelElement.css(
                  "width",
                  this._backgroundElement.width() + "px"
                );
              for (var e = 0; e < this._numberOfRows; e++)
                this._positionRowElements[e].css(
                  "width",
                  this._backgroundElement.width() + "px"
                );
              TweenMax.to(this._containerElement, 0.5, {
                css: { height: 210 + 30 * this._numberOfRows + "px" },
              }),
                TweenMax.to(this._dialogContainerElement, 0.5, {
                  css: { height: 210 + 30 * this._numberOfRows + "px" },
                }),
                TweenMax.to(this._backgroundElement, 0.5, {
                  css: { height: 230 + 30 * this._numberOfRows + "px" },
                }),
                TweenMax.to(this._innerBackgroundElement, 0.5, {
                  css: { height: 210 + 30 * this._numberOfRows + "px" },
                });
            } else
              this._positionRowsContainerElement.css("top", "100px"),
                this._totalWinTitleLabelElement.css("width", "350px"),
                this._titleLabelElement.css("width", "350px"),
                this._totalWinTitleLabelElement.css(
                  "top",
                  (90 + 70 * this._numberOfRows).toString() + "px"
                ),
                this._totalWinValueLabelElement.css(
                  "top",
                  (130 + 70 * this._numberOfRows).toString() + "px"
                ),
                this._totalWinValueLabelElement.css("font-size", "45px"),
                TweenMax.to(this._containerElement, 0.5, {
                  css: { height: 340 + 70 * this._numberOfRows + "px" },
                }),
                TweenMax.to(this._dialogContainerElement, 0.5, {
                  css: { height: 340 + 70 * this._numberOfRows + "px" },
                }),
                TweenMax.to(this._backgroundElement, 0.5, {
                  css: { height: 360 + 70 * this._numberOfRows + "px" },
                }),
                TweenMax.to(this._innerBackgroundElement, 0.5, {
                  css: { height: 340 + 70 * this._numberOfRows + "px" },
                }),
                this._buttonContainer.css(
                  "top",
                  (170 + 70 * this._numberOfRows).toString() + "px"
                );
            this._titleLabelElement.css("text-align", "center"),
              this._titleLabelElement.css("left", "0px"),
              this._totalWinTitleLabelElement.css("text-align", "center"),
              this._totalWinTitleLabelElement.css("left", "0px"),
              1 === this._numberOfRows &&
                (this._orientation ===
                tk_common.constants.OrientationEnum.LANDSCAPE
                  ? TweenMax.to(this._containerElement, 0.5, {
                      css: { top: "195px" },
                    })
                  : this._containerElement.css(
                      "top",
                      0.52 * this._gameContainerArea.height * t + "px"
                    )),
              2 === this._numberOfRows &&
                (this._orientation ===
                tk_common.constants.OrientationEnum.LANDSCAPE
                  ? TweenMax.to(this._containerElement, 0.5, {
                      css: { top: "180px" },
                    })
                  : this._containerElement.css(
                      "top",
                      0.52 * this._gameContainerArea.height * t + "px"
                    )),
              3 === this._numberOfRows &&
                (this._orientation ===
                tk_common.constants.OrientationEnum.LANDSCAPE
                  ? TweenMax.to(this._containerElement, 0.5, {
                      css: { top: "165px" },
                    })
                  : this._containerElement.css(
                      "top",
                      0.52 * this._gameContainerArea.height * t + "px"
                    )),
              4 === this._numberOfRows &&
                (this._orientation ===
                tk_common.constants.OrientationEnum.LANDSCAPE
                  ? TweenMax.to(this._containerElement, 0.5, {
                      css: { top: "150px" },
                    })
                  : this._containerElement.css(
                      "top",
                      0.52 * this._gameContainerArea.height * t + "px"
                    )),
              5 === this._numberOfRows &&
                (this._orientation ===
                tk_common.constants.OrientationEnum.LANDSCAPE
                  ? TweenMax.to(this._containerElement, 0.5, {
                      css: { top: "125px" },
                    })
                  : this._containerElement.css(
                      "top",
                      0.52 * this._gameContainerArea.height * t + "px"
                    )),
              6 === this._numberOfRows &&
                (this._orientation ===
                tk_common.constants.OrientationEnum.LANDSCAPE
                  ? TweenMax.to(this._containerElement, 0.5, {
                      css: { top: "110px" },
                    })
                  : this._containerElement.css(
                      "top",
                      0.5 * this._gameContainerArea.height * t + "px"
                    )),
              7 === this._numberOfRows &&
                (this._orientation ===
                tk_common.constants.OrientationEnum.LANDSCAPE
                  ? this._containerElement.css("top", "90px")
                  : this._containerElement.css(
                      "top",
                      0.5 * this._gameContainerArea.height * t + "px"
                    )),
              8 === this._numberOfRows &&
                (this._orientation ===
                tk_common.constants.OrientationEnum.LANDSCAPE
                  ? this._containerElement.css("top", "80px")
                  : this._containerElement.css(
                      "top",
                      0.5 * this._gameContainerArea.height * t + "px"
                    )),
              9 === this._numberOfRows &&
                (this._orientation ===
                tk_common.constants.OrientationEnum.LANDSCAPE
                  ? this._containerElement.css("top", "70px")
                  : this._containerElement.css(
                      "top",
                      0.5 * this._gameContainerArea.height * t + "px"
                    )),
              10 === this._numberOfRows &&
                (this._orientation ===
                tk_common.constants.OrientationEnum.LANDSCAPE
                  ? this._containerElement.css("top", "70px")
                  : this._containerElement.css(
                      "top",
                      0.5 * this._gameContainerArea.height * t + "px"
                    )),
              this._totalWinTitleLabelElement.css("text-align", "center"),
              this._totalWinTitleLabelElement.css("left", "0px"),
              this._totalWinValueLabelElement.css("text-align", "center"),
              this._totalWinValueLabelElement.css("left", "0px"),
              this._positionRowsContainerElement.css("left", "0px"),
              this._orientation ===
              tk_common.constants.OrientationEnum.LANDSCAPE
                ? 1 == this._handedness
                  ? TweenMax.to(this._dialogContainerElement, 0.5, {
                      css: {
                        left:
                          0.5 * this._gameContainerArea.width * t -
                          0.5 * this._dialogContainerElement.width() +
                          "px",
                      },
                      onComplete: this.handleFinalTransitionComplete,
                      onCompleteScope: this,
                    })
                  : TweenMax.to(this._dialogContainerElement, 0.5, {
                      css: {
                        left:
                          -(
                            0.5 * this._gameContainerArea.width * t -
                            0.5 * this._dialogContainerElement.width()
                          ) + "px",
                      },
                      onComplete: this.handleFinalTransitionComplete,
                      onCompleteScope: this,
                    })
                : TweenMax.to(this._dialogContainerElement, 0.5, {
                    css: {
                      left:
                        0.5 * this._gameContainerArea.width * t -
                        0.5 * this._dialogContainerElement.width() +
                        "px",
                    },
                    onComplete: this.handleFinalTransitionComplete,
                    onCompleteScope: this,
                  });
          }
        }),
        (e.prototype.handleFinalTransitionComplete = function () {
          (this._finalTransitionComplete = !0),
            this._buttonContainer.css("opacity", "0"),
            this._buttonManager.show(),
            TweenMax.delayedCall(0.1, this.resizeOkButton, [], this),
            TweenMax.to(this._buttonContainer, 0.3, { css: { opacity: "1" } });
        }),
        (e.prototype.setHandedness = function (t) {
          this._handedness = t;
        }),
        e
      );
    })();
    t.TopSpinManager = e;
  })(tk_gui || (tk_gui = {}));
