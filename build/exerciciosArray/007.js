"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function vendas(bonus, totalVendas, maisVendido) {
    let codigoProduto = [];
    let precoProduto = [];
    let produtoVendido = [];
    for (let i = 0; i < 10; i++) {
        codigoProduto.push(Number(readline_sync_1.default.question(`digite o codigo do produto: `)));
        precoProduto.push(Number(readline_sync_1.default.question(`digite o preco do produto: `)));
        produtoVendido.push(Number(readline_sync_1.default.question(`quantas vezes esse produto foi vendido: `)));
    }
    for (let i = 0; i < 10; i++) {
        console.log(`o produto: ${codigoProduto[i]}, foi vendido ${produtoVendido[i]} vezes por ${precoProduto[i]} reais`);
        totalVendas += precoProduto[i] * produtoVendido[i];
        if (maisVendido < produtoVendido[i]) {
            maisVendido = produtoVendido[i];
        }
    }
    const index = produtoVendido.findIndex((maisVendidoIndex) => {
        return maisVendidoIndex >= maisVendido;
    });
    bonus = totalVendas * 0.05;
    console.log(bonus);
    console.log(`o produto mais vendido foi o ${codigoProduto[index]}, vendido a ${precoProduto[index]}, ${produtoVendido[index]} vezes`);
}
vendas(0, 0, 0);
