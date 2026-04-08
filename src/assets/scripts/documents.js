import '../styles/components/_documents.scss';
import { gsap } from "gsap";

const pages = [
  { left: "Page 1 Content", right: "Page 2 Content" },
  { left: "Page 3 Content", right: "Page 4 Content" }
];

let currentIndex = 0;

const folder = document.getElementById('main-folder');
const leftDiv = document.getElementById('left-content');
const rightDiv = document.getElementById('right-content');
const nextBtn = document.getElementById('next-page');
const prevBtn = document.getElementById('prev-page');

folder.addEventListener('click', () => {
  if (!folder.classList.contains('is-open')) {
    folder.classList.add('is-open');
    updateUI();
  }
});

function updateUI() {
  leftDiv.innerHTML = `<h2>${pages[currentIndex].left}</h2>`;
  rightDiv.innerHTML = `<h2>${pages[currentIndex].right}</h2>`;
  
  leftDiv.appendChild(prevBtn);
  rightDiv.appendChild(nextBtn); 
  
  if (currentIndex === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  nextBtn.textContent = (currentIndex === pages.length - 1) ? "recommencer" : "page suivante";
}

// Next Page 
nextBtn.addEventListener('click', function handleNext(e) {
  e.stopPropagation(); 
  
  if (currentIndex < pages.length - 1) {
    currentIndex++;
    updateUI();
  } else {
    // Restart
    currentIndex = 0;
    folder.classList.remove('is-open'); 
    nextBtn.textContent = "page suivante"; 
  }
});

// Previous Page 
prevBtn.addEventListener('click', function handlePrev(e) {
  e.stopPropagation();
  
  if (currentIndex > 0) {
    currentIndex--;
    updateUI();
  }
});