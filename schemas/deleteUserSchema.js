const Joi = require("joi");

const DeleteUserSchema = Joi.object({
  responseCode: Joi.number().valid(200).required(),
  message: Joi.string().required(),
});

module.exports = {
  DeleteUserSchema,
};
