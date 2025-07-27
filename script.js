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

//Read More or Less for About Section
function toggleReadMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMoreBtn");

  if (moreText.style.display === "inline") {
    moreText.style.display = "none";
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
  } else {
    moreText.style.display = "inline";
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
  }
}

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

// ---- ✅ Typewriter Effect ----
const typedTextSpan = document.querySelector(".typing");
const textArray = ["Web Developer", "Frontend Developer", "Tech Enthusiast"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 500);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.replace('bx-x', 'bx-menu');
  });
});

document.querySelector("form").addEventListener("submit", function() {
  alert("Message sent! Thank you.");
});