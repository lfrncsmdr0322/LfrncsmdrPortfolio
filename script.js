// MENU TOGGLE
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });

        menu.classList.remove("active");
    });
});

// SKILL ANIMATION
const skills = document.querySelector("#skills");
const bars = document.querySelectorAll(".progress");

window.addEventListener("scroll", () => {
    const position = skills.getBoundingClientRect().top;
    const screen = window.innerHeight / 1.3;

    if (position < screen) {
        bars.forEach(bar => {
            bar.style.width = bar.dataset.progress + "%";
        });
    }
});
