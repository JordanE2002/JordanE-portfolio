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
    // Get the value of the first name field
    let firstName = document.forms["contactForm"]["firstName"].value;
    let lastName = document.forms["contactForm"]["lastName"].value;
    

    // Check if the field is empty
    if (firstName === "" || lastName === "") {
        alert("First name must be filled out");
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}