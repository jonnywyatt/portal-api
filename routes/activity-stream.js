const express = require('express');
const router = express.Router();
const eventsController = require('../server/controllers').events;

router.get('/', eventsController.list);
router.post('/', eventsController.create);

module.exports = router;
