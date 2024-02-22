import readline from "readline-sync";
type Cliente = {
  nome: string;
  dvdsLocados: number;
};
function calculaLocacoesGratuitas(): void {
  const clientes: Cliente[] = [];
  let numeroDeClientes: number = 8;
  while (numeroDeClientes > 0) {
    let entrada: Cliente = {
      nome: readline.question(`informe o nome do cliente: `),
      dvdsLocados: Number(readline.question(`informe a quantia de dvds locados em 2012: `)),
    };
    clientes.push(entrada)
    numeroDeClientes--;
  }
  clientes.forEach(cliente => {
    const locacoesGratis = Math.floor(cliente.dvdsLocados /10)
    console.log(`o cliente ${cliente.nome} possui ${locacoesGratis} locacoes gratuitas`)
  });
}
calculaLocacoesGratuitas()