function toggleMenu() {

  const menu = document.getElementById("menu");

  menu.classList.toggle("active");
}

/* FECHAR MENU AO CLICAR */

const links = document.querySelectorAll("#menu a");

links.forEach(link => {

  link.addEventListener("click", () => {

    document.getElementById("menu")
      .classList.remove("active");
  });
});

/* CAROUSEL */

const images = document.querySelectorAll(".carousel img");

let current = 0;

function changeImage() {

  images[current].classList.remove("active");

  current = (current + 1) % images.length;

  images[current].classList.add("active");
}

setInterval(changeImage, 4000);

/* REVEAL */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((reveal) => {

    const windowHeight = window.innerHeight;

    const revealTop = reveal.getBoundingClientRect().top;

    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {

      reveal.classList.add("active");
    }
  });
});

