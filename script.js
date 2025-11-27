// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const questionTextarea = document.getElementById('question');
    const charCount = document.querySelector('.char-count');

    // Character counter for question textarea
    if (questionTextarea && charCount) {
        questionTextarea.addEventListener('input', function() {
            const length = this.value.length;
            charCount.textContent = `${length} / 2000`;
            
            if (length > 2000) {
                charCount.style.color = 'red';
            } else {
                charCount.style.color = 'var(--text-light)';
            }
        });
    }

    // Form submission handler
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.question) {
                alert('Пожалуйста, заполните все обязательные поля');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Пожалуйста, введите корректный email адрес');
                return;
            }

            // Simulate form submission
            alert('Спасибо за ваш вопрос! Мы свяжемся с вами в ближайшее время.');
            this.reset();
            if (charCount) {
                charCount.textContent = '0 / 2000';
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Mobile menu toggle (if needed in future)
    const nav = document.querySelector('.nav');
    if (window.innerWidth <= 768 && nav) {
        // Add mobile menu functionality if needed
    }
});

// Intersection Observer for animations (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to cards on scroll
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.link-card, .classroom-card, .specialty-card, .graduate-card, .opportunity-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

