"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function raizQuadrada() {
    let valor = Number(readline_sync_1.default.question(("Digite um numero:")));
    let j = 1;
    let raiz = 0;
    while (valor >= j) {
        valor -= j;
        raiz++;
        j += 2;
    }
    console.log(raiz);
}
raizQuadrada();
