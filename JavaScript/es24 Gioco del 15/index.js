"use strict"

const DIM = 4

window.onload = function() {
	let _wrapper = document.getElementById("wrapper")
	let vet = []

	for(let i = 1; i < DIM * DIM; i++)
		vet.push(i)
	
	for (let i = 0; i < DIM; i++)
	{
		for (let j = 0; j < DIM; j++)
		{
			let _div = document.createElement("div")
			_div.classList.add("pedina")
			_wrapper.appendChild(_div)
			_div.id = `div-${i}-${j}`
			if(i != DIM - 1 || j != DIM - 1)
			{
				_div.style.backgroundColor = "blue"
				_div.innerHTML = generaValore()
			}
			_div.addEventListener("click", spostaPedina)
		}
	}

	function spostaPedina() {
		let aus = this.id.split("-")
		let r = parseInt(aus[1])	//faccio parseInt perchè la funzione split restituisce stringhe 
		let c = parseInt(aus[2])
		
		//SOPRA
		if(r > 0)
		{
			let cella = document.getElementById(`div-${r - 1}-${c}`)
			if(cella.innerHTML == "")
			{
				swap(this, cella)
			}
		}
		if(c > 0)	//SINISTRA
		{
			let cella = document.getElementById(`div-${r}-${c - 1}`)
			if(cella.innerHTML == "")
			{
				swap(this, cella)
			}
		}
		if(r < 3)	//SOTTO
		{
			let cella = document.getElementById(`div-${r + 1}-${c}`)
			if(cella.innerHTML == "")
			{
				swap(this, cella)
			}
		}
		if(c < 3)	//DESTRA
		{
			let cella = document.getElementById(`div-${r}-${c + 1}`)
			if(cella.innerHTML == "")
			{
				swap(this, cella)
			}
		}
	}

	function swap(cella1, cella2) {
		cella2.innerHTML = cella1.innerHTML
		cella1.innerHTML = ""
		cella2.style.backgroundColor = "blue"
		cella1.style.backgroundColor = "#ccc"
		controllaVincita()
	}

	function controllaVincita() {
		let cont = 1
		let errore = false

		for (let i = 0; i < DIM; i++)
			for (let j = 0; j < DIM; j++)
			{
				if(i != 3 || j != 3)
				{
					let cella = document.getElementById(`div-${i}-${j}`)
					if(cont != cella.innerHTML)
						errore = true
					cont++
				}
			}
		if(!errore)
			alert("Hai vinto")
	}

	function generaValore() {
		let pos = generaNumero(0, vet.length)
		let val = vet[pos]
		vet.splice(pos, 1)
		return val
	}
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}