const { Router } = require('express');
const productRouter = Router();
const product_controller= require('../controller/product_controller');

//for simplisty assume link is /;
productRouter.get('/', product_controller.getAllProducts);
productRouter.get('/:code', product_controller.getproductByCode);
productRouter.get('/:id', product_controller.getAllProductsByCategoryId);
productRouter.delete('/:code/:categoryId',product_controller.deleteproduct);
productRouter.put('/:code/:categoryId',product_controller.editproduct);
productRouter.post('/',product_controller.addproduct);
module.exports = {
    productRouter,
};

