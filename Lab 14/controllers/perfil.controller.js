const Dieta = require('../models/dietas_favoritas.model');
const Rutina = require('../models/rutinas_favoritas.model')

exports.ver_perfil = (request, response, next) => {
    response.render('perfil/perfil', {dieta : Dieta.fetchAll()[0] , rutina : Rutina.fetchAll()[0]});
}