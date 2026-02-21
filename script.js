function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

const images = document.querySelectorAll(".carousel img");
let current = 0;

function changeImage() {
  images[current].classList.remove("active");
  current = (current + 1) % images.length;
  images[current].classList.add("active");
}

setInterval(changeImage, 4000);
