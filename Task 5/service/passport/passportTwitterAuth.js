import passport from 'passport';
export const passportTwitterAuth = passport.authenticate('twitter');
export const passportTwitterCallback =  passport.authenticate('twitter', { failureRedirect: '/auth/passport/twitter/' });