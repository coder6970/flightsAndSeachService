const express = require('express');
const router = express.Router();
const flightController = require('../../controllers/flight-controller')

router.post('/flight',flightController.createFlight);
router.get('/flight',flightController.getFlights);

module.exports = router;