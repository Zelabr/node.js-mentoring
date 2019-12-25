import express from 'express';
import {mongoConnection} from './config/mongoose/mongoose.js';
import {productRouter} from './routes/productRouter.js';
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();

const app = express();

mongoConnection.on('open', () => {
    console.log("Mongo connection is opened.");
});

app.use(jsonParser);

app.use('/product', productRouter);

export {app};