// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// ===============================
// CLOSE MENU AFTER CLICKING A LINK
// ===============================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});