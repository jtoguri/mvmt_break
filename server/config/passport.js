const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const 

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret'; //import this from seperate file

//opts.issuer = 'accounts.examplesoft.com';
//opts.audience = 'yoursite.net';

module.exports = (passport, findUserById) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {

      //User.findById(jwt_payload.id)
        findUserById(jwt_payload.id).then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
