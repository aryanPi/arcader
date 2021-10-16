const sky = document.querySelector(".sky");
var d = "-100vh";
var thresold = 0.1;
setInterval(() => {
  if (Number(d.substr(0, d.length - 2) + 1) > -2) d = "-100vh";
  else d = Number(d.substr(0, d.length - 2)) + thresold + "vh";
  sky.style.transform = `translateY(${d})`;
}, 5);

resetSocket();
document.querySelectorAll(".sky-bg")[0].classList.add("animate-bg");
document.querySelectorAll(".sky-bg")[1].classList.add("animate-bg");
var isStart = false;

function background(speed) {
  var speedInterval = setInterval(() => {
    if (speed == 1)
      if (thresold < 1) thresold += 0.1;
      else clearInterval(speedInterval);
    else {
      if (thresold > 0.2) thresold -= 0.1;
      else clearInterval(speedInterval);
    }
  }, 100);
}

background(0);

function start() {
  background(1);
  isStart = true;
  var rocket = document.getElementById("Rocket");
  var multi = document.querySelector(".multiplier");
  var payout = document.querySelector(".payout-2");
  multi.classList.remove("fade-out");
  payout.classList.remove("fade-out");
  rocket.parentElement.classList.add("animate-rocket-up-1");
  r.style.setProperty("--animate-t", "200ms");
  multi.classList.add("fade-in");
  payout.classList.add("fade-in");
  setTimeout(() => {
    multi.classList.remove("fade-in");
    payout.classList.remove("fade-in");
    multi.classList.add("shake-constant");
    payout.classList.add("shake-constant");
    rocket.classList.add("shake-constant");
  }, 1200);
  //

  multi.style.display = "flex";
  payout.style.display = "flex";
}

function stop() {
  background(0);
  isStart = false;
  var rocket = document.getElementById("Rocket");
  var payout = document.querySelector(".payout-2");
  var multi = document.querySelector(".multiplier");

  multi.classList.remove("shake-constant");
  payout.classList.remove("shake-constant");
  rocket.classList.remove("shake-constant");
  rocket.parentElement.classList.add("animate-rocket-up-2");
  setTimeout(() => {
    rocket.parentElement.style.display = "none";
    rocket.parentElement.classList.remove("animate-rocket-up-1");

    setTimeout(() => {
      setTimeout(() => {
        rocket.parentElement.classList.remove("animate-rocket-up-2");
        rocket.parentElement.style.display = "flex";
        rocket.parentElement.classList.add("fade-in");
        setTimeout(() => {
          rocket.parentElement.classList.remove("fade-in");
          document.getElementById("play-btn").innerHTML = "Play";
          document.getElementById("play-btn").setAttribute("onclick", "PLAY()");
        }, 250);
      }, 350);
    }, 2000);
  }, 1000);
}

function cashout() {
  socket.emit("user-call", { call: "cashout" });
}
var currentBid = 0;
function PLAY() {
  if (!logedIn) {
    login();
    return;
  }
  var bidAmt = document.getElementById("bid-amt");
  if (bidAmt.value == "" || !bidAmt.value) {
    bidAmt.classList.add("inp-error");
  } else {
    bidAmt.classList.remove("inp-error");
    socket.emit("user-call", {
      call: "bid",
      game: "crash",
      bid: bidAmt.value,
      auto: document.getElementById("auto-cashout").value,
    });

    myAuto = Number(document.getElementById("auto-cashout").value);
    currentBid = Number(bidAmt.value);
  }
}

var inGroup = false;
var myAuto = undefined;
var isIn = false;

socket.on("timer", (data) => {
  if (!isStart) start();
  if (document.querySelector(".multiplier").style.display == "none") {
    document.querySelector(".multiplier").style.display = "flex";
    document.querySelector(".payout-2").style.display = "flex";
  }
  document.querySelector(".multiplier").innerHTML =
    getFullNum(data / 1000) + "x";
  if (currentBid != 0 && currentBid != undefined) {
    if (isIn)
      if (isIn) {
        document.getElementById("play-btn").innerHTML =
          "Cashout $" + getFullNum((data / 1000) * currentBid);
        if (data / 1000 > myAuto) {
          socket.emit("user-call", { call: "check-auto" });
        }
      }
  }
});

