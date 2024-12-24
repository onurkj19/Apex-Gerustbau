// Selektimi i elementeve
const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-links");

// Funksioni për të hapur dhe mbyllur menunë
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
});

// Funksioni për të mbyllur menunë kur klikohet një link
const navLinkItems = document.querySelectorAll(".nav-links a");
navLinkItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        hamburger.classList.remove("active");
    });
});

// Kontrollimi i klikimeve jashtë menusë për ta mbyllur
document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove("open");
        hamburger.classList.remove("active");
    }
});

document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transition = "transform 0.3s ease-in-out";
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transition = "transform 0.3s ease-in-out";
    });
});
