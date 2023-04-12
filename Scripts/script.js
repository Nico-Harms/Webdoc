//Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})




// Get all the bar elements
const bars = document.querySelectorAll('.bar');

// Loop through the bars and set the height of each bar based on its data-height attribute
bars.forEach((bar) => {
  const height = bar.getAttribute('data-height');
  bar.style.height = `${height}%`;
});



//graph animation - skal først køre når brugeren ser graferne. (in-view)
const graphBar1 = document.querySelector(".graph-bar")

const observer = new IntersectionObserver(entries => {})

observer.observe(document.querySelector(".graph-bar"))

entries.forEach(entry => {
  if (entry.isIntersecting)
    entry.target.classList.add("graph-bar-animation")
})


// Meningen at den først skal afspille 2 sekunder efter siden af loaded, men virker ikke pt 
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    var video = document.getElementById("myVideo");
    video.play();
  }, 2000);
});







