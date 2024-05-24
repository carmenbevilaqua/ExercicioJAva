let ipNumero = document.querySelector("#ipNumero");
let btVerificar = document.querySelector("#btVerificar");
let h3Resultado = document.querySelector("#h3Resultado");

function verificarImpar(){
    let numero = Number (ipNumero.value);
    if(numero % 2 == 0){
        h3Resultado.textContent = "Par"
    }else{
        h3Resultado.textContent = "Impar"
    }
}
btVerificar.onclick = function(){
    verificarImpar();
}
