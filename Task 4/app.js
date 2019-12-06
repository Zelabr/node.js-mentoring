import express from 'express';
import cookieParser from 'cookie-parser';
import {productsRouter} from './routes/productsRouter.js'
import {usersRouter} from './routes/usersRouter.js'
import {indexRouter} from './routes/indexRouter.js'
import {cookieParserMiddleware} from './middlewares/cookieParsingMiddleware.js'
import {queryParserMiddleware} from './middlewares/queryParsingMiddleware.js'
export const app = express();

app.use(cookieParser());
app.use(cookieParserMiddleware);
app.use(queryParserMiddleware);

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});