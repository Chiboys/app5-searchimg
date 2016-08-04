var express = require("express");
var app = express();
var client = require("mongodb").MongoClient;
var route = require("./app/routes/route.js");
client.connect(process.env.mongo_img || "mongodb://localhost:27017/shorten",function(err,db){
	if(err){throw err;}
	route(db,app);	
	
});
app.listen(process.env.PORT || 3000,function(){
	console.log("listen to port");
});