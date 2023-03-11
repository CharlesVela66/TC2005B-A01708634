const express = require('express');

const router = express.Router();

const dietasController = require('../controllers/dietas.controller');

router.get('/', dietasController.explorar_dietas);

router.get('/favoritas', dietasController.explorar_dietas_favoritas);

module.exports = router;