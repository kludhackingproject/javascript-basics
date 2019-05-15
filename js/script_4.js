const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Get the user value
let number = prompt(
  "Choisi une action en tapant son numéro : \n" +
  "\n" +
  "  1 - Filtre dans la liste les entrepreneurs qui sont nés dans les années 70. \n" +
  "  2 - Sors une array qui contient le prénom et le nom des entrepreneurs. \n" +
  "  3 - Doner l'âge qu'aurait chaque inventeur aujourd'hui. \n" +
  "  4 - Trier les entrepreneurs par ordre alphabétique du nom de famille. \n" +
  "\n");

// Filtre dans la liste les entrepreneurs qui sont nés dans les années 70.
function before70(array) {
  array.forEach(item => {
    if (item.year < 1980 && item.year >= 1970) {
      console.log(item);

      // Give value to the view and the console
      let para = document.createElement("H1");
      para.innerHTML = item.first + " " + item.last + "<br>";
      document.getElementById("entrepreneurs").appendChild(para);
    };
  });
}

// Sors une array qui contient le prénom et le nom des entrepreneurs
function fullName(array) {
  array.forEach(item => {
    console.log(item.first + " " + item.last);

    // Give value to the view and the console
    let para = document.createElement("H1");
    para.innerHTML = item.first + " " + item.last + "<br>";
    document.getElementById("entrepreneurs").appendChild(para);
  });
}

// Doner l'âge qu'aurait chaque inventeur aujourd'hui
function ageCalculation(array) {
  array.forEach(item => {
    age = 2019 - item.year;
    console.log(item.first + " a " + age + " ans.");

    // Give value to the view and the console
    let para = document.createElement("H1");
    para.innerHTML = item.first + " a " + age + " ans." + "<br>";
    document.getElementById("entrepreneurs").appendChild(para);
  });
}

// Trier les entrepreneurs par ordre alphabétique du nom de famille
function ordering(array) {
  let nameArray = []

  array.forEach(item => {
    nameArray.push(item.last); // Put new value in array
  });

  let sortArray = nameArray.sort() // Sort the array

  // Give value to the view and the console
  console.log(sortArray.join(" ") + "<br>");

  let para = document.createElement("H1");
  para.innerHTML = sortArray.join("<br>");
  document.getElementById("entrepreneurs").appendChild(para);
}

// Get action folowing functions depending on the user input
switch (number) {
  case '1':
    before70(entrepreneurs);
    break;
  case '2':
    fullName(entrepreneurs);
    break;
  case '3':
    ageCalculation(entrepreneurs);
    break;
  case '4':
    ordering(entrepreneurs);
    break;
  default: // If it's not a correct value
    console.log("Nop! Stp tape 1, 2, 3 ou 4.");
    document.getElementById("inner-text").innerHTML = "Nop! Stp tape 1, 2, 3 ou 4.";
}
