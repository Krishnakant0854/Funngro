// Navbar toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu").querySelector("ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Scroll fade-in (as before)
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
