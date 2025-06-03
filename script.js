function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  for (let el of reveals) {
    const revealTop = el.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  }
}

// Rulează o dată la scroll și o dată la load
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
