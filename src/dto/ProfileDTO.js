const Joi = require('joi')
const ProfileDTO = Joi.object({
    nome:
        Joi.string().trim().required().messages({
            'string.empty': 'Nome não pode ser vazio',
            'any.required': 'Nome é obrigatório'
        }),
    biografia:
        Joi.string().max(500).allow(''),
    email: Joi.string().email({ tlds: false }).trim().lowercase().required().messages({
        'string.empty': 'E-mail não pode ser vazio',
        'any.required': 'E-mail é obrigatório',
        'string.email': 'Digite um e-mail válido'
    }),
    usuarioGithub:
        Joi.string().trim().required().messages({
            'string.empty': 'Usuário do GitHub não encontrado vazio',
            'any.required': 'Usuário do GitHub é obrigatório'
        }),
    tecnologias:
        Joi.array().items(Joi.string())
});
module.exports = {
    ProfileDTO,
    validate: (dados) =>
        ProfileDTO.validate(dados, {
            abortEarly:
                false
        })
};
