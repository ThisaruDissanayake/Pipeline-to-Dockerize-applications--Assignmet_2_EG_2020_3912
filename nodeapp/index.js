var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send('{ "response":"Hello Welcome to Devops Assingment EG/2020/3912" }');
});

app.get("/will", function (req, res) {
  res.send('{ "response":"Hello Welcome to Devops 3912" }');
});
app.get("/ready", function (req, res) {
  res.send('{ "response":"EG/2020/3912 Wow!, It works!" }');
});

//listen to port 3000 by default
app.listen(process.env.PORT || 3000, function () {
  console.log("App listening on port 3000!");
});

module.exports = app;
