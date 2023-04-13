// Get the id of the <path> element and the length of <path>
var triangle = document.getElementById("triangle");
var length = triangle.getTotalLength();

// The start position of the drawing
triangle.style.strokeDasharray = length;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
triangle.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled

var scrolledIntoView = false;
var scale = 3;

window.addEventListener("scroll", myFunction);

function myFunction() {
  var elementTop = triangle.getBoundingClientRect().top;

  if (!scrolledIntoView && elementTop < window.innerHeight) {
    // The triangle is within the top of the viewport, so set scrolledIntoView to true
    scrolledIntoView = true;
  }

  if (scrolledIntoView) {
    // Calculate the scroll percentage with a 0.5 offset to delay the start of the scroll effect
    var scrollpercent = ((document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) - 0.5;

    // Limit the scrollpercent value between 0 and 1
    scrollpercent = Math.max(0, Math.min(1, scrollpercent));

    // Calculate the amount to draw based on the scroll percentage and the scale factor
    var draw = length * scrollpercent * scale;

    // Reverse the drawing (when scrolling upwards)
    triangle.style.strokeDashoffset = length - draw;
  }
}

