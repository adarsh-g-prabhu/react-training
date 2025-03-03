const Joi =require('joi')

const userValidationSchema= Joi.object(
    {
        username:Joi.string()
  .min(3)
  .max(30)
  .required()
  .messages({
    'string.base': `"name" should be a type of 'text'`,
    'string.empty': `"name" cannot be an empty field`,
    'string.min': `"name" should have a minimum length of {#limit}`,
    'any.required': `"name" is a required field`
  }),
  password: Joi.string()
  .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{6,30}$'))
  .required()
  .messages({
    'string.empty': `"password" cannot be an empty field`,
    'any.required': `"password" is a required field`
    }),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })


}
   
)

module.exports={ userValidationSchema }