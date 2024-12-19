// Wait for the page to load fully before running the code
document.addEventListener("DOMContentLoaded", () => {
    
    // ------------------- TYPEWRITER EFFECT -------------------
    const targetText1 = "Hello, I am Jordan English.";  // Text to type into the <h1>
    const targetText2 = "This is my Portfolio.";       // Text to type into the <p>

    const targetElement1 = document.getElementById("typewriter-text");  // <h1> element
    const targetElement2 = document.getElementById("typewriter-text2"); // <p> element

    let index1 = 0; // Index tracker for <h1>
    let index2 = 0; // Index tracker for <p>

    // Function to type text into <h1>
    function typewriter1() {
        if (index1 < targetText1.length) {
            targetElement1.textContent += targetText1.charAt(index1);
            index1++;
            setTimeout(typewriter1, 100); // Continue typing after 100ms
        } else {
            typewriter2(); // Start typing <p> after <h1> is done
        }
    }

    // Function to type text into <p>
    function typewriter2() {
        if (index2 < targetText2.length) {
            targetElement2.textContent += targetText2.charAt(index2);
            index2++;
            setTimeout(typewriter2, 100); // Continue typing after 100ms
        }
    }

    // Prepare: Clear text content before starting
    targetElement1.textContent = "";
    targetElement2.textContent = "";

    // Start the typewriter effect for <h1>
    typewriter1();





    //Nav bar

    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    // Function to update sidebar visibility based on screen width
    const updateSidebarVisibility = () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.add('hidden'); // Hide sidebar on small screens
        } else {
            sidebar.classList.remove('hidden'); // Show sidebar on larger screens
        }
    };

    // Toggle sidebar visibility when the menu icon is clicked
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });

    // Update sidebar visibility on window resize
    window.addEventListener('resize', updateSidebarVisibility);

    // Set initial sidebar visibility based on the current window size
    updateSidebarVisibility();
});
