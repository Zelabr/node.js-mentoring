import express from 'express';
export const usersRouter = express.Router();

usersRouter.get('/', function(req, res) {
  res.send('Return all users');
});