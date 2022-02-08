"use strict"

let vet = []
let aus = []
let _txtN
let _chkN
let _btnInvia

function init() {
	_txtN = document.getElementsByName("txtN")
	_chkN = document.getElementsByName("chkN")
	_btnInvia = document.getElementById("btnInvia")

	for(let i = 0; i < 3; i++)
		_chkN[i].checked = false

	for(let i = 0; i < 9; i++)
		aus[i] = i + 1
	
	for(let i = 0; i < 3; i++)
	{
		let pos = generaNumero(0, aus.length)
		vet[i] = aus[pos]
		aus.splice(pos, 1)
	}
	console.log(vet)
}

function controlla() {
	let cont = 0

	for(let i = 0; i < 3; i++)
	{
		if(vet.includes(parseInt(_txtN[i].value)))
			cont++;
		_chkN[i].checked = false
	}
	
	for(let i = 0; i < cont; i++)
		_chkN[i].checked = true
	
	if(cont == 3)
	{
		alert("Hai vinto!")
		_btnInvia.disabled = true
		for(let i = 0; i < 3; i++)
			_txtN[i].disabled = true
	}
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}