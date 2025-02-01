const express = require("express");
const { createOrder, getOrders } = require("../controllers/orderController");

const router = express.Router();

router.post("/", createOrder);  // Create order
router.get("/", getOrders);  // Fetch all orders

module.exports = router;
