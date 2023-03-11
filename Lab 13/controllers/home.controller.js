exports.inicio = (request, response, next) => {
    response.render('home/inicio');
}

exports.iniciar_sesion = (request,response,next) => {
    response.render('home/iniciar_sesion');
}

exports.registrarse = (request, response, next) => {
    response.render('home/registrarse');
}