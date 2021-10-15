const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index (2).html"));
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

app.listen(80, "localhost", () => {
  console.log("runned");
});
