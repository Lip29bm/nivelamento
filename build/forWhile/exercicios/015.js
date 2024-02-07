"use strict";
let variosNumeros = [32, 78, 34, 65, 2, 7, 9, 23, 90];
let pares = 0;
let somaPares = 0;
let impares = 0;
let quantiaNum = 0;
let somaTotal = 0;
for (let i = 0; i < variosNumeros.length; i++) {
    quantiaNum++;
    somaTotal += variosNumeros[i];
    if (variosNumeros[i] % 2 === 0) {
        pares++;
        somaPares += variosNumeros[i];
    }
    else {
        impares++;
    }
}
let parMedia = somaPares / pares;
let mediaGeral = somaTotal / quantiaNum;
console.log(pares);
console.log(impares);
console.log(parMedia);
console.log(mediaGeral);
