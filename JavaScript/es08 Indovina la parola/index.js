"use strict"

let vet = [ "Italia", "Pizzeria", "Automobilismo", "Napoli", "Romania", 
			"Marocco", "Lamborghini", "Lavagna", "Lasagna", "Lampadario" ]
let parolaSegreta
let punti = 100
let _txtPunti
let _txtCar
let _chkRis
let _btnInvia
let _btnRisposta
let _txtIns

window.onload = function() {
	let pos = generaNumero(0, vet.length)
	parolaSegreta = vet[pos]
	parolaSegreta = parolaSegreta.toUpperCase() 

	_txtPunti = document.getElementById("txtPunti")
	_txtPunti.value = punti
	_txtCar = document.getElementsByName("txtCar")
	_chkRis = document.getElementsByName("chkRis")
	_btnInvia = document.getElementById("btnInvia")
	_btnRisposta = document.getElementById("btnRisposta")
	_txtIns = document.getElementById("txtIns")

	for(let i = 0; i < _txtCar.length; i++)
	{
		_txtCar[i].readOnly = true
		_chkRis[i].disabled = true
		_chkRis[i].checked = false

		if(i < parolaSegreta.length)
			_txtCar[i].value = "*"
	}
	_btnInvia.disabled = false
	_btnRisposta.disabled = false
	console.log(parolaSegreta)
}

function confronta() {
	let lettera = _txtIns.value.toUpperCase()

	for(let i = 0; i < parolaSegreta.length; i++)
	{
		if(lettera == parolaSegreta[i])
		{
			_txtCar[i].value = parolaSegreta[i]
			_chkRis[i].checked = true
		}
	}
	punti -= 5
	_txtPunti.value = punti

	if(punti <= 0)
	{
		alert("HAI PERSO")
		_btnInvia.disabled = true
		_btnRisposta.disabled = true
	}
	else
	{
		let cont = 0
		for(let i = 0; i < parolaSegreta.length; i++)
		{
			if(_chkRis[i].checked == true)
				cont++
		}
		if(cont == parolaSegreta.length)
		{
			alert("HAI VINTO!")
			_btnInvia.disabled = true
			_btnRisposta.disabled = true
		}
	}
}

function rispondi() {
	let risposta = prompt("Inserisci la tua risposta").toUpperCase()

	if(risposta == parolaSegreta)
	{
		alert("HAI VINTO!")
		_btnInvia.disabled = true
		_btnRisposta.disabled = true
	}
	else
	{
		punti -= 20
		_txtPunti.value = punti
		if(punti <= 0)
		{
			alert("HAI PERSO")
			_btnInvia.disabled = true
			_btnRisposta.disabled = true
		}
		else
			alert("RISPOSTA ERRATA")
	}
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}