const express = require("express");
const router = express.Router();

let cart = [];

// 🧠 GET cart items
router.get("/", (req, res) => {
    res.json(cart);
});

// 🧠 ADD item to cart
router.post("/", (req, res) => {
    const { id, name, price } = req.body;
    if (!id || !name || !price) {
        return res.status(400).json({ message: "Invalid item" });
    }
    cart.push({ id, name, price });
    res.json({ message: "Item added to cart", cart });
});

// 🧠 REMOVE item from cart
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    cart = cart.filter(item => item.id !== id);
    res.json({ message: "Item removed", cart });
});

module.exports = router;
