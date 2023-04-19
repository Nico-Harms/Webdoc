// jshint esversion: 6


const handleScroll = (event) => {
    const scrollPosition = event.target.scrollingElement.scrollTop;
    const images = document.querySelectorAll(".parallax-img");
    images.forEach((element) => {
      element.style.transform = `translate(0, ${scrollPosition / 25}px)`;
    });
  };
  
  window.addEventListener("scroll", handleScroll);
  