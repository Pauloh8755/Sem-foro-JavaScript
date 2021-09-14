"use strict"
const semaforo = document.getElementById("semaforo")
const auto = document.getElementById("auto")
let idInterval


function semaforoVerde(){
    semaforo.src =  "img/verde.png"
    pararSemaforo()
    setContentAuto()
}

function semaforoAmarelo(){
    semaforo.src =  "img/amarelo.png"
    pararSemaforo()
    setContentAuto()
}

function semaforoVermelho(){
    semaforo.src =  "img/vermelho.png"
    pararSemaforo()
    setContentAuto()
}

function trocarCor(){
    if(semaforo.src.includes("amarelo")){
        semaforo.src =  "img/vermelho.png"
    }
    else if(semaforo.src.includes("verde")){
        semaforo.src =  "img/amarelo.png"
    }
    else if(semaforo.src.includes("desligado")){
        semaforo.src =  "img/verde.png"
    }
    else{
        semaforo.src =  "img/verde.png"
    }
}
function setContentAuto(){
    auto.textContent = "Automático"
}
function pararSemaforo(){
    clearInterval(idInterval)
    
}

function semaforoAuto(){
    if(auto.textContent == "Automático"){
        idInterval = setInterval(trocarCor, 1000)
        auto.textContent = "parar"
    }
    else{
        pararSemaforo()
        semaforo.src = "img/desligado.png"
        auto.textContent = "Automático"
    }
}
//eventos
document.getElementById("verde").addEventListener("click", semaforoVerde)
document.getElementById("amarelo").addEventListener("click", semaforoAmarelo)
document.getElementById("vermelho").addEventListener("click", semaforoVermelho)
document.getElementById("auto").addEventListener("click", semaforoAuto)