"use strict";
let numbers = 20;
const pi = 3.1415;
let nome = 'Ermeson';
let isTrue = true;
let result = numbers * pi;
console.log(result);
//const nameFromUser = prompt('Qual é o seu nome?');
//console.log(nameFromUser?.toLocaleUpperCase());
const myArray = [1, 2, 4, 5];
const myArrayRandom = ['Ermeson', 17, 1.70];
const myOtherArray = [1, 2, 3, 4,];
const ages = [];
ages.push(17);
ages.push(18);
ages.push(20);
ages.push(25);
console.log(ages);
const minorsFromAge = ages.filter((age) => age < 18);
console.log(minorsFromAge);
for (const age of ages) {
    console.log(age);
}
;
const personTupla = ['Ermeson', 17];
const person = {
    name: 'Ermeson',
    age: 17,
    work: 'Develop',
    heigth: 1.70
};
