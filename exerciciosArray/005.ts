function misturaArray(): void {
  let lista1: number[] = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  let lista2: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  let lista3: number[] = [];
  for (let i = 0; i < lista1.length; i++) {
    lista3.push(lista1[i]);
    lista3.push(lista2[i]);
  }
  console.log(lista3);
}
misturaArray();
