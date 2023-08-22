//chiediamo all'utente il suo nome e scriviamo in pagina la risposta
const firstName = prompt('inserisci il tuo nome');
console.log('il nome é ' + firstName);

const firstNameInner = document.getElementById('firstName');
firstNameInner .innerHTML = firstName ;


//chiediamo all'utente il suo cognome e scriviamo in pagina la risposta
const surname = prompt('inserisci il tuo cognome');
console.log('il cognome é ' + surname);

const surnameInner = document.getElementById('surname');
surnameInner .innerHTML = surname ;


//chiediamo all'utente il suo colore preferito e scriviamo in pagina la risposta
const favColour = prompt('inserisci il tuo colore preferito');
console.log('il colore preferito é ' + favColour);

const favColourInner = document.getElementById('favColour');
favColourInner .innerHTML = favColour + ' 23';