
var mysql = require('mysql')
var con = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'warrix_erp'
});

exports.getIndex = function(callback){
	
	con.query("SELECT * FROM customer_online",
            function (err, rows) {
                //here we return the results of the query
                callback(err, rows); 
            }
        );    
};//getIndex function();


exports.test = function(callback){
	
	con.query("SELECT * FROM customer_online",
            function (err, rows) {
                //here we return the results of the query
                callback(err, rows); 
            }
        );    
};//getIndex function();












