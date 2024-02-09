import readline from "readline-sync"
function numerosDeArmstrong():void{
    let numeroInserido:string= String(readline.question(`insira o numero aqui: `))
    let algarismo:number[]=[]
    let resultado:number=0
    for(let i:number=0;i<numeroInserido.length;i++){
        algarismo.push(Number(numeroInserido[i]))
    }
    for(let j=0;j<algarismo.length;j++){
        resultado+= Math.pow(algarismo[j], algarismo.length)
    }
    if(resultado==Number(numeroInserido)){
        console.log(`Sim o numero ${Number(numeroInserido)} e um numero de armstrong`)
    }else{
        console.log(`Nao o numero ${Number(numeroInserido)} nao e um numero de armstrong`)
    }
}
numerosDeArmstrong()