"use strict"

let _btnColore
let _btnDimensione
let _btnSfondo
let _btnBordo
let _btnImg1
let _btnImg2
let _btnImg3
let _btnClear
let _titolo
let _txtSize
let _body
let _imgBox
let value

window.onload = function() {
	_btnColore = document.getElementById("btnColore")
	_btnDimensione = document.getElementById("btnDimensione")
	_btnSfondo = document.getElementById("btnSfondo")
	_btnBordo = document.getElementById("btnBordo")
	_btnImg1 = document.getElementById("btnImg1")
	_btnImg2 = document.getElementById("btnImg2")
	_btnImg3 = document.getElementById("btnImg3")
	_btnClear = document.getElementById("btnClear")
	_titolo = document.getElementById("titolo")
	_txtSize = document.getElementById("txtSize")
	_body = document.getElementsByTagName("body")[0]
	_imgBox = document.getElementById("imgBox")

	_btnColore.addEventListener("click", cambiaColore)
	_btnDimensione.addEventListener("click", cambiaDimensione)
	_btnSfondo.addEventListener("click", cambiaSfondo)
	_btnBordo.addEventListener("click", cambiaBordo)
	_btnImg1.addEventListener("click", cambiaImmagine)
	_btnImg2.addEventListener("click", cambiaImmagine)
	_btnImg3.addEventListener("click", cambiaImmagine)
	_btnClear.addEventListener("click", pulisciImmagine)

	_btnClear.disabled = true
 
	//SOLUZIONE 2
	_titolo.style.backgroundColor = "blue"
}

function pulisciImmagine() {
	console.log(_imgBox.src)
	if(_imgBox.src.includes("/img/"))
		_imgBox.src = ""
	else
		_imgBox.src = "img/" + value + ".jpg"
	/*if(_imgBox.style.display != "none")
	{
		_imgBox.style.display = "none"
		_btnClear.value = "Visualizza"
	}
	else
	{
		_imgBox.style.display = "block"
		_btnClear.value = "Pulisci"
	}*/
}

function cambiaImmagine() {
	value = this.value	//this indica l'elemento che ha scatenato l'evento e pèuò essere usato in procedure linkate con .addEventListener
	_imgBox.src = "img/" + value + ".jpg"
	_btnClear.disabled = false
}

function cambiaBordo() {
	if(getComputedStyle(_titolo).borderColor == "rgb(255, 0, 0)")
		_titolo.style.borderColor = "rgb(255, 255, 255)"
	else
		_titolo.style.borderColor = "rgb(255, 0, 0)"
}

function cambiaSfondo() {
	if(_body.style.backgroundImage == "")
		_body.style.backgroundImage = "#eaeaea url(img/bg.gif)"
	else
		_body.style.backgroundImage = ""
}

function cambiaDimensione() {
	let size = _txtSize.value

	if(/*parseFloat(*/size/*)*/ <= 23 && size >= 5)	//il parseFloat viene fatto in automatico, sempre tranne quando ho un +
		_titolo.style.fontSize = size + "pt"
	else
		alert("Dimensione non valida")
}

function cambiaColore() {
	//SOLUZIONE 1
	/*if(getComputedStyle(_titolo).backgroundColor == "rgb(0, 0, 255)")
	{
		_titolo.style.backgroundColor = "yellow"
		_titolo.style.color = "blue"
	}
	else
	{
		_titolo.style.backgroundColor = "blue"
		_titolo.style.color = "yellow"
	}*/
	if(_titolo.style.backgroundColor == "blue")
	{
		_titolo.style.backgroundColor = "yellow"
		_titolo.style.color = "blue"
	}
	else
	{
		_titolo.style.backgroundColor = "blue"
		_titolo.style.color = "yellow"
	}
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}