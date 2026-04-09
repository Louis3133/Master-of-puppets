const openDirectory = document.querySelector(".chest");
const directory = document.querySelector(".directory");

const animation = gsap.timeline({ paused: true });

animation.to(directory, {
    duration: 0.8,
    y: 0,           
    opacity: 1,
    autoAlpha: 1,   
    ease: "back.out(1.7)"
});

openDirectory.addEventListener('click', (event) => {
    event.stopPropagation();
    
    if (animation.reversed() || animation.paused()) {
        animation.play();
    } else {
        animation.reverse();
    }
});

window.addEventListener('click', (event) => {
    if (!directory.contains(event.target)) {
        animation.reverse(); 
    }
});