const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home.controller');

router.get('/', homeController.inicio);

router.get('/iniciar-sesion', homeController.iniciar_sesion);

router.get('/registrarse', homeController.registrarse);

module.exports = router;