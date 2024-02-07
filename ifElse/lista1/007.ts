function reajuste(salarioAtual: number, salarioMinimo: number): void {
    if (salarioAtual <= salarioMinimo) {
      let salarioReajustado: number = salarioAtual * 1.2;
      console.log(salarioReajustado);
    } else {
      let salarioReajustado: number = salarioAtual * 1.1;
      console.log(salarioReajustado);
    }
  }
  reajuste(2501, 2500);
  