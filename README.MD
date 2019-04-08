# La manipulation du DOM avec Jquery.

## Exercice 1 : Au commencement

Rendez vous à l'intérieur du répertoire exo-1.

1. En haut du fichier `script.js`, écrivez un commentaire qui explique la différence entre Javascript et JQuery ( c'est fondamental de comprendre avant d'aller plus loin ! ). Pour vous aider, cette [vidéo](http://learn.onemonth.com/jquery-vs-javascript/) est très bien.
2. Pour pouvoir utiliser Jquery nous devons l'ajouter en tant que librarie externe dans notre application. Ajouter donc une balise `script` qui permet d'inclure Jquery. Où placer vous cette balise script par rapport à la balise existante `<script src="script.js"></script>` et pourquoi ?
3. Vérifier que vous avez bien ajouté la librarie en insérant le code ci-dessous et assurez-vous que le message s'affiche dans la console de votre navigateur.
```
$(document).ready(function(){
	console.log('Je peux maintenant écrire du code JQuery');
});
```
4. Commenter les lignes de codes ci dessous.
5. En quoi cette ligne est indispensable ?
6. Quel symbole permet de repérer dans un programme Javascript que du JQuery est utilisé ? (attention, ce n'est pas toujours le cas...)


## Exercice 2 : Je sélectionne, tu sélectionnes, il sélectionne, nous sélectionnons...

JQuery nous sert à manipuler des éléments de la page HTML : les modifier, en ajouter, en supprimer, faire des animations.
Afin de faire une opération sur un élément, nous devons être en capacité de dire en Javascript comment le sélectionner : c'est le but des sélecteurs.

1. Il existe trois principaux types de sélecteurs en JQuery, lesquels ?
2. Dans le répertoire exo-2, vous trouverez une page HTML qui utilise la librairie Bootstrap. Dans le fichier `script.js`, écrivez des sélecteurs permettant de sélectionner les éléments suivants ( un sélecteur par ligne ) :
Par exemple, si je dis sélectionner tous les éléments `h4` de la page, le sélecteur associé est : `$('h4')`.
	1. Sélectionner le titre du blog : "John's Blog".
	2. Sélectionner tous les éléments du sidemenu de gauche.
	3. Sélectionner le footer.
	4. Sélectionner l'élément qui permet de faire la barre de recherche. 
	5. Sélectionner tous les glyphicons de la page.
	6. Sélectionner tous les labels verts.
	7. Sélectionner tous les paragraphes qui ont comme classe 'intro'.
	8. Sélectionner toutes les images avec toutes les icones dont la classe est 'glyphicon-time'
	9. Sélectionner le premier élément du sidemenu.
	10. Bonus : sélectionner un paragraphe sur deux.


## Exercice 3 : Manipulation

Une fois un élément sélectionné, on veut pouvoir faire des opérations sur celui-ci, par exemple :

* changer le texte du paragraphe si on a sélectionné un paragraphe;
* changer la couleur de la div sélectionnée;
* ajouter une div après l'élément sélectionné;
* supprimer un élément;
* cacher l'élément.

Commencez par réaliser le cours 'HTML dynamique' de codecademy.

L'objectif de l'exercice est d'utiliser uniquement du code Javascript pour faire les modifications. Autrement dit, interdiction de modifier le fichier index.html ( ça serait un peu trop facile... )

Le répertoire 3 présente une page de site d'un portfolio. Ce portfolio est très générique et nous allons utiliser JQuery pour le personnaliser :

1. changez le titre "My portfolio" par votre prénom.;
2. changez aussi le texte 'Some text that represents "Me"...' par une tagline vous représentant;
3. votre portfolio ne comprendra qu'une page : supprimez la navigation de la navbar mais laissez le bouton Login;
4. changez l'icone de ce bouton d'ailleurs, elle n'est pas très jolie, choisissez en une dans  la [liste possible de bootstrap](https://getbootstrap.com/docs/3.3/components/#glyphicons-glyphs);
5. changez votre footer en mettant **Copyright 2017** ( respecter le gras );
6. modifiez le texte des paragraphes de la première ligne d'images. Tous les textes "Some text..." doivent être remplacés par "Mon projet";
*Bonus*: ajouter le numéro du projet c'est à dire 'Mon projet 1' 'Mon projet 2'...
7. choisissez une image sur internet et changez toutes les images du projet par cette image. *Bonus*: personnalisez chacune des images;
8. vous venez de réaliser un nouveau projet et vous souhaitez le mettre sur votre portfolio. De plus, comme c'est le dernier, vous souhaitez qu'il apparaisse au dessus des autres et qu'il soit plus grand pour être mis en valeur. Choisissez une image et un texte et ajoutez le au-dessous de "Some of my work". Ajustez la taille de l'image pour être de 250px de haut;
9. la classe intro a été définie dans le fichier 'index.css'. Ajoutez cette classe au footer afin de changer l'affichage en rouge.

## Exercice 4 : Actions --> Réactions


Maintenant que nous savons sélectionné puis manipulé le DOM, il nous reste un élément fondamental à voir : comment réagir à des événements utilisateurs ? Par exemple :

* l'utilisateur a cliqué sur le bouton connexion;
* l'utilisateur est en train de taper un texte dans un input;
* la souris de l'utilisateur est en train de rentrer dans la div d'id 'toto';
* l'utilisateur est en train de redimensionner la fenêtre;  

Commencez par réaliser le cours 'événements JQuery' de codecademy.

Notre site est un site d'e-commerce, nous alons vouloir réagir à certains événements de l'utilisateur sur cette page, nous allons le faire à l'aide de JQuery :

1. si l'utilisateur clique sur le bouton 'signup' alors lancer une alerte pour lui dire : "Merci nous vous tiendrons informé des différentes offres";
2. récupérer maintenant le contenu de l'input pour adapter votre message : "Merci `adresse email rentrée`, nous vous tiendrons informé des différentes offres`;
3. si l'utilisateur double clique sur l'onglet 'Produits' alors cacher l'onglet 'Produits';
4. si l'utilisateur clique sur une image alors changer le bouton 'Cart' en haut à droite pour marquer le fait qu'un produit a été ajouté au panier. S'il clique deux fois on doit avoir le texte Cart(2);
5. un site ecommerce traque la position de la souris pour savoir si vous êtes intéréssés par un produit. Affichez dans la console 'L'utilisateur regarde ' + le nom du produit si la souris est au dessus d'une image de produit. Vous pouvez ajouter des ids sur les images dans la page HTML. *Bonus*: faire de même sans utiliser les ids;
6. maintenant, traquer si un utilisateur est en train de remplir le champ pour la newsletter. Comment récupérer le fait que l'utilisateur vient de cliquer dans le champ pour rentrer son adresse et comment récupérer le fait que l'utilisateur a tapé quelque chose dedans ?;
5. *Bonus ++* : récupérer le nombre de produits que l'utilisateur a achetés. Par exemple si l'utilisateur clique sur l'image ipad alors 'Cart' doit être remplacé par 'Cart(25)' puisque l'offre correspond à 25 ipads...


## Exercice 5 : Pierre, feuille, ciseau avec une interface graphique

Précédemment, nous avons réalisé un programme permettant de jouer à ce fameux jeu.
L'objectif de cette partie est de faire une interface graphique web permettant à l'utilisateur de faire son choix.

Dans l'idéal, il ne faudra pas modifier le code précédemment écrit, l'objectif étant de séparer la partie Vue de la partie Logique ( après tout, on pourra vous demander de faire une nouvelle interface graphique sur téléphone par exemple et la logique restera la même ) :

1. trouvez sur internet trois images : une de pierre, une de feuille et l'autre de ciseaux;
2. créez dans votre page HTML une section qui contient ces trois images sur une même ligne;
3. l'utilisateur va cliquer sur une image afin de faire son choix. En utilisant des sélecteurs JQuery, faites en sorte que lorsque l'utilisateur clique sur une image, son choix s'affiche dans la console.
4. maintenant créez une div avec l'id userChoice, et remplacez le contenu de cette div par le choix de l'utilisateur;
5. créez une div avec l'id computerChoice et y mettre dedans le choix de l'ordinateur que vous avez obtenu suite à l'appel de la fonction getComputerChoice créée dans le cours précédent;
6. ajoutez une div pour afficher le résultat, le texte doit être vert si vous avez gagné, gris en cas d'égalité et rouge si vous avez perdu.

Bonus : essayez de recréer l'interface de [cette page web](https://www.koreus.com/jeu/ciseauxpapiercaillou.html) avec tous les effets, le calcul du score etc...

## Exercice 6 : Un cas très classique en web : contrôler les données d'un formulaire

1. créez un formulaire en HTML avec un champ pour un email et un champ pour un mot de passe. Ajouter un bouton avec le titre **'Se connecter'**;
2. nous voulons contrôler les données lorsque l'utilisateur clique sur le bouton 'Se connecter'. Faites en sorte de réagir à cet événement en utilisant un alert dans un premier temps;
3. nous devons maintenant récupérer les valeurs des champs email et mot de passe dans la fonction déclenchée par l'événement (et donc appelée) déclaré à la question précédente. Ecrivez du code JQuery permettant de récupérer la valeur de ces inputs. Affichez ces valeurs dans la console dans un premier temps.

Nous allons maintenant ajouter des contrôles :

1. vérifiez que le champ email est non vide. Si ce n'est pas le cas, afficher une div avec la classe bootstrap ['alert alert warning'](https://www.w3schools.com/bootstrap/bootstrap_alerts.asp) en précisant dedans le texte email obligatoire;
2. vérifiez la même chose pour le champ mot de passe;
3. ajoutez un contrôle supplémentaire sur le champ mot de passe pour obliger l'utilisateur à rentrer au minimum 6 lettres. Ajustez le message en fonction;
4. vérifiez maintenant que le champ email comporte bien une adresse email, sinon afficher un message à l'utilisateur. ( Remarque : il va falloir trouver comment vérifier qu'une chaine de charactères est un email... google est votre ami... );
5. Maintenant faites en sorte que si l'utilisateur rentre 'hello@me.com' dans l'email et 'secret8' dans le mot de passe alors un message de confirmation apparait : **'Vous êtes connecté'**

## Exercice 7 : Afficher des données sous format JSON.

Il est très courant en web de demander à un serveur distant des données afin de les afficher dans le navigateur. Pensez à Facebook, lorsque vous arrivez sur votre home : Facebook a écrit du javascript pour demander à ses serveurs de leur renvoyer tous les posts de votre home. Ensuite grâce à Jquery et Javascript, Facebook parcourt la liste des posts et les ajoutent un à un dans votre page web. Ces données lorsqu'elles sont reçues sont généralement formatées en [JSON](https://en.wikipedia.org/wiki/JSON), un standard. 

Dans cet exercice, nous allons récupérer des données et les afficher dans notre page web. Nous ne verrons pas la partie requête à un serveur qui est un peu complexe et aborde la notion d'asynchrone que nous gardons au chaud pour plus tard ( rassurez vous quand-même, vous en faites déjà sans le savoir ;) ).

Dans le répertoire exo-7, vous trouverez un fichier DATA.js contenant un bien joli tableau avec 1000 éléments, il s'agit de données typiques d'un site contenant des informations sur des utilisateurs.

Dans le fichier script.js, vous avez une fonction getData qui vous retourne le tableau de données, notre objectif va être d'afficher ces données dans une [table HTML](https://www.w3schools.com/bootstrap/bootstrap_tables.asp) :

1. créez un tableau HTML avec pour colonne email, nom, prénom, numéro de téléphone;
2. créez une fonction addLineToTable qui prend en paramètre un objet et dont l'objectif est d'ajouter une ligne à notre tableau avec JQuery. La méthode [append](http://api.jquery.com/append/) de JQuery devrait vous aider;
3. parcourir le tableau des données et pour chaque élément du tableau, ajoutez une ligne dans votre table en appelant la fonction précédemment créée.

**Bonus 1**: Facebook n'affiche pas tous vos posts d'un coup ( ça serait trop long et trop gourmand en terme de ressources pour votre navigateur ). Il fait ce que l'on appelle de la [pagination](https://en.wikipedia.org/wiki/Pagination), dans notre exemple nous avons 1000 éléments : paginez ces éléments par groupe de 50.

**Bonus 2**: Faites un champ de recherche sur votre tableau afin de filter les éléments du tableau. Choisissez d'abord une colonne ( par exemple le prénom ) avant de traiter toutes les colonnes.

**Bonus 3**: Ajoutez la possibilité de trier les lignes de votre tableau par ordre alphabétique. 

**Bonus 4**: Faites un bouton avec un formulaire d'ajout d'une ligne dans votre tableau.

**Bonus 5**: Faites un bouton de suppression d'une ligne.

**Bingo 1**: Ajoutez la possibilité d'éditer une ligne du tableau directement dans le tableau comme dans cet [exemple](https://editor.datatables.net/examples/inline-editing/simple).

**Bingo 2**: Ajoutez un bouton pour pouvoir faire un export CSV de votre tableau.


## Exercice 8: Bienvenue dans le monde fabuleux des plugins JQuery

Jquery étant une librarie extrêmement utilisée, un écosystème de plugins que vous pouvez utiliser existe.
L'objectif de cette partie est d'utiliser à mimima un plugin JQuery, vous pouvez trouver la liste [ici](https://www.npmjs.com/browse/keyword/jquery-plugin) ou [là](https://plugins.jquery.com/).

Exemple de plugins :

* diaporama de photos; 
* slider en Javascript;
* gestion de formulaire;
* menu
* ...

**Bingo**: Recoder les plugins que vous avez choisis.

