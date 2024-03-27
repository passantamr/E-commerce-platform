const joi = require('joi');
const {categories} = require('../models/product');
const {validateCategory} = require('../helpers/helper_functions');
////////////// insert Your API ////////////

const GetAllProducts = async (req, res) => {
    res.send(categories);
};

const GetProductByCode =(req,res)=>{
    const category=categories.find(c=>c.id===parseInt(req.params.id));
    if(!category){
        res.status(404).send('The Category with the given ID not found !');
    }else{
        res.send(category);
    }
};

//const AddProduct = async (req, res) => {};
const AddProduct =  (req,res)=>{
    const result =  validateCategory(req.body);     
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
    }     
        const category={
            id: (categories.length)+1,
            name: req.body.name
        };
        categories.push(category);
        res.send(category);    
};
    
    
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
const DeleteProductByCode = (req,res)=>{
    const category=categories.find(c=>c.id===parseInt(req.params.id));
    if(!category)
        res.status(404).send('The Category with the given ID not found !');
    const index = categories.indexOf(category);
    categories.splice(index, 1);

    res.send(category);
};
module.exports = {
    GetAllProducts,

    GetProductByCode,

    AddProduct,
    //EditProductByCode,

    DeleteProductByCode
};

