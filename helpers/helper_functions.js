const joi = require('joi');

//insert any helper function you need in your API
function validateCategory(category){
    const schema =joi.object({
        name: joi.string().min(3).required()
    });

    return schema.validate(category);
}
module.exports ={
    validateCategory,
};
