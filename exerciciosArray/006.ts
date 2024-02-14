function intervaloMedia(): void {
  let lista: number[] = [
    5.2, 6, 3.4, 7.4, 5.6, 8, 5, 6.4, 8.5, 5, 7, 9, 3.5, 2.3, 7.8, 4, 6.4, 3,
    2.4, 5.6, 7.4, 7.4, 7, 4.6, 3.5, 2.4, 6.4, 3, 10, 7.4, 8.5, 2.4, 5.3, 6.4,
    2.4, 5.3, 6, 4.6, 3, 2.4, 7, 5, 8.5, 4.6, 4.3, 7, 8.6, 5.4, 3.5, 8.5,
  ];
  let quantia: number = 0;
  let somaTotal: number = 0;
  let media: number = 0;
  let notasNoLimiteDaMedia: number = 0;
  for (let i: number = 0; i < lista.length; i++) {
    quantia++;
    somaTotal += lista[i];
  }
  media = somaTotal / quantia;
  for (let j: number = 0; j < lista.length; j++) {
    if (lista[j] < media * 1.1 && lista[j] > media * 0.9) {
      notasNoLimiteDaMedia++;
    }
  }
  console.log(notasNoLimiteDaMedia);
}
intervaloMedia();
