var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");

// var app = express();



// // Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
module.exports = function(app){
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "/../public/home.html"));
});

app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

app.use('/static', express.static(path.join(__dirname, 'public')))

//static routing for express

// app.get("/css", function(req, res){
// 	res.sendFile(path.join(__dirname, "/../public/css"));
// });

// app.get("/js", function(req, res){
// 	res.sendFile(path.join(__dirname, "/../public/js"));
// });


app.use(function(req, res){
       res.sendFile("/../public/home.html");
   });
};



