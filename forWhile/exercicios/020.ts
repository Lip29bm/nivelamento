import readline from "readline-sync";
function identificarNumero(quadradoPerfeito: number) {
  let i: number = 0;
  while (i < 10) {
    let numeroInserido: number = Number(
      readline.question(`insira um numero aqui:`)
    );
    if (numeroInserido <= 0) {
      break;
    }
    let raiz: number = numeroInserido ** 0.5;
    if (raiz % 1 === 0) {
      quadradoPerfeito++;
    }
  }
  console.log(`${quadradoPerfeito} numeros sao quadrados perfeitos`);
}
identificarNumero(0);
