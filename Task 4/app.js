import express from 'express';
import { productsRouter } from './routes/productsRouter.js'
import { usersRouter } from './routes/usersRouter.js'
import { indexRouter } from './routes/indexRouter.js'
import { cookieParserMiddleware } from './middlewares/cookieParsingMiddleware.js'
import { queryParserMiddleware } from './middlewares/queryParsingMiddleware.js'

const app = express();

app.use(cookieParserMiddleware);
app.use(queryParserMiddleware);

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

export default app;