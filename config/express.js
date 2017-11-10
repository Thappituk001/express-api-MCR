const express = require('express');
const config = require('./config');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const jwt    = require('jsonwebtoken');

module.exports = function()
{
	const app = express();

	if(process.env.NODE_ENV === 'development')
	{
		app.use(morgan('dev'));//show time for processed
	}
	else
	{
		app.use(compression);
	}

	//midleware
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

	app.use(flash());

	//routes
	require('../app/routes/index.route')(app);
	require('../app/routes/users.route')(app);
	require('../app/routes/products.route')(app);
	require('../app/routes/carts.route')(app);
	
	return app;
};