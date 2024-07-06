var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    stock: Number,
    thumbnail: String,
    status: String,
    position: Number,
    deleted: Boolean
});

const Product = mongoose.model('Product', userSchema, "Products");

module.exports = Product;