// ===== DARK/LIGHT MODE TOGGLE =====
const themeToggle = document.getElementById('themeToggle');

// Check if user has a saved preference
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    if (themeToggle) themeToggle.textContent = '☀️';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        }
    });
}

// ===== AGENT FILTER (characters.html) =====
const filterButtons = document.querySelectorAll('.filter-btn');
const agentCards = document.querySelectorAll('.agent-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        agentCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-role') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ===== IMAGE SLIDER (media.html) =====
const slideImage = document.getElementById('slideImage');
const slides = [
    'images/zzz-bg.jpg',
    'images/evelyn1.jpg',
    'images/promeia1.jpg',
    'images/trigger1.jpg',
    'images/billy1.jpg'
];
let currentSlide = 0;

function nextSlide() {
    if (slideImage) {
        currentSlide = (currentSlide + 1) % slides.length;
        slideImage.src = slides[currentSlide];
    }
}

function prevSlide() {
    if (slideImage) {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slideImage.src = slides[currentSlide];
    }
}

// Auto-slide every 4 seconds (only on media page)
if (slideImage) {
    setInterval(nextSlide, 4000);
}

// ===== LIGHTBOX FUNCTIONALITY =====
function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');

    if (lightbox && lightboxImg) {
        lightbox.classList.add('active');
        lightboxImg.src = imgElement.src;
        caption.textContent = imgElement.alt; // Show alt text as caption
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close lightbox when clicking outside the image
document.addEventListener('click', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

