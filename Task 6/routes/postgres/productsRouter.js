const express = require('express');
const sequelize = require('../../models/config/sequelize.js');
const productsRouter =  express.Router();

productsRouter.get('/', function(req, res) {
  sequelize.Product.findAll().then(products => res.json(products));
});

productsRouter.post('/', function(req, res) {
  sequelize.Product.create(req.body).then(product => res.json(product));
});

productsRouter.get('/:id', function(req, res) {
  sequelize.Product.findByPk(req.params.id).then(product => res.json(product));
});

productsRouter.get('/:id/reviews', (req, res) => {
  sequelize.Product.findByPk(req.params.id).then(product => res.json(product.reviews));
});

module.exports = productsRouter;