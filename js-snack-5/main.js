/* 
Snack5 (Bonus)
Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const nomi = ['Alessandro', 'Giulio', 'Claudio', 'Franco', 'Pino'];

while (numeri.length !== nomi.length) {
    if (numeri.length > nomi.length) {
        nomi.push(' ');
    } else if (nomi.length > numeri.length) {
        numeri.push(' ');
    }
}
console.log(nomi, numeri);