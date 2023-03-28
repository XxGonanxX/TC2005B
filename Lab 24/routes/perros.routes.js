const express = require('express');

const router = express.Router();

const hasCreate = require('../util/has-create');

const perrosController = require('../controllers/perros.controller');

router.get('/buscar/:valor_busqueda', perrosController.get_buscar);

router.get('/editar/:id', hasCreate, perrosController.get_editar);

router.get('/editar', hasCreate, perrosController.get_nuevo);

router.post('/editar', hasCreate, perrosController.post_editar);

router.get('/nuevo', hasCreate, perrosController.get_nuevo);

router.post('/nuevo', hasCreate, perrosController.post_nuevo);

router.get('/:id', perrosController.listar);

router.get('/', perrosController.listar);

module.exports = router;