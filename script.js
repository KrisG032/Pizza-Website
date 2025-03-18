// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Menu items data
const pizzaMenu = [
    {
        id: 'p1',
        name: 'Margherita',
        description: 'Fresh tomatoes, mozzarella, basil, and olive oil',
        price: 12.99,
        slices: 8,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 'p2',
        name: 'Pepperoni',
        description: 'Classic pepperoni, mozzarella, and tomato sauce',
        price: 14.99,
        slices: 8,
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 'p3',
        name: 'Vegetarian',
        description: 'Bell peppers, mushrooms, onions, olives, and tomatoes',
        price: 13.99,
        slices: 8,
        image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
];

const drinksMenu = [
    {
        id: 'd1',
        name: 'Кока-Кола',
        description: 'Класическа Кока-Кола със лед',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Безалкохолни'
    },
    {
        id: 'd2',
        name: 'Спрайт',
        description: 'Освежаваща лимонада',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Безалкохолни'
    },
    {
        id: 'd3',
        name: 'Минерална вода',
        description: 'Натурална изворна вода',
        price: 1.99,
        image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Безалкохолни'
    },
    {
        id: 'd4',
        name: 'Фанта',
        description: 'Освежаваща портокалова напитка',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Безалкохолни'
    },
    {
        id: 'd5',
        name: 'Студен чай',
        description: 'Освежаващ студен чай с лимон',
        price: 2.49,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Безалкохолни'
    },
    {
        id: 'd6',
        name: 'Лимонада',
        description: 'Прясно приготвена домашна лимонада',
        price: 3.49,
        image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Безалкохолни'
    }
];

// Combo Deals
const comboDeals = {
    perfectPair: {
        id: 'combo1',
        name: 'Perfect Pair Combo',
        description: 'Any large pizza with a refreshing drink',
        originalPrice: 20.98,
        discountedPrice: 16.99,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        drinkImage: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        savings: '20%'
    }
};

// Shopping cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Pizza menu data with type and sizes
const menuItems = [
    {
        name: "Маргарита",
        description: "Доматен сос, моцарела, босилек",
        price: {
            small: 10.99,
            medium: 12.99,
            large: 14.99
        },
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        type: "vegetarian"
    },
    {
        name: "Пеперони",
        description: "Доматен сос, моцарела, пеперони",
        price: {
            small: 12.99,
            medium: 14.99,
            large: 16.99
        },
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        type: "non-vegetarian"
    },
    {
        name: "Вегетарианска",
        description: "Доматен сос, моцарела, гъби, чушки, лук, маслини",
        price: {
            small: 11.99,
            medium: 13.99,
            large: 15.99
        },
        image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        type: "vegetarian"
    },
    {
        name: "Месна Фиеста",
        description: "Доматен сос, моцарела, пеперони, бекон, шунка",
        price: {
            small: 13.99,
            medium: 15.99,
            large: 17.99
        },
        image: "https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        type: "non-vegetarian"
    }
];

let currentFilters = {
    type: 'all',
    size: 'medium'
};

// Function to display menu items with filters
function displayMenuItems() {
    const menuContainer = document.getElementById('pizza-menu');
    if (!menuContainer) return;

    // Get the latest menu items from localStorage
    const menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];

    const filteredItems = menuItems.filter(item => {
        if (currentFilters.type === 'all') return true;
        return item.type === currentFilters.type;
    });

    let menuHTML = '';
    filteredItems.forEach(item => {
        const price = item.price[currentFilters.size] || item.price.medium;
        menuHTML += `
            <div class="menu-item" data-type="${item.type}">
                <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="price">$${price.toFixed(2)}</span>
                <button class="add-to-cart" onclick="addToCart({
                    name: '${item.name}',
                    price: ${price},
                    image: '${item.image}',
                    size: '${currentFilters.size}'
                })">
                    Добави в кошницата
                </button>
            </div>
        `;
    });

    menuContainer.innerHTML = menuHTML;
}

// Function to handle filter clicks
function handleFilterClick(filterType, value) {
    const buttons = document.querySelectorAll(`[data-${filterType}]`);
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    currentFilters[filterType] = value;
    displayMenuItems();
}

// Initialize filters and menu
document.addEventListener('DOMContentLoaded', function() {
    // Initialize menuItems in localStorage if not exists
    if (!localStorage.getItem('menuItems')) {
        localStorage.setItem('menuItems', JSON.stringify(menuItems));
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const type = this.dataset.type;
            const size = this.dataset.size;
            if (type) handleFilterClick('type', type);
            if (size) handleFilterClick('size', size);
        });
    });
    
    displayMenuItems();
    updateCartCount();
    updateAuthDisplay();
});

