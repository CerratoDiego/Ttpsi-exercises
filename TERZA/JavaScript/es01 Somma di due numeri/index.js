"use strict"    //vuol dire che devo sempre dichiarare le variabili

function somma() {
    let _txtN1=document.getElementById("txtN1")    /* i puntatori iniziano con underscore (_) */
    let _txtN2=document.getElementById("txtN2")
    let _txtRis=document.getElementById("txtRis")
    let _span=document.getElementsByTagName("span") [0]     /* getElementsByTagName restituisce un vettore numerativo lungo 1 perchè c'è solo uno span */

    let n1=parseInt(_txtN1.value)
    console.log("n1 = ", n1)
    let n2=parseInt(_txtN2.value)
    console.log("n2 = ", n2)
    let ris=n1+n2
    console.log("ris = ", ris)
    //visualizzazione del risultato in 3 modi diversi
    _txtRis.value=ris       /* la conversione da numero a stringa viene fatto in automatico, mentre il contrario no (si usa parseInt) */
    _span.textContent="ris = " + ris
    alert("ris = " + ris)
}