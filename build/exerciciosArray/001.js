"use strict";
function inverterArray() {
    let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let listaInvertida = [];
    for (let i = lista.length - 1; i >= 0; i--) {
        listaInvertida.push(lista[i]);
    }
    console.log(listaInvertida);
}
inverterArray();
