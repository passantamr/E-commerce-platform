const {app} = require('./app.js');
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
app.listen(port,async () => {
    await mongoose.connect("mongodb+srv://basantamr46127987:mRGbKDv8AGKrEHzf@cluster0.ij6bwwt.mongodb.net/test");
    console.log(`listening on port ${port} ... `);
});