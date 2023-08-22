//chiediamo all'utente il suo nome e scriviamo in pagina la risposta
const firstName = prompt('inserisci il tuo nome');
console.log('il nome é ' + firstName);


//chiediamo all'utente il suo cognome e scriviamo in pagina la risposta
const surname = prompt('inserisci il tuo cognome');
console.log('il cognome é ' + surname);


//chiediamo all'utente il suo colore preferito e scriviamo in pagina la risposta
const favColour = prompt('inserisci il tuo colore preferito');
console.log('il colore preferito é ' + favColour);


//chiediamo all'utente il suo numero preferito e aggiungiamo 23 per creare la chiave
const favNumber = prompt('inserisci il tuo numero preferito');
console.log('il numero preferito é ' + favNumber);
const key = Number(favNumber) + 23;


//generiamo la password nella pagina html
const password = document.getElementById('password');
password.innerHTML=firstName + surname + favColour + key;