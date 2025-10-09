const express = require("express");
const path = require("path");

const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

// Default route → serve frontend
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
