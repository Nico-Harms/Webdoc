// Get all the <path> elements on the page with the "trekant" class
var triangles = document.querySelectorAll(".trekant");

triangles.forEach(function (triangle) {
  // Get the length of the <path> element
  var length = triangle.getTotalLength();

  // The start position of the drawing
  triangle.style.strokeDasharray = length;

  // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
  triangle.style.strokeDashoffset = length;

  var isActive = false;
  var scale = 3;

  function updateTriangle() {
    if (isActive) {
      // Get the position of the triangle relative to the viewport
      var elementTop = triangle.getBoundingClientRect().top;

      // Calculate the scroll percentage for this triangle only
      var scrollpercent = ((window.innerHeight - elementTop) / window.innerHeight) - 0.5;

      // Limit the scrollpercent value between 0 and 1
      scrollpercent = Math.max(0, Math.min(1, scrollpercent));

      // Calculate the amount to draw based on the scroll percentage and the scale factor
      var draw = length * scrollpercent * scale;

      // Reverse the drawing (when scrolling upwards)
      triangle.style.strokeDashoffset = length - draw;
    }
  }

  function setActive() {
    isActive = true;
    updateTriangle();
  }

  function setInactive() {
    isActive = false;
    triangle.style.strokeDashoffset = length;
  }

  // Set the active state when the triangle is in view
  window.addEventListener("scroll", function () {
    // Get the position of the triangle relative to the viewport
    var elementTop = triangle.getBoundingClientRect().top;

    if (elementTop < window.innerHeight * 0.75 && elementTop > -length) {
      setActive();
    } else {
      setInactive();
    }
  });
});