"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function listaDeProdutos(menorQueDez, entreDezETrinta, maiorQueTrinta) {
    const produtos = [];
    for (let i = 1; i <= 50; i++) {
        const novoProduto = {
            nome: String(readline_sync_1.default.question("Digite o nome do produto: ")),
            custo: Number(readline_sync_1.default.question("Digite o custo do produto: ")),
            preco: Number(readline_sync_1.default.question("Digite o preco do produto: ")),
        };
        produtos.push(novoProduto);
    }
    for (let i = 0; i < produtos.length; i++) {
        let lucro = produtos[i].preco - produtos[i].custo;
        let porcentagemDeLucro = (lucro / produtos[i].custo) * 100;
        if (porcentagemDeLucro < 10) {
            menorQueDez++;
        }
        else if (porcentagemDeLucro < 30) {
            entreDezETrinta++;
        }
        else {
            maiorQueTrinta++;
        }
    }
    console.log(menorQueDez);
    console.log(entreDezETrinta);
    console.log(maiorQueTrinta);
}
listaDeProdutos(0, 0, 0);
