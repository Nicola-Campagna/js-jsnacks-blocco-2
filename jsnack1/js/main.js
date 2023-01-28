// JSnack1
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let insertNumber = prompt("inserisci numero?");
// console.log(insertNumber);

if (insertNumber % 2 == 0) {
    console.log(insertNumber);
}
else {
    insertNumber++
    console.log("numero succ." + insertNumber);
}