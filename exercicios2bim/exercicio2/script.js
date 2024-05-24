let calcular = document.querySelector("#calcular");
let ipPreco = document.querySelector("#ipPreco");
let ipQuantidade = document.querySelector("#ipQuantidade");
let resultado = document.querySelector("#resultado");

calcular.addEventListener("click", () => {
    somarValores();
});

function somarValores() {
    let preco = Number(ipPreco.value);
    let quantidade = Number(ipQuantidade.value);
    resultado.value = preco * quantidade;

}
