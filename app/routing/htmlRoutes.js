var modules = require("./server.js");

module.exports.path;
module.exports.PORT;
module.exports.express;
module.exports.app;


app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.text());
	app.use(bodyParser.json({ type: "application/vnd.api+json" }));

	app.listen(PORT, function() {

	 console.log("App listening on PORT " + PORT);

	});
}

/*const http = require("http");
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

});*/

var friends = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/survey.html"));
});
