const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const cart = req.session.cart || [];
    res.render("cart", { title: "Your Cart", cart });
});

module.exports = router;
