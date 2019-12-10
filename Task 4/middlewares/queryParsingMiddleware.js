export const queryParserMiddleware = function (req, res, next) {  
    req.parsedQuery = req.query;
    console.log(req.parsedQuery);
    next();
}