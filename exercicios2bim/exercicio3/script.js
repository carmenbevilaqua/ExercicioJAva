let calcular = document.querySelector("#calcular");
let ipSaldo = document.querySelector("#ipSaldo");
let resultado = document.querySelector("#resultado");

calcular.onclick = function() { 
    somarValores();
}

function somarValores() {
    let saldo = parseFloat(ipSaldo.value); 
    if (!isNaN(saldo)) { 
        let soma = saldo + (saldo * 0.01); 
        resultado.value = soma.toFixed(2); 
    } else {
        resultado.value = "Entrada inválida"; 
    }
}