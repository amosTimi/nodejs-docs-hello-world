const products = [
    { id: 1, name: "iPhone 15 Pro", price: 1200000, image: "/images/iphone.jpg" },
    { id: 2, name: "Samsung Galaxy S24", price: 950000, image: "/images/samsung.jpg" },
    { id: 3, name: "Sony Headphones", price: 120000, image: "/images/sony.jpg" },
    { id: 4, name: "Apple Watch", price: 350000, image: "/images/watch.jpg" },
];

const grid = document.getElementById("products-grid");
const cartModal = document.getElementById("cart-modal");
const cartBtn = document.getElementById("cart-btn");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// 🛍️ Render products
function renderProducts() {
    grid.innerHTML = "";
    products.forEach((p) => {
        const card = document.createElement("div");
        card.className = "bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition";
        card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover">
      <div class="p-4 text-center">
        <h3 class="text-lg font-semibold mb-2">${p.name}</h3>
        <p class="text-blue-600 font-bold mb-3">₦${p.price.toLocaleString()}</p>
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onclick="addToCart(${p.id})">
          Add to Cart
        </button>
      </div>
    `;
        grid.appendChild(card);
    });
}

// 🛒 Cart logic
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
    const item = products.find((p) => p.id === id);
    const existing = cart.find((p) => p.id === id);
    if (existing) existing.qty += 1;
    else cart.push({ ...item, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter((p) => p.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    cartItems.innerHTML = "";
    if (cart.length === 0) {
        cartItems.innerHTML = `<p class="text-gray-500 text-center">Your cart is empty 🛍️</p>`;
    } else {
        cart.forEach((p) => {
            const item = document.createElement("div");
            item.className = "flex justify-between items-center border-b pb-2";
            item.innerHTML = `
        <span>${p.name} (x${p.qty})</span>
        <button class="text-red-500 hover:underline" onclick="removeFromCart(${p.id})">Remove</button>
      `;
            cartItems.appendChild(item);
        });
    }
    const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);
    cartTotal.textContent = `₦${total.toLocaleString()}`;
}

// 🎯 Modal controls
cartBtn.onclick = () => { cartModal.classList.remove("hidden"); updateCartUI(); };
closeCart.onclick = () => cartModal.classList.add("hidden");

// 🚀 Init
renderProducts();
updateCartUI();
