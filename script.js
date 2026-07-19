const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const downloadCvBtn = document.getElementById("downloadCvBtn");
if (downloadCvBtn) {
  downloadCvBtn.addEventListener("click", () => {
    // Remplace "cv.pdf" par le nom réel de ton CV
    window.open("cv.pdf", "_blank");
  });
}

// Génère les points pour les langues
document.querySelectorAll(".lang-points").forEach(container => {
  const points = parseInt(container.dataset.points);
  for (let i = 1; i <= 5; i++) {
    const dot = document.createElement("span");
    if (i <= points) dot.classList.add("active");
    container.appendChild(dot);
  }
});
