"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function separaNumeros() {
    let lista = [];
    let listaPositiva = [];
    let listaNegativa = [];
    for (let i = 0; i < 8; i++) {
        let preenchendoLista = Number(readline_sync_1.default.question(`insira um numero: `));
        lista.push(preenchendoLista);
    }
    for (let j = 0; j < lista.length; j++) {
        if (lista[j] < 0) {
            listaNegativa.push(lista[j]);
        }
        else if (lista[j] > j) {
            listaPositiva.push(lista[j]);
        }
    }
    console.log(`No grupo de numeros (${lista}), (${listaPositiva}) sao positivos e (${listaNegativa}) sao negativos`);
}
separaNumeros();
