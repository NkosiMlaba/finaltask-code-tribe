const erroImagePath = "images/icon-error.svg";
const errorImage = `<img src=${erroImagePath} alt="error icon">`;

function validateEmail() {
    var email = document.getElementById('form-email').value;
    var messageElement = document.getElementById('message');
    var emailIcon = document.getElementById('emailIcons');
    var container = document.getElementById('form-div');
    var errorImage = '<img src="images/icon-error.svg" alt="error icon">';
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        messageElement.style.color = "hsl(0, 36%, 70%)";
        messageElement.textContent = "Email sent";
        emailIcon.innerHTML = "";
        container.style.borderColor = "hsl(0, 36%, 70%)";
    } else {
        messageElement.style.color = "red";
        messageElement.textContent = "Please provide a valid email";
        emailIcon.innerHTML = errorImage;
        container.style.borderColor = "red";
    }
}

document.getElementById('form-email').addEventListener('input', function() {
    var emailIcon = document.getElementById('emailIcons');
    if (this.value !== '') {
        emailIcon.classList.remove('hidden');
    } else {
        emailIcon.classList.add('hidden');
    }
});



function loadContent() {
    // logo
    var logoPath = "images/logo.svg"
    var imageElement = document.getElementById('logo-image');
    var imagePath = `<img class="nav-logo" src=${logoPath} alt=""></img>`;
    imageElement.innerHTML = imagePath;

    // title
    var titlePinkData = "WE'RE"
    var titleElement =  document.getElementById('title-pink');
    titleElement.innerHTML = titlePinkData;

    var titleBlackData = " COMING SOON"
    var titleElementBlack =  document.getElementById('title-black');
    titleElementBlack.innerHTML = titleBlackData;

    // paragraph
    const paragraphData = `We're coming soon Hello fellow shoppers! We're currently building our new
fashion store. Add your email below to stay up-to-date with announcements
and our launch deals. Email Address`;
    var paragraphDiv = document.getElementById('paragraph');
    paragraphDiv.innerHTML = paragraphData;

    // alternate images
    var imageMobile = "images/hero-mobile.jpg";
    var imagePC = "images/hero-desktop.jpg";
    var mainImageMobile = document.getElementById('main-picture-2');
    var mainImageDesktop = document.getElementById('main-picture');
    if (window.innerWidth < 1000) {
        mainImageMobile.innerHTML =  `<img class="picture-mobile" src=${imageMobile} alt=""></img>`;
        mainImageDesktop.innerHTML = ``
    } else {
        mainImageMobile.innerHTML = ``
        mainImageDesktop.innerHTML = `<img class="picture-desktop" src=${imagePC} alt=""></img>`;
    }

    // submit
    var imageSubmitPath = "images/icon-arrow.svg"
    var imageSubmit = document.getElementById('submit-div');
    imageSubmit.innerHTML = `<img id="submitButton" src=${imageSubmitPath} alt="Submit" onclick="validateEmail()">`;

    // footer
    const website = "https://theemlaba.co.za/"
    var footerElement = document.getElementById('footer');
    footerElement.innerHTML = `<p class="attribution">
    Bootcamp 2023 by
    <a href="https://www.mlab.co.za" target="_blank">CodeTribe</a>.
    Developed by <a href="${website}">Nkosikhona Mlaba</a>.
    </p>`


}


// load
window.addEventListener('load', loadContent);
window.addEventListener('resize', loadContent);


