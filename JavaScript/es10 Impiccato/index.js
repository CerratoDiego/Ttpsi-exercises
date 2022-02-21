"use strict";

const nomi = ["Italia", "Lavagna", "Pizza", "Lasagne", "Spiedino", "Ananas", "Gnocchi", "Gorgonzola", "Broccoli", "Mango", "Biscotti", 
			  "Giornale", "Carabina", "Affettati", "Lungimirante", "Affaticato", "Effervescente", "Ambulante", "Ambulanza", "Ostetricia"];
const MAX_TENTATIVI=5;

let parolaSegreta
let _txtParola
let _txtLettera
let _btnInvia
let parola = []
let tentativi = 0
let _img

window.onload = function() {
	_txtParola = document.getElementById("txtParola")
	_txtLettera = document.getElementById("txtLettera")
	_btnInvia = document.getElementsByTagName("button")[0]
	_img = document.getElementsByTagName("img")[0]	//puntatore alla prima immagine
	tentativi = 0

	parolaSegreta = nomi[generaNumero(0, nomi.length)]
	parolaSegreta = parolaSegreta.toUpperCase()
	console.log(parolaSegreta)

	//LETTER SPACING IN JS
	_txtParola.style.letterSpacing = "10px"
	for(let i = 0; i < parolaSegreta.length; i++)
	{
		parola[i] = "*"
		_txtParola.value += parola[i]
	}
}

function elabora() {
	let trovato = false
	let carattere = _txtLettera.value.toUpperCase()
	let aus = _txtParola.value

	_txtParola.value = ""

	for(let i = 0; i < parolaSegreta.length; i++)
	{
		if(parolaSegreta[i] == carattere)
		{
			_txtParola.value += carattere
			trovato = true
		}
		else
			_txtParola.value += aus[i]
	}
	if(!trovato)
	{
		tentativi++
		_img.src = `img/Fig${tentativi}.png`
		if(tentativi == MAX_TENTATIVI)
		{
			alert("Hai perso")
			_txtLettera.disabled = true
			_btnInvia.disabled = true
		}
	}
	else
	{
		if(_txtParola.value == parolaSegreta)
		{
			alert("Hai vinto!")
			_txtLettera.disabled = true
			_btnInvia.disabled = true
		}
		//soluzione alternativa
		/*if(!_txtParola.value.includes("*"))
		{
			alert("Hai vinto!")
			_txtLettera.disabled = true
			_btnInvia.disabled = true
		}*/
	}
}


function generaNumero(a, b){
	return Math.floor((b - a)*Math.random()) + a;
}