const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const isAuth = require('./util/is-auth');
const csrf = require('csurf');


const app = express();

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

//CSRF Protection
const csrfProtection = csrf();
app.use(csrfProtection); 
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

const rutasHome = require('./routes/home.routes');

app.use('/', rutasHome);

const rutasBitacora = require('./routes/bitacora.routes');

app.use('/home', isAuth, rutasBitacora);

const rutasDieta = require('./routes/dietas.routes');

app.use('/dietas', isAuth, rutasDieta);

const rutasRutinas = require('./routes/rutinas.routes');

app.use('/rutinas', isAuth, rutasRutinas);

const rutasProgreso = require('./routes/progreso.routes');

app.use('/progreso', isAuth, rutasProgreso);

const rutasMedidas = require('./routes/medidas.routes');

app.use('/medidas', isAuth, rutasMedidas);

const rutasPerfil = require('./routes/perfil.routes');

app.use('/perfil', isAuth, rutasPerfil);

const rutasAdmin = require('./routes/admin.routes');

app.use('/admin', isAuth, rutasAdmin);

app.use((request, response, next) => {
    console.log("Page not found!")
    response.status(404);
    
    //Envía la respuesta al cliente
    response.send('Lo sentimos, esta ruta no existe');
});

app.listen(3000);
