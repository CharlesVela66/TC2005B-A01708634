exports.home = (request, response, next) => {
    response.render('admin/home',{
        isLoggedIn: request.session.isLoggedIn,
        nombre: request.session.nombre || '',
        rol: request.session.rol || '',
    });
}