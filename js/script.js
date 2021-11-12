// Dichiaro le variabili e/o costanti
let userAgeString = prompt('Inserisci la tua età:');
let travelKmString = prompt('Inserisci il numero di Km da percorrere:');

const euroAlKm = 0.21;

// Trasformo i prompt in numeri da stringhe

let userAge = parseInt(userAgeString);
let travelKm = parseInt(travelKmString);

console.log(userAge, travelKm, euroAlKm);

// Calcolo prezzo biglietto in base ai km

let priceKm = travelKm * euroAlKm;

console.log (priceKm);
