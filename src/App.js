import React from "react";

const products = [
    { id: 1, name: "Wireless Earbuds", price: 12000, img: "https://via.placeholder.com/200" },
    { id: 2, name: "Smart Watch", price: 25000, img: "https://via.placeholder.com/200" },
    { id: 3, name: "Bluetooth Speaker", price: 18000, img: "https://via.placeholder.com/200" },
    { id: 4, name: "Power Bank", price: 9500, img: "https://via.placeholder.com/200" }
];

export default function App() {
    return (
        <div className="app">
            <nav className="navbar">
                <h1>Velstore 🛒</h1>
                <button className="cart-btn">🛍️ Cart (0)</button>
            </nav>

            <div className="products">
                {products.map(p => (
                    <div key={p.id} className="product-card">
                        <img src={p.img} alt={p.name} />
                        <h3>{p.name}</h3>
                        <p>₦{p.price.toLocaleString()}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
