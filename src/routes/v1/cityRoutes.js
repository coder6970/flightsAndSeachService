const express = require('express');
const router = express.Router();
const cityController = require('../../controllers/city-controller')

router.post('/city',cityController.createCity);
router.post('/cities',cityController.createCities);
router.delete('/city/:id', cityController.destroyCity);
router.patch('/city/:id', cityController.updateCity);
router.get('/city/:id', cityController.fetchCity);
router.get('/city', cityController.fetchAllCities);
router.get('/cityAirports/:id', cityController.fetchCityAirports);

module.exports = router;