"use strict";
function osTresMaiores() {
    let listaDeNumeros = [2, 5, 1, 7, 3];
    let maior1 = listaDeNumeros[0];
    let maior2 = listaDeNumeros[0];
    let maior3 = listaDeNumeros[0];
    for (let i = 0; i < listaDeNumeros.length; i++) {
        if (maior1 < listaDeNumeros[i]) {
            maior1 = listaDeNumeros[i];
        }
    }
    for (let j = 0; j < listaDeNumeros.length; j++) {
        if (maior2 < listaDeNumeros[j] && listaDeNumeros[j] !== maior1) {
            maior2 = listaDeNumeros[j];
        }
    }
    for (let k = 0; k < listaDeNumeros.length; k++) {
        if (maior3 < listaDeNumeros[k] &&
            listaDeNumeros[k] !== maior1 &&
            listaDeNumeros[k] !== maior2) {
            maior3 = listaDeNumeros[k];
        }
    }
    console.log(maior1);
    console.log(maior2);
    console.log("maior3););
}
osTresMaiores();
