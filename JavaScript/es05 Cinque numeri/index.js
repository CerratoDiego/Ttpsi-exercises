"use strict"

let vettoreSegreto = []
let aus = [1, 2, 3, 4, 5]
//let temp
let _txtNum
let _chkNum
let _btnInvia

function init() {
	_txtNum = document.getElementsByName("txtNum")
	_chkNum = document.getElementsByName("chkNum")
	_btnInvia = document.getElementById("btnInvia")

	for(let i = 0; i < 5; i++)
		_chkNum[i].checked = false
	
	for(let i = 0; i < 5; i++)
	{
		let pos = generaNumero(0, aus.length)
		vettoreSegreto.push(aus[pos])
		//vettoreSegreto[i] = aus[pos]
		aus.splice(pos, 1)
	}

	//METODO ALTERNATIVO

	/*for(let i = 0; i < 5; i++)
		vettoreSegreto[i] = i + 1

	for(let i = 0; i < 5; i++)
	{
		let j = generaNumero(0,5)

		temp = vettoreSegreto[i]
		vettoreSegreto[i] = vettoreSegreto[j]
		vettoreSegreto[j] = temp
	}*/
	console.log(vettoreSegreto)
}

function invia() {
	let cont = 0

	for(let i = 0; i < 5; i++)
		if(_txtNum[i].value == vettoreSegreto[i])
		{
			_chkNum[i].checked = true
			cont++
		}
		else
			_chkNum[i].checked = false
	if(cont==5)
	{
		alert("Hai vinto!")
		_btnInvia.disabled = true
		for(let i = 0; i < 5; i++)
			_txtNum[i].disabled = true
	}
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}