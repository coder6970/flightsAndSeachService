const express = require('express');
const router = express.Router();
const airportController = require('../../controllers/airport-controller')

router.post('/airport',airportController.createAirport);
router.delete('/airport/:id', airportController.destroyAirport);
router.patch('/airport/:id', airportController.updateAirport);
router.get('/airport/:id', airportController.fetchAirport);
router.get('/airport', airportController.fetchAllAirports);

module.exports = router;