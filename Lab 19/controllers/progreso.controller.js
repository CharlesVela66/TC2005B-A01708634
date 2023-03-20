const Progreso = require("../models/progreso.model");

exports.get_progreso = (request,response,next) => {
    response.render('progreso/progreso', {
        progresos: Progreso.fetchAll(),
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
        rol: request.session.rol,
    });
}