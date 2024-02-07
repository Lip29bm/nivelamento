"use strict";
let arraySeteNumeros = [32, 42, 1, 17, 39, 27, 8, 25];
let totalImpar = 0;
let totalPar = 0;
for (let i = 0; i <= arraySeteNumeros.length; i++) {
    if (arraySeteNumeros[i] % 2 == 0) {
        totalPar++;
    }
    else if (arraySeteNumeros[i] % 2 != 0) {
        totalImpar++;
    }
}
console.log(totalImpar);
console.log(totalPar);
