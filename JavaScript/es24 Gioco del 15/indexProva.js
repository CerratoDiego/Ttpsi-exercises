"use strict"

let mat = new Array(4)

window.onload = function() {
	let _wrapper = this.document.getElementById("wrapper")
	let aus = [15]
	let vet = [15]
	let n = 0
	for(let i = 0; i < 15; i++)
		aus[i] = i + 1
	
	for(let i = 0; i < 15; i++)
	{
		let pos = generaNumero(0, aus.length)
		vet[i] = aus[pos]
		aus.splice(pos, 1)
	}

	for(let i = 0; i < 4; i++)
		mat[i] = new Array(4)
	for(let i = 0; i < 4; i++)
		for(let j = 0; j < 4; j++)
			mat[i][j] = ""

	for(let i = 0; i < 4; i++)
		for(let j = 0; j < 4; j++)
		{
			if(n < 15)
				mat[i][j] = vet[n++]
		}
	
	for (let i = 0; i < 4; i++)
	{
		for (let j = 0; j < 4; j++)
		{
			let _div = document.createElement("div")
			_div.id = `div-${i}-${j}`
			_wrapper.appendChild(_div)
			if(i != 3 || j != 3)
				_div.style.backgroundColor = "blue"
			_div.id = `div-${i}-${j}`
			_div.classList.add("pedina")
			_div.innerHTML = mat[i][j]
			_div.addEventListener("click", function() {
				let ausi = this.id.split("-")
				let k = parseInt(ausi[1])
				let l = parseInt(ausi[2])
				if(k != 0 && mat[k - 1][l] == "")
					sposta(k, l, k - 1, l)
				else if(l != 0 && mat[k][l - 1] == "")
					sposta(k, l, k, l - 1)
				else if(l != 3 && mat[k][l + 1] == "")
					sposta(k, l, k, l + 1)
				else if(k != 3 && mat[k + 1][l] == "")
					sposta(k, l, k + 1, l)
				controllaVittoria()
			})
		}
	}

	function sposta(a, b, c, d) {
		let div1 = document.getElementById(`div-${a}-${b}`)
		div1.innerHTML = mat[c][d]
		let div2 = document.getElementById(`div-${c}-${d}`)
		div2.innerHTML = mat[a][b]
		mat[c][d] = mat[a][b]
		mat[a][b] = ""
	}

	function controllaVittoria() {
		let c = 1
		let ordinato = true
		for (let i = 0; i < 4; i++)
			for (let j = 0; j < 4; j++)
			{
				if(i != 3 && j != 3)
				{
					if(mat[i][j] != c)
						ordinato = false
				}
				else
					if(mat[i][j] !="")
						ordinato = false
				c++
			}
		if(ordinato)
			alert("Hai vinto")
	}
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}