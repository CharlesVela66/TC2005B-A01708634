const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) =>{
    response.render('login');
});

router.get('/home', (request, response, next) =>{
    response.render('home');
})

module.exports = router;