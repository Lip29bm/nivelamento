import readline from "readline-sync"
function votacao() :void{
let votos:number[]=[]
let votos1:number=0
let votos2:number=0
let votos3:number=0
for(let i :number=0;i<10;i++){
    let voto:number= Number(readline.question(`vote no candidato 1, 2 ou 3: `))
    votos.push(voto)
    if(voto===1){
        votos1++
    }else if(voto===2){
        votos2++
    } else if(voto===3){
        votos3++
    }else{
        console.log(`candidato nao identificado`)
    }
}
if(votos1>votos2 && votos1>votos3){
    console.log(`candidato 1 venceu com ${votos1} votos`)
}else if(votos2>votos1 && votos2>votos3){
    console.log(`candidato 2 venceu com ${votos2} votos`)
}else if(votos3>votos1 && votos3>votos2){
    console.log(`candidato 3 venceu com ${votos3} votos`)
}
}
votacao()