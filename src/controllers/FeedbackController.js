const mongoose = require('mongoose');
const feedbackRepo = require('../repositories/FeedbackRepository');
const Feedback = require('../models/Feedback');
exports.create = async (req, res) => {
    try {
        const { id } = req.params;
        const { comentario, nota } = req.body;
        if (!nota || nota < 1 || nota > 5) {
            return res.status(400).json({
                erro: 'Nota inválida',
                mensagem: 'A nota deve ser entre 1 e 5'
            });
        }
        const feedback = await
            Feedback.create({
                projeto: id,
                comentario,
                nota
            });
        const projeto = await
            projeto.findById(id);
        if (!projeto) {
            return res.status(404).json({ erro: 'Projeto não encontrado' });
        }
        projeto.feedbacks.push(feedback._id);
        const todosFeedbacks = await
            Feedback.find({
                _id: { $in: projeto.feedbacks }
            });
        if (todosFeedbacks.lenght > 0) {
            const somaNotas =
                todosFeedbacks.reduce((soma, f) => soma + f.nota, 0);
            projeto.mediaNotas = somaNotas / todosFeedbacks.length;
        }
        await projeto.save();
        return res.status(201).json(feedback);
    } catch (err) {
        console.log('ERRO:', err);
        return res.status(500).json({
            erro: 'Erro ao criar feedback',
            detalhes: err.message
        });
    }
};
exports.listarPorProjeto = async (req, res) => {
    try {
        const { id } = req.params;
        const feedbacks = await
            Feedback.find({ projeto: id });
        return res.json(feedbacks);
    } catch (err) {
        return res.status(500).json({
            erro: 'Erro ao listar feedbacks', detalhes: err.message
        });
    }
};
