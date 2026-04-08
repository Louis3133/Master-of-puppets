

    // biais autorité

    const autoriteCheckbox = document.getElementById("autorite");
    const autoriteImage = document.getElementById("autorite_img");

    autoriteCheckbox.addEventListener("click", () => {
        if (autoriteCheckbox.checked) {
            autoriteImage.alt = "Biais d'Autorité";
        } else {
            autoriteImage.alt = "Normal";
        }
    });

    // Timer

    const stressCheckbox = document.getElementById("stress");
    let timerId;

    stressCheckbox.addEventListener("click", () => {
        const countdownElement = document.getElementById('countdown');

        if (stressCheckbox.checked) {
            clearTimeout(timerId);

            const second = 1000;
            const minute = 60 * second;
            const countdownTo = Date.now() + 2 * minute;

            countdownElement.style.display = '';

            const countdown = () => {
                const currentTime = Date.now();
                const timeLeft = countdownTo - currentTime;

                if (timeLeft < 0) {
                    alert("Vous allez rater une opportunité en or !");
                    return;
                }

                const minutesLeft = Math.floor(timeLeft / minute).toLocaleString('fr-FR', { minimumIntegerDigits: 2 });
                const secondsLeft = Math.floor((timeLeft % minute) / second).toLocaleString('fr-FR', { minimumIntegerDigits: 2 });

                countdownElement.innerHTML = `0j:0h:${minutesLeft}min:${secondsLeft}sec`;

                timerId = setTimeout(countdown, 1000);
            };

            countdown();
        } else {
            clearTimeout(timerId);
            countdownElement.style.display = 'none';
        }
    });

    // Filtre honneteté

    const honneteCheckbox = document.getElementById("honnete");
    const listenNegatif = document.querySelectorAll(".negatif");
    honneteCheckbox.addEventListener("click", () => {
        if (honneteCheckbox.checked) {
            listenNegatif.forEach(element => {
                element.style.display = 'none';
            });
        } else {
            listenNegatif.forEach(element => {
                element.style.display = '';
            });
        }
    });

    // FOMO

    const fomoCheckbox = document.getElementById("fomo");
    const stockElements = document.querySelectorAll(".stockCount");

    fomoCheckbox.addEventListener("click", () => {
        const fomoElements = document.querySelectorAll(".fomoText");
        if (fomoCheckbox.checked) {
            fomoElements.forEach(element => {
                element.style.display = '';
                if (stockElements) {
                    stockElements.forEach(element => {
                        element.innerText = `${Math.floor(Math.random() * 50) + 1}`;
                    });
                }
            });
        } else {
            fomoElements.forEach(element => {
                element.style.display = 'none';
            });
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
    const prixElements = document.querySelectorAll(".prixArrondi");

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
    const menuDeroulantContenue = document.getElementById("menuDeroulantContenue");
    const imageBoutonFleche = boutonMenuDeroulant.querySelector("img");

    boutonMenuDeroulant.addEventListener("click", () => {
        menuDeroulantContenue.classList.toggle('visible');
        boutonMenuDeroulant.classList.toggle('active');
    });

    addEventListener('keypress', (deroule) => {
        if (deroule.key === 'Enter') {
            menuDeroulantContenue.classList.toggle('visible');
            boutonMenuDeroulant.classList.toggle('active');
        }});


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
