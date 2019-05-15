let numberTag = 1;
let tag = "#";
let space = " ";

// Get the user value
let number = prompt("Combien d'étages veux-tu à ta pyramide ?")
number = Number(number) // Convert ton number

// Check if it's correct positive number
if (isNaN(number) || number <= 0) {
  console.log("Ce n'est pas un nombre entier positif !");
  document.getElementById("inner-text").innerHTML = "Ce n'est pas un nombre entier positif !";

  // Limit to 50
} else if (number > 50) {
  console.log("Le chiffre est trop haut ! Met un chiffre en dessous de 50.");
  document.getElementById("inner-text").innerHTML = "Le chiffre est trop haut ! Met un chiffre en dessous de 50.";
} else {

  // This represent the verticality of the pyramide
  while (number > 0) {

    let arrayTag = [];

    let numberSpace = number - 1;

    // Iterating to create space
    for (var i = 0; i < numberSpace; i++) {
     arrayTag.push(space);
    }

    // Iterating to create #
    for (var i = 0; i < numberTag; i++) {
     arrayTag.push(tag);
    }

    console.log(arrayTag);

    // Print to the console and the view
    let para = document.createElement("P");
    para.innerHTML = arrayTag.join(" ") + "<br>";
    document.getElementById("pyramide").appendChild(para);

    numberTag += 1;
    number -= 1;

  }
}
