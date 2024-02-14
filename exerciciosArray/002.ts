function multiplicando(): void {
  let lista: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  let listaMultiplicada: number[] = [];
  for (let i: number = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      let par: number = lista[i] * 2;
      listaMultiplicada.push(par);
    } else {
      let impar: number = lista[i] * 3;
      listaMultiplicada.push(impar);
    }
  }
  console.log(listaMultiplicada);
}
multiplicando();
