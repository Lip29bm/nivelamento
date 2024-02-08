"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function tresMaiores(maior, segundoMaior, terceiroMaior) {
    for (let i = 0; i <= 10; i++) {
        let numeroInserido = Number(readline_sync_1.default.question(`digite um numero:`));
        if (numeroInserido > maior) {
            terceiroMaior = segundoMaior;
            segundoMaior = maior;
            maior = numeroInserido;
        }
        else if (numeroInserido > segundoMaior) {
            terceiroMaior = segundoMaior;
            segundoMaior = numeroInserido;
        }
        else if (numeroInserido > terceiroMaior) {
            terceiroMaior = numeroInserido;
        }
    }
    console.log(`o maior numero inserido foi ${maior}, o segundo maior foi ${segundoMaior} e o terceiro maior foi ${terceiroMaior}`);
}
tresMaiores(0, 0, 0);
