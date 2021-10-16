var socket = io();
var allLeftEle = document.querySelectorAll(".icon-head");
allLeftEle.forEach((e) => {
  e.onclick = (event) => {
    for (var i of allLeftEle) {
      i.classList.remove("active");
      var l = i.children[0].classList;
      if (l[1].endsWith("-active")) {
        l.add(l[1].substr(0, l[1].indexOf("-active")));
        l.remove(l[1]);
      }
    }
    var l = e.children[0].classList;
    l.add(l[1] + "-active");
    l.remove(l[1]);
    e.classList.add("active");
    window.history.pushState({}, "name", "/game" + e.getAttribute("route"));
    changeGame(e.getAttribute("route"));
  };
});

function changeGame(game) {
  document.querySelector(".game-section").innerHTML = `
  <div id='loading' style="width:100%;height:500px;display:flex;justify-content:center;align-items:center;">
  <div class="loader">
              <svg
                viewBox="0 0 120 120"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle class="load one" cx="60" cy="60" r="40"></circle>
                <circle class="load two" cx="60" cy="60" r="40"></circle>
                <circle class="load three" cx="60" cy="60" r="40"></circle>
                <g>
                  <circle class="point one" cx="45" cy="70" r="5"></circle>
                  <circle class="point two" cx="60" cy="70" r="5"></circle>
                  <circle class="point three" cx="75" cy="70" r="5"></circle>
                </g>
              </svg>
            </div></div>`;

  if (game == "/" || game == "") {
    window.history.pushState({}, "name", "/game/dimondsSelect");
    game = "/dimondsSelect";
  }
  $(".game-section").load("/getgame" + game);
}

// var fire1, fire2;
// fire1 = document.getElementById("fire-1").getAttribute("transform");
// fire2 = document.getElementById("fire-2").getAttribute("transform");

// document.getElementById("fire-1").setAttribute("transform", "");
// document.getElementById("fire-2").setAttribute("transform", "");

var r = document.querySelector(":root");

// document.querySelector(".range-style").addEventListener("change", () => {
//   console.log(document.querySelector(".range-style").value);
// });

const login = () => {
  if (logedIn) {
    document.querySelector(".card").innerHTML = `
    <h3>Hi, ${uname}</h3>
    <br/>
    <p>You have $${balance} balance </p><br/><a style='cursor:pointer;color:#ee2;'>Depost Now</a>
    `;
  }
  r.style.setProperty("--bg-blur", "10px");
  document.querySelector(".modal").style.display = "flex";
  document.querySelector(".modal").classList.remove("fade-out");
  document.querySelector(".modal").classList.add("fade-in");
  document.getElementsByTagName("body")[0].classList.add("body-blur");
};
document.getElementsByTagName("body")[0].classList.add("blur-out");
$(".modal").click(function (event) {
  if (
    !$(event.target).closest(".card").length &&
    !$(event.target).is(".card")
  ) {
    document.getElementsByTagName("body")[0].classList.add("blur-out");
    document.querySelector(".modal").classList.remove("fade-in");
    document.querySelector(".modal").classList.add("fade-out");
    setTimeout(() => {
      document.getElementsByTagName("body")[0].classList.remove("body-blur");
      document.querySelector(".modal").style.display = "none";
    }, 450);
    r.style.setProperty("--bg-blur", "0px");
  }
});

function getFullNum(num) {
  a = Number(num).toFixed(2);
  return (
    (String(a).split(".")[0].length == 1
      ? "0" + String(a).split(".")[0]
      : String(a).split(".")[0]) +
    "." +
    (String(a).split(".")[1].length == 1
      ? String(a).split(".")[1] + "0"
      : String(a).split(".")[1])
  );
}

function userAuthLogin() {
  socket.emit("login", { uname: document.getElementById("uname").value });
}
var logedIn = false;
var uname = undefined;
var balance = 0;
socket.on("logged-in", (data) => {
  document.getElementById("balance").innerHTML = "$" + data.balance;
  logedIn = true;
  uname = data.uname;
  balance = data.balance;
});

socket.on("balance", (data) => {
  document.getElementById("balance").innerHTML = "$" + data;
  balance = data;
});
socket.on("auth", (data) => {
  window.location =
    "/login/" +
    data.action +
    "/" +
    window.location.href.substr(1 + window.location.href.lastIndexOf("/"));
});

function resetSocket() {
  var keys = Object.keys(socket._callbacks);
  for (var i of keys) {
    if (i != "$logged-in" && i != "$auth" && i != "$balance") {
      delete socket._callbacks[i];
    }
  }
}

function result(win, profit, bid) {
  if (win)
    document.querySelector(".card").innerHTML = `
    <h3>Congratulation</h3>
    <br/>
    <p style='margin:10px'>You won <span style='color:#ee2;'>$${profit}</span> with only $${bid}</p>
    `;
  else
    document.querySelector(".card").innerHTML = `
    <h3>Opps ! ! !</h3>
    <br/>
    <p style='margin:10px'>You were close to win !  </p></br>
    `;

  r.style.setProperty("--bg-blur", "10px");
  document.querySelector(".modal").style.display = "flex";
  document.querySelector(".modal").classList.remove("fade-out");
  document.querySelector(".modal").classList.add("fade-in");
  document.getElementsByTagName("body")[0].classList.add("body-blur");
}

var p = "";
