

async function login(uname, req, res) {
  var check = await cursor(`select * from users where uname = '${uname}';`);
  var balance = 0;
  if (!check.length) {
    await cursor(`insert into users values('${uname}',1000)`);
    balance = 1000;
  } else {
    balance = check[0].balance;
  }
  req.session.uid = String(uname);
  res.end(JSON.stringify({ balance: balance }));
}

var cursor = undefined;

function setCursor(c) {
  cursor = c;
}

module.exports.login = login;
module.exports.setCursor = setCursor;