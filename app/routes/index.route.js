
module.exports = function(app){

	const index = require('../controllers/index.controller');
    //gen token by ip_address 

    
    app.route('/').get(index.Index).post(index.checkIP);
};