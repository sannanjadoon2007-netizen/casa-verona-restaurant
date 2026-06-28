
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) {
        console.log("Menu elements not found");
        return;
    }

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});
console.log("menu loaded");
