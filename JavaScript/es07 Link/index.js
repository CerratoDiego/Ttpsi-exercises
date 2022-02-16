"use strict"

let _lstSiti

window.onload = function() {
	_lstSiti = document.getElementById("lstSiti")

	_lstSiti.selectedIndex = -1
}

function visualizza() {
	let url = _lstSiti.value
	
	//apro in una nuova scheda
	//window.open(url, "_blank")
	//apro nella scheda corrente
	//window.open(url, "_self") oppure
	window.location.href = url
}