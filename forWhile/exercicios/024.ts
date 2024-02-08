import readline from "readline-sync"
function numero(valorNegativo:number){ 
  for(let i:number = 1; i<=5; i++){ 
  let valorA:number = Number(readline.question("Digite um numero"))
    if(valorA < 0){ 
    valorNegativo ++
    }
  }
  console.log(valorNegativo + " Numeros sao negativos")
}
numero(0)