"use strict";
let mediaEscolar = [];
let nomes = ["carla", "joao", "marcos", "lucia", "eduardo"];
let quantiaDeAlunos = 0;
let mediaIndividual = [4.5, 8, 5.4, 9, 2.8,];
let mediaTotal = 0;
for (let i = 0; i <= nomes.length && i <= mediaIndividual.length; i++) {
    if (nomes[i] === "fim") {
        break;
    }
    quantiaDeAlunos++;
    mediaTotal += mediaIndividual[i];
    mediaEscolar.push({ nome: nomes[i], media: mediaIndividual[i] });
}
console.log(quantiaDeAlunos);
console.log(mediaTotal);
