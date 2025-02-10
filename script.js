document.addEventListener("DOMContentLoaded", function () {
    const textArray = ["Website Developer", "Freelancer", "Creative Coder"];
    let index = 0;
    let charIndex = 0;
    const typingElement = document.getElementById("typing");

    function typeText() {
        if (charIndex < textArray[index].length) {
            typingElement.textContent += textArray[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(eraseText, 2000);
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            typingElement.textContent = textArray[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, 50);
        } else {
            index = (index + 1) % textArray.length;
            setTimeout(typeText, 500);
        }
    }

    typeText();
});
