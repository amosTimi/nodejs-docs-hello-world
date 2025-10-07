const express = require("express");
const session = require("express-session");
const path = require("path");

const homeRoutes = require("./routes/home");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
    session({
        secret: "secret-key",
        resave: false,
        saveUninitialized: true,
    })
);
app.set("view engine", "ejs");

// Routes
app.use("/", homeRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

app.listen(PORT, () => console.log(`🛍️ Server running on port ${PORT}`));


// Serve React build files
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
