function divisao(numero1: number, numero2: number): void {
    if (numero2 >= 0) {
      let resultado: number = numero1 / numero2;
      console.log(resultado);
    } else
      console.log("o segundo numero inserid nao pode ser igual ou menor que 0");
  }
  divisao(10, 5);
  