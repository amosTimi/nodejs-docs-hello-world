// Sample products
const products = [
    { id: 1, name: "Smartphone", price: 120000, img: "images/smartphone.jpg" },
    { id: 2, name: "Laptop", price: 250000, img: "images/laptop.jpg" },
    { id: 3, name: "Headphones", price: 35000, img: "images/headphones.jpg" },
    { id: 4, name: "Smartwatch", price: 50000, img: "images/smartwatch.jpg" }
];

// --- CART MANAGEMENT ---
const cartKey = "cellineCart";

function getCart() {
    return JSON.parse(localStorage.getItem(cartKey)) || [];
}

function saveCart(cart) {
    localStorage.setItem(cartKey, JSON.stringify(cart));
    updateCartCount();
}

// --- CART COUNT UPDATE ---
function updateCartCount() {
    const count = getCart().length;
    document.getElementById("cart-count").textContent = count;
}

// --- ADD TO CART ---
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const cart = getCart();
    cart.push(product);
    saveCart(cart);
}

// --- REMOVE FROM CART ---
function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
}

// --- RENDER PRODUCTS ---
function renderProducts() {
    const container = document.getElementById("products");
    container.innerHTML = products.map(p => `
        <div class="bg-white shadow rounded p-4 flex flex-col items-center">
            <img src="${p.img}" alt="${p.name}" class="w-32 h-32 object-cover mb-2 rounded">
            <h3 class="font-semibold">${p.name}</h3>
            <p class="text-gray-700 mt-1">₦${p.price.toLocaleString()}</p>
            <button class="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join("");
}

// --- RENDER CART PANEL ---
function renderCart() {
    const cart = getCart();
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = cart.length
        ? cart.map((p, i) => `
            <li class="flex justify-between items-center border-b py-1">
                <span>${p.name} - ₦${p.price.toLocaleString()}</span>
                <button class="text-red-500 font-bold" onclick="removeFromCart(${i})">&times;</button>
            </li>
        `).join("")
        : "<li>Your cart is empty 🛒</li>";

    const total = cart.reduce((sum, p) => sum + p.price, 0);
    document.getElementById("cart-total").textContent = `₦${total.toLocaleString()}`;
}

// --- CART BUTTON LOGIC ---
const cartButton = document.getElementById("cart-button");
const cartPanel = document.getElementById("cart-panel");
const closeCart = document.getElementById("close-cart");

cartButton.addEventListener("click", () => {
    renderCart();
    cartPanel.classList.toggle("hidden");
});

closeCart.addEventListener("click", () => {
    cartPanel.classList.add("hidden");
});

// --- INITIALIZE ---
renderProducts();
updateCartCount();
