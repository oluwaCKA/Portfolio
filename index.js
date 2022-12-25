// Navbar for mobile
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav__links").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Typing animation
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Frontend Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Digital Artist";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Freelancer";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);

// contact form
document.getElementById('myform').reset();

