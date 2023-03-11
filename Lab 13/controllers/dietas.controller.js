const Dieta = require('../models/dietas.model');
const DietaFavorita = require('../models/dietas_favoritas.model');

exports.explorar_dietas = (request, response, next) => {
    response.render('dietas/dietas', {dietas:Dieta.fetchAll()});
}

exports.explorar_dietas_favoritas = (request, response, next) => {
    response.render('dietas/dietas_favoritas', {dietas:DietaFavorita.fetchAll()})
}