type Turma={
    nome:string,
    media:number,
    aprovada:boolean
}
function verificaAlunas():void{
const alunas = [
    { nome: "Ashley", prova: { p1: 5.6, p2: 6.7, p3: 9 } },
    { nome: "Sabrina", prova: { p1: 6.3, p2: 7.5, p3: 10 } },
    { nome: "Samantha", prova: { p1: 8, p2: 9.2, p3: 7 } },
    { nome: "Andreia", prova: { p1: 9, p2: 8, p3: 10 } },
    { nome: "Raquel", prova: { p1: 10, p2: 9.7, p3: 5 } },
    { nome: "Amanda", prova: { p1: 2, p2: 4.6, p3: 9.9 } },
    { nome: "Pietra", prova: { p1: 8.3, p2: 3.1, p3: 9.8 } },
    { nome: "Jaqueline", prova: { p1: 3.4, p2: 7.2, p3: 6.8 } },
    { nome: "Alessandra", prova: { p1: 1.4, p2: 2.7, p3: 6.9 } },
    { nome: "Jane Kelly", prova: { p1: 7, p2: 5.5, p3: 9.1 } },
]
const turma:Turma[]=[]
const alunasReprovadas:string[]=[]
const alunasAprovadas:string[]=[]
const todaAsMedias:number[] =[] 
let maiorMedia:number=0
let melhorAluna:string=``
let menorMedia:number=10
let piorAluna:string=``
let media:number=0
let notaTotalDaTurma:number=0
let mediaDaTurma:number
const medias =alunas.map((aluna)=>{
    const statusDaAluna:Turma={
        nome:``,
        media:0,
        aprovada:false
    }
    statusDaAluna.nome= aluna.nome
    media = (aluna.prova.p1 + aluna.prova.p2+ aluna.prova.p3)/3
    media = parseFloat(media.toFixed(1))
    todaAsMedias.push(media)
    statusDaAluna.media=media
    notaTotalDaTurma+=media
if(media>maiorMedia){
    maiorMedia=media
    melhorAluna=aluna.nome
}
if(media<menorMedia){
    menorMedia=media
    piorAluna=aluna.nome
}
    if(media>6){
        alunasAprovadas.push(aluna.nome)
        statusDaAluna.aprovada=true
    }else{
        alunasReprovadas.push(aluna.nome)
    }
    turma.push(statusDaAluna)
})
mediaDaTurma=(notaTotalDaTurma/alunas.length+1)
console.log(todaAsMedias)
console.log(`lista de alunas que foram aprovadas:
${alunasAprovadas}`)
console.log(`lista de alunas que foram reprovadas:
${alunasReprovadas}`)
console.log(turma)
console.log(`a aluna com a maior media foi a ${melhorAluna}`)
console.log(`a aluna com a pior media foi a ${piorAluna}`)
console.log(`a media geral da turma e ${mediaDaTurma}`)
}
verificaAlunas()