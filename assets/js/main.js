const the_animation = document.querySelectorAll('.ani')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        } else {
            entry.target.classList.remove('scroll-animation')
        }

    })
}, {
    threshold: 0.5
});
for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];

    observer.observe(elements);
}

const the_animations = document.querySelectorAll('.anis')

const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animations')
        } else {
            entry.target.classList.remove('scroll-animations')
        }

    })
}, {
    threshold: 0.5
});
for (let i = 0; i < the_animations.length; i++) {
    const elements = the_animations[i];

    observers.observe(elements);
}