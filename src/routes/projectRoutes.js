const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/ProjectController');
const FeedbackController = require('../controllers/FeedbackController');

router.get('/', ProjectController.getALL);
router.post('/', ProjectController.create);
router.put('/:id/upvote', ProjectController.curtir);
router.post('/:id/feedbacks', FeedbackController.create);
router.get('/:id/feedbacks', FeedbackController.listarPorProjeto);
router.get('/:id', ProjectController.getById);
module.exports = router;

