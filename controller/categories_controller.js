const joi = require('joi');
const {categories} = require('../models/categories');
const {validateCategory} = require('../helpers/helper_functions');
////////////// insert Your API ////////////

const GetAllProducts = async (req, res) => {
    try{
        const allCatigories = await categories.find({});
        res.status(200).send(allCatigories);
    }catch(error){
        res.status(400).send(error);
    }
};

const GetProductByCode =async (req,res)=>{
    try{
        const category = await categories.findOne({code: req.params.code});
        res.status(200).send(category);
    }catch(error){
        res.status(400).send(error);
    }
};

//const AddProduct = async (req, res) => {};
const AddProduct = async (req,res)=>{
    try{
        const category = await categories.create(req.body);
        res.status(200).send(category);
    }catch(error){
        res.status(400).send(error);
    }
    
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
const DeleteProductByCode = async (req, res) => {

    try {
        const category= await categories.deleteOne({code:req.params.code});
        res.status(200).send(category);
        await category.save();
    } catch (error) {
        
        res.status(400).send(error);
    }

};
module.exports = {
    GetAllProducts,

    GetProductByCode,

    AddProduct,
    
    EditProductByCode,

    DeleteProductByCode
};

