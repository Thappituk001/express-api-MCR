

module.exports = function(app){

	const cart = require('../controllers/cart_controllers/carts_controller');
   
	app.get('/cart/:id',cart.cartDetail);
	app.post('/cart/create',cart.createCart);
	app.post('/cart/update',cart.updateCart);
	app.get('/cart/delete/:id',cart.deleteProductInCart);
};