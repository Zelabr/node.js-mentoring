import url from 'url';
export const queryParserMiddleware = function (req, res, next) {    
    req.query = url.parse(req.url).query;
    console.log('Parsed query...' + req.query);
    next();
}