socket.on("game-call", (data) => {
  if (data.call == "reset") {
    stop();
    isIn = false;
    data.multi = getFullNum(data.multi);
    for (var i of data.userData) {
      if (document.getElementById(i.uname) != undefined) {
        document.getElementById(i.uname).children[1].innerHTML = `$${
          i.won
        } (x${i.multi.toFixed(2)})`;
      }
    }
    setTimeout(() => {
      document.querySelector(".payout-2").classList.add("fade-out");
      document.querySelector(".multiplier").classList.add("fade-out");
      setTimeout(() => {
        document.querySelector(".payout-2").style.display = "none";
        document.querySelector(".multiplier").style.display = "none";
      }, 500);
    }, 2000);
    document.querySelector(".multiplier").innerHTML = data.multi + "x";
    document.getElementById("play-btn").parentElement.classList.add("disable");

    setTimeout(() => {
      document.querySelectorAll(".simplebar-content")[2].innerHTML = "";

      document.querySelector(".payout-2").style.display = "";
      document.querySelector(".multiplier").style.display = "";
      document.querySelector(".payout-2").classList.add("fade-in");
      document.querySelector(".multiplier").classList.add("fade-in");
      setTimeout(() => {
        document.querySelector(".payout-2").classList.remove("fade-in");
        document.querySelector(".multiplier").classList.remove("fade-in");
      }, 200);

      document
        .getElementById("play-btn")
        .parentElement.classList.remove("disable");

      var timerFun = (time) => {
        if (time > 0 && !isStart) {
          time -= 100;
          document.querySelector(".multiplier").innerHTML = getFullNum(
            (time / 1000).toFixed(2)
          );
          if (time < 500) {
            document
              .getElementById("Rocket")
              .parentElement.classList.add("animate-rocket-up-1");
          }
          setTimeout(timerFun, 100, time);
        } else {
          document.querySelector(".payout-2").classList.add("fade-out");
          document.querySelector(".multiplier").classList.add("fade-out");
          setTimeout(() => {
            document.querySelector(".payout-2").classList.remove("fade-out");
            document.querySelector(".multiplier").classList.remove("fade-out");
            if (!isStart) {
              document.querySelector(".payout-2").style.display = "none";
              document.querySelector(".multiplier").style.display = "none";
            }
          }, 250);
          document.querySelector(".payout-2").innerHTML = "current payout";
        }
      };
      var t = 10 * 1000;
      setTimeout(timerFun, 100, t);
      document.querySelector(".payout-2").innerHTML = "Next launch in ...";
    }, 5 * 1000);
  } else if (data.call == "start") {
    if (isIn)
      document
        .getElementById("play-btn")
        .parentElement.classList.remove("disable");
    else
      document
        .getElementById("play-btn")
        .parentElement.classList.add("disable");
    start();
  } else if (data.call == "stop") {
    isIn = false;
    document.querySelector(".multiplier").innerHTML = data.multi + "x";
  }
});

var r = document.querySelector(":root");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
gameBody = document.getElementsByClassName("game-body")[0];
count = 150;
i = 0;

r.style.setProperty("--star-opac", `0`);

function peopleOut(id, amt) {
  let x = getRandomInt(50, gameBody.clientWidth - 50);
  let y = getRandomInt(10, 20);
  var span = document.createElement("span");
  span.style.left = x + "px";
  span.style.top = y + "vh";
  span.id = id;
  span.classList.add("peopleOut");
  span.innerHTML = "x" + amt;
  gameBody.appendChild(span);
  setTimeout(deleteNow, 5000, id);
}

function deleteNow(id) {
  document.getElementById(id).remove();
}

