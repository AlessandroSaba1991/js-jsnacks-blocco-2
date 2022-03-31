/* 
Snack4
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let somma = 0

for (let i = 0; i < numeri.length; i++) {
    const numero = numeri[i];
    if (i % 2 != 0) {
        somma += numero;
    }
}
console.log(somma);

let c = 0;
let somma_2 = 0;

while (c < numeri.length) {
    const numero = numeri[c];
    if (c % 2 != 0) {
        somma_2 += numero;
    }
    c++
}
console.log(somma_2);