const buttonGenera = document.getElementById("btnGenera");


buttonGenera.addEventListener("click", function () {
    const userKm = document.getElementById("nKm").value;

    const userAge = document.getElementById("eta");

    const userName = document.getElementById("userName").value;
    console.log(userName);
    fullName.innerHTML = `${userName}`;

    const numCrz = ((Math.random() * 10) + 1).toFixed(0);
    crz.innerHTML = `${numCrz}`;

    const codCp = (((Math.random() * 9) + 1) * 10000).toFixed(0);
    cp.innerHTML = `${codCp}`;

    const prezzoStandard = (0.21 * userKm);

    const element = document.getElementById("riepilogo");
    element.classList.remove("d-none");

    window.scrollBy(0, 500)

    alert("Volevo far qualcosa di spaventoso per Halloween, ma cosa c'è di più spaventoso di Trenitalia?");

    

    if (userAge.value === "minorenne") {
        const prezzoScontato = (prezzoStandard - (prezzoStandard * 20 / 100)).toFixed(2);
        console.log(`Il prezzo totale del biglietto è ${prezzoScontato}`);
        offert.innerHTML = `20%`
        toth.innerHTML = `${prezzoScontato}`;
    } else if (userAge.value === "over") {
        const prezzoScontato = (prezzoStandard - (prezzoStandard * 40 / 100)).toFixed(2);
        console.log(`Il prezzo totale del biglietto è ${prezzoScontato}`);
        offert.innerHTML = `40%`
        toth.innerHTML = `${prezzoScontato}`;
    } else {
        console.log(`Il prezzo totale del biglietto è ${prezzoStandard}`);
        offert.innerHTML = `Biglietto Standard`
        toth.innerHTML = `${prezzoStandard.toFixed(2)} €`;
    }
})

