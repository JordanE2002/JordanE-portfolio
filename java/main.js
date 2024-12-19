// Wait for the page to load fully before running the code
document.addEventListener("DOMContentLoaded", function () {
    // TEXT TO TYPE
    const targetText1 = "Hello, I am Jordan English."; // Text to type into the <h1>
    const targetText2 = "This is my Portfolio."; // Text to type into the <p>

    // ELEMENTS TO ANIMATE
    const targetElement1 = document.getElementById("typewriter-text"); // Find the <h1> with this ID
    const targetElement2 = document.getElementById("typewriter-text2"); // Find the <p> with this ID

    // INDEX TRACKERS (start at the first letter)
    let index1 = 0; // For the <h1>
    let index2 = 0; // For the <p>

    // TYPEWRITER FUNCTION FOR <h1>
    function typewriter1() {
        // If we haven't typed all the letters in the h1's text
        if (index1 < targetText1.length) {
            // Add the next letter of the text to the <h1>
            targetElement1.textContent += targetText1.charAt(index1);
            
            // Move to the next letter
            index1++;
            
            // Wait 100ms, then call this function again (creates typing effect)
            setTimeout(typewriter1, 100);
        } else {
            // When done typing the h1, start typing the p
            typewriter2();
        }
    }

    // TYPEWRITER FUNCTION FOR <p>
    function typewriter2() {
        // If we haven't typed all the letters in the p's text
        if (index2 < targetText2.length) {
            // Add the next letter of the text to the <p>
            targetElement2.textContent += targetText2.charAt(index2);
            
            // Move to the next letter
            index2++;
            
            // Wait 100ms, then call this function again (creates typing effect)
            setTimeout(typewriter2, 100);
        }
        // If all the letters have been typed, the function stops automatically
    }

    // PREPARATION: Clear the elements' text content before starting
    targetElement1.textContent = ""; // Clear the <h1> text
    targetElement2.textContent = ""; // Clear the <p> text

    // START ANIMATION: Begin typing for the h1
    typewriter1(); // Starts the first typewriter effect
});

