// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Donation Amount Selection
document.addEventListener('DOMContentLoaded', function() {
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.getElementById('customAmount');
    
    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            amountButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Set the amount in the custom input
            const amount = this.getAttribute('data-amount');
            if (customAmountInput) {
                customAmountInput.value = amount;
            }
        });
    });
    
    // Handle custom amount input
    if (customAmountInput) {
        customAmountInput.addEventListener('input', function() {
            // Remove active class from all buttons when typing custom amount
            amountButtons.forEach(btn => btn.classList.remove('active'));
        });
    }
});

// Form Validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            field.style.borderColor = '#e9ecef';
        }
    });
    
    // Email validation
    const emailFields = form.querySelectorAll('input[type="email"]');
    emailFields.forEach(field => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (field.value && !emailRegex.test(field.value)) {
            field.style.borderColor = '#e74c3c';
            isValid = false;
        }
    });
    
    return isValid;
}

// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm('contactForm')) {
                // Show success message
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields correctly.');
            }
        });
    }
});

// Volunteer Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const volunteerForm = document.getElementById('volunteerForm');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm('volunteerForm')) {
                // Show success message
                alert('Thank you for your interest in volunteering! We will contact you soon.');
                volunteerForm.reset();
            } else {
                alert('Please fill in all required fields correctly.');
            }
        });
    }
});

// Donation Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const donationForm = document.getElementById('donationForm');
    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm('donationForm')) {
                // In a real application, this would integrate with a payment processor
                alert('Thank you for your donation! You will be redirected to the payment processor.');
                // donationForm.reset();
            } else {
                alert('Please fill in all required fields correctly.');
            }
        });
    }
});

// Counter Animation
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.stat-item h3');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent.replace(/[^0-9]/g, ''));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
});

// Active Navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Parallax Effect (optional enhancement)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Loading Animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Scroll to Top Button
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #e74c3c;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
        } else {
            scrollToTopBtn.style.opacity = '0';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});