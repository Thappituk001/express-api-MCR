
const model = require('../../models/cart_models/carts_model');

exports.cartDetail = function(req,res,next){

	model.getDetail(function (err,Result){ 
		console.log(Result);
		res.send(Result); 
	});

};


exports.createCart = function(req,res,next){

	model.create(function (err,Result){ 
		console.log(Result);
		res.send(Result); 
	});

};


exports.updateCart = function(req,res,next){

	model.update(function (err,Result){ 
		console.log(Result);
		res.send(Result); 
	});

};

exports.deleteProductInCart = function(req,res,next){

	model.delete(function (err,Result){ 
		console.log(Result);
		res.send(Result); 
	});

};





