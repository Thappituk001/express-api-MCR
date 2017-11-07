var express = require('express');
var config = require('./config');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var session = require('express-session');
module.exports = function()
{
	var app = express();


	if(process.env.NODE_ENV === 'development')
	{
		app.use(morgan('dev'));
	}
	else
	{
		app.use(compression);
	}

	app.use(bodyParser.urlencoded({
		extended:true
	}));

	app.use(bodyParser.json());

	app.use(session({
		// secrect:config.sessionSecret,
		secret:'sIFE85kfdateJLIW41',
		resave:false,
		saveUninitialized:true
	}));




	require('../app/routes/index.route')(app);
	return app;
};