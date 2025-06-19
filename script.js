// Toggle navbar menu on small screens
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  if (navbar.classList.contains('active')) {
    menuIcon.classList.replace('bx-menu', 'bx-x');
  } else {
    menuIcon.classList.replace('bx-x', 'bx-menu');
  }
});

// Highlight active nav link on scroll
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  sections.forEach(section => {
    let offsetTop = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (scrollY >= offsetTop && scrollY < offsetTop + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        document.querySelector(".navbar a[href*=" + id + "]")?.classList.add("active");
      });
    }
  });
});
