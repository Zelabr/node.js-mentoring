const express = require('express');
const productsRouter = require('./routes/postgres/productsRouter.js');
const usersRouter = require('./routes/postgres/usersRouter.js');
const indexRouter = require('./routes/indexRouter.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const app = express();

app.use(jsonParser);

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

module.exports = app;