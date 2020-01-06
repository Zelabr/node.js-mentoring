import { server } from './server.js';
import * as fs from 'fs';

const message = 'Hello world!';


//Read html by fs.readFileSync
server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    const htmlString = fs.readFileSync('./index.html', { encoding: 'utf-8' });
    const stringWithMessage = htmlString.replace('{message}', message);
    res.end(stringWithMessage);
});


//Read html by fs.createReadStream
server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    const reader = fs.createReadStream('./index.html', { encoding: 'utf-8' });
    reader.on('readable', () => {
        const htmlString = reader.read();
        if (htmlString !== null) {
            const stringWithMessage = htmlString.replace('{message}', message);
            res.end(stringWithMessage);
        }
    });
});

