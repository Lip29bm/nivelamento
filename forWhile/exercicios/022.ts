import readline from "readline-sync"
function numeros():void{ 
let numero1:number= Number(readline.question("Digite um numero:"))
let numero2:number= Number(readline.question("Digite um numero:"))
let quociente:number= 0
while(numero1>=numero2){
quociente++
numero1-=numero2

}
console.log(quociente)
}
numeros()