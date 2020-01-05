import express from 'express';
import mongoConnection from './mongoose/config/mongoose.js';

import postgresProductRouter from './routes/postgres/productRouter.js';
import postgresUserRouter from './routes/postgres/userRouter.js';

import mongoProductRouter from './routes/mongo/productRouter.js';
import mongoUserRouter from './routes/mongo/userRouter.js';
import mongoCityRouter from './routes/mongo/cityRouter.js';

import indexRouter from './routes/indexRouter.js';

import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();

const app = express();

mongoConnection.on('open', () => {
    console.log("Mongo connection is opened.");
});

app.use(jsonParser);

app.use('/mongo/products', mongoProductRouter);
app.use('/mongo/users', mongoUserRouter);
app.use('/mongo/cities', mongoCityRouter);

app.use('/postgres/products', postgresProductRouter);
app.use('/postgres/users', postgresUserRouter);

app.use('/', indexRouter);

export default app;