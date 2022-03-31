/* 
Snack2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
*/

let num_user = parseInt(prompt('Inserisci un numero'));

if (num_user % 2 === 0) {
    console.log(num_user);
} else {
    num_user += 1;
    console.log(num_user);
}