import readline from "readline-sync";

function medias(
  mediaEscolar: number,
  quantia: number,
  somaDasNotasIndividuais: number
): void {
  let i: number = 0;
  while (i < 20) {
    let nome: string = String(readline.question("Nome do aluno:"));
    if (nome == "fim") {
      break;
    }
    let mediaDoAluno: number = Number(readline.question("Media do aluno:"));
    quantia++;
    somaDasNotasIndividuais += mediaDoAluno;
  }
  mediaEscolar = somaDasNotasIndividuais / quantia;
  console.log("A media escolar foi " + mediaEscolar);
  console.log("A quantidades de alunos foram " + quantia);
}
medias(0, 0, 0);
