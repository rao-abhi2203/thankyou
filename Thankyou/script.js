function hamburg() {
    const navbar = document.querySelector('.dropdown');
    const hamburgIcon = document.querySelector('.hamburg');
    const cancelIcon = document.querySelector('.cancel');
    navbar.style.transform = 'translateY(10vh)';
    hamburgIcon.style.display = 'none';
    cancelIcon.style.display = 'block';
}

function cancel() {
    const navbar = document.querySelector('.dropdown');
    const hamburgIcon = document.querySelector('.hamburg');
    const cancelIcon = document.querySelector('.cancel');
    navbar.style.transform = 'translateY(-500px)';
    hamburgIcon.style.display = 'block';
    cancelIcon.style.display = 'none';
}

const texts = [
    "DATA ANALYST",
    "PROGRAMMER",
    "ML ENTHUSIAST"
];

let speed = 100;

const textElements = document.querySelector('.typewriter-text');

let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;

// Function to handle scroll animations for timeline items
function handleTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => observer.observe(item));
}

// Call the function on window load
window.addEventListener('load', handleTimelineAnimations);
// Function to handle scroll animations for skill items
function handleSkillAnimations() {
    const skillItems = document.querySelectorAll('.skill-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    skillItems.forEach(item => observer.observe(item));
}

// Call the function on window load
window.addEventListener('load', handleSkillAnimations);

// Optional: Auto-close dropdown when a link is clicked
const dropdownLinks = document.querySelectorAll('.dropdown .links a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', cancel);
});