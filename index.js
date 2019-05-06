console.log ("hello node")
// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//    res.send("Hello world");
// });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });



//sxalner kan
var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.redirect('http://google.com');
});
app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.send("<h1>Hello " + name +"</h1>");
});
app.get("/search/:name", function(req, res){
    var search = req.params.name;
    res.redirect('google.com/search?q='+search);
 });
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});

