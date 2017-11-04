
var model = require('../models/index.model');

exports.render = function(req,res,next){

	model.getIndex(function (err,Result){ 
		console.log(Result);
		res.send(Result); 
	});

};


exports.test = function(req,res,next){

	model.test(function (err,Result){ 
		console.log(Result);
		res.send(Result); 
	});

};


