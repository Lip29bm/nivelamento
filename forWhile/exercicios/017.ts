let mediaEscolar:{nome:string,media:number}[]=[]
let nomes: string[]=["carla","joao","marcos","lucia","eduardo"]
let quantiaDeAlunos:number=0
let mediaIndividual:number[]=[4.5,8,5.4,9,2.8,]
let mediaTotal:number=0
for(let i :number=0;i<=nomes.length && i<=mediaIndividual.length;i++){
    if(nomes[i] === "fim"){
        break;
    }
    quantiaDeAlunos++
    mediaTotal+=mediaIndividual[i]
mediaEscolar.push({nome:nomes[i], media:mediaIndividual[i]})

}
console.log(quantiaDeAlunos)
console.log(mediaTotal)