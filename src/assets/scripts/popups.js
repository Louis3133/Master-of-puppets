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
    popup.className = `popup-${i + 1}`;

    popup.style.position = 'absolute';
    popup.style.top = `${getRandomInt(100)}%`;
    popup.style.left = `${getRandomInt(100)}%`;
    popup.style.zIndex = zIndex++;

    popup.innerHTML = `
      <div class="popup-navigation${i + 1}">
        <button class="button-close-popup${i + 1}"<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
      </div>
      <img src="/images/popupImage${i + 1}.png" alt="Popup Image ${i + 1}" class="popup-image-${i + 1}">
    `;

    const close = popup.querySelector(`.button-close-popup${i + 1}`);
    close.addEventListener('click', () => popup.remove());

    popup.addEventListener('mousedown', () => {
      popup.style.zIndex = zIndex++;
    });

    boardSection.appendChild(popup);

    

    Draggable.create(popup, {
      bounds: ".board-content",
      dragClickables: false,
      allowEventDefault: true,
    });
    if (i === 0) {
      popup.insertAdjacentHTML('beforeend', `
      <div class="popup-content1">
      <form class="popup-form1">
      <input type="email" name="email" placeholder="Entrez votre adresse email">
    </form>
    <a class="popup-submit1" href="https://www.inc-conso.fr/content/les-dark-patterns-ces-interfaces-trompeuses">Envoyer mon code de livraison gratuite</a>
    </div>`);
    } if (i === 1) {
      popup.insertAdjacentHTML('beforeend', `<div class="popup-content2">
        <a class="popup-submit2" href="https://fr.wikipedia.org/wiki/Dark_pattern">Réclamez maintenant</a>
        </div>`);
    } if (i === 2) {
      popup.insertAdjacentHTML('beforeend', `<div class="popup-content3">
        <a class="popup-submit3" href="https://www.modernisation.gouv.fr/files/2023-06/Rapport_de_diagnostic_lutter_contre_les_pratiques_commerciales_déloyales_en_ligne_0.pdf">Confirmer votre code</a>
        </div>`);
    } if (i === 4) {
      popup.insertAdjacentHTML('beforeend', `
      <div class="popup-content5">
      <form class="popup-form5">
      <input type="email" name="email" placeholder="Entrez votre adresse email">
      </form>
      <a class="popup-submit5" href="https://signal.conso.gouv.fr/fr/black-friday-dark-patterns">Envoyer mon code de livraison gratuite</a>
      </div>`);
    }
  }
});
