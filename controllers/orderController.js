const Order = require("../models/Order");


const getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id; // Get user ID from auth middleware
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Server error" });
  }
};


const placeOrder = async (req, res) => {
  try {
    const { items, totalPrice } = req.body;
    const newOrder = new Order({
      userId: req.user.id, // Assign the order to the logged-in user
      items,
      totalPrice,
      createdAt: new Date(),
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { placeOrder,  getUserOrders};
