import cookie from 'cookie';

export const cookieParserMiddleware = function (req, res, next) {   
    req.parsedCookies = cookie.parse(req.headers.cookie);
    console.log('Parsed cookies: ', req.parsedCookies);
    next();
}