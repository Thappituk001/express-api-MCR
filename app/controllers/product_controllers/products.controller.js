
const model = require('../../models/product_models/products.model');

exports.allProduct = function(req,res,next){

	model.getAll(function (err,Result){ 
		console.log(Result);
		res.send(Result); 
	});

};

exports.oneProduct = function(req,res,next){

	model.getOne(function (err,Result){ 
		console.log(Result);
		res.send(Result); 
	});

};

exports.createProduct = function(req,res,next){

	model.create(function (err,Result){ 
		console.log(Result);
		res.send(Result); 
	});

};


exports.updateProduct = function(req,res,next){

	model.update(function (err,Result){ 
		console.log(Result);
		res.send(Result); 
	});

};

exports.deleteProduct = function(req,res,next){

	model.delete(function (err,Result){ 
		console.log(Result);
		res.send(Result); 
	});

};





