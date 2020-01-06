import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productScheme = new Schema({
    name: String,
    price: Number,
    reviews: Array(String)
});
const Product = mongoose.model("Product", productScheme);

export default Product;