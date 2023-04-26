const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const authSetup = require('./auth/passport');

const app = express();

app.use(
    session({
      secret: 'Un string ultra duper super largo que no es este',
      resave: false,
      saveUninitialized: false
    })
  );

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(passport.initialize());

app.use(passport.session());

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

const googleRutas = require('./auth/auth.routes');
app.use('/auth',googleRutas);

const homeRutas = require('./routes/home.routes');
app.use('/', homeRutas);

app.use('/hola', (request,response,next) =>{
    response.send('<h1>Hola desde la ruta /hola </h1>')
});

const hockeyRutas = require('./routes/hockey.routes');

app.use('/hockey', hockeyRutas);

const futbolRutas = require('./routes/futbol.routes');

app.use('/futbol', futbolRutas);

app.use((request,response,next) => {
    console.log("No se encontró la página");
    response.status(404);
    response.send("<h1> ERROR 404 NO ENCONTRAMOS TU PAGINA :/");
});

app.listen(3000);