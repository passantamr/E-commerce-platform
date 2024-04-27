const {products} = require('../models/product');

const getAllProducts = async (req,res) => {
    try{
        const allproducts = await products.find({});
        res.status(200).send(allproducts);
    }catch(error){
        res.status(400).send(error);
    }
};













module.exports={
    getAllProducts,
    /*getAllProductsByCategoryId,
    getproductByCode,
    addproduct,
    editproduct,
    deleteproduct*/
};