// Americans for a Moral Union - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // Change icon between hamburger and X
            const icon = mobileBtn.querySelector('svg');
            if (mobileMenu.classList.contains('hidden')) {
                icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`;
            } else {
                icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6h12v12"></path>`;
            }
        });

        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileBtn.querySelector('svg');
                icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`;
            });
        });
    }

    // Rotating Quotes (from your AMU_Quotes.txt)
    const quotes = [
        "The most important human endeavor is the striving for morality in our actions. - Albert Einstein",
        "Do not do an immoral thing for moral reasons - Thomas Hardy",
        "Men are more moral than they think and far more immoral than they can imagine. - Sigmund Freud",
        "Strength is the morality of the man who stands out from the rest, and it is mine. - Friedrich Nietzsche",
        "Morality, like art, means drawing a line someplace. - Oscar Wilde",
        "It is curious that physical courage should be so common in the world and moral courage so rare. - Mark Twain",
        "Respect for ourselves guides our morals, respect for others guides our manners. - Laurence Sterne",
        "To educate a person in the mind but not in morals is to educate a menace to society. - Theodore Roosevelt",
        "A quiet conscience makes one strong! ― Anne Frank",
        "You can easily judge the character of a man by how he treats those who can do nothing for him. ― Malcolm Forbes",
        "If you can't do something smart, do something right. ― Joss Whedon",
        "Most of the evil in this world is done by people with good intentions. - T.S. Eliot",
        "“The death of dogma is the birth of morality.” ― Immanuel Kant",
        "“Only when there are things a man will not do is he capable of doing great things.” ― Mencius",
        "“An action, to have moral worth, must be done from duty.” ― Immanuel Kant"
    ];

    const quoteContainer = document.getElementById('quote-container');
    let currentQuoteIndex = 0;

    function showQuote(index) {
        if (!quoteContainer) return;
        
        quoteContainer.style.opacity = '0';
        
        setTimeout(() => {
            quoteContainer.innerHTML = `
                <div class="max-w-3xl">
                    <p class="leading-relaxed">${quotes[index]}</p>
                </div>
            `;
            quoteContainer.style.opacity = '1';
        }, 400);
    }

    function rotateQuotes() {
        if (!quoteContainer) return;
        
        // Show first quote immediately
        showQuote(currentQuoteIndex);
        
        // Rotate every 7 seconds
        setInterval(() => {
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            showQuote(currentQuoteIndex);
        }, 7000);
    }

    // Initialize rotating quotes
    rotateQuotes();

    // Form handling (basic client-side feedback)
    const memberForm = document.getElementById('member-form');
    const volunteerForm = document.getElementById('volunteer-form');

    function handleFormSubmit(form, formType) {
        if (!form) return;

        form.addEventListener('submit', function(e) {
            // For production: Formspree handles submission.
            // This adds nice UX feedback before redirect.
            
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = 'Submitting...';
                submitBtn.disabled = true;

                // Simulate brief processing (Formspree will redirect or handle)
                setTimeout(() => {
                    // If using Formspree with _redirect, it will handle navigation.
                    // Otherwise show thank you inline.
                    if (form.id === 'member-form' || form.id === 'volunteer-form') {
                        // Optional: show thank you message inline instead of redirect
                        // For now we let Formspree handle redirect to #thank-you
                    }
                    
                    // Reset button state in case redirect doesn't happen immediately
                    setTimeout(() => {
                        if (submitBtn) {
                            submitBtn.innerHTML = originalText;
                            submitBtn.disabled = false;
                        }
                    }, 1500);
                }, 800);
            }
        });
    }

    handleFormSubmit(memberForm, 'member');
    handleFormSubmit(volunteerForm, 'volunteer');

    // Optional: Highlight active nav section on scroll (simple version)
    const sections = ['about', 'mission', 'get-involved', 'donate', 'shop', 'events', 'blog'];
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.scrollY + 120; // offset for navbar

        sections.forEach(sectionId => {
            const sectionEl = document.getElementById(sectionId);
            if (sectionEl && sectionEl.offsetTop <= scrollY) {
                current = sectionId;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Easter egg: Click logo to show a special message (fun patriotic touch)
    const logos = document.querySelectorAll('img[alt*="Logo"]');
    logos.forEach(logo => {
        logo.addEventListener('click', () => {
            const originalSrc = logo.src;
            logo.style.transition = 'transform 0.3s';
            logo.style.transform = 'scale(1.15) rotate(8deg)';
            
            setTimeout(() => {
                logo.style.transform = 'scale(1) rotate(0deg)';
            }, 600);

            // Optional console message for developers
            console.log('%c[AMU] Thank you for supporting a Moral Union! 🇺🇸', 'color:#C8102E; font-size:9px');
        });
    });

    // Make sure thank-you section can be shown if needed
    const thankYou = document.getElementById('thank-you');
    if (thankYou && window.location.hash === '#thank-you') {
        thankYou.classList.remove('hidden');
        // Scroll to it
        thankYou.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});

// Utility: Copy text to clipboard (for future share buttons etc.)
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Copied!');
    });
}