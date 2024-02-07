function mostrarNumerosIncrementais(m: number, i: number, n: number) {
    for (let count = 1; count <= n; count++) {
      console.log(m);
      m += i;
    }
  }
  mostrarNumerosIncrementais(1, 2, 10);
  