document.getElementById('login').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username && password) {
        // Set the redirect URL
        document.getElementById('redirectUrl').value = 'https://example.com'; // Replace with your future link

        // Submit the login form
        document.getElementById('loginForm').submit();
    } else {
        alert('Please enter both username and password.');
    }
});

var modal = document.getElementById('signupModal');
var btn = document.getElementById('signup');
var span = document.getElementsByClassName('close')[0];
var signupBtn = document.getElementById('signupBtn');

btn.onclick = function() {
    modal.style.display = 'flex';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Handle the sign-up form submission
signupBtn.onclick = function(event) {
    event.preventDefault(); // Prevent default form submission
    var email = document.getElementById('email').value;
    if (email) {
        // Manually submit the sign-up form
        document.getElementById('signupForm').submit();
        modal.style.display = 'none';
    } else {
        alert('Please enter an email.');
    }
}
