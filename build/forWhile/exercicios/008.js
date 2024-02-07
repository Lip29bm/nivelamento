"use strict";
function listaMaiorMenor(maior, menor) {
    let numerosQualquer = [5, 7, 2, 6, 9];
    for (let i = 0; i < numerosQualquer.length; i++) {
        maior < numerosQualquer[i] ? (maior = numerosQualquer[i]) : maior;
        menor > numerosQualquer[i] ? (menor = numerosQualquer[i]) : menor;
    }
    console.log(menor);
    console.log(maior);
}
listaMaiorMenor(0, 0);
