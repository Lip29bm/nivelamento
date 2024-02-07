function salario(salarioInicial: number): void {
    const gratificacao: number = 1.05;
    const imposto: number = 0.93;
    let salarioComBonus = salarioInicial * gratificacao;
    let salarioFinal = salarioComBonus * imposto;
    console.log(salarioFinal);
  }
  salario(1000);
  