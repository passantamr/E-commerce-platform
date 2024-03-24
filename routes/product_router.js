const { Router } = require('express');
const productRouter = Router();
const product_controller= require('../controller/product_controller');

//for simplisty assume link is /
productRouter.get('/:id', product_controller.GetProductByCode);
//productRouter.post('Link',productController.APIName);
//productRouter.put('Link',productController.APIName);
//productRouter.delete('Link',productController.APIName);

module.exports = {
    productRouter,
};