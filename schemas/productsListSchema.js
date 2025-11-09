const Joi = require("joi");

const productSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  price: Joi.string().required(),
  brand: Joi.string().required(),
  category: Joi.object().required(),
});

const ProductsListSchema = Joi.object({
  responseCode: Joi.number().valid(200).required(),
  products: Joi.array().items(productSchema).required(),
});

module.exports = {
  productSchema,
  ProductsListSchema,
};
