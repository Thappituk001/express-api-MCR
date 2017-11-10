
module.exports = function(app){

	const product = require('../controllers/product_controllers/products.controller');
    // var model = require('../models/index.model');
	app.get('/product',product.allProduct);
	app.get('/product/:id',product.oneProduct);
	app.post('/product/create',product.createProduct);
	app.post('/product/update',product.updateProduct);
	app.post('/product/delete',product.deleteProduct);
};