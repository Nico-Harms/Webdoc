// Get all the <path> elements on the page with the "scroll-line" class
var triangles = document.querySelectorAll(".trekant");

triangles.forEach(function(triangle) {
  // Get the length of the <path> element
  var length = triangle.getTotalLength();

  // The start position of the drawing
  triangle.style.strokeDasharray = length;

  // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
  triangle.style.strokeDashoffset = length;

  // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
  var scrolledIntoView = false;
  var scale = 3;

  window.addEventListener("scroll", function() {
    // Get the position of the triangle relative to the viewport
    var elementTop = triangle.getBoundingClientRect().top;

    if (!scrolledIntoView && elementTop < window.innerHeight) {
      // The triangle is within the top of the viewport, so set scrolledIntoView to true
      scrolledIntoView = true;
    }

    if (scrolledIntoView) {
      // Calculate the scroll percentage with a 0.5 offset to delay the start of the scroll effect
      var scrollpercent = ((document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) - 0.4;

      // Limit the scrollpercent value between 0 and 1
      scrollpercent = Math.max(0, Math.min(1, scrollpercent));

      // Calculate the amount to draw based on the scroll percentage and the scale factor
      var draw = length * scrollpercent * scale;

      // Reverse the drawing (when scrolling upwards)
      triangle.style.strokeDashoffset = length - draw;
    }
  });
});
