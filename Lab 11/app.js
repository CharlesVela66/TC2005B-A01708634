const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

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
