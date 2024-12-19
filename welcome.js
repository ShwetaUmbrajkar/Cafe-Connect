// Parse URL parameters to get email and password
const params = new URLSearchParams(window.location.search);
const email = params.get('email');
const password = params.get('password');

// Display email and password
document.getElementById('user-email').textContent = email || 'Not provided';
document.getElementById('user-password').textContent = password || 'Not provided';
