import readline from "readline-sync";
function tresMaiores(
  maior: number,
  segundoMaior: number,
  terceiroMaior: number
): void {
  for (let i: number = 0; i <= 10; i++) {
    let numeroInserido: number = Number(readline.question(`digite um numero:`));
    if (numeroInserido > maior) {
      terceiroMaior = segundoMaior;
      segundoMaior = maior;
      maior = numeroInserido;
    } else if (numeroInserido > segundoMaior) {
      terceiroMaior = segundoMaior;
      segundoMaior = numeroInserido;
    } else if (
      numeroInserido > terceiroMaior) {
      terceiroMaior = numeroInserido;
    }
  }
  console.log(
    `o maior numero inserido foi ${maior}, o segundo maior foi ${segundoMaior} e o terceiro maior foi ${terceiroMaior}`
  );
}
tresMaiores(0, 0, 0);
