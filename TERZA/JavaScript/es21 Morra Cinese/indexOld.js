"use strict"

let _imgUtente
let _imgSmall
let sc

window.onload = function() {
	_imgUtente = document.getElementById("imgUtente")
	let _imgComputer = document.getElementById("imgComputer")
	_imgSmall = document.getElementsByClassName("small")
	let _btnGioca = document.getElementById("btnGioca")
	let _txtRisultato = document.getElementById("txtRisultato")

	_imgUtente.style.backgroundImage = `url(img/vuota.png)`
	_imgComputer.style.backgroundImage = `url(img/vuota.png)`
	_imgSmall[0].style.backgroundImage = `url("img/mano.png")`
	_imgSmall[1].style.backgroundImage = `url("img/sasso.png")`
	_imgSmall[2].style.backgroundImage = `url("img/forbice.png")`

	_imgSmall[0].masked = "mano"
	_imgSmall[1].masked = "sasso"
	_imgSmall[2].masked = "forbice"

	_imgSmall[0].addEventListener("click", scelta)
	_imgSmall[1].addEventListener("click", scelta)
	_imgSmall[2].addEventListener("click", scelta)
	_btnGioca.addEventListener("click", function() {
		if(_imgUtente.style.backgroundImage == `url(img/vuota.png)`)
		{
			alert("Devi scegliere un'opzione")
		}
		else
		{
			let computer = genera()
			_imgComputer.style.backgroundImage = `url("img/${computer}.png")`	//stringa dinamica
			//_imgComputer.style.backgroundImage = "url(img/" + computer + ".png)"	//stringa statica
			if(_imgUtente.style.backgroundImage.includes("mano"))
			{
				if(_imgComputer.style.backgroundImage.includes("forbice"))
					_txtRisultato.innerHTML = "Ha vinto il computer"
				else
					_txtRisultato.innerHTML = "Ha vinto l'utente"
			}
			else if(_imgUtente.style.backgroundImage.includes("forbice"))
			{
				if(_imgComputer.style.backgroundImage.includes("sasso"))
					_txtRisultato.innerHTML = "Ha vinto il computer"
				else
					_txtRisultato.innerHTML = "Ha vinto l'utente"
			}
			else
			{
				if(_imgComputer.style.backgroundImage.includes("mano"))
					_txtRisultato.innerHTML = "Ha vinto il computer"
				else
					_txtRisultato.innerHTML = "Ha vinto l'utente"
			}
		}
	})
}

function scelta() {
	_imgUtente.style.backgroundImage = this.style.backgroundImage
	sc = this.masked
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