module.exports = function(db,app){
	var deal_Obj =   require(process.cwd()+"/app/controllers/deal.js");
	var deal = new deal_Obj(db);
	app.get("/api/latest/imagesearch",deal.latestQuery);
	app.get("/api/:q/:d",deal.query);
}