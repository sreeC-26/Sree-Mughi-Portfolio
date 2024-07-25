/* script.js */
// typewriter effect functionality
function typeWriter(element, text, i, callback) {
    if (i < text.length) {
        element.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
        setTimeout(function() {
            typeWriter(element, text, i + 1, callback);
        }, 100);
    } else if (typeof callback === 'function') {
        setTimeout(callback, 700);
    }
}

// Initiate the typewriter effect
document.addEventListener('DOMContentLoaded', function() {
    const introTextElement = document.getElementById('intro-text');
    const introText = "Hi, I'm Sree Mughi Chandrasekar";
    typeWriter(introTextElement, introText, 0);
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

