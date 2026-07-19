document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("downloadCvBtn").addEventListener("click", () => {
  window.open("CV_Lucas_Monaldi.pdf", "_blank");
});

document.querySelectorAll(".lang-points").forEach(container => {
  const points = parseInt(container.dataset.points);
  for (let i = 1; i <= 5; i++) {
    const dot = document.createElement("span");
    if (i <= points) dot.classList.add("active");
    container.appendChild(dot);
  }
});
/* ============================
   Navbar scroll effect
============================ */
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/* ============================
   Menu mobile (hamburger)
============================ */
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("open");
    });
}
