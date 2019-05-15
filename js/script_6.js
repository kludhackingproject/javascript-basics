const serine = ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"];
const proline = ["CCU", "CCC", "CCA", "CCG"];
const leucine = ["UUA", "UUG"];
const phenylalanine = ["UUU", "UUC"];
const arginine = ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"];
const tyrosine = ["UAU", "UAC"];

// Get the user value
let acideAmine = prompt(
  "Entre un acide aminé valide \n" +
  "\n"
);

// convert the user entry in uppercase and separate all every entries
// into 3 values and put it in array
acideAmineArray = acideAmine.toUpperCase().match(/.{1,3}/g);
console.log(acideAmineArray);

let convertAcide = [];

// Check all the array for diffrents proteins
acideAmineArray.forEach(item => {
  if (serine.includes(item)) {
    convertAcide.push("serine");
  } else if (proline.includes(item)) {
    convertAcide.push("proline");
  } else if (leucine.includes(item)) {
    convertAcide.push("leucine");
  } else if (phenylalanine.includes(item)) {
    convertAcide.push("phenylalanine");
  } else if (arginine.includes(item)) {
    convertAcide.push("arginine");
  } else if (tyrosine.includes(item)) {
    convertAcide.push("tyrosine");
  } else {
    convertAcide.push("false");
  };
});

// Check if all items are corrects if not return error message, if yes, return the protein chaine
if (convertAcide.includes("false")) {
  console.log("Ce n'est pas un acide aminé valide !");
  document.getElementById("inner-text").innerHTML = "Ce n'est pas un acide aminé valide !";
} else {
  console.log(convertAcide);
  document.getElementById("inner-text").innerHTML = convertAcide.join(" / ");
}
