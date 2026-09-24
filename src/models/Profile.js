const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório'],
        trim: true
    },
    biografia: {
        type: String,
        maxlength: [500, 'Bio pode ter no máximo 500 caracteres'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'E-mail é obrigatório'],
        unique: true,
        lowercase: true,
        trim: true
    },
    usuarioGithub: {
        type: String,
        required: [true, 'Usuário do GitHub é obrigatório'],
        trim: true
    },
    projetos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }]
}, {
    timestamps: true,
});

module.exports = mongoose.model('Profile', ProfileSchema);
