
module.exports = function(app){

	var index = require('../controllers/index.controller');
    // var model = require('../models/index.model');
	app.get('/',index.render);
	app.get('/test',index.test);
};