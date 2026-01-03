// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll event for navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===== TYPING EFFECT =====
const typingText = document.getElementById('typingText');
const titles = [
    'Electronic & Telecom Engineer',
    'IoT Enthusiast',
    'PCB Designer',
    'Problem Solver',
    'Tech Innovator'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        typingText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typingSpeed = 500; // Pause before typing next
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000);
});

// ===== PROJECT FILTERING =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
            const categories = card.dataset.category;

            if (filter === 'all' || (categories && categories.includes(filter))) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===== SCROLL REVEAL ANIMATION =====
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

// Add reveal class to elements
document.addEventListener('DOMContentLoaded', () => {
    const elementsToReveal = document.querySelectorAll(
        '.section-title, .about-content, .timeline-item, .project-card, ' +
        '.skill-item, .achievement-card, .certificate-card, .experience-card, .contact-item'
    );

    elementsToReveal.forEach(el => {
        el.classList.add('reveal');
    });

    // Initial check
    revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);

// ===== PARTICLES BACKGROUND =====
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random size
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Random animation duration
        particle.style.animationDuration = Math.random() * 3 + 2 + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';

        particlesContainer.appendChild(particle);
    }
}

// Add particle styles dynamically
const particleStyles = document.createElement('style');
particleStyles.textContent = `
    .particle {
        position: absolute;
        background: rgba(0, 212, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        animation: float 4s ease-in-out infinite;
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyles);

document.addEventListener('DOMContentLoaded', createParticles);

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
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

// ===== INTERSECTION OBSERVER FOR STATS ANIMATION =====
const statNumbers = document.querySelectorAll('.stat-number');

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = target.textContent;

            // Check if it's a number
            if (!isNaN(parseFloat(finalValue))) {
                animateValue(target, 0, parseFloat(finalValue), 2000);
            }

            statsObserver.unobserve(target);
        }
    });
}, observerOptions);

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    const isDecimal = end % 1 !== 0;
    const suffix = element.textContent.includes('+') ? '+' : '';

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        const current = start + (end - start) * easeProgress;

        element.textContent = (isDecimal ? current.toFixed(2) : Math.floor(current)) + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// ===== 3D TILT EFFECT =====
function init3DTiltEffect() {
    const tiltElements = document.querySelectorAll(
        '.project-card, .stat-card, .skill-item, .achievement-card, .experience-card, .certificate-card'
    );

    const settings = {
        maxTilt: 15,
        perspective: 1000,
        speed: 400,
        glare: true,
        maxGlare: 0.3
    };

    tiltElements.forEach(element => {
        // Mouse enter
        element.addEventListener('mouseenter', function (e) {
            this.style.transition = `transform ${settings.speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
        });

        // Mouse move
        element.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;

            // Calculate tilt
            const tiltX = (mouseY / (rect.height / 2)) * -settings.maxTilt;
            const tiltY = (mouseX / (rect.width / 2)) * settings.maxTilt;

            // Apply 3D transform
            this.style.transform = `
                perspective(${settings.perspective}px)
                rotateX(${tiltX}deg)
                rotateY(${tiltY}deg)
                translateZ(10px)
                scale3d(1.02, 1.02, 1.02)
            `;

            // Dynamic shine effect based on mouse position
            const shineX = ((e.clientX - rect.left) / rect.width) * 100;
            const shineY = ((e.clientY - rect.top) / rect.height) * 100;

            // Update shine gradient position
            const beforeElement = this.querySelector('::before');
            this.style.setProperty('--shine-x', `${shineX}%`);
            this.style.setProperty('--shine-y', `${shineY}%`);
        });

        // Mouse leave
        element.addEventListener('mouseleave', function (e) {
            this.style.transition = `transform ${settings.speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
            this.style.transform = `
                perspective(${settings.perspective}px)
                rotateX(0deg)
                rotateY(0deg)
                translateZ(0px)
                scale3d(1, 1, 1)
            `;
        });
    });
}

// ===== PARALLAX DEPTH EFFECT =====
function initParallaxDepth() {
    const heroContent = document.querySelector('.hero-content');
    const codeBlock = document.querySelector('.code-block');
    const heroRings = document.querySelectorAll('.hero-image-ring');

    if (heroContent) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.clientX) / 50;
            const y = (window.innerHeight / 2 - e.clientY) / 50;

            if (codeBlock) {
                codeBlock.style.transform = `
                    translateX(${x * 1.5}px)
                    translateY(${y * 1.5}px)
                    rotateX(${-y * 0.5}deg)
                    rotateY(${x * 0.5}deg)
                `;
            }

            heroRings.forEach((ring, index) => {
                const multiplier = (index + 1) * 0.5;
                ring.style.transform = `
                    translateX(${x * multiplier}px)
                    translateY(${y * multiplier}px)
                    rotate(${ring.style.animationName ? 0 : 0}deg)
                `;
            });
        });
    }
}

// ===== FLOATING 3D ANIMATION FOR SECTIONS =====
function initFloatingElements() {
    const floatElements = document.querySelectorAll('.highlight-item');

    floatElements.forEach((el, index) => {
        const delay = index * 0.5;
        el.style.animation = `float3DSubtle 4s ease-in-out ${delay}s infinite`;
    });
}

// Add floating animation styles
const float3DStyles = document.createElement('style');
float3DStyles.textContent = `
    @keyframes float3DSubtle {
        0%, 100% {
            transform: translateY(0) translateZ(0);
        }
        50% {
            transform: translateY(-8px) translateZ(10px);
        }
    }
    
    /* Dynamic shine based on mouse position */
    .project-card,
    .skill-item {
        --shine-x: 50%;
        --shine-y: 50%;
    }
    
    /* Enhanced 3D depth for icons */
    .project-icon,
    .skill-icon,
    .achievement-icon,
    .exp-icon,
    .contact-icon {
        transition: transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99);
    }
    
    .project-card:hover .project-icon,
    .skill-item:hover .skill-icon,
    .achievement-card:hover .achievement-icon,
    .experience-card:hover .exp-icon,
    .contact-item:hover .contact-icon {
        transform: translateZ(30px) scale(1.15);
    }
    
    /* 3D button hover */
    .btn {
        transform-style: preserve-3d;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .btn:hover {
        transform: translateY(-3px) translateZ(10px) rotateX(5deg);
    }
    
    /* 3D social links */
    .social-link {
        transform-style: preserve-3d;
        transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
    }
    
    .social-link:hover {
        transform: translateY(-5px) translateZ(15px) rotateY(10deg);
    }
    
    /* 3D nav logo */
    .nav-logo {
        transform-style: preserve-3d;
        transition: transform 0.3s ease;
    }
    
    .nav-logo:hover {
        transform: rotateY(15deg) scale(1.05);
    }
    
    /* 3D section titles */
    .section-title {
        transform-style: preserve-3d;
        transition: transform 0.5s ease;
    }
    
    .section-title:hover {
        transform: translateZ(20px) rotateX(2deg);
    }
    
    /* Timeline 3D effect */
    .timeline-content {
        transform-style: preserve-3d;
        transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.3s ease;
    }
    
    .timeline-content:hover {
        transform: translateX(10px) translateZ(20px) rotateY(2deg);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 212, 255, 0.2);
    }
    
    /* Filter buttons 3D */
    .filter-btn {
        transform-style: preserve-3d;
        transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
    }
    
    .filter-btn:hover {
        transform: translateY(-2px) translateZ(5px);
    }
    
    .filter-btn.active {
        transform: translateZ(10px);
    }
    
    /* Soft skill tags 3D */
    .soft-skill-tag {
        transform-style: preserve-3d;
        transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
    }
    
    .soft-skill-tag:hover {
        transform: translateY(-3px) translateZ(10px) rotateX(5deg);
    }
`;
document.head.appendChild(float3DStyles);

// Initialize 3D effects on DOM load
document.addEventListener('DOMContentLoaded', () => {
    init3DTiltEffect();
    initParallaxDepth();
    initFloatingElements();
});

// ===== CONSOLE EASTER EGG =====
console.log(
    '%c👋 Hello there, curious developer!',
    'font-size: 20px; font-weight: bold; color: #00d4ff;'
);
console.log(
    '%cInterested in working together? Reach out at nimanthaklwo.22@uom.lk',
    'font-size: 14px; color: #a0a0b0;'
);
