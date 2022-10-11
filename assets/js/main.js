/* Ex.1 : Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. */

    /* const btn = document.querySelector("button");

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
 */

/* Ex.2 : Dadi 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/
    const btn = document.querySelector("button");

    const player1 = document.querySelector(".player1 > span");
    const player2 = document.querySelector(".player2 > span");

    btn.addEventListener("click", function(){
        const items = [1, 2, 3, 4, 5, 6];
        player1.innerHTML = Math.floor(Math.random()* (items.length + 1));
        player2.innerHTML = Math.floor(Math.random()* (items.length + 1));
        let result = document.querySelector("p");

        if (player1.innerHTML > player2.innerHTML){
            result.innerHTML = "Vince player 1";
        } else if (player1.innerHTML < player2.innerHTML){
           result.innerHTML = "Vince player 2";
        } else {
            result.innerHTML = "Pareggio!";    
        }
    })