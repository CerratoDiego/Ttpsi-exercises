"use strict"

let vet1 = []
let vet2 = []
let aus = []
let _txt1
let _txt2
let _divVet1
let _divVet2

window.onload = function() {
	_txt1 = document.getElementById("txt1")
	_txt2 = document.getElementById("txt2")

	for(let i = 65; i <= 90; i++)
	{
		vet1[i - 65] = String.fromCharCode(i)
		aus[i - 65] = String.fromCharCode(i)
	}
	console.log(vet1)
	console.log(aus)
	for(let i = 0; i < vet1.length; i++)
	{
		let pos = generaNumero(0, aus.length)
		vet2[i] = aus[pos]
		aus.splice(pos, 1)
	}
	console.log(vet2)

	_divVet1 = document.getElementById("divVet1")
	_divVet2 = document.getElementById("divVet2")

	_divVet1.style.letterSpacing = "10px"
	_divVet2.style.letterSpacing = "10px"
	for(let i = 0; i < vet1.length; i++)
	{
		_divVet1.innerHTML += vet1[i]
		_divVet2.innerHTML += vet2[i]
	}
}

function scrambler() {
	_txt2.value = ""
	_txt1.value = _txt1.value.toUpperCase()
	for(let i = 0; i < _txt1.value.length; i++)
	{
		let char = _txt1.value[i]

		let pos = vet1.indexOf(char, 0)
		if(pos != -1)
		{
			_txt2.value += vet2[pos]
			//soluzione logicamente corretta, ma non funziona perchè le stringhe non possono essere modificate
			//_txt2.value[i] = vet2[pos]
		}
		else
			_txt2.value += char
		/*--------------------------------------------------------------------------------------------------*/
		/*if(char >= 'A' && char <= 'Z')
		{
			let pos = vet1.indexOf(char, 0)
			_txt2.value += vet2[pos]
			//soluzione logicamente corretta, ma non funziona perchè le stringhe non possono essere modificate
			//_txt2.value[i] = vet2[pos]
		}
		else
			_txt2.value += char*/
	}
}

function descrambler() {
	_txt2.value = ""
	_txt1.value = _txt1.value.toUpperCase()
	for(let i = 0; i < _txt1.value.length; i++)
	{
		let char = _txt1.value[i]

		let pos = vet2.indexOf(char, 0)
		if(pos != -1)
		{
			_txt2.value += vet1[pos]
			//soluzione logicamente corretta, ma non funziona perchè le stringhe non possono essere modificate
			//_txt2.value[i] = vet1[pos]
		}
		else
			_txt2.value += char
		/*--------------------------------------------------------------------------------------------------*/
		/*if(char >= 'A' && char <= 'Z')
		{
			let pos = vet2.indexOf(char, 0)
			_txt2.value += vet1[pos]
			//soluzione logicamente corretta, ma non funziona perchè le stringhe non possono essere modificate
			//_txt2.value[i] = vet1[pos]
		}
		else
			_txt2.value += char*/
	}
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}