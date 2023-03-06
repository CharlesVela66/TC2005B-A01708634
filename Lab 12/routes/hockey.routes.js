const express = require('express');
const filesystem = require('fs');

const router = express.Router();

router.get('/', (request, response, next) => {
    let html =`
        <h1> Has elegido registrar un jugador de hockey </h1>
        <a href = "/hockey/nuevo">
            <button>
                Registrar
            </button>
        </a>
    `;
    response.send(html);
});

router.get('/nuevo', (request, response, next) => {
    let html = `
        <form action = "/hockey/nuevo" method = "POST">
            <label for "player"> Nombre del jugador </label>
            <input type = "text" id = "player" name = "player">
            <input type = "submit" value = "Enviar">
        </form>
    `;
    response.send(html);
});
router.post('/nuevo', (request, response, next) => {
    let player =  request.body.player;
    let html = `
        El jugador de hockey es: 
    `
    html += player;
    html += `
    <br> <br>
    <a href = "/home">
        <button>
            Volver a home
        </button>
    </a>
    `;
    filesystem.writeFileSync("jugador-hockey.txt", "El nombre del jugador de hockey es: " + player);
    console.log(request.body);
    console.log(request.body.player);
    response.send(html);
    
});

module.exports = router;