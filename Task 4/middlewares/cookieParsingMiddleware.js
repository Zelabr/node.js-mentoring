export const cookieParserMiddleware = function (req, res, next) {    
    console.log('Cookies: ', req.cookies)    
    console.log('Signed Cookies: ', req.signedCookies)
    next();
}