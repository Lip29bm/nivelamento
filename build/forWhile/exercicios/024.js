"use strict";
let arrayA = [-10, -2, 3, 6, 8];
let negativo = 0;
for (let j = arrayA[0]; j <= arrayA.length; j++) {
    if (arrayA[j] < 0) {
        negativo++;
    }
}
console.log(negativo);
