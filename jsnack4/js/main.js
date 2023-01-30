// JSnack4(Bonus)
// Crea due array che hanno un numero di elementi diversi
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

// Array A
const numbersA = [
    10,
    12,
    23,
    19,
    21
]
// Array B
const numbersB = [
    60,
    90
]

let lessElementList;
let moreElementList;

if (numbersA.length > numbersB.length) {
    moreElementList = numbersA;
    lessElementList = numbersB;
}
else {
    moreElementList = numbersB;
    lessElementList = numbersA;
}

const differenceBetween = moreElementList.length - lessElementList.length;
// console.log(differenceBetween)
// ciclo+array
for (let i = 0; i < differenceBetween; i++) {
    lessElementList.push(Math.floor((Math.random() * 100) + 1));
}

console.log("lunghezza moreElemntList: " + moreElementList);
console.log("lunghezza lessElemntList: " + lessElementList);
