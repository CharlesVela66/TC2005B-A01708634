const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

exports.inicio = (request, response, next) => {
    request.session.destroy();
    response.clearCookie("consultas");
    response.render('home/inicio');
}

exports.iniciar_sesion = (request,response,next) => {
    const mensaje = request.session.mensaje || '';

    if (request.session.mensaje) {
        request.session.mensaje  = '';
    }

    response.render('home/iniciar_sesion', {
        mensaje: mensaje,
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
    });
}

exports.post_iniciar_sesion = (request, response, next) => {
    Usuario.fetchOne(request.body.nombre_usuario)
    .then(([rows, fieldData]) => {
        if (rows.length == 1) {
            bcrypt.compare(request.body.contrasena, rows[0].contrasena)
            .then((doMatch) => {
                if(doMatch) {
                    request.session.isLoggedIn = true;
                    request.session.id = rows[0].id_usuario;
                    return request.session.save(err => {
                        response.redirect('/home');
                    });
                    
                } else {
                    request.session.mensaje = "Usuario y/o contraseña incorrectos";
                    console.log("Contraseña incorrecta");
                    response.redirect('/iniciar-sesion');
                }
            })
            .catch((error) => console.log(error));

        } else {
            request.session.mensaje = "Usuario y/o contraseña incorrectos";
            console.log("No hay usuario");
            response.redirect('/iniciar-sesion');
        }
    })
    .catch((error) => {
        console.log(error);
    });

};

exports.registrarse = (request, response, next) => {
    response.render('home/registrarse', {isLoggedIn: request.session.isLoggedIn || false,
    id:request.session.id
    });
};

exports.post_registrarse = (request, response, next) => {
    const usuario = new Usuario({
        nombre : request.body.nombre,
        apellido : request.body.apellido,
        nombre_usuario : request.body.nombre_usuario,
        correo : request.body.correo,
        contrasena : request.body.contrasena,
        sexo : request.body.sexo,
        fecha_nacimiento : request.body.fecha_nacimiento
    });  
    usuario.save()
    .then(([rows, fieldData]) => {
        response.redirect('/iniciar-sesion');
    }).catch((error) => {console.log(error)});
};