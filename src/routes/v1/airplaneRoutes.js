const express = require('express');
const router = express.Router();
const airplaneController = require('../../controllers/airplane-controller')

router.post('/airplane',airplaneController.createAirplane);
router.delete('/airplane/:id', airplaneController.destroyAirplane);
router.patch('/airplane/:id', airplaneController.updateAirplane);
router.get('/airplane/:id', airplaneController.fetchAirplane);
router.get('/airplane', airplaneController.fetchAllAirplanes);

module.exports = router;