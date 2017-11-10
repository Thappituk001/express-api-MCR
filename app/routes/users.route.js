
module.exports = function(app){

	const user = require('../controllers/user_controllers/users.controller');
    // var model = require('../models/index.model');
	app.route('/user').get(user.allUser);
	app.route('/user/:id').get(user.oneUser);
	app.route('/user/signin').post(user.singInUser);
	app.route('/user/signup').post(user.singUpUser);
	app.route('/user/create').post(user.createUser);
	app.route('/user/update').post(user.updateUser);
	app.route('/user/delete').post(user.deleteUser);
};