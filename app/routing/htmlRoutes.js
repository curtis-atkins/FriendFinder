const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.listen(PORT, function() {

 console.log("App listening on PORT " + PORT);

});

var friends = [];

app.get("/api/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/survey.html"));
});

app.post("/api/friends", function(req, res) {
  var newFriends = req.body;
    console.log(newFriends);
});