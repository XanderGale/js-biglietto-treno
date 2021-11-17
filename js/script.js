// Dichiaro le variabili e/o costanti
let userAgeString = prompt('Inserisci la tua età:');
let travelKmString = prompt('Inserisci il numero di Km da percorrere:');

const euroAlKm = 0.21;

// Trasformo i prompt in numeri da stringhe

let userAge = parseInt(userAgeString);
let travelKm = parseInt(travelKmString);

console.log(userAge, travelKm, euroAlKm);

// Calcolo prezzo biglietto in base ai km

let price = travelKm * euroAlKm;

console.log (price);

// Dichiaro condizioni sconto

if (userAge > 65) {
    let priceOutput = price - ((price / 100) * 40 );
    console.log(priceOutput);

    // Creo il messaggio di Output
    alert(`Il prezzo del tuo biglietto sarà: ${priceOutput}`);
} else if ( userAge < 18 ) {
    let priceOutput = price - ((price / 100) * 20);
    console.log(priceOutput);

    // Creo il messaggio di Output
    alert(`Il prezzo del tuo biglietto sarà: ${priceOutput}`);
} else {
    priceOutput = price;
    console.log(priceOutput);

    // Creo il messaggio di Output
    alert(`Il prezzo del tuo biglietto sarà: ${priceOutput.toFixed(2)} / €`);
}

