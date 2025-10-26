function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Gracias por contactarnos. Pronto te responderemos.");
  e.target.reset();
});
