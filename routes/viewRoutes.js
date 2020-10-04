const express = require('express');
const viewController = require('../controllers/viewController');

const router = express.Router();

router.get('/', viewController.getOverview);
router.get('/tours', viewController.getTour);

module.exports = router;
