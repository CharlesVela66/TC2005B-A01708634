const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) =>{
    let html = `
        <h1> Hola esta es la pagina principal </h1>
        <a href = "/home">
            <button>
                Inicia sesión
            </button>
        </a>
    `;
    response.send(html);
});

router.get('/home', (request, response, next) =>{
    let html = `
        <h1> Elige qué jugadores quieres registrar </h1>
        <a href = "/hockey">
            <button>
                Registrar jugador de Hockey
            </button>
        </a>
        <br> <br>
            <a href = "/futbol">
            <button>
                Registrar jugador de Futbol
            </button>
        </a>
    `;
    response.send(html);
})

module.exports = router;