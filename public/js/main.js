document.addEventListener("DOMContentLoaded", async () => {
    const productContainer = document.getElementById("products");

    try {
        // 🛍️ Fetch products from backend API
        const res = await fetch("/api/products");
        const products = await res.json();

        // 🧱 Build product cards
        productContainer.innerHTML = products.map(p => `
      <div class="bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300">
        <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-lg font-semibold text-gray-800">${p.name}</h2>
          <p class="text-gray-500 text-sm my-2">${p.description}</p>
          <div class="flex justify-between items-center mt-3">
            <span class="text-xl font-bold text-blue-600">$${p.price}</span>
            <button class="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `).join("");

    } catch (err) {
        console.error("❌ Error loading products:", err);
        productContainer.innerHTML = `
      <p class="text-center text-red-500">Failed to load products 😢</p>
    `;
    }
});
