/*  Ex.1 : Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. */

// 1. Creo un array in cui inserisco le mail di chi può accedere e salvo i valori in una variabile.
const mails = ["a@gmail.com", "b@gmail.com", "c@gmail.com", "d@gmail.com","e@gmail.com"];
//console.log(mails);

// 2. Chiedo all'utente la mail - prompt e salvo l'inserimento in una variabile
const mail = prompt("Inserisci la tua mail");
//console.log(mail);

// 3. Se la mail è nella lista, allora stampo il mess di benvenuto - if statement

if(mails.includes(mail)){
    console.log("sei tra gli invitati");
} else {
    console.log("non sei tra gli invitati");
}
