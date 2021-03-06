// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 5000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



//Manage MySQL Connection
//=========================================================



require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// apiRoutes();
// htmlRoutes();



















// Starts the server to begin listening
// =============================================================
app.listen(process.env.PORT || PORT, function() {
  console.log("App listening on PORT " + PORT);
});
