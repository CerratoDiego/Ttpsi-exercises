"use strict"

const GRIGIO = "rgb(120, 120, 120)"
const ROSSO = "rgb(255, 0, 0)"
const GIALLO = "rgb(255, 255, 0)"
const VERDE = "rgb(0, 220, 0)"
const BLU = "rgb(0, 0, 220)"
const VIOLA = "rgb(135, 38, 165)"

const BIANCO = "rgb(236, 236, 236)"
const NERO = "rgb(0, 0, 0)"

let numSegreti = new Array(4);
let numUtente = new Array(4);

let rigaCorrente = 0;

window.onload = function () {
	let _table = document.getElementsByTagName("table")[0]
	let _tr = document.createElement("tr")
	_table.appendChild(_tr)

	for (let i = 0; i < numSegreti.length; i++)
		numSegreti[i] = generaNumero(0, 5)

	console.log(numSegreti)

	for (let i = 0; i < 3; i++) {
		let _td = document.createElement("td")
		_tr.appendChild(_td)
		if (i == 0)
			_td.innerHTML = rigaCorrente
		else {
			for (let j = 0; j < 4; j++) {
				let _img = document.createElement("img")
				_td.appendChild(_img)
				_img.classList.add("pedina")
				if (i == 1) {
					_img.style.backgroundColor = GRIGIO
					_img.cont = 0
					numUtente[j] = _img.cont
					_img.addEventListener("click", colora)
					_img.id = `img-${rigaCorrente}-${j}`
				}
				else {
					_img.style.backgroundColor = BIANCO
					_img.id = `ris-${rigaCorrente}-${j}`
				}
			}
			if (i == 1) {
				let _button = document.createElement("button")
				_td.appendChild(_button)
				_button.innerHTML = "invia"
				_button.addEventListener("click", conferma)
			}
		}
	}

	function colora() {
		let aus = this.id.split("-")
		let j = aus[2]

		let col = trovaColore(this.cont)
		this.style.backgroundColor = `${col}`
		numUtente[j] = this.cont
		this.cont++
		if (this.cont == 6)
			this.cont = 0
	}

	function nuovaRiga() {
		let _tr = document.createElement("tr")
		_table.appendChild(_tr)
		for (let i = 0; i < 3; i++) {
			let _td = document.createElement("td")
			_tr.appendChild(_td)
			if (i == 0)
				_td.innerHTML = rigaCorrente
			else {
				for (let j = 0; j < 4; j++) {
					let _img = document.createElement("img")
					_td.appendChild(_img)
					_img.classList.add("pedina")
					if (i == 1) {
						_img.style.backgroundColor = GRIGIO
						_img.cont = 0
						numUtente[j] = _img.cont
						_img.addEventListener("click", colora)
						_img.id = `img-${rigaCorrente}-${j}`
					}
					else {
						_img.style.backgroundColor = BIANCO
						_img.id = `ris-${rigaCorrente}-${j}`
					}
				}
				if (i == 1) {
					let _button = document.createElement("button")
					_td.appendChild(_button)
					_button.innerHTML = "invia"
					_button.addEventListener("click", conferma)
				}
			}
		}
	}

	function conferma() {
		let indovinate = 0
		disabilitaPedine()
		for (let i = 0; i < numSegreti.length; i++) {
			let _ped = document.getElementById(`ris-${rigaCorrente}-${i}`)
			if (numSegreti[i] == numUtente[i]) {
				_ped.style.backgroundColor = NERO
				indovinate++
			}
			else
				_ped.style.backgroundColor = BIANCO
		}
		rigaCorrente++
		if (indovinate != 4)
			nuovaRiga()
		else
			alert("Hai vinto!")
	}

	function disabilitaPedine() {
		let _pedine = document.getElementsByClassName("pedina")
		let _btn = document.getElementsByTagName("button")[rigaCorrente]
		_btn.disabled = true
		_btn.style.visibility = "hidden"
		for (let pedina of _pedine) {
			pedina.removeEventListener("click", colora)
		}
	}
}


function trovaColore(n) {
	let colore = ""
	switch (n) {
		case 0: colore = GRIGIO; break;
		case 1: colore = ROSSO; break;
		case 2: colore = GIALLO; break;
		case 3: colore = VERDE; break;
		case 4: colore = BLU; break;
		case 5: colore = VIOLA; break;
	}
	return colore;
}

function generaNumero(min, max) {
	let rnd = Math.floor((max - min + 1) * Math.random()) + min;
	return rnd;
}
