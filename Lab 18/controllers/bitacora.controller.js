const Bitacora = require("../models/bitacora.model");

exports.get_bitacora = (request, response, next) => {
/*    let cookies = request.get('Cookie') || '';
    console.log(cookies);

    let consultas = cookies.split(';')[0].split('=')[1] || 0;
    console.log(consultas);

    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');*/

    Bitacora.fetchAll()
    .then((rows, fieldData) => {
        response.render('bitacora/bitacora', {registros: rows[0]})
    }) 
    .catch((error) => {console.log(error)});
}

exports.post_bitacora = (request,response,next) => {
    const registro = new Bitacora({
        descr_sesion: request.body.descr_sesion,
        nivel_satisf: request.body.nivel_satisf,
        comentarios: request.body.comentarios,
    })
    registro.save()
    .then(([rows,fieldData]) =>
        response.redirect('/home')
    )
    .catch((error) => {console.log(error)});
}