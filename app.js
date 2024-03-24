const express = require("express");
const app = express();
app.use(express.json());

const {productRouter} = require('./routes/product_router');
app.use('/api/categories/',productRouter);
module.exports = { app, };
//localhost:3000/products