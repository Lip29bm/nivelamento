"use strict";
function somaEntreNumeros(numero1, numero2, resultadoDaSoma) {
    for (let i = numero1; i <= numero2; i++) {
        resultadoDaSoma += i;
    }
    console.log(resultadoDaSoma);
}
somaEntreNumeros(12, 18, 0);
