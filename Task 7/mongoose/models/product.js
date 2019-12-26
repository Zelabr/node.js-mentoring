const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productScheme = new Schema({
    name: String,
    price: Number,
    reviews: Array(String)
});
const Product = mongoose.model("Product", productScheme);

module.exports = Product;