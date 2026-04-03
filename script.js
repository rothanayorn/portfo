// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Add some interactive hover effects
document.querySelectorAll('.project-card, .skill-category, .timeline-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = this.classList.contains('timeline-item') ? 
            'translateX(20px) scale(1.02)' : 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = this.classList.contains('timeline-item') ? 
            'translateX(0) scale(1)' : 'translateY(0) scale(1)';
    });
});

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Profile image error handling and placeholder
document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile-image');
    
    // Handle image loading errors
    profileImage.addEventListener('error', function() {
        this.style.display = 'block';
        this.style.background = 'rgba(255, 255, 255, 0.2)';
        this.style.border = '3px dashed rgba(255, 255, 255, 0.5)';
    });
    
    // Add a subtle animation to the profile image
    profileImage.addEventListener('load', function() {
        this.style.animation = 'fadeInUp 1s ease forwards';
    });
});

// Add typing effect for hero text (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Enhanced scroll animations
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Parallax effect for hero background
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// Add smooth reveal animations for cards
const revealCards = () => {
    const cards = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .language-item');
    
    cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisible = 150;
        
        if (cardTop < window.innerHeight - cardVisible) {
            card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
        }
    });
};

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);