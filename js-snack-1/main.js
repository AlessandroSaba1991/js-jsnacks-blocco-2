/* 
SNACK 1 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.

*/

let somma = 0;

for (let i = 0; i < 5; i++) {
    const num_utente = parseInt(prompt('Insersci un numero'));
    somma += num_utente
}
console.log('FOR ' + somma);

let c = 0
let somma_2 = 0

while (c < 5) {
    const num_utente = parseInt(prompt('Insersci un numero'));
    somma_2 += num_utente;
    c++
}
console.log('WHILE ' + somma_2);