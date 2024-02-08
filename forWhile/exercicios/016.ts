import readline from "readline-sync";
function maiorMedia(maiorMedia: number, alunoCampeao: string) {
  for (let i: number = 0; i < 5; i++) {
    let media: number = Number(readline.question("insira a media"));
    let aluno: string = String(readline.question("insira o nome"));
    if (media > maiorMedia) {
      maiorMedia = media;
      alunoCampeao = aluno;
    }
  }
  console.log(
    `a maior media da escola foi ${maiorMedia} tirada pelo aluno ${alunoCampeao}`
  );
}
maiorMedia(0, "");
