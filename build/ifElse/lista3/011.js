"use strict";
let comparados = [8, 25, 5, 34];
function indentificarValor() {
    let maximo = Math.max(...comparados);
    console.log(maximo);
    let minimo = Math.min(...comparados);
    console.log(minimo);
}
indentificarValor();
