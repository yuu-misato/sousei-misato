/**
 * Hero Section Interactive Animation & Global Motion Effects
 * Theme: "Creation & Dialogue" - Particles connecting to form a network
 * Features: Canvas Particles, Scroll Reveal, 3D Tilt
 */

/* =========================================
   1. Canvas Particle Animation
   ========================================= */
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

let particlesArray;
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

// Mouse interaction
const mouse = {
    x: null,
    y: null,
    radius: 150
}

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;

    // Tilt Effect trigger
    handleTilt(event);
});

const colors = [
    'rgba(124, 179, 66, 0.8)', // Green
    'rgba(44, 74, 110, 0.8)',  // Navy
    'rgba(124, 179, 66, 0.3)', // Green Light
    'rgba(44, 74, 110, 0.3)'   // Navy Light
];

class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update() {
        if (this.x > w || this.x < 0) this.directionX = -this.directionX;
        if (this.y > h || this.y < 0) this.directionY = -this.directionY;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < w - this.size * 10) this.x += 2;
            if (mouse.x > this.x && this.x > this.size * 10) this.x -= 2;
            if (mouse.y < this.y && this.y < h - this.size * 10) this.y += 2;
            if (mouse.y > this.y && this.y > this.size * 10) this.y -= 2;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

function init() {
    particlesArray = [];
    let numberOfParticles = (w * h) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 3) + 1;
        let x = (Math.random() * ((w - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((h - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 2) - 1;
        let directionY = (Math.random() * 2) - 1;
        let color = colors[Math.floor(Math.random() * colors.length)];
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            if (distance < (w / 7) * (h / 7)) {
                opacityValue = 1 - (distance / 20000);
                ctx.strokeStyle = 'rgba(44, 74, 110,' + opacityValue * 0.15 + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    init();
});

window.addEventListener('mouseout', () => {
    mouse.x = undefined;
    mouse.y = undefined;
});

init();
animate();


/* =========================================
   2. Scroll Reveal Animation
   ========================================= */
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Select elements to animate
// We select commonly used classes. Note: We need to ensure these elements have .reveal-on-scroll class in CSS/HTML
// Or we can add it here programmatically before observing
const scrollElements = document.querySelectorAll('.section-title, .section-desc, .vision-card, .member-card, .section-hero-image, .activity-item, .contact-card');

scrollElements.forEach((el, index) => {
    el.classList.add('reveal-on-scroll');
    // Add staggered delay based on index within its parent container? 
    // Simplified: Just observe.
    observer.observe(el);
});


/* =========================================
   3. 3D Tilt Effect
   ========================================= */
const tiltElements = document.querySelectorAll('.vision-card, .member-card, .section-hero-image, .contact-card');

tiltElements.forEach(el => {
    el.classList.add('tilt-card');
});

function handleTilt(event) {
    tiltElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Check if mouse is near/over the element for performant updates
        // Or simply check if it's within bounds
        if (
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom
        ) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate rotation (max 10 degrees)
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        } else {
            // Reset if not hovering (but this runs on window mousemove, efficiency concern?)
            // Better: use mouseenter/mouseleave on elements directly, but here we use global for smoothness
            // To prevent jitter, only reset if it WAS transformed.
            if (el.style.transform !== '' && el.style.transform !== 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)') {
                el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            }
        }
    });
}
