// Get the user value and convert in lower case (for "fortnite")
let botPhrase = prompt(
  "Salut, je suis Bot. Pose ta question. \n" +
  "\n"
).toLowerCase();

// Si on lui pose une question, le bot répond "Ouais Ouais..." ;
if (botPhrase.includes("?")) {
  console.log("Ouais Ouais...");
  document.getElementById("inner-text").innerHTML = "Ouais Ouais...";

  // Si on lui hurle dessus, le bot répond "Pwa, calme-toi..." ;
} else if (botPhrase.includes("!")) {
  console.log("Pwa, calme-toi...");
  document.getElementById("inner-text").innerHTML = "Pwa, calme-toi...";

  // Si la phrase que tu prononces contient le mot "Fornite", le bot répond "on s' fait une partie soum-soum ?" ;
} else if (botPhrase.includes("fornite")) {
  console.log("on s' fait une partie soum-soum ?");
  document.getElementById("inner-text").innerHTML = "on s' fait une partie soum-soum ?";

  // Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
} else if (botPhrase === "") {
  console.log("t'es en PLS ?");
  document.getElementById("inner-text").innerHTML = "t'es en PLS ?";

  // Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;
} else {
  console.log("balek.");
  document.getElementById("inner-text").innerHTML = "balek.";
}
