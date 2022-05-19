'use strict'
const DIM = 10;
const GRIGIO = "rgb(127, 127, 127)";
const BLU = "rgb(0, 0, 255)";
const ROSSO = "rgb(255, 0, 0)";

let x;
let y;

window.onload = function () {
    let _wrapper = document.getElementById("wrapper")
    let cont = 0

    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            let _button = document.createElement("button")
            _button.innerHTML = ""
            _button.id = `btn-${i}-${j}`
            _button.classList.add("puls")
            _button.style.backgroundColor = GRIGIO
            _button.addEventListener("click", visualizzaMuro)
            _wrapper.appendChild(_button)
        }
    }
    x = generaNumero(0, DIM)
    y = generaNumero(0, DIM)
    let _posBomba = document.getElementById(`btn-${x}-${y}`)
    _posBomba.style.backgroundImage = `url(bomba.png)`
    let timerID = setInterval(generaBomba, 150)

    function visualizzaMuro() {
        if (this.style.backgroundImage != ``) {
            alert("Hai perso!")
            if (timerID)
                clearInterval(timerID)
            reset()
        }
        else if (this.style.backgroundColor == BLU)
            this.style.backgroundColor = GRIGIO
        else if (this.style.backgroundColor == GRIGIO)
            this.style.backgroundColor = BLU
    }

    function reset() {
        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) {
                let button = document.getElementById(`btn-${i}-${j}`)
                button.removeEventListener("click", visualizzaMuro)
            }
        }
    }

    function generaBomba() {
        //CANCELLO BOMBA VECCHIA
        _posBomba.style.backgroundImage = ``
        //GENERO NUOVA POSIZIONE E GENERO BOMBA NUOVA
        let _btn
        let direzione = generaNumero(0, 4)
        switch (direzione) {
            case 0:
                //SALGO
                _btn = document.getElementById(`btn-${x - 1}-${y}`)
                if (x > 0 && _btn.style.backgroundColor != BLU) {
                    x--
                    cont = 0
                }
                else
                    cont++
                break;
            case 1:
                //SCENDO
                _btn = document.getElementById(`btn-${x + 1}-${y}`)
                if (x < 9 && _btn.style.backgroundColor != BLU) {
                    x++
                    cont = 0
                }
                else
                    cont++
                break;
            case 2:
                //DESTRA
                _btn = document.getElementById(`btn-${x}-${y + 1}`)
                if (y < 9 && _btn.style.backgroundColor != BLU) {
                    y++
                    cont = 0
                }
                else
                    cont++
                break;
            case 3:
                //SINISTRA
                _btn = document.getElementById(`btn-${x}-${y - 1}`)
                if (y > 0 && _btn.style.backgroundColor != BLU) {
                    y--
                    cont = 0
                }
                else
                    cont++
                break;
        }
        _posBomba = document.getElementById(`btn-${x}-${y}`)
        _posBomba.style.backgroundImage = `url(bomba.png)`
        if(cont == 20)
        {
            alert("Hai vinto!")
            if (timerID)
                clearInterval(timerID)
            reset()
        }
    }
}

function generaNumero(a, b) {
    //genera un numero casuale tra a e b, estremo superiore escluso
    let ris = Math.floor((b - a) * Math.random()) + a
    return ris
}