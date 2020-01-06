import passport from 'passport';
export const passportFacebookAuth = passport.authenticate('facebook');
export const passportFacebookCallback = passport.authenticate('facebook', { failureRedirect: '/auth/passport/facebook/' });