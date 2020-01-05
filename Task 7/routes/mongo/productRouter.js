import express from 'express';
import Product from '../../mongoose/models/product.js';

const productRouter = express.Router();

productRouter.get('/', (req, res) => {
    Product.find().then(products => res.json(products));
});

productRouter.post('/', (req, res) => {
    Product.create(req.body, err => {
        if (err) {
            console.log(err.message);
        }
    });
});

productRouter.get('/:id', (req, res) => {
    Product.findById(req.params.id).then(product => res.json(product));
});

productRouter.get('/:id/reviews', (req, res) => {
    Product.findById(req.params.id).then(product => res.json(product.reviews));
});

export default productRouter;