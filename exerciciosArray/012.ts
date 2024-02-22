import readline from "readline-sync";
function conjuntoDeNumeros(): void {
  let lista: number[] = [
    50, 29, 38, 36, 47, 18, 33, 48, 17, 8, 20, 32, 44, 26, 46, 39, 28, 10, 9, 6,
  ];
  for (let i: number = 0; i <= 5; i++) {
    let pergunta: number = Number(readline.question("Digite um numero: "));
    if (pergunta <= 0) {
      break;
    }let encontrado:boolean = false
    for (let j: number = 0; j < lista.length; j++) {
      if (pergunta === lista[j]) {
        encontrado = true
      }
    }if(encontrado === true){
        console.log("Numero existente na lista!")
    }else{
        console.log("Nao está na lista!")
    }
  }
}
conjuntoDeNumeros();
