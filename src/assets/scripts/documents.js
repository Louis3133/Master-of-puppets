import '../styles/components/_documents.scss';
import { gsap } from "gsap";

let allFoldersData = {};
let currentPages = [];
let currentIndex = 0;
let isAnimating = false;

const folder = document.getElementById('main-folder');
const cover = document.getElementById('cover-layer');
const coverTitle = document.getElementById('cover-title');
const leftDiv = document.getElementById('left-content');
const rightDiv = document.getElementById('right-content');
const leftPageEl = document.querySelector('.page-left');
const nextBtn = document.getElementById('next-page');
const prevBtn = document.getElementById('prev-page');
const documentsSection = document.getElementById('documents-section');
const documentButtons = document.querySelectorAll('.document');
const closeFolderBtn = document.getElementById('close-folder-btn');

// Json fetch
fetch('/bias.json')
  .then(response => {
    if(!response.ok) throw new Error("Erreur 404");
    return response.json();
  })
  .then(data => {
    allFoldersData = data;
  })
  .catch(error => console.error(error));


  // open specific folder from table
documentButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const folderKey = button.getAttribute('data-folder');
    
    if (allFoldersData[folderKey]) {
      currentPages = allFoldersData[folderKey].pages;
      if (coverTitle) coverTitle.innerHTML = allFoldersData[folderKey].titre;
    }

    currentIndex = 0;
    documentsSection.classList.remove('hidden');
  });
});

// close folder 
closeFolderBtn.addEventListener('click', () => {
  if (isAnimating) return;
  isAnimating = true;
  folder.classList.remove('is-open');

  const tl = gsap.timeline({ onComplete: () => {
    isAnimating = false;
    currentIndex = 0; 
    documentsSection.classList.add('hidden'); 
  }});

  tl.to(folder, { width: 620, duration: 0.2, ease: "power2.inOut" }, 0)
    .to(leftPageEl, { opacity: 0, duration: 0.2 }, 0)
    .to(cover, { rotationY: 0, duration: 0.3, ease: "power2.inOut" }, 0);
});

function setPageContent(container, content) {
  const target = container.querySelector('.text-content') || container.querySelector('h2');
  if (target) target.innerHTML = content || "";
}

function updateUI() {
  if (!currentPages || currentPages.length === 0) return;
  
  setPageContent(leftDiv, currentPages[currentIndex].left);
  setPageContent(rightDiv, currentPages[currentIndex].right);
  
  nextBtn.textContent = currentIndex === currentPages.length - 1 ? "redémarrer" : "page suivante";
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

  tl.to(folder, { width: 1220, duration: 0.1, ease: "power2.inOut" }, 0)
    .to(leftPageEl, { opacity: 1, duration: 0.3 }, 0.2)
    .to(cover, { rotationY: -180, duration: 0.3, ease: "power2.inOut" }, 0);
});

// next page / restart
nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (isAnimating) return;

  if (currentIndex < currentPages.length - 1) {
    isAnimating = true;

    const flipPage = rightDiv.cloneNode(true);
    const btnClone = flipPage.querySelector('button');
    if (btnClone) btnClone.remove();

    folder.appendChild(flipPage);
    gsap.set(flipPage, {
      position: 'absolute', top: 0, right: 90, width: 500, height: 740,
      zIndex: 50, transformOrigin: "left center", backfaceVisibility: "hidden"
    });

    currentIndex++;
    setPageContent(rightDiv, currentPages[currentIndex].right);
    nextBtn.textContent = currentIndex === currentPages.length - 1 ? "redémarrer" : "page suivante";
    prevBtn.style.display = "block";

    gsap.to(flipPage, {
      rotationY: -180,
      duration: 1,
      ease: "power2.inOut",
      onUpdate: function() {
        if (this.progress() >= 0.5) {
          setPageContent(leftDiv, currentPages[currentIndex].left);
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

    tl.to(folder, { width: 620, duration: 0.2, ease: "power2.inOut" }, 0)
      .to(leftPageEl, { opacity: 0, duration: 0.2 }, 0)
      .to(cover, { rotationY: 0, duration: 0.6, ease: "power2.inOut" }, 0);
  }
});

// previous page
prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (isAnimating || currentIndex === 0) return;

  isAnimating = true;

  const flipPage = leftDiv.cloneNode(true);
  const btnClone = flipPage.querySelector('button');
  if (btnClone) btnClone.remove();

  folder.appendChild(flipPage);
  gsap.set(flipPage, {
    position: 'absolute', top: 0, right: 620 , width: 500, height: 740,
    zIndex: 50, transformOrigin: "right center", backfaceVisibility: "hidden"
  });

  currentIndex--;
  setPageContent(leftDiv, currentPages[currentIndex].left);
  prevBtn.style.display = currentIndex === 0 ? "none" : "block";
  nextBtn.textContent = "page suivante";

  gsap.to(flipPage, {
    rotationY: 180,
    duration: 0.7,
    ease: "power2.inOut",
    onUpdate: function() {
      if (this.progress() >= 0.5) {
        setPageContent(rightDiv, currentPages[currentIndex].right);
      }
    },
    onComplete: () => {
      flipPage.remove();
      isAnimating = false;
    }
  });
});