// Function to display drinks
function displayDrinks() {
    const drinksContainer = document.getElementById('drinks-menu');
    if (!drinksContainer) return;

    let drinksHTML = '';
    drinksMenu.forEach(drink => {
        drinksHTML += `
            <div class="drink-item">
                <img src="${drink.image}" alt="${drink.name}">
                <div class="drink-info">
                    <h3>${drink.name}</h3>
                    <p>${drink.description}</p>
                    <span class="price">$${drink.price.toFixed(2)}</span>
                    <button class="add-to-cart" onclick="addToCart({
                        id: '${drink.id}',
                        name: '${drink.name}',
                        price: ${drink.price},
                        image: '${drink.image}',
                        quantity: 1,
                        type: 'drink'
                    })">
                        Добави в кошницата
                    </button>
                </div>
            </div>
        `;
    });

    drinksContainer.innerHTML = drinksHTML;
}

// Initialize the menu based on current page
function initializeMenu() {
    const pizzaMenuContainer = document.getElementById('pizza-menu');
    const drinksMenuContainer = document.getElementById('drinks-menu');

    if (pizzaMenuContainer) {
        displayMenuItems();
    }

    if (drinksMenuContainer) {
        displayDrinks();
    }

    updateCartCount();
}

// Create menu item element
function createMenuItem(item, type) {
    const div = document.createElement('div');
    div.className = 'menu-item';
    
    div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="menu-item-image">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        ${type === 'pizza' ? `<p>Slices: ${item.slices}</p>` : ''}
        <p class="price">$${item.price.toFixed(2)}</p>
        <button class="add-to-cart" onclick="addToCart('${item.id}', '${type}')">Add to Cart</button>
    `;
    
    return div;
}

// Function to display cart items
function displayCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    if (!cartItemsContainer) return;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <p>Вашата кошница е празна</p>
                <a href="pizzas.html" class="cta-button">Разгледайте нашите пици</a>
            </div>
        `;
        updateCartTotals();
        return;
    }

    let cartHTML = '';
    cart.forEach((item, index) => {
        // Ensure item has all required properties
        if (!item || typeof item !== 'object') return;

        // Get the price, handling both direct price and size-based prices
        let price = 0;
        if (typeof item.price === 'object' && item.size) {
            price = item.price[item.size] || 0;
        } else if (typeof item.price === 'number') {
            price = item.price;
        }

        // Get the name, handling both direct name and size-based names
        let displayName = item.name || 'Unknown Item';
        if (item.size) {
            displayName = `${displayName} (${item.size})`;
        }

        cartHTML += `
            <div class="cart-item">
                <img src="${item.image || ''}" alt="${displayName}">
                <div class="cart-item-details">
                    <h3>${displayName}</h3>
                    <span class="cart-item-price">$${price.toFixed(2)}</span>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                        <span class="quantity">${item.quantity || 1}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-btn" onclick="removeItem(${index})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
    });

    cartItemsContainer.innerHTML = cartHTML;
    updateCartTotals();
}

// Function to calculate cart totals
function calculateCartTotals() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const subtotal = cart.reduce((sum, item) => {
        // Get the price, handling both direct price and size-based prices
        let price = 0;
        if (typeof item.price === 'object' && item.size) {
            price = item.price[item.size] || 0;
        } else if (typeof item.price === 'number') {
            price = item.price;
        }
        return sum + (price * (item.quantity || 1));
    }, 0);
    
    const deliveryFee = cart.length > 0 ? 3.99 : 0;
    const total = subtotal + deliveryFee;
    
    return { subtotal, deliveryFee, total };
}

// Function to add item to cart
function addToCart(item) {
    // Check if item is an object (from filtered menu) or an ID (from old menu)
    if (typeof item === 'object') {
        // Handle new filtered menu items
        const cartItem = {
            id: `${item.name}-${item.size}`, // Create unique ID based on name and size
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1,
            size: item.size
        };

        const existingItem = cart.find(i => i.id === cartItem.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push(cartItem);
        }
    } else {
        // Handle old menu items (by ID)
        const itemId = item;
        const type = arguments[1];
        const menuItem = type === 'pizza' ? 
            pizzaMenu.find(p => p.id === itemId) : 
            drinksMenu.find(d => d.id === itemId);

        if (!menuItem) return; // Exit if item not found

        const existingItem = cart.find(cartItem => cartItem.id === itemId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...menuItem,
                quantity: 1
            });
        }
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count and totals
    updateCartCount();
    updateCartTotals();
    
    // Show success message
    alert('Item added to cart!');
    
    // Redirect to cart page
    window.location.href = 'cart.html';
}

// Function to update cart totals
function updateCartTotals() {
    const { subtotal, deliveryFee, total } = calculateCartTotals();
    
    const subtotalElement = document.getElementById('cart-subtotal');
    const totalElement = document.getElementById('cart-total');
    
    if (subtotalElement) {
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    }
    
    if (totalElement) {
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
}

// Function to remove item from cart
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
    updateCartTotals();
}

// Function to update quantity
function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = Math.max(1, cart[index].quantity + change);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
    updateCartTotals();
}

// Function to add combo to cart
function addComboToCart(comboId) {
    let combo = comboDeals[comboId];
    if (!combo) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add combo as a special item
    cart.push({
        id: combo.id,
        name: combo.name,
        description: combo.description,
        price: combo.discountedPrice,
        image: combo.image,
        isCombo: true,
        quantity: 1,
        originalPrice: combo.originalPrice,
        savings: combo.savings,
        drinkImage: combo.drinkImage
    });

    // Update cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count and totals
    updateCartCount();
    updateCartTotals();
    
    // Redirect to cart page
    window.location.href = 'cart.html';
}

// Add event listener to combo deal button
document.addEventListener('DOMContentLoaded', function() {
    const comboDealButton = document.querySelector('.combo-deal .promo-button');
    if (comboDealButton) {
        comboDealButton.addEventListener('click', function(e) {
            e.preventDefault();
            addComboToCart('perfectPair');
        });
    }
});

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Open cart modal
function openCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'block';
    updateCartDisplay();
}

// Close cart modal
function closeCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'none';
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        
        itemDiv.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
            </div>
        `;
        
        cartItems.appendChild(itemDiv);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    closeCart();
    const checkoutModal = document.getElementById('checkout-modal');
    checkoutModal.style.display = 'block';
}

// Close checkout modal
function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'none';
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    // Display cart items if we're on the cart page
    const cartItemsContainer = document.querySelector('.cart-items');
    if (cartItemsContainer) {
        displayCartItems();
    }
    
    // Add event listener for checkout form
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }

            const { subtotal, deliveryFee, total } = calculateCartTotals();

            // Create order summary HTML
            let orderSummaryHTML = '<div class="order-summary">';
            orderSummaryHTML += '<h3>Your Order Summary:</h3>';
            
            cart.forEach(item => {
                orderSummaryHTML += `
                    <div class="order-item">
                        <img src="${item.image}" alt="${item.name}" style="width: 100px; height: 100px; object-fit: cover;">
                        <div class="order-item-details">
                            <h4>${item.name}</h4>
                            <p>Quantity: ${item.quantity}</p>
                            <p>Price per item: $${item.price.toFixed(2)}</p>
                            <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                `;
            });

            orderSummaryHTML += `
                <div class="order-totals">
                    <p>Subtotal: $${subtotal.toFixed(2)}</p>
                    <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                    <p class="total">Total: $${total.toFixed(2)}</p>
                </div>
            `;

            // Add customer details
            const orderDetails = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value,
                notes: document.getElementById('notes').value,
                items: cart,
                subtotal: subtotal,
                deliveryFee: deliveryFee,
                total: total
            };

            orderSummaryHTML += `
                <div class="customer-details">
                    <h3>Delivery Details:</h3>
                    <p><strong>Name:</strong> ${orderDetails.name}</p>
                    <p><strong>Email:</strong> ${orderDetails.email}</p>
                    <p><strong>Phone:</strong> ${orderDetails.phone}</p>
                    <p><strong>Address:</strong> ${orderDetails.address}</p>
                    ${orderDetails.notes ? `<p><strong>Notes:</strong> ${orderDetails.notes}</p>` : ''}
                </div>
            </div>`;

            // Create and show the order confirmation modal
            const orderModal = document.createElement('div');
            orderModal.className = 'order-modal';
            orderModal.innerHTML = `
                <div class="order-modal-content">
                    ${orderSummaryHTML}
                    <div class="order-modal-buttons">
                        <button class="confirm-order">Confirm Order</button>
                        <button class="cancel-order">Edit Order</button>
                    </div>
                </div>
            `;

            document.body.appendChild(orderModal);

            // Add event listeners for the modal buttons
            orderModal.querySelector('.confirm-order').addEventListener('click', function() {
                // Log order details
                console.log('Order placed:', orderDetails);
                
                // Clear cart and localStorage
                localStorage.removeItem('cart');
                cart.length = 0;
                
                // Update displays
                updateCartCount();
                updateCartTotals();
                
                // Remove the modal
                orderModal.remove();
                
                // Show success message and redirect
                alert('Thank you for your order! We will deliver it shortly.');
                window.location.href = 'index.html';
            });

            orderModal.querySelector('.cancel-order').addEventListener('click', function() {
                orderModal.remove();
            });
        });
    }

    // Update cart count
    updateCartCount();
});

