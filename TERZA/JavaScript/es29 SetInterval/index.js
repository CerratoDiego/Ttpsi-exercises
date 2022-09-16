"use strict"; 

window.onload = function () {
	let _wrapper = document.getElementById("wrapper");
	let _btnStop = document.getElementById("btnStop");
	let _btnRestart = document.getElementById("btnRestart");
	_btnRestart.disabled = true

	// leggo le dimensioni wrapper
	// alert(_wrapper.style.width)  // stringa vuota
	let wrapper_w = getComputedStyle(_wrapper).width;
	let wrapper_h = getComputedStyle(_wrapper).height;
	// alert(wrapper_w) devo togliere il 'px' finale
	wrapper_w = parseInt(wrapper_w.substr(0, wrapper_w.length - 2));
	wrapper_h = parseInt(wrapper_h.substr(0, wrapper_h.length - 2));

	let timerID = setInterval(visualizza, 50)
	_btnRestart.addEventListener("click", function () {
		_btnRestart.disabled = true
		_btnStop.disabled = false
		timerID = setInterval(visualizza, 50)
		_wrapper.innerHTML = ""
	})
	_btnStop.addEventListener("click", function () {
		if (timerID) {
			clearInterval(timerID)
			_btnRestart.disabled = false
			_btnStop.disabled = true
		}
	})

	function visualizza() {
		//GENERO IL DIV
		let div = document.createElement("div")
		//GENERO LE DIMENSIONI E LE ASSEGNO
		let width = generaNumero(10, 101)
		let height = generaNumero(10, 101)
		div.style.width = width
		div.style.height = height
		//GENERO I COLORI
		let red = generaNumero(0, 255)
		let green = generaNumero(0, 255)
		let blue = generaNumero(0, 255)
		div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
		//GENERO POSIZIONE
		let top = generaNumero(0, (wrapper_h - height))
		let left = generaNumero(0, (wrapper_w - width))
		div.style.top = top
		div.style.left = left
		//APPENDO AL WRAPPER
		div.style.position = "absolute"
		_wrapper.appendChild(div)
	}
}


function generaNumero(min, max) {
	let rnd = Math.floor((max - min) * Math.random()) + min;
	return rnd;
}