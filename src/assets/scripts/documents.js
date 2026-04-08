import '../styles/components/_documents.scss';
import { gsap } from "gsap";

const pages = [
  { left: "Page 1 Content", right: "Page 2 Content" },
  { left: "Page 3 Content", right: "Page 4 Content" }
];

let currentIndex = 0;
let isAnimating = false;

const folder = document.getElementById('main-folder');
const cover = document.getElementById('cover-layer');
const leftDiv = document.getElementById('left-content');
const rightDiv = document.getElementById('right-content');
const leftPageEl = document.querySelector('.page-left');
const nextBtn = document.getElementById('next-page');
const prevBtn = document.getElementById('prev-page');

function updateUI() {
  leftDiv.querySelector('h2').textContent = pages[currentIndex].left;
  rightDiv.querySelector('h2').textContent = pages[currentIndex].right;
  nextBtn.textContent = currentIndex === pages.length - 1 ? "redémarrer" : "page suivante";
  prevBtn.style.display = currentIndex === 0 ? "none" : "block";
}

// open folder
cover.addEventListener('click', () => {
  if (isAnimating) return;
  isAnimating = true;
  updateUI();

  const tl = gsap.timeline({ onComplete: () => {
    isAnimating = false;
    folder.classList.add('is-open');
  }});
  
  tl.to(folder, { width: 800, duration: 0.6, ease: "power2.inOut" }, 0)
    .to(leftPageEl, { opacity: 1, duration: 0.3 }, 0.2)
    .to(cover, { rotationY: -180, duration: 0.6, ease: "power2.inOut" }, 0);
});

// next page / restart
nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (isAnimating) return;

  if (currentIndex < pages.length - 1) {
    isAnimating = true;
    const oldLeftText = pages[currentIndex].left;

    const flipPage = rightDiv.cloneNode(true);
    const btnClone = flipPage.querySelector('button');
    if (btnClone) btnClone.remove();

    folder.appendChild(flipPage);
    gsap.set(flipPage, {
      position: 'absolute', top: 0, right: 0, width: 380, height: '580',
      zIndex: 50, transformOrigin: "left center", backfaceVisibility: "hidden"
    });

    currentIndex++;
    rightDiv.querySelector('h2').textContent = pages[currentIndex].right;
    nextBtn.textContent = currentIndex === pages.length - 1 ? "redémarrer" : "page suivante";
    prevBtn.style.display = "block";

    gsap.to(flipPage, {
      rotationY: -180, 
      duration: 1,
      ease: "power2.inOut",
      onUpdate: function() {
        if (this.progress() >= 0.5 && leftDiv.querySelector('h2').textContent === oldLeftText) {
          leftDiv.querySelector('h2').textContent = pages[currentIndex].left;
        }
      },
      onComplete: () => {
        flipPage.remove();
        isAnimating = false;
      }
    });

  } else {

    isAnimating = true;
    folder.classList.remove('is-open');
    
    const tl = gsap.timeline({ onComplete: () => {
      isAnimating = false;
      currentIndex = 0;
    }});

    tl.to(folder, { width: 380, duration: 0.6, ease: "power2.inOut" }, 0)
      .to(leftPageEl, { opacity: 0, duration: 0.2 }, 0)
      .to(cover, { rotationY: 0, duration: 0.6, ease: "power2.inOut" }, 0);
  }
});

// previous page
prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (isAnimating || currentIndex === 0) return;

  isAnimating = true;
  const oldRightText = pages[currentIndex].right;

  const flipPage = leftDiv.cloneNode(true);
  const btnClone = flipPage.querySelector('button');
  if (btnClone) btnClone.remove();

  folder.appendChild(flipPage);
  gsap.set(flipPage, {
    position: 'absolute', top: 0, left: 0, width: 380, height: 580,
    zIndex: 50, transformOrigin: "right center", backfaceVisibility: "hidden"
  });

  currentIndex--;
  leftDiv.querySelector('h2').textContent = pages[currentIndex].left;
  prevBtn.style.display = currentIndex === 0 ? "none" : "block";
  nextBtn.textContent = "page suivante";

  gsap.to(flipPage, {
    rotationY: 180, 
    duration: 0.7,
    ease: "power2.inOut",
    onUpdate: function() {
      if (this.progress() >= 0.5 && rightDiv.querySelector('h2').textContent === oldRightText) {
        rightDiv.querySelector('h2').textContent = pages[currentIndex].right;
      }
    },
    onComplete: () => {
      flipPage.remove();
      isAnimating = false;
    }
  });
});