const Joi = require('@hapi/joi');

const registrationSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .required()
});

const loginSchema = Joi.object({
  login: Joi.string().max(256).required(),
  password: Joi.string().max(256).required()
});

const Validate = (schema) => (data) => schema.validate(data);

module.exports = {
  registrationValidation: Validate(registrationSchema),
  loginValidation: Validate(loginSchema)
};