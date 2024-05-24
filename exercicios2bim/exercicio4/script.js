let ipValor1 = document.querySelector("#ipValor1")
let ipValor2 = document.querySelector("#ipValor2")
let ipValor3 = document.querySelector("#ipValor3")
let btCalcular = document.querySelector("#btCalcular")
let h3Resultado = document.querySelector("#h3Resultado")

function calcularMedias(){
    let valor1 = Number (ipValor1.value)
    let valor2 = Number (ipValor2.value)
    let valor3 = Number (ipValor3.value)

    let mediaAritmetica = (valor1 + valor2 + valor3) / 3;

    let somaPesos = 3 + 2 + 5;
    let somaValorPesos = (valor1 * 3) + (valor2 * 2) + (valor3 * 5)
    let mediaPonderada = somaValorPesos / somaPesos;

    let somaMedias = mediaAritmetica + mediaPonderada;
    let mediaDasMedias = somaMedias / 2;

    h3Resultado.innerHTML = "Media Aritmetica: "+mediaAritmetica+"<br>"+
                            "Media Ponderada: "+mediaPonderada+"<br>"+
                            "Soma das Medias: "+somaMedias+"<br>"+
                            "Media das Medias: "+mediaDasMedias;
}

btCalcular.onclick = function(){
    calcularMedias();
}