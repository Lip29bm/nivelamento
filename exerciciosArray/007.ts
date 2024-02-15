import readline from "readline-sync";
function vendas(bonus: number, totalVendas: number, maisVendido: number): void {
  let codigoProduto: number[] = [];
  let precoProduto: number[] = [];
  let produtoVendido: number[] = [];
  for (let i: number = 0; i < 10; i++) {
    codigoProduto.push(
      Number(readline.question(`digite o codigo do produto: `))
    );
    precoProduto.push(Number(readline.question(`digite o preco do produto: `)));
    produtoVendido.push(
      Number(readline.question(`quantas vezes esse produto foi vendido: `))
    );
  }
  for (let i: number = 0; i < 10; i++) {
    console.log(
      `o produto: ${codigoProduto[i]}, foi vendido ${produtoVendido[i]} vezes por ${precoProduto[i]} reais`
    );
    totalVendas += precoProduto[i] * produtoVendido[i];
    if (maisVendido < produtoVendido[i]) {
      maisVendido = produtoVendido[i];
    }
  }
  const index = produtoVendido.findIndex((maisVendidoIndex) => {
    return maisVendidoIndex >= maisVendido;
  });
  bonus = totalVendas * 0.05;
  console.log(bonus);
  console.log(
    `o produto mais vendido foi o ${codigoProduto[index]}, vendido a ${precoProduto[index]}, ${produtoVendido[index]} vezes`
  );
}
vendas(0, 0, 0);
