const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('../config');

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientID,
      clientSecret: config.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('Profile:', profile);
      // Aquí es donde guardarías el usuario en tu base de datos.
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    // Aquí deberías buscar al usuario en tu base de datos según su id
    // Por ahora, simplemente devolveremos el id como un objeto de usuario simple
    done(null, { id });
  });