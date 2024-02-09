"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function numerosDeArmstrong() {
    let numeroInserido = String(readline_sync_1.default.question(`insira o numero aqui: `));
    let algarismo = [];
    let resultado = 0;
    for (let i = 0; i < numeroInserido.length; i++) {
        algarismo.push(Number(numeroInserido[i]));
    }
    for (let j = 0; j < algarismo.length; j++) {
        resultado += Math.pow(algarismo[j], algarismo.length);
    }
    if (resultado == Number(numeroInserido)) {
        console.log(`Sim o numero ${Number(numeroInserido)} e um numero de armstrong`);
    }
    else {
        console.log(`Nao o numero ${Number(numeroInserido)} nao e um numero de armstrong`);
    }
}
numerosDeArmstrong();
