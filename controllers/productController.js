const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const { category, search } = req.query;

    let query = {};
    if (category) query.category = category;
    if (search) query.name = { $regex: search, $options: "i" };

    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    console.error("Product Fetch Error:", error);
    res.status(500).json({ message: "Server error. Try again later." });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getProducts,  getProductById};