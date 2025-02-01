const Order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    const { items } = req.body;
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const newOrder = new Order({ items, totalPrice });
    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Error creating order" });
  }
};

const getOrders = async (req, res) => {
    try {
      const orders = await Order.find().sort({ createdAt: -1 }); // Fetch latest orders first
      res.json(
        orders.map((order) => ({
          ...order._doc,
          formattedDate: new Date(order.createdAt).toLocaleString(), // ✅ Format order date
        }))
      );
    } catch (error) {
      res.status(500).json({ message: "Error fetching orders" });
    }
  };

module.exports = { createOrder,getOrders };