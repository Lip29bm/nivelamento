import readline from "readline-sync";
type resposta = {
  numero: number;
  aparicoes: number;
};
function vetorA() {
  const numeros: number[] = [];
  const repeticoes: resposta[] = [];
  let contagem: number = 0;
  while (contagem <= 5) {
    numeros.push(Number(readline.question(`Digite um numero: `)));
    contagem++;
  }
  for (let i: number = 0; i < numeros.length; i++) {
    let numeroRepetido: number = 0;
    for (let j: number = 0; j < numeros.length; j++) {
      if (i !== j && numeros[i] === numeros[j]) {
        numeroRepetido++;
      }
    }
    if (
      numeroRepetido > 0 &&
      !repeticoes.some((achado) => achado.numero === numeros[i])
    ) {
      const parte: resposta = {
        numero: numeros[i],
        aparicoes: numeroRepetido + 1,
      };
      repeticoes.push(parte);
    }
  }
  console.log(repeticoes);
}
vetorA();
