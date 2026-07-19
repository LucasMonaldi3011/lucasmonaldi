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

