"use strict"

let vet1 = ["arco", "binari", "roulette", "palla", "disco", "luci", "pop corn", "moto", "sci", "aperitivo"];
let vet2 = ["freccia", "treno", "fiches", "canestro", "stereo", "discoteca", "cinema", "casco", "pista", "bar"];
let _imgCasuale
let _imgRisposta
let _optRisposta
let _btnControlla
let _txtRisposta
let _txtDescrizione
let _txtCorrette
let _txtErrate
let corrette
let errate
let pos
let img 

window.onload = function() {
	_imgCasuale = document.getElementById("img")
	_imgRisposta = document.getElementsByClassName("imgRisposta")
	_optRisposta = document.getElementsByName("optRisposta")
	_btnControlla = document.getElementById("btnControlla")
	_txtRisposta = document.getElementsByClassName("txtRisposta")
	_txtDescrizione = document.getElementById("txt")
	_txtCorrette = document.getElementById("txtCorrette")
	_txtErrate = document.getElementById("txtErrate")

	corrette = 0
	errate = 0

	img = generaNumero(1, 11)
	_imgCasuale.src = `img/img${img} ${vet1[img - 1]}.jpg`
	_txtDescrizione.value = vet1[img - 1]

	for(let i = 0; i < 10; i++)
	{
		_imgRisposta[i].src = `img/img${i + 1} ${vet2[i]}.jpg`
		_optRisposta[i].checked = false
		_txtRisposta[i].value = ""
	}
}

function controlla() {
	let cont = 0
	for(let i = 0; i < 10; i++)
	{
		if(_optRisposta[i].checked == true)
		{
			cont++
			pos = i
		}
	}
	if(cont != 1)
		alert("Nessun Radio Button Selezionato")
	else
	{
		if(pos == (img - 1))
		{
			if(_txtRisposta[pos].value == vet2[img - 1])
			{
				corrette++
				_txtCorrette.innerHTML = "Risposte Corrette: " + corrette
				img = generaNumeroConEsclusione(1, 11, img)
				_imgCasuale.src = `img/img${img} ${vet1[img - 1]}.jpg`
				_txtDescrizione.value = vet1[img - 1]
				for(let i = 0; i < 10; i++)
				{
					_txtRisposta[i].innerHTML = ""
					_optRisposta[i].checked = false
				}
			}
			else
			{
				errate++
				_txtErrate.innerHTML = "Risposte Errate: " + errate
				alert(vet2[img - 1])
			}
		}
		else
		{
			errate++
			_txtErrate.innerHTML = "Risposte Errate: " + errate
			alert(vet2[img - 1])
		}
	}
}

function cancella() {
	for(let i = 0; i < 10; i++)
	{
		_txtRisposta[i].value = ""
	}
}

function generaNumeroConEsclusione(a, b, nEscl) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris
	do
	{
		ris =  Math.floor((b - a)*Math.random()) + a
	}
	while(ris == nEscl)
	return ris
}

function generaNumero(a, b, ) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}