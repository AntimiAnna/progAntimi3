 let totale=0;

function acquista(){

    let prodotto=0;
    
    prodotto= document.getElementById("inserisci").value;
    console.log(typeof(prodotto));
    if(prodotto>0 && !isNaN(prodotto)){
        prodotto = parseFloat(prodotto);
        console.log(prodotto);
        totale += prodotto;
        console.log("totale: " + totale)

        document.getElementById("testo").innerHTML=totale + "€";
     }
    
}

function reset(){
    totale=0;
    document.getElementById("testo").innerHTML=totale + "€";
}