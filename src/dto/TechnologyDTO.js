const Joi = require('joi')

const TechnologyDTO = Joi.object({
    nome: Joi.string().trim().required().messages({
        'string.empty': 'Nome não pode ser vazio'
    }),
    descricao: Joi.string().max(300).allow('')
});
module.exports = { TechnologyDTO };