const links = document.querySelectorAll(".nav-list li a");

for (link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
  hideMenu();
}

// Mobile responsive menu
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");

const showMenu = () => {
  hamburger.style.display = "none";
  closeIcon.style.transform = "translateY(0)";
  menu.style.transform = "translateY(0)";
};

const hideMenu = () => {
  closeIcon.style.transform = "translateY(-20rem)";
  hamburger.style.display = "block";
  menu.style.transform = "translateY(-200%)";
}

hamburger.addEventListener("click", showMenu);
closeIcon.addEventListener("click", hideMenu);
