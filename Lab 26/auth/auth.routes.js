const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (request, response) => {
      response.redirect('/home');
    }
  );
  

router.get('/logout', (request, response) => {
  request.logout();
  response.redirect('/');
});

module.exports = router;