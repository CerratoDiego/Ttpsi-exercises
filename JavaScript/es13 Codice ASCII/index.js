"use strict"

let _voci
let _txtNum
let _txtAscii
let _chkRis
let _btnControlla

window.onload = function() {
	_voci = document.getElementById("voci")
	_txtNum = document.getElementsByName("txtNum")
	_txtAscii = document.getElementsByName("txtAscii")
	_chkRis = document.getElementsByName("chkRis")
	_btnControlla = document.getElementById("btnControlla")

	_voci.selectedIndex = -1

	for(let i = 0; i < 6; i++)
	{
		_chkRis[i].disabled = true
		_chkRis[i].checked = false
	}
}

function genera() {
	let value = _voci.value

	let vet = value.split("-")
	let min = vet[0]
	let max = vet[1]
	let aus = []

	let cnt = 0
	for(let i = min; i <= max; i++)
	{
		aus[cnt] = i
		cnt++
	}

	for(let i = 0; i < 6; i++)
	{
		let pos = generaNumero(0, aus.length)
		_txtNum[i].value = aus[pos]
		aus.splice(pos, 1)
		_txtAscii[i].value = ""
		_chkRis[i].checked = false
	}
	_btnControlla.disabled = true
	//faccio poi splice
}

function check() {
	let i = 0
	let mancante = false

	while(!mancante && i < 6)
	{
		if(_txtAscii[i].value == "")
			mancante = true
		i++
	}
	if(mancante)
		_btnControlla.disabled = true
	else
		_btnControlla.disabled = false
}

function controllaN() {
	let cont = 0
	for(let i = 0; i < 6; i++)
	{
		let aus = String.fromCharCode(_txtNum[i].value)
		if(aus == _txtAscii[i].value)
		{
			_chkRis[i].checked = true
			_txtAscii[i].disabled = true
			cont++
		}
		else
			_chkRis[i].checked = false
	}
	if(cont == 6)
	{
		alert("Bravissimo")
		_btnControlla.disabled = true
	}
	else if(cont == 0)
		alert("Risultato pessimo")
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}