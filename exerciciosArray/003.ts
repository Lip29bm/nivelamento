import readline from "readline-sync";
function separaNumeros(): void {
  let lista: number[] = [];
  let listaPositiva: number[] = [];
  let listaNegativa: number[] = [];
  for (let i: number = 0; i < 8; i++) {
    let preenchendoLista: number = Number(
      readline.question(`insira um numero: `)
    );
    lista.push(preenchendoLista);
  }
  for (let j: number = 0; j < lista.length; j++) {
    if (lista[j] < 0) {
      listaNegativa.push(lista[j]);
    } else if (lista[j] > j) {
      listaPositiva.push(lista[j]);
    }
  }
  console.log(
    `No grupo de numeros (${lista}), (${listaPositiva}) sao positivos e (${listaNegativa}) sao negativos`
  );
}
separaNumeros();
