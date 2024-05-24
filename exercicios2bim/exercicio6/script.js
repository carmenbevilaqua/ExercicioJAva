let ipNumero1 = document.querySelector("#valor1");
let ipNumero2 = document.querySelector("#valor2");
let btComparar = document.querySelector("#btComparar");

btComparar.addEventListener("click", function() {
    let valor1 = parseFloat(ipNumero1.value);
    let valor2 = parseFloat(ipNumero2.value);

    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById('resultado').textContent = "Por favor, insira dois números válidos.";
        return;
    }

    let menor = menorValor(valor1, valor2);
    document.getElementById('resultado').textContent = `O menor valor entre ${valor1} e ${valor2} é: ${menor}`;
});

function menorValor(a, b) {
    return a < b ? a : b;
}