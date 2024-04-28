const {products} = require('../models/product');

const getAllProducts = async (req,res) => {
    try{
        const allproducts = await products.find({});
        res.status(200).send(allproducts);
    }catch(error){
        res.status(400).send(error);
    }
};

const getAllProductsByCategoryId =async (req,res)=>{
    try{
        const allproducts = await products.find({categoryId: req.params.id});
        res.status(200).send(allproducts);
    }catch(error){
        res.status(400).send(error);
    }
};

const getproductByCode= async (req,res)=>{
    try{
        const product = await products.find({code: req.params.code});
        res.status(200).send(product);
    }catch(error){
        res.status(400).send(error);
    }
};

module.exports={
    getAllProducts,
    getAllProductsByCategoryId,
    getproductByCode,
    /*getproductByCode,
    addproduct,
    editproduct,
    deleteproduct*/
};