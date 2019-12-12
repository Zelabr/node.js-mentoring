import passport from 'passport';
export const passportLocalAuth = passport.authenticate('local', {session: false});