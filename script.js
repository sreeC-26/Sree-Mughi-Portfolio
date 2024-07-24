/* script.js */

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Select the intro text element
    const introText = document.getElementById('intro-text');
    
    // Add 'visible' class when the DOM is fully loaded
    setTimeout(function () {
        introText.classList.add('visible');
    }, 500); // Delay to ensure smooth transition, can adjust as needed
});
