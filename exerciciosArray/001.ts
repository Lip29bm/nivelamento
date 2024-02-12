function inverterArray(): void {
  let lista: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let listaInvertida: number[] = [];
  for (let i: number = lista.length - 1; i >= 0; i--) {
    listaInvertida.push(lista[i]);
  }
  console.log(listaInvertida);
}
inverterArray();
