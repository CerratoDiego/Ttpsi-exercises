"use strict"

let num = 0
let operatore = ""
let _btnNum
let _btnOperatore
let _btnCanc
let _btnClacola
let _btnRis
let _txtDisplay
let primoNumero
let cancella = false

window.onload = function() {
	_btnNum = document.getElementsByName("btnNum")
	_btnOperatore = document.getElementsByName("btnOperatore")
	_btnClacola = document.getElementById("btnRis")
	_btnCanc = document.getElementById("btnClear")
	_btnRis = document.getElementById("btnRis")
	_txtDisplay = document.getElementById("txtDisplay")

	for(let i = 0; i < _btnNum.length; i++)
	{
		_btnNum[i].addEventListener("click", visualizza)
	}
	for(let i = 0; i < _btnOperatore.length; i++)
	{
		_btnOperatore[i].addEventListener("click", this.esegui)
	}
	_btnCanc.addEventListener("click", pulisci)
	_btnRis.addEventListener("click", calcola)
}
function risultato() {

}

function pulisci() {
	_txtDisplay.value = ""
	_txtDisplay.innerHTML = ""
}

function esegui() {
	operatore = this.value
	if(_txtDisplay.value == "")
		_txtDisplay.value = 0
	primoNumero = _txtDisplay.value
	_txtDisplay.value = ""
}

function visualizza() {
	if(cancella)
	{
		_txtDisplay.value = ""
		cancella = false
	}
	let num = this.value
	_txtDisplay.value += num;
}

function calcola() {
	switch(operatore)
	{
		case '+':
			_txtDisplay.value = primoNumero + parseFloat(_txtDisplay.value)
			break
		case '-':
			_txtDisplay.value = primoNumero - parseFloat(_txtDisplay.value)
			break
		case '*':
			_txtDisplay.value = primoNumero * parseFloat(_txtDisplay.value)
			break
		case '/':
			_txtDisplay.value = primoNumero / parseFloat(_txtDisplay.value)
			break
	}
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}