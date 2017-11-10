
const model = require('../models/index.model');
const jwt    = require('jsonwebtoken');
const express = require('express');
const app = express();
exports.Index = function(req,res,next){
	model.getIndex(function (err,Result){ 
		console.log(Result);
		res.send(Result); 
	});
};

exports.checkIP = function(req,res,next){

	model.checkByIP(req.body,function (err,result){ 
		if (err) throw err;

		if(!result)
		{
			res.json({ success: false, message: 'Authentication failed. User not found.' });
		}
		else if(result)
		{
			const payload = {
				ip: req.body.ip 
			};

			var token = jwt.sign(payload, "sIFE85kfda555teJLIW41", { expiresIn: '7d' });
			console.log({'token':token});
			res.json({
				success: true,
				message: 'Enjoy your token!',
				token: token
			});
		}

	});
};




