"use strict"

let numeroSegreto
let _divMessage
let _divTentativi
let _txtNumero
let cont = 0
let _btnGioca

function init() {
    _txtNumero = document.getElementById("txtNumero")
    _divMessage = document.getElementById("divMessage")
    _btnGioca = document.getElementById("btnGioca")
    _divTentativi = document.getElementById("divTentativi")
    numeroSegreto = generaNumero(1, 101)
    console.log(numeroSegreto)
}

function gioca() {
    if(_txtNumero.value == "")
        alert("Inserire un numero!")
    else
    {
        let vinto = false
        let numeroUtente = parseInt(_txtNumero.value)

        cont++
        if(numeroUtente > numeroSegreto) 
            _divMessage.innerHTML += "Il numero " + numeroUtente + " è troppo grande<br>"
        else 
            if(numeroUtente < numeroSegreto) 
                _divMessage.innerHTML += "Il numero " + numeroUtente + " è troppo piccolo<br>"
        else 
        {
            alert("Hai indovinato in " + cont + " tentativi!")
            _btnGioca.disabled = true
            _txtNumero.disabled = true
            vinto = true
        }
        _divTentativi.textContent = "Tentativi: " + cont
        if(cont == 10 && !vinto)
        {
            alert("Tentativi esauriti, HAI PERSO")
            _btnGioca.disabled = true
            _txtNumero.disabled = true
        }
    }
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}