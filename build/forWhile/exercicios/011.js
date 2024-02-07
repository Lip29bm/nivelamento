"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function contandoNumeros(quatia) {
    for (let i = 0; i <= 10; i++) {
        let numeros = Number(readline_sync_1.default.question('Digite um número: '));
        if (numeros <= -1) {
            break;
        }
        quatia++;
    }
    console.log(`foram digitados ${quatia} numero(s)`);
}
contandoNumeros(0);
