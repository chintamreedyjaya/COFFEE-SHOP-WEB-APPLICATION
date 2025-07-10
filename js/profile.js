// Get DOM elements
const userNameElement = document.getElementById('user-name');
const userEmailElement = document.getElementById('user-email');
const profileTabs = document.querySelectorAll('.profile-menu li');
const tabContents = document.querySelectorAll('.profile-tab');
const updateProfileForm = document.getElementById('update-profile-form');

// Check if user is logged in
auth.onAuthStateChanged(user => {
    if (user) {
        // Load user data
        db.collection('users').doc(user.uid).get()
            .then(doc => {
                if (doc.exists) {
                    const userData = doc.data();
                    
                    // Update UI
                    userNameElement.textContent = userData.name;
                    userEmailElement.textContent = userData.email;
                    
                    // Fill profile form
                    if (updateProfileForm) {
                        updateProfileForm.name.value = userData.name;
                        updateProfileForm.email.value = userData.email;
                        updateProfileForm.phone.value = userData.phone || '';
                        updateProfileForm.address.value = userData.address || '';
                    }
                    
                    // Load orders
                    loadOrders(user.uid);
                    
                    // Load favorites
                    loadFavorites(user.uid);
                } else {
                    console.log("No such document!");
                }
            })
            .catch(error => {
                console.error("Error getting document:", error);
            });
    } else {
        // Redirect to login
        window.location.href = 'login.html';
    }
});

// Tab navigation
profileTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        profileTabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to selected tab and content
        tab.classList.add('active');
        const tabId = tab.dataset.tab + '-tab';
        document.getElementById(tabId).classList.add('active');
    });
});

// Update profile
if (updateProfileForm) {
    updateProfileForm.addEventListener('submit', e => {
        e.preventDefault();
        
        const user = auth.currentUser;
        if (user) {
            // Update user data
            db.collection('users').doc(user.uid).update({
                name: updateProfileForm.name.value,
                phone: updateProfileForm.phone.value,
                address: updateProfileForm.address.value
            })
            .then(() => {
                userNameElement.textContent = updateProfileForm.name.value;
                showNotification('Profile updated successfully!');
            })
            .catch(error => {
                console.error("Error updating document:", error);
                showNotification('Error updating profile.', 'error');
            });
        }
    });
}

// Load orders
function loadOrders(userId) {
    const ordersList = document.querySelector('.orders-list');
    if (!ordersList) return;
    
    db.collection('orders')
        .where('userId', '==', userId)
        .orderBy('createdAt', 'desc')
        .get()
        .then(snapshot => {
            if (snapshot.empty) {
                ordersList.innerHTML = '<p class="empty-message">You haven\'t placed any orders yet.</p>';
                return;
            }
            
            ordersList.innerHTML = '';
            snapshot.forEach(doc => {
                const order = doc.data();
                const orderDate = new Date(order.createdAt.toDate()).toLocaleDateString();
                
                const orderElement = document.createElement('div');
                orderElement.className = 'order-item';
                orderElement.innerHTML = `
                    <div class="order-header">
                        <div>
                            <h4>Order #${doc.id.slice(-6)}</h4>
                            <p>${orderDate}</p>
                        </div>
                        <span class="order-status ${order.status}">${order.status}</span>
                    </div>
                    <div class="order-details">
                        <p>${order.items.length} item(s) - Total: $${order.total.toFixed(2)}</p>
                    </div>
                    <button class="btn-small view-order" data-id="${doc.id}">View Details</button>
                `;
                
                ordersList.appendChild(orderElement);
            });
            
            // Add event listeners to view order buttons
            const viewButtons = document.querySelectorAll('.view-order');
            viewButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Show order details
                    // You can implement a modal or redirect to a detailed view
                    console.log('View order:', button.dataset.id);
                });
            });
        })
        .catch(error => {
            console.error("Error getting orders:", error);
        });
}

// Load favorites
function loadFavorites(userId) {
    const favoritesList = document.querySelector('.favorites-list');
    if (!favoritesList) return;
    
    db.collection('favorites')
        .where('userId', '==', userId)
        .get()
        .then(snapshot => {
            if (snapshot.empty) {
                favoritesList.innerHTML = '<p class="empty-message">You haven\'t added any favorites yet.</p>';
                return;
            }
            
            favoritesList.innerHTML = '';
            snapshot.forEach(doc => {
                const favorite = doc.data();
                
                const favoriteElement = document.createElement('div');
                favoriteElement.className = 'favorite-item';
                favoriteElement.innerHTML = `
                    <div class="favorite-image">
                        <img src="images/${favorite.image}" alt="${favorite.name}">
                    </div>
                    <div class="favorite-details">
                        <h4>${favorite.name}</h4>
                        <p>$${favorite.price.toFixed(2)}</p>
                    </div>
                    <div class="favorite-actions">
                        <button class="btn-small add-to-cart-favorite" data-id="${favorite.productId}">Add to Cart</button>
                        <button class="btn-small remove-favorite" data-id="${doc.id}">Remove</button>
                    </div>
                `;
                
                favoritesList.appendChild(favoriteElement);
            });
            
            // Add event listeners to buttons
            // ... (implement add to cart and remove functionality)
        })
        .catch(error => {
            console.error("Error getting favorites:", error);
        });
}