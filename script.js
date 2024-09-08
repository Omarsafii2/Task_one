document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('responseMessage').textContent = '';
    document.getElementById('loadingMessage').textContent = 'Signing in...';

    // Get the values from the form
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple validation
    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required.';
        document.getElementById('loadingMessage').textContent = '';
        return;
    }
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        document.getElementById('loadingMessage').textContent = '';
        return;
    }

    // Simulate an authentication process (replace with actual logic)
    setTimeout(() => {
        const validUsername = 'user';
        const validPassword = 'pass';

        if (username === validUsername && password === validPassword) {
            document.getElementById('responseMessage').textContent = 'Sign In Successful!';
            document.getElementById('responseMessage').classList.add('success');
            document.getElementById('loadingMessage').textContent = '';

            // Redirect or perform additional actions
            // window.location.href = 'dashboard.html'; // example redirect
        } else {
            document.getElementById('responseMessage').textContent = 'Invalid Username or Password.';
            document.getElementById('loadingMessage').textContent = '';
        }
    }, 1000); // Simulated delay for demonstration
});

// Real-time validation
document.getElementById('username').addEventListener('input', function() {
    const username = this.value.trim();
    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username cannot be empty.';
    } else {
        document.getElementById('usernameError').textContent = '';
    }
});

document.getElementById('password').addEventListener('input', function() {
    const password = this.value.trim();
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password cannot be empty.';
    } else {
        document.getElementById('passwordError').textContent = '';
    }
});