"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function identificarNumero(quadradoPerfeito) {
    let i = 0;
    while (i < 10) {
        let numeroInserido = Number(readline_sync_1.default.question(`insira um numero aqui:`));
        if (numeroInserido <= 0) {
            break;
        }
        let raiz = numeroInserido ** 0.5;
        if (raiz % 1 === 0) {
            quadradoPerfeito++;
        }
    }
    console.log(`${quadradoPerfeito} numeros sao quadrados perfeitos`);
}
identificarNumero(0);
