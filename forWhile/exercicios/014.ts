import readline from "readline-sync";
function indentificandoDivisores(
  divisiveisPor2e3: string,
  divisiveisPor2e5: string
) {
  for (let i: number = 0; i <= 10; i++) {
    let numeros: number = Number(readline.question("digite um numero"));
    if (numeros < 0) {
      break;
    }
    if (numeros % 2 === 0 && numeros % 5 === 0) {
      divisiveisPor2e5 = divisiveisPor2e5 + String(numeros) + "";
    }
    if (numeros % 2 === 0 && numeros % 3 === 0) {
      divisiveisPor2e3 = divisiveisPor2e3 + String(numeros) + "";
    }
  }
  console.log(
    `${divisiveisPor2e3} sao divisiveis por 2 e 3, e ${divisiveisPor2e5} sao divisiveis por 2 e 5`
  );
}
indentificandoDivisores("", "");
