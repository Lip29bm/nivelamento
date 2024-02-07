"use strict";
let valor = 91;
let j = 1;
let raiz = 0;
while (valor >= j) {
    valor -= j;
    raiz++;
    j += 2;
}
console.log(raiz);
