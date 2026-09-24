const Joi = require('joi');

const FeedbackDTO = Joi.object({
    autor:
        Joi.string().trim().required().messages({
            'string.empty': 'O nome do autor é obrigatório'
        }),
    comentario: Joi.string().trim().required().max(1000).messages({
        'string.empty': 'O comentário é obrigatório',
        'string.max': 'O comentário pode ter no máximo 1000 caracteres'
    }),
    nota: Joi.number().min(1).max(5).required()
});
module.exports = FeedbackDTO;
