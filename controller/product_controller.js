const joi = require('joi');
const {categories} = require('../models/product');
const {validateCategory} = require('../helpers/helper_functions');
////////////// insert Your API ////////////

//const GetAllProducts = async (req, res) => {};

const GetProductByCode =(req,res)=>{
    const category=categories.find(c=>c.id===parseInt(req.params.id));
    if(!category){
        res.status(404).send('The Category with the given ID not found !');
    }else{
        res.send(category);
    }
};

//const AddProduct = async (req, res) => {};

//const EditProductByCode = async (req, res) => {};

//const DeleteProductByCode = async (req, res) => {};

module.exports = {
    //GetAllProducts,

    GetProductByCode,

    //AddProduct,

    //EditProductByCode,

    //DeleteProductByCode
};

