"use strict";
function salario(salarioInicial) {
    const gratificacao = 1.05;
    const imposto = 0.93;
    let salarioComBonus = salarioInicial * gratificacao;
    let salarioFinal = salarioComBonus * imposto;
    console.log(salarioFinal);
}
salario(1000);
