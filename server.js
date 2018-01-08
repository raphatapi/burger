var bodyParser = require("body-parser");
var express = require("express");
var methodOverride = require("method-override");

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.set("port", (process.env.PORT || 3000));

app.listen(app.get("port"), function(){
    console.log('The app is listening on port ' + app.get("port"));
  });