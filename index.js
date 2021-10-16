const express = require("express");
const path = require("path");
const app = express();
const constants = require("./constants");
const Game = require("./game");
const functions = require("./functions");
const session = require("express-session");
const mysql = require("mysql");
const util = require("util");
const { config } = require("./config");

const sql = mysql.createConnection({
  host: config.databaseHost,
  port: config.databasePort,
  user: config.databaseUser,
  password: config.databasePassword,
  database: config.databaseDatabase,
});
const cursor = util.promisify(sql.query).bind(sql);


functions.setCursor(cursor)
Game.setCursor(cursor)

app.use(express.static(path.join(__dirname, "public")));

const MemoryStore = new session.MemoryStore();

app.use(
  session({
    store: MemoryStore,
    name: "sid",
    resave: false,
    saveUninitialized: false,
    secret: "secretCode!",

    cookie: {
      httpOnly: false,
      sameSite: true,
    },
  })
);

var data = [];
app.get("/arcader", (req, res) => {
  // if (req.rawHeaders.includes("iframe"))
    res.status(200).sendFile(path.join(__dirname, "main.html"));
  // else
  //  res.status(403).sendStatus(403);
});

app.get("/", (req, res) => {
  //req.session.uid = 'a'
  res.status(200).sendFile(path.join(__dirname, "public", "arcader.html"));
});

app.get("/assets/sounds/:a", (req, res) => {
  res.redirect(
    "https://d10seqx7f7ksi7.cloudfront.net/games/tk-astronaut/3.17.0/html/assets/sounds/" +
      req.params.a
  );
});

app.get("/assets/sounds/ogg/:a", (req, res) => {
  res.redirect(
    "https://d10seqx7f7ksi7.cloudfront.net/games/tk-astronaut/3.17.0/html/assets/sounds/ogg/" +
      req.params.a
  );
});

app.get("/assets/images/paytable/:a", (req, res) => {
  res.redirect(
    "https://d10seqx7f7ksi7.cloudfront.net/games/tk-astronaut/3.17.0/html/assets/images/paytable/" +
      req.params.a
  );
});

var d = undefined;
app.post("/gameserver", (request, res) => {
  var data = "";
  request.on("data", (chunk) => {
    data += chunk;
  });
  request.on("end", () => {
    switch (JSON.parse(data).servicerequests[0].requesttype) {
      case constants.OPERATOR.ALIVE:
        res.end(
          JSON.stringify({
            classname: "tk.ServerResponse",
            requestid: "3",
            serviceresponses: [
              {
                classname: "tk.gs.rs.KeepAliveResponse",
                requesttype: "gs.keepalive",
                serviceid: "gameservice",
              },
            ],
          })
        );
      case constants.OPERATOR.NEW:
        res.end(
          JSON.stringify({
            classname: "tk.ServerResponse",
            requestid: "0",
            serviceresponses: [
              {
                classname: "tk.gs.rs.GetFreeGameSessionResponse",
                requesttype: "gs.getfreesession",
                serviceid: "gameservice",
                playersessionid: "FPS-1634316807688240003",
                playerid: "FPI-1634316807688240001",
                freeplayaccount: {
                  classname: "tk.d.finance.Account",
                  id: "FPA-1634316807688240004",
                  type: "FREE",
                  balance: 3141,
                  currencyiso: "EUR",
                  locked: false,
                  priority: 0,
                },
                newsession: {
                  classname: "tk.d.session.NewGameSession",
                  gamesessionid: "FGS-1634316807688240002",
                  availableaccounts: ["FPA-1634316807688240004"],
                  gameid: "tk-astronaut",
                  requestid: "0JWETqsyq9WI18",
                },
                activesessions: [],
              },
            ],
          })
        );
        break;
      case constants.OPERATOR.CONFIG:
        Game.getConfig(res);
        break;
      case constants.OPERATOR.GAME:
        if (request.session.uid)
          Game.getGame(
            JSON.parse(data).servicerequests[0].gamerequests[0].bets[0].value
              .amount,
            res,
            request.session.uid
          );
    }
  });
});

app.post("/login", (req, res) => {
  if (req.session.uid != undefined) {
  functions.login(req.session.uid, req, res);
  } else {
    var data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      if (JSON.parse(data).uname!='') functions.login(JSON.parse(data).uname, req, res);
    });
  }
});

app.listen(config.serverPort, "localhost", () => {
  console.log("runned");
});
