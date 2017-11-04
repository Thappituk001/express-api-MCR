
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var config = require('./config/config');
var app = express();

var port = process.env.PORT || 6969;

app.set('superSecret', config.secret); // secret variable


app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});









module.exports = app;