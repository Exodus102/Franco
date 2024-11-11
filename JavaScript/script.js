// Toggle Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// script.js

const animatedText = document.getElementById("animated-text");
let isFutureDeveloper = true;

function toggleText() {
    // Fade out the current text
    animatedText.classList.add("fade-out");

    setTimeout(() => {
        // Change the text content and color
        if (isFutureDeveloper) {
            animatedText.textContent = "Student";
            animatedText.classList.remove("text-blue-500"); // Remove previous color
            animatedText.classList.add("text-yellow-500"); // Add new color (green for Student)
        } else {
            animatedText.textContent = "Future Developer";
            animatedText.classList.remove("text-yellow-500"); // Remove previous color
            animatedText.classList.add("text-white"); // Add new color (blue for Future Developer)
        }

        isFutureDeveloper = !isFutureDeveloper;

        // Fade in the new text
        animatedText.classList.remove("fade-out");
        animatedText.classList.add("fade-in");

        // Remove fade-in after animation completes
        setTimeout(() => {
            animatedText.classList.remove("fade-in");
        }, 1000); // Match with fade-in duration
    }, 1000); // Match with fade-out duration
}

// Repeat the toggle every 3 seconds
setInterval(toggleText, 3000);