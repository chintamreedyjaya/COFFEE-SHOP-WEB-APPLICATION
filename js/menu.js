// Coffee items data
const coffeeItems = [
    {
        id: 1,
        name: 'Espresso',
        price: 3.99,
        category: 'hot',
        image: 'coffee1.jpg',
        description: 'A concentrated shot of coffee with a rich flavor and crema on top.'
    },
    {
        id: 2,
        name: 'Cappuccino',
        price: 4.99,
        category: 'hot',
        image: 'coffee2.jpg',
        description: 'Espresso with steamed milk and a thick layer of milk foam.'
    },
    {
        id: 3,
        name: 'Latte',
        price: 4.49,
        category: 'hot',
        image: 'coffee3.jpg',
        description: 'Espresso with steamed milk and a small layer of milk foam.'
    },
    {
        id: 4,
        name: 'Iced Coffee',
        price: 3.99,
        category: 'cold',
        image: 'coffee4.jpg',
        description: 'Chilled coffee served with ice and a splash of milk.'
    },
    {
        id: 5,
        name: 'Cold Brew',
        price: 4.99,
        category: 'cold',
        image: 'coffee5.jpg',
        description: 'Coffee brewed with cold water for 12-24 hours, resulting in a smooth, low-acid flavor.'
    },
    {
        id: 6,
        name: 'Caramel Macchiato',
        price: 5.49,
        category: 'specialty',
        image: 'coffee6.jpg',
        description: 'Espresso with vanilla syrup, steamed milk, and caramel drizzle.'
    },
    {
        id: 7,
        name: 'Gingerbread Latte',
        price: 5.49,
        category: 'hot',
        image: 'coffee7.jpg',
        description: 'Sweet and delicately spicy gingerbread flavors mingle with our signature espresso and steamed milk, topped with whipped gingerbread topping.'
    },
    {
        id: 8,
        name: 'Iced Gingerbread Latte',
        price: 5.49,
        category: 'cold',
        image: 'coffee8.jpg',
        description: 'Sweet and delicately spicy gingerbread flavors mingle with our signature espresso and velvety milk, served over ice.'
    },
    {
        id: 9,
        name: 'Vienna Creamy Latte',
        price: 5.99,
        category: 'specialty',
        image: 'coffee9.jpg',
        description: 'A silky blend of espresso, steamed milk, mocha, and Vanilla Mascarpone sauce, topped with luscious mascarpone flavored foam.'
    },
    {
        id: 10,
        name: 'Iced Vienna Creamy Latte',
        price: 5.99,
        category: 'cold',
        image: 'coffee10.jpg',
        description: 'Espresso, milk, mocha, and Vanilla Mascarpone sauce over ice, crowned with velvety mascarpone flavored foam and burnt caramel powder.'
    },
    {
        id: 11,
        name: 'Classic Iced Coffee',
        price: 4.49,
        category: 'cold',
        image: 'coffee11.jpg',
        description: 'Premium coffee made with top 3% Arabica beans, frothy iced shaken espresso flavored with brown sugar and topped with milk.'
    },
    {
        id: 12,
        name: 'Classic Hot Coffee',
        price: 3.99,
        category: 'hot',
        image: 'coffee12.jpg',
        description: 'Premium coffee made with top 3% Arabica beans, paired with condensed milk for an ideal blend of sweetness and caffeine boost.'
    },
    {
        id: 13,
        name: 'Salted Pretzel Caramel Latte',
        price: 5.99,
        category: 'specialty',
        image: 'coffee13.jpg',
        description: 'Signature espresso with steamed milk and salted pretzel syrup, drizzled with caramel sauce and topped with whipped vanilla topping.'
    },
    {
        id: 14,
        name: 'Iced Salted Pretzel Caramel Latte',
        price: 5.99,
        category: 'cold',
        image: 'coffee14.jpg',
        description: 'Signature espresso with milk and salted pretzel syrup, drizzled with caramel sauce and topped with whipped vanilla topping. Served over ice.'
    },
    {
        id: 15,
        name: 'Jaggery Cloud Latte',
        price: 5.49,
        category: 'specialty',
        image: 'coffee15.jpg',
        description: 'Bold, coffee-forward latte topped with a cloud of luscious jaggery flavoured cold foam.'
    },
    {
        id: 16,
        name: 'Bombon Cloud',
        price: 4.99,
        category: 'specialty',
        image: 'coffee16.jpg',
        description: 'A layered treat with sweet condensed milk, blonde double shot ristretto, and smooth coconut flavored foam. Served in a cortado glass.'
    },
    {
        id: 17,
        name: 'Honey Almond Flat White',
        price: 5.49,
        category: 'hot',
        image: 'coffee17.jpg',
        description: 'Your daily cup of coffee gets even better in our Plant-Based Almond special, sweetened with Honey.'
    },
    {
        id: 18,
        name: 'Honey Oat Flat White',
        price: 5.49,
        category: 'hot',
        image: 'coffee18.jpg',
        description: 'Your daily cup of coffee gets even better in our Plant-Based Oat special, sweetened with Honey.'
    },
    {
        id: 19,
        name: 'Blonde Almond Latte',
        price: 5.29,
        category: 'hot',
        image: 'coffee19.jpg',
        description: 'Ditch the dairy with our Plant-Based Almond special, paired with the subtle sweetness of our Signature Blonde Roast Espresso.'
    },
    {
        id: 20,
        name: 'Blonde Jaggery Oat Latte',
        price: 5.29,
        category: 'specialty',
        image: 'coffee20.jpg',
        description: 'Rustic Jaggery sweetness meets subtle and nuanced Blonde Roast Espresso in our Plant-Based Oat special.'
    },
    {
        id: 21,
        name: 'Hazelnut Oat Cortado',
        price: 4.79,
        category: 'hot',
        image: 'coffee21.jpg',
        description: 'Intense Ristretto shots infused with warm Hazelnut notes, your favorite coffee forward compact cup in an all-new Plant-Based Oat avatar.'
    },
    {
        id: 22,
        name: 'Creme Brulee Latte',
        price: 5.99,
        category: 'specialty',
        image: 'coffee22.jpg',
        description: 'A blend of espresso and velvety steamed milk infused with decadent Crème Brulee flavors and topped with Vanilla Caramel flavored sugar.'
    },
    {
        id: 23,
        name: 'Iced Creme Brulee Latte',
        price: 5.99,
        category: 'cold',
        image: 'coffee23.jpg',
        description: 'A blend of espresso and milk infused with decadent Crème Brulee flavors. Served over ice and topped with Vanilla Caramel flavored sugar.'
    },
    {
        id: 24,
        name: 'Cappuccino',
        price: 4.49,
        category: 'hot',
        image: 'coffee24.jpg',
        description: 'Dark, rich in flavor espresso lies in wait under a smoothed and stretched layer of thick foam. The height of our baristas\' craft.'
    },
    {
        id: 25,
        name: 'Caffe Latte',
        price: 4.29,
        category: 'hot',
        image: 'coffee25.jpg',
        description: 'Our dark, rich in flavor espresso balanced with steamed milk and a light layer of foam. A perfect coffee warm up.'
    },
    {
        id: 26,
        name: 'Caramel Macchiato',
        price: 4.99,
        category: 'hot',
        image: 'coffee26.jpg',
        description: 'Freshly steamed milk with vanilla-flavored syrup is marked with espresso and topped with caramel drizzle.'
    },
    {
        id: 27,
        name: 'Chocolate Cappuccino',
        price: 4.79,
        category: 'hot',
        image: 'coffee27.jpg',
        description: 'Dark, rich in flavor espresso and bittersweet cocoa lies in wait under a smoothed and stretched layer of thick foam.'
    },
    {
        id: 28,
        name: 'Caffe Americano',
        price: 3.79,
        category: 'hot',
        image: 'coffee28.jpg',
        description: 'Rich in flavor, full-bodied espresso with hot water in true European style.'
    },
    {
        id: 29,
        name: 'Doppio Espresso',
        price: 3.49,
        category: 'hot',
        image: 'coffee29.jpg',
        description: 'Our smooth signature Espresso Roast and its caramelly sweetness is at the very heart of everything we do.'
    },
    {
        id: 30,
        name: 'Flat White',
        price: 4.49,
        category: 'hot',
        image: 'coffee30.jpg',
        description: 'Expertly steamed milk poured over shots of ristretto and finished with a signature dot.'
    },
    {
        id: 31,
        name: 'Chocolate Chunk Cookie',
        price: 2.99,
        category: 'snacks',
        image: 'snack1.jpg',
        description: 'A rich chocolate chunk cookie with a gooey center, perfect with any coffee.'
    },
    {
        id: 32,
        name: 'Blueberry Muffin',
        price: 3.49,
        category: 'snacks',
        image: 'snack2.jpg',
        description: 'Moist blueberry muffin bursting with fresh blueberries and topped with a sugar sprinkle.'
    },
    {
        id: 33,
        name: 'Avocado Toast',
        price: 6.99,
        category: 'snacks',
        image: 'snack3.jpg',
        description: 'Freshly mashed avocado on artisan multigrain toast, topped with red pepper flakes.'
    },
    {
        id: 34,
        name: 'Chilli Cheese Toast',
        price: 4.49,
        category: 'snacks',
        image: 'snack4.jpg',
        description: 'Crispy toast topped with spicy chilli and melted cheese, a perfect savory snack.'
    },
    {
        id: 35,
        name: 'Tandoori Soya Chaap Wrap',
        price: 6.99,
        category: 'snacks',
        image: 'snack5.jpg',
        description: 'Flavorful tandoori-spiced soya chaap wrapped in a soft tortilla with fresh veggies and mint chutney.'
    },
    {
        id: 36,
        name: 'Mushroom Cheese Melt Baguette',
        price: 5.99,
        category: 'snacks',
        image: 'snack6.jpg',
        description: 'Freshly baked baguette filled with sautéed mushrooms and melted cheese, baked to perfection.'
    },
    {
        id: 37,
        name: 'Pesto Veggie Sourdough',
        price: 6.49,
        category: 'snacks',
        image: 'snack7.jpg',
        description: 'Artisan sourdough bread filled with fresh basil pesto and seasonal vegetables.'
    },
    {
        id: 38,
        name: 'Basil Tomato Mozzarella Sandwich',
        price: 5.99,
        category: 'snacks',
        image: 'snack8.jpg',
        description: 'Classic Caprese sandwich with fresh mozzarella, tomatoes, and basil on rustic bread.'
    },
    {
        id: 39,
        name: 'Spinach & Corn Sandwich',
        price: 5.49,
        category: 'snacks',
        image: 'snack9.jpg',
        description: 'Creamy spinach and sweet corn filling between slices of soft bread, a nutritious and tasty option.'
    },
    {
        id: 40,
        name: 'Paneer Tikka Sandwich',
        price: 6.29,
        category: 'snacks',
        image: 'snack10.jpg',
        description: 'Spiced tandoori paneer with crunchy vegetables and mint chutney in a grilled sandwich.'
    },
    {
        id: 41,
        name: 'Chilli Paneer Sandwich',
        price: 6.29,
        category: 'snacks',
        image: 'snack11.jpg',
        description: 'Spicy Indo-Chinese style chilli paneer with bell peppers in a toasted sandwich.'
    },
    {
        id: 42,
        name: 'Avocado Salsa Sandwich',
        price: 6.99,
        category: 'snacks',
        image: 'snack12.jpg',
        description: 'Creamy avocado with fresh tomato salsa and greens on multigrain bread, a healthy delight.'
    },
    {
        id: 43,
        name: 'Paneer Tikka Grilled Sourdough',
        price: 6.99,
        category: 'snacks',
        image: 'snack13.jpg',
        description: 'Tandoori marinated paneer with grilled vegetables on artisanal sourdough bread.'
    }
    



];

