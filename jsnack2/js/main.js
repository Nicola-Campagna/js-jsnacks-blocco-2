// JSnack2
// Crea due tag div con due id diversi.
// Un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri,
// stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari

// Array di numeri
const numbers = [
    10,
    11,
    12,
    20,
    21,
    30,
    32
]

// n° dispari
const oddNumber = document.getElementById("red-text");
// n° pari
const evenNumber = document.getElementById("green-text");

// ciclo+array
for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    // SE il n° contentuto nella i è pari: aggiungerlo nel verde
    if (currentNumber % 2 == 0) {
        evenNumber.append(currentNumber + ", ");
    }
    // Altriemnti sarà dispari e inserito nei rossi
    else {
        oddNumber.append(currentNumber + ",");
    }
}