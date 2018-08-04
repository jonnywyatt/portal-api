const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activities');
const typesController = require('../controllers/types');
const subtypesController = require('../controllers/subtypes');
const peopleController = require('../controllers/people');
const locationsController = require('../controllers/locations');

router.get('/activities', activitiesController.list);
router.post('/activities', activitiesController.create);

router.get('/types', typesController.list);
router.post('/types', typesController.create);

router.get('/subtypes', subtypesController.list);
router.post('/subtypes', subtypesController.create);

router.get('/people', peopleController.list);
router.post('/people', peopleController.create);

router.get('/locations', locationsController.list);
router.post('/locations', locationsController.create);

module.exports = router;
