// JavaScript for smooth scrolling animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for displaying current year in the footer
const currentYear = new Date().getFullYear();
document.querySelector('footer p').innerText += ` ${currentYear}`;
