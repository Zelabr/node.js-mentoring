const express = require('express');
const sequelize = require('../../sequelize/sequelize.js');
const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
  sequelize.User.findAll().then(users => res.json(users));
});

module.exports = usersRouter;