"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function variasOperacoes(quantiaPar, quantiaImpar, mediaPar, somaPar, quantiaTotal, somaTotal, mediaGeral) {
    let i = 0;
    while (i < 20) {
        let numeros = Number(readline_sync_1.default.question("digite um numero: "));
        if (numeros <= 0) {
            break;
        }
        quantiaTotal++;
        somaTotal += numeros;
        mediaGeral = somaTotal / quantiaTotal;
        if (numeros % 2 === 0) {
            somaPar += numeros;
            quantiaPar++;
        }
        else if (numeros % 2 !== 0) {
            quantiaImpar++;
        }
        mediaPar = somaPar / quantiaPar;
    }
    console.log(`foram digitados ${quantiaPar} pares e ${quantiaImpar} impares, a media dos numeros pares foi ${mediaPar} e a media geral foi ${mediaGeral}`);
}
variasOperacoes(0, 0, 0, 0, 0, 0, 0);
