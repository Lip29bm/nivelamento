import readline from "readline-sync";
function empresa(
  horaTrabalhada: number,
  descontoSalarioLiquidoMascuino: number,
  descontoSalarioLiquidoFeminino: number
): void {
  let salarioBruto: number = 0;
  let salarioLiquido: number = 0;
  let salarioTotalFeminino: number = 0;
  let mediaFeminina: number = 0;
  let mediaSalarioFeminino: number = 0;
  let salarioTotalMasculino: number = 0;
  let mediaMasculina: number = 0;
  let mediaSalarioMasculino: number = 0;
  let i: number = 0;
  while (i <= 6) {
    let codigoDeFuncionario: number = Number(
      readline.question(`insira o codigo do funcionario:`)
    );
    if (codigoDeFuncionario <= -11) {
      break;
    }
    let sexoFuncionario: string = String(
      readline.question(`insira o sexo do funcionario:`)
    );
    let horasTrabalhadasDoFuncionario: number = Number(
      readline.question(`insira a quanidade de horas trabalhadas:`)
    );
    if (sexoFuncionario == "f") {
      salarioBruto = horasTrabalhadasDoFuncionario * horaTrabalhada;
      salarioLiquido = salarioBruto * descontoSalarioLiquidoFeminino;
      salarioTotalFeminino += salarioLiquido;
      mediaFeminina++;
    } else {
      salarioBruto = horasTrabalhadasDoFuncionario * horaTrabalhada;
      salarioLiquido = salarioBruto * descontoSalarioLiquidoMascuino;
      salarioTotalMasculino += salarioLiquido;
      mediaMasculina++;
    }
    i++;
  }
  mediaSalarioFeminino = salarioTotalFeminino / mediaFeminina;
  mediaSalarioMasculino = salarioTotalMasculino / mediaMasculina;
  console.log(
    `a media de salario masculino e de ${mediaSalarioMasculino} e a feminina e de ${mediaSalarioFeminino}`
  );
}
empresa(26.9, 0.1, 0.06);
