"use strict";
let definir = [9, 3, 5];
function decrescente() {
    definir.sort(function (a, b) {
        return a - b;
    });
    console.log(definir);
}
decrescente();
