const express = require('express');
const sequelize = require('../models/config/sequelize.js');
module.exports = usersRouter = express.Router();

usersRouter.get('/', function(req, res) {
  sequelize.User.findAll().then(users => res.json(users));
});