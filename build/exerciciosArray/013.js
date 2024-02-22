"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function calculaLocacoesGratuitas() {
    const clientes = [];
    let numeroDeClientes = 8;
    while (numeroDeClientes > 0) {
        let entrada = {
            nome: readline_sync_1.default.question(`informe o nome do cliente: `),
            dvdsLocados: Number(readline_sync_1.default.question(`informe a quantia de dvds locados em 2012: `)),
        };
        clientes.push(entrada);
        numeroDeClientes--;
    }
    clientes.forEach(cliente => {
        const locacoesGratis = Math.floor(cliente.dvdsLocados / 10);
        console.log(`o cliente ${cliente.nome} possui ${locacoesGratis} locacoes gratuitas`);
    });
}
calculaLocacoesGratuitas();
