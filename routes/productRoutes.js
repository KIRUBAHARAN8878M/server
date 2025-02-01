const express = require("express");
const { getProducts, getProductById } = require("../controllers/productController"); // ✅ Import controller

const router = express.Router();

router.get("/", getProducts); // ✅ API to fetch products
router.get("/:id", getProductById);

module.exports = router;
