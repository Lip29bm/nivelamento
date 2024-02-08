"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function tabuada() {
    let numeroInserido = Number(readline_sync_1.default.question("insira um numero:"));
    for (let i = 1; i <= 10; i++) {
        let resultado = numeroInserido * i;
        console.log(`o ${numeroInserido} vezes ${i} e igual a: ${resultado}`);
    }
}
tabuada();
