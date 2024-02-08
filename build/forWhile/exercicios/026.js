"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function pesquisa(mediaDoSalarioDaPopulacao, mediaDoNumeroDeFilhos, maiorSalario, pessoasComAteMil) {
    let quantiaDeRespostas = 0;
    let totalDeFilhos = 0;
    let totalDoSalário = 0;
    for (let j = 1; j <= 5; j++) {
        let numeroDeFilhos = Number(readline_sync_1.default.question("Numero de filhos?"));
        let salario = Number(readline_sync_1.default.question("Qual é o seu salário?"));
        quantiaDeRespostas++;
        totalDeFilhos += numeroDeFilhos;
        totalDoSalário += salario;
        if (salario > maiorSalario) {
            maiorSalario = salario;
        }
        if (salario < 1000) {
            pessoasComAteMil++;
        }
    }
    mediaDoSalarioDaPopulacao = totalDoSalário / quantiaDeRespostas;
    mediaDoNumeroDeFilhos = totalDeFilhos / quantiaDeRespostas;
    console.log('A media do salario da populacao e: ' + mediaDoSalarioDaPopulacao);
    console.log('A media do numero de filhos ' + mediaDoNumeroDeFilhos);
    console.log('O maior salario e: ' + maiorSalario);
    console.log('A quantidades de pessoas com salario ate 1.000 e: ' + pessoasComAteMil);
}
pesquisa(0, 0, 0, 0);
