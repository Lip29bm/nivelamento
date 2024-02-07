function salarioDeUmFuncionario(
    salario: number,
    percentualDeAumento: number
  ): void {
    let novoSalario = salario * percentualDeAumento;
    console.log(novoSalario);
    let aumento = percentualDeAumento;
    console.log(aumento);
  }
  salarioDeUmFuncionario(2.0, 1.4);
  