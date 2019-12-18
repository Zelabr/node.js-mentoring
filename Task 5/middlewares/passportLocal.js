import passport from 'passport';
import LocalStrategy from 'passport-local';
import _ from 'underscore';

const userData = [{id: "1",
               firstName: "Yahor",
               lastName: "Pamakha",
               email: "email@google.com",
               isActive: "true"
              }];

passport.use(new LocalStrategy({
    usernameField: 'firstName',
    passwordField: 'lastName',
    session: false
}, (username, password, done) => {
    let user = _.find(userData, {firstName: username});

    if(user === undefined || user.lastName !== password) {
        done(null, false, 'Bad username/password combination');
    } else {
        done(null, user);
    }
}));