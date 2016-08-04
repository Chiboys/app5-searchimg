module.exports = function(db){
	var collect = db.collection("latestQuery");
	var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	this.query = function(req,res){
		var query = req.params.q;
		var page = parseInt(req.query.offset) - 1;//返回什么，我需要考虑为空或者其他的情况吗
		var start = page * 10
		https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures
		var url = "https://www.googleapis.com/customsearch/v1?"+
				"key="+process.env.gkey+
				"&cx=008242466204929014890:z4ee1niuwii"+	
//				"&start = "+ start +
//				"&num="+10+
				"&q="+query;
		//console.log(url);
		var origUrl = req.get("host")+req.originalUrl;
		collect.insert({url:origUrl},function(err){
			if(err) {throw err};
		});
		var xmlhttp = new XMLHttpRequest();
		//if(xmlhttp.status !== 200){
			res.end(JSON.stringify(xmlhttp));			
		//}else{
		//	res.end("NO result Or something .\nstatus:"+xmlhttp.status);
		//}

		xmlhttp.open("GET",url,true);
		xmlhttp.send();
	}
	this.latestQuery = function(req,res){
		collect.find({}).toArray(function(err,docs){
			if(err){throw err;}
			var length = docs.length;
			res.send(docs.slice(length - 20,length -1));
		});
	}

}