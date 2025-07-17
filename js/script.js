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

// DARK MODE
// Dark Mode Toggle
const toggleBtn = document.getElementById('themeToggle');
const icon = toggleBtn.querySelector('i');

// Check if previously selected
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const isDark = document.body.classList.contains('dark-mode');

    // Switch icon
    if (isDark) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// DARK MODE

// CART COUNT
document.addEventListener("DOMContentLoaded", () => {
  let favoriteCount = 0;
  const countDisplay = document.getElementById('favCount');

  const updateCount = (delta) => {
    favoriteCount = Math.max(0, favoriteCount + delta);
    countDisplay.textContent = favoriteCount;

    // Animate count change
    countDisplay.classList.remove('update');
    void countDisplay.offsetWidth; // Force reflow to restart animation
    countDisplay.classList.add('update');
  };

  document.querySelectorAll('.favorite-icon').forEach(icon => {
    icon.addEventListener('click', function () {
      const heartIcon = this.querySelector('i');
      const isFav = heartIcon.classList.contains('fas');

      if (isFav) {
        // Remove favorite
        heartIcon.classList.remove('fas');
        heartIcon.classList.add('far');
        this.classList.remove('active');
        updateCount(-1);
      } else {
        // Add favorite
        heartIcon.classList.remove('far');
        heartIcon.classList.add('fas');
        this.classList.add('active');
        updateCount(+1);
      }
    });
  });
});


// CART COUNT

// WEBSITE LOADER
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.loader').style.display = 'none';
  }, 3000); // Loader lasts for 2 seconds
});

// WEBSITE LOADER