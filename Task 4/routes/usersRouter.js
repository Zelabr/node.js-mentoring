import express from 'express';

const usersRouter = express.Router();

usersRouter.get('/', function (req, res) {
  res.send('Return all users');
});

export default usersRouter;