
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// var mongoose = require('./config/mongoose');

const express = require('./config/express');


// const db = mongoose();

const app = express();

const port = process.env.PORT || 6969;


app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});






module.exports = app;