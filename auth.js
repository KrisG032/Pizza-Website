// Initialize users in localStorage if not exists
if (!localStorage.getItem('users')) {
    const initialUsers = [
        {
            name: 'Admin',
            email: 'admin@pizzashop.com',
            password: 'admin123',
            isAdmin: true
        }
    ];
    localStorage.setItem('users', JSON.stringify(initialUsers));
}

// Handle Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        const users = JSON.parse(localStorage.getItem('users'));
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            if (user.isAdmin) {
                window.location.href = 'admin.html';
            } else {
                window.location.href = 'index.html';
            }
        } else {
            alert('Invalid email or password');
        }
    });
}

// Handle Registration
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        const users = JSON.parse(localStorage.getItem('users'));
        if (users.some(u => u.email === email)) {
            alert('Email already registered');
            return;
        }
        
        const newUser = {
            name,
            email,
            password,
            isAdmin: false
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        
        window.location.href = 'index.html';
    });
}

// Check Authentication Status
function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'login.html';
    }
    return JSON.parse(currentUser);
}

// Check Admin Status
function checkAdmin() {
    const currentUser = checkAuth();
    if (!currentUser.isAdmin) {
        window.location.href = 'index.html';
    }
}

// Logout Function
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
} 