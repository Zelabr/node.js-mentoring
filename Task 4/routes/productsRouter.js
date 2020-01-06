import express from 'express';

const productsRouter = express.Router();

productsRouter.get('/', function (req, res) {
  res.send('Return all products');
});

productsRouter.post('/', function (req, res) {
  res.send('Add product');
});

productsRouter.get('/:id', function (req, res) {
  res.send('Return ' + req.params.id + ' product');
});

productsRouter.get('/:id/reviews', function (req, res) {
  res.send('Return all reviews for a ' + req.params.id + ' product');
});

export default productsRouter;