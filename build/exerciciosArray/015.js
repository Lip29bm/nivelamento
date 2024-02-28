"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function consercionaria() {
    const modelosDosCarros = [];
    const consumoDosCarros = [];
    let i = 0;
    while (i <= 5) {
        modelosDosCarros.push(readline_sync_1.default.question(`qual o modelo do carro: `));
        consumoDosCarros.push(Number(readline_sync_1.default.question(`quantos km esse carro az por litro: `)));
        i++;
    }
    let maisEconomico = 0;
    for (let j = 0; j < consumoDosCarros.length; j++) {
        if (consumoDosCarros[j] < consumoDosCarros[maisEconomico]) {
            maisEconomico = j;
        }
    }
    console.log(`o carro mais economico inserido foi o ${modelosDosCarros[maisEconomico]} rodando 1km com ${consumoDosCarros[maisEconomico]} litros de gasolina`);
    let gasolinaPor1000km = 0;
    for (let j = 0; j < modelosDosCarros.length; j++) {
        gasolinaPor1000km = 1000 / consumoDosCarros[j];
        console.log(`o carro ${modelosDosCarros[j]} precisa de ${gasolinaPor1000km} litros de gasolina para percorrer 1000km`);
    }
}
consercionaria();
