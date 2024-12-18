document.addEventListener("DOMContentLoaded", function () {
    window.history.pushState("", document.title, window.location.pathname);
    window.scrollTo(0, 0);

    const targetText1 = "Hello, I am Jordan English.";
    const targetText2 = "This is my Portfolio.";

    const targetElement1 = document.getElementById("typewriter-text");
    const targetElement2 = document.getElementById("typewriter-text2");

    let index1 = 0;
    let index2 = 0;

    function typewriter1() {
        if (index1 < targetText1.length) {
            targetElement1.textContent += targetText1.charAt(index1);
            index1++;
            setTimeout(typewriter1, 100);
        } else {
            typewriter2();
        }
    }

    function typewriter2() {
        if (index2 < targetText2.length) {
            targetElement2.textContent += targetText2.charAt(index2);
            index2++;
            setTimeout(typewriter2, 100);
        }
    }

    targetElement1.textContent = "";
    targetElement2.textContent = "";
    typewriter1();
});
