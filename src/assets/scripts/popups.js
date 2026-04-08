import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const boardSection = document.querySelector('.board-content');
const popupButton = document.getElementById('popupButton');

let zIndex = 10;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const contents = [
  "Popup 1",
  "Popup 2",
  "Popup 3",
  "Popup 4",
  "Popup 5"
];

popupButton.addEventListener('click', () => {
  for (let i = 0; i < contents.length; i++) {
    const popup = document.createElement('div');
    popup.className = 'popup';

    popup.style.position = 'absolute';
    popup.style.top = `${getRandomInt(80)}%`;
    popup.style.left = `${getRandomInt(80)}%`;
    popup.style.zIndex = zIndex++;

    popup.innerHTML = `
      <div class="popup-navigation">
        <button class="button-close-popup">X</button>
      </div>
      ${contents[i]}
    `;

    const close = popup.querySelector('.button-close-popup');
    close.addEventListener('click', () => popup.remove());

    popup.addEventListener('mousedown', () => {
      popup.style.zIndex = zIndex++;
    });

    boardSection.appendChild(popup);

    Draggable.create(popup, {
      bounds: ".board-content",
    });
  }
});
