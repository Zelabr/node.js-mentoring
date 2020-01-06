import { Product } from '../models/product.js';

const addProduct = (req, res) => {
    let newProduct = Product(req.swagger.params.product.value);
    newProduct.save(err => {
        if (err) {
            throw err;
        } else {
            res.json({ message: 'OK' });
        }
    });
};

const getProductById = (req, res) => {
    let productId = req.swagger.params.id.value;

    Product.findById(productId, (err, product) => {
        if (err) {
            throw err;
        } else if (!product) {
            res.status(404).json({ message: 'Product not found.' });
        } else {
            console.log('In controller!');
            res.json({ name: product.name, price: product.price, reviews: product.reviews })
        }
    });
};

const updateProductWithForm = (req, res) => {
    let productId = req.swagger.params.id.value;
    let newProduct = req.swagger.params.product.value;

    Product.findByIdAndUpdate(productId, newProduct, (err, product) => {
        if (err) {
            throw err;
        } else {
            res.json({ message: 'OK' });
        }
    });
};

const deleteProduct = (req, res) => {
    let productId = req.swagger.params.id.value;

    Product.findByIdAndRemove(productId, err => {
        if (err) {
            throw err;
        } else {
            res.json({ message: 'OK' });
        }
    });
};

export { addProduct, getProductById, updateProductWithForm, deleteProduct };