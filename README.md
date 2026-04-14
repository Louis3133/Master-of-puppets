# Master-of-puppets

Ce projet a été réalisé en deux semaines dans le cadre du Workshop 2026 de la formation MMI regroupant des étudiants des trois promotions.

Le concept est le suivant :

Nous souhaitons révéler et montrer les techniques plus ou moins connues utilisées par les entreprises pour manipuler les consommateurs et les pousser à l'achat.

Certaines de ces pratiques sont douteuses, immorale, voire illégales, ainsi, nous avons pris le parti de ne pas culpabiliser les consommateurs qui ne peuvent malheureusement pas éviter tous les biais et dark paterns présents sur le web et dans la vie courante
Mais de se moquer des entreprises que nous décrivons ici comme de grands méchant diaboliques qui mettent en place des stratégies machiavélique.
Le ton exagéré permet de les caricaturer, et de rendre la lecture plus intéressante du point de vue du lecteur.

Notre site est donc une expérience interactive pour faire découvrir les différents darks paterns et biais que le marketing utilise à notre insu.

## Installer les dépendances

Nous utilisons le manager de package npm, il suffit de lancer le commande suivante (assurez-vous d'avoir node et npm sur votre machine) :

```npm Install```

## Lancer le serveur

Pour lancer le serveur et la compilation, il faut effectuer la commande suivante

```npm run dev```

## GSAP

Nous utilisons GSAP pour effectuer des animations complexes, voici la [documentation de la librairie](https://gsap.com/)

Gsap permet à l'aide de ses divers plugins de faire des animations poussées sans partir dans du JS trop complexe.

Nous l'utilisons notamment pour des effets de flips, permettant de faire bouger un élément d'un point A à un point B en modifiant des paramètres. (rotation, opacité, etc...)

Il nous à également permis grâce à son plugin Draggable de simuler des fenêtre de popup et d'écrans draggables, en seulement quelques lignes, on défini l'élément à drag, son cercle d'action et l'endroit où on peut maintenir le clic pour le drag.

C'est une librairie très pratique, devenue gratuite depuis peu, c'est pour cela que nous avons choisi de l'utiliser.

## Crédits :

### Premières années :

*Phuong My Nguyen
*Lily Liessi
*Thaïs Lacome
*Loana Sim

### Deuxièmes années :

*Anis Abdallah
*Pamela Rakotoarijaona
*Sara Rejimand

### troisièmes années :

*Dina Rakotonarivo
*Naika Jean
*Phuc Nguyen
*Louis Le Doussal
