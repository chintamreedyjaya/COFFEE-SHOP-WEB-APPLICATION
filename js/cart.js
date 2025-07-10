// DOM Elements
const cartItemsContainer = document.querySelector('.cart-items');
const cartSubtotalElement = document.getElementById('cart-subtotal');
const cartTaxElement = document.getElementById('cart-tax');
const cartTotalElement = document.getElementById('cart-total');
const emptyCartMessage = document.querySelector('.empty-cart-message');
const cartContainer = document.querySelector('.cart-container');
const checkoutBtn = document.getElementById('checkout-btn');
const clearCartBtn = document.getElementById('clear-cart-btn');

// Order summary elements on checkout page
const orderItemsContainer = document.querySelector('.order-items');
const orderSubtotalElement = document.getElementById('order-subtotal');
const orderTaxElement = document.getElementById('order-tax');
const orderTotalElement = document.getElementById('order-total');

// Initialize cart page
document.addEventListener('DOMContentLoaded', function() {
    if (cartItemsContainer) {
        displayCartItems();
        setupCartButtons();
    }
    
    if (orderItemsContainer) {
        displayOrderSummary();
    }
});

// Display cart items
function displayCartItems() {
    if (!cartContainer || !emptyCartMessage) return;
    
    // Check if cart is empty
    if (cart.length === 0) {
        cartContainer.classList.add('hidden');
        emptyCartMessage.classList.remove('hidden');
        return;
    } else {
        cartContainer.classList.remove('hidden');
        emptyCartMessage.classList.add('hidden');
    }
    
    // Clear container
    cartItemsContainer.innerHTML = '';
    
    // Add each item to the cart
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="images/${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-header">
                    <h3 class="cart-item-title">${item.name}</h3>
                    <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                </div>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Update totals
    updateCartTotals();
    
    // Add event listeners to cart item buttons
    const decreaseButtons = document.querySelectorAll('.decrease');
    const increaseButtons = document.querySelectorAll('.increase');
    const removeButtons = document.querySelectorAll('.remove-item');
    
    decreaseButtons.forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });
    
    increaseButtons.forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });
    
    removeButtons.forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
}

// Update cart totals
function updateCartTotals() {
    if (!cartSubtotalElement || !cartTaxElement || !cartTotalElement) return;
    
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.06; // 6% tax
    const total = subtotal + tax;
    
    cartSubtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    cartTaxElement.textContent = `$${tax.toFixed(2)}`;
    cartTotalElement.textContent = `$${total.toFixed(2)}`;
}

// Setup cart buttons
function setupCartButtons() {
    // Change this part in your setupCartButtons function
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        // Check if cart is empty
        if (cart.length === 0) {
            showNotification('Your cart is empty!', 'error');
            return;
        }
        
        // If on cart page, go to checkout page
        if (window.location.pathname.includes('cart.html')) {
            window.location.href = 'checkout.html';
        } 
        // If on checkout page, process the order
        else if (window.location.pathname.includes('checkout.html')) {
            saveOrderToFirestore();
        }
    });
}
    
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            cart = [];
            saveCart();
            displayCartItems();
            showNotification('Cart cleared!');
        });
    }
}

// Decrease item quantity
function decreaseQuantity(e) {
    const itemId = parseInt(e.target.dataset.id);
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            cart.splice(itemIndex, 1);
        }
        
        saveCart();
        displayCartItems();
    }
}

// Increase item quantity
function increaseQuantity(e) {
    const itemId = parseInt(e.target.dataset.id);
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += 1;
        saveCart();
        displayCartItems();
    }
}

// Remove item from cart
function removeFromCart(e) {
    const itemId = parseInt(e.target.dataset.id);
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        const itemName = cart[itemIndex].name;
        cart.splice(itemIndex, 1);
        saveCart();
        displayCartItems();
        showNotification(`${itemName} removed from cart!`);
    }
}

// Add this to your existing cart.js, near the checkout functionality
function saveOrderToFirestore() {
    const user = auth.currentUser;
    if (!user) {
        // Redirect to login if not logged in
        window.location.href = 'login.html?redirect=checkout.html';
        return;
    }
    
    // Get delivery details from form
    const checkoutForm = document.getElementById('checkout-form');
    if (!checkoutForm) return;
    
    const name = checkoutForm.name.value;
    const email = checkoutForm.email.value;
    const phone = checkoutForm.phone.value;
    const address = checkoutForm.address.value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    // Calculate totals
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.06;
    const deliveryFee = 2.99;
    const total = subtotal + tax + deliveryFee;
    
    // Create order object
    const order = {
        userId: user.uid,
        userName: name,
        userEmail: email,
        userPhone: phone,
        deliveryAddress: address,
        paymentMethod: paymentMethod,
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image
        })),
        subtotal: subtotal,
        tax: tax,
        deliveryFee: deliveryFee,
        total: total,
        status: 'pending',
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    // Save to Firestore
    db.collection('orders').add(order)
        .then(docRef => {
            console.log("Order saved with ID:", docRef.id);
            // Clear cart
            cart = [];
            saveCart();
            
            // Show success message
            showNotification("Order placed successfully!");
            
            // Redirect to confirmation page (or home)
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        })
        .catch(error => {
            console.error("Error adding order:", error);
            showNotification("Error placing order. Please try again.", "error");
        });
}

// Display order summary on checkout page
function displayOrderSummary() {
    if (!orderItemsContainer || !orderSubtotalElement || !orderTaxElement || !orderTotalElement) return;
    
    // Clear container
    orderItemsContainer.innerHTML = '';
    
    // Add each item to the order summary
    cart.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <div class="order-item-name">
                <span class="order-item-quantity">${item.quantity}x</span>
                <span>${item.name}</span>
            </div>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        
        orderItemsContainer.appendChild(orderItem);
    });
    
    // Calculate totals
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.06; // 6% tax
    const deliveryFee = 2.99;
    const total = subtotal + tax + deliveryFee;
    
    // Update total elements
    orderSubtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    orderTaxElement.textContent = `$${tax.toFixed(2)}`;
    orderTotalElement.textContent = `$${total.toFixed(2)}`;
}