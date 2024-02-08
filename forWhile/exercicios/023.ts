import readline from "readline-sync"
function raizQuadrada ():void{ 
let valor:number= Number(readline.question(("Digite um numero:")))
let j:number=1
let raiz:number=0
while(valor>=j){
    valor-=j
    raiz++
    j+=2
    
}
console.log(raiz)
}
raizQuadrada()