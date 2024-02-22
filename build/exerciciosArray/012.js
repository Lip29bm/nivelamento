"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function conjuntoDeNumeros() {
    const lista = [
        50, 29, 38, 36, 47, 18, 33, 48, 17, 8, 20, 32, 44, 26, 46, 39, 28, 10, 9, 6,
    ];
    for (let i = 0; i <= 5; i++) {
        let pergunta = Number(readline_sync_1.default.question("Digite um numero: "));
        if (pergunta <= 0) {
            break;
        }
        let encontrado = false;
        for (let j = 0; j < lista.length; j++) {
            if (pergunta === lista[j]) {
                encontrado = true;
            }
        }
        if (encontrado === true) {
            console.log("Está na lista!");
        }
        else {
            console.log("Nao está na lista!");
        }
    }
}
conjuntoDeNumeros();
const encontrarNumero = () => {
    const lista = [
        50, 29, 38, 36, 47, 18, 33, 48, 17, 8, 20, 32, 44, 26, 46, 39, 28, 10, 9, 6,
    ];
    let numero = 0;
    while (numero >= 0) {
        numero = Number(readline_sync_1.default.question("Digite um numero: "));
        if (lista.includes(numero)) {
            console.log("numero encontrado");
        }
        else {
            console.log("numero nao encontrado");
        }
    }
};
