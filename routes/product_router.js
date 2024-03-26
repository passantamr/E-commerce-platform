const { Router } = require('express');
const productRouter = Router();
const product_controller= require('../controller/product_controller');

//for simplisty assume link is /
//productRouter.get('/', product_controller.GetAllProducts);
//productRouter.post('Link',productController.APIName);
productRouter.put('/:id',product_controller.EditProductByCode);
//productRouter.delete('Link',productController.APIName);

module.exports = {
    productRouter
};