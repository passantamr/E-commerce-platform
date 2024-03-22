const { Router } = require('express');
const productRouter = Router();
const productController = require('../controller/product_controller');

//for simplisty assume link is /
//productRouter.get('link',productController.APIName);
//productRouter.post('Link',productController.APIName);
//productRouter.put('Link',productController.APIName);
//productRouter.delete('Link',productController.APIName);

module.exports = {
    productRouter
};