"use strict";
function reajuste(salarioAtual, salarioMinimo) {
    if (salarioAtual <= salarioMinimo) {
        let salarioReajustado = salarioAtual * 1.2;
        console.log(salarioReajustado);
    }
    else {
        let salarioReajustado = salarioAtual * 1.1;
        console.log(salarioReajustado);
    }
}
reajuste(2501, 2500);
