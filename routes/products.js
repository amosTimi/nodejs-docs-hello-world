const express = require("express");
const fs = require("fs");
const router = express.Router();

const products = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));

router.get("/", (req, res) => {
    const { category, search } = req.query;

    let filtered = products;

    if (category && category !== "All") {
        filtered = filtered.filter((p) => p.category === category);
    }

    if (search) {
        const q = search.toLowerCase();
        filtered = filtered.filter((p) =>
            p.name.toLowerCase().includes(q)
        );
    }

    // extract categories for dropdown
    const categories = ["All", ...new Set(products.map((p) => p.category))];

    res.render("products", {
        title: "Shop",
        products: filtered,
        categories,
        selectedCategory: category || "All",
        searchTerm: search || "",
    });
});

router.post("/add", (req, res) => {
    const { id } = req.body;
    const product = products.find((p) => p.id == id);
    if (!req.session.cart) req.session.cart = [];
    req.session.cart.push(product);
    res.redirect("/cart");
});

module.exports = router;
