const express = require('express');
const mongoConnection = require('./mongoose/config/mongoose.js');

const postgresProductRouter = require('./routes/postgres/productRouter.js');
const postgresUserRouter = require('./routes/postgres/userRouter.js');

const mongoProductRouter = require('./routes/mongo/productRouter.js');
const mongoUserRouter = require('./routes/mongo/userRouter.js');
const mongoCitiyRouter = require('./routes/mongo/cityRouter.js');

const indexRouter = require('./routes/indexRouter.js');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const app = express();

mongoConnection.on('open', () => {
    console.log("Mongo connection is opened.");
});

app.use(jsonParser);

app.use('/mongo/products', mongoProductRouter);
app.use('/mongo/users', mongoUserRouter);
app.use('/mongo/cities', mongoCitiyRouter);

app.use('/postgres/products', postgresProductRouter);
app.use('/postgres/users', postgresUserRouter);

app.use('/', indexRouter);

module.exports = app;