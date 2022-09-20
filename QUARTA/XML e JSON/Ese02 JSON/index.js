`use strict`
let studente = {
    "nome": "mario",
    "cognome": "rossi",
    "eta": 16,
    "studente": true,
    "images": ["smile.gif", "grim.gif", "frown.gif", "bomb.gif"],
    "hobbies": [], // vettore al momento vuoto
    "pos": { "x": 40, "y": 300 }, // oggetto annidato
    "stampa": function () { alert("Hello " + this.nome); },
    "fullName": function () { return this.nome + " " + this.cognome; }
};

let studente2 = studente
studente2["nome"] = "minnie"

function esegui() {
    console.log(studente["nome"])
    console.log(studente["cognome"])
    console.log(studente.fullName())
    if ("residenza" in studente)
        console.log("Residenza: " + studente["residenza"])
    else {
        console.log("Residenza non presente. Aggiunta automatica")
        studente["residenza"] = "Fossano"
        console.log("Residenza: " + studente["residenza"])
    }
    console.log(studente["nome"])

    //Scansione dei campi JSON
    console.log("SCANSIONE DEI CAMPI JSON")
    let aus = ""
    for(let key in studente)
    {
        if(typeof(studente[key]) == "object")
            aus = JSON.stringify(studente[key])
        else
            aus = studente[key]
        console.log(key + " = " + aus + " --> " + typeof(studente[key]))
    }

    //Visualizzazione dati vettore enumerativo interno
    console.log("Visualizzazione dati vettore enumerativo interno")
    for(let image of studente.images)
    {
        console.log(image)
    }

    //Visualizzazione dati vettore associativo interno
    console.log("Visualizzazione dati vettore associativo interno")
    for(let key in studente.pos)
    {
        console.log(key + " = " + studente["pos"][key])
        //console.log(key + " = " + studente.pos[key])
    }
    studente.pos.x += 1
    //studente["pos"]["x"] += 1
    console.log("x = " + studente.pos.x)

    //Visualizzazione dati vettore enumerativo delle chiavi
    console.log("Visualizzazione dati vettore enumerativo della chiavi")
    let keys = Object.keys(studente)
    for(let key of keys)
    {
        console.log("Chiave --> " + key)
    }
    console.log("Numero di keys totali: " + keys.length)

    //Richiamo di una funzione
    studente.stampa()
    //studente["stampa"]()
    let nomeCompleto = studente.fullName()
    //let nomeCompleto = studente.["fullName"]()
    console.log("Nominativo --> " + nomeCompleto)
}
