function organizaArray(): void {
  let array: number[] = [
    3, 7, 2, 5, 12, 8, 10, 19, 20, 17, 13, 14, 11, 1, 9, 4, 6, 15, 16, 18,
  ];
  for (let i: number = 0; i < array.length; i++) {
    for (let j: number = 0; j < array.length; j++) {
      if (array[i] > array[j] && j > i) {
        array.splice(i, 0, array[j]);
        array.splice(j+1, 1);
      }
    }
  }
  console.log(array);
}
organizaArray();
