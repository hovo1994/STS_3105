var express = require("express");
var app     = express();
var path    = require("path");
var port    = 8080;

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/cases',function(req,res){
  res.sendFile(path.join(__dirname+'/public/caseStudies.html'));
});

app.get('/interview',function(req,res){
  res.sendFile(path.join(__dirname+'/public/interview.html'));
});

app.get('/analysis',function(req,res){
  res.sendFile(path.join(__dirname+'/public/analysis.html'));
});
app.get('/game',function(req,res){
  res.sendFile(path.join(__dirname+'/public/game.html'));
});
app.listen(port);

console.log("Running at Port " + port);