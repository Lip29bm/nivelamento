"use strict";
let numerosInseridos = [132, 54, 2, 54, 2, 53, 645, 80, 13];
let divisiveisPor2e5 = 0;
let divisiveisPor2e3 = 0;
for (let i = 0; i <= numerosInseridos.length; i++) {
    if (numerosInseridos[i] % 2 === 0 && numerosInseridos[i] % 5 === 0) {
        divisiveisPor2e5++;
    }
    else if (numerosInseridos[i] % 2 === 0 && numerosInseridos[i] % 3 === 0) {
        divisiveisPor2e3++;
    }
}
console.log(divisiveisPor2e5);
console.log(divisiveisPor2e3);
