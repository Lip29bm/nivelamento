function inverterVetor(): void {
  let lista1: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  let vetorInvertido: number[] = [];
  for (let j: number = lista1.length - 1; j >= 0; j--) {
    vetorInvertido.push(lista1[j]);
  }
  console.log(vetorInvertido);
}
inverterVetor(); 
