const form = document.getElementById('signupForm');
const usernameInput = document.getElementById('newUsername');
const emailInput = document.getElementById('newEmail');
const passwordInput = document.getElementById('newPassword');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Validate username
    if (username.length < 6) {
        document.getElementById('usernameError').textContent = 'Username must be at least 6 characters';
        isValid = false;
    } else {
        document.getElementById('usernameError').textContent = '';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and contain at least one capital letter and one number';
        isValid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    if (isValid) {
        alert('Registration successful!');
        form.reset(); // Reset form after successful registration
    }
}
