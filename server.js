const express = require("express");
const path = require("path");
const app = express();

// Middleware
app.use(express.json());

// Your routes
const productRoutes = require("./routes/products");
app.use("/api/products", productRoutes);

// Serve React build
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