// Add CSS styles for the order modal
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .order-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .order-modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        max-width: 600px;
        max-height: 80vh;
        overflow-y: auto;
    }

    .order-item {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
    }

    .order-item-details {
        flex: 1;
    }

    .order-totals {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 2px solid #eee;
    }

    .total {
        font-size: 1.2em;
        font-weight: bold;
        color: #e31837;
    }

    .customer-details {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 2px solid #eee;
    }

    .order-modal-buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .confirm-order, .cancel-order {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .confirm-order {
        background-color: #4CAF50;
        color: white;
    }

    .cancel-order {
        background-color: #f44336;
        color: white;
    }
`;
document.head.appendChild(styleSheet);

// Toggle user dropdown menu
function toggleUserDropdown(event) {
    event.preventDefault();
    const dropdown = document.querySelector('.user-dropdown');
    dropdown.classList.toggle('show');

    // Close dropdown when clicking outside
    document.addEventListener('click', function closeDropdown(e) {
        if (!e.target.closest('.user-menu')) {
            dropdown.classList.remove('show');
            document.removeEventListener('click', closeDropdown);
        }
    });
}

// Handle user authentication display
function updateAuthDisplay() {
    const currentUser = localStorage.getItem('currentUser');
    const userMenu = document.getElementById('userMenu');
    const authButtons = document.getElementById('authButtons');
    const userName = document.getElementById('userName');
    const adminLink = document.getElementById('adminLink');

    if (currentUser) {
        const user = JSON.parse(currentUser);
        if (userMenu) {
            userMenu.style.display = 'block';
            userName.textContent = user.name;
            userMenu.classList.add('logged-in');
        }
        if (authButtons) {
            authButtons.style.display = 'none';
        }
        if (adminLink && user.isAdmin) {
            adminLink.style.display = 'block';
        }
    } else {
        if (userMenu) {
            userMenu.style.display = 'none';
            userMenu.classList.remove('logged-in');
        }
        if (authButtons) {
            authButtons.style.display = 'flex';
        }
        if (adminLink) {
            adminLink.style.display = 'none';
        }
    }
}

// Logout function
function logout() {
    // Clear all user-related data
    localStorage.removeItem('currentUser');
    
    // Clear cart data (optional - uncomment if you want to clear cart on logout)
    // localStorage.removeItem('cart');
    // cart = [];
    
    // Update the display
    const userMenu = document.getElementById('userMenu');
    const authButtons = document.getElementById('authButtons');
    const adminLink = document.getElementById('adminLink');

    if (userMenu) userMenu.style.display = 'none';
    if (authButtons) authButtons.style.display = 'flex';
    if (adminLink) adminLink.style.display = 'none';

    // Show logout message
    alert('You have been successfully logged out!');

    // Redirect to home page
    window.location.href = 'index.html';
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    const userMenu = document.querySelector('.user-menu');
    const dropdown = document.querySelector('.user-dropdown');
    
    if (!userMenu?.contains(e.target) && dropdown?.classList.contains('show')) {
        dropdown.classList.remove('show');
    }
});

// Add styles for user menu
const authStyles = document.createElement('style');
authStyles.textContent = `
    .user-menu {
        position: relative;
        display: none;
    }
    
    .user-name {
        display: flex;
        align-items: center;
        gap: 5px;
        color: #fff;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
    }
    
    .user-name:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .user-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        background: white;
        border-radius: 4px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        display: none;
        min-width: 200px;
        z-index: 1000;
    }
    
    .user-dropdown.show {
        display: block;
    }
    
    .user-dropdown a {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 16px;
        color: #333;
        text-decoration: none;
        transition: background-color 0.3s;
    }
    
    .user-dropdown a:hover {
        background-color: #f5f5f5;
    }
    
    .user-dropdown i {
        width: 20px;
    }
