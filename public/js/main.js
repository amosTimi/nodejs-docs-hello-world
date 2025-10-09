// 🛍️ Celline Mart Product + Cart Script (with localStorage + Cart Badge)
document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Wireless Headphones", price: 25000, image: "/images/headphones.jpg", desc: "Noise-cancelling Bluetooth headphones with rich bass." },
        { name: "Smart Watch", price: 30000, image: "/images/watch.jpg", desc: "Track fitness, heart rate & notifications in style." },
        { name: "Laptop", price: 450000, image: "/images/laptop.jpg", desc: "15.6” HD laptop — perfect for work and play." },
        { name: "Bluetooth Speaker", price: 18000, image: "/images/speaker.jpg", desc: "Compact yet powerful wireless speaker." },
        { name: "Gaming Mouse", price: 12000, image: "/images/mouse.jpg", desc: "RGB optical mouse with ultra-fast precision." },
        { name: "Power Bank", price: 10000, image: "/images/powerbank.jpg", desc: "10000 mAh fast-charging power bank." },
    ];

    const grid = document.getElementById("products-grid");
    const cartModal = document.getElementById("cart-modal");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartButton = document.getElementById("view-cart");
    const cartCountBadge = document.getElementById("cart-count"); // 🧮 Cart badge
    const closeModal = document.getElementById("close-cart");

    // 🧠 Load saved cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cellineCart")) || [];

    // 🧩 Render products
    products.forEach((p, i) => {
        const card = document.createElement("div");
        card.className =
            "bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col justify-between transform hover:-translate-y-1";

        card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="h-48 w-full object-cover rounded-lg mb-4" />
      <h4 class="text-lg font-semibold mb-2 text-gray-800">${p.name}</h4>
      <p class="text-gray-500 text-sm mb-3">${p.desc}</p>
      <div class="flex justify-between items-center mt-auto">
        <span class="text-blue-600 font-bold text-lg">₦${p.price.toLocaleString()}</span>
        <button data-index="${i}" class="add-to-cart bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    `;
        grid.appendChild(card);
    });

    // 🛒 Add to cart
    document.querySelectorAll(".add-to-cart").forEach((btn) =>
        btn.addEventListener("click", (e) => {
            const index = e.target.dataset.index;
            const product = products[index];
            const existing = cart.find((item) => item.name === product.name);
            if (existing) existing.qty++;
            else cart.push({ ...product, qty: 1 });
            saveCart();
            updateCart();
        })
    );

    // 💾 Save to localStorage
    function saveCart() {
        localStorage.setItem("cellineCart", JSON.stringify(cart));
    }

    // 💰 Update cart modal + badge
    function updateCart
