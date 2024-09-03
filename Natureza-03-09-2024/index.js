function calcular() {
    // Obtendo os valores dos inputs
    let f = parseFloat(document.getElementById('foco').value);
    let p = parseFloat(document.getElementById('distancia').value);
    let y = parseFloat(document.getElementById('altura').value);

    // Verificando o tipo de espelho
    let tipoEspelho;
    if (f > 0) {
        tipoEspelho = "Côncavo";
    } else if (f === 0) {
        tipoEspelho = "Plano";
    } else {
        tipoEspelho = "Convexo";
    }

    // Verificando a posição do objeto
    let posicaoObjeto;
    if (y > 0) {
        posicaoObjeto = "Objeto para cima";
    } else if (y === 0) {
        posicaoObjeto = "Objeto no ponto";
    } else {
        posicaoObjeto = "Objeto para baixo";
    }

    // Calculando a posição da imagem
    let pl;
    if (p === f) {
        pl = "Imagem imprópria";
    } else {
        pl = (f * p) / (p - f);
    }

    // Determinando o tipo de imagem
    let tipoImagem;
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
    let a;
    if (typeof pl === "number") {
        a = -pl / p;
    }

    // Determinando a orientação da imagem
    let orientacaoImagem;
    if (typeof a === "number") {
        if (a > 0) {
            orientacaoImagem = "Imagem direita";
        } else {
            orientacaoImagem = "Imagem invertida";
        }
    }

    // Calculando a altura da imagem
    let yl;
    if (typeof a === "number") {
        yl = Math.abs(a) * y;
    }

    // Exibindo os resultados
    console.log(`Tipo de Espelho: ${tipoEspelho}`);
    console.log(`Posição do Objeto: ${posicaoObjeto}`);
    console.log(`Posição da Imagem (pl): ${pl}`);
    console.log(`Tipo de Imagem: ${tipoImagem}`);
    console.log(`Ampliação (a): ${a}`);
    console.log(`Orientação da Imagem: ${orientacaoImagem}`);
    console.log(`Altura da Imagem (yl): ${yl}`);
}
