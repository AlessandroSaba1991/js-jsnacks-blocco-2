/* 
Snack3
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

const nomi = ['Alessandro', 'Giulio', 'Claudio', 'Franco', 'Pino'];
const cognomi = ['Saba', 'Rovella', 'De Palma', 'Ruggiero', 'Giovannini'];
const invitati = []

/* for (let i = 0; invitati.length < nomi.length; i++) {
    const nome = nomi[Math.floor(Math.random() * nomi.length)];
    const cognome = cognomi[Math.floor(Math.random() * cognomi.length)];
    invitati.push(`${nome} ${cognome}`)
}

console.log(invitati); */

let c = 0;

while (invitati.length != nomi.length) {
    const nome = nomi[Math.floor(Math.random() * nomi.length)];
    const cognome = cognomi[Math.floor(Math.random() * cognomi.length)];
    invitati.push(`${nome} ${cognome}`)
    c++
}
console.log(invitati);

//lista random che più random non si può (funziona solo le le liste sono lunghe uguali)

/* const numeri_random_nomi = [];
const numeri_random_cognomi = []


while (invitati.length !== nomi.length) {

    let nome, cognome;

    //genero numero random per i normi
    let num_random = Math.floor(Math.random() * nomi.length);

    //controllo se il numero generato è stato già generato
    while (numeri_random_nomi.includes(num_random)) {

        num_random = Math.floor(Math.random() * nomi.length);

    }

    //se non è incluso lo aggiungo alla lista dei numeri generati
    numeri_random_nomi.push(num_random);

    //Genero il nome random
    nome = nomi[num_random];

    //Ripeto per i cognomi
    num_random = Math.floor(Math.random() * cognomi.length);
    while (numeri_random_cognomi.includes(num_random)) {

        num_random = Math.floor(Math.random() * cognomi.length);

    }
    numeri_random_cognomi.push(num_random);
    cognome = cognomi[num_random];


    //aggiungo alla lista invitati
    invitati.push(`${nome} ${cognome}`)
}
console.log(invitati);
console.log(); */