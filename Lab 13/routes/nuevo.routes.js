//Basandonos en el que tiene el profe sobre perros
const express = require('express');

const router = express.Router();

const nuevoController = require('../controllers/nuevo.controller');

router.get('/', nuevoController);
                        

module.exports = router;