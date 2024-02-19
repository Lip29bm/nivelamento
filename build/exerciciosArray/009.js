"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function verificarNotas() {
    let chamada = [];
    let aprovados = [];
    for (let i = 1; i <= 200; i++) {
        let listandoChamada = {
            nome: String(readline_sync_1.default.question(`nome do participante ${i}: `)),
            nota: Number(readline_sync_1.default.question(`nota do participante ${i}: `)),
        };
        if (listandoChamada.nome == "" || listandoChamada.nota < 0) {
            break;
        }
        chamada.push(listandoChamada);
    }
    for (let i = 0; i < chamada.length; i++) {
        if (chamada[i].nota >= 70) {
            aprovados.push(chamada[i]);
        }
    }
    console.log(`lista de participantes: `);
    for (let participante of chamada) {
        console.log(`${participante.nome}: ${participante.nota}`);
    }
    console.log(`Lista de Aprovados: `);
    for (let participante of aprovados) {
        console.log(`${participante.nome}: ${participante.nota}`);
    }
}
verificarNotas();
