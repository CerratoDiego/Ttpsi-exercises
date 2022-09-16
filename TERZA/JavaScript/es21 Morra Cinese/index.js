"use strict"

let cartaU = ""
let cartaC = ""
let vet = ["mano", "sasso", "forbice"]

window.onload = function() {
	let _imgUtente = document.getElementById("imgUtente")
	let _imgComputer = document.getElementById("imgComputer")
	let _imgSmall = document.getElementsByClassName("small")
	let _btnGioca = document.getElementById("btnGioca")
	let _txtRisultato = document.getElementById("txtRisultato")

	_imgUtente.style.backgroundImage = `url(img/vuota.png)`
	_imgComputer.style.backgroundImage = `url(img/vuota.png)`

	for(let i = 0; i < vet.length; i++)
	{
		_imgSmall[i].style.backgroundImage = `url("img/${vet[i]}.png")`
		_imgSmall[i].masked = vet[i]	//creo un campo nascosto

		_imgSmall[i].addEventListener("click", function() {
			_imgComputer.style.backgroundImage = `url(img/vuota.png)`
			_txtRisultato.innerHTML = ""
			let immagine = this.style.backgroundImage
			_imgUtente.style.backgroundImage = immagine
			//cartaU = vet[i] FUNZIONA SOLO SE i E' UN LET, SE E' UN VAR NON FUNZIONA
			cartaU = _imgSmall[i].masked
		})
	}

	_btnGioca.addEventListener("click", function() {
		if(cartaU == "")
			alert("Devi scegliere un'opzione")
		else
		{
			let computer
			do
			{
				let pos = generaNumero(0, 3)
				cartaC = vet[pos]
			}
			while(cartaC == cartaU)
			_imgComputer.style.backgroundImage = `url("img/${cartaC}.png")`
			if(cartaU == "mano")
			{
				if(cartaC == "forbice")
					_txtRisultato.innerHTML = "Ha vinto il computer"
				else
					_txtRisultato.innerHTML = "Ha vinto l'utente"
			}
			else if(cartaU == "forbice")
			{
				if(cartaC == "sasso")
					_txtRisultato.innerHTML = "Ha vinto il computer"
				else
					_txtRisultato.innerHTML = "Ha vinto l'utente"
			}
			else
			{
				if(cartaC == "mano")
					_txtRisultato.innerHTML = "Ha vinto il computer"
				else
					_txtRisultato.innerHTML = "Ha vinto l'utente"
			}
		}
	})
}

function genera() {
	let pos

	do
	{
		pos = generaNumero(0, 3)
	}
	while(_imgSmall[pos].masked == sc)
	return _imgSmall[pos].masked
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}