"use strict";
let algoritimo = [2, 5, 1];
function ascendente() {
    algoritimo.sort(function (a, b) {
        return a - b;
    });
    console.log(algoritimo);
}
ascendente();
