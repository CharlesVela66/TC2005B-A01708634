const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {
    let html =`
        <h1> Has elegido registrar un jugador de futbol </h1>
        <a href = "/futbol/nuevo">
            <button>
                Registrar
            </button>
        </a>
    `;
    response.send(html);
});

router.get('/nuevo', (request, response, next) => {
    let html = `
        <form action = "/futbol/nuevo" method = "POST">
            <label for "player"> Nombre del jugador </label>
            <input type = "text" id = "player" name = "player">
            <input type = "submit" value = "Enviar">
        </form>
    `;
    response.send(html);
});
router.post('/nuevo', (request, response, next) => {
    let html = `
        El jugador de futbol es: 
    `
    html += request.body.player;
    html += `
    <br> <br>
    <a href = "/home">
        <button>
            Volver a home
        </button>
    </a>
    `
    console.log(request.body);
    console.log(request.body.player);
    response.send(html);
});

module.exports = router;