import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import _ from 'underscore';

const userData = [{facebookId: "1",
               firstName: "Yahor",
               lastName: "Pamakha",
               email: "email@google.com",
               isActive: "true"
              }];

export default passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/passport/facebook/callback"
  },
  (accessToken, refreshToken, profile, cb) => {
    _.find(userData, { facebookId: profile.id }, (err, user) => {
    return cb(err, user);
    });
  }
));