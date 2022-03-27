"use strict"

let importoUnitario = 200
let sconto

window.onload = function() {
	let _txtNPartecipanti = document.getElementById("txtNPartecipanti")
	let _txtDataInizio = document.getElementById("txtDataInizio")
	let _txtDataFine = document.getElementById("txtDataFine")
	let _btnCalcola = document.getElementById("btnCalcola")
	let _risultato = document.getElementById("risultato")
	let _imgSconto = document.getElementById("imgSconto")
	_txtDataFine.disabled = true

	let today = new Date()
	_txtDataInizio.min = today.toISOString().substr(0, 10)

	_txtDataInizio.addEventListener("change", function() {
		sconto = 0

		let dataInizio = _txtDataInizio.value
		dataInizio = new Date(dataInizio)
		let dataFineMin = dataInizio.getTime() + (24 * 3600 * 1000)	//prende i ms con getTime(), somma i ms di un giorno
		dataFineMin = new Date(dataFineMin)	//trasforma i ms in data
		_txtDataFine.min = dataFineMin.toISOString().substr(0, 10)
		_txtDataFine.disabled = false
		_txtDataFine.value = ""

		let mese = dataInizio.getMonth()
		if(mese == 5)
		{
			sconto = 20
			_imgSconto.src = `img/sconto${sconto}.jpg`
		}
		else if(mese == 6)
		{
			sconto = 15
			_imgSconto.src = `img/sconto${sconto}.jpg`
		}
		else if(mese == 7)
		{
			sconto = 10
			_imgSconto.src = `img/sconto${sconto}.jpg`
		}
		else
		{
			_imgSconto.src = ""
		}
	})

	_btnCalcola.addEventListener("click", function() {
		let importo = 0
		let nPersone = _txtNPartecipanti.value
		if(nPersone == "" || nPersone < 1 || nPersone > 9)
			alert("Numero partecipanti non valido")
		else if(_txtDataInizio.value == "" || _txtDataFine.value == "")
			alert("Inserire data inizio e data fine")
		else
		{
			let msec = new Date(_txtDataFine.value) - new Date(_txtDataInizio.value)
			let nGiorni = Math.floor(msec/(24*3600*1000))
			if(nGiorni == 1)
				importo = importoUnitario * nGiorni * nPersone
			else if (nGiorni <= 5)
			{
				importoUnitario = 150
				importo = (importoUnitario * (nGiorni - 1) * nPersone) + 200 * nPersone
			}
			else
			{
				importoUnitario = 120
				importo = (importoUnitario * (nGiorni - 5) * nPersone) + (150 * 4 * nPersone) + 200 * nPersone
			}
			importo -= (importo * sconto / 100)
			_risultato.innerHTML = importo.toString() + " €"
		}
	})
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}