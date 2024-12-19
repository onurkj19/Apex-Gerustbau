// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');

    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('open');
}
