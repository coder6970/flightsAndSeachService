const express = require('express');
const router = express.Router();
const cityController = require('../../controllers/city-controller')

router.post('/city',cityController.createCity);
router.delete('/city/:id', cityController.destroyCity);
router.patch('/city/:id', cityController.updateCity);
router.get('/city/:id', cityController.fetchCity);

module.exports = router;