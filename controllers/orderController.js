const Order = require("../models/Order");


const getUserOrders = async (req, res) => {
  try {
    const userId = req.user.userId; // Get user ID from auth middleware
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(
      orders.map((order) => ({
        ...order._doc,
        formattedDate: new Date(order.createdAt).toLocaleString(), // Format order date
      }))
    );
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const placeOrder = async (req, res) => {
  try {
    const { items, totalPrice } = req.body;
    const userId =  req.user.userId;
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Order items are required" });
    }

    const newOrder = new Order({
      userId,
      items,
      totalPrice: totalPrice || items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      createdAt: new Date(),
    });

    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = { placeOrder,  getUserOrders};
