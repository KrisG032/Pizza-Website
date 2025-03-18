// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Function to display cart items
function displayCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty</p>
                <a href="pizzas.html" class="cta-button">Browse Pizzas</a>
            </div>
        `;
        return;
    }

    let cartHTML = '';
    cart.forEach((item, index) => {
        if (item.isCombo) {
            // Display combo item
            cartHTML += `
                <div class="cart-item combo-item">
                    <div class="combo-images">
                        <img src="${item.image}" alt="Pizza">
                        <i class="fas fa-plus combo-plus"></i>
                        <img src="${item.drinkImage}" alt="Drink">
                    </div>
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <div class="price-details">
                            <span class="original-price">$${item.originalPrice.toFixed(2)}</span>
                            <span class="discounted-price">$${item.price.toFixed(2)}</span>
                            <span class="savings-tag">Save ${item.savings}</span>
                        </div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                    </div>
                    <button class="remove-btn" onclick="removeItem(${index})">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
        } else {
            // Display regular item
            cartHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p>${item.description || ''}</p>
                        <span class="cart-item-price">$${item.price.toFixed(2)}</span>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                    </div>
                    <button class="remove-btn" onclick="removeItem(${index})">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
        }
    });

    cartItemsContainer.innerHTML = cartHTML;
    updateTotal();
}

// Function to update quantity
function updateQuantity(index, change) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = Math.max(1, cart[index].quantity + change);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
}

// Function to remove item
function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
}

// Function to update total
function updateTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 3.99;
    const total = subtotal + deliveryFee;

    const subtotalElement = document.querySelector('#cart-subtotal');
    const totalElement = document.querySelector('#cart-total');

    if (subtotalElement) {
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    }
    if (totalElement) {
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
}

// Function to update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

// Initialize cart display
document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
    updateCartCount();
});

// Handle checkout form submission
const checkoutForm = document.getElementById('checkout-form');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(checkoutForm);
        const orderDetails = Object.fromEntries(formData.entries());
        
        // Get cart items
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Combine order details with cart items
        const order = {
            customer: orderDetails,
            items: cartItems,
            total: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            orderDate: new Date().toISOString()
        };
        
        // Here you would typically send the order to a server
        console.log('Order placed:', order);
        
        // Clear cart
        localStorage.removeItem('cart');
        
        // Show success message
        alert('Thank you for your order! We will contact you shortly.');
        
        // Reset form and update cart display
        checkoutForm.reset();
        displayCartItems();
        updateCartCount();
    });
} 