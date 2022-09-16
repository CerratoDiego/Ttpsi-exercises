"use strict"

const DIM = 10

window.onload = function() {
	let _wrapper = this.document.getElementById("wrapper")

	for (let i = 0; i < DIM; i++)
	{
		for (let j = 0; j < DIM; j++)
		{
			let _button = document.createElement("button")
			_button.classList.add("btnStyle")
			_button.id = `btn-${i}-${j}`
			_button.innerHTML= "&nbsp; " 
			_wrapper.appendChild(_button)
			_button.addEventListener("click", buttonClick)
		}
	}
	function buttonClick() {
		let aus = this.id.split("-")
		let i = aus[1]
		let j = aus[2]
		this.innerHTML = i + j	//se ho un tag button uso .innerHTML, se ho un tag input type = "button" uso .value
		this.style.backgroundColor = "red"
		this.disabled = true
	}
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}