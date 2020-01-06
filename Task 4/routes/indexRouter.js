import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', function (req, res) {
  res.send('Home page');
});

export default indexRouter;