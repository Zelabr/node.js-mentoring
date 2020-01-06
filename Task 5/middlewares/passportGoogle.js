import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth';
import _ from 'underscore';

const userData = [{
  googleId: "1",
  firstName: "Yahor",
  lastName: "Pamakha",
  email: "email@google.com",
  isActive: "true"
}];

passport.use(new GoogleStrategy({
  consumerKey: GOOGLE_CONSUMER_KEY,
  consumerSecret: GOOGLE_CONSUMER_SECRET,
  callbackURL: "http://localhost:3000/auth/passport/google"
},
  (token, tokenSecret, profile, done) => {
    _.find(userData, { googleId: profile.id }, (err, user) => {
      return done(err, user);
    });
  }
));