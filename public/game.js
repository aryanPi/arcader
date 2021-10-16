var tk_astronaut,
  __extends =
    (this && this.__extends) ||
    (function () {
      var e = function (t, i) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          })(t, i);
      };
      return function (t, i) {
        if ("function" != typeof i && null !== i)
          throw new TypeError(
            "Class extends value " + String(i) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        e(t, i),
          (t.prototype =
            null === i
              ? Object.create(i)
              : ((n.prototype = i.prototype), new n()));
      };
    })();
!(function (e) {
  e.createGame = function (t, i, n) {
    var a = {
      parentelementid: "content",
      gameid: "tk-astronaut",
      gameinstanceid: "tk-game_tk_astronaut_cho-" + new Date().getTime(),
      operatorid: tk_common.constants.OperatorIds.Thunderkick,
      assetsbaseurl: "",
      handlemessagefunc: function (e, t) {
        if (e === tk_common.jsintegration.JSOutboundEventIds.gameLoading) {
          var i = t;
          window.bridge = i.bridge;
        } else
          e === tk_common.jsintegration.JSOutboundEventIds.gameInitialized
            ? window.bridge.startGame()
            : e === tk_common.jsintegration.JSOutboundEventIds.goBackToLobby &&
              (window.location.href =
                "http://game.thunderkick.com:9090/static/games/index.html?INSTIGATOR=" +
                t.instigator +
                "&REASON=" +
                t.reason +
                (void 0 !== t.errorCode ? "&ERROR=" + t.errorCode : ""));
      },
    };
    return (
      ((i = tk_common.jsintegration.data.combineInitGameDataSets(
        a,
        i
      )).clientversion = "3.17.0"),
      (i.gameid = "tk-astronaut"),
      new e.Game(i, t, n)
    );
  };
})(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    var t = (function (t) {
      function i() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        __extends(i, t),
        (i.prototype.preloadAdditionalBootAssets = function () {
          this.load.text(
            "gameTweaker",
            this.getAssetUrl("assets/config/gameTweaker.json")
          ),
            this.load.text("wwAjax", this.getAssetUrl("wwAjax.js"));
        }),
        (i.prototype.preloadPreloaderSplashImage = function () {}),
        (i.prototype.preloadPreloaderProgressBarImage = function () {}),
        (i.prototype.setupDesiredFps = function () {
          (this.game.forceSingleUpdate = !0), (this.game.time.desiredFps = 60);
        }),
        (i.prototype.layoutScene = function (e) {}),
        (i.prototype.createGameModel = function (t, i, n) {
          return new e.model.Model(t, i, n);
        }),
        i
      );

    })(tk_common.slots.phaser.AbstractPhaserBootState);
    e.BootState = t;
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = tk_common.utils.AmountFormatter,
        n = (function () {
          function t(e) {
            var t = this;
            (this._showingInfoBar = !1),
              (this._langIso = "en"),
              (this._game = e),
              (this._game.paytableHelper = this),
              this._game.initGameData.developmentmode &&
                ((window.layoutPaytable = function (e) {
                  void 0 === e && (e = !1),
                    e
                      ? window.reloadGameTweaker(function () {
                          t.layoutPageContent(
                            t._orientation,
                            t._gameContainerArea,
                            t._gameArea,
                            t._showingInfoBar,
                            t._langIso
                          );
                        })
                      : t.layoutPageContent(
                          t._orientation,
                          t._gameContainerArea,
                          t._gameArea,
                          t._showingInfoBar,
                          t._langIso
                        );
                }),
                (window.paytableHelper = this));
          }
          return (
            (t.prototype.handlePaytableButtonClicked = function (e) {
              e === tk_common.slots.gui.GuiButtonIds.PAY_TABLE &&
                (null == this._section1ContainerElement &&
                  (this.buildPageContent(this._paytableContainer, this._fm, !0),
                  null != this._orientation &&
                    this.layoutPageContent(
                      this._orientation,
                      this._gameContainerArea,
                      this._gameArea,
                      this._showingInfoBar,
                      this._langIso
                    )),
                this.updatePaytableSymbolValues(
                  this._game.model.selectedBetAmount
                ),
                this._game.languageSystem.updateAllDirtyEntries());
            }),
            (t.prototype.buildPageContent = function (e, t, i) {
              var n;
              if (null == this._section1ContainerElement) {
                e.css("pointer-events", "none"),
                  (this._paytableContainer = e),
                  (this._fm = t),
                  (this._textResizerHelper =
                    jQuery("<label></label>").appendTo("body")),
                  this._textResizerHelper.css("opacity", 0),
                  this._textResizerHelper.css("position", "fixed"),
                  (this._section1ContainerElement = t.createDivElement(
                    e,
                    "paytableSection1Container"
                  )),
                  this._section1ContainerElement.addClass(
                    "paytableSectionContainer"
                  ),
                  this._section1ContainerElement.css("position", "relative"),
                  (this._section1HeaderTextLabelElement =
                    t.createLabelTextElement(
                      this._section1ContainerElement,
                      "controlPanelSection1HeaderTextLabel",
                      "astronautPayTablePageFeatureTitle01_nc"
                    )),
                  this._section1HeaderTextLabelElement.addClass(
                    "paytableSectionText"
                  ),
                  this._section1HeaderTextLabelElement.css(
                    "position",
                    "relative"
                  ),
                  this._section1HeaderTextLabelElement.css(
                    "white-space",
                    "nowrap"
                  ),
                  (this._section1TextLabelElement = t.createLabelTextElement(
                    this._section1ContainerElement,
                    "controlPanelSection1TextLabel",
                    "astronautPayTablePageFeatureText01_nc"
                  )),
                  this._section1TextLabelElement.addClass(
                    "paytableSectionText"
                  ),
                  this._section1TextLabelElement.css("position", "relative"),
                  (this._section1ImageElement = t.createDivElement(
                    this._section1ContainerElement,
                    "controlPanelSection1Image"
                  )),
                  this._section1ImageElement.addClass("paytableSectionImage"),
                  this._section1ImageElement.addClass("paytableSymWild"),
                  this._section1ImageElement.css("position", "relative"),
                  (this._section1DividerElement = t.createDivElement(
                    e,
                    "paytableSection1Divider"
                  )),
                  this._section1DividerElement.addClass(
                    "paytableSectionDivider"
                  ),
                  this._section1DividerElement.css("position", "relative"),
                  (this._section2ContainerElement = t.createDivElement(
                    e,
                    "paytableSection2Container"
                  )),
                  this._section2ContainerElement.addClass(
                    "paytableSectionContainer"
                  ),
                  this._section2ContainerElement.css("position", "relative"),
                  (this._section2HeaderTextLabelElement =
                    t.createLabelTextElement(
                      this._section2ContainerElement,
                      "controlPanelSection2HeaderTextLabel",
                      "astronautPayTablePageFeatureTitle02_nc"
                    )),
                  this._section2HeaderTextLabelElement.addClass(
                    "paytableSectionText"
                  ),
                  this._section2HeaderTextLabelElement.css(
                    "position",
                    "relative"
                  ),
                  this._section2HeaderTextLabelElement.css(
                    "white-space",
                    "nowrap"
                  ),
                  (this._section2TextLabelElement = t.createLabelTextElement(
                    this._section2ContainerElement,
                    "controlPanelSection2TextLabel",
                    "astronautPayTablePageFeatureText02_nc"
                  )),
                  this._section2TextLabelElement.addClass(
                    "paytableSectionText"
                  ),
                  this._section2TextLabelElement.css("position", "relative"),
                  (this._section2ImageElement = t.createDivElement(
                    this._section2ContainerElement,
                    "controlPanelSection2Image"
                  )),
                  this._section2ImageElement.addClass("paytableSymExpander"),
                  this._section2ImageElement.addClass("paytableSectionImage"),
                  this._section2ImageElement.css("position", "relative"),
                  (this._section2DividerElement = t.createDivElement(
                    e,
                    "paytableSection2Divider"
                  )),
                  this._section2DividerElement.addClass(
                    "paytableSectionDivider"
                  ),
                  this._section2DividerElement.css("position", "relative"),
                  (this._section3ContainerElement = t.createDivElement(
                    e,
                    "paytableSection3Container"
                  )),
                  this._section3ContainerElement.addClass(
                    "paytableSectionContainer"
                  ),
                  this._section3ContainerElement.css("position", "relative"),
                  (this._section3HeaderTextLabelElement =
                    t.createLabelTextElement(
                      this._section3ContainerElement,
                      "controlPanelSection3HeaderTextLabel",
                      "astronautPayTablePageFeatureTitle03_nc"
                    )),
                  this._section3HeaderTextLabelElement.addClass(
                    "paytableSectionText"
                  ),
                  this._section3HeaderTextLabelElement.css(
                    "position",
                    "relative"
                  ),
                  this._section3HeaderTextLabelElement.css(
                    "white-space",
                    "nowrap"
                  ),
                  (this._section3Text1LabelElement = t.createLabelHtmlElement(
                    this._section3ContainerElement,
                    "controlPanelSection3Text1Label",
                    "astronautPayTablePageBonusSymAmount_nc"
                  )),
                  this._section3Text1LabelElement.addClass(
                    "paytableSectionText"
                  ),
                  this._section3Text1LabelElement.css("position", "relative"),
                  this._section3Text1LabelElement.css(
                    "white-space",
                    "pre-wrap"
                  ),
                  (this._section3Text2LabelElement = t.createLabelTextElement(
                    this._section3ContainerElement,
                    "controlPanelSection3Text2Label",
                    "astronautPayTablePageFeatureText03_nc"
                  )),
                  this._section3Text2LabelElement.addClass(
                    "paytableSectionText"
                  ),
                  this._section3Text2LabelElement.css("position", "relative"),
                  (this._section3ImageElement = t.createDivElement(
                    this._section3ContainerElement,
                    "controlPanelSection3Image"
                  )),
                  this._section3ImageElement.addClass("paytableSymBonus"),
                  this._section3ImageElement.addClass("paytableSectionImage"),
                  this._section3ImageElement.css("position", "relative"),
                  (this._section3DividerElement = t.createDivElement(
                    e,
                    "paytableSection3Divider"
                  )),
                  this._section3DividerElement.addClass(
                    "paytableSectionDivider"
                  ),
                  this._section3DividerElement.css("position", "relative"),
                  (this._section4ContainerElement = t.createDivElement(
                    e,
                    "paytableSection4Container"
                  )),
                  this._section4ContainerElement.addClass(
                    "paytableSectionContainer"
                  ),
                  this._section4ContainerElement.css("position", "relative"),
                  (this._section4HeaderTextLabelElement =
                    t.createLabelTextElement(
                      this._section4ContainerElement,
                      "controlPanelSection4HeaderTextLabel",
                      "astronautPayTablePageFeatureTitle04_nc"
                    )),
                  this._section4HeaderTextLabelElement.addClass(
                    "paytableSectionText"
                  ),
                  this._section4HeaderTextLabelElement.css(
                    "position",
                    "relative"
                  ),
                  this._section4HeaderTextLabelElement.css(
                    "white-space",
                    "nowrap"
                  ),
                  (this._section4TextLabelElement = t.createLabelTextElement(
                    this._section4ContainerElement,
                    "controlPanelSection4TextLabel",
                    "astronautPayTablePageFeatureText04_nc"
                  )),
                  this._section4TextLabelElement.addClass(
                    "paytableSectionText"
                  ),
                  this._section4TextLabelElement.css("position", "relative"),
                  (this._section4ImageElement = t.createDivElement(
                    this._section4ContainerElement,
                    "controlPanelSection4Image"
                  )),
                  this._section4ImageElement.addClass("paytableBonusGame"),
                  this._section4ImageElement.addClass("paytableSectionImage"),
                  this._section4ImageElement.css("position", "relative"),
                  (this._section4DividerElement = t.createDivElement(
                    e,
                    "paytableSection4Divider"
                  )),
                  this._section4DividerElement.addClass(
                    "paytableSectionDivider"
                  ),
                  this._section4DividerElement.css("position", "relative"),
                  (this._section5ContainerElement = t.createDivElement(
                    e,
                    "paytableSection5Container"
                  )),
                  this._section5ContainerElement.addClass(
                    "paytableSectionContainer"
                  ),
                  this._section5ContainerElement.css("position", "relative"),
                  (this._section5HeaderTextLabelElement =
                    t.createLabelTextElement(
                      this._section5ContainerElement,
                      "controlPanelSection5HeaderTextLabel",
                      "astronautPayTablePageFeatureTitle05_nc"
                    )),
                  this._section5HeaderTextLabelElement.addClass(
                    "paytableSectionText"
                  ),
                  this._section5HeaderTextLabelElement.css(
                    "position",
                    "relative"
                  ),
                  this._section5HeaderTextLabelElement.css(
                    "white-space",
                    "nowrap"
                  ),
                  (this._section5TextLabelElement = t.createLabelTextElement(
                    this._section5ContainerElement,
                    "controlPanelSection5TextLabel",
                    "astronautPayTablePageFeatureText05_nc"
                  )),
                  this._section5TextLabelElement.addClass(
                    "paytableSectionText"
                  ),
                  this._section5TextLabelElement.css("position", "relative"),
                  (this._section5ImageElement = t.createDivElement(
                    this._section5ContainerElement,
                    "controlPanelSection5Image"
                  )),
                  this._section5ImageElement.addClass("paytableSymStickyWild"),
                  this._section5ImageElement.addClass("paytableSectionImage"),
                  this._section5ImageElement.css("position", "relative"),
                  (this._section5DividerElement = t.createDivElement(
                    e,
                    "paytableSection5Divider"
                  )),
                  this._section5DividerElement.addClass(
                    "paytableSectionDivider"
                  ),
                  this._section5DividerElement.css("position", "relative"),
                  (this._section6ContainerElement = t.createDivElement(
                    e,
                    "paytableSection6Container"
                  )),
                  this._section6ContainerElement.addClass(
                    "paytableSectionContainer"
                  ),
                  this._section6ContainerElement.css("position", "relative"),
                  (this._section6HeaderTextLabelElement =
                    t.createLabelTextElement(
                      this._section6ContainerElement,
                      "controlPanelSection6HeaderTextLabel",
                      "astronautPayTablePageFeatureTitle06_nc"
                    )),
                  this._section6HeaderTextLabelElement.addClass(
                    "paytableSectionText"
                  ),
                  this._section6HeaderTextLabelElement.css(
                    "position",
                    "relative"
                  ),
                  this._section6HeaderTextLabelElement.css(
                    "white-space",
                    "nowrap"
                  ),
                  (this._section6Text1LabelElement = t.createLabelHtmlElement(
                    this._section6ContainerElement,
                    "controlPanelSection6Text1Label",
                    "astronautPayTablePageMysterySymAmount_nc"
                  )),
                  this._section6Text1LabelElement.addClass(
                    "paytableSectionText"
                  ),
                  this._section6Text1LabelElement.css("position", "relative"),
                  this._section6Text1LabelElement.css(
                    "white-space",
                    "pre-wrap"
                  ),
                  (this._section6Text2LabelElement = t.createLabelTextElement(
                    this._section6ContainerElement,
                    "controlPanelSection6Text2Label",
                    "astronautPayTablePageFeatureText06_nc"
                  )),
                  this._section6Text2LabelElement.addClass(
                    "paytableSectionText"
                  ),
                  this._section6Text2LabelElement.css("position", "relative"),
                  (this._section6ImageElement = t.createDivElement(
                    this._section6ContainerElement,
                    "controlPanelSection6Image"
                  )),
                  this._section6ImageElement.addClass("paytableSymMystery"),
                  this._section6ImageElement.addClass("paytableSectionImage"),
                  this._section6ImageElement.css("position", "relative"),
                  (this._section6DividerElement = t.createDivElement(
                    e,
                    "paytableSection6Divider"
                  )),
                  this._section6DividerElement.addClass(
                    "paytableSectionDivider"
                  ),
                  this._section6DividerElement.css("position", "relative"),
                  (this._section7ContainerElement = t.createDivElement(
                    e,
                    "paytableSection7Container"
                  )),
                  this._section7ContainerElement.addClass(
                    "paytableSectionContainer"
                  ),
                  this._section7ContainerElement.css("position", "relative"),
                  (this._section7HeaderTextLabelElement =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "controlPanelSection7HeaderTextLabel",
                      "astronautPayTablePageFeatureTitle07_nc"
                    )),
                  this._section7HeaderTextLabelElement.addClass(
                    "paytableSectionText"
                  ),
                  this._section7HeaderTextLabelElement.css(
                    "position",
                    "relative"
                  ),
                  this._section7HeaderTextLabelElement.css(
                    "white-space",
                    "nowrap"
                  ),
                  (this._section7TextLabelElement = t.createLabelTextElement(
                    this._section7ContainerElement,
                    "controlPanelSection7TextLabel",
                    "astronautPayTablePageFeatureText07_nc"
                  )),
                  this._section7TextLabelElement.addClass(
                    "paytableSectionText"
                  ),
                  this._section7TextLabelElement.css("position", "relative"),
                  (this._section7GridImageElement = t.createDivElement(
                    this._section7ContainerElement,
                    "controlPanelSection7Image"
                  )),
                  this._section7GridImageElement.addClass(
                    "paytableSectionImage"
                  ),
                  this._section7GridImageElement.css("position", "relative"),
                  (this._section7PreviewImageElement = t.createDivElement(
                    this._section7ContainerElement,
                    "controlPanelSection7PreviewImage"
                  )),
                  this._section7PreviewImageElement.addClass(
                    "paytableSectionImage"
                  ),
                  this._section7PreviewImageElement.addClass(
                    "paytableMysteryGameImage"
                  ),
                  this._section7PreviewImageElement.css("position", "relative");
                var a = [];
                for (n = 0; n < 4; n++) a[n] = [];
                var o = (a[0][0] = t.createLabelTextElement(
                  this._section7ContainerElement,
                  "section7GridElement_0_0",
                  ""
                ));
                o.addClass("paytableSectionText"),
                  o.css("position", "relative"),
                  (o = a[1][0] =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "section7GridElement_1_0",
                      "X6"
                    )).addClass("paytableSectionText"),
                  o.css("position", "relative"),
                  (o = a[2][0] =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "section7GridElement_2_0",
                      "X2"
                    )).addClass("paytableSectionText"),
                  o.css("position", "relative"),
                  (o = a[3][0] =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "section7GridElement_3_0",
                      "X1"
                    )).addClass("paytableSectionText"),
                  o.css("position", "relative"),
                  (o = a[0][1] =
                    t.createDivElement(
                      this._section7ContainerElement,
                      "section7GridElement_0_1"
                    )).addClass("paytableMysteryWin4"),
                  o.css("position", "relative"),
                  (o = a[0][2] =
                    t.createDivElement(
                      this._section7ContainerElement,
                      "section7GridElement_0_2"
                    )).addClass("paytableMysteryWin3"),
                  o.css("position", "relative"),
                  (o = a[0][3] =
                    t.createDivElement(
                      this._section7ContainerElement,
                      "section7GridElement_0_3"
                    )).addClass("paytableMysteryWin2"),
                  o.css("position", "relative"),
                  (o = a[0][4] =
                    t.createDivElement(
                      this._section7ContainerElement,
                      "section7GridElement_0_4"
                    )).addClass("paytableMysteryWin1"),
                  o.css("position", "relative"),
                  (o = a[0][5] =
                    t.createDivElement(
                      this._section7ContainerElement,
                      "section7GridElement_0_5"
                    )).addClass("paytableMysteryWin0"),
                  o.css("position", "relative"),
                  (o = a[1][5] =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "section7GridElement_1_5",
                      "astronautPayTableMysteryWin0Text"
                    )).addClass("paytableSectionText"),
                  o.css("position", "relative"),
                  (o = a[2][5] =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "section7GridElement_2_5",
                      "astronautPayTableMysteryWin0Text"
                    )).addClass("paytableSectionText"),
                  o.css("position", "relative"),
                  (o = a[3][5] =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "section7GridElement_3_5",
                      "astronautPayTableMysteryWin0Text"
                    )).addClass("paytableSectionText"),
                  o.css("position", "relative"),
                  (o = a[1][1] =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "section7GridElement_1_1",
                      ""
                    )).addClass("paytableSectionText"),
                  o.css("position", "relative"),
                  (o = a[1][2] =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "section7GridElement_1_2",
                      ""
                    )).addClass("paytableSectionText"),
                  o.css("position", "relative"),
                  (o = a[1][3] =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "section7GridElement_1_3",
                      ""
                    )).addClass("paytableSectionText"),
                  o.css("position", "relative"),
                  (o = a[1][4] =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "section7GridElement_1_4",
                      ""
                    )).addClass("paytableSectionText"),
                  o.css("position", "relative"),
                  (o = a[2][1] =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "section7GridElement_2_1",
                      ""
                    )).addClass("paytableSectionText"),
                  o.css("position", "relative"),
                  (o = a[2][2] =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "section7GridElement_2_2",
                      ""
                    )).addClass("paytableSectionText"),
                  o.css("position", "relative"),
                  (o = a[2][3] =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "section7GridElement_2_3",
                      ""
                    )).addClass("paytableSectionText"),
                  o.css("position", "relative"),
                  (o = a[2][4] =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "section7GridElement_2_4",
                      ""
                    )).addClass("paytableSectionText"),
                  o.css("position", "relative"),
                  (o = a[3][1] =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "section7GridElement_3_1",
                      ""
                    )).addClass("paytableSectionText"),
                  o.css("position", "relative"),
                  (o = a[3][2] =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "section7GridElement_3_2",
                      ""
                    )).addClass("paytableSectionText"),
                  o.css("position", "relative"),
                  (o = a[3][3] =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "section7GridElement_3_3",
                      ""
                    )).addClass("paytableSectionText"),
                  o.css("position", "relative"),
                  (o = a[3][4] =
                    t.createLabelTextElement(
                      this._section7ContainerElement,
                      "section7GridElement_3_4",
                      ""
                    )).addClass("paytableSectionText"),
                  o.css("position", "relative");
                var s = (this._section7GridElement = []);
                for (n = 0; n < 4; n++) {
                  s[n] = [];
                  for (var r = 0; r < 6; r++) s[n][r] = a[n][r];
                }
                (this._section7DividerElement = t.createDivElement(
                  e,
                  "paytableSection7Divider"
                )),
                  this._section7DividerElement.addClass(
                    "paytableSectionDivider"
                  ),
                  this._section7DividerElement.css("position", "relative"),
                  (this._section8ContainerElement = t.createDivElement(
                    e,
                    "paytableSection8Container"
                  )),
                  this._section8ContainerElement.addClass(
                    "paytableSection8Container"
                  ),
                  this._section8ContainerElement.css("position", "relative"),
                  (this._section8HeaderTextLabelElement =
                    t.createLabelTextElement(
                      this._section8ContainerElement,
                      "controlPanelSection8HeaderTextLabel",
                      "payTablePageSymbolsSubTitle_nc"
                    )),
                  this._section8HeaderTextLabelElement.addClass(
                    "paytableSectionText"
                  ),
                  this._section8HeaderTextLabelElement.css(
                    "position",
                    "relative"
                  ),
                  this._section8HeaderTextLabelElement.css(
                    "white-space",
                    "nowrap"
                  ),
                  (this._paytableSymbolsContainerElement = t.createDivElement(
                    this._section8ContainerElement,
                    "paytableSymbolsContainer"
                  )),
                  this._paytableSymbolsContainerElement.css(
                    "position",
                    "relative"
                  );
                var l = this.buildPaytableSymbol(
                    1,
                    "images/paytable/Sym01.png",
                    this._paytableSymbolsContainerElement,
                    t
                  ),
                  m = this.buildPaytableSymbol(
                    2,
                    "images/paytable/Sym02.png",
                    this._paytableSymbolsContainerElement,
                    t
                  ),
                  h = this.buildPaytableSymbol(
                    3,
                    "images/paytable/Sym03.png",
                    this._paytableSymbolsContainerElement,
                    t
                  ),
                  p = this.buildPaytableSymbol(
                    4,
                    "images/paytable/Sym04.png",
                    this._paytableSymbolsContainerElement,
                    t
                  ),
                  u = this.buildPaytableSymbol(
                    5,
                    "images/paytable/Sym05.png",
                    this._paytableSymbolsContainerElement,
                    t
                  ),
                  c = this.buildPaytableSymbol(
                    6,
                    "images/paytable/Sym06.png",
                    this._paytableSymbolsContainerElement,
                    t
                  ),
                  d = this.buildPaytableSymbol(
                    7,
                    "images/paytable/Sym07.png",
                    this._paytableSymbolsContainerElement,
                    t
                  ),
                  _ = this.buildPaytableSymbol(
                    8,
                    "images/paytable/Sym08.png",
                    this._paytableSymbolsContainerElement,
                    t
                  );
                this._symbolElements = [l, m, h, p, u, c, d, _];
                var g = this._game.getPaytableRelativeBetPhraseId();
                (this._section8TextLabelElement = t.createLabelHtmlElement(
                  this._section8ContainerElement,
                  "payoutSectionTextLabelElement",
                  g
                )),
                  this._section8TextLabelElement.addClass(
                    "paytableSectionText"
                  ),
                  this._section8TextLabelElement.css("position", "relative"),
                  (this._section8DividerElement = t.createDivElement(
                    e,
                    "paytableSection8Divider"
                  )),
                  this._section8DividerElement.addClass(
                    "paytableSectionDivider"
                  ),
                  this._section8DividerElement.css("position", "relative"),
                  (this._section9ContainerElement = t.createDivElement(
                    e,
                    "paytableSection9Container"
                  )),
                  this._section9ContainerElement.addClass(
                    "paytableSectionContainer"
                  ),
                  this._section9ContainerElement.css("position", "relative"),
                  (this._section9TitleLabelElement = t.createLabelTextElement(
                    this._section9ContainerElement,
                    "controlPanelSection9TitleLabel",
                    "payTablePagePayLinesSubTitle_nc"
                  )),
                  this._section9TitleLabelElement.addClass(
                    "paytableSectionTitle"
                  ),
                  this._section9TitleLabelElement.css("position", "relative"),
                  this._section9TitleLabelElement.css("white-space", "nowrap"),
                  (this._section9ImageElement = t.createDivElement(
                    this._section9ContainerElement,
                    "controlPanelSection9Image"
                  )),
                  this._section9ImageElement.addClass("paylinesImageContainer"),
                  this._section9ImageElement.addClass("paylinesImage"),
                  this._section9ImageElement.css("position", "relative");
              } else this._game.languageSystem.updateAllDirtyEntries();
            }),
            (t.prototype.buildPaytableSymbol = function (e, t, i, n) {
              var a = n.createDivElement(i, "symbol" + e + "Container");
              a.css("position", "relative"),
                a.addClass("paytableSymbolContainer");
              var o = n.createImgElement(
                a,
                "controlPanelSectionSym" + e + "Image",
                t
              );
              o.addClass("paytableSymbolImage"), o.css("position", "relative");
              var s = n.createDivElement(a, "symbol" + e + "TextsContainer");
              s.css("position", "relative"), s.css("float", "left");
              var r = n.createLabelHtmlElement(
                s,
                "controlPanelSymbol" + e + "TextLabel1",
                "payTablePageSymbol" + e + "_vars_payTableSym" + e + "Text"
              );
              return (
                r.css("position", "relative"),
                r.css("white-space", "pre-line"),
                r.addClass("paytableSymbolText"),
                [a, [r], o, s]
              );
            }),
            (t.prototype.layoutPageContent = function (e, t, i, n, a) {
              (this._orientation = e),
                (this._gameContainerArea = t),
                (this._gameArea = i),
                (this._showingInfoBar = n),
                (this._langIso = a),
                null != this._section1ContainerElement &&
                  (e === tk_common.constants.OrientationEnum.LANDSCAPE
                    ? this.layoutForLandscape()
                    : this.layoutForPortrait());
            }),
            (t.prototype.layoutForLandscape = function () {
              var t =
                e.view.SceneLayoutManager.getClosestSupportedWindowAspectRatio(
                  this._game.gameTweaker.paytableLayout
                );
              !0 === this._game.initGameData.usedesktopgui && (t = "desktop");
              var i = this._game.gameTweaker.paytableLayout[t].landscapeLayout;
              this._section7GridImageElement.removeClass(
                "paytableMysteryGridPortrait"
              ),
                this._section7GridImageElement.addClass(
                  "paytableMysteryGridLandscape"
                ),
                this.layoutAllElements(i);
            }),
            (t.prototype.layoutForPortrait = function () {
              var t =
                e.view.SceneLayoutManager.getClosestSupportedWindowAspectRatio(
                  this._game.gameTweaker.paytableLayout
                );
              !0 === this._game.initGameData.usedesktopgui && (t = "desktop");
              var i = this._game.gameTweaker.paytableLayout[t].portraitLayout;
              this._section7GridImageElement.removeClass(
                "paytableMysteryGridLandscape"
              ),
                this._section7GridImageElement.addClass(
                  "paytableMysteryGridPortrait"
                ),
                this.layoutAllElements(i);
            }),
            (t.prototype.layoutAllElements = function (e) {
              this.applyCssToElement(
                this._section1ContainerElement,
                e.section1ContainerElement
              ),
                this.applyCssToElement(
                  this._section1HeaderTextLabelElement,
                  e.section1HeaderTextLabelElement
                ),
                this.applyCssToElement(
                  this._section1TextLabelElement,
                  e.section1TextLabelElement
                ),
                this.applyCssToElement(
                  this._section1ImageElement,
                  e.section1ImageElement
                ),
                this.applyCssToElement(
                  this._section1DividerElement,
                  e.section1DividerElement
                ),
                this.applyCssToElement(
                  this._section2ContainerElement,
                  e.section2ContainerElement
                ),
                this.applyCssToElement(
                  this._section2HeaderTextLabelElement,
                  e.section2HeaderTextLabelElement
                ),
                this.applyCssToElement(
                  this._section2TextLabelElement,
                  e.section2TextLabelElement
                ),
                this.applyCssToElement(
                  this._section2ImageElement,
                  e.section2ImageElement
                ),
                this.applyCssToElement(
                  this._section2DividerElement,
                  e.section2DividerElement
                ),
                this.applyCssToElement(
                  this._section3ContainerElement,
                  e.section3ContainerElement
                ),
                this.applyCssToElement(
                  this._section3HeaderTextLabelElement,
                  e.section3HeaderTextLabelElement
                ),
                this.applyCssToElement(
                  this._section3Text1LabelElement,
                  e.section3Text1LabelElement
                ),
                this.applyCssToElement(
                  this._section3Text2LabelElement,
                  e.section3Text2LabelElement
                ),
                this.applyCssToElement(
                  this._section3ImageElement,
                  e.section3ImageElement
                ),
                this.applyCssToElement(
                  this._section3DividerElement,
                  e.section3DividerElement
                ),
                this.applyCssToElement(
                  this._section4ContainerElement,
                  e.section4ContainerElement
                ),
                this.applyCssToElement(
                  this._section4HeaderTextLabelElement,
                  e.section4HeaderTextLabelElement
                ),
                this.applyCssToElement(
                  this._section4TextLabelElement,
                  e.section4TextLabelElement
                ),
                this.applyCssToElement(
                  this._section4ImageElement,
                  e.section4ImageElement
                ),
                this.applyCssToElement(
                  this._section4DividerElement,
                  e.section4DividerElement
                ),
                this.applyCssToElement(
                  this._section5ContainerElement,
                  e.section5ContainerElement
                ),
                this.applyCssToElement(
                  this._section5HeaderTextLabelElement,
                  e.section5HeaderTextLabelElement
                ),
                this.applyCssToElement(
                  this._section5TextLabelElement,
                  e.section5TextLabelElement
                ),
                this.applyCssToElement(
                  this._section5ImageElement,
                  e.section5ImageElement
                ),
                this.applyCssToElement(
                  this._section5DividerElement,
                  e.section5DividerElement
                ),
                this.applyCssToElement(
                  this._section6ContainerElement,
                  e.section6ContainerElement
                ),
                this.applyCssToElement(
                  this._section6HeaderTextLabelElement,
                  e.section6HeaderTextLabelElement
                ),
                this.applyCssToElement(
                  this._section6Text1LabelElement,
                  e.section6Text1LabelElement
                ),
                this.applyCssToElement(
                  this._section6Text2LabelElement,
                  e.section6Text2LabelElement
                ),
                this.applyCssToElement(
                  this._section6ImageElement,
                  e.section6ImageElement
                ),
                this.applyCssToElement(
                  this._section6DividerElement,
                  e.section6DividerElement
                ),
                this.applyCssToElement(
                  this._section7ContainerElement,
                  e.section7ContainerElement
                ),
                this.applyCssToElement(
                  this._section7HeaderTextLabelElement,
                  e.section7HeaderTextLabelElement
                ),
                this.applyCssToElement(
                  this._section7TextLabelElement,
                  e.section7TextLabelElement
                ),
                this.applyCssToElement(
                  this._section7PreviewImageElement,
                  e.section7PreviewImageElement
                ),
                this.applyCssToElement(
                  this._section7GridImageElement,
                  e.section7GridImageElement
                );
              var t = 1e3;
              this.applyCssToElement(
                this._section7GridElement[0][0],
                e.section7GridElement[0][0]
              ),
                (t = this.applyCssToScaledTextElement(
                  this._section7GridElement[1][0],
                  e.section7GridElement[1][0],
                  t
                )),
                (t = this.applyCssToScaledTextElement(
                  this._section7GridElement[2][0],
                  e.section7GridElement[2][0],
                  t
                )),
                (t = this.applyCssToScaledTextElement(
                  this._section7GridElement[3][0],
                  e.section7GridElement[3][0],
                  t
                )),
                this.applyCssToElement(
                  this._section7GridElement[0][1],
                  e.section7GridElement[0][1]
                ),
                (t = this.applyCssToScaledTextElement(
                  this._section7GridElement[1][1],
                  e.section7GridElement[1][1],
                  t
                )),
                (t = this.applyCssToScaledTextElement(
                  this._section7GridElement[2][1],
                  e.section7GridElement[2][1],
                  t
                )),
                (t = this.applyCssToScaledTextElement(
                  this._section7GridElement[3][1],
                  e.section7GridElement[3][1],
                  t
                )),
                this.applyCssToElement(
                  this._section7GridElement[0][2],
                  e.section7GridElement[0][2]
                ),
                (t = this.applyCssToScaledTextElement(
                  this._section7GridElement[1][2],
                  e.section7GridElement[1][2],
                  t
                )),
                (t = this.applyCssToScaledTextElement(
                  this._section7GridElement[2][2],
                  e.section7GridElement[2][2],
                  t
                )),
                (t = this.applyCssToScaledTextElement(
                  this._section7GridElement[3][2],
                  e.section7GridElement[3][2],
                  t
                )),
                this.applyCssToElement(
                  this._section7GridElement[0][3],
                  e.section7GridElement[0][3]
                ),
                (t = this.applyCssToScaledTextElement(
                  this._section7GridElement[1][3],
                  e.section7GridElement[1][3],
                  t
                )),
                (t = this.applyCssToScaledTextElement(
                  this._section7GridElement[2][3],
                  e.section7GridElement[2][3],
                  t
                )),
                (t = this.applyCssToScaledTextElement(
                  this._section7GridElement[3][3],
                  e.section7GridElement[3][3],
                  t
                )),
                this.applyCssToElement(
                  this._section7GridElement[0][4],
                  e.section7GridElement[0][4]
                ),
                (t = this.applyCssToScaledTextElement(
                  this._section7GridElement[1][4],
                  e.section7GridElement[1][4],
                  t
                )),
                (t = this.applyCssToScaledTextElement(
                  this._section7GridElement[2][4],
                  e.section7GridElement[2][4],
                  t
                )),
                (t = this.applyCssToScaledTextElement(
                  this._section7GridElement[3][4],
                  e.section7GridElement[3][4],
                  t
                )),
                this.applyCssToElement(
                  this._section7GridElement[0][5],
                  e.section7GridElement[0][5]
                ),
                (t = this.applyCssToScaledTextElement(
                  this._section7GridElement[1][5],
                  e.section7GridElement[1][5],
                  t
                )),
                (t = this.applyCssToScaledTextElement(
                  this._section7GridElement[2][5],
                  e.section7GridElement[2][5],
                  t
                )),
                (t = this.applyCssToScaledTextElement(
                  this._section7GridElement[3][5],
                  e.section7GridElement[3][5],
                  t
                )),
                this.applyFontSizeToElement(this._section7GridElement[1][0], t),
                this.applyFontSizeToElement(this._section7GridElement[2][0], t),
                this.applyFontSizeToElement(this._section7GridElement[3][0], t),
                this.applyFontSizeToElement(this._section7GridElement[1][1], t),
                this.applyFontSizeToElement(this._section7GridElement[2][1], t),
                this.applyFontSizeToElement(this._section7GridElement[3][1], t),
                this.applyFontSizeToElement(this._section7GridElement[1][2], t),
                this.applyFontSizeToElement(this._section7GridElement[2][2], t),
                this.applyFontSizeToElement(this._section7GridElement[3][2], t),
                this.applyFontSizeToElement(this._section7GridElement[1][3], t),
                this.applyFontSizeToElement(this._section7GridElement[2][3], t),
                this.applyFontSizeToElement(this._section7GridElement[3][3], t),
                this.applyFontSizeToElement(this._section7GridElement[1][4], t),
                this.applyFontSizeToElement(this._section7GridElement[2][4], t),
                this.applyFontSizeToElement(this._section7GridElement[3][4], t),
                this.applyFontSizeToElement(this._section7GridElement[1][5], t),
                this.applyFontSizeToElement(this._section7GridElement[2][5], t),
                this.applyFontSizeToElement(this._section7GridElement[3][5], t),
                this.applyCssToElement(
                  this._section7DividerElement,
                  e.section7DividerElement
                ),
                this.applyCssToElement(
                  this._paytableSymbolsContainerElement,
                  e.paytableSymbolsContainerElement
                ),
                this.applyCssToElement(
                  this._section8TextLabelElement,
                  e.section8TextLabelElement
                ),
                this.applyCssToElement(
                  this._section8DividerElement,
                  e.section8DividerElement
                ),
                this.applyCssToElement(
                  this._section9ImageElement,
                  e.section9ImageElement
                ),
                this.applyCssToElement(
                  this._section9ContainerElement,
                  e.section9ContainerElement
                ),
                this.applyCssToElement(
                  this._section9TitleLabelElement,
                  e.section9TitleLabelElement
                ),
                this.applyCssToElement(
                  this._section8ContainerElement,
                  e.section8ContainerElement
                ),
                this.applyCssToElement(
                  this._section8HeaderTextLabelElement,
                  e.section8HeaderTextLabelElement
                );
              for (var i = 0; i < this._symbolElements.length; i++) {
                var n = e.symbolElements[i] || e.symbolElements[0];
                this.applyCssToElement(this._symbolElements[i][0], n[0]),
                  this.applyCssToElement(this._symbolElements[i][2], n[2]);
                for (var a = 0; a < this._symbolElements[i][1].length; a++)
                  this.applyCssToElement(this._symbolElements[i][1][a], n[1]);
              }
            }),
            (t.prototype.applyCssToScaledTextElement = function (e, t, i) {
              return (
                this.applyCssToElement(e, t),
                Math.min(i, this.scaleTextToFit(e, t))
              );
            }),
            (t.prototype.applyCssToElement = function (e, t) {
              var i = tk_common.utils.remapLangIso(this._langIso);
              for (var n in t)
                if (t.hasOwnProperty(n)) {
                  var a = tk_common.utils.getLanguageLayout(i, n, t);
                  e.css(n, a);
                }
            }),
            (t.prototype.scaleTextToFit = function (e, t) {
              var i = parseInt(t.width),
                n = this._textResizerHelper;
              (n[0].className = ""), n.addClass(e[0].className);
              var a = parseInt(t["font-size"], 10);
              this.applyCssToElement(n, t),
                n.css("position", "fixed"),
                n.css("top", "0"),
                n.css("left", "0"),
                n.text(e.html()),
                n.css("width", "");
              for (
                var o = n.width();
                o > i && (n.css("font-size", --a), !(a <= 2));

              )
                o = n.width();
              return e.css("font-size", a), a;
            }),
            (t.prototype.applyFontSizeToElement = function (e, t, i) {
              e.css("font-size", t + "px"), i && e.css("line-height", i + "px");
            }),
            (t.prototype.updatePaytableSymbolValues = function (e) {
              var t = i.globalFormatter;
              this._game.gui.setLanguageParameterValue(
                "payTableSym1Count3",
                "3"
              ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym1Payment3",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(1, 3).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym1Count4",
                  "4"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym1Payment2",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(1, 4).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym1Count5",
                  "5"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym1Payment1",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(1, 5).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym2Count3",
                  "3"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym2Payment3",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(2, 3).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym2Count4",
                  "4"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym2Payment2",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(2, 4).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym2Count5",
                  "5"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym2Payment1",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(2, 5).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym3Count3",
                  "3"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym3Payment3",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(3, 3).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym3Count4",
                  "4"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym3Payment2",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(3, 4).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym3Count5",
                  "5"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym3Payment1",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(3, 5).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym4Count3",
                  "3"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym4Payment3",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(4, 3).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym4Count4",
                  "4"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym4Payment2",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(4, 4).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym4Count5",
                  "5"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym4Payment1",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(4, 5).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym5Count3",
                  "3"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym5Payment3",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(5, 3).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym5Count4",
                  "4"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym5Payment2",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(5, 4).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym5Count5",
                  "5"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym5Payment1",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(5, 5).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym6Count3",
                  "3"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym6Payment3",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(6, 3).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym6Count4",
                  "4"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym6Payment2",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(6, 4).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym6Count5",
                  "5"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym6Payment1",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(6, 5).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym7Count3",
                  "3"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym7Payment3",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(7, 3).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym7Count4",
                  "4"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym7Payment2",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(7, 4).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym7Count5",
                  "5"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym7Payment1",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(7, 5).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym8Count3",
                  "3"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym8Payment3",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(8, 3).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym8Count4",
                  "4"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym8Payment2",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(8, 4).betmultiplier * e
                  )
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym8Count5",
                  "5"
                ),
                this._game.gui.setLanguageParameterValue(
                  "payTableSym8Payment1",
                  t.formatAmount(
                    this._game.model.getPaymentForSymbol(8, 5).betmultiplier * e
                  )
                );
              var n = this._section7GridElement;
              n[1][1].text(t.formatAmount(108 * e)),
                n[2][1].text(t.formatAmount(36 * e)),
                n[3][1].text(t.formatAmount(18 * e)),
                n[1][2].text(t.formatAmount(72 * e)),
                n[2][2].text(t.formatAmount(24 * e)),
                n[3][2].text(t.formatAmount(12 * e)),
                n[1][3].text(t.formatAmount(36 * e)),
                n[2][3].text(t.formatAmount(12 * e)),
                n[3][3].text(t.formatAmount(6 * e)),
                n[1][4].text(t.formatAmount(12 * e)),
                n[2][4].text(t.formatAmount(4 * e)),
                n[3][4].text(t.formatAmount(2 * e)),
                null != this._orientation &&
                  this.layoutPageContent(
                    this._orientation,
                    this._gameContainerArea,
                    this._gameArea,
                    this._showingInfoBar,
                    this._langIso
                  );
            }),
            t
          );
        })();
      t.PaytableHelper = n;
    })(e.utils || (e.utils = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e(t) {
          (this.mysteryGameZoomInDuration = 1200),
            (this.mysteryGameZoomOutDuration = 600),
            (this.nearWinZoomInDuration = 5e3),
            (this.nearWinZoomOutDuration = 5e3),
            (this._inMysteryGame = !1),
            (this._currentLayoutSettings = {
              mainGame: e.MAIN_GAME_SCENE_ROOT_LANDSCALE,
              mysteryGame: e.MYSTERY_GAME_SCENE_ROOT_LANDSCAPE,
              specialWin: e.SPECIAL_WIN_ENV_ROOT_LANDSCAPE,
              ultraWin: e.ULTRA_WIN_SCENE_ROOT_LANDSCAPE,
              nearWin: e.NEAR_WIN_ENV_ROOT_LANDSCAPE,
            }),
            (this._countUpSettings = {
              specialWin: {
                from: e.COUNT_UP_LOCATION_LANDSCAPE,
                to: e.COUNT_UP_LOCATION_SPECIAL_WIN_LANDSCAPE,
              },
              bonusOutro: {
                from: e.COUNT_UP_LOCATION_LANDSCAPE,
                to: e.COUNT_UP_LOCATION_BONUS_OUTRO_LANDSCAPE,
              },
              resetted: {
                from: e.COUNT_UP_LOCATION_LANDSCAPE,
                to: e.COUNT_UP_LOCATION_LANDSCAPE,
              },
            }),
            (this._specialWinMode = !1),
            (this._bonusOutroMode = !1),
            (this._isUltraWin = !1),
            (this._isNearWin = !1),
            (this._countUpScaleState = {
              index: 0,
              length: 1,
              settings: { from: null, to: null },
            }),
            (this._infoFieldSettings = {
              mystery: { x: 0, y: 0, s: 1 },
              bonus: { x: 0, y: 0, s: 1 },
            }),
            (this._mysterWinLabelScale = 1),
            (this._game = t);
        }
        return (
          (e.prototype.needRelayout = function (e) {
            return (
              (this._lastInnerWidth !== window.innerWidth ||
                this._lastInnerHeight !== window.innerHeight ||
                this._lastOrientation !== e) &&
              ((this._lastInnerWidth = window.innerWidth),
              (this._lastInnerHeight = window.innerHeight),
              (this._lastOrientation = e),
              !0)
            );
          }),
          (e.prototype.layoutScene = function (e, t) {
            null != this._game.scene &&
              (t || this.needRelayout(e)) &&
              ((this._currentOrientation = e),
              this.updateCurrentLayoutSettings(
                this.getDeviceSpecificLayoutSettings()
              ),
              e === tk_common.constants.OrientationEnum.LANDSCAPE ||
              !0 === this._game.initGameData.usedesktopgui
                ? this.layoutLandscape()
                : this.layoutPortrait());
          }),
          (e.prototype.layoutLandscape = function () {
            var e = this._game,
              t = e.device.desktop
                ? 1
                : Math.max(2, window.devicePixelRatio || 1),
              i = Math.min(1280, window.innerWidth * t),
              n = i / 1280,
              a = 1 / n,
              o = (9 * i) / 16;
            e.scale.setGameSize(i, o);
            var s = ((1 - n) / 2) * i,
              r = ((1 - n) / 2) * o;
            jQuery(e.canvas).css(
              "ms-transform",
              "scale3d(" +
                a +
                "," +
                a +
                ",1) translate3d(" +
                s +
                "px," +
                r +
                "px,0px)"
            ),
              jQuery(e.canvas).css(
                "webkit-transform",
                "scale3d(" +
                  a +
                  "," +
                  a +
                  ",1) translate3d(" +
                  s +
                  "px," +
                  r +
                  "px,0px)"
              ),
              jQuery(e.canvas).css(
                "transform",
                "scale3d(" +
                  a +
                  "," +
                  a +
                  ",1) translate3d(" +
                  s +
                  "px," +
                  r +
                  "px,0px)"
              ),
              this.layoutSceneForLandscape(i, o, n, a);
          }),
          (e.prototype.layoutPortrait = function () {
            var e = this._game,
              t = e.device.desktop
                ? 1
                : Math.max(2, window.devicePixelRatio || 1),
              i = Math.min(1280, window.innerWidth * t),
              n = i / 1280,
              a = (16 * i) / 9,
              o = 1 / n;
            if (a > 2048) {
              var s = a;
              o = 1 / (n = (i *= (a = 2048) / s) / 1280);
            }
            e.scale.setGameSize(i, a);
            var r = ((1 - n) / 2) * i,
              l = ((1 - n) / 2) * a;
            jQuery(e.canvas).css(
              "ms-transform",
              "scale3d(" +
                o +
                "," +
                o +
                ",1) translate3d(" +
                r +
                "px," +
                l +
                "px,0px)"
            ),
              jQuery(e.canvas).css(
                "webkit-transform",
                "scale3d(" +
                  o +
                  "," +
                  o +
                  ",1) translate3d(" +
                  r +
                  "px," +
                  l +
                  "px,0px)"
              ),
              jQuery(e.canvas).css(
                "transform",
                "scale3d(" +
                  o +
                  "," +
                  o +
                  ",1) translate3d(" +
                  r +
                  "px," +
                  l +
                  "px,0px)"
              ),
              this.layoutSceneForPortrait(i, a, n, o);
          }),
          (e.getClosestSupportedWindowAspectRatio = function (e) {
            var t = "16:9",
              i = 1e5,
              n =
                window.innerWidth > window.innerHeight
                  ? window.innerWidth / window.innerHeight
                  : window.innerHeight / window.innerWidth,
              a = Math.abs(n - 16 / 9);
            return (
              a < i && null != e["16:9"] && ((t = "16:9"), (i = a)),
              (a = Math.abs(n - 1.6)) < i &&
                null != e["16:10"] &&
                ((t = "16:10"), (i = a)),
              (a = Math.abs(n - 4 / 3)) < i &&
                null != e["4:3"] &&
                ((t = "4:3"), (i = a)),
              (a = Math.abs(n - 41 / 32)) < i &&
                null != e["41:32"] &&
                ((t = "41:32"), (i = a)),
              (a = Math.abs(n - 441 / 320)) < i &&
                null != e["441:320"] &&
                ((t = "441:320"), (i = a)),
              (a = Math.abs(n - 529 / 320)) < i &&
                null != e["529:320"] &&
                ((t = "529:320"), (i = a)),
              (a = Math.abs(n - 696 / 414)) < i &&
                null != e["696:414"] &&
                (t = "696:414"),
              t
            );
          }),
          (e.prototype.layoutSceneForPortrait = function (t, i, n, a) {
            var o = this._game.scene;
            (o.topRoot.scale.x = n),
              (o.topRoot.scale.y = n),
              (this._currentLayoutSettings.mainGame =
                e.MAIN_GAME_SCENE_ROOT_PORTRAIT),
              (this._currentLayoutSettings.mysteryGame =
                e.MYSTERY_GAME_SCENE_ROOT_PORTRAIT),
              (this._currentLayoutSettings.specialWin =
                e.SPECIAL_WIN_ENV_ROOT_PORTRAIT),
              (this._currentLayoutSettings.nearWin =
                e.NEAR_WIN_ENV_ROOT_PORTRAIT),
              (this._currentLayoutSettings.ultraWin =
                e.ULTRA_WIN_SCENE_ROOT_PORTRAIT),
              (this._countUpSettings.specialWin.from =
                e.COUNT_UP_LOCATION_PORTRAIT),
              (this._countUpSettings.specialWin.to =
                e.COUNT_UP_LOCATION_SPECIAL_WIN_PORTRAIT),
              (this._countUpSettings.bonusOutro.from =
                e.COUNT_UP_LOCATION_PORTRAIT),
              (this._countUpSettings.bonusOutro.to =
                e.COUNT_UP_LOCATION_BONUS_OUTRO_PORTRAIT),
              (this._countUpSettings.resetted = {
                from: e.COUNT_UP_LOCATION_PORTRAIT,
                to: e.COUNT_UP_LOCATION_PORTRAIT,
              }),
              (this._infoFieldSettings.mystery =
                e.INFO_TEXT_LOCATION_MYSTERY_PORTRAIT),
              (this._infoFieldSettings.bonus =
                e.INFO_TEXT_LOCATION_BONUS_PORTRAIT),
              (this._mysterWinLabelScale = e.MYSTERY_WIN_LABEL_SCALE_PORTRAIT);
            var s = e.COUNT_UP_LOCATION_PORTRAIT,
              r = o.countUp;
            o.countUp.allowSentinelBeam(!1);
            var l = this._specialWinMode
              ? this._countUpSettings.specialWin.to
              : s;
            if (
              ((l = this._bonusOutroMode
                ? this._countUpSettings.bonusOutro.to
                : l),
              this.resumeCountUpTweens(r, l),
              (this._countUpScaleState.settings = {
                from: this._countUpSettings.resetted.to,
                to: l,
              }),
              this.setCountUpToScaleStep(
                this._countUpScaleState.index,
                this._countUpScaleState.length
              ),
              o.mysteryInfoTextHelper.setPortraitMode(),
              o.bonusGameInfoTextHelper.setPortraitMode(),
              (o.background.scale.x = 1.345),
              (o.background.scale.y = 1.345),
              o.mysteryWinLabel.setScale(this._mysterWinLabelScale),
              o.countUp.updateTextPositionAndScale(),
              null != this._sceneRootScaleTween &&
                this._sceneRootScaleTween.isRunning)
            ) {
              var m = this._inMysteryGame
                ? this._currentLayoutSettings.mysteryGame
                : this._currentLayoutSettings.mainGame;
              (this._sceneRootScaleTween.timeline[0].vEnd.x = m.sx),
                (this._sceneRootScaleTween.timeline[0].vEnd.y = m.sy),
                (this._sceneRootPosTween.timeline[0].vEnd.x = m.x),
                (this._sceneRootPosTween.timeline[0].vEnd.y = m.y);
            } else this.setFinalValues();
          }),
          (e.prototype.layoutSceneForLandscape = function (t, i, n, a) {
            var o = this._game.scene;
            (o.topRoot.scale.x = n),
              (o.topRoot.scale.y = n),
              (this._currentLayoutSettings.mainGame =
                e.MAIN_GAME_SCENE_ROOT_LANDSCALE),
              (this._currentLayoutSettings.mysteryGame =
                e.MYSTERY_GAME_SCENE_ROOT_LANDSCAPE),
              (this._currentLayoutSettings.specialWin =
                e.SPECIAL_WIN_ENV_ROOT_LANDSCAPE),
              (this._currentLayoutSettings.nearWin =
                e.NEAR_WIN_ENV_ROOT_LANDSCAPE),
              (this._currentLayoutSettings.ultraWin =
                e.ULTRA_WIN_SCENE_ROOT_PORTRAIT),
              (this._countUpSettings.specialWin.from =
                e.COUNT_UP_LOCATION_LANDSCAPE),
              (this._countUpSettings.specialWin.to =
                e.COUNT_UP_LOCATION_SPECIAL_WIN_LANDSCAPE),
              (this._countUpSettings.bonusOutro.from =
                e.COUNT_UP_LOCATION_LANDSCAPE),
              (this._countUpSettings.bonusOutro.to =
                e.COUNT_UP_LOCATION_BONUS_OUTRO_LANDSCAPE),
              (this._countUpSettings.resetted = {
                from: e.COUNT_UP_LOCATION_LANDSCAPE,
                to: e.COUNT_UP_LOCATION_LANDSCAPE,
              }),
              (this._infoFieldSettings.mystery =
                e.INFO_TEXT_LOCATION_MYSTERY_LANDSCAPE),
              (this._infoFieldSettings.bonus =
                e.INFO_TEXT_LOCATION_BONUS_LANDSCAPE),
              (this._mysterWinLabelScale = e.MYSTERY_WIN_LABEL_SCALE_LANDSCAPE);
            var s = e.COUNT_UP_LOCATION_LANDSCAPE,
              r = o.countUp;
            o.countUp.allowSentinelBeam(!1);
            var l = this._specialWinMode
              ? this._countUpSettings.specialWin.to
              : s;
            if (
              ((l = this._bonusOutroMode
                ? this._countUpSettings.bonusOutro.to
                : l),
              this.resumeCountUpTweens(r, l),
              (this._countUpScaleState.settings = {
                from: this._countUpSettings.resetted.to,
                to: l,
              }),
              this.setCountUpToScaleStep(
                this._countUpScaleState.index,
                this._countUpScaleState.length
              ),
              o.countUp.allowSentinelBeam(!0),
              o.mysteryInfoTextHelper.setLandscapeMode(),
              o.bonusGameInfoTextHelper.setLandscapeMode(),
              (o.background.scale.x = 1.163),
              (o.background.scale.y = 1.163),
              o.mysteryWinLabel.setScale(this._mysterWinLabelScale),
              o.countUp.updateTextPositionAndScale(),
              null != this._sceneRootScaleTween &&
                this._sceneRootScaleTween.isRunning)
            ) {
              var m = this._inMysteryGame
                ? this._currentLayoutSettings.mysteryGame
                : this._currentLayoutSettings.mainGame;
              (this._sceneRootScaleTween.timeline[0].vEnd.x = m.sx),
                (this._sceneRootScaleTween.timeline[0].vEnd.y = m.sy),
                (this._sceneRootPosTween.timeline[0].vEnd.x = m.x),
                (this._sceneRootPosTween.timeline[0].vEnd.y = m.y);
            } else this.setFinalValues();
          }),
          (e.prototype.setCountUpToScaleStep = function (e, t) {
            (this._countUpScaleState.index = e),
              (this._countUpScaleState.length = t);
            var i = this._game.scene.countUp.parent,
              n = this._countUpScaleState.settings,
              a = e / t,
              o = (n.to.s - n.from.s) * a;
            (i.scale.x = n.from.s + o), (i.scale.y = n.from.s + o);
            var s = (n.to.y - n.from.y) * a;
            i.y = n.from.y + s;
          }),
          (e.prototype.resumeCountUpTweens = function (e, t) {
            if (
              (e.updateCountUpLocationAndScale(t),
              null != this._countUpTweenPos)
            ) {
              var i = this._countUpTweenPos.progress();
              TweenMax.killTweensOf(e.parent),
                this._bonusOutroMode &&
                  (this.animateCountUpLocationBonusOutro(),
                  this._countUpTweenPos.progress(i),
                  this._countUpTweenScale.progress(i));
            }
          }),
          (e.prototype.isNearWin = function (e, t) {
            var i = this._game.scene.environmentRoot.scale;
            !0 === this._isNearWin
              ? !1 === e &&
                (TweenMax.killTweensOf(i),
                TweenMax.killTweensOf(this._game.scene.environmentRoot),
                !1 === t
                  ? (TweenMax.to(i, this.nearWinZoomOutDuration / 1e3, {
                      x: 1,
                      y: 1,
                    }),
                    TweenMax.to(
                      this._game.scene.environmentRoot,
                      this.nearWinZoomOutDuration / 1e3,
                      { x: 0, y: 0 }
                    ))
                  : (TweenMax.to(i, this.nearWinZoomOutDuration / 1e3, {
                      x: 1,
                      y: 1,
                      delay: 2,
                    }),
                    TweenMax.to(
                      this._game.scene.environmentRoot,
                      this.nearWinZoomOutDuration / 1e3,
                      { x: 0, y: 0, delay: 2 }
                    )))
              : !0 === e &&
                (TweenMax.killTweensOf(i),
                TweenMax.killTweensOf(this._game.scene.environmentRoot),
                TweenMax.to(i, this.nearWinZoomInDuration / 1e3, {
                  x: this._currentLayoutSettings.nearWin.sx,
                  y: this._currentLayoutSettings.nearWin.sy,
                }),
                TweenMax.to(
                  this._game.scene.environmentRoot,
                  this.nearWinZoomInDuration / 1e3,
                  {
                    x: this._currentLayoutSettings.nearWin.x,
                    y: this._currentLayoutSettings.nearWin.y,
                  }
                )),
              (this._isNearWin = e);
          }),
          (e.prototype.layoutMysteryInfoTexts = function (e) {
            (e.y = this._infoFieldSettings.mystery.y),
              (e.x = this._infoFieldSettings.mystery.x),
              (e.scale.x = this._infoFieldSettings.mystery.s),
              (e.scale.y = this._infoFieldSettings.mystery.s),
              this.matchInfoTextGlowsWithInfoTexts();
          }),
          (e.prototype.matchInfoTextGlowsWithInfoTexts = function () {
            var e;
            ((e = this._game.scene.allWinsText.glow).parent.x =
              this._game.scene.allWinsText.parent.x),
              (e.parent.y = this._game.scene.allWinsText.parent.y),
              ((e = this._game.scene.multiplierText.glow).parent.x =
                this._game.scene.multiplierText.parent.x),
              (e.parent.y = this._game.scene.multiplierText.parent.y),
              ((e = this._game.scene.takeYourPickText.glow).parent.x =
                this._game.scene.allWinsText.parent.x),
              (e.parent.y = this._game.scene.allWinsText.parent.y),
              ((e = this._game.scene.leftArrow.glow).parent.x =
                this._game.scene.leftArrow.parent.x),
              (e.parent.y = this._game.scene.leftArrow.parent.y),
              ((e = this._game.scene.rightArrow.glow).parent.x =
                this._game.scene.rightArrow.parent.x),
              (e.parent.y = this._game.scene.rightArrow.parent.y);
          }),
          (e.prototype.getGameBounds = function () {
            var e = 1280 / window.innerWidth,
              t = this._game.scale.bounds,
              i = new Phaser.Rectangle(t.x, t.y, t.width, t.height);
            return (i.width = 1280), (i.height = window.innerHeight * e), i;
          }),
          (e.prototype.layoutBonusInfoTexts = function (e) {
            (e.y = this._infoFieldSettings.bonus.y),
              (e.x = this._infoFieldSettings.bonus.x),
              (e.scale.x = this._infoFieldSettings.bonus.s),
              (e.scale.y = this._infoFieldSettings.bonus.s);
          }),
          (e.prototype.specialWinEntered = function (e, t) {
            if (
              ((this._specialWinMode = !0),
              (this._isUltraWin = t),
              (this._countUpScaleState.settings.to =
                this._countUpSettings.specialWin.to),
              e)
            ) {
              TweenMax.killTweensOf(this._game.scene.environmentRoot.scale),
                TweenMax.killTweensOf(this._game.scene.environmentRoot);
              var i = t
                ? this._currentLayoutSettings.ultraWin
                : this._currentLayoutSettings.specialWin;
              TweenMax.to(this._game.scene.environmentRoot.scale, 0.1, {
                x: i.sx,
                y: i.sy,
              }),
                TweenMax.to(this._game.scene.environmentRoot, 0.1, {
                  x: i.x,
                  y: i.y,
                });
            }
          }),
          (e.prototype.specialWinExited = function () {
            TweenMax.killTweensOf(this._game.scene.environmentRoot.scale),
              TweenMax.killTweensOf(this._game.scene.environmentRoot),
              TweenMax.to(this._game.scene.environmentRoot.scale, 3, {
                x: 1,
                y: 1,
              }),
              TweenMax.to(this._game.scene.environmentRoot, 3, { x: 0, y: 0 });
          }),
          (e.prototype.mysteryGameEntered = function () {
            (this._inMysteryGame = !0),
              this._sceneRootPosTween &&
                (this._sceneRootScaleTween.stop(!1),
                this._sceneRootPosTween.stop(!1));
            var e = (this._sceneRootScaleTween = this._game.add
              .tween(this._game.scene.sceneRoot.scale)
              .to({
                x: this._currentLayoutSettings.mysteryGame.sx,
                y: this._currentLayoutSettings.mysteryGame.sy,
                duration: this.mysteryGameZoomInDuration,
              }));
            e.start(),
              (e = this._sceneRootPosTween =
                this._game.add.tween(this._game.scene.sceneRoot).to({
                  x: this._currentLayoutSettings.mysteryGame.x,
                  y: this._currentLayoutSettings.mysteryGame.y,
                  duration: this.mysteryGameZoomInDuration,
                })).onComplete.addOnce(this.setFinalValues, this),
              e.start();
          }),
          (e.prototype.setFinalValues = function () {
            var e = this._inMysteryGame
              ? this._currentLayoutSettings.mysteryGame
              : this._currentLayoutSettings.mainGame;
            (this._game.scene.sceneRoot.scale.x = e.sx),
              (this._game.scene.sceneRoot.scale.y = e.sy),
              (this._game.scene.sceneRoot.x = e.x),
              (this._game.scene.sceneRoot.y = e.y);
          }),
          (e.prototype.mysteryGameExited = function () {
            this._inMysteryGame = !1;
            var e = (this._sceneRootScaleTween = this._game.add
              .tween(this._game.scene.sceneRoot.scale)
              .to({
                x: this._currentLayoutSettings.mainGame.sx,
                y: this._currentLayoutSettings.mainGame.sy,
                duration: this.mysteryGameZoomOutDuration,
              }));
            e.start(),
              (e = this._sceneRootPosTween =
                this._game.add.tween(this._game.scene.sceneRoot).to({
                  x: this._currentLayoutSettings.mainGame.x,
                  y: this._currentLayoutSettings.mainGame.y,
                  duration: 1e3,
                })).onComplete.addOnce(this.setFinalValues, this),
              e.start();
          }),
          (e.prototype.animateCountUpLocationBonusOutro = function (e) {
            void 0 === e && (e = 1e3), (this._bonusOutroMode = !0);
            var t = this._game.scene.countUp.parent,
              i = this._countUpSettings.bonusOutro;
            (this._countUpTweenPos = TweenMax.fromTo(
              t,
              e / 1e3,
              { x: i.from.x, y: i.from.y },
              { x: i.to.x, y: i.to.y }
            )),
              (this._countUpTweenScale = TweenMax.fromTo(
                t.scale,
                e / 1e3,
                { x: i.from.s, y: i.from.s },
                { x: i.to.s, y: i.to.s }
              ));
          }),
          (e.prototype.setupLayoutConfigFallbacks = function () {
            for (var e in this._sceneLayoutConfig) {
              var t = this._sceneLayoutConfig[e];
              t.fallback &&
                ((t = tk_common.utils.combineObject(
                  t,
                  this._sceneLayoutConfig[t.fallback]
                )),
                (this._sceneLayoutConfig[e] = t)),
                (t.key = e);
            }
          }),
          (e.prototype.updateCurrentLayoutSettings = function (t) {
            (e.MAIN_GAME_SCENE_ROOT_LANDSCALE =
              t.landscapeLayout.mainGame || e.MAIN_GAME_SCENE_ROOT_LANDSCALE),
              (e.MAIN_GAME_SCENE_ROOT_PORTRAIT =
                t.portraitLayout.mainGame || e.MAIN_GAME_SCENE_ROOT_PORTRAIT),
              (e.MYSTERY_GAME_SCENE_ROOT_LANDSCAPE =
                t.landscapeLayout.mysteryGame ||
                e.MYSTERY_GAME_SCENE_ROOT_LANDSCAPE),
              (e.MYSTERY_GAME_SCENE_ROOT_PORTRAIT =
                t.portraitLayout.mysteryGame ||
                e.MYSTERY_GAME_SCENE_ROOT_PORTRAIT),
              (e.SPECIAL_WIN_ENV_ROOT_LANDSCAPE =
                t.landscapeLayout.specialWin ||
                e.SPECIAL_WIN_ENV_ROOT_LANDSCAPE),
              (e.SPECIAL_WIN_ENV_ROOT_PORTRAIT =
                t.portraitLayout.specialWin || e.SPECIAL_WIN_ENV_ROOT_PORTRAIT),
              (e.ULTRA_WIN_SCENE_ROOT_LANDSCAPE =
                t.landscapeLayout.ultraWin || e.ULTRA_WIN_SCENE_ROOT_LANDSCAPE),
              (e.ULTRA_WIN_SCENE_ROOT_PORTRAIT =
                t.portraitLayout.ultraWin || e.ULTRA_WIN_SCENE_ROOT_PORTRAIT),
              (e.NEAR_WIN_ENV_ROOT_LANDSCAPE =
                t.landscapeLayout.nearWin || e.NEAR_WIN_ENV_ROOT_LANDSCAPE),
              (e.NEAR_WIN_ENV_ROOT_PORTRAIT =
                t.portraitLayout.nearWin || e.NEAR_WIN_ENV_ROOT_PORTRAIT),
              (e.COUNT_UP_LOCATION_LANDSCAPE =
                t.countUp.landscape.default || e.COUNT_UP_LOCATION_LANDSCAPE),
              (e.COUNT_UP_LOCATION_PORTRAIT =
                t.countUp.portrait.default || e.COUNT_UP_LOCATION_PORTRAIT),
              (e.COUNT_UP_LOCATION_SPECIAL_WIN_LANDSCAPE =
                t.countUp.landscape.specialWin ||
                e.COUNT_UP_LOCATION_SPECIAL_WIN_LANDSCAPE),
              (e.COUNT_UP_LOCATION_SPECIAL_WIN_PORTRAIT =
                t.countUp.portrait.specialWin ||
                e.COUNT_UP_LOCATION_SPECIAL_WIN_PORTRAIT),
              (e.COUNT_UP_LOCATION_BONUS_OUTRO_LANDSCAPE =
                t.countUp.landscape.bonusOutro ||
                e.COUNT_UP_LOCATION_BONUS_OUTRO_LANDSCAPE),
              (e.COUNT_UP_LOCATION_BONUS_OUTRO_PORTRAIT =
                t.countUp.portrait.bonusOutro ||
                e.COUNT_UP_LOCATION_BONUS_OUTRO_PORTRAIT),
              (e.INFO_TEXT_LOCATION_MYSTERY_LANDSCAPE =
                t.mysteryGameInfoTexts.landscape),
              (e.INFO_TEXT_LOCATION_BONUS_LANDSCAPE =
                t.bonusGameInfoTexts.landscape),
              (e.INFO_TEXT_LOCATION_MYSTERY_PORTRAIT =
                t.mysteryGameInfoTexts.portrait),
              (e.INFO_TEXT_LOCATION_BONUS_PORTRAIT =
                t.bonusGameInfoTexts.portrait),
              (e.MYSTERY_WIN_LABEL_SCALE_LANDSCAPE =
                t.mysteryGameWinLabelScale.landscape),
              (e.MYSTERY_WIN_LABEL_SCALE_PORTRAIT =
                t.mysteryGameWinLabelScale.portrait);
          }),
          (e.prototype.getDeviceSpecificLayoutSettings = function () {
            var t = e.getClosestSupportedWindowAspectRatio(
              this._game.gameTweaker.sceneScaleManager
            );
            return (
              !0 === this._game.initGameData.usedesktopgui && (t = "desktop"),
              this._game.gameTweaker.sceneScaleManager[t]
            );
          }),
          (e.MAIN_GAME_SCENE_ROOT_LANDSCALE = { x: 0, y: 0, sx: 1, sy: 1 }),
          (e.MAIN_GAME_SCENE_ROOT_PORTRAIT = {
            x: -128,
            y: 128,
            sx: 1.2,
            sy: 1.2,
          }),
          (e.MYSTERY_GAME_SCENE_ROOT_LANDSCAPE = {
            x: -128,
            y: -72,
            sx: 1.2,
            sy: 1.2,
          }),
          (e.MYSTERY_GAME_SCENE_ROOT_PORTRAIT = {
            x: -256,
            y: 128,
            sx: 1.4,
            sy: 1.4,
          }),
          (e.SPECIAL_WIN_ENV_ROOT_LANDSCAPE = {
            x: 12.8,
            y: 7.2,
            sx: 0.98,
            sy: 0.98,
          }),
          (e.SPECIAL_WIN_ENV_ROOT_PORTRAIT = {
            x: 12.8,
            y: 7.2,
            sx: 0.98,
            sy: 0.98,
          }),
          (e.ULTRA_WIN_SCENE_ROOT_LANDSCAPE = {
            x: -25.6,
            y: -14.4,
            sx: 1.04,
            sy: 1.04,
          }),
          (e.ULTRA_WIN_SCENE_ROOT_PORTRAIT = {
            x: -25.6,
            y: -14.4,
            sx: 1.04,
            sy: 1.04,
          }),
          (e.NEAR_WIN_ENV_ROOT_LANDSCAPE = {
            x: -12.8,
            y: -7.2,
            sx: 1.02,
            sy: 1.02,
          }),
          (e.NEAR_WIN_ENV_ROOT_PORTRAIT = {
            x: -12.8,
            y: -7.2,
            sx: 1.02,
            sy: 1.02,
          }),
          (e.COUNT_UP_LOCATION_LANDSCAPE = { x: 640, y: 550, s: 1 }),
          (e.COUNT_UP_LOCATION_PORTRAIT = { x: 640, y: 848, s: 2 }),
          (e.COUNT_UP_LOCATION_SPECIAL_WIN_LANDSCAPE = {
            x: 640,
            y: 524,
            s: 1.4,
          }),
          (e.COUNT_UP_LOCATION_SPECIAL_WIN_PORTRAIT = {
            x: 640,
            y: 848,
            s: 2.4,
          }),
          (e.COUNT_UP_LOCATION_BONUS_OUTRO_LANDSCAPE = {
            x: 640,
            y: 524,
            s: 1.4,
          }),
          (e.COUNT_UP_LOCATION_BONUS_OUTRO_PORTRAIT = {
            x: 640,
            y: 848,
            s: 2.4,
          }),
          (e.INFO_TEXT_LOCATION_BONUS_LANDSCAPE = { x: 0, y: 0, s: 1 }),
          (e.INFO_TEXT_LOCATION_BONUS_PORTRAIT = { x: 0, y: 0, s: 1 }),
          (e.INFO_TEXT_LOCATION_MYSTERY_LANDSCAPE = { x: 0, y: 0, s: 1 }),
          (e.INFO_TEXT_LOCATION_MYSTERY_PORTRAIT = { x: 0, y: 0, s: 1 }),
          (e.MYSTERY_WIN_LABEL_SCALE_LANDSCAPE = 1),
          (e.MYSTERY_WIN_LABEL_SCALE_PORTRAIT = 1),
          e
        );
      })();
      e.SceneLayoutManager = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = function (e) {
        (this.classname = "tk.g.slots.s1.rq.S1Request"),
          (this.requesttype = "spin"),
          (this.data = { bet: e });
      };
      e.SpinRequest = t;
      var i = function () {
        (this.classname = "tk.g.slots.s1.rq.S1Request"),
          (this.requesttype = "freespin"),
          (this.data = {});
      };
      e.FreeSpinRequest = i;
      var n = function () {
        (this.classname = "tk.g.slots.s1.rq.S1Request"),
          (this.requesttype = "respin"),
          (this.data = {});
      };
      e.RespinRequest = n;
      var a = function (e) {
        (this.classname = "tk.g.slots.s1.rq.S1Request"),
          (this.requesttype = "mystery.pick"),
          (this.data = { pick: e });
      };
      e.PickRequest = a;
    })(e.net || (e.net = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = e.net.SpinRequest,
        n = (function () {
          function e(e, i) {
            (this._game = e),
              (this._gameServerConnection = i),
              (this.requestMaker = new tk_common.slots.net.SlotRequestMaker(
                e,
                i,
                0,
                1500
              )),
              (this._adapter = new t.RequestResponseAdapter(e));
          }
          return (
            (e.prototype.restore = function (e) {
              this._adapter.restoreStateEntered(e.sue.agp);
            }),
            (e.prototype.spin = function (e, t) {
              var n = this,
                a = new i({
                  value: {
                    amount: this._game.model.placedBetAmount,
                    currencyiso: this._game.model.playerCurrency,
                    classname: "tk.d.finance.Money",
                  },
                  id: "ante",
                  classname: "tk.d.finance.Bet",
                });
              this._game.ocConfigurationManager.applyOcToGameRequest(a),
                this._game.requestMaker.sendNewGameRoundServerRequest(
                  this._adapter.convertSpinRequestToVanillaRequests(a),
                  function (t) {
                    e(n._adapter.responseToChocolate(t));
                  },
                  t
                );
            }),
            (e.prototype.pick = function (e, i, n) {
              var a = this,
                o = new t.PickRequest(e);
              this._game.requestMaker.sendContinueGameRoundServerRequest(
                this._adapter.convertPickRequestToVanillaRequests(o),
                function (e) {
                  i(a._adapter.responseToChocolate(e));
                },
                n
              );
            }),
            (e.prototype.respin = function (e, i) {
              var n = this,
                a = new t.RespinRequest();
              this._game.ocConfigurationManager.applyOcToGameRequest(a),
                this._game.requestMaker.sendContinueGameRoundServerRequest(
                  this._adapter.convertRespinRequestToVanillaRequests(a),
                  function (t) {
                    e(n._adapter.responseToChocolate(t));
                  },
                  i
                );
            }),
            (e.prototype.freespin = function (e, i) {
              var n = this,
                a = new t.FreeSpinRequest();
              this._game.ocConfigurationManager.applyOcToGameRequest(a),
                this._game.requestMaker.sendContinueGameRoundServerRequest(
                  this._adapter.convertFreespinRequestToVanillaRequests(a),
                  function (t) {
                    e(n._adapter.responseToChocolate(t));
                  },
                  i
                );
            }),
            (e.prototype.freerespin = function (e, i) {
              var n = this,
                a = new t.RespinRequest();
              this._game.ocConfigurationManager.applyOcToGameRequest(a),
                this._game.requestMaker.sendContinueGameRoundServerRequest(
                  this._adapter.convertFreespinRespinRequestToVanillaRequests(
                    a
                  ),
                  function (t) {
                    e(n._adapter.responseToChocolate(t));
                  },
                  i
                );
            }),
            e
          );
        })();
      t.ServerConnection = n;
    })(e.net || (e.net = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    var t = e.net.ServerConnection,
      i = (function (i) {
        function n() {
          return (null !== i && i.apply(this, arguments)) || this;
        }
        return (
          __extends(n, i),
          (n.prototype.setupGameReferences = function () {}),
          (n.prototype.buildGameGui = function (t) {
            var i = new e.utils.PaytableHelper(this.game);
            t.gameGuiCss = "gameGuiStyles.css";
            var n = new tk_gui.DefaultMobileGui(
                this.slotGame.gameContainerElementId,
                this.getAssetUrl("assets"),
                this.slotGame.initGameData.gameinstanceid,
                i,
                null
              ),
              a = this.game;
            return (
              (a.ocConfigurationManager = new e.utils.OCConfigurationManager(
                a
              )),
              (a.ocConfiguration =
                a.ocConfigurationManager.createOcConfiguration()),
              n.setOcConfiguration(a.ocConfiguration),
              n.hasMaximizedPortrait(!0),
              n.buildGui(e.convertGame(this.game).ownsPage, t),
              n.setOcEnabled(this.slotGame.model.initGameData.developmentmode),
              n.onGuiButtonClicked.add(i.handlePaytableButtonClicked, i),
              n
            );
          }),
          (n.prototype.connectExternalGuiToGame = function (e) {
            return e;
          }),
          (n.prototype.getGameRulesPhraseId = function () {
            return "tk-astronaut";
          }),
          (n.prototype.getGameTitlePhraseId = function () {
            return "Arcader";
          }),
          (n.prototype.enterGameFlowState = function () {
            this.game.state.start("GameFlow", !0, !1);
          }),
          (n.prototype.preloadGameSpecificAssets = function () {
            var t = this;
            (this._everythingLoadedGate =
              tk_common.utils.createWaitForCallbacksGate(function () {
                t.enterGameFlowState();
              })),
              this._everythingLoadedGate.addCallback("phaser"),
              this.readyToShowRegulationDisclaimerInPreloader(e.Preloader),
              (this.slotGame.gameTweaker = JSON.parse(
                this.game.cache.getText("gameTweaker")
              )),
              this.load.json(
                "paytableLayoutConfig",
                this.getAssetUrl("assets/config/paytableLayoutConfig.json")
              ),
              this.loadPhaserAssets();
            var i = this.slotGame.jsBridge;
            void 0 !== e.Preloader &&
              (this.load.onFileComplete.add(function (t, n) {
                e.Preloader.filesLoaded([n], t), i.preloaderProgress(t);
              }),
              e.Preloader.loadingFiles());
          }),
          (n.prototype.startGameExecution = function () {
            this.slotGame.gui.showGui(),
              this.slotGame.layoutGui(!1),
              this._everythingLoadedGate.completeCallback("phaser");
          }),
          (n.prototype.getSoundsToLoad = function (t) {
            var i, n;
            -1 !== navigator.userAgent.indexOf("Edge") ||
            this.slotGame.device.iOS ||
            this.slotGame.device.ie ||
            this.slotGame.device.safari
              ? ((n = "mp3"),
                (i =
                  "/mp3/" +
                  (this.slotGame.initGameData.lowresmode ? "lq" : "hq")))
              : ((n = "ogg"), (i = "/ogg")),
              t("dummyIosSound", [
                this.getAssetUrl("assets/sounds/dummyIosSound.mp3"),
              ]),
              t(e.SoundIds.AS_MainGameAmbience, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_MainGameAmbianceLoop." + n
                ),
              ]),
              t(e.SoundIds.AS_SpinStart, [
                this.getAssetUrl("assets/sounds" + i + "/AS_SpinStart." + n),
              ]),
              t(e.SoundIds.AS_SpinStop, [
                this.getAssetUrl("assets/sounds" + i + "/AS_SpinStop." + n),
              ]),
              t(e.SoundIds.AS_SpinLoop, [
                this.getAssetUrl("assets/sounds" + i + "/AS_SpinLoop." + n),
              ]),
              t(e.SoundIds.AS_SpinLoop, [
                this.getAssetUrl("assets/sounds" + i + "/AS_SpinLoop." + n),
              ]),
              t(e.SoundIds.AS_PaylineWinSnd, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_MediumWinPayLine." + n
                ),
              ]),
              t(e.SoundIds.AS_CountUpLoop, [
                this.getAssetUrl("assets/sounds" + i + "/AS_CountupLoop." + n),
              ]),
              t(e.SoundIds.AS_CountUpStop, [
                this.getAssetUrl("assets/sounds" + i + "/AS_CountupStop." + n),
              ]),
              t(e.SoundIds.AS_MiniWinSnd, [
                this.getAssetUrl("assets/sounds" + i + "/AS_MiniWin." + n),
              ]),
              t(e.SoundIds.AS_SmallWinSnd, [
                this.getAssetUrl("assets/sounds" + i + "/AS_SmallWin." + n),
              ]),
              t(e.SoundIds.AS_MediumWinSnd, [
                this.getAssetUrl("assets/sounds" + i + "/AS_MediumWin." + n),
              ]),
              t(e.SoundIds.AS_NearWinStart, [
                this.getAssetUrl("assets/sounds" + i + "/AS_NearWinStart." + n),
              ]),
              t(e.SoundIds.AS_NearWinStopWin, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_NearWinStopWin." + n
                ),
              ]),
              t(e.SoundIds.AS_NearWinStopNoWin, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_NearWinStopNoWin." + n
                ),
              ]),
              t(e.SoundIds.AS_ExpanderAttention, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_ExpanderAttention." + n
                ),
              ]),
              t(e.SoundIds.AS_ExpanderExpansion, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_ExpanderExpansion." + n
                ),
              ]),
              t(e.SoundIds.AS_SingleExpansion, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_SingleExpansion." + n
                ),
              ]),
              t(e.SoundIds.AS_DoubleExpansion, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_DoubleExpansion." + n
                ),
              ]),
              t(e.SoundIds.AS_TripleExpansion, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_TripleExpansion." + n
                ),
              ]),
              t(e.SoundIds.AS_BigWinSnd, [
                this.getAssetUrl("assets/sounds" + i + "/AS_BigWin." + n),
              ]),
              t(e.SoundIds.AS_BigWinFirework1, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_BigWinFirework1." + n
                ),
              ]),
              t(e.SoundIds.AS_BigWinFirework2, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_BigWinFirework2." + n
                ),
              ]),
              t(e.SoundIds.AS_BigWinFirework3, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_BigWinFirework3." + n
                ),
              ]),
              t(e.SoundIds.AS_CyclingFirework1, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_CyclingFirework1." + n
                ),
              ]),
              t(e.SoundIds.AS_CyclingFirework2, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_CyclingFirework2." + n
                ),
              ]),
              t(e.SoundIds.AS_CyclingFirework3, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_CyclingFirework3." + n
                ),
              ]),
              t(e.SoundIds.AS_MysteryGameAmbience, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_MysteryGameAmbianceLoop." + n
                ),
              ]),
              t(e.SoundIds.AS_MysteryGameIntro, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_MysteryGameIntro." + n
                ),
              ]),
              t(e.SoundIds.AS_MysteryGameOutro, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_MysteryGameOutro." + n
                ),
              ]),
              t(e.SoundIds.AS_MysteryGameWin01, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_MysteryGameWin01." + n
                ),
              ]),
              t(e.SoundIds.AS_MysteryGameWin02, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_MysteryGameWin02." + n
                ),
              ]),
              t(e.SoundIds.AS_MysteryGameWin03, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_MysteryGameWin03." + n
                ),
              ]),
              t(e.SoundIds.AS_MysteryGameWin04, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_MysteryGameWin04." + n
                ),
              ]),
              t(e.SoundIds.AS_MysteryGameNoWin, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_MysteryGameNoWin." + n
                ),
              ]),
              t(e.SoundIds.AS_MysteryGameShuffle, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_MysteryGameShuffle." + n
                ),
              ]),
              t(e.SoundIds.AS_MysteryGameDoorPicked, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_MysteryGameDoorPicked." + n
                ),
              ]),
              t(e.SoundIds.AS_MysteryGameDoorNotPicked, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_MysteryGameDoorNotPicked." + n
                ),
              ]),
              t(e.SoundIds.AS_MysteryGameInitialReveal, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_MysteryGameInitialReveal." + n
                ),
              ]),
              t(e.SoundIds.AS_BonusGameAmbience, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_BonusGameAmbianceLoop." + n
                ),
              ]),
              t(e.SoundIds.AS_BonusGameIntro, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_BonusGameIntro." + n
                ),
              ]),
              t(e.SoundIds.AS_BonusGameOutro, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_BonusGameOutro." + n
                ),
              ]),
              t(e.SoundIds.AS_BonusGameAmbience, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_BonusGameAmbianceLoop." + n
                ),
              ]),
              t(e.SoundIds.AS_StickyWildVoice, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_StickyWildVoice." + n
                ),
              ]),
              t(e.SoundIds.AS_StickyWildTargetArea, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_StickyWildTargetArea." + n
                ),
              ]),
              t(e.SoundIds.AS_StickyWildMeteorite1, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_StickyWildMeteorite1." + n
                ),
              ]),
              t(e.SoundIds.AS_StickyWildMeteorite2, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_StickyWildMeteorite2." + n
                ),
              ]),
              t(e.SoundIds.AS_StickyWildMeteorite3, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_StickyWildMeteorite3." + n
                ),
              ]),
              t(e.SoundIds.AS_StickyWildMeteoriteNoHit1, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_StickyWildMeteoriteNoHit1." + n
                ),
              ]),
              t(e.SoundIds.AS_StickyWildMeteoriteNoHit2, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_StickyWildMeteoriteNoHit2." + n
                ),
              ]),
              t(e.SoundIds.AS_StickyWildMeteoriteNoHit3, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_StickyWildMeteoriteNoHit3." + n
                ),
              ]),
              t(e.SoundIds.AS_MegaWinFirework1, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_MegaWinFirework1." + n
                ),
              ]),
              t(e.SoundIds.AS_MegaWinFirework2, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_MegaWinFirework2." + n
                ),
              ]),
              t(e.SoundIds.AS_MegaWinFirework3, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_MegaWinFirework3." + n
                ),
              ]),
              t(e.SoundIds.AS_MegaWinSnd, [
                this.getAssetUrl("assets/sounds" + i + "/AS_MegaWin." + n),
              ]),
              t(e.SoundIds.AS_UltraWinFirework1, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_UltraWinFirework1." + n
                ),
              ]),
              t(e.SoundIds.AS_UltraWinFirework2, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_UltraWinFirework2." + n
                ),
              ]),
              t(e.SoundIds.AS_UltraWinFirework3, [
                this.getAssetUrl(
                  "assets/sounds" + i + "/AS_UltraWinFirework3." + n
                ),
              ]),
              t(e.SoundIds.AS_UltraWinSnd, [
                this.getAssetUrl("assets/sounds" + i + "/AS_UltraWin." + n),
              ]);
          }),
          (n.prototype.layoutScene = function (t) {
            var i = this.game;
            null == i.sceneLayoutManager &&
              (i.sceneLayoutManager = new e.view.SceneLayoutManager(i)),
              i.sceneLayoutManager.layoutScene(t);
          }),
          (n.prototype.createGameServerRequestMaker = function (e) {
            var i = this.game;
            return (
              (i.serverConnection = new t(i, e)),
              i.serverConnection.requestMaker
            );
          }),
          (n.prototype.addRequiredBrowserFeatureSetForGame = function (e) {
            var t = this.game;
            e("WebAudio", function () {
              return t.sound.usingWebAudio;
            }),
              e("WebGL", function () {
                return t.renderer instanceof PIXI.WebGLRenderer;
              });
          }),
          (n.prototype.getAjaxCallMakingWebWorkerSrc = function () {
            return this.game.device.ie ||
              this.game.device.edge ||
              this.game.device.opera
              ? null
              : this.game.cache.getText("wwAjax");
          }),
          (n.prototype.loadPhaserAssets = function () {
            var e = this.game,
              t = e.initGameData.lowresmode
                ? "lowResolution"
                : "highResolution";
            e.load.atlasJSONArray(
              "common",
              this.getAssetUrl("assets/images/" + t + "/common.png"),
              this.getAssetUrl("assets/images/" + t + "/common.json")
            ),
              e.load.atlasJSONArray(
                "pixelAnimations",
                this.getAssetUrl("assets/images/" + t + "/pixelAnimations.png"),
                this.getAssetUrl("assets/images/" + t + "/pixelAnimations.json")
              ),
              e.load.atlasJSONArray(
                "symbols",
                this.getAssetUrl("assets/images/" + t + "/symbols.png"),
                this.getAssetUrl("assets/images/" + t + "/symbols.json")
              ),
              e.load.atlasJSONArray(
                "glows",
                this.getAssetUrl("assets/images/" + t + "/glows.jpg"),
                this.getAssetUrl("assets/images/" + t + "/glows.json")
              ),
              e.load.atlasJSONArray(
                "symbolGlows",
                this.getAssetUrl("assets/images/" + t + "/symbolGlows.jpg"),
                this.getAssetUrl("assets/images/" + t + "/symbolGlows.json")
              ),
              e.load.bitmapFont(
                "sentinelMainGame",
                this.getAssetUrl("assets/images/fonts/sentinel/sentinel.png"),
                this.getAssetUrl(
                  "assets/images/fonts/sentinel/sentinelMainGame.xml"
                )
              ),
              e.load.bitmapFont(
                "sentinelBonusGame",
                this.getAssetUrl("assets/images/fonts/sentinel/sentinel.png"),
                this.getAssetUrl(
                  "assets/images/fonts/sentinel/sentinelBonusGame.xml"
                )
              ),
              e.load.bitmapFont(
                "voxel",
                this.getAssetUrl("assets/images/fonts/voxel/voxel.png"),
                this.getAssetUrl("assets/images/fonts/voxel/voxel.xml")
              ),
              e.load.atlasJSONArray(
                "effects",
                this.getAssetUrl("assets/images/" + t + "/effects.jpg"),
                this.getAssetUrl("assets/images/" + t + "/effects.json")
              ),
              e.load.atlasJSONArray(
                "pixels",
                this.getAssetUrl("assets/images/" + t + "/pixels.png"),
                this.getAssetUrl("assets/images/" + t + "/pixels.json")
              ),
              e.load.json(
                "subSpriteCoords",
                this.getAssetUrl("assets/pixels/subSpriteCoords.json")
              ),
              e.load.json(
                "combinedAnimations",
                this.getAssetUrl("assets/animations/combined.json")
              ),
              e.load.atlasJSONArray(
                "expansionFrames",
                this.getAssetUrl("assets/images/" + t + "/expansionFrames.png"),
                this.getAssetUrl("assets/images/" + t + "/expansionFrames.json")
              ),
              e.load.binary(
                "combinedb",
                this.getAssetUrl("assets/pixelAnimations/combined.json")
              ),
              e.load.json(
                "combinedManifest",
                this.getAssetUrl("assets/pixelAnimations/combinedManifest.json")
              );
          }),
          n
        );
      })(tk_common.slots.phaser.AbstractPhaserPreloaderState);
    e.PreloaderState = i;
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t;
      function i(e) {
        switch (e) {
          case t.IDLE:
            return "Idle";
          case t.SPIN:
            return "Spin";
          case t.WIN:
            return "MiniWin";
          case t.ATTENTION:
            return "Attention";
          case t.SHOW:
            return "Show";
          case t.HIDE:
            return "Hide";
        }
        return null;
      }
      function n(e, t) {
        switch (e) {
          case 0:
            return "Wild";
          case 1:
            return t ? "Bar" : "BAR";
          case 2:
            return "Seven";
          case 3:
            return "Bell";
          case 4:
            return "Melon";
          case 5:
            return "Lemon";
          case 6:
            return "Plum";
          case 7:
            return "Orange";
          case 8:
            return "Cherry";
          case 9:
            return "Grape";
          case 10:
            return "Scatter";
          case 11:
            return "Expansion";
          case 12:
            return "Mystery";
          case 13:
            return "StickyWild";
        }
        return null;
      }
      !(function (e) {
        (e[(e.IDLE = 0)] = "IDLE"),
          (e[(e.SPIN = 1)] = "SPIN"),
          (e[(e.WIN = 2)] = "WIN"),
          (e[(e.ATTENTION = 3)] = "ATTENTION"),
          (e[(e.SHOW = 4)] = "SHOW"),
          (e[(e.HIDE = 5)] = "HIDE");
      })((t = e.SymbolAnimationTypeEnum || (e.SymbolAnimationTypeEnum = {}))),
        (e.mapSymbolAnimTypeToAnimationName = i),
        (e.generateSymbolAnimationFrameNames = function (e, t, a) {
          for (
            var o = [],
              s = n(e, !1) + "_" + i(t) + "_",
              r = a.animations._frameData,
              l = 0;
            ;

          ) {
            var m =
              s +
              String.fromCharCode(l / 26 + 97) +
              String.fromCharCode((l % 26) + 97) +
              ".png";
            if (null == r._frameNames[m]) break;
            o.push(m), l++;
          }
          return o;
        }),
        (e.generateAnimationFrameNames = function (e, t, i) {
          var n,
            a,
            o,
            s = [],
            r = e.animations._frameData;
          if (void 0 === t)
            for (
              a = i.prefix, o = 0;
              (n =
                a +
                String.fromCharCode(o / 26 + 97) +
                String.fromCharCode((o % 26) + 97) +
                i.suffix),
                null != r._frameNames[n];

            )
              s.push(n), o++;
          else
            for (
              a = t + "_", o = 0;
              (n =
                a +
                String.fromCharCode(o / 26 + 97) +
                String.fromCharCode((o % 26) + 97) +
                ".png"),
                null != r._frameNames[n];

            )
              s.push(n), o++;
          return s.length, s;
        }),
        (e.mapSymbolIdToSYM = function (e) {
          return "SYM" + e;
        }),
        (e.mapSymbolIdToSymbolName = n);
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t;
      !(function (e) {
        (e[(e.IDLE = 0)] = "IDLE"),
          (e[(e.SPIN = 1)] = "SPIN"),
          (e[(e.WIN = 2)] = "WIN"),
          (e[(e.ATTENTION = 3)] = "ATTENTION"),
          (e[(e.EXPANSION = 4)] = "EXPANSION"),
          (e[(e.LESS_ATTENTION = 5)] = "LESS_ATTENTION");
      })((t = e.SymbolStates || (e.SymbolStates = {})));
      var i = (function () {
        function e() {}
        return (
          (e.createSymbol = function (e, t, i, a, o) {
            var s = e.sprite(0, 0, "symbols", void 0, o);
            (s.name = "baseSprite_" + i + "_" + a), (s.reel = i);
            var r = e.image(0, 0, "symbols", void 0, o),
              l = new n(s, r, o, i, a);
            return l.setSymbolId(t), l;
          }),
          e
        );
      })();
      e.SymbolFactory = i;
      var n = (function () {
        function i(t, i, n, a, o) {
          (this.position = 0),
            (this._row = 0),
            (this._glowSprite = null),
            (this._baseSprite = null),
            (this._symbolId = -1),
            (this._state = 0),
            (this._largerGlow = !1),
            (this._glowTurnedOff = !1),
            (this._baseSprite = t),
            (this._symbolLayer = n),
            (this._attentionSprite = i),
            (this._game = t.game);
          var s = Phaser.Animation.generateFrameNames(
            "expanderWin",
            0,
            3,
            ".png"
          );
          s = s.concat(s);
          var r = this._baseSprite;
          r.animations.add("expanderWin", s, 31, !1);
          var l = e.ReelMatrixes.VMs[a];
          (r.viewModelMatrix = l),
            (this._symbolIndex = o),
            (this.v0 = { x: 0, y: 0 }),
            (this.v1 = { x: 13, y: 0 }),
            (this.v2 = { x: 13, y: 13 }),
            (this.v3 = { x: 0, y: 13 }),
            (r.v0 = this.v0),
            (r.v1 = this.v1),
            (r.v2 = this.v2),
            (r.v3 = this.v3),
            (r._crop = this._crop = new Phaser.Rectangle(0, 0, 0, 0)),
            (r.visible = !1),
            (r.shouldCrop = !0);
          var m = this._attentionSprite;
          (m.v0 = this.v0),
            (m.v1 = this.v1),
            (m.v2 = this.v2),
            (m.v3 = this.v3),
            (m.viewModelMatrix = l),
            (m.visible = !1),
            this.buildSymbolAnimations(),
            (this._reelIndex = a),
            (this._state = 0),
            (this.onAnimationComplete = new tk_common.utils.Signal1());
        }
        return (
          (i.prototype.turnOffGlow = function (e) {
            (this._glowTurnedOff = e),
              this._glowSprite &&
                (this._glowSprite.visible =
                  !this._glowTurnedOff && this._glowSprite.visible);
          }),
          (i.prototype.getSymbolId = function () {
            return this._symbolId;
          }),
          (i.prototype.setSymbolId = function (e) {
            this._symbolId = e;
            var n = i.SymbolNameMapping[e];
            if (void 0 === n)
              throw new Error(
                "Could not map from " + e + " to valid symbol name."
              );
            switch (
              (null != this._glowSprite &&
                (this._glowSprite.frameName = n + "Glow.png"),
              this._state)
            ) {
              case t.LESS_ATTENTION:
              case t.IDLE:
                this._baseSprite.frameName = n + ".png";
                break;
              case t.SPIN:
                this._baseSprite.frameName = n + "Spin.png";
                break;
              case t.WIN:
              case t.ATTENTION:
                this._baseSprite.frameName = n + ".png";
                break;
              case t.EXPANSION:
                this._baseSprite.frameName = "expander.png";
            }
            this._attentionSprite.frameName =
              12 === e
                ? n + "Win1.png"
                : 10 === e
                ? n + "Win3.png"
                : 11 === e
                ? n + "Win0.png"
                : n + "Win1.png";
          }),
          (i.prototype.playWinAnimation = function () {
            (this._state = t.WIN),
              this._baseSprite.animations.stop(),
              this._baseSprite
                .play("SYM" + this._symbolId + "_Win", 25, !1, !1)
                .onComplete.addOnce(this.handleCurrentAnimationComplete, this),
              null != this._glowSprite &&
                (this._glowSprite.animations.stop(),
                this._glowSprite.play(
                  "SYM" + this._symbolId + "_Win",
                  25,
                  !1,
                  !1
                ));
          }),
          (i.prototype.playIdleAnimation = function () {
            this.stopAttentionGlowAnimation(),
              this._baseSprite.animations.stop(),
              (this._state = t.IDLE),
              this.setSymbolId(this._symbolId),
              null != this._glowSprite &&
                (this._glowSprite.animations.stop(),
                this._glowSprite.revive(),
                this._symbolIndex > 5 && this._symbolIndex < 9
                  ? (TweenMax.killTweensOf(this._glowSprite),
                    (this._glowSprite.alpha = 0.8))
                  : (this._glowSprite.alpha = 0));
          }),
          (i.prototype.playAttentionAnimation = function () {
            (this._state = t.ATTENTION),
              this.setSymbolId(this._symbolId),
              this._attentionSprite.revive(),
              null != this._glowSprite &&
                (this._glowSprite.animations.stop(),
                this._glowSprite.revive(),
                this.startAttentionGlowAnimation());
          }),
          (i.prototype.playExpansionWinAnimation = function () {
            (this._state = t.EXPANSION),
              this.setSymbolId(this._symbolId),
              this._baseSprite
                .play("expanderWin", 31, !1, !1)
                .onComplete.addOnce(this.handleCurrentAnimationComplete, this),
              null != this._glowSprite &&
                this._glowSprite.play(
                  "SYM" + this._symbolId + "_Win",
                  31,
                  !1,
                  !1
                );
          }),
          (i.prototype.playSpinAnimation = function () {
            (this._state = t.SPIN),
              this._baseSprite.revive(),
              this.setSymbolId(this._symbolId),
              null != this._glowSprite &&
                ((this._glowSprite.visible = !this._glowTurnedOff),
                (this._glowSprite.alpha = 0.8));
          }),
          (i.prototype.moveGlowToSymbolLayer = function () {
            if (!this._glowSprite) throw new Error("Why no glow sprite?");
            this._glowSprite.parent.removeChild(this._glowSprite),
              this._symbolLayer.add(this._glowSprite);
          }),
          (i.prototype.moveGlowToGlowLayer = function () {
            this._glowSprite &&
              (this._glowSprite.parent.removeChild(this._glowSprite),
              this._glowLayer.add(this._glowSprite));
          }),
          (i.prototype.handleCurrentAnimationComplete = function () {
            (this._state !== t.EXPANSION && this._state !== t.WIN) ||
              this.playIdleAnimation(),
              this.onAnimationComplete.dispatch(this);
          }),
          (i.prototype.stop = function () {}),
          (i.prototype.update = function () {}),
          (i.prototype.updateSymbolPosition = function (e) {
            var t = this._baseSprite;
            (e = e || this._row), (this._row = e);
            var i = -1 * e + 48 + 67 - (2 == this._reelIndex ? 5 : 6);
            if (
              ((this.v0.x = 0),
              (this.v0.y = i),
              (this.v1.x = 13),
              (this.v1.y = i),
              (this.v2.x = 13),
              (this.v2.y = 13 + i),
              (this.v3.x = 0),
              (this.v3.y = 13 + i),
              this._glowSprite)
            ) {
              var n = this._largerGlow ? 3 : 1,
                a = this._glowSprite;
              (a.v0.x = this.v0.x - n),
                (a.v0.y = this.v0.y - n),
                (a.v1.x = this.v1.x + n),
                (a.v1.y = this.v1.y - n),
                (a.v2.x = this.v2.x + n),
                (a.v2.y = this.v2.y + n),
                (a.v3.x = this.v3.x - n),
                (a.v3.y = this.v3.y + n);
            }
            e >= 61
              ? e < 74
                ? ((t.visible = !0),
                  this._glowSprite && (this._glowSprite.visible = !1))
                : ((t.visible = !0),
                  this._glowSprite &&
                    (this._glowSprite.visible = !this._glowTurnedOff))
              : ((t.visible = !1),
                this._glowSprite && (this._glowSprite.visible = !1));
          }),
          (i.prototype.kill = function () {
            this._baseSprite.kill(),
              this._attentionSprite.kill(),
              null != this._glowSprite && this._glowSprite.kill();
          }),
          (i.prototype.revive = function (e) {
            void 0 === e && (e = !0),
              this._baseSprite.revive(),
              null == this._glowSprite ||
                this._glowTurnedOff ||
                this._glowSprite.revive(),
              e && this.updateSymbolPosition();
          }),
          (i.prototype.stopWinPresentation = function () {
            this._baseSprite.animations.stop(),
              null != this._glowSprite && this._glowSprite.animations.stop(),
              this.setSymbolId(this._symbolId);
          }),
          (i.prototype.startIdleGlowAnimation = function () {
            null != this._glowSprite &&
              this._symbolIndex > 5 &&
              this._symbolIndex < 9 &&
              TweenMax.fromTo(
                this._glowSprite,
                0.8,
                { alpha: 0.8 },
                { alpha: 2 }
              )
                .repeat(1e5)
                .yoyo(!0);
          }),
          (i.prototype.stopIdleGlowAnimation = function () {
            null != this._glowSprite &&
              (TweenMax.killTweensOf(this._glowSprite),
              this._symbolIndex > 5 &&
                this._symbolIndex < 9 &&
                TweenMax.to(
                  this._glowSprite,
                  0.8 * (0.8 - this._glowSprite.alpha),
                  { alpha: 0.8 }
                ));
          }),
          (i.prototype.startAttentionGlowAnimation = function () {
            this._state = t.ATTENTION;
            var e = this._game.gameTweaker.nearWin,
              i = e.symbolAttentionMinGlow,
              n = e.symbolAttentionMaxGlow,
              a = e.symbolAttentionTweenDurationMs / 1e3;
            this._attentionSprite.revive(),
              TweenMax.fromTo(
                this._attentionSprite,
                a,
                { alpha: 0 },
                { alpha: 1, repeat: 1e5, yoyo: !0 }
              ),
              null != this._glowSprite &&
                (TweenMax.killTweensOf(this._glowSprite),
                TweenMax.fromTo(
                  this._glowSprite,
                  a,
                  { alpha: i },
                  { alpha: n, repeat: 1e5, yoyo: !0 }
                ),
                (this._largerGlow = !0));
          }),
          (i.prototype.startLesserGlowAnimation = function () {
            if (null != this._glowSprite) {
              this._state = t.LESS_ATTENTION;
              var e = this._game.gameTweaker.nearWin,
                i = e.symbolLesserAttentionMinGlow,
                n = e.symbolLesserAttentionMaxGlow,
                a = e.symbolAttentionTweenDurationMs / 1e3;
              TweenMax.killTweensOf(this._glowSprite),
                TweenMax.fromTo(
                  this._glowSprite,
                  a,
                  { alpha: i },
                  { alpha: n, repeat: 1e5, yoyo: !0 }
                ),
                (this._largerGlow = !1);
            }
          }),
          (i.prototype.stopAttentionGlowAnimation = function () {
            TweenMax.killTweensOf(this._attentionSprite),
              this._attentionSprite.kill(),
              this._glowSprite &&
                (TweenMax.killTweensOf(this._glowSprite),
                (this._glowSprite.alpha = 0),
                (this._largerGlow = !1));
          }),
          (i.prototype.buildSymbolAnimations = function () {
            var e = Phaser.Animation.generateFrameNames(
              i.SymbolNameMapping[0] + "Win",
              0,
              1,
              ".png"
            );
            (e = e.concat(e)),
              this._baseSprite.animations.add("SYM0_Win", e, 31, !1),
              (e = (e = Phaser.Animation.generateFrameNames(
                i.SymbolNameMapping[1] + "Win",
                0,
                1,
                ".png"
              )).concat(e)),
              this._baseSprite.animations.add("SYM1_Win", e, 31, !1),
              (e = (e = Phaser.Animation.generateFrameNames(
                i.SymbolNameMapping[2] + "Win",
                0,
                1,
                ".png"
              )).concat(e)),
              this._baseSprite.animations.add("SYM2_Win", e, 31, !1),
              (e = (e = Phaser.Animation.generateFrameNames(
                i.SymbolNameMapping[3] + "Win",
                0,
                1,
                ".png"
              )).concat(e)),
              this._baseSprite.animations.add("SYM3_Win", e, 31, !1),
              (e = (e = Phaser.Animation.generateFrameNames(
                i.SymbolNameMapping[4] + "Win",
                0,
                1,
                ".png"
              )).concat(e)),
              this._baseSprite.animations.add("SYM4_Win", e, 31, !1),
              (e = (e = Phaser.Animation.generateFrameNames(
                i.SymbolNameMapping[5] + "Win",
                0,
                1,
                ".png"
              )).concat(e)),
              this._baseSprite.animations.add("SYM5_Win", e, 31, !1),
              (e = (e = Phaser.Animation.generateFrameNames(
                i.SymbolNameMapping[6] + "Win",
                0,
                1,
                ".png"
              )).concat(e)),
              this._baseSprite.animations.add("SYM6_Win", e, 31, !1),
              (e = (e = Phaser.Animation.generateFrameNames(
                i.SymbolNameMapping[7] + "Win",
                0,
                1,
                ".png"
              )).concat(e)),
              this._baseSprite.animations.add("SYM7_Win", e, 31, !1),
              (e = (e = Phaser.Animation.generateFrameNames(
                i.SymbolNameMapping[8] + "Win",
                0,
                1,
                ".png"
              )).concat(e)),
              this._baseSprite.animations.add("SYM8_Win", e, 31, !1),
              (e = (e = Phaser.Animation.generateFrameNames(
                i.SymbolNameMapping[10] + "Win",
                0,
                1,
                ".png"
              )).concat(e)),
              this._baseSprite.animations.add("SYM10_Win", e, 31, !1),
              (e = (e = Phaser.Animation.generateFrameNames(
                i.SymbolNameMapping[12] + "Win",
                0,
                1,
                ".png"
              )).concat(e)),
              this._baseSprite.animations.add("SYM12_Win", e, 31, !1);
          }),
          (i.prototype.buildGlowAnimations = function () {
            if (null != this._glowSprite) {
              var e = Phaser.Animation.generateFrameNames(
                i.SymbolNameMapping[0] + "Win",
                0,
                1,
                "Glow.png"
              );
              (e = e.concat(e)),
                this._glowSprite.animations.add("SYM0_Win", e, 31, !1),
                (e = (e = Phaser.Animation.generateFrameNames(
                  i.SymbolNameMapping[1] + "Win",
                  0,
                  1,
                  "Glow.png"
                )).concat(e)),
                this._glowSprite.animations.add("SYM1_Win", e, 31, !1),
                (e = (e = Phaser.Animation.generateFrameNames(
                  i.SymbolNameMapping[2] + "Win",
                  0,
                  1,
                  "Glow.png"
                )).concat(e)),
                this._glowSprite.animations.add("SYM2_Win", e, 31, !1),
                (e = (e = Phaser.Animation.generateFrameNames(
                  i.SymbolNameMapping[3] + "Win",
                  0,
                  1,
                  "Glow.png"
                )).concat(e)),
                this._glowSprite.animations.add("SYM3_Win", e, 31, !1),
                (e = (e = Phaser.Animation.generateFrameNames(
                  i.SymbolNameMapping[4] + "Win",
                  0,
                  1,
                  "Glow.png"
                )).concat(e)),
                this._glowSprite.animations.add("SYM4_Win", e, 31, !1),
                (e = (e = Phaser.Animation.generateFrameNames(
                  i.SymbolNameMapping[5] + "Win",
                  0,
                  1,
                  "Glow.png"
                )).concat(e)),
                this._glowSprite.animations.add("SYM5_Win", e, 31, !1),
                (e = (e = Phaser.Animation.generateFrameNames(
                  i.SymbolNameMapping[6] + "Win",
                  0,
                  1,
                  "Glow.png"
                )).concat(e)),
                this._glowSprite.animations.add("SYM6_Win", e, 31, !1),
                (e = (e = Phaser.Animation.generateFrameNames(
                  i.SymbolNameMapping[7] + "Win",
                  0,
                  1,
                  "Glow.png"
                )).concat(e)),
                this._glowSprite.animations.add("SYM7_Win", e, 31, !1),
                (e = (e = Phaser.Animation.generateFrameNames(
                  i.SymbolNameMapping[8] + "Win",
                  0,
                  1,
                  "Glow.png"
                )).concat(e)),
                this._glowSprite.animations.add("SYM8_Win", e, 31, !1),
                (e = (e = Phaser.Animation.generateFrameNames(
                  i.SymbolNameMapping[10] + "Win",
                  0,
                  1,
                  "Glow.png"
                )).concat(e)),
                this._glowSprite.animations.add("SYM10_Win", e, 31, !1),
                (e = (e = Phaser.Animation.generateFrameNames(
                  i.SymbolNameMapping[12] + "Win",
                  0,
                  1,
                  "Glow.png"
                )).concat(e)),
                this._glowSprite.animations.add("SYM12_Win", e, 31, !1);
            }
          }),
          (i.prototype.setGlowImage = function (e, t) {
            this._glowLayer = t;
            var i = (this._glowSprite = e);
            (i.v0 = { x: 0, y: 0 }),
              (i.v1 = { x: 0, y: 0 }),
              (i.v2 = { x: 0, y: 0 }),
              (i.v3 = { x: 0, y: 0 }),
              (i.visible = this._baseSprite.visible && !this._glowTurnedOff),
              (i.shouldCrop = !0),
              this.buildGlowAnimations(),
              this.setSymbolId(this._symbolId),
              this.updateSymbolPosition();
          }),
          (i.SymbolNameMapping = [
            "wild",
            "bar",
            "seven",
            "bell",
            "melon",
            "lemon",
            "plum",
            "orange",
            "cherry",
            void 0,
            "scatter",
            "expander",
            "mystery",
            "stickyWild",
          ]),
          i
        );
      })();
      e.Symbol = n;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i;
      !(function (e) {
        (e[(e.IDLE = 0)] = "IDLE"),
          (e[(e.STARTING = 1)] = "STARTING"),
          (e[(e.SPINNING = 2)] = "SPINNING"),
          (e[(e.NEAR_WIN = 3)] = "NEAR_WIN"),
          (e[(e.STOPPING = 4)] = "STOPPING"),
          (e[(e.BOUNCING = 5)] = "BOUNCING"),
          (e[(e.STOPPED = 6)] = "STOPPED");
      })((i = t.SpinState || (t.SpinState = {})));
      var n = (function () {
        function t(t, i) {
          (this._stopped = !1),
            (this._spinState = e.view.SpinState.IDLE),
            (this.onSpinComplete = new tk_common.utils.Signal1()),
            (this.onExpansionComplete = new tk_common.utils.Signal1()),
            (this.onReelExcitementBegins = new tk_common.utils.Signal1()),
            (this.onReelExcitementEnds = new tk_common.utils.Signal1()),
            (this._quickStopped = !1),
            (this._currentSymbolIds = []),
            (this._bigPixelOffsetY = 0),
            (this.stopStripIndex = -1),
            (this._spinSpeed = 0),
            (this._symbols = []),
            (this._game = t),
            (this._reelView = this._game.add.group(i));
        }
        return (
          (t.mapOffsetToReelStripIndex = function (e, t) {
            for (; e < 0; ) e += t;
            for (; e >= t; ) e -= t;
            return e;
          }),
          (t.prototype.isIdle = function () {
            return this._spinState === i.IDLE;
          }),
          Object.defineProperty(t.prototype, "bigPixelOffsetY", {
            get: function () {
              return this._bigPixelOffsetY;
            },
            set: function (e) {
              this._bigPixelOffsetY = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "group", {
            get: function () {
              return this._reelView;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.buildReel = function (e, i) {
            (this.index = e), (this.bigPixelOffsetY = 0);
            var n = t.MGRS[this.index];
            this._currentStrip = n;
            var a = Math.floor(Math.random() * n.length);
            (this.reelStripIndex = a),
              (this.stopStripIndex = this.reelStripIndex),
              (this.stickyWildGroup = this._reelView.game.add.group(
                this._reelView,
                "stickyWildGroup",
                !1,
                !1
              ));
            var o = [7, 3, 8, 7, 8, 3],
              s = [6, 5, 2, 4, 5, 6];
            if (0 === e) {
              for (var r = Math.floor(3 * Math.random()), l = 0; l < 3; l++) {
                var m = i[10 * e + l];
                this._symbols[l] = m;
                var h = this.bigPixelOffsetY + 13 * l;
                m.setSymbolId(o[r]),
                  m.playIdleAnimation(),
                  this.updateSymbolPosition(m, h),
                  (this._currentSymbolIds[l] = o[r]);
              }
              for (l = 3; l < 6; l++) {
                m = i[10 * e + l];
                this._symbols[l] = m;
                h = this.bigPixelOffsetY + 13 * l;
                m.setSymbolId(o[r + 1]),
                  m.playIdleAnimation(),
                  this.updateSymbolPosition(m, h),
                  (this._currentSymbolIds[l] = o[r + 1]);
              }
              for (l = 6; l < 10; l++) {
                m = i[10 * e + l];
                this._symbols[l] = m;
                h = this.bigPixelOffsetY + 13 * l;
                m.setSymbolId(o[r + 2]),
                  m.playIdleAnimation(),
                  this.updateSymbolPosition(m, h),
                  (this._currentSymbolIds[l] = o[r + 2]);
              }
            } else if (1 === e) {
              for (r = Math.floor(3 * Math.random()), l = 0; l < 3; l++) {
                m = i[10 * e + l];
                this._symbols[l] = m;
                h = this.bigPixelOffsetY + 13 * l;
                m.setSymbolId(s[r]),
                  m.playIdleAnimation(),
                  this.updateSymbolPosition(m, h),
                  (this._currentSymbolIds[l] = s[r]);
              }
              for (l = 3; l < 6; l++) {
                m = i[10 * e + l];
                this._symbols[l] = m;
                h = this.bigPixelOffsetY + 13 * l;
                m.setSymbolId(s[r + 1]),
                  m.playIdleAnimation(),
                  this.updateSymbolPosition(m, h),
                  (this._currentSymbolIds[l] = s[r + 1]);
              }
              for (l = 6; l < 10; l++) {
                m = i[10 * e + l];
                this._symbols[l] = m;
                h = this.bigPixelOffsetY + 13 * l;
                m.setSymbolId(s[r + 2]),
                  m.playIdleAnimation(),
                  this.updateSymbolPosition(m, h),
                  (this._currentSymbolIds[l] = s[r + 2]);
              }
            } else
              for (l = 0; l < 10; l++) {
                var p = n[(a + l) % n.length];
                m = i[10 * e + l];
                this._symbols[l] = m;
                h = this.bigPixelOffsetY + 13 * l;
                m.setSymbolId(p),
                  m.playIdleAnimation(),
                  this.updateSymbolPosition(m, h),
                  (this._currentSymbolIds[l] = p);
              }
          }),
          (t.prototype.putSymbolAt = function (e, t) {
            var i = this.getSymbolAt(e);
            i.setSymbolId(t), i.playIdleAnimation();
          }),
          (t.prototype.getSymbolAt = function (e) {
            return this._symbols[e];
          }),
          (t.prototype.startSpin = function (e) {
            var n = this;
            (this._allowQuickStop = !0),
              (this._nearWinTimeExpired = !1),
              (this._mayStartStopProcedure = !1),
              (this._currentStrip = (e ? t.BGRS : t.MGRS)[this.index]),
              (this.stopStripIndex = -1),
              (this._stopStrip = null),
              (this._quickStopped = !1),
              (this._stopped = !1),
              (this._spinState = i.STARTING);
            for (var a = 0; a < 5; a++) {
              var o = this._symbols[a];
              o.playSpinAnimation(), o.updateSymbolPosition();
            }
            var s = this._game.gameTweaker.spinTweaker;
            this._game.scene.glowManager.reorganizeGlowsOnSpinStart(this.index),
              TweenMax.to(this, s.windUpDurationMs / 1e3, {
                _bigPixelOffsetY: s.windUpAmountBP,
                ease: Phaser.Easing.Cubic.InOut,
              }),
              TweenMax.to(this, (70 * s.spinStartDurationMs) / 65e3, {
                _bigPixelOffsetY: 65,
                ease: Phaser.Easing.Cubic.InOut,
                delay: s.windUpDurationMs / 1e3,
                onComplete: function () {
                  return n.handleSpinStartComplete();
                },
              });
          }),
          (t.prototype.previousReelHasStopped = function (e) {
            if (
              ((this._mayStartStopProcedure = !0),
              (this._reelIsExciting = e),
              e && !1 === this._quickStopped)
            ) {
              this.onReelExcitementBegins.dispatch(this);
              var t = this._game.gameTweaker.spinTweaker;
              TweenMax.delayedCall(
                t.nearWinStopDelayMs / 1e3,
                this.handleNearWinStopDelayExpired,
                void 0,
                this
              );
            } else this._nearWinTimeExpired = !0;
          }),
          (t.prototype.handleNearWinStopDelayExpired = function () {
            this._nearWinTimeExpired = !0;
          }),
          (t.prototype.stopSpin = function (e, i, n) {
            (this._reelIsExciting = n.delayStop),
              (this.stopStripIndex = e - 1),
              (this._allowQuickStop = n.allowQuickStop),
              this._reelIsExciting
                ? ((this._mayStartStopProcedure = !1),
                  (this._nearWinTimeExpired = !1))
                : ((this._mayStartStopProcedure = !0),
                  (this._nearWinTimeExpired = !0));
            for (var a = [], o = 0; o < 5; o++)
              a[o] =
                this._currentStrip[
                  t.mapOffsetToReelStripIndex(
                    this.stopStripIndex + o,
                    this._currentStrip.length
                  )
                ];
            for (var s = 1; s < 4; s++)
              a[s] = this.initialSymbols[s - 1 + 3 * this.index];
            (this._stopStrip = a),
              this._quickStopped && !0 === this._allowQuickStop
                ? this.handleStopTimerComplete()
                : ((this._stopDelayTimer = this._game.time.create(!0)),
                  this._stopDelayTimer.add(
                    i,
                    this.handleStopTimerComplete,
                    this
                  ),
                  this._stopDelayTimer.start());
          }),
          (t.prototype.handleSpinStartComplete = function () {
            this.updateReel_Spinning(0),
              this.setSpinSpeed(),
              (this._spinState = i.SPINNING);
          }),
          (t.prototype.handleSpinComplete = function () {
            var t, i;
            for (
              this._game.tweens.removeFrom(this),
                (!1 !== this._quickStopped && 4 !== this.index) ||
                  this._game.soundSystem.playSoundWithUniqueID(
                    e.SoundIds.AS_SpinStop,
                    1
                  ),
                this._bigPixelOffsetY = 1,
                i = 0;
              i < 10;
              i++
            )
              (n = this._symbols[i]),
                (t = this._currentStrip[(i + 5) % 10]),
                n.setSymbolId(t),
                n.playIdleAnimation(),
                this._game.scene.glowManager.reorganizeGlowsOnSpinEnd(
                  this.index
                ),
                i < 5 && n.kill(),
                (this._currentSymbolIds[i] = t);
            for (this._bigPixelOffsetY = 1, i = 0; i < 10; i++) {
              var n = this._symbols[i];
              this.updateSymbolPosition(n, this._bigPixelOffsetY + 13 * i);
            }
            this.startBounce(), this.onSpinComplete.dispatch(this);
          }),
          (t.prototype.handleStopTimerComplete = function () {
            (this._stopped = !0),
              void 0 !== this._stopDelayTimer &&
                (this._stopDelayTimer.stop(!0),
                (this._stopDelayTimer = void 0));
          }),
          (t.prototype.updateReel_Starting = function () {
            for (var e = 0; e < this._symbols.length; e++)
              this.updateSymbolPosition(
                this._symbols[e],
                this._bigPixelOffsetY + 13 * e
              );
          }),
          (t.prototype.updateReel_Spinning = function (e) {
            if (
              ((this._bigPixelOffsetY += (this._spinSpeed * e) / 1e3),
              this._bigPixelOffsetY >= 65)
            )
              this.handleReelWrapAround();
            else
              for (var t = 0; t < this._symbols.length; t++)
                this.updateSymbolPosition(
                  this._symbols[t],
                  this._bigPixelOffsetY + 13 * t
                );
          }),
          (t.prototype.handleReelWrapAround = function () {
            var e = Math.floor(this._bigPixelOffsetY / 65);
            for (
              this._bigPixelOffsetY %= 65, this.reelStripIndex -= 5 * e;
              this.reelStripIndex < 0;

            )
              this.reelStripIndex =
                this._currentStrip.length + this.reelStripIndex;
            !0 === this._stopped &&
            this._mayStartStopProcedure &&
            this._nearWinTimeExpired
              ? this.prepareReelForStopping()
              : this.updateSymbolsOnWrapAround();
          }),
          (t.prototype.updateWhenSpinning = function (e) {
            this._spinState === i.STARTING
              ? this.updateReel_Starting()
              : this._spinState === i.SPINNING
              ? this.updateReel_Spinning(e)
              : this._spinState === i.STOPPING
              ? this.updateSymbolsWhenStopping()
              : this._spinState === i.NEAR_WIN
              ? this.updateReel_Spinning(e)
              : this._spinState === i.BOUNCING &&
                this.updateSymbolsWhenStopping();
          }),
          (t.prototype.playExpansionAnimation = function (e, t) {
            this.expansionFrame.onAnimationComplete.addOnce(
              this.handleExpansionComplete,
              this
            ),
              this.expansionFrame.playExpansionAnimation(e, t);
          }),
          (t.prototype.handleExpansionComplete = function () {
            this.onExpansionComplete.dispatch(this);
          }),
          (t.prototype.quickStop = function () {
            this._allowQuickStop &&
              ((this._quickStopped = !0),
              (this._mayStartStopProcedure = !0),
              (this._nearWinTimeExpired = !0),
              this.handleStopTimerComplete(),
              this._spinState === i.STARTING
                ? (TweenMax.killTweensOf(this),
                  (this._bigPixelOffsetY = 65),
                  this.handleSpinStartComplete())
                : this._spinState === i.SPINNING ||
                  (this._spinState === i.NEAR_WIN
                    ? TweenMax.killDelayedCallsTo(
                        this.handleNearWinStopDelayExpired
                      )
                    : this._spinState === i.STOPPING
                    ? (TweenMax.killTweensOf(this),
                      (this._bigPixelOffsetY = 65.2),
                      this.handleSpinComplete())
                    : (this._spinState, i.BOUNCING)));
          }),
          (t.prototype.updateSymbolPosition = function (e, t) {
            e.updateSymbolPosition(t);
          }),
          (t.prototype.prepareReelForStopping = function () {
            var e,
              t,
              n = this;
            (this._spinState = i.STOPPING), (this._spinSpeed = 0);
            for (var a = 5; a < 10; a++)
              this._stopStrip[a] = this._currentSymbolIds[a - 5];
            this._currentStrip = this._stopStrip;
            for (var o = 0; o < 10; o++)
              (e = this._symbols[o]),
                (t = this._currentStrip[o]),
                e.setSymbolId(t),
                this.updateSymbolPosition(
                  this._symbols[o],
                  this._bigPixelOffsetY + 13 * o
                ),
                (this._currentSymbolIds[o] = t);
            var s = this._game.gameTweaker.spinTweaker,
              r =
                this._quickStopped && this._allowQuickStop
                  ? s.stopDurationQuickStopMs
                  : s.stopDurationMs;
            TweenMax.to(this, r / 1e3, {
              _bigPixelOffsetY: 65 + s.bounceAmountBP,
              onComplete: function () {
                return n.handleSpinComplete();
              },
            });
          }),
          (t.prototype.startBounce = function () {
            var e = this;
            this._spinState = i.BOUNCING;
            var t = this._game.gameTweaker.spinTweaker;
            TweenMax.to(this, t.bounceDurationMs / 1e3, {
              _bigPixelOffsetY: 0,
              onComplete: function () {
                return e.handleBounceComplete();
              },
            });
          }),
          (t.prototype.handleBounceComplete = function () {
            this._spinState = i.IDLE;
          }),
          (t.prototype.updateSymbolsOnWrapAround = function () {
            for (var e = 0; e < 10; e++) {
              var t = this._symbols[e],
                i =
                  this._currentStrip[
                    (this.reelStripIndex + e) % this._currentStrip.length
                  ];
              t.setSymbolId(i),
                t.playSpinAnimation(),
                this.updateSymbolPosition(
                  this._symbols[e],
                  this._bigPixelOffsetY + 13 * e
                ),
                (this._currentSymbolIds[e] = i);
            }
          }),
          (t.prototype.updateSymbolsWhenStopping = function () {
            for (var e = 0; e < this._symbols.length; e++) {
              var t = this._symbols[e];
              this.updateSymbolPosition(t, this._bigPixelOffsetY + 13 * e);
            }
          }),
          (t.prototype.setSpinSpeed = function () {
            this._spinSpeed = this._game.gameTweaker.spinTweaker.spinSpeedBPS;
          }),
          (t.prototype.recoverFromError = function (e) {
            var t, n;
            for (
              this.handleStopTimerComplete(),
                TweenMax.killTweensOf(this),
                TweenMax.killDelayedCallsTo(this.handleNearWinStopDelayExpired),
                this._bigPixelOffsetY = 1,
                n = 9;
              n >= 0;
              n--
            )
              (a = this._symbols[n]),
                (t = e[10 * this.index + n]),
                a.setSymbolId(t),
                a.playIdleAnimation(),
                this._game.scene.glowManager.reorganizeGlowsOnSpinEnd(
                  this.index
                ),
                n < 5 && a.kill(),
                (this._currentSymbolIds[n] = t);
            for (n = 0; n < 10; n++) {
              var a = this._symbols[n];
              this.updateSymbolPosition(a, this._bigPixelOffsetY + 13 * n);
            }
            this._spinState = i.IDLE;
          }),
          (t.MGRS = [
            [
              7, 7, 7, 5, 5, 5, 6, 6, 6, 1, 1, 1, 4, 4, 4, 7, 7, 7, 8, 8, 8, 10,
              6, 6, 6, 4, 4, 4, 7, 7, 7, 5, 5, 5, 8, 8, 8, 4, 4, 4, 12, 7, 7, 7,
              8, 8, 8, 6, 6, 6, 5, 5, 5, 6, 6, 6, 10, 7, 7, 7, 8, 8, 8, 2, 2, 2,
              3, 3, 3, 4, 4, 4, 7, 7, 7, 6, 6, 6, 10, 5, 5, 5, 8, 8, 8, 4, 4, 4,
              7, 7, 7, 12, 4, 4, 4, 6, 6, 6, 5, 5, 5, 7, 7, 7, 8, 8, 8, 6, 6, 6,
              5, 5, 5, 10, 7, 7, 7, 8, 8, 8, 5, 5, 5, 7, 7, 7, 3, 3, 3, 6, 6, 6,
              2, 2, 2, 12, 8, 8, 8, 6, 6, 6, 4, 4, 4, 10, 7, 7, 7, 6, 6, 6, 5,
              5, 5, 7, 7, 7, 3, 3, 3, 8, 8, 8, 7, 7, 7, 6, 6, 6, 5, 5, 5, 4, 4,
              4, 7, 7, 7, 5, 5, 5, 8, 8, 8, 6, 6, 6, 7, 7, 7, 12, 8, 8, 8, 6, 6,
              6, 3, 3, 3, 6, 6, 6, 2, 2, 2, 5, 5, 5, 12, 5, 5, 5, 8, 8, 8, 6, 6,
              6, 7, 7, 7, 10, 3, 3, 3, 7, 7, 7, 8, 8, 8, 12, 3, 3, 3, 5, 5, 5,
              1, 1, 1, 7, 7, 7, 8, 8, 8, 6, 6, 6, 10, 2, 2, 2, 7, 7, 7, 3, 3, 3,
              12, 7, 7, 7, 10, 8, 8, 8, 5, 5, 5, 6, 6, 6, 4, 4, 4, 2, 2, 2, 5,
              5, 5, 12, 6, 6, 6, 10, 8, 8, 8, 6, 6, 6, 12, 4, 4, 4, 5, 5, 5, 4,
              4, 4, 3, 3, 3, 6, 6, 6, 10, 8, 8, 8, 1, 1, 1, 3, 3, 3, 6, 6, 6, 5,
              5, 5, 8, 8, 8, 10, 6, 6, 6, 2, 2, 2, 7, 7, 7, 5, 5, 5, 12, 3, 3,
              3, 10, 1, 1, 1, 8, 8, 8, 4, 4, 4, 12, 3, 3, 3, 5, 5, 5, 8, 8, 8,
              7, 7, 7, 6, 6, 6, 4, 4, 4, 10, 5, 5, 5, 6, 6, 6, 4, 4, 4, 10, 6,
              6, 6, 7, 7, 7, 6, 6, 6, 12, 2, 2, 2, 8, 8, 8, 7, 7, 7, 6, 6, 6, 7,
              7, 7, 10, 7, 7, 7, 5, 5, 5, 10, 6, 6, 6, 8, 8, 8, 5, 5, 5, 8, 8,
              8, 1, 1, 1, 10, 5, 5, 5, 8, 8, 8, 7, 7, 7, 5, 5, 5, 4, 4, 4, 3, 3,
              3, 10, 1, 1, 1, 8, 8, 8, 3, 3, 3, 6, 6, 6, 12, 5, 5, 5, 4, 4, 4,
              8, 8, 8, 3, 3, 3, 12, 2, 2, 2, 5, 5, 5, 8, 8, 8, 7, 7, 7, 6, 6, 6,
              4, 4, 4, 5, 5, 5, 4, 4, 4, 8, 8, 8, 12, 4, 4, 4, 10, 7, 7, 7, 12,
              4, 4, 4, 6, 6, 6, 5, 5, 5, 10, 4, 4, 4, 7, 7, 7, 8, 8, 8, 5, 5, 5,
              7, 7, 7, 2, 2, 2, 7, 7, 7, 8, 8, 8, 4, 4, 4, 8, 8, 8, 6, 6, 6, 12,
              5, 5, 5, 6, 6, 6, 3, 3, 3, 2, 2, 2, 4, 4, 4, 5, 5, 5, 6, 6, 6, 4,
              4, 4, 12, 3, 3, 3, 2, 2, 2, 6, 6, 6, 8, 8, 8, 5, 5, 5, 12, 3, 3,
              3, 5, 5, 5, 2, 2, 2, 10, 8, 8, 8, 5, 5, 5, 2, 2, 2, 8, 8, 8, 10,
              7, 7, 7, 1, 1, 1, 4, 4, 4, 3, 3, 3, 7, 7, 7, 4, 4, 4, 3, 3, 3, 8,
              8, 8, 3, 3, 3, 12, 3, 3, 3, 2, 2, 2, 12, 1, 1, 1, 8, 8, 8, 12, 7,
              7, 7, 6, 6, 6, 5, 5, 5,
            ],
            [
              7, 7, 7, 5, 5, 5, 6, 6, 6, 1, 1, 1, 11, 4, 4, 4, 7, 7, 7, 10, 8,
              8, 8, 6, 6, 6, 12, 4, 4, 4, 7, 7, 7, 5, 5, 5, 11, 8, 8, 8, 0, 0,
              0, 4, 4, 4, 7, 7, 7, 8, 8, 8, 6, 6, 6, 5, 5, 5, 6, 6, 6, 7, 7, 7,
              0, 0, 0, 8, 8, 8, 11, 2, 2, 2, 3, 3, 3, 7, 7, 7, 4, 4, 4, 6, 6, 6,
              0, 0, 0, 5, 5, 5, 8, 8, 8, 4, 4, 4, 7, 7, 7, 4, 4, 4, 6, 6, 6, 8,
              8, 8, 7, 7, 7, 0, 0, 0, 5, 5, 5, 6, 6, 6, 8, 8, 8, 10, 7, 7, 7, 8,
              8, 8, 11, 5, 5, 5, 3, 3, 3, 6, 6, 6, 0, 0, 0, 2, 2, 2, 12, 8, 8,
              8, 7, 7, 7, 0, 0, 0, 6, 6, 6, 11, 4, 4, 4, 0, 0, 0, 8, 8, 8, 10,
              7, 7, 7, 11, 6, 6, 6, 7, 7, 7, 5, 5, 5, 0, 0, 0, 7, 7, 7, 3, 3, 3,
              0, 0, 0, 8, 8, 8, 7, 7, 7, 11, 6, 6, 6, 8, 8, 8, 5, 5, 5, 4, 4, 4,
              7, 7, 7, 5, 5, 5, 6, 6, 6, 12, 8, 8, 8, 6, 6, 6, 0, 0, 0, 8, 8, 8,
              6, 6, 6, 0, 0, 0, 8, 8, 8, 5, 5, 5, 4, 4, 4, 5, 5, 5, 0, 0, 0, 6,
              6, 6, 11, 2, 2, 2, 0, 0, 0, 7, 7, 7, 10, 3, 3, 3, 7, 7, 7, 0, 0,
              0, 8, 8, 8, 12, 3, 3, 3, 0, 0, 0, 5, 5, 5, 1, 1, 1, 7, 7, 7, 11,
              8, 8, 8, 0, 0, 0, 6, 6, 6, 10, 2, 2, 2, 0, 0, 0, 8, 8, 8, 7, 7, 7,
              3, 3, 3, 0, 0, 0, 8, 8, 8, 12, 7, 7, 7, 10, 8, 8, 8, 5, 5, 5, 6,
              6, 6, 0, 0, 0, 8, 8, 8, 6, 6, 6, 4, 4, 4, 0, 0, 0, 2, 2, 2, 5, 5,
              5, 12, 6, 6, 6, 10, 8, 8, 8, 6, 6, 6, 12, 4, 4, 4, 5, 5, 5, 0, 0,
              0, 8, 8, 8, 4, 4, 4, 0, 0, 0, 3, 3, 3, 6, 6, 6, 10, 2, 2, 2, 0, 0,
              0, 3, 3, 3, 11, 6, 6, 6, 5, 5, 5, 0, 0, 0, 6, 6, 6, 8, 8, 8, 0, 0,
              0, 2, 2, 2, 11, 7, 7, 7, 0, 0, 0, 5, 5, 5, 12, 3, 3, 3, 0, 0, 0,
              4, 4, 4, 3, 3, 3, 5, 5, 5, 0, 0, 0, 7, 7, 7, 6, 6, 6, 4, 4, 4, 10,
              5, 5, 5, 0, 0, 0, 6, 6, 6, 4, 4, 4, 10, 6, 6, 6, 0, 0, 0, 6, 6, 6,
              12, 2, 2, 2, 8, 8, 8, 11, 7, 7, 7, 0, 0, 0, 6, 6, 6, 7, 7, 7, 12,
              3, 3, 3, 4, 4, 4, 12, 7, 7, 7, 0, 0, 0, 5, 5, 5, 10, 3, 3, 3, 0,
              0, 0, 6, 6, 6, 11, 8, 8, 8, 0, 0, 0, 5, 5, 5, 8, 8, 8, 10, 5, 5,
              5, 7, 7, 7, 0, 0, 0, 5, 5, 5, 4, 4, 4, 11, 3, 3, 3, 10, 1, 1, 1,
              3, 3, 3, 0, 0, 0, 6, 6, 6, 12, 5, 5, 5, 0, 0, 0, 4, 4, 4, 11, 4,
              4, 4, 3, 3, 3, 12, 2, 2, 2, 5, 5, 5, 7, 7, 7, 6, 6, 6, 4, 4, 4, 0,
              0, 0, 4, 4, 4, 11, 8, 8, 8, 12, 4, 4, 4, 10, 7, 7, 7, 12, 4, 4, 4,
              0, 0, 0, 5, 5, 5, 10, 4, 4, 4, 0, 0, 0, 5, 5, 5, 11, 7, 7, 7, 8,
              8, 8, 5, 5, 5, 7, 7, 7, 7, 7, 7, 8, 8, 8, 4, 4, 4, 8, 8, 8, 6, 6,
              6, 12, 5, 5, 5, 6, 6, 6, 3, 3, 3, 2, 2, 2, 4, 4, 4, 0, 0, 0, 5, 5,
              5, 6, 6, 6, 4, 4, 4, 12, 3, 3, 3, 0, 0, 0, 2, 2, 2, 6, 6, 6, 11,
              8, 8, 8, 5, 5, 5, 12, 3, 3, 3, 5, 5, 5, 11, 2, 2, 2, 10, 8, 8, 8,
              0, 0, 0, 8, 8, 8, 10, 7, 7, 7, 11, 7, 7, 7, 4, 4, 4, 11, 3, 3, 3,
              3, 3, 3, 12, 3, 3, 3, 2, 2, 2, 12, 8, 8, 8, 12, 7, 7, 7, 6, 6, 6,
              5, 5, 5,
            ],
            [
              7, 7, 7, 5, 5, 5, 6, 6, 6, 4, 4, 4, 0, 0, 0, 7, 7, 7, 8, 8, 8, 12,
              6, 6, 6, 2, 2, 2, 4, 4, 4, 7, 7, 7, 11, 5, 5, 5, 0, 0, 0, 8, 8, 8,
              4, 4, 4, 7, 7, 7, 8, 8, 8, 0, 0, 0, 6, 6, 6, 5, 5, 5, 6, 6, 6, 12,
              7, 7, 7, 8, 8, 8, 0, 0, 0, 2, 2, 2, 11, 3, 3, 3, 7, 7, 7, 4, 4, 4,
              6, 6, 6, 5, 5, 5, 8, 8, 8, 1, 1, 1, 4, 4, 4, 7, 7, 7, 0, 0, 0, 4,
              4, 4, 8, 8, 8, 4, 4, 4, 5, 5, 5, 7, 7, 7, 8, 8, 8, 7, 7, 7, 8, 8,
              8, 11, 7, 7, 7, 3, 3, 3, 6, 6, 6, 7, 7, 7, 8, 8, 8, 7, 7, 7, 3, 3,
              3, 4, 4, 4, 0, 0, 0, 6, 6, 6, 10, 7, 7, 7, 11, 6, 6, 6, 7, 7, 7,
              0, 0, 0, 7, 7, 7, 3, 3, 3, 8, 8, 8, 7, 7, 7, 6, 6, 6, 5, 5, 5, 0,
              0, 0, 8, 8, 8, 4, 4, 4, 11, 7, 7, 7, 5, 5, 5, 6, 6, 6, 12, 8, 8,
              8, 6, 6, 6, 8, 8, 8, 6, 6, 6, 0, 0, 0, 2, 2, 2, 11, 5, 5, 5, 12,
              5, 5, 5, 0, 0, 0, 6, 6, 6, 7, 7, 7, 10, 3, 3, 3, 7, 7, 7, 8, 8, 8,
              3, 3, 3, 5, 5, 5, 1, 1, 1, 7, 7, 7, 8, 8, 8, 6, 6, 6, 10, 2, 2, 2,
              11, 7, 7, 7, 0, 0, 0, 3, 3, 3, 12, 7, 7, 7, 8, 8, 8, 0, 0, 0, 5,
              5, 5, 11, 6, 6, 6, 0, 0, 0, 4, 4, 4, 2, 2, 2, 5, 5, 5, 12, 6, 6,
              6, 10, 8, 8, 8, 6, 6, 6, 8, 8, 8, 4, 4, 4, 11, 6, 6, 6, 0, 0, 0,
              5, 5, 5, 4, 4, 4, 3, 3, 3, 8, 8, 8, 6, 6, 6, 10, 1, 1, 1, 3, 3, 3,
              12, 6, 6, 6, 5, 5, 5, 11, 6, 6, 6, 2, 2, 2, 0, 0, 0, 8, 8, 8, 7,
              7, 7, 0, 0, 0, 5, 5, 5, 12, 3, 3, 3, 4, 4, 4, 3, 3, 3, 5, 5, 5, 7,
              7, 7, 6, 6, 6, 4, 4, 4, 10, 5, 5, 5, 8, 8, 8, 6, 6, 6, 4, 4, 4,
              10, 6, 6, 6, 7, 7, 7, 6, 6, 6, 12, 2, 2, 2, 8, 8, 8, 11, 7, 7, 7,
              6, 6, 6, 7, 7, 7, 12, 1, 1, 1, 2, 2, 2, 1, 1, 1, 10, 3, 3, 3, 4,
              4, 4, 12, 7, 7, 7, 5, 5, 5, 10, 6, 6, 6, 11, 8, 8, 8, 0, 0, 0, 5,
              5, 5, 8, 8, 8, 10, 5, 5, 5, 7, 7, 7, 5, 5, 5, 4, 4, 4, 3, 3, 3,
              10, 3, 3, 3, 6, 6, 6, 12, 5, 5, 5, 4, 4, 4, 3, 3, 3, 12, 2, 2, 2,
              5, 5, 5, 7, 7, 7, 6, 6, 6, 11, 4, 4, 4, 1, 1, 1, 4, 4, 4, 8, 8, 8,
              12, 4, 4, 4, 10, 7, 7, 7, 12, 4, 4, 4, 5, 5, 5, 10, 4, 4, 4, 0, 0,
              0, 8, 8, 8, 11, 7, 7, 7, 8, 8, 8, 5, 5, 5, 7, 7, 7, 6, 6, 6, 7, 7,
              7, 8, 8, 8, 4, 4, 4, 8, 8, 8, 6, 6, 6, 12, 5, 5, 5, 6, 6, 6, 3, 3,
              3, 2, 2, 2, 4, 4, 4, 5, 5, 5, 11, 6, 6, 6, 4, 4, 4, 12, 3, 3, 3,
              2, 2, 2, 6, 6, 6, 8, 8, 8, 5, 5, 5, 12, 3, 3, 3, 5, 5, 5, 11, 2,
              2, 2, 10, 8, 8, 8, 0, 0, 0, 8, 8, 8, 10, 7, 7, 7, 4, 4, 4, 3, 3,
              3, 7, 7, 7, 6, 6, 6, 7, 7, 7, 3, 3, 3, 12, 3, 3, 3, 2, 2, 2, 12,
              8, 8, 8, 12, 7, 7, 7, 6, 6, 6, 5, 5, 5,
            ],
            [
              7, 7, 7, 5, 5, 5, 11, 6, 6, 6, 1, 1, 1, 4, 4, 4, 7, 7, 7, 8, 8, 8,
              12, 2, 2, 2, 4, 4, 4, 11, 7, 7, 7, 5, 5, 5, 8, 8, 8, 4, 4, 4, 7,
              7, 7, 8, 8, 8, 6, 6, 6, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 2, 2,
              2, 11, 3, 3, 3, 0, 0, 0, 4, 4, 4, 10, 3, 3, 3, 8, 8, 8, 1, 1, 1,
              11, 4, 4, 4, 0, 0, 0, 7, 7, 7, 4, 4, 4, 12, 2, 2, 2, 5, 5, 5, 2,
              2, 2, 8, 8, 8, 10, 7, 7, 7, 8, 8, 8, 11, 5, 5, 5, 3, 3, 3, 5, 5,
              5, 0, 0, 0, 2, 2, 2, 5, 5, 5, 8, 8, 8, 4, 4, 4, 0, 0, 0, 7, 7, 7,
              1, 1, 1, 7, 7, 7, 10, 3, 3, 3, 8, 8, 8, 2, 2, 2, 0, 0, 0, 4, 4, 4,
              11, 2, 2, 2, 12, 8, 8, 8, 7, 7, 7, 0, 0, 0, 5, 5, 5, 2, 2, 2, 5,
              5, 5, 7, 7, 7, 6, 6, 6, 3, 3, 3, 5, 5, 5, 11, 3, 3, 3, 2, 2, 2, 7,
              7, 7, 10, 3, 3, 3, 7, 7, 7, 0, 0, 0, 8, 8, 8, 12, 3, 3, 3, 5, 5,
              5, 1, 1, 1, 7, 7, 7, 8, 8, 8, 3, 3, 3, 10, 2, 2, 2, 11, 7, 7, 7,
              3, 3, 3, 12, 7, 7, 7, 10, 8, 8, 8, 0, 0, 0, 5, 5, 5, 11, 6, 6, 6,
              4, 4, 4, 2, 2, 2, 5, 5, 5, 12, 6, 6, 6, 8, 8, 8, 6, 6, 6, 4, 4, 4,
              5, 5, 5, 4, 4, 4, 3, 3, 3, 6, 6, 6, 10, 3, 3, 3, 0, 0, 0, 6, 6, 6,
              5, 5, 5, 6, 6, 6, 11, 2, 2, 2, 7, 7, 7, 0, 0, 0, 5, 5, 5, 12, 3,
              3, 3, 1, 1, 1, 4, 4, 4, 3, 3, 3, 0, 0, 0, 5, 5, 5, 7, 7, 7, 6, 6,
              6, 4, 4, 4, 10, 5, 5, 5, 6, 6, 6, 4, 4, 4, 10, 6, 6, 6, 8, 8, 8,
              6, 6, 6, 0, 0, 0, 2, 2, 2, 1, 1, 1, 8, 8, 8, 7, 7, 7, 6, 6, 6, 7,
              7, 7, 12, 7, 7, 7, 8, 8, 8, 10, 4, 4, 4, 5, 5, 5, 12, 7, 7, 7, 5,
              5, 5, 10, 6, 6, 6, 11, 8, 8, 8, 5, 5, 5, 8, 8, 8, 10, 5, 5, 5, 7,
              7, 7, 5, 5, 5, 4, 4, 4, 3, 3, 3, 10, 1, 1, 1, 3, 3, 3, 6, 6, 6,
              12, 5, 5, 5, 4, 4, 4, 11, 4, 4, 4, 0, 0, 0, 3, 3, 3, 12, 2, 2, 2,
              5, 5, 5, 7, 7, 7, 6, 6, 6, 4, 4, 4, 7, 7, 7, 4, 4, 4, 11, 8, 8, 8,
              12, 4, 4, 4, 10, 7, 7, 7, 12, 4, 4, 4, 5, 5, 5, 10, 4, 4, 4, 0, 0,
              0, 7, 7, 7, 8, 8, 8, 5, 5, 5, 7, 7, 7, 11, 7, 7, 7, 8, 8, 8, 4, 4,
              4, 8, 8, 8, 6, 6, 6, 12, 5, 5, 5, 6, 6, 6, 3, 3, 3, 2, 2, 2, 4, 4,
              4, 5, 5, 5, 11, 6, 6, 6, 4, 4, 4, 12, 3, 3, 3, 2, 2, 2, 6, 6, 6,
              8, 8, 8, 5, 5, 5, 12, 3, 3, 3, 5, 5, 5, 11, 2, 2, 2, 10, 8, 8, 8,
              0, 0, 0, 8, 8, 8, 10, 7, 7, 7, 6, 6, 6, 5, 5, 5, 6, 6, 6, 7, 7, 7,
              4, 4, 4, 11, 3, 3, 3, 8, 8, 8, 3, 3, 3, 12, 3, 3, 3, 2, 2, 2, 12,
              1, 1, 1, 8, 8, 8, 12, 7, 7, 7, 6, 6, 6, 5, 5, 5,
            ],
            [
              7, 7, 7, 5, 5, 5, 6, 6, 6, 1, 1, 1, 4, 4, 4, 7, 7, 7, 8, 8, 8, 12,
              2, 2, 2, 4, 4, 4, 7, 7, 7, 5, 5, 5, 8, 8, 8, 4, 4, 4, 7, 7, 7, 8,
              8, 8, 6, 6, 6, 10, 5, 5, 5, 6, 6, 6, 3, 3, 3, 12, 8, 8, 8, 2, 2,
              2, 7, 7, 7, 4, 4, 4, 6, 6, 6, 10, 5, 5, 5, 1, 1, 1, 4, 4, 4, 7, 7,
              7, 4, 4, 4, 6, 6, 6, 1, 1, 1, 6, 6, 6, 7, 7, 7, 10, 7, 7, 7, 10,
              8, 8, 8, 2, 2, 2, 3, 3, 3, 6, 6, 6, 2, 2, 2, 12, 4, 4, 4, 8, 8, 8,
              7, 7, 7, 10, 7, 7, 7, 6, 6, 6, 1, 1, 1, 7, 7, 7, 3, 3, 3, 8, 8, 8,
              6, 6, 6, 10, 4, 4, 4, 6, 6, 6, 12, 8, 8, 8, 6, 6, 6, 3, 3, 3, 2,
              2, 2, 6, 6, 6, 2, 2, 2, 7, 7, 7, 10, 3, 3, 3, 2, 2, 2, 7, 7, 7, 8,
              8, 8, 12, 3, 3, 3, 5, 5, 5, 10, 1, 1, 1, 7, 7, 7, 8, 8, 8, 6, 6,
              6, 10, 2, 2, 2, 7, 7, 7, 3, 3, 3, 12, 7, 7, 7, 10, 8, 8, 8, 5, 5,
              5, 6, 6, 6, 4, 4, 4, 2, 2, 2, 5, 5, 5, 6, 6, 6, 10, 8, 8, 8, 6, 6,
              6, 12, 4, 4, 4, 5, 5, 5, 4, 4, 4, 3, 3, 3, 6, 6, 6, 10, 1, 1, 1,
              3, 3, 3, 10, 6, 6, 6, 5, 5, 5, 6, 6, 6, 2, 2, 2, 7, 7, 7, 5, 5, 5,
              12, 3, 3, 3, 10, 1, 1, 1, 4, 4, 4, 3, 3, 3, 5, 5, 5, 7, 7, 7, 6,
              6, 6, 4, 4, 4, 10, 5, 5, 5, 6, 6, 6, 4, 4, 4, 10, 6, 6, 6, 7, 7,
              7, 6, 6, 6, 12, 2, 2, 2, 1, 1, 1, 8, 8, 8, 7, 7, 7, 6, 6, 6, 7, 7,
              7, 12, 4, 4, 4, 5, 5, 5, 3, 3, 3, 10, 6, 6, 6, 7, 7, 7, 8, 8, 8,
              12, 7, 7, 7, 5, 5, 5, 10, 6, 6, 6, 8, 8, 8, 5, 5, 5, 8, 8, 8, 1,
              1, 1, 10, 5, 5, 5, 7, 7, 7, 5, 5, 5, 4, 4, 4, 3, 3, 3, 10, 1, 1,
              1, 3, 3, 3, 6, 6, 6, 12, 5, 5, 5, 4, 4, 4, 2, 2, 2, 4, 4, 4, 3, 3,
              3, 12, 2, 2, 2, 5, 5, 5, 7, 7, 7, 6, 6, 6, 4, 4, 4, 8, 8, 8, 4, 4,
              4, 8, 8, 8, 12, 4, 4, 4, 10, 7, 7, 7, 12, 4, 4, 4, 5, 5, 5, 10, 4,
              4, 4, 7, 7, 7, 8, 8, 8, 5, 5, 5, 7, 7, 7, 3, 3, 3, 7, 7, 7, 8, 8,
              8, 4, 4, 4, 8, 8, 8, 6, 6, 6, 12, 5, 5, 5, 6, 6, 6, 3, 3, 3, 2, 2,
              2, 4, 4, 4, 5, 5, 5, 6, 6, 6, 4, 4, 4, 12, 3, 3, 3, 2, 2, 2, 6, 6,
              6, 8, 8, 8, 5, 5, 5, 12, 3, 3, 3, 5, 5, 5, 2, 2, 2, 10, 8, 8, 8,
              2, 2, 2, 8, 8, 8, 10, 7, 7, 7, 7, 4, 4, 4, 7, 7, 4, 4, 4, 3, 3, 3,
              7, 7, 7, 3, 3, 3, 12, 3, 3, 3, 2, 2, 2, 12, 1, 1, 1, 8, 8, 8, 12,
              7, 7, 7, 6, 6, 6, 5, 5, 5,
            ],
          ]),
          (t.BGRS = [
            [
              6, 6, 6, 2, 2, 2, 4, 4, 4, 5, 5, 5, 3, 3, 3, 1, 1, 1, 8, 8, 8, 3,
              3, 3, 6, 6, 6, 8, 8, 8, 1, 1, 1, 3, 3, 3, 2, 2, 2, 7, 7, 7, 4, 4,
              4, 6, 6, 6, 2, 2, 2, 4, 4, 4, 8, 8, 8, 3, 3, 3, 6, 6, 6, 7, 7, 7,
              8, 8, 8, 6, 6, 6, 7, 7, 7, 8, 8, 8, 4, 4, 4, 2, 2, 2, 4, 4, 4, 6,
              6, 6, 2, 2, 2, 7, 7, 7, 8, 8, 8, 4, 4, 4, 5, 5, 5, 6, 6, 6, 8, 8,
              8, 3, 3, 3, 1, 1, 1, 3, 3, 3, 2, 2, 2, 7, 7, 7, 7, 7, 7, 8, 8, 8,
              4, 4, 4, 6, 6, 6, 5, 5, 5, 2, 2, 2, 4, 4, 4, 3, 3, 3, 4, 4, 4, 7,
              7, 7, 4, 4, 4, 6, 6, 6, 2, 2, 2, 1, 1, 1, 4, 4, 4, 8, 8, 8, 3, 3,
              3, 1, 1, 1, 3, 3, 3, 2, 2, 2, 4, 4, 4, 7, 7, 7, 1, 1, 1, 6, 6, 6,
              5, 5, 5, 2, 2, 2, 4, 4, 4, 3, 3, 3, 4, 4, 4, 7, 7, 7, 8, 8, 8, 4,
              4, 4, 5, 5, 5, 6, 6, 6, 4, 4, 4,
            ],
            [
              6, 6, 6, 8, 8, 8, 1, 1, 1, 4, 4, 4, 8, 8, 8, 3, 3, 3, 1, 1, 1, 6,
              6, 6, 3, 3, 3, 2, 2, 2, 7, 7, 7, 2, 2, 2, 6, 6, 6, 1, 1, 1, 4, 4,
              4, 2, 2, 2, 3, 3, 3, 5, 5, 5, 8, 8, 8, 6, 6, 6, 7, 7, 7, 8, 8, 8,
              6, 6, 6, 7, 7, 7, 8, 8, 8, 4, 4, 4, 3, 3, 3, 4, 4, 4, 6, 6, 6, 1,
              1, 1, 7, 7, 7, 8, 8, 8, 5, 5, 5, 3, 3, 3, 7, 7, 7, 4, 4, 4, 7, 7,
              7, 4, 4, 4, 7, 7, 7, 3, 3, 3, 6, 6, 6, 3, 3, 3, 2, 2, 2, 7, 7, 7,
              8, 8, 8, 2, 2, 2, 7, 7, 7, 2, 2, 2, 6, 6, 6, 4, 4, 4, 2, 2, 2, 8,
              8, 8, 7, 7, 7, 3, 3, 3, 5, 5, 5, 4, 4, 4, 1, 1, 1, 3, 3, 3, 4, 4,
              4, 6, 6, 6, 4, 4, 4, 6, 6, 6, 7, 7, 7, 8, 8, 8, 6, 6, 6, 7, 7, 7,
              8, 8, 8, 3, 3, 3, 4, 4, 4, 8, 8, 8, 4, 4, 4, 3, 3, 3, 1, 1, 1, 3,
              3, 3, 2, 2, 2, 5, 5, 5, 7, 7, 7, 6, 6, 6, 1, 1, 1, 2, 2, 2, 5, 5,
              5, 7, 7, 7, 2, 2, 2, 6, 6, 6, 1, 1, 1, 4, 4, 4, 2, 2, 2, 7, 7, 7,
              3, 3, 3, 5, 5, 5, 8, 8, 8, 4, 4, 4, 3, 3, 3, 4, 4, 4, 6, 6, 6, 4,
              4, 4, 5, 5, 5, 3, 3, 3, 4, 4, 4, 7, 7, 7, 8, 8, 8, 6, 6, 6, 7, 7,
              7, 8, 8, 8, 6, 6, 6, 7, 7, 7, 8, 8, 8, 6, 6, 6, 7, 7, 7, 8, 8, 8,
              6, 6, 6, 5, 5, 5,
            ],
            [
              6, 6, 6, 8, 8, 8, 3, 3, 3, 1, 1, 1, 2, 2, 2, 5, 5, 5, 4, 4, 4, 3,
              3, 3, 1, 1, 1, 7, 7, 7, 3, 3, 3, 5, 5, 5, 8, 8, 8, 7, 7, 7, 3, 3,
              3, 4, 4, 6, 6, 6, 1, 1, 1, 2, 2, 2, 3, 3, 3, 7, 7, 7, 6, 6, 6, 7,
              7, 7, 8, 8, 8, 6, 6, 6, 7, 7, 7, 8, 8, 8, 7, 7, 7, 8, 8, 8, 2, 2,
              2, 4, 4, 4, 2, 2, 2, 5, 5, 5, 7, 7, 7, 8, 8, 8, 6, 6, 6, 4, 4, 4,
              1, 1, 1, 4, 4, 4, 2, 2, 2, 4, 4, 4, 6, 6, 6, 8, 8, 8, 3, 3, 3, 2,
              2, 2, 6, 6, 6, 7, 7, 7, 8, 8, 8, 4, 4, 4, 7, 7, 7, 3, 3, 3, 5, 5,
              5, 3, 3, 3, 7, 7, 7, 8, 8, 8, 3, 3, 3, 4, 4, 4, 1, 1, 1, 5, 5, 5,
              3, 3, 3, 4, 4, 4, 6, 6, 6, 2, 2, 2, 3, 3, 3, 1, 1, 1, 7, 7, 7, 8,
              8, 8, 2, 2, 2, 6, 6, 6, 7, 7, 7, 8, 8, 8, 6, 6, 6, 7, 7, 7, 8, 8,
              8, 4, 4, 4, 5, 5, 5, 6, 6, 6, 4, 4, 4, 2, 2, 2, 4, 4, 4, 2, 2, 2,
              4, 4, 4, 6, 6, 6, 7, 7, 7, 3, 3, 3, 2, 2, 2, 5, 5, 5, 4, 4, 4, 3,
              3, 3, 1, 1, 1, 3, 3, 3, 4, 4, 7, 7, 7, 1, 1, 1, 6, 6, 6, 2, 2, 2,
              3, 3, 3, 1, 1, 1, 7, 7, 7, 2, 2, 2, 8, 8, 8, 4, 4, 4, 5, 5, 5, 6,
              6, 6, 4, 4, 4, 2, 2, 2, 4, 4, 4, 7, 7, 7, 8, 8, 8, 6, 6, 6, 7, 7,
              7, 8, 8, 8, 6, 6, 6, 7, 7, 7, 8, 8, 8, 6, 6, 6, 7, 7, 7, 8, 8, 8,
              6, 6, 6, 3, 3, 3,
            ],
            [
              6, 6, 6, 8, 8, 8, 2, 2, 2, 1, 1, 1, 4, 4, 4, 3, 3, 3, 2, 2, 2, 3,
              3, 3, 2, 2, 2, 5, 5, 5, 6, 6, 6, 7, 7, 7, 1, 1, 1, 4, 4, 4, 8, 8,
              8, 3, 3, 3, 4, 4, 4, 7, 7, 7, 2, 2, 2, 6, 6, 6, 7, 7, 7, 8, 8, 8,
              6, 6, 6, 7, 7, 7, 8, 8, 8, 4, 4, 4, 1, 1, 1, 3, 3, 3, 2, 2, 2, 7,
              7, 7, 8, 8, 8, 4, 4, 4, 6, 6, 6, 2, 2, 2, 4, 4, 4, 3, 3, 3, 2, 2,
              2, 3, 3, 3, 2, 2, 2, 1, 1, 1, 6, 6, 6, 7, 7, 7, 8, 8, 8, 4, 4, 4,
              8, 8, 8, 3, 3, 3, 4, 4, 4, 7, 7, 7, 2, 2, 2, 4, 4, 4, 7, 7, 7, 1,
              1, 1, 3, 3, 3, 4, 4, 4, 1, 1, 1, 5, 5, 5, 8, 8, 8, 6, 6, 6, 1, 1,
              1, 6, 6, 6, 7, 7, 7, 8, 8, 8, 6, 6, 6, 7, 7, 7, 8, 8, 8, 2, 2, 2,
              4, 4, 4, 3, 3, 3, 2, 2, 2, 3, 3, 3, 2, 2, 2, 5, 5, 5, 1, 1, 1, 7,
              7, 7, 8, 8, 8, 1, 1, 1, 4, 4, 4, 8, 8, 8, 3, 3, 3, 4, 4, 4, 2, 2,
              2, 4, 4, 4, 1, 1, 1, 3, 3, 3, 8, 8, 8, 4, 4, 4, 6, 6, 6, 5, 5, 5,
              2, 2, 2, 4, 4, 4, 3, 3, 3, 2, 2, 2, 3, 3, 3, 2, 2, 2, 8, 8, 8, 1,
              1, 1, 7, 7, 7, 5, 5, 5, 1, 1, 1, 4, 4, 4, 8, 8, 8, 3, 3, 3, 4, 4,
              4, 1, 1, 1, 2, 2, 2, 4, 4, 4, 1, 1, 1, 3, 3, 3, 4, 4, 4, 6, 6, 6,
              5, 5, 5, 6, 6, 6, 8, 8, 8, 6, 6, 6, 7, 7, 7, 8, 8, 8, 6, 6, 6, 1,
              1, 1, 2, 2, 2,
            ],
            [
              6, 6, 6, 8, 8, 8, 2, 2, 2, 3, 3, 3, 1, 1, 1, 2, 2, 2, 3, 3, 3, 2,
              2, 2, 7, 7, 7, 3, 3, 3, 6, 6, 6, 4, 4, 4, 2, 2, 2, 8, 8, 8, 4, 4,
              4, 6, 6, 6, 4, 4, 4, 7, 7, 7, 6, 6, 6, 7, 7, 7, 8, 8, 8, 6, 6, 6,
              7, 7, 7, 8, 8, 8, 3, 3, 3, 4, 4, 4, 6, 6, 6, 7, 7, 7, 8, 8, 8, 4,
              4, 4, 2, 2, 2, 3, 3, 3, 2, 2, 2, 3, 3, 3, 2, 2, 2, 1, 1, 1, 3, 3,
              3, 6, 6, 6, 4, 4, 4, 2, 2, 2, 5, 5, 5, 7, 7, 7, 8, 8, 8, 7, 7, 7,
              4, 4, 4, 6, 6, 6, 4, 4, 4, 1, 1, 1, 3, 3, 3, 8, 8, 8, 4, 4, 4, 6,
              6, 6, 1, 1, 1, 8, 8, 8, 4, 4, 4, 7, 7, 7, 1, 1, 1, 2, 2, 2, 5, 5,
              5, 3, 3, 3, 2, 2, 2, 6, 6, 6, 7, 7, 7, 8, 8, 8, 6, 6, 6, 7, 7, 7,
              8, 8, 8, 3, 3, 3, 2, 2, 2, 3, 3, 3, 6, 6, 6, 4, 4, 4, 2, 2, 2, 8,
              8, 8, 5, 5, 5, 7, 7, 7, 4, 4, 4, 8, 8, 8, 4, 4, 4, 1, 1, 1, 3, 3,
              3, 4, 4, 4, 6, 6, 6, 7, 7, 7, 4, 4, 4, 2, 2, 2, 5, 5, 5, 3, 3, 3,
              2, 2, 2, 3, 3, 3, 2, 2, 2, 7, 7, 7, 8, 8, 8, 3, 3, 3, 6, 6, 6, 4,
              4, 4, 2, 2, 2, 8, 8, 8, 4, 4, 4, 1, 1, 1, 4, 4, 4, 7, 7, 7, 4, 4,
              4, 3, 3, 3, 8, 8, 8, 4, 4, 4, 5, 5, 5, 4, 4, 4, 7, 7, 7, 8, 8, 8,
              5, 5, 5, 7, 7, 7, 3, 3, 3, 8, 8, 8, 6, 6, 6, 7, 7, 7, 8, 8, 8, 6,
              6, 6, 7, 7, 7,
            ],
          ]),
          t
        );
      })();
      t.AstronautReel = n;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = (function () {
        function i(e, i, n) {
          (this._playing = !1),
            (this.onExpansionStarted = new tk_common.utils.Signal1()),
            (this.onAnimationComplete = new tk_common.utils.Signal1()),
            (this._game = e.game),
            (this.expansionGroup = n),
            (this._expansionSprite = e);
          var a = t.ReelMatrixes.VMs[i.index];
          (this._expansionSprite.viewModelMatrix = a),
            (this._expansionSprite.name = "expandMe"),
            (this._expansionSprite.visible = !0),
            (this._expansionSprite.alpha = 0.01),
            (this._expansionSprite.texture.baseTexture.textureScale = 0.5);
          var o = this._expansionSprite;
          (o.v0 = { x: 0, y: 0 }),
            (o.v1 = { x: 13, y: 0 }),
            (o.v2 = { x: 13, y: 48 }),
            (o.v3 = { x: 0, y: 48 }),
            this.buildExpansionAnimations(i.index),
            (this._reel = i),
            (i.expansionFrame = this);
        }
        return (
          (i.prototype.setGlowImage = function (e) {
            var t = (this._glow = e);
            (t.v0 = { x: 0, y: 0 }),
              (t.v1 = { x: 13, y: 0 }),
              (t.v2 = { x: 13, y: 48 }),
              (t.v3 = { x: 0, y: 48 }),
              (t.viewModelMatrix = this._expansionSprite.viewModelMatrix),
              tk_common.phaser.addHandleVisibilityMixin(t),
              t.animations.add(
                "expand0",
                Phaser.Animation.generateFrameNames(
                  "expansionFrameDown",
                  0,
                  13,
                  "Glow.png"
                ),
                31,
                !1
              ),
              t.animations.add(
                "expand1",
                Phaser.Animation.generateFrameNames(
                  "expansionFrameMiddle",
                  0,
                  13,
                  "Glow.png"
                ),
                31,
                !1
              ),
              t.animations.add(
                "expand2",
                Phaser.Animation.generateFrameNames(
                  "expansionFrameUp",
                  0,
                  13,
                  "Glow.png"
                ),
                31,
                !1
              );
          }),
          (i.prototype.buildExpansionAnimations = function (e) {
            this._expansionSprite.animations.add(
              "expand0",
              Phaser.Animation.generateFrameNames(
                "expansionFrameDown",
                0,
                13,
                ".png"
              ),
              31,
              !1
            ),
              this._expansionSprite.animations.add(
                "expand1",
                Phaser.Animation.generateFrameNames(
                  "expansionFrameMiddle",
                  0,
                  13,
                  ".png"
                ),
                31,
                !1
              ),
              this._expansionSprite.animations.add(
                "expand2",
                Phaser.Animation.generateFrameNames(
                  "expansionFrameUp",
                  0,
                  13,
                  ".png"
                ),
                31,
                !1
              ),
              tk_common.phaser.addHandleVisibilityMixin(
                this._expansionSprite,
                !0
              ),
              (this._expansionSprite.frameName = "expansionFrameDown0.png");
          }),
          (i.prototype.playExpansionAnimation = function (t, i, n) {
            void 0 === n && (n = !1),
              (this._expansionData = t),
              (this._playing = !0),
              (this._expansionSprite.debugMe = !0),
              this._reel
                .getSymbolAt(t.symbolIndex + 6)
                .playExpansionWinAnimation(),
              this._game.soundSystem.playSoundWithUniqueID(
                e.SoundIds.AS_ExpanderAttention
              );
            var a =
              this._game.gameTweaker.expansionState.winAnimationDurationMs /
              1e3;
            TweenMax.delayedCall(
              a,
              this.handleWaitForAttentionComplete,
              [i],
              this
            );
          }),
          (i.prototype.handleWaitForAttentionComplete = function (e) {
            this.onExpansionStarted.dispatch(this._reel.index);
            var t = !0 === this._game.soundEnabled ? 1e3 : 1;
            TweenMax.delayedCall(
              t / 1e3,
              this.handlePauseBeforeExpansionExpired,
              [e],
              this
            );
          }),
          (i.prototype.handlePauseBeforeExpansionExpired = function (t) {
            var i = this,
              n = this._expansionSprite;
            n.animations.stop();
            var a = n.play(
              "expand" + this._expansionData.direction,
              31,
              !1,
              !1
            );
            (n.alpha = 1),
              (n.visible = !0),
              t &&
                this._game.soundSystem.playSoundWithUniqueID(
                  e.SoundIds.AS_ExpanderExpansion
                ),
              this.toggleSymbolGlows(!1),
              this._glow &&
                (this._glow.play(
                  "expand" + this._expansionData.direction,
                  31,
                  !1,
                  !1
                ),
                (n.alpha = 1),
                (n.visible = !0)),
              a.onComplete.addOnce(function () {
                return i.handleFrameAnimationComplete(
                  i._expansionData.direction
                );
              }, this);
          }),
          (i.prototype.handleFrameAnimationComplete = function (e) {
            var t = this._expansionSprite.game.add
              .tween(this._expansionSprite)
              .to({ alpha: 0 }, 120);
            t.onComplete.addOnce(this.handleExpansionAnimationComplete, this),
              t.start(),
              this._reel.putSymbolAt(6, this._expansionData.finalSymbolId),
              this._reel.putSymbolAt(7, this._expansionData.finalSymbolId),
              this._reel.putSymbolAt(8, this._expansionData.finalSymbolId),
              this.toggleSymbolGlows(!0),
              this.handleExpansionAnimationComplete();
          }),
          (i.prototype.handleExpansionAnimationComplete = function () {
            (this._playing = !1), this.onAnimationComplete.dispatch(this);
          }),
          (i.prototype.toggleSymbolGlows = function (e) {
            this._reel.getSymbolAt(6).turnOffGlow(!e),
              this._reel.getSymbolAt(7).turnOffGlow(!e),
              this._reel.getSymbolAt(8).turnOffGlow(!e);
          }),
          i
        );
      })();
      t.ExpansionFrame = i;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = (function () {
        function t(e, t) {
          (this.onSpinComplete = new tk_common.utils.Signal1()),
            (this.onFirstReelStopped = new tk_common.utils.Signal0()),
            (this.onThirdReelStopped = new tk_common.utils.Signal0()),
            (this.reels = []),
            (this.isQuickStopped = !1),
            (this._game = e),
            (this._sceneRoot = t);
        }
        return (
          (t.prototype.buildReels = function (t) {
            for (var i = 0; i < 5; i++) {
              var n = new e.view.AstronautReel(this._game, this._sceneRoot);
              if (((n.index = i), (this.reels[i] = n), i > 0))
                this.reels[i - 1].onSpinComplete.add(
                  this.handleReelStopped,
                  this
                );
              else n.onSpinComplete.add(this.handleFirstReelStopped, this);
              n.buildReel(i, t);
            }
            this.reels[4].onSpinComplete.add(this.handleReelStopped, this),
              this.reels[4].onSpinComplete.add(this.handleSpinComplete, this),
              (this._nearWinManager = this._game.scene.nearWinManager);
          }),
          (t.prototype.handleFirstReelStopped = function () {
            this.onFirstReelStopped.dispatch();
          }),
          (t.prototype.getSymbolsOnReels = function (e) {
            var t = [];
            if (!1 === e)
              for (var i = 0; i < 5; i++)
                for (var n = 0; n < 5; n++)
                  t.push(this.getReel(i).getSymbolAt(n + 5));
            else
              for (i = 0; i < 5; i++)
                for (n = 0; n < 3; n++)
                  t.push(this.getReel(i).getSymbolAt(n + 1 + 5));
            return t;
          }),
          (t.prototype.getSymbolIdsOnReels = function (e) {
            var t = [];
            if (!1 === e)
              for (var i = 0; i < 5; i++)
                for (var n = 0; n < 5; n++)
                  t.push(this.getReel(i).getSymbolAt(n).getSymbolId());
            else
              for (i = 0; i < 5; i++)
                for (n = 0; n < 3; n++)
                  t.push(
                    this.getReel(i)
                      .getSymbolAt(n + 6)
                      .getSymbolId()
                  );
            return t;
          }),
          (t.prototype.getFullSymbolsList = function () {
            for (var e = [], t = 0; t < 5; t++)
              for (var i = 0; i < 10; i++)
                e.push(this.getReel(t).getSymbolAt(i).getSymbolId());
            return e;
          }),
          (t.prototype.getSymbolAtServerIndex = function (e) {
            var t = Math.floor(e / 3),
              i = e % 3;
            return this.getReel(t).getSymbolAt(i + 6);
          }),
          (t.prototype.getSymbolAt = function (e) {
            var t = Math.floor(e / 10),
              i = e % 10;
            return this.getReel(t).getSymbolAt(i);
          }),
          (t.prototype.getReel = function (e) {
            return this.reels[e];
          }),
          (t.prototype.startSpin = function (t) {
            void 0 === t && (t = !1), (this.isQuickStopped = !1);
            var i = this._game.gameTweaker.spinTweaker;
            this._game.soundSystem.playSoundWithUniqueID(
              e.SoundIds.AS_SpinStart,
              1
            ),
              this._game.soundSystem.playSoundWithId(
                e.SoundIds.AS_SpinLoop,
                e.SoundIds.AS_SpinLoop,
                0,
                !0
              ),
              this._game.soundSystem.fadeSound(
                e.SoundIds.AS_SpinLoop,
                i.spinLoopSndFadeInDurationMs,
                1,
                !1
              );
            for (var n = 0; n < this.reels.length; n++)
              this.reels[n].startSpin(t);
            this.reels[0].previousReelHasStopped(!1);
          }),
          (t.prototype.stopSpin = function (t) {
            this._currentState = t;
            var i = t.isge.reelIndices,
              n = t.isge.syms;
            this._reelStopIndices = i;
            var a = e.convertGame(this._game).gameTweaker;
            this._game.scene.nearWinManager.analyzeGameState(t);
            for (var o = 0, s = 0; s < 5; s++) {
              this.reels[s].initialSymbols = n;
              var r = this._game.scene.nearWinManager.isReelExciting(s),
                l = (o += a.spinTweaker.stopDelaysMs[s]);
              this._game.fastPlay &&
                ((l *= 0.5), (r.allowQuickStop = !0), (r.delayStop = !1)),
                this.reels[s].stopSpin(this._reelStopIndices[s], l, r);
            }
          }),
          (t.prototype.handleReelStopped = function (e) {
            var t = this.getCurrentState(),
              i = this._game.scene.nearWinManager.handleReelStopped(e.index);
            i && this.getLayoutManager().isNearWin(!0, null != t.mgwe),
              4 != e.index
                ? (this.reels[e.index + 1].previousReelHasStopped(i),
                  3 === e.index && this.onThirdReelStopped.dispatch())
                : this.getLayoutManager().isNearWin(!1, null != t.bgwe);
          }),
          (t.prototype.handleSpinComplete = function () {
            this._game.soundSystem.stopSound(e.SoundIds.AS_SpinLoop);
            var t = this.getCurrentState(),
              i = null != t.bgwe || null != t.mgwe,
              n = null != t.pwge;
            this._game.scene.nearWinManager.stopAllAttentions(
              i || n,
              this.isQuickStopped
            ),
              this.isQuickStopped
                ? TweenMax.delayedCall(
                    this._game.gameTweaker.spinTweaker
                      .pauseAfterReelsStoppedMs / 1e3,
                    this.handleReelStoppedPauseExpired,
                    void 0,
                    this
                  )
                : this.onSpinComplete.dispatch(this);
          }),
          (t.prototype.handleReelStoppedPauseExpired = function () {
            this.onSpinComplete.dispatch(this);
          }),
          (t.prototype.update = function (e) {
            for (var t = 0; t < this.reels.length; t++)
              this.reels[t].updateWhenSpinning(e);
          }),
          (t.prototype.quickStop = function () {
            this.isQuickStopped && alert("Already quick stopped!"),
              (this.isQuickStopped = !0);
            for (var e = 0; e < this.reels.length; e++)
              this.reels[e].quickStop();
          }),
          (t.prototype.restoreReels = function (e) {
            for (var t = 0; t < e.length; t++) {
              this.getSymbolAtServerIndex(t).setSymbolId(e[t]);
            }
          }),
          (t.prototype.recoverFromError = function (t) {
            this._game.soundSystem.stopSound(e.SoundIds.AS_SpinLoop),
              this.reels.forEach(function (e) {
                e.recoverFromError(t);
              });
          }),
          (t.prototype.getCurrentState = function () {
            return this._currentState;
          }),
          (t.prototype.getLayoutManager = function () {
            return this._game.sceneLayoutManager;
          }),
          (t.SYMBOLS_PER_REEL_ON_SERVER = 3),
          t
        );
      })();
      t.AstronautReels = i;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    e.convertGame = function (e) {
      return e;
    };
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      (e.fastPixelFrameSwitching = function (e) {
        this.setFrame(e), (this._frameName = e.frameName);
      }),
        (e.fastPixelPreUpdate = function () {
          var e = this,
            t = e._cache;
          return (
            (t[0] = e.world.x),
            (t[1] = e.world.y),
            (t[2] = e.rotation),
            e.exists && e.parent.exists
              ? (e.world.setTo(this.worldTransform.tx, this.worldTransform.ty),
                (t[3] = e.game.stage.currentRenderOrderID++),
                !0)
              : ((t[3] = -1), !1)
          );
        }),
        (e.fastPixelUpdateTransform = function () {
          this.worldAlpha = this.alpha * this.parent.worldAlpha;
        });
    })(e.utils || (e.utils = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = (function () {
        function i(e) {
          (this._colorPalette = {}),
            (this._colorPaletteMap = []),
            (this._animationData = {}),
            (this._animationDataBuilder = {}),
            (this.onComplete = new tk_common.utils.Signal()),
            (this._currentFrameIndex = -1),
            (this._game = e),
            this.createAnimationSprite();
        }
        return (
          (i.prototype.createPixelCoordsFromUnityData = function () {
            return this._game.cache.getJSON("subSpriteCoords");
          }),
          (i.prototype.buildPixels = function (t, i) {
            var n = this.createPixelCoordsFromUnityData();
            this._flattenedPixels = this._game.add.spriteBatch(t, "allPixels");
            var a = this._game.add.sprite(
              0,
              0,
              "pixels",
              "pixelColor0.png",
              this._flattenedPixels
            );
            (a.texture.baseTexture.scaleMode = PIXI.scaleModes.LINEAR),
              this.buildColorPaletteMap(a);
            var o = new e.WebGLSpriteBatchWrapper(this._flattenedPixels);
            o.onSpriteBatchReady.addOnce(function () {
              for (var t = 0; t < 48; t++)
                for (var i = 0; i < 65; i++) {
                  var s = e.WebGLSpriteBatchWrapper.calculateSubSpriteData(
                      a.position,
                      a.texture,
                      a.anchor
                    ),
                    r = e.WebGLSpriteBatchWrapper.getUVs(a.texture),
                    l = o.addSubSprite(s, r);
                  o.setSubPixelCoords(l, n[i][t]);
                }
            }, this),
              this.createAnimations(t, this._game.returningPlayer),
              this.clearAllPixels(),
              (this._fastSpriteBatch = o);
          }),
          (i.prototype.createAnimations = function (e, t) {
            t ? this.createWelcomeBackAnimation() : this.createIntroAnimation(),
              this.createNiceWinAnimation(),
              this.createGreatWinAnimation(),
              this.createAwesomeWinAnimation(),
              (this._animationDataBuilder.bigWin =
                this.createBigWinAnimation.bind(this)),
              (this._animationDataBuilder.megaWin =
                this.createMegaWinAnimation.bind(this)),
              (this._animationDataBuilder.ultraWin =
                this.createUltraWinAnimation.bind(this)),
              (this._animationDataBuilder.MysteryGameIntro =
                this.createMysteryIntroAnimation.bind(this)),
              (this._animationDataBuilder.MysteryGameOutro =
                this.createMysteryOutroAnimation.bind(this)),
              (this._animationDataBuilder.BonusGameIntro =
                this.createBonusGameIntroAnimation.bind(this)),
              (this._animationDataBuilder.BonusGameOutro =
                this.createBonusGameOutroAnimation.bind(this));
          }),
          (i.prototype.stepAnimation = function (e) {
            this.showAllPixels();
            var t = 0,
              i = this._animationSprite.animations._anims[e];
            this._animationSprite.__steppedAnimation != e
              ? ((this._animationSprite.__steppedAnimation = e),
                (t = 0),
                (this._animationSprite.__steppedFrame = 0))
              : ((t = this._animationSprite.__steppedFrame),
                ++t === i.frameTotal && (t = 0),
                (this._animationSprite.__steppedFrame = t));
            var n = i._frames[t];
            this.updateVisiblePixels(this._animationData[e][t]),
              (this._animationSprite.frame = n),
              this._game.scene.glowManager.stepFullscreenGlowAnimation(e, t);
          }),
          (i.prototype.playAnimation = function (e, t, i) {
            void 0 === this._animationData[e] &&
              this._animationDataBuilder[e](),
              (this._currentFrameIndex = -1),
              this.showAllPixels(),
              this._animationSprite.animations.stop();
            var n = this._animationSprite.play(e, 31, !1, !1);
            n.onComplete.removeAll(),
              n.onComplete.addOnce(this.handleAnimationComplete, this),
              t &&
                this._game.scene.glowManager.playBackgroundGlowAnimation(e, i),
              this._game.scene.glowManager.playFullscreenGlowAnimation(e);
          }),
          (i.prototype.handleAnimationComplete = function () {
            this._animationSprite.animations.currentAnim.onComplete.removeAll(),
              this.clearAllPixels(),
              this.onComplete.dispatch();
          }),
          (i.prototype.buildFrameNamesAAtoZZ = function (e, t, i) {
            for (var n = 0, a = []; ; ) {
              var o = e + "_" + n + ".png";
              if (!i.frameData.checkFrameName(o)) break;
              a.push(o), n++;
            }
            return a;
          }),
          (i.prototype.updateVisiblePixels = function (e) {
            for (var t, i = 3120; i--; ) {
              t = e[i];
              var n = this._colorPaletteMap[t];
              this._fastSpriteBatch.updateSubSpriteUVs(i, n.uvs),
                this._fastSpriteBatch.updateSubSpriteAlpha(i, n.alpha);
            }
          }),
          (i.prototype.clearAllPixels = function () {
            (this._flattenedPixels.visible = !1),
              (this._flattenedPixels.exists = !1),
              this._game.scene.glowManager.hideFullscreenGlow();
          }),
          (i.prototype.showAllPixels = function () {
            (this._flattenedPixels.exists = !0),
              (this._flattenedPixels.visible = !0);
          }),
          (i.prototype.createIntroAnimation = function () {
            var e = "Intro_BootSequence";
            this._animationSprite.animations.add(
              e,
              Phaser.Animation.generateFrameNames(
                "Intro_AlternativeBootSequence_",
                0,
                68,
                ".png"
              )
            );
            for (
              var i = this._animationSprite.animations.getAnimation(e),
                n = this._game.cache.getBinary("combinedb"),
                a =
                  this._game.cache.getJSON("combinedManifest")[
                    "introSequence.json"
                  ],
                o = new Array(a.frames),
                s = new Uint8Array(n),
                r = 0;
              r < a.frames;
              r++
            ) {
              var l = s.subarray(a.start + 3120 * r, a.start + 3120 * (r + 1));
              o[r] = l;
            }
            t.IntroMovieDataSet.DATA = o;
            var m = (this._animationData[e] = o);
            (i.animData = m), (i.animDataLength = m.length);
          }),
          (i.prototype.createWelcomeBackAnimation = function () {
            for (
              var e = "Intro_BootSequence",
                i = this._animationSprite.animations.add(
                  e,
                  Phaser.Animation.generateFrameNames(
                    "Intro_AlternativeBootSequenceWB_",
                    0,
                    100,
                    ".png"
                  )
                ),
                n = this._game.cache.getBinary("combinedb"),
                a =
                  this._game.cache.getJSON("combinedManifest")[
                    "introSequenceWB.json"
                  ],
                o = new Array(a.frames),
                s = new Uint8Array(n),
                r = 0;
              r < a.frames;
              r++
            ) {
              var l = s.subarray(a.start + 3120 * r, a.start + 3120 * (r + 1));
              o[r] = l;
            }
            t.IntroMovieDataSet.DATA = o;
            var m = (this._animationData[e] = o);
            (i.animData = m), (i.animDataLength = m.length);
          }),
          (i.prototype.createMysteryIntroAnimation = function () {
            var e = "MysteryGameIntro";
            this._animationSprite.animations.add(
              e,
              this.buildFrameNamesAAtoZZ(
                e,
                ".png",
                this._animationSprite.animations
              )
            );
            for (
              var i = this._animationSprite.animations.getAnimation(e),
                n = this._game.cache.getBinary("combinedb"),
                a =
                  this._game.cache.getJSON("combinedManifest")[
                    "mysteryGameIntro.json"
                  ],
                o = new Array(a.frames),
                s = new Uint8Array(n),
                r = 0;
              r < a.frames;
              r++
            ) {
              var l = s.subarray(a.start + 3120 * r, a.start + 3120 * (r + 1));
              o[r] = l;
            }
            t.MysteryGameDataSet.INTRO_DATA = o;
            var m = (this._animationData[e] = o);
            (i.animData = m), (i.animDataLength = m.length);
          }),
          (i.prototype.createMysteryOutroAnimation = function () {
            var e = "MysteryGameOutro";
            this._animationSprite.animations.add(
              e,
              this.buildFrameNamesAAtoZZ(
                e,
                ".png",
                this._animationSprite.animations
              )
            );
            for (
              var i = this._animationSprite.animations.getAnimation(e),
                n = this._game.cache.getBinary("combinedb"),
                a =
                  this._game.cache.getJSON("combinedManifest")[
                    "mysteryGameOutro.json"
                  ],
                o = new Array(a.frames),
                s = new Uint8Array(n),
                r = 0;
              r < a.frames;
              r++
            ) {
              var l = s.subarray(a.start + 3120 * r, a.start + 3120 * (r + 1));
              o[r] = l;
            }
            t.MysteryGameDataSet.OUTRO_DATA = o;
            var m = (this._animationData[e] = o);
            (i.animData = m), (i.animDataLength = m.length);
          }),
          (i.prototype.createBigWinAnimation = function () {
            this._animationSprite.animations.add(
              "bigWin",
              this.buildFrameNamesAAtoZZ(
                "Fullscreen_BigWin",
                ".png",
                this._animationSprite.animations
              )
            );
            for (
              var e = this._animationSprite.animations.getAnimation("bigWin"),
                i = this._game.cache.getBinary("combinedb"),
                n = this._game.cache.getJSON("combinedManifest")["bigWin.json"],
                a = new Array(n.frames),
                o = new Uint8Array(i),
                s = 0;
              s < n.frames;
              s++
            ) {
              var r = o.subarray(n.start + 3120 * s, n.start + 3120 * (s + 1));
              a[s] = r;
            }
            t.SpecialWinDataSet.BIG_WIN_DATA = a;
            var l = (this._animationData.bigWin = a);
            (e.animData = l), (e.animDataLength = l.length);
          }),
          (i.prototype.createMegaWinAnimation = function () {
            this._animationSprite.animations.add(
              "megaWin",
              this.buildFrameNamesAAtoZZ(
                "Fullscreen_MegaWin",
                ".png",
                this._animationSprite.animations
              )
            );
            for (
              var e = this._animationSprite.animations.getAnimation("megaWin"),
                i = this._game.cache.getBinary("combinedb"),
                n =
                  this._game.cache.getJSON("combinedManifest")["megaWin.json"],
                a = new Array(n.frames),
                o = new Uint8Array(i),
                s = 0;
              s < n.frames;
              s++
            ) {
              var r = o.subarray(n.start + 3120 * s, n.start + 3120 * (s + 1));
              a[s] = r;
            }
            t.SpecialWinDataSet.MEGA_WIN_DATA = a;
            var l = (this._animationData.megaWin = a);
            (e.animData = l), (e.animDataLength = l.length);
          }),
          (i.prototype.createUltraWinAnimation = function () {
            this._animationSprite.animations.add(
              "ultraWin",
              this.buildFrameNamesAAtoZZ(
                "Fullscreen_UltraWin",
                ".png",
                this._animationSprite.animations
              )
            );
            for (
              var e = this._animationSprite.animations.getAnimation("ultraWin"),
                i = this._game.cache.getBinary("combinedb"),
                n =
                  this._game.cache.getJSON("combinedManifest")["ultraWin.json"],
                a = new Array(n.frames),
                o = new Uint8Array(i),
                s = 0;
              s < n.frames;
              s++
            ) {
              var r = o.subarray(n.start + 3120 * s, n.start + 3120 * (s + 1));
              a[s] = r;
            }
            t.SpecialWinDataSet.ULTRA_WIN_DATA = a;
            var l = (this._animationData.ultraWin = a);
            (e.animData = l), (e.animDataLength = l.length);
          }),
          (i.prototype.createBonusGameIntroAnimation = function () {
            var e = "BonusGameIntro";
            this._animationSprite.animations.add(
              e,
              this.buildFrameNamesAAtoZZ(
                e,
                ".png",
                this._animationSprite.animations
              )
            );
            for (
              var i = this._animationSprite.animations.getAnimation(e),
                n = this._game.cache.getBinary("combinedb"),
                a =
                  this._game.cache.getJSON("combinedManifest")[
                    "bonusGameIntro.json"
                  ],
                o = new Array(a.frames),
                s = new Uint8Array(n),
                r = 0;
              r < a.frames;
              r++
            ) {
              var l = s.subarray(a.start + 3120 * r, a.start + 3120 * (r + 1));
              o[r] = l;
            }
            t.BonusGameDataSet.INTRO_DATA = o;
            var m = (this._animationData.BonusGameIntro = o);
            (i.animData = m), (i.animDataLength = m.length);
          }),
          (i.prototype.createBonusGameOutroAnimation = function () {
            var e = "BonusGameOutro";
            this._animationSprite.animations.add(
              e,
              this.buildFrameNamesAAtoZZ(
                e,
                ".png",
                this._animationSprite.animations
              )
            );
            for (
              var i = this._animationSprite.animations.getAnimation(e),
                n = this._game.cache.getBinary("combinedb"),
                a =
                  this._game.cache.getJSON("combinedManifest")[
                    "bonusGameOutro.json"
                  ],
                o = new Array(a.frames),
                s = new Uint8Array(n),
                r = 0;
              r < a.frames;
              r++
            ) {
              var l = s.subarray(a.start + 3120 * r, a.start + 3120 * (r + 1));
              o[r] = l;
            }
            t.BonusGameDataSet.OUTRO_DATA = o;
            var m = (this._animationData.BonusGameOutro = o);
            (i.animData = m), (i.animDataLength = m.length);
          }),
          (i.prototype.createNiceWinAnimation = function () {
            this._animationSprite.animations.add(
              "nice",
              this.buildFrameNamesAAtoZZ(
                "PartialScreen_MiniWin",
                ".png",
                this._animationSprite.animations
              )
            );
            for (
              var e = this._animationSprite.animations.getAnimation("nice"),
                i = this._game.cache.getBinary("combinedb"),
                n = this._game.cache.getJSON("combinedManifest")["nice.json"],
                a = new Array(n.frames),
                o = new Uint8Array(i),
                s = 0;
              s < n.frames;
              s++
            ) {
              var r = o.subarray(n.start + 3120 * s, n.start + 3120 * (s + 1));
              a[s] = r;
            }
            t.WinExclamationsDataSet.NICE_DATA = a;
            var l = (this._animationData.nice = a);
            (e.animData = l), (e.animDataLength = l.length);
          }),
          (i.prototype.createGreatWinAnimation = function () {
            this._animationSprite.animations.add(
              "great",
              this.buildFrameNamesAAtoZZ(
                "PartialScreen_SmallWin",
                ".png",
                this._animationSprite.animations
              )
            );
            for (
              var e = this._animationSprite.animations.getAnimation("great"),
                i = this._game.cache.getBinary("combinedb"),
                n = this._game.cache.getJSON("combinedManifest")["great.json"],
                a = new Array(n.frames),
                o = new Uint8Array(i),
                s = 0;
              s < n.frames;
              s++
            ) {
              var r = o.subarray(n.start + 3120 * s, n.start + 3120 * (s + 1));
              a[s] = r;
            }
            t.WinExclamationsDataSet.GREAT_DATA = a;
            var l = (this._animationData.great = a);
            (e.animData = l), (e.animDataLength = l.length);
          }),
          (i.prototype.createAwesomeWinAnimation = function () {
            this._animationSprite.animations.add(
              "awesome",
              this.buildFrameNamesAAtoZZ(
                "PartialScreen_MediumWin",
                ".png",
                this._animationSprite.animations
              )
            );
            for (
              var e = this._animationSprite.animations.getAnimation("awesome"),
                i = this._game.cache.getBinary("combinedb"),
                n =
                  this._game.cache.getJSON("combinedManifest")["awesome.json"],
                a = new Array(n.frames),
                o = new Uint8Array(i),
                s = 0;
              s < n.frames;
              s++
            ) {
              var r = o.subarray(n.start + 3120 * s, n.start + 3120 * (s + 1));
              a[s] = r;
            }
            t.WinExclamationsDataSet.AWESOME_DATA = a;
            var l = (this._animationData.awesome = a);
            (e.animData = l), (e.animDataLength = l.length);
          }),
          (i.prototype.stopAnimation = function () {
            this._animationSprite.animations.currentAnim.onComplete.removeAll(),
              this._animationSprite.animations.stop(),
              this.clearAllPixels(),
              this._game.scene.glowManager.fadeBackgroundGlow(100),
              this.onComplete.dispatch();
          }),
          (i.prototype.buildFastArray = function (e) {
            for (var t = new Array(e.length), i = 0; i < e.length; i++) {
              var n = e[i],
                a = new Uint8Array(n.length);
              a.set(n, 0), (t[i] = a);
            }
            return t;
          }),
          (i.prototype.createAnimationSprite = function () {
            var e = this,
              t = this._game.add.sprite(0, 0, "pixelAnimations", void 0);
            (t.smoothed = !1), (t.renderable = !1), (this._animationSprite = t);
            var i = this._animationSprite.animations.update;
            this._animationSprite.animations.update = function () {
              var t = i.apply(e._animationSprite.animations),
                n = e._animationSprite.animations.currentAnim,
                a = Math.floor(n._frameIndex);
              return (
                e._currentFrameIndex !== a &&
                  a < n.animDataLength &&
                  (e.updateVisiblePixels(n.animData[a]),
                  (e._currentFrameIndex = a)),
                t
              );
            };
          }),
          (i.prototype.getUvsForFrame = function (e, t) {
            return (
              126 == t && (t = 0),
              (e.frameName = "pixelColor" + t + ".png"),
              JSON.parse(JSON.stringify(e.texture._updateUvs()))
            );
          }),
          (i.prototype.buildColorPaletteMap = function (e) {
            this._colorPaletteMap = [];
            for (var t = 0; t < 128; t++) {
              var i = this.getUvsForFrame(e, t),
                n = 126 == t ? 0 : 1;
              this._colorPaletteMap.push({ uvs: i, alpha: n });
            }
          }),
          i
        );
      })();
      t.FullscreenAnimator = i;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = (function () {
        function t(e) {
          (this.onSpecialWinPresented = new tk_common.utils.Signal0()),
            (this.onSpecialWinAborted = new tk_common.utils.Signal0()),
            (this.onSpecialWinStarted = new tk_common.utils.Signal0()),
            (this._aborted = !1),
            (this._bigWinStarsTween = null),
            (this._runningPresentation = !1),
            (this._game = e);
        }
        return (
          (t.prototype.startPresentation = function (e, t, i) {
            (this._aborted = !1),
              (this._runningPresentation = !1),
              this._game.scene.fullScreenAnimator.onComplete.removeAll(),
              (this._currentState = i),
              TweenMax.delayedCall(
                t / 1e3,
                this.startPresentationAfterInitialDelay,
                [e],
                this
              );
          }),
          (t.prototype.startPresentationAfterInitialDelay = function (e) {
            this._aborted
              ? this.onSpecialWinAborted.dispatch()
              : (this.onSpecialWinStarted.dispatch(),
                (this._runningPresentation = !0),
                e === tk.d.config.WinLevelIds.BigWin
                  ? this.showBigWinPresentation()
                  : e === tk.d.config.WinLevelIds.MegaWin
                  ? this.showMegaWinPresentation()
                  : e === tk.d.config.WinLevelIds.UltraWin
                  ? this.showUltraWinPresentation()
                  : ((this._runningPresentation = !1),
                    this.onSpecialWinPresented.dispatch()));
          }),
          (t.prototype.showBigWinPresentation = function () {
            var t = this._game.gameTweaker.winPresentationState.bigWinEffects,
              i = this._game.scene,
              n = i.fullScreenAnimator;
            n.onComplete.removeAll(),
              n.onComplete.addOnce(this.handleSpecialWinPresented, this),
              n.playAnimation("bigWin", !0, t.backgroundGlowAmount),
              i.cameraShaker.shake(t.shakeAmount),
              (this._soundId = e.SoundIds.AS_BigWinSnd),
              this._game.soundSystem.playSoundWithId(
                e.SoundIds.AS_BigWinSnd,
                e.SoundIds.AS_BigWinSnd,
                1,
                !1
              ),
              this.tweenStars("stretchStarParticleBlue.png"),
              TweenMax.delayedCall(
                t.pauseBeforeFireworksMs / 1e3,
                this.startAllBigWinFireWorks,
                void 0,
                this
              ),
              this.zoomGame(!1);
          }),
          (t.prototype.zoomGame = function (e) {
            "main" == this._currentState.sue.rgp &&
              this.getSceneLayoutManager().specialWinEntered(!0, e);
          }),
          (t.prototype.showMegaWinPresentation = function () {
            var t = this._game.gameTweaker.winPresentationState.megaWinEffects,
              i = this._game.scene,
              n = i.fullScreenAnimator;
            n.onComplete.removeAll(),
              n.onComplete.addOnce(this.handleSpecialWinPresented, this),
              n.playAnimation("megaWin", !0, t.backgroundGlowAmount),
              (this._soundId = e.SoundIds.AS_MegaWinSnd),
              this._game.soundSystem.playSoundWithId(
                e.SoundIds.AS_MegaWinSnd,
                e.SoundIds.AS_MegaWinSnd,
                1,
                !1
              ),
              i.cameraShaker.shake(t.shakeAmount),
              TweenMax.delayedCall(
                t.pauseBeforeFireworksMs / 1e3,
                this.startAllMegaWinFireWorks,
                void 0,
                this
              ),
              this.zoomGame(!1);
          }),
          (t.prototype.showUltraWinPresentation = function () {
            var t = this._game.gameTweaker.winPresentationState.ultraWinEffects,
              i = this._game.scene,
              n = i.fullScreenAnimator;
            n.onComplete.removeAll(),
              n.onComplete.addOnce(this.handleSpecialWinPresented, this),
              n.playAnimation("ultraWin", !0, t.backgroundGlowAmount),
              (this._soundId = e.SoundIds.AS_UltraWinSnd),
              this._game.soundSystem.playSoundWithId(
                e.SoundIds.AS_UltraWinSnd,
                e.SoundIds.AS_UltraWinSnd,
                1,
                !1
              ),
              i.cameraShaker.shake(t.shakeAmount),
              TweenMax.delayedCall(
                t.pauseBeforeFireworksMs / 1e3,
                this.startAllUltraWinFireWorks,
                void 0,
                this
              ),
              this.zoomGame(!0);
          }),
          (t.prototype.handleSpecialWinPresented = function () {
            this.getSceneLayoutManager().specialWinExited(),
              this.onSpecialWinPresented.dispatch();
          }),
          (t.prototype.getSceneLayoutManager = function () {
            return this._game.sceneLayoutManager;
          }),
          (t.prototype.stopPresentation = function () {
            (this._aborted = !0), this.killEverything();
          }),
          (t.prototype.killEverything = function () {
            if (this._runningPresentation) {
              this._runningPresentation = !1;
              try {
                var t = this._game.scene;
                this.getSceneLayoutManager().specialWinExited(),
                  this._game.soundSystem.stopSound(this._soundId),
                  TweenMax.killDelayedCallsTo(this.startAllBigWinFireWorks),
                  TweenMax.killDelayedCallsTo(this.startAllMegaWinFireWorks),
                  TweenMax.killDelayedCallsTo(this.startAllUltraWinFireWorks),
                  this._game.soundSystem.stopSound(e.SoundIds.AS_UltraWinSnd),
                  this._game.soundSystem.stopSound(e.SoundIds.AS_MegaWinSnd),
                  this._game.soundSystem.stopSound(e.SoundIds.AS_BigWinSnd),
                  t.fireworksManager.abortFireworks(),
                  t.glowManager.fadeBackgroundGlow(),
                  t.fullScreenAnimator.onComplete.removeAll(),
                  t.fullScreenAnimator.stopAnimation(),
                  this.onSpecialWinAborted.dispatch();
              } catch (e) {
                alert(e.message);
              }
            }
          }),
          (t.wasSpecialWin = function (e, t) {
            void 0 === t &&
              (t = e.model.gameRound.totalBetMultiplierForGameRound);
            var i = e.model.getWinLevelId(t);
            return (
              i === tk.d.config.WinLevelIds.BigWin ||
              i === tk.d.config.WinLevelIds.MegaWin ||
              i === tk.d.config.WinLevelIds.UltraWin
            );
          }),
          (t.wasBigWin = function (e, t, i) {
            return (
              void 0 === t &&
                (t = e.model.gameRound.totalBetMultiplierForGameRound),
              (i = i || e.model.getWinLevelId(t)) ===
                tk.d.config.WinLevelIds.BigWin
            );
          }),
          (t.wasMegaWin = function (e, t, i) {
            return (
              void 0 === t &&
                (t = e.model.gameRound.totalBetMultiplierForGameRound),
              (i = i || e.model.getWinLevelId(t)) ===
                tk.d.config.WinLevelIds.MegaWin
            );
          }),
          (t.wasUltraWin = function (e, t, i) {
            return (
              void 0 === t &&
                (t = e.model.gameRound.totalBetMultiplierForGameRound),
              (i = i || e.model.getWinLevelId(t)) ===
                tk.d.config.WinLevelIds.UltraWin
            );
          }),
          (t.prototype.startAllBigWinFireWorks = function () {
            0 == this._aborted &&
              this._game.scene.fireworksManager.playBigWinFireworks();
          }),
          (t.prototype.startAllMegaWinFireWorks = function () {
            0 == this._aborted &&
              this._game.scene.fireworksManager.playMegaWinFireworks();
          }),
          (t.prototype.startAllUltraWinFireWorks = function () {
            0 == this._aborted &&
              this._game.scene.fireworksManager.playUltraWinFireworks();
          }),
          (t.prototype.fadeOutStretchedStars = function () {
            var e = this._game.gameTweaker;
            this._game.add
              .tween(this._game.scene.starsHolder)
              .to(
                { alpha: 0 },
                e.winPresentationState.abortion.stretchedStarsFadeOutDurationMs,
                Phaser.Easing.Cubic.In,
                !0
              );
          }),
          (t.prototype.tweenStars = function (t) {
            for (
              var i = this._game.gameTweaker,
                n = this._game.scene.stretchedStars,
                a = 0;
              a < n.length;
              a++
            ) {
              n[a].frameName = t;
            }
            if (null == this._bigWinStarsTween) {
              this._game.scene.starsHolder.alpha = 1;
              var o = this._game.scene.stretchedStarsHolders[0].children[0];
              o.x = 0;
              var s = this._game.add
                .tween(o)
                .to(
                  { x: 1e3 },
                  i.winPresentationState.bigWinEffects
                    .stretchedStarsTweenDurationMs,
                  void 0,
                  !0,
                  100
                );
              (s = e.utils.createFastTweenUpdateFunc(s, n)),
                (this._bigWinStarsTween = s);
            } else this._bigWinStarsTween.start();
          }),
          t
        );
      })();
      t.SpecialWinPresenter = i;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t, i) {
          void 0 === i && (i = 1);
          var n = this;
          return (
            ((n =
              e.call(
                this,
                t,
                void 0,
                [
                  "precision lowp float;",
                  "varying vec2 vTextureCoord;",
                  "varying vec4 vColor;",
                  "uniform float uGlowAmount;",
                  "uniform sampler2D uSampler;",
                  "void main(void) {",
                  "   vec4 tColor = texture2D(uSampler, vTextureCoord);",
                  "   gl_FragColor = tColor * vColor.a * uGlowAmount;",
                  "}",
                ].join("")
              ) || this)._glowAmount = i),
            (n.uniforms.uGlowAmount = { type: "1f", value: n._glowAmount }),
            n
          );
        }
        return (
          __extends(t, e),
          Object.defineProperty(t.prototype, "glowAmount", {
            get: function () {
              return this._glowAmount;
            },
            set: function (e) {
              (this.dirty = !0),
                (this.uniforms.uGlowAmount.value = this._glowAmount = e);
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(Phaser.Filter);
      e.GlowFilter = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = tk_common.utils.AmountFormatter,
        i = (function () {
          function e(e, i, n, a) {
            var o = this;
            (this.textFormatter = function (e) {
              return t.globalFormatter.formatAmount(e);
            }),
              (this._glowCharMap = {
                ",": "voxelDotGlow.png",
                ".": "voxelDotGlow.png",
                0: "voxel0Glow.png",
                1: "voxel1Glow.png",
                2: "voxel2Glow.png",
                3: "voxel3Glow.png",
                4: "voxel4Glow.png",
                5: "voxel5Glow.png",
                6: "voxel6Glow.png",
                7: "voxel7Glow.png",
                8: "voxel8Glow.png",
                9: "voxel9Glow.png",
              }),
              (this._game = e),
              (this._bitmapText = a),
              (this._holder = i),
              (this._animator = n),
              (window.testWinLabel = function (e, t, i) {
                o.setPosition(t || 0, i || 0),
                  o.setValue(e),
                  o.animateWinLabel();
              }),
              this.setValue(0);
          }
          return (
            (e.prototype.setPosition = function (e, t) {
              (this._holder.x = e), (this._holder.y = t);
            }),
            (e.prototype.animateWinLabel = function () {
              (this._animator.scale.x = 0),
                (this._animator.scale.y = 0),
                this._animator.animations.stop();
              var e = this._animator.play("showWinLabel");
              (e.enableUpdate = !0),
                e.onUpdate.removeAll(),
                e.onUpdate.add(this.handleWinLabelAnimationUpdate, this);
            }),
            (e.prototype.handleWinLabelAnimationUpdate = function () {
              this._bitmapText.tint = this._animator.tint;
            }),
            (e.prototype.setValue = function (e) {
              (this._bitmapText.text = this.textFormatter(e)),
                (this._bitmapText.x = -this._bitmapText.width / 2),
                (this._bitmapText.y = -this._bitmapText.height / 2),
                this.updateCharacterGlows();
            }),
            (e.prototype.updateCharacterGlows = function () {
              var e = this._bitmapText.children,
                t = e.length;
              if (0 !== t) {
                for (var i = 0; i < 15; i++)
                  this._bitmapText.glows[i].visible = !1;
                for (i = 0; i < t; i++) {
                  var n = e[i];
                  this.updateGlowImage(
                    i,
                    n,
                    this._bitmapText.text.charAt(i),
                    !0
                  );
                }
              }
            }),
            (e.prototype.updateGlowImage = function (e, t, i, n) {
              var a = this._bitmapText.glows[e],
                o = t.width / t.scale.x,
                s = 1.4;
              a.width = o * s;
              var r = t.height / t.scale.y;
              (a.height = r * s),
                (a.x = 0.5 * a.width - 0.5 * (o * s - o)),
                (a.y = a.height / 2 - (r * s - r) / 2),
                (a.frameName = this._glowCharMap[i]),
                a.updateTransform(t);
            }),
            (e.prototype.setScale = function (e) {
              this._holder.scale.x = this._holder.scale.y = e;
            }),
            e
          );
        })();
      e.MysteryWinLabel = i;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e(e) {
          (this._visible = !1),
            (this._portrait = !1),
            (this._game = e),
            (this._allWins = this._game.scene.allWinsText),
            (this._multiplier = this._game.scene.multiplierText),
            (this._infoFieldGroup = this._game.scene.infoFieldGroup);
        }
        return (
          (e.prototype.setPortraitMode = function () {
            (this._portrait = !0),
              this._visible &&
                this.getSceneLayoutManager().layoutBonusInfoTexts(
                  this._infoFieldGroup
                );
          }),
          (e.prototype.setLandscapeMode = function () {
            (this._portrait = !1),
              this._visible &&
                this.getSceneLayoutManager().layoutBonusInfoTexts(
                  this._infoFieldGroup
                );
          }),
          (e.prototype.showInfoTexts = function (e) {
            if (!0 !== this._visible) {
              this._visible = !0;
              var t = this._game.scene;
              (t.takeYourPickGroup.visible = !1),
                (t.takeYourPickGlowGroup.visible = !1),
                e > 1
                  ? ((t.allWinsTexts.visible = !0),
                    (t.allWinsTextGlows.visible = !0),
                    (t.allWinsText.alpha = 1),
                    (t.allWinsText.glow.alpha = 1),
                    (this._infoFieldGroup.visible = !0),
                    (t.allWinsTextGlows.alpha = 1),
                    (t.multiplierText.frameName = "multiplierX" + e + ".png"),
                    (t.multiplierText.glow.frameName =
                      "multiplierX" + e + "Glow.png"),
                    (t.multiplierText.visible = !0),
                    (t.allWinsText.frameName = "allWinsBonusGame.png"),
                    (t.allWinsText.glow.frameName = "allWinsBonusGameGlow.png"),
                    (t.allWinsText.visible = !0),
                    TweenMax.to(this._infoFieldGroup, 0.1, { alpha: 1 }))
                  : ((t.allWinsTexts.visible = !1),
                    (t.allWinsTextGlows.visible = !1)),
                this._portrait
                  ? this.setPortraitMode()
                  : this.setLandscapeMode();
            }
          }),
          (e.prototype.hideInfoTexts = function () {
            if (!1 !== this._visible) {
              this._visible = !1;
              TweenMax.to(this._infoFieldGroup, 0.1, {
                alpha: 0,
                onComplete: this.handleInfoFieldFadeOutComplete,
                onCompleteScope: this,
              });
            }
          }),
          (e.prototype.handleInfoFieldFadeOutComplete = function () {
            this._infoFieldGroup.visible = !1;
          }),
          (e.prototype.getSceneLayoutManager = function () {
            return this._game.sceneLayoutManager;
          }),
          e
        );
      })();
      e.BonusGameInfoFieldHelper = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e(e) {
          (this._bobAmount = 10),
            (this._visible = !1),
            (this._portrait = !1),
            (this._game = e),
            (this._leftArrow = this._game.scene.takeYourPickGroup.children[0]),
            (this._rightArrow = this._game.scene.takeYourPickGroup.children[1]),
            (this._takeYourPickGroup = this._game.scene.takeYourPickGroup),
            (this._multiplierText = this._game.scene.multiplierText),
            (this._allWinsText = this._game.scene.allWinsText),
            (this._infoFieldGroup = this._game.scene.infoFieldGroup),
            (this._takeYourPickGlowGroup =
              this._game.scene.takeYourPickGlowGroup),
            (this._allWinsGlowGroup = this._game.scene.allWinsTextGlows);
        }
        return (
          (e.prototype.setPortraitMode = function () {
            (this._portrait = !0),
              this.getSceneLayoutManager().layoutMysteryInfoTexts(
                this._infoFieldGroup
              );
          }),
          (e.prototype.setLandscapeMode = function () {
            (this._portrait = !1),
              this.getSceneLayoutManager().layoutMysteryInfoTexts(
                this._infoFieldGroup
              );
          }),
          (e.prototype.getSceneLayoutManager = function () {
            return this._game.sceneLayoutManager;
          }),
          (e.prototype.showInfoTexts = function (e) {
            if (!0 !== this._visible) {
              this._multValue = e;
              var t = this._game.scene;
              e > 1
                ? ((t.allWinsTexts.visible = !0),
                  (t.allWinsTextGlows.visible = !0),
                  (t.multiplierText.frameName = "multiplierX" + e + ".png"),
                  (t.multiplierText.visible = !0),
                  (t.multiplierText.glow.frameName =
                    "multiplierX" + e + "Glow.png"),
                  (t.allWinsText.frameName = "allWinsMysteryGame.png"),
                  (t.allWinsText.visible = !0),
                  (t.allWinsText.glow.frameName = "allWinsMysteryGameGlow.png"))
                : ((t.allWinsTexts.visible = !1),
                  (t.allWinsTextGlows.visible = !1));
              var i = t.takeYourPickGroup;
              (this._takeYourPickGroup = i),
                (i.visible = !0),
                (i.alpha = 0),
                (this._takeYourPickText = this._game.scene.takeYourPickText),
                (this._leftArrow = this._game.scene.leftArrow),
                (this._rightArrow = this._game.scene.rightArrow),
                (this._visible = !0),
                (this._infoFieldGroup = t.infoFieldGroup),
                (this._allWinsTextGroup = t.allWinsTexts),
                (this._infoFieldGroup.visible = !0),
                (this._allWinsTextGroup.alpha = 1),
                (this._bobAmount =
                  this._game.gameTweaker.mysteryTexts.arrowBobbingPx ||
                  this._bobAmount);
              var n = this._game.gameTweaker.mysteryTexts.showDurationMs / 1e3;
              TweenMax.to(this._infoFieldGroup, n, { alpha: 1 });
              var a = this._leftArrow;
              this.createBobbingArrowTween(a, this._bobAmount);
              var o = this._rightArrow;
              this.createBobbingArrowTween(o, this._bobAmount),
                this._portrait
                  ? this.setPortraitMode()
                  : this.setLandscapeMode(),
                this.startAlternatingTweens();
            }
          }),
          (e.prototype.hideInfoTexts = function () {
            var e = this;
            if (!1 !== this._visible) {
              this._visible = !1;
              var t = this._game.gameTweaker.mysteryTexts.hideDurationMs / 1e3;
              TweenMax.to(this._infoFieldGroup, t, {
                alpha: 0,
                onComplete: function () {
                  (e._infoFieldGroup.visible = !1), e.stopAlternatingTween();
                  var t = e._leftArrow;
                  TweenMax.killTweensOf(t), TweenMax.killTweensOf(t.glow);
                  var i = e._rightArrow;
                  TweenMax.killTweensOf(i), TweenMax.killTweensOf(i.glow);
                },
              });
            }
          }),
          (e.prototype.pickingEnabled = function () {
            (this._takeYourPickGlowGroup.visible = !0),
              (this._leftArrow.tint = 16777215),
              (this._rightArrow.tint = 16777215),
              (this._takeYourPickText.tint = 16777215);
          }),
          (e.prototype.pickingDisabled = function () {
            (this._takeYourPickGlowGroup.visible = !1),
              (this._leftArrow.tint = 8421504),
              (this._rightArrow.tint = 8421504),
              (this._takeYourPickText.tint = 8421504);
          }),
          (e.prototype.createBobbingArrowTween = function (e, t) {
            var i = this._game.gameTweaker.mysteryTexts;
            TweenMax.fromTo(
              e.parent,
              i.bobbingDurationMs / 1e3,
              { y: 0 },
              { y: t, repeat: 1e5, yoyo: !0 }
            ),
              TweenMax.fromTo(
                e.glow.parent,
                i.bobbingDurationMs / 1e3,
                { y: 0 },
                { y: t, repeat: 1e5, yoyo: !0 }
              );
          }),
          (e.prototype.startAlternatingTweens = function () {
            this.stopAlternatingTween(),
              this._multValue > 1
                ? ((this._allWinsTextGroup.alpha = 0),
                  this.fadeInTakeYourPick())
                : ((this._allWinsTextGroup.visible = !1),
                  (this._takeYourPickGroup.visible = !0),
                  (this._takeYourPickGroup.alpha = 1));
          }),
          (e.prototype.fadeInTakeYourPick = function () {
            var e = this._game.gameTweaker.mysteryTexts;
            (this._allWinsTextGroup.visible = !0),
              (this._takeYourPickGroup.visible = !0),
              (this._takeYourPickGroup.alpha = 0);
            var t = e.textCrossFadeDurationMs / 1e3;
            TweenMax.to(this._allWinsTextGroup, t, { alpha: 0 }),
              TweenMax.to(this._allWinsGlowGroup, t, { alpha: 0 }),
              TweenMax.to(this._takeYourPickGroup, t, {
                alpha: 1,
                onComplete: this.handleTakeYourPickFadeInComplete,
                onCompleteScope: this,
              }),
              TweenMax.to(this._takeYourPickGlowGroup, t, { alpha: 1 });
          }),
          (e.prototype.handleTakeYourPickFadeInComplete = function () {
            var e = this._game.gameTweaker.mysteryTexts;
            TweenMax.delayedCall(
              e.takeYourPickDurationMs / 1e3,
              this.fadeInAllWinsText,
              void 0,
              this
            );
          }),
          (e.prototype.fadeInAllWinsText = function () {
            var e =
              this._game.gameTweaker.mysteryTexts.textCrossFadeDurationMs / 1e3;
            TweenMax.to(this._takeYourPickGroup, e, { alpha: 0 }),
              TweenMax.to(this._takeYourPickGlowGroup, e, { alpha: 0 }),
              TweenMax.to(this._allWinsTextGroup, e, {
                alpha: 1,
                onComplete: this.handleAllWinsFadeInComplete(),
                onCompleteScope: this,
              }),
              TweenMax.to(this._allWinsGlowGroup, e, { alpha: 1 });
          }),
          (e.prototype.handleAllWinsFadeInComplete = function () {
            var e = this._game.gameTweaker.mysteryTexts;
            TweenMax.delayedCall(
              e.allWinsDurationMs / 1e3,
              this.fadeInTakeYourPick,
              void 0,
              this
            );
          }),
          (e.prototype.stopAlternatingTween = function () {
            TweenMax.killTweensOf(this._allWinsTextGroup),
              TweenMax.killTweensOf(this._allWinsGlowGroup),
              TweenMax.killTweensOf(this._takeYourPickGroup),
              TweenMax.killTweensOf(this._takeYourPickGlowGroup),
              TweenMax.killDelayedCallsTo(this.fadeInAllWinsText),
              TweenMax.killDelayedCallsTo(this.fadeInTakeYourPick);
          }),
          e
        );
      })();
      e.MysteryInfoTextHelper = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t, i, n, a, o, s, r) {
          var l = e.call(this, t, i, n, a, o, s, r) || this;
          return (
            (l.glows = []),
            (l._renderWebGL = function (e) {
              return l._renderWebGL2(e);
            }),
            l
          );
        }
        return (
          __extends(t, e),
          (t.prototype._renderWebGL2 = function (e) {
            if (this.visible && !(this.alpha <= 0)) {
              if (this._cacheAsBitmap) this._renderCachedSprite(e);
              else {
                var t;
                for (t = 0; t < this.children.length; t++) {
                  this.children[t]._renderWebGL(e);
                }
                for (t = 0; t < this.children.length; t++) {
                  var i = this.glows[t];
                  if (null == i) break;
                  i.displayObjectUpdateTransform(this.children[t]),
                    (i.visible = !0),
                    i._renderWebGL(e),
                    (i.visible = !1);
                }
              }
            }
          }),
          t
        );
      })(Phaser.BitmapText);
      e.GlowingBitmapText = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = (function () {
        function t(e) {
          (this.onBackgroundGlowFadeOutComplete =
            new tk_common.utils.Signal0()),
            (this._game = e);
        }
        return (
          (t.prototype.playBackgroundGlowAnimation = function (e, t) {
            void 0 === t && (t = 1);
            var i = this._game.scene.backgroundGlow;
            if (null != i) {
              if (this._game.scene.backgroundGlow.filters)
                this._game.scene.backgroundGlow.filters[0].glowAmount = t;
              (i.parent.alpha = 1), i.revive(), i.animations.stop(), i.play(e);
            }
          }),
          (t.prototype.playFullscreenGlowAnimation = function (e) {
            var t = this._game.scene;
            null != t.fullscreenGlow &&
              (t.fullscreenGlow.revive(),
              t.fullscreenGlow.animations.stop(),
              t.fullscreenGlow.play(e, 31));
          }),
          (t.prototype.stepFullscreenGlowAnimation = function (e, t) {
            var i = this._game.scene;
            if (null != i.fullscreenGlow) {
              i.fullscreenGlow.revive(), i.fullscreenGlow.animations.stop();
              var n = i.fullscreenGlow.animations._anims[e]._frames[t];
              i.fullscreenGlow.frame = n;
            }
          }),
          (t.prototype.hideFullscreenGlow = function () {
            null != this._game.scene.fullscreenGlow &&
              (this._game.scene.fullscreenGlow.animations.stop(),
              this._game.scene.fullscreenGlow.kill());
          }),
          (t.prototype.fadeBackgroundGlow = function (t) {
            void 0 === t && (t = 100),
              null != this._backgroundGlowFadeTween &&
                this._backgroundGlowFadeTween.stop(!1),
              (this._backgroundGlowFadeTween = e.utils.fadeOut(
                this._game,
                this._game.scene.backgroundGlow.parent,
                t,
                !0
              )).onComplete.addOnce(
                this.handleBackgroundGlowFadeOutComplete,
                this
              );
          }),
          (t.prototype.reorganizeGlowsOnSpinStart = function (e) {
            for (var t = 0; t < 10; t++) {
              this._game.scene.reels
                .getSymbolAt(10 * e + t)
                .moveGlowToSymbolLayer();
            }
          }),
          (t.prototype.reorganizeGlowsOnSpinEnd = function (e) {
            for (var t = 0; t < 3; t++) {
              var i = 3 * e + t,
                n = this._game.scene.reels.getSymbolAtServerIndex(i);
              this._game.scene.stickyWildPresenter.isWildActive(i)
                ? n.turnOffGlow(!0)
                : n.moveGlowToGlowLayer();
            }
          }),
          (t.prototype.reorganizeGlowsOnBonusGameEnd = function () {
            for (var e = 0; e < 50; e++) {
              var t = this._game.scene.reels.getSymbolAt(e);
              t.moveGlowToGlowLayer(), t.turnOffGlow(!1), t.revive(!0);
            }
          }),
          (t.prototype.handleBackgroundGlowFadeOutComplete = function () {
            this.onBackgroundGlowFadeOutComplete.dispatch();
          }),
          t
        );
      })();
      t.GlowManager = i;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = (function () {
        function i(e) {
          var t = this;
          (this.onReelsClicked = new tk_common.utils.Signal1()),
            (this.onRenderReels = new tk_common.utils.Signal0()),
            (this._initialized = !1),
            (this._allNamedElements = {}),
            (this.onUpdate = new tk_common.utils.Signal1()),
            (this.stretchedStarsHolders = []),
            (this.stretchedStars = []),
            (this.fireworksHolders = []),
            (this.ultraWinRings = []),
            (this._resolutionScales = {
              symbols: 0.66,
              symbolGlows: 0.53,
              glows: 0.5,
              expansionFrames: 0.55,
              effects: 0.5,
              common: 0.5,
              pixelAnimations: 1,
              pixels: 1,
            }),
            (this._hasCreatedMysteryDoorGlows = !1),
            (this._hasCreatedStickyWildGlows = !1),
            (this._game = e),
            (this._game.scene = this),
            (this._avsHelper = new tk_common.phaser.AddAnimationValueSupport(
              e
            ));
          var i = !1;
          if (null != window.localStorage)
            try {
              null == window.localStorage.getItem("returningPlayer")
                ? window.localStorage.setItem("returningPlayer", "true")
                : (i = !0);
            } catch (e) {}
          (this._game.returningPlayer = i),
            (window.setSymbolIdsTo = function (e) {
              return t.setSymbolIdsTo(e);
            });
        }
        return (
          (i.prototype.update = function (e) {
            this.onUpdate.dispatch(e);
          }),
          (i.prototype.setSymbolIdsTo = function (e) {
            for (var t = 0; t < 50; t++) {
              var i = this.reels.getSymbolAt(t);
              i.setSymbolId(e), i.updateSymbolPosition();
            }
          }),
          (i.prototype.restoreBonusGame = function (e) {
            var t = this._game,
              i = t.scene,
              n = t.gameTweaker.bonusGame;
            (i.background.tint = n.backgroundTint || 3329299),
              (i.extendedForeground.tint = n.extendedForegroundTint || 3342080),
              (i.bonusGameForeground.visible = !0),
              (i.mainGameForeground.visible = !1),
              i.countUp.setMode(!0),
              i.fullScreenAnimator.clearAllPixels(),
              i.paylineButtonsManager.initializeButtons();
            var a = 3 === e.sue.tc ? 1 : 4 === e.sue.tc ? 3 : 9;
            i.bonusGameInfoTextHelper.showInfoTexts(a);
          }),
          (i.prototype.buildScene = function () {
            var i = this._game.gameTweaker;
            (this._resolutionScales = this._game.initGameData.lowresmode
              ? {
                  symbols: 1 / 0.66,
                  symbolGlows: 1 / 0.53,
                  glows: 2,
                  expansionFrames: 1 / 0.55,
                  effects: 2,
                  common: 2,
                  pixelAnimations: 1,
                  pixels: 1,
                }
              : {
                  symbols: 1,
                  symbolGlows: 1,
                  glows: 1,
                  expansionFrames: 1,
                  effects: 1,
                  common: 1,
                  pixelAnimations: 1,
                  pixels: 1,
                }),
              (this.glowManager = new t.GlowManager(this._game)),
              (this.hitAreaManager = new t.HitAreaManager(this._game)),
              (this.cameraShaker = new e.utils.SceneShaker(this._game)),
              (this.nearWinManager = new t.NearWinManager(this._game)),
              (this.intro = new t.MainGameIntro(this._game)),
              (this._combinedAnimations =
                this._game.cache.getJSON("combinedAnimations")),
              (this.topRoot = this._game.add.group(void 0, "topRoot", !0, !1)),
              (this.topRoot.visible = !1),
              (this.centeringRoot = this._game.add.group(
                this.topRoot,
                "centeringRoot",
                !1,
                !1
              ));
            var n = this.addImage(
              0,
              0,
              "common",
              "background.png",
              this.centeringRoot,
              !0
            );
            (n.tint = i.mainGame.backgroundTint || 1612543),
              (n.name = "gameBackground"),
              (this.background = n),
              this.centralize(n),
              (n.parent.x = 640),
              (n.parent.y = 360),
              (n.scale.x = 1.163),
              (n.scale.y = 1.163),
              (this.layoutRoot = this._game.add.group(
                this.centeringRoot,
                "layoutRoot",
                !1,
                !1
              )),
              (this.mainCameraRoot = this._game.add.group(
                this.layoutRoot,
                "cameraRoot",
                !1,
                !1
              )),
              (this.sceneRoot = this._game.add.group(
                this.mainCameraRoot,
                "sceneRoot",
                !1,
                !1
              )),
              (this.environmentRoot = this._game.add.group(
                this.sceneRoot,
                "environmentRoot",
                !1,
                !1
              ));
            var a = this._game.add.group(
              this.environmentRoot,
              "specialWinEffectsRoot"
            );
            this.createSpecialWinEffects(a),
              this.createBonusGameIntroEffects(this.environmentRoot);
            var o = this._game.add.image(
              640,
              360,
              "common",
              "mainGameReels.png",
              this.environmentRoot
            );
            return (
              (o.anchor.x = 0.5),
              (o.anchor.y = 0.5),
              (o.name = "monoliths"),
              (o.scale.x = this._resolutionScales.common),
              (o.scale.y = this._resolutionScales.common),
              this.createSymbolLayerAndReels(),
              this.createReelTopMask(this.environmentRoot),
              this.createMysteryDoors(this.symbolLayer),
              this.createSymbolGlowLayer(this.environmentRoot),
              this.createBonusGameWilds(this.symbolGlowLayer),
              this.createExpansionFrames(
                this.reels.reels,
                this.symbolGlowLayer
              ),
              this.createNearWinFrames(this.symbolGlowLayer),
              this.createFullScreenAnimator(this.environmentRoot),
              this.createBonusGameForegroundEffects(
                this.environmentRoot,
                this.symbolGlowLayer
              ),
              this.createForeground(),
              this.createPaylineButtons(this.environmentRoot),
              this.createGlowElements(this.symbolGlowLayer),
              this.createFullscreenGlow(this.environmentRoot),
              this.createMysteryWinLabel(this.environmentRoot),
              this.createInfoFieldElements(this.environmentRoot),
              this.createCountUp(),
              (this.idleAnimationManager = new e.IdleAnimationManager(
                this._game
              )),
              (this._initialized = !0),
              this.topRoot
            );
          }),
          (i.prototype.createCountUp = function () {
            var i = this._game.add.group(
              this.mainCameraRoot,
              "countUpHolder",
              !1,
              !1
            );
            (i.x = 640), (i.y = 550);
            var n = this.addImage(0, 0, "effects", "sentinelBeam.png", i, !0);
            (n.anchor.x = 0.5),
              (n.anchor.y = 1),
              (n.blendMode = PIXI.blendModes.ADD),
              (n.name = "sentinelBeam"),
              (this._allNamedElements[n.name] = n);
            var a = new t.GlowingBitmapText(
              this._game,
              0,
              0,
              "sentinelMainGame",
              "0.00",
              72,
              void 0
            );
            i.add(a);
            var o = new t.GlowingBitmapText(
              this._game,
              0,
              0,
              "sentinelBonusGame",
              "0.00",
              72,
              void 0
            );
            i.add(o);
            for (var s = [], r = 0; r < 15; r++) {
              var l = this.createCountUpGlowImage(i);
              a.glows.push(l), o.glows.push(l), s.push(l);
            }
            (this.countUp = new e.view.CountUp(this._game, a, o, n, i, s)),
              this.countUp.update(),
              this.countUp.setMode(!1),
              (this.countUp.visible = !1);
          }),
          (i.prototype.createCountUpGlowImage = function (e) {
            var t = this.addImage(
              0,
              0,
              "effects",
              "sentinelMainGameDotGlow.png",
              e,
              !0
            );
            return (
              (t.anchor.x = 0.5),
              (t.anchor.y = 1),
              (t.blendMode = PIXI.blendModes.ADD),
              (t.alpha = 0.95),
              (t.visible = !1),
              TweenMax.to(t, 0.1, { alpha: 1, repeat: -1, yoyo: !0 }),
              t
            );
          }),
          (i.prototype.createExpansionFrame = function (t, i, n) {
            var a = this._game.add.sprite(0, 0, "expansionFrames", void 0, n);
            return (
              tk_common.phaser.addHandleVisibilityMixin(a, !0),
              new e.view.ExpansionFrame(a, i, n)
            );
          }),
          (i.prototype.createFullScreenAnimator = function (e) {
            (this._game.scene.fullScreenAnimator = new t.FullscreenAnimator(
              this._game
            )),
              this._game.scene.fullScreenAnimator.buildPixels(e, !0);
          }),
          (i.prototype.createFullscreenGlow = function (e) {
            var t;
            ((this.fullscreenGlow = this.addSprite(
              0,
              0,
              "glows",
              void 0,
              e,
              !0
            )),
            (this.fullscreenGlow.width = 1280 / this._resolutionScales.glows),
            (this.fullscreenGlow.height = 720 / this._resolutionScales.glows),
            (this.fullscreenGlow.blendMode = PIXI.blendModes.SCREEN),
            !1 === this._game.returningPlayer)
              ? ((t = [
                  (t = Phaser.Animation.generateFrameNames(
                    "alternativeBootSequence_",
                    0,
                    68,
                    ".png"
                  ))[0],
                ].concat(t)),
                this.fullscreenGlow.animations.add("Intro_BootSequence", t))
              : ((t = [
                  (t = Phaser.Animation.generateFrameNames(
                    "alternativeBootSequenceWB_",
                    0,
                    100,
                    ".png"
                  ))[0],
                ].concat(t)),
                this.fullscreenGlow.animations.add("Intro_BootSequence", t));
            this.fullscreenGlow.animations.add(
              "bigWin",
              Phaser.Animation.generateFrameNames("bigWin_", 0, 149, ".png")
            ),
              this.fullscreenGlow.animations.add(
                "megaWin",
                Phaser.Animation.generateFrameNames("megaWin_", 0, 179, ".png")
              ),
              this.fullscreenGlow.animations.add(
                "ultraWin",
                Phaser.Animation.generateFrameNames("ultraWin_", 0, 209, ".png")
              ),
              this.fullscreenGlow.animations.add(
                "nice",
                Phaser.Animation.generateFrameNames("miniWin_", 0, 23, ".png")
              ),
              this.fullscreenGlow.animations.add(
                "great",
                Phaser.Animation.generateFrameNames("smallWin_", 0, 23, ".png")
              ),
              this.fullscreenGlow.animations.add(
                "awesome",
                Phaser.Animation.generateFrameNames("mediumWin_", 0, 27, ".png")
              ),
              this.fullscreenGlow.animations.add(
                "MysteryGameIntro",
                Phaser.Animation.generateFrameNames(
                  "mysteryIntro_",
                  0,
                  85,
                  ".png"
                )
              ),
              this.fullscreenGlow.animations.add(
                "MysteryGameOutro",
                Phaser.Animation.generateFrameNames(
                  "mysteryOutro_",
                  0,
                  24,
                  ".png"
                )
              ),
              this.fullscreenGlow.animations.add(
                "BonusGameIntro",
                Phaser.Animation.generateFrameNames(
                  "bonusIntro_",
                  0,
                  63,
                  ".png"
                )
              ),
              this.fullscreenGlow.animations.add(
                "BonusGameOutro",
                Phaser.Animation.generateFrameNames(
                  "bonusOutro_",
                  0,
                  124,
                  ".png"
                )
              );
          }),
          (i.prototype.createBonusGameWilds = function (i) {
            for (var n = [], a = 0; a < 3; a++)
              for (var o = 0; o < 3; o++) {
                var s = t.StickyWild.createStickyWild(
                  this._game.add,
                  o + 1,
                  a + 5,
                  i
                );
                n[3 * a + o] = s;
              }
            var r = new e.view.StickyWildPresenter(this._game, n);
            this.stickyWildPresenter = r;
          }),
          (i.prototype.createMysteryDoors = function (e) {
            this.mysteryDoors = [];
            for (var i = 0; i < 5; i++)
              for (var n = 0; n < 3; n++) {
                var a = 5 * n + i,
                  o = this.addSprite(
                    0,
                    0,
                    "symbols",
                    "mysteryDoorReveal0.png",
                    this.symbolLayer,
                    !1
                  );
                o.animations.add(
                  "mysteryDoorReveal",
                  Phaser.Animation.generateFrameNames(
                    "mysteryDoorReveal",
                    0,
                    9,
                    ".png"
                  ),
                  20,
                  !1
                ),
                  o.animations.add(
                    "mysteryDoorRevealNotPicked",
                    Phaser.Animation.generateFrameNames(
                      "mysteryDoorRevealNotPicked",
                      0,
                      9,
                      ".png"
                    ),
                    20,
                    !1
                  ),
                  o.animations.add(
                    "mysteryDoorPicked",
                    Phaser.Animation.generateFrameNames(
                      "mysteryDoorReveal",
                      0,
                      1,
                      ".png"
                    ),
                    20,
                    !0
                  ),
                  o.animations.add(
                    "mysteryDoorWin1",
                    Phaser.Animation.generateFrameNames(
                      "mysteryDoorWin1_",
                      0,
                      8,
                      ".png"
                    ),
                    20,
                    !1
                  ),
                  o.animations.add(
                    "mysteryDoorWin2",
                    Phaser.Animation.generateFrameNames(
                      "mysteryDoorWin2_",
                      0,
                      8,
                      ".png"
                    ),
                    20,
                    !1
                  ),
                  o.animations.add(
                    "mysteryDoorWin3",
                    Phaser.Animation.generateFrameNames(
                      "mysteryDoorWin3_",
                      0,
                      8,
                      ".png"
                    ),
                    20,
                    !1
                  ),
                  o.animations.add(
                    "mysteryDoorWin4",
                    Phaser.Animation.generateFrameNames(
                      "mysteryDoorWin4_",
                      0,
                      9,
                      ".png"
                    ),
                    20,
                    !1
                  ),
                  (o.visible = !1);
                var s = new t.MysteryDoor(a, i, n, o, e);
                this.mysteryDoors[a] = s;
                var r = "mysteryDoorHitArea" + a;
                this.hitAreaManager.registerHitArea(
                  r,
                  s.sprite.hitArea,
                  tk_common.utils.createSafeClosure(
                    this._game.gameInstanceId,
                    s,
                    s.clicked
                  )
                ),
                  this.hitAreaManager.deactivateHitArea(r);
              }
          }),
          (i.prototype.createUltraWinRings = function (e) {
            var t = this._game.add.group(e),
              i = this.addSprite(0, 0, "effects", "ultraWinPattern.png", t, !0);
            this._avsHelper.addSupportToSingleFrameSprite(
              [
                {
                  animId: "ultraWinPattern",
                  frameValues:
                    this._combinedAnimations["ultraWinPatternAnimation.json"],
                  frameName: "ultraWinPattern.png",
                  frameRate: 60,
                  translateParent: !0,
                },
              ],
              i
            ),
              (i.parent.x = 440),
              (i.parent.y = 300),
              (i.visible = !1),
              (i.blendMode = PIXI.blendModes.ADD),
              this.centralize(i),
              tk_common.phaser.addHandleVisibilityMixin(i),
              (this.ultraWinRings[0] = i),
              (i = this.addSprite(
                0,
                0,
                "effects",
                "ultraWinPattern.png",
                t,
                !0
              )),
              this._avsHelper.addSupportToSingleFrameSprite(
                [
                  {
                    animId: "ultraWinPattern",
                    frameValues:
                      this._combinedAnimations["ultraWinPatternAnimation.json"],
                    frameName: "ultraWinPattern.png",
                    frameRate: 60,
                  },
                ],
                i
              ),
              (i.parent.x = 840),
              (i.parent.y = 300),
              (i.visible = !1),
              (i.blendMode = PIXI.blendModes.ADD),
              this.centralize(i),
              tk_common.phaser.addHandleVisibilityMixin(i),
              (this.ultraWinRings[1] = i);
          }),
          (i.prototype.createSpecialWinEffects = function (e) {
            this.createUltraWinRings(e),
              this.createStretchedStars(e),
              this.createBackgroundGlow(e),
              this.createFireWorks(e);
          }),
          (i.prototype.centralize = function (e) {
            e.anchor.x = e.anchor.y = 0.5;
          }),
          (i.prototype.centralizeDown = function (e) {
            (e.anchor.x = 0.5), (e.anchor.y = 1);
          }),
          (i.prototype.createStretchedStars = function (e) {
            var t = this._game.add.group(e, "starsHolder", !1, !1);
            tk_common.utils.copyProperties(t, { x: 640, y: 560 }),
              (this.starsHolder = t),
              (this.stretchedStarsHolders[0] = this._game.add.group(
                t,
                "stretchedStarsHolder0",
                !1,
                !1
              ));
            var i = this._game.add.sprite(
              0,
              0,
              "effects",
              "stretchStarParticleBlue.png",
              this.stretchedStarsHolders[0]
            );
            this.stretchedStars.push(i),
              this.centralize(i),
              tk_common.utils.copyProperties(this.stretchedStarsHolders[0], {
                angle: -20,
              }),
              (i.blendMode = PIXI.blendModes.ADD),
              (this.stretchedStarsHolders[1] = this._game.add.group(
                t,
                "stretchedStarsHolder1",
                !1,
                !1
              ));
            i = this._game.add.sprite(
              0,
              0,
              "effects",
              "stretchStarParticleBlue.png",
              this.stretchedStarsHolders[1]
            );
            this.stretchedStars.push(i),
              this.centralize(i),
              tk_common.utils.copyProperties(this.stretchedStarsHolders[1], {
                angle: -34,
              }),
              (i.blendMode = PIXI.blendModes.ADD),
              (this.stretchedStarsHolders[2] = this._game.add.group(
                t,
                "stretchedStarsHolder2",
                !1,
                !1
              ));
            i = this._game.add.sprite(
              0,
              0,
              "effects",
              "stretchStarParticleBlue.png",
              this.stretchedStarsHolders[2]
            );
            this.stretchedStars.push(i),
              this.centralize(i),
              tk_common.utils.copyProperties(this.stretchedStarsHolders[2], {
                angle: -48,
              }),
              (i.blendMode = PIXI.blendModes.ADD),
              (this.stretchedStarsHolders[3] = this._game.add.group(
                t,
                "stretchedStarsHolder3",
                !1,
                !1
              ));
            i = this._game.add.sprite(
              0,
              0,
              "effects",
              "stretchStarParticleBlue.png",
              this.stretchedStarsHolders[3]
            );
            this.stretchedStars.push(i),
              this.centralize(i),
              tk_common.utils.copyProperties(this.stretchedStarsHolders[3], {
                angle: -62,
              }),
              (i.blendMode = PIXI.blendModes.ADD),
              (this.stretchedStarsHolders[4] = this._game.add.group(
                t,
                "stretchedStarsHolder4",
                !1,
                !1
              ));
            i = this._game.add.sprite(
              0,
              0,
              "effects",
              "stretchStarParticleBlue.png",
              this.stretchedStarsHolders[4]
            );
            this.stretchedStars.push(i),
              this.centralize(i),
              tk_common.utils.copyProperties(this.stretchedStarsHolders[4], {
                angle: -76,
              }),
              (i.blendMode = PIXI.blendModes.ADD),
              (this.stretchedStarsHolders[5] = this._game.add.group(
                t,
                "stretchedStarsHolder5",
                !1,
                !1
              ));
            i = this._game.add.sprite(
              0,
              0,
              "effects",
              "stretchStarParticleBlue.png",
              this.stretchedStarsHolders[5]
            );
            this.stretchedStars.push(i),
              this.centralize(i),
              tk_common.utils.copyProperties(this.stretchedStarsHolders[5], {
                angle: -90,
              }),
              (i.blendMode = PIXI.blendModes.ADD),
              (this.stretchedStarsHolders[6] = this._game.add.group(
                t,
                "stretchedStarsHolder6",
                !1,
                !1
              ));
            i = this._game.add.sprite(
              0,
              0,
              "effects",
              "stretchStarParticleBlue.png",
              this.stretchedStarsHolders[6]
            );
            this.stretchedStars.push(i),
              this.centralize(i),
              tk_common.utils.copyProperties(this.stretchedStarsHolders[6], {
                angle: -104,
              }),
              (i.blendMode = PIXI.blendModes.ADD),
              (this.stretchedStarsHolders[7] = this._game.add.group(
                t,
                "stretchedStarsHolder7",
                !1,
                !1
              ));
            i = this._game.add.sprite(
              0,
              0,
              "effects",
              "stretchStarParticleBlue.png",
              this.stretchedStarsHolders[7]
            );
            this.stretchedStars.push(i),
              this.centralize(i),
              tk_common.utils.copyProperties(this.stretchedStarsHolders[7], {
                angle: -118,
              }),
              (i.blendMode = PIXI.blendModes.ADD),
              (this.stretchedStarsHolders[8] = this._game.add.group(
                t,
                "stretchedStarsHolder8",
                !1,
                !1
              ));
            i = this._game.add.sprite(
              0,
              0,
              "effects",
              "stretchStarParticleBlue.png",
              this.stretchedStarsHolders[8]
            );
            this.stretchedStars.push(i),
              this.centralize(i),
              tk_common.utils.copyProperties(this.stretchedStarsHolders[8], {
                angle: -132,
              }),
              (i.blendMode = PIXI.blendModes.ADD),
              (this.stretchedStarsHolders[9] = this._game.add.group(
                t,
                "stretchedStarsHolder9",
                !1,
                !1
              ));
            i = this._game.add.sprite(
              0,
              0,
              "effects",
              "stretchStarParticleBlue.png",
              this.stretchedStarsHolders[9]
            );
            this.stretchedStars.push(i),
              this.centralize(i),
              tk_common.utils.copyProperties(this.stretchedStarsHolders[9], {
                angle: -146,
              }),
              (i.blendMode = PIXI.blendModes.ADD),
              (this.stretchedStarsHolders[10] = this._game.add.group(
                t,
                "stretchedStarsHolder10",
                !1,
                !1
              ));
            i = this._game.add.sprite(
              0,
              0,
              "effects",
              "stretchStarParticleBlue.png",
              this.stretchedStarsHolders[10]
            );
            this.stretchedStars.push(i),
              this.centralize(i),
              tk_common.utils.copyProperties(this.stretchedStarsHolders[10], {
                angle: -160,
              }),
              (i.blendMode = PIXI.blendModes.ADD);
          }),
          (i.prototype.createFireWorks = function (n) {
            (i.BIG_WIN_FIREWORK_POSITIONS =
              this._game.gameTweaker.fireworks.positions.bigWin),
              (i.MEGA_WIN_FIREWORK_POSITIONS =
                this._game.gameTweaker.fireworks.positions.megaWin),
              (i.ULTRA_WIN_FIREWORK_POSITIONS =
                this._game.gameTweaker.fireworks.positions.ultraWin),
              (i.COMMON_FIREWORK_POSITIONS =
                this._game.gameTweaker.fireworks.positions.common),
              (i.BIG_WIN_FIREWORK_TRIGGER_DELAYS =
                this._game.gameTweaker.fireworks.delaysMs.bigWin),
              (i.MEGA_WIN_FIREWORK_TRIGGER_DELAYS =
                this._game.gameTweaker.fireworks.delaysMs.megaWin),
              (i.ULTRA_WIN_FIREWORK_TRIGGER_DELAYS =
                this._game.gameTweaker.fireworks.delaysMs.ultraWin),
              (i.COMMON_FIREWORK_TRIGGER_DELAYS =
                this._game.gameTweaker.fireworks.delaysMs.common);
            for (
              var a = this._game.add.group(n, "fireWorksHolder", !1, !1),
                o = [],
                s = 0;
              s < 8;
              s++
            ) {
              var r = this.createSingleFireworkEffect(a),
                l = new t.FireworkEffect(this._game, r, this._avsHelper);
              o.push(l);
            }
            (this.fireworksHolders = o),
              (this.fireworksManager = new e.view.FireworksManager(this._game));
          }),
          (i.prototype.createSingleFireworkEffect = function (e) {
            var t = this._combinedAnimations,
              i = {},
              n = this._game.add.group(e, "holder", !1, !1);
            (i.effectsHolder = n),
              (i.effectsHolder.visible = !1),
              (n = this._game.add.group(n, "subholder", !1, !1));
            var a = this.addSprite(
              0,
              0,
              "effects",
              "commonFireworkBlue.png",
              n,
              !0
            );
            this._avsHelper.addSupportToSingleFrameSprite(
              [
                {
                  animId: "commonFireworkAnimationBlue",
                  frameValues: t["commonFireworkBlueAnimation.json"],
                  frameName: "commonFireworkBlue.png",
                  translateParent: !0,
                },
                {
                  animId: "bigWinFireworkAnimation",
                  frameValues: t["bigWinFireworkAnimation.json"],
                  frameName: "commonFireworkBlue.png",
                  translateParent: !0,
                },
                {
                  animId: "megaWinFireworkAnimation",
                  frameValues: t["megaWinFireworkAnimation.json"],
                  frameName: "commonFireworkRed.png",
                  translateParent: !0,
                },
                {
                  animId: "ultraWinFireworkAnimation",
                  frameValues: t["ultraWinFireworkAnimation.json"],
                  frameName: "ultraWinFirework.png",
                  translateParent: !0,
                },
                {
                  animId: "bonusOutroFireworkAnimation",
                  frameValues: t["commonFireworkBlueAnimation.json"],
                  frameName: "commonFireworkGreen.png",
                  translateParent: !0,
                },
              ],
              a
            ),
              tk_common.phaser.addHandleVisibilityMixin(a),
              (a.blendMode = PIXI.blendModes.ADD),
              (a.anchor.x = a.anchor.y = 0.5),
              (a.visible = !1),
              (i.effect1 = a),
              (a = this.addSprite(
                0,
                0,
                "effects",
                "commonFireworkBlue.png",
                n,
                !0
              )),
              this._avsHelper.addSupportToSingleFrameSprite(
                [
                  {
                    animId: "commonFireworkAnimationRed",
                    frameValues: t["commonFireworkBlueAnimation.json"],
                    frameName: "commonFireworkRed.png",
                    translateParent: !0,
                  },
                  {
                    animId: "bigWinFlareAnimation",
                    frameValues: t["bigWinFireworkFlareAnimation.json"],
                    frameName: "winGlowBlue.png",
                    translateParent: !0,
                  },
                  {
                    animId: "megaWinFlareAnimation",
                    frameValues: t["megaWinFireworkFlareAnimation.json"],
                    frameName: "winGlowRed.png",
                    translateParent: !0,
                  },
                  {
                    animId: "ultraWinFlareAnimation",
                    frameValues: t["ultraWinFireworkFlareAnimation.json"],
                    frameName: "winGlowYellow.png",
                    translateParent: !0,
                  },
                  {
                    animId: "bonusOutroFireworkAnimation",
                    frameValues: t["commonFireworkBlueAnimation.json"],
                    frameName: "commonFireworkGreen.png",
                    translateParent: !0,
                  },
                ],
                a
              ),
              tk_common.phaser.addHandleVisibilityMixin(a),
              (a.blendMode = PIXI.blendModes.ADD),
              (a.anchor.x = a.anchor.y = 0.5),
              (a.visible = !1),
              (i.effect2 = a),
              (i.trails = []);
            for (var o = 0; o < 3; o++) {
              var s = this.addSprite(
                0,
                0,
                "effects",
                "MegaWinFireWorkTrail0.png",
                n,
                !0
              );
              s.animations.add(
                "megaWinFireworkTrailAnimation",
                Phaser.Animation.generateFrameNames(
                  "MegaWinFireWorkTrail",
                  0,
                  25,
                  ".png"
                )
              ),
                (s.anchor.x = 0),
                (s.anchor.y = 0),
                (s.visible = !1),
                (s.blendMode = PIXI.blendModes.ADD),
                tk_common.phaser.addHandleVisibilityMixin(s),
                i.trails.push(s);
            }
            (a = this._game.add.sprite(
              0,
              0,
              "effects",
              "commonFireworkBlue.png",
              n
            )),
              this._avsHelper.addSupportToSingleFrameSprite(
                [
                  {
                    animId: "commonFireworkAnimationGreen",
                    frameValues: t["commonFireworkGreenAnimation.json"],
                    frameName: "commonFireworkGreen.png",
                    translateParent: !0,
                  },
                  {
                    animId: "bigWinFireworkWaveAnimation",
                    frameValues: t["bigWinFireworkWaveAnimation.json"],
                    frameName: "BigWinWave.png",
                    translateParent: !0,
                  },
                  {
                    animId: "bonusOutroFireworkAnimation",
                    frameValues: t["commonFireworkBlueAnimation.json"],
                    frameName: "commonFireworkGreen.png",
                    translateParent: !0,
                  },
                ],
                a
              ),
              tk_common.phaser.addHandleVisibilityMixin(a),
              (a.blendMode = PIXI.blendModes.ADD),
              (a.anchor.x = a.anchor.y = 0.5),
              (a.visible = !1),
              (i.effect3 = a),
              (i.coins = []);
            for (o = 0; o < 16; o++) {
              var r = this.addSprite(0, 0, "effects", "coin1.png", n, !0);
              r.animations.add(
                "ultraWinCoinAnimation",
                Phaser.Animation.generateFrameNames("coin", 1, 31, ".png")
              ),
                this._avsHelper.createUpdater(
                  "ultraWinCoinAnimation",
                  t["coinAnimation.json"],
                  !1
                ),
                this._avsHelper.addSupportToSprite(
                  "ultraWinCoinAnimation",
                  r,
                  "ultraWinCoinAnimation"
                ),
                tk_common.phaser.addHandleVisibilityMixin(r),
                (r.visible = !1),
                (r.blendMode = PIXI.blendModes.ADD),
                tk_common.phaser.addHandleVisibilityMixin(r, !1),
                i.coins.push(r);
            }
            return i;
          }),
          (i.prototype.createPaylineButtons = function (e) {
            var i = this._game.add.group(e, "payLineButtonGroup", !1);
            this.allPaylineButtons = [];
            var n = this._game.add.group(i, "rightGroup", !1);
            (n.x = 1039), (n.y = 132);
            var a = this._game.add.image(
              0,
              0,
              "common",
              "payLineButton12.png",
              n
            );
            (a.blendMode = PIXI.blendModes.ADD),
              (a.tint = 927288),
              (this.allPaylineButtons[11] = a),
              this.applyResolutionScale(a),
              ((a = this._game.add.image(
                8,
                46,
                "common",
                "payLineButton11.png",
                n
              )).blendMode = PIXI.blendModes.ADD),
              (a.tint = 927288),
              (this.allPaylineButtons[10] = a),
              this.applyResolutionScale(a),
              ((a = this._game.add.image(
                17,
                94,
                "common",
                "payLineButton14.png",
                n
              )).blendMode = PIXI.blendModes.ADD),
              (a.tint = 927288),
              (this.allPaylineButtons[13] = a),
              this.applyResolutionScale(a),
              ((a = this._game.add.image(
                24,
                143,
                "common",
                "payLineButton15.png",
                n
              )).blendMode = PIXI.blendModes.ADD),
              (a.tint = 927288),
              (this.allPaylineButtons[14] = a),
              this.applyResolutionScale(a),
              ((a = this._game.add.image(
                35,
                196,
                "common",
                "payLineButton10.png",
                n
              )).blendMode = PIXI.blendModes.ADD),
              (a.tint = 927288),
              (this.allPaylineButtons[9] = a),
              this.applyResolutionScale(a),
              ((a = this._game.add.image(
                44,
                250,
                "common",
                "payLineButton9.png",
                n
              )).blendMode = PIXI.blendModes.ADD),
              (a.tint = 927288),
              (this.allPaylineButtons[8] = a),
              this.applyResolutionScale(a),
              ((a = this._game.add.image(
                54,
                306,
                "common",
                "payLineButton13.png",
                n
              )).blendMode = PIXI.blendModes.ADD),
              (a.tint = 927288),
              (this.allPaylineButtons[12] = a),
              this.applyResolutionScale(a);
            var o = this._game.add.group(i, "leftGroup", !1);
            (o.x = 131),
              (o.y = 104),
              ((a = this._game.add.image(
                70,
                0,
                "common",
                "payLineButton2.png",
                o
              )).blendMode = PIXI.blendModes.ADD),
              (a.tint = 927288),
              (this.allPaylineButtons[1] = a),
              this.applyResolutionScale(a),
              ((a = this._game.add.image(
                61,
                44,
                "common",
                "payLineButton6.png",
                o
              )).blendMode = PIXI.blendModes.ADD),
              (a.tint = 927288),
              (this.allPaylineButtons[5] = a),
              this.applyResolutionScale(a),
              ((a = this._game.add.image(
                52,
                91,
                "common",
                "payLineButton8.png",
                o
              )).blendMode = PIXI.blendModes.ADD),
              (a.tint = 927288),
              (this.allPaylineButtons[7] = a),
              this.applyResolutionScale(a),
              ((a = this._game.add.image(
                42,
                139,
                "common",
                "payLineButton4.png",
                o
              )).blendMode = PIXI.blendModes.ADD),
              (a.tint = 927288),
              (this.allPaylineButtons[3] = a),
              this.applyResolutionScale(a),
              ((a = this._game.add.image(
                33,
                190,
                "common",
                "payLineButton1.png",
                o
              )).blendMode = PIXI.blendModes.ADD),
              (a.tint = 927288),
              (this.allPaylineButtons[0] = a),
              this.applyResolutionScale(a),
              ((a = this._game.add.image(
                22,
                242,
                "common",
                "payLineButton5.png",
                o
              )).blendMode = PIXI.blendModes.ADD),
              (a.tint = 927288),
              (this.allPaylineButtons[4] = a),
              this.applyResolutionScale(a),
              ((a = this._game.add.image(
                11,
                298,
                "common",
                "payLineButton7.png",
                o
              )).blendMode = PIXI.blendModes.ADD),
              (a.tint = 927288),
              (this.allPaylineButtons[6] = a),
              this.applyResolutionScale(a),
              ((a = this._game.add.image(
                -1,
                355,
                "common",
                "payLineButton3.png",
                o
              )).blendMode = PIXI.blendModes.ADD),
              (a.tint = 927288),
              (this.allPaylineButtons[2] = a),
              this.applyResolutionScale(a),
              (this.paylineButtonsManager = new t.PayLineButtonsManager(
                this._game
              )),
              this.paylineButtonsManager.hidePaylineButtons();
          }),
          (i.prototype.createReelTopMask = function (e) {
            (this.monolithTopMask = this._game.add.image(
              640,
              0,
              "common",
              "reelsMaskTop.png",
              e
            )),
              (this.monolithTopMask.anchor.x = 0.5),
              (this.monolithTopMask.y = 56),
              this.applyResolutionScale(this.monolithTopMask);
          }),
          (i.prototype.createInfoFieldElements = function (e) {
            var i = this._game.add.group(e, "infoFieldGroup");
            (i.x = 640),
              (i.y = 0),
              (i.visible = !1),
              (this.infoFieldGroup = i),
              (this.takeYourPickGroup = this._game.add.group(
                i,
                "takeYourPickGroup"
              )),
              (this.takeYourPickGroup.x = 0);
            var n = this.addImage(
              0,
              0,
              "common",
              "takeYourPick.png",
              this.takeYourPickGroup,
              !0
            );
            this.centralize(n);
            var a = n;
            (n = this.addImage(
              0,
              0,
              "common",
              "takeYourPickArrow.png",
              this.takeYourPickGroup,
              !0
            )),
              this.centralize(n),
              (n.parent.x = -250);
            var o = n;
            (n = this.addImage(
              0,
              0,
              "common",
              "takeYourPickArrow.png",
              this.takeYourPickGroup,
              !0
            )),
              this.centralize(n),
              (n.parent.x = 242);
            var s = n;
            (this.takeYourPickGroup.visible = !1),
              (this.allWinsTexts = this._game.add.group(
                i,
                "allWinsTexts",
                !1,
                !1
              )),
              (this.allWinsText = this.addImage(
                0,
                0,
                "common",
                "allWinsBonusGame.png",
                this.allWinsTexts,
                !0
              )),
              this.centralize(this.allWinsText),
              (this.multiplierText = this.addImage(
                0,
                0,
                "common",
                "multiplierX3.png",
                this.allWinsTexts,
                !0
              )),
              this.centralize(this.multiplierText),
              (this.allWinsText.visible = !1),
              (this.multiplierText.visible = !1);
            var r = this._game.add.group(i, "infoTextGlows", !1, !1),
              l = this._game.add.group(r, "takeYourPickGlowGroup", !1, !1),
              m = this.addImage(0, 0, "effects", "takeYourPickGlow.png", l, !0);
            (m.blendMode = PIXI.blendModes.ADD),
              (m.parent.x = a.parent.x),
              this.centralize(m),
              (a.glow = m),
              (m = this.addImage(
                0,
                0,
                "effects",
                "takeYourPickArrowGlow.png",
                l,
                !0
              )),
              this.centralize(m),
              (m.parent.x = o.parent.x),
              (m.blendMode = PIXI.blendModes.ADD),
              (o.glow = m),
              (m = this.addImage(
                0,
                0,
                "effects",
                "takeYourPickArrowGlow.png",
                l,
                !0
              )),
              this.centralize(m),
              (m.parent.x = s.parent.x),
              (m.blendMode = PIXI.blendModes.ADD),
              (s.glow = m),
              (this.allWinsTextGlows = this._game.add.group(
                this.infoFieldGroup,
                "allWinsGlowTextGroup",
                !1,
                !1
              )),
              ((m = this.addImage(
                0,
                0,
                "effects",
                "allWinsBonusGameGlow.png",
                this.allWinsTextGlows,
                !0
              )).blendMode = PIXI.blendModes.ADD),
              (m.parent.x = -40),
              this.centralize(m),
              (this.allWinsText.glow = m),
              (this.allWinsText.parent.x = -40),
              ((m = this.addImage(
                0,
                0,
                "effects",
                "multiplierX2Glow.png",
                this.allWinsTextGlows,
                !0
              )).blendMode = PIXI.blendModes.ADD),
              (m.parent.x = 120),
              this.centralize(m),
              (this.multiplierText.glow = m),
              (this.multiplierText.parent.x = 120),
              (this.takeYourPickText = a),
              (this.leftArrow = o),
              (this.rightArrow = s),
              (this.takeYourPickGlowGroup = l),
              (this.mysteryInfoTextHelper = new t.MysteryInfoTextHelper(
                this._game
              )),
              (this.bonusGameInfoTextHelper = new t.BonusGameInfoFieldHelper(
                this._game
              ));
          }),
          (i.prototype.createForeground = function () {
            ((e = this._game.add.image(
              0,
              0,
              "common",
              "mainGameForeground.png",
              this.environmentRoot
            )).y = 483),
              (e.name = "mainGameForeground"),
              (this.mainGameForeground = e),
              (e.anchor.x = 0.5),
              (e.x = 640),
              this.applyResolutionScale(e),
              ((e = this._game.add.image(
                0,
                0,
                "common",
                "bonusGameForeground.png",
                this.environmentRoot
              )).y = 483),
              (e.name = "bonusGameForeground"),
              (this.bonusGameForeground = e),
              (e.anchor.x = 0.5),
              (e.x = 640),
              (e.visible = !1),
              this.applyResolutionScale(e),
              (e.visible = !1);
            var e,
              t = (e.y = 483);
            ((e = this._game.add.image(
              0,
              0,
              "common",
              "extendedForeground.png",
              this.environmentRoot
            )).y = t + 160),
              (e.anchor.x = 0.5),
              (e.anchor.y = 0),
              (e.scale.x = e.scale.y = 2),
              (e.x = 640),
              (e.name = "extendedForeground"),
              (e.tint = 43263),
              this.applyResolutionScale(e),
              (this.extendedForeground = e);
          }),
          (i.prototype.hideSymbols = function () {
            for (var e = 0; e < 50; e++) {
              this.reels.getSymbolAt(e).kill();
            }
          }),
          (i.prototype.showSymbols = function (e) {
            void 0 === e && (e = !0);
            for (var t = 0; t < 50; t++) {
              this.reels.getSymbolAt(t).revive(e);
            }
          }),
          (i.prototype.createSymbolLayerAndReels = function () {
            t.ReelMatrixes.init(),
              (this.reels = new e.view.AstronautReels(
                this._game,
                this.environmentRoot
              )),
              (this.symbolLayer = new t.SymbolLayerSpriteBatch(
                this._game,
                this.environmentRoot,
                "symbolLayer",
                !1
              )),
              (this.symbolLayer.matrix = t.ReelMatrixes.OP);
            for (var i = [], n = 0; n < 5; n++)
              for (var a = 0; a < 10; a++) {
                var o = t.SymbolFactory.createSymbol(
                  this._game.add,
                  0,
                  n,
                  a,
                  this.symbolLayer
                );
                i.push(o);
              }
            this.reels.buildReels(i);
          }),
          (i.prototype.createExpansionFrames = function (e, t) {
            for (var i = 0; i < 5; i++) {
              var n = e[i];
              this.createExpansionFrame(i, n, t);
            }
          }),
          (i.prototype.createBonusGameIntroEffects = function (e) {
            this.meteorites = [];
            for (
              var i = this._combinedAnimations,
                n = this._game.add.group(e, "bgIntroEffects", !1),
                a = [],
                o = [],
                s = 0;
              s < 6;
              s++
            ) {
              var r = this.addSprite(0, 0, "effects", "meteorite.png", n, !0);
              a[s] = r;
            }
            for (s = 0; s < 3; s++) {
              var l = this.addSprite(
                0,
                0,
                "effects",
                "meteoriteImpactGlow.png",
                n,
                !0
              );
              this.centralize(l), (o[s] = l);
            }
            ((r = a[(s = 0)]).blendMode = PIXI.blendModes.ADD),
              this.centralize(r),
              this._avsHelper.addSupportToSingleFrameSprite(
                [
                  {
                    animId: "hitAnimation1",
                    frameValues: i["bonusGameIntroMeteorite1Animation.json"],
                    frameName: "meteorite.png",
                    frameRate: 60,
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                ],
                r
              ),
              ((l = o[s++]).blendMode = PIXI.blendModes.ADD),
              this._avsHelper.addSupportToSingleFrameSprite(
                [
                  {
                    animId: "hitAnimation1_Impact",
                    frameValues:
                      i["bonusGameIntroMeteoriteImpactGlow1Animation.json"],
                    frameName: "meteoriteImpactGlow.png",
                    frameRate: 60,
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                ],
                l
              );
            var m = new t.Meteorite(
              this._game,
              r,
              "hitAnimation1",
              l,
              "hitAnimation1_Impact"
            );
            this.meteorites.push(m),
              ((r = a[s]).blendMode = PIXI.blendModes.ADD),
              this.centralize(r),
              this._avsHelper.addSupportToSingleFrameSprite(
                [
                  {
                    animId: "hitAnimation2",
                    frameValues: i["bonusGameIntroMeteorite2Animation.json"],
                    frameName: "meteorite.png",
                    frameRate: 60,
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                ],
                r
              ),
              ((l = o[s++]).blendMode = PIXI.blendModes.ADD),
              this._avsHelper.addSupportToSingleFrameSprite(
                [
                  {
                    animId: "hitAnimation2_Impact",
                    frameValues:
                      i["bonusGameIntroMeteoriteImpactGlow2Animation.json"],
                    frameName: "meteoriteImpactGlow.png",
                    frameRate: 60,
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                ],
                l
              );
            m = new t.Meteorite(
              this._game,
              r,
              "hitAnimation2",
              l,
              "hitAnimation2_Impact"
            );
            this.meteorites.push(m),
              ((r = a[s]).blendMode = PIXI.blendModes.ADD),
              this.centralize(r),
              this._avsHelper.addSupportToSingleFrameSprite(
                [
                  {
                    animId: "hitAnimation3",
                    frameValues: i["bonusGameIntroMeteorite3Animation.json"],
                    frameName: "meteorite.png",
                    frameRate: 60,
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                ],
                r
              ),
              ((l = o[s++]).blendMode = PIXI.blendModes.ADD),
              this._avsHelper.addSupportToSingleFrameSprite(
                [
                  {
                    animId: "hitAnimation3_Impact",
                    frameValues:
                      i["bonusGameIntroMeteoriteImpactGlow3Animation.json"],
                    frameName: "meteoriteImpactGlow.png",
                    frameRate: 60,
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                ],
                l
              );
            m = new t.Meteorite(
              this._game,
              r,
              "hitAnimation3",
              l,
              "hitAnimation3_Impact"
            );
            this.meteorites.push(m),
              ((r = a[s++]).blendMode = PIXI.blendModes.ADD),
              this.centralize(r),
              this._avsHelper.addSupportToSingleFrameSprite(
                [
                  {
                    animId: "hitAnimation4",
                    frameValues: i["bonusGameIntroMeteorite4Animation.json"],
                    frameRate: 60,
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                ],
                r
              );
            m = new t.Meteorite(this._game, r, "hitAnimation4");
            this.meteorites.push(m),
              ((r = a[s++]).blendMode = PIXI.blendModes.ADD),
              this.centralize(r),
              this._avsHelper.addSupportToSingleFrameSprite(
                [
                  {
                    animId: "hitAnimation5",
                    frameValues: i["bonusGameIntroMeteorite5Animation.json"],
                    frameRate: 60,
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                ],
                r
              );
            m = new t.Meteorite(this._game, r, "hitAnimation5");
            this.meteorites.push(m),
              ((r = a[s++]).blendMode = PIXI.blendModes.ADD),
              this.centralize(r),
              this._avsHelper.addSupportToSingleFrameSprite(
                [
                  {
                    animId: "hitAnimation6",
                    frameValues: i["bonusGameIntroMeteorite6Animation.json"],
                    frameRate: 60,
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                ],
                r
              );
            m = new t.Meteorite(this._game, r, "hitAnimation6");
            this.meteorites.push(m);
          }),
          (i.prototype.createBonusGameForegroundEffects = function (e, i) {
            var n = this._combinedAnimations,
              a = this._game.add.group(e, "swEffectGroup");
            (this.stickyWildEffectGroup = a),
              (this.stickyWildImpactEffects = []);
            var o = [];
            this.createImpactFramePartsForReel(1, o, i),
              this.createImpactFramePartsForReel(2, o, i),
              this.createImpactFramePartsForReel(3, o, i),
              (this.impactFrameManager = new t.ImpactFrameManager(
                this._game,
                o
              ));
            for (var s = [0, 45, 0, 0, 0, 225, 270, 315], r = 0; r < 8; r++) {
              var l = this._game.add.group(a, "impactEffectHolder" + r, !1, !1);
              l.angle = s[r];
              var m = this.addSprite(
                0,
                0,
                "effects",
                "stickyWildParticle.png",
                l,
                !0
              );
              (m.anchor.x = 0.5),
                (m.anchor.y = 0.5),
                (m.blendMode = PIXI.blendModes.ADD),
                this._avsHelper.addSupportToSingleFrameSprite(
                  [
                    {
                      animId: "impactRight",
                      frameValues: n["stickyWildParticleRightAnimation.json"],
                      frameName: "stickyWildParticle.png",
                      frameRate: 60,
                      translateParent: !0,
                      applyFirstFrameOnPlay: !0,
                    },
                    {
                      animId: "impactLeft",
                      frameValues: n["stickyWildParticleLeftAnimation.json"],
                      frameName: "stickyWildParticle.png",
                      frameRate: 60,
                      translateParent: !0,
                      applyFirstFrameOnPlay: !0,
                    },
                  ],
                  m
                ),
                tk_common.phaser.addHandleVisibilityMixin(m),
                m.kill(),
                (this.stickyWildImpactEffects[r] = m);
            }
            var h = this.addSprite(0, 0, "effects", "meteorite.png", a, !0);
            (h.anchor.x = 1),
              (h.anchor.y = 0.5),
              (h.blendMode = PIXI.blendModes.ADD),
              this._avsHelper.addSupportToSingleFrameSprite(
                [
                  {
                    animId: "stickyWildMeteoriteAnimation",
                    frameValues: n["stickyWildMeteoriteAnimation.json"],
                    frameRate: 60,
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                ],
                h
              ),
              tk_common.phaser.addHandleVisibilityMixin(h);
            var p = new t.Meteorite(
              this._game,
              h,
              "stickyWildMeteoriteAnimation"
            );
            (p.shouldPlayGlowAnim = !1), (this.monolithHittingMeteorite = p);
          }),
          (i.prototype.createSymbolGlowLayer = function (e) {
            var i = new t.SymbolLayerSpriteBatch(
              this._game,
              e,
              "symbolGlowLayer"
            );
            (i.matrix = t.ReelMatrixes.OP), (this.symbolGlowLayer = i);
          }),
          (i.prototype.createMysteryGameDoorGlows = function () {
            if (!0 !== this._hasCreatedMysteryDoorGlows) {
              this._hasCreatedMysteryDoorGlows = !0;
              for (var e = 0; e < 5; e++)
                for (var i = t.ReelMatrixes.VMs[e], n = 0; n < 3; n++) {
                  var a = this._game.add.sprite(
                    0,
                    0,
                    "symbolGlows",
                    void 0,
                    this.symbolGlowLayer
                  );
                  (a.viewModelMatrix = i),
                    (a.blendMode = PIXI.blendModes.ADD),
                    this.mysteryDoors[5 * n + e].setGlow(a);
                }
            }
          }),
          (i.prototype.createStickyWildGlows = function () {
            if (!0 !== this._hasCreatedStickyWildGlows) {
              this._hasCreatedStickyWildGlows = !0;
              for (var e = 0; e < 15; e++) {
                var t = this.stickyWildPresenter.getWildAt(e);
                if (null != t) {
                  var i = this._game.add.sprite(
                    0,
                    0,
                    "symbolGlows",
                    void 0,
                    this.symbolGlowLayer
                  );
                  (i.blendMode = PIXI.blendModes.ADD),
                    (i.visible = !0),
                    t.setGlowImage(i);
                }
              }
            }
          }),
          (i.prototype.createSingleSymbolGlowElement = function (e, t, i) {
            var n = this._game.add.sprite(0, 0, "symbolGlows", void 0, i);
            (n.viewModelMatrix = t),
              (n.blendMode = PIXI.blendModes.ADD),
              e.setGlowImage(n, i);
          }),
          (i.prototype.createSingleExpansionFrameGlow = function (e, t) {
            var i = this._game.add.sprite(0, 0, "symbolGlows", void 0, t);
            (i.blendMode = PIXI.blendModes.ADD),
              (i.visible = !1),
              e.expansionFrame.setGlowImage(i);
          }),
          (i.prototype.createGlowElements = function (e) {
            for (var i = 0, n = 0; n < 5; n++)
              for (var a = t.ReelMatrixes.VMs[n], o = 0; o < 10; o++) {
                var s = this._game.scene.reels.getSymbolAt(i++);
                o < 5
                  ? (this.createSingleSymbolGlowElement(s, a, e), 2 / 60)
                  : this.createSingleSymbolGlowElement(s, a, e);
              }
            for (n = 0; n < 5; n++)
              this.createSingleExpansionFrameGlow(this.reels.getReel(n), e);
            this.nearWinFrameGlows = [];
            for (n = 0; n < 5; n++) {
              a = t.ReelMatrixes.VMs[n];
              var r = this._game.add.image(
                0,
                0,
                "symbolGlows",
                "nearWinFrameGlow.png",
                e
              );
              (r.blendMode = PIXI.blendModes.ADD),
                (r.viewModelMatrix = a),
                (r.visible = !1),
                (r.v0 = { x: -2, y: -2 }),
                (r.v1 = { x: 15, y: -2 }),
                (r.v2 = { x: 15, y: 50 }),
                (r.v3 = { x: -2, y: 50 }),
                (this.nearWinFrameGlows[n] = r);
            }
          }),
          (i.prototype.createNearWinFrames = function (e) {
            this.nearWinFrames = [];
            for (var i = 0; i < 5; i++) {
              var n = this._game.add.sprite(
                  0,
                  0,
                  "symbols",
                  "nearWinFrame.png",
                  e
                ),
                a = Phaser.Animation.generateFrameNames(
                  "nearWinFrame",
                  0,
                  1,
                  ".png"
                );
              (a = a.concat(a)), n.animations.add("nearWin", a, 31, !0, !1);
              var o = n;
              (o.viewModelMatrix = t.ReelMatrixes.VMs[i]),
                (o.v0 = { x: 0, y: 0 }),
                (o.v1 = { x: 13, y: 0 }),
                (o.v2 = { x: 13, y: 48 }),
                (o.v3 = { x: 0, y: 48 }),
                (o.visible = !1),
                this.nearWinFrames.push(o);
            }
          }),
          (i.prototype.createImpactFramePartsForReel = function (e, i, n) {
            var a = {
              v0: { x: 0, y: 0 },
              v1: { x: 13, y: 0 },
              v2: { x: 13, y: 48 },
              v3: { x: 0, y: 48 },
            };
            switch (e) {
              case 1:
                ((o = this._game.add.sprite(
                  0,
                  0,
                  "symbols",
                  "wildFrameGreenReel1_1.png",
                  n
                )).viewModelMatrix = t.ReelMatrixes.VMs[1]),
                  this.addVertexDataToTransformedSprite(o, a),
                  ((s = this._game.add.sprite(
                    0,
                    0,
                    "symbols",
                    "wildFrameWhiteReel1_1.png",
                    n
                  )).viewModelMatrix = t.ReelMatrixes.VMs[1]),
                  this.addVertexDataToTransformedSprite(s, a),
                  i.push({ white: s, green: o }),
                  ((o = this._game.add.sprite(
                    0,
                    0,
                    "symbols",
                    "wildFrameGreenReel1_2.png",
                    n
                  )).viewModelMatrix = t.ReelMatrixes.VMs[1]),
                  this.addVertexDataToTransformedSprite(o, a),
                  ((s = this._game.add.sprite(
                    0,
                    0,
                    "symbols",
                    "wildFrameWhiteReel1_2.png",
                    n
                  )).viewModelMatrix = t.ReelMatrixes.VMs[1]),
                  this.addVertexDataToTransformedSprite(s, a),
                  i.push({ white: s, green: o }),
                  ((o = this._game.add.sprite(
                    0,
                    0,
                    "symbols",
                    "wildFrameGreenReel1_3.png",
                    n
                  )).viewModelMatrix = t.ReelMatrixes.VMs[1]),
                  this.addVertexDataToTransformedSprite(o, a),
                  ((s = this._game.add.sprite(
                    0,
                    0,
                    "symbols",
                    "wildFrameWhiteReel1_3.png",
                    n
                  )).viewModelMatrix = t.ReelMatrixes.VMs[1]),
                  this.addVertexDataToTransformedSprite(s, a),
                  i.push({ white: s, green: o });
                break;
              case 2:
                ((o = this._game.add.sprite(
                  0,
                  0,
                  "symbols",
                  "wildFrameGreenReel1_1.png",
                  n
                )).viewModelMatrix = t.ReelMatrixes.VMs[2]),
                  this.addVertexDataToTransformedSprite(o, a),
                  ((s = this._game.add.sprite(
                    0,
                    0,
                    "symbols",
                    "wildFrameWhiteReel1_1.png",
                    n
                  )).viewModelMatrix = t.ReelMatrixes.VMs[2]),
                  this.addVertexDataToTransformedSprite(s, a),
                  i.push({ white: s, green: o }),
                  ((s = this._game.add.sprite(
                    0,
                    0,
                    "symbols",
                    "wildFrameWhiteReel1_3.png",
                    n
                  )).viewModelMatrix = t.ReelMatrixes.VMs[2]),
                  this.addVertexDataToTransformedSprite(s, a),
                  ((o = this._game.add.sprite(
                    0,
                    0,
                    "symbols",
                    "wildFrameGreenReel1_3.png",
                    n
                  )).viewModelMatrix = t.ReelMatrixes.VMs[2]),
                  this.addVertexDataToTransformedSprite(o, a),
                  i.push({ white: s, green: o });
                break;
              case 3:
                var o, s;
                ((o = this._game.add.sprite(
                  0,
                  0,
                  "symbols",
                  "wildFrameGreenReel1_1.png",
                  n
                )).viewModelMatrix = t.ReelMatrixes.VMs[3]),
                  this.addVertexDataToTransformedSprite(o, a),
                  ((s = this._game.add.sprite(
                    0,
                    0,
                    "symbols",
                    "wildFrameWhiteReel1_1.png",
                    n
                  )).viewModelMatrix = t.ReelMatrixes.VMs[3]),
                  this.addVertexDataToTransformedSprite(s, a),
                  i.push({ white: s, green: o }),
                  ((o = this._game.add.sprite(
                    0,
                    0,
                    "symbols",
                    "wildFrameGreenReel3_2.png",
                    n
                  )).viewModelMatrix = t.ReelMatrixes.VMs[3]),
                  this.addVertexDataToTransformedSprite(o, a),
                  ((s = this._game.add.sprite(
                    0,
                    0,
                    "symbols",
                    "wildFrameWhiteReel3_2.png",
                    n
                  )).viewModelMatrix = t.ReelMatrixes.VMs[3]),
                  this.addVertexDataToTransformedSprite(s, a),
                  i.push({ white: s, green: o }),
                  ((o = this._game.add.sprite(
                    0,
                    0,
                    "symbols",
                    "wildFrameGreenReel1_3.png",
                    n
                  )).viewModelMatrix = t.ReelMatrixes.VMs[3]),
                  this.addVertexDataToTransformedSprite(o, a),
                  ((s = this._game.add.sprite(
                    0,
                    0,
                    "symbols",
                    "wildFrameWhiteReel1_3.png",
                    n
                  )).viewModelMatrix = t.ReelMatrixes.VMs[3]),
                  this.addVertexDataToTransformedSprite(s, a),
                  i.push({ white: s, green: o });
            }
          }),
          (i.prototype.addVertexDataToTransformedSprite = function (e, t) {
            (e.v0 = t.v0), (e.v1 = t.v1), (e.v2 = t.v2), (e.v3 = t.v3);
          }),
          (i.prototype.createMysteryWinLabel = function (e) {
            var i = this._combinedAnimations["winLabelAnimation.json"],
              n = this._game.add.group(e, "winLabelHolder", !1, !1),
              a = this._game.add.sprite(0, 0, void 0, void 0, n);
            (a.scale.x = a.scale.y = 0),
              tk_common.phaser.addHandleVisibilityMixin(a),
              this._avsHelper.addSupportToSingleFrameSprite(
                [{ animId: "showWinLabel", frameValues: i, frameRate: 60 }],
                a
              );
            for (
              var o = new t.GlowingBitmapText(
                  this._game,
                  0,
                  0,
                  "voxel",
                  "0.00",
                  60,
                  void 0
                ),
                s = 0;
              s < 15;
              s++
            ) {
              var r = this.addImage(0, 0, "effects", "voxel0Glow.png", n, !0);
              (r.blendMode = PIXI.blendModes.ADD),
                this.centralize(r),
                o.glows.push(r);
            }
            a.addChild(o),
              (this.mysteryWinLabel = new t.MysteryWinLabel(
                this._game,
                n,
                a,
                o
              ));
          }),
          (i.prototype.addSprite = function (e, t, i, n, a, o, s) {
            var r = a;
            return (
              o &&
                ((r = this._game.add.group(a)).scale.x = r.scale.y =
                  s || this._resolutionScales[i]),
              this._game.add.sprite(e, t, i, n, r)
            );
          }),
          (i.prototype.addImage = function (e, t, i, n, a, o, s) {
            var r = a;
            return (
              o &&
                ((r = this._game.add.group(a)).scale.x = r.scale.y =
                  s || this._resolutionScales[i]),
              this._game.add.image(e, t, i, n, r)
            );
          }),
          (i.prototype.applyResolutionScale = function (e, t) {
            var i = e;
            (e.scale.x *= this._resolutionScales[t || i.key || 1]),
              (e.scale.y *= this._resolutionScales[t || i.key || 1]);
          }),
          (i.prototype.createBackgroundGlow = function (e) {
            var i = this._game.add.group(e, "backgroundGlowHolder");
            (this.backgroundGlow = this.addSprite(
              0,
              0,
              "effects",
              "winGlowBlue.png",
              i,
              !0
            )),
              (i.x = 0),
              (i.y = 0),
              (this.backgroundGlow.blendMode = PIXI.blendModes.ADD),
              (this.backgroundGlow.visible = !1),
              this.centralize(this.backgroundGlow),
              this._avsHelper.addSupportToSingleFrameSprite(
                [
                  {
                    animId: "nice",
                    frameValues:
                      this._combinedAnimations["smallWinGlowAnimation.json"],
                    frameName: "winGlowCyan.png",
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                  {
                    animId: "great",
                    frameValues:
                      this._combinedAnimations["smallWinGlowAnimation.json"],
                    frameName: "winGlowGreen.png",
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                  {
                    animId: "awesome",
                    frameValues:
                      this._combinedAnimations["mediumWinGlowAnimation.json"],
                    frameName: "winGlowMagenta.png",
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                  {
                    animId: "bigWin",
                    frameValues:
                      this._combinedAnimations["bigWinGlowAnimation.json"],
                    frameName: "winGlowBlue.png",
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                  {
                    animId: "megaWin",
                    frameValues:
                      this._combinedAnimations["bigWinGlowAnimation.json"],
                    frameName: "winGlowRed.png",
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                  {
                    animId: "ultraWin",
                    frameValues:
                      this._combinedAnimations["bigWinGlowAnimation.json"],
                    frameName: "winGlowYellow.png",
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                  {
                    animId: "mysteryGameIntro",
                    frameValues:
                      this._combinedAnimations["mysteryGameGlowAnimation.json"],
                    frameName: "winGlowMagenta.png",
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                  {
                    animId: "mainGameSpin",
                    frameValues:
                      this._combinedAnimations["spinGlowAnimation.json"],
                    frameName: "winGlowBlue.png",
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                  {
                    animId: "bonusGameSpin",
                    frameValues:
                      this._combinedAnimations["spinGlowAnimation.json"],
                    frameName: "winGlowGreen.png",
                    translateParent: !0,
                    applyFirstFrameOnPlay: !0,
                  },
                ],
                this.backgroundGlow
              );
            var n = new t.GlowFilter(this._game);
            (n.glowAmount = 3),
              (this.backgroundGlow.filters = [n]),
              tk_common.phaser.addHandleVisibilityMixin(this.backgroundGlow);
          }),
          (i.prototype.playLesserAttentionOnAllSymbols = function (e) {
            for (var t = 0; t < 3 * e; t++) {
              this.reels.getSymbolAtServerIndex(t).startLesserGlowAnimation();
            }
          }),
          (i.BIG_WIN_FIREWORK_TRIGGER_DELAYS = [
            300, 250, 450, 200, 400, 200, 200, 400, 300,
          ]),
          (i.MEGA_WIN_FIREWORK_TRIGGER_DELAYS = [
            300, 250, 450, 200, 400, 200, 200, 400, 300,
          ]),
          (i.ULTRA_WIN_FIREWORK_TRIGGER_DELAYS = [
            300, 250, 450, 200, 400, 200, 200, 400, 300,
          ]),
          (i.COMMON_FIREWORK_TRIGGER_DELAYS = [
            300, 250, 450, 200, 400, 200, 200, 400, 300,
          ]),
          i
        );
      })();
      t.Scene = i;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    var t = tk.gs.rs.e.ServerErrorCodes,
      i = tk_common.slots.utils.addDeveloperPauseByKeyPressSupport,
      n = (function (n) {
        function a() {
          return (null !== n && n.apply(this, arguments)) || this;
        }
        return (
          __extends(a, n),
          (a.prototype.preload = function () {}),
          (a.prototype.create = function () {
            var t = this;
            n.prototype.create.call(this);
            var a = this.game;
            (a.initGameData.developmentmode &&
              (this.setupAudioTracker(),
              i(a, "p"),
              tk_common.phaser.utils.addKeyboardShortCut(
                a.initGameData,
                "s",
                function () {
                  alert("This game doesn't use spine.");
                },
                !0
              )),
            (a.model.symbolsBeforeActionFinal =
              a.model.symbolsBeforeActionInitial =
                []),
            (a.model.autoPlayState.stopOnFeatureWon = !0),
            a.mayAutoEnterFeatures() &&
              a.gui.setShowStopAutoplayOnFeatureWon(!0),
            this.slotGame.gui.showGui(),
            this.resize(!0),
            void 0 !== e.Preloader && e.Preloader.gameStarting(),
            a.renderer instanceof PIXI.WebGLRenderer)
              ? (this.shouldActivateIosFullScreenSwipeManager() &&
                  this.slotGame.gui.activateIosFullScreenSwipeManager(),
                this.activateSingleSpinContext(),
                this._game.model.hasRestoreState()
                  ? ((a.scene.topRoot.visible = !0),
                    this.enterRestoreState(),
                    this.resize(!0, void 0, void 0, !0))
                  : (a.scene.hideSymbols(),
                    tk_common.time.setSafeTimeout(
                      this.slotGame.gameInstanceId,
                      function () {
                        var i = function () {
                            t.activateSingleSpinContext(),
                              void 0 !== e.Preloader &&
                                e.Preloader.removePreloader(),
                              (a.scene.topRoot.visible = !0),
                              (t._skipStrategy = function () {
                                (t._skipStrategy = null),
                                  a.scene.intro.abortIntro();
                              }),
                              a.scene.intro.playIntro(function () {
                                t._game.gui.setSingleSpinMode(!0),
                                  (t._skipStrategy = null),
                                  t.readyForPlay();
                              });
                          },
                          n = t._game.model.getNextActiveFreeRoundProgram(!1);
                        void 0 !== n &&
                          (i = function () {
                            void 0 !== e.Preloader &&
                              e.Preloader.removePreloader(),
                              (a.scene.topRoot.visible = !0),
                              a.scene.intro.playIntro(function () {
                                t.activateFreeRoundsContext(),
                                  t._game.gui.setFreeRoundsMode(
                                    n.freeroundsremaining,
                                    !0
                                  ),
                                  t.readyForPlay();
                              });
                          }),
                          i(),
                          (t.slotGame.gui.enabled = !0),
                          t.resize(!0, void 0, void 0, !0);
                      },
                      300
                    )))
              : this.handleWebGLNotAvailable(a);
          }),
          (a.prototype.handleWebGLNotAvailable = function (e) {
            this.activateSingleSpinContext(),
              this.handleErrorOccurred({
                callstack: null,
                code: t.DEVICE_NOT_SUPPORTED,
                message: "WebGL not available on this device.",
              });
          }),
          (a.prototype.handleGuiButtonClicked = function (e, t) {
            this._skipStrategy && e === tk_common.slots.gui.GuiButtonIds.SKIP
              ? this._skipStrategy()
              : n.prototype.handleGuiButtonClicked.call(this, e, t);
          }),
          (a.prototype.buildGameScene = function () {
            var t = this.game,
              i = new e.view.Scene(t);
            (i.topRoot = i.buildScene()),
              tk_common.phaser.optimizePreUpdateCalls(i.topRoot),
              tk_common.phaser.optimizePostUpdateCalls(i.topRoot),
              tk_common.phaser.optimizeUpdateLogic(t),
              tk_common.phaser.optimizeUpdateLoop(t),
              tk_common.phaser.utils.makeUpdateOnlyExistingChildrenTrue(
                i.topRoot
              ),
              (t.scene = i);
          }),
          (a.prototype.layoutScene = function (e, t) {
            this.game.sceneLayoutManager.layoutScene(e, t);
          }),
          (a.prototype.handleOcDialogButtonClicked = function (e, t, i) {
            this.game.ocConfigurationManager.handleOcDialogButtonClicked(
              e,
              t,
              i
            );
          }),
          (a.prototype.createRoundState = function (t) {
            return new e.fsm.RoundState(t);
          }),
          (a.prototype.updatePaytableSymbolValues = function (e) {
            this._game.paytableHelper.updatePaytableSymbolValues(e);
          }),
          (a.prototype.setupAudioTracker = function () {
            var e = this._game,
              t = new tk_common.sounds.AudioTracker(e);
            (e.audioTracker = t), t.start();
            var i = new tk_common.sounds.SimpleAudioTrackerVisualizer(
                e.audioTracker,
                e.scene.sceneRoot,
                null
              ),
              n = !1;
            tk_common.phaser.utils.addKeyboardShortCut(
              e.initGameData,
              "a",
              function () {
                (n = !n) ? i.startVisualization() : i.stopVisualization();
              },
              !0
            );
          }),
          (a.prototype.setupSoundGroups = function () {
            var e = this.game;
            if (e.sound.usingWebAudio) {
              var t = e.webAudioUtils.soundGroupManager;
              t.getGroup("music"),
                t.getGroup("effects"),
                t.getGroup("bigwin_effects"),
                t.getGroup("particles"),
                t.connectGroups("bigwin_effects", "effects"),
                t.connectGroups("particles", "effects");
            }
          }),
          (a.prototype.handleOngoingTweensOnErrorOccurred = function () {}),
          a
        );
      })(tk_common.slots.phaser.GameState);
    e.GameState = n;
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    var t = (function (t) {
      function i(e, i, n) {
        var a = this;
        return (
          null == n && (n = Phaser.AUTO),
          ((a =
            t.call(this, "game_tk_astronaut_cho", i, e, 1280, 720, n) ||
            this).clearBeforeRender = !1),
          (a.hasLoadedSceneSounds = !1),
          a
        );
      }
      return (
        __extends(i, t),
        (i.prototype.getBootStateClass = function () {
          return e.BootState;
        }),
        (i.prototype.getPreloaderStateClass = function () {
          return e.PreloaderState;
        }),
        (i.prototype.getGameFlowStateClass = function () {
          return e.GameState;
        }),
        i
      );
    })(tk_common.slots.phaser.AbstractSlot);
    e.Game = t;
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    var t = (function () {
      function e() {}
      return (
        (e.AS_MainGameAmbience = "mainGameAmbientSnd"),
        (e.AS_MainGameIntroSnd = "AS_MainGameIntro"),
        (e.AS_SpinStart = "AS_SpinStart"),
        (e.AS_SpinStop = "AS_SpinStop"),
        (e.AS_SpinLoop = "AS_SpinLoop"),
        (e.AS_PaylineWinSnd = "AS_MediumWinPayLine"),
        (e.AS_MiniWinSnd = "AS_MiniWin"),
        (e.AS_SmallWinSnd = "AS_SmallWin"),
        (e.AS_MediumWinSnd = "AS_MediumWin"),
        (e.AS_BigWinSnd = "AS_BigWin"),
        (e.AS_MegaWinSnd = "AS_MegaWin"),
        (e.AS_UltraWinSnd = "AS_UltraWin"),
        (e.AS_MysteryGameIntro = "AS_MysteryGameIntro"),
        (e.AS_MysteryGameOutro = "AS_MysteryGameOutro"),
        (e.AS_MysteryGameAmbience = "AS_MysteryGameAmbientSnd"),
        (e.AS_BonusGameAmbience = "AS_BonusGameAmbientSnd"),
        (e.AS_CountUpLoop = "AS_CountupLoop"),
        (e.AS_CountUpStop = "AS_CountUpStop"),
        (e.AS_DummyIosSound = "dummyIosSound"),
        (e.AS_BigWinFirework1 = "AS_BigWinFirework1"),
        (e.AS_BigWinFirework2 = "AS_BigWinFirework2"),
        (e.AS_BigWinFirework3 = "AS_BigWinFirework3"),
        (e.AS_MegaWinFirework1 = "AS_MegaWinFirework1"),
        (e.AS_MegaWinFirework2 = "AS_MegaWinFirework2"),
        (e.AS_MegaWinFirework3 = "AS_MegaWinFirework3"),
        (e.AS_UltraWinFirework1 = "AS_UltraWinFirework1"),
        (e.AS_UltraWinFirework2 = "AS_UltraWinFirework2"),
        (e.AS_UltraWinFirework3 = "AS_UltraWinFirework3"),
        (e.AS_CyclingFirework1 = "AS_CyclingFirework1"),
        (e.AS_CyclingFirework2 = "AS_CyclingFirework2"),
        (e.AS_CyclingFirework3 = "AS_CyclingFirework3"),
        (e.AS_ExpanderAttention = "AS_ExpanderAttention"),
        (e.AS_ExpanderExpansion = "AS_ExpanderExpansion"),
        (e.AS_SingleExpansion = "AS_SingleExpansion"),
        (e.AS_DoubleExpansion = "AS_DoubleExpansion"),
        (e.AS_TripleExpansion = "AS_TripleExpansion"),
        (e.AS_NearWinStart = "AS_NearWinStart"),
        (e.AS_NearWinStopWin = "AS_NearWinStopWin"),
        (e.AS_NearWinStopNoWin = "AS_NearWinStopNoWin"),
        (e.AS_BonusGameIntro = "AS_BonusGameIntro"),
        (e.AS_BonusGameOutro = "AS_BonusGameOutro"),
        (e.AS_MysteryGameWin01 = "AS_MysteryGameWin01"),
        (e.AS_MysteryGameWin02 = "AS_MysteryGameWin02"),
        (e.AS_MysteryGameWin03 = "AS_MysteryGameWin03"),
        (e.AS_MysteryGameWin04 = "AS_MysteryGameWin04"),
        (e.AS_MysteryGameNoWin = "AS_MysteryGameNoWin"),
        (e.AS_MysteryGameShuffle = "AS_MysteryGameShuffle"),
        (e.AS_MysteryGameDoorPicked = "AS_MysteryGameDoorPicked"),
        (e.AS_MysteryGameDoorNotPicked = "AS_MysteryGameDoorNotPicked"),
        (e.AS_MysteryGameInitialReveal = "AS_MysteryGameInitialReveal"),
        (e.AS_StickyWildVoice = "AS_StickyWildVoice"),
        (e.AS_StickyWildTargetArea = "AS_StickyWildTargetArea"),
        (e.AS_StickyWildMeteoriteNoHit1 = "AS_StickyWildMeteoriteNoHit1"),
        (e.AS_StickyWildMeteoriteNoHit2 = "AS_StickyWildMeteoriteNoHit2"),
        (e.AS_StickyWildMeteoriteNoHit3 = "AS_StickyWildMeteoriteNoHit3"),
        (e.AS_StickyWildMeteorite1 = "AS_StickyWildMeteorite1"),
        (e.AS_StickyWildMeteorite2 = "AS_StickyWildMeteorite2"),
        (e.AS_StickyWildMeteorite3 = "AS_StickyWildMeteorite3"),
        (e.LocalStorageKey = "tk_astronaut.soundEnabledByUser"),
        e
      );
    })();
    e.SoundIds = t;
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t, i) {
          var n = e.call(this, t) || this;
          return (n._roundState = i), n;
        }
        return (
          __extends(t, e),
          (t.prototype.restoreModeAfterNewGameRoundError = function () {
            this._roundState.newRoundRejected();
          }),
          (t.prototype.restoreViewAfterNewGameRoundError = function (e) {
            var t = this._game,
              i = this._symbols;
            t.scene.reels.recoverFromError(i),
              t.setClientBalanceToServerBalance(!0),
              t.scene.idleAnimationManager.gameIsIdle(),
              e();
          }),
          (t.prototype.setCurrentSymbols = function (e) {
            this._symbols = e;
          }),
          t
        );
      })(tk_common.slots.utils.RecoverFromErrorHelper);
      e.ErrorRecoveryHelper = t;
    })(e.utils || (e.utils = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = tk_common.utils.sequence2.createSequence,
        i = tk_common.utils.tweens.createLocalTweenMax,
        n = (function () {
          function e(e) {
            (this._game = e), (this._ltm = i(!0));
          }
          return (
            (e.prototype.showFrame = function (e, t) {
              var i = this._game,
                n = i.scene;
              n.stickyWildPresenter.moveWildsToTopOfLayer(),
                n.impactFrameManager.showFrame(9 == e.bgsue.fsl),
                n.fireworksManager.abortFireworks();
              var a = i.gameTweaker;
              n.glowManager.playBackgroundGlowAnimation(
                "bonusGameSpin",
                a.bonusGameSpinState.spinGlowAmount
              ),
                i.scene.impactFrameManager.onMayPlayImpactAnimation.addOnce(t),
                i.scene.impactFrameManager.braceForImpact();
            }),
            (e.prototype.performWildInjection = function (e, i) {
              var n = this,
                a = this._game.scene;
              this._currentState = e;
              var o = (this._injectSequence = t()),
                s = o.startWith.call(function (e) {
                  e();
                }).then;
              (s = (s = (s = s.call(function (e) {
                var t = n._currentState.wie.pos,
                  i = n._game.scene.stickyWildPresenter;
                i.onStickWildPresentationComplete.addOnce(e, n),
                  i.startWildHitAnimation(t);
              }).then).callSync(function () {
                a.impactFrameManager.hideFrame();
              }).then).delay(0.1, void 0, this._ltm).then),
                (o.oncomplete = function () {
                  i();
                }),
                o.run();
            }),
            e
          );
        })();
      e.WildInjectManager = n;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = (function () {
        function t(e) {
          this._game = e;
        }
        return (
          (t.prototype.playExpansions = function (e, t) {
            this.runExpansionAnimations(e, t);
          }),
          (t.prototype.runExpansionAnimations = function (e, t) {
            for (var i, n = this, a = 0; a < e.length; a++) {
              var o = e[a];
              (i = this._game.scene.reels.getReel(o.reelIndex)),
                0 === a &&
                  i.expansionFrame.onExpansionStarted.addOnce(function (t) {
                    return n.handleExpansionStarted(e);
                  }, this),
                i.playExpansionAnimation(o, a === e.length - 1);
            }
            i.onExpansionComplete.addOnce(t);
          }),
          (t.prototype.handleExpansionStarted = function (t) {
            1 === t.length
              ? this._game.soundSystem.playSoundWithUniqueID(
                  e.SoundIds.AS_SingleExpansion
                )
              : 2 == t.length
              ? this._game.soundSystem.playSoundWithUniqueID(
                  e.SoundIds.AS_DoubleExpansion
                )
              : this._game.soundSystem.playSoundWithUniqueID(
                  e.SoundIds.AS_TripleExpansion
                );
          }),
          t
        );
      })();
      t.ExpansionsManager = i;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = e.utils.ErrorRecoveryHelper,
        n = tk_common.phaser.utils.createUpdateTicker,
        a = tk_common.utils.sequence2.createSequence,
        o = tk_common.utils.createWaitForCallbacksGate,
        s = tk_common.utils.tweens.createLocalTweenMax,
        r = e.view.WildInjectManager,
        l = (function () {
          function t(t) {
            var i = this;
            (this._game = t),
              (this._singleSpinMode = new e.fsm.SingleSpinMode(t)),
              (this._singleSpinMode.activationStrategy =
                this._singleSpinMode.activationWhenIdle),
              (this._autoSpinMode = new e.fsm.AutoSpinMode(t)),
              (this._freeRoundMode = new e.fsm.FreeRoundMode(t)),
              this.setupCallbacks(this._singleSpinMode),
              this.setupCallbacks(this._autoSpinMode),
              this.setupCallbacks(this._freeRoundMode),
              (this._errorRecoveryHelper = this.createErrorRecoveryHelper(t)),
              n(t).onUpdate.add(function () {
                var e = i._game.time.elapsedMS;
                i._game.scene.reels.update(e), i._currentMode.update(e);
              }),
              (this._spinLtm = s(!0)),
              (this._mysteryLtm = s(!0)),
              (this._winPresentationManager = new e.view.WinPresentationManager(
                t
              )),
              (this._bonusIntro = new e.view.BonusGameIntro(t)),
              (this._bonusOutro = new e.view.BonusGameOutro(t)),
              (this._mysteryIntro = new e.view.MysteryGameIntro(t)),
              (this._mysteryOutro = new e.view.MysteryGameOutro(t)),
              (this._wildInjectManager = new r(t)),
              (this._expansionsManager = new e.view.ExpansionsManager(t)),
              (this._mysteryGame = new e.view.MysteryGame(t)),
              (this._autoSpinMode.mysteryGame = this._mysteryGame),
              (this._skipStrategy = function () {});
          }
          return (
            (t.prototype.setupCallbacks = function (e) {
              var t = this;
              (e.finalWinPresentationAbortedCallback = function () {
                return t.finalWinPresentationAbortedCallback();
              }),
                (e.finalWinPresentationStartedCallback = function () {
                  return t.finalWinPresentationStartedCallback();
                }),
                (e.finalWinPresentationCompleteCallback = function () {
                  return t.finalWinPresentationCompleteCallback();
                }),
                (e.errorCallback = function (e) {
                  return t.errorCallback(e);
                }),
                (e.gameRoundRestoredCallback = function () {
                  return t.gameRoundRestoredCallback();
                }),
                (e.roundStartedCallback = function () {
                  return t.roundStartedCallback();
                }),
                (e.startNewRoundRequestedCallback = function () {
                  return t.startNewRoundRequestedCallback();
                }),
                (e.stopAutoPlayRequestedCallback = function () {
                  return t.stopAutoPlayRequestedCallback();
                }),
                (e.startBonusGameRequestedCallback = function () {
                  t.performFreeSpin();
                });
            }),
            (t.prototype.activate = function () {
              this.setupForSingleSpinContext();
            }),
            (t.prototype.newRoundAccepted = function () {
              this.roundStartedCallback(),
                (this._singleSpinMode.activationStrategy =
                  this._singleSpinMode.activationWhenSpinning),
                this._currentMode.newRoundAccepted(),
                this.performSpin();
            }),
            (t.prototype.newRoundRejected = function () {
              (this._singleSpinMode.activationStrategy =
                this._singleSpinMode.activationWhenIdle),
                this._currentMode.newRoundRejected();
            }),
            (t.prototype.abortFinalWinPresentation = function () {
              var e = this;
              this._winPresentationManager.onWinPresentationAborted.addOnce(
                function () {
                  e._game.scene.fireworksManager.abortFireworks(),
                    e.finalWinPresentationAbortedCallback();
                }
              ),
                this._winPresentationManager.abort();
            }),
            (t.prototype.handleDialogPendingFinalWinPresentationComplete =
              function () {}),
            (t.prototype.handleAutoPlayStopConditionActivated = function () {}),
            (t.prototype.setupForAutoPlayContext = function () {
              this._currentMode && this._currentMode.deactivate(),
                (this._currentMode = this._autoSpinMode),
                this._currentMode.activate(),
                this.setAutoContinueAutoPlaySessionCallback(!0);
            }),
            (t.prototype.setupForSingleSpinContext = function () {
              this._currentMode && this._currentMode.deactivate(),
                (this._currentMode = this._singleSpinMode),
                this._currentMode.activate();
            }),
            (t.prototype.setupForFreeRoundContext = function () {
              this._currentMode && this._currentMode.deactivate(),
                (this._currentMode = this._freeRoundMode),
                this._currentMode.activate();
            }),
            (t.prototype.setupForTopSpinContext = function () {
              this._currentMode && this._currentMode.deactivate(),
                (this._currentMode = this._freeRoundMode),
                this._currentMode.activate();
            }),
            (t.prototype.handleSpacebarPressed = function () {
              this._game.gui.clickSpinButton();
            }),
            (t.prototype.restoreGameRound = function () {
              var t = this.getCurrentState(),
                i = this.getPreviousState();
              this._game.serverConnection.restore(t),
                void 0 !== e.Preloader && e.Preloader.removePreloader(),
                t.bgsue
                  ? t.bgwe
                    ? this.restoreMainGameSpin(t)
                    : this.restoreBonusGameSpin(t, i)
                  : t.mgwe
                  ? this.restoreMainGameSpin(t)
                  : this.restoreMysteryGame(t),
                this._game.sceneLayoutManager.layoutScene(void 0, !0);
            }),
            (t.prototype.restoreMainGameSpin = function (e) {
              var t = this,
                i = a(),
                n = this._game,
                o = i.startWith.call(function (e) {
                  n.scene.paylineButtonsManager.initializeButtons(),
                    n.scene.fullScreenAnimator.clearAllPixels(),
                    n.scene.reels.startSpin(!1),
                    t._spinLtm.delayedCall(0.5, e);
                }).then;
              (o = (o = (o = o.block(function (e) {
                (t._continueRestoredGameRound = e),
                  t.gameRoundRestoredCallback();
              }).then).call(function (e) {
                n.scene.reels.onSpinComplete.addOnce(e),
                  n.scene.reels.stopSpin(t.getCurrentState());
              }).then).call(function (i) {
                t.performMainGameExpansions(e, i);
              }).then),
                (i.oncomplete = function () {
                  t.performMainGameWinPresentation(e);
                }),
                i.run();
            }),
            (t.prototype.restoreMysteryGame = function (e) {
              var t = this;
              this._mysteryGame.restore(e, function () {
                t._game.updateTotalWinFieldValue(),
                  (t._continueRestoredGameRound = function () {
                    t._game.scene.hitAreaManager.setClickingActive(!0),
                      t.performDoorPick();
                  }),
                  t.gameRoundRestoredCallback();
              });
            }),
            (t.prototype.restoreBonusGameSpin = function (t, i) {
              var n = this,
                o = (this._restoreSeq = a()),
                s = this._game,
                r = o.startWith.call(function (n) {
                  s.soundSystem.playSoundWithId(
                    e.SoundIds.AS_BonusGameAmbience,
                    e.SoundIds.AS_BonusGameAmbience,
                    1,
                    !0,
                    !0
                  ),
                    s.scene.stickyWildPresenter.restoreWilds(t.fsge.syms),
                    s.scene.restoreBonusGame(t),
                    s.updateTotalWinFieldValue(i.sue.twa),
                    s.gui.setFeatureRoundsMode(t.bgsue.fsl, !1),
                    n();
                }).then;
              (r = (r = r.call(function (e) {
                s.scene.reels.startSpin(!0), e();
              }).then).call(function (e) {
                for (var t = 0; t < 5; t++)
                  s.scene.glowManager.reorganizeGlowsOnSpinStart(t);
                s.scene.stickyWildPresenter.moveWildsToTopOfLayer(),
                  (n._continueRestoredGameRound = e),
                  n.gameRoundRestoredCallback();
              }).then).call(function (e) {
                s.scene.stickyWildPresenter.moveWildsToTopOfLayer(),
                  s.scene.reels.onSpinComplete.addOnce(e),
                  s.scene.reels.stopSpin(n.getCurrentState());
              }).then,
                (o.oncomplete = function () {
                  n.performBonusGameWinPresentation(t);
                }),
                o.run();
            }),
            (t.prototype.resumeRestoredGameRound = function () {
              this._continueRestoredGameRound();
            }),
            (t.prototype.handleGuiButtonClicked = function (e, t) {
              this._currentMode.handleGuiButtonClicked(e, t),
                e === tk_common.slots.gui.GuiButtonIds.QUICK_STOP &&
                  this._quickStopStrategy(),
                e === tk_common.slots.gui.GuiButtonIds.SKIP &&
                  this._skipStrategy();
            }),
            (t.prototype.handleDialogButtonClicked = function (e, t, i) {
              this._currentMode.handleDialogButtonClicked(e, t, i);
            }),
            (t.prototype.handleSpinResponseReceived = function (e) {
              var t = this._game.model;
              this._game.slowConnectionTracker.responseReceived(),
                t.updateSlotModelFromNewGameRoundResponse(e);
              t.gameRound.currentState;
            }),
            (t.prototype.handleFreeSpinResponseReceived = function (e) {
              var t = this._game.model;
              this._game.slowConnectionTracker.responseReceived(),
                t.updateSlotModelFromContinueGameRoundResponse(e);
              t.gameRound.currentState;
            }),
            (t.prototype.handleSpinErrorResponse = function (e) {
              this.errorCallback(e);
            }),
            (t.prototype.handleSpinComplete = function () {
              this._game.jsBridgeHelper.spinEnded({
                totalBetMultiplier:
                  this._game.model.currentOutcome.totalBetMultiplier,
                totalWinAmount: this._game.model.currentOutcome.totalWinAmount,
                finalSymbols: this._game.model.currentState.symbols,
                metaTags: this._game.model.latestMetaTags,
              });
            }),
            (t.prototype.performSpin = function () {
              var t,
                i = this,
                n = this._game;
              n.jsBridgeHelper.spinStarted(),
                n.updateCashFieldOnNewGameRoundSpinStart(!0),
                n.model.prepareSlotModelForNewGameRound(),
                n.scene.idleAnimationManager.roundStarted(),
                this._errorRecoveryHelper.setCurrentSymbols(
                  n.scene.reels.getFullSymbolsList()
                );
              var s = (this._spinSequence = a()),
                r = s.startWith.call(function (a) {
                  var r = o(a),
                    l = r.addCallback("minSpinDuration"),
                    m = r.addCallback("response"),
                    h = r.addCallback("countup");
                  (i._quickStopTriggers = new e.utils.TriggerCallbackGroups(2)),
                    i._quickStopTriggers.addCallback(l, 0),
                    (i._quickStopStrategy = function () {
                      i._quickStopTriggers.activateAll();
                    }),
                    n.scene.paylineButtonsManager.turnLightsOff(),
                    n.scene.reels.startSpin(!1),
                    n.scene.reels.onFirstReelStopped.addOnce(function () {
                      n.updateTotalWinField("");
                    }),
                    (i._singleSpinMode.activationStrategy =
                      i._singleSpinMode.activationWhenSpinning),
                    i._currentMode.handleSpinStarted(),
                    n.scene.countUp.onFadeOutComplete.addOnce(h),
                    n.scene.countUp.fadeOutCountUp(0.3, 0.1),
                    n.slowConnectionTracker.requestSent(),
                    n.serverConnection.spin(
                      function (e) {
                        i.handleSpinResponseReceived(e),
                          (t = i.getCurrentState()),
                          m();
                      },
                      function (e) {
                        i.handleSpinErrorResponse(e),
                          i._spinLtm.killAll(),
                          s.abort();
                      }
                    ),
                    i._spinLtm.delayedCall(0.5, function () {
                      l();
                    });
                }).then;
              (r = (r = r.call(function (e) {
                n.scene.reels.onSpinComplete.addOnce(e),
                  n.scene.reels.stopSpin(i.getCurrentState()),
                  i._quickStopTriggers.addCallback(function () {
                    n.scene.reels.quickStop();
                  }, 1),
                  (i._quickStopStrategy = function () {
                    i._quickStopTriggers.activateAll();
                  });
              }).then).call(function (e) {
                (i._quickStopStrategy = function () {}),
                  (i._singleSpinMode.activationStrategy =
                    i._singleSpinMode.activationWhenIdle),
                  i._currentMode.handleSpinComplete(),
                  i.performMainGameExpansions(t, e);
              }).then),
                (s.oncomplete = function () {
                  i.performMainGameWinPresentation(t);
                }),
                s.run();
            }),
            (t.prototype.performRespin = function () {
              this._game.jsBridgeHelper.spinStarted(),
                this._game.slowConnectionTracker.requestSent();
            }),
            (t.prototype.getCurrentState = function () {
              return this._game.model.currentState;
            }),
            (t.prototype.getPreviousState = function () {
              return this._game.model.previousState;
            }),
            (t.prototype.messageHandlingComplete = function () {
              this._currentMode.messageHandlingComplete();
            }),
            (t.prototype.recoverFromError = function (e, t) {
              this._errorRecoveryHelper.recoverFromErrorOnNewGameRound(t);
            }),
            (t.prototype.createErrorRecoveryHelper = function (e) {
              return new i(e, this);
            }),
            (t.prototype.performMainGameWinPresentation = function (e) {
              var t,
                i = this,
                n = (this._wpSequence = a()),
                o = this._game,
                s = n.startWith.call(function (n) {
                  (t = n),
                    o.setClientBalanceToServerBalance(!1),
                    i.sendWinPresentationStartedEvent(e, "main"),
                    e.sue.go
                      ? ((i._singleSpinMode.activationStrategy =
                          i._singleSpinMode.activationWhenPresentingFinalWin),
                        i._currentMode.handleFinalWinPresentationStarted(),
                        i._winPresentationManager.onWinPresentationStarted.addOnce(
                          function () {
                            i.finalWinPresentationStartedCallback();
                          }
                        ))
                      : o.jsBridge.featureWon(e.bgwe ? "bonus" : "mystery"),
                    i._winPresentationManager.onWinPresentationComplete.addOnce(
                      n
                    ),
                    i._winPresentationManager.onWinPresentationAborted.addOnce(
                      n
                    ),
                    i._winPresentationManager.startWinPresentation(e);
                }).then;
              (s = s.callSync(function () {
                i._winPresentationManager.onWinPresentationComplete.remove(t),
                  i._winPresentationManager.onWinPresentationAborted.remove(t);
              }).then),
                (n.oncomplete = function () {
                  i.sendWinPresentationCompleteEvent(e, "main"),
                    e.sue.go
                      ? ((i._wpSequence = null),
                        (i._singleSpinMode.activationStrategy =
                          i._singleSpinMode.activationWhenIdle),
                        i._game.scene.idleAnimationManager.gameIsIdle(),
                        i.finalWinPresentationCompleteCallback())
                      : e.bgwe
                      ? ((i._singleSpinMode.activationStrategy = function () {
                          return i._singleSpinMode.activationDuringBonusGame(
                            e.bgsue.fsl
                          );
                        }),
                        i._currentMode.handleBonusGameEntered(e),
                        i.enterBonusGame(e))
                      : ((i._singleSpinMode.activationStrategy = function () {
                          return i._singleSpinMode.activationDuringPick();
                        }),
                        i._currentMode.handleMysteryGameEntered(e),
                        i.enterMysteryGame(e));
                }),
                n.run();
            }),
            (t.prototype.getWinLevelId = function (e) {
              return this._game.model.getWinLevelId(e);
            }),
            (t.prototype.sendWinPresentationStartedEvent = function (e, t) {
              e.pwge
                ? this._game.jsBridgeHelper.winPresentationStarted(t, {
                    winLevelId: this.getWinLevelId(e.pwge.stbm),
                    winAmount: e.pwge.stwa,
                    betMultiplier: e.pwge.stbm,
                  })
                : this._game.jsBridgeHelper.winPresentationStarted(t, {
                    winLevelId: 0,
                    winAmount: 0,
                    betMultiplier: 0,
                  });
            }),
            (t.prototype.sendWinPresentationCompleteEvent = function (e, t) {
              e.pwge
                ? this._game.jsBridgeHelper.winPresentationComplete(t, {
                    winLevelId: this.getWinLevelId(e.pwge.stbm),
                    winAmount: e.pwge.stwa,
                    betMultiplier: e.pwge.stbm,
                  })
                : this._game.jsBridgeHelper.winPresentationComplete(t, {
                    winLevelId: 0,
                    winAmount: 0,
                    betMultiplier: 0,
                  });
            }),
            (t.prototype.enterBonusGame = function (e) {
              var t = this,
                i = (this._bgSequence = a());
              i.startWith.call(function (i) {
                t._game.updateCashField(),
                  t._bonusIntro.startBonusGameIntro(e, i);
              }).then;
              (i.oncomplete = function () {
                (t._singleSpinMode.activationStrategy = function () {
                  return t._singleSpinMode.activationAfterBonusIntro(e);
                }),
                  t._currentMode.handleBonusIntroComplete(e);
              }),
                i.run();
            }),
            (t.prototype.performFreeSpin = function () {
              var e = this,
                t = this.getCurrentState(),
                i = t.bgsue.fsl - 1;
              (this._singleSpinMode.activationStrategy = function () {
                return e._singleSpinMode.activationDuringBonusGame(i);
              }),
                this._currentMode.handleFreeSpinStarted(i);
              var n = this._game;
              n.jsBridgeHelper.spinStarted();
              var s = (this._spinSequence = a()),
                r = s.startWith.call(function (i) {
                  var a = o(i),
                    r = a.addCallback("frame"),
                    l = a.addCallback("response");
                  n.scene.stickyWildPresenter.moveWildsToTopOfLayer(),
                    n.scene.countUp.fadeOutCountUp(0.3, 0.1),
                    e._wildInjectManager.showFrame(t, r),
                    n.slowConnectionTracker.requestSent(),
                    n.serverConnection.freespin(
                      function (i) {
                        e.handleFreeSpinResponseReceived(i),
                          (t = e.getCurrentState()),
                          l();
                      },
                      function (t) {
                        e.handleSpinErrorResponse(t),
                          e._spinLtm.killAll(),
                          s.abort();
                      }
                    );
                }).then;
              (r = (r = (r = r.call(function (i) {
                e._wildInjectManager.performWildInjection(t, i);
              }).then).call(function (t) {
                n.scene.paylineButtonsManager.turnLightsOff(),
                  n.scene.reels.startSpin(!0),
                  e._spinLtm.delayedCall(0.5, t);
              }).then).call(function (t) {
                n.scene.reels.onSpinComplete.addOnce(t),
                  n.scene.reels.stopSpin(e.getCurrentState());
              }).then),
                (s.oncomplete = function () {
                  e.performBonusGameWinPresentation(t);
                }),
                s.run();
            }),
            (t.prototype.performBonusGameWinPresentation = function (e) {
              var t,
                i = this,
                n = (this._wpSequence = a()),
                o = this._game,
                s = n.startWith.call(function (n) {
                  (t = n),
                    o.setClientBalanceToServerBalance(!1),
                    i.sendWinPresentationStartedEvent(e, "bonus"),
                    i._winPresentationManager.onWinPresentationComplete.addOnce(
                      n
                    ),
                    i._winPresentationManager.onWinPresentationAborted.addOnce(
                      n
                    ),
                    i._winPresentationManager.startWinPresentation(e);
                }).then;
              (s = s.callSync(function () {
                i._winPresentationManager.onWinPresentationComplete.remove(t),
                  i._winPresentationManager.onWinPresentationAborted.remove(t);
              }).then),
                (n.oncomplete = function () {
                  i.sendWinPresentationCompleteEvent(e, "bonus"),
                    e.sue.go ? i.exitBonusGame(e) : i.performFreeSpin();
                }),
                n.run();
            }),
            (t.prototype.exitBonusGame = function (e) {
              var t = this,
                i = (this._bgSequence = a());
              i.startWith.call(function (i) {
                t._game.updateTotalWinField(),
                  t._game.updateCashField(),
                  t._winPresentationManager.resetAfterBonus(),
                  (t._skipStrategy = t._bonusOutro.skipStrategy),
                  t._bonusOutro.playBonusGameOutro(e, i);
              }).then;
              (i.oncomplete = function () {
                (t._singleSpinMode.activationStrategy =
                  t._singleSpinMode.activationAfterBonusOutro),
                  t._currentMode.handleBonusOutroComplete(),
                  t.finalWinPresentationStartedCallback(),
                  t.finalWinPresentationCompleteCallback();
              }),
                i.run();
            }),
            (t.prototype.performMainGameExpansions = function (e, t) {
              e.see ? this._expansionsManager.playExpansions(e.see.ed, t) : t();
            }),
            (t.prototype.enterMysteryGame = function (e) {
              var t = this,
                i = (this._mysterySequence = a());
              i.startWith.call(function (i) {
                t._mysteryGame.setupForMysteryPicks(),
                  t._mysteryIntro.playMysteryGameIntro(e, i);
              }).then;
              (i.oncomplete = function () {
                (t._singleSpinMode.activationStrategy =
                  t._singleSpinMode.activationDuringPick),
                  t._currentMode.mysteryGameIntroComplete(),
                  t.performDoorPick();
              }),
                i.run();
            }),
            (t.prototype.performDoorPick = function () {
              var e,
                t = this,
                i = (this._mysteryPickSequence = a()),
                n = this.getCurrentState(),
                o = i.startWith.call(function (i) {
                  (t._singleSpinMode.activationStrategy =
                    t._singleSpinMode.activationDuringPick),
                    t._mysteryGame.enableDoorPicking(function (t) {
                      (e = t), i();
                    }),
                    t._currentMode.handleDoorPickEnabled();
                }).then;
              (o = (o = (o = (o = o.call(function (a) {
                t._game.slowConnectionTracker.requestSent(),
                  t._game.serverConnection.pick(
                    e,
                    function (e) {
                      t.handlePickResponseRecieved(e),
                        (n = t.getCurrentState()),
                        a();
                    },
                    function (e) {
                      t.handleSpinErrorResponse(e), i.abort();
                    }
                  );
              }).then).call(function (e) {
                t._mysteryGame.openPickedDoor(n.sue, n.dpe, function (i) {
                  (t._mysteryOutro.openedDoors = i), e();
                });
              }).then).call(function (e) {
                t._currentMode == t._autoSpinMode
                  ? t._mysteryLtm.delayedCall(0.5, e)
                  : e();
              }).then).call(function (e) {
                n.sue.go ? t._mysteryOutro.revealUnopenedDoors(n, e) : e();
              }).then),
                (i.oncomplete = function () {
                  n.sue.go ? t.exitMysteryGame(n) : t.performDoorPick();
                }),
                i.run();
            }),
            (t.prototype.handlePickResponseRecieved = function (e) {
              this._game.slowConnectionTracker.responseReceived(),
                this._game.model.updateSlotModelFromContinueGameRoundResponse(
                  e
                );
            }),
            (t.prototype.exitMysteryGame = function (e) {
              var t = this,
                i = (this._mysterySequence = a());
              i.startWith.call(function (i) {
                (t._skipStrategy = t._mysteryOutro.skipStrategy),
                  t._mysteryOutro.playMysteryGameOutro(e, i);
              }).then;
              (i.oncomplete = function () {
                (t._singleSpinMode.activationStrategy =
                  t._singleSpinMode.activationWhenPresentingFinalWin),
                  t._currentMode.handleMysteryGameOutroComplete(),
                  t.finalWinPresentationStartedCallback(),
                  t.finalWinPresentationCompleteCallback();
              }),
                i.run();
            }),
            t
          );
        })();
      t.RoundState = l;
    })(e.fsm || (e.fsm = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e(e) {
          this._game = e;
        }
        return (
          (e.prototype.handleSpinResponseReceived = function () {}),
          (e.prototype.resumeRestoredGameRound = function () {}),
          (e.prototype.update = function (e) {}),
          (e.prototype.handleBonusIntroComplete = function (e) {}),
          (e.prototype.handleFreeSpinStarted = function (e) {}),
          (e.prototype.handleBonusOutroComplete = function () {}),
          (e.prototype.mysteryGameIntroComplete = function () {}),
          (e.prototype.handleDoorPickEnabled = function () {}),
          (e.prototype.handleMysteryGameOutroComplete = function () {}),
          (e.prototype.handleSpinStarted = function () {}),
          (e.prototype.handleSpinComplete = function () {}),
          (e.prototype.handleMysteryGameEntered = function (e) {}),
          e
        );
      })();
      e.GamePlayMode = t;
    })(e.fsm || (e.fsm = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return (
          __extends(t, e),
          (t.prototype.getAutoPlayState = function () {
            return this._game.model.autoPlayState;
          }),
          (t.prototype.activate = function () {
            var e = this.getAutoPlayState();
            this._game.gui.setAutoSpinMode(
              e.roundsLeft || e.roundsTotal,
              e.started
            );
          }),
          (t.prototype.deactivate = function () {}),
          (t.prototype.newRoundAccepted = function () {
            var e = this._game,
              t = this.getAutoPlayState();
            0 === t.roundsLeft
              ? e.gui.setLastAutoSpinMode(t.roundsTotal)
              : e.gui.setAutoSpinMode(t.roundsLeft, !0);
          }),
          (t.prototype.newRoundRejected = function () {
            var e = this.getAutoPlayState();
            this._game.gui.setAutoSpinMode(e.roundsLeft || e.roundsTotal, !1);
          }),
          (t.prototype.handleGuiButtonClicked = function (e, t) {
            e === tk_common.slots.gui.GuiButtonIds.START_AUTO_PLAY &&
              this.startNewRoundRequestedCallback();
          }),
          (t.prototype.handleDialogButtonClicked = function (e, t, i) {}),
          (t.prototype.handleFinalWinPresentationStarted = function () {
            var e = this.getAutoPlayState();
            this._game.gui.setSpinMode(!1),
              0 === e.roundsLeft
                ? this._game.gui.setAutoSpinMode(e.roundsTotal, !1)
                : this._game.gui.setAutoSpinMode(e.roundsLeft, e.started);
          }),
          (t.prototype.messageHandlingComplete = function () {
            this.activate();
          }),
          (t.prototype.handleBonusIntroComplete = function (e) {
            this._game.gui.setFeatureRoundsMode(e.bgwe.fsw, !1),
              this.startBonusGameRequestedCallback();
          }),
          (t.prototype.handleFreeSpinStarted = function (e) {
            this._game.gui.setFeatureRoundsMode(e, !1);
          }),
          (t.prototype.handleBonusOutroComplete = function () {
            this.handleFinalWinPresentationStarted();
          }),
          (t.prototype.mysteryGameIntroComplete = function () {}),
          (t.prototype.handleDoorPickEnabled = function () {
            this.mysteryGame.autoPickDoor();
          }),
          (t.prototype.handleMysteryGameOutroComplete = function () {
            this.handleFinalWinPresentationStarted();
          }),
          (t.prototype.handleBonusGameEntered = function (e) {
            this._game.gui.setFeatureRoundsMode(e.bgsue.fsl, !1),
              this._game.model.autoPlayState.stopOnFeatureWon &&
                this.stopAutoPlayRequestedCallback();
          }),
          (t.prototype.handleMysteryGameEntered = function (e) {
            this._game.model.autoPlayState.stopOnFeatureWon &&
              this.stopAutoPlayRequestedCallback();
          }),
          t
        );
      })(e.GamePlayMode);
      e.AutoSpinMode = t;
    })(e.fsm || (e.fsm = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return (
          __extends(t, e),
          (t.prototype.getCurrentFreeRoundProgram = function () {
            return this._game.model.currentFreeRoundProgram;
          }),
          (t.prototype.activate = function () {
            this._game.gui.setFreeRoundsMode(
              this.getCurrentFreeRoundProgram().freeroundsremaining,
              !0
            );
          }),
          (t.prototype.deactivate = function () {}),
          (t.prototype.handleGuiButtonClicked = function (e, t) {
            if (e === tk_common.slots.gui.GuiButtonIds.START_FREE_ROUND) {
              var i = this.getCurrentFreeRoundProgram();
              this._game.gui.setFreeRoundsMode(i.freeroundsremaining, !1),
                this.startNewRoundRequestedCallback();
            } else
              e === tk_common.slots.gui.GuiButtonIds.QUICK_STOP
                ? this._game.gui.setQuickStopMode(!1)
                : e == tk_common.slots.gui.GuiButtonIds.START_FEATURE &&
                  this.startBonusGameRequestedCallback();
          }),
          (t.prototype.handleDialogButtonClicked = function (e, t, i) {
            var n = this.getCurrentFreeRoundProgram();
            e === tk_common.slots.gui.DialogTypeEnum.GAME_ROUND_RESTORED
              ? (this._game.gui.setFreeRoundsMode(n.freeroundsremaining, !1),
                this._game.gui.setSpinMode(!0))
              : e === tk_common.slots.gui.DialogTypeEnum.FREE_ROUNDS_FOUND &&
                this._game.gui.setFreeRoundsMode(n.freeroundsremaining, !0);
          }),
          (t.prototype.handleSpinResponseReceived = function () {}),
          (t.prototype.handleFinalWinPresentationStarted = function () {
            var e = this.getCurrentFreeRoundProgram();
            e.freeroundsremaining > 0
              ? this._game.gui.setFreeRoundsMode(e.freeroundsremaining, !0)
              : this._game.gui.setFreeRoundsMode(e.freeroundsremaining, !1);
          }),
          (t.prototype.newRoundAccepted = function () {
            var e = this.getCurrentFreeRoundProgram();
            this._game.gui.setFreeRoundsMode(e.freeroundsremaining, !1);
          }),
          (t.prototype.newRoundRejected = function () {
            var e = this.getCurrentFreeRoundProgram();
            this._game.gui.setFreeRoundsMode(e.freeroundsremaining, !0);
          }),
          (t.prototype.resumeRestoredGameRound = function () {
            var e = this.getCurrentFreeRoundProgram();
            this._game.gui.setFreeRoundsMode(e.freeroundsremaining, !1),
              this._game.gui.setSpinMode(!0);
          }),
          (t.prototype.messageHandlingComplete = function () {
            this.activate();
          }),
          (t.prototype.handleFreeSpinStarted = function (e) {
            this._game.gui.setFeatureRoundsMode(e, !1);
          }),
          (t.prototype.handleBonusOutroComplete = function () {
            this.handleFinalWinPresentationStarted();
          }),
          (t.prototype.mysteryGameIntroComplete = function () {}),
          (t.prototype.handleMysteryGameOutroComplete = function () {
            this.handleFinalWinPresentationStarted();
          }),
          (t.prototype.handleBonusGameEntered = function (e) {
            this._game.gui.setFeatureRoundsMode(e.bgsue.fsl, !1);
          }),
          (t.prototype.handleBonusIntroComplete = function (e) {
            this._game.gui.setSpinMode(!1);
            var t = this.getCurrentFreeRoundProgram();
            this._game.gui.setFreeRoundsFeatureMode(
              t.freeroundsremaining,
              e.bgwe.fsw,
              !0
            );
          }),
          t
        );
      })(e.GamePlayMode);
      e.FreeRoundMode = t;
    })(e.fsm || (e.fsm = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function (e) {
        function t(t) {
          var i = e.call(this, t) || this;
          return (
            (i.activationWhenIdle = i.activationWhenIdle.bind(i)),
            (i.activationWhenPresentingFinalWin =
              i.activationWhenPresentingFinalWin.bind(i)),
            (i.activationWhenSpinning = i.activationWhenSpinning.bind(i)),
            (i.activationDuringBonusGame = i.activationDuringBonusGame.bind(i)),
            (i.activationAfterBonusOutro = i.activationAfterBonusOutro.bind(i)),
            (i.activationDuringPick = i.activationDuringPick.bind(i)),
            i
          );
        }
        return (
          __extends(t, e),
          (t.prototype.activationWhenIdle = function () {
            this._game.gui.setSingleSpinMode(!0);
          }),
          (t.prototype.activationWhenSpinning = function () {
            this._game.gui.setSpinMode(!0),
              this._game.gui.setSingleSpinMode(!1);
          }),
          (t.prototype.activationWhenPresentingFinalWin = function () {
            this._game.gui.setSingleSpinMode(!0);
          }),
          (t.prototype.activate = function () {
            this.activationStrategy();
          }),
          (t.prototype.deactivate = function () {}),
          (t.prototype.handleGuiButtonClicked = function (e, t) {
            e === tk_common.slots.gui.GuiButtonIds.SPIN
              ? (this._game.gui.setSpinMode(!0),
                this.startNewRoundRequestedCallback())
              : e === tk_common.slots.gui.GuiButtonIds.QUICK_STOP
              ? this._game.gui.setQuickStopMode(!1)
              : e == tk_common.slots.gui.GuiButtonIds.START_FEATURE &&
                this.startBonusGameRequestedCallback();
          }),
          (t.prototype.handleDialogButtonClicked = function (e, t, i) {
            e === tk_common.slots.gui.DialogTypeEnum.GAME_ROUND_RESTORED &&
              (this._game.gui.setSingleSpinMode(!1),
              this._game.gui.setSpinMode(!0));
          }),
          (t.prototype.handleSpinResponseReceived = function () {}),
          (t.prototype.handleFinalWinPresentationStarted = function () {
            this._game.gui.setSpinMode(!1),
              this._game.gui.setSingleSpinMode(!0);
          }),
          (t.prototype.newRoundAccepted = function () {
            this._game.gui.setSingleSpinMode(!1),
              this._game.gui.setSpinMode(!0);
          }),
          (t.prototype.newRoundRejected = function () {
            this._game.gui.setSpinMode(!1),
              this._game.gui.setSingleSpinMode(!0);
          }),
          (t.prototype.resumeRestoredGameRound = function () {
            this._game.gui.setSingleSpinMode(!1),
              this._game.gui.setSpinMode(!0);
          }),
          (t.prototype.messageHandlingComplete = function () {
            this.activate();
          }),
          (t.prototype.handleBonusIntroComplete = function (e) {
            this._game.gui.setSpinMode(!1),
              this._game.gui.setFeatureRoundsMode(e.bgwe.fsw, !0);
          }),
          (t.prototype.activationAfterBonusIntro = function (e) {
            this._game.gui.setSpinMode(!1),
              this._game.gui.setFeatureRoundsMode(e.bgwe.fsw, !0);
          }),
          (t.prototype.activationDuringBonusGame = function (e) {
            this._game.gui.setFeatureRoundsMode(e, !1);
          }),
          (t.prototype.activationAfterBonusOutro = function () {
            this._game.gui.setSpinMode(!1),
              this._game.gui.setSingleSpinMode(!0);
          }),
          (t.prototype.handleFreeSpinStarted = function (e) {
            this._game.gui.setFeatureRoundsMode(e, !1);
          }),
          (t.prototype.handleBonusOutroComplete = function () {
            this.handleFinalWinPresentationStarted();
          }),
          (t.prototype.activationDuringPick = function () {
            this._game.gui.setSingleSpinMode(!1);
          }),
          (t.prototype.mysteryGameIntroComplete = function () {}),
          (t.prototype.handleMysteryGameOutroComplete = function () {
            this.handleFinalWinPresentationStarted();
          }),
          (t.prototype.handleSpinStarted = function () {
            this._game.gui.setQuickStopMode(!0);
          }),
          (t.prototype.handleSpinComplete = function () {
            this._game.gui.setSingleSpinMode(!1);
          }),
          (t.prototype.handleBonusGameEntered = function (e) {
            this._game.gui.setFeatureRoundsMode(e.bgsue.fsl, !1);
          }),
          t
        );
      })(e.GamePlayMode);
      e.SingleSpinMode = t;
    })(e.fsm || (e.fsm = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    var t = (function () {
      function e(e, t, i) {
        (this._paylineId = e),
          (this._reelSymbolIndexes = t),
          (this._winAmount = i);
      }
      return (
        Object.defineProperty(e.prototype, "reelSymbolIndexes", {
          get: function () {
            return this._reelSymbolIndexes;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "paylineId", {
          get: function () {
            return this._paylineId;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "winAmount", {
          get: function () {
            return this._winAmount;
          },
          enumerable: !1,
          configurable: !0,
        }),
        e
      );
    })();
    e.PaylineData = t;
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = (function () {
        function t(e) {
          (this._activeGamePartId = "main"), (this._game = e);
        }
        return (
          (t.prototype.restoreStateEntered = function (e) {
            this._activeGamePartId = e;
          }),
          (t.prototype.convertSpinRequestToVanillaRequests = function (e) {
            var t = [];
            if (
              e.data.ocSymbols ||
              e.data.ocMaxBM ||
              e.data.ocMinBM ||
              e.data.ocSpinsLeft
            ) {
              var i = {
                classname: "tk.g.slots.vanilla.rq.OCRequest",
                requesttype: this._activeGamePartId + ".oc",
                symbols: e.data.ocSymbols,
                minbetmultiplier: e.data.ocMinBM,
                maxbetmultiplier: e.data.ocMaxBM,
              };
              t.push(i);
            }
            var n = {
              bets: [e.data.bet],
              requesttype: "main.spin",
              classname: "tk.g.slots.vanilla.rq.SpinRequest",
              regulator: this._game.model.regulator,
            };
            return t.push(n), t;
          }),
          (t.prototype.convertRespinRequestToVanillaRequests = function (e) {
            var t = [];
            if (
              e.data.ocSymbols ||
              e.data.ocMaxBM ||
              e.data.ocMinBM ||
              e.data.ocSpinsLeft
            ) {
              var i = {
                classname: "tk.g.slots.vanilla.rq.OCRequest",
                requesttype: "main.oc",
                symbols: e.data.ocSymbols,
                minbetmultiplier: e.data.ocMinBM,
                maxbetmultiplier: e.data.ocMaxBM,
                spinsleft: e.data.ocSpinsLeft,
              };
              t.push(i);
            }
            var n = {
              classname: "tk.g.slots.vanilla.rq.RespinRequest",
              regulator: this._game.model.regulator,
              requesttype: this._activeGamePartId + ".respin",
            };
            return t.push(n), t;
          }),
          (t.prototype.convertFreespinRequestToVanillaRequests = function (e) {
            var t = [];
            if (
              e.data.ocSymbols ||
              e.data.ocMaxBM ||
              e.data.ocMinBM ||
              e.data.ocSpinsLeft
            ) {
              var i = {
                classname: "tk.g.slots.vanilla.rq.OCRequest",
                requesttype: this._activeGamePartId + ".oc",
                symbols: e.data.ocSymbols,
                minbetmultiplier: e.data.ocMinBM,
                maxbetmultiplier: e.data.ocMaxBM,
                spinsleft: e.data.ocSpinsLeft,
              };
              t.push(i);
            }
            var n = {
              classname: "tk.g.slots.vanilla.rq.SpinRequest",
              regulator: this._game.model.regulator,
              requesttype: this._activeGamePartId + ".spin",
            };
            return t.push(n), t;
          }),
          (t.prototype.convertFreespinRespinRequestToVanillaRequests =
            function (e) {
              var t = [];
              if (
                e.data.ocSymbols ||
                e.data.ocMaxBM ||
                e.data.ocMinBM ||
                e.data.ocSpinsLeft
              ) {
                var i = {
                  classname: "tk.g.slots.vanilla.rq.OCRequest",
                  requesttype: this._activeGamePartId + ".oc",
                  symbols: e.data.ocSymbols,
                  minbetmultiplier: e.data.ocMinBM,
                  maxbetmultiplier: e.data.ocMaxBM,
                };
                t.push(i);
              }
              var n = {
                classname: "tk.g.slots.vanilla.rq.RespinRequest",
                regulator: this._game.model.regulator,
                requesttype: this._activeGamePartId + ".respin",
              };
              return t.push(n), t;
            }),
          (t.prototype.responseToChocolate = function (e) {
            var t = e.gameresponses[e.gameresponses.length - 1],
              i = this.createChocolateSpinResponse(t);
            return (
              (i.requesttype = t.requesttype),
              (i.classname = t.requesttype),
              (e.gameresponses = [i]),
              e
            );
          }),
          (t.prototype.createChocolateSpinResponse = function (e) {
            var t = e.state.activegamepartid,
              i = e.state.gameparts[t || "main"],
              n = i.nextaction,
              a = e.state.respondinggamepartid,
              o = e.state.gameparts[a],
              s = e.outcome,
              r = {
                sue: {
                  tc: 0,
                  na: n,
                  tbm: e.state.totalbetmultiplier,
                  twa: e.state.totalwinamount,
                  go: o.ended && i.ended,
                  respins: o.respins,
                  cmult: o.multiplier,
                  nmult: o.nextmultiplier,
                  rgp: a,
                  agp: t,
                  pa: e.requesttype,
                  mgwa: e.state.gameparts.main.totalwinamount,
                },
                nwe: {
                  excitingreelsfrom: o.excitingreelsfrom,
                  excitingreelsto: o.excitingreelsto,
                  excitingsymbolsfrom: o.excitingsymbolsfrom,
                  excitingsymbolsto: o.excitingsymbolsfrom,
                },
                mgwe: this.createMysterGameWonEvent(a, t, o.initialsymbols, i),
                isge: { syms: o.initialsymbols, reelIndices: o.reelindices },
                fsge: { syms: o.finalsymbols },
                see: this.createSymbolsExpandedEvent(
                  this.getLongestWin(s),
                  o.initialsymbols,
                  o.finalsymbols
                ),
                pwge: this.createPaylineWinsGeneratedEvent(s),
                bgwe: this.createBonusGameWonEvent(a, o, t, i),
                bgsue: null,
                wie: this.createStickyWildInjectEvent(o),
                dpe: this.createDoorPickedEvent(o, s),
              };
            r.bgwe
              ? (r.bgsue = {
                  fsl: i.spinsleft,
                  fsp: 0,
                  inwinity: !1,
                  tbm: 0,
                  twa: 0,
                })
              : "main" !== t && "mystery" !== t
              ? (r.bgsue = {
                  fsl: i.spinsleft,
                  fsp: i.initialspins - i.spinsleft,
                  inwinity: i.spinsleft < 0,
                  tbm: i.totalbetmultiplier,
                  twa: i.totalwinamount,
                })
              : -1 != a.indexOf("bonus")
              ? (r.bgsue = {
                  fsl: o.spinsleft,
                  fsp: o.initialspins,
                  inwinity: !1,
                  tbm: o.totalbetmultiplier,
                  twa: o.totalwinamount,
                })
              : (r.bgsue = null),
              (r.sue.tc = e.state.gameparts[t].triggerCount);
            var l = {
              classname: "tk.g.slots.s1.rs.S1Response",
              requesttype: e.requesttype,
              data: { srd: r },
            };
            return (this._activeGamePartId = t), l;
          }),
          (t.prototype.createBonusGameWonEvent = function (e, t, i, n) {
            return "main" === e && 0 === i.indexOf("bonus")
              ? {
                  id: i,
                  fsw: n.spinsleft,
                  mult: n.multiplier,
                  pos: t.finalsymbols.reduce(function (e, t, i) {
                    return 10 === t && e.push(i), e;
                  }, []),
                }
              : null;
          }),
          (t.prototype.createSymbolsExpandedEvent = function (t, i, n) {
            if (null == t) return null;
            for (var a = t.positions.length, o = [], s = 0; s < i.length; s++)
              if (i[s] === e.model.SymbolIdEnum.EXPANSION && i[s] !== n[s]) {
                var r = Math.floor(
                  s / e.view.AstronautReels.SYMBOLS_PER_REEL_ON_SERVER
                );
                if (r <= a - 1) {
                  var l = s % 3;
                  o.push({
                    symbolIndex: l,
                    reelIndex: r,
                    direction: l,
                    finalSymbolId: n[s],
                  });
                }
              }
            return o.length > 0 ? { ed: o } : null;
          }),
          (t.prototype.createPaylineWinsGeneratedEvent = function (e) {
            var t = e.winnings;
            return t && null != t.paylinewins
              ? {
                  stbm: e.totalbetmultiplier,
                  stwa: e.totalwinamount,
                  pwins: this.createPaylineWinSituations(e),
                }
              : null;
          }),
          (t.prototype.createPaylineWinSituations = function (e) {
            return e.winnings.paylinewins.map(function (e) {
              return {
                pos: e.positions,
                wa: e.winamount,
                bm: e.betmultiplier,
                pid: e.id,
                sid: e.symbolid,
              };
            });
          }),
          (t.prototype.createMysterGameWonEvent = function (e, t, i, n) {
            return "main" == e && "mystery" == t
              ? {
                  mult: n.multiplier,
                  pos: i.reduce(function (e, t, i) {
                    return 12 === t && e.push(i), e;
                  }, []),
                }
              : null;
          }),
          (t.prototype.createStickyWildInjectEvent = function (e) {
            if ("main" === e.name || "mystery" === e.name) return null;
            var t = e.previousStickyWildLocations || [],
              i = !1;
            -1 === t.indexOf(e.generatedStickyWildLocation) && (i = !0);
            var n = t.concat();
            return (
              i && n.push(e.generatedStickyWildLocation),
              { pos: e.generatedStickyWildLocation, swl: n, new: i }
            );
          }),
          (t.prototype.getLongestWin = function (e) {
            if (null == e.winnings || null == e.winnings.paylinewins)
              return null;
            for (
              var t = e.winnings.paylinewins, i = t[0], n = 0;
              n < t.length;
              n++
            )
              i.positions.length < t[n].positions.length && (i = t[n]);
            return i;
          }),
          (t.prototype.convertPickRequestToVanillaRequests = function (e) {
            var t = [],
              i = {
                classname: "tk.g.slots.vanilla.rq.PickRequest",
                regulator: this._game.model.regulator,
                requesttype: "mystery.pick",
                selectedoptions: [e.data.pick],
              };
            return t.push(i), t;
          }),
          (t.prototype.createDoorPickedEvent = function (e, t) {
            return null != e.pickedDoor
              ? {
                  di: e.pickedDoor,
                  bm: t.totalbetmultiplier,
                  wa: t.totalwinamount,
                  doors: e.mysteryDoors,
                }
              : null;
          }),
          t
        );
      })();
      t.RequestResponseAdapter = i;
    })(e.net || (e.net = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = (function (t) {
        function i(e, i, n) {
          var a = t.call(this, e, i, n) || this,
            o = a.sessionInfo;
          return (
            (o.superSpins = 0),
            (o.balanceAfter100Rounds = NaN),
            (o.highestBalance = 0),
            (o.largestWin = 0),
            (o.modeLevel1 = 0),
            (o.modeLevel2 = 0),
            (o.modeLevel3 = 0),
            a
          );
        }
        return (
          __extends(i, t),
          (i.prototype.updateModelFromGameConfig = function (e) {
            t.prototype.updateModelFromGameConfig.call(this, e),
              (this._winLevels = e.winLevels || [
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
              ]),
              (this.gameConfig = e);
          }),
          (i.prototype.getSelectedBetFromGameConfig = function (e) {
            return e.betconfig.defaultbet;
          }),
          (i.prototype.updateGameSpecificModelFromNewGameRoundResponse =
            function (e) {
              var t = e.gameresponses[0];
              (this.gameRound.previousState = void 0),
                (this.gameRound.currentState = t.data.srd),
                (this.gameRound.currentOutcome = this.gameRound.currentState);
              var i = this.gameRound.currentState;
              (this.gameRound.totalWinAmountForGameRound = i.sue.twa),
                (this.gameRound.totalBetMultiplierForGameRound = i.sue.tbm);
            }),
          (i.prototype.updateSessionInfoFromContinueGameRoundResponse =
            function (e, t) {
              t && this.updateSessionInfoOnGameOver(e.gameresponses[0]);
            }),
          (i.prototype.updateSessionInfoOnGameOver = function (e) {
            var t = this.sessionInfo;
            (t.highestBalance = Math.max(this.serverBalance, t.highestBalance)),
              100 === this.sessionInfo.roundsPlayed &&
                (t.balanceAfter100Rounds = this.serverBalance),
              50 === this.sessionInfo.roundsPlayed &&
                (t.balanceAfter50Rounds = this.serverBalance);
            var i = e.data.srd;
            i.sue.twa > 0
              ? ((t.largestWin = Math.max(t.largestWin, i.sue.tbm)), t.wins++)
              : t.nowins++,
              (t.rtp =
                this.totalWinAmountForSession / this.totalBetAmountForSession);
          }),
          (i.prototype.updateSessionInfoFromNewGameRoundResponse = function (
            e,
            t
          ) {
            t && this.updateSessionInfoOnGameOver(e.gameresponses[0]);
          }),
          (i.prototype.updateGameSpecificModelFromContinueGameRoundResponse =
            function (e) {
              var t = e.gameresponses[0];
              (this.gameRound.previousState = this.gameRound.currentState),
                (this.gameRound.currentState = t.data.srd),
                (this.gameRound.currentOutcome = this.gameRound.currentState);
              var i = this.gameRound.currentState;
              (this.gameRound.totalWinAmountForGameRound = i.sue.twa),
                (this.gameRound.totalBetMultiplierForGameRound = i.sue.tbm);
            }),
          (i.prototype.updateModelFromRestoreStateData = function (i) {
            var n = new e.net.RequestResponseAdapter(null);
            (i.restorestate.serviceresponses =
              i.restorestate.serviceresponses.map(function (e) {
                return n.responseToChocolate(e);
              })),
              t.prototype.updateModelFromRestoreStateData.call(this, i);
          }),
          (i.prototype.updateActiveGameRoundFromRestoreStateData = function (
            e,
            t
          ) {
            var i,
              n = t.serviceresponses[0];
            if (
              ((e.metaTags = n.metagametags),
              (e.gameRoundId = n.gameroundid),
              (e.executedAction = "main.spin"),
              t.serviceresponses.length > 1)
            ) {
              var a = t.serviceresponses[t.serviceresponses.length - 2],
                o = a.gameresponses[0];
              (e.previousState = o.data.srd),
                (a = t.serviceresponses[t.serviceresponses.length - 1]),
                (e.metaTags = a.metagametags || []),
                (i = a.gameresponses[0]),
                (e.executedAction = i.requesttype);
            } else i = n.gameresponses[0];
            var s = i.data.srd;
            (e.currentOutcome = s),
              (e.currentState = s),
              (e.nextAction = s.sue.na),
              (e.totalBetMultiplierForGameRound = s.sue.tbm),
              (e.totalWinAmountForGameRound = s.sue.twa),
              (e.currentOutcome.hasWins =
                void 0 !== e.currentOutcome.scatterWin);
          }),
          (i.prototype.getAnteBetFromRestoreStateData = function (e) {
            var t = e.servicerequests[0];
            return t.gamerequests[t.gamerequests.length - 1].bets[0];
          }),
          (i.prototype.getPaymentForSymbol = function (e, t) {
            for (
              var i = this.gameConfig.gamepartconfigs.main.paytablesymbols,
                n = 0;
              n < i.length;
              n++
            ) {
              var a = i[n];
              if (a.symbolid === e) return a.payments["" + (t - 3)];
            }
            return i[e].payments["" + (t - 3)];
          }),
          i
        );
      })(tk_common.slots.model.CommonSlotModel);
      t.Model = i;
    })(e.model || (e.model = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      !(function (e) {
        (e[(e.WILD = 0)] = "WILD"),
          (e[(e.BAR = 1)] = "BAR"),
          (e[(e.SEVEN = 2)] = "SEVEN"),
          (e[(e.BELL = 3)] = "BELL"),
          (e[(e.MELON = 4)] = "MELON"),
          (e[(e.LEMON = 5)] = "LEMON"),
          (e[(e.ORANGE = 6)] = "ORANGE"),
          (e[(e.PLUM = 7)] = "PLUM"),
          (e[(e.CHERRY = 8)] = "CHERRY"),
          (e[(e.GRAPE = 9)] = "GRAPE"),
          (e[(e.BONUS = 10)] = "BONUS"),
          (e[(e.EXPANSION = 11)] = "EXPANSION"),
          (e[(e.MYSTERY = 12)] = "MYSTERY"),
          (e[(e.STICKY_WILD = 13)] = "STICKY_WILD");
      })(e.SymbolIdEnum || (e.SymbolIdEnum = {}));
    })(e.model || (e.model = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      e.removeOtherListeners = function (e, t) {
        var i = function () {
          for (var n = [], a = 0; a < arguments.length; a++)
            n[a] = arguments[a];
          t.forEach(function (e) {
            e.remove(i);
          }),
            e.apply(void 0, n);
        };
        return i;
      };
    })(e.utils || (e.utils = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = tk_common.utils.getQueryStringParam,
        i = "https://prototype-games.thunderkick.com/mathconf";
      e.getMathUrl = function (e, n, a) {
        var o = i + "/" + e + "/" + n,
          s = t("math");
        return (
          void 0 !== s &&
            (o =
              -1 !== s.indexOf("http")
                ? s
                : -1 !== s.indexOf("local")
                ? a
                : i + "/" + e + "/" + s + ".json"),
          o
        );
      };
    })(e.utils || (e.utils = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      e.verifyDataIntegrity = function (e, t, i) {
        for (var n = [], a = 0; a < t.length; a++) {
          var o = t[a];
          (o = tk_common.utils.combineObject(e, o)), (n[a] = o);
        }
        return { defaultFrame: e, frames: n, meta: i };
      };
    })(e.utils || (e.utils = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    var t = tk_common.utils.tweens.createLocalTweenMax,
      i = (function () {
        function e(e) {
          (this._game = e), (this._ltm = t(!0));
        }
        return (
          (e.prototype.gameIsIdle = function () {
            this._ltm.delayedCall(
              this._game.gameTweaker.idleAnimation.delay / 1e3,
              this.startGlowIdleAnimations,
              void 0,
              this
            );
          }),
          (e.prototype.roundStarted = function () {
            this._ltm.killAll(), this.stopGlowIdleAnimations();
          }),
          (e.prototype.startGlowIdleAnimations = function () {
            for (
              var e = this._game.scene.reels.getSymbolsOnReels(!1), t = 0;
              t < e.length;
              t++
            ) {
              e[t].startIdleGlowAnimation();
            }
          }),
          (e.prototype.stopGlowIdleAnimations = function () {
            for (
              var e = this._game.scene.reels.getSymbolsOnReels(!1), t = 0;
              t < e.length;
              t++
            ) {
              e[t].stopIdleGlowAnimation();
            }
            this._ltm.killAll();
          }),
          e
        );
      })();
    e.IdleAnimationManager = i;
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e(e) {
          this._game = e;
        }
        return (
          (e.prototype.handleOcDialogButtonClicked = function (e, t, i) {
            if (e === tk_common.slots.gui.GuiButtonIds.CLEAR)
              (this._game.model.ocQueue = []), this.updateGuiOcActionList();
            else if (e === tk_common.slots.gui.GuiButtonIds.APPLY)
              this.applyCustomAction(t);
            else {
              this._game.ocConfiguration.pages[i || "MAIN"].presets[t].action(
                null
              );
            }
          }),
          (e.prototype.applyOcToGameRequest = function (e) {
            var t = this._game.model.ocQueue.shift();
            if (void 0 !== t) {
              var i = this.applyModifiers(t);
              for (var n in (!0 === t.keep && this.pushActionToQueue(t.id, t),
              i))
                e.data[n] = i[n];
              delete e.data.id,
                delete e.data.keep,
                delete e.data.modifiers,
                this.updateGuiOcActionList(),
                this._game.gui.setOcActionList(
                  this.createActionListFromOCQueue(),
                  function (e) {}
                );
            }
          }),
          (e.prototype.applyModifiers = function (e) {
            var t = this,
              i = tk_common.utils.combineObject({}, e);
            return (
              delete i.modifiers,
              e.modifiers &&
                (i = e.modifiers.reduce(function (e, i) {
                  return t._game.ocConfiguration.modifiers[i](e);
                }, i)),
              i
            );
          }),
          (e.prototype.pushActionToQueue = function (e, t) {
            (t.id = e),
              this._game.model.ocQueue.push(t),
              this.updateGuiOcActionList();
          }),
          (e.prototype.unshiftActionToQueue = function (e, t) {
            (t.id = e),
              this._game.model.ocQueue.unshift(t),
              this.updateGuiOcActionList();
          }),
          (e.prototype.createActionListFromOCQueue = function () {
            return (this._game.model.ocQueue || []).map(function (e) {
              return e.id;
            });
          }),
          (e.prototype.updateGuiOcActionList = function () {
            var e = this,
              t = this._game.model;
            e._game.gui.setOcActionList(
              this.createActionListFromOCQueue(),
              function (i) {
                t.ocQueue.splice(i, 1), e.updateGuiOcActionList();
              }
            );
          }),
          (e.prototype.createOcConfiguration = function () {
            var e = this,
              t = this;
            function i(e, i) {
              (i.id = e),
                t._game.model.ocQueue.push(i),
                t.updateGuiOcActionList();
            }
            var n = {
              defaultOcPageId: "MAIN",
              customOutcomeLabelFontSize: 12,
              pages: {
                MAIN: {
                  title: "MAIN",
                  presets: [
                    {
                      title: "No win",
                      id: "noWin",
                      action: function () {
                        i("noWin", { ocMaxBM: 0 });
                      },
                    },
                    {
                      title: "Mini win",
                      id: "miniWin",
                      action: function () {
                        i("miniWin", { ocMinBM: 0.2, ocMaxBM: 1 });
                      },
                    },
                    {
                      title: "Small win",
                      id: "smallWin",
                      action: function () {
                        i("smallWin", { ocMinBM: 2, ocMaxBM: 5 });
                      },
                    },
                    {
                      title: "Medium win",
                      id: "mediumWin",
                      action: function () {
                        i("mediumWin", { ocMinBM: 5, ocMaxBM: 15 });
                      },
                    },
                    {
                      title: "Big win",
                      id: "bigWin",
                      action: function () {
                        i("bigWin", { ocMinBM: 15, ocMaxBM: 50 });
                      },
                    },
                    {
                      title: "Mega win",
                      id: "megaWin",
                      action: function () {
                        i("megaWin", { ocMinBM: 50, ocMaxBM: 100 });
                      },
                    },
                    {
                      title: "1 BM hardcoded",
                      id: "hardcoded",
                      action: function () {
                        i("ultraWin", {
                          ocSymbols: [
                            2, 12, 12, 2, 10, 10, 2, 8, 8, 8, 8, 8, 1, 1, 1,
                          ],
                        });
                      },
                    },
                    {
                      title: "Ultra win",
                      id: "ultraWin",
                      action: function () {
                        i("ultraWin", { ocMinBM: 100 });
                      },
                    },
                  ],
                  custom: {
                    symbolTypes: [
                      "RANDOM",
                      "SYM0",
                      "SYM1",
                      "SYM2",
                      "SYM3",
                      "SYM4",
                      "SYM5",
                      "SYM6",
                      "SYM7",
                      "SYM8",
                      "SYM10",
                      "SYM11",
                      "SYM12",
                    ],
                    listLength: 15,
                    symbolAreaMapping: [
                      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                    ],
                  },
                },
                BONUS: {
                  title: "BONUS",
                  presets: [
                    {
                      title: "Win Bonus",
                      id: "winBonus",
                      action: function () {
                        for (
                          var e = {
                              ocSymbols: [
                                -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                                -1, -1, -1,
                              ],
                            },
                            t = 3,
                            n = [!0, !0, !0, !0, !0];
                          t;

                        ) {
                          var a = Math.floor(5 * Math.random());
                          if (!0 === n[a]) {
                            var o = 3 * a + Math.floor(3 * Math.random());
                            10 !== e.ocSymbols[o] &&
                              ((e.ocSymbols[o] = 10), (n[a] = !1), t--);
                          }
                        }
                        (e.ocSymbols = e.ocSymbols.map(function (e, t) {
                          return 10 != e ? Math.floor(9 * Math.random()) : e;
                        })),
                          i("winBonus", e);
                      },
                    },
                    {
                      title: "Win Bonus x3",
                      id: "winBonusX3",
                      action: function () {
                        for (
                          var e = {
                              ocSymbols: [
                                -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                                -1, -1, -1,
                              ],
                            },
                            t = 4,
                            n = [!0, !0, !0, !0, !0];
                          t;

                        ) {
                          var a = Math.floor(5 * Math.random());
                          if (!0 === n[a]) {
                            var o = 3 * a + Math.floor(3 * Math.random());
                            10 !== e.ocSymbols[o] &&
                              ((e.ocSymbols[o] = 10), (n[a] = !1), t--);
                          }
                        }
                        (e.ocSymbols = e.ocSymbols.map(function (e, t) {
                          return 10 != e ? Math.floor(9 * Math.random()) : e;
                        })),
                          i("winBonusX3", e);
                      },
                    },
                    {
                      title: "Win Bonus x9",
                      id: "winBonusX9",
                      action: function () {
                        for (
                          var e = {
                              ocSymbols: [
                                -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                                -1, -1, -1,
                              ],
                            },
                            t = 5,
                            n = [!0, !0, !0, !0, !0];
                          t;

                        ) {
                          var a = Math.floor(5 * Math.random());
                          if (!0 === n[a]) {
                            var o = 3 * a + Math.floor(3 * Math.random());
                            10 !== e.ocSymbols[o] &&
                              ((e.ocSymbols[o] = 10), (n[a] = !1), t--);
                          }
                        }
                        (e.ocSymbols = e.ocSymbols.map(function (e, t) {
                          return 10 != e ? Math.floor(9 * Math.random()) : e;
                        })),
                          i("winBonusX9", e);
                      },
                    },
                    {
                      title: "Game Over",
                      id: "bgGameOver",
                      action: function () {
                        i("bgGameOver", { ocSpinsLeft: 1 });
                      },
                    },
                  ],
                },
                MYSTERY: {
                  title: "MYSTERY",
                  presets: [
                    {
                      title: "Win Mystery",
                      id: "winMystery",
                      action: function () {
                        for (
                          var e = {
                              ocSymbols: [
                                -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                                -1, -1, -1,
                              ],
                            },
                            t = 3,
                            n = [!0, !0, !0, !0, !0];
                          t;

                        ) {
                          var a = Math.floor(5 * Math.random());
                          if (!0 === n[a]) {
                            var o = 3 * a + Math.floor(3 * Math.random());
                            12 !== e.ocSymbols[o] &&
                              ((e.ocSymbols[o] = 12), (n[a] = !1), t--);
                          }
                        }
                        (e.ocSymbols = e.ocSymbols.map(function (e, t) {
                          return 12 != e ? Math.floor(9 * Math.random()) : e;
                        })),
                          i("winMystery", e);
                      },
                    },
                    {
                      title: "Win Mystery x2",
                      id: "winMysteryX2",
                      action: function () {
                        for (
                          var e = {
                              ocSymbols: [
                                -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                                -1, -1, -1,
                              ],
                            },
                            t = 4,
                            n = [!0, !0, !0, !0, !0];
                          t;

                        ) {
                          var a = Math.floor(5 * Math.random());
                          if (!0 === n[a]) {
                            var o = 3 * a + Math.floor(3 * Math.random());
                            12 !== e.ocSymbols[o] &&
                              ((e.ocSymbols[o] = 12), (n[a] = !1), t--);
                          }
                        }
                        (e.ocSymbols = e.ocSymbols.map(function (e, t) {
                          return 12 != e ? Math.floor(9 * Math.random()) : e;
                        })),
                          i("winMysteryX2", e);
                      },
                    },
                    {
                      title: "Win Mystery x6",
                      id: "winMysteryX6",
                      action: function () {
                        for (
                          var e = {
                              ocSymbols: [
                                -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                                -1, -1, -1,
                              ],
                            },
                            t = 5,
                            n = [!0, !0, !0, !0, !0];
                          t;

                        ) {
                          var a = Math.floor(5 * Math.random());
                          if (!0 === n[a]) {
                            var o = 3 * a + Math.floor(3 * Math.random());
                            12 !== e.ocSymbols[o] &&
                              ((e.ocSymbols[o] = 12), (n[a] = !1), t--);
                          }
                        }
                        (e.ocSymbols = e.ocSymbols.map(function (e, t) {
                          return 12 != e ? Math.floor(9 * Math.random()) : e;
                        })),
                          i("winMysteryX6", e);
                      },
                    },
                  ],
                },
                DEBUG: {
                  title: "DEBUG",
                  presets: [
                    {
                      title: "showDrawCalls",
                      id: "showDrawCalls",
                      action: function (t) {
                        var i = e._game.add.text(0, 0, "", {
                          font: "Arial",
                          fontSize: 32,
                          fill: "#FFFFFF",
                        });
                        e._game.scene.sceneRoot.add(i);
                        var n = 0;
                        TweenMax.to({ waa: 1 }, 1, {
                          waa: 0,
                          repeat: -1,
                          yoyo: !0,
                          onUpdate: function () {
                            var t = e._game.renderer.renderSession.drawCount;
                            t > n && (n = t),
                              (i.text = "Current: " + t + "\nMax: " + n);
                          },
                        });
                      },
                      close: !1,
                    },
                  ],
                },
              },
              sides: {
                MAIN: {
                  gameOver: {
                    title: "Game Over",
                    action: function () {
                      i("gameover", { gameOver: !0 });
                    },
                  },
                  keep: {
                    title: "Keep",
                    action: function () {
                      var e =
                        t._game.model.ocQueue[t._game.model.ocQueue.length - 1];
                      e &&
                        ((e.keep = !e.keep),
                        (e.id = e.id.replace(/\*/g, "")),
                        e.keep && (e.id = e.id + "*"),
                        t.updateGuiOcActionList());
                    },
                  },
                  combine: {
                    title: "Combine",
                    action: function () {
                      var i = t._game.model.ocQueue.pop(),
                        n = i.id.replace(/\*/g, ""),
                        a = t._game.model.ocQueue.pop(),
                        o = a.id.replace(/\*/g, ""),
                        s = tk_common.utils.combineObject(i, a);
                      s.modifiers = (i.modifiers || []).concat(
                        a.modifiers || []
                      );
                      var r = n + "+" + o;
                      (i.keep || a.keep) && ((r += "*"), (s.keep = !0)),
                        e.pushActionToQueue(r, s);
                    },
                    apply: !0,
                    clear: !0,
                  },
                },
                DEBUG: { clear: !1, apply: !1 },
              },
              modifiers: {},
            };
            if (
              (n.pages.BONUS &&
                (n.sides.BONUS || (n.sides.BONUS = n.sides.MAIN)),
              this._game.initGameData.developmentmode)
            ) {
              var a = 0;
              for (var o in n.pages) a++;
              var s = (window.OC = {});
              for (var o in n.pages)
                for (var r = n.pages[o].presets, l = 0; l < r.length; l++) {
                  var m = r[l];
                  a > 1
                    ? (window.OC[o + "_" + m.id] = m.action)
                    : (window.OC[m.id] = m.action);
                }
              s.custom = function (t) {
                return e.applyCustomAction(t);
              };
              var h = tk_common.utils.getQueryStringParam("OC");
              if (h)
                for (var p = h.split(","), u = 0; u < p.length; u++) {
                  var c = p[u];
                  window.OC[c]();
                }
            }
            return n;
          }),
          (e.prototype.applyCustomAction = function (e, t) {
            t = t || "MAIN";
            var i = e;
            if ("string" == typeof e)
              for (var n = (i = e.split(",")).length, a = 0; a < n; a++)
                i[a] = parseInt(i[a]);
            var o = new Array(
              this._game.ocConfiguration.pages[t].custom.listLength
            );
            for (a = 0; a < o.length; a++) o[a] = i[a] || -1;
            var s = { ocSymbols: o, id: "custom" };
            this._game.model.ocQueue.push(s);
          }),
          e
        );
      })();
      e.OCConfigurationManager = t;
    })(e.utils || (e.utils = {}));
  })(tk_astronaut || (tk_astronaut = {})),
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
            this._groups.forEach(function (t, i) {
              e.activateOne(i);
            });
          }),
          (e.prototype.addCallback = function (e, t) {
            void 0 === t && (t = 0);
            var i = this._groups[t];
            i || (i = this._groups[t] = { activated: !1, callbacks: [] }),
              i.callbacks.push(e),
              i.activated && e();
          }),
          (e.prototype.removeCallback = function (e, t) {
            void 0 === t && (t = 0);
            var i = this._groups[t];
            i &&
              (i.callbacks = i.callbacks.filter(function (t) {
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
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      (e.fadeOut = function (e, t, i, n, a) {
        var o = e.add.tween(t).to({ alpha: a || 0 }, i, void 0, !1, 0);
        return n && o.start(), o;
      }),
        (e.fadeIn = function (e, t, i, n, a) {
          var o = e.add.tween(t).to({ alpha: a || 1 }, i, void 0, !1, 0);
          return n && o.start(), o;
        });
    })(e.utils || (e.utils = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      (e.createFastTweenUpdateFunc = function (e, t, i, n) {
        void 0 === n && (n = !1);
        for (var a = e.timeline, o = 0; o < a.length; o++) {
          var s = a[o],
            r = "",
            l = s;
          for (var m in ((l.targets = void 0 === t ? [l.parent.target] : t),
          (l.updateFunc = i),
          l.vEnd)) {
            var h,
              p = l.vStart[m],
              u = l.vEnd[m];
            void 0 === p
              ? ((r = "var start = this.vStart." + m + ";"),
                (p = "start"),
                (h = "(" + u + "-start)"))
              : (h = u - p),
              (r += "var fval = " + p + " + " + h + " * this.value;\n");
            var c = l.targets.length;
            r +=
              "for (var ati = 0; ati < " +
              c +
              "; ati++) {\n" +
              (null == i
                ? "this.targets[ati]." + m + " = fval;\n"
                : "this.targets[ati]." +
                  m +
                  " = this.updateFunc(fval,ati," +
                  c +
                  ");\n") +
              (n
                ? "console.log('this.targets['+ati+']." +
                  m +
                  " = '+this.targets[ati]." +
                  m +
                  ");\n"
                : "") +
              "}\n";
          }
          var d =
            "if (!this.isRunning) {\nif (this.game.time.time >= this.startTime) {\nthis.isRunning = true;\n} else {\nreturn Phaser.TweenData.PENDING;\n}\n}\nif (this.parent.reverse) {\nthis.dt -= this.game.time.physicsElapsedMS * this.parent.timeScale;this.dt = Math.max(this.dt, 0);\n} else {\nthis.dt += this.game.time.physicsElapsedMS * this.parent.timeScale;this.dt = Math.min(this.dt, this.duration);\n}\nthis.percent = this.dt / this.duration;\nthis.value = this.easingFunction(this.percent);\n" +
            r +
            "if ((!this.parent.reverse && this.percent === 1) || (this.parent.reverse && this.percent === 0)) {\nreturn this.repeat();\n}\nreturn Phaser.TweenData.RUNNING;\n";
          s.update = new Function(d).bind(s);
        }
        return e;
      }),
        (e.createFastTweenUpdateVaryingTargets = function (e, t, i) {
          void 0 === i && (i = !1);
          for (var n = e.timeline, a = 0; a < n.length; a++) {
            var o = n[a],
              s = "",
              r = o;
            for (var l in ((r.targets = void 0 === t ? [r.parent.target] : t),
            r.vEnd)) {
              var m,
                h = r.vStart[l],
                p = r.vEnd[l];
              void 0 === h
                ? ((s = "var start = this.vStart." + l + ";"),
                  (h = "start"),
                  (m = "(" + p + "-start)"))
                : (m = p - h),
                (s += "var fval = " + h + " + " + m + " * this.value;\n"),
                (s +=
                  "for (var ati = 0; ati < this.targets.length; ati++) {\nthis.targets[ati]." +
                  l +
                  " = fval;\n" +
                  (i
                    ? "console.log('this.targets['+ati+']." +
                      l +
                      " = '+this.targets[ati]." +
                      l +
                      ");\n"
                    : "") +
                  "}\n");
            }
            var u =
              "if (!this.isRunning) {\nif (this.game.time.time >= this.startTime) {\nthis.isRunning = true;\n} else {\nreturn Phaser.TweenData.PENDING;\n}\n}\nif (this.parent.reverse) {\nthis.dt -= this.game.time.physicsElapsedMS * this.parent.timeScale;this.dt = Math.max(this.dt, 0);\n} else {\nthis.dt += this.game.time.physicsElapsedMS * this.parent.timeScale;this.dt = Math.min(this.dt, this.duration);\n}\nthis.percent = this.dt / this.duration;\nthis.value = this.easingFunction(this.percent);\n" +
              s +
              "if ((!this.parent.reverse && this.percent === 1) || (this.parent.reverse && this.percent === 0)) {\nreturn this.repeat();\n}\nreturn Phaser.TweenData.RUNNING;\n";
            o.update = new Function(u).bind(o);
          }
          return (
            (e.updateTargets = function (e) {
              for (var t = 0; t < this.timeLine.length; t++)
                this.timeLine[t].targets = e;
            }.bind(e)),
            e
          );
        });
    })(e.utils || (e.utils = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {}
        return (e.INTRO_DATA = []), (e.OUTRO_DATA = []), e;
      })();
      e.BonusGameDataSet = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = tk_common.utils.tweens.createLocalTweenMax,
        n = tk_common.utils.sequence2.createSequence,
        a = (function () {
          function t(e) {
            var t = this;
            (this._game = e),
              (this._ltm = i(!0)),
              (window.testBonusIntro = function () {
                t.startBonusGameIntro(
                  { bgwe: { fsw: 10, pos: [0, 8, 9] } },
                  function () {}
                );
              });
          }
          return (
            (t.prototype.startBonusGameIntro = function (e, t) {
              var i = this;
              this._currentState = e;
              var a = e.bgwe.pos.length;
              this._triggerCount = a;
              var o = (this._introSequence = n()),
                s = o.startWith.callSync(function () {
                  i._game.scene.createStickyWildGlows();
                  for (var t = e.bgwe, n = 0; n < t.pos.length; n++) {
                    i._game.scene.reels
                      .getSymbolAtServerIndex(t.pos[n])
                      .playWinAnimation();
                  }
                }).then,
                r =
                  this._game.gameTweaker.bonusIntroState
                    .scatterWinAnimationDurationMs;
              (s = (s = s.delay(r / 1e3).then).callSync(function () {
                i._game.gui.setFeatureRoundsMode(e.bgwe.fsw, !1);
              }).then),
                (s = this.createPlayIntroSubSequence(e, s)),
                (o.oncomplete = function () {
                  t();
                }),
                o.run();
            }),
            (t.prototype.skipIntro = function (t, i) {
              this._ltm.killAll(),
                this._game.soundSystem.stopSound(
                  e.SoundIds.AS_MainGameAmbience
                ),
                this._game.soundSystem.playSoundWithId(
                  e.SoundIds.AS_BonusGameAmbience,
                  e.SoundIds.AS_BonusGameAmbience,
                  1,
                  !0,
                  !0,
                  !1
                ),
                this.handleBigMeteoriteHit(),
                this.showInfoTexts(Math.min(5, i.bgwe.pos.length)),
                t();
            }),
            (t.prototype.createPlayIntroSubSequence = function (t, i) {
              var n = this,
                a = this._game.gameTweaker.bonusIntroState,
                o = this._game.scene;
              return (i = (i = (i = i.call(function (t) {
                n._game.soundSystem.fadeSound(
                  e.SoundIds.AS_MainGameAmbience,
                  0.5,
                  0,
                  !0
                );
                for (var i = n._game.scene, o = 0; o < 6; o++)
                  i.meteorites[o].playAnimation();
                n._ltm.delayedCall(1.2, function () {
                  n._game.soundSystem.playSoundWithId(
                    e.SoundIds.AS_BonusGameIntro,
                    e.SoundIds.AS_BonusGameIntro,
                    1,
                    !1,
                    !1,
                    !0
                  );
                }),
                  n._ltm.delayedCall(
                    a.delayBeforeBigHitMs / 1e3,
                    n.handleBigMeteoriteHit,
                    void 0,
                    n
                  ),
                  n._ltm.delayedCall(
                    a.delayBeforeFullscreenAnimStartMs / 1e3,
                    t
                  );
              }).then).call(function (e) {
                o.fullScreenAnimator.onComplete.addOnce(e, n),
                  o.fullScreenAnimator.playAnimation(
                    "BonusGameIntro",
                    !1,
                    n._game.gameTweaker.bonusIntroState.backgroundGlowAmount
                  );
              }).then).callSync(function () {
                n._game.soundSystem.playSoundWithId(
                  e.SoundIds.AS_BonusGameAmbience,
                  e.SoundIds.AS_BonusGameAmbience,
                  0,
                  !0,
                  !0,
                  !0
                ),
                  n._game.soundSystem.fadeSound(
                    e.SoundIds.AS_BonusGameAmbience,
                    0.2,
                    1
                  ),
                  n.showInfoTexts(Math.min(5, t.bgwe.pos.length));
              }).then);
            }),
            (t.prototype.handleBigMeteoriteHit = function () {
              var e = this._game,
                t = e.scene,
                i = e.gameTweaker.bonusGame;
              (t.background.tint = i.backgroundTint || 3329299),
                (t.extendedForeground.tint =
                  i.extendedForegroundTint || 3342080),
                (t.bonusGameForeground.visible = !0),
                (t.mainGameForeground.visible = !1),
                t.countUp.setMode(!0);
            }),
            (t.prototype.showInfoTexts = function (e) {
              var t = this._game.scene.multiplierText,
                i = this._game.scene.allWinsText;
              if (e > 3) {
                (t.visible = !0), (i.visible = !0);
                var n = 4 === e ? 3 : 9;
                this._game.scene.bonusGameInfoTextHelper.showInfoTexts(n);
              } else (t.visible = !1), (i.visible = !1);
            }),
            t
          );
        })();
      t.BonusGameIntro = a;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = tk_common.utils.tweens.createLocalTweenMax,
        n = tk_common.utils.sequence2.createSequence,
        a = tk_common.utils.ensureSingleInvocation,
        o = (function () {
          function o(e) {
            var n = this;
            (this._game = e),
              (this._ltm = i(!0)),
              (this._specialWinPresenter = new t.SpecialWinPresenter(e)),
              (window.testBonusOutro = function () {
                n.playBonusGameOutro(
                  { sue: { tbm: 20, twa: 200, go: !0, na: "main.spin" } },
                  function () {
                    alert("Test complete");
                  }
                );
              }),
              (this.skipStrategy = function () {
                n._skipInternal();
              });
          }
          return (
            (o.prototype.playBonusGameOutro = function (i, o) {
              var s = this,
                r = (this._outroSeq = n()),
                l = this._game,
                m = l.gameTweaker,
                h = l.scene,
                p = m.bonusOutroState.pauseBeforeOutroMs / 1e3,
                u = this._game.mayCelebrateWin(i.sue.tbm) && i.sue.tbm > 0,
                c = r.startWith.delay(p, void 0, this._ltm).then;
              l.mayAutoExitFeatures() ||
                (c = c.call(function (e) {
                  (s._skipInternal = a(function () {
                    l.gui.setSkipMode(!1),
                      TweenMax.delayedCall(0.25, function () {
                        l.gui.hideGameCoveringMessage();
                      }),
                      e();
                  })),
                    l.gui.setSkipMode(!0),
                    s._game.mayCelebrateWin(i.sue.tbm) ||
                      s._game.gui.showGameCoveringMessage({
                        text: tk_common.utils.AmountFormatter.globalFormatter.formatAmount2(
                          i.sue.twa
                        ),
                        title: s._game.languageSystem.getPhraseContent(
                          "bonusGameComplete_uc"
                        ),
                      });
                }).then),
                (c = c.callSync(function () {
                  h.hideSymbols(),
                    h.stickyWildPresenter.hideAllWilds(),
                    h.stickyWildPresenter.reset(),
                    h.bonusGameInfoTextHelper.hideInfoTexts();
                  var e = h.countUp;
                  if (u) {
                    var t =
                      m.bonusOutroState.finalCountUpBaseDurationMs +
                      Math.min(
                        m.bonusOutroState.finalCountUpMaxDurationMs,
                        m.bonusOutroState.finalCountUpMaxDurationMs *
                          Math.log(Math.max(10, i.sue.tbm))
                      );
                    (e.fadeOutOnComplete = !1),
                      e.startCountUp(0, i.sue.twa, t, !1);
                    var n =
                      m.bonusOutroState.countUpScaleMinDurationMs +
                      Math.min(
                        m.bonusOutroState.countUpScaleMaxDurationMs,
                        m.bonusOutroState.countUpScaleMaxDurationMs *
                          Math.log(Math.max(10, i.sue.tbm))
                      );
                    l.sceneLayoutManager.animateCountUpLocationBonusOutro(n),
                      s.playBonusOutroFireworks();
                  } else (e.fadeOutOnComplete = !1), e.setValue(i.sue.twa);
                }).then),
                (c = (c = (c = (c = u
                  ? c.call(function (t) {
                      l.soundSystem.fadeSound(
                        e.SoundIds.AS_BonusGameAmbience,
                        0.2,
                        0,
                        !0
                      ),
                        l.soundSystem.playSoundWithId(
                          e.SoundIds.AS_BonusGameOutro,
                          e.SoundIds.AS_BonusGameOutro,
                          1,
                          !1,
                          !1,
                          !0
                        ),
                        h.fullScreenAnimator.onComplete.addOnce(t),
                        h.fullScreenAnimator.playAnimation(
                          "BonusGameOutro",
                          !1,
                          m.bonusOutroState.backgroundGlowAmount
                        );
                    }).then
                  : c.call(function (t) {
                      l.soundSystem.fadeSound(
                        e.SoundIds.AS_BonusGameAmbience,
                        0.2,
                        0,
                        !0
                      ),
                        t();
                    }).then).callSync(function () {
                  l.scene.fireworksManager.abortFireworks();
                }).then).delay(0.2).then).call(function (n) {
                  h.showSymbols(!0),
                    h.glowManager.reorganizeGlowsOnBonusGameEnd(),
                    l.soundSystem.playSoundWithId(
                      e.SoundIds.AS_MainGameAmbience,
                      e.SoundIds.AS_MainGameAmbience,
                      1,
                      !0,
                      !0,
                      !0
                    ),
                    (h.background.tint = m.mainGame.backgroundTint || 1612543),
                    (h.extendedForeground.tint =
                      m.mainGame.extendedForegroundTint || 43263);
                  try {
                    var a = l.model.gameRound.responses[0];
                    h.reels.restoreReels(a.data.srd.fsge.syms);
                  } catch (e) {}
                  if (
                    ((h.bonusGameForeground.visible = !1),
                    (h.mainGameForeground.visible = !0),
                    h.countUp.setMode(!1),
                    l.model.setClientBalance(l.model.serverBalance),
                    l.updateCashField(),
                    l.updateTotalWinField(),
                    l.jsBridgeHelper.balanceChanged(),
                    t.SpecialWinPresenter.wasSpecialWin(l, i.sue.tbm) && u)
                  ) {
                    h.fireworksManager.abortFireworks();
                    var o = l.model.getWinLevelId(i.sue.tbm);
                    s._specialWinPresenter.onSpecialWinPresented.addOnce(n),
                      s._specialWinPresenter.startPresentation(
                        o,
                        m.bonusOutroState.pauseBeforeSpecialWinMs,
                        i
                      );
                  } else i.sue.tbm > 0 && u ? (s._game.scene.fireworksManager.playCommonWinFireworks(), s._ltm.delayedCall(1, n)) : n();
                }).then),
                (r.oncomplete = function () {
                  s._game.scene.fireworksManager.abortFireworks(),
                    s._game.setClientBalanceToServerBalance(!1),
                    s._game.updateCashField(),
                    s._game.scene.idleAnimationManager.gameIsIdle(),
                    o();
                }),
                r.run();
            }),
            (o.prototype.playBonusOutroFireworks = function () {
              this._game.scene.fireworksManager.playBonusOutroFireworks();
            }),
            o
          );
        })();
      t.BonusGameOutro = o;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = tk_common.utils.AmountFormatter,
        n = (function () {
          function t(e, t, n, a, o, s) {
            var r = this;
            (this.onCountUpComplete = new tk_common.utils.Signal1()),
              (this.onCountUpStarting = new tk_common.utils.Signal1()),
              (this.onFadeInComplete = new tk_common.utils.Signal1()),
              (this.onFadeOutComplete = new tk_common.utils.Signal1()),
              (this.countUpDuration = 2e3),
              (this.fadeInDuration = 500),
              (this.fadeOutDuration = 1e3),
              (this.from = 0),
              (this.textFormatter = function (e) {
                return i.globalFormatter.formatAmount(e);
              }),
              (this.fadeOutOnComplete = !0),
              (this.delayBeforeFadeOut = 500),
              (this.delayBeforeFadeOutAbort = 0),
              (this.fadeOutDurationAbort = 500),
              (this.countUpEasing = Phaser.Easing.Linear.None),
              (this.fadeInEasing = Phaser.Easing.Linear.None),
              (this._currentValue = -1),
              (this._lastValue = 0),
              (this._allowVisibleSentinelBeam = !0),
              (this._latestPosScale = { x: 0, y: 0, s: 1 }),
              (this._characterMovementTweens = []),
              (this._useBonusGameMode = !1),
              (this._glowChars = []),
              (this._glowCharMapMain = {
                ",": "sentinelMainGameCommaGlow.png",
                ".": "sentinelMainGameDotGlow.png",
                0: "sentinelMainGame0Glow.png",
                1: "sentinelMainGame1Glow.png",
                2: "sentinelMainGame2Glow.png",
                3: "sentinelMainGame3Glow.png",
                4: "sentinelMainGame4Glow.png",
                5: "sentinelMainGame5Glow.png",
                6: "sentinelMainGame6Glow.png",
                7: "sentinelMainGame7Glow.png",
                8: "sentinelMainGame8Glow.png",
                9: "sentinelMainGame9Glow.png",
              }),
              (this._glowCharMapBonus = {
                ",": "sentinelBonusGameCommaGlow.png",
                ".": "sentinelBonusGameDotGlow.png",
                0: "sentinelBonusGame0Glow.png",
                1: "sentinelBonusGame1Glow.png",
                2: "sentinelBonusGame2Glow.png",
                3: "sentinelBonusGame3Glow.png",
                4: "sentinelBonusGame4Glow.png",
                5: "sentinelBonusGame5Glow.png",
                6: "sentinelBonusGame6Glow.png",
                7: "sentinelBonusGame7Glow.png",
                8: "sentinelBonusGame8Glow.png",
                9: "sentinelBonusGame9Glow.png",
              }),
              (this._game = e),
              (this.mainGameTarget = t),
              (this.bonusGameTarget = n),
              (this.beam = a),
              (this.mainGameTarget.update = function (e) {
                return r.update(e);
              }),
              (this.bonusGameTarget.update = function (e) {
                return r.update(e);
              }),
              (this._currentTarget = t),
              (this._glowChars = s),
              (window.testCountUp = function (e, t) {
                (r.visible = !0),
                  !0 === e
                    ? r.startCountUp(
                        void 0,
                        t || (r.to || 0) + 200,
                        1e3,
                        !1,
                        !1
                      )
                    : r.setValue(t || (r.to || 0) + 200);
              });
            for (var l = 0; l < 15; l++) {
              var m = this._game.add
                .tween({ angle: 0 })
                .to({ y: 2 * Math.PI }, 5e3)
                .to({ y: 0 }, 5e3)
                .repeat(1e6)
                .delay(400 * l);
              this._characterMovementTweens.push(m), m.start();
            }
          }
          return (
            Object.defineProperty(t.prototype, "parent", {
              get: function () {
                return this._currentTarget.parent;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.wrapCharacterTweenClosure = function (e) {
              var t = this;
              return function (i, n, a) {
                return t.calculateCharPos(i, e, a);
              };
            }),
            (t.prototype.setMode = function (e) {
              (this._useBonusGameMode = e),
                (this._currentTarget = e
                  ? this.bonusGameTarget
                  : this.mainGameTarget),
                e
                  ? ((this.bonusGameTarget.x = this.mainGameTarget.x),
                    (this.bonusGameTarget.y = this.mainGameTarget.y),
                    (this.bonusGameTarget.scale.x =
                      this.mainGameTarget.scale.x),
                    (this.bonusGameTarget.scale.y =
                      this.mainGameTarget.scale.y),
                    (this.bonusGameTarget.text = this.mainGameTarget.text),
                    (this.bonusGameTarget.alpha = this.mainGameTarget.alpha),
                    this.bonusGameTarget.update(),
                    this.mainGameTarget.visible &&
                      (this.bonusGameTarget.visible = !0),
                    (this.mainGameTarget.visible = !1))
                  : ((this.mainGameTarget.x = this.bonusGameTarget.x),
                    (this.mainGameTarget.y = this.bonusGameTarget.y),
                    (this.mainGameTarget.scale.x =
                      this.bonusGameTarget.scale.x),
                    (this.mainGameTarget.scale.y =
                      this.bonusGameTarget.scale.y),
                    (this.mainGameTarget.text = this.bonusGameTarget.text),
                    (this.mainGameTarget.alpha = this.bonusGameTarget.alpha),
                    this.mainGameTarget.update(),
                    this.bonusGameTarget.visible &&
                      (this.mainGameTarget.visible = !0),
                    (this.bonusGameTarget.visible = !1)),
                this.updateCharacterGlows();
            }),
            (t.prototype.startCountUp = function (t, i, n, a, o) {
              null != o && (this.fadeOutOnComplete = o),
                (a = void 0 === a || a),
                (this.to = void 0 === i ? this.to : i),
                (this.from = void 0 === t ? this.from : t),
                (this.countUpDuration =
                  void 0 === n ? this.countUpDuration : n),
                (this._currentValue = this.from),
                null != this._countUpTween &&
                  this._countUpTween.isRunning &&
                  (this._countUpTween.onComplete.removeAll(),
                  this._countUpTween.stop(!1)),
                (this._countUpTween = this._game.add
                  .tween(this)
                  .to(
                    { _currentValue: this.to },
                    this.countUpDuration,
                    this.countUpEasing
                  )),
                this._countUpTween.onComplete.addOnce(
                  this.handleCountComplete,
                  this
                ),
                this._countUpTween.start(),
                this._game.soundSystem.playSoundWithId(
                  e.SoundIds.AS_CountUpLoop,
                  e.SoundIds.AS_CountUpLoop,
                  1,
                  !0
                ),
                a
                  ? this.fadeInCountUp()
                  : (void 0 !== this._fadeOutTween &&
                      this._fadeOutTween.isRunning &&
                      (this._fadeOutTween.stop(!0),
                      this._beamFadeOutTween.stop(!0)),
                    (this.visible = !0)),
                this.onCountUpStarting.dispatch(this);
            }),
            (t.prototype.stopCountUp = function () {
              void 0 !== this._countUpTween &&
                this._countUpTween.isRunning &&
                this._countUpTween.stop(!0),
                void 0 !== this._fadeInTween &&
                  this._fadeInTween.isRunning &&
                  (this._fadeInTween.stop(!0), this._beamFadeInTween.stop(!0)),
                this._game.soundSystem.stopSound(e.SoundIds.AS_CountUpLoop);
            }),
            (t.prototype.fadeInCountUp = function () {
              void 0 !== this._currentTarget &&
                ((this._currentTarget.visible = !0),
                void 0 !== this._fadeOutTween &&
                  this._fadeOutTween.isRunning &&
                  (this._fadeOutTween.stop(!0),
                  this._beamFadeOutTween.stop(!0)),
                (this._currentTarget.alpha = 0),
                (this._fadeInTween = this._game.add
                  .tween(this._currentTarget)
                  .to({ alpha: 1 }, this.fadeInDuration, this.fadeInEasing)),
                (this._beamFadeInTween = this._game.add
                  .tween(this.beam)
                  .to({ alpha: 1 }, this.fadeInDuration, this.fadeInEasing)),
                this._fadeInTween.onComplete.addOnce(
                  this.handleFadeInComplete,
                  this
                ),
                this._fadeInTween.start());
            }),
            (t.prototype.handleFadeInComplete = function () {
              this.onFadeInComplete.dispatch(this);
            }),
            (t.prototype.fadeOutCountUp = function (e, t) {
              void 0 !== this._currentTarget &&
                (void 0 !== this._fadeInTween &&
                  this._fadeInTween.isRunning &&
                  (this._fadeInTween.stop(!0), this._beamFadeInTween.stop(!0)),
                void 0 !== this._fadeOutTween &&
                  this._fadeOutTween.isRunning &&
                  (this._fadeOutTween.stop(!1),
                  this._beamFadeOutTween.stop(!1)),
                void 0 === e && (e = this.delayBeforeFadeOut),
                void 0 === t && (t = this.fadeOutDuration),
                (this._fadeOutTween = this._game.add
                  .tween(this._currentTarget)
                  .to({ alpha: 0 }, t, this.fadeInEasing)
                  .delay(e)),
                (this._beamFadeOutTween = this._game.add
                  .tween(this.beam)
                  .to({ alpha: 0 }, 0.6 * t, this.fadeInEasing)
                  .delay(e)),
                this._fadeOutTween.onComplete.addOnce(
                  this.handleFadeOutComplete,
                  this
                ),
                this._fadeOutTween.start());
            }),
            (t.prototype.handleFadeOutComplete = function () {
              (this._currentTarget.visible = !1),
                (this.beam.visible = !1),
                this.onFadeOutComplete.dispatch(this);
            }),
            (t.prototype.setValue = function (e) {
              (this._lastValue = e - 1),
                (this._currentValue = e),
                this.update(),
                this.updateTextPositionAndScale();
            }),
            (t.prototype.updateCountUpLocationAndScale = function (e) {
              (this._latestPosScale = e),
                (this._currentTarget.parent.x = e.x),
                (this._currentTarget.parent.y = e.y),
                (this._currentTarget.parent.scale.x = e.s),
                (this._currentTarget.parent.scale.y = e.s),
                this.updateTextPositionAndScale();
            }),
            (t.prototype.allowSentinelBeam = function (e) {
              (this._allowVisibleSentinelBeam = e),
                (this._allowVisibleSentinelBeam = !1),
                (this.beam.visible =
                  this._currentTarget.visible &&
                  this._allowVisibleSentinelBeam);
            }),
            Object.defineProperty(t.prototype, "visible", {
              set: function (e) {
                (this._currentTarget.parent.visible = e),
                  (this._currentTarget.visible = e),
                  (this._currentTarget.alpha = 1),
                  (this.beam.visible = e && this._allowVisibleSentinelBeam),
                  (this.beam.alpha = 1);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.resetAfterError = function () {
              (this._currentValue = void 0),
                (this.to = void 0),
                (this.from = void 0),
                (this.visible = !1);
            }),
            (t.prototype.abort = function (e) {
              void 0 !== this._currentTarget &&
                (this.stopCountUp(),
                (this._currentValue = e || this.to),
                null != this._currentValue &&
                  0 !== this._currentValue &&
                  ((this.visible = !0),
                  this.update(0),
                  this.updateTextPositionAndScale(),
                  this.fadeOutCountUp(
                    this.delayBeforeFadeOutAbort,
                    this.fadeOutDurationAbort
                  )));
            }),
            (t.prototype.update = function (e) {
              if (this._currentValue !== this._lastValue) {
                if (
                  ((this._lastValue = this._currentValue),
                  void 0 === this._currentTarget)
                )
                  return;
                (this._currentTarget.text = this.textFormatter(
                  Math.max(0, this._currentValue || 0)
                )),
                  (this.from = this._currentValue),
                  this.updateTextPositionAndScale();
              }
            }),
            (t.prototype.updateTextPositionAndScale = function () {
              var e =
                this._currentTarget.textWidth *
                this._currentTarget.parent.scale.x;
              if (null != e && 0 !== e) {
                if (e > 1200) {
                  var t = 1200 / this._currentTarget.textWidth;
                  (this._currentTarget.parent.scale.x = t),
                    (this._currentTarget.parent.scale.y = t),
                    (e = 1200);
                }
                (this._currentTarget.x = 0.5 * -this._currentTarget.textWidth),
                  (this._currentTarget.y =
                    0.5 * -this._currentTarget.textHeight),
                  this._currentTarget.updateText(),
                  this.updateCharacterGlows();
              }
            }),
            (t.prototype.handleCountComplete = function () {
              this.fadeOutOnComplete && this.fadeOutCountUp(),
                this._game.soundSystem.stopSound(e.SoundIds.AS_CountUpLoop),
                this._game.soundSystem.playSoundWithUniqueID(
                  e.SoundIds.AS_CountUpStop
                ),
                this.onCountUpComplete.dispatch(this);
            }),
            (t.prototype.addValue = function (e) {
              -1 === this._currentValue && (this._currentValue = 0),
                (this._currentValue += e);
            }),
            (t.prototype.calculateCharPos = function (e, t, i) {
              var n = this._currentTarget.children.length,
                a = 15 - n,
                o = Math.ceil(a / 2);
              if (t < o || t >= o + n) return e;
              var s = 3 * Math.sin(e);
              return (this._currentTarget.children[t - o].y = s), e;
            }),
            (t.prototype.updateCharacterGlows = function () {
              var e = this._currentTarget.children,
                t = e.length;
              if (0 !== t) {
                for (var i = 0; i < 15; i++) this._glowChars[i].visible = !1;
                for (i = 0; i < t; i++) {
                  var n = e[i];
                  this.updateGlowImage(
                    i,
                    n,
                    this._currentTarget.text.charAt(i)
                  );
                }
              }
            }),
            (t.prototype.updateGlowImage = function (e, t, i) {
              var n = this._glowChars[e],
                a = t.width / t.scale.x,
                o = 1.06;
              n.width = a * o;
              var s = t.height / t.scale.y;
              (n.height = s * o),
                (n.x = n.width / 2 - 0.5 * (a * o - a)),
                (n.y = n.height - 0.5 * (s * o - s)),
                (n.frameName = this._useBonusGameMode
                  ? this._glowCharMapBonus[i]
                  : this._glowCharMapMain[i]),
                n.updateTransform(t);
            }),
            t
          );
        })();
      t.CountUp = n;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = (function () {
        function i(e, t, i) {
          (this.onEffectFadedOut = new tk_common.utils.Signal1()),
            (this.onEffectCompleted = new tk_common.utils.Signal1()),
            (this._fadeTween = null),
            (this._game = e),
            (this._effectsHolder = t.effectsHolder),
            (this._effect1 = t.effect1),
            (this._effect2 = t.effect2),
            (this._effect3 = t.effect3),
            (this._trails = t.trails),
            (this._coins = t.coins);
        }
        return (
          (i.prototype.playCommonWinEffect = function (n) {
            (this._effectsHolder.visible = !0),
              null != this._fadeTween && this._fadeTween.stop();
            var a =
              t.Scene.COMMON_FIREWORK_POSITIONS[
                Math.floor(
                  Math.random() * t.Scene.COMMON_FIREWORK_POSITIONS.length
                )
              ];
            return (
              (this._effectsHolder.x = a.x),
              (this._effectsHolder.y = a.y),
              (this._effectsHolder.alpha = 1),
              (this._effect1.alpha = 0),
              this._effect1.play(
                "commonFireworkAnimationBlue",
                i.FIRE_WORK_FRAME_RATE
              ),
              (this._effect2.alpha = 0),
              this._effect2.play(
                "commonFireworkAnimationRed",
                i.FIRE_WORK_FRAME_RATE
              ),
              (this._effect3.alpha = 0),
              this._effect3.play(
                "commonFireworkAnimationGreen",
                i.FIRE_WORK_FRAME_RATE
              ),
              this._game.soundSystem.playSoundWithUniqueID(
                e.SoundIds["AS_CyclingFirework" + ((n % 3) + 1)],
                1
              ),
              this
            );
          }),
          (i.prototype.playBonusOutroEffect = function (n) {
            (this._effectsHolder.visible = !0),
              null != this._fadeTween && this._fadeTween.stop();
            var a =
              t.Scene.COMMON_FIREWORK_POSITIONS[
                Math.floor(
                  Math.random() * t.Scene.COMMON_FIREWORK_POSITIONS.length
                )
              ];
            return (
              (this._effectsHolder.x = a.x),
              (this._effectsHolder.y = a.y),
              (this._effectsHolder.alpha = 1),
              (this._effect1.alpha = 0),
              this._effect1.play(
                "bonusOutroFireworkAnimation",
                i.FIRE_WORK_FRAME_RATE
              ),
              (this._effect2.alpha = 0),
              this._effect2.play(
                "bonusOutroFireworkAnimation",
                i.FIRE_WORK_FRAME_RATE
              ),
              (this._effect3.alpha = 0),
              this._effect3.play(
                "bonusOutroFireworkAnimation",
                i.FIRE_WORK_FRAME_RATE
              ),
              this._game.soundSystem.playSoundWithUniqueID(
                e.SoundIds["AS_CyclingFirework" + ((n % 3) + 1)],
                1
              ),
              this
            );
          }),
          (i.prototype.playBigWinEffect = function (n) {
            (this._effectsHolder.visible = !0),
              null != this._fadeTween && this._fadeTween.stop();
            var a =
              t.Scene.BIG_WIN_FIREWORK_POSITIONS[
                Math.floor(
                  Math.random() * t.Scene.BIG_WIN_FIREWORK_POSITIONS.length
                )
              ];
            return (
              (this._effectsHolder.x = a.x),
              (this._effectsHolder.y = a.y),
              (this._effectsHolder.angle = a.a),
              (this._effectsHolder.alpha = 1),
              (this._effect1.alpha = 0),
              this._effect1.play(
                "bigWinFireworkAnimation",
                i.FIRE_WORK_FRAME_RATE
              ),
              (this._effect2.alpha = 0),
              (this._effect2.angle = 360 * Math.random()),
              this._effect2.play(
                "bigWinFlareAnimation",
                i.FIRE_WORK_FRAME_RATE
              ),
              (this._effect3.alpha = 0),
              this._effect3.play(
                "bigWinFireworkWaveAnimation",
                i.FIRE_WORK_FRAME_RATE
              ),
              this._game.soundSystem.playSoundWithUniqueID(
                e.SoundIds["AS_BigWinFirework" + ((n % 3) + 1)],
                1
              ),
              this
            );
          }),
          (i.prototype.playMegaWinEffect = function (n) {
            (this._effectsHolder.visible = !0),
              null != this._fadeTween && this._fadeTween.stop();
            var a =
              t.Scene.MEGA_WIN_FIREWORK_POSITIONS[
                Math.floor(
                  Math.random() * t.Scene.MEGA_WIN_FIREWORK_POSITIONS.length
                )
              ];
            (this._effectsHolder.x = a.x),
              (this._effectsHolder.y = a.y),
              (this._effectsHolder.angle = a.a),
              (this._effectsHolder.alpha = 1),
              (this._effect1.alpha = 0),
              this._effect1.play(
                "megaWinFireworkAnimation",
                i.FIRE_WORK_FRAME_RATE
              ),
              (this._effect2.alpha = 0),
              this._effect2.play(
                "megaWinFlareAnimation",
                i.FIRE_WORK_FRAME_RATE
              );
            for (
              var o = 360 * Math.random(), s = this._trails.length, r = 0;
              r < s;
              r++
            ) {
              var l = this._trails[r];
              (l.angle = o + (360 / s) * r),
                (l.visible = !0),
                l.play("megaWinFireworkTrailAnimation", i.FIRE_WORK_FRAME_RATE);
            }
            return (
              this._game.soundSystem.playSoundWithUniqueID(
                e.SoundIds["AS_MegaWinFirework" + ((n % 3) + 1)],
                1
              ),
              this
            );
          }),
          (i.prototype.playUltraWinEffect = function (n) {
            (this._effectsHolder.visible = !0),
              null != this._fadeTween && this._fadeTween.stop();
            var a =
              t.Scene.ULTRA_WIN_FIREWORK_POSITIONS[
                Math.floor(
                  Math.random() * t.Scene.ULTRA_WIN_FIREWORK_POSITIONS.length
                )
              ];
            (this._effectsHolder.x = a.x),
              (this._effectsHolder.y = a.y),
              (this._effectsHolder.angle = 0),
              (this._effectsHolder.alpha = 1),
              (this._effect1.alpha = 0),
              this._effect1.play(
                "ultraWinFireworkAnimation",
                i.FIRE_WORK_FRAME_RATE
              ),
              (this._effect2.alpha = 0),
              this._effect2.play(
                "ultraWinFlareAnimation",
                i.FIRE_WORK_FRAME_RATE
              );
            for (var o = this._coins.length, s = 0; s < o; s++) {
              var r = this._coins[s];
              (r.parent.angle =
                22.5 * s + ((360 * Math.random()) / 16 - 11.25)),
                r.play("ultraWinCoinAnimation", 45 * Math.random() + 30);
            }
            return (
              this._game.soundSystem.playSoundWithUniqueID(
                e.SoundIds["AS_UltraWinFirework" + ((n % 3) + 1)],
                1
              ),
              this
            );
          }),
          (i.prototype.fadeOutEffect = function () {
            var e = (this._fadeTween = this._effectsHolder.game.add
              .tween(this._effectsHolder)
              .to({ alpha: 0 }, 200, Phaser.Easing.Cubic.In, !1, 0));
            e.onComplete.addOnce(this.handleEffectFadedOut, this), e.start();
          }),
          (i.prototype.handleEffectFadedOut = function () {
            (this._effectsHolder.visible = !1),
              (this._effectsHolder.alpha = 1),
              this.onEffectFadedOut.dispatch(this);
          }),
          (i.prototype.handleEffectCompleted = function () {
            (this._effectsHolder.visible = !1),
              (this._effectsHolder.alpha = 1),
              this.onEffectCompleted.dispatch(this);
          }),
          (i.FIRE_WORK_FRAME_RATE = 30),
          i
        );
      })();
      t.FireworkEffect = i;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function t(e) {
          (this.onFireworksShowAborted = new tk_common.utils.Signal0()),
            (this._currentFireworks = []),
            (this._aborted = !1),
            (this.isPlaying = !1),
            (this._currentMode = -1),
            (this._game = e);
        }
        return (
          (t.prototype.startNextFireworkEffect = function (e) {
            this.startFirework(e, this._currentMode);
            var t = this.getFireworksDelays(this._currentMode);
            TweenMax.delayedCall(
              t[e % t.length] / 1e3,
              this.startNextFireworkEffect,
              [e + 1],
              this
            );
          }),
          (t.prototype.playBigWinFireworks = function () {
            (this._aborted = !1),
              (this.isPlaying = !0),
              (this._currentMode = 1),
              this.startNextFireworkEffect(0);
          }),
          (t.prototype.playMegaWinFireworks = function () {
            (this._aborted = !1),
              (this.isPlaying = !0),
              (this._currentMode = 2),
              this.startNextFireworkEffect(0);
          }),
          (t.prototype.playUltraWinFireworks = function () {
            (this._aborted = !1),
              (this.isPlaying = !0),
              (this._currentMode = 3);
            for (
              var e = this._game.scene.ultraWinRings, t = 0;
              t < e.length;
              t++
            ) {
              var i = e[t];
              (i.parent.parent.visible = !0),
                (i.parent.parent.alpha = 1),
                i.animations.stop(),
                i.revive(),
                (i.alpha = 0),
                i.animations.play("ultraWinPattern");
            }
            this.startNextFireworkEffect(0);
          }),
          (t.prototype.playCommonWinFireworks = function () {
            (this._aborted = !1),
              (this.isPlaying = !0),
              (this._currentMode = 4),
              this.startNextFireworkEffect(0);
          }),
          (t.prototype.playBonusOutroFireworks = function () {
            (this._aborted = !1),
              (this.isPlaying = !0),
              (this._currentMode = 5),
              this.startNextFireworkEffect(0);
          }),
          (t.prototype.abortFireworks = function () {
            if (!0 !== this._aborted) {
              if (
                (TweenMax.killDelayedCallsTo(this.startNextFireworkEffect),
                (this._aborted = !0),
                3 === this._currentMode &&
                  this._game.scene.ultraWinRings.length > 0)
              ) {
                var e = this._game.scene.ultraWinRings[0].parent.parent;
                TweenMax.to(e, 0.1, {
                  alpha: 0,
                  onComplete: this.handleRingParentFadeOutComplete,
                  onCompleteParams: [e],
                });
              }
              this._currentMode = -1;
              for (var t = null, i = 0; i < this._currentFireworks.length; i++)
                (t = this._currentFireworks[i]).fadeOutEffect();
              (this._currentFireworks = []),
                null != t
                  ? t.onEffectFadedOut.addOnce(
                      this.handleFireworksAborted,
                      this
                    )
                  : this.handleFireworksAborted();
            }
          }),
          (t.prototype.handleRingParentFadeOutComplete = function (e) {
            e.visible = !1;
          }),
          (t.prototype.handleFireworksAborted = function () {
            (this.isPlaying = !1), this.onFireworksShowAborted.dispatch();
          }),
          (t.prototype.startFirework = function (e, t) {
            if (!0 !== this._aborted) {
              var i = e % 8,
                n = this._game.scene.fireworksHolders[i];
              e < 8 && this._currentFireworks.push(n),
                1 === t
                  ? n.playBigWinEffect(i)
                  : 2 === t
                  ? n.playMegaWinEffect(i)
                  : 3 === t
                  ? n.playUltraWinEffect(i)
                  : 4 === t
                  ? n.playCommonWinEffect(i)
                  : 5 === t && n.playBonusOutroEffect(i);
            }
          }),
          (t.prototype.getFireworksDelays = function (t) {
            return 1 === t
              ? e.Scene.BIG_WIN_FIREWORK_TRIGGER_DELAYS
              : 2 === t
              ? e.Scene.MEGA_WIN_FIREWORK_TRIGGER_DELAYS
              : 3 === t
              ? e.Scene.ULTRA_WIN_FIREWORK_TRIGGER_DELAYS
              : 4 === t || 5 === t
              ? e.Scene.COMMON_FIREWORK_TRIGGER_DELAYS
              : void 0;
          }),
          t
        );
      })();
      e.FireworksManager = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e(e) {
          (this._hitAreas = {}),
            (this.active = !1),
            (this._game = e),
            this._game.gui.onGuiAreaClicked.add(
              this.handleGuiAreaClicked,
              this
            );
        }
        return (
          (e.prototype.registerHitArea = function (e, t, i) {
            var n = this.drawSquare(
              t.x + 64,
              t.y + 56,
              t.width,
              t.height,
              "#ffffff",
              this._game.scene.sceneRoot
            );
            for (var a in ((n.alpha = 0),
            (this._hitAreas[e] = { hitArea: n, callback: i, active: !0 }),
            (this._hitAreaSpriteArray = []),
            this._hitAreas)) {
              var o = this._hitAreas[a];
              this._hitAreaSpriteArray.push(o.hitArea);
            }
          }),
          (e.prototype.drawSquare = function (e, t, i, n, a, o) {
            var s;
            if (this._game) {
              var r = this._game.add.bitmapData(i, n);
              r.ctx.beginPath(),
                r.ctx.rect(0, 0, i, n),
                (r.ctx.fillStyle = a),
                r.ctx.fill(),
                (s = this._game.add.sprite(e, t, r, void 0, o)).anchor.setTo(
                  0.5,
                  0.5
                );
            }
            return s;
          }),
          (e.prototype.activateHitArea = function (e) {
            this._hitAreas[e].active = !0;
          }),
          (e.prototype.deactivateHitArea = function (e) {
            this._hitAreas[e].active = !1;
          }),
          (e.prototype.setClickingActive = function (e) {
            this.active = !0;
          }),
          (e.prototype.handleGuiAreaClicked = function (e, t, i, n) {
            if (this.active) {
              var a = this.hitTestMultiple(
                this._hitAreaSpriteArray,
                i,
                n,
                this._game.scene.layoutRoot
              );
              if (a)
                for (var o in this._hitAreas) {
                  var s = this._hitAreas[o];
                  s.hitArea === a && s.active && s.callback();
                }
            }
          }),
          (e.prototype.hitTestMultiple = function (e, t, i, n, a) {
            return (
              (a =
                a ||
                function (e, t) {
                  return e.z < t.z ? -1 : 1;
                }),
              e.reduce(function (e, o, s) {
                var r = o;
                if (!1 === r.visible) return e;
                var l = r.toLocal(new Phaser.Point(t, i), n || r.game.world),
                  m = r.texture.frame.width,
                  h = r.texture.frame.height,
                  p = -m * r.anchor.x,
                  u = !1;
                if (l.x >= p && l.x < p + m) {
                  var c = -h * r.anchor.y;
                  l.y >= c && l.y < c + h && (u = !0);
                }
                return u && (e ? a(e, r) < 0 && (e = r) : (e = r)), e;
              }, null)
            );
          }),
          e
        );
      })();
      e.HitAreaManager = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = (function () {
        function t(e, t) {
          (this.onMayPlayImpactAnimation = new tk_common.utils.Signal()),
            (this._game = e),
            (this._frameParts = t),
            this.actuallyHideFrame();
        }
        return (
          (t.prototype.showFrame = function (t) {
            var i = this;
            null != this._timer && this._timer.stop(!0);
            var n = this._game.gameTweaker.bonusGame;
            (this._timer = this._game.time.create(!0)),
              this._timer.add(n.frameDisplayTimeMs || 1, function () {
                return i.timerExpired();
              }),
              this._timer.add(n.pauseBeforeImpactMs || 1, function () {
                !0 === i._bracingForImpact &&
                  i.onMayPlayImpactAnimation.dispatch(),
                  (i._bracingForImpact = !0);
              }),
              (this._bracingForImpact = !1),
              (this._timerExpired = !1),
              (this._shouldHideFrame = !1);
            for (var a = 0; a < this._frameParts.length; a++) {
              var o = this._frameParts[a];
              o.green.bringToTop(),
                o.green.revive(),
                o.white.revive(),
                o.white.bringToTop(),
                TweenMax.fromTo(
                  o.white,
                  n.frameWhiteAlphaYoyoTimeMs / 1e3,
                  { alpha: 0 },
                  { alpha: 1, repeat: -1, yoyo: !0 }
                );
            }
            t &&
              this._game.soundSystem.playSoundWithUniqueID(
                e.SoundIds.AS_StickyWildVoice,
                1
              ),
              this._game.soundSystem.playSoundWithUniqueID(
                e.SoundIds.AS_StickyWildTargetArea,
                1
              ),
              this._timer.start();
          }),
          (t.prototype.hideFrame = function () {
            (this._shouldHideFrame = !0),
              1 == this._timerExpired && this.actuallyHideFrame();
          }),
          (t.prototype.braceForImpact = function () {
            this._bracingForImpact && this.onMayPlayImpactAnimation.dispatch(),
              (this._bracingForImpact = !0);
          }),
          (t.prototype.timerExpired = function () {
            (this._timerExpired = !0),
              this._shouldHideFrame && this.actuallyHideFrame();
          }),
          (t.prototype.actuallyHideFrame = function () {
            for (var e = 0; e < this._frameParts.length; e++) {
              var t = this._frameParts[e];
              t.white.kill(), t.green.kill(), TweenMax.killTweensOf(t.white);
            }
          }),
          t
        );
      })();
      t.ImpactFrameManager = i;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {}
        return (e.DATA = []), e;
      })();
      e.IntroMovieDataSet = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = tk_common.utils.ensureSingleInvocation,
        n = (function () {
          function t(e) {
            (this._game = e),
              (this._ltm = tk_common.utils.tweens.createLocalTweenMax());
          }
          return (
            (t.prototype.playIntro = function (e) {
              this._game.gui.setCinematicMode(!0),
                this._game.gui.setSkipMode(!0),
                this.startIntro(e);
            }),
            (t.prototype.abortIntro = function () {
              this._game.gui.setSkipMode(!1), this._introSeq.abort();
            }),
            (t.prototype.startIntro = function (e) {
              var t = this,
                n = (this._introSeq =
                  tk_common.utils.sequence2.createSequence()),
                a = this._game,
                o = a.scene,
                s = i(function () {
                  t.showPaylineButtons();
                }),
                r = n.startWith.call(function (e) {
                  var i = a.gameTweaker.introState;
                  a.gui.onGuiAreaClicked.addOnce(t.abortIntro, t),
                    t._ltm.delayedCall(i.pauseBeforeIntro / 1e3, function () {
                      t.startMainGameAmbientSound();
                    }),
                    o.fullScreenAnimator.onComplete.addOnce(e),
                    o.fullScreenAnimator.playAnimation(
                      "Intro_BootSequence",
                      !1,
                      1
                    );
                }).then;
              (r = r.callSync(function () {
                a.gui.onGuiAreaClicked.remove(t.abortIntro, t),
                  a.gui.enableSpinButton(),
                  a.scene.showSymbols(),
                  a.scene.idleAnimationManager.gameIsIdle(),
                  s(),
                  a.gui.setCinematicMode(!1);
              }).then),
                (n.onabort = function () {
                  s(),
                    a.gui.onGuiAreaClicked.remove(t.abortIntro, t),
                    o.fullScreenAnimator.onComplete.remove(e),
                    o.fullScreenAnimator.stopAnimation(),
                    t.startMainGameAmbientSound(),
                    o.showSymbols(!0),
                    o.idleAnimationManager.gameIsIdle(),
                    a.gui.setCinematicMode(!1),
                    e();
                }),
                (n.oncomplete = e),
                n.run();
            }),
            (t.prototype.startMainGameAmbientSound = function () {
              this._game.soundSystem.playSoundWithId(
                e.SoundIds.AS_MainGameAmbience,
                e.SoundIds.AS_MainGameAmbience,
                1,
                !0,
                !0,
                !1
              );
            }),
            (t.prototype.showPaylineButtons = function () {
              this._game.scene.paylineButtonsManager.initializeButtons();
            }),
            t
          );
        })();
      t.MainGameIntro = n;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e(e, t, i, n, a) {
          (this.onHit = new tk_common.utils.Signal0()),
            (this.shouldPlayGlowAnim = !0),
            (this._game = e),
            (this._sprite = t),
            (this._animId = i),
            (this._impactSprite = n),
            (this._impactAnimId = a),
            this._sprite.kill(),
            this._impactSprite && this._impactSprite.kill();
        }
        return (
          (e.prototype.playAnimation = function (e, t) {
            (e = e || this._animId),
              this._sprite.revive(),
              this._sprite.animations.stop();
            var i = this._sprite.play(e, t, !1, !1);
            i.onComplete.remove(this.handleAnimationComplete, this),
              i.onComplete.addOnce(this.handleAnimationComplete, this),
              null != this._impactSprite &&
                (this._impactSprite.animations.stop(),
                this._impactSprite.revive(),
                this._impactSprite.play(e + "_Impact", t, !1, !0));
          }),
          (e.prototype.handleAnimationComplete = function () {
            this.onHit.dispatch();
          }),
          (e.prototype.abortAnimation = function () {
            this._sprite.kill(),
              null != this._impactSprite && this._impactSprite.kill();
          }),
          e
        );
      })();
      e.Meteorite = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function t(t, i, n, a, o) {
          var s = this;
          (this.onAnimationComplete = new tk_common.utils.Signal1()),
            (this.onDoorPicked = new tk_common.utils.Signal1()),
            (this.renderable = !1),
            (this.clickable = !1),
            (this.doorId = -1),
            (this._opened = !1),
            (this._picked = !1),
            (this.doorId = t),
            (this._reelIndex = i),
            (this._symbolIndex = n);
          var r = (this.sprite = a),
            l = e.ReelMatrixes.VMs[i];
          (this.sprite.viewModelMatrix = l),
            (r.v0 = { x: 0, y: 13 * n }),
            (r.v1 = { x: 13, y: 13 * n }),
            (r.v2 = { x: 13, y: 13 + 13 * n }),
            (r.v3 = { x: 0, y: 13 + 13 * n }),
            (this._row = 13 * n + 65 + 13),
            this.updateSymbolPosition(this._row, r);
          var m = r.game.cache.getJSON("subSpriteCoords")[13 * i][13 * n + 13];
          this.sprite.hitArea = this.calculateHitArea(m, i, n);
          (this.sprite.hitArea.contains = function (e, t) {
            return s.checkForHit(e, t);
          }),
            (this.clickable = !1),
            this.sprite.kill();
        }
        return (
          (t.prototype.setGlow = function (e) {
            this.glow = e;
            var t = e;
            (t.v0 = { x: 0, y: 0 }),
              (t.v1 = { x: 13, y: 0 }),
              (t.v2 = { x: 13, y: 0 }),
              (t.v3 = { x: 0, y: 0 }),
              this.glow.kill(),
              (this.glow.frameName = "mysteryDoorReveal0Glow.png"),
              this.updateSymbolPosition(this._row, this.glow),
              this.addGlowAnimations(this.glow);
          }),
          (t.prototype.updateSymbolPosition = function (e, t) {
            var i = t,
              n = -1 * e + 48 + 65 - 4;
            (i.v0.x = 0),
              (i.v0.y = n),
              (i.v1.x = 13),
              (i.v1.y = n),
              (i.v2.x = 13),
              (i.v2.y = 13 + n),
              (i.v3.x = 0),
              (i.v3.y = 13 + n);
          }),
          (t.prototype.checkForHit = function (e, t) {
            var i = this.sprite.hitArea;
            return (
              e >= i.x && t >= i.y && e <= i.x + i.width && t <= i.y + i.height
            );
          }),
          (t.prototype.clicked = function () {
            !0 === this.clickable &&
              ((this.clickable = !1),
              (this._picked = !0),
              this.sprite.play("mysteryDoorPicked", 20, !0),
              this.glow && this.glow.play("mysteryDoorPicked", 20, !0),
              this.onDoorPicked.dispatch(this.doorId));
          }),
          (t.prototype.handleClickOnInteractiveArea = function () {
            this.clicked();
          }),
          (t.prototype.playInitialRevealAnimation = function (e) {
            var t = this,
              i = "mysteryDoorReveal",
              n = this.sprite.game.gameTweaker.mysteryDoor;
            this.sprite.play(i).onComplete.addOnce(function () {
              var i = n.unpickedRevealGlow;
              t.handleInitialRevealComplete(e, !0, i);
            }),
              this.sprite.revive(),
              this.glow &&
                (this.glow.revive(),
                (this.glow.alpha = n.pickedRevealGlow),
                this.glow.play(i));
          }),
          (t.prototype.playRevealAnimation = function (e, t) {
            var i = this;
            this.sprite.animations.stop();
            var n = "mysteryDoorReveal" + (t ? "" : "NotPicked"),
              a = this.sprite.game.gameTweaker.mysteryDoor,
              o = this.sprite.play(n);
            t
              ? o.onComplete.addOnce(function () {
                  return i.handleAnimationComplete(
                    e,
                    !0,
                    a.pickedRevealGlow,
                    t && 0 != e
                  );
                }, this)
              : o.onComplete.addOnce(function () {
                  return i.handleEndRevealComplete(e, !1, a.unpickedRevealGlow);
                }, this),
              this.glow && this.glow.play(n);
          }),
          (t.prototype.handleInitialRevealComplete = function (e, i, n) {
            (this.sprite.frameName = t.winTypeStrings[e + (i ? 0 : 5)]),
              this.glow &&
                ((this.glow.frameName = t.winTypeStringsGlow[e + (i ? 0 : 5)]),
                (this.glow.alpha = n)),
              this.onAnimationComplete.dispatch(this);
          }),
          (t.prototype.handleEndRevealComplete = function (e, i, n) {
            (this.sprite.frameName = t.winTypeStrings[e + (i ? 0 : 5)]),
              this.glow &&
                ((this.glow.frameName = t.winTypeStringsGlow[e + (i ? 0 : 5)]),
                (this.glow.alpha = n),
                0 === e && this.glow.kill()),
              this.onAnimationComplete.dispatch(this);
          }),
          (t.prototype.handleAnimationComplete = function (e, i, n, a) {
            (this.sprite.frameName = t.winTypeStrings[e + (i ? 0 : 5)]),
              this.glow &&
                ((this.glow.frameName = t.winTypeStringsGlow[e + (i ? 0 : 5)]),
                (this.glow.alpha = n)),
              a
                ? (this.sprite.play("mysteryDoorWin" + e),
                  this.glow && this.glow.play("mysteryDoorWin" + e))
                : this.glow && this.glow.kill(),
              this.onAnimationComplete.dispatch(this);
          }),
          (t.prototype.showDoor = function () {
            this.sprite.revive(), this.glow && this.glow.revive();
          }),
          (t.prototype.hideDoor = function () {
            this.sprite.kill(), this.glow && this.glow.kill();
          }),
          (t.prototype.enablePicking = function () {
            !0 === this._opened ||
              this._picked ||
              ((this.clickable = !0),
              (this.sprite.frameName = "mysteryDoorReveal0.png"),
              this.glow && (this.glow.frameName = "mysteryDoorReveal0Glow.png"),
              this.sprite.events.onInputDown.remove(
                this.handleClickOnInteractiveArea,
                this
              ),
              this.sprite.events.onInputDown.add(
                this.handleClickOnInteractiveArea,
                this
              ));
          }),
          (t.prototype.disablePicking = function () {
            (this.clickable = !1),
              !0 === this._opened ||
                this._picked ||
                this.sprite.events.onInputDown.remove(
                  this.handleClickOnInteractiveArea,
                  this
                );
          }),
          (t.prototype.resetDoor = function () {
            this.sprite.animations.stop(),
              (this.sprite.frameName = "mysteryDoorReveal0.png"),
              (this.clickable = !1),
              (this._opened = !1),
              this.sprite.revive(),
              this.glow &&
                (this.glow.animations.stop(),
                (this.glow.frameName = "mysteryDoorReveal0Glow.png"),
                this.glow.revive()),
              (this._picked = !1);
          }),
          (t.prototype.setDoorState = function (e) {
            (this._opened = e),
              !0 === this._opened && (this._picked = !0),
              (this.clickable = this.clickable && !e);
          }),
          (t.prototype.setContent = function (e, i) {
            !1 === i
              ? ((this.sprite.frameName = "mysteryDoorReveal0.png"),
                this.glow &&
                  (this.glow.frameName = "mysteryDoorReveal0Glow.png"))
              : ((this.sprite.frameName = t.winTypeStrings[e + (i ? 0 : 5)]),
                this.glow &&
                  (this.glow.frameName =
                    t.winTypeStringsGlow[e + (i ? 0 : 5)]));
          }),
          (t.prototype.checkIfClicked = function (e, t) {
            return this.sprite.hitArea.contains(e, t);
          }),
          (t.prototype.getSymbolPosition = function () {
            if (null == this._centerPoint) {
              var t = this.sprite,
                i = {
                  x: (t.v0.x + (t.v2.x - t.v0.x) / 2) / 13 - 0.5,
                  y: (t.v2.y + (t.v0.y - t.v2.y) / 2) / 48 - 0.5,
                  z: 0,
                  w: 1,
                },
                n = e.ReelMatrixes.multiplyMatrix4(
                  e.ReelMatrixes.OP,
                  t.viewModelMatrix
                ),
                a = e.ReelMatrixes.multiplyVector(n, i, !0);
              this._centerPoint = new Phaser.Point(a.x, 720 - a.y);
            }
            return this._centerPoint;
          }),
          (t.prototype.calculateHitArea = function (e, t, i) {
            var n = (e.x1 - e.x0) / 2,
              a = (e.y3 - e.y1) / 2,
              o = 0;
            switch (t) {
              case 0:
                o = (t <= 2 ? n * t : n + -n * (t - 2)) + n * i * 0.5 + n;
                break;
              case 1:
                o = (t <= 2 ? n * t : n + -n * (t - 2)) + n * i * 0.5;
                break;
              case 2:
                o = (t <= 2 ? n * t : n + -n * (t - 2)) - n * i * 0.25;
                break;
              case 3:
                o = (t <= 2 ? n * t : n + -n * (t - 2)) + n * i * 0.5 + n;
                break;
              case 4:
                o = (t <= 2 ? n * t : n + -n * (t - 2)) - n * i * 0.2 + 2 * n;
            }
            return new Phaser.Rectangle(
              e.x0 + o + n,
              e.y1 + a - 0.7 * a - 13 * a,
              1.4 * n * 13,
              1.4 * a * 13
            );
          }),
          (t.prototype.addGlowAnimations = function (e) {
            e.animations.add(
              "mysteryDoorReveal",
              Phaser.Animation.generateFrameNames(
                "mysteryDoorReveal",
                0,
                9,
                "Glow.png"
              ),
              20,
              !1
            ),
              e.animations.add(
                "mysteryDoorRevealNotPicked",
                Phaser.Animation.generateFrameNames(
                  "mysteryDoorRevealNotPicked",
                  0,
                  9,
                  "Glow.png"
                ),
                20,
                !1
              ),
              e.animations.add(
                "mysteryDoorWin1",
                Phaser.Animation.generateFrameNames(
                  "mysteryDoorWin1_",
                  0,
                  8,
                  "Glow.png"
                ),
                20,
                !1
              ),
              e.animations.add(
                "mysteryDoorWin2",
                Phaser.Animation.generateFrameNames(
                  "mysteryDoorWin2_",
                  0,
                  8,
                  "Glow.png"
                ),
                20,
                !1
              ),
              e.animations.add(
                "mysteryDoorWin3",
                Phaser.Animation.generateFrameNames(
                  "mysteryDoorWin3_",
                  0,
                  8,
                  "Glow.png"
                ),
                20,
                !1
              ),
              e.animations.add(
                "mysteryDoorWin4",
                Phaser.Animation.generateFrameNames(
                  "mysteryDoorWin4_",
                  0,
                  9,
                  "Glow.png"
                ),
                20,
                !1
              ),
              e.animations.add(
                "mysteryDoorPicked",
                Phaser.Animation.generateFrameNames(
                  "mysteryDoorReveal",
                  0,
                  1,
                  "Glow.png"
                ),
                20,
                !1
              );
          }),
          (t.winTypeStrings = [
            "mysteryDoorNoWin.png",
            "mysteryDoorWin1.png",
            "mysteryDoorWin2.png",
            "mysteryDoorWin3.png",
            "mysteryDoorWin4.png",
            "mysteryDoorNoWinNotPicked.png",
            "mysteryDoorWin1NotPicked.png",
            "mysteryDoorWin2NotPicked.png",
            "mysteryDoorWin3NotPicked.png",
            "mysteryDoorWin4NotPicked.png",
          ]),
          (t.winTypeStringsGlow = [
            "mysteryDoorNoWinGlow.png",
            "mysteryDoorWin1Glow.png",
            "mysteryDoorWin2Glow.png",
            "mysteryDoorWin3Glow.png",
            "mysteryDoorWin4Glow.png",
            "mysteryDoorNoWinNotPickedGlow.png",
            "mysteryDoorWin1NotPickedGlow.png",
            "mysteryDoorWin2NotPickedGlow.png",
            "mysteryDoorWin3NotPickedGlow.png",
            "mysteryDoorWin4NotPickedGlow.png",
          ]),
          t
        );
      })();
      e.MysteryDoor = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = tk_common.utils.sequence2.createSequence,
        n = (function () {
          function t(e) {
            this._game = e;
          }
          return (
            (t.prototype.restore = function (t, i) {
              this.setupForMysteryPicks(),
                (this._openedDoors = t.dpe.doors.map(function (e, t) {
                  return -1 != e;
                }));
              this._game.scene.mysteryDoors;
              var n = this._game,
                a = n.scene;
              n.jsBridge.featureEntered("mystery"),
                a.createMysteryGameDoorGlows(),
                a.fullScreenAnimator.clearAllPixels(),
                a.hideSymbols(),
                n.soundSystem.playSoundWithId(
                  e.SoundIds.AS_MysteryGameAmbience,
                  e.SoundIds.AS_MysteryGameAmbience,
                  1,
                  !0,
                  !0,
                  !0
                );
              for (var o = 0; o < a.mysteryDoors.length; o++) {
                var s = a.mysteryDoors[o];
                s.showDoor(),
                  s.resetDoor(),
                  s.setDoorState(this._openedDoors[o]),
                  s.setContent(t.dpe.doors[o], this._openedDoors[o]);
              }
              var r = 3 === t.sue.tc ? 1 : 4 === t.sue.tc ? 2 : 6;
              a.mysteryInfoTextHelper.showInfoTexts(r),
                this.restoreCountUp(t.sue.twa),
                i();
            }),
            (t.prototype.setupForMysteryPicks = function () {
              this._openedDoors = [];
            }),
            (t.prototype.enableDoorPicking = function (e) {
              this._onDoorPicked = e;
              for (
                var t = this._game.scene.mysteryDoors, i = 0;
                i < t.length;
                i++
              ) {
                var n = t[i];
                n.onDoorPicked.add(this.handleDoorPicked, this),
                  n.enablePicking(),
                  this._game.scene.hitAreaManager.activateHitArea(
                    "mysteryDoorHitArea" + n.doorId
                  );
              }
              this._game.scene.mysteryInfoTextHelper.pickingEnabled();
            }),
            (t.prototype.disableDoorPicking = function () {
              for (
                var e = this._game.scene.mysteryDoors, t = 0;
                t < e.length;
                t++
              ) {
                var i = e[t];
                i.disablePicking(),
                  i.onDoorPicked.remove(this.handleDoorPicked, this),
                  this._game.scene.hitAreaManager.deactivateHitArea(
                    "mysteryDoorHitArea" + i.doorId
                  );
              }
              this._game.scene.mysteryInfoTextHelper.pickingDisabled();
            }),
            (t.prototype.handleDoorPicked = function (e) {
              this.disableDoorPicking(), this._onDoorPicked(e);
            }),
            (t.prototype.autoPickDoor = function () {
              var e = -1;
              do {
                var t = Math.floor(15 * Math.random()),
                  i = this._openedDoors[t];
                (!1 !== i && void 0 !== i) || (e = t);
              } while (-1 === e);
              this.handleDoorPicked(e);
            }),
            (t.prototype.openPickedDoor = function (e, t, n) {
              var a = this,
                o = (this._openDoorSequence = i()),
                s = this._game.scene.mysteryDoors[t.di];
              s.setDoorState(!0),
                (this._openedDoors[t.di] = !0),
                (this._mysteryDoorContents = t.doors.concat());
              var r = t.doors.concat()[t.di],
                l = e.twa,
                m = t.wa,
                h = o.startWith.call(function (e) {
                  s.onAnimationComplete.addOnce(e),
                    s.playRevealAnimation(r, !0);
                }).then;
              (h = h.call(function (e) {
                a.presentWinUponDoorContentsRevealed(l, r, m, s, e);
              }).then),
                (o.oncomplete = function () {
                  n(a._openedDoors.concat());
                }),
                o.run();
            }),
            (t.prototype.presentWinUponDoorContentsRevealed = function (
              t,
              i,
              n,
              a,
              o
            ) {
              var s = this._game;
              if (0 == i) {
                s.soundSystem.playSoundWithUniqueID(
                  e.SoundIds.AS_MysteryGameNoWin
                ),
                  this._game.scene.countUp.onCountUpComplete.removeAll();
              } else {
                this.updateCountUp(t, i),
                  s.soundSystem.playSoundWithUniqueID(
                    e.SoundIds["AS_MysteryGameWin0" + i]
                  ),
                  s.scene.mysteryWinLabel.setValue(n);
                var r = a.getSymbolPosition();
                s.scene.mysteryWinLabel.setPosition(r.x, r.y),
                  s.scene.mysteryWinLabel.animateWinLabel();
              }
              o();
            }),
            (t.prototype.updateCountUp = function (e, t) {
              var i = this,
                n = this._game.gameTweaker.mysteryGame,
                a = this._game.scene.countUp;
              (a.visible = !0),
                (a.fadeOutOnComplete = !1),
                a.startCountUp(
                  void 0,
                  e,
                  n.countUpDurationBaseMs * Math.log(10 + (t + 1)),
                  !1
                ),
                a.onCountUpComplete.removeAll(),
                a.onCountUpComplete.addOnce(function () {
                  i._game.updateTotalWinFieldValue();
                });
            }),
            (t.prototype.restoreCountUp = function (e) {
              var t = this._game.scene.countUp;
              (t.visible = !0), t.setValue(e);
            }),
            (t.DOOR_CONTENTS_3 = [4, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]),
            (t.DOOR_CONTENTS_4 = [4, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]),
            (t.DOOR_CONTENTS_5 = [4, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]),
            t
          );
        })();
      t.MysteryGame = n;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {}
        return (e.INTRO_DATA = []), (e.OUTRO_DATA = []), e;
      })();
      e.MysteryGameDataSet = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function t(t) {
          (this.onDoorContentsRevealed = new tk_common.utils.Signal0()),
            (this.onSpecialWinPresented = new tk_common.utils.Signal0()),
            (this._game = t),
            (this._specialWinPresenter = new e.SpecialWinPresenter(t)),
            this._specialWinPresenter.onSpecialWinPresented.add(
              this.handleSpecialWinPresented,
              this
            );
        }
        return (
          (t.prototype.showDoorContents = function (e, t, i) {
            this._game.updateCashField(),
              this._game.updateTotalWinField(),
              this.revealUnopenedDoorContents(e, t, i);
          }),
          (t.prototype.showSpecialWinPresentation = function (t) {
            var i = this._game.gameTweaker.mysteryGame,
              n = this._game.model;
            if (e.SpecialWinPresenter.wasSpecialWin(this._game, t.sue.tbm)) {
              var a = n.getWinLevelId(t.sue.tbm);
              this._specialWinPresenter.startPresentation(
                a,
                i.pauseBeforeSpecialWinMs,
                t
              );
            } else this.onSpecialWinPresented.dispatch();
          }),
          (t.prototype.revealUnopenedDoorContents = function (e, t, i) {
            for (var n = null, a = 0; a < e.length; a++) {
              var o = e[a];
              1 != t[a] && ((n = o), o.playRevealAnimation(i[a], !1));
            }
            null != n &&
              n.onAnimationComplete.addOnce(
                this.handleLastUnpickedDoorRevealed,
                this
              );
          }),
          (t.prototype.handleLastUnpickedDoorRevealed = function () {
            var e =
              this._game.gameTweaker.mysteryGame.pauseBeforeLastDoorRevealedMs;
            TweenMax.delayedCall(
              e / 1e3,
              this.handlePauseAfterLastDoorRevealedExpired,
              void 0,
              this
            );
          }),
          (t.prototype.handlePauseAfterLastDoorRevealedExpired = function () {
            this.onDoorContentsRevealed.dispatch();
          }),
          (t.prototype.handleSpecialWinPresented = function () {
            var e = this._game.gameTweaker.mysteryGame.pauseAfterSpecialWinMs;
            TweenMax.delayedCall(
              e / 1e3,
              this.handlePauseAfterSpecialWinExpired,
              void 0,
              this
            );
          }),
          (t.prototype.handlePauseAfterSpecialWinExpired = function () {
            this.onSpecialWinPresented.dispatch();
          }),
          (t.prototype.stopSpecialWinPresentation = function () {
            this._specialWinPresenter.stopPresentation();
          }),
          t
        );
      })();
      e.MysteryGameFinalWinPresenter = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = (function () {
        function t(e) {
          (this.onShufflingComplete = new tk_common.utils.Signal0()),
            (this._shuffleIntervals = null),
            (this._game = e);
        }
        return (
          (t.prototype.startShuffling = function (e) {
            this.revealDoorContents(e);
          }),
          (t.prototype.revealDoorContents = function (t) {
            (this._doorContents = t.concat().reverse()),
              this.revealNextDoor(0),
              this._game.soundSystem.playSoundWithId(
                e.SoundIds.AS_MysteryGameInitialReveal,
                e.SoundIds.AS_MysteryGameInitialReveal,
                1,
                !1,
                !1,
                !0
              );
          }),
          (t.prototype.revealNextDoor = function (e) {
            var t = this._game.gameTweaker.mysteryGameShuffler,
              i = [0, 1, 2, 3, 4, 9, 8, 7, 6, 5, 10, 11, 12, 13, 14],
              n = this._game.scene.mysteryDoors[i[e]],
              a = this._doorContents[i[e]];
            n.playInitialRevealAnimation(a),
              14 === e
                ? n.onAnimationComplete.addOnce(
                    this.handleAllDoorsRevealed,
                    this
                  )
                : (e++,
                  TweenMax.delayedCall(
                    t.pauseBeforeEachDoorRevealMs / 1e3,
                    this.revealNextDoor,
                    [e],
                    this
                  ));
          }),
          (t.prototype.handleAllDoorsRevealed = function () {
            (this._shuffleTimer = this._game.time.create(!0)),
              this._shuffleTimer.onComplete.addOnce(
                this.handleShufflingComplete,
                this
              ),
              null == this._shuffleIntervals &&
                (this._shuffleIntervals = this.calculateShuffleIntervals()),
              TweenMax.delayedCall(
                2,
                this.startShufflingAfterDelay,
                void 0,
                this
              );
          }),
          (t.prototype.startShufflingAfterDelay = function () {
            for (
              var t = 0, i = this._game.gameTweaker.mysteryGameShuffler, n = 0;
              n < i.shufflesTotal;
              n++
            )
              (t += this._shuffleIntervals[n]),
                n < i.openedShuffles
                  ? this._shuffleTimer.add(t, this.shuffleOpenedDoors, this)
                  : this._shuffleTimer.add(t, this.shuffleClosedDoors, this);
            this._game.soundSystem.playSoundWithId(
              e.SoundIds.AS_MysteryGameShuffle,
              e.SoundIds.AS_MysteryGameShuffle
            ),
              this._shuffleTimer.start();
          }),
          (t.prototype.handleShufflingComplete = function () {
            this.resetAllDoors(), this.onShufflingComplete.dispatch();
          }),
          (t.prototype.shuffle = function (e) {
            for (var t, i, n = e.length; 0 !== n; )
              (i = Math.floor(Math.random() * n)),
                (t = e[(n -= 1)]),
                (e[n] = e[i]),
                (e[i] = t);
            return e;
          }),
          (t.prototype.shuffleClosedDoors = function () {
            this._doorContents = this.shuffle(this._doorContents);
            for (
              var e = this._game.scene.mysteryDoors, t = 0;
              t < e.length;
              t++
            ) {
              var i = e[t];
              i.setContent(this._doorContents[t], !1),
                (i.sprite.visible = !i.sprite.visible);
            }
          }),
          (t.prototype.shuffleOpenedDoors = function () {
            this._doorContents = this.shuffle(this._doorContents);
            for (
              var e = this._game.scene.mysteryDoors, t = 0;
              t < e.length;
              t++
            ) {
              e[t].setContent(this._doorContents[t], !0);
            }
          }),
          (t.prototype.resetAllDoors = function () {
            for (
              var e = this._game.scene.mysteryDoors, t = 0;
              t < e.length;
              t++
            ) {
              e[t].resetDoor();
            }
          }),
          (t.prototype.stopShuffling = function () {
            TweenMax.killDelayedCallsTo(this.startShufflingAfterDelay),
              TweenMax.killDelayedCallsTo(this.revealNextDoor),
              null != this._shuffleTimer &&
                this._shuffleTimer.running &&
                this._shuffleTimer.stop(!0),
              this._game.soundSystem.stopSound(
                e.SoundIds.AS_MysteryGameInitialReveal
              ),
              this._game.soundSystem.stopSound(
                e.SoundIds.AS_MysteryGameShuffle
              ),
              this.resetAllDoors();
          }),
          (t.prototype.calculateShuffleIntervals = function () {
            for (
              var e = this._game.gameTweaker.mysteryGameShuffler,
                t = [],
                i = e.initialDelay,
                n = e.delayDecay,
                a = e.minDelay,
                o = i,
                s = 0;
              s < e.shufflesTotal;
              s++
            )
              t.push(o), (o -= n), (o = Math.max(a, o));
            return t;
          }),
          t
        );
      })();
      t.MysteryGameShuffler = i;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = tk_common.utils.sequence2.createSequence,
        n = tk_common.utils.tweens.createLocalTweenMax,
        a = tk_common.utils.ensureSingleInvocation,
        o = (function () {
          function o(e) {
            (this._game = e),
              (this._ltm = n(!0)),
              (this._infoTextHelper = this._game.scene.mysteryInfoTextHelper),
              (this._mysteryDoorShuffler = new t.MysteryGameShuffler(e)),
              (this._skipStrategy = function () {});
          }
          return (
            (o.prototype.playMysteryGameIntro = function (n, o) {
              var s = this,
                r = (this._introSeq = i()),
                l = r.startWith.call(function (e) {
                  s._game.jsBridge.featureEntered("mystery"),
                    s._game.scene.createMysteryGameDoorGlows();
                  for (var t = n.mgwe, i = 0; i < t.pos.length; i++) {
                    s._game.scene.reels
                      .getSymbolAtServerIndex(t.pos[i])
                      .playWinAnimation();
                  }
                  var a =
                    s._game.gameTweaker.mysteryGameIntro
                      .scatterWinAnimationDurationMs;
                  s._ltm.delayedCall(a / 1e3, e);
                }).then;
              (l = (l = l.call(function (t) {
                (s._countUpFromValue = n.sue.twa),
                  (s._game.scene.countUp.from = s._countUpFromValue),
                  s._game.soundSystem.fadeSound(
                    e.SoundIds.AS_MainGameAmbience,
                    0.2,
                    0,
                    !0
                  ),
                  s.setupDoors(),
                  s._game.scene.paylineButtonsManager.hidePaylineButtons(),
                  s.startMysteryIntro(t);
              }).then).call(function (i) {
                var o = s._game;
                o.gui.onGuiAreaClicked.remove(s.handleAbortIntro, s),
                  o.gui.onGuiAreaClicked.addOnce(s.handleAbortShuffling, s),
                  o.soundSystem.playSoundWithId(
                    e.SoundIds.AS_MysteryGameAmbience,
                    e.SoundIds.AS_MysteryGameAmbience,
                    1,
                    !0,
                    !0,
                    !0
                  ),
                  o.scene.fullScreenAnimator.stopAnimation(),
                  s.showMysteryDoors();
                var r = n.mgwe.pos.length;
                s._mysteryDoorShuffler.onShufflingComplete.addOnce(i),
                  s._mysteryDoorShuffler.startShuffling(
                    t.MysteryGame["DOOR_CONTENTS_" + r]
                  ),
                  (s._skipStrategy = a(function () {
                    s._mysteryDoorShuffler.stopShuffling(),
                      s._mysteryDoorShuffler.onShufflingComplete.dispatch();
                  }));
              }).then),
                (r.oncomplete = function () {
                  s.showInfoTexts(n.mgwe.pos.length),
                    s._game.gui.onGuiAreaClicked.remove(s.handleAbortIntro, s),
                    s._game.gui.onGuiAreaClicked.remove(
                      s.handleAbortShuffling,
                      s
                    ),
                    (s._skipStrategy = function () {}),
                    o();
                }),
                r.run();
            }),
            (o.prototype.startMysteryIntro = function (t) {
              this._skipStrategy = a(function () {
                i.soundSystem.stopSound(e.SoundIds.AS_MysteryGameIntro),
                  n.fullScreenAnimator.stopAnimation(),
                  n.fullScreenAnimator.clearAllPixels(),
                  t();
              });
              var i = this._game;
              i.gui.onGuiAreaClicked.addOnce(this.handleAbortIntro, this),
                i.sceneLayoutManager.mysteryGameEntered(),
                i.soundSystem.playSoundWithId(
                  e.SoundIds.AS_MysteryGameIntro,
                  e.SoundIds.AS_MysteryGameIntro
                );
              var n = i.scene;
              n.fullScreenAnimator.playAnimation("MysteryGameIntro", !1, 1),
                n.fullScreenAnimator.onComplete.addOnce(t),
                n.hideSymbols(),
                n.glowManager.playBackgroundGlowAnimation(
                  "mysteryGameIntro",
                  i.gameTweaker.mysteryGameIntro.backgroundGlowAmount
                );
            }),
            (o.prototype.showMysteryDoors = function () {
              var e = this._game.scene;
              e.hitAreaManager.setClickingActive(!0), e.hideSymbols();
              for (var t = 0; t < e.mysteryDoors.length; t++) {
                var i = e.mysteryDoors[t];
                i.showDoor(), i.resetDoor(), i.setDoorState(!1);
              }
            }),
            (o.prototype.showInfoTexts = function (e) {
              var t = this._game.scene.multiplierText,
                i = this._game.scene.allWinsText;
              if (e > 3) {
                (t.visible = !0), (i.visible = !0);
                var n = 4 === e ? 2 : 6;
                this._game.scene.mysteryInfoTextHelper.showInfoTexts(n);
              } else
                (t.visible = !1),
                  (i.visible = !1),
                  this._game.scene.mysteryInfoTextHelper.showInfoTexts(1);
            }),
            (o.prototype.setupDoors = function () {
              for (
                var e = this._game.scene.mysteryDoors, t = 0;
                t < e.length;
                t++
              ) {
                e[t].resetDoor();
              }
            }),
            (o.prototype.handleAbortIntro = function () {
              this._skipStrategy();
            }),
            (o.prototype.handleAbortShuffling = function () {
              this._skipStrategy();
            }),
            o
          );
        })();
      t.MysteryGameIntro = o;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = tk_common.utils.tweens.createLocalTweenMax,
        n = tk_common.utils.sequence2.createSequence,
        a = tk_common.utils.ensureSingleInvocation,
        o = (function () {
          function o(e) {
            var n = this;
            (this._game = e),
              (this._ltm = i(!0)),
              (this._finalWinPresenter = new t.MysteryGameFinalWinPresenter(e)),
              (this.skipStrategy = function () {
                n._skipInternal();
              });
          }
          return (
            (o.prototype.revealUnopenedDoors = function (e, t) {
              this._game.scene.mysteryInfoTextHelper.hideInfoTexts(),
                this._finalWinPresenter.onDoorContentsRevealed.addOnce(t),
                this._finalWinPresenter.showDoorContents(
                  this._game.scene.mysteryDoors,
                  this.openedDoors,
                  e.dpe.doors
                );
            }),
            (o.prototype.playMysteryGameOutro = function (t, i) {
              var o = this,
                s = (this._outroSequnce = n()),
                r = s.startWith.callSync(function () {
                  o._game.sceneLayoutManager.mysteryGameExited(),
                    o._game.scene.hitAreaManager.setClickingActive(!1);
                }).then;
              this._game.mayAutoExitFeatures() ||
                (r = r.call(function (e) {
                  (o._skipInternal = a(function () {
                    o._game.gui.setSkipMode(!1), e();
                  })),
                    o._game.gui.setSkipMode(!0);
                }).then),
                (r = (r = r.call(function (t) {
                  o._game.soundSystem.fadeSound(
                    e.SoundIds.AS_MysteryGameAmbience,
                    0.2,
                    0,
                    !0
                  ),
                    o._game.soundSystem.playSoundWithId(
                      e.SoundIds.AS_MysteryGameOutro,
                      e.SoundIds.AS_MysteryGameOutro,
                      1,
                      !1,
                      !1,
                      !0
                    ),
                    o.replaceMysteryDoorsWithOriginalSymbols(),
                    o._game.scene.fullScreenAnimator.playAnimation(
                      "MysteryGameOutro",
                      !1,
                      1
                    ),
                    o._game.scene.fullScreenAnimator.onComplete.addOnce(t),
                    o._game.scene.showSymbols(!0);
                }).then).call(function (i) {
                  o._game.soundSystem.playSoundWithId(
                    e.SoundIds.AS_MainGameAmbience,
                    e.SoundIds.AS_MainGameAmbience,
                    1,
                    !0,
                    !0,
                    !0
                  ),
                    o._finalWinPresenter.onSpecialWinPresented.addOnce(i),
                    o._finalWinPresenter.showSpecialWinPresentation(t);
                }).then),
                (s.oncomplete = function () {
                  o._game.scene.fireworksManager.abortFireworks(),
                    o._game.setClientBalanceToServerBalance(!1),
                    o._game.updateCashField(),
                    o._game.scene.idleAnimationManager.gameIsIdle(),
                    o._game.scene.paylineButtonsManager.showPaylineButtons(),
                    i();
                }),
                s.run();
            }),
            (o.prototype.replaceMysteryDoorsWithOriginalSymbols = function () {
              for (
                var t = e.convertGame(this._game), i = 0;
                i < t.scene.mysteryDoors.length;
                i++
              ) {
                t.scene.mysteryDoors[i].hideDoor();
              }
              t.scene.showSymbols(!0);
            }),
            o
          );
        })();
      t.MysteryGameOutro = o;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = (function () {
        function t(e) {
          (this._firstExcitingReel = 5),
            (this._isNearWinPlaying = !1),
            (this._game = e);
        }
        return (
          (t.prototype.analyzeGameState = function (e) {
            var t;
            for (
              this._excitingReelsFrom = e.nwe.excitingreelsfrom.concat(),
                this._excitingSymbolsFrom = e.nwe.excitingsymbolsfrom.concat(),
                this._excitingSymbolsTo = e.nwe.excitingsymbolsto.concat(),
                this._isNearWinPlaying = !1,
                this._firstExcitingReel = 5,
                t = 0;
              t < 5;
              t++
            )
              this._excitingReelsFrom[t] > -1 &&
                (this._firstExcitingReel = Math.min(
                  this._excitingReelsFrom[t],
                  this._firstExcitingReel
                ));
            for (t = 0; t < 15; t++)
              -1 != this._excitingSymbolsFrom[t] &&
                (this._excitingSymbolsFrom[t] -= 1);
            if (
              ((this._firstExcitingReel = Math.max(
                -1,
                this._firstExcitingReel - 1
              )),
              null != e.pwge)
            ) {
              var i = e.pwge.pwins;
              if (null != i) {
                for (t = 0; t < i.length; t++)
                  for (var n = i[t].pos, a = 0; a < n.length; a++) {
                    var o = this._excitingSymbolsFrom[n[a]],
                      s = Math.max(2, Math.floor(n[a] / 3));
                    -1 === o && (o = s);
                    var r = this._excitingSymbolsTo[n[a]],
                      l = n.length;
                    -1 === r && (r = l),
                      (this._excitingSymbolsFrom[n[a]] = Math.min(o, s)),
                      (this._excitingSymbolsTo[n[a]] = Math.max(r, l));
                  }
                for (t = 0; t < 15; t++)
                  11 === e.isge.syms[t] &&
                    (this._excitingSymbolsFrom[t] = Math.max(
                      2,
                      Math.floor(t / 3)
                    ));
              }
            }
          }),
          (t.prototype.handleReelStopped = function (t) {
            var i,
              n,
              a = !1,
              o = [];
            for (n = 0; n < this._excitingSymbolsFrom.length; n++)
              -1 != this._excitingSymbolsFrom[n] &&
                this._excitingSymbolsFrom[n] <= t &&
                ((i = this._game.scene.reels.getSymbolAtServerIndex(n)),
                this._game.scene.stickyWildPresenter.isWildActive(n) &&
                  (i = this._game.scene.stickyWildPresenter.getWildAt(n)),
                o.push(i),
                (a = a || this._excitingSymbolsTo[n] > t));
            var s = this._game.scene.nearWinFrames[t];
            s.kill();
            var r = this._game.scene.nearWinFrameGlows[t];
            r.kill();
            var l =
              this._excitingReelsFrom[t] <= t + 1 &&
              this._excitingReelsFrom[t] >= 2;
            if (4 != t && (l || a)) {
              if (
                t > 0 &&
                t < 4 &&
                this._game.scene.stickyWildPresenter.isReelFilled(t + 1)
              )
                return !1;
              (a = !0),
                (s = this._game.scene.nearWinFrames[t + 1]).revive(),
                s.bringToTop(),
                (s.alpha = 1),
                null != this._frameTween && this._frameTween.stop(!1);
              var m = this._game.gameTweaker.nearWin,
                h = m.frameAlphaTweenDurationMs,
                p = this._game.add.tween(s).to({ alpha: 0 }, h, void 0, !1);
              (p = p.to({ alpha: 1 }, h, void 0, !1)),
                (this._frameTween = p.repeat(1e6)),
                this._frameTween.start(),
                (r = this._game.scene.nearWinFrameGlows[t + 1]).revive(),
                r.bringToTop(),
                (r.alpha = m.frameGlowMaxAmount),
                null != this._frameTweenGlow && this._frameTweenGlow.stop(!1),
                (p = (p = this._game.add
                  .tween(r)
                  .to({ alpha: m.frameGlowMinAmount }, h, void 0, !1)).to(
                  { alpha: m.frameGlowMaxAmount },
                  h,
                  void 0,
                  !1
                )),
                (this._frameTweenGlow = p.repeat(1e6)),
                this._frameTweenGlow.start();
            }
            if (4 == t)
              (a = !1),
                this._game.scene.stickyWildPresenter.stopAttentions(),
                null != this._frameTween && this._frameTween.stop(),
                null != this._frameTweenGlow && this._frameTweenGlow.stop(!1);
            else if (a)
              for (
                this._isNearWinPlaying = !0,
                  this._game.soundSystem.playSoundWithId(
                    e.SoundIds.AS_NearWinStart,
                    e.SoundIds.AS_NearWinStart,
                    0.6,
                    !1,
                    !1,
                    !1
                  ),
                  this._game.scene.playLesserAttentionOnAllSymbols(t + 1),
                  this._game.scene.stickyWildPresenter.startLesserGlowOnAllActiveWilds(),
                  n = 0;
                n < o.length;
                n++
              )
                (i = o[n]).playAttentionAnimation();
            return a;
          }),
          (t.prototype.stopAllAttentions = function (t, i) {
            if (this._isNearWinPlaying) {
              this._game.soundSystem.stopSound(e.SoundIds.AS_NearWinStart);
              for (var n = 0; n < 15; n++) {
                this._game.scene.reels
                  .getSymbolAtServerIndex(n)
                  .playIdleAnimation();
              }
              this._game.scene.stickyWildPresenter.stopAttentions(),
                null != this._frameTween && this._frameTween.stop(!1),
                (0 != i && 4 == this._firstExcitingReel) ||
                  (t
                    ? this._game.soundSystem.playSoundWithUniqueID(
                        e.SoundIds.AS_NearWinStopWin,
                        1
                      )
                    : this._game.soundSystem.playSoundWithUniqueID(
                        e.SoundIds.AS_NearWinStopNoWin,
                        1
                      ));
            }
          }),
          (t.prototype.isReelExciting = function (e) {
            for (var t = !1, i = 0; i < this._excitingSymbolsFrom.length; i++)
              -1 != this._excitingSymbolsFrom[i] &&
                this._excitingSymbolsFrom[i] < e &&
                (t = !0);
            var n = this._excitingReelsFrom[e];
            return -1 === n
              ? { delayStop: t, allowQuickStop: !0 }
              : { delayStop: (t = t || n <= e), allowQuickStop: n > e };
          }),
          t
        );
      })();
      t.NearWinManager = i;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e(e) {
          (this._bonusGame = !1), (this._game = e);
        }
        return (
          (e.prototype.hidePaylineButtons = function () {
            for (var e = 0; e < 15; e++) {
              this._game.scene.allPaylineButtons[e].visible = !1;
            }
          }),
          (e.prototype.showPaylineButtons = function () {
            for (var e = 0; e < 15; e++) {
              this._game.scene.allPaylineButtons[e].visible = !0;
            }
          }),
          (e.prototype.showBonusGameVersion = function () {
            for (var t = 0; t < 15; t++) {
              this._game.scene.allPaylineButtons[t].tint =
                e.BONUS_GAME_PAYLINE_BUTTON_TINT;
            }
            this._bonusGame = !0;
          }),
          (e.prototype.showMainGameVersion = function () {
            for (var t = 0; t < 15; t++) {
              this._game.scene.allPaylineButtons[t].tint =
                e.MAIN_GAME_PAYLINE_BUTTON_TINT;
            }
            this._bonusGame = !1;
          }),
          (e.prototype.showWinningPayline = function (t) {
            var i = this._game.scene.allPaylineButtons[t];
            (i.blendMode = PIXI.blendModes.SCREEN),
              (i.tint = e.WINNING_PAYLINE_BUTTON_TINT);
          }),
          (e.prototype.turnLightsOff = function () {
            for (
              var t = this._bonusGame
                  ? e.BONUS_GAME_PAYLINE_BUTTON_TINT
                  : e.MAIN_GAME_PAYLINE_BUTTON_TINT,
                i = 0;
              i < 15;
              i++
            ) {
              var n = this._game.scene.allPaylineButtons[i];
              (n.blendMode = PIXI.blendModes.ADD), (n.tint = t);
            }
          }),
          (e.prototype.initializeButtons = function () {
            for (
              var e = [2, 6, 4, 0, 3, 7, 5, 1],
                t = [12, 8, 9, 14, 13, 10, 11],
                i = this._game.time.create(!0),
                n = this._game.gameTweaker.paylineButtons.delayBetweenHighlighs,
                a = n,
                o = n,
                s = n,
                r = o + s,
                l = 0;
              l < e.length;
              l++
            )
              i.add(s, this.createPaylineButtonLightOnCallback(e[l]), this),
                (s += a),
                i.add(r, this.createPaylineButtonLightOffCallback(e[l]), this),
                (r += o);
            r = o + (s = n);
            for (l = 0; l < t.length; l++)
              i.add(s, this.createPaylineButtonLightOnCallback(t[l]), this),
                (s += a),
                i.add(r, this.createPaylineButtonLightOffCallback(t[l]), this),
                (r += o);
            i.start();
          }),
          (e.prototype.createPaylineButtonLightOnCallback = function (t) {
            var i = this;
            return function () {
              var n = i._game.scene.allPaylineButtons[t];
              (n.visible = !0), (n.tint = e.WINNING_PAYLINE_BUTTON_TINT);
            };
          }),
          (e.prototype.createPaylineButtonLightOffCallback = function (t) {
            var i = this;
            return function () {
              i._game.scene.allPaylineButtons[t].tint =
                e.MAIN_GAME_PAYLINE_BUTTON_TINT;
            };
          }),
          (e.MAIN_GAME_PAYLINE_BUTTON_TINT = 927288),
          (e.BONUS_GAME_PAYLINE_BUTTON_TINT = 927288),
          (e.WINNING_PAYLINE_BUTTON_TINT = 16777215),
          e
        );
      })();
      e.PayLineButtonsManager = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = e.SoundIds,
        n = (function () {
          function e(e, t) {
            (this.onWinPresenting = new tk_common.utils.Signal1()),
              (this._runningPresentation = !1),
              (this._symbolsPlaying = []),
              (this._game = e),
              (this._countUp = this._game.scene.countUp),
              (this._jsBridge = t);
          }
          return (
            (e.prototype.startWinPresentation = function (e, t) {
              (this._currentState = e),
                (this._runningPresentation = !0),
                (this._symbolsPlaying = []),
                (this._paylineWinSituation = t),
                this._jsBridge.showingPaylineWin({
                  index: this._paylineWinSituation.pid,
                }),
                this._game.soundSystem.playSoundWithUniqueID(
                  i.AS_PaylineWinSnd,
                  1,
                  0
                ),
                this._game.scene.cameraShaker.shake(1.2),
                this.playWinAnimationOnWinningSymbols(),
                this.setPaylineButtonStateToWin(t.pid),
                this.onWinPresenting.dispatch(this._paylineWinSituation.wa);
            }),
            (e.prototype.setPaylineButtonStateToWin = function (e) {
              this._game.scene.paylineButtonsManager.showWinningPayline(e);
            }),
            (e.prototype.playWinAnimationOnWinningSymbols = function () {
              for (var e = 0; e < this._paylineWinSituation.pos.length; e++) {
                var t = this._paylineWinSituation.pos[e];
                try {
                  var i = this.getSymbolAtServerIndex(t);
                  this._symbolsPlaying.push(i), i.playWinAnimation();
                } catch (e) {}
              }
            }),
            (e.prototype.getSymbolAtServerIndex = function (e) {
              return "main" !== this.getCurrentState().sue.rgp &&
                this._game.scene.stickyWildPresenter.isWildActive(e)
                ? this._game.scene.stickyWildPresenter.getWildAt(e)
                : this._game.scene.reels.getSymbolAtServerIndex(e);
            }),
            (e.prototype.stopPresentation = function () {
              if (this._runningPresentation) {
                (this._runningPresentation = !1),
                  null != this._delayTimer && this._delayTimer.stop(!0);
                for (var e = 0; e < this._symbolsPlaying.length; e++) {
                  this._symbolsPlaying[e].stopWinPresentation();
                }
                this._symbolsPlaying = [];
              } else this._symbolsPlaying = [];
            }),
            (e.prototype.getCurrentState = function () {
              return this._currentState;
            }),
            e
          );
        })();
      t.PaylineWinPresenter = n;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = (function () {
        function t(t) {
          (this.onAllWinsPresented = new tk_common.utils.Signal0()),
            (this.onPresentationAborted = new tk_common.utils.Signal0()),
            (this.onPresentationStarted = new tk_common.utils.Signal0()),
            (this._showingPaylines = !1),
            (this._showingExclamation = !1),
            (this._fireworksStopped = !1),
            (this._exclamationStopped = !1),
            (this._paylinesStopped = !1),
            (this._bigWinStarsTween = null),
            (this._aborted = !1),
            (this._currentPresenterIndex = 0),
            (this._game = t),
            (this._paylineWinPresenters = []);
          for (var i = 0; i < 15; i++) {
            var n = new e.view.PaylineWinPresenter(t, t.jsBridge);
            n.onWinPresenting.add(this.handlePaylineWinPresenting, this),
              this._paylineWinPresenters.push(n);
          }
        }
        return (
          Object.defineProperty(t.prototype, "isRunning", {
            get: function () {
              return this._showingPaylines || this._showingExclamation;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.startWinPresentation = function (e, t, i) {
            (this._currentState = e),
              null == this._countUp &&
                (this._countUp = this._game.scene.countUp),
              (this._allWinSituations = e.pwge.pwins),
              (this._winLevelId = t),
              (this._currentPresenterIndex = 0),
              (this._fireworksStopped = !1),
              (this._exclamationStopped = !1),
              (this._paylinesStopped = !1),
              (this._winLevelId = t),
              (this._aborted = !1);
            var n = e.pwge.stbm,
              a = i / 1e3;
            TweenMax.delayedCall(
              a,
              this.startPresentationAfterInitialDelay,
              [n],
              this
            );
          }),
          (t.prototype.startPresentationAfterInitialDelay = function (e) {
            if (!1 === this._aborted)
              if (
                (this.onPresentationStarted.dispatch(),
                this._allWinSituations.length > 0)
              ) {
                (this._runningPresentation = !0),
                  this._winLevelId >= tk.d.config.WinLevelIds.BigWin &&
                    this.startCommonFireworks(this._winLevelId);
                var t =
                    this._game.gameTweaker.winPresentationState
                      .paylinePresentation.pauseBetweenPaylinePresentationsMs /
                    1e3,
                  i = 0;
                this._showingPaylines = !0;
                for (var n = 0; n < this._allWinSituations.length; n++)
                  (i += t),
                    TweenMax.delayedCall(
                      i,
                      this.startPresentingPayline,
                      [n, this._allWinSituations[n]],
                      this
                    );
                TweenMax.delayedCall(
                  i + 2 * t,
                  this.handlePaylineWinsPresented,
                  [e],
                  this
                );
              } else this.onAllWinsPresented.dispatch();
            else this.onPresentationAborted.dispatch();
          }),
          (t.prototype.stopPresentation = function () {
            (this._aborted = !0),
              TweenMax.killDelayedCallsTo(this.startPresentingPayline),
              TweenMax.killDelayedCallsTo(
                this.startPresentationAfterInitialDelay
              ),
              TweenMax.killDelayedCallsTo(this.handlePaylineWinsPresented),
              this._runningPresentation
                ? ((this._runningPresentation = !1),
                  this.stopFireworks(),
                  !0 === this._showingPaylines
                    ? this.stopPaylinesPresentation()
                    : (this._paylinesStopped = !0),
                  !0 === this._showingExclamation
                    ? this.stopExclamation()
                    : ((this._exclamationStopped = !0),
                      this.handleFullscreenAnimationAborted()))
                : this.onPresentationAborted.dispatch(),
              (this._runningPresentation = !1);
          }),
          (t.prototype.resetAfterBonus = function () {
            (this._runningPresentation = !1),
              this.stopFireworks(),
              this.stopPaylinesPresentation();
          }),
          (t.prototype.handleFireworksAborted = function () {
            (this._fireworksStopped = !0),
              this._exclamationStopped &&
                this._fireworksStopped &&
                this._paylinesStopped &&
                this.onPresentationAborted.dispatch();
          }),
          (t.prototype.handleFullscreenAnimationAborted = function () {
            (this._exclamationStopped = !0),
              this._exclamationStopped &&
                this._fireworksStopped &&
                this._paylinesStopped &&
                this.onPresentationAborted.dispatch();
          }),
          (t.prototype.handlePaylineWinsPresented = function (e) {
            !1 !== this._runningPresentation &&
              (this.resetSymbolsToIdle(), this.startExclamation(e));
          }),
          (t.prototype.startPresentingPayline = function (e, t) {
            var i = this._paylineWinPresenters[e],
              n = this.getCurrentState();
            i.startWinPresentation(n, t);
          }),
          (t.prototype.handlePaylineWinPresenting = function (e) {
            (this._countUp.visible = this._game.mayCelebrateWin(
              this._game.model.gameRound.totalBetMultiplierForGameRound
            )),
              this._countUp.addValue(e),
              this.getSceneLayoutManager().setCountUpToScaleStep(
                this._currentPresenterIndex,
                this._allWinSituations.length
              );
          }),
          (t.prototype.getSceneLayoutManager = function () {
            return this._game.sceneLayoutManager;
          }),
          (t.prototype.startExclamation = function (e) {
            ((this._showingPaylines = !1),
            (this._showingExclamation = !0),
            this._game.scene.backgroundGlow.revive(),
            this._winLevelId === tk.d.config.WinLevelIds.SmallWin &&
              this._game.mayCelebrateWin(e))
              ? 2 * Math.random() > 1
                ? this.showNiceAnimation()
                : this.showGreatAnimation()
              : this._winLevelId === tk.d.config.WinLevelIds.MediumWin
              ? this.showAwesomeAnimation()
              : this.handleExclamationAnimationComplete();
          }),
          (t.prototype.showNiceAnimation = function () {
            this._game.scene.fullScreenAnimator.onComplete.addOnce(
              this.handleExclamationAnimationComplete,
              this
            ),
              this._game.scene.fullScreenAnimator.playAnimation("nice", !0, 1),
              this._game.soundSystem.playSoundWithUniqueID(
                e.SoundIds.AS_MiniWinSnd,
                1
              );
          }),
          (t.prototype.showGreatAnimation = function () {
            this._game.scene.fullScreenAnimator.onComplete.addOnce(
              this.handleExclamationAnimationComplete,
              this
            ),
              this._game.scene.fullScreenAnimator.playAnimation("great", !0, 1),
              this._game.soundSystem.playSoundWithUniqueID(
                e.SoundIds.AS_SmallWinSnd,
                1
              );
          }),
          (t.prototype.showAwesomeAnimation = function () {
            this._game.scene.fullScreenAnimator.onComplete.addOnce(
              this.handleExclamationAnimationComplete,
              this
            ),
              this._game.scene.fullScreenAnimator.playAnimation(
                "awesome",
                !0,
                1.5
              ),
              this._game.soundSystem.playSoundWithUniqueID(
                e.SoundIds.AS_MediumWinSnd,
                1
              ),
              this.tweenStars("stretchStarParticlePurple.png");
          }),
          (t.prototype.handleExclamationAnimationComplete = function () {
            if (!1 === this._runningPresentation)
              throw "PaylineWinsPresenter: Exclamation completed with listener but presentation is not running!";
            (this._runningPresentation = !1),
              (this._showingExclamation = !1),
              this._game.scene.backgroundGlow.kill(),
              this._game.scene.fireworksManager.abortFireworks(),
              this.onAllWinsPresented.dispatch();
          }),
          (t.prototype.startCommonFireworks = function (e) {
            this._game.scene.fireworksManager.playCommonWinFireworks();
          }),
          (t.prototype.stopPaylinesPresentation = function () {
            for (var e = 0; e < this._paylineWinPresenters.length; e++) {
              this._paylineWinPresenters[e].stopPresentation();
            }
            this.resetSymbolsToIdle(),
              (this._showingPaylines = !1),
              (this._paylinesStopped = !0);
          }),
          (t.prototype.stopFireworks = function () {
            if (!this._fireworksStopped) {
              this._fireworksStopped = !0;
              var e = this._game.scene.fireworksManager;
              e.isPlaying
                ? (e.onFireworksShowAborted.addOnce(
                    this.handleFireworksAborted,
                    this
                  ),
                  e.abortFireworks())
                : (this._fireworksStopped = !0);
            }
          }),
          (t.prototype.stopExclamation = function () {
            var e = this._game.scene.fullScreenAnimator;
            e.onComplete.remove(this.handleExclamationAnimationComplete, this),
              e.onComplete.addOnce(this.handleFullscreenAnimationAborted, this),
              e.stopAnimation(),
              (this._showingExclamation = !1);
          }),
          (t.prototype.tweenStars = function (t) {
            for (
              var i = this._game.scene.stretchedStars, n = 0;
              n < i.length;
              n++
            ) {
              i[n].frameName = t;
            }
            var a = this._game.gameTweaker.winPresentationState.awesomeEffects;
            if (null == this._bigWinStarsTween) {
              this._game.scene.starsHolder.alpha = 1;
              var o = this._game.scene.stretchedStarsHolders[0].children[0];
              o.x = 0;
              var s = this._game.add
                .tween(o)
                .to({ x: 1e3 }, a.stretchedStarsTweenDurationMs, void 0, !0, 0);
              this._bigWinStarsTween = e.utils.createFastTweenUpdateFunc(s, i);
            } else this._bigWinStarsTween.start();
          }),
          (t.prototype.resetSymbolsToIdle = function () {
            for (var e = this._game.scene, t = 0; t < 15; t++) {
              var i = e.reels.getSymbolAtServerIndex(t);
              e.stickyWildPresenter.isWildActive(t) &&
                (i = e.stickyWildPresenter.getWildAt(t)),
                i.playIdleAnimation();
            }
          }),
          (t.prototype.getCurrentState = function () {
            return this._currentState;
          }),
          t
        );
      })();
      t.PaylineWinsPresenter = i;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {}
        return (
          (e.init = function () {
            (e.VMs[0] = e.convertMatrix(e.VM0)),
              (e.VMs[1] = e.convertMatrix(e.VM1)),
              (e.VMs[2] = e.convertMatrix(e.VM2)),
              (e.VMs[3] = e.convertMatrix(e.VM3)),
              (e.VMs[4] = e.convertMatrix(e.VM4)),
              (e.P = e.convertMatrix(e.P));
            (e.O = e.multiplyMatrix4(
              [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1280, 720, 0, 2],
              [1280, 0, 0, 0, 0, 720, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            )),
              (e.OP = e.multiplyMatrix4(e.O, e.P));
          }),
          (e.convertMatrix = function (e) {
            var t = [],
              i = 0;
            return (
              (t[i++] = e.m00),
              (t[i++] = e.m10),
              (t[i++] = e.m20),
              (t[i++] = e.m30),
              (t[i++] = e.m01),
              (t[i++] = e.m11),
              (t[i++] = e.m21),
              (t[i++] = e.m31),
              (t[i++] = e.m02),
              (t[i++] = e.m12),
              (t[i++] = e.m22),
              (t[i++] = e.m32),
              (t[i++] = e.m03),
              (t[i++] = e.m13),
              (t[i++] = e.m23),
              (t[i++] = e.m33),
              t
            );
          }),
          (e.multiplyMatrix4 = function (e, t) {
            var i = e[0],
              n = e[4],
              a = e[8],
              o = e[12],
              s = e[1],
              r = e[5],
              l = e[9],
              m = e[13],
              h = e[2],
              p = e[6],
              u = e[10],
              c = e[14],
              d = e[3],
              _ = e[7],
              g = e[11],
              y = e[15],
              S = t[0],
              f = t[4],
              v = t[8],
              b = t[12],
              w = t[1],
              A = t[5],
              T = t[9],
              x = t[13],
              M = t[2],
              I = t[6],
              P = t[10],
              W = t[14],
              E = t[3],
              k = t[7],
              C = t[11],
              G = t[15],
              R = [];
            return (
              (R[0] = i * S + n * w + a * M + o * E),
              (R[4] = i * f + n * A + a * I + o * k),
              (R[8] = i * v + n * T + a * P + o * C),
              (R[12] = i * b + n * x + a * W + o * G),
              (R[1] = s * S + r * w + l * M + m * E),
              (R[5] = s * f + r * A + l * I + m * k),
              (R[9] = s * v + r * T + l * P + m * C),
              (R[13] = s * b + r * x + l * W + m * G),
              (R[2] = h * S + p * w + u * M + c * E),
              (R[6] = h * f + p * A + u * I + c * k),
              (R[10] = h * v + p * T + u * P + c * C),
              (R[14] = h * b + p * x + u * W + c * G),
              (R[3] = d * S + _ * w + g * M + y * E),
              (R[7] = d * f + _ * A + g * I + y * k),
              (R[11] = d * v + _ * T + g * P + y * C),
              (R[15] = d * b + _ * x + g * W + y * G),
              R
            );
          }),
          (e.multiplyVector = function (e, t, i) {
            void 0 === i && (i = !0);
            var n = t.x,
              a = t.y,
              o = t.z,
              s = t.w,
              r = { x: 0, y: 0, z: 0, w: 1 };
            return (
              (r.x = e[0] * n + e[4] * a + e[8] * o + e[12] * s),
              (r.y = e[1] * n + e[5] * a + e[9] * o + e[13] * s),
              (r.z = e[2] * n + e[6] * a + e[10] * o + e[14] * s),
              (r.w = e[3] * n + e[7] * a + e[11] * o + e[15] * s),
              i &&
                0 != r.w &&
                ((r.x /= r.w), (r.y /= r.w), (r.z /= r.w), (r.w = 1)),
              r
            );
          }),
          (e.Matrix4Identiy = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
          (e.VM0 = {
            m00: 11,
            m10: 0,
            m20: 0,
            m30: 0,
            m01: 0,
            m11: 40.7686234,
            m21: -10.0955057,
            m31: 0,
            m02: 0,
            m12: -0.240369186,
            m22: -0.970681548,
            m32: 0,
            m03: -25.26553,
            m13: 2.65289664,
            m23: -47.0600052,
            m33: 1,
          }),
          (e.VM1 = {
            m00: 11,
            m10: 0,
            m20: 0,
            m30: 0,
            m01: 0,
            m11: 40.7686234,
            m21: -10.0955057,
            m31: 0,
            m02: 0,
            m12: -0.240369186,
            m22: -0.970681548,
            m32: 0,
            m03: -12.2,
            m13: 3.20068288,
            m23: -44.84788,
            m33: 1,
          }),
          (e.VM2 = {
            m00: 11,
            m10: 0,
            m20: 0,
            m30: 0,
            m01: 0,
            m11: 40.7686234,
            m21: -10.0955057,
            m31: 0,
            m02: 0,
            m12: -0.240369186,
            m22: -0.970681548,
            m32: 0,
            m03: -0.03769338,
            m13: 3.40056944,
            m23: -44.04068,
            m33: 1,
          }),
          (e.VM3 = {
            m00: 11,
            m10: 0,
            m20: 0,
            m30: 0,
            m01: 0,
            m11: 40.7686234,
            m21: -10.0955057,
            m31: 0,
            m02: 0,
            m12: -0.240369186,
            m22: -0.970681548,
            m32: 0,
            m03: 12.2,
            m13: 3.19326925,
            m23: -44.87782,
            m33: 1,
          }),
          (e.VM4 = {
            m00: 11,
            m10: 0,
            m20: 0,
            m30: 0,
            m01: 0,
            m11: 40.7686234,
            m21: -10.0955057,
            m31: 0,
            m02: 0,
            m12: -0.240369186,
            m22: -0.970681548,
            m32: 0,
            m03: 25.47494,
            m13: 2.65289664,
            m23: -47.0600052,
            m33: 1,
          }),
          (e.P = {
            m00: 0.974278569,
            m10: 0,
            m20: 0,
            m30: 0,
            m01: 0,
            m11: 1.73205078,
            m21: 0,
            m31: 0,
            m02: 0,
            m12: 0,
            m22: -1.051282,
            m32: -1,
            m03: 0,
            m13: 0,
            m23: -10.2564106,
            m33: 0,
          }),
          (e.VMs = []),
          e
        );
      })();
      e.ReelMatrixes = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e(e) {
          this._game = e;
        }
        return (
          (e.prototype.shake = function (e) {
            null != this._tween && this._tween.stop();
            var t = [].concat(
              this._game.gameTweaker.cameraShaker.movementDurations
            );
            if (this._game.gameTweaker.cameraShaker.applyFactorToDurations)
              for (var i = 0; i < t.length; i++)
                t[i] = t[i] * (1 + Math.log(e));
            var n,
              a = 2 * Math.random() * Math.PI,
              o = e * Math.cos(a),
              s = e * Math.sin(a);
            this._game.getCurrentDeviceOrientation() ===
            tk_common.constants.OrientationEnum.LANDSCAPE
              ? ((n = this._game.add
                  .tween(this._game.scene.mainCameraRoot)
                  .to({ x: o, y: s }, t[0], Phaser.Easing.Circular.Out, !1)).to(
                  { x: -o / 2, y: -s / 2 },
                  t[1],
                  Phaser.Easing.Circular.Out,
                  !1
                ),
                n.to(
                  { x: o / 3, y: s / 3 },
                  t[2],
                  Phaser.Easing.Circular.Out,
                  !1
                ),
                n.to(
                  { x: -o / 4, y: -s / 4 },
                  t[3],
                  Phaser.Easing.Circular.Out,
                  !1
                ),
                n.to(
                  { x: o / 5, y: s / 5 },
                  t[4],
                  Phaser.Easing.Circular.Out,
                  !1
                ),
                n.to({ x: 0, y: 0 }, t[5], Phaser.Easing.Circular.Out, !1))
              : ((n = this._game.add
                  .tween(this._game.scene.mainCameraRoot)
                  .to({ x: o, y: s }, t[0], Phaser.Easing.Circular.Out, !1)).to(
                  { x: -o / 2, y: -s / 2 },
                  t[0],
                  Phaser.Easing.Circular.Out,
                  !1
                ),
                n.to(
                  { x: o / 3, y: s / 3 },
                  t[0],
                  Phaser.Easing.Circular.Out,
                  !1
                ),
                n.to(
                  { x: -o / 4, y: -s / 4 },
                  t[0],
                  Phaser.Easing.Circular.Out,
                  !1
                ),
                n.to(
                  { x: o / 5, y: s / 5 },
                  t[0],
                  Phaser.Easing.Circular.Out,
                  !1
                ),
                n.to({ x: 0, y: 0 }, t[0], Phaser.Easing.Circular.Out, !1));
            (this._tween = n), n.start();
          }),
          e
        );
      })();
      e.SceneShaker = t;
    })(e.utils || (e.utils = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {}
        return (
          (e.BIG_WIN_DATA = []),
          (e.MEGA_WIN_DATA = []),
          (e.ULTRA_WIN_DATA = []),
          e
        );
      })();
      e.SpecialWinDataSet = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function t(e, t, i, n, a) {
          (this.onAnimationComplete = new tk_common.utils.Signal1()),
            (this._symbolPositionForMeteoriteHit = null),
            (this._rootGroup = e),
            (this._symbolSprite = t),
            (this._attentionImage = i),
            (this._game = t.game),
            (this._symbolIndex = a),
            (this._idleFrame = "stickyWild.png"),
            (this._symbolSprite.visible = !1),
            (this._attentionImage.visible = !1);
          var o = Phaser.Animation.generateFrameNames(
            "stickyWildWin",
            0,
            1,
            ".png"
          );
          (o = o.concat(o)),
            this._symbolSprite.animations.add("stickyWildWin", o, 31, !1),
            this._symbolSprite.animations.add(
              "stickyWildAppear",
              Phaser.Animation.generateFrameNames(
                "stickyWildAppear",
                0,
                17,
                ".png"
              ),
              31
            ),
            (this._reelIndex = n);
        }
        return (
          (t.createStickyWild = function (i, n, a, o) {
            var s = i.sprite(0, 0, "symbols", "stickyWild.png", o),
              r = e.ReelMatrixes.VMs[n];
            (s.viewModelMatrix = r),
              (s.v0 = { x: 0, y: 0 }),
              (s.v1 = { x: 0, y: 0 }),
              (s.v2 = { x: 0, y: 0 }),
              (s.v3 = { x: 0, y: 0 });
            var l = 31 - 13 * (a - 5);
            (s.v0.x = 0),
              (s.v0.y = l),
              (s.v1.x = 13),
              (s.v1.y = l),
              (s.v2.x = 13),
              (s.v2.y = 13 + l),
              (s.v3.x = 0),
              (s.v3.y = 13 + l);
            var m = i.image(0, 0, "symbols", "stickyWildWin0.png", o);
            return (
              (m.viewModelMatrix = r),
              (m.v0 = { x: 0, y: 0 }),
              (m.v1 = { x: 0, y: 0 }),
              (m.v2 = { x: 0, y: 0 }),
              (m.v3 = { x: 0, y: 0 }),
              (m.v0.x = 0),
              (m.v0.y = l),
              (m.v1.x = 13),
              (m.v1.y = l),
              (m.v2.x = 13),
              (m.v2.y = 13 + l),
              (m.v3.x = 0),
              (m.v3.y = 13 + l),
              new t(o, s, m, n, a)
            );
          }),
          (t.prototype.setGlowImage = function (t) {
            this._glowImage = t;
            var i = e.ReelMatrixes.VMs[this._reelIndex];
            (this._glowImage.viewModelMatrix = i),
              (this._glowImage.visible = !1),
              (t.v0 = { x: 0, y: 0 }),
              (t.v1 = { x: 0, y: 0 }),
              (t.v2 = { x: 0, y: 0 }),
              (t.v3 = { x: 0, y: 0 });
            var n = 31 - 13 * (this._symbolIndex - 5);
            (t.v3.x = 0),
              (t.v3.y = n),
              (t.v2.x = 13),
              (t.v2.y = n),
              (t.v1.x = 13),
              (t.v1.y = 13 + n),
              (t.v0.x = 0),
              (t.v0.y = 13 + n);
            var a = t;
            (a.v0.x = a.v0.x - 1),
              (a.v0.y = a.v0.y + 1),
              (a.v1.x = a.v1.x + 1),
              (a.v1.y = a.v1.y + 1),
              (a.v2.x = a.v2.x + 1),
              (a.v2.y = a.v2.y - 1),
              (a.v3.x = a.v3.x - 1),
              (a.v3.y = a.v3.y - 1);
            var o = Phaser.Animation.generateFrameNames(
              "stickyWildWin",
              1,
              0,
              "Glow.png"
            );
            (o = o.concat(o)),
              this._glowImage.animations.add("stickyWildWin", o, 31, !1),
              this._glowImage.animations.add(
                "stickyWildAppear",
                Phaser.Animation.generateFrameNames(
                  "stickyWildAppear",
                  0,
                  17,
                  "Glow.png"
                ),
                31
              );
          }),
          (t.prototype.playWinAnimation = function () {
            null != this._currentAnimation &&
              (this._currentAnimation.stop(),
              this._currentAnimation.onComplete.remove(
                this.handleCurrentAnimationComplete,
                this
              )),
              (this._attentionImage.visible = !1),
              (this._currentAnimation = this._symbolSprite.play(
                "stickyWildWin",
                31,
                !1,
                !1
              )),
              this._currentAnimation.onComplete.addOnce(
                this.handleCurrentAnimationComplete,
                this
              );
          }),
          (t.prototype.playIdleAnimation = function () {
            null != this._currentAnimation &&
              (this._currentAnimation.stop(),
              this._currentAnimation.onComplete.remove(
                this.handleCurrentAnimationComplete,
                this
              )),
              (this._symbolSprite.frameName = this._idleFrame),
              (this._attentionImage.visible = !1),
              (this._symbolSprite.visible = !0),
              this._glowImage && (this._glowImage.visible = !0),
              this.stopAttentionGlowAnimation();
          }),
          (t.prototype.handleCurrentAnimationComplete = function () {
            (this._currentAnimation = null),
              this.playIdleAnimation(),
              this.onAnimationComplete.dispatch(this);
          }),
          (t.prototype.getSymbolPosition = function () {
            if (null == this._symbolPositionForMeteoriteHit) {
              var t = this._symbolSprite,
                i = {
                  x: (t.v0.x + (t.v2.x - t.v0.x) / 2) / 13 - 0.5,
                  y: (t.v2.y + (t.v0.y - t.v2.y) / 2) / 48 - 0.5,
                  z: 0,
                  w: 1,
                },
                n = e.ReelMatrixes.multiplyMatrix4(
                  e.ReelMatrixes.OP,
                  t.viewModelMatrix
                ),
                a = e.ReelMatrixes.multiplyVector(n, i, !0);
              this._symbolPositionForMeteoriteHit = new Phaser.Point(
                a.x,
                720 - a.y
              );
            }
            return this._symbolPositionForMeteoriteHit;
          }),
          (t.prototype.kill = function () {
            this._symbolSprite.kill(),
              this._attentionImage.kill(),
              this._glowImage && this._glowImage.kill();
          }),
          (t.prototype.revive = function () {
            this._symbolSprite.revive(), this._glowImage.revive();
          }),
          (t.prototype.playAttentionAnimation = function () {
            this.startAttentionGlowAnimation();
          }),
          (t.prototype.startLesserGlowAnimation = function () {
            if (null != this._glowImage) {
              var e = this._game.gameTweaker.nearWin,
                t = e.symbolLesserAttentionMinGlow,
                i = e.symbolLesserAttentionMaxGlow,
                n = e.symbolAttentionTweenDurationMs / 1e3;
              TweenMax.killTweensOf(this._glowImage),
                TweenMax.fromTo(
                  this._glowImage,
                  n,
                  { alpha: t },
                  { alpha: i, repeat: 1e5, yoyo: !0 }
                );
            }
          }),
          (t.prototype.stopWinPresentation = function () {
            null != this._currentAnimation &&
              (this._currentAnimation.stop(),
              this._currentAnimation.onComplete.remove(
                this.handleCurrentAnimationComplete,
                this
              )),
              this.playIdleAnimation();
          }),
          (t.prototype.startAttentionGlowAnimation = function () {
            this._attentionImage.visible = !0;
            var e = this._game.gameTweaker.nearWin,
              t = e.symbolAttentionMinGlow,
              i = e.symbolAttentionMaxGlow,
              n = e.symbolAttentionTweenDurationMs / 1e3;
            TweenMax.fromTo(
              this._attentionImage,
              n,
              { alpha: 0 },
              { alpha: 1, repeat: 1e5, yoyo: !0 }
            ),
              null != this._glowImage &&
                (TweenMax.killTweensOf(this._glowImage),
                TweenMax.fromTo(this._glowImage, n, { alpha: t }, { alpha: i })
                  .repeat(1e5)
                  .yoyo(!0));
          }),
          (t.prototype.stopAttentionGlowAnimation = function () {
            TweenMax.killTweensOf(this._attentionImage),
              this._glowImage &&
                (TweenMax.killTweensOf(this._glowImage),
                (this._glowImage.alpha = 1));
          }),
          (t.prototype.activate = function () {
            null != this._currentAnimation &&
              (this._currentAnimation.stop(),
              this._currentAnimation.onComplete.remove(
                this.handleCurrentAnimationComplete,
                this
              )),
              null != this._glowImage && this._glowImage.revive(),
              this._symbolSprite.revive(),
              (this._currentAnimation = this._symbolSprite.play(
                "stickyWildAppear",
                31,
                !1,
                !1
              )),
              this._currentAnimation.onComplete.addOnce(
                this.handleActivationComplete,
                this
              );
          }),
          (t.prototype.handleActivationComplete = function () {
            (this._currentAnimation = null), this.playIdleAnimation();
          }),
          (t.prototype.moveSymbolToFront = function () {
            this._symbolSprite.bringToTop();
          }),
          (t.prototype.moveGlowToFront = function () {
            null != this._glowImage && this._glowImage.bringToTop();
          }),
          (t.prototype.restore = function () {
            this.activate(),
              this._currentAnimation.onComplete.remove(
                this.handleActivationComplete,
                this
              ),
              this._currentAnimation.stop(),
              this.handleActivationComplete();
          }),
          t
        );
      })();
      e.StickyWild = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = (function () {
        function t(e, t) {
          var i = this;
          (this.onStickWildPresentationComplete =
            new tk_common.utils.Signal0()),
            (this._wildMapping = [
              -1, -1, -1, 0, 3, 6, 1, 4, 7, 2, 5, 8, -1, -1, -1,
            ]),
            (this._activeWilds = [!1, !1, !1, !1, !1, !1, !1, !1, !1]),
            (this._impactAnimationIds = [
              "impactRight",
              "impactRight",
              "impactLeft",
              "impactLeft",
              "impactRight",
              "impactRight",
              "impactRight",
              "impactLeft",
              "impactRight",
            ]),
            (this._game = e),
            (this._wilds = t),
            (window.testWildHit = function (e) {
              return i.startWildHitAnimation(e);
            });
        }
        return (
          (t.prototype.reset = function () {
            this._activeWilds = [!1, !1, !1, !1, !1, !1, !1, !1, !1];
          }),
          (t.prototype.startWildHitAnimation = function (t) {
            var i,
              n = this,
              a = this._game.scene.monolithHittingMeteorite,
              o = this._wildMapping[t];
            (i = this.isWildActive(t)
              ? e.SoundIds[
                  "AS_StickyWildMeteoriteNoHit" +
                    (Math.floor(3 * Math.random()) + 1)
                ]
              : e.SoundIds[
                  "AS_StickyWildMeteorite" + (Math.floor(3 * Math.random()) + 1)
                ]),
              this._game.soundSystem.playSoundWithUniqueID(i),
              (this._activeWilds[o] = !0);
            var s = this.getWildAt(t).getSymbolPosition();
            (this._game.scene.stickyWildEffectGroup.x = s.x),
              (this._game.scene.stickyWildEffectGroup.y = s.y);
            a = a;
            (this._game.scene.stickyWildEffectGroup.scale.x = o < 3 ? -1 : 1),
              a.playAnimation("stickyWildMeteoriteAnimation", 60),
              a.onHit.addOnce(function () {
                return n.handleMonolithHit(o);
              }, this);
          }),
          (t.prototype.handleMonolithHit = function (e) {
            var t;
            this._game.scene.cameraShaker.shake(
              this._game.gameTweaker.bonusGame.impactShakeAmount
            ),
              this._wilds[e].activate();
            for (var i = 0; i < 8; i++)
              ((t =
                this._game.scene.stickyWildImpactEffects[i]).parent.alpha = 1),
                t.revive(),
                t.play(this._impactAnimationIds[i], 60, !1, !1);
            TweenMax.delayedCall(
              0.5,
              this.onStickWildPresentationComplete.dispatch,
              void 0,
              this.onStickWildPresentationComplete
            );
          }),
          (t.prototype.getWildAt = function (e) {
            return this._wilds[this._wildMapping[e]];
          }),
          (t.prototype.isWildActive = function (e) {
            return this._activeWilds[this._wildMapping[e]];
          }),
          (t.prototype.hideAllWilds = function () {
            for (var e = 0; e < this._wilds.length; e++) this._wilds[e].kill();
          }),
          (t.prototype.stopAttentions = function () {
            for (var e = 0; e < 15; e++)
              this.isWildActive(e) && this.getWildAt(e).playIdleAnimation();
          }),
          (t.prototype.moveWildsToTopOfLayer = function () {
            for (var e = 0; e < this._wilds.length; e++) {
              this._wilds[e].moveSymbolToFront();
            }
            for (e = 0; e < this._wilds.length; e++) {
              this._wilds[e].moveGlowToFront();
            }
          }),
          (t.prototype.isReelFilled = function (e) {
            return (
              this.isWildActive(3 * e) &&
              this.isWildActive(3 * e + 1) &&
              this.isWildActive(3 * e + 2)
            );
          }),
          (t.prototype.startLesserGlowOnAllActiveWilds = function () {
            for (var e = 0; e < this._wilds.length; e++)
              this.isWildActive(e) && this._wilds[e].startLesserGlowAnimation();
          }),
          (t.prototype.restoreWilds = function (e) {
            this._game.scene.createStickyWildGlows();
            for (var t = 0; t < e.length; t++) {
              if (13 === e[t])
                this.getWildAt(t).restore(),
                  (this._activeWilds[this._wildMapping[t]] = !0);
            }
            this.moveWildsToTopOfLayer();
          }),
          t
        );
      })();
      t.StickyWildPresenter = i;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    var t = (function () {
      function e(e) {
        var t = this;
        (this.onSpriteBatchReady = new Phaser.Signal()),
          (this.totalBatchSize = 0),
          (this._ready = !1),
          (this.spriteBatch = e),
          this.replaceInitWebGLFunction(this.spriteBatch, function (e) {
            t.renderSprite(e);
          });
      }
      return (
        Object.defineProperty(e.prototype, "ready", {
          get: function () {
            return this._ready;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.setSubPixelCoords = function (e, t) {
          if (this.ready) {
            var i = this.vertices,
              n = 40 * e;
            (i[n++] = t.x1),
              (i[n++] = t.y1),
              (i[n++] = 0),
              (i[n++] = 0),
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              (i[n++] = t.x0),
              (i[n++] = t.y0),
              (i[n++] = 0),
              (i[n++] = 0),
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              (i[n++] = t.x2),
              (i[n++] = t.y2),
              (i[n++] = 0),
              (i[n++] = 0),
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              (i[n++] = t.x3),
              (i[n++] = t.y3),
              (i[n++] = 0),
              (i[n++] = 0);
          }
        }),
        (e.prototype.updateSubSpriteData = function (e, t) {
          if (this.ready) {
            var i = this.vertices,
              n = 40 * e;
            (i[n++] = t.w1),
              (i[n++] = t.h1),
              null != t.position
                ? ((i[n++] = t.position.x), (i[n++] = t.position.y))
                : (n++, n++),
              null != t.scale
                ? ((i[n++] = t.scale.x), (i[n++] = t.scale.y))
                : (n++, n++),
              (i[n++] = t.rotation || 0),
              n++,
              n++,
              n++,
              (i[n++] = t.w0),
              (i[n++] = t.h1),
              null != t.position
                ? ((i[n++] = t.position.x), (i[n++] = t.position.y))
                : (n++, n++),
              null != t.scale
                ? ((i[n++] = t.scale.x), (i[n++] = t.scale.y))
                : (n++, n++),
              (i[n++] = t.rotation || 0),
              n++,
              n++,
              n++,
              (i[n++] = t.w0),
              (i[n++] = t.h0),
              null != t.position
                ? ((i[n++] = t.position.x), (i[n++] = t.position.y))
                : (n++, n++),
              null != t.scale
                ? ((i[n++] = t.scale.x), (i[n++] = t.scale.y))
                : (n++, n++),
              (i[n++] = t.rotation || 0),
              n++,
              n++,
              n++,
              (i[n++] = t.w1),
              (i[n++] = t.h0),
              null != t.position
                ? ((i[n++] = t.position.x), (i[n++] = t.position.y))
                : (n++, n++),
              null != t.scale
                ? ((i[n++] = t.scale.x), (i[n++] = t.scale.y))
                : (n++, n++),
              (i[n++] = t.rotation || 0);
          }
        }),
        (e.prototype.updateSubSpriteUVs = function (e, t) {
          if (this.ready) {
            var i = this.vertices,
              n = 40 * e;
            n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              (i[n++] = t.x0),
              (i[n++] = t.y0),
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              (i[n++] = t.x1),
              (i[n++] = t.y1),
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              (i[n++] = t.x2),
              (i[n++] = t.y2),
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              (i[n++] = t.x3),
              (i[n++] = t.y3);
          }
        }),
        (e.prototype.updateSubSpriteAlpha = function (e, t) {
          if (this.ready) {
            var i = this.vertices,
              n = 40 * e;
            n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              (i[n++] = t),
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              (i[n++] = t),
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              (i[n++] = t),
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              n++,
              (i[n++] = t);
          }
        }),
        (e.prototype.addSubSprite = function (e, t) {
          if (!this.ready)
            throw "WebGLSpriteBatchWrapper.addSubSprite: Illegal to add subsprite before the batch has been initialized";
          return (
            this.initializeNewSprite(this.totalBatchSize, e, t),
            this.totalBatchSize++,
            this.totalBatchSize - 1
          );
        }),
        (e.prototype.renderSprite = function (e) {
          this.pixiBatchRef.currentBatchSize = this.totalBatchSize;
          var t = this.pixiBatchRef.gl;
          t.activeTexture(t.TEXTURE0),
            t.bindTexture(t.TEXTURE_2D, e.texture.baseTexture._glTextures[0]),
            this.pixiBatchRef.flush();
        }),
        (e.prototype.replaceInitWebGLFunction = function (e, t) {
          var i = this;
          e._renderWebGL = function (e) {
            var n;
            !this.visible ||
              this.alpha <= 0 ||
              !this.children.length ||
              (this.ready ||
                ((this.fastSpriteBatch = new PIXI.WebGLFastSpriteBatch(e.gl, {
                  vertSize: 10,
                  maxSize: 4e3,
                  size: 4e3,
                })),
                (this.fastSpriteBatch.renderSprite = t),
                (n = this.fastSpriteBatch),
                i.handleSpriteBatchInitialized(n),
                (this.ready = !0)),
              this.fastSpriteBatch.gl !== e.gl &&
                this.fastSpriteBatch.setContext(e.gl),
              e.spriteBatch.stop(),
              e.shaderManager.setShader(e.shaderManager.fastShader),
              this.fastSpriteBatch.begin(this, e),
              this.fastSpriteBatch.render(this),
              e.spriteBatch.start());
          }.bind(e);
        }),
        (e.prototype.handleSpriteBatchInitialized = function (e) {
          (this.pixiBatchRef = e),
            (this.pixiBatchRef.fastBatch = this),
            (this.vertices = this.pixiBatchRef.vertices),
            (this._ready = !0),
            this.onSpriteBatchReady.dispatch(this.spriteBatch);
        }),
        (e.prototype.initializeNewSprite = function (e, t, i) {
          this.updateSubSpriteData(e, t),
            this.updateSubSpriteUVs(e, i),
            this.updateSubSpriteAlpha(e, 1);
        }),
        (e.getUVs = function (e) {
          return e._updateUvs();
        }),
        (e.calculateSubSpriteData = function (e, t, i) {
          var n,
            a,
            o,
            s,
            r = t,
            l = r.frame.width,
            m = r.frame.height,
            h = r.crop;
          i = i;
          if (r.trim) {
            var p = r.trim;
            (n = (a = p.x - i.x * r.trim.width) + h.width),
              (o = (s = p.y - i.y * r.trim.height) + h.height);
          } else
            (n = l * (1 - i.x)),
              (a = l * -i.x),
              (o = m * (1 - i.y)),
              (s = m * -i.y);
          return {
            w0: n,
            h0: o,
            w1: a,
            h1: s,
            position: { x: e.x, y: e.y },
            scale: { x: 1, y: 1 },
          };
        }),
        e
      );
    })();
    e.WebGLSpriteBatchWrapper = t;
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function (t) {
        function i(e, i, n, a) {
          var o = t.call(this, e, i, n, a) || this;
          return (
            (o.matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), o
          );
        }
        return (
          __extends(i, t),
          (i.prototype.preUpdate = function () {
            for (var e = 0; e < this.children.length; e++)
              this.children[e].preUpdate();
          }),
          (i.prototype._renderWebGL = function (e) {
            var t = this;
            if (this.visible && !(this.alpha <= 0) && this.children.length) {
              this.game.device.iOS && PIXI.glContexts[0].flush(),
                e.spriteBatch.stop();
              try {
                t.ready || (t._initWebGL(e.gl), (t.ready = !0)),
                  t.fastSpriteBatch.gl !== e.gl &&
                    t.fastSpriteBatch.setContext(e.gl),
                  e.shaderManager.setShader(this._shader),
                  t.fastSpriteBatch.begin(this, e),
                  t.fastSpriteBatch.render(this);
              } catch (e) {
                throw ((this.visible = !1), e);
              }
              e.spriteBatch.start();
            }
          }),
          (i.prototype._initWebGL = function (t) {
            var n = (this.fastSpriteBatch = new PIXI.WebGLFastSpriteBatch(t, {
              vertSize: 10,
              maxSize: 4e3,
              size: 4e3,
            }));
            (n.vertSize = i.STRIDE),
              (n.renderSprite = this._renderSprite.bind(n));
            var a = (this._shader = new e.TransformedShader(t));
            (n.start = this.createStartClosure(this, n)),
              (n.begin = function (e, t) {
                (this.renderSession = t), (this.shader = a), this.start();
              }.bind(n));
          }),
          (i.prototype.createStartClosure = function (e, t) {
            var i = e._start.bind(t);
            return function () {
              i(e.matrix, e.worldTransform);
            };
          }),
          (i.prototype._start = function (e, t) {
            var n = this,
              a = n.gl;
            a.activeTexture(a.TEXTURE0),
              n.currentBaseTexture &&
                a.bindTexture(
                  a.TEXTURE_2D,
                  n.currentBaseTexture._glTextures[0]
                ),
              a.bindBuffer(a.ARRAY_BUFFER, n.vertexBuffer),
              a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, n.indexBuffer);
            var o = n.renderSession.projection;
            a.uniform2f(n.shader.projectionVector, o.x, o.y),
              a.uniformMatrix4fv(n.shader.uMp, !1, e),
              a.uniformMatrix3fv(n.shader.uWorldTransform, !1, t.toArray(!0));
            var s = i.STRIDE,
              r = 0;
            a.vertexAttribPointer(
              n.shader.aVertexPosition,
              2,
              a.FLOAT,
              !1,
              s,
              r
            ),
              (r += 8),
              a.vertexAttribPointer(
                n.shader.aTextureCoord,
                2,
                a.FLOAT,
                !1,
                s,
                r
              ),
              (r += 8),
              a.vertexAttribPointer(n.shader.aColor, 1, a.FLOAT, !1, s, r),
              (r += 4),
              a.vertexAttribPointer(
                n.shader.aLocalToWorld0,
                4,
                a.FLOAT,
                !1,
                s,
                r
              ),
              (r += 16),
              a.vertexAttribPointer(
                n.shader.aLocalToWorld1,
                4,
                a.FLOAT,
                !1,
                s,
                r
              ),
              (r += 16),
              a.vertexAttribPointer(
                n.shader.aLocalToWorld2,
                4,
                a.FLOAT,
                !1,
                s,
                r
              ),
              (r += 16),
              a.vertexAttribPointer(
                n.shader.aLocalToWorld3,
                4,
                a.FLOAT,
                !1,
                s,
                r
              ),
              (r += 16);
          }),
          (i.prototype._renderSprite = function (t) {
            var n = this;
            if (t.visible) {
              if (
                t.texture.baseTexture !== n.currentBaseTexture ||
                t.blendMode != n.currentBlendMode
              ) {
                if (!t.texture._uvs) return;
                n.flush(),
                  (n.currentBlendMode = t.blendMode),
                  n.renderSession.blendModeManager.setBlendMode(
                    n.currentBlendMode
                  ),
                  (n.currentBaseTexture = t.texture.baseTexture);
                var a = n.gl;
                a.activeTexture(a.TEXTURE0),
                  a.bindTexture(
                    a.TEXTURE_2D,
                    t.texture.baseTexture._glTextures[0]
                  );
              }
              var o,
                s,
                r,
                l,
                m,
                h,
                p,
                u,
                c = n.vertices,
                d = t.viewModelMatrix || e.ReelMatrixes.Matrix4Identiy;
              (s = t.texture.frame.width),
                (r = t.texture.frame.height),
                t.texture.trim
                  ? ((m = t._frame.spriteSourceSizeX),
                    (h = t._frame.spriteSourceSizeY),
                    (p = t._frame.spriteSourceSizeW),
                    (u = t._frame.spriteSourceSizeH))
                  : ((m = 0), (h = 0), (p = s), (u = r));
              var _ = m,
                g = s - m - p,
                y = m,
                S = s - m - p,
                f = r - h - u,
                v = r - h - u,
                b = h,
                w = h,
                A = t.v3.x,
                T = t.v3.y,
                x = t.v2.x,
                M = t.v2.y,
                I = t.v1.x,
                P = t.v1.y,
                W = t.v0.x,
                E = t.v0.y,
                k = { x: 0, y: 0 },
                C = { x: 0, y: 0 },
                G = { x: 0, y: 0 },
                R = { x: 0, y: 0 };
              if (
                ((k.x = (A + (_ / s) * (x - A)) / 13),
                (k.y = (T + (b / r) * (E - T)) / 48),
                (C.x = (x - (g / s) * (x - A)) / 13),
                (C.y = (M + (w / r) * (P - M)) / 48),
                (G.x = (I - (S / s) * (I - W)) / 13),
                (G.y = (P - (f / r) * (P - M)) / 48),
                (R.x = (W + (y / s) * (I - W)) / 13),
                (R.y = (E - (v / r) * (E - T)) / 48),
                !0 === t.shouldCrop && k.y > 1)
              ) {
                var O = k.y - 1,
                  F = t.texture._uvs;
                o = {
                  x0: F.x0,
                  x1: F.x1,
                  x2: F.x2,
                  x3: F.x3,
                  y0: F.y0,
                  y1: F.y1,
                  y2: F.y2,
                  y3: F.y3,
                };
                var L = O / (k.y - R.y),
                  D = F.y0 + (F.y3 - F.y0) * L;
                (o.y0 = D),
                  (o.y1 = D),
                  (k.y = 1),
                  (C.y = 1),
                  (G.y > 1 || R.y > 1) && ((G.y = 1), (R.y = 1));
              } else o = t.texture._uvs;
              (k.x -= 0.5),
                (k.y -= 0.5),
                (C.x -= 0.5),
                (C.y -= 0.5),
                (G.x -= 0.5),
                (G.y -= 0.5),
                (R.x -= 0.5),
                (R.y -= 0.5),
                (l = n.currentBatchSize * i.STRIDE),
                (c[l++] = k.x),
                (c[l++] = k.y),
                (c[l++] = o.x0),
                (c[l++] = o.y0),
                (c[l++] = t.alpha),
                (c[l++] = d[0]),
                (c[l++] = d[1]),
                (c[l++] = d[2]),
                (c[l++] = d[3]),
                (c[l++] = d[4]),
                (c[l++] = d[5]),
                (c[l++] = d[6]),
                (c[l++] = d[7]),
                (c[l++] = d[8]),
                (c[l++] = d[9]),
                (c[l++] = d[10]),
                (c[l++] = d[11]),
                (c[l++] = d[12]),
                (c[l++] = d[13]),
                (c[l++] = d[14]),
                (c[l++] = d[15]),
                (c[l++] = C.x),
                (c[l++] = C.y),
                (c[l++] = o.x1),
                (c[l++] = o.y1),
                (c[l++] = t.alpha),
                (c[l++] = d[0]),
                (c[l++] = d[1]),
                (c[l++] = d[2]),
                (c[l++] = d[3]),
                (c[l++] = d[4]),
                (c[l++] = d[5]),
                (c[l++] = d[6]),
                (c[l++] = d[7]),
                (c[l++] = d[8]),
                (c[l++] = d[9]),
                (c[l++] = d[10]),
                (c[l++] = d[11]),
                (c[l++] = d[12]),
                (c[l++] = d[13]),
                (c[l++] = d[14]),
                (c[l++] = d[15]),
                (c[l++] = G.x),
                (c[l++] = G.y),
                (c[l++] = o.x2),
                (c[l++] = o.y2),
                (c[l++] = t.alpha),
                (c[l++] = d[0]),
                (c[l++] = d[1]),
                (c[l++] = d[2]),
                (c[l++] = d[3]),
                (c[l++] = d[4]),
                (c[l++] = d[5]),
                (c[l++] = d[6]),
                (c[l++] = d[7]),
                (c[l++] = d[8]),
                (c[l++] = d[9]),
                (c[l++] = d[10]),
                (c[l++] = d[11]),
                (c[l++] = d[12]),
                (c[l++] = d[13]),
                (c[l++] = d[14]),
                (c[l++] = d[15]),
                (c[l++] = R.x),
                (c[l++] = R.y),
                (c[l++] = o.x3),
                (c[l++] = o.y3),
                (c[l++] = t.alpha),
                (c[l++] = d[0]),
                (c[l++] = d[1]),
                (c[l++] = d[2]),
                (c[l++] = d[3]),
                (c[l++] = d[4]),
                (c[l++] = d[5]),
                (c[l++] = d[6]),
                (c[l++] = d[7]),
                (c[l++] = d[8]),
                (c[l++] = d[9]),
                (c[l++] = d[10]),
                (c[l++] = d[11]),
                (c[l++] = d[12]),
                (c[l++] = d[13]),
                (c[l++] = d[14]),
                (c[l++] = d[15]),
                n.currentBatchSize++,
                n.currentBatchSize >= n.size && n.flush();
            }
          }),
          (i.STRIDE = 84),
          i
        );
      })(Phaser.SpriteBatch);
      e.SymbolLayerSpriteBatch = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e(e) {
          (this._UID = PIXI._UID++),
            (this.program = null),
            (this.fragmentSrc = [
              "precision mediump float;",
              "varying vec3 vTextureCoord;",
              "varying float vColor;",
              "uniform sampler2D uSampler;",
              "void main(void) {",
              "   vec2 uv = vTextureCoord.xy / vTextureCoord.z;",
              "   vec4 color = texture2D(uSampler, uv) * vColor;",
              "   gl_FragColor = color;",
              "}",
            ]),
            (this.vertexSrc = [
              "attribute highp vec2 aVertexPosition;",
              "attribute highp vec2 aTextureCoord;",
              "attribute highp float aColor;",
              "attribute highp vec4 aLocalToWorld_m0;",
              "attribute highp vec4 aLocalToWorld_m1;",
              "attribute highp vec4 aLocalToWorld_m2;",
              "attribute highp vec4 aLocalToWorld_m3;",
              "uniform highp mat3 wt;",
              "uniform highp vec2 projectionVector;",
              "uniform highp mat4 uMp;",
              "varying highp vec3 vTextureCoord;",
              "varying highp float vColor;",
              "const vec2 center = vec2(-1.0,1.0);",
              "highp mat4 buildMat4(in vec4 iV0,in vec4 iV1,in vec4 iV2,in vec4 iV3) {",
              "highp mat4 outMatrix = mat4(iV0,iV1,iV2,iV3);",
              "return outMatrix;",
              "}",
              "highp mat4 transpose4(in highp mat4 inMatrix) {",
              "highp vec4 i0 = inMatrix[0];",
              "highp vec4 i1 = inMatrix[1];",
              "highp vec4 i2 = inMatrix[2];",
              "highp vec4 i3 = inMatrix[3];",
              "highp mat4 outMatrix = mat4(",
              "vec4(i0.x, i1.x, i2.x, i3.x),",
              "vec4(i0.y, i1.y, i2.y, i3.y),",
              "vec4(i0.z, i1.z, i2.z, i3.z),",
              "vec4(i0.w, i1.w, i2.w, i3.w)",
              ");",
              "return outMatrix;",
              "}",
              "highp mat3 transpose3(in lowp mat3 inMatrix) {",
              "highp vec3 i0 = inMatrix[0];",
              "highp vec3 i1 = inMatrix[1];",
              "highp vec3 i2 = inMatrix[2];",
              "highp mat3 outMatrix = mat3(",
              "vec3(i0.x, i1.x, i2.x),",
              "vec3(i0.y, i1.y, i2.y),",
              "vec3(i0.z, i1.z, i2.z)",
              ");",
              "return outMatrix;",
              "}",
              "void main(void) {",
              "   mat4 lMvm = buildMat4(aLocalToWorld_m0,aLocalToWorld_m1,aLocalToWorld_m2,aLocalToWorld_m3);",
              "   vec4 vpos = vec4(aVertexPosition, 0.0, 1.0);",
              "   mat4 cvm = (uMp * lMvm);",
              "   vec4 w =  cvm * vpos;",
              "   vec4 w2 = w / w.w;",
              "   w2.y = 720.0-w2.y;",
              "   w2.x = w2.x - 640.0;",
              "   w2.y = w2.y - 360.0;",
              "   vec3 z = wt * w2.xyw;",
              "   z = z / z.z;",
              "   vec2 v = z.xy;",
              "   v.x = v.x + 640.0 * wt[0][0];",
              "   v.y = v.y + 360.0 * wt[1][1];",
              "   vpos = vec4(((v.x / projectionVector.x) + center.x), ((v.y / projectionVector.y * 1.0) + center.y), 0.0, 1.0);",
              "   gl_Position = vpos;",
              "   vTextureCoord = vec3(aTextureCoord.x / w.w, aTextureCoord.y / w.w, 1.0/w.w);",
              "   vColor = aColor;",
              "}",
            ]),
            (this.textureCount = 0),
            (this.shaders = []),
            (this.attributes = []),
            (this.gl = e),
            (this.shaders[0] = this),
            this.init();
        }
        return (
          (e.prototype.init = function () {
            var e = this.gl,
              t = PIXI.compileProgram(
                e,
                this.vertexSrc,
                this.fragmentSrc,
                function (e, t) {
                  e.bindAttribLocation(t, 0, "aVertexPosition"),
                    e.bindAttribLocation(t, 1, "aTextureCoord"),
                    e.bindAttribLocation(t, 2, "aColor"),
                    e.bindAttribLocation(t, 3, "aLocalToWorld_m0"),
                    e.bindAttribLocation(t, 4, "aLocalToWorld_m1"),
                    e.bindAttribLocation(t, 5, "aLocalToWorld_m2"),
                    e.bindAttribLocation(t, 6, "aLocalToWorld_m3");
                }
              );
            (this.aVertexPosition = e.getAttribLocation(t, "aVertexPosition")),
              (this.aTextureCoord = e.getAttribLocation(t, "aTextureCoord")),
              (this.aColor = e.getAttribLocation(t, "aColor")),
              (this.aLocalToWorld0 = e.getAttribLocation(
                t,
                "aLocalToWorld_m0"
              )),
              (this.aLocalToWorld1 = e.getAttribLocation(
                t,
                "aLocalToWorld_m1"
              )),
              (this.aLocalToWorld2 = e.getAttribLocation(
                t,
                "aLocalToWorld_m2"
              )),
              (this.aLocalToWorld3 = e.getAttribLocation(
                t,
                "aLocalToWorld_m3"
              )),
              e.useProgram(t),
              (this.uSampler = e.getUniformLocation(t, "uSampler")),
              (this.projectionVector = e.getUniformLocation(
                t,
                "projectionVector"
              )),
              (this.uWorldTransform = e.getUniformLocation(t, "wt")),
              (this.uMp = e.getUniformLocation(t, "uMp")),
              (this.attributes = [
                this.aVertexPosition,
                this.aTextureCoord,
                this.aColor,
                this.aLocalToWorld0,
                this.aLocalToWorld1,
                this.aLocalToWorld2,
                this.aLocalToWorld3,
              ]),
              (this.program = t);
          }),
          (e.prototype.destroy = function () {
            this.gl.deleteProgram(this.program), (this.gl = null);
          }),
          e
        );
      })();
      e.TransformedShader = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (e) {
      var t = (function () {
        function e() {}
        return (
          (e.NICE_DATA = []), (e.GREAT_DATA = []), (e.AWESOME_DATA = []), e
        );
      })();
      e.WinExclamationsDataSet = t;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {})),
  (function (e) {
    !(function (t) {
      var i = (function () {
        function i(t) {
          var i = this;
          (this.onWinPresentationComplete = new tk_common.utils.Signal0()),
            (this.onWinPresentationStarted = new tk_common.utils.Signal0()),
            (this.onWinPresentationAborted = new tk_common.utils.Signal0()),
            (this._aborted = { specialWin: !1, paylines: !1 }),
            (this._game = t),
            (this._paylineWinsPresenter = new e.view.PaylineWinsPresenter(t)),
            this._paylineWinsPresenter.onAllWinsPresented.add(
              this.handleWinPresentationComplete,
              this
            ),
            this._paylineWinsPresenter.onPresentationAborted.add(
              this.handlePaylinePresentationAborted,
              this
            ),
            (this._specialWinPresenter = new e.view.SpecialWinPresenter(t)),
            this._specialWinPresenter.onSpecialWinPresented.add(function () {
              i.startPaylineWinsPresentation(i._currentState, 0);
            }, this),
            this._specialWinPresenter.onSpecialWinAborted.add(
              this.handleSpecialWinAborted,
              this
            );
        }
        return (
          (i.prototype.startWinPresentation = function (e) {
            this._currentState = e;
            var t = this._game.gameTweaker.winPresentationState;
            (this._aborted.specialWin = !1),
              (this._aborted.paylines = !1),
              this._game.model.setClientBalance(this._game.model.serverBalance),
              this._game.jsBridge.winPresentationStarted({});
            var i = this._game.scene;
            if (
              (this._game.model.setClientBalance(
                this._game.model.serverBalance
              ),
              this.wasWinningSpin(e))
            ) {
              i.countUp.setValue(0),
                (i.countUp.to = e.pwge.stwa),
                (i.countUp.visible = !1);
              var n = this._game.model.autoPlayState.running
                ? t.autoSpin.pauseBeforeWinPresMs
                : this._game.scene.reels.isQuickStopped
                ? t.singleSpin.pauseBeforeWinPresIfQuickStoppedMs
                : t.autoSpin.pauseBeforeWinPresMs;
              this.wasSpecialWin()
                ? this.startSpecialWinPresentation(e, n)
                : (this.startPaylineWinsPresentation(e, n),
                  (this._aborted.specialWin = !0));
            } else
              (this._aborted.specialWin = !0),
                (this._aborted.paylines = !0),
                this.onWinPresentationStarted.dispatch(),
                this.onWinPresentationComplete.dispatch();
          }),
          (i.prototype.resetAfterBonus = function () {
            this._paylineWinsPresenter.resetAfterBonus();
          }),
          (i.prototype.startSpecialWinPresentation = function (e, t) {
            var i = this;
            void 0 === t && (t = 0),
              this._specialWinPresenter.onSpecialWinStarted.addOnce(
                function () {
                  i.onWinPresentationStarted.dispatch();
                }
              ),
              this._specialWinPresenter.startPresentation(
                this.getWinLevelId(),
                t,
                e
              );
          }),
          (i.prototype.startPaylineWinsPresentation = function (e, t) {
            var i = this;
            void 0 === t && (t = 0);
            var n = this._game.model.getWinLevelId(e.pwge.stbm);
            this._paylineWinsPresenter.onPresentationStarted.addOnce(
              function () {
                i.onWinPresentationStarted.dispatch();
              }
            ),
              this._paylineWinsPresenter.startWinPresentation(e, n, t);
          }),
          (i.prototype.abort = function () {
            var e = this;
            this._game.updateCashField(),
              this._specialWinPresenter.stopPresentation(),
              this._paylineWinsPresenter.onPresentationAborted.addOnce(
                function () {
                  e.onWinPresentationAborted.dispatch();
                }
              ),
              this._paylineWinsPresenter.stopPresentation();
          }),
          (i.prototype.handleSpecialWinAborted = function () {
            (this._aborted.specialWin = !0),
              this._aborted.specialWin &&
                this._aborted.paylines &&
                this.handleWinPresentationAborted();
          }),
          (i.prototype.handlePaylinePresentationAborted = function () {
            (this._aborted.paylines = !0),
              this._aborted.specialWin &&
                this._aborted.paylines &&
                this.handleWinPresentationAborted();
          }),
          (i.prototype.handleWinPresentationAborted = function () {
            this.updateClientBalance(),
              this.onWinPresentationAborted.dispatch();
          }),
          (i.prototype.wasWinningSpin = function (e) {
            return (
              void 0 === e && (e = null),
              (e = e || this._currentState),
              null != this._currentState.pwge
            );
          }),
          (i.prototype.wasSpecialWin = function () {
            return t.SpecialWinPresenter.wasSpecialWin(
              this._game,
              this._currentState.pwge.stbm
            );
          }),
          (i.prototype.getWinLevelId = function () {
            return this._game.model.getWinLevelId(this._currentState.pwge.stbm);
          }),
          (i.prototype.updateClientBalance = function () {
            this._game.updateCashField(),
              this._game.updateTotalWinField(),
              this._game.sendBalanceChangedCallToJsBridge();
          }),
          (i.prototype.handleWinPresentationComplete = function () {
            this.updateClientBalance(),
              this.onWinPresentationComplete.dispatch();
          }),
          i
        );
      })();
      t.WinPresentationManager = i;
    })(e.view || (e.view = {}));
  })(tk_astronaut || (tk_astronaut = {}));
