const Rutina = require('../models/rutinas.model');
const RutinaFavorita = require('../models/rutinas_favoritas.model');

exports.explorar_rutinas = (request, response, next) => {
    response.render('rutinas/rutinas', {rutinas:Rutina.fetchAll()});
}

exports.explorar_rutinas_favoritas = (request, response, next) => {
    response.render('rutinas/rutinas_favoritas', {rutinas:RutinaFavorita.fetchAll()})
}