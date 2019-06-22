// Adding all of the Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 3000;

// Middleware that enables express to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("app"));

// Requiring the routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Event Listener for the defined port
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
