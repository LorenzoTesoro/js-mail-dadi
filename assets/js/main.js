/* Ex.1 : Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. */

    const btn = document.querySelector("button");

    let title = document.querySelector("h1");

    btn.addEventListener("click", function(){

    const mails = ["a@gmail.com", "b@gmail.com", "c@gmail.com", "d@gmail.com","e@gmail.com"];
    
    const mail = document.querySelector("input").value;

    if(mails.includes(mail)){
        title.innerHTML = "Benvenuto! Sei tra gli invitati";
    } else {
        title.innerHTML = "Siamo spiacenti! Non hai l'invito";
    }
    })

/* Ex.2 : Dadi 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// 1. Creo un array che contenga i numeri d 1 a 6 e salvo il tutto in una variabile.
    //const items = [1, 2, 3, 4, 5, 6];
    //console.log(numbers);
// 2. Genero numero random sia per giocatore 1 che per giocatore 2
    //const randomNumbers = Math.floor(Math.random() * items.length + 1);
    //console.log(randomNumbers);
    //const player1 = Math.floor(Math.random()*items.length);
    //const player2 = Math.floor(Math.random()*items.length);
    //console.log(player1, player2);
// 3. Confronto i valori ottenuti per stabilire quale sia più grande
  /*   if(player1 > player2){
        console.log("Vince player1");
    } else if (player1 < player2){
        console.log("Vince player2");
    } else if (player1 == player2){
        console.log('Pareggio');
    }
 */