"use strict";
function apenasPar(numero1, numero2, quantidade) {
    while (numero1 <= numero2) {
        if (numero1 % 2 === 0) {
            console.log(numero1);
            quantidade++;
        }
        numero1++;
    }
    console.log(quantidade);
}
apenasPar(1, 20, 0);
