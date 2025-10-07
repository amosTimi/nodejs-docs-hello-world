const express = require("express");
const router = express.Router();

const products = [
    { id: 1, name: "T-Shirt", price: 20 },
    { id: 2, name: "Sneakers", price: 60 },
    { id: 3, name: "Bag", price: 35 },
];

router.get("/", (req, res) => {
    res.render("products", { title: "Products", products });
});

router.post("/add", (req, res) => {
    const { id } = req.body;
    const product = products.find(p => p.id == id);
    if (!req.session.cart) req.session.cart = [];
    req.session.cart.push(product);
    res.redirect("/cart");
});

module.exports = router;
