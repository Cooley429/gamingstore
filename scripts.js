let cart = []; // Array to hold cart items

// Add an item to the cart
function addToCart(itemType, itemPrice, selectedOption) {
    cart.push({ name: `${itemType}: ${selectedOption}`, price: itemPrice });
    alert(`${selectedOption} has been added to your cart.`);
    updateCart(); // Update the cart display immediately
}

// Update the console product display dynamically
function updateConsoleInfo() {
    const consoleSelect = document.getElementById('consoleSelect');
    const selectedOption = consoleSelect.options[consoleSelect.selectedIndex];

    document.getElementById('consoleImage').src = selectedOption.dataset.image;
    document.getElementById('consoleTitle').innerText = selectedOption.value;
    document.getElementById('consolePrice').innerText = `$${selectedOption.dataset.price}`;
    document.getElementById('consoleDescription').innerText = selectedOption.dataset.description;
}

// Update the headset product display dynamically
function updateHeadsetInfo() {
    const headsetSelect = document.getElementById('headsetSelect');
    const selectedOption = headsetSelect.options[headsetSelect.selectedIndex];

    document.getElementById('headsetImage').src = selectedOption.dataset.image;
    document.getElementById('headsetTitle').innerText = selectedOption.value;
    document.getElementById('headsetPrice').innerText = `$${selectedOption.dataset.price}`;
    document.getElementById('headsetDescription').innerText = selectedOption.dataset.description;
}

// Update the controller product display dynamically
function updateControllerInfo() {
    const controllerSelect = document.getElementById('controllerSelect');
    const selectedOption = controllerSelect.options[controllerSelect.selectedIndex];

    document.getElementById('controllerImage').src = selectedOption.dataset.image;
    document.getElementById('controllerTitle').innerText = selectedOption.value;
    document.getElementById('controllerPrice').innerText = `$${selectedOption.dataset.price}`;
    document.getElementById('controllerDescription').innerText = selectedOption.dataset.description;
}

// Update the gaming laptop product display dynamically
function updateLaptopInfo() {
    const laptopSelect = document.getElementById('laptopSelect');
    const selectedOption = laptopSelect.options[laptopSelect.selectedIndex];

    document.getElementById('laptopImage').src = selectedOption.dataset.image;
    document.getElementById('laptopTitle').innerText = selectedOption.value;
    document.getElementById('laptopPrice').innerText = `$${selectedOption.dataset.price}`;
    document.getElementById('laptopDescription').innerText = selectedOption.dataset.description;
}

// Update the VR headset product display dynamically
function updateVRInfo() {
    const vrSelect = document.getElementById('vrSelect');
    const selectedOption = vrSelect.options[vrSelect.selectedIndex];

    document.getElementById('vrImage').src = selectedOption.dataset.image;
    document.getElementById('vrTitle').innerText = selectedOption.value;
    document.getElementById('vrPrice').innerText = `$${selectedOption.dataset.price}`;
    document.getElementById('vrDescription').innerText = selectedOption.dataset.description;
}

// Update the gaming chair product display dynamically
function updateChairInfo() {
    const chairSelect = document.getElementById('chairSelect');
    const selectedOption = chairSelect.options[chairSelect.selectedIndex];

    document.getElementById('chairImage').src = selectedOption.dataset.image;
    document.getElementById('chairTitle').innerText = selectedOption.value;
    document.getElementById('chairPrice').innerText = `$${selectedOption.dataset.price}`;
    document.getElementById('chairDescription').innerText = selectedOption.dataset.description;
}

// Show the cart in the modal
function showCart() {
    const cartItems = document.getElementById("cartItems");
    const totalAmount = document.getElementById("totalAmount");

    cartItems.innerHTML = ""; // Clear existing items
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        // Create list item for each cart entry
        const itemElement = document.createElement("li");
        itemElement.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        itemElement.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
        `;

        cartItems.appendChild(itemElement);
    });

    totalAmount.innerText = total.toFixed(2); // Update total
    $('#cartModal').modal('show'); // Show the modal
}

// Remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item from the cart
    updateCart(); // Update the cart display
}

// Update the cart display dynamically
function updateCart() {
    const totalAmount = document.getElementById("totalAmount");
    const cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = ""; // Clear current cart items
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const itemElement = document.createElement("li");
        itemElement.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        itemElement.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
        `;

        cartItems.appendChild(itemElement);
    });

    totalAmount.innerText = total.toFixed(2); // Update the total
}

// Toggle the credit card input fields based on payment method
function togglePaymentFields() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    const creditCardInfo = document.getElementById('creditCardInfo');

    creditCardInfo.style.display = paymentMethod === 'creditCard' ? 'block' : 'none';
}

// Toggle the address field based on delivery option
function toggleAddressField() {
    const deliveryOption = document.getElementById('deliveryOption').value;
    const addressField = document.getElementById('addressField');

    addressField.style.display = (deliveryOption === 'standard' || deliveryOption === 'express') ? 'block' : 'none';
}

// Checkout process
function checkout() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    const deliveryOption = document.getElementById('deliveryOption').value;
    const address = document.querySelector('#addressField input').value || 'N/A';

    const cardNumber = paymentMethod === 'creditCard'
        ? document.querySelector('#creditCardInfo input[placeholder="Card Number"]').value
        : null;
    const expiryDate = paymentMethod === 'creditCard'
        ? document.querySelector('#creditCardInfo input[placeholder="Expiry Date (MM/YY)"]').value
        : null;
    const cvv = paymentMethod === 'creditCard'
        ? document.querySelector('#creditCardInfo input[placeholder="CVV"]').value
        : null;

    if (paymentMethod === 'creditCard' && (!cardNumber || !expiryDate || !cvv)) {
        alert("Please fill in your credit card information.");
        return;
    }

    if ((deliveryOption === 'standard' || deliveryOption === 'express') && !address) {
        alert("Please enter your address for delivery.");
        return;
    }

    alert(`Thank you for your purchase!\n
    Payment Method: ${paymentMethod}\n
    Delivery Option: ${deliveryOption}\n
    Address: ${address}\n
    Card Number: ${paymentMethod === 'creditCard' ? cardNumber : 'N/A'}`);

    cart = []; // Clear cart
    updateCart(); // Refresh cart display
    $('#cartModal').modal('hide'); // Close modal
}
function buyNow(productName, productPrice, productImage, productDescription) {
    const params = new URLSearchParams({
        name: productName,
        price: productPrice,
        image: productImage,
        description: productDescription
    });
    window.location.href = `shop.html?${params.toString()}`;
}
