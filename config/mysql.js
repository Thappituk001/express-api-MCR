// const config = require('./config');

const mysql = require('mysql');

module.exports  = function(){
	
	const db = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'warrix_erp'
	});

	return db;
};