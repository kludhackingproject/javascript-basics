
// Get the user value
let number = prompt("Entre le nombre que tu veux en factorielle ?");
number = Number(number) // Convert input into number

// Function that calculate the factorial
function factorial(x) {
  if (x === 0) {
    return 1;

 } else {
   return x * factorial(x-1);
 }
}

// Return the factorial value after convert into number

// Check if it's number
if (isNaN(number) || number < 0) {
  console.log("Ce n'est pas un nombre entier positif!");
  document.getElementById("inner-text-p").innerHTML = "Ce n'est pas un nombre entier positif !";
} else {
  // Use the function factorial
  let factNum = factorial(number);

  // Print the factorial
  console.log("Le résultat est : " + factNum);
  document.getElementById("inner-text").innerHTML = factNum;
}
