"use strict"

let vet = [36]
let vetCas = [36]

window.onload = function () {
	let _wrapper = document.getElementById("wrapper")
	let secondi = 1, minuti = 1
	let min = document.getElementById("minuti")
	let sec = document.getElementById("secondi")
	let timerID = setInterval(visualizza, 1000)
	let select = document.getElementsByTagName("select")[0]
	select.selectedIndex = -1
	let _options = document.getElementsByTagName("option")
	_options[1].disabled = true
	let DIM = 0
	let click = 0
	let cont = 0
	let trovati = 0

	for (let k = 0; k < 3; k++) {
		let _option = document.getElementsByTagName("option")[k]
		_option.addEventListener("click", function () {
			creaTabella(_option.value)
		})
	}

	function creaTabella(num) {
		/*for (let i = 0; i < DIM; i++) {
			for (let j = 0; j < DIM; j++) {
				let _div = document.getElementById(`div-${i}-${j}`)
				_wrapper.removeChild(_div)
			}
		}*/
		DIM = num
		if (DIM == 4)
			_wrapper.style.width = `220px`
		else
			_wrapper.style.width = `340px`

		let n = 0
		for (let i = 1; i <= (DIM * DIM) / 2; i++) {
			vet[n++] = i
			vet[n++] = i
		}
		for (let i = 0; i < DIM * DIM; i++) {
			let pos = generaNumero(0, vet.length)
			vetCas[i] = vet[pos]
			vet.splice(pos, 1)
		}
		for (let i = 0; i < DIM; i++) {
			for (let j = 0; j < DIM; j++) {
				let _div = document.createElement("div")
				_wrapper.appendChild(_div)
				_div.id = `div-${i}-${j}`
				let pos = generaNumero(0, vet.length)
				_div.innerHTML = `${vetCas[pos]}`
				vetCas.splice(pos, 1)
				_div.style.textAlign = "center"
				_div.style.lineHeight = "50px"
				_div.style.color = `rgb(127, 127, 127)`
				_div.style.backgroundColor = `rgb(127, 127, 127)`
				_div.addEventListener("click", scopri)
			}
		}
	}

	function scopri() {
		click++
		let aus = this.id.split('-')
		let i = aus[1]
		let j = aus[2]
		let _div = document.getElementById(`div-${i}-${j}`)
		_div.style.backgroundColor = `rgb(255, 0, 0)`
		_div.style.color = `rgb(0, 0, 0)`
		if (click == 2) {
			for (let i = 0; i < DIM; i++) {
				for (let j = 0; j < DIM; j++) {
					let _div = document.getElementById(`div-${i}-${j}`)
					_div.removeEventListener("click", scopri)
				}
			}
			setTimeout(blocca, 500)
			click = 0
		}
	}

	function blocca() {
		let n1, n2
		let _div1, _div2
		for (let i = 0; i < DIM; i++) {
			for (let j = 0; j < DIM; j++) {
				let _div = document.getElementById(`div-${i}-${j}`)
				if (_div.style.backgroundColor == `rgb(255, 0, 0)` && cont == 0) {
					n1 = _div.innerHTML
					_div1 = document.getElementById(`div-${i}-${j}`)
					cont++
				}
				else if (_div.style.backgroundColor == `rgb(255, 0, 0)` && cont == 1) {
					n2 = _div.innerHTML
					_div2 = document.getElementById(`div-${i}-${j}`)
					cont = 0
				}
			}
		}

		if (n1 == n2) {
			_div1.style.backgroundColor = `rgb(0, 0, 255)`
			_div1.style.color = `rgb(255, 255, 255)`
			_div2.style.backgroundColor = `rgb(0, 0, 255)`
			_div2.style.color = `rgb(255, 255, 255)`
			trovati++
		}
		else {
			_div1.style.color = `rgb(127, 127, 127)`
			_div1.style.backgroundColor = `rgb(127, 127, 127)`
			_div2.style.color = `rgb(127, 127, 127)`
			_div2.style.backgroundColor = `rgb(127, 127, 127)`
		}

		for (let i = 0; i < DIM; i++) {
			for (let j = 0; j < DIM; j++) {
				let _div = document.getElementById(`div-${i}-${j}`)
				if (_div.style.backgroundColor != `rgb(0, 0, 255)`)
					_div.addEventListener("click", scopri)
			}
		}

		if (trovati == DIM * DIM / 2)
		{
			alert("Bravo, hai vinto!")
			if(timerID)
				clearInterval(timerID)
		}
	}

	function visualizza() {
		secondi = pad(secondi)
		sec.innerHTML = secondi
		secondi++
		if (secondi == 61) {
			minuti = pad(minuti)
			min.innerHTML = minuti
			minuti++
			sec.innerHTML = "00"
			secondi = 1
		}
	}

	function pad(number) {
		return (number < 10 ? '0' : '') + number
	}
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris = Math.floor((b - a) * Math.random()) + a
	return ris
}