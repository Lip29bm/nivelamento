import readline from "readline-sync";
function tabuada(): void {
  let numeroInserido: number = Number(readline.question("insira um numero:"));
  for (let i: number = 1; i <= 10; i++) {
    let resultado: number = numeroInserido * i;
    console.log(`o ${numeroInserido} vezes ${i} e igual a: ${resultado}`);
  }
}
tabuada();
