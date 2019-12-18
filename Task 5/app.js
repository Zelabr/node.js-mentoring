import express from 'express';
import passport from 'passport';

import {productsRouter} from './routes/productsRouter.js';
import {usersRouter} from './routes/usersRouter.js';
import {authRouter} from './routes/authRouter.js';

export const app = express();


app.use(passport.initialize());
 
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);