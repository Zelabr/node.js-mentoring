const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', function (req, res) {
  res.send('Home page');
});

module.exports = indexRouter;