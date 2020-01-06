export const queryParserMiddleware = function (req, res, next) {  
    req.parsedQuery = req.query;
    console.log("Query: ");
    console.log(req.parsedQuery);
    next();
}