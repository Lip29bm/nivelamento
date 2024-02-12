"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function somaDobrada() {
    let k = Number(readline_sync_1.default.question("Digite um numero: "));
    let l = Number(readline_sync_1.default.question("Digite um numero: "));
    if (k === l) {
        let dobroDaSoma = k * 2 + l * 2;
        console.log(dobroDaSoma);
    }
    else if (k < 1 || l < 1) {
        console.log(-1);
    }
    else {
        let soma = l + k;
        console.log(soma);
    }
}
somaDobrada();
