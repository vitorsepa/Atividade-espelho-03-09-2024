let f = document.getElementById('foco')
let p = document.getElementById('distancia')
let y = document.getElementById('altura')

let tipoEspelho;
let posicaoObjeto;
let pl;
let tipoImagem;
let a;
let orientacaoImagem;
let yl;

document.getElementById("botao").addEventListener("click", function(){
    calcular()
    result()
})

function calcular() {
    let f2 = parseInt(f.value)
    let p2 = parseInt(p.value)
    let y2 = parseInt(y.value)
    if (f2 > 0) {
        tipoEspelho = "Côncavo";
    } else if (f2 === 0) {
        tipoEspelho = "Plano";
    } else {
        tipoEspelho = "Convexo";
    }

    // Verificando a posição do objeto
    if (y2 > 0) {
        posicaoObjeto = "Objeto para cima";
    } else if (y2 === 0) {
        posicaoObjeto = "Objeto no ponto";
    } else {
        posicaoObjeto = "Objeto para baixo";
    }

    // Calculando a posição da imagem
    if (p2 === f2) {
        pl = "Imagem imprópria";
    } else {
        pl = (f2 * p2) / (p2 - f2);
    }

    // Determinando o tipo de imagem
    if (typeof pl === "number") {
        if (pl > 0) {
            tipoImagem = "Imagem real (fora do espelho)";
        } else {
            tipoImagem = "Imagem virtual (dentro do espelho)";
        }
    } else {
        tipoImagem = pl;
    }

    // Calculando a ampliação
    if (typeof pl === "number") {
        a = -pl / p2;
    }

    // Determinando a orientação da imagem
    if (typeof a === "number") {
        if (a > 0) {
            orientacaoImagem = "Imagem direita";
        } else {
            orientacaoImagem = "Imagem invertida";
        }
    }

    // Calculando a altura da imagem
    if (typeof a === "number") {
        yl = Math.abs(a) * y;
    }
}

let resultado = document.querySelector("span.resultado");

function result(){  
    if (f.value || p.value || y.value){
        return resultado.innerHTML = `Tipo de Espelho: ${tipoEspelho}<br><br>Posição do Objeto: ${posicaoObjeto}<br><br>Posição da Imagem (pl): ${pl}<br><br>Tipo de Imagem: ${tipoImagem}<br><br>Ampliação (a): ${a}<br><br>Orientação da Imagem: ${orientacaoImagem}<br><br>Altura da Imagem (yl): ${yl}`
    }
    console.log("Erro")
}