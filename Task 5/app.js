import express from 'express';
import passport from 'passport';

import {productsRouter} from './routes/productsRouter.js';
import {usersRouter} from './routes/usersRouter.js';
import {authRouter} from './routes/authRouter.js';

export const app = express();


app.use(passport.initialize());
//passport.use
//choose one
import {} from './middlewares/passportLocalMiddleware.js'
import {} from './middlewares/passportFacebookMiddleware.js';
import {} from './middlewares/passportTwitterMiddleware.js';
import {} from './middlewares/passportGoogleMiddleware.js';
 
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);