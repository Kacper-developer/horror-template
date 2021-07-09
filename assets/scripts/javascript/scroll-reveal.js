var slideUp = {
    distance: '1500%',
    origin: 'bottom',
    opacity: null
};


ScrollReveal().reveal('.blog_slider-section', {
    delay:  500,
    duration: 1000,
    distance: '50%'
}, slideUp);

ScrollReveal().reveal('.blog_proceed-section', {
    delay:  750,
    duration: 1000,
    distance: '75%'
}, slideUp);

ScrollReveal().reveal('.about-section', {
    delay:  1250,
    duration: 1000,
    distance: '25%'
}, slideUp);

