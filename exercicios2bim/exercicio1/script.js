let SOMAR = document.querySelector("#somar");
let ipNumero1 = document.querySelector("#numero1");
let h2Titulo = document.querySelector("#titulo");
let ipNumero2 = document.querySelector("#numero2")

SOMAR.onclick = function(){ 
    somarValores();
}

function somarValores (){
    let soma = Number (ipNumero1.value) - Number (ipNumero2.value);
    resultado.value = soma;
}