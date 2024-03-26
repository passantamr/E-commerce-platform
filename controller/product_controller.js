const joi = require('joi');
const {categories} = require('../models/product');
const {validateCategory} = require('../helpers/helper_functions');
////////////// insert Your API ////////////

//const GetAllProducts = async (req, res) => {};

//const GetProductByCode = async (req, res) => {};

//const AddProduct = async (req, res) => {};

//const EditProductByCode = async (req, res) => {};
const EditProductByCode = (req,res)=>{
    const category=categories.find(c=>c.id===parseInt(req.params.id));
    if(!category)
        res.status(404).send('The Category with the given ID not found !');
    

    const result = validateCategory(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
    }
    category.name=req.body.name;
    res.send(category);
    }; 
 

//const DeleteProductByCode = async (req, res) => {};

module.exports = {

    //GetProductByCode,

    //AddProduct,

    EditProductByCode,

    //DeleteProductByCode
};

