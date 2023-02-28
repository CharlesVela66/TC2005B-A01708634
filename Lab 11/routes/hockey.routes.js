const express = require('express');

const router = express.Router();

router.get('/nuevo', (request, response, next) => {
    let html = `
        <form action = "/clhockey/nuevo" method = "POST">
            <label for "player"> Nombre del jugador </label>
            <input type = "text" id = "player" name = "player">
            <input type = "submit" value = "Enviar">
        </form>
    `;
    response.send(html);
});
router.post('/nuevo', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.player);
    response.send("El jugador es " + request.body.player);
});

module.exports = router;