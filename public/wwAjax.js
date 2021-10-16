var messageHandler = function (s) {
    "POST" === s.data.type
      ? post(
          s.data,
          function (s) {
            postMessage(s);
          },
          function (s) {
            postMessage(s);
          }
        )
      : "GET" === s.data.type
      ? get(
          s.data,
          function (s) {
            postMessage(s);
          },
          function (s) {
            postMessage(s);
          }
        )
      : postMessage(0);
  },
  post = function (s, t, e) {
    const temp = () => {
      //console.log(s.data);
      try {
        var n = new XMLHttpRequest(),
          a = s.url;
        s = s.data;
        n.open("POST", a, !0),
          n.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded; charset=UTF-8"
          ),
          n.addEventListener
            ? n.addEventListener("loadend", function () {
              200 == n.status
                ? t({ status: n.status, response: n.responseText })
                : e({ status: n.status, response: n.responseText });
              var response = JSON.parse(n.responseText);
              if(response.serviceresponses[0].requesttype=='gs.newgameround'){
                if (response.serviceresponses[0].updatedaccounts[0].balance!=undefined)
                  delete new BroadcastChannel("parent").postMessage(
                    JSON.stringify({
                      type: "balance",
                      data: response.serviceresponses[0].updatedaccounts[0]
                        .balance,
                    })
                  );
              }
            })
            : (n.onloadend = function () {
                200 == n.status
                  ? t({ status: n.status, response: n.responseText })
                  : e({ status: n.status, response: n.responseText });
              }),
          n.send(s);
      } catch (s) {
        e(0);
      }
    };

    s.data = JSON.parse(s.data);
    if (s.data.servicerequests) {
      if (s.data.servicerequests[0].requesttype == "gs.newgameround") {
        const channel4Broadcast = new BroadcastChannel("bet");
        channel4Broadcast.onmessage = (event) => {
          var bet = Number(event.data);
          s.data.servicerequests[0].gamerequests[0].bets[0].value.amount = bet;
          s.data = JSON.stringify(s.data);
          temp();
        };
        channel4Broadcast.postMessage("get");
      } else {
        s.data = JSON.stringify(s.data);
        temp();
      }
    } else {
      s.data = JSON.stringify(s.data);
      temp();
    }
  },
  get = function (s, t, e) {
    try {
      var n = new XMLHttpRequest(),
        a = s.url;
      n.open("GET", a, !0),
        (n.onreadystatechange = function () {
          4 == n.readyState &&
            (200 == n.status
              ? t({ status: n.status, response: n.responseText })
              : e({ status: n.status, response: n.responseText }));
        }),
        n.send();
    } catch (s) {
      e(0);
    }
  };
onmessage = messageHandler;
