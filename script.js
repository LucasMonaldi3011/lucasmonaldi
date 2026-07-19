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
