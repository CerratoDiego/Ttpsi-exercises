"use strict";

let citta=[
	"Londra", "Liverpool", "Manchester", "Cambridge",
	"Amsterdam", "Rotterdam", "Maastricht",
	"Lisbona", "Oporto", "Braga",
	"Stoccolma", "Goteborg",
	"Kiev", "Leopoli", "Odessa",
	"Berna", "Lugano", "Zurigo", 
	"Madrid", "Barcellona"
]

let nazioni=[
	"Inghilterra", "Inghilterra", "Inghilterra", "Inghilterra", 
	"Olanda", "Olanda", "Olanda",
	"Portogallo", "Portogallo", "Portogallo",
	"Svezia", "Svezia",
	"Ucraina", "Ucraina", "Ucraina",
	"Svizzera", "Svizzera", "Svizzera",
	"Spagna", "Spagna"]

let elencoUnivocoNazioni = []

let _bandiera, _nazione, posNazione, _txtCitta, _chkCitta, _img, _btnControlla, contClick, _cnt, nCitta, contCitta
let ausCitta = [], ausNazioni = []

window.onload = function() {
	_bandiera = document.getElementById("bandiera")
	_nazione = document.getElementById("nazione")
	_txtCitta = document.getElementsByName("txtCitta")
	_chkCitta = document.getElementsByName("chkCitta")
	_img = document.getElementsByClassName("img")
	_btnControlla = document.getElementById("btncontrolla")
	_cnt = document.getElementById("cnt")
	contClick = 0
	nCitta = 0
	contCitta = 0

	let j = 0
	for(let i = 0; i < nazioni.length; i++)
	{
		if(!elencoUnivocoNazioni.includes(nazioni[i]))
			elencoUnivocoNazioni[j++] = nazioni[i]
	}
	console.log(elencoUnivocoNazioni)

	generaNazione()

	for(let i = 0; i < citta.length; i++)
	{
		ausCitta[i] = citta[i]
		ausNazioni[i] = nazioni[i]
	}
	for(let i = 0; i < citta.length; i++)
	{
		let pos = generaNumero(0, ausCitta.length)
		_txtCitta[i].value = ausCitta[pos]
		_txtCitta[i].masked = ausNazioni[pos]
		ausCitta.splice(pos, 1)
		ausNazioni.splice(pos, 1)
	}
}

function controlla() {
	let finito = true

	for(let i = 0; i < citta.length; i++)
	{
		if(_chkCitta[i].checked == true && _chkCitta[i].disabled == false)
		{
			contClick++
			_cnt.innerHTML = contClick
			if(_txtCitta[i].masked == elencoUnivocoNazioni[posNazione])
			{
				_chkCitta[i].disabled = true
				_txtCitta[i].disabled = true
				_img[i].src = `img/${_txtCitta[i].masked}.png`
				contCitta++
			}
			else
				_chkCitta[i].checked = false
		}
		if(_chkCitta[i].disabled == false)
			finito = false
	}
	if(contCitta == nCitta && !finito)
	{
		contCitta = 0
		elencoUnivocoNazioni.splice(posNazione, 1)
		generaNazione()
	}
	if(finito)
	{
		alert("Bravo, hai vinto!")
		_btnControlla.disabled = true
	}
}

function generaNazione() {
	posNazione = generaNumero(0,elencoUnivocoNazioni.length)
	_nazione.innerHTML = elencoUnivocoNazioni[posNazione]
	_bandiera.src = `img/${elencoUnivocoNazioni[posNazione]}.png`
	nCitta = 0

	for(let i = 0; i < citta.length; i++)
	{
		if(nazioni[i] == elencoUnivocoNazioni[posNazione])
			nCitta++
	}
}

function generaNumero(a, b) {
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}