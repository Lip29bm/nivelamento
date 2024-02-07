"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function identificarParOuImpar(totalPar, totalImpar) {
    let i = 0;
    while (i < 10) {
        let numeros = Number(readline_sync_1.default.question(("digite um número:")));
        if (numeros < 0) {
            break;
        }
        else if (numeros % 2 === 0) {
            totalPar++;
        }
        else {
            totalImpar++;
        }
        i++;
    }
    console.log('foram digitados ' + totalPar + ' numeros pares e ' + totalImpar + ' numeros impares');
}
identificarParOuImpar(0, 0);
