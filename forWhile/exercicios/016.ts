let medias:any[]=[6,"andre",5.5, "julia",8,"carol"]
let mediaPessoal:number=0
let aluno:any
for(let i:any=0;i<=medias.length;i++){
if(medias[i]>mediaPessoal){
    mediaPessoal=medias[i]
    aluno=medias[i+1]
}
}
console.log(mediaPessoal + aluno)