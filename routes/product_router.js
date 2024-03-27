const { Router } = require('express');
const productRouter = Router();
const product_controller= require('../controller/product_controller');

//for simplisty assume link is /
productRouter.get('/', product_controller.GetAllProducts);
productRouter.get('/:id', product_controller.GetProductByCode);
productRouter.put('/:id',product_controller. EditProductByCode);
productRouter.delete('/:id',product_controller.DeleteProductByCode);
productRouter.post('/',product_controller.AddProduct);
module.exports = {

    productRouter,
};
