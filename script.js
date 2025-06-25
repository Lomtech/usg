// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', navLinks.classList.contains('active'));
});

// Smooth Scroll with Header Offset
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            const headerOffset = 80; // Erhöht für Sichtbarkeit
            const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            navLinks.classList.remove('active'); // Close mobile menu
        }
    });
});

// Form Submission with AJAX
const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);
    const action = form.getAttribute('action');

    try {
        const response = await fetch(action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            form.reset(); // Reset form fields
            successMessage.style.display = 'block'; // Show success message
            setTimeout(() => {
                successMessage.style.display = 'none'; // Hide after 5 seconds
            }, 5000);
        } else {
            alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.');
        }
    } catch (error) {
        alert('Fehler beim Senden der Nachricht: ' + error.message);
    }
});

// Text Slogan-Wechsler for Hero Section
const slogans = [
    "https://united-secguardians.de/",
    "https://united-secguardians.de/",
    "https://united-secguardians.de/"
];
let currentSloganIndex = 0;
const sloganElement = document.querySelector('.slogan');

function changeSlogan() {
    sloganElement.classList.add('fade');
    setTimeout(() => {
        currentSloganIndex = (currentSloganIndex + 1) % slogans.length;
        sloganElement.textContent = slogans[currentSloganIndex];
        sloganElement.classList.remove('fade');
    }, 500); // Synchron mit CSS-Transition
}

setInterval(changeSlogan, 4000); // Wechsel alle 4 Sekunden