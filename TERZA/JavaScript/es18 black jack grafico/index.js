"use strict";

let vet = []

let _card
let _msgAsso

window.onload = function(){
    let _btnG=document.getElementsByClassName("card")[0]
    let _cartaG=document.getElementsByClassName("card")[1]
    let _btnB=document.getElementsByClassName("card")[2]
    let _cartaB=document.getElementsByClassName("card")[3]
	let _puntiG = document.getElementsByTagName("span")[0]
	let _puntiB = document.getElementsByTagName("span")[1]	
    let _assoG=document.getElementsByClassName("msgAsso")[0]
    let _assoB=document.getElementsByClassName("msgAsso")[1]
    //.children è la collezione di tutti i figli diretti dell'elemento
    let _chkG = _assoG.children[0]
    _chkG.checked = false
    let _chkB = _assoB.children[0]
    _chkB.checked = false

    _assoG.style.visibility = "hidden"
    _assoB.style.visibility = "hidden"
    _btnG.style.opacity = "0.5"
    _btnB.style.opacity = "0.5"

    _btnG.addEventListener("mouseover", rollOn)
    _btnB.addEventListener("mouseover", rollOn)
    _btnG.addEventListener("mouseout", rollOff)
    _btnB.addEventListener("mouseout", rollOff)
    _btnG.addEventListener("click", cartaGiocatore)
    _btnB.addEventListener("click", cartaBanco)
    _chkG.addEventListener("click", function() {
        _puntiG.innerHTML = parseInt(_puntiG.innerHTML) + 10
        _assoG.style.visibility = "hidden"
        if(parseInt(_puntiG.innerHTML) > 21)
        {
            alert("Ha vinto il banco")
            finePartita()
        }
    })
    _chkB.addEventListener("click", function() {
        _puntiB.innerHTML = parseInt(_puntiB.innerHTML) + 10
        _assoB.style.visibility = "hidden"
        if(parseInt(_puntiB.innerHTML) > 21)
        {
            alert("Ha vinto il giocatore")
            finePartita()
        }
        else
        {
            if(parseInt(_puntiB.innerHTML) > 17)
            {
                if(parseInt(_puntiB.innerHTML) < parseInt(_puntiG.innerHTML))
                {
                    alert("Ha vinto il giocatore")
                }
                else
                {
                    alert("Ha vinto il banco")
                }
            }
        }
    })

    function rollOn() {
        this.style.opacity = "1"
    }
    
    function rollOff() {
        this.style.opacity = "0.5"
    }

    function cartaGiocatore() {
        let carta = generaCarta()
        _cartaG.style.backgroundImage = `url(img/${carta}.gif)`
        let punti = valore(carta)
        if(punti > 10)
            punti = 10
        if(punti == 1)
        {
            _assoG.style.visibility = "visible"
            _chkG.checked = false
        }
        else
            _assoG.style.visibility = "hidden"
        _puntiG.innerHTML = parseInt(_puntiG.innerHTML) + punti
        if(parseInt(_puntiG.innerHTML) > 21)
        {
            alert("Ha vinto il banco")
            finePartita()
        }
    }

    function cartaBanco() {
        let carta = generaCarta()
        _cartaB.style.backgroundImage = `url(img/${carta}.gif)`
        let punti = valore(carta)
        if(punti > 10)
            punti = 10
        if(punti == 1)
        {
            _assoB.style.visibility = "visible"
            _chkB.checked = false
        }
        else
            _assoB.style.visibility = "hidden"
        _puntiB.innerHTML = parseInt(_puntiB.innerHTML) + punti
        if(parseInt(_puntiB.innerHTML) > 21)
        {
            alert("Ha vinto il giocatore")
            finePartita()
        }
        else
        {
            if(parseInt(_puntiB.innerHTML) > 17)
            {
                if(parseInt(_puntiB.innerHTML) < parseInt(_puntiG.innerHTML))
                {
                    alert("Ha vinto il giocatore")
                }
                else
                {
                    alert("Ha vinto il banco")
                }
            }
        }
    }

    function valore(carta) {
        return parseInt(carta.substr(1))
    }

    function generaCarta() {
        let aus = ["a", "b", "c", "d"]
        let carta
        do
        {
            let seme = generaNumero(0, 4)
            let valore = generaNumero(1, 14)
            carta = aus[seme] + valore
        }
        while(vet.includes(carta))
        vet.push(carta)
        return carta
    }
}

function nuovaCarta() {
    let c = vet[generaNumero(0, 4)]
    let n = generaNumero(0, 14)
    _cartaG.src = "img/" + c + n + ".gif"
    _cartaB.src = "img/" + c + n + ".gif"
}

function finePartita() {
    _btnG.removeEventListener("mouseover", rollOn)
    _btnB.removeEventListener("mouseover", rollOn)
    _btnG.removeEventListener("click", cartaGiocatore)
    _btnB.removeEventListener("click", cartaBanco)
}

function generaNumero(a, b){
    return Math.floor((b-a)*Math.random())+a
}