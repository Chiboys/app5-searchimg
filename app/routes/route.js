module.exports = function(db,app){
	var deal_Obj =   require(process.cwd()+"/app/controllers/deal.js");
	var deal = new deal_Obj(db);
	app.get("/get/latest/imagesearch",deal.latestQuery);
	app.get("/query/:q/:d",deal.query);	
}