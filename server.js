
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// var mongoose = require('./config/mongoose');

var express = require('./config/express');


// var db = mongoose();

var app = express();

var port = process.env.PORT || 6969;


app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});






module.exports = app;