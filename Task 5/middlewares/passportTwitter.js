import passport from 'passport';
import TwitterStrategy from 'passport-twitter';
import _ from 'underscore';

const userData = [{twitterId: "1",
               firstName: "Yahor",
               lastName: "Pamakha",
               email: "email@google.com",
               isActive: "true"
              }];

export default passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: "http://localhost:3000/auth/passport/twitter"
  },
  (token, tokenSecret, profile, cb) => {
    _.find(userData, { twitterId: profile.id }, (err, user) => {
    return cb(err, user);
    });
  }
));