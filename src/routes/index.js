const express = require('express');
const router = express.Router();
const v1CityApiRoutes = require('./v1/cityRoutes')
const v1AirportApiRoutes = require('./v1/airportRoutes')

router.use('/v1',v1CityApiRoutes);
router.use('/v1',v1AirportApiRoutes);

module.exports = router;