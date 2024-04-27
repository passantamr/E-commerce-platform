const express = require("express");
const app = express();
app.use(express.json());

const {categoryRouter} = require('./routes/categories_router');
const {productRouter} = require('./routes/product_router');
app.use('/api/categories/',categoryRouter);
app.use('/api/product',productRouter);
module.exports = { app, };
//localhost:3000/products
