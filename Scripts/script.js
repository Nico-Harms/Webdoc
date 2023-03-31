
//Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
} )




// Get all the bar elements
const bars = document.querySelectorAll('.bar');

// Loop through the bars and set the height of each bar based on its data-height attribute
bars.forEach((bar) => {
  const height = bar.getAttribute('data-height');
  bar.style.height = `${height}%`;
});
