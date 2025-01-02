// Wait for the page to load fully before running the code
document.addEventListener("DOMContentLoaded", () => {

    // ------------------- TYPEWRITER EFFECT -------------------
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

    // Prepare: Clear text content before starting
    introElement.textContent = "";
    portfolioElement.textContent = "";

    // Start the typewriter effect for <h1>
    typeIntroText();

});

// ------------------- NAVBAR TOGGLE -------------------
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
    // Get the value of each field
    let firstName = document.forms["contactForm"]["firstName"].value;
    let lastName = document.forms["contactForm"]["lastName"].value;
    let subject = document.forms["contactForm"]["subject"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;

    const nameRegex = /^[A-Za-z]+$/; //Regex for the names


     // Regex for the email
     const emailRegex = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;

    let isValid = true; // Flag to check overall form validity

    // Check if each field is empty and provide specific error messages
    if (firstName === "") {
        alert("First Name needs to be filled out.");
        isValid = false;
    }

    if (lastName === "") {
        alert("Last Name needs to be filled out.");
        isValid = false;
    }

    if (email === "") {
        alert("Email needs to be filled out.");
        isValid = false;
    }

    if (subject === "") {
        alert("Subject needs to be filled out.");
        isValid = false;
    }

    if (message === "") {
        alert("Message needs to be filled out.");
        isValid = false;
    }

    // Validate first name (only letters)
    if (!nameRegex.test(firstName) && firstName !== "") {
        alert("First name must contain only letters and no special characters or numbers.");
        isValid = false;
    }

    // Validate last name (only letters)
    if (!nameRegex.test(lastName) && lastName !== "") {
        alert("Last name must contain only letters and no special characters or numbers.");
        isValid = false;
    }

    if (!emailRegex.test(email) && email !== "") {
        alert("Email must be valid.");
        isValid = false;
    }



    // If validation fails, prevent form submission
    if (!isValid) {
        return false; // Prevents form submission
    }

    // If validation passes, allow form submission
    return true;
}

// Attach the validation to the form's onsubmit event
document.forms["contactForm"].onsubmit = function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission on validation failure
    }
    else{
        event.preventDefault();
alert("Contact form submitted")

 // Clear the fields
 document.forms["contactForm"]["firstName"].value = "";
 document.forms["contactForm"]["lastName"].value = "";
 document.forms["contactForm"]["email"].value = "";
 document.forms["contactForm"]["subject"].value = "";
 document.forms["contactForm"]["message"].value = "";

    }
    }

