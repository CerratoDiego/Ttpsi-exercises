"use strict";

let vet = []

window.onload = function () {
	let _img = document.getElementById("imgCarta");
	let _btnGioca = document.getElementById("btnGioca");
	let _lblSomma = document.getElementById("lblSomma");
	let _lblCarte = document.getElementById("lblCarte");
	let _lblRisultato = document.getElementById("lblRisultato");

	_btnGioca.addEventListener("click", gioca)

	function gioca() {
		_btnGioca.disabled = true
		setTimeout(visualizza, 1000)
	}

	function visualizza() {
		let numero
		vet.push(numero)
		do {
			numero = generaNumero(0, 11)
		}
		while (vet.includes(numero))
		_img.src = `img/bg_d${numero}.gif`
		if (numero > 7)
			numero = 0.5
		_lblSomma.innerHTML = parseFloat(_lblSomma.innerHTML) + numero
		_lblCarte.innerHTML = parseInt(_lblCarte.innerHTML) + 1
		if (_lblCarte.innerHTML < "3")
			setTimeout(visualizza, 1000)
		else {
			if (parseFloat(_lblSomma.innerHTML) <= 7.5)
				_lblRisultato.innerHTML = "Hai vinto!"
			else
				_lblRisultato.innerHTML = "Hai perso"
			setTimeout(function () {
				_btnGioca.disabled = false
				_lblCarte.innerHTML = "0"
				_lblSomma.innerHTML = "0"
				_lblRisultato.innerHTML = ""
				_img.src = ""
				vet = []
			}, 2000)
		}
	}
}


function generaNumero(min, max) {
	let rnd = Math.floor((max - min) * Math.random()) + min;
	return rnd;
}