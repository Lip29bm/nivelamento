function trigonometria(cateto1: number, cateto2: number): void {
    let somaDosCatetos: number = cateto1 ** 2 + cateto2 ** 2;
    let hipotenusa: number = somaDosCatetos ** 0.5;
    console.log(hipotenusa);
  }
  trigonometria(4, 3);
  