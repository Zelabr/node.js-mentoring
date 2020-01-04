import express from 'express';
import productsRouter from './routes/postgres/productsRouter.js';
import usersRouter from './routes/postgres/usersRouter.js';
import indexRouter from './routes/indexRouter.js';
import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();
const app = express();

app.use(jsonParser);

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

export default app;