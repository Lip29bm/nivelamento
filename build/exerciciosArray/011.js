"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function corrigindoProvas(aprovados) {
    let provasDaTurma = [];
    const resultadoQuestoes = [];
    for (let j = 1; j <= 8; j++) {
        const resposta = readline_sync_1.default.question(`responda a questao: `);
        if (resposta === "true") {
            resultadoQuestoes.push(true);
        }
        else {
            resultadoQuestoes.push(false);
        }
    }
    const gabarito = {
        nome: `gabarito`,
        questoes: resultadoQuestoes,
    };
    const respostas = [];
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 8; j++) {
            const resposta = readline_sync_1.default.question(`responda a questao: `);
            if (resposta === "true") {
                respostas.push(true);
            }
            else {
                respostas.push(false);
            }
        }
        let fazendoProva = {
            nome: String(readline_sync_1.default.question(`digite seu nome: `)),
            questoes: respostas,
        };
        provasDaTurma.push(fazendoProva);
    }
    provasDaTurma.forEach(function (prova) {
        prova.questoes.forEach(function (questao, index) {
            if ()
                ;
        });
    });
}
corrigindoProvas(0);
