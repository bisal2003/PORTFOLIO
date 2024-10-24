// Mobile menu toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x'); // Changes the icon when menu is active
};

// Active navbar link change on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Text animation for "I'm a..."
const textAnimationElement = document.querySelector('.text-animation span');
const roles = ["Developer", "Designer", "Student", "Learner"];
let roleIndex = 0;
let charIndex = 0;

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        textAnimationElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 150); // Adjust typing speed here
    } else {
        setTimeout(eraseRole, 1000); // Wait before erasing
    }
}

function eraseRole() {
    if (charIndex > 0) {
        textAnimationElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 100); // Adjust erasing speed here
    } else {
        roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
        setTimeout(typeRole, 200); // Start typing the next role
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeRole(); // Start the typing animation
});

// Scroll reveal animations for sections (optional)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.timeline-item, .service-box, .testimonial-item');
hiddenElements.forEach(el => observer.observe(el));

// Form submission alert (you can replace this with real form submission logic)
const form = document.querySelector('form');
form.onsubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    alert("Message sent! Thank you for reaching out.");
};
