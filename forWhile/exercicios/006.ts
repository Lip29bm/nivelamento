function divisivelPorTres(numero1: number, numero2: number): void {
    while (numero1 <= numero2) {
      if (numero1 % 3 === 0) {
        console.log(numero1);
      }
      numero1++;
    }
  }
  divisivelPorTres(1, 20);
  