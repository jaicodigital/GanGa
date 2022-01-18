const { User } = require("../db.js");
const passport = require("passport"); //AQUI SE HACE EL SETUP de passport authentication
var LocalStrategy = require("passport-local").Strategy;


passport.use(
  new LocalStrategy({
    usernameField: 'mail',
    passwordField: 'password'
  },async function (username, password, done) {
    User.findOne({
      where: {
        mail: username,
      },
    }) .then((user) => {
      if(!user) {
        return done(null, false);
      }
      if(user.password != password) {
        return done(null, false);
      }
      return done(null, user);
    })
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
  //console.log("DeSerialized user", user);
});
