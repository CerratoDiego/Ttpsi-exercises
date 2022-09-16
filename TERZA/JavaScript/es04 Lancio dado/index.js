"use strict"

let cont = []
let _txtLanci
let _pMsg

function init() {
	//ACCESSO AGLI ELEMENTI DELLA PAGINA
	_txtLanci = document.getElementById("txtLanci")
	_pMsg = document.getElementsByName("msg")
	//_pMsg = document.getElementsByTagName("p")

	//INIZIALIZZAZIONE DEL VETTORE
	for(let i = 0; i < 6; i++)
		cont.push(0)
	console.log(cont)
}

function genera() {
	//AZZERAMENTO
	for(let i = 0; i < 6; i++)
		cont[i] = 0

	let lanci = _txtLanci.value

	for(let i = 0; i < lanci; i++)
	{
		let n = generaNumero(1, 7)
		cont[n - 1]++
	}

	for(let i = 0; i < 6; i++)
		_pMsg[i].innerHTML = "La faccia " + (i + 1) + " è comparsa " + cont[i] + " volte"
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}