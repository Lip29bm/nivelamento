"use strict";
function divisivelPorTres(numero1, numero2) {
    while (numero1 <= numero2) {
        if (numero1 % 3 === 0) {
            console.log(numero1);
        }
        numero1++;
    }
}
divisivelPorTres(1, 20);
