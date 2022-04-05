"use strict"

const DIM = 3
let turno = "croce"

window.onload = function () {
	let _table = document.getElementsByTagName("table")[0]
	let cont = 0

	for (let i = 0; i < DIM; i++) {
		let _tr = document.createElement("tr")
		_table.appendChild(_tr)
		for (let j = 0; j < DIM; j++) {
			let _td = document.createElement("td")
			_tr.appendChild(_td)
			let _img = document.createElement("img")
			_td.appendChild(_img)
			_img.src = `img/vuota.png`
			_img.id = `img-${i}-${j}`
			_img.status = "vuoto"
			_img.addEventListener("click", visualizza)
		}
	}

	function visualizza() {
		cont++
		if (turno == "croce") {
			this.src = `img/croce.png`
			this.status = "occupato"
			controllaVincita()
			turno = "cerchio"
		}
		else {
			this.src = `img/cerchio.png`
			this.status = "occupato"
			controllaVincita()
			turno = "croce"
		}
		this.removeEventListener("click", visualizza)
	}

	function controllaVincita() {
		let vinto = false
		//CONTROLLO RIGHE
		for (let i = 0; i < DIM; i++) {
			let img1 = document.getElementById(`img-${i}-${0}`)
			let img2 = document.getElementById(`img-${i}-${1}`)
			let img3 = document.getElementById(`img-${i}-${2}`)

			if (img1.src == img2.src && img2.src == img3.src && img1.status == "occupato")
				vinto = true
		}
		if (!vinto) {
			//CONTROLLO COLONNE
			for (let j = 0; j < DIM; j++) {
				let img1 = document.getElementById(`img-${0}-${j}`)
				let img2 = document.getElementById(`img-${1}-${j}`)
				let img3 = document.getElementById(`img-${2}-${j}`)

				if (img1.src == img2.src && img2.src == img3.src && img1.status == "occupato")
					vinto = true
			}
		}
		if (!vinto) {
			//CONTROLLO DIAGONALE PRINCIPALE
			let img1 = document.getElementById(`img-${0}-${0}`)
			let img2 = document.getElementById(`img-${1}-${1}`)
			let img3 = document.getElementById(`img-${2}-${2}`)

			if (img1.src == img2.src && img2.src == img3.src && img1.status == "occupato")
				vinto = true
		}
		if (!vinto) {
			//CONTROLLO DIAGONALE SECONDARIA
			let img1 = document.getElementById(`img-${0}-${2}`)
			let img2 = document.getElementById(`img-${1}-${1}`)
			let img3 = document.getElementById(`img-${2}-${0}`)

			if (img1.src == img2.src && img2.src == img3.src && img1.status == "occupato")
				vinto = true
		}
		if (vinto) {
			alert("Ha vinto " + turno)
			disabilita()
		}

		//CONTROLLA PAREGGIO
		if (!vinto && cont == 9)
			alert("Pareggio")
	}

	function disabilita() {
		let _img = document.getElementsByTagName("img");
		for (let img of _img)
			img.removeEventListener("click", visualizza)
	}
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris = Math.floor((b - a) * Math.random()) + a
	return ris
}