// ===== Products Array =====
const products = [
    { id: 1, name: "Wireless Earbuds", price: 15000, image: "images/earbuds.jpg" },
    { id: 2, name: "Smart Watch", price: 25000, image: "images/watch.jpg" },
    { id: 3, name: "Bluetooth Speaker", price: 18000, image: "images/speaker.jpg" },
    { id: 4, name: "Phone Charger", price: 5000, image: "images/charger.jpg" },
    { id: 5, name: "Gaming Mouse", price: 12000, image: "images/mouse.jpg" }
];

// ===== Product Container =====
const productContainer = document.getElementById("products");

// ===== Render Products =====
function renderProducts() {
    if (!productContainer) return;

    productContainer.innerHTML = products.map(product => `
    <div class="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover rounded-lg mb-2">
      <h2 class="text-lg font-bold text-center">${product.name}</h2>
      <p class="text-blue-600 font-semibold mt-1">₦${product.price.toLocaleString()}</p>
      <button class="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" onclick="addToCart(${product.id})">
        Add to Cart
      </button>
    </div>
  `).join("");
}

// ===== Cart Functions =====
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId) {
    const cart = getCart();
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        saveCart(cart);
        updateCartCount();
        alert(`${product.name} added to cart 🛒`);
    }
}

// ===== Cart Count Display =====
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.textContent = getCart().length;
    }
}

// ===== Initialize =====
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCartCount();
});
