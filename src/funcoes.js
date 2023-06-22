/**
 * Implemente uma função que receba o nome de um cliente e devolve um cumprimento para ele.
 * 
 * EXEMPLO: 
 *   - Se o nome do cliente é Bill Gates, o cumprimento deve ser "Olá, Bill Gates!".
 *   - Se o nome do cliente é Steve Jobs, o cumprimento deve ser "Olá, Steve Jobs!".
 */
function cumprimenta(nomeCliente) {
    return `Olá ${nomeCliente}!`;
}

console.log(cumprimenta('Cácio José'));


/**
 * Implemente uma função que recebe o valor de uma compra e a quantidade de itens comprados,
 * e retorne o valor do desconto de acordo com a quantidade de itens. 
 * 
 * A TABELA DE DESCONTO É:
 *   - 1 item: 0 de desconto;
 *   - 2 itens: 3% de desconto;
 *   - 3 itens: 7% de desconto;
 *   - 4 itens: 12% de desconto;
 *   - 5 itens ou mais: 20% de desconto.
 */
function calculaDesconto(valorTotalCompras, quantidadeItem) {
    if (quantidadeItem === 1) {
        return valorTotalCompras;
    } else if (quantidadeItem === 2) {
        return (valorTotalCompras / 100) * 3;
    } else if (quantidadeItem === 3) {
        return (valorTotalCompras / 100) * 7;
    } else if (quantidadeItem === 4) {
        return (valorTotalCompras / 100) * 12;
    } else {
        return (valorTotalCompras / 100) * 20;
    }
}

console.log(`O desconto é de ${calculaDesconto(500, 3)} reais`);



/**
 * Implemente uma função que receba um número X e devolva a soma dos número de 1 a X.
 * 
 * EXEMPLO:
 *   - X é 100: calcula 1 + 2 + 3 + ... + 99 + 100, retorna 5050
 *   - X é 200: calcula 1 + 2 + 3 + ... + 199 + 200, retorna 20100
 */
function somatorio(numeroX) {
     let soma = 0;

    for (let n = 1; n <= numeroX; n++) {
        soma = soma + n;
    }

    return soma;
}

console.log(somatorio(200));


/**
 * Implemente uma função que recebe um número N devolve o fatorial do número.
 * 
 * EXEMPLO:
 *   - n é 5: 5! = 120
 *   - n é 9: 9! = 362880
 */
function fatorial(numeroN) {
    let fatorialN = 1;

    for (let n = 1; n <= numeroN; n++) {
        fatorialN = fatorialN * n;
    }

    return fatorialN;
}
console.log(fatorial(5));

/**
 * Implemente uma função que calcule uma função do segundo grau (ax² + bx + c = 0).
 * A função deve retornar um array com x1 na primeira posição e x2 na segunda posição.
 */
function equacaoDeSegundoGrau() {}

/**
 * Implemente uma função que receba uma data no formato DD/MM/YYYY, 
 * extraia o dia, mês e ano, e retorne um array com:
 *   - o ANO na posição 1.
 *   - o MÊS na posição 2.
 *   - o DIA na posição 3.
 */
function extraiElementosDaData(diaMesAno) {
    let anoMesDia = diaMesAno.reverse(function() {
        return [];
    })

    return anoMesDia;
}

console.log(extraiElementosDaData(['dia', 'mes', 'ano']));


/**
 * Considerando a sequência de Fibonacci 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...,
 * implemente uma função que receba a enésima posição da sequência, e devolva o algarismo correspondente.
 * 
 * EXEMPLO:
 *   - posição é 7: retorna o elemento 13.
 *   - posição é 8: retorna o elemento 21.
 */
function fibonacci(posicao) {
    let somaDosNumeros = 0;
    let numeroA = 0;
    let numeroP = 1;

    for (let n = 1; n < posicao; n++) {
        somaDosNumeros = numeroA + numeroP;
        numeroA = numeroP;
        numeroP = somaDosNumeros;
    }

    return somaDosNumeros;
}

console.log(fibonacci(12));

/**
 * Implemente uma função que recebe um array com notas de um aluno e uma função de callback,
 * e devolva o resultado da média pelo callback.
 */
 function calculaMedia() {}


/**
 * O financeiro do Comex disponibilizou os faturamentos mensais numa lista de registros. 
 * Cada registro tem duas posições: uma string com o nome do mês e o valor vendido nele. 
 * 
 * Implemente uma função que receba uma lista de faturamentos (exemplo abaixo) e retorne
 * o valor anual consolidado. 
 * 
 * EXEMPLO DA ESTRUTURA: [
 *                         ['janeiro', 10],
 *                         ['fevereiro', 20],
 *                         ['março', 30]
 *                         ...
 *                       ]
 * RESULTADO ESPERADO: 60 (10 + 20 + 30)
 */
function calculaFaturamentoAnual() {}

/**
 * Agora a equipe do financeiro gostaria de filtrar os faturamentos pra ver períodos específicos.
 * 
 * Implemente uma função que receba uma lista de faturamentos e um callback que recebe dois parâmetros 
 * para filtrar se aquele registro vai entrar no cálculo ou não.
 * 
 * 
 * EXEMPLO DO FILTRO: callback(mes, valor) 
 */
function calculaFaturamentoAnualComFiltro() {}


/**
 * Crie uma função que receba o fator de multiplicação de uma tabuada específica e retorne uma 
 * função que calcule a multiplicação do fator por um número.
 */
function criaTabuada() {
}


module.exports = {
    cumprimenta,
    calculaDesconto,
    somatorio,
    fatorial,
    calculaMedia,
    equacaoDeSegundoGrau,
    extraiElementosDaData,
    fibonacci,
    calculaFaturamentoAnual,
    calculaFaturamentoAnualComFiltro,
    criaTabuada
}