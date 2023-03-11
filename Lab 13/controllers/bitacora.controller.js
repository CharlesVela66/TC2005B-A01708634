const Bitacora = require("../models/bitacora.model");

exports.get_bitacora = (request, response, next) => {
    response.render("bitacora/bitacora", {registros: Bitacora.fetchAll()});
}

exports.post_bitacora = (request,response,next) => {
    const registro = new Bitacora({
        fecha: request.body.fecha,
        descr_sesion: request.body.descr_sesion,
        nivel_satisf: request.body.nivel_satisf,
        comentarios: request.body.comentarios,
    })
    registro.save();
    response.redirect('/home');
}