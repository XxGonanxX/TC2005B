const Nuevo = require('../models/nuevo.model');

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {

    const nuevo = new Nuevo({
        nombre: request.body.nombre,
        descripcion: request.body.descripcion,
    });

    nuevo.save();

    response.redirect('/nuevo/');
};

exports.listar = (request, response, next) => {
    response.render('lista', { descripcion: Nuevo.fetchAll() });
};