const Joi = require('joi');
const models = require('shoppingmall-db-model')

module.exports.post = {
  body: {
    token: Joi.string().required(),
    secret: Joi.string().required(),
    type: Joi.string().valid(models.userSso.authType()).insensitive().required()
}
};