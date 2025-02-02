const express = require("express");
const { getUserOrders, placeOrder } = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware"); 

const router = express.Router();


router.get("/", authMiddleware, getUserOrders);

router.post("/", authMiddleware, placeOrder);

module.exports = router;
