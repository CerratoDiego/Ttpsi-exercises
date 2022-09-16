"use strict";

window.onload = function () {
	let _txtMatricola = document.getElementById("matricola");
    let _txtCognome = document.getElementById("cognome");
    let _txtNome = document.getElementById("nome");
	let _optGenere = document.getElementsByName("genere");
    let _lstRegione = document.getElementById("regione");
	let _chkLavoratore = document.getElementById("lavoratore");
    let _txtDescrizione = document.getElementById("descrizione");
	let _btnInvia = document.getElementById("btnInvia")

	_lstRegione.selectedIndex = -1;
	_txtMatricola.addEventListener("change", controllaMatricola)
	_txtCognome.addEventListener("change", controllaCognome)
    _txtNome.addEventListener("change", controllaNome)
	_chkLavoratore.addEventListener("click", abilitaDescrizione)
	_btnInvia.addEventListener("click", valida)

	function controllaMatricola(){
		if(isDigit(_txtMatricola.value) == false || _txtMatricola.value.length != 12)
		_txtMatricola.classList.add("red-border")
		else
		_txtMatricola.classList.remove("red-border")
		
	}

	function controllaCognome(){
		if(_txtCognome.value == "")
		_txtCognome.classList.add("red-border")
		else
		{
			if(isLetter(_txtCognome.value) == false)
			_txtCognome.classList.add("red-border")
			else
			_txtCognome.classList.remove("red-border")
		}
	}

	function controllaNome(){
		if(_txtNome.value == "")
		_txtNome.classList.add("red-border")
		else
		{
			if(isLetter(_txtNome.value) == false)
			_txtNome.classList.add("red-border")
			else
			_txtNome.classList.remove("red-border")
		}
	}

    function abilitaDescrizione(){
		if(_chkLavoratore.checked == true)
		_txtDescrizione.disabled = false;
		else
		_txtDescrizione.disabled = true;
	}

	function valida(){
		let riassunto = ""
		let bool = true
        if(isDigit(_txtMatricola.value) == false || _txtMatricola.value.length != 12)
		{
			_txtMatricola.classList.add("red-border")
			riassunto += "Matricola errata (inserire solo numeri, lunghezza 12)\n"
			bool = false
		}
		else
		_txtMatricola.classList.remove("red-border")
		
		if(_txtCognome.value == "")
		{
		    _txtCognome.classList.add("red-border")
		    riassunto += "Cognome vuoto\n"
			bool = false
		}
		else
		{
			if(isLetter(_txtCognome.value) == false)
			{
			    _txtCognome.classList.add("red-border")
				riassunto += "Cognome errato (inserire solo lettere)\n"
				bool = false
			}
			else
			_txtCognome.classList.remove("red-border")
		}
		
		if(_txtNome.value == "")
		{
		    _txtNome.classList.add("red-border")
			riassunto += "Nome vuoto\n"
			bool = false
		}
		else
		{
			if(isLetter(_txtNome.value) == false)
			{
			   _txtNome.classList.add("red-border")
			   riassunto += "Nome errato (inserire solo lettere)\n"
			   bool = false
			}
			else
			_txtNome.classList.remove("red-border")
		}
		
		if(_optGenere.checked == false)
		{
			_optGenere.classList.add("red-border")
			riassunto += "Selezionare un genere\n"
			bool = false
		}
		
		if(_lstRegione.value == "")
		{
		   _lstRegione.classList.add("red-border")
		   riassunto += "Selezionare una regione\n"
		   bool = false
		}
		
		if(_chkLavoratore.checked == true)
		{
			if(_txtDescrizione.value == "")
			{
				_txtDescrizione.classList.add("red-border")
				riassunto += "Descrizione vuota\n"
				bool = false
			}
		}

		alert(riassunto)
		return bool
	}
}
	

