// config/passport.js


const User = require('../schemas/user')

var passport         = require('passport');
var GoogleStrategy   = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy(
  {
    clientID      : process.env.GOOGLE_CLIENT_ID,
    clientSecret  : process.env.GOOGLE_SECRET,
    callbackURL   : 'http://localhost:3000/auth/google/callback',
    passReqToCallback   : true
  }, function(request, accessToken, refreshToken, profile, done){
    console.log('profile: ', profile);
    var user = profile;
    
    

    const userid =user.id;
    const nickname = user.given_name;
    const profileimage = user.picture;
    const position = "google";

    const user_save= new User({userid, nickname, profileimage, position})
    user_save.save();
    

    done(null, user);
  }
));

module.exports = passport;