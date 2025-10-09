import React, { useEffect, useState } from "react";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Mock data for now — replace later with API
        setProducts([
            { id: 1, name: "Smartphone", price: 250, image: "/images/smartphone.jpg" },
            { id: 2, name: "Wireless Headphones", price: 120, image: "/images/headphones.jpg" },
            { id: 3, name: "Laptop", price: 750, image: "/images/laptop.jpg" },
        ]);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* 🛍️ Header */}
            <header className="bg-white shadow-md p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-indigo-600">Celline Mart</h1>
                <nav className="space-x-6 text-gray-700">
                    <a href="#" className="hover:text-indigo-600">Home</a>
                    <a href="#" className="hover:text-indigo-600">Products</a>
                    <a href="#" className="hover:text-indigo-600">Cart</a>
                </nav>
            </header>

            {/* 🧱 Products */}
            <main className="p-6">
                <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((p) => (
                        <div key={p.id} className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
                            <img src={p.image} alt={p.name} className="rounded-md h-40 w-full object-cover" />
                            <h3 className="mt-3 text-lg font-medium">{p.name}</h3>
                            <p className="text-indigo-600 font-semibold">${p.price}</p>
                            <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </main>

            {/* 🦶 Footer */}
            <footer className="bg-gray-100 text-center p-4 mt-10 text-sm text-gray-500">
                © {new Date().getFullYear()} Celline Mart — All rights reserved.
            </footer>
        </div>
    );
}

export default App;
