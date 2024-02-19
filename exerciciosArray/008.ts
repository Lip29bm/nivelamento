import readline from "readline-sync";
function listaDeProdutos(menorQueDez:number,entreDezETrinta:number, maiorQueTrinta:number):void{
  type Produto = {
    nome: string
    custo:number
    preco:number
    }
  const produtos: Produto[] = []
    for(let i:number =1; i <=50; i++){
     const novoProduto: Produto = {  
      nome: String(readline.question("Digite o nome do produto: ")),
      custo: Number(readline.question("Digite o custo do produto: ")),
      preco: Number(readline.question("Digite o preco do produto: "))
      }
      produtos.push(novoProduto)
    }
    for(let i:number =0; i < produtos.length; i++){
     let lucro:number = produtos[i].preco  - produtos[i].custo
     let porcentagemDeLucro: number = (lucro / produtos[i].custo) * 100
     if(porcentagemDeLucro < 10 ){
     menorQueDez ++
     } else if(porcentagemDeLucro < 30){ 
     entreDezETrinta ++
      } else{
        maiorQueTrinta ++
      }
     }
     console.log(menorQueDez)
     console.log(entreDezETrinta)
     console.log(maiorQueTrinta)
}
listaDeProdutos(0, 0, 0)
