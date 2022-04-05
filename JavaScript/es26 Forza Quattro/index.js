"use strict";

const RIGHE = 6;
const COLONNE = 7;
const GREY = "rgb(127, 127, 127)";


window.onload = function () {
    let _wrapper = document.getElementById("wrapper")
    let _nextPlayer = document.getElementById("nextPlayer")

    _nextPlayer.classList.add("pedina")
    _nextPlayer.style.backgroundColor = "yellow"

    for (let i = 0; i < RIGHE; i++) {
        for (let j = 0; j < COLONNE; j++) {
            let _div = document.createElement("div")
            _wrapper.appendChild(_div)
            _div.id = `div-${i}-${j}`
            _div.classList.add("pedina")
            if (i == RIGHE - 1)
                _div.addEventListener("click", inserisciPedina)
        }
    }

    function inserisciPedina() {
        let aus = this.id.split("-")
        let r = parseInt(aus[1])
        let c = parseInt(aus[2])

        if (_nextPlayer.style.backgroundColor == "yellow") {
            this.style.backgroundColor = "yellow"
            _nextPlayer.style.backgroundColor = "red"
        }
        else {
            this.style.backgroundColor = "red"
            _nextPlayer.style.backgroundColor = "yellow"
        }
        this.removeEventListener("click", inserisciPedina)
        if (r > 0) {
            let cella = document.getElementById(`div-${r - 1}-${c}`)
            cella.addEventListener("click", inserisciPedina)
        }
        if (!controllaVincita(r, c))
            _nextPlayer.backgroundColor = ""
    }

    function controllaVincita(r, c) {
        let numUguali = 0;
        let turno
        let vittoria = false

        let cella = document.getElementById(`div-${r}-${c}`)
        if (cella.style.backgroundColor.includes("red"))
            turno = "red"
        else
            turno = "yellow"
        //RIGHE
        for (let j = 0; j < COLONNE; j++) {
            cella = document.getElementById(`div-${r}-${j}`)
            if (cella.style.backgroundColor == turno) {
                numUguali++;
                if (numUguali == 4) {
                    vittoria = true;
                }
            }
            else
                numUguali = 0;
        }
        if (!vittoria) {
            //COLONNE
            numUguali = 0;
            for (let i = 0; i < RIGHE; i++) {
                cella = document.getElementById(`div-${i}-${c}`)
                if (cella.style.backgroundColor == turno) {
                    numUguali++;
                    if (numUguali == 4) {
                        vittoria = true
                    }
                }
                else
                    numUguali = 0;
            }
        }
        if (vittoria) {
            alert(turno + " ha vinto")
            disabilita();
        }
        return vittoria
    }

    function disabilita() {
        let _pedine = document.getElementsByClassName("pedina")
        for (let pedina of _pedine) {
            pedina.removeEventListener("click", inserisciPedina)
        }
    }
}