// Global variables
let cart = JSON.parse(localStorage.getItem('coffee-cart')) || [];
updateCartCount();

// Update cart count in the navigation
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(element => {
        element.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    });
}

// Save cart to local storage
function saveCart() {
    localStorage.setItem('coffee-cart', JSON.stringify(cart));
    updateCartCount();
}

// Display notification
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <p>${message}</p>
        <span class="close-notification">&times;</span>
    `;
    
    // Add to the body
    document.body.appendChild(notification);
    
    // Show the notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
    
    // Close button functionality
    notification.querySelector('.close-notification').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
}

// Handle form submissions
document.addEventListener('DOMContentLoaded', function() {
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send this data to a server
            showNotification('Your message has been sent. We\'ll get back to you soon!');
            contactForm.reset();
        });
    }
    
    // Checkout form
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        const paymentCash = document.getElementById('payment-cash');
        const paymentCard = document.getElementById('payment-card');
        const cardDetails = document.getElementById('card-details');
        
        // Toggle card details based on payment method
        if (paymentCash && paymentCard && cardDetails) {
            paymentCash.addEventListener('change', function() {
                cardDetails.classList.add('hidden');
            });
            
            paymentCard.addEventListener('change', function() {
                cardDetails.classList.remove('hidden');
            });
        }
        
        // Handle form submission
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send order and payment data to a server
            showNotification('Your order has been placed successfully!');
            
            // Clear cart and redirect to home page after 2 seconds
            cart = [];
            saveCart();
            
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        });
    }
    
    // Add CSS for notifications
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #4CAF50;
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            transform: translateX(120%);
            transition: transform 0.3s ease;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification.error {
            background-color: #f44336;
        }
        
        .close-notification {
            margin-left: 15px;
            font-size: 20px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
});