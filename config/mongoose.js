const config = require('./config');
const mongoose = require('mongoose');


module.exports  = function(){
	const db = mongoose.connect(config.mongoUri);
	return db;
}