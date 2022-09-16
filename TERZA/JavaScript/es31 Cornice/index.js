const DIM = 10;
let livello = 0;
let cont = 0

window.onload = function () {
    let _wrapper = document.getElementById("wrapper");

    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            let _div = document.createElement("div")
            _div.id = `div-${i}-${j}`
            _div.classList.add("cella")
            _wrapper.appendChild(_div)
        }
    }
    let timerID = setInterval(visualizza, 500)

    function visualizza() {
        reset()
        for (let i = cont; i < DIM - cont; i++) {
            let cellaSopra = document.getElementById(`div-${cont}-${i}`)
            let cellaSotto = document.getElementById(`div-${DIM - cont - 1}-${i}`)
            let cellaDx = document.getElementById(`div-${i}-${cont}`)
            let cellaSx = document.getElementById(`div-${i}-${DIM - cont - 1}`)
            cellaSopra.style.backgroundColor = "red"
            cellaSotto.style.backgroundColor = "red"
            cellaDx.style.backgroundColor = "red"
            cellaSx.style.backgroundColor = "red"
        }
        cont++
        if (cont == 5)
            cont = 0

    }

    function reset() {
        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) {
                let cella = document.getElementById(`div-${i}-${j}`)
                cella.style.backgroundColor = ""
            }
        }
    }
}

function generaNumero(min, max) {
    let rnd = Math.floor((max - min + 1) * Math.random()) + min;
    return rnd;
}