function localizacao(numero: number): void {
  numero > 20 && numero < 90
    ? console.log(`o numero ${numero} se encontra entr 20 e 90`)
    : console.log(`o numero ${numero} nao se encontra entr 20 e 90`);
}
localizacao(830);
