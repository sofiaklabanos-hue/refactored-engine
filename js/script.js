document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.querySelector('[aria-label="Toggle menu"]');
    if (mobileMenuButton) {
        const nav = document.querySelector('nav');
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'hidden md:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-2';
        
        const isBlogPage = window.location.pathname.includes('/blog/');
        const prefix = isBlogPage ? '../' : '';
        const blogPath = isBlogPage ? 'index.html' : 'blog/index.html';

        mobileMenu.innerHTML = `
            <a href="${prefix}index.html" class="block text-gray-900 px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="${prefix}services.html" class="block text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="${prefix}case-studies.html" class="block text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Case Studies</a>
            <a href="${prefix}about.html" class="block text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="${blogPath}" class="block text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Blog</a>
            <a href="${prefix}contact.html" class="block bg-blue-600 text-white px-4 py-2 rounded-md text-base font-medium text-center">Get Started</a>
        `;

        nav.appendChild(mobileMenu);

        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Analytics Event Tracking ---

    // 1. Form Submission Tracking (contact.html)
    const contactForm = document.querySelector('form');
    if (contactForm && window.location.pathname.includes('contact.html')) {
        contactForm.addEventListener('submit', function(e) {
            // Track in GA4
            if (typeof gtag === 'function') {
                gtag('event', 'generate_lead', {
                    'event_category': 'engagement',
                    'event_label': 'Contact Form Submission',
                    'value': 1.0
                });
            }
            // Note: Since there's no backend, we just log to console for now
            console.log('Form submission tracked as lead generation event.');
        });
    }

    // 2. CTA Click Tracking
    // Track clicks on all links/buttons that lead to the contact page
    const ctaLinks = document.querySelectorAll('a[href*="contact.html"]');
    ctaLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (typeof gtag === 'function') {
                gtag('event', 'cta_click', {
                    'event_category': 'conversion',
                    'event_label': this.innerText || 'CTA Button',
                    'destination': this.href
                });
            }
            console.log('CTA click tracked:', this.innerText);
        });
    });
});