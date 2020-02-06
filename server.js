var express = require("express");
var path = require("path");

var app = express();
var port = process.env.port || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("./public"));


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(port, function(){
    console.log("Your App is listening on PORT:" + port);
});