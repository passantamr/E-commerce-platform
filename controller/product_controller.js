const {products} = require('../models/product');
const {categories} = require('../models/categories');
const findcategory = async (categoryInput) => {
    const category = await categories.findOne({_id: categoryInput});
    return !!category; // Convert category to boolean (true if category exists, false otherwise)
};
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

const addproduct = async (req, res) => {
    try {
        if (req.body.categoryId) {
            if (!(await findcategory(req.body.categoryId))) {
                return res.status(404).send("This category is not found");
            } 
        }
        
        const product = await products.create(req.body);
        if (!product) {
            return res.status(400).send("Failed to create product");
        }
        
        res.status(200).send(product);
        
    } catch(error) {
        console.error("Error adding product:", error);
        res.status(400).send(error);
    }
};
module.exports={
    getAllProducts,
    getAllProductsByCategoryId,
    getproductByCode,
    addproduct
    /*getproductByCode,
    editproduct,
    deleteproduct*/
};