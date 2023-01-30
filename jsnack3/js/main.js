// JSnack3
// Crea un array di numeri interi 
// e fai la somma di tutti gli elementi  che sono in posizione dispari


// Array n°interi
const numbers = [
    1, //indice 0 (pari)
    3, //indice 1 (dispari)
    5, //indice 2 (pari)
    7, //indice 3 (dispari)
    9, //indice 4 (pari)
]
let somma = 0;
// ciclo+array
for (let i = 0; i < numbers.length; i++) {
    const currentIndex = numbers[i];
    if (i % 2 != 0) {
        somma = somma + currentIndex;
        console.log("numero in posizione dispara: " + currentIndex);
    }
}


