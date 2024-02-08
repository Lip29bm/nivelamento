"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function primoOuNao(primo) {
    let numeroInserido = Number(readline_sync_1.default.question(`insira um numero aqui:`));
    let raiz = numeroInserido ** 0.5;
    for (let i = 2; i <= raiz; i++) {
        if (numeroInserido <= 0) {
            break;
        }
        else if (numeroInserido % i === 0) {
            primo++;
        }
    }
    if (primo > 0) {
        console.log(`o ${numeroInserido} nao e primo`);
    }
    else {
        console.log(`o ${numeroInserido} e primo`);
    }
}
primoOuNao(0);
