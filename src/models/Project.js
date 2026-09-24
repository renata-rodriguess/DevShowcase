const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'O título do projeto é obrigatório'],
    },
    descricao: {
        type: String,
        required: [true, 'A descrição é obrigatória'],
        maxlength: [1000, 'descrição pode ter no máximo 1000 caracteres']
    },
    linkRepositorio: {
        type: String,
        required: [true, 'O link do repositório é obrigatório']
    },
    perfil: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Profile'
    },
    tecnologias: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Technology'
    }],
    feedbacks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feedback'
    }],
    mediaNotas: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    curtidas: {
        type: Number,
        default: 0
    }
}, { timestamps: true });
module.exports = mongoose.model('Project', ProjectSchema);
