var tk_astronaut;
!(function (e) {
  var r = (function () {
    function r() {}
    return (
      (r.setup = function () {
        (document.getElementById("gameWrapper").style.display = "none"),
          window.addEventListener("resize", r.resize),
          window.addEventListener("orientationchange", r.resize);
        var t = document.createElement("div");
        (t.id = "preloaderBackground"),
          (t.style.width = "100%"),
          (t.style.height = "100%"),
          (t.style.backgroundColor = "black"),
          (t.style.position = "absolute");
        var i = document.createElement("div");
        (i.id = "preloaderDiv"),
          (i.style.position = "absolute"),
          (i.style.width = "100%"),
          (i.style.height = "100%"),
          (i.style.display = "table"),
          window.outerHeight > window.outerWidth
            ? (i.style.backgroundImage =
                "url(" +
                e.requireBaseUrl +
                "/assets/images/loader/loaderPortrait.jpg)")
            : (i.style.backgroundImage =
                "url(" +
                e.requireBaseUrl +
                "/assets/images/loader/loaderLandscape.jpg)"),
          (i.style.backgroundRepeat = "no-repeat"),
          (i.style.backgroundSize = "cover");
        var s = document.createElement("div");
        (s.style.display = "table-cell"),
          (s.style.verticalAlign = "middle"),
          i.appendChild(s);
        var a = document.createElement("div");
        (a.style.backgroundImage =
          "url(" +
          e.requireBaseUrl +
          "/assets/images/loader/progressBarHolder.png)"),
          (a.style.width = r._progressBarHolderWidth + "px"),
          (a.style.height = r._progressBarHolderHeight + "px"),
          (a.style.marginLeft = "auto"),
          (a.style.marginTop = ""),
          (a.style.marginRight = "auto"),
          (a.style.position = "relative"),
          (a.id = "progressBarHolder"),
          s.appendChild(a);
        var o = document.createElement("div");
        (o.style.backgroundImage =
          "url(" + e.requireBaseUrl + "/assets/images/loader/progressBar.png)"),
          (o.style.position = "absolute"),
          (o.style.height = r._progressBarInteriorHeight + "px"),
          (o.style.width = "0%"),
          (o.style.backgroundSize = "100% 100%"),
          (o.id = "progressBar"),
          a.appendChild(o);
        var n = document.createElement("div"),
          l = document.createElement("label");
        (l.style.color = "white"),
          (l.style.margin = "auto"),
          n.appendChild(l),
          (l.innerHTML = "DISCLAIMER GOES HERE"),
          (r.disclaimerText = l),
          i.appendChild(n),
          (n.style.fontSize = "24pt"),
          (n.style.width = "100%"),
          (n.style.position = "absolute"),
          (n.style.textAlign = "center"),
          (n.style.left = "0px"),
          (n.style.top = "10px"),
          (n.style.fontFamily = "Verdana"),
          (n.style.backgroundColor = "black"),
          (n.style.border = "2px red solid"),
          (n.style.display = "none"),
          (r.disclaimerDiv = n),
          document.body.appendChild(t),
          document.body.appendChild(i),
          (r._progressBarHolderInnerWidthRatio =
            r._progressBarInteriorWidth / r._progressBarHolderWidth),
          r.resize();
      }),
      (r.showDisclaimer = function (e) {
        (r.disclaimerDiv.style.display = "block"),
          (r.disclaimerText.innerHTML = e);
      }),
      (r.hideDisclaimer = function () {
        r.disclaimerDiv.style.display = "none";
      }),
      (r.updateDisclaimerTime = function (e) {}),
      (r.loadingFiles = function () {
        null == r.progressBar &&
          (r.progressBar = document.getElementById("progressBar")),
          null == r._intervalId &&
            (r._intervalId = setInterval(r._updateProgressBar, 32));
      }),
      (r.filesLoaded = function (e, r) {
        (this._actualProgress = r), this._updateProgressBar();
      }),
      (r.gameStarting = function () {
        null == r.progressBar &&
          (r.progressBar = document.getElementById("progressBar")),
          clearInterval(r._intervalId),
          (r._bytesLoaded = r._bytesTotal),
          (r._actualProgress = 1),
          (r.progressBar.style.width = "95%"),
          (document.getElementById("gameWrapper").style.display = "block");
      }),
      (r.removePreloader = function () {
        var e = document.getElementById("preloaderDiv");
        e.parentNode.removeChild(e),
          (e = document.getElementById(
            "preloaderBackground"
          )).parentNode.removeChild(e),
          window.removeEventListener("resize", r.resize),
          window.removeEventListener("orientationchange", r.resize);
      }),
      (r._updateProgressBar = function () {
        (r._simulatedProgress += r._actualProgress + 3 - r._simulatedProgress),
          (r._simulatedProgress = Math.min(
            Math.min(100, r._actualProgress + 3),
            r._simulatedProgress
          ));
        var e =
          Math.floor(
            Math.min(r._simulatedProgress, 93) * r._progressBarHolderWidth
          ) / 100;
        r.progressBar.style.width =
          Math.min(r._progressBarInteriorWidth, e) + "px";
      }),
      (r.setAppropriateProgressbarScale = function (e, t, i) {
        var s;
        (s = t / i / r._progressBarHolderWidth),
          this.iOSSafari
            ? (e.style.zoom = s)
            : (e.style.transform = "scale(" + s + " , " + s + ")");
      }),
      (r.iOSSafari = function (e) {
        return (
          /iP(ad|od|hone)/i.test(e) &&
          /WebKit/i.test(e) &&
          !/(CriOS|FxiOS|OPiOS|mercury)/i.test(e)
        );
      }),
      (r.setProgressBarInteriorWidth = function () {
        r._progressBarInteriorWidth =
          r._progressBarHolderWidth * r._progressBarHolderInnerWidthRatio;
      }),
      (r.setProgressBarHolderMarginTop = function (e, r) {
        e.top = r + "px";
      }),
      (r.positionPreloaderImage = function (e, r, t) {
        (e.style.width = r + "px"), (e.style.height = t + "px");
        var i = (window.innerHeight - t) / 2;
        e.style.marginTop = i + "px";
        var s = (window.innerWidth - r) / 2;
        e.style.marginLeft = s + "px";
      }),
      (r.resize = function () {
        var r,
          t,
          i,
          s = document.getElementById("preloaderDiv"),
          a = document.getElementById("progressBarHolder");
        window.innerHeight > window.innerWidth
          ? ((s.style.backgroundImage =
              "url(" +
              e.requireBaseUrl +
              "/assets/images/loader/loaderPortrait.jpg)"),
            (i = 1280 / 720) < window.innerHeight / window.innerWidth
              ? (!0, (r = (t = window.innerWidth) * i))
              : (!1, (t = (r = window.innerHeight) / i)),
            this.setAppropriateProgressbarScale(a, t, 2),
            this.positionPreloaderImage(s, t, r),
            this.setProgressBarInteriorWidth(),
            (a.style.marginLeft = "auto !important"),
            (a.style.marginRight = "auto !important"),
            (a.style.marginTop = "75%"),
            (a.style.marginLeft = "auto !important"),
            (a.style.marginRight = "auto !important"),
            (a.style.position = "relative"))
          : ((s.style.backgroundImage =
              "url(" +
              e.requireBaseUrl +
              "/assets/images/loader/loaderLandscape.jpg)"),
            (i = 1280 / 720) < window.innerWidth / window.innerHeight
              ? (t = (r = window.innerHeight) * i)
              : (r = (t = window.innerWidth) / i),
            this.setAppropriateProgressbarScale(a, t, 4),
            this.positionPreloaderImage(s, t, r),
            this.setProgressBarInteriorWidth(),
            (a.style.marginTop = "50%"),
            (a.style.marginLeft = "auto !important"),
            (a.style.marginRight = "auto !important"),
            (a.style.position = "relative"));
      }),
      (r.manifest = {}),
      (r._bytesTotal = 0),
      (r._bytesLoaded = 0),
      (r._simulatedProgress = 0),
      (r._actualProgress = 1),
      (r._progressBarHolderWidth = 324),
      (r._progressBarHolderHeight = 12),
      (r._progressBarInteriorWidth = 324),
      (r._progressBarInteriorHeight = 12),
      r
    );
  })();
  e.Preloader = r;
})(tk_astronaut || (tk_astronaut = {}));
