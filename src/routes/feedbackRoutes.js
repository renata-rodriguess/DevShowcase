const express = require('express');
const router = express.Router();
const FeedbackController = require('../controllers/FeedbackController');

router.post('/feedbacks', FeedbackController.create);
router.get('/feedbacks', FeedbackController.listarPorProjeto);

module.exports = router;
