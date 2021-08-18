document.getElementById('login-btn').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check user password
    if (userEmail == 'demo@demo.com' && userPassword == '12345') {
        window.location.href = 'banking.html';
    }
    else {
        alert("Please enter correct credentials");
    }
})