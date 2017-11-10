
const mysql = require('../../../config/mysql');
const db = mysql();

exports.getDetail  = function(callback){
    
    db.query("SELECT * FROM customer_online",
        function (err, rows) {
            //here we return the results of the query
            callback(err, rows); 
        }
    );    
};


exports.create = function(callback){
    
    db.query("SELECT * FROM customer_online",
        function (err, rows) {
            //here we return the results of the query
            callback(err, rows); 
        }
    );    
};

exports.update = function(callback){
    
    db.query("SELECT * FROM customer_online",
        function (err, rows) {
            //here we return the results of the query
            callback(err, rows); 
        }
    );    
};

exports.delete = function(callback){
    
    db.query("SELECT * FROM customer_online",
        function (err, rows) {
            //here we return the results of the query
            callback(err, rows); 
        }
    );    
};












