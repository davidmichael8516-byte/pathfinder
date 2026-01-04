// Simple client-side routing for demonstration
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Form validation examples
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted! (This is a demo)');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Knowledge progress tracker simulation
function updateProgress() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.width = value + '%';
    });
}

// Initialize progress bars
document.addEventListener('DOMContentLoaded', updateProgress);

// Simulate loading new knowledge content
function loadNewContent() {
    const contentArea = document.getElementById('knowledge-content');
    if (contentArea) {
        contentArea.innerHTML = '<p>Loading new knowledge content...</p>';
        setTimeout(() => {
            contentArea.innerHTML = `
                <h3>New Knowledge Article</h3>
                <p>This is dynamically loaded content.</p>
            `;
        }, 1000);
    }
}

// ----------------------
// HADITH API INTEGRATION
// ----------------------
const HADITH_API_KEY = "YOUR_API_KEY_HERE"; // Replace with your actual key
const HADITH_API_URL = "https://hadithapi.com/api/hadiths/random";

async function loadRandomHadith() {
    const hadithContainer = document.getElementById('hadith-container');
    if (!hadithContainer) return;

    hadithContainer.innerHTML = "<p>Loading Hadith...</p>";

    try {
        const response = await fetch(HADITH_API_URL, {
            headers: {
                "Authorization": `Bearer ${HADITH_API_KEY}`
            }
        });
        const data = await response.json();

        if (data && data.hadith && data.hadith.hadithEnglish) {
            hadithContainer.innerHTML = `
                <h3>Hadith of the Day</h3>
                <p>${data.hadith.hadithEnglish}</p>
                <small>Source: ${data.hadith.book.bookName}</small>
            `;
        } else {
            hadithContainer.innerHTML = "<p>Could not load Hadith. Try again later.</p>";
        }
    } catch (error) {
        console.error("Error fetching Hadith:", error);
        hadithContainer.innerHTML = "<p>Error loading Hadith.</p>";
    }
}

// Load hadith automatically when page loads
document.addEventListener('DOMContentLoaded', loadRandomHadith);
