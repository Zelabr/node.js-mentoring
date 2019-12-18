const express = require('express');
module.exports = indexRouter = express.Router();

indexRouter.get('/', function(req, res) {
  res.send('Home page');
});