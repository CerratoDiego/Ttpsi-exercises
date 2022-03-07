"use strict"
let vet1=["arco", "binari", "roulette", "palla", "disco", "luci", "pop corn", "moto", "sci", "aperitivo"]
let vet2=["freccia", "treno", "fiches", "canestro", "stereo", "discoteca", "cinema", "casco", "pista", "bar"]
let _img;
let _txt;
let _txtRisposta;
let _optRisposta
let _lblCorrette
let _lblSbagliate

let contGiuste=0
let contSbagliate=0
let pos

window.onload=function init(){
    pos=generaNumero(0,10)
    _img=document.getElementsByTagName("img");
    _txt=document.getElementById("txt")
    _optRisposta=document.getElementsByName("optRisposta")
    _txtRisposta=document.getElementsByClassName("txtRisposta")
    _lblCorrette=document.getElementById("txtCorrette")
    _lblSbagliate=document.getElementById("txtErrate")

    _img[0].src="img/img"+(pos+1)+" "+vet1[pos]+".jpg"
    _txt.value=vet1[pos]
    caricaImmaginiCasuale(vet2)

    
}

function caricaImmaginiCasuale(vet2){
    let posCas
    let vetNum=[]
    for(let i=1;i<=vet2.length;i++)
    {
        vetNum.push(i)
    }
    for(let i=0;i<vet2.length;i++)
    {
        posCas=generaNumero(0,vet2.length)
        let aus=vet2[i]
        vet2[i]=vet2[posCas]
        vet2[posCas]=aus
        aus=vetNum[i]
        vetNum[i]=vetNum[posCas]
        vetNum[posCas]=aus
    }
    for(let i=0;i<vet2.length;i++)
    {
        _img[i+1].src="img/img"+vetNum[i]+" "+vet2[i]+".jpg"
    }
    console.log(vetNum)
}

function controlla(){
    let i=0;
    while(i<_optRisposta.length && _optRisposta[i].checked==false)
        i++;
    console.log(vet2);
    if(i==_optRisposta.length)
    {
        alert("devi selezionare un immagine");
    }
    else
    {
        _txtRisposta[i].value=_txtRisposta[i].value.toLowerCase()
        if(_txtRisposta[i].value==vet2[i])
        {
            contGiuste++;
            cancella();
            let aus=pos
            do{
                pos=generaNumero(0,10)
            }while(aus==pos)
            
            _img[0].src="img/img"+(pos+1)+" "+vet1[pos]+".jpg"
            _txt.value=vet1[pos]
        }
        else
            contSbagliate++;
    }
    _lblCorrette.innerHTML="Risposte Corrette: "+contGiuste
    _lblSbagliate.innerHTML="Risposte Errate: "+contSbagliate
}

function cancella(){
    for(let i=0;i<_optRisposta.length;i++)
    {
        _txtRisposta[i].value=""
    }
}

function generaNumero(a, b){
	return Math.floor((b-a)*Math.random()) + a;
}