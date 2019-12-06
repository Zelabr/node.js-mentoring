import {server} from './server.js';

server.on('request', (req, res) => {
    req.pipe(res);
});