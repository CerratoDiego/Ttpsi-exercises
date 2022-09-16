"use strict"

const DIM = 5

window.onload = function () {
	let _wrapper = document.getElementById("wrapper")
	let cont = 0

	for (let i = 0; i < DIM; i++) {
		for (let j = 0; j < DIM; j++) {
			let _button = document.createElement("button")
			_wrapper.appendChild(_button)
			_button.id = `btn-${i}-${j}`
			_button.bomba = false
			_button.addEventListener("click", visualizza)
		}
	}

	let k = 0
	while (k < DIM) {
		let r = generaNumero(0, DIM)
		let c = generaNumero(0, DIM)
		let _btn = document.getElementById(`btn-${r}-${c}`)
		if (_btn.bomba == false) {
			_btn.bomba = true
			k++
		}
		else
			k--
	}

	function visualizza() {
		let aus = this.id.split("-")
		let i = parseInt(aus[1])
		let j = parseInt(aus[2])
		cont++

		if (this.bomba == true) {
			this.style.backgroundImage = `url("bomba.png")`
			alert("Hai perso!")
			disabilita()
		}
		else {
			let nBombe = 0
			if (i != 0) {
				let _btn = document.getElementById(`btn-${i - 1}-${j}`)
				if (_btn.bomba == true)
					nBombe++
			}
			if (i != 4) {
				let _btn = document.getElementById(`btn-${i + 1}-${j}`)
				if (_btn.bomba == true)
					nBombe++
			}
			if (j != 0) {
				let _btn = document.getElementById(`btn-${i}-${j - 1}`)
				if (_btn.bomba == true)
					nBombe++
			}
			if (j != 4) {
				let _btn = document.getElementById(`btn-${i}-${j + 1}`)
				if (_btn.bomba == true)
					nBombe++
			}
			if (nBombe == 0)
				this.innerHTML = "X"
			else {
				this.innerHTML = nBombe
				this.style.color = "red"
				this.style.fontWeight = "bold"
			}
			this.disabled = true
		}

		if (cont == 20) {
			alert("Hai vinto!")
			disabilita()
		}
	}

	function disabilita() {
		let _buttons = document.getElementsByTagName("button")
		for (let _button of _buttons) {
			_button.removeEventListener("click", visualizza)
		}
	}
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris = Math.floor((b - a) * Math.random()) + a
	return ris
}