socket.on("user-call", (data) => {
  console.log(data, "user call");
  if (data.call == "new") {
    console.log("new user");
    if (data.uname == uname) {
      document.getElementById("play-btn").innerHTML = "Cashout";
      document.getElementById("play-btn").setAttribute("onclick", "cashout()");
      isIn = true;
    }
    var div = document.createElement("div");

    div.className = "chat-widget-message";
    div.innerHTML = `
    
          <div class="user-status">
            <div class="user-status-avatar">
              <div class="user-avatar small no-outline online">
                <div class="user-avatar-content">
                  <div class="hexagon-image-30-32" data-src="img/avatar/12.jpg" style="width: 30px; height: 32px; position: relative;"><canvas width="30" height="32" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                </div>
                <div class="user-avatar-progress" >
                  <div id='${
                    data.uname
                  }-progress' hidden class="hexagon-progress-40-44" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                </div>
                <div class="user-avatar-progress-border">
                  <div class="hexagon-border-40-44" style="width: 40px; height: 44px; position: relative;"><canvas width="40" height="44" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                </div>
                <div class="user-avatar-badge">
                  <div class="user-avatar-badge-border">
                    <div class="hexagon-22-24" style="width: 22px; height: 24px; position: relative;"><canvas width="22" height="24" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                  </div>
          
                  <div class="user-avatar-badge-content">
                    <div class="hexagon-dark-16-18" style="width: 16px; height: 18px; position: relative;"><canvas width="16" height="18" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                  </div>
                  <p class="user-avatar-badge-text">${
                    document.querySelectorAll(".simplebar-content")[2].children
                      .length + 1
                  }</p>
                </div>
              </div>
            </div>
            <p class="user-status-title">
              <span class="bold">${data.uname}</span>
            </p>
            <p class="user-status-text small" id=''>
              Bid of $${data.bid} 
            </p>
            <p class="user-status-timestamp floaty" id='${data.uname}-res' ></p>
          </div>
        `;
    document.querySelectorAll(".simplebar-content")[2].appendChild(div);
    plugins();
  } else if ((data.call = "user-cashout")) {
    if (data.uname == uname) {
      document
        .getElementById("play-btn")
        .parentElement.classList.add("disable");
      isIn = false;
    }
    //peopleOut(data.uname, data.cashout);
    document.getElementById(data.uname + "-res").innerHTML =
      "$" + data.cashout.toFixed(2);
    document.getElementById(`${data.uname}-progress`).hidden = false;
    document.getElementById(
      data.uname + "-res"
    ).previousElementSibling.innerHTML += ` Cashout on : <span style='color:greenyellow'>x${data.multi}</span>`;
  }
});
function plugins() {
  app.plugins.createHexagon({
    container: ".hexagon-border-40-44",
    width: 40,
    height: 44,
    lineWidth: 3,
    roundedCorners: true,
    roundedCornerRadius: 1,
    lineColor: "#293249",
  });
  app.plugins.createHexagon({
    container: ".hexagon-image-30-32",
    width: 30,
    height: 32,
    roundedCorners: true,
    roundedCornerRadius: 1,
    clip: true,
  });

  app.plugins.createHexagon({
    container: ".hexagon-progress-40-44",
    width: 40,
    height: 44,
    lineWidth: 3,
    roundedCorners: true,
    roundedCornerRadius: 1,
    gradient: {
      colors: ["#d9ff65", "#40d04f"],
    },
    scale: {
      start: 0,
      end: 1,
      stop: 0.8,
    },
  });
  app.plugins.createHexagon({
    container: ".hexagon-dark-16-18",
    width: 16,
    height: 18,
    roundedCorners: true,
    roundedCornerRadius: 1,
    lineColor: "#7750f8",
    fill: true,
  });
}

socket.on("trace", (data) => {
  console.log(data);
});

socket.emit("enter-into", { game: "crash" });

try {
  if (
    !document.querySelector("[route='/rocket2']").classList.contains("active")
  ) {
    document.querySelector("[route='/rocket2']").classList.add("active");
    document
      .querySelector("[route='/rocket2']")
      .children[0].classList.remove("icon-target-toss");
    document
      .querySelector("[route='/rocket2']")
      .children[0].classList.add("icon-target-active");
  }
} catch (err) {}

function PLAY() {
  if (
    !document
      .getElementById("play-btn")
      .parentElement.classList.contains("disable")
  )
    if (logedIn) {
      var bidAmt = document.getElementById("bid-amt");
      if (bidAmt.value == "" || !bidAmt.value) {
        bidAmt.classList.add("inp-error");
      } else {
        bidAmt.classList.remove("inp-error");
        socket.emit("user-call", {
          call: "bid",
          bid: bidAmt.value,
          auto: document.getElementById("auto-cashout").value,
        });
      }
    } else {
      login();
    }
}
document.getElementById("enter-btn").setAttribute("onclick", "PLAY()");

function LOADED() {
  document.querySelectorAll(".simplebar-content")[2].innerHTML = "";
}
