
var mysql = require('../../config/mysql');
var db = mysql();

exports.getIndex = function(callback){
	
	db.query("SELECT * FROM customer_online",
            function (err, rows) {
                //here we return the results of the query
                callback(err, rows); 
            }
        );    
};//getIndex function();


exports.test = function(callback){
	
	db.query("SELECT * FROM customer_online",
            function (err, rows) {
                //here we return the results of the query
                callback(err, rows); 
            }
        );    
};//getIndex function();












