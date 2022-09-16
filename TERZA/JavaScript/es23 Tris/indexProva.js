"use strict"

const DIM = 3
let immagini = ["croce", "cerchio"]
let turno = 0
let vittoria
let par = 0
let mat = new Array(DIM)

window.onload = function() {
	for(let i = 0; i < DIM; i++)
		mat[i] = new Array(DIM)
	for(let i = 0; i < DIM; i++)
		for(let j = 0; j < DIM; j++)
			mat[i][j] = ""
	
	let _tabella = document.getElementsByTagName("table")[0]

	for (let i = 0; i < DIM; i++)
	{
		let _tr = document.createElement("tr")
		_tabella.appendChild(_tr)
		for (let j = 0; j < DIM; j++)
		{
			let _td = document.createElement("td")
			_tr.appendChild(_td)
			let _img = document.createElement("img")
			_td.appendChild(_img)
			_img.src = `img/vuota.png`
			_img.id = `img-${i}-${j}`
			_img.addEventListener("click", function() {
				let aus = this.id.split("-")
				let k = aus[1]
				let l = aus[2]
				if(mat[k][l] == "" && !vittoria)
				{
					par++
					this.src = `img/${immagini[turno]}.png`
					if(turno == 0)
					{
						mat[k][l] = "x"
						controllaVincita("x")
						turno = 1
					}
					else
					{
						mat[k][l] = "o"
						controllaVincita("o")
						turno = 0
					}
				}
				if(par == (DIM * DIM))
					alert("Pareggio :(")
			})
		}
	}

	function controllaVincita(val) {
		let i = 0
		let j
		let cont = 0
		vittoria = false
		while(i < DIM && !vittoria)
		{
			j = 0
			cont = 0
			while(j < DIM && !vittoria)
			{
				if(mat[i][j] == val)
				{
					cont++
					if(cont == DIM)
						vittoria = true;
				}
				j++
			}
			i++
		}
		j = 0
		while(j < DIM && !vittoria)
		{
			i = 0
			cont = 0
			while(i < DIM && !vittoria)
			{
				if(mat[i][j] == val)
				{
					cont++
					if(cont == DIM)
						vittoria = true;
				}
				i++
			}
			j++
		}
		cont = 0
		if(!vittoria)
		{
			for(let i = 0; i < DIM; i++)
			{
				if(mat[i][i] == val)
					cont++
			}
			if(cont == DIM)
				vittoria = true
		}
		cont = 0
		if(!vittoria)
		{
			j = DIM - 1
			for(let i = 0; i < DIM; i++)
			{
				if(mat[i][j] == val)
					cont++
				j--
			}
			if(cont == DIM)
				vittoria = true
		}
		
		if(vittoria)
			alert(val + " vincitore")
	}
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}