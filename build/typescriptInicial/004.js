"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function data() {
    let dataInserida = String(readline_sync_1.default.question(`digite a data: `));
    let separaData = dataInserida.split(`/`);
    const dia = separaData[0];
    const mes = separaData[1];
    const ano = separaData[2];
    console.log(`dia: ${dia}, mes: ${mes}, ano: ${ano}`);
}
data();
