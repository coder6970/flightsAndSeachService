const express = require('express');
const router = express.Router();
const v1CityApiRoutes = require('./v1/cityRoutes')
const v1AirportApiRoutes = require('./v1/airportRoutes')
const v1FlightApiRoutes = require('./v1/flightRoutes')
const v1AirplaneRoutes = require('./v1/airplaneRoutes')

router.use('/v1',v1CityApiRoutes);
router.use('/v1',v1AirportApiRoutes);
router.use('/v1',v1FlightApiRoutes);
router.use('/v1',v1AirplaneRoutes);

module.exports = router;