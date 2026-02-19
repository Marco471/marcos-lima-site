function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

const links = document.querySelectorAll("#menu a");

links.forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("active");
  });
});

