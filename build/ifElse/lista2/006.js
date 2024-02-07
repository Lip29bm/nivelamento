"use strict";
function desconto(valor, numeroDeParcelas) {
    if (numeroDeParcelas === 1) {
        valor = valor * 0.9;
        console.log("o valor a pagar sera: " + valor);
    }
    else if (numeroDeParcelas === 2) {
        console.log("O valor a pagar sera: " + valor);
    }
    else if (numeroDeParcelas === 4) {
        valor = valor * 1.05;
        console.log("o valor a pagar sera: " + valor);
    }
    else {
        console.log("numero de parcelas nao e aceito");
    }
}
desconto(40, 4);
