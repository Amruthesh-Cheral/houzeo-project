// Initialize Google Maps (placeholder)
function initMap() {
     
    console.log("Map would be initialized here with API key");

    
    const mapContainer = document.getElementById('map');
    mapContainer.innerHTML = `
                <div style="height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; background:#e6ebf5; color:#4361ee; font-weight:600; text-align:center; padding:20px;">
                    <i class="fas fa-map-marked-alt" style="font-size:3rem; margin-bottom:1rem;"></i>
                    <div>Interactive US Map</div>
                    <div style="margin-top:0.5rem; font-size:0.9rem; font-weight:400; color:#3a0ca3;">(Would display with Google Maps API)</div>
                    <div style="margin-top:1.5rem; font-size:0.85rem; max-width:300px;">
                        This demo shows a placeholder. A real implementation would require a Google Maps API key.
                    </div>
                </div>
            `;
}

// Initialize property image sliders
document.querySelectorAll('.image-slider').forEach(slider => {
    const slides = slider.querySelector('.slides');
    const slideCount = slides.children.length;
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    const bullets = slider.querySelectorAll('.bullet');

    let currentIndex = 0;

    // Update slider position
    function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update bullets
        bullets.forEach((bullet, index) => {
            if (index === currentIndex) {
                bullet.classList.add('active');
            } else {
                bullet.classList.remove('active');
            }
        });
    }

    // Next slide
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    });

    // Previous slide
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    });

    // Bullet navigation
    bullets.forEach((bullet, index) => {
        bullet.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });
});

// Favorite heart functionality
document.querySelectorAll('.favorite-icon').forEach(icon => {
    icon.addEventListener('click', function () {
        const heartIcon = this.querySelector('i');

        if (heartIcon.classList.contains('far')) {
            heartIcon.classList.remove('far');
            heartIcon.classList.add('fas');
            this.classList.add('active');
        } else {
            heartIcon.classList.remove('fas');
            heartIcon.classList.add('far');
            this.classList.remove('active');
        }
    });
});

// Initialize the map
window.initMap = initMap;

// SCROLL TO TOP
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// SCROLL TO TOP