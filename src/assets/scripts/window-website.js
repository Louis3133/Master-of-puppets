import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const windowWebsite = document.getElementById('window-website')
const closeWebsite = document.getElementById('close-website')
const openWebsite = document.getElementById('open-website')

Draggable.create(windowWebsite, {
   bounds: ".board-content",
   handle: '.window-nav'
});

openWebsite.addEventListener('click', () => {
  windowWebsite.classList.toggle('hidden')
})

closeWebsite.addEventListener('click', () => {
  windowWebsite.classList.toggle('hidden')
})