// Display menu items immediately
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing menu...");
    
    const menuItemsContainer = document.querySelector('.menu-items');
    if (!menuItemsContainer) {
        console.error("Could not find menu-items container");
        return;
    }
    
    console.log("Found menu container, displaying items...");
    displayMenuItems(coffeeItems);
    setupFilters();
});

// Display menu items
function displayMenuItems(items) {
    const menuItemsContainer = document.querySelector('.menu-items');
    if (!menuItemsContainer) {
        console.error("Menu items container not found");
        return;
    }
    
    console.log(`Displaying ${items.length} menu items`);
    menuItemsContainer.innerHTML = '';
    
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = `menu-item ${item.category}`;
        menuItem.innerHTML = `
            <div class="menu-item-image">
                <img src="images/${item.image}" alt="${item.name}" onerror="this.src='images/default-coffee.jpg'; console.error('Failed to load image: ${item.image}');">
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <button class="btn add-to-cart" data-id="${item.id}">Add to Cart</button>
            </div>
        `;
        
        menuItemsContainer.appendChild(menuItem);
    });
    
    // Add event listeners to Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Set up filter buttons
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) {
        console.error("Filter buttons not found");
        return;
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter items
            const filter = button.dataset.filter;
            console.log(`Filtering by: ${filter}`);
            
            if (filter === 'all') {
                displayMenuItems(coffeeItems);
            } else {
                const filteredItems = coffeeItems.filter(item => item.category === filter);
                displayMenuItems(filteredItems);
            }
        });
    });
}

// Add item to cart
function addToCart(e) {
    const itemId = parseInt(e.target.dataset.id);
    const item = coffeeItems.find(coffee => coffee.id === itemId);
    
    if (item) {
        // Get cart from localStorage or initialize empty array
        let cart = JSON.parse(localStorage.getItem('coffee-cart')) || [];
        
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === itemId);
        
        if (existingItemIndex !== -1) {
            // Item already in cart, increase quantity
            cart[existingItemIndex].quantity += 1;
        } else {
            // Add new item to cart
            cart.push({
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: 1
            });
        }
        
        // Save cart and show notification
        localStorage.setItem('coffee-cart', JSON.stringify(cart));
        updateCartCount();
        alert(`${item.name} added to cart!`); // Simple alert as fallback
    }
}

// Update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('coffee-cart')) || [];
    const cartCountElements = document.querySelectorAll('#cart-count');
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    
    cartCountElements.forEach(element => {
        element.textContent = count;
    });
}

// Initialize cart count
updateCartCount();