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
const EditProductByCode = async (req,res)=>{
    try{
        const category = await categories.findOne({code: req.params.code});
        if(!category){
            return res.status(404).send('category not found');
        }
        if(req.body.name){
            category.name = req.body.name;
        }
        if(req.body.code){
            category.code = req.body.code;
        }
        await category.save();
        res.status(200).send(category);
    }catch(error){
        res.status(400).send(error);
    }
    
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

