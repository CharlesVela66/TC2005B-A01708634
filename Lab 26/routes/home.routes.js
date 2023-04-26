const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/', (request, response, next) =>{
    if (request.isAuthenticated()) {
        response.render('home', { user: request.user });
      } else {
        response.render('login');
      }
});

router.get('/home', (request, response, next) =>{
    response.render('home');
})

module.exports = router;