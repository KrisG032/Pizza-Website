// Check if user is admin
checkAdmin();

// Initialize pizzas in localStorage if not exists
if (!localStorage.getItem('pizzas')) {
    localStorage.setItem('pizzas', JSON.stringify(menuItems));
}

// Get DOM elements
const pizzaForm = document.getElementById('pizzaForm');
const pizzaList = document.getElementById('pizzaList');

// Toggle pizza form
function togglePizzaForm() {
    const form = document.getElementById('pizzaForm');
    form.classList.toggle('show');
    if (!form.classList.contains('show')) {
        resetForm();
    }
}

// Reset form
function resetForm() {
    pizzaForm.reset();
    document.getElementById('editPizzaId').value = '';
    pizzaForm.querySelector('button[type="submit"]').textContent = 'Save Pizza';
}

// Generate unique ID
function generateId() {
    return 'p' + Date.now();
}

// Display pizzas
function displayPizzas() {
    const pizzas = JSON.parse(localStorage.getItem('pizzas')) || [];
    pizzaList.innerHTML = '';

    pizzas.forEach((pizza, index) => {
        const card = document.createElement('div');
        card.className = 'pizza-card';
        card.innerHTML = `
            <img src="${pizza.image}" alt="${pizza.name}">
            <h3>${pizza.name}</h3>
            <p>${pizza.description}</p>
            <p>Type: ${pizza.type}</p>
            <p>Prices:</p>
            <ul>
                <li>Small: $${pizza.price.small.toFixed(2)}</li>
                <li>Medium: $${pizza.price.medium.toFixed(2)}</li>
                <li>Large: $${pizza.price.large.toFixed(2)}</li>
            </ul>
            <div class="actions">
                <button class="edit-btn" onclick="editPizza(${index})">Edit</button>
                <button class="delete-btn" onclick="deletePizza(${index})">Delete</button>
            </div>
        `;
        pizzaList.appendChild(card);
    });
}

// Edit pizza
function editPizza(index) {
    const pizzas = JSON.parse(localStorage.getItem('pizzas'));
    const pizza = pizzas[index];

    document.getElementById('editPizzaId').value = index;
    document.getElementById('pizzaName').value = pizza.name;
    document.getElementById('pizzaDescription').value = pizza.description;
    document.getElementById('pizzaImage').value = pizza.image;
    document.getElementById('priceSmall').value = pizza.price.small;
    document.getElementById('priceMedium').value = pizza.price.medium;
    document.getElementById('priceLarge').value = pizza.price.large;
    document.getElementById('pizzaType').value = pizza.type;

    pizzaForm.classList.add('show');
    pizzaForm.querySelector('button[type="submit"]').textContent = 'Update Pizza';
}

// Delete pizza
function deletePizza(index) {
    if (confirm('Are you sure you want to delete this pizza?')) {
        const pizzas = JSON.parse(localStorage.getItem('pizzas'));
        pizzas.splice(index, 1);
        localStorage.setItem('pizzas', JSON.stringify(pizzas));
        displayPizzas();
    }
}

// Handle form submission
pizzaForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const pizzaData = {
        id: generateId(),
        name: document.getElementById('pizzaName').value,
        description: document.getElementById('pizzaDescription').value,
        image: document.getElementById('pizzaImage').value,
        price: {
            small: parseFloat(document.getElementById('priceSmall').value),
            medium: parseFloat(document.getElementById('priceMedium').value),
            large: parseFloat(document.getElementById('priceLarge').value)
        },
        type: document.getElementById('pizzaType').value,
        slices: 8,
        isAvailable: true
    };

    const editIndex = document.getElementById('editPizzaId').value;
    let pizzas = JSON.parse(localStorage.getItem('pizzas')) || [];
    let menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];

    if (editIndex === '') {
        // Add new pizza
        pizzas.push(pizzaData);
        // Also add to menuItems
        menuItems.push(pizzaData);
        alert('Pizza added successfully!');
    } else {
        // Update existing pizza
        pizzas[editIndex] = { ...pizzas[editIndex], ...pizzaData };
        // Update in menuItems as well
        const menuItemIndex = menuItems.findIndex(item => item.id === pizzaData.id);
        if (menuItemIndex !== -1) {
            menuItems[menuItemIndex] = { ...menuItems[menuItemIndex], ...pizzaData };
        } else {
            menuItems.push(pizzaData);
        }
        alert('Pizza updated successfully!');
    }

    // Save both arrays
    localStorage.setItem('pizzas', JSON.stringify(pizzas));
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
    
    resetForm();
    pizzaForm.classList.remove('show');
    displayPizzas();
});

// Initialize display
document.addEventListener('DOMContentLoaded', function() {
    // Check admin status
    checkAdmin();
    // Display existing pizzas
    displayPizzas();
}); 