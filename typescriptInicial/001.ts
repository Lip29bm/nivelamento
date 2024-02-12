import  readline from "readline-sync"
function contaOcorrencias():void{
    let palavra:string = String(readline.question("Escreva uma palavra: "))
    let letrasSeparadas:string[] = []
    let letra:string = String(readline.question("Escolha uma letra: "))
    let letraQuantia:number = 0
   for (let i:number =0; i < palavra.length; i++){
    letrasSeparadas.push(palavra.split('')[i])
   }
   for(let j:number = 0; j < letrasSeparadas.length; j++){
     if(letrasSeparadas[j] === letra){
        letraQuantia ++
     }
   }
   console.log(letraQuantia)
}
contaOcorrencias()