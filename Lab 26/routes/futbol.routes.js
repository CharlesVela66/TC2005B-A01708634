const express = require('express');
const filesystem = require('fs');

const router = express.Router();

router.get('/', (request, response, next) => {
    response.render("futbol");
});

router.get('/nuevo', (request, response, next) => {
    response.render("futbolista_nuevo");
});
router.post('/nuevo', (request, response, next) => {
    let player =  request.body.player;
    filesystem.writeFileSync("futbolista.txt", "El nombre del futbolista es: " + player);
    console.log(player);
    response.render("mostrar_futbolista", {player : player});
});

module.exports = router;