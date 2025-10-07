const express = require("express");
const fs = require("fs");
const router = express.Router();

const products = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));

router.get("/", (req, res) => {
    const category = req.query.category;
    const filtered = category
        ? products.filter((p) => p.category === category)
        : products;
    res.render("products", { title: "Shop", products: filtered });
});

router.post("/add", (req, res) => {
    const { id } = req.body;
    const product = products.find((p) => p.id == id);
    if (!req.session.cart) req.session.cart = [];
    req.session.cart.push(product);
    res.redirect("/cart");
});

module.exports = router;
