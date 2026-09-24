const Joi = require('joi')

const ProjectDTO = Joi.object({
    titulo: Joi.string().trim().required().messages({
        'string.empty': 'Titulo não pode ser vazio'
    }),
    descricao: Joi.string().max(1000).allow(''),
    perfil:
        Joi.string().hex().length(24).required().messages({
            'string.hex': 'ID de perfil inválido'
        }),
    tecnologias:
        Joi.array().items(Joi.string().hex().length(24))
});
module.exports = { ProjectDTO };
