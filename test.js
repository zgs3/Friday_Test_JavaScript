'use strict';

// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

// let a = 1;
// let b = 2;

// if (a > b) {
//   console.log(a + " yra didesnis");
// } else if (a < b) {
//   console.log(b + " yra didesnis");
// } else {
//   console.log(a + " ir " + b + " yra lygūs");
// }

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

// function rand(min, max) {
//   return Math.floor(Math.random()*(max-min+1)+min);
// }

// for (let i = 0; i < 5; i++) {
//   console.log(rand(1, 10));
// }

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

// function rand(min, max) {
//   return Math.floor(Math.random()*(max-min+1)+min);
// }

// let i = 0;
// while (i !== 5) {
//   i = rand(1, 10);
//   console.log(i);
// }

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

// function rand (min, max) {
//   return Math.floor(Math.random()*(max-min+1)+min);
// }

// const myArray = [];

// for (let i = 1, n = rand(20, 30); i <= n; i++) {
//   myArray.push(rand(10, 30));
// }

// function max(...values) {
//   return values.reduce((prev, curr) => curr > prev ? curr : prev)
// }

// console.log(myArray);
// console.log(max(...myArray));

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

// const myArray = [];

// for (let i = 0; i < 100; i++) {
//   myArray.push("A", "B", "C", "D");
//   if (myArray.length >= 100) {
//     break;
//   }
// }

// const counts = {};

// for (const num of myArray) {
//   counts[num] = counts[num] ? counts[num] + 1 : 1;
// }

// console.log(myArray);

// console.log(counts["A"], counts["B"], counts["C"], counts["D"]);

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)


// function lygineSuma(a, b) {
//   if (typeof a == "number" && typeof b == "number") {
//     return a + b;
//   } else if (typeof a == "object" && typeof b == "object") {
//     return myArray.length + myArrayTwo.length;
//   } else if ((a + b) % 2 === 1 || (myArray.length + myArrayTwo.length) % 2 === 1) {
//     return "nope";
//   }
// }

// const myArray = ["a"];
// const myArrayTwo = ["b"];

// console.log(lygineSuma(1, 2));
// console.log(lygineSuma(myArray, myArrayTwo));

// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)


// function pirminisSkaicius(a) {

//   if (a <= 1 || typeof a !== "number") {
//     return false;
//   }
//   for (let i = 2; i < a; i++) {
//     if (a % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(pirminisSkaicius(2));


// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)


// const myArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// const telefonoNumeris = (myArray = []) => {
//    let res = '';
//    myArray = myArray.map(String);
//    res += `(${myArray[0]+myArray[1]+myArray[2]}) `;
//    res += `${myArray[3] + myArray[4] + myArray[5]}-`;
//    res += myArray[6] + myArray[7] + myArray[8] + myArray[9];
//    return res;
// };
// console.log(telefonoNumeris(myArray));
