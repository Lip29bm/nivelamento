"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function numero(valorNegativo) {
    for (let i = 1; i <= 5; i++) {
        let valorA = Number(readline_sync_1.default.question("Digite um numero"));
        if (valorA < 0) {
            valorNegativo++;
        }
    }
    console.log(valorNegativo + " Numeros sao negativos");
}
numero(0);
