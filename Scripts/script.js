// jshint esversion: 6
// Hamburger Menu
const dropdown = document.querySelector(".dropdown");
const navMenu = document.querySelector(".nav-menu");

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Get all the bar elements
const bars = document.querySelectorAll('.bar');

// Loop through the bars and set the height of each bar based on its data-height attribute
bars.forEach((bar) => {
  const height = bar.getAttribute('data-height');
  bar.style.height = `${height}%`;
});

// Graph animation - skal først køre når brugeren ser graferne (in-view)
const graphBar1 = document.querySelector(".graph-bar");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("graph-bar-animation");
    }
  });
});

observer.observe(graphBar1);

// Meningen at den først skal afspille 2 sekunder efter siden af loaded, men virker ikke pt
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    var video = document.getElementById("myVideo");
    video.play();
  }, 2000);
});




