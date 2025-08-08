// Smooth scrolling function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.background = '#fff';
    }
});

// Add click event to nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

console.log('Portfolio website loaded successfully!');