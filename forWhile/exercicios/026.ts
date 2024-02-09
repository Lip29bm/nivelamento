import readline from "readline-sync"

function pesquisa ( 
    mediaDoSalarioDaPopulacao:number,
    mediaDoNumeroDeFilhos:number,
    maiorSalario:number,
    pessoasComAteMil:number
    ):void{
        let quantiaDeRespostas:number = 0
        let totalDeFilhos:number = 0
        let totalDoSalário:number = 0
   for(let j:number = 1; j<=5; j++){
  let numeroDeFilhos:number = Number(readline.question("Numero de filhos?"))
  let salario:number = Number(readline.question("Qual é o seu salário?"))
    quantiaDeRespostas ++
    totalDeFilhos += numeroDeFilhos
    totalDoSalário += salario 
    if(salario > maiorSalario){
        maiorSalario = salario
    }if(salario < 1000){
        pessoasComAteMil ++
    }
} 
mediaDoSalarioDaPopulacao = totalDoSalário / quantiaDeRespostas
mediaDoNumeroDeFilhos = totalDeFilhos / quantiaDeRespostas

console.log('A media do salario da populacao e: ' + mediaDoSalarioDaPopulacao)
console.log('A media do numero de filhos '+ mediaDoNumeroDeFilhos)
console.log('O maior salario e: ' + maiorSalario)
console.log('A quantidades de pessoas com salario ate 1.000 e: '+ pessoasComAteMil)
}
pesquisa(0, 0, 0, 0)