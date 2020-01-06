import passport from 'passport';
export const passportGoogleAuth = passport.authenticate('google');
export const passportGoogleCallback = passport.authenticate('google', { failureRedirect: '/auth/passport/google/' });