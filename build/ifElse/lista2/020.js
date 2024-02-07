"use strict";
function calculo(horastrabalhadas) {
    const salarioMinimo = 1400;
    const salarioPorHora = salarioMinimo / 10;
    console.log(salarioPorHora);
    let salarioBruto = salarioPorHora * horastrabalhadas;
    console.log(salarioBruto);
    let imposto = salarioBruto * 0.03;
    console.log(imposto);
    let salarioLiquido = salarioBruto - imposto;
    console.log(salarioLiquido);
}
calculo(8);
