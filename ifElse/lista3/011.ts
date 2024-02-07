let comparados: number[] = [8, 25, 5, 34];
function indentificarValor():void {
  let maximo: number = Math.max(...comparados);
  console.log(maximo);
  let minimo: number = Math.min(...comparados);
  console.log(minimo);
}
indentificarValor();
