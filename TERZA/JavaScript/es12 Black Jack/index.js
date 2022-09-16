"use strict"

let _txtBanco
let _txtUser
let _txtNum
let _chkNum
let _btnBanco
let somma = 0
let numero

window.onload = function() {
	_txtBanco = document.getElementById("txtBanco")
	_txtBanco.value = generaNumero(1, 11)
	_txtUser = document.getElementById("txtUser")
	_btnBanco = document.getElementById("btnBanco")

	_txtNum = document.getElementsByName("txtNum")
	_chkNum = document.getElementsByName("chkNum")
}

function banco() {
	let carta = generaNumero(1, 11)
	_txtBanco.value = parseInt(_txtBanco.value) + carta
	let n = _txtBanco.value
	
	for(i = 0; i < _chkNum.length; i++)
		_chkNum[i].disabled = true

	if(n > 16 && n < 22)
	{
		if(somma > n)
		{
			alert("Il giocatore vince!")
			termina()
		}
		else
			if(somma <= n)
			{
				alert("Vince il banco! Hai perso")
				termina()
			}
	}
	else
		if(n > 21)
		{
			alert("Il giocatore vince!")
			termina()
		}
}

function visualizza(pos) {
	_txtNum[pos].value = generaNumero(1, 11)
	let n = parseInt(_txtNum[pos].value)
	somma += n
	_txtUser.value = somma
	_chkNum[pos].disabled = true
	if(somma > 21)
	{
		alert("Hai perso")
		termina()
	}
}

function termina() {
	_btnBanco.disabled = true
	for(let i = 0; i < _chkNum.length; i++)
		_chkNum[i].disabled = true
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}