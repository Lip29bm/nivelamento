"use strict";
function numeros(numero1, numero2) {
    if (numero1 > numero2) {
        let resultado1 = numero1 ** 0.5;
        console.log(resultado1);
        let resultado2 = numero2 ** 2;
        console.log(resultado2);
    }
    else {
        let resultado1 = numero2 ** 0.5;
        console.log(resultado1);
        let resultado2 = numero1 ** 2;
        console.log(resultado2);
    }
}
numeros(18, 16);
