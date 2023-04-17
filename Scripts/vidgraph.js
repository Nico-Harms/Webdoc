const graphVid = document.getElementById('graph-video');
var element = document.getElementById('graph-vid-sect');

window.addEventListener('scroll', function() {
  if (element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom > 0) {
    graphVid.play();
  } else {
    graphVid.pause();
  }
});

graphVid.addEventListener('ended', function() {
  graphVid.pause();
});
