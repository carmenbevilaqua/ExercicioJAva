let ipCodigo = document.querySelector("#ipCodigo");
let btAcharProduto = document.querySelector("#btAcharProduto");
let h3Produto = document.querySelector("#h3Produto");

function buscarProdutos() {
    if (String(ipCodigo.value) == "001") {
        h3Produto.textContent = "Parafusos";
    }
    else if
        (String(ipCodigo.value) == "002") {
        h3Produto.textContent = "Porca";
    }
    else if
        (String(ipCodigo.value) == "003") {
        h3Produto.textContent = "Prego";
    }

    else {
        h3Produto.textContent = "Diversos";
    }
}

btAcharProduto.onclick = function () {
    buscarProdutos();
}