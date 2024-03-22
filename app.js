const express = require("express");
//const Joi = require('joi');
const app = express();
app.use(express.json());

const {productRouter} = require('./routes/product_router');
//localhost:3000/products
app.use('/products/',productRouter);
module.exports = { app, };