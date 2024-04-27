const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const productScheme = Schema({
    name:{
        type:String,
        required: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref:'categories'
    },
    code:{
        type: Number,
        required: true
    },
});
const products = model('product',productScheme);
module.exports = {
    products,
};