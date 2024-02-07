"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function somandoNumeros(somaTotal) {
    for (let i = 0; i <= 10; i++) {
        let numeros = Number(readline_sync_1.default.question('Digite um numero: '));
        if (numeros <= -1) {
            break;
        }
        somaTotal += numeros;
    }
    console.log(`foram  ${somaTotal} numero(s)`);
}
somandoNumeros(0);
