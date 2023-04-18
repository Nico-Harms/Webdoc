// Fade Animations
const faders2 = document.querySelectorAll('.fade-in-2');
const sliders2 = document.querySelectorAll('.slide-in');
const appearOptions2 = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};
const appearOnScroll2 = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('inuse');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions2);

faders2.forEach(fader => {
    appearOnScroll2.observe(fader);
});

sliders2.forEach(slider => {
    appearOnScroll2.observe(slider);
});