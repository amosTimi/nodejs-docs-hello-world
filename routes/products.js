const express = require("express");
const router = express.Router();

const products = [
    { id: 1, name: "Wireless Headphones", price: 25000, image: "/images/headphones.jpg" },
    { id: 2, name: "Smartwatch", price: 18000, image: "/images/smartwatch.jpg" },
    { id: 3, name: "Bluetooth Speaker", price: 22000, image: "/images/speaker.jpg" },
    { id: 4, name: "Gaming Mouse", price: 12000, image: "/images/mouse.jpg" },
    { id: 5, name: "Laptop Stand", price: 15000, image: "/images/stand.jpg" },
];

router.get("/", (req, res) => {
    res.json(products);
});

module.exports = router;
