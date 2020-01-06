import express from 'express';
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.send('Home page');
});

export default indexRouter;