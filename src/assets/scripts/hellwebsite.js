// biais autorité

const autoriteCheckbox = document.getElementById("autorite");
const autoriteImage = document.getElementById("autorite_img");
const fakeLabels = document.getElementById("fakeLabels");

autoriteCheckbox.addEventListener("click", () => {
  if (autoriteCheckbox.checked) {
    autoriteImage.src = '/images/autorite_img1.png';
    fakeLabels.classList.toggle('hidden');
  } else {
    autoriteImage.src = '/images/product-1.png';
    fakeLabels.display = "none"
    fakeLabels.classList.toggle('hidden');
  }
});

// Gambling

const gamblingCheckbox = document.getElementById("gambler");
const gamblingBiais = document.getElementById("bannerGambling");

gamblingCheckbox.addEventListener("click", () => {
  if (gamblingCheckbox.checked) {
    gamblingBiais.classList.toggle('hidden');
  } else {
    gamblingBiais.classList.toggle('hidden');
  }
});

// Stress

const stressCheckbox = document.getElementById("stress");
const stressBiais = document.getElementById("stressBiais");
const stressBiaisLimite = document.getElementById("stressBiaisLimite");

stressCheckbox.addEventListener("click", () => {
  if (stressCheckbox.checked) {
    stressBiais.classList.toggle('hidden');
    stressBiaisLimite.classList.toggle('hidden');
  } else {
    stressBiais.classList.toggle('hidden');
    stressBiaisLimite.classList.toggle('hidden');
  }
});


// Timer


// let timerId;

// stressCheckbox.addEventListener("click", () => {
//   const countdownElement = document.getElementById('countdown');

//   if (stressCheckbox.checked) {
//     clearTimeout(timerId);

//     const second = 1000;
//     const minute = 60 * second;
//     const countdownTo = Date.now() + 2 * minute;

//     countdownElement.style.display = '';

//     const countdown = () => {
//       const currentTime = Date.now();
//       const timeLeft = countdownTo - currentTime;

//       if (timeLeft < 0) {
//         alert("Vous allez rater une opportunité en or !");
//         return;
//       }

//       const minutesLeft = Math.floor(timeLeft / minute).toLocaleString('fr-FR', { minimumIntegerDigits: 2 });
//       const secondsLeft = Math.floor((timeLeft % minute) / second).toLocaleString('fr-FR', { minimumIntegerDigits: 2 });

//       countdownElement.innerHTML = `0j:0h:${minutesLeft}min:${secondsLeft}sec`;

//       timerId = setTimeout(countdown, 1000);
//     };

//     countdown();
//   } else {
//     clearTimeout(timerId);
//     countdownElement.style.display = 'none';
//   }
// });

// Filtre honneteté

const honneteCheckbox = document.getElementById("honnete");
const elementNegatif1 = document.getElementById("negatif1");
const elementNegatif2 = document.getElementById("negatif2");
const elementNegatif3 = document.getElementById("negatif3");

honneteCheckbox.addEventListener("click", () => {
  if (honneteCheckbox.checked) {
    elementNegatif1.innerHTML="Cuir grainé naturel, éco-responsable. Doublure en daim bio."
    elementNegatif2.innerHTML="Poche avec fermeture éclair à l’intérieur. Fermeture pivotante. Ultra HD."
    elementNegatif3.innerHTML="Designed in France"
  } else {
    elementNegatif1.innerHTML="Simili cuir, Doublure en daim synthétique."
    elementNegatif2.innerHTML="Poche avec fermeture éclair à l’intérieur."
    elementNegatif3.innerHTML="Made in China"
  }
});

// FOMO

const fomoCheckbox = document.getElementById("fomo");
const fomoElement = document.getElementById("fomoElement");

fomoCheckbox.addEventListener("click", () => {
  if (fomoCheckbox.checked) {
    fomoElement.classList.toggle('hidden');
    fomoElement.classList.toggle('cligno');
  } else {
    fomoElement.classList.toggle('hidden');
    fomoElement.classList.toggle('cligno');
  }
});

//reciprocité

const reciprociteCheckbox = document.getElementById("reciprocite");
const panierBouton = document.getElementById("panier");
const contenuePanier = document.getElementById("contenuePanier");
const reciprociteProduit = document.getElementById("reciprociteProduit");

panierBouton.addEventListener("click", () => {
  if (contenuePanier.style.display === 'none') {
    contenuePanier.style.display = '';
  } else {
    contenuePanier.style.display = 'none';
  }
});

reciprociteCheckbox.addEventListener("click", () => {
  if (reciprociteCheckbox.checked) {
    reciprociteProduit.style.display = '';
  } else {
    reciprociteProduit.style.display = 'none';
  }
});

//Ancrage

const ancrageCheckbox = document.getElementById("ancrage");
const ancrageBiais = document.getElementById("ancrageBiai");
const prixElements = document.querySelectorAll(".prixArrondi");
const ancrageInfos = document.querySelectorAll(".ancrage-infos");

ancrageCheckbox.addEventListener("click", () => {
  prixElements.forEach(element => {
    const prixOrigine = parseFloat(element.dataset.prix);

    if (ancrageCheckbox.checked) {
      const prixFaux = prixOrigine - 0.01;
      element.innerText = `${prixFaux.toFixed(2)}€`;
    } else {
      element.innerText = `${prixOrigine.toFixed(2)}€`;
    }
  });

  ancrageInfos.forEach(element => {
    if (ancrageCheckbox.checked) {
      element.classList.toggle('hidden');
    } else {
      element.classList.toggle('hidden');
    }
  });
});

// Misdirection Esthétique

const misdirectionEsthetiqueCheckbox = document.getElementById("misdirection_esthetique");
const confirmerButton = document.querySelectorAll(".confirmer");
const annulerButton = document.querySelectorAll(".annuler");
misdirectionEsthetiqueCheckbox.addEventListener("click", () => {
  if (misdirectionEsthetiqueCheckbox.checked) {
    confirmerButton.forEach(button => {
      button.style.backgroundColor = 'green';
      button.style.color = 'white';
      button.innerHTML = "Je veux faire une bonne affaire !";
    });
    annulerButton.forEach(button => {
      button.style.backgroundColor = 'white';
      button.style.color = 'black';
      button.style.opacity = 0.25;
      button.style.border = 'none';
      button.innerHTML = "Je préfère payer plus cher";
    });
  } else {
    confirmerButton.forEach(button => {
      const confirmerOri = button.dataset.set;
      button.style.backgroundColor = '';
      button.style.color = '';
      button.innerHTML = confirmerOri;
    });
    annulerButton.forEach(button => {
      const annulerOri = button.dataset.set;
      button.style.backgroundColor = '';
      button.style.color = '';
      button.style.opacity = 1;
      button.style.border = '';
      button.innerHTML = annulerOri;
    });
  }
});

// menu déroulant

const boutonMenuDeroulant = document.getElementById("boutonMenuDeroulant");
const backdropMenuDeroulant = document.getElementById("menu-backdrop");
const boutonCloseMenuDeroulant = document.getElementById("boutonCloseMenuDeroulant");
const menuDeroulantContenue = document.getElementById("menuDeroulantContenue");
const imageBoutonFleche = boutonMenuDeroulant.querySelector("img");

boutonMenuDeroulant.addEventListener("click", () => {
  menuDeroulantContenue.classList.toggle('visible');
  boutonMenuDeroulant.classList.toggle('active');
  backdropMenuDeroulant.classList.toggle('hidden');
});


boutonCloseMenuDeroulant.addEventListener("click", () => {
  menuDeroulantContenue.classList.toggle('visible');
  boutonMenuDeroulant.classList.toggle('active');
  backdropMenuDeroulant.classList.toggle('hidden');
});

addEventListener('keypress', (deroule) => {
  if (deroule.key === 'Enter') {
    menuDeroulantContenue.classList.toggle('visible');
    boutonMenuDeroulant.classList.toggle('active');
    backdropMenuDeroulant.classList.toggle('hidden');
  }
});


// activer/désactiver tout

const enableAllButton = document.getElementById("enableAll");
const disableAllButton = document.getElementById("disableAll");
enableAllButton.addEventListener("click", () => {
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('click'));
  });
});
disableAllButton.addEventListener("click", () => {
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = false;
    checkbox.dispatchEvent(new Event('click'));
  });
});
