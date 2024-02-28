"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function vetorA() {
    const numeros = [];
    const repeticoes = [];
    let contagem = 0;
    while (contagem <= 5) {
        numeros.push(Number(readline_sync_1.default.question(`Digite um numero: `)));
        contagem++;
    }
    for (let i = 0; i < numeros.length; i++) {
        let numeroRepetido = 0;
        for (let j = 0; j < numeros.length; j++) {
            if (i !== j && numeros[i] === numeros[j]) {
                numeroRepetido++;
            }
        }
        if (numeroRepetido > 0 &&
            !repeticoes.some((achado) => achado.numero === numeros[i])) {
            const parte = {
                numero: numeros[i],
                aparicoes: numeroRepetido + 1,
            };
            repeticoes.push(parte);
        }
    }
    console.log(repeticoes);
}
vetorA();
