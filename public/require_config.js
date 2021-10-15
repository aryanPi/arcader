(window.tk_astronaut = window.tk_astronaut || {}),
  (tk_astronaut.requireBaseUrl = tk_astronaut.requireBaseUrl || "."),
  requirejs.config({
    baseUrl: "",
    waitSeconds: 0,
    paths: {
      jquery: [tk_astronaut.requireBaseUrl + "/libs/jquery/jquery-1.12.4"],
      easepack: [
        tk_astronaut.requireBaseUrl + "/libs/greensock/easing/EasePack.min",
      ],
      timelinemax: [
        tk_astronaut.requireBaseUrl + "/libs/greensock/TimelineMax",
      ],
      timelinelite: [
        tk_astronaut.requireBaseUrl + "/libs/greensock/TimelineLite",
      ],
      TweenLite: [tk_astronaut.requireBaseUrl + "/libs/greensock/TweenLite"],
      draggable: [
        tk_astronaut.requireBaseUrl + "/libs/greensock/utils/Draggable.min",
      ],
      throwprops: [
        tk_astronaut.requireBaseUrl +
          "/libs/greensock/plugins/ThrowPropsPlugin.min",
      ],
      tweenmax: [tk_astronaut.requireBaseUrl + "/libs/greensock/TweenMax"],
      perfectscrollbar: [
        tk_astronaut.requireBaseUrl + "/libs/jquery/perfect-scrollbar.jquery",
      ],
      textfill: [
        tk_astronaut.requireBaseUrl + "/libs/jquery/jquery.textfill.min",
      ],
      brim: [tk_astronaut.requireBaseUrl + "/libs/brim/brim"],
      scream: [tk_astronaut.requireBaseUrl + "/libs/scream/scream"],
      tappy: [tk_astronaut.requireBaseUrl + "/libs/jquery/tappy"],
      phaser: [tk_astronaut.requireBaseUrl + "/libs/phaser/phaser"],
      commons: [tk_astronaut.requireBaseUrl + "/commons"],
      game_gui_html: [tk_astronaut.requireBaseUrl + "/game_gui_html"],
      game: [tk_astronaut.requireBaseUrl + "/game"],
      preloader: [tk_astronaut.requireBaseUrl + "/preloader"],
    },
    shim: {
      tappy: { deps: ["jquery"] },
      perfectscrollbar: { deps: ["jquery"] },
      textfill: { deps: ["jquery"] },
      commons: { deps: ["jquery", "phaser"] },
      game_gui_html: { deps: ["commons"] },
      game: { deps: ["game_gui_html"] },
      preloader: {},
    },
  }),
  (tk_astronaut.loadDependencies = function (e, r) {
    if (!e) throw new Error("Embedded in div is not supported at the moment.");
    require(["preloader"], function () {
      tk_astronaut.Preloader.setup(),
        require(["jquery", "phaser"], function () {
          require([
            "tappy",
            "TweenLite",
            "tweenmax",
            "timelinemax",
            "draggable",
            "throwprops",
            "easepack",
            "brim",
            "scream",
            "perfectscrollbar",
            "textfill",
            "commons",
            "game_gui_html",
          ], function () {
            require(["game"], function () {
              r();
            });
          });
        });
    });
  });
