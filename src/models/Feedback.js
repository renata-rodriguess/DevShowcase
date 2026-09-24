const mongoose = require('mongoose');
const FeedbackSchema = new mongoose.Schema({
    texto: {
        type: String,
        trim: true,
        maxlength: [1000, 'Comentário não pode ultrapassar 1000 caracteres']
    },
    nota: {
        type: Number,
        min: [1, 'Nota mínima e 1'],
        max: [5, 'Nota máxima é 5'],
        required: true
    },
    projeto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    }
}, { timestamps: true });
module.exports = mongoose.model('Feedback', FeedbackSchema);
