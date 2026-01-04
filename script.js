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
            // In a real app, you would validate and submit the form here
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
        // In a real app, this would fetch from an API
        setTimeout(() => {
            contentArea.innerHTML = `
                <h3>New Knowledge Article</h3>
                <p>This is dynamically loaded content.</p>
            `;
        }, 1000);
    }
}