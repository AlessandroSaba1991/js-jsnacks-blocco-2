/* 
Snack3
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

const nomi = ['Alessandro', 'Giulio', 'Claudio', 'Franco', 'Pino'];
const cognomi = ['Saba', 'Rovella', 'De Palma', 'Ruggiero', 'Giovannini'];
const invitati = []

for (let i = 0; invitati.length < nomi.length; i++) {
    const nome = nomi[i];
    const cognome = cognomi[i];
    invitati.push(`${nome} ${cognome}`)
}

console.log(invitati);

let c = 0;

while (invitati.length != nomi.length) {
    const nome = nomi[c];
    const cognome = cognomi[c];
    invitati.push(`${nome} ${cognome}`)
    c++
}
console.log(invitati);