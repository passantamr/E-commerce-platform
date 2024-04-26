const { Router } = require('express');
const categoryRouter = Router();
const category_controller= require('../controller/categories_controller');

//for simplisty assume link is /
categoryRouter.get('/', category_controller.GetAllProducts);
categoryRouter.get('/:code', category_controller.GetProductByCode);
categoryRouter.put('/:id',category_controller. EditProductByCode);
categoryRouter.delete('/:id',category_controller.DeleteProductByCode);
categoryRouter.post('/',category_controller.AddProduct);
module.exports = {

    categoryRouter,
};