`;
document.head.appendChild(authStyles);

// Initialize auth display when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateAuthDisplay();
    // ... rest of your existing DOMContentLoaded code ...
});

// User Authentication Functions
function login(email, password) {
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Store current user in localStorage
        localStorage.setItem('currentUser', JSON.stringify({
            name: user.name,
            email: user.email,
            orders: user.orders || []
        }));
        
        // Update UI
        updateAuthDisplay();
        
        // Redirect to home page
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password');
    }
}

function register(name, email, password) {
    // Get existing users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if user already exists
    if (users.find(u => u.email === email)) {
        alert('User with this email already exists');
        return;
    }
    
    // Add new user
    users.push({
        name,
        email,
        password,
        orders: []
    });
    
    // Save updated users array
    localStorage.setItem('users', JSON.stringify(users));
    
    // Log in the new user
    login(email, password);
}

function logout() {
    // Clear current user from localStorage
    localStorage.removeItem('currentUser');
    
    // Update UI
    updateAuthDisplay();
    
    // Show logout message
    alert('You have been successfully logged out!');
    
    // Redirect to home page
    window.location.href = 'index.html';
}

// Profile Management Functions
function updateProfile(name) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return;
    
    // Update current user
    currentUser.name = name;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Update in users array
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex].name = name;
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    // Update UI
    updateAuthDisplay();
    alert('Profile updated successfully!');
}

function changePassword(currentPassword, newPassword) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return;
    
    // Get users array
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    
    if (userIndex !== -1 && users[userIndex].password === currentPassword) {
        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Password changed successfully!');
    } else {
        alert('Current password is incorrect');
    }
}

// Order History Functions
function addOrderToHistory(order) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return;
    
    // Get users array
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    
    if (userIndex !== -1) {
        // Add order to user's orders
        if (!users[userIndex].orders) {
            users[userIndex].orders = [];
        }
        
        const orderWithDate = {
            ...order,
            date: new Date().toISOString(),
            orderId: generateOrderId()
        };
        
        users[userIndex].orders.unshift(orderWithDate);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Update current user's orders
        currentUser.orders = users[userIndex].orders;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
}

function displayOrderHistory() {
    const orderHistory = document.getElementById('orderHistory');
    if (!orderHistory) return;
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || !currentUser.orders || currentUser.orders.length === 0) {
        orderHistory.innerHTML = '<p>No orders yet</p>';
        return;
    }
    
    let ordersHTML = '';
    currentUser.orders.forEach(order => {
        ordersHTML += `
            <div class="order-item">
                <div class="order-header">
                    <span class="order-date">${new Date(order.date).toLocaleDateString()}</span>
                    <span class="order-total">$${order.total.toFixed(2)}</span>
                </div>
                <div class="order-details">
                    ${order.items.map(item => `
                        <div class="order-product">
                            <img src="${item.image}" alt="${item.name}">
                            <div>
                                <h4>${item.name}</h4>
                                <p>Quantity: ${item.quantity}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    orderHistory.innerHTML = ordersHTML;
}

// Helper Functions
function generateOrderId() {
    return 'ORD' + Date.now() + Math.random().toString(36).substr(2, 5);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // ... existing DOMContentLoaded code ...
    
    // Handle login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            login(email, password);
        });
    }
    
    // Handle register form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            register(name, email, password);
        });
    }
    
    // Handle profile form
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        // Populate form with current user data
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            document.getElementById('name').value = currentUser.name;
            document.getElementById('email').value = currentUser.email;
        }
        
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            updateProfile(name);
        });
    }
    
    // Handle password change form
    const passwordForm = document.getElementById('passwordForm');
    if (passwordForm) {
        passwordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (newPassword !== confirmPassword) {
                alert('New passwords do not match');
                return;
            }
            
            changePassword(currentPassword, newPassword);
        });
    }
    
    // Display order history if on account page
    if (document.getElementById('orderHistory')) {
        displayOrderHistory();
    }
    
    // Update checkout form to save orders
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        const originalSubmitHandler = checkoutForm.onsubmit;
        checkoutForm.onsubmit = function(e) {
            e.preventDefault();
            
            // Get cart and form data
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const { subtotal, deliveryFee, total } = calculateCartTotals();
            
            const order = {
                items: cart,
                subtotal,
                deliveryFee,
                total,
                customerDetails: {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    address: document.getElementById('address').value,
                    notes: document.getElementById('notes').value
                }
            };
            
            // Add order to history
            addOrderToHistory(order);
            
            // Continue with original submit handler
            if (originalSubmitHandler) {
                originalSubmitHandler.call(this, e);
            }
        };
    }
}); 