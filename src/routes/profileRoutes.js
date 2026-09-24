const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/ProfileController');

router.post('/', ProfileController.create);
router.get('/:id', ProfileController.getById);

module.exports = router;
