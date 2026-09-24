const Feedback = require('../models/Feedback');
const mongoose = require('mongoose');

class FeedbackRepository {
    async create(data) {
        const feedback = new Feedback(data);
        return await feedback.save();
    }
    async findAll() {
        return await Feedback.find()
            .sort({ createdAt: -1 })
            .populate('projeto', 'titulo');
    }
    async findById(id) {
        return await
            Feedback.findById(id).populate('projeto', 'titulo');
    }
    async findByProjectId(projetoId) {
        return await Feedback.find({ projeto: projetoId })
            .populate('projeto', 'titulo');
    }
}
module.exports = new FeedbackRepository();