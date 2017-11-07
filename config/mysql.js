var config = require('./config');
// // {host     : 'localhost',user     : 'root',password : '',database : 'warrix_erp'}
var mysql = require('mysql');

module.exports  = function(){
	
	var db = mysql.createConnection(config);//more config in ../env/development.js

	return db;
}