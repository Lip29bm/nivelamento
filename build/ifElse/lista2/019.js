"use strict";
function tabelaDeValores(precoDeFabrica, percentualDeLucro, percentualDeImpostos) {
    let LucroDoDistribuidor = (precoDeFabrica * percentualDeLucro) - precoDeFabrica;
    console.log(LucroDoDistribuidor);
    let valorDosImpostos = (percentualDeImpostos * precoDeFabrica) - precoDeFabrica;
    console.log(valorDosImpostos);
    let precoFinalDoVeiculo = precoDeFabrica + LucroDoDistribuidor + valorDosImpostos;
    console.log(precoFinalDoVeiculo);
}
tabelaDeValores(12000, 1.25, 1.5);
