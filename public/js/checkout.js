const cartKey = "cellineCart";

function getCart() {
    return JSON.parse(localStorage.getItem(cartKey)) || [];
}

function renderCheckout() {
    const cart = getCart();
    const checkoutItems = document.getElementById("checkout-items");
    checkoutItems.innerHTML = cart.length
        ? cart.map(p => `<li class="flex justify-between border-b py-1">${p.name} - ₦${p.price.toLocaleString()}</li>`).join("")
        : "<li>Your cart is empty 🛒</li>";

    const total = cart.reduce((sum, p) => sum + p.price, 0);
    document.getElementById("checkout-total").textContent = `₦${total.toLocaleString()}`;
}

// --- Place Order ---
document.getElementById("place-order").addEventListener("click", () => {
    alert("🎉 Order placed successfully!");
    localStorage.removeItem(cartKey);  // clear cart
    renderCheckout();
});

renderCheckout();
