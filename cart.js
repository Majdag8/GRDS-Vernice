// Function to update the quantity of an item
function updateQuantity(index, change) {
    const quantitySpan = document.getElementById(`quantity0${index}`);
    const priceSpan = document.querySelectorAll(".halloumiprice, .berlinprice, .beirutprice")[index];
    const pricePerItem = parseFloat(priceSpan.textContent.replace('$', '')) / parseInt(quantitySpan.textContent);

    // Update quantity
    let quantity = parseInt(quantitySpan.textContent);
    quantity = Math.max(0, quantity + change);
    quantitySpan.textContent = quantity;

    // Update item price
    const newPrice = (quantity * pricePerItem).toFixed(2);
    priceSpan.textContent = `$${newPrice}`;

    updateCartTotal();
}

// Update cart total
function updateCartTotal() {
    const prices = document.querySelectorAll(".halloumiprice, .berlinprice, .beirutprice");
    let subtotal = 0;

    prices.forEach(priceSpan => {
        subtotal += parseFloat(priceSpan.textContent.replace('$', ''));
    });

    const deliveryFee = 5.00;
    const total = (subtotal + deliveryFee).toFixed(2);

    document.getElementById("totalamount").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("subtotalamount").textContent = `$${total}`;
}

// Delete an item from the cart
function deleteItem(index) {
    const items = document.querySelectorAll(".itemdetails > div");
    const itemToDelete = items[index];
    if (itemToDelete) {
        itemToDelete.remove();
        updateCartTotal();
    }
}

// Event listeners for quantity buttons and delete buttons
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".quantitybtn").forEach((button, index) => {
        button.addEventListener("click", () => updateQuantity(index, -1));
    });

    document.querySelectorAll(".quantitybtn1").forEach((button, index) => {
        button.addEventListener("click", () => updateQuantity(index, +1));
    });

    document.querySelectorAll(".quantitybtn2").forEach((button, index) => {
        button.addEventListener("click", () => updateQuantity(index, -1));
    });

    document.querySelectorAll("#deletehallomi, #deleteberlin, #deletebeirut").forEach((deleteButton, index) => {
        deleteButton.addEventListener("click", () => deleteItem(index));
    });
});
