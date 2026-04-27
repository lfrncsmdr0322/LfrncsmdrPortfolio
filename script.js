// ----------------------
// Smooth Scroll Function
// ----------------------
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });


// ----------------------
// Mobile Menu Toggle
// ----------------------
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

if (toggle && menu) {
    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Auto-close menu when clicking a link (better UX)
    document.querySelectorAll("#nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
}

// ----------------------
// Contact Form Handling
// ----------------------
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Thank you! Your message has been sent.");

        // Optional: reset form after submit
        contactForm.reset();
    });
}