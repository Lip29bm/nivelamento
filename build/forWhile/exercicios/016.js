"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function maiorMedia(maiorMedia, alunoCampeao) {
    for (let i = 0; i < 5; i++) {
        let media = Number(readline_sync_1.default.question("insira a media"));
        let aluno = String(readline_sync_1.default.question("insira o nome"));
        if (media > maiorMedia) {
            maiorMedia = media;
            alunoCampeao = aluno;
        }
    }
    console.log(`a maior media da escola foi ${maiorMedia} tirada pelo aluno ${alunoCampeao}`);
}
maiorMedia(0, "");
