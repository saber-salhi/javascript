/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var devinEnter = prompt("veuillez trouvez le nombre devine entre 1 et 100");
if (devinEnter > (solution === 1) && devinEnter < (solution === 30)){
    console.log(devinEnter +"trop petit");
}else if (devinEnter >= (solution === 31) && devinEnter <= (solution === 60)){
    console.log(devinEnter +"trop grand");
}else if (devinEnter >= (solution === 61) && devinEnter <= (solution === 80) ){
    console.log(devinEnter +"trop grand");
}else if (devinEnter >= (solution === 81) && devinEnter <= (solution === 100)){
    console.log(devinEnter +" trop grand");
}else {
    console.log("bravo ! la solution etait " + solution);
}