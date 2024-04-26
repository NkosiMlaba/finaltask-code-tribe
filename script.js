
const paragraphData = [`We're coming soon Hello fellow shoppers! We're currently building our new
fashion store. Add your email below to stay up-to-date with announcements
and our launch deals. Email Address`]

function loadContent() {
    
    // nav
    const logoImage = {
        "imagePath": "images/hero-mobile.jpg",
        "alternativeText": "logo",
        "className": ""
    }

    logoIcon = `<img class="${logoImage[imagePath]}" src="images/logo.svg" alt="">
                </img>`
    document.getElementById('logo').innerHTML = logoIcon;


    // picture


    // title


    // paragraph


    //footer

}

const errorImage = `<img src="images/icon-error.svg" alt="error icon" ">`

window.addEventListener('load', loadContent);

function validateEmail() {
    var email = document.getElementById('form-email').value;
    var messageElement = document.getElementById('message');

    var emailIcon = document.getElementById('emailIcons');
    var container = document.getElementById('form-div');

    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        // If email is valid, display "Good" message
        messageElement.style.color = "hsl(0, 36%, 70%)";
        messageElement.textContent = "Email sent";
        emailIcon.innerHTML = "";
        container.style.borderColor = "hsl(0, 36%, 70%)";
        
    } else {
        // If email is invalid, display "Try again" message
        messageElement.style.color = "red"
        messageElement.textContent = "Please provide a valid email";
        emailIcon.innerHTML = errorImage;
        container.style.borderColor = "red";
        
        
    }
}

document.getElementById('form-email').addEventListener('submit', function() {
    
    if (this.value !== '') {
        emailIcon.classList.remove('hidden');
    } else {
        emailIcon.classList.add('hidden');
    }
});