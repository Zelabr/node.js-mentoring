import express from 'express';
import { addProduct } from '../api/controllers/product.js';
import { getProductById } from '../api/controllers/product.js';
const productRouter = express.Router();

productRouter.post('/', (req, res) => {
    addProduct();
});

productRouter.get('/:id', (req, res) => {
    getProductById();
});

productRouter.get('/:id/reviews', (req, res) => {

});

export { productRouter };