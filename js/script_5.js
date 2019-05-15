const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Les frères Karamazov", id: 450911, rented: 5 },
  { title: "Guerre et Paix", id: 748147, rented: 19 }
];

// Get the user value
let number = prompt(
  "Choisi une action en tapant son numéro : \n" +
  "\n" +
  "  1 - Est-ce que tous les livres ont été au moins empruntés une fois ? \n" +
  "  2 - Quel est livre le plus emprunté ? \n" +
  "  3 - Quel est le livre le moins emprunté ? \n" +
  "  4 - Trouve le livre avec l'ID: 873495. \n" +
  "  5 - Supprime le livre avec l'ID: 133712. \n" +
  "  6 - Trie les livres par ordre alphabétique. \n" +
  "\n");

// Est-ce que tous les livres ont été au moins empruntés une fois ?
function isRented(array) {
  let booksRentedArray = []

  array.forEach(item => {
    booksRentedArray.push(item.rented); // Put new value in array
  });

  function isRentedOnce(element) {
    return element > 0;
  }

  // .every return true if the condition inside is correct
  if (booksRentedArray.every(isRentedOnce)) {
    console.log("Les livres ont tous étaient empruntés au moins une fois !");
    document.getElementById("inner-text").innerHTML = "Les livres ont tous étaient empruntés au moins une fois !";
  } else {
    console.log("Ils n'ont pas tous étaient empruntés");
    document.getElementById("inner-text").innerHTML = "Ils n'ont pas tous étaient empruntés";
  };
}

// Quel est livre le plus emprunté ?
function moreRented(array) {

  // Sort the array
  let booksRentedArray = array.sort(function (a, b) {
    return a.rented - b.rented;
  });

  // Return the last value of the array after sorrting
  let textToReturn = booksRentedArray[booksRentedArray.length - 1].title;

  // Give value to the view and console
  console.log(textToReturn);
  document.getElementById("inner-text").innerHTML = textToReturn;
}

// Quel est le livre le moins emprunté ?
function lessRented(array) {

  let booksRentedArray = array.sort(function (a, b) {
    return a.rented - b.rented;
  });

  // Return the first valiue of the array after sorting
  let textToReturn = booksRentedArray[0].title;

  // Give value to the view and console
  console.log(textToReturn);
  document.getElementById("inner-text").innerHTML = textToReturn;
}

// Trouve le livre avec l'ID: 873495.
function findBookdId(array, idBook) {

  array.forEach(item =>{
    // Check if id is the same
    if (item.id === idBook) {
      console.log(item.title);
      document.getElementById("inner-text").innerHTML = item.title;
    }
  });

}

// Supprime le livre avec l'ID: 133712.
function deleteBookId(array, idBook) {
let newArray = [];

  array.forEach(item =>{
    // Don't push the item to the array if = to the id
    if (item.id !== idBook) {
      newArray.push(item);
    }
  });
  console.log(newArray);

  // Iteration over newArray to show all title on the view
  newArray.forEach(item =>{
    let para = document.createElement("h1");
    para.innerHTML = item.title + "<br>";
    document.getElementById("exo").appendChild(para);
  });
}

// Trie les livres par ordre alphabétique.
function sortBook(array) {
  let booksNameArray = [];

  array.forEach(item =>{
    booksNameArray.push(item.title); // Push value to the array
  });

  // Give value to the view and console
  console.log(booksNameArray.sort());
  document.getElementById("inner-text").innerHTML = booksNameArray.sort().join("<br>");
}

  // Get action folowing functions depending on the user input
  switch (number) {
    case '1':
      isRented(books);
      break;
    case '2':
      moreRented(books);
      break;
    case '3':
      lessRented(books);
      break;
    case '4':
      findBookdId(books, 873495);
      break;
    case '5':
      deleteBookId(books, 133712);
      break;
    case '6':
      sortBook(books);
      break;
    default: // If it's not a correct value
      console.log("Nop! Stp tape 1, 2, 3, 4, 5 ou 6.");
      document.getElementById("inner-text").innerHTML = "Nop! Stp tape 1, 2, 3, 4, 5 ou 6.";
  }
