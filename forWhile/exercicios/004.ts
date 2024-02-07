function apenasImpar(numero1: number, numero2: number): void {
    while (numero1 < numero2) {
      if (numero1 % 2 !== 0) {
        console.log(numero1);
      }
      numero1++;
    }
  }
  apenasImpar(1, 20);
  