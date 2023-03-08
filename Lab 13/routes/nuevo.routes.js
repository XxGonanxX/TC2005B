//Basandonos en el que tiene el profe sobre perros
const express = require('express');

const router = express.Router();

const nuevoController = require('../controllers/nuevo.controller.js');

router.get('/nuevo', nuevoController.get_nuevo);

router.post('/nuevo', nuevoController.post_nuevo);

router.get('/', nuevoController.listar);

module.exports = router;