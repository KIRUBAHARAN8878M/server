const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  image: String, // Store image URL or Base64 string
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
