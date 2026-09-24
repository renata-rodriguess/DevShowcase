const mongoose = require('mongoose');
const TechnologySchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'O nome da tecnologia é obrigatório'],
        trim: true
    },
    descricao: {
        type: String,
        trim: true,
        maxlength: [300, 'Descrição pode ter no máximo 300 caracteres']
    }
}, { timestamps: true });
module.exports = mongoose.model('Technology', TechnologySchema);
