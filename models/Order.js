const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [{ name: String, price: Number, quantity: Number }],
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now }, // ✅ Stores order placed time
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
