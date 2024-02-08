"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function numeros() {
    let numero1 = Number(readline_sync_1.default.question("Digite um numero:"));
    let numero2 = Number(readline_sync_1.default.question("Digite um numero:"));
    let quociente = 0;
    while (numero1 >= numero2) {
        quociente++;
        numero1 -= numero2;
    }
    console.log(quociente);
}
numeros();
