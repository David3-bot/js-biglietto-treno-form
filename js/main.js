const kmViaggio = parseInt(prompt("Quanti kilometri di distanza devi percorrere?"));
console.log(kmViaggio);
console.log("Distanza");
if (isNaN(kmViaggio)) {
    alert("Non fare il furbo!")
}

const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge);
console.log("Età");
if (isNaN(userAge)) {
    alert("Inserisci dei numeri, sfaticato!")
}


const priceTicket = kmViaggio * 0.21;



if (userAge < 18) {
    let calcoloScontoJunior = ((priceTicket * 20) / 100);
    let ticketUnder = priceTicket - calcoloScontoJunior;
    let prezzoSconto = (Math.round(ticketUnder * 100) / 100);
    console.log(prezzoSconto);
    console.log("Prezzo scontato");
    const prezzo = document.getElementById("prezzo");
    prezzo.innerHTML = prezzoSconto;
}

else if (userAge > 65) {
    let calcoloScontoSenior = ((priceTicket * 40 / 100));
    let ticketOver = priceTicket - calcoloScontoSenior;
    let prezzoSconto = (Math.round(ticketOver * 100) / 100);
    console.log(prezzoSconto);
    console.log("Prezzo scontato");
    const prezzo = document.getElementById("prezzo");
    prezzo.innerHTML = prezzoSconto;
}

else { 
    console.log(priceTicket);
    let ticket = (Math.round(priceTicket * 100) / 100); 
    const prezzo = document.getElementById("prezzo");
    prezzo.innerHTML = ticket;
    console.log(ticket);
    console.log("Prezzo intero");
}





