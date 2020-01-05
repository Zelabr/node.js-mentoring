import express from 'express';
import sequelize from '../../sequelize/config/sequelize.js';

const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
  sequelize.User.findAll().then(users => res.json(users));
});

export default usersRouter;