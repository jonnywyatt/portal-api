const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activities');
const typesController = require('../controllers/types');

router.get('/activities', activitiesController.list);
router.post('/activities', activitiesController.create);

router.get('/types', typesController.list);
router.post('/types', typesController.create);

module.exports = router;
