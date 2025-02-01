require("dotenv").config(); // Load environment variables
const mongoose = require("mongoose");
const Product = require("./models/Product");

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB!");

    await Product.deleteMany(); // Clear previous data

    const products = [
      // Laptops
      { name: "MacBook Air M1", category: "Laptops", price: 999, image: "https://via.placeholder.com/150" },
      { name: "Dell XPS 13", category: "Laptops", price: 1099, image: "https://via.placeholder.com/150" },
      { name: "HP Spectre x360", category: "Laptops", price: 1299, image: "https://via.placeholder.com/150" },

      // Mobiles
      { name: "iPhone 14 Pro", category: "Mobiles", price: 1199, image: "https://via.placeholder.com/150" },
      { name: "Samsung Galaxy S22", category: "Mobiles", price: 999, image: "https://via.placeholder.com/150" },
      { name: "Google Pixel 7", category: "Mobiles", price: 899, image: "https://via.placeholder.com/150" },

      // Shirts
      { name: "Nike T-Shirt", category: "Shirts", price: 49, image: "https://via.placeholder.com/150" },
      { name: "Adidas Sweatshirt", category: "Shirts", price: 69, image: "https://via.placeholder.com/150" },
      { name: "Puma Polo", category: "Shirts", price: 59, image: "https://via.placeholder.com/150" },
    ];

    await Product.insertMany(products);
    console.log("Products seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("MongoDB Seeding Error:", error);
    process.exit(1);
  }
};

seedProducts();
