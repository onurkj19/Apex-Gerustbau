// Marrim butonin e hamburger dhe lidhjet
const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-links");

// Kur klikohet butoni, aktivizo dhe çaktivizo klasën "active"
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
