import readline from "readline-sync";
function variasOperacoes(
  quantiaPar: number,
  quantiaImpar: number,
  mediaPar: number,
  somaPar:number,
  quantiaTotal: number,
  somaTotal: number,
  mediaGeral: number
) {
  let i: number = 0;
  while (i < 20) {
    let numeros: number = Number(readline.question("digite um numero: "));
    if (numeros <= 0) {
      break;
    }
    quantiaTotal++;
    somaTotal += numeros;
    mediaGeral = somaTotal / quantiaTotal;
    if (numeros % 2 === 0) {
      somaPar += numeros;
      quantiaPar++;
    } else if (numeros % 2 !== 0) {
      quantiaImpar++;
    }
    mediaPar = somaPar / quantiaPar;
  }
  console.log(
    `foram digitados ${quantiaPar} pares e ${quantiaImpar} impares, a media dos numeros pares foi ${mediaPar} e a media geral foi ${mediaGeral}`
  );
}
variasOperacoes(0, 0, 0, 0, 0, 0, 0);
