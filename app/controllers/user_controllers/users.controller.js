
const model = require('../../models/user_models/users.model');
const passport = require('passport');

const  getErrorMessage  = function (err){
	var message = '';
	if(err.code)
	{

	}
	else
	{

	}
};

exports.allUser = function(req,res,next){

	model.getAllUsers(function (err,Result){ 
		console.log(Result);
		res.send(Result); 
	});

};

exports.oneUser = function(req,res,next){

	model.getUserById(req.params.id,function (err,Result){ 
		console.log(Result);
		console.log(err);
		res.send(Result); 
	});

};

exports.createUser = function(req,res,next){

	model.addUser(req.body,function (err,Result){ 
		console.log(Result);
		res.send(Result); 
	});

};

exports.updateUser = function(req,res,next){

	model.updateUser(req.params.id,function (err,Result){ 
		console.log(Result);
		res.send(Result); 
	});

};

exports.deleteUser = function(req,res,next){

	model.deleteUser(req.params.id,function (err,Result){ 
		console.log(Result);
		res.send(Result); 
	});

};


exports.singInUser = function(req,res,next){
	if(!req.user)
	{
		const user = new User(req.body);
		user.provider = 'local';
		model.saveUser(user,function(err){
			if(err)
			{
				const errorMessage = getErrorMessage(err);

				req.flash("error",errorMessage);

				res.redirect('/user/signup');
			}
			else
			{
				req.login(user,function(){
					
				});
			}
		});
	}
	else
	{
		res.redirect('/');
	}

	// model.logIn(req.body,function (err,Result){ 
	// 	console.log(Result);
	// 	res.send(Result); 
	// });
};


exports.singUpUser = function(req,res,next){

	model.register(req.body,function (err,Result){ 
		console.log(Result);
		res.send(Result); 
	});

};





