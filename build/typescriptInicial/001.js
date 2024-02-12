"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function contaOcorrencias() {
    let palavra = String(readline_sync_1.default.question("Escreva uma palavra: "));
    let letrasSeparadas = [];
    let letra = String(readline_sync_1.default.question("Escolha uma letra: "));
    let letraQuantia = 0;
    for (let i = 0; i < palavra.length; i++) {
        letrasSeparadas.push(palavra.split("")[i]);
    }
    for (let j = 0; j < letrasSeparadas.length; j++) {
        if (letrasSeparadas[j] === letra) {
            letraQuantia++;
        }
    }
    console.log(`a letra ${letra} aparece ${letraQuantia} vezes dentro da palavra ${palavra}`);
}
contaOcorrencias();
