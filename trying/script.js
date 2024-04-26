document.getElementById('emailInput').addEventListener('input', function() {
    var emailIcon = document.getElementById('emailIcon');
    if (this.value !== '') {
        emailIcon.classList.remove('hidden');
    } else {
        emailIcon.classList.add('hidden');
    }
});

function validateEmail() {
    var email = document.getElementById('emailInput').value;
    var messageElement = document.getElementById('message');

    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        // If email is valid, display "Good" message
        messageElement.textContent = "Good";
    } else {
        // If email is invalid, display "Try again" message
        messageElement.textContent = "Try again";
    }
}
