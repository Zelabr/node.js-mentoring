import {server} from './server.js';

server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello world!');
    res.end(); 
});