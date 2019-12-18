const express = require('express');
const productsRouter = require('./routes/productsRouter.js');
const usersRouter = require('./routes/usersRouter.js');
const indexRouter = require('./routes/indexRouter.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

module.exports = app = express();

app.use(jsonParser);

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);