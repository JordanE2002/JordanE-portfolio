// Wait for the page to load fully before running the code
document.addEventListener("DOMContentLoaded", () => {

    //Type writer 
    const introText = "Hello, I am Jordan English.";  // Text to type into the <h1>
    const portfolioDesc = "This is my Portfolio.";   // Text to type into the <p>

    const introElement = document.getElementById("greeting-text");   // <h1> element
    const portfolioElement = document.getElementById("portfolio-text"); // <p> element

    let introIndex = 0;  // Index tracker for <h1>
    let portfolioIndex = 0;  // Index tracker for <p>

    // Function to type text into <h1>
    function typeIntroText() {
        if (introIndex < introText.length) {
            introElement.textContent += introText.charAt(introIndex);
            introIndex++;
            setTimeout(typeIntroText, 100);  // Continue typing after 100ms
        } else {
            typePortfolioText();  // Start typing <p> after <h1> is done
        }
    }

    // Function to type text into <p>
    function typePortfolioText() {
        if (portfolioIndex < portfolioDesc.length) {
            portfolioElement.textContent += portfolioDesc.charAt(portfolioIndex);
            portfolioIndex++;
            setTimeout(typePortfolioText, 100);  // Continue typing after 100ms
        }
    }

    // Gets rid of text before starting
    introElement.textContent = "";
    portfolioElement.textContent = "";

    // Start the typewriter effect for <h1>
    typeIntroText();

});

// Nav bar slider
const toggleButton = document.querySelector('.menu-toggle');
const sidebarMenu = document.querySelector('.sidebar');

// Function to update sidebar visibility based on screen width
const adjustSidebarVisibility = () => {
    if (window.innerWidth <= 768) {
        sidebarMenu.classList.add('hidden');  // Hide sidebar on small screens
    } else {
        sidebarMenu.classList.remove('hidden');  // Show sidebar on larger screens
    }
};

// Toggle sidebar visibility when the menu icon is clicked
toggleButton.addEventListener('click', () => {
    sidebarMenu.classList.toggle('hidden');
});

// Update sidebar visibility on window resize
window.addEventListener('resize', adjustSidebarVisibility);

// Set initial sidebar visibility based on the current window size
adjustSidebarVisibility();









function validateForm() {
    // Fetches each field item in contact
    let firstNameField = document.forms["contactForm"]["firstName"];
    let firstName = firstNameField.value;
    let lastNameField = document.forms["contactForm"]["lastName"];
    let lastName = lastNameField.value;
    let subjectField = document.forms["contactForm"]["subject"];
    let subject = subjectField.value;
    let emailField = document.forms["contactForm"]["email"];
    let email = emailField.value;
    let messageField = document.forms["contactForm"]["message"];
    let message = messageField.value;


//Regex for name and email
    const nameRegex = /^[A-Za-z]+$/; 
    const emailRegex = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;

    let isValid = true; // Flag to check overall form validity

    // Resets any previous error styles
    firstNameField.style.border = "";
    lastNameField.style.border = "";
    subjectField.style.border = "";
    emailField.style.border = "";
    messageField.style.border = "";

    // If box completly empty then red border
    if (firstName === "") {
        firstNameField.style.border = "2px solid red";
        isValid = false;
    }

    if (lastName === "") {
        lastNameField.style.border = "2px solid red";
        isValid = false;
    }

    if (email === "") {
        emailField.style.border = "2px solid red";
        isValid = false;
    }

    if (subject === "") {
        subjectField.style.border = "2px solid red";
        isValid = false;
    }

    if (message === "") {
        messageField.style.border = "2px solid red";
        isValid = false;
    }

    // If boxes have numbers in first name for example a red border
    if (!nameRegex.test(firstName) && firstName !== "") {
        firstNameField.style.border = "2px solid red";
        isValid = false;
    }

  
    if (!nameRegex.test(lastName) && lastName !== "") {
        lastNameField.style.border = "2px solid red";
        isValid = false;
    }

    if (!emailRegex.test(email) && email !== "") {
        emailField.style.border = "2px solid red";
        isValid = false;
    }

    // Does not submit if any issues
    if (!isValid) {
        return false;
    }

    // If no errors, you can submit
    return true;
}

// Attach the validation to the form's onsubmit event
document.forms["contactForm"].onsubmit = function (event) {
    if (!validateForm()) {
        event.preventDefault();
    } else {
        event.preventDefault();
        alert("Contact form submitted");

        // Clear the fields of text
        document.forms["contactForm"]["firstName"].value = "";
        document.forms["contactForm"]["lastName"].value = "";
        document.forms["contactForm"]["email"].value = "";
        document.forms["contactForm"]["subject"].value = "";
        document.forms["contactForm"]["message"].value = "";

        // Makes the red borders normal again
        document.forms["contactForm"]["firstName"].style.border = "";
        document.forms["contactForm"]["lastName"].style.border = "";
        document.forms["contactForm"]["email"].style.border = "";
        document.forms["contactForm"]["subject"].style.border = "";
        document.forms["contactForm"]["message"].style.border = "";
    }
};
