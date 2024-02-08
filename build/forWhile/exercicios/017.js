"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function medias(mediaEscolar, quantia, somaDasNotasIndividuais) {
    let i = 0;
    while (i < 20) {
        let nome = String(readline_sync_1.default.question("Nome do aluno:"));
        if (nome == "fim") {
            break;
        }
        let mediaDoAluno = Number(readline_sync_1.default.question("Media do aluno:"));
        quantia++;
        somaDasNotasIndividuais += mediaDoAluno;
    }
    mediaEscolar = somaDasNotasIndividuais / quantia;
    console.log("A media escolar foi " + mediaEscolar);
    console.log("A quantidades de alunos foram " + quantia);
}
medias(0, 0, 0);
