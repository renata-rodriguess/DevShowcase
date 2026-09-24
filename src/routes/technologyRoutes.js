const express = require('express');
const router = express.Router();
const TechnologyController = require('../controllers/TechnologyController');

router.post('/', TechnologyController.creat);
router.get('/', TechnologyController.getALL);

module.exports = router;
