import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import { productsRouter } from './routes/productsRouter.js';
import { usersRouter } from './routes/usersRouter.js';
import { authRouter } from './routes/authRouter.js';

const app = express();

app.use(passport.initialize());
app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

export default app;