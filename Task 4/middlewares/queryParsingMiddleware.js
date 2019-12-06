export const queryParserMiddleware = function (req, res, next) {    
    console.log('Parsing query...')
    next();
}