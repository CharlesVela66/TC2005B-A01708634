const express = require('express');
const filesystem = require('fs');

const router = express.Router();

router.get('/', (request, response, next) => {
    response.render("hockey");
});

router.get('/nuevo', (request, response, next) => {
    response.render("hockey_nuevo");
});
router.post('/nuevo', (request, response, next) => {
    let player =  request.body.player;
    filesystem.writeFileSync("jugador-hockey.txt", "El nombre del jugador de hockey es: " + player);
    response.render("mostrar_hockey",{player:player});
    
});

module.exports = router;