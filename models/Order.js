const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [{ name: String, price: Number, quantity: Number }],
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now }, 
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
