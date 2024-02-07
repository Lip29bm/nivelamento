"use strict";
function mostrarNumerosIncrementais(m, i, n) {
    for (let count = 1; count <= n; count++) {
        console.log(m);
        m += i;
    }
}
mostrarNumerosIncrementais(1, 2, 